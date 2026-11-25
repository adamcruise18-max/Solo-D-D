(()=>{var O0="170";var gd=0,Af=1,xd=2;var ll=1,U0=2,Gi=3,ds=0,gn=1,Le=2,hs=0,ur=1,qi=2,Rf=3,Cf=4,yd=5,Cs=100,_d=101,bd=102,vd=103,Md=104,Sd=200,Ed=201,wd=202,Td=203,lc=204,cc=205,Ad=206,Rd=207,Cd=208,Id=209,Pd=210,Ld=211,Nd=212,Od=213,Ud=214,fc=0,hc=1,uc=2,xr=3,dc=4,pc=5,mc=6,gc=7,Xh=0,Dd=1,kd=2,us=0,Fd=1,Bd=2,zd=3,D0=4,Hd=5,Gd=6,Vd=7;var Yh=300,yr=301,_r=302,xc=303,yc=304,cl=306,Zi=1e3,Wi=1001,_c=1002,jn=1003,Wd=1004;var $o=1005;var Ai=1006,Tl=1007;var Xi=1008;var Ki=1009,$h=1010,qh=1011,uo=1012,k0=1013,Ps=1014,Ri=1015,Ao=1016,F0=1017,B0=1018,br=1020,Zh=35902,Kh=1021,Jh=1022,xi=1023,jh=1024,Qh=1025,dr=1026,vr=1027,z0=1028,H0=1029,tu=1030,G0=1031;var V0=1033,Ca=33776,Ia=33777,Pa=33778,La=33779,bc=35840,vc=35841,Mc=35842,Sc=35843,Ec=36196,wc=37492,Tc=37496,Ac=37808,Rc=37809,Cc=37810,Ic=37811,Pc=37812,Lc=37813,Nc=37814,Oc=37815,Uc=37816,Dc=37817,kc=37818,Fc=37819,Bc=37820,zc=37821,Na=36492,Hc=36494,Gc=36495,eu=36283,Vc=36284,Wc=36285,Xc=36286;var Oa=2300,Yc=2301,Al=2302,If=2400,Pf=2401,Lf=2402;var Xd=3200,Yd=3201;var nu=0,$d=1,ri="",$e="srgb",Dr="srgb-linear",fl="linear",We="srgb";var Xs=7680;var Nf=519,qd=512,Zd=513,Kd=514,iu=515,Jd=516,jd=517,Qd=518,tp=519,$c=35044;var Of="300 es",Yi=2e3,Ua=2001,ps=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Uf=1234567,pr=Math.PI/180,Mr=180/Math.PI;function Ci(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Cn[n&255]+Cn[n>>8&255]+Cn[n>>16&255]+Cn[n>>24&255]+"-"+Cn[t&255]+Cn[t>>8&255]+"-"+Cn[t>>16&15|64]+Cn[t>>24&255]+"-"+Cn[e&63|128]+Cn[e>>8&255]+"-"+Cn[e>>16&255]+Cn[e>>24&255]+Cn[i&255]+Cn[i>>8&255]+Cn[i>>16&255]+Cn[i>>24&255]).toLowerCase()}function mn(n,t,e){return Math.max(t,Math.min(e,n))}function W0(n,t){return(n%t+t)%t}function ep(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function np(n,t,e){return n!==t?(e-n)/(t-n):0}function ao(n,t,e){return(1-e)*n+e*t}function ip(n,t,e,i){return ao(n,t,1-Math.exp(-e*i))}function sp(n,t=1){return t-Math.abs(W0(n,t*2)-t)}function rp(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function op(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function ap(n,t){return n+Math.floor(Math.random()*(t-n+1))}function lp(n,t){return n+Math.random()*(t-n)}function cp(n){return n*(.5-Math.random())}function fp(n){n!==void 0&&(Uf=n);let t=Uf+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function hp(n){return n*pr}function up(n){return n*Mr}function dp(n){return(n&n-1)===0&&n!==0}function pp(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function mp(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function gp(n,t,e,i,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+i)/2),f=o((t+i)/2),u=r((t-i)/2),h=o((t-i)/2),d=r((i-t)/2),p=o((i-t)/2);switch(s){case"XYX":n.set(a*f,l*u,l*h,a*c);break;case"YZY":n.set(l*h,a*f,l*u,a*c);break;case"ZXZ":n.set(l*u,l*h,a*f,a*c);break;case"XZX":n.set(a*f,l*p,l*d,a*c);break;case"YXY":n.set(l*d,a*f,l*p,a*c);break;case"ZYZ":n.set(l*p,l*d,a*f,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function gi(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function He(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var ms={DEG2RAD:pr,RAD2DEG:Mr,generateUUID:Ci,clamp:mn,euclideanModulo:W0,mapLinear:ep,inverseLerp:np,lerp:ao,damp:ip,pingpong:sp,smoothstep:rp,smootherstep:op,randInt:ap,randFloat:lp,randFloatSpread:cp,seededRandom:fp,degToRad:hp,radToDeg:up,isPowerOfTwo:dp,ceilPowerOfTwo:pp,floorPowerOfTwo:mp,setQuaternionFromProperEuler:gp,normalize:He,denormalize:gi},bt=class n{constructor(t=0,e=0){n.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(mn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ge=class n{constructor(t,e,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){let f=this.elements;return f[0]=t,f[1]=s,f[2]=a,f[3]=e,f[4]=r,f[5]=l,f[6]=i,f[7]=o,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],f=i[4],u=i[7],h=i[2],d=i[5],p=i[8],x=s[0],g=s[3],m=s[6],_=s[1],y=s[4],b=s[7],I=s[2],A=s[5],T=s[8];return r[0]=o*x+a*_+l*I,r[3]=o*g+a*y+l*A,r[6]=o*m+a*b+l*T,r[1]=c*x+f*_+u*I,r[4]=c*g+f*y+u*A,r[7]=c*m+f*b+u*T,r[2]=h*x+d*_+p*I,r[5]=h*g+d*y+p*A,r[8]=h*m+d*b+p*T,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],f=t[8];return e*o*f-e*a*c-i*r*f+i*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],f=t[8],u=f*o-a*c,h=a*l-f*r,d=c*r-o*l,p=e*u+i*h+s*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return t[0]=u*x,t[1]=(s*c-f*i)*x,t[2]=(a*i-s*o)*x,t[3]=h*x,t[4]=(f*e-s*l)*x,t[5]=(s*r-a*e)*x,t[6]=d*x,t[7]=(i*l-c*e)*x,t[8]=(o*e-i*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Rl.makeScale(t,e)),this}rotate(t){return this.premultiply(Rl.makeRotation(-t)),this}translate(t,e){return this.premultiply(Rl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Rl=new ge;function su(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Da(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function xp(){let n=Da("canvas");return n.style.display="block",n}var Df={};function ro(n){n in Df||(Df[n]=!0,console.warn(n))}function yp(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function _p(n){let t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function bp(n){let t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Pe={enabled:!0,workingColorSpace:Dr,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===We&&(n.r=$i(n.r),n.g=$i(n.g),n.b=$i(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===We&&(n.r=mr(n.r),n.g=mr(n.g),n.b=mr(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===ri?fl:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function $i(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function mr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var kf=[.64,.33,.3,.6,.15,.06],Ff=[.2126,.7152,.0722],Bf=[.3127,.329],zf=new ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Hf=new ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Pe.define({[Dr]:{primaries:kf,whitePoint:Bf,transfer:fl,toXYZ:zf,fromXYZ:Hf,luminanceCoefficients:Ff,workingColorSpaceConfig:{unpackColorSpace:$e},outputColorSpaceConfig:{drawingBufferColorSpace:$e}},[$e]:{primaries:kf,whitePoint:Bf,transfer:We,toXYZ:zf,fromXYZ:Hf,luminanceCoefficients:Ff,outputColorSpaceConfig:{drawingBufferColorSpace:$e}}});var Ys,qc=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ys===void 0&&(Ys=Da("canvas")),Ys.width=t.width,Ys.height=t.height;let i=Ys.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Ys}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Da("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=$i(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor($i(e[i]/255)*255):e[i]=$i(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},vp=0,ka=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vp++}),this.uuid=Ci(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Cl(s[o].image)):r.push(Cl(s[o]))}else r=Cl(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function Cl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?qc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Mp=0,Hn=class n extends ps{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=Wi,s=Wi,r=Ai,o=Xi,a=xi,l=Ki,c=n.DEFAULT_ANISOTROPY,f=ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Mp++}),this.uuid=Ci(),this.name="",this.source=new ka(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new bt(0,0),this.repeat=new bt(1,1),this.center=new bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Yh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Zi:t.x=t.x-Math.floor(t.x);break;case Wi:t.x=t.x<0?0:1;break;case _c:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Zi:t.y=t.y-Math.floor(t.y);break;case Wi:t.y=t.y<0?0:1;break;case _c:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Hn.DEFAULT_IMAGE=null;Hn.DEFAULT_MAPPING=Yh;Hn.DEFAULT_ANISOTROPY=1;var ke=class n{constructor(t=0,e=0,i=0,s=1){n.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],f=l[4],u=l[8],h=l[1],d=l[5],p=l[9],x=l[2],g=l[6],m=l[10];if(Math.abs(f-h)<.01&&Math.abs(u-x)<.01&&Math.abs(p-g)<.01){if(Math.abs(f+h)<.1&&Math.abs(u+x)<.1&&Math.abs(p+g)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let y=(c+1)/2,b=(d+1)/2,I=(m+1)/2,A=(f+h)/4,T=(u+x)/4,P=(p+g)/4;return y>b&&y>I?y<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(y),s=A/i,r=T/i):b>I?b<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),i=A/s,r=P/s):I<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),i=T/r,s=P/r),this.set(i,s,r,e),this}let _=Math.sqrt((g-p)*(g-p)+(u-x)*(u-x)+(h-f)*(h-f));return Math.abs(_)<.001&&(_=1),this.x=(g-p)/_,this.y=(u-x)/_,this.z=(h-f)/_,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Zc=class extends ps{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ke(0,0,t,e),this.scissorTest=!1,this.viewport=new ke(0,0,t,e);let s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ai,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new Hn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new ka(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ji=class extends Zc{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Fa=class extends Hn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=jn,this.minFilter=jn,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Kc=class extends Hn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=jn,this.minFilter=jn,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var xn=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],f=i[s+2],u=i[s+3],h=r[o+0],d=r[o+1],p=r[o+2],x=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=f,t[e+3]=u;return}if(a===1){t[e+0]=h,t[e+1]=d,t[e+2]=p,t[e+3]=x;return}if(u!==x||l!==h||c!==d||f!==p){let g=1-a,m=l*h+c*d+f*p+u*x,_=m>=0?1:-1,y=1-m*m;if(y>Number.EPSILON){let I=Math.sqrt(y),A=Math.atan2(I,m*_);g=Math.sin(g*A)/I,a=Math.sin(a*A)/I}let b=a*_;if(l=l*g+h*b,c=c*g+d*b,f=f*g+p*b,u=u*g+x*b,g===1-a){let I=1/Math.sqrt(l*l+c*c+f*f+u*u);l*=I,c*=I,f*=I,u*=I}}t[e]=l,t[e+1]=c,t[e+2]=f,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],f=i[s+3],u=r[o],h=r[o+1],d=r[o+2],p=r[o+3];return t[e]=a*p+f*u+l*d-c*h,t[e+1]=l*p+f*h+c*u-a*d,t[e+2]=c*p+f*d+a*h-l*u,t[e+3]=f*p-a*u-l*h-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),f=a(s/2),u=a(r/2),h=l(i/2),d=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=h*f*u+c*d*p,this._y=c*d*u-h*f*p,this._z=c*f*p+h*d*u,this._w=c*f*u-h*d*p;break;case"YXZ":this._x=h*f*u+c*d*p,this._y=c*d*u-h*f*p,this._z=c*f*p-h*d*u,this._w=c*f*u+h*d*p;break;case"ZXY":this._x=h*f*u-c*d*p,this._y=c*d*u+h*f*p,this._z=c*f*p+h*d*u,this._w=c*f*u-h*d*p;break;case"ZYX":this._x=h*f*u-c*d*p,this._y=c*d*u+h*f*p,this._z=c*f*p-h*d*u,this._w=c*f*u+h*d*p;break;case"YZX":this._x=h*f*u+c*d*p,this._y=c*d*u+h*f*p,this._z=c*f*p-h*d*u,this._w=c*f*u-h*d*p;break;case"XZY":this._x=h*f*u-c*d*p,this._y=c*d*u-h*f*p,this._z=c*f*p+h*d*u,this._w=c*f*u+h*d*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],f=e[6],u=e[10],h=i+a+u;if(h>0){let d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(f-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(i>a&&i>u){let d=2*Math.sqrt(1+i-a-u);this._w=(f-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-i-u);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+f)/d}else{let d=2*Math.sqrt(1+u-i-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+f)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(mn(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,f=e._w;return this._x=i*f+o*a+s*c-r*l,this._y=s*f+o*l+r*a-i*c,this._z=r*f+o*c+i*l-s*a,this._w=o*f-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let d=1-e;return this._w=d*o+e*this._w,this._x=d*i+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),f=Math.atan2(c,a),u=Math.sin((1-e)*f)/c,h=Math.sin(e*f)/c;return this._w=o*u+this._w*h,this._x=i*u+this._x*h,this._y=s*u+this._y*h,this._z=r*u+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},N=class n{constructor(t=0,e=0,i=0){n.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Gf.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Gf.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),f=2*(a*e-r*s),u=2*(r*i-o*e);return this.x=e+l*c+o*u-a*f,this.y=i+l*f+a*c-r*u,this.z=s+l*u+r*f-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Il.copy(this).projectOnVector(t),this.sub(Il)}reflect(t){return this.sub(Il.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(mn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Il=new N,Gf=new xn,Un=class{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(ui.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(ui.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=ui.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,ui):ui.fromBufferAttribute(r,o),ui.applyMatrix4(t.matrixWorld),this.expandByPoint(ui);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),qo.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),qo.copy(i.boundingBox)),qo.applyMatrix4(t.matrixWorld),this.union(qo)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ui),ui.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(qr),Zo.subVectors(this.max,qr),$s.subVectors(t.a,qr),qs.subVectors(t.b,qr),Zs.subVectors(t.c,qr),rs.subVectors(qs,$s),os.subVectors(Zs,qs),Ms.subVectors($s,Zs);let e=[0,-rs.z,rs.y,0,-os.z,os.y,0,-Ms.z,Ms.y,rs.z,0,-rs.x,os.z,0,-os.x,Ms.z,0,-Ms.x,-rs.y,rs.x,0,-os.y,os.x,0,-Ms.y,Ms.x,0];return!Pl(e,$s,qs,Zs,Zo)||(e=[1,0,0,0,1,0,0,0,1],!Pl(e,$s,qs,Zs,Zo))?!1:(Ko.crossVectors(rs,os),e=[Ko.x,Ko.y,Ko.z],Pl(e,$s,qs,Zs,Zo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ui).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ui).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ki),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},ki=[new N,new N,new N,new N,new N,new N,new N,new N],ui=new N,qo=new Un,$s=new N,qs=new N,Zs=new N,rs=new N,os=new N,Ms=new N,qr=new N,Zo=new N,Ko=new N,Ss=new N;function Pl(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Ss.fromArray(n,r);let a=s.x*Math.abs(Ss.x)+s.y*Math.abs(Ss.y)+s.z*Math.abs(Ss.z),l=t.dot(Ss),c=e.dot(Ss),f=i.dot(Ss);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>a)return!1}return!0}var Sp=new Un,Zr=new N,Ll=new N,ji=class{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Sp.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Zr.subVectors(t,this.center);let e=Zr.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Zr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ll.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Zr.copy(t.center).add(Ll)),this.expandByPoint(Zr.copy(t.center).sub(Ll))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Fi=new N,Nl=new N,Jo=new N,as=new N,Ol=new N,jo=new N,Ul=new N,Sr=class{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Fi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Fi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Fi.copy(this.origin).addScaledVector(this.direction,e),Fi.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Nl.copy(t).add(e).multiplyScalar(.5),Jo.copy(e).sub(t).normalize(),as.copy(this.origin).sub(Nl);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Jo),a=as.dot(this.direction),l=-as.dot(Jo),c=as.lengthSq(),f=Math.abs(1-o*o),u,h,d,p;if(f>0)if(u=o*l-a,h=o*a-l,p=r*f,u>=0)if(h>=-p)if(h<=p){let x=1/f;u*=x,h*=x,d=u*(u+o*h+2*a)+h*(o*u+h+2*l)+c}else h=r,u=Math.max(0,-(o*h+a)),d=-u*u+h*(h+2*l)+c;else h=-r,u=Math.max(0,-(o*h+a)),d=-u*u+h*(h+2*l)+c;else h<=-p?(u=Math.max(0,-(-o*r+a)),h=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+h*(h+2*l)+c):h<=p?(u=0,h=Math.min(Math.max(-r,-l),r),d=h*(h+2*l)+c):(u=Math.max(0,-(o*r+a)),h=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+h*(h+2*l)+c);else h=o>0?-r:r,u=Math.max(0,-(o*h+a)),d=-u*u+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Nl).addScaledVector(Jo,h),d}intersectSphere(t,e){Fi.subVectors(t.center,this.origin);let i=Fi.dot(this.direction),s=Fi.dot(Fi)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l,c=1/this.direction.x,f=1/this.direction.y,u=1/this.direction.z,h=this.origin;return c>=0?(i=(t.min.x-h.x)*c,s=(t.max.x-h.x)*c):(i=(t.max.x-h.x)*c,s=(t.min.x-h.x)*c),f>=0?(r=(t.min.y-h.y)*f,o=(t.max.y-h.y)*f):(r=(t.max.y-h.y)*f,o=(t.min.y-h.y)*f),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-h.z)*u,l=(t.max.z-h.z)*u):(a=(t.max.z-h.z)*u,l=(t.min.z-h.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Fi)!==null}intersectTriangle(t,e,i,s,r){Ol.subVectors(e,t),jo.subVectors(i,t),Ul.crossVectors(Ol,jo);let o=this.direction.dot(Ul),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;as.subVectors(this.origin,t);let l=a*this.direction.dot(jo.crossVectors(as,jo));if(l<0)return null;let c=a*this.direction.dot(Ol.cross(as));if(c<0||l+c>o)return null;let f=-a*as.dot(Ul);return f<0?null:this.at(f/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},oe=class n{constructor(t,e,i,s,r,o,a,l,c,f,u,h,d,p,x,g){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,f,u,h,d,p,x,g)}set(t,e,i,s,r,o,a,l,c,f,u,h,d,p,x,g){let m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=f,m[10]=u,m[14]=h,m[3]=d,m[7]=p,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,s=1/Ks.setFromMatrixColumn(t,0).length(),r=1/Ks.setFromMatrixColumn(t,1).length(),o=1/Ks.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),f=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let h=o*f,d=o*u,p=a*f,x=a*u;e[0]=l*f,e[4]=-l*u,e[8]=c,e[1]=d+p*c,e[5]=h-x*c,e[9]=-a*l,e[2]=x-h*c,e[6]=p+d*c,e[10]=o*l}else if(t.order==="YXZ"){let h=l*f,d=l*u,p=c*f,x=c*u;e[0]=h+x*a,e[4]=p*a-d,e[8]=o*c,e[1]=o*u,e[5]=o*f,e[9]=-a,e[2]=d*a-p,e[6]=x+h*a,e[10]=o*l}else if(t.order==="ZXY"){let h=l*f,d=l*u,p=c*f,x=c*u;e[0]=h-x*a,e[4]=-o*u,e[8]=p+d*a,e[1]=d+p*a,e[5]=o*f,e[9]=x-h*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let h=o*f,d=o*u,p=a*f,x=a*u;e[0]=l*f,e[4]=p*c-d,e[8]=h*c+x,e[1]=l*u,e[5]=x*c+h,e[9]=d*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let h=o*l,d=o*c,p=a*l,x=a*c;e[0]=l*f,e[4]=x-h*u,e[8]=p*u+d,e[1]=u,e[5]=o*f,e[9]=-a*f,e[2]=-c*f,e[6]=d*u+p,e[10]=h-x*u}else if(t.order==="XZY"){let h=o*l,d=o*c,p=a*l,x=a*c;e[0]=l*f,e[4]=-u,e[8]=c*f,e[1]=h*u+x,e[5]=o*f,e[9]=d*u-p,e[2]=p*u-d,e[6]=a*f,e[10]=x*u+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ep,t,wp)}lookAt(t,e,i){let s=this.elements;return Kn.subVectors(t,e),Kn.lengthSq()===0&&(Kn.z=1),Kn.normalize(),ls.crossVectors(i,Kn),ls.lengthSq()===0&&(Math.abs(i.z)===1?Kn.x+=1e-4:Kn.z+=1e-4,Kn.normalize(),ls.crossVectors(i,Kn)),ls.normalize(),Qo.crossVectors(Kn,ls),s[0]=ls.x,s[4]=Qo.x,s[8]=Kn.x,s[1]=ls.y,s[5]=Qo.y,s[9]=Kn.y,s[2]=ls.z,s[6]=Qo.z,s[10]=Kn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],f=i[1],u=i[5],h=i[9],d=i[13],p=i[2],x=i[6],g=i[10],m=i[14],_=i[3],y=i[7],b=i[11],I=i[15],A=s[0],T=s[4],P=s[8],E=s[12],M=s[1],U=s[5],B=s[9],V=s[13],H=s[2],rt=s[6],$=s[10],pt=s[14],Q=s[3],vt=s[7],Lt=s[11],Bt=s[15];return r[0]=o*A+a*M+l*H+c*Q,r[4]=o*T+a*U+l*rt+c*vt,r[8]=o*P+a*B+l*$+c*Lt,r[12]=o*E+a*V+l*pt+c*Bt,r[1]=f*A+u*M+h*H+d*Q,r[5]=f*T+u*U+h*rt+d*vt,r[9]=f*P+u*B+h*$+d*Lt,r[13]=f*E+u*V+h*pt+d*Bt,r[2]=p*A+x*M+g*H+m*Q,r[6]=p*T+x*U+g*rt+m*vt,r[10]=p*P+x*B+g*$+m*Lt,r[14]=p*E+x*V+g*pt+m*Bt,r[3]=_*A+y*M+b*H+I*Q,r[7]=_*T+y*U+b*rt+I*vt,r[11]=_*P+y*B+b*$+I*Lt,r[15]=_*E+y*V+b*pt+I*Bt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],f=t[2],u=t[6],h=t[10],d=t[14],p=t[3],x=t[7],g=t[11],m=t[15];return p*(+r*l*u-s*c*u-r*a*h+i*c*h+s*a*d-i*l*d)+x*(+e*l*d-e*c*h+r*o*h-s*o*d+s*c*f-r*l*f)+g*(+e*c*u-e*a*d-r*o*u+i*o*d+r*a*f-i*c*f)+m*(-s*a*f-e*l*u+e*a*h+s*o*u-i*o*h+i*l*f)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],f=t[8],u=t[9],h=t[10],d=t[11],p=t[12],x=t[13],g=t[14],m=t[15],_=u*g*c-x*h*c+x*l*d-a*g*d-u*l*m+a*h*m,y=p*h*c-f*g*c-p*l*d+o*g*d+f*l*m-o*h*m,b=f*x*c-p*u*c+p*a*d-o*x*d-f*a*m+o*u*m,I=p*u*l-f*x*l-p*a*h+o*x*h+f*a*g-o*u*g,A=e*_+i*y+s*b+r*I;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/A;return t[0]=_*T,t[1]=(x*h*r-u*g*r-x*s*d+i*g*d+u*s*m-i*h*m)*T,t[2]=(a*g*r-x*l*r+x*s*c-i*g*c-a*s*m+i*l*m)*T,t[3]=(u*l*r-a*h*r-u*s*c+i*h*c+a*s*d-i*l*d)*T,t[4]=y*T,t[5]=(f*g*r-p*h*r+p*s*d-e*g*d-f*s*m+e*h*m)*T,t[6]=(p*l*r-o*g*r-p*s*c+e*g*c+o*s*m-e*l*m)*T,t[7]=(o*h*r-f*l*r+f*s*c-e*h*c-o*s*d+e*l*d)*T,t[8]=b*T,t[9]=(p*u*r-f*x*r-p*i*d+e*x*d+f*i*m-e*u*m)*T,t[10]=(o*x*r-p*a*r+p*i*c-e*x*c-o*i*m+e*a*m)*T,t[11]=(f*a*r-o*u*r-f*i*c+e*u*c+o*i*d-e*a*d)*T,t[12]=I*T,t[13]=(f*x*s-p*u*s+p*i*h-e*x*h-f*i*g+e*u*g)*T,t[14]=(p*a*s-o*x*s-p*i*l+e*x*l+o*i*g-e*a*g)*T,t[15]=(o*u*s-f*a*s+f*i*l-e*u*l-o*i*h+e*a*h)*T,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,f=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,f*a+i,f*l-s*o,0,c*l-s*a,f*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,f=o+o,u=a+a,h=r*c,d=r*f,p=r*u,x=o*f,g=o*u,m=a*u,_=l*c,y=l*f,b=l*u,I=i.x,A=i.y,T=i.z;return s[0]=(1-(x+m))*I,s[1]=(d+b)*I,s[2]=(p-y)*I,s[3]=0,s[4]=(d-b)*A,s[5]=(1-(h+m))*A,s[6]=(g+_)*A,s[7]=0,s[8]=(p+y)*T,s[9]=(g-_)*T,s[10]=(1-(h+x))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements,r=Ks.set(s[0],s[1],s[2]).length(),o=Ks.set(s[4],s[5],s[6]).length(),a=Ks.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],di.copy(this);let c=1/r,f=1/o,u=1/a;return di.elements[0]*=c,di.elements[1]*=c,di.elements[2]*=c,di.elements[4]*=f,di.elements[5]*=f,di.elements[6]*=f,di.elements[8]*=u,di.elements[9]*=u,di.elements[10]*=u,e.setFromRotationMatrix(di),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=Yi){let l=this.elements,c=2*r/(e-t),f=2*r/(i-s),u=(e+t)/(e-t),h=(i+s)/(i-s),d,p;if(a===Yi)d=-(o+r)/(o-r),p=-2*o*r/(o-r);else if(a===Ua)d=-o/(o-r),p=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=f,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=p,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=Yi){let l=this.elements,c=1/(e-t),f=1/(i-s),u=1/(o-r),h=(e+t)*c,d=(i+s)*f,p,x;if(a===Yi)p=(o+r)*u,x=-2*u;else if(a===Ua)p=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=x,l[14]=-p,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},Ks=new N,di=new oe,Ep=new N(0,0,0),wp=new N(1,1,1),ls=new N,Qo=new N,Kn=new N,Vf=new oe,Wf=new xn,yn=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],f=s[9],u=s[2],h=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(mn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-mn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(mn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-mn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(mn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-mn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-f,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Vf.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Vf,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Wf.setFromEuler(this),this.setFromQuaternion(Wf,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};yn.DEFAULT_ORDER="XYZ";var po=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Tp=0,Xf=new N,Js=new xn,Bi=new oe,ta=new N,Kr=new N,Ap=new N,Rp=new xn,Yf=new N(1,0,0),$f=new N(0,1,0),qf=new N(0,0,1),Zf={type:"added"},Cp={type:"removed"},js={type:"childadded",child:null},Dl={type:"childremoved",child:null},sn=class n extends ps{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Tp++}),this.uuid=Ci(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new N,e=new yn,i=new xn,s=new N(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new oe},normalMatrix:{value:new ge}}),this.matrix=new oe,this.matrixWorld=new oe,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new po,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Js.setFromAxisAngle(t,e),this.quaternion.multiply(Js),this}rotateOnWorldAxis(t,e){return Js.setFromAxisAngle(t,e),this.quaternion.premultiply(Js),this}rotateX(t){return this.rotateOnAxis(Yf,t)}rotateY(t){return this.rotateOnAxis($f,t)}rotateZ(t){return this.rotateOnAxis(qf,t)}translateOnAxis(t,e){return Xf.copy(t).applyQuaternion(this.quaternion),this.position.add(Xf.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Yf,t)}translateY(t){return this.translateOnAxis($f,t)}translateZ(t){return this.translateOnAxis(qf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Bi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?ta.copy(t):ta.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Kr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bi.lookAt(Kr,ta,this.up):Bi.lookAt(ta,Kr,this.up),this.quaternion.setFromRotationMatrix(Bi),s&&(Bi.extractRotation(s.matrixWorld),Js.setFromRotationMatrix(Bi),this.quaternion.premultiply(Js.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Zf),js.child=t,this.dispatchEvent(js),js.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Cp),Dl.child=t,this.dispatchEvent(Dl),Dl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Bi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Bi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Bi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Zf),js.child=t,this.dispatchEvent(js),js.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kr,t,Ap),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kr,Rp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),f=o(t.images),u=o(t.shapes),h=o(t.skeletons),d=o(t.animations),p=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),u.length>0&&(i.shapes=u),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),p.length>0&&(i.nodes=p)}return i.object=s,i;function o(a){let l=[];for(let c in a){let f=a[c];delete f.metadata,l.push(f)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};sn.DEFAULT_UP=new N(0,1,0);sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var pi=new N,zi=new N,kl=new N,Hi=new N,Qs=new N,tr=new N,Kf=new N,Fl=new N,Bl=new N,zl=new N,Hl=new ke,Gl=new ke,Vl=new ke,Vi=class n{constructor(t=new N,e=new N,i=new N){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),pi.subVectors(t,e),s.cross(pi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){pi.subVectors(s,e),zi.subVectors(i,e),kl.subVectors(t,e);let o=pi.dot(pi),a=pi.dot(zi),l=pi.dot(kl),c=zi.dot(zi),f=zi.dot(kl),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let h=1/u,d=(c*l-a*f)*h,p=(o*f-a*l)*h;return r.set(1-d-p,p,d)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Hi)===null?!1:Hi.x>=0&&Hi.y>=0&&Hi.x+Hi.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,Hi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Hi.x),l.addScaledVector(o,Hi.y),l.addScaledVector(a,Hi.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return Hl.setScalar(0),Gl.setScalar(0),Vl.setScalar(0),Hl.fromBufferAttribute(t,e),Gl.fromBufferAttribute(t,i),Vl.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Hl,r.x),o.addScaledVector(Gl,r.y),o.addScaledVector(Vl,r.z),o}static isFrontFacing(t,e,i,s){return pi.subVectors(i,e),zi.subVectors(t,e),pi.cross(zi).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return pi.subVectors(this.c,this.b),zi.subVectors(this.a,this.b),pi.cross(zi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;Qs.subVectors(s,i),tr.subVectors(r,i),Fl.subVectors(t,i);let l=Qs.dot(Fl),c=tr.dot(Fl);if(l<=0&&c<=0)return e.copy(i);Bl.subVectors(t,s);let f=Qs.dot(Bl),u=tr.dot(Bl);if(f>=0&&u<=f)return e.copy(s);let h=l*u-f*c;if(h<=0&&l>=0&&f<=0)return o=l/(l-f),e.copy(i).addScaledVector(Qs,o);zl.subVectors(t,r);let d=Qs.dot(zl),p=tr.dot(zl);if(p>=0&&d<=p)return e.copy(r);let x=d*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(i).addScaledVector(tr,a);let g=f*p-d*u;if(g<=0&&u-f>=0&&d-p>=0)return Kf.subVectors(r,s),a=(u-f)/(u-f+(d-p)),e.copy(s).addScaledVector(Kf,a);let m=1/(g+x+h);return o=x*m,a=h*m,e.copy(i).addScaledVector(Qs,o).addScaledVector(tr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ru={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},cs={h:0,s:0,l:0},ea={h:0,s:0,l:0};function Wl(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var Jt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=$e){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Pe.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=Pe.workingColorSpace){return this.r=t,this.g=e,this.b=i,Pe.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=Pe.workingColorSpace){if(t=W0(t,1),e=mn(e,0,1),i=mn(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Wl(o,r,t+1/3),this.g=Wl(o,r,t),this.b=Wl(o,r,t-1/3)}return Pe.toWorkingColorSpace(this,s),this}setStyle(t,e=$e){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=$e){let i=ru[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=$i(t.r),this.g=$i(t.g),this.b=$i(t.b),this}copyLinearToSRGB(t){return this.r=mr(t.r),this.g=mr(t.g),this.b=mr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=$e){return Pe.fromWorkingColorSpace(In.copy(this),t),Math.round(mn(In.r*255,0,255))*65536+Math.round(mn(In.g*255,0,255))*256+Math.round(mn(In.b*255,0,255))}getHexString(t=$e){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Pe.workingColorSpace){Pe.fromWorkingColorSpace(In.copy(this),e);let i=In.r,s=In.g,r=In.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,f=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=f<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=f,t}getRGB(t,e=Pe.workingColorSpace){return Pe.fromWorkingColorSpace(In.copy(this),e),t.r=In.r,t.g=In.g,t.b=In.b,t}getStyle(t=$e){Pe.fromWorkingColorSpace(In.copy(this),t);let e=In.r,i=In.g,s=In.b;return t!==$e?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(cs),this.setHSL(cs.h+t,cs.s+e,cs.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(cs),t.getHSL(ea);let i=ao(cs.h,ea.h,e),s=ao(cs.s,ea.s,e),r=ao(cs.l,ea.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},In=new Jt;Jt.NAMES=ru;var Ip=0,Ii=class extends ps{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ip++}),this.uuid=Ci(),this.name="",this.blending=ur,this.side=ds,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=lc,this.blendDst=cc,this.blendEquation=Cs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Jt(0,0,0),this.blendAlpha=0,this.depthFunc=xr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Nf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xs,this.stencilZFail=Xs,this.stencilZPass=Xs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ur&&(i.blending=this.blending),this.side!==ds&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==lc&&(i.blendSrc=this.blendSrc),this.blendDst!==cc&&(i.blendDst=this.blendDst),this.blendEquation!==Cs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==xr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Nf&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Xs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Xs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},_n=class extends Ii{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.combine=Xh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var ln=new N,na=new bt,Ze=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=$c,this.updateRanges=[],this.gpuType=Ri,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)na.fromBufferAttribute(this,e),na.applyMatrix3(t),this.setXY(e,na.x,na.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)ln.fromBufferAttribute(this,e),ln.applyMatrix3(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)ln.fromBufferAttribute(this,e),ln.applyMatrix4(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ln.fromBufferAttribute(this,e),ln.applyNormalMatrix(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ln.fromBufferAttribute(this,e),ln.transformDirection(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=gi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=He(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=gi(e,this.array)),e}setX(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=gi(e,this.array)),e}setY(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=gi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=gi(e,this.array)),e}setW(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),i=He(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),i=He(i,this.array),s=He(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),i=He(i,this.array),s=He(s,this.array),r=He(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==$c&&(t.usage=this.usage),t}};var Er=class extends Ze{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var wr=class extends Ze{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var he=class extends Ze{constructor(t,e,i){super(new Float32Array(t),e,i)}},Pp=0,si=new oe,Xl=new sn,er=new N,Jn=new Un,Jr=new Un,pn=new N,Ue=class n extends ps{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Pp++}),this.uuid=Ci(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(su(t)?wr:Er)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new ge().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return si.makeRotationFromQuaternion(t),this.applyMatrix4(si),this}rotateX(t){return si.makeRotationX(t),this.applyMatrix4(si),this}rotateY(t){return si.makeRotationY(t),this.applyMatrix4(si),this}rotateZ(t){return si.makeRotationZ(t),this.applyMatrix4(si),this}translate(t,e,i){return si.makeTranslation(t,e,i),this.applyMatrix4(si),this}scale(t,e,i){return si.makeScale(t,e,i),this.applyMatrix4(si),this}lookAt(t){return Xl.lookAt(t),Xl.updateMatrix(),this.applyMatrix4(Xl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(er).negate(),this.translate(er.x,er.y,er.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new he(i,3))}else{for(let i=0,s=e.count;i<s;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Un);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];Jn.setFromBufferAttribute(r),this.morphTargetsRelative?(pn.addVectors(this.boundingBox.min,Jn.min),this.boundingBox.expandByPoint(pn),pn.addVectors(this.boundingBox.max,Jn.max),this.boundingBox.expandByPoint(pn)):(this.boundingBox.expandByPoint(Jn.min),this.boundingBox.expandByPoint(Jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ji);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){let i=this.boundingSphere.center;if(Jn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Jr.setFromBufferAttribute(a),this.morphTargetsRelative?(pn.addVectors(Jn.min,Jr.min),Jn.expandByPoint(pn),pn.addVectors(Jn.max,Jr.max),Jn.expandByPoint(pn)):(Jn.expandByPoint(Jr.min),Jn.expandByPoint(Jr.max))}Jn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)pn.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(pn));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,f=a.count;c<f;c++)pn.fromBufferAttribute(a,c),l&&(er.fromBufferAttribute(t,c),pn.add(er)),s=Math.max(s,i.distanceToSquared(pn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ze(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<i.count;P++)a[P]=new N,l[P]=new N;let c=new N,f=new N,u=new N,h=new bt,d=new bt,p=new bt,x=new N,g=new N;function m(P,E,M){c.fromBufferAttribute(i,P),f.fromBufferAttribute(i,E),u.fromBufferAttribute(i,M),h.fromBufferAttribute(r,P),d.fromBufferAttribute(r,E),p.fromBufferAttribute(r,M),f.sub(c),u.sub(c),d.sub(h),p.sub(h);let U=1/(d.x*p.y-p.x*d.y);isFinite(U)&&(x.copy(f).multiplyScalar(p.y).addScaledVector(u,-d.y).multiplyScalar(U),g.copy(u).multiplyScalar(d.x).addScaledVector(f,-p.x).multiplyScalar(U),a[P].add(x),a[E].add(x),a[M].add(x),l[P].add(g),l[E].add(g),l[M].add(g))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let P=0,E=_.length;P<E;++P){let M=_[P],U=M.start,B=M.count;for(let V=U,H=U+B;V<H;V+=3)m(t.getX(V+0),t.getX(V+1),t.getX(V+2))}let y=new N,b=new N,I=new N,A=new N;function T(P){I.fromBufferAttribute(s,P),A.copy(I);let E=a[P];y.copy(E),y.sub(I.multiplyScalar(I.dot(E))).normalize(),b.crossVectors(A,E);let U=b.dot(l[P])<0?-1:1;o.setXYZW(P,y.x,y.y,y.z,U)}for(let P=0,E=_.length;P<E;++P){let M=_[P],U=M.start,B=M.count;for(let V=U,H=U+B;V<H;V+=3)T(t.getX(V+0)),T(t.getX(V+1)),T(t.getX(V+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ze(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);let s=new N,r=new N,o=new N,a=new N,l=new N,c=new N,f=new N,u=new N;if(t)for(let h=0,d=t.count;h<d;h+=3){let p=t.getX(h+0),x=t.getX(h+1),g=t.getX(h+2);s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,g),f.subVectors(o,r),u.subVectors(s,r),f.cross(u),a.fromBufferAttribute(i,p),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,g),a.add(f),l.add(f),c.add(f),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,d=e.count;h<d;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),f.subVectors(o,r),u.subVectors(s,r),f.cross(u),i.setXYZ(h+0,f.x,f.y,f.z),i.setXYZ(h+1,f.x,f.y,f.z),i.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)pn.fromBufferAttribute(t,e),pn.normalize(),t.setXYZ(e,pn.x,pn.y,pn.z)}toNonIndexed(){function t(a,l){let c=a.array,f=a.itemSize,u=a.normalized,h=new c.constructor(l.length*f),d=0,p=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*f;for(let m=0;m<f;m++)h[p++]=c[d++]}return new Ze(h,f,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,i);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let f=0,u=c.length;f<u;f++){let h=c[f],d=t(h,i);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],f=[];for(let u=0,h=c.length;u<h;u++){let d=c[u];f.push(d.toJSON(t.data))}f.length>0&&(s[l]=f,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let s=t.attributes;for(let c in s){let f=s[c];this.setAttribute(c,f.clone(e))}let r=t.morphAttributes;for(let c in r){let f=[],u=r[c];for(let h=0,d=u.length;h<d;h++)f.push(u[h].clone(e));this.morphAttributes[c]=f}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,f=o.length;c<f;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Jf=new oe,Es=new Sr,ia=new ji,jf=new N,sa=new N,ra=new N,oa=new N,Yl=new N,aa=new N,Qf=new N,la=new N,Xt=class extends sn{constructor(t=new Ue,e=new _n){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){aa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let f=a[l],u=r[l];f!==0&&(Yl.fromBufferAttribute(u,t),o?aa.addScaledVector(Yl,f):aa.addScaledVector(Yl.sub(e),f))}e.add(aa)}return e}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ia.copy(i.boundingSphere),ia.applyMatrix4(r),Es.copy(t.ray).recast(t.near),!(ia.containsPoint(Es.origin)===!1&&(Es.intersectSphere(ia,jf)===null||Es.origin.distanceToSquared(jf)>(t.far-t.near)**2))&&(Jf.copy(r).invert(),Es.copy(t.ray).applyMatrix4(Jf),!(i.boundingBox!==null&&Es.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Es)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,f=r.attributes.uv1,u=r.attributes.normal,h=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=h.length;p<x;p++){let g=h[p],m=o[g.materialIndex],_=Math.max(g.start,d.start),y=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let b=_,I=y;b<I;b+=3){let A=a.getX(b),T=a.getX(b+1),P=a.getX(b+2);s=ca(this,m,t,i,c,f,u,A,T,P),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let p=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let g=p,m=x;g<m;g+=3){let _=a.getX(g),y=a.getX(g+1),b=a.getX(g+2);s=ca(this,o,t,i,c,f,u,_,y,b),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=h.length;p<x;p++){let g=h[p],m=o[g.materialIndex],_=Math.max(g.start,d.start),y=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let b=_,I=y;b<I;b+=3){let A=b,T=b+1,P=b+2;s=ca(this,m,t,i,c,f,u,A,T,P),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let p=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let g=p,m=x;g<m;g+=3){let _=g,y=g+1,b=g+2;s=ca(this,o,t,i,c,f,u,_,y,b),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function Lp(n,t,e,i,s,r,o,a){let l;if(t.side===gn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===ds,a),l===null)return null;la.copy(a),la.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(la);return c<e.near||c>e.far?null:{distance:c,point:la.clone(),object:n}}function ca(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,sa),n.getVertexPosition(l,ra),n.getVertexPosition(c,oa);let f=Lp(n,t,e,i,sa,ra,oa,Qf);if(f){let u=new N;Vi.getBarycoord(Qf,sa,ra,oa,u),s&&(f.uv=Vi.getInterpolatedAttribute(s,a,l,c,u,new bt)),r&&(f.uv1=Vi.getInterpolatedAttribute(r,a,l,c,u,new bt)),o&&(f.normal=Vi.getInterpolatedAttribute(o,a,l,c,u,new N),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));let h={a,b:l,c,normal:new N,materialIndex:0};Vi.getNormal(sa,ra,oa,h.normal),f.face=h,f.barycoord=u}return f}var we=class n extends Ue{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],f=[],u=[],h=0,d=0;p("z","y","x",-1,-1,i,e,t,o,r,0),p("z","y","x",1,-1,i,e,-t,o,r,1),p("x","z","y",1,1,t,i,e,s,o,2),p("x","z","y",1,-1,t,i,-e,s,o,3),p("x","y","z",1,-1,t,e,i,s,r,4),p("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new he(c,3)),this.setAttribute("normal",new he(f,3)),this.setAttribute("uv",new he(u,2));function p(x,g,m,_,y,b,I,A,T,P,E){let M=b/T,U=I/P,B=b/2,V=I/2,H=A/2,rt=T+1,$=P+1,pt=0,Q=0,vt=new N;for(let Lt=0;Lt<$;Lt++){let Bt=Lt*U-V;for(let se=0;se<rt;se++){let be=se*M-B;vt[x]=be*_,vt[g]=Bt*y,vt[m]=H,c.push(vt.x,vt.y,vt.z),vt[x]=0,vt[g]=0,vt[m]=A>0?1:-1,f.push(vt.x,vt.y,vt.z),u.push(se/T),u.push(1-Lt/P),pt+=1}}for(let Lt=0;Lt<P;Lt++)for(let Bt=0;Bt<T;Bt++){let se=h+Bt+rt*Lt,be=h+Bt+rt*(Lt+1),ot=h+(Bt+1)+rt*(Lt+1),yt=h+(Bt+1)+rt*Lt;l.push(se,be,yt),l.push(be,ot,yt),Q+=6}a.addGroup(d,Q,E),d+=Q,h+=pt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Tr(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function On(n){let t={};for(let e=0;e<n.length;e++){let i=Tr(n[e]);for(let s in i)t[s]=i[s]}return t}function Np(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function ou(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Pe.workingColorSpace}var Op={clone:Tr,merge:On},Up=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Dp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Qn=class extends Ii{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Up,this.fragmentShader=Dp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Tr(t.uniforms),this.uniformsGroups=Np(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},Ba=class extends sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new oe,this.projectionMatrix=new oe,this.projectionMatrixInverse=new oe,this.coordinateSystem=Yi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},fs=new N,th=new bt,eh=new bt,Mn=class extends Ba{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Mr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(pr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Mr*2*Math.atan(Math.tan(pr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){fs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(fs.x,fs.y).multiplyScalar(-t/fs.z),fs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(fs.x,fs.y).multiplyScalar(-t/fs.z)}getViewSize(t,e){return this.getViewBounds(t,th,eh),e.subVectors(eh,th)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(pr*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},nr=-90,ir=1,Jc=class extends sn{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Mn(nr,ir,t,e);s.layers=this.layers,this.add(s);let r=new Mn(nr,ir,t,e);r.layers=this.layers,this.add(r);let o=new Mn(nr,ir,t,e);o.layers=this.layers,this.add(o);let a=new Mn(nr,ir,t,e);a.layers=this.layers,this.add(a);let l=new Mn(nr,ir,t,e);l.layers=this.layers,this.add(l);let c=new Mn(nr,ir,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Yi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ua)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,f]=this.children,u=t.getRenderTarget(),h=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,s),t.render(e,f),t.setRenderTarget(u,h,d),t.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},za=class extends Hn{constructor(t,e,i,s,r,o,a,l,c,f){t=t!==void 0?t:[],e=e!==void 0?e:yr,super(t,e,i,s,r,o,a,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},jc=class extends Ji{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new za(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ai}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new we(5,5,5),r=new Qn({name:"CubemapFromEquirect",uniforms:Tr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:gn,blending:hs});r.uniforms.tEquirect.value=e;let o=new Xt(s,r),a=e.minFilter;return e.minFilter===Xi&&(e.minFilter=Ai),new Jc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}},$l=new N,kp=new N,Fp=new ge,mi=class{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=$l.subVectors(i,e).cross(kp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta($l),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Fp.getNormalMatrix(t),s=this.coplanarPoint($l).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},ws=new ji,fa=new N,mo=class{constructor(t=new mi,e=new mi,i=new mi,s=new mi,r=new mi,o=new mi){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Yi){let i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],f=s[5],u=s[6],h=s[7],d=s[8],p=s[9],x=s[10],g=s[11],m=s[12],_=s[13],y=s[14],b=s[15];if(i[0].setComponents(l-r,h-c,g-d,b-m).normalize(),i[1].setComponents(l+r,h+c,g+d,b+m).normalize(),i[2].setComponents(l+o,h+f,g+p,b+_).normalize(),i[3].setComponents(l-o,h-f,g-p,b-_).normalize(),i[4].setComponents(l-a,h-u,g-x,b-y).normalize(),e===Yi)i[5].setComponents(l+a,h+u,g+x,b+y).normalize();else if(e===Ua)i[5].setComponents(a,u,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ws.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ws.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ws)}intersectsSprite(t){return ws.center.set(0,0,0),ws.radius=.7071067811865476,ws.applyMatrix4(t.matrixWorld),this.intersectsSphere(ws)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(fa.x=s.normal.x>0?t.max.x:t.min.x,fa.y=s.normal.y>0?t.max.y:t.min.y,fa.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(fa)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function au(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Bp(n){let t=new WeakMap;function e(a,l){let c=a.array,f=a.usage,u=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,f),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){let f=l.array,u=l.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,f);else{u.sort((d,p)=>d.start-p.start);let h=0;for(let d=1;d<u.length;d++){let p=u[h],x=u[d];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++h,u[h]=x)}u.length=h+1;for(let d=0,p=u.length;d<p;d++){let x=u[d];n.bufferSubData(c,x.start*f.BYTES_PER_ELEMENT,f,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let f=t.get(a);(!f||f.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Fe=class n extends Ue{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,f=l+1,u=t/a,h=e/l,d=[],p=[],x=[],g=[];for(let m=0;m<f;m++){let _=m*h-o;for(let y=0;y<c;y++){let b=y*u-r;p.push(b,-_,0),x.push(0,0,1),g.push(y/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let _=0;_<a;_++){let y=_+c*m,b=_+c*(m+1),I=_+1+c*(m+1),A=_+1+c*m;d.push(y,b,A),d.push(b,I,A)}this.setIndex(d),this.setAttribute("position",new he(p,3)),this.setAttribute("normal",new he(x,3)),this.setAttribute("uv",new he(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},zp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Hp=`#ifdef USE_ALPHAHASH
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
#endif`,Gp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Xp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yp=`#ifdef USE_AOMAP
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
#endif`,$p=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qp=`#ifdef USE_BATCHING
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
#endif`,Zp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Kp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Jp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Qp=`#ifdef USE_IRIDESCENCE
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
#endif`,tm=`#ifdef USE_BUMPMAP
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
#endif`,em=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,nm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,im=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,om=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,am=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,lm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,cm=`#define PI 3.141592653589793
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
} // validated`,fm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,hm=`vec3 transformedNormal = objectNormal;
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
#endif`,um=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,dm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,pm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gm="gl_FragColor = linearToOutputTexel( gl_FragColor );",xm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ym=`#ifdef USE_ENVMAP
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
#endif`,_m=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,bm=`#ifdef USE_ENVMAP
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
#endif`,vm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Mm=`#ifdef USE_ENVMAP
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
#endif`,Sm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Em=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Tm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Am=`#ifdef USE_GRADIENTMAP
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
}`,Rm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Cm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Im=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Pm=`uniform bool receiveShadow;
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
#endif`,Lm=`#ifdef USE_ENVMAP
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
#endif`,Nm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Om=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Um=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Dm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,km=`PhysicalMaterial material;
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
#endif`,Fm=`struct PhysicalMaterial {
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
}`,Bm=`
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
#endif`,zm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Hm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Gm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Vm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ym=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$m=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Zm=`#if defined( USE_POINTS_UV )
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
#endif`,Km=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Jm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Qm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,t1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,e1=`#ifdef USE_MORPHTARGETS
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
#endif`,n1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,i1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,s1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,r1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,o1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,a1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,l1=`#ifdef USE_NORMALMAP
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
#endif`,c1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,f1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,h1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,u1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,d1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,p1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,m1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,g1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,x1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,y1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,b1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,v1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,M1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,S1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,E1=`float getShadowMask() {
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
}`,w1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,T1=`#ifdef USE_SKINNING
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
#endif`,A1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,R1=`#ifdef USE_SKINNING
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
#endif`,C1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,I1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,P1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,L1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,N1=`#ifdef USE_TRANSMISSION
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
#endif`,O1=`#ifdef USE_TRANSMISSION
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
#endif`,U1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,D1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,k1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,F1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,B1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,z1=`uniform sampler2D t2D;
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
}`,H1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,G1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,V1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,W1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,X1=`#include <common>
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
}`,Y1=`#if DEPTH_PACKING == 3200
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
}`,$1=`#define DISTANCE
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
}`,q1=`#define DISTANCE
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
}`,Z1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,K1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,J1=`uniform float scale;
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
}`,j1=`uniform vec3 diffuse;
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
}`,Q1=`#include <common>
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
}`,tg=`uniform vec3 diffuse;
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
}`,eg=`#define LAMBERT
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
}`,ng=`#define LAMBERT
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
}`,ig=`#define MATCAP
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
}`,sg=`#define MATCAP
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
}`,rg=`#define NORMAL
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
}`,og=`#define NORMAL
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
}`,ag=`#define PHONG
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
}`,lg=`#define PHONG
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
}`,cg=`#define STANDARD
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
}`,fg=`#define STANDARD
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
}`,hg=`#define TOON
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
}`,ug=`#define TOON
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
}`,dg=`uniform float size;
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
}`,pg=`uniform vec3 diffuse;
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
}`,mg=`#include <common>
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
}`,gg=`uniform vec3 color;
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
}`,xg=`uniform float rotation;
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
}`,yg=`uniform vec3 diffuse;
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
}`,Me={alphahash_fragment:zp,alphahash_pars_fragment:Hp,alphamap_fragment:Gp,alphamap_pars_fragment:Vp,alphatest_fragment:Wp,alphatest_pars_fragment:Xp,aomap_fragment:Yp,aomap_pars_fragment:$p,batching_pars_vertex:qp,batching_vertex:Zp,begin_vertex:Kp,beginnormal_vertex:Jp,bsdfs:jp,iridescence_fragment:Qp,bumpmap_pars_fragment:tm,clipping_planes_fragment:em,clipping_planes_pars_fragment:nm,clipping_planes_pars_vertex:im,clipping_planes_vertex:sm,color_fragment:rm,color_pars_fragment:om,color_pars_vertex:am,color_vertex:lm,common:cm,cube_uv_reflection_fragment:fm,defaultnormal_vertex:hm,displacementmap_pars_vertex:um,displacementmap_vertex:dm,emissivemap_fragment:pm,emissivemap_pars_fragment:mm,colorspace_fragment:gm,colorspace_pars_fragment:xm,envmap_fragment:ym,envmap_common_pars_fragment:_m,envmap_pars_fragment:bm,envmap_pars_vertex:vm,envmap_physical_pars_fragment:Lm,envmap_vertex:Mm,fog_vertex:Sm,fog_pars_vertex:Em,fog_fragment:wm,fog_pars_fragment:Tm,gradientmap_pars_fragment:Am,lightmap_pars_fragment:Rm,lights_lambert_fragment:Cm,lights_lambert_pars_fragment:Im,lights_pars_begin:Pm,lights_toon_fragment:Nm,lights_toon_pars_fragment:Om,lights_phong_fragment:Um,lights_phong_pars_fragment:Dm,lights_physical_fragment:km,lights_physical_pars_fragment:Fm,lights_fragment_begin:Bm,lights_fragment_maps:zm,lights_fragment_end:Hm,logdepthbuf_fragment:Gm,logdepthbuf_pars_fragment:Vm,logdepthbuf_pars_vertex:Wm,logdepthbuf_vertex:Xm,map_fragment:Ym,map_pars_fragment:$m,map_particle_fragment:qm,map_particle_pars_fragment:Zm,metalnessmap_fragment:Km,metalnessmap_pars_fragment:Jm,morphinstance_vertex:jm,morphcolor_vertex:Qm,morphnormal_vertex:t1,morphtarget_pars_vertex:e1,morphtarget_vertex:n1,normal_fragment_begin:i1,normal_fragment_maps:s1,normal_pars_fragment:r1,normal_pars_vertex:o1,normal_vertex:a1,normalmap_pars_fragment:l1,clearcoat_normal_fragment_begin:c1,clearcoat_normal_fragment_maps:f1,clearcoat_pars_fragment:h1,iridescence_pars_fragment:u1,opaque_fragment:d1,packing:p1,premultiplied_alpha_fragment:m1,project_vertex:g1,dithering_fragment:x1,dithering_pars_fragment:y1,roughnessmap_fragment:_1,roughnessmap_pars_fragment:b1,shadowmap_pars_fragment:v1,shadowmap_pars_vertex:M1,shadowmap_vertex:S1,shadowmask_pars_fragment:E1,skinbase_vertex:w1,skinning_pars_vertex:T1,skinning_vertex:A1,skinnormal_vertex:R1,specularmap_fragment:C1,specularmap_pars_fragment:I1,tonemapping_fragment:P1,tonemapping_pars_fragment:L1,transmission_fragment:N1,transmission_pars_fragment:O1,uv_pars_fragment:U1,uv_pars_vertex:D1,uv_vertex:k1,worldpos_vertex:F1,background_vert:B1,background_frag:z1,backgroundCube_vert:H1,backgroundCube_frag:G1,cube_vert:V1,cube_frag:W1,depth_vert:X1,depth_frag:Y1,distanceRGBA_vert:$1,distanceRGBA_frag:q1,equirect_vert:Z1,equirect_frag:K1,linedashed_vert:J1,linedashed_frag:j1,meshbasic_vert:Q1,meshbasic_frag:tg,meshlambert_vert:eg,meshlambert_frag:ng,meshmatcap_vert:ig,meshmatcap_frag:sg,meshnormal_vert:rg,meshnormal_frag:og,meshphong_vert:ag,meshphong_frag:lg,meshphysical_vert:cg,meshphysical_frag:fg,meshtoon_vert:hg,meshtoon_frag:ug,points_vert:dg,points_frag:pg,shadow_vert:mg,shadow_frag:gg,sprite_vert:xg,sprite_frag:yg},Dt={common:{diffuse:{value:new Jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ge},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ge}},envmap:{envMap:{value:null},envMapRotation:{value:new ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ge},normalScale:{value:new bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0},uvTransform:{value:new ge}},sprite:{diffuse:{value:new Jt(16777215)},opacity:{value:1},center:{value:new bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ge},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0}}},Ti={basic:{uniforms:On([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.fog]),vertexShader:Me.meshbasic_vert,fragmentShader:Me.meshbasic_frag},lambert:{uniforms:On([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new Jt(0)}}]),vertexShader:Me.meshlambert_vert,fragmentShader:Me.meshlambert_frag},phong:{uniforms:On([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new Jt(0)},specular:{value:new Jt(1118481)},shininess:{value:30}}]),vertexShader:Me.meshphong_vert,fragmentShader:Me.meshphong_frag},standard:{uniforms:On([Dt.common,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.roughnessmap,Dt.metalnessmap,Dt.fog,Dt.lights,{emissive:{value:new Jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Me.meshphysical_vert,fragmentShader:Me.meshphysical_frag},toon:{uniforms:On([Dt.common,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.gradientmap,Dt.fog,Dt.lights,{emissive:{value:new Jt(0)}}]),vertexShader:Me.meshtoon_vert,fragmentShader:Me.meshtoon_frag},matcap:{uniforms:On([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,{matcap:{value:null}}]),vertexShader:Me.meshmatcap_vert,fragmentShader:Me.meshmatcap_frag},points:{uniforms:On([Dt.points,Dt.fog]),vertexShader:Me.points_vert,fragmentShader:Me.points_frag},dashed:{uniforms:On([Dt.common,Dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Me.linedashed_vert,fragmentShader:Me.linedashed_frag},depth:{uniforms:On([Dt.common,Dt.displacementmap]),vertexShader:Me.depth_vert,fragmentShader:Me.depth_frag},normal:{uniforms:On([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,{opacity:{value:1}}]),vertexShader:Me.meshnormal_vert,fragmentShader:Me.meshnormal_frag},sprite:{uniforms:On([Dt.sprite,Dt.fog]),vertexShader:Me.sprite_vert,fragmentShader:Me.sprite_frag},background:{uniforms:{uvTransform:{value:new ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Me.background_vert,fragmentShader:Me.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ge}},vertexShader:Me.backgroundCube_vert,fragmentShader:Me.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Me.cube_vert,fragmentShader:Me.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Me.equirect_vert,fragmentShader:Me.equirect_frag},distanceRGBA:{uniforms:On([Dt.common,Dt.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Me.distanceRGBA_vert,fragmentShader:Me.distanceRGBA_frag},shadow:{uniforms:On([Dt.lights,Dt.fog,{color:{value:new Jt(0)},opacity:{value:1}}]),vertexShader:Me.shadow_vert,fragmentShader:Me.shadow_frag}};Ti.physical={uniforms:On([Ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ge},clearcoatNormalScale:{value:new bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ge},sheen:{value:0},sheenColor:{value:new Jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ge},transmissionSamplerSize:{value:new bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ge},attenuationDistance:{value:0},attenuationColor:{value:new Jt(0)},specularColor:{value:new Jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ge},anisotropyVector:{value:new bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ge}}]),vertexShader:Me.meshphysical_vert,fragmentShader:Me.meshphysical_frag};var ha={r:0,b:0,g:0},Ts=new yn,_g=new oe;function bg(n,t,e,i,s,r,o){let a=new Jt(0),l=r===!0?0:1,c,f,u=null,h=0,d=null;function p(_){let y=_.isScene===!0?_.background:null;return y&&y.isTexture&&(y=(_.backgroundBlurriness>0?e:t).get(y)),y}function x(_){let y=!1,b=p(_);b===null?m(a,l):b&&b.isColor&&(m(b,1),y=!0);let I=n.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(_,y){let b=p(y);b&&(b.isCubeTexture||b.mapping===cl)?(f===void 0&&(f=new Xt(new we(1,1,1),new Qn({name:"BackgroundCubeMaterial",uniforms:Tr(Ti.backgroundCube.uniforms),vertexShader:Ti.backgroundCube.vertexShader,fragmentShader:Ti.backgroundCube.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(I,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(f)),Ts.copy(y.backgroundRotation),Ts.x*=-1,Ts.y*=-1,Ts.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Ts.y*=-1,Ts.z*=-1),f.material.uniforms.envMap.value=b,f.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(_g.makeRotationFromEuler(Ts)),f.material.toneMapped=Pe.getTransfer(b.colorSpace)!==We,(u!==b||h!==b.version||d!==n.toneMapping)&&(f.material.needsUpdate=!0,u=b,h=b.version,d=n.toneMapping),f.layers.enableAll(),_.unshift(f,f.geometry,f.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new Xt(new Fe(2,2),new Qn({name:"BackgroundMaterial",uniforms:Tr(Ti.background.uniforms),vertexShader:Ti.background.vertexShader,fragmentShader:Ti.background.fragmentShader,side:ds,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=Pe.getTransfer(b.colorSpace)!==We,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||h!==b.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,u=b,h=b.version,d=n.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function m(_,y){_.getRGB(ha,ou(n)),i.buffers.color.setClear(ha.r,ha.g,ha.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(_,y=1){a.set(_),l=y,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,m(a,l)},render:x,addToRenderList:g}}function vg(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null),r=s,o=!1;function a(M,U,B,V,H){let rt=!1,$=u(V,B,U);r!==$&&(r=$,c(r.object)),rt=d(M,V,B,H),rt&&p(M,V,B,H),H!==null&&t.update(H,n.ELEMENT_ARRAY_BUFFER),(rt||o)&&(o=!1,b(M,U,B,V),H!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function f(M){return n.deleteVertexArray(M)}function u(M,U,B){let V=B.wireframe===!0,H=i[M.id];H===void 0&&(H={},i[M.id]=H);let rt=H[U.id];rt===void 0&&(rt={},H[U.id]=rt);let $=rt[V];return $===void 0&&($=h(l()),rt[V]=$),$}function h(M){let U=[],B=[],V=[];for(let H=0;H<e;H++)U[H]=0,B[H]=0,V[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:B,attributeDivisors:V,object:M,attributes:{},index:null}}function d(M,U,B,V){let H=r.attributes,rt=U.attributes,$=0,pt=B.getAttributes();for(let Q in pt)if(pt[Q].location>=0){let Lt=H[Q],Bt=rt[Q];if(Bt===void 0&&(Q==="instanceMatrix"&&M.instanceMatrix&&(Bt=M.instanceMatrix),Q==="instanceColor"&&M.instanceColor&&(Bt=M.instanceColor)),Lt===void 0||Lt.attribute!==Bt||Bt&&Lt.data!==Bt.data)return!0;$++}return r.attributesNum!==$||r.index!==V}function p(M,U,B,V){let H={},rt=U.attributes,$=0,pt=B.getAttributes();for(let Q in pt)if(pt[Q].location>=0){let Lt=rt[Q];Lt===void 0&&(Q==="instanceMatrix"&&M.instanceMatrix&&(Lt=M.instanceMatrix),Q==="instanceColor"&&M.instanceColor&&(Lt=M.instanceColor));let Bt={};Bt.attribute=Lt,Lt&&Lt.data&&(Bt.data=Lt.data),H[Q]=Bt,$++}r.attributes=H,r.attributesNum=$,r.index=V}function x(){let M=r.newAttributes;for(let U=0,B=M.length;U<B;U++)M[U]=0}function g(M){m(M,0)}function m(M,U){let B=r.newAttributes,V=r.enabledAttributes,H=r.attributeDivisors;B[M]=1,V[M]===0&&(n.enableVertexAttribArray(M),V[M]=1),H[M]!==U&&(n.vertexAttribDivisor(M,U),H[M]=U)}function _(){let M=r.newAttributes,U=r.enabledAttributes;for(let B=0,V=U.length;B<V;B++)U[B]!==M[B]&&(n.disableVertexAttribArray(B),U[B]=0)}function y(M,U,B,V,H,rt,$){$===!0?n.vertexAttribIPointer(M,U,B,H,rt):n.vertexAttribPointer(M,U,B,V,H,rt)}function b(M,U,B,V){x();let H=V.attributes,rt=B.getAttributes(),$=U.defaultAttributeValues;for(let pt in rt){let Q=rt[pt];if(Q.location>=0){let vt=H[pt];if(vt===void 0&&(pt==="instanceMatrix"&&M.instanceMatrix&&(vt=M.instanceMatrix),pt==="instanceColor"&&M.instanceColor&&(vt=M.instanceColor)),vt!==void 0){let Lt=vt.normalized,Bt=vt.itemSize,se=t.get(vt);if(se===void 0)continue;let be=se.buffer,ot=se.type,yt=se.bytesPerElement,Vt=ot===n.INT||ot===n.UNSIGNED_INT||vt.gpuType===k0;if(vt.isInterleavedBufferAttribute){let At=vt.data,ne=At.stride,le=vt.offset;if(At.isInstancedInterleavedBuffer){for(let ie=0;ie<Q.locationSize;ie++)m(Q.location+ie,At.meshPerAttribute);M.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=At.meshPerAttribute*At.count)}else for(let ie=0;ie<Q.locationSize;ie++)g(Q.location+ie);n.bindBuffer(n.ARRAY_BUFFER,be);for(let ie=0;ie<Q.locationSize;ie++)y(Q.location+ie,Bt/Q.locationSize,ot,Lt,ne*yt,(le+Bt/Q.locationSize*ie)*yt,Vt)}else{if(vt.isInstancedBufferAttribute){for(let At=0;At<Q.locationSize;At++)m(Q.location+At,vt.meshPerAttribute);M.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let At=0;At<Q.locationSize;At++)g(Q.location+At);n.bindBuffer(n.ARRAY_BUFFER,be);for(let At=0;At<Q.locationSize;At++)y(Q.location+At,Bt/Q.locationSize,ot,Lt,Bt*yt,Bt/Q.locationSize*At*yt,Vt)}}else if($!==void 0){let Lt=$[pt];if(Lt!==void 0)switch(Lt.length){case 2:n.vertexAttrib2fv(Q.location,Lt);break;case 3:n.vertexAttrib3fv(Q.location,Lt);break;case 4:n.vertexAttrib4fv(Q.location,Lt);break;default:n.vertexAttrib1fv(Q.location,Lt)}}}}_()}function I(){P();for(let M in i){let U=i[M];for(let B in U){let V=U[B];for(let H in V)f(V[H].object),delete V[H];delete U[B]}delete i[M]}}function A(M){if(i[M.id]===void 0)return;let U=i[M.id];for(let B in U){let V=U[B];for(let H in V)f(V[H].object),delete V[H];delete U[B]}delete i[M.id]}function T(M){for(let U in i){let B=i[U];if(B[M.id]===void 0)continue;let V=B[M.id];for(let H in V)f(V[H].object),delete V[H];delete B[M.id]}}function P(){E(),o=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:E,dispose:I,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:x,enableAttribute:g,disableUnusedAttributes:_}}function Mg(n,t,e){let i;function s(c){i=c}function r(c,f){n.drawArrays(i,c,f),e.update(f,i,1)}function o(c,f,u){u!==0&&(n.drawArraysInstanced(i,c,f,u),e.update(f,i,u))}function a(c,f,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,f,0,u);let d=0;for(let p=0;p<u;p++)d+=f[p];e.update(d,i,1)}function l(c,f,u,h){if(u===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<c.length;p++)o(c[p],f[p],h[p]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,f,0,h,0,u);let p=0;for(let x=0;x<u;x++)p+=f[x]*h[x];e.update(p,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Sg(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let T=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==xi&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){let P=T===Ao&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==Ki&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Ri&&!P)}function l(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",f=l(c);f!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);let u=e.logarithmicDepthBuffer===!0,h=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),_=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),I=p>0,A=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:h,maxTextures:d,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:_,maxVaryings:y,maxFragmentUniforms:b,vertexTextures:I,maxSamples:A}}function Eg(n){let t=this,e=null,i=0,s=!1,r=!1,o=new mi,a=new ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){let d=u.length!==0||h||i!==0||s;return s=h,i=u.length,d},this.beginShadows=function(){r=!0,f(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,h){e=f(u,h,0)},this.setState=function(u,h,d){let p=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,m=n.get(u);if(!s||p===null||p.length===0||r&&!g)r?f(null):c();else{let _=r?0:i,y=_*4,b=m.clippingState||null;l.value=b,b=f(p,h,y,d);for(let I=0;I!==y;++I)b[I]=e[I];m.clippingState=b,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function f(u,h,d,p){let x=u!==null?u.length:0,g=null;if(x!==0){if(g=l.value,p!==!0||g===null){let m=d+x*4,_=h.matrixWorldInverse;a.getNormalMatrix(_),(g===null||g.length<m)&&(g=new Float32Array(m));for(let y=0,b=d;y!==x;++y,b+=4)o.copy(u[y]).applyMatrix4(_,a),o.normal.toArray(g,b),g[b+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}function wg(n){let t=new WeakMap;function e(o,a){return a===xc?o.mapping=yr:a===yc&&(o.mapping=_r),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===xc||a===yc)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new jc(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}var Qc=class extends Ba{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},fr=4,nh=[.125,.215,.35,.446,.526,.582],Is=20,ql=new Qc,ih=new Jt,Zl=null,Kl=0,Jl=0,jl=!1,Rs=(1+Math.sqrt(5))/2,sr=1/Rs,sh=[new N(-Rs,sr,0),new N(Rs,sr,0),new N(-sr,0,Rs),new N(sr,0,Rs),new N(0,Rs,-sr),new N(0,Rs,sr),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)],Ar=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){Zl=this._renderer.getRenderTarget(),Kl=this._renderer.getActiveCubeFace(),Jl=this._renderer.getActiveMipmapLevel(),jl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ah(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=oh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Zl,Kl,Jl),this._renderer.xr.enabled=jl,t.scissorTest=!1,ua(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===yr||t.mapping===_r?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Zl=this._renderer.getRenderTarget(),Kl=this._renderer.getActiveCubeFace(),Jl=this._renderer.getActiveMipmapLevel(),jl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Ai,minFilter:Ai,generateMipmaps:!1,type:Ao,format:xi,colorSpace:Dr,depthBuffer:!1},s=rh(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rh(t,e,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Tg(r)),this._blurMaterial=Ag(r,t,e)}return s}_compileMaterial(t){let e=new Xt(this._lodPlanes[0],t);this._renderer.compile(e,ql)}_sceneToCubeUV(t,e,i,s){let a=new Mn(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,h=f.toneMapping;f.getClearColor(ih),f.toneMapping=us,f.autoClear=!1;let d=new _n({name:"PMREM.Background",side:gn,depthWrite:!1,depthTest:!1}),p=new Xt(new we,d),x=!1,g=t.background;g?g.isColor&&(d.color.copy(g),t.background=null,x=!0):(d.color.copy(ih),x=!0);for(let m=0;m<6;m++){let _=m%3;_===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):_===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));let y=this._cubeSize;ua(s,_*y,m>2?y:0,y,y),f.setRenderTarget(s),x&&f.render(p,a),f.render(t,a)}p.geometry.dispose(),p.material.dispose(),f.toneMapping=h,f.autoClear=u,t.background=g}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===yr||t.mapping===_r;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ah()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=oh());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Xt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;ua(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,ql)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=sh[(s-r-1)%sh.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let f=3,u=new Xt(this._lodPlanes[s],c),h=c.uniforms,d=this._sizeLods[i]-1,p=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Is-1),x=r/p,g=isFinite(r)?1+Math.floor(f*x):Is;g>Is&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Is}`);let m=[],_=0;for(let T=0;T<Is;++T){let P=T/x,E=Math.exp(-P*P/2);m.push(E),T===0?_+=E:T<g&&(_+=2*E)}for(let T=0;T<m.length;T++)m[T]=m[T]/_;h.envMap.value=t.texture,h.samples.value=g,h.weights.value=m,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);let{_lodMax:y}=this;h.dTheta.value=p,h.mipInt.value=y-i;let b=this._sizeLods[s],I=3*b*(s>y-fr?s-y+fr:0),A=4*(this._cubeSize-b);ua(e,I,A,3*b,2*b),l.setRenderTarget(e),l.render(u,ql)}};function Tg(n){let t=[],e=[],i=[],s=n,r=n-fr+1+nh.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>n-fr?l=nh[o-n+fr-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),f=-c,u=1+c,h=[f,f,u,f,u,u,f,f,u,u,f,u],d=6,p=6,x=3,g=2,m=1,_=new Float32Array(x*p*d),y=new Float32Array(g*p*d),b=new Float32Array(m*p*d);for(let A=0;A<d;A++){let T=A%3*2/3-1,P=A>2?0:-1,E=[T,P,0,T+2/3,P,0,T+2/3,P+1,0,T,P,0,T+2/3,P+1,0,T,P+1,0];_.set(E,x*p*A),y.set(h,g*p*A);let M=[A,A,A,A,A,A];b.set(M,m*p*A)}let I=new Ue;I.setAttribute("position",new Ze(_,x)),I.setAttribute("uv",new Ze(y,g)),I.setAttribute("faceIndex",new Ze(b,m)),t.push(I),s>fr&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function rh(n,t,e){let i=new Ji(n,t,e);return i.texture.mapping=cl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ua(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function Ag(n,t,e){let i=new Float32Array(Is),s=new N(0,1,0);return new Qn({name:"SphericalGaussianBlur",defines:{n:Is,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:X0(),fragmentShader:`

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
		`,blending:hs,depthTest:!1,depthWrite:!1})}function oh(){return new Qn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:X0(),fragmentShader:`

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
		`,blending:hs,depthTest:!1,depthWrite:!1})}function ah(){return new Qn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:X0(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hs,depthTest:!1,depthWrite:!1})}function X0(){return`

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
	`}function Rg(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===xc||l===yc,f=l===yr||l===_r;if(c||f){let u=t.get(a),h=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return e===null&&(e=new Ar(n)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let d=a.image;return c&&d&&d.height>0||f&&d&&s(d)?(e===null&&(e=new Ar(n)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0,c=6;for(let f=0;f<c;f++)a[f]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function Cg(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&ro("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Ig(n,t,e,i){let s={},r=new WeakMap;function o(u){let h=u.target;h.index!==null&&t.remove(h.index);for(let p in h.attributes)t.remove(h.attributes[p]);for(let p in h.morphAttributes){let x=h.morphAttributes[p];for(let g=0,m=x.length;g<m;g++)t.remove(x[g])}h.removeEventListener("dispose",o),delete s[h.id];let d=r.get(h);d&&(t.remove(d),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(u,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,e.memory.geometries++),h}function l(u){let h=u.attributes;for(let p in h)t.update(h[p],n.ARRAY_BUFFER);let d=u.morphAttributes;for(let p in d){let x=d[p];for(let g=0,m=x.length;g<m;g++)t.update(x[g],n.ARRAY_BUFFER)}}function c(u){let h=[],d=u.index,p=u.attributes.position,x=0;if(d!==null){let _=d.array;x=d.version;for(let y=0,b=_.length;y<b;y+=3){let I=_[y+0],A=_[y+1],T=_[y+2];h.push(I,A,A,T,T,I)}}else if(p!==void 0){let _=p.array;x=p.version;for(let y=0,b=_.length/3-1;y<b;y+=3){let I=y+0,A=y+1,T=y+2;h.push(I,A,A,T,T,I)}}else return;let g=new(su(h)?wr:Er)(h,1);g.version=x;let m=r.get(u);m&&t.remove(m),r.set(u,g)}function f(u){let h=r.get(u);if(h){let d=u.index;d!==null&&h.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:f}}function Pg(n,t,e){let i;function s(h){i=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function l(h,d){n.drawElements(i,d,r,h*o),e.update(d,i,1)}function c(h,d,p){p!==0&&(n.drawElementsInstanced(i,d,r,h*o,p),e.update(d,i,p))}function f(h,d,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,h,0,p);let g=0;for(let m=0;m<p;m++)g+=d[m];e.update(g,i,1)}function u(h,d,p,x){if(p===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<h.length;m++)c(h[m]/o,d[m],x[m]);else{g.multiDrawElementsInstancedWEBGL(i,d,0,r,h,0,x,0,p);let m=0;for(let _=0;_<p;_++)m+=d[_]*x[_];e.update(m,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=u}function Lg(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Ng(n,t,e){let i=new WeakMap,s=new ke;function r(o,a,l){let c=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=f!==void 0?f.length:0,h=i.get(a);if(h===void 0||h.count!==u){let E=function(){T.dispose(),i.delete(a),a.removeEventListener("dispose",E)};h!==void 0&&h.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],y=0;d===!0&&(y=1),p===!0&&(y=2),x===!0&&(y=3);let b=a.attributes.position.count*y,I=1;b>t.maxTextureSize&&(I=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);let A=new Float32Array(b*I*4*u),T=new Fa(A,b,I,u);T.type=Ri,T.needsUpdate=!0;let P=y*4;for(let M=0;M<u;M++){let U=g[M],B=m[M],V=_[M],H=b*I*4*M;for(let rt=0;rt<U.count;rt++){let $=rt*P;d===!0&&(s.fromBufferAttribute(U,rt),A[H+$+0]=s.x,A[H+$+1]=s.y,A[H+$+2]=s.z,A[H+$+3]=0),p===!0&&(s.fromBufferAttribute(B,rt),A[H+$+4]=s.x,A[H+$+5]=s.y,A[H+$+6]=s.z,A[H+$+7]=0),x===!0&&(s.fromBufferAttribute(V,rt),A[H+$+8]=s.x,A[H+$+9]=s.y,A[H+$+10]=s.z,A[H+$+11]=V.itemSize===4?s.w:1)}}h={count:u,texture:T,size:new bt(b,I)},i.set(a,h),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let p=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",p),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function Og(n,t,e,i){let s=new WeakMap;function r(l){let c=i.render.frame,f=l.geometry,u=t.get(l,f);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let h=l.skeleton;s.get(h)!==c&&(h.update(),s.set(h,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var Ha=class extends Hn{constructor(t,e,i,s,r,o,a,l,c,f=dr){if(f!==dr&&f!==vr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===dr&&(i=Ps),i===void 0&&f===vr&&(i=br),super(null,s,r,o,a,l,f,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:jn,this.minFilter=l!==void 0?l:jn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},lu=new Hn,lh=new Ha(1,1),cu=new Fa,fu=new Kc,hu=new za,ch=[],fh=[],hh=new Float32Array(16),uh=new Float32Array(9),dh=new Float32Array(4);function kr(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=ch[s];if(r===void 0&&(r=new Float32Array(s),ch[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function cn(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function fn(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function hl(n,t){let e=fh[t];e===void 0&&(e=new Int32Array(t),fh[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Ug(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Dg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(cn(e,t))return;n.uniform2fv(this.addr,t),fn(e,t)}}function kg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(cn(e,t))return;n.uniform3fv(this.addr,t),fn(e,t)}}function Fg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(cn(e,t))return;n.uniform4fv(this.addr,t),fn(e,t)}}function Bg(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(cn(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),fn(e,t)}else{if(cn(e,i))return;dh.set(i),n.uniformMatrix2fv(this.addr,!1,dh),fn(e,i)}}function zg(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(cn(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),fn(e,t)}else{if(cn(e,i))return;uh.set(i),n.uniformMatrix3fv(this.addr,!1,uh),fn(e,i)}}function Hg(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(cn(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),fn(e,t)}else{if(cn(e,i))return;hh.set(i),n.uniformMatrix4fv(this.addr,!1,hh),fn(e,i)}}function Gg(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Vg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(cn(e,t))return;n.uniform2iv(this.addr,t),fn(e,t)}}function Wg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(cn(e,t))return;n.uniform3iv(this.addr,t),fn(e,t)}}function Xg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(cn(e,t))return;n.uniform4iv(this.addr,t),fn(e,t)}}function Yg(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function $g(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(cn(e,t))return;n.uniform2uiv(this.addr,t),fn(e,t)}}function qg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(cn(e,t))return;n.uniform3uiv(this.addr,t),fn(e,t)}}function Zg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(cn(e,t))return;n.uniform4uiv(this.addr,t),fn(e,t)}}function Kg(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(lh.compareFunction=iu,r=lh):r=lu,e.setTexture2D(t||r,s)}function Jg(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||fu,s)}function jg(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||hu,s)}function Qg(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||cu,s)}function t2(n){switch(n){case 5126:return Ug;case 35664:return Dg;case 35665:return kg;case 35666:return Fg;case 35674:return Bg;case 35675:return zg;case 35676:return Hg;case 5124:case 35670:return Gg;case 35667:case 35671:return Vg;case 35668:case 35672:return Wg;case 35669:case 35673:return Xg;case 5125:return Yg;case 36294:return $g;case 36295:return qg;case 36296:return Zg;case 35678:case 36198:case 36298:case 36306:case 35682:return Kg;case 35679:case 36299:case 36307:return Jg;case 35680:case 36300:case 36308:case 36293:return jg;case 36289:case 36303:case 36311:case 36292:return Qg}}function e2(n,t){n.uniform1fv(this.addr,t)}function n2(n,t){let e=kr(t,this.size,2);n.uniform2fv(this.addr,e)}function i2(n,t){let e=kr(t,this.size,3);n.uniform3fv(this.addr,e)}function s2(n,t){let e=kr(t,this.size,4);n.uniform4fv(this.addr,e)}function r2(n,t){let e=kr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function o2(n,t){let e=kr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function a2(n,t){let e=kr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function l2(n,t){n.uniform1iv(this.addr,t)}function c2(n,t){n.uniform2iv(this.addr,t)}function f2(n,t){n.uniform3iv(this.addr,t)}function h2(n,t){n.uniform4iv(this.addr,t)}function u2(n,t){n.uniform1uiv(this.addr,t)}function d2(n,t){n.uniform2uiv(this.addr,t)}function p2(n,t){n.uniform3uiv(this.addr,t)}function m2(n,t){n.uniform4uiv(this.addr,t)}function g2(n,t,e){let i=this.cache,s=t.length,r=hl(e,s);cn(i,r)||(n.uniform1iv(this.addr,r),fn(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||lu,r[o])}function x2(n,t,e){let i=this.cache,s=t.length,r=hl(e,s);cn(i,r)||(n.uniform1iv(this.addr,r),fn(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||fu,r[o])}function y2(n,t,e){let i=this.cache,s=t.length,r=hl(e,s);cn(i,r)||(n.uniform1iv(this.addr,r),fn(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||hu,r[o])}function _2(n,t,e){let i=this.cache,s=t.length,r=hl(e,s);cn(i,r)||(n.uniform1iv(this.addr,r),fn(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||cu,r[o])}function b2(n){switch(n){case 5126:return e2;case 35664:return n2;case 35665:return i2;case 35666:return s2;case 35674:return r2;case 35675:return o2;case 35676:return a2;case 5124:case 35670:return l2;case 35667:case 35671:return c2;case 35668:case 35672:return f2;case 35669:case 35673:return h2;case 5125:return u2;case 36294:return d2;case 36295:return p2;case 36296:return m2;case 35678:case 36198:case 36298:case 36306:case 35682:return g2;case 35679:case 36299:case 36307:return x2;case 35680:case 36300:case 36308:case 36293:return y2;case 36289:case 36303:case 36311:case 36292:return _2}}var t0=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=t2(e.type)}},e0=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=b2(e.type)}},n0=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},Ql=/(\w+)(\])?(\[|\.)?/g;function ph(n,t){n.seq.push(t),n.map[t.id]=t}function v2(n,t,e){let i=n.name,s=i.length;for(Ql.lastIndex=0;;){let r=Ql.exec(i),o=Ql.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){ph(e,c===void 0?new t0(a,n,t):new e0(a,n,t));break}else{let u=e.map[a];u===void 0&&(u=new n0(a),ph(e,u)),e=u}}}var gr=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);v2(r,o,this)}}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function mh(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var M2=37297,S2=0;function E2(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var gh=new ge;function w2(n){Pe._getMatrix(gh,Pe.workingColorSpace,n);let t=`mat3( ${gh.elements.map(e=>e.toFixed(4))} )`;switch(Pe.getTransfer(n)){case fl:return[t,"LinearTransferOETF"];case We:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function xh(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+E2(n.getShaderSource(t),o)}else return s}function T2(n,t){let e=w2(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function A2(n,t){let e;switch(t){case Fd:e="Linear";break;case Bd:e="Reinhard";break;case zd:e="Cineon";break;case D0:e="ACESFilmic";break;case Gd:e="AgX";break;case Vd:e="Neutral";break;case Hd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var da=new N;function R2(){Pe.getLuminanceCoefficients(da);let n=da.x.toFixed(4),t=da.y.toFixed(4),e=da.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function C2(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(oo).join(`
`)}function I2(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function P2(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function oo(n){return n!==""}function yh(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function _h(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var L2=/^[ \t]*#include +<([\w\d./]+)>/gm;function i0(n){return n.replace(L2,O2)}var N2=new Map;function O2(n,t){let e=Me[t];if(e===void 0){let i=N2.get(t);if(i!==void 0)e=Me[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return i0(e)}var U2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bh(n){return n.replace(U2,D2)}function D2(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function vh(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function k2(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===ll?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===U0?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Gi&&(t="SHADOWMAP_TYPE_VSM"),t}function F2(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case yr:case _r:t="ENVMAP_TYPE_CUBE";break;case cl:t="ENVMAP_TYPE_CUBE_UV";break}return t}function B2(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case _r:t="ENVMAP_MODE_REFRACTION";break}return t}function z2(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Xh:t="ENVMAP_BLENDING_MULTIPLY";break;case Dd:t="ENVMAP_BLENDING_MIX";break;case kd:t="ENVMAP_BLENDING_ADD";break}return t}function H2(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function G2(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=k2(e),c=F2(e),f=B2(e),u=z2(e),h=H2(e),d=C2(e),p=I2(r),x=s.createProgram(),g,m,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(oo).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(oo).join(`
`),m.length>0&&(m+=`
`)):(g=[vh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(oo).join(`
`),m=[vh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+f:"",e.envMap?"#define "+u:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==us?"#define TONE_MAPPING":"",e.toneMapping!==us?Me.tonemapping_pars_fragment:"",e.toneMapping!==us?A2("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Me.colorspace_pars_fragment,T2("linearToOutputTexel",e.outputColorSpace),R2(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(oo).join(`
`)),o=i0(o),o=yh(o,e),o=_h(o,e),a=i0(a),a=yh(a,e),a=_h(a,e),o=bh(o),a=bh(a),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===Of?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Of?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let y=_+g+o,b=_+m+a,I=mh(s,s.VERTEX_SHADER,y),A=mh(s,s.FRAGMENT_SHADER,b);s.attachShader(x,I),s.attachShader(x,A),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function T(U){if(n.debug.checkShaderErrors){let B=s.getProgramInfoLog(x).trim(),V=s.getShaderInfoLog(I).trim(),H=s.getShaderInfoLog(A).trim(),rt=!0,$=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(rt=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,I,A);else{let pt=xh(s,I,"vertex"),Q=xh(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+B+`
`+pt+`
`+Q)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(V===""||H==="")&&($=!1);$&&(U.diagnostics={runnable:rt,programLog:B,vertexShader:{log:V,prefix:g},fragmentShader:{log:H,prefix:m}})}s.deleteShader(I),s.deleteShader(A),P=new gr(s,x),E=P2(s,x)}let P;this.getUniforms=function(){return P===void 0&&T(this),P};let E;this.getAttributes=function(){return E===void 0&&T(this),E};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(x,M2)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=S2++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=I,this.fragmentShader=A,this}var V2=0,s0=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new r0(t),e.set(t,i)),i}},r0=class{constructor(t){this.id=V2++,this.code=t,this.usedTimes=0}};function W2(n,t,e,i,s,r,o){let a=new po,l=new s0,c=new Set,f=[],u=s.logarithmicDepthBuffer,h=s.vertexTextures,d=s.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(E){return c.add(E),E===0?"uv":`uv${E}`}function g(E,M,U,B,V){let H=B.fog,rt=V.geometry,$=E.isMeshStandardMaterial?B.environment:null,pt=(E.isMeshStandardMaterial?e:t).get(E.envMap||$),Q=pt&&pt.mapping===cl?pt.image.height:null,vt=p[E.type];E.precision!==null&&(d=s.getMaxPrecision(E.precision),d!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",d,"instead."));let Lt=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,Bt=Lt!==void 0?Lt.length:0,se=0;rt.morphAttributes.position!==void 0&&(se=1),rt.morphAttributes.normal!==void 0&&(se=2),rt.morphAttributes.color!==void 0&&(se=3);let be,ot,yt,Vt;if(vt){let ue=Ti[vt];be=ue.vertexShader,ot=ue.fragmentShader}else be=E.vertexShader,ot=E.fragmentShader,l.update(E),yt=l.getVertexShaderID(E),Vt=l.getFragmentShaderID(E);let At=n.getRenderTarget(),ne=n.state.buffers.depth.getReversed(),le=V.isInstancedMesh===!0,ie=V.isBatchedMesh===!0,Se=!!E.map,ht=!!E.matcap,W=!!pt,L=!!E.aoMap,X=!!E.lightMap,J=!!E.bumpMap,tt=!!E.normalMap,at=!!E.displacementMap,Et=!!E.emissiveMap,gt=!!E.metalnessMap,C=!!E.roughnessMap,S=E.anisotropy>0,D=E.clearcoat>0,et=E.dispersion>0,dt=E.iridescence>0,lt=E.sheen>0,Wt=E.transmission>0,Ot=S&&!!E.anisotropyMap,Ht=D&&!!E.clearcoatMap,pe=D&&!!E.clearcoatNormalMap,Mt=D&&!!E.clearcoatRoughnessMap,Pt=dt&&!!E.iridescenceMap,jt=dt&&!!E.iridescenceThicknessMap,fe=lt&&!!E.sheenColorMap,zt=lt&&!!E.sheenRoughnessMap,ve=!!E.specularMap,$t=!!E.specularColorMap,Ne=!!E.specularIntensityMap,k=Wt&&!!E.transmissionMap,Nt=Wt&&!!E.thicknessMap,st=!!E.gradientMap,ct=!!E.alphaMap,It=E.alphaTest>0,Ut=!!E.alphaHash,ce=!!E.extensions,Ve=us;E.toneMapped&&(At===null||At.isXRRenderTarget===!0)&&(Ve=n.toneMapping);let Xe={shaderID:vt,shaderType:E.type,shaderName:E.name,vertexShader:be,fragmentShader:ot,defines:E.defines,customVertexShaderID:yt,customFragmentShaderID:Vt,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:d,batching:ie,batchingColor:ie&&V._colorsTexture!==null,instancing:le,instancingColor:le&&V.instanceColor!==null,instancingMorph:le&&V.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:At===null?n.outputColorSpace:At.isXRRenderTarget===!0?At.texture.colorSpace:Dr,alphaToCoverage:!!E.alphaToCoverage,map:Se,matcap:ht,envMap:W,envMapMode:W&&pt.mapping,envMapCubeUVHeight:Q,aoMap:L,lightMap:X,bumpMap:J,normalMap:tt,displacementMap:h&&at,emissiveMap:Et,normalMapObjectSpace:tt&&E.normalMapType===$d,normalMapTangentSpace:tt&&E.normalMapType===nu,metalnessMap:gt,roughnessMap:C,anisotropy:S,anisotropyMap:Ot,clearcoat:D,clearcoatMap:Ht,clearcoatNormalMap:pe,clearcoatRoughnessMap:Mt,dispersion:et,iridescence:dt,iridescenceMap:Pt,iridescenceThicknessMap:jt,sheen:lt,sheenColorMap:fe,sheenRoughnessMap:zt,specularMap:ve,specularColorMap:$t,specularIntensityMap:Ne,transmission:Wt,transmissionMap:k,thicknessMap:Nt,gradientMap:st,opaque:E.transparent===!1&&E.blending===ur&&E.alphaToCoverage===!1,alphaMap:ct,alphaTest:It,alphaHash:Ut,combine:E.combine,mapUv:Se&&x(E.map.channel),aoMapUv:L&&x(E.aoMap.channel),lightMapUv:X&&x(E.lightMap.channel),bumpMapUv:J&&x(E.bumpMap.channel),normalMapUv:tt&&x(E.normalMap.channel),displacementMapUv:at&&x(E.displacementMap.channel),emissiveMapUv:Et&&x(E.emissiveMap.channel),metalnessMapUv:gt&&x(E.metalnessMap.channel),roughnessMapUv:C&&x(E.roughnessMap.channel),anisotropyMapUv:Ot&&x(E.anisotropyMap.channel),clearcoatMapUv:Ht&&x(E.clearcoatMap.channel),clearcoatNormalMapUv:pe&&x(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Mt&&x(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Pt&&x(E.iridescenceMap.channel),iridescenceThicknessMapUv:jt&&x(E.iridescenceThicknessMap.channel),sheenColorMapUv:fe&&x(E.sheenColorMap.channel),sheenRoughnessMapUv:zt&&x(E.sheenRoughnessMap.channel),specularMapUv:ve&&x(E.specularMap.channel),specularColorMapUv:$t&&x(E.specularColorMap.channel),specularIntensityMapUv:Ne&&x(E.specularIntensityMap.channel),transmissionMapUv:k&&x(E.transmissionMap.channel),thicknessMapUv:Nt&&x(E.thicknessMap.channel),alphaMapUv:ct&&x(E.alphaMap.channel),vertexTangents:!!rt.attributes.tangent&&(tt||S),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!rt.attributes.uv&&(Se||ct),fog:!!H,useFog:E.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:ne,skinning:V.isSkinnedMesh===!0,morphTargets:rt.morphAttributes.position!==void 0,morphNormals:rt.morphAttributes.normal!==void 0,morphColors:rt.morphAttributes.color!==void 0,morphTargetsCount:Bt,morphTextureStride:se,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&U.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ve,decodeVideoTexture:Se&&E.map.isVideoTexture===!0&&Pe.getTransfer(E.map.colorSpace)===We,decodeVideoTextureEmissive:Et&&E.emissiveMap.isVideoTexture===!0&&Pe.getTransfer(E.emissiveMap.colorSpace)===We,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Le,flipSided:E.side===gn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:ce&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ce&&E.extensions.multiDraw===!0||ie)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Xe.vertexUv1s=c.has(1),Xe.vertexUv2s=c.has(2),Xe.vertexUv3s=c.has(3),c.clear(),Xe}function m(E){let M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(let U in E.defines)M.push(U),M.push(E.defines[U]);return E.isRawShaderMaterial===!1&&(_(M,E),y(M,E),M.push(n.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function _(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function y(E,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),E.push(a.mask)}function b(E){let M=p[E.type],U;if(M){let B=Ti[M];U=Op.clone(B.uniforms)}else U=E.uniforms;return U}function I(E,M){let U;for(let B=0,V=f.length;B<V;B++){let H=f[B];if(H.cacheKey===M){U=H,++U.usedTimes;break}}return U===void 0&&(U=new G2(n,M,E,r),f.push(U)),U}function A(E){if(--E.usedTimes===0){let M=f.indexOf(E);f[M]=f[f.length-1],f.pop(),E.destroy()}}function T(E){l.remove(E)}function P(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:b,acquireProgram:I,releaseProgram:A,releaseShaderCache:T,programs:f,dispose:P}}function X2(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function Y2(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Mh(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Sh(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(u,h,d,p,x,g){let m=n[t];return m===void 0?(m={id:u.id,object:u,geometry:h,material:d,groupOrder:p,renderOrder:u.renderOrder,z:x,group:g},n[t]=m):(m.id=u.id,m.object=u,m.geometry=h,m.material=d,m.groupOrder=p,m.renderOrder=u.renderOrder,m.z=x,m.group=g),t++,m}function a(u,h,d,p,x,g){let m=o(u,h,d,p,x,g);d.transmission>0?i.push(m):d.transparent===!0?s.push(m):e.push(m)}function l(u,h,d,p,x,g){let m=o(u,h,d,p,x,g);d.transmission>0?i.unshift(m):d.transparent===!0?s.unshift(m):e.unshift(m)}function c(u,h){e.length>1&&e.sort(u||Y2),i.length>1&&i.sort(h||Mh),s.length>1&&s.sort(h||Mh)}function f(){for(let u=t,h=n.length;u<h;u++){let d=n[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:f,sort:c}}function $2(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new Sh,n.set(i,[o])):s>=r.length?(o=new Sh,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function q2(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new Jt};break;case"SpotLight":e={position:new N,direction:new N,color:new Jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new Jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new Jt,groundColor:new Jt};break;case"RectAreaLight":e={color:new Jt,position:new N,halfWidth:new N,halfHeight:new N};break}return n[t.id]=e,e}}}function Z2(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var K2=0;function J2(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function j2(n){let t=new q2,e=Z2(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new N);let s=new N,r=new oe,o=new oe;function a(c){let f=0,u=0,h=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let d=0,p=0,x=0,g=0,m=0,_=0,y=0,b=0,I=0,A=0,T=0;c.sort(J2);for(let E=0,M=c.length;E<M;E++){let U=c[E],B=U.color,V=U.intensity,H=U.distance,rt=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)f+=B.r*V,u+=B.g*V,h+=B.b*V;else if(U.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(U.sh.coefficients[$],V);T++}else if(U.isDirectionalLight){let $=t.get(U);if($.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let pt=U.shadow,Q=e.get(U);Q.shadowIntensity=pt.intensity,Q.shadowBias=pt.bias,Q.shadowNormalBias=pt.normalBias,Q.shadowRadius=pt.radius,Q.shadowMapSize=pt.mapSize,i.directionalShadow[d]=Q,i.directionalShadowMap[d]=rt,i.directionalShadowMatrix[d]=U.shadow.matrix,_++}i.directional[d]=$,d++}else if(U.isSpotLight){let $=t.get(U);$.position.setFromMatrixPosition(U.matrixWorld),$.color.copy(B).multiplyScalar(V),$.distance=H,$.coneCos=Math.cos(U.angle),$.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),$.decay=U.decay,i.spot[x]=$;let pt=U.shadow;if(U.map&&(i.spotLightMap[I]=U.map,I++,pt.updateMatrices(U),U.castShadow&&A++),i.spotLightMatrix[x]=pt.matrix,U.castShadow){let Q=e.get(U);Q.shadowIntensity=pt.intensity,Q.shadowBias=pt.bias,Q.shadowNormalBias=pt.normalBias,Q.shadowRadius=pt.radius,Q.shadowMapSize=pt.mapSize,i.spotShadow[x]=Q,i.spotShadowMap[x]=rt,b++}x++}else if(U.isRectAreaLight){let $=t.get(U);$.color.copy(B).multiplyScalar(V),$.halfWidth.set(U.width*.5,0,0),$.halfHeight.set(0,U.height*.5,0),i.rectArea[g]=$,g++}else if(U.isPointLight){let $=t.get(U);if($.color.copy(U.color).multiplyScalar(U.intensity),$.distance=U.distance,$.decay=U.decay,U.castShadow){let pt=U.shadow,Q=e.get(U);Q.shadowIntensity=pt.intensity,Q.shadowBias=pt.bias,Q.shadowNormalBias=pt.normalBias,Q.shadowRadius=pt.radius,Q.shadowMapSize=pt.mapSize,Q.shadowCameraNear=pt.camera.near,Q.shadowCameraFar=pt.camera.far,i.pointShadow[p]=Q,i.pointShadowMap[p]=rt,i.pointShadowMatrix[p]=U.shadow.matrix,y++}i.point[p]=$,p++}else if(U.isHemisphereLight){let $=t.get(U);$.skyColor.copy(U.color).multiplyScalar(V),$.groundColor.copy(U.groundColor).multiplyScalar(V),i.hemi[m]=$,m++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Dt.LTC_FLOAT_1,i.rectAreaLTC2=Dt.LTC_FLOAT_2):(i.rectAreaLTC1=Dt.LTC_HALF_1,i.rectAreaLTC2=Dt.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=u,i.ambient[2]=h;let P=i.hash;(P.directionalLength!==d||P.pointLength!==p||P.spotLength!==x||P.rectAreaLength!==g||P.hemiLength!==m||P.numDirectionalShadows!==_||P.numPointShadows!==y||P.numSpotShadows!==b||P.numSpotMaps!==I||P.numLightProbes!==T)&&(i.directional.length=d,i.spot.length=x,i.rectArea.length=g,i.point.length=p,i.hemi.length=m,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=b+I-A,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=T,P.directionalLength=d,P.pointLength=p,P.spotLength=x,P.rectAreaLength=g,P.hemiLength=m,P.numDirectionalShadows=_,P.numPointShadows=y,P.numSpotShadows=b,P.numSpotMaps=I,P.numLightProbes=T,i.version=K2++)}function l(c,f){let u=0,h=0,d=0,p=0,x=0,g=f.matrixWorldInverse;for(let m=0,_=c.length;m<_;m++){let y=c[m];if(y.isDirectionalLight){let b=i.directional[u];b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(g),u++}else if(y.isSpotLight){let b=i.spot[d];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(g),b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(g),d++}else if(y.isRectAreaLight){let b=i.rectArea[p];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(g),o.identity(),r.copy(y.matrixWorld),r.premultiply(g),o.extractRotation(r),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),p++}else if(y.isPointLight){let b=i.point[h];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(g),h++}else if(y.isHemisphereLight){let b=i.hemi[x];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(g),x++}}}return{setup:a,setupView:l,state:i}}function Eh(n){let t=new j2(n),e=[],i=[];function s(f){c.camera=f,e.length=0,i.length=0}function r(f){e.push(f)}function o(f){i.push(f)}function a(){t.setup(e)}function l(f){t.setupView(e,f)}let c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Q2(n){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Eh(n),t.set(s,[a])):r>=o.length?(a=new Eh(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var o0=class extends Ii{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Xd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},a0=class extends Ii{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},tx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ex=`uniform sampler2D shadow_pass;
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
}`;function nx(n,t,e){let i=new mo,s=new bt,r=new bt,o=new ke,a=new o0({depthPacking:Yd}),l=new a0,c={},f=e.maxTextureSize,u={[ds]:gn,[gn]:ds,[Le]:Le},h=new Qn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new bt},radius:{value:4}},vertexShader:tx,fragmentShader:ex}),d=h.clone();d.defines.HORIZONTAL_PASS=1;let p=new Ue;p.setAttribute("position",new Ze(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Xt(p,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ll;let m=this.type;this.render=function(A,T,P){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;let E=n.getRenderTarget(),M=n.getActiveCubeFace(),U=n.getActiveMipmapLevel(),B=n.state;B.setBlending(hs),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let V=m!==Gi&&this.type===Gi,H=m===Gi&&this.type!==Gi;for(let rt=0,$=A.length;rt<$;rt++){let pt=A[rt],Q=pt.shadow;if(Q===void 0){console.warn("THREE.WebGLShadowMap:",pt,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;s.copy(Q.mapSize);let vt=Q.getFrameExtents();if(s.multiply(vt),r.copy(Q.mapSize),(s.x>f||s.y>f)&&(s.x>f&&(r.x=Math.floor(f/vt.x),s.x=r.x*vt.x,Q.mapSize.x=r.x),s.y>f&&(r.y=Math.floor(f/vt.y),s.y=r.y*vt.y,Q.mapSize.y=r.y)),Q.map===null||V===!0||H===!0){let Bt=this.type!==Gi?{minFilter:jn,magFilter:jn}:{};Q.map!==null&&Q.map.dispose(),Q.map=new Ji(s.x,s.y,Bt),Q.map.texture.name=pt.name+".shadowMap",Q.camera.updateProjectionMatrix()}n.setRenderTarget(Q.map),n.clear();let Lt=Q.getViewportCount();for(let Bt=0;Bt<Lt;Bt++){let se=Q.getViewport(Bt);o.set(r.x*se.x,r.y*se.y,r.x*se.z,r.y*se.w),B.viewport(o),Q.updateMatrices(pt,Bt),i=Q.getFrustum(),b(T,P,Q.camera,pt,this.type)}Q.isPointLightShadow!==!0&&this.type===Gi&&_(Q,P),Q.needsUpdate=!1}m=this.type,g.needsUpdate=!1,n.setRenderTarget(E,M,U)};function _(A,T){let P=t.update(x);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Ji(s.x,s.y)),h.uniforms.shadow_pass.value=A.map.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(T,null,P,h,x,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(T,null,P,d,x,null)}function y(A,T,P,E){let M=null,U=P.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(U!==void 0)M=U;else if(M=P.isPointLight===!0?l:a,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let B=M.uuid,V=T.uuid,H=c[B];H===void 0&&(H={},c[B]=H);let rt=H[V];rt===void 0&&(rt=M.clone(),H[V]=rt,T.addEventListener("dispose",I)),M=rt}if(M.visible=T.visible,M.wireframe=T.wireframe,E===Gi?M.side=T.shadowSide!==null?T.shadowSide:T.side:M.side=T.shadowSide!==null?T.shadowSide:u[T.side],M.alphaMap=T.alphaMap,M.alphaTest=T.alphaTest,M.map=T.map,M.clipShadows=T.clipShadows,M.clippingPlanes=T.clippingPlanes,M.clipIntersection=T.clipIntersection,M.displacementMap=T.displacementMap,M.displacementScale=T.displacementScale,M.displacementBias=T.displacementBias,M.wireframeLinewidth=T.wireframeLinewidth,M.linewidth=T.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let B=n.properties.get(M);B.light=P}return M}function b(A,T,P,E,M){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===Gi)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,A.matrixWorld);let V=t.update(A),H=A.material;if(Array.isArray(H)){let rt=V.groups;for(let $=0,pt=rt.length;$<pt;$++){let Q=rt[$],vt=H[Q.materialIndex];if(vt&&vt.visible){let Lt=y(A,vt,E,M);A.onBeforeShadow(n,A,T,P,V,Lt,Q),n.renderBufferDirect(P,null,V,Lt,A,Q),A.onAfterShadow(n,A,T,P,V,Lt,Q)}}}else if(H.visible){let rt=y(A,H,E,M);A.onBeforeShadow(n,A,T,P,V,rt,null),n.renderBufferDirect(P,null,V,rt,A,null),A.onAfterShadow(n,A,T,P,V,rt,null)}}let B=A.children;for(let V=0,H=B.length;V<H;V++)b(B[V],T,P,E,M)}function I(A){A.target.removeEventListener("dispose",I);for(let P in c){let E=c[P],M=A.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}var ix={[fc]:hc,[uc]:mc,[dc]:gc,[xr]:pc,[hc]:fc,[mc]:uc,[gc]:dc,[pc]:xr};function sx(n,t){function e(){let k=!1,Nt=new ke,st=null,ct=new ke(0,0,0,0);return{setMask:function(It){st!==It&&!k&&(n.colorMask(It,It,It,It),st=It)},setLocked:function(It){k=It},setClear:function(It,Ut,ce,Ve,Xe){Xe===!0&&(It*=Ve,Ut*=Ve,ce*=Ve),Nt.set(It,Ut,ce,Ve),ct.equals(Nt)===!1&&(n.clearColor(It,Ut,ce,Ve),ct.copy(Nt))},reset:function(){k=!1,st=null,ct.set(-1,0,0,0)}}}function i(){let k=!1,Nt=!1,st=null,ct=null,It=null;return{setReversed:function(Ut){if(Nt!==Ut){let ce=t.get("EXT_clip_control");Nt?ce.clipControlEXT(ce.LOWER_LEFT_EXT,ce.ZERO_TO_ONE_EXT):ce.clipControlEXT(ce.LOWER_LEFT_EXT,ce.NEGATIVE_ONE_TO_ONE_EXT);let Ve=It;It=null,this.setClear(Ve)}Nt=Ut},getReversed:function(){return Nt},setTest:function(Ut){Ut?At(n.DEPTH_TEST):ne(n.DEPTH_TEST)},setMask:function(Ut){st!==Ut&&!k&&(n.depthMask(Ut),st=Ut)},setFunc:function(Ut){if(Nt&&(Ut=ix[Ut]),ct!==Ut){switch(Ut){case fc:n.depthFunc(n.NEVER);break;case hc:n.depthFunc(n.ALWAYS);break;case uc:n.depthFunc(n.LESS);break;case xr:n.depthFunc(n.LEQUAL);break;case dc:n.depthFunc(n.EQUAL);break;case pc:n.depthFunc(n.GEQUAL);break;case mc:n.depthFunc(n.GREATER);break;case gc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ct=Ut}},setLocked:function(Ut){k=Ut},setClear:function(Ut){It!==Ut&&(Nt&&(Ut=1-Ut),n.clearDepth(Ut),It=Ut)},reset:function(){k=!1,st=null,ct=null,It=null,Nt=!1}}}function s(){let k=!1,Nt=null,st=null,ct=null,It=null,Ut=null,ce=null,Ve=null,Xe=null;return{setTest:function(ue){k||(ue?At(n.STENCIL_TEST):ne(n.STENCIL_TEST))},setMask:function(ue){Nt!==ue&&!k&&(n.stencilMask(ue),Nt=ue)},setFunc:function(ue,En,$n){(st!==ue||ct!==En||It!==$n)&&(n.stencilFunc(ue,En,$n),st=ue,ct=En,It=$n)},setOp:function(ue,En,$n){(Ut!==ue||ce!==En||Ve!==$n)&&(n.stencilOp(ue,En,$n),Ut=ue,ce=En,Ve=$n)},setLocked:function(ue){k=ue},setClear:function(ue){Xe!==ue&&(n.clearStencil(ue),Xe=ue)},reset:function(){k=!1,Nt=null,st=null,ct=null,It=null,Ut=null,ce=null,Ve=null,Xe=null}}}let r=new e,o=new i,a=new s,l=new WeakMap,c=new WeakMap,f={},u={},h=new WeakMap,d=[],p=null,x=!1,g=null,m=null,_=null,y=null,b=null,I=null,A=null,T=new Jt(0,0,0),P=0,E=!1,M=null,U=null,B=null,V=null,H=null,rt=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),$=!1,pt=0,Q=n.getParameter(n.VERSION);Q.indexOf("WebGL")!==-1?(pt=parseFloat(/^WebGL (\d)/.exec(Q)[1]),$=pt>=1):Q.indexOf("OpenGL ES")!==-1&&(pt=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),$=pt>=2);let vt=null,Lt={},Bt=n.getParameter(n.SCISSOR_BOX),se=n.getParameter(n.VIEWPORT),be=new ke().fromArray(Bt),ot=new ke().fromArray(se);function yt(k,Nt,st,ct){let It=new Uint8Array(4),Ut=n.createTexture();n.bindTexture(k,Ut),n.texParameteri(k,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(k,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ce=0;ce<st;ce++)k===n.TEXTURE_3D||k===n.TEXTURE_2D_ARRAY?n.texImage3D(Nt,0,n.RGBA,1,1,ct,0,n.RGBA,n.UNSIGNED_BYTE,It):n.texImage2D(Nt+ce,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,It);return Ut}let Vt={};Vt[n.TEXTURE_2D]=yt(n.TEXTURE_2D,n.TEXTURE_2D,1),Vt[n.TEXTURE_CUBE_MAP]=yt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Vt[n.TEXTURE_2D_ARRAY]=yt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Vt[n.TEXTURE_3D]=yt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),At(n.DEPTH_TEST),o.setFunc(xr),J(!1),tt(Af),At(n.CULL_FACE),L(hs);function At(k){f[k]!==!0&&(n.enable(k),f[k]=!0)}function ne(k){f[k]!==!1&&(n.disable(k),f[k]=!1)}function le(k,Nt){return u[k]!==Nt?(n.bindFramebuffer(k,Nt),u[k]=Nt,k===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=Nt),k===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=Nt),!0):!1}function ie(k,Nt){let st=d,ct=!1;if(k){st=h.get(Nt),st===void 0&&(st=[],h.set(Nt,st));let It=k.textures;if(st.length!==It.length||st[0]!==n.COLOR_ATTACHMENT0){for(let Ut=0,ce=It.length;Ut<ce;Ut++)st[Ut]=n.COLOR_ATTACHMENT0+Ut;st.length=It.length,ct=!0}}else st[0]!==n.BACK&&(st[0]=n.BACK,ct=!0);ct&&n.drawBuffers(st)}function Se(k){return p!==k?(n.useProgram(k),p=k,!0):!1}let ht={[Cs]:n.FUNC_ADD,[_d]:n.FUNC_SUBTRACT,[bd]:n.FUNC_REVERSE_SUBTRACT};ht[vd]=n.MIN,ht[Md]=n.MAX;let W={[Sd]:n.ZERO,[Ed]:n.ONE,[wd]:n.SRC_COLOR,[lc]:n.SRC_ALPHA,[Pd]:n.SRC_ALPHA_SATURATE,[Cd]:n.DST_COLOR,[Ad]:n.DST_ALPHA,[Td]:n.ONE_MINUS_SRC_COLOR,[cc]:n.ONE_MINUS_SRC_ALPHA,[Id]:n.ONE_MINUS_DST_COLOR,[Rd]:n.ONE_MINUS_DST_ALPHA,[Ld]:n.CONSTANT_COLOR,[Nd]:n.ONE_MINUS_CONSTANT_COLOR,[Od]:n.CONSTANT_ALPHA,[Ud]:n.ONE_MINUS_CONSTANT_ALPHA};function L(k,Nt,st,ct,It,Ut,ce,Ve,Xe,ue){if(k===hs){x===!0&&(ne(n.BLEND),x=!1);return}if(x===!1&&(At(n.BLEND),x=!0),k!==yd){if(k!==g||ue!==E){if((m!==Cs||b!==Cs)&&(n.blendEquation(n.FUNC_ADD),m=Cs,b=Cs),ue)switch(k){case ur:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case qi:n.blendFunc(n.ONE,n.ONE);break;case Rf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Cf:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case ur:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case qi:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Rf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Cf:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}_=null,y=null,I=null,A=null,T.set(0,0,0),P=0,g=k,E=ue}return}It=It||Nt,Ut=Ut||st,ce=ce||ct,(Nt!==m||It!==b)&&(n.blendEquationSeparate(ht[Nt],ht[It]),m=Nt,b=It),(st!==_||ct!==y||Ut!==I||ce!==A)&&(n.blendFuncSeparate(W[st],W[ct],W[Ut],W[ce]),_=st,y=ct,I=Ut,A=ce),(Ve.equals(T)===!1||Xe!==P)&&(n.blendColor(Ve.r,Ve.g,Ve.b,Xe),T.copy(Ve),P=Xe),g=k,E=!1}function X(k,Nt){k.side===Le?ne(n.CULL_FACE):At(n.CULL_FACE);let st=k.side===gn;Nt&&(st=!st),J(st),k.blending===ur&&k.transparent===!1?L(hs):L(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),o.setFunc(k.depthFunc),o.setTest(k.depthTest),o.setMask(k.depthWrite),r.setMask(k.colorWrite);let ct=k.stencilWrite;a.setTest(ct),ct&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Et(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?At(n.SAMPLE_ALPHA_TO_COVERAGE):ne(n.SAMPLE_ALPHA_TO_COVERAGE)}function J(k){M!==k&&(k?n.frontFace(n.CW):n.frontFace(n.CCW),M=k)}function tt(k){k!==gd?(At(n.CULL_FACE),k!==U&&(k===Af?n.cullFace(n.BACK):k===xd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ne(n.CULL_FACE),U=k}function at(k){k!==B&&($&&n.lineWidth(k),B=k)}function Et(k,Nt,st){k?(At(n.POLYGON_OFFSET_FILL),(V!==Nt||H!==st)&&(n.polygonOffset(Nt,st),V=Nt,H=st)):ne(n.POLYGON_OFFSET_FILL)}function gt(k){k?At(n.SCISSOR_TEST):ne(n.SCISSOR_TEST)}function C(k){k===void 0&&(k=n.TEXTURE0+rt-1),vt!==k&&(n.activeTexture(k),vt=k)}function S(k,Nt,st){st===void 0&&(vt===null?st=n.TEXTURE0+rt-1:st=vt);let ct=Lt[st];ct===void 0&&(ct={type:void 0,texture:void 0},Lt[st]=ct),(ct.type!==k||ct.texture!==Nt)&&(vt!==st&&(n.activeTexture(st),vt=st),n.bindTexture(k,Nt||Vt[k]),ct.type=k,ct.texture=Nt)}function D(){let k=Lt[vt];k!==void 0&&k.type!==void 0&&(n.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function et(){try{n.compressedTexImage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function dt(){try{n.compressedTexImage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function lt(){try{n.texSubImage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Wt(){try{n.texSubImage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ot(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ht(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function pe(){try{n.texStorage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Mt(){try{n.texStorage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Pt(){try{n.texImage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function jt(){try{n.texImage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function fe(k){be.equals(k)===!1&&(n.scissor(k.x,k.y,k.z,k.w),be.copy(k))}function zt(k){ot.equals(k)===!1&&(n.viewport(k.x,k.y,k.z,k.w),ot.copy(k))}function ve(k,Nt){let st=c.get(Nt);st===void 0&&(st=new WeakMap,c.set(Nt,st));let ct=st.get(k);ct===void 0&&(ct=n.getUniformBlockIndex(Nt,k.name),st.set(k,ct))}function $t(k,Nt){let ct=c.get(Nt).get(k);l.get(Nt)!==ct&&(n.uniformBlockBinding(Nt,ct,k.__bindingPointIndex),l.set(Nt,ct))}function Ne(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},vt=null,Lt={},u={},h=new WeakMap,d=[],p=null,x=!1,g=null,m=null,_=null,y=null,b=null,I=null,A=null,T=new Jt(0,0,0),P=0,E=!1,M=null,U=null,B=null,V=null,H=null,be.set(0,0,n.canvas.width,n.canvas.height),ot.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:At,disable:ne,bindFramebuffer:le,drawBuffers:ie,useProgram:Se,setBlending:L,setMaterial:X,setFlipSided:J,setCullFace:tt,setLineWidth:at,setPolygonOffset:Et,setScissorTest:gt,activeTexture:C,bindTexture:S,unbindTexture:D,compressedTexImage2D:et,compressedTexImage3D:dt,texImage2D:Pt,texImage3D:jt,updateUBOMapping:ve,uniformBlockBinding:$t,texStorage2D:pe,texStorage3D:Mt,texSubImage2D:lt,texSubImage3D:Wt,compressedTexSubImage2D:Ot,compressedTexSubImage3D:Ht,scissor:fe,viewport:zt,reset:Ne}}function wh(n,t,e,i){let s=rx(i);switch(e){case Kh:return n*t;case jh:return n*t;case Qh:return n*t*2;case z0:return n*t/s.components*s.byteLength;case H0:return n*t/s.components*s.byteLength;case tu:return n*t*2/s.components*s.byteLength;case G0:return n*t*2/s.components*s.byteLength;case Jh:return n*t*3/s.components*s.byteLength;case xi:return n*t*4/s.components*s.byteLength;case V0:return n*t*4/s.components*s.byteLength;case Ca:case Ia:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Pa:case La:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case vc:case Sc:return Math.max(n,16)*Math.max(t,8)/4;case bc:case Mc:return Math.max(n,8)*Math.max(t,8)/2;case Ec:case wc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Tc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ac:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Rc:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Cc:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Ic:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Pc:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Lc:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Nc:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Oc:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Uc:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Dc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case kc:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Fc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Bc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case zc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Na:case Hc:case Gc:return Math.ceil(n/4)*Math.ceil(t/4)*16;case eu:case Vc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Wc:case Xc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function rx(n){switch(n){case Ki:case $h:return{byteLength:1,components:1};case uo:case qh:case Ao:return{byteLength:2,components:1};case F0:case B0:return{byteLength:2,components:4};case Ps:case k0:case Ri:return{byteLength:4,components:1};case Zh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function ox(n,t,e,i,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new bt,f=new WeakMap,u,h=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(C,S){return d?new OffscreenCanvas(C,S):Da("canvas")}function x(C,S,D){let et=1,dt=gt(C);if((dt.width>D||dt.height>D)&&(et=D/Math.max(dt.width,dt.height)),et<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let lt=Math.floor(et*dt.width),Wt=Math.floor(et*dt.height);u===void 0&&(u=p(lt,Wt));let Ot=S?p(lt,Wt):u;return Ot.width=lt,Ot.height=Wt,Ot.getContext("2d").drawImage(C,0,0,lt,Wt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+dt.width+"x"+dt.height+") to ("+lt+"x"+Wt+")."),Ot}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+dt.width+"x"+dt.height+")."),C;return C}function g(C){return C.generateMipmaps}function m(C){n.generateMipmap(C)}function _(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(C,S,D,et,dt=!1){if(C!==null){if(n[C]!==void 0)return n[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let lt=S;if(S===n.RED&&(D===n.FLOAT&&(lt=n.R32F),D===n.HALF_FLOAT&&(lt=n.R16F),D===n.UNSIGNED_BYTE&&(lt=n.R8)),S===n.RED_INTEGER&&(D===n.UNSIGNED_BYTE&&(lt=n.R8UI),D===n.UNSIGNED_SHORT&&(lt=n.R16UI),D===n.UNSIGNED_INT&&(lt=n.R32UI),D===n.BYTE&&(lt=n.R8I),D===n.SHORT&&(lt=n.R16I),D===n.INT&&(lt=n.R32I)),S===n.RG&&(D===n.FLOAT&&(lt=n.RG32F),D===n.HALF_FLOAT&&(lt=n.RG16F),D===n.UNSIGNED_BYTE&&(lt=n.RG8)),S===n.RG_INTEGER&&(D===n.UNSIGNED_BYTE&&(lt=n.RG8UI),D===n.UNSIGNED_SHORT&&(lt=n.RG16UI),D===n.UNSIGNED_INT&&(lt=n.RG32UI),D===n.BYTE&&(lt=n.RG8I),D===n.SHORT&&(lt=n.RG16I),D===n.INT&&(lt=n.RG32I)),S===n.RGB_INTEGER&&(D===n.UNSIGNED_BYTE&&(lt=n.RGB8UI),D===n.UNSIGNED_SHORT&&(lt=n.RGB16UI),D===n.UNSIGNED_INT&&(lt=n.RGB32UI),D===n.BYTE&&(lt=n.RGB8I),D===n.SHORT&&(lt=n.RGB16I),D===n.INT&&(lt=n.RGB32I)),S===n.RGBA_INTEGER&&(D===n.UNSIGNED_BYTE&&(lt=n.RGBA8UI),D===n.UNSIGNED_SHORT&&(lt=n.RGBA16UI),D===n.UNSIGNED_INT&&(lt=n.RGBA32UI),D===n.BYTE&&(lt=n.RGBA8I),D===n.SHORT&&(lt=n.RGBA16I),D===n.INT&&(lt=n.RGBA32I)),S===n.RGB&&D===n.UNSIGNED_INT_5_9_9_9_REV&&(lt=n.RGB9_E5),S===n.RGBA){let Wt=dt?fl:Pe.getTransfer(et);D===n.FLOAT&&(lt=n.RGBA32F),D===n.HALF_FLOAT&&(lt=n.RGBA16F),D===n.UNSIGNED_BYTE&&(lt=Wt===We?n.SRGB8_ALPHA8:n.RGBA8),D===n.UNSIGNED_SHORT_4_4_4_4&&(lt=n.RGBA4),D===n.UNSIGNED_SHORT_5_5_5_1&&(lt=n.RGB5_A1)}return(lt===n.R16F||lt===n.R32F||lt===n.RG16F||lt===n.RG32F||lt===n.RGBA16F||lt===n.RGBA32F)&&t.get("EXT_color_buffer_float"),lt}function b(C,S){let D;return C?S===null||S===Ps||S===br?D=n.DEPTH24_STENCIL8:S===Ri?D=n.DEPTH32F_STENCIL8:S===uo&&(D=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Ps||S===br?D=n.DEPTH_COMPONENT24:S===Ri?D=n.DEPTH_COMPONENT32F:S===uo&&(D=n.DEPTH_COMPONENT16),D}function I(C,S){return g(C)===!0||C.isFramebufferTexture&&C.minFilter!==jn&&C.minFilter!==Ai?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function A(C){let S=C.target;S.removeEventListener("dispose",A),P(S),S.isVideoTexture&&f.delete(S)}function T(C){let S=C.target;S.removeEventListener("dispose",T),M(S)}function P(C){let S=i.get(C);if(S.__webglInit===void 0)return;let D=C.source,et=h.get(D);if(et){let dt=et[S.__cacheKey];dt.usedTimes--,dt.usedTimes===0&&E(C),Object.keys(et).length===0&&h.delete(D)}i.remove(C)}function E(C){let S=i.get(C);n.deleteTexture(S.__webglTexture);let D=C.source,et=h.get(D);delete et[S.__cacheKey],o.memory.textures--}function M(C){let S=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let et=0;et<6;et++){if(Array.isArray(S.__webglFramebuffer[et]))for(let dt=0;dt<S.__webglFramebuffer[et].length;dt++)n.deleteFramebuffer(S.__webglFramebuffer[et][dt]);else n.deleteFramebuffer(S.__webglFramebuffer[et]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[et])}else{if(Array.isArray(S.__webglFramebuffer))for(let et=0;et<S.__webglFramebuffer.length;et++)n.deleteFramebuffer(S.__webglFramebuffer[et]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let et=0;et<S.__webglColorRenderbuffer.length;et++)S.__webglColorRenderbuffer[et]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[et]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let D=C.textures;for(let et=0,dt=D.length;et<dt;et++){let lt=i.get(D[et]);lt.__webglTexture&&(n.deleteTexture(lt.__webglTexture),o.memory.textures--),i.remove(D[et])}i.remove(C)}let U=0;function B(){U=0}function V(){let C=U;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),U+=1,C}function H(C){let S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function rt(C,S){let D=i.get(C);if(C.isVideoTexture&&at(C),C.isRenderTargetTexture===!1&&C.version>0&&D.__version!==C.version){let et=C.image;if(et===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ot(D,C,S);return}}e.bindTexture(n.TEXTURE_2D,D.__webglTexture,n.TEXTURE0+S)}function $(C,S){let D=i.get(C);if(C.version>0&&D.__version!==C.version){ot(D,C,S);return}e.bindTexture(n.TEXTURE_2D_ARRAY,D.__webglTexture,n.TEXTURE0+S)}function pt(C,S){let D=i.get(C);if(C.version>0&&D.__version!==C.version){ot(D,C,S);return}e.bindTexture(n.TEXTURE_3D,D.__webglTexture,n.TEXTURE0+S)}function Q(C,S){let D=i.get(C);if(C.version>0&&D.__version!==C.version){yt(D,C,S);return}e.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+S)}let vt={[Zi]:n.REPEAT,[Wi]:n.CLAMP_TO_EDGE,[_c]:n.MIRRORED_REPEAT},Lt={[jn]:n.NEAREST,[Wd]:n.NEAREST_MIPMAP_NEAREST,[$o]:n.NEAREST_MIPMAP_LINEAR,[Ai]:n.LINEAR,[Tl]:n.LINEAR_MIPMAP_NEAREST,[Xi]:n.LINEAR_MIPMAP_LINEAR},Bt={[qd]:n.NEVER,[tp]:n.ALWAYS,[Zd]:n.LESS,[iu]:n.LEQUAL,[Kd]:n.EQUAL,[Qd]:n.GEQUAL,[Jd]:n.GREATER,[jd]:n.NOTEQUAL};function se(C,S){if(S.type===Ri&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Ai||S.magFilter===Tl||S.magFilter===$o||S.magFilter===Xi||S.minFilter===Ai||S.minFilter===Tl||S.minFilter===$o||S.minFilter===Xi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,vt[S.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,vt[S.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,vt[S.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,Lt[S.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,Lt[S.minFilter]),S.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,Bt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===jn||S.minFilter!==$o&&S.minFilter!==Xi||S.type===Ri&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){let D=t.get("EXT_texture_filter_anisotropic");n.texParameterf(C,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function be(C,S){let D=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",A));let et=S.source,dt=h.get(et);dt===void 0&&(dt={},h.set(et,dt));let lt=H(S);if(lt!==C.__cacheKey){dt[lt]===void 0&&(dt[lt]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,D=!0),dt[lt].usedTimes++;let Wt=dt[C.__cacheKey];Wt!==void 0&&(dt[C.__cacheKey].usedTimes--,Wt.usedTimes===0&&E(S)),C.__cacheKey=lt,C.__webglTexture=dt[lt].texture}return D}function ot(C,S,D){let et=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(et=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(et=n.TEXTURE_3D);let dt=be(C,S),lt=S.source;e.bindTexture(et,C.__webglTexture,n.TEXTURE0+D);let Wt=i.get(lt);if(lt.version!==Wt.__version||dt===!0){e.activeTexture(n.TEXTURE0+D);let Ot=Pe.getPrimaries(Pe.workingColorSpace),Ht=S.colorSpace===ri?null:Pe.getPrimaries(S.colorSpace),pe=S.colorSpace===ri||Ot===Ht?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);let Mt=x(S.image,!1,s.maxTextureSize);Mt=Et(S,Mt);let Pt=r.convert(S.format,S.colorSpace),jt=r.convert(S.type),fe=y(S.internalFormat,Pt,jt,S.colorSpace,S.isVideoTexture);se(et,S);let zt,ve=S.mipmaps,$t=S.isVideoTexture!==!0,Ne=Wt.__version===void 0||dt===!0,k=lt.dataReady,Nt=I(S,Mt);if(S.isDepthTexture)fe=b(S.format===vr,S.type),Ne&&($t?e.texStorage2D(n.TEXTURE_2D,1,fe,Mt.width,Mt.height):e.texImage2D(n.TEXTURE_2D,0,fe,Mt.width,Mt.height,0,Pt,jt,null));else if(S.isDataTexture)if(ve.length>0){$t&&Ne&&e.texStorage2D(n.TEXTURE_2D,Nt,fe,ve[0].width,ve[0].height);for(let st=0,ct=ve.length;st<ct;st++)zt=ve[st],$t?k&&e.texSubImage2D(n.TEXTURE_2D,st,0,0,zt.width,zt.height,Pt,jt,zt.data):e.texImage2D(n.TEXTURE_2D,st,fe,zt.width,zt.height,0,Pt,jt,zt.data);S.generateMipmaps=!1}else $t?(Ne&&e.texStorage2D(n.TEXTURE_2D,Nt,fe,Mt.width,Mt.height),k&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Mt.width,Mt.height,Pt,jt,Mt.data)):e.texImage2D(n.TEXTURE_2D,0,fe,Mt.width,Mt.height,0,Pt,jt,Mt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){$t&&Ne&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Nt,fe,ve[0].width,ve[0].height,Mt.depth);for(let st=0,ct=ve.length;st<ct;st++)if(zt=ve[st],S.format!==xi)if(Pt!==null)if($t){if(k)if(S.layerUpdates.size>0){let It=wh(zt.width,zt.height,S.format,S.type);for(let Ut of S.layerUpdates){let ce=zt.data.subarray(Ut*It/zt.data.BYTES_PER_ELEMENT,(Ut+1)*It/zt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,st,0,0,Ut,zt.width,zt.height,1,Pt,ce)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,st,0,0,0,zt.width,zt.height,Mt.depth,Pt,zt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,st,fe,zt.width,zt.height,Mt.depth,0,zt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $t?k&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,st,0,0,0,zt.width,zt.height,Mt.depth,Pt,jt,zt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,st,fe,zt.width,zt.height,Mt.depth,0,Pt,jt,zt.data)}else{$t&&Ne&&e.texStorage2D(n.TEXTURE_2D,Nt,fe,ve[0].width,ve[0].height);for(let st=0,ct=ve.length;st<ct;st++)zt=ve[st],S.format!==xi?Pt!==null?$t?k&&e.compressedTexSubImage2D(n.TEXTURE_2D,st,0,0,zt.width,zt.height,Pt,zt.data):e.compressedTexImage2D(n.TEXTURE_2D,st,fe,zt.width,zt.height,0,zt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$t?k&&e.texSubImage2D(n.TEXTURE_2D,st,0,0,zt.width,zt.height,Pt,jt,zt.data):e.texImage2D(n.TEXTURE_2D,st,fe,zt.width,zt.height,0,Pt,jt,zt.data)}else if(S.isDataArrayTexture)if($t){if(Ne&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Nt,fe,Mt.width,Mt.height,Mt.depth),k)if(S.layerUpdates.size>0){let st=wh(Mt.width,Mt.height,S.format,S.type);for(let ct of S.layerUpdates){let It=Mt.data.subarray(ct*st/Mt.data.BYTES_PER_ELEMENT,(ct+1)*st/Mt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ct,Mt.width,Mt.height,1,Pt,jt,It)}S.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Mt.width,Mt.height,Mt.depth,Pt,jt,Mt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,fe,Mt.width,Mt.height,Mt.depth,0,Pt,jt,Mt.data);else if(S.isData3DTexture)$t?(Ne&&e.texStorage3D(n.TEXTURE_3D,Nt,fe,Mt.width,Mt.height,Mt.depth),k&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Mt.width,Mt.height,Mt.depth,Pt,jt,Mt.data)):e.texImage3D(n.TEXTURE_3D,0,fe,Mt.width,Mt.height,Mt.depth,0,Pt,jt,Mt.data);else if(S.isFramebufferTexture){if(Ne)if($t)e.texStorage2D(n.TEXTURE_2D,Nt,fe,Mt.width,Mt.height);else{let st=Mt.width,ct=Mt.height;for(let It=0;It<Nt;It++)e.texImage2D(n.TEXTURE_2D,It,fe,st,ct,0,Pt,jt,null),st>>=1,ct>>=1}}else if(ve.length>0){if($t&&Ne){let st=gt(ve[0]);e.texStorage2D(n.TEXTURE_2D,Nt,fe,st.width,st.height)}for(let st=0,ct=ve.length;st<ct;st++)zt=ve[st],$t?k&&e.texSubImage2D(n.TEXTURE_2D,st,0,0,Pt,jt,zt):e.texImage2D(n.TEXTURE_2D,st,fe,Pt,jt,zt);S.generateMipmaps=!1}else if($t){if(Ne){let st=gt(Mt);e.texStorage2D(n.TEXTURE_2D,Nt,fe,st.width,st.height)}k&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Pt,jt,Mt)}else e.texImage2D(n.TEXTURE_2D,0,fe,Pt,jt,Mt);g(S)&&m(et),Wt.__version=lt.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function yt(C,S,D){if(S.image.length!==6)return;let et=be(C,S),dt=S.source;e.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+D);let lt=i.get(dt);if(dt.version!==lt.__version||et===!0){e.activeTexture(n.TEXTURE0+D);let Wt=Pe.getPrimaries(Pe.workingColorSpace),Ot=S.colorSpace===ri?null:Pe.getPrimaries(S.colorSpace),Ht=S.colorSpace===ri||Wt===Ot?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ht);let pe=S.isCompressedTexture||S.image[0].isCompressedTexture,Mt=S.image[0]&&S.image[0].isDataTexture,Pt=[];for(let ct=0;ct<6;ct++)!pe&&!Mt?Pt[ct]=x(S.image[ct],!0,s.maxCubemapSize):Pt[ct]=Mt?S.image[ct].image:S.image[ct],Pt[ct]=Et(S,Pt[ct]);let jt=Pt[0],fe=r.convert(S.format,S.colorSpace),zt=r.convert(S.type),ve=y(S.internalFormat,fe,zt,S.colorSpace),$t=S.isVideoTexture!==!0,Ne=lt.__version===void 0||et===!0,k=dt.dataReady,Nt=I(S,jt);se(n.TEXTURE_CUBE_MAP,S);let st;if(pe){$t&&Ne&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Nt,ve,jt.width,jt.height);for(let ct=0;ct<6;ct++){st=Pt[ct].mipmaps;for(let It=0;It<st.length;It++){let Ut=st[It];S.format!==xi?fe!==null?$t?k&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,It,0,0,Ut.width,Ut.height,fe,Ut.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,It,ve,Ut.width,Ut.height,0,Ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$t?k&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,It,0,0,Ut.width,Ut.height,fe,zt,Ut.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,It,ve,Ut.width,Ut.height,0,fe,zt,Ut.data)}}}else{if(st=S.mipmaps,$t&&Ne){st.length>0&&Nt++;let ct=gt(Pt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Nt,ve,ct.width,ct.height)}for(let ct=0;ct<6;ct++)if(Mt){$t?k&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,Pt[ct].width,Pt[ct].height,fe,zt,Pt[ct].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,ve,Pt[ct].width,Pt[ct].height,0,fe,zt,Pt[ct].data);for(let It=0;It<st.length;It++){let ce=st[It].image[ct].image;$t?k&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,It+1,0,0,ce.width,ce.height,fe,zt,ce.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,It+1,ve,ce.width,ce.height,0,fe,zt,ce.data)}}else{$t?k&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,fe,zt,Pt[ct]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,ve,fe,zt,Pt[ct]);for(let It=0;It<st.length;It++){let Ut=st[It];$t?k&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,It+1,0,0,fe,zt,Ut.image[ct]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,It+1,ve,fe,zt,Ut.image[ct])}}}g(S)&&m(n.TEXTURE_CUBE_MAP),lt.__version=dt.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function Vt(C,S,D,et,dt,lt){let Wt=r.convert(D.format,D.colorSpace),Ot=r.convert(D.type),Ht=y(D.internalFormat,Wt,Ot,D.colorSpace),pe=i.get(S),Mt=i.get(D);if(Mt.__renderTarget=S,!pe.__hasExternalTextures){let Pt=Math.max(1,S.width>>lt),jt=Math.max(1,S.height>>lt);dt===n.TEXTURE_3D||dt===n.TEXTURE_2D_ARRAY?e.texImage3D(dt,lt,Ht,Pt,jt,S.depth,0,Wt,Ot,null):e.texImage2D(dt,lt,Ht,Pt,jt,0,Wt,Ot,null)}e.bindFramebuffer(n.FRAMEBUFFER,C),tt(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,et,dt,Mt.__webglTexture,0,J(S)):(dt===n.TEXTURE_2D||dt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&dt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,et,dt,Mt.__webglTexture,lt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function At(C,S,D){if(n.bindRenderbuffer(n.RENDERBUFFER,C),S.depthBuffer){let et=S.depthTexture,dt=et&&et.isDepthTexture?et.type:null,lt=b(S.stencilBuffer,dt),Wt=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ot=J(S);tt(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ot,lt,S.width,S.height):D?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ot,lt,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,lt,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Wt,n.RENDERBUFFER,C)}else{let et=S.textures;for(let dt=0;dt<et.length;dt++){let lt=et[dt],Wt=r.convert(lt.format,lt.colorSpace),Ot=r.convert(lt.type),Ht=y(lt.internalFormat,Wt,Ot,lt.colorSpace),pe=J(S);D&&tt(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,pe,Ht,S.width,S.height):tt(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,pe,Ht,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,Ht,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ne(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let et=i.get(S.depthTexture);et.__renderTarget=S,(!et.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),rt(S.depthTexture,0);let dt=et.__webglTexture,lt=J(S);if(S.depthTexture.format===dr)tt(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,dt,0,lt):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,dt,0);else if(S.depthTexture.format===vr)tt(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,dt,0,lt):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,dt,0);else throw new Error("Unknown depthTexture format")}function le(C){let S=i.get(C),D=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){let et=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),et){let dt=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,et.removeEventListener("dispose",dt)};et.addEventListener("dispose",dt),S.__depthDisposeCallback=dt}S.__boundDepthTexture=et}if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(D)throw new Error("target.depthTexture not supported in Cube render targets");ne(S.__webglFramebuffer,C)}else if(D){S.__webglDepthbuffer=[];for(let et=0;et<6;et++)if(e.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[et]),S.__webglDepthbuffer[et]===void 0)S.__webglDepthbuffer[et]=n.createRenderbuffer(),At(S.__webglDepthbuffer[et],C,!1);else{let dt=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,lt=S.__webglDepthbuffer[et];n.bindRenderbuffer(n.RENDERBUFFER,lt),n.framebufferRenderbuffer(n.FRAMEBUFFER,dt,n.RENDERBUFFER,lt)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=n.createRenderbuffer(),At(S.__webglDepthbuffer,C,!1);else{let et=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,dt=S.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,dt),n.framebufferRenderbuffer(n.FRAMEBUFFER,et,n.RENDERBUFFER,dt)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function ie(C,S,D){let et=i.get(C);S!==void 0&&Vt(et.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),D!==void 0&&le(C)}function Se(C){let S=C.texture,D=i.get(C),et=i.get(S);C.addEventListener("dispose",T);let dt=C.textures,lt=C.isWebGLCubeRenderTarget===!0,Wt=dt.length>1;if(Wt||(et.__webglTexture===void 0&&(et.__webglTexture=n.createTexture()),et.__version=S.version,o.memory.textures++),lt){D.__webglFramebuffer=[];for(let Ot=0;Ot<6;Ot++)if(S.mipmaps&&S.mipmaps.length>0){D.__webglFramebuffer[Ot]=[];for(let Ht=0;Ht<S.mipmaps.length;Ht++)D.__webglFramebuffer[Ot][Ht]=n.createFramebuffer()}else D.__webglFramebuffer[Ot]=n.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){D.__webglFramebuffer=[];for(let Ot=0;Ot<S.mipmaps.length;Ot++)D.__webglFramebuffer[Ot]=n.createFramebuffer()}else D.__webglFramebuffer=n.createFramebuffer();if(Wt)for(let Ot=0,Ht=dt.length;Ot<Ht;Ot++){let pe=i.get(dt[Ot]);pe.__webglTexture===void 0&&(pe.__webglTexture=n.createTexture(),o.memory.textures++)}if(C.samples>0&&tt(C)===!1){D.__webglMultisampledFramebuffer=n.createFramebuffer(),D.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let Ot=0;Ot<dt.length;Ot++){let Ht=dt[Ot];D.__webglColorRenderbuffer[Ot]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,D.__webglColorRenderbuffer[Ot]);let pe=r.convert(Ht.format,Ht.colorSpace),Mt=r.convert(Ht.type),Pt=y(Ht.internalFormat,pe,Mt,Ht.colorSpace,C.isXRRenderTarget===!0),jt=J(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,jt,Pt,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ot,n.RENDERBUFFER,D.__webglColorRenderbuffer[Ot])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(D.__webglDepthRenderbuffer=n.createRenderbuffer(),At(D.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(lt){e.bindTexture(n.TEXTURE_CUBE_MAP,et.__webglTexture),se(n.TEXTURE_CUBE_MAP,S);for(let Ot=0;Ot<6;Ot++)if(S.mipmaps&&S.mipmaps.length>0)for(let Ht=0;Ht<S.mipmaps.length;Ht++)Vt(D.__webglFramebuffer[Ot][Ht],C,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Ot,Ht);else Vt(D.__webglFramebuffer[Ot],C,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Ot,0);g(S)&&m(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Wt){for(let Ot=0,Ht=dt.length;Ot<Ht;Ot++){let pe=dt[Ot],Mt=i.get(pe);e.bindTexture(n.TEXTURE_2D,Mt.__webglTexture),se(n.TEXTURE_2D,pe),Vt(D.__webglFramebuffer,C,pe,n.COLOR_ATTACHMENT0+Ot,n.TEXTURE_2D,0),g(pe)&&m(n.TEXTURE_2D)}e.unbindTexture()}else{let Ot=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Ot=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(Ot,et.__webglTexture),se(Ot,S),S.mipmaps&&S.mipmaps.length>0)for(let Ht=0;Ht<S.mipmaps.length;Ht++)Vt(D.__webglFramebuffer[Ht],C,S,n.COLOR_ATTACHMENT0,Ot,Ht);else Vt(D.__webglFramebuffer,C,S,n.COLOR_ATTACHMENT0,Ot,0);g(S)&&m(Ot),e.unbindTexture()}C.depthBuffer&&le(C)}function ht(C){let S=C.textures;for(let D=0,et=S.length;D<et;D++){let dt=S[D];if(g(dt)){let lt=_(C),Wt=i.get(dt).__webglTexture;e.bindTexture(lt,Wt),m(lt),e.unbindTexture()}}}let W=[],L=[];function X(C){if(C.samples>0){if(tt(C)===!1){let S=C.textures,D=C.width,et=C.height,dt=n.COLOR_BUFFER_BIT,lt=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Wt=i.get(C),Ot=S.length>1;if(Ot)for(let Ht=0;Ht<S.length;Ht++)e.bindFramebuffer(n.FRAMEBUFFER,Wt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ht,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Wt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ht,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Wt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Wt.__webglFramebuffer);for(let Ht=0;Ht<S.length;Ht++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(dt|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(dt|=n.STENCIL_BUFFER_BIT)),Ot){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Wt.__webglColorRenderbuffer[Ht]);let pe=i.get(S[Ht]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,pe,0)}n.blitFramebuffer(0,0,D,et,0,0,D,et,dt,n.NEAREST),l===!0&&(W.length=0,L.length=0,W.push(n.COLOR_ATTACHMENT0+Ht),C.depthBuffer&&C.resolveDepthBuffer===!1&&(W.push(lt),L.push(lt),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,L)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,W))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Ot)for(let Ht=0;Ht<S.length;Ht++){e.bindFramebuffer(n.FRAMEBUFFER,Wt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ht,n.RENDERBUFFER,Wt.__webglColorRenderbuffer[Ht]);let pe=i.get(S[Ht]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Wt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ht,n.TEXTURE_2D,pe,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Wt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){let S=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[S])}}}function J(C){return Math.min(s.maxSamples,C.samples)}function tt(C){let S=i.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function at(C){let S=o.render.frame;f.get(C)!==S&&(f.set(C,S),C.update())}function Et(C,S){let D=C.colorSpace,et=C.format,dt=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||D!==Dr&&D!==ri&&(Pe.getTransfer(D)===We?(et!==xi||dt!==Ki)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",D)),S}function gt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=B,this.setTexture2D=rt,this.setTexture2DArray=$,this.setTexture3D=pt,this.setTextureCube=Q,this.rebindTextures=ie,this.setupRenderTarget=Se,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=X,this.setupDepthRenderbuffer=le,this.setupFrameBufferTexture=Vt,this.useMultisampledRTT=tt}function ax(n,t){function e(i,s=ri){let r,o=Pe.getTransfer(s);if(i===Ki)return n.UNSIGNED_BYTE;if(i===F0)return n.UNSIGNED_SHORT_4_4_4_4;if(i===B0)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Zh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===$h)return n.BYTE;if(i===qh)return n.SHORT;if(i===uo)return n.UNSIGNED_SHORT;if(i===k0)return n.INT;if(i===Ps)return n.UNSIGNED_INT;if(i===Ri)return n.FLOAT;if(i===Ao)return n.HALF_FLOAT;if(i===Kh)return n.ALPHA;if(i===Jh)return n.RGB;if(i===xi)return n.RGBA;if(i===jh)return n.LUMINANCE;if(i===Qh)return n.LUMINANCE_ALPHA;if(i===dr)return n.DEPTH_COMPONENT;if(i===vr)return n.DEPTH_STENCIL;if(i===z0)return n.RED;if(i===H0)return n.RED_INTEGER;if(i===tu)return n.RG;if(i===G0)return n.RG_INTEGER;if(i===V0)return n.RGBA_INTEGER;if(i===Ca||i===Ia||i===Pa||i===La)if(o===We)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ca)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ia)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Pa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===La)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ca)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ia)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Pa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===La)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===bc||i===vc||i===Mc||i===Sc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===bc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===vc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Mc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Sc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ec||i===wc||i===Tc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Ec||i===wc)return o===We?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Tc)return o===We?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ac||i===Rc||i===Cc||i===Ic||i===Pc||i===Lc||i===Nc||i===Oc||i===Uc||i===Dc||i===kc||i===Fc||i===Bc||i===zc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ac)return o===We?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Rc)return o===We?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Cc)return o===We?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ic)return o===We?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Pc)return o===We?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Lc)return o===We?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Nc)return o===We?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Oc)return o===We?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Uc)return o===We?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Dc)return o===We?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===kc)return o===We?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Fc)return o===We?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Bc)return o===We?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===zc)return o===We?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Na||i===Hc||i===Gc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Na)return o===We?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Hc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Gc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===eu||i===Vc||i===Wc||i===Xc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Na)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Vc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Wc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Xc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===br?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var l0=class extends Mn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Gt=class extends sn{constructor(){super(),this.isGroup=!0,this.type="Group"}},lx={type:"move"},lo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let g=e.getJointPose(x,i),m=this._getHandJoint(c,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let f=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],h=f.position.distanceTo(u.position),d=.02,p=.005;c.inputState.pinching&&h>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(lx)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Gt;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},cx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fx=`
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

}`,c0=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){let s=new Hn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Qn({vertexShader:cx,fragmentShader:fx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Xt(new Fe(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},f0=class extends ps{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,f=null,u=null,h=null,d=null,p=null,x=new c0,g=e.getContextAttributes(),m=null,_=null,y=[],b=[],I=new bt,A=null,T=new Mn;T.viewport=new ke;let P=new Mn;P.viewport=new ke;let E=[T,P],M=new l0,U=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ot){let yt=y[ot];return yt===void 0&&(yt=new lo,y[ot]=yt),yt.getTargetRaySpace()},this.getControllerGrip=function(ot){let yt=y[ot];return yt===void 0&&(yt=new lo,y[ot]=yt),yt.getGripSpace()},this.getHand=function(ot){let yt=y[ot];return yt===void 0&&(yt=new lo,y[ot]=yt),yt.getHandSpace()};function V(ot){let yt=b.indexOf(ot.inputSource);if(yt===-1)return;let Vt=y[yt];Vt!==void 0&&(Vt.update(ot.inputSource,ot.frame,c||o),Vt.dispatchEvent({type:ot.type,data:ot.inputSource}))}function H(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",rt);for(let ot=0;ot<y.length;ot++){let yt=b[ot];yt!==null&&(b[ot]=null,y[ot].disconnect(yt))}U=null,B=null,x.reset(),t.setRenderTarget(m),d=null,h=null,u=null,s=null,_=null,be.stop(),i.isPresenting=!1,t.setPixelRatio(A),t.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ot){r=ot,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ot){a=ot,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ot){c=ot},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(ot){if(s=ot,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",H),s.addEventListener("inputsourceschange",rt),g.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(I),s.renderState.layers===void 0){let yt={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,yt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),_=new Ji(d.framebufferWidth,d.framebufferHeight,{format:xi,type:Ki,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let yt=null,Vt=null,At=null;g.depth&&(At=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,yt=g.stencil?vr:dr,Vt=g.stencil?br:Ps);let ne={colorFormat:e.RGBA8,depthFormat:At,scaleFactor:r};u=new XRWebGLBinding(s,e),h=u.createProjectionLayer(ne),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),_=new Ji(h.textureWidth,h.textureHeight,{format:xi,type:Ki,depthTexture:new Ha(h.textureWidth,h.textureHeight,Vt,void 0,void 0,void 0,void 0,void 0,void 0,yt),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),be.setContext(s),be.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function rt(ot){for(let yt=0;yt<ot.removed.length;yt++){let Vt=ot.removed[yt],At=b.indexOf(Vt);At>=0&&(b[At]=null,y[At].disconnect(Vt))}for(let yt=0;yt<ot.added.length;yt++){let Vt=ot.added[yt],At=b.indexOf(Vt);if(At===-1){for(let le=0;le<y.length;le++)if(le>=b.length){b.push(Vt),At=le;break}else if(b[le]===null){b[le]=Vt,At=le;break}if(At===-1)break}let ne=y[At];ne&&ne.connect(Vt)}}let $=new N,pt=new N;function Q(ot,yt,Vt){$.setFromMatrixPosition(yt.matrixWorld),pt.setFromMatrixPosition(Vt.matrixWorld);let At=$.distanceTo(pt),ne=yt.projectionMatrix.elements,le=Vt.projectionMatrix.elements,ie=ne[14]/(ne[10]-1),Se=ne[14]/(ne[10]+1),ht=(ne[9]+1)/ne[5],W=(ne[9]-1)/ne[5],L=(ne[8]-1)/ne[0],X=(le[8]+1)/le[0],J=ie*L,tt=ie*X,at=At/(-L+X),Et=at*-L;if(yt.matrixWorld.decompose(ot.position,ot.quaternion,ot.scale),ot.translateX(Et),ot.translateZ(at),ot.matrixWorld.compose(ot.position,ot.quaternion,ot.scale),ot.matrixWorldInverse.copy(ot.matrixWorld).invert(),ne[10]===-1)ot.projectionMatrix.copy(yt.projectionMatrix),ot.projectionMatrixInverse.copy(yt.projectionMatrixInverse);else{let gt=ie+at,C=Se+at,S=J-Et,D=tt+(At-Et),et=ht*Se/C*gt,dt=W*Se/C*gt;ot.projectionMatrix.makePerspective(S,D,et,dt,gt,C),ot.projectionMatrixInverse.copy(ot.projectionMatrix).invert()}}function vt(ot,yt){yt===null?ot.matrixWorld.copy(ot.matrix):ot.matrixWorld.multiplyMatrices(yt.matrixWorld,ot.matrix),ot.matrixWorldInverse.copy(ot.matrixWorld).invert()}this.updateCamera=function(ot){if(s===null)return;let yt=ot.near,Vt=ot.far;x.texture!==null&&(x.depthNear>0&&(yt=x.depthNear),x.depthFar>0&&(Vt=x.depthFar)),M.near=P.near=T.near=yt,M.far=P.far=T.far=Vt,(U!==M.near||B!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),U=M.near,B=M.far),T.layers.mask=ot.layers.mask|2,P.layers.mask=ot.layers.mask|4,M.layers.mask=T.layers.mask|P.layers.mask;let At=ot.parent,ne=M.cameras;vt(M,At);for(let le=0;le<ne.length;le++)vt(ne[le],At);ne.length===2?Q(M,T,P):M.projectionMatrix.copy(T.projectionMatrix),Lt(ot,M,At)};function Lt(ot,yt,Vt){Vt===null?ot.matrix.copy(yt.matrixWorld):(ot.matrix.copy(Vt.matrixWorld),ot.matrix.invert(),ot.matrix.multiply(yt.matrixWorld)),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.updateMatrixWorld(!0),ot.projectionMatrix.copy(yt.projectionMatrix),ot.projectionMatrixInverse.copy(yt.projectionMatrixInverse),ot.isPerspectiveCamera&&(ot.fov=Mr*2*Math.atan(1/ot.projectionMatrix.elements[5]),ot.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(ot){l=ot,h!==null&&(h.fixedFoveation=ot),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=ot)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(M)};let Bt=null;function se(ot,yt){if(f=yt.getViewerPose(c||o),p=yt,f!==null){let Vt=f.views;d!==null&&(t.setRenderTargetFramebuffer(_,d.framebuffer),t.setRenderTarget(_));let At=!1;Vt.length!==M.cameras.length&&(M.cameras.length=0,At=!0);for(let le=0;le<Vt.length;le++){let ie=Vt[le],Se=null;if(d!==null)Se=d.getViewport(ie);else{let W=u.getViewSubImage(h,ie);Se=W.viewport,le===0&&(t.setRenderTargetTextures(_,W.colorTexture,h.ignoreDepthValues?void 0:W.depthStencilTexture),t.setRenderTarget(_))}let ht=E[le];ht===void 0&&(ht=new Mn,ht.layers.enable(le),ht.viewport=new ke,E[le]=ht),ht.matrix.fromArray(ie.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray(ie.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set(Se.x,Se.y,Se.width,Se.height),le===0&&(M.matrix.copy(ht.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),At===!0&&M.cameras.push(ht)}let ne=s.enabledFeatures;if(ne&&ne.includes("depth-sensing")){let le=u.getDepthInformation(Vt[0]);le&&le.isValid&&le.texture&&x.init(t,le,s.renderState)}}for(let Vt=0;Vt<y.length;Vt++){let At=b[Vt],ne=y[Vt];At!==null&&ne!==void 0&&ne.update(At,yt,c||o)}Bt&&Bt(ot,yt),yt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:yt}),p=null}let be=new au;be.setAnimationLoop(se),this.setAnimationLoop=function(ot){Bt=ot},this.dispose=function(){}}},As=new yn,hx=new oe;function ux(n,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,ou(n)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,_,y,b){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),u(g,m)):m.isMeshPhongMaterial?(r(g,m),f(g,m)):m.isMeshStandardMaterial?(r(g,m),h(g,m),m.isMeshPhysicalMaterial&&d(g,m,b)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),x(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,_,y):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===gn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===gn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let _=t.get(m),y=_.envMap,b=_.envMapRotation;y&&(g.envMap.value=y,As.copy(b),As.x*=-1,As.y*=-1,As.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(As.y*=-1,As.z*=-1),g.envMapRotation.value.setFromMatrix4(hx.makeRotationFromEuler(As)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,_,y){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*_,g.scale.value=y*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function f(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function h(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m,_){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===gn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){let _=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function dx(n,t,e,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,y){let b=y.program;i.uniformBlockBinding(_,b)}function c(_,y){let b=s[_.id];b===void 0&&(p(_),b=f(_),s[_.id]=b,_.addEventListener("dispose",g));let I=y.program;i.updateUBOMapping(_,I);let A=t.render.frame;r[_.id]!==A&&(h(_),r[_.id]=A)}function f(_){let y=u();_.__bindingPointIndex=y;let b=n.createBuffer(),I=_.__size,A=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,I,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,b),b}function u(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){let y=s[_.id],b=_.uniforms,I=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let A=0,T=b.length;A<T;A++){let P=Array.isArray(b[A])?b[A]:[b[A]];for(let E=0,M=P.length;E<M;E++){let U=P[E];if(d(U,A,E,I)===!0){let B=U.__offset,V=Array.isArray(U.value)?U.value:[U.value],H=0;for(let rt=0;rt<V.length;rt++){let $=V[rt],pt=x($);typeof $=="number"||typeof $=="boolean"?(U.__data[0]=$,n.bufferSubData(n.UNIFORM_BUFFER,B+H,U.__data)):$.isMatrix3?(U.__data[0]=$.elements[0],U.__data[1]=$.elements[1],U.__data[2]=$.elements[2],U.__data[3]=0,U.__data[4]=$.elements[3],U.__data[5]=$.elements[4],U.__data[6]=$.elements[5],U.__data[7]=0,U.__data[8]=$.elements[6],U.__data[9]=$.elements[7],U.__data[10]=$.elements[8],U.__data[11]=0):($.toArray(U.__data,H),H+=pt.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,B,U.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(_,y,b,I){let A=_.value,T=y+"_"+b;if(I[T]===void 0)return typeof A=="number"||typeof A=="boolean"?I[T]=A:I[T]=A.clone(),!0;{let P=I[T];if(typeof A=="number"||typeof A=="boolean"){if(P!==A)return I[T]=A,!0}else if(P.equals(A)===!1)return P.copy(A),!0}return!1}function p(_){let y=_.uniforms,b=0,I=16;for(let T=0,P=y.length;T<P;T++){let E=Array.isArray(y[T])?y[T]:[y[T]];for(let M=0,U=E.length;M<U;M++){let B=E[M],V=Array.isArray(B.value)?B.value:[B.value];for(let H=0,rt=V.length;H<rt;H++){let $=V[H],pt=x($),Q=b%I,vt=Q%pt.boundary,Lt=Q+vt;b+=vt,Lt!==0&&I-Lt<pt.storage&&(b+=I-Lt),B.__data=new Float32Array(pt.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=b,b+=pt.storage}}}let A=b%I;return A>0&&(b+=I-A),_.__size=b,_.__cache={},this}function x(_){let y={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=48,y.storage=48):_.isMatrix4?(y.boundary=64,y.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),y}function g(_){let y=_.target;y.removeEventListener("dispose",g);let b=o.indexOf(y.__bindingPointIndex);o.splice(b,1),n.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function m(){for(let _ in s)n.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}var Ga=class{constructor(t={}){let{canvas:e=xp(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:h=!1}=t;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;let p=new Uint32Array(4),x=new Int32Array(4),g=null,m=null,_=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=$e,this.toneMapping=us,this.toneMappingExposure=1;let b=this,I=!1,A=0,T=0,P=null,E=-1,M=null,U=new ke,B=new ke,V=null,H=new Jt(0),rt=0,$=e.width,pt=e.height,Q=1,vt=null,Lt=null,Bt=new ke(0,0,$,pt),se=new ke(0,0,$,pt),be=!1,ot=new mo,yt=!1,Vt=!1,At=new oe,ne=new oe,le=new N,ie=new ke,Se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ht=!1;function W(){return P===null?Q:1}let L=i;function X(R,z){return e.getContext(R,z)}try{let R={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${O0}`),e.addEventListener("webglcontextlost",ct,!1),e.addEventListener("webglcontextrestored",It,!1),e.addEventListener("webglcontextcreationerror",Ut,!1),L===null){let z="webgl2";if(L=X(z,R),L===null)throw X(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let J,tt,at,Et,gt,C,S,D,et,dt,lt,Wt,Ot,Ht,pe,Mt,Pt,jt,fe,zt,ve,$t,Ne,k;function Nt(){J=new Cg(L),J.init(),$t=new ax(L,J),tt=new Sg(L,J,t,$t),at=new sx(L,J),tt.reverseDepthBuffer&&h&&at.buffers.depth.setReversed(!0),Et=new Lg(L),gt=new X2,C=new ox(L,J,at,gt,tt,$t,Et),S=new wg(b),D=new Rg(b),et=new Bp(L),Ne=new vg(L,et),dt=new Ig(L,et,Et,Ne),lt=new Og(L,dt,et,Et),fe=new Ng(L,tt,C),Mt=new Eg(gt),Wt=new W2(b,S,D,J,tt,Ne,Mt),Ot=new ux(b,gt),Ht=new $2,pe=new Q2(J),jt=new bg(b,S,D,at,lt,d,l),Pt=new nx(b,lt,tt),k=new dx(L,Et,tt,at),zt=new Mg(L,J,Et),ve=new Pg(L,J,Et),Et.programs=Wt.programs,b.capabilities=tt,b.extensions=J,b.properties=gt,b.renderLists=Ht,b.shadowMap=Pt,b.state=at,b.info=Et}Nt();let st=new f0(b,L);this.xr=st,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let R=J.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=J.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(R){R!==void 0&&(Q=R,this.setSize($,pt,!1))},this.getSize=function(R){return R.set($,pt)},this.setSize=function(R,z,K=!0){if(st.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=R,pt=z,e.width=Math.floor(R*Q),e.height=Math.floor(z*Q),K===!0&&(e.style.width=R+"px",e.style.height=z+"px"),this.setViewport(0,0,R,z)},this.getDrawingBufferSize=function(R){return R.set($*Q,pt*Q).floor()},this.setDrawingBufferSize=function(R,z,K){$=R,pt=z,Q=K,e.width=Math.floor(R*K),e.height=Math.floor(z*K),this.setViewport(0,0,R,z)},this.getCurrentViewport=function(R){return R.copy(U)},this.getViewport=function(R){return R.copy(Bt)},this.setViewport=function(R,z,K,Y){R.isVector4?Bt.set(R.x,R.y,R.z,R.w):Bt.set(R,z,K,Y),at.viewport(U.copy(Bt).multiplyScalar(Q).round())},this.getScissor=function(R){return R.copy(se)},this.setScissor=function(R,z,K,Y){R.isVector4?se.set(R.x,R.y,R.z,R.w):se.set(R,z,K,Y),at.scissor(B.copy(se).multiplyScalar(Q).round())},this.getScissorTest=function(){return be},this.setScissorTest=function(R){at.setScissorTest(be=R)},this.setOpaqueSort=function(R){vt=R},this.setTransparentSort=function(R){Lt=R},this.getClearColor=function(R){return R.copy(jt.getClearColor())},this.setClearColor=function(){jt.setClearColor.apply(jt,arguments)},this.getClearAlpha=function(){return jt.getClearAlpha()},this.setClearAlpha=function(){jt.setClearAlpha.apply(jt,arguments)},this.clear=function(R=!0,z=!0,K=!0){let Y=0;if(R){let F=!1;if(P!==null){let Rt=P.texture.format;F=Rt===V0||Rt===G0||Rt===H0}if(F){let Rt=P.texture.type,Ft=Rt===Ki||Rt===Ps||Rt===uo||Rt===br||Rt===F0||Rt===B0,Yt=jt.getClearColor(),Zt=jt.getClearAlpha(),de=Yt.r,me=Yt.g,Kt=Yt.b;Ft?(p[0]=de,p[1]=me,p[2]=Kt,p[3]=Zt,L.clearBufferuiv(L.COLOR,0,p)):(x[0]=de,x[1]=me,x[2]=Kt,x[3]=Zt,L.clearBufferiv(L.COLOR,0,x))}else Y|=L.COLOR_BUFFER_BIT}z&&(Y|=L.DEPTH_BUFFER_BIT),K&&(Y|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ct,!1),e.removeEventListener("webglcontextrestored",It,!1),e.removeEventListener("webglcontextcreationerror",Ut,!1),Ht.dispose(),pe.dispose(),gt.dispose(),S.dispose(),D.dispose(),lt.dispose(),Ne.dispose(),k.dispose(),Wt.dispose(),st.dispose(),st.removeEventListener("sessionstart",xs),st.removeEventListener("sessionend",an),qn.stop()};function ct(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function It(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;let R=Et.autoReset,z=Pt.enabled,K=Pt.autoUpdate,Y=Pt.needsUpdate,F=Pt.type;Nt(),Et.autoReset=R,Pt.enabled=z,Pt.autoUpdate=K,Pt.needsUpdate=Y,Pt.type=F}function Ut(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ce(R){let z=R.target;z.removeEventListener("dispose",ce),Ve(z)}function Ve(R){Xe(R),gt.remove(R)}function Xe(R){let z=gt.get(R).programs;z!==void 0&&(z.forEach(function(K){Wt.releaseProgram(K)}),R.isShaderMaterial&&Wt.releaseShaderCache(R))}this.renderBufferDirect=function(R,z,K,Y,F,Rt){z===null&&(z=Se);let Ft=F.isMesh&&F.matrixWorld.determinant()<0,Yt=ys(R,z,K,Y,F);at.setMaterial(Y,Ft);let Zt=K.index,de=1;if(Y.wireframe===!0){if(Zt=dt.getWireframeAttribute(K),Zt===void 0)return;de=2}let me=K.drawRange,Kt=K.attributes.position,Te=me.start*de,Be=(me.start+me.count)*de;Rt!==null&&(Te=Math.max(Te,Rt.start*de),Be=Math.min(Be,(Rt.start+Rt.count)*de)),Zt!==null?(Te=Math.max(Te,0),Be=Math.min(Be,Zt.count)):Kt!=null&&(Te=Math.max(Te,0),Be=Math.min(Be,Kt.count));let De=Be-Te;if(De<0||De===1/0)return;Ne.setup(F,Y,Yt,K,Zt);let wn,Ae=zt;if(Zt!==null&&(wn=et.get(Zt),Ae=ve,Ae.setIndex(wn)),F.isMesh)Y.wireframe===!0?(at.setLineWidth(Y.wireframeLinewidth*W()),Ae.setMode(L.LINES)):Ae.setMode(L.TRIANGLES);else if(F.isLine){let te=Y.linewidth;te===void 0&&(te=1),at.setLineWidth(te*W()),F.isLineSegments?Ae.setMode(L.LINES):F.isLineLoop?Ae.setMode(L.LINE_LOOP):Ae.setMode(L.LINE_STRIP)}else F.isPoints?Ae.setMode(L.POINTS):F.isSprite&&Ae.setMode(L.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)Ae.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(J.get("WEBGL_multi_draw"))Ae.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{let te=F._multiDrawStarts,fi=F._multiDrawCounts,Oe=F._multiDrawCount,Tn=Zt?et.get(Zt).bytesPerElement:1,hi=gt.get(Y).currentProgram.getUniforms();for(let An=0;An<Oe;An++)hi.setValue(L,"_gl_DrawID",An),Ae.render(te[An]/Tn,fi[An])}else if(F.isInstancedMesh)Ae.renderInstances(Te,De,F.count);else if(K.isInstancedBufferGeometry){let te=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,fi=Math.min(K.instanceCount,te);Ae.renderInstances(Te,De,fi)}else Ae.render(Te,De)};function ue(R,z,K){R.transparent===!0&&R.side===Le&&R.forceSinglePass===!1?(R.side=gn,R.needsUpdate=!0,Ei(R,z,K),R.side=ds,R.needsUpdate=!0,Ei(R,z,K),R.side=Le):Ei(R,z,K)}this.compile=function(R,z,K=null){K===null&&(K=R),m=pe.get(K),m.init(z),y.push(m),K.traverseVisible(function(F){F.isLight&&F.layers.test(z.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),R!==K&&R.traverseVisible(function(F){F.isLight&&F.layers.test(z.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),m.setupLights();let Y=new Set;return R.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;let Rt=F.material;if(Rt)if(Array.isArray(Rt))for(let Ft=0;Ft<Rt.length;Ft++){let Yt=Rt[Ft];ue(Yt,K,F),Y.add(Yt)}else ue(Rt,K,F),Y.add(Rt)}),y.pop(),m=null,Y},this.compileAsync=function(R,z,K=null){let Y=this.compile(R,z,K);return new Promise(F=>{function Rt(){if(Y.forEach(function(Ft){gt.get(Ft).currentProgram.isReady()&&Y.delete(Ft)}),Y.size===0){F(R);return}setTimeout(Rt,10)}J.get("KHR_parallel_shader_compile")!==null?Rt():setTimeout(Rt,10)})};let En=null;function $n(R){En&&En(R)}function xs(){qn.stop()}function an(){qn.start()}let qn=new au;qn.setAnimationLoop($n),typeof self<"u"&&qn.setContext(self),this.setAnimationLoop=function(R){En=R,st.setAnimationLoop(R),R===null?qn.stop():qn.start()},st.addEventListener("sessionstart",xs),st.addEventListener("sessionend",an),this.render=function(R,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(st.cameraAutoUpdate===!0&&st.updateCamera(z),z=st.getCamera()),R.isScene===!0&&R.onBeforeRender(b,R,z,P),m=pe.get(R,y.length),m.init(z),y.push(m),ne.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),ot.setFromProjectionMatrix(ne),Vt=this.localClippingEnabled,yt=Mt.init(this.clippingPlanes,Vt),g=Ht.get(R,_.length),g.init(),_.push(g),st.enabled===!0&&st.isPresenting===!0){let Rt=b.xr.getDepthSensingMesh();Rt!==null&&ss(Rt,z,-1/0,b.sortObjects)}ss(R,z,0,b.sortObjects),g.finish(),b.sortObjects===!0&&g.sort(vt,Lt),ht=st.enabled===!1||st.isPresenting===!1||st.hasDepthSensing()===!1,ht&&jt.addToRenderList(g,R),this.info.render.frame++,yt===!0&&Mt.beginShadows();let K=m.state.shadowsArray;Pt.render(K,R,z),yt===!0&&Mt.endShadows(),this.info.autoReset===!0&&this.info.reset();let Y=g.opaque,F=g.transmissive;if(m.setupLights(),z.isArrayCamera){let Rt=z.cameras;if(F.length>0)for(let Ft=0,Yt=Rt.length;Ft<Yt;Ft++){let Zt=Rt[Ft];un(Y,F,R,Zt)}ht&&jt.render(R);for(let Ft=0,Yt=Rt.length;Ft<Yt;Ft++){let Zt=Rt[Ft];Xr(g,R,Zt,Zt.viewport)}}else F.length>0&&un(Y,F,R,z),ht&&jt.render(R),Xr(g,R,z);P!==null&&(C.updateMultisampleRenderTarget(P),C.updateRenderTargetMipmap(P)),R.isScene===!0&&R.onAfterRender(b,R,z),Ne.resetDefaultState(),E=-1,M=null,y.pop(),y.length>0?(m=y[y.length-1],yt===!0&&Mt.setGlobalState(b.clippingPlanes,m.state.camera)):m=null,_.pop(),_.length>0?g=_[_.length-1]:g=null};function ss(R,z,K,Y){if(R.visible===!1)return;if(R.layers.test(z.layers)){if(R.isGroup)K=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(z);else if(R.isLight)m.pushLight(R),R.castShadow&&m.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||ot.intersectsSprite(R)){Y&&ie.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ne);let Ft=lt.update(R),Yt=R.material;Yt.visible&&g.push(R,Ft,Yt,K,ie.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||ot.intersectsObject(R))){let Ft=lt.update(R),Yt=R.material;if(Y&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),ie.copy(R.boundingSphere.center)):(Ft.boundingSphere===null&&Ft.computeBoundingSphere(),ie.copy(Ft.boundingSphere.center)),ie.applyMatrix4(R.matrixWorld).applyMatrix4(ne)),Array.isArray(Yt)){let Zt=Ft.groups;for(let de=0,me=Zt.length;de<me;de++){let Kt=Zt[de],Te=Yt[Kt.materialIndex];Te&&Te.visible&&g.push(R,Ft,Te,K,ie.z,Kt)}}else Yt.visible&&g.push(R,Ft,Yt,K,ie.z,null)}}let Rt=R.children;for(let Ft=0,Yt=Rt.length;Ft<Yt;Ft++)ss(Rt[Ft],z,K,Y)}function Xr(R,z,K,Y){let F=R.opaque,Rt=R.transmissive,Ft=R.transparent;m.setupLightsView(K),yt===!0&&Mt.setGlobalState(b.clippingPlanes,K),Y&&at.viewport(U.copy(Y)),F.length>0&&Zn(F,z,K),Rt.length>0&&Zn(Rt,z,K),Ft.length>0&&Zn(Ft,z,K),at.buffers.depth.setTest(!0),at.buffers.depth.setMask(!0),at.buffers.color.setMask(!0),at.setPolygonOffset(!1)}function un(R,z,K,Y){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[Y.id]===void 0&&(m.state.transmissionRenderTarget[Y.id]=new Ji(1,1,{generateMipmaps:!0,type:J.has("EXT_color_buffer_half_float")||J.has("EXT_color_buffer_float")?Ao:Ki,minFilter:Xi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Pe.workingColorSpace}));let Rt=m.state.transmissionRenderTarget[Y.id],Ft=Y.viewport||U;Rt.setSize(Ft.z,Ft.w);let Yt=b.getRenderTarget();b.setRenderTarget(Rt),b.getClearColor(H),rt=b.getClearAlpha(),rt<1&&b.setClearColor(16777215,.5),b.clear(),ht&&jt.render(K);let Zt=b.toneMapping;b.toneMapping=us;let de=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),m.setupLightsView(Y),yt===!0&&Mt.setGlobalState(b.clippingPlanes,Y),Zn(R,K,Y),C.updateMultisampleRenderTarget(Rt),C.updateRenderTargetMipmap(Rt),J.has("WEBGL_multisampled_render_to_texture")===!1){let me=!1;for(let Kt=0,Te=z.length;Kt<Te;Kt++){let Be=z[Kt],De=Be.object,wn=Be.geometry,Ae=Be.material,te=Be.group;if(Ae.side===Le&&De.layers.test(Y.layers)){let fi=Ae.side;Ae.side=gn,Ae.needsUpdate=!0,Hs(De,K,Y,wn,Ae,te),Ae.side=fi,Ae.needsUpdate=!0,me=!0}}me===!0&&(C.updateMultisampleRenderTarget(Rt),C.updateRenderTargetMipmap(Rt))}b.setRenderTarget(Yt),b.setClearColor(H,rt),de!==void 0&&(Y.viewport=de),b.toneMapping=Zt}function Zn(R,z,K){let Y=z.isScene===!0?z.overrideMaterial:null;for(let F=0,Rt=R.length;F<Rt;F++){let Ft=R[F],Yt=Ft.object,Zt=Ft.geometry,de=Y===null?Ft.material:Y,me=Ft.group;Yt.layers.test(K.layers)&&Hs(Yt,z,K,Zt,de,me)}}function Hs(R,z,K,Y,F,Rt){R.onBeforeRender(b,z,K,Y,F,Rt),R.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),F.onBeforeRender(b,z,K,Y,R,Rt),F.transparent===!0&&F.side===Le&&F.forceSinglePass===!1?(F.side=gn,F.needsUpdate=!0,b.renderBufferDirect(K,z,Y,F,R,Rt),F.side=ds,F.needsUpdate=!0,b.renderBufferDirect(K,z,Y,F,R,Rt),F.side=Le):b.renderBufferDirect(K,z,Y,F,R,Rt),R.onAfterRender(b,z,K,Y,F,Rt)}function Ei(R,z,K){z.isScene!==!0&&(z=Se);let Y=gt.get(R),F=m.state.lights,Rt=m.state.shadowsArray,Ft=F.state.version,Yt=Wt.getParameters(R,F.state,Rt,z,K),Zt=Wt.getProgramCacheKey(Yt),de=Y.programs;Y.environment=R.isMeshStandardMaterial?z.environment:null,Y.fog=z.fog,Y.envMap=(R.isMeshStandardMaterial?D:S).get(R.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&R.envMap===null?z.environmentRotation:R.envMapRotation,de===void 0&&(R.addEventListener("dispose",ce),de=new Map,Y.programs=de);let me=de.get(Zt);if(me!==void 0){if(Y.currentProgram===me&&Y.lightsStateVersion===Ft)return Gs(R,Yt),me}else Yt.uniforms=Wt.getUniforms(R),R.onBeforeCompile(Yt,b),me=Wt.acquireProgram(Yt,Zt),de.set(Zt,me),Y.uniforms=Yt.uniforms;let Kt=Y.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Kt.clippingPlanes=Mt.uniform),Gs(R,Yt),Y.needsLights=Vo(R),Y.lightsStateVersion=Ft,Y.needsLights&&(Kt.ambientLightColor.value=F.state.ambient,Kt.lightProbe.value=F.state.probe,Kt.directionalLights.value=F.state.directional,Kt.directionalLightShadows.value=F.state.directionalShadow,Kt.spotLights.value=F.state.spot,Kt.spotLightShadows.value=F.state.spotShadow,Kt.rectAreaLights.value=F.state.rectArea,Kt.ltc_1.value=F.state.rectAreaLTC1,Kt.ltc_2.value=F.state.rectAreaLTC2,Kt.pointLights.value=F.state.point,Kt.pointLightShadows.value=F.state.pointShadow,Kt.hemisphereLights.value=F.state.hemi,Kt.directionalShadowMap.value=F.state.directionalShadowMap,Kt.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Kt.spotShadowMap.value=F.state.spotShadowMap,Kt.spotLightMatrix.value=F.state.spotLightMatrix,Kt.spotLightMap.value=F.state.spotLightMap,Kt.pointShadowMap.value=F.state.pointShadowMap,Kt.pointShadowMatrix.value=F.state.pointShadowMatrix),Y.currentProgram=me,Y.uniformsList=null,me}function Je(R){if(R.uniformsList===null){let z=R.currentProgram.getUniforms();R.uniformsList=gr.seqWithValue(z.seq,R.uniforms)}return R.uniformsList}function Gs(R,z){let K=gt.get(R);K.outputColorSpace=z.outputColorSpace,K.batching=z.batching,K.batchingColor=z.batchingColor,K.instancing=z.instancing,K.instancingColor=z.instancingColor,K.instancingMorph=z.instancingMorph,K.skinning=z.skinning,K.morphTargets=z.morphTargets,K.morphNormals=z.morphNormals,K.morphColors=z.morphColors,K.morphTargetsCount=z.morphTargetsCount,K.numClippingPlanes=z.numClippingPlanes,K.numIntersection=z.numClipIntersection,K.vertexAlphas=z.vertexAlphas,K.vertexTangents=z.vertexTangents,K.toneMapping=z.toneMapping}function ys(R,z,K,Y,F){z.isScene!==!0&&(z=Se),C.resetTextureUnits();let Rt=z.fog,Ft=Y.isMeshStandardMaterial?z.environment:null,Yt=P===null?b.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Dr,Zt=(Y.isMeshStandardMaterial?D:S).get(Y.envMap||Ft),de=Y.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,me=!!K.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Kt=!!K.morphAttributes.position,Te=!!K.morphAttributes.normal,Be=!!K.morphAttributes.color,De=us;Y.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(De=b.toneMapping);let wn=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Ae=wn!==void 0?wn.length:0,te=gt.get(Y),fi=m.state.lights;if(yt===!0&&(Vt===!0||R!==M)){let Bn=R===M&&Y.id===E;Mt.setState(Y,R,Bn)}let Oe=!1;Y.version===te.__version?(te.needsLights&&te.lightsStateVersion!==fi.state.version||te.outputColorSpace!==Yt||F.isBatchedMesh&&te.batching===!1||!F.isBatchedMesh&&te.batching===!0||F.isBatchedMesh&&te.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&te.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&te.instancing===!1||!F.isInstancedMesh&&te.instancing===!0||F.isSkinnedMesh&&te.skinning===!1||!F.isSkinnedMesh&&te.skinning===!0||F.isInstancedMesh&&te.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&te.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&te.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&te.instancingMorph===!1&&F.morphTexture!==null||te.envMap!==Zt||Y.fog===!0&&te.fog!==Rt||te.numClippingPlanes!==void 0&&(te.numClippingPlanes!==Mt.numPlanes||te.numIntersection!==Mt.numIntersection)||te.vertexAlphas!==de||te.vertexTangents!==me||te.morphTargets!==Kt||te.morphNormals!==Te||te.morphColors!==Be||te.toneMapping!==De||te.morphTargetsCount!==Ae)&&(Oe=!0):(Oe=!0,te.__version=Y.version);let Tn=te.currentProgram;Oe===!0&&(Tn=Ei(Y,z,F));let hi=!1,An=!1,_s=!1,Ye=Tn.getUniforms(),ii=te.uniforms;if(at.useProgram(Tn.program)&&(hi=!0,An=!0,_s=!0),Y.id!==E&&(E=Y.id,An=!0),hi||M!==R){at.buffers.depth.getReversed()?(At.copy(R.projectionMatrix),_p(At),bp(At),Ye.setValue(L,"projectionMatrix",At)):Ye.setValue(L,"projectionMatrix",R.projectionMatrix),Ye.setValue(L,"viewMatrix",R.matrixWorldInverse);let wi=Ye.map.cameraPosition;wi!==void 0&&wi.setValue(L,le.setFromMatrixPosition(R.matrixWorld)),tt.logarithmicDepthBuffer&&Ye.setValue(L,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Ye.setValue(L,"isOrthographic",R.isOrthographicCamera===!0),M!==R&&(M=R,An=!0,_s=!0)}if(F.isSkinnedMesh){Ye.setOptional(L,F,"bindMatrix"),Ye.setOptional(L,F,"bindMatrixInverse");let Bn=F.skeleton;Bn&&(Bn.boneTexture===null&&Bn.computeBoneTexture(),Ye.setValue(L,"boneTexture",Bn.boneTexture,C))}F.isBatchedMesh&&(Ye.setOptional(L,F,"batchingTexture"),Ye.setValue(L,"batchingTexture",F._matricesTexture,C),Ye.setOptional(L,F,"batchingIdTexture"),Ye.setValue(L,"batchingIdTexture",F._indirectTexture,C),Ye.setOptional(L,F,"batchingColorTexture"),F._colorsTexture!==null&&Ye.setValue(L,"batchingColorTexture",F._colorsTexture,C));let bs=K.morphAttributes;if((bs.position!==void 0||bs.normal!==void 0||bs.color!==void 0)&&fe.update(F,K,Tn),(An||te.receiveShadow!==F.receiveShadow)&&(te.receiveShadow=F.receiveShadow,Ye.setValue(L,"receiveShadow",F.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(ii.envMap.value=Zt,ii.flipEnvMap.value=Zt.isCubeTexture&&Zt.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&z.environment!==null&&(ii.envMapIntensity.value=z.environmentIntensity),An&&(Ye.setValue(L,"toneMappingExposure",b.toneMappingExposure),te.needsLights&&ni(ii,_s),Rt&&Y.fog===!0&&Ot.refreshFogUniforms(ii,Rt),Ot.refreshMaterialUniforms(ii,Y,Q,pt,m.state.transmissionRenderTarget[R.id]),gr.upload(L,Je(te),ii,C)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(gr.upload(L,Je(te),ii,C),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Ye.setValue(L,"center",F.center),Ye.setValue(L,"modelViewMatrix",F.modelViewMatrix),Ye.setValue(L,"normalMatrix",F.normalMatrix),Ye.setValue(L,"modelMatrix",F.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){let Bn=Y.uniformsGroups;for(let wi=0,Rn=Bn.length;wi<Rn;wi++){let vs=Bn[wi];k.update(vs,Tn),k.bind(vs,Tn)}}return Tn}function ni(R,z){R.ambientLightColor.needsUpdate=z,R.lightProbe.needsUpdate=z,R.directionalLights.needsUpdate=z,R.directionalLightShadows.needsUpdate=z,R.pointLights.needsUpdate=z,R.pointLightShadows.needsUpdate=z,R.spotLights.needsUpdate=z,R.spotLightShadows.needsUpdate=z,R.rectAreaLights.needsUpdate=z,R.hemisphereLights.needsUpdate=z}function Vo(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(R,z,K){gt.get(R.texture).__webglTexture=z,gt.get(R.depthTexture).__webglTexture=K;let Y=gt.get(R);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=K===void 0,Y.__autoAllocateDepthBuffer||J.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,z){let K=gt.get(R);K.__webglFramebuffer=z,K.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(R,z=0,K=0){P=R,A=z,T=K;let Y=!0,F=null,Rt=!1,Ft=!1;if(R){let Zt=gt.get(R);if(Zt.__useDefaultFramebuffer!==void 0)at.bindFramebuffer(L.FRAMEBUFFER,null),Y=!1;else if(Zt.__webglFramebuffer===void 0)C.setupRenderTarget(R);else if(Zt.__hasExternalTextures)C.rebindTextures(R,gt.get(R.texture).__webglTexture,gt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let Kt=R.depthTexture;if(Zt.__boundDepthTexture!==Kt){if(Kt!==null&&gt.has(Kt)&&(R.width!==Kt.image.width||R.height!==Kt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(R)}}let de=R.texture;(de.isData3DTexture||de.isDataArrayTexture||de.isCompressedArrayTexture)&&(Ft=!0);let me=gt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(me[z])?F=me[z][K]:F=me[z],Rt=!0):R.samples>0&&C.useMultisampledRTT(R)===!1?F=gt.get(R).__webglMultisampledFramebuffer:Array.isArray(me)?F=me[K]:F=me,U.copy(R.viewport),B.copy(R.scissor),V=R.scissorTest}else U.copy(Bt).multiplyScalar(Q).floor(),B.copy(se).multiplyScalar(Q).floor(),V=be;if(at.bindFramebuffer(L.FRAMEBUFFER,F)&&Y&&at.drawBuffers(R,F),at.viewport(U),at.scissor(B),at.setScissorTest(V),Rt){let Zt=gt.get(R.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+z,Zt.__webglTexture,K)}else if(Ft){let Zt=gt.get(R.texture),de=z||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Zt.__webglTexture,K||0,de)}E=-1},this.readRenderTargetPixels=function(R,z,K,Y,F,Rt,Ft){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Yt=gt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ft!==void 0&&(Yt=Yt[Ft]),Yt){at.bindFramebuffer(L.FRAMEBUFFER,Yt);try{let Zt=R.texture,de=Zt.format,me=Zt.type;if(!tt.textureFormatReadable(de)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!tt.textureTypeReadable(me)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=R.width-Y&&K>=0&&K<=R.height-F&&L.readPixels(z,K,Y,F,$t.convert(de),$t.convert(me),Rt)}finally{let Zt=P!==null?gt.get(P).__webglFramebuffer:null;at.bindFramebuffer(L.FRAMEBUFFER,Zt)}}},this.readRenderTargetPixelsAsync=async function(R,z,K,Y,F,Rt,Ft){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Yt=gt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ft!==void 0&&(Yt=Yt[Ft]),Yt){let Zt=R.texture,de=Zt.format,me=Zt.type;if(!tt.textureFormatReadable(de))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!tt.textureTypeReadable(me))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(z>=0&&z<=R.width-Y&&K>=0&&K<=R.height-F){at.bindFramebuffer(L.FRAMEBUFFER,Yt);let Kt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Kt),L.bufferData(L.PIXEL_PACK_BUFFER,Rt.byteLength,L.STREAM_READ),L.readPixels(z,K,Y,F,$t.convert(de),$t.convert(me),0);let Te=P!==null?gt.get(P).__webglFramebuffer:null;at.bindFramebuffer(L.FRAMEBUFFER,Te);let Be=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await yp(L,Be,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Kt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,Rt),L.deleteBuffer(Kt),L.deleteSync(Be),Rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,z=null,K=0){R.isTexture!==!0&&(ro("WebGLRenderer: copyFramebufferToTexture function signature has changed."),z=arguments[0]||null,R=arguments[1]);let Y=Math.pow(2,-K),F=Math.floor(R.image.width*Y),Rt=Math.floor(R.image.height*Y),Ft=z!==null?z.x:0,Yt=z!==null?z.y:0;C.setTexture2D(R,0),L.copyTexSubImage2D(L.TEXTURE_2D,K,0,0,Ft,Yt,F,Rt),at.unbindTexture()},this.copyTextureToTexture=function(R,z,K=null,Y=null,F=0){R.isTexture!==!0&&(ro("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,R=arguments[1],z=arguments[2],F=arguments[3]||0,K=null);let Rt,Ft,Yt,Zt,de,me,Kt,Te,Be,De=R.isCompressedTexture?R.mipmaps[F]:R.image;K!==null?(Rt=K.max.x-K.min.x,Ft=K.max.y-K.min.y,Yt=K.isBox3?K.max.z-K.min.z:1,Zt=K.min.x,de=K.min.y,me=K.isBox3?K.min.z:0):(Rt=De.width,Ft=De.height,Yt=De.depth||1,Zt=0,de=0,me=0),Y!==null?(Kt=Y.x,Te=Y.y,Be=Y.z):(Kt=0,Te=0,Be=0);let wn=$t.convert(z.format),Ae=$t.convert(z.type),te;z.isData3DTexture?(C.setTexture3D(z,0),te=L.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(C.setTexture2DArray(z,0),te=L.TEXTURE_2D_ARRAY):(C.setTexture2D(z,0),te=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,z.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,z.unpackAlignment);let fi=L.getParameter(L.UNPACK_ROW_LENGTH),Oe=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Tn=L.getParameter(L.UNPACK_SKIP_PIXELS),hi=L.getParameter(L.UNPACK_SKIP_ROWS),An=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,De.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,De.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Zt),L.pixelStorei(L.UNPACK_SKIP_ROWS,de),L.pixelStorei(L.UNPACK_SKIP_IMAGES,me);let _s=R.isDataArrayTexture||R.isData3DTexture,Ye=z.isDataArrayTexture||z.isData3DTexture;if(R.isRenderTargetTexture||R.isDepthTexture){let ii=gt.get(R),bs=gt.get(z),Bn=gt.get(ii.__renderTarget),wi=gt.get(bs.__renderTarget);at.bindFramebuffer(L.READ_FRAMEBUFFER,Bn.__webglFramebuffer),at.bindFramebuffer(L.DRAW_FRAMEBUFFER,wi.__webglFramebuffer);for(let Rn=0;Rn<Yt;Rn++)_s&&L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,gt.get(R).__webglTexture,F,me+Rn),R.isDepthTexture?(Ye&&L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,gt.get(z).__webglTexture,F,Be+Rn),L.blitFramebuffer(Zt,de,Rt,Ft,Kt,Te,Rt,Ft,L.DEPTH_BUFFER_BIT,L.NEAREST)):Ye?L.copyTexSubImage3D(te,F,Kt,Te,Be+Rn,Zt,de,Rt,Ft):L.copyTexSubImage2D(te,F,Kt,Te,Be+Rn,Zt,de,Rt,Ft);at.bindFramebuffer(L.READ_FRAMEBUFFER,null),at.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Ye?R.isDataTexture||R.isData3DTexture?L.texSubImage3D(te,F,Kt,Te,Be,Rt,Ft,Yt,wn,Ae,De.data):z.isCompressedArrayTexture?L.compressedTexSubImage3D(te,F,Kt,Te,Be,Rt,Ft,Yt,wn,De.data):L.texSubImage3D(te,F,Kt,Te,Be,Rt,Ft,Yt,wn,Ae,De):R.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,F,Kt,Te,Rt,Ft,wn,Ae,De.data):R.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,F,Kt,Te,De.width,De.height,wn,De.data):L.texSubImage2D(L.TEXTURE_2D,F,Kt,Te,Rt,Ft,wn,Ae,De);L.pixelStorei(L.UNPACK_ROW_LENGTH,fi),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Oe),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Tn),L.pixelStorei(L.UNPACK_SKIP_ROWS,hi),L.pixelStorei(L.UNPACK_SKIP_IMAGES,An),F===0&&z.generateMipmaps&&L.generateMipmap(te),at.unbindTexture()},this.copyTextureToTexture3D=function(R,z,K=null,Y=null,F=0){return R.isTexture!==!0&&(ro("WebGLRenderer: copyTextureToTexture3D function signature has changed."),K=arguments[0]||null,Y=arguments[1]||null,R=arguments[2],z=arguments[3],F=arguments[4]||0),ro('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,z,K,Y,F)},this.initRenderTarget=function(R){gt.get(R).__webglFramebuffer===void 0&&C.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?C.setTextureCube(R,0):R.isData3DTexture?C.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?C.setTexture2DArray(R,0):C.setTexture2D(R,0),at.unbindTexture()},this.resetState=function(){A=0,T=0,P=null,at.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Pe._getDrawingBufferColorSpace(t),e.unpackColorSpace=Pe._getUnpackColorSpace()}},Rr=class n{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Jt(t),this.density=e}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Cr=class extends sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new yn,this.environmentIntensity=1,this.environmentRotation=new yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Va=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=$c,this.updateRanges=[],this.version=0,this.uuid=Ci()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ci()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ci()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Nn=new N,go=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Nn.fromBufferAttribute(this,e),Nn.applyMatrix4(t),this.setXYZ(e,Nn.x,Nn.y,Nn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Nn.fromBufferAttribute(this,e),Nn.applyNormalMatrix(t),this.setXYZ(e,Nn.x,Nn.y,Nn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Nn.fromBufferAttribute(this,e),Nn.transformDirection(t),this.setXYZ(e,Nn.x,Nn.y,Nn.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=gi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=He(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=He(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=He(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=He(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=He(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=gi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=gi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=gi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=gi(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=He(e,this.array),i=He(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=He(e,this.array),i=He(i,this.array),s=He(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=He(e,this.array),i=He(i,this.array),s=He(s,this.array),r=He(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ze(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Ir=class extends Ii{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Jt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},rr,jr=new N,or=new N,ar=new N,lr=new bt,Qr=new bt,uu=new oe,pa=new N,to=new N,ma=new N,Th=new bt,tc=new bt,Ah=new bt,xo=class extends sn{constructor(t=new Ir){if(super(),this.isSprite=!0,this.type="Sprite",rr===void 0){rr=new Ue;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Va(e,5);rr.setIndex([0,1,2,0,2,3]),rr.setAttribute("position",new go(i,3,0,!1)),rr.setAttribute("uv",new go(i,2,3,!1))}this.geometry=rr,this.material=t,this.center=new bt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),or.setFromMatrixScale(this.matrixWorld),uu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ar.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&or.multiplyScalar(-ar.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;ga(pa.set(-.5,-.5,0),ar,o,or,s,r),ga(to.set(.5,-.5,0),ar,o,or,s,r),ga(ma.set(.5,.5,0),ar,o,or,s,r),Th.set(0,0),tc.set(1,0),Ah.set(1,1);let a=t.ray.intersectTriangle(pa,to,ma,!1,jr);if(a===null&&(ga(to.set(-.5,.5,0),ar,o,or,s,r),tc.set(0,1),a=t.ray.intersectTriangle(pa,ma,to,!1,jr),a===null))return;let l=t.ray.origin.distanceTo(jr);l<t.near||l>t.far||e.push({distance:l,point:jr.clone(),uv:Vi.getInterpolation(jr,pa,to,ma,Th,tc,Ah,new bt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function ga(n,t,e,i,s,r){lr.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(Qr.x=r*lr.x-s*lr.y,Qr.y=s*lr.x+r*lr.y):Qr.copy(lr),n.copy(t),n.x+=Qr.x,n.y+=Qr.y,n.applyMatrix4(uu)}var h0=class extends Hn{constructor(t=null,e=1,i=1,s,r,o,a,l,c=jn,f=jn,u,h){super(null,o,a,l,c,f,s,r,u,h),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var yo=class extends Ze{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},cr=new oe,Rh=new oe,xa=[],Ch=new Un,px=new oe,eo=new Xt,no=new ji,Wa=class extends Xt{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new yo(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,px)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Un),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,cr),Ch.copy(t.boundingBox).applyMatrix4(cr),this.boundingBox.union(Ch)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ji),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,cr),no.copy(t.boundingSphere).applyMatrix4(cr),this.boundingSphere.union(no)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(t,e){let i=this.matrixWorld,s=this.count;if(eo.geometry=this.geometry,eo.material=this.material,eo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),no.copy(this.boundingSphere),no.applyMatrix4(i),t.ray.intersectsSphere(no)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,cr),Rh.multiplyMatrices(i,cr),eo.matrixWorld=Rh,eo.raycast(t,xa);for(let o=0,a=xa.length;o<a;o++){let l=xa[o];l.instanceId=r,l.object=this,e.push(l)}xa.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new yo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new h0(new Float32Array(s*this.count),s,this.count,z0,Ri));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Ls=class extends Ii{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Jt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Xa=new N,Ya=new N,Ih=new oe,io=new Sr,ya=new ji,ec=new N,Ph=new N,u0=class extends sn{constructor(t=new Ue,e=new Ls){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)Xa.fromBufferAttribute(e,s-1),Ya.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=Xa.distanceTo(Ya);t.setAttribute("lineDistance",new he(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ya.copy(i.boundingSphere),ya.applyMatrix4(s),ya.radius+=r,t.ray.intersectsSphere(ya)===!1)return;Ih.copy(s).invert(),io.copy(t.ray).applyMatrix4(Ih);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,f=i.index,h=i.attributes.position;if(f!==null){let d=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let x=d,g=p-1;x<g;x+=c){let m=f.getX(x),_=f.getX(x+1),y=_a(this,t,io,l,m,_);y&&e.push(y)}if(this.isLineLoop){let x=f.getX(p-1),g=f.getX(d),m=_a(this,t,io,l,x,g);m&&e.push(m)}}else{let d=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let x=d,g=p-1;x<g;x+=c){let m=_a(this,t,io,l,x,x+1);m&&e.push(m)}if(this.isLineLoop){let x=_a(this,t,io,l,p-1,d);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function _a(n,t,e,i,s,r){let o=n.geometry.attributes.position;if(Xa.fromBufferAttribute(o,s),Ya.fromBufferAttribute(o,r),e.distanceSqToSegment(Xa,Ya,ec,Ph)>i)return;ec.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(ec);if(!(l<t.near||l>t.far))return{distance:l,point:Ph.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}var Lh=new N,Nh=new N,Ns=class extends u0{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)Lh.fromBufferAttribute(e,s),Nh.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Lh.distanceTo(Nh);t.setAttribute("lineDistance",new he(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var d0=class extends Ii{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Jt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Oh=new oe,p0=new Sr,ba=new ji,va=new N,$a=class extends sn{constructor(t=new Ue,e=new d0){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ba.copy(i.boundingSphere),ba.applyMatrix4(s),ba.radius+=r,t.ray.intersectsSphere(ba)===!1)return;Oh.copy(s).invert(),p0.copy(t.ray).applyMatrix4(Oh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,u=i.attributes.position;if(c!==null){let h=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let p=h,x=d;p<x;p++){let g=c.getX(p);va.fromBufferAttribute(u,g),Uh(va,g,l,s,t,e,this)}}else{let h=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let p=h,x=d;p<x;p++)va.fromBufferAttribute(u,p),Uh(va,p,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Uh(n,t,e,i,s,r,o){let a=p0.distanceSqToPoint(n);if(a<e){let l=new N;p0.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Dn=class extends Hn{constructor(t,e,i,s,r,o,a,l,c){super(t,e,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},oi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let i=this.getLengths(),s=0,r=i.length,o;e?o=e:o=t*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let f=i[s],h=i[s+1]-f,d=(o-f)/h;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new bt:new N);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){let i=new N,s=[],r=[],o=[],a=new N,l=new oe;for(let d=0;d<=t;d++){let p=d/t;s[d]=this.getTangentAt(p,new N)}r[0]=new N,o[0]=new N;let c=Number.MAX_VALUE,f=Math.abs(s[0].x),u=Math.abs(s[0].y),h=Math.abs(s[0].z);f<=c&&(c=f,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),h<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(mn(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,p))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(mn(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],d*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},_o=class extends oi{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new bt){let i=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let f=Math.cos(this.aRotation),u=Math.sin(this.aRotation),h=l-this.aX,d=c-this.aY;l=h*f-d*u+this.aX,c=h*u+d*f+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},m0=class extends _o{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Y0(){let n=0,t=0,e=0,i=0;function s(r,o,a,l){n=r,t=a,e=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,f,u){let h=(o-r)/c-(a-r)/(c+f)+(a-o)/f,d=(a-o)/f-(l-o)/(f+u)+(l-a)/u;h*=f,d*=f,s(o,a,h,d)},calc:function(r){let o=r*r,a=o*r;return n+t*r+e*o+i*a}}}var Ma=new N,nc=new Y0,ic=new Y0,sc=new Y0,Pr=class extends oi{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new N){let i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,f;this.closed||a>0?c=s[(a-1)%r]:(Ma.subVectors(s[0],s[1]).add(s[0]),c=Ma);let u=s[a%r],h=s[(a+1)%r];if(this.closed||a+2<r?f=s[(a+2)%r]:(Ma.subVectors(s[r-1],s[r-2]).add(s[r-1]),f=Ma),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(u),d),x=Math.pow(u.distanceToSquared(h),d),g=Math.pow(h.distanceToSquared(f),d);x<1e-4&&(x=1),p<1e-4&&(p=x),g<1e-4&&(g=x),nc.initNonuniformCatmullRom(c.x,u.x,h.x,f.x,p,x,g),ic.initNonuniformCatmullRom(c.y,u.y,h.y,f.y,p,x,g),sc.initNonuniformCatmullRom(c.z,u.z,h.z,f.z,p,x,g)}else this.curveType==="catmullrom"&&(nc.initCatmullRom(c.x,u.x,h.x,f.x,this.tension),ic.initCatmullRom(c.y,u.y,h.y,f.y,this.tension),sc.initCatmullRom(c.z,u.z,h.z,f.z,this.tension));return i.set(nc.calc(l),ic.calc(l),sc.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new N().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Dh(n,t,e,i,s){let r=(i-t)*.5,o=(s-e)*.5,a=n*n,l=n*a;return(2*e-2*i+r+o)*l+(-3*e+3*i-2*r-o)*a+r*n+e}function mx(n,t){let e=1-n;return e*e*t}function gx(n,t){return 2*(1-n)*n*t}function xx(n,t){return n*n*t}function co(n,t,e,i){return mx(n,t)+gx(n,e)+xx(n,i)}function yx(n,t){let e=1-n;return e*e*e*t}function _x(n,t){let e=1-n;return 3*e*e*n*t}function bx(n,t){return 3*(1-n)*n*n*t}function vx(n,t){return n*n*n*t}function fo(n,t,e,i,s){return yx(n,t)+_x(n,e)+bx(n,i)+vx(n,s)}var qa=class extends oi{constructor(t=new bt,e=new bt,i=new bt,s=new bt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new bt){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(fo(t,s.x,r.x,o.x,a.x),fo(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},g0=class extends oi{constructor(t=new N,e=new N,i=new N,s=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new N){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(fo(t,s.x,r.x,o.x,a.x),fo(t,s.y,r.y,o.y,a.y),fo(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Za=class extends oi{constructor(t=new bt,e=new bt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new bt){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new bt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},x0=class extends oi{constructor(t=new N,e=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new N){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new N){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ka=class extends oi{constructor(t=new bt,e=new bt,i=new bt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new bt){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(co(t,s.x,r.x,o.x),co(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ja=class extends oi{constructor(t=new N,e=new N,i=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new N){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(co(t,s.x,r.x,o.x),co(t,s.y,r.y,o.y),co(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ja=class extends oi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new bt){let i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],f=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set(Dh(a,l.x,c.x,f.x,u.x),Dh(a,l.y,c.y,f.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new bt().fromArray(s))}return this}},Qa=Object.freeze({__proto__:null,ArcCurve:m0,CatmullRomCurve3:Pr,CubicBezierCurve:qa,CubicBezierCurve3:g0,EllipseCurve:_o,LineCurve:Za,LineCurve3:x0,QuadraticBezierCurve:Ka,QuadraticBezierCurve3:Ja,SplineCurve:ja}),y0=class extends oi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Qa[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let f=l[c];i&&i.equals(f)||(e.push(f),i=f)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(new Qa[s.type]().fromJSON(s))}return this}},tl=class extends y0{constructor(t){super(),this.type="Path",this.currentPoint=new bt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new Za(this.currentPoint.clone(),new bt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){let r=new Ka(this.currentPoint.clone(),new bt(t,e),new bt(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,o){let a=new qa(this.currentPoint.clone(),new bt(t,e),new bt(i,s),new bt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new ja(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,s,r,o),this}absarc(t,e,i,s,r,o){return this.absellipse(t,e,i,i,s,r,o),this}ellipse(t,e,i,s,r,o,a,l){let c=this.currentPoint.x,f=this.currentPoint.y;return this.absellipse(t+c,e+f,i,s,r,o,a,l),this}absellipse(t,e,i,s,r,o,a,l){let c=new _o(t,e,i,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let f=c.getPoint(1);return this.currentPoint.copy(f),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},el=class n extends Ue{constructor(t=[new bt(0,-.5),new bt(.5,0),new bt(0,.5)],e=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:s},e=Math.floor(e),s=mn(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],f=1/e,u=new N,h=new bt,d=new N,p=new N,x=new N,g=0,m=0;for(let _=0;_<=t.length-1;_++)switch(_){case 0:g=t[_+1].x-t[_].x,m=t[_+1].y-t[_].y,d.x=m*1,d.y=-g,d.z=m*0,x.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:g=t[_+1].x-t[_].x,m=t[_+1].y-t[_].y,d.x=m*1,d.y=-g,d.z=m*0,p.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),l.push(d.x,d.y,d.z),x.copy(p)}for(let _=0;_<=e;_++){let y=i+_*f*s,b=Math.sin(y),I=Math.cos(y);for(let A=0;A<=t.length-1;A++){u.x=t[A].x*b,u.y=t[A].y,u.z=t[A].x*I,o.push(u.x,u.y,u.z),h.x=_/e,h.y=A/(t.length-1),a.push(h.x,h.y);let T=l[3*A+0]*b,P=l[3*A+1],E=l[3*A+0]*I;c.push(T,P,E)}}for(let _=0;_<e;_++)for(let y=0;y<t.length-1;y++){let b=y+_*t.length,I=b,A=b+t.length,T=b+t.length+1,P=b+1;r.push(I,A,P),r.push(T,P,A)}this.setIndex(r),this.setAttribute("position",new he(o,3)),this.setAttribute("uv",new he(a,2)),this.setAttribute("normal",new he(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.points,t.segments,t.phiStart,t.phiLength)}};var bo=class n extends Ue{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new N,f=new bt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,h=3;u<=e;u++,h+=3){let d=i+u/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),f.x=(o[h]/t+1)/2,f.y=(o[h+1]/t+1)/2,l.push(f.x,f.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new he(o,3)),this.setAttribute("normal",new he(a,3)),this.setAttribute("uv",new he(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Qi=class n extends Ue{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let f=[],u=[],h=[],d=[],p=0,x=[],g=i/2,m=0;_(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(f),this.setAttribute("position",new he(u,3)),this.setAttribute("normal",new he(h,3)),this.setAttribute("uv",new he(d,2));function _(){let b=new N,I=new N,A=0,T=(e-t)/i;for(let P=0;P<=r;P++){let E=[],M=P/r,U=M*(e-t)+t;for(let B=0;B<=s;B++){let V=B/s,H=V*l+a,rt=Math.sin(H),$=Math.cos(H);I.x=U*rt,I.y=-M*i+g,I.z=U*$,u.push(I.x,I.y,I.z),b.set(rt,T,$).normalize(),h.push(b.x,b.y,b.z),d.push(V,1-M),E.push(p++)}x.push(E)}for(let P=0;P<s;P++)for(let E=0;E<r;E++){let M=x[E][P],U=x[E+1][P],B=x[E+1][P+1],V=x[E][P+1];(t>0||E!==0)&&(f.push(M,U,V),A+=3),(e>0||E!==r-1)&&(f.push(U,B,V),A+=3)}c.addGroup(m,A,0),m+=A}function y(b){let I=p,A=new bt,T=new N,P=0,E=b===!0?t:e,M=b===!0?1:-1;for(let B=1;B<=s;B++)u.push(0,g*M,0),h.push(0,M,0),d.push(.5,.5),p++;let U=p;for(let B=0;B<=s;B++){let H=B/s*l+a,rt=Math.cos(H),$=Math.sin(H);T.x=E*$,T.y=g*M,T.z=E*rt,u.push(T.x,T.y,T.z),h.push(0,M,0),A.x=rt*.5+.5,A.y=$*.5*M+.5,d.push(A.x,A.y),p++}for(let B=0;B<s;B++){let V=I+B,H=U+B;b===!0?f.push(H,H+1,V):f.push(H+1,H,V),P+=3}c.addGroup(m,P,b===!0?1:2),m+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Sa=new N,Ea=new N,rc=new N,wa=new Vi,Lr=class extends Ue{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let s=Math.pow(10,4),r=Math.cos(pr*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],f=["a","b","c"],u=new Array(3),h={},d=[];for(let p=0;p<l;p+=3){o?(c[0]=o.getX(p),c[1]=o.getX(p+1),c[2]=o.getX(p+2)):(c[0]=p,c[1]=p+1,c[2]=p+2);let{a:x,b:g,c:m}=wa;if(x.fromBufferAttribute(a,c[0]),g.fromBufferAttribute(a,c[1]),m.fromBufferAttribute(a,c[2]),wa.getNormal(rc),u[0]=`${Math.round(x.x*s)},${Math.round(x.y*s)},${Math.round(x.z*s)}`,u[1]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,u[2]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let _=0;_<3;_++){let y=(_+1)%3,b=u[_],I=u[y],A=wa[f[_]],T=wa[f[y]],P=`${b}_${I}`,E=`${I}_${b}`;E in h&&h[E]?(rc.dot(h[E].normal)<=r&&(d.push(A.x,A.y,A.z),d.push(T.x,T.y,T.z)),h[E]=null):P in h||(h[P]={index0:c[_],index1:c[y],normal:rc.clone()})}}for(let p in h)if(h[p]){let{index0:x,index1:g}=h[p];Sa.fromBufferAttribute(a,x),Ea.fromBufferAttribute(a,g),d.push(Sa.x,Sa.y,Sa.z),d.push(Ea.x,Ea.y,Ea.z)}this.setAttribute("position",new he(d,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}},Nr=class extends tl{constructor(t){super(t),this.uuid=Ci(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(new tl().fromJSON(s))}return this}},Mx={triangulate:function(n,t,e=2){let i=t&&t.length,s=i?t[0]*e:n.length,r=du(n,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,f,u,h,d;if(i&&(r=Ax(n,t,r,e)),n.length>80*e){a=c=n[0],l=f=n[1];for(let p=e;p<s;p+=e)u=n[p],h=n[p+1],u<a&&(a=u),h<l&&(l=h),u>c&&(c=u),h>f&&(f=h);d=Math.max(c-a,f-l),d=d!==0?32767/d:0}return vo(r,o,e,a,l,d,0),o}};function du(n,t,e,i,s){let r,o;if(s===Fx(n,t,e,i)>0)for(r=t;r<e;r+=i)o=kh(r,n[r],n[r+1],o);else for(r=e-i;r>=t;r-=i)o=kh(r,n[r],n[r+1],o);return o&&ul(o,o.next)&&(So(o),o=o.next),o}function Os(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(ul(e,e.next)||en(e.prev,e,e.next)===0)){if(So(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function vo(n,t,e,i,s,r,o){if(!n)return;!o&&r&&Lx(n,i,s,r);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,r?Ex(n,i,s,r):Sx(n)){t.push(l.i/e|0),t.push(n.i/e|0),t.push(c.i/e|0),So(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=wx(Os(n),t,e),vo(n,t,e,i,s,r,2)):o===2&&Tx(n,t,e,i,s,r):vo(Os(n),t,e,i,s,r,1);break}}}function Sx(n){let t=n.prev,e=n,i=n.next;if(en(t,e,i)>=0)return!1;let s=t.x,r=e.x,o=i.x,a=t.y,l=e.y,c=i.y,f=s<r?s<o?s:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,h=s>r?s>o?s:o:r>o?r:o,d=a>l?a>c?a:c:l>c?l:c,p=i.next;for(;p!==t;){if(p.x>=f&&p.x<=h&&p.y>=u&&p.y<=d&&hr(s,a,r,l,o,c,p.x,p.y)&&en(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Ex(n,t,e,i){let s=n.prev,r=n,o=n.next;if(en(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,f=s.y,u=r.y,h=o.y,d=a<l?a<c?a:c:l<c?l:c,p=f<u?f<h?f:h:u<h?u:h,x=a>l?a>c?a:c:l>c?l:c,g=f>u?f>h?f:h:u>h?u:h,m=_0(d,p,t,e,i),_=_0(x,g,t,e,i),y=n.prevZ,b=n.nextZ;for(;y&&y.z>=m&&b&&b.z<=_;){if(y.x>=d&&y.x<=x&&y.y>=p&&y.y<=g&&y!==s&&y!==o&&hr(a,f,l,u,c,h,y.x,y.y)&&en(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=d&&b.x<=x&&b.y>=p&&b.y<=g&&b!==s&&b!==o&&hr(a,f,l,u,c,h,b.x,b.y)&&en(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=m;){if(y.x>=d&&y.x<=x&&y.y>=p&&y.y<=g&&y!==s&&y!==o&&hr(a,f,l,u,c,h,y.x,y.y)&&en(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=_;){if(b.x>=d&&b.x<=x&&b.y>=p&&b.y<=g&&b!==s&&b!==o&&hr(a,f,l,u,c,h,b.x,b.y)&&en(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function wx(n,t,e){let i=n;do{let s=i.prev,r=i.next.next;!ul(s,r)&&pu(s,i,i.next,r)&&Mo(s,r)&&Mo(r,s)&&(t.push(s.i/e|0),t.push(i.i/e|0),t.push(r.i/e|0),So(i),So(i.next),i=n=r),i=i.next}while(i!==n);return Os(i)}function Tx(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Ux(o,a)){let l=mu(o,a);o=Os(o,o.next),l=Os(l,l.next),vo(o,t,e,i,s,r,0),vo(l,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function Ax(n,t,e,i){let s=[],r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*i,l=r<o-1?t[r+1]*i:n.length,c=du(n,a,l,i,!1),c===c.next&&(c.steiner=!0),s.push(Ox(c));for(s.sort(Rx),r=0;r<s.length;r++)e=Cx(s[r],e);return e}function Rx(n,t){return n.x-t.x}function Cx(n,t){let e=Ix(n,t);if(!e)return t;let i=mu(e,n);return Os(i,i.next),Os(e,e.next)}function Ix(n,t){let e=t,i=-1/0,s,r=n.x,o=n.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let h=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(h<=r&&h>i&&(i=h,s=e.x<e.next.x?e:e.next,h===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,l=s.x,c=s.y,f=1/0,u;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&hr(o<c?r:i,o,l,c,o<c?i:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),Mo(e,n)&&(u<f||u===f&&(e.x>s.x||e.x===s.x&&Px(s,e)))&&(s=e,f=u)),e=e.next;while(e!==a);return s}function Px(n,t){return en(n.prev,n,t.prev)<0&&en(t.next,n,n.next)<0}function Lx(n,t,e,i){let s=n;do s.z===0&&(s.z=_0(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Nx(s)}function Nx(n){let t,e,i,s,r,o,a,l,c=1;do{for(e=n,n=null,r=null,o=0;e;){for(o++,i=e,a=0,t=0;t<c&&(a++,i=i.nextZ,!!i);t++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||e.z<=i.z)?(s=e,e=e.nextZ,a--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;e=i}r.nextZ=null,c*=2}while(o>1);return n}function _0(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function Ox(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function hr(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function Ux(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!Dx(n,t)&&(Mo(n,t)&&Mo(t,n)&&kx(n,t)&&(en(n.prev,n,t.prev)||en(n,t.prev,t))||ul(n,t)&&en(n.prev,n,n.next)>0&&en(t.prev,t,t.next)>0)}function en(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function ul(n,t){return n.x===t.x&&n.y===t.y}function pu(n,t,e,i){let s=Aa(en(n,t,e)),r=Aa(en(n,t,i)),o=Aa(en(e,i,n)),a=Aa(en(e,i,t));return!!(s!==r&&o!==a||s===0&&Ta(n,e,t)||r===0&&Ta(n,i,t)||o===0&&Ta(e,n,i)||a===0&&Ta(e,t,i))}function Ta(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function Aa(n){return n>0?1:n<0?-1:0}function Dx(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&pu(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function Mo(n,t){return en(n.prev,n,n.next)<0?en(n,t,n.next)>=0&&en(n,n.prev,t)>=0:en(n,t,n.prev)<0||en(n,n.next,t)<0}function kx(n,t){let e=n,i=!1,s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function mu(n,t){let e=new b0(n.i,n.x,n.y),i=new b0(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function kh(n,t,e,i){let s=new b0(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function So(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function b0(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Fx(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var ho=class n{static area(t){let e=t.length,i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return n.area(t)<0}static triangulateShape(t,e){let i=[],s=[],r=[];Fh(t),Bh(i,t);let o=t.length;e.forEach(Fh);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Bh(i,e[l]);let a=Mx.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Fh(n){let t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Bh(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}var nl=class n extends Ue{constructor(t=new Nr([new bt(.5,.5),new bt(-.5,.5),new bt(-.5,-.5),new bt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let i=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new he(s,3)),this.setAttribute("uv",new he(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,f=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,h=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:d-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,_=e.UVGenerator!==void 0?e.UVGenerator:Bx,y,b=!1,I,A,T,P;m&&(y=m.getSpacedPoints(f),b=!0,h=!1,I=m.computeFrenetFrames(f,!1),A=new N,T=new N,P=new N),h||(g=0,d=0,p=0,x=0);let E=a.extractPoints(c),M=E.shape,U=E.holes;if(!ho.isClockWise(M)){M=M.reverse();for(let ht=0,W=U.length;ht<W;ht++){let L=U[ht];ho.isClockWise(L)&&(U[ht]=L.reverse())}}let V=ho.triangulateShape(M,U),H=M;for(let ht=0,W=U.length;ht<W;ht++){let L=U[ht];M=M.concat(L)}function rt(ht,W,L){return W||console.error("THREE.ExtrudeGeometry: vec does not exist"),ht.clone().addScaledVector(W,L)}let $=M.length,pt=V.length;function Q(ht,W,L){let X,J,tt,at=ht.x-W.x,Et=ht.y-W.y,gt=L.x-ht.x,C=L.y-ht.y,S=at*at+Et*Et,D=at*C-Et*gt;if(Math.abs(D)>Number.EPSILON){let et=Math.sqrt(S),dt=Math.sqrt(gt*gt+C*C),lt=W.x-Et/et,Wt=W.y+at/et,Ot=L.x-C/dt,Ht=L.y+gt/dt,pe=((Ot-lt)*C-(Ht-Wt)*gt)/(at*C-Et*gt);X=lt+at*pe-ht.x,J=Wt+Et*pe-ht.y;let Mt=X*X+J*J;if(Mt<=2)return new bt(X,J);tt=Math.sqrt(Mt/2)}else{let et=!1;at>Number.EPSILON?gt>Number.EPSILON&&(et=!0):at<-Number.EPSILON?gt<-Number.EPSILON&&(et=!0):Math.sign(Et)===Math.sign(C)&&(et=!0),et?(X=-Et,J=at,tt=Math.sqrt(S)):(X=at,J=Et,tt=Math.sqrt(S/2))}return new bt(X/tt,J/tt)}let vt=[];for(let ht=0,W=H.length,L=W-1,X=ht+1;ht<W;ht++,L++,X++)L===W&&(L=0),X===W&&(X=0),vt[ht]=Q(H[ht],H[L],H[X]);let Lt=[],Bt,se=vt.concat();for(let ht=0,W=U.length;ht<W;ht++){let L=U[ht];Bt=[];for(let X=0,J=L.length,tt=J-1,at=X+1;X<J;X++,tt++,at++)tt===J&&(tt=0),at===J&&(at=0),Bt[X]=Q(L[X],L[tt],L[at]);Lt.push(Bt),se=se.concat(Bt)}for(let ht=0;ht<g;ht++){let W=ht/g,L=d*Math.cos(W*Math.PI/2),X=p*Math.sin(W*Math.PI/2)+x;for(let J=0,tt=H.length;J<tt;J++){let at=rt(H[J],vt[J],X);At(at.x,at.y,-L)}for(let J=0,tt=U.length;J<tt;J++){let at=U[J];Bt=Lt[J];for(let Et=0,gt=at.length;Et<gt;Et++){let C=rt(at[Et],Bt[Et],X);At(C.x,C.y,-L)}}}let be=p+x;for(let ht=0;ht<$;ht++){let W=h?rt(M[ht],se[ht],be):M[ht];b?(T.copy(I.normals[0]).multiplyScalar(W.x),A.copy(I.binormals[0]).multiplyScalar(W.y),P.copy(y[0]).add(T).add(A),At(P.x,P.y,P.z)):At(W.x,W.y,0)}for(let ht=1;ht<=f;ht++)for(let W=0;W<$;W++){let L=h?rt(M[W],se[W],be):M[W];b?(T.copy(I.normals[ht]).multiplyScalar(L.x),A.copy(I.binormals[ht]).multiplyScalar(L.y),P.copy(y[ht]).add(T).add(A),At(P.x,P.y,P.z)):At(L.x,L.y,u/f*ht)}for(let ht=g-1;ht>=0;ht--){let W=ht/g,L=d*Math.cos(W*Math.PI/2),X=p*Math.sin(W*Math.PI/2)+x;for(let J=0,tt=H.length;J<tt;J++){let at=rt(H[J],vt[J],X);At(at.x,at.y,u+L)}for(let J=0,tt=U.length;J<tt;J++){let at=U[J];Bt=Lt[J];for(let Et=0,gt=at.length;Et<gt;Et++){let C=rt(at[Et],Bt[Et],X);b?At(C.x,C.y+y[f-1].y,y[f-1].x+L):At(C.x,C.y,u+L)}}}ot(),yt();function ot(){let ht=s.length/3;if(h){let W=0,L=$*W;for(let X=0;X<pt;X++){let J=V[X];ne(J[2]+L,J[1]+L,J[0]+L)}W=f+g*2,L=$*W;for(let X=0;X<pt;X++){let J=V[X];ne(J[0]+L,J[1]+L,J[2]+L)}}else{for(let W=0;W<pt;W++){let L=V[W];ne(L[2],L[1],L[0])}for(let W=0;W<pt;W++){let L=V[W];ne(L[0]+$*f,L[1]+$*f,L[2]+$*f)}}i.addGroup(ht,s.length/3-ht,0)}function yt(){let ht=s.length/3,W=0;Vt(H,W),W+=H.length;for(let L=0,X=U.length;L<X;L++){let J=U[L];Vt(J,W),W+=J.length}i.addGroup(ht,s.length/3-ht,1)}function Vt(ht,W){let L=ht.length;for(;--L>=0;){let X=L,J=L-1;J<0&&(J=ht.length-1);for(let tt=0,at=f+g*2;tt<at;tt++){let Et=$*tt,gt=$*(tt+1),C=W+X+Et,S=W+J+Et,D=W+J+gt,et=W+X+gt;le(C,S,D,et)}}}function At(ht,W,L){l.push(ht),l.push(W),l.push(L)}function ne(ht,W,L){ie(ht),ie(W),ie(L);let X=s.length/3,J=_.generateTopUV(i,s,X-3,X-2,X-1);Se(J[0]),Se(J[1]),Se(J[2])}function le(ht,W,L,X){ie(ht),ie(W),ie(X),ie(W),ie(L),ie(X);let J=s.length/3,tt=_.generateSideWallUV(i,s,J-6,J-3,J-2,J-1);Se(tt[0]),Se(tt[1]),Se(tt[3]),Se(tt[1]),Se(tt[2]),Se(tt[3])}function ie(ht){s.push(l[ht*3+0]),s.push(l[ht*3+1]),s.push(l[ht*3+2])}function Se(ht){r.push(ht.x),r.push(ht.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return zx(e,i,t)}static fromJSON(t,e){let i=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];i.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Qa[s.type]().fromJSON(s)),new n(i,t.options)}},Bx={generateTopUV:function(n,t,e,i,s){let r=t[e*3],o=t[e*3+1],a=t[i*3],l=t[i*3+1],c=t[s*3],f=t[s*3+1];return[new bt(r,o),new bt(a,l),new bt(c,f)]},generateSideWallUV:function(n,t,e,i,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[i*3],f=t[i*3+1],u=t[i*3+2],h=t[s*3],d=t[s*3+1],p=t[s*3+2],x=t[r*3],g=t[r*3+1],m=t[r*3+2];return Math.abs(a-f)<Math.abs(o-c)?[new bt(o,1-l),new bt(c,1-u),new bt(h,1-p),new bt(x,1-m)]:[new bt(a,1-l),new bt(f,1-u),new bt(d,1-p),new bt(g,1-m)]}};function zx(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var il=class n extends Ue{constructor(t=.5,e=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],c=[],f=[],u=t,h=(e-t)/s,d=new N,p=new bt;for(let x=0;x<=s;x++){for(let g=0;g<=i;g++){let m=r+g/i*o;d.x=u*Math.cos(m),d.y=u*Math.sin(m),l.push(d.x,d.y,d.z),c.push(0,0,1),p.x=(d.x/e+1)/2,p.y=(d.y/e+1)/2,f.push(p.x,p.y)}u+=h}for(let x=0;x<s;x++){let g=x*(i+1);for(let m=0;m<i;m++){let _=m+g,y=_,b=_+i+1,I=_+i+2,A=_+1;a.push(y,b,A),a.push(b,I,A)}}this.setIndex(a),this.setAttribute("position",new he(l,3)),this.setAttribute("normal",new he(c,3)),this.setAttribute("uv",new he(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var ts=class n extends Ue{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,f=[],u=new N,h=new N,d=[],p=[],x=[],g=[];for(let m=0;m<=i;m++){let _=[],y=m/i,b=0;m===0&&o===0?b=.5/e:m===i&&l===Math.PI&&(b=-.5/e);for(let I=0;I<=e;I++){let A=I/e;u.x=-t*Math.cos(s+A*r)*Math.sin(o+y*a),u.y=t*Math.cos(o+y*a),u.z=t*Math.sin(s+A*r)*Math.sin(o+y*a),p.push(u.x,u.y,u.z),h.copy(u).normalize(),x.push(h.x,h.y,h.z),g.push(A+b,1-y),_.push(c++)}f.push(_)}for(let m=0;m<i;m++)for(let _=0;_<e;_++){let y=f[m][_+1],b=f[m][_],I=f[m+1][_],A=f[m+1][_+1];(m!==0||o>0)&&d.push(y,b,A),(m!==i-1||l<Math.PI)&&d.push(b,I,A)}this.setIndex(d),this.setAttribute("position",new he(p,3)),this.setAttribute("normal",new he(x,3)),this.setAttribute("uv",new he(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var sl=class n extends Ue{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],l=[],c=[],f=new N,u=new N,h=new N;for(let d=0;d<=i;d++)for(let p=0;p<=s;p++){let x=p/s*r,g=d/i*Math.PI*2;u.x=(t+e*Math.cos(g))*Math.cos(x),u.y=(t+e*Math.cos(g))*Math.sin(x),u.z=e*Math.sin(g),a.push(u.x,u.y,u.z),f.x=t*Math.cos(x),f.y=t*Math.sin(x),h.subVectors(u,f).normalize(),l.push(h.x,h.y,h.z),c.push(p/s),c.push(d/i)}for(let d=1;d<=i;d++)for(let p=1;p<=s;p++){let x=(s+1)*d+p-1,g=(s+1)*(d-1)+p-1,m=(s+1)*(d-1)+p,_=(s+1)*d+p;o.push(x,g,_),o.push(g,m,_)}this.setIndex(o),this.setAttribute("position",new he(a,3)),this.setAttribute("normal",new he(l,3)),this.setAttribute("uv",new he(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Eo=class n extends Ue{constructor(t=new Ja(new N(-1,-1,0),new N(-1,1,0),new N(1,1,0)),e=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new N,l=new N,c=new bt,f=new N,u=[],h=[],d=[],p=[];x(),this.setIndex(p),this.setAttribute("position",new he(u,3)),this.setAttribute("normal",new he(h,3)),this.setAttribute("uv",new he(d,2));function x(){for(let y=0;y<e;y++)g(y);g(r===!1?e:0),_(),m()}function g(y){f=t.getPointAt(y/e,f);let b=o.normals[y],I=o.binormals[y];for(let A=0;A<=s;A++){let T=A/s*Math.PI*2,P=Math.sin(T),E=-Math.cos(T);l.x=E*b.x+P*I.x,l.y=E*b.y+P*I.y,l.z=E*b.z+P*I.z,l.normalize(),h.push(l.x,l.y,l.z),a.x=f.x+i*l.x,a.y=f.y+i*l.y,a.z=f.z+i*l.z,u.push(a.x,a.y,a.z)}}function m(){for(let y=1;y<=e;y++)for(let b=1;b<=s;b++){let I=(s+1)*(y-1)+(b-1),A=(s+1)*y+(b-1),T=(s+1)*y+b,P=(s+1)*(y-1)+b;p.push(I,A,P),p.push(A,T,P)}}function _(){for(let y=0;y<=e;y++)for(let b=0;b<=s;b++)c.x=y/e,c.y=b/s,d.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new n(new Qa[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var Ke=class extends Ii{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Jt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nu,this.normalScale=new bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Ra(n,t,e){return!n||!e&&n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function Hx(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Or=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break n}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},v0=class extends Or{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:If,endingEnd:If}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Pf:r=t,a=2*e-i;break;case Lf:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Pf:o=t,l=2*i-e;break;case Lf:o=1,l=i+s[1]-s[0];break;default:o=t-1,l=e}let c=(i-e)*.5,f=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-i),this._offsetPrev=r*f,this._offsetNext=o*f}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,f=this._offsetPrev,u=this._offsetNext,h=this._weightPrev,d=this._weightNext,p=(i-e)/(s-e),x=p*p,g=x*p,m=-h*g+2*h*x-h*p,_=(1+h)*g+(-1.5-2*h)*x+(-.5+h)*p+1,y=(-1-d)*g+(1.5+d)*x+.5*p,b=d*g-d*x;for(let I=0;I!==a;++I)r[I]=m*o[f+I]+_*o[c+I]+y*o[l+I]+b*o[u+I];return r}},M0=class extends Or{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,f=(i-e)/(s-e),u=1-f;for(let h=0;h!==a;++h)r[h]=o[c+h]*u+o[l+h]*f;return r}},S0=class extends Or{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},yi=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ra(e,this.TimeBufferType),this.values=Ra(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Ra(t.times,Array),values:Ra(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new S0(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new M0(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new v0(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Oa:e=this.InterpolantFactoryMethodDiscrete;break;case Yc:e=this.InterpolantFactoryMethodLinear;break;case Al:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Oa;case this.InterpolantFactoryMethodLinear:return Yc;case this.InterpolantFactoryMethodSmooth:return Al}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&Hx(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Al,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],f=t[a+1];if(c!==f&&(a!==1||c!==t[0]))if(s)l=!0;else{let u=a*i,h=u-i,d=u+i;for(let p=0;p!==i;++p){let x=e[u+p];if(x!==e[h+p]||x!==e[d+p]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*i,h=o*i;for(let d=0;d!==i;++d)e[h+d]=e[u+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};yi.prototype.TimeBufferType=Float32Array;yi.prototype.ValueBufferType=Float32Array;yi.prototype.DefaultInterpolation=Yc;var Us=class extends yi{constructor(t,e,i){super(t,e,i)}};Us.prototype.ValueTypeName="bool";Us.prototype.ValueBufferType=Array;Us.prototype.DefaultInterpolation=Oa;Us.prototype.InterpolantFactoryMethodLinear=void 0;Us.prototype.InterpolantFactoryMethodSmooth=void 0;var E0=class extends yi{};E0.prototype.ValueTypeName="color";var w0=class extends yi{};w0.prototype.ValueTypeName="number";var T0=class extends Or{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(s-e),c=t*a;for(let f=c+a;c!==f;c+=4)xn.slerpFlat(r,0,o,c-a,o,c,l);return r}},rl=class extends yi{InterpolantFactoryMethodLinear(t){return new T0(this.times,this.values,this.getValueSize(),t)}};rl.prototype.ValueTypeName="quaternion";rl.prototype.InterpolantFactoryMethodSmooth=void 0;var Ds=class extends yi{constructor(t,e,i){super(t,e,i)}};Ds.prototype.ValueTypeName="string";Ds.prototype.ValueBufferType=Array;Ds.prototype.DefaultInterpolation=Oa;Ds.prototype.InterpolantFactoryMethodLinear=void 0;Ds.prototype.InterpolantFactoryMethodSmooth=void 0;var A0=class extends yi{};A0.prototype.ValueTypeName="vector";var R0=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(f){a++,r===!1&&s.onStart!==void 0&&s.onStart(f,o,a),r=!0},this.itemEnd=function(f){o++,s.onProgress!==void 0&&s.onProgress(f,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(f){s.onError!==void 0&&s.onError(f)},this.resolveURL=function(f){return l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,u){return c.push(f,u),this},this.removeHandler=function(f){let u=c.indexOf(f);return u!==-1&&c.splice(u,2),this},this.getHandler=function(f){for(let u=0,h=c.length;u<h;u+=2){let d=c[u],p=c[u+1];if(d.global&&(d.lastIndex=0),d.test(f))return p}return null}}},Gx=new R0,C0=class{constructor(t){this.manager=t!==void 0?t:Gx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};C0.DEFAULT_MATERIAL_NAME="__DEFAULT";var wo=class extends sn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Jt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Ur=class extends wo{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(sn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Jt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},oc=new oe,zh=new N,Hh=new N,ol=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new bt(512,512),this.map=null,this.mapPass=null,this.matrix=new oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new mo,this._frameExtents=new bt(1,1),this._viewportCount=1,this._viewports=[new ke(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;zh.setFromMatrixPosition(t.matrixWorld),e.position.copy(zh),Hh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Hh),e.updateMatrixWorld(),oc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(oc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(oc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},I0=class extends ol{constructor(){super(new Mn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,i=Mr*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(i!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=i,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},To=class extends wo{constructor(t,e,i=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(sn.DEFAULT_UP),this.updateMatrix(),this.target=new sn,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new I0}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Gh=new oe,so=new N,ac=new N,P0=class extends ol{constructor(){super(new Mn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new bt(4,2),this._viewportCount=6,this._viewports=[new ke(2,1,1,1),new ke(0,1,1,1),new ke(3,1,1,1),new ke(1,1,1,1),new ke(3,0,1,1),new ke(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(t,e=0){let i=this.camera,s=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),so.setFromMatrixPosition(t.matrixWorld),i.position.copy(so),ac.copy(i.position),ac.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(ac),i.updateMatrixWorld(),s.makeTranslation(-so.x,-so.y,-so.z),Gh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gh)}},ks=class extends wo{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new P0}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}};var $0="\\[\\]\\.:\\/",Vx=new RegExp("["+$0+"]","g"),q0="[^"+$0+"]",Wx="[^"+$0.replace("\\.","")+"]",Xx=/((?:WC+[\/:])*)/.source.replace("WC",q0),Yx=/(WCOD+)?/.source.replace("WCOD",Wx),$x=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",q0),qx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",q0),Zx=new RegExp("^"+Xx+Yx+$x+qx+"$"),Kx=["material","materials","bones","map"],L0=class{constructor(t,e,i){let s=i||Qe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Qe=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Vx,"")}static parseTrackName(t){let e=Zx.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Kx.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let f=0;f<t.length;f++)if(t[f].name===c){c=f;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Qe.Composite=L0;Qe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Qe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Qe.prototype.GetterByBindingType=[Qe.prototype._getValue_direct,Qe.prototype._getValue_array,Qe.prototype._getValue_arrayElement,Qe.prototype._getValue_toArray];Qe.prototype.SetterByBindingTypeAndVersioning=[[Qe.prototype._setValue_direct,Qe.prototype._setValue_direct_setNeedsUpdate,Qe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_array,Qe.prototype._setValue_array_setNeedsUpdate,Qe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_arrayElement,Qe.prototype._setValue_arrayElement_setNeedsUpdate,Qe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_fromArray,Qe.prototype._setValue_fromArray_setNeedsUpdate,Qe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var v_=new Float32Array(1);var Vh=new oe,al=class{constructor(t,e,i=0,s=1/0){this.ray=new Sr(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new po,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Vh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Vh),this}intersectObject(t,e=!0,i=[]){return N0(t,this,i,e),i.sort(Wh),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)N0(t[s],this,i,e);return i.sort(Wh),i}};function Wh(n,t){return n.distance-t.distance}function N0(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let o=0,a=r.length;o<a;o++)N0(r[o],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:O0}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=O0);function Ro(n){return function(){n|=0,n=n+1831565813|0;let e=Math.imul(n^n>>>15,1|n);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Gn(n){let t=2166136261;for(let e=0;e<n.length;e++)t^=n.charCodeAt(e),t=Math.imul(t,16777619);return t>>>0}function gu(n,t,e,i=.3,s={}){let r=Co(n,s);for(let o=0;o<2;o++)for(let a of r){let l=a.w/2+i,c=a.d/2+i,f=t-a.x,u=e-a.z;if(Math.abs(f)<l&&Math.abs(u)<c){let h=l-Math.abs(f),d=c-Math.abs(u);h<d?t+=Math.sign(f||1)*h:e+=Math.sign(u||1)*d}}return{x:t,z:e}}function Co(n,t={}){let e=n.walls.slice();for(let i of n.fixtures)i.solid&&e.push(i),i.type==="gate"&&!t.counter&&e.push(i);return e}function xu(n,t,e,i,s=2.2){for(let c of n.spots){let f=c.area;if(f&&t>=f.x1&&t<=f.x2&&e>=f.z1&&e<=f.z2)return{...c,type:"search",dist:0}}let r=null,o=-Math.sin(i),a=-Math.cos(i),l=n.spots.filter(c=>!c.area).map(c=>({...c,type:"search"}));l.push({type:"exit",x:n.exit.x,z:n.exit.z,label:"Leave the building"});for(let c of l){let f=c.x-t,u=c.z-e,h=Math.hypot(f,u);if(h>s)continue;let d=h<.6?1:(f*o+u*a)/h;if(d<.35)continue;let p=h-d;(!r||p<r.score)&&(r={...c,dist:h,score:p})}return r}var Sn=n=>{let t=Math.abs(Math.floor(n))%2147483646+1;return()=>(t=t*16807%2147483647)/2147483647},Io=(n,t)=>{let e=Math.sin(n*127.1+t*311.7)*43758.5453;return e-Math.floor(e)},bn=n=>n<0?0:n>1?1:n,yu=n=>n*n*(3-2*n),ti=(n,t=n)=>{let e=document.createElement("canvas");return e.width=n,e.height=t,e};function Pi(n,t,e,i,s){let r=new Float32Array(e*i);for(let a=0;a<r.length;a++)r[a]=s();let o=new Float32Array(n*t);for(let a=0;a<t;a++){let l=a/t*i,c=Math.floor(l),f=yu(l-c),u=c%i*e,h=(c+1)%i*e;for(let d=0;d<n;d++){let p=d/n*e,x=Math.floor(p),g=yu(p-x),m=x%e,_=(x+1)%e,y=r[u+m]+(r[u+_]-r[u+m])*g,b=r[h+m]+(r[h+_]-r[h+m])*g;o[a*n+d]=y+(b-y)*f}}return o}function Pn(n,t,e,i,s,r,o=.5){let a=new Float32Array(n*t),l=1,c=0;for(let f=0;f<s;f++){let u=Pi(n,t,e<<f,i<<f,r);for(let h=0;h<a.length;h++)a[h]+=u[h]*l;c+=l,l*=o}for(let f=0;f<a.length;f++)a[f]/=c;return a}function Li(n,t){let e=ti(n,t),i=ti(n,t),s=ti(n,t);return{w:n,h:t,col:e,hgt:i,rough:s,c:e.getContext("2d"),hc:i.getContext("2d"),rc:s.getContext("2d")}}function Ni(n,t){let{w:e,h:i}=n,s=n.c.createImageData(e,i),r=n.hc.createImageData(e,i),o=n.rc.createImageData(e,i),a=[0,0,0,0,0];for(let l=0;l<i;l++)for(let c=0;c<e;c++){let f=l*e+c;t(f,c,l,a);let u=f*4;s.data[u]=a[0],s.data[u+1]=a[1],s.data[u+2]=a[2],s.data[u+3]=255;let h=bn(a[3])*255;r.data[u]=r.data[u+1]=r.data[u+2]=h,r.data[u+3]=255;let d=bn(a[4])*255;o.data[u]=o.data[u+1]=o.data[u+2]=d,o.data[u+3]=255}n.c.putImageData(s,0,0),n.hc.putImageData(r,0,0),n.rc.putImageData(o,0,0)}function Q0(n,t,e,i,s,r){for(let o of[-n,0,n])for(let a of[-t,0,t])e+o+s<0||e+o-s>n||i+a+s<0||i+a-s>t||r(e+o,i+a)}function jx(n,t){let{w:e,h:i}=n,s=n.hc.getImageData(0,0,e,i).data,r=ti(e,i),o=r.getContext("2d"),a=o.createImageData(e,i),l=(c,f)=>s[((f+i)%i*e+(c+e)%e)*4]/255;for(let c=0;c<i;c++)for(let f=0;f<e;f++){let u=(l(f+1,c)-l(f-1,c))*t,h=(l(f,c+1)-l(f,c-1))*t,d=-u,p=h,x=1,g=Math.hypot(d,p,x);d/=g,p/=g,x/=g;let m=(c*e+f)*4;a.data[m]=(d*.5+.5)*255,a.data[m+1]=(p*.5+.5)*255,a.data[m+2]=(x*.5+.5)*255,a.data[m+3]=255}return o.putImageData(a,0,0),r}function Z0(n,t,e=!0){let i=new Dn(n);return i.wrapS=i.wrapT=e?Zi:Wi,i.colorSpace=t?$e:ri,i.minFilter=Xi,i.anisotropy=4,i}function Oi(n,{tile:t,normal:e=2,roughness:i=1,metalness:s=0,envColor:r}){let o=Z0(n.col,!0),a=Z0(n.rough,!1),l=Z0(jx(n,e),!1);for(let f of[o,a,l])f.repeat.set(1/t[0],1/t[1]);let c=new Ke({map:o,roughnessMap:a,normalMap:l,roughness:i,metalness:s});return c.normalScale=new bt(1,1),r&&(c.color=new Jt(r)),c.userData.tile=t,c}function Vn(n){return[n>>16&255,n>>8&255,n&255]}function tf(n,t,e,i){i[0]=n[0]+(t[0]-n[0])*e,i[1]=n[1]+(t[1]-n[1])*e,i[2]=n[2]+(t[2]-n[2])*e}function ef(n,t,e,i=.35){let{c:s,w:r,h:o}=n;for(let a=0;a<t;a++){let l=e()*r,c=e()*o,f=(.02+e()*.08)*r,u=e()*6.3;Q0(r,o,l,c,f,(h,d)=>{s.strokeStyle=`rgba(20,18,16,${i*(.3+e()*.7)})`,s.lineWidth=.6+e()*2.2*(r/512),s.beginPath(),s.arc(h,d,f,u,u+.3+e()*.9),s.stroke()})}}var K0={};function Qx(n,t){let e=`${n}-${t}`;if(K0[e])return K0[e];let i=Sn(900+t*17),s=Pn(n,n,3,3,5,i,.6),r=ti(n),o=r.getContext("2d"),a=o.createImageData(n,n);for(let l=0;l<n;l++)for(let c=0;c<n;c++){let f=l*n+c,u=Math.hypot(c-n/2,l-n/2)/(n/2),h=s[f]*1.35+.3-u*.6,d=bn((h-.5)*14),p=Math.exp(-(((h-.53)*26)**2)),x=(d*.3+p*.28)*bn((1-u)*3),g=f*4;a.data[g]=a.data[g+1]=a.data[g+2]=255,a.data[g+3]=bn(x)*255}return o.putImageData(a,0,0),K0[e]=r,r}function Fs(n,t,e,i="90,62,30",s=.18,r=1){r*=Math.min(1.6,Fr);let{c:o,rc:a,w:l,h:c}=n,f=Qx(128,Math.floor(e()*3)),u=ti(128),h=u.getContext("2d");h.drawImage(f,0,0),h.globalCompositeOperation="source-in",h.fillStyle=`rgb(${i})`,h.fillRect(0,0,128,128);for(let d=0;d<t;d++){let p=e()*l,x=e()*c,g=(.04+e()*s)*Math.min(l,c),m=e()*6.3,_=.6+e()*.5;Q0(l,c,p,x,g,(y,b)=>{for(let I of[o,a])I.save(),I.translate(y,b),I.rotate(m),I.scale(1,_),I.globalAlpha=I===o?.8*r:.25,I.drawImage(I===o?u:f,-g,-g,g*2,g*2),I.restore()})}}var Su=typeof location<"u"&&/[?&]style=real\b/.test(location.search||""),_u={low:.12,medium:.6,high:1.6},ty={supermarket:"low",convenience:"low",gas:"low",pharmacy:"low",clinic:"low",hospital:"low",outdoor:"low",house:"low",hardware:"medium",fire:"medium"};function nf(n,{room:t=null,exposed:e=!1}={}){return e?"high":t==="garage"?"medium":ty[n]||"low"}var Fr=1;function Br(n,t,e,i=4){let s=Pn(n,t,i,i,5,e,.55);if(Fr!==1)for(let r=0;r<s.length;r++)s[r]=.45+(s[r]-.45)*Fr;return s}function ey(n,t){let e=Sn(t),i=Li(n,n),s=Pn(n,n,8,8,4,e),r=Br(n,n,e,3),o=Pi(n,n,n/2,n/2,e),a=[];for(let d=0;d<16;d++)a.push(e());let l=n/4,c=Vn(12894388),f=Vn(11775647),u=Vn(4865841),h=[0,0,0];return Ni(i,(d,p,x,g)=>{let m=Math.floor(p/l),_=Math.floor(x/l),y=p%l/l,b=x%l/l,I=Math.min(y,b,1-y,1-b),A=a[_*4+m];tf(c,f,A*.8,h);let T=o[d],P=T>.82?-26:T<.12?14:0,E=(s[d]-.5)*26+P,M=bn((r[d]-.45)*2.2)*.45+bn(1-I*30)*.3*(.5+r[d]);g[0]=h[0]+E,g[1]=h[1]+E,g[2]=h[2]+E;let U=Math.min(.75,M);g[0]+=(u[0]-g[0])*U,g[1]+=(u[1]-g[1])*U,g[2]+=(u[2]-g[2])*U;let B=I<.006;B&&(g[0]*=.72,g[1]*=.72,g[2]*=.72),g[3]=B?.45:.62+s[d]*.06-M*.05,g[4]=.42+M*.45+(B?.4:0)+(s[d]-.5)*.1}),ef(i,45,e,.3),Oi(i,{tile:[1.2,1.2],normal:2})}function ny(n,t){let e=Sn(t),i=Li(n,n),s=Pn(n,n,6,6,5,e,.6),r=Pi(n,n,n/3,n/3,e),o=Br(n,n,e,3),a=Vn(9674906),l=Vn(6253414),c=[0,0,0];return Ni(i,(f,u,h,d)=>{tf(a,l,bn((s[f]-.35)*1.6),c);let p=r[f]>.86?22:r[f]<.1?-18:0,x=bn((o[f]-.45)*2.2);d[0]=c[0]+p-x*40,d[1]=c[1]+p-x*38,d[2]=c[2]+p-x*42;let g=Math.abs(u-n/2)<1;g&&(d[0]*=.55,d[1]*=.55,d[2]*=.55),d[3]=g?.3:.6+s[f]*.04,d[4]=.28+x*.5+s[f]*.15}),ef(i,60,e,.32),Fs(i,2,e,"80,70,40",.1),Oi(i,{tile:[2,2],normal:1.5})}function iy(n,t){let e=Sn(t),i=Li(n,n),s=Pn(n,n,2,48,4,e,.5),r=Pi(n,n,6,160,e),o=Br(n,n,e,3),a=8,l=n/a,c=[];for(let p=0;p<a;p++){let x=e();c.push([x,(x+.35+e()*.3)%1])}let f=[];for(let p=0;p<a*3;p++)f.push(e());let u=Vn(9399888),h=Vn(5192232),d=[0,0,0];return Ni(i,(p,x,g,m)=>{let _=Math.floor(x/l),y=x%l/l,b=g/n,[I,A]=c[_],T=b>Math.min(I,A)&&b<Math.max(I,A)?1:0,P=f[_*3+T];tf(u,h,.25+P*.5,d);let E=(s[p]-.5)*50+(r[p]-.5)*22,M=bn((o[p]-.5)*2);m[0]=d[0]+E-M*18,m[1]=d[1]+E*.8-M*18,m[2]=d[2]+E*.6-M*14;let U=y<.025||y>.975||Math.abs(b-I)<.003||Math.abs(b-A)<.003;U&&(m[0]*=.5,m[1]*=.5,m[2]*=.5),m[3]=U?.25:.6+(r[p]-.5)*.12,m[4]=.5+M*.35+(s[p]-.5)*.15+(U?.4:0)}),ef(i,25,e,.25),Fs(i,2,e,"40,25,12",.1),Oi(i,{tile:[1.6,1.6],normal:2.5})}function sy(n,t){let e=Sn(t),i=Li(n,n),s=Pi(n,n,n/2,n/2,e),r=Pn(n,n,16,16,3,e),o=Br(n,n,e,3),a=Vn(6117970);return Ni(i,(l,c,f,u)=>{let h=(s[l]-.5)*30+(r[l]-.5)*24,d=bn((o[l]-.45)*2);u[0]=a[0]+h-d*30,u[1]=a[1]+h-d*30,u[2]=a[2]+h-d*26,u[3]=.5+s[l]*.4,u[4]=.95}),Fs(i,4,e,"60,40,22",.14),Oi(i,{tile:[1,1],normal:1.2})}function ry(n,t){let e=Sn(t),i=Li(n,n),s=Pn(n,n,4,4,6,e,.55),r=Pi(n,n,n/2,n/2,e),o=Vn(9144964);Ni(i,(u,h,d,p)=>{let x=(s[u]-.5)*60,g=r[u]>.9?-30:0;p[0]=o[0]+x+g,p[1]=o[1]+x+g,p[2]=o[2]+x*.95+g;let m=Math.abs(h%(n/2)-0)<1.2||Math.abs(d%(n/2)-0)<1.2;m&&(p[0]*=.4,p[1]*=.4,p[2]*=.4),p[3]=m?.1:.55+s[u]*.15+(g?-.2:0),p[4]=.82+(s[u]-.5)*.2});let{c:a,hc:l,w:c,h:f}=i;for(let u=0;u<4;u++){let h=e()*c,d=e()*f,p=e()*6.3;a.strokeStyle="rgba(25,24,22,0.7)",l.strokeStyle="rgba(0,0,0,0.8)",a.lineWidth=l.lineWidth=1.2*(c/512),a.beginPath(),l.beginPath(),a.moveTo(h,d),l.moveTo(h,d);for(let x=0;x<40;x++)p+=(e()-.5)*.9,h+=Math.cos(p)*6*(c/512),d+=Math.sin(p)*6*(c/512),a.lineTo(h,d),l.lineTo(h,d);a.stroke(),l.stroke()}for(let u=0;u<4;u++){let h=e()*c,d=e()*f,p=(.03+e()*.08)*c;Q0(c,f,h,d,p,(x,g)=>{let m=a.createRadialGradient(x,g,0,x,g,p);m.addColorStop(0,"rgba(15,13,10,0.55)"),m.addColorStop(1,"rgba(15,13,10,0)"),a.fillStyle=m,a.beginPath(),a.arc(x,g,p,0,6.3),a.fill();let _=i.rc.createRadialGradient(x,g,0,x,g,p);_.addColorStop(0,"rgba(0,0,0,0.6)"),_.addColorStop(1,"rgba(0,0,0,0)"),i.rc.fillStyle=_,i.rc.beginPath(),i.rc.arc(x,g,p,0,6.3),i.rc.fill()})}return Oi(i,{tile:[3,3],normal:2})}function bu(n,t,e,i){let s=Sn(t),r=n,o=n*3,a=Li(r,o),l=Pi(r,o,r/3,o/3,s),c=Pn(r,o,3,9,5,s,.55),f=Vn(e),u=Vn(i),h=Math.round(o*(.11/6)),d=Math.round(o*(.9/6));Ni(a,(g,m,_,y)=>{let b=o-1-_;if(b<h){let P=b>h-3?18:0;y[0]=u[0]+P+(c[g]-.5)*12,y[1]=u[1]+P+(c[g]-.5)*12,y[2]=u[2]+P+(c[g]-.5)*12,y[3]=.85,y[4]=.55;return}let I=(c[g]-.5)*22,A=bn(1-(b-h)/d),T=A*A*(.4+c[g]*.6);y[0]=f[0]+I-T*60,y[1]=f[1]+I-T*62,y[2]=f[2]+I-T*66,y[3]=.5+l[g]*.06,y[4]=.78+T*.15});let{c:p,rc:x}=a;for(let g=0;g<2;g++){let m=s()*r,_=o*(.35+s()*.25),y=r*(.1+s()*.12);for(let b=0;b<5;b++){let I=m+(s()-.5)*y,A=o*(.04+s()*.2),T=p.createLinearGradient(I,_,I,_+A);T.addColorStop(0,"rgba(100,72,38,0.22)"),T.addColorStop(1,"rgba(100,72,38,0)"),p.fillStyle=T,p.fillRect(I,_,1+s()*2.5,A)}}Fs(a,3,s,"105,78,40",.16,.7);for(let g=0;g<14;g++){let m=s()*r,_=o-h-s()*o*.12;p.fillStyle=`rgba(30,28,26,${.06+s()*.14})`,p.save(),p.translate(m,_),p.rotate((s()-.5)*.5),p.fillRect(0,0,2+s()*r*.05,.8+s()*1.5),p.restore()}for(let g=0;g<5;g++){let m=s()*r,_=o*(.6+s()*.35),y=1+s()*3*(r/512);p.fillStyle="rgba(160,150,135,0.7)",p.beginPath(),p.arc(m,_,y,0,6.3),p.fill(),a.hc.fillStyle="rgba(0,0,0,0.6)",a.hc.beginPath(),a.hc.arc(m,_,y,0,6.3),a.hc.fill()}return x.globalAlpha=1,Oi(a,{tile:[2,6],normal:1.6})}function oy(n,t){let e=Sn(t),i=Li(n,n),s=Pn(n,n,6,6,4,e),r=Br(n,n,e,2),o=n/4,a=Vn(14211795),l=[];for(let d=0;d<16;d++)l.push(e());Ni(i,(d,p,x,g)=>{let m=p%o/o,_=x%o/o,y=Math.min(m,_,1-m,1-_),b=y<.035,I=l[Math.floor(x/o)*4+Math.floor(p/o)],A=bn((r[d]-.45)*2);if(b){let E=120-A*60+(s[d]-.5)*30;g[0]=E,g[1]=E*.95,g[2]=E*.85,g[3]=.2,g[4]=.9;return}let T=(s[d]-.5)*10-I*10-A*35;g[0]=a[0]+T,g[1]=a[1]+T,g[2]=a[2]+T-A*8;let P=bn(y*12);g[3]=.35+P*.4,g[4]=.12+A*.4});let{c,hc:f}=i,u=Math.floor(e()*4)*o,h=Math.floor(e()*4)*o;c.strokeStyle="rgba(40,40,36,0.8)",f.strokeStyle="rgba(0,0,0,1)",c.lineWidth=f.lineWidth=1;for(let d of[c,f])d.beginPath(),d.moveTo(u+o*.1,h+o*.2),d.lineTo(u+o*.45,h+o*.55),d.lineTo(u+o*.6,h+o*.5),d.lineTo(u+o*.92,h+o*.85),d.stroke();return Oi(i,{tile:[.6,.6],normal:4})}function ay(n,t){let e=Sn(t),i=Li(n,n),s=Pn(n,n,24,24,3,e,.6),r=Pi(n,n,n/1.5,n/1.5,e),o=Pn(n,n,4,4,3,e),a=n/4,l=-1,c=[];for(let f=0;f<16;f++)c.push(e());return Ni(i,(f,u,h,d)=>{let p=Math.floor(h/a)*4+Math.floor(u/a),x=u%a/a,g=h%a/a;if(Math.min(x,g,1-x,1-g)<.018){d[0]=168,d[1]=168,d[2]=162,d[3]=1,d[4]=.55;return}if(p===l){let y=14+s[f]*18;d[0]=y,d[1]=y,d[2]=y,d[3]=0,d[4]=1;return}let _=172-c[p]*16+(s[f]-.5)*28-(r[f]>.88?40:0)-bn((o[f]-.5)*2)*20;d[0]=_,d[1]=_*.985,d[2]=_*.94,d[3]=.6+s[f]*.2-(r[f]>.88?.2:0),d[4]=1}),Fs(i,4,e,"120,85,40",.12,.8),Oi(i,{tile:[2.4,2.4],normal:2.5})}function ly(n,t){let e=Sn(t),i=Li(n,n),s=Pn(n,n,10,10,4,e,.6),r=Pi(n,n,n/2,n/2,e),o=Br(n,n,e,2),a=Vn(11053983),l=n/4,c=n/8;return Ni(i,(f,u,h,d)=>{let p=Math.floor(h/c),g=(u+(p%2?l/2:0))%n%l/l,m=h%c/c,_=g<.02||g>.98||m<.04||m>.96,y=bn((o[f]-.5)*2),b=(s[f]-.5)*22-(r[f]>.85?20:0)-y*30;d[0]=a[0]+b,d[1]=a[1]+b,d[2]=a[2]+b,_&&(d[0]*=.8,d[1]*=.8,d[2]*=.8),d[3]=_?.2:.6+s[f]*.2-(r[f]>.85?.25:0),d[4]=.65+y*.2}),Fs(i,2,e,"90,70,40",.14),Oi(i,{tile:[1.6,1.6],normal:3})}function cy(n,t,e=12894390){let i=Sn(t),s=Li(n,n),r=Pn(n,n,5,5,5,i,.55),o=Pi(n,n,n/3,n/3,i),a=Vn(e);return Ni(s,(l,c,f,u)=>{let h=(r[l]-.5)*20;u[0]=a[0]+h,u[1]=a[1]+h,u[2]=a[2]+h,u[3]=.5+o[l]*.15,u[4]=.92}),Fs(s,2,i,"115,85,45",.1,.35),Oi(s,{tile:[3,3],normal:1.2})}var Po={};function fy(n="high",t="low"){_u[t]||(t="low");let e=`${n}|${t}`;if(Po[e])return Po[e];let i=Su?1:_u[t],s=f=>()=>{let u=Fr;Fr=i;try{return f()}finally{Fr=u}},r=n==="low",o=r?256:512,a={storeTile:()=>ey(o,11),linoleum:()=>ny(o,23),woodFloor:()=>iy(o,37),carpet:()=>sy(r?256:384,41),concrete:()=>ry(o,53),drywall:()=>bu(r?192:384,61,11843754,3881527),drywallWarm:()=>bu(r?192:384,67,11773324,13814974),tileWall:()=>oy(o,71),ceilingTile:()=>ay(o,83),blockWall:()=>ly(o,89),plaster:()=>cy(r?256:384,97)},l={quality:n,grime:t,surfaceFor:(f,u,h)=>sf(f,u,h,n,t)},c={};for(let f of Object.keys(a)){let u=s(a[f]);Object.defineProperty(l,f,{enumerable:!0,get:()=>c[f]||(c[f]=u())})}return l.names=Object.keys(a),l.all=()=>{for(let f of l.names)l[f];return l},Po[e]=l,l}var hy={supermarket:"storeTile",convenience:"storeTile",gas:"storeTile",pharmacy:"storeTile",clinic:"linoleum",hospital:"linoleum",hardware:"concrete",outdoor:"woodFloor",fire:"concrete",house:"woodFloor"},uy={supermarket:"drywall",convenience:"drywall",gas:"blockWall",pharmacy:"drywall",clinic:"drywall",hospital:"drywall",hardware:"blockWall",outdoor:"drywallWarm",fire:"blockWall",house:"drywallWarm"},dy={supermarket:"ceilingTile",convenience:"ceilingTile",gas:"ceilingTile",pharmacy:"ceilingTile",clinic:"ceilingTile",hospital:"ceilingTile",hardware:"concrete",outdoor:"plaster",fire:"plaster",house:"plaster"};function sf(n,t,e,i,s){let r=i||(Object.keys(Po).some(l=>l.startsWith("high|"))?"high":Object.keys(Po).some(l=>l.startsWith("low|"))?"low":"high"),o=fy(r,s||nf(n,{room:e}));return e==="bathroom"&&t==="wall"?o.tileWall:e==="bathroom"&&t==="floor"?o.linoleum:e==="garage"?t==="ceiling"?o.plaster:t==="wall"?o.blockWall:o.concrete:(e==="bedroom"||e==="second bedroom")&&t==="floor"?o.carpet:o[(t==="floor"?hy:t==="wall"?uy:dy)[n]||(t==="floor"?"storeTile":t==="wall"?"drywall":"ceilingTile")]}function Lo(n){n.updateMatrixWorld(!0);let t=n.geometry,e=t.attributes.position,i=t.attributes.normal,s=t.attributes.uv;if(!e||!i||!s)return n;let r=new N,o=new N,a=new xn;n.matrixWorld.decompose(new N,a,new N);for(let l=0;l<e.count;l++){r.fromBufferAttribute(e,l).applyMatrix4(n.matrixWorld),o.fromBufferAttribute(i,l).applyQuaternion(a);let c=Math.abs(o.x),f=Math.abs(o.y),u=Math.abs(o.z);f>=c&&f>=u?s.setXY(l,r.x,-r.z):c>=u?s.setXY(l,o.x>0?-r.z:r.z,r.y):s.setXY(l,o.z>0?r.x:-r.x,r.y)}return s.needsUpdate=!0,n}function rf(){try{let n=new URLSearchParams(location.search).get("q");if(n==="low"||n==="high")return n}catch{}try{let n=typeof matchMedia=="function"&&matchMedia("(pointer: coarse)").matches,t=/Android|iPhone|iPad|iPod|Mobile|Silk/i.test(navigator.userAgent||"");if(n||t||(navigator.deviceMemory||8)<=2)return"low";let e="",s=document.createElement("canvas").getContext("webgl");if(s){let o=s.getExtension("WEBGL_debug_renderer_info");e=o?String(s.getParameter(o.UNMASKED_RENDERER_WEBGL)):"",s.getExtension("WEBGL_lose_context")?.loseContext()}if(/swiftshader|llvmpipe|softpipe|software|mali|adreno|powervr|videocore/i.test(e)||(window.devicePixelRatio||1)<1.3&&/intel/i.test(e)&&!/iris|arc|uhd graphics 7/i.test(e)&&(navigator.hardwareConcurrency||8)<=4)return"low"}catch{}return"high"}var rn={};function py(){if(rn.cookie)return rn.cookie;let n=256,t=ti(n),e=t.getContext("2d");e.fillStyle="#000",e.fillRect(0,0,n,n);let i=n/2,s=e.createRadialGradient(i,i,0,i,i,i);s.addColorStop(0,"rgba(255,250,240,1)"),s.addColorStop(.12,"rgba(255,246,228,1)"),s.addColorStop(.22,"rgba(225,214,195,1)"),s.addColorStop(.3,"rgba(160,150,135,1)"),s.addColorStop(.38,"rgba(190,180,160,1)"),s.addColorStop(.46,"rgba(110,104,92,1)"),s.addColorStop(.75,"rgba(70,66,58,1)"),s.addColorStop(.95,"rgba(18,17,15,1)"),s.addColorStop(1,"rgba(0,0,0,1)"),e.fillStyle=s,e.beginPath(),e.arc(i,i,i,0,6.3),e.fill();let r=Sn(5);for(let a=0;a<24;a++)e.fillStyle=`rgba(0,0,0,${.015+r()*.025})`,e.beginPath(),e.arc(i+(r()-.5)*i,i+(r()-.5)*i,3+r()*10,0,6.3),e.fill();let o=new Dn(t);return o.colorSpace=$e,rn.cookie=o,o}function vu(n="255,255,255"){let t=`dot${n}`;if(rn[t])return rn[t];let e=64,i=ti(e),s=i.getContext("2d"),r=s.createRadialGradient(e/2,e/2,0,e/2,e/2,e/2);r.addColorStop(0,`rgba(${n},1)`),r.addColorStop(.25,`rgba(${n},0.45)`),r.addColorStop(1,`rgba(${n},0)`),s.fillStyle=r,s.fillRect(0,0,e,e);let o=new Dn(i);return o.colorSpace=$e,rn[t]=o,o}function J0(){if(rn.prism)return rn.prism;let n=128,t=ti(n,n/2),e=t.getContext("2d");e.fillStyle="#d8dde0",e.fillRect(0,0,n,n/2),e.fillStyle="rgba(0,0,0,0.12)";for(let r=0;r<n;r+=4)for(let o=r/4%2?2:0;o<n/2;o+=4)e.fillRect(r,o,2,2);let i=Sn(3);for(let r=0;r<14;r++)e.fillStyle=`rgba(30,25,20,${.2+i()*.5})`,e.fillRect(i()*n,n/2-6-i()*20,2+i()*3,1+i()*2);let s=new Dn(t);return s.colorSpace=$e,rn.prism=s,s}function my(){if(rn.halo)return rn.halo;let n=128,t=128,e=ti(n,t),i=e.getContext("2d"),s=i.createImageData(n,t);for(let o=0;o<t;o++)for(let a=0;a<n;a++){let l=Math.max(0,Math.abs(a/n-.5)-.24)/.26,c=Math.max(0,Math.abs(o/t-.52)-.3)/.2,f=Math.min(1,Math.hypot(l,c)),h=Math.abs(a/n-.5)<.24&&Math.abs(o/t-.52)<.3?.25:(1-f)**2.2*.8,d=(o*n+a)*4;s.data[d]=s.data[d+1]=s.data[d+2]=255,s.data[d+3]=h*255}i.putImageData(s,0,0);let r=new Dn(e);return rn.halo=r,r}function Mu(){if(rn.exit)return rn.exit;let n=ti(256,128),t=n.getContext("2d");t.fillStyle="#0b120c",t.fillRect(0,0,256,128),t.fillStyle="#5dff7e",t.font='bold 74px "Arial Black", Arial, sans-serif',t.textAlign="center",t.textBaseline="middle",t.fillText("EXIT",128,58),t.beginPath(),t.moveTo(26,104),t.lineTo(44,94),t.lineTo(44,114),t.closePath(),t.moveTo(230,104),t.lineTo(212,94),t.lineTo(212,114),t.closePath(),t.fill(),t.fillRect(48,101,160,6);let e=new Dn(n);return e.colorSpace=$e,rn.exit=e,e}function j0(n,t){let e=`decal-${n}-${t}`;if(rn[e])return rn[e];let i=256,s=ti(i),r=s.getContext("2d"),o=Sn(100+t*31+n.length*7),a=(c,f,u,h)=>{let d=Pn(i,i,4,4,5,o,.55),p=r.createImageData(i,i);for(let x=0;x<i;x++)for(let g=0;g<i;g++){let m=x*i+g,_=Math.hypot(g-i/2,x-i/2)/(i/2),y=bn((d[m]-.35-_*h)*3)*u,b=m*4;p.data[b]=f[0]+(d[m]-.5)*c,p.data[b+1]=f[1]+(d[m]-.5)*c,p.data[b+2]=f[2]+(d[m]-.5)*c,p.data[b+3]=y*255}r.putImageData(p,0,0)};if(n==="dirt")a(60,[62,50,36],.85,.55);else if(n==="water")a(20,[18,20,22],.9,.5);else if(n==="snow"){a(30,[228,233,238],1,.45),r.globalCompositeOperation="source-atop";for(let c=0;c<300;c++)r.fillStyle=`rgba(255,255,255,${o()*.5})`,r.fillRect(o()*i,o()*i,1,1);r.globalCompositeOperation="source-over"}else if(n==="paper")for(let c=0;c<7;c++){r.save(),r.translate(i*(.2+o()*.6),i*(.2+o()*.6)),r.rotate(o()*6.3);let f=38+o()*26,u=f*1.3,h=200+o()*40;r.fillStyle=`rgb(${h},${h-4},${h-14})`,r.fillRect(-f/2,-u/2,f,u),r.fillStyle="rgba(40,40,40,0.5)";for(let d=0;d<9;d++)r.fillRect(-f/2+5,-u/2+8+d*6,(f-10)*(.5+o()*.5),1.5);r.fillStyle="rgba(80,60,30,0.25)",r.beginPath(),r.arc((o()-.5)*f,(o()-.5)*u,8+o()*10,0,6.3),r.fill(),r.fillStyle="rgba(40,30,20,0.18)",r.fillRect(-f/4,-u/6,f/2,u/3),r.restore()}else if(n==="leaves")for(let c=0;c<46;c++){r.save();let f=o()**.7,u=o()*6.3;r.translate(i/2+Math.cos(u)*f*i*.42,i/2+Math.sin(u)*f*i*.42),r.rotate(o()*6.3);let h=8+o()*12,d=[[120,70,30],[150,95,35],[90,60,30],[110,85,40]][Math.floor(o()*4)];r.fillStyle=`rgb(${d[0]},${d[1]},${d[2]})`,r.beginPath(),r.ellipse(0,0,h,h*.45,0,0,6.3),r.fill(),r.strokeStyle="rgba(50,30,15,0.7)",r.lineWidth=1,r.beginPath(),r.moveTo(-h,0),r.lineTo(h,0),r.stroke(),r.restore()}else if(n==="glass")for(let c=0;c<70;c++){let f=o()**1.3,u=o()*6.3,h=i/2+Math.cos(u)*f*i*.45,d=i/2+Math.sin(u)*f*i*.45,p=(1-f)*10+2+o()*4;r.fillStyle=`rgba(200,220,225,${.25+o()*.35})`,r.strokeStyle="rgba(235,245,250,0.8)",r.lineWidth=.8,r.beginPath(),r.moveTo(h+(o()-.5)*p*2,d+(o()-.5)*p*2),r.lineTo(h+(o()-.5)*p*2,d+(o()-.5)*p*2),r.lineTo(h+(o()-.5)*p*2,d+(o()-.5)*p*2),r.closePath(),r.fill(),r.stroke()}else if(n==="grime"){let c=r.createLinearGradient(0,i,0,0);c.addColorStop(0,"rgba(20,16,12,0.75)"),c.addColorStop(.35,"rgba(25,20,15,0.35)"),c.addColorStop(1,"rgba(25,20,15,0)"),r.fillStyle=c,r.fillRect(0,0,i,i);let f=Pn(i,i,6,2,4,o),u=r.getImageData(0,0,i,i);for(let h=0;h<i*i;h++)u.data[h*4+3]*=.55+f[h]*.9;r.putImageData(u,0,0)}else if(n==="pool"){let c=r.createRadialGradient(i/2,i/2,0,i/2,i/2,i/2);c.addColorStop(0,"rgba(255,255,255,0.9)"),c.addColorStop(.4,"rgba(255,255,255,0.35)"),c.addColorStop(1,"rgba(255,255,255,0)"),r.fillStyle=c,r.fillRect(0,0,i,i)}let l=new Dn(s);return l.colorSpace=$e,n==="grime"&&(l.wrapS=Zi),rn[e]=l,l}var dl={quarantine:[.43,.56],closed:[.22,.28],mask:[.43,.56],evac:[.22,.28],missing:[.22,.28],note:[.5,.36],poster:[.6,.9],staff:[.3,.12]};function gy(n,t){let e=`notice-${n}-${t}`;if(rn[e])return rn[e];let[i,s]=dl[n]||dl.closed,r=256,o=Math.round(r*s/i),a=ti(r,o),l=a.getContext("2d"),c=Sn(7+t*13+n.length*101),f="Arial, Helvetica, sans-serif",u='"Arial Black", Arial, sans-serif',h='"Segoe Print", "Bradley Hand", "Comic Sans MS", cursive',d=m=>{l.fillStyle=m,l.fillRect(0,0,r,o)},p=(m,_,y,b="#151515")=>{l.font=y,l.fillStyle=b,l.textAlign="center",l.textBaseline="alphabetic";let I=parseInt(y,10);for(;l.measureText(m).width>r*.88&&I>6;)I-=1,l.font=y.replace(/\d+px/,`${I}px`);l.fillText(m,r/2,_)},x=(m,_,y)=>{l.fillStyle="rgba(30,30,30,0.55)";for(let b=0;b<_;b++)l.fillRect(r*.1,m+b*y,r*(.6+c()*.2),2)};if(n==="quarantine"){d("#e6d64a"),l.fillStyle="#141414",l.fillRect(0,0,r,64),p("QUARANTINE",46,`bold 40px ${u}`,"#e6d64a"),p("DO NOT ENTER",110,`bold 34px ${u}`,"#b01d14"),l.strokeStyle="#141414",l.lineWidth=7;for(let m=0;m<3;m++){let _=m/3*Math.PI*2-Math.PI/2;l.beginPath(),l.arc(r/2+Math.cos(_)*22,190+Math.sin(_)*22,24,0,6.3),l.stroke()}l.beginPath(),l.arc(r/2,190,9,0,6.3),l.stroke(),p("PNEUMONIC PLAGUE EXPOSURE SITE",262,`bold 15px ${f}`),p("By order of Multnomah County Health",286,`14px ${f}`),p("Entry is prohibited until cleared.",304,`14px ${f}`)}else if(n==="closed")d("#efece2"),p("CLOSED",52,`bold 42px ${u}`,"#121212"),p("BY ORDER OF",84,`bold 18px ${f}`),p("WASHINGTON COUNTY HEALTH",108,`bold 17px ${f}`),l.strokeStyle="#2a3c6a",l.lineWidth=3,l.beginPath(),l.arc(r/2,170,34,0,6.3),l.stroke(),l.beginPath(),l.arc(r/2,170,26,0,6.3),l.stroke(),p("PUBLIC HEALTH",175,`bold 10px ${f}`,"#2a3c6a"),x(222,6,13),p("Sep 19, 2026",o-18,`italic 13px ${f}`);else if(n==="mask")d("#f1efe8"),l.fillStyle="#b3241a",l.fillRect(0,0,r,78),p("PNEUMONIC PLAGUE",34,`bold 26px ${u}`,"#fff"),p("WEAR A MASK",66,`bold 28px ${u}`,"#fff"),l.fillStyle="#d9cbb5",l.beginPath(),l.arc(r/2,140,40,0,6.3),l.fill(),l.fillStyle="#9fc5d8",l.fillRect(r/2-34,138,68,30),l.strokeStyle="#555",l.lineWidth=2,l.strokeRect(r/2-34,138,68,30),["Cover every cough","Stay 6 feet apart","Fever or cough? Stay home","Call 211 for help"].forEach((_,y)=>p(`\u2022 ${_}`,212+y*22,`bold 15px ${f}`,"#1a1a1a")),p("Oregon Health Authority",o-14,`11px ${f}`,"#444");else if(n==="evac")d("#f4f1e6"),p("EVACUATION",40,`bold 28px ${u}`,"#14306b"),p("NOTICE",70,`bold 24px ${u}`,"#14306b"),["Buses leave Pioneer Sq.","Sept 14, 8:00 AM","Bring ID, water, 1 bag.","No pets on the bus.","Shelter: Expo Center"].forEach((_,y)=>p(_,112+y*26,`bold 16px ${f}`)),x(250,5,12);else if(n==="missing")d("#eeeae0"),p("HAVE YOU SEEN US?",34,`bold 21px ${u}`,"#202020"),l.fillStyle="#8b8d8e",l.fillRect(r*.2,48,r*.6,120),l.fillStyle="rgba(255,255,255,0.25)",l.fillRect(r*.2,48,r*.6,40),l.fillStyle="rgba(40,40,40,0.4)",l.beginPath(),l.arc(r*.42,120,18,0,6.3),l.fill(),l.beginPath(),l.arc(r*.58,128,14,0,6.3),l.fill(),["Went to Expo Center","shelter. Oct 2.","Maria + kids. Love you."].forEach((_,y)=>p(_,200+y*24,`20px ${h}`,"#1b2a6b"));else if(n==="note"){d("#a8875a");let m=Pn(r,o,4,3,3,c),_=l.getImageData(0,0,r,o);for(let A=0;A<r*o;A++){let T=(m[A]-.5)*30;_.data[A*4]+=T,_.data[A*4+1]+=T,_.data[A*4+2]+=T}l.putImageData(_,0,0);let y=[["NO MEDS","LEFT"],["DONT GO","IN BACK"],["TOOK WATER","SORRY"],["SICK INSIDE","STAY OUT"]],[b,I]=y[t%y.length];l.save(),l.translate(r/2,o/2),l.rotate((c()-.5)*.12),l.font=`bold 46px ${h}`,l.fillStyle="#121212",l.textAlign="center",l.fillText(b,0,-10),l.fillText(I,0,46),l.restore()}else if(n==="poster"){let m=["#2e4f78","#7a2e2a","#2f5a45"][t%3];d(m),l.fillStyle="rgba(255,255,255,0.12)";for(let _=0;_<6;_++)l.beginPath(),l.arc(c()*r,c()*o,30+c()*60,0,6.3),l.fill();p("WINTER",90,`bold 50px ${u}`,"#f6e9c9"),p("SAVINGS",145,`bold 46px ${u}`,"#f6e9c9"),l.fillStyle="#f6c63c",l.beginPath(),l.arc(r/2,240,58,0,6.3),l.fill(),p("20%",248,`bold 40px ${u}`,"#1a1a1a"),p("OFF",276,`bold 20px ${u}`,"#1a1a1a"),p("Ends Sept 30",o-30,`bold 18px ${f}`,"#f6e9c9")}else n==="staff"&&(d("#1d2a33"),p("STAFF ONLY",o*.66,`bold 34px ${u}`,"#e9eef0"));l.fillStyle=`rgba(160,130,60,${.06+c()*.08})`,l.fillRect(0,0,r,o);for(let m=0;m<3;m++){let _=l.createRadialGradient(c()*r,c()*o,2,c()*r,c()*o,40+c()*60);_.addColorStop(0,"rgba(110,80,30,0.18)"),_.addColorStop(1,"rgba(110,80,30,0)"),l.fillStyle=_,l.fillRect(0,0,r,o)}if(l.fillStyle="rgba(0,0,0,0.06)",l.fillRect(0,o/2-1,r,2),n!=="staff"&&n!=="note"){l.fillStyle="rgba(225,215,170,0.75)";for(let[m,_]of[[8,4],[r-40,4]])l.fillRect(m,_,32,12);l.clearRect(0,0,0,0),l.globalCompositeOperation="destination-out",l.beginPath(),l.moveTo(r,o),l.lineTo(r-20-c()*30,o),l.lineTo(r-6,o-10-c()*14),l.lineTo(r,o-30-c()*20),l.closePath(),l.fill(),l.globalCompositeOperation="source-over"}let g=new Dn(a);return g.colorSpace=$e,g.anisotropy=4,rn[e]=g,g}var xy=`
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
}`,yy=`
varying float vLight;
void main() {
  float r = length(gl_PointCoord - 0.5);
  float a = (1.0 - smoothstep(0.0, 0.5, r)) * vLight;
  gl_FragColor = vec4(vec3(1.0, 0.96, 0.88) * a, a);
}`,_y=`
attribute vec2 aSlice; // x: 1 for a cross-section slice, y: its distance along the shaft (0..1)
varying float vT; varying float vS; varying float vR; varying vec3 vW; varying vec3 vN;
void main() {
  vT = mix(uv.y, aSlice.y, aSlice.x); vS = uv.x;
  vR = aSlice.x > 0.5 ? uv.y : 0.5; // second edge fade for slices
  vec4 w = modelMatrix * vec4(position, 1.0);
  vW = w.xyz;
  vN = normalize(mat3(modelMatrix) * normal);
  gl_Position = projectionMatrix * viewMatrix * w;
}`,by=`
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
}`;function vy(n,t,e){let i=[[-n/2,0],[n/2,0],[n/2,t],[-n/2,t]],s=n*1.9,r=t*.18,o=[[-s/2,0],[s/2,0],[s/2,r],[-s/2,r]],a=[],l=[],c=[],f=0,u=(g,m,_,y)=>{a.push(...g,...m,..._,...y),l.push(0,0,1,0,1,1,0,1),c.push(f,f+1,f+2,f,f+2,f+3),f+=4};u([i[0][0],i[0][1],0],[i[3][0],i[3][1],0],[o[3][0],o[3][1],-e],[o[0][0],o[0][1],-e]),u([i[1][0],i[1][1],0],[i[2][0],i[2][1],0],[o[2][0],o[2][1],-e],[o[1][0],o[1][1],-e]),u([i[3][0],i[3][1],0],[i[2][0],i[2][1],0],[o[2][0],o[2][1],-e],[o[3][0],o[3][1],-e]),u([0,0,0],[0,t,0],[0,r,-e],[0,0,-e]),u([-n/2,t*.5,0],[n/2,t*.5,0],[s/2,r*.5,-e],[-s/2,r*.5,-e]);let h=new Ue,d=f;for(let g of[.12,.3,.5,.7]){let m=(n+(s-n)*g)/2,_=p(g);u([-m,0,-e*g],[m,0,-e*g],[m,_,-e*g],[-m,_,-e*g])}function p(g){return t+(r-t)*g}let x=new Float32Array(f*2);for(let g=d;g<f;g++){let m=[.12,.3,.5,.7][Math.floor((g-d)/4)];x[g*2]=1,x[g*2+1]=m}return h.setAttribute("aSlice",new Ze(x,2)),h.setAttribute("position",new Ze(new Float32Array(a),3)),h.setAttribute("uv",new Ze(new Float32Array(l),2)),h.setIndex(c),h.computeVertexNormals(),h}function Eu(n,t,e,i={}){let s=i.quality||rf(),r=s==="high",o=!!i.dark,a=!!i.night,l=o||a,c=new Gt;c.name="look3d",t.add(c);let f=[],u=W=>(f.push(W),W);n.toneMapping=D0,n.toneMappingExposure=l?1.25:1,n.outputColorSpace=$e,n.shadowMap.enabled=!0,n.shadowMap.type=r?U0:ll;let h=Su,d=o?263430:a?329483:h?3817800:4603706;t.background=new Jt(d),t.fog=new Rr(o?197637:a?329482:h?4870746:5722186,o?a?.085:.065:a?.07:.035);let p=null;if(i.env??r)try{let W=new Cr,L=new _n({side:gn,vertexColors:!0}),X=new we(10,4,10),J=[],tt=X.attributes.position,at=new Jt(l?1382428:6975090),Et=new Jt(l?789258:4208943),gt=new Jt(l?658189:9080466);for(let D=0;D<tt.count;D++){let et=tt.getY(D),dt=et>1?gt:et<-1?Et:at;J.push(dt.r,dt.g,dt.b)}X.setAttribute("color",new Ze(new Float32Array(J),3)),W.add(new Xt(X,L));let C=new Xt(new Fe(2,2.6),new _n({color:new Jt(a?2898514:14674165).multiplyScalar(a?1:3),side:Le}));C.position.set(0,-.6,4.9),W.add(C);let S=new Ar(n);p=S.fromScene(W,.02),S.dispose(),X.dispose(),L.dispose(),C.geometry.dispose(),C.material.dispose(),t.environment=p.texture,t.environmentIntensity=o?.35:a?.3:.6}catch{p=null}let x=null;i.fill!==!1&&(x=o?new Ur(h?8030880:10131104,h?1906707:2760728,a?.55:.95):a?new Ur(6123404,1380878,.6):new Ur(h?14081768:16773342,h?9209726:10126960,1.5),c.add(x));let g=null,m=!1,_=1,y=70,b=new sn;if(i.flashlight!==!1){let W=new To(16773596,0,26,.48,.55,2);W.position.set(.22,-.2,.05),b.position.set(.04,-.22,-4),e.add(W,b),W.target=b,e.parent!==t&&!e.parent&&t.add(e),W.castShadow=!0,W.shadow.mapSize.set(r?1024:512,r?1024:512),W.shadow.camera.near=.15,W.shadow.camera.far=24,W.shadow.bias=-4e-4,W.shadow.normalBias=.03,W.shadow.radius=r?3:1,W.map=py(),i.flashShadow===!1&&(W.castShadow=!1),g=W,W.setOn=L=>{m=!!L},W.isOn=()=>m,W.setPower=L=>{_=bn(L)}}let I=i.maxLights??(r?6:3),A=0,T=()=>A<I?(A++,!0):!1,P=[],E=u(new Ke({color:10330789,roughness:.55,metalness:.6})),M=u(new Ke({map:J0(),color:10132632,roughness:.4}));function U(W,L,X,J,tt,at){let Et=new Xt(new Fe(tt*2,tt*2),u(new _n({map:j0("pool",0),color:J,transparent:!0,opacity:at,depthWrite:!1,blending:qi,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4})));return Et.rotation.x=-Math.PI/2,Et.position.set(W,L,X),c.add(Et),Et}function B(W,L,X,J="dead"){let tt=new Gt;tt.position.set(W,L,X);let at=Io(W,X);if(J==="emergency"){let Et=new Xt(new we(.34,.12,.2),E);Et.position.y=-.06;let gt=u(new Ke({color:2755076,emissive:16734756,emissiveIntensity:2.4,roughness:.3})),C=new Xt(new ts(.06,12,8),gt);C.position.y=-.17;let S=new Xt(new Qi(.075,.075,.12,8,1,!0),u(new Ke({color:2236962,wireframe:!0})));S.position.y=-.17;let D=new xo(u(new Ir({map:vu("255,110,50"),blending:qi,depthWrite:!1,transparent:!0,opacity:.6})));D.scale.set(.7,.7,1),D.position.y=-.17,tt.add(Et,C,S,D);let et=null;T()?(et=new ks(16738864,2.4,9,2),et.position.y=-.3,tt.add(et)):U(W,.012,X,16738864,2.4,.18),P.push({light:et,mats:[gt],glow:D,base:et?et.intensity:0,baseE:2.4,state:J,t:at*10,seed:at})}else{let Et=new Xt(new we(.62,.08,1.22),E);Et.position.y=-.04;let gt=J==="flicker",C=gt?u(new Ke({map:J0(),color:13160146,emissive:15397631,emissiveMap:J0(),emissiveIntensity:2.2,roughness:.4})):M,S=new Xt(new Fe(.56,1.16),C);if(S.rotation.x=Math.PI/2,S.position.y=-.082,tt.add(Et,S),!gt&&at<.3){tt.rotation.x=(at<.15?1:-1)*(.45+at),tt.position.y-=.35;let D=new Xt(new Qi(.004,.004,.5,4),E);D.position.set(.25,.2,0),tt.add(D)}if(gt){let D=null;T()?(D=new ks(14674431,14,13,2),D.position.y=-.35,tt.add(D)):U(W,.012,X,14674431,3,.3),P.push({light:D,mats:[C],base:D?D.intensity:0,baseE:2.2,state:J,t:at*10,seed:at,off:0})}}return c.add(tt),tt}function V(W,L,X,J=0){let tt=new Gt,at=u(new Ke({map:Mu(),emissive:16777215,emissiveMap:Mu(),emissiveIntensity:1.6,roughness:.5})),Et=new Xt(new we(.38,.2,.06),[E,E,E,E,at,at]),gt=new xo(u(new Ir({map:vu("80,255,120"),blending:qi,depthWrite:!1,transparent:!0,opacity:.55})));return gt.scale.set(1.1,.7,1),tt.add(Et,gt),tt.position.set(W,L,X),tt.rotation.y=J,c.add(tt),tt}let H=[];function rt(W,L,X=a,J={}){let tt=J.width??1.8,at=J.height??2.2,Et=J.length??5.5,gt=J.rotY??0,C=new Gt;C.position.set(W,0,L),C.rotation.y=gt;let S=X?8492987:14477567,D=new To(S,X?6:60,16,.85,1,2);D.position.set(0,at+.6,1.6);let et=new sn;et.position.set(0,0,-3.5),C.add(D,et),D.target=et;let dt=u(new Qn({vertexShader:_y,fragmentShader:by,transparent:!0,depthWrite:!1,blending:qi,side:Le,uniforms:{uColor:{value:new Jt(S)},uAlpha:{value:X?.16:.5},uTime:{value:0}}})),lt=new Xt(vy(tt,at,Et),dt);lt.position.z=-.05,lt.renderOrder=5,C.add(lt);let Wt=u(new _n({map:my(),color:S,transparent:!0,opacity:X?.25:.55,blending:qi,depthWrite:!1,fog:!1,side:Le})),Ot=new Xt(new Fe(tt+2.2,at+1.6),Wt);if(Ot.position.set(0,at/2+.1,-.12),Ot.renderOrder=4,C.add(Ot),J.sky!==!1){let Ht=u(new _n({color:X?2372170:15331576,toneMapped:!1,fog:!1})),pe=new Xt(new Fe(tt+6,at+4),Ht);pe.position.set(0,at/2+1,2.4),pe.rotation.y=Math.PI;let Mt=u(new _n({color:X?3951200:13226716,fog:!1})),Pt=new Xt(new Fe(tt+6,2.3),Mt);Pt.rotation.x=-Math.PI/2,Pt.position.set(0,.005,1.25),C.add(pe,Pt)}return c.add(C),H.push({x:W,z:L,w:tt,L:Et,rotY:gt,mat:dt,night:X}),{group:C,light:D,shaft:lt}}let $=[];function pt(W,L){let X=W.min?{minX:W.min.x,maxX:W.max.x,minY:W.min.y,maxY:W.max.y,minZ:W.min.z,maxZ:W.max.z}:W,J=(X.maxX-X.minX)*(X.maxY-X.minY)*(X.maxZ-X.minZ),tt=L??Math.min(r?700:220,Math.max(80,Math.round(J*(r?1.6:.6)))),at=Sn(Math.floor((X.minX+X.maxZ)*100)+7),Et=new Float32Array(tt*3);for(let D=0;D<Et.length;D++)Et[D]=at();let gt=new Ue;gt.setAttribute("seed",new Ze(Et,3)),gt.setAttribute("position",new Ze(new Float32Array(tt*3),3)),gt.boundingSphere=null;let C=u(new Qn({vertexShader:xy,fragmentShader:yy,transparent:!0,depthWrite:!1,blending:qi,uniforms:{uTime:{value:0},uScale:{value:500},uMin:{value:new N(X.minX,X.minY,X.minZ)},uSize:{value:new N(X.maxX-X.minX,X.maxY-X.minY,X.maxZ-X.minZ)},uFlashPos:{value:new N},uFlashDir:{value:new N(0,0,-1)},uFlashCos:{value:Math.cos(.48)},uFlashOn:{value:0},uShaft:{value:[new ke(0,0,1,1),new ke(0,0,1,1)]},uShaftOn:{value:[0,0]}}})),S=new $a(gt,C);return S.frustumCulled=!1,S.renderOrder=6,c.add(S),$.push(C),S}function Q(W,L,X,J=0,tt="closed",at){let Et=at??Math.floor(Io(W,X)*4),[gt,C]=dl[tt]||dl.closed,S=u(new Ke({map:gy(tt,Et),roughness:.92,alphaTest:.5,side:Le,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-2})),D=new Xt(new Fe(gt,C),S);return D.position.set(W+Math.sin(J)*.012,L,X+Math.cos(J)*.012),D.rotation.set(0,J,(Io(X,W)-.5)*.12),D.receiveShadow=!0,c.add(D),D}let vt=0;function Lt(W,L,X="dirt",J=1,tt=0){let at=Math.floor(Io(W*3,L*5)*3),Et=X==="water",gt=u(new Ke({map:j0(X,at),transparent:!0,depthWrite:!1,roughness:Et?.06:X==="snow"?.85:.95,metalness:Et?.2:0,color:Et?10133670:16777215,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-4})),C=new Xt(new Fe(J,J),gt);return C.rotation.set(-Math.PI/2,0,tt),vt=(vt+1)%8,C.position.set(W,.003+vt*8e-4,L),C.receiveShadow=!0,C.renderOrder=1,c.add(C),C}let Bt=u(new Ue);Bt.setAttribute("position",new Ze(new Float32Array([0,0,0,.05,0,-.012,.018,0,.04]),3)),Bt.setAttribute("normal",new Ze(new Float32Array([0,1,0,0,1,0,0,1,0]),3));let se=u(new Ke({color:14675698,roughness:.04,metalness:0,transparent:!0,opacity:.55,side:Le,envMapIntensity:3}));function be(W,L,X=1.2){let J=new Gt,tt=Sn(Math.floor(Io(W,L)*1e6)+3),at=Lt(W,L,"glass",X,tt()*6.3);at.material.roughness=.05,at.material.envMapIntensity=3,J.add(at);for(let Et=0;Et<(r?18:8);Et++){let gt=new Xt(Bt,se),C=tt()*6.3,S=tt()**1.5*X*.45;gt.position.set(W+Math.cos(C)*S,.006,L+Math.sin(C)*S),gt.rotation.set((tt()-.5)*.3,tt()*6.3,(tt()-.5)*.3),gt.scale.setScalar(.6+tt()*1.6),J.add(gt)}return c.add(J),J}function ot(W,L,X,J,tt=.7){let at=j0("grime",0),Et=u(new _n({map:at,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-3,color:16777215})),gt=(C,S,D,et)=>{let dt=new Xt(new Fe(D,tt),Et);dt.rotation.set(-Math.PI/2,0,et),dt.position.set(C,.002,S),dt.renderOrder=1,c.add(dt)};gt((W+L)/2,X+tt/2,L-W,0),gt((W+L)/2,J-tt/2,L-W,Math.PI),gt(W+tt/2,(X+J)/2,J-X,Math.PI/2),gt(L-tt/2,(X+J)/2,J-X,-Math.PI/2)}let yt=0,Vt=new N,At=new N,ne=new N,le=new bt,ie=1;function Se(W,L){if(yt+=W,g){let X=_;m&&X<.2&&(Math.random()<W*3&&(ie=.2+Math.random()*.6),ie+=(1-ie)*Math.min(1,W*6),X=(.35+X*3)*ie),g.intensity=m?y*Math.max(0,Math.min(1,X)):0}for(let X of P){let J;if(X.state==="emergency")J=.88+.08*Math.sin(yt*2.1+X.seed*9)+.04*Math.sin(yt*31+X.seed*3);else{if(X.t-=W,X.t<=0){let tt=Math.random();X.burst>0?(X.burst--,X.off=X.off?0:1,X.t=.03+Math.random()*.09):tt<.5?(X.off=0,X.t=.8+Math.random()*3.5):tt<.85?(X.burst=3+Math.floor(Math.random()*8),X.t=.05):(X.off=1,X.t=.4+Math.random()*1.6)}J=X.off?.04:.92+Math.random()*.08}X.light&&(X.light.intensity=X.base*J);for(let tt of X.mats)tt.emissiveIntensity=X.baseE*J;X.glow&&(X.glow.material.opacity=.6*J)}if($.length){e.getWorldPosition(Vt),L&&Vt.copy(L),e.getWorldDirection(At),g?g.getWorldPosition(ne):ne.copy(Vt),n.getDrawingBufferSize(le);let X=le.y/(2*Math.tan(ms.degToRad(e.fov||70)/2));for(let J of $){let tt=J.uniforms;tt.uTime.value=yt,tt.uScale.value=X,tt.uFlashPos.value.copy(ne),tt.uFlashDir.value.copy(At),tt.uFlashOn.value=g?g.intensity/y:0;for(let at=0;at<2;at++){let Et=H[at];Et&&Math.abs(Et.rotY)<.01?(tt.uShaft.value[at].set(Et.x,Et.z,Et.w/2,Et.L),tt.uShaftOn.value[at]=Et.night?.25:1):tt.uShaftOn.value[at]=0}}}for(let X of H)X.mat.uniforms.uTime.value=yt}function ht(){t.remove(c),g&&e.remove(g,b),c.traverse(W=>{W.geometry&&W.geometry.dispose()});for(let W of f)W.dispose?.();p&&(t.environment===p.texture&&(t.environment=null),p.dispose())}return{quality:s,group:c,fill:x,flashlight:g,update:Se,dispose:ht,addCeilingLight:B,addExitSign:V,addDoorLight:rt,addDust:pt,addWallNotice:Q,addDecal:Lt,addBrokenGlass:be,addRoomShade:ot,setExposure:W=>{n.toneMappingExposure=W},lightsUsed:()=>A}}var on=new Map,My=new Map,Fu=new Map;function tn(n,t,e){let i=n.get(t);return i===void 0&&(i=e(),n.set(t,i)),i}function ns(n){let t=n>>>0^2654435769;return()=>{t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function zs(n){let t=2166136261;for(let e=0;e<n.length;e++)t^=n.charCodeAt(e),t=Math.imul(t,16777619);return t>>>0}var gl=!0;function Bu(n){let t=gl;gl=!1;try{return n()}finally{gl=t}}var gs=!(typeof location<"u"&&/[?&]style=real\b/.test(location.search||"")),ee=(n,t)=>t[Math.floor(n()*t.length)%t.length],Tt=Math.PI*2,Sy='Arial, Helvetica, "Liberation Sans", "DejaVu Sans", sans-serif',Mi='"Arial Narrow", "Liberation Sans Narrow", Arial, Helvetica, sans-serif';function zu(n,t){if(typeof document<"u"){let e=document.createElement("canvas");return e.width=n,e.height=t,e}return typeof OffscreenCanvas<"u"?new OffscreenCanvas(n,t):null}function St(n,t,e,i,s={}){return tn(Fu,n,()=>{let r=zu(t,e);if(!r)return null;let o=r.getContext("2d");i(o,t,e,ns(zs(n)));let a=new Dn(r);return a.colorSpace=s.data?ri:$e,a.anisotropy=4,s.repeat&&(a.wrapS=a.wrapT=Zi,a.repeat.set(s.repeat[0],s.repeat[1])),a})}function kt(n,t,e,i,s,r={}){n.save(),n.font=`${r.italic?"italic ":""}${r.weight||"bold"} ${s}px ${r.font||Sy}`,n.fillStyle=r.color||"#111",n.textAlign=r.align||"center",n.textBaseline=r.baseline||"middle",n.translate(e,i),r.rot&&n.rotate(r.rot);let o=n.measureText(t).width,a=r.sx||1;r.maxW&&o*a>r.maxW?n.scale(r.maxW/o,1):a!==1&&n.scale(a,1),r.stroke&&(n.lineWidth=r.strokeW||s*.12,n.strokeStyle=r.stroke,n.lineJoin="round",n.strokeText(t,0,0)),n.fillText(t,0,0),n.restore()}function qe(n,t,e,i,s,r,o,a="rgba(0,0,0,0.55)"){if(!gs){n.fillStyle=a;for(let l=0;l<s;l++){let c=t,f=t+i*(l===s-1?.3+o()*.5:.85+o()*.15);for(;c<f;){let u=Math.min(f-c,r*(.8+o()*3));n.fillRect(c,e+l*r,u,r*.55),c+=u+r*.45}}}}function Gr(n,t,e,i,s,r){if(gs)return;n.fillStyle="#fff",n.fillRect(t-i*.06,e-s*.06,i*1.12,s*1.3),n.fillStyle="#000";let o=t;for(;o<t+i;){let a=Math.max(1,(r()<.6?1:2+Math.floor(r()*2))*i/95);r()<.55&&n.fillRect(o,e,a,s),o+=a}n.fillRect(t,e,i/95,s*1.08),n.fillRect(t+i-i/95,e,i/95,s*1.08),qe(n,t+i*.1,e+s*1.06,i*.8,1,s*.18,r,"#000")}function Hu(n,t,e,i,s,r){if(gs)return;n.fillStyle="#fff",n.fillRect(t,e,i,s),n.strokeStyle="#000",n.lineWidth=Math.max(1,i*.012),n.strokeRect(t,e,i,s),kt(n,"Nutrition Facts",t+i*.06,e+s*.08,s*.1,{align:"left",color:"#000",maxW:i*.88,font:Mi}),n.fillStyle="#000",n.fillRect(t+i*.05,e+s*.17,i*.9,s*.035);let o=9;for(let a=0;a<o;a++){let l=e+s*(.24+a*.075);qe(n,t+i*.06,l,i*.6,1,s*.05,r,"#000"),qe(n,t+i*.78,l,i*.14,1,s*.05,r,"#000"),n.fillRect(t+i*.05,l+s*.055,i*.9,Math.max(1,s*.006))}n.fillRect(t+i*.05,e+s*.92,i*.9,s*.02)}function re(n,t,e,i,s=1){if(!gs){for(let r=0;r<260*s;r++){n.fillStyle=i()<.5?`rgba(70,60,45,${.05+i()*.08})`:`rgba(255,255,255,${.04+i()*.06})`;let o=1+i()*2.5;n.fillRect(i()*t,i()*e,o,o)}for(let r=0;r<4*s;r++){let o=i()*t,a=i()*e,l=(.05+i()*.18)*Math.max(t,e),c=n.createRadialGradient(o,a,0,o,a,l);c.addColorStop(0,`rgba(80,66,44,${.05+i()*.08})`),c.addColorStop(1,"rgba(80,66,44,0)"),n.fillStyle=c,n.fillRect(o-l,a-l,l*2,l*2)}for(let r=0;r<3*s;r++){n.strokeStyle=`rgba(255,255,255,${.08+i()*.1})`,n.lineWidth=1,n.beginPath();let o=i()*t,a=i()*e;n.moveTo(o,a),n.lineTo(o+(i()-.5)*t*.3,a+(i()-.5)*e*.2),n.stroke()}}}function _e(n,t,e,i,s,r,o=4e3,a=2){gs&&(r*=.25,o=Math.round(o/3),a*=1.5),n.fillStyle=s,n.fillRect(0,0,t,e);for(let l=0;l<o;l++){let c=(i()-.5)*r;n.fillStyle=c>0?`rgba(255,255,255,${c})`:`rgba(0,0,0,${-c})`,n.fillRect(i()*t,i()*e,a*(.5+i()),a*(.5+i()))}}function Yn(n,t){let e=new Jt(n);return t<0?e.multiplyScalar(1+t):e.lerp(new Jt(16777215),t),"#"+e.getHexString()}function bl(n,t,e,i,s,r){n.save(),n.translate(e,i);let o=(l,c,f,u)=>{n.fillStyle=u,n.beginPath(),n.arc(l,c,f,0,Tt),n.fill()},a=(l,c,f,u,h,d)=>{n.fillStyle=d,n.beginPath(),n.ellipse(l,c,f,u,h,0,Tt),n.fill()};switch(t){case"beans":case"chili":a(0,s*.25,s*.9,s*.35,0,"#f3efe6"),a(0,s*.12,s*.75,s*.28,0,t==="chili"?"#7a1e10":"#9a4a1c");for(let l=0;l<16;l++)a((r()-.5)*s*1.2,s*(.05+r()*.15),s*.13,s*.08,r()*3,t==="chili"?"#5a140c":"#c06a2c");break;case"soup":a(0,s*.3,s*.95,s*.4,0,"#fafafa"),a(0,s*.18,s*.78,s*.26,0,"#e8b850");for(let l=0;l<9;l++)a((r()-.5)*s,s*(.1+r()*.12),s*.12,s*.05,r()*3,r()<.5?"#f6e3b0":"#d9822b");n.strokeStyle="rgba(255,255,255,0.8)",n.lineWidth=s*.06;for(let l=-1;l<=1;l++)n.beginPath(),n.moveTo(l*s*.3,-s*.15),n.bezierCurveTo(l*s*.3+s*.15,-s*.4,l*s*.3-s*.15,-s*.55,l*s*.3,-s*.8),n.stroke();break;case"corn":for(let l=0;l<30;l++)o((r()-.5)*s*1.4,(r()-.5)*s*.9,s*.13,l%3?"#f2c21b":"#e0a812");a(-s*.6,s*.1,s*.5,s*.15,-.6,"#5c9a2c");break;case"peas":for(let l=0;l<26;l++)o((r()-.5)*s*1.4,(r()-.5)*s*.9,s*.14,l%4?"#5aa43a":"#3f8a28");break;case"tomato":case"fruit":case"peach":case"apple":{let l=t==="tomato"?"#d8261c":t==="peach"?"#f39a42":t==="apple"?"#c8221c":"#f2a33a";o(-s*.35,s*.1,s*.5,l),o(s*.4,s*.15,s*.45,t==="fruit"?"#f2d24a":l),a(-s*.5,-s*.1,s*.15,s*.1,-.5,"rgba(255,255,255,0.45)"),a(-s*.3,-s*.42,s*.22,s*.08,-.4,"#3f8a28");break}case"fish":a(0,0,s*.85,s*.35,0,"#7f98ad"),n.fillStyle="#7f98ad",n.beginPath(),n.moveTo(s*.7,0),n.lineTo(s*1.1,-s*.35),n.lineTo(s*1.1,s*.35),n.fill(),o(-s*.55,-s*.05,s*.07,"#111");break;case"grain":n.strokeStyle="#c9a24a",n.lineWidth=s*.06;for(let l=-1;l<=1;l++){n.beginPath(),n.moveTo(l*s*.3,s*.9),n.lineTo(l*s*.15,-s*.6),n.stroke();for(let c=0;c<6;c++)a(l*s*.15-s*.1,-s*.5+c*s*.18,s*.1,s*.05,.6,"#d9b25a"),a(l*s*.15+s*.1,-s*.5+c*s*.18,s*.1,s*.05,-.6,"#d9b25a")}break;case"noodle":a(0,s*.3,s*.9,s*.35,0,"#fff"),n.strokeStyle="#f0d48a",n.lineWidth=s*.06;for(let l=0;l<7;l++){n.beginPath(),n.moveTo(-s*.7,s*(.05+l*.05));for(let c=-.7;c<=.7;c+=.1)n.lineTo(c*s,s*(.05+l*.05)+Math.sin(c*14+l)*s*.05);n.stroke()}a(s*.3,s*.08,s*.15,s*.07,0,"#d9822b"),a(-s*.25,s*.12,s*.1,s*.06,0,"#5aa43a");break;case"chip":for(let l=0;l<7;l++)a((r()-.5)*s*1.3,(r()-.3)*s*.9,s*.38,s*.26,r()*3,l%2?"#f0c24a":"#e6ae32");break;case"meat":for(let l=0;l<4;l++)n.fillStyle=l%2?"#6a2c18":"#7d3a1e",n.save(),n.rotate(-.4+l*.25),n.fillRect(-s*.8,-s*.12+l*s*.05,s*1.6,s*.2),n.restore();break;case"oats":a(0,s*.3,s*.95,s*.4,0,"#2a4f8a"),a(0,s*.18,s*.8,s*.27,0,"#e9dcc0");for(let l=0;l<30;l++)a((r()-.5)*s*1.3,s*(.08+r()*.18),s*.07,s*.04,r()*3,"#cdb98a");Ey(n,s*.6,-s*.4,s*.5);break;case"peanut":for(let l=0;l<3;l++)n.save(),n.translate((l-1)*s*.55,l%2*s*.2),n.rotate(.5-l*.4),a(0,-s*.18,s*.22,s*.25,0,"#d4a35c"),a(0,s*.18,s*.24,s*.27,0,"#d4a35c"),n.restore();break;case"cross":n.fillStyle="#d61f26",n.fillRect(-s*.2,-s*.65,s*.4,s*1.3),n.fillRect(-s*.65,-s*.2,s*1.3,s*.4);break;case"wcross":n.fillStyle="#fff",n.fillRect(-s*.2,-s*.65,s*.4,s*1.3),n.fillRect(-s*.65,-s*.2,s*1.3,s*.4);break;case"pill":n.save(),n.rotate(-.5),n.fillStyle="#fff",n.beginPath(),n.roundRect(-s*.7,-s*.25,s*.7,s*.5,[s*.25,0,0,s*.25]),n.fill(),n.fillStyle="#e8572a",n.beginPath(),n.roundRect(0,-s*.25,s*.7,s*.5,[0,s*.25,s*.25,0]),n.fill(),n.restore(),o(s*.5,s*.45,s*.2,"#fff");break;case"drop":n.fillStyle="#3d8fd6",n.beginPath(),n.moveTo(0,-s*.8),n.bezierCurveTo(s*.7,0,s*.6,s*.7,0,s*.7),n.bezierCurveTo(-s*.6,s*.7,-s*.7,0,0,-s*.8),n.fill(),a(-s*.2,s*.2,s*.12,s*.2,.3,"rgba(255,255,255,0.5)");break;case"bolt":n.fillStyle="#f5c518",n.beginPath(),n.moveTo(s*.1,-s*.8),n.lineTo(-s*.45,s*.1),n.lineTo(-s*.05,s*.1),n.lineTo(-s*.2,s*.8),n.lineTo(s*.45,-s*.15),n.lineTo(s*.05,-s*.15),n.closePath(),n.fill();break;case"flame":n.fillStyle="#f08a1c",n.beginPath(),n.moveTo(0,-s*.85),n.bezierCurveTo(s*.7,-s*.1,s*.55,s*.75,0,s*.75),n.bezierCurveTo(-s*.55,s*.75,-s*.6,0,0,-s*.85),n.fill(),n.fillStyle="#ffd34a",n.beginPath(),n.moveTo(0,-s*.2),n.bezierCurveTo(s*.35,s*.2,s*.3,s*.65,0,s*.65),n.bezierCurveTo(-s*.3,s*.65,-s*.3,s*.2,0,-s*.2),n.fill();break;case"paw":a(0,s*.3,s*.42,s*.36,0,"#3b2a1c"),a(-s*.48,-s*.15,s*.16,s*.21,-.3,"#3b2a1c"),a(-s*.17,-s*.45,s*.16,s*.21,-.1,"#3b2a1c"),a(s*.17,-s*.45,s*.16,s*.21,.1,"#3b2a1c"),a(s*.48,-s*.15,s*.16,s*.21,.3,"#3b2a1c");break;case"bug":a(0,0,s*.3,s*.45,0,"#3a2a1a"),n.strokeStyle="#3a2a1a",n.lineWidth=s*.06;for(let l=-1;l<=1;l++)n.beginPath(),n.moveTo(-s*.25,l*s*.2),n.lineTo(-s*.6,l*s*.35),n.moveTo(s*.25,l*s*.2),n.lineTo(s*.6,l*s*.35),n.stroke();n.strokeStyle="#d61f26",n.lineWidth=s*.12,n.beginPath(),n.arc(0,0,s*.8,0,Tt),n.moveTo(-s*.56,-s*.56),n.lineTo(s*.56,s*.56),n.stroke();break;case"leaf":case"seedling":n.strokeStyle="#3f7a2a",n.lineWidth=s*.08,n.beginPath(),n.moveTo(0,s*.8),n.lineTo(0,-s*.1),n.stroke(),a(-s*.3,-s*.2,s*.35,s*.16,-.5,"#5aa43a"),a(s*.3,-s*.35,s*.35,s*.16,.5,"#6bb84a");break;case"carrot":n.fillStyle="#ee7a1c",n.beginPath(),n.moveTo(-s*.3,-s*.5),n.lineTo(s*.3,-s*.5),n.lineTo(0,s*.9),n.fill(),a(-s*.15,-s*.75,s*.12,s*.3,-.3,"#4c9a2c"),a(s*.15,-s*.75,s*.12,s*.3,.3,"#4c9a2c");break;case"bean":n.strokeStyle="#4c9a2c",n.lineWidth=s*.18,n.lineCap="round";for(let l=-1;l<=1;l++)n.beginPath(),n.moveTo(l*s*.35,-s*.7),n.quadraticCurveTo(l*s*.35+s*.3,0,l*s*.35,s*.7),n.stroke();break;case"sun":o(0,0,s*.45,"#f5b51c"),n.strokeStyle="#f5b51c",n.lineWidth=s*.08;for(let l=0;l<12;l++){let c=l*Tt/12;n.beginPath(),n.moveTo(Math.cos(c)*s*.58,Math.sin(c)*s*.58),n.lineTo(Math.cos(c)*s*.85,Math.sin(c)*s*.85),n.stroke()}break;case"snow":n.strokeStyle="#fff",n.lineWidth=s*.08;for(let l=0;l<3;l++)n.save(),n.rotate(l*Math.PI/3),n.beginPath(),n.moveTo(0,-s*.8),n.lineTo(0,s*.8),n.moveTo(-s*.2,-s*.6),n.lineTo(0,-s*.4),n.lineTo(s*.2,-s*.6),n.moveTo(-s*.2,s*.6),n.lineTo(0,s*.4),n.lineTo(s*.2,s*.6),n.stroke(),n.restore();break;case"screw":n.fillStyle="#9aa0a6",n.fillRect(-s*.1,-s*.5,s*.2,s*1.2),n.fillRect(-s*.3,-s*.65,s*.6,s*.15),n.strokeStyle="#555",n.lineWidth=s*.05;for(let l=0;l<8;l++)n.beginPath(),n.moveTo(-s*.14,-s*.4+l*s*.13),n.lineTo(s*.14,-s*.34+l*s*.13),n.stroke();break;case"battery":n.fillStyle="#1a1a1a",n.fillRect(-s*.3,-s*.55,s*.6,s*1.3),n.fillStyle="#c98a2a",n.fillRect(-s*.3,-s*.55,s*.6,s*.4),n.fillStyle="#bbb",n.fillRect(-s*.1,-s*.7,s*.2,s*.15);break;case"tooth":n.fillStyle="#fff",n.beginPath(),n.moveTo(-s*.5,-s*.4),n.quadraticCurveTo(0,-s*.7,s*.5,-s*.4),n.lineTo(s*.35,s*.7),n.lineTo(s*.1,s*.1),n.lineTo(-s*.1,s*.1),n.lineTo(-s*.35,s*.7),n.closePath(),n.fill();break;case"bubble":for(let l=0;l<7;l++)n.strokeStyle="rgba(255,255,255,0.9)",n.lineWidth=s*.05,n.beginPath(),n.arc((r()-.5)*s*1.2,(r()-.5)*s*1.2,s*(.1+r()*.25),0,Tt),n.stroke();break;case"moon":o(0,0,s*.6,"#f2e6a0"),o(s*.28,-s*.15,s*.5,"rgba(20,30,70,1)");break;case"bottle":n.fillStyle="rgba(255,255,255,0.9)",n.fillRect(-s*.25,-s*.2,s*.5,s*.9),n.fillRect(-s*.1,-s*.5,s*.2,s*.3);break;default:o(0,0,s*.5,"rgba(255,255,255,0.6)")}n.restore()}function Ey(n,t,e,i){n.save(),n.translate(t,e),n.strokeStyle="#c9a24a",n.lineWidth=i*.06,n.beginPath(),n.moveTo(0,i),n.lineTo(0,-i*.5),n.stroke(),n.fillStyle="#d9b25a";for(let s=0;s<5;s++)n.beginPath(),n.ellipse(-i*.1,-i*.4+s*i*.2,i*.1,i*.05,.6,0,Tt),n.ellipse(i*.1,-i*.4+s*i*.2,i*.1,i*.05,-.6,0,Tt),n.fill();n.restore()}function _l(n,t,e,i,s){n.fillStyle=i.b,n.fillRect(0,0,t,e),n.fillStyle=i.a,n.fillRect(0,0,t,e*.12),n.fillRect(0,e*.88,t,e*.12),n.fillStyle=Yn(i.a,.25),n.beginPath(),n.moveTo(t*.22,e*.62),n.bezierCurveTo(t*.4,e*.5,t*.6,e*.75,t*.78,e*.6),n.lineTo(t*.78,e*.88),n.lineTo(t*.22,e*.88),n.fill();let r=t*.5,o=t*.42;i.p&&(n.fillStyle="rgba(255,255,255,0.18)",n.beginPath(),n.ellipse(r,e*.66,o*.36,e*.2,0,0,Tt),n.fill(),bl(n,i.p,r,e*.66,e*.17,s)),kt(n,i.t,r,e*.3,e*.2,{color:i.f,maxW:o,font:Mi,stroke:i.st}),i.s&&kt(n,i.s,r,e*.45,e*.08,{color:i.f,maxW:o*.9,weight:"bold"}),i.n&&kt(n,i.n,r,e*.94,e*.055,{color:i.nf||"#fff",maxW:o}),i.tag&&kt(n,i.tag,r,e*.06,e*.06,{color:"#fff",maxW:o}),Hu(n,t*.04,e*.16,t*.16,e*.68,s),qe(n,t*.8,e*.18,t*.16,6,e*.045,s,"rgba(0,0,0,0.45)"),Gr(n,t*.82,e*.52,t*.12,e*.2,s),re(n,t,e,s,.8)}function mf(n,t,e,i,s){n.fillStyle=i.b,n.fillRect(0,0,t,e),n.fillStyle=i.a,n.fillRect(0,0,t,e*.16),n.beginPath(),n.moveTo(0,e*.16),n.lineTo(t,e*.16),n.lineTo(t,e*.22),n.quadraticCurveTo(t*.5,e*.3,0,e*.22),n.fill(),i.tag&&(n.fillStyle=i.tc||"#e8302a",n.beginPath(),n.arc(t*.82,e*.3,Math.min(t,e)*.12,0,Tt),n.fill(),kt(n,i.tag,t*.82,e*.3,Math.min(t,e)*.06,{color:"#fff",maxW:Math.min(t,e)*.2})),i.top&&kt(n,i.top,t/2,e*.08,e*.07,{color:i.tf||"#fff",maxW:t*.86}),kt(n,i.t,t/2,e*(i.t2?.34:.4),Math.min(e*.13,t*.3),{color:i.f,maxW:t*.88,font:Mi,stroke:i.st}),i.t2&&kt(n,i.t2,t/2,e*.46,Math.min(e*.1,t*.24),{color:i.f,maxW:t*.88,font:Mi,stroke:i.st}),i.s&&kt(n,i.s,t/2,e*.56,Math.min(e*.055,t*.1),{color:i.f,maxW:t*.85}),i.p&&(n.fillStyle="rgba(255,255,255,0.16)",n.beginPath(),n.ellipse(t/2,e*.75,t*.36,e*.13,0,0,Tt),n.fill(),bl(n,i.p,t/2,e*.75,Math.min(t*.32,e*.14),s)),i.n&&(n.fillStyle="rgba(0,0,0,0.25)",n.fillRect(0,e*.91,t,e*.09),kt(n,i.n,t/2,e*.955,e*.045,{color:"#fff",maxW:t*.9})),re(n,t,e,s,.7)}function wy(n,t,e,i,s){n.fillStyle=i.b,n.fillRect(0,0,t,e),n.fillStyle=i.a,n.fillRect(0,0,t,e*.16),i.food!==!1?Hu(n,t*.1,e*.22,t*.8,e*.5,s):(n.fillStyle="#fff",n.fillRect(t*.08,e*.22,t*.84,e*.5),qe(n,t*.12,e*.25,t*.76,12,e*.035,s,"#333")),Gr(n,t*.2,e*.78,t*.6,e*.12,s),re(n,t,e,s,.7)}function j(n,t,e){return gs&&gl&&Math.min(n,t,e)>=.04?qt(n,t,e,Math.min(n,t,e)*.16):tn(on,`box${n},${t},${e}`,()=>new we(n,t,e).translate(0,t/2,0))}function Z(n,t,e,i=16,s=!1){return tn(on,`cyl${n},${t},${e},${i},${s}`,()=>new Qi(n,t,e,i,1,s,Math.PI,Tt).translate(0,e/2,0))}function hn(n,t=12,e=8){return tn(on,`sph${n},${t},${e}`,()=>new ts(n,t,e))}function Fn(n,t=16){return tn(on,`circ${n},${t}`,()=>new bo(n,t).rotateX(-Math.PI/2))}function Ie(n,t,e=6,i=16,s=Tt){return tn(on,`tor${n},${t},${e},${i},${s}`,()=>new sl(n,t,e,i,s))}function Ge(n,t,e=16){return tn(on,"lathe"+n+e,()=>new el(t.map(i=>new bt(Math.max(1e-4,i[0]),i[1])),e,Math.PI,Tt))}function Ln(n,t,e,i=16,s=6,r=!1){return tn(on,"tube"+n,()=>new Eo(new Pr(t.map(o=>new N(o[0],o[1],o[2])),r),i,e,s,r))}function qt(n,t,e,i){return tn(on,`rbox${n},${t},${e},${i}`,()=>{let s=new we(n,t,e,3,3,3),r=s.attributes.position,o=s.attributes.normal,a=n/2,l=t/2,c=e/2,f=Math.min(i,a*.9,l*.9,c*.9),u=a-f,h=l-f,d=c-f,p=new N,x=new N,g=(_,y,b)=>Math.abs(Math.abs(_)-y/3)<1e-6?Math.sign(_)*b:_,m=s.attributes.uv;for(let _=0;_<r.count;_++){let y=o.getX(_),b=o.getY(_),I=o.getZ(_),A=g(r.getX(_),a,u)/n,T=g(r.getY(_),l,h)/t,P=g(r.getZ(_),c,d)/e;Math.abs(I)>.5?m.setXY(_,.5+A*Math.sign(I),.5+T):Math.abs(y)>.5?m.setXY(_,.5-P*Math.sign(y),.5+T):m.setXY(_,.5+A,.5-P*Math.sign(b)),p.set(g(r.getX(_),a,u),g(r.getY(_),l,h),g(r.getZ(_),c,d)),x.set(ms.clamp(p.x,-u,u),ms.clamp(p.y,-h,h),ms.clamp(p.z,-d,d));let E=p.clone().sub(x);E.lengthSq()>1e-12&&(E.normalize(),p.copy(x).addScaledVector(E,f),o.setXYZ(_,E.x,E.y,E.z)),r.setXYZ(_,p.x,p.y+l,p.z)}return s})}function Bo(n,t,e,i=.08,s=6,r=8){return tn(on,`pil${n},${t},${e},${i},${s},${r}`,()=>{let o=new we(n,t,e,s,r,1),a=o.attributes.position;for(let l=0;l<a.count;l++){let c=a.getX(l),f=a.getY(l),u=a.getZ(l),h=Math.abs(c)/(n/2),d=Math.abs(f)/(t/2),p=Math.sqrt(Math.max(0,1-h**4))*Math.sqrt(Math.max(0,1-d**3));i>0&&d>1-i*2&&(p=.06),p=Math.max(.06,p),a.setXYZ(l,c*(1-.04*(1-d)),f+t/2,u*p)}return o.computeVertexNormals(),o})}function wu(n,t,e,i=.001){return tn(on,"ext"+n,()=>{let s=new nl(t(),{depth:e,bevelEnabled:i>0,bevelThickness:i,bevelSize:i,bevelSegments:1,curveSegments:6});return s.translate(0,0,-e/2),s})}function ae(n,t){return tn(My,n,()=>{let e=new Ke(Ay(t));return gs&&Ty(e),e})}function Ty(n){n.onBeforeCompile=t=>{t.fragmentShader=t.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
      float llRim = pow(1.0 - clamp(dot(normal, normalize(vViewPosition)), 0.0, 1.0), 2.5);
      totalEmissiveRadiance += diffuseColor.rgb * (0.06 + 0.32 * llRim);`)},n.customProgramCacheKey=()=>"llSoftRim"}function Ay(n){if(!gs)return n;let t={...n};if(t.transparent||(t.roughness=Math.min(.85,Math.max(.45,(t.roughness??.7)*.7+.22))),t.metalness&&(t.metalness=Math.min(.35,t.metalness*.55)),t.color!==void 0&&!t.map){let e=new Jt(t.color),i={};e.getHSL(i),e.setHSL(i.h,Math.min(1,i.s*1.18),Math.min(.92,i.l*1.04)),t.color=e}return t}function ut(n,t=.7,e=0){return ae(`c${n}|${t}|${e}`,{color:n,roughness:t,metalness:e})}function nt(n,t=.7,e=0,i={}){let s=`t${n?n.uuid:"none"}|${t}|${e}|${JSON.stringify(i)}`;return ae(s,{map:n,roughness:t,metalness:e,...i})}var it={get steel(){return ut(11844030,.38,.55)},get tin(){return ut(13817304,.32,.6)},get alu(){return ut(13225168,.3,.55)},get chrome(){return ut(14212064,.22,.6)},get darkMetal(){return ut(3816769,.5,.45)},get brass(){return ut(12950085,.35,.6)},get blackPl(){return ut(1908256,.55)},get whitePl(){return ut(15526886,.45)},get greyPl(){return ut(9080208,.55)},get rubber(){return ut(1710618,.92)},get paper(){return ut(15789282,.85)},get glass(){return ae("glass",{color:13624298,roughness:.08,metalness:.1,transparent:!0,opacity:.32,depthWrite:!1})},get clearPl(){return ae("clearpl",{color:15003378,roughness:.15,metalness:0,transparent:!0,opacity:.4,depthWrite:!1})}};function Ry(n=0){return St("cardboard"+n,256,256,(t,e,i,s)=>{_e(t,e,i,s,n===1?"#b99868":"#a9824f",.12,3e3,2),t.strokeStyle="rgba(80,55,25,0.18)",t.lineWidth=1;for(let r=0;r<i;r+=4+s()*3)t.beginPath(),t.moveTo(0,r),t.lineTo(e,r+(s()-.5)*3),t.stroke();re(t,e,i,s,.6)})}function Cy(n="FRAGILE",t=0){return St("carton"+n+t,512,512,(e,i,s,r)=>Gu(e,i,s,r,n,t))}function Gu(n,t,e,i,s,r){{_e(n,t,e,i,"#ad8653",.1,4e3,2),n.strokeStyle="rgba(80,55,25,0.15)";for(let o=0;o<e;o+=5+i()*3)n.beginPath(),n.moveTo(0,o),n.lineTo(t,o),n.stroke();n.fillStyle="rgba(200,170,110,0.75)",n.fillRect(t*.43,0,t*.14,e),n.fillStyle="rgba(255,255,255,0.15)",n.fillRect(t*.45,0,t*.02,e),n.fillStyle="rgba(40,30,20,0.75)",kt(n,s,t*.22,e*.25,34,{color:"rgba(40,30,20,0.8)",maxW:t*.36,font:Mi}),kt(n,`${12+r%4*12} CT`,t*.78,e*.25,30,{color:"rgba(40,30,20,0.8)",maxW:t*.36});for(let o=0;o<2;o++){let a=t*(.72+o*.12),l=e*.72;n.beginPath(),n.moveTo(a,l-40),n.lineTo(a-18,l-12),n.lineTo(a-6,l-12),n.lineTo(a-6,l+30),n.lineTo(a+6,l+30),n.lineTo(a+6,l-12),n.lineTo(a+18,l-12),n.fill()}n.strokeStyle="rgba(40,30,20,0.7)",n.lineWidth=3,n.strokeRect(t*.06,e*.62,t*.3,e*.2),qe(n,t*.08,e*.65,t*.26,5,10,i,"rgba(40,30,20,0.6)"),re(n,t,e,i,1.2)}}function Uo(n="#b98c5a",t="#8a5f35",e=""){return St("wood"+n+t+e,256,256,(i,s,r,o)=>{i.fillStyle=n,i.fillRect(0,0,s,r);for(let a=0;a<60;a++){i.strokeStyle=`rgba(${a%2?"90,55,25":"60,35,15"},${.08+o()*.2})`,i.lineWidth=1+o()*3;let l=o()*r;i.beginPath(),i.moveTo(0,l);for(let c=0;c<=s;c+=16)i.lineTo(c,l+Math.sin(c*.02+a)*4+(o()-.5)*2);i.stroke()}i.fillStyle=t,i.globalAlpha=.25;for(let a=0;a<3;a++)i.beginPath(),i.ellipse(o()*s,o()*r,6+o()*6,3+o()*3,0,0,Tt),i.fill();i.globalAlpha=1,re(i,s,r,o,.5)},{repeat:[1,1]})}function Iy(){return St("bark",256,256,(n,t,e,i)=>{_e(n,t,e,i,"#4f3b2a",.25,3e3,3);for(let s=0;s<40;s++){n.strokeStyle=`rgba(20,12,6,${.3+i()*.4})`,n.lineWidth=2+i()*4;let r=i()*t;n.beginPath(),n.moveTo(r,0);for(let o=0;o<=e;o+=20)n.lineTo(r+(i()-.5)*12,o);n.stroke()}n.fillStyle="rgba(110,120,80,0.25)";for(let s=0;s<8;s++)n.beginPath(),n.ellipse(i()*t,i()*e,10+i()*20,5+i()*10,i()*3,0,Tt),n.fill()},{repeat:[1,1]})}function Tu(n=!1){return St("endgrain"+n,128,128,(t,e,i,s)=>{t.fillStyle="#c9a26c",t.fillRect(0,0,e,i);let r=n?0:e/2,o=n?i:i/2;for(let a=1;a<26;a++)t.strokeStyle=`rgba(120,80,40,${.2+s()*.3})`,t.lineWidth=1+s(),t.beginPath(),t.arc(r,o,a*6+s()*2,0,Tt),t.stroke();t.strokeStyle="rgba(60,40,20,0.5)",t.lineWidth=1.5;for(let a=0;a<4;a++)t.beginPath(),t.moveTo(r,o),t.lineTo(r+(s()-.3)*e,o-s()*i),t.stroke()})}function No(n,t=""){return St("knit"+n+t,128,128,(e,i,s,r)=>{e.fillStyle=n,e.fillRect(0,0,i,s);let o=Yn(n,-.35),a=Yn(n,.18);for(let l=0;l<i;l+=8)for(let c=0;c<s;c+=8)e.fillStyle=a,e.beginPath(),e.ellipse(l+2,c+4,2.2,4,-.5,0,Tt),e.ellipse(l+6,c+4,2.2,4,.5,0,Tt),e.fill(),e.fillStyle=o,e.fillRect(l+3.6,c,.8,8);re(e,i,s,r,.3)},{repeat:[3,3]})}function Py(n){return St("quilt"+n,256,256,(t,e,i,s)=>{let r=Yn(n,-.45),o=Yn(n,.22);for(let a=0;a<i;a+=32){let l=t.createLinearGradient(0,a,0,a+32);l.addColorStop(0,r),l.addColorStop(.15,n),l.addColorStop(.5,o),l.addColorStop(.85,n),l.addColorStop(1,r),t.fillStyle=l,t.fillRect(0,a,e,32),t.fillStyle="rgba(0,0,0,0.35)";for(let c=0;c<e;c+=6)t.fillRect(c,a+31,3,1)}re(t,e,i,s,.4)},{repeat:[1,1]})}function bi(n,t=""){return St("nylon"+n+t,128,128,(e,i,s,r)=>{_e(e,i,s,r,n,.06,1500,1),e.strokeStyle="rgba(0,0,0,0.12)",e.lineWidth=1;for(let o=0;o<i;o+=8)e.beginPath(),e.moveTo(o,0),e.lineTo(o,s),e.moveTo(0,o),e.lineTo(i,o),e.stroke();re(e,i,s,r,.4)},{repeat:[2,2]})}function Vu(n,t,e){return St("plaid"+n+t+e,256,256,(i,s,r,o)=>{i.fillStyle=n,i.fillRect(0,0,s,r),i.globalAlpha=.55,i.fillStyle=t;for(let a=0;a<s;a+=64)i.fillRect(a,0,24,r),i.fillRect(0,a,s,24);i.fillStyle=e,i.globalAlpha=.7;for(let a=40;a<s;a+=64)i.fillRect(a,0,4,r),i.fillRect(0,a,s,4);i.globalAlpha=1,cf(i,s,r,o,.05)},{repeat:[1,1]})}function cf(n,t,e,i,s){for(let r=0;r<2500;r++){let o=(i()-.5)*s;n.fillStyle=o>0?`rgba(255,255,255,${o})`:`rgba(0,0,0,${-o})`,n.fillRect(i()*t,i()*e,2,2)}}function zr(n="#b9bec4",t=""){return St("brushed"+n+t,128,128,(e,i,s,r)=>{e.fillStyle=n,e.fillRect(0,0,i,s);for(let o=0;o<300;o++)e.fillStyle=r()<.5?"rgba(255,255,255,0.12)":"rgba(0,0,0,0.1)",e.fillRect(0,r()*s,i,1);re(e,i,s,r,.5)})}function ff(n,t=""){return St("paint"+n+t,256,256,(e,i,s,r)=>{_e(e,i,s,r,n,.06,2e3,2);for(let o=0;o<40;o++)e.fillStyle=r()<.6?"rgba(70,70,72,0.85)":"rgba(110,60,30,0.6)",e.beginPath(),e.ellipse(r()*i,r()*s,1+r()*6,1+r()*3,r()*3,0,Tt),e.fill();re(e,i,s,r,.8)})}function Ly(n=""){return St("lid"+n,128,128,(t,e,i,s)=>{let r=t.createRadialGradient(64,64,0,64,64,64);r.addColorStop(0,"#d9dcdf"),r.addColorStop(1,"#a9adb2"),t.fillStyle=r,t.fillRect(0,0,e,i),t.strokeStyle="rgba(0,0,0,0.25)",t.lineWidth=2;for(let o of[60,54,46,38])t.beginPath(),t.arc(64,64,o,0,Tt),t.stroke();t.strokeStyle="rgba(255,255,255,0.4)",t.lineWidth=1;for(let o of[57,50,42])t.beginPath(),t.arc(64,64,o,0,Tt),t.stroke();re(t,e,i,s,.5)})}function v(n,t,e,i=0,s=0,r=0,o=0,a=0,l=0,c=1,f=1,u=1){let h=new Xt(t,e);return h.position.set(i,s,r),h.rotation.set(o,a,l),(c!==1||f!==1||u!==1)&&h.scale.set(c,f,u),h.castShadow=!0,h.receiveShadow=!0,n.add(h),h}function Ny(n,t,e,i){return[t,t,e||t,e||t,n,i||t]}function es(n,t=512,e=200){return St("wrap"+JSON.stringify(n)+t+"x"+e,t,e,(i,s,r,o)=>_l(i,s,r,n,o))}function vi(n,t=256,e=384){return St("front"+JSON.stringify(n)+t+"x"+e,t,e,(i,s,r,o)=>mf(i,s,r,n,o))}function Oy(n,t=128,e=256){return St("side"+n.b+n.a+(n.food===!1)+t+"x"+e,t,e,(i,s,r,o)=>wy(i,s,r,n,o))}function ei(n,t,e,i,s,r={}){let o=nt(vi(s,r.tw||256,r.th||Math.round(256*e/t)),r.rough??.65),a=nt(Oy(s,128,256),r.rough??.65),l=ut(new Jt(s.a).getHex(),r.rough??.65),c=r.r?qt(t,e,i,r.r):j(t,e,i);return v(n,c,Ny(o,a,l,r.backSame?o:a))}function Wu(n){n.updateMatrixWorld(!0);let t=new oe().copy(n.matrixWorld).invert(),e=new Map,i=new oe,s=new ge,r=new N,o=new N;n.traverse(l=>{if(!l.isMesh)return;i.multiplyMatrices(t,l.matrixWorld),s.getNormalMatrix(i);let c=i.determinant()<0,f=l.geometry,u=f.attributes.position,h=f.attributes.normal,d=f.attributes.uv,p=f.index,x=Array.isArray(l.material)?l.material:null,g=x?f.groups.length?f.groups:[{start:0,count:p?p.count:u.count,materialIndex:0}]:[{start:0,count:p?p.count:u.count,materialIndex:-1}];for(let m of g){let _=x?x[m.materialIndex]:l.material;if(!_)continue;let y=e.get(_);y||(y={p:[],n:[],u:[]},e.set(_,y));let b=Math.min(m.start+m.count,p?p.count:u.count);for(let I=m.start;I+2<b;I+=3){let A=c?[I,I+2,I+1]:[I,I+1,I+2];for(let T of A){let P=p?p.getX(T):T;r.fromBufferAttribute(u,P).applyMatrix4(i),y.p.push(r.x,r.y,r.z),h?(o.fromBufferAttribute(h,P).applyMatrix3(s).normalize(),y.n.push(o.x,o.y,o.z)):y.n.push(0,1,0),d?y.u.push(d.getX(P),d.getY(P)):y.u.push(0,0)}}}});let a=new Gt;for(let[l,c]of e){if(!c.p.length)continue;let f=new Ue;f.setAttribute("position",new he(c.p,3)),f.setAttribute("normal",new he(c.n,3)),f.setAttribute("uv",new he(c.u,2)),f.computeBoundingSphere();let u=new Xt(f,l);u.castShadow=!l.transparent,u.receiveShadow=!0,a.add(u)}return a.children.sort((l,c)=>(l.material.transparent?1:0)-(c.material.transparent?1:0)),a}function Xu(n,t,e=!1,i=!1){let s=new Gt;s.add(n);let r=Wu(s),o=new Gt;o.add(r),o.updateMatrixWorld(!0);let a=new Un().setFromObject(r),l=new N;a.getSize(l);let c=new N;return a.getCenter(c),i?r.position.set(-c.x,-c.y,-a.min.z):r.position.set(-c.x,e?0:-a.min.y,-c.z),o.userData.height=l.y,o.userData.radius=Math.max(.06,Math.hypot(l.x,l.z)/2),o.userData.kind=t,o.name=t,o}function Au(n,t,e,i,s={}){let r=nt(es(i,512,Math.round(512*e/(Tt*t))),.5);v(n,Z(t*.985,t*.985,e*.98,18,!0),it.tin,0,e*.01,0),v(n,Z(t,t,e*.84,18,!0),r,0,e*.08,0),v(n,Ie(t*.975,t*.04,4,18),it.tin,0,e-t*.04,0,Math.PI/2),v(n,Ie(t*.975,t*.04,4,18),it.tin,0,t*.04,0,Math.PI/2),v(n,Fn(t*.96,18),nt(Ly(),.35,.5),0,e-t*.05,0),v(n,Fn(t*.96,18),it.tin,0,.001,0,Math.PI),s.tab&&(v(n,Ie(t*.22,t*.05,3,10),it.alu,t*.3,e-t*.035,0,Math.PI/2,0,0,1,1.4,1),v(n,Z(t*.07,t*.07,t*.03,8),it.alu,0,e-t*.06,0))}function Oo(n,t,e,i,s,r,o,a,l=.02,c={}){v(n,Ge(JSON.stringify(t),t,18),i);let f=t[t.length-1];if(e){let u=c.front?vi(e,256,160):es(e,512,Math.round(512*(o-r)/(Tt*a))),h=v(n,Z(a,a,o-r,18,!0),nt(u,c.labRough??.5),0,r,0);c.labelSide&&(h.material=[nt(u,.5)])}if(s){let u=Math.max(f[0]*1.12,c.capR||0);v(n,Z(u,u,l,16),s,0,f[1],0),v(n,Z(u*.92,u*.92,.002,16),s,0,f[1]+l,0)}}function Uy(n){return St("ribcap"+n,64,32,(t,e,i,s)=>{t.fillStyle=n,t.fillRect(0,0,e,i),t.fillStyle="rgba(0,0,0,0.25)";for(let r=0;r<e;r+=3)t.fillRect(r,0,1,i)})}function Ui(n){return nt(Uy(n),.45)}function Dy(n,t,e){return St("rx"+n+t+e,512,160,(i,s,r,o)=>{i.fillStyle="#fbfbf7",i.fillRect(0,0,s,r),i.fillStyle="#1d5fa8",i.fillRect(0,0,s,r*.18),kt(i,"PHARMACY  Rx",s*.3,r*.09,r*.12,{color:"#fff",maxW:s*.4}),kt(i,n,s*.3,r*.36,r*.15,{color:"#111",maxW:s*.42,align:"center"}),kt(i,t,s*.3,r*.56,r*.08,{color:"#222",maxW:s*.44}),qe(i,s*.08,r*.68,s*.45,3,r*.07,o,"#333"),i.fillStyle="#f2c21b",i.fillRect(s*.62,r*.25,s*.32,r*.25),kt(i,"FINISH ALL",s*.78,r*.37,r*.09,{color:"#111",maxW:s*.28}),Gr(i,s*.66,r*.62,s*.24,r*.22,o),re(i,s,r,o,.5)})}function Di(n){return St("band"+JSON.stringify(n),512,128,(t,e,i,s)=>{t.fillStyle=n.b,t.fillRect(0,0,e,i),t.fillStyle=n.a,t.fillRect(0,0,e,i*.15),t.fillRect(0,i*.85,e,i*.15),kt(t,n.t,e*.5,i*.42,i*.36,{color:n.f,maxW:e*.45,font:Mi}),n.s&&kt(t,n.s,e*.5,i*.7,i*.13,{color:n.f,maxW:e*.45}),qe(t,e*.05,i*.3,e*.18,4,i*.1,s,"rgba(0,0,0,0.5)"),Gr(t,e*.8,i*.3,e*.12,i*.35,s),re(t,e,i,s,.5)})}function Ru(n,t,e,i,s=.003){let r=nt(vi(i,256,Math.round(256*e/t)),.6);return v(n,j(t,s,e),[ut(14540253,.7),ut(14540253,.7),r,ut(15658734,.8),ut(14540253,.7),ut(14540253,.7)],0,0,0,0,0,0)}function _i(n,t,e,i,s,r=.45,o=.15,a=.06){let l=vi(s,256,Math.round(256*e/t));return v(n,Bo(t,e,i,a),[nt(l,.5),nt(l,.5),ut(new Jt(s.b).getHex(),r,o),ut(new Jt(s.b).getHex(),r,o),nt(l,r,o),nt(l,r,o)])}function Cu(n,t,e,i){let s=i.th;v(n,qt(.44,s,.56,s*.45),t,0,0,.02),v(n,qt(.5,s*.9,.16,s*.4),t,0,.002,-.2);for(let r of[-1,1]){let o=[[r*.2,0,-.22],[r*.33,0,-.17],[r*.4,0,-.02],[r*.43,0,.17]];v(n,Ln("sleeve"+r+i.sleeveR,o,i.sleeveR,8,5),t,0,s*.5,0,0,0,0,1,s/(i.sleeveR*2.1),1),v(n,Z(i.sleeveR*.85,i.sleeveR*.85,.05,8),e,r*.432,s*.5,.17,Math.PI/2,0,0,1,1,s/(i.sleeveR*1.9)),v(n,j(.12,.004,.012),i.rain?it.blackPl:ut(1118481,.6),r*.11,s,.12,0,r*.5,0)}if(v(n,Bo(.3,.22,s*1.1,0,4,5),t,0,s*.55,-.27,-Math.PI/2,0,0),i.fur&&v(n,Ie(.13,.028,4,12),i.fur,0,s*.75,-.39,Math.PI/2,0,0,1.1,.95,.5),i.rain)for(let r of[-1,1])v(n,Ln("cord"+r,[[r*.05,0,0],[r*.07,0,.05],[r*.06,0,.1]],.003,6,3),it.blackPl,0,s+.002,-.28),v(n,Z(.007,.007,.016,6),it.blackPl,r*.06,s+.004,-.17,Math.PI/2);v(n,j(.012,.004,.55),it.darkMetal,0,s-5e-4,.02),v(n,j(.012,.006,.03),it.steel,0,s,-.12),v(n,j(.06,.002,.03),nt(Di({t:i.rain?"RAIN SHELL":"INSULATED",s:i.rain?"WATERPROOF":"DOWN ALTERNATIVE",b:"#f4f1ea",f:"#111",a:"#111"}),.6),0,s*.9,-.33)}var Hr=[{t:"BAKED BEANS",s:"IN TOMATO SAUCE",n:"NET WT 15 OZ (425g)",b:"#e8a33a",f:"#5a1d0a",a:"#7a2a10",p:"beans"},{t:"CHICKEN SOUP",s:"WITH NOODLES",n:"NET WT 10.5 OZ (298g)",b:"#f4f1ea",f:"#c41e1e",a:"#c41e1e",p:"soup"},{t:"SWEET CORN",s:"WHOLE KERNEL",n:"NET WT 15.25 OZ (432g)",b:"#2f7a32",f:"#ffe14a",a:"#1d5220",p:"corn"},{t:"DICED TOMATOES",s:"NO SALT ADDED",n:"NET WT 14.5 OZ (411g)",b:"#b81d18",f:"#fff",a:"#2f6a2a",p:"tomato"},{t:"BEEF CHILI",s:"WITH BEANS",n:"NET WT 15 OZ (425g)",b:"#3a1a10",f:"#f3c04a",a:"#b5321a",p:"chili"},{t:"GREEN PEAS",s:"SWEET TENDER",n:"NET WT 15 OZ (425g)",b:"#e9efe2",f:"#2f6a2a",a:"#3f8a28",p:"peas"}],Yu=[{t:"PEACH HALVES",s:"IN LIGHT SYRUP",n:"NET WT 15.25 OZ (432g)",b:"#fbe6c4",f:"#b8501a",a:"#f39a42",p:"peach"},{t:"FRUIT COCKTAIL",s:"IN 100% JUICE",n:"NET WT 15 OZ (425g)",b:"#2b4f9a",f:"#fff",a:"#f2c21b",p:"fruit"},{t:"PEAR HALVES",s:"BARTLETT",n:"NET WT 15 OZ (425g)",b:"#e7efc8",f:"#4f6a1a",a:"#9ab83a",p:"apple"}],zo={canned_food(n,t){Au(n,.038,.112,ee(t,Hr))},canned_fruit(n,t){Au(n,.038,.11,ee(t,Yu),{tab:!0})},dry_food(n,t){t()<.5?_i(n,.17,.25,.08,{t:"LONG GRAIN",t2:"WHITE RICE",s:"ENRICHED",n:"NET WT 2 LB (907g)",b:"#f6f3ea",f:"#1d4f8a",a:"#1d4f8a",p:"grain",top:"PANTRY"},.5,.05):ei(n,.15,.24,.06,{t:"PENNE",t2:"RIGATE",s:"ENRICHED MACARONI",n:"NET WT 16 OZ (1 LB) 454g",b:"#1d4f9a",f:"#fff",a:"#f2c21b",tf:"#1d4f9a",p:"grain",top:"NO. 41"})},peanut_butter(n,t){Oo(n,[[0,0],[.042,0],[.046,.006],[.046,.1],[.042,.112],[.036,.116],[.036,.122]],{t:"PEANUT BUTTER",s:"CREAMY",n:"NET WT 16 OZ (454g)",b:"#f5e6c0",f:"#8a3a12",a:"#c8321e",p:"peanut"},ut(10119724,.35),Ui(ee(t,["#c8321e","#1d4f9a","#2f7a32"])),.012,.095,.0465,.025,{capR:.043})},snacks(n,t){let e=ee(t,[{t:"SALTINE",t2:"CRACKERS",s:"ORIGINAL",n:"NET WT 16 OZ (454g)",b:"#f4f1ea",f:"#c41e1e",a:"#c41e1e",p:"grain",top:"4 SLEEVES"},{t:"GRAHAM",t2:"CRACKERS",s:"HONEY",n:"NET WT 14.4 OZ (408g)",b:"#e3c07a",f:"#5a2a0a",a:"#2b4f9a",p:"grain",top:"FAMILY SIZE"}]);ei(n,.2,.22,.07,e)},formula(n){_i(n,.13,.19,.05,{t:"LIQUID",t2:"NUTRITION",s:"COMPLETE  1.0 KCAL/ML",n:"1000 mL  TUBE FEEDING OR ORAL",b:"#fbfbf7",f:"#1d5fa8",a:"#3aa7a0",p:"drop",top:"MEDICAL"},.35,.05,.05),v(n,Z(.009,.009,.02,12),it.whitePl,.03,.185,0),v(n,Z(.013,.013,.014,12),Ui("#3aa7a0"),.03,.2,0)},dog_food(n){_i(n,.42,.62,.16,{t:"DOG FOOD",s:"CHICKEN & RICE  ADULT",n:"NET WT 15 LB (6.8 kg)",b:"#2f7a32",f:"#fff",a:"#f2c21b",tf:"#2f7a32",p:"paw",top:"COMPLETE NUTRITION",tag:"NEW",st:"#14401a"},.7,.02,.04)},energy_bar(n,t){ei(n,.16,.05,.09,{t:"ENERGY BARS",s:"OATS & HONEY  6 BARS",n:"6 x 1.4 OZ (40g)",b:"#f08a1c",f:"#fff",a:"#5a2a0a",p:"oats",st:"#7a3a0a"},{tw:256,th:96});let i=new Gt;_i(i,.04,.13,.016,{t:"OAT BAR",b:"#f08a1c",f:"#fff",a:"#5a2a0a"},.4,.2,.08),i.rotation.set(-Math.PI/2,0,.3+t()*.4),i.position.set(-.01,.058,.06),n.add(i)},instant_noodles(n,t){t()<.5?(v(n,Ge("noodlecup",[[0,0],[.037,0],[.038,.004],[.049,.1],[.051,.102]],18),ut(16052714,.7)),v(n,Z(.05,.0385,.094,18,!0),nt(es({t:"INSTANT NOODLES",s:"CHICKEN FLAVOR",n:"NET WT 2.25 OZ (64g)",b:"#f4f1ea",f:"#c41e1e",a:"#f2c21b",p:"noodle"},512,160),.6),0,.004,0),v(n,Fn(.051,18),nt(St("foillid",128,128,(i,s,r,o)=>{i.fillStyle="#d8d8d0",i.fillRect(0,0,s,r),i.fillStyle="#c41e1e",i.beginPath(),i.arc(64,64,40,0,Tt),i.fill(),kt(i,"PEEL",64,64,18,{color:"#fff"}),re(i,s,r,o,.5)}),.35,.4),0,.103,0)):_i(n,.12,.16,.035,{t:"RAMEN",t2:"NOODLES",s:"BEEF FLAVOR",n:"NET WT 3 OZ (85g)",b:"#c41e1e",f:"#fff",a:"#f2c21b",tf:"#c41e1e",p:"noodle",top:"QUICK 3 MIN"},.4,.15).rotation.x=-Math.PI/2},chips(n,t){let e=ee(t,[{t:"POTATO",t2:"CHIPS",s:"SEA SALT",n:"NET WT 8 OZ (226g)",b:"#f2c21b",f:"#c41e1e",a:"#c41e1e",p:"chip",top:"KETTLE COOKED",st:"#fff"},{t:"TORTILLA",t2:"CHIPS",s:"RESTAURANT STYLE",n:"NET WT 11 OZ (311g)",b:"#2b4f9a",f:"#fff",a:"#f2c21b",tf:"#2b4f9a",p:"chip",top:"FAMILY SIZE"}]);_i(n,.21,.3,.08,e,.3,.35,.05)},jerky(n){_i(n,.14,.2,.035,{t:"BEEF JERKY",s:"ORIGINAL  HIGH PROTEIN",n:"NET WT 3.25 OZ (92g)",b:"#2a2420",f:"#f2c21b",a:"#8a2a12",p:"meat",top:"RESEALABLE"},.4,.2,.06).rotation.x=-Math.PI/2},oatmeal(n){v(n,Z(.064,.064,.18,20,!0),nt(es({t:"OLD FASHIONED OATS",s:"100% WHOLE GRAIN",n:"NET WT 42 OZ (2 LB 10 OZ) 1.19kg",b:"#f4f1ea",f:"#2a4f8a",a:"#2a4f8a",p:"oats"},512,220),.75)),v(n,Z(.066,.066,.025,20),ut(2772874,.4),0,.17,0),v(n,Fn(.063,20),ut(8022608,.9),0,.001,0,Math.PI)},soda(n,t){let e=ee(t,[{t:"COLA",s:"CLASSIC",n:"12 FL OZ (355 mL)",b:"#a8141a",f:"#fff",a:"#5a0a0a",p:"bubble"},{t:"LEMON LIME",s:"CAFFEINE FREE",n:"12 FL OZ (355 mL)",b:"#2f8a3a",f:"#f6ee4a",a:"#0f4a1a",p:"bubble"},{t:"ROOT BEER",s:"OLD FASHIONED",n:"12 FL OZ (355 mL)",b:"#4a2412",f:"#f3c04a",a:"#1a0a05",p:"bubble"}]);v(n,Ge("sodacan",[[0,.004],[.026,0],[.033,.01],[.033,.104],[.027,.118],[.0265,.122]],18),it.alu),v(n,Z(.0332,.0332,.092,18,!0),nt(es(e,512,150),.3,.3),0,.011,0),v(n,Fn(.026,16),it.alu,0,.12,0),v(n,Ie(.0065,.0015,3,8),it.alu,.008,.121,0,Math.PI/2,0,0,1,1.5,1)},sports_drink(n,t){let e=ee(t,[[2785238,"GLACIER BLUE","#2a7fd6"],[15763996,"ORANGE","#f08a1c"],[14035002,"FRUIT PUNCH","#d6283a"]]);v(n,Ge("sportsbottle",[[0,0],[.033,0],[.036,.01],[.036,.08],[.031,.095],[.036,.11],[.036,.17],[.022,.2],[.016,.205],[.016,.215]],18),ae("sport"+e[0],{color:e[0],roughness:.15,transparent:!0,opacity:.82})),v(n,Z(.0365,.0365,.055,18,!0),nt(es({t:"SPORTS DRINK",s:e[1],n:"28 FL OZ (828 mL)",b:"#111",f:"#fff",a:e[2],p:"bolt"},512,120),.4),0,.112,0),v(n,Z(.018,.018,.022,16),Ui(e[2]),0,.212,0)},water_bottle(n){let t=ae("jugwater",{color:14412270,roughness:.2,transparent:!0,opacity:.55});v(n,qt(.15,.22,.15,.025),t),v(n,qt(.13,.2,.13,.02),ae("water",{color:10274520,roughness:.1,transparent:!0,opacity:.45,depthWrite:!1}),0,.005,0),v(n,Ge("jugtop",[[.075,0],[.065,.03],[.02,.05],[.018,.06]],12),t,0,.215,0),v(n,Z(.021,.021,.016,14),Ui("#2a6fd6"),0,.27,0),v(n,Ln("jughandle",[[.04,.2,-.06],[.06,.25,-.06],[.065,.27,-.02],[.05,.25,.02],[.04,.2,.04]],.012,12,6),t,0,0,0);let e=nt(Di({t:"DRINKING WATER",s:"1 GALLON (3.78 L)  PURIFIED",b:"#ffffff",f:"#1d5fa8",a:"#3d8fd6"}),.5);v(n,j(.152,.07,.152),[e,e,it.clearPl,it.clearPl,e,e],0,.08,0)},saline(n){let t=St("salinebag",256,384,(s,r,o,a)=>{s.fillStyle="#e9f0f2",s.fillRect(0,0,r,o),s.strokeStyle="#1d5fa8",s.lineWidth=3,s.strokeRect(r*.1,o*.12,r*.8,o*.62),kt(s,"0.9% SODIUM",r/2,o*.22,30,{color:"#1d5fa8",maxW:r*.75,font:Mi}),kt(s,"CHLORIDE",r/2,o*.3,30,{color:"#1d5fa8",maxW:r*.75,font:Mi}),kt(s,"INJECTION USP",r/2,o*.37,16,{color:"#1d5fa8",maxW:r*.75}),kt(s,"1000 mL",r/2,o*.47,40,{color:"#111",maxW:r*.7}),qe(s,r*.15,o*.55,r*.7,6,10,a,"rgba(20,60,120,0.6)");for(let l=1;l<10;l++)s.fillStyle="#333",s.fillRect(r*.88,o*(.12+l*.062),l%2?10:18,2);kt(s,"STERILE  SINGLE USE",r/2,o*.82,14,{color:"#1d5fa8",maxW:r*.8}),re(s,r,o,a,.4)}),e=nt(t,.2,0,{transparent:!0,opacity:.92}),i=v(n,Bo(.15,.25,.03,.05),[e,e,it.clearPl,it.clearPl,e,e]);i.rotation.x=-Math.PI/2,i.position.y=.015,i.position.z=.125,v(n,Z(.005,.005,.04,8),it.whitePl,-.02,.012,.135,Math.PI/2),v(n,Z(.006,.006,.03,8),ut(2781142,.5),.025,.012,.13,Math.PI/2)},ors(n){ei(n,.1,.13,.04,{t:"ORAL",t2:"REHYDRATION SALTS",s:"WHO FORMULA  10 SACHETS",n:"DISSOLVE 1 SACHET IN 1 L WATER",b:"#f4f8fb",f:"#1d5fa8",a:"#3aa7a0",p:"drop",top:"ELECTROLYTES"});for(let e=0;e<2;e++){let i=new Gt;_i(i,.07,.1,.008,{t:"ORS",s:"1 L SACHET",b:"#fbfbf7",f:"#1d5fa8",a:"#3aa7a0"},.35,.25,.08),i.rotation.set(-Math.PI/2,0,.4+e*.5),i.position.set(.08+e*.03,.005+e*.006,.07),n.add(i)}},first_aid(n){let t=ut(13115422,.45),e=St("fakit",256,192,(s,r,o,a)=>{s.fillStyle="#c8201e",s.fillRect(0,0,r,o),s.fillStyle="#fff",s.beginPath(),s.roundRect(r*.34,o*.14,r*.32,o*.56,10),s.fill(),bl(s,"cross",r/2,o*.42,o*.2,a),kt(s,"FIRST AID",r/2,o*.84,o*.13,{color:"#fff",maxW:r*.8}),re(s,r,o,a,.8)}),i=nt(e,.45);v(n,qt(.28,.055,.2,.015),[t,t,i,t,t,t]),v(n,qt(.28,.035,.2,.015),t,0,.056,0),v(n,qt(.284,.004,.204,.002),ut(15658734,.5),0,.054,0),v(n,j(.24,.002,.17),[t,t,i,t,t,t],0,.091,0),v(n,Ln("fahandle",[[-.06,.05,.1],[-.05,.05,.125],[.05,.05,.125],[.06,.05,.1]],.008,10,6),it.whitePl);for(let s of[-.09,.09])v(n,j(.025,.03,.008),it.whitePl,s,.04,.102)},antibiotics(n,t){let e=ae("amber",{color:11887901,roughness:.2,transparent:!0,opacity:.85});v(n,Ge("rxbottle",[[0,0],[.019,0],[.021,.004],[.021,.07],[.018,.074],[.018,.078]],16),e);let s=ee(t,["AMOXICILLIN 500 MG","DOXYCYCLINE 100 MG","CEPHALEXIN 500 MG"]);v(n,Z(.0212,.0212,.045,16,!0),nt(Dy(s,"TAKE 1 CAPSULE 3 TIMES DAILY",1),.6),0,.012,0),v(n,Z(.023,.023,.018,16),Ui("#f4f4f0"),0,.075,0),v(n,Fn(.022,16),ut(16053488,.5),0,.0935,0)},pain_pills(n){Oo(n,[[0,0],[.026,0],[.029,.006],[.029,.085],[.02,.098],[.016,.1]],{t:"PAIN RELIEVER",s:"ACETAMINOPHEN 500 MG",n:"100 CAPLETS",b:"#f4f4f0",f:"#c41e1e",a:"#c41e1e",p:"pill"},ut(16053488,.4),Ui("#f4f4f0"),.01,.08,.0293,.02,{capR:.02})},ibuprofen(n){ei(n,.075,.115,.04,{t:"IBUPROFEN",s:"200 MG  PAIN RELIEVER",n:"50 COATED TABLETS",b:"#f08a1c",f:"#fff",a:"#7a2a0a",p:"pill",top:"NSAID",st:"#a0400a"});let t=[[0,0],[.018,0],[.02,.004],[.02,.06],[.014,.068],[.012,.07]],e=new Gt;Oo(e,t,{t:"IBUPROFEN",s:"200 MG",n:"50 TABLETS",b:"#fff",f:"#f08a1c",a:"#f08a1c",p:"pill"},ut(16053488,.4),Ui("#f08a1c"),.008,.055,.0203,.016,{capR:.015}),e.position.set(.065,0,.01),n.add(e)},vitamins(n){Oo(n,[[0,0],[.034,0],[.037,.006],[.037,.105],[.03,.115],[.028,.118]],{t:"MULTIVITAMIN",s:"DAILY  ADULT 50+",n:"120 TABLETS",b:"#2a2a6a",f:"#f2c21b",a:"#f2c21b",p:"sun"},ut(2302799,.35),Ui("#23234f"),.012,.1,.0373,.022,{capR:.031})},bandages(n){ei(n,.1,.13,.045,{t:"ADHESIVE",t2:"BANDAGES",s:"FLEXIBLE FABRIC  ASSORTED",n:"60 BANDAGES",b:"#f4f1ea",f:"#c41e1e",a:"#e0b38a",tf:"#5a2a0a",p:"cross",top:"STERILE"}),v(n,Z(.025,.025,.05,16),nt(St("gauze",64,64,(t,e,i,s)=>{_e(t,e,i,s,"#f3f0e8",.08,600,1),t.strokeStyle="rgba(0,0,0,0.08)";for(let r=0;r<e;r+=3)t.beginPath(),t.moveTo(r,0),t.lineTo(r,i),t.moveTo(0,r),t.lineTo(e,r),t.stroke()}),.95),.085,.025,.02,Math.PI/2,0,.3)},water_tablets(n){Oo(n,[[0,0],[.018,0],[.02,.004],[.02,.055],[.013,.062],[.012,.065]],{t:"WATER PURIFICATION",s:"TABLETS  KILLS GERMS",n:"50 TABLETS  TREATS 25 L",b:"#4a5a2a",f:"#fff",a:"#f2c21b",p:"drop"},ae("brownglass",{color:5913114,roughness:.15,transparent:!0,opacity:.88}),Ui("#3a3a3a"),.008,.05,.0203,.016,{capR:.015})},first_aid_kit:null,flashlight(n){let t=[[0,0],[.016,0],[.017,.005],[.017,.13],[.019,.14],[.026,.165],[.027,.2],[.025,.203],[0,.203]],e=nt(St("knurl",64,64,(s,r,o)=>{s.fillStyle="#2b2d30",s.fillRect(0,0,r,o),s.strokeStyle="rgba(255,255,255,0.18)";for(let a=-64;a<128;a+=5)s.beginPath(),s.moveTo(a,0),s.lineTo(a+64,o),s.moveTo(a+64,0),s.lineTo(a,o),s.stroke()}),.45,.4),i=new Gt;v(i,Ge("flashlight",t,16),ut(2829616,.4,.45)),v(i,Z(.0172,.0172,.09,16,!0),e,0,.02,0),v(i,Fn(.024,16),ae("lens",{color:15660799,roughness:.05,emissive:2236962}),0,.2015,0),v(i,Z(.006,.006,.006,8),ut(1118481,.8),0,.15,.019,Math.PI/2),v(i,Ie(.026,.0025,4,16),it.alu,0,.2,0,Math.PI/2),i.rotation.z=Math.PI/2,i.position.y=.027,n.add(i)},batteries(n){Ru(n,.12,.17,{t:"AA BATTERIES",s:"ALKALINE  1.5V",n:"8 PACK",b:"#111",f:"#f2c21b",a:"#c98a2a",p:"battery",top:"LONG LASTING"});let t=nt(St("aacell",128,64,(e,i,s)=>{e.fillStyle="#151515",e.fillRect(0,0,i,s),e.fillStyle="#c98a2a",e.fillRect(0,0,i*.35,s),kt(e,"AA",i*.65,s/2,22,{color:"#f2c21b"})}),.4,.3);for(let e=0;e<8;e++){let i=-.042+e%4*.028,s=e<4?-.035:.035;v(n,Z(.007,.007,.05,10),t,i,.01,s-.025,Math.PI/2)}v(n,qt(.112,.016,.13,.006),it.clearPl,0,.003,-.002)},pry_bar(n){let t=nt(ff("#c4221c","pry"),.5,.2);v(n,Ln("prybar",[[-.33,.012,0],[-.1,.012,0],[.18,.012,0],[.26,.016,0],[.31,.04,0],[.31,.075,0],[.28,.09,0],[.25,.085,0]],.011,40,6),t),v(n,j(.05,.006,.026),it.steel,-.355,.006,0,0,0,.12),v(n,j(.02,.008,.026),it.darkMetal,.24,.083,0,0,0,.5)},backpack(n,t){let e=ee(t,["#2f3f2a","#22304a","#3a3a3c","#5a2a22"]),i=nt(bi(e),.8),s=nt(bi(Yn(e,-.3),"dk"),.8);v(n,qt(.3,.46,.17,.05),i),v(n,qt(.24,.2,.07,.03),s,0,.04,.1),v(n,j(.2,.1,.04),i,0,.27,.095),v(n,qt(.31,.09,.18,.03),s,0,.39,.002),v(n,j(.22,.004,.004),it.blackPl,0,.235,.135),v(n,j(.008,.02,.003),it.steel,.09,.225,.136);for(let r of[-.08,.08])v(n,Ln("bpstrap",[[0,.42,-.08],[0,.4,-.12],[0,.25,-.12],[0,.08,-.105],[0,.04,-.085]],.018,10,4),s,r,0,0,0,0,0,1,1,.45);v(n,Ie(.03,.006,4,10,Math.PI),s,0,.47,-.02,0,0,0);for(let r of[-1,1])v(n,j(.03,.14,.1),nt(bi("#111111","mesh"),.9),r*.155,.02,0);for(let r of[-1,1])v(n,j(.025,.03,.008),it.blackPl,r*.07,.15,.137)},winter_coat(n,t){let e=ee(t,["#22304a","#2f3a2a","#5a1d1a","#2a2a2c","#6a5a3a"]),i=nt(Py(e),.75),s=nt(St("fur",128,128,(r,o,a,l)=>{_e(r,o,a,l,"#9a8a72",.35,4e3,2);for(let c=0;c<600;c++){r.strokeStyle=l()<.5?"rgba(60,50,40,0.5)":"rgba(220,210,190,0.5)",r.beginPath();let f=l()*o,u=l()*a;r.moveTo(f,u),r.lineTo(f+(l()-.5)*8,u+6),r.stroke()}}),.95);Cu(n,i,nt(No(Yn(e,-.2),"coatcuff"),.95),{th:.075,sleeveR:.065,color:e,fur:s})},winter_hat(n,t){let e=ee(t,["#8a1d1a","#22304a","#3a5a2a","#7a6a50","#d8d2c4"]),i=nt(No(e),.95);v(n,Ge("beanie",[[0,.17],[.04,.168],[.07,.155],[.088,.13],[.095,.09],[.095,.04]],18),i,0,0,0),v(n,Z(.1,.1,.06,18,!0),nt(No(Yn(e,-.1),"cuff"),.95),0,.01,0),v(n,Ie(.097,.008,4,18),i,0,.012,0,Math.PI/2),v(n,Fn(.097,18),ut(1710618,.95),0,.012,0),v(n,hn(.035,8,6),nt(St("pom"+e,64,64,(s,r,o,a)=>{_e(s,r,o,a,e,.4,900,2)}),1),0,.19,0)},gloves(n,t){let e=ee(t,["#1d1d1f","#3a2a1f","#2a3a4a"]),i=nt(bi(e,"glove"),.85),s=nt(No(Yn(e,.1),"gcuff"),.95),r=(o,a,l,c)=>{let f=new Gt;v(f,qt(.09,.025,.1,.012),i,0,0,0);for(let u=0;u<4;u++)v(f,Z(.0095,.0105,.08-Math.abs(u-1.5)*.012,6),i,-.032+u*.021,.012,.035,Math.PI/2-.04,0,(u-1.5)*.05);v(f,Z(.011,.012,.06,6),i,c*.04,.012,0,Math.PI/2,0,c*.9),v(f,Z(.047,.05,.065,10),s,0,.014,-.045,-Math.PI/2,0,0,1,1,.45),f.position.set(o,.005,a),f.rotation.y=l,n.add(f)};r(-.05,0,.15,1),r(.06,.03,-.25,-1),n.children[n.children.length-1].position.y=.025},boots(n,t){let e=ee(t,["#5a3a22","#2a2622","#6a5a40"]),i=nt(St("leather"+e,128,128,(a,l,c,f)=>{_e(a,l,c,f,e,.12,2500,2),a.strokeStyle="rgba(0,0,0,0.25)",a.setLineDash([4,3]),a.strokeRect(6,6,l-12,c-12),re(a,l,c,f,.8)}),.75),s=nt(St("sole",128,32,(a,l,c)=>{a.fillStyle="#1b1b1b",a.fillRect(0,0,l,c),a.fillStyle="#333";for(let f=0;f<l;f+=8)a.fillRect(f,c*.4,4,c*.6)}),.95),r=ut(12101770,1),o=(a,l)=>{let c=new Gt;v(c,j(.11,.035,.29),s,0,0,0),v(c,qt(.1,.08,.27,.035),i,0,.03,.005),v(c,Z(.058,.062,.17,10),i,0,.05,-.065,0,0,0,.9,1,1.1),v(c,Ie(.055,.015,4,10),r,0,.22,-.065,Math.PI/2,0,0,.95,1.25,1);for(let f=0;f<4;f++)v(c,j(.06,.004,.006),ut(13153418,.9),0,.1+f*.025,0+(f<2?.05-f*.03:.002),-.3+(f<2?-.7:0),0,0);c.position.x=a,c.rotation.y=l,n.add(c)};o(-.065,.05),o(.065,-.08)},rain_jacket(n,t){let e=ee(t,["#e8b81b","#d8501c","#1d5fa8","#2f6a3a"]),i=nt(bi(e,"rain"),.3,.05);Cu(n,i,nt(bi(Yn(e,-.3),"raincuff"),.4),{th:.035,sleeveR:.05,color:e,rain:!0})},firewood(n,t){let e=nt(Iy(),.95),i=nt(Tu(!0),.9),s=nt(Uo("#c9a26c","#8a6a3a","split"),.9),r=.4,o=[3,3,2],a=0;o.forEach((l,c)=>{for(let f=0;f<l;f++,a++){let u=.048+t()*.012,h=(f-(l-1)/2)*.095+(t()-.5)*.012;v(n,Z(u,u,r+(t()-.5)*.04,t()<.5?3:4),[t()<.45?s:e,i,i],h,.045+c*.078,-r/2+(t()-.5)*.03,Math.PI/2,t()*Tt,0)}});for(let l of[-.12,.12])v(n,Ie(.16,.004,4,20),ut(13152384,.9),0,.12,l,0,0,0,1,.85,1);v(n,j(.1,.001,.07),nt(Di({t:"FIREWOOD",s:"KILN DRIED  0.75 CU FT",b:"#f4f1ea",f:"#5a2a0a",a:"#2f7a32"}),.8),0,.255,0)},propane_1lb(n){let t=ut(3111474,.4,.2);v(n,Ge("propane",[[0,0],[.05,0],[.056,.01],[.056,.16],[.05,.185],[.03,.2],[.016,.205]],18),t),v(n,Z(.0565,.0565,.11,18,!0),nt(es({t:"PROPANE",s:"CAMPING FUEL  CYLINDER",n:"NET WT 16.4 OZ (465g)  FLAMMABLE",b:"#2f7a32",f:"#fff",a:"#1d4a20",p:"flame"},512,160),.45,.15),0,.03,0),v(n,Z(.014,.016,.02,12),it.brass,0,.205,0),v(n,Z(.008,.008,.012,8),it.brass,0,.225,0),v(n,Z(.052,.052,.012,18,!0),ut(1919520,.6),0,0,0)},tarp(n,t){let e=ee(t,["#2a5ab8","#6a7a3a","#a85a1a"]),i=nt(St("tarp"+e,128,128,(r,o,a,l)=>{_e(r,o,a,l,e,.08,1200,1),r.strokeStyle="rgba(255,255,255,0.12)";for(let c=0;c<o;c+=4)r.beginPath(),r.moveTo(c,0),r.lineTo(c,a),r.moveTo(0,c),r.lineTo(o,c),r.stroke();re(r,o,a,l,.6)},{repeat:[3,3]}),.55);v(n,qt(.36,.035,.28,.012),i),v(n,qt(.34,.03,.27,.012),i,.005,.03,-.003,0,.03,0),v(n,qt(.3,.028,.25,.012),i,-.01,.056,.004,0,-.04,0);for(let r=0;r<4;r++)v(n,Ie(.008,.003,4,10),it.alu,-.14+r*.09,.085,.115,Math.PI/2);let s=nt(vi({t:"TARP",s:"ALL PURPOSE 8 x 10 FT",n:"WATERPROOF",b:"#f4f1ea",f:"#1d4f9a",a:"#1d4f9a"},256,192),.7);v(n,j(.12,.002,.09),[it.paper,it.paper,s,it.paper,it.paper,it.paper],.03,.084,-.03)},bleach(n){let t=ut(15921902,.35);v(n,qt(.15,.24,.1,.025),t),v(n,Ge("bleachneck",[[.03,0],[.024,.012],[.021,.025]],14),t,.035,.238,0),v(n,Z(.024,.024,.024,14),Ui("#1d5fa8"),.035,.262,0),v(n,Ln("bleachhandle",[[-.065,.22,0],[-.065,.27,0],[-.03,.29,0],[0,.25,0],[0,.22,0]],.012,12,6),t);let e={t:"BLEACH",s:"REGULAR  UNSCENTED",n:"121 FL OZ (3.57 L)",b:"#f4f6fa",f:"#1d5fa8",a:"#1d5fa8",p:"drop",top:"DISINFECTS"};v(n,j(.12,.15,.001),nt(vi(e,256,320),.4),0,.03,.0505),v(n,j(.12,.15,.001),nt(St("bleachback",256,320,(i,s,r,o)=>{i.fillStyle="#f4f6fa",i.fillRect(0,0,s,r),kt(i,"DANGER",s/2,30,30,{color:"#c41e1e"}),qe(i,20,60,s-40,18,12,o,"#333"),Gr(i,60,r-60,130,40,o)}),.4),0,.03,-.0505,0,Math.PI,0)},water_filter(n){let t=ut(2781142,.4),e=new Gt;v(e,Z(.02,.02,.1,14),t),v(e,Z(.021,.021,.03,14),it.whitePl,0,.1,0),v(e,Z(.008,.012,.025,10),it.whitePl,0,.13,0),v(e,Z(.022,.022,.02,14),it.whitePl,0,-.005,0),v(e,Z(.0205,.0205,.05,14,!0),nt(Di({t:"SQUEEZE FILTER",s:"0.1 MICRON",b:"#2a6fd6",f:"#fff",a:"#fff"}),.4),0,.03,0),e.rotation.z=Math.PI/2,e.position.set(0,.022,.08),n.add(e);let i=new Gt;_i(i,.12,.22,.012,{t:"SQUEEZE POUCH",s:"1 L  REUSABLE",b:"#cfe3ef",f:"#1d5fa8",a:"#2a6fd6",p:"drop"},.25,0,.04),i.rotation.x=-Math.PI/2,i.position.set(0,.006,-.03),i.rotation.z=.2,n.add(i)},flea_spray(n){v(n,Ge("aerosol",[[0,0],[.03,0],[.033,.008],[.033,.16],[.028,.18],[.014,.19],[.012,.195]],18),it.tin),v(n,Z(.0333,.0333,.145,18,!0),nt(es({t:"FLEA & TICK",s:"HOME SPRAY  KILLS ON CONTACT",n:"NET WT 16 OZ (454g)",b:"#f4f1ea",f:"#2a5a1a",a:"#2a5a1a",p:"bug"},512,340),.45,.1),0,.012,0),v(n,Z(.031,.033,.045,16),ut(2775578,.4),0,.17,0),v(n,j(.012,.01,.01),it.whitePl,0,.215,.02)},seeds(n,t){let e=[{t:"TOMATO",s:"EARLY GIRL  HEIRLOOM",n:"PLANT AFTER LAST FROST",b:"#f4ecd2",f:"#8a1d12",a:"#3f7a2a",p:"tomato"},{t:"CARROT",s:"DANVERS HALF LONG",n:"SOW EARLY SPRING",b:"#f4ecd2",f:"#c85a12",a:"#3f7a2a",p:"carrot"},{t:"BUSH BEANS",s:"PROVIDER  GREEN",n:"DIRECT SOW",b:"#f4ecd2",f:"#2f6a2a",a:"#3f7a2a",p:"bean"},{t:"KALE",s:"WINTER HARDY",n:"COOL SEASON",b:"#f4ecd2",f:"#2f6a2a",a:"#3f7a2a",p:"leaf"}],i=Math.floor(t()*4);for(let s=0;s<3;s++){let r=new Gt;Ru(r,.085,.125,e[(i+s)%4],.003),r.position.set((s-1)*.04,s*.0032,(s-1)*.015),r.rotation.y=(s-1)*.35,n.add(r)}},lighter(n,t){let e=ee(t,[14035002,2781142,3115578,15909403,8006298]),i=new Gt;v(i,qt(.025,.06,.013,.005),ae("lighter"+e,{color:e,roughness:.2,transparent:!0,opacity:.9})),v(i,qt(.02,.05,.008,.003),ae("fuel",{color:15261872,roughness:.2,transparent:!0,opacity:.5}),0,.004,0),v(i,j(.025,.018,.013),it.chrome,0,.06,0),v(i,Z(.005,.005,.009,10),it.darkMetal,-.004,.08,0,Math.PI/2),v(i,j(.009,.006,.01),it.blackPl,.007,.077,0),i.rotation.x=-Math.PI/2,i.position.set(0,.0065,.04),n.add(i)},comfort(n,t){if(t()<.6){let e=ee(t,["THE LONG WINTER","RIVER STORIES","FIELD GUIDE TO BIRDS","COLLECTED POEMS","THE NORTHERN ROAD"]),i=ee(t,["#22304a","#5a1d1a","#2f4a2a","#4a3a2a"]),s=nt(St("book"+e+i,256,384,(a,l,c,f)=>{_e(a,l,c,f,i,.08,1500,2),a.strokeStyle="#c9a24a",a.lineWidth=4,a.strokeRect(16,16,l-32,c-32),e.split(" ").forEach((h,d)=>kt(a,h,l/2,c*.3+d*40,34,{color:"#e8d8a0",maxW:l*.8,font:'Georgia, "DejaVu Serif", serif'})),kt(a,"A NOVEL",l/2,c*.82,16,{color:"#e8d8a0"}),re(a,l,c,f,1)}),.7),r=nt(St("pages",64,64,(a,l,c)=>{a.fillStyle="#efe6cf",a.fillRect(0,0,l,c),a.fillStyle="rgba(0,0,0,0.12)";for(let f=0;f<c;f+=2)a.fillRect(0,f,l,1)}),.9),o=ut(new Jt(i).getHex(),.7);v(n,j(.15,.035,.22),[r,o,s,s,r,r])}else{let e=nt(St("cards",128,192,(s,r,o,a)=>{s.fillStyle="#b8201e",s.fillRect(0,0,r,o),s.strokeStyle="#fff",s.lineWidth=3,s.strokeRect(8,8,r-16,o-16);for(let l=0;l<60;l++)s.strokeStyle="rgba(255,255,255,0.35)",s.beginPath(),s.arc(r/2,o/2,6+l*2,0,3),s.stroke();kt(s,"PLAYING CARDS",r/2,o*.88,13,{color:"#fff",maxW:r*.8}),re(s,r,o,a,.6)}),.5);v(n,j(.064,.02,.09),[ut(12066846,.5),ut(12066846,.5),e,ut(12066846,.5),ut(12066846,.5),ut(12066846,.5)]);let i=nt(St("cardface",64,96,(s,r,o)=>{s.fillStyle="#fafafa",s.fillRect(0,0,r,o),kt(s,"A",10,14,14,{color:"#c41e1e"}),s.fillStyle="#c41e1e",s.beginPath(),s.moveTo(32,36),s.bezierCurveTo(10,20,10,50,32,64),s.bezierCurveTo(54,50,54,20,32,36),s.fill()}),.6);for(let s=0;s<3;s++)v(n,j(.063,8e-4,.088),[it.paper,it.paper,i,it.paper,it.paper,it.paper],.07+s*.012,s*.001,.01+s*.01,0,.3+s*.4,0)}},toolkit(n,t){let e=ee(t,[12853788,1920922,2763308]),i=nt(ff("#"+new Jt(e).getHexString(),"tk"),.45,.3);v(n,qt(.46,.15,.21,.01),i),v(n,qt(.47,.06,.22,.012),i,0,.14,0),v(n,j(.472,.004,.222),it.darkMetal,0,.14,0),v(n,Ln("tkhandle",[[-.11,.2,0],[-.1,.235,0],[.1,.235,0],[.11,.2,0]],.011,12,6),it.blackPl);for(let s of[-.17,.17])v(n,j(.04,.05,.012),it.chrome,s,.11,.11),v(n,j(.03,.02,.008),it.chrome,s,.15,.115);v(n,j(.012,.015,.03),it.steel,.215,.18,0)},scrap_wood(n,t){let e=nt(Uo("#c9a26c","#8a6a3a","lumber"),.85),i=nt(St("ply",256,256,(o,a,l,c)=>{_e(o,a,l,c,"#d2b07a",.1,2e3,2);for(let f=0;f<20;f++)o.strokeStyle="rgba(140,90,40,0.25)",o.lineWidth=2+c()*6,o.beginPath(),o.ellipse(c()*a,c()*l,30+c()*60,6+c()*10,0,0,Tt),o.stroke();re(o,a,l,c,.8)}),.85),s=nt(St("plyedge",64,16,(o,a,l)=>{for(let c=0;c<5;c++)o.fillStyle=c%2?"#a67c48":"#d2b07a",o.fillRect(0,c*l/5,a,l/5)}),.9),r=nt(Tu(),.9);v(n,j(.6,.018,.45),[s,s,i,i,s,s],0,0,0,0,.1,0);for(let o=0;o<3;o++)v(n,j(1,.038,.089),[r,r,e,e,e,e],(t()-.5)*.1,.018+o*.038,-.1+o*.09,0,(t()-.5)*.2,0)},hardware_parts(n,t){ei(n,.14,.09,.1,{t:"WOOD SCREWS",s:"#8 x 2-1/2 IN  COARSE",n:"1 LB  APPROX 120 PCS",b:"#f2c21b",f:"#111",a:"#111",p:"screw",top:"ZINC PLATED"});let e=ut(11054514,.4,.5);for(let i=0;i<3;i++){let s=new Gt;v(s,j(.05,.003,.03),e,0,0,0),v(s,j(.003,.05,.03),e,-.0235,0,0),s.position.set(.11+i*.02,0,-.03+i*.035),s.rotation.y=t()*Tt,n.add(s)}for(let i=0;i<6;i++)v(n,Z(.002,5e-4,.05,6),e,-.05+t()*.1,.003,.08+t()*.04,Math.PI/2,0,t()*Tt)},wiring(n,t){let e=ee(t,["#e0521c","#f2c21b","#f4f1ea"]),i=nt(St("wire"+e,256,32,(r,o,a)=>{r.fillStyle=e,r.fillRect(0,0,o,a),r.strokeStyle="rgba(0,0,0,0.3)",r.lineWidth=1.5;for(let l=-32;l<o;l+=4)r.beginPath(),r.moveTo(l,0),r.lineTo(l+16,a),r.stroke()}),.45);v(n,Ie(.1,.035,6,20),i,0,.035,0,Math.PI/2,0,0,1,1,.9),v(n,Z(.137,.137,.05,16,!0),nt(Di({t:"12/2 NM-B",s:"COPPER BUILDING WIRE  50 FT",b:"#f4f1ea",f:"#111",a:e}),.6),0,.012,0,0,0,0,1,1,1),v(n,Ln("wiretail",[[.12,.05,0],[.18,.04,.05],[.22,.01,.02]],.005,10,4),ut(new Jt(e).getHex(),.4));let s=new Gt;_i(s,.07,.1,.02,{t:"WIRE NUTS",s:"25 PCS",b:"#e8eef2",f:"#c41e1e",a:"#f2c21b"},.2,0,.06),s.rotation.x=-Math.PI/2,s.position.set(-.17,.01,.09),n.add(s)},pipe_fittings(n,t){let e=ut(15658730,.4),i=ut(7829367,.8);for(let s=0;s<3;s++){let r=new Gt;v(r,Z(.017,.017,.5,10,!0),e),v(r,Z(.015,.015,.5,8,!0),nt(null,.8,0,{color:6710886,side:gn})),r.rotation.z=Math.PI/2,r.position.set(.25,.017,-.05+s*.036),r.rotation.y=(t()-.5)*.05,n.add(r)}v(n,Ie(.03,.02,8,8,Math.PI/2),e,-.1,.02,.07,Math.PI/2,0,0),v(n,Z(.022,.022,.05,12),e,-.05,0,.1),v(n,Ie(.09,.012,5,16),ut(3111474,.5),-.05,.012,-.05,Math.PI/2),v(n,Ie(.075,.012,5,16),ut(3111474,.5),-.05,.034,-.05,Math.PI/2),v(n,Z(.016,.016,.03,8),it.brass,.03,.016,-.05,0,0,Math.PI/2)},plastic_sheet(n){let t=ae("plasroll",{color:15265520,roughness:.25,transparent:!0,opacity:.85}),e=nt(St("rollend",128,128,(s,r,o)=>{s.fillStyle="#dfe6e8",s.fillRect(0,0,r,o),s.strokeStyle="rgba(0,0,0,0.12)";for(let a=18;a<64;a+=2)s.beginPath(),s.arc(64,64,a,0,Tt),s.stroke();s.fillStyle="#a67c48",s.beginPath(),s.arc(64,64,17,0,Tt),s.fill(),s.fillStyle="#222",s.beginPath(),s.arc(64,64,13,0,Tt),s.fill()}),.5),i=new Gt;v(i,Z(.07,.07,.6,18),[t,e,e]),v(i,Z(.0705,.0705,.2,18,!0),nt(Di({t:"PLASTIC SHEETING",s:"6 MIL  10 x 25 FT  CLEAR",b:"#f4f1ea",f:"#111",a:"#c41e1e"}),.5),0,.2,0),i.rotation.z=Math.PI/2,i.position.set(.3,.07,0),n.add(i)},insulation(n){let t=nt(St("foam",256,256,(i,s,r,o)=>{_e(i,s,r,o,"#e9a0b0",.08,3e3,2),kt(i,"RIGID FOAM  R-5",s/2,r*.3,26,{color:"rgba(30,60,140,0.8)",maxW:s*.9}),kt(i,"1 IN x 2 FT x 4 FT",s/2,r*.45,18,{color:"rgba(30,60,140,0.8)"}),qe(i,30,r*.6,s-60,4,10,o,"rgba(30,60,140,0.5)"),re(i,s,r,o,.6)}),.9),e=ut(15311024,.95);for(let i=0;i<4;i++)v(n,j(.6,.025,.3),[e,e,t,t,e,e],i%2*.01,i*.025,i%2*-.008);v(n,j(.08,.104,.304),ae("shrink",{color:16777215,roughness:.1,transparent:!0,opacity:.25}),.18,-.002,0)},metal_bin(n){let t=nt(St("galv",256,256,(i,s,r,o)=>{_e(i,s,r,o,"#a9aeb2",.12,2500,3);for(let a=0;a<30;a++)i.fillStyle=`rgba(255,255,255,${.05+o()*.1})`,i.beginPath(),i.ellipse(o()*s,o()*r,8+o()*20,6+o()*14,o()*3,0,Tt),i.fill();re(i,s,r,o,1.2)}),.5,.45);v(n,Ge("trashcan",[[0,.005],[.2,.005],[.205,.08],[.215,.09],[.207,.1],[.212,.26],[.222,.27],[.214,.28],[.22,.46],[.23,.47],[.222,.48],[.234,.6]],16),nt(t.map,.5,.45,{side:Le})),v(n,Ge("trashlid",[[.245,0],[.24,.015],[.2,.04],[.1,.06],[0,.065]],16),t,0,.595,0),v(n,Ln("binlidh",[[-.05,.66,0],[-.04,.69,0],[.04,.69,0],[.05,.66,0]],.008,6,5),it.steel);for(let i of[-1,1])v(n,Ln("binsideh",[[0,.5,-.05],[.035,.49,-.04],[.035,.49,.04],[0,.5,.05]],.007,6,4),it.steel,i*.22,0,0,0,i<0?Math.PI:0,0)},rain_barrel(n){let t=ut(1920922,.45);v(n,Ge("barrel",[[0,0],[.27,0],[.29,.02],[.3,.12],[.31,.14],[.3,.16],[.305,.45],[.3,.74],[.31,.76],[.3,.78],[.29,.88],[.27,.9],[0,.9]],24),t);for(let i of[-.18,.18])v(n,Z(.03,.03,.015,10),ut(1194610,.5),i,.895,0);v(n,Z(.015,.015,.06,10),it.brass,0,.12,.31,Math.PI/2),v(n,j(.02,.04,.01),it.brass,0,.12,.345),v(n,j(.24,.12,.002),nt(vi({t:"RAIN BARREL",s:"55 GAL  NOT FOR DRINKING",b:"#f4f1ea",f:"#1d4f9a",a:"#1d4f9a"},256,128),.6),0,.5,.303)},stove_kit(n){let t=nt(St("stoveblk",128,128,(e,i,s,r)=>{_e(e,i,s,r,"#26272a",.12,2e3,2),re(e,i,s,r,1)}),.7,.35);v(n,qt(.45,.4,.5,.02),t,0,.12,0);for(let e of[-.19,.19])for(let i of[-.21,.21])v(n,Z(.018,.012,.12,8),t,e,0,i);v(n,j(.3,.24,.02),t,0,.19,.25),v(n,j(.2,.14,.004),ae("stoveglass",{color:2234900,roughness:.1,metalness:.3}),0,.24,.26),v(n,Z(.008,.008,.08,8),it.chrome,.12,.28,.275),v(n,Z(.07,.07,.08,16,!0),t,0,.52,-.08);for(let e=0;e<2;e++)v(n,Z(.075,.075,.6,16,!0),nt(zr("#4a4c50","pipe"),.6,.4),.38+e*.16,.075,0,Math.PI/2,0,0);v(n,j(.2,.1,.002),nt(vi({t:"WOOD STOVE",s:"EPA CERTIFIED  60,000 BTU",b:"#f4f1ea",f:"#111",a:"#c4221c"},256,128),.6),0,.42,.251)},battery_module(n){let t=ut(15263972,.4);v(n,qt(.5,.7,.16,.03),t),v(n,j(.44,.06,.004),ut(2763308,.3),0,.58,.08);for(let i=0;i<5;i++)v(n,j(.04,.008,.002),ae("ledg"+i,{color:i<3?3135066:1718818,emissive:i<3?674330:0,roughness:.3}),-.12+i*.06,.6,.083);let e=nt(St("vent",128,64,(i,s,r)=>{i.fillStyle="#d8d8d4",i.fillRect(0,0,s,r),i.fillStyle="#333";for(let o=6;o<r-4;o+=7)i.fillRect(8,o,s-16,3)}),.5);v(n,j(.36,.14,.003),e,0,.08,.08),v(n,j(.2,.12,.002),nt(vi({t:"HOME BATTERY",s:"LiFePO4  5 kWh  48 V DC",n:"CAUTION  HIGH VOLTAGE",b:"#f4f1ea",f:"#111",a:"#2a6fd6"},256,160),.5),0,.35,.081);for(let i of[-.06,.06])v(n,Z(.012,.012,.03,10),i<0?ut(1710618,.5):ut(12852766,.5),i,.7,0)},candles(n,t){ei(n,.12,.16,.06,{t:"EMERGENCY",t2:"CANDLES",s:"UNSCENTED  9 HR BURN",n:"6 CANDLES",b:"#f4f1ea",f:"#c41e1e",a:"#2a2a2c",p:"flame",top:"POWER OUTAGE"});let e=ae("wax",{color:15986396,roughness:.55,emissive:1315344});for(let i=0;i<2;i++){let s=.1+t()*.04;v(n,Z(.025,.025,s,14),e,.11+i*.06,0,.02-i*.03),v(n,Z(.0015,.0015,.01,4),ut(1118481,.9),.11+i*.06,s,.02-i*.03)}},matches(n,t){let i=nt(vi({t:"STRIKE",t2:"ANYWHERE",s:"KITCHEN MATCHES",n:"250 MATCHES",b:"#f2c21b",f:"#c41e1e",a:"#c41e1e",top:"SAFETY",p:"flame"},256,160),.7),s=nt(St("strike",64,64,(a,l,c,f)=>_e(a,l,c,f,"#5a3a2a",.4,600,2)),.95),r=new Gt;v(r,j(.115,.03,.065),[s,s,i,i,ut(15909403,.7),ut(15909403,.7)]);let o=nt(St("matchheads",128,64,(a,l,c)=>{a.fillStyle="#d8b88a",a.fillRect(0,0,l,c);for(let f=0;f<l;f+=6)for(let u=0;u<c;u+=6)a.fillStyle="#b81d18",a.beginPath(),a.arc(f+3+(u%12?0:2),u+3,2.6,0,Tt),a.fill()}),.8);v(r,j(.105,.024,.058),[ut(15261900,.8),ut(15261900,.8),o,ut(15261900,.8),ut(15261900,.8),ut(15261900,.8)],.045,.004,0),n.add(r);for(let a=0;a<3;a++){let l=new Gt;v(l,j(.003,.003,.06),ut(14203018,.8)),v(l,hn(.003,6,4),ut(12066072,.6),0,.0015,.03,0,0,0,1,1,1.4),l.position.set(-.03+a*.02,0,.06+t()*.02),l.rotation.y=t()*2-1,n.add(l)}},duct_tape(n){let t=nt(zr("#9ea3a8","tape"),.5,.25);v(n,Ge("ducttape",[[.038,0],[.056,0],[.057,.002],[.057,.046],[.056,.048],[.038,.048]],20),t),v(n,Z(.0375,.0375,.048,16,!0),nt(Di({t:"DUCT TAPE",s:"1.88 IN x 60 YD",b:"#b99868",f:"#2a2a2c",a:"#b99868"}),.9,0,{side:Le}),0,0,0),v(n,j(.002,.046,.05),t,.058,.001,.025,0,.3,0)},rope(n,t){let e=ee(t,["#c8b080","#2a6fd6","#d6283a","#3a5a2a"]),i=nt(St("rope"+e,128,32,(s,r,o)=>{s.fillStyle=e,s.fillRect(0,0,r,o),s.strokeStyle="rgba(0,0,0,0.35)",s.lineWidth=2;for(let a=-32;a<r;a+=6)s.beginPath(),s.moveTo(a,0),s.lineTo(a+18,o),s.stroke();s.strokeStyle="rgba(255,255,255,0.2)";for(let a=-30;a<r;a+=6)s.beginPath(),s.moveTo(a,0),s.lineTo(a+18,o),s.stroke()},{repeat:[12,1]}),.95);for(let s=0;s<3;s++)v(n,Ie(.11+s%2*.006,.013,4,20),i,s%2*.005,.012+s*.016,s%3*.004,Math.PI/2,0,s*.7);for(let s=0;s<2;s++)v(n,Ie(.03,.009,4,8),i,.115,.028,-.008+s*.016,0,Math.PI/2,0,1,1.4,1);v(n,Ln("ropetail",[[-.1,.012,.03],[-.16,.01,.1],[-.12,.012,.18],[-.05,.012,.2]],.012,10,5),i),v(n,Z(.124,.124,.03,16,!0),nt(Di({t:"UTILITY ROPE",s:"3/8 IN x 50 FT",b:"#f4f1ea",f:"#111",a:"#c41e1e"}),.8),0,.02,0,0,0,0,1,1,1)},knife(n){let t=nt(zr("#c8ccd0","blade"),.22,.55);v(n,wu("knifeblade2",()=>{let s=new Nr;return s.moveTo(0,0),s.lineTo(.125,0),s.quadraticCurveTo(.158,.004,.172,.03),s.lineTo(.13,.032),s.lineTo(0,.032),s.closePath(),s},.0025,7e-4),t,.004,.011,.016,-Math.PI/2,0,0),v(n,j(.165,6e-4,.004),ut(15658734,.15,.6),.09,.0125,.013),v(n,qt(.115,.02,.028,.008),ut(1908256,.6),-.058,.001,0),v(n,j(.008,.024,.042),it.steel,.002,0,0);for(let s of[-.03,-.08])v(n,Z(.0035,.0035,.022,8),it.brass,s,5e-4,0);v(n,Ie(.005,.0015,3,8),it.steel,-.118,.011,0,Math.PI/2);let i=nt(St("sheath",128,64,(s,r,o,a)=>{_e(s,r,o,a,"#5a3a22",.15,900,2),s.strokeStyle="rgba(230,210,170,0.6)",s.setLineDash([4,3]),s.lineWidth=2,s.strokeRect(5,5,r-10,o-10),re(s,r,o,a,1)}),.8);v(n,qt(.19,.014,.05,.006),i,.03,0,.065,0,.12,0),v(n,j(.03,.016,.05),i,-.07,0,.078,0,.12,0)},multitool(n){let t=nt(zr("#b8bcc0","mt"),.3,.5);v(n,qt(.1,.012,.016,.004),t,0,0,-.009),v(n,qt(.1,.012,.016,.004),t,0,0,.009),v(n,j(.03,.008,.02),it.darkMetal,.06,.002,0);for(let e=0;e<3;e++)v(n,j(.06,.001,.003),it.darkMetal,-.01+e*.01,.012,-.012+e*.012);v(n,Ie(.008,.002,4,10),it.steel,-.055,.006,0,Math.PI/2),v(n,qt(.08,.025,.04,.008),ut(1908256,.85),.02,0,.06,0,.3,0)},can_opener(n){let t=ut(12853788,.5),e=new Gt;v(e,qt(.13,.016,.022,.007),t,-.07,0,-.016,0,.12,0),v(e,qt(.13,.016,.022,.007),t,-.07,0,.016,0,-.12,0),v(e,j(.04,.022,.05),it.steel,.01,-.003,0),v(e,Z(.012,.012,.005,12),it.steel,.02,-.003,0),v(e,Ln("openerkey",[[.02,.02,0],[.02,.035,0],[.045,.04,0],[.06,.03,0]],.004,8,5),it.steel),v(e,qt(.03,.02,.02,.006),t,.07,.025,0,0,0,Math.PI/2),e.position.y=.011,n.add(e)},cooking_pot(n){let t=nt(zr("#bfc3c7","pot"),.3,.55);v(n,Ge("pot",[[0,.002],[.095,.002],[.1,.008],[.1,.12],[.104,.124],[.097,.124],[.093,.12],[.093,.01],[0,.01]],16),t),v(n,Ge("potlid",[[.104,0],[.1,.006],[.06,.02],[0,.026]],16),t,0,.122,0),v(n,Z(.012,.018,.018,10),it.blackPl,0,.148,0);for(let e of[-1,1])v(n,Ln("pothandle"+e,[[e*.098,.105,-.035],[e*.128,.105,-.025],[e*.128,.105,.025],[e*.098,.105,.035]],.006,8,5),it.blackPl)},blanket(n,t){let e=ee(t,[["#7a1d1a","#22304a","#e8d8a0"],["#2f4a2a","#1a1a1a","#c8a24a"],["#4a5a7a","#e8e8e0","#1a2a4a"]]),i=nt(Vu(e[0],e[1],e[2]),.95);v(n,qt(.4,.04,.3,.02),i),v(n,qt(.4,.04,.3,.02),i,.003,.038,.003,0,.02,0),v(n,qt(.4,.04,.3,.02),i,-.004,.076,-.002,0,-.015,0),v(n,Z(.02,.02,.3,10),i,.2,.06,-.15,Math.PI/2,0,0,1,1,2.6)},sleeping_bag(n,t){let e=ee(t,["#2a5ab8","#c8521c","#3a5a2a"]),i=nt(bi(e,"sb"),.55),s=new Gt;v(s,Z(.13,.13,.4,18),[i,nt(St("stuffend"+e,128,128,(r,o,a)=>{r.fillStyle=e,r.fillRect(0,0,o,a),r.strokeStyle="rgba(0,0,0,0.35)",r.lineWidth=2;for(let l=0;l<12;l++)r.beginPath(),r.moveTo(64,64),r.lineTo(64+Math.cos(l)*64,64+Math.sin(l)*64),r.stroke()}),.6),i]);for(let r of[.08,.32])v(s,Z(.133,.133,.025,18,!0),it.blackPl,0,r,0);for(let r=0;r<4;r++)v(s,j(.025,.42,.004),it.blackPl,Math.sin(r*Math.PI/2)*.132,-.01,Math.cos(r*Math.PI/2)*.132,0,r*Math.PI/2,0);v(s,Z(.004,.004,.06,6),it.blackPl,.03,.4,0),v(s,Z(.008,.008,.02,8),ut(2763306,.5),.03,.45,0),s.rotation.z=Math.PI/2,s.position.set(.2,.13,0),n.add(s)},hand_warmers(n){for(let t=0;t<2;t++){let e=new Gt;_i(e,.09,.13,.012,{t:"HAND",t2:"WARMERS",s:"UP TO 10 HRS",n:"1 PAIR",b:"#e0521c",f:"#fff",a:"#2a2a2c",p:"flame"},.45,.1,.06),e.rotation.set(-Math.PI/2,0,t*.5-.2),e.position.set(t*.06,.006+t*.008,t*.02),n.add(e)}},wool_socks(n,t){let e=ee(t,["#8a8a86","#6a5a4a","#4a5a6a"]),i=ee(t,["#a8321e","#2a4a7a","#e8e2d2"]),s=.3,r=St("sockface"+e+i,256,256,(c,f,u,h)=>{c.fillStyle=e,c.fillRect(0,0,f,u);let d=Yn(e,-.3),p=Yn(e,.15);for(let m=0;m<f;m+=6)for(let _=0;_<u;_+=6)c.fillStyle=p,c.beginPath(),c.ellipse(m+1.5,_+3,1.6,3,-.5,0,Tt),c.ellipse(m+4.5,_+3,1.6,3,.5,0,Tt),c.fill(),c.fillStyle=d,c.fillRect(m+2.7,_,.6,6);let x=m=>m/s*f,g=m=>u-m/s*u;c.fillStyle=i,c.globalAlpha=.85,c.beginPath(),c.arc(x(0),g(0),x(.06),0,Tt),c.fill(),c.fillRect(x(.165),g(.1),x(.06),x(.1)),c.fillRect(0,g(.275),x(.1),x(.035)),c.globalAlpha=1;for(let m=g(.27);m<g(.215);m+=4)c.fillStyle="rgba(0,0,0,0.18)",c.fillRect(0,m,x(.1),1.5);re(c,f,u,h,.5)},{repeat:[1/s,1/s]}),a=wu("sock",()=>{let c=new Nr;return c.moveTo(0,.27),c.lineTo(0,.06),c.quadraticCurveTo(0,0,.06,0),c.lineTo(.17,0),c.quadraticCurveTo(.215,.002,.215,.04),c.quadraticCurveTo(.212,.078,.17,.08),c.lineTo(.095,.085),c.lineTo(.088,.27),c.closePath(),c},.012,.006),l=nt(No(e,"sockside"),.95);for(let c=0;c<2;c++)v(n,a,[nt(r,.95),l],c*.025-.1,.009+c*.024,-.13+c*.012,-Math.PI/2,0,c*.08);v(n,j(.105,.05,.003),nt(Di({t:"WOOL SOCKS",s:"MERINO BLEND  1 PAIR",b:"#f4f1ea",f:"#3a2a1f",a:i}),.8),-.065,.005,-.03,-Math.PI/2,0,0)},trash_bags(n){ei(n,.26,.12,.13,{t:"TRASH BAGS",s:"LARGE 30 GAL  DRAWSTRING",n:"40 BAGS",b:"#1a1a1c",f:"#f2c21b",a:"#2f7a32",p:"bolt",top:"HEAVY DUTY"},{tw:384,th:180}),v(n,j(.12,.002,.04),ut(657930,.3),0,.12,0)},radio(n){let t=ut(14701084,.5),e=ut(3815996,.6),i=nt(St("radiofront",256,160,(s,r,o,a)=>{s.fillStyle="#3a3a3c",s.fillRect(0,0,r,o),s.fillStyle="#1a1a1a";for(let l=20;l<o-20;l+=9)for(let c=16;c<r*.5;c+=9)s.beginPath(),s.arc(c,l,3,0,Tt),s.fill();s.fillStyle="#9ab89a",s.fillRect(r*.56,24,r*.38,40),s.fillStyle="#2a3a2a";for(let l=0;l<10;l++)s.fillRect(r*.58+l*9,50,2,10);kt(s,"AM  FM  WB",r*.75,36,12,{color:"#2a3a2a"});for(let l=0;l<3;l++)s.fillStyle="#c8c8c8",s.fillRect(r*.58+l*30,84,22,12);kt(s,"EMERGENCY RADIO",r*.75,120,14,{color:"#ddd",maxW:r*.4}),re(s,r,o,a,.8)}),.5);v(n,qt(.19,.11,.07,.015),[t,t,t,t,i,t]),v(n,j(.1,.004,.05),ae("solar",{color:1714762,roughness:.15,metalness:.4}),-.03,.11,0),v(n,Z(.003,.003,.22,6),it.chrome,.08,.11,-.02,0,0,-.25),v(n,Z(.012,.012,.012,12),e,.06,.07,.04,Math.PI/2),v(n,j(.012,.06,.012),e,.1,.04,0),v(n,Z(.006,.006,.03,8),e,.12,.015,0,0,0,Math.PI/2)},paper_map(n,t){let e=nt(St("mapcover",256,448,(i,s,r,o)=>{i.fillStyle="#f4f1e6",i.fillRect(0,0,s,r),i.fillStyle="#1d4f9a",i.fillRect(0,0,s,r*.28),kt(i,"PORTLAND",s/2,r*.09,36,{color:"#fff",maxW:s*.9}),kt(i,"METRO STREET MAP",s/2,r*.18,20,{color:"#f2c21b",maxW:s*.9}),i.fillStyle="#e8e2c8",i.fillRect(16,r*.32,s-32,r*.5),i.strokeStyle="#7fa8d6",i.lineWidth=10,i.beginPath(),i.moveTo(s*.45,r*.32),i.bezierCurveTo(s*.6,r*.5,s*.35,r*.62,s*.55,r*.82),i.stroke(),i.strokeStyle="#d6a04a",i.lineWidth=3;for(let a=0;a<9;a++)i.beginPath(),i.moveTo(16,r*(.34+a*.055)),i.lineTo(s-16,r*(.34+a*.055)+(o()-.5)*10),i.stroke(),i.beginPath(),i.moveTo(20+a*26,r*.32),i.lineTo(20+a*26+(o()-.5)*10,r*.82),i.stroke();i.fillStyle="#9ac48a",i.fillRect(s*.12,r*.38,40,30),kt(i,"FOLD HERE",s/2,r*.9,12,{color:"#666"}),re(i,s,r,o,1.2)}),.85);v(n,j(.12,.008,.21),[it.paper,it.paper,e,it.paper,it.paper,it.paper],0,0,0,0,t()*.6,0)},toilet_paper(n){let t=nt(St("tproll",128,64,(s,r,o,a)=>{_e(s,r,o,a,"#f6f4ee",.05,500,1),s.strokeStyle="rgba(0,0,0,0.06)";for(let l=0;l<r;l+=8)s.beginPath(),s.moveTo(l,0),s.lineTo(l,o),s.stroke()}),.95),e=nt(St("tptop",128,128,(s,r,o)=>{s.fillStyle="#f6f4ee",s.fillRect(0,0,r,o),s.strokeStyle="rgba(0,0,0,0.08)";for(let a=24;a<64;a+=3)s.beginPath(),s.arc(64,64,a,0,Tt),s.stroke();s.fillStyle="#a67c48",s.beginPath(),s.arc(64,64,22,0,Tt),s.fill(),s.fillStyle="#2a2420",s.beginPath(),s.arc(64,64,19,0,Tt),s.fill()}),.9);for(let s=0;s<4;s++)v(n,Z(.055,.055,.1,18),[t,e,e],(s%2-.5)*.112,0,(Math.floor(s/2)-.5)*.112);let i=ae("tpwrap",{color:16777215,roughness:.15,transparent:!0,opacity:.2,depthWrite:!1});v(n,qt(.23,.105,.23,.03),i),v(n,j(.2,.06,.002),nt(Di({t:"BATH TISSUE",s:"4 DOUBLE ROLLS  2-PLY",b:"#f4f6fa",f:"#2a4f9a",a:"#7fa8d6"}),.5),0,.02,.116)},soap(n,t){ei(n,.095,.035,.065,{t:"BAR SOAP",s:"GENTLE  UNSCENTED",n:"4 OZ (113g)",b:"#f4f6fa",f:"#2a6fd6",a:"#7fc4d6",p:"bubble"},{tw:256,th:96}),v(n,qt(.085,.03,.055,.012),ut(ee(t,[16052454,15259888,14217440]),.4),.11,0,.02,0,.4,0)},toothpaste(n){let t={t:"TOOTHPASTE",s:"FLUORIDE  COOL MINT",n:"NET WT 6 OZ (170g)",b:"#2a6fd6",f:"#fff",a:"#d6283a",p:"tooth"},e=new Gt;ei(e,.045,.2,.04,t,{tw:128,th:512}),e.rotation.z=Math.PI/2,e.position.set(.1,0,0),n.add(e);let i=new Gt;v(i,Ge("tptube",[[0,0],[.012,0],[.016,.012],[.019,.04],[.019,.12],[.017,.165],[.016,.17]],14),nt(es({...t,s:"COOL MINT"},256,256),.35),0,0,0,0,0,0,1,1,.65),v(i,Z(.012,.014,.018,12),it.whitePl,0,-.018,0),v(i,j(.04,.012,.003),ut(16777215,.5),0,.168,0),i.rotation.z=Math.PI/2,i.position.set(0,.013,.07),n.add(i)}};delete zo.first_aid_kit;var $u={book_first_aid:{title:["FIRST-AID","HANDBOOK"],sub:"EMERGENCY CARE AT HOME",bg:"#c4221c",band:"#f4f2ec",ink:"#f4f2ec",icon:"cross"},book_repair:{title:["HOME REPAIR","MANUAL"],sub:"FIX IT YOURSELF",bg:"#e8701c",band:"#5a5e62",ink:"#2a2c2e",icon:"wrench"},book_cooking:{title:["CAMP","COOKING"],sub:"MEALS OVER AN OPEN FIRE",bg:"#2f6a3a",band:"#efe6cf",ink:"#efe6cf",icon:"pot"},book_survival:{title:["WILDERNESS","SURVIVAL GUIDE"],sub:"SHELTER  WATER  FIRE  FOOD",bg:"#1f3a26",band:"#c9a24a",ink:"#e8d8a0",icon:"compass"}};function ky(n,t,e,i,s,r){if(n.save(),n.translate(e,i),t==="cross"){n.fillStyle=r.band,n.beginPath(),n.arc(0,0,s,0,Tt),n.fill(),n.fillStyle=r.bg;let o=s*.62,a=s*.22;n.fillRect(-a,-o,2*a,2*o),n.fillRect(-o,-a,2*o,2*a)}else if(t==="wrench"){n.rotate(-.7),n.fillStyle=r.ink,n.fillRect(-s*.13,-s*.7,s*.26,s*1.4);for(let o of[-1,1])n.beginPath(),n.arc(0,o*s*.78,s*.3,0,Tt),n.fill();n.fillStyle=r.bg,n.fillRect(-s*.1,-s*1.12,s*.2,s*.36),n.beginPath(),n.arc(0,s*.78,s*.13,0,Tt),n.fill()}else if(t==="pot"){n.fillStyle=r.ink,n.strokeStyle=r.ink,n.lineWidth=s*.08,n.beginPath(),n.moveTo(-s*.7,-s*.15),n.lineTo(s*.7,-s*.15),n.lineTo(s*.6,s*.6),n.lineTo(-s*.6,s*.6),n.closePath(),n.fill(),n.fillRect(-s*.78,-s*.3,s*1.56,s*.12),n.beginPath(),n.arc(0,-s*.3,s*.55,Math.PI*1.1,Math.PI*1.9),n.stroke();for(let o=-1;o<=1;o++)n.beginPath(),n.moveTo(o*s*.3,-s*.45),n.bezierCurveTo(o*s*.3+s*.12,-s*.6,o*s*.3-s*.12,-s*.75,o*s*.3,-s*.9),n.stroke()}else{n.strokeStyle=r.band,n.lineWidth=s*.06,n.beginPath(),n.arc(0,0,s*.9,0,Tt),n.stroke();for(let o=0;o<8;o++){let a=o%2?s*.5:s*.85,l=s*.14;n.save(),n.rotate(o*Math.PI/4),n.fillStyle=o%2?r.ink:r.band,n.beginPath(),n.moveTo(0,-a),n.lineTo(l,0),n.lineTo(-l,0),n.closePath(),n.fill(),n.fillStyle="rgba(0,0,0,0.3)",n.beginPath(),n.moveTo(0,-a),n.lineTo(l,0),n.lineTo(0,0),n.closePath(),n.fill(),n.restore()}kt(n,"N",0,-s*.98,s*.28,{color:r.ink})}n.restore()}function Fy(n,t,e){let i=$u[e],s='"DejaVu Sans", Arial, sans-serif',r=nt(St("gbook"+e,640,384,(l,c,f,u)=>{_e(l,544,f,u,i.bg,.06,3e3,2),l.fillStyle=i.band,l.fillRect(0,f*.06,256,6),l.fillRect(0,f*.94-6,256,6),i.title.forEach((d,p)=>kt(l,d,256/2,f*.16+p*34,28,{color:i.ink,maxW:256*.86,font:s})),ky(l,i.icon,256/2,f*.56,62,i),kt(l,i.sub,256/2,f*.86,12,{color:i.ink,maxW:256*.86}),l.strokeStyle="rgba(255,255,255,0.25)",l.lineWidth=2,l.beginPath(),l.moveTo(256*.7,f),l.lineTo(256,f*.82),l.stroke(),l.strokeStyle="rgba(80,60,30,0.25)",l.lineWidth=3,l.beginPath(),l.arc(256*(.3+u()*.4),f*(.3+u()*.4),34,0,Tt),l.stroke(),l.fillStyle=i.band,l.fillRect(256+256*.1,f*.12,256*.8,3),qe(l,256+256*.12,f*.18,256*.76,12,14,u,i.ink),l.fillStyle="#f4f2ec",l.fillRect(256+256*.55,f*.8,256*.35,f*.1),Gr(l,256+256*.57,f*.81,256*.31,f*.08,u),l.save(),l.translate(528,f/2),l.rotate(Math.PI/2),kt(l,i.title.join(" "),0,6,17,{color:i.ink,maxW:f*.9,font:s}),l.restore(),l.fillStyle="rgba(0,0,0,0.25)",l.fillRect(512,0,2,f),l.fillRect(542,0,2,f),l.fillStyle="#efe6cf",l.fillRect(544,0,96,f),l.fillStyle="rgba(0,0,0,0.12)";for(let d=544;d<c;d+=2)l.fillRect(d,0,1,f);re(l,c,f,u,1.2)}),.75),o=tn(on,"gbookgeo",()=>{let l=new we(.15,.03,.22).translate(0,.015,0),c=l.attributes.uv,f=l.attributes.position,u=h=>h/640;for(let h=0;h<6;h++)for(let d=0;d<4;d++){let p=h*4+d,x=f.getX(p)/.15+.5,g=f.getY(p)/.03,m=f.getZ(p)/.22+.5,_,y;h===2?(_=u(x*256),y=1-m):h===3?(_=u(256+(1-x)*256),y=1-m):h===1?(_=u(512+g*32),y=1-m):(_=u(544+(h===0?m:x)*96),y=g),c.setXY(p,_,y)}return l}),a=new Gt;v(a,o,r),t()<.35?(a.rotation.x=Math.PI/2,a.position.set(0,.11,-.015)):a.rotation.y=(t()-.5)*.3,n.add(a)}for(let n of Object.keys($u))zo[n]=(t,e)=>Fy(t,e,n);var P_=Object.keys(zo);function qu(n,t=0){let e=new Gt,i=ns(zs(String(n))^Math.imul(t+1,2654435761)),s=zo[n];return s?s(e,i):By(e,n),Xu(e,n)}function By(n,t){let e=String(t||"SUPPLIES").replace(/_/g," ").toUpperCase(),i=nt(Cy(e.slice(0,18),0),.9),s=nt(Ry(),.9);v(n,j(.3,.22,.24),[i,i,s,s,i,i])}var zy=["#c9ccd0","#f2f1ec","#1c1c1e","#a9824f","#c4221c","#1d4f9a","#2f7a32","#f2c21b","#8a4a1a","#cfdde4","#e8701c","#c59a45","#4a4c50","#2a9a9a","#9a6a2c","#e9a0b0"],Hy={tin:0,white:1,black:2,card:3,red:4,blue:5,green:6,yellow:7,amber:8,clear:9,orange:10,brass:11,dark:12,teal:13,brown:14,pink:15},xt=(n,t,e,i,s,r,o,a={})=>({t:n,s:t,b:e,f:i,a:s,p:r,n:o,...a}),Vr={grocery:[{s:"can",r:.038,h:.112,L:Hr[0],w8:2,stack:1},{s:"can",r:.038,h:.11,L:Hr[1],w8:2,stack:1},{s:"can",r:.038,h:.112,L:Hr[2],w8:1,stack:1},{s:"can",r:.038,h:.112,L:Hr[3],w8:1,stack:1},{s:"can",r:.038,h:.11,L:Yu[0],w8:2,stack:1},{s:"can",r:.043,h:.04,L:xt("TUNA","CHUNK LIGHT IN WATER","#2b4f9a","#fff","#f2c21b","fish","NET WT 5 OZ (142g)"),w8:2,stack:1},{s:"box",w:.19,h:.29,d:.07,L:xt("CORN FLAKES","TOASTED","#f2f1ec","#1d4f9a","#e8701c","grain","NET WT 18 OZ (510g)",{top:"FAMILY SIZE",tf:"#fff"}),w8:2},{s:"box",w:.19,h:.28,d:.07,L:xt("OAT RINGS","HONEY NUT","#f2c21b","#7a2a10","#7a2a10","oats","NET WT 15.4 OZ (436g)",{top:"WHOLE GRAIN"}),w8:2},{s:"box",w:.1,h:.26,d:.04,L:xt("SPAGHETTI","ENRICHED","#1d4f9a","#fff","#f2c21b","grain","1 LB (454g)",{tf:"#1d4f9a",top:"NO. 3"}),w8:2},{s:"box",w:.2,h:.22,d:.07,L:xt("SALTINES","ORIGINAL","#f4f1ea","#c41e1e","#c41e1e","grain","NET WT 16 OZ (454g)"),w8:2},{s:"box",w:.13,h:.17,d:.04,L:xt("MAC & CHEESE","ORIGINAL","#2b6fd6","#fff","#f2c21b","noodle","NET WT 7.25 OZ",{tf:"#2b6fd6",top:"DINNER"}),w8:2},{s:"jar",r:.045,h:.125,L:xt("PEANUT BUTTER","CREAMY","#f5e6c0","#8a3a12","#c8321e","peanut","NET WT 16 OZ"),cap:"red",body:"brown",w8:2},{s:"jar",r:.042,h:.16,L:xt("PASTA SAUCE","MARINARA","#2f5a2a","#fff","#b81d18","tomato","24 OZ (680g)"),cap:"tin",body:"red",w8:2},{s:"bottle",r:.042,h:.3,L:xt("VEGETABLE OIL","PURE","#f2c21b","#1d4f9a","#1d4f9a","leaf","48 FL OZ (1.42 L)"),cap:"yellow",body:"yellow",w8:1},{s:"bag",w:.17,h:.25,d:.08,L:xt("WHITE RICE","LONG GRAIN","#f6f3ea","#1d4f8a","#1d4f8a","grain","NET WT 2 LB (907g)"),w8:2},{s:"bag",w:.16,h:.27,d:.09,L:xt("FLOUR","ALL PURPOSE","#f6f3ea","#c41e1e","#2b4f9a","grain","5 LB (2.26 kg)"),w8:1},{s:"bag",w:.21,h:.3,d:.08,L:xt("POTATO CHIPS","SEA SALT","#f2c21b","#c41e1e","#c41e1e","chip","NET WT 8 OZ"),gl:1,w8:2},{s:"jug",w:.15,h:.27,d:.15,L:xt("DRINKING WATER","1 GALLON","#e9f2f6","#1d5fa8","#3d8fd6","drop","3.78 L"),cap:"blue",body:"clear",w8:2},{s:"can",r:.064,h:.18,L:xt("OLD FASHIONED OATS","100% WHOLE GRAIN","#f4f1ea","#2a4f8a","#2a4f8a","oats","42 OZ (1.19 kg)"),cap:"blue",w8:1},{s:"cup",r:.05,h:.1,L:xt("INSTANT NOODLES","CHICKEN FLAVOR","#f4f1ea","#c41e1e","#f2c21b","noodle","2.25 OZ"),cap:"white",w8:2,stack:1},{s:"can",r:.065,h:.16,L:xt("GROUND COFFEE","MEDIUM ROAST","#3a1a10","#f3c04a","#b5321a","bean","30.5 OZ (864g)"),cap:"red",w8:1},{s:"bag",w:.14,h:.21,d:.08,L:xt("SUGAR","GRANULATED","#f6f3ea","#1d4f9a","#c41e1e","grain","4 LB (1.81 kg)"),w8:1},{s:"box",w:.4,h:.125,d:.135,L:xt("COLA 12 PACK","12 FL OZ CANS","#a8141a","#fff","#5a0a0a","bubble","144 FL OZ (4.26 L)"),w8:1,wide:1},{s:"bottle",r:.036,h:.22,L:xt("KETCHUP","TOMATO","#c41e1e","#fff","#2f6a2a","tomato","20 OZ (567g)"),cap:"white",body:"red",w8:1}],pharmacy:[{s:"jar",r:.028,h:.1,L:xt("PAIN RELIEVER","ACETAMINOPHEN 500 MG","#f4f4f0","#c41e1e","#c41e1e","pill","100 CAPLETS"),cap:"white",body:"white",w8:3,stack:1},{s:"jar",r:.028,h:.1,L:xt("IBUPROFEN","200 MG TABLETS","#f08a1c","#fff","#7a2a0a","pill","100 TABLETS"),cap:"orange",body:"white",w8:3,stack:1},{s:"jar",r:.035,h:.12,L:xt("MULTIVITAMIN","ADULT DAILY","#2a2a6a","#f2c21b","#f2c21b","sun","120 TABLETS"),cap:"black",body:"dark",w8:2},{s:"box",w:.08,h:.11,d:.03,L:xt("ALLERGY","24 HOUR RELIEF","#6a2a9a","#fff","#f2c21b","leaf","30 TABLETS"),w8:2,stack:1},{s:"box",w:.1,h:.14,d:.04,L:xt("COLD & FLU","DAY + NIGHT","#1d4f9a","#fff","#e8701c","moon","24 LIQUID CAPS"),w8:2,stack:1},{s:"bottle",r:.033,h:.14,L:xt("ANTACID","EXTRA STRENGTH","#f2f1ec","#2a9a9a","#2a9a9a","drop","160 CHEWABLES"),cap:"teal",body:"white",w8:1},{s:"box",w:.1,h:.13,d:.045,L:xt("BANDAGES","FLEXIBLE FABRIC","#f4f1ea","#c41e1e","#e0b38a","cross","60 ASSORTED"),w8:2,stack:1},{s:"box",w:.1,h:.1,d:.05,L:xt("GAUZE PADS","STERILE 4 x 4 IN","#f4f8fb","#1d5fa8","#3aa7a0","cross","25 PADS"),w8:2,stack:1},{s:"box",w:.08,h:.12,d:.03,L:xt("SLEEP AID","NIGHTTIME","#1a2a5a","#fff","#7fa8d6","moon","32 CAPLETS"),w8:1,stack:1},{s:"bottle",r:.036,h:.23,L:xt("SHAMPOO","DAILY CLEAN","#2a9a9a","#fff","#fff","bubble","12 FL OZ"),cap:"white",body:"teal",w8:2},{s:"jug",w:.1,h:.24,d:.065,L:xt("MOUTHWASH","ANTISEPTIC MINT","#2f7a32","#fff","#f2f1ec","tooth","1 L"),cap:"white",body:"green",w8:1},{s:"box",w:.065,h:.15,d:.065,L:xt("COUGH SYRUP","DM MAX","#b81d18","#fff","#f2c21b","drop","8 FL OZ"),w8:2},{s:"bottle",r:.036,h:.21,L:xt("LOTION","DRY SKIN","#f2f1ec","#1d4f9a","#7fa8d6","drop","16 FL OZ"),cap:"white",body:"white",w8:1},{s:"bottle",r:.03,h:.18,L:xt("HAND SANITIZER","70% ALCOHOL","#cfe3ef","#1d5fa8","#1d5fa8","drop","12 FL OZ"),cap:"blue",body:"clear",w8:2},{s:"bottle",r:.04,h:.21,L:xt("ISOPROPYL","ALCOHOL 70%","#f2f1ec","#1d4f9a","#1d4f9a","drop","32 FL OZ"),cap:"white",body:"clear",w8:2},{s:"bottle",r:.04,h:.21,L:xt("HYDROGEN","PEROXIDE 3%","#f2f1ec","#8a4a1a","#8a4a1a","drop","32 FL OZ"),cap:"white",body:"amber",w8:1},{s:"box",w:.045,h:.19,d:.04,L:xt("TOOTHPASTE","FLUORIDE","#2a6fd6","#fff","#d6283a","tooth","6 OZ"),w8:2},{s:"box",w:.07,h:.15,d:.04,L:xt("DEODORANT","UNSCENTED","#4a4c50","#fff","#7fa8d6","drop","2.6 OZ"),w8:1},{s:"box",w:.1,h:.13,d:.04,L:xt("ORAL SALTS","REHYDRATION","#f4f8fb","#1d5fa8","#3aa7a0","drop","10 SACHETS"),w8:2,stack:1},{s:"box",w:.2,h:.14,d:.07,L:xt("FIRST AID KIT","100 PIECES","#c8201e","#fff","#fff","wcross","HOME CAR WORK",{tf:"#c8201e"}),w8:1},{s:"bag",w:.15,h:.2,d:.1,L:xt("COTTON BALLS","TRIPLE SIZE","#f2f1ec","#d6283a","#e9a0b0","bubble","100 CT"),gl:1,w8:1},{s:"bag",w:.11,h:.15,d:.04,L:xt("COUGH DROPS","HONEY LEMON","#f2c21b","#7a2a10","#c41e1e","drop","30 DROPS"),gl:1,w8:1},{s:"box",w:.065,h:.18,d:.025,L:xt("THERMOMETER","DIGITAL","#f2f1ec","#1d4f9a","#1d4f9a","bolt","ORAL 60 SEC"),w8:1},{s:"box",w:.05,h:.1,d:.03,L:xt("EYE DROPS","LUBRICANT","#f2f1ec","#2a9a9a","#2a9a9a","drop","0.5 FL OZ"),w8:1,stack:1}],hardware:[{s:"can",r:.085,h:.19,L:xt("INTERIOR PAINT","EGGSHELL  WHITE","#f2f1ec","#1d4f9a","#1d4f9a","drop","1 GALLON (3.78 L)"),w8:2},{s:"can",r:.085,h:.19,L:xt("PRIMER","STAIN BLOCKING","#c4221c","#fff","#2a2a2c","drop","1 GALLON"),w8:1},{s:"tall",r:.033,h:.21,L:xt("SPRAY PAINT","GLOSS BLACK","#1c1c1e","#fff","#e8701c","drop","NET WT 12 OZ"),cap:"black",w8:2},{s:"tall",r:.033,h:.21,L:xt("SPRAY PAINT","SAFETY RED","#f2f1ec","#c4221c","#c4221c","drop","NET WT 12 OZ"),cap:"red",w8:1},{s:"tall",r:.03,h:.2,L:xt("PENETRATING","OIL  FREES RUST","#1d4f9a","#f2c21b","#f2c21b","drop","NET WT 11 OZ"),cap:"blue",w8:2},{s:"box",w:.14,h:.09,d:.1,L:xt("WOOD SCREWS","#8 x 2-1/2 IN","#f2c21b","#111","#111","screw","1 LB"),w8:2,stack:1},{s:"box",w:.12,h:.1,d:.08,L:xt("FRAMING NAILS","16D  3-1/2 IN","#c4221c","#fff","#111","screw","5 LB"),w8:2,stack:1},{s:"tall",r:.025,h:.23,L:xt("SILICONE","SEALANT  CLEAR","#f2f1ec","#1d4f9a","#1d4f9a","drop","10.1 FL OZ"),cap:"white",w8:2},{s:"roll",r:.056,h:.048,cap:"tin",w8:2,stack:2,L:xt("DUCT TAPE","","#c9ccd0","#333","#c9ccd0")},{s:"box",w:.18,h:.2,d:.08,L:xt("EXTENSION CORD","25 FT  OUTDOOR","#e8701c","#fff","#1c1c1e","bolt","16/3 GAUGE"),w8:1},{s:"box",w:.075,h:.12,d:.07,L:xt("LED BULBS","60W EQUAL 4 PACK","#f2f1ec","#1d4f9a","#f2c21b","sun","SOFT WHITE"),w8:2,stack:1},{s:"bottle",r:.026,h:.15,L:xt("WOOD GLUE","INTERIOR","#f2c21b","#7a2a10","#7a2a10","drop","8 FL OZ"),cap:"orange",body:"white",w8:1},{s:"bag",w:.12,h:.24,d:.03,L:xt("WORK GLOVES","LEATHER PALM","#f2c21b","#111","#111","bolt","ONE PAIR  L"),gl:1,w8:2},{s:"bag",w:.1,h:.25,d:.02,L:xt("ZIP TIES","8 IN  BLACK","#cfdde4","#111","#c4221c","bolt","100 PACK"),gl:1,w8:1},{s:"jar",r:.07,h:.12,L:xt("SPACKLE","LIGHTWEIGHT","#f2f1ec","#1d4f9a","#c4221c","drop","1 QT"),cap:"white",body:"white",w8:1},{s:"box",w:.1,h:.16,d:.03,L:xt("AA BATTERIES","ALKALINE","#111","#f2c21b","#c98a2a","battery","8 PACK"),w8:2,stack:1},{s:"can",r:.035,h:.1,L:xt("PVC CEMENT","MEDIUM BODY","#4a4c50","#fff","#c4221c","drop","8 FL OZ"),cap:"red",w8:1,stack:1},{s:"box",w:.12,h:.2,d:.02,L:xt("SANDPAPER","ASSORTED GRIT","#e8701c","#fff","#1c1c1e","grain","12 SHEETS"),w8:1},{s:"box",w:.15,h:.15,d:.08,L:xt("NYLON ROPE","3/8 IN x 50 FT","#f2f1ec","#c4221c","#c4221c","bolt","WORKING LOAD 244 LB"),w8:2},{s:"roll",r:.05,h:.048,cap:"card",w8:1,stack:2,L:xt("MASKING","","#e8dcb0","#333","#e8dcb0")},{s:"jug",w:.1,h:.2,d:.06,L:xt("MOTOR OIL","5W-30 SYNTHETIC","#1c1c1e","#f2c21b","#f2c21b","drop","1 QUART"),cap:"black",body:"black",w8:2},{s:"box",w:.22,h:.16,d:.1,L:xt("UTILITY KNIFE","RETRACTABLE + 5 BLADES","#c4221c","#fff","#1c1c1e","bolt","CARDED"),w8:1}],outdoor:[{s:"tall",r:.056,h:.22,L:xt("PROPANE","CAMPING FUEL","#2f7a32","#fff","#1d4a20","flame","16.4 OZ"),cap:"brass",w8:3},{s:"can",r:.055,h:.1,L:xt("BUTANE","ISOBUTANE MIX","#1d4f9a","#fff","#e8701c","flame","8 OZ (227g)"),cap:"tin",w8:2,stack:1},{s:"box",w:.15,h:.26,d:.075,L:xt("CAMP FUEL","WHITE GAS","#c4221c","#fff","#f2c21b","flame","1 GALLON"),gl:1,w8:1},{s:"bag",w:.17,h:.24,d:.05,L:xt("BEEF STROGANOFF","FREEZE-DRIED MEAL","#2a3a2a","#f2c21b","#e8701c","noodle","2 SERVINGS"),gl:1,w8:2},{s:"bag",w:.17,h:.24,d:.05,L:xt("CHILI MAC","FREEZE-DRIED MEAL","#4a2412","#f2c21b","#c4221c","chili","2 SERVINGS"),gl:1,w8:2},{s:"box",w:.3,h:.22,d:.05,L:xt("TARP","ALL PURPOSE 8 x 10 FT","#1d4f9a","#fff","#f2c21b","drop","WATERPROOF"),w8:1},{s:"box",w:.16,h:.26,d:.16,L:xt("LED LANTERN","1000 LUMENS","#1c1c1e","#e8701c","#e8701c","sun","USES 3 D CELLS"),w8:1},{s:"box",w:.3,h:.12,d:.25,L:xt("CAMP STOVE","TWO BURNER","#2f7a32","#fff","#1c1c1e","flame","PROPANE"),w8:1,wide:1},{s:"tall",r:.03,h:.17,L:xt("BUG SPRAY","25% DEET","#2f7a32","#fff","#f2c21b","bug","6 OZ"),cap:"green",w8:2},{s:"bottle",r:.03,h:.16,L:xt("SUNSCREEN","SPF 50 SPORT","#f2c21b","#1d4f9a","#e8701c","sun","8 FL OZ"),cap:"blue",body:"yellow",w8:1},{s:"bag",w:.1,h:.14,d:.02,L:xt("HAND WARMERS","UP TO 10 HRS","#e0521c","#fff","#2a2a2c","flame","1 PAIR"),gl:1,w8:2,stack:1},{s:"bottle",r:.042,h:.21,L:xt("WATER BOTTLE","BPA FREE 32 OZ","#cfdde4","#1d4f9a","#1d4f9a","drop","WIDE MOUTH"),cap:"black",body:"clear",w8:1},{s:"can",r:.12,h:.36,L:xt("SLEEPING BAG","RATED 30 F","#2a5ab8","#fff","#1c1c1e","snow","STUFF SACK INCLUDED"),cap:"black",w8:1},{s:"box",w:.1,h:.13,d:.04,L:xt("FIRE STARTERS","WATERPROOF","#c4221c","#fff","#f2c21b","flame","12 PIECES"),w8:2,stack:1},{s:"box",w:.1,h:.2,d:.05,L:xt("WATER FILTER","SQUEEZE SYSTEM","#2a6fd6","#fff","#fff","drop","0.1 MICRON"),w8:1},{s:"bag",w:.1,h:.15,d:.02,L:xt("EMERGENCY BLANKET","MYLAR","#c9ccd0","#c4221c","#c4221c","sun","52 x 82 IN"),gl:1,w8:1,stack:1},{s:"box",w:.1,h:.18,d:.04,L:xt("HEADLAMP","300 LUMENS","#1c1c1e","#f2c21b","#f2c21b","sun","BATTERIES INCLUDED"),w8:1},{s:"box",w:.18,h:.08,d:.18,L:xt("MESS KIT","5 PIECE","#4a4c50","#fff","#e8701c","flame","ALUMINUM"),w8:1,stack:1},{s:"box",w:.11,h:.07,d:.035,L:xt("MATCHES","STRIKE ANYWHERE","#f2c21b","#c41e1e","#c41e1e","flame","250 CT"),w8:1,stack:2}],convenience:[{s:"can",r:.033,h:.122,L:{t:"COLA",s:"CLASSIC",n:"12 FL OZ",b:"#a8141a",f:"#fff",a:"#5a0a0a",p:"bubble"},cap:"tin",w8:2,stack:1,gl:1},{s:"can",r:.033,h:.122,L:{t:"LEMON LIME",s:"CAFFEINE FREE",n:"12 FL OZ",b:"#2f8a3a",f:"#f6ee4a",a:"#0f4a1a",p:"bubble"},cap:"tin",w8:2,stack:1,gl:1},{s:"can",r:.029,h:.16,L:xt("ENERGY","DRINK","#1c1c1e","#7fd62a","#7fd62a","bolt","16 FL OZ"),cap:"tin",w8:2,gl:1},{s:"bottle",r:.033,h:.21,L:xt("SPRING WATER","NATURAL","#e9f2f6","#1d5fa8","#3d8fd6","drop","16.9 FL OZ"),cap:"blue",body:"clear",w8:3},{s:"bottle",r:.036,h:.21,L:xt("SPORTS DRINK","GLACIER","#111","#fff","#2a7fd6","bolt","28 FL OZ"),cap:"blue",body:"blue",w8:2},{s:"bottle",r:.036,h:.245,L:xt("ORANGE SODA","","#e8701c","#fff","#1d4f9a","bubble","20 FL OZ"),cap:"orange",body:"orange",w8:1},{s:"bag",w:.2,h:.28,d:.07,L:xt("POTATO CHIPS","SEA SALT","#f2c21b","#c41e1e","#c41e1e","chip","8 OZ"),gl:1,w8:2},{s:"bag",w:.2,h:.28,d:.07,L:xt("TORTILLA CHIPS","NACHO","#c4221c","#fff","#f2c21b","chip","9.75 OZ"),gl:1,w8:2},{s:"box",w:.2,h:.06,d:.1,L:xt("CHOCOLATE BARS","MILK  36 CT","#4a2412","#f2c21b","#c4221c","bean","DISPLAY BOX"),w8:2,stack:2,wide:1},{s:"bag",w:.14,h:.2,d:.035,L:xt("BEEF JERKY","ORIGINAL","#2a2420","#f2c21b","#8a2a12","meat","3.25 OZ"),gl:1,w8:2},{s:"cup",r:.05,h:.1,L:xt("INSTANT NOODLES","SPICY BEEF","#f4f1ea","#c41e1e","#c41e1e","noodle","2.25 OZ"),cap:"white",w8:2,stack:1},{s:"jug",w:.1,h:.2,d:.06,L:xt("MOTOR OIL","10W-30","#1c1c1e","#f2c21b","#f2c21b","drop","1 QUART"),cap:"black",body:"black",w8:1},{s:"box",w:.1,h:.16,d:.03,L:xt("AA BATTERIES","ALKALINE","#111","#f2c21b","#c98a2a","battery","4 PACK"),w8:1,stack:1},{s:"box",w:.22,h:.1,d:.11,L:xt("TISSUES","2-PLY","#7fa8d6","#fff","#1d4f9a","bubble","160 SHEETS"),w8:1,wide:1,stack:1},{s:"box",w:.2,h:.08,d:.12,L:xt("SNACK CAKES","CREME FILLED","#f2f1ec","#c4221c","#e9a0b0","sun","8 CAKES"),w8:1,wide:1,stack:1},{s:"bag",w:.15,h:.22,d:.05,L:xt("TRAIL MIX","NUTS & RAISINS","#3a5a2a","#f2c21b","#e8701c","peanut","10 OZ"),gl:1,w8:1},{s:"can",r:.042,h:.09,L:xt("ROASTED PEANUTS","SALTED","#1d4f9a","#f2c21b","#f2c21b","peanut","16 OZ"),cap:"tin",w8:1,stack:1},{s:"box",w:.08,h:.05,d:.06,L:xt("GUM","SPEARMINT","#2f7a32","#fff","#fff","leaf","15 STICKS"),w8:1,stack:2},{s:"bottle",r:.03,h:.2,L:xt("ICED TEA","LEMON","#f2c21b","#7a2a10","#7a2a10","leaf","18.5 FL OZ"),cap:"yellow",body:"amber",w8:1}]},Do=2048,ko=1024,li=256,Iu=8,Zu=31,Ku=30,Pu=12763324,hf=[{t:"SALE",b:"#c4221c",f:"#fff",a:"#f2c21b"},{t:"SEASONAL",b:"#2f6a3a",f:"#fff",a:"#c9a24a"},{t:"BACK TO SCHOOL",b:"#1d4f9a",f:"#fff",a:"#f2c21b"},{t:"CLEARANCE",b:"#f2c21b",f:"#1c1c1e",a:"#c4221c"}];function Gy(n,t){let[e,i]=Bs(Ku);hf.forEach((s,r)=>{let o=i+r*64;n.fillStyle=s.b,n.fillRect(e,o,256,64),n.fillStyle=s.a,n.fillRect(e,o+4,256,4),n.fillRect(e,o+56,256,4),kt(n,s.t,e+128,o+33,34,{color:s.f,maxW:236,font:Mi});for(let l=0;l<140;l++)n.fillStyle=`rgba(${t()<.5?"0,0,0":"255,255,255"},${.05+t()*.08})`,n.fillRect(e+t()*256,o+t()*64,2,2);let a=n.createLinearGradient(0,o,0,o+64);a.addColorStop(0,"rgba(60,50,30,0)"),a.addColorStop(1,"rgba(60,50,30,0.3)"),n.fillStyle=a,n.fillRect(e,o,256,64)})}function Vy(n){let[t,e]=Bs(Ku);return vl(t+1,e+n*64+1,254,62)}function Bs(n){return[n%Iu*li,Math.floor(n/Iu)*li]}function Wy(n){if(n.s==="box"||n.s==="bag"||n.s==="jug")return[256,Math.round(256*n.h/n.w)];let t=n.r,e=n.s==="bottle"?n.h*.55:n.s==="jar"?n.h*.85:n.s==="tall"?n.h*.78:n.h;return[512,Math.max(60,Math.round(512*e/(Tt*t)))]}function Xy(n){return tn(Fu,"atlas|"+n,()=>{let t=zu(Do,ko);if(!t)return null;let e=t.getContext("2d");e.fillStyle="#888",e.fillRect(0,0,Do,ko);let i=ns(zs("atlas"+n));Vr[n].forEach((a,l)=>{let[c,f]=Bs(l),[u,h]=Wy(a);e.save(),e.beginPath(),e.rect(c,f,li,li),e.clip(),e.translate(c,f),e.scale(li/u,li/h),a.s==="roll"?_e(e,u,h,i,a.L.b,.08,400,2):a.s==="box"||a.s==="bag"||a.s==="jug"?mf(e,u,h,a.L,i):_l(e,u,h,a.L,i),e.restore(),e.fillStyle=a.L.b,e.fillRect(c,f+li*.3,12,li*.6)});let[s,r]=Bs(Zu);zy.forEach((a,l)=>{let c=s+l%4*64,f=r+Math.floor(l/4)*64;e.fillStyle=a,e.fillRect(c,f,64,64);for(let u=0;u<120;u++)e.fillStyle=i()<.5?"rgba(0,0,0,0.06)":"rgba(255,255,255,0.08)",e.fillRect(c+i()*64,f+i()*64,2,2)}),Gy(e,i),e.save(),e.globalCompositeOperation="saturation",e.globalAlpha=.28,e.fillStyle="#808080",e.fillRect(0,0,Do,ko),e.restore();let o=new Dn(t);return o.colorSpace=$e,o.anisotropy=4,o})}function vl(n,t,e,i){return[n/Do,1-(t+i)/ko,(n+e)/Do,1-t/ko]}function Yy(n){let[t,e]=Bs(n);return vl(t+2,e+2,li-4,li-4)}function $y(n){let[t,e]=Bs(n);return vl(t+3,e+li*.35,6,li*.45)}function Ju(n){let t=Hy[n]??0,[e,i]=Bs(Zu);return vl(e+t%4*64+12,i+Math.floor(t/4)*64+12,40,40)}var Lu=new WeakMap;function qy(n){let t=Lu.get(n);if(t)return t;t=new Uint8Array(n.attributes.position.count);let e=n.index;for(let i of n.groups)for(let s=i.start;s<i.start+i.count;s++)t[e?e.getX(s):s]=i.materialIndex;return Lu.set(n,t),t}var ci=class{constructor(t){this.b=[];for(let e=0;e<t;e++)this.b.push({p:[],n:[],u:[],i:[]})}add(t,e,i,s){this.root&&(e=new oe().multiplyMatrices(this.root,e));let r=t.attributes.position,o=t.attributes.normal,a=t.attributes.uv,l=t.index,c=qy(t),f=new ge().getNormalMatrix(e),u=e.elements,h=f.elements,d=new Int32Array(r.count),p=new Uint8Array(r.count);for(let g=0;g<r.count;g++){let m=c[g],_=s[m]??s[0],y=this.b[_];p[g]=_,d[g]=y.p.length/3;let b=r.getX(g),I=r.getY(g),A=r.getZ(g);y.p.push(u[0]*b+u[4]*I+u[8]*A+u[12],u[1]*b+u[5]*I+u[9]*A+u[13],u[2]*b+u[6]*I+u[10]*A+u[14]);let T=o.getX(g),P=o.getY(g),E=o.getZ(g),M=h[0]*T+h[3]*P+h[6]*E,U=h[1]*T+h[4]*P+h[7]*E,B=h[2]*T+h[5]*P+h[8]*E,V=Math.hypot(M,U,B)||1;y.n.push(M/V,U/V,B/V);let H=i[m]??i[0];y.u.push(H[0]+a.getX(g)*(H[2]-H[0]),H[1]+a.getY(g)*(H[3]-H[1]))}let x=l?l.count:r.count;for(let g=0;g<x;g+=3){let m=l?l.getX(g):g,_=l?l.getX(g+1):g+1,y=l?l.getX(g+2):g+2;this.b[p[m]].i.push(d[m],d[_],d[y])}}meshes(t){let e=[];return this.b.forEach((i,s)=>{if(!i.i.length)return;let r=new Ue;r.setAttribute("position",new he(i.p,3)),r.setAttribute("normal",new he(i.n,3)),r.setAttribute("uv",new he(i.u,2)),r.setIndex(i.p.length/3>65535?new wr(i.i,1):new Er(i.i,1)),r.computeBoundingSphere(),r.computeBoundingBox();let o=new Xt(r,t[s]);o.receiveShadow=!0,e.push(o)}),e}};function Zy(n,t){return tn(on,`prod|${n}|${t}`,()=>{let e=Vr[n][t],i=Yy(t),s=$y(t),r=h=>Ju(h),o=e.gl?1:0,a=new oe,l=(h,d,p)=>new oe().makeTranslation(h,d,p),c=[];switch(e.s){case"can":c.push({geo:Z(e.r,e.r,e.h,12),m:a,rects:[i,r(e.cap||"tin"),r(e.cap||"tin")],bk:[o,1,1]});break;case"tall":c.push({geo:Z(e.r,e.r,e.h*.78,10),m:a,rects:[i,r("tin"),r("tin")],bk:[o,1,1]}),c.push({geo:Z(e.r*.94,e.r*.94,e.h*.22,10),m:l(0,e.h*.78,0),rects:[r(e.cap||"white"),r(e.cap||"white"),r(e.cap||"white")],bk:[1,1,1]});break;case"box":c.push({geo:j(e.w,e.h,e.d),m:a,rects:[s,s,s,s,i,i],bk:[o,o,o,o,o,o]});break;case"bag":c.push({geo:Bo(e.w,e.h,e.d,.06,4,5),m:a,rects:[s,s,s,s,i,i],bk:[o,o,o,o,o,o]});break;case"bottle":{let h=r(e.body||"white");c.push({geo:Z(e.r,e.r,e.h*.55,10),m:l(0,e.h*.05,0),rects:[i,h,h],bk:[1,1,1]}),c.push({geo:Z(e.r,e.r*.95,e.h*.05,10,!0),m:a,rects:[h],bk:[1]}),c.push({geo:Z(e.r*.38,e.r,e.h*.25,10,!0),m:l(0,e.h*.6,0),rects:[h],bk:[1]});let d=r(e.cap||"white");c.push({geo:Z(e.r*.42,e.r*.42,e.h*.15,8),m:l(0,e.h*.85,0),rects:[d,d,d],bk:[1,1,1]});break}case"jar":{let h=r(e.body||"white"),d=r(e.cap||"white");c.push({geo:Z(e.r,e.r,e.h*.85,10),m:a,rects:[i,h,h],bk:[o,1,1]}),c.push({geo:Z(e.r*.9,e.r*.9,e.h*.15,10),m:l(0,e.h*.85,0),rects:[d,d,d],bk:[1,1,1]});break}case"jug":{let h=r(e.body||"white"),d=r(e.cap||"white");c.push({geo:j(e.w,e.h*.8,e.d),m:a,rects:[h,h,h,h,i,i],bk:[1,1,1,1,0,0]}),c.push({geo:Z(e.w*.2,e.w*.42,e.h*.08,8,!0),m:l(-e.w*.15,e.h*.8,0),rects:[h],bk:[1]}),c.push({geo:Z(e.w*.2,e.w*.2,e.h*.12,8),m:l(-e.w*.15,e.h*.88,0),rects:[d,d,d],bk:[1,1,1]});break}case"cup":{let h=r(e.cap||"white");c.push({geo:Z(e.r,e.r*.76,e.h,12),m:a,rects:[i,h,h],bk:[0,1,0]});break}case"roll":{let h=r(e.cap||"tin");c.push({geo:Z(e.r,e.r,e.h,12),m:a,rects:[i,r("card"),r("card")],bk:[1,0,0]}),c.push({geo:Z(e.r*.68,e.r*.68,.002,10),m:l(0,e.h,0),rects:[h,r("dark"),r("dark")],bk:[0,0,0]});break}}let f=e.w??e.r*2,u=e.d??e.r*2;return{p:e,parts:c,w:f,h:e.h,d:u}})}function xl(n,t,e,i,s,r,o,a=0){let l=new oe().makeRotationY(r);if(o){let u=a?new oe().makeRotationX(o):new oe().makeRotationZ(o);l.multiply(u)}let c=1/0,f=new N;for(let u of[-1,1])for(let h of[0,1])for(let d of[-1,1])f.set(u*t.w/2,h*t.h,d*t.d/2).applyMatrix4(l),c=Math.min(c,f.y);l.setPosition(e,i-c,s);for(let u of t.parts){let h=new oe().multiplyMatrices(l,u.m);n.add(u.geo,h,u.rects,u.bk)}}function ju(n){let t=Xy(n);return[ae("shelfMatte|"+n,{map:t,color:Pu,roughness:.78,metalness:0}),ae("shelfGloss|"+n,{map:t,color:Pu,roughness:.4,metalness:.2})]}function Qu(n){let t=Vr[n],e=t.map((s,r)=>Zy(n,r)),i=t.reduce((s,r)=>s+(r.w8||1),0);return{cat:t,tpls:e,total:i}}function td(n,t,e,i,s,r,o=.385,a=.02,l=.42){let{cat:c,tpls:f,total:u}=Qu(t),h=(y,b)=>{for(let A=0;A<12;A++){let T=e()*u,P=0;for(;T>(c[P].w8||1);)T-=c[P].w8||1,P++;if(f[P].h<=y&&f[P].d<=b)return P}let I=0;return f.forEach((A,T)=>{A.h*A.d<f[I].h*f[I].d&&(I=T)}),f[I].h<=y?I:-1},d=1-r,p=d*.45,x=Math.min(1,r/(1-p)),g=[...s].sort((y,b)=>y-b),m=0,_=0;return g.forEach((y,b)=>{let I=(b+1<g.length?g[b+1]-y:l)-.035,A=[],T=-i/2+.015;for(;T<i/2-.05;){let E=h(I,o-a);if(E<0)break;let M=f[E],U=M.p,B=.25+e()*.45,V=Math.max(1,Math.round(B/(M.w+.004))),H=e()<p,rt=Math.max(1,Math.min(U.wide?2:3,Math.floor((o-a)/(M.d+.004)))),$=T;for(let pt=0;pt<V&&T+M.w<i/2-.01;pt++){let Q=T+M.w/2;if(T+=M.w+.004+(r<.6?e()*.01:0),H&&e()<.92)continue;let vt=r>.92?rt:Math.min(rt,Math.max(0,Math.round(rt*x*(.45+e()*1.1)-.15)));vt===0&&A.push(Q);for(let Lt=0;Lt<vt;Lt++){let Bt=r>.85?0:(rt-vt)*(M.d+.004)*(.3+e()*.7),se=o-M.d/2-(vt-1-Lt)*(M.d+.004)-Bt,be=Math.PI/2+(e()-.5)*(.04+d*.5),ot=0,yt=0;if(Lt===vt-1&&e()<d*.3?(ot=Math.PI/2*(e()<.5?1:-1),yt=e()<.5?1:0,be+=(e()-.5)*1.2,_++):e()<d*.1&&(be+=(e()-.5)*2.5),xl(n,M,Math.max(a+M.d/2,se),y,Q+(e()-.5)*d*.02,be,ot,yt),m++,U.stack&&!ot&&r>.45){let Vt=Math.min(U.stack+1,Math.floor(I/(M.h+.002)));for(let At=1;At<Vt&&!(e()>r*1.05);At++)xl(n,M,Math.max(a+M.d/2,se)+(e()-.5)*.004,y+At*(M.h+.001),Q+(e()-.5)*.006,be+(e()-.5)*.08,0),m++}}}if(H)for(let pt=$+.08;pt<T-.08;pt+=.16)A.push(pt);T+=e()<.15+d*.3?e()*.08:.002}let P=Math.round(d*d*i*2.2*(.6+e()*.8));for(let E=0;E<P&&A.length;E++){let M=A.splice(Math.floor(e()*A.length),1)[0],U=h(Math.min(I,.3),o-a);if(U<0)continue;let B=f[U];if(Math.max(B.w,B.d,B.h)>o-a+.06&&e()<.5)continue;let H=Math.min(o-.05,Math.max(a+.06,o-.04-e()*.15));xl(n,B,H,y,M+(e()-.5)*.05,e()*Tt,Math.PI/2,e()<.5?1:0),m++,_++}}),{count:m,tipped:_}}function ed(n="grocery",t=2,e=[.1,.5,.9,1.3],i=.7,s=0){return Bu(()=>Ky(n,t,e,i,s))}function Ky(n,t,e,i,s){Vr[n]||(n="grocery");let r=ns(zs(n)^Math.imul((s|0)+7,2654435761));i=ms.clamp(i,0,1);let o=new ci(2),{count:a,tipped:l}=td(o,n,r,t,e,i),{tpls:c}=Qu(n),f=Math.round((1-i)*t*(1+r()*1.2));for(let p=0;p<f;p++){let x=c[Math.floor(r()*c.length)];x.h>.32||(xl(o,x,.45+r()*.85,0,(r()-.5)*(t-.2),r()*Tt,r()<.75?Math.PI/2:0,r()<.5?1:0),a++,l++)}let u=new Gt;u.name="shelfFill:"+n;let h=o.meshes(ju(n)),d=0;for(let p of h)u.add(p),d+=p.geometry.index.count/3;return u.userData={kind:n,items:a,fallen:l,triangles:d,drawCalls:h.length},u}function nd(n="grocery",t=1.2,e=1.9,i=.6,s=0,r=.55,o={}){return Bu(()=>Jy(n,t,e,i,s,r,o))}function Jy(n,t,e,i,s,r,o){Vr[n]||(n="grocery");let a=ns(zs("endcap"+n)^Math.imul((s|0)+13,2654435761));i=ms.clamp(i,0,1);let l=t,c=r,f=e,u=new ci(2),h=H=>Ju(H),d=(H,rt,$,pt,Q,vt,Lt,Bt=0)=>{let se=new oe().makeTranslation((H+rt)/2,$,(Q+vt)/2);u.add(j(Math.max(.002,rt-H),Math.max(.002,pt-$),Math.max(.002,vt-Q)),se,Array.isArray(Lt)?Lt:[Lt],[Bt])},p=Math.min(.26,f*.14),x=f-p-.06,g=x>1.55?4:3,m=.12,_=x-.32,y=[];for(let H=0;H<g;H++)y.push(m+(_-m)*H/(g-1));if(o.unit!==!1){let H=h("tin"),rt=h("dark"),$=h("white");d(-l/2,l/2,0,m,-c/2+.03,c/2,[rt]),d(-l/2,l/2,0,x,-c/2,-c/2+.03,[H]);for(let pt of[-1,1])d(pt<0?-l/2:l/2-.025,pt<0?-l/2+.025:l/2,0,x,-c/2,c/2,[H]);for(let pt of y.slice(1))d(-l/2+.025,l/2-.025,pt-.02,pt,-c/2+.03,c/2-.01,[H]),d(-l/2+.025,l/2-.025,pt-.045,pt,c/2-.012,c/2,[$]);d(-l/2,l/2,x-.03,x,-c/2,c/2,[H])}let b=o.sign??Math.floor(a()*hf.length),I=Math.min(l-.06,p*4),A=f-p;for(let H of[-1,1])d(H*I*.3-.012,H*I*.3+.012,x,A+.02,-.012,.012,[h("tin")],1);let T=(a()-.5)*.12*(1-i),P=new oe().makeTranslation(0,A,0).multiply(new oe().makeRotationZ(T)),E=Vy(b);u.add(j(I,p*.98,.012),P,[h("white"),h("white"),h("white"),h("white"),E,E],[0]),u.root=new oe().makeRotationY(-Math.PI/2);let M=td(u,n,a,l-.07,y,i,c/2-.015,-c/2+.035,x-y[y.length-1]);u.root=null;let U=new Gt;U.name="endcap:"+n;let B=u.meshes(ju(n)),V=0;for(let H of B)H.castShadow=!0,U.add(H),V+=H.geometry.index.count/3;return U.userData={kind:n,w:l,d:c,h:f,levels:y,sign:hf[b].t,items:M.count,fallen:M.tipped,triangles:V,drawCalls:B.length},U}var L_=Object.keys(Vr);function Nu(n,t,e=1){return tn(on,"quads"+n,()=>{let i=[],s=[],r=new N,o=new N,a=new N,l=new N;for(let f of t){r.fromArray(f[0]),o.fromArray(f[1]),a.fromArray(f[2]),l.fromArray(f[3]);let u=r.distanceTo(o)*e,h=r.distanceTo(l)*e;i.push(...f[0],...f[1],...f[2],...f[0],...f[2],...f[3]),s.push(0,0,u,0,u,h,0,0,u,h,0,h)}let c=new Ue;return c.setAttribute("position",new he(i,3)),c.setAttribute("uv",new he(s,2)),c.computeVertexNormals(),c})}function jy(){return St("wiregrid",64,64,(n,t,e)=>{n.clearRect(0,0,t,e),n.fillStyle="#d4d8dc",n.fillRect(0,0,t,7),n.fillRect(0,32,t,7),n.fillRect(0,0,7,e),n.fillRect(32,0,7,e),n.fillStyle="rgba(255,255,255,0.6)",n.fillRect(0,2,t,2),n.fillRect(0,34,t,2),n.fillRect(2,0,2,e),n.fillRect(34,0,2,e)},{repeat:[1,1]})}function Qy(){return ae("wiremat",{map:jy(),color:14672870,roughness:.35,metalness:.45,alphaTest:.5,side:Le,transparent:!1})}function vn(n,t,e,i,s,r=!1,o=24){return v(n,Ln(t,e,i,o,6,r),s)}function pl(n,t=.04){let e=[],i=n.length,s=n.map(r=>new N(...r));for(let r=0;r<i;r++){let o=s[(r+i-1)%i],a=s[r],l=s[(r+1)%i],c=o.clone().sub(a).normalize().multiplyScalar(t).add(a),f=l.clone().sub(a).normalize().multiplyScalar(t).add(a),u=c.clone().add(f).multiplyScalar(.5).lerp(a,.45);e.push(c.toArray(),u.toArray(),f.toArray())}return e}function ml(n,t,e,i=.05){v(n,Z(i,i,.03,10),it.rubber,t+.015,i,e,0,0,Math.PI/2),v(n,Z(i*.5,i*.5,.032,8),it.steel,t+.016,i,e,0,0,Math.PI/2),v(n,j(.012,i*1.4,.045),it.steel,t+.018,i*.9,e),v(n,j(.012,i*1.4,.045),it.steel,t-.018,i*.9,e),v(n,j(.05,.012,.05),it.steel,t,i*2.2,e)}function t_(n,t,e,i,s,r,o,a=0){v(n,Ie(s-r,r,5,24),it.rubber,t,e,i,0,Math.PI/2,0),v(n,Ie(s-r*2.2,r*.4,3,24),o,t,e,i,0,Math.PI/2,0),v(n,Z(.025,.025,.05,10),o,t-.025,e,i,0,0,Math.PI/2);for(let l=0;l<a;l++)v(n,Z(.0025,.0025,(s-r*2.2)*2,4),o,t,e,i,l*Math.PI/a,0,0,1,1,1)}var id=["FRAGILE","CANNED GOODS","PAPER TOWELS","BOTTLED WATER","SUPPLIES","HANDLE WITH CARE","PRODUCE","DRY GOODS"];function uf(){return ae("cartonAtlas",{map:St("cartonAtlas",1024,1024,(n,t,e,i)=>{let s=(r,o)=>{n.save(),n.translate(r%4*256,Math.floor(r/4)*256),n.beginPath(),n.rect(0,0,256,256),n.clip(),o(),n.restore()};id.forEach((r,o)=>s(o,()=>{n.scale(.5,.5),Gu(n,512,512,i,r,o%4)})),s(8,()=>{_e(n,256,256,i,"#a9824f",.12,3e3,2),n.strokeStyle="rgba(80,55,25,0.18)";for(let r=0;r<256;r+=4+i()*3)n.beginPath(),n.moveTo(0,r),n.lineTo(256,r),n.stroke();re(n,256,256,i,.6)}),s(9,()=>{_e(n,256,256,i,"#b99868",.12,3e3,2),re(n,256,256,i,.6)}),s(10,()=>{_e(n,256,256,i,"#a9824f",.1,2500,2),n.fillStyle="rgba(40,25,10,0.5)",n.fillRect(0,127,256,2),n.fillStyle="rgba(200,170,110,0.8)",n.fillRect(0,107,256,41),n.fillStyle="rgba(255,255,255,0.18)",n.fillRect(0,113,256,3),re(n,256,256,i,1)}),s(11,()=>{n.fillStyle="#2a2018",n.fillRect(0,0,256,256),re(n,256,256,i,.5)})}),roughness:.9})}function e_(n){let t=n%4,e=Math.floor(n/4);return[t/4+.002,1-(e+1)/4+.002,(t+1)/4-.002,1-e/4-.002]}function df(n,t,e,i){let s=`cbox${n.toFixed(3)},${t.toFixed(3)},${e.toFixed(3)},${i.join(".")}`;return tn(on,s,()=>{let r=new we(n,t,e).translate(0,t/2,0),o=r.attributes.uv;for(let a=0;a<6;a++){let l=e_(i[a]);for(let c=0;c<4;c++){let f=a*4+c;o.setXY(f,l[0]+o.getX(f)*(l[2]-l[0]),l[1]+o.getY(f)*(l[3]-l[1]))}}return r.clearGroups(),r})}function of(n,t,e,i,s,r){let o=Math.floor(s()*id.length),a=l=>Math.round(l*50)/50;v(n,df(a(t),a(e),a(i),[o,(o+3)%8,r?11:10,8,o,(o+5)%8]),uf())}function kn(n,t,e){return tn(on,"remap"+t,()=>{let i=n.clone(),s=i.attributes.uv,r=i.index,o=i.groups.length?i.groups:[{start:0,count:r?r.count:s.count,materialIndex:0}],a=new Uint8Array(s.count);for(let l of o){let c=e[l.materialIndex]??(l.materialIndex===0?e[0]:null);if(c)for(let f=l.start;f<l.start+l.count;f++){let u=r?r.getX(f):f;a[u]||(a[u]=1,s.setXY(u,c[0]+s.getX(u)*(c[2]-c[0]),c[1]+s.getY(u)*(c[3]-c[1])))}}return i})}function n_(){return nt(St("litteratlas",512,512,(n,t,e,i)=>{n.save(),_l(n,512,170,Hr[0],i),n.restore(),n.save(),n.translate(0,170),_l(n,512,170,{t:"COLA",s:"CLASSIC",n:"12 FL OZ",b:"#a8141a",f:"#fff",a:"#5a0a0a",p:"bubble"},i),n.restore(),n.save(),n.translate(0,340),n.scale(4,172/160),mf(n,128,160,{t:"CHIPS",b:"#f2c21b",f:"#c41e1e",a:"#c41e1e",p:"chip"},i),n.restore(),re(n,t,e,i,1.5)}),.45,.15)}var Ou=[[0,1-170/512,1,1],[0,1-340/512,1,1-170/512],[0,0,1,1-340/512]],Fo={shopping_cart(n,t){let e=Qy(),i=it.steel,s=[[-.27,1,.45],[.27,1,.45],[.25,.98,-.45],[-.25,.98,-.45]],r=[[-.23,.55,.38],[.23,.55,.38],[.19,.6,-.36],[-.19,.6,-.36]],o=[[r[0],r[3],s[3],s[0]],[r[2],r[1],s[1],s[2]],[r[3],r[2],s[2],s[3]],[r[1],r[0],s[0],s[1]],[r[0],r[1],r[2],r[3]],[[-.22,.16,.38],[.22,.16,.38],[.2,.16,-.36],[-.2,.16,-.36]]];v(n,Nu("cart",o,30),e),vn(n,"cartrim2",pl(s,.04),.008,i,!0,60),vn(n,"cartbot2",pl(r,.03),.006,i,!0,60);for(let l of[-1,1])vn(n,"cartbase"+l,[[l*.2,.13,-.4],[l*.22,.13,.1],[l*.24,.14,.42],[l*.25,.5,.45],[l*.27,.98,.47]],.012,i,!1,20),vn(n,"cartstrut"+l,[[l*.19,.6,-.36],[l*.2,.14,-.36]],.009,i,!1,2);let a=ut(12853788,.45);v(n,Z(.016,.016,.58,12),a,-.29,1.03,.5,0,0,-Math.PI/2);for(let l of[-1,1])v(n,Z(.008,.008,.06,6),i,l*.27,1,.485,.7,0,0);v(n,j(.3,.06,.004),a,0,.88,-.455);for(let[l,c]of[[-.2,-.38],[.2,-.38],[-.22,.4],[.22,.4]])ml(n,l,c,.055);t()<.4&&(n.rotation.y=t()*Tt)},basket(n,t){let e=ee(t,["#c4221c","#1d4f9a","#2f7a32"]),i=St("basketholes"+e,64,64,(l,c,f)=>{l.fillStyle=e,l.fillRect(0,0,c,f),l.clearRect(8,10,20,12),l.clearRect(36,10,20,12),l.clearRect(8,40,20,12),l.clearRect(36,40,20,12)},{repeat:[1,1]}),s=ae("basket"+e,{map:i,roughness:.5,alphaTest:.5,side:Le}),r=[[-.22,.22,.16],[.22,.22,.16],[.22,.22,-.16],[-.22,.22,-.16]],o=[[-.19,0,.13],[.19,0,.13],[.19,0,-.13],[-.19,0,-.13]];v(n,Nu("basket",[[o[0],o[1],r[1],r[0]],[o[1],o[2],r[2],r[1]],[o[2],o[3],r[3],r[2]],[o[3],o[0],r[0],r[3]]],12),s);let a=[.01,.02,.09,.98];v(n,kn(j(.38,.01,.26),"basketbottom",[a,a,a,a,a,a]),[s,s,s,s,s,s]),v(n,kn(Ln("basketrim2",pl(r,.03),.01,24,6,!0),"basketrim",[a]),s);for(let l of[-1,1])vn(n,"baskethandle"+l,[[-.2,.22,l*.16],[-.12,.36,l*.06],[.12,.36,l*.06],[.2,.22,l*.16]],.009,it.blackPl,!1,16)},cardboard_box(n,t){let e=.3+t()*.3,i=.22+t()*.25,s=.25+t()*.2,r=t()<.5;if(of(n,e,i,s,t,r),r){let o=uf(),a=(l,c,f,u,h,d,p,x)=>{let g=new Gt;v(g,df(+f.toFixed(2),.004,+u.toFixed(2),[9,9,9,9,9,9]),o,h,0,d),g.position.set(l,i,c),g.rotation.set(p,0,x),n.add(g)};a(0,s/2,e,s/2,0,s/4,(t()-.25)*1.5,0),a(0,-s/2,e,s/2,0,-s/4,-(t()-.25)*1.5,0),a(e/2,0,e/2,s,e/4,0,0,-(t()-.25)*1.5),a(-e/2,0,e/2,s,-e/4,0,0,(t()-.25)*1.5)}},box_stack(n,t){let e=1+Math.floor(t()*2);for(let i=0;i<e;i++){let s=0,r=2+Math.floor(t()*3),o=.4+t()*.15,a=.32+t()*.1;for(let l=0;l<r;l++){let c=.25+t()*.15,f=new Gt;of(f,o*(.9+t()*.1),c,a*(.9+t()*.1),t,!1),f.position.set(i*.6+(t()-.5)*.06,s,(t()-.5)*.06),f.rotation.y=(t()-.5)*.25,n.add(f),s+=c}}if(t()<.5){let i=new Gt;of(i,.4,.3,.3,t,!1),i.position.set(-.55,.2,.3),i.rotation.set(Math.PI/2,t()*2,0),n.add(i)}},pallet(n){let t=nt(Uo("#b48a5a","#7a5a35","pallet"),.9);for(let e=0;e<7;e++)v(n,j(1.2,.02,.1),t,0,.12,-.45+e*.15);for(let e of[-.45,0,.45])v(n,j(1.2,.1,.1),t,0,.02,e,0,0,0);for(let e=0;e<3;e++)v(n,j(.1,.02,1),t,-.55+e*.55,0,0)},trash_bag(n,t){let e=Math.floor(t()*4),i=tn(on,"trashbag"+e,()=>{let o=new ts(.28,14,10),a=o.attributes.position,l=ns(77+e),c=Array.from({length:6},()=>[new N(l()-.5,l()-.5,l()-.5).normalize(),.03+l()*.05]),f=new N;for(let u=0;u<a.count;u++){f.set(a.getX(u),a.getY(u),a.getZ(u));let h=f.clone().normalize(),d=0;for(let[p,x]of c)d+=Math.max(0,h.dot(p)-.6)*x*3;d+=(l()-.5)*.015,f.addScaledVector(h,d),f.y*=.8,f.y<-.15&&(f.y=-.15+(f.y+.15)*.15),a.setXYZ(u,f.x*(1+e*.05),f.y+.18,f.z)}return o.computeVertexNormals(),o}),s=ee(t,[1118740,1118740,2046495]),r=ut(s,.3,.1);v(n,i,r),v(n,Z(.02,.06,.08,8),r,0,.38+e*0,0),v(n,hn(.03,8,6),r,0,.47,0),v(n,Z(.005,.04,.1,6),r,.04,.47,0,0,0,-1.1,1,1,.3),v(n,Z(.005,.04,.1,6),r,-.04,.47,0,0,0,1.1,1,1,.3)},trash_pile(n,t){let e=2+Math.floor(t()*3);for(let r=0;r<e;r++){let o=new Gt;Fo.trash_bag(o,ns(Math.floor(t()*1e9)));let a=t()*Tt,l=r===0?0:.35+t()*.2;o.position.set(Math.cos(a)*l,0,Math.sin(a)*l),o.rotation.set((t()-.5)*.4,t()*Tt,(t()-.5)*.4),o.scale.setScalar(.8+t()*.4),n.add(o)}let i=n_();for(let r=0;r<7;r++){let o=t()*Tt,a=.4+t()*.6,l=r%3;l===2?v(n,kn(Bo(.12,.16,.02,.06,4,5),"litwrap",[Ou[2]]),i,Math.cos(o)*a,.01,Math.sin(o)*a,-Math.PI/2,0,t()*3):v(n,kn(Z(l?.033:.038,l?.033:.038,l?.122:.11,10),"litcan"+l,[Ou[l],null,null]),[i,it.tin,it.tin],Math.cos(o)*a,l?.033:.038,Math.sin(o)*a,Math.PI/2,0,t()*Tt,1,t()<.5?.6:1,1)}v(n,df(.5,.008,.4,[8,8,2,8,8,8]),uf(),-.6,.004,.4,0,t()*2,.05);let s=Si("paper_scatter",Math.floor(t()*1e3));s.scale.setScalar(.6),n.add(s)},register(n){let t=nt(St("registeratlas",512,256,(h,d,p,x)=>{h.fillStyle="#0c0f12",h.fillRect(0,0,256,192),h.fillStyle="rgba(120,140,160,0.12)";for(let g=0;g<6;g++)h.fillRect(12,14+g*26,140,16);for(let g=0;g<8;g++)h.fillRect(169+g%2*40,14+Math.floor(g/2)*40,34,32);h.fillStyle="rgba(255,255,255,0.05)",h.beginPath(),h.moveTo(0,0),h.lineTo(128,0),h.lineTo(0,134),h.fill(),h.fillStyle="#2a2b2e",h.fillRect(256,0,256,64),h.fillStyle="#111",h.fillRect(264,6,240,2),h.fillRect(364,32,40,6),h.fillStyle="#888",h.beginPath(),h.arc(482,32,6,0,Tt),h.fill(),h.fillStyle="#333",h.fillRect(256,64,256,96);for(let g=0;g<4;g++)for(let m=0;m<12;m++)h.fillStyle=m>8&&g<3?"#5a5a5a":"#cfcfcf",h.fillRect(262+m*20.5,70+g*22,17,18);h.fillStyle="#2a2b2e",h.fillRect(256,160,64,96),h.fillStyle="#dcdcd8",h.fillRect(320,160,64,96),h.fillStyle="#f0ece2",h.fillRect(384,160,64,96),h.fillStyle="#14181c",h.fillRect(448,160,64,96),h.fillStyle="#2a2b2e",h.fillRect(0,192,256,64),re(h,d,p,x,1.5)}),.45,.05),e=(h,d,p,x)=>[h/512,1-(d+x)/256,(h+p)/512,1-d/256],i=e(262,166,52,84),s=e(326,166,52,84),r=e(390,166,52,84),o=e(454,166,52,84),a=e(0,0,256,192),l=e(256,0,256,64),c=e(256,64,256,96),f=[t,t,t,t,t,t];v(n,kn(j(.44,.1,.42),"regbase",[i,i,i,i,l,i]),f,0,0,0),v(n,kn(Z(.025,.04,.2,10),"regpole",[i,i,i]),f,0,.1,-.05);let u=new Gt;v(u,kn(qt(.38,.28,.05,.012),"reghead",[i,i,i,i,a,i]),f),u.position.set(0,.28,-.05),u.rotation.x=-.25,n.add(u),v(n,kn(qt(.3,.03,.12,.008),"regkeys",[c,c,c,c,c,c]),f,0,.1,.13,.15,0,0),v(n,kn(qt(.09,.05,.14,.01),"regreader",[i,i,i,i,i,i]),f,.3,0,.1,.4,-.3,0),v(n,kn(j(.07,.001,.06),"regrscreen",[o,o,o,o,o,o]),f,.3,.052,.095,.4,-.3,0),v(n,kn(qt(.15,.13,.18,.02),"regprinter",[s,s,s,s,s,s]),f,-.3,0,-.02),v(n,kn(j(.08,.001,.12),"regpaper",[r,r,r,r,r,r]),f,-.3,.135,.11,-.5,0,0)},price_strip(n,t){let e=St("pricestrip",1024,48,(i,s,r,o)=>{i.fillStyle="#e8e6e0",i.fillRect(0,0,s,r);let a=6;for(;a<s-60;){let l=70+Math.floor(o()*40),c=o()<.2;i.fillStyle=c?"#f2c21b":"#ffffff",i.fillRect(a,4,l,r-8),kt(i,`$${(o()*9+.5).toFixed(2)}`,a+l*.68,r*.45,18,{color:c?"#c41e1e":"#111",maxW:l*.6}),qe(i,a+4,8,l*.35,3,6,o,"#444"),i.fillStyle="#000";for(let f=0;f<14;f++)o()<.6&&i.fillRect(a+4+f*2,r-14,1,7);a+=l+10+Math.floor(o()*60)}re(i,s,r,o,.6)});v(n,j(.012,.04,1),[nt(e,.5),ut(13619151,.6),ut(13619151,.6),ut(13619151,.6),ut(13619151,.6),ut(13619151,.6)]),t()<.6&&v(n,j(.002,.035,.07),it.paper,.012,-.02,(t()-.5)*.8,0,0,.6)},chair(n,t){let e=nt(Uo(ee(t,["#b98c5a","#7a5032","#d0b08a"]),"#5a3a20","chair"),.6);v(n,qt(.44,.04,.42,.01),e,0,.43,0);for(let[i,s]of[[-.19,-.18],[.19,-.18],[-.19,.18],[.19,.18]])v(n,Z(.018,.015,.43,8),e,i,0,s);for(let i of[-.19,.19])v(n,Z(.018,.018,.48,8),e,i,.45,-.19,-.08,0,0);v(n,qt(.44,.08,.025,.01),e,0,.87,-.23,-.08,0,0);for(let i=0;i<3;i++)v(n,Z(.01,.01,.38,6),e,-.1+i*.1,.47,-.205,-.08,0,0);for(let i of[-.18,.18])v(n,Z(.01,.01,.38,6),e,.19,.15,i,0,0,Math.PI/2);t()<.3&&(n.rotation.z=Math.PI/2,n.position.y=.22)},office_chair(n,t){let e=nt(bi(ee(t,["#2a2a2c","#22304a","#3a2a2a"]),"office"),.95),i=it.blackPl;for(let s=0;s<5;s++){let r=s*Tt/5,o=v(n,j(.3,.03,.045),i,Math.cos(r)*.15,.06,Math.sin(r)*.15,0,-r,0);o.rotation.z=0,v(n,hn(.028,6,4),i,Math.cos(r)*.3,.028,Math.sin(r)*.3)}v(n,Z(.03,.03,.32,10),it.chrome,0,.08,0),v(n,Z(.05,.05,.08,10),i,0,.06,0),v(n,qt(.5,.08,.48,.035),e,0,.42,0),v(n,j(.05,.3,.03),i,0,.45,-.25,-.1,0,0),v(n,qt(.46,.55,.07,.035),e,0,.56,-.29,-.12,0,0);for(let s of[-1,1])v(n,j(.03,.18,.03),i,s*.24,.45,0,0,0,0),v(n,qt(.06,.03,.24,.01),i,s*.24,.63,0);n.rotation.y=t()*Tt},ceiling_tile(n,t){let e=nt(St("ceiltile",256,256,(a,l,c,f)=>{_e(a,l,c,f,"#e6e3da",.06,2500,2),a.fillStyle="rgba(90,85,75,0.35)";for(let h=0;h<900;h++)a.beginPath(),a.ellipse(f()*l,f()*c,1+f()*2.5,.6+f(),f()*3,0,Tt),a.fill();let u=a.createRadialGradient(l*.6,c*.4,10,l*.6,c*.4,120);u.addColorStop(0,"rgba(140,100,40,0.35)"),u.addColorStop(.7,"rgba(140,100,40,0.15)"),u.addColorStop(1,"rgba(140,100,40,0)"),a.fillStyle=u,a.fillRect(0,0,l,c)}),.95),i=ut(14210248,.95),s=ut(12103840,.95),r=[[.6,.6],[.35,.28],[.22,.18],[.12,.1]],o=0;for(let[a,l]of r.slice(0,2+Math.floor(t()*3))){let c=v(n,j(a*(.8+t()*.2),.016,l*(.8+t()*.2)),[i,i,e,s,i,i],(t()-.5)*.7*(o?1:0),.008+(o===1?.03:0),(t()-.5)*.7*(o?1:0),o===1?.15:(t()-.5)*.05,t()*Tt,0);o===1&&(c.position.y=.04),o++}for(let a=0;a<8;a++)v(n,j(.02+t()*.03,.012,.02+t()*.03),i,(t()-.5)*.9,.006,(t()-.5)*.9,0,t()*3,0)},paper_scatter(n,t){let e=St("papers",1024,512,(o,a,l,c)=>{for(let u=0;u<8;u++){let h=u%4*256,d=Math.floor(u/4)*256;o.save(),o.translate(h,d);let p=u%8;if(o.fillStyle=p===2?"#f2e6a0":p===5?"#e9e4d6":"#f4f2ec",o.fillRect(0,0,256,256),p===0)kt(o,"NOTICE TO RESIDENTS",128,30,22,{color:"#111",maxW:220}),qe(o,20,60,216,14,12,c,"#333");else if(p===1)o.fillStyle="#c41e1e",o.fillRect(0,0,256,50),kt(o,"BOIL WATER",128,26,30,{color:"#fff",maxW:230}),kt(o,"UNTIL FURTHER NOTICE",128,74,18,{color:"#111",maxW:230}),qe(o,20,100,216,10,13,c,"#333");else if(p===2)kt(o,"SHELTER",128,50,40,{color:"#1d4f9a",maxW:230}),kt(o,"MEMORIAL COLISEUM",128,92,18,{color:"#111",maxW:230}),kt(o,"FOOD  WATER  MEDICAL",128,124,16,{color:"#111",maxW:230}),qe(o,30,150,196,6,13,c,"#333");else if(p===3)o.fillStyle="#ddd",o.fillRect(0,0,256,256),o.fillStyle="#fbfbf8",o.fillRect(70,0,116,256),qe(o,78,14,100,18,12,c,"#555"),kt(o,"TOTAL  $48.17",128,236,13,{color:"#111"});else if(p===4){kt(o,"THE DAILY",128,26,30,{color:"#111",font:'Georgia, "DejaVu Serif", serif',maxW:230}),o.fillStyle="#111",o.fillRect(10,46,236,2),kt(o,"OUTBREAK SPREADS",128,70,24,{color:"#111",maxW:236,font:Mi});for(let x=0;x<3;x++)qe(o,12+x*80,92,70,14,11,c,"#444")}else if(p===5)kt(o,"LOST DOG",128,40,40,{color:"#111",maxW:230}),bl(o,"paw",128,120,45,c),kt(o,'ANSWERS TO "BISCUIT"',128,190,16,{color:"#111",maxW:230}),qe(o,40,210,176,2,12,c,"#333");else if(p===6){o.strokeStyle="rgba(80,120,200,0.5)";for(let x=30;x<256;x+=16)o.beginPath(),o.moveTo(0,x),o.lineTo(256,x),o.stroke();o.strokeStyle="rgba(200,60,60,0.5)",o.beginPath(),o.moveTo(30,0),o.lineTo(30,256),o.stroke(),kt(o,"went to the river camp",40,42,15,{color:"#223",align:"left",italic:!0,weight:"normal"}),kt(o,"water + food there?",40,58,15,{color:"#223",align:"left",italic:!0,weight:"normal"}),kt(o,"- M.",40,74,15,{color:"#223",align:"left",italic:!0,weight:"normal"})}else o.fillStyle="#e8e2d2",o.fillRect(0,0,256,256),qe(o,20,20,90,3,12,c,"#444"),qe(o,90,110,120,3,12,c,"#222"),o.fillStyle="#c41e1e",o.fillRect(200,14,40,40),kt(o,"PAST DUE",128,200,22,{color:"#c41e1e"});re(o,256,256,c,1.4),o.restore()}}),i=new ci(1),s=tn(on,"paperplane",()=>{let o=new Fe(.216,.28,3,1).rotateX(-Math.PI/2),a=o.attributes.position;for(let l=0;l<a.count;l++){let c=a.getX(l);a.setY(l,Math.pow(Math.abs(c)/.108,2)*.012)}return o.computeVertexNormals(),o}),r=10+Math.floor(t()*10);for(let o=0;o<r;o++){let a=Math.floor(t()*8),l=[a%4/4,1-(Math.floor(a/4)+1)/2,(a%4+1)/4,1-Math.floor(a/4)/2],c=t()*Tt,f=Math.sqrt(t())*1,u=new oe().compose(new N(Math.cos(c)*f,.002+o*8e-4,Math.sin(c)*f),new xn().setFromEuler(new yn((t()-.5)*.06,t()*Tt,(t()-.5)*.06)),new N(a===3?.5:1,1,1));i.add(s,u,[l],[0])}for(let o of i.meshes([ae("papermat",{map:e,roughness:.9,side:Le,...af})]))n.add(o)},glass_shards(n,t){let e=[],i=60+Math.floor(t()*40);for(let o=0;o<i;o++){let a=t()*Tt,l=Math.pow(t(),.7)*.8,c=Math.cos(a)*l,f=Math.sin(a)*l,u=.015+t()*.06*(1-l*.6),h=.002+t()*.004,d=[],p=t()<.5?3:4;for(let x=0;x<p;x++){let g=x/p*Tt+t()*.8;d.push([c+Math.cos(g)*u*(.4+t()),h+(t()<.15?t()*.015:0),f+Math.sin(g)*u*(.4+t())])}e.push(...d[0],...d[2],...d[1]),p===4&&e.push(...d[0],...d[3],...d[2])}let s=new Ue;s.setAttribute("position",new he(e,3)),s.computeVertexNormals();let r=new Xt(s,ae("shardglass",{color:15268090,roughness:.04,metalness:.5,transparent:!0,opacity:.75,side:Le,depthWrite:!1,emissive:1712676,...af}));n.add(r)},traffic_cone(n){let t=nt(St("cone",64,256,(e,i,s,r)=>{e.fillStyle="#f0641c",e.fillRect(0,0,i,s),e.fillStyle="#f2f2f2",e.fillRect(0,s*.22,i,s*.13),e.fillRect(0,s*.48,i,s*.09),re(e,i,s,r,1.5)}),.55);v(n,Z(.025,.13,.66,16,!0),t,0,.03,0),v(n,Fn(.025,10),ut(15754268,.6),0,.69,0),v(n,qt(.36,.03,.36,.02),ut(13651994,.8))},mop_bucket(n,t){let e=ut(15909403,.45);v(n,qt(.46,.32,.34,.05),e,0,.06,0),v(n,j(.38,.002,.26),ae("dirtywater",{color:4867638,roughness:.1,metalness:.2}),0,.33,0),v(n,qt(.18,.2,.28,.02),it.darkMetal,.12,.34,0),v(n,Z(.012,.012,.5,8),it.darkMetal,.2,.5,-.1,.6,0,0);for(let[s,r]of[[-.19,-.13],[.19,-.13],[-.19,.13],[.19,.13]])v(n,hn(.035,8,6),it.blackPl,s,.035,r);v(n,Z(.012,.012,1.35,8),it.darkMetal,.06,.25,.04,0,0,-.18);let i=nt(St("mopstrands",64,64,(s,r,o,a)=>{s.fillStyle="#b8b0a0",s.fillRect(0,0,r,o);for(let l=0;l<r;l+=3)s.fillStyle=`rgba(0,0,0,${.1+a()*.25})`,s.fillRect(l,0,1,o)}),.95);v(n,Z(.08,.11,.22,10),i,.03,.22,.04)},wet_floor_sign(n){let t=St("wetfloor",256,512,(s,r,o,a)=>{s.fillStyle="#f2c21b",s.fillRect(0,0,r,o),s.fillStyle="#111",s.fillRect(0,o*.08,r,o*.12),kt(s,"CAUTION",r/2,o*.14,46,{color:"#f2c21b",maxW:r*.9}),s.fillStyle="#111",s.beginPath(),s.moveTo(r/2,o*.27),s.lineTo(r*.88,o*.62),s.lineTo(r*.12,o*.62),s.closePath(),s.fill(),s.fillStyle="#f2c21b",s.beginPath(),s.moveTo(r/2,o*.31),s.lineTo(r*.8,o*.6),s.lineTo(r*.2,o*.6),s.closePath(),s.fill(),s.strokeStyle="#111",s.lineWidth=7,s.lineCap="round",s.beginPath(),s.arc(r*.56,o*.4,9,0,Tt),s.fillStyle="#111",s.fill(),s.beginPath(),s.moveTo(r*.54,o*.43),s.lineTo(r*.46,o*.52),s.moveTo(r*.46,o*.52),s.lineTo(r*.38,o*.56),s.moveTo(r*.46,o*.52),s.lineTo(r*.58,o*.57),s.moveTo(r*.52,o*.46),s.lineTo(r*.62,o*.47),s.moveTo(r*.5,o*.47),s.lineTo(r*.42,o*.44),s.stroke(),kt(s,"WET FLOOR",r/2,o*.72,40,{color:"#111",maxW:r*.9}),kt(s,"PISO MOJADO",r/2,o*.8,26,{color:"#111",maxW:r*.9}),re(s,r,o,a,1.2)}),e=nt(t,.45),i=ut(15909403,.45);for(let s of[-1,1]){let r=new Gt;v(r,j(.3,.6,.012),[i,i,i,i,s<0?e:i,s>0?e:i],0,-.6,0),r.position.set(0,.62,0),r.rotation.x=s*.2,n.add(r)}v(n,Ie(.05,.012,5,12,Math.PI),i,0,.62,0)},fire_extinguisher(n){let t=ut(12850716,.35,.1);v(n,Ge("extbody",[[0,0],[.07,0],[.076,.012],[.076,.38],[.065,.43],[.03,.455],[.02,.46]],18),t),v(n,j(.09,.14,.002),nt(vi({t:"FIRE",t2:"EXTINGUISHER",s:"ABC DRY CHEMICAL",n:"INSPECT MONTHLY",b:"#f4f1ea",f:"#c4161c",a:"#c4161c",p:"flame"},192,300),.5),0,.16,.074),v(n,Z(.02,.022,.04,10),it.brass,0,.455,0),v(n,j(.12,.012,.03),it.chrome,.03,.5,0,0,0,.1),v(n,j(.1,.012,.028),it.chrome,.02,.475,0,0,0,.05),v(n,Z(.017,.017,.01,12),it.chrome,-.04,.47,.012,Math.PI/2),v(n,Fn(.014,12),nt(St("gauge",64,64,(e,i,s)=>{e.fillStyle="#fff",e.beginPath(),e.arc(32,32,30,0,Tt),e.fill(),e.fillStyle="#2f9a3a",e.beginPath(),e.moveTo(32,32),e.arc(32,32,26,-2.2,-.9),e.fill(),e.strokeStyle="#111",e.lineWidth=3,e.beginPath(),e.moveTo(32,32),e.lineTo(46,16),e.stroke()}),.3),-.04,.47,.018,Math.PI/2),vn(n,"exthose",[[.04,.46,0],[.09,.44,.02],[.1,.3,.05],[.085,.18,.06],[.07,.12,.07]],.009,it.rubber,!1,20),v(n,Z(.008,.014,.05,8),it.blackPl,.07,.07,.07),v(n,Ie(.012,.002,4,10),ut(15909403,.4),0,.49,.02,0,Math.PI/2,0)},iv_stand(n,t){for(let e=0;e<5;e++){let i=e*Tt/5;v(n,j(.28,.025,.03),it.chrome,Math.cos(i)*.14,.05,Math.sin(i)*.14,0,-i,0),v(n,hn(.022,8,6),it.blackPl,Math.cos(i)*.27,.022,Math.sin(i)*.27)}v(n,Z(.012,.012,1.85,8),it.chrome,0,.05,0);for(let e=0;e<4;e++)v(n,Ie(.04,.004,4,10,Math.PI),it.chrome,Math.cos(e*Math.PI/2)*.04,1.86,Math.sin(e*Math.PI/2)*.04,0,-e*Math.PI/2,Math.PI);if(t()<.75){let e=new Gt;zo.saline(e,t),e.rotation.x=Math.PI/2,e.position.set(.08,1.85,-.02),n.add(e),vn(n,"ivline",[[.08,1.58,0],[.1,1.2,.02],[.14,.8,.05],[.12,.5,.1],[.05,.35,.12]],.002,ae("ivtube",{color:15660278,roughness:.2,transparent:!0,opacity:.6}),!1,24)}},wheelchair(n){let t=it.chrome,e=nt(bi("#1d1e22","wc"),.9);for(let i of[-1,1])t_(n,i*.3,.3,-.05,.3,.018,t,12),v(n,Ie(.27,.005,3,20),it.chrome,i*.33,.3,-.05,0,Math.PI/2,0),ml(n,i*.22,.32,.06),vn(n,"wcside",[[0,.16,.3],[0,.5,.3],[0,.5,-.12],[0,.95,-.2],[0,.95,-.28]],.011,t,!1,20).position.x=i*.22,v(n,Z(.016,.016,.1,8),it.rubber,i*.22,.95,-.3,Math.PI/2,0,0),vn(n,"wcfoot",[[0,.5,.25],[0,.18,.42],[0,.12,.44]],.01,t,!1,10).position.x=i*.2,v(n,j(.12,.01,.12),it.blackPl,i*.13,.12,.46),v(n,qt(.05,.03,.28,.01),it.blackPl,i*.23,.68,.06),vn(n,"wcarm",[[0,.5,.18],[0,.66,.18]],.01,t,!1,2).position.x=i*.23;v(n,j(.42,.012,.42),e,0,.495,.08),v(n,j(.42,.4,.012),e,0,.55,-.15,-.15,0,0),v(n,Z(.01,.01,.44,8),t,-.22,.25,.08,0,0,-Math.PI/2)},gurney(n,t){let e=it.chrome;vn(n,"gurneyframe2",pl([[-.32,.6,-.95],[.32,.6,-.95],[.32,.6,.95],[-.32,.6,.95]],.06),.016,e,!0,60);for(let[s,r]of[[-.25,-.75],[.25,-.75],[-.25,.75],[.25,.75]])v(n,Z(.02,.02,.52,8),e,s,.1,r),ml(n,s,r,.055);v(n,j(.56,.03,1.6),e,0,.12,0);let i=nt(St("sheet",128,256,(s,r,o,a)=>{_e(s,r,o,a,"#e8ecee",.06,1500,2),s.strokeStyle="rgba(0,0,0,0.08)";for(let l=0;l<12;l++)s.beginPath(),s.moveTo(a()*r,0),s.bezierCurveTo(a()*r,o*.3,a()*r,o*.6,a()*r,o),s.stroke();re(s,r,o,a,1)}),.95);v(n,qt(.62,.1,1.86,.04),i,0,.63,0),v(n,qt(.42,.08,.26,.04),ut(16054006,.95),0,.72,-.75,.1,0,0),v(n,qt(.64,.05,.5,.025),nt(bi("#3a6a9a","blanket"),.95),0,.72,.62,0,.08,.02);for(let s of[-1,1])vn(n,"gurneyrail"+s,[[s*.33,.62,-.5],[s*.34,.84,-.45],[s*.34,.84,.45],[s*.33,.62,.5]],.01,e,!1,20);vn(n,"gurneyhandle",[[-.25,.62,.95],[-.25,.9,1],[.25,.9,1],[.25,.62,.95]],.013,e,!1,20),t()<.5&&(n.rotation.y=(t()-.5)*.8)},medical_cart(n,t){let e=ee(t,["#c4221c","#2a6fd6","#d8d8d4"]),i=ut(new Jt(e).getHex(),.4,.1),s=nt(St("cartdrawers"+e,256,320,(o,a,l,c)=>{o.fillStyle=e,o.fillRect(0,0,a,l);let f=[.15,.15,.2,.25,.25],u=0;for(let h of f){let d=h*l;o.fillStyle="rgba(0,0,0,0.35)",o.fillRect(0,u,a,3),o.fillStyle="rgba(255,255,255,0.15)",o.fillRect(0,u+3,a,2),o.fillStyle="#ddd",o.fillRect(a*.35,u+d*.35,a*.3,8),o.fillStyle="#f4f1ea",o.fillRect(a*.08,u+d*.3,44,18),qe(o,a*.09,u+d*.3+5,40,1,8,c,"#333"),u+=d}re(o,a,l,c,1)}),.4,.1);v(n,qt(.7,.85,.5,.02),[i,i,i,i,s,i],0,.1,0),v(n,j(.76,.03,.56),it.darkMetal,0,.95,0);for(let o of[-1,1])v(n,j(.76,.05,.01),it.darkMetal,0,.98,o*.275);for(let[o,a]of[[-.28,-.18],[.28,-.18],[-.28,.18],[.28,.18]])ml(n,o,a,.045);vn(n,"mcarthandle",[[.37,.8,-.18],[.42,.82,-.15],[.42,.82,.15],[.37,.8,.18]],.012,it.chrome,!1,12);let r=new Gt;ei(r,.24,.12,.13,{t:"EXAM GLOVES",s:"NITRILE  POWDER FREE",n:"100 GLOVES  SIZE L",b:"#2a6fd6",f:"#fff",a:"#fff",tf:"#2a6fd6",p:"cross"},{tw:256,th:128}),r.position.set(-.15,.98,0),r.rotation.y=.2,n.add(r),v(n,j(.18,.22,.12),ut(12853788,.45),.2,.98,-.05),v(n,j(.14,.03,.1),it.whitePl,.2,1.2,-.05)},locker_row(n,t){let e=ee(t,["#4a5a6a","#6a7a5a","#8a8a86"]),i=nt(St("lockerdoor"+e,128,512,(h,d,p,x)=>{_e(h,d,p,x,e,.05,1500,2),h.fillStyle="rgba(0,0,0,0.5)";for(let g of[.08,.82])for(let m=0;m<6;m++)h.fillRect(d*.25,p*g+m*10,d*.5,4);h.fillStyle="rgba(255,255,255,0.12)",h.fillRect(4,4,d-8,2),h.fillStyle="#d8d8d4",h.fillRect(d*.35,p*.3,d*.3,20),re(h,d,p,x,1.5)}),.45,.35),s=nt(ff(e,"locker"),.5,.3),r=ut(1974564,.8),o=4,a=.3,l=1.8,c=.45;v(n,j(o*a+.02,l,c),[s,s,s,s,r,s],0,.08,0),v(n,j(o*a+.02,.08,c-.04),r,0,0,-.02);let f=nt(St("lockernums",256,32,(h,d,p)=>{h.fillStyle="#d8d8d4",h.fillRect(0,0,d,p);for(let x=0;x<4;x++)kt(h,String(101+x),32+x*64,p/2,20,{color:"#111"})}),.5),u=Math.floor(t()*(o+2));for(let h=0;h<o;h++){let d=new Gt;v(d,j(a-.012,l-.03,.015),[s,s,s,s,i,s],(a-.012)/2,0,0),v(d,j(.02,.1,.02),it.chrome,a*.82,l*.48,.015);let p=[h/4+.01,.05,(h+1)/4-.01,.95],x=[.005,.1,.01,.2];v(d,kn(j(.05,.025,.002),"lockernum"+h,[x,x,x,x,p,x]),[f,f,f,f,f,f],a*.48,l*.86,.009),d.position.set(-o*a/2+h*a+.006,.095,c/2),h===u&&(d.rotation.y=-(.7+t()*.9)),n.add(d)}for(let h=1;h<o;h++)v(n,j(.012,l,c-.02),s,-o*a/2+h*a,.08,0);for(let h=0;h<o;h++)v(n,j(a-.02,.012,c-.04),s,-o*a/2+h*a+a/2,1.55,0);u<o&&v(n,qt(.2,.3,.12,.03),nt(bi("#2f3f2a","lk"),.85),-o*a/2+u*a+a/2,.1,0)},helmet_rack(n,t){let e=ut(5922402,.5,.4),i=1.8,s=1.9;for(let a of[-i/2,-i/6,i/6,i/2])v(n,j(.04,s,.04),e,a,0,-.25);v(n,j(i+.04,.03,.45),e,0,1.6,-.05),v(n,j(i+.04,.03,.45),e,0,.35,-.05);let r=nt(St("turnout",128,256,(a,l,c,f)=>{_e(a,l,c,f,"#a8946a",.1,2e3,2);for(let u of[.55,.9])a.fillStyle="#d8e040",a.fillRect(0,c*u,l,c*.06),a.fillStyle="#d8d8d8",a.fillRect(0,c*u+c*.018,l,c*.024);re(a,l,c,f,2)}),.9),o=[it.blackPl,ut(15909403,.35),ut(12853788,.45)];for(let a=0;a<3;a++){let l=-i/3+a*i/3;if(v(n,qt(.5,.85,.2,.08),r,l,.6,-.12),v(n,Z(.07,.075,.75,8),r,l-.29,.68,-.12,0,0,.08),v(n,Z(.07,.075,.75,8),r,l+.29,.68,-.12,0,0,-.08),v(n,Ie(.1,.03,4,10),r,l,1.42,-.12,Math.PI/2,0,0,1,.8,1),t()<.85){let d=ee(t,o),p=new Gt;v(p,Ge("helmdome",[[0,.2],[.07,.19],[.12,.15],[.14,.08],[.15,0]],14),d,0,0,0),v(p,Z(.19,.2,.012,16),d,0,-.005,.03,0,0,0,1,1,1.25),v(p,j(.1,.06,.012),it.brass,0,.1,.15,-.5,0,0),p.position.set(l+(t()-.5)*.1,1.625,-.05),p.rotation.y=(t()-.5)*.6,n.add(p)}let c=it.blackPl;for(let d of[-1,1])v(n,j(.11,.06,.28),c,l+d*.07,0,.07),v(n,Z(.06,.065,.3,8),c,l+d*.07,.04,0),v(n,Ie(.07,.035,4,8),r,l+d*.07,.36,0,Math.PI/2),v(n,Z(.066,.066,.03,8,!0),ut(14213184,.5),l+d*.07,.25,0);let f=nt(St("nametags",384,64,(d,p,x)=>{d.fillStyle="#1d1e20",d.fillRect(0,0,p,x),["ENGINE 1","TRUCK 3","RESCUE 7"].forEach((g,m)=>kt(d,g,64+m*128,x/2,22,{color:"#f2c21b",maxW:115}))}),.5),u=[a/3+.01,.05,(a+1)/3-.01,.95],h=[.002,.1,.004,.2];v(n,kn(j(.1,.06,.002),"nametag"+a,[h,h,h,h,u,h]),[f,f,f,f,f,f],l,1.52,.18)}},hose_reel(n){let t=ut(12853788,.45,.15),e=nt(St("hose",128,32,(s,r,o)=>{s.fillStyle="#b8201e",s.fillRect(0,0,r,o),s.fillStyle="rgba(0,0,0,0.25)";for(let a=0;a<r;a+=4)s.fillRect(a,0,1,o)},{repeat:[6,1]}),.7);for(let s of[-1,1])v(n,Z(.38,.38,.02,20),t,s*.25-.01,.55,0,0,0,Math.PI/2),vn(n,"reelleg"+s,[[0,0,-.35],[0,.55,0],[0,0,.35]],.02,t,!1,4).position.x=s*.29;v(n,Z(.04,.04,.6,10),it.steel,-.3,.55,0,0,0,-Math.PI/2);let i=nt(St("hosecoil",256,64,(s,r,o)=>{s.fillStyle="#9a1a18",s.fillRect(0,0,r,o);for(let a=0;a<r;a+=8){let l=s.createLinearGradient(a,0,a+8,0);l.addColorStop(0,"#5a0e0c"),l.addColorStop(.5,"#c8282a"),l.addColorStop(1,"#5a0e0c"),s.fillStyle=l,s.fillRect(a,0,8,o)}},{repeat:[1,6]}),.7);v(n,Z(.31,.31,.47,20),[i,ut(5901836,.8),ut(5901836,.8)],-.235,.55,0,0,0,-Math.PI/2);for(let s=0;s<7;s++)v(n,Ie(.31,.019,4,18),e,-.21+s*.07,.55,0,0,Math.PI/2,0);vn(n,"hosetail",[[0,.2,.3],[.05,.05,.45],[.2,.025,.7],[.4,.025,.8]],.022,e,!1,20),v(n,Z(.025,.04,.16,10),it.brass,.42,.04,.82,0,0,Math.PI/2+.3),vn(n,"reelcrank",[[.29,.55,0],[.36,.55,0],[.36,.4,0],[.42,.4,0]],.012,it.steel,!1,6)},kitchen_counter_items(n,t){let e=nt(zr("#c9ccd0","kettle"),.25,.55);v(n,Ge("kettle",[[0,0],[.09,0],[.1,.03],[.095,.12],[.06,.17],[.025,.18],[0,.185]],18),e,-.4,0,0),v(n,hn(.015,8,6),it.blackPl,-.4,.19,0),vn(n,"kettlespout",[[-.32,.05,0],[-.27,.12,0],[-.25,.16,0]],.012,e,!1,8),v(n,Ie(.06,.012,5,12,Math.PI),it.blackPl,-.4,.17,0,0,0,0);let i=new ci(1),s=(c,f,u,h=0)=>new oe().compose(new N(c,f,u),new xn().setFromEuler(new yn(0,h,0)),new N(1,1,1)),r=Ge("dplate2",[[0,0],[.08,0],[.12,.018],[.116,.02],[.078,.004],[0,.004]],12);for(let c=0;c<5;c++)i.add(r,s(-.1,c*.0145,.05,t()*Tt),[yl(c===4?6:0)],[0]);let o=Ge("dmug2",[[0,0],[.04,0],[.042,.095],[.037,.095],[.035,.008],[0,.008]],10),a=Ie(.025,.007,4,8,Math.PI*1.2);for(let c=0;c<2;c++){let f=yl([2,3,4][Math.floor(t()*3)]),u=s(.08+c*.1,0,-.08);i.add(o,u,[f],[0]),i.add(a,u.clone().multiply(s(.045,.05,0)).multiply(new oe().makeRotationZ(-Math.PI*.6)),[f],[0])}i.add(Ge("dbowl2",[[0,0],[.04,0],[.075,.058],[.07,.058],[.036,.006],[0,.006]],12),s(.2,0,.22),[yl(1)],[0]);for(let c of i.meshes([sd()]))n.add(c);let l=new Gt;ei(l,.19,.29,.07,{t:"CORN FLAKES",s:"TOASTED",n:"NET WT 18 OZ",b:"#f2f1ec",f:"#1d4f9a",a:"#e8701c",p:"grain",top:"FAMILY SIZE",tf:"#fff"}),l.position.set(.35,0,.05),l.rotation.y=-.3,n.add(l),v(n,qt(.36,.018,.24,.008),ye.wood("#8a6440"),-.05,0,.2)},bookshelf(n,t){let e=nt(Uo("#7a5032","#4a2a18","shelf"),.7),i=.9,s=1.8,r=.3,o=5;v(n,j(.02,s,r),e,-i/2+.01,0,0),v(n,j(.02,s,r),e,i/2-.01,0,0),v(n,j(i,.01,r),ut(3810328,.8),0,0,-r/2+.005,Math.PI/2,0,0);for(let h=0;h<=o;h++)v(n,j(i-.04,.02,r),e,0,.05+h*(s-.07)/o,0);let a=St("spines",1024,256,(h,d,p,x)=>{for(let g=0;g<32;g++){let m=g*32,_=ee(x,["#7a1d1a","#22304a","#2f4a2a","#c9a24a","#e8e2d2","#1d1e20","#5a2a5a","#2a6a7a","#c4521c","#4a3a2a"]);cf(h,0,0,x,0),h.fillStyle=_,h.fillRect(m,0,32,p),h.fillStyle="rgba(255,255,255,0.12)",h.fillRect(m+2,0,2,p),h.fillStyle="rgba(0,0,0,0.2)",h.fillRect(m+28,0,4,p),h.fillStyle=x()<.5?"#e8d8a0":"#f4f1ea",h.fillRect(m+6,p*.1,20,3),h.fillRect(m+6,p*.85,20,3);for(let y=0;y<6;y++)h.fillRect(m+12,p*.25+y*14,8,9)}re(h,d,p,x,1)}),l="#efe6cf",c=new ci(1),f=j(1,1,1);for(let h=0;h<o;h++){let d=.06+h*(s-.07)/o,p=-i/2+.03,x=(s-.07)/o-.03;for(;p<i/2-.06;){if(t()<.12){p+=.05+t()*.15;continue}let g=.02+t()*.035,m=Math.min(x,.17+t()*.12),_=.15+t()*.08,y=Math.floor(t()*32),b=[y/32,0,(y+1)/32,1],I=t()<.08?.25:0,A=new oe().compose(new N(p+g/2+I*m*.5,d,-r/2+_/2+.01),new xn().setFromEuler(new yn(0,0,-I)),new N(g,m,_));c.add(f,A,[b,b,[.999,.999,1,1],b,b,b],[0]),p+=g+.002+I*m}}c.meshes([ae("bookmat",{map:a,roughness:.75})]).forEach(h=>n.add(h))},tv(n,t){let e=ut(1118740,.4),i=nt(St("tvscreen"+(t()<.3?"c":""),256,144,(s,r,o,a)=>{let l=s.createLinearGradient(0,0,r,o);l.addColorStop(0,"#1a1d22"),l.addColorStop(.5,"#0a0c0e"),l.addColorStop(1,"#14171a"),s.fillStyle=l,s.fillRect(0,0,r,o),re(s,r,o,a,1.5)}),.12,.2);v(n,j(1.23,.71,.04),[e,e,e,e,i,e],0,.1,0),v(n,j(.06,.1,.03),e,0,0,-.01),v(n,qt(.4,.015,.2,.006),e,0,0,0)},lamp(n,t){let e=ut(ee(t,[14207144,2771562,9058858]),.3);v(n,Ge("lampbase",[[0,0],[.08,0],[.085,.02],[.1,.12],[.09,.2],[.03,.26],[.015,.28],[0,.28]],16),e),v(n,Z(.006,.006,.18,6),it.brass,0,.28,0);let i=ae("lampshade",{map:St("shadefab",128,64,(s,r,o,a)=>{_e(s,r,o,a,"#e8dcc0",.08,800,1),re(s,r,o,a,1)}),roughness:.95,side:Le});v(n,Z(.1,.17,.2,18,!0),i,0,.37,0),v(n,hn(.03,8,6),ae("bulb",{color:16052448,roughness:.2}),0,.45,0)},rug(n,t){let e=ee(t,[["#7a1d1a","#22304a","#c9a24a"],["#2a3a5a","#c8b48a","#7a2a1a"],["#4a5a3a","#e8dcc0","#7a4a2a"]]),i=St("rug"+e.join(),512,360,(r,o,a,l)=>{r.fillStyle=e[0],r.fillRect(0,0,o,a);for(let c=0;c<3;c++)r.strokeStyle=c%2?e[2]:e[1],r.lineWidth=10,r.strokeRect(24+c*16,18+c*16,o-48-c*32,a-36-c*32);r.fillStyle=e[1],r.beginPath(),r.moveTo(o/2,a*.22),r.lineTo(o*.72,a/2),r.lineTo(o/2,a*.78),r.lineTo(o*.28,a/2),r.closePath(),r.fill(),r.fillStyle=e[2],r.beginPath(),r.moveTo(o/2,a*.32),r.lineTo(o*.62,a/2),r.lineTo(o/2,a*.68),r.lineTo(o*.38,a/2),r.closePath(),r.fill();for(let c=0;c<40;c++)r.fillStyle=l()<.5?e[1]:e[2],r.fillRect(90+l()*(o-180),80+l()*(a-160),6,6);r.fillStyle="#e8dcc0";for(let c=0;c<o;c+=4)r.fillRect(c,0,2,10),r.fillRect(c,a-10,2,10);cf(r,o,a,l,.15),re(r,o,a,l,2)}),s=tn(on,"rug",()=>{let r=new Fe(2,1.4,8,6).rotateX(-Math.PI/2),o=r.attributes.position;for(let a=0;a<o.count;a++){let l=o.getX(a),c=o.getZ(a),f=Math.hypot(l-1,c-.7);o.setY(a,.004+Math.max(0,.45-f)*.18)}return r.computeVertexNormals(),r});v(n,s,ae("rugmat"+e.join(),{map:i,roughness:1,side:Le,...af}))},potted_plant_dead(n,t){let e=nt(St("terracotta",128,64,(o,a,l,c)=>{_e(o,a,l,c,"#b5653a",.12,1500,2),o.fillStyle="rgba(255,255,255,0.15)";for(let f=0;f<6;f++)o.fillRect(0,l*.8+c()*l*.2,a,2);re(o,a,l,c,1)}),.85);v(n,Ge("pot",[[0,0],[.11,0],[.15,.24],[.17,.25],[.17,.3],[.155,.3],[.15,.26]],16),e),v(n,Fn(.15,16),nt(St("soil",64,64,(o,a,l,c)=>_e(o,a,l,c,"#3a2a1e",.3,800,2)),1),0,.27,0);let i=ut(5917234,.9),s=ae("deadleaf",{color:8018482,roughness:.95,side:Le}),r=tn(on,"leafdisc",()=>new bo(.035,5).scale(1,.45,1));for(let o=0;o<6;o++){let a=t()*Tt,l=.1+t()*.3,c=.3+t()*.35,f=[[0,.27,0],[Math.cos(a)*l*.2,.27+c*.5,Math.sin(a)*l*.2],[Math.cos(a)*l*.6,.27+c*.85,Math.sin(a)*l*.6],[Math.cos(a)*l*(.9+t()*.4),.27+c*(.7+t()*.2),Math.sin(a)*l]];v(n,new Eo(new Pr(f.map(u=>new N(...u))),6,.005,4),i);for(let u=0;u<3;u++){let h=.4+u*.2;v(n,r,s,f[2][0]*h,.27+c*h*.9,f[2][2]*h,t()*3,t()*3,t()*3)}}for(let o=0;o<6;o++)v(n,r,s,(t()-.5)*.7,.004,(t()-.5)*.7,-Math.PI/2,0,t()*3)},kids_toy(n,t){let e=ee(t,["#8a5a32","#c8a070","#6a4a3a"]),i=nt(St("bearfur"+e,128,128,(o,a,l,c)=>{_e(o,a,l,c,e,.25,5e3,2),re(o,a,l,c,1.5)}),1),s=nt(St("bearlight"+e,64,64,(o,a,l,c)=>_e(o,a,l,c,Yn(e,.4),.2,800,2)),1),r=ut(1118481,.3);v(n,hn(.09,10,8),i,0,.1,0,0,0,0,1,1.15,.9),v(n,hn(.055,10,8),s,0,.09,.045,0,0,0,1,1.2,.6),v(n,hn(.075,10,8),i,0,.255,.01),v(n,hn(.03,8,6),s,0,.24,.07,0,0,0,1.1,.8,.9),v(n,hn(.011,6,4),r,0,.25,.097);for(let o of[-1,1])v(n,hn(.009,6,4),r,o*.027,.275,.068),v(n,hn(.03,8,6),i,o*.055,.315,0,0,0,0,1,1,.5),v(n,hn(.018,8,6),s,o*.055,.315,.012,0,0,0,1,1,.4),v(n,hn(.03,8,6),i,o*.1,.13,.03,.6,0,o*.5,1,1.9,1),v(n,hn(.035,8,6),i,o*.055,.035,.08,Math.PI/2,0,0,1,1.8,1),v(n,Fn(.026,10),s,o*.055,.035,.143,Math.PI/2,0,0);t()<.6&&v(n,Ie(.04,.01,4,12),ut(12853788,.6),0,.19,.02,Math.PI/2+.2,0,0,1,1,.5),n.rotation.y=(t()-.5)*.6,t()<.3&&(n.rotation.x=-1.2)}};function Uu(n,t,e){let i=e%n,s=Math.floor(e/n);return[i/n,1-(s+1)/t,(i+1)/n,1-s/t]}function Du(n,t,e,i,s){if(i<3){let r=[["#9ab8d0","#e8dcc0"],["#e8a070","#f4d8a0"],["#b8c4cc","#e4e6e4"]],[o,a]=r[i],l=n.createLinearGradient(0,0,0,e*.6);l.addColorStop(0,o),l.addColorStop(1,a),n.fillStyle=l,n.fillRect(0,0,t,e),i===1&&(n.fillStyle="rgba(250,220,150,0.9)",n.beginPath(),n.arc(t*.7,e*.42,e*.08,0,Tt),n.fill());let c=(f,u,h,d)=>{n.fillStyle=h,n.beginPath(),n.moveTo(0,e);for(let p=0;p<=t;p+=8)n.lineTo(p,f-Math.abs(Math.sin(p*d+f))*u-Math.sin(p*d*3.1)*u*.2);n.lineTo(t,e),n.fill()};if(i===0)c(e*.5,e*.22,"#6a7a8a",.012),c(e*.58,e*.1,"#4a5a4a",.02),n.fillStyle="#7a9ab0",n.fillRect(0,e*.66,t,e*.12),c(e*.84,e*.04,"#3a4a2a",.05);else if(i===1){c(e*.62,e*.05,"#8a6a3a",.01);for(let f=0;f<6;f++)n.fillStyle=f%2?"#c8a050":"#a8803a",n.beginPath(),n.moveTo(0,e*(.66+f*.06)),n.lineTo(t,e*(.62+f*.07)),n.lineTo(t,e),n.lineTo(0,e),n.fill();n.fillStyle="#3a2a1a",n.fillRect(t*.2,e*.5,t*.012,e*.14),n.beginPath(),n.arc(t*.206,e*.48,e*.06,0,Tt),n.fill()}else{c(e*.55,e*.15,"#9aa4ac",.015),n.fillStyle="#eef0ee",n.fillRect(0,e*.7,t,e*.3);for(let f=0;f<14;f++){let u=s()*t,h=e*(.62+s()*.25),d=e*(.08+s()*.1);n.fillStyle="#2a3a2e",n.beginPath(),n.moveTo(u,h-d),n.lineTo(u+d*.35,h),n.lineTo(u-d*.35,h),n.fill()}}for(let f=0;f<400;f++)n.fillStyle=`rgba(${s()<.5?"0,0,0":"255,255,255"},0.05)`,n.fillRect(s()*t,s()*e,6+s()*10,2)}else{let o=[["#e8dcc0","#c4421c","#1d4f7a","#e8b030","#2a2a2a"],["#d8d4cc","#5a7a6a","#c8a070","#8a3a2a","#e8e4d8"],["#1e2630","#e8701c","#e8dcc0","#4a7a9a","#c8b040"]][i-3];if(n.fillStyle=o[0],n.fillRect(0,0,t,e),i===3)for(let a=0;a<9;a++)n.fillStyle=o[1+a%4],n.fillRect(s()*t*.8,s()*e*.8,t*(.1+s()*.3),e*(.08+s()*.3));else if(i===4)for(let a=0;a<7;a++)n.fillStyle=o[1+a%4],n.globalAlpha=.85,n.beginPath(),n.arc(s()*t,s()*e,e*(.08+s()*.25),0,Tt),n.fill(),n.globalAlpha=1;else for(let a=0;a<12;a++)n.strokeStyle=o[1+a%4],n.lineWidth=6+s()*18,n.beginPath(),n.moveTo(s()*t,0),n.bezierCurveTo(s()*t,e*.3,s()*t,e*.7,s()*t,e),n.stroke();for(let a=0;a<300;a++)n.fillStyle="rgba(0,0,0,0.05)",n.fillRect(s()*t,s()*e,3,3)}}function sd(){return ae("dishmat",{map:St("dishatlas",256,256,(n,t,e,i)=>{["#f2f0e8","#e8dcc0","#3a5a8a","#8a2a22","#4a6a4a","#d8d4cc","#f2f0e8","#e8e4dc","#c8a070"].forEach((r,o)=>{let a=o%3*85,l=Math.floor(o/3)*85;if(n.fillStyle=r,n.fillRect(a,l,85,85),o===6)for(let c=0;c<14;c++)n.fillStyle=`rgba(${90+i()*60},${50+i()*30},20,0.5)`,n.beginPath(),n.ellipse(a+i()*85,l+i()*50,2+i()*6,1+i()*4,i()*3,0,Tt),n.fill();o===7&&(n.fillStyle="rgba(90,60,30,0.45)",n.fillRect(a,l+50,85,10));for(let c=0;c<40;c++)n.fillStyle="rgba(90,80,60,0.12)",n.fillRect(a+i()*85,l+i()*85,2,2)})}),roughness:.35,side:Le})}function yl(n){let t=n%3*85+6,e=Math.floor(n/3)*85+6;return[t/256,1-(e+73)/256,(t+73)/256,1-e/256]}var i_={wall_frame(n,t){let e=Math.floor(t()*6),i=e<3||t()<.5,s=.4+t()*.4,r=i?s*(.66+t()*.1):s*(1.2+t()*.15),o=.035+t()*.02,a=.025,l=nt(St("frameartatlas",1536,1024,(h,d,p,x)=>{for(let g=0;g<6;g++){h.save(),h.translate(g%3*512,Math.floor(g/3)*512),h.fillStyle="#ece6d4",h.fillRect(0,0,512,512),h.save(),h.beginPath(),h.rect(36,36,440,440),h.clip(),h.translate(36,36),Du(h,440,440,g,x),h.restore(),h.strokeStyle="rgba(0,0,0,0.25)",h.lineWidth=2,h.strokeRect(36,36,440,440),h.fillStyle="rgba(210,200,180,0.12)",h.fillRect(0,0,512,512);let m=h.createRadialGradient(512,0,0,512,0,300);m.addColorStop(0,"rgba(255,250,230,0.25)"),m.addColorStop(1,"rgba(255,250,230,0)"),h.fillStyle=m,h.fillRect(0,0,512,512),re(h,512,512,x,1.2),h.restore()}}),.35),c=[e%3/3,1-(Math.floor(e/3)+1)/2,(e%3+1)/3,1-Math.floor(e/3)/2],f=[c[0]+.005,c[1]+.005,c[0]+.01,c[1]+.01],u=ee(t,[ye.wood("#3a2616"),ye.wood("#8a6440"),ut(1908256,.5)]);v(n,kn(j(+(s-2*o+.004).toFixed(3),+(r-2*o+.004).toFixed(3),.006),`frameart${e}|${(s-2*o).toFixed(3)}|${(r-2*o).toFixed(3)}`,[f,f,f,f,c,f]),[l,l,l,l,l,l],0,-(r-2*o)/2,.012),v(n,j(s,o,a),u,0,r/2-o,a/2),v(n,j(s,o,a),u,0,-r/2,a/2),v(n,j(o,r-2*o,a),u,-s/2+o/2,-r/2+o,a/2),v(n,j(o,r-2*o,a),u,s/2-o/2,-r/2+o,a/2),t()<.5&&(n.rotation.z=(t()-.5)*.12)},wall_clock(n,t){let e=.13+t()*.05,i=ee(t,[it.blackPl,it.whitePl,ye.wood("#5a3a22")]),s=nt(St("clockface",256,256,(f,u,h,d)=>{f.fillStyle="#f2ecd8",f.beginPath(),f.arc(128,128,128,0,Tt),f.fill();for(let x=0;x<60;x++){let g=x/60*Tt,m=x%5===0;f.strokeStyle="#1a1a1a",f.lineWidth=m?5:1.5,f.beginPath(),f.moveTo(128+Math.sin(g)*118,128-Math.cos(g)*118),f.lineTo(128+Math.sin(g)*(m?100:110),128-Math.cos(g)*(m?100:110)),f.stroke()}for(let x=1;x<=12;x++){let g=x/12*Tt;kt(f,String(x),128+Math.sin(g)*82,130-Math.cos(g)*82,24,{color:"#1a1a1a"})}let p=f.createRadialGradient(128,128,40,128,128,128);p.addColorStop(0,"rgba(180,150,90,0)"),p.addColorStop(1,"rgba(150,120,60,0.3)"),f.fillStyle=p,f.fillRect(0,0,u,h),re(f,u,h,d,1.2)}),.5),r=.045;v(n,Z(e,e,r,24,!0),i,0,0,0,Math.PI/2,0,0),v(n,Ie(e-.006,.01,4,24),i,0,0,r-.004),v(n,Fn(e-.012,24),s,0,0,r-.012,Math.PI/2,0,0),v(n,Fn(e,24),i,0,0,.001,-Math.PI/2,0,0);let o=Math.floor(t()*12),a=Math.floor(t()*60),l=Math.floor(t()*60),c=(f,u,h,d)=>v(n,j(h,u,.002),it.blackPl,0,0,r-.012+d,0,0,-f);c((o+a/60)/12*Tt,e*.5,.012,.003),c(a/60*Tt,e*.78,.008,.006),c(l/60*Tt,e*.82,.002,.009),v(n,Z(.008,.008,.012,8),it.blackPl,0,0,r-.012,Math.PI/2,0,0),t()<.4&&(n.rotation.z=(t()-.5)*.1)},curtain(n,t){let e=1.2+t()*.5,i=1.5+t()*.5,s=ee(t,["#8a3a2a","#4a5a6a","#c8b890"]),r=ye.fabric(s),o=ae("curtain"+s,{map:r.map,roughness:.95,side:Le}),a=ee(t,[ut(12098138,.4,.5),ut(2763308,.5,.3),ut(11844030,.38,.55)]),l=.085,c=0;v(n,Z(.012,.012,e,10),a,-e/2,c,l,0,0,-Math.PI/2);for(let u of[-1,1])v(n,hn(.025,8,6),a,u*(e/2+.02),c,l),v(n,j(.02,.04,l),a,u*(e/2-.08),c-.02,l/2-.012+.012);let f=t();for(let u of[-1,1]){let h=e*(u<0?.2+f*.3:.5-f*.3+.2)*.9,d=u<0?-e/2+.02:e/2-.02-h,p=t()<.3?.06+t()*.12:0,x=22,g=6,m=Math.max(3,Math.round(h/.09)),_=new Fe(1,1,x,g),y=_.attributes.position,b=_.attributes.uv,I=t()*6,A=h*1.8;for(let T=0;T<y.count;T++){let P=y.getX(T)+.5,E=.5-y.getY(T),M=d+P*h,U=l+.02+Math.sin(P*m*Tt+I)*(.025+E*.02),B=c-.03-E*i,V=u<0?1-P:P;p&&(B-=p*Math.max(0,V-.6)/.4*(1-E*.6)),E>.9&&(B+=Math.sin(P*17+I)*.015),U+=E*E*.04*Math.sin(P*3+I),y.setXYZ(T,M,B,U),b.setXY(T,P*A,(1-E)*i)}_.computeVertexNormals(),v(n,_,o);for(let T=0;T<=m;T++){let P=d+T/m*h;p&&(u<0?T/m<.4:T/m>.6)||v(n,Ie(.018,.004,3,8),a,P,c,l)}}},mail_pile(n,t){let e=St("mailatlas",1024,512,(l,c,f,u)=>{for(let h=0;h<8;h++){let d=h%4*256,p=Math.floor(h/4)*256;if(l.save(),l.translate(d,p),l.beginPath(),l.rect(0,0,256,256),l.clip(),h===0||h===1){if(l.fillStyle=h?"#eae4d4":"#f4f2ec",l.fillRect(0,0,256,256),l.fillStyle="rgba(0,0,0,0.06)",l.fillRect(0,0,256,8),h||(l.fillStyle="#dfe3e2",l.fillRect(30,120,120,60),l.strokeStyle="rgba(0,0,0,0.2)",l.strokeRect(30,120,120,60)),l.fillStyle=h?"#7a9ab8":"#c8c8c4",l.fillRect(196,20,40,34),h){l.strokeStyle="rgba(40,40,40,0.4)";for(let x=0;x<4;x++)l.beginPath(),l.moveTo(170,30+x*6),l.bezierCurveTo(185,25+x*6,200,35+x*6,236,30+x*6),l.stroke()}}else if(h===2)_e(l,256,256,u,"#d2b47a",.08,800,2),l.fillStyle="rgba(80,60,30,0.3)",l.beginPath(),l.arc(128,40,10,0,Tt),l.fill();else if(h===3){l.fillStyle="#f6f2e6",l.fillRect(0,0,256,256),l.fillStyle="#c4221c",l.fillRect(0,0,256,50),kt(l,"WEEKLY SPECIALS",128,26,26,{color:"#fff",maxW:240,font:Mi});let x=["#e8701c","#2f7a32","#f2c21b","#1d4f9a","#8a4a1a","#c4221c"];for(let g=0;g<6;g++){let m=12+g%3*82,_=62+Math.floor(g/3)*96;l.fillStyle=x[g],l.beginPath(),l.arc(m+35,_+32,24,0,Tt),l.fill(),kt(l,"$"+(1+g)+".99",m+35,_+76,18,{color:"#c4221c"})}}else if(h===4){l.fillStyle="#fbf6dc",l.fillRect(0,0,256,256),l.setLineDash([6,4]),l.strokeStyle="#555";for(let x=0;x<4;x++)l.strokeRect(10+x%2*124,40+Math.floor(x/2)*106,112,96);l.setLineDash([]),kt(l,"COUPONS",128,20,22,{color:"#1d4f9a"});for(let x=0;x<4;x++)kt(l,["50% OFF","SAVE $1","BUY 1 GET 1","FREE"][x],66+x%2*124,88+Math.floor(x/2)*106,18,{color:"#111",maxW:100})}else h===5?(l.fillStyle="#e8e4dc",l.fillRect(0,0,256,256),l.fillStyle="#3a5a7a",l.fillRect(0,40,256,150),l.fillStyle="#c8a070",l.fillRect(30,100,90,70),l.fillStyle="#8a3a2a",l.fillRect(140,80,80,100),kt(l,"HOME & GARDEN",128,22,22,{color:"#222",maxW:240}),kt(l,"SPRING CATALOG",128,220,18,{color:"#222"})):h===6?Du(l,256,256,0,u):(l.fillStyle="#f4f2ec",l.fillRect(0,0,256,256),l.fillStyle="#2a6a5a",l.fillRect(0,0,256,34),kt(l,"STATEMENT",128,18,20,{color:"#fff"}),qe(l,20,50,216,10,14,u,"#444"),kt(l,"FINAL NOTICE",128,216,22,{color:"#c4221c"}));re(l,256,256,u,1.2),l.restore()}}),i=new ci(1),s=[.02,.52,.05,.55],r=[[.24,.0015,.105,0],[.24,.0015,.105,1],[.23,.004,.3,2],[.216,8e-4,.28,3],[.216,8e-4,.28,4],[.2,.006,.26,5],[.15,.001,.105,6],[.216,8e-4,.28,7]],o=7+Math.floor(t()*8),a=0;for(let l=0;l<o;l++){let[c,f,u,h]=r[Math.floor(t()*r.length)],d=Uu(4,2,h),p=l>2&&t()<.15,x=p?(t()-.5)*.5:(t()-.5)*.06,g=p?(t()-.5)*.4:(t()-.5)*.06,m=new oe().compose(new N(x,p?0:a,g),new xn().setFromEuler(new yn(0,t()*Tt,0)),new N(1,1,1));i.add(j(c,f,u),m,[s,s,d,s,s,s],[0]),p||(a+=f+4e-4)}for(let l of i.meshes([ae("mailmat",{map:e,roughness:.9})]))n.add(l)},shoes(n,t){let e=ee(t,["#2a3a5a","#7a2a22","#3a3a3c"]),i=nt(St("shoeup"+e,256,128,(d,p,x,g)=>{_e(d,p,x,g,e,.08,2e3,2),d.fillStyle=Yn(e,-.25),d.fillRect(0,x*.75,p,x*.25),d.strokeStyle="rgba(255,255,255,0.35)",d.setLineDash([3,3]),d.beginPath(),d.moveTo(0,x*.72),d.lineTo(p,x*.72),d.stroke(),d.setLineDash([]);for(let m=0;m<40;m++)d.fillStyle=g()<.6?"rgba(80,60,40,0.35)":"rgba(235,235,225,0.35)",d.beginPath(),d.ellipse(g()*p,x*(.8+g()*.2),3+g()*10,2+g()*4,0,0,Tt),d.fill();re(d,p,x,g,1.5)}),.8),s=ae("shoesole",{color:14210248,roughness:.9}),r=it.blackPl,o=d=>{let p=.036+.012*Math.sin(Math.min(1,d*1.25)*Math.PI*.9),x=d>.82?Math.sqrt(Math.max(.05,1-((d-.82)/.18)**2)):1,g=d<.08?Math.sqrt(Math.max(.2,1-((.08-d)/.08)**2)):1;return p*x*g},a=.27,l=(d,p,x,g,m,_)=>tn(on,"shoe"+d,()=>{let y=new we(1,1,1,g,m,10),b=y.attributes.position;for(let I=0;I<b.count;I++){let A=b.getX(I)*2,T=b.getY(I)+.5,P=b.getZ(I)+.5,E=o(P)*_,M=x(P);b.setXYZ(I,A*E*(1-.3*T*T),p+T*M,(P-.5)*a)}return y.computeVertexNormals(),y}),c=l("sole",0,()=>.022,2,1,1.06),f=l("up",.02,d=>d<.45?.085-d*.02:.076-(d-.45)*.08,3,3,1),u=(d,p,x,g)=>{let m=new Gt;v(m,c,s),v(m,f,i),v(m,Fn(.03,10),r,0,.1,-.075,0,0,0,.95,1,1.5);for(let _=0;_<4;_++)v(m,j(.045,.004,.006),it.whitePl,0,.088-_*.006,-.03+_*.022,.25,0,0);m.position.set(d,0,p),m.rotation.y=x,g&&(m.rotation.z=Math.PI/2*g,m.position.y=.05,m.position.x+=g*.05),n.add(m)},h=t()<.35;u(-.055,0,(t()-.5)*.15,0),u(h?.12:.055,h?.05:(t()-.5)*.04,h?.6+t():(t()-.5)*.15,h?1:0)},clothes_pile(n,t){let e=St("clothesatlas",512,512,(o,a,l,c)=>{o.clearRect(0,0,a,l);let f=(x,g)=>{o.save(),o.translate(x%2*256,Math.floor(x/2)*256),g(),o.restore()},u=(x,g)=>{if(_e(o,256,256,c,x,.08,1500,2),g==="denim"){o.strokeStyle="rgba(255,255,255,0.08)";for(let m=-256;m<256;m+=4)o.beginPath(),o.moveTo(m,0),o.lineTo(m+256,256),o.stroke()}if(g==="plaid"){o.globalAlpha=.5,o.fillStyle="#1a1a1a";for(let m=0;m<256;m+=48)o.fillRect(m,0,18,256),o.fillRect(0,m,256,18);o.fillStyle="#e8d8a0";for(let m=30;m<256;m+=48)o.fillRect(m,0,3,256),o.fillRect(0,m,256,3);o.globalAlpha=1}if(g==="knit"){o.strokeStyle="rgba(0,0,0,0.15)";for(let m=0;m<256;m+=5)o.beginPath(),o.moveTo(m,0),o.lineTo(m,256),o.stroke()}re(o,256,256,c,1.5)},h=()=>{o.beginPath(),o.moveTo(70,20),o.lineTo(100,10),o.quadraticCurveTo(128,30,156,10),o.lineTo(186,20),o.lineTo(250,70),o.lineTo(222,110),o.lineTo(190,85),o.lineTo(192,246),o.lineTo(64,246),o.lineTo(66,85),o.lineTo(34,110),o.lineTo(6,70),o.closePath(),o.clip()},d=()=>{o.beginPath(),o.moveTo(56,6),o.lineTo(200,6),o.lineTo(226,250),o.lineTo(146,250),o.lineTo(128,90),o.lineTo(110,250),o.lineTo(30,250),o.closePath(),o.clip()},p=()=>{o.beginPath(),o.moveTo(60,14),o.quadraticCurveTo(128,40,196,14),o.lineTo(252,200),o.lineTo(214,214),o.lineTo(192,110),o.lineTo(196,250),o.lineTo(60,250),o.lineTo(64,110),o.lineTo(42,214),o.lineTo(4,200),o.closePath(),o.clip()};f(0,()=>{h(),u("#7a1d1a","plaid")}),f(1,()=>{d(),u("#2a3e5e","denim"),o.fillStyle="rgba(255,255,255,0.15)",o.fillRect(0,0,256,14)}),f(2,()=>{p(),u("#8a8a84","knit")}),f(3,()=>{h(),u(ee(c,["#2f5a3a","#c8b890","#3a4a6a"]),"tee")})}),i=new ci(1),s=3+Math.floor(t()*3),r=.02;for(let o=0;o<s;o++){let a=o<4?o:Math.floor(t()*4),l=.5+t()*.15,c=a===1?.8:.62,f=(t()-.5)*.25,u=(t()-.5)*.25,h=t()*Tt,d=t()*10,p=11,x=11,g=new Fe(1,1,p,x).rotateX(-Math.PI/2),m=g.attributes.position,_=Math.cos(h),y=Math.sin(h);for(let b=0;b<m.count;b++){let I=m.getX(b),A=m.getZ(b),T=.55+t()*.08,P=I*l*T,E=A*c*T,M=P*_-E*y+f,U=P*y+E*_+u,B=Math.hypot(M,U),V=Math.max(0,r+.06-B*.35)+Math.sin(I*9+d)*.012+Math.cos(A*11+d)*.012;m.setXYZ(b,M,Math.max(.004+o*.002,V),U)}g.computeVertexNormals(),i.add(g,new oe,[Uu(2,2,a)],[0]),r+=.02}for(let o of i.meshes([ae("clothesmat",{map:e,roughness:.95,side:Le,alphaTest:.5})]))n.add(o)},dish_stack(n,t){let e=yl,i=new ci(1),s=(p,x,g,m=0,_=0)=>new oe().compose(new N(p,x,g),new xn().setFromEuler(new yn(_,m,0)),new N(1,1,1)),r=Ge("dplate2",[[0,0],[.08,0],[.12,.018],[.116,.02],[.078,.004],[0,.004]],12),o=Ge("dbowl2",[[0,0],[.04,0],[.075,.058],[.07,.058],[.036,.006],[0,.006]],12),a=Ge("dmug2",[[0,0],[.04,0],[.042,.095],[.037,.095],[.035,.008],[0,.008]],10),l=Ie(.025,.007,4,8,Math.PI*1.2),c=ee(t,[0,1,5]),f=3+Math.floor(t()*4),u=-.08+(t()-.5)*.04;for(let p=0;p<f;p++)i.add(r,s(u+(t()-.5)*.008,p*.0145,(t()-.5)*.008,t()*Tt),[e(p===f-1&&t()<.6?6:c)],[0]);let h=Math.floor(t()*3);for(let p=0;p<h;p++)i.add(o,s(.12,p*.02,-.06,t()*Tt),[e(ee(t,[0,2,4]))],[0]);let d=1+Math.floor(t()*3);for(let p=0;p<d;p++){let x=e(ee(t,[2,3,4,7,1])),g=.6+p*1.3+t()*.4,m=.17,_=Math.cos(g)*m,y=Math.sin(g)*m,b=t()*Tt,I=p===d-1&&t()<.3,A=s(_,I?.042:0,y,b,I?Math.PI/2:0);i.add(a,A,[x],[0]),i.add(l,A.clone().multiply(s(.045,.05,0,0,0).multiply(new oe().makeRotationZ(-Math.PI*.6))),[x],[0])}if(t()<.6)for(let p=0;p<2;p++)i.add(j(.012,.003,.19),s(u+(p-.5)*.04,f*.0145+.006+p*.003,0,.3+p*.4),[e(5)],[0]);for(let p of i.meshes([sd()]))n.add(p)}};Object.assign(Fo,i_);var s_=new Set(["wall_frame","wall_clock","curtain"]),Ml=Object.keys(Fo),r_=new Set(["rug","paper_scatter","glass_shards"]),af={polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2};function Si(n,t=0){let e=new Gt,i=ns(zs(String(n))^Math.imul((t|0)+3,2246822519)),s=Fo[n];if(s)s(e,i);else{let r=new Gt;Fo.cardboard_box(r,i),e.add(r)}return Xu(e,n,r_.has(n),s_.has(n))}function rd(n,t,e){let i=`boxw${n.toFixed(3)},${t.toFixed(3)},${e.toFixed(3)}`;return tn(on,i,()=>{let s=new we(n,t,e),r=s.attributes.uv,o=[[e,t],[e,t],[n,e],[n,e],[n,t],[n,t]];for(let a=0;a<6;a++)for(let l=0;l<4;l++){let c=a*4+l;r.setXY(c,r.getX(c)*o[a][0],r.getY(c)*o[a][1])}return s.translate(0,t/2,0),s})}function ai(n,t,e){return St("fx|"+n,t,t,e,{repeat:[1,1]})}function Xn(n,t,e,i,s=1){re(n,t,e,i,s);for(let r=0;r<1500*s;r++)n.fillStyle=`rgba(200,190,170,${.04+i()*.06})`,n.fillRect(i()*t,i()*e,1.5,1.5)}var lf=["#4a3020","#6a4528","#8a6440"];function o_(n){let t=new Jt(n).getHSL({},$e).l;return t<.25?lf[0]:t<.34?lf[1]:lf[2]}var ye={wood(n="#6a4528"){return n=o_(n),ae("fxwood"+n,{map:ai("wood"+n,512,(t,e,i,s)=>{t.fillStyle=n,t.fillRect(0,0,e,i);for(let r=0;r<140;r++){t.strokeStyle=`rgba(${s()<.5?"30,18,8":"255,230,200"},${.04+s()*.1})`,t.lineWidth=1+s()*3;let o=s()*i;t.beginPath(),t.moveTo(0,o);for(let a=0;a<=e;a+=32)t.lineTo(a,o+Math.sin(a*.01+r)*6);t.stroke()}Xn(t,e,i,s,1)}),roughness:.62})},fabric(n){return ae("fxfab"+n,{map:ai("fab"+n,256,(t,e,i,s)=>{t.fillStyle=n,t.fillRect(0,0,e,i);for(let r=0;r<i;r+=2)t.fillStyle=`rgba(0,0,0,${.05+s()*.06})`,t.fillRect(0,r,e,1);for(let r=0;r<e;r+=2)t.fillStyle=`rgba(255,255,255,${.03+s()*.04})`,t.fillRect(r,0,1,i);for(let r=0;r<5;r++){let o=s()*e,a=s()*i,l=20+s()*50,c=t.createRadialGradient(o,a,0,o,a,l);c.addColorStop(0,"rgba(60,45,30,0.18)"),c.addColorStop(1,"rgba(60,45,30,0)"),t.fillStyle=c,t.fillRect(o-l,a-l,l*2,l*2)}Xn(t,e,i,s,.8)}),roughness:.95})},sheet(){return ae("fxsheet",{map:ai("sheet",256,(n,t,e,i)=>{_e(n,t,e,i,"#e4e2da",.05,1500,2),n.strokeStyle="rgba(0,0,0,0.07)";for(let s=0;s<25;s++)n.lineWidth=1+i()*2,n.beginPath(),n.moveTo(i()*t,i()*e),n.bezierCurveTo(i()*t,i()*e,i()*t,i()*e,i()*t,i()*e),n.stroke();Xn(n,t,e,i,.8)}),roughness:.95,side:Le})},enamel(n="w",t="#e9e8e2"){return ae("fxenamel"+n,{map:ai("enamel"+n,256,(e,i,s,r)=>{e.fillStyle=t,e.fillRect(0,0,i,s);for(let o=0;o<18;o++){let a=r()*i,l=e.createLinearGradient(0,0,0,s);l.addColorStop(0,"rgba(120,100,60,0)"),l.addColorStop(1,`rgba(120,100,60,${.05+r()*.08})`),e.fillStyle=l,e.fillRect(a,r()*s*.5,2+r()*4,s)}Xn(e,i,s,r,1)}),roughness:.3})},painted(n){return ae("fxpaint"+n,{map:ai("paint"+n,256,(t,e,i,s)=>{_e(t,e,i,s,n,.04,1500,2);for(let r=0;r<25;r++)t.fillStyle="rgba(60,50,40,0.25)",t.beginPath(),t.ellipse(s()*e,s()*i,1+s()*4,1+s()*2,s()*3,0,Tt),t.fill();Xn(t,e,i,s,1)}),roughness:.55,metalness:.05})},metal(n="#9ea3a8",t=""){return ae("fxmetal"+n+t,{map:ai("metal"+n,128,(e,i,s,r)=>{e.fillStyle=n,e.fillRect(0,0,i,s);for(let o=0;o<200;o++)e.fillStyle=r()<.5?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.08)",e.fillRect(0,r()*s,i,1);Xn(e,i,s,r,.6)}),roughness:.38,metalness:.5})},dark(n="k",t="#1b1c1e",e=.6){return ae("fxdark"+n,{map:ai("dark"+n,128,(i,s,r,o)=>{_e(i,s,r,o,t,.04,600,2),Xn(i,s,r,o,1.2)}),roughness:e})},laminate(n="#b8b4aa"){return ae("fxlam"+n,{map:ai("lam"+n,256,(t,e,i,s)=>{_e(t,e,i,s,n,.06,3e3,1.5),Xn(t,e,i,s,1.2)}),roughness:.5})},counterTop(n="#cfc8b8"){return ae("fxtop"+n,{map:ai("top"+n,256,(t,e,i,s)=>{_e(t,e,i,s,n,.1,5e3,2);for(let r=0;r<300;r++)t.fillStyle=s()<.5?"rgba(60,50,40,0.35)":"rgba(255,255,255,0.3)",t.fillRect(s()*e,s()*i,2,2);Xn(t,e,i,s,1.5)}),roughness:.4})},card(){return ae("fxcard",{map:ai("card",256,(n,t,e,i)=>{_e(n,t,e,i,"#a9824f",.1,2500,2),n.fillStyle="rgba(200,170,110,0.7)",n.fillRect(0,e*.45,t,e*.1),Xn(n,t,e,i,1)}),roughness:.9})},glass(){return ae("fxglass",{map:ai("glass",256,(n,t,e,i)=>{n.fillStyle="#c8d4d8",n.fillRect(0,0,t,e);for(let s=0;s<40;s++){let r=i()*t,o=i()*e,a=10+i()*60,l=n.createRadialGradient(r,o,0,r,o,a);l.addColorStop(0,"rgba(255,255,255,0.6)"),l.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=l,n.fillRect(r-a,o-a,a*2,a*2)}for(let s=0;s<30;s++)n.fillStyle="rgba(90,80,60,0.4)",n.fillRect(i()*t,i()*e*.6+e*.4,1+i()*2,10+i()*50)}),roughness:.1,metalness:.1,transparent:!0,opacity:.32,depthWrite:!1})}};function _t(n,t,e,i,s,r,o,a,l=!0){let c=Math.max(.001,i-e),f=Math.max(.001,r-s),u=Math.max(.001,a-o);return v(n,l?rd(c,f,u):j(c,f,u),t,(e+i)/2,s,(o+a)/2)}function Wn(n,t,e,i,s,r,o,a,l){let c=i-e,f=r-s,u=a-o;return v(n,qt(+c.toFixed(3),+f.toFixed(3),+u.toFixed(3),l),t,(e+i)/2,s,(o+a)/2)}var pf={sofa(n,t,e,i,s){let r=ye.fabric(ee(s,["#5a5f4a","#6a4a3a","#3e4a5a"])),o=ye.wood("#3a2616"),a=Math.min(.08,i*.1),l=Math.min(.46,i*.55),c=Math.min(.2,t*.1),f=Math.min(.22,e*.25),u=Math.min(i,l+.2);for(let p of[-t/2+.06,t/2-.06])for(let x of[-e/2+.06,e/2-.06])v(n,Z(.025,.02,a,8),o,p,0,x);Wn(n,r,-t/2,t/2,a,l-.12,-e/2,e/2,.03),Wn(n,r,-t/2,t/2,a,i,-e/2,-e/2+f,.05);for(let p of[-1,1])Wn(n,r,p<0?-t/2:t/2-c,p<0?-t/2+c:t/2,a,u,-e/2,e/2,.06);let h=t-2*c>1.5?3:t-2*c>.9?2:1,d=(t-2*c)/h;for(let p=0;p<h;p++){let x=-t/2+c+p*d+.006,g=x+d-.012,m=s()*.025;Wn(n,r,x,g,l-.13,l-m,-e/2+f+.005,e/2-.005,.05);let _=Wn(n,r,x+.01,g-.01,l-.02,Math.min(i-.02,l+(i-l)*.85),-e/2+f,-e/2+f+.16,.06);_.rotation.x=-.08-s()*.08}if(s()<.8){let p=new Gt;v(p,qt(.4,.38,.12,.05),ku(s),0,0,0),p.position.set(-t/2+c+.25,l-.02,-e/2+f+.15),p.rotation.set(-.5,.3,.35),n.add(p)}},table(n,t,e,i,s){let r=ye.wood(ee(s,["#6a4528","#8a6440","#4a3020"])),o=ye.wood("#7a5434"),a=.035;_t(n,o,-t/2,t/2,i-a,i,-e/2,e/2);let l=t/2-.08,c=e/2-.08;for(let x of[-l,l])for(let g of[-c,c])_t(n,r,x-.03,x+.03,0,i-a,g-.03,g+.03);if(_t(n,r,-l,l,i-a-.08,i-a,-c-.01,-c+.01),_t(n,r,-l,l,i-a-.08,i-a,c-.01,c+.01),_t(n,r,-l-.01,-l+.01,i-a-.08,i-a,-c,c),_t(n,r,l-.01,l+.01,i-a-.08,i-a,-c,c),e<.5||i<.5)return;let f=Math.max(1,Math.floor((t-.2)/.6)),u=Math.min(.45,i-.22),h=(x,g,m)=>{let _=new Gt,y=.4;_t(_,r,-y/2,y/2,u-.035,u,-.2,.2);for(let b of[-y/2+.03,y/2-.03])for(let I of[-.17,.17])_t(_,r,b-.017,b+.017,0,u-.035,I-.017,I+.017);for(let b of[-y/2+.03,y/2-.03])_t(_,r,b-.017,b+.017,u,i-a-.012,.2-.03,.2-.005);_t(_,r,-y/2+.02,y/2-.02,i-a-.1,i-a-.02,.2-.03,.2-.008),_t(_,r,-y/2+.02,y/2-.02,u+.12,u+.16,.2-.028,.2-.01),_.position.set(x,0,g),_.rotation.y=m+(s()-.5)*.08,n.add(_)},d=Math.min(.4,t/f-.06),p=t/e<1.5&&e>=1.15;for(let x of[-1,1])for(let g=0;g<f;g++){if(s()<.12)continue;let m=-t/2+(g+.5)*(t/f)+(s()-.5)*(p?.02:Math.max(0,t/f-d-.06));h(m,x*(e/2-.205),x>0?0:Math.PI)}if(p)for(let x of[-1,1])s()>.12&&h(x*(t/2-.205),(s()-.5)*.06,x*Math.PI/2)},bed(n,t,e,i,s){let r=ye.wood(ee(s,["#5a3a22","#7a5a3a","#3a2a1e"])),o=ye.sheet(),a=ku(s,!0),l=Math.min(.6,i*.62),c=.06;_t(n,r,-t/2,-t/2+c,0,i,-e/2,e/2);let f=Math.min(i,l+.06);_t(n,r,t/2-.05,t/2,0,f,-e/2,e/2);for(let A of[-e/2,e/2-.04])_t(n,r,-t/2+c,t/2-.05,.14,.32,A,A+.04);Wn(n,o,-t/2+c+.01,t/2-.06,.32,l,-e/2+.03,e/2-.03,.05);let u=e>1.2?2:1;for(let A=0;A<u;A++){let T=u===1?0:(A-.5)*e*.48;Wn(n,o,-t/2+c+.04,-t/2+c+.4,l-.02,l+.12,T-Math.min(.32,e*.4),T+Math.min(.32,e*.4),.06).rotation.set(0,(s()-.5)*.2,(s()-.5)*.15)}let h=-t/2+c+.45+s()*.2,d=t/2-.07,p=e/2-.02,x=Math.min(.22,l-.12),g=18,m=14,_=new Fe(1,1,g,m),y=_.attributes.position,b=_.attributes.uv,I=s()*10;for(let A=0;A<y.count;A++){let T=y.getX(A)+.5,P=y.getY(A)+.5,E=h+(d-h)*T,M=(P-.5)*2*(p+x),U=Math.sin(E*9+I+M*3)*.018+Math.sin(E*23+M*11+I)*.006,B,V;Math.abs(M)<=p?(V=M,B=l+.025+U*(1-Math.abs(M)/p*.5)+(T<.12?(.12-T)*.5:0)):(V=Math.sign(M)*(p+.01),B=l+.02-(Math.abs(M)-p)+U*.4),y.setXYZ(A,E,B,V),b.setXY(A,T*(d-h),P*(p+x)*2)}_.computeVertexNormals(),v(n,_,a),v(n,Z(.03,.03,2*p,8),a,h+.02,l+.03,-p,Math.PI/2,0,0)},dresser(n,t,e,i,s){let r=ye.wood(ee(s,["#6a4528","#5a3a22","#8a6a48"])),o=ye.metal("#b8a070","brass");_t(n,r,-t/2,t/2,i-.03,i,-e/2,e/2),_t(n,r,-t/2+.01,t/2-.01,0,i-.03,-e/2,e/2-.02),_t(n,ye.dark("dresserin","#1a120c"),-t/2+.02,t/2-.02,.1,i-.04,e/2-.0225,e/2-.02);let a=Math.max(2,Math.round((i-.12)/.22)),l=t>1?2:1,c=(i-.03-.1)/a;for(let f=0;f<a;f++)for(let u=0;u<l;u++){let h=f===a-1&&l===2&&s()<0?1:l,d=(t-.04)/h;if(u>=h)continue;let p=-t/2+.02+u*d+.006,x=p+d-.012,g=.1+f*c+.006,m=g+c-.012,_=(s()<.15,0);_t(n,r,p,x,g,m,e/2-.022+_,e/2);let y=(p+x)/2,b=(g+m)/2;for(let I of d>.5?[-.12,.12]:[0])v(n,Z(.012,.012,.012,8),o,y+I,b,e/2-.012,Math.PI/2,0,0)}},fridge(n,t,e,i,s){let r=ye.enamel("fridge",ee(s,["#e9e8e2","#d8d6cc","#c8cacb"])),o=ye.dark("fridgek","#2a2b2d",.5),a=ae("fxnotes",{map:St("fridgenotes",256,256,(h,d,p,x)=>{h.fillStyle="#ece6d0",h.fillRect(0,0,d,p),h.fillStyle="#f2c21b",h.fillRect(0,0,d/2,p/2),h.fillStyle="#f4f4f4",h.fillRect(d/2,0,d/2,p/2),h.fillStyle="#cfe0ef",h.fillRect(0,p/2,d/2,p/2),h.fillStyle="#f6f0e4",h.fillRect(d/2,p/2,d/2,p/2),qe(h,12,20,100,6,12,x,"#333"),qe(h,140,20,100,8,10,x,"#333"),h.strokeStyle="#2a6fd6",h.lineWidth=4,h.strokeRect(30,170,60,50),h.beginPath(),h.moveTo(25,172),h.lineTo(60,140),h.lineTo(95,172),h.stroke(),h.fillStyle="#f08a1c",h.beginPath(),h.arc(105,150,12,0,Tt),h.fill(),qe(h,140,150,100,7,12,x,"#223"),re(h,d,p,x,1)}),roughness:.9}),l=.045;Wn(n,r,-t/2+.005,t/2-.005,0,i-.005,-e/2,e/2-l,.02),_t(n,o,-t/2+.03,t/2-.03,0,.09,e/2-l,e/2-l+.01);let c=i*(i>1.5?.68:.62);Wn(n,r,-t/2,t/2,.1,c-.006,e/2-l+.002,e/2,.015),Wn(n,r,-t/2,t/2,c+.006,i,e/2-l+.002,e/2,.015),_t(n,o,-t/2+.01,t/2-.01,c-.008,c+.008,e/2-l-.004,e/2-l+.004);let f=t/2-.07;_t(n,o,f-.015,f+.015,c-.42>.2?c-.42:.2,c-.08,e/2-.005-0,e/2),_t(n,o,f-.015,f+.015,c+.06,Math.min(i-.06,c+.32),e/2-.005,e/2);let u=[[-.15,c-.25,0,0],[.05,c-.45,1,1],[-.12,c+.15,2,0],[-.05,c-.75,3,1]];for(let[h,d,p,x]of u){if(s()<.25||d<.2)continue;let g=p%2/2,m=1-(Math.floor(p/2)+1)/2,_=new Fe(.14,.18),y=_.attributes.uv;for(let b=0;b<y.count;b++)y.setXY(b,g+y.getX(b)*.5,m+y.getY(b)*.5);v(n,_,a,Math.max(-t/2+.1,Math.min(t/2-.15,h*t/.75)),d,e/2-.0015,0,0,x?.12:-.06),v(n,Z(.008,.008,.004,8),o,Math.max(-t/2+.1,Math.min(t/2-.15,h*t/.75)),d+.075,e/2-.004,Math.PI/2,0,0)}},counter(n,t,e,i,s){let r=ye.painted(ee(s,["#e8e2d2","#8a9a88","#5a6a7a"])),o=ye.counterTop(ee(s,["#cfc8b8","#6a6a68","#b8a890"])),a=ye.metal("#b8bcc0","ss"),l=ae("fxcooktop",{map:St("cooktop",256,256,(T,P,E,M)=>{T.fillStyle="#141516",T.fillRect(0,0,P,E),T.strokeStyle="rgba(200,200,200,0.35)",T.lineWidth=3;for(let[U,B,V]of[[64,64,44],[192,64,34],[64,192,34],[192,192,44]])T.beginPath(),T.arc(U,B,V,0,Tt),T.stroke(),T.beginPath(),T.arc(U,B,V*.6,0,Tt),T.stroke();Xn(T,P,E,M,1.5)}),roughness:.25,metalness:.1}),c=.04,f=.09;_t(n,l,-t/2,t/2,0,f,-e/2,e/2-.07),_t(n,r,-t/2,t/2,f,i-c,-e/2,e/2-.03);let u=t>=.7&&(t>=1.6||s()<.55),h=t>=.7&&(t>=1.6||!u),d=.6,p=.62,x=u?h?-t/2+.2+d/2:(s()-.5)*(t-d-.1):null,g=h?u?t/2-.15-p/2:(s()-.5)*(t-p-.1):null,m=Math.max(1,Math.round(t/.5)),_=t/m;for(let T=0;T<m;T++){let P=-t/2+T*_+.004,E=P+_-.008,M=(P+E)/2;g!==null&&Math.abs(M-g)<p/2||(_t(n,r,P,E,i-c-.17,i-c-.01,e/2-.03,e/2-.008),_t(n,a,M-.06,M+.06,i-c-.1,i-c-.085,e/2-.008,e/2),_t(n,r,P,E,f+.01,i-c-.19,e/2-.03,e/2-.008),_t(n,a,E-.04,E-.028,i-c-.4,i-c-.26,e/2-.008,e/2))}if(g!==null){let T=g-p/2,P=g+p/2;_t(n,l,T,P,f,i-c,e/2-.035,e/2-.005),_t(n,a,T+.1,P-.1,f+.2,i-c-.25,e/2-.006,e/2-.003),_t(n,a,T+.06,P-.06,i-c-.17,i-c-.15,e/2-.004,e/2);for(let E=0;E<4;E++)v(n,Z(.018,.018,.02,8),a,T+.1+E*(p-.2)/3,i-c-.07,e/2-.02,Math.PI/2,0,0)}let y=[];x!==null&&y.push([x-d/2+.04,x+d/2-.04,"sink"]),g!==null&&y.push([g-p/2,g+p/2,"stove"]),y.sort((T,P)=>T[0]-P[0]);let b=-t/2,I=e/2-.08,A=-e/2+.1;for(let[T,P,E]of y){if(_t(n,o,b,T,i-c,i,-e/2,e/2),_t(n,o,T,P,i-c,i,I,e/2),_t(n,o,T,P,i-c,i,-e/2,A),E==="sink"){let M=i-c-.18;_t(n,a,T,P,M,M+.01,A,I),_t(n,a,T,T+.006,M,i,A,I),_t(n,a,P-.006,P,M,i,A,I),_t(n,a,T,P,M,i,A,A+.006),_t(n,a,T,P,M,i,I-.006,I),P-T>.45&&_t(n,a,(T+P)/2-.005,(T+P)/2+.005,M,i-.02,A,I),v(n,Z(.03,.03,.004,10),l,(T+P)/2-(P-T)/4,M+.01,(A+I)/2),v(n,Z(.025,.025,.004,10),a,(T+P)/2,i-.004,A-.045)}else _t(n,l,T,P,i-c,i,A,I);b=P}_t(n,o,b,t/2,i-c,i,-e/2,e/2)},tub(n,t,e,i,s){let r=ye.enamel("tub","#ecebe6"),o=ae("fxtubring",{map:ai("tubring",256,(c,f,u,h)=>{c.fillStyle="#e4e0d4",c.fillRect(0,0,f,u);let d=c.createRadialGradient(f*.6,u*.5,10,f*.5,u*.5,f*.7);d.addColorStop(0,"rgba(150,120,70,0.35)"),d.addColorStop(1,"rgba(150,120,70,0.05)"),c.fillStyle=d,c.fillRect(0,0,f,u),Xn(c,f,u,h,2)}),roughness:.35}),a=ye.metal("#c8ccd0","chrome"),l=.07;_t(n,r,-t/2,t/2,0,.06,-e/2,e/2),_t(n,o,-t/2+l,t/2-l,.06,.07,-e/2+l,e/2-l),Wn(n,r,-t/2,t/2,0,i,e/2-l,e/2,.02),Wn(n,r,-t/2,t/2,0,i,-e/2,-e/2+l,.02),Wn(n,r,-t/2,-t/2+l,0,i,-e/2,e/2,.02),Wn(n,r,t/2-l*1.6,t/2,0,i,-e/2,e/2,.02),_t(n,o,-t/2+l,t/2-l*1.6,.07,.11,-e/2+l,-e/2+l+.002),v(n,Z(.025,.025,.005,10),a,-t/2+l+.1,.07,0),v(n,Z(.018,.018,.12,8),a,-t/2+l,i-.12,0,0,0,-Math.PI/2);for(let c of[-.09,.09])v(n,Z(.022,.022,.03,8),a,-t/2+l,i-.07,c,0,0,-Math.PI/2)},cabinet(n,t,e,i,s){let r=ye.painted(ee(s,["#d8d4c8","#6a7a6a","#8a7a6a"])),o=ye.metal("#9a9ea2","cab");_t(n,r,-t/2,t/2,0,i,-e/2,e/2-.02);let a=t>.55?2:1,l=i>1.3?i*.55:0;for(let c=0;c<a;c++)for(let[f,u]of l?[[.08,l-.005],[l+.005,i-.04]]:[[.08,i-.04]]){let h=-t/2+.01+c*(t-.02)/a+.004,d=h+(t-.02)/a-.008;_t(n,r,h,d,f,u,e/2-.02,e/2),_t(n,r,h+.05,d-.05,f+.05,u-.05,e/2-.005,e/2+0);let p=a===2?c===0?d-.04:h+.04:d-.04;_t(n,o,p-.008,p+.008,(f+u)/2-.06,(f+u)/2+.06,e/2-0,e/2)}_t(n,ye.dark("kickc"),-t/2+.02,t/2-.02,0,.08,e/2-.05,e/2-.03)},checkout(n,t,e,i,s){let r=ye.laminate("#8a8e92"),o=ye.dark("belt","#18191b",.85),a=ye.metal("#b0b4b8","lane"),l=Math.min(.92,i);_t(n,r,-t/2,t/2,0,l-.05,-e/2+.02,e/2-.02),_t(n,o,-t/2+.03,t/2-.03,0,.06,-e/2+.02,e/2-.02);let c=t/2-Math.min(.8,t*.4);_t(n,a,-t/2,t/2,l-.05,l-.03,-e/2,e/2),_t(n,o,-t/2+.05,c,l-.03,l-.005,-e/2+.06,e/2-.06),_t(n,a,-t/2,c,l-.03,l,-e/2,-e/2+.05),_t(n,a,-t/2,c,l-.03,l,e/2-.05,e/2),v(n,Z(.025,.025,e-.12,8),a,c,l-.03,-(e-.12)/2,Math.PI/2,0,0),_t(n,r,c+.06,c+.36,l-.03,l-.02,-.15,.15),_t(n,a,c+.04,t/2,l-.03,l-.01,-e/2,e/2),_t(n,o,-t/2+.4+s()*(c+t/2-.8),-t/2+.42+s()*0+.36,l-.005,l+Math.min(.03,i-l),-.15,.15);let f=t/2-.2,u=-e/2+.15,h=i-l;if(h>.12){let d=Math.min(i-.18,l+.25);v(n,Z(.02,.025,Math.max(.02,d-l),8),o,f,l,u);let p=new Gt;_t(p,o,-.15,.15,0,Math.min(.22,i-d-.01),-.02,.02),_t(p,a,-.13,.13,.015,Math.min(.2,i-d-.03),.02,.023,!1),p.position.set(f,d,u),p.rotation.y=-.6,n.add(p)}if(h>.04){_t(n,o,t/2-.5,t/2-.3,l,l+.035,e/2-.2,e/2-.06);let d=v(n,j(.08,Math.min(.12,h-.005),.05),o,t/2-.15,l,e/2-.12);d.rotation.x=-.3}},coolers(n,t,e,i,s){let r=ye.dark("coolerframe","#2a2c2f",.45),o=r,a=ye.glass(),l=Math.max(1,Math.round(t/.76)),c=t/l,f=.05;_t(n,r,-t/2,t/2,0,.12,-e/2,e/2),_t(n,r,-t/2,t/2,i-.16,i,-e/2,e/2),_t(n,r,-t/2,t/2,.12,i-.16,-e/2,-e/2+.03),_t(n,r,-t/2,-t/2+.03,.12,i-.16,-e/2,e/2),_t(n,r,t/2-.03,t/2,.12,i-.16,-e/2,e/2),_t(n,o,-t/2+.03,t/2-.03,.12,i-.16,-e/2+.03,-e/2+.035);let u=Math.max(2,Math.floor((i-.4)/.32)),h=(i-.28)/(u+0),d=new ci(1),p=St("coolerbottles",512,64,(g,m,_)=>{["#a8141a","#2f8a3a","#e8701c","#1d4f9a","#f2c21b","#e9f2f6","#4a2412","#7fd62a"].forEach((b,I)=>{g.fillStyle=b,g.fillRect(I*64,0,64,_),g.fillStyle="rgba(255,255,255,0.8)",g.fillRect(I*64,_*.35,64,_*.3),g.fillStyle="rgba(0,0,0,0.6)",g.fillRect(I*64+10,_*.45,44,6)})}),x=Z(.035,.035,.22,6);for(let g=0;g<u;g++){let m=.12+g*h;_t(n,r,-t/2+.03,t/2-.03,m,m+.015,-e/2+.03,e/2-f-.01);for(let _=0;_<l;_++){let y=-t/2+_*c+.08;for(let b=0;b<4;b++){if(s()>.55)continue;let I=Math.floor(s()*8),A=[I/8,0,(I+1)/8,1],T=s()<.15,P=new oe().compose(new N(y+b*(c-.16)/3,m+.015+(T?.035:0),e/2-f-.08-s()*.1),new xn().setFromEuler(new yn(T?Math.PI/2:0,s()*3,0)),new N(1,Math.min(1,(h-.04)/.22),1));d.add(x,P,[A,[.01,.01,.02,.02],[.01,.01,.02,.02]],[0])}}}for(let g of d.meshes([ae("fxbottles",{map:p,roughness:.3})]))n.add(g);for(let g=0;g<l;g++){let m=-t/2+g*c,_=m+c;_t(n,r,m,m+.04,.12,i-.16,e/2-f,e/2),_t(n,r,_-.04,_,.12,i-.16,e/2-f,e/2),_t(n,a,m+.04,_-.04,.12,i-.16,e/2-f+.02,e/2-f+.026);let y=g%2?m+.08:_-.08;_t(n,r,y-.012,y+.012,i*.35,i*.65,e/2-.022,e/2)}},rx_counter(n,t,e,i,s){let r=ye.laminate(ee(s,["#d8d4c8","#8a9aa8","#b8a890"])),o=ye.counterTop("#e0dcd0"),a=ae("fxbins",{map:St("rxbins",512,128,(p,x,g,m)=>{["#2a6fd6","#c4221c","#2f8a3a","#f2c21b"].forEach((y,b)=>{p.fillStyle=y,p.fillRect(b*128,0,128,g),p.fillStyle="#f4f2ec",p.fillRect(b*128+24,g*.35,80,30),qe(p,b*128+30,g*.35+8,68,2,8,m,"#333")}),Xn(p,x,g,m,1.2)}),roughness:.55}),l=.25;_t(n,r,-t/2,t/2,0,i-.03,e/2-l,e/2-.02),_t(n,o,-t/2,t/2,i-.03,i,e/2-l-.02,e/2);let c=Math.max(.7,i-.28);_t(n,r,-t/2,t/2,0,c-.03,-e/2,e/2-l),_t(n,o,-t/2,t/2,c-.03,c,-e/2,e/2-l);let f=j(.14,.09,.22),u=new ci(1),h=(p,x,g,m)=>{let _=Math.floor(s()*4),y=[_/4,0,(_+1)/4,1];u.add(f,new oe().compose(new N(p,x,g),new xn().setFromEuler(new yn(0,m,0)),new N(1,1,1)),[y,y,y,y,y,y],[0])},d=Math.floor((t-.1)/.16);for(let p=0;p<2;p++)for(let x=0;x<d;x++){if(s()<.3)continue;let g=c+p*.095;g+.09>i||h(-t/2+.09+x*.16,g,-e/2+.13+0,(s()-.5)*.08)}for(let p=0;p<2;p++){let x=.12+p*.3;_t(n,r,-t/2+.02,t/2-.02,x-.015,x,-e/2,e/2-l);for(let g=0;g<d;g++)s()<.55&&h(-t/2+.09+g*.16,x,-e/2+.12,(s()-.5)*.1)}for(let p of u.meshes([a]))n.add(p)},desk(n,t,e,i,s){let r=ye.wood(ee(s,["#6a4528","#9a7a5a","#4a4a4c"])),o=ye.laminate("#d8d4cc"),a=ye.dark("desk","#1d1e20",.45),l=Math.min(.75,i-.25),c=.05;_t(n,r,-t/2,t/2,0,i-.03,e/2-c,e/2),_t(n,o,-t/2,t/2,i-.03,i,e/2-.28,e/2);for(let h of[-1,1])_t(n,r,h<0?-t/2:t/2-.04,h<0?-t/2+.04:t/2,0,l,-e/2,e/2-c);_t(n,o,-t/2,t/2,l-.03,l,-e/2,e/2-c);let f=(s()-.5)*(t-.7),u=Math.min(.32,i-l-.02);if(u>.12){v(n,j(.2,.012,.15),a,f,l,-e/2+.25),v(n,j(.04,u*.4,.03),a,f,l,-e/2+.25);let h=new Gt;_t(h,a,-.26,.26,0,u*.75,-.02,.02,!1),h.position.set(f,l+u*.25,-e/2+.27),h.rotation.x=-.05,n.add(h)}v(n,j(.44,.02,.14),a,f,l,-e/2+.48>e/2-c-.08?e/2-c-.09:-e/2+.48,0,(s()-.5)*.2,0),v(n,j(.18,.05,.2),a,f+.45<t/2-.15?f+.45:f-.45,l,-e/2+.22);for(let h=0;h<4;h++)v(n,j(.216,.002,.28),o,(s()-.5)*(t-.4),l+.001+h*.002,(s()-.5)*.2-.05,0,s()*3,0)},bench(n,t,e,i,s){let r=ye.wood(ee(s,["#8a6440","#6a4a30"])),o=ye.dark("benchleg","#2a2c2e",.5),a=Math.min(.46,i),l=i>.65,c=l?e*.85:e,f=Math.max(2,Math.round(c/.11));for(let h=0;h<f;h++){let d=e/2-c+h*c/f+.008;_t(n,r,-t/2,t/2,a-.035,a,d,d+c/f-.016)}let u=Math.max(2,Math.ceil(t/1.2)+1);for(let h=0;h<u;h++){let d=-t/2+.08+h*(t-.16)/(u-1);_t(n,o,d-.025,d+.025,0,a-.035,e/2-c+.03,e/2-c+.07),_t(n,o,d-.025,d+.025,0,a-.035,e/2-.07,e/2-.03),_t(n,o,d-.025,d+.025,a-.08,a-.035,e/2-c+.03,e/2-.03),l&&_t(n,o,d-.025,d+.025,0,i-.02,-e/2,-e/2+.04)}if(l)for(let h=0;h<2;h++)_t(n,r,-t/2,t/2,i-.12-h*.14,i-.02-h*.14,-e/2+.04,-e/2+.075)},locker(n,t,e,i,s){let r=ee(s,["#4a5a6a","#6a7a5a","#8a8a86"]),o=ye.painted(r),a=ae("fxlockerdoor"+r,{map:St("fxlockerdoor"+r,128,512,(f,u,h,d)=>{_e(f,u,h,d,r,.05,1500,2),f.fillStyle="rgba(0,0,0,0.55)";for(let p of[.05,.85])for(let x=0;x<6;x++)f.fillRect(u*.25,h*p+x*9,u*.5,4);f.fillStyle="rgba(255,255,255,0.1)",f.fillRect(3,3,u-6,2),f.fillStyle="#d8d8d4",f.fillRect(u*.35,h*.28,u*.3,16),f.fillStyle="#c8ccd0",f.fillRect(u*.75,h*.45,10,46);for(let p=0;p<6;p++)f.fillStyle="rgba(110,60,30,0.5)",f.beginPath(),f.ellipse(d()*u,d()*h,1+d()*4,1+d()*8,0,0,Tt),f.fill();Xn(f,u,h,d,1.5)}),roughness:.45,metalness:.3}),l=Math.max(1,Math.round(t/.32)),c=t/l;_t(n,o,-t/2,t/2,0,i,-e/2,e/2-.02),_t(n,ye.dark("lockbase"),-t/2,t/2,0,.1,e/2-.02,e/2);for(let f=0;f<l;f++){let u=-t/2+f*c+.006;v(n,j(c-.012,i-.12-.01,.018),[o,o,o,o,a,o],u+(c-.012)/2,.11,e/2-.009)}},rack(n,t,e,i,s){let r=ye.painted("#2a4a8a"),o=ye.painted("#d8601c"),a=ye.wood("#a8845a"),l=ye.card(),c=Math.max(1,Math.round(t/2.7)),f=t/c;for(let d=0;d<=c;d++){let p=-t/2+d*f,x=Math.max(-t/2,Math.min(t/2-.08,p-.04));for(let _ of[-e/2,e/2-.08])_t(n,r,x,x+.08,0,i,_,_+.08);let g=e-.16,m=Math.atan2(g,.6);for(let _=0;_<Math.floor((i-.3)/.6);_++){let y=_%2?1:-1;v(n,rd(.03,Math.hypot(.6,g),.02),r,x+.04,.2+_*.6,-y*g/2,y*m,0,0)}}let u=Math.max(1,Math.floor((i-.2)/1.2)),h=(i-.12)/u;for(let d=0;d<=u;d++){let p=d===0?0:d*h;if(d>0)for(let g of[-e/2+.005,e/2-.065])_t(n,o,-t/2,t/2,p-.12,p,g,g+.06);if(d===u)break;let x=h-.18;for(let g=0;g<c;g++)for(let m=0;m<2;m++){if(s()<.25)continue;let _=-t/2+g*f+(m+.5)*f/2,y=Math.min(1.1,f/2-.1),b=Math.min(1,e-.1);_t(n,a,_-y/2,_+y/2,p,p+.13,-b/2,b/2);let I=s();if(I<.2)continue;let A=2,T=2,P=Math.min(.35,(x-.13)/2),E=Math.max(1,Math.floor((x-.13)*I/P));for(let M=0;M<A;M++)for(let U=0;U<T;U++)for(let B=0;B<E;B++){if(s()<.2)continue;let V=y/A-.02,H=b/T-.02,rt=_t(n,l,_-y/2+M*y/A+.01,_-y/2+M*y/A+.01+V,p+.13+B*P,p+.13+(B+1)*P-.005,-b/2+U*b/T+.01,-b/2+U*b/T+.01+H);rt.rotation.y=(s()-.5)*.06}}}}};function ku(n,t=!1){let e=ee(n,[["#7a1d1a","#22304a","#e8d8a0"],["#2f4a2a","#1a1a1a","#c8a24a"],["#4a5a7a","#e8e8e0","#1a2a4a"]]);return ae("fxplaid"+e.join()+t,{map:Vu(e[0],e[1],e[2]),roughness:.95,side:Le})}var od=Object.keys(pf);function ad(n,t=1,e=.6,i=.9,s=0){let r=pf[n]||pf.cabinet,o=t>=e,a=Math.max(t,e),l=Math.min(t,e),c=i,f=new Gt;r(f,a,l,c,ns(zs("fx"+n)^Math.imul((s|0)+11,2654435761)));let u=new Gt;u.add(f),o||(f.rotation.y=Math.PI/2);let h=Wu(u),d=new Un().setFromObject(h),p=d.max.x-d.min.x>t+1e-4?t/(d.max.x-d.min.x):1,x=d.max.z-d.min.z>e+1e-4?e/(d.max.z-d.min.z):1,g=d.max.y>i+1e-4?i/d.max.y:1;if(p!==1||g!==1||x!==1){h.scale.set(p,g,x),h.updateMatrixWorld(!0);let _=new Un().setFromObject(h);h.position.x-=Math.max(0,_.max.x-t/2)+Math.min(0,_.min.x+t/2),h.position.z-=Math.max(0,_.max.z-e/2)+Math.min(0,_.min.z+e/2)}let m=new Gt;return m.add(h),m.name="fixture:"+n,m.userData={kind:n,w:t,d:e,h:i,front:o?[0,0,1]:[1,0,0],height:i,radius:Math.hypot(t,e)/2},m}function Ho(n,t=!1){let e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new Ue,c=0;for(let f=0;f<n.length;++f){let u=n[f],h=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in u.attributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),h++}if(h!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,f),c+=d}}if(e){let f=0,u=[];for(let h=0;h<n.length;++h){let d=n[h].index;for(let p=0;p<d.count;++p)u.push(d.getX(p)+f);f+=n[h].attributes.position.count}l.setIndex(u)}for(let f in r){let u=ld(r[f]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+f+" attribute."),null;l.setAttribute(f,u)}for(let f in o){let u=o[f][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[f]=[];for(let h=0;h<u;++h){let d=[];for(let x=0;x<o[f].length;++x)d.push(o[f][x][h]);let p=ld(d);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+f+" morphAttribute."),null;l.morphAttributes[f].push(p)}}return l}function ld(n){let t,e,i,s=-1,r=0;for(let c=0;c<n.length;++c){let f=n[c];if(t===void 0&&(t=f.array.constructor),t!==f.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=f.itemSize),e!==f.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=f.normalized),i!==f.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=f.gpuType),s!==f.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=f.count*e}let o=new t(r),a=new Ze(o,e,i),l=0;for(let c=0;c<n.length;++c){let f=n[c];if(f.isInterleavedBufferAttribute){let u=l/e;for(let h=0,d=f.count;h<d;h++)for(let p=0;p<e;p++){let x=f.getComponent(h,p);a.setComponent(h+u,p,x)}}else o.set(f.array,l);l+=f.count*e}return s!==void 0&&(a.gpuType=s),a}var Sl=[{group:"Movement",keys:["KeyW","KeyA","KeyS","KeyD"],show:"W A S D",action:"move",label:"Walk (also arrow keys)",ready:!0},{group:"Movement",keys:["Space"],show:"Space",action:"jump",label:"Jump",ready:!0},{group:"Movement",keys:["ShiftLeft","ShiftRight"],show:"Shift (hold)",action:"sprint",label:"Sprint",ready:!0},{group:"Movement",keys:["ControlLeft","ControlRight"],show:"Ctrl (hold)",action:"crouch",label:"Crouch",ready:!0},{group:"Movement",keys:["KeyZ"],show:"Z",action:"stance",label:"Change stance: stand, crouch, prone",ready:!0},{group:"Movement",keys:["CapsLock"],show:"Caps Lock",action:"walktoggle",label:"Slow walk on / off",ready:!0},{group:"Movement",keys:[],show:"Mouse",action:"look",label:"Look (click the view first)",ready:!0},{group:"Interact",keys:["KeyE"],show:"E",action:"interact",label:"Take the item you look at (also doors, gates). Hold E: take all in reach",ready:!0},{group:"Interact",keys:["KeyF"],show:"F",action:"context",label:"Context: take the item, or items found before. Hold F: take all in reach",ready:!0},{group:"Interact",keys:["KeyL"],show:"L",action:"flashlight",label:"Flashlight on / off",ready:!0},{group:"Interact",keys:["Mouse1"],show:"Middle mouse",action:"ping",label:"Mark a spot on the floor",ready:!0},{group:"Interact",keys:["Mouse2"],show:"Right mouse (hold)",action:"aim",label:"Look closer (zoom)",ready:!0},{group:"Panels",keys:["Tab","KeyI"],show:"Tab / I",action:"inventory",label:"Inventory",ready:!0},{group:"Panels",keys:["KeyC"],show:"C",action:"character",label:"Character and vitals",ready:!0},{group:"Panels",keys:["KeyM"],show:"M",action:"map",label:"Floor plan of this building",ready:!0},{group:"Panels",keys:["KeyJ"],show:"J",action:"journal",label:"Journal",ready:!0},{group:"Panels",keys:["KeyO"],show:"O",action:"objectives",label:"Objectives",ready:!0},{group:"Panels",keys:["KeyK"],show:"K",action:"skills",label:"Skills",ready:!1},{group:"Panels",keys:["KeyP"],show:"P",action:"progression",label:"Character progression",ready:!1},{group:"Panels",keys:["KeyN"],show:"N",action:"crafting",label:"Crafting",ready:!1},{group:"Panels",keys:["KeyU"],show:"U",action:"perks",label:"Perks",ready:!1},{group:"Quick items",keys:["Digit5"],show:"5",action:"quick_med",label:"Medical item (bandage, pills)",ready:!0},{group:"Quick items",keys:["Digit6"],show:"6",action:"quick_stamina",label:"Stamina item",ready:!1},{group:"Quick items",keys:["Digit7"],show:"7",action:"quick_food",label:"Eat or drink (what you need most)",ready:!0},{group:"Quick items",keys:["Digit8"],show:"8",action:"quick_buff",label:"Stimulant",ready:!1},{group:"Quick items",keys:["Digit9"],show:"9",action:"quick_utility",label:"Utility: new batteries in the flashlight",ready:!0},{group:"Quick items",keys:["Digit0"],show:"0",action:"inventory",label:"Item list (opens the inventory)",ready:!0},{group:"Weapons (not yet)",keys:["Mouse0"],show:"Left mouse",action:"fire",label:"Fire",ready:!1},{group:"Weapons (not yet)",keys:["KeyR"],show:"R",action:"reload",label:"Reload",ready:!1},{group:"Weapons (not yet)",keys:["Digit1","Digit2","Digit3","Digit4"],show:"1 \u2013 4",action:"weapon",label:"Primary, secondary, sidearm, melee",ready:!1},{group:"Weapons (not yet)",keys:["Wheel"],show:"Mouse wheel",action:"cycle",label:"Change weapon",ready:!1},{group:"Weapons (not yet)",keys:["KeyG"],show:"G",action:"grenade",label:"Throw",ready:!1},{group:"Weapons (not yet)",keys:["KeyV"],show:"V",action:"melee",label:"Melee",ready:!1},{group:"Weapons (not yet)",keys:["KeyQ"],show:"Q",action:"tactical",label:"Tactical ability",ready:!1},{group:"Weapons (not yet)",keys:["KeyT"],show:"T",action:"equipment",label:"Tactical equipment",ready:!1},{group:"Weapons (not yet)",keys:["KeyB"],show:"B",action:"inspect",label:"Inspect weapon",ready:!1},{group:"Weapons (not yet)",keys:["KeyH"],show:"H",action:"holster",label:"Holster",ready:!1},{group:"Weapons (not yet)",keys:["KeyX"],show:"X",action:"special",label:"Special ability",ready:!1},{group:"Game",keys:["Escape"],show:"Esc",action:"pause",label:"Pause menu (and this key list)",ready:!0},{group:"Game",keys:["Enter","NumpadEnter"],show:"Enter",action:"confirm",label:"Confirm",ready:!0},{group:"Game",keys:["F5"],show:"F5",action:"quicksave",label:"Quick save",ready:!0},{group:"Game",keys:["F9"],show:"F9",action:"quickload",label:"Quick load (last save)",ready:!0},{group:"Game",keys:["F3","Backquote"],show:"F3",action:"debug",label:"Diagnostics (FPS, frame time, draw calls, memory)",ready:!0}];var cd=new Map;for(let n of Sl)for(let t of n.keys)cd.set(t,n);function Wr(n){return cd.get(n)||null}var Go={stand:{eye:1.62,speed:2.6},crouch:{eye:1.05,speed:1.3},prone:{eye:.4,speed:.6}},a_=4.4,l_=1.3,fd=3.6,hd=9.8,ud=700;function dd({stance:n,sprint:t,slowWalk:e}){return n!=="stand"?Go[n].speed:t?a_:e?l_:Go.stand.speed}function gf(n){return n==="stand"?"crouch":n==="crouch"?"prone":"stand"}var c_=7328742,f_=typeof navigator<"u"&&/Mac/.test(navigator.platform||""),h_=30,is=n=>String(n).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]);var u_={shelf:8226704,rack:12610091,clothes:7040883,checkout:4936796,coolers:10134440,rx_counter:14210248,gate:9213083,bed:10135213,cabinet:9341568,fridge:14277339,counter:8022616,sofa:5991006,tub:15329764,locker:7175046,dresser:7232069,cart:11581114,table:7034433,bench:6050634,desk:6975348},El=[11682863,13935931,4157342,6262602,14998992,9064317,13070394,3104090,10394252,14139996];function d_(n){let{plan:t}=n,e=document.createElement("div");e.id="inside",e.innerHTML=`
    <canvas></canvas>
    <div class="in-top corners">
      <div class="in-title">${is(n.title)}</div>
      <div class="in-sub">${is(n.subtitle||"")}</div>
      <div class="in-status"></div>
    </div>
    <div class="in-cross"></div>
    <div class="in-prompt" hidden></div>
    <div class="in-notice" hidden></div>
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
        <h3>${is(n.title)}</h3>
        <p class="hint">Game time moves only when you walk or search. It is stopped now.</p>
        <div class="row"><button class="primary" data-in="resume">Resume</button>
        <button data-in="leave">Leave the building</button></div>
        <h4>Keys</h4>
        <div class="in-keys">${__()}</div>
      </div>
    </div>`,document.body.appendChild(e);let i=w=>e.querySelector(w),s=i("canvas"),r=matchMedia("(pointer: coarse)").matches;e.classList.toggle("is-touch",r);let o=new Ga({canvas:s,antialias:!r});o.setPixelRatio(Math.min(devicePixelRatio||1,r?1.5:2)),o.outputColorSpace=$e;let a=new Cr,l=new Mn(72,1,.05,80);a.add(l);let{w:c,d:f,h:u}=t.size,h=n.dark,d=h?329482:2765112;a.background=new Jt(d),a.fog=new Rr(d,.035);let p=rf(),x=Eu(o,a,l,{dark:h,night:!!n.night,quality:p,flashlight:n.hasFlashlight()}),g=x.flashlight,m=Ro(Gn(`look:${n.title}`));function _(){g&&(g.setOn(n.isLightOn()),n.lightHours&&g.setPower(Math.min(1,n.lightHours()/2)))}_();let b=typeof location<"u"&&(/[?&]grime=(low|medium|high)\b/.exec(location.search||"")||[])[1]||nf(t.cat,{exposed:!!t.exposed}),I=w=>sf(t.cat,w,null,p,b),A=new Xt(new Fe(c,f),I("floor"));A.rotation.x=-Math.PI/2,A.position.set(0,0,-f/2),A.receiveShadow=!0,a.add(Lo(A));let T=new Xt(new Fe(c,f),I("ceiling"));if(T.rotation.x=Math.PI/2,T.position.set(0,u,-f/2),a.add(Lo(T)),t.kind==="hall"&&t.cat!=="hardware"&&t.cat!=="outdoor"){let w=[],O=u-.01;for(let ft=-c/2;ft<=c/2+1e-6;ft+=1.2)w.push(ft,O,0,ft,O,-f);for(let ft=0;ft>=-f-1e-6;ft-=.6)w.push(-c/2,O,ft,c/2,O,ft);let G=new Ue;G.setAttribute("position",new he(w,3)),a.add(new Ns(G,new Ls({color:h?3817285:9278103,fog:!0})));let q=new _n({color:328965}),wt=[],mt=Math.round(c*f/40);for(let ft=0;ft<mt;ft++){let Ct=new Fe(1.2,.6);Ct.rotateX(Math.PI/2),Ct.translate(-c/2+.6+Math.floor(m()*(c/1.2-1))*1.2,u-.02,-.3-Math.floor(m()*(f/.6-1))*.6),wt.push(Ct)}wt.length&&a.add(new Xt(Ho(wt),q))}{let w=[];for(let G=-3;G>-f+1;G-=5)for(let q=-c/2+3;q<c/2-1;q+=6)w.push([q,G]);(t.cat==="house"||t.kind!=="hall")&&w.splice(0,w.length,...w.filter((G,q)=>q%2===0));let O=h?1+Math.floor(m()*2):0;w.forEach(([G,q],wt)=>{let mt=m(),ft=O>0&&mt<.18?(O--,"emergency"):t.cat!=="house"&&mt>.86?"flicker":"dead";x.addCeilingLight(G,u,q,ft),wt===w.length-1&&O>0&&x.addCeilingLight(G,u,q-1.5,"emergency")})}let P=I("wall");for(let w of t.walls){let O=new Xt(new we(w.w,u,w.d),P);O.position.set(w.x,u/2,w.z),O.receiveShadow=!0,a.add(Lo(O))}x.addRoomShade(-c/2,c/2,-f,0);let E=new Xt(new we(2,u-2.2,.2),P);if(E.position.set(0,2.2+(u-2.2)/2,0),a.add(Lo(E)),x.addDoorLight(0,0,!!n.night,{width:1.8,height:2.2}),h&&!n.night&&t.kind==="hall"){let w=c>20?3:2;for(let O=0;O<w;O++){let G=new ks(13226974,14,f*1.1,1.1);G.position.set(w===1?0:-c/3+O*(2*c/3)/(w-1),u-.6,-1.2),a.add(G)}}t.cat!=="house"&&x.addExitSign(0,Math.min(u-.25,2.55),-.14,Math.PI),x.addDust({minX:-c/2+.3,maxX:c/2-.3,minY:.1,maxY:u-.2,minZ:-f+.3,maxZ:-.3});{let w=t.cat==="house"?["note","evac"]:t.cat==="clinic"||t.cat==="hospital"?["quarantine","mask","staff"]:["closed","mask","quarantine","poster"],O=t.cat==="house"?1:2;for(let q=0;q<O;q++){let wt=q%2?1:-1;x.addWallNotice(wt*(1.5+m()*1.2),1.35+m()*.3,-.13,Math.PI,w[Math.floor(m()*w.length)])}let G=Math.min(28,Math.round(c*f/(t.cat==="house"?24:50)));for(let q=0;q<G;q++){let wt=m(),mt=wt<.45?"dirt":wt<.7?"paper":wt<.82?"water":wt<.92?"leaves":"snow",ft=(m()-.5)*(c-1),Ct=-.5-m()*(mt==="snow"||mt==="leaves"?4:f-1);x.addDecal(ft,Ct,mt,.6+m()*1.4,m()*Math.PI)}t.windows==="front"&&m()<.7&&x.addBrokenGlass((m()<.5?-1:1)*(3+m()*(c/2-5)),-.8,1.3)}let M=new Xt(new Fe(6,4),new _n({color:n.night?1713203:14673644}));M.position.set(0,2,2.5),M.rotation.y=Math.PI,a.add(M);let U=new Xt(new Fe(6,3),new _n({color:n.night?3819094:16054008}));if(U.rotation.x=-Math.PI/2,U.position.set(0,.01,1.4),a.add(U),t.windows==="front"){let w=new _n({color:n.night?1450028:12964830,transparent:!0,opacity:.85});for(let O of[-1,1]){let G=c/2-2,q=new Xt(new Fe(G,1.8),w);q.position.set(O*(1+G/2+.5),1.6,-.12),a.add(q)}}let B=new Gt;a.add(B);let V={},H=w=>V[w]||(V[w]=new Ke({color:u_[w]??8947848,roughness:.8,metalness:w==="shelf"||w==="gate"||w==="locker"?.35:.05})),rt=[],$=[],pt=h||n.night?13:20,Q={supermarket:"grocery",pharmacy:"pharmacy",hardware:"hardware",outdoor:"outdoor",convenience:"convenience",gas:"convenience"}[t.cat]||"grocery",vt=null;for(let w of t.fixtures){if(w.type==="gate"){let G=new Gt,q=Math.floor(w.w/.15);for(let wt=0;wt<=q;wt++){let mt=new Xt(new we(.03,w.h,.03),H("gate"));mt.position.set(w.x-w.w/2+wt*.15,w.h/2,w.z),G.add(mt)}vt=G,G.visible=!n.counterOpen,a.add(G);continue}if(w.type==="shelf"||w.type==="rack"||w.type==="clothes"){let G=b_(w,H(w.type));if(G.traverse(q=>{q.isMesh&&(q.castShadow=!0,q.receiveShadow=!0)}),w.tipped){G.rotation.z=.16*(w.x>0?1:-1);for(let q=0;q<14;q++){let wt=new Xt(new we(.22,.26,.24),new Ke({color:El[q%El.length],roughness:.7}));wt.position.set(w.x+(q%2?1:-1)*(.7+q%3*.25),.12,w.z-w.d/2+q*7%13/13*w.d),wt.rotation.set(0,q,q%2?Math.PI/2:0),B.add(wt)}}if(B.add(G),!w.tipped&&w.type!=="clothes")for(let q of[-1,1]){let wt=q<0?w.leftZone:w.rightZone;wt!=null&&$.push({f:w,side:q,zone:wt,group:null,done:null})}else if(!w.tipped){let q=[1.25];for(let wt of q)for(let mt=-w.d/2+.3;mt<w.d/2-.2;mt+=.34)for(let ft of[-1,1]){let Ct=ft<0?w.leftZone:w.rightZone;Ct!=null&&rt.push({x:w.x+ft*.27,y:wt,z:w.z+mt,zone:Ct,clothes:w.type==="clothes"})}}continue}if(w.type==="endcap"){let G=nd(Q,w.w,w.h,Math.max(.05,n.stock*.5),Gn(`${n.title}:end:${w.x.toFixed(2)}`),w.d);G.position.set(w.x,0,w.z),G.traverse(q=>{q.isMesh&&(q.receiveShadow=!0)}),B.add(G);continue}if(od.includes(w.type)){let G=ad(w.type,w.w,w.d,w.h,Gn(`${n.title}:${w.type}:${w.x.toFixed(2)}:${w.z.toFixed(2)}`)),q=w.zone!=null?t.spots.find(Ct=>Ct.zone===w.zone):null,wt=q?q.x-w.x:0,mt=q?q.z-w.z:1,ft=w.w>=w.d?mt:wt;G.position.set(w.x,0,w.z),ft<0&&(G.rotation.y=Math.PI),G.traverse(Ct=>{Ct.isMesh&&(Ct.castShadow=!0,Ct.receiveShadow=!0)}),B.add(G);continue}if(w.type==="bed"){let G=new Gt,q=new Xt(new we(w.d,.45,w.w),H("bed"));q.position.y=.225;let wt=new Xt(new we(w.d*.95,.15,w.w*.95),new Ke({color:14080210,roughness:1}));wt.position.y=.52,G.add(q,wt),G.position.set(w.x,0,w.z),G.rotation.y=Math.PI/2,B.add(G);continue}let O=new Xt(new we(w.w,w.h,w.d),H(w.type));if(O.position.set(w.x,w.h/2,w.z),O.castShadow=!0,O.receiveShadow=!0,B.add(O),w.type==="coolers"){let G=new Xt(new Fe(w.w,w.h*.75),new Ke({color:2306091,roughness:.2,metalness:.4}));G.position.set(w.x,w.h*.55,w.z+w.d/2+.01),a.add(G)}}let Lt=new we(.22,.26,.24),Bt=new Ke({roughness:.7}),se=new Wa(Lt,Bt,Math.max(1,rt.length)),be=new oe,ot=new Jt,yt=11,Vt=()=>(yt=yt*16807%2147483647)/2147483647,At=rt.map(()=>Vt());rt.forEach((w,O)=>{ot.setHex(El[Math.floor(Vt()*El.length)]),w.clothes&&ot.multiplyScalar(.7),se.setColorAt(O,ot)}),a.add(se);function ne(w,O){w.group&&(a.remove(w.group),w.group.traverse(ft=>{ft.isMesh&&ft.geometry.dispose()}));let{f:G,side:q}=w,wt=Math.max(.03,n.stock*(O?.12:.6)),mt=ed(Q,G.d-.1,[.12,.62,1.12,1.57],wt,Gn(`${n.title}:${G.x}:${G.z}:${q}`));mt.position.set(G.x+q*.05,0,G.z),mt.rotation.y=q>0?0:Math.PI,mt.traverse(ft=>{ft.isMesh&&(ft.receiveShadow=!0)}),a.add(mt),w.group=mt,w.done=O}function le(){for(let O of $){let G=!!n.isDone(O.zone);O.done!==G&&ne(O,G)}let w=n.stock;rt.forEach((O,G)=>{let q=n.isDone(O.zone)?w*.12:w*.85,wt=At[G]<q;be.makeScale(wt?1:0,wt?O.clothes?3:1:0,wt?1:0),be.setPosition(O.x,O.y+(O.clothes?0:.13),O.z),se.setMatrixAt(G,be)}),se.count=rt.length,se.instanceMatrix.needsUpdate=!0,se.instanceColor&&(se.instanceColor.needsUpdate=!0)}le();let ie={box:new Ke({color:10255186,roughness:1}),can:new Ke({color:9212310,roughness:.5,metalness:.5}),paper:new Ke({color:14276300,roughness:1,side:Le}),cart:new Ls({color:10331306})};for(let w of t.debris){let O,G=Gn(`${n.title}:d:${w.x.toFixed(2)}:${w.z.toFixed(2)}`);if(w.kind==="box"){O=Si(w.s>.35?"box_stack":"cardboard_box",G),O.position.set(w.x,0,w.z),O.rotation.y=w.rot||0,B.add(O);continue}if(w.kind==="cart"){O=Si(m()<.7?"shopping_cart":"basket",G),O.position.set(w.x,0,w.z),O.rotation.set(0,w.rot||0,0),B.add(O);continue}if(w.kind==="paper"){O=Si("paper_scatter",G),O.position.set(w.x,0,w.z),O.rotation.y=w.rot||0,B.add(O);continue}if(w.kind==="box")O=new Xt(new we(w.s*1.4,w.s,w.s),ie.box);else if(w.kind==="can")O=new Xt(new Qi(.04,.04,.12,8),ie.can),O.rotation.z=Math.PI/2;else if(w.kind==="cart"){O=new Gt;let q=new Ns(new Lr(new we(.55,.45,.85)),ie.cart);q.position.y=.2,O.add(q);for(let[wt,mt]of[[-.22,-.35],[.22,-.35],[-.22,.35],[.22,.35]]){let ft=new Ns(new Lr(new we(.02,.45,.02)),ie.cart);ft.position.set(wt,-.25,mt),O.add(ft)}}else O=new Xt(new Fe(.3,.22),ie.paper),O.rotation.x=-Math.PI/2;O.position.set(w.x,w.kind==="paper"?.01:w.kind==="cart"?.45:(w.s||.1)/2,w.z),O.rotation.y=w.rot||0,B.add(O)}{let w=Co(t,{counter:!0}),O=[],G=(mt,ft,Ct)=>!w.some(Qt=>Math.abs(mt-Qt.x)<Qt.w/2+Ct&&Math.abs(ft-Qt.z)<Qt.d/2+Ct)&&!(Math.abs(mt)<1.6&&ft>-3)&&!O.some(Qt=>Math.hypot(Qt[0]-mt,Qt[1]-ft)<Qt[2]+Ct)&&mt>-c/2+Ct&&mt<c/2-Ct&&ft<-Ct&&ft>-f+Ct,q=(mt,ft=!1,Ct=null)=>{if(!Ml.includes(mt))return null;let Qt=Si(mt,Math.floor(m()*1e6)),Ee=Math.min(1.2,(Qt.userData.radius||.3)+.1),je=mt==="rug"||mt==="paper_scatter"||mt==="clothes_pile",ze=Ct||{x1:-c/2,x2:c/2,z1:-f,z2:0};for(let dn=0;dn<30;dn++){let xe=ze.x1+Ee+m()*Math.max(0,ze.x2-ze.x1-2*Ee);ft&&(xe=m()<.5?ze.x1+Ee+.05:ze.x2-Ee-.05);let Re=ze.z1+Ee+m()*Math.max(0,ze.z2-ze.z1-2*Ee);if(je&&Ct){if(!(xe>-c/2+Ee&&xe<c/2-Ee&&Re<-Ee&&Re>-f+Ee))continue;return Qt.position.set(xe,0,Re),Qt.rotation.y=m()*Math.PI,B.add(Qt),Qt}if(G(xe,Re,Ee))return Qt.position.set(xe,0,Re),Qt.rotation.y=ft?(xe>(ze.x1+ze.x2)/2?-Math.PI/2:Math.PI/2)+(m()-.5)*.3:m()*Math.PI*2,Qt.traverse(nn=>{nn.isMesh&&(nn.castShadow=Ee>.25,nn.receiveShadow=!0)}),B.add(Qt),O.push([xe,Re,Ee]),Qt}return null},wt={supermarket:[["basket",3],["trash_bag",3],["wet_floor_sign",1],["mop_bucket",1],["pallet",1,!0],["box_stack",2,!0],["trash_pile",1,!0]],convenience:[["trash_bag",1],["basket",1],["cardboard_box",2]],gas:[["trash_bag",1],["traffic_cone",1],["cardboard_box",2]],pharmacy:[["basket",2],["trash_bag",1],["wet_floor_sign",1],["box_stack",1,!0]],hardware:[["pallet",2,!0],["box_stack",2,!0],["traffic_cone",2],["trash_bag",1]],outdoor:[["box_stack",2,!0],["trash_bag",1],["basket",1]],clinic:[["iv_stand",2,!0],["wheelchair",1,!0],["office_chair",2],["medical_cart",1,!0],["trash_bag",1]],hospital:[["gurney",2,!0],["iv_stand",3,!0],["wheelchair",2,!0],["medical_cart",2,!0],["office_chair",1],["trash_pile",1,!0]],fire:[["helmet_rack",1,!0],["hose_reel",1,!0],["locker_row",1,!0],["traffic_cone",2],["fire_extinguisher",1,!0]],house:[["rug",2],["lamp",1,!0],["potted_plant_dead",1,!0],["chair",2],["tv",1,!0],["bookshelf",1,!0],["trash_bag",1],["cardboard_box",1]]};if(t.cat==="house"){let mt={kitchen:[["trash_bag",1],["paper_scatter",1],["chair",1]],"living room":[["rug",1],["tv",1,!0],["lamp",1,!0],["potted_plant_dead",1,!0],["bookshelf",1,!0],["kids_toy",1],["clothes_pile",1],["paper_scatter",1],["shoes",1]],bedroom:[["rug",1],["lamp",1,!0],["clothes_pile",2],["shoes",1],["cardboard_box",1]],bathroom:[["clothes_pile",1],["trash_bag",1]],"second bedroom":[["rug",1],["kids_toy",2],["clothes_pile",1],["shoes",1]],garage:[["box_stack",1,!0],["cardboard_box",2],["trash_bag",1],["traffic_cone",1]]},ft={kitchen:["wall_clock","curtain"],"living room":["wall_frame","wall_frame","curtain"],bedroom:["wall_frame","curtain"],"second bedroom":["wall_frame","curtain"],bathroom:[],garage:[]};for(let Ct of t.spots){if(!Ct.area)continue;let Qt={x1:Ct.area.x1,x2:Ct.area.x2,z1:Math.min(Ct.area.z1,Ct.area.z2),z2:Math.max(Ct.area.z1,Ct.area.z2)};for(let[Ee,je,ze]of mt[Ct.label]||[])for(let dn=0;dn<je;dn++)q(Ee,!!ze,Qt);(ft[Ct.label]||[]).forEach((Ee,je)=>{if(!Ml.includes(Ee))return;let ze=Si(Ee,Math.floor(m()*1e6)),dn=je%2===0,xe=Qt.x1+.6+m()*Math.max(0,Qt.x2-Qt.x1-1.2);ze.position.set(xe,Ee==="curtain"?.9:1.45,dn?Qt.z1+.09:Qt.z2-.09),ze.rotation.y=dn?0:Math.PI,B.add(ze)})}for(let Ct of t.fixtures)if(Ct.type==="table")for(let[Qt,Ee]of[["mail_pile",-.25],["dish_stack",.25]]){if(!Ml.includes(Qt)||m()<.3)continue;let je=Si(Qt,Math.floor(m()*1e6));je.position.set(Ct.x+Ee,Ct.h,Ct.z+(m()-.5)*.4),je.rotation.y=m()*Math.PI,B.add(je)}}else for(let[mt,ft,Ct]of wt[t.cat]||wt.house)for(let Qt=0;Qt<ft;Qt++)q(mt,!!Ct);for(let mt of t.fixtures){if(mt.type==="checkout"){let ft=Si("register",Math.floor(mt.x*100));ft.position.set(mt.x,mt.h,mt.z-mt.d/4),ft.rotation.y=Math.PI/2,B.add(ft)}if(mt.type==="counter"&&t.cat==="house"){let ft=Si("kitchen_counter_items",Math.floor(mt.z*100));ft.position.set(mt.x,mt.h,mt.z),B.add(ft)}}}let Se=new Ke({color:13620175,roughness:1});for(let w of t.bodies){let O=new Gt,G=new Xt(new we(.42,.2,1.3),Se);G.position.set(0,.1,.1);let q=new Xt(new ts(.15,10,8),Se);q.scale.set(1,.7,1.1),q.position.set(0,.12,-.72),O.add(G,q),O.position.set(w.x,w.y||0,w.z),O.rotation.y=(w.rot||0)+Math.PI/2,B.add(O)}y_(B),m_(x.group);let ht=new Map,W=()=>Co(t,{counter:!0});function L(w){let O=Ro(Gn(`place:${w.pid}:${n.title}`)),G=t.spots.find(ft=>ft.zone===w.zone);if(!G)return{x:0,y:0,z:-1};if(G.counter){let ft=t.fixtures.find(Ct=>Ct.type==="rx_counter");return{x:ft.x+(O()-.5)*(ft.w-1),y:ft.h,z:ft.z+(O()-.5)*.4}}let q=G.area;if(t.kind==="hall"){if(O()<.2)return{x:G.x+(O()-.5)*1.2,y:0,z:q.z1+1+O()*(q.z2-q.z1-2)};let ft=O()<.5?-1:1,Ct=[.12,.62,1.12,1.57];return{x:G.x+ft*((q.x2-q.x1)/2+.06),y:Ct[Math.floor(O()*Ct.length)],z:q.z1+1+O()*(q.z2-q.z1-2)}}let wt=t.fixtures.filter(ft=>ft.zone===w.zone&&ft.solid&&ft.h<=1.2&&ft.type!=="tub");if(wt.length&&O()<.7){let ft=wt[Math.floor(O()*wt.length)],Ct=ft.type==="bed"?ft.d:ft.w,Qt=ft.type==="bed"?ft.w:ft.d;return{x:ft.x+(O()-.5)*Math.max(0,Ct-.4),y:ft.h+(ft.type==="bed"?.15:0),z:ft.z+(O()-.5)*Math.max(0,Qt-.4)}}let mt=W();for(let ft=0;ft<12;ft++){let Ct=q.x1+.5+O()*(q.x2-q.x1-1),Qt=q.z1+.5+O()*(q.z2-q.z1-1);if(!mt.some(Ee=>Math.abs(Ct-Ee.x)<Ee.w/2+.2&&Math.abs(Qt-Ee.z)<Ee.d/2+.2))return{x:Ct,y:0,z:Qt}}return{x:G.x,y:0,z:G.z}}let X=1500,J=n.notice?n.notice():{countRadius:0,boxCount:!1,lootGlow:0},tt=new Map,at=w=>w.zone!==Et()&&Gn(`${w.pid}:box`)%10<3;function Et(){let w=t.spots.find(O=>O.counter);return w?w.zone:-1}function gt(w){let O=Ro(Gn(`box:${w}:${n.title}`)),G=t.spots.find(mt=>mt.zone===w),q=G&&G.area;if(!q)return null;let wt=W();for(let mt=0;mt<16;mt++){let ft=t.kind==="hall"?G.x+(O()-.5)*Math.max(.2,q.x2-q.x1-1.4):q.x1+.5+O()*(q.x2-q.x1-1),Ct=q.z1+.8+O()*(q.z2-q.z1-1.6);if(!wt.some(Qt=>Math.abs(ft-Qt.x)<Qt.w/2+.3&&Math.abs(Ct-Qt.z)<Qt.d/2+.3))return{x:ft,z:Ct,rot:O()*Math.PI}}return null}function C(w){let O=`c${w}`;if(tt.has(O))return tt.get(O);let G=gt(w);if(!G)return tt.set(O,null),null;let q=Si("cardboard_box",Gn(`${O}:${n.title}`));q.position.set(G.x,0,G.z),q.rotation.y=G.rot,a.add(q);let wt=q.userData.height||.35,mt={cid:O,zone:w,obj:q,x:G.x,y:wt/2,z:G.z,r:q.userData.radius||.3,opened:n.isOpened(O),container:!0};return mt.opened&&D(mt),tt.set(O,mt),mt}function S(w){if(!J.boxCount)return"look inside";let O=n.items().filter(G=>G.zone===w.zone&&at(G)).length;return O?`something inside: ${O} item${O>1?"s":""}`:"it sounds empty"}function D(w){w.obj.scale.y=.85,w.obj.rotation.z=.06}function et(){for(let w of n.items()){if(ht.has(w.pid))continue;let O=null;if(at(w)){let mt=C(w.zone);if(mt&&!mt.opened)continue;if(mt){let ft=Gn(w.pid)%360;O={x:mt.x+Math.cos(ft)*(mt.r+.15),y:0,z:mt.z+Math.sin(ft)*(mt.r+.15)}}}O=O||L(w);let G=qu(w.item,Gn(w.pid));G.position.set(O.x,O.y,O.z),G.rotation.y=Gn(w.pid)%628/100;let q=.32+.18*J.lootGlow;G.traverse(mt=>{if(!mt.isMesh||!mt.material)return;let ft=Ct=>{if(!Ct.emissive)return Ct;let Qt=Ct.clone();return Qt.map?(Qt.emissiveMap=Qt.map,Qt.emissive.setRGB(q,q,q)):Qt.emissive.copy(Qt.color).multiplyScalar(q),Qt};mt.material=Array.isArray(mt.material)?mt.material.map(ft):ft(mt.material)}),a.add(G);let wt=G.userData.height||.2;ht.set(w.pid,{it:w,obj:G,x:O.x,y:O.y+wt/2,z:O.z,r:G.userData.radius||.15})}}et();function dt(w){let O=ht.get(w);O&&(a.remove(O.obj),ht.delete(w))}let lt=new Ls({color:c_,transparent:!0,opacity:.9,depthTest:!1}),Wt=new Ns(new Lr(new we(1,1,1)),lt);Wt.renderOrder=10,Wt.visible=!1,a.add(Wt);let Ot=2.3;function Ht(w,O){let G=O.x-w.x,q=O.y-w.y,wt=O.z-w.z,mt=Math.max(0,1-.25/Math.max(.25,Math.hypot(G,q,wt)));for(let ft of Co(t,{counter:n.isCounterOpen()})){let Ct=[ft.x-ft.w/2+.02,0,ft.z-ft.d/2+.02],Qt=[ft.x+ft.w/2-.02,(ft.h||9)-.02,ft.z+ft.d/2-.02],Ee=[w.x,w.y,w.z],je=[G,q,wt],ze=0,dn=mt,xe=!0;for(let Re=0;Re<3&&xe;Re++){if(Math.abs(je[Re])<1e-9){(Ee[Re]<Ct[Re]||Ee[Re]>Qt[Re])&&(xe=!1);continue}let nn=(Ct[Re]-Ee[Re])/je[Re],zn=(Qt[Re]-Ee[Re])/je[Re];nn>zn&&([nn,zn]=[zn,nn]),ze=Math.max(ze,nn),dn=Math.min(dn,zn),ze>dn&&(xe=!1)}if(xe)return!0}return!1}function pe(w){let O=[];for(let G of ht.values()){let q=Math.hypot(G.x-w.x,G.y-w.y,G.z-w.z);q<=Ot&&!Ht(w,G)&&O.push({o:G,d:q})}return O.sort((G,q)=>G.d-q.d)}function Mt(w,O){let G=null,q=[...tt.values()].filter(wt=>wt&&!wt.opened).map(wt=>({o:wt,d:Math.hypot(wt.x-w.x,wt.y-w.y,wt.z-w.z)})).filter(wt=>wt.d<=Ot&&!Ht(w,wt.o));for(let{o:wt,d:mt}of[...pe(w),...q]){let ft=wt.x-w.x,Ct=wt.y-w.y,Qt=wt.z-w.z,Ee=(ft*O.x+Ct*O.y+Qt*O.z)/Math.max(1e-6,mt),je=Math.acos(Math.min(1,Ee)),ze=Math.atan2(wt.r+.12,mt);je>Math.max(ze,.09)||(!G||je<G.ang)&&(G={o:wt,ang:je,d:mt})}return G?G.o:null}let Pt={x:t.start.x,z:t.start.z},jt=t.start.yaw||0,fe=0,zt=0,ve=0,$t="stand",Ne=!1,k=!1,Nt=!1,st=Go.stand.eye,ct=new Set,It=!1,Ut=!1,ce=!1,Ve=0,Xe=null,ue=null,En=!1,$n={acc:{game:0,look:0,cull:0,render:0},n:0,worst:0,last:0,mb:0,mbAt:-1e9,sample(w,O){for(let ft in O)this.acc[ft]+=O[ft];this.n+=1,this.worst=Math.max(this.worst,w*1e3);let G=performance.now();if(G-this.last<250)return;this.last=G,G-this.mbAt>2e3&&(this.mb=p_(a),this.mbAt=G);let q=ft=>(this.acc[ft]/Math.max(1,this.n)).toFixed(1),wt=1e3/Math.max(1,xs),mt=o.info;i(".in-debug").textContent=[`${xs.toFixed(0)} fps  ${wt.toFixed(1)} ms (worst ${this.worst.toFixed(0)})  budget 33.3 ms  q:${p}`,`game ${q("game")}  light ${q("look")}  cull ${q("cull")}  render ${q("render")} ms (CPU)`,`${mt.render.calls} calls  ${(mt.render.triangles/1e3).toFixed(0)}k tris  ${mt.memory.geometries} geo  ${mt.memory.textures} tex  ~${this.mb.toFixed(0)} MB`,`x ${Pt.x.toFixed(1)}  z ${Pt.z.toFixed(1)}  yaw ${(jt*57.3%360).toFixed(0)}\xB0  ${$t}  ${ht.size} items`].join(`
`),this.acc={game:0,look:0,cull:0,render:0},this.n=0,this.worst=0}},xs=0,an={x:0,y:0,id:null,ox:0,oy:0},qn=null,ss=null,Xr=0,un=null,Zn=0;function Hs(){let w=e.clientWidth,O=e.clientHeight;o.setSize(w,O,!1),l.aspect=w/O,l.updateProjectionMatrix()}Hs(),window.addEventListener("resize",Hs);function Ei(){i(".in-status").innerHTML=n.getStatus()}Ei();function Je(w,O=2600){let G=i(".in-toast");G.textContent=w,G.hidden=!1,clearTimeout(Je.h),Je.h=setTimeout(()=>{G.hidden=!0},O)}function Gs(w){let O=i(".in-found");if(!w){O.hidden=!0;return}let G=w.items.length?`<ul>${w.items.map(q=>`<li>${is(q)}</li>`).join("")}</ul>`:'<p class="hint">Nothing useful here.</p>';O.innerHTML=`<h4>${is(w.title)}</h4>${G}
      <p class="hint">${is(w.note||"")}</p>
      <div class="row">${w.canTake?'<button class="primary" data-in="take">Take all that fits (F)</button>':""}<button data-in="close">Close</button></div>`,O.hidden=!1}let ys=()=>!i(".in-found").hidden;function ni(){let w=i(".in-stance"),O=[];$t!=="stand"&&O.push($t==="crouch"?"Crouching":"Prone"),k&&$t==="stand"&&O.push("Slow walk"),Nt&&O.push("Looking closer"),w.hidden=!O.length,w.textContent=O.join(" \xB7 ")}function Vo(w){let O=i(".in-panel");if(ue===w){R();return}let G;w==="map"?G=K():G=n.panel(w),G&&(ue=w,ct.clear(),O.innerHTML=`${G}<div class="row"><button data-in="closepanel">Close</button></div>`,O.hidden=!1,document.pointerLockElement===s&&document.exitPointerLock())}function R(){ue=null,i(".in-panel").hidden=!0}function z(){if(ue&&ue!=="map"){let w=ue;ue=null,Vo(w)}}function K(){let O=c+2,G=f+1*2+1.5,q=Ce=>(Ce+c/2+1).toFixed(2),wt=Ce=>(Ce+f+1).toFixed(2),mt=(Ce,Vs)=>`<rect class="${Vs}" x="${q(Ce.x-Ce.w/2)}" y="${wt(Ce.z-Ce.d/2)}" width="${Ce.w.toFixed(2)}" height="${Ce.d.toFixed(2)}"/>`,ft=t.walls.map(Ce=>mt(Ce,"w")).join(""),Ct=t.fixtures.filter(Ce=>Ce.type!=="gate").map(Ce=>mt(Ce,"f")).join(""),Qt=t.spots.map(Ce=>`<circle class="${n.isDone(Ce.zone)?"sd":"s"}" cx="${q(Ce.x)}" cy="${wt(Ce.z)}" r="0.45"/>`).join(""),Ee=hi.map(Ce=>`<circle class="pg" cx="${q(Ce.x)}" cy="${wt(Ce.z)}" r="0.3"/>`).join(""),je=Math.sin(jt),ze=Math.cos(jt),dn=+q(Pt.x),xe=+wt(Pt.z),Re=`${(dn-je*.9).toFixed(2)},${(xe-ze*.9).toFixed(2)}`,nn=`${(dn-ze*.45).toFixed(2)},${(xe+je*.45).toFixed(2)}`,zn=`${(dn+ze*.45).toFixed(2)},${(xe-je*.45).toFixed(2)}`;return`<h4>Floor plan</h4>
      <svg class="in-map" viewBox="0 0 ${O.toFixed(1)} ${G.toFixed(1)}">${Ct}${ft}${Qt}${Ee}
        <polygon class="me" points="${Re} ${nn} ${zn}"/>
        <text x="${q(0)}" y="${(f+1+1.2).toFixed(1)}" text-anchor="middle">Door</text></svg>
      <p class="hint">Blue: not searched. Grey: searched. Triangle: you.</p>`}function Y(){Ve>.5&&n.onWalk(Ve),Ve=0}let F=null,Rt="",Ft=new Set,Yt=new N,Zt=new N;function de(w){if(!w)return!1;if(w.container)return Te(w),!1;Y();let O=n.onPickUp(w.it.pid);return O.ok?(dt(w.it.pid),Je(`Taken: ${O.name}`,1400)):O.msg&&Je(O.msg,2400),le(),Rn(),z(),O.ok}function me(){if(!(Ut||It||ce)){if(F){de(F);return}if(!Xe){Je("Look at an item to take it.",1400);return}if(Xe.type==="exit"){vs();return}if(Xe.counter&&!n.isCounterOpen()){Kt();return}Je("Look at an item to take it.",1400)}}function Kt(){Y();let w=n.onCounter();vt&&(vt.visible=!n.isCounterOpen()),Je(w),Rn()}function Te(w){if(Ut||It||ce||un||w.opened)return;Ut=!0;let O=i(".in-bar"),G=O.querySelector("i");O.hidden=!1,G.style.width="0%",Je("Opening the box\u2026",X);let q=performance.now(),wt=()=>{if(ce)return;let mt=Math.min(1,(performance.now()-q)/X);if(G.style.width=`${mt*100}%`,mt<1){requestAnimationFrame(wt);return}if(O.hidden=!0,Ut=!1,Y(),!n.onOpenContainer(w.cid))return;w.opened=!0,D(w);let ft=ht.size;et();let Ct=ht.size-ft;Je(Ct?`Inside: ${Ct} item${Ct>1?"s":""}.`:"It is empty.",1800),Rt="",Rn()};wt()}function Be(){if(Ut||It||ce||un||F&&F.container)return!1;let w=pe(l.position);if(!w.length)return!1;let O=i(".in-bar"),G=O.querySelector("i");O.hidden=!1,G.style.width="0%",un={t0:performance.now(),n:w.length};let q=()=>{if(!un)return;let wt=Math.min(1,(performance.now()-un.t0)/ud);if(G.style.width=`${wt*100}%`,wt<1){un.raf=requestAnimationFrame(q);return}un=null,O.hidden=!0,wn()};return q(),!0}function De(){un&&(cancelAnimationFrame(un.raf),un=null,i(".in-bar").hidden=!0)}function wn(){Ut=!0,Y();let w=0,O="";for(let{o:G}of pe(l.position)){let q=n.onPickUp(G.it.pid);if(!q.ok){if(O=q.msg||"",n.isDead())break;continue}dt(G.it.pid),w+=1}Ut=!1,Je(w?`You take ${w} item${w>1?"s":""}.${O?" "+O:""}`:O||"Nothing to take.",2600),le(),Rn(),z()}function Ae(){let w=n.onTakeAll();Gs(null),w&&Je(w),Rn(),z()}function te(){if(ys()&&i('[data-in="take"]')){Ae();return}if(F){de(F);return}if(n.hasLoot()){Ae();return}if(Xe&&Xe.type==="exit"){vs();return}if(Xe&&Xe.counter&&!n.isCounterOpen()){Kt();return}Je("Nothing to take here.",1500)}function fi(){if(!n.hasFlashlight()){Je("You have no flashlight.");return}let w=n.toggleLight();_(),Ei(),w&&Je(w,1800)}function Oe(w){let O=n.quickUse(w);O&&Je(O,3200),Rn(),_(),z()}function Tn(w){let O=performance.now();Tn.last&&O-Tn.last<700||(Tn.last=O,Je(`${w.label}: not yet in the game.`,1800))}let hi=[],An=new al,_s=new mi(new N(0,1,0),0),Ye=new il(.15,.24,24);function ii(){An.setFromCamera(new bt(0,0),l);let w=new N;if(!An.ray.intersectPlane(_s,w)||w.distanceTo(l.position)>25){Je("Look at the floor to mark it.",1500);return}let O=new Xt(Ye,new _n({color:15323030,side:Le,fog:!1}));O.rotation.x=-Math.PI/2,O.position.set(w.x,.03,w.z),a.add(O),hi.push({x:w.x,z:w.z,m:O}),hi.length>5&&a.remove(hi.shift().m),Je("Marked.",900)}function bs(){if(!(zt>.001||ve!==0)){if($t!=="stand"){$t="stand",Ne=!1,ni();return}ve=fd}}function Bn(){Y(),Je(n.quickSave(),1800)}function wi(){if(Y(),!n.canQuickLoad()){Je("There is no save to load.");return}Wo(!1,"quickload")}function Rn(){n.notice&&(J=n.notice()),Xe=void 0,Ei(),n.isDead()&&Wo(!0)}function vs(){Y(),Wo(!1)}function Wo(w,O){ce||(ce=!0,De(),document.pointerLockElement===s&&document.exitPointerLock(),window.removeEventListener("resize",Hs),window.removeEventListener("keydown",xf,!0),window.removeEventListener("keyup",yf,!0),window.removeEventListener("blur",_f),document.removeEventListener("pointerlockchange",bf),o.dispose(),e.remove(),n.onLeave(!!w,O))}function Yr(w){It=w,i(".in-pause").hidden=!w,w&&(ct.clear(),De(),Nt=!1)}function $r(w,O){switch(w.action){case"jump":return bs();case"stance":return $t=gf($t),Ne=!1,ni();case"walktoggle":return k=!k,ni();case"interact":return null;case"context":return te();case"flashlight":return fi();case"inventory":case"character":case"map":case"journal":case"objectives":return Vo(w.action);case"quick_med":case"quick_food":case"quick_utility":return Oe(w.action);case"confirm":return ys()&&i('[data-in="take"]')?Ae():ue?R():me();case"quicksave":return Bn();case"quickload":return wi();case"debug":return En=!En,i(".in-debug").hidden=!En,$n.last=0,$n.mbAt=-1e9,null;case"ping":return ii();default:return w.ready||Tn(w),null}}let pd=new Set(["move","sprint","crouch"]);function xf(w){if(ce)return;let O=w.code;if((["Tab","F3","F5","F9","Space","Backquote","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(O)||w.ctrlKey&&O!=="KeyW")&&w.preventDefault(),O==="Escape"){if(ys()){Gs(null);return}if(ue){R();return}document.pointerLockElement||Yr(!It);return}if(It){O==="Enter"&&Yr(!1);return}if(O==="CapsLock"){k=!k,ni();return}let G=Wr(O)||(O.startsWith("Arrow")?{action:"move"}:null);if(G&&!(ue&&!["inventory","character","map","journal","objectives","pause","quicksave","quickload","confirm"].includes(G.action)&&!G.action.startsWith("quick"))){if(pd.has(G.action)){ct.add(O),G.action==="crouch"&&!w.repeat&&(Ne=!0,$t==="stand"&&($t="crouch"),ni());return}if(!w.repeat){if(G.action==="interact"||G.action==="context"){if(F&&F.container&&!It&&!ue){Te(F);return}Zn=performance.now(),Be();return}$r(G,w)}}}function yf(w){if(ct.delete(w.code),w.code==="CapsLock"&&f_){k=!1,ni();return}let O=Wr(w.code);if(O&&(O.action==="crouch"&&Ne&&(Ne=!1,$t==="crouch"&&($t="stand"),ni()),(O.action==="interact"||O.action==="context")&&Zn)){let G=!!un||performance.now()-Zn<300;Zn=0,un&&De(),G&&!It&&!ue&&(O.action==="interact"?me():te())}}function _f(){ct.clear(),De()}function bf(){!document.pointerLockElement&&!ce&&!r&&!ue&&!ys()&&Yr(!0)}window.addEventListener("keydown",xf,!0),window.addEventListener("keyup",yf,!0),window.addEventListener("blur",_f),document.addEventListener("pointerlockchange",bf);function vf(){if(!(r||It||ue||!s.requestPointerLock))try{let w=s.requestPointerLock();w&&w.catch&&w.catch(()=>{})}catch{}}s.addEventListener("contextmenu",w=>w.preventDefault()),s.addEventListener("mousedown",w=>{if(It||r)return;let O=document.pointerLockElement===s;if(w.button===1){w.preventDefault(),$r(Wr("Mouse1"));return}if(w.button===2){Nt=!0,ni();return}if(w.button===0){if(!O){vf();return}$r(Wr("Mouse0"))}}),window.addEventListener("mouseup",w=>{w.button===2&&Nt&&(Nt=!1,ni())}),s.addEventListener("wheel",w=>{w.preventDefault(),It||$r(Wr("Wheel"))},{passive:!1}),s.addEventListener("mousemove",w=>{It||(document.pointerLockElement===s||w.buttons===1)&&Mf(w.movementX,w.movementY)});function Mf(w,O){let G=Nt?.45:1;jt-=w*.0024*G,fe=Math.max(-1.3,Math.min(1.3,fe-O*.0024*G))}e.addEventListener("click",w=>{let O=w.target.closest("[data-in],[data-use],[data-tk]");if(!O)return;if(O.dataset.use){Je(n.useItem(O.dataset.use,O.dataset.verb)||"",3e3),Rn(),_(),z();return}if(O.dataset.tk){let q=Sl.find(wt=>wt.action===O.dataset.tk);if(q.action==="stance"){$t=gf($t),ni(),O.textContent=$t==="stand"?"CROUCH":$t==="crouch"?"PRONE":"STAND";return}$r(q);return}let G=O.dataset.in;G==="resume"?(Yr(!1),vf()):G==="leave"?vs():G==="take"?Ae():G==="close"?Gs(null):G==="closepanel"&&R()});let Xo=i(".in-use");Xo.addEventListener("pointerdown",w=>{if(w.preventDefault(),F&&F.container){Te(F);return}Zn=performance.now(),Be()});let wl=w=>{if(!Zn)return;let O=w&&w.type==="pointerup"&&(!!un||performance.now()-Zn<300);Zn=0,un&&De(),O&&(ys()&&i('[data-in="take"]')?Ae():me())};Xo.addEventListener("pointerup",wl),Xo.addEventListener("pointerleave",wl),Xo.addEventListener("pointercancel",wl),i(".in-menu").addEventListener("click",()=>Yr(!0)),s.addEventListener("touchstart",w=>{for(let O of w.changedTouches)if(O.clientX<e.clientWidth/2&&an.id===null){an.id=O.identifier,an.ox=O.clientX,an.oy=O.clientY;let G=i(".in-stick");G.style.left=`${O.clientX-50}px`,G.style.top=`${O.clientY-50}px`,G.classList.add("on")}else qn===null&&(qn=O.identifier,ss={x:O.clientX,y:O.clientY});w.preventDefault()},{passive:!1}),s.addEventListener("touchmove",w=>{for(let O of w.changedTouches)if(O.identifier===an.id){let G=O.clientX-an.ox,q=O.clientY-an.oy,wt=Math.min(45,Math.hypot(G,q)),mt=Math.atan2(q,G);an.x=Math.cos(mt)*wt/45,an.y=Math.sin(mt)*wt/45,i(".in-stick i").style.transform=`translate(${an.x*30}px, ${an.y*30}px)`}else O.identifier===qn&&(Mf((O.clientX-ss.x)*1.6,(O.clientY-ss.y)*1.6),ss={x:O.clientX,y:O.clientY});w.preventDefault()},{passive:!1});let Sf=w=>{for(let O of w.changedTouches)O.identifier===an.id?(an.id=null,an.x=an.y=0,i(".in-stick").classList.remove("on"),i(".in-stick i").style.transform=""):O.identifier===qn&&(qn=null)};s.addEventListener("touchend",Sf),s.addEventListener("touchcancel",Sf);let Ef=performance.now(),wf=new N;function Yo(w){if(ce)return;let O=Math.min(.1,(w-Ef)/1e3);Ef=w,xs=xs*.9+(O>0?1/O:0)*.1;let G=performance.now();if(!It&&!Ut&&!ue&&!un){let xe=0,Re=0;(ct.has("KeyW")||ct.has("ArrowUp"))&&(Re-=1),(ct.has("KeyS")||ct.has("ArrowDown"))&&(Re+=1),(ct.has("KeyA")||ct.has("ArrowLeft"))&&(xe-=1),(ct.has("KeyD")||ct.has("ArrowRight"))&&(xe+=1),xe+=an.x,Re+=an.y;let nn=Math.hypot(xe,Re);if(nn>.05){let zn=ct.has("ShiftLeft")||ct.has("ShiftRight"),Ce=dd({stance:$t,sprint:zn,slowWalk:k})*Math.min(1,nn)/nn,Vs=(xe*Math.cos(jt)+Re*Math.sin(jt))*Ce*O,md=(-xe*Math.sin(jt)+Re*Math.cos(jt))*Ce*O,Ws=gu(t,Pt.x+Vs,Pt.z+md,.3,{counter:n.isCounterOpen()});Ws.z=Math.min(Ws.z,.2);let Tf=Math.hypot(Ws.x-Pt.x,Ws.z-Pt.z);if(Ve+=Tf,zt===0&&(Xr+=Tf*($t==="stand"?3.2:2)),Pt.x=Ws.x,Pt.z=Ws.z,Ve>=h_&&(Y(),Ei(),n.isDead())){Wo(!0);return}}}(ve!==0||zt>0)&&(ve-=hd*O,zt=Math.max(0,zt+ve*O),zt===0&&(ve=0));let wt=Go[$t].eye;st+=(wt-st)*Math.min(1,O*10);let mt=Nt?40:72;Math.abs(l.fov-mt)>.1&&(l.fov+=(mt-l.fov)*Math.min(1,O*12),l.updateProjectionMatrix()),l.position.set(Pt.x,st+zt+Math.sin(Xr)*($t==="stand"?.03:.015),Pt.z),l.rotation.order="YXZ",l.rotation.set(fe,jt,0),l.getWorldDirection(wf);let ft=It||ue?null:Mt(l.position,wf),Ct=xu(t,Pt.x,Pt.z,jt);Ct&&Ct.type==="search"&&Ct.dist===0&&!Ft.has(Ct.zone)&&(Ft.add(Ct.zone),n.onSeeZone(Ct.zone),Ei()),Ct&&Ct.type==="search"&&!(Ct.counter&&!n.isCounterOpen())&&(Ct=null);let Qt=(ft?`i:${ft.container?ft.cid:ft.it.pid}`:"")+(Ct?`${Ct.type}:${Ct.zone}`:"");if(Xe===void 0||Qt!==Rt||Yo.n++%20===0){Xe=Ct,F=ft,Rt=Qt;let xe=i(".in-prompt"),Re=pe(l.position).length;if(ft){xe.hidden=!1,xe.innerHTML=ft.container?`<kbd>${r?"USE":"E"}</kbd> Open the box <small>${S(ft)} \xB7 1 min</small>`:n.describeItem(ft.it,Re,r),Wt.visible=!0;let Ce=new Un().setFromObject(ft.obj);Ce.getSize(Yt),Ce.getCenter(Zt),Wt.scale.set(Yt.x+.04,Yt.y+.04,Yt.z+.04),Wt.position.copy(Zt),i(".in-cross").classList.add("on")}else Wt.visible=!1,i(".in-cross").classList.remove("on"),Ct?(xe.hidden=!1,xe.innerHTML=n.describe(Ct)):xe.hidden=!0;let nn=J.countRadius,zn=i(".in-notice");if(nn>0){let Ce=0;for(let Vs of ht.values())Math.hypot(Vs.x-l.position.x,Vs.z-l.position.z)<nn&&Ce++;zn.hidden=Ce===0,zn.textContent=`You notice ${Ce} item${Ce===1?"":"s"} near you`}else zn.hidden=!0}let Ee=performance.now();x.update(O,l.position);let je=performance.now();for(let xe of $){if(!xe.group)continue;let Re=Math.max(0,Math.abs(l.position.z-xe.f.z)-xe.f.d/2),nn=l.position.x-xe.f.x,zn=Re===0;xe.group.visible=zn?nn*xe.side>0&&Math.abs(nn)<3.2:Math.hypot(nn,Re)<(p==="high"?11:8)}for(let xe of ht.values())xe.obj.visible=Math.hypot(xe.x-l.position.x,xe.z-l.position.z)<pt;let ze=performance.now();o.render(a,l);let dn=performance.now();En&&$n.sample(O,{game:Ee-G,look:je-Ee,cull:ze-je,render:dn-ze}),requestAnimationFrame(Yo)}return Yo.n=0,requestAnimationFrame(Yo),window.__llInside={scene:a,renderer:o,plan:t,pos:Pt,look:(w,O=0)=>{jt=w,fe=O},reach:()=>pe(l.position).map(({o:w})=>w.it.zone),boxes:()=>[...tt.values()].filter(Boolean).map(w=>({cid:w.cid,x:w.x,y:w.y,z:w.z,opened:w.opened})),census:()=>{let w={};return a.traverse(O=>{if(O.isMesh||O.isPoints||O.isLine||O.isSprite){let G=O;for(;G.parent&&G.parent!==a;)G=G.parent;let q=G.name||G.type;w[q]=(w[q]||0)+1}}),Object.entries(w).sort((O,G)=>G[1]-O[1]).slice(0,25).map(O=>O.join(":")).join(" ")},items:()=>[...ht.values()].map(w=>({pid:w.it.pid,id:w.it.item,zone:w.it.zone,x:w.x,y:w.y,z:w.z})),state:()=>({stance:$t,feet:zt,slowWalk:k,aiming:Nt,panel:ue,fov:l.fov,light:g?g.isOn():null,quality:p,info:()=>({calls:o.info.render.calls,tris:o.info.render.triangles})})},{close:()=>vs()}}function p_(n){let t=new Set,e=new Set;n.traverse(s=>{s.geometry&&t.add(s.geometry);let r=Array.isArray(s.material)?s.material:s.material?[s.material]:[];for(let o of r)for(let a of["map","normalMap","roughnessMap","emissiveMap","alphaMap","aoMap","bumpMap"])o[a]&&e.add(o[a])});let i=0;for(let s of t){for(let r of Object.values(s.attributes))i+=r.array.byteLength;s.index&&(i+=s.index.array.byteLength)}for(let s of e){let r=s.image;r&&r.width&&(i+=r.width*r.height*4*1.33)}return n.environment&&n.environment.image&&(i+=256*256*6*8),i/1048576}function m_(n){n.updateMatrixWorld(!0);let t=new Map,e=[];n.traverse(i=>{if(!i.isMesh||i.isInstancedMesh||i.isSkinnedMesh||Array.isArray(i.material)||i.children.length)return;let s=i.geometry,r=`${i.material.uuid}|${Object.keys(s.attributes).sort().join(",")}|${i.castShadow?1:0}|${i.receiveShadow?1:0}|${i.renderOrder}`,o=t.get(r);o||t.set(r,o={mat:i.material,cast:i.castShadow,recv:i.receiveShadow,order:i.renderOrder,geos:[],src:[]}),o.src.push(i)});for(let i of t.values()){if(i.src.length<2)continue;let s=i.src.map(a=>{let l=a.geometry.index?a.geometry.toNonIndexed():a.geometry.clone();return l.applyMatrix4(a.matrixWorld),l}),r=Ho(s);if(!r)continue;for(let a of i.src)a.parent.remove(a);let o=new Xt(r,i.mat);o.castShadow=i.cast,o.receiveShadow=i.recv,o.renderOrder=i.order,e.push(o)}for(let i of e)i.matrixAutoUpdate=!1,i.matrix.copy(n.matrixWorld).invert(),n.add(i)}var g_=["map","normalMap","roughnessMap","metalnessMap","emissiveMap","alphaMap","aoMap","bumpMap"];function x_(n){if(n.type!=="MeshStandardMaterial"&&n.type!=="MeshBasicMaterial"&&n.type!=="MeshLambertMaterial"||n.onBeforeCompile&&n.onBeforeCompile.toString()!=="onBeforeCompile(){}"&&n.customProgramCacheKey)return n.uuid;let t=g_.map(i=>n[i]?(n[i].source?n[i].source.uuid:n[i].uuid)+n[i].repeat.x.toFixed(3)+n[i].repeat.y.toFixed(3)+n[i].offset.x.toFixed(3)+n[i].offset.y.toFixed(3):"-").join(","),e=i=>i?i.getHexString():"-";return[n.type,e(n.color),e(n.emissive),n.emissiveIntensity,n.roughness,n.metalness,n.transparent,n.opacity,n.side,n.alphaTest,n.vertexColors,n.flatShading,n.depthWrite,n.polygonOffset,n.polygonOffsetFactor,n.envMapIntensity,t].join("|")}function y_(n){n.updateMatrixWorld(!0);let t=new Map,e=[];n.traverse(i=>{if(!i.isMesh||i.isInstancedMesh||Array.isArray(i.material)){(i.isLine||i.isPoints||i.isSprite||i.isInstancedMesh||i.isMesh&&Array.isArray(i.material))&&e.push(i);return}let s=i.geometry,r=`${x_(i.material)}|${Object.keys(s.attributes).sort().join(",")}|${i.castShadow?1:0}`,o=t.get(r);o||t.set(r,o={mat:i.material,cast:i.castShadow,geos:[]});let a=s.index?s.toNonIndexed():s.clone();a.applyMatrix4(i.matrixWorld),o.geos.push(a)});for(let i of e)i.updateMatrixWorld(!0),i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale);n.clear();for(let i of e)n.add(i);for(let i of t.values()){let s=i.geos.length===1?i.geos[0]:Ho(i.geos);if(!s)continue;let r=new Xt(s,i.mat);r.castShadow=i.cast,r.receiveShadow=!0,n.add(r)}}function __(){let n=[];for(let t of Sl){let e=n.find(i=>i.name===t.group);e||n.push(e={name:t.group,rows:[]}),e.rows.push(t)}return n.map(t=>`<div class="kg"><h5>${is(t.name)}</h5>${t.rows.map(e=>`<div class="kr ${e.ready?"":"no"}"><kbd>${is(e.show)}</kbd><span>${is(e.label)}</span></div>`).join("")}</div>`).join("")}function b_(n,t){let e=new Gt;if(n.type==="clothes"){let o=new Xt(new we(.05,.05,n.d),t);o.position.y=n.h,e.add(o);for(let a of[-n.d/2+.1,n.d/2-.1]){let l=new Xt(new we(.06,n.h,.06),t);l.position.set(0,n.h/2,a),e.add(l)}}else{let o=new Xt(new we(.06,n.h,n.d),t);o.position.y=n.h/2,e.add(o);for(let a of[.1,.6,1.1,1.55,1.98]){let l=new Xt(new we(n.w,.04,n.d),t);l.position.y=a,e.add(l)}for(let a of[-n.d/2,n.d/2]){let l=new Xt(new we(n.w,n.h,.05),t);l.position.set(0,n.h/2,a),e.add(l)}}let i=[];e.children.forEach(o=>{o.updateMatrix();let a=o.geometry.clone();a.applyMatrix4(o.matrix),i.push(a)});let s=new Xt(Ho(i.map(o=>o.toNonIndexed())),t),r=new Gt;return r.add(s),r.position.set(n.x,0,n.z),r}window.LLInside3D={openInside:d_};})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
