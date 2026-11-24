(()=>{var m0="170";var Ef=0,nh=1,Tf=2;var Wa=1,g0=2,Oi=3,ls=0,cn=1,Ce=2,os=0,js=1,Vi=2,ih=3,sh=4,wf=5,bs=100,Af=101,Rf=102,Cf=103,If=104,Pf=200,Lf=201,Df=202,Nf=203,Gl=204,Wl=205,Uf=206,Of=207,Ff=208,kf=209,Bf=210,zf=211,Hf=212,Vf=213,Gf=214,Xl=0,Yl=1,ql=2,ir=3,$l=4,Zl=5,Kl=6,Jl=7,vu=0,Wf=1,Xf=2,as=0,Yf=1,qf=2,$f=3,x0=4,Zf=5,Kf=6,Jf=7;var bu=300,sr=301,rr=302,jl=303,Ql=304,Xa=306,Gi=1e3,ki=1001,tc=1002,kn=1003,jf=1004;var Co=1005;var yi=1006,al=1007;var Bi=1008;var Wi=1009,Mu=1010,Su=1011,Kr=1012,_0=1013,Ss=1014,vi=1015,uo=1016,y0=1017,v0=1018,or=1020,Eu=35902,Tu=1021,wu=1022,li=1023,Au=1024,Ru=1025,Qs=1026,ar=1027,b0=1028,M0=1029,Cu=1030,S0=1031;var E0=1033,ua=33776,fa=33777,da=33778,pa=33779,ec=35840,nc=35841,ic=35842,sc=35843,rc=36196,oc=37492,ac=37496,lc=37808,cc=37809,hc=37810,uc=37811,fc=37812,dc=37813,pc=37814,mc=37815,gc=37816,xc=37817,_c=37818,yc=37819,vc=37820,bc=37821,ma=36492,Mc=36494,Sc=36495,Iu=36283,Ec=36284,Tc=36285,wc=36286;var ga=2300,Ac=2301,ll=2302,rh=2400,oh=2401,ah=2402;var Qf=3200,td=3201;var Pu=0,ed=1,$n="",ze="srgb",Er="srgb-linear",Ya="linear",Fe="srgb";var Ps=7680;var lh=519,nd=512,id=513,sd=514,Lu=515,rd=516,od=517,ad=518,ld=519,Rc=35044;var ch="300 es",zi=2e3,xa=2001,cs=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},_n=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],hh=1234567,tr=Math.PI/180,lr=180/Math.PI;function bi(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(_n[n&255]+_n[n>>8&255]+_n[n>>16&255]+_n[n>>24&255]+"-"+_n[t&255]+_n[t>>8&255]+"-"+_n[t>>16&15|64]+_n[t>>24&255]+"-"+_n[e&63|128]+_n[e>>8&255]+"-"+_n[e>>16&255]+_n[e>>24&255]+_n[i&255]+_n[i>>8&255]+_n[i>>16&255]+_n[i>>24&255]).toLowerCase()}function ln(n,t,e){return Math.max(t,Math.min(e,n))}function T0(n,t){return(n%t+t)%t}function cd(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function hd(n,t,e){return n!==t?(e-n)/(t-n):0}function Xr(n,t,e){return(1-e)*n+e*t}function ud(n,t,e,i){return Xr(n,t,1-Math.exp(-e*i))}function fd(n,t=1){return t-Math.abs(T0(n,t*2)-t)}function dd(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function pd(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function md(n,t){return n+Math.floor(Math.random()*(t-n+1))}function gd(n,t){return n+Math.random()*(t-n)}function xd(n){return n*(.5-Math.random())}function _d(n){n!==void 0&&(hh=n);let t=hh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function yd(n){return n*tr}function vd(n){return n*lr}function bd(n){return(n&n-1)===0&&n!==0}function Md(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Sd(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Ed(n,t,e,i,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+i)/2),h=o((t+i)/2),u=r((t-i)/2),f=o((t-i)/2),d=r((i-t)/2),g=o((i-t)/2);switch(s){case"XYX":n.set(a*h,l*u,l*f,a*c);break;case"YZY":n.set(l*f,a*h,l*u,a*c);break;case"ZXZ":n.set(l*u,l*f,a*h,a*c);break;case"XZX":n.set(a*h,l*g,l*d,a*c);break;case"YXY":n.set(l*d,a*h,l*g,a*c);break;case"ZYZ":n.set(l*g,l*d,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ai(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Le(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var As={DEG2RAD:tr,RAD2DEG:lr,generateUUID:bi,clamp:ln,euclideanModulo:T0,mapLinear:cd,inverseLerp:hd,lerp:Xr,damp:ud,pingpong:fd,smoothstep:dd,smootherstep:pd,randInt:md,randFloat:gd,randFloatSpread:xd,seededRandom:_d,degToRad:yd,radToDeg:vd,isPowerOfTwo:bd,ceilPowerOfTwo:Md,floorPowerOfTwo:Sd,setQuaternionFromProperEuler:Ed,normalize:Le,denormalize:ai},yt=class n{constructor(t=0,e=0){n.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(ln(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ce=class n{constructor(t,e,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],f=i[2],d=i[5],g=i[8],x=s[0],m=s[3],p=s[6],M=s[1],y=s[4],_=s[7],D=s[2],C=s[5],P=s[8];return r[0]=o*x+a*M+l*D,r[3]=o*m+a*y+l*C,r[6]=o*p+a*_+l*P,r[1]=c*x+h*M+u*D,r[4]=c*m+h*y+u*C,r[7]=c*p+h*_+u*P,r[2]=f*x+d*M+g*D,r[5]=f*m+d*y+g*C,r[8]=f*p+d*_+g*P,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,g=e*u+i*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=u*x,t[1]=(s*c-h*i)*x,t[2]=(a*i-s*o)*x,t[3]=f*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-a*e)*x,t[6]=d*x,t[7]=(i*l-c*e)*x,t[8]=(o*e-i*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(cl.makeScale(t,e)),this}rotate(t){return this.premultiply(cl.makeRotation(-t)),this}translate(t,e){return this.premultiply(cl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},cl=new ce;function Du(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function _a(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Td(){let n=_a("canvas");return n.style.display="block",n}var uh={};function Gr(n){n in uh||(uh[n]=!0,console.warn(n))}function wd(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function Ad(n){let t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Rd(n){let t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Te={enabled:!0,workingColorSpace:Er,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Fe&&(n.r=Hi(n.r),n.g=Hi(n.g),n.b=Hi(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Fe&&(n.r=er(n.r),n.g=er(n.g),n.b=er(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===$n?Ya:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Hi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function er(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var fh=[.64,.33,.3,.6,.15,.06],dh=[.2126,.7152,.0722],ph=[.3127,.329],mh=new ce().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),gh=new ce().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Te.define({[Er]:{primaries:fh,whitePoint:ph,transfer:Ya,toXYZ:mh,fromXYZ:gh,luminanceCoefficients:dh,workingColorSpaceConfig:{unpackColorSpace:ze},outputColorSpaceConfig:{drawingBufferColorSpace:ze}},[ze]:{primaries:fh,whitePoint:ph,transfer:Fe,toXYZ:mh,fromXYZ:gh,luminanceCoefficients:dh,outputColorSpaceConfig:{drawingBufferColorSpace:ze}}});var Ls,Cc=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ls===void 0&&(Ls=_a("canvas")),Ls.width=t.width,Ls.height=t.height;let i=Ls.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Ls}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=_a("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Hi(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Hi(e[i]/255)*255):e[i]=Hi(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Cd=0,ya=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Cd++}),this.uuid=bi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(hl(s[o].image)):r.push(hl(s[o]))}else r=hl(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function hl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Cc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Id=0,Pn=class n extends cs{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=ki,s=ki,r=yi,o=Bi,a=li,l=Wi,c=n.DEFAULT_ANISOTROPY,h=$n){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Id++}),this.uuid=bi(),this.name="",this.source=new ya(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new yt(0,0),this.repeat=new yt(1,1),this.center=new yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ce,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==bu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Gi:t.x=t.x-Math.floor(t.x);break;case ki:t.x=t.x<0?0:1;break;case tc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Gi:t.y=t.y-Math.floor(t.y);break;case ki:t.y=t.y<0?0:1;break;case tc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Pn.DEFAULT_IMAGE=null;Pn.DEFAULT_MAPPING=bu;Pn.DEFAULT_ANISOTROPY=1;var Re=class n{constructor(t=0,e=0,i=0,s=1){n.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let y=(c+1)/2,_=(d+1)/2,D=(p+1)/2,C=(h+f)/4,P=(u+x)/4,N=(g+m)/4;return y>_&&y>D?y<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(y),s=C/i,r=P/i):_>D?_<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),i=C/s,r=N/s):D<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),i=P/r,s=N/r),this.set(i,s,r,e),this}let M=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(u-x)/M,this.z=(f-h)/M,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ic=class extends cs{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Re(0,0,t,e),this.scissorTest=!1,this.viewport=new Re(0,0,t,e);let s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new Pn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new ya(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Xi=class extends Ic{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},va=class extends Pn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=kn,this.minFilter=kn,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Pc=class extends Pn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=kn,this.minFilter=kn,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Bn=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],f=r[o+0],d=r[o+1],g=r[o+2],x=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=x;return}if(u!==x||l!==f||c!==d||h!==g){let m=1-a,p=l*f+c*d+h*g+u*x,M=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){let D=Math.sqrt(y),C=Math.atan2(D,p*M);m=Math.sin(m*C)/D,a=Math.sin(a*C)/D}let _=a*M;if(l=l*m+f*_,c=c*m+d*_,h=h*m+g*_,u=u*m+x*_,m===1-a){let D=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=D,c*=D,h*=D,u*=D}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*d-c*f,t[e+1]=l*g+h*f+c*u-a*d,t[e+2]=c*g+h*d+a*f-l*u,t[e+3]=h*g-a*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),u=a(r/2),f=l(i/2),d=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"YZX":this._x=f*h*u+c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u-f*d*g;break;case"XZY":this._x=f*h*u-c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=i+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(i>a&&i>u){let d=2*Math.sqrt(1+i-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-i-u);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-i-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ln(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let d=1-e;return this._w=d*o+e*this._w,this._x=d*i+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*u+this._w*f,this._x=i*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class n{constructor(t=0,e=0,i=0){n.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(xh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(xh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),h=2*(a*e-r*s),u=2*(r*i-o*e);return this.x=e+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return ul.copy(this).projectOnVector(t),this.sub(ul)}reflect(t){return this.sub(ul.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(ln(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ul=new I,xh=new Bn,zn=class{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(ii.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(ii.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=ii.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,ii):ii.fromBufferAttribute(r,o),ii.applyMatrix4(t.matrixWorld),this.expandByPoint(ii);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Io.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Io.copy(i.boundingBox)),Io.applyMatrix4(t.matrixWorld),this.union(Io)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ii),ii.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Lr),Po.subVectors(this.max,Lr),Ds.subVectors(t.a,Lr),Ns.subVectors(t.b,Lr),Us.subVectors(t.c,Lr),ts.subVectors(Ns,Ds),es.subVectors(Us,Ns),ps.subVectors(Ds,Us);let e=[0,-ts.z,ts.y,0,-es.z,es.y,0,-ps.z,ps.y,ts.z,0,-ts.x,es.z,0,-es.x,ps.z,0,-ps.x,-ts.y,ts.x,0,-es.y,es.x,0,-ps.y,ps.x,0];return!fl(e,Ds,Ns,Us,Po)||(e=[1,0,0,0,1,0,0,0,1],!fl(e,Ds,Ns,Us,Po))?!1:(Lo.crossVectors(ts,es),e=[Lo.x,Lo.y,Lo.z],fl(e,Ds,Ns,Us,Po))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ii).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ii).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Pi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Pi=[new I,new I,new I,new I,new I,new I,new I,new I],ii=new I,Io=new zn,Ds=new I,Ns=new I,Us=new I,ts=new I,es=new I,ps=new I,Lr=new I,Po=new I,Lo=new I,ms=new I;function fl(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){ms.fromArray(n,r);let a=s.x*Math.abs(ms.x)+s.y*Math.abs(ms.y)+s.z*Math.abs(ms.z),l=t.dot(ms),c=e.dot(ms),h=i.dot(ms);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Pd=new zn,Dr=new I,dl=new I,Yi=class{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Pd.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Dr.subVectors(t,this.center);let e=Dr.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Dr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(dl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Dr.copy(t.center).add(dl)),this.expandByPoint(Dr.copy(t.center).sub(dl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Li=new I,pl=new I,Do=new I,ns=new I,ml=new I,No=new I,gl=new I,cr=class{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Li)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Li.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Li.copy(this.origin).addScaledVector(this.direction,e),Li.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){pl.copy(t).add(e).multiplyScalar(.5),Do.copy(e).sub(t).normalize(),ns.copy(this.origin).sub(pl);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Do),a=ns.dot(this.direction),l=-ns.dot(Do),c=ns.lengthSq(),h=Math.abs(1-o*o),u,f,d,g;if(h>0)if(u=o*l-a,f=o*a-l,g=r*h,u>=0)if(f>=-g)if(f<=g){let x=1/h;u*=x,f*=x,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(pl).addScaledVector(Do,f),d}intersectSphere(t,e){Li.subVectors(t.center,this.origin);let i=Li.dot(this.direction),s=Li.dot(Li)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Li)!==null}intersectTriangle(t,e,i,s,r){ml.subVectors(e,t),No.subVectors(i,t),gl.crossVectors(ml,No);let o=this.direction.dot(gl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ns.subVectors(this.origin,t);let l=a*this.direction.dot(No.crossVectors(ns,No));if(l<0)return null;let c=a*this.direction.dot(ml.cross(ns));if(c<0||l+c>o)return null;let h=-a*ns.dot(gl);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},de=class n{constructor(t,e,i,s,r,o,a,l,c,h,u,f,d,g,x,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,h,u,f,d,g,x,m)}set(t,e,i,s,r,o,a,l,c,h,u,f,d,g,x,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,s=1/Os.setFromMatrixColumn(t,0).length(),r=1/Os.setFromMatrixColumn(t,1).length(),o=1/Os.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=o*h,d=o*u,g=a*h,x=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+g*c,e[5]=f-x*c,e[9]=-a*l,e[2]=x-f*c,e[6]=g+d*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*h,d=l*u,g=c*h,x=c*u;e[0]=f+x*a,e[4]=g*a-d,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-g,e[6]=x+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*h,d=l*u,g=c*h,x=c*u;e[0]=f-x*a,e[4]=-o*u,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*h,e[9]=x-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*h,d=o*u,g=a*h,x=a*u;e[0]=l*h,e[4]=g*c-d,e[8]=f*c+x,e[1]=l*u,e[5]=x*c+f,e[9]=d*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,d=o*c,g=a*l,x=a*c;e[0]=l*h,e[4]=x-f*u,e[8]=g*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*u+g,e[10]=f-x*u}else if(t.order==="XZY"){let f=o*l,d=o*c,g=a*l,x=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+x,e[5]=o*h,e[9]=d*u-g,e[2]=g*u-d,e[6]=a*h,e[10]=x*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ld,t,Dd)}lookAt(t,e,i){let s=this.elements;return On.subVectors(t,e),On.lengthSq()===0&&(On.z=1),On.normalize(),is.crossVectors(i,On),is.lengthSq()===0&&(Math.abs(i.z)===1?On.x+=1e-4:On.z+=1e-4,On.normalize(),is.crossVectors(i,On)),is.normalize(),Uo.crossVectors(On,is),s[0]=is.x,s[4]=Uo.x,s[8]=On.x,s[1]=is.y,s[5]=Uo.y,s[9]=On.y,s[2]=is.z,s[6]=Uo.z,s[10]=On.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],f=i[9],d=i[13],g=i[2],x=i[6],m=i[10],p=i[14],M=i[3],y=i[7],_=i[11],D=i[15],C=s[0],P=s[4],N=s[8],A=s[12],S=s[1],U=s[5],q=s[9],H=s[13],W=s[2],lt=s[6],K=s[10],gt=s[14],Z=s[3],wt=s[7],At=s[11],Nt=s[15];return r[0]=o*C+a*S+l*W+c*Z,r[4]=o*P+a*U+l*lt+c*wt,r[8]=o*N+a*q+l*K+c*At,r[12]=o*A+a*H+l*gt+c*Nt,r[1]=h*C+u*S+f*W+d*Z,r[5]=h*P+u*U+f*lt+d*wt,r[9]=h*N+u*q+f*K+d*At,r[13]=h*A+u*H+f*gt+d*Nt,r[2]=g*C+x*S+m*W+p*Z,r[6]=g*P+x*U+m*lt+p*wt,r[10]=g*N+x*q+m*K+p*At,r[14]=g*A+x*H+m*gt+p*Nt,r[3]=M*C+y*S+_*W+D*Z,r[7]=M*P+y*U+_*lt+D*wt,r[11]=M*N+y*q+_*K+D*At,r[15]=M*A+y*H+_*gt+D*Nt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],g=t[3],x=t[7],m=t[11],p=t[15];return g*(+r*l*u-s*c*u-r*a*f+i*c*f+s*a*d-i*l*d)+x*(+e*l*d-e*c*f+r*o*f-s*o*d+s*c*h-r*l*h)+m*(+e*c*u-e*a*d-r*o*u+i*o*d+r*a*h-i*c*h)+p*(-s*a*h-e*l*u+e*a*f+s*o*u-i*o*f+i*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],g=t[12],x=t[13],m=t[14],p=t[15],M=u*m*c-x*f*c+x*l*d-a*m*d-u*l*p+a*f*p,y=g*f*c-h*m*c-g*l*d+o*m*d+h*l*p-o*f*p,_=h*x*c-g*u*c+g*a*d-o*x*d-h*a*p+o*u*p,D=g*u*l-h*x*l-g*a*f+o*x*f+h*a*m-o*u*m,C=e*M+i*y+s*_+r*D;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/C;return t[0]=M*P,t[1]=(x*f*r-u*m*r-x*s*d+i*m*d+u*s*p-i*f*p)*P,t[2]=(a*m*r-x*l*r+x*s*c-i*m*c-a*s*p+i*l*p)*P,t[3]=(u*l*r-a*f*r-u*s*c+i*f*c+a*s*d-i*l*d)*P,t[4]=y*P,t[5]=(h*m*r-g*f*r+g*s*d-e*m*d-h*s*p+e*f*p)*P,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*p-e*l*p)*P,t[7]=(o*f*r-h*l*r+h*s*c-e*f*c-o*s*d+e*l*d)*P,t[8]=_*P,t[9]=(g*u*r-h*x*r-g*i*d+e*x*d+h*i*p-e*u*p)*P,t[10]=(o*x*r-g*a*r+g*i*c-e*x*c-o*i*p+e*a*p)*P,t[11]=(h*a*r-o*u*r-h*i*c+e*u*c+o*i*d-e*a*d)*P,t[12]=D*P,t[13]=(h*x*s-g*u*s+g*i*f-e*x*f-h*i*m+e*u*m)*P,t[14]=(g*a*s-o*x*s-g*i*l+e*x*l+o*i*m-e*a*m)*P,t[15]=(o*u*s-h*a*s+h*i*l-e*u*l-o*i*f+e*a*f)*P,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,g=r*u,x=o*h,m=o*u,p=a*u,M=l*c,y=l*h,_=l*u,D=i.x,C=i.y,P=i.z;return s[0]=(1-(x+p))*D,s[1]=(d+_)*D,s[2]=(g-y)*D,s[3]=0,s[4]=(d-_)*C,s[5]=(1-(f+p))*C,s[6]=(m+M)*C,s[7]=0,s[8]=(g+y)*P,s[9]=(m-M)*P,s[10]=(1-(f+x))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements,r=Os.set(s[0],s[1],s[2]).length(),o=Os.set(s[4],s[5],s[6]).length(),a=Os.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],si.copy(this);let c=1/r,h=1/o,u=1/a;return si.elements[0]*=c,si.elements[1]*=c,si.elements[2]*=c,si.elements[4]*=h,si.elements[5]*=h,si.elements[6]*=h,si.elements[8]*=u,si.elements[9]*=u,si.elements[10]*=u,e.setFromRotationMatrix(si),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=zi){let l=this.elements,c=2*r/(e-t),h=2*r/(i-s),u=(e+t)/(e-t),f=(i+s)/(i-s),d,g;if(a===zi)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===xa)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=zi){let l=this.elements,c=1/(e-t),h=1/(i-s),u=1/(o-r),f=(e+t)*c,d=(i+s)*h,g,x;if(a===zi)g=(o+r)*u,x=-2*u;else if(a===xa)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},Os=new I,si=new de,Ld=new I(0,0,0),Dd=new I(1,1,1),is=new I,Uo=new I,On=new I,_h=new de,yh=new Bn,Hn=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(ln(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ln(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ln(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ln(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ln(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ln(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return _h.makeRotationFromQuaternion(t),this.setFromRotationMatrix(_h,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return yh.setFromEuler(this),this.setFromQuaternion(yh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Hn.DEFAULT_ORDER="XYZ";var Jr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Nd=0,vh=new I,Fs=new Bn,Di=new de,Oo=new I,Nr=new I,Ud=new I,Od=new Bn,bh=new I(1,0,0),Mh=new I(0,1,0),Sh=new I(0,0,1),Eh={type:"added"},Fd={type:"removed"},ks={type:"childadded",child:null},xl={type:"childremoved",child:null},Ze=class n extends cs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Nd++}),this.uuid=bi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new I,e=new Hn,i=new Bn,s=new I(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new de},normalMatrix:{value:new ce}}),this.matrix=new de,this.matrixWorld=new de,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Jr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Fs.setFromAxisAngle(t,e),this.quaternion.multiply(Fs),this}rotateOnWorldAxis(t,e){return Fs.setFromAxisAngle(t,e),this.quaternion.premultiply(Fs),this}rotateX(t){return this.rotateOnAxis(bh,t)}rotateY(t){return this.rotateOnAxis(Mh,t)}rotateZ(t){return this.rotateOnAxis(Sh,t)}translateOnAxis(t,e){return vh.copy(t).applyQuaternion(this.quaternion),this.position.add(vh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(bh,t)}translateY(t){return this.translateOnAxis(Mh,t)}translateZ(t){return this.translateOnAxis(Sh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Di.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Oo.copy(t):Oo.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Nr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Di.lookAt(Nr,Oo,this.up):Di.lookAt(Oo,Nr,this.up),this.quaternion.setFromRotationMatrix(Di),s&&(Di.extractRotation(s.matrixWorld),Fs.setFromRotationMatrix(Di),this.quaternion.premultiply(Fs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Eh),ks.child=t,this.dispatchEvent(ks),ks.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Fd),xl.child=t,this.dispatchEvent(xl),xl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Di.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Di.multiply(t.parent.matrixWorld)),t.applyMatrix4(Di),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Eh),ks.child=t,this.dispatchEvent(ks),ks.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Nr,t,Ud),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Nr,Od,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};Ze.DEFAULT_UP=new I(0,1,0);Ze.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ze.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ri=new I,Ni=new I,_l=new I,Ui=new I,Bs=new I,zs=new I,Th=new I,yl=new I,vl=new I,bl=new I,Ml=new Re,Sl=new Re,El=new Re,Fi=class n{constructor(t=new I,e=new I,i=new I){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),ri.subVectors(t,e),s.cross(ri);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){ri.subVectors(s,e),Ni.subVectors(i,e),_l.subVectors(t,e);let o=ri.dot(ri),a=ri.dot(Ni),l=ri.dot(_l),c=Ni.dot(Ni),h=Ni.dot(_l),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,g=(o*h-a*l)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Ui)===null?!1:Ui.x>=0&&Ui.y>=0&&Ui.x+Ui.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,Ui)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ui.x),l.addScaledVector(o,Ui.y),l.addScaledVector(a,Ui.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return Ml.setScalar(0),Sl.setScalar(0),El.setScalar(0),Ml.fromBufferAttribute(t,e),Sl.fromBufferAttribute(t,i),El.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Ml,r.x),o.addScaledVector(Sl,r.y),o.addScaledVector(El,r.z),o}static isFrontFacing(t,e,i,s){return ri.subVectors(i,e),Ni.subVectors(t,e),ri.cross(Ni).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ri.subVectors(this.c,this.b),Ni.subVectors(this.a,this.b),ri.cross(Ni).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;Bs.subVectors(s,i),zs.subVectors(r,i),yl.subVectors(t,i);let l=Bs.dot(yl),c=zs.dot(yl);if(l<=0&&c<=0)return e.copy(i);vl.subVectors(t,s);let h=Bs.dot(vl),u=zs.dot(vl);if(h>=0&&u<=h)return e.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(i).addScaledVector(Bs,o);bl.subVectors(t,r);let d=Bs.dot(bl),g=zs.dot(bl);if(g>=0&&d<=g)return e.copy(r);let x=d*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(zs,a);let m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return Th.subVectors(r,s),a=(u-h)/(u-h+(d-g)),e.copy(s).addScaledVector(Th,a);let p=1/(m+x+f);return o=x*p,a=f*p,e.copy(i).addScaledVector(Bs,o).addScaledVector(zs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Nu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ss={h:0,s:0,l:0},Fo={h:0,s:0,l:0};function Tl(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var Yt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ze){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Te.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=Te.workingColorSpace){return this.r=t,this.g=e,this.b=i,Te.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=Te.workingColorSpace){if(t=T0(t,1),e=ln(e,0,1),i=ln(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Tl(o,r,t+1/3),this.g=Tl(o,r,t),this.b=Tl(o,r,t-1/3)}return Te.toWorkingColorSpace(this,s),this}setStyle(t,e=ze){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ze){let i=Nu[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Hi(t.r),this.g=Hi(t.g),this.b=Hi(t.b),this}copyLinearToSRGB(t){return this.r=er(t.r),this.g=er(t.g),this.b=er(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ze){return Te.fromWorkingColorSpace(yn.copy(this),t),Math.round(ln(yn.r*255,0,255))*65536+Math.round(ln(yn.g*255,0,255))*256+Math.round(ln(yn.b*255,0,255))}getHexString(t=ze){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Te.workingColorSpace){Te.fromWorkingColorSpace(yn.copy(this),e);let i=yn.r,s=yn.g,r=yn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Te.workingColorSpace){return Te.fromWorkingColorSpace(yn.copy(this),e),t.r=yn.r,t.g=yn.g,t.b=yn.b,t}getStyle(t=ze){Te.fromWorkingColorSpace(yn.copy(this),t);let e=yn.r,i=yn.g,s=yn.b;return t!==ze?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(ss),this.setHSL(ss.h+t,ss.s+e,ss.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(ss),t.getHSL(Fo);let i=Xr(ss.h,Fo.h,e),s=Xr(ss.s,Fo.s,e),r=Xr(ss.l,Fo.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},yn=new Yt;Yt.NAMES=Nu;var kd=0,Mi=class extends cs{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kd++}),this.uuid=bi(),this.name="",this.blending=js,this.side=ls,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gl,this.blendDst=Wl,this.blendEquation=bs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Yt(0,0,0),this.blendAlpha=0,this.depthFunc=ir,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ps,this.stencilZFail=Ps,this.stencilZPass=Ps,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==js&&(i.blending=this.blending),this.side!==ls&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Gl&&(i.blendSrc=this.blendSrc),this.blendDst!==Wl&&(i.blendDst=this.blendDst),this.blendEquation!==bs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ir&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==lh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ps&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ps&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ps&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},mn=class extends Mi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hn,this.combine=vu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var je=new I,ko=new yt,Ve=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Rc,this.updateRanges=[],this.gpuType=vi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)ko.fromBufferAttribute(this,e),ko.applyMatrix3(t),this.setXY(e,ko.x,ko.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)je.fromBufferAttribute(this,e),je.applyMatrix3(t),this.setXYZ(e,je.x,je.y,je.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)je.fromBufferAttribute(this,e),je.applyMatrix4(t),this.setXYZ(e,je.x,je.y,je.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)je.fromBufferAttribute(this,e),je.applyNormalMatrix(t),this.setXYZ(e,je.x,je.y,je.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)je.fromBufferAttribute(this,e),je.transformDirection(t),this.setXYZ(e,je.x,je.y,je.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=ai(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Le(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ai(e,this.array)),e}setX(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ai(e,this.array)),e}setY(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ai(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ai(e,this.array)),e}setW(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),i=Le(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),i=Le(i,this.array),s=Le(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),i=Le(i,this.array),s=Le(s,this.array),r=Le(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Rc&&(t.usage=this.usage),t}};var hr=class extends Ve{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var ur=class extends Ve{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var oe=class extends Ve{constructor(t,e,i){super(new Float32Array(t),e,i)}},Bd=0,qn=new de,wl=new Ze,Hs=new I,Fn=new zn,Ur=new zn,an=new I,Pe=class n extends cs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bd++}),this.uuid=bi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Du(t)?ur:hr)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new ce().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return qn.makeRotationFromQuaternion(t),this.applyMatrix4(qn),this}rotateX(t){return qn.makeRotationX(t),this.applyMatrix4(qn),this}rotateY(t){return qn.makeRotationY(t),this.applyMatrix4(qn),this}rotateZ(t){return qn.makeRotationZ(t),this.applyMatrix4(qn),this}translate(t,e,i){return qn.makeTranslation(t,e,i),this.applyMatrix4(qn),this}scale(t,e,i){return qn.makeScale(t,e,i),this.applyMatrix4(qn),this}lookAt(t){return wl.lookAt(t),wl.updateMatrix(),this.applyMatrix4(wl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hs).negate(),this.translate(Hs.x,Hs.y,Hs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new oe(i,3))}else{for(let i=0,s=e.count;i<s;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];Fn.setFromBufferAttribute(r),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,Fn.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,Fn.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(Fn.min),this.boundingBox.expandByPoint(Fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){let i=this.boundingSphere.center;if(Fn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Ur.setFromBufferAttribute(a),this.morphTargetsRelative?(an.addVectors(Fn.min,Ur.min),Fn.expandByPoint(an),an.addVectors(Fn.max,Ur.max),Fn.expandByPoint(an)):(Fn.expandByPoint(Ur.min),Fn.expandByPoint(Ur.max))}Fn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)an.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(an));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)an.fromBufferAttribute(a,c),l&&(Hs.fromBufferAttribute(t,c),an.add(Hs)),s=Math.max(s,i.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ve(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let N=0;N<i.count;N++)a[N]=new I,l[N]=new I;let c=new I,h=new I,u=new I,f=new yt,d=new yt,g=new yt,x=new I,m=new I;function p(N,A,S){c.fromBufferAttribute(i,N),h.fromBufferAttribute(i,A),u.fromBufferAttribute(i,S),f.fromBufferAttribute(r,N),d.fromBufferAttribute(r,A),g.fromBufferAttribute(r,S),h.sub(c),u.sub(c),d.sub(f),g.sub(f);let U=1/(d.x*g.y-g.x*d.y);isFinite(U)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(U),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(U),a[N].add(x),a[A].add(x),a[S].add(x),l[N].add(m),l[A].add(m),l[S].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let N=0,A=M.length;N<A;++N){let S=M[N],U=S.start,q=S.count;for(let H=U,W=U+q;H<W;H+=3)p(t.getX(H+0),t.getX(H+1),t.getX(H+2))}let y=new I,_=new I,D=new I,C=new I;function P(N){D.fromBufferAttribute(s,N),C.copy(D);let A=a[N];y.copy(A),y.sub(D.multiplyScalar(D.dot(A))).normalize(),_.crossVectors(C,A);let U=_.dot(l[N])<0?-1:1;o.setXYZW(N,y.x,y.y,y.z,U)}for(let N=0,A=M.length;N<A;++N){let S=M[N],U=S.start,q=S.count;for(let H=U,W=U+q;H<W;H+=3)P(t.getX(H+0)),P(t.getX(H+1)),P(t.getX(H+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ve(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);let s=new I,r=new I,o=new I,a=new I,l=new I,c=new I,h=new I,u=new I;if(t)for(let f=0,d=t.count;f<d;f+=3){let g=t.getX(f+0),x=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)an.fromBufferAttribute(t,e),an.normalize(),t.setXYZ(e,an.x,an.y,an.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*h;for(let p=0;p<h;p++)f[g++]=c[d++]}return new Ve(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,i);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=t(f,i);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},wh=new de,gs=new cr,Bo=new Yi,Ah=new I,zo=new I,Ho=new I,Vo=new I,Al=new I,Go=new I,Rh=new I,Wo=new I,Vt=class extends Ze{constructor(t=new Pe,e=new mn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Go.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Al.fromBufferAttribute(u,t),o?Go.addScaledVector(Al,h):Go.addScaledVector(Al.sub(e),h))}e.add(Go)}return e}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Bo.copy(i.boundingSphere),Bo.applyMatrix4(r),gs.copy(t.ray).recast(t.near),!(Bo.containsPoint(gs.origin)===!1&&(gs.intersectSphere(Bo,Ah)===null||gs.origin.distanceToSquared(Ah)>(t.far-t.near)**2))&&(wh.copy(r).invert(),gs.copy(t.ray).applyMatrix4(wh),!(i.boundingBox!==null&&gs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,gs)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let m=f[g],p=o[m.materialIndex],M=Math.max(m.start,d.start),y=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let _=M,D=y;_<D;_+=3){let C=a.getX(_),P=a.getX(_+1),N=a.getX(_+2);s=Xo(this,p,t,i,c,h,u,C,P,N),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let M=a.getX(m),y=a.getX(m+1),_=a.getX(m+2);s=Xo(this,o,t,i,c,h,u,M,y,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let m=f[g],p=o[m.materialIndex],M=Math.max(m.start,d.start),y=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let _=M,D=y;_<D;_+=3){let C=_,P=_+1,N=_+2;s=Xo(this,p,t,i,c,h,u,C,P,N),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let M=m,y=m+1,_=m+2;s=Xo(this,o,t,i,c,h,u,M,y,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function zd(n,t,e,i,s,r,o,a){let l;if(t.side===cn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===ls,a),l===null)return null;Wo.copy(a),Wo.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(Wo);return c<e.near||c>e.far?null:{distance:c,point:Wo.clone(),object:n}}function Xo(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,zo),n.getVertexPosition(l,Ho),n.getVertexPosition(c,Vo);let h=zd(n,t,e,i,zo,Ho,Vo,Rh);if(h){let u=new I;Fi.getBarycoord(Rh,zo,Ho,Vo,u),s&&(h.uv=Fi.getInterpolatedAttribute(s,a,l,c,u,new yt)),r&&(h.uv1=Fi.getInterpolatedAttribute(r,a,l,c,u,new yt)),o&&(h.normal=Fi.getInterpolatedAttribute(o,a,l,c,u,new I),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new I,materialIndex:0};Fi.getNormal(zo,Ho,Vo,f.normal),h.face=f,h.barycoord=u}return h}var we=class n extends Pe{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,d=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new oe(c,3)),this.setAttribute("normal",new oe(h,3)),this.setAttribute("uv",new oe(u,2));function g(x,m,p,M,y,_,D,C,P,N,A){let S=_/P,U=D/N,q=_/2,H=D/2,W=C/2,lt=P+1,K=N+1,gt=0,Z=0,wt=new I;for(let At=0;At<K;At++){let Nt=At*U-H;for(let te=0;te<lt;te++){let ge=te*S-q;wt[x]=ge*M,wt[m]=Nt*y,wt[p]=W,c.push(wt.x,wt.y,wt.z),wt[x]=0,wt[m]=0,wt[p]=C>0?1:-1,h.push(wt.x,wt.y,wt.z),u.push(te/P),u.push(1-At/N),gt+=1}}for(let At=0;At<N;At++)for(let Nt=0;Nt<P;Nt++){let te=f+Nt+lt*At,ge=f+Nt+lt*(At+1),nt=f+(Nt+1)+lt*(At+1),vt=f+(Nt+1)+lt*At;l.push(te,ge,vt),l.push(ge,nt,vt),Z+=6}a.addGroup(d,Z,A),d+=Z,f+=gt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function fr(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function wn(n){let t={};for(let e=0;e<n.length;e++){let i=fr(n[e]);for(let s in i)t[s]=i[s]}return t}function Hd(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Uu(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Te.workingColorSpace}var Vd={clone:fr,merge:wn},Gd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Wd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Vn=class extends Mi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Gd,this.fragmentShader=Wd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=fr(t.uniforms),this.uniformsGroups=Hd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},ba=class extends Ze{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new de,this.projectionMatrix=new de,this.projectionMatrixInverse=new de,this.coordinateSystem=zi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},rs=new I,Ch=new yt,Ih=new yt,pn=class extends ba{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=lr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(tr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return lr*2*Math.atan(Math.tan(tr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){rs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(rs.x,rs.y).multiplyScalar(-t/rs.z),rs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(rs.x,rs.y).multiplyScalar(-t/rs.z)}getViewSize(t,e){return this.getViewBounds(t,Ch,Ih),e.subVectors(Ih,Ch)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(tr*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Vs=-90,Gs=1,Lc=class extends Ze{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new pn(Vs,Gs,t,e);s.layers=this.layers,this.add(s);let r=new pn(Vs,Gs,t,e);r.layers=this.layers,this.add(r);let o=new pn(Vs,Gs,t,e);o.layers=this.layers,this.add(o);let a=new pn(Vs,Gs,t,e);a.layers=this.layers,this.add(a);let l=new pn(Vs,Gs,t,e);l.layers=this.layers,this.add(l);let c=new pn(Vs,Gs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===zi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===xa)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Ma=class extends Pn{constructor(t,e,i,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:sr,super(t,e,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Dc=class extends Xi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Ma(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:yi}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new we(5,5,5),r=new Vn({name:"CubemapFromEquirect",uniforms:fr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:cn,blending:os});r.uniforms.tEquirect.value=e;let o=new Vt(s,r),a=e.minFilter;return e.minFilter===Bi&&(e.minFilter=yi),new Lc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}},Rl=new I,Xd=new I,Yd=new ce,oi=class{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=Rl.subVectors(i,e).cross(Xd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(Rl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Yd.getNormalMatrix(t),s=this.coplanarPoint(Rl).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},xs=new Yi,Yo=new I,jr=class{constructor(t=new oi,e=new oi,i=new oi,s=new oi,r=new oi,o=new oi){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=zi){let i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],d=s[8],g=s[9],x=s[10],m=s[11],p=s[12],M=s[13],y=s[14],_=s[15];if(i[0].setComponents(l-r,f-c,m-d,_-p).normalize(),i[1].setComponents(l+r,f+c,m+d,_+p).normalize(),i[2].setComponents(l+o,f+h,m+g,_+M).normalize(),i[3].setComponents(l-o,f-h,m-g,_-M).normalize(),i[4].setComponents(l-a,f-u,m-x,_-y).normalize(),e===zi)i[5].setComponents(l+a,f+u,m+x,_+y).normalize();else if(e===xa)i[5].setComponents(a,u,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),xs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),xs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(xs)}intersectsSprite(t){return xs.center.set(0,0,0),xs.radius=.7071067811865476,xs.applyMatrix4(t.matrixWorld),this.intersectsSphere(xs)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(Yo.x=s.normal.x>0?t.max.x:t.min.x,Yo.y=s.normal.y>0?t.max.y:t.min.y,Yo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Yo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Ou(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function qd(n){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){let h=l.array,u=l.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){let g=u[f],x=u[d];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,u[f]=x)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){let x=u[d];n.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Ge=class n extends Pe{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,u=t/a,f=e/l,d=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let M=p*f-o;for(let y=0;y<c;y++){let _=y*u-r;g.push(_,-M,0),x.push(0,0,1),m.push(y/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<a;M++){let y=M+c*p,_=M+c*(p+1),D=M+1+c*(p+1),C=M+1+c*p;d.push(y,_,C),d.push(_,D,C)}this.setIndex(d),this.setAttribute("position",new oe(g,3)),this.setAttribute("normal",new oe(x,3)),this.setAttribute("uv",new oe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},$d=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Zd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Kd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Jd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Qd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,tp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ep=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,np=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,ip=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,sp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,op=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ap=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,lp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,cp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,hp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,up=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,pp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,mp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,gp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,xp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,_p=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,yp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,vp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Mp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Sp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ep="gl_FragColor = linearToOutputTexel( gl_FragColor );",Tp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ap=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Rp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Cp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ip=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Pp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Lp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Dp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Np=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Up=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Op=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Fp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Bp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,zp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Hp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Gp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Wp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Xp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Yp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,qp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,$p=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Zp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Kp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Jp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,tm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,em=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,nm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,im=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,om=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,am=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,hm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,um=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,fm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,dm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,xm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_m=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ym=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Mm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Sm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Em=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Tm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Am=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Rm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Cm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Im=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Pm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Lm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Dm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Nm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Um=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Om=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Fm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,km=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Bm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Hm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Vm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Gm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Wm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Xm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Ym=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,qm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$m=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Km=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,tg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,eg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ng=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ig=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,og=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ag=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,lg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ug=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,fg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,pg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,mg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,_g=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Mg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Sg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Eg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Tg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,me={alphahash_fragment:$d,alphahash_pars_fragment:Zd,alphamap_fragment:Kd,alphamap_pars_fragment:Jd,alphatest_fragment:jd,alphatest_pars_fragment:Qd,aomap_fragment:tp,aomap_pars_fragment:ep,batching_pars_vertex:np,batching_vertex:ip,begin_vertex:sp,beginnormal_vertex:rp,bsdfs:op,iridescence_fragment:ap,bumpmap_pars_fragment:lp,clipping_planes_fragment:cp,clipping_planes_pars_fragment:hp,clipping_planes_pars_vertex:up,clipping_planes_vertex:fp,color_fragment:dp,color_pars_fragment:pp,color_pars_vertex:mp,color_vertex:gp,common:xp,cube_uv_reflection_fragment:_p,defaultnormal_vertex:yp,displacementmap_pars_vertex:vp,displacementmap_vertex:bp,emissivemap_fragment:Mp,emissivemap_pars_fragment:Sp,colorspace_fragment:Ep,colorspace_pars_fragment:Tp,envmap_fragment:wp,envmap_common_pars_fragment:Ap,envmap_pars_fragment:Rp,envmap_pars_vertex:Cp,envmap_physical_pars_fragment:zp,envmap_vertex:Ip,fog_vertex:Pp,fog_pars_vertex:Lp,fog_fragment:Dp,fog_pars_fragment:Np,gradientmap_pars_fragment:Up,lightmap_pars_fragment:Op,lights_lambert_fragment:Fp,lights_lambert_pars_fragment:kp,lights_pars_begin:Bp,lights_toon_fragment:Hp,lights_toon_pars_fragment:Vp,lights_phong_fragment:Gp,lights_phong_pars_fragment:Wp,lights_physical_fragment:Xp,lights_physical_pars_fragment:Yp,lights_fragment_begin:qp,lights_fragment_maps:$p,lights_fragment_end:Zp,logdepthbuf_fragment:Kp,logdepthbuf_pars_fragment:Jp,logdepthbuf_pars_vertex:jp,logdepthbuf_vertex:Qp,map_fragment:tm,map_pars_fragment:em,map_particle_fragment:nm,map_particle_pars_fragment:im,metalnessmap_fragment:sm,metalnessmap_pars_fragment:rm,morphinstance_vertex:om,morphcolor_vertex:am,morphnormal_vertex:lm,morphtarget_pars_vertex:cm,morphtarget_vertex:hm,normal_fragment_begin:um,normal_fragment_maps:fm,normal_pars_fragment:dm,normal_pars_vertex:pm,normal_vertex:mm,normalmap_pars_fragment:gm,clearcoat_normal_fragment_begin:xm,clearcoat_normal_fragment_maps:_m,clearcoat_pars_fragment:ym,iridescence_pars_fragment:vm,opaque_fragment:bm,packing:Mm,premultiplied_alpha_fragment:Sm,project_vertex:Em,dithering_fragment:Tm,dithering_pars_fragment:wm,roughnessmap_fragment:Am,roughnessmap_pars_fragment:Rm,shadowmap_pars_fragment:Cm,shadowmap_pars_vertex:Im,shadowmap_vertex:Pm,shadowmask_pars_fragment:Lm,skinbase_vertex:Dm,skinning_pars_vertex:Nm,skinning_vertex:Um,skinnormal_vertex:Om,specularmap_fragment:Fm,specularmap_pars_fragment:km,tonemapping_fragment:Bm,tonemapping_pars_fragment:zm,transmission_fragment:Hm,transmission_pars_fragment:Vm,uv_pars_fragment:Gm,uv_pars_vertex:Wm,uv_vertex:Xm,worldpos_vertex:Ym,background_vert:qm,background_frag:$m,backgroundCube_vert:Zm,backgroundCube_frag:Km,cube_vert:Jm,cube_frag:jm,depth_vert:Qm,depth_frag:tg,distanceRGBA_vert:eg,distanceRGBA_frag:ng,equirect_vert:ig,equirect_frag:sg,linedashed_vert:rg,linedashed_frag:og,meshbasic_vert:ag,meshbasic_frag:lg,meshlambert_vert:cg,meshlambert_frag:hg,meshmatcap_vert:ug,meshmatcap_frag:fg,meshnormal_vert:dg,meshnormal_frag:pg,meshphong_vert:mg,meshphong_frag:gg,meshphysical_vert:xg,meshphysical_frag:_g,meshtoon_vert:yg,meshtoon_frag:vg,points_vert:bg,points_frag:Mg,shadow_vert:Sg,shadow_frag:Eg,sprite_vert:Tg,sprite_frag:wg},Dt={common:{diffuse:{value:new Yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ce}},envmap:{envMap:{value:null},envMapRotation:{value:new ce},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ce}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ce}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ce},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ce},normalScale:{value:new yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ce},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ce}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ce}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ce}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0},uvTransform:{value:new ce}},sprite:{diffuse:{value:new Yt(16777215)},opacity:{value:1},center:{value:new yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}}},_i={basic:{uniforms:wn([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.fog]),vertexShader:me.meshbasic_vert,fragmentShader:me.meshbasic_frag},lambert:{uniforms:wn([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new Yt(0)}}]),vertexShader:me.meshlambert_vert,fragmentShader:me.meshlambert_frag},phong:{uniforms:wn([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new Yt(0)},specular:{value:new Yt(1118481)},shininess:{value:30}}]),vertexShader:me.meshphong_vert,fragmentShader:me.meshphong_frag},standard:{uniforms:wn([Dt.common,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.roughnessmap,Dt.metalnessmap,Dt.fog,Dt.lights,{emissive:{value:new Yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag},toon:{uniforms:wn([Dt.common,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.gradientmap,Dt.fog,Dt.lights,{emissive:{value:new Yt(0)}}]),vertexShader:me.meshtoon_vert,fragmentShader:me.meshtoon_frag},matcap:{uniforms:wn([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,{matcap:{value:null}}]),vertexShader:me.meshmatcap_vert,fragmentShader:me.meshmatcap_frag},points:{uniforms:wn([Dt.points,Dt.fog]),vertexShader:me.points_vert,fragmentShader:me.points_frag},dashed:{uniforms:wn([Dt.common,Dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:me.linedashed_vert,fragmentShader:me.linedashed_frag},depth:{uniforms:wn([Dt.common,Dt.displacementmap]),vertexShader:me.depth_vert,fragmentShader:me.depth_frag},normal:{uniforms:wn([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,{opacity:{value:1}}]),vertexShader:me.meshnormal_vert,fragmentShader:me.meshnormal_frag},sprite:{uniforms:wn([Dt.sprite,Dt.fog]),vertexShader:me.sprite_vert,fragmentShader:me.sprite_frag},background:{uniforms:{uvTransform:{value:new ce},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:me.background_vert,fragmentShader:me.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ce}},vertexShader:me.backgroundCube_vert,fragmentShader:me.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:me.cube_vert,fragmentShader:me.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:me.equirect_vert,fragmentShader:me.equirect_frag},distanceRGBA:{uniforms:wn([Dt.common,Dt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:me.distanceRGBA_vert,fragmentShader:me.distanceRGBA_frag},shadow:{uniforms:wn([Dt.lights,Dt.fog,{color:{value:new Yt(0)},opacity:{value:1}}]),vertexShader:me.shadow_vert,fragmentShader:me.shadow_frag}};_i.physical={uniforms:wn([_i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ce},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ce},clearcoatNormalScale:{value:new yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ce},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ce},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ce},sheen:{value:0},sheenColor:{value:new Yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ce},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ce},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ce},transmissionSamplerSize:{value:new yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ce},attenuationDistance:{value:0},attenuationColor:{value:new Yt(0)},specularColor:{value:new Yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ce},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ce},anisotropyVector:{value:new yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ce}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag};var qo={r:0,b:0,g:0},_s=new Hn,Ag=new de;function Rg(n,t,e,i,s,r,o){let a=new Yt(0),l=r===!0?0:1,c,h,u=null,f=0,d=null;function g(M){let y=M.isScene===!0?M.background:null;return y&&y.isTexture&&(y=(M.backgroundBlurriness>0?e:t).get(y)),y}function x(M){let y=!1,_=g(M);_===null?p(a,l):_&&_.isColor&&(p(_,1),y=!0);let D=n.xr.getEnvironmentBlendMode();D==="additive"?i.buffers.color.setClear(0,0,0,1,o):D==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(M,y){let _=g(y);_&&(_.isCubeTexture||_.mapping===Xa)?(h===void 0&&(h=new Vt(new we(1,1,1),new Vn({name:"BackgroundCubeMaterial",uniforms:fr(_i.backgroundCube.uniforms),vertexShader:_i.backgroundCube.vertexShader,fragmentShader:_i.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,C,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),_s.copy(y.backgroundRotation),_s.x*=-1,_s.y*=-1,_s.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(_s.y*=-1,_s.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Ag.makeRotationFromEuler(_s)),h.material.toneMapped=Te.getTransfer(_.colorSpace)!==Fe,(u!==_||f!==_.version||d!==n.toneMapping)&&(h.material.needsUpdate=!0,u=_,f=_.version,d=n.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new Vt(new Ge(2,2),new Vn({name:"BackgroundMaterial",uniforms:fr(_i.background.uniforms),vertexShader:_i.background.vertexShader,fragmentShader:_i.background.fragmentShader,side:ls,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=Te.getTransfer(_.colorSpace)!==Fe,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||f!==_.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,u=_,f=_.version,d=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,y){M.getRGB(qo,Uu(n)),i.buffers.color.setClear(qo.r,qo.g,qo.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(M,y=1){a.set(M),l=y,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,p(a,l)},render:x,addToRenderList:m}}function Cg(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null),r=s,o=!1;function a(S,U,q,H,W){let lt=!1,K=u(H,q,U);r!==K&&(r=K,c(r.object)),lt=d(S,H,q,W),lt&&g(S,H,q,W),W!==null&&t.update(W,n.ELEMENT_ARRAY_BUFFER),(lt||o)&&(o=!1,_(S,U,q,H),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function l(){return n.createVertexArray()}function c(S){return n.bindVertexArray(S)}function h(S){return n.deleteVertexArray(S)}function u(S,U,q){let H=q.wireframe===!0,W=i[S.id];W===void 0&&(W={},i[S.id]=W);let lt=W[U.id];lt===void 0&&(lt={},W[U.id]=lt);let K=lt[H];return K===void 0&&(K=f(l()),lt[H]=K),K}function f(S){let U=[],q=[],H=[];for(let W=0;W<e;W++)U[W]=0,q[W]=0,H[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:q,attributeDivisors:H,object:S,attributes:{},index:null}}function d(S,U,q,H){let W=r.attributes,lt=U.attributes,K=0,gt=q.getAttributes();for(let Z in gt)if(gt[Z].location>=0){let At=W[Z],Nt=lt[Z];if(Nt===void 0&&(Z==="instanceMatrix"&&S.instanceMatrix&&(Nt=S.instanceMatrix),Z==="instanceColor"&&S.instanceColor&&(Nt=S.instanceColor)),At===void 0||At.attribute!==Nt||Nt&&At.data!==Nt.data)return!0;K++}return r.attributesNum!==K||r.index!==H}function g(S,U,q,H){let W={},lt=U.attributes,K=0,gt=q.getAttributes();for(let Z in gt)if(gt[Z].location>=0){let At=lt[Z];At===void 0&&(Z==="instanceMatrix"&&S.instanceMatrix&&(At=S.instanceMatrix),Z==="instanceColor"&&S.instanceColor&&(At=S.instanceColor));let Nt={};Nt.attribute=At,At&&At.data&&(Nt.data=At.data),W[Z]=Nt,K++}r.attributes=W,r.attributesNum=K,r.index=H}function x(){let S=r.newAttributes;for(let U=0,q=S.length;U<q;U++)S[U]=0}function m(S){p(S,0)}function p(S,U){let q=r.newAttributes,H=r.enabledAttributes,W=r.attributeDivisors;q[S]=1,H[S]===0&&(n.enableVertexAttribArray(S),H[S]=1),W[S]!==U&&(n.vertexAttribDivisor(S,U),W[S]=U)}function M(){let S=r.newAttributes,U=r.enabledAttributes;for(let q=0,H=U.length;q<H;q++)U[q]!==S[q]&&(n.disableVertexAttribArray(q),U[q]=0)}function y(S,U,q,H,W,lt,K){K===!0?n.vertexAttribIPointer(S,U,q,W,lt):n.vertexAttribPointer(S,U,q,H,W,lt)}function _(S,U,q,H){x();let W=H.attributes,lt=q.getAttributes(),K=U.defaultAttributeValues;for(let gt in lt){let Z=lt[gt];if(Z.location>=0){let wt=W[gt];if(wt===void 0&&(gt==="instanceMatrix"&&S.instanceMatrix&&(wt=S.instanceMatrix),gt==="instanceColor"&&S.instanceColor&&(wt=S.instanceColor)),wt!==void 0){let At=wt.normalized,Nt=wt.itemSize,te=t.get(wt);if(te===void 0)continue;let ge=te.buffer,nt=te.type,vt=te.bytesPerElement,Bt=nt===n.INT||nt===n.UNSIGNED_INT||wt.gpuType===_0;if(wt.isInterleavedBufferAttribute){let Mt=wt.data,Wt=Mt.stride,ee=wt.offset;if(Mt.isInstancedInterleavedBuffer){for(let Kt=0;Kt<Z.locationSize;Kt++)p(Z.location+Kt,Mt.meshPerAttribute);S.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let Kt=0;Kt<Z.locationSize;Kt++)m(Z.location+Kt);n.bindBuffer(n.ARRAY_BUFFER,ge);for(let Kt=0;Kt<Z.locationSize;Kt++)y(Z.location+Kt,Nt/Z.locationSize,nt,At,Wt*vt,(ee+Nt/Z.locationSize*Kt)*vt,Bt)}else{if(wt.isInstancedBufferAttribute){for(let Mt=0;Mt<Z.locationSize;Mt++)p(Z.location+Mt,wt.meshPerAttribute);S.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=wt.meshPerAttribute*wt.count)}else for(let Mt=0;Mt<Z.locationSize;Mt++)m(Z.location+Mt);n.bindBuffer(n.ARRAY_BUFFER,ge);for(let Mt=0;Mt<Z.locationSize;Mt++)y(Z.location+Mt,Nt/Z.locationSize,nt,At,Nt*vt,Nt/Z.locationSize*Mt*vt,Bt)}}else if(K!==void 0){let At=K[gt];if(At!==void 0)switch(At.length){case 2:n.vertexAttrib2fv(Z.location,At);break;case 3:n.vertexAttrib3fv(Z.location,At);break;case 4:n.vertexAttrib4fv(Z.location,At);break;default:n.vertexAttrib1fv(Z.location,At)}}}}M()}function D(){N();for(let S in i){let U=i[S];for(let q in U){let H=U[q];for(let W in H)h(H[W].object),delete H[W];delete U[q]}delete i[S]}}function C(S){if(i[S.id]===void 0)return;let U=i[S.id];for(let q in U){let H=U[q];for(let W in H)h(H[W].object),delete H[W];delete U[q]}delete i[S.id]}function P(S){for(let U in i){let q=i[U];if(q[S.id]===void 0)continue;let H=q[S.id];for(let W in H)h(H[W].object),delete H[W];delete q[S.id]}}function N(){A(),o=!0,r!==s&&(r=s,c(r.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:N,resetDefaultState:A,dispose:D,releaseStatesOfGeometry:C,releaseStatesOfProgram:P,initAttributes:x,enableAttribute:m,disableUnusedAttributes:M}}function Ig(n,t,e){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),e.update(h,i,1)}function o(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),e.update(h,i,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];e.update(d,i,1)}function l(c,h,u,f){if(u===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,h,0,f,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x]*f[x];e.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Pg(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let P=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(P){return!(P!==li&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){let N=P===uo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==Wi&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==vi&&!N)}function l(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),D=g>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:y,maxFragmentUniforms:_,vertexTextures:D,maxSamples:C}}function Lg(n){let t=this,e=null,i=0,s=!1,r=!1,o=new oi,a=new ce,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||i!==0||s;return s=f,i=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=n.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let M=r?0:i,y=M*4,_=p.clippingState||null;l.value=_,_=h(g,f,y,d);for(let D=0;D!==y;++D)_[D]=e[D];p.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,f,d,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let p=d+x*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,_=d;y!==x;++y,_+=4)o.copy(u[y]).applyMatrix4(M,a),o.normal.toArray(m,_),m[_+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function Dg(n){let t=new WeakMap;function e(o,a){return a===jl?o.mapping=sr:a===Ql&&(o.mapping=rr),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===jl||a===Ql)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Dc(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}var Nc=class extends ba{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ks=4,Ph=[.125,.215,.35,.446,.526,.582],Ms=20,Cl=new Nc,Lh=new Yt,Il=null,Pl=0,Ll=0,Dl=!1,vs=(1+Math.sqrt(5))/2,Ws=1/vs,Dh=[new I(-vs,Ws,0),new I(vs,Ws,0),new I(-Ws,0,vs),new I(Ws,0,vs),new I(0,vs,-Ws),new I(0,vs,Ws),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],dr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){Il=this._renderer.getRenderTarget(),Pl=this._renderer.getActiveCubeFace(),Ll=this._renderer.getActiveMipmapLevel(),Dl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Oh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Uh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Il,Pl,Ll),this._renderer.xr.enabled=Dl,t.scissorTest=!1,$o(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===sr||t.mapping===rr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Il=this._renderer.getRenderTarget(),Pl=this._renderer.getActiveCubeFace(),Ll=this._renderer.getActiveMipmapLevel(),Dl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:yi,minFilter:yi,generateMipmaps:!1,type:uo,format:li,colorSpace:Er,depthBuffer:!1},s=Nh(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Nh(t,e,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ng(r)),this._blurMaterial=Ug(r,t,e)}return s}_compileMaterial(t){let e=new Vt(this._lodPlanes[0],t);this._renderer.compile(e,Cl)}_sceneToCubeUV(t,e,i,s){let a=new pn(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Lh),h.toneMapping=as,h.autoClear=!1;let d=new mn({name:"PMREM.Background",side:cn,depthWrite:!1,depthTest:!1}),g=new Vt(new we,d),x=!1,m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,x=!0):(d.color.copy(Lh),x=!0);for(let p=0;p<6;p++){let M=p%3;M===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):M===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let y=this._cubeSize;$o(s,M*y,p>2?y:0,y,y),h.setRenderTarget(s),x&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===sr||t.mapping===rr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Oh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Uh());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Vt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;$o(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,Cl)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Dh[(s-r-1)%Dh.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Vt(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Ms-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):Ms;m>Ms&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ms}`);let p=[],M=0;for(let P=0;P<Ms;++P){let N=P/x,A=Math.exp(-N*N/2);p.push(A),P===0?M+=A:P<m&&(M+=2*A)}for(let P=0;P<p.length;P++)p[P]=p[P]/M;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-i;let _=this._sizeLods[s],D=3*_*(s>y-Ks?s-y+Ks:0),C=4*(this._cubeSize-_);$o(e,D,C,3*_,2*_),l.setRenderTarget(e),l.render(u,Cl)}};function Ng(n){let t=[],e=[],i=[],s=n,r=n-Ks+1+Ph.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>n-Ks?l=Ph[o-n+Ks-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,x=3,m=2,p=1,M=new Float32Array(x*g*d),y=new Float32Array(m*g*d),_=new Float32Array(p*g*d);for(let C=0;C<d;C++){let P=C%3*2/3-1,N=C>2?0:-1,A=[P,N,0,P+2/3,N,0,P+2/3,N+1,0,P,N,0,P+2/3,N+1,0,P,N+1,0];M.set(A,x*g*C),y.set(f,m*g*C);let S=[C,C,C,C,C,C];_.set(S,p*g*C)}let D=new Pe;D.setAttribute("position",new Ve(M,x)),D.setAttribute("uv",new Ve(y,m)),D.setAttribute("faceIndex",new Ve(_,p)),t.push(D),s>Ks&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Nh(n,t,e){let i=new Xi(n,t,e);return i.texture.mapping=Xa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function $o(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function Ug(n,t,e){let i=new Float32Array(Ms),s=new I(0,1,0);return new Vn({name:"SphericalGaussianBlur",defines:{n:Ms,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:w0(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:os,depthTest:!1,depthWrite:!1})}function Uh(){return new Vn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:w0(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:os,depthTest:!1,depthWrite:!1})}function Oh(){return new Vn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:w0(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:os,depthTest:!1,depthWrite:!1})}function w0(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Og(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===jl||l===Ql,h=l===sr||l===rr;if(c||h){let u=t.get(a),f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new dr(n)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let d=a.image;return c&&d&&d.height>0||h&&d&&s(d)?(e===null&&(e=new dr(n)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function Fg(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&Gr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function kg(n,t,e,i){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);for(let g in f.morphAttributes){let x=f.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)t.remove(x[m])}f.removeEventListener("dispose",o),delete s[f.id];let d=r.get(f);d&&(t.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let g in f)t.update(f[g],n.ARRAY_BUFFER);let d=u.morphAttributes;for(let g in d){let x=d[g];for(let m=0,p=x.length;m<p;m++)t.update(x[m],n.ARRAY_BUFFER)}}function c(u){let f=[],d=u.index,g=u.attributes.position,x=0;if(d!==null){let M=d.array;x=d.version;for(let y=0,_=M.length;y<_;y+=3){let D=M[y+0],C=M[y+1],P=M[y+2];f.push(D,C,C,P,P,D)}}else if(g!==void 0){let M=g.array;x=g.version;for(let y=0,_=M.length/3-1;y<_;y+=3){let D=y+0,C=y+1,P=y+2;f.push(D,C,C,P,P,D)}}else return;let m=new(Du(f)?ur:hr)(f,1);m.version=x;let p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Bg(n,t,e){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){n.drawElements(i,d,r,f*o),e.update(d,i,1)}function c(f,d,g){g!==0&&(n.drawElementsInstanced(i,d,r,f*o,g),e.update(d,i,g))}function h(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,i,1)}function u(f,d,g,x){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,r,f,0,x,0,g);let p=0;for(let M=0;M<g;M++)p+=d[M]*x[M];e.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function zg(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Hg(n,t,e){let i=new WeakMap,s=new Re;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=i.get(a);if(f===void 0||f.count!==u){let A=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",A)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],y=0;d===!0&&(y=1),g===!0&&(y=2),x===!0&&(y=3);let _=a.attributes.position.count*y,D=1;_>t.maxTextureSize&&(D=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let C=new Float32Array(_*D*4*u),P=new va(C,_,D,u);P.type=vi,P.needsUpdate=!0;let N=y*4;for(let S=0;S<u;S++){let U=m[S],q=p[S],H=M[S],W=_*D*4*S;for(let lt=0;lt<U.count;lt++){let K=lt*N;d===!0&&(s.fromBufferAttribute(U,lt),C[W+K+0]=s.x,C[W+K+1]=s.y,C[W+K+2]=s.z,C[W+K+3]=0),g===!0&&(s.fromBufferAttribute(q,lt),C[W+K+4]=s.x,C[W+K+5]=s.y,C[W+K+6]=s.z,C[W+K+7]=0),x===!0&&(s.fromBufferAttribute(H,lt),C[W+K+8]=s.x,C[W+K+9]=s.y,C[W+K+10]=s.z,C[W+K+11]=H.itemSize===4?s.w:1)}}f={count:u,texture:P,size:new yt(_,D)},i.set(a,f),a.addEventListener("dispose",A)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function Vg(n,t,e,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var Sa=class extends Pn{constructor(t,e,i,s,r,o,a,l,c,h=Qs){if(h!==Qs&&h!==ar)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Qs&&(i=Ss),i===void 0&&h===ar&&(i=or),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:kn,this.minFilter=l!==void 0?l:kn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Fu=new Pn,Fh=new Sa(1,1),ku=new va,Bu=new Pc,zu=new Ma,kh=[],Bh=[],zh=new Float32Array(16),Hh=new Float32Array(9),Vh=new Float32Array(4);function Tr(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=kh[s];if(r===void 0&&(r=new Float32Array(s),kh[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function tn(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function en(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function qa(n,t){let e=Bh[t];e===void 0&&(e=new Int32Array(t),Bh[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Gg(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Wg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(tn(e,t))return;n.uniform2fv(this.addr,t),en(e,t)}}function Xg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(tn(e,t))return;n.uniform3fv(this.addr,t),en(e,t)}}function Yg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(tn(e,t))return;n.uniform4fv(this.addr,t),en(e,t)}}function qg(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(tn(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),en(e,t)}else{if(tn(e,i))return;Vh.set(i),n.uniformMatrix2fv(this.addr,!1,Vh),en(e,i)}}function $g(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(tn(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),en(e,t)}else{if(tn(e,i))return;Hh.set(i),n.uniformMatrix3fv(this.addr,!1,Hh),en(e,i)}}function Zg(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(tn(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),en(e,t)}else{if(tn(e,i))return;zh.set(i),n.uniformMatrix4fv(this.addr,!1,zh),en(e,i)}}function Kg(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Jg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(tn(e,t))return;n.uniform2iv(this.addr,t),en(e,t)}}function jg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(tn(e,t))return;n.uniform3iv(this.addr,t),en(e,t)}}function Qg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(tn(e,t))return;n.uniform4iv(this.addr,t),en(e,t)}}function t1(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function e1(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(tn(e,t))return;n.uniform2uiv(this.addr,t),en(e,t)}}function n1(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(tn(e,t))return;n.uniform3uiv(this.addr,t),en(e,t)}}function i1(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(tn(e,t))return;n.uniform4uiv(this.addr,t),en(e,t)}}function s1(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Fh.compareFunction=Lu,r=Fh):r=Fu,e.setTexture2D(t||r,s)}function r1(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Bu,s)}function o1(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||zu,s)}function a1(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||ku,s)}function l1(n){switch(n){case 5126:return Gg;case 35664:return Wg;case 35665:return Xg;case 35666:return Yg;case 35674:return qg;case 35675:return $g;case 35676:return Zg;case 5124:case 35670:return Kg;case 35667:case 35671:return Jg;case 35668:case 35672:return jg;case 35669:case 35673:return Qg;case 5125:return t1;case 36294:return e1;case 36295:return n1;case 36296:return i1;case 35678:case 36198:case 36298:case 36306:case 35682:return s1;case 35679:case 36299:case 36307:return r1;case 35680:case 36300:case 36308:case 36293:return o1;case 36289:case 36303:case 36311:case 36292:return a1}}function c1(n,t){n.uniform1fv(this.addr,t)}function h1(n,t){let e=Tr(t,this.size,2);n.uniform2fv(this.addr,e)}function u1(n,t){let e=Tr(t,this.size,3);n.uniform3fv(this.addr,e)}function f1(n,t){let e=Tr(t,this.size,4);n.uniform4fv(this.addr,e)}function d1(n,t){let e=Tr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function p1(n,t){let e=Tr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function m1(n,t){let e=Tr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function g1(n,t){n.uniform1iv(this.addr,t)}function x1(n,t){n.uniform2iv(this.addr,t)}function _1(n,t){n.uniform3iv(this.addr,t)}function y1(n,t){n.uniform4iv(this.addr,t)}function v1(n,t){n.uniform1uiv(this.addr,t)}function b1(n,t){n.uniform2uiv(this.addr,t)}function M1(n,t){n.uniform3uiv(this.addr,t)}function S1(n,t){n.uniform4uiv(this.addr,t)}function E1(n,t,e){let i=this.cache,s=t.length,r=qa(e,s);tn(i,r)||(n.uniform1iv(this.addr,r),en(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Fu,r[o])}function T1(n,t,e){let i=this.cache,s=t.length,r=qa(e,s);tn(i,r)||(n.uniform1iv(this.addr,r),en(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Bu,r[o])}function w1(n,t,e){let i=this.cache,s=t.length,r=qa(e,s);tn(i,r)||(n.uniform1iv(this.addr,r),en(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||zu,r[o])}function A1(n,t,e){let i=this.cache,s=t.length,r=qa(e,s);tn(i,r)||(n.uniform1iv(this.addr,r),en(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||ku,r[o])}function R1(n){switch(n){case 5126:return c1;case 35664:return h1;case 35665:return u1;case 35666:return f1;case 35674:return d1;case 35675:return p1;case 35676:return m1;case 5124:case 35670:return g1;case 35667:case 35671:return x1;case 35668:case 35672:return _1;case 35669:case 35673:return y1;case 5125:return v1;case 36294:return b1;case 36295:return M1;case 36296:return S1;case 35678:case 36198:case 36298:case 36306:case 35682:return E1;case 35679:case 36299:case 36307:return T1;case 35680:case 36300:case 36308:case 36293:return w1;case 36289:case 36303:case 36311:case 36292:return A1}}var Uc=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=l1(e.type)}},Oc=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=R1(e.type)}},Fc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},Nl=/(\w+)(\])?(\[|\.)?/g;function Gh(n,t){n.seq.push(t),n.map[t.id]=t}function C1(n,t,e){let i=n.name,s=i.length;for(Nl.lastIndex=0;;){let r=Nl.exec(i),o=Nl.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Gh(e,c===void 0?new Uc(a,n,t):new Oc(a,n,t));break}else{let u=e.map[a];u===void 0&&(u=new Fc(a),Gh(e,u)),e=u}}}var nr=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);C1(r,o,this)}}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function Wh(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var I1=37297,P1=0;function L1(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var Xh=new ce;function D1(n){Te._getMatrix(Xh,Te.workingColorSpace,n);let t=`mat3( ${Xh.elements.map(e=>e.toFixed(4))} )`;switch(Te.getTransfer(n)){case Ya:return[t,"LinearTransferOETF"];case Fe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Yh(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+L1(n.getShaderSource(t),o)}else return s}function N1(n,t){let e=D1(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function U1(n,t){let e;switch(t){case Yf:e="Linear";break;case qf:e="Reinhard";break;case $f:e="Cineon";break;case x0:e="ACESFilmic";break;case Kf:e="AgX";break;case Jf:e="Neutral";break;case Zf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Zo=new I;function O1(){Te.getLuminanceCoefficients(Zo);let n=Zo.x.toFixed(4),t=Zo.y.toFixed(4),e=Zo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function F1(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wr).join(`
`)}function k1(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function B1(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Wr(n){return n!==""}function qh(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function $h(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var z1=/^[ \t]*#include +<([\w\d./]+)>/gm;function kc(n){return n.replace(z1,V1)}var H1=new Map;function V1(n,t){let e=me[t];if(e===void 0){let i=H1.get(t);if(i!==void 0)e=me[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return kc(e)}var G1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zh(n){return n.replace(G1,W1)}function W1(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Kh(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function X1(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Wa?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===g0?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Oi&&(t="SHADOWMAP_TYPE_VSM"),t}function Y1(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case sr:case rr:t="ENVMAP_TYPE_CUBE";break;case Xa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function q1(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case rr:t="ENVMAP_MODE_REFRACTION";break}return t}function $1(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case vu:t="ENVMAP_BLENDING_MULTIPLY";break;case Wf:t="ENVMAP_BLENDING_MIX";break;case Xf:t="ENVMAP_BLENDING_ADD";break}return t}function Z1(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function K1(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=X1(e),c=Y1(e),h=q1(e),u=$1(e),f=Z1(e),d=F1(e),g=k1(r),x=s.createProgram(),m,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Wr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Wr).join(`
`),p.length>0&&(p+=`
`)):(m=[Kh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wr).join(`
`),p=[Kh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==as?"#define TONE_MAPPING":"",e.toneMapping!==as?me.tonemapping_pars_fragment:"",e.toneMapping!==as?U1("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",me.colorspace_pars_fragment,N1("linearToOutputTexel",e.outputColorSpace),O1(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Wr).join(`
`)),o=kc(o),o=qh(o,e),o=$h(o,e),a=kc(a),a=qh(a,e),a=$h(a,e),o=Zh(o),a=Zh(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===ch?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ch?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let y=M+m+o,_=M+p+a,D=Wh(s,s.VERTEX_SHADER,y),C=Wh(s,s.FRAGMENT_SHADER,_);s.attachShader(x,D),s.attachShader(x,C),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function P(U){if(n.debug.checkShaderErrors){let q=s.getProgramInfoLog(x).trim(),H=s.getShaderInfoLog(D).trim(),W=s.getShaderInfoLog(C).trim(),lt=!0,K=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(lt=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,D,C);else{let gt=Yh(s,D,"vertex"),Z=Yh(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+q+`
`+gt+`
`+Z)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(H===""||W==="")&&(K=!1);K&&(U.diagnostics={runnable:lt,programLog:q,vertexShader:{log:H,prefix:m},fragmentShader:{log:W,prefix:p}})}s.deleteShader(D),s.deleteShader(C),N=new nr(s,x),A=B1(s,x)}let N;this.getUniforms=function(){return N===void 0&&P(this),N};let A;this.getAttributes=function(){return A===void 0&&P(this),A};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(x,I1)),S},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=P1++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=D,this.fragmentShader=C,this}var J1=0,Bc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new zc(t),e.set(t,i)),i}},zc=class{constructor(t){this.id=J1++,this.code=t,this.usedTimes=0}};function j1(n,t,e,i,s,r,o){let a=new Jr,l=new Bc,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures,d=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(A){return c.add(A),A===0?"uv":`uv${A}`}function m(A,S,U,q,H){let W=q.fog,lt=H.geometry,K=A.isMeshStandardMaterial?q.environment:null,gt=(A.isMeshStandardMaterial?e:t).get(A.envMap||K),Z=gt&&gt.mapping===Xa?gt.image.height:null,wt=g[A.type];A.precision!==null&&(d=s.getMaxPrecision(A.precision),d!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",d,"instead."));let At=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,Nt=At!==void 0?At.length:0,te=0;lt.morphAttributes.position!==void 0&&(te=1),lt.morphAttributes.normal!==void 0&&(te=2),lt.morphAttributes.color!==void 0&&(te=3);let ge,nt,vt,Bt;if(wt){let ve=_i[wt];ge=ve.vertexShader,nt=ve.fragmentShader}else ge=A.vertexShader,nt=A.fragmentShader,l.update(A),vt=l.getVertexShaderID(A),Bt=l.getFragmentShaderID(A);let Mt=n.getRenderTarget(),Wt=n.state.buffers.depth.getReversed(),ee=H.isInstancedMesh===!0,Kt=H.isBatchedMesh===!0,_e=!!A.map,F=!!A.matcap,it=!!gt,E=!!A.aoMap,dt=!!A.lightMap,V=!!A.bumpMap,ut=!!A.normalMap,at=!!A.displacementMap,Tt=!!A.emissiveMap,ft=!!A.metalnessMap,R=!!A.roughnessMap,b=A.anisotropy>0,z=A.clearcoat>0,j=A.dispersion>0,ht=A.iridescence>0,rt=A.sheen>0,zt=A.transmission>0,bt=b&&!!A.anisotropyMap,Ct=z&&!!A.clearcoatMap,he=z&&!!A.clearcoatNormalMap,pt=z&&!!A.clearcoatRoughnessMap,Ft=ht&&!!A.iridescenceMap,kt=ht&&!!A.iridescenceThicknessMap,ne=rt&&!!A.sheenColorMap,Ot=rt&&!!A.sheenRoughnessMap,ue=!!A.specularMap,le=!!A.specularColorMap,pe=!!A.specularIntensityMap,O=zt&&!!A.transmissionMap,Pt=zt&&!!A.thicknessMap,J=!!A.gradientMap,ct=!!A.alphaMap,Lt=A.alphaTest>0,Et=!!A.alphaHash,re=!!A.extensions,ke=as;A.toneMapped&&(Mt===null||Mt.isXRRenderTarget===!0)&&(ke=n.toneMapping);let Se={shaderID:wt,shaderType:A.type,shaderName:A.name,vertexShader:ge,fragmentShader:nt,defines:A.defines,customVertexShaderID:vt,customFragmentShaderID:Bt,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:d,batching:Kt,batchingColor:Kt&&H._colorsTexture!==null,instancing:ee,instancingColor:ee&&H.instanceColor!==null,instancingMorph:ee&&H.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Mt===null?n.outputColorSpace:Mt.isXRRenderTarget===!0?Mt.texture.colorSpace:Er,alphaToCoverage:!!A.alphaToCoverage,map:_e,matcap:F,envMap:it,envMapMode:it&&gt.mapping,envMapCubeUVHeight:Z,aoMap:E,lightMap:dt,bumpMap:V,normalMap:ut,displacementMap:f&&at,emissiveMap:Tt,normalMapObjectSpace:ut&&A.normalMapType===ed,normalMapTangentSpace:ut&&A.normalMapType===Pu,metalnessMap:ft,roughnessMap:R,anisotropy:b,anisotropyMap:bt,clearcoat:z,clearcoatMap:Ct,clearcoatNormalMap:he,clearcoatRoughnessMap:pt,dispersion:j,iridescence:ht,iridescenceMap:Ft,iridescenceThicknessMap:kt,sheen:rt,sheenColorMap:ne,sheenRoughnessMap:Ot,specularMap:ue,specularColorMap:le,specularIntensityMap:pe,transmission:zt,transmissionMap:O,thicknessMap:Pt,gradientMap:J,opaque:A.transparent===!1&&A.blending===js&&A.alphaToCoverage===!1,alphaMap:ct,alphaTest:Lt,alphaHash:Et,combine:A.combine,mapUv:_e&&x(A.map.channel),aoMapUv:E&&x(A.aoMap.channel),lightMapUv:dt&&x(A.lightMap.channel),bumpMapUv:V&&x(A.bumpMap.channel),normalMapUv:ut&&x(A.normalMap.channel),displacementMapUv:at&&x(A.displacementMap.channel),emissiveMapUv:Tt&&x(A.emissiveMap.channel),metalnessMapUv:ft&&x(A.metalnessMap.channel),roughnessMapUv:R&&x(A.roughnessMap.channel),anisotropyMapUv:bt&&x(A.anisotropyMap.channel),clearcoatMapUv:Ct&&x(A.clearcoatMap.channel),clearcoatNormalMapUv:he&&x(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pt&&x(A.clearcoatRoughnessMap.channel),iridescenceMapUv:Ft&&x(A.iridescenceMap.channel),iridescenceThicknessMapUv:kt&&x(A.iridescenceThicknessMap.channel),sheenColorMapUv:ne&&x(A.sheenColorMap.channel),sheenRoughnessMapUv:Ot&&x(A.sheenRoughnessMap.channel),specularMapUv:ue&&x(A.specularMap.channel),specularColorMapUv:le&&x(A.specularColorMap.channel),specularIntensityMapUv:pe&&x(A.specularIntensityMap.channel),transmissionMapUv:O&&x(A.transmissionMap.channel),thicknessMapUv:Pt&&x(A.thicknessMap.channel),alphaMapUv:ct&&x(A.alphaMap.channel),vertexTangents:!!lt.attributes.tangent&&(ut||b),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!lt.attributes.uv&&(_e||ct),fog:!!W,useFog:A.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:A.flatShading===!0,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Wt,skinning:H.isSkinnedMesh===!0,morphTargets:lt.morphAttributes.position!==void 0,morphNormals:lt.morphAttributes.normal!==void 0,morphColors:lt.morphAttributes.color!==void 0,morphTargetsCount:Nt,morphTextureStride:te,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:A.dithering,shadowMapEnabled:n.shadowMap.enabled&&U.length>0,shadowMapType:n.shadowMap.type,toneMapping:ke,decodeVideoTexture:_e&&A.map.isVideoTexture===!0&&Te.getTransfer(A.map.colorSpace)===Fe,decodeVideoTextureEmissive:Tt&&A.emissiveMap.isVideoTexture===!0&&Te.getTransfer(A.emissiveMap.colorSpace)===Fe,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===Ce,flipSided:A.side===cn,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:re&&A.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(re&&A.extensions.multiDraw===!0||Kt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Se.vertexUv1s=c.has(1),Se.vertexUv2s=c.has(2),Se.vertexUv3s=c.has(3),c.clear(),Se}function p(A){let S=[];if(A.shaderID?S.push(A.shaderID):(S.push(A.customVertexShaderID),S.push(A.customFragmentShaderID)),A.defines!==void 0)for(let U in A.defines)S.push(U),S.push(A.defines[U]);return A.isRawShaderMaterial===!1&&(M(S,A),y(S,A),S.push(n.outputColorSpace)),S.push(A.customProgramCacheKey),S.join()}function M(A,S){A.push(S.precision),A.push(S.outputColorSpace),A.push(S.envMapMode),A.push(S.envMapCubeUVHeight),A.push(S.mapUv),A.push(S.alphaMapUv),A.push(S.lightMapUv),A.push(S.aoMapUv),A.push(S.bumpMapUv),A.push(S.normalMapUv),A.push(S.displacementMapUv),A.push(S.emissiveMapUv),A.push(S.metalnessMapUv),A.push(S.roughnessMapUv),A.push(S.anisotropyMapUv),A.push(S.clearcoatMapUv),A.push(S.clearcoatNormalMapUv),A.push(S.clearcoatRoughnessMapUv),A.push(S.iridescenceMapUv),A.push(S.iridescenceThicknessMapUv),A.push(S.sheenColorMapUv),A.push(S.sheenRoughnessMapUv),A.push(S.specularMapUv),A.push(S.specularColorMapUv),A.push(S.specularIntensityMapUv),A.push(S.transmissionMapUv),A.push(S.thicknessMapUv),A.push(S.combine),A.push(S.fogExp2),A.push(S.sizeAttenuation),A.push(S.morphTargetsCount),A.push(S.morphAttributeCount),A.push(S.numDirLights),A.push(S.numPointLights),A.push(S.numSpotLights),A.push(S.numSpotLightMaps),A.push(S.numHemiLights),A.push(S.numRectAreaLights),A.push(S.numDirLightShadows),A.push(S.numPointLightShadows),A.push(S.numSpotLightShadows),A.push(S.numSpotLightShadowsWithMaps),A.push(S.numLightProbes),A.push(S.shadowMapType),A.push(S.toneMapping),A.push(S.numClippingPlanes),A.push(S.numClipIntersection),A.push(S.depthPacking)}function y(A,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),A.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),A.push(a.mask)}function _(A){let S=g[A.type],U;if(S){let q=_i[S];U=Vd.clone(q.uniforms)}else U=A.uniforms;return U}function D(A,S){let U;for(let q=0,H=h.length;q<H;q++){let W=h[q];if(W.cacheKey===S){U=W,++U.usedTimes;break}}return U===void 0&&(U=new K1(n,S,A,r),h.push(U)),U}function C(A){if(--A.usedTimes===0){let S=h.indexOf(A);h[S]=h[h.length-1],h.pop(),A.destroy()}}function P(A){l.remove(A)}function N(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:D,releaseProgram:C,releaseShaderCache:P,programs:h,dispose:N}}function Q1(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function t2(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Jh(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function jh(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(u,f,d,g,x,m){let p=n[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},n[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=x,p.group=m),t++,p}function a(u,f,d,g,x,m){let p=o(u,f,d,g,x,m);d.transmission>0?i.push(p):d.transparent===!0?s.push(p):e.push(p)}function l(u,f,d,g,x,m){let p=o(u,f,d,g,x,m);d.transmission>0?i.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function c(u,f){e.length>1&&e.sort(u||t2),i.length>1&&i.sort(f||Jh),s.length>1&&s.sort(f||Jh)}function h(){for(let u=t,f=n.length;u<f;u++){let d=n[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function e2(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new jh,n.set(i,[o])):s>=r.length?(o=new jh,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function n2(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new Yt};break;case"SpotLight":e={position:new I,direction:new I,color:new Yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Yt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Yt,groundColor:new Yt};break;case"RectAreaLight":e={color:new Yt,position:new I,halfWidth:new I,halfHeight:new I};break}return n[t.id]=e,e}}}function i2(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var s2=0;function r2(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function o2(n){let t=new n2,e=i2(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new I);let s=new I,r=new de,o=new de;function a(c){let h=0,u=0,f=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let d=0,g=0,x=0,m=0,p=0,M=0,y=0,_=0,D=0,C=0,P=0;c.sort(r2);for(let A=0,S=c.length;A<S;A++){let U=c[A],q=U.color,H=U.intensity,W=U.distance,lt=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)h+=q.r*H,u+=q.g*H,f+=q.b*H;else if(U.isLightProbe){for(let K=0;K<9;K++)i.probe[K].addScaledVector(U.sh.coefficients[K],H);P++}else if(U.isDirectionalLight){let K=t.get(U);if(K.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let gt=U.shadow,Z=e.get(U);Z.shadowIntensity=gt.intensity,Z.shadowBias=gt.bias,Z.shadowNormalBias=gt.normalBias,Z.shadowRadius=gt.radius,Z.shadowMapSize=gt.mapSize,i.directionalShadow[d]=Z,i.directionalShadowMap[d]=lt,i.directionalShadowMatrix[d]=U.shadow.matrix,M++}i.directional[d]=K,d++}else if(U.isSpotLight){let K=t.get(U);K.position.setFromMatrixPosition(U.matrixWorld),K.color.copy(q).multiplyScalar(H),K.distance=W,K.coneCos=Math.cos(U.angle),K.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),K.decay=U.decay,i.spot[x]=K;let gt=U.shadow;if(U.map&&(i.spotLightMap[D]=U.map,D++,gt.updateMatrices(U),U.castShadow&&C++),i.spotLightMatrix[x]=gt.matrix,U.castShadow){let Z=e.get(U);Z.shadowIntensity=gt.intensity,Z.shadowBias=gt.bias,Z.shadowNormalBias=gt.normalBias,Z.shadowRadius=gt.radius,Z.shadowMapSize=gt.mapSize,i.spotShadow[x]=Z,i.spotShadowMap[x]=lt,_++}x++}else if(U.isRectAreaLight){let K=t.get(U);K.color.copy(q).multiplyScalar(H),K.halfWidth.set(U.width*.5,0,0),K.halfHeight.set(0,U.height*.5,0),i.rectArea[m]=K,m++}else if(U.isPointLight){let K=t.get(U);if(K.color.copy(U.color).multiplyScalar(U.intensity),K.distance=U.distance,K.decay=U.decay,U.castShadow){let gt=U.shadow,Z=e.get(U);Z.shadowIntensity=gt.intensity,Z.shadowBias=gt.bias,Z.shadowNormalBias=gt.normalBias,Z.shadowRadius=gt.radius,Z.shadowMapSize=gt.mapSize,Z.shadowCameraNear=gt.camera.near,Z.shadowCameraFar=gt.camera.far,i.pointShadow[g]=Z,i.pointShadowMap[g]=lt,i.pointShadowMatrix[g]=U.shadow.matrix,y++}i.point[g]=K,g++}else if(U.isHemisphereLight){let K=t.get(U);K.skyColor.copy(U.color).multiplyScalar(H),K.groundColor.copy(U.groundColor).multiplyScalar(H),i.hemi[p]=K,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Dt.LTC_FLOAT_1,i.rectAreaLTC2=Dt.LTC_FLOAT_2):(i.rectAreaLTC1=Dt.LTC_HALF_1,i.rectAreaLTC2=Dt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=f;let N=i.hash;(N.directionalLength!==d||N.pointLength!==g||N.spotLength!==x||N.rectAreaLength!==m||N.hemiLength!==p||N.numDirectionalShadows!==M||N.numPointShadows!==y||N.numSpotShadows!==_||N.numSpotMaps!==D||N.numLightProbes!==P)&&(i.directional.length=d,i.spot.length=x,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=_+D-C,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=P,N.directionalLength=d,N.pointLength=g,N.spotLength=x,N.rectAreaLength=m,N.hemiLength=p,N.numDirectionalShadows=M,N.numPointShadows=y,N.numSpotShadows=_,N.numSpotMaps=D,N.numLightProbes=P,i.version=s2++)}function l(c,h){let u=0,f=0,d=0,g=0,x=0,m=h.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){let y=c[p];if(y.isDirectionalLight){let _=i.directional[u];_.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),u++}else if(y.isSpotLight){let _=i.spot[d];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),d++}else if(y.isRectAreaLight){let _=i.rectArea[g];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),_.halfWidth.set(y.width*.5,0,0),_.halfHeight.set(0,y.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){let _=i.point[f];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){let _=i.hemi[x];_.direction.setFromMatrixPosition(y.matrixWorld),_.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function Qh(n){let t=new o2(n),e=[],i=[];function s(h){c.camera=h,e.length=0,i.length=0}function r(h){e.push(h)}function o(h){i.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function a2(n){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Qh(n),t.set(s,[a])):r>=o.length?(a=new Qh(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var Hc=class extends Mi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Qf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Vc=class extends Mi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},l2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,c2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function h2(n,t,e){let i=new jr,s=new yt,r=new yt,o=new Re,a=new Hc({depthPacking:td}),l=new Vc,c={},h=e.maxTextureSize,u={[ls]:cn,[cn]:ls,[Ce]:Ce},f=new Vn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new yt},radius:{value:4}},vertexShader:l2,fragmentShader:c2}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new Pe;g.setAttribute("position",new Ve(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Vt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wa;let p=this.type;this.render=function(C,P,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;let A=n.getRenderTarget(),S=n.getActiveCubeFace(),U=n.getActiveMipmapLevel(),q=n.state;q.setBlending(os),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);let H=p!==Oi&&this.type===Oi,W=p===Oi&&this.type!==Oi;for(let lt=0,K=C.length;lt<K;lt++){let gt=C[lt],Z=gt.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",gt,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;s.copy(Z.mapSize);let wt=Z.getFrameExtents();if(s.multiply(wt),r.copy(Z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/wt.x),s.x=r.x*wt.x,Z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/wt.y),s.y=r.y*wt.y,Z.mapSize.y=r.y)),Z.map===null||H===!0||W===!0){let Nt=this.type!==Oi?{minFilter:kn,magFilter:kn}:{};Z.map!==null&&Z.map.dispose(),Z.map=new Xi(s.x,s.y,Nt),Z.map.texture.name=gt.name+".shadowMap",Z.camera.updateProjectionMatrix()}n.setRenderTarget(Z.map),n.clear();let At=Z.getViewportCount();for(let Nt=0;Nt<At;Nt++){let te=Z.getViewport(Nt);o.set(r.x*te.x,r.y*te.y,r.x*te.z,r.y*te.w),q.viewport(o),Z.updateMatrices(gt,Nt),i=Z.getFrustum(),_(P,N,Z.camera,gt,this.type)}Z.isPointLightShadow!==!0&&this.type===Oi&&M(Z,N),Z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(A,S,U)};function M(C,P){let N=t.update(x);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,d.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Xi(s.x,s.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(P,null,N,f,x,null),d.uniforms.shadow_pass.value=C.mapPass.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(P,null,N,d,x,null)}function y(C,P,N,A){let S=null,U=N.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(U!==void 0)S=U;else if(S=N.isPointLight===!0?l:a,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){let q=S.uuid,H=P.uuid,W=c[q];W===void 0&&(W={},c[q]=W);let lt=W[H];lt===void 0&&(lt=S.clone(),W[H]=lt,P.addEventListener("dispose",D)),S=lt}if(S.visible=P.visible,S.wireframe=P.wireframe,A===Oi?S.side=P.shadowSide!==null?P.shadowSide:P.side:S.side=P.shadowSide!==null?P.shadowSide:u[P.side],S.alphaMap=P.alphaMap,S.alphaTest=P.alphaTest,S.map=P.map,S.clipShadows=P.clipShadows,S.clippingPlanes=P.clippingPlanes,S.clipIntersection=P.clipIntersection,S.displacementMap=P.displacementMap,S.displacementScale=P.displacementScale,S.displacementBias=P.displacementBias,S.wireframeLinewidth=P.wireframeLinewidth,S.linewidth=P.linewidth,N.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let q=n.properties.get(S);q.light=N}return S}function _(C,P,N,A,S){if(C.visible===!1)return;if(C.layers.test(P.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&S===Oi)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,C.matrixWorld);let H=t.update(C),W=C.material;if(Array.isArray(W)){let lt=H.groups;for(let K=0,gt=lt.length;K<gt;K++){let Z=lt[K],wt=W[Z.materialIndex];if(wt&&wt.visible){let At=y(C,wt,A,S);C.onBeforeShadow(n,C,P,N,H,At,Z),n.renderBufferDirect(N,null,H,At,C,Z),C.onAfterShadow(n,C,P,N,H,At,Z)}}}else if(W.visible){let lt=y(C,W,A,S);C.onBeforeShadow(n,C,P,N,H,lt,null),n.renderBufferDirect(N,null,H,lt,C,null),C.onAfterShadow(n,C,P,N,H,lt,null)}}let q=C.children;for(let H=0,W=q.length;H<W;H++)_(q[H],P,N,A,S)}function D(C){C.target.removeEventListener("dispose",D);for(let N in c){let A=c[N],S=C.target.uuid;S in A&&(A[S].dispose(),delete A[S])}}}var u2={[Xl]:Yl,[ql]:Kl,[$l]:Jl,[ir]:Zl,[Yl]:Xl,[Kl]:ql,[Jl]:$l,[Zl]:ir};function f2(n,t){function e(){let O=!1,Pt=new Re,J=null,ct=new Re(0,0,0,0);return{setMask:function(Lt){J!==Lt&&!O&&(n.colorMask(Lt,Lt,Lt,Lt),J=Lt)},setLocked:function(Lt){O=Lt},setClear:function(Lt,Et,re,ke,Se){Se===!0&&(Lt*=ke,Et*=ke,re*=ke),Pt.set(Lt,Et,re,ke),ct.equals(Pt)===!1&&(n.clearColor(Lt,Et,re,ke),ct.copy(Pt))},reset:function(){O=!1,J=null,ct.set(-1,0,0,0)}}}function i(){let O=!1,Pt=!1,J=null,ct=null,Lt=null;return{setReversed:function(Et){if(Pt!==Et){let re=t.get("EXT_clip_control");Pt?re.clipControlEXT(re.LOWER_LEFT_EXT,re.ZERO_TO_ONE_EXT):re.clipControlEXT(re.LOWER_LEFT_EXT,re.NEGATIVE_ONE_TO_ONE_EXT);let ke=Lt;Lt=null,this.setClear(ke)}Pt=Et},getReversed:function(){return Pt},setTest:function(Et){Et?Mt(n.DEPTH_TEST):Wt(n.DEPTH_TEST)},setMask:function(Et){J!==Et&&!O&&(n.depthMask(Et),J=Et)},setFunc:function(Et){if(Pt&&(Et=u2[Et]),ct!==Et){switch(Et){case Xl:n.depthFunc(n.NEVER);break;case Yl:n.depthFunc(n.ALWAYS);break;case ql:n.depthFunc(n.LESS);break;case ir:n.depthFunc(n.LEQUAL);break;case $l:n.depthFunc(n.EQUAL);break;case Zl:n.depthFunc(n.GEQUAL);break;case Kl:n.depthFunc(n.GREATER);break;case Jl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ct=Et}},setLocked:function(Et){O=Et},setClear:function(Et){Lt!==Et&&(Pt&&(Et=1-Et),n.clearDepth(Et),Lt=Et)},reset:function(){O=!1,J=null,ct=null,Lt=null,Pt=!1}}}function s(){let O=!1,Pt=null,J=null,ct=null,Lt=null,Et=null,re=null,ke=null,Se=null;return{setTest:function(ve){O||(ve?Mt(n.STENCIL_TEST):Wt(n.STENCIL_TEST))},setMask:function(ve){Pt!==ve&&!O&&(n.stencilMask(ve),Pt=ve)},setFunc:function(ve,xn,Yn){(J!==ve||ct!==xn||Lt!==Yn)&&(n.stencilFunc(ve,xn,Yn),J=ve,ct=xn,Lt=Yn)},setOp:function(ve,xn,Yn){(Et!==ve||re!==xn||ke!==Yn)&&(n.stencilOp(ve,xn,Yn),Et=ve,re=xn,ke=Yn)},setLocked:function(ve){O=ve},setClear:function(ve){Se!==ve&&(n.clearStencil(ve),Se=ve)},reset:function(){O=!1,Pt=null,J=null,ct=null,Lt=null,Et=null,re=null,ke=null,Se=null}}}let r=new e,o=new i,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},f=new WeakMap,d=[],g=null,x=!1,m=null,p=null,M=null,y=null,_=null,D=null,C=null,P=new Yt(0,0,0),N=0,A=!1,S=null,U=null,q=null,H=null,W=null,lt=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),K=!1,gt=0,Z=n.getParameter(n.VERSION);Z.indexOf("WebGL")!==-1?(gt=parseFloat(/^WebGL (\d)/.exec(Z)[1]),K=gt>=1):Z.indexOf("OpenGL ES")!==-1&&(gt=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),K=gt>=2);let wt=null,At={},Nt=n.getParameter(n.SCISSOR_BOX),te=n.getParameter(n.VIEWPORT),ge=new Re().fromArray(Nt),nt=new Re().fromArray(te);function vt(O,Pt,J,ct){let Lt=new Uint8Array(4),Et=n.createTexture();n.bindTexture(O,Et),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let re=0;re<J;re++)O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY?n.texImage3D(Pt,0,n.RGBA,1,1,ct,0,n.RGBA,n.UNSIGNED_BYTE,Lt):n.texImage2D(Pt+re,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Lt);return Et}let Bt={};Bt[n.TEXTURE_2D]=vt(n.TEXTURE_2D,n.TEXTURE_2D,1),Bt[n.TEXTURE_CUBE_MAP]=vt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Bt[n.TEXTURE_2D_ARRAY]=vt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Bt[n.TEXTURE_3D]=vt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Mt(n.DEPTH_TEST),o.setFunc(ir),V(!1),ut(nh),Mt(n.CULL_FACE),E(os);function Mt(O){h[O]!==!0&&(n.enable(O),h[O]=!0)}function Wt(O){h[O]!==!1&&(n.disable(O),h[O]=!1)}function ee(O,Pt){return u[O]!==Pt?(n.bindFramebuffer(O,Pt),u[O]=Pt,O===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=Pt),O===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=Pt),!0):!1}function Kt(O,Pt){let J=d,ct=!1;if(O){J=f.get(Pt),J===void 0&&(J=[],f.set(Pt,J));let Lt=O.textures;if(J.length!==Lt.length||J[0]!==n.COLOR_ATTACHMENT0){for(let Et=0,re=Lt.length;Et<re;Et++)J[Et]=n.COLOR_ATTACHMENT0+Et;J.length=Lt.length,ct=!0}}else J[0]!==n.BACK&&(J[0]=n.BACK,ct=!0);ct&&n.drawBuffers(J)}function _e(O){return g!==O?(n.useProgram(O),g=O,!0):!1}let F={[bs]:n.FUNC_ADD,[Af]:n.FUNC_SUBTRACT,[Rf]:n.FUNC_REVERSE_SUBTRACT};F[Cf]=n.MIN,F[If]=n.MAX;let it={[Pf]:n.ZERO,[Lf]:n.ONE,[Df]:n.SRC_COLOR,[Gl]:n.SRC_ALPHA,[Bf]:n.SRC_ALPHA_SATURATE,[Ff]:n.DST_COLOR,[Uf]:n.DST_ALPHA,[Nf]:n.ONE_MINUS_SRC_COLOR,[Wl]:n.ONE_MINUS_SRC_ALPHA,[kf]:n.ONE_MINUS_DST_COLOR,[Of]:n.ONE_MINUS_DST_ALPHA,[zf]:n.CONSTANT_COLOR,[Hf]:n.ONE_MINUS_CONSTANT_COLOR,[Vf]:n.CONSTANT_ALPHA,[Gf]:n.ONE_MINUS_CONSTANT_ALPHA};function E(O,Pt,J,ct,Lt,Et,re,ke,Se,ve){if(O===os){x===!0&&(Wt(n.BLEND),x=!1);return}if(x===!1&&(Mt(n.BLEND),x=!0),O!==wf){if(O!==m||ve!==A){if((p!==bs||_!==bs)&&(n.blendEquation(n.FUNC_ADD),p=bs,_=bs),ve)switch(O){case js:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Vi:n.blendFunc(n.ONE,n.ONE);break;case ih:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case sh:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case js:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Vi:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case ih:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case sh:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}M=null,y=null,D=null,C=null,P.set(0,0,0),N=0,m=O,A=ve}return}Lt=Lt||Pt,Et=Et||J,re=re||ct,(Pt!==p||Lt!==_)&&(n.blendEquationSeparate(F[Pt],F[Lt]),p=Pt,_=Lt),(J!==M||ct!==y||Et!==D||re!==C)&&(n.blendFuncSeparate(it[J],it[ct],it[Et],it[re]),M=J,y=ct,D=Et,C=re),(ke.equals(P)===!1||Se!==N)&&(n.blendColor(ke.r,ke.g,ke.b,Se),P.copy(ke),N=Se),m=O,A=!1}function dt(O,Pt){O.side===Ce?Wt(n.CULL_FACE):Mt(n.CULL_FACE);let J=O.side===cn;Pt&&(J=!J),V(J),O.blending===js&&O.transparent===!1?E(os):E(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),r.setMask(O.colorWrite);let ct=O.stencilWrite;a.setTest(ct),ct&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Tt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?Mt(n.SAMPLE_ALPHA_TO_COVERAGE):Wt(n.SAMPLE_ALPHA_TO_COVERAGE)}function V(O){S!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),S=O)}function ut(O){O!==Ef?(Mt(n.CULL_FACE),O!==U&&(O===nh?n.cullFace(n.BACK):O===Tf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Wt(n.CULL_FACE),U=O}function at(O){O!==q&&(K&&n.lineWidth(O),q=O)}function Tt(O,Pt,J){O?(Mt(n.POLYGON_OFFSET_FILL),(H!==Pt||W!==J)&&(n.polygonOffset(Pt,J),H=Pt,W=J)):Wt(n.POLYGON_OFFSET_FILL)}function ft(O){O?Mt(n.SCISSOR_TEST):Wt(n.SCISSOR_TEST)}function R(O){O===void 0&&(O=n.TEXTURE0+lt-1),wt!==O&&(n.activeTexture(O),wt=O)}function b(O,Pt,J){J===void 0&&(wt===null?J=n.TEXTURE0+lt-1:J=wt);let ct=At[J];ct===void 0&&(ct={type:void 0,texture:void 0},At[J]=ct),(ct.type!==O||ct.texture!==Pt)&&(wt!==J&&(n.activeTexture(J),wt=J),n.bindTexture(O,Pt||Bt[O]),ct.type=O,ct.texture=Pt)}function z(){let O=At[wt];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function j(){try{n.compressedTexImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ht(){try{n.compressedTexImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function rt(){try{n.texSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function zt(){try{n.texSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function bt(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ct(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function he(){try{n.texStorage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function pt(){try{n.texStorage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ft(){try{n.texImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function kt(){try{n.texImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ne(O){ge.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),ge.copy(O))}function Ot(O){nt.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),nt.copy(O))}function ue(O,Pt){let J=c.get(Pt);J===void 0&&(J=new WeakMap,c.set(Pt,J));let ct=J.get(O);ct===void 0&&(ct=n.getUniformBlockIndex(Pt,O.name),J.set(O,ct))}function le(O,Pt){let ct=c.get(Pt).get(O);l.get(Pt)!==ct&&(n.uniformBlockBinding(Pt,ct,O.__bindingPointIndex),l.set(Pt,ct))}function pe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},wt=null,At={},u={},f=new WeakMap,d=[],g=null,x=!1,m=null,p=null,M=null,y=null,_=null,D=null,C=null,P=new Yt(0,0,0),N=0,A=!1,S=null,U=null,q=null,H=null,W=null,ge.set(0,0,n.canvas.width,n.canvas.height),nt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Mt,disable:Wt,bindFramebuffer:ee,drawBuffers:Kt,useProgram:_e,setBlending:E,setMaterial:dt,setFlipSided:V,setCullFace:ut,setLineWidth:at,setPolygonOffset:Tt,setScissorTest:ft,activeTexture:R,bindTexture:b,unbindTexture:z,compressedTexImage2D:j,compressedTexImage3D:ht,texImage2D:Ft,texImage3D:kt,updateUBOMapping:ue,uniformBlockBinding:le,texStorage2D:he,texStorage3D:pt,texSubImage2D:rt,texSubImage3D:zt,compressedTexSubImage2D:bt,compressedTexSubImage3D:Ct,scissor:ne,viewport:Ot,reset:pe}}function tu(n,t,e,i){let s=d2(i);switch(e){case Tu:return n*t;case Au:return n*t;case Ru:return n*t*2;case b0:return n*t/s.components*s.byteLength;case M0:return n*t/s.components*s.byteLength;case Cu:return n*t*2/s.components*s.byteLength;case S0:return n*t*2/s.components*s.byteLength;case wu:return n*t*3/s.components*s.byteLength;case li:return n*t*4/s.components*s.byteLength;case E0:return n*t*4/s.components*s.byteLength;case ua:case fa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case da:case pa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case nc:case sc:return Math.max(n,16)*Math.max(t,8)/4;case ec:case ic:return Math.max(n,8)*Math.max(t,8)/2;case rc:case oc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ac:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case lc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case cc:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case hc:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case uc:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case fc:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case dc:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case pc:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case mc:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case gc:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case xc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case _c:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case yc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case vc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case bc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case ma:case Mc:case Sc:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Iu:case Ec:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Tc:case wc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function d2(n){switch(n){case Wi:case Mu:return{byteLength:1,components:1};case Kr:case Su:case uo:return{byteLength:2,components:1};case y0:case v0:return{byteLength:2,components:4};case Ss:case _0:case vi:return{byteLength:4,components:1};case Eu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function p2(n,t,e,i,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new yt,h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,b){return d?new OffscreenCanvas(R,b):_a("canvas")}function x(R,b,z){let j=1,ht=ft(R);if((ht.width>z||ht.height>z)&&(j=z/Math.max(ht.width,ht.height)),j<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let rt=Math.floor(j*ht.width),zt=Math.floor(j*ht.height);u===void 0&&(u=g(rt,zt));let bt=b?g(rt,zt):u;return bt.width=rt,bt.height=zt,bt.getContext("2d").drawImage(R,0,0,rt,zt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ht.width+"x"+ht.height+") to ("+rt+"x"+zt+")."),bt}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ht.width+"x"+ht.height+")."),R;return R}function m(R){return R.generateMipmaps}function p(R){n.generateMipmap(R)}function M(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(R,b,z,j,ht=!1){if(R!==null){if(n[R]!==void 0)return n[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let rt=b;if(b===n.RED&&(z===n.FLOAT&&(rt=n.R32F),z===n.HALF_FLOAT&&(rt=n.R16F),z===n.UNSIGNED_BYTE&&(rt=n.R8)),b===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&(rt=n.R8UI),z===n.UNSIGNED_SHORT&&(rt=n.R16UI),z===n.UNSIGNED_INT&&(rt=n.R32UI),z===n.BYTE&&(rt=n.R8I),z===n.SHORT&&(rt=n.R16I),z===n.INT&&(rt=n.R32I)),b===n.RG&&(z===n.FLOAT&&(rt=n.RG32F),z===n.HALF_FLOAT&&(rt=n.RG16F),z===n.UNSIGNED_BYTE&&(rt=n.RG8)),b===n.RG_INTEGER&&(z===n.UNSIGNED_BYTE&&(rt=n.RG8UI),z===n.UNSIGNED_SHORT&&(rt=n.RG16UI),z===n.UNSIGNED_INT&&(rt=n.RG32UI),z===n.BYTE&&(rt=n.RG8I),z===n.SHORT&&(rt=n.RG16I),z===n.INT&&(rt=n.RG32I)),b===n.RGB_INTEGER&&(z===n.UNSIGNED_BYTE&&(rt=n.RGB8UI),z===n.UNSIGNED_SHORT&&(rt=n.RGB16UI),z===n.UNSIGNED_INT&&(rt=n.RGB32UI),z===n.BYTE&&(rt=n.RGB8I),z===n.SHORT&&(rt=n.RGB16I),z===n.INT&&(rt=n.RGB32I)),b===n.RGBA_INTEGER&&(z===n.UNSIGNED_BYTE&&(rt=n.RGBA8UI),z===n.UNSIGNED_SHORT&&(rt=n.RGBA16UI),z===n.UNSIGNED_INT&&(rt=n.RGBA32UI),z===n.BYTE&&(rt=n.RGBA8I),z===n.SHORT&&(rt=n.RGBA16I),z===n.INT&&(rt=n.RGBA32I)),b===n.RGB&&z===n.UNSIGNED_INT_5_9_9_9_REV&&(rt=n.RGB9_E5),b===n.RGBA){let zt=ht?Ya:Te.getTransfer(j);z===n.FLOAT&&(rt=n.RGBA32F),z===n.HALF_FLOAT&&(rt=n.RGBA16F),z===n.UNSIGNED_BYTE&&(rt=zt===Fe?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT_4_4_4_4&&(rt=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&(rt=n.RGB5_A1)}return(rt===n.R16F||rt===n.R32F||rt===n.RG16F||rt===n.RG32F||rt===n.RGBA16F||rt===n.RGBA32F)&&t.get("EXT_color_buffer_float"),rt}function _(R,b){let z;return R?b===null||b===Ss||b===or?z=n.DEPTH24_STENCIL8:b===vi?z=n.DEPTH32F_STENCIL8:b===Kr&&(z=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Ss||b===or?z=n.DEPTH_COMPONENT24:b===vi?z=n.DEPTH_COMPONENT32F:b===Kr&&(z=n.DEPTH_COMPONENT16),z}function D(R,b){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==kn&&R.minFilter!==yi?Math.log2(Math.max(b.width,b.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?b.mipmaps.length:1}function C(R){let b=R.target;b.removeEventListener("dispose",C),N(b),b.isVideoTexture&&h.delete(b)}function P(R){let b=R.target;b.removeEventListener("dispose",P),S(b)}function N(R){let b=i.get(R);if(b.__webglInit===void 0)return;let z=R.source,j=f.get(z);if(j){let ht=j[b.__cacheKey];ht.usedTimes--,ht.usedTimes===0&&A(R),Object.keys(j).length===0&&f.delete(z)}i.remove(R)}function A(R){let b=i.get(R);n.deleteTexture(b.__webglTexture);let z=R.source,j=f.get(z);delete j[b.__cacheKey],o.memory.textures--}function S(R){let b=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(b.__webglFramebuffer[j]))for(let ht=0;ht<b.__webglFramebuffer[j].length;ht++)n.deleteFramebuffer(b.__webglFramebuffer[j][ht]);else n.deleteFramebuffer(b.__webglFramebuffer[j]);b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer[j])}else{if(Array.isArray(b.__webglFramebuffer))for(let j=0;j<b.__webglFramebuffer.length;j++)n.deleteFramebuffer(b.__webglFramebuffer[j]);else n.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&n.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let j=0;j<b.__webglColorRenderbuffer.length;j++)b.__webglColorRenderbuffer[j]&&n.deleteRenderbuffer(b.__webglColorRenderbuffer[j]);b.__webglDepthRenderbuffer&&n.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let z=R.textures;for(let j=0,ht=z.length;j<ht;j++){let rt=i.get(z[j]);rt.__webglTexture&&(n.deleteTexture(rt.__webglTexture),o.memory.textures--),i.remove(z[j])}i.remove(R)}let U=0;function q(){U=0}function H(){let R=U;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),U+=1,R}function W(R){let b=[];return b.push(R.wrapS),b.push(R.wrapT),b.push(R.wrapR||0),b.push(R.magFilter),b.push(R.minFilter),b.push(R.anisotropy),b.push(R.internalFormat),b.push(R.format),b.push(R.type),b.push(R.generateMipmaps),b.push(R.premultiplyAlpha),b.push(R.flipY),b.push(R.unpackAlignment),b.push(R.colorSpace),b.join()}function lt(R,b){let z=i.get(R);if(R.isVideoTexture&&at(R),R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){let j=R.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{nt(z,R,b);return}}e.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+b)}function K(R,b){let z=i.get(R);if(R.version>0&&z.__version!==R.version){nt(z,R,b);return}e.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+b)}function gt(R,b){let z=i.get(R);if(R.version>0&&z.__version!==R.version){nt(z,R,b);return}e.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+b)}function Z(R,b){let z=i.get(R);if(R.version>0&&z.__version!==R.version){vt(z,R,b);return}e.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+b)}let wt={[Gi]:n.REPEAT,[ki]:n.CLAMP_TO_EDGE,[tc]:n.MIRRORED_REPEAT},At={[kn]:n.NEAREST,[jf]:n.NEAREST_MIPMAP_NEAREST,[Co]:n.NEAREST_MIPMAP_LINEAR,[yi]:n.LINEAR,[al]:n.LINEAR_MIPMAP_NEAREST,[Bi]:n.LINEAR_MIPMAP_LINEAR},Nt={[nd]:n.NEVER,[ld]:n.ALWAYS,[id]:n.LESS,[Lu]:n.LEQUAL,[sd]:n.EQUAL,[ad]:n.GEQUAL,[rd]:n.GREATER,[od]:n.NOTEQUAL};function te(R,b){if(b.type===vi&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===yi||b.magFilter===al||b.magFilter===Co||b.magFilter===Bi||b.minFilter===yi||b.minFilter===al||b.minFilter===Co||b.minFilter===Bi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,wt[b.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,wt[b.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,wt[b.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,At[b.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,At[b.minFilter]),b.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,Nt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===kn||b.minFilter!==Co&&b.minFilter!==Bi||b.type===vi&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){let z=t.get("EXT_texture_filter_anisotropic");n.texParameterf(R,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function ge(R,b){let z=!1;R.__webglInit===void 0&&(R.__webglInit=!0,b.addEventListener("dispose",C));let j=b.source,ht=f.get(j);ht===void 0&&(ht={},f.set(j,ht));let rt=W(b);if(rt!==R.__cacheKey){ht[rt]===void 0&&(ht[rt]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,z=!0),ht[rt].usedTimes++;let zt=ht[R.__cacheKey];zt!==void 0&&(ht[R.__cacheKey].usedTimes--,zt.usedTimes===0&&A(b)),R.__cacheKey=rt,R.__webglTexture=ht[rt].texture}return z}function nt(R,b,z){let j=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(j=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(j=n.TEXTURE_3D);let ht=ge(R,b),rt=b.source;e.bindTexture(j,R.__webglTexture,n.TEXTURE0+z);let zt=i.get(rt);if(rt.version!==zt.__version||ht===!0){e.activeTexture(n.TEXTURE0+z);let bt=Te.getPrimaries(Te.workingColorSpace),Ct=b.colorSpace===$n?null:Te.getPrimaries(b.colorSpace),he=b.colorSpace===$n||bt===Ct?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);let pt=x(b.image,!1,s.maxTextureSize);pt=Tt(b,pt);let Ft=r.convert(b.format,b.colorSpace),kt=r.convert(b.type),ne=y(b.internalFormat,Ft,kt,b.colorSpace,b.isVideoTexture);te(j,b);let Ot,ue=b.mipmaps,le=b.isVideoTexture!==!0,pe=zt.__version===void 0||ht===!0,O=rt.dataReady,Pt=D(b,pt);if(b.isDepthTexture)ne=_(b.format===ar,b.type),pe&&(le?e.texStorage2D(n.TEXTURE_2D,1,ne,pt.width,pt.height):e.texImage2D(n.TEXTURE_2D,0,ne,pt.width,pt.height,0,Ft,kt,null));else if(b.isDataTexture)if(ue.length>0){le&&pe&&e.texStorage2D(n.TEXTURE_2D,Pt,ne,ue[0].width,ue[0].height);for(let J=0,ct=ue.length;J<ct;J++)Ot=ue[J],le?O&&e.texSubImage2D(n.TEXTURE_2D,J,0,0,Ot.width,Ot.height,Ft,kt,Ot.data):e.texImage2D(n.TEXTURE_2D,J,ne,Ot.width,Ot.height,0,Ft,kt,Ot.data);b.generateMipmaps=!1}else le?(pe&&e.texStorage2D(n.TEXTURE_2D,Pt,ne,pt.width,pt.height),O&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,pt.width,pt.height,Ft,kt,pt.data)):e.texImage2D(n.TEXTURE_2D,0,ne,pt.width,pt.height,0,Ft,kt,pt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){le&&pe&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Pt,ne,ue[0].width,ue[0].height,pt.depth);for(let J=0,ct=ue.length;J<ct;J++)if(Ot=ue[J],b.format!==li)if(Ft!==null)if(le){if(O)if(b.layerUpdates.size>0){let Lt=tu(Ot.width,Ot.height,b.format,b.type);for(let Et of b.layerUpdates){let re=Ot.data.subarray(Et*Lt/Ot.data.BYTES_PER_ELEMENT,(Et+1)*Lt/Ot.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,Et,Ot.width,Ot.height,1,Ft,re)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,Ot.width,Ot.height,pt.depth,Ft,Ot.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,J,ne,Ot.width,Ot.height,pt.depth,0,Ot.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else le?O&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,Ot.width,Ot.height,pt.depth,Ft,kt,Ot.data):e.texImage3D(n.TEXTURE_2D_ARRAY,J,ne,Ot.width,Ot.height,pt.depth,0,Ft,kt,Ot.data)}else{le&&pe&&e.texStorage2D(n.TEXTURE_2D,Pt,ne,ue[0].width,ue[0].height);for(let J=0,ct=ue.length;J<ct;J++)Ot=ue[J],b.format!==li?Ft!==null?le?O&&e.compressedTexSubImage2D(n.TEXTURE_2D,J,0,0,Ot.width,Ot.height,Ft,Ot.data):e.compressedTexImage2D(n.TEXTURE_2D,J,ne,Ot.width,Ot.height,0,Ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):le?O&&e.texSubImage2D(n.TEXTURE_2D,J,0,0,Ot.width,Ot.height,Ft,kt,Ot.data):e.texImage2D(n.TEXTURE_2D,J,ne,Ot.width,Ot.height,0,Ft,kt,Ot.data)}else if(b.isDataArrayTexture)if(le){if(pe&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Pt,ne,pt.width,pt.height,pt.depth),O)if(b.layerUpdates.size>0){let J=tu(pt.width,pt.height,b.format,b.type);for(let ct of b.layerUpdates){let Lt=pt.data.subarray(ct*J/pt.data.BYTES_PER_ELEMENT,(ct+1)*J/pt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ct,pt.width,pt.height,1,Ft,kt,Lt)}b.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,pt.width,pt.height,pt.depth,Ft,kt,pt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,ne,pt.width,pt.height,pt.depth,0,Ft,kt,pt.data);else if(b.isData3DTexture)le?(pe&&e.texStorage3D(n.TEXTURE_3D,Pt,ne,pt.width,pt.height,pt.depth),O&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,pt.width,pt.height,pt.depth,Ft,kt,pt.data)):e.texImage3D(n.TEXTURE_3D,0,ne,pt.width,pt.height,pt.depth,0,Ft,kt,pt.data);else if(b.isFramebufferTexture){if(pe)if(le)e.texStorage2D(n.TEXTURE_2D,Pt,ne,pt.width,pt.height);else{let J=pt.width,ct=pt.height;for(let Lt=0;Lt<Pt;Lt++)e.texImage2D(n.TEXTURE_2D,Lt,ne,J,ct,0,Ft,kt,null),J>>=1,ct>>=1}}else if(ue.length>0){if(le&&pe){let J=ft(ue[0]);e.texStorage2D(n.TEXTURE_2D,Pt,ne,J.width,J.height)}for(let J=0,ct=ue.length;J<ct;J++)Ot=ue[J],le?O&&e.texSubImage2D(n.TEXTURE_2D,J,0,0,Ft,kt,Ot):e.texImage2D(n.TEXTURE_2D,J,ne,Ft,kt,Ot);b.generateMipmaps=!1}else if(le){if(pe){let J=ft(pt);e.texStorage2D(n.TEXTURE_2D,Pt,ne,J.width,J.height)}O&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Ft,kt,pt)}else e.texImage2D(n.TEXTURE_2D,0,ne,Ft,kt,pt);m(b)&&p(j),zt.__version=rt.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function vt(R,b,z){if(b.image.length!==6)return;let j=ge(R,b),ht=b.source;e.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+z);let rt=i.get(ht);if(ht.version!==rt.__version||j===!0){e.activeTexture(n.TEXTURE0+z);let zt=Te.getPrimaries(Te.workingColorSpace),bt=b.colorSpace===$n?null:Te.getPrimaries(b.colorSpace),Ct=b.colorSpace===$n||zt===bt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ct);let he=b.isCompressedTexture||b.image[0].isCompressedTexture,pt=b.image[0]&&b.image[0].isDataTexture,Ft=[];for(let ct=0;ct<6;ct++)!he&&!pt?Ft[ct]=x(b.image[ct],!0,s.maxCubemapSize):Ft[ct]=pt?b.image[ct].image:b.image[ct],Ft[ct]=Tt(b,Ft[ct]);let kt=Ft[0],ne=r.convert(b.format,b.colorSpace),Ot=r.convert(b.type),ue=y(b.internalFormat,ne,Ot,b.colorSpace),le=b.isVideoTexture!==!0,pe=rt.__version===void 0||j===!0,O=ht.dataReady,Pt=D(b,kt);te(n.TEXTURE_CUBE_MAP,b);let J;if(he){le&&pe&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Pt,ue,kt.width,kt.height);for(let ct=0;ct<6;ct++){J=Ft[ct].mipmaps;for(let Lt=0;Lt<J.length;Lt++){let Et=J[Lt];b.format!==li?ne!==null?le?O&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Lt,0,0,Et.width,Et.height,ne,Et.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Lt,ue,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):le?O&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Lt,0,0,Et.width,Et.height,ne,Ot,Et.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Lt,ue,Et.width,Et.height,0,ne,Ot,Et.data)}}}else{if(J=b.mipmaps,le&&pe){J.length>0&&Pt++;let ct=ft(Ft[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Pt,ue,ct.width,ct.height)}for(let ct=0;ct<6;ct++)if(pt){le?O&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,Ft[ct].width,Ft[ct].height,ne,Ot,Ft[ct].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,ue,Ft[ct].width,Ft[ct].height,0,ne,Ot,Ft[ct].data);for(let Lt=0;Lt<J.length;Lt++){let re=J[Lt].image[ct].image;le?O&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Lt+1,0,0,re.width,re.height,ne,Ot,re.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Lt+1,ue,re.width,re.height,0,ne,Ot,re.data)}}else{le?O&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,ne,Ot,Ft[ct]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,ue,ne,Ot,Ft[ct]);for(let Lt=0;Lt<J.length;Lt++){let Et=J[Lt];le?O&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Lt+1,0,0,ne,Ot,Et.image[ct]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Lt+1,ue,ne,Ot,Et.image[ct])}}}m(b)&&p(n.TEXTURE_CUBE_MAP),rt.__version=ht.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function Bt(R,b,z,j,ht,rt){let zt=r.convert(z.format,z.colorSpace),bt=r.convert(z.type),Ct=y(z.internalFormat,zt,bt,z.colorSpace),he=i.get(b),pt=i.get(z);if(pt.__renderTarget=b,!he.__hasExternalTextures){let Ft=Math.max(1,b.width>>rt),kt=Math.max(1,b.height>>rt);ht===n.TEXTURE_3D||ht===n.TEXTURE_2D_ARRAY?e.texImage3D(ht,rt,Ct,Ft,kt,b.depth,0,zt,bt,null):e.texImage2D(ht,rt,Ct,Ft,kt,0,zt,bt,null)}e.bindFramebuffer(n.FRAMEBUFFER,R),ut(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,ht,pt.__webglTexture,0,V(b)):(ht===n.TEXTURE_2D||ht>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ht<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,j,ht,pt.__webglTexture,rt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Mt(R,b,z){if(n.bindRenderbuffer(n.RENDERBUFFER,R),b.depthBuffer){let j=b.depthTexture,ht=j&&j.isDepthTexture?j.type:null,rt=_(b.stencilBuffer,ht),zt=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,bt=V(b);ut(b)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,bt,rt,b.width,b.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,bt,rt,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,rt,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,zt,n.RENDERBUFFER,R)}else{let j=b.textures;for(let ht=0;ht<j.length;ht++){let rt=j[ht],zt=r.convert(rt.format,rt.colorSpace),bt=r.convert(rt.type),Ct=y(rt.internalFormat,zt,bt,rt.colorSpace),he=V(b);z&&ut(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,he,Ct,b.width,b.height):ut(b)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,he,Ct,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,Ct,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Wt(R,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,R),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let j=i.get(b.depthTexture);j.__renderTarget=b,(!j.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),lt(b.depthTexture,0);let ht=j.__webglTexture,rt=V(b);if(b.depthTexture.format===Qs)ut(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ht,0,rt):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ht,0);else if(b.depthTexture.format===ar)ut(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ht,0,rt):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ht,0);else throw new Error("Unknown depthTexture format")}function ee(R){let b=i.get(R),z=R.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==R.depthTexture){let j=R.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),j){let ht=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,j.removeEventListener("dispose",ht)};j.addEventListener("dispose",ht),b.__depthDisposeCallback=ht}b.__boundDepthTexture=j}if(R.depthTexture&&!b.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");Wt(b.__webglFramebuffer,R)}else if(z){b.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[j]),b.__webglDepthbuffer[j]===void 0)b.__webglDepthbuffer[j]=n.createRenderbuffer(),Mt(b.__webglDepthbuffer[j],R,!1);else{let ht=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,rt=b.__webglDepthbuffer[j];n.bindRenderbuffer(n.RENDERBUFFER,rt),n.framebufferRenderbuffer(n.FRAMEBUFFER,ht,n.RENDERBUFFER,rt)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=n.createRenderbuffer(),Mt(b.__webglDepthbuffer,R,!1);else{let j=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ht=b.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ht),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,ht)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Kt(R,b,z){let j=i.get(R);b!==void 0&&Bt(j.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&ee(R)}function _e(R){let b=R.texture,z=i.get(R),j=i.get(b);R.addEventListener("dispose",P);let ht=R.textures,rt=R.isWebGLCubeRenderTarget===!0,zt=ht.length>1;if(zt||(j.__webglTexture===void 0&&(j.__webglTexture=n.createTexture()),j.__version=b.version,o.memory.textures++),rt){z.__webglFramebuffer=[];for(let bt=0;bt<6;bt++)if(b.mipmaps&&b.mipmaps.length>0){z.__webglFramebuffer[bt]=[];for(let Ct=0;Ct<b.mipmaps.length;Ct++)z.__webglFramebuffer[bt][Ct]=n.createFramebuffer()}else z.__webglFramebuffer[bt]=n.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){z.__webglFramebuffer=[];for(let bt=0;bt<b.mipmaps.length;bt++)z.__webglFramebuffer[bt]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(zt)for(let bt=0,Ct=ht.length;bt<Ct;bt++){let he=i.get(ht[bt]);he.__webglTexture===void 0&&(he.__webglTexture=n.createTexture(),o.memory.textures++)}if(R.samples>0&&ut(R)===!1){z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let bt=0;bt<ht.length;bt++){let Ct=ht[bt];z.__webglColorRenderbuffer[bt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[bt]);let he=r.convert(Ct.format,Ct.colorSpace),pt=r.convert(Ct.type),Ft=y(Ct.internalFormat,he,pt,Ct.colorSpace,R.isXRRenderTarget===!0),kt=V(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,kt,Ft,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+bt,n.RENDERBUFFER,z.__webglColorRenderbuffer[bt])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),Mt(z.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(rt){e.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture),te(n.TEXTURE_CUBE_MAP,b);for(let bt=0;bt<6;bt++)if(b.mipmaps&&b.mipmaps.length>0)for(let Ct=0;Ct<b.mipmaps.length;Ct++)Bt(z.__webglFramebuffer[bt][Ct],R,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Ct);else Bt(z.__webglFramebuffer[bt],R,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0);m(b)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(zt){for(let bt=0,Ct=ht.length;bt<Ct;bt++){let he=ht[bt],pt=i.get(he);e.bindTexture(n.TEXTURE_2D,pt.__webglTexture),te(n.TEXTURE_2D,he),Bt(z.__webglFramebuffer,R,he,n.COLOR_ATTACHMENT0+bt,n.TEXTURE_2D,0),m(he)&&p(n.TEXTURE_2D)}e.unbindTexture()}else{let bt=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(bt=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(bt,j.__webglTexture),te(bt,b),b.mipmaps&&b.mipmaps.length>0)for(let Ct=0;Ct<b.mipmaps.length;Ct++)Bt(z.__webglFramebuffer[Ct],R,b,n.COLOR_ATTACHMENT0,bt,Ct);else Bt(z.__webglFramebuffer,R,b,n.COLOR_ATTACHMENT0,bt,0);m(b)&&p(bt),e.unbindTexture()}R.depthBuffer&&ee(R)}function F(R){let b=R.textures;for(let z=0,j=b.length;z<j;z++){let ht=b[z];if(m(ht)){let rt=M(R),zt=i.get(ht).__webglTexture;e.bindTexture(rt,zt),p(rt),e.unbindTexture()}}}let it=[],E=[];function dt(R){if(R.samples>0){if(ut(R)===!1){let b=R.textures,z=R.width,j=R.height,ht=n.COLOR_BUFFER_BIT,rt=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,zt=i.get(R),bt=b.length>1;if(bt)for(let Ct=0;Ct<b.length;Ct++)e.bindFramebuffer(n.FRAMEBUFFER,zt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ct,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,zt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ct,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,zt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,zt.__webglFramebuffer);for(let Ct=0;Ct<b.length;Ct++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ht|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ht|=n.STENCIL_BUFFER_BIT)),bt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,zt.__webglColorRenderbuffer[Ct]);let he=i.get(b[Ct]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,he,0)}n.blitFramebuffer(0,0,z,j,0,0,z,j,ht,n.NEAREST),l===!0&&(it.length=0,E.length=0,it.push(n.COLOR_ATTACHMENT0+Ct),R.depthBuffer&&R.resolveDepthBuffer===!1&&(it.push(rt),E.push(rt),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,E)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,it))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),bt)for(let Ct=0;Ct<b.length;Ct++){e.bindFramebuffer(n.FRAMEBUFFER,zt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ct,n.RENDERBUFFER,zt.__webglColorRenderbuffer[Ct]);let he=i.get(b[Ct]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,zt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ct,n.TEXTURE_2D,he,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,zt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){let b=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[b])}}}function V(R){return Math.min(s.maxSamples,R.samples)}function ut(R){let b=i.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function at(R){let b=o.render.frame;h.get(R)!==b&&(h.set(R,b),R.update())}function Tt(R,b){let z=R.colorSpace,j=R.format,ht=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||z!==Er&&z!==$n&&(Te.getTransfer(z)===Fe?(j!==li||ht!==Wi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),b}function ft(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=q,this.setTexture2D=lt,this.setTexture2DArray=K,this.setTexture3D=gt,this.setTextureCube=Z,this.rebindTextures=Kt,this.setupRenderTarget=_e,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=dt,this.setupDepthRenderbuffer=ee,this.setupFrameBufferTexture=Bt,this.useMultisampledRTT=ut}function m2(n,t){function e(i,s=$n){let r,o=Te.getTransfer(s);if(i===Wi)return n.UNSIGNED_BYTE;if(i===y0)return n.UNSIGNED_SHORT_4_4_4_4;if(i===v0)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Eu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Mu)return n.BYTE;if(i===Su)return n.SHORT;if(i===Kr)return n.UNSIGNED_SHORT;if(i===_0)return n.INT;if(i===Ss)return n.UNSIGNED_INT;if(i===vi)return n.FLOAT;if(i===uo)return n.HALF_FLOAT;if(i===Tu)return n.ALPHA;if(i===wu)return n.RGB;if(i===li)return n.RGBA;if(i===Au)return n.LUMINANCE;if(i===Ru)return n.LUMINANCE_ALPHA;if(i===Qs)return n.DEPTH_COMPONENT;if(i===ar)return n.DEPTH_STENCIL;if(i===b0)return n.RED;if(i===M0)return n.RED_INTEGER;if(i===Cu)return n.RG;if(i===S0)return n.RG_INTEGER;if(i===E0)return n.RGBA_INTEGER;if(i===ua||i===fa||i===da||i===pa)if(o===Fe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ua)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===fa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===da)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===pa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ua)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===fa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===da)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===pa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ec||i===nc||i===ic||i===sc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===ec)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===nc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ic)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===sc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===rc||i===oc||i===ac)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===rc||i===oc)return o===Fe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===ac)return o===Fe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===lc||i===cc||i===hc||i===uc||i===fc||i===dc||i===pc||i===mc||i===gc||i===xc||i===_c||i===yc||i===vc||i===bc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===lc)return o===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===cc)return o===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===hc)return o===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===uc)return o===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===fc)return o===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===dc)return o===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===pc)return o===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===mc)return o===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===gc)return o===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===xc)return o===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===_c)return o===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===yc)return o===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===vc)return o===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===bc)return o===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ma||i===Mc||i===Sc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===ma)return o===Fe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Mc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Sc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Iu||i===Ec||i===Tc||i===wc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===ma)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Ec)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Tc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===wc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===or?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var Gc=class extends pn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},jt=class extends Ze{constructor(){super(),this.isGroup=!0,this.type="Group"}},g2={type:"move"},Yr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,i),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(g2)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new jt;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},x2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_2=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Wc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){let s=new Pn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Vn({vertexShader:x2,fragmentShader:_2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Vt(new Ge(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Xc=class extends cs{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,g=null,x=new Wc,m=e.getContextAttributes(),p=null,M=null,y=[],_=[],D=new yt,C=null,P=new pn;P.viewport=new Re;let N=new pn;N.viewport=new Re;let A=[P,N],S=new Gc,U=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(nt){let vt=y[nt];return vt===void 0&&(vt=new Yr,y[nt]=vt),vt.getTargetRaySpace()},this.getControllerGrip=function(nt){let vt=y[nt];return vt===void 0&&(vt=new Yr,y[nt]=vt),vt.getGripSpace()},this.getHand=function(nt){let vt=y[nt];return vt===void 0&&(vt=new Yr,y[nt]=vt),vt.getHandSpace()};function H(nt){let vt=_.indexOf(nt.inputSource);if(vt===-1)return;let Bt=y[vt];Bt!==void 0&&(Bt.update(nt.inputSource,nt.frame,c||o),Bt.dispatchEvent({type:nt.type,data:nt.inputSource}))}function W(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",lt);for(let nt=0;nt<y.length;nt++){let vt=_[nt];vt!==null&&(_[nt]=null,y[nt].disconnect(vt))}U=null,q=null,x.reset(),t.setRenderTarget(p),d=null,f=null,u=null,s=null,M=null,ge.stop(),i.isPresenting=!1,t.setPixelRatio(C),t.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(nt){r=nt,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(nt){a=nt,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(nt){c=nt},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(nt){if(s=nt,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",W),s.addEventListener("inputsourceschange",lt),m.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(D),s.renderState.layers===void 0){let vt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,vt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new Xi(d.framebufferWidth,d.framebufferHeight,{format:li,type:Wi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let vt=null,Bt=null,Mt=null;m.depth&&(Mt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,vt=m.stencil?ar:Qs,Bt=m.stencil?or:Ss);let Wt={colorFormat:e.RGBA8,depthFormat:Mt,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(Wt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),M=new Xi(f.textureWidth,f.textureHeight,{format:li,type:Wi,depthTexture:new Sa(f.textureWidth,f.textureHeight,Bt,void 0,void 0,void 0,void 0,void 0,void 0,vt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ge.setContext(s),ge.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function lt(nt){for(let vt=0;vt<nt.removed.length;vt++){let Bt=nt.removed[vt],Mt=_.indexOf(Bt);Mt>=0&&(_[Mt]=null,y[Mt].disconnect(Bt))}for(let vt=0;vt<nt.added.length;vt++){let Bt=nt.added[vt],Mt=_.indexOf(Bt);if(Mt===-1){for(let ee=0;ee<y.length;ee++)if(ee>=_.length){_.push(Bt),Mt=ee;break}else if(_[ee]===null){_[ee]=Bt,Mt=ee;break}if(Mt===-1)break}let Wt=y[Mt];Wt&&Wt.connect(Bt)}}let K=new I,gt=new I;function Z(nt,vt,Bt){K.setFromMatrixPosition(vt.matrixWorld),gt.setFromMatrixPosition(Bt.matrixWorld);let Mt=K.distanceTo(gt),Wt=vt.projectionMatrix.elements,ee=Bt.projectionMatrix.elements,Kt=Wt[14]/(Wt[10]-1),_e=Wt[14]/(Wt[10]+1),F=(Wt[9]+1)/Wt[5],it=(Wt[9]-1)/Wt[5],E=(Wt[8]-1)/Wt[0],dt=(ee[8]+1)/ee[0],V=Kt*E,ut=Kt*dt,at=Mt/(-E+dt),Tt=at*-E;if(vt.matrixWorld.decompose(nt.position,nt.quaternion,nt.scale),nt.translateX(Tt),nt.translateZ(at),nt.matrixWorld.compose(nt.position,nt.quaternion,nt.scale),nt.matrixWorldInverse.copy(nt.matrixWorld).invert(),Wt[10]===-1)nt.projectionMatrix.copy(vt.projectionMatrix),nt.projectionMatrixInverse.copy(vt.projectionMatrixInverse);else{let ft=Kt+at,R=_e+at,b=V-Tt,z=ut+(Mt-Tt),j=F*_e/R*ft,ht=it*_e/R*ft;nt.projectionMatrix.makePerspective(b,z,j,ht,ft,R),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert()}}function wt(nt,vt){vt===null?nt.matrixWorld.copy(nt.matrix):nt.matrixWorld.multiplyMatrices(vt.matrixWorld,nt.matrix),nt.matrixWorldInverse.copy(nt.matrixWorld).invert()}this.updateCamera=function(nt){if(s===null)return;let vt=nt.near,Bt=nt.far;x.texture!==null&&(x.depthNear>0&&(vt=x.depthNear),x.depthFar>0&&(Bt=x.depthFar)),S.near=N.near=P.near=vt,S.far=N.far=P.far=Bt,(U!==S.near||q!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),U=S.near,q=S.far),P.layers.mask=nt.layers.mask|2,N.layers.mask=nt.layers.mask|4,S.layers.mask=P.layers.mask|N.layers.mask;let Mt=nt.parent,Wt=S.cameras;wt(S,Mt);for(let ee=0;ee<Wt.length;ee++)wt(Wt[ee],Mt);Wt.length===2?Z(S,P,N):S.projectionMatrix.copy(P.projectionMatrix),At(nt,S,Mt)};function At(nt,vt,Bt){Bt===null?nt.matrix.copy(vt.matrixWorld):(nt.matrix.copy(Bt.matrixWorld),nt.matrix.invert(),nt.matrix.multiply(vt.matrixWorld)),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.updateMatrixWorld(!0),nt.projectionMatrix.copy(vt.projectionMatrix),nt.projectionMatrixInverse.copy(vt.projectionMatrixInverse),nt.isPerspectiveCamera&&(nt.fov=lr*2*Math.atan(1/nt.projectionMatrix.elements[5]),nt.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(nt){l=nt,f!==null&&(f.fixedFoveation=nt),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=nt)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(S)};let Nt=null;function te(nt,vt){if(h=vt.getViewerPose(c||o),g=vt,h!==null){let Bt=h.views;d!==null&&(t.setRenderTargetFramebuffer(M,d.framebuffer),t.setRenderTarget(M));let Mt=!1;Bt.length!==S.cameras.length&&(S.cameras.length=0,Mt=!0);for(let ee=0;ee<Bt.length;ee++){let Kt=Bt[ee],_e=null;if(d!==null)_e=d.getViewport(Kt);else{let it=u.getViewSubImage(f,Kt);_e=it.viewport,ee===0&&(t.setRenderTargetTextures(M,it.colorTexture,f.ignoreDepthValues?void 0:it.depthStencilTexture),t.setRenderTarget(M))}let F=A[ee];F===void 0&&(F=new pn,F.layers.enable(ee),F.viewport=new Re,A[ee]=F),F.matrix.fromArray(Kt.transform.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale),F.projectionMatrix.fromArray(Kt.projectionMatrix),F.projectionMatrixInverse.copy(F.projectionMatrix).invert(),F.viewport.set(_e.x,_e.y,_e.width,_e.height),ee===0&&(S.matrix.copy(F.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),Mt===!0&&S.cameras.push(F)}let Wt=s.enabledFeatures;if(Wt&&Wt.includes("depth-sensing")){let ee=u.getDepthInformation(Bt[0]);ee&&ee.isValid&&ee.texture&&x.init(t,ee,s.renderState)}}for(let Bt=0;Bt<y.length;Bt++){let Mt=_[Bt],Wt=y[Bt];Mt!==null&&Wt!==void 0&&Wt.update(Mt,vt,c||o)}Nt&&Nt(nt,vt),vt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:vt}),g=null}let ge=new Ou;ge.setAnimationLoop(te),this.setAnimationLoop=function(nt){Nt=nt},this.dispose=function(){}}},ys=new Hn,y2=new de;function v2(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Uu(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,M,y,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,M,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===cn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===cn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let M=t.get(p),y=M.envMap,_=M.envMapRotation;y&&(m.envMap.value=y,ys.copy(_),ys.x*=-1,ys.y*=-1,ys.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ys.y*=-1,ys.z*=-1),m.envMapRotation.value.setFromMatrix4(y2.makeRotationFromEuler(ys)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=y*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===cn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let M=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function b2(n,t,e,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,y){let _=y.program;i.uniformBlockBinding(M,_)}function c(M,y){let _=s[M.id];_===void 0&&(g(M),_=h(M),s[M.id]=_,M.addEventListener("dispose",m));let D=y.program;i.updateUBOMapping(M,D);let C=t.render.frame;r[M.id]!==C&&(f(M),r[M.id]=C)}function h(M){let y=u();M.__bindingPointIndex=y;let _=n.createBuffer(),D=M.__size,C=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,_),n.bufferData(n.UNIFORM_BUFFER,D,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,_),_}function u(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){let y=s[M.id],_=M.uniforms,D=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let C=0,P=_.length;C<P;C++){let N=Array.isArray(_[C])?_[C]:[_[C]];for(let A=0,S=N.length;A<S;A++){let U=N[A];if(d(U,C,A,D)===!0){let q=U.__offset,H=Array.isArray(U.value)?U.value:[U.value],W=0;for(let lt=0;lt<H.length;lt++){let K=H[lt],gt=x(K);typeof K=="number"||typeof K=="boolean"?(U.__data[0]=K,n.bufferSubData(n.UNIFORM_BUFFER,q+W,U.__data)):K.isMatrix3?(U.__data[0]=K.elements[0],U.__data[1]=K.elements[1],U.__data[2]=K.elements[2],U.__data[3]=0,U.__data[4]=K.elements[3],U.__data[5]=K.elements[4],U.__data[6]=K.elements[5],U.__data[7]=0,U.__data[8]=K.elements[6],U.__data[9]=K.elements[7],U.__data[10]=K.elements[8],U.__data[11]=0):(K.toArray(U.__data,W),W+=gt.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,q,U.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(M,y,_,D){let C=M.value,P=y+"_"+_;if(D[P]===void 0)return typeof C=="number"||typeof C=="boolean"?D[P]=C:D[P]=C.clone(),!0;{let N=D[P];if(typeof C=="number"||typeof C=="boolean"){if(N!==C)return D[P]=C,!0}else if(N.equals(C)===!1)return N.copy(C),!0}return!1}function g(M){let y=M.uniforms,_=0,D=16;for(let P=0,N=y.length;P<N;P++){let A=Array.isArray(y[P])?y[P]:[y[P]];for(let S=0,U=A.length;S<U;S++){let q=A[S],H=Array.isArray(q.value)?q.value:[q.value];for(let W=0,lt=H.length;W<lt;W++){let K=H[W],gt=x(K),Z=_%D,wt=Z%gt.boundary,At=Z+wt;_+=wt,At!==0&&D-At<gt.storage&&(_+=D-At),q.__data=new Float32Array(gt.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=_,_+=gt.storage}}}let C=_%D;return C>0&&(_+=D-C),M.__size=_,M.__cache={},this}function x(M){let y={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(y.boundary=4,y.storage=4):M.isVector2?(y.boundary=8,y.storage=8):M.isVector3||M.isColor?(y.boundary=16,y.storage=12):M.isVector4?(y.boundary=16,y.storage=16):M.isMatrix3?(y.boundary=48,y.storage=48):M.isMatrix4?(y.boundary=64,y.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),y}function m(M){let y=M.target;y.removeEventListener("dispose",m);let _=o.indexOf(y.__bindingPointIndex);o.splice(_,1),n.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(let M in s)n.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}var Ea=class{constructor(t={}){let{canvas:e=Td(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;let g=new Uint32Array(4),x=new Int32Array(4),m=null,p=null,M=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ze,this.toneMapping=as,this.toneMappingExposure=1;let _=this,D=!1,C=0,P=0,N=null,A=-1,S=null,U=new Re,q=new Re,H=null,W=new Yt(0),lt=0,K=e.width,gt=e.height,Z=1,wt=null,At=null,Nt=new Re(0,0,K,gt),te=new Re(0,0,K,gt),ge=!1,nt=new jr,vt=!1,Bt=!1,Mt=new de,Wt=new de,ee=new I,Kt=new Re,_e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},F=!1;function it(){return N===null?Z:1}let E=i;function dt(w,k){return e.getContext(w,k)}try{let w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${m0}`),e.addEventListener("webglcontextlost",ct,!1),e.addEventListener("webglcontextrestored",Lt,!1),e.addEventListener("webglcontextcreationerror",Et,!1),E===null){let k="webgl2";if(E=dt(k,w),E===null)throw dt(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let V,ut,at,Tt,ft,R,b,z,j,ht,rt,zt,bt,Ct,he,pt,Ft,kt,ne,Ot,ue,le,pe,O;function Pt(){V=new Fg(E),V.init(),le=new m2(E,V),ut=new Pg(E,V,t,le),at=new f2(E,V),ut.reverseDepthBuffer&&f&&at.buffers.depth.setReversed(!0),Tt=new zg(E),ft=new Q1,R=new p2(E,V,at,ft,ut,le,Tt),b=new Dg(_),z=new Og(_),j=new qd(E),pe=new Cg(E,j),ht=new kg(E,j,Tt,pe),rt=new Vg(E,ht,j,Tt),ne=new Hg(E,ut,R),pt=new Lg(ft),zt=new j1(_,b,z,V,ut,pe,pt),bt=new v2(_,ft),Ct=new e2,he=new a2(V),kt=new Rg(_,b,z,at,rt,d,l),Ft=new h2(_,rt,ut),O=new b2(E,Tt,ut,at),Ot=new Ig(E,V,Tt),ue=new Bg(E,V,Tt),Tt.programs=zt.programs,_.capabilities=ut,_.extensions=V,_.properties=ft,_.renderLists=Ct,_.shadowMap=Ft,_.state=at,_.info=Tt}Pt();let J=new Xc(_,E);this.xr=J,this.getContext=function(){return E},this.getContextAttributes=function(){return E.getContextAttributes()},this.forceContextLoss=function(){let w=V.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=V.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(w){w!==void 0&&(Z=w,this.setSize(K,gt,!1))},this.getSize=function(w){return w.set(K,gt)},this.setSize=function(w,k,X=!0){if(J.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=w,gt=k,e.width=Math.floor(w*Z),e.height=Math.floor(k*Z),X===!0&&(e.style.width=w+"px",e.style.height=k+"px"),this.setViewport(0,0,w,k)},this.getDrawingBufferSize=function(w){return w.set(K*Z,gt*Z).floor()},this.setDrawingBufferSize=function(w,k,X){K=w,gt=k,Z=X,e.width=Math.floor(w*X),e.height=Math.floor(k*X),this.setViewport(0,0,w,k)},this.getCurrentViewport=function(w){return w.copy(U)},this.getViewport=function(w){return w.copy(Nt)},this.setViewport=function(w,k,X,$){w.isVector4?Nt.set(w.x,w.y,w.z,w.w):Nt.set(w,k,X,$),at.viewport(U.copy(Nt).multiplyScalar(Z).round())},this.getScissor=function(w){return w.copy(te)},this.setScissor=function(w,k,X,$){w.isVector4?te.set(w.x,w.y,w.z,w.w):te.set(w,k,X,$),at.scissor(q.copy(te).multiplyScalar(Z).round())},this.getScissorTest=function(){return ge},this.setScissorTest=function(w){at.setScissorTest(ge=w)},this.setOpaqueSort=function(w){wt=w},this.setTransparentSort=function(w){At=w},this.getClearColor=function(w){return w.copy(kt.getClearColor())},this.setClearColor=function(){kt.setClearColor.apply(kt,arguments)},this.getClearAlpha=function(){return kt.getClearAlpha()},this.setClearAlpha=function(){kt.setClearAlpha.apply(kt,arguments)},this.clear=function(w=!0,k=!0,X=!0){let $=0;if(w){let B=!1;if(N!==null){let St=N.texture.format;B=St===E0||St===S0||St===M0}if(B){let St=N.texture.type,Ut=St===Wi||St===Ss||St===Kr||St===or||St===y0||St===v0,Gt=kt.getClearColor(),Xt=kt.getClearAlpha(),ie=Gt.r,fe=Gt.g,Ht=Gt.b;Ut?(g[0]=ie,g[1]=fe,g[2]=Ht,g[3]=Xt,E.clearBufferuiv(E.COLOR,0,g)):(x[0]=ie,x[1]=fe,x[2]=Ht,x[3]=Xt,E.clearBufferiv(E.COLOR,0,x))}else $|=E.COLOR_BUFFER_BIT}k&&($|=E.DEPTH_BUFFER_BIT),X&&($|=E.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),E.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ct,!1),e.removeEventListener("webglcontextrestored",Lt,!1),e.removeEventListener("webglcontextcreationerror",Et,!1),Ct.dispose(),he.dispose(),ft.dispose(),b.dispose(),z.dispose(),rt.dispose(),pe.dispose(),O.dispose(),zt.dispose(),J.dispose(),J.removeEventListener("sessionstart",rn),J.removeEventListener("sessionend",ti),ei.stop()};function ct(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function Lt(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;let w=Tt.autoReset,k=Ft.enabled,X=Ft.autoUpdate,$=Ft.needsUpdate,B=Ft.type;Pt(),Tt.autoReset=w,Ft.enabled=k,Ft.autoUpdate=X,Ft.needsUpdate=$,Ft.type=B}function Et(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function re(w){let k=w.target;k.removeEventListener("dispose",re),ke(k)}function ke(w){Se(w),ft.remove(w)}function Se(w){let k=ft.get(w).programs;k!==void 0&&(k.forEach(function(X){zt.releaseProgram(X)}),w.isShaderMaterial&&zt.releaseShaderCache(w))}this.renderBufferDirect=function(w,k,X,$,B,St){k===null&&(k=_e);let Ut=B.isMesh&&B.matrixWorld.determinant()<0,Gt=rl(w,k,X,$,B);at.setMaterial($,Ut);let Xt=X.index,ie=1;if($.wireframe===!0){if(Xt=ht.getWireframeAttribute(X),Xt===void 0)return;ie=2}let fe=X.drawRange,Ht=X.attributes.position,be=fe.start*ie,Ne=(fe.start+fe.count)*ie;St!==null&&(be=Math.max(be,St.start*ie),Ne=Math.min(Ne,(St.start+St.count)*ie)),Xt!==null?(be=Math.max(be,0),Ne=Math.min(Ne,Xt.count)):Ht!=null&&(be=Math.max(be,0),Ne=Math.min(Ne,Ht.count));let Be=Ne-be;if(Be<0||Be===1/0)return;pe.setup(B,$,Gt,X,Xt);let Qe,Me=Ot;if(Xt!==null&&(Qe=j.get(Xt),Me=ue,Me.setIndex(Qe)),B.isMesh)$.wireframe===!0?(at.setLineWidth($.wireframeLinewidth*it()),Me.setMode(E.LINES)):Me.setMode(E.TRIANGLES);else if(B.isLine){let Jt=$.linewidth;Jt===void 0&&(Jt=1),at.setLineWidth(Jt*it()),B.isLineSegments?Me.setMode(E.LINES):B.isLineLoop?Me.setMode(E.LINE_LOOP):Me.setMode(E.LINE_STRIP)}else B.isPoints?Me.setMode(E.POINTS):B.isSprite&&Me.setMode(E.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)Me.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(V.get("WEBGL_multi_draw"))Me.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{let Jt=B._multiDrawStarts,ni=B._multiDrawCounts,Ae=B._multiDrawCount,Nn=Xt?j.get(Xt).bytesPerElement:1,Qi=ft.get($).currentProgram.getUniforms();for(let Sn=0;Sn<Ae;Sn++)Qi.setValue(E,"_gl_DrawID",Sn),Me.render(Jt[Sn]/Nn,ni[Sn])}else if(B.isInstancedMesh)Me.renderInstances(be,Be,B.count);else if(X.isInstancedBufferGeometry){let Jt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,ni=Math.min(X.instanceCount,Jt);Me.renderInstances(be,Be,ni)}else Me.render(be,Be)};function ve(w,k,X){w.transparent===!0&&w.side===Ce&&w.forceSinglePass===!1?(w.side=cn,w.needsUpdate=!0,us(w,k,X),w.side=ls,w.needsUpdate=!0,us(w,k,X),w.side=Ce):us(w,k,X)}this.compile=function(w,k,X=null){X===null&&(X=w),p=he.get(X),p.init(k),y.push(p),X.traverseVisible(function(B){B.isLight&&B.layers.test(k.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),w!==X&&w.traverseVisible(function(B){B.isLight&&B.layers.test(k.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),p.setupLights();let $=new Set;return w.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;let St=B.material;if(St)if(Array.isArray(St))for(let Ut=0;Ut<St.length;Ut++){let Gt=St[Ut];ve(Gt,X,B),$.add(Gt)}else ve(St,X,B),$.add(St)}),y.pop(),p=null,$},this.compileAsync=function(w,k,X=null){let $=this.compile(w,k,X);return new Promise(B=>{function St(){if($.forEach(function(Ut){ft.get(Ut).currentProgram.isReady()&&$.delete(Ut)}),$.size===0){B(w);return}setTimeout(St,10)}V.get("KHR_parallel_shader_compile")!==null?St():setTimeout(St,10)})};let xn=null;function Yn(w){xn&&xn(w)}function rn(){ei.stop()}function ti(){ei.start()}let ei=new Ou;ei.setAnimationLoop(Yn),typeof self<"u"&&ei.setContext(self),this.setAnimationLoop=function(w){xn=w,J.setAnimationLoop(w),w===null?ei.stop():ei.start()},J.addEventListener("sessionstart",rn),J.addEventListener("sessionend",ti),this.render=function(w,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(J.cameraAutoUpdate===!0&&J.updateCamera(k),k=J.getCamera()),w.isScene===!0&&w.onBeforeRender(_,w,k,N),p=he.get(w,y.length),p.init(k),y.push(p),Wt.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),nt.setFromProjectionMatrix(Wt),Bt=this.localClippingEnabled,vt=pt.init(this.clippingPlanes,Bt),m=Ct.get(w,M.length),m.init(),M.push(m),J.enabled===!0&&J.isPresenting===!0){let St=_.xr.getDepthSensingMesh();St!==null&&Ci(St,k,-1/0,_.sortObjects)}Ci(w,k,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(wt,At),F=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,F&&kt.addToRenderList(m,w),this.info.render.frame++,vt===!0&&pt.beginShadows();let X=p.state.shadowsArray;Ft.render(X,w,k),vt===!0&&pt.endShadows(),this.info.autoReset===!0&&this.info.reset();let $=m.opaque,B=m.transmissive;if(p.setupLights(),k.isArrayCamera){let St=k.cameras;if(B.length>0)for(let Ut=0,Gt=St.length;Ut<Gt;Ut++){let Xt=St[Ut];Is($,B,w,Xt)}F&&kt.render(w);for(let Ut=0,Gt=St.length;Ut<Gt;Ut++){let Xt=St[Ut];Xe(m,w,Xt,Xt.viewport)}}else B.length>0&&Is($,B,w,k),F&&kt.render(w),Xe(m,w,k);N!==null&&(R.updateMultisampleRenderTarget(N),R.updateRenderTargetMipmap(N)),w.isScene===!0&&w.onAfterRender(_,w,k),pe.resetDefaultState(),A=-1,S=null,y.pop(),y.length>0?(p=y[y.length-1],vt===!0&&pt.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function Ci(w,k,X,$){if(w.visible===!1)return;if(w.layers.test(k.layers)){if(w.isGroup)X=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(k);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||nt.intersectsSprite(w)){$&&Kt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Wt);let Ut=rt.update(w),Gt=w.material;Gt.visible&&m.push(w,Ut,Gt,X,Kt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||nt.intersectsObject(w))){let Ut=rt.update(w),Gt=w.material;if($&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Kt.copy(w.boundingSphere.center)):(Ut.boundingSphere===null&&Ut.computeBoundingSphere(),Kt.copy(Ut.boundingSphere.center)),Kt.applyMatrix4(w.matrixWorld).applyMatrix4(Wt)),Array.isArray(Gt)){let Xt=Ut.groups;for(let ie=0,fe=Xt.length;ie<fe;ie++){let Ht=Xt[ie],be=Gt[Ht.materialIndex];be&&be.visible&&m.push(w,Ut,be,X,Kt.z,Ht)}}else Gt.visible&&m.push(w,Ut,Gt,X,Kt.z,null)}}let St=w.children;for(let Ut=0,Gt=St.length;Ut<Gt;Ut++)Ci(St[Ut],k,X,$)}function Xe(w,k,X,$){let B=w.opaque,St=w.transmissive,Ut=w.transparent;p.setupLightsView(X),vt===!0&&pt.setGlobalState(_.clippingPlanes,X),$&&at.viewport(U.copy($)),B.length>0&&di(B,k,X),St.length>0&&di(St,k,X),Ut.length>0&&di(Ut,k,X),at.buffers.depth.setTest(!0),at.buffers.depth.setMask(!0),at.buffers.color.setMask(!0),at.setPolygonOffset(!1)}function Is(w,k,X,$){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[$.id]===void 0&&(p.state.transmissionRenderTarget[$.id]=new Xi(1,1,{generateMipmaps:!0,type:V.has("EXT_color_buffer_half_float")||V.has("EXT_color_buffer_float")?uo:Wi,minFilter:Bi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Te.workingColorSpace}));let St=p.state.transmissionRenderTarget[$.id],Ut=$.viewport||U;St.setSize(Ut.z,Ut.w);let Gt=_.getRenderTarget();_.setRenderTarget(St),_.getClearColor(W),lt=_.getClearAlpha(),lt<1&&_.setClearColor(16777215,.5),_.clear(),F&&kt.render(X);let Xt=_.toneMapping;_.toneMapping=as;let ie=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),p.setupLightsView($),vt===!0&&pt.setGlobalState(_.clippingPlanes,$),di(w,X,$),R.updateMultisampleRenderTarget(St),R.updateRenderTargetMipmap(St),V.has("WEBGL_multisampled_render_to_texture")===!1){let fe=!1;for(let Ht=0,be=k.length;Ht<be;Ht++){let Ne=k[Ht],Be=Ne.object,Qe=Ne.geometry,Me=Ne.material,Jt=Ne.group;if(Me.side===Ce&&Be.layers.test($.layers)){let ni=Me.side;Me.side=cn,Me.needsUpdate=!0,Dn(Be,X,$,Qe,Me,Jt),Me.side=ni,Me.needsUpdate=!0,fe=!0}}fe===!0&&(R.updateMultisampleRenderTarget(St),R.updateRenderTargetMipmap(St))}_.setRenderTarget(Gt),_.setClearColor(W,lt),ie!==void 0&&($.viewport=ie),_.toneMapping=Xt}function di(w,k,X){let $=k.isScene===!0?k.overrideMaterial:null;for(let B=0,St=w.length;B<St;B++){let Ut=w[B],Gt=Ut.object,Xt=Ut.geometry,ie=$===null?Ut.material:$,fe=Ut.group;Gt.layers.test(X.layers)&&Dn(Gt,k,X,Xt,ie,fe)}}function Dn(w,k,X,$,B,St){w.onBeforeRender(_,k,X,$,B,St),w.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),B.onBeforeRender(_,k,X,$,w,St),B.transparent===!0&&B.side===Ce&&B.forceSinglePass===!1?(B.side=cn,B.needsUpdate=!0,_.renderBufferDirect(X,k,$,B,w,St),B.side=ls,B.needsUpdate=!0,_.renderBufferDirect(X,k,$,B,w,St),B.side=Ce):_.renderBufferDirect(X,k,$,B,w,St),w.onAfterRender(_,k,X,$,B,St)}function us(w,k,X){k.isScene!==!0&&(k=_e);let $=ft.get(w),B=p.state.lights,St=p.state.shadowsArray,Ut=B.state.version,Gt=zt.getParameters(w,B.state,St,k,X),Xt=zt.getProgramCacheKey(Gt),ie=$.programs;$.environment=w.isMeshStandardMaterial?k.environment:null,$.fog=k.fog,$.envMap=(w.isMeshStandardMaterial?z:b).get(w.envMap||$.environment),$.envMapRotation=$.environment!==null&&w.envMap===null?k.environmentRotation:w.envMapRotation,ie===void 0&&(w.addEventListener("dispose",re),ie=new Map,$.programs=ie);let fe=ie.get(Xt);if(fe!==void 0){if($.currentProgram===fe&&$.lightsStateVersion===Ut)return ji(w,Gt),fe}else Gt.uniforms=zt.getUniforms(w),w.onBeforeCompile(Gt,_),fe=zt.acquireProgram(Gt,Xt),ie.set(Xt,fe),$.uniforms=Gt.uniforms;let Ht=$.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ht.clippingPlanes=pt.uniform),ji(w,Gt),$.needsLights=Mn(w),$.lightsStateVersion=Ut,$.needsLights&&(Ht.ambientLightColor.value=B.state.ambient,Ht.lightProbe.value=B.state.probe,Ht.directionalLights.value=B.state.directional,Ht.directionalLightShadows.value=B.state.directionalShadow,Ht.spotLights.value=B.state.spot,Ht.spotLightShadows.value=B.state.spotShadow,Ht.rectAreaLights.value=B.state.rectArea,Ht.ltc_1.value=B.state.rectAreaLTC1,Ht.ltc_2.value=B.state.rectAreaLTC2,Ht.pointLights.value=B.state.point,Ht.pointLightShadows.value=B.state.pointShadow,Ht.hemisphereLights.value=B.state.hemi,Ht.directionalShadowMap.value=B.state.directionalShadowMap,Ht.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Ht.spotShadowMap.value=B.state.spotShadowMap,Ht.spotLightMatrix.value=B.state.spotLightMatrix,Ht.spotLightMap.value=B.state.spotLightMap,Ht.pointShadowMap.value=B.state.pointShadowMap,Ht.pointShadowMatrix.value=B.state.pointShadowMatrix),$.currentProgram=fe,$.uniformsList=null,fe}function fs(w){if(w.uniformsList===null){let k=w.currentProgram.getUniforms();w.uniformsList=nr.seqWithValue(k.seq,w.uniforms)}return w.uniformsList}function ji(w,k){let X=ft.get(w);X.outputColorSpace=k.outputColorSpace,X.batching=k.batching,X.batchingColor=k.batchingColor,X.instancing=k.instancing,X.instancingColor=k.instancingColor,X.instancingMorph=k.instancingMorph,X.skinning=k.skinning,X.morphTargets=k.morphTargets,X.morphNormals=k.morphNormals,X.morphColors=k.morphColors,X.morphTargetsCount=k.morphTargetsCount,X.numClippingPlanes=k.numClippingPlanes,X.numIntersection=k.numClipIntersection,X.vertexAlphas=k.vertexAlphas,X.vertexTangents=k.vertexTangents,X.toneMapping=k.toneMapping}function rl(w,k,X,$,B){k.isScene!==!0&&(k=_e),R.resetTextureUnits();let St=k.fog,Ut=$.isMeshStandardMaterial?k.environment:null,Gt=N===null?_.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Er,Xt=($.isMeshStandardMaterial?z:b).get($.envMap||Ut),ie=$.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,fe=!!X.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Ht=!!X.morphAttributes.position,be=!!X.morphAttributes.normal,Ne=!!X.morphAttributes.color,Be=as;$.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Be=_.toneMapping);let Qe=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Me=Qe!==void 0?Qe.length:0,Jt=ft.get($),ni=p.state.lights;if(vt===!0&&(Bt===!0||w!==S)){let on=w===S&&$.id===A;pt.setState($,w,on)}let Ae=!1;$.version===Jt.__version?(Jt.needsLights&&Jt.lightsStateVersion!==ni.state.version||Jt.outputColorSpace!==Gt||B.isBatchedMesh&&Jt.batching===!1||!B.isBatchedMesh&&Jt.batching===!0||B.isBatchedMesh&&Jt.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Jt.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Jt.instancing===!1||!B.isInstancedMesh&&Jt.instancing===!0||B.isSkinnedMesh&&Jt.skinning===!1||!B.isSkinnedMesh&&Jt.skinning===!0||B.isInstancedMesh&&Jt.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Jt.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Jt.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Jt.instancingMorph===!1&&B.morphTexture!==null||Jt.envMap!==Xt||$.fog===!0&&Jt.fog!==St||Jt.numClippingPlanes!==void 0&&(Jt.numClippingPlanes!==pt.numPlanes||Jt.numIntersection!==pt.numIntersection)||Jt.vertexAlphas!==ie||Jt.vertexTangents!==fe||Jt.morphTargets!==Ht||Jt.morphNormals!==be||Jt.morphColors!==Ne||Jt.toneMapping!==Be||Jt.morphTargetsCount!==Me)&&(Ae=!0):(Ae=!0,Jt.__version=$.version);let Nn=Jt.currentProgram;Ae===!0&&(Nn=us($,k,B));let Qi=!1,Sn=!1,ds=!1,Ee=Nn.getUniforms(),En=Jt.uniforms;if(at.useProgram(Nn.program)&&(Qi=!0,Sn=!0,ds=!0),$.id!==A&&(A=$.id,Sn=!0),Qi||S!==w){at.buffers.depth.getReversed()?(Mt.copy(w.projectionMatrix),Ad(Mt),Rd(Mt),Ee.setValue(E,"projectionMatrix",Mt)):Ee.setValue(E,"projectionMatrix",w.projectionMatrix),Ee.setValue(E,"viewMatrix",w.matrixWorldInverse);let Cn=Ee.map.cameraPosition;Cn!==void 0&&Cn.setValue(E,ee.setFromMatrixPosition(w.matrixWorld)),ut.logarithmicDepthBuffer&&Ee.setValue(E,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Ee.setValue(E,"isOrthographic",w.isOrthographicCamera===!0),S!==w&&(S=w,Sn=!0,ds=!0)}if(B.isSkinnedMesh){Ee.setOptional(E,B,"bindMatrix"),Ee.setOptional(E,B,"bindMatrixInverse");let on=B.skeleton;on&&(on.boneTexture===null&&on.computeBoneTexture(),Ee.setValue(E,"boneTexture",on.boneTexture,R))}B.isBatchedMesh&&(Ee.setOptional(E,B,"batchingTexture"),Ee.setValue(E,"batchingTexture",B._matricesTexture,R),Ee.setOptional(E,B,"batchingIdTexture"),Ee.setValue(E,"batchingIdTexture",B._indirectTexture,R),Ee.setOptional(E,B,"batchingColorTexture"),B._colorsTexture!==null&&Ee.setValue(E,"batchingColorTexture",B._colorsTexture,R));let mi=X.morphAttributes;if((mi.position!==void 0||mi.normal!==void 0||mi.color!==void 0)&&ne.update(B,X,Nn),(Sn||Jt.receiveShadow!==B.receiveShadow)&&(Jt.receiveShadow=B.receiveShadow,Ee.setValue(E,"receiveShadow",B.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(En.envMap.value=Xt,En.flipEnvMap.value=Xt.isCubeTexture&&Xt.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&k.environment!==null&&(En.envMapIntensity.value=k.environmentIntensity),Sn&&(Ee.setValue(E,"toneMappingExposure",_.toneMappingExposure),Jt.needsLights&&pi(En,ds),St&&$.fog===!0&&bt.refreshFogUniforms(En,St),bt.refreshMaterialUniforms(En,$,Z,gt,p.state.transmissionRenderTarget[w.id]),nr.upload(E,fs(Jt),En,R)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(nr.upload(E,fs(Jt),En,R),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Ee.setValue(E,"center",B.center),Ee.setValue(E,"modelViewMatrix",B.modelViewMatrix),Ee.setValue(E,"normalMatrix",B.normalMatrix),Ee.setValue(E,"modelMatrix",B.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){let on=$.uniformsGroups;for(let Cn=0,gi=on.length;Cn<gi;Cn++){let Pr=on[Cn];O.update(Pr,Nn),O.bind(Pr,Nn)}}return Nn}function pi(w,k){w.ambientLightColor.needsUpdate=k,w.lightProbe.needsUpdate=k,w.directionalLights.needsUpdate=k,w.directionalLightShadows.needsUpdate=k,w.pointLights.needsUpdate=k,w.pointLightShadows.needsUpdate=k,w.spotLights.needsUpdate=k,w.spotLightShadows.needsUpdate=k,w.rectAreaLights.needsUpdate=k,w.hemisphereLights.needsUpdate=k}function Mn(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(w,k,X){ft.get(w.texture).__webglTexture=k,ft.get(w.depthTexture).__webglTexture=X;let $=ft.get(w);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=X===void 0,$.__autoAllocateDepthBuffer||V.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,k){let X=ft.get(w);X.__webglFramebuffer=k,X.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(w,k=0,X=0){N=w,C=k,P=X;let $=!0,B=null,St=!1,Ut=!1;if(w){let Xt=ft.get(w);if(Xt.__useDefaultFramebuffer!==void 0)at.bindFramebuffer(E.FRAMEBUFFER,null),$=!1;else if(Xt.__webglFramebuffer===void 0)R.setupRenderTarget(w);else if(Xt.__hasExternalTextures)R.rebindTextures(w,ft.get(w.texture).__webglTexture,ft.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Ht=w.depthTexture;if(Xt.__boundDepthTexture!==Ht){if(Ht!==null&&ft.has(Ht)&&(w.width!==Ht.image.width||w.height!==Ht.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(w)}}let ie=w.texture;(ie.isData3DTexture||ie.isDataArrayTexture||ie.isCompressedArrayTexture)&&(Ut=!0);let fe=ft.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(fe[k])?B=fe[k][X]:B=fe[k],St=!0):w.samples>0&&R.useMultisampledRTT(w)===!1?B=ft.get(w).__webglMultisampledFramebuffer:Array.isArray(fe)?B=fe[X]:B=fe,U.copy(w.viewport),q.copy(w.scissor),H=w.scissorTest}else U.copy(Nt).multiplyScalar(Z).floor(),q.copy(te).multiplyScalar(Z).floor(),H=ge;if(at.bindFramebuffer(E.FRAMEBUFFER,B)&&$&&at.drawBuffers(w,B),at.viewport(U),at.scissor(q),at.setScissorTest(H),St){let Xt=ft.get(w.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_CUBE_MAP_POSITIVE_X+k,Xt.__webglTexture,X)}else if(Ut){let Xt=ft.get(w.texture),ie=k||0;E.framebufferTextureLayer(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,Xt.__webglTexture,X||0,ie)}A=-1},this.readRenderTargetPixels=function(w,k,X,$,B,St,Ut){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Gt=ft.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ut!==void 0&&(Gt=Gt[Ut]),Gt){at.bindFramebuffer(E.FRAMEBUFFER,Gt);try{let Xt=w.texture,ie=Xt.format,fe=Xt.type;if(!ut.textureFormatReadable(ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ut.textureTypeReadable(fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=w.width-$&&X>=0&&X<=w.height-B&&E.readPixels(k,X,$,B,le.convert(ie),le.convert(fe),St)}finally{let Xt=N!==null?ft.get(N).__webglFramebuffer:null;at.bindFramebuffer(E.FRAMEBUFFER,Xt)}}},this.readRenderTargetPixelsAsync=async function(w,k,X,$,B,St,Ut){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Gt=ft.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ut!==void 0&&(Gt=Gt[Ut]),Gt){let Xt=w.texture,ie=Xt.format,fe=Xt.type;if(!ut.textureFormatReadable(ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ut.textureTypeReadable(fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=w.width-$&&X>=0&&X<=w.height-B){at.bindFramebuffer(E.FRAMEBUFFER,Gt);let Ht=E.createBuffer();E.bindBuffer(E.PIXEL_PACK_BUFFER,Ht),E.bufferData(E.PIXEL_PACK_BUFFER,St.byteLength,E.STREAM_READ),E.readPixels(k,X,$,B,le.convert(ie),le.convert(fe),0);let be=N!==null?ft.get(N).__webglFramebuffer:null;at.bindFramebuffer(E.FRAMEBUFFER,be);let Ne=E.fenceSync(E.SYNC_GPU_COMMANDS_COMPLETE,0);return E.flush(),await wd(E,Ne,4),E.bindBuffer(E.PIXEL_PACK_BUFFER,Ht),E.getBufferSubData(E.PIXEL_PACK_BUFFER,0,St),E.deleteBuffer(Ht),E.deleteSync(Ne),St}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,k=null,X=0){w.isTexture!==!0&&(Gr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,w=arguments[1]);let $=Math.pow(2,-X),B=Math.floor(w.image.width*$),St=Math.floor(w.image.height*$),Ut=k!==null?k.x:0,Gt=k!==null?k.y:0;R.setTexture2D(w,0),E.copyTexSubImage2D(E.TEXTURE_2D,X,0,0,Ut,Gt,B,St),at.unbindTexture()},this.copyTextureToTexture=function(w,k,X=null,$=null,B=0){w.isTexture!==!0&&(Gr("WebGLRenderer: copyTextureToTexture function signature has changed."),$=arguments[0]||null,w=arguments[1],k=arguments[2],B=arguments[3]||0,X=null);let St,Ut,Gt,Xt,ie,fe,Ht,be,Ne,Be=w.isCompressedTexture?w.mipmaps[B]:w.image;X!==null?(St=X.max.x-X.min.x,Ut=X.max.y-X.min.y,Gt=X.isBox3?X.max.z-X.min.z:1,Xt=X.min.x,ie=X.min.y,fe=X.isBox3?X.min.z:0):(St=Be.width,Ut=Be.height,Gt=Be.depth||1,Xt=0,ie=0,fe=0),$!==null?(Ht=$.x,be=$.y,Ne=$.z):(Ht=0,be=0,Ne=0);let Qe=le.convert(k.format),Me=le.convert(k.type),Jt;k.isData3DTexture?(R.setTexture3D(k,0),Jt=E.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(R.setTexture2DArray(k,0),Jt=E.TEXTURE_2D_ARRAY):(R.setTexture2D(k,0),Jt=E.TEXTURE_2D),E.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,k.flipY),E.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),E.pixelStorei(E.UNPACK_ALIGNMENT,k.unpackAlignment);let ni=E.getParameter(E.UNPACK_ROW_LENGTH),Ae=E.getParameter(E.UNPACK_IMAGE_HEIGHT),Nn=E.getParameter(E.UNPACK_SKIP_PIXELS),Qi=E.getParameter(E.UNPACK_SKIP_ROWS),Sn=E.getParameter(E.UNPACK_SKIP_IMAGES);E.pixelStorei(E.UNPACK_ROW_LENGTH,Be.width),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,Be.height),E.pixelStorei(E.UNPACK_SKIP_PIXELS,Xt),E.pixelStorei(E.UNPACK_SKIP_ROWS,ie),E.pixelStorei(E.UNPACK_SKIP_IMAGES,fe);let ds=w.isDataArrayTexture||w.isData3DTexture,Ee=k.isDataArrayTexture||k.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){let En=ft.get(w),mi=ft.get(k),on=ft.get(En.__renderTarget),Cn=ft.get(mi.__renderTarget);at.bindFramebuffer(E.READ_FRAMEBUFFER,on.__webglFramebuffer),at.bindFramebuffer(E.DRAW_FRAMEBUFFER,Cn.__webglFramebuffer);for(let gi=0;gi<Gt;gi++)ds&&E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,ft.get(w).__webglTexture,B,fe+gi),w.isDepthTexture?(Ee&&E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,ft.get(k).__webglTexture,B,Ne+gi),E.blitFramebuffer(Xt,ie,St,Ut,Ht,be,St,Ut,E.DEPTH_BUFFER_BIT,E.NEAREST)):Ee?E.copyTexSubImage3D(Jt,B,Ht,be,Ne+gi,Xt,ie,St,Ut):E.copyTexSubImage2D(Jt,B,Ht,be,Ne+gi,Xt,ie,St,Ut);at.bindFramebuffer(E.READ_FRAMEBUFFER,null),at.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else Ee?w.isDataTexture||w.isData3DTexture?E.texSubImage3D(Jt,B,Ht,be,Ne,St,Ut,Gt,Qe,Me,Be.data):k.isCompressedArrayTexture?E.compressedTexSubImage3D(Jt,B,Ht,be,Ne,St,Ut,Gt,Qe,Be.data):E.texSubImage3D(Jt,B,Ht,be,Ne,St,Ut,Gt,Qe,Me,Be):w.isDataTexture?E.texSubImage2D(E.TEXTURE_2D,B,Ht,be,St,Ut,Qe,Me,Be.data):w.isCompressedTexture?E.compressedTexSubImage2D(E.TEXTURE_2D,B,Ht,be,Be.width,Be.height,Qe,Be.data):E.texSubImage2D(E.TEXTURE_2D,B,Ht,be,St,Ut,Qe,Me,Be);E.pixelStorei(E.UNPACK_ROW_LENGTH,ni),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,Ae),E.pixelStorei(E.UNPACK_SKIP_PIXELS,Nn),E.pixelStorei(E.UNPACK_SKIP_ROWS,Qi),E.pixelStorei(E.UNPACK_SKIP_IMAGES,Sn),B===0&&k.generateMipmaps&&E.generateMipmap(Jt),at.unbindTexture()},this.copyTextureToTexture3D=function(w,k,X=null,$=null,B=0){return w.isTexture!==!0&&(Gr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,$=arguments[1]||null,w=arguments[2],k=arguments[3],B=arguments[4]||0),Gr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,k,X,$,B)},this.initRenderTarget=function(w){ft.get(w).__webglFramebuffer===void 0&&R.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?R.setTextureCube(w,0):w.isData3DTexture?R.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?R.setTexture2DArray(w,0):R.setTexture2D(w,0),at.unbindTexture()},this.resetState=function(){C=0,P=0,N=null,at.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Te._getDrawingBufferColorSpace(t),e.unpackColorSpace=Te._getUnpackColorSpace()}},pr=class n{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Yt(t),this.density=e}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var mr=class extends Ze{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hn,this.environmentIntensity=1,this.environmentRotation=new Hn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Ta=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Rc,this.updateRanges=[],this.version=0,this.uuid=bi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Tn=new I,Qr=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Tn.fromBufferAttribute(this,e),Tn.applyMatrix4(t),this.setXYZ(e,Tn.x,Tn.y,Tn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Tn.fromBufferAttribute(this,e),Tn.applyNormalMatrix(t),this.setXYZ(e,Tn.x,Tn.y,Tn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Tn.fromBufferAttribute(this,e),Tn.transformDirection(t),this.setXYZ(e,Tn.x,Tn.y,Tn.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=ai(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Le(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=Le(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Le(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Le(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Le(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=ai(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=ai(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=ai(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=ai(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Le(e,this.array),i=Le(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Le(e,this.array),i=Le(i,this.array),s=Le(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Le(e,this.array),i=Le(i,this.array),s=Le(s,this.array),r=Le(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ve(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},gr=class extends Mi{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Yt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Xs,Or=new I,Ys=new I,qs=new I,$s=new yt,Fr=new yt,Hu=new de,Ko=new I,kr=new I,Jo=new I,eu=new yt,Ul=new yt,nu=new yt,to=class extends Ze{constructor(t=new gr){if(super(),this.isSprite=!0,this.type="Sprite",Xs===void 0){Xs=new Pe;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Ta(e,5);Xs.setIndex([0,1,2,0,2,3]),Xs.setAttribute("position",new Qr(i,3,0,!1)),Xs.setAttribute("uv",new Qr(i,2,3,!1))}this.geometry=Xs,this.material=t,this.center=new yt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ys.setFromMatrixScale(this.matrixWorld),Hu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),qs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ys.multiplyScalar(-qs.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;jo(Ko.set(-.5,-.5,0),qs,o,Ys,s,r),jo(kr.set(.5,-.5,0),qs,o,Ys,s,r),jo(Jo.set(.5,.5,0),qs,o,Ys,s,r),eu.set(0,0),Ul.set(1,0),nu.set(1,1);let a=t.ray.intersectTriangle(Ko,kr,Jo,!1,Or);if(a===null&&(jo(kr.set(-.5,.5,0),qs,o,Ys,s,r),Ul.set(0,1),a=t.ray.intersectTriangle(Ko,Jo,kr,!1,Or),a===null))return;let l=t.ray.origin.distanceTo(Or);l<t.near||l>t.far||e.push({distance:l,point:Or.clone(),uv:Fi.getInterpolation(Or,Ko,kr,Jo,eu,Ul,nu,new yt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function jo(n,t,e,i,s,r){$s.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(Fr.x=r*$s.x-s*$s.y,Fr.y=s*$s.x+r*$s.y):Fr.copy($s),n.copy(t),n.x+=Fr.x,n.y+=Fr.y,n.applyMatrix4(Hu)}var Yc=class extends Pn{constructor(t=null,e=1,i=1,s,r,o,a,l,c=kn,h=kn,u,f){super(null,o,a,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var eo=class extends Ve{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Zs=new de,iu=new de,Qo=[],su=new zn,M2=new de,Br=new Vt,zr=new Yi,wa=class extends Vt{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new eo(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,M2)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new zn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Zs),su.copy(t.boundingBox).applyMatrix4(Zs),this.boundingBox.union(su)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Yi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Zs),zr.copy(t.boundingSphere).applyMatrix4(Zs),this.boundingSphere.union(zr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(t,e){let i=this.matrixWorld,s=this.count;if(Br.geometry=this.geometry,Br.material=this.material,Br.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),zr.copy(this.boundingSphere),zr.applyMatrix4(i),t.ray.intersectsSphere(zr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Zs),iu.multiplyMatrices(i,Zs),Br.matrixWorld=iu,Br.raycast(t,Qo);for(let o=0,a=Qo.length;o<a;o++){let l=Qo[o];l.instanceId=r,l.object=this,e.push(l)}Qo.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new eo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Yc(new Float32Array(s*this.count),s,this.count,b0,vi));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var xr=class extends Mi{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Yt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Aa=new I,Ra=new I,ru=new de,Hr=new cr,ta=new Yi,Ol=new I,ou=new I,qc=class extends Ze{constructor(t=new Pe,e=new xr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)Aa.fromBufferAttribute(e,s-1),Ra.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=Aa.distanceTo(Ra);t.setAttribute("lineDistance",new oe(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ta.copy(i.boundingSphere),ta.applyMatrix4(s),ta.radius+=r,t.ray.intersectsSphere(ta)===!1)return;ru.copy(s).invert(),Hr.copy(t.ray).applyMatrix4(ru);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,f=i.attributes.position;if(h!==null){let d=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=d,m=g-1;x<m;x+=c){let p=h.getX(x),M=h.getX(x+1),y=ea(this,t,Hr,l,p,M);y&&e.push(y)}if(this.isLineLoop){let x=h.getX(g-1),m=h.getX(d),p=ea(this,t,Hr,l,x,m);p&&e.push(p)}}else{let d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let x=d,m=g-1;x<m;x+=c){let p=ea(this,t,Hr,l,x,x+1);p&&e.push(p)}if(this.isLineLoop){let x=ea(this,t,Hr,l,g-1,d);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function ea(n,t,e,i,s,r){let o=n.geometry.attributes.position;if(Aa.fromBufferAttribute(o,s),Ra.fromBufferAttribute(o,r),e.distanceSqToSegment(Aa,Ra,Ol,ou)>i)return;Ol.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(Ol);if(!(l<t.near||l>t.far))return{distance:l,point:ou.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}var au=new I,lu=new I,_r=class extends qc{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)au.fromBufferAttribute(e,s),lu.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+au.distanceTo(lu);t.setAttribute("lineDistance",new oe(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var $c=class extends Mi{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Yt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},cu=new de,Zc=new cr,na=new Yi,ia=new I,Ca=class extends Ze{constructor(t=new Pe,e=new $c){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),na.copy(i.boundingSphere),na.applyMatrix4(s),na.radius+=r,t.ray.intersectsSphere(na)===!1)return;cu.copy(s).invert(),Zc.copy(t.ray).applyMatrix4(cu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,u=i.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,x=d;g<x;g++){let m=c.getX(g);ia.fromBufferAttribute(u,m),hu(ia,m,l,s,t,e,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let g=f,x=d;g<x;g++)ia.fromBufferAttribute(u,g),hu(ia,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function hu(n,t,e,i,s,r,o){let a=Zc.distanceSqToPoint(n);if(a<e){let l=new I;Zc.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var An=class extends Pn{constructor(t,e,i,s,r,o,a,l,c){super(t,e,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Zn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let i=this.getLengths(),s=0,r=i.length,o;e?o=e:o=t*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let h=i[s],f=i[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new yt:new I);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){let i=new I,s=[],r=[],o=[],a=new I,l=new de;for(let d=0;d<=t;d++){let g=d/t;s[d]=this.getTangentAt(g,new I)}r[0]=new I,o[0]=new I;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(ln(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(ln(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},no=class extends Zn{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new yt){let i=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Kc=class extends no{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function A0(){let n=0,t=0,e=0,i=0;function s(r,o,a,l){n=r,t=a,e=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return n+t*r+e*o+i*a}}}var sa=new I,Fl=new A0,kl=new A0,Bl=new A0,yr=class extends Zn{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new I){let i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(sa.subVectors(s[0],s[1]).add(s[0]),c=sa);let u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(sa.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=sa),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),d),x=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),Fl.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,x,m),kl.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,x,m),Bl.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(Fl.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),kl.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Bl.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return i.set(Fl.calc(l),kl.calc(l),Bl.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new I().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function uu(n,t,e,i,s){let r=(i-t)*.5,o=(s-e)*.5,a=n*n,l=n*a;return(2*e-2*i+r+o)*l+(-3*e+3*i-2*r-o)*a+r*n+e}function S2(n,t){let e=1-n;return e*e*t}function E2(n,t){return 2*(1-n)*n*t}function T2(n,t){return n*n*t}function qr(n,t,e,i){return S2(n,t)+E2(n,e)+T2(n,i)}function w2(n,t){let e=1-n;return e*e*e*t}function A2(n,t){let e=1-n;return 3*e*e*n*t}function R2(n,t){return 3*(1-n)*n*n*t}function C2(n,t){return n*n*n*t}function $r(n,t,e,i,s){return w2(n,t)+A2(n,e)+R2(n,i)+C2(n,s)}var Ia=class extends Zn{constructor(t=new yt,e=new yt,i=new yt,s=new yt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new yt){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set($r(t,s.x,r.x,o.x,a.x),$r(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Jc=class extends Zn{constructor(t=new I,e=new I,i=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new I){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set($r(t,s.x,r.x,o.x,a.x),$r(t,s.y,r.y,o.y,a.y),$r(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Pa=class extends Zn{constructor(t=new yt,e=new yt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new yt){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new yt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},jc=class extends Zn{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},La=class extends Zn{constructor(t=new yt,e=new yt,i=new yt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new yt){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(qr(t,s.x,r.x,o.x),qr(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Da=class extends Zn{constructor(t=new I,e=new I,i=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new I){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(qr(t,s.x,r.x,o.x),qr(t,s.y,r.y,o.y),qr(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Na=class extends Zn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new yt){let i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set(uu(a,l.x,c.x,h.x,u.x),uu(a,l.y,c.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new yt().fromArray(s))}return this}},Ua=Object.freeze({__proto__:null,ArcCurve:Kc,CatmullRomCurve3:yr,CubicBezierCurve:Ia,CubicBezierCurve3:Jc,EllipseCurve:no,LineCurve:Pa,LineCurve3:jc,QuadraticBezierCurve:La,QuadraticBezierCurve3:Da,SplineCurve:Na}),Qc=class extends Zn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ua[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(new Ua[s.type]().fromJSON(s))}return this}},Oa=class extends Qc{constructor(t){super(),this.type="Path",this.currentPoint=new yt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new Pa(this.currentPoint.clone(),new yt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){let r=new La(this.currentPoint.clone(),new yt(t,e),new yt(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,o){let a=new Ia(this.currentPoint.clone(),new yt(t,e),new yt(i,s),new yt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new Na(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,s,r,o),this}absarc(t,e,i,s,r,o){return this.absellipse(t,e,i,i,s,r,o),this}ellipse(t,e,i,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,s,r,o,a,l),this}absellipse(t,e,i,s,r,o,a,l){let c=new no(t,e,i,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Fa=class n extends Pe{constructor(t=[new yt(0,-.5),new yt(.5,0),new yt(0,.5)],e=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:s},e=Math.floor(e),s=ln(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,u=new I,f=new yt,d=new I,g=new I,x=new I,m=0,p=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:m=t[M+1].x-t[M].x,p=t[M+1].y-t[M].y,d.x=p*1,d.y=-m,d.z=p*0,x.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:m=t[M+1].x-t[M].x,p=t[M+1].y-t[M].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),l.push(d.x,d.y,d.z),x.copy(g)}for(let M=0;M<=e;M++){let y=i+M*h*s,_=Math.sin(y),D=Math.cos(y);for(let C=0;C<=t.length-1;C++){u.x=t[C].x*_,u.y=t[C].y,u.z=t[C].x*D,o.push(u.x,u.y,u.z),f.x=M/e,f.y=C/(t.length-1),a.push(f.x,f.y);let P=l[3*C+0]*_,N=l[3*C+1],A=l[3*C+0]*D;c.push(P,N,A)}}for(let M=0;M<e;M++)for(let y=0;y<t.length-1;y++){let _=y+M*t.length,D=_,C=_+t.length,P=_+t.length+1,N=_+1;r.push(D,C,N),r.push(P,N,C)}this.setIndex(r),this.setAttribute("position",new oe(o,3)),this.setAttribute("uv",new oe(a,2)),this.setAttribute("normal",new oe(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.points,t.segments,t.phiStart,t.phiLength)}};var io=class n extends Pe{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new I,h=new yt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let d=i+u/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new oe(o,3)),this.setAttribute("normal",new oe(a,3)),this.setAttribute("uv",new oe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.segments,t.thetaStart,t.thetaLength)}},qi=class n extends Pe{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],g=0,x=[],m=i/2,p=0;M(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new oe(u,3)),this.setAttribute("normal",new oe(f,3)),this.setAttribute("uv",new oe(d,2));function M(){let _=new I,D=new I,C=0,P=(e-t)/i;for(let N=0;N<=r;N++){let A=[],S=N/r,U=S*(e-t)+t;for(let q=0;q<=s;q++){let H=q/s,W=H*l+a,lt=Math.sin(W),K=Math.cos(W);D.x=U*lt,D.y=-S*i+m,D.z=U*K,u.push(D.x,D.y,D.z),_.set(lt,P,K).normalize(),f.push(_.x,_.y,_.z),d.push(H,1-S),A.push(g++)}x.push(A)}for(let N=0;N<s;N++)for(let A=0;A<r;A++){let S=x[A][N],U=x[A+1][N],q=x[A+1][N+1],H=x[A][N+1];(t>0||A!==0)&&(h.push(S,U,H),C+=3),(e>0||A!==r-1)&&(h.push(U,q,H),C+=3)}c.addGroup(p,C,0),p+=C}function y(_){let D=g,C=new yt,P=new I,N=0,A=_===!0?t:e,S=_===!0?1:-1;for(let q=1;q<=s;q++)u.push(0,m*S,0),f.push(0,S,0),d.push(.5,.5),g++;let U=g;for(let q=0;q<=s;q++){let W=q/s*l+a,lt=Math.cos(W),K=Math.sin(W);P.x=A*K,P.y=m*S,P.z=A*lt,u.push(P.x,P.y,P.z),f.push(0,S,0),C.x=lt*.5+.5,C.y=K*.5*S+.5,d.push(C.x,C.y),g++}for(let q=0;q<s;q++){let H=D+q,W=U+q;_===!0?h.push(W,W+1,H):h.push(W+1,W,H),N+=3}c.addGroup(p,N,_===!0?1:2),p+=N}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var ra=new I,oa=new I,zl=new I,aa=new Fi,vr=class extends Pe{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let s=Math.pow(10,4),r=Math.cos(tr*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),f={},d=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);let{a:x,b:m,c:p}=aa;if(x.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),p.fromBufferAttribute(a,c[2]),aa.getNormal(zl),u[0]=`${Math.round(x.x*s)},${Math.round(x.y*s)},${Math.round(x.z*s)}`,u[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,u[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let M=0;M<3;M++){let y=(M+1)%3,_=u[M],D=u[y],C=aa[h[M]],P=aa[h[y]],N=`${_}_${D}`,A=`${D}_${_}`;A in f&&f[A]?(zl.dot(f[A].normal)<=r&&(d.push(C.x,C.y,C.z),d.push(P.x,P.y,P.z)),f[A]=null):N in f||(f[N]={index0:c[M],index1:c[y],normal:zl.clone()})}}for(let g in f)if(f[g]){let{index0:x,index1:m}=f[g];ra.fromBufferAttribute(a,x),oa.fromBufferAttribute(a,m),d.push(ra.x,ra.y,ra.z),d.push(oa.x,oa.y,oa.z)}this.setAttribute("position",new oe(d,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}},br=class extends Oa{constructor(t){super(t),this.uuid=bi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(new Oa().fromJSON(s))}return this}},I2={triangulate:function(n,t,e=2){let i=t&&t.length,s=i?t[0]*e:n.length,r=Vu(n,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,f,d;if(i&&(r=U2(n,t,r,e)),n.length>80*e){a=c=n[0],l=h=n[1];for(let g=e;g<s;g+=e)u=n[g],f=n[g+1],u<a&&(a=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);d=Math.max(c-a,h-l),d=d!==0?32767/d:0}return so(r,o,e,a,l,d,0),o}};function Vu(n,t,e,i,s){let r,o;if(s===Y2(n,t,e,i)>0)for(r=t;r<e;r+=i)o=fu(r,n[r],n[r+1],o);else for(r=e-i;r>=t;r-=i)o=fu(r,n[r],n[r+1],o);return o&&$a(o,o.next)&&(oo(o),o=o.next),o}function Es(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&($a(e,e.next)||$e(e.prev,e,e.next)===0)){if(oo(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function so(n,t,e,i,s,r,o){if(!n)return;!o&&r&&z2(n,i,s,r);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,r?L2(n,i,s,r):P2(n)){t.push(l.i/e|0),t.push(n.i/e|0),t.push(c.i/e|0),oo(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=D2(Es(n),t,e),so(n,t,e,i,s,r,2)):o===2&&N2(n,t,e,i,s,r):so(Es(n),t,e,i,s,r,1);break}}}function P2(n){let t=n.prev,e=n,i=n.next;if($e(t,e,i)>=0)return!1;let s=t.x,r=e.x,o=i.x,a=t.y,l=e.y,c=i.y,h=s<r?s<o?s:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,f=s>r?s>o?s:o:r>o?r:o,d=a>l?a>c?a:c:l>c?l:c,g=i.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&Js(s,a,r,l,o,c,g.x,g.y)&&$e(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function L2(n,t,e,i){let s=n.prev,r=n,o=n.next;if($e(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,f=o.y,d=a<l?a<c?a:c:l<c?l:c,g=h<u?h<f?h:f:u<f?u:f,x=a>l?a>c?a:c:l>c?l:c,m=h>u?h>f?h:f:u>f?u:f,p=t0(d,g,t,e,i),M=t0(x,m,t,e,i),y=n.prevZ,_=n.nextZ;for(;y&&y.z>=p&&_&&_.z<=M;){if(y.x>=d&&y.x<=x&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&Js(a,h,l,u,c,f,y.x,y.y)&&$e(y.prev,y,y.next)>=0||(y=y.prevZ,_.x>=d&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&Js(a,h,l,u,c,f,_.x,_.y)&&$e(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;y&&y.z>=p;){if(y.x>=d&&y.x<=x&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&Js(a,h,l,u,c,f,y.x,y.y)&&$e(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;_&&_.z<=M;){if(_.x>=d&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&Js(a,h,l,u,c,f,_.x,_.y)&&$e(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function D2(n,t,e){let i=n;do{let s=i.prev,r=i.next.next;!$a(s,r)&&Gu(s,i,i.next,r)&&ro(s,r)&&ro(r,s)&&(t.push(s.i/e|0),t.push(i.i/e|0),t.push(r.i/e|0),oo(i),oo(i.next),i=n=r),i=i.next}while(i!==n);return Es(i)}function N2(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&G2(o,a)){let l=Wu(o,a);o=Es(o,o.next),l=Es(l,l.next),so(o,t,e,i,s,r,0),so(l,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function U2(n,t,e,i){let s=[],r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*i,l=r<o-1?t[r+1]*i:n.length,c=Vu(n,a,l,i,!1),c===c.next&&(c.steiner=!0),s.push(V2(c));for(s.sort(O2),r=0;r<s.length;r++)e=F2(s[r],e);return e}function O2(n,t){return n.x-t.x}function F2(n,t){let e=k2(n,t);if(!e)return t;let i=Wu(e,n);return Es(i,i.next),Es(e,e.next)}function k2(n,t){let e=t,i=-1/0,s,r=n.x,o=n.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>i&&(i=f,s=e.x<e.next.x?e:e.next,f===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,l=s.x,c=s.y,h=1/0,u;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&Js(o<c?r:i,o,l,c,o<c?i:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),ro(e,n)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&B2(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function B2(n,t){return $e(n.prev,n,t.prev)<0&&$e(t.next,n,n.next)<0}function z2(n,t,e,i){let s=n;do s.z===0&&(s.z=t0(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,H2(s)}function H2(n){let t,e,i,s,r,o,a,l,c=1;do{for(e=n,n=null,r=null,o=0;e;){for(o++,i=e,a=0,t=0;t<c&&(a++,i=i.nextZ,!!i);t++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||e.z<=i.z)?(s=e,e=e.nextZ,a--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;e=i}r.nextZ=null,c*=2}while(o>1);return n}function t0(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function V2(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function Js(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function G2(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!W2(n,t)&&(ro(n,t)&&ro(t,n)&&X2(n,t)&&($e(n.prev,n,t.prev)||$e(n,t.prev,t))||$a(n,t)&&$e(n.prev,n,n.next)>0&&$e(t.prev,t,t.next)>0)}function $e(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function $a(n,t){return n.x===t.x&&n.y===t.y}function Gu(n,t,e,i){let s=ca($e(n,t,e)),r=ca($e(n,t,i)),o=ca($e(e,i,n)),a=ca($e(e,i,t));return!!(s!==r&&o!==a||s===0&&la(n,e,t)||r===0&&la(n,i,t)||o===0&&la(e,n,i)||a===0&&la(e,t,i))}function la(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function ca(n){return n>0?1:n<0?-1:0}function W2(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&Gu(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function ro(n,t){return $e(n.prev,n,n.next)<0?$e(n,t,n.next)>=0&&$e(n,n.prev,t)>=0:$e(n,t,n.prev)<0||$e(n,n.next,t)<0}function X2(n,t){let e=n,i=!1,s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function Wu(n,t){let e=new e0(n.i,n.x,n.y),i=new e0(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function fu(n,t,e,i){let s=new e0(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function oo(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function e0(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Y2(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var Zr=class n{static area(t){let e=t.length,i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return n.area(t)<0}static triangulateShape(t,e){let i=[],s=[],r=[];du(t),pu(i,t);let o=t.length;e.forEach(du);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,pu(i,e[l]);let a=I2.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function du(n){let t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function pu(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}var ka=class n extends Pe{constructor(t=new br([new yt(.5,.5),new yt(-.5,.5),new yt(-.5,-.5),new yt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let i=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new oe(s,3)),this.setAttribute("uv",new oe(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:q2,y,_=!1,D,C,P,N;p&&(y=p.getSpacedPoints(h),_=!0,f=!1,D=p.computeFrenetFrames(h,!1),C=new I,P=new I,N=new I),f||(m=0,d=0,g=0,x=0);let A=a.extractPoints(c),S=A.shape,U=A.holes;if(!Zr.isClockWise(S)){S=S.reverse();for(let F=0,it=U.length;F<it;F++){let E=U[F];Zr.isClockWise(E)&&(U[F]=E.reverse())}}let H=Zr.triangulateShape(S,U),W=S;for(let F=0,it=U.length;F<it;F++){let E=U[F];S=S.concat(E)}function lt(F,it,E){return it||console.error("THREE.ExtrudeGeometry: vec does not exist"),F.clone().addScaledVector(it,E)}let K=S.length,gt=H.length;function Z(F,it,E){let dt,V,ut,at=F.x-it.x,Tt=F.y-it.y,ft=E.x-F.x,R=E.y-F.y,b=at*at+Tt*Tt,z=at*R-Tt*ft;if(Math.abs(z)>Number.EPSILON){let j=Math.sqrt(b),ht=Math.sqrt(ft*ft+R*R),rt=it.x-Tt/j,zt=it.y+at/j,bt=E.x-R/ht,Ct=E.y+ft/ht,he=((bt-rt)*R-(Ct-zt)*ft)/(at*R-Tt*ft);dt=rt+at*he-F.x,V=zt+Tt*he-F.y;let pt=dt*dt+V*V;if(pt<=2)return new yt(dt,V);ut=Math.sqrt(pt/2)}else{let j=!1;at>Number.EPSILON?ft>Number.EPSILON&&(j=!0):at<-Number.EPSILON?ft<-Number.EPSILON&&(j=!0):Math.sign(Tt)===Math.sign(R)&&(j=!0),j?(dt=-Tt,V=at,ut=Math.sqrt(b)):(dt=at,V=Tt,ut=Math.sqrt(b/2))}return new yt(dt/ut,V/ut)}let wt=[];for(let F=0,it=W.length,E=it-1,dt=F+1;F<it;F++,E++,dt++)E===it&&(E=0),dt===it&&(dt=0),wt[F]=Z(W[F],W[E],W[dt]);let At=[],Nt,te=wt.concat();for(let F=0,it=U.length;F<it;F++){let E=U[F];Nt=[];for(let dt=0,V=E.length,ut=V-1,at=dt+1;dt<V;dt++,ut++,at++)ut===V&&(ut=0),at===V&&(at=0),Nt[dt]=Z(E[dt],E[ut],E[at]);At.push(Nt),te=te.concat(Nt)}for(let F=0;F<m;F++){let it=F/m,E=d*Math.cos(it*Math.PI/2),dt=g*Math.sin(it*Math.PI/2)+x;for(let V=0,ut=W.length;V<ut;V++){let at=lt(W[V],wt[V],dt);Mt(at.x,at.y,-E)}for(let V=0,ut=U.length;V<ut;V++){let at=U[V];Nt=At[V];for(let Tt=0,ft=at.length;Tt<ft;Tt++){let R=lt(at[Tt],Nt[Tt],dt);Mt(R.x,R.y,-E)}}}let ge=g+x;for(let F=0;F<K;F++){let it=f?lt(S[F],te[F],ge):S[F];_?(P.copy(D.normals[0]).multiplyScalar(it.x),C.copy(D.binormals[0]).multiplyScalar(it.y),N.copy(y[0]).add(P).add(C),Mt(N.x,N.y,N.z)):Mt(it.x,it.y,0)}for(let F=1;F<=h;F++)for(let it=0;it<K;it++){let E=f?lt(S[it],te[it],ge):S[it];_?(P.copy(D.normals[F]).multiplyScalar(E.x),C.copy(D.binormals[F]).multiplyScalar(E.y),N.copy(y[F]).add(P).add(C),Mt(N.x,N.y,N.z)):Mt(E.x,E.y,u/h*F)}for(let F=m-1;F>=0;F--){let it=F/m,E=d*Math.cos(it*Math.PI/2),dt=g*Math.sin(it*Math.PI/2)+x;for(let V=0,ut=W.length;V<ut;V++){let at=lt(W[V],wt[V],dt);Mt(at.x,at.y,u+E)}for(let V=0,ut=U.length;V<ut;V++){let at=U[V];Nt=At[V];for(let Tt=0,ft=at.length;Tt<ft;Tt++){let R=lt(at[Tt],Nt[Tt],dt);_?Mt(R.x,R.y+y[h-1].y,y[h-1].x+E):Mt(R.x,R.y,u+E)}}}nt(),vt();function nt(){let F=s.length/3;if(f){let it=0,E=K*it;for(let dt=0;dt<gt;dt++){let V=H[dt];Wt(V[2]+E,V[1]+E,V[0]+E)}it=h+m*2,E=K*it;for(let dt=0;dt<gt;dt++){let V=H[dt];Wt(V[0]+E,V[1]+E,V[2]+E)}}else{for(let it=0;it<gt;it++){let E=H[it];Wt(E[2],E[1],E[0])}for(let it=0;it<gt;it++){let E=H[it];Wt(E[0]+K*h,E[1]+K*h,E[2]+K*h)}}i.addGroup(F,s.length/3-F,0)}function vt(){let F=s.length/3,it=0;Bt(W,it),it+=W.length;for(let E=0,dt=U.length;E<dt;E++){let V=U[E];Bt(V,it),it+=V.length}i.addGroup(F,s.length/3-F,1)}function Bt(F,it){let E=F.length;for(;--E>=0;){let dt=E,V=E-1;V<0&&(V=F.length-1);for(let ut=0,at=h+m*2;ut<at;ut++){let Tt=K*ut,ft=K*(ut+1),R=it+dt+Tt,b=it+V+Tt,z=it+V+ft,j=it+dt+ft;ee(R,b,z,j)}}}function Mt(F,it,E){l.push(F),l.push(it),l.push(E)}function Wt(F,it,E){Kt(F),Kt(it),Kt(E);let dt=s.length/3,V=M.generateTopUV(i,s,dt-3,dt-2,dt-1);_e(V[0]),_e(V[1]),_e(V[2])}function ee(F,it,E,dt){Kt(F),Kt(it),Kt(dt),Kt(it),Kt(E),Kt(dt);let V=s.length/3,ut=M.generateSideWallUV(i,s,V-6,V-3,V-2,V-1);_e(ut[0]),_e(ut[1]),_e(ut[3]),_e(ut[1]),_e(ut[2]),_e(ut[3])}function Kt(F){s.push(l[F*3+0]),s.push(l[F*3+1]),s.push(l[F*3+2])}function _e(F){r.push(F.x),r.push(F.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return $2(e,i,t)}static fromJSON(t,e){let i=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];i.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Ua[s.type]().fromJSON(s)),new n(i,t.options)}},q2={generateTopUV:function(n,t,e,i,s){let r=t[e*3],o=t[e*3+1],a=t[i*3],l=t[i*3+1],c=t[s*3],h=t[s*3+1];return[new yt(r,o),new yt(a,l),new yt(c,h)]},generateSideWallUV:function(n,t,e,i,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[i*3],h=t[i*3+1],u=t[i*3+2],f=t[s*3],d=t[s*3+1],g=t[s*3+2],x=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new yt(o,1-l),new yt(c,1-u),new yt(f,1-g),new yt(x,1-p)]:[new yt(a,1-l),new yt(h,1-u),new yt(d,1-g),new yt(m,1-p)]}};function $2(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Ba=class n extends Pe{constructor(t=.5,e=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],c=[],h=[],u=t,f=(e-t)/s,d=new I,g=new yt;for(let x=0;x<=s;x++){for(let m=0;m<=i;m++){let p=r+m/i*o;d.x=u*Math.cos(p),d.y=u*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,h.push(g.x,g.y)}u+=f}for(let x=0;x<s;x++){let m=x*(i+1);for(let p=0;p<i;p++){let M=p+m,y=M,_=M+i+1,D=M+i+2,C=M+1;a.push(y,_,C),a.push(_,D,C)}}this.setIndex(a),this.setAttribute("position",new oe(l,3)),this.setAttribute("normal",new oe(c,3)),this.setAttribute("uv",new oe(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var $i=class n extends Pe{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new I,f=new I,d=[],g=[],x=[],m=[];for(let p=0;p<=i;p++){let M=[],y=p/i,_=0;p===0&&o===0?_=.5/e:p===i&&l===Math.PI&&(_=-.5/e);for(let D=0;D<=e;D++){let C=D/e;u.x=-t*Math.cos(s+C*r)*Math.sin(o+y*a),u.y=t*Math.cos(o+y*a),u.z=t*Math.sin(s+C*r)*Math.sin(o+y*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),m.push(C+_,1-y),M.push(c++)}h.push(M)}for(let p=0;p<i;p++)for(let M=0;M<e;M++){let y=h[p][M+1],_=h[p][M],D=h[p+1][M],C=h[p+1][M+1];(p!==0||o>0)&&d.push(y,_,C),(p!==i-1||l<Math.PI)&&d.push(_,D,C)}this.setIndex(d),this.setAttribute("position",new oe(g,3)),this.setAttribute("normal",new oe(x,3)),this.setAttribute("uv",new oe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var za=class n extends Pe{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new I,u=new I,f=new I;for(let d=0;d<=i;d++)for(let g=0;g<=s;g++){let x=g/s*r,m=d/i*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(x),u.y=(t+e*Math.cos(m))*Math.sin(x),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/s),c.push(d/i)}for(let d=1;d<=i;d++)for(let g=1;g<=s;g++){let x=(s+1)*d+g-1,m=(s+1)*(d-1)+g-1,p=(s+1)*(d-1)+g,M=(s+1)*d+g;o.push(x,m,M),o.push(m,p,M)}this.setIndex(o),this.setAttribute("position",new oe(a,3)),this.setAttribute("normal",new oe(l,3)),this.setAttribute("uv",new oe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var ao=class n extends Pe{constructor(t=new Da(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),e=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new I,l=new I,c=new yt,h=new I,u=[],f=[],d=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new oe(u,3)),this.setAttribute("normal",new oe(f,3)),this.setAttribute("uv",new oe(d,2));function x(){for(let y=0;y<e;y++)m(y);m(r===!1?e:0),M(),p()}function m(y){h=t.getPointAt(y/e,h);let _=o.normals[y],D=o.binormals[y];for(let C=0;C<=s;C++){let P=C/s*Math.PI*2,N=Math.sin(P),A=-Math.cos(P);l.x=A*_.x+N*D.x,l.y=A*_.y+N*D.y,l.z=A*_.z+N*D.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=h.x+i*l.x,a.y=h.y+i*l.y,a.z=h.z+i*l.z,u.push(a.x,a.y,a.z)}}function p(){for(let y=1;y<=e;y++)for(let _=1;_<=s;_++){let D=(s+1)*(y-1)+(_-1),C=(s+1)*y+(_-1),P=(s+1)*y+_,N=(s+1)*(y-1)+_;g.push(D,C,N),g.push(C,P,N)}}function M(){for(let y=0;y<=e;y++)for(let _=0;_<=s;_++)c.x=y/e,c.y=_/s,d.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new n(new Ua[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var We=class extends Mi{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Yt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pu,this.normalScale=new yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function ha(n,t,e){return!n||!e&&n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function Z2(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Mr=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break n}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},n0=class extends Mr{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:rh,endingEnd:rh}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case oh:r=t,a=2*e-i;break;case ah:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case oh:o=t,l=2*i-e;break;case ah:o=1,l=i+s[1]-s[0];break;default:o=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(i-e)/(s-e),x=g*g,m=x*g,p=-f*m+2*f*x-f*g,M=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*g+1,y=(-1-d)*m+(1.5+d)*x+.5*g,_=d*m-d*x;for(let D=0;D!==a;++D)r[D]=p*o[h+D]+M*o[c+D]+y*o[l+D]+_*o[u+D];return r}},i0=class extends Mr{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(i-e)/(s-e),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}},s0=class extends Mr{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},ci=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ha(e,this.TimeBufferType),this.values=ha(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:ha(t.times,Array),values:ha(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new s0(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new i0(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new n0(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case ga:e=this.InterpolantFactoryMethodDiscrete;break;case Ac:e=this.InterpolantFactoryMethodLinear;break;case ll:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ga;case this.InterpolantFactoryMethodLinear:return Ac;case this.InterpolantFactoryMethodSmooth:return ll}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&Z2(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===ll,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let u=a*i,f=u-i,d=u+i;for(let g=0;g!==i;++g){let x=e[u+g];if(x!==e[f+g]||x!==e[d+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*i,f=o*i;for(let d=0;d!==i;++d)e[f+d]=e[u+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};ci.prototype.TimeBufferType=Float32Array;ci.prototype.ValueBufferType=Float32Array;ci.prototype.DefaultInterpolation=Ac;var Ts=class extends ci{constructor(t,e,i){super(t,e,i)}};Ts.prototype.ValueTypeName="bool";Ts.prototype.ValueBufferType=Array;Ts.prototype.DefaultInterpolation=ga;Ts.prototype.InterpolantFactoryMethodLinear=void 0;Ts.prototype.InterpolantFactoryMethodSmooth=void 0;var r0=class extends ci{};r0.prototype.ValueTypeName="color";var o0=class extends ci{};o0.prototype.ValueTypeName="number";var a0=class extends Mr{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)Bn.slerpFlat(r,0,o,c-a,o,c,l);return r}},Ha=class extends ci{InterpolantFactoryMethodLinear(t){return new a0(this.times,this.values,this.getValueSize(),t)}};Ha.prototype.ValueTypeName="quaternion";Ha.prototype.InterpolantFactoryMethodSmooth=void 0;var ws=class extends ci{constructor(t,e,i){super(t,e,i)}};ws.prototype.ValueTypeName="string";ws.prototype.ValueBufferType=Array;ws.prototype.DefaultInterpolation=ga;ws.prototype.InterpolantFactoryMethodLinear=void 0;ws.prototype.InterpolantFactoryMethodSmooth=void 0;var l0=class extends ci{};l0.prototype.ValueTypeName="vector";var c0=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],g=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null}}},K2=new c0,h0=class{constructor(t){this.manager=t!==void 0?t:K2,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};h0.DEFAULT_MATERIAL_NAME="__DEFAULT";var lo=class extends Ze{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Yt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Sr=class extends lo{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ze.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Yt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Hl=new de,mu=new I,gu=new I,Va=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new yt(512,512),this.map=null,this.mapPass=null,this.matrix=new de,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new jr,this._frameExtents=new yt(1,1),this._viewportCount=1,this._viewports=[new Re(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;mu.setFromMatrixPosition(t.matrixWorld),e.position.copy(mu),gu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(gu),e.updateMatrixWorld(),Hl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Hl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},u0=class extends Va{constructor(){super(new pn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,i=lr*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(i!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=i,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},co=class extends lo{constructor(t,e,i=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ze.DEFAULT_UP),this.updateMatrix(),this.target=new Ze,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new u0}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},xu=new de,Vr=new I,Vl=new I,f0=class extends Va{constructor(){super(new pn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new yt(4,2),this._viewportCount=6,this._viewports=[new Re(2,1,1,1),new Re(0,1,1,1),new Re(3,1,1,1),new Re(1,1,1,1),new Re(3,0,1,1),new Re(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(t,e=0){let i=this.camera,s=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Vr.setFromMatrixPosition(t.matrixWorld),i.position.copy(Vr),Vl.copy(i.position),Vl.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(Vl),i.updateMatrixWorld(),s.makeTranslation(-Vr.x,-Vr.y,-Vr.z),xu.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xu)}},ho=class extends lo{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new f0}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}};var R0="\\[\\]\\.:\\/",J2=new RegExp("["+R0+"]","g"),C0="[^"+R0+"]",j2="[^"+R0.replace("\\.","")+"]",Q2=/((?:WC+[\/:])*)/.source.replace("WC",C0),tx=/(WCOD+)?/.source.replace("WCOD",j2),ex=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",C0),nx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",C0),ix=new RegExp("^"+Q2+tx+ex+nx+"$"),sx=["material","materials","bones","map"],d0=class{constructor(t,e,i){let s=i||Ye.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Ye=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(J2,"")}static parseTrackName(t){let e=ix.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);sx.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ye.Composite=d0;Ye.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ye.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ye.prototype.GetterByBindingType=[Ye.prototype._getValue_direct,Ye.prototype._getValue_array,Ye.prototype._getValue_arrayElement,Ye.prototype._getValue_toArray];Ye.prototype.SetterByBindingTypeAndVersioning=[[Ye.prototype._setValue_direct,Ye.prototype._setValue_direct_setNeedsUpdate,Ye.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ye.prototype._setValue_array,Ye.prototype._setValue_array_setNeedsUpdate,Ye.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ye.prototype._setValue_arrayElement,Ye.prototype._setValue_arrayElement_setNeedsUpdate,Ye.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ye.prototype._setValue_fromArray,Ye.prototype._setValue_fromArray_setNeedsUpdate,Ye.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var p_=new Float32Array(1);var _u=new de,Ga=class{constructor(t,e,i=0,s=1/0){this.ray=new cr(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new Jr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return _u.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(_u),this}intersectObject(t,e=!0,i=[]){return p0(t,this,i,e),i.sort(yu),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)p0(t[s],this,i,e);return i.sort(yu),i}};function yu(n,t){return n.distance-t.distance}function p0(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let o=0,a=r.length;o<a;o++)p0(r[o],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:m0}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=m0);function fo(n){return function(){n|=0,n=n+1831565813|0;let e=Math.imul(n^n>>>15,1|n);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Kn(n){let t=2166136261;for(let e=0;e<n.length;e++)t^=n.charCodeAt(e),t=Math.imul(t,16777619);return t>>>0}function Xu(n,t,e,i=.3,s={}){let r=po(n,s);for(let o=0;o<2;o++)for(let a of r){let l=a.w/2+i,c=a.d/2+i,h=t-a.x,u=e-a.z;if(Math.abs(h)<l&&Math.abs(u)<c){let f=l-Math.abs(h),d=c-Math.abs(u);f<d?t+=Math.sign(h||1)*f:e+=Math.sign(u||1)*d}}return{x:t,z:e}}function po(n,t={}){let e=n.walls.slice();for(let i of n.fixtures)i.solid&&e.push(i),i.type==="gate"&&!t.counter&&e.push(i);return e}function Yu(n,t,e,i,s=2.2){for(let c of n.spots){let h=c.area;if(h&&t>=h.x1&&t<=h.x2&&e>=h.z1&&e<=h.z2)return{...c,type:"search",dist:0}}let r=null,o=-Math.sin(i),a=-Math.cos(i),l=n.spots.filter(c=>!c.area).map(c=>({...c,type:"search"}));l.push({type:"exit",x:n.exit.x,z:n.exit.z,label:"Leave the building"});for(let c of l){let h=c.x-t,u=c.z-e,f=Math.hypot(h,u);if(f>s)continue;let d=f<.6?1:(h*o+u*a)/f;if(d<.35)continue;let g=f-d;(!r||g<r.score)&&(r={...c,dist:f,score:g})}return r}var gn=n=>{let t=Math.abs(Math.floor(n))%2147483646+1;return()=>(t=t*16807%2147483647)/2147483647},mo=(n,t)=>{let e=Math.sin(n*127.1+t*311.7)*43758.5453;return e-Math.floor(e)},hn=n=>n<0?0:n>1?1:n,qu=n=>n*n*(3-2*n),Gn=(n,t=n)=>{let e=document.createElement("canvas");return e.width=n,e.height=t,e};function Si(n,t,e,i,s){let r=new Float32Array(e*i);for(let a=0;a<r.length;a++)r[a]=s();let o=new Float32Array(n*t);for(let a=0;a<t;a++){let l=a/t*i,c=Math.floor(l),h=qu(l-c),u=c%i*e,f=(c+1)%i*e;for(let d=0;d<n;d++){let g=d/n*e,x=Math.floor(g),m=qu(g-x),p=x%e,M=(x+1)%e,y=r[u+p]+(r[u+M]-r[u+p])*m,_=r[f+p]+(r[f+M]-r[f+p])*m;o[a*n+d]=y+(_-y)*h}}return o}function vn(n,t,e,i,s,r,o=.5){let a=new Float32Array(n*t),l=1,c=0;for(let h=0;h<s;h++){let u=Si(n,t,e<<h,i<<h,r);for(let f=0;f<a.length;f++)a[f]+=u[f]*l;c+=l,l*=o}for(let h=0;h<a.length;h++)a[h]/=c;return a}function Ei(n,t){let e=Gn(n,t),i=Gn(n,t),s=Gn(n,t);return{w:n,h:t,col:e,hgt:i,rough:s,c:e.getContext("2d"),hc:i.getContext("2d"),rc:s.getContext("2d")}}function Ti(n,t){let{w:e,h:i}=n,s=n.c.createImageData(e,i),r=n.hc.createImageData(e,i),o=n.rc.createImageData(e,i),a=[0,0,0,0,0];for(let l=0;l<i;l++)for(let c=0;c<e;c++){let h=l*e+c;t(h,c,l,a);let u=h*4;s.data[u]=a[0],s.data[u+1]=a[1],s.data[u+2]=a[2],s.data[u+3]=255;let f=hn(a[3])*255;r.data[u]=r.data[u+1]=r.data[u+2]=f,r.data[u+3]=255;let d=hn(a[4])*255;o.data[u]=o.data[u+1]=o.data[u+2]=d,o.data[u+3]=255}n.c.putImageData(s,0,0),n.hc.putImageData(r,0,0),n.rc.putImageData(o,0,0)}function N0(n,t,e,i,s,r){for(let o of[-n,0,n])for(let a of[-t,0,t])e+o+s<0||e+o-s>n||i+a+s<0||i+a-s>t||r(e+o,i+a)}function ox(n,t){let{w:e,h:i}=n,s=n.hc.getImageData(0,0,e,i).data,r=Gn(e,i),o=r.getContext("2d"),a=o.createImageData(e,i),l=(c,h)=>s[((h+i)%i*e+(c+e)%e)*4]/255;for(let c=0;c<i;c++)for(let h=0;h<e;h++){let u=(l(h+1,c)-l(h-1,c))*t,f=(l(h,c+1)-l(h,c-1))*t,d=-u,g=f,x=1,m=Math.hypot(d,g,x);d/=m,g/=m,x/=m;let p=(c*e+h)*4;a.data[p]=(d*.5+.5)*255,a.data[p+1]=(g*.5+.5)*255,a.data[p+2]=(x*.5+.5)*255,a.data[p+3]=255}return o.putImageData(a,0,0),r}function I0(n,t,e=!0){let i=new An(n);return i.wrapS=i.wrapT=e?Gi:ki,i.colorSpace=t?ze:$n,i.minFilter=Bi,i.anisotropy=4,i}function wi(n,{tile:t,normal:e=2,roughness:i=1,metalness:s=0,envColor:r}){let o=I0(n.col,!0),a=I0(n.rough,!1),l=I0(ox(n,e),!1);for(let h of[o,a,l])h.repeat.set(1/t[0],1/t[1]);let c=new We({map:o,roughnessMap:a,normalMap:l,roughness:i,metalness:s});return c.normalScale=new yt(1,1),r&&(c.color=new Yt(r)),c.userData.tile=t,c}function Ln(n){return[n>>16&255,n>>8&255,n&255]}function U0(n,t,e,i){i[0]=n[0]+(t[0]-n[0])*e,i[1]=n[1]+(t[1]-n[1])*e,i[2]=n[2]+(t[2]-n[2])*e}function O0(n,t,e,i=.35){let{c:s,w:r,h:o}=n;for(let a=0;a<t;a++){let l=e()*r,c=e()*o,h=(.02+e()*.08)*r,u=e()*6.3;N0(r,o,l,c,h,(f,d)=>{s.strokeStyle=`rgba(20,18,16,${i*(.3+e()*.7)})`,s.lineWidth=.6+e()*2.2*(r/512),s.beginPath(),s.arc(f,d,h,u,u+.3+e()*.9),s.stroke()})}}var P0={};function ax(n,t){let e=`${n}-${t}`;if(P0[e])return P0[e];let i=gn(900+t*17),s=vn(n,n,3,3,5,i,.6),r=Gn(n),o=r.getContext("2d"),a=o.createImageData(n,n);for(let l=0;l<n;l++)for(let c=0;c<n;c++){let h=l*n+c,u=Math.hypot(c-n/2,l-n/2)/(n/2),f=s[h]*1.35+.3-u*.6,d=hn((f-.5)*14),g=Math.exp(-(((f-.53)*26)**2)),x=(d*.3+g*.28)*hn((1-u)*3),m=h*4;a.data[m]=a.data[m+1]=a.data[m+2]=255,a.data[m+3]=hn(x)*255}return o.putImageData(a,0,0),P0[e]=r,r}function Rs(n,t,e,i="90,62,30",s=.18,r=1){let{c:o,rc:a,w:l,h:c}=n,h=ax(128,Math.floor(e()*3)),u=Gn(128),f=u.getContext("2d");f.drawImage(h,0,0),f.globalCompositeOperation="source-in",f.fillStyle=`rgb(${i})`,f.fillRect(0,0,128,128);for(let d=0;d<t;d++){let g=e()*l,x=e()*c,m=(.04+e()*s)*Math.min(l,c),p=e()*6.3,M=.6+e()*.5;N0(l,c,g,x,m,(y,_)=>{for(let D of[o,a])D.save(),D.translate(y,_),D.rotate(p),D.scale(1,M),D.globalAlpha=D===o?.8*r:.25,D.drawImage(D===o?u:h,-m,-m,m*2,m*2),D.restore()})}}function wr(n,t,e,i=4){return vn(n,t,i,i,5,e,.55)}function lx(n,t){let e=gn(t),i=Ei(n,n),s=vn(n,n,8,8,4,e),r=wr(n,n,e,3),o=Si(n,n,n/2,n/2,e),a=[];for(let d=0;d<16;d++)a.push(e());let l=n/4,c=Ln(12894388),h=Ln(11775647),u=Ln(4865841),f=[0,0,0];return Ti(i,(d,g,x,m)=>{let p=Math.floor(g/l),M=Math.floor(x/l),y=g%l/l,_=x%l/l,D=Math.min(y,_,1-y,1-_),C=a[M*4+p];U0(c,h,C*.8,f);let P=o[d],N=P>.82?-26:P<.12?14:0,A=(s[d]-.5)*26+N,S=hn((r[d]-.45)*2.2)*.45+hn(1-D*30)*.3*(.5+r[d]);m[0]=f[0]+A,m[1]=f[1]+A,m[2]=f[2]+A;let U=Math.min(.75,S);m[0]+=(u[0]-m[0])*U,m[1]+=(u[1]-m[1])*U,m[2]+=(u[2]-m[2])*U;let q=D<.006;q&&(m[0]*=.72,m[1]*=.72,m[2]*=.72),m[3]=q?.45:.62+s[d]*.06-S*.05,m[4]=.42+S*.45+(q?.4:0)+(s[d]-.5)*.1}),O0(i,45,e,.3),wi(i,{tile:[1.2,1.2],normal:2})}function cx(n,t){let e=gn(t),i=Ei(n,n),s=vn(n,n,6,6,5,e,.6),r=Si(n,n,n/3,n/3,e),o=wr(n,n,e,3),a=Ln(9674906),l=Ln(6253414),c=[0,0,0];return Ti(i,(h,u,f,d)=>{U0(a,l,hn((s[h]-.35)*1.6),c);let g=r[h]>.86?22:r[h]<.1?-18:0,x=hn((o[h]-.45)*2.2);d[0]=c[0]+g-x*40,d[1]=c[1]+g-x*38,d[2]=c[2]+g-x*42;let m=Math.abs(u-n/2)<1;m&&(d[0]*=.55,d[1]*=.55,d[2]*=.55),d[3]=m?.3:.6+s[h]*.04,d[4]=.28+x*.5+s[h]*.15}),O0(i,60,e,.32),Rs(i,2,e,"80,70,40",.1),wi(i,{tile:[2,2],normal:1.5})}function hx(n,t){let e=gn(t),i=Ei(n,n),s=vn(n,n,2,48,4,e,.5),r=Si(n,n,6,160,e),o=wr(n,n,e,3),a=8,l=n/a,c=[];for(let g=0;g<a;g++){let x=e();c.push([x,(x+.35+e()*.3)%1])}let h=[];for(let g=0;g<a*3;g++)h.push(e());let u=Ln(9399888),f=Ln(5192232),d=[0,0,0];return Ti(i,(g,x,m,p)=>{let M=Math.floor(x/l),y=x%l/l,_=m/n,[D,C]=c[M],P=_>Math.min(D,C)&&_<Math.max(D,C)?1:0,N=h[M*3+P];U0(u,f,.25+N*.5,d);let A=(s[g]-.5)*50+(r[g]-.5)*22,S=hn((o[g]-.5)*2);p[0]=d[0]+A-S*18,p[1]=d[1]+A*.8-S*18,p[2]=d[2]+A*.6-S*14;let U=y<.025||y>.975||Math.abs(_-D)<.003||Math.abs(_-C)<.003;U&&(p[0]*=.5,p[1]*=.5,p[2]*=.5),p[3]=U?.25:.6+(r[g]-.5)*.12,p[4]=.5+S*.35+(s[g]-.5)*.15+(U?.4:0)}),O0(i,25,e,.25),Rs(i,2,e,"40,25,12",.1),wi(i,{tile:[1.6,1.6],normal:2.5})}function ux(n,t){let e=gn(t),i=Ei(n,n),s=Si(n,n,n/2,n/2,e),r=vn(n,n,16,16,3,e),o=wr(n,n,e,3),a=Ln(6117970);return Ti(i,(l,c,h,u)=>{let f=(s[l]-.5)*30+(r[l]-.5)*24,d=hn((o[l]-.45)*2);u[0]=a[0]+f-d*30,u[1]=a[1]+f-d*30,u[2]=a[2]+f-d*26,u[3]=.5+s[l]*.4,u[4]=.95}),Rs(i,4,e,"60,40,22",.14),wi(i,{tile:[1,1],normal:1.2})}function fx(n,t){let e=gn(t),i=Ei(n,n),s=vn(n,n,4,4,6,e,.55),r=Si(n,n,n/2,n/2,e),o=Ln(9144964);Ti(i,(u,f,d,g)=>{let x=(s[u]-.5)*60,m=r[u]>.9?-30:0;g[0]=o[0]+x+m,g[1]=o[1]+x+m,g[2]=o[2]+x*.95+m;let p=Math.abs(f%(n/2)-0)<1.2||Math.abs(d%(n/2)-0)<1.2;p&&(g[0]*=.4,g[1]*=.4,g[2]*=.4),g[3]=p?.1:.55+s[u]*.15+(m?-.2:0),g[4]=.82+(s[u]-.5)*.2});let{c:a,hc:l,w:c,h}=i;for(let u=0;u<4;u++){let f=e()*c,d=e()*h,g=e()*6.3;a.strokeStyle="rgba(25,24,22,0.7)",l.strokeStyle="rgba(0,0,0,0.8)",a.lineWidth=l.lineWidth=1.2*(c/512),a.beginPath(),l.beginPath(),a.moveTo(f,d),l.moveTo(f,d);for(let x=0;x<40;x++)g+=(e()-.5)*.9,f+=Math.cos(g)*6*(c/512),d+=Math.sin(g)*6*(c/512),a.lineTo(f,d),l.lineTo(f,d);a.stroke(),l.stroke()}for(let u=0;u<4;u++){let f=e()*c,d=e()*h,g=(.03+e()*.08)*c;N0(c,h,f,d,g,(x,m)=>{let p=a.createRadialGradient(x,m,0,x,m,g);p.addColorStop(0,"rgba(15,13,10,0.55)"),p.addColorStop(1,"rgba(15,13,10,0)"),a.fillStyle=p,a.beginPath(),a.arc(x,m,g,0,6.3),a.fill();let M=i.rc.createRadialGradient(x,m,0,x,m,g);M.addColorStop(0,"rgba(0,0,0,0.6)"),M.addColorStop(1,"rgba(0,0,0,0)"),i.rc.fillStyle=M,i.rc.beginPath(),i.rc.arc(x,m,g,0,6.3),i.rc.fill()})}return wi(i,{tile:[3,3],normal:2})}function $u(n,t,e,i){let s=gn(t),r=n,o=n*3,a=Ei(r,o),l=Si(r,o,r/3,o/3,s),c=vn(r,o,3,9,5,s,.55),h=Ln(e),u=Ln(i),f=Math.round(o*(.11/6)),d=Math.round(o*(.9/6));Ti(a,(m,p,M,y)=>{let _=o-1-M;if(_<f){let N=_>f-3?18:0;y[0]=u[0]+N+(c[m]-.5)*12,y[1]=u[1]+N+(c[m]-.5)*12,y[2]=u[2]+N+(c[m]-.5)*12,y[3]=.85,y[4]=.55;return}let D=(c[m]-.5)*22,C=hn(1-(_-f)/d),P=C*C*(.4+c[m]*.6);y[0]=h[0]+D-P*60,y[1]=h[1]+D-P*62,y[2]=h[2]+D-P*66,y[3]=.5+l[m]*.06,y[4]=.78+P*.15});let{c:g,rc:x}=a;for(let m=0;m<2;m++){let p=s()*r,M=o*(.35+s()*.25),y=r*(.1+s()*.12);for(let _=0;_<5;_++){let D=p+(s()-.5)*y,C=o*(.04+s()*.2),P=g.createLinearGradient(D,M,D,M+C);P.addColorStop(0,"rgba(100,72,38,0.22)"),P.addColorStop(1,"rgba(100,72,38,0)"),g.fillStyle=P,g.fillRect(D,M,1+s()*2.5,C)}}Rs(a,3,s,"105,78,40",.16,.7);for(let m=0;m<14;m++){let p=s()*r,M=o-f-s()*o*.12;g.fillStyle=`rgba(30,28,26,${.06+s()*.14})`,g.save(),g.translate(p,M),g.rotate((s()-.5)*.5),g.fillRect(0,0,2+s()*r*.05,.8+s()*1.5),g.restore()}for(let m=0;m<5;m++){let p=s()*r,M=o*(.6+s()*.35),y=1+s()*3*(r/512);g.fillStyle="rgba(160,150,135,0.7)",g.beginPath(),g.arc(p,M,y,0,6.3),g.fill(),a.hc.fillStyle="rgba(0,0,0,0.6)",a.hc.beginPath(),a.hc.arc(p,M,y,0,6.3),a.hc.fill()}return x.globalAlpha=1,wi(a,{tile:[2,6],normal:1.6})}function dx(n,t){let e=gn(t),i=Ei(n,n),s=vn(n,n,6,6,4,e),r=wr(n,n,e,2),o=n/4,a=Ln(14211795),l=[];for(let d=0;d<16;d++)l.push(e());Ti(i,(d,g,x,m)=>{let p=g%o/o,M=x%o/o,y=Math.min(p,M,1-p,1-M),_=y<.035,D=l[Math.floor(x/o)*4+Math.floor(g/o)],C=hn((r[d]-.45)*2);if(_){let A=120-C*60+(s[d]-.5)*30;m[0]=A,m[1]=A*.95,m[2]=A*.85,m[3]=.2,m[4]=.9;return}let P=(s[d]-.5)*10-D*10-C*35;m[0]=a[0]+P,m[1]=a[1]+P,m[2]=a[2]+P-C*8;let N=hn(y*12);m[3]=.35+N*.4,m[4]=.12+C*.4});let{c,hc:h}=i,u=Math.floor(e()*4)*o,f=Math.floor(e()*4)*o;c.strokeStyle="rgba(40,40,36,0.8)",h.strokeStyle="rgba(0,0,0,1)",c.lineWidth=h.lineWidth=1;for(let d of[c,h])d.beginPath(),d.moveTo(u+o*.1,f+o*.2),d.lineTo(u+o*.45,f+o*.55),d.lineTo(u+o*.6,f+o*.5),d.lineTo(u+o*.92,f+o*.85),d.stroke();return wi(i,{tile:[.6,.6],normal:4})}function px(n,t){let e=gn(t),i=Ei(n,n),s=vn(n,n,24,24,3,e,.6),r=Si(n,n,n/1.5,n/1.5,e),o=vn(n,n,4,4,3,e),a=n/4,l=-1,c=[];for(let h=0;h<16;h++)c.push(e());return Ti(i,(h,u,f,d)=>{let g=Math.floor(f/a)*4+Math.floor(u/a),x=u%a/a,m=f%a/a;if(Math.min(x,m,1-x,1-m)<.018){d[0]=168,d[1]=168,d[2]=162,d[3]=1,d[4]=.55;return}if(g===l){let y=14+s[h]*18;d[0]=y,d[1]=y,d[2]=y,d[3]=0,d[4]=1;return}let M=172-c[g]*16+(s[h]-.5)*28-(r[h]>.88?40:0)-hn((o[h]-.5)*2)*20;d[0]=M,d[1]=M*.985,d[2]=M*.94,d[3]=.6+s[h]*.2-(r[h]>.88?.2:0),d[4]=1}),Rs(i,4,e,"120,85,40",.12,.8),wi(i,{tile:[2.4,2.4],normal:2.5})}function mx(n,t){let e=gn(t),i=Ei(n,n),s=vn(n,n,10,10,4,e,.6),r=Si(n,n,n/2,n/2,e),o=wr(n,n,e,2),a=Ln(11053983),l=n/4,c=n/8;return Ti(i,(h,u,f,d)=>{let g=Math.floor(f/c),m=(u+(g%2?l/2:0))%n%l/l,p=f%c/c,M=m<.02||m>.98||p<.04||p>.96,y=hn((o[h]-.5)*2),_=(s[h]-.5)*22-(r[h]>.85?20:0)-y*30;d[0]=a[0]+_,d[1]=a[1]+_,d[2]=a[2]+_,M&&(d[0]*=.8,d[1]*=.8,d[2]*=.8),d[3]=M?.2:.6+s[h]*.2-(r[h]>.85?.25:0),d[4]=.65+y*.2}),Rs(i,2,e,"90,70,40",.14),wi(i,{tile:[1.6,1.6],normal:3})}function gx(n,t,e=12894390){let i=gn(t),s=Ei(n,n),r=vn(n,n,5,5,5,i,.55),o=Si(n,n,n/3,n/3,i),a=Ln(e);return Ti(s,(l,c,h,u)=>{let f=(r[l]-.5)*20;u[0]=a[0]+f,u[1]=a[1]+f,u[2]=a[2]+f,u[3]=.5+o[l]*.15,u[4]=.92}),Rs(s,2,i,"115,85,45",.1,.35),wi(s,{tile:[3,3],normal:1.2})}var go={};function xx(n="high"){if(go[n])return go[n];let t=n==="low",e=t?256:512,i={storeTile:()=>lx(e,11),linoleum:()=>cx(e,23),woodFloor:()=>hx(e,37),carpet:()=>ux(t?256:384,41),concrete:()=>fx(e,53),drywall:()=>$u(t?192:384,61,11843754,3881527),drywallWarm:()=>$u(t?192:384,67,11773324,13814974),tileWall:()=>dx(e,71),ceilingTile:()=>px(e,83),blockWall:()=>mx(e,89),plaster:()=>gx(t?256:384,97)},s={quality:n,surfaceFor:(o,a,l)=>F0(o,a,l,n)},r={};for(let o of Object.keys(i))Object.defineProperty(s,o,{enumerable:!0,get:()=>r[o]||(r[o]=i[o]())});return s.names=Object.keys(i),s.all=()=>{for(let o of s.names)s[o];return s},go[n]=s,s}var _x={supermarket:"storeTile",convenience:"storeTile",gas:"storeTile",pharmacy:"storeTile",clinic:"linoleum",hospital:"linoleum",hardware:"concrete",outdoor:"woodFloor",fire:"concrete",house:"woodFloor"},yx={supermarket:"drywall",convenience:"drywall",gas:"blockWall",pharmacy:"drywall",clinic:"drywall",hospital:"drywall",hardware:"blockWall",outdoor:"drywallWarm",fire:"blockWall",house:"drywallWarm"},vx={supermarket:"ceilingTile",convenience:"ceilingTile",gas:"ceilingTile",pharmacy:"ceilingTile",clinic:"ceilingTile",hospital:"ceilingTile",hardware:"concrete",outdoor:"plaster",fire:"plaster",house:"plaster"};function F0(n,t,e,i){let s=i||(go.high?"high":go.low?"low":"high"),r=xx(s);return e==="bathroom"&&t==="wall"?r.tileWall:e==="bathroom"&&t==="floor"?r.linoleum:e==="garage"?t==="ceiling"?r.plaster:t==="wall"?r.blockWall:r.concrete:(e==="bedroom"||e==="second bedroom")&&t==="floor"?r.carpet:r[(t==="floor"?_x:t==="wall"?yx:vx)[n]||(t==="floor"?"storeTile":t==="wall"?"drywall":"ceilingTile")]}function xo(n){n.updateMatrixWorld(!0);let t=n.geometry,e=t.attributes.position,i=t.attributes.normal,s=t.attributes.uv;if(!e||!i||!s)return n;let r=new I,o=new I,a=new Bn;n.matrixWorld.decompose(new I,a,new I);for(let l=0;l<e.count;l++){r.fromBufferAttribute(e,l).applyMatrix4(n.matrixWorld),o.fromBufferAttribute(i,l).applyQuaternion(a);let c=Math.abs(o.x),h=Math.abs(o.y),u=Math.abs(o.z);h>=c&&h>=u?s.setXY(l,r.x,-r.z):c>=u?s.setXY(l,o.x>0?-r.z:r.z,r.y):s.setXY(l,o.z>0?r.x:-r.x,r.y)}return s.needsUpdate=!0,n}function k0(){try{let n=new URLSearchParams(location.search).get("q");if(n==="low"||n==="high")return n}catch{}try{let n=typeof matchMedia=="function"&&matchMedia("(pointer: coarse)").matches,t=/Android|iPhone|iPad|iPod|Mobile|Silk/i.test(navigator.userAgent||"");if(n||t||(navigator.deviceMemory||8)<=2)return"low";let e="",s=document.createElement("canvas").getContext("webgl");if(s){let o=s.getExtension("WEBGL_debug_renderer_info");e=o?String(s.getParameter(o.UNMASKED_RENDERER_WEBGL)):"",s.getExtension("WEBGL_lose_context")?.loseContext()}if(/swiftshader|llvmpipe|softpipe|software|mali|adreno|powervr|videocore/i.test(e)||(window.devicePixelRatio||1)<1.3&&/intel/i.test(e)&&!/iris|arc|uhd graphics 7/i.test(e)&&(navigator.hardwareConcurrency||8)<=4)return"low"}catch{}return"high"}var Ke={};function bx(){if(Ke.cookie)return Ke.cookie;let n=256,t=Gn(n),e=t.getContext("2d");e.fillStyle="#000",e.fillRect(0,0,n,n);let i=n/2,s=e.createRadialGradient(i,i,0,i,i,i);s.addColorStop(0,"rgba(255,250,240,1)"),s.addColorStop(.12,"rgba(255,246,228,1)"),s.addColorStop(.22,"rgba(225,214,195,1)"),s.addColorStop(.3,"rgba(160,150,135,1)"),s.addColorStop(.38,"rgba(190,180,160,1)"),s.addColorStop(.46,"rgba(110,104,92,1)"),s.addColorStop(.75,"rgba(70,66,58,1)"),s.addColorStop(.95,"rgba(18,17,15,1)"),s.addColorStop(1,"rgba(0,0,0,1)"),e.fillStyle=s,e.beginPath(),e.arc(i,i,i,0,6.3),e.fill();let r=gn(5);for(let a=0;a<24;a++)e.fillStyle=`rgba(0,0,0,${.015+r()*.025})`,e.beginPath(),e.arc(i+(r()-.5)*i,i+(r()-.5)*i,3+r()*10,0,6.3),e.fill();let o=new An(t);return o.colorSpace=ze,Ke.cookie=o,o}function Zu(n="255,255,255"){let t=`dot${n}`;if(Ke[t])return Ke[t];let e=64,i=Gn(e),s=i.getContext("2d"),r=s.createRadialGradient(e/2,e/2,0,e/2,e/2,e/2);r.addColorStop(0,`rgba(${n},1)`),r.addColorStop(.25,`rgba(${n},0.45)`),r.addColorStop(1,`rgba(${n},0)`),s.fillStyle=r,s.fillRect(0,0,e,e);let o=new An(i);return o.colorSpace=ze,Ke[t]=o,o}function L0(){if(Ke.prism)return Ke.prism;let n=128,t=Gn(n,n/2),e=t.getContext("2d");e.fillStyle="#d8dde0",e.fillRect(0,0,n,n/2),e.fillStyle="rgba(0,0,0,0.12)";for(let r=0;r<n;r+=4)for(let o=r/4%2?2:0;o<n/2;o+=4)e.fillRect(r,o,2,2);let i=gn(3);for(let r=0;r<14;r++)e.fillStyle=`rgba(30,25,20,${.2+i()*.5})`,e.fillRect(i()*n,n/2-6-i()*20,2+i()*3,1+i()*2);let s=new An(t);return s.colorSpace=ze,Ke.prism=s,s}function Mx(){if(Ke.halo)return Ke.halo;let n=128,t=128,e=Gn(n,t),i=e.getContext("2d"),s=i.createImageData(n,t);for(let o=0;o<t;o++)for(let a=0;a<n;a++){let l=Math.max(0,Math.abs(a/n-.5)-.24)/.26,c=Math.max(0,Math.abs(o/t-.52)-.3)/.2,h=Math.min(1,Math.hypot(l,c)),f=Math.abs(a/n-.5)<.24&&Math.abs(o/t-.52)<.3?.25:(1-h)**2.2*.8,d=(o*n+a)*4;s.data[d]=s.data[d+1]=s.data[d+2]=255,s.data[d+3]=f*255}i.putImageData(s,0,0);let r=new An(e);return Ke.halo=r,r}function Ku(){if(Ke.exit)return Ke.exit;let n=Gn(256,128),t=n.getContext("2d");t.fillStyle="#0b120c",t.fillRect(0,0,256,128),t.fillStyle="#5dff7e",t.font='bold 74px "Arial Black", Arial, sans-serif',t.textAlign="center",t.textBaseline="middle",t.fillText("EXIT",128,58),t.beginPath(),t.moveTo(26,104),t.lineTo(44,94),t.lineTo(44,114),t.closePath(),t.moveTo(230,104),t.lineTo(212,94),t.lineTo(212,114),t.closePath(),t.fill(),t.fillRect(48,101,160,6);let e=new An(n);return e.colorSpace=ze,Ke.exit=e,e}function D0(n,t){let e=`decal-${n}-${t}`;if(Ke[e])return Ke[e];let i=256,s=Gn(i),r=s.getContext("2d"),o=gn(100+t*31+n.length*7),a=(c,h,u,f)=>{let d=vn(i,i,4,4,5,o,.55),g=r.createImageData(i,i);for(let x=0;x<i;x++)for(let m=0;m<i;m++){let p=x*i+m,M=Math.hypot(m-i/2,x-i/2)/(i/2),y=hn((d[p]-.35-M*f)*3)*u,_=p*4;g.data[_]=h[0]+(d[p]-.5)*c,g.data[_+1]=h[1]+(d[p]-.5)*c,g.data[_+2]=h[2]+(d[p]-.5)*c,g.data[_+3]=y*255}r.putImageData(g,0,0)};if(n==="dirt")a(60,[62,50,36],.85,.55);else if(n==="water")a(20,[18,20,22],.9,.5);else if(n==="snow"){a(30,[228,233,238],1,.45),r.globalCompositeOperation="source-atop";for(let c=0;c<300;c++)r.fillStyle=`rgba(255,255,255,${o()*.5})`,r.fillRect(o()*i,o()*i,1,1);r.globalCompositeOperation="source-over"}else if(n==="paper")for(let c=0;c<7;c++){r.save(),r.translate(i*(.2+o()*.6),i*(.2+o()*.6)),r.rotate(o()*6.3);let h=38+o()*26,u=h*1.3,f=200+o()*40;r.fillStyle=`rgb(${f},${f-4},${f-14})`,r.fillRect(-h/2,-u/2,h,u),r.fillStyle="rgba(40,40,40,0.5)";for(let d=0;d<9;d++)r.fillRect(-h/2+5,-u/2+8+d*6,(h-10)*(.5+o()*.5),1.5);r.fillStyle="rgba(80,60,30,0.25)",r.beginPath(),r.arc((o()-.5)*h,(o()-.5)*u,8+o()*10,0,6.3),r.fill(),r.fillStyle="rgba(40,30,20,0.18)",r.fillRect(-h/4,-u/6,h/2,u/3),r.restore()}else if(n==="leaves")for(let c=0;c<46;c++){r.save();let h=o()**.7,u=o()*6.3;r.translate(i/2+Math.cos(u)*h*i*.42,i/2+Math.sin(u)*h*i*.42),r.rotate(o()*6.3);let f=8+o()*12,d=[[120,70,30],[150,95,35],[90,60,30],[110,85,40]][Math.floor(o()*4)];r.fillStyle=`rgb(${d[0]},${d[1]},${d[2]})`,r.beginPath(),r.ellipse(0,0,f,f*.45,0,0,6.3),r.fill(),r.strokeStyle="rgba(50,30,15,0.7)",r.lineWidth=1,r.beginPath(),r.moveTo(-f,0),r.lineTo(f,0),r.stroke(),r.restore()}else if(n==="glass")for(let c=0;c<70;c++){let h=o()**1.3,u=o()*6.3,f=i/2+Math.cos(u)*h*i*.45,d=i/2+Math.sin(u)*h*i*.45,g=(1-h)*10+2+o()*4;r.fillStyle=`rgba(200,220,225,${.25+o()*.35})`,r.strokeStyle="rgba(235,245,250,0.8)",r.lineWidth=.8,r.beginPath(),r.moveTo(f+(o()-.5)*g*2,d+(o()-.5)*g*2),r.lineTo(f+(o()-.5)*g*2,d+(o()-.5)*g*2),r.lineTo(f+(o()-.5)*g*2,d+(o()-.5)*g*2),r.closePath(),r.fill(),r.stroke()}else if(n==="grime"){let c=r.createLinearGradient(0,i,0,0);c.addColorStop(0,"rgba(20,16,12,0.75)"),c.addColorStop(.35,"rgba(25,20,15,0.35)"),c.addColorStop(1,"rgba(25,20,15,0)"),r.fillStyle=c,r.fillRect(0,0,i,i);let h=vn(i,i,6,2,4,o),u=r.getImageData(0,0,i,i);for(let f=0;f<i*i;f++)u.data[f*4+3]*=.55+h[f]*.9;r.putImageData(u,0,0)}else if(n==="pool"){let c=r.createRadialGradient(i/2,i/2,0,i/2,i/2,i/2);c.addColorStop(0,"rgba(255,255,255,0.9)"),c.addColorStop(.4,"rgba(255,255,255,0.35)"),c.addColorStop(1,"rgba(255,255,255,0)"),r.fillStyle=c,r.fillRect(0,0,i,i)}let l=new An(s);return l.colorSpace=ze,n==="grime"&&(l.wrapS=Gi),Ke[e]=l,l}var Za={quarantine:[.43,.56],closed:[.22,.28],mask:[.43,.56],evac:[.22,.28],missing:[.22,.28],note:[.5,.36],poster:[.6,.9],staff:[.3,.12]};function Sx(n,t){let e=`notice-${n}-${t}`;if(Ke[e])return Ke[e];let[i,s]=Za[n]||Za.closed,r=256,o=Math.round(r*s/i),a=Gn(r,o),l=a.getContext("2d"),c=gn(7+t*13+n.length*101),h="Arial, Helvetica, sans-serif",u='"Arial Black", Arial, sans-serif',f='"Segoe Print", "Bradley Hand", "Comic Sans MS", cursive',d=p=>{l.fillStyle=p,l.fillRect(0,0,r,o)},g=(p,M,y,_="#151515")=>{l.font=y,l.fillStyle=_,l.textAlign="center",l.textBaseline="alphabetic";let D=parseInt(y,10);for(;l.measureText(p).width>r*.88&&D>6;)D-=1,l.font=y.replace(/\d+px/,`${D}px`);l.fillText(p,r/2,M)},x=(p,M,y)=>{l.fillStyle="rgba(30,30,30,0.55)";for(let _=0;_<M;_++)l.fillRect(r*.1,p+_*y,r*(.6+c()*.2),2)};if(n==="quarantine"){d("#e6d64a"),l.fillStyle="#141414",l.fillRect(0,0,r,64),g("QUARANTINE",46,`bold 40px ${u}`,"#e6d64a"),g("DO NOT ENTER",110,`bold 34px ${u}`,"#b01d14"),l.strokeStyle="#141414",l.lineWidth=7;for(let p=0;p<3;p++){let M=p/3*Math.PI*2-Math.PI/2;l.beginPath(),l.arc(r/2+Math.cos(M)*22,190+Math.sin(M)*22,24,0,6.3),l.stroke()}l.beginPath(),l.arc(r/2,190,9,0,6.3),l.stroke(),g("PNEUMONIC PLAGUE EXPOSURE SITE",262,`bold 15px ${h}`),g("By order of Multnomah County Health",286,`14px ${h}`),g("Entry is prohibited until cleared.",304,`14px ${h}`)}else if(n==="closed")d("#efece2"),g("CLOSED",52,`bold 42px ${u}`,"#121212"),g("BY ORDER OF",84,`bold 18px ${h}`),g("WASHINGTON COUNTY HEALTH",108,`bold 17px ${h}`),l.strokeStyle="#2a3c6a",l.lineWidth=3,l.beginPath(),l.arc(r/2,170,34,0,6.3),l.stroke(),l.beginPath(),l.arc(r/2,170,26,0,6.3),l.stroke(),g("PUBLIC HEALTH",175,`bold 10px ${h}`,"#2a3c6a"),x(222,6,13),g("Sep 19, 2026",o-18,`italic 13px ${h}`);else if(n==="mask")d("#f1efe8"),l.fillStyle="#b3241a",l.fillRect(0,0,r,78),g("PNEUMONIC PLAGUE",34,`bold 26px ${u}`,"#fff"),g("WEAR A MASK",66,`bold 28px ${u}`,"#fff"),l.fillStyle="#d9cbb5",l.beginPath(),l.arc(r/2,140,40,0,6.3),l.fill(),l.fillStyle="#9fc5d8",l.fillRect(r/2-34,138,68,30),l.strokeStyle="#555",l.lineWidth=2,l.strokeRect(r/2-34,138,68,30),["Cover every cough","Stay 6 feet apart","Fever or cough? Stay home","Call 211 for help"].forEach((M,y)=>g(`\u2022 ${M}`,212+y*22,`bold 15px ${h}`,"#1a1a1a")),g("Oregon Health Authority",o-14,`11px ${h}`,"#444");else if(n==="evac")d("#f4f1e6"),g("EVACUATION",40,`bold 28px ${u}`,"#14306b"),g("NOTICE",70,`bold 24px ${u}`,"#14306b"),["Buses leave Pioneer Sq.","Sept 14, 8:00 AM","Bring ID, water, 1 bag.","No pets on the bus.","Shelter: Expo Center"].forEach((M,y)=>g(M,112+y*26,`bold 16px ${h}`)),x(250,5,12);else if(n==="missing")d("#eeeae0"),g("HAVE YOU SEEN US?",34,`bold 21px ${u}`,"#202020"),l.fillStyle="#8b8d8e",l.fillRect(r*.2,48,r*.6,120),l.fillStyle="rgba(255,255,255,0.25)",l.fillRect(r*.2,48,r*.6,40),l.fillStyle="rgba(40,40,40,0.4)",l.beginPath(),l.arc(r*.42,120,18,0,6.3),l.fill(),l.beginPath(),l.arc(r*.58,128,14,0,6.3),l.fill(),["Went to Expo Center","shelter. Oct 2.","Maria + kids. Love you."].forEach((M,y)=>g(M,200+y*24,`20px ${f}`,"#1b2a6b"));else if(n==="note"){d("#a8875a");let p=vn(r,o,4,3,3,c),M=l.getImageData(0,0,r,o);for(let C=0;C<r*o;C++){let P=(p[C]-.5)*30;M.data[C*4]+=P,M.data[C*4+1]+=P,M.data[C*4+2]+=P}l.putImageData(M,0,0);let y=[["NO MEDS","LEFT"],["DONT GO","IN BACK"],["TOOK WATER","SORRY"],["SICK INSIDE","STAY OUT"]],[_,D]=y[t%y.length];l.save(),l.translate(r/2,o/2),l.rotate((c()-.5)*.12),l.font=`bold 46px ${f}`,l.fillStyle="#121212",l.textAlign="center",l.fillText(_,0,-10),l.fillText(D,0,46),l.restore()}else if(n==="poster"){let p=["#2e4f78","#7a2e2a","#2f5a45"][t%3];d(p),l.fillStyle="rgba(255,255,255,0.12)";for(let M=0;M<6;M++)l.beginPath(),l.arc(c()*r,c()*o,30+c()*60,0,6.3),l.fill();g("WINTER",90,`bold 50px ${u}`,"#f6e9c9"),g("SAVINGS",145,`bold 46px ${u}`,"#f6e9c9"),l.fillStyle="#f6c63c",l.beginPath(),l.arc(r/2,240,58,0,6.3),l.fill(),g("20%",248,`bold 40px ${u}`,"#1a1a1a"),g("OFF",276,`bold 20px ${u}`,"#1a1a1a"),g("Ends Sept 30",o-30,`bold 18px ${h}`,"#f6e9c9")}else n==="staff"&&(d("#1d2a33"),g("STAFF ONLY",o*.66,`bold 34px ${u}`,"#e9eef0"));l.fillStyle=`rgba(160,130,60,${.06+c()*.08})`,l.fillRect(0,0,r,o);for(let p=0;p<3;p++){let M=l.createRadialGradient(c()*r,c()*o,2,c()*r,c()*o,40+c()*60);M.addColorStop(0,"rgba(110,80,30,0.18)"),M.addColorStop(1,"rgba(110,80,30,0)"),l.fillStyle=M,l.fillRect(0,0,r,o)}if(l.fillStyle="rgba(0,0,0,0.06)",l.fillRect(0,o/2-1,r,2),n!=="staff"&&n!=="note"){l.fillStyle="rgba(225,215,170,0.75)";for(let[p,M]of[[8,4],[r-40,4]])l.fillRect(p,M,32,12);l.clearRect(0,0,0,0),l.globalCompositeOperation="destination-out",l.beginPath(),l.moveTo(r,o),l.lineTo(r-20-c()*30,o),l.lineTo(r-6,o-10-c()*14),l.lineTo(r,o-30-c()*20),l.closePath(),l.fill(),l.globalCompositeOperation="source-over"}let m=new An(a);return m.colorSpace=ze,m.anisotropy=4,Ke[e]=m,m}var Ex=`
uniform float uTime; uniform float uScale;
uniform vec3 uMin; uniform vec3 uSize;
uniform vec3 uFlashPos; uniform vec3 uFlashDir; uniform float uFlashCos; uniform float uFlashOn;
uniform vec4 uShaft[2]; uniform float uShaftOn[2];
attribute vec3 seed;
varying float vLight;
void main() {
  vec3 p = seed;
  p.y = fract(p.y - uTime * (0.002 + seed.x * 0.004));
  p.x = fract(p.x + sin(uTime * 0.13 + seed.z * 40.0) * 0.012);
  p.z = fract(p.z + cos(uTime * 0.11 + seed.y * 40.0) * 0.012);
  vec3 wp = uMin + p * uSize;
  vec3 d = wp - uFlashPos;
  float dist = length(d);
  float c = dot(d / max(dist, 0.001), uFlashDir);
  float beam = smoothstep(uFlashCos, mix(uFlashCos, 1.0, 0.6), c) * uFlashOn * 4.0 / (1.0 + dist * dist * 0.05);
  float shaft = 0.0;
  for (int i = 0; i < 2; i++) {
    vec4 s = uShaft[i]; // x, z (door), half width, length
    float t = clamp((s.y - wp.z) / s.w, 0.0, 1.0);
    float hw = s.z * (1.0 + t);
    float inside = step(0.001, s.y - wp.z) * (1.0 - smoothstep(hw * 0.6, hw, abs(wp.x - s.x)))
      * (1.0 - smoothstep(2.4 - t * 1.6, 2.6 - t * 1.6, wp.y));
    shaft += inside * (1.0 - t) * uShaftOn[i];
  }
  vLight = 0.03 + beam + shaft * 0.9;
  vec4 mv = viewMatrix * vec4(wp, 1.0);
  float depth = -mv.z;
  vLight *= smoothstep(0.25, 0.8, depth) * (1.0 - smoothstep(9.0, 14.0, depth));
  gl_Position = projectionMatrix * mv;
  gl_PointSize = clamp(uScale * (0.008 + seed.y * 0.01) / max(depth, 0.1), 1.5, 8.0);
}`,Tx=`
varying float vLight;
void main() {
  float r = length(gl_PointCoord - 0.5);
  float a = (1.0 - smoothstep(0.0, 0.5, r)) * vLight;
  gl_FragColor = vec4(vec3(1.0, 0.96, 0.88) * a, a);
}`,wx=`
attribute vec2 aSlice; // x: 1 for a cross-section slice, y: its distance along the shaft (0..1)
varying float vT; varying float vS; varying float vR; varying vec3 vW; varying vec3 vN;
void main() {
  vT = mix(uv.y, aSlice.y, aSlice.x); vS = uv.x;
  vR = aSlice.x > 0.5 ? uv.y : 0.5; // second edge fade for slices
  vec4 w = modelMatrix * vec4(position, 1.0);
  vW = w.xyz;
  vN = normalize(mat3(modelMatrix) * normal);
  gl_Position = projectionMatrix * viewMatrix * w;
}`,Ax=`
uniform vec3 uColor; uniform float uAlpha; uniform float uTime;
varying float vT; varying float vS; varying float vR; varying vec3 vW; varying vec3 vN;
void main() {
  vec3 v = normalize(cameraPosition - vW);
  float face = pow(abs(dot(vN, v)), 1.4);
  float along = pow(1.0 - vT, 1.6) * smoothstep(0.0, 0.08, vT);
  float side = smoothstep(0.0, 0.3, vS) * (1.0 - smoothstep(0.7, 1.0, vS)) * smoothstep(0.0, 0.35, vR) * (1.0 - smoothstep(0.65, 1.0, vR));
  float near = smoothstep(0.4, 1.6, length(cameraPosition - vW));
  float streak = 0.75 + 0.25 * sin(vS * 23.0 + vT * 3.0 + uTime * 0.15);
  float a = uAlpha * face * along * side * near * streak;
  gl_FragColor = vec4(uColor * a, a);
}`;function Rx(n,t,e){let i=[[-n/2,0],[n/2,0],[n/2,t],[-n/2,t]],s=n*1.9,r=t*.18,o=[[-s/2,0],[s/2,0],[s/2,r],[-s/2,r]],a=[],l=[],c=[],h=0,u=(m,p,M,y)=>{a.push(...m,...p,...M,...y),l.push(0,0,1,0,1,1,0,1),c.push(h,h+1,h+2,h,h+2,h+3),h+=4};u([i[0][0],i[0][1],0],[i[3][0],i[3][1],0],[o[3][0],o[3][1],-e],[o[0][0],o[0][1],-e]),u([i[1][0],i[1][1],0],[i[2][0],i[2][1],0],[o[2][0],o[2][1],-e],[o[1][0],o[1][1],-e]),u([i[3][0],i[3][1],0],[i[2][0],i[2][1],0],[o[2][0],o[2][1],-e],[o[3][0],o[3][1],-e]),u([0,0,0],[0,t,0],[0,r,-e],[0,0,-e]),u([-n/2,t*.5,0],[n/2,t*.5,0],[s/2,r*.5,-e],[-s/2,r*.5,-e]);let f=new Pe,d=h;for(let m of[.12,.3,.5,.7]){let p=(n+(s-n)*m)/2,M=g(m);u([-p,0,-e*m],[p,0,-e*m],[p,M,-e*m],[-p,M,-e*m])}function g(m){return t+(r-t)*m}let x=new Float32Array(h*2);for(let m=d;m<h;m++){let p=[.12,.3,.5,.7][Math.floor((m-d)/4)];x[m*2]=1,x[m*2+1]=p}return f.setAttribute("aSlice",new Ve(x,2)),f.setAttribute("position",new Ve(new Float32Array(a),3)),f.setAttribute("uv",new Ve(new Float32Array(l),2)),f.setIndex(c),f.computeVertexNormals(),f}function Ju(n,t,e,i={}){let s=i.quality||k0(),r=s==="high",o=!!i.dark,a=!!i.night,l=o||a,c=new jt;c.name="look3d",t.add(c);let h=[],u=F=>(h.push(F),F);n.toneMapping=x0,n.toneMappingExposure=l?1.25:1,n.outputColorSpace=ze,n.shadowMap.enabled=!0,n.shadowMap.type=r?g0:Wa;let f=o?263430:a?329483:3817800;t.background=new Yt(f),t.fog=new pr(o?197637:a?329482:4870746,o?.085:a?.07:.035);let d=null;if(i.env??r)try{let F=new mr,it=new mn({side:cn,vertexColors:!0}),E=new we(10,4,10),dt=[],V=E.attributes.position,ut=new Yt(l?1382428:6975090),at=new Yt(l?789258:4208943),Tt=new Yt(l?658189:9080466);for(let b=0;b<V.count;b++){let z=V.getY(b),j=z>1?Tt:z<-1?at:ut;dt.push(j.r,j.g,j.b)}E.setAttribute("color",new Ve(new Float32Array(dt),3)),F.add(new Vt(E,it));let ft=new Vt(new Ge(2,2.6),new mn({color:new Yt(a?2898514:14674165).multiplyScalar(a?1:3),side:Ce}));ft.position.set(0,-.6,4.9),F.add(ft);let R=new dr(n);d=R.fromScene(F,.02),R.dispose(),E.dispose(),it.dispose(),ft.geometry.dispose(),ft.material.dispose(),t.environment=d.texture,t.environmentIntensity=o?.35:a?.3:.6}catch{d=null}let g=null;i.fill!==!1&&(g=o?new Sr(7241622,1512207,.55):a?new Sr(6123404,1380878,.6):new Sr(14081768,9209726,1.5),c.add(g));let x=null,m=!1,p=1,M=70,y=new Ze;if(i.flashlight!==!1){let F=new co(16773596,0,26,.48,.55,2);F.position.set(.22,-.2,.05),y.position.set(.04,-.22,-4),e.add(F,y),F.target=y,e.parent!==t&&!e.parent&&t.add(e),F.castShadow=!0,F.shadow.mapSize.set(r?1024:512,r?1024:512),F.shadow.camera.near=.15,F.shadow.camera.far=24,F.shadow.bias=-4e-4,F.shadow.normalBias=.03,F.shadow.radius=r?3:1,F.map=bx(),i.flashShadow===!1&&(F.castShadow=!1),x=F,F.setOn=it=>{m=!!it},F.isOn=()=>m,F.setPower=it=>{p=hn(it)}}let _=i.maxLights??(r?6:3),D=0,C=()=>D<_?(D++,!0):!1,P=[],N=u(new We({color:10330789,roughness:.55,metalness:.6})),A=u(new We({map:L0(),color:10132632,roughness:.4}));function S(F,it,E,dt,V,ut){let at=new Vt(new Ge(V*2,V*2),u(new mn({map:D0("pool",0),color:dt,transparent:!0,opacity:ut,depthWrite:!1,blending:Vi,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4})));return at.rotation.x=-Math.PI/2,at.position.set(F,it,E),c.add(at),at}function U(F,it,E,dt="dead"){let V=new jt;V.position.set(F,it,E);let ut=mo(F,E);if(dt==="emergency"){let at=new Vt(new we(.34,.12,.2),N);at.position.y=-.06;let Tt=u(new We({color:2755076,emissive:16734756,emissiveIntensity:2.4,roughness:.3})),ft=new Vt(new $i(.06,12,8),Tt);ft.position.y=-.17;let R=new Vt(new qi(.075,.075,.12,8,1,!0),u(new We({color:2236962,wireframe:!0})));R.position.y=-.17;let b=new to(u(new gr({map:Zu("255,110,50"),blending:Vi,depthWrite:!1,transparent:!0,opacity:.6})));b.scale.set(.7,.7,1),b.position.y=-.17,V.add(at,ft,R,b);let z=null;C()?(z=new ho(16738864,2.4,9,2),z.position.y=-.3,V.add(z)):S(F,.012,E,16738864,2.4,.18),P.push({light:z,mats:[Tt],glow:b,base:z?z.intensity:0,baseE:2.4,state:dt,t:ut*10,seed:ut})}else{let at=new Vt(new we(.62,.08,1.22),N);at.position.y=-.04;let Tt=dt==="flicker",ft=Tt?u(new We({map:L0(),color:13160146,emissive:15397631,emissiveMap:L0(),emissiveIntensity:2.2,roughness:.4})):A,R=new Vt(new Ge(.56,1.16),ft);if(R.rotation.x=Math.PI/2,R.position.y=-.082,V.add(at,R),!Tt&&ut<.3){V.rotation.x=(ut<.15?1:-1)*(.45+ut),V.position.y-=.35;let b=new Vt(new qi(.004,.004,.5,4),N);b.position.set(.25,.2,0),V.add(b)}if(Tt){let b=null;C()?(b=new ho(14674431,14,13,2),b.position.y=-.35,V.add(b)):S(F,.012,E,14674431,3,.3),P.push({light:b,mats:[ft],base:b?b.intensity:0,baseE:2.2,state:dt,t:ut*10,seed:ut,off:0})}}return c.add(V),V}function q(F,it,E,dt=0){let V=new jt,ut=u(new We({map:Ku(),emissive:16777215,emissiveMap:Ku(),emissiveIntensity:1.6,roughness:.5})),at=new Vt(new we(.38,.2,.06),[N,N,N,N,ut,ut]),Tt=new to(u(new gr({map:Zu("80,255,120"),blending:Vi,depthWrite:!1,transparent:!0,opacity:.55})));return Tt.scale.set(1.1,.7,1),V.add(at,Tt),V.position.set(F,it,E),V.rotation.y=dt,c.add(V),V}let H=[];function W(F,it,E=a,dt={}){let V=dt.width??1.8,ut=dt.height??2.2,at=dt.length??5.5,Tt=dt.rotY??0,ft=new jt;ft.position.set(F,0,it),ft.rotation.y=Tt;let R=E?8492987:14477567,b=new co(R,E?6:60,16,.85,1,2);b.position.set(0,ut+.6,1.6);let z=new Ze;z.position.set(0,0,-3.5),ft.add(b,z),b.target=z;let j=u(new Vn({vertexShader:wx,fragmentShader:Ax,transparent:!0,depthWrite:!1,blending:Vi,side:Ce,uniforms:{uColor:{value:new Yt(R)},uAlpha:{value:E?.16:.5},uTime:{value:0}}})),ht=new Vt(Rx(V,ut,at),j);ht.position.z=-.05,ht.renderOrder=5,ft.add(ht);let rt=u(new mn({map:Mx(),color:R,transparent:!0,opacity:E?.25:.55,blending:Vi,depthWrite:!1,fog:!1,side:Ce})),zt=new Vt(new Ge(V+2.2,ut+1.6),rt);if(zt.position.set(0,ut/2+.1,-.12),zt.renderOrder=4,ft.add(zt),dt.sky!==!1){let bt=u(new mn({color:E?2372170:15331576,toneMapped:!1,fog:!1})),Ct=new Vt(new Ge(V+6,ut+4),bt);Ct.position.set(0,ut/2+1,2.4),Ct.rotation.y=Math.PI;let he=u(new mn({color:E?3951200:13226716,fog:!1})),pt=new Vt(new Ge(V+6,2.3),he);pt.rotation.x=-Math.PI/2,pt.position.set(0,.005,1.25),ft.add(Ct,pt)}return c.add(ft),H.push({x:F,z:it,w:V,L:at,rotY:Tt,mat:j,night:E}),{group:ft,light:b,shaft:ht}}let lt=[];function K(F,it){let E=F.min?{minX:F.min.x,maxX:F.max.x,minY:F.min.y,maxY:F.max.y,minZ:F.min.z,maxZ:F.max.z}:F,dt=(E.maxX-E.minX)*(E.maxY-E.minY)*(E.maxZ-E.minZ),V=it??Math.min(r?700:220,Math.max(80,Math.round(dt*(r?1.6:.6)))),ut=gn(Math.floor((E.minX+E.maxZ)*100)+7),at=new Float32Array(V*3);for(let b=0;b<at.length;b++)at[b]=ut();let Tt=new Pe;Tt.setAttribute("seed",new Ve(at,3)),Tt.setAttribute("position",new Ve(new Float32Array(V*3),3)),Tt.boundingSphere=null;let ft=u(new Vn({vertexShader:Ex,fragmentShader:Tx,transparent:!0,depthWrite:!1,blending:Vi,uniforms:{uTime:{value:0},uScale:{value:500},uMin:{value:new I(E.minX,E.minY,E.minZ)},uSize:{value:new I(E.maxX-E.minX,E.maxY-E.minY,E.maxZ-E.minZ)},uFlashPos:{value:new I},uFlashDir:{value:new I(0,0,-1)},uFlashCos:{value:Math.cos(.48)},uFlashOn:{value:0},uShaft:{value:[new Re(0,0,1,1),new Re(0,0,1,1)]},uShaftOn:{value:[0,0]}}})),R=new Ca(Tt,ft);return R.frustumCulled=!1,R.renderOrder=6,c.add(R),lt.push(ft),R}function gt(F,it,E,dt=0,V="closed",ut){let at=ut??Math.floor(mo(F,E)*4),[Tt,ft]=Za[V]||Za.closed,R=u(new We({map:Sx(V,at),roughness:.92,alphaTest:.5,side:Ce,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-2})),b=new Vt(new Ge(Tt,ft),R);return b.position.set(F+Math.sin(dt)*.012,it,E+Math.cos(dt)*.012),b.rotation.set(0,dt,(mo(E,F)-.5)*.12),b.receiveShadow=!0,c.add(b),b}let Z=0;function wt(F,it,E="dirt",dt=1,V=0){let ut=Math.floor(mo(F*3,it*5)*3),at=E==="water",Tt=u(new We({map:D0(E,ut),transparent:!0,depthWrite:!1,roughness:at?.06:E==="snow"?.85:.95,metalness:at?.2:0,color:at?10133670:16777215,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-4})),ft=new Vt(new Ge(dt,dt),Tt);return ft.rotation.set(-Math.PI/2,0,V),Z=(Z+1)%8,ft.position.set(F,.003+Z*8e-4,it),ft.receiveShadow=!0,ft.renderOrder=1,c.add(ft),ft}let At=u(new Pe);At.setAttribute("position",new Ve(new Float32Array([0,0,0,.05,0,-.012,.018,0,.04]),3)),At.setAttribute("normal",new Ve(new Float32Array([0,1,0,0,1,0,0,1,0]),3));let Nt=u(new We({color:14675698,roughness:.04,metalness:0,transparent:!0,opacity:.55,side:Ce,envMapIntensity:3}));function te(F,it,E=1.2){let dt=new jt,V=gn(Math.floor(mo(F,it)*1e6)+3),ut=wt(F,it,"glass",E,V()*6.3);ut.material.roughness=.05,ut.material.envMapIntensity=3,dt.add(ut);for(let at=0;at<(r?18:8);at++){let Tt=new Vt(At,Nt),ft=V()*6.3,R=V()**1.5*E*.45;Tt.position.set(F+Math.cos(ft)*R,.006,it+Math.sin(ft)*R),Tt.rotation.set((V()-.5)*.3,V()*6.3,(V()-.5)*.3),Tt.scale.setScalar(.6+V()*1.6),dt.add(Tt)}return c.add(dt),dt}function ge(F,it,E,dt,V=.7){let ut=D0("grime",0),at=u(new mn({map:ut,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-3,color:16777215})),Tt=(ft,R,b,z)=>{let j=new Vt(new Ge(b,V),at);j.rotation.set(-Math.PI/2,0,z),j.position.set(ft,.002,R),j.renderOrder=1,c.add(j)};Tt((F+it)/2,E+V/2,it-F,0),Tt((F+it)/2,dt-V/2,it-F,Math.PI),Tt(F+V/2,(E+dt)/2,dt-E,Math.PI/2),Tt(it-V/2,(E+dt)/2,dt-E,-Math.PI/2)}let nt=0,vt=new I,Bt=new I,Mt=new I,Wt=new yt,ee=1;function Kt(F,it){if(nt+=F,x){let E=p;m&&E<.2&&(Math.random()<F*3&&(ee=.2+Math.random()*.6),ee+=(1-ee)*Math.min(1,F*6),E=(.35+E*3)*ee),x.intensity=m?M*Math.max(0,Math.min(1,E)):0}for(let E of P){let dt;if(E.state==="emergency")dt=.88+.08*Math.sin(nt*2.1+E.seed*9)+.04*Math.sin(nt*31+E.seed*3);else{if(E.t-=F,E.t<=0){let V=Math.random();E.burst>0?(E.burst--,E.off=E.off?0:1,E.t=.03+Math.random()*.09):V<.5?(E.off=0,E.t=.8+Math.random()*3.5):V<.85?(E.burst=3+Math.floor(Math.random()*8),E.t=.05):(E.off=1,E.t=.4+Math.random()*1.6)}dt=E.off?.04:.92+Math.random()*.08}E.light&&(E.light.intensity=E.base*dt);for(let V of E.mats)V.emissiveIntensity=E.baseE*dt;E.glow&&(E.glow.material.opacity=.6*dt)}if(lt.length){e.getWorldPosition(vt),it&&vt.copy(it),e.getWorldDirection(Bt),x?x.getWorldPosition(Mt):Mt.copy(vt),n.getDrawingBufferSize(Wt);let E=Wt.y/(2*Math.tan(As.degToRad(e.fov||70)/2));for(let dt of lt){let V=dt.uniforms;V.uTime.value=nt,V.uScale.value=E,V.uFlashPos.value.copy(Mt),V.uFlashDir.value.copy(Bt),V.uFlashOn.value=x?x.intensity/M:0;for(let ut=0;ut<2;ut++){let at=H[ut];at&&Math.abs(at.rotY)<.01?(V.uShaft.value[ut].set(at.x,at.z,at.w/2,at.L),V.uShaftOn.value[ut]=at.night?.25:1):V.uShaftOn.value[ut]=0}}}for(let E of H)E.mat.uniforms.uTime.value=nt}function _e(){t.remove(c),x&&e.remove(x,y),c.traverse(F=>{F.geometry&&F.geometry.dispose()});for(let F of h)F.dispose?.();d&&(t.environment===d.texture&&(t.environment=null),d.dispose())}return{quality:s,group:c,fill:g,flashlight:x,update:Kt,dispose:_e,addCeilingLight:U,addExitSign:q,addDoorLight:W,addDust:K,addWallNotice:gt,addDecal:wt,addBrokenGlass:te,addRoomShade:ge,setExposure:F=>{n.toneMappingExposure=F},lightsUsed:()=>D}}var bn=new Map,Cx=new Map,af=new Map;function sn(n,t,e){let i=n.get(t);return i===void 0&&(i=e(),n.set(t,i)),i}function Cs(n){let t=n>>>0^2654435769;return()=>{t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function So(n){let t=2166136261;for(let e=0;e<n.length;e++)t^=n.charCodeAt(e),t=Math.imul(t,16777619);return t>>>0}var xe=(n,t)=>t[Math.floor(n()*t.length)%t.length],Zt=Math.PI*2,Ix='Arial, Helvetica, "Liberation Sans", "DejaVu Sans", sans-serif',Zi='"Arial Narrow", "Liberation Sans Narrow", Arial, Helvetica, sans-serif';function lf(n,t){if(typeof document<"u"){let e=document.createElement("canvas");return e.width=n,e.height=t,e}return typeof OffscreenCanvas<"u"?new OffscreenCanvas(n,t):null}function It(n,t,e,i,s={}){return sn(af,n,()=>{let r=lf(t,e);if(!r)return null;let o=r.getContext("2d");i(o,t,e,Cs(So(n)));let a=new An(r);return a.colorSpace=s.data?$n:ze,a.anisotropy=4,s.repeat&&(a.wrapS=a.wrapT=Gi,a.repeat.set(s.repeat[0],s.repeat[1])),a})}function qt(n,t,e,i,s,r={}){n.save(),n.font=`${r.italic?"italic ":""}${r.weight||"bold"} ${s}px ${r.font||Ix}`,n.fillStyle=r.color||"#111",n.textAlign=r.align||"center",n.textBaseline=r.baseline||"middle",n.translate(e,i),r.rot&&n.rotate(r.rot);let o=n.measureText(t).width,a=r.sx||1;r.maxW&&o*a>r.maxW?n.scale(r.maxW/o,1):a!==1&&n.scale(a,1),r.stroke&&(n.lineWidth=r.strokeW||s*.12,n.strokeStyle=r.stroke,n.lineJoin="round",n.strokeText(t,0,0)),n.fillText(t,0,0),n.restore()}function Je(n,t,e,i,s,r,o,a="rgba(0,0,0,0.55)"){n.fillStyle=a;for(let l=0;l<s;l++){let c=t,h=t+i*(l===s-1?.3+o()*.5:.85+o()*.15);for(;c<h;){let u=Math.min(h-c,r*(.8+o()*3));n.fillRect(c,e+l*r,u,r*.55),c+=u+r*.45}}}function Eo(n,t,e,i,s,r){n.fillStyle="#fff",n.fillRect(t-i*.06,e-s*.06,i*1.12,s*1.3),n.fillStyle="#000";let o=t;for(;o<t+i;){let a=Math.max(1,(r()<.6?1:2+Math.floor(r()*2))*i/95);r()<.55&&n.fillRect(o,e,a,s),o+=a}n.fillRect(t,e,i/95,s*1.08),n.fillRect(t+i-i/95,e,i/95,s*1.08),Je(n,t+i*.1,e+s*1.06,i*.8,1,s*.18,r,"#000")}function cf(n,t,e,i,s,r){n.fillStyle="#fff",n.fillRect(t,e,i,s),n.strokeStyle="#000",n.lineWidth=Math.max(1,i*.012),n.strokeRect(t,e,i,s),qt(n,"Nutrition Facts",t+i*.06,e+s*.08,s*.1,{align:"left",color:"#000",maxW:i*.88,font:Zi}),n.fillStyle="#000",n.fillRect(t+i*.05,e+s*.17,i*.9,s*.035);let o=9;for(let a=0;a<o;a++){let l=e+s*(.24+a*.075);Je(n,t+i*.06,l,i*.6,1,s*.05,r,"#000"),Je(n,t+i*.78,l,i*.14,1,s*.05,r,"#000"),n.fillRect(t+i*.05,l+s*.055,i*.9,Math.max(1,s*.006))}n.fillRect(t+i*.05,e+s*.92,i*.9,s*.02)}function ae(n,t,e,i,s=1){for(let r=0;r<260*s;r++){n.fillStyle=i()<.5?`rgba(70,60,45,${.05+i()*.08})`:`rgba(255,255,255,${.04+i()*.06})`;let o=1+i()*2.5;n.fillRect(i()*t,i()*e,o,o)}for(let r=0;r<4*s;r++){let o=i()*t,a=i()*e,l=(.05+i()*.18)*Math.max(t,e),c=n.createRadialGradient(o,a,0,o,a,l);c.addColorStop(0,`rgba(80,66,44,${.05+i()*.08})`),c.addColorStop(1,"rgba(80,66,44,0)"),n.fillStyle=c,n.fillRect(o-l,a-l,l*2,l*2)}for(let r=0;r<3*s;r++){n.strokeStyle=`rgba(255,255,255,${.08+i()*.1})`,n.lineWidth=1,n.beginPath();let o=i()*t,a=i()*e;n.moveTo(o,a),n.lineTo(o+(i()-.5)*t*.3,a+(i()-.5)*e*.2),n.stroke()}}function De(n,t,e,i,s,r,o=4e3,a=2){n.fillStyle=s,n.fillRect(0,0,t,e);for(let l=0;l<o;l++){let c=(i()-.5)*r;n.fillStyle=c>0?`rgba(255,255,255,${c})`:`rgba(0,0,0,${-c})`,n.fillRect(i()*t,i()*e,a*(.5+i()),a*(.5+i()))}}function Xn(n,t){let e=new Yt(n);return t<0?e.multiplyScalar(1+t):e.lerp(new Yt(16777215),t),"#"+e.getHexString()}function el(n,t,e,i,s,r){n.save(),n.translate(e,i);let o=(l,c,h,u)=>{n.fillStyle=u,n.beginPath(),n.arc(l,c,h,0,Zt),n.fill()},a=(l,c,h,u,f,d)=>{n.fillStyle=d,n.beginPath(),n.ellipse(l,c,h,u,f,0,Zt),n.fill()};switch(t){case"beans":case"chili":a(0,s*.25,s*.9,s*.35,0,"#f3efe6"),a(0,s*.12,s*.75,s*.28,0,t==="chili"?"#7a1e10":"#9a4a1c");for(let l=0;l<16;l++)a((r()-.5)*s*1.2,s*(.05+r()*.15),s*.13,s*.08,r()*3,t==="chili"?"#5a140c":"#c06a2c");break;case"soup":a(0,s*.3,s*.95,s*.4,0,"#fafafa"),a(0,s*.18,s*.78,s*.26,0,"#e8b850");for(let l=0;l<9;l++)a((r()-.5)*s,s*(.1+r()*.12),s*.12,s*.05,r()*3,r()<.5?"#f6e3b0":"#d9822b");n.strokeStyle="rgba(255,255,255,0.8)",n.lineWidth=s*.06;for(let l=-1;l<=1;l++)n.beginPath(),n.moveTo(l*s*.3,-s*.15),n.bezierCurveTo(l*s*.3+s*.15,-s*.4,l*s*.3-s*.15,-s*.55,l*s*.3,-s*.8),n.stroke();break;case"corn":for(let l=0;l<30;l++)o((r()-.5)*s*1.4,(r()-.5)*s*.9,s*.13,l%3?"#f2c21b":"#e0a812");a(-s*.6,s*.1,s*.5,s*.15,-.6,"#5c9a2c");break;case"peas":for(let l=0;l<26;l++)o((r()-.5)*s*1.4,(r()-.5)*s*.9,s*.14,l%4?"#5aa43a":"#3f8a28");break;case"tomato":case"fruit":case"peach":case"apple":{let l=t==="tomato"?"#d8261c":t==="peach"?"#f39a42":t==="apple"?"#c8221c":"#f2a33a";o(-s*.35,s*.1,s*.5,l),o(s*.4,s*.15,s*.45,t==="fruit"?"#f2d24a":l),a(-s*.5,-s*.1,s*.15,s*.1,-.5,"rgba(255,255,255,0.45)"),a(-s*.3,-s*.42,s*.22,s*.08,-.4,"#3f8a28");break}case"fish":a(0,0,s*.85,s*.35,0,"#7f98ad"),n.fillStyle="#7f98ad",n.beginPath(),n.moveTo(s*.7,0),n.lineTo(s*1.1,-s*.35),n.lineTo(s*1.1,s*.35),n.fill(),o(-s*.55,-s*.05,s*.07,"#111");break;case"grain":n.strokeStyle="#c9a24a",n.lineWidth=s*.06;for(let l=-1;l<=1;l++){n.beginPath(),n.moveTo(l*s*.3,s*.9),n.lineTo(l*s*.15,-s*.6),n.stroke();for(let c=0;c<6;c++)a(l*s*.15-s*.1,-s*.5+c*s*.18,s*.1,s*.05,.6,"#d9b25a"),a(l*s*.15+s*.1,-s*.5+c*s*.18,s*.1,s*.05,-.6,"#d9b25a")}break;case"noodle":a(0,s*.3,s*.9,s*.35,0,"#fff"),n.strokeStyle="#f0d48a",n.lineWidth=s*.06;for(let l=0;l<7;l++){n.beginPath(),n.moveTo(-s*.7,s*(.05+l*.05));for(let c=-.7;c<=.7;c+=.1)n.lineTo(c*s,s*(.05+l*.05)+Math.sin(c*14+l)*s*.05);n.stroke()}a(s*.3,s*.08,s*.15,s*.07,0,"#d9822b"),a(-s*.25,s*.12,s*.1,s*.06,0,"#5aa43a");break;case"chip":for(let l=0;l<7;l++)a((r()-.5)*s*1.3,(r()-.3)*s*.9,s*.38,s*.26,r()*3,l%2?"#f0c24a":"#e6ae32");break;case"meat":for(let l=0;l<4;l++)n.fillStyle=l%2?"#6a2c18":"#7d3a1e",n.save(),n.rotate(-.4+l*.25),n.fillRect(-s*.8,-s*.12+l*s*.05,s*1.6,s*.2),n.restore();break;case"oats":a(0,s*.3,s*.95,s*.4,0,"#2a4f8a"),a(0,s*.18,s*.8,s*.27,0,"#e9dcc0");for(let l=0;l<30;l++)a((r()-.5)*s*1.3,s*(.08+r()*.18),s*.07,s*.04,r()*3,"#cdb98a");Px(n,s*.6,-s*.4,s*.5);break;case"peanut":for(let l=0;l<3;l++)n.save(),n.translate((l-1)*s*.55,l%2*s*.2),n.rotate(.5-l*.4),a(0,-s*.18,s*.22,s*.25,0,"#d4a35c"),a(0,s*.18,s*.24,s*.27,0,"#d4a35c"),n.restore();break;case"cross":n.fillStyle="#d61f26",n.fillRect(-s*.2,-s*.65,s*.4,s*1.3),n.fillRect(-s*.65,-s*.2,s*1.3,s*.4);break;case"wcross":n.fillStyle="#fff",n.fillRect(-s*.2,-s*.65,s*.4,s*1.3),n.fillRect(-s*.65,-s*.2,s*1.3,s*.4);break;case"pill":n.save(),n.rotate(-.5),n.fillStyle="#fff",n.beginPath(),n.roundRect(-s*.7,-s*.25,s*.7,s*.5,[s*.25,0,0,s*.25]),n.fill(),n.fillStyle="#e8572a",n.beginPath(),n.roundRect(0,-s*.25,s*.7,s*.5,[0,s*.25,s*.25,0]),n.fill(),n.restore(),o(s*.5,s*.45,s*.2,"#fff");break;case"drop":n.fillStyle="#3d8fd6",n.beginPath(),n.moveTo(0,-s*.8),n.bezierCurveTo(s*.7,0,s*.6,s*.7,0,s*.7),n.bezierCurveTo(-s*.6,s*.7,-s*.7,0,0,-s*.8),n.fill(),a(-s*.2,s*.2,s*.12,s*.2,.3,"rgba(255,255,255,0.5)");break;case"bolt":n.fillStyle="#f5c518",n.beginPath(),n.moveTo(s*.1,-s*.8),n.lineTo(-s*.45,s*.1),n.lineTo(-s*.05,s*.1),n.lineTo(-s*.2,s*.8),n.lineTo(s*.45,-s*.15),n.lineTo(s*.05,-s*.15),n.closePath(),n.fill();break;case"flame":n.fillStyle="#f08a1c",n.beginPath(),n.moveTo(0,-s*.85),n.bezierCurveTo(s*.7,-s*.1,s*.55,s*.75,0,s*.75),n.bezierCurveTo(-s*.55,s*.75,-s*.6,0,0,-s*.85),n.fill(),n.fillStyle="#ffd34a",n.beginPath(),n.moveTo(0,-s*.2),n.bezierCurveTo(s*.35,s*.2,s*.3,s*.65,0,s*.65),n.bezierCurveTo(-s*.3,s*.65,-s*.3,s*.2,0,-s*.2),n.fill();break;case"paw":a(0,s*.3,s*.42,s*.36,0,"#3b2a1c"),a(-s*.48,-s*.15,s*.16,s*.21,-.3,"#3b2a1c"),a(-s*.17,-s*.45,s*.16,s*.21,-.1,"#3b2a1c"),a(s*.17,-s*.45,s*.16,s*.21,.1,"#3b2a1c"),a(s*.48,-s*.15,s*.16,s*.21,.3,"#3b2a1c");break;case"bug":a(0,0,s*.3,s*.45,0,"#3a2a1a"),n.strokeStyle="#3a2a1a",n.lineWidth=s*.06;for(let l=-1;l<=1;l++)n.beginPath(),n.moveTo(-s*.25,l*s*.2),n.lineTo(-s*.6,l*s*.35),n.moveTo(s*.25,l*s*.2),n.lineTo(s*.6,l*s*.35),n.stroke();n.strokeStyle="#d61f26",n.lineWidth=s*.12,n.beginPath(),n.arc(0,0,s*.8,0,Zt),n.moveTo(-s*.56,-s*.56),n.lineTo(s*.56,s*.56),n.stroke();break;case"leaf":case"seedling":n.strokeStyle="#3f7a2a",n.lineWidth=s*.08,n.beginPath(),n.moveTo(0,s*.8),n.lineTo(0,-s*.1),n.stroke(),a(-s*.3,-s*.2,s*.35,s*.16,-.5,"#5aa43a"),a(s*.3,-s*.35,s*.35,s*.16,.5,"#6bb84a");break;case"carrot":n.fillStyle="#ee7a1c",n.beginPath(),n.moveTo(-s*.3,-s*.5),n.lineTo(s*.3,-s*.5),n.lineTo(0,s*.9),n.fill(),a(-s*.15,-s*.75,s*.12,s*.3,-.3,"#4c9a2c"),a(s*.15,-s*.75,s*.12,s*.3,.3,"#4c9a2c");break;case"bean":n.strokeStyle="#4c9a2c",n.lineWidth=s*.18,n.lineCap="round";for(let l=-1;l<=1;l++)n.beginPath(),n.moveTo(l*s*.35,-s*.7),n.quadraticCurveTo(l*s*.35+s*.3,0,l*s*.35,s*.7),n.stroke();break;case"sun":o(0,0,s*.45,"#f5b51c"),n.strokeStyle="#f5b51c",n.lineWidth=s*.08;for(let l=0;l<12;l++){let c=l*Zt/12;n.beginPath(),n.moveTo(Math.cos(c)*s*.58,Math.sin(c)*s*.58),n.lineTo(Math.cos(c)*s*.85,Math.sin(c)*s*.85),n.stroke()}break;case"snow":n.strokeStyle="#fff",n.lineWidth=s*.08;for(let l=0;l<3;l++)n.save(),n.rotate(l*Math.PI/3),n.beginPath(),n.moveTo(0,-s*.8),n.lineTo(0,s*.8),n.moveTo(-s*.2,-s*.6),n.lineTo(0,-s*.4),n.lineTo(s*.2,-s*.6),n.moveTo(-s*.2,s*.6),n.lineTo(0,s*.4),n.lineTo(s*.2,s*.6),n.stroke(),n.restore();break;case"screw":n.fillStyle="#9aa0a6",n.fillRect(-s*.1,-s*.5,s*.2,s*1.2),n.fillRect(-s*.3,-s*.65,s*.6,s*.15),n.strokeStyle="#555",n.lineWidth=s*.05;for(let l=0;l<8;l++)n.beginPath(),n.moveTo(-s*.14,-s*.4+l*s*.13),n.lineTo(s*.14,-s*.34+l*s*.13),n.stroke();break;case"battery":n.fillStyle="#1a1a1a",n.fillRect(-s*.3,-s*.55,s*.6,s*1.3),n.fillStyle="#c98a2a",n.fillRect(-s*.3,-s*.55,s*.6,s*.4),n.fillStyle="#bbb",n.fillRect(-s*.1,-s*.7,s*.2,s*.15);break;case"tooth":n.fillStyle="#fff",n.beginPath(),n.moveTo(-s*.5,-s*.4),n.quadraticCurveTo(0,-s*.7,s*.5,-s*.4),n.lineTo(s*.35,s*.7),n.lineTo(s*.1,s*.1),n.lineTo(-s*.1,s*.1),n.lineTo(-s*.35,s*.7),n.closePath(),n.fill();break;case"bubble":for(let l=0;l<7;l++)n.strokeStyle="rgba(255,255,255,0.9)",n.lineWidth=s*.05,n.beginPath(),n.arc((r()-.5)*s*1.2,(r()-.5)*s*1.2,s*(.1+r()*.25),0,Zt),n.stroke();break;case"moon":o(0,0,s*.6,"#f2e6a0"),o(s*.28,-s*.15,s*.5,"rgba(20,30,70,1)");break;case"bottle":n.fillStyle="rgba(255,255,255,0.9)",n.fillRect(-s*.25,-s*.2,s*.5,s*.9),n.fillRect(-s*.1,-s*.5,s*.2,s*.3);break;default:o(0,0,s*.5,"rgba(255,255,255,0.6)")}n.restore()}function Px(n,t,e,i){n.save(),n.translate(t,e),n.strokeStyle="#c9a24a",n.lineWidth=i*.06,n.beginPath(),n.moveTo(0,i),n.lineTo(0,-i*.5),n.stroke(),n.fillStyle="#d9b25a";for(let s=0;s<5;s++)n.beginPath(),n.ellipse(-i*.1,-i*.4+s*i*.2,i*.1,i*.05,.6,0,Zt),n.ellipse(i*.1,-i*.4+s*i*.2,i*.1,i*.05,-.6,0,Zt),n.fill();n.restore()}function hf(n,t,e,i,s){n.fillStyle=i.b,n.fillRect(0,0,t,e),n.fillStyle=i.a,n.fillRect(0,0,t,e*.12),n.fillRect(0,e*.88,t,e*.12),n.fillStyle=Xn(i.a,.25),n.beginPath(),n.moveTo(t*.22,e*.62),n.bezierCurveTo(t*.4,e*.5,t*.6,e*.75,t*.78,e*.6),n.lineTo(t*.78,e*.88),n.lineTo(t*.22,e*.88),n.fill();let r=t*.5,o=t*.42;i.p&&(n.fillStyle="rgba(255,255,255,0.18)",n.beginPath(),n.ellipse(r,e*.66,o*.36,e*.2,0,0,Zt),n.fill(),el(n,i.p,r,e*.66,e*.17,s)),qt(n,i.t,r,e*.3,e*.2,{color:i.f,maxW:o,font:Zi,stroke:i.st}),i.s&&qt(n,i.s,r,e*.45,e*.08,{color:i.f,maxW:o*.9,weight:"bold"}),i.n&&qt(n,i.n,r,e*.94,e*.055,{color:i.nf||"#fff",maxW:o}),i.tag&&qt(n,i.tag,r,e*.06,e*.06,{color:"#fff",maxW:o}),cf(n,t*.04,e*.16,t*.16,e*.68,s),Je(n,t*.8,e*.18,t*.16,6,e*.045,s,"rgba(0,0,0,0.45)"),Eo(n,t*.82,e*.52,t*.12,e*.2,s),ae(n,t,e,s,.8)}function uf(n,t,e,i,s){n.fillStyle=i.b,n.fillRect(0,0,t,e),n.fillStyle=i.a,n.fillRect(0,0,t,e*.16),n.beginPath(),n.moveTo(0,e*.16),n.lineTo(t,e*.16),n.lineTo(t,e*.22),n.quadraticCurveTo(t*.5,e*.3,0,e*.22),n.fill(),i.tag&&(n.fillStyle=i.tc||"#e8302a",n.beginPath(),n.arc(t*.82,e*.3,Math.min(t,e)*.12,0,Zt),n.fill(),qt(n,i.tag,t*.82,e*.3,Math.min(t,e)*.06,{color:"#fff",maxW:Math.min(t,e)*.2})),i.top&&qt(n,i.top,t/2,e*.08,e*.07,{color:i.tf||"#fff",maxW:t*.86}),qt(n,i.t,t/2,e*(i.t2?.34:.4),Math.min(e*.13,t*.3),{color:i.f,maxW:t*.88,font:Zi,stroke:i.st}),i.t2&&qt(n,i.t2,t/2,e*.46,Math.min(e*.1,t*.24),{color:i.f,maxW:t*.88,font:Zi,stroke:i.st}),i.s&&qt(n,i.s,t/2,e*.56,Math.min(e*.055,t*.1),{color:i.f,maxW:t*.85}),i.p&&(n.fillStyle="rgba(255,255,255,0.16)",n.beginPath(),n.ellipse(t/2,e*.75,t*.36,e*.13,0,0,Zt),n.fill(),el(n,i.p,t/2,e*.75,Math.min(t*.32,e*.14),s)),i.n&&(n.fillStyle="rgba(0,0,0,0.25)",n.fillRect(0,e*.91,t,e*.09),qt(n,i.n,t/2,e*.955,e*.045,{color:"#fff",maxW:t*.9})),ae(n,t,e,s,.7)}function Lx(n,t,e,i,s){n.fillStyle=i.b,n.fillRect(0,0,t,e),n.fillStyle=i.a,n.fillRect(0,0,t,e*.16),i.food!==!1?cf(n,t*.1,e*.22,t*.8,e*.5,s):(n.fillStyle="#fff",n.fillRect(t*.08,e*.22,t*.84,e*.5),Je(n,t*.12,e*.25,t*.76,12,e*.035,s,"#333")),Eo(n,t*.2,e*.78,t*.6,e*.12,s),ae(n,t,e,s,.7)}function ot(n,t,e){return sn(bn,`box${n},${t},${e}`,()=>new we(n,t,e).translate(0,t/2,0))}function Q(n,t,e,i=16,s=!1){return sn(bn,`cyl${n},${t},${e},${i},${s}`,()=>new qi(n,t,e,i,1,s,Math.PI,Zt).translate(0,e/2,0))}function un(n,t=12,e=8){return sn(bn,`sph${n},${t},${e}`,()=>new $i(n,t,e))}function Jn(n,t=16){return sn(bn,`circ${n},${t}`,()=>new io(n,t).rotateX(-Math.PI/2))}function Ie(n,t,e=6,i=16,s=Zt){return sn(bn,`tor${n},${t},${e},${i},${s}`,()=>new za(n,t,e,i,s))}function He(n,t,e=16){return sn(bn,"lathe"+n+e,()=>new Fa(t.map(i=>new yt(Math.max(1e-4,i[0]),i[1])),e,Math.PI,Zt))}function Rn(n,t,e,i=16,s=6,r=!1){return sn(bn,"tube"+n,()=>new ao(new yr(t.map(o=>new I(o[0],o[1],o[2])),r),i,e,s,r))}function Qt(n,t,e,i){return sn(bn,`rbox${n},${t},${e},${i}`,()=>{let s=new we(n,t,e,3,3,3),r=s.attributes.position,o=s.attributes.normal,a=n/2,l=t/2,c=e/2,h=Math.min(i,a*.9,l*.9,c*.9),u=a-h,f=l-h,d=c-h,g=new I,x=new I,m=(p,M,y)=>Math.abs(Math.abs(p)-M/3)<1e-6?Math.sign(p)*y:p;for(let p=0;p<r.count;p++){g.set(m(r.getX(p),a,u),m(r.getY(p),l,f),m(r.getZ(p),c,d)),x.set(As.clamp(g.x,-u,u),As.clamp(g.y,-f,f),As.clamp(g.z,-d,d));let M=g.clone().sub(x);M.lengthSq()>1e-12&&(M.normalize(),g.copy(x).addScaledVector(M,h),o.setXYZ(p,M.x,M.y,M.z)),r.setXYZ(p,g.x,g.y+l,g.z)}return s})}function To(n,t,e,i=.08,s=6,r=8){return sn(bn,`pil${n},${t},${e},${i},${s},${r}`,()=>{let o=new we(n,t,e,s,r,1),a=o.attributes.position;for(let l=0;l<a.count;l++){let c=a.getX(l),h=a.getY(l),u=a.getZ(l),f=Math.abs(c)/(n/2),d=Math.abs(h)/(t/2),g=Math.sqrt(Math.max(0,1-f**4))*Math.sqrt(Math.max(0,1-d**3));i>0&&d>1-i*2&&(g=.06),g=Math.max(.06,g),a.setXYZ(l,c*(1-.04*(1-d)),h+t/2,u*g)}return o.computeVertexNormals(),o})}function ju(n,t,e,i=.001){return sn(bn,"ext"+n,()=>{let s=new ka(t(),{depth:e,bevelEnabled:i>0,bevelThickness:i,bevelSize:i,bevelSegments:1,curveSegments:6});return s.translate(0,0,-e/2),s})}function ye(n,t){return sn(Cx,n,()=>new We(t))}function et(n,t=.7,e=0){return ye(`c${n}|${t}|${e}`,{color:n,roughness:t,metalness:e})}function Y(n,t=.7,e=0,i={}){let s=`t${n?n.uuid:"none"}|${t}|${e}|${JSON.stringify(i)}`;return ye(s,{map:n,roughness:t,metalness:e,...i})}var st={get steel(){return et(11844030,.38,.55)},get tin(){return et(13817304,.32,.6)},get alu(){return et(13225168,.3,.55)},get chrome(){return et(14212064,.22,.6)},get darkMetal(){return et(3816769,.5,.45)},get brass(){return et(12950085,.35,.6)},get blackPl(){return et(1908256,.55)},get whitePl(){return et(15526886,.45)},get greyPl(){return et(9080208,.55)},get rubber(){return et(1710618,.92)},get paper(){return et(15789282,.85)},get glass(){return ye("glass",{color:13624298,roughness:.08,metalness:.1,transparent:!0,opacity:.32,depthWrite:!1})},get clearPl(){return ye("clearpl",{color:15003378,roughness:.15,metalness:0,transparent:!0,opacity:.4,depthWrite:!1})}};function hs(n=0){return It("cardboard"+n,256,256,(t,e,i,s)=>{De(t,e,i,s,n===1?"#b99868":"#a9824f",.12,3e3,2),t.strokeStyle="rgba(80,55,25,0.18)",t.lineWidth=1;for(let r=0;r<i;r+=4+s()*3)t.beginPath(),t.moveTo(0,r),t.lineTo(e,r+(s()-.5)*3),t.stroke();ae(t,e,i,s,.6)})}function W0(n="FRAGILE",t=0){return It("carton"+n+t,512,512,(e,i,s,r)=>{De(e,i,s,r,"#ad8653",.1,4e3,2),e.strokeStyle="rgba(80,55,25,0.15)";for(let o=0;o<s;o+=5+r()*3)e.beginPath(),e.moveTo(0,o),e.lineTo(i,o),e.stroke();e.fillStyle="rgba(200,170,110,0.75)",e.fillRect(i*.43,0,i*.14,s),e.fillStyle="rgba(255,255,255,0.15)",e.fillRect(i*.45,0,i*.02,s),e.fillStyle="rgba(40,30,20,0.75)",qt(e,n,i*.22,s*.25,34,{color:"rgba(40,30,20,0.8)",maxW:i*.36,font:Zi}),qt(e,`${12+t%4*12} CT`,i*.78,s*.25,30,{color:"rgba(40,30,20,0.8)",maxW:i*.36});for(let o=0;o<2;o++){let a=i*(.72+o*.12),l=s*.72;e.beginPath(),e.moveTo(a,l-40),e.lineTo(a-18,l-12),e.lineTo(a-6,l-12),e.lineTo(a-6,l+30),e.lineTo(a+6,l+30),e.lineTo(a+6,l-12),e.lineTo(a+18,l-12),e.fill()}e.strokeStyle="rgba(40,30,20,0.7)",e.lineWidth=3,e.strokeRect(i*.06,s*.62,i*.3,s*.2),Je(e,i*.08,s*.65,i*.26,5,10,r,"rgba(40,30,20,0.6)"),ae(e,i,s,r,1.2)})}function Rr(n="#b98c5a",t="#8a5f35",e=""){return It("wood"+n+t+e,256,256,(i,s,r,o)=>{i.fillStyle=n,i.fillRect(0,0,s,r);for(let a=0;a<60;a++){i.strokeStyle=`rgba(${a%2?"90,55,25":"60,35,15"},${.08+o()*.2})`,i.lineWidth=1+o()*3;let l=o()*r;i.beginPath(),i.moveTo(0,l);for(let c=0;c<=s;c+=16)i.lineTo(c,l+Math.sin(c*.02+a)*4+(o()-.5)*2);i.stroke()}i.fillStyle=t,i.globalAlpha=.25;for(let a=0;a<3;a++)i.beginPath(),i.ellipse(o()*s,o()*r,6+o()*6,3+o()*3,0,0,Zt),i.fill();i.globalAlpha=1,ae(i,s,r,o,.5)},{repeat:[1,1]})}function Dx(){return It("bark",256,256,(n,t,e,i)=>{De(n,t,e,i,"#4f3b2a",.25,3e3,3);for(let s=0;s<40;s++){n.strokeStyle=`rgba(20,12,6,${.3+i()*.4})`,n.lineWidth=2+i()*4;let r=i()*t;n.beginPath(),n.moveTo(r,0);for(let o=0;o<=e;o+=20)n.lineTo(r+(i()-.5)*12,o);n.stroke()}n.fillStyle="rgba(110,120,80,0.25)";for(let s=0;s<8;s++)n.beginPath(),n.ellipse(i()*t,i()*e,10+i()*20,5+i()*10,i()*3,0,Zt),n.fill()},{repeat:[1,1]})}function Qu(n=!1){return It("endgrain"+n,128,128,(t,e,i,s)=>{t.fillStyle="#c9a26c",t.fillRect(0,0,e,i);let r=n?0:e/2,o=n?i:i/2;for(let a=1;a<26;a++)t.strokeStyle=`rgba(120,80,40,${.2+s()*.3})`,t.lineWidth=1+s(),t.beginPath(),t.arc(r,o,a*6+s()*2,0,Zt),t.stroke();t.strokeStyle="rgba(60,40,20,0.5)",t.lineWidth=1.5;for(let a=0;a<4;a++)t.beginPath(),t.moveTo(r,o),t.lineTo(r+(s()-.3)*e,o-s()*i),t.stroke()})}function _o(n,t=""){return It("knit"+n+t,128,128,(e,i,s,r)=>{e.fillStyle=n,e.fillRect(0,0,i,s);let o=Xn(n,-.35),a=Xn(n,.18);for(let l=0;l<i;l+=8)for(let c=0;c<s;c+=8)e.fillStyle=a,e.beginPath(),e.ellipse(l+2,c+4,2.2,4,-.5,0,Zt),e.ellipse(l+6,c+4,2.2,4,.5,0,Zt),e.fill(),e.fillStyle=o,e.fillRect(l+3.6,c,.8,8);ae(e,i,s,r,.3)},{repeat:[3,3]})}function Nx(n){return It("quilt"+n,256,256,(t,e,i,s)=>{let r=Xn(n,-.45),o=Xn(n,.22);for(let a=0;a<i;a+=32){let l=t.createLinearGradient(0,a,0,a+32);l.addColorStop(0,r),l.addColorStop(.15,n),l.addColorStop(.5,o),l.addColorStop(.85,n),l.addColorStop(1,r),t.fillStyle=l,t.fillRect(0,a,e,32),t.fillStyle="rgba(0,0,0,0.35)";for(let c=0;c<e;c+=6)t.fillRect(c,a+31,3,1)}ae(t,e,i,s,.4)},{repeat:[1,1]})}function ui(n,t=""){return It("nylon"+n+t,128,128,(e,i,s,r)=>{De(e,i,s,r,n,.06,1500,1),e.strokeStyle="rgba(0,0,0,0.12)",e.lineWidth=1;for(let o=0;o<i;o+=8)e.beginPath(),e.moveTo(o,0),e.lineTo(o,s),e.moveTo(0,o),e.lineTo(i,o),e.stroke();ae(e,i,s,r,.4)},{repeat:[2,2]})}function Ux(n,t,e){return It("plaid"+n+t+e,256,256,(i,s,r,o)=>{i.fillStyle=n,i.fillRect(0,0,s,r),i.globalAlpha=.55,i.fillStyle=t;for(let a=0;a<s;a+=64)i.fillRect(a,0,24,r),i.fillRect(0,a,s,24);i.fillStyle=e,i.globalAlpha=.7;for(let a=40;a<s;a+=64)i.fillRect(a,0,4,r),i.fillRect(0,a,s,4);i.globalAlpha=1,V0(i,s,r,o,.05)},{repeat:[1,1]})}function V0(n,t,e,i,s){for(let r=0;r<2500;r++){let o=(i()-.5)*s;n.fillStyle=o>0?`rgba(255,255,255,${o})`:`rgba(0,0,0,${-o})`,n.fillRect(i()*t,i()*e,2,2)}}function Ar(n="#b9bec4",t=""){return It("brushed"+n+t,128,128,(e,i,s,r)=>{e.fillStyle=n,e.fillRect(0,0,i,s);for(let o=0;o<300;o++)e.fillStyle=r()<.5?"rgba(255,255,255,0.12)":"rgba(0,0,0,0.1)",e.fillRect(0,r()*s,i,1);ae(e,i,s,r,.5)})}function G0(n,t=""){return It("paint"+n+t,256,256,(e,i,s,r)=>{De(e,i,s,r,n,.06,2e3,2);for(let o=0;o<40;o++)e.fillStyle=r()<.6?"rgba(70,70,72,0.85)":"rgba(110,60,30,0.6)",e.beginPath(),e.ellipse(r()*i,r()*s,1+r()*6,1+r()*3,r()*3,0,Zt),e.fill();ae(e,i,s,r,.8)})}function Ox(n=""){return It("lid"+n,128,128,(t,e,i,s)=>{let r=t.createRadialGradient(64,64,0,64,64,64);r.addColorStop(0,"#d9dcdf"),r.addColorStop(1,"#a9adb2"),t.fillStyle=r,t.fillRect(0,0,e,i),t.strokeStyle="rgba(0,0,0,0.25)",t.lineWidth=2;for(let o of[60,54,46,38])t.beginPath(),t.arc(64,64,o,0,Zt),t.stroke();t.strokeStyle="rgba(255,255,255,0.4)",t.lineWidth=1;for(let o of[57,50,42])t.beginPath(),t.arc(64,64,o,0,Zt),t.stroke();ae(t,e,i,s,.5)})}function v(n,t,e,i=0,s=0,r=0,o=0,a=0,l=0,c=1,h=1,u=1){let f=new Vt(t,e);return f.position.set(i,s,r),f.rotation.set(o,a,l),(c!==1||h!==1||u!==1)&&f.scale.set(c,h,u),f.castShadow=!0,f.receiveShadow=!0,n.add(f),f}function Fx(n,t,e,i){return[t,t,e||t,e||t,n,i||t]}function fi(n,t=512,e=200){return It("wrap"+JSON.stringify(n)+t+"x"+e,t,e,(i,s,r,o)=>hf(i,s,r,n,o))}function jn(n,t=256,e=384){return It("front"+JSON.stringify(n)+t+"x"+e,t,e,(i,s,r,o)=>uf(i,s,r,n,o))}function kx(n,t=128,e=256){return It("side"+n.b+n.a+(n.food===!1)+t+"x"+e,t,e,(i,s,r,o)=>Lx(i,s,r,n,o))}function Wn(n,t,e,i,s,r={}){let o=Y(jn(s,r.tw||256,r.th||Math.round(256*e/t)),r.rough??.65),a=Y(kx(s,128,256),r.rough??.65),l=et(new Yt(s.a).getHex(),r.rough??.65),c=r.r?Qt(t,e,i,r.r):ot(t,e,i);return v(n,c,Fx(o,a,l,r.backSame?o:a))}function Bx(n){n.updateMatrixWorld(!0);let t=new de().copy(n.matrixWorld).invert(),e=new Map,i=new de,s=new ce,r=new I,o=new I;n.traverse(l=>{if(!l.isMesh)return;i.multiplyMatrices(t,l.matrixWorld),s.getNormalMatrix(i);let c=i.determinant()<0,h=l.geometry,u=h.attributes.position,f=h.attributes.normal,d=h.attributes.uv,g=h.index,x=Array.isArray(l.material)?l.material:null,m=x?h.groups.length?h.groups:[{start:0,count:g?g.count:u.count,materialIndex:0}]:[{start:0,count:g?g.count:u.count,materialIndex:-1}];for(let p of m){let M=x?x[p.materialIndex]:l.material;if(!M)continue;let y=e.get(M);y||(y={p:[],n:[],u:[]},e.set(M,y));let _=Math.min(p.start+p.count,g?g.count:u.count);for(let D=p.start;D+2<_;D+=3){let C=c?[D,D+2,D+1]:[D,D+1,D+2];for(let P of C){let N=g?g.getX(P):P;r.fromBufferAttribute(u,N).applyMatrix4(i),y.p.push(r.x,r.y,r.z),f?(o.fromBufferAttribute(f,N).applyMatrix3(s).normalize(),y.n.push(o.x,o.y,o.z)):y.n.push(0,1,0),d?y.u.push(d.getX(N),d.getY(N)):y.u.push(0,0)}}}});let a=new jt;for(let[l,c]of e){if(!c.p.length)continue;let h=new Pe;h.setAttribute("position",new oe(c.p,3)),h.setAttribute("normal",new oe(c.n,3)),h.setAttribute("uv",new oe(c.u,2)),h.computeBoundingSphere();let u=new Vt(h,l);u.castShadow=!l.transparent,u.receiveShadow=!0,a.add(u)}return a.children.sort((l,c)=>(l.material.transparent?1:0)-(c.material.transparent?1:0)),a}function ff(n,t,e=!1){let i=Bx(n),s=new jt;s.add(i),s.updateMatrixWorld(!0);let r=new zn().setFromObject(i),o=new I;r.getSize(o);let a=new I;return r.getCenter(a),i.position.set(-a.x,e?0:-r.min.y,-a.z),s.userData.height=o.y,s.userData.radius=Math.max(.06,Math.hypot(o.x,o.z)/2),s.userData.kind=t,s.name=t,s}function tf(n,t,e,i,s={}){let r=Y(fi(i,512,Math.round(512*e/(Zt*t))),.5);v(n,Q(t*.985,t*.985,e*.98,18,!0),st.tin,0,e*.01,0),v(n,Q(t,t,e*.84,18,!0),r,0,e*.08,0),v(n,Ie(t*.975,t*.04,4,18),st.tin,0,e-t*.04,0,Math.PI/2),v(n,Ie(t*.975,t*.04,4,18),st.tin,0,t*.04,0,Math.PI/2),v(n,Jn(t*.96,18),Y(Ox(),.35,.5),0,e-t*.05,0),v(n,Jn(t*.96,18),st.tin,0,.001,0,Math.PI),s.tab&&(v(n,Ie(t*.22,t*.05,3,10),st.alu,t*.3,e-t*.035,0,Math.PI/2,0,0,1,1.4,1),v(n,Q(t*.07,t*.07,t*.03,8),st.alu,0,e-t*.06,0))}function yo(n,t,e,i,s,r,o,a,l=.02,c={}){v(n,He(JSON.stringify(t),t,18),i);let h=t[t.length-1];if(e){let u=c.front?jn(e,256,160):fi(e,512,Math.round(512*(o-r)/(Zt*a))),f=v(n,Q(a,a,o-r,18,!0),Y(u,c.labRough??.5),0,r,0);c.labelSide&&(f.material=[Y(u,.5)])}if(s){let u=Math.max(h[0]*1.12,c.capR||0);v(n,Q(u,u,l,16),s,0,h[1],0),v(n,Q(u*.92,u*.92,.002,16),s,0,h[1]+l,0)}}function zx(n){return It("ribcap"+n,64,32,(t,e,i,s)=>{t.fillStyle=n,t.fillRect(0,0,e,i),t.fillStyle="rgba(0,0,0,0.25)";for(let r=0;r<e;r+=3)t.fillRect(r,0,1,i)})}function Ai(n){return Y(zx(n),.45)}function Hx(n,t,e){return It("rx"+n+t+e,512,160,(i,s,r,o)=>{i.fillStyle="#fbfbf7",i.fillRect(0,0,s,r),i.fillStyle="#1d5fa8",i.fillRect(0,0,s,r*.18),qt(i,"PHARMACY  Rx",s*.3,r*.09,r*.12,{color:"#fff",maxW:s*.4}),qt(i,n,s*.3,r*.36,r*.15,{color:"#111",maxW:s*.42,align:"center"}),qt(i,t,s*.3,r*.56,r*.08,{color:"#222",maxW:s*.44}),Je(i,s*.08,r*.68,s*.45,3,r*.07,o,"#333"),i.fillStyle="#f2c21b",i.fillRect(s*.62,r*.25,s*.32,r*.25),qt(i,"FINISH ALL",s*.78,r*.37,r*.09,{color:"#111",maxW:s*.28}),Eo(i,s*.66,r*.62,s*.24,r*.22,o),ae(i,s,r,o,.5)})}function Ri(n){return It("band"+JSON.stringify(n),512,128,(t,e,i,s)=>{t.fillStyle=n.b,t.fillRect(0,0,e,i),t.fillStyle=n.a,t.fillRect(0,0,e,i*.15),t.fillRect(0,i*.85,e,i*.15),qt(t,n.t,e*.5,i*.42,i*.36,{color:n.f,maxW:e*.45,font:Zi}),n.s&&qt(t,n.s,e*.5,i*.7,i*.13,{color:n.f,maxW:e*.45}),Je(t,e*.05,i*.3,e*.18,4,i*.1,s,"rgba(0,0,0,0.5)"),Eo(t,e*.8,i*.3,e*.12,i*.35,s),ae(t,e,i,s,.5)})}function ef(n,t,e,i,s=.003){let r=Y(jn(i,256,Math.round(256*e/t)),.6);return v(n,ot(t,s,e),[et(14540253,.7),et(14540253,.7),r,et(15658734,.8),et(14540253,.7),et(14540253,.7)],0,0,0,0,0,0)}function hi(n,t,e,i,s,r=.45,o=.15,a=.06){let l=jn(s,256,Math.round(256*e/t));return v(n,To(t,e,i,a),[Y(l,.5),Y(l,.5),et(new Yt(s.b).getHex(),r,o),et(new Yt(s.b).getHex(),r,o),Y(l,r,o),Y(l,r,o)])}function nf(n,t,e,i){let s=i.th;v(n,Qt(.44,s,.56,s*.45),t,0,0,.02),v(n,Qt(.5,s*.9,.16,s*.4),t,0,.002,-.2);for(let r of[-1,1]){let o=[[r*.2,0,-.22],[r*.33,0,-.17],[r*.4,0,-.02],[r*.43,0,.17]];v(n,Rn("sleeve"+r+i.sleeveR,o,i.sleeveR,8,5),t,0,s*.5,0,0,0,0,1,s/(i.sleeveR*2.1),1),v(n,Q(i.sleeveR*.85,i.sleeveR*.85,.05,8),e,r*.432,s*.5,.17,Math.PI/2,0,0,1,1,s/(i.sleeveR*1.9)),v(n,ot(.12,.004,.012),i.rain?st.blackPl:et(1118481,.6),r*.11,s,.12,0,r*.5,0)}if(v(n,To(.3,.22,s*1.1,0,4,5),t,0,s*.55,-.27,-Math.PI/2,0,0),i.fur&&v(n,Ie(.13,.028,4,12),i.fur,0,s*.75,-.39,Math.PI/2,0,0,1.1,.95,.5),i.rain)for(let r of[-1,1])v(n,Rn("cord"+r,[[r*.05,0,0],[r*.07,0,.05],[r*.06,0,.1]],.003,6,3),st.blackPl,0,s+.002,-.28),v(n,Q(.007,.007,.016,6),st.blackPl,r*.06,s+.004,-.17,Math.PI/2);v(n,ot(.012,.004,.55),st.darkMetal,0,s-5e-4,.02),v(n,ot(.012,.006,.03),st.steel,0,s,-.12),v(n,ot(.06,.002,.03),Y(Ri({t:i.rain?"RAIN SHELL":"INSULATED",s:i.rain?"WATERPROOF":"DOWN ALTERNATIVE",b:"#f4f1ea",f:"#111",a:"#111"}),.6),0,s*.9,-.33)}var Cr=[{t:"BAKED BEANS",s:"IN TOMATO SAUCE",n:"NET WT 15 OZ (425g)",b:"#e8a33a",f:"#5a1d0a",a:"#7a2a10",p:"beans"},{t:"CHICKEN SOUP",s:"WITH NOODLES",n:"NET WT 10.5 OZ (298g)",b:"#f4f1ea",f:"#c41e1e",a:"#c41e1e",p:"soup"},{t:"SWEET CORN",s:"WHOLE KERNEL",n:"NET WT 15.25 OZ (432g)",b:"#2f7a32",f:"#ffe14a",a:"#1d5220",p:"corn"},{t:"DICED TOMATOES",s:"NO SALT ADDED",n:"NET WT 14.5 OZ (411g)",b:"#b81d18",f:"#fff",a:"#2f6a2a",p:"tomato"},{t:"BEEF CHILI",s:"WITH BEANS",n:"NET WT 15 OZ (425g)",b:"#3a1a10",f:"#f3c04a",a:"#b5321a",p:"chili"},{t:"GREEN PEAS",s:"SWEET TENDER",n:"NET WT 15 OZ (425g)",b:"#e9efe2",f:"#2f6a2a",a:"#3f8a28",p:"peas"}],df=[{t:"PEACH HALVES",s:"IN LIGHT SYRUP",n:"NET WT 15.25 OZ (432g)",b:"#fbe6c4",f:"#b8501a",a:"#f39a42",p:"peach"},{t:"FRUIT COCKTAIL",s:"IN 100% JUICE",n:"NET WT 15 OZ (425g)",b:"#2b4f9a",f:"#fff",a:"#f2c21b",p:"fruit"},{t:"PEAR HALVES",s:"BARTLETT",n:"NET WT 15 OZ (425g)",b:"#e7efc8",f:"#4f6a1a",a:"#9ab83a",p:"apple"}],nl={canned_food(n,t){tf(n,.038,.112,xe(t,Cr))},canned_fruit(n,t){tf(n,.038,.11,xe(t,df),{tab:!0})},dry_food(n,t){t()<.5?hi(n,.17,.25,.08,{t:"LONG GRAIN",t2:"WHITE RICE",s:"ENRICHED",n:"NET WT 2 LB (907g)",b:"#f6f3ea",f:"#1d4f8a",a:"#1d4f8a",p:"grain",top:"PANTRY"},.5,.05):Wn(n,.15,.24,.06,{t:"PENNE",t2:"RIGATE",s:"ENRICHED MACARONI",n:"NET WT 16 OZ (1 LB) 454g",b:"#1d4f9a",f:"#fff",a:"#f2c21b",tf:"#1d4f9a",p:"grain",top:"NO. 41"})},peanut_butter(n,t){yo(n,[[0,0],[.042,0],[.046,.006],[.046,.1],[.042,.112],[.036,.116],[.036,.122]],{t:"PEANUT BUTTER",s:"CREAMY",n:"NET WT 16 OZ (454g)",b:"#f5e6c0",f:"#8a3a12",a:"#c8321e",p:"peanut"},et(10119724,.35),Ai(xe(t,["#c8321e","#1d4f9a","#2f7a32"])),.012,.095,.0465,.025,{capR:.043})},snacks(n,t){let e=xe(t,[{t:"SALTINE",t2:"CRACKERS",s:"ORIGINAL",n:"NET WT 16 OZ (454g)",b:"#f4f1ea",f:"#c41e1e",a:"#c41e1e",p:"grain",top:"4 SLEEVES"},{t:"GRAHAM",t2:"CRACKERS",s:"HONEY",n:"NET WT 14.4 OZ (408g)",b:"#e3c07a",f:"#5a2a0a",a:"#2b4f9a",p:"grain",top:"FAMILY SIZE"}]);Wn(n,.2,.22,.07,e)},formula(n){hi(n,.13,.19,.05,{t:"LIQUID",t2:"NUTRITION",s:"COMPLETE  1.0 KCAL/ML",n:"1000 mL  TUBE FEEDING OR ORAL",b:"#fbfbf7",f:"#1d5fa8",a:"#3aa7a0",p:"drop",top:"MEDICAL"},.35,.05,.05),v(n,Q(.009,.009,.02,12),st.whitePl,.03,.185,0),v(n,Q(.013,.013,.014,12),Ai("#3aa7a0"),.03,.2,0)},dog_food(n){hi(n,.42,.62,.16,{t:"DOG FOOD",s:"CHICKEN & RICE  ADULT",n:"NET WT 15 LB (6.8 kg)",b:"#2f7a32",f:"#fff",a:"#f2c21b",tf:"#2f7a32",p:"paw",top:"COMPLETE NUTRITION",tag:"NEW",st:"#14401a"},.7,.02,.04)},energy_bar(n,t){Wn(n,.16,.05,.09,{t:"ENERGY BARS",s:"OATS & HONEY  6 BARS",n:"6 x 1.4 OZ (40g)",b:"#f08a1c",f:"#fff",a:"#5a2a0a",p:"oats",st:"#7a3a0a"},{tw:256,th:96});let i=new jt;hi(i,.04,.13,.016,{t:"OAT BAR",b:"#f08a1c",f:"#fff",a:"#5a2a0a"},.4,.2,.08),i.rotation.set(-Math.PI/2,0,.3+t()*.4),i.position.set(-.01,.058,.06),n.add(i)},instant_noodles(n,t){t()<.5?(v(n,He("noodlecup",[[0,0],[.037,0],[.038,.004],[.049,.1],[.051,.102]],18),et(16052714,.7)),v(n,Q(.05,.0385,.094,18,!0),Y(fi({t:"INSTANT NOODLES",s:"CHICKEN FLAVOR",n:"NET WT 2.25 OZ (64g)",b:"#f4f1ea",f:"#c41e1e",a:"#f2c21b",p:"noodle"},512,160),.6),0,.004,0),v(n,Jn(.051,18),Y(It("foillid",128,128,(i,s,r,o)=>{i.fillStyle="#d8d8d0",i.fillRect(0,0,s,r),i.fillStyle="#c41e1e",i.beginPath(),i.arc(64,64,40,0,Zt),i.fill(),qt(i,"PEEL",64,64,18,{color:"#fff"}),ae(i,s,r,o,.5)}),.35,.4),0,.103,0)):hi(n,.12,.16,.035,{t:"RAMEN",t2:"NOODLES",s:"BEEF FLAVOR",n:"NET WT 3 OZ (85g)",b:"#c41e1e",f:"#fff",a:"#f2c21b",tf:"#c41e1e",p:"noodle",top:"QUICK 3 MIN"},.4,.15).rotation.x=-Math.PI/2},chips(n,t){let e=xe(t,[{t:"POTATO",t2:"CHIPS",s:"SEA SALT",n:"NET WT 8 OZ (226g)",b:"#f2c21b",f:"#c41e1e",a:"#c41e1e",p:"chip",top:"KETTLE COOKED",st:"#fff"},{t:"TORTILLA",t2:"CHIPS",s:"RESTAURANT STYLE",n:"NET WT 11 OZ (311g)",b:"#2b4f9a",f:"#fff",a:"#f2c21b",tf:"#2b4f9a",p:"chip",top:"FAMILY SIZE"}]);hi(n,.21,.3,.08,e,.3,.35,.05)},jerky(n){hi(n,.14,.2,.035,{t:"BEEF JERKY",s:"ORIGINAL  HIGH PROTEIN",n:"NET WT 3.25 OZ (92g)",b:"#2a2420",f:"#f2c21b",a:"#8a2a12",p:"meat",top:"RESEALABLE"},.4,.2,.06).rotation.x=-Math.PI/2},oatmeal(n){v(n,Q(.064,.064,.18,20,!0),Y(fi({t:"OLD FASHIONED OATS",s:"100% WHOLE GRAIN",n:"NET WT 42 OZ (2 LB 10 OZ) 1.19kg",b:"#f4f1ea",f:"#2a4f8a",a:"#2a4f8a",p:"oats"},512,220),.75)),v(n,Q(.066,.066,.025,20),et(2772874,.4),0,.17,0),v(n,Jn(.063,20),et(8022608,.9),0,.001,0,Math.PI)},soda(n,t){let e=xe(t,[{t:"COLA",s:"CLASSIC",n:"12 FL OZ (355 mL)",b:"#a8141a",f:"#fff",a:"#5a0a0a",p:"bubble"},{t:"LEMON LIME",s:"CAFFEINE FREE",n:"12 FL OZ (355 mL)",b:"#2f8a3a",f:"#f6ee4a",a:"#0f4a1a",p:"bubble"},{t:"ROOT BEER",s:"OLD FASHIONED",n:"12 FL OZ (355 mL)",b:"#4a2412",f:"#f3c04a",a:"#1a0a05",p:"bubble"}]);v(n,He("sodacan",[[0,.004],[.026,0],[.033,.01],[.033,.104],[.027,.118],[.0265,.122]],18),st.alu),v(n,Q(.0332,.0332,.092,18,!0),Y(fi(e,512,150),.3,.3),0,.011,0),v(n,Jn(.026,16),st.alu,0,.12,0),v(n,Ie(.0065,.0015,3,8),st.alu,.008,.121,0,Math.PI/2,0,0,1,1.5,1)},sports_drink(n,t){let e=xe(t,[[2785238,"GLACIER BLUE","#2a7fd6"],[15763996,"ORANGE","#f08a1c"],[14035002,"FRUIT PUNCH","#d6283a"]]);v(n,He("sportsbottle",[[0,0],[.033,0],[.036,.01],[.036,.08],[.031,.095],[.036,.11],[.036,.17],[.022,.2],[.016,.205],[.016,.215]],18),ye("sport"+e[0],{color:e[0],roughness:.15,transparent:!0,opacity:.82})),v(n,Q(.0365,.0365,.055,18,!0),Y(fi({t:"SPORTS DRINK",s:e[1],n:"28 FL OZ (828 mL)",b:"#111",f:"#fff",a:e[2],p:"bolt"},512,120),.4),0,.112,0),v(n,Q(.018,.018,.022,16),Ai(e[2]),0,.212,0)},water_bottle(n){let t=ye("jugwater",{color:14412270,roughness:.2,transparent:!0,opacity:.55});v(n,Qt(.15,.22,.15,.025),t),v(n,Qt(.13,.2,.13,.02),ye("water",{color:10274520,roughness:.1,transparent:!0,opacity:.45,depthWrite:!1}),0,.005,0),v(n,He("jugtop",[[.075,0],[.065,.03],[.02,.05],[.018,.06]],12),t,0,.215,0),v(n,Q(.021,.021,.016,14),Ai("#2a6fd6"),0,.27,0),v(n,Rn("jughandle",[[.04,.2,-.06],[.06,.25,-.06],[.065,.27,-.02],[.05,.25,.02],[.04,.2,.04]],.012,12,6),t,0,0,0);let e=Y(Ri({t:"DRINKING WATER",s:"1 GALLON (3.78 L)  PURIFIED",b:"#ffffff",f:"#1d5fa8",a:"#3d8fd6"}),.5);v(n,ot(.152,.07,.152),[e,e,st.clearPl,st.clearPl,e,e],0,.08,0)},saline(n){let t=It("salinebag",256,384,(s,r,o,a)=>{s.fillStyle="#e9f0f2",s.fillRect(0,0,r,o),s.strokeStyle="#1d5fa8",s.lineWidth=3,s.strokeRect(r*.1,o*.12,r*.8,o*.62),qt(s,"0.9% SODIUM",r/2,o*.22,30,{color:"#1d5fa8",maxW:r*.75,font:Zi}),qt(s,"CHLORIDE",r/2,o*.3,30,{color:"#1d5fa8",maxW:r*.75,font:Zi}),qt(s,"INJECTION USP",r/2,o*.37,16,{color:"#1d5fa8",maxW:r*.75}),qt(s,"1000 mL",r/2,o*.47,40,{color:"#111",maxW:r*.7}),Je(s,r*.15,o*.55,r*.7,6,10,a,"rgba(20,60,120,0.6)");for(let l=1;l<10;l++)s.fillStyle="#333",s.fillRect(r*.88,o*(.12+l*.062),l%2?10:18,2);qt(s,"STERILE  SINGLE USE",r/2,o*.82,14,{color:"#1d5fa8",maxW:r*.8}),ae(s,r,o,a,.4)}),e=Y(t,.2,0,{transparent:!0,opacity:.92}),i=v(n,To(.15,.25,.03,.05),[e,e,st.clearPl,st.clearPl,e,e]);i.rotation.x=-Math.PI/2,i.position.y=.015,i.position.z=.125,v(n,Q(.005,.005,.04,8),st.whitePl,-.02,.012,.135,Math.PI/2),v(n,Q(.006,.006,.03,8),et(2781142,.5),.025,.012,.13,Math.PI/2)},ors(n){Wn(n,.1,.13,.04,{t:"ORAL",t2:"REHYDRATION SALTS",s:"WHO FORMULA  10 SACHETS",n:"DISSOLVE 1 SACHET IN 1 L WATER",b:"#f4f8fb",f:"#1d5fa8",a:"#3aa7a0",p:"drop",top:"ELECTROLYTES"});for(let e=0;e<2;e++){let i=new jt;hi(i,.07,.1,.008,{t:"ORS",s:"1 L SACHET",b:"#fbfbf7",f:"#1d5fa8",a:"#3aa7a0"},.35,.25,.08),i.rotation.set(-Math.PI/2,0,.4+e*.5),i.position.set(.08+e*.03,.005+e*.006,.07),n.add(i)}},first_aid(n){let t=et(13115422,.45),e=It("fakit",256,192,(s,r,o,a)=>{s.fillStyle="#c8201e",s.fillRect(0,0,r,o),s.fillStyle="#fff",s.beginPath(),s.roundRect(r*.34,o*.14,r*.32,o*.56,10),s.fill(),el(s,"cross",r/2,o*.42,o*.2,a),qt(s,"FIRST AID",r/2,o*.84,o*.13,{color:"#fff",maxW:r*.8}),ae(s,r,o,a,.8)}),i=Y(e,.45);v(n,Qt(.28,.055,.2,.015),[t,t,i,t,t,t]),v(n,Qt(.28,.035,.2,.015),t,0,.056,0),v(n,Qt(.284,.004,.204,.002),et(15658734,.5),0,.054,0),v(n,ot(.24,.002,.17),[t,t,i,t,t,t],0,.091,0),v(n,Rn("fahandle",[[-.06,.05,.1],[-.05,.05,.125],[.05,.05,.125],[.06,.05,.1]],.008,10,6),st.whitePl);for(let s of[-.09,.09])v(n,ot(.025,.03,.008),st.whitePl,s,.04,.102)},antibiotics(n,t){let e=ye("amber",{color:11887901,roughness:.2,transparent:!0,opacity:.85});v(n,He("rxbottle",[[0,0],[.019,0],[.021,.004],[.021,.07],[.018,.074],[.018,.078]],16),e);let s=xe(t,["AMOXICILLIN 500 MG","DOXYCYCLINE 100 MG","CEPHALEXIN 500 MG"]);v(n,Q(.0212,.0212,.045,16,!0),Y(Hx(s,"TAKE 1 CAPSULE 3 TIMES DAILY",1),.6),0,.012,0),v(n,Q(.023,.023,.018,16),Ai("#f4f4f0"),0,.075,0),v(n,Jn(.022,16),et(16053488,.5),0,.0935,0)},pain_pills(n){yo(n,[[0,0],[.026,0],[.029,.006],[.029,.085],[.02,.098],[.016,.1]],{t:"PAIN RELIEVER",s:"ACETAMINOPHEN 500 MG",n:"100 CAPLETS",b:"#f4f4f0",f:"#c41e1e",a:"#c41e1e",p:"pill"},et(16053488,.4),Ai("#f4f4f0"),.01,.08,.0293,.02,{capR:.02})},ibuprofen(n){Wn(n,.075,.115,.04,{t:"IBUPROFEN",s:"200 MG  PAIN RELIEVER",n:"50 COATED TABLETS",b:"#f08a1c",f:"#fff",a:"#7a2a0a",p:"pill",top:"NSAID",st:"#a0400a"});let t=[[0,0],[.018,0],[.02,.004],[.02,.06],[.014,.068],[.012,.07]],e=new jt;yo(e,t,{t:"IBUPROFEN",s:"200 MG",n:"50 TABLETS",b:"#fff",f:"#f08a1c",a:"#f08a1c",p:"pill"},et(16053488,.4),Ai("#f08a1c"),.008,.055,.0203,.016,{capR:.015}),e.position.set(.065,0,.01),n.add(e)},vitamins(n){yo(n,[[0,0],[.034,0],[.037,.006],[.037,.105],[.03,.115],[.028,.118]],{t:"MULTIVITAMIN",s:"DAILY  ADULT 50+",n:"120 TABLETS",b:"#2a2a6a",f:"#f2c21b",a:"#f2c21b",p:"sun"},et(2302799,.35),Ai("#23234f"),.012,.1,.0373,.022,{capR:.031})},bandages(n){Wn(n,.1,.13,.045,{t:"ADHESIVE",t2:"BANDAGES",s:"FLEXIBLE FABRIC  ASSORTED",n:"60 BANDAGES",b:"#f4f1ea",f:"#c41e1e",a:"#e0b38a",tf:"#5a2a0a",p:"cross",top:"STERILE"}),v(n,Q(.025,.025,.05,16),Y(It("gauze",64,64,(t,e,i,s)=>{De(t,e,i,s,"#f3f0e8",.08,600,1),t.strokeStyle="rgba(0,0,0,0.08)";for(let r=0;r<e;r+=3)t.beginPath(),t.moveTo(r,0),t.lineTo(r,i),t.moveTo(0,r),t.lineTo(e,r),t.stroke()}),.95),.085,.025,.02,Math.PI/2,0,.3)},water_tablets(n){yo(n,[[0,0],[.018,0],[.02,.004],[.02,.055],[.013,.062],[.012,.065]],{t:"WATER PURIFICATION",s:"TABLETS  KILLS GERMS",n:"50 TABLETS  TREATS 25 L",b:"#4a5a2a",f:"#fff",a:"#f2c21b",p:"drop"},ye("brownglass",{color:5913114,roughness:.15,transparent:!0,opacity:.88}),Ai("#3a3a3a"),.008,.05,.0203,.016,{capR:.015})},first_aid_kit:null,flashlight(n){let t=[[0,0],[.016,0],[.017,.005],[.017,.13],[.019,.14],[.026,.165],[.027,.2],[.025,.203],[0,.203]],e=Y(It("knurl",64,64,(s,r,o)=>{s.fillStyle="#2b2d30",s.fillRect(0,0,r,o),s.strokeStyle="rgba(255,255,255,0.18)";for(let a=-64;a<128;a+=5)s.beginPath(),s.moveTo(a,0),s.lineTo(a+64,o),s.moveTo(a+64,0),s.lineTo(a,o),s.stroke()}),.45,.4),i=new jt;v(i,He("flashlight",t,16),et(2829616,.4,.45)),v(i,Q(.0172,.0172,.09,16,!0),e,0,.02,0),v(i,Jn(.024,16),ye("lens",{color:15660799,roughness:.05,emissive:2236962}),0,.2015,0),v(i,Q(.006,.006,.006,8),et(1118481,.8),0,.15,.019,Math.PI/2),v(i,Ie(.026,.0025,4,16),st.alu,0,.2,0,Math.PI/2),i.rotation.z=Math.PI/2,i.position.y=.027,n.add(i)},batteries(n){ef(n,.12,.17,{t:"AA BATTERIES",s:"ALKALINE  1.5V",n:"8 PACK",b:"#111",f:"#f2c21b",a:"#c98a2a",p:"battery",top:"LONG LASTING"});let t=Y(It("aacell",128,64,(e,i,s)=>{e.fillStyle="#151515",e.fillRect(0,0,i,s),e.fillStyle="#c98a2a",e.fillRect(0,0,i*.35,s),qt(e,"AA",i*.65,s/2,22,{color:"#f2c21b"})}),.4,.3);for(let e=0;e<8;e++){let i=-.042+e%4*.028,s=e<4?-.035:.035;v(n,Q(.007,.007,.05,10),t,i,.01,s-.025,Math.PI/2)}v(n,Qt(.112,.016,.13,.006),st.clearPl,0,.003,-.002)},pry_bar(n){let t=Y(G0("#c4221c","pry"),.5,.2);v(n,Rn("prybar",[[-.33,.012,0],[-.1,.012,0],[.18,.012,0],[.26,.016,0],[.31,.04,0],[.31,.075,0],[.28,.09,0],[.25,.085,0]],.011,40,6),t),v(n,ot(.05,.006,.026),st.steel,-.355,.006,0,0,0,.12),v(n,ot(.02,.008,.026),st.darkMetal,.24,.083,0,0,0,.5)},backpack(n,t){let e=xe(t,["#2f3f2a","#22304a","#3a3a3c","#5a2a22"]),i=Y(ui(e),.8),s=Y(ui(Xn(e,-.3),"dk"),.8);v(n,Qt(.3,.46,.17,.05),i),v(n,Qt(.24,.2,.07,.03),s,0,.04,.1),v(n,ot(.2,.1,.04),i,0,.27,.095),v(n,Qt(.31,.09,.18,.03),s,0,.39,.002),v(n,ot(.22,.004,.004),st.blackPl,0,.235,.135),v(n,ot(.008,.02,.003),st.steel,.09,.225,.136);for(let r of[-.08,.08])v(n,Rn("bpstrap",[[0,.42,-.08],[0,.4,-.12],[0,.25,-.12],[0,.08,-.105],[0,.04,-.085]],.018,10,4),s,r,0,0,0,0,0,1,1,.45);v(n,Ie(.03,.006,4,10,Math.PI),s,0,.47,-.02,0,0,0);for(let r of[-1,1])v(n,ot(.03,.14,.1),Y(ui("#111111","mesh"),.9),r*.155,.02,0);for(let r of[-1,1])v(n,ot(.025,.03,.008),st.blackPl,r*.07,.15,.137)},winter_coat(n,t){let e=xe(t,["#22304a","#2f3a2a","#5a1d1a","#2a2a2c","#6a5a3a"]),i=Y(Nx(e),.75),s=Y(It("fur",128,128,(r,o,a,l)=>{De(r,o,a,l,"#9a8a72",.35,4e3,2);for(let c=0;c<600;c++){r.strokeStyle=l()<.5?"rgba(60,50,40,0.5)":"rgba(220,210,190,0.5)",r.beginPath();let h=l()*o,u=l()*a;r.moveTo(h,u),r.lineTo(h+(l()-.5)*8,u+6),r.stroke()}}),.95);nf(n,i,Y(_o(Xn(e,-.2),"coatcuff"),.95),{th:.075,sleeveR:.065,color:e,fur:s})},winter_hat(n,t){let e=xe(t,["#8a1d1a","#22304a","#3a5a2a","#7a6a50","#d8d2c4"]),i=Y(_o(e),.95);v(n,He("beanie",[[0,.17],[.04,.168],[.07,.155],[.088,.13],[.095,.09],[.095,.04]],18),i,0,0,0),v(n,Q(.1,.1,.06,18,!0),Y(_o(Xn(e,-.1),"cuff"),.95),0,.01,0),v(n,Ie(.097,.008,4,18),i,0,.012,0,Math.PI/2),v(n,Jn(.097,18),et(1710618,.95),0,.012,0),v(n,un(.035,8,6),Y(It("pom"+e,64,64,(s,r,o,a)=>{De(s,r,o,a,e,.4,900,2)}),1),0,.19,0)},gloves(n,t){let e=xe(t,["#1d1d1f","#3a2a1f","#2a3a4a"]),i=Y(ui(e,"glove"),.85),s=Y(_o(Xn(e,.1),"gcuff"),.95),r=(o,a,l,c)=>{let h=new jt;v(h,Qt(.09,.025,.1,.012),i,0,0,0);for(let u=0;u<4;u++)v(h,Q(.0095,.0105,.08-Math.abs(u-1.5)*.012,6),i,-.032+u*.021,.012,.035,Math.PI/2-.04,0,(u-1.5)*.05);v(h,Q(.011,.012,.06,6),i,c*.04,.012,0,Math.PI/2,0,c*.9),v(h,Q(.047,.05,.065,10),s,0,.014,-.045,-Math.PI/2,0,0,1,1,.45),h.position.set(o,.005,a),h.rotation.y=l,n.add(h)};r(-.05,0,.15,1),r(.06,.03,-.25,-1),n.children[n.children.length-1].position.y=.025},boots(n,t){let e=xe(t,["#5a3a22","#2a2622","#6a5a40"]),i=Y(It("leather"+e,128,128,(a,l,c,h)=>{De(a,l,c,h,e,.12,2500,2),a.strokeStyle="rgba(0,0,0,0.25)",a.setLineDash([4,3]),a.strokeRect(6,6,l-12,c-12),ae(a,l,c,h,.8)}),.75),s=Y(It("sole",128,32,(a,l,c)=>{a.fillStyle="#1b1b1b",a.fillRect(0,0,l,c),a.fillStyle="#333";for(let h=0;h<l;h+=8)a.fillRect(h,c*.4,4,c*.6)}),.95),r=et(12101770,1),o=(a,l)=>{let c=new jt;v(c,ot(.11,.035,.29),s,0,0,0),v(c,Qt(.1,.08,.27,.035),i,0,.03,.005),v(c,Q(.058,.062,.17,10),i,0,.05,-.065,0,0,0,.9,1,1.1),v(c,Ie(.055,.015,4,10),r,0,.22,-.065,Math.PI/2,0,0,.95,1.25,1);for(let h=0;h<4;h++)v(c,ot(.06,.004,.006),et(13153418,.9),0,.1+h*.025,0+(h<2?.05-h*.03:.002),-.3+(h<2?-.7:0),0,0);c.position.x=a,c.rotation.y=l,n.add(c)};o(-.065,.05),o(.065,-.08)},rain_jacket(n,t){let e=xe(t,["#e8b81b","#d8501c","#1d5fa8","#2f6a3a"]),i=Y(ui(e,"rain"),.3,.05);nf(n,i,Y(ui(Xn(e,-.3),"raincuff"),.4),{th:.035,sleeveR:.05,color:e,rain:!0})},firewood(n,t){let e=Y(Dx(),.95),i=Y(Qu(!0),.9),s=Y(Rr("#c9a26c","#8a6a3a","split"),.9),r=.4,o=[3,3,2],a=0;o.forEach((l,c)=>{for(let h=0;h<l;h++,a++){let u=.048+t()*.012,f=(h-(l-1)/2)*.095+(t()-.5)*.012;v(n,Q(u,u,r+(t()-.5)*.04,t()<.5?3:4),[t()<.45?s:e,i,i],f,.045+c*.078,-r/2+(t()-.5)*.03,Math.PI/2,t()*Zt,0)}});for(let l of[-.12,.12])v(n,Ie(.16,.004,4,20),et(13152384,.9),0,.12,l,0,0,0,1,.85,1);v(n,ot(.1,.001,.07),Y(Ri({t:"FIREWOOD",s:"KILN DRIED  0.75 CU FT",b:"#f4f1ea",f:"#5a2a0a",a:"#2f7a32"}),.8),0,.255,0)},propane_1lb(n){let t=et(3111474,.4,.2);v(n,He("propane",[[0,0],[.05,0],[.056,.01],[.056,.16],[.05,.185],[.03,.2],[.016,.205]],18),t),v(n,Q(.0565,.0565,.11,18,!0),Y(fi({t:"PROPANE",s:"CAMPING FUEL  CYLINDER",n:"NET WT 16.4 OZ (465g)  FLAMMABLE",b:"#2f7a32",f:"#fff",a:"#1d4a20",p:"flame"},512,160),.45,.15),0,.03,0),v(n,Q(.014,.016,.02,12),st.brass,0,.205,0),v(n,Q(.008,.008,.012,8),st.brass,0,.225,0),v(n,Q(.052,.052,.012,18,!0),et(1919520,.6),0,0,0)},tarp(n,t){let e=xe(t,["#2a5ab8","#6a7a3a","#a85a1a"]),i=Y(It("tarp"+e,128,128,(r,o,a,l)=>{De(r,o,a,l,e,.08,1200,1),r.strokeStyle="rgba(255,255,255,0.12)";for(let c=0;c<o;c+=4)r.beginPath(),r.moveTo(c,0),r.lineTo(c,a),r.moveTo(0,c),r.lineTo(o,c),r.stroke();ae(r,o,a,l,.6)},{repeat:[3,3]}),.55);v(n,Qt(.36,.035,.28,.012),i),v(n,Qt(.34,.03,.27,.012),i,.005,.03,-.003,0,.03,0),v(n,Qt(.3,.028,.25,.012),i,-.01,.056,.004,0,-.04,0);for(let r=0;r<4;r++)v(n,Ie(.008,.003,4,10),st.alu,-.14+r*.09,.085,.115,Math.PI/2);let s=Y(jn({t:"TARP",s:"ALL PURPOSE 8 x 10 FT",n:"WATERPROOF",b:"#f4f1ea",f:"#1d4f9a",a:"#1d4f9a"},256,192),.7);v(n,ot(.12,.002,.09),[st.paper,st.paper,s,st.paper,st.paper,st.paper],.03,.084,-.03)},bleach(n){let t=et(15921902,.35);v(n,Qt(.15,.24,.1,.025),t),v(n,He("bleachneck",[[.03,0],[.024,.012],[.021,.025]],14),t,.035,.238,0),v(n,Q(.024,.024,.024,14),Ai("#1d5fa8"),.035,.262,0),v(n,Rn("bleachhandle",[[-.065,.22,0],[-.065,.27,0],[-.03,.29,0],[0,.25,0],[0,.22,0]],.012,12,6),t);let e={t:"BLEACH",s:"REGULAR  UNSCENTED",n:"121 FL OZ (3.57 L)",b:"#f4f6fa",f:"#1d5fa8",a:"#1d5fa8",p:"drop",top:"DISINFECTS"};v(n,ot(.12,.15,.001),Y(jn(e,256,320),.4),0,.03,.0505),v(n,ot(.12,.15,.001),Y(It("bleachback",256,320,(i,s,r,o)=>{i.fillStyle="#f4f6fa",i.fillRect(0,0,s,r),qt(i,"DANGER",s/2,30,30,{color:"#c41e1e"}),Je(i,20,60,s-40,18,12,o,"#333"),Eo(i,60,r-60,130,40,o)}),.4),0,.03,-.0505,0,Math.PI,0)},water_filter(n){let t=et(2781142,.4),e=new jt;v(e,Q(.02,.02,.1,14),t),v(e,Q(.021,.021,.03,14),st.whitePl,0,.1,0),v(e,Q(.008,.012,.025,10),st.whitePl,0,.13,0),v(e,Q(.022,.022,.02,14),st.whitePl,0,-.005,0),v(e,Q(.0205,.0205,.05,14,!0),Y(Ri({t:"SQUEEZE FILTER",s:"0.1 MICRON",b:"#2a6fd6",f:"#fff",a:"#fff"}),.4),0,.03,0),e.rotation.z=Math.PI/2,e.position.set(0,.022,.08),n.add(e);let i=new jt;hi(i,.12,.22,.012,{t:"SQUEEZE POUCH",s:"1 L  REUSABLE",b:"#cfe3ef",f:"#1d5fa8",a:"#2a6fd6",p:"drop"},.25,0,.04),i.rotation.x=-Math.PI/2,i.position.set(0,.006,-.03),i.rotation.z=.2,n.add(i)},flea_spray(n){v(n,He("aerosol",[[0,0],[.03,0],[.033,.008],[.033,.16],[.028,.18],[.014,.19],[.012,.195]],18),st.tin),v(n,Q(.0333,.0333,.145,18,!0),Y(fi({t:"FLEA & TICK",s:"HOME SPRAY  KILLS ON CONTACT",n:"NET WT 16 OZ (454g)",b:"#f4f1ea",f:"#2a5a1a",a:"#2a5a1a",p:"bug"},512,340),.45,.1),0,.012,0),v(n,Q(.031,.033,.045,16),et(2775578,.4),0,.17,0),v(n,ot(.012,.01,.01),st.whitePl,0,.215,.02)},seeds(n,t){let e=[{t:"TOMATO",s:"EARLY GIRL  HEIRLOOM",n:"PLANT AFTER LAST FROST",b:"#f4ecd2",f:"#8a1d12",a:"#3f7a2a",p:"tomato"},{t:"CARROT",s:"DANVERS HALF LONG",n:"SOW EARLY SPRING",b:"#f4ecd2",f:"#c85a12",a:"#3f7a2a",p:"carrot"},{t:"BUSH BEANS",s:"PROVIDER  GREEN",n:"DIRECT SOW",b:"#f4ecd2",f:"#2f6a2a",a:"#3f7a2a",p:"bean"},{t:"KALE",s:"WINTER HARDY",n:"COOL SEASON",b:"#f4ecd2",f:"#2f6a2a",a:"#3f7a2a",p:"leaf"}],i=Math.floor(t()*4);for(let s=0;s<3;s++){let r=new jt;ef(r,.085,.125,e[(i+s)%4],.003),r.position.set((s-1)*.04,s*.0032,(s-1)*.015),r.rotation.y=(s-1)*.35,n.add(r)}},lighter(n,t){let e=xe(t,[14035002,2781142,3115578,15909403,8006298]),i=new jt;v(i,Qt(.025,.06,.013,.005),ye("lighter"+e,{color:e,roughness:.2,transparent:!0,opacity:.9})),v(i,Qt(.02,.05,.008,.003),ye("fuel",{color:15261872,roughness:.2,transparent:!0,opacity:.5}),0,.004,0),v(i,ot(.025,.018,.013),st.chrome,0,.06,0),v(i,Q(.005,.005,.009,10),st.darkMetal,-.004,.08,0,Math.PI/2),v(i,ot(.009,.006,.01),st.blackPl,.007,.077,0),i.rotation.x=-Math.PI/2,i.position.set(0,.0065,.04),n.add(i)},comfort(n,t){if(t()<.6){let e=xe(t,["THE LONG WINTER","RIVER STORIES","FIELD GUIDE TO BIRDS","COLLECTED POEMS","THE NORTHERN ROAD"]),i=xe(t,["#22304a","#5a1d1a","#2f4a2a","#4a3a2a"]),s=Y(It("book"+e+i,256,384,(a,l,c,h)=>{De(a,l,c,h,i,.08,1500,2),a.strokeStyle="#c9a24a",a.lineWidth=4,a.strokeRect(16,16,l-32,c-32),e.split(" ").forEach((f,d)=>qt(a,f,l/2,c*.3+d*40,34,{color:"#e8d8a0",maxW:l*.8,font:'Georgia, "DejaVu Serif", serif'})),qt(a,"A NOVEL",l/2,c*.82,16,{color:"#e8d8a0"}),ae(a,l,c,h,1)}),.7),r=Y(It("pages",64,64,(a,l,c)=>{a.fillStyle="#efe6cf",a.fillRect(0,0,l,c),a.fillStyle="rgba(0,0,0,0.12)";for(let h=0;h<c;h+=2)a.fillRect(0,h,l,1)}),.9),o=et(new Yt(i).getHex(),.7);v(n,ot(.15,.035,.22),[r,o,s,s,r,r])}else{let e=Y(It("cards",128,192,(s,r,o,a)=>{s.fillStyle="#b8201e",s.fillRect(0,0,r,o),s.strokeStyle="#fff",s.lineWidth=3,s.strokeRect(8,8,r-16,o-16);for(let l=0;l<60;l++)s.strokeStyle="rgba(255,255,255,0.35)",s.beginPath(),s.arc(r/2,o/2,6+l*2,0,3),s.stroke();qt(s,"PLAYING CARDS",r/2,o*.88,13,{color:"#fff",maxW:r*.8}),ae(s,r,o,a,.6)}),.5);v(n,ot(.064,.02,.09),[et(12066846,.5),et(12066846,.5),e,et(12066846,.5),et(12066846,.5),et(12066846,.5)]);let i=Y(It("cardface",64,96,(s,r,o)=>{s.fillStyle="#fafafa",s.fillRect(0,0,r,o),qt(s,"A",10,14,14,{color:"#c41e1e"}),s.fillStyle="#c41e1e",s.beginPath(),s.moveTo(32,36),s.bezierCurveTo(10,20,10,50,32,64),s.bezierCurveTo(54,50,54,20,32,36),s.fill()}),.6);for(let s=0;s<3;s++)v(n,ot(.063,8e-4,.088),[st.paper,st.paper,i,st.paper,st.paper,st.paper],.07+s*.012,s*.001,.01+s*.01,0,.3+s*.4,0)}},toolkit(n,t){let e=xe(t,[12853788,1920922,2763308]),i=Y(G0("#"+new Yt(e).getHexString(),"tk"),.45,.3);v(n,Qt(.46,.15,.21,.01),i),v(n,Qt(.47,.06,.22,.012),i,0,.14,0),v(n,ot(.472,.004,.222),st.darkMetal,0,.14,0),v(n,Rn("tkhandle",[[-.11,.2,0],[-.1,.235,0],[.1,.235,0],[.11,.2,0]],.011,12,6),st.blackPl);for(let s of[-.17,.17])v(n,ot(.04,.05,.012),st.chrome,s,.11,.11),v(n,ot(.03,.02,.008),st.chrome,s,.15,.115);v(n,ot(.012,.015,.03),st.steel,.215,.18,0)},scrap_wood(n,t){let e=Y(Rr("#c9a26c","#8a6a3a","lumber"),.85),i=Y(It("ply",256,256,(o,a,l,c)=>{De(o,a,l,c,"#d2b07a",.1,2e3,2);for(let h=0;h<20;h++)o.strokeStyle="rgba(140,90,40,0.25)",o.lineWidth=2+c()*6,o.beginPath(),o.ellipse(c()*a,c()*l,30+c()*60,6+c()*10,0,0,Zt),o.stroke();ae(o,a,l,c,.8)}),.85),s=Y(It("plyedge",64,16,(o,a,l)=>{for(let c=0;c<5;c++)o.fillStyle=c%2?"#a67c48":"#d2b07a",o.fillRect(0,c*l/5,a,l/5)}),.9),r=Y(Qu(),.9);v(n,ot(.6,.018,.45),[s,s,i,i,s,s],0,0,0,0,.1,0);for(let o=0;o<3;o++)v(n,ot(1,.038,.089),[r,r,e,e,e,e],(t()-.5)*.1,.018+o*.038,-.1+o*.09,0,(t()-.5)*.2,0)},hardware_parts(n,t){Wn(n,.14,.09,.1,{t:"WOOD SCREWS",s:"#8 x 2-1/2 IN  COARSE",n:"1 LB  APPROX 120 PCS",b:"#f2c21b",f:"#111",a:"#111",p:"screw",top:"ZINC PLATED"});let e=et(11054514,.4,.5);for(let i=0;i<3;i++){let s=new jt;v(s,ot(.05,.003,.03),e,0,0,0),v(s,ot(.003,.05,.03),e,-.0235,0,0),s.position.set(.11+i*.02,0,-.03+i*.035),s.rotation.y=t()*Zt,n.add(s)}for(let i=0;i<6;i++)v(n,Q(.002,5e-4,.05,6),e,-.05+t()*.1,.003,.08+t()*.04,Math.PI/2,0,t()*Zt)},wiring(n,t){let e=xe(t,["#e0521c","#f2c21b","#f4f1ea"]),i=Y(It("wire"+e,256,32,(r,o,a)=>{r.fillStyle=e,r.fillRect(0,0,o,a),r.strokeStyle="rgba(0,0,0,0.3)",r.lineWidth=1.5;for(let l=-32;l<o;l+=4)r.beginPath(),r.moveTo(l,0),r.lineTo(l+16,a),r.stroke()}),.45);v(n,Ie(.1,.035,6,20),i,0,.035,0,Math.PI/2,0,0,1,1,.9),v(n,Q(.137,.137,.05,16,!0),Y(Ri({t:"12/2 NM-B",s:"COPPER BUILDING WIRE  50 FT",b:"#f4f1ea",f:"#111",a:e}),.6),0,.012,0,0,0,0,1,1,1),v(n,Rn("wiretail",[[.12,.05,0],[.18,.04,.05],[.22,.01,.02]],.005,10,4),et(new Yt(e).getHex(),.4));let s=new jt;hi(s,.07,.1,.02,{t:"WIRE NUTS",s:"25 PCS",b:"#e8eef2",f:"#c41e1e",a:"#f2c21b"},.2,0,.06),s.rotation.x=-Math.PI/2,s.position.set(-.17,.01,.09),n.add(s)},pipe_fittings(n,t){let e=et(15658730,.4),i=et(7829367,.8);for(let s=0;s<3;s++){let r=new jt;v(r,Q(.017,.017,.5,10,!0),e),v(r,Q(.015,.015,.5,8,!0),Y(null,.8,0,{color:6710886,side:cn})),r.rotation.z=Math.PI/2,r.position.set(.25,.017,-.05+s*.036),r.rotation.y=(t()-.5)*.05,n.add(r)}v(n,Ie(.03,.02,8,8,Math.PI/2),e,-.1,.02,.07,Math.PI/2,0,0),v(n,Q(.022,.022,.05,12),e,-.05,0,.1),v(n,Ie(.09,.012,5,16),et(3111474,.5),-.05,.012,-.05,Math.PI/2),v(n,Ie(.075,.012,5,16),et(3111474,.5),-.05,.034,-.05,Math.PI/2),v(n,Q(.016,.016,.03,8),st.brass,.03,.016,-.05,0,0,Math.PI/2)},plastic_sheet(n){let t=ye("plasroll",{color:15265520,roughness:.25,transparent:!0,opacity:.85}),e=Y(It("rollend",128,128,(s,r,o)=>{s.fillStyle="#dfe6e8",s.fillRect(0,0,r,o),s.strokeStyle="rgba(0,0,0,0.12)";for(let a=18;a<64;a+=2)s.beginPath(),s.arc(64,64,a,0,Zt),s.stroke();s.fillStyle="#a67c48",s.beginPath(),s.arc(64,64,17,0,Zt),s.fill(),s.fillStyle="#222",s.beginPath(),s.arc(64,64,13,0,Zt),s.fill()}),.5),i=new jt;v(i,Q(.07,.07,.6,18),[t,e,e]),v(i,Q(.0705,.0705,.2,18,!0),Y(Ri({t:"PLASTIC SHEETING",s:"6 MIL  10 x 25 FT  CLEAR",b:"#f4f1ea",f:"#111",a:"#c41e1e"}),.5),0,.2,0),i.rotation.z=Math.PI/2,i.position.set(.3,.07,0),n.add(i)},insulation(n){let t=Y(It("foam",256,256,(i,s,r,o)=>{De(i,s,r,o,"#e9a0b0",.08,3e3,2),qt(i,"RIGID FOAM  R-5",s/2,r*.3,26,{color:"rgba(30,60,140,0.8)",maxW:s*.9}),qt(i,"1 IN x 2 FT x 4 FT",s/2,r*.45,18,{color:"rgba(30,60,140,0.8)"}),Je(i,30,r*.6,s-60,4,10,o,"rgba(30,60,140,0.5)"),ae(i,s,r,o,.6)}),.9),e=et(15311024,.95);for(let i=0;i<4;i++)v(n,ot(.6,.025,.3),[e,e,t,t,e,e],i%2*.01,i*.025,i%2*-.008);v(n,ot(.08,.104,.304),ye("shrink",{color:16777215,roughness:.1,transparent:!0,opacity:.25}),.18,-.002,0)},metal_bin(n){let t=Y(It("galv",256,256,(i,s,r,o)=>{De(i,s,r,o,"#a9aeb2",.12,2500,3);for(let a=0;a<30;a++)i.fillStyle=`rgba(255,255,255,${.05+o()*.1})`,i.beginPath(),i.ellipse(o()*s,o()*r,8+o()*20,6+o()*14,o()*3,0,Zt),i.fill();ae(i,s,r,o,1.2)}),.5,.45);v(n,He("trashcan",[[0,.005],[.2,.005],[.205,.08],[.215,.09],[.207,.1],[.212,.26],[.222,.27],[.214,.28],[.22,.46],[.23,.47],[.222,.48],[.234,.6]],16),Y(t.map,.5,.45,{side:Ce})),v(n,He("trashlid",[[.245,0],[.24,.015],[.2,.04],[.1,.06],[0,.065]],16),t,0,.595,0),v(n,Rn("binlidh",[[-.05,.66,0],[-.04,.69,0],[.04,.69,0],[.05,.66,0]],.008,6,5),st.steel);for(let i of[-1,1])v(n,Rn("binsideh",[[0,.5,-.05],[.035,.49,-.04],[.035,.49,.04],[0,.5,.05]],.007,6,4),st.steel,i*.22,0,0,0,i<0?Math.PI:0,0)},rain_barrel(n){let t=et(1920922,.45);v(n,He("barrel",[[0,0],[.27,0],[.29,.02],[.3,.12],[.31,.14],[.3,.16],[.305,.45],[.3,.74],[.31,.76],[.3,.78],[.29,.88],[.27,.9],[0,.9]],24),t);for(let i of[-.18,.18])v(n,Q(.03,.03,.015,10),et(1194610,.5),i,.895,0);v(n,Q(.015,.015,.06,10),st.brass,0,.12,.31,Math.PI/2),v(n,ot(.02,.04,.01),st.brass,0,.12,.345),v(n,ot(.24,.12,.002),Y(jn({t:"RAIN BARREL",s:"55 GAL  NOT FOR DRINKING",b:"#f4f1ea",f:"#1d4f9a",a:"#1d4f9a"},256,128),.6),0,.5,.303)},stove_kit(n){let t=Y(It("stoveblk",128,128,(e,i,s,r)=>{De(e,i,s,r,"#26272a",.12,2e3,2),ae(e,i,s,r,1)}),.7,.35);v(n,Qt(.45,.4,.5,.02),t,0,.12,0);for(let e of[-.19,.19])for(let i of[-.21,.21])v(n,Q(.018,.012,.12,8),t,e,0,i);v(n,ot(.3,.24,.02),t,0,.19,.25),v(n,ot(.2,.14,.004),ye("stoveglass",{color:2234900,roughness:.1,metalness:.3}),0,.24,.26),v(n,Q(.008,.008,.08,8),st.chrome,.12,.28,.275),v(n,Q(.07,.07,.08,16,!0),t,0,.52,-.08);for(let e=0;e<2;e++)v(n,Q(.075,.075,.6,16,!0),Y(Ar("#4a4c50","pipe"),.6,.4),.38+e*.16,.075,0,Math.PI/2,0,0);v(n,ot(.2,.1,.002),Y(jn({t:"WOOD STOVE",s:"EPA CERTIFIED  60,000 BTU",b:"#f4f1ea",f:"#111",a:"#c4221c"},256,128),.6),0,.42,.251)},battery_module(n){let t=et(15263972,.4);v(n,Qt(.5,.7,.16,.03),t),v(n,ot(.44,.06,.004),et(2763308,.3),0,.58,.08);for(let i=0;i<5;i++)v(n,ot(.04,.008,.002),ye("ledg"+i,{color:i<3?3135066:1718818,emissive:i<3?674330:0,roughness:.3}),-.12+i*.06,.6,.083);let e=Y(It("vent",128,64,(i,s,r)=>{i.fillStyle="#d8d8d4",i.fillRect(0,0,s,r),i.fillStyle="#333";for(let o=6;o<r-4;o+=7)i.fillRect(8,o,s-16,3)}),.5);v(n,ot(.36,.14,.003),e,0,.08,.08),v(n,ot(.2,.12,.002),Y(jn({t:"HOME BATTERY",s:"LiFePO4  5 kWh  48 V DC",n:"CAUTION  HIGH VOLTAGE",b:"#f4f1ea",f:"#111",a:"#2a6fd6"},256,160),.5),0,.35,.081);for(let i of[-.06,.06])v(n,Q(.012,.012,.03,10),i<0?et(1710618,.5):et(12852766,.5),i,.7,0)},candles(n,t){Wn(n,.12,.16,.06,{t:"EMERGENCY",t2:"CANDLES",s:"UNSCENTED  9 HR BURN",n:"6 CANDLES",b:"#f4f1ea",f:"#c41e1e",a:"#2a2a2c",p:"flame",top:"POWER OUTAGE"});let e=ye("wax",{color:15986396,roughness:.55,emissive:1315344});for(let i=0;i<2;i++){let s=.1+t()*.04;v(n,Q(.025,.025,s,14),e,.11+i*.06,0,.02-i*.03),v(n,Q(.0015,.0015,.01,4),et(1118481,.9),.11+i*.06,s,.02-i*.03)}},matches(n,t){let i=Y(jn({t:"STRIKE",t2:"ANYWHERE",s:"KITCHEN MATCHES",n:"250 MATCHES",b:"#f2c21b",f:"#c41e1e",a:"#c41e1e",top:"SAFETY",p:"flame"},256,160),.7),s=Y(It("strike",64,64,(a,l,c,h)=>De(a,l,c,h,"#5a3a2a",.4,600,2)),.95),r=new jt;v(r,ot(.115,.03,.065),[s,s,i,i,et(15909403,.7),et(15909403,.7)]);let o=Y(It("matchheads",128,64,(a,l,c)=>{a.fillStyle="#d8b88a",a.fillRect(0,0,l,c);for(let h=0;h<l;h+=6)for(let u=0;u<c;u+=6)a.fillStyle="#b81d18",a.beginPath(),a.arc(h+3+(u%12?0:2),u+3,2.6,0,Zt),a.fill()}),.8);v(r,ot(.105,.024,.058),[et(15261900,.8),et(15261900,.8),o,et(15261900,.8),et(15261900,.8),et(15261900,.8)],.045,.004,0),n.add(r);for(let a=0;a<3;a++){let l=new jt;v(l,ot(.003,.003,.06),et(14203018,.8)),v(l,un(.003,6,4),et(12066072,.6),0,.0015,.03,0,0,0,1,1,1.4),l.position.set(-.03+a*.02,0,.06+t()*.02),l.rotation.y=t()*2-1,n.add(l)}},duct_tape(n){let t=Y(Ar("#9ea3a8","tape"),.5,.25);v(n,He("ducttape",[[.038,0],[.056,0],[.057,.002],[.057,.046],[.056,.048],[.038,.048]],20),t),v(n,Q(.0375,.0375,.048,16,!0),Y(Ri({t:"DUCT TAPE",s:"1.88 IN x 60 YD",b:"#b99868",f:"#2a2a2c",a:"#b99868"}),.9,0,{side:Ce}),0,0,0),v(n,ot(.002,.046,.05),t,.058,.001,.025,0,.3,0)},rope(n,t){let e=xe(t,["#c8b080","#2a6fd6","#d6283a","#3a5a2a"]),i=Y(It("rope"+e,128,32,(s,r,o)=>{s.fillStyle=e,s.fillRect(0,0,r,o),s.strokeStyle="rgba(0,0,0,0.35)",s.lineWidth=2;for(let a=-32;a<r;a+=6)s.beginPath(),s.moveTo(a,0),s.lineTo(a+18,o),s.stroke();s.strokeStyle="rgba(255,255,255,0.2)";for(let a=-30;a<r;a+=6)s.beginPath(),s.moveTo(a,0),s.lineTo(a+18,o),s.stroke()},{repeat:[12,1]}),.95);for(let s=0;s<3;s++)v(n,Ie(.11+s%2*.006,.013,4,20),i,s%2*.005,.012+s*.016,s%3*.004,Math.PI/2,0,s*.7);for(let s=0;s<2;s++)v(n,Ie(.03,.009,4,8),i,.115,.028,-.008+s*.016,0,Math.PI/2,0,1,1.4,1);v(n,Rn("ropetail",[[-.1,.012,.03],[-.16,.01,.1],[-.12,.012,.18],[-.05,.012,.2]],.012,10,5),i),v(n,Q(.124,.124,.03,16,!0),Y(Ri({t:"UTILITY ROPE",s:"3/8 IN x 50 FT",b:"#f4f1ea",f:"#111",a:"#c41e1e"}),.8),0,.02,0,0,0,0,1,1,1)},knife(n){let t=Y(Ar("#c8ccd0","blade"),.22,.55);v(n,ju("knifeblade2",()=>{let s=new br;return s.moveTo(0,0),s.lineTo(.125,0),s.quadraticCurveTo(.158,.004,.172,.03),s.lineTo(.13,.032),s.lineTo(0,.032),s.closePath(),s},.0025,7e-4),t,.004,.011,.016,-Math.PI/2,0,0),v(n,ot(.165,6e-4,.004),et(15658734,.15,.6),.09,.0125,.013),v(n,Qt(.115,.02,.028,.008),et(1908256,.6),-.058,.001,0),v(n,ot(.008,.024,.042),st.steel,.002,0,0);for(let s of[-.03,-.08])v(n,Q(.0035,.0035,.022,8),st.brass,s,5e-4,0);v(n,Ie(.005,.0015,3,8),st.steel,-.118,.011,0,Math.PI/2);let i=Y(It("sheath",128,64,(s,r,o,a)=>{De(s,r,o,a,"#5a3a22",.15,900,2),s.strokeStyle="rgba(230,210,170,0.6)",s.setLineDash([4,3]),s.lineWidth=2,s.strokeRect(5,5,r-10,o-10),ae(s,r,o,a,1)}),.8);v(n,Qt(.19,.014,.05,.006),i,.03,0,.065,0,.12,0),v(n,ot(.03,.016,.05),i,-.07,0,.078,0,.12,0)},multitool(n){let t=Y(Ar("#b8bcc0","mt"),.3,.5);v(n,Qt(.1,.012,.016,.004),t,0,0,-.009),v(n,Qt(.1,.012,.016,.004),t,0,0,.009),v(n,ot(.03,.008,.02),st.darkMetal,.06,.002,0);for(let e=0;e<3;e++)v(n,ot(.06,.001,.003),st.darkMetal,-.01+e*.01,.012,-.012+e*.012);v(n,Ie(.008,.002,4,10),st.steel,-.055,.006,0,Math.PI/2),v(n,Qt(.08,.025,.04,.008),et(1908256,.85),.02,0,.06,0,.3,0)},can_opener(n){let t=et(12853788,.5),e=new jt;v(e,Qt(.13,.016,.022,.007),t,-.07,0,-.016,0,.12,0),v(e,Qt(.13,.016,.022,.007),t,-.07,0,.016,0,-.12,0),v(e,ot(.04,.022,.05),st.steel,.01,-.003,0),v(e,Q(.012,.012,.005,12),st.steel,.02,-.003,0),v(e,Rn("openerkey",[[.02,.02,0],[.02,.035,0],[.045,.04,0],[.06,.03,0]],.004,8,5),st.steel),v(e,Qt(.03,.02,.02,.006),t,.07,.025,0,0,0,Math.PI/2),e.position.y=.011,n.add(e)},cooking_pot(n){let t=Y(Ar("#bfc3c7","pot"),.3,.55);v(n,He("pot",[[0,.002],[.095,.002],[.1,.008],[.1,.12],[.104,.124],[.097,.124],[.093,.12],[.093,.01],[0,.01]],16),t),v(n,He("potlid",[[.104,0],[.1,.006],[.06,.02],[0,.026]],16),t,0,.122,0),v(n,Q(.012,.018,.018,10),st.blackPl,0,.148,0);for(let e of[-1,1])v(n,Rn("pothandle"+e,[[e*.098,.105,-.035],[e*.128,.105,-.025],[e*.128,.105,.025],[e*.098,.105,.035]],.006,8,5),st.blackPl)},blanket(n,t){let e=xe(t,[["#7a1d1a","#22304a","#e8d8a0"],["#2f4a2a","#1a1a1a","#c8a24a"],["#4a5a7a","#e8e8e0","#1a2a4a"]]),i=Y(Ux(e[0],e[1],e[2]),.95);v(n,Qt(.4,.04,.3,.02),i),v(n,Qt(.4,.04,.3,.02),i,.003,.038,.003,0,.02,0),v(n,Qt(.4,.04,.3,.02),i,-.004,.076,-.002,0,-.015,0),v(n,Q(.02,.02,.3,10),i,.2,.06,-.15,Math.PI/2,0,0,1,1,2.6)},sleeping_bag(n,t){let e=xe(t,["#2a5ab8","#c8521c","#3a5a2a"]),i=Y(ui(e,"sb"),.55),s=new jt;v(s,Q(.13,.13,.4,18),[i,Y(It("stuffend"+e,128,128,(r,o,a)=>{r.fillStyle=e,r.fillRect(0,0,o,a),r.strokeStyle="rgba(0,0,0,0.35)",r.lineWidth=2;for(let l=0;l<12;l++)r.beginPath(),r.moveTo(64,64),r.lineTo(64+Math.cos(l)*64,64+Math.sin(l)*64),r.stroke()}),.6),i]);for(let r of[.08,.32])v(s,Q(.133,.133,.025,18,!0),st.blackPl,0,r,0);for(let r=0;r<4;r++)v(s,ot(.025,.42,.004),st.blackPl,Math.sin(r*Math.PI/2)*.132,-.01,Math.cos(r*Math.PI/2)*.132,0,r*Math.PI/2,0);v(s,Q(.004,.004,.06,6),st.blackPl,.03,.4,0),v(s,Q(.008,.008,.02,8),et(2763306,.5),.03,.45,0),s.rotation.z=Math.PI/2,s.position.set(.2,.13,0),n.add(s)},hand_warmers(n){for(let t=0;t<2;t++){let e=new jt;hi(e,.09,.13,.012,{t:"HAND",t2:"WARMERS",s:"UP TO 10 HRS",n:"1 PAIR",b:"#e0521c",f:"#fff",a:"#2a2a2c",p:"flame"},.45,.1,.06),e.rotation.set(-Math.PI/2,0,t*.5-.2),e.position.set(t*.06,.006+t*.008,t*.02),n.add(e)}},wool_socks(n,t){let e=xe(t,["#8a8a86","#6a5a4a","#4a5a6a"]),i=xe(t,["#a8321e","#2a4a7a","#e8e2d2"]),s=.3,r=It("sockface"+e+i,256,256,(c,h,u,f)=>{c.fillStyle=e,c.fillRect(0,0,h,u);let d=Xn(e,-.3),g=Xn(e,.15);for(let p=0;p<h;p+=6)for(let M=0;M<u;M+=6)c.fillStyle=g,c.beginPath(),c.ellipse(p+1.5,M+3,1.6,3,-.5,0,Zt),c.ellipse(p+4.5,M+3,1.6,3,.5,0,Zt),c.fill(),c.fillStyle=d,c.fillRect(p+2.7,M,.6,6);let x=p=>p/s*h,m=p=>u-p/s*u;c.fillStyle=i,c.globalAlpha=.85,c.beginPath(),c.arc(x(0),m(0),x(.06),0,Zt),c.fill(),c.fillRect(x(.165),m(.1),x(.06),x(.1)),c.fillRect(0,m(.275),x(.1),x(.035)),c.globalAlpha=1;for(let p=m(.27);p<m(.215);p+=4)c.fillStyle="rgba(0,0,0,0.18)",c.fillRect(0,p,x(.1),1.5);ae(c,h,u,f,.5)},{repeat:[1/s,1/s]}),a=ju("sock",()=>{let c=new br;return c.moveTo(0,.27),c.lineTo(0,.06),c.quadraticCurveTo(0,0,.06,0),c.lineTo(.17,0),c.quadraticCurveTo(.215,.002,.215,.04),c.quadraticCurveTo(.212,.078,.17,.08),c.lineTo(.095,.085),c.lineTo(.088,.27),c.closePath(),c},.012,.006),l=Y(_o(e,"sockside"),.95);for(let c=0;c<2;c++)v(n,a,[Y(r,.95),l],c*.025-.1,.009+c*.024,-.13+c*.012,-Math.PI/2,0,c*.08);v(n,ot(.105,.05,.003),Y(Ri({t:"WOOL SOCKS",s:"MERINO BLEND  1 PAIR",b:"#f4f1ea",f:"#3a2a1f",a:i}),.8),-.065,.005,-.03,-Math.PI/2,0,0)},trash_bags(n){Wn(n,.26,.12,.13,{t:"TRASH BAGS",s:"LARGE 30 GAL  DRAWSTRING",n:"40 BAGS",b:"#1a1a1c",f:"#f2c21b",a:"#2f7a32",p:"bolt",top:"HEAVY DUTY"},{tw:384,th:180}),v(n,ot(.12,.002,.04),et(657930,.3),0,.12,0)},radio(n){let t=et(14701084,.5),e=et(3815996,.6),i=Y(It("radiofront",256,160,(s,r,o,a)=>{s.fillStyle="#3a3a3c",s.fillRect(0,0,r,o),s.fillStyle="#1a1a1a";for(let l=20;l<o-20;l+=9)for(let c=16;c<r*.5;c+=9)s.beginPath(),s.arc(c,l,3,0,Zt),s.fill();s.fillStyle="#9ab89a",s.fillRect(r*.56,24,r*.38,40),s.fillStyle="#2a3a2a";for(let l=0;l<10;l++)s.fillRect(r*.58+l*9,50,2,10);qt(s,"AM  FM  WB",r*.75,36,12,{color:"#2a3a2a"});for(let l=0;l<3;l++)s.fillStyle="#c8c8c8",s.fillRect(r*.58+l*30,84,22,12);qt(s,"EMERGENCY RADIO",r*.75,120,14,{color:"#ddd",maxW:r*.4}),ae(s,r,o,a,.8)}),.5);v(n,Qt(.19,.11,.07,.015),[t,t,t,t,i,t]),v(n,ot(.1,.004,.05),ye("solar",{color:1714762,roughness:.15,metalness:.4}),-.03,.11,0),v(n,Q(.003,.003,.22,6),st.chrome,.08,.11,-.02,0,0,-.25),v(n,Q(.012,.012,.012,12),e,.06,.07,.04,Math.PI/2),v(n,ot(.012,.06,.012),e,.1,.04,0),v(n,Q(.006,.006,.03,8),e,.12,.015,0,0,0,Math.PI/2)},paper_map(n,t){let e=Y(It("mapcover",256,448,(i,s,r,o)=>{i.fillStyle="#f4f1e6",i.fillRect(0,0,s,r),i.fillStyle="#1d4f9a",i.fillRect(0,0,s,r*.28),qt(i,"PORTLAND",s/2,r*.09,36,{color:"#fff",maxW:s*.9}),qt(i,"METRO STREET MAP",s/2,r*.18,20,{color:"#f2c21b",maxW:s*.9}),i.fillStyle="#e8e2c8",i.fillRect(16,r*.32,s-32,r*.5),i.strokeStyle="#7fa8d6",i.lineWidth=10,i.beginPath(),i.moveTo(s*.45,r*.32),i.bezierCurveTo(s*.6,r*.5,s*.35,r*.62,s*.55,r*.82),i.stroke(),i.strokeStyle="#d6a04a",i.lineWidth=3;for(let a=0;a<9;a++)i.beginPath(),i.moveTo(16,r*(.34+a*.055)),i.lineTo(s-16,r*(.34+a*.055)+(o()-.5)*10),i.stroke(),i.beginPath(),i.moveTo(20+a*26,r*.32),i.lineTo(20+a*26+(o()-.5)*10,r*.82),i.stroke();i.fillStyle="#9ac48a",i.fillRect(s*.12,r*.38,40,30),qt(i,"FOLD HERE",s/2,r*.9,12,{color:"#666"}),ae(i,s,r,o,1.2)}),.85);v(n,ot(.12,.008,.21),[st.paper,st.paper,e,st.paper,st.paper,st.paper],0,0,0,0,t()*.6,0)},toilet_paper(n){let t=Y(It("tproll",128,64,(s,r,o,a)=>{De(s,r,o,a,"#f6f4ee",.05,500,1),s.strokeStyle="rgba(0,0,0,0.06)";for(let l=0;l<r;l+=8)s.beginPath(),s.moveTo(l,0),s.lineTo(l,o),s.stroke()}),.95),e=Y(It("tptop",128,128,(s,r,o)=>{s.fillStyle="#f6f4ee",s.fillRect(0,0,r,o),s.strokeStyle="rgba(0,0,0,0.08)";for(let a=24;a<64;a+=3)s.beginPath(),s.arc(64,64,a,0,Zt),s.stroke();s.fillStyle="#a67c48",s.beginPath(),s.arc(64,64,22,0,Zt),s.fill(),s.fillStyle="#2a2420",s.beginPath(),s.arc(64,64,19,0,Zt),s.fill()}),.9);for(let s=0;s<4;s++)v(n,Q(.055,.055,.1,18),[t,e,e],(s%2-.5)*.112,0,(Math.floor(s/2)-.5)*.112);let i=ye("tpwrap",{color:16777215,roughness:.15,transparent:!0,opacity:.2,depthWrite:!1});v(n,Qt(.23,.105,.23,.03),i),v(n,ot(.2,.06,.002),Y(Ri({t:"BATH TISSUE",s:"4 DOUBLE ROLLS  2-PLY",b:"#f4f6fa",f:"#2a4f9a",a:"#7fa8d6"}),.5),0,.02,.116)},soap(n,t){Wn(n,.095,.035,.065,{t:"BAR SOAP",s:"GENTLE  UNSCENTED",n:"4 OZ (113g)",b:"#f4f6fa",f:"#2a6fd6",a:"#7fc4d6",p:"bubble"},{tw:256,th:96}),v(n,Qt(.085,.03,.055,.012),et(xe(t,[16052454,15259888,14217440]),.4),.11,0,.02,0,.4,0)},toothpaste(n){let t={t:"TOOTHPASTE",s:"FLUORIDE  COOL MINT",n:"NET WT 6 OZ (170g)",b:"#2a6fd6",f:"#fff",a:"#d6283a",p:"tooth"},e=new jt;Wn(e,.045,.2,.04,t,{tw:128,th:512}),e.rotation.z=Math.PI/2,e.position.set(.1,0,0),n.add(e);let i=new jt;v(i,He("tptube",[[0,0],[.012,0],[.016,.012],[.019,.04],[.019,.12],[.017,.165],[.016,.17]],14),Y(fi({...t,s:"COOL MINT"},256,256),.35),0,0,0,0,0,0,1,1,.65),v(i,Q(.012,.014,.018,12),st.whitePl,0,-.018,0),v(i,ot(.04,.012,.003),et(16777215,.5),0,.168,0),i.rotation.z=Math.PI/2,i.position.set(0,.013,.07),n.add(i)}};delete nl.first_aid_kit;var E_=Object.keys(nl);function pf(n,t=0){let e=new jt,i=Cs(So(String(n))^Math.imul(t+1,2654435761)),s=nl[n];return s?s(e,i):Vx(e,n),ff(e,n)}function Vx(n,t){let e=String(t||"SUPPLIES").replace(/_/g," ").toUpperCase(),i=Y(W0(e.slice(0,18),0),.9),s=Y(hs(),.9);v(n,ot(.3,.22,.24),[i,i,s,s,i,i])}var Gx=["#c9ccd0","#f2f1ec","#1c1c1e","#a9824f","#c4221c","#1d4f9a","#2f7a32","#f2c21b","#8a4a1a","#cfdde4","#e8701c","#c59a45","#4a4c50","#2a9a9a","#9a6a2c","#e9a0b0"],Wx={tin:0,white:1,black:2,card:3,red:4,blue:5,green:6,yellow:7,amber:8,clear:9,orange:10,brass:11,dark:12,teal:13,brown:14,pink:15},mt=(n,t,e,i,s,r,o,a={})=>({t:n,s:t,b:e,f:i,a:s,p:r,n:o,...a}),vo={grocery:[{s:"can",r:.038,h:.112,L:Cr[0],w8:2,stack:1},{s:"can",r:.038,h:.11,L:Cr[1],w8:2,stack:1},{s:"can",r:.038,h:.112,L:Cr[2],w8:1,stack:1},{s:"can",r:.038,h:.112,L:Cr[3],w8:1,stack:1},{s:"can",r:.038,h:.11,L:df[0],w8:2,stack:1},{s:"can",r:.043,h:.04,L:mt("TUNA","CHUNK LIGHT IN WATER","#2b4f9a","#fff","#f2c21b","fish","NET WT 5 OZ (142g)"),w8:2,stack:1},{s:"box",w:.19,h:.29,d:.07,L:mt("CORN FLAKES","TOASTED","#f2f1ec","#1d4f9a","#e8701c","grain","NET WT 18 OZ (510g)",{top:"FAMILY SIZE",tf:"#fff"}),w8:2},{s:"box",w:.19,h:.28,d:.07,L:mt("OAT RINGS","HONEY NUT","#f2c21b","#7a2a10","#7a2a10","oats","NET WT 15.4 OZ (436g)",{top:"WHOLE GRAIN"}),w8:2},{s:"box",w:.1,h:.26,d:.04,L:mt("SPAGHETTI","ENRICHED","#1d4f9a","#fff","#f2c21b","grain","1 LB (454g)",{tf:"#1d4f9a",top:"NO. 3"}),w8:2},{s:"box",w:.2,h:.22,d:.07,L:mt("SALTINES","ORIGINAL","#f4f1ea","#c41e1e","#c41e1e","grain","NET WT 16 OZ (454g)"),w8:2},{s:"box",w:.13,h:.17,d:.04,L:mt("MAC & CHEESE","ORIGINAL","#2b6fd6","#fff","#f2c21b","noodle","NET WT 7.25 OZ",{tf:"#2b6fd6",top:"DINNER"}),w8:2},{s:"jar",r:.045,h:.125,L:mt("PEANUT BUTTER","CREAMY","#f5e6c0","#8a3a12","#c8321e","peanut","NET WT 16 OZ"),cap:"red",body:"brown",w8:2},{s:"jar",r:.042,h:.16,L:mt("PASTA SAUCE","MARINARA","#2f5a2a","#fff","#b81d18","tomato","24 OZ (680g)"),cap:"tin",body:"red",w8:2},{s:"bottle",r:.042,h:.3,L:mt("VEGETABLE OIL","PURE","#f2c21b","#1d4f9a","#1d4f9a","leaf","48 FL OZ (1.42 L)"),cap:"yellow",body:"yellow",w8:1},{s:"bag",w:.17,h:.25,d:.08,L:mt("WHITE RICE","LONG GRAIN","#f6f3ea","#1d4f8a","#1d4f8a","grain","NET WT 2 LB (907g)"),w8:2},{s:"bag",w:.16,h:.27,d:.09,L:mt("FLOUR","ALL PURPOSE","#f6f3ea","#c41e1e","#2b4f9a","grain","5 LB (2.26 kg)"),w8:1},{s:"bag",w:.21,h:.3,d:.08,L:mt("POTATO CHIPS","SEA SALT","#f2c21b","#c41e1e","#c41e1e","chip","NET WT 8 OZ"),gl:1,w8:2},{s:"jug",w:.15,h:.27,d:.15,L:mt("DRINKING WATER","1 GALLON","#e9f2f6","#1d5fa8","#3d8fd6","drop","3.78 L"),cap:"blue",body:"clear",w8:2},{s:"can",r:.064,h:.18,L:mt("OLD FASHIONED OATS","100% WHOLE GRAIN","#f4f1ea","#2a4f8a","#2a4f8a","oats","42 OZ (1.19 kg)"),cap:"blue",w8:1},{s:"cup",r:.05,h:.1,L:mt("INSTANT NOODLES","CHICKEN FLAVOR","#f4f1ea","#c41e1e","#f2c21b","noodle","2.25 OZ"),cap:"white",w8:2,stack:1},{s:"can",r:.065,h:.16,L:mt("GROUND COFFEE","MEDIUM ROAST","#3a1a10","#f3c04a","#b5321a","bean","30.5 OZ (864g)"),cap:"red",w8:1},{s:"bag",w:.14,h:.21,d:.08,L:mt("SUGAR","GRANULATED","#f6f3ea","#1d4f9a","#c41e1e","grain","4 LB (1.81 kg)"),w8:1},{s:"box",w:.4,h:.125,d:.135,L:mt("COLA 12 PACK","12 FL OZ CANS","#a8141a","#fff","#5a0a0a","bubble","144 FL OZ (4.26 L)"),w8:1,wide:1},{s:"bottle",r:.036,h:.22,L:mt("KETCHUP","TOMATO","#c41e1e","#fff","#2f6a2a","tomato","20 OZ (567g)"),cap:"white",body:"red",w8:1}],pharmacy:[{s:"jar",r:.028,h:.1,L:mt("PAIN RELIEVER","ACETAMINOPHEN 500 MG","#f4f4f0","#c41e1e","#c41e1e","pill","100 CAPLETS"),cap:"white",body:"white",w8:3,stack:1},{s:"jar",r:.028,h:.1,L:mt("IBUPROFEN","200 MG TABLETS","#f08a1c","#fff","#7a2a0a","pill","100 TABLETS"),cap:"orange",body:"white",w8:3,stack:1},{s:"jar",r:.035,h:.12,L:mt("MULTIVITAMIN","ADULT DAILY","#2a2a6a","#f2c21b","#f2c21b","sun","120 TABLETS"),cap:"black",body:"dark",w8:2},{s:"box",w:.08,h:.11,d:.03,L:mt("ALLERGY","24 HOUR RELIEF","#6a2a9a","#fff","#f2c21b","leaf","30 TABLETS"),w8:2,stack:1},{s:"box",w:.1,h:.14,d:.04,L:mt("COLD & FLU","DAY + NIGHT","#1d4f9a","#fff","#e8701c","moon","24 LIQUID CAPS"),w8:2,stack:1},{s:"bottle",r:.033,h:.14,L:mt("ANTACID","EXTRA STRENGTH","#f2f1ec","#2a9a9a","#2a9a9a","drop","160 CHEWABLES"),cap:"teal",body:"white",w8:1},{s:"box",w:.1,h:.13,d:.045,L:mt("BANDAGES","FLEXIBLE FABRIC","#f4f1ea","#c41e1e","#e0b38a","cross","60 ASSORTED"),w8:2,stack:1},{s:"box",w:.1,h:.1,d:.05,L:mt("GAUZE PADS","STERILE 4 x 4 IN","#f4f8fb","#1d5fa8","#3aa7a0","cross","25 PADS"),w8:2,stack:1},{s:"box",w:.08,h:.12,d:.03,L:mt("SLEEP AID","NIGHTTIME","#1a2a5a","#fff","#7fa8d6","moon","32 CAPLETS"),w8:1,stack:1},{s:"bottle",r:.036,h:.23,L:mt("SHAMPOO","DAILY CLEAN","#2a9a9a","#fff","#fff","bubble","12 FL OZ"),cap:"white",body:"teal",w8:2},{s:"jug",w:.1,h:.24,d:.065,L:mt("MOUTHWASH","ANTISEPTIC MINT","#2f7a32","#fff","#f2f1ec","tooth","1 L"),cap:"white",body:"green",w8:1},{s:"box",w:.065,h:.15,d:.065,L:mt("COUGH SYRUP","DM MAX","#b81d18","#fff","#f2c21b","drop","8 FL OZ"),w8:2},{s:"bottle",r:.036,h:.21,L:mt("LOTION","DRY SKIN","#f2f1ec","#1d4f9a","#7fa8d6","drop","16 FL OZ"),cap:"white",body:"white",w8:1},{s:"bottle",r:.03,h:.18,L:mt("HAND SANITIZER","70% ALCOHOL","#cfe3ef","#1d5fa8","#1d5fa8","drop","12 FL OZ"),cap:"blue",body:"clear",w8:2},{s:"bottle",r:.04,h:.21,L:mt("ISOPROPYL","ALCOHOL 70%","#f2f1ec","#1d4f9a","#1d4f9a","drop","32 FL OZ"),cap:"white",body:"clear",w8:2},{s:"bottle",r:.04,h:.21,L:mt("HYDROGEN","PEROXIDE 3%","#f2f1ec","#8a4a1a","#8a4a1a","drop","32 FL OZ"),cap:"white",body:"amber",w8:1},{s:"box",w:.045,h:.19,d:.04,L:mt("TOOTHPASTE","FLUORIDE","#2a6fd6","#fff","#d6283a","tooth","6 OZ"),w8:2},{s:"box",w:.07,h:.15,d:.04,L:mt("DEODORANT","UNSCENTED","#4a4c50","#fff","#7fa8d6","drop","2.6 OZ"),w8:1},{s:"box",w:.1,h:.13,d:.04,L:mt("ORAL SALTS","REHYDRATION","#f4f8fb","#1d5fa8","#3aa7a0","drop","10 SACHETS"),w8:2,stack:1},{s:"box",w:.2,h:.14,d:.07,L:mt("FIRST AID KIT","100 PIECES","#c8201e","#fff","#fff","wcross","HOME CAR WORK",{tf:"#c8201e"}),w8:1},{s:"bag",w:.15,h:.2,d:.1,L:mt("COTTON BALLS","TRIPLE SIZE","#f2f1ec","#d6283a","#e9a0b0","bubble","100 CT"),gl:1,w8:1},{s:"bag",w:.11,h:.15,d:.04,L:mt("COUGH DROPS","HONEY LEMON","#f2c21b","#7a2a10","#c41e1e","drop","30 DROPS"),gl:1,w8:1},{s:"box",w:.065,h:.18,d:.025,L:mt("THERMOMETER","DIGITAL","#f2f1ec","#1d4f9a","#1d4f9a","bolt","ORAL 60 SEC"),w8:1},{s:"box",w:.05,h:.1,d:.03,L:mt("EYE DROPS","LUBRICANT","#f2f1ec","#2a9a9a","#2a9a9a","drop","0.5 FL OZ"),w8:1,stack:1}],hardware:[{s:"can",r:.085,h:.19,L:mt("INTERIOR PAINT","EGGSHELL  WHITE","#f2f1ec","#1d4f9a","#1d4f9a","drop","1 GALLON (3.78 L)"),w8:2},{s:"can",r:.085,h:.19,L:mt("PRIMER","STAIN BLOCKING","#c4221c","#fff","#2a2a2c","drop","1 GALLON"),w8:1},{s:"tall",r:.033,h:.21,L:mt("SPRAY PAINT","GLOSS BLACK","#1c1c1e","#fff","#e8701c","drop","NET WT 12 OZ"),cap:"black",w8:2},{s:"tall",r:.033,h:.21,L:mt("SPRAY PAINT","SAFETY RED","#f2f1ec","#c4221c","#c4221c","drop","NET WT 12 OZ"),cap:"red",w8:1},{s:"tall",r:.03,h:.2,L:mt("PENETRATING","OIL  FREES RUST","#1d4f9a","#f2c21b","#f2c21b","drop","NET WT 11 OZ"),cap:"blue",w8:2},{s:"box",w:.14,h:.09,d:.1,L:mt("WOOD SCREWS","#8 x 2-1/2 IN","#f2c21b","#111","#111","screw","1 LB"),w8:2,stack:1},{s:"box",w:.12,h:.1,d:.08,L:mt("FRAMING NAILS","16D  3-1/2 IN","#c4221c","#fff","#111","screw","5 LB"),w8:2,stack:1},{s:"tall",r:.025,h:.23,L:mt("SILICONE","SEALANT  CLEAR","#f2f1ec","#1d4f9a","#1d4f9a","drop","10.1 FL OZ"),cap:"white",w8:2},{s:"roll",r:.056,h:.048,cap:"tin",w8:2,stack:2,L:mt("DUCT TAPE","","#c9ccd0","#333","#c9ccd0")},{s:"box",w:.18,h:.2,d:.08,L:mt("EXTENSION CORD","25 FT  OUTDOOR","#e8701c","#fff","#1c1c1e","bolt","16/3 GAUGE"),w8:1},{s:"box",w:.075,h:.12,d:.07,L:mt("LED BULBS","60W EQUAL 4 PACK","#f2f1ec","#1d4f9a","#f2c21b","sun","SOFT WHITE"),w8:2,stack:1},{s:"bottle",r:.026,h:.15,L:mt("WOOD GLUE","INTERIOR","#f2c21b","#7a2a10","#7a2a10","drop","8 FL OZ"),cap:"orange",body:"white",w8:1},{s:"bag",w:.12,h:.24,d:.03,L:mt("WORK GLOVES","LEATHER PALM","#f2c21b","#111","#111","bolt","ONE PAIR  L"),gl:1,w8:2},{s:"bag",w:.1,h:.25,d:.02,L:mt("ZIP TIES","8 IN  BLACK","#cfdde4","#111","#c4221c","bolt","100 PACK"),gl:1,w8:1},{s:"jar",r:.07,h:.12,L:mt("SPACKLE","LIGHTWEIGHT","#f2f1ec","#1d4f9a","#c4221c","drop","1 QT"),cap:"white",body:"white",w8:1},{s:"box",w:.1,h:.16,d:.03,L:mt("AA BATTERIES","ALKALINE","#111","#f2c21b","#c98a2a","battery","8 PACK"),w8:2,stack:1},{s:"can",r:.035,h:.1,L:mt("PVC CEMENT","MEDIUM BODY","#4a4c50","#fff","#c4221c","drop","8 FL OZ"),cap:"red",w8:1,stack:1},{s:"box",w:.12,h:.2,d:.02,L:mt("SANDPAPER","ASSORTED GRIT","#e8701c","#fff","#1c1c1e","grain","12 SHEETS"),w8:1},{s:"box",w:.15,h:.15,d:.08,L:mt("NYLON ROPE","3/8 IN x 50 FT","#f2f1ec","#c4221c","#c4221c","bolt","WORKING LOAD 244 LB"),w8:2},{s:"roll",r:.05,h:.048,cap:"card",w8:1,stack:2,L:mt("MASKING","","#e8dcb0","#333","#e8dcb0")},{s:"jug",w:.1,h:.2,d:.06,L:mt("MOTOR OIL","5W-30 SYNTHETIC","#1c1c1e","#f2c21b","#f2c21b","drop","1 QUART"),cap:"black",body:"black",w8:2},{s:"box",w:.22,h:.16,d:.1,L:mt("UTILITY KNIFE","RETRACTABLE + 5 BLADES","#c4221c","#fff","#1c1c1e","bolt","CARDED"),w8:1}],outdoor:[{s:"tall",r:.056,h:.22,L:mt("PROPANE","CAMPING FUEL","#2f7a32","#fff","#1d4a20","flame","16.4 OZ"),cap:"brass",w8:3},{s:"can",r:.055,h:.1,L:mt("BUTANE","ISOBUTANE MIX","#1d4f9a","#fff","#e8701c","flame","8 OZ (227g)"),cap:"tin",w8:2,stack:1},{s:"box",w:.15,h:.26,d:.075,L:mt("CAMP FUEL","WHITE GAS","#c4221c","#fff","#f2c21b","flame","1 GALLON"),gl:1,w8:1},{s:"bag",w:.17,h:.24,d:.05,L:mt("BEEF STROGANOFF","FREEZE-DRIED MEAL","#2a3a2a","#f2c21b","#e8701c","noodle","2 SERVINGS"),gl:1,w8:2},{s:"bag",w:.17,h:.24,d:.05,L:mt("CHILI MAC","FREEZE-DRIED MEAL","#4a2412","#f2c21b","#c4221c","chili","2 SERVINGS"),gl:1,w8:2},{s:"box",w:.3,h:.22,d:.05,L:mt("TARP","ALL PURPOSE 8 x 10 FT","#1d4f9a","#fff","#f2c21b","drop","WATERPROOF"),w8:1},{s:"box",w:.16,h:.26,d:.16,L:mt("LED LANTERN","1000 LUMENS","#1c1c1e","#e8701c","#e8701c","sun","USES 3 D CELLS"),w8:1},{s:"box",w:.3,h:.12,d:.25,L:mt("CAMP STOVE","TWO BURNER","#2f7a32","#fff","#1c1c1e","flame","PROPANE"),w8:1,wide:1},{s:"tall",r:.03,h:.17,L:mt("BUG SPRAY","25% DEET","#2f7a32","#fff","#f2c21b","bug","6 OZ"),cap:"green",w8:2},{s:"bottle",r:.03,h:.16,L:mt("SUNSCREEN","SPF 50 SPORT","#f2c21b","#1d4f9a","#e8701c","sun","8 FL OZ"),cap:"blue",body:"yellow",w8:1},{s:"bag",w:.1,h:.14,d:.02,L:mt("HAND WARMERS","UP TO 10 HRS","#e0521c","#fff","#2a2a2c","flame","1 PAIR"),gl:1,w8:2,stack:1},{s:"bottle",r:.042,h:.21,L:mt("WATER BOTTLE","BPA FREE 32 OZ","#cfdde4","#1d4f9a","#1d4f9a","drop","WIDE MOUTH"),cap:"black",body:"clear",w8:1},{s:"can",r:.12,h:.36,L:mt("SLEEPING BAG","RATED 30 F","#2a5ab8","#fff","#1c1c1e","snow","STUFF SACK INCLUDED"),cap:"black",w8:1},{s:"box",w:.1,h:.13,d:.04,L:mt("FIRE STARTERS","WATERPROOF","#c4221c","#fff","#f2c21b","flame","12 PIECES"),w8:2,stack:1},{s:"box",w:.1,h:.2,d:.05,L:mt("WATER FILTER","SQUEEZE SYSTEM","#2a6fd6","#fff","#fff","drop","0.1 MICRON"),w8:1},{s:"bag",w:.1,h:.15,d:.02,L:mt("EMERGENCY BLANKET","MYLAR","#c9ccd0","#c4221c","#c4221c","sun","52 x 82 IN"),gl:1,w8:1,stack:1},{s:"box",w:.1,h:.18,d:.04,L:mt("HEADLAMP","300 LUMENS","#1c1c1e","#f2c21b","#f2c21b","sun","BATTERIES INCLUDED"),w8:1},{s:"box",w:.18,h:.08,d:.18,L:mt("MESS KIT","5 PIECE","#4a4c50","#fff","#e8701c","flame","ALUMINUM"),w8:1,stack:1},{s:"box",w:.11,h:.07,d:.035,L:mt("MATCHES","STRIKE ANYWHERE","#f2c21b","#c41e1e","#c41e1e","flame","250 CT"),w8:1,stack:2}],convenience:[{s:"can",r:.033,h:.122,L:{t:"COLA",s:"CLASSIC",n:"12 FL OZ",b:"#a8141a",f:"#fff",a:"#5a0a0a",p:"bubble"},cap:"tin",w8:2,stack:1,gl:1},{s:"can",r:.033,h:.122,L:{t:"LEMON LIME",s:"CAFFEINE FREE",n:"12 FL OZ",b:"#2f8a3a",f:"#f6ee4a",a:"#0f4a1a",p:"bubble"},cap:"tin",w8:2,stack:1,gl:1},{s:"can",r:.029,h:.16,L:mt("ENERGY","DRINK","#1c1c1e","#7fd62a","#7fd62a","bolt","16 FL OZ"),cap:"tin",w8:2,gl:1},{s:"bottle",r:.033,h:.21,L:mt("SPRING WATER","NATURAL","#e9f2f6","#1d5fa8","#3d8fd6","drop","16.9 FL OZ"),cap:"blue",body:"clear",w8:3},{s:"bottle",r:.036,h:.21,L:mt("SPORTS DRINK","GLACIER","#111","#fff","#2a7fd6","bolt","28 FL OZ"),cap:"blue",body:"blue",w8:2},{s:"bottle",r:.036,h:.245,L:mt("ORANGE SODA","","#e8701c","#fff","#1d4f9a","bubble","20 FL OZ"),cap:"orange",body:"orange",w8:1},{s:"bag",w:.2,h:.28,d:.07,L:mt("POTATO CHIPS","SEA SALT","#f2c21b","#c41e1e","#c41e1e","chip","8 OZ"),gl:1,w8:2},{s:"bag",w:.2,h:.28,d:.07,L:mt("TORTILLA CHIPS","NACHO","#c4221c","#fff","#f2c21b","chip","9.75 OZ"),gl:1,w8:2},{s:"box",w:.2,h:.06,d:.1,L:mt("CHOCOLATE BARS","MILK  36 CT","#4a2412","#f2c21b","#c4221c","bean","DISPLAY BOX"),w8:2,stack:2,wide:1},{s:"bag",w:.14,h:.2,d:.035,L:mt("BEEF JERKY","ORIGINAL","#2a2420","#f2c21b","#8a2a12","meat","3.25 OZ"),gl:1,w8:2},{s:"cup",r:.05,h:.1,L:mt("INSTANT NOODLES","SPICY BEEF","#f4f1ea","#c41e1e","#c41e1e","noodle","2.25 OZ"),cap:"white",w8:2,stack:1},{s:"jug",w:.1,h:.2,d:.06,L:mt("MOTOR OIL","10W-30","#1c1c1e","#f2c21b","#f2c21b","drop","1 QUART"),cap:"black",body:"black",w8:1},{s:"box",w:.1,h:.16,d:.03,L:mt("AA BATTERIES","ALKALINE","#111","#f2c21b","#c98a2a","battery","4 PACK"),w8:1,stack:1},{s:"box",w:.22,h:.1,d:.11,L:mt("TISSUES","2-PLY","#7fa8d6","#fff","#1d4f9a","bubble","160 SHEETS"),w8:1,wide:1,stack:1},{s:"box",w:.2,h:.08,d:.12,L:mt("SNACK CAKES","CREME FILLED","#f2f1ec","#c4221c","#e9a0b0","sun","8 CAKES"),w8:1,wide:1,stack:1},{s:"bag",w:.15,h:.22,d:.05,L:mt("TRAIL MIX","NUTS & RAISINS","#3a5a2a","#f2c21b","#e8701c","peanut","10 OZ"),gl:1,w8:1},{s:"can",r:.042,h:.09,L:mt("ROASTED PEANUTS","SALTED","#1d4f9a","#f2c21b","#f2c21b","peanut","16 OZ"),cap:"tin",w8:1,stack:1},{s:"box",w:.08,h:.05,d:.06,L:mt("GUM","SPEARMINT","#2f7a32","#fff","#fff","leaf","15 STICKS"),w8:1,stack:2},{s:"bottle",r:.03,h:.2,L:mt("ICED TEA","LEMON","#f2c21b","#7a2a10","#7a2a10","leaf","18.5 FL OZ"),cap:"yellow",body:"amber",w8:1}]},ja=2048,Qa=1024,Qn=256,sf=8,mf=31;function bo(n){return[n%sf*Qn,Math.floor(n/sf)*Qn]}function Xx(n){if(n.s==="box"||n.s==="bag"||n.s==="jug")return[256,Math.round(256*n.h/n.w)];let t=n.r,e=n.s==="bottle"?n.h*.55:n.s==="jar"?n.h*.85:n.s==="tall"?n.h*.78:n.h;return[512,Math.max(60,Math.round(512*e/(Zt*t)))]}function Yx(n){return sn(af,"atlas|"+n,()=>{let t=lf(ja,Qa);if(!t)return null;let e=t.getContext("2d");e.fillStyle="#888",e.fillRect(0,0,ja,Qa);let i=Cs(So("atlas"+n));vo[n].forEach((a,l)=>{let[c,h]=bo(l),[u,f]=Xx(a);e.save(),e.beginPath(),e.rect(c,h,Qn,Qn),e.clip(),e.translate(c,h),e.scale(Qn/u,Qn/f),a.s==="roll"?De(e,u,f,i,a.L.b,.08,400,2):a.s==="box"||a.s==="bag"||a.s==="jug"?uf(e,u,f,a.L,i):hf(e,u,f,a.L,i),e.restore(),e.fillStyle=a.L.b,e.fillRect(c,h+Qn*.3,12,Qn*.6)});let[s,r]=bo(mf);Gx.forEach((a,l)=>{let c=s+l%4*64,h=r+Math.floor(l/4)*64;e.fillStyle=a,e.fillRect(c,h,64,64);for(let u=0;u<120;u++)e.fillStyle=i()<.5?"rgba(0,0,0,0.06)":"rgba(255,255,255,0.08)",e.fillRect(c+i()*64,h+i()*64,2,2)});let o=new An(t);return o.colorSpace=ze,o.anisotropy=4,o})}function X0(n,t,e,i){return[n/ja,1-(t+i)/Qa,(n+e)/ja,1-t/Qa]}function qx(n){let[t,e]=bo(n);return X0(t+2,e+2,Qn-4,Qn-4)}function $x(n){let[t,e]=bo(n);return X0(t+3,e+Qn*.35,6,Qn*.45)}function Zx(n){let t=Wx[n]??0,[e,i]=bo(mf);return X0(e+t%4*64+12,i+Math.floor(t/4)*64+12,40,40)}var rf=new WeakMap;function Kx(n){let t=rf.get(n);if(t)return t;t=new Uint8Array(n.attributes.position.count);let e=n.index;for(let i of n.groups)for(let s=i.start;s<i.start+i.count;s++)t[e?e.getX(s):s]=i.materialIndex;return rf.set(n,t),t}var Mo=class{constructor(t){this.b=[];for(let e=0;e<t;e++)this.b.push({p:[],n:[],u:[],i:[]})}add(t,e,i,s){let r=t.attributes.position,o=t.attributes.normal,a=t.attributes.uv,l=t.index,c=Kx(t),h=new ce().getNormalMatrix(e),u=e.elements,f=h.elements,d=new Int32Array(r.count),g=new Uint8Array(r.count);for(let m=0;m<r.count;m++){let p=c[m],M=s[p]??s[0],y=this.b[M];g[m]=M,d[m]=y.p.length/3;let _=r.getX(m),D=r.getY(m),C=r.getZ(m);y.p.push(u[0]*_+u[4]*D+u[8]*C+u[12],u[1]*_+u[5]*D+u[9]*C+u[13],u[2]*_+u[6]*D+u[10]*C+u[14]);let P=o.getX(m),N=o.getY(m),A=o.getZ(m),S=f[0]*P+f[3]*N+f[6]*A,U=f[1]*P+f[4]*N+f[7]*A,q=f[2]*P+f[5]*N+f[8]*A,H=Math.hypot(S,U,q)||1;y.n.push(S/H,U/H,q/H);let W=i[p]??i[0];y.u.push(W[0]+a.getX(m)*(W[2]-W[0]),W[1]+a.getY(m)*(W[3]-W[1]))}let x=l?l.count:r.count;for(let m=0;m<x;m+=3){let p=l?l.getX(m):m,M=l?l.getX(m+1):m+1,y=l?l.getX(m+2):m+2;this.b[g[p]].i.push(d[p],d[M],d[y])}}meshes(t){let e=[];return this.b.forEach((i,s)=>{if(!i.i.length)return;let r=new Pe;r.setAttribute("position",new oe(i.p,3)),r.setAttribute("normal",new oe(i.n,3)),r.setAttribute("uv",new oe(i.u,2)),r.setIndex(i.p.length/3>65535?new ur(i.i,1):new hr(i.i,1)),r.computeBoundingSphere(),r.computeBoundingBox();let o=new Vt(r,t[s]);o.receiveShadow=!0,e.push(o)}),e}};function Jx(n,t){return sn(bn,`prod|${n}|${t}`,()=>{let e=vo[n][t],i=qx(t),s=$x(t),r=f=>Zx(f),o=e.gl?1:0,a=new de,l=(f,d,g)=>new de().makeTranslation(f,d,g),c=[];switch(e.s){case"can":c.push({geo:Q(e.r,e.r,e.h,12),m:a,rects:[i,r(e.cap||"tin"),r(e.cap||"tin")],bk:[o,1,1]});break;case"tall":c.push({geo:Q(e.r,e.r,e.h*.78,10),m:a,rects:[i,r("tin"),r("tin")],bk:[o,1,1]}),c.push({geo:Q(e.r*.94,e.r*.94,e.h*.22,10),m:l(0,e.h*.78,0),rects:[r(e.cap||"white"),r(e.cap||"white"),r(e.cap||"white")],bk:[1,1,1]});break;case"box":c.push({geo:ot(e.w,e.h,e.d),m:a,rects:[s,s,s,s,i,i],bk:[o,o,o,o,o,o]});break;case"bag":c.push({geo:To(e.w,e.h,e.d,.06,4,5),m:a,rects:[s,s,s,s,i,i],bk:[o,o,o,o,o,o]});break;case"bottle":{let f=r(e.body||"white");c.push({geo:Q(e.r,e.r,e.h*.55,10),m:l(0,e.h*.05,0),rects:[i,f,f],bk:[1,1,1]}),c.push({geo:Q(e.r,e.r*.95,e.h*.05,10,!0),m:a,rects:[f],bk:[1]}),c.push({geo:Q(e.r*.38,e.r,e.h*.25,10,!0),m:l(0,e.h*.6,0),rects:[f],bk:[1]});let d=r(e.cap||"white");c.push({geo:Q(e.r*.42,e.r*.42,e.h*.15,8),m:l(0,e.h*.85,0),rects:[d,d,d],bk:[1,1,1]});break}case"jar":{let f=r(e.body||"white"),d=r(e.cap||"white");c.push({geo:Q(e.r,e.r,e.h*.85,10),m:a,rects:[i,f,f],bk:[o,1,1]}),c.push({geo:Q(e.r*.9,e.r*.9,e.h*.15,10),m:l(0,e.h*.85,0),rects:[d,d,d],bk:[1,1,1]});break}case"jug":{let f=r(e.body||"white"),d=r(e.cap||"white");c.push({geo:ot(e.w,e.h*.8,e.d),m:a,rects:[f,f,f,f,i,i],bk:[1,1,1,1,0,0]}),c.push({geo:Q(e.w*.2,e.w*.42,e.h*.08,8,!0),m:l(-e.w*.15,e.h*.8,0),rects:[f],bk:[1]}),c.push({geo:Q(e.w*.2,e.w*.2,e.h*.12,8),m:l(-e.w*.15,e.h*.88,0),rects:[d,d,d],bk:[1,1,1]});break}case"cup":{let f=r(e.cap||"white");c.push({geo:Q(e.r,e.r*.76,e.h,12),m:a,rects:[i,f,f],bk:[0,1,0]});break}case"roll":{let f=r(e.cap||"tin");c.push({geo:Q(e.r,e.r,e.h,12),m:a,rects:[i,r("card"),r("card")],bk:[1,0,0]}),c.push({geo:Q(e.r*.68,e.r*.68,.002,10),m:l(0,e.h,0),rects:[f,r("dark"),r("dark")],bk:[0,0,0]});break}}let h=e.w??e.r*2,u=e.d??e.r*2;return{p:e,parts:c,w:h,h:e.h,d:u}})}function B0(n,t,e,i,s,r,o,a=0){let l=new de().makeRotationY(r);if(o){let u=a?new de().makeRotationX(o):new de().makeRotationZ(o);l.multiply(u)}let c=1/0,h=new I;for(let u of[-1,1])for(let f of[0,1])for(let d of[-1,1])h.set(u*t.w/2,f*t.h,d*t.d/2).applyMatrix4(l),c=Math.min(c,h.y);l.setPosition(e,i-c,s);for(let u of t.parts){let f=new de().multiplyMatrices(l,u.m);n.add(u.geo,f,u.rects,u.bk)}}function jx(n){let t=Yx(n);return[ye("shelfMatte|"+n,{map:t,roughness:.72,metalness:0}),ye("shelfGloss|"+n,{map:t,roughness:.32,metalness:.2})]}function gf(n="grocery",t=2,e=[.1,.5,.9,1.3],i=.7,s=0){vo[n]||(n="grocery");let r=Cs(So(n)^Math.imul((s|0)+7,2654435761));i=As.clamp(i,0,1);let o=vo[n],a=o.map((y,_)=>Jx(n,_)),l=o.reduce((y,_)=>y+(_.w8||1),0),c=y=>{for(let D=0;D<12;D++){let C=r()*l,P=0;for(;C>(o[P].w8||1);)C-=o[P].w8||1,P++;if(a[P].h<=y)return P}let _=0;return a.forEach((D,C)=>{D.h<a[_].h&&(_=C)}),a[_].h<=y?_:-1},h=new Mo(2),u=.385,f=.02,d=[...e].sort((y,_)=>y-_),g=0;d.forEach((y,_)=>{let D=(_+1<d.length?d[_+1]-y:.42)-.035,C=-t/2+.015;for(;C<t/2-.05;){let P=c(D);if(P<0)break;let N=a[P],A=N.p,S=.25+r()*.45,U=Math.max(1,Math.round(S/(N.w+.004))),q=r()<(1-i)*.55,H=Math.max(1,Math.min(A.wide?2:3,Math.floor((u-f)/(N.d+.004))));for(let W=0;W<U&&C+N.w<t/2-.01;W++){let lt=C+N.w/2;if(C+=N.w+.004+(i<.6?r()*.01:0),q&&r()<.9)continue;let K=i*H*(.6+r()*.8),gt=Math.min(H,Math.max(0,Math.round(K-.2)));i>.92&&(gt=H);for(let Z=0;Z<gt;Z++){let wt=i>.85?0:(H-gt)*(N.d+.004)*(.3+r()*.7),At=u-N.d/2-(gt-1-Z)*(N.d+.004)-wt,Nt=1-i,te=Math.PI/2+(r()-.5)*(.04+Nt*.5),ge=0,nt=0;if(Z===gt-1&&r()<Nt*.16?(ge=Math.PI/2*(r()<.5?1:-1),nt=r()<.5?1:0,te+=(r()-.5)*1.2):r()<Nt*.06&&(te+=(r()-.5)*2.5),B0(h,N,Math.max(f+N.d/2,At),y,lt+(r()-.5)*Nt*.02,te,ge,nt),g++,A.stack&&!ge&&i>.45){let vt=Math.min(A.stack+1,Math.floor(D/(N.h+.002)));for(let Bt=1;Bt<vt&&!(r()>i*1.05);Bt++)B0(h,N,Math.max(f+N.d/2,At)+(r()-.5)*.004,y+Bt*(N.h+.001),lt+(r()-.5)*.006,te+(r()-.5)*.08,0),g++}}}C+=r()<.15+(1-i)*.3?r()*.08:.002}});let x=Math.round((1-i)*t*(1+r()*1.2));for(let y=0;y<x;y++){let _=a[Math.floor(r()*a.length)];_.h>.32||(B0(h,_,.45+r()*.85,0,(r()-.5)*(t-.2),r()*Zt,r()<.75?Math.PI/2:0,r()<.5?1:0),g++)}let m=new jt;m.name="shelfFill:"+n;let p=h.meshes(jx(n)),M=0;for(let y of p)m.add(y),M+=y.geometry.index.count/3;return m.userData={kind:n,items:g,triangles:M,drawCalls:p.length},m}var T_=Object.keys(vo);function of(n,t,e=1){return sn(bn,"quads"+n,()=>{let i=[],s=[],r=new I,o=new I,a=new I,l=new I;for(let h of t){r.fromArray(h[0]),o.fromArray(h[1]),a.fromArray(h[2]),l.fromArray(h[3]);let u=r.distanceTo(o)*e,f=r.distanceTo(l)*e;i.push(...h[0],...h[1],...h[2],...h[0],...h[2],...h[3]),s.push(0,0,u,0,u,f,0,0,u,f,0,f)}let c=new Pe;return c.setAttribute("position",new oe(i,3)),c.setAttribute("uv",new oe(s,2)),c.computeVertexNormals(),c})}function Qx(){return It("wiregrid",64,64,(n,t,e)=>{n.clearRect(0,0,t,e),n.fillStyle="#d4d8dc",n.fillRect(0,0,t,7),n.fillRect(0,32,t,7),n.fillRect(0,0,7,e),n.fillRect(32,0,7,e),n.fillStyle="rgba(255,255,255,0.6)",n.fillRect(0,2,t,2),n.fillRect(0,34,t,2),n.fillRect(2,0,2,e),n.fillRect(34,0,2,e)},{repeat:[1,1]})}function t_(){return ye("wiremat",{map:Qx(),color:14672870,roughness:.35,metalness:.45,alphaTest:.5,side:Ce,transparent:!1})}function nn(n,t,e,i,s,r=!1,o=24){return v(n,Rn(t,e,i,o,6,r),s)}function Ka(n,t=.04){let e=[],i=n.length,s=n.map(r=>new I(...r));for(let r=0;r<i;r++){let o=s[(r+i-1)%i],a=s[r],l=s[(r+1)%i],c=o.clone().sub(a).normalize().multiplyScalar(t).add(a),h=l.clone().sub(a).normalize().multiplyScalar(t).add(a),u=c.clone().add(h).multiplyScalar(.5).lerp(a,.45);e.push(c.toArray(),u.toArray(),h.toArray())}return e}function Ja(n,t,e,i=.05){v(n,Q(i,i,.03,10),st.rubber,t+.015,i,e,0,0,Math.PI/2),v(n,Q(i*.5,i*.5,.032,8),st.greyPl,t+.016,i,e,0,0,Math.PI/2),v(n,ot(.012,i*1.4,.045),st.steel,t+.018,i*.9,e),v(n,ot(.012,i*1.4,.045),st.steel,t-.018,i*.9,e),v(n,ot(.05,.012,.05),st.steel,t,i*2.2,e)}function e_(n,t,e,i,s,r,o,a=0){v(n,Ie(s-r,r,5,24),st.rubber,t,e,i,0,Math.PI/2,0),v(n,Ie(s-r*2.2,r*.4,3,24),o,t,e,i,0,Math.PI/2,0),v(n,Q(.025,.025,.05,10),o,t-.025,e,i,0,0,Math.PI/2);for(let l=0;l<a;l++)v(n,Q(.0025,.0025,(s-r*2.2)*2,4),o,t,e,i,l*Math.PI/a,0,0,1,1,1)}function n_(n,t,e,i){return Y(It(n,t,e,i),.5)}function z0(n,t,e,i,s,r){let o=xe(s,["FRAGILE","CANNED GOODS","PAPER TOWELS","BOTTLED WATER","SUPPLIES","HANDLE WITH CARE","PRODUCE","DRY GOODS"]),a=Y(W0(o,Math.floor(s()*4)),.9),l=Y(hs(),.9),c=r?et(2760728,.95):Y(It("cartontop",256,256,(h,u,f,d)=>{De(h,u,f,d,"#a9824f",.1,2500,2),h.fillStyle="rgba(40,25,10,0.5)",h.fillRect(0,f/2-1,u,2),h.fillStyle="rgba(200,170,110,0.8)",h.fillRect(0,f*.42,u,f*.16),h.fillStyle="rgba(255,255,255,0.18)",h.fillRect(0,f*.44,u,3),ae(h,u,f,d,1)}),.85);v(n,ot(t,e,i),[a,a,c,l,a,a])}var tl={shopping_cart(n,t){let e=t_(),i=et(13225425,.3,.5),s=[[-.27,1,.45],[.27,1,.45],[.25,.98,-.45],[-.25,.98,-.45]],r=[[-.23,.55,.38],[.23,.55,.38],[.19,.6,-.36],[-.19,.6,-.36]],o=[[r[0],r[3],s[3],s[0]],[r[2],r[1],s[1],s[2]],[r[3],r[2],s[2],s[3]],[r[1],r[0],s[0],s[1]],[r[0],r[1],r[2],r[3]],[[-.22,.16,.38],[.22,.16,.38],[.2,.16,-.36],[-.2,.16,-.36]]];v(n,of("cart",o,30),e),nn(n,"cartrim2",Ka(s,.04),.008,i,!0,60),nn(n,"cartbot2",Ka(r,.03),.006,i,!0,60);for(let l of[-1,1])nn(n,"cartbase"+l,[[l*.2,.13,-.4],[l*.22,.13,.1],[l*.24,.14,.42],[l*.25,.5,.45],[l*.27,.98,.47]],.012,i,!1,20),nn(n,"cartstrut"+l,[[l*.19,.6,-.36],[l*.2,.14,-.36]],.009,i,!1,2);let a=et(12853788,.45);v(n,Q(.016,.016,.58,12),a,-.29,1.03,.5,0,0,-Math.PI/2);for(let l of[-1,1])v(n,Q(.008,.008,.06,6),i,l*.27,1,.485,.7,0,0);v(n,ot(.3,.06,.004),n_("cartplate",256,64,(l,c,h)=>{l.fillStyle="#c4221c",l.fillRect(0,0,c,h),qt(l,"PLEASE RETURN CART",c/2,h/2,22,{color:"#fff",maxW:c*.9})}),0,.88,-.455);for(let[l,c]of[[-.2,-.38],[.2,-.38],[-.22,.4],[.22,.4]])Ja(n,l,c,.055);t()<.4&&(n.rotation.y=t()*Zt)},basket(n,t){let e=xe(t,["#c4221c","#1d4f9a","#2f7a32"]),i=It("basketholes"+e,64,64,(a,l,c)=>{a.fillStyle=e,a.fillRect(0,0,l,c),a.clearRect(8,10,20,12),a.clearRect(36,10,20,12),a.clearRect(8,40,20,12),a.clearRect(36,40,20,12)},{repeat:[1,1]}),s=ye("basket"+e,{map:i,roughness:.5,alphaTest:.5,side:Ce}),r=[[-.22,.22,.16],[.22,.22,.16],[.22,.22,-.16],[-.22,.22,-.16]],o=[[-.19,0,.13],[.19,0,.13],[.19,0,-.13],[-.19,0,-.13]];v(n,of("basket",[[o[0],o[1],r[1],r[0]],[o[1],o[2],r[2],r[1]],[o[2],o[3],r[3],r[2]],[o[3],o[0],r[0],r[3]]],12),s),v(n,ot(.38,.01,.26),et(new Yt(e).getHex(),.5)),nn(n,"basketrim2",Ka(r,.03),.01,et(new Yt(e).getHex(),.45),!0,24);for(let a of[-1,1])nn(n,"baskethandle"+a,[[-.2,.22,a*.16],[-.12,.36,a*.06],[.12,.36,a*.06],[.2,.22,a*.16]],.009,st.blackPl,!1,16)},cardboard_box(n,t){let e=.3+t()*.3,i=.22+t()*.25,s=.25+t()*.2,r=t()<.5;if(z0(n,e,i,s,t,r),r){let o=Y(hs(1),.9),a=(l,c,h,u,f,d,g,x)=>{let m=new jt;v(m,ot(h,.004,u),o,f,0,d),m.position.set(l,i,c),m.rotation.set(g,0,x),n.add(m)};a(0,s/2,e,s/2,0,s/4,(t()-.25)*1.5,0),a(0,-s/2,e,s/2,0,-s/4,-(t()-.25)*1.5,0),a(e/2,0,e/2,s,e/4,0,0,-(t()-.25)*1.5),a(-e/2,0,e/2,s,-e/4,0,0,(t()-.25)*1.5)}},box_stack(n,t){let e=1+Math.floor(t()*2);for(let i=0;i<e;i++){let s=0,r=2+Math.floor(t()*3),o=.4+t()*.15,a=.32+t()*.1;for(let l=0;l<r;l++){let c=.25+t()*.15,h=new jt;z0(h,o*(.9+t()*.1),c,a*(.9+t()*.1),t,!1),h.position.set(i*.6+(t()-.5)*.06,s,(t()-.5)*.06),h.rotation.y=(t()-.5)*.25,n.add(h),s+=c}}if(t()<.5){let i=new jt;z0(i,.4,.3,.3,t,!1),i.position.set(-.55,.2,.3),i.rotation.set(Math.PI/2,t()*2,0),n.add(i)}},pallet(n){let t=Y(Rr("#b48a5a","#7a5a35","pallet"),.9);for(let e=0;e<7;e++)v(n,ot(1.2,.02,.1),t,0,.12,-.45+e*.15);for(let e of[-.45,0,.45])v(n,ot(1.2,.1,.1),t,0,.02,e,0,0,0);for(let e=0;e<3;e++)v(n,ot(.1,.02,1),t,-.55+e*.55,0,0)},trash_bag(n,t){let e=Math.floor(t()*4),i=sn(bn,"trashbag"+e,()=>{let o=new $i(.28,14,10),a=o.attributes.position,l=Cs(77+e),c=Array.from({length:6},()=>[new I(l()-.5,l()-.5,l()-.5).normalize(),.03+l()*.05]),h=new I;for(let u=0;u<a.count;u++){h.set(a.getX(u),a.getY(u),a.getZ(u));let f=h.clone().normalize(),d=0;for(let[g,x]of c)d+=Math.max(0,f.dot(g)-.6)*x*3;d+=(l()-.5)*.015,h.addScaledVector(f,d),h.y*=.8,h.y<-.15&&(h.y=-.15+(h.y+.15)*.15),a.setXYZ(u,h.x*(1+e*.05),h.y+.18,h.z)}return o.computeVertexNormals(),o}),s=xe(t,[1118740,1118740,2046495,6974056]),r=et(s,.3,.1);v(n,i,r),v(n,Q(.02,.06,.08,8),r,0,.38+e*0,0),v(n,un(.03,8,6),r,0,.47,0),v(n,Q(.005,.04,.1,6),r,.04,.47,0,0,0,-1.1,1,1,.3),v(n,Q(.005,.04,.1,6),r,-.04,.47,0,0,0,1.1,1,1,.3)},trash_pile(n,t){let e=2+Math.floor(t()*3);for(let a=0;a<e;a++){let l=new jt;tl.trash_bag(l,Cs(Math.floor(t()*1e9)));let c=t()*Zt,h=a===0?0:.35+t()*.2;l.position.set(Math.cos(c)*h,0,Math.sin(c)*h),l.rotation.set((t()-.5)*.4,t()*Zt,(t()-.5)*.4),l.scale.setScalar(.8+t()*.4),n.add(l)}let i=Y(fi(xe(t,Cr),512,200),.5),s=Y(fi({t:"COLA",s:"CLASSIC",n:"12 FL OZ",b:"#a8141a",f:"#fff",a:"#5a0a0a",p:"bubble"},512,150),.35,.3),r=Y(jn({t:"CHIPS",b:"#f2c21b",f:"#c41e1e",a:"#c41e1e",p:"chip"},128,160),.35,.3);for(let a=0;a<7;a++){let l=t()*Zt,c=.4+t()*.6,h=a%3;h===2?v(n,To(.12,.16,.02,.06,4,5),r,Math.cos(l)*c,.01,Math.sin(l)*c,-Math.PI/2,0,t()*3):v(n,Q(h?.033:.038,h?.033:.038,h?.122:.11,10),[h?s:i,st.tin,st.tin],Math.cos(l)*c,h?.033:.038,Math.sin(l)*c,Math.PI/2,0,t()*Zt,1,t()<.5?.6:1,1)}v(n,ot(.5,.008,.4),[Y(hs(),.9),Y(hs(),.9),Y(W0("PAPER TOWELS",1),.9),Y(hs(),.9),Y(hs(),.9),Y(hs(),.9)],-.6,.004,.4,0,t()*2,.05);let o=Ki("paper_scatter",Math.floor(t()*1e3));o.scale.setScalar(.6),n.add(o)},register(n){let t=et(2763566,.45),e=Y(It("posscreen",256,192,(s,r,o,a)=>{s.fillStyle="#0c0f12",s.fillRect(0,0,r,o),s.fillStyle="rgba(120,140,160,0.12)";for(let l=0;l<6;l++)s.fillRect(12,14+l*26,r*.55,16);for(let l=0;l<8;l++)s.fillRect(r*.66+l%2*40,14+Math.floor(l/2)*40,34,32);s.fillStyle="rgba(255,255,255,0.05)",s.beginPath(),s.moveTo(0,0),s.lineTo(r*.5,0),s.lineTo(0,o*.7),s.fill(),ae(s,r,o,a,1.5)}),.15,.1);v(n,ot(.44,.1,.42),[t,t,t,t,Y(It("drawer",256,64,(s,r,o)=>{s.fillStyle="#2a2b2e",s.fillRect(0,0,r,o),s.fillStyle="#111",s.fillRect(8,6,r-16,2),s.fillRect(r/2-20,o/2,40,6),s.fillStyle="#888",s.beginPath(),s.arc(r-30,o/2,6,0,Zt),s.fill()}),.5),t],0,0,0),v(n,Q(.025,.04,.2,10),t,0,.1,-.05);let i=new jt;v(i,Qt(.38,.28,.05,.012),[t,t,t,t,e,t]),i.position.set(0,.28,-.05),i.rotation.x=-.25,n.add(i),v(n,Qt(.3,.03,.12,.008),Y(It("keys",256,96,(s,r,o)=>{s.fillStyle="#333",s.fillRect(0,0,r,o);for(let a=0;a<4;a++)for(let l=0;l<12;l++)s.fillStyle=l>8&&a<3?"#5a5a5a":"#cfcfcf",s.fillRect(6+l*20.5,6+a*22,17,18)}),.5),0,.1,.13,.15,0,0),v(n,Qt(.09,.05,.14,.01),t,.3,0,.1,.4,-.3,0),v(n,ot(.07,.001,.06),ye("readerscreen",{color:1316892,roughness:.1}),.3,.052,.095,.4,-.3,0),v(n,Qt(.15,.13,.18,.02),et(14474456,.5),-.3,0,-.02),v(n,ot(.08,.001,.12),st.paper,-.3,.135,.11,-.5,0,0)},price_strip(n,t){let e=It("pricestrip",1024,48,(i,s,r,o)=>{i.fillStyle="#e8e6e0",i.fillRect(0,0,s,r);let a=6;for(;a<s-60;){let l=70+Math.floor(o()*40),c=o()<.2;i.fillStyle=c?"#f2c21b":"#ffffff",i.fillRect(a,4,l,r-8),qt(i,`$${(o()*9+.5).toFixed(2)}`,a+l*.68,r*.45,18,{color:c?"#c41e1e":"#111",maxW:l*.6}),Je(i,a+4,8,l*.35,3,6,o,"#444"),i.fillStyle="#000";for(let h=0;h<14;h++)o()<.6&&i.fillRect(a+4+h*2,r-14,1,7);a+=l+10+Math.floor(o()*60)}ae(i,s,r,o,.6)});v(n,ot(.012,.04,1),[Y(e,.5),et(13619151,.6),et(13619151,.6),et(13619151,.6),et(13619151,.6),et(13619151,.6)]),t()<.6&&v(n,ot(.002,.035,.07),st.paper,.012,-.02,(t()-.5)*.8,0,0,.6)},chair(n,t){let e=Y(Rr(xe(t,["#b98c5a","#7a5032","#d0b08a"]),"#5a3a20","chair"),.6);v(n,Qt(.44,.04,.42,.01),e,0,.43,0);for(let[i,s]of[[-.19,-.18],[.19,-.18],[-.19,.18],[.19,.18]])v(n,Q(.018,.015,.43,8),e,i,0,s);for(let i of[-.19,.19])v(n,Q(.018,.018,.48,8),e,i,.45,-.19,-.08,0,0);v(n,Qt(.44,.08,.025,.01),e,0,.87,-.23,-.08,0,0);for(let i=0;i<3;i++)v(n,Q(.01,.01,.38,6),e,-.1+i*.1,.47,-.205,-.08,0,0);for(let i of[-.18,.18])v(n,Q(.01,.01,.38,6),e,.19,.15,i,0,0,Math.PI/2);t()<.3&&(n.rotation.z=Math.PI/2,n.position.y=.22)},office_chair(n,t){let e=Y(ui(xe(t,["#2a2a2c","#22304a","#3a2a2a"]),"office"),.95),i=st.blackPl;for(let s=0;s<5;s++){let r=s*Zt/5,o=v(n,ot(.3,.03,.045),i,Math.cos(r)*.15,.06,Math.sin(r)*.15,0,-r,0);o.rotation.z=0,v(n,un(.028,6,4),i,Math.cos(r)*.3,.028,Math.sin(r)*.3)}v(n,Q(.03,.03,.32,10),st.chrome,0,.08,0),v(n,Q(.05,.05,.08,10),i,0,.06,0),v(n,Qt(.5,.08,.48,.035),e,0,.42,0),v(n,ot(.05,.3,.03),i,0,.45,-.25,-.1,0,0),v(n,Qt(.46,.55,.07,.035),e,0,.56,-.29,-.12,0,0);for(let s of[-1,1])v(n,ot(.03,.18,.03),i,s*.24,.45,0,0,0,0),v(n,Qt(.06,.03,.24,.01),i,s*.24,.63,0);n.rotation.y=t()*Zt},ceiling_tile(n,t){let e=Y(It("ceiltile",256,256,(a,l,c,h)=>{De(a,l,c,h,"#e6e3da",.06,2500,2),a.fillStyle="rgba(90,85,75,0.35)";for(let f=0;f<900;f++)a.beginPath(),a.ellipse(h()*l,h()*c,1+h()*2.5,.6+h(),h()*3,0,Zt),a.fill();let u=a.createRadialGradient(l*.6,c*.4,10,l*.6,c*.4,120);u.addColorStop(0,"rgba(140,100,40,0.35)"),u.addColorStop(.7,"rgba(140,100,40,0.15)"),u.addColorStop(1,"rgba(140,100,40,0)"),a.fillStyle=u,a.fillRect(0,0,l,c)}),.95),i=et(14210248,.95),s=et(12103840,.95),r=[[.6,.6],[.35,.28],[.22,.18],[.12,.1]],o=0;for(let[a,l]of r.slice(0,2+Math.floor(t()*3))){let c=v(n,ot(a*(.8+t()*.2),.016,l*(.8+t()*.2)),[i,i,e,s,i,i],(t()-.5)*.7*(o?1:0),.008+(o===1?.03:0),(t()-.5)*.7*(o?1:0),o===1?.15:(t()-.5)*.05,t()*Zt,0);o===1&&(c.position.y=.04),o++}for(let a=0;a<8;a++)v(n,ot(.02+t()*.03,.012,.02+t()*.03),i,(t()-.5)*.9,.006,(t()-.5)*.9,0,t()*3,0)},paper_scatter(n,t){let e=It("papers",1024,512,(o,a,l,c)=>{for(let u=0;u<8;u++){let f=u%4*256,d=Math.floor(u/4)*256;o.save(),o.translate(f,d);let g=u%8;if(o.fillStyle=g===2?"#f2e6a0":g===5?"#e9e4d6":"#f4f2ec",o.fillRect(0,0,256,256),g===0)qt(o,"NOTICE TO RESIDENTS",128,30,22,{color:"#111",maxW:220}),Je(o,20,60,216,14,12,c,"#333");else if(g===1)o.fillStyle="#c41e1e",o.fillRect(0,0,256,50),qt(o,"BOIL WATER",128,26,30,{color:"#fff",maxW:230}),qt(o,"UNTIL FURTHER NOTICE",128,74,18,{color:"#111",maxW:230}),Je(o,20,100,216,10,13,c,"#333");else if(g===2)qt(o,"SHELTER",128,50,40,{color:"#1d4f9a",maxW:230}),qt(o,"MEMORIAL COLISEUM",128,92,18,{color:"#111",maxW:230}),qt(o,"FOOD  WATER  MEDICAL",128,124,16,{color:"#111",maxW:230}),Je(o,30,150,196,6,13,c,"#333");else if(g===3)o.fillStyle="#ddd",o.fillRect(0,0,256,256),o.fillStyle="#fbfbf8",o.fillRect(70,0,116,256),Je(o,78,14,100,18,12,c,"#555"),qt(o,"TOTAL  $48.17",128,236,13,{color:"#111"});else if(g===4){qt(o,"THE DAILY",128,26,30,{color:"#111",font:'Georgia, "DejaVu Serif", serif',maxW:230}),o.fillStyle="#111",o.fillRect(10,46,236,2),qt(o,"OUTBREAK SPREADS",128,70,24,{color:"#111",maxW:236,font:Zi});for(let x=0;x<3;x++)Je(o,12+x*80,92,70,14,11,c,"#444")}else if(g===5)qt(o,"LOST DOG",128,40,40,{color:"#111",maxW:230}),el(o,"paw",128,120,45,c),qt(o,'ANSWERS TO "BISCUIT"',128,190,16,{color:"#111",maxW:230}),Je(o,40,210,176,2,12,c,"#333");else if(g===6){o.strokeStyle="rgba(80,120,200,0.5)";for(let x=30;x<256;x+=16)o.beginPath(),o.moveTo(0,x),o.lineTo(256,x),o.stroke();o.strokeStyle="rgba(200,60,60,0.5)",o.beginPath(),o.moveTo(30,0),o.lineTo(30,256),o.stroke(),qt(o,"went to the river camp",40,42,15,{color:"#223",align:"left",italic:!0,weight:"normal"}),qt(o,"water + food there?",40,58,15,{color:"#223",align:"left",italic:!0,weight:"normal"}),qt(o,"- M.",40,74,15,{color:"#223",align:"left",italic:!0,weight:"normal"})}else o.fillStyle="#e8e2d2",o.fillRect(0,0,256,256),Je(o,20,20,90,3,12,c,"#444"),Je(o,90,110,120,3,12,c,"#222"),o.fillStyle="#c41e1e",o.fillRect(200,14,40,40),qt(o,"PAST DUE",128,200,22,{color:"#c41e1e"});ae(o,256,256,c,1.4),o.restore()}}),i=new Mo(1),s=sn(bn,"paperplane",()=>{let o=new Ge(.216,.28,3,1).rotateX(-Math.PI/2),a=o.attributes.position;for(let l=0;l<a.count;l++){let c=a.getX(l);a.setY(l,Math.pow(Math.abs(c)/.108,2)*.012)}return o.computeVertexNormals(),o}),r=10+Math.floor(t()*10);for(let o=0;o<r;o++){let a=Math.floor(t()*8),l=[a%4/4,1-(Math.floor(a/4)+1)/2,(a%4+1)/4,1-Math.floor(a/4)/2],c=t()*Zt,h=Math.sqrt(t())*1,u=new de().compose(new I(Math.cos(c)*h,.002+o*8e-4,Math.sin(c)*h),new Bn().setFromEuler(new Hn((t()-.5)*.06,t()*Zt,(t()-.5)*.06)),new I(a===3?.5:1,1,1));i.add(s,u,[l],[0])}for(let o of i.meshes([ye("papermat",{map:e,roughness:.9,side:Ce,...H0})]))n.add(o)},glass_shards(n,t){let e=[],i=60+Math.floor(t()*40);for(let o=0;o<i;o++){let a=t()*Zt,l=Math.pow(t(),.7)*.8,c=Math.cos(a)*l,h=Math.sin(a)*l,u=.015+t()*.06*(1-l*.6),f=.002+t()*.004,d=[],g=t()<.5?3:4;for(let x=0;x<g;x++){let m=x/g*Zt+t()*.8;d.push([c+Math.cos(m)*u*(.4+t()),f+(t()<.15?t()*.015:0),h+Math.sin(m)*u*(.4+t())])}e.push(...d[0],...d[2],...d[1]),g===4&&e.push(...d[0],...d[3],...d[2])}let s=new Pe;s.setAttribute("position",new oe(e,3)),s.computeVertexNormals();let r=new Vt(s,ye("shardglass",{color:15268090,roughness:.04,metalness:.5,transparent:!0,opacity:.75,side:Ce,depthWrite:!1,emissive:1712676,...H0}));n.add(r)},traffic_cone(n){let t=Y(It("cone",64,256,(e,i,s,r)=>{e.fillStyle="#f0641c",e.fillRect(0,0,i,s),e.fillStyle="#f2f2f2",e.fillRect(0,s*.22,i,s*.13),e.fillRect(0,s*.48,i,s*.09),ae(e,i,s,r,1.5)}),.55);v(n,Q(.025,.13,.66,16,!0),t,0,.03,0),v(n,Jn(.025,10),et(15754268,.6),0,.69,0),v(n,Qt(.36,.03,.36,.02),et(13651994,.8))},mop_bucket(n,t){let e=et(15909403,.5);v(n,Qt(.46,.32,.34,.05),e,0,.06,0),v(n,ot(.38,.002,.26),ye("dirtywater",{color:4867638,roughness:.1,metalness:.2}),0,.33,0),v(n,Qt(.18,.2,.28,.02),et(4869200,.5),.12,.34,0),v(n,Q(.012,.012,.5,8),et(4869200,.5),.2,.5,-.1,.6,0,0);for(let[s,r]of[[-.19,-.13],[.19,-.13],[-.19,.13],[.19,.13]])v(n,un(.035,8,6),st.blackPl,s,.035,r);v(n,Q(.012,.012,1.35,8),et(2781142,.4),.06,.25,.04,0,0,-.18);let i=Y(It("mopstrands",64,64,(s,r,o,a)=>{s.fillStyle="#b8b0a0",s.fillRect(0,0,r,o);for(let l=0;l<r;l+=3)s.fillStyle=`rgba(0,0,0,${.1+a()*.25})`,s.fillRect(l,0,1,o)}),.95);v(n,Q(.08,.11,.22,10),i,.03,.22,.04)},wet_floor_sign(n){let t=It("wetfloor",256,512,(s,r,o,a)=>{s.fillStyle="#f2c21b",s.fillRect(0,0,r,o),s.fillStyle="#111",s.fillRect(0,o*.08,r,o*.12),qt(s,"CAUTION",r/2,o*.14,46,{color:"#f2c21b",maxW:r*.9}),s.fillStyle="#111",s.beginPath(),s.moveTo(r/2,o*.27),s.lineTo(r*.88,o*.62),s.lineTo(r*.12,o*.62),s.closePath(),s.fill(),s.fillStyle="#f2c21b",s.beginPath(),s.moveTo(r/2,o*.31),s.lineTo(r*.8,o*.6),s.lineTo(r*.2,o*.6),s.closePath(),s.fill(),s.strokeStyle="#111",s.lineWidth=7,s.lineCap="round",s.beginPath(),s.arc(r*.56,o*.4,9,0,Zt),s.fillStyle="#111",s.fill(),s.beginPath(),s.moveTo(r*.54,o*.43),s.lineTo(r*.46,o*.52),s.moveTo(r*.46,o*.52),s.lineTo(r*.38,o*.56),s.moveTo(r*.46,o*.52),s.lineTo(r*.58,o*.57),s.moveTo(r*.52,o*.46),s.lineTo(r*.62,o*.47),s.moveTo(r*.5,o*.47),s.lineTo(r*.42,o*.44),s.stroke(),qt(s,"WET FLOOR",r/2,o*.72,40,{color:"#111",maxW:r*.9}),qt(s,"PISO MOJADO",r/2,o*.8,26,{color:"#111",maxW:r*.9}),ae(s,r,o,a,1.2)}),e=Y(t,.45),i=et(15909403,.45);for(let s of[-1,1]){let r=new jt;v(r,ot(.3,.6,.012),[i,i,i,i,s<0?e:i,s>0?e:i],0,-.6,0),r.position.set(0,.62,0),r.rotation.x=s*.2,n.add(r)}v(n,Ie(.05,.012,5,12,Math.PI),i,0,.62,0)},fire_extinguisher(n){let t=et(12850716,.35,.1);v(n,He("extbody",[[0,0],[.07,0],[.076,.012],[.076,.38],[.065,.43],[.03,.455],[.02,.46]],18),t),v(n,ot(.09,.14,.002),Y(jn({t:"FIRE",t2:"EXTINGUISHER",s:"ABC DRY CHEMICAL",n:"INSPECT MONTHLY",b:"#f4f1ea",f:"#c4161c",a:"#c4161c",p:"flame"},192,300),.5),0,.16,.074),v(n,Q(.02,.022,.04,10),st.brass,0,.455,0),v(n,ot(.12,.012,.03),st.chrome,.03,.5,0,0,0,.1),v(n,ot(.1,.012,.028),st.chrome,.02,.475,0,0,0,.05),v(n,Q(.017,.017,.01,12),st.chrome,-.04,.47,.012,Math.PI/2),v(n,Jn(.014,12),Y(It("gauge",64,64,(e,i,s)=>{e.fillStyle="#fff",e.beginPath(),e.arc(32,32,30,0,Zt),e.fill(),e.fillStyle="#2f9a3a",e.beginPath(),e.moveTo(32,32),e.arc(32,32,26,-2.2,-.9),e.fill(),e.strokeStyle="#111",e.lineWidth=3,e.beginPath(),e.moveTo(32,32),e.lineTo(46,16),e.stroke()}),.3),-.04,.47,.018,Math.PI/2),nn(n,"exthose",[[.04,.46,0],[.09,.44,.02],[.1,.3,.05],[.085,.18,.06],[.07,.12,.07]],.009,st.rubber,!1,20),v(n,Q(.008,.014,.05,8),st.blackPl,.07,.07,.07),v(n,Ie(.012,.002,4,10),et(15909403,.4),0,.49,.02,0,Math.PI/2,0)},iv_stand(n,t){for(let e=0;e<5;e++){let i=e*Zt/5;v(n,ot(.28,.025,.03),st.chrome,Math.cos(i)*.14,.05,Math.sin(i)*.14,0,-i,0),v(n,un(.022,8,6),st.blackPl,Math.cos(i)*.27,.022,Math.sin(i)*.27)}v(n,Q(.012,.012,1.85,8),st.chrome,0,.05,0);for(let e=0;e<4;e++)v(n,Ie(.04,.004,4,10,Math.PI),st.chrome,Math.cos(e*Math.PI/2)*.04,1.86,Math.sin(e*Math.PI/2)*.04,0,-e*Math.PI/2,Math.PI);if(t()<.75){let e=new jt;nl.saline(e,t),e.rotation.x=Math.PI/2,e.position.set(.08,1.85,-.02),n.add(e),nn(n,"ivline",[[.08,1.58,0],[.1,1.2,.02],[.14,.8,.05],[.12,.5,.1],[.05,.35,.12]],.002,ye("ivtube",{color:15660278,roughness:.2,transparent:!0,opacity:.6}),!1,24)}},wheelchair(n){let t=st.chrome,e=Y(ui("#1d1e22","wc"),.9);for(let i of[-1,1])e_(n,i*.3,.3,-.05,.3,.018,t,12),v(n,Ie(.27,.005,3,20),st.chrome,i*.33,.3,-.05,0,Math.PI/2,0),Ja(n,i*.22,.32,.06),nn(n,"wcside",[[0,.16,.3],[0,.5,.3],[0,.5,-.12],[0,.95,-.2],[0,.95,-.28]],.011,t,!1,20).position.x=i*.22,v(n,Q(.016,.016,.1,8),st.rubber,i*.22,.95,-.3,Math.PI/2,0,0),nn(n,"wcfoot",[[0,.5,.25],[0,.18,.42],[0,.12,.44]],.01,t,!1,10).position.x=i*.2,v(n,ot(.12,.01,.12),st.blackPl,i*.13,.12,.46),v(n,Qt(.05,.03,.28,.01),st.blackPl,i*.23,.68,.06),nn(n,"wcarm",[[0,.5,.18],[0,.66,.18]],.01,t,!1,2).position.x=i*.23;v(n,ot(.42,.012,.42),e,0,.495,.08),v(n,ot(.42,.4,.012),e,0,.55,-.15,-.15,0,0),v(n,Q(.01,.01,.44,8),t,-.22,.25,.08,0,0,-Math.PI/2)},gurney(n,t){let e=st.chrome;nn(n,"gurneyframe2",Ka([[-.32,.6,-.95],[.32,.6,-.95],[.32,.6,.95],[-.32,.6,.95]],.06),.016,e,!0,60);for(let[s,r]of[[-.25,-.75],[.25,-.75],[-.25,.75],[.25,.75]])v(n,Q(.02,.02,.52,8),e,s,.1,r),Ja(n,s,r,.055);v(n,ot(.56,.03,1.6),e,0,.12,0);let i=Y(It("sheet",128,256,(s,r,o,a)=>{De(s,r,o,a,"#e8ecee",.06,1500,2),s.strokeStyle="rgba(0,0,0,0.08)";for(let l=0;l<12;l++)s.beginPath(),s.moveTo(a()*r,0),s.bezierCurveTo(a()*r,o*.3,a()*r,o*.6,a()*r,o),s.stroke();ae(s,r,o,a,1)}),.95);v(n,Qt(.62,.1,1.86,.04),i,0,.63,0),v(n,Qt(.42,.08,.26,.04),et(16054006,.95),0,.72,-.75,.1,0,0),v(n,Qt(.64,.05,.5,.025),Y(ui("#3a6a9a","blanket"),.95),0,.72,.62,0,.08,.02);for(let s of[-1,1])nn(n,"gurneyrail"+s,[[s*.33,.62,-.5],[s*.34,.84,-.45],[s*.34,.84,.45],[s*.33,.62,.5]],.01,e,!1,20);nn(n,"gurneyhandle",[[-.25,.62,.95],[-.25,.9,1],[.25,.9,1],[.25,.62,.95]],.013,e,!1,20),t()<.5&&(n.rotation.y=(t()-.5)*.8)},medical_cart(n,t){let e=xe(t,["#c4221c","#2a6fd6","#d8d8d4"]),i=et(new Yt(e).getHex(),.4,.1),s=Y(It("cartdrawers"+e,256,320,(o,a,l,c)=>{o.fillStyle=e,o.fillRect(0,0,a,l);let h=[.15,.15,.2,.25,.25],u=0;for(let f of h){let d=f*l;o.fillStyle="rgba(0,0,0,0.35)",o.fillRect(0,u,a,3),o.fillStyle="rgba(255,255,255,0.15)",o.fillRect(0,u+3,a,2),o.fillStyle="#ddd",o.fillRect(a*.35,u+d*.35,a*.3,8),o.fillStyle="#f4f1ea",o.fillRect(a*.08,u+d*.3,44,18),Je(o,a*.09,u+d*.3+5,40,1,8,c,"#333"),u+=d}ae(o,a,l,c,1)}),.4,.1);v(n,Qt(.7,.85,.5,.02),[i,i,i,i,s,i],0,.1,0),v(n,ot(.76,.03,.56),et(4869200,.5),0,.95,0);for(let o of[-1,1])v(n,ot(.76,.05,.01),et(4869200,.5),0,.98,o*.275);for(let[o,a]of[[-.28,-.18],[.28,-.18],[-.28,.18],[.28,.18]])Ja(n,o,a,.045);nn(n,"mcarthandle",[[.37,.8,-.18],[.42,.82,-.15],[.42,.82,.15],[.37,.8,.18]],.012,st.chrome,!1,12);let r=new jt;Wn(r,.24,.12,.13,{t:"EXAM GLOVES",s:"NITRILE  POWDER FREE",n:"100 GLOVES  SIZE L",b:"#2a6fd6",f:"#fff",a:"#fff",tf:"#2a6fd6",p:"cross"},{tw:256,th:128}),r.position.set(-.15,.98,0),r.rotation.y=.2,n.add(r),v(n,ot(.18,.22,.12),et(12852766,.45),.2,.98,-.05),v(n,ot(.14,.03,.1),et(15921644,.5),.2,1.2,-.05)},locker_row(n,t){let e=xe(t,["#4a5a6a","#6a7a5a","#8a8a86","#3a4a7a"]),i=Y(It("lockerdoor"+e,128,512,(u,f,d,g)=>{De(u,f,d,g,e,.05,1500,2),u.fillStyle="rgba(0,0,0,0.5)";for(let x of[.08,.82])for(let m=0;m<6;m++)u.fillRect(f*.25,d*x+m*10,f*.5,4);u.fillStyle="rgba(255,255,255,0.12)",u.fillRect(4,4,f-8,2),u.fillStyle="#d8d8d4",u.fillRect(f*.35,d*.3,f*.3,20),ae(u,f,d,g,1.5)}),.45,.35),s=Y(G0(e,"locker"),.5,.3),r=et(1974564,.8),o=4,a=.3,l=1.8,c=.45;v(n,ot(o*a+.02,l,c),[s,s,s,s,r,s],0,.08,0),v(n,ot(o*a+.02,.08,c-.04),et(1973790,.8),0,0,-.02);let h=Math.floor(t()*(o+2));for(let u=0;u<o;u++){let f=new jt;v(f,ot(a-.012,l-.03,.015),[s,s,s,s,i,s],(a-.012)/2,0,0),v(f,ot(.02,.1,.02),st.chrome,a*.82,l*.48,.015);let d=It("lockernum"+(101+u),64,32,(g,x,m)=>{g.fillStyle="#d8d8d4",g.fillRect(0,0,x,m),qt(g,String(101+u),x/2,m/2,20,{color:"#111"})});v(f,ot(.05,.025,.002),[st.paper,st.paper,st.paper,st.paper,Y(d,.5),st.paper],a*.48,l*.86,.009),f.position.set(-o*a/2+u*a+.006,.095,c/2),u===h&&(f.rotation.y=-(.7+t()*.9)),n.add(f)}for(let u=1;u<o;u++)v(n,ot(.012,l,c-.02),s,-o*a/2+u*a,.08,0);for(let u=0;u<o;u++)v(n,ot(a-.02,.012,c-.04),s,-o*a/2+u*a+a/2,1.55,0);h<o&&v(n,Qt(.2,.3,.12,.03),Y(ui("#2f3f2a","lk"),.85),-o*a/2+h*a+a/2,.1,0)},helmet_rack(n,t){let e=et(5922402,.5,.4),i=1.8,s=1.9;for(let a of[-i/2,-i/6,i/6,i/2])v(n,ot(.04,s,.04),e,a,0,-.25);v(n,ot(i+.04,.03,.45),e,0,1.6,-.05),v(n,ot(i+.04,.03,.45),e,0,.35,-.05);let r=Y(It("turnout",128,256,(a,l,c,h)=>{De(a,l,c,h,"#a8946a",.1,2e3,2);for(let u of[.55,.9])a.fillStyle="#d8e040",a.fillRect(0,c*u,l,c*.06),a.fillStyle="#d8d8d8",a.fillRect(0,c*u+c*.018,l,c*.024);ae(a,l,c,h,2)}),.9),o=[15909403,1908256,12853788,15921644];for(let a=0;a<3;a++){let l=-i/3+a*i/3;if(v(n,Qt(.5,.85,.2,.08),r,l,.6,-.12),v(n,Q(.07,.075,.75,8),r,l-.29,.68,-.12,0,0,.08),v(n,Q(.07,.075,.75,8),r,l+.29,.68,-.12,0,0,-.08),v(n,Ie(.1,.03,4,10),r,l,1.42,-.12,Math.PI/2,0,0,1,.8,1),t()<.85){let h=et(xe(t,o),.35),u=new jt;v(u,He("helmdome",[[0,.2],[.07,.19],[.12,.15],[.14,.08],[.15,0]],14),h,0,0,0),v(u,Q(.19,.2,.012,16),h,0,-.005,.03,0,0,0,1,1,1.25),v(u,ot(.1,.06,.012),et(12950085,.4,.5),0,.1,.15,-.5,0,0),u.position.set(l+(t()-.5)*.1,1.625,-.05),u.rotation.y=(t()-.5)*.6,n.add(u)}let c=et(1908256,.6);for(let h of[-1,1])v(n,ot(.11,.06,.28),c,l+h*.07,0,.07),v(n,Q(.06,.065,.3,8),c,l+h*.07,.04,0),v(n,Ie(.07,.035,4,8),r,l+h*.07,.36,0,Math.PI/2),v(n,Q(.066,.066,.03,8,!0),et(14213184,.5),l+h*.07,.25,0);v(n,ot(.1,.06,.002),Y(It("nametag"+a,128,64,(h,u,f)=>{h.fillStyle="#1d1e20",h.fillRect(0,0,u,f),qt(h,["ENGINE 1","TRUCK 3","RESCUE 7"][a],u/2,f/2,22,{color:"#f2c21b",maxW:u*.9})}),.5),l,1.52,.18)}},hose_reel(n){let t=et(12853788,.45,.15),e=Y(It("hose",128,32,(s,r,o)=>{s.fillStyle="#b8201e",s.fillRect(0,0,r,o),s.fillStyle="rgba(0,0,0,0.25)";for(let a=0;a<r;a+=4)s.fillRect(a,0,1,o)},{repeat:[6,1]}),.7);for(let s of[-1,1])v(n,Q(.38,.38,.02,20),t,s*.25-.01,.55,0,0,0,Math.PI/2),nn(n,"reelleg"+s,[[0,0,-.35],[0,.55,0],[0,0,.35]],.02,t,!1,4).position.x=s*.29;v(n,Q(.04,.04,.6,10),st.steel,-.3,.55,0,0,0,-Math.PI/2);let i=Y(It("hosecoil",256,64,(s,r,o)=>{s.fillStyle="#9a1a18",s.fillRect(0,0,r,o);for(let a=0;a<r;a+=8){let l=s.createLinearGradient(a,0,a+8,0);l.addColorStop(0,"#5a0e0c"),l.addColorStop(.5,"#c8282a"),l.addColorStop(1,"#5a0e0c"),s.fillStyle=l,s.fillRect(a,0,8,o)}},{repeat:[1,6]}),.7);v(n,Q(.31,.31,.47,20),[i,et(5901836,.8),et(5901836,.8)],-.235,.55,0,0,0,-Math.PI/2);for(let s=0;s<7;s++)v(n,Ie(.31,.019,4,18),e,-.21+s*.07,.55,0,0,Math.PI/2,0);nn(n,"hosetail",[[0,.2,.3],[.05,.05,.45],[.2,.025,.7],[.4,.025,.8]],.022,e,!1,20),v(n,Q(.025,.04,.16,10),st.brass,.42,.04,.82,0,0,Math.PI/2+.3),nn(n,"reelcrank",[[.29,.55,0],[.36,.55,0],[.36,.4,0],[.42,.4,0]],.012,st.steel,!1,6)},kitchen_counter_items(n,t){let e=Y(Ar("#c9ccd0","kettle"),.25,.55);v(n,He("kettle",[[0,0],[.09,0],[.1,.03],[.095,.12],[.06,.17],[.025,.18],[0,.185]],18),e,-.4,0,0),v(n,un(.015,8,6),st.blackPl,-.4,.19,0),nn(n,"kettlespout",[[-.32,.05,0],[-.27,.12,0],[-.25,.16,0]],.012,e,!1,8),v(n,Ie(.06,.012,5,12,Math.PI),st.blackPl,-.4,.17,0,0,0,0);let i=ye("plate",{color:15921644,roughness:.3,side:Ce});for(let r=0;r<5;r++)v(n,He("plate",[[0,0],[.07,0],[.09,.012],[.12,.018]],18),i,-.1,r*.014,.05);for(let r=0;r<2;r++){let o=ye("mug"+Math.floor(t()*4),{color:[1920922,12853788,15921644,3111474][r%4],roughness:.35,side:Ce});v(n,He("mug",[[0,0],[.04,0],[.042,.095],[.037,.095],[.035,.008],[0,.008]],14),o,.08+r*.1,0,-.08),v(n,Ie(.025,.007,4,10,Math.PI*1.2),o,.08+r*.1+.045,.05,-.08,0,0,-Math.PI*.6)}let s=new jt;Wn(s,.19,.29,.07,{t:"CORN FLAKES",s:"TOASTED",n:"NET WT 18 OZ",b:"#f2f1ec",f:"#1d4f9a",a:"#e8701c",p:"grain",top:"FAMILY SIZE",tf:"#fff"}),s.position.set(.35,0,.05),s.rotation.y=-.3,n.add(s),v(n,Qt(.36,.018,.24,.008),Y(Rr("#c9a26c","#8a6a3a","board"),.7),-.05,0,.2),v(n,He("bowl",[[0,0],[.04,0],[.07,.03],[.08,.06],[.075,.06],[.065,.032],[.035,.008],[0,.008]],16),ye("bowl",{color:14207144,roughness:.4,side:Ce}),.2,0,.22)},bookshelf(n,t){let e=Y(Rr("#7a5032","#4a2a18","shelf"),.7),i=.9,s=1.8,r=.3,o=5;v(n,ot(.02,s,r),e,-i/2+.01,0,0),v(n,ot(.02,s,r),e,i/2-.01,0,0),v(n,ot(i,.01,r),et(3810328,.8),0,0,-r/2+.005,Math.PI/2,0,0);for(let f=0;f<=o;f++)v(n,ot(i-.04,.02,r),e,0,.05+f*(s-.07)/o,0);let a=It("spines",1024,256,(f,d,g,x)=>{for(let m=0;m<32;m++){let p=m*32,M=xe(x,["#7a1d1a","#22304a","#2f4a2a","#c9a24a","#e8e2d2","#1d1e20","#5a2a5a","#2a6a7a","#c4521c","#4a3a2a"]);V0(f,0,0,x,0),f.fillStyle=M,f.fillRect(p,0,32,g),f.fillStyle="rgba(255,255,255,0.12)",f.fillRect(p+2,0,2,g),f.fillStyle="rgba(0,0,0,0.2)",f.fillRect(p+28,0,4,g),f.fillStyle=x()<.5?"#e8d8a0":"#f4f1ea",f.fillRect(p+6,g*.1,20,3),f.fillRect(p+6,g*.85,20,3);for(let y=0;y<6;y++)f.fillRect(p+12,g*.25+y*14,8,9)}ae(f,d,g,x,1)}),l="#efe6cf",c=new Mo(1),h=ot(1,1,1);for(let f=0;f<o;f++){let d=.06+f*(s-.07)/o,g=-i/2+.03,x=(s-.07)/o-.03;for(;g<i/2-.06;){if(t()<.12){g+=.05+t()*.15;continue}let m=.02+t()*.035,p=Math.min(x,.17+t()*.12),M=.15+t()*.08,y=Math.floor(t()*32),_=[y/32,0,(y+1)/32,1],D=t()<.08?.25:0,C=new de().compose(new I(g+m/2+D*p*.5,d,-r/2+M/2+.01),new Bn().setFromEuler(new Hn(0,0,-D)),new I(m,p,M));c.add(h,C,[_,_,[.999,.999,1,1],_,_,_],[0]),g+=m+.002+D*p}}c.meshes([ye("bookmat",{map:a,roughness:.75})]).forEach(f=>n.add(f))},tv(n,t){let e=et(1118740,.4),i=Y(It("tvscreen"+(t()<.3?"c":""),256,144,(s,r,o,a)=>{let l=s.createLinearGradient(0,0,r,o);l.addColorStop(0,"#1a1d22"),l.addColorStop(.5,"#0a0c0e"),l.addColorStop(1,"#14171a"),s.fillStyle=l,s.fillRect(0,0,r,o),ae(s,r,o,a,1.5)}),.12,.2);v(n,ot(1.23,.71,.04),[e,e,e,e,i,e],0,.1,0),v(n,ot(.06,.1,.03),e,0,0,-.01),v(n,Qt(.4,.015,.2,.006),e,0,0,0)},lamp(n,t){let e=et(xe(t,[14207144,2771562,9058858]),.3);v(n,He("lampbase",[[0,0],[.08,0],[.085,.02],[.1,.12],[.09,.2],[.03,.26],[.015,.28],[0,.28]],16),e),v(n,Q(.006,.006,.18,6),st.brass,0,.28,0);let i=ye("lampshade",{map:It("shadefab",128,64,(s,r,o,a)=>{De(s,r,o,a,"#e8dcc0",.08,800,1),ae(s,r,o,a,1)}),roughness:.95,side:Ce});v(n,Q(.1,.17,.2,18,!0),i,0,.37,0),v(n,un(.03,8,6),ye("bulb",{color:16052448,roughness:.2}),0,.45,0)},rug(n,t){let e=xe(t,[["#7a1d1a","#22304a","#c9a24a"],["#2a3a5a","#c8b48a","#7a2a1a"],["#4a5a3a","#e8dcc0","#7a4a2a"]]),i=It("rug"+e.join(),512,360,(r,o,a,l)=>{r.fillStyle=e[0],r.fillRect(0,0,o,a);for(let c=0;c<3;c++)r.strokeStyle=c%2?e[2]:e[1],r.lineWidth=10,r.strokeRect(24+c*16,18+c*16,o-48-c*32,a-36-c*32);r.fillStyle=e[1],r.beginPath(),r.moveTo(o/2,a*.22),r.lineTo(o*.72,a/2),r.lineTo(o/2,a*.78),r.lineTo(o*.28,a/2),r.closePath(),r.fill(),r.fillStyle=e[2],r.beginPath(),r.moveTo(o/2,a*.32),r.lineTo(o*.62,a/2),r.lineTo(o/2,a*.68),r.lineTo(o*.38,a/2),r.closePath(),r.fill();for(let c=0;c<40;c++)r.fillStyle=l()<.5?e[1]:e[2],r.fillRect(90+l()*(o-180),80+l()*(a-160),6,6);r.fillStyle="#e8dcc0";for(let c=0;c<o;c+=4)r.fillRect(c,0,2,10),r.fillRect(c,a-10,2,10);V0(r,o,a,l,.15),ae(r,o,a,l,2)}),s=sn(bn,"rug",()=>{let r=new Ge(2,1.4,8,6).rotateX(-Math.PI/2),o=r.attributes.position;for(let a=0;a<o.count;a++){let l=o.getX(a),c=o.getZ(a),h=Math.hypot(l-1,c-.7);o.setY(a,.004+Math.max(0,.45-h)*.18)}return r.computeVertexNormals(),r});v(n,s,ye("rugmat"+e.join(),{map:i,roughness:1,side:Ce,...H0}))},potted_plant_dead(n,t){let e=Y(It("terracotta",128,64,(o,a,l,c)=>{De(o,a,l,c,"#b5653a",.12,1500,2),o.fillStyle="rgba(255,255,255,0.15)";for(let h=0;h<6;h++)o.fillRect(0,l*.8+c()*l*.2,a,2);ae(o,a,l,c,1)}),.85);v(n,He("pot",[[0,0],[.11,0],[.15,.24],[.17,.25],[.17,.3],[.155,.3],[.15,.26]],16),e),v(n,Jn(.15,16),Y(It("soil",64,64,(o,a,l,c)=>De(o,a,l,c,"#3a2a1e",.3,800,2)),1),0,.27,0);let i=et(5917234,.9),s=ye("deadleaf",{color:8018482,roughness:.95,side:Ce}),r=sn(bn,"leafdisc",()=>new io(.035,5).scale(1,.45,1));for(let o=0;o<6;o++){let a=t()*Zt,l=.1+t()*.3,c=.3+t()*.35,h=[[0,.27,0],[Math.cos(a)*l*.2,.27+c*.5,Math.sin(a)*l*.2],[Math.cos(a)*l*.6,.27+c*.85,Math.sin(a)*l*.6],[Math.cos(a)*l*(.9+t()*.4),.27+c*(.7+t()*.2),Math.sin(a)*l]];v(n,new ao(new yr(h.map(u=>new I(...u))),6,.005,4),i);for(let u=0;u<3;u++){let f=.4+u*.2;v(n,r,s,h[2][0]*f,.27+c*f*.9,h[2][2]*f,t()*3,t()*3,t()*3)}}for(let o=0;o<6;o++)v(n,r,s,(t()-.5)*.7,.004,(t()-.5)*.7,-Math.PI/2,0,t()*3)},kids_toy(n,t){let e=xe(t,["#8a5a32","#c8a070","#6a4a3a"]),i=Y(It("bearfur"+e,128,128,(o,a,l,c)=>{De(o,a,l,c,e,.25,5e3,2),ae(o,a,l,c,1.5)}),1),s=Y(It("bearlight"+e,64,64,(o,a,l,c)=>De(o,a,l,c,Xn(e,.4),.2,800,2)),1),r=et(1118481,.3);v(n,un(.09,10,8),i,0,.1,0,0,0,0,1,1.15,.9),v(n,un(.055,10,8),s,0,.09,.045,0,0,0,1,1.2,.6),v(n,un(.075,10,8),i,0,.255,.01),v(n,un(.03,8,6),s,0,.24,.07,0,0,0,1.1,.8,.9),v(n,un(.011,6,4),r,0,.25,.097);for(let o of[-1,1])v(n,un(.009,6,4),r,o*.027,.275,.068),v(n,un(.03,8,6),i,o*.055,.315,0,0,0,0,1,1,.5),v(n,un(.018,8,6),s,o*.055,.315,.012,0,0,0,1,1,.4),v(n,un(.03,8,6),i,o*.1,.13,.03,.6,0,o*.5,1,1.9,1),v(n,un(.035,8,6),i,o*.055,.035,.08,Math.PI/2,0,0,1,1.8,1),v(n,Jn(.026,10),s,o*.055,.035,.143,Math.PI/2,0,0);t()<.6&&v(n,Ie(.04,.01,4,12),et(12853788,.6),0,.19,.02,Math.PI/2+.2,0,0,1,1,.5),n.rotation.y=(t()-.5)*.6,t()<.3&&(n.rotation.x=-1.2)}},w_=Object.keys(tl),i_=new Set(["rug","paper_scatter","glass_shards"]),H0={polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2};function Ki(n,t=0){let e=new jt,i=Cs(So(String(n))^Math.imul((t|0)+3,2246822519)),s=tl[n];if(s)s(e,i);else{let r=new jt;tl.cardboard_box(r,i),e.add(r)}return ff(e,n,i_.has(n))}function Y0(n,t=!1){let e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new Pe,c=0;for(let h=0;h<n.length;++h){let u=n[h],f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in u.attributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(e){let h=0,u=[];for(let f=0;f<n.length;++f){let d=n[f].index;for(let g=0;g<d.count;++g)u.push(d.getX(g)+h);h+=n[f].attributes.position.count}l.setIndex(u)}for(let h in r){let u=xf(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let x=0;x<o[h].length;++x)d.push(o[h][x][f]);let g=xf(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function xf(n){let t,e,i,s=-1,r=0;for(let c=0;c<n.length;++c){let h=n[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new Ve(o,e,i),l=0;for(let c=0;c<n.length;++c){let h=n[c];if(h.isInterleavedBufferAttribute){let u=l/e;for(let f=0,d=h.count;f<d;f++)for(let g=0;g<e;g++){let x=h.getComponent(f,g);a.setComponent(f+u,g,x)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}var il=[{group:"Movement",keys:["KeyW","KeyA","KeyS","KeyD"],show:"W A S D",action:"move",label:"Walk (also arrow keys)",ready:!0},{group:"Movement",keys:["Space"],show:"Space",action:"jump",label:"Jump",ready:!0},{group:"Movement",keys:["ShiftLeft","ShiftRight"],show:"Shift (hold)",action:"sprint",label:"Sprint",ready:!0},{group:"Movement",keys:["ControlLeft","ControlRight"],show:"Ctrl (hold)",action:"crouch",label:"Crouch",ready:!0},{group:"Movement",keys:["KeyZ"],show:"Z",action:"stance",label:"Change stance: stand, crouch, prone",ready:!0},{group:"Movement",keys:["CapsLock"],show:"Caps Lock",action:"walktoggle",label:"Slow walk on / off",ready:!0},{group:"Movement",keys:[],show:"Mouse",action:"look",label:"Look (click the view first)",ready:!0},{group:"Interact",keys:["KeyE"],show:"E",action:"interact",label:"Take the item you look at (also doors, gates). Hold E: take all in reach",ready:!0},{group:"Interact",keys:["KeyF"],show:"F",action:"context",label:"Context: take the item, or items found before. Hold F: take all in reach",ready:!0},{group:"Interact",keys:["KeyL"],show:"L",action:"flashlight",label:"Flashlight on / off",ready:!0},{group:"Interact",keys:["Mouse1"],show:"Middle mouse",action:"ping",label:"Mark a spot on the floor",ready:!0},{group:"Interact",keys:["Mouse2"],show:"Right mouse (hold)",action:"aim",label:"Look closer (zoom)",ready:!0},{group:"Panels",keys:["Tab","KeyI"],show:"Tab / I",action:"inventory",label:"Inventory",ready:!0},{group:"Panels",keys:["KeyC"],show:"C",action:"character",label:"Character and vitals",ready:!0},{group:"Panels",keys:["KeyM"],show:"M",action:"map",label:"Floor plan of this building",ready:!0},{group:"Panels",keys:["KeyJ"],show:"J",action:"journal",label:"Journal",ready:!0},{group:"Panels",keys:["KeyO"],show:"O",action:"objectives",label:"Objectives",ready:!0},{group:"Panels",keys:["KeyK"],show:"K",action:"skills",label:"Skills",ready:!1},{group:"Panels",keys:["KeyP"],show:"P",action:"progression",label:"Character progression",ready:!1},{group:"Panels",keys:["KeyN"],show:"N",action:"crafting",label:"Crafting",ready:!1},{group:"Panels",keys:["KeyU"],show:"U",action:"perks",label:"Perks",ready:!1},{group:"Quick items",keys:["Digit5"],show:"5",action:"quick_med",label:"Medical item (bandage, pills)",ready:!0},{group:"Quick items",keys:["Digit6"],show:"6",action:"quick_stamina",label:"Stamina item",ready:!1},{group:"Quick items",keys:["Digit7"],show:"7",action:"quick_food",label:"Eat or drink (what you need most)",ready:!0},{group:"Quick items",keys:["Digit8"],show:"8",action:"quick_buff",label:"Stimulant",ready:!1},{group:"Quick items",keys:["Digit9"],show:"9",action:"quick_utility",label:"Utility: new batteries in the flashlight",ready:!0},{group:"Quick items",keys:["Digit0"],show:"0",action:"inventory",label:"Item list (opens the inventory)",ready:!0},{group:"Weapons (not yet)",keys:["Mouse0"],show:"Left mouse",action:"fire",label:"Fire",ready:!1},{group:"Weapons (not yet)",keys:["KeyR"],show:"R",action:"reload",label:"Reload",ready:!1},{group:"Weapons (not yet)",keys:["Digit1","Digit2","Digit3","Digit4"],show:"1 \u2013 4",action:"weapon",label:"Primary, secondary, sidearm, melee",ready:!1},{group:"Weapons (not yet)",keys:["Wheel"],show:"Mouse wheel",action:"cycle",label:"Change weapon",ready:!1},{group:"Weapons (not yet)",keys:["KeyG"],show:"G",action:"grenade",label:"Throw",ready:!1},{group:"Weapons (not yet)",keys:["KeyV"],show:"V",action:"melee",label:"Melee",ready:!1},{group:"Weapons (not yet)",keys:["KeyQ"],show:"Q",action:"tactical",label:"Tactical ability",ready:!1},{group:"Weapons (not yet)",keys:["KeyT"],show:"T",action:"equipment",label:"Tactical equipment",ready:!1},{group:"Weapons (not yet)",keys:["KeyB"],show:"B",action:"inspect",label:"Inspect weapon",ready:!1},{group:"Weapons (not yet)",keys:["KeyH"],show:"H",action:"holster",label:"Holster",ready:!1},{group:"Weapons (not yet)",keys:["KeyX"],show:"X",action:"special",label:"Special ability",ready:!1},{group:"Game",keys:["Escape"],show:"Esc",action:"pause",label:"Pause menu (and this key list)",ready:!0},{group:"Game",keys:["Enter","NumpadEnter"],show:"Enter",action:"confirm",label:"Confirm",ready:!0},{group:"Game",keys:["F5"],show:"F5",action:"quicksave",label:"Quick save",ready:!0},{group:"Game",keys:["F9"],show:"F9",action:"quickload",label:"Quick load (last save)",ready:!0},{group:"Game",keys:["Backquote"],show:"`",action:"debug",label:"Debug readout",ready:!0}];var _f=new Map;for(let n of il)for(let t of n.keys)_f.set(t,n);function Ir(n){return _f.get(n)||null}var wo={stand:{eye:1.62,speed:2.6},crouch:{eye:1.05,speed:1.3},prone:{eye:.4,speed:.6}},s_=4.4,r_=1.3,yf=3.6,vf=9.8,bf=700;function Mf({stance:n,sprint:t,slowWalk:e}){return n!=="stand"?wo[n].speed:t?s_:e?r_:wo.stand.speed}function q0(n){return n==="stand"?"crouch":n==="crouch"?"prone":"stand"}var o_=7328742,a_=typeof navigator<"u"&&/Mac/.test(navigator.platform||""),l_=30,Ji=n=>String(n).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]);var c_={shelf:8226704,rack:12610091,clothes:7040883,checkout:4936796,coolers:10134440,rx_counter:14210248,gate:9213083,bed:10135213,cabinet:9341568,fridge:14277339,counter:8022616,sofa:5991006,tub:15329764,locker:7175046,dresser:7232069,cart:11581114,table:7034433,bench:6050634,desk:6975348},sl=[11682863,13935931,4157342,6262602,14998992,9064317,13070394,3104090,10394252,14139996];function h_(n){let{plan:t}=n,e=document.createElement("div");e.id="inside",e.innerHTML=`
    <canvas></canvas>
    <div class="in-top corners">
      <div class="in-title">${Ji(n.title)}</div>
      <div class="in-sub">${Ji(n.subtitle||"")}</div>
      <div class="in-status"></div>
    </div>
    <div class="in-cross"></div>
    <div class="in-prompt" hidden></div>
    <div class="in-bar" hidden><i></i></div>
    <div class="in-found corners" hidden></div>
    <div class="in-toast" hidden></div>
    <div class="in-stance" hidden></div>
    <div class="in-debug" hidden></div>
    <div class="in-panel corners" hidden></div>
    <div class="in-help">WASD: walk \xB7 Space: jump \xB7 Shift: sprint \xB7 Ctrl: crouch \xB7 <b>E</b>: take \xB7 Hold E: take all near \xB7 L: light \xB7 Tab: bag \xB7 M: map \xB7 <b>Esc</b>: all keys</div>
    <div class="in-touch">
      <div class="in-stick"><i></i></div>
      <button class="in-use" type="button">USE</button>
      <div class="in-tbtns">
        <button type="button" data-tk="jump">JUMP</button>
        <button type="button" data-tk="stance">CROUCH</button>
        <button type="button" data-tk="flashlight">LIGHT</button>
        <button type="button" data-tk="inventory">BAG</button>
        <button type="button" data-tk="map">MAP</button>
      </div>
      <button class="in-menu" type="button">\u2630</button>
    </div>
    <div class="in-pause" hidden>
      <div class="box corners">
        <h3>${Ji(n.title)}</h3>
        <p class="hint">Game time moves only when you walk or search. It is stopped now.</p>
        <div class="row"><button class="primary" data-in="resume">Resume</button>
        <button data-in="leave">Leave the building</button></div>
        <h4>Keys</h4>
        <div class="in-keys">${f_()}</div>
      </div>
    </div>`,document.body.appendChild(e);let i=T=>e.querySelector(T),s=i("canvas"),r=matchMedia("(pointer: coarse)").matches;e.classList.toggle("is-touch",r);let o=new Ea({canvas:s,antialias:!r});o.setPixelRatio(Math.min(devicePixelRatio||1,r?1.5:2)),o.outputColorSpace=ze;let a=new mr,l=new pn(72,1,.05,80);a.add(l);let{w:c,d:h,h:u}=t.size,f=n.dark,d=f?329482:2765112;a.background=new Yt(d),a.fog=new pr(d,.035);let g=k0(),x=Ju(o,a,l,{dark:f,night:!!n.night,quality:g,flashlight:n.hasFlashlight()}),m=x.flashlight,p=fo(Kn(`look:${n.title}`));function M(){m&&(m.setOn(n.isLightOn()),n.lightHours&&m.setPower(Math.min(1,n.lightHours()/2)))}M();let y=T=>F0(t.cat,T,null,g),_=new Vt(new Ge(c,h),y("floor"));_.rotation.x=-Math.PI/2,_.position.set(0,0,-h/2),_.receiveShadow=!0,a.add(xo(_));let D=new Vt(new Ge(c,h),y("ceiling"));D.rotation.x=Math.PI/2,D.position.set(0,u,-h/2),a.add(xo(D));{let T=[];for(let G=-3;G>-h+1;G-=5)for(let tt=-c/2+3;tt<c/2-1;tt+=6)T.push([tt,G]);(t.cat==="house"||t.kind!=="hall")&&T.splice(0,T.length,...T.filter((G,tt)=>tt%2===0));let L=f?1+Math.floor(p()*2):0;T.forEach(([G,tt],xt)=>{let Rt=p(),_t=L>0&&Rt<.18?(L--,"emergency"):t.cat!=="house"&&Rt>.86?"flicker":"dead";x.addCeilingLight(G,u,tt,_t),xt===T.length-1&&L>0&&x.addCeilingLight(G,u,tt-1.5,"emergency")})}let C=y("wall");for(let T of t.walls){let L=new Vt(new we(T.w,u,T.d),C);L.position.set(T.x,u/2,T.z),L.receiveShadow=!0,a.add(xo(L))}x.addRoomShade(-c/2,c/2,-h,0);let P=new Vt(new we(2,u-2.2,.2),C);P.position.set(0,2.2+(u-2.2)/2,0),a.add(xo(P)),x.addDoorLight(0,0,!!n.night,{width:1.8,height:2.2}),t.cat!=="house"&&x.addExitSign(0,Math.min(u-.25,2.55),-.14,Math.PI),x.addDust({minX:-c/2+.3,maxX:c/2-.3,minY:.1,maxY:u-.2,minZ:-h+.3,maxZ:-.3});{let T=t.cat==="house"?["note","evac"]:t.cat==="clinic"||t.cat==="hospital"?["quarantine","mask","staff"]:["closed","mask","quarantine","poster"],L=t.cat==="house"?1:2;for(let tt=0;tt<L;tt++){let xt=tt%2?1:-1;x.addWallNotice(xt*(1.5+p()*1.2),1.35+p()*.3,-.13,Math.PI,T[Math.floor(p()*T.length)])}let G=Math.min(28,Math.round(c*h/(t.cat==="house"?24:50)));for(let tt=0;tt<G;tt++){let xt=p(),Rt=xt<.45?"dirt":xt<.7?"paper":xt<.82?"water":xt<.92?"leaves":"snow",_t=(p()-.5)*(c-1),se=-.5-p()*(Rt==="snow"||Rt==="leaves"?4:h-1);x.addDecal(_t,se,Rt,.6+p()*1.4,p()*Math.PI)}t.windows==="front"&&p()<.7&&x.addBrokenGlass((p()<.5?-1:1)*(3+p()*(c/2-5)),-.8,1.3)}let N=new Vt(new Ge(6,4),new mn({color:n.night?1713203:14673644}));N.position.set(0,2,2.5),N.rotation.y=Math.PI,a.add(N);let A=new Vt(new Ge(6,3),new mn({color:n.night?3819094:16054008}));if(A.rotation.x=-Math.PI/2,A.position.set(0,.01,1.4),a.add(A),t.windows==="front"){let T=new mn({color:n.night?1450028:12964830,transparent:!0,opacity:.85});for(let L of[-1,1]){let G=c/2-2,tt=new Vt(new Ge(G,1.8),T);tt.position.set(L*(1+G/2+.5),1.6,-.12),a.add(tt)}}let S=new jt;a.add(S);let U={},q=T=>U[T]||(U[T]=new We({color:c_[T]??8947848,roughness:.8,metalness:T==="shelf"||T==="gate"||T==="locker"?.35:.05})),H=[],W=[],lt=f||n.night?13:20,K={supermarket:"grocery",pharmacy:"pharmacy",hardware:"hardware",outdoor:"outdoor",convenience:"convenience",gas:"convenience"}[t.cat]||"grocery",gt=null;for(let T of t.fixtures){if(T.type==="gate"){let G=new jt,tt=Math.floor(T.w/.15);for(let xt=0;xt<=tt;xt++){let Rt=new Vt(new we(.03,T.h,.03),q("gate"));Rt.position.set(T.x-T.w/2+xt*.15,T.h/2,T.z),G.add(Rt)}gt=G,G.visible=!n.counterOpen,a.add(G);continue}if(T.type==="shelf"||T.type==="rack"||T.type==="clothes"){let G=d_(T,q(T.type));if(G.traverse(tt=>{tt.isMesh&&(tt.castShadow=!0,tt.receiveShadow=!0)}),T.tipped){G.rotation.z=.16*(T.x>0?1:-1);for(let tt=0;tt<14;tt++){let xt=new Vt(new we(.22,.26,.24),new We({color:sl[tt%sl.length],roughness:.7}));xt.position.set(T.x+(tt%2?1:-1)*(.7+tt%3*.25),.12,T.z-T.d/2+tt*7%13/13*T.d),xt.rotation.set(0,tt,tt%2?Math.PI/2:0),S.add(xt)}}if(S.add(G),!T.tipped&&T.type!=="clothes")for(let tt of[-1,1]){let xt=tt<0?T.leftZone:T.rightZone;xt!=null&&W.push({f:T,side:tt,zone:xt,group:null,done:null})}else if(!T.tipped){let tt=[1.25];for(let xt of tt)for(let Rt=-T.d/2+.3;Rt<T.d/2-.2;Rt+=.34)for(let _t of[-1,1]){let se=_t<0?T.leftZone:T.rightZone;se!=null&&H.push({x:T.x+_t*.27,y:xt,z:T.z+Rt,zone:se,clothes:T.type==="clothes"})}}continue}if(T.type==="bed"){let G=new jt,tt=new Vt(new we(T.d,.45,T.w),q("bed"));tt.position.y=.225;let xt=new Vt(new we(T.d*.95,.15,T.w*.95),new We({color:14080210,roughness:1}));xt.position.y=.52,G.add(tt,xt),G.position.set(T.x,0,T.z),G.rotation.y=Math.PI/2,S.add(G);continue}let L=new Vt(new we(T.w,T.h,T.d),q(T.type));if(L.position.set(T.x,T.h/2,T.z),L.castShadow=!0,L.receiveShadow=!0,S.add(L),T.type==="coolers"){let G=new Vt(new Ge(T.w,T.h*.75),new We({color:2306091,roughness:.2,metalness:.4}));G.position.set(T.x,T.h*.55,T.z+T.d/2+.01),a.add(G)}}let Z=new we(.22,.26,.24),wt=new We({roughness:.7}),At=new wa(Z,wt,Math.max(1,H.length)),Nt=new de,te=new Yt,ge=11,nt=()=>(ge=ge*16807%2147483647)/2147483647,vt=H.map(()=>nt());H.forEach((T,L)=>{te.setHex(sl[Math.floor(nt()*sl.length)]),T.clothes&&te.multiplyScalar(.7),At.setColorAt(L,te)}),a.add(At);function Bt(T,L){T.group&&(a.remove(T.group),T.group.traverse(_t=>{_t.isMesh&&_t.geometry.dispose()}));let{f:G,side:tt}=T,xt=Math.max(.03,n.stock*(L?.12:.85)),Rt=gf(K,G.d-.1,[.12,.62,1.12,1.57],xt,Kn(`${n.title}:${G.x}:${G.z}:${tt}`));Rt.position.set(G.x+tt*.05,0,G.z),Rt.rotation.y=tt>0?0:Math.PI,Rt.traverse(_t=>{_t.isMesh&&(_t.receiveShadow=!0)}),a.add(Rt),T.group=Rt,T.done=L}function Mt(){for(let L of W){let G=!!n.isDone(L.zone);L.done!==G&&Bt(L,G)}let T=n.stock;H.forEach((L,G)=>{let tt=n.isDone(L.zone)?T*.12:T*.85,xt=vt[G]<tt;Nt.makeScale(xt?1:0,xt?L.clothes?3:1:0,xt?1:0),Nt.setPosition(L.x,L.y+(L.clothes?0:.13),L.z),At.setMatrixAt(G,Nt)}),At.count=H.length,At.instanceMatrix.needsUpdate=!0,At.instanceColor&&(At.instanceColor.needsUpdate=!0)}Mt();let Wt={box:new We({color:10255186,roughness:1}),can:new We({color:9212310,roughness:.5,metalness:.5}),paper:new We({color:14276300,roughness:1,side:Ce}),cart:new xr({color:10331306})};for(let T of t.debris){let L,G=Kn(`${n.title}:d:${T.x.toFixed(2)}:${T.z.toFixed(2)}`);if(T.kind==="box"){L=Ki(T.s>.35?"box_stack":"cardboard_box",G),L.position.set(T.x,0,T.z),L.rotation.y=T.rot||0,S.add(L);continue}if(T.kind==="cart"){L=Ki(p()<.7?"shopping_cart":"basket",G),L.position.set(T.x,0,T.z),L.rotation.set(0,T.rot||0,0),S.add(L);continue}if(T.kind==="paper"){L=Ki("paper_scatter",G),L.position.set(T.x,0,T.z),L.rotation.y=T.rot||0,S.add(L);continue}if(T.kind==="box")L=new Vt(new we(T.s*1.4,T.s,T.s),Wt.box);else if(T.kind==="can")L=new Vt(new qi(.04,.04,.12,8),Wt.can),L.rotation.z=Math.PI/2;else if(T.kind==="cart"){L=new jt;let tt=new _r(new vr(new we(.55,.45,.85)),Wt.cart);tt.position.y=.2,L.add(tt);for(let[xt,Rt]of[[-.22,-.35],[.22,-.35],[-.22,.35],[.22,.35]]){let _t=new _r(new vr(new we(.02,.45,.02)),Wt.cart);_t.position.set(xt,-.25,Rt),L.add(_t)}}else L=new Vt(new Ge(.3,.22),Wt.paper),L.rotation.x=-Math.PI/2;L.position.set(T.x,T.kind==="paper"?.01:T.kind==="cart"?.45:(T.s||.1)/2,T.z),L.rotation.y=T.rot||0,S.add(L)}{let T=po(t,{counter:!0}),L=[],G=(Rt,_t,se)=>!T.some($t=>Math.abs(Rt-$t.x)<$t.w/2+se&&Math.abs(_t-$t.z)<$t.d/2+se)&&!(Math.abs(Rt)<1.6&&_t>-3)&&!L.some($t=>Math.hypot($t[0]-Rt,$t[1]-_t)<$t[2]+se)&&Rt>-c/2+se&&Rt<c/2-se&&_t<-se&&_t>-h+se,tt=(Rt,_t=!1)=>{let se=Ki(Rt,Math.floor(p()*1e6)),$t=Math.min(1.2,(se.userData.radius||.3)+.1);for(let Ue=0;Ue<30;Ue++){let Oe=(p()-.5)*(c-2*$t);_t&&(Oe=(p()<.5?-1:1)*(c/2-$t-.05));let fn=-$t-p()*(h-2*$t);if(G(Oe,fn,$t))return se.position.set(Oe,0,fn),se.rotation.y=_t?(Oe>0?-Math.PI/2:Math.PI/2)+(p()-.5)*.3:p()*Math.PI*2,se.traverse(In=>{In.isMesh&&(In.castShadow=$t>.25,In.receiveShadow=!0)}),S.add(se),L.push([Oe,fn,$t]),se}return null},xt={supermarket:[["basket",3],["trash_bag",3],["wet_floor_sign",1],["mop_bucket",1],["pallet",1,!0],["box_stack",2,!0],["trash_pile",1,!0]],convenience:[["trash_bag",1],["basket",1],["cardboard_box",2]],gas:[["trash_bag",1],["traffic_cone",1],["cardboard_box",2]],pharmacy:[["basket",2],["trash_bag",1],["wet_floor_sign",1],["box_stack",1,!0]],hardware:[["pallet",2,!0],["box_stack",2,!0],["traffic_cone",2],["trash_bag",1]],outdoor:[["box_stack",2,!0],["trash_bag",1],["basket",1]],clinic:[["iv_stand",2,!0],["wheelchair",1,!0],["office_chair",2],["medical_cart",1,!0],["trash_bag",1]],hospital:[["gurney",2,!0],["iv_stand",3,!0],["wheelchair",2,!0],["medical_cart",2,!0],["office_chair",1],["trash_pile",1,!0]],fire:[["helmet_rack",1,!0],["hose_reel",1,!0],["locker_row",1,!0],["traffic_cone",2],["fire_extinguisher",1,!0]],house:[["rug",2],["lamp",1,!0],["potted_plant_dead",1,!0],["chair",2],["tv",1,!0],["bookshelf",1,!0],["trash_bag",1],["cardboard_box",1]]};for(let[Rt,_t,se]of xt[t.cat]||xt.house)for(let $t=0;$t<_t;$t++)tt(Rt,!!se);for(let Rt of t.fixtures){if(Rt.type==="checkout"){let _t=Ki("register",Math.floor(Rt.x*100));_t.position.set(Rt.x,Rt.h,Rt.z-Rt.d/4),_t.rotation.y=Math.PI/2,S.add(_t)}if(Rt.type==="counter"&&t.cat==="house"){let _t=Ki("kitchen_counter_items",Math.floor(Rt.z*100));_t.position.set(Rt.x,Rt.h,Rt.z),S.add(_t)}}}let ee=new We({color:13620175,roughness:1});for(let T of t.bodies){let L=new jt,G=new Vt(new we(.42,.2,1.3),ee);G.position.set(0,.1,.1);let tt=new Vt(new $i(.15,10,8),ee);tt.scale.set(1,.7,1.1),tt.position.set(0,.12,-.72),L.add(G,tt),L.position.set(T.x,T.y||0,T.z),L.rotation.y=(T.rot||0)+Math.PI/2,S.add(L)}u_(S);let Kt=new Map,_e=()=>po(t,{counter:!0});function F(T){let L=fo(Kn(`place:${T.pid}:${n.title}`)),G=t.spots.find(_t=>_t.zone===T.zone);if(!G)return{x:0,y:0,z:-1};if(G.counter){let _t=t.fixtures.find(se=>se.type==="rx_counter");return{x:_t.x+(L()-.5)*(_t.w-1),y:_t.h,z:_t.z+(L()-.5)*.4}}let tt=G.area;if(t.kind==="hall"){if(L()<.2)return{x:G.x+(L()-.5)*1.2,y:0,z:tt.z1+1+L()*(tt.z2-tt.z1-2)};let _t=L()<.5?-1:1,se=[.12,.62,1.12,1.57];return{x:G.x+_t*((tt.x2-tt.x1)/2+.06),y:se[Math.floor(L()*se.length)],z:tt.z1+1+L()*(tt.z2-tt.z1-2)}}let xt=t.fixtures.filter(_t=>_t.zone===T.zone&&_t.solid&&_t.h<=1.2&&_t.type!=="tub");if(xt.length&&L()<.7){let _t=xt[Math.floor(L()*xt.length)],se=_t.type==="bed"?_t.d:_t.w,$t=_t.type==="bed"?_t.w:_t.d;return{x:_t.x+(L()-.5)*Math.max(0,se-.4),y:_t.h+(_t.type==="bed"?.15:0),z:_t.z+(L()-.5)*Math.max(0,$t-.4)}}let Rt=_e();for(let _t=0;_t<12;_t++){let se=tt.x1+.5+L()*(tt.x2-tt.x1-1),$t=tt.z1+.5+L()*(tt.z2-tt.z1-1);if(!Rt.some(Ue=>Math.abs(se-Ue.x)<Ue.w/2+.2&&Math.abs($t-Ue.z)<Ue.d/2+.2))return{x:se,y:0,z:$t}}return{x:G.x,y:0,z:G.z}}let it=1500,E=new Map,dt=T=>T.zone!==V()&&Kn(`${T.pid}:box`)%10<3;function V(){let T=t.spots.find(L=>L.counter);return T?T.zone:-1}function ut(T){let L=fo(Kn(`box:${T}:${n.title}`)),G=t.spots.find(Rt=>Rt.zone===T),tt=G&&G.area;if(!tt)return null;let xt=_e();for(let Rt=0;Rt<16;Rt++){let _t=t.kind==="hall"?G.x+(L()-.5)*Math.max(.2,tt.x2-tt.x1-1.4):tt.x1+.5+L()*(tt.x2-tt.x1-1),se=tt.z1+.8+L()*(tt.z2-tt.z1-1.6);if(!xt.some($t=>Math.abs(_t-$t.x)<$t.w/2+.3&&Math.abs(se-$t.z)<$t.d/2+.3))return{x:_t,z:se,rot:L()*Math.PI}}return null}function at(T){let L=`c${T}`;if(E.has(L))return E.get(L);let G=ut(T);if(!G)return E.set(L,null),null;let tt=Ki("cardboard_box",Kn(`${L}:${n.title}`));tt.position.set(G.x,0,G.z),tt.rotation.y=G.rot,a.add(tt);let xt=tt.userData.height||.35,Rt={cid:L,zone:T,obj:tt,x:G.x,y:xt/2,z:G.z,r:tt.userData.radius||.3,opened:n.isOpened(L),container:!0};return Rt.opened&&Tt(Rt),E.set(L,Rt),Rt}function Tt(T){T.obj.scale.y=.85,T.obj.rotation.z=.06}function ft(){for(let T of n.items()){if(Kt.has(T.pid))continue;let L=null;if(dt(T)){let xt=at(T.zone);if(xt&&!xt.opened)continue;if(xt){let Rt=Kn(T.pid)%360;L={x:xt.x+Math.cos(Rt)*(xt.r+.15),y:0,z:xt.z+Math.sin(Rt)*(xt.r+.15)}}}L=L||F(T);let G=pf(T.item,Kn(T.pid));G.position.set(L.x,L.y,L.z),G.rotation.y=Kn(T.pid)%628/100,G.traverse(xt=>{xt.isMesh&&xt.material&&xt.material.emissive&&(xt.material=xt.material.clone(),xt.material.emissive.setHex(2236962))}),a.add(G);let tt=G.userData.height||.2;Kt.set(T.pid,{it:T,obj:G,x:L.x,y:L.y+tt/2,z:L.z,r:G.userData.radius||.15})}}ft();function R(T){let L=Kt.get(T);L&&(a.remove(L.obj),Kt.delete(T))}let b=new xr({color:o_,transparent:!0,opacity:.9,depthTest:!1}),z=new _r(new vr(new we(1,1,1)),b);z.renderOrder=10,z.visible=!1,a.add(z);let j=2.3;function ht(T,L){let G=L.x-T.x,tt=L.y-T.y,xt=L.z-T.z,Rt=Math.max(0,1-.25/Math.max(.25,Math.hypot(G,tt,xt)));for(let _t of po(t,{counter:n.isCounterOpen()})){let se=[_t.x-_t.w/2+.02,0,_t.z-_t.d/2+.02],$t=[_t.x+_t.w/2-.02,(_t.h||9)-.02,_t.z+_t.d/2-.02],Ue=[T.x,T.y,T.z],Oe=[G,tt,xt],fn=0,In=Rt,xi=!0;for(let dn=0;dn<3&&xi;dn++){if(Math.abs(Oe[dn])<1e-9){(Ue[dn]<se[dn]||Ue[dn]>$t[dn])&&(xi=!1);continue}let Un=(se[dn]-Ue[dn])/Oe[dn],Ii=($t[dn]-Ue[dn])/Oe[dn];Un>Ii&&([Un,Ii]=[Ii,Un]),fn=Math.max(fn,Un),In=Math.min(In,Ii),fn>In&&(xi=!1)}if(xi)return!0}return!1}function rt(T){let L=[];for(let G of Kt.values()){let tt=Math.hypot(G.x-T.x,G.y-T.y,G.z-T.z);tt<=j&&!ht(T,G)&&L.push({o:G,d:tt})}return L.sort((G,tt)=>G.d-tt.d)}function zt(T,L){let G=null,tt=[...E.values()].filter(xt=>xt&&!xt.opened).map(xt=>({o:xt,d:Math.hypot(xt.x-T.x,xt.y-T.y,xt.z-T.z)})).filter(xt=>xt.d<=j&&!ht(T,xt.o));for(let{o:xt,d:Rt}of[...rt(T),...tt]){let _t=xt.x-T.x,se=xt.y-T.y,$t=xt.z-T.z,Ue=(_t*L.x+se*L.y+$t*L.z)/Math.max(1e-6,Rt),Oe=Math.acos(Math.min(1,Ue)),fn=Math.atan2(xt.r+.12,Rt);Oe>Math.max(fn,.09)||(!G||Oe<G.ang)&&(G={o:xt,ang:Oe,d:Rt})}return G?G.o:null}let bt={x:t.start.x,z:t.start.z},Ct=t.start.yaw||0,he=0,pt=0,Ft=0,kt="stand",ne=!1,Ot=!1,ue=!1,le=wo.stand.eye,pe=new Set,O=!1,Pt=!1,J=!1,ct=0,Lt=null,Et=null,re=!1,ke=0,Se={x:0,y:0,id:null,ox:0,oy:0},ve=null,xn=null,Yn=0,rn=null,ti=0;function ei(){let T=e.clientWidth,L=e.clientHeight;o.setSize(T,L,!1),l.aspect=T/L,l.updateProjectionMatrix()}ei(),window.addEventListener("resize",ei);function Ci(){i(".in-status").innerHTML=n.getStatus()}Ci();function Xe(T,L=2600){let G=i(".in-toast");G.textContent=T,G.hidden=!1,clearTimeout(Xe.h),Xe.h=setTimeout(()=>{G.hidden=!0},L)}function Is(T){let L=i(".in-found");if(!T){L.hidden=!0;return}let G=T.items.length?`<ul>${T.items.map(tt=>`<li>${Ji(tt)}</li>`).join("")}</ul>`:'<p class="hint">Nothing useful here.</p>';L.innerHTML=`<h4>${Ji(T.title)}</h4>${G}
      <p class="hint">${Ji(T.note||"")}</p>
      <div class="row">${T.canTake?'<button class="primary" data-in="take">Take all that fits (F)</button>':""}<button data-in="close">Close</button></div>`,L.hidden=!1}let di=()=>!i(".in-found").hidden;function Dn(){let T=i(".in-stance"),L=[];kt!=="stand"&&L.push(kt==="crouch"?"Crouching":"Prone"),Ot&&kt==="stand"&&L.push("Slow walk"),ue&&L.push("Looking closer"),T.hidden=!L.length,T.textContent=L.join(" \xB7 ")}function us(T){let L=i(".in-panel");if(Et===T){fs();return}let G;T==="map"?G=rl():G=n.panel(T),G&&(Et=T,pe.clear(),L.innerHTML=`${G}<div class="row"><button data-in="closepanel">Close</button></div>`,L.hidden=!1,document.pointerLockElement===s&&document.exitPointerLock())}function fs(){Et=null,i(".in-panel").hidden=!0}function ji(){if(Et&&Et!=="map"){let T=Et;Et=null,us(T)}}function rl(){let L=c+2,G=h+1*2+1.5,tt=qe=>(qe+c/2+1).toFixed(2),xt=qe=>(qe+h+1).toFixed(2),Rt=(qe,Sf)=>`<rect class="${Sf}" x="${tt(qe.x-qe.w/2)}" y="${xt(qe.z-qe.d/2)}" width="${qe.w.toFixed(2)}" height="${qe.d.toFixed(2)}"/>`,_t=t.walls.map(qe=>Rt(qe,"w")).join(""),se=t.fixtures.filter(qe=>qe.type!=="gate").map(qe=>Rt(qe,"f")).join(""),$t=t.spots.map(qe=>`<circle class="${n.isDone(qe.zone)?"sd":"s"}" cx="${tt(qe.x)}" cy="${xt(qe.z)}" r="0.45"/>`).join(""),Ue=Me.map(qe=>`<circle class="pg" cx="${tt(qe.x)}" cy="${xt(qe.z)}" r="0.3"/>`).join(""),Oe=Math.sin(Ct),fn=Math.cos(Ct),In=+tt(bt.x),xi=+xt(bt.z),dn=`${(In-Oe*.9).toFixed(2)},${(xi-fn*.9).toFixed(2)}`,Un=`${(In-fn*.45).toFixed(2)},${(xi+Oe*.45).toFixed(2)}`,Ii=`${(In+fn*.45).toFixed(2)},${(xi-Oe*.45).toFixed(2)}`;return`<h4>Floor plan</h4>
      <svg class="in-map" viewBox="0 0 ${L.toFixed(1)} ${G.toFixed(1)}">${se}${_t}${$t}${Ue}
        <polygon class="me" points="${dn} ${Un} ${Ii}"/>
        <text x="${tt(0)}" y="${(h+1+1.2).toFixed(1)}" text-anchor="middle">Door</text></svg>
      <p class="hint">Blue: not searched. Grey: searched. Triangle: you.</p>`}function pi(){ct>.5&&n.onWalk(ct),ct=0}let Mn=null,w="",k=new Set,X=new I,$=new I;function B(T){if(!T)return!1;if(T.container)return Gt(T),!1;pi();let L=n.onPickUp(T.it.pid);return L.ok?(R(T.it.pid),Xe(`Taken: ${L.name}`,1400)):L.msg&&Xe(L.msg,2400),Mt(),Ee(),ji(),L.ok}function St(){if(!(Pt||O||J)){if(Mn){B(Mn);return}if(!Lt){Xe("Look at an item to take it.",1400);return}if(Lt.type==="exit"){En();return}if(Lt.counter&&!n.isCounterOpen()){Ut();return}Xe("Look at an item to take it.",1400)}}function Ut(){pi();let T=n.onCounter();gt&&(gt.visible=!n.isCounterOpen()),Xe(T),Ee()}function Gt(T){if(Pt||O||J||rn||T.opened)return;Pt=!0;let L=i(".in-bar"),G=L.querySelector("i");L.hidden=!1,G.style.width="0%",Xe("Opening the box\u2026",it);let tt=performance.now(),xt=()=>{if(J)return;let Rt=Math.min(1,(performance.now()-tt)/it);if(G.style.width=`${Rt*100}%`,Rt<1){requestAnimationFrame(xt);return}if(L.hidden=!0,Pt=!1,pi(),!n.onOpenContainer(T.cid))return;T.opened=!0,Tt(T);let _t=Kt.size;ft();let se=Kt.size-_t;Xe(se?`Inside: ${se} item${se>1?"s":""}.`:"It is empty.",1800),w="",Ee()};xt()}function Xt(){if(Pt||O||J||rn||Mn&&Mn.container)return!1;let T=rt(l.position);if(!T.length)return!1;let L=i(".in-bar"),G=L.querySelector("i");L.hidden=!1,G.style.width="0%",rn={t0:performance.now(),n:T.length};let tt=()=>{if(!rn)return;let xt=Math.min(1,(performance.now()-rn.t0)/bf);if(G.style.width=`${xt*100}%`,xt<1){rn.raf=requestAnimationFrame(tt);return}rn=null,L.hidden=!0,fe()};return tt(),!0}function ie(){rn&&(cancelAnimationFrame(rn.raf),rn=null,i(".in-bar").hidden=!0)}function fe(){Pt=!0,pi();let T=0,L="";for(let{o:G}of rt(l.position)){let tt=n.onPickUp(G.it.pid);if(!tt.ok){if(L=tt.msg||"",n.isDead())break;continue}R(G.it.pid),T+=1}Pt=!1,Xe(T?`You take ${T} item${T>1?"s":""}.${L?" "+L:""}`:L||"Nothing to take.",2600),Mt(),Ee(),ji()}function Ht(){let T=n.onTakeAll();Is(null),T&&Xe(T),Ee(),ji()}function be(){if(di()&&i('[data-in="take"]')){Ht();return}if(Mn){B(Mn);return}if(n.hasLoot()){Ht();return}if(Lt&&Lt.type==="exit"){En();return}if(Lt&&Lt.counter&&!n.isCounterOpen()){Ut();return}Xe("Nothing to take here.",1500)}function Ne(){if(!n.hasFlashlight()){Xe("You have no flashlight.");return}let T=n.toggleLight();M(),Ci(),T&&Xe(T,1800)}function Be(T){let L=n.quickUse(T);L&&Xe(L,3200),Ee(),M(),ji()}function Qe(T){let L=performance.now();Qe.last&&L-Qe.last<700||(Qe.last=L,Xe(`${T.label}: not yet in the game.`,1800))}let Me=[],Jt=new Ga,ni=new oi(new I(0,1,0),0),Ae=new Ba(.15,.24,24);function Nn(){Jt.setFromCamera(new yt(0,0),l);let T=new I;if(!Jt.ray.intersectPlane(ni,T)||T.distanceTo(l.position)>25){Xe("Look at the floor to mark it.",1500);return}let L=new Vt(Ae,new mn({color:15323030,side:Ce,fog:!1}));L.rotation.x=-Math.PI/2,L.position.set(T.x,.03,T.z),a.add(L),Me.push({x:T.x,z:T.z,m:L}),Me.length>5&&a.remove(Me.shift().m),Xe("Marked.",900)}function Qi(){if(!(pt>.001||Ft!==0)){if(kt!=="stand"){kt="stand",ne=!1,Dn();return}Ft=yf}}function Sn(){pi(),Xe(n.quickSave(),1800)}function ds(){if(pi(),!n.canQuickLoad()){Xe("There is no save to load.");return}mi(!1,"quickload")}function Ee(){Lt=void 0,Ci(),n.isDead()&&mi(!0)}function En(){pi(),mi(!1)}function mi(T,L){J||(J=!0,ie(),document.pointerLockElement===s&&document.exitPointerLock(),window.removeEventListener("resize",ei),window.removeEventListener("keydown",Pr,!0),window.removeEventListener("keyup",$0,!0),window.removeEventListener("blur",Z0),document.removeEventListener("pointerlockchange",K0),o.dispose(),e.remove(),n.onLeave(!!T,L))}function on(T){O=T,i(".in-pause").hidden=!T,T&&(pe.clear(),ie(),ue=!1)}function Cn(T,L){switch(T.action){case"jump":return Qi();case"stance":return kt=q0(kt),ne=!1,Dn();case"walktoggle":return Ot=!Ot,Dn();case"interact":return null;case"context":return be();case"flashlight":return Ne();case"inventory":case"character":case"map":case"journal":case"objectives":return us(T.action);case"quick_med":case"quick_food":case"quick_utility":return Be(T.action);case"confirm":return di()&&i('[data-in="take"]')?Ht():Et?fs():St();case"quicksave":return Sn();case"quickload":return ds();case"debug":return re=!re,i(".in-debug").hidden=!re,null;case"ping":return Nn();default:return T.ready||Qe(T),null}}let gi=new Set(["move","sprint","crouch"]);function Pr(T){if(J)return;let L=T.code;if((["Tab","F5","F9","Space","Backquote","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(L)||T.ctrlKey&&L!=="KeyW")&&T.preventDefault(),L==="Escape"){if(di()){Is(null);return}if(Et){fs();return}document.pointerLockElement||on(!O);return}if(O){L==="Enter"&&on(!1);return}if(L==="CapsLock"){Ot=!Ot,Dn();return}let G=Ir(L)||(L.startsWith("Arrow")?{action:"move"}:null);if(G&&!(Et&&!["inventory","character","map","journal","objectives","pause","quicksave","quickload","confirm"].includes(G.action)&&!G.action.startsWith("quick"))){if(gi.has(G.action)){pe.add(L),G.action==="crouch"&&!T.repeat&&(ne=!0,kt==="stand"&&(kt="crouch"),Dn());return}if(!T.repeat){if(G.action==="interact"||G.action==="context"){if(Mn&&Mn.container&&!O&&!Et){Gt(Mn);return}ti=performance.now(),Xt();return}Cn(G,T)}}}function $0(T){if(pe.delete(T.code),T.code==="CapsLock"&&a_){Ot=!1,Dn();return}let L=Ir(T.code);if(L&&(L.action==="crouch"&&ne&&(ne=!1,kt==="crouch"&&(kt="stand"),Dn()),(L.action==="interact"||L.action==="context")&&ti)){let G=!!rn||performance.now()-ti<300;ti=0,rn&&ie(),G&&!O&&!Et&&(L.action==="interact"?St():be())}}function Z0(){pe.clear(),ie()}function K0(){!document.pointerLockElement&&!J&&!r&&!Et&&!di()&&on(!0)}window.addEventListener("keydown",Pr,!0),window.addEventListener("keyup",$0,!0),window.addEventListener("blur",Z0),document.addEventListener("pointerlockchange",K0);function J0(){if(!(r||O||Et||!s.requestPointerLock))try{let T=s.requestPointerLock();T&&T.catch&&T.catch(()=>{})}catch{}}s.addEventListener("contextmenu",T=>T.preventDefault()),s.addEventListener("mousedown",T=>{if(O||r)return;let L=document.pointerLockElement===s;if(T.button===1){T.preventDefault(),Cn(Ir("Mouse1"));return}if(T.button===2){ue=!0,Dn();return}if(T.button===0){if(!L){J0();return}Cn(Ir("Mouse0"))}}),window.addEventListener("mouseup",T=>{T.button===2&&ue&&(ue=!1,Dn())}),s.addEventListener("wheel",T=>{T.preventDefault(),O||Cn(Ir("Wheel"))},{passive:!1}),s.addEventListener("mousemove",T=>{O||(document.pointerLockElement===s||T.buttons===1)&&j0(T.movementX,T.movementY)});function j0(T,L){let G=ue?.45:1;Ct-=T*.0024*G,he=Math.max(-1.3,Math.min(1.3,he-L*.0024*G))}e.addEventListener("click",T=>{let L=T.target.closest("[data-in],[data-use],[data-tk]");if(!L)return;if(L.dataset.use){Xe(n.useItem(L.dataset.use,L.dataset.verb)||"",3e3),Ee(),M(),ji();return}if(L.dataset.tk){let tt=il.find(xt=>xt.action===L.dataset.tk);if(tt.action==="stance"){kt=q0(kt),Dn(),L.textContent=kt==="stand"?"CROUCH":kt==="crouch"?"PRONE":"STAND";return}Cn(tt);return}let G=L.dataset.in;G==="resume"?(on(!1),J0()):G==="leave"?En():G==="take"?Ht():G==="close"?Is(null):G==="closepanel"&&fs()});let Ao=i(".in-use");Ao.addEventListener("pointerdown",T=>{if(T.preventDefault(),Mn&&Mn.container){Gt(Mn);return}ti=performance.now(),Xt()});let ol=T=>{if(!ti)return;let L=T&&T.type==="pointerup"&&(!!rn||performance.now()-ti<300);ti=0,rn&&ie(),L&&(di()&&i('[data-in="take"]')?Ht():St())};Ao.addEventListener("pointerup",ol),Ao.addEventListener("pointerleave",ol),Ao.addEventListener("pointercancel",ol),i(".in-menu").addEventListener("click",()=>on(!0)),s.addEventListener("touchstart",T=>{for(let L of T.changedTouches)if(L.clientX<e.clientWidth/2&&Se.id===null){Se.id=L.identifier,Se.ox=L.clientX,Se.oy=L.clientY;let G=i(".in-stick");G.style.left=`${L.clientX-50}px`,G.style.top=`${L.clientY-50}px`,G.classList.add("on")}else ve===null&&(ve=L.identifier,xn={x:L.clientX,y:L.clientY});T.preventDefault()},{passive:!1}),s.addEventListener("touchmove",T=>{for(let L of T.changedTouches)if(L.identifier===Se.id){let G=L.clientX-Se.ox,tt=L.clientY-Se.oy,xt=Math.min(45,Math.hypot(G,tt)),Rt=Math.atan2(tt,G);Se.x=Math.cos(Rt)*xt/45,Se.y=Math.sin(Rt)*xt/45,i(".in-stick i").style.transform=`translate(${Se.x*30}px, ${Se.y*30}px)`}else L.identifier===ve&&(j0((L.clientX-xn.x)*1.6,(L.clientY-xn.y)*1.6),xn={x:L.clientX,y:L.clientY});T.preventDefault()},{passive:!1});let Q0=T=>{for(let L of T.changedTouches)L.identifier===Se.id?(Se.id=null,Se.x=Se.y=0,i(".in-stick").classList.remove("on"),i(".in-stick i").style.transform=""):L.identifier===ve&&(ve=null)};s.addEventListener("touchend",Q0),s.addEventListener("touchcancel",Q0);let th=performance.now(),eh=new I;function Ro(T){if(J)return;let L=Math.min(.1,(T-th)/1e3);if(th=T,ke=ke*.9+(L>0?1/L:0)*.1,!O&&!Pt&&!Et&&!rn){let $t=0,Ue=0;(pe.has("KeyW")||pe.has("ArrowUp"))&&(Ue-=1),(pe.has("KeyS")||pe.has("ArrowDown"))&&(Ue+=1),(pe.has("KeyA")||pe.has("ArrowLeft"))&&($t-=1),(pe.has("KeyD")||pe.has("ArrowRight"))&&($t+=1),$t+=Se.x,Ue+=Se.y;let Oe=Math.hypot($t,Ue);if(Oe>.05){let fn=pe.has("ShiftLeft")||pe.has("ShiftRight"),In=Mf({stance:kt,sprint:fn,slowWalk:Ot})*Math.min(1,Oe)/Oe,xi=($t*Math.cos(Ct)+Ue*Math.sin(Ct))*In*L,dn=(-$t*Math.sin(Ct)+Ue*Math.cos(Ct))*In*L,Un=Xu(t,bt.x+xi,bt.z+dn,.3,{counter:n.isCounterOpen()});Un.z=Math.min(Un.z,.2);let Ii=Math.hypot(Un.x-bt.x,Un.z-bt.z);if(ct+=Ii,pt===0&&(Yn+=Ii*(kt==="stand"?3.2:2)),bt.x=Un.x,bt.z=Un.z,ct>=l_&&(pi(),Ci(),n.isDead())){mi(!0);return}}}(Ft!==0||pt>0)&&(Ft-=vf*L,pt=Math.max(0,pt+Ft*L),pt===0&&(Ft=0));let tt=wo[kt].eye;le+=(tt-le)*Math.min(1,L*10);let xt=ue?40:72;Math.abs(l.fov-xt)>.1&&(l.fov+=(xt-l.fov)*Math.min(1,L*12),l.updateProjectionMatrix()),l.position.set(bt.x,le+pt+Math.sin(Yn)*(kt==="stand"?.03:.015),bt.z),l.rotation.order="YXZ",l.rotation.set(he,Ct,0),l.getWorldDirection(eh);let Rt=O||Et?null:zt(l.position,eh),_t=Yu(t,bt.x,bt.z,Ct);_t&&_t.type==="search"&&_t.dist===0&&!k.has(_t.zone)&&(k.add(_t.zone),n.onSeeZone(_t.zone),Ci()),_t&&_t.type==="search"&&!(_t.counter&&!n.isCounterOpen())&&(_t=null);let se=(Rt?`i:${Rt.container?Rt.cid:Rt.it.pid}`:"")+(_t?`${_t.type}:${_t.zone}`:"");if(Lt===void 0||se!==w||Ro.n++%20===0){Lt=_t,Mn=Rt,w=se;let $t=i(".in-prompt"),Ue=rt(l.position).length;if(Rt){$t.hidden=!1,$t.innerHTML=Rt.container?`<kbd>${r?"USE":"E"}</kbd> Open the box <small>look inside \xB7 1 min</small>`:n.describeItem(Rt.it,Ue,r),z.visible=!0;let Oe=new zn().setFromObject(Rt.obj);Oe.getSize(X),Oe.getCenter($),z.scale.set(X.x+.04,X.y+.04,X.z+.04),z.position.copy($),i(".in-cross").classList.add("on")}else z.visible=!1,i(".in-cross").classList.remove("on"),_t?($t.hidden=!1,$t.innerHTML=n.describe(_t)):$t.hidden=!0;re&&(i(".in-debug").textContent=`x ${bt.x.toFixed(1)}  z ${bt.z.toFixed(1)}  yaw ${(Ct*57.3%360).toFixed(0)}\xB0  ${kt}  ${ke.toFixed(0)} fps  ${(1e3/Math.max(1,ke)).toFixed(1)} ms  ${o.info.render.calls} calls  ${(o.info.render.triangles/1e3).toFixed(0)}k tris  ${o.info.memory.geometries} geo  ${o.info.memory.textures} tex  q:${g}`)}x.update(L,l.position);for(let $t of W){if(!$t.group)continue;let Ue=Math.max(0,Math.abs(l.position.z-$t.f.z)-$t.f.d/2),Oe=l.position.x-$t.f.x,fn=Ue===0;$t.group.visible=fn?Oe*$t.side>0&&Math.abs(Oe)<3.2:Math.hypot(Oe,Ue)<(g==="high"?11:8)}for(let $t of Kt.values())$t.obj.visible=Math.hypot($t.x-l.position.x,$t.z-l.position.z)<lt;o.render(a,l),requestAnimationFrame(Ro)}return Ro.n=0,requestAnimationFrame(Ro),window.__llInside={plan:t,pos:bt,look:(T,L=0)=>{Ct=T,he=L},reach:()=>rt(l.position).map(({o:T})=>T.it.zone),boxes:()=>[...E.values()].filter(Boolean).map(T=>({cid:T.cid,x:T.x,y:T.y,z:T.z,opened:T.opened})),census:()=>{let T={};return a.traverse(L=>{if(L.isMesh||L.isPoints||L.isLine||L.isSprite){let G=L;for(;G.parent&&G.parent!==a;)G=G.parent;let tt=G.name||G.type;T[tt]=(T[tt]||0)+1}}),Object.entries(T).sort((L,G)=>G[1]-L[1]).slice(0,25).map(L=>L.join(":")).join(" ")},items:()=>[...Kt.values()].map(T=>({pid:T.it.pid,id:T.it.item,zone:T.it.zone,x:T.x,y:T.y,z:T.z})),state:()=>({stance:kt,feet:pt,slowWalk:Ot,aiming:ue,panel:Et,fov:l.fov,light:m?m.isOn():null,quality:g,info:()=>({calls:o.info.render.calls,tris:o.info.render.triangles})})},{close:()=>En()}}function u_(n){n.updateMatrixWorld(!0);let t=new Map,e=[];n.traverse(i=>{if(!i.isMesh||i.isInstancedMesh||Array.isArray(i.material)){(i.isLine||i.isPoints||i.isSprite||i.isInstancedMesh)&&e.push(i);return}let s=i.geometry,r=`${i.material.uuid}|${Object.keys(s.attributes).sort().join(",")}|${i.castShadow?1:0}`,o=t.get(r);o||t.set(r,o={mat:i.material,cast:i.castShadow,geos:[]});let a=s.index?s.toNonIndexed():s.clone();a.applyMatrix4(i.matrixWorld),o.geos.push(a)});for(let i of e)i.updateMatrixWorld(!0),i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale);n.clear();for(let i of e)n.add(i);for(let i of t.values()){let s=i.geos.length===1?i.geos[0]:Y0(i.geos);if(!s)continue;let r=new Vt(s,i.mat);r.castShadow=i.cast,r.receiveShadow=!0,n.add(r)}}function f_(){let n=[];for(let t of il){let e=n.find(i=>i.name===t.group);e||n.push(e={name:t.group,rows:[]}),e.rows.push(t)}return n.map(t=>`<div class="kg"><h5>${Ji(t.name)}</h5>${t.rows.map(e=>`<div class="kr ${e.ready?"":"no"}"><kbd>${Ji(e.show)}</kbd><span>${Ji(e.label)}</span></div>`).join("")}</div>`).join("")}function d_(n,t){let e=new jt;if(n.type==="clothes"){let o=new Vt(new we(.05,.05,n.d),t);o.position.y=n.h,e.add(o);for(let a of[-n.d/2+.1,n.d/2-.1]){let l=new Vt(new we(.06,n.h,.06),t);l.position.set(0,n.h/2,a),e.add(l)}}else{let o=new Vt(new we(.06,n.h,n.d),t);o.position.y=n.h/2,e.add(o);for(let a of[.1,.6,1.1,1.55,1.98]){let l=new Vt(new we(n.w,.04,n.d),t);l.position.y=a,e.add(l)}for(let a of[-n.d/2,n.d/2]){let l=new Vt(new we(n.w,n.h,.05),t);l.position.set(0,n.h/2,a),e.add(l)}}let i=[];e.children.forEach(o=>{o.updateMatrix();let a=o.geometry.clone();a.applyMatrix4(o.matrix),i.push(a)});let s=new Vt(Y0(i.map(o=>o.toNonIndexed())),t),r=new jt;return r.add(s),r.position.set(n.x,0,n.z),r}window.LLInside3D={openInside:h_};})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
