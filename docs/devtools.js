(()=>{var H=class{constructor({trackGPU:t=!1,trackCPT:e=!1,trackHz:i=!1,trackFPS:s=!0,logsPerSecond:r=4,graphsPerSecond:l=30,samplesLog:a=40,samplesGraph:h=10,precision:u=2,maxTimestampPairs:p=2048}={}){this.gl=null,this.ext=null,this.gpuDevice=null,this.gpuBackend=null,this.renderer=null,this.activeQuery=null,this.gpuQueries=[],this.threeRendererPatched=!1,this.maxTimestampPairs=2048,this.webgpuNative=!1,this.gpuQuerySet=null,this.gpuResolveBuffer=null,this.gpuTimestampBufferSize=0,this.frameCursor=0,this.slotTypes=[],this.readBufferPool=[],this.inFlightFrames=[],this.poolWarnThreshold=8,this.warnedMapError=!1,this.warnedSlotOverflow=!1,this.warnedPoolGrowth=!1,this.frameTimes=[],this.frameTimesHead=0,this.renderCount=0,this.cpuStartTime=0,this.isRunningCPUProfiling=!1,this.totalCpuDuration=0,this.totalGpuDuration=0,this.totalGpuDurationCompute=0,this.averageFps={logs:[],graph:[]},this.averageCpu={logs:[],graph:[]},this.averageGpu={logs:[],graph:[]},this.averageGpuCompute={logs:[],graph:[]},this.trackGPU=t,this.trackCPT=e,this.trackHz=i,this.trackFPS=s,this.samplesLog=a,this.samplesGraph=h,this.precision=u,this.logsPerSecond=r,this.graphsPerSecond=l,this.maxTimestampPairs=Math.max(1,p);let c=performance.now();this.prevGraphTime=c,this.beginTime=c,this.prevTextTime=c,this.prevCpuTime=c}async init(t){if(!t){console.error('Stats: The "canvas" parameter is undefined.');return}if(!this.handleThreeRenderer(t)&&!await this.handleWebGPURenderer(t)&&!this.handleNativeWebGPU(t))if(this.initializeWebGL(t)){this.trackGPU&&this.initializeGPUTracking();return}else console.error("Stats-gl: Failed to initialize WebGL context")}handleNativeWebGPU(t){var e;return t&&typeof t.createCommandEncoder=="function"&&typeof t.createQuerySet=="function"&&t.queue?(this.gpuDevice=t,this.webgpuNative=!0,this.trackGPU&&((e=t.features)!=null&&e.has("timestamp-query"))&&(this.initializeWebGPUTiming(),this.onWebGPUTimestampSupported()),!0):!1}initializeWebGPUTiming(){if(!this.gpuDevice)return;let t=this.maxTimestampPairs*2;this.gpuTimestampBufferSize=t*8,this.gpuQuerySet=this.gpuDevice.createQuerySet({type:"timestamp",count:t}),this.gpuResolveBuffer=this.gpuDevice.createBuffer({size:this.gpuTimestampBufferSize,usage:GPUBufferUsage.QUERY_RESOLVE|GPUBufferUsage.COPY_SRC})}acquireReadBuffer(){if(!this.gpuDevice)return null;let t=this.readBufferPool.pop();if(t)return t;let e=this.inFlightFrames.length+this.readBufferPool.length+1;return e>this.poolWarnThreshold&&!this.warnedPoolGrowth&&(console.warn(`stats-gl: WebGPU timestamp readback pool grew to ${e} buffers \u2014 is update() being called every frame after queue.submit?`),this.warnedPoolGrowth=!0),this.gpuDevice.createBuffer({size:this.gpuTimestampBufferSize,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ})}handleThreeRenderer(t){return t.isWebGLRenderer&&!this.threeRendererPatched?(this.patchThreeRenderer(t),this.gl=t.getContext(),this.trackGPU&&this.initializeGPUTracking(),!0):!1}async handleWebGPURenderer(t){var e;return t.isWebGPURenderer?(this.renderer=t,(this.trackGPU||this.trackCPT)&&(t.backend.trackTimestamp=!0,t._initialized||await t.init(),t.hasFeature("timestamp-query")&&this.onWebGPUTimestampSupported()),this.info=t.info,this.gpuBackend=t.backend,this.gpuDevice=((e=t.backend)==null?void 0:e.device)||null,this.patchThreeWebGPU(t),!0):!1}onWebGPUTimestampSupported(){}initializeWebGL(t){if(t instanceof WebGL2RenderingContext)this.gl=t;else if(t instanceof HTMLCanvasElement||t instanceof OffscreenCanvas){if(this.gl=t.getContext("webgl2"),!this.gl)return console.error("Stats: Unable to obtain WebGL2 context."),!1}else return console.error("Stats: Invalid input type. Expected WebGL2RenderingContext, HTMLCanvasElement, or OffscreenCanvas."),!1;return!0}initializeGPUTracking(){this.gl&&(this.ext=this.gl.getExtension("EXT_disjoint_timer_query_webgl2"),this.ext&&this.onGPUTrackingInitialized())}onGPUTrackingInitialized(){}getTimestampWrites(t="render"){if(!this.webgpuNative||!this.gpuQuerySet)return;if(this.frameCursor>=this.maxTimestampPairs){this.warnedSlotOverflow||(console.warn(`stats-gl: WebGPU timestamp pair budget exhausted (maxTimestampPairs=${this.maxTimestampPairs}). Increase maxTimestampPairs in StatsOptions to instrument more passes.`),this.warnedSlotOverflow=!0);return}let e=this.frameCursor++;return this.slotTypes[e]=t,{querySet:this.gpuQuerySet,beginningOfPassWriteIndex:e*2,endOfPassWriteIndex:e*2+1}}begin(t){if(this.beginProfiling(),this.webgpuNative){this.frameCursor=0,this.slotTypes.length=0;return}!this.gl||!this.ext||(this.activeQuery&&this.gl.endQuery(this.ext.TIME_ELAPSED_EXT),this.activeQuery=this.gl.createQuery(),this.activeQuery&&this.gl.beginQuery(this.ext.TIME_ELAPSED_EXT,this.activeQuery))}end(t){if(this.renderCount++,this.webgpuNative&&t&&this.gpuQuerySet&&this.gpuResolveBuffer){let e=this.frameCursor;if(e>0){let i=e*2,s=i*8;t.resolveQuerySet(this.gpuQuerySet,0,i,this.gpuResolveBuffer,0);let r=this.acquireReadBuffer();r&&(t.copyBufferToBuffer(this.gpuResolveBuffer,0,r,0,s),this.inFlightFrames.push({buffer:r,pairCount:e,slotTypes:this.slotTypes.slice(0,e),mapPromise:null,ready:!1,error:null}))}this.endProfiling();return}this.gl&&this.ext&&this.activeQuery&&(this.gl.endQuery(this.ext.TIME_ELAPSED_EXT),this.gpuQueries.push({query:this.activeQuery}),this.activeQuery=null),this.endProfiling()}async resolveTimestampsAsync(){if(!this.webgpuNative)return this.totalGpuDuration;for(let t of this.inFlightFrames)t.mapPromise===null&&(t.mapPromise=t.buffer.mapAsync(GPUMapMode.READ).then(()=>{t.ready=!0},e=>{t.error=e,t.ready=!0}));for(;this.inFlightFrames.length>0&&this.inFlightFrames[0].ready;){let t=this.inFlightFrames.shift();if(t.error){this.warnedMapError||(console.warn("stats-gl: WebGPU timestamp mapAsync failed",t.error),this.warnedMapError=!0),this.totalGpuDuration=0,this.totalGpuDurationCompute=0,this.readBufferPool.push(t.buffer);continue}let e=new BigUint64Array(t.buffer.getMappedRange()),i=0,s=0;for(let r=0;r<t.pairCount;r++){let l=e[r*2],a=e[r*2+1],h=a>=l?Number(a-l):0;t.slotTypes[r]==="compute"?s+=h:i+=h}t.buffer.unmap(),this.readBufferPool.push(t.buffer),this.totalGpuDuration=i/1e6,this.totalGpuDurationCompute=s/1e6}return this.totalGpuDuration}processGpuQueries(){if(!(!this.gl||!this.ext)){this.totalGpuDuration=0;for(let t=this.gpuQueries.length-1;t>=0;t--){let e=this.gpuQueries[t],i=this.gl.getQueryParameter(e.query,this.gl.QUERY_RESULT_AVAILABLE),s=this.gl.getParameter(this.ext.GPU_DISJOINT_EXT);if(i&&!s){let l=this.gl.getQueryParameter(e.query,this.gl.QUERY_RESULT)*1e-6;this.totalGpuDuration+=l,this.gl.deleteQuery(e.query),this.gpuQueries.splice(t,1)}}}}processWebGPUTimestamps(){this.totalGpuDuration=this.info.render.timestamp,this.totalGpuDurationCompute=this.info.compute.timestamp}beginProfiling(){this.cpuStartTime=performance.now(),this.isRunningCPUProfiling=!0}endProfiling(){this.isRunningCPUProfiling&&(this.totalCpuDuration+=performance.now()-this.cpuStartTime,this.isRunningCPUProfiling=!1)}calculateFps(){let t=performance.now(),e=t-1e3;for(this.frameTimes.push(t);this.frameTimesHead<this.frameTimes.length&&this.frameTimes[this.frameTimesHead]<=e;)this.frameTimesHead++;return this.frameTimesHead>128&&(this.frameTimes=this.frameTimes.slice(this.frameTimesHead),this.frameTimesHead=0),Math.round(this.frameTimes.length-this.frameTimesHead)}updateAverages(){this.addToAverage(this.totalCpuDuration,this.averageCpu),this.addToAverage(this.totalGpuDuration,this.averageGpu),(this.info||this.webgpuNative)&&this.totalGpuDurationCompute!==void 0&&this.addToAverage(this.totalGpuDurationCompute,this.averageGpuCompute)}addToAverage(t,e){for(e.logs.push(t);e.logs.length>this.samplesLog;)e.logs.shift();for(e.graph.push(t);e.graph.length>this.samplesGraph;)e.graph.shift()}resetCounters(){this.renderCount=0,this.totalCpuDuration=0,this.beginTime=performance.now()}getData(){let t=this.averageFps.logs,e=this.averageCpu.logs,i=this.averageGpu.logs,s=this.averageGpuCompute.logs;return{fps:t.length>0?t[t.length-1]:0,cpu:e.length>0?e[e.length-1]:0,gpu:i.length>0?i[i.length-1]:0,gpuCompute:s.length>0?s[s.length-1]:0}}patchThreeWebGPU(t){let e=t.info.reset,i=this;t.info.reset=function(){i.beginProfiling(),e.call(this)}}patchThreeRenderer(t){let e=t.render,i=this;t.render=function(s,r){i.begin(),e.call(this,s,r),i.end()},this.threeRendererPatched=!0}dispose(){if(this.gl){if(this.activeQuery&&this.ext){try{this.gl.endQuery(this.ext.TIME_ELAPSED_EXT)}catch{}this.gl.deleteQuery(this.activeQuery),this.activeQuery=null}for(let t of this.gpuQueries)this.gl.deleteQuery(t.query);this.gpuQueries.length=0}this.gpuQuerySet&&(this.gpuQuerySet.destroy(),this.gpuQuerySet=null),this.gpuResolveBuffer&&(this.gpuResolveBuffer.destroy(),this.gpuResolveBuffer=null);for(let t of this.inFlightFrames){try{t.buffer.mapState==="mapped"&&t.buffer.unmap()}catch{}t.buffer.destroy()}this.inFlightFrames.length=0;for(let t of this.readBufferPool)t.destroy();this.readBufferPool.length=0,this.frameCursor=0,this.slotTypes.length=0,this.gpuTimestampBufferSize=0,this.warnedMapError=!1,this.warnedSlotOverflow=!1,this.warnedPoolGrowth=!1,this.webgpuNative=!1,this.gl=null,this.ext=null,this.info=void 0,this.gpuDevice=null,this.gpuBackend=null,this.renderer=null,this.frameTimes.length=0,this.frameTimesHead=0,this.averageFps.logs.length=0,this.averageFps.graph.length=0,this.averageCpu.logs.length=0,this.averageCpu.graph.length=0,this.averageGpu.logs.length=0,this.averageGpu.graph.length=0,this.averageGpuCompute.logs.length=0,this.averageGpuCompute.graph.length=0}};var x=class{constructor(t,e,i){this.id=0,this.name=t,this.fg=e,this.bg=i,this.gradient=null,this.PR=Math.round(typeof window<"u"&&window.devicePixelRatio||1),this.WIDTH=90*this.PR,this.HEIGHT=48*this.PR,this.TEXT_X=3*this.PR,this.TEXT_Y=2*this.PR,this.GRAPH_X=3*this.PR,this.GRAPH_Y=15*this.PR,this.GRAPH_WIDTH=84*this.PR,this.GRAPH_HEIGHT=30*this.PR,this.canvas=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(this.WIDTH,this.HEIGHT),this.canvas.width=this.WIDTH,this.canvas.height=this.HEIGHT,this.canvas.style.width="90px",this.canvas.style.height="48px",this.canvas.style.position="absolute",this.canvas.style.cssText="width:90px;height:48px;background-color: transparent !important;",this.context=this.canvas.getContext("2d"),this.initializeCanvas()}createGradient(){if(!this.context)throw new Error("No context");let t=this.context.createLinearGradient(0,this.GRAPH_Y,0,this.GRAPH_Y+this.GRAPH_HEIGHT),e,i=this.fg;switch(this.fg.toLowerCase()){case"#0ff":e="#006666";break;case"#0f0":e="#006600";break;case"#ff0":e="#666600";break;case"#e1e1e1":e="#666666";break;default:e=this.bg;break}return t.addColorStop(0,e),t.addColorStop(1,i),t}initializeCanvas(){this.context&&(this.context.imageSmoothingEnabled=!1,this.context.font="bold "+9*this.PR+"px Helvetica,Arial,sans-serif",this.context.textBaseline="top",this.gradient=this.createGradient(),this.context.fillStyle=this.bg,this.context.fillRect(0,0,this.WIDTH,this.HEIGHT),this.context.fillStyle=this.fg,this.context.fillText(this.name,this.TEXT_X,this.TEXT_Y),this.context.fillStyle=this.bg,this.context.globalAlpha=.9,this.context.fillRect(this.GRAPH_X,this.GRAPH_Y,this.GRAPH_WIDTH,this.GRAPH_HEIGHT))}update(t,e,i=0,s=""){if(!this.context||!this.gradient)return;let r=Math.min(1/0,t),l=Math.max(e,t);this.context.globalAlpha=1,this.context.fillStyle=this.bg,this.context.fillRect(0,0,this.WIDTH,this.GRAPH_Y);let a=`${t.toFixed(i)} ${this.name}`;this.context.fillStyle=this.fg,this.context.fillText(a,this.TEXT_X,this.TEXT_Y);let h=this.TEXT_X+this.context.measureText(a).width;s&&(this.context.fillStyle="#f90",this.context.fillText(s,h,this.TEXT_Y),h+=this.context.measureText(s).width),this.context.fillStyle=this.fg,this.context.fillText(` (${r.toFixed(i)}-${parseFloat(l.toFixed(i))})`,h,this.TEXT_Y)}updateGraph(t,e){if(!this.context||!this.gradient)return;t===0&&e===0&&(e=1),e=Math.max(e,t,.1),t=Math.max(t,0);let i=Math.round(this.GRAPH_X),s=Math.round(this.GRAPH_Y),r=Math.round(this.GRAPH_WIDTH),l=Math.round(this.GRAPH_HEIGHT),a=Math.round(this.PR);this.context.drawImage(this.canvas,i+a,s,r-a,l,i,s,r-a,l),this.context.fillStyle=this.bg,this.context.fillRect(i+r-a,s,a,l);let h=Math.min(l,Math.round(t/e*l));h>0&&(this.context.globalAlpha=.9,this.context.fillStyle=this.gradient,this.context.fillRect(i+r-a,s+(l-h),a,h)),this.context.globalAlpha=1}};var D=class extends x{constructor(t,e,i){super(t,e,i),this.vsyncValue=0,this.SMALL_HEIGHT=9*this.PR,this.HEIGHT=this.SMALL_HEIGHT,this.WIDTH=35*this.PR,this.TEXT_Y=0*this.PR,this.canvas.height=this.HEIGHT,this.canvas.width=this.WIDTH,this.canvas.style.height="9px",this.canvas.style.width="35px",this.canvas.style.cssText=`
            width: 35px;
            height: 9px;
            position: absolute;
            top: 0;
            left: 0;
            background-color: transparent !important;
            pointer-events: none;
        `,this.initializeCanvas()}initializeCanvas(){this.context&&(this.context.imageSmoothingEnabled=!1,this.context.font="bold "+9*this.PR+"px Helvetica,Arial,sans-serif",this.context.textBaseline="top",this.context.globalAlpha=1)}update(t,e,i=0){this.context&&(this.vsyncValue=t,this.context.clearRect(0,0,this.WIDTH,this.HEIGHT),this.context.globalAlpha=1,this.context.fillStyle=this.bg,this.context.fillText(`${t.toFixed(0)}Hz`,this.TEXT_X,this.TEXT_Y))}updateGraph(t,e){}setOffset(t,e){this.canvas.style.transform=`translate(${t}px, ${e}px)`}};var E=class extends x{constructor(t){super(t,"#fff","#111"),this.currentBitmap=null,this.sourceAspect=1,this.initializeCanvas()}initializeCanvas(){this.context&&(this.context.imageSmoothingEnabled=!0,this.context.font="bold "+9*this.PR+"px Helvetica,Arial,sans-serif",this.context.textBaseline="top",this.context.fillStyle="#000",this.context.fillRect(0,0,this.WIDTH,this.HEIGHT),this.drawLabelOverlay())}drawLabelOverlay(){this.context&&(this.context.fillStyle="rgba(0, 0, 0, 0.5)",this.context.fillRect(0,0,this.WIDTH,this.GRAPH_Y),this.context.fillStyle=this.fg,this.context.fillText(this.name,this.TEXT_X,this.TEXT_Y))}setSourceSize(t,e){this.sourceAspect=t/e}updateTexture(t){if(!this.context)return;this.currentBitmap&&this.currentBitmap.close(),this.currentBitmap=t,this.context.fillStyle="#000",this.context.fillRect(0,0,this.WIDTH,this.HEIGHT);let e=this.WIDTH/this.HEIGHT,i,s,r,l;this.sourceAspect>e?(i=this.WIDTH,s=this.WIDTH/this.sourceAspect,r=0,l=(this.HEIGHT-s)/2):(s=this.HEIGHT,i=this.HEIGHT*this.sourceAspect,r=(this.WIDTH-i)/2,l=0),this.context.drawImage(t,r,l,i,s),this.drawLabelOverlay()}setLabel(t){this.name=t,this.drawLabelOverlay()}update(t,e,i=0,s=""){}updateGraph(t,e){}dispose(){this.currentBitmap&&(this.currentBitmap.close(),this.currentBitmap=null)}};var C=class{constructor(t,e=90,i=48){this.previewFbo=null,this.previewTexture=null,this.gl=t,this.previewWidth=e,this.previewHeight=i,this.pixels=new Uint8Array(e*i*4),this.flippedPixels=new Uint8Array(e*i*4),this.initResources()}resize(t,e){t===this.previewWidth&&e===this.previewHeight||(this.previewWidth=t,this.previewHeight=e,this.pixels=new Uint8Array(t*e*4),this.flippedPixels=new Uint8Array(t*e*4),this.dispose(),this.initResources())}initResources(){let t=this.gl;this.previewTexture=t.createTexture(),t.bindTexture(t.TEXTURE_2D,this.previewTexture),t.texImage2D(t.TEXTURE_2D,0,t.RGBA8,this.previewWidth,this.previewHeight,0,t.RGBA,t.UNSIGNED_BYTE,null),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),this.previewFbo=t.createFramebuffer(),t.bindFramebuffer(t.FRAMEBUFFER,this.previewFbo),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,this.previewTexture,0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindTexture(t.TEXTURE_2D,null)}async capture(t,e,i,s="default"){let r=this.gl,l=r.getParameter(r.READ_FRAMEBUFFER_BINDING),a=r.getParameter(r.DRAW_FRAMEBUFFER_BINDING);r.bindFramebuffer(r.READ_FRAMEBUFFER,t),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,this.previewFbo),r.blitFramebuffer(0,0,e,i,0,0,this.previewWidth,this.previewHeight,r.COLOR_BUFFER_BIT,r.LINEAR),r.bindFramebuffer(r.READ_FRAMEBUFFER,this.previewFbo),r.readPixels(0,0,this.previewWidth,this.previewHeight,r.RGBA,r.UNSIGNED_BYTE,this.pixels),r.bindFramebuffer(r.READ_FRAMEBUFFER,l),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,a);let h=this.flipY(this.pixels,this.previewWidth,this.previewHeight),u=new ImageData(new Uint8ClampedArray(h),this.previewWidth,this.previewHeight);return createImageBitmap(u)}flipY(t,e,i){let s=e*4;for(let r=0;r<i;r++){let l=r*s,a=(i-1-r)*s;this.flippedPixels.set(t.subarray(l,l+s),a)}return this.flippedPixels}removeSource(t){}dispose(){let t=this.gl;this.previewFbo&&(t.deleteFramebuffer(this.previewFbo),this.previewFbo=null),this.previewTexture&&(t.deleteTexture(this.previewTexture),this.previewTexture=null)}},F=class{constructor(t,e=90,i=48){this.previewTexture=null,this.stagingBuffer=null,this.blitPipeline=null,this.sampler=null,this.bindGroupLayout=null,this.initialized=!1,this.device=t,this.previewWidth=e,this.previewHeight=i,this.pixelsBuffer=new Uint8ClampedArray(e*i*4)}resize(t,e){t===this.previewWidth&&e===this.previewHeight||(this.previewWidth=t,this.previewHeight=e,this.pixelsBuffer=new Uint8ClampedArray(t*e*4),this.previewTexture&&this.previewTexture.destroy(),this.stagingBuffer&&this.stagingBuffer.destroy(),this.previewTexture=null,this.stagingBuffer=null,this.initialized&&this.createSizeResources())}createSizeResources(){let t=this.device;this.previewTexture=t.createTexture({size:{width:this.previewWidth,height:this.previewHeight},format:"rgba8unorm",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.COPY_SRC});let e=Math.ceil(this.previewWidth*4/256)*256;this.stagingBuffer=t.createBuffer({size:e*this.previewHeight,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ})}async initResources(){if(this.initialized)return;let t=this.device;this.createSizeResources(),this.sampler=t.createSampler({minFilter:"linear",magFilter:"linear"});let e=t.createShaderModule({code:`
        @group(0) @binding(0) var texSampler: sampler;
        @group(0) @binding(1) var texInput: texture_2d<f32>;

        struct VertexOutput {
          @builtin(position) position: vec4f,
          @location(0) uv: vec2f
        }

        @vertex
        fn vertexMain(@builtin(vertex_index) vertexIndex: u32) -> VertexOutput {
          var positions = array<vec2f, 3>(
            vec2f(-1.0, -1.0),
            vec2f(3.0, -1.0),
            vec2f(-1.0, 3.0)
          );
          var uvs = array<vec2f, 3>(
            vec2f(0.0, 1.0),
            vec2f(2.0, 1.0),
            vec2f(0.0, -1.0)
          );

          var output: VertexOutput;
          output.position = vec4f(positions[vertexIndex], 0.0, 1.0);
          output.uv = uvs[vertexIndex];
          return output;
        }

        @fragment
        fn fragmentMain(@location(0) uv: vec2f) -> @location(0) vec4f {
          return textureSample(texInput, texSampler, uv);
        }
      `});this.bindGroupLayout=t.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,sampler:{type:"filtering"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float"}}]}),this.blitPipeline=t.createRenderPipeline({layout:t.createPipelineLayout({bindGroupLayouts:[this.bindGroupLayout]}),vertex:{module:e,entryPoint:"vertexMain"},fragment:{module:e,entryPoint:"fragmentMain",targets:[{format:"rgba8unorm"}]},primitive:{topology:"triangle-list"}}),this.initialized=!0}async capture(t){if(await this.initResources(),!this.previewTexture||!this.stagingBuffer||!this.blitPipeline||!this.sampler||!this.bindGroupLayout)return null;let e=this.device,i=e.createBindGroup({layout:this.bindGroupLayout,entries:[{binding:0,resource:this.sampler},{binding:1,resource:t.createView()}]}),s=e.createCommandEncoder(),r=s.beginRenderPass({colorAttachments:[{view:this.previewTexture.createView(),loadOp:"clear",storeOp:"store",clearValue:{r:0,g:0,b:0,a:1}}]});r.setPipeline(this.blitPipeline),r.setBindGroup(0,i),r.draw(3),r.end();let l=Math.ceil(this.previewWidth*4/256)*256;s.copyTextureToBuffer({texture:this.previewTexture},{buffer:this.stagingBuffer,bytesPerRow:l},{width:this.previewWidth,height:this.previewHeight}),e.queue.submit([s.finish()]),await this.stagingBuffer.mapAsync(GPUMapMode.READ);let a=new Uint8Array(this.stagingBuffer.getMappedRange());for(let u=0;u<this.previewHeight;u++){let p=u*l,c=u*this.previewWidth*4;this.pixelsBuffer.set(a.subarray(p,p+this.previewWidth*4),c)}this.stagingBuffer.unmap();let h=new ImageData(new Uint8ClampedArray(this.pixelsBuffer),this.previewWidth,this.previewHeight);return createImageBitmap(h)}dispose(){this.previewTexture&&this.previewTexture.destroy(),this.stagingBuffer&&this.stagingBuffer.destroy(),this.previewTexture=null,this.stagingBuffer=null,this.blitPipeline=null,this.sampler=null,this.bindGroupLayout=null,this.initialized=!1}};function Q(n,t){return n.isWebGLRenderTarget&&n.__webglFramebuffer?{framebuffer:n.__webglFramebuffer,width:n.width||1,height:n.height||1}:null}function q(n,t){if(n.isRenderTarget&&n.texture&&t.get){let e=t.get(n.texture);return e?.texture||null}return null}var U=class T extends H{constructor({trackGPU:t=!1,trackCPT:e=!1,trackHz:i=!1,trackFPS:s=!0,logsPerSecond:r=4,graphsPerSecond:l=30,samplesLog:a=40,samplesGraph:h=10,precision:u=2,minimal:p=!1,horizontal:c=!0,mode:v=0}={}){super({trackGPU:t,trackCPT:e,trackHz:i,trackFPS:s,logsPerSecond:r,graphsPerSecond:l,samplesLog:a,samplesGraph:h,precision:u}),this.fpsPanel=null,this.msPanel=null,this.gpuPanel=null,this.gpuPanelCompute=null,this.vsyncPanel=null,this.workerCpuPanel=null,this.texturePanels=new Map,this.texturePanelRow=null,this.textureCaptureWebGL=null,this.textureCaptureWebGPU=null,this.textureSourcesWebGL=new Map,this.textureSourcesWebGPU=new Map,this.texturePreviewWidth=90,this.texturePreviewHeight=48,this.lastRendererWidth=0,this.lastRendererHeight=0,this.textureUpdatePending=!1,this.updateCounter=0,this.lastMin={},this.lastMax={},this.lastValue={},this.VSYNC_RATES=[{refreshRate:60,frameTime:16.67},{refreshRate:75,frameTime:13.33},{refreshRate:90,frameTime:11.11},{refreshRate:120,frameTime:8.33},{refreshRate:144,frameTime:6.94},{refreshRate:165,frameTime:6.06},{refreshRate:240,frameTime:4.17}],this.detectedVSync=null,this.frameTimeHistory=[],this.HISTORY_SIZE=120,this.VSYNC_THRESHOLD=.05,this.lastFrameTime=0,this.externalData=null,this.hasNewExternalData=!1,this.isWorker=!1,this.averageWorkerCpu={logs:[],graph:[]},this.handleClick=_=>{_.preventDefault(),this.showPanel(++this.mode%this.dom.children.length)},this.handleResize=()=>{this.fpsPanel&&this.resizePanel(this.fpsPanel),this.msPanel&&this.resizePanel(this.msPanel),this.workerCpuPanel&&this.resizePanel(this.workerCpuPanel),this.gpuPanel&&this.resizePanel(this.gpuPanel),this.gpuPanelCompute&&this.resizePanel(this.gpuPanelCompute)},this.mode=v,this.horizontal=c,this.minimal=p,this.dom=document.createElement("div"),this.initializeDOM(),this._panelId=0,this.trackFPS&&(this.fpsPanel=this.addPanel(new T.Panel("FPS","#0ff","#002")),this.msPanel=this.addPanel(new T.Panel("CPU","#0f0","#020"))),this.trackGPU&&(this.gpuPanel=this.addPanel(new T.Panel("GPU","#ff0","#220"))),this.trackCPT&&(this.gpuPanelCompute=this.addPanel(new T.Panel("CPT","#e1e1e1","#212121"))),this.trackHz===!0&&(this.vsyncPanel=new D("","#f0f","#202"),this.dom.appendChild(this.vsyncPanel.canvas),this.vsyncPanel.setOffset(56,35)),this.setupEventListeners()}initializeDOM(){this.dom.style.cssText=`
      position: fixed;
      top: 0;
      left: 0;
      opacity: 0.9;
      z-index: 10000;
      ${this.minimal?"cursor: pointer;":""}
    `}setupEventListeners(){this.minimal?(this.dom.addEventListener("click",this.handleClick),this.showPanel(this.mode)):window.addEventListener("resize",this.handleResize)}updateTexturePreviewDimensions(){var t,e;if(!this.renderer)return;let i=((t=this.renderer.domElement)==null?void 0:t.width)||0,s=((e=this.renderer.domElement)==null?void 0:e.height)||0;if(i===this.lastRendererWidth&&s===this.lastRendererHeight||i===0||s===0)return;this.lastRendererWidth=i,this.lastRendererHeight=s;let r=i/s,l=90/48,a,h;if(r>l?(a=90,h=Math.round(90/r)):(h=48,a=Math.round(48*r)),a=Math.max(a,16),h=Math.max(h,16),a!==this.texturePreviewWidth||h!==this.texturePreviewHeight){this.texturePreviewWidth=a,this.texturePreviewHeight=h,this.textureCaptureWebGL&&this.textureCaptureWebGL.resize(a,h),this.textureCaptureWebGPU&&this.textureCaptureWebGPU.resize(a,h);for(let u of this.texturePanels.values())u.setSourceSize(i,s)}}onWebGPUTimestampSupported(){}onGPUTrackingInitialized(){}setData(t){if(this.externalData=t,this.hasNewExternalData=!0,!this.isWorker&&this.msPanel){this.isWorker=!0,this.workerCpuPanel=new T.Panel("WRK","#f90","#220");let e=this.msPanel.id+1;this.workerCpuPanel.id=e,this.gpuPanel&&this.gpuPanel.id>=e&&(this.gpuPanel.id++,this.resizePanel(this.gpuPanel)),this.gpuPanelCompute&&this.gpuPanelCompute.id>=e&&(this.gpuPanelCompute.id++,this.resizePanel(this.gpuPanelCompute));let i=this.msPanel.canvas;i.nextSibling?this.dom.insertBefore(this.workerCpuPanel.canvas,i.nextSibling):this.dom.appendChild(this.workerCpuPanel.canvas),this.resizePanel(this.workerCpuPanel),this._panelId++}}update(){this.externalData?this.updateFromExternalData():this.updateFromInternalData()}updateFromExternalData(){let t=this.externalData;this.endProfiling(),this.addToAverage(this.totalCpuDuration,this.averageCpu),this.totalCpuDuration=0,this.hasNewExternalData&&(this.addToAverage(t.cpu,this.averageWorkerCpu),this.addToAverage(t.fps,this.averageFps),this.addToAverage(t.gpu,this.averageGpu),this.addToAverage(t.gpuCompute,this.averageGpuCompute),this.hasNewExternalData=!1),this.renderPanels()}updateFromInternalData(){this.endProfiling(),this.webgpuNative?this.resolveTimestampsAsync():this.info?this.processWebGPUTimestamps():this.processGpuQueries(),this.updateAverages(),this.resetCounters(),this.renderPanels()}renderPanels(){var t;let e=performance.now();if(!this.isWorker){for(this.frameTimes.push(e);this.frameTimes.length>0&&this.frameTimes[0]<=e-1e3;)this.frameTimes.shift();let l=Math.round(this.frameTimes.length);this.addToAverage(l,this.averageFps)}let i=e>=this.prevTextTime+1e3/this.logsPerSecond,s=e>=this.prevGraphTime+1e3/this.graphsPerSecond,r=this.isWorker?" \u26ED":"";if(this.updatePanelComponents(this.fpsPanel,this.averageFps,0,i,s,r),this.updatePanelComponents(this.msPanel,this.averageCpu,this.precision,i,s,""),this.workerCpuPanel&&this.isWorker&&this.updatePanelComponents(this.workerCpuPanel,this.averageWorkerCpu,this.precision,i,s," \u26ED"),this.gpuPanel&&this.updatePanelComponents(this.gpuPanel,this.averageGpu,this.precision,i,s,r),this.trackCPT&&this.gpuPanelCompute&&this.updatePanelComponents(this.gpuPanelCompute,this.averageGpuCompute,this.precision,i,s,r),i&&(this.prevTextTime=e),s&&(this.prevGraphTime=e,this.texturePanels.size>0&&!this.textureUpdatePending&&(this.textureUpdatePending=!0,this.updateTexturePanels().finally(()=>{this.textureUpdatePending=!1})),this.captureStatsGLNodes()),this.vsyncPanel!==null){this.detectVSync(e);let l=((t=this.detectedVSync)==null?void 0:t.refreshRate)||0;i&&l>0&&this.vsyncPanel.update(l,l)}}resetCounters(){this.renderCount=0,this.totalCpuDuration=0,this.beginTime=performance.now()}resizePanel(t){t.canvas.style.position="absolute",this.minimal?t.canvas.style.display="none":(t.canvas.style.display="block",this.horizontal?(t.canvas.style.top="0px",t.canvas.style.left=t.id*t.WIDTH/t.PR+"px"):(t.canvas.style.left="0px",t.canvas.style.top=t.id*t.HEIGHT/t.PR+"px"))}addPanel(t){return t.canvas&&(this.dom.appendChild(t.canvas),t.id=this._panelId,this.resizePanel(t),this._panelId++),t}showPanel(t){for(let e=0;e<this.dom.children.length;e++){let i=this.dom.children[e];i.style.display=e===t?"block":"none"}this.mode=t}addTexturePanel(t){this.texturePanelRow||(this.texturePanelRow=document.createElement("div"),this.texturePanelRow.style.cssText=`
        position: absolute;
        top: 48px;
        left: 0;
        display: flex;
        flex-direction: row;
      `,this.dom.appendChild(this.texturePanelRow));let e=new E(t);return e.canvas.style.position="relative",e.canvas.style.left="",e.canvas.style.top="",this.texturePanelRow.appendChild(e.canvas),this.texturePanels.set(t,e),e}setTexture(t,e){this.updateTexturePreviewDimensions(),this.gl&&!this.textureCaptureWebGL&&(this.textureCaptureWebGL=new C(this.gl,this.texturePreviewWidth,this.texturePreviewHeight)),this.gpuDevice&&!this.textureCaptureWebGPU&&(this.textureCaptureWebGPU=new F(this.gpuDevice,this.texturePreviewWidth,this.texturePreviewHeight));let i=this.texturePanels.get(t);if(e.isWebGLRenderTarget&&this.gl){let s=Q(e,this.gl);s&&(this.textureSourcesWebGL.set(t,{target:e,...s}),i&&i.setSourceSize(s.width,s.height));return}if(e.isRenderTarget&&this.gpuBackend){let s=q(e,this.gpuBackend);s&&(this.textureSourcesWebGPU.set(t,s),i&&e.width&&e.height&&i.setSourceSize(e.width,e.height));return}if(e&&typeof e.createView=="function"){this.textureSourcesWebGPU.set(t,e);return}}setTextureWebGL(t,e,i,s){this.updateTexturePreviewDimensions(),this.gl&&!this.textureCaptureWebGL&&(this.textureCaptureWebGL=new C(this.gl,this.texturePreviewWidth,this.texturePreviewHeight)),this.textureSourcesWebGL.set(t,{target:{isWebGLRenderTarget:!0},framebuffer:e,width:i,height:s});let r=this.texturePanels.get(t);r&&r.setSourceSize(i,s)}setTextureBitmap(t,e,i,s){let r=this.texturePanels.get(t);r&&(i!==void 0&&s!==void 0&&r.setSourceSize(i,s),r.updateTexture(e))}removeTexturePanel(t){let e=this.texturePanels.get(t);e&&(e.dispose(),e.canvas.remove(),this.texturePanels.delete(t),this.textureSourcesWebGL.delete(t),this.textureSourcesWebGPU.delete(t))}async updateTexturePanels(){if(this.updateTexturePreviewDimensions(),this.textureCaptureWebGL)for(let[t,e]of this.textureSourcesWebGL){let i=this.texturePanels.get(t);if(i){let s=e.framebuffer,r=e.width,l=e.height;e.target.isWebGLRenderTarget&&e.target.__webglFramebuffer&&(s=e.target.__webglFramebuffer,r=e.target.width||r,l=e.target.height||l);let a=await this.textureCaptureWebGL.capture(s,r,l,t);a&&i.updateTexture(a)}}if(this.textureCaptureWebGPU)for(let[t,e]of this.textureSourcesWebGPU){let i=this.texturePanels.get(t);if(i){let s=await this.textureCaptureWebGPU.capture(e);s&&i.updateTexture(s)}}}captureStatsGLNodes(){let t=this._statsGLCaptures;if(!(!t||t.size===0||!this.renderer))for(let e of t.values())e.capture&&e.capture(this.renderer)}detectVSync(t){if(this.lastFrameTime===0){this.lastFrameTime=t;return}let e=t-this.lastFrameTime;if(this.lastFrameTime=t,this.frameTimeHistory.push(e),this.frameTimeHistory.length>this.HISTORY_SIZE&&this.frameTimeHistory.shift(),this.frameTimeHistory.length<60)return;let i=this.frameTimeHistory.reduce((h,u)=>h+u)/this.frameTimeHistory.length,s=this.frameTimeHistory.reduce((h,u)=>h+Math.pow(u-i,2),0)/this.frameTimeHistory.length;if(Math.sqrt(s)>2){this.detectedVSync=null;return}let l=null,a=1/0;for(let h of this.VSYNC_RATES){let u=Math.abs(i-h.frameTime);u<a&&(a=u,l=h)}l&&a/l.frameTime<=this.VSYNC_THRESHOLD?this.detectedVSync=l:this.detectedVSync=null}updatePanelComponents(t,e,i,s,r,l=""){if(!t||e.logs.length===0)return;let a=String(t.id);a in this.lastMin||(this.lastMin[a]=1/0,this.lastMax[a]=0,this.lastValue[a]=0);let h=e.logs[e.logs.length-1];this.lastMax[a]=Math.max(...e.logs),this.lastMin[a]=Math.min(this.lastMin[a],h),this.lastValue[a]=this.lastValue[a]*.7+h*.3;let u=Math.max(Math.max(...e.logs),...e.graph.slice(-this.samplesGraph));this.updateCounter++,s&&t.update(this.lastValue[a],this.lastMax[a],i,l),r&&t.updateGraph(h,u)}updatePanel(t,e,i=2){if(!t||e.logs.length===0)return;let s=performance.now();t.name in this.lastMin||(this.lastMin[t.name]=1/0,this.lastMax[t.name]=0,this.lastValue[t.name]=0);let r=e.logs[e.logs.length-1],l=Math.max(...e.logs.slice(-30));this.lastMin[t.name]=Math.min(this.lastMin[t.name],r),this.lastMax[t.name]=Math.max(this.lastMax[t.name],r),this.lastValue[t.name]=this.lastValue[t.name]*.7+r*.3;let a=Math.max(l,...e.graph.slice(-this.samplesGraph));this.updateCounter++,this.updateCounter%(this.logsPerSecond*2)===0&&(this.lastMax[t.name]=l,this.lastMin[t.name]=r),t.update&&(s>=this.prevCpuTime+1e3/this.logsPerSecond&&t.update(this.lastValue[t.name],r,this.lastMax[t.name],a,i),s>=this.prevGraphTime+1e3/this.graphsPerSecond&&(t.updateGraph(r,a),this.prevGraphTime=s))}get domElement(){return this.dom}dispose(){this.minimal?this.dom.removeEventListener("click",this.handleClick):window.removeEventListener("resize",this.handleResize),this.textureCaptureWebGL&&(this.textureCaptureWebGL.dispose(),this.textureCaptureWebGL=null),this.textureCaptureWebGPU&&(this.textureCaptureWebGPU.dispose(),this.textureCaptureWebGPU=null);for(let e of this.texturePanels.values())e.dispose();this.texturePanels.clear(),this.textureSourcesWebGL.clear(),this.textureSourcesWebGPU.clear();let t=this._statsGLCaptures;if(t){for(let e of t.values())e.dispose&&e.dispose();t.clear()}this.texturePanelRow&&(this.texturePanelRow.remove(),this.texturePanelRow=null),this.dom.remove(),this.fpsPanel=null,this.msPanel=null,this.gpuPanel=null,this.gpuPanelCompute=null,this.vsyncPanel=null,this.workerCpuPanel=null,this.frameTimeHistory.length=0,this.averageWorkerCpu.logs.length=0,this.averageWorkerCpu.graph.length=0,super.dispose()}};U.Panel=x;U.PanelTexture=E;var j=U;var b=class n{constructor(t,e,i,s,r="div"){this.parent=t,this.object=e,this.property=i,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(r),this.domElement.classList.add("lil-controller"),this.domElement.classList.add(s),this.$name=document.createElement("div"),this.$name.classList.add("lil-name"),n.nextNameID=n.nextNameID||0,this.$name.id=`lil-gui-name-${++n.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("lil-widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",l=>l.stopPropagation()),this.domElement.addEventListener("keyup",l=>l.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(i)}name(t){return this._name=t,this.$name.textContent=t,this}onChange(t){return this._onChange=t,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(t=!0){return this.disable(!t)}disable(t=!0){return t===this._disabled?this:(this._disabled=t,this.domElement.classList.toggle("lil-disabled",t),this.$disable.toggleAttribute("disabled",t),this)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(t){let e=this.parent.add(this.object,this.property,t);return e.name(this._name),this.destroy(),e}min(t){return this}max(t){return this}step(t){return this}decimals(t){return this}listen(t=!0){return this._listening=t,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);let t=this.save();t!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=t}getValue(){return this.object[this.property]}setValue(t){return this.getValue()!==t&&(this.object[this.property]=t,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(t){return this.setValue(t),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}},I=class extends b{constructor(t,e,i){super(t,e,i,"lil-boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}};function B(n){let t,e;return(t=n.match(/(#|0x)?([a-f0-9]{6})/i))?e=t[2]:(t=n.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?e=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=n.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(e=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),e?"#"+e:!1}var st={isPrimitive:!0,match:n=>typeof n=="string",fromHexString:B,toHexString:B},A={isPrimitive:!0,match:n=>typeof n=="number",fromHexString:n=>parseInt(n.substring(1),16),toHexString:n=>"#"+n.toString(16).padStart(6,0)},rt={isPrimitive:!1,match:n=>Array.isArray(n)||ArrayBuffer.isView(n),fromHexString(n,t,e=1){let i=A.fromHexString(n);t[0]=(i>>16&255)/255*e,t[1]=(i>>8&255)/255*e,t[2]=(i&255)/255*e},toHexString([n,t,e],i=1){i=255/i;let s=n*i<<16^t*i<<8^e*i<<0;return A.toHexString(s)}},nt={isPrimitive:!1,match:n=>Object(n)===n,fromHexString(n,t,e=1){let i=A.fromHexString(n);t.r=(i>>16&255)/255*e,t.g=(i>>8&255)/255*e,t.b=(i&255)/255*e},toHexString({r:n,g:t,b:e},i=1){i=255/i;let s=n*i<<16^t*i<<8^e*i<<0;return A.toHexString(s)}},lt=[st,A,rt,nt];function at(n){return lt.find(t=>t.match(n))}var V=class extends b{constructor(t,e,i,s){super(t,e,i,"lil-color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=at(this.initialValue),this._rgbScale=s,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{let r=B(this.$text.value);r&&this._setValueFromHexString(r)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(t){if(this._format.isPrimitive){let e=this._format.fromHexString(t);this.setValue(e)}else this._format.fromHexString(t,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(t){return this._setValueFromHexString(t),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}},R=class extends b{constructor(t,e,i){super(t,e,i,"lil-function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",s=>{s.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}},z=class extends b{constructor(t,e,i,s,r,l){super(t,e,i,"lil-number"),this._initInput(),this.min(s),this.max(r);let a=l!==void 0;this.step(a?l:this._getImplicitStep(),a),this.updateDisplay()}decimals(t){return this._decimals=t,this.updateDisplay(),this}min(t){return this._min=t,this._onUpdateMinMax(),this}max(t){return this._max=t,this._onUpdateMinMax(),this}step(t,e=!0){return this._step=t,this._stepExplicit=e,this}updateDisplay(){let t=this.getValue();if(this._hasSlider){let e=(t-this._min)/(this._max-this._min);e=Math.max(0,Math.min(e,1)),this.$fill.style.width=e*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?t:t.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;let e=()=>{let o=parseFloat(this.$input.value);isNaN(o)||(this._stepExplicit&&(o=this._snap(o)),this.setValue(this._clamp(o)))},i=o=>{let f=parseFloat(this.$input.value);isNaN(f)||(this._snapClampSetValue(f+o),this.$input.value=this.getValue())},s=o=>{o.key==="Enter"&&this.$input.blur(),o.code==="ArrowUp"&&(o.preventDefault(),i(this._step*this._arrowKeyMultiplier(o))),o.code==="ArrowDown"&&(o.preventDefault(),i(this._step*this._arrowKeyMultiplier(o)*-1))},r=o=>{this._inputFocused&&(o.preventDefault(),i(this._step*this._normalizeMouseWheel(o)))},l=!1,a,h,u,p,c,v=5,_=o=>{a=o.clientX,h=u=o.clientY,l=!0,p=this.getValue(),c=0,window.addEventListener("mousemove",S),window.addEventListener("mouseup",P)},S=o=>{if(l){let f=o.clientX-a,G=o.clientY-h;Math.abs(G)>v?(o.preventDefault(),this.$input.blur(),l=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(f)>v&&P()}if(!l){let f=o.clientY-u;c-=f*this._step*this._arrowKeyMultiplier(o),p+c>this._max?c=this._max-p:p+c<this._min&&(c=this._min-p),this._snapClampSetValue(p+c)}u=o.clientY},P=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",S),window.removeEventListener("mouseup",P)},W=()=>{this._inputFocused=!0},d=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",e),this.$input.addEventListener("keydown",s),this.$input.addEventListener("wheel",r,{passive:!1}),this.$input.addEventListener("mousedown",_),this.$input.addEventListener("focus",W),this.$input.addEventListener("blur",d)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("lil-slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("lil-fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("lil-has-slider");let t=(d,o,f,G,it)=>(d-o)/(f-o)*(it-G)+G,e=d=>{let o=this.$slider.getBoundingClientRect(),f=t(d,o.left,o.right,this._min,this._max);this._snapClampSetValue(f)},i=d=>{this._setDraggingStyle(!0),e(d.clientX),window.addEventListener("mousemove",s),window.addEventListener("mouseup",r)},s=d=>{e(d.clientX)},r=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",s),window.removeEventListener("mouseup",r)},l=!1,a,h,u=d=>{d.preventDefault(),this._setDraggingStyle(!0),e(d.touches[0].clientX),l=!1},p=d=>{d.touches.length>1||(this._hasScrollBar?(a=d.touches[0].clientX,h=d.touches[0].clientY,l=!0):u(d),window.addEventListener("touchmove",c,{passive:!1}),window.addEventListener("touchend",v))},c=d=>{if(l){let o=d.touches[0].clientX-a,f=d.touches[0].clientY-h;Math.abs(o)>Math.abs(f)?u(d):(window.removeEventListener("touchmove",c),window.removeEventListener("touchend",v))}else d.preventDefault(),e(d.touches[0].clientX)},v=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",c),window.removeEventListener("touchend",v)},_=this._callOnFinishChange.bind(this),S=400,P,W=d=>{if(Math.abs(d.deltaX)<Math.abs(d.deltaY)&&this._hasScrollBar)return;d.preventDefault();let f=this._normalizeMouseWheel(d)*this._step;this._snapClampSetValue(this.getValue()+f),this.$input.value=this.getValue(),clearTimeout(P),P=setTimeout(_,S)};this.$slider.addEventListener("mousedown",i),this.$slider.addEventListener("touchstart",p,{passive:!1}),this.$slider.addEventListener("wheel",W,{passive:!1})}_setDraggingStyle(t,e="horizontal"){this.$slider&&this.$slider.classList.toggle("lil-active",t),document.body.classList.toggle("lil-dragging",t),document.body.classList.toggle(`lil-${e}`,t)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(t){let{deltaX:e,deltaY:i}=t;return Math.floor(t.deltaY)!==t.deltaY&&t.wheelDelta&&(e=0,i=-t.wheelDelta/120,i*=this._stepExplicit?1:10),e+-i}_arrowKeyMultiplier(t){let e=this._stepExplicit?1:10;return t.shiftKey?e*=10:t.altKey&&(e/=10),e}_snap(t){let e=0;return this._hasMin?e=this._min:this._hasMax&&(e=this._max),t-=e,t=Math.round(t/this._step)*this._step,t+=e,t=parseFloat(t.toPrecision(15)),t}_clamp(t){return t<this._min&&(t=this._min),t>this._max&&(t=this._max),t}_snapClampSetValue(t){this.setValue(this._clamp(this._snap(t)))}get _hasScrollBar(){let t=this.parent.root.$children;return t.scrollHeight>t.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}},O=class extends b{constructor(t,e,i,s){super(t,e,i,"lil-option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("lil-focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("lil-focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(s)}options(t){return this._values=Array.isArray(t)?t:Object.values(t),this._names=Array.isArray(t)?t:Object.keys(t),this.$select.replaceChildren(),this._names.forEach(e=>{let i=document.createElement("option");i.textContent=e,this.$select.appendChild(i)}),this.updateDisplay(),this}updateDisplay(){let t=this.getValue(),e=this._values.indexOf(t);return this.$select.selectedIndex=e,this.$display.textContent=e===-1?t:this._names[e],this}},X=class extends b{constructor(t,e,i){super(t,e,i,"lil-string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",s=>{s.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}},ht=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.lil-root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.lil-root > .lil-title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.lil-root > .lil-children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.lil-root > .lil-children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.lil-root > .lil-children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.lil-allow-touch-styles, .lil-gui.lil-allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.lil-force-touch-styles, .lil-gui.lil-force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.lil-auto-place, .lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-controller.lil-disabled {
  opacity: 0.5;
}
.lil-controller.lil-disabled, .lil-controller.lil-disabled * {
  pointer-events: none !important;
}
.lil-controller > .lil-name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-controller .lil-widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-controller.lil-string input {
  color: var(--string-color);
}
.lil-controller.lil-boolean {
  cursor: pointer;
}
.lil-controller.lil-color .lil-display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-controller.lil-color .lil-display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-controller.lil-color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-controller.lil-color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-controller.lil-option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-controller.lil-option .lil-display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-controller.lil-option .lil-display.lil-focus {
    background: var(--focus-color);
  }
}
.lil-controller.lil-option .lil-display.lil-active {
  background: var(--focus-color);
}
.lil-controller.lil-option .lil-display:after {
  font-family: "lil-gui";
  content: "\u2195";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-controller.lil-option .lil-widget,
.lil-controller.lil-option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-controller.lil-option .lil-widget:hover .lil-display {
    background: var(--hover-color);
  }
}
.lil-controller.lil-number input {
  color: var(--number-color);
}
.lil-controller.lil-number.lil-has-slider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-controller.lil-number .lil-slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-controller.lil-number .lil-slider:hover {
    background: var(--hover-color);
  }
}
.lil-controller.lil-number .lil-slider.lil-active {
  background: var(--focus-color);
}
.lil-controller.lil-number .lil-slider.lil-active .lil-fill {
  opacity: 0.95;
}
.lil-controller.lil-number .lil-fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-dragging * {
  cursor: ew-resize !important;
}
.lil-dragging.lil-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .lil-title {
  height: var(--title-height);
  font-weight: 600;
  padding: 0 var(--padding);
  width: 100%;
  text-align: left;
  background: none;
  text-decoration-skip: objects;
}
.lil-gui .lil-title:before {
  font-family: "lil-gui";
  content: "\u25BE";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .lil-title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-dragging) .lil-gui .lil-title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .lil-title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.lil-root > .lil-title:focus {
  text-decoration: none !important;
}
.lil-gui.lil-closed > .lil-title:before {
  content: "\u25B8";
}
.lil-gui.lil-closed > .lil-children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.lil-closed:not(.lil-transition) > .lil-children {
  display: none;
}
.lil-gui.lil-transition > .lil-children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .lil-children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.lil-root > .lil-children > .lil-gui > .lil-title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.lil-root > .lil-children > .lil-gui.lil-closed > .lil-title {
  border-bottom-color: transparent;
}
.lil-gui + .lil-controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .lil-title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .lil-children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .lil-controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "\u2713";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  border: none;
}
.lil-gui .lil-controller button {
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
}
@media (hover: hover) {
  .lil-gui .lil-controller button:hover {
    background: var(--hover-color);
  }
  .lil-gui .lil-controller button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui .lil-controller button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff2;charset=utf-8;base64,d09GMgABAAAAAALkAAsAAAAABtQAAAKVAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHFQGYACDMgqBBIEbATYCJAMUCwwABCAFhAoHgQQbHAbIDiUFEYVARAAAYQTVWNmz9MxhEgodq49wYRUFKE8GWNiUBxI2LBRaVnc51U83Gmhs0Q7JXWMiz5eteLwrKwuxHO8VFxUX9UpZBs6pa5ABRwHA+t3UxUnH20EvVknRerzQgX6xC/GH6ZUvTcAjAv122dF28OTqCXrPuyaDER30YBA1xnkVutDDo4oCi71Ca7rrV9xS8dZHbPHefsuwIyCpmT7j+MnjAH5X3984UZoFFuJ0yiZ4XEJFxjagEBeqs+e1iyK8Xf/nOuwF+vVK0ur765+vf7txotUi0m3N0m/84RGSrBCNrh8Ee5GjODjF4gnWP+dJrH/Lk9k4oT6d+gr6g/wssA2j64JJGP6cmx554vUZnpZfn6ZfX2bMwPPrlANsB86/DiHjhl0OP+c87+gaJo/gY084s3HoYL/ZkWHTRfBXvvoHnnkHvngKun4KBE/ede7tvq3/vQOxDXB1/fdNz6XbPdcr0Vhpojj9dG+owuSKFsslCi1tgEjirjXdwMiov2EioadxmqTHUCIwo8NgQaeIasAi0fTYSPTbSmwbMOFduyh9wvBrESGY0MtgRjtgQR8Q1bRPohn2UoCRZf9wyYANMXFeJTysqAe0I4mrherOekFdKMrYvJjLvOIUM9SuwYB5DVZUwwVjJJOaUnZCmcEkIZZrKqNvRGRMvmFZsmhP4VMKCSXBhSqUBxgMS7h0cZvEd71AWkEhGWaeMFcNnpqyJkyXgYL7PQ1MoSq0wDAkRtJIijkZSmqYTiSImfLiSWXIZwhRh3Rug2X0kk1Dgj+Iu43u5p98ghopcpSo0Uyc8SnjlYX59WUeaMoDqmVD2TOWD9a4pCRAzf2ECgwGcrHjPOWY9bNxq/OL3I/QjwEAAAA=") format("woff2");
}`;function ot(n){let t=document.createElement("style");t.innerHTML=n;let e=document.querySelector("head link[rel=stylesheet], head style");e?document.head.insertBefore(t,e):document.head.appendChild(t)}var Z=!1,M=class n{constructor({parent:t,autoPlace:e=t===void 0,container:i,width:s,title:r="Controls",closeFolders:l=!1,injectStyles:a=!0,touchStyles:h=!0}={}){if(this.parent=t,this.root=t?t.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("lil-title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("lil-children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("lil-root"),h&&this.domElement.classList.add("lil-allow-touch-styles"),!Z&&a&&(ot(ht),Z=!0),i?i.appendChild(this.domElement):e&&(this.domElement.classList.add("lil-auto-place","autoPlace"),document.body.appendChild(this.domElement)),s&&this.domElement.style.setProperty("--width",s+"px"),this._closeFolders=l}add(t,e,i,s,r){if(Object(i)===i)return new O(this,t,e,i);let l=t[e];switch(typeof l){case"number":return new z(this,t,e,i,s,r);case"boolean":return new I(this,t,e);case"string":return new X(this,t,e);case"function":return new R(this,t,e)}console.error(`gui.add failed
	property:`,e,`
	object:`,t,`
	value:`,l)}addColor(t,e,i=1){return new V(this,t,e,i)}addFolder(t){let e=new n({parent:this,title:t});return this.root._closeFolders&&e.close(),e}load(t,e=!0){return t.controllers&&this.controllers.forEach(i=>{i instanceof R||i._name in t.controllers&&i.load(t.controllers[i._name])}),e&&t.folders&&this.folders.forEach(i=>{i._title in t.folders&&i.load(t.folders[i._title])}),this}save(t=!0){let e={controllers:{},folders:{}};return this.controllers.forEach(i=>{if(!(i instanceof R)){if(i._name in e.controllers)throw new Error(`Cannot save GUI with duplicate property "${i._name}"`);e.controllers[i._name]=i.save()}}),t&&this.folders.forEach(i=>{if(i._title in e.folders)throw new Error(`Cannot save GUI with duplicate folder "${i._title}"`);e.folders[i._title]=i.save()}),e}open(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("lil-closed",this._closed),this}close(){return this.open(!1)}_setClosed(t){this._closed!==t&&(this._closed=t,this._callOnOpenClose(this))}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{let e=this.$children.clientHeight;this.$children.style.height=e+"px",this.domElement.classList.add("lil-transition");let i=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("lil-transition"),this.$children.removeEventListener("transitionend",i))};this.$children.addEventListener("transitionend",i);let s=t?this.$children.scrollHeight:0;this.domElement.classList.toggle("lil-closed",!t),requestAnimationFrame(()=>{this.$children.style.height=s+"px"})}),this}title(t){return this._title=t,this.$title.textContent=t,this}reset(t=!0){return(t?this.controllersRecursive():this.controllers).forEach(i=>i.reset()),this}onChange(t){return this._onChange=t,this}_callOnChange(t){this.parent&&this.parent._callOnChange(t),this._onChange!==void 0&&this._onChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(t){this.parent&&this.parent._callOnFinishChange(t),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onOpenClose(t){return this._onOpenClose=t,this}_callOnOpenClose(t){this.parent&&this.parent._callOnOpenClose(t),this._onOpenClose!==void 0&&this._onOpenClose.call(this,t)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(t=>t.destroy())}controllersRecursive(){let t=Array.from(this.controllers);return this.folders.forEach(e=>{t=t.concat(e.controllersRecursive())}),t}foldersRecursive(){let t=Array.from(this.folders);return this.folders.forEach(e=>{t=t.concat(e.foldersRecursive())}),t}};var N=window.LLDev=window.LLDev||{};function J(){for(let n of["__llInside","__llStreets"]){let t=window[n];if(t&&t.renderer&&t.scene)return{key:n,renderer:t.renderer,scene:t.scene}}return null}var g=null,K=null,w=null,m=null,Y=null,y=!1;function k(n){return`#${n.getHexString()}`}function ut(n){m&&m.destroy(),m=w.addFolder(`3D view (${n.key==="__llInside"?"inside":"streets"})`);let t=n.renderer;"toneMappingExposure"in t&&m.add(t,"toneMappingExposure",0,3,.01).name("exposure");let e=n.scene;if(e.fog&&"density"in e.fog&&m.add(e.fog,"density",0,.2,.001).name("fog density"),e.fog&&e.fog.color){let s={c:k(e.fog.color)};m.addColor(s,"c").name("fog color").onChange(r=>e.fog.color.set(r))}if(e.background&&e.background.isColor){let s={c:k(e.background)};m.addColor(s,"c").name("background").onChange(r=>e.background.set(r))}let i=0;e.traverse(s=>{if(!s.isLight||i>=12)return;i+=1;let r=m.addFolder(`${s.type}${s.name?" "+s.name:""} ${i}`).close();r.add(s,"intensity",0,Math.max(10,s.intensity*4),.01);let l={c:k(s.color)};if(r.addColor(l,"c").name("color").onChange(a=>s.color.set(a)),s.groundColor){let a={c:k(s.groundColor)};r.addColor(a,"c").name("ground color").onChange(h=>s.groundColor.set(h))}"distance"in s&&s.isPointLight&&r.add(s,"distance",0,60,.5)})}function dt(){let n=window.__llGame;if(!n||!n.state)return;let t=w.addFolder("Game values (live state, test only)").close(),e=()=>n.state.player,i=()=>{try{n.render&&n.render()}catch{}},s={};for(let r of["health","food","water","energy","warmth"])Object.defineProperty(s,r,{get:()=>e()[r],set:l=>{e()[r]=l}}),t.add(s,r,0,100,1).onFinishChange(i).listen()}function ct(n){if(!n){g&&(g.dom.style.display="none");return}g||(g=new j({trackGPU:!0,logsPerSecond:4,samplesGraph:60,horizontal:!0}),Object.assign(g.dom.style,{position:"fixed",left:"0",top:"auto",bottom:"48px",right:"auto",zIndex:"10000"}),g.dom.dataset.dev="stats",document.body.appendChild(g.dom)),g.dom.style.display=y?"":"none",K!==n.renderer&&(K=n.renderer,g.init(n.renderer))}function tt(){let n=J();y&&(ct(n),n&&Y!==n.renderer&&(Y=n.renderer,ut(n)),!n&&m&&(m.destroy(),m=null,Y=null),n&&g&&g.update()),requestAnimationFrame(tt)}function et(n=!y){return y=n,w||(w=new M({title:"Dev (F3)",width:280}),w.domElement.style.zIndex="10000",w.domElement.dataset.dev="gui",dt()),w.domElement.style.display=y?"":"none",g&&(g.dom.style.display=y?"":"none"),y}N.toggle=et;N.loaded=!0;N.status=()=>({shown:y,view:J()?.key||null,stats:!!g,gui:!!w});et(!0);requestAnimationFrame(tt);})();
/*! Bundled license information:

lil-gui/dist/lil-gui.esm.js:
  (**
   * lil-gui
   * https://lil-gui.georgealways.com
   * @version 0.21.0
   * @author George Michael Brower
   * @license MIT
   *)
*/
