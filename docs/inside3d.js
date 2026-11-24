(()=>{var A0="170";var td=0,gf=1,ed=2;var sl=1,R0=2,zi=3,ps=0,yn=1,we=2,us=0,hr=1,Yi=2,xf=3,yf=4,nd=5,Cs=100,id=101,sd=102,rd=103,od=104,ad=200,ld=201,cd=202,fd=203,ec=204,nc=205,hd=206,ud=207,dd=208,pd=209,md=210,gd=211,xd=212,yd=213,_d=214,ic=0,sc=1,rc=2,gr=3,oc=4,ac=5,lc=6,cc=7,Oh=0,bd=1,vd=2,ds=0,Md=1,Sd=2,Ed=3,C0=4,Td=5,wd=6,Ad=7;var Uh=300,xr=301,yr=302,fc=303,hc=304,rl=306,qi=1e3,Gi=1001,uc=1002,Jn=1003,Rd=1004;var Vo=1005;var Ti=1006,_l=1007;var Vi=1008;var $i=1009,Dh=1010,kh=1011,co=1012,I0=1013,Ps=1014,wi=1015,To=1016,P0=1017,L0=1018,_r=1020,Fh=35902,Bh=1021,zh=1022,pi=1023,Hh=1024,Gh=1025,ur=1026,br=1027,N0=1028,O0=1029,Vh=1030,U0=1031;var D0=1033,Ta=33776,wa=33777,Aa=33778,Ra=33779,dc=35840,pc=35841,mc=35842,gc=35843,xc=36196,yc=37492,_c=37496,bc=37808,vc=37809,Mc=37810,Sc=37811,Ec=37812,Tc=37813,wc=37814,Ac=37815,Rc=37816,Cc=37817,Ic=37818,Pc=37819,Lc=37820,Nc=37821,Ca=36492,Oc=36494,Uc=36495,Wh=36283,Dc=36284,kc=36285,Fc=36286;var Ia=2300,Bc=2301,bl=2302,_f=2400,bf=2401,vf=2402;var Cd=3200,Id=3201;var Xh=0,Pd=1,ii="",$e="srgb",Ur="srgb-linear",ol="linear",We="srgb";var Ws=7680;var Mf=519,Ld=512,Nd=513,Od=514,Yh=515,Ud=516,Dd=517,kd=518,Fd=519,zc=35044;var Sf="300 es",Wi=2e3,Pa=2001,ms=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},An=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ef=1234567,dr=Math.PI/180,vr=180/Math.PI;function Ai(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(An[n&255]+An[n>>8&255]+An[n>>16&255]+An[n>>24&255]+"-"+An[t&255]+An[t>>8&255]+"-"+An[t>>16&15|64]+An[t>>24&255]+"-"+An[e&63|128]+An[e>>8&255]+"-"+An[e>>16&255]+An[e>>24&255]+An[i&255]+An[i>>8&255]+An[i>>16&255]+An[i>>24&255]).toLowerCase()}function xn(n,t,e){return Math.max(t,Math.min(e,n))}function k0(n,t){return(n%t+t)%t}function Bd(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function zd(n,t,e){return n!==t?(e-n)/(t-n):0}function so(n,t,e){return(1-e)*n+e*t}function Hd(n,t,e,i){return so(n,t,1-Math.exp(-e*i))}function Gd(n,t=1){return t-Math.abs(k0(n,t*2)-t)}function Vd(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Wd(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Xd(n,t){return n+Math.floor(Math.random()*(t-n+1))}function Yd(n,t){return n+Math.random()*(t-n)}function qd(n){return n*(.5-Math.random())}function $d(n){n!==void 0&&(Ef=n);let t=Ef+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Zd(n){return n*dr}function Kd(n){return n*vr}function Jd(n){return(n&n-1)===0&&n!==0}function jd(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Qd(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function tp(n,t,e,i,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+i)/2),f=o((t+i)/2),h=r((t-i)/2),u=o((t-i)/2),d=r((i-t)/2),m=o((i-t)/2);switch(s){case"XYX":n.set(a*f,l*h,l*u,a*c);break;case"YZY":n.set(l*u,a*f,l*h,a*c);break;case"ZXZ":n.set(l*h,l*u,a*f,a*c);break;case"XZX":n.set(a*f,l*m,l*d,a*c);break;case"YXY":n.set(l*d,a*f,l*m,a*c);break;case"ZYZ":n.set(l*m,l*d,a*f,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function di(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function He(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var gs={DEG2RAD:dr,RAD2DEG:vr,generateUUID:Ai,clamp:xn,euclideanModulo:k0,mapLinear:Bd,inverseLerp:zd,lerp:so,damp:Hd,pingpong:Gd,smoothstep:Vd,smootherstep:Wd,randInt:Xd,randFloat:Yd,randFloatSpread:qd,seededRandom:$d,degToRad:Zd,radToDeg:Kd,isPowerOfTwo:Jd,ceilPowerOfTwo:jd,floorPowerOfTwo:Qd,setQuaternionFromProperEuler:tp,normalize:He,denormalize:di},Mt=class n{constructor(t=0,e=0){n.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(xn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},me=class n{constructor(t,e,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){let f=this.elements;return f[0]=t,f[1]=s,f[2]=a,f[3]=e,f[4]=r,f[5]=l,f[6]=i,f[7]=o,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],f=i[4],h=i[7],u=i[2],d=i[5],m=i[8],x=s[0],g=s[3],p=s[6],_=s[1],y=s[4],b=s[7],L=s[2],R=s[5],w=s[8];return r[0]=o*x+a*_+l*L,r[3]=o*g+a*y+l*R,r[6]=o*p+a*b+l*w,r[1]=c*x+f*_+h*L,r[4]=c*g+f*y+h*R,r[7]=c*p+f*b+h*w,r[2]=u*x+d*_+m*L,r[5]=u*g+d*y+m*R,r[8]=u*p+d*b+m*w,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],f=t[8];return e*o*f-e*a*c-i*r*f+i*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],f=t[8],h=f*o-a*c,u=a*l-f*r,d=c*r-o*l,m=e*h+i*u+s*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return t[0]=h*x,t[1]=(s*c-f*i)*x,t[2]=(a*i-s*o)*x,t[3]=u*x,t[4]=(f*e-s*l)*x,t[5]=(s*r-a*e)*x,t[6]=d*x,t[7]=(i*l-c*e)*x,t[8]=(o*e-i*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(vl.makeScale(t,e)),this}rotate(t){return this.premultiply(vl.makeRotation(-t)),this}translate(t,e){return this.premultiply(vl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},vl=new me;function qh(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function La(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function ep(){let n=La("canvas");return n.style.display="block",n}var Tf={};function no(n){n in Tf||(Tf[n]=!0,console.warn(n))}function np(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function ip(n){let t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function sp(n){let t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Oe={enabled:!0,workingColorSpace:Ur,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===We&&(n.r=Xi(n.r),n.g=Xi(n.g),n.b=Xi(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===We&&(n.r=pr(n.r),n.g=pr(n.g),n.b=pr(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===ii?ol:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Xi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function pr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var wf=[.64,.33,.3,.6,.15,.06],Af=[.2126,.7152,.0722],Rf=[.3127,.329],Cf=new me().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),If=new me().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Oe.define({[Ur]:{primaries:wf,whitePoint:Rf,transfer:ol,toXYZ:Cf,fromXYZ:If,luminanceCoefficients:Af,workingColorSpaceConfig:{unpackColorSpace:$e},outputColorSpaceConfig:{drawingBufferColorSpace:$e}},[$e]:{primaries:wf,whitePoint:Rf,transfer:We,toXYZ:Cf,fromXYZ:If,luminanceCoefficients:Af,outputColorSpaceConfig:{drawingBufferColorSpace:$e}}});var Xs,Hc=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Xs===void 0&&(Xs=La("canvas")),Xs.width=t.width,Xs.height=t.height;let i=Xs.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Xs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=La("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Xi(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Xi(e[i]/255)*255):e[i]=Xi(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},rp=0,Na=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:rp++}),this.uuid=Ai(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ml(s[o].image)):r.push(Ml(s[o]))}else r=Ml(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function Ml(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Hc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var op=0,zn=class n extends ms{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=Gi,s=Gi,r=Ti,o=Vi,a=pi,l=$i,c=n.DEFAULT_ANISOTROPY,f=ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:op++}),this.uuid=Ai(),this.name="",this.source=new Na(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Mt(0,0),this.repeat=new Mt(1,1),this.center=new Mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new me,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Uh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case qi:t.x=t.x-Math.floor(t.x);break;case Gi:t.x=t.x<0?0:1;break;case uc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case qi:t.y=t.y-Math.floor(t.y);break;case Gi:t.y=t.y<0?0:1;break;case uc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};zn.DEFAULT_IMAGE=null;zn.DEFAULT_MAPPING=Uh;zn.DEFAULT_ANISOTROPY=1;var Fe=class n{constructor(t=0,e=0,i=0,s=1){n.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],f=l[4],h=l[8],u=l[1],d=l[5],m=l[9],x=l[2],g=l[6],p=l[10];if(Math.abs(f-u)<.01&&Math.abs(h-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(f+u)<.1&&Math.abs(h+x)<.1&&Math.abs(m+g)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let y=(c+1)/2,b=(d+1)/2,L=(p+1)/2,R=(f+u)/4,w=(h+x)/4,P=(m+g)/4;return y>b&&y>L?y<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(y),s=R/i,r=w/i):b>L?b<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),i=R/s,r=P/s):L<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),i=w/r,s=P/r),this.set(i,s,r,e),this}let _=Math.sqrt((g-m)*(g-m)+(h-x)*(h-x)+(u-f)*(u-f));return Math.abs(_)<.001&&(_=1),this.x=(g-m)/_,this.y=(h-x)/_,this.z=(u-f)/_,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Gc=class extends ms{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Fe(0,0,t,e),this.scissorTest=!1,this.viewport=new Fe(0,0,t,e);let s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ti,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new zn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Na(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Zi=class extends Gc{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Oa=class extends zn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Jn,this.minFilter=Jn,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Vc=class extends zn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Jn,this.minFilter=Jn,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Sn=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],f=i[s+2],h=i[s+3],u=r[o+0],d=r[o+1],m=r[o+2],x=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=f,t[e+3]=h;return}if(a===1){t[e+0]=u,t[e+1]=d,t[e+2]=m,t[e+3]=x;return}if(h!==x||l!==u||c!==d||f!==m){let g=1-a,p=l*u+c*d+f*m+h*x,_=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){let L=Math.sqrt(y),R=Math.atan2(L,p*_);g=Math.sin(g*R)/L,a=Math.sin(a*R)/L}let b=a*_;if(l=l*g+u*b,c=c*g+d*b,f=f*g+m*b,h=h*g+x*b,g===1-a){let L=1/Math.sqrt(l*l+c*c+f*f+h*h);l*=L,c*=L,f*=L,h*=L}}t[e]=l,t[e+1]=c,t[e+2]=f,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],f=i[s+3],h=r[o],u=r[o+1],d=r[o+2],m=r[o+3];return t[e]=a*m+f*h+l*d-c*u,t[e+1]=l*m+f*u+c*h-a*d,t[e+2]=c*m+f*d+a*u-l*h,t[e+3]=f*m-a*h-l*u-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),f=a(s/2),h=a(r/2),u=l(i/2),d=l(s/2),m=l(r/2);switch(o){case"XYZ":this._x=u*f*h+c*d*m,this._y=c*d*h-u*f*m,this._z=c*f*m+u*d*h,this._w=c*f*h-u*d*m;break;case"YXZ":this._x=u*f*h+c*d*m,this._y=c*d*h-u*f*m,this._z=c*f*m-u*d*h,this._w=c*f*h+u*d*m;break;case"ZXY":this._x=u*f*h-c*d*m,this._y=c*d*h+u*f*m,this._z=c*f*m+u*d*h,this._w=c*f*h-u*d*m;break;case"ZYX":this._x=u*f*h-c*d*m,this._y=c*d*h+u*f*m,this._z=c*f*m-u*d*h,this._w=c*f*h+u*d*m;break;case"YZX":this._x=u*f*h+c*d*m,this._y=c*d*h+u*f*m,this._z=c*f*m-u*d*h,this._w=c*f*h-u*d*m;break;case"XZY":this._x=u*f*h-c*d*m,this._y=c*d*h-u*f*m,this._z=c*f*m+u*d*h,this._w=c*f*h+u*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],f=e[6],h=e[10],u=i+a+h;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(f-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(i>a&&i>h){let d=2*Math.sqrt(1+i-a-h);this._w=(f-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>h){let d=2*Math.sqrt(1+a-i-h);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+f)/d}else{let d=2*Math.sqrt(1+h-i-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+f)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(xn(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,f=e._w;return this._x=i*f+o*a+s*c-r*l,this._y=s*f+o*l+r*a-i*c,this._z=r*f+o*c+i*l-s*a,this._w=o*f-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let d=1-e;return this._w=d*o+e*this._w,this._x=d*i+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),f=Math.atan2(c,a),h=Math.sin((1-e)*f)/c,u=Math.sin(e*f)/c;return this._w=o*h+this._w*u,this._x=i*h+this._x*u,this._y=s*h+this._y*u,this._z=r*h+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},N=class n{constructor(t=0,e=0,i=0){n.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Pf.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Pf.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),f=2*(a*e-r*s),h=2*(r*i-o*e);return this.x=e+l*c+o*h-a*f,this.y=i+l*f+a*c-r*h,this.z=s+l*h+r*f-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Sl.copy(this).projectOnVector(t),this.sub(Sl)}reflect(t){return this.sub(Sl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(xn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Sl=new N,Pf=new Sn,Nn=class{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(ci.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(ci.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=ci.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,ci):ci.fromBufferAttribute(r,o),ci.applyMatrix4(t.matrixWorld),this.expandByPoint(ci);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Wo.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Wo.copy(i.boundingBox)),Wo.applyMatrix4(t.matrixWorld),this.union(Wo)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ci),ci.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Xr),Xo.subVectors(this.max,Xr),Ys.subVectors(t.a,Xr),qs.subVectors(t.b,Xr),$s.subVectors(t.c,Xr),os.subVectors(qs,Ys),as.subVectors($s,qs),Ms.subVectors(Ys,$s);let e=[0,-os.z,os.y,0,-as.z,as.y,0,-Ms.z,Ms.y,os.z,0,-os.x,as.z,0,-as.x,Ms.z,0,-Ms.x,-os.y,os.x,0,-as.y,as.x,0,-Ms.y,Ms.x,0];return!El(e,Ys,qs,$s,Xo)||(e=[1,0,0,0,1,0,0,0,1],!El(e,Ys,qs,$s,Xo))?!1:(Yo.crossVectors(os,as),e=[Yo.x,Yo.y,Yo.z],El(e,Ys,qs,$s,Xo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ci).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ci).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ui),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Ui=[new N,new N,new N,new N,new N,new N,new N,new N],ci=new N,Wo=new Nn,Ys=new N,qs=new N,$s=new N,os=new N,as=new N,Ms=new N,Xr=new N,Xo=new N,Yo=new N,Ss=new N;function El(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Ss.fromArray(n,r);let a=s.x*Math.abs(Ss.x)+s.y*Math.abs(Ss.y)+s.z*Math.abs(Ss.z),l=t.dot(Ss),c=e.dot(Ss),f=i.dot(Ss);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>a)return!1}return!0}var ap=new Nn,Yr=new N,Tl=new N,Ki=class{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):ap.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Yr.subVectors(t,this.center);let e=Yr.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Yr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Tl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Yr.copy(t.center).add(Tl)),this.expandByPoint(Yr.copy(t.center).sub(Tl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Di=new N,wl=new N,qo=new N,ls=new N,Al=new N,$o=new N,Rl=new N,Mr=class{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Di)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Di.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Di.copy(this.origin).addScaledVector(this.direction,e),Di.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){wl.copy(t).add(e).multiplyScalar(.5),qo.copy(e).sub(t).normalize(),ls.copy(this.origin).sub(wl);let r=t.distanceTo(e)*.5,o=-this.direction.dot(qo),a=ls.dot(this.direction),l=-ls.dot(qo),c=ls.lengthSq(),f=Math.abs(1-o*o),h,u,d,m;if(f>0)if(h=o*l-a,u=o*a-l,m=r*f,h>=0)if(u>=-m)if(u<=m){let x=1/f;h*=x,u*=x,d=h*(h+o*u+2*a)+u*(o*h+u+2*l)+c}else u=r,h=Math.max(0,-(o*u+a)),d=-h*h+u*(u+2*l)+c;else u=-r,h=Math.max(0,-(o*u+a)),d=-h*h+u*(u+2*l)+c;else u<=-m?(h=Math.max(0,-(-o*r+a)),u=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+u*(u+2*l)+c):u<=m?(h=0,u=Math.min(Math.max(-r,-l),r),d=u*(u+2*l)+c):(h=Math.max(0,-(o*r+a)),u=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+u*(u+2*l)+c);else u=o>0?-r:r,h=Math.max(0,-(o*u+a)),d=-h*h+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(wl).addScaledVector(qo,u),d}intersectSphere(t,e){Di.subVectors(t.center,this.origin);let i=Di.dot(this.direction),s=Di.dot(Di)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l,c=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),f>=0?(r=(t.min.y-u.y)*f,o=(t.max.y-u.y)*f):(r=(t.max.y-u.y)*f,o=(t.min.y-u.y)*f),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-u.z)*h,l=(t.max.z-u.z)*h):(a=(t.max.z-u.z)*h,l=(t.min.z-u.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Di)!==null}intersectTriangle(t,e,i,s,r){Al.subVectors(e,t),$o.subVectors(i,t),Rl.crossVectors(Al,$o);let o=this.direction.dot(Rl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ls.subVectors(this.origin,t);let l=a*this.direction.dot($o.crossVectors(ls,$o));if(l<0)return null;let c=a*this.direction.dot(Al.cross(ls));if(c<0||l+c>o)return null;let f=-a*ls.dot(Rl);return f<0?null:this.at(f/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},re=class n{constructor(t,e,i,s,r,o,a,l,c,f,h,u,d,m,x,g){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,f,h,u,d,m,x,g)}set(t,e,i,s,r,o,a,l,c,f,h,u,d,m,x,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=f,p[10]=h,p[14]=u,p[3]=d,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,s=1/Zs.setFromMatrixColumn(t,0).length(),r=1/Zs.setFromMatrixColumn(t,1).length(),o=1/Zs.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),f=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){let u=o*f,d=o*h,m=a*f,x=a*h;e[0]=l*f,e[4]=-l*h,e[8]=c,e[1]=d+m*c,e[5]=u-x*c,e[9]=-a*l,e[2]=x-u*c,e[6]=m+d*c,e[10]=o*l}else if(t.order==="YXZ"){let u=l*f,d=l*h,m=c*f,x=c*h;e[0]=u+x*a,e[4]=m*a-d,e[8]=o*c,e[1]=o*h,e[5]=o*f,e[9]=-a,e[2]=d*a-m,e[6]=x+u*a,e[10]=o*l}else if(t.order==="ZXY"){let u=l*f,d=l*h,m=c*f,x=c*h;e[0]=u-x*a,e[4]=-o*h,e[8]=m+d*a,e[1]=d+m*a,e[5]=o*f,e[9]=x-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let u=o*f,d=o*h,m=a*f,x=a*h;e[0]=l*f,e[4]=m*c-d,e[8]=u*c+x,e[1]=l*h,e[5]=x*c+u,e[9]=d*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let u=o*l,d=o*c,m=a*l,x=a*c;e[0]=l*f,e[4]=x-u*h,e[8]=m*h+d,e[1]=h,e[5]=o*f,e[9]=-a*f,e[2]=-c*f,e[6]=d*h+m,e[10]=u-x*h}else if(t.order==="XZY"){let u=o*l,d=o*c,m=a*l,x=a*c;e[0]=l*f,e[4]=-h,e[8]=c*f,e[1]=u*h+x,e[5]=o*f,e[9]=d*h-m,e[2]=m*h-d,e[6]=a*f,e[10]=x*h+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(lp,t,cp)}lookAt(t,e,i){let s=this.elements;return Zn.subVectors(t,e),Zn.lengthSq()===0&&(Zn.z=1),Zn.normalize(),cs.crossVectors(i,Zn),cs.lengthSq()===0&&(Math.abs(i.z)===1?Zn.x+=1e-4:Zn.z+=1e-4,Zn.normalize(),cs.crossVectors(i,Zn)),cs.normalize(),Zo.crossVectors(Zn,cs),s[0]=cs.x,s[4]=Zo.x,s[8]=Zn.x,s[1]=cs.y,s[5]=Zo.y,s[9]=Zn.y,s[2]=cs.z,s[6]=Zo.z,s[10]=Zn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],f=i[1],h=i[5],u=i[9],d=i[13],m=i[2],x=i[6],g=i[10],p=i[14],_=i[3],y=i[7],b=i[11],L=i[15],R=s[0],w=s[4],P=s[8],T=s[12],M=s[1],U=s[5],W=s[9],F=s[13],H=s[2],ot=s[6],j=s[10],ut=s[14],tt=s[3],Tt=s[7],Rt=s[11],Bt=s[15];return r[0]=o*R+a*M+l*H+c*tt,r[4]=o*w+a*U+l*ot+c*Tt,r[8]=o*P+a*W+l*j+c*Rt,r[12]=o*T+a*F+l*ut+c*Bt,r[1]=f*R+h*M+u*H+d*tt,r[5]=f*w+h*U+u*ot+d*Tt,r[9]=f*P+h*W+u*j+d*Rt,r[13]=f*T+h*F+u*ut+d*Bt,r[2]=m*R+x*M+g*H+p*tt,r[6]=m*w+x*U+g*ot+p*Tt,r[10]=m*P+x*W+g*j+p*Rt,r[14]=m*T+x*F+g*ut+p*Bt,r[3]=_*R+y*M+b*H+L*tt,r[7]=_*w+y*U+b*ot+L*Tt,r[11]=_*P+y*W+b*j+L*Rt,r[15]=_*T+y*F+b*ut+L*Bt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],f=t[2],h=t[6],u=t[10],d=t[14],m=t[3],x=t[7],g=t[11],p=t[15];return m*(+r*l*h-s*c*h-r*a*u+i*c*u+s*a*d-i*l*d)+x*(+e*l*d-e*c*u+r*o*u-s*o*d+s*c*f-r*l*f)+g*(+e*c*h-e*a*d-r*o*h+i*o*d+r*a*f-i*c*f)+p*(-s*a*f-e*l*h+e*a*u+s*o*h-i*o*u+i*l*f)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],f=t[8],h=t[9],u=t[10],d=t[11],m=t[12],x=t[13],g=t[14],p=t[15],_=h*g*c-x*u*c+x*l*d-a*g*d-h*l*p+a*u*p,y=m*u*c-f*g*c-m*l*d+o*g*d+f*l*p-o*u*p,b=f*x*c-m*h*c+m*a*d-o*x*d-f*a*p+o*h*p,L=m*h*l-f*x*l-m*a*u+o*x*u+f*a*g-o*h*g,R=e*_+i*y+s*b+r*L;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/R;return t[0]=_*w,t[1]=(x*u*r-h*g*r-x*s*d+i*g*d+h*s*p-i*u*p)*w,t[2]=(a*g*r-x*l*r+x*s*c-i*g*c-a*s*p+i*l*p)*w,t[3]=(h*l*r-a*u*r-h*s*c+i*u*c+a*s*d-i*l*d)*w,t[4]=y*w,t[5]=(f*g*r-m*u*r+m*s*d-e*g*d-f*s*p+e*u*p)*w,t[6]=(m*l*r-o*g*r-m*s*c+e*g*c+o*s*p-e*l*p)*w,t[7]=(o*u*r-f*l*r+f*s*c-e*u*c-o*s*d+e*l*d)*w,t[8]=b*w,t[9]=(m*h*r-f*x*r-m*i*d+e*x*d+f*i*p-e*h*p)*w,t[10]=(o*x*r-m*a*r+m*i*c-e*x*c-o*i*p+e*a*p)*w,t[11]=(f*a*r-o*h*r-f*i*c+e*h*c+o*i*d-e*a*d)*w,t[12]=L*w,t[13]=(f*x*s-m*h*s+m*i*u-e*x*u-f*i*g+e*h*g)*w,t[14]=(m*a*s-o*x*s-m*i*l+e*x*l+o*i*g-e*a*g)*w,t[15]=(o*h*s-f*a*s+f*i*l-e*h*l-o*i*u+e*a*u)*w,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,f=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,f*a+i,f*l-s*o,0,c*l-s*a,f*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,f=o+o,h=a+a,u=r*c,d=r*f,m=r*h,x=o*f,g=o*h,p=a*h,_=l*c,y=l*f,b=l*h,L=i.x,R=i.y,w=i.z;return s[0]=(1-(x+p))*L,s[1]=(d+b)*L,s[2]=(m-y)*L,s[3]=0,s[4]=(d-b)*R,s[5]=(1-(u+p))*R,s[6]=(g+_)*R,s[7]=0,s[8]=(m+y)*w,s[9]=(g-_)*w,s[10]=(1-(u+x))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements,r=Zs.set(s[0],s[1],s[2]).length(),o=Zs.set(s[4],s[5],s[6]).length(),a=Zs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],fi.copy(this);let c=1/r,f=1/o,h=1/a;return fi.elements[0]*=c,fi.elements[1]*=c,fi.elements[2]*=c,fi.elements[4]*=f,fi.elements[5]*=f,fi.elements[6]*=f,fi.elements[8]*=h,fi.elements[9]*=h,fi.elements[10]*=h,e.setFromRotationMatrix(fi),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=Wi){let l=this.elements,c=2*r/(e-t),f=2*r/(i-s),h=(e+t)/(e-t),u=(i+s)/(i-s),d,m;if(a===Wi)d=-(o+r)/(o-r),m=-2*o*r/(o-r);else if(a===Pa)d=-o/(o-r),m=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=f,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=Wi){let l=this.elements,c=1/(e-t),f=1/(i-s),h=1/(o-r),u=(e+t)*c,d=(i+s)*f,m,x;if(a===Wi)m=(o+r)*h,x=-2*h;else if(a===Pa)m=r*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=x,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},Zs=new N,fi=new re,lp=new N(0,0,0),cp=new N(1,1,1),cs=new N,Zo=new N,Zn=new N,Lf=new re,Nf=new Sn,En=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],f=s[9],h=s[2],u=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(xn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-xn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(xn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-xn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(xn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-xn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-f,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Lf.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Lf,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Nf.setFromEuler(this),this.setFromQuaternion(Nf,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};En.DEFAULT_ORDER="XYZ";var fo=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},fp=0,Of=new N,Ks=new Sn,ki=new re,Ko=new N,qr=new N,hp=new N,up=new Sn,Uf=new N(1,0,0),Df=new N(0,1,0),kf=new N(0,0,1),Ff={type:"added"},dp={type:"removed"},Js={type:"childadded",child:null},Cl={type:"childremoved",child:null},rn=class n extends ms{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fp++}),this.uuid=Ai(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new N,e=new En,i=new Sn,s=new N(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new re},normalMatrix:{value:new me}}),this.matrix=new re,this.matrixWorld=new re,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ks.setFromAxisAngle(t,e),this.quaternion.multiply(Ks),this}rotateOnWorldAxis(t,e){return Ks.setFromAxisAngle(t,e),this.quaternion.premultiply(Ks),this}rotateX(t){return this.rotateOnAxis(Uf,t)}rotateY(t){return this.rotateOnAxis(Df,t)}rotateZ(t){return this.rotateOnAxis(kf,t)}translateOnAxis(t,e){return Of.copy(t).applyQuaternion(this.quaternion),this.position.add(Of.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Uf,t)}translateY(t){return this.translateOnAxis(Df,t)}translateZ(t){return this.translateOnAxis(kf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ki.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Ko.copy(t):Ko.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),qr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ki.lookAt(qr,Ko,this.up):ki.lookAt(Ko,qr,this.up),this.quaternion.setFromRotationMatrix(ki),s&&(ki.extractRotation(s.matrixWorld),Ks.setFromRotationMatrix(ki),this.quaternion.premultiply(Ks.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ff),Js.child=t,this.dispatchEvent(Js),Js.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(dp),Cl.child=t,this.dispatchEvent(Cl),Cl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ki.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ki.multiply(t.parent.matrixWorld)),t.applyMatrix4(ki),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ff),Js.child=t,this.dispatchEvent(Js),Js.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qr,t,hp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qr,up,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){let h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),f=o(t.images),h=o(t.shapes),u=o(t.skeletons),d=o(t.animations),m=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),h.length>0&&(i.shapes=h),u.length>0&&(i.skeletons=u),d.length>0&&(i.animations=d),m.length>0&&(i.nodes=m)}return i.object=s,i;function o(a){let l=[];for(let c in a){let f=a[c];delete f.metadata,l.push(f)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};rn.DEFAULT_UP=new N(0,1,0);rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var hi=new N,Fi=new N,Il=new N,Bi=new N,js=new N,Qs=new N,Bf=new N,Pl=new N,Ll=new N,Nl=new N,Ol=new Fe,Ul=new Fe,Dl=new Fe,Hi=class n{constructor(t=new N,e=new N,i=new N){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),hi.subVectors(t,e),s.cross(hi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){hi.subVectors(s,e),Fi.subVectors(i,e),Il.subVectors(t,e);let o=hi.dot(hi),a=hi.dot(Fi),l=hi.dot(Il),c=Fi.dot(Fi),f=Fi.dot(Il),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;let u=1/h,d=(c*l-a*f)*u,m=(o*f-a*l)*u;return r.set(1-d-m,m,d)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Bi)===null?!1:Bi.x>=0&&Bi.y>=0&&Bi.x+Bi.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,Bi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Bi.x),l.addScaledVector(o,Bi.y),l.addScaledVector(a,Bi.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return Ol.setScalar(0),Ul.setScalar(0),Dl.setScalar(0),Ol.fromBufferAttribute(t,e),Ul.fromBufferAttribute(t,i),Dl.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Ol,r.x),o.addScaledVector(Ul,r.y),o.addScaledVector(Dl,r.z),o}static isFrontFacing(t,e,i,s){return hi.subVectors(i,e),Fi.subVectors(t,e),hi.cross(Fi).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return hi.subVectors(this.c,this.b),Fi.subVectors(this.a,this.b),hi.cross(Fi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;js.subVectors(s,i),Qs.subVectors(r,i),Pl.subVectors(t,i);let l=js.dot(Pl),c=Qs.dot(Pl);if(l<=0&&c<=0)return e.copy(i);Ll.subVectors(t,s);let f=js.dot(Ll),h=Qs.dot(Ll);if(f>=0&&h<=f)return e.copy(s);let u=l*h-f*c;if(u<=0&&l>=0&&f<=0)return o=l/(l-f),e.copy(i).addScaledVector(js,o);Nl.subVectors(t,r);let d=js.dot(Nl),m=Qs.dot(Nl);if(m>=0&&d<=m)return e.copy(r);let x=d*c-l*m;if(x<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(i).addScaledVector(Qs,a);let g=f*m-d*h;if(g<=0&&h-f>=0&&d-m>=0)return Bf.subVectors(r,s),a=(h-f)/(h-f+(d-m)),e.copy(s).addScaledVector(Bf,a);let p=1/(g+x+u);return o=x*p,a=u*p,e.copy(i).addScaledVector(js,o).addScaledVector(Qs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},$h={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fs={h:0,s:0,l:0},Jo={h:0,s:0,l:0};function kl(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var jt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=$e){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Oe.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=Oe.workingColorSpace){return this.r=t,this.g=e,this.b=i,Oe.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=Oe.workingColorSpace){if(t=k0(t,1),e=xn(e,0,1),i=xn(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=kl(o,r,t+1/3),this.g=kl(o,r,t),this.b=kl(o,r,t-1/3)}return Oe.toWorkingColorSpace(this,s),this}setStyle(t,e=$e){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=$e){let i=$h[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Xi(t.r),this.g=Xi(t.g),this.b=Xi(t.b),this}copyLinearToSRGB(t){return this.r=pr(t.r),this.g=pr(t.g),this.b=pr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=$e){return Oe.fromWorkingColorSpace(Rn.copy(this),t),Math.round(xn(Rn.r*255,0,255))*65536+Math.round(xn(Rn.g*255,0,255))*256+Math.round(xn(Rn.b*255,0,255))}getHexString(t=$e){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Oe.workingColorSpace){Oe.fromWorkingColorSpace(Rn.copy(this),e);let i=Rn.r,s=Rn.g,r=Rn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,f=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=f<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=f,t}getRGB(t,e=Oe.workingColorSpace){return Oe.fromWorkingColorSpace(Rn.copy(this),e),t.r=Rn.r,t.g=Rn.g,t.b=Rn.b,t}getStyle(t=$e){Oe.fromWorkingColorSpace(Rn.copy(this),t);let e=Rn.r,i=Rn.g,s=Rn.b;return t!==$e?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(fs),this.setHSL(fs.h+t,fs.s+e,fs.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(fs),t.getHSL(Jo);let i=so(fs.h,Jo.h,e),s=so(fs.s,Jo.s,e),r=so(fs.l,Jo.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Rn=new jt;jt.NAMES=$h;var pp=0,Ri=class extends ms{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pp++}),this.uuid=Ai(),this.name="",this.blending=hr,this.side=ps,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ec,this.blendDst=nc,this.blendEquation=Cs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new jt(0,0,0),this.blendAlpha=0,this.depthFunc=gr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Mf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ws,this.stencilZFail=Ws,this.stencilZPass=Ws,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==hr&&(i.blending=this.blending),this.side!==ps&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ec&&(i.blendSrc=this.blendSrc),this.blendDst!==nc&&(i.blendDst=this.blendDst),this.blendEquation!==Cs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==gr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Mf&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ws&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ws&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ws&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},_n=class extends Ri{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.combine=Oh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var ln=new N,jo=new Mt,Ze=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=zc,this.updateRanges=[],this.gpuType=wi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)jo.fromBufferAttribute(this,e),jo.applyMatrix3(t),this.setXY(e,jo.x,jo.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)ln.fromBufferAttribute(this,e),ln.applyMatrix3(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)ln.fromBufferAttribute(this,e),ln.applyMatrix4(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ln.fromBufferAttribute(this,e),ln.applyNormalMatrix(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ln.fromBufferAttribute(this,e),ln.transformDirection(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=di(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=He(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=di(e,this.array)),e}setX(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=di(e,this.array)),e}setY(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=di(e,this.array)),e}setZ(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=di(e,this.array)),e}setW(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),i=He(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),i=He(i,this.array),s=He(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),i=He(i,this.array),s=He(s,this.array),r=He(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==zc&&(t.usage=this.usage),t}};var Sr=class extends Ze{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Er=class extends Ze{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var ue=class extends Ze{constructor(t,e,i){super(new Float32Array(t),e,i)}},mp=0,ni=new re,Fl=new rn,tr=new N,Kn=new Nn,$r=new Nn,gn=new N,De=class n extends ms{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:mp++}),this.uuid=Ai(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(qh(t)?Er:Sr)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new me().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ni.makeRotationFromQuaternion(t),this.applyMatrix4(ni),this}rotateX(t){return ni.makeRotationX(t),this.applyMatrix4(ni),this}rotateY(t){return ni.makeRotationY(t),this.applyMatrix4(ni),this}rotateZ(t){return ni.makeRotationZ(t),this.applyMatrix4(ni),this}translate(t,e,i){return ni.makeTranslation(t,e,i),this.applyMatrix4(ni),this}scale(t,e,i){return ni.makeScale(t,e,i),this.applyMatrix4(ni),this}lookAt(t){return Fl.lookAt(t),Fl.updateMatrix(),this.applyMatrix4(Fl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(tr).negate(),this.translate(tr.x,tr.y,tr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ue(i,3))}else{for(let i=0,s=e.count;i<s;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Nn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];Kn.setFromBufferAttribute(r),this.morphTargetsRelative?(gn.addVectors(this.boundingBox.min,Kn.min),this.boundingBox.expandByPoint(gn),gn.addVectors(this.boundingBox.max,Kn.max),this.boundingBox.expandByPoint(gn)):(this.boundingBox.expandByPoint(Kn.min),this.boundingBox.expandByPoint(Kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ki);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){let i=this.boundingSphere.center;if(Kn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];$r.setFromBufferAttribute(a),this.morphTargetsRelative?(gn.addVectors(Kn.min,$r.min),Kn.expandByPoint(gn),gn.addVectors(Kn.max,$r.max),Kn.expandByPoint(gn)):(Kn.expandByPoint($r.min),Kn.expandByPoint($r.max))}Kn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)gn.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(gn));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,f=a.count;c<f;c++)gn.fromBufferAttribute(a,c),l&&(tr.fromBufferAttribute(t,c),gn.add(tr)),s=Math.max(s,i.distanceToSquared(gn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ze(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<i.count;P++)a[P]=new N,l[P]=new N;let c=new N,f=new N,h=new N,u=new Mt,d=new Mt,m=new Mt,x=new N,g=new N;function p(P,T,M){c.fromBufferAttribute(i,P),f.fromBufferAttribute(i,T),h.fromBufferAttribute(i,M),u.fromBufferAttribute(r,P),d.fromBufferAttribute(r,T),m.fromBufferAttribute(r,M),f.sub(c),h.sub(c),d.sub(u),m.sub(u);let U=1/(d.x*m.y-m.x*d.y);isFinite(U)&&(x.copy(f).multiplyScalar(m.y).addScaledVector(h,-d.y).multiplyScalar(U),g.copy(h).multiplyScalar(d.x).addScaledVector(f,-m.x).multiplyScalar(U),a[P].add(x),a[T].add(x),a[M].add(x),l[P].add(g),l[T].add(g),l[M].add(g))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let P=0,T=_.length;P<T;++P){let M=_[P],U=M.start,W=M.count;for(let F=U,H=U+W;F<H;F+=3)p(t.getX(F+0),t.getX(F+1),t.getX(F+2))}let y=new N,b=new N,L=new N,R=new N;function w(P){L.fromBufferAttribute(s,P),R.copy(L);let T=a[P];y.copy(T),y.sub(L.multiplyScalar(L.dot(T))).normalize(),b.crossVectors(R,T);let U=b.dot(l[P])<0?-1:1;o.setXYZW(P,y.x,y.y,y.z,U)}for(let P=0,T=_.length;P<T;++P){let M=_[P],U=M.start,W=M.count;for(let F=U,H=U+W;F<H;F+=3)w(t.getX(F+0)),w(t.getX(F+1)),w(t.getX(F+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ze(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,d=i.count;u<d;u++)i.setXYZ(u,0,0,0);let s=new N,r=new N,o=new N,a=new N,l=new N,c=new N,f=new N,h=new N;if(t)for(let u=0,d=t.count;u<d;u+=3){let m=t.getX(u+0),x=t.getX(u+1),g=t.getX(u+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,g),f.subVectors(o,r),h.subVectors(s,r),f.cross(h),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,g),a.add(f),l.add(f),c.add(f),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,d=e.count;u<d;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),f.subVectors(o,r),h.subVectors(s,r),f.cross(h),i.setXYZ(u+0,f.x,f.y,f.z),i.setXYZ(u+1,f.x,f.y,f.z),i.setXYZ(u+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)gn.fromBufferAttribute(t,e),gn.normalize(),t.setXYZ(e,gn.x,gn.y,gn.z)}toNonIndexed(){function t(a,l){let c=a.array,f=a.itemSize,h=a.normalized,u=new c.constructor(l.length*f),d=0,m=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*f;for(let p=0;p<f;p++)u[m++]=c[d++]}return new Ze(u,f,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,i);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let f=0,h=c.length;f<h;f++){let u=c[f],d=t(u,i);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],f=[];for(let h=0,u=c.length;h<u;h++){let d=c[h];f.push(d.toJSON(t.data))}f.length>0&&(s[l]=f,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let s=t.attributes;for(let c in s){let f=s[c];this.setAttribute(c,f.clone(e))}let r=t.morphAttributes;for(let c in r){let f=[],h=r[c];for(let u=0,d=h.length;u<d;u++)f.push(h[u].clone(e));this.morphAttributes[c]=f}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,f=o.length;c<f;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},zf=new re,Es=new Mr,Qo=new Ki,Hf=new N,ta=new N,ea=new N,na=new N,Bl=new N,ia=new N,Gf=new N,sa=new N,Xt=class extends rn{constructor(t=new De,e=new _n){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){ia.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let f=a[l],h=r[l];f!==0&&(Bl.fromBufferAttribute(h,t),o?ia.addScaledVector(Bl,f):ia.addScaledVector(Bl.sub(e),f))}e.add(ia)}return e}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Qo.copy(i.boundingSphere),Qo.applyMatrix4(r),Es.copy(t.ray).recast(t.near),!(Qo.containsPoint(Es.origin)===!1&&(Es.intersectSphere(Qo,Hf)===null||Es.origin.distanceToSquared(Hf)>(t.far-t.near)**2))&&(zf.copy(r).invert(),Es.copy(t.ray).applyMatrix4(zf),!(i.boundingBox!==null&&Es.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Es)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,f=r.attributes.uv1,h=r.attributes.normal,u=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,x=u.length;m<x;m++){let g=u[m],p=o[g.materialIndex],_=Math.max(g.start,d.start),y=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let b=_,L=y;b<L;b+=3){let R=a.getX(b),w=a.getX(b+1),P=a.getX(b+2);s=ra(this,p,t,i,c,f,h,R,w,P),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let g=m,p=x;g<p;g+=3){let _=a.getX(g),y=a.getX(g+1),b=a.getX(g+2);s=ra(this,o,t,i,c,f,h,_,y,b),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,x=u.length;m<x;m++){let g=u[m],p=o[g.materialIndex],_=Math.max(g.start,d.start),y=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let b=_,L=y;b<L;b+=3){let R=b,w=b+1,P=b+2;s=ra(this,p,t,i,c,f,h,R,w,P),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let g=m,p=x;g<p;g+=3){let _=g,y=g+1,b=g+2;s=ra(this,o,t,i,c,f,h,_,y,b),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function gp(n,t,e,i,s,r,o,a){let l;if(t.side===yn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===ps,a),l===null)return null;sa.copy(a),sa.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(sa);return c<e.near||c>e.far?null:{distance:c,point:sa.clone(),object:n}}function ra(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,ta),n.getVertexPosition(l,ea),n.getVertexPosition(c,na);let f=gp(n,t,e,i,ta,ea,na,Gf);if(f){let h=new N;Hi.getBarycoord(Gf,ta,ea,na,h),s&&(f.uv=Hi.getInterpolatedAttribute(s,a,l,c,h,new Mt)),r&&(f.uv1=Hi.getInterpolatedAttribute(r,a,l,c,h,new Mt)),o&&(f.normal=Hi.getInterpolatedAttribute(o,a,l,c,h,new N),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new N,materialIndex:0};Hi.getNormal(ta,ea,na,u.normal),f.face=u,f.barycoord=h}return f}var Ae=class n extends De{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],f=[],h=[],u=0,d=0;m("z","y","x",-1,-1,i,e,t,o,r,0),m("z","y","x",1,-1,i,e,-t,o,r,1),m("x","z","y",1,1,t,i,e,s,o,2),m("x","z","y",1,-1,t,i,-e,s,o,3),m("x","y","z",1,-1,t,e,i,s,r,4),m("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ue(c,3)),this.setAttribute("normal",new ue(f,3)),this.setAttribute("uv",new ue(h,2));function m(x,g,p,_,y,b,L,R,w,P,T){let M=b/w,U=L/P,W=b/2,F=L/2,H=R/2,ot=w+1,j=P+1,ut=0,tt=0,Tt=new N;for(let Rt=0;Rt<j;Rt++){let Bt=Rt*U-F;for(let oe=0;oe<ot;oe++){let ye=oe*M-W;Tt[x]=ye*_,Tt[g]=Bt*y,Tt[p]=H,c.push(Tt.x,Tt.y,Tt.z),Tt[x]=0,Tt[g]=0,Tt[p]=R>0?1:-1,f.push(Tt.x,Tt.y,Tt.z),h.push(oe/w),h.push(1-Rt/P),ut+=1}}for(let Rt=0;Rt<P;Rt++)for(let Bt=0;Bt<w;Bt++){let oe=u+Bt+ot*Rt,ye=u+Bt+ot*(Rt+1),st=u+(Bt+1)+ot*(Rt+1),vt=u+(Bt+1)+ot*Rt;l.push(oe,ye,vt),l.push(ye,st,vt),tt+=6}a.addGroup(d,tt,T),d+=tt,u+=ut}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Tr(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Ln(n){let t={};for(let e=0;e<n.length;e++){let i=Tr(n[e]);for(let s in i)t[s]=i[s]}return t}function xp(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Zh(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Oe.workingColorSpace}var yp={clone:Tr,merge:Ln},_p=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,jn=class extends Ri{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_p,this.fragmentShader=bp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Tr(t.uniforms),this.uniformsGroups=xp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},Ua=class extends rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new re,this.projectionMatrix=new re,this.projectionMatrixInverse=new re,this.coordinateSystem=Wi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},hs=new N,Vf=new Mt,Wf=new Mt,Mn=class extends Ua{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=vr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(dr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return vr*2*Math.atan(Math.tan(dr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){hs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(hs.x,hs.y).multiplyScalar(-t/hs.z),hs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(hs.x,hs.y).multiplyScalar(-t/hs.z)}getViewSize(t,e){return this.getViewBounds(t,Vf,Wf),e.subVectors(Wf,Vf)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(dr*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},er=-90,nr=1,Wc=class extends rn{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Mn(er,nr,t,e);s.layers=this.layers,this.add(s);let r=new Mn(er,nr,t,e);r.layers=this.layers,this.add(r);let o=new Mn(er,nr,t,e);o.layers=this.layers,this.add(o);let a=new Mn(er,nr,t,e);a.layers=this.layers,this.add(a);let l=new Mn(er,nr,t,e);l.layers=this.layers,this.add(l);let c=new Mn(er,nr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Wi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Pa)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,f]=this.children,h=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,s),t.render(e,f),t.setRenderTarget(h,u,d),t.xr.enabled=m,i.texture.needsPMREMUpdate=!0}},Da=class extends zn{constructor(t,e,i,s,r,o,a,l,c,f){t=t!==void 0?t:[],e=e!==void 0?e:xr,super(t,e,i,s,r,o,a,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Xc=class extends Zi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Da(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ti}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ae(5,5,5),r=new jn({name:"CubemapFromEquirect",uniforms:Tr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:yn,blending:us});r.uniforms.tEquirect.value=e;let o=new Xt(s,r),a=e.minFilter;return e.minFilter===Vi&&(e.minFilter=Ti),new Wc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}},zl=new N,vp=new N,Mp=new me,ui=class{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=zl.subVectors(i,e).cross(vp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(zl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Mp.getNormalMatrix(t),s=this.coplanarPoint(zl).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ts=new Ki,oa=new N,ho=class{constructor(t=new ui,e=new ui,i=new ui,s=new ui,r=new ui,o=new ui){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Wi){let i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],f=s[5],h=s[6],u=s[7],d=s[8],m=s[9],x=s[10],g=s[11],p=s[12],_=s[13],y=s[14],b=s[15];if(i[0].setComponents(l-r,u-c,g-d,b-p).normalize(),i[1].setComponents(l+r,u+c,g+d,b+p).normalize(),i[2].setComponents(l+o,u+f,g+m,b+_).normalize(),i[3].setComponents(l-o,u-f,g-m,b-_).normalize(),i[4].setComponents(l-a,u-h,g-x,b-y).normalize(),e===Wi)i[5].setComponents(l+a,u+h,g+x,b+y).normalize();else if(e===Pa)i[5].setComponents(a,h,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ts.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ts.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ts)}intersectsSprite(t){return Ts.center.set(0,0,0),Ts.radius=.7071067811865476,Ts.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ts)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(oa.x=s.normal.x>0?t.max.x:t.min.x,oa.y=s.normal.y>0?t.max.y:t.min.y,oa.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(oa)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Kh(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Sp(n){let t=new WeakMap;function e(a,l){let c=a.array,f=a.usage,h=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,f),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){let f=l.array,h=l.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,f);else{h.sort((d,m)=>d.start-m.start);let u=0;for(let d=1;d<h.length;d++){let m=h[u],x=h[d];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++u,h[u]=x)}h.length=u+1;for(let d=0,m=h.length;d<m;d++){let x=h[d];n.bufferSubData(c,x.start*f.BYTES_PER_ELEMENT,f,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let f=t.get(a);(!f||f.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Be=class n extends De{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,f=l+1,h=t/a,u=e/l,d=[],m=[],x=[],g=[];for(let p=0;p<f;p++){let _=p*u-o;for(let y=0;y<c;y++){let b=y*h-r;m.push(b,-_,0),x.push(0,0,1),g.push(y/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let _=0;_<a;_++){let y=_+c*p,b=_+c*(p+1),L=_+1+c*(p+1),R=_+1+c*p;d.push(y,b,R),d.push(b,L,R)}this.setIndex(d),this.setAttribute("position",new ue(m,3)),this.setAttribute("normal",new ue(x,3)),this.setAttribute("uv",new ue(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},Ep=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Tp=`#ifdef USE_ALPHAHASH
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
#endif`,wp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ap=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Cp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ip=`#ifdef USE_AOMAP
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
#endif`,Pp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Lp=`#ifdef USE_BATCHING
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
#endif`,Np=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Op=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Up=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Dp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,kp=`#ifdef USE_IRIDESCENCE
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
#endif`,Fp=`#ifdef USE_BUMPMAP
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
#endif`,Bp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,zp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Wp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Xp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Yp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,qp=`#define PI 3.141592653589793
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
} // validated`,$p=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Zp=`vec3 transformedNormal = objectNormal;
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
#endif`,Kp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Jp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Qp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tm="gl_FragColor = linearToOutputTexel( gl_FragColor );",em=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,nm=`#ifdef USE_ENVMAP
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
#endif`,im=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,sm=`#ifdef USE_ENVMAP
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
#endif`,rm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,om=`#ifdef USE_ENVMAP
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
#endif`,am=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hm=`#ifdef USE_GRADIENTMAP
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
}`,um=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mm=`uniform bool receiveShadow;
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
#endif`,gm=`#ifdef USE_ENVMAP
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
#endif`,xm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ym=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_m=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vm=`PhysicalMaterial material;
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
#endif`,Mm=`struct PhysicalMaterial {
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
}`,Sm=`
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
#endif`,Em=`#if defined( RE_IndirectDiffuse )
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
#endif`,Tm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Am=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Im=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Pm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Lm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Nm=`#if defined( USE_POINTS_UV )
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
#endif`,Om=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Um=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Dm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,km=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bm=`#ifdef USE_MORPHTARGETS
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
#endif`,zm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Gm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Vm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ym=`#ifdef USE_NORMALMAP
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
#endif`,qm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$m=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Zm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Km=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Jm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Qm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,t1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,e1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,n1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,i1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,s1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,r1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,o1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,a1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,l1=`float getShadowMask() {
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
}`,c1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,f1=`#ifdef USE_SKINNING
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
#endif`,h1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,u1=`#ifdef USE_SKINNING
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
#endif`,d1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,p1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,m1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,g1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,x1=`#ifdef USE_TRANSMISSION
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
#endif`,y1=`#ifdef USE_TRANSMISSION
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
#endif`,_1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,b1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,v1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,M1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,S1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,E1=`uniform sampler2D t2D;
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
}`,T1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,w1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,A1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,R1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,C1=`#include <common>
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
}`,I1=`#if DEPTH_PACKING == 3200
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
}`,P1=`#define DISTANCE
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
}`,L1=`#define DISTANCE
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
}`,N1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,O1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,U1=`uniform float scale;
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
}`,D1=`uniform vec3 diffuse;
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
}`,k1=`#include <common>
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
}`,F1=`uniform vec3 diffuse;
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
}`,B1=`#define LAMBERT
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
}`,z1=`#define LAMBERT
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
}`,H1=`#define MATCAP
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
}`,G1=`#define MATCAP
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
}`,V1=`#define NORMAL
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
}`,W1=`#define NORMAL
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
}`,X1=`#define PHONG
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
}`,Y1=`#define PHONG
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
}`,q1=`#define STANDARD
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
}`,$1=`#define STANDARD
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
}`,Z1=`#define TOON
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
}`,K1=`#define TOON
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
}`,J1=`uniform float size;
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
}`,j1=`uniform vec3 diffuse;
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
}`,Q1=`#include <common>
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
}`,tg=`uniform vec3 color;
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
}`,eg=`uniform float rotation;
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
}`,ng=`uniform vec3 diffuse;
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
}`,ve={alphahash_fragment:Ep,alphahash_pars_fragment:Tp,alphamap_fragment:wp,alphamap_pars_fragment:Ap,alphatest_fragment:Rp,alphatest_pars_fragment:Cp,aomap_fragment:Ip,aomap_pars_fragment:Pp,batching_pars_vertex:Lp,batching_vertex:Np,begin_vertex:Op,beginnormal_vertex:Up,bsdfs:Dp,iridescence_fragment:kp,bumpmap_pars_fragment:Fp,clipping_planes_fragment:Bp,clipping_planes_pars_fragment:zp,clipping_planes_pars_vertex:Hp,clipping_planes_vertex:Gp,color_fragment:Vp,color_pars_fragment:Wp,color_pars_vertex:Xp,color_vertex:Yp,common:qp,cube_uv_reflection_fragment:$p,defaultnormal_vertex:Zp,displacementmap_pars_vertex:Kp,displacementmap_vertex:Jp,emissivemap_fragment:jp,emissivemap_pars_fragment:Qp,colorspace_fragment:tm,colorspace_pars_fragment:em,envmap_fragment:nm,envmap_common_pars_fragment:im,envmap_pars_fragment:sm,envmap_pars_vertex:rm,envmap_physical_pars_fragment:gm,envmap_vertex:om,fog_vertex:am,fog_pars_vertex:lm,fog_fragment:cm,fog_pars_fragment:fm,gradientmap_pars_fragment:hm,lightmap_pars_fragment:um,lights_lambert_fragment:dm,lights_lambert_pars_fragment:pm,lights_pars_begin:mm,lights_toon_fragment:xm,lights_toon_pars_fragment:ym,lights_phong_fragment:_m,lights_phong_pars_fragment:bm,lights_physical_fragment:vm,lights_physical_pars_fragment:Mm,lights_fragment_begin:Sm,lights_fragment_maps:Em,lights_fragment_end:Tm,logdepthbuf_fragment:wm,logdepthbuf_pars_fragment:Am,logdepthbuf_pars_vertex:Rm,logdepthbuf_vertex:Cm,map_fragment:Im,map_pars_fragment:Pm,map_particle_fragment:Lm,map_particle_pars_fragment:Nm,metalnessmap_fragment:Om,metalnessmap_pars_fragment:Um,morphinstance_vertex:Dm,morphcolor_vertex:km,morphnormal_vertex:Fm,morphtarget_pars_vertex:Bm,morphtarget_vertex:zm,normal_fragment_begin:Hm,normal_fragment_maps:Gm,normal_pars_fragment:Vm,normal_pars_vertex:Wm,normal_vertex:Xm,normalmap_pars_fragment:Ym,clearcoat_normal_fragment_begin:qm,clearcoat_normal_fragment_maps:$m,clearcoat_pars_fragment:Zm,iridescence_pars_fragment:Km,opaque_fragment:Jm,packing:jm,premultiplied_alpha_fragment:Qm,project_vertex:t1,dithering_fragment:e1,dithering_pars_fragment:n1,roughnessmap_fragment:i1,roughnessmap_pars_fragment:s1,shadowmap_pars_fragment:r1,shadowmap_pars_vertex:o1,shadowmap_vertex:a1,shadowmask_pars_fragment:l1,skinbase_vertex:c1,skinning_pars_vertex:f1,skinning_vertex:h1,skinnormal_vertex:u1,specularmap_fragment:d1,specularmap_pars_fragment:p1,tonemapping_fragment:m1,tonemapping_pars_fragment:g1,transmission_fragment:x1,transmission_pars_fragment:y1,uv_pars_fragment:_1,uv_pars_vertex:b1,uv_vertex:v1,worldpos_vertex:M1,background_vert:S1,background_frag:E1,backgroundCube_vert:T1,backgroundCube_frag:w1,cube_vert:A1,cube_frag:R1,depth_vert:C1,depth_frag:I1,distanceRGBA_vert:P1,distanceRGBA_frag:L1,equirect_vert:N1,equirect_frag:O1,linedashed_vert:U1,linedashed_frag:D1,meshbasic_vert:k1,meshbasic_frag:F1,meshlambert_vert:B1,meshlambert_frag:z1,meshmatcap_vert:H1,meshmatcap_frag:G1,meshnormal_vert:V1,meshnormal_frag:W1,meshphong_vert:X1,meshphong_frag:Y1,meshphysical_vert:q1,meshphysical_frag:$1,meshtoon_vert:Z1,meshtoon_frag:K1,points_vert:J1,points_frag:j1,shadow_vert:Q1,shadow_frag:tg,sprite_vert:eg,sprite_frag:ng},Dt={common:{diffuse:{value:new jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new me},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new me}},envmap:{envMap:{value:null},envMapRotation:{value:new me},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new me}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new me}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new me},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new me},normalScale:{value:new Mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new me},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new me}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new me}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new me}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0},uvTransform:{value:new me}},sprite:{diffuse:{value:new jt(16777215)},opacity:{value:1},center:{value:new Mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new me},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0}}},Ei={basic:{uniforms:Ln([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.fog]),vertexShader:ve.meshbasic_vert,fragmentShader:ve.meshbasic_frag},lambert:{uniforms:Ln([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new jt(0)}}]),vertexShader:ve.meshlambert_vert,fragmentShader:ve.meshlambert_frag},phong:{uniforms:Ln([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new jt(0)},specular:{value:new jt(1118481)},shininess:{value:30}}]),vertexShader:ve.meshphong_vert,fragmentShader:ve.meshphong_frag},standard:{uniforms:Ln([Dt.common,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.roughnessmap,Dt.metalnessmap,Dt.fog,Dt.lights,{emissive:{value:new jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ve.meshphysical_vert,fragmentShader:ve.meshphysical_frag},toon:{uniforms:Ln([Dt.common,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.gradientmap,Dt.fog,Dt.lights,{emissive:{value:new jt(0)}}]),vertexShader:ve.meshtoon_vert,fragmentShader:ve.meshtoon_frag},matcap:{uniforms:Ln([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,{matcap:{value:null}}]),vertexShader:ve.meshmatcap_vert,fragmentShader:ve.meshmatcap_frag},points:{uniforms:Ln([Dt.points,Dt.fog]),vertexShader:ve.points_vert,fragmentShader:ve.points_frag},dashed:{uniforms:Ln([Dt.common,Dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ve.linedashed_vert,fragmentShader:ve.linedashed_frag},depth:{uniforms:Ln([Dt.common,Dt.displacementmap]),vertexShader:ve.depth_vert,fragmentShader:ve.depth_frag},normal:{uniforms:Ln([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,{opacity:{value:1}}]),vertexShader:ve.meshnormal_vert,fragmentShader:ve.meshnormal_frag},sprite:{uniforms:Ln([Dt.sprite,Dt.fog]),vertexShader:ve.sprite_vert,fragmentShader:ve.sprite_frag},background:{uniforms:{uvTransform:{value:new me},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ve.background_vert,fragmentShader:ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new me}},vertexShader:ve.backgroundCube_vert,fragmentShader:ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ve.cube_vert,fragmentShader:ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ve.equirect_vert,fragmentShader:ve.equirect_frag},distanceRGBA:{uniforms:Ln([Dt.common,Dt.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ve.distanceRGBA_vert,fragmentShader:ve.distanceRGBA_frag},shadow:{uniforms:Ln([Dt.lights,Dt.fog,{color:{value:new jt(0)},opacity:{value:1}}]),vertexShader:ve.shadow_vert,fragmentShader:ve.shadow_frag}};Ei.physical={uniforms:Ln([Ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new me},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new me},clearcoatNormalScale:{value:new Mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new me},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new me},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new me},sheen:{value:0},sheenColor:{value:new jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new me},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new me},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new me},transmissionSamplerSize:{value:new Mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new me},attenuationDistance:{value:0},attenuationColor:{value:new jt(0)},specularColor:{value:new jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new me},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new me},anisotropyVector:{value:new Mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new me}}]),vertexShader:ve.meshphysical_vert,fragmentShader:ve.meshphysical_frag};var aa={r:0,b:0,g:0},ws=new En,ig=new re;function sg(n,t,e,i,s,r,o){let a=new jt(0),l=r===!0?0:1,c,f,h=null,u=0,d=null;function m(_){let y=_.isScene===!0?_.background:null;return y&&y.isTexture&&(y=(_.backgroundBlurriness>0?e:t).get(y)),y}function x(_){let y=!1,b=m(_);b===null?p(a,l):b&&b.isColor&&(p(b,1),y=!0);let L=n.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(_,y){let b=m(y);b&&(b.isCubeTexture||b.mapping===rl)?(f===void 0&&(f=new Xt(new Ae(1,1,1),new jn({name:"BackgroundCubeMaterial",uniforms:Tr(Ei.backgroundCube.uniforms),vertexShader:Ei.backgroundCube.vertexShader,fragmentShader:Ei.backgroundCube.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(L,R,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(f)),ws.copy(y.backgroundRotation),ws.x*=-1,ws.y*=-1,ws.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(ws.y*=-1,ws.z*=-1),f.material.uniforms.envMap.value=b,f.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(ig.makeRotationFromEuler(ws)),f.material.toneMapped=Oe.getTransfer(b.colorSpace)!==We,(h!==b||u!==b.version||d!==n.toneMapping)&&(f.material.needsUpdate=!0,h=b,u=b.version,d=n.toneMapping),f.layers.enableAll(),_.unshift(f,f.geometry,f.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new Xt(new Be(2,2),new jn({name:"BackgroundMaterial",uniforms:Tr(Ei.background.uniforms),vertexShader:Ei.background.vertexShader,fragmentShader:Ei.background.fragmentShader,side:ps,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=Oe.getTransfer(b.colorSpace)!==We,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||u!==b.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,h=b,u=b.version,d=n.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function p(_,y){_.getRGB(aa,Zh(n)),i.buffers.color.setClear(aa.r,aa.g,aa.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(_,y=1){a.set(_),l=y,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,p(a,l)},render:x,addToRenderList:g}}function rg(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,o=!1;function a(M,U,W,F,H){let ot=!1,j=h(F,W,U);r!==j&&(r=j,c(r.object)),ot=d(M,F,W,H),ot&&m(M,F,W,H),H!==null&&t.update(H,n.ELEMENT_ARRAY_BUFFER),(ot||o)&&(o=!1,b(M,U,W,F),H!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function f(M){return n.deleteVertexArray(M)}function h(M,U,W){let F=W.wireframe===!0,H=i[M.id];H===void 0&&(H={},i[M.id]=H);let ot=H[U.id];ot===void 0&&(ot={},H[U.id]=ot);let j=ot[F];return j===void 0&&(j=u(l()),ot[F]=j),j}function u(M){let U=[],W=[],F=[];for(let H=0;H<e;H++)U[H]=0,W[H]=0,F[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:W,attributeDivisors:F,object:M,attributes:{},index:null}}function d(M,U,W,F){let H=r.attributes,ot=U.attributes,j=0,ut=W.getAttributes();for(let tt in ut)if(ut[tt].location>=0){let Rt=H[tt],Bt=ot[tt];if(Bt===void 0&&(tt==="instanceMatrix"&&M.instanceMatrix&&(Bt=M.instanceMatrix),tt==="instanceColor"&&M.instanceColor&&(Bt=M.instanceColor)),Rt===void 0||Rt.attribute!==Bt||Bt&&Rt.data!==Bt.data)return!0;j++}return r.attributesNum!==j||r.index!==F}function m(M,U,W,F){let H={},ot=U.attributes,j=0,ut=W.getAttributes();for(let tt in ut)if(ut[tt].location>=0){let Rt=ot[tt];Rt===void 0&&(tt==="instanceMatrix"&&M.instanceMatrix&&(Rt=M.instanceMatrix),tt==="instanceColor"&&M.instanceColor&&(Rt=M.instanceColor));let Bt={};Bt.attribute=Rt,Rt&&Rt.data&&(Bt.data=Rt.data),H[tt]=Bt,j++}r.attributes=H,r.attributesNum=j,r.index=F}function x(){let M=r.newAttributes;for(let U=0,W=M.length;U<W;U++)M[U]=0}function g(M){p(M,0)}function p(M,U){let W=r.newAttributes,F=r.enabledAttributes,H=r.attributeDivisors;W[M]=1,F[M]===0&&(n.enableVertexAttribArray(M),F[M]=1),H[M]!==U&&(n.vertexAttribDivisor(M,U),H[M]=U)}function _(){let M=r.newAttributes,U=r.enabledAttributes;for(let W=0,F=U.length;W<F;W++)U[W]!==M[W]&&(n.disableVertexAttribArray(W),U[W]=0)}function y(M,U,W,F,H,ot,j){j===!0?n.vertexAttribIPointer(M,U,W,H,ot):n.vertexAttribPointer(M,U,W,F,H,ot)}function b(M,U,W,F){x();let H=F.attributes,ot=W.getAttributes(),j=U.defaultAttributeValues;for(let ut in ot){let tt=ot[ut];if(tt.location>=0){let Tt=H[ut];if(Tt===void 0&&(ut==="instanceMatrix"&&M.instanceMatrix&&(Tt=M.instanceMatrix),ut==="instanceColor"&&M.instanceColor&&(Tt=M.instanceColor)),Tt!==void 0){let Rt=Tt.normalized,Bt=Tt.itemSize,oe=t.get(Tt);if(oe===void 0)continue;let ye=oe.buffer,st=oe.type,vt=oe.bytesPerElement,Vt=st===n.INT||st===n.UNSIGNED_INT||Tt.gpuType===I0;if(Tt.isInterleavedBufferAttribute){let St=Tt.data,$t=St.stride,le=Tt.offset;if(St.isInstancedInterleavedBuffer){for(let Zt=0;Zt<tt.locationSize;Zt++)p(tt.location+Zt,St.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let Zt=0;Zt<tt.locationSize;Zt++)g(tt.location+Zt);n.bindBuffer(n.ARRAY_BUFFER,ye);for(let Zt=0;Zt<tt.locationSize;Zt++)y(tt.location+Zt,Bt/tt.locationSize,st,Rt,$t*vt,(le+Bt/tt.locationSize*Zt)*vt,Vt)}else{if(Tt.isInstancedBufferAttribute){for(let St=0;St<tt.locationSize;St++)p(tt.location+St,Tt.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=Tt.meshPerAttribute*Tt.count)}else for(let St=0;St<tt.locationSize;St++)g(tt.location+St);n.bindBuffer(n.ARRAY_BUFFER,ye);for(let St=0;St<tt.locationSize;St++)y(tt.location+St,Bt/tt.locationSize,st,Rt,Bt*vt,Bt/tt.locationSize*St*vt,Vt)}}else if(j!==void 0){let Rt=j[ut];if(Rt!==void 0)switch(Rt.length){case 2:n.vertexAttrib2fv(tt.location,Rt);break;case 3:n.vertexAttrib3fv(tt.location,Rt);break;case 4:n.vertexAttrib4fv(tt.location,Rt);break;default:n.vertexAttrib1fv(tt.location,Rt)}}}}_()}function L(){P();for(let M in i){let U=i[M];for(let W in U){let F=U[W];for(let H in F)f(F[H].object),delete F[H];delete U[W]}delete i[M]}}function R(M){if(i[M.id]===void 0)return;let U=i[M.id];for(let W in U){let F=U[W];for(let H in F)f(F[H].object),delete F[H];delete U[W]}delete i[M.id]}function w(M){for(let U in i){let W=i[U];if(W[M.id]===void 0)continue;let F=W[M.id];for(let H in F)f(F[H].object),delete F[H];delete W[M.id]}}function P(){T(),o=!0,r!==s&&(r=s,c(r.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:T,dispose:L,releaseStatesOfGeometry:R,releaseStatesOfProgram:w,initAttributes:x,enableAttribute:g,disableUnusedAttributes:_}}function og(n,t,e){let i;function s(c){i=c}function r(c,f){n.drawArrays(i,c,f),e.update(f,i,1)}function o(c,f,h){h!==0&&(n.drawArraysInstanced(i,c,f,h),e.update(f,i,h))}function a(c,f,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,f,0,h);let d=0;for(let m=0;m<h;m++)d+=f[m];e.update(d,i,1)}function l(c,f,h,u){if(h===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<c.length;m++)o(c[m],f[m],u[m]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,f,0,u,0,h);let m=0;for(let x=0;x<h;x++)m+=f[x]*u[x];e.update(m,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function ag(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(w){return!(w!==pi&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){let P=w===To&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==$i&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==wi&&!P)}function l(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",f=l(c);f!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);let h=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),_=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),L=m>0,R=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:u,maxTextures:d,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:_,maxVaryings:y,maxFragmentUniforms:b,vertexTextures:L,maxSamples:R}}function lg(n){let t=this,e=null,i=0,s=!1,r=!1,o=new ui,a=new me,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){let d=h.length!==0||u||i!==0||s;return s=u,i=h.length,d},this.beginShadows=function(){r=!0,f(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,u){e=f(h,u,0)},this.setState=function(h,u,d){let m=h.clippingPlanes,x=h.clipIntersection,g=h.clipShadows,p=n.get(h);if(!s||m===null||m.length===0||r&&!g)r?f(null):c();else{let _=r?0:i,y=_*4,b=p.clippingState||null;l.value=b,b=f(m,u,y,d);for(let L=0;L!==y;++L)b[L]=e[L];p.clippingState=b,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function f(h,u,d,m){let x=h!==null?h.length:0,g=null;if(x!==0){if(g=l.value,m!==!0||g===null){let p=d+x*4,_=u.matrixWorldInverse;a.getNormalMatrix(_),(g===null||g.length<p)&&(g=new Float32Array(p));for(let y=0,b=d;y!==x;++y,b+=4)o.copy(h[y]).applyMatrix4(_,a),o.normal.toArray(g,b),g[b+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}function cg(n){let t=new WeakMap;function e(o,a){return a===fc?o.mapping=xr:a===hc&&(o.mapping=yr),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===fc||a===hc)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Xc(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}var Yc=class extends Ua{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},cr=4,Xf=[.125,.215,.35,.446,.526,.582],Is=20,Hl=new Yc,Yf=new jt,Gl=null,Vl=0,Wl=0,Xl=!1,Rs=(1+Math.sqrt(5))/2,ir=1/Rs,qf=[new N(-Rs,ir,0),new N(Rs,ir,0),new N(-ir,0,Rs),new N(ir,0,Rs),new N(0,Rs,-ir),new N(0,Rs,ir),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)],wr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){Gl=this._renderer.getRenderTarget(),Vl=this._renderer.getActiveCubeFace(),Wl=this._renderer.getActiveMipmapLevel(),Xl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Kf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Gl,Vl,Wl),this._renderer.xr.enabled=Xl,t.scissorTest=!1,la(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===xr||t.mapping===yr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Gl=this._renderer.getRenderTarget(),Vl=this._renderer.getActiveCubeFace(),Wl=this._renderer.getActiveMipmapLevel(),Xl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Ti,minFilter:Ti,generateMipmaps:!1,type:To,format:pi,colorSpace:Ur,depthBuffer:!1},s=$f(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$f(t,e,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=fg(r)),this._blurMaterial=hg(r,t,e)}return s}_compileMaterial(t){let e=new Xt(this._lodPlanes[0],t);this._renderer.compile(e,Hl)}_sceneToCubeUV(t,e,i,s){let a=new Mn(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,u=f.toneMapping;f.getClearColor(Yf),f.toneMapping=ds,f.autoClear=!1;let d=new _n({name:"PMREM.Background",side:yn,depthWrite:!1,depthTest:!1}),m=new Xt(new Ae,d),x=!1,g=t.background;g?g.isColor&&(d.color.copy(g),t.background=null,x=!0):(d.color.copy(Yf),x=!0);for(let p=0;p<6;p++){let _=p%3;_===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):_===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let y=this._cubeSize;la(s,_*y,p>2?y:0,y,y),f.setRenderTarget(s),x&&f.render(m,a),f.render(t,a)}m.geometry.dispose(),m.material.dispose(),f.toneMapping=u,f.autoClear=h,t.background=g}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===xr||t.mapping===yr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Kf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zf());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Xt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;la(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,Hl)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=qf[(s-r-1)%qf.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let f=3,h=new Xt(this._lodPlanes[s],c),u=c.uniforms,d=this._sizeLods[i]-1,m=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Is-1),x=r/m,g=isFinite(r)?1+Math.floor(f*x):Is;g>Is&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Is}`);let p=[],_=0;for(let w=0;w<Is;++w){let P=w/x,T=Math.exp(-P*P/2);p.push(T),w===0?_+=T:w<g&&(_+=2*T)}for(let w=0;w<p.length;w++)p[w]=p[w]/_;u.envMap.value=t.texture,u.samples.value=g,u.weights.value=p,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);let{_lodMax:y}=this;u.dTheta.value=m,u.mipInt.value=y-i;let b=this._sizeLods[s],L=3*b*(s>y-cr?s-y+cr:0),R=4*(this._cubeSize-b);la(e,L,R,3*b,2*b),l.setRenderTarget(e),l.render(h,Hl)}};function fg(n){let t=[],e=[],i=[],s=n,r=n-cr+1+Xf.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>n-cr?l=Xf[o-n+cr-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),f=-c,h=1+c,u=[f,f,h,f,h,h,f,f,h,h,f,h],d=6,m=6,x=3,g=2,p=1,_=new Float32Array(x*m*d),y=new Float32Array(g*m*d),b=new Float32Array(p*m*d);for(let R=0;R<d;R++){let w=R%3*2/3-1,P=R>2?0:-1,T=[w,P,0,w+2/3,P,0,w+2/3,P+1,0,w,P,0,w+2/3,P+1,0,w,P+1,0];_.set(T,x*m*R),y.set(u,g*m*R);let M=[R,R,R,R,R,R];b.set(M,p*m*R)}let L=new De;L.setAttribute("position",new Ze(_,x)),L.setAttribute("uv",new Ze(y,g)),L.setAttribute("faceIndex",new Ze(b,p)),t.push(L),s>cr&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function $f(n,t,e){let i=new Zi(n,t,e);return i.texture.mapping=rl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function la(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function hg(n,t,e){let i=new Float32Array(Is),s=new N(0,1,0);return new jn({name:"SphericalGaussianBlur",defines:{n:Is,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:F0(),fragmentShader:`

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
		`,blending:us,depthTest:!1,depthWrite:!1})}function Zf(){return new jn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:F0(),fragmentShader:`

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
		`,blending:us,depthTest:!1,depthWrite:!1})}function Kf(){return new jn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:F0(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:us,depthTest:!1,depthWrite:!1})}function F0(){return`

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
	`}function ug(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===fc||l===hc,f=l===xr||l===yr;if(c||f){let h=t.get(a),u=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return e===null&&(e=new wr(n)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{let d=a.image;return c&&d&&d.height>0||f&&d&&s(d)?(e===null&&(e=new wr(n)),h=c?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0,c=6;for(let f=0;f<c;f++)a[f]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function dg(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&no("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function pg(n,t,e,i){let s={},r=new WeakMap;function o(h){let u=h.target;u.index!==null&&t.remove(u.index);for(let m in u.attributes)t.remove(u.attributes[m]);for(let m in u.morphAttributes){let x=u.morphAttributes[m];for(let g=0,p=x.length;g<p;g++)t.remove(x[g])}u.removeEventListener("dispose",o),delete s[u.id];let d=r.get(u);d&&(t.remove(d),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(h,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function l(h){let u=h.attributes;for(let m in u)t.update(u[m],n.ARRAY_BUFFER);let d=h.morphAttributes;for(let m in d){let x=d[m];for(let g=0,p=x.length;g<p;g++)t.update(x[g],n.ARRAY_BUFFER)}}function c(h){let u=[],d=h.index,m=h.attributes.position,x=0;if(d!==null){let _=d.array;x=d.version;for(let y=0,b=_.length;y<b;y+=3){let L=_[y+0],R=_[y+1],w=_[y+2];u.push(L,R,R,w,w,L)}}else if(m!==void 0){let _=m.array;x=m.version;for(let y=0,b=_.length/3-1;y<b;y+=3){let L=y+0,R=y+1,w=y+2;u.push(L,R,R,w,w,L)}}else return;let g=new(qh(u)?Er:Sr)(u,1);g.version=x;let p=r.get(h);p&&t.remove(p),r.set(h,g)}function f(h){let u=r.get(h);if(u){let d=h.index;d!==null&&u.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:f}}function mg(n,t,e){let i;function s(u){i=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,d){n.drawElements(i,d,r,u*o),e.update(d,i,1)}function c(u,d,m){m!==0&&(n.drawElementsInstanced(i,d,r,u*o,m),e.update(d,i,m))}function f(u,d,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,u,0,m);let g=0;for(let p=0;p<m;p++)g+=d[p];e.update(g,i,1)}function h(u,d,m,x){if(m===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<u.length;p++)c(u[p]/o,d[p],x[p]);else{g.multiDrawElementsInstancedWEBGL(i,d,0,r,u,0,x,0,m);let p=0;for(let _=0;_<m;_++)p+=d[_]*x[_];e.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function gg(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function xg(n,t,e){let i=new WeakMap,s=new Fe;function r(o,a,l){let c=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=f!==void 0?f.length:0,u=i.get(a);if(u===void 0||u.count!==h){let T=function(){w.dispose(),i.delete(a),a.removeEventListener("dispose",T)};u!==void 0&&u.texture.dispose();let d=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],y=0;d===!0&&(y=1),m===!0&&(y=2),x===!0&&(y=3);let b=a.attributes.position.count*y,L=1;b>t.maxTextureSize&&(L=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);let R=new Float32Array(b*L*4*h),w=new Oa(R,b,L,h);w.type=wi,w.needsUpdate=!0;let P=y*4;for(let M=0;M<h;M++){let U=g[M],W=p[M],F=_[M],H=b*L*4*M;for(let ot=0;ot<U.count;ot++){let j=ot*P;d===!0&&(s.fromBufferAttribute(U,ot),R[H+j+0]=s.x,R[H+j+1]=s.y,R[H+j+2]=s.z,R[H+j+3]=0),m===!0&&(s.fromBufferAttribute(W,ot),R[H+j+4]=s.x,R[H+j+5]=s.y,R[H+j+6]=s.z,R[H+j+7]=0),x===!0&&(s.fromBufferAttribute(F,ot),R[H+j+8]=s.x,R[H+j+9]=s.y,R[H+j+10]=s.z,R[H+j+11]=F.itemSize===4?s.w:1)}}u={count:h,texture:w,size:new Mt(b,L)},i.set(a,u),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let m=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",m),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function yg(n,t,e,i){let s=new WeakMap;function r(l){let c=i.render.frame,f=l.geometry,h=t.get(l,f);if(s.get(h)!==c&&(t.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return h}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var ka=class extends zn{constructor(t,e,i,s,r,o,a,l,c,f=ur){if(f!==ur&&f!==br)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===ur&&(i=Ps),i===void 0&&f===br&&(i=_r),super(null,s,r,o,a,l,f,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Jn,this.minFilter=l!==void 0?l:Jn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Jh=new zn,Jf=new ka(1,1),jh=new Oa,Qh=new Vc,tu=new Da,jf=[],Qf=[],th=new Float32Array(16),eh=new Float32Array(9),nh=new Float32Array(4);function Dr(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=jf[s];if(r===void 0&&(r=new Float32Array(s),jf[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function fn(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function hn(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function al(n,t){let e=Qf[t];e===void 0&&(e=new Int32Array(t),Qf[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function _g(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function bg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fn(e,t))return;n.uniform2fv(this.addr,t),hn(e,t)}}function vg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(fn(e,t))return;n.uniform3fv(this.addr,t),hn(e,t)}}function Mg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fn(e,t))return;n.uniform4fv(this.addr,t),hn(e,t)}}function Sg(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(fn(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),hn(e,t)}else{if(fn(e,i))return;nh.set(i),n.uniformMatrix2fv(this.addr,!1,nh),hn(e,i)}}function Eg(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(fn(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),hn(e,t)}else{if(fn(e,i))return;eh.set(i),n.uniformMatrix3fv(this.addr,!1,eh),hn(e,i)}}function Tg(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(fn(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),hn(e,t)}else{if(fn(e,i))return;th.set(i),n.uniformMatrix4fv(this.addr,!1,th),hn(e,i)}}function wg(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Ag(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fn(e,t))return;n.uniform2iv(this.addr,t),hn(e,t)}}function Rg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(fn(e,t))return;n.uniform3iv(this.addr,t),hn(e,t)}}function Cg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fn(e,t))return;n.uniform4iv(this.addr,t),hn(e,t)}}function Ig(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Pg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fn(e,t))return;n.uniform2uiv(this.addr,t),hn(e,t)}}function Lg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(fn(e,t))return;n.uniform3uiv(this.addr,t),hn(e,t)}}function Ng(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fn(e,t))return;n.uniform4uiv(this.addr,t),hn(e,t)}}function Og(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Jf.compareFunction=Yh,r=Jf):r=Jh,e.setTexture2D(t||r,s)}function Ug(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Qh,s)}function Dg(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||tu,s)}function kg(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||jh,s)}function Fg(n){switch(n){case 5126:return _g;case 35664:return bg;case 35665:return vg;case 35666:return Mg;case 35674:return Sg;case 35675:return Eg;case 35676:return Tg;case 5124:case 35670:return wg;case 35667:case 35671:return Ag;case 35668:case 35672:return Rg;case 35669:case 35673:return Cg;case 5125:return Ig;case 36294:return Pg;case 36295:return Lg;case 36296:return Ng;case 35678:case 36198:case 36298:case 36306:case 35682:return Og;case 35679:case 36299:case 36307:return Ug;case 35680:case 36300:case 36308:case 36293:return Dg;case 36289:case 36303:case 36311:case 36292:return kg}}function Bg(n,t){n.uniform1fv(this.addr,t)}function zg(n,t){let e=Dr(t,this.size,2);n.uniform2fv(this.addr,e)}function Hg(n,t){let e=Dr(t,this.size,3);n.uniform3fv(this.addr,e)}function Gg(n,t){let e=Dr(t,this.size,4);n.uniform4fv(this.addr,e)}function Vg(n,t){let e=Dr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Wg(n,t){let e=Dr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Xg(n,t){let e=Dr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Yg(n,t){n.uniform1iv(this.addr,t)}function qg(n,t){n.uniform2iv(this.addr,t)}function $g(n,t){n.uniform3iv(this.addr,t)}function Zg(n,t){n.uniform4iv(this.addr,t)}function Kg(n,t){n.uniform1uiv(this.addr,t)}function Jg(n,t){n.uniform2uiv(this.addr,t)}function jg(n,t){n.uniform3uiv(this.addr,t)}function Qg(n,t){n.uniform4uiv(this.addr,t)}function t2(n,t,e){let i=this.cache,s=t.length,r=al(e,s);fn(i,r)||(n.uniform1iv(this.addr,r),hn(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Jh,r[o])}function e2(n,t,e){let i=this.cache,s=t.length,r=al(e,s);fn(i,r)||(n.uniform1iv(this.addr,r),hn(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Qh,r[o])}function n2(n,t,e){let i=this.cache,s=t.length,r=al(e,s);fn(i,r)||(n.uniform1iv(this.addr,r),hn(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||tu,r[o])}function i2(n,t,e){let i=this.cache,s=t.length,r=al(e,s);fn(i,r)||(n.uniform1iv(this.addr,r),hn(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||jh,r[o])}function s2(n){switch(n){case 5126:return Bg;case 35664:return zg;case 35665:return Hg;case 35666:return Gg;case 35674:return Vg;case 35675:return Wg;case 35676:return Xg;case 5124:case 35670:return Yg;case 35667:case 35671:return qg;case 35668:case 35672:return $g;case 35669:case 35673:return Zg;case 5125:return Kg;case 36294:return Jg;case 36295:return jg;case 36296:return Qg;case 35678:case 36198:case 36298:case 36306:case 35682:return t2;case 35679:case 36299:case 36307:return e2;case 35680:case 36300:case 36308:case 36293:return n2;case 36289:case 36303:case 36311:case 36292:return i2}}var qc=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Fg(e.type)}},$c=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=s2(e.type)}},Zc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},Yl=/(\w+)(\])?(\[|\.)?/g;function ih(n,t){n.seq.push(t),n.map[t.id]=t}function r2(n,t,e){let i=n.name,s=i.length;for(Yl.lastIndex=0;;){let r=Yl.exec(i),o=Yl.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){ih(e,c===void 0?new qc(a,n,t):new $c(a,n,t));break}else{let h=e.map[a];h===void 0&&(h=new Zc(a),ih(e,h)),e=h}}}var mr=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);r2(r,o,this)}}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function sh(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var o2=37297,a2=0;function l2(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var rh=new me;function c2(n){Oe._getMatrix(rh,Oe.workingColorSpace,n);let t=`mat3( ${rh.elements.map(e=>e.toFixed(4))} )`;switch(Oe.getTransfer(n)){case ol:return[t,"LinearTransferOETF"];case We:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function oh(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+l2(n.getShaderSource(t),o)}else return s}function f2(n,t){let e=c2(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function h2(n,t){let e;switch(t){case Md:e="Linear";break;case Sd:e="Reinhard";break;case Ed:e="Cineon";break;case C0:e="ACESFilmic";break;case wd:e="AgX";break;case Ad:e="Neutral";break;case Td:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ca=new N;function u2(){Oe.getLuminanceCoefficients(ca);let n=ca.x.toFixed(4),t=ca.y.toFixed(4),e=ca.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function d2(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(io).join(`
`)}function p2(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function m2(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function io(n){return n!==""}function ah(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function lh(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var g2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kc(n){return n.replace(g2,y2)}var x2=new Map;function y2(n,t){let e=ve[t];if(e===void 0){let i=x2.get(t);if(i!==void 0)e=ve[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Kc(e)}var _2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ch(n){return n.replace(_2,b2)}function b2(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function fh(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function v2(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===sl?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===R0?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===zi&&(t="SHADOWMAP_TYPE_VSM"),t}function M2(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case xr:case yr:t="ENVMAP_TYPE_CUBE";break;case rl:t="ENVMAP_TYPE_CUBE_UV";break}return t}function S2(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case yr:t="ENVMAP_MODE_REFRACTION";break}return t}function E2(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Oh:t="ENVMAP_BLENDING_MULTIPLY";break;case bd:t="ENVMAP_BLENDING_MIX";break;case vd:t="ENVMAP_BLENDING_ADD";break}return t}function T2(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function w2(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=v2(e),c=M2(e),f=S2(e),h=E2(e),u=T2(e),d=d2(e),m=p2(r),x=s.createProgram(),g,p,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(io).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(io).join(`
`),p.length>0&&(p+=`
`)):(g=[fh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(io).join(`
`),p=[fh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+f:"",e.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ds?"#define TONE_MAPPING":"",e.toneMapping!==ds?ve.tonemapping_pars_fragment:"",e.toneMapping!==ds?h2("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ve.colorspace_pars_fragment,f2("linearToOutputTexel",e.outputColorSpace),u2(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(io).join(`
`)),o=Kc(o),o=ah(o,e),o=lh(o,e),a=Kc(a),a=ah(a,e),a=lh(a,e),o=ch(o),a=ch(a),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===Sf?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Sf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let y=_+g+o,b=_+p+a,L=sh(s,s.VERTEX_SHADER,y),R=sh(s,s.FRAGMENT_SHADER,b);s.attachShader(x,L),s.attachShader(x,R),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function w(U){if(n.debug.checkShaderErrors){let W=s.getProgramInfoLog(x).trim(),F=s.getShaderInfoLog(L).trim(),H=s.getShaderInfoLog(R).trim(),ot=!0,j=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(ot=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,L,R);else{let ut=oh(s,L,"vertex"),tt=oh(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+W+`
`+ut+`
`+tt)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(F===""||H==="")&&(j=!1);j&&(U.diagnostics={runnable:ot,programLog:W,vertexShader:{log:F,prefix:g},fragmentShader:{log:H,prefix:p}})}s.deleteShader(L),s.deleteShader(R),P=new mr(s,x),T=m2(s,x)}let P;this.getUniforms=function(){return P===void 0&&w(this),P};let T;this.getAttributes=function(){return T===void 0&&w(this),T};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(x,o2)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=a2++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=L,this.fragmentShader=R,this}var A2=0,Jc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new jc(t),e.set(t,i)),i}},jc=class{constructor(t){this.id=A2++,this.code=t,this.usedTimes=0}};function R2(n,t,e,i,s,r,o){let a=new fo,l=new Jc,c=new Set,f=[],h=s.logarithmicDepthBuffer,u=s.vertexTextures,d=s.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(T){return c.add(T),T===0?"uv":`uv${T}`}function g(T,M,U,W,F){let H=W.fog,ot=F.geometry,j=T.isMeshStandardMaterial?W.environment:null,ut=(T.isMeshStandardMaterial?e:t).get(T.envMap||j),tt=ut&&ut.mapping===rl?ut.image.height:null,Tt=m[T.type];T.precision!==null&&(d=s.getMaxPrecision(T.precision),d!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",d,"instead."));let Rt=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,Bt=Rt!==void 0?Rt.length:0,oe=0;ot.morphAttributes.position!==void 0&&(oe=1),ot.morphAttributes.normal!==void 0&&(oe=2),ot.morphAttributes.color!==void 0&&(oe=3);let ye,st,vt,Vt;if(Tt){let Ne=Ei[Tt];ye=Ne.vertexShader,st=Ne.fragmentShader}else ye=T.vertexShader,st=T.fragmentShader,l.update(T),vt=l.getVertexShaderID(T),Vt=l.getFragmentShaderID(T);let St=n.getRenderTarget(),$t=n.state.buffers.depth.getReversed(),le=F.isInstancedMesh===!0,Zt=F.isBatchedMesh===!0,Se=!!T.map,B=!!T.matcap,rt=!!ut,A=!!T.aoMap,dt=!!T.lightMap,X=!!T.bumpMap,pt=!!T.normalMap,at=!!T.displacementMap,Lt=!!T.emissiveMap,mt=!!T.metalnessMap,I=!!T.roughnessMap,S=T.anisotropy>0,V=T.clearcoat>0,it=T.dispersion>0,ht=T.iridescence>0,lt=T.sheen>0,Wt=T.transmission>0,Nt=S&&!!T.anisotropyMap,zt=V&&!!T.clearcoatMap,se=V&&!!T.clearcoatNormalMap,gt=V&&!!T.clearcoatRoughnessMap,Gt=ht&&!!T.iridescenceMap,ie=ht&&!!T.iridescenceThicknessMap,ce=lt&&!!T.sheenColorMap,Pt=lt&&!!T.sheenRoughnessMap,_e=!!T.specularMap,he=!!T.specularColorMap,Re=!!T.specularIntensityMap,D=Wt&&!!T.transmissionMap,Ct=Wt&&!!T.thicknessMap,Q=!!T.gradientMap,ft=!!T.alphaMap,Ot=T.alphaTest>0,Ut=!!T.alphaHash,fe=!!T.extensions,be=ds;T.toneMapped&&(St===null||St.isXRRenderTarget===!0)&&(be=n.toneMapping);let nn={shaderID:Tt,shaderType:T.type,shaderName:T.name,vertexShader:ye,fragmentShader:st,defines:T.defines,customVertexShaderID:vt,customFragmentShaderID:Vt,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:d,batching:Zt,batchingColor:Zt&&F._colorsTexture!==null,instancing:le,instancingColor:le&&F.instanceColor!==null,instancingMorph:le&&F.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:St===null?n.outputColorSpace:St.isXRRenderTarget===!0?St.texture.colorSpace:Ur,alphaToCoverage:!!T.alphaToCoverage,map:Se,matcap:B,envMap:rt,envMapMode:rt&&ut.mapping,envMapCubeUVHeight:tt,aoMap:A,lightMap:dt,bumpMap:X,normalMap:pt,displacementMap:u&&at,emissiveMap:Lt,normalMapObjectSpace:pt&&T.normalMapType===Pd,normalMapTangentSpace:pt&&T.normalMapType===Xh,metalnessMap:mt,roughnessMap:I,anisotropy:S,anisotropyMap:Nt,clearcoat:V,clearcoatMap:zt,clearcoatNormalMap:se,clearcoatRoughnessMap:gt,dispersion:it,iridescence:ht,iridescenceMap:Gt,iridescenceThicknessMap:ie,sheen:lt,sheenColorMap:ce,sheenRoughnessMap:Pt,specularMap:_e,specularColorMap:he,specularIntensityMap:Re,transmission:Wt,transmissionMap:D,thicknessMap:Ct,gradientMap:Q,opaque:T.transparent===!1&&T.blending===hr&&T.alphaToCoverage===!1,alphaMap:ft,alphaTest:Ot,alphaHash:Ut,combine:T.combine,mapUv:Se&&x(T.map.channel),aoMapUv:A&&x(T.aoMap.channel),lightMapUv:dt&&x(T.lightMap.channel),bumpMapUv:X&&x(T.bumpMap.channel),normalMapUv:pt&&x(T.normalMap.channel),displacementMapUv:at&&x(T.displacementMap.channel),emissiveMapUv:Lt&&x(T.emissiveMap.channel),metalnessMapUv:mt&&x(T.metalnessMap.channel),roughnessMapUv:I&&x(T.roughnessMap.channel),anisotropyMapUv:Nt&&x(T.anisotropyMap.channel),clearcoatMapUv:zt&&x(T.clearcoatMap.channel),clearcoatNormalMapUv:se&&x(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:gt&&x(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Gt&&x(T.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&x(T.iridescenceThicknessMap.channel),sheenColorMapUv:ce&&x(T.sheenColorMap.channel),sheenRoughnessMapUv:Pt&&x(T.sheenRoughnessMap.channel),specularMapUv:_e&&x(T.specularMap.channel),specularColorMapUv:he&&x(T.specularColorMap.channel),specularIntensityMapUv:Re&&x(T.specularIntensityMap.channel),transmissionMapUv:D&&x(T.transmissionMap.channel),thicknessMapUv:Ct&&x(T.thicknessMap.channel),alphaMapUv:ft&&x(T.alphaMap.channel),vertexTangents:!!ot.attributes.tangent&&(pt||S),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!ot.attributes.uv&&(Se||ft),fog:!!H,useFog:T.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:$t,skinning:F.isSkinnedMesh===!0,morphTargets:ot.morphAttributes.position!==void 0,morphNormals:ot.morphAttributes.normal!==void 0,morphColors:ot.morphAttributes.color!==void 0,morphTargetsCount:Bt,morphTextureStride:oe,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:n.shadowMap.enabled&&U.length>0,shadowMapType:n.shadowMap.type,toneMapping:be,decodeVideoTexture:Se&&T.map.isVideoTexture===!0&&Oe.getTransfer(T.map.colorSpace)===We,decodeVideoTextureEmissive:Lt&&T.emissiveMap.isVideoTexture===!0&&Oe.getTransfer(T.emissiveMap.colorSpace)===We,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===we,flipSided:T.side===yn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:fe&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(fe&&T.extensions.multiDraw===!0||Zt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return nn.vertexUv1s=c.has(1),nn.vertexUv2s=c.has(2),nn.vertexUv3s=c.has(3),c.clear(),nn}function p(T){let M=[];if(T.shaderID?M.push(T.shaderID):(M.push(T.customVertexShaderID),M.push(T.customFragmentShaderID)),T.defines!==void 0)for(let U in T.defines)M.push(U),M.push(T.defines[U]);return T.isRawShaderMaterial===!1&&(_(M,T),y(M,T),M.push(n.outputColorSpace)),M.push(T.customProgramCacheKey),M.join()}function _(T,M){T.push(M.precision),T.push(M.outputColorSpace),T.push(M.envMapMode),T.push(M.envMapCubeUVHeight),T.push(M.mapUv),T.push(M.alphaMapUv),T.push(M.lightMapUv),T.push(M.aoMapUv),T.push(M.bumpMapUv),T.push(M.normalMapUv),T.push(M.displacementMapUv),T.push(M.emissiveMapUv),T.push(M.metalnessMapUv),T.push(M.roughnessMapUv),T.push(M.anisotropyMapUv),T.push(M.clearcoatMapUv),T.push(M.clearcoatNormalMapUv),T.push(M.clearcoatRoughnessMapUv),T.push(M.iridescenceMapUv),T.push(M.iridescenceThicknessMapUv),T.push(M.sheenColorMapUv),T.push(M.sheenRoughnessMapUv),T.push(M.specularMapUv),T.push(M.specularColorMapUv),T.push(M.specularIntensityMapUv),T.push(M.transmissionMapUv),T.push(M.thicknessMapUv),T.push(M.combine),T.push(M.fogExp2),T.push(M.sizeAttenuation),T.push(M.morphTargetsCount),T.push(M.morphAttributeCount),T.push(M.numDirLights),T.push(M.numPointLights),T.push(M.numSpotLights),T.push(M.numSpotLightMaps),T.push(M.numHemiLights),T.push(M.numRectAreaLights),T.push(M.numDirLightShadows),T.push(M.numPointLightShadows),T.push(M.numSpotLightShadows),T.push(M.numSpotLightShadowsWithMaps),T.push(M.numLightProbes),T.push(M.shadowMapType),T.push(M.toneMapping),T.push(M.numClippingPlanes),T.push(M.numClipIntersection),T.push(M.depthPacking)}function y(T,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),T.push(a.mask)}function b(T){let M=m[T.type],U;if(M){let W=Ei[M];U=yp.clone(W.uniforms)}else U=T.uniforms;return U}function L(T,M){let U;for(let W=0,F=f.length;W<F;W++){let H=f[W];if(H.cacheKey===M){U=H,++U.usedTimes;break}}return U===void 0&&(U=new w2(n,M,T,r),f.push(U)),U}function R(T){if(--T.usedTimes===0){let M=f.indexOf(T);f[M]=f[f.length-1],f.pop(),T.destroy()}}function w(T){l.remove(T)}function P(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:b,acquireProgram:L,releaseProgram:R,releaseShaderCache:w,programs:f,dispose:P}}function C2(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function I2(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function hh(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function uh(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(h,u,d,m,x,g){let p=n[t];return p===void 0?(p={id:h.id,object:h,geometry:u,material:d,groupOrder:m,renderOrder:h.renderOrder,z:x,group:g},n[t]=p):(p.id=h.id,p.object=h,p.geometry=u,p.material=d,p.groupOrder=m,p.renderOrder=h.renderOrder,p.z=x,p.group=g),t++,p}function a(h,u,d,m,x,g){let p=o(h,u,d,m,x,g);d.transmission>0?i.push(p):d.transparent===!0?s.push(p):e.push(p)}function l(h,u,d,m,x,g){let p=o(h,u,d,m,x,g);d.transmission>0?i.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function c(h,u){e.length>1&&e.sort(h||I2),i.length>1&&i.sort(u||hh),s.length>1&&s.sort(u||hh)}function f(){for(let h=t,u=n.length;h<u;h++){let d=n[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:f,sort:c}}function P2(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new uh,n.set(i,[o])):s>=r.length?(o=new uh,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function L2(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new jt};break;case"SpotLight":e={position:new N,direction:new N,color:new jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new jt,groundColor:new jt};break;case"RectAreaLight":e={color:new jt,position:new N,halfWidth:new N,halfHeight:new N};break}return n[t.id]=e,e}}}function N2(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var O2=0;function U2(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function D2(n){let t=new L2,e=N2(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new N);let s=new N,r=new re,o=new re;function a(c){let f=0,h=0,u=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let d=0,m=0,x=0,g=0,p=0,_=0,y=0,b=0,L=0,R=0,w=0;c.sort(U2);for(let T=0,M=c.length;T<M;T++){let U=c[T],W=U.color,F=U.intensity,H=U.distance,ot=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)f+=W.r*F,h+=W.g*F,u+=W.b*F;else if(U.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(U.sh.coefficients[j],F);w++}else if(U.isDirectionalLight){let j=t.get(U);if(j.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let ut=U.shadow,tt=e.get(U);tt.shadowIntensity=ut.intensity,tt.shadowBias=ut.bias,tt.shadowNormalBias=ut.normalBias,tt.shadowRadius=ut.radius,tt.shadowMapSize=ut.mapSize,i.directionalShadow[d]=tt,i.directionalShadowMap[d]=ot,i.directionalShadowMatrix[d]=U.shadow.matrix,_++}i.directional[d]=j,d++}else if(U.isSpotLight){let j=t.get(U);j.position.setFromMatrixPosition(U.matrixWorld),j.color.copy(W).multiplyScalar(F),j.distance=H,j.coneCos=Math.cos(U.angle),j.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),j.decay=U.decay,i.spot[x]=j;let ut=U.shadow;if(U.map&&(i.spotLightMap[L]=U.map,L++,ut.updateMatrices(U),U.castShadow&&R++),i.spotLightMatrix[x]=ut.matrix,U.castShadow){let tt=e.get(U);tt.shadowIntensity=ut.intensity,tt.shadowBias=ut.bias,tt.shadowNormalBias=ut.normalBias,tt.shadowRadius=ut.radius,tt.shadowMapSize=ut.mapSize,i.spotShadow[x]=tt,i.spotShadowMap[x]=ot,b++}x++}else if(U.isRectAreaLight){let j=t.get(U);j.color.copy(W).multiplyScalar(F),j.halfWidth.set(U.width*.5,0,0),j.halfHeight.set(0,U.height*.5,0),i.rectArea[g]=j,g++}else if(U.isPointLight){let j=t.get(U);if(j.color.copy(U.color).multiplyScalar(U.intensity),j.distance=U.distance,j.decay=U.decay,U.castShadow){let ut=U.shadow,tt=e.get(U);tt.shadowIntensity=ut.intensity,tt.shadowBias=ut.bias,tt.shadowNormalBias=ut.normalBias,tt.shadowRadius=ut.radius,tt.shadowMapSize=ut.mapSize,tt.shadowCameraNear=ut.camera.near,tt.shadowCameraFar=ut.camera.far,i.pointShadow[m]=tt,i.pointShadowMap[m]=ot,i.pointShadowMatrix[m]=U.shadow.matrix,y++}i.point[m]=j,m++}else if(U.isHemisphereLight){let j=t.get(U);j.skyColor.copy(U.color).multiplyScalar(F),j.groundColor.copy(U.groundColor).multiplyScalar(F),i.hemi[p]=j,p++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Dt.LTC_FLOAT_1,i.rectAreaLTC2=Dt.LTC_FLOAT_2):(i.rectAreaLTC1=Dt.LTC_HALF_1,i.rectAreaLTC2=Dt.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=h,i.ambient[2]=u;let P=i.hash;(P.directionalLength!==d||P.pointLength!==m||P.spotLength!==x||P.rectAreaLength!==g||P.hemiLength!==p||P.numDirectionalShadows!==_||P.numPointShadows!==y||P.numSpotShadows!==b||P.numSpotMaps!==L||P.numLightProbes!==w)&&(i.directional.length=d,i.spot.length=x,i.rectArea.length=g,i.point.length=m,i.hemi.length=p,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=b+L-R,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=w,P.directionalLength=d,P.pointLength=m,P.spotLength=x,P.rectAreaLength=g,P.hemiLength=p,P.numDirectionalShadows=_,P.numPointShadows=y,P.numSpotShadows=b,P.numSpotMaps=L,P.numLightProbes=w,i.version=O2++)}function l(c,f){let h=0,u=0,d=0,m=0,x=0,g=f.matrixWorldInverse;for(let p=0,_=c.length;p<_;p++){let y=c[p];if(y.isDirectionalLight){let b=i.directional[h];b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(g),h++}else if(y.isSpotLight){let b=i.spot[d];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(g),b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(g),d++}else if(y.isRectAreaLight){let b=i.rectArea[m];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(g),o.identity(),r.copy(y.matrixWorld),r.premultiply(g),o.extractRotation(r),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),m++}else if(y.isPointLight){let b=i.point[u];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(g),u++}else if(y.isHemisphereLight){let b=i.hemi[x];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(g),x++}}}return{setup:a,setupView:l,state:i}}function dh(n){let t=new D2(n),e=[],i=[];function s(f){c.camera=f,e.length=0,i.length=0}function r(f){e.push(f)}function o(f){i.push(f)}function a(){t.setup(e)}function l(f){t.setupView(e,f)}let c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function k2(n){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new dh(n),t.set(s,[a])):r>=o.length?(a=new dh(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var Qc=class extends Ri{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Cd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},t0=class extends Ri{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},F2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,B2=`uniform sampler2D shadow_pass;
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
}`;function z2(n,t,e){let i=new ho,s=new Mt,r=new Mt,o=new Fe,a=new Qc({depthPacking:Id}),l=new t0,c={},f=e.maxTextureSize,h={[ps]:yn,[yn]:ps,[we]:we},u=new jn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Mt},radius:{value:4}},vertexShader:F2,fragmentShader:B2}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let m=new De;m.setAttribute("position",new Ze(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Xt(m,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sl;let p=this.type;this.render=function(R,w,P){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||R.length===0)return;let T=n.getRenderTarget(),M=n.getActiveCubeFace(),U=n.getActiveMipmapLevel(),W=n.state;W.setBlending(us),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);let F=p!==zi&&this.type===zi,H=p===zi&&this.type!==zi;for(let ot=0,j=R.length;ot<j;ot++){let ut=R[ot],tt=ut.shadow;if(tt===void 0){console.warn("THREE.WebGLShadowMap:",ut,"has no shadow.");continue}if(tt.autoUpdate===!1&&tt.needsUpdate===!1)continue;s.copy(tt.mapSize);let Tt=tt.getFrameExtents();if(s.multiply(Tt),r.copy(tt.mapSize),(s.x>f||s.y>f)&&(s.x>f&&(r.x=Math.floor(f/Tt.x),s.x=r.x*Tt.x,tt.mapSize.x=r.x),s.y>f&&(r.y=Math.floor(f/Tt.y),s.y=r.y*Tt.y,tt.mapSize.y=r.y)),tt.map===null||F===!0||H===!0){let Bt=this.type!==zi?{minFilter:Jn,magFilter:Jn}:{};tt.map!==null&&tt.map.dispose(),tt.map=new Zi(s.x,s.y,Bt),tt.map.texture.name=ut.name+".shadowMap",tt.camera.updateProjectionMatrix()}n.setRenderTarget(tt.map),n.clear();let Rt=tt.getViewportCount();for(let Bt=0;Bt<Rt;Bt++){let oe=tt.getViewport(Bt);o.set(r.x*oe.x,r.y*oe.y,r.x*oe.z,r.y*oe.w),W.viewport(o),tt.updateMatrices(ut,Bt),i=tt.getFrustum(),b(w,P,tt.camera,ut,this.type)}tt.isPointLightShadow!==!0&&this.type===zi&&_(tt,P),tt.needsUpdate=!1}p=this.type,g.needsUpdate=!1,n.setRenderTarget(T,M,U)};function _(R,w){let P=t.update(x);u.defines.VSM_SAMPLES!==R.blurSamples&&(u.defines.VSM_SAMPLES=R.blurSamples,d.defines.VSM_SAMPLES=R.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Zi(s.x,s.y)),u.uniforms.shadow_pass.value=R.map.texture,u.uniforms.resolution.value=R.mapSize,u.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(w,null,P,u,x,null),d.uniforms.shadow_pass.value=R.mapPass.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(w,null,P,d,x,null)}function y(R,w,P,T){let M=null,U=P.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(U!==void 0)M=U;else if(M=P.isPointLight===!0?l:a,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){let W=M.uuid,F=w.uuid,H=c[W];H===void 0&&(H={},c[W]=H);let ot=H[F];ot===void 0&&(ot=M.clone(),H[F]=ot,w.addEventListener("dispose",L)),M=ot}if(M.visible=w.visible,M.wireframe=w.wireframe,T===zi?M.side=w.shadowSide!==null?w.shadowSide:w.side:M.side=w.shadowSide!==null?w.shadowSide:h[w.side],M.alphaMap=w.alphaMap,M.alphaTest=w.alphaTest,M.map=w.map,M.clipShadows=w.clipShadows,M.clippingPlanes=w.clippingPlanes,M.clipIntersection=w.clipIntersection,M.displacementMap=w.displacementMap,M.displacementScale=w.displacementScale,M.displacementBias=w.displacementBias,M.wireframeLinewidth=w.wireframeLinewidth,M.linewidth=w.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let W=n.properties.get(M);W.light=P}return M}function b(R,w,P,T,M){if(R.visible===!1)return;if(R.layers.test(w.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&M===zi)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,R.matrixWorld);let F=t.update(R),H=R.material;if(Array.isArray(H)){let ot=F.groups;for(let j=0,ut=ot.length;j<ut;j++){let tt=ot[j],Tt=H[tt.materialIndex];if(Tt&&Tt.visible){let Rt=y(R,Tt,T,M);R.onBeforeShadow(n,R,w,P,F,Rt,tt),n.renderBufferDirect(P,null,F,Rt,R,tt),R.onAfterShadow(n,R,w,P,F,Rt,tt)}}}else if(H.visible){let ot=y(R,H,T,M);R.onBeforeShadow(n,R,w,P,F,ot,null),n.renderBufferDirect(P,null,F,ot,R,null),R.onAfterShadow(n,R,w,P,F,ot,null)}}let W=R.children;for(let F=0,H=W.length;F<H;F++)b(W[F],w,P,T,M)}function L(R){R.target.removeEventListener("dispose",L);for(let P in c){let T=c[P],M=R.target.uuid;M in T&&(T[M].dispose(),delete T[M])}}}var H2={[ic]:sc,[rc]:lc,[oc]:cc,[gr]:ac,[sc]:ic,[lc]:rc,[cc]:oc,[ac]:gr};function G2(n,t){function e(){let D=!1,Ct=new Fe,Q=null,ft=new Fe(0,0,0,0);return{setMask:function(Ot){Q!==Ot&&!D&&(n.colorMask(Ot,Ot,Ot,Ot),Q=Ot)},setLocked:function(Ot){D=Ot},setClear:function(Ot,Ut,fe,be,nn){nn===!0&&(Ot*=be,Ut*=be,fe*=be),Ct.set(Ot,Ut,fe,be),ft.equals(Ct)===!1&&(n.clearColor(Ot,Ut,fe,be),ft.copy(Ct))},reset:function(){D=!1,Q=null,ft.set(-1,0,0,0)}}}function i(){let D=!1,Ct=!1,Q=null,ft=null,Ot=null;return{setReversed:function(Ut){if(Ct!==Ut){let fe=t.get("EXT_clip_control");Ct?fe.clipControlEXT(fe.LOWER_LEFT_EXT,fe.ZERO_TO_ONE_EXT):fe.clipControlEXT(fe.LOWER_LEFT_EXT,fe.NEGATIVE_ONE_TO_ONE_EXT);let be=Ot;Ot=null,this.setClear(be)}Ct=Ut},getReversed:function(){return Ct},setTest:function(Ut){Ut?St(n.DEPTH_TEST):$t(n.DEPTH_TEST)},setMask:function(Ut){Q!==Ut&&!D&&(n.depthMask(Ut),Q=Ut)},setFunc:function(Ut){if(Ct&&(Ut=H2[Ut]),ft!==Ut){switch(Ut){case ic:n.depthFunc(n.NEVER);break;case sc:n.depthFunc(n.ALWAYS);break;case rc:n.depthFunc(n.LESS);break;case gr:n.depthFunc(n.LEQUAL);break;case oc:n.depthFunc(n.EQUAL);break;case ac:n.depthFunc(n.GEQUAL);break;case lc:n.depthFunc(n.GREATER);break;case cc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ft=Ut}},setLocked:function(Ut){D=Ut},setClear:function(Ut){Ot!==Ut&&(Ct&&(Ut=1-Ut),n.clearDepth(Ut),Ot=Ut)},reset:function(){D=!1,Q=null,ft=null,Ot=null,Ct=!1}}}function s(){let D=!1,Ct=null,Q=null,ft=null,Ot=null,Ut=null,fe=null,be=null,nn=null;return{setTest:function(Ne){D||(Ne?St(n.STENCIL_TEST):$t(n.STENCIL_TEST))},setMask:function(Ne){Ct!==Ne&&!D&&(n.stencilMask(Ne),Ct=Ne)},setFunc:function(Ne,wn,Xe){(Q!==Ne||ft!==wn||Ot!==Xe)&&(n.stencilFunc(Ne,wn,Xe),Q=Ne,ft=wn,Ot=Xe)},setOp:function(Ne,wn,Xe){(Ut!==Ne||fe!==wn||be!==Xe)&&(n.stencilOp(Ne,wn,Xe),Ut=Ne,fe=wn,be=Xe)},setLocked:function(Ne){D=Ne},setClear:function(Ne){nn!==Ne&&(n.clearStencil(Ne),nn=Ne)},reset:function(){D=!1,Ct=null,Q=null,ft=null,Ot=null,Ut=null,fe=null,be=null,nn=null}}}let r=new e,o=new i,a=new s,l=new WeakMap,c=new WeakMap,f={},h={},u=new WeakMap,d=[],m=null,x=!1,g=null,p=null,_=null,y=null,b=null,L=null,R=null,w=new jt(0,0,0),P=0,T=!1,M=null,U=null,W=null,F=null,H=null,ot=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),j=!1,ut=0,tt=n.getParameter(n.VERSION);tt.indexOf("WebGL")!==-1?(ut=parseFloat(/^WebGL (\d)/.exec(tt)[1]),j=ut>=1):tt.indexOf("OpenGL ES")!==-1&&(ut=parseFloat(/^OpenGL ES (\d)/.exec(tt)[1]),j=ut>=2);let Tt=null,Rt={},Bt=n.getParameter(n.SCISSOR_BOX),oe=n.getParameter(n.VIEWPORT),ye=new Fe().fromArray(Bt),st=new Fe().fromArray(oe);function vt(D,Ct,Q,ft){let Ot=new Uint8Array(4),Ut=n.createTexture();n.bindTexture(D,Ut),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let fe=0;fe<Q;fe++)D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY?n.texImage3D(Ct,0,n.RGBA,1,1,ft,0,n.RGBA,n.UNSIGNED_BYTE,Ot):n.texImage2D(Ct+fe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ot);return Ut}let Vt={};Vt[n.TEXTURE_2D]=vt(n.TEXTURE_2D,n.TEXTURE_2D,1),Vt[n.TEXTURE_CUBE_MAP]=vt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Vt[n.TEXTURE_2D_ARRAY]=vt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Vt[n.TEXTURE_3D]=vt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),St(n.DEPTH_TEST),o.setFunc(gr),X(!1),pt(gf),St(n.CULL_FACE),A(us);function St(D){f[D]!==!0&&(n.enable(D),f[D]=!0)}function $t(D){f[D]!==!1&&(n.disable(D),f[D]=!1)}function le(D,Ct){return h[D]!==Ct?(n.bindFramebuffer(D,Ct),h[D]=Ct,D===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=Ct),D===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=Ct),!0):!1}function Zt(D,Ct){let Q=d,ft=!1;if(D){Q=u.get(Ct),Q===void 0&&(Q=[],u.set(Ct,Q));let Ot=D.textures;if(Q.length!==Ot.length||Q[0]!==n.COLOR_ATTACHMENT0){for(let Ut=0,fe=Ot.length;Ut<fe;Ut++)Q[Ut]=n.COLOR_ATTACHMENT0+Ut;Q.length=Ot.length,ft=!0}}else Q[0]!==n.BACK&&(Q[0]=n.BACK,ft=!0);ft&&n.drawBuffers(Q)}function Se(D){return m!==D?(n.useProgram(D),m=D,!0):!1}let B={[Cs]:n.FUNC_ADD,[id]:n.FUNC_SUBTRACT,[sd]:n.FUNC_REVERSE_SUBTRACT};B[rd]=n.MIN,B[od]=n.MAX;let rt={[ad]:n.ZERO,[ld]:n.ONE,[cd]:n.SRC_COLOR,[ec]:n.SRC_ALPHA,[md]:n.SRC_ALPHA_SATURATE,[dd]:n.DST_COLOR,[hd]:n.DST_ALPHA,[fd]:n.ONE_MINUS_SRC_COLOR,[nc]:n.ONE_MINUS_SRC_ALPHA,[pd]:n.ONE_MINUS_DST_COLOR,[ud]:n.ONE_MINUS_DST_ALPHA,[gd]:n.CONSTANT_COLOR,[xd]:n.ONE_MINUS_CONSTANT_COLOR,[yd]:n.CONSTANT_ALPHA,[_d]:n.ONE_MINUS_CONSTANT_ALPHA};function A(D,Ct,Q,ft,Ot,Ut,fe,be,nn,Ne){if(D===us){x===!0&&($t(n.BLEND),x=!1);return}if(x===!1&&(St(n.BLEND),x=!0),D!==nd){if(D!==g||Ne!==T){if((p!==Cs||b!==Cs)&&(n.blendEquation(n.FUNC_ADD),p=Cs,b=Cs),Ne)switch(D){case hr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Yi:n.blendFunc(n.ONE,n.ONE);break;case xf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case yf:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case hr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Yi:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case xf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case yf:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}_=null,y=null,L=null,R=null,w.set(0,0,0),P=0,g=D,T=Ne}return}Ot=Ot||Ct,Ut=Ut||Q,fe=fe||ft,(Ct!==p||Ot!==b)&&(n.blendEquationSeparate(B[Ct],B[Ot]),p=Ct,b=Ot),(Q!==_||ft!==y||Ut!==L||fe!==R)&&(n.blendFuncSeparate(rt[Q],rt[ft],rt[Ut],rt[fe]),_=Q,y=ft,L=Ut,R=fe),(be.equals(w)===!1||nn!==P)&&(n.blendColor(be.r,be.g,be.b,nn),w.copy(be),P=nn),g=D,T=!1}function dt(D,Ct){D.side===we?$t(n.CULL_FACE):St(n.CULL_FACE);let Q=D.side===yn;Ct&&(Q=!Q),X(Q),D.blending===hr&&D.transparent===!1?A(us):A(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);let ft=D.stencilWrite;a.setTest(ft),ft&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Lt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?St(n.SAMPLE_ALPHA_TO_COVERAGE):$t(n.SAMPLE_ALPHA_TO_COVERAGE)}function X(D){M!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),M=D)}function pt(D){D!==td?(St(n.CULL_FACE),D!==U&&(D===gf?n.cullFace(n.BACK):D===ed?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):$t(n.CULL_FACE),U=D}function at(D){D!==W&&(j&&n.lineWidth(D),W=D)}function Lt(D,Ct,Q){D?(St(n.POLYGON_OFFSET_FILL),(F!==Ct||H!==Q)&&(n.polygonOffset(Ct,Q),F=Ct,H=Q)):$t(n.POLYGON_OFFSET_FILL)}function mt(D){D?St(n.SCISSOR_TEST):$t(n.SCISSOR_TEST)}function I(D){D===void 0&&(D=n.TEXTURE0+ot-1),Tt!==D&&(n.activeTexture(D),Tt=D)}function S(D,Ct,Q){Q===void 0&&(Tt===null?Q=n.TEXTURE0+ot-1:Q=Tt);let ft=Rt[Q];ft===void 0&&(ft={type:void 0,texture:void 0},Rt[Q]=ft),(ft.type!==D||ft.texture!==Ct)&&(Tt!==Q&&(n.activeTexture(Q),Tt=Q),n.bindTexture(D,Ct||Vt[D]),ft.type=D,ft.texture=Ct)}function V(){let D=Rt[Tt];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function it(){try{n.compressedTexImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ht(){try{n.compressedTexImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function lt(){try{n.texSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Wt(){try{n.texSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Nt(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function zt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function se(){try{n.texStorage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function gt(){try{n.texStorage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Gt(){try{n.texImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ie(){try{n.texImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ce(D){ye.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),ye.copy(D))}function Pt(D){st.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),st.copy(D))}function _e(D,Ct){let Q=c.get(Ct);Q===void 0&&(Q=new WeakMap,c.set(Ct,Q));let ft=Q.get(D);ft===void 0&&(ft=n.getUniformBlockIndex(Ct,D.name),Q.set(D,ft))}function he(D,Ct){let ft=c.get(Ct).get(D);l.get(Ct)!==ft&&(n.uniformBlockBinding(Ct,ft,D.__bindingPointIndex),l.set(Ct,ft))}function Re(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},Tt=null,Rt={},h={},u=new WeakMap,d=[],m=null,x=!1,g=null,p=null,_=null,y=null,b=null,L=null,R=null,w=new jt(0,0,0),P=0,T=!1,M=null,U=null,W=null,F=null,H=null,ye.set(0,0,n.canvas.width,n.canvas.height),st.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:St,disable:$t,bindFramebuffer:le,drawBuffers:Zt,useProgram:Se,setBlending:A,setMaterial:dt,setFlipSided:X,setCullFace:pt,setLineWidth:at,setPolygonOffset:Lt,setScissorTest:mt,activeTexture:I,bindTexture:S,unbindTexture:V,compressedTexImage2D:it,compressedTexImage3D:ht,texImage2D:Gt,texImage3D:ie,updateUBOMapping:_e,uniformBlockBinding:he,texStorage2D:se,texStorage3D:gt,texSubImage2D:lt,texSubImage3D:Wt,compressedTexSubImage2D:Nt,compressedTexSubImage3D:zt,scissor:ce,viewport:Pt,reset:Re}}function ph(n,t,e,i){let s=V2(i);switch(e){case Bh:return n*t;case Hh:return n*t;case Gh:return n*t*2;case N0:return n*t/s.components*s.byteLength;case O0:return n*t/s.components*s.byteLength;case Vh:return n*t*2/s.components*s.byteLength;case U0:return n*t*2/s.components*s.byteLength;case zh:return n*t*3/s.components*s.byteLength;case pi:return n*t*4/s.components*s.byteLength;case D0:return n*t*4/s.components*s.byteLength;case Ta:case wa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Aa:case Ra:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case pc:case gc:return Math.max(n,16)*Math.max(t,8)/4;case dc:case mc:return Math.max(n,8)*Math.max(t,8)/2;case xc:case yc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case _c:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case bc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case vc:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Mc:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Sc:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Ec:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Tc:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case wc:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Ac:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Rc:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Cc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Ic:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Pc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Lc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Nc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Ca:case Oc:case Uc:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Wh:case Dc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case kc:case Fc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function V2(n){switch(n){case $i:case Dh:return{byteLength:1,components:1};case co:case kh:case To:return{byteLength:2,components:1};case P0:case L0:return{byteLength:2,components:4};case Ps:case I0:case wi:return{byteLength:4,components:1};case Fh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function W2(n,t,e,i,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Mt,f=new WeakMap,h,u=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(I,S){return d?new OffscreenCanvas(I,S):La("canvas")}function x(I,S,V){let it=1,ht=mt(I);if((ht.width>V||ht.height>V)&&(it=V/Math.max(ht.width,ht.height)),it<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let lt=Math.floor(it*ht.width),Wt=Math.floor(it*ht.height);h===void 0&&(h=m(lt,Wt));let Nt=S?m(lt,Wt):h;return Nt.width=lt,Nt.height=Wt,Nt.getContext("2d").drawImage(I,0,0,lt,Wt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ht.width+"x"+ht.height+") to ("+lt+"x"+Wt+")."),Nt}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ht.width+"x"+ht.height+")."),I;return I}function g(I){return I.generateMipmaps}function p(I){n.generateMipmap(I)}function _(I){return I.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?n.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(I,S,V,it,ht=!1){if(I!==null){if(n[I]!==void 0)return n[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let lt=S;if(S===n.RED&&(V===n.FLOAT&&(lt=n.R32F),V===n.HALF_FLOAT&&(lt=n.R16F),V===n.UNSIGNED_BYTE&&(lt=n.R8)),S===n.RED_INTEGER&&(V===n.UNSIGNED_BYTE&&(lt=n.R8UI),V===n.UNSIGNED_SHORT&&(lt=n.R16UI),V===n.UNSIGNED_INT&&(lt=n.R32UI),V===n.BYTE&&(lt=n.R8I),V===n.SHORT&&(lt=n.R16I),V===n.INT&&(lt=n.R32I)),S===n.RG&&(V===n.FLOAT&&(lt=n.RG32F),V===n.HALF_FLOAT&&(lt=n.RG16F),V===n.UNSIGNED_BYTE&&(lt=n.RG8)),S===n.RG_INTEGER&&(V===n.UNSIGNED_BYTE&&(lt=n.RG8UI),V===n.UNSIGNED_SHORT&&(lt=n.RG16UI),V===n.UNSIGNED_INT&&(lt=n.RG32UI),V===n.BYTE&&(lt=n.RG8I),V===n.SHORT&&(lt=n.RG16I),V===n.INT&&(lt=n.RG32I)),S===n.RGB_INTEGER&&(V===n.UNSIGNED_BYTE&&(lt=n.RGB8UI),V===n.UNSIGNED_SHORT&&(lt=n.RGB16UI),V===n.UNSIGNED_INT&&(lt=n.RGB32UI),V===n.BYTE&&(lt=n.RGB8I),V===n.SHORT&&(lt=n.RGB16I),V===n.INT&&(lt=n.RGB32I)),S===n.RGBA_INTEGER&&(V===n.UNSIGNED_BYTE&&(lt=n.RGBA8UI),V===n.UNSIGNED_SHORT&&(lt=n.RGBA16UI),V===n.UNSIGNED_INT&&(lt=n.RGBA32UI),V===n.BYTE&&(lt=n.RGBA8I),V===n.SHORT&&(lt=n.RGBA16I),V===n.INT&&(lt=n.RGBA32I)),S===n.RGB&&V===n.UNSIGNED_INT_5_9_9_9_REV&&(lt=n.RGB9_E5),S===n.RGBA){let Wt=ht?ol:Oe.getTransfer(it);V===n.FLOAT&&(lt=n.RGBA32F),V===n.HALF_FLOAT&&(lt=n.RGBA16F),V===n.UNSIGNED_BYTE&&(lt=Wt===We?n.SRGB8_ALPHA8:n.RGBA8),V===n.UNSIGNED_SHORT_4_4_4_4&&(lt=n.RGBA4),V===n.UNSIGNED_SHORT_5_5_5_1&&(lt=n.RGB5_A1)}return(lt===n.R16F||lt===n.R32F||lt===n.RG16F||lt===n.RG32F||lt===n.RGBA16F||lt===n.RGBA32F)&&t.get("EXT_color_buffer_float"),lt}function b(I,S){let V;return I?S===null||S===Ps||S===_r?V=n.DEPTH24_STENCIL8:S===wi?V=n.DEPTH32F_STENCIL8:S===co&&(V=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Ps||S===_r?V=n.DEPTH_COMPONENT24:S===wi?V=n.DEPTH_COMPONENT32F:S===co&&(V=n.DEPTH_COMPONENT16),V}function L(I,S){return g(I)===!0||I.isFramebufferTexture&&I.minFilter!==Jn&&I.minFilter!==Ti?Math.log2(Math.max(S.width,S.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?S.mipmaps.length:1}function R(I){let S=I.target;S.removeEventListener("dispose",R),P(S),S.isVideoTexture&&f.delete(S)}function w(I){let S=I.target;S.removeEventListener("dispose",w),M(S)}function P(I){let S=i.get(I);if(S.__webglInit===void 0)return;let V=I.source,it=u.get(V);if(it){let ht=it[S.__cacheKey];ht.usedTimes--,ht.usedTimes===0&&T(I),Object.keys(it).length===0&&u.delete(V)}i.remove(I)}function T(I){let S=i.get(I);n.deleteTexture(S.__webglTexture);let V=I.source,it=u.get(V);delete it[S.__cacheKey],o.memory.textures--}function M(I){let S=i.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),i.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let it=0;it<6;it++){if(Array.isArray(S.__webglFramebuffer[it]))for(let ht=0;ht<S.__webglFramebuffer[it].length;ht++)n.deleteFramebuffer(S.__webglFramebuffer[it][ht]);else n.deleteFramebuffer(S.__webglFramebuffer[it]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[it])}else{if(Array.isArray(S.__webglFramebuffer))for(let it=0;it<S.__webglFramebuffer.length;it++)n.deleteFramebuffer(S.__webglFramebuffer[it]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let it=0;it<S.__webglColorRenderbuffer.length;it++)S.__webglColorRenderbuffer[it]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[it]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let V=I.textures;for(let it=0,ht=V.length;it<ht;it++){let lt=i.get(V[it]);lt.__webglTexture&&(n.deleteTexture(lt.__webglTexture),o.memory.textures--),i.remove(V[it])}i.remove(I)}let U=0;function W(){U=0}function F(){let I=U;return I>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+s.maxTextures),U+=1,I}function H(I){let S=[];return S.push(I.wrapS),S.push(I.wrapT),S.push(I.wrapR||0),S.push(I.magFilter),S.push(I.minFilter),S.push(I.anisotropy),S.push(I.internalFormat),S.push(I.format),S.push(I.type),S.push(I.generateMipmaps),S.push(I.premultiplyAlpha),S.push(I.flipY),S.push(I.unpackAlignment),S.push(I.colorSpace),S.join()}function ot(I,S){let V=i.get(I);if(I.isVideoTexture&&at(I),I.isRenderTargetTexture===!1&&I.version>0&&V.__version!==I.version){let it=I.image;if(it===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(it.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{st(V,I,S);return}}e.bindTexture(n.TEXTURE_2D,V.__webglTexture,n.TEXTURE0+S)}function j(I,S){let V=i.get(I);if(I.version>0&&V.__version!==I.version){st(V,I,S);return}e.bindTexture(n.TEXTURE_2D_ARRAY,V.__webglTexture,n.TEXTURE0+S)}function ut(I,S){let V=i.get(I);if(I.version>0&&V.__version!==I.version){st(V,I,S);return}e.bindTexture(n.TEXTURE_3D,V.__webglTexture,n.TEXTURE0+S)}function tt(I,S){let V=i.get(I);if(I.version>0&&V.__version!==I.version){vt(V,I,S);return}e.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture,n.TEXTURE0+S)}let Tt={[qi]:n.REPEAT,[Gi]:n.CLAMP_TO_EDGE,[uc]:n.MIRRORED_REPEAT},Rt={[Jn]:n.NEAREST,[Rd]:n.NEAREST_MIPMAP_NEAREST,[Vo]:n.NEAREST_MIPMAP_LINEAR,[Ti]:n.LINEAR,[_l]:n.LINEAR_MIPMAP_NEAREST,[Vi]:n.LINEAR_MIPMAP_LINEAR},Bt={[Ld]:n.NEVER,[Fd]:n.ALWAYS,[Nd]:n.LESS,[Yh]:n.LEQUAL,[Od]:n.EQUAL,[kd]:n.GEQUAL,[Ud]:n.GREATER,[Dd]:n.NOTEQUAL};function oe(I,S){if(S.type===wi&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Ti||S.magFilter===_l||S.magFilter===Vo||S.magFilter===Vi||S.minFilter===Ti||S.minFilter===_l||S.minFilter===Vo||S.minFilter===Vi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(I,n.TEXTURE_WRAP_S,Tt[S.wrapS]),n.texParameteri(I,n.TEXTURE_WRAP_T,Tt[S.wrapT]),(I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY)&&n.texParameteri(I,n.TEXTURE_WRAP_R,Tt[S.wrapR]),n.texParameteri(I,n.TEXTURE_MAG_FILTER,Rt[S.magFilter]),n.texParameteri(I,n.TEXTURE_MIN_FILTER,Rt[S.minFilter]),S.compareFunction&&(n.texParameteri(I,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(I,n.TEXTURE_COMPARE_FUNC,Bt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Jn||S.minFilter!==Vo&&S.minFilter!==Vi||S.type===wi&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){let V=t.get("EXT_texture_filter_anisotropic");n.texParameterf(I,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function ye(I,S){let V=!1;I.__webglInit===void 0&&(I.__webglInit=!0,S.addEventListener("dispose",R));let it=S.source,ht=u.get(it);ht===void 0&&(ht={},u.set(it,ht));let lt=H(S);if(lt!==I.__cacheKey){ht[lt]===void 0&&(ht[lt]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,V=!0),ht[lt].usedTimes++;let Wt=ht[I.__cacheKey];Wt!==void 0&&(ht[I.__cacheKey].usedTimes--,Wt.usedTimes===0&&T(S)),I.__cacheKey=lt,I.__webglTexture=ht[lt].texture}return V}function st(I,S,V){let it=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(it=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(it=n.TEXTURE_3D);let ht=ye(I,S),lt=S.source;e.bindTexture(it,I.__webglTexture,n.TEXTURE0+V);let Wt=i.get(lt);if(lt.version!==Wt.__version||ht===!0){e.activeTexture(n.TEXTURE0+V);let Nt=Oe.getPrimaries(Oe.workingColorSpace),zt=S.colorSpace===ii?null:Oe.getPrimaries(S.colorSpace),se=S.colorSpace===ii||Nt===zt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);let gt=x(S.image,!1,s.maxTextureSize);gt=Lt(S,gt);let Gt=r.convert(S.format,S.colorSpace),ie=r.convert(S.type),ce=y(S.internalFormat,Gt,ie,S.colorSpace,S.isVideoTexture);oe(it,S);let Pt,_e=S.mipmaps,he=S.isVideoTexture!==!0,Re=Wt.__version===void 0||ht===!0,D=lt.dataReady,Ct=L(S,gt);if(S.isDepthTexture)ce=b(S.format===br,S.type),Re&&(he?e.texStorage2D(n.TEXTURE_2D,1,ce,gt.width,gt.height):e.texImage2D(n.TEXTURE_2D,0,ce,gt.width,gt.height,0,Gt,ie,null));else if(S.isDataTexture)if(_e.length>0){he&&Re&&e.texStorage2D(n.TEXTURE_2D,Ct,ce,_e[0].width,_e[0].height);for(let Q=0,ft=_e.length;Q<ft;Q++)Pt=_e[Q],he?D&&e.texSubImage2D(n.TEXTURE_2D,Q,0,0,Pt.width,Pt.height,Gt,ie,Pt.data):e.texImage2D(n.TEXTURE_2D,Q,ce,Pt.width,Pt.height,0,Gt,ie,Pt.data);S.generateMipmaps=!1}else he?(Re&&e.texStorage2D(n.TEXTURE_2D,Ct,ce,gt.width,gt.height),D&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,gt.width,gt.height,Gt,ie,gt.data)):e.texImage2D(n.TEXTURE_2D,0,ce,gt.width,gt.height,0,Gt,ie,gt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){he&&Re&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Ct,ce,_e[0].width,_e[0].height,gt.depth);for(let Q=0,ft=_e.length;Q<ft;Q++)if(Pt=_e[Q],S.format!==pi)if(Gt!==null)if(he){if(D)if(S.layerUpdates.size>0){let Ot=ph(Pt.width,Pt.height,S.format,S.type);for(let Ut of S.layerUpdates){let fe=Pt.data.subarray(Ut*Ot/Pt.data.BYTES_PER_ELEMENT,(Ut+1)*Ot/Pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,Ut,Pt.width,Pt.height,1,Gt,fe)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,Pt.width,Pt.height,gt.depth,Gt,Pt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Q,ce,Pt.width,Pt.height,gt.depth,0,Pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else he?D&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,Pt.width,Pt.height,gt.depth,Gt,ie,Pt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,Q,ce,Pt.width,Pt.height,gt.depth,0,Gt,ie,Pt.data)}else{he&&Re&&e.texStorage2D(n.TEXTURE_2D,Ct,ce,_e[0].width,_e[0].height);for(let Q=0,ft=_e.length;Q<ft;Q++)Pt=_e[Q],S.format!==pi?Gt!==null?he?D&&e.compressedTexSubImage2D(n.TEXTURE_2D,Q,0,0,Pt.width,Pt.height,Gt,Pt.data):e.compressedTexImage2D(n.TEXTURE_2D,Q,ce,Pt.width,Pt.height,0,Pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):he?D&&e.texSubImage2D(n.TEXTURE_2D,Q,0,0,Pt.width,Pt.height,Gt,ie,Pt.data):e.texImage2D(n.TEXTURE_2D,Q,ce,Pt.width,Pt.height,0,Gt,ie,Pt.data)}else if(S.isDataArrayTexture)if(he){if(Re&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Ct,ce,gt.width,gt.height,gt.depth),D)if(S.layerUpdates.size>0){let Q=ph(gt.width,gt.height,S.format,S.type);for(let ft of S.layerUpdates){let Ot=gt.data.subarray(ft*Q/gt.data.BYTES_PER_ELEMENT,(ft+1)*Q/gt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ft,gt.width,gt.height,1,Gt,ie,Ot)}S.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,gt.width,gt.height,gt.depth,Gt,ie,gt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,ce,gt.width,gt.height,gt.depth,0,Gt,ie,gt.data);else if(S.isData3DTexture)he?(Re&&e.texStorage3D(n.TEXTURE_3D,Ct,ce,gt.width,gt.height,gt.depth),D&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,gt.width,gt.height,gt.depth,Gt,ie,gt.data)):e.texImage3D(n.TEXTURE_3D,0,ce,gt.width,gt.height,gt.depth,0,Gt,ie,gt.data);else if(S.isFramebufferTexture){if(Re)if(he)e.texStorage2D(n.TEXTURE_2D,Ct,ce,gt.width,gt.height);else{let Q=gt.width,ft=gt.height;for(let Ot=0;Ot<Ct;Ot++)e.texImage2D(n.TEXTURE_2D,Ot,ce,Q,ft,0,Gt,ie,null),Q>>=1,ft>>=1}}else if(_e.length>0){if(he&&Re){let Q=mt(_e[0]);e.texStorage2D(n.TEXTURE_2D,Ct,ce,Q.width,Q.height)}for(let Q=0,ft=_e.length;Q<ft;Q++)Pt=_e[Q],he?D&&e.texSubImage2D(n.TEXTURE_2D,Q,0,0,Gt,ie,Pt):e.texImage2D(n.TEXTURE_2D,Q,ce,Gt,ie,Pt);S.generateMipmaps=!1}else if(he){if(Re){let Q=mt(gt);e.texStorage2D(n.TEXTURE_2D,Ct,ce,Q.width,Q.height)}D&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Gt,ie,gt)}else e.texImage2D(n.TEXTURE_2D,0,ce,Gt,ie,gt);g(S)&&p(it),Wt.__version=lt.version,S.onUpdate&&S.onUpdate(S)}I.__version=S.version}function vt(I,S,V){if(S.image.length!==6)return;let it=ye(I,S),ht=S.source;e.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+V);let lt=i.get(ht);if(ht.version!==lt.__version||it===!0){e.activeTexture(n.TEXTURE0+V);let Wt=Oe.getPrimaries(Oe.workingColorSpace),Nt=S.colorSpace===ii?null:Oe.getPrimaries(S.colorSpace),zt=S.colorSpace===ii||Wt===Nt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,zt);let se=S.isCompressedTexture||S.image[0].isCompressedTexture,gt=S.image[0]&&S.image[0].isDataTexture,Gt=[];for(let ft=0;ft<6;ft++)!se&&!gt?Gt[ft]=x(S.image[ft],!0,s.maxCubemapSize):Gt[ft]=gt?S.image[ft].image:S.image[ft],Gt[ft]=Lt(S,Gt[ft]);let ie=Gt[0],ce=r.convert(S.format,S.colorSpace),Pt=r.convert(S.type),_e=y(S.internalFormat,ce,Pt,S.colorSpace),he=S.isVideoTexture!==!0,Re=lt.__version===void 0||it===!0,D=ht.dataReady,Ct=L(S,ie);oe(n.TEXTURE_CUBE_MAP,S);let Q;if(se){he&&Re&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Ct,_e,ie.width,ie.height);for(let ft=0;ft<6;ft++){Q=Gt[ft].mipmaps;for(let Ot=0;Ot<Q.length;Ot++){let Ut=Q[Ot];S.format!==pi?ce!==null?he?D&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Ot,0,0,Ut.width,Ut.height,ce,Ut.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Ot,_e,Ut.width,Ut.height,0,Ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):he?D&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Ot,0,0,Ut.width,Ut.height,ce,Pt,Ut.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Ot,_e,Ut.width,Ut.height,0,ce,Pt,Ut.data)}}}else{if(Q=S.mipmaps,he&&Re){Q.length>0&&Ct++;let ft=mt(Gt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Ct,_e,ft.width,ft.height)}for(let ft=0;ft<6;ft++)if(gt){he?D&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,Gt[ft].width,Gt[ft].height,ce,Pt,Gt[ft].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,_e,Gt[ft].width,Gt[ft].height,0,ce,Pt,Gt[ft].data);for(let Ot=0;Ot<Q.length;Ot++){let fe=Q[Ot].image[ft].image;he?D&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Ot+1,0,0,fe.width,fe.height,ce,Pt,fe.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Ot+1,_e,fe.width,fe.height,0,ce,Pt,fe.data)}}else{he?D&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,ce,Pt,Gt[ft]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,_e,ce,Pt,Gt[ft]);for(let Ot=0;Ot<Q.length;Ot++){let Ut=Q[Ot];he?D&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Ot+1,0,0,ce,Pt,Ut.image[ft]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Ot+1,_e,ce,Pt,Ut.image[ft])}}}g(S)&&p(n.TEXTURE_CUBE_MAP),lt.__version=ht.version,S.onUpdate&&S.onUpdate(S)}I.__version=S.version}function Vt(I,S,V,it,ht,lt){let Wt=r.convert(V.format,V.colorSpace),Nt=r.convert(V.type),zt=y(V.internalFormat,Wt,Nt,V.colorSpace),se=i.get(S),gt=i.get(V);if(gt.__renderTarget=S,!se.__hasExternalTextures){let Gt=Math.max(1,S.width>>lt),ie=Math.max(1,S.height>>lt);ht===n.TEXTURE_3D||ht===n.TEXTURE_2D_ARRAY?e.texImage3D(ht,lt,zt,Gt,ie,S.depth,0,Wt,Nt,null):e.texImage2D(ht,lt,zt,Gt,ie,0,Wt,Nt,null)}e.bindFramebuffer(n.FRAMEBUFFER,I),pt(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,it,ht,gt.__webglTexture,0,X(S)):(ht===n.TEXTURE_2D||ht>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ht<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,it,ht,gt.__webglTexture,lt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function St(I,S,V){if(n.bindRenderbuffer(n.RENDERBUFFER,I),S.depthBuffer){let it=S.depthTexture,ht=it&&it.isDepthTexture?it.type:null,lt=b(S.stencilBuffer,ht),Wt=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Nt=X(S);pt(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Nt,lt,S.width,S.height):V?n.renderbufferStorageMultisample(n.RENDERBUFFER,Nt,lt,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,lt,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Wt,n.RENDERBUFFER,I)}else{let it=S.textures;for(let ht=0;ht<it.length;ht++){let lt=it[ht],Wt=r.convert(lt.format,lt.colorSpace),Nt=r.convert(lt.type),zt=y(lt.internalFormat,Wt,Nt,lt.colorSpace),se=X(S);V&&pt(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,se,zt,S.width,S.height):pt(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,se,zt,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,zt,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function $t(I,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,I),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let it=i.get(S.depthTexture);it.__renderTarget=S,(!it.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),ot(S.depthTexture,0);let ht=it.__webglTexture,lt=X(S);if(S.depthTexture.format===ur)pt(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ht,0,lt):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ht,0);else if(S.depthTexture.format===br)pt(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ht,0,lt):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ht,0);else throw new Error("Unknown depthTexture format")}function le(I){let S=i.get(I),V=I.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==I.depthTexture){let it=I.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),it){let ht=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,it.removeEventListener("dispose",ht)};it.addEventListener("dispose",ht),S.__depthDisposeCallback=ht}S.__boundDepthTexture=it}if(I.depthTexture&&!S.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");$t(S.__webglFramebuffer,I)}else if(V){S.__webglDepthbuffer=[];for(let it=0;it<6;it++)if(e.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[it]),S.__webglDepthbuffer[it]===void 0)S.__webglDepthbuffer[it]=n.createRenderbuffer(),St(S.__webglDepthbuffer[it],I,!1);else{let ht=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,lt=S.__webglDepthbuffer[it];n.bindRenderbuffer(n.RENDERBUFFER,lt),n.framebufferRenderbuffer(n.FRAMEBUFFER,ht,n.RENDERBUFFER,lt)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=n.createRenderbuffer(),St(S.__webglDepthbuffer,I,!1);else{let it=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ht=S.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ht),n.framebufferRenderbuffer(n.FRAMEBUFFER,it,n.RENDERBUFFER,ht)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Zt(I,S,V){let it=i.get(I);S!==void 0&&Vt(it.__webglFramebuffer,I,I.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),V!==void 0&&le(I)}function Se(I){let S=I.texture,V=i.get(I),it=i.get(S);I.addEventListener("dispose",w);let ht=I.textures,lt=I.isWebGLCubeRenderTarget===!0,Wt=ht.length>1;if(Wt||(it.__webglTexture===void 0&&(it.__webglTexture=n.createTexture()),it.__version=S.version,o.memory.textures++),lt){V.__webglFramebuffer=[];for(let Nt=0;Nt<6;Nt++)if(S.mipmaps&&S.mipmaps.length>0){V.__webglFramebuffer[Nt]=[];for(let zt=0;zt<S.mipmaps.length;zt++)V.__webglFramebuffer[Nt][zt]=n.createFramebuffer()}else V.__webglFramebuffer[Nt]=n.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){V.__webglFramebuffer=[];for(let Nt=0;Nt<S.mipmaps.length;Nt++)V.__webglFramebuffer[Nt]=n.createFramebuffer()}else V.__webglFramebuffer=n.createFramebuffer();if(Wt)for(let Nt=0,zt=ht.length;Nt<zt;Nt++){let se=i.get(ht[Nt]);se.__webglTexture===void 0&&(se.__webglTexture=n.createTexture(),o.memory.textures++)}if(I.samples>0&&pt(I)===!1){V.__webglMultisampledFramebuffer=n.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let Nt=0;Nt<ht.length;Nt++){let zt=ht[Nt];V.__webglColorRenderbuffer[Nt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,V.__webglColorRenderbuffer[Nt]);let se=r.convert(zt.format,zt.colorSpace),gt=r.convert(zt.type),Gt=y(zt.internalFormat,se,gt,zt.colorSpace,I.isXRRenderTarget===!0),ie=X(I);n.renderbufferStorageMultisample(n.RENDERBUFFER,ie,Gt,I.width,I.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Nt,n.RENDERBUFFER,V.__webglColorRenderbuffer[Nt])}n.bindRenderbuffer(n.RENDERBUFFER,null),I.depthBuffer&&(V.__webglDepthRenderbuffer=n.createRenderbuffer(),St(V.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(lt){e.bindTexture(n.TEXTURE_CUBE_MAP,it.__webglTexture),oe(n.TEXTURE_CUBE_MAP,S);for(let Nt=0;Nt<6;Nt++)if(S.mipmaps&&S.mipmaps.length>0)for(let zt=0;zt<S.mipmaps.length;zt++)Vt(V.__webglFramebuffer[Nt][zt],I,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,zt);else Vt(V.__webglFramebuffer[Nt],I,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,0);g(S)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Wt){for(let Nt=0,zt=ht.length;Nt<zt;Nt++){let se=ht[Nt],gt=i.get(se);e.bindTexture(n.TEXTURE_2D,gt.__webglTexture),oe(n.TEXTURE_2D,se),Vt(V.__webglFramebuffer,I,se,n.COLOR_ATTACHMENT0+Nt,n.TEXTURE_2D,0),g(se)&&p(n.TEXTURE_2D)}e.unbindTexture()}else{let Nt=n.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Nt=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(Nt,it.__webglTexture),oe(Nt,S),S.mipmaps&&S.mipmaps.length>0)for(let zt=0;zt<S.mipmaps.length;zt++)Vt(V.__webglFramebuffer[zt],I,S,n.COLOR_ATTACHMENT0,Nt,zt);else Vt(V.__webglFramebuffer,I,S,n.COLOR_ATTACHMENT0,Nt,0);g(S)&&p(Nt),e.unbindTexture()}I.depthBuffer&&le(I)}function B(I){let S=I.textures;for(let V=0,it=S.length;V<it;V++){let ht=S[V];if(g(ht)){let lt=_(I),Wt=i.get(ht).__webglTexture;e.bindTexture(lt,Wt),p(lt),e.unbindTexture()}}}let rt=[],A=[];function dt(I){if(I.samples>0){if(pt(I)===!1){let S=I.textures,V=I.width,it=I.height,ht=n.COLOR_BUFFER_BIT,lt=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Wt=i.get(I),Nt=S.length>1;if(Nt)for(let zt=0;zt<S.length;zt++)e.bindFramebuffer(n.FRAMEBUFFER,Wt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+zt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Wt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+zt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Wt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Wt.__webglFramebuffer);for(let zt=0;zt<S.length;zt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(ht|=n.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(ht|=n.STENCIL_BUFFER_BIT)),Nt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Wt.__webglColorRenderbuffer[zt]);let se=i.get(S[zt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,se,0)}n.blitFramebuffer(0,0,V,it,0,0,V,it,ht,n.NEAREST),l===!0&&(rt.length=0,A.length=0,rt.push(n.COLOR_ATTACHMENT0+zt),I.depthBuffer&&I.resolveDepthBuffer===!1&&(rt.push(lt),A.push(lt),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,A)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,rt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Nt)for(let zt=0;zt<S.length;zt++){e.bindFramebuffer(n.FRAMEBUFFER,Wt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+zt,n.RENDERBUFFER,Wt.__webglColorRenderbuffer[zt]);let se=i.get(S[zt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Wt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+zt,n.TEXTURE_2D,se,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Wt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&l){let S=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[S])}}}function X(I){return Math.min(s.maxSamples,I.samples)}function pt(I){let S=i.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function at(I){let S=o.render.frame;f.get(I)!==S&&(f.set(I,S),I.update())}function Lt(I,S){let V=I.colorSpace,it=I.format,ht=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||V!==Ur&&V!==ii&&(Oe.getTransfer(V)===We?(it!==pi||ht!==$i)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),S}function mt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=W,this.setTexture2D=ot,this.setTexture2DArray=j,this.setTexture3D=ut,this.setTextureCube=tt,this.rebindTextures=Zt,this.setupRenderTarget=Se,this.updateRenderTargetMipmap=B,this.updateMultisampleRenderTarget=dt,this.setupDepthRenderbuffer=le,this.setupFrameBufferTexture=Vt,this.useMultisampledRTT=pt}function X2(n,t){function e(i,s=ii){let r,o=Oe.getTransfer(s);if(i===$i)return n.UNSIGNED_BYTE;if(i===P0)return n.UNSIGNED_SHORT_4_4_4_4;if(i===L0)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Fh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Dh)return n.BYTE;if(i===kh)return n.SHORT;if(i===co)return n.UNSIGNED_SHORT;if(i===I0)return n.INT;if(i===Ps)return n.UNSIGNED_INT;if(i===wi)return n.FLOAT;if(i===To)return n.HALF_FLOAT;if(i===Bh)return n.ALPHA;if(i===zh)return n.RGB;if(i===pi)return n.RGBA;if(i===Hh)return n.LUMINANCE;if(i===Gh)return n.LUMINANCE_ALPHA;if(i===ur)return n.DEPTH_COMPONENT;if(i===br)return n.DEPTH_STENCIL;if(i===N0)return n.RED;if(i===O0)return n.RED_INTEGER;if(i===Vh)return n.RG;if(i===U0)return n.RG_INTEGER;if(i===D0)return n.RGBA_INTEGER;if(i===Ta||i===wa||i===Aa||i===Ra)if(o===We)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ta)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===wa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Aa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ra)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ta)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===wa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Aa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ra)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===dc||i===pc||i===mc||i===gc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===dc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===pc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===mc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===gc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===xc||i===yc||i===_c)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===xc||i===yc)return o===We?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===_c)return o===We?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===bc||i===vc||i===Mc||i===Sc||i===Ec||i===Tc||i===wc||i===Ac||i===Rc||i===Cc||i===Ic||i===Pc||i===Lc||i===Nc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===bc)return o===We?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===vc)return o===We?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Mc)return o===We?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Sc)return o===We?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ec)return o===We?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Tc)return o===We?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===wc)return o===We?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ac)return o===We?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Rc)return o===We?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Cc)return o===We?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ic)return o===We?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Pc)return o===We?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Lc)return o===We?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Nc)return o===We?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ca||i===Oc||i===Uc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Ca)return o===We?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Oc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Uc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Wh||i===Dc||i===kc||i===Fc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Ca)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Dc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===kc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Fc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===_r?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var e0=class extends Mn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Ht=class extends rn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Y2={type:"move"},ro=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ht,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ht,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ht,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let g=e.getJointPose(x,i),p=this._getHandJoint(c,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let f=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],u=f.position.distanceTo(h.position),d=.02,m=.005;c.inputState.pinching&&u>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Y2)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Ht;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},q2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$2=`
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

}`,n0=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){let s=new zn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new jn({vertexShader:q2,fragmentShader:$2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Xt(new Be(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},i0=class extends ms{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,f=null,h=null,u=null,d=null,m=null,x=new n0,g=e.getContextAttributes(),p=null,_=null,y=[],b=[],L=new Mt,R=null,w=new Mn;w.viewport=new Fe;let P=new Mn;P.viewport=new Fe;let T=[w,P],M=new e0,U=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(st){let vt=y[st];return vt===void 0&&(vt=new ro,y[st]=vt),vt.getTargetRaySpace()},this.getControllerGrip=function(st){let vt=y[st];return vt===void 0&&(vt=new ro,y[st]=vt),vt.getGripSpace()},this.getHand=function(st){let vt=y[st];return vt===void 0&&(vt=new ro,y[st]=vt),vt.getHandSpace()};function F(st){let vt=b.indexOf(st.inputSource);if(vt===-1)return;let Vt=y[vt];Vt!==void 0&&(Vt.update(st.inputSource,st.frame,c||o),Vt.dispatchEvent({type:st.type,data:st.inputSource}))}function H(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",ot);for(let st=0;st<y.length;st++){let vt=b[st];vt!==null&&(b[st]=null,y[st].disconnect(vt))}U=null,W=null,x.reset(),t.setRenderTarget(p),d=null,u=null,h=null,s=null,_=null,ye.stop(),i.isPresenting=!1,t.setPixelRatio(R),t.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(st){r=st,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(st){a=st,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(st){c=st},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return h},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(st){if(s=st,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",H),s.addEventListener("inputsourceschange",ot),g.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(L),s.renderState.layers===void 0){let vt={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,vt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),_=new Zi(d.framebufferWidth,d.framebufferHeight,{format:pi,type:$i,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let vt=null,Vt=null,St=null;g.depth&&(St=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,vt=g.stencil?br:ur,Vt=g.stencil?_r:Ps);let $t={colorFormat:e.RGBA8,depthFormat:St,scaleFactor:r};h=new XRWebGLBinding(s,e),u=h.createProjectionLayer($t),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),_=new Zi(u.textureWidth,u.textureHeight,{format:pi,type:$i,depthTexture:new ka(u.textureWidth,u.textureHeight,Vt,void 0,void 0,void 0,void 0,void 0,void 0,vt),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ye.setContext(s),ye.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function ot(st){for(let vt=0;vt<st.removed.length;vt++){let Vt=st.removed[vt],St=b.indexOf(Vt);St>=0&&(b[St]=null,y[St].disconnect(Vt))}for(let vt=0;vt<st.added.length;vt++){let Vt=st.added[vt],St=b.indexOf(Vt);if(St===-1){for(let le=0;le<y.length;le++)if(le>=b.length){b.push(Vt),St=le;break}else if(b[le]===null){b[le]=Vt,St=le;break}if(St===-1)break}let $t=y[St];$t&&$t.connect(Vt)}}let j=new N,ut=new N;function tt(st,vt,Vt){j.setFromMatrixPosition(vt.matrixWorld),ut.setFromMatrixPosition(Vt.matrixWorld);let St=j.distanceTo(ut),$t=vt.projectionMatrix.elements,le=Vt.projectionMatrix.elements,Zt=$t[14]/($t[10]-1),Se=$t[14]/($t[10]+1),B=($t[9]+1)/$t[5],rt=($t[9]-1)/$t[5],A=($t[8]-1)/$t[0],dt=(le[8]+1)/le[0],X=Zt*A,pt=Zt*dt,at=St/(-A+dt),Lt=at*-A;if(vt.matrixWorld.decompose(st.position,st.quaternion,st.scale),st.translateX(Lt),st.translateZ(at),st.matrixWorld.compose(st.position,st.quaternion,st.scale),st.matrixWorldInverse.copy(st.matrixWorld).invert(),$t[10]===-1)st.projectionMatrix.copy(vt.projectionMatrix),st.projectionMatrixInverse.copy(vt.projectionMatrixInverse);else{let mt=Zt+at,I=Se+at,S=X-Lt,V=pt+(St-Lt),it=B*Se/I*mt,ht=rt*Se/I*mt;st.projectionMatrix.makePerspective(S,V,it,ht,mt,I),st.projectionMatrixInverse.copy(st.projectionMatrix).invert()}}function Tt(st,vt){vt===null?st.matrixWorld.copy(st.matrix):st.matrixWorld.multiplyMatrices(vt.matrixWorld,st.matrix),st.matrixWorldInverse.copy(st.matrixWorld).invert()}this.updateCamera=function(st){if(s===null)return;let vt=st.near,Vt=st.far;x.texture!==null&&(x.depthNear>0&&(vt=x.depthNear),x.depthFar>0&&(Vt=x.depthFar)),M.near=P.near=w.near=vt,M.far=P.far=w.far=Vt,(U!==M.near||W!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),U=M.near,W=M.far),w.layers.mask=st.layers.mask|2,P.layers.mask=st.layers.mask|4,M.layers.mask=w.layers.mask|P.layers.mask;let St=st.parent,$t=M.cameras;Tt(M,St);for(let le=0;le<$t.length;le++)Tt($t[le],St);$t.length===2?tt(M,w,P):M.projectionMatrix.copy(w.projectionMatrix),Rt(st,M,St)};function Rt(st,vt,Vt){Vt===null?st.matrix.copy(vt.matrixWorld):(st.matrix.copy(Vt.matrixWorld),st.matrix.invert(),st.matrix.multiply(vt.matrixWorld)),st.matrix.decompose(st.position,st.quaternion,st.scale),st.updateMatrixWorld(!0),st.projectionMatrix.copy(vt.projectionMatrix),st.projectionMatrixInverse.copy(vt.projectionMatrixInverse),st.isPerspectiveCamera&&(st.fov=vr*2*Math.atan(1/st.projectionMatrix.elements[5]),st.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(st){l=st,u!==null&&(u.fixedFoveation=st),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=st)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(M)};let Bt=null;function oe(st,vt){if(f=vt.getViewerPose(c||o),m=vt,f!==null){let Vt=f.views;d!==null&&(t.setRenderTargetFramebuffer(_,d.framebuffer),t.setRenderTarget(_));let St=!1;Vt.length!==M.cameras.length&&(M.cameras.length=0,St=!0);for(let le=0;le<Vt.length;le++){let Zt=Vt[le],Se=null;if(d!==null)Se=d.getViewport(Zt);else{let rt=h.getViewSubImage(u,Zt);Se=rt.viewport,le===0&&(t.setRenderTargetTextures(_,rt.colorTexture,u.ignoreDepthValues?void 0:rt.depthStencilTexture),t.setRenderTarget(_))}let B=T[le];B===void 0&&(B=new Mn,B.layers.enable(le),B.viewport=new Fe,T[le]=B),B.matrix.fromArray(Zt.transform.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale),B.projectionMatrix.fromArray(Zt.projectionMatrix),B.projectionMatrixInverse.copy(B.projectionMatrix).invert(),B.viewport.set(Se.x,Se.y,Se.width,Se.height),le===0&&(M.matrix.copy(B.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),St===!0&&M.cameras.push(B)}let $t=s.enabledFeatures;if($t&&$t.includes("depth-sensing")){let le=h.getDepthInformation(Vt[0]);le&&le.isValid&&le.texture&&x.init(t,le,s.renderState)}}for(let Vt=0;Vt<y.length;Vt++){let St=b[Vt],$t=y[Vt];St!==null&&$t!==void 0&&$t.update(St,vt,c||o)}Bt&&Bt(st,vt),vt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:vt}),m=null}let ye=new Kh;ye.setAnimationLoop(oe),this.setAnimationLoop=function(st){Bt=st},this.dispose=function(){}}},As=new En,Z2=new re;function K2(n,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,Zh(n)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,_,y,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),h(g,p)):p.isMeshPhongMaterial?(r(g,p),f(g,p)):p.isMeshStandardMaterial?(r(g,p),u(g,p),p.isMeshPhysicalMaterial&&d(g,p,b)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),x(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,_,y):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===yn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===yn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let _=t.get(p),y=_.envMap,b=_.envMapRotation;y&&(g.envMap.value=y,As.copy(b),As.x*=-1,As.y*=-1,As.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(As.y*=-1,As.z*=-1),g.envMapRotation.value.setFromMatrix4(Z2.makeRotationFromEuler(As)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,_,y){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*_,g.scale.value=y*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function f(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function h(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function u(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,_){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===yn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){let _=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function J2(n,t,e,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,y){let b=y.program;i.uniformBlockBinding(_,b)}function c(_,y){let b=s[_.id];b===void 0&&(m(_),b=f(_),s[_.id]=b,_.addEventListener("dispose",g));let L=y.program;i.updateUBOMapping(_,L);let R=t.render.frame;r[_.id]!==R&&(u(_),r[_.id]=R)}function f(_){let y=h();_.__bindingPointIndex=y;let b=n.createBuffer(),L=_.__size,R=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,L,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,b),b}function h(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(_){let y=s[_.id],b=_.uniforms,L=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let R=0,w=b.length;R<w;R++){let P=Array.isArray(b[R])?b[R]:[b[R]];for(let T=0,M=P.length;T<M;T++){let U=P[T];if(d(U,R,T,L)===!0){let W=U.__offset,F=Array.isArray(U.value)?U.value:[U.value],H=0;for(let ot=0;ot<F.length;ot++){let j=F[ot],ut=x(j);typeof j=="number"||typeof j=="boolean"?(U.__data[0]=j,n.bufferSubData(n.UNIFORM_BUFFER,W+H,U.__data)):j.isMatrix3?(U.__data[0]=j.elements[0],U.__data[1]=j.elements[1],U.__data[2]=j.elements[2],U.__data[3]=0,U.__data[4]=j.elements[3],U.__data[5]=j.elements[4],U.__data[6]=j.elements[5],U.__data[7]=0,U.__data[8]=j.elements[6],U.__data[9]=j.elements[7],U.__data[10]=j.elements[8],U.__data[11]=0):(j.toArray(U.__data,H),H+=ut.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,W,U.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(_,y,b,L){let R=_.value,w=y+"_"+b;if(L[w]===void 0)return typeof R=="number"||typeof R=="boolean"?L[w]=R:L[w]=R.clone(),!0;{let P=L[w];if(typeof R=="number"||typeof R=="boolean"){if(P!==R)return L[w]=R,!0}else if(P.equals(R)===!1)return P.copy(R),!0}return!1}function m(_){let y=_.uniforms,b=0,L=16;for(let w=0,P=y.length;w<P;w++){let T=Array.isArray(y[w])?y[w]:[y[w]];for(let M=0,U=T.length;M<U;M++){let W=T[M],F=Array.isArray(W.value)?W.value:[W.value];for(let H=0,ot=F.length;H<ot;H++){let j=F[H],ut=x(j),tt=b%L,Tt=tt%ut.boundary,Rt=tt+Tt;b+=Tt,Rt!==0&&L-Rt<ut.storage&&(b+=L-Rt),W.__data=new Float32Array(ut.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=b,b+=ut.storage}}}let R=b%L;return R>0&&(b+=L-R),_.__size=b,_.__cache={},this}function x(_){let y={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=48,y.storage=48):_.isMatrix4?(y.boundary=64,y.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),y}function g(_){let y=_.target;y.removeEventListener("dispose",g);let b=o.indexOf(y.__bindingPointIndex);o.splice(b,1),n.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(let _ in s)n.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}var Fa=class{constructor(t={}){let{canvas:e=ep(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;let m=new Uint32Array(4),x=new Int32Array(4),g=null,p=null,_=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=$e,this.toneMapping=ds,this.toneMappingExposure=1;let b=this,L=!1,R=0,w=0,P=null,T=-1,M=null,U=new Fe,W=new Fe,F=null,H=new jt(0),ot=0,j=e.width,ut=e.height,tt=1,Tt=null,Rt=null,Bt=new Fe(0,0,j,ut),oe=new Fe(0,0,j,ut),ye=!1,st=new ho,vt=!1,Vt=!1,St=new re,$t=new re,le=new N,Zt=new Fe,Se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},B=!1;function rt(){return P===null?tt:1}let A=i;function dt(C,k){return e.getContext(C,k)}try{let C={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${A0}`),e.addEventListener("webglcontextlost",ft,!1),e.addEventListener("webglcontextrestored",Ot,!1),e.addEventListener("webglcontextcreationerror",Ut,!1),A===null){let k="webgl2";if(A=dt(k,C),A===null)throw dt(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let X,pt,at,Lt,mt,I,S,V,it,ht,lt,Wt,Nt,zt,se,gt,Gt,ie,ce,Pt,_e,he,Re,D;function Ct(){X=new dg(A),X.init(),he=new X2(A,X),pt=new ag(A,X,t,he),at=new G2(A,X),pt.reverseDepthBuffer&&u&&at.buffers.depth.setReversed(!0),Lt=new gg(A),mt=new C2,I=new W2(A,X,at,mt,pt,he,Lt),S=new cg(b),V=new ug(b),it=new Sp(A),Re=new rg(A,it),ht=new pg(A,it,Lt,Re),lt=new yg(A,ht,it,Lt),ce=new xg(A,pt,I),gt=new lg(mt),Wt=new R2(b,S,V,X,pt,Re,gt),Nt=new K2(b,mt),zt=new P2,se=new k2(X),ie=new sg(b,S,V,at,lt,d,l),Gt=new z2(b,lt,pt),D=new J2(A,Lt,pt,at),Pt=new og(A,X,Lt),_e=new mg(A,X,Lt),Lt.programs=Wt.programs,b.capabilities=pt,b.extensions=X,b.properties=mt,b.renderLists=zt,b.shadowMap=Gt,b.state=at,b.info=Lt}Ct();let Q=new i0(b,A);this.xr=Q,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){let C=X.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=X.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return tt},this.setPixelRatio=function(C){C!==void 0&&(tt=C,this.setSize(j,ut,!1))},this.getSize=function(C){return C.set(j,ut)},this.setSize=function(C,k,Y=!0){if(Q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=C,ut=k,e.width=Math.floor(C*tt),e.height=Math.floor(k*tt),Y===!0&&(e.style.width=C+"px",e.style.height=k+"px"),this.setViewport(0,0,C,k)},this.getDrawingBufferSize=function(C){return C.set(j*tt,ut*tt).floor()},this.setDrawingBufferSize=function(C,k,Y){j=C,ut=k,tt=Y,e.width=Math.floor(C*Y),e.height=Math.floor(k*Y),this.setViewport(0,0,C,k)},this.getCurrentViewport=function(C){return C.copy(U)},this.getViewport=function(C){return C.copy(Bt)},this.setViewport=function(C,k,Y,$){C.isVector4?Bt.set(C.x,C.y,C.z,C.w):Bt.set(C,k,Y,$),at.viewport(U.copy(Bt).multiplyScalar(tt).round())},this.getScissor=function(C){return C.copy(oe)},this.setScissor=function(C,k,Y,$){C.isVector4?oe.set(C.x,C.y,C.z,C.w):oe.set(C,k,Y,$),at.scissor(W.copy(oe).multiplyScalar(tt).round())},this.getScissorTest=function(){return ye},this.setScissorTest=function(C){at.setScissorTest(ye=C)},this.setOpaqueSort=function(C){Tt=C},this.setTransparentSort=function(C){Rt=C},this.getClearColor=function(C){return C.copy(ie.getClearColor())},this.setClearColor=function(){ie.setClearColor.apply(ie,arguments)},this.getClearAlpha=function(){return ie.getClearAlpha()},this.setClearAlpha=function(){ie.setClearAlpha.apply(ie,arguments)},this.clear=function(C=!0,k=!0,Y=!0){let $=0;if(C){let z=!1;if(P!==null){let wt=P.texture.format;z=wt===D0||wt===U0||wt===O0}if(z){let wt=P.texture.type,Ft=wt===$i||wt===Ps||wt===co||wt===_r||wt===P0||wt===L0,Kt=ie.getClearColor(),Yt=ie.getClearAlpha(),de=Kt.r,pe=Kt.g,Jt=Kt.b;Ft?(m[0]=de,m[1]=pe,m[2]=Jt,m[3]=Yt,A.clearBufferuiv(A.COLOR,0,m)):(x[0]=de,x[1]=pe,x[2]=Jt,x[3]=Yt,A.clearBufferiv(A.COLOR,0,x))}else $|=A.COLOR_BUFFER_BIT}k&&($|=A.DEPTH_BUFFER_BIT),Y&&($|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ft,!1),e.removeEventListener("webglcontextrestored",Ot,!1),e.removeEventListener("webglcontextcreationerror",Ut,!1),zt.dispose(),se.dispose(),mt.dispose(),S.dispose(),V.dispose(),lt.dispose(),Re.dispose(),D.dispose(),Wt.dispose(),Q.dispose(),Q.removeEventListener("sessionstart",es),Q.removeEventListener("sessionend",ys),Mi.stop()};function ft(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function Ot(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;let C=Lt.autoReset,k=Gt.enabled,Y=Gt.autoUpdate,$=Gt.needsUpdate,z=Gt.type;Ct(),Lt.autoReset=C,Gt.enabled=k,Gt.autoUpdate=Y,Gt.needsUpdate=$,Gt.type=z}function Ut(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function fe(C){let k=C.target;k.removeEventListener("dispose",fe),be(k)}function be(C){nn(C),mt.remove(C)}function nn(C){let k=mt.get(C).programs;k!==void 0&&(k.forEach(function(Y){Wt.releaseProgram(Y)}),C.isShaderMaterial&&Wt.releaseShaderCache(C))}this.renderBufferDirect=function(C,k,Y,$,z,wt){k===null&&(k=Se);let Ft=z.isMesh&&z.matrixWorld.determinant()<0,Kt=zo(C,k,Y,$,z);at.setMaterial($,Ft);let Yt=Y.index,de=1;if($.wireframe===!0){if(Yt=ht.getWireframeAttribute(Y),Yt===void 0)return;de=2}let pe=Y.drawRange,Jt=Y.attributes.position,Ee=pe.start*de,Ve=(pe.start+pe.count)*de;wt!==null&&(Ee=Math.max(Ee,wt.start*de),Ve=Math.min(Ve,(wt.start+wt.count)*de)),Yt!==null?(Ee=Math.max(Ee,0),Ve=Math.min(Ve,Yt.count)):Jt!=null&&(Ee=Math.max(Ee,0),Ve=Math.min(Ve,Jt.count));let ke=Ve-Ee;if(ke<0||ke===1/0)return;Re.setup(z,$,Kt,Y,Yt);let vn,Ue=Pt;if(Yt!==null&&(vn=it.get(Yt),Ue=_e,Ue.setIndex(vn)),z.isMesh)$.wireframe===!0?(at.setLineWidth($.wireframeLinewidth*rt()),Ue.setMode(A.LINES)):Ue.setMode(A.TRIANGLES);else if(z.isLine){let ne=$.linewidth;ne===void 0&&(ne=1),at.setLineWidth(ne*rt()),z.isLineSegments?Ue.setMode(A.LINES):z.isLineLoop?Ue.setMode(A.LINE_LOOP):Ue.setMode(A.LINE_STRIP)}else z.isPoints?Ue.setMode(A.POINTS):z.isSprite&&Ue.setMode(A.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)Ue.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(X.get("WEBGL_multi_draw"))Ue.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let ne=z._multiDrawStarts,kn=z._multiDrawCounts,Ce=z._multiDrawCount,Fn=Yt?it.get(Yt).bytesPerElement:1,ss=mt.get($).currentProgram.getUniforms();for(let In=0;In<Ce;In++)ss.setValue(A,"_gl_DrawID",In),Ue.render(ne[In]/Fn,kn[In])}else if(z.isInstancedMesh)Ue.renderInstances(Ee,ke,z.count);else if(Y.isInstancedBufferGeometry){let ne=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,kn=Math.min(Y.instanceCount,ne);Ue.renderInstances(Ee,ke,kn)}else Ue.render(Ee,ke)};function Ne(C,k,Y){C.transparent===!0&&C.side===we&&C.forceSinglePass===!1?(C.side=yn,C.needsUpdate=!0,ns(C,k,Y),C.side=ps,C.needsUpdate=!0,ns(C,k,Y),C.side=we):ns(C,k,Y)}this.compile=function(C,k,Y=null){Y===null&&(Y=C),p=se.get(Y),p.init(k),y.push(p),Y.traverseVisible(function(z){z.isLight&&z.layers.test(k.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),C!==Y&&C.traverseVisible(function(z){z.isLight&&z.layers.test(k.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),p.setupLights();let $=new Set;return C.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let wt=z.material;if(wt)if(Array.isArray(wt))for(let Ft=0;Ft<wt.length;Ft++){let Kt=wt[Ft];Ne(Kt,Y,z),$.add(Kt)}else Ne(wt,Y,z),$.add(wt)}),y.pop(),p=null,$},this.compileAsync=function(C,k,Y=null){let $=this.compile(C,k,Y);return new Promise(z=>{function wt(){if($.forEach(function(Ft){mt.get(Ft).currentProgram.isReady()&&$.delete(Ft)}),$.size===0){z(C);return}setTimeout(wt,10)}X.get("KHR_parallel_shader_compile")!==null?wt():setTimeout(wt,10)})};let wn=null;function Xe(C){wn&&wn(C)}function es(){Mi.stop()}function ys(){Mi.start()}let Mi=new Kh;Mi.setAnimationLoop(Xe),typeof self<"u"&&Mi.setContext(self),this.setAnimationLoop=function(C){wn=C,Q.setAnimationLoop(C),C===null?Mi.stop():Mi.start()},Q.addEventListener("sessionstart",es),Q.addEventListener("sessionend",ys),this.render=function(C,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Q.enabled===!0&&Q.isPresenting===!0&&(Q.cameraAutoUpdate===!0&&Q.updateCamera(k),k=Q.getCamera()),C.isScene===!0&&C.onBeforeRender(b,C,k,P),p=se.get(C,y.length),p.init(k),y.push(p),$t.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),st.setFromProjectionMatrix($t),Vt=this.localClippingEnabled,vt=gt.init(this.clippingPlanes,Vt),g=zt.get(C,_.length),g.init(),_.push(g),Q.enabled===!0&&Q.isPresenting===!0){let wt=b.xr.getDepthSensingMesh();wt!==null&&cn(wt,k,-1/0,b.sortObjects)}cn(C,k,0,b.sortObjects),g.finish(),b.sortObjects===!0&&g.sort(Tt,Rt),B=Q.enabled===!1||Q.isPresenting===!1||Q.hasDepthSensing()===!1,B&&ie.addToRenderList(g,C),this.info.render.frame++,vt===!0&&gt.beginShadows();let Y=p.state.shadowsArray;Gt.render(Y,C,k),vt===!0&&gt.endShadows(),this.info.autoReset===!0&&this.info.reset();let $=g.opaque,z=g.transmissive;if(p.setupLights(),k.isArrayCamera){let wt=k.cameras;if(z.length>0)for(let Ft=0,Kt=wt.length;Ft<Kt;Ft++){let Yt=wt[Ft];zs($,z,C,Yt)}B&&ie.render(C);for(let Ft=0,Kt=wt.length;Ft<Kt;Ft++){let Yt=wt[Ft];li(g,C,Yt,Yt.viewport)}}else z.length>0&&zs($,z,C,k),B&&ie.render(C),li(g,C,k);P!==null&&(I.updateMultisampleRenderTarget(P),I.updateRenderTargetMipmap(P)),C.isScene===!0&&C.onAfterRender(b,C,k),Re.resetDefaultState(),T=-1,M=null,y.pop(),y.length>0?(p=y[y.length-1],vt===!0&&gt.setGlobalState(b.clippingPlanes,p.state.camera)):p=null,_.pop(),_.length>0?g=_[_.length-1]:g=null};function cn(C,k,Y,$){if(C.visible===!1)return;if(C.layers.test(k.layers)){if(C.isGroup)Y=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(k);else if(C.isLight)p.pushLight(C),C.castShadow&&p.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||st.intersectsSprite(C)){$&&Zt.setFromMatrixPosition(C.matrixWorld).applyMatrix4($t);let Ft=lt.update(C),Kt=C.material;Kt.visible&&g.push(C,Ft,Kt,Y,Zt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||st.intersectsObject(C))){let Ft=lt.update(C),Kt=C.material;if($&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Zt.copy(C.boundingSphere.center)):(Ft.boundingSphere===null&&Ft.computeBoundingSphere(),Zt.copy(Ft.boundingSphere.center)),Zt.applyMatrix4(C.matrixWorld).applyMatrix4($t)),Array.isArray(Kt)){let Yt=Ft.groups;for(let de=0,pe=Yt.length;de<pe;de++){let Jt=Yt[de],Ee=Kt[Jt.materialIndex];Ee&&Ee.visible&&g.push(C,Ft,Ee,Y,Zt.z,Jt)}}else Kt.visible&&g.push(C,Ft,Kt,Y,Zt.z,null)}}let wt=C.children;for(let Ft=0,Kt=wt.length;Ft<Kt;Ft++)cn(wt[Ft],k,Y,$)}function li(C,k,Y,$){let z=C.opaque,wt=C.transmissive,Ft=C.transparent;p.setupLightsView(Y),vt===!0&&gt.setGlobalState(b.clippingPlanes,Y),$&&at.viewport(U.copy($)),z.length>0&&Si(z,k,Y),wt.length>0&&Si(wt,k,Y),Ft.length>0&&Si(Ft,k,Y),at.buffers.depth.setTest(!0),at.buffers.depth.setMask(!0),at.buffers.color.setMask(!0),at.setPolygonOffset(!1)}function zs(C,k,Y,$){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[$.id]===void 0&&(p.state.transmissionRenderTarget[$.id]=new Zi(1,1,{generateMipmaps:!0,type:X.has("EXT_color_buffer_half_float")||X.has("EXT_color_buffer_float")?To:$i,minFilter:Vi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Oe.workingColorSpace}));let wt=p.state.transmissionRenderTarget[$.id],Ft=$.viewport||U;wt.setSize(Ft.z,Ft.w);let Kt=b.getRenderTarget();b.setRenderTarget(wt),b.getClearColor(H),ot=b.getClearAlpha(),ot<1&&b.setClearColor(16777215,.5),b.clear(),B&&ie.render(Y);let Yt=b.toneMapping;b.toneMapping=ds;let de=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),p.setupLightsView($),vt===!0&&gt.setGlobalState(b.clippingPlanes,$),Si(C,Y,$),I.updateMultisampleRenderTarget(wt),I.updateRenderTargetMipmap(wt),X.has("WEBGL_multisampled_render_to_texture")===!1){let pe=!1;for(let Jt=0,Ee=k.length;Jt<Ee;Jt++){let Ve=k[Jt],ke=Ve.object,vn=Ve.geometry,Ue=Ve.material,ne=Ve.group;if(Ue.side===we&&ke.layers.test($.layers)){let kn=Ue.side;Ue.side=yn,Ue.needsUpdate=!0,Je(ke,Y,$,vn,Ue,ne),Ue.side=kn,Ue.needsUpdate=!0,pe=!0}}pe===!0&&(I.updateMultisampleRenderTarget(wt),I.updateRenderTargetMipmap(wt))}b.setRenderTarget(Kt),b.setClearColor(H,ot),de!==void 0&&($.viewport=de),b.toneMapping=Yt}function Si(C,k,Y){let $=k.isScene===!0?k.overrideMaterial:null;for(let z=0,wt=C.length;z<wt;z++){let Ft=C[z],Kt=Ft.object,Yt=Ft.geometry,de=$===null?Ft.material:$,pe=Ft.group;Kt.layers.test(Y.layers)&&Je(Kt,k,Y,Yt,de,pe)}}function Je(C,k,Y,$,z,wt){C.onBeforeRender(b,k,Y,$,z,wt),C.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),z.onBeforeRender(b,k,Y,$,C,wt),z.transparent===!0&&z.side===we&&z.forceSinglePass===!1?(z.side=yn,z.needsUpdate=!0,b.renderBufferDirect(Y,k,$,z,C,wt),z.side=ps,z.needsUpdate=!0,b.renderBufferDirect(Y,k,$,z,C,wt),z.side=we):b.renderBufferDirect(Y,k,$,z,C,wt),C.onAfterRender(b,k,Y,$,z,wt)}function ns(C,k,Y){k.isScene!==!0&&(k=Se);let $=mt.get(C),z=p.state.lights,wt=p.state.shadowsArray,Ft=z.state.version,Kt=Wt.getParameters(C,z.state,wt,k,Y),Yt=Wt.getProgramCacheKey(Kt),de=$.programs;$.environment=C.isMeshStandardMaterial?k.environment:null,$.fog=k.fog,$.envMap=(C.isMeshStandardMaterial?V:S).get(C.envMap||$.environment),$.envMapRotation=$.environment!==null&&C.envMap===null?k.environmentRotation:C.envMapRotation,de===void 0&&(C.addEventListener("dispose",fe),de=new Map,$.programs=de);let pe=de.get(Yt);if(pe!==void 0){if($.currentProgram===pe&&$.lightsStateVersion===Ft)return Yn(C,Kt),pe}else Kt.uniforms=Wt.getUniforms(C),C.onBeforeCompile(Kt,b),pe=Wt.acquireProgram(Kt,Yt),de.set(Yt,pe),$.uniforms=Kt.uniforms;let Jt=$.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Jt.clippingPlanes=gt.uniform),Yn(C,Kt),$.needsLights=_s(C),$.lightsStateVersion=Ft,$.needsLights&&(Jt.ambientLightColor.value=z.state.ambient,Jt.lightProbe.value=z.state.probe,Jt.directionalLights.value=z.state.directional,Jt.directionalLightShadows.value=z.state.directionalShadow,Jt.spotLights.value=z.state.spot,Jt.spotLightShadows.value=z.state.spotShadow,Jt.rectAreaLights.value=z.state.rectArea,Jt.ltc_1.value=z.state.rectAreaLTC1,Jt.ltc_2.value=z.state.rectAreaLTC2,Jt.pointLights.value=z.state.point,Jt.pointLightShadows.value=z.state.pointShadow,Jt.hemisphereLights.value=z.state.hemi,Jt.directionalShadowMap.value=z.state.directionalShadowMap,Jt.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Jt.spotShadowMap.value=z.state.spotShadowMap,Jt.spotLightMatrix.value=z.state.spotLightMatrix,Jt.spotLightMap.value=z.state.spotLightMap,Jt.pointShadowMap.value=z.state.pointShadowMap,Jt.pointShadowMatrix.value=z.state.pointShadowMatrix),$.currentProgram=pe,$.uniformsList=null,pe}function is(C){if(C.uniformsList===null){let k=C.currentProgram.getUniforms();C.uniformsList=mr.seqWithValue(k.seq,C.uniforms)}return C.uniformsList}function Yn(C,k){let Y=mt.get(C);Y.outputColorSpace=k.outputColorSpace,Y.batching=k.batching,Y.batchingColor=k.batchingColor,Y.instancing=k.instancing,Y.instancingColor=k.instancingColor,Y.instancingMorph=k.instancingMorph,Y.skinning=k.skinning,Y.morphTargets=k.morphTargets,Y.morphNormals=k.morphNormals,Y.morphColors=k.morphColors,Y.morphTargetsCount=k.morphTargetsCount,Y.numClippingPlanes=k.numClippingPlanes,Y.numIntersection=k.numClipIntersection,Y.vertexAlphas=k.vertexAlphas,Y.vertexTangents=k.vertexTangents,Y.toneMapping=k.toneMapping}function zo(C,k,Y,$,z){k.isScene!==!0&&(k=Se),I.resetTextureUnits();let wt=k.fog,Ft=$.isMeshStandardMaterial?k.environment:null,Kt=P===null?b.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Ur,Yt=($.isMeshStandardMaterial?V:S).get($.envMap||Ft),de=$.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pe=!!Y.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Jt=!!Y.morphAttributes.position,Ee=!!Y.morphAttributes.normal,Ve=!!Y.morphAttributes.color,ke=ds;$.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(ke=b.toneMapping);let vn=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Ue=vn!==void 0?vn.length:0,ne=mt.get($),kn=p.state.lights;if(vt===!0&&(Vt===!0||C!==M)){let an=C===M&&$.id===T;gt.setState($,C,an)}let Ce=!1;$.version===ne.__version?(ne.needsLights&&ne.lightsStateVersion!==kn.state.version||ne.outputColorSpace!==Kt||z.isBatchedMesh&&ne.batching===!1||!z.isBatchedMesh&&ne.batching===!0||z.isBatchedMesh&&ne.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&ne.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&ne.instancing===!1||!z.isInstancedMesh&&ne.instancing===!0||z.isSkinnedMesh&&ne.skinning===!1||!z.isSkinnedMesh&&ne.skinning===!0||z.isInstancedMesh&&ne.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&ne.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&ne.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&ne.instancingMorph===!1&&z.morphTexture!==null||ne.envMap!==Yt||$.fog===!0&&ne.fog!==wt||ne.numClippingPlanes!==void 0&&(ne.numClippingPlanes!==gt.numPlanes||ne.numIntersection!==gt.numIntersection)||ne.vertexAlphas!==de||ne.vertexTangents!==pe||ne.morphTargets!==Jt||ne.morphNormals!==Ee||ne.morphColors!==Ve||ne.toneMapping!==ke||ne.morphTargetsCount!==Ue)&&(Ce=!0):(Ce=!0,ne.__version=$.version);let Fn=ne.currentProgram;Ce===!0&&(Fn=ns($,k,z));let ss=!1,In=!1,bs=!1,Ye=Fn.getUniforms(),ei=ne.uniforms;if(at.useProgram(Fn.program)&&(ss=!0,In=!0,bs=!0),$.id!==T&&(T=$.id,In=!0),ss||M!==C){at.buffers.depth.getReversed()?(St.copy(C.projectionMatrix),ip(St),sp(St),Ye.setValue(A,"projectionMatrix",St)):Ye.setValue(A,"projectionMatrix",C.projectionMatrix),Ye.setValue(A,"viewMatrix",C.matrixWorldInverse);let qn=Ye.map.cameraPosition;qn!==void 0&&qn.setValue(A,le.setFromMatrixPosition(C.matrixWorld)),pt.logarithmicDepthBuffer&&Ye.setValue(A,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Ye.setValue(A,"isOrthographic",C.isOrthographicCamera===!0),M!==C&&(M=C,In=!0,bs=!0)}if(z.isSkinnedMesh){Ye.setOptional(A,z,"bindMatrix"),Ye.setOptional(A,z,"bindMatrixInverse");let an=z.skeleton;an&&(an.boneTexture===null&&an.computeBoneTexture(),Ye.setValue(A,"boneTexture",an.boneTexture,I))}z.isBatchedMesh&&(Ye.setOptional(A,z,"batchingTexture"),Ye.setValue(A,"batchingTexture",z._matricesTexture,I),Ye.setOptional(A,z,"batchingIdTexture"),Ye.setValue(A,"batchingIdTexture",z._indirectTexture,I),Ye.setOptional(A,z,"batchingColorTexture"),z._colorsTexture!==null&&Ye.setValue(A,"batchingColorTexture",z._colorsTexture,I));let vs=Y.morphAttributes;if((vs.position!==void 0||vs.normal!==void 0||vs.color!==void 0)&&ce.update(z,Y,Fn),(In||ne.receiveShadow!==z.receiveShadow)&&(ne.receiveShadow=z.receiveShadow,Ye.setValue(A,"receiveShadow",z.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(ei.envMap.value=Yt,ei.flipEnvMap.value=Yt.isCubeTexture&&Yt.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&k.environment!==null&&(ei.envMapIntensity.value=k.environmentIntensity),In&&(Ye.setValue(A,"toneMappingExposure",b.toneMappingExposure),ne.needsLights&&Hs(ei,bs),wt&&$.fog===!0&&Nt.refreshFogUniforms(ei,wt),Nt.refreshMaterialUniforms(ei,$,tt,ut,p.state.transmissionRenderTarget[C.id]),mr.upload(A,is(ne),ei,I)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(mr.upload(A,is(ne),ei,I),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Ye.setValue(A,"center",z.center),Ye.setValue(A,"modelViewMatrix",z.modelViewMatrix),Ye.setValue(A,"normalMatrix",z.normalMatrix),Ye.setValue(A,"modelMatrix",z.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){let an=$.uniformsGroups;for(let qn=0,$n=an.length;qn<$n;qn++){let rs=an[qn];D.update(rs,Fn),D.bind(rs,Fn)}}return Fn}function Hs(C,k){C.ambientLightColor.needsUpdate=k,C.lightProbe.needsUpdate=k,C.directionalLights.needsUpdate=k,C.directionalLightShadows.needsUpdate=k,C.pointLights.needsUpdate=k,C.pointLightShadows.needsUpdate=k,C.spotLights.needsUpdate=k,C.spotLightShadows.needsUpdate=k,C.rectAreaLights.needsUpdate=k,C.hemisphereLights.needsUpdate=k}function _s(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(C,k,Y){mt.get(C.texture).__webglTexture=k,mt.get(C.depthTexture).__webglTexture=Y;let $=mt.get(C);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=Y===void 0,$.__autoAllocateDepthBuffer||X.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,k){let Y=mt.get(C);Y.__webglFramebuffer=k,Y.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(C,k=0,Y=0){P=C,R=k,w=Y;let $=!0,z=null,wt=!1,Ft=!1;if(C){let Yt=mt.get(C);if(Yt.__useDefaultFramebuffer!==void 0)at.bindFramebuffer(A.FRAMEBUFFER,null),$=!1;else if(Yt.__webglFramebuffer===void 0)I.setupRenderTarget(C);else if(Yt.__hasExternalTextures)I.rebindTextures(C,mt.get(C.texture).__webglTexture,mt.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){let Jt=C.depthTexture;if(Yt.__boundDepthTexture!==Jt){if(Jt!==null&&mt.has(Jt)&&(C.width!==Jt.image.width||C.height!==Jt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(C)}}let de=C.texture;(de.isData3DTexture||de.isDataArrayTexture||de.isCompressedArrayTexture)&&(Ft=!0);let pe=mt.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(pe[k])?z=pe[k][Y]:z=pe[k],wt=!0):C.samples>0&&I.useMultisampledRTT(C)===!1?z=mt.get(C).__webglMultisampledFramebuffer:Array.isArray(pe)?z=pe[Y]:z=pe,U.copy(C.viewport),W.copy(C.scissor),F=C.scissorTest}else U.copy(Bt).multiplyScalar(tt).floor(),W.copy(oe).multiplyScalar(tt).floor(),F=ye;if(at.bindFramebuffer(A.FRAMEBUFFER,z)&&$&&at.drawBuffers(C,z),at.viewport(U),at.scissor(W),at.setScissorTest(F),wt){let Yt=mt.get(C.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+k,Yt.__webglTexture,Y)}else if(Ft){let Yt=mt.get(C.texture),de=k||0;A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,Yt.__webglTexture,Y||0,de)}T=-1},this.readRenderTargetPixels=function(C,k,Y,$,z,wt,Ft){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Kt=mt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ft!==void 0&&(Kt=Kt[Ft]),Kt){at.bindFramebuffer(A.FRAMEBUFFER,Kt);try{let Yt=C.texture,de=Yt.format,pe=Yt.type;if(!pt.textureFormatReadable(de)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!pt.textureTypeReadable(pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=C.width-$&&Y>=0&&Y<=C.height-z&&A.readPixels(k,Y,$,z,he.convert(de),he.convert(pe),wt)}finally{let Yt=P!==null?mt.get(P).__webglFramebuffer:null;at.bindFramebuffer(A.FRAMEBUFFER,Yt)}}},this.readRenderTargetPixelsAsync=async function(C,k,Y,$,z,wt,Ft){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Kt=mt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ft!==void 0&&(Kt=Kt[Ft]),Kt){let Yt=C.texture,de=Yt.format,pe=Yt.type;if(!pt.textureFormatReadable(de))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!pt.textureTypeReadable(pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=C.width-$&&Y>=0&&Y<=C.height-z){at.bindFramebuffer(A.FRAMEBUFFER,Kt);let Jt=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,Jt),A.bufferData(A.PIXEL_PACK_BUFFER,wt.byteLength,A.STREAM_READ),A.readPixels(k,Y,$,z,he.convert(de),he.convert(pe),0);let Ee=P!==null?mt.get(P).__webglFramebuffer:null;at.bindFramebuffer(A.FRAMEBUFFER,Ee);let Ve=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await np(A,Ve,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,Jt),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,wt),A.deleteBuffer(Jt),A.deleteSync(Ve),wt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,k=null,Y=0){C.isTexture!==!0&&(no("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,C=arguments[1]);let $=Math.pow(2,-Y),z=Math.floor(C.image.width*$),wt=Math.floor(C.image.height*$),Ft=k!==null?k.x:0,Kt=k!==null?k.y:0;I.setTexture2D(C,0),A.copyTexSubImage2D(A.TEXTURE_2D,Y,0,0,Ft,Kt,z,wt),at.unbindTexture()},this.copyTextureToTexture=function(C,k,Y=null,$=null,z=0){C.isTexture!==!0&&(no("WebGLRenderer: copyTextureToTexture function signature has changed."),$=arguments[0]||null,C=arguments[1],k=arguments[2],z=arguments[3]||0,Y=null);let wt,Ft,Kt,Yt,de,pe,Jt,Ee,Ve,ke=C.isCompressedTexture?C.mipmaps[z]:C.image;Y!==null?(wt=Y.max.x-Y.min.x,Ft=Y.max.y-Y.min.y,Kt=Y.isBox3?Y.max.z-Y.min.z:1,Yt=Y.min.x,de=Y.min.y,pe=Y.isBox3?Y.min.z:0):(wt=ke.width,Ft=ke.height,Kt=ke.depth||1,Yt=0,de=0,pe=0),$!==null?(Jt=$.x,Ee=$.y,Ve=$.z):(Jt=0,Ee=0,Ve=0);let vn=he.convert(k.format),Ue=he.convert(k.type),ne;k.isData3DTexture?(I.setTexture3D(k,0),ne=A.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(I.setTexture2DArray(k,0),ne=A.TEXTURE_2D_ARRAY):(I.setTexture2D(k,0),ne=A.TEXTURE_2D),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,k.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,k.unpackAlignment);let kn=A.getParameter(A.UNPACK_ROW_LENGTH),Ce=A.getParameter(A.UNPACK_IMAGE_HEIGHT),Fn=A.getParameter(A.UNPACK_SKIP_PIXELS),ss=A.getParameter(A.UNPACK_SKIP_ROWS),In=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,ke.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,ke.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Yt),A.pixelStorei(A.UNPACK_SKIP_ROWS,de),A.pixelStorei(A.UNPACK_SKIP_IMAGES,pe);let bs=C.isDataArrayTexture||C.isData3DTexture,Ye=k.isDataArrayTexture||k.isData3DTexture;if(C.isRenderTargetTexture||C.isDepthTexture){let ei=mt.get(C),vs=mt.get(k),an=mt.get(ei.__renderTarget),qn=mt.get(vs.__renderTarget);at.bindFramebuffer(A.READ_FRAMEBUFFER,an.__webglFramebuffer),at.bindFramebuffer(A.DRAW_FRAMEBUFFER,qn.__webglFramebuffer);for(let $n=0;$n<Kt;$n++)bs&&A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,mt.get(C).__webglTexture,z,pe+$n),C.isDepthTexture?(Ye&&A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,mt.get(k).__webglTexture,z,Ve+$n),A.blitFramebuffer(Yt,de,wt,Ft,Jt,Ee,wt,Ft,A.DEPTH_BUFFER_BIT,A.NEAREST)):Ye?A.copyTexSubImage3D(ne,z,Jt,Ee,Ve+$n,Yt,de,wt,Ft):A.copyTexSubImage2D(ne,z,Jt,Ee,Ve+$n,Yt,de,wt,Ft);at.bindFramebuffer(A.READ_FRAMEBUFFER,null),at.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else Ye?C.isDataTexture||C.isData3DTexture?A.texSubImage3D(ne,z,Jt,Ee,Ve,wt,Ft,Kt,vn,Ue,ke.data):k.isCompressedArrayTexture?A.compressedTexSubImage3D(ne,z,Jt,Ee,Ve,wt,Ft,Kt,vn,ke.data):A.texSubImage3D(ne,z,Jt,Ee,Ve,wt,Ft,Kt,vn,Ue,ke):C.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,z,Jt,Ee,wt,Ft,vn,Ue,ke.data):C.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,z,Jt,Ee,ke.width,ke.height,vn,ke.data):A.texSubImage2D(A.TEXTURE_2D,z,Jt,Ee,wt,Ft,vn,Ue,ke);A.pixelStorei(A.UNPACK_ROW_LENGTH,kn),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Ce),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Fn),A.pixelStorei(A.UNPACK_SKIP_ROWS,ss),A.pixelStorei(A.UNPACK_SKIP_IMAGES,In),z===0&&k.generateMipmaps&&A.generateMipmap(ne),at.unbindTexture()},this.copyTextureToTexture3D=function(C,k,Y=null,$=null,z=0){return C.isTexture!==!0&&(no("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Y=arguments[0]||null,$=arguments[1]||null,C=arguments[2],k=arguments[3],z=arguments[4]||0),no('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,k,Y,$,z)},this.initRenderTarget=function(C){mt.get(C).__webglFramebuffer===void 0&&I.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?I.setTextureCube(C,0):C.isData3DTexture?I.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?I.setTexture2DArray(C,0):I.setTexture2D(C,0),at.unbindTexture()},this.resetState=function(){R=0,w=0,P=null,at.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Oe._getDrawingBufferColorSpace(t),e.unpackColorSpace=Oe._getUnpackColorSpace()}},Ar=class n{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new jt(t),this.density=e}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Rr=class extends rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new En,this.environmentIntensity=1,this.environmentRotation=new En,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Ba=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=zc,this.updateRanges=[],this.version=0,this.uuid=Ai()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ai()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ai()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Pn=new N,uo=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Pn.fromBufferAttribute(this,e),Pn.applyMatrix4(t),this.setXYZ(e,Pn.x,Pn.y,Pn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Pn.fromBufferAttribute(this,e),Pn.applyNormalMatrix(t),this.setXYZ(e,Pn.x,Pn.y,Pn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Pn.fromBufferAttribute(this,e),Pn.transformDirection(t),this.setXYZ(e,Pn.x,Pn.y,Pn.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=di(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=He(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=He(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=He(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=He(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=He(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=di(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=di(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=di(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=di(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=He(e,this.array),i=He(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=He(e,this.array),i=He(i,this.array),s=He(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=He(e,this.array),i=He(i,this.array),s=He(s,this.array),r=He(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ze(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Cr=class extends Ri{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new jt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},sr,Zr=new N,rr=new N,or=new N,ar=new Mt,Kr=new Mt,eu=new re,fa=new N,Jr=new N,ha=new N,mh=new Mt,ql=new Mt,gh=new Mt,po=class extends rn{constructor(t=new Cr){if(super(),this.isSprite=!0,this.type="Sprite",sr===void 0){sr=new De;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Ba(e,5);sr.setIndex([0,1,2,0,2,3]),sr.setAttribute("position",new uo(i,3,0,!1)),sr.setAttribute("uv",new uo(i,2,3,!1))}this.geometry=sr,this.material=t,this.center=new Mt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),rr.setFromMatrixScale(this.matrixWorld),eu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),or.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&rr.multiplyScalar(-or.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;ua(fa.set(-.5,-.5,0),or,o,rr,s,r),ua(Jr.set(.5,-.5,0),or,o,rr,s,r),ua(ha.set(.5,.5,0),or,o,rr,s,r),mh.set(0,0),ql.set(1,0),gh.set(1,1);let a=t.ray.intersectTriangle(fa,Jr,ha,!1,Zr);if(a===null&&(ua(Jr.set(-.5,.5,0),or,o,rr,s,r),ql.set(0,1),a=t.ray.intersectTriangle(fa,ha,Jr,!1,Zr),a===null))return;let l=t.ray.origin.distanceTo(Zr);l<t.near||l>t.far||e.push({distance:l,point:Zr.clone(),uv:Hi.getInterpolation(Zr,fa,Jr,ha,mh,ql,gh,new Mt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function ua(n,t,e,i,s,r){ar.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(Kr.x=r*ar.x-s*ar.y,Kr.y=s*ar.x+r*ar.y):Kr.copy(ar),n.copy(t),n.x+=Kr.x,n.y+=Kr.y,n.applyMatrix4(eu)}var s0=class extends zn{constructor(t=null,e=1,i=1,s,r,o,a,l,c=Jn,f=Jn,h,u){super(null,o,a,l,c,f,s,r,h,u),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var mo=class extends Ze{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},lr=new re,xh=new re,da=[],yh=new Nn,j2=new re,jr=new Xt,Qr=new Ki,za=class extends Xt{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new mo(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,j2)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Nn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,lr),yh.copy(t.boundingBox).applyMatrix4(lr),this.boundingBox.union(yh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ki),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,lr),Qr.copy(t.boundingSphere).applyMatrix4(lr),this.boundingSphere.union(Qr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(t,e){let i=this.matrixWorld,s=this.count;if(jr.geometry=this.geometry,jr.material=this.material,jr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Qr.copy(this.boundingSphere),Qr.applyMatrix4(i),t.ray.intersectsSphere(Qr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,lr),xh.multiplyMatrices(i,lr),jr.matrixWorld=xh,jr.raycast(t,da);for(let o=0,a=da.length;o<a;o++){let l=da[o];l.instanceId=r,l.object=this,e.push(l)}da.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new mo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new s0(new Float32Array(s*this.count),s,this.count,N0,wi));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Ls=class extends Ri{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new jt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Ha=new N,Ga=new N,_h=new re,to=new Mr,pa=new Ki,$l=new N,bh=new N,r0=class extends rn{constructor(t=new De,e=new Ls){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)Ha.fromBufferAttribute(e,s-1),Ga.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=Ha.distanceTo(Ga);t.setAttribute("lineDistance",new ue(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),pa.copy(i.boundingSphere),pa.applyMatrix4(s),pa.radius+=r,t.ray.intersectsSphere(pa)===!1)return;_h.copy(s).invert(),to.copy(t.ray).applyMatrix4(_h);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,f=i.index,u=i.attributes.position;if(f!==null){let d=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let x=d,g=m-1;x<g;x+=c){let p=f.getX(x),_=f.getX(x+1),y=ma(this,t,to,l,p,_);y&&e.push(y)}if(this.isLineLoop){let x=f.getX(m-1),g=f.getX(d),p=ma(this,t,to,l,x,g);p&&e.push(p)}}else{let d=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let x=d,g=m-1;x<g;x+=c){let p=ma(this,t,to,l,x,x+1);p&&e.push(p)}if(this.isLineLoop){let x=ma(this,t,to,l,m-1,d);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function ma(n,t,e,i,s,r){let o=n.geometry.attributes.position;if(Ha.fromBufferAttribute(o,s),Ga.fromBufferAttribute(o,r),e.distanceSqToSegment(Ha,Ga,$l,bh)>i)return;$l.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo($l);if(!(l<t.near||l>t.far))return{distance:l,point:bh.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}var vh=new N,Mh=new N,Ns=class extends r0{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)vh.fromBufferAttribute(e,s),Mh.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+vh.distanceTo(Mh);t.setAttribute("lineDistance",new ue(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var o0=class extends Ri{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new jt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Sh=new re,a0=new Mr,ga=new Ki,xa=new N,Va=class extends rn{constructor(t=new De,e=new o0){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ga.copy(i.boundingSphere),ga.applyMatrix4(s),ga.radius+=r,t.ray.intersectsSphere(ga)===!1)return;Sh.copy(s).invert(),a0.copy(t.ray).applyMatrix4(Sh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){let u=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let m=u,x=d;m<x;m++){let g=c.getX(m);xa.fromBufferAttribute(h,g),Eh(xa,g,l,s,t,e,this)}}else{let u=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let m=u,x=d;m<x;m++)xa.fromBufferAttribute(h,m),Eh(xa,m,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Eh(n,t,e,i,s,r,o){let a=a0.distanceSqToPoint(n);if(a<e){let l=new N;a0.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var On=class extends zn{constructor(t,e,i,s,r,o,a,l,c){super(t,e,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},si=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let i=this.getLengths(),s=0,r=i.length,o;e?o=e:o=t*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let f=i[s],u=i[s+1]-f,d=(o-f)/u;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new Mt:new N);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){let i=new N,s=[],r=[],o=[],a=new N,l=new re;for(let d=0;d<=t;d++){let m=d/t;s[d]=this.getTangentAt(m,new N)}r[0]=new N,o[0]=new N;let c=Number.MAX_VALUE,f=Math.abs(s[0].x),h=Math.abs(s[0].y),u=Math.abs(s[0].z);f<=c&&(c=f,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),u<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(xn(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,m))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(xn(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],d*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},go=class extends si{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new Mt){let i=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let f=Math.cos(this.aRotation),h=Math.sin(this.aRotation),u=l-this.aX,d=c-this.aY;l=u*f-d*h+this.aX,c=u*h+d*f+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},l0=class extends go{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function B0(){let n=0,t=0,e=0,i=0;function s(r,o,a,l){n=r,t=a,e=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,f,h){let u=(o-r)/c-(a-r)/(c+f)+(a-o)/f,d=(a-o)/f-(l-o)/(f+h)+(l-a)/h;u*=f,d*=f,s(o,a,u,d)},calc:function(r){let o=r*r,a=o*r;return n+t*r+e*o+i*a}}}var ya=new N,Zl=new B0,Kl=new B0,Jl=new B0,Ir=class extends si{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new N){let i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,f;this.closed||a>0?c=s[(a-1)%r]:(ya.subVectors(s[0],s[1]).add(s[0]),c=ya);let h=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?f=s[(a+2)%r]:(ya.subVectors(s[r-1],s[r-2]).add(s[r-1]),f=ya),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(h),d),x=Math.pow(h.distanceToSquared(u),d),g=Math.pow(u.distanceToSquared(f),d);x<1e-4&&(x=1),m<1e-4&&(m=x),g<1e-4&&(g=x),Zl.initNonuniformCatmullRom(c.x,h.x,u.x,f.x,m,x,g),Kl.initNonuniformCatmullRom(c.y,h.y,u.y,f.y,m,x,g),Jl.initNonuniformCatmullRom(c.z,h.z,u.z,f.z,m,x,g)}else this.curveType==="catmullrom"&&(Zl.initCatmullRom(c.x,h.x,u.x,f.x,this.tension),Kl.initCatmullRom(c.y,h.y,u.y,f.y,this.tension),Jl.initCatmullRom(c.z,h.z,u.z,f.z,this.tension));return i.set(Zl.calc(l),Kl.calc(l),Jl.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new N().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Th(n,t,e,i,s){let r=(i-t)*.5,o=(s-e)*.5,a=n*n,l=n*a;return(2*e-2*i+r+o)*l+(-3*e+3*i-2*r-o)*a+r*n+e}function Q2(n,t){let e=1-n;return e*e*t}function tx(n,t){return 2*(1-n)*n*t}function ex(n,t){return n*n*t}function oo(n,t,e,i){return Q2(n,t)+tx(n,e)+ex(n,i)}function nx(n,t){let e=1-n;return e*e*e*t}function ix(n,t){let e=1-n;return 3*e*e*n*t}function sx(n,t){return 3*(1-n)*n*n*t}function rx(n,t){return n*n*n*t}function ao(n,t,e,i,s){return nx(n,t)+ix(n,e)+sx(n,i)+rx(n,s)}var Wa=class extends si{constructor(t=new Mt,e=new Mt,i=new Mt,s=new Mt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new Mt){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(ao(t,s.x,r.x,o.x,a.x),ao(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},c0=class extends si{constructor(t=new N,e=new N,i=new N,s=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new N){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(ao(t,s.x,r.x,o.x,a.x),ao(t,s.y,r.y,o.y,a.y),ao(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Xa=class extends si{constructor(t=new Mt,e=new Mt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Mt){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Mt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},f0=class extends si{constructor(t=new N,e=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new N){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new N){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ya=class extends si{constructor(t=new Mt,e=new Mt,i=new Mt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new Mt){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(oo(t,s.x,r.x,o.x),oo(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},qa=class extends si{constructor(t=new N,e=new N,i=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new N){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(oo(t,s.x,r.x,o.x),oo(t,s.y,r.y,o.y),oo(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},$a=class extends si{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Mt){let i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],f=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return i.set(Th(a,l.x,c.x,f.x,h.x),Th(a,l.y,c.y,f.y,h.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new Mt().fromArray(s))}return this}},Za=Object.freeze({__proto__:null,ArcCurve:l0,CatmullRomCurve3:Ir,CubicBezierCurve:Wa,CubicBezierCurve3:c0,EllipseCurve:go,LineCurve:Xa,LineCurve3:f0,QuadraticBezierCurve:Ya,QuadraticBezierCurve3:qa,SplineCurve:$a}),h0=class extends si{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Za[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let f=l[c];i&&i.equals(f)||(e.push(f),i=f)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(new Za[s.type]().fromJSON(s))}return this}},Ka=class extends h0{constructor(t){super(),this.type="Path",this.currentPoint=new Mt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new Xa(this.currentPoint.clone(),new Mt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){let r=new Ya(this.currentPoint.clone(),new Mt(t,e),new Mt(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,o){let a=new Wa(this.currentPoint.clone(),new Mt(t,e),new Mt(i,s),new Mt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new $a(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,s,r,o),this}absarc(t,e,i,s,r,o){return this.absellipse(t,e,i,i,s,r,o),this}ellipse(t,e,i,s,r,o,a,l){let c=this.currentPoint.x,f=this.currentPoint.y;return this.absellipse(t+c,e+f,i,s,r,o,a,l),this}absellipse(t,e,i,s,r,o,a,l){let c=new go(t,e,i,s,r,o,a,l);if(this.curves.length>0){let h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);let f=c.getPoint(1);return this.currentPoint.copy(f),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Ja=class n extends De{constructor(t=[new Mt(0,-.5),new Mt(.5,0),new Mt(0,.5)],e=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:s},e=Math.floor(e),s=xn(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],f=1/e,h=new N,u=new Mt,d=new N,m=new N,x=new N,g=0,p=0;for(let _=0;_<=t.length-1;_++)switch(_){case 0:g=t[_+1].x-t[_].x,p=t[_+1].y-t[_].y,d.x=p*1,d.y=-g,d.z=p*0,x.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:g=t[_+1].x-t[_].x,p=t[_+1].y-t[_].y,d.x=p*1,d.y=-g,d.z=p*0,m.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),l.push(d.x,d.y,d.z),x.copy(m)}for(let _=0;_<=e;_++){let y=i+_*f*s,b=Math.sin(y),L=Math.cos(y);for(let R=0;R<=t.length-1;R++){h.x=t[R].x*b,h.y=t[R].y,h.z=t[R].x*L,o.push(h.x,h.y,h.z),u.x=_/e,u.y=R/(t.length-1),a.push(u.x,u.y);let w=l[3*R+0]*b,P=l[3*R+1],T=l[3*R+0]*L;c.push(w,P,T)}}for(let _=0;_<e;_++)for(let y=0;y<t.length-1;y++){let b=y+_*t.length,L=b,R=b+t.length,w=b+t.length+1,P=b+1;r.push(L,R,P),r.push(w,P,R)}this.setIndex(r),this.setAttribute("position",new ue(o,3)),this.setAttribute("uv",new ue(a,2)),this.setAttribute("normal",new ue(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.points,t.segments,t.phiStart,t.phiLength)}};var xo=class n extends De{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new N,f=new Mt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,u=3;h<=e;h++,u+=3){let d=i+h/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),f.x=(o[u]/t+1)/2,f.y=(o[u+1]/t+1)/2,l.push(f.x,f.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new ue(o,3)),this.setAttribute("normal",new ue(a,3)),this.setAttribute("uv",new ue(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ji=class n extends De{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let f=[],h=[],u=[],d=[],m=0,x=[],g=i/2,p=0;_(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(f),this.setAttribute("position",new ue(h,3)),this.setAttribute("normal",new ue(u,3)),this.setAttribute("uv",new ue(d,2));function _(){let b=new N,L=new N,R=0,w=(e-t)/i;for(let P=0;P<=r;P++){let T=[],M=P/r,U=M*(e-t)+t;for(let W=0;W<=s;W++){let F=W/s,H=F*l+a,ot=Math.sin(H),j=Math.cos(H);L.x=U*ot,L.y=-M*i+g,L.z=U*j,h.push(L.x,L.y,L.z),b.set(ot,w,j).normalize(),u.push(b.x,b.y,b.z),d.push(F,1-M),T.push(m++)}x.push(T)}for(let P=0;P<s;P++)for(let T=0;T<r;T++){let M=x[T][P],U=x[T+1][P],W=x[T+1][P+1],F=x[T][P+1];(t>0||T!==0)&&(f.push(M,U,F),R+=3),(e>0||T!==r-1)&&(f.push(U,W,F),R+=3)}c.addGroup(p,R,0),p+=R}function y(b){let L=m,R=new Mt,w=new N,P=0,T=b===!0?t:e,M=b===!0?1:-1;for(let W=1;W<=s;W++)h.push(0,g*M,0),u.push(0,M,0),d.push(.5,.5),m++;let U=m;for(let W=0;W<=s;W++){let H=W/s*l+a,ot=Math.cos(H),j=Math.sin(H);w.x=T*j,w.y=g*M,w.z=T*ot,h.push(w.x,w.y,w.z),u.push(0,M,0),R.x=ot*.5+.5,R.y=j*.5*M+.5,d.push(R.x,R.y),m++}for(let W=0;W<s;W++){let F=L+W,H=U+W;b===!0?f.push(H,H+1,F):f.push(H+1,H,F),P+=3}c.addGroup(p,P,b===!0?1:2),p+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var _a=new N,ba=new N,jl=new N,va=new Hi,Pr=class extends De{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let s=Math.pow(10,4),r=Math.cos(dr*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],f=["a","b","c"],h=new Array(3),u={},d=[];for(let m=0;m<l;m+=3){o?(c[0]=o.getX(m),c[1]=o.getX(m+1),c[2]=o.getX(m+2)):(c[0]=m,c[1]=m+1,c[2]=m+2);let{a:x,b:g,c:p}=va;if(x.fromBufferAttribute(a,c[0]),g.fromBufferAttribute(a,c[1]),p.fromBufferAttribute(a,c[2]),va.getNormal(jl),h[0]=`${Math.round(x.x*s)},${Math.round(x.y*s)},${Math.round(x.z*s)}`,h[1]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,h[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let _=0;_<3;_++){let y=(_+1)%3,b=h[_],L=h[y],R=va[f[_]],w=va[f[y]],P=`${b}_${L}`,T=`${L}_${b}`;T in u&&u[T]?(jl.dot(u[T].normal)<=r&&(d.push(R.x,R.y,R.z),d.push(w.x,w.y,w.z)),u[T]=null):P in u||(u[P]={index0:c[_],index1:c[y],normal:jl.clone()})}}for(let m in u)if(u[m]){let{index0:x,index1:g}=u[m];_a.fromBufferAttribute(a,x),ba.fromBufferAttribute(a,g),d.push(_a.x,_a.y,_a.z),d.push(ba.x,ba.y,ba.z)}this.setAttribute("position",new ue(d,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}},Lr=class extends Ka{constructor(t){super(t),this.uuid=Ai(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(new Ka().fromJSON(s))}return this}},ox={triangulate:function(n,t,e=2){let i=t&&t.length,s=i?t[0]*e:n.length,r=nu(n,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,f,h,u,d;if(i&&(r=hx(n,t,r,e)),n.length>80*e){a=c=n[0],l=f=n[1];for(let m=e;m<s;m+=e)h=n[m],u=n[m+1],h<a&&(a=h),u<l&&(l=u),h>c&&(c=h),u>f&&(f=u);d=Math.max(c-a,f-l),d=d!==0?32767/d:0}return yo(r,o,e,a,l,d,0),o}};function nu(n,t,e,i,s){let r,o;if(s===Mx(n,t,e,i)>0)for(r=t;r<e;r+=i)o=wh(r,n[r],n[r+1],o);else for(r=e-i;r>=t;r-=i)o=wh(r,n[r],n[r+1],o);return o&&ll(o,o.next)&&(bo(o),o=o.next),o}function Os(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(ll(e,e.next)||tn(e.prev,e,e.next)===0)){if(bo(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function yo(n,t,e,i,s,r,o){if(!n)return;!o&&r&&gx(n,i,s,r);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,r?lx(n,i,s,r):ax(n)){t.push(l.i/e|0),t.push(n.i/e|0),t.push(c.i/e|0),bo(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=cx(Os(n),t,e),yo(n,t,e,i,s,r,2)):o===2&&fx(n,t,e,i,s,r):yo(Os(n),t,e,i,s,r,1);break}}}function ax(n){let t=n.prev,e=n,i=n.next;if(tn(t,e,i)>=0)return!1;let s=t.x,r=e.x,o=i.x,a=t.y,l=e.y,c=i.y,f=s<r?s<o?s:o:r<o?r:o,h=a<l?a<c?a:c:l<c?l:c,u=s>r?s>o?s:o:r>o?r:o,d=a>l?a>c?a:c:l>c?l:c,m=i.next;for(;m!==t;){if(m.x>=f&&m.x<=u&&m.y>=h&&m.y<=d&&fr(s,a,r,l,o,c,m.x,m.y)&&tn(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function lx(n,t,e,i){let s=n.prev,r=n,o=n.next;if(tn(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,f=s.y,h=r.y,u=o.y,d=a<l?a<c?a:c:l<c?l:c,m=f<h?f<u?f:u:h<u?h:u,x=a>l?a>c?a:c:l>c?l:c,g=f>h?f>u?f:u:h>u?h:u,p=u0(d,m,t,e,i),_=u0(x,g,t,e,i),y=n.prevZ,b=n.nextZ;for(;y&&y.z>=p&&b&&b.z<=_;){if(y.x>=d&&y.x<=x&&y.y>=m&&y.y<=g&&y!==s&&y!==o&&fr(a,f,l,h,c,u,y.x,y.y)&&tn(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=d&&b.x<=x&&b.y>=m&&b.y<=g&&b!==s&&b!==o&&fr(a,f,l,h,c,u,b.x,b.y)&&tn(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=p;){if(y.x>=d&&y.x<=x&&y.y>=m&&y.y<=g&&y!==s&&y!==o&&fr(a,f,l,h,c,u,y.x,y.y)&&tn(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=_;){if(b.x>=d&&b.x<=x&&b.y>=m&&b.y<=g&&b!==s&&b!==o&&fr(a,f,l,h,c,u,b.x,b.y)&&tn(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function cx(n,t,e){let i=n;do{let s=i.prev,r=i.next.next;!ll(s,r)&&iu(s,i,i.next,r)&&_o(s,r)&&_o(r,s)&&(t.push(s.i/e|0),t.push(i.i/e|0),t.push(r.i/e|0),bo(i),bo(i.next),i=n=r),i=i.next}while(i!==n);return Os(i)}function fx(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&_x(o,a)){let l=su(o,a);o=Os(o,o.next),l=Os(l,l.next),yo(o,t,e,i,s,r,0),yo(l,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function hx(n,t,e,i){let s=[],r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*i,l=r<o-1?t[r+1]*i:n.length,c=nu(n,a,l,i,!1),c===c.next&&(c.steiner=!0),s.push(yx(c));for(s.sort(ux),r=0;r<s.length;r++)e=dx(s[r],e);return e}function ux(n,t){return n.x-t.x}function dx(n,t){let e=px(n,t);if(!e)return t;let i=su(e,n);return Os(i,i.next),Os(e,e.next)}function px(n,t){let e=t,i=-1/0,s,r=n.x,o=n.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let u=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=r&&u>i&&(i=u,s=e.x<e.next.x?e:e.next,u===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,l=s.x,c=s.y,f=1/0,h;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&fr(o<c?r:i,o,l,c,o<c?i:r,o,e.x,e.y)&&(h=Math.abs(o-e.y)/(r-e.x),_o(e,n)&&(h<f||h===f&&(e.x>s.x||e.x===s.x&&mx(s,e)))&&(s=e,f=h)),e=e.next;while(e!==a);return s}function mx(n,t){return tn(n.prev,n,t.prev)<0&&tn(t.next,n,n.next)<0}function gx(n,t,e,i){let s=n;do s.z===0&&(s.z=u0(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,xx(s)}function xx(n){let t,e,i,s,r,o,a,l,c=1;do{for(e=n,n=null,r=null,o=0;e;){for(o++,i=e,a=0,t=0;t<c&&(a++,i=i.nextZ,!!i);t++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||e.z<=i.z)?(s=e,e=e.nextZ,a--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;e=i}r.nextZ=null,c*=2}while(o>1);return n}function u0(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function yx(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function fr(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function _x(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!bx(n,t)&&(_o(n,t)&&_o(t,n)&&vx(n,t)&&(tn(n.prev,n,t.prev)||tn(n,t.prev,t))||ll(n,t)&&tn(n.prev,n,n.next)>0&&tn(t.prev,t,t.next)>0)}function tn(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function ll(n,t){return n.x===t.x&&n.y===t.y}function iu(n,t,e,i){let s=Sa(tn(n,t,e)),r=Sa(tn(n,t,i)),o=Sa(tn(e,i,n)),a=Sa(tn(e,i,t));return!!(s!==r&&o!==a||s===0&&Ma(n,e,t)||r===0&&Ma(n,i,t)||o===0&&Ma(e,n,i)||a===0&&Ma(e,t,i))}function Ma(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function Sa(n){return n>0?1:n<0?-1:0}function bx(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&iu(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function _o(n,t){return tn(n.prev,n,n.next)<0?tn(n,t,n.next)>=0&&tn(n,n.prev,t)>=0:tn(n,t,n.prev)<0||tn(n,n.next,t)<0}function vx(n,t){let e=n,i=!1,s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function su(n,t){let e=new d0(n.i,n.x,n.y),i=new d0(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function wh(n,t,e,i){let s=new d0(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function bo(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function d0(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Mx(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var lo=class n{static area(t){let e=t.length,i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return n.area(t)<0}static triangulateShape(t,e){let i=[],s=[],r=[];Ah(t),Rh(i,t);let o=t.length;e.forEach(Ah);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Rh(i,e[l]);let a=ox.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Ah(n){let t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Rh(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}var ja=class n extends De{constructor(t=new Lr([new Mt(.5,.5),new Mt(-.5,.5),new Mt(-.5,-.5),new Mt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let i=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new ue(s,3)),this.setAttribute("uv",new ue(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,f=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:d-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,_=e.UVGenerator!==void 0?e.UVGenerator:Sx,y,b=!1,L,R,w,P;p&&(y=p.getSpacedPoints(f),b=!0,u=!1,L=p.computeFrenetFrames(f,!1),R=new N,w=new N,P=new N),u||(g=0,d=0,m=0,x=0);let T=a.extractPoints(c),M=T.shape,U=T.holes;if(!lo.isClockWise(M)){M=M.reverse();for(let B=0,rt=U.length;B<rt;B++){let A=U[B];lo.isClockWise(A)&&(U[B]=A.reverse())}}let F=lo.triangulateShape(M,U),H=M;for(let B=0,rt=U.length;B<rt;B++){let A=U[B];M=M.concat(A)}function ot(B,rt,A){return rt||console.error("THREE.ExtrudeGeometry: vec does not exist"),B.clone().addScaledVector(rt,A)}let j=M.length,ut=F.length;function tt(B,rt,A){let dt,X,pt,at=B.x-rt.x,Lt=B.y-rt.y,mt=A.x-B.x,I=A.y-B.y,S=at*at+Lt*Lt,V=at*I-Lt*mt;if(Math.abs(V)>Number.EPSILON){let it=Math.sqrt(S),ht=Math.sqrt(mt*mt+I*I),lt=rt.x-Lt/it,Wt=rt.y+at/it,Nt=A.x-I/ht,zt=A.y+mt/ht,se=((Nt-lt)*I-(zt-Wt)*mt)/(at*I-Lt*mt);dt=lt+at*se-B.x,X=Wt+Lt*se-B.y;let gt=dt*dt+X*X;if(gt<=2)return new Mt(dt,X);pt=Math.sqrt(gt/2)}else{let it=!1;at>Number.EPSILON?mt>Number.EPSILON&&(it=!0):at<-Number.EPSILON?mt<-Number.EPSILON&&(it=!0):Math.sign(Lt)===Math.sign(I)&&(it=!0),it?(dt=-Lt,X=at,pt=Math.sqrt(S)):(dt=at,X=Lt,pt=Math.sqrt(S/2))}return new Mt(dt/pt,X/pt)}let Tt=[];for(let B=0,rt=H.length,A=rt-1,dt=B+1;B<rt;B++,A++,dt++)A===rt&&(A=0),dt===rt&&(dt=0),Tt[B]=tt(H[B],H[A],H[dt]);let Rt=[],Bt,oe=Tt.concat();for(let B=0,rt=U.length;B<rt;B++){let A=U[B];Bt=[];for(let dt=0,X=A.length,pt=X-1,at=dt+1;dt<X;dt++,pt++,at++)pt===X&&(pt=0),at===X&&(at=0),Bt[dt]=tt(A[dt],A[pt],A[at]);Rt.push(Bt),oe=oe.concat(Bt)}for(let B=0;B<g;B++){let rt=B/g,A=d*Math.cos(rt*Math.PI/2),dt=m*Math.sin(rt*Math.PI/2)+x;for(let X=0,pt=H.length;X<pt;X++){let at=ot(H[X],Tt[X],dt);St(at.x,at.y,-A)}for(let X=0,pt=U.length;X<pt;X++){let at=U[X];Bt=Rt[X];for(let Lt=0,mt=at.length;Lt<mt;Lt++){let I=ot(at[Lt],Bt[Lt],dt);St(I.x,I.y,-A)}}}let ye=m+x;for(let B=0;B<j;B++){let rt=u?ot(M[B],oe[B],ye):M[B];b?(w.copy(L.normals[0]).multiplyScalar(rt.x),R.copy(L.binormals[0]).multiplyScalar(rt.y),P.copy(y[0]).add(w).add(R),St(P.x,P.y,P.z)):St(rt.x,rt.y,0)}for(let B=1;B<=f;B++)for(let rt=0;rt<j;rt++){let A=u?ot(M[rt],oe[rt],ye):M[rt];b?(w.copy(L.normals[B]).multiplyScalar(A.x),R.copy(L.binormals[B]).multiplyScalar(A.y),P.copy(y[B]).add(w).add(R),St(P.x,P.y,P.z)):St(A.x,A.y,h/f*B)}for(let B=g-1;B>=0;B--){let rt=B/g,A=d*Math.cos(rt*Math.PI/2),dt=m*Math.sin(rt*Math.PI/2)+x;for(let X=0,pt=H.length;X<pt;X++){let at=ot(H[X],Tt[X],dt);St(at.x,at.y,h+A)}for(let X=0,pt=U.length;X<pt;X++){let at=U[X];Bt=Rt[X];for(let Lt=0,mt=at.length;Lt<mt;Lt++){let I=ot(at[Lt],Bt[Lt],dt);b?St(I.x,I.y+y[f-1].y,y[f-1].x+A):St(I.x,I.y,h+A)}}}st(),vt();function st(){let B=s.length/3;if(u){let rt=0,A=j*rt;for(let dt=0;dt<ut;dt++){let X=F[dt];$t(X[2]+A,X[1]+A,X[0]+A)}rt=f+g*2,A=j*rt;for(let dt=0;dt<ut;dt++){let X=F[dt];$t(X[0]+A,X[1]+A,X[2]+A)}}else{for(let rt=0;rt<ut;rt++){let A=F[rt];$t(A[2],A[1],A[0])}for(let rt=0;rt<ut;rt++){let A=F[rt];$t(A[0]+j*f,A[1]+j*f,A[2]+j*f)}}i.addGroup(B,s.length/3-B,0)}function vt(){let B=s.length/3,rt=0;Vt(H,rt),rt+=H.length;for(let A=0,dt=U.length;A<dt;A++){let X=U[A];Vt(X,rt),rt+=X.length}i.addGroup(B,s.length/3-B,1)}function Vt(B,rt){let A=B.length;for(;--A>=0;){let dt=A,X=A-1;X<0&&(X=B.length-1);for(let pt=0,at=f+g*2;pt<at;pt++){let Lt=j*pt,mt=j*(pt+1),I=rt+dt+Lt,S=rt+X+Lt,V=rt+X+mt,it=rt+dt+mt;le(I,S,V,it)}}}function St(B,rt,A){l.push(B),l.push(rt),l.push(A)}function $t(B,rt,A){Zt(B),Zt(rt),Zt(A);let dt=s.length/3,X=_.generateTopUV(i,s,dt-3,dt-2,dt-1);Se(X[0]),Se(X[1]),Se(X[2])}function le(B,rt,A,dt){Zt(B),Zt(rt),Zt(dt),Zt(rt),Zt(A),Zt(dt);let X=s.length/3,pt=_.generateSideWallUV(i,s,X-6,X-3,X-2,X-1);Se(pt[0]),Se(pt[1]),Se(pt[3]),Se(pt[1]),Se(pt[2]),Se(pt[3])}function Zt(B){s.push(l[B*3+0]),s.push(l[B*3+1]),s.push(l[B*3+2])}function Se(B){r.push(B.x),r.push(B.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return Ex(e,i,t)}static fromJSON(t,e){let i=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];i.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Za[s.type]().fromJSON(s)),new n(i,t.options)}},Sx={generateTopUV:function(n,t,e,i,s){let r=t[e*3],o=t[e*3+1],a=t[i*3],l=t[i*3+1],c=t[s*3],f=t[s*3+1];return[new Mt(r,o),new Mt(a,l),new Mt(c,f)]},generateSideWallUV:function(n,t,e,i,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[i*3],f=t[i*3+1],h=t[i*3+2],u=t[s*3],d=t[s*3+1],m=t[s*3+2],x=t[r*3],g=t[r*3+1],p=t[r*3+2];return Math.abs(a-f)<Math.abs(o-c)?[new Mt(o,1-l),new Mt(c,1-h),new Mt(u,1-m),new Mt(x,1-p)]:[new Mt(a,1-l),new Mt(f,1-h),new Mt(d,1-m),new Mt(g,1-p)]}};function Ex(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Qa=class n extends De{constructor(t=.5,e=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],c=[],f=[],h=t,u=(e-t)/s,d=new N,m=new Mt;for(let x=0;x<=s;x++){for(let g=0;g<=i;g++){let p=r+g/i*o;d.x=h*Math.cos(p),d.y=h*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),m.x=(d.x/e+1)/2,m.y=(d.y/e+1)/2,f.push(m.x,m.y)}h+=u}for(let x=0;x<s;x++){let g=x*(i+1);for(let p=0;p<i;p++){let _=p+g,y=_,b=_+i+1,L=_+i+2,R=_+1;a.push(y,b,R),a.push(b,L,R)}}this.setIndex(a),this.setAttribute("position",new ue(l,3)),this.setAttribute("normal",new ue(c,3)),this.setAttribute("uv",new ue(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var ji=class n extends De{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,f=[],h=new N,u=new N,d=[],m=[],x=[],g=[];for(let p=0;p<=i;p++){let _=[],y=p/i,b=0;p===0&&o===0?b=.5/e:p===i&&l===Math.PI&&(b=-.5/e);for(let L=0;L<=e;L++){let R=L/e;h.x=-t*Math.cos(s+R*r)*Math.sin(o+y*a),h.y=t*Math.cos(o+y*a),h.z=t*Math.sin(s+R*r)*Math.sin(o+y*a),m.push(h.x,h.y,h.z),u.copy(h).normalize(),x.push(u.x,u.y,u.z),g.push(R+b,1-y),_.push(c++)}f.push(_)}for(let p=0;p<i;p++)for(let _=0;_<e;_++){let y=f[p][_+1],b=f[p][_],L=f[p+1][_],R=f[p+1][_+1];(p!==0||o>0)&&d.push(y,b,R),(p!==i-1||l<Math.PI)&&d.push(b,L,R)}this.setIndex(d),this.setAttribute("position",new ue(m,3)),this.setAttribute("normal",new ue(x,3)),this.setAttribute("uv",new ue(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var tl=class n extends De{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],l=[],c=[],f=new N,h=new N,u=new N;for(let d=0;d<=i;d++)for(let m=0;m<=s;m++){let x=m/s*r,g=d/i*Math.PI*2;h.x=(t+e*Math.cos(g))*Math.cos(x),h.y=(t+e*Math.cos(g))*Math.sin(x),h.z=e*Math.sin(g),a.push(h.x,h.y,h.z),f.x=t*Math.cos(x),f.y=t*Math.sin(x),u.subVectors(h,f).normalize(),l.push(u.x,u.y,u.z),c.push(m/s),c.push(d/i)}for(let d=1;d<=i;d++)for(let m=1;m<=s;m++){let x=(s+1)*d+m-1,g=(s+1)*(d-1)+m-1,p=(s+1)*(d-1)+m,_=(s+1)*d+m;o.push(x,g,_),o.push(g,p,_)}this.setIndex(o),this.setAttribute("position",new ue(a,3)),this.setAttribute("normal",new ue(l,3)),this.setAttribute("uv",new ue(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var vo=class n extends De{constructor(t=new qa(new N(-1,-1,0),new N(-1,1,0),new N(1,1,0)),e=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new N,l=new N,c=new Mt,f=new N,h=[],u=[],d=[],m=[];x(),this.setIndex(m),this.setAttribute("position",new ue(h,3)),this.setAttribute("normal",new ue(u,3)),this.setAttribute("uv",new ue(d,2));function x(){for(let y=0;y<e;y++)g(y);g(r===!1?e:0),_(),p()}function g(y){f=t.getPointAt(y/e,f);let b=o.normals[y],L=o.binormals[y];for(let R=0;R<=s;R++){let w=R/s*Math.PI*2,P=Math.sin(w),T=-Math.cos(w);l.x=T*b.x+P*L.x,l.y=T*b.y+P*L.y,l.z=T*b.z+P*L.z,l.normalize(),u.push(l.x,l.y,l.z),a.x=f.x+i*l.x,a.y=f.y+i*l.y,a.z=f.z+i*l.z,h.push(a.x,a.y,a.z)}}function p(){for(let y=1;y<=e;y++)for(let b=1;b<=s;b++){let L=(s+1)*(y-1)+(b-1),R=(s+1)*y+(b-1),w=(s+1)*y+b,P=(s+1)*(y-1)+b;m.push(L,R,P),m.push(R,w,P)}}function _(){for(let y=0;y<=e;y++)for(let b=0;b<=s;b++)c.x=y/e,c.y=b/s,d.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new n(new Za[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var Ke=class extends Ri{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new jt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xh,this.normalScale=new Mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Ea(n,t,e){return!n||!e&&n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function Tx(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Nr=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break n}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},p0=class extends Nr{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:_f,endingEnd:_f}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case bf:r=t,a=2*e-i;break;case vf:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case bf:o=t,l=2*i-e;break;case vf:o=1,l=i+s[1]-s[0];break;default:o=t-1,l=e}let c=(i-e)*.5,f=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-i),this._offsetPrev=r*f,this._offsetNext=o*f}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,f=this._offsetPrev,h=this._offsetNext,u=this._weightPrev,d=this._weightNext,m=(i-e)/(s-e),x=m*m,g=x*m,p=-u*g+2*u*x-u*m,_=(1+u)*g+(-1.5-2*u)*x+(-.5+u)*m+1,y=(-1-d)*g+(1.5+d)*x+.5*m,b=d*g-d*x;for(let L=0;L!==a;++L)r[L]=p*o[f+L]+_*o[c+L]+y*o[l+L]+b*o[h+L];return r}},m0=class extends Nr{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,f=(i-e)/(s-e),h=1-f;for(let u=0;u!==a;++u)r[u]=o[c+u]*h+o[l+u]*f;return r}},g0=class extends Nr{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},mi=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ea(e,this.TimeBufferType),this.values=Ea(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Ea(t.times,Array),values:Ea(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new g0(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new m0(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new p0(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Ia:e=this.InterpolantFactoryMethodDiscrete;break;case Bc:e=this.InterpolantFactoryMethodLinear;break;case bl:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ia;case this.InterpolantFactoryMethodLinear:return Bc;case this.InterpolantFactoryMethodSmooth:return bl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&Tx(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===bl,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],f=t[a+1];if(c!==f&&(a!==1||c!==t[0]))if(s)l=!0;else{let h=a*i,u=h-i,d=h+i;for(let m=0;m!==i;++m){let x=e[h+m];if(x!==e[u+m]||x!==e[d+m]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let h=a*i,u=o*i;for(let d=0;d!==i;++d)e[u+d]=e[h+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};mi.prototype.TimeBufferType=Float32Array;mi.prototype.ValueBufferType=Float32Array;mi.prototype.DefaultInterpolation=Bc;var Us=class extends mi{constructor(t,e,i){super(t,e,i)}};Us.prototype.ValueTypeName="bool";Us.prototype.ValueBufferType=Array;Us.prototype.DefaultInterpolation=Ia;Us.prototype.InterpolantFactoryMethodLinear=void 0;Us.prototype.InterpolantFactoryMethodSmooth=void 0;var x0=class extends mi{};x0.prototype.ValueTypeName="color";var y0=class extends mi{};y0.prototype.ValueTypeName="number";var _0=class extends Nr{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(s-e),c=t*a;for(let f=c+a;c!==f;c+=4)Sn.slerpFlat(r,0,o,c-a,o,c,l);return r}},el=class extends mi{InterpolantFactoryMethodLinear(t){return new _0(this.times,this.values,this.getValueSize(),t)}};el.prototype.ValueTypeName="quaternion";el.prototype.InterpolantFactoryMethodSmooth=void 0;var Ds=class extends mi{constructor(t,e,i){super(t,e,i)}};Ds.prototype.ValueTypeName="string";Ds.prototype.ValueBufferType=Array;Ds.prototype.DefaultInterpolation=Ia;Ds.prototype.InterpolantFactoryMethodLinear=void 0;Ds.prototype.InterpolantFactoryMethodSmooth=void 0;var b0=class extends mi{};b0.prototype.ValueTypeName="vector";var v0=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(f){a++,r===!1&&s.onStart!==void 0&&s.onStart(f,o,a),r=!0},this.itemEnd=function(f){o++,s.onProgress!==void 0&&s.onProgress(f,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(f){s.onError!==void 0&&s.onError(f)},this.resolveURL=function(f){return l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,h){return c.push(f,h),this},this.removeHandler=function(f){let h=c.indexOf(f);return h!==-1&&c.splice(h,2),this},this.getHandler=function(f){for(let h=0,u=c.length;h<u;h+=2){let d=c[h],m=c[h+1];if(d.global&&(d.lastIndex=0),d.test(f))return m}return null}}},wx=new v0,M0=class{constructor(t){this.manager=t!==void 0?t:wx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};M0.DEFAULT_MATERIAL_NAME="__DEFAULT";var Mo=class extends rn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new jt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Or=class extends Mo{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new jt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Ql=new re,Ch=new N,Ih=new N,nl=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Mt(512,512),this.map=null,this.mapPass=null,this.matrix=new re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ho,this._frameExtents=new Mt(1,1),this._viewportCount=1,this._viewports=[new Fe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;Ch.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ch),Ih.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ih),e.updateMatrixWorld(),Ql.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ql),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ql)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},S0=class extends nl{constructor(){super(new Mn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,i=vr*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(i!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=i,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},So=class extends Mo{constructor(t,e,i=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.target=new rn,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new S0}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Ph=new re,eo=new N,tc=new N,E0=class extends nl{constructor(){super(new Mn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Mt(4,2),this._viewportCount=6,this._viewports=[new Fe(2,1,1,1),new Fe(0,1,1,1),new Fe(3,1,1,1),new Fe(1,1,1,1),new Fe(3,0,1,1),new Fe(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(t,e=0){let i=this.camera,s=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),eo.setFromMatrixPosition(t.matrixWorld),i.position.copy(eo),tc.copy(i.position),tc.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(tc),i.updateMatrixWorld(),s.makeTranslation(-eo.x,-eo.y,-eo.z),Ph.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ph)}},Eo=class extends Mo{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new E0}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}};var z0="\\[\\]\\.:\\/",Ax=new RegExp("["+z0+"]","g"),H0="[^"+z0+"]",Rx="[^"+z0.replace("\\.","")+"]",Cx=/((?:WC+[\/:])*)/.source.replace("WC",H0),Ix=/(WCOD+)?/.source.replace("WCOD",Rx),Px=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",H0),Lx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",H0),Nx=new RegExp("^"+Cx+Ix+Px+Lx+"$"),Ox=["material","materials","bones","map"],T0=class{constructor(t,e,i){let s=i||Qe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Qe=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Ax,"")}static parseTrackName(t){let e=Nx.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Ox.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let f=0;f<t.length;f++)if(t[f].name===c){c=f;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Qe.Composite=T0;Qe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Qe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Qe.prototype.GetterByBindingType=[Qe.prototype._getValue_direct,Qe.prototype._getValue_array,Qe.prototype._getValue_arrayElement,Qe.prototype._getValue_toArray];Qe.prototype.SetterByBindingTypeAndVersioning=[[Qe.prototype._setValue_direct,Qe.prototype._setValue_direct_setNeedsUpdate,Qe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_array,Qe.prototype._setValue_array_setNeedsUpdate,Qe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_arrayElement,Qe.prototype._setValue_arrayElement_setNeedsUpdate,Qe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_fromArray,Qe.prototype._setValue_fromArray_setNeedsUpdate,Qe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ky=new Float32Array(1);var Lh=new re,il=class{constructor(t,e,i=0,s=1/0){this.ray=new Mr(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new fo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Lh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Lh),this}intersectObject(t,e=!0,i=[]){return w0(t,this,i,e),i.sort(Nh),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)w0(t[s],this,i,e);return i.sort(Nh),i}};function Nh(n,t){return n.distance-t.distance}function w0(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let o=0,a=r.length;o<a;o++)w0(r[o],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:A0}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=A0);function wo(n){return function(){n|=0,n=n+1831565813|0;let e=Math.imul(n^n>>>15,1|n);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Hn(n){let t=2166136261;for(let e=0;e<n.length;e++)t^=n.charCodeAt(e),t=Math.imul(t,16777619);return t>>>0}function ru(n,t,e,i=.3,s={}){let r=Ao(n,s);for(let o=0;o<2;o++)for(let a of r){let l=a.w/2+i,c=a.d/2+i,f=t-a.x,h=e-a.z;if(Math.abs(f)<l&&Math.abs(h)<c){let u=l-Math.abs(f),d=c-Math.abs(h);u<d?t+=Math.sign(f||1)*u:e+=Math.sign(h||1)*d}}return{x:t,z:e}}function Ao(n,t={}){let e=n.walls.slice();for(let i of n.fixtures)i.solid&&e.push(i),i.type==="gate"&&!t.counter&&e.push(i);return e}function ou(n,t,e,i,s=2.2){for(let c of n.spots){let f=c.area;if(f&&t>=f.x1&&t<=f.x2&&e>=f.z1&&e<=f.z2)return{...c,type:"search",dist:0}}let r=null,o=-Math.sin(i),a=-Math.cos(i),l=n.spots.filter(c=>!c.area).map(c=>({...c,type:"search"}));l.push({type:"exit",x:n.exit.x,z:n.exit.z,label:"Leave the building"});for(let c of l){let f=c.x-t,h=c.z-e,u=Math.hypot(f,h);if(u>s)continue;let d=u<.6?1:(f*o+h*a)/u;if(d<.35)continue;let m=u-d;(!r||m<r.score)&&(r={...c,dist:u,score:m})}return r}var Tn=n=>{let t=Math.abs(Math.floor(n))%2147483646+1;return()=>(t=t*16807%2147483647)/2147483647},Ro=(n,t)=>{let e=Math.sin(n*127.1+t*311.7)*43758.5453;return e-Math.floor(e)},bn=n=>n<0?0:n>1?1:n,au=n=>n*n*(3-2*n),Qn=(n,t=n)=>{let e=document.createElement("canvas");return e.width=n,e.height=t,e};function Ci(n,t,e,i,s){let r=new Float32Array(e*i);for(let a=0;a<r.length;a++)r[a]=s();let o=new Float32Array(n*t);for(let a=0;a<t;a++){let l=a/t*i,c=Math.floor(l),f=au(l-c),h=c%i*e,u=(c+1)%i*e;for(let d=0;d<n;d++){let m=d/n*e,x=Math.floor(m),g=au(m-x),p=x%e,_=(x+1)%e,y=r[h+p]+(r[h+_]-r[h+p])*g,b=r[u+p]+(r[u+_]-r[u+p])*g;o[a*n+d]=y+(b-y)*f}}return o}function Cn(n,t,e,i,s,r,o=.5){let a=new Float32Array(n*t),l=1,c=0;for(let f=0;f<s;f++){let h=Ci(n,t,e<<f,i<<f,r);for(let u=0;u<a.length;u++)a[u]+=h[u]*l;c+=l,l*=o}for(let f=0;f<a.length;f++)a[f]/=c;return a}function Ii(n,t){let e=Qn(n,t),i=Qn(n,t),s=Qn(n,t);return{w:n,h:t,col:e,hgt:i,rough:s,c:e.getContext("2d"),hc:i.getContext("2d"),rc:s.getContext("2d")}}function Pi(n,t){let{w:e,h:i}=n,s=n.c.createImageData(e,i),r=n.hc.createImageData(e,i),o=n.rc.createImageData(e,i),a=[0,0,0,0,0];for(let l=0;l<i;l++)for(let c=0;c<e;c++){let f=l*e+c;t(f,c,l,a);let h=f*4;s.data[h]=a[0],s.data[h+1]=a[1],s.data[h+2]=a[2],s.data[h+3]=255;let u=bn(a[3])*255;r.data[h]=r.data[h+1]=r.data[h+2]=u,r.data[h+3]=255;let d=bn(a[4])*255;o.data[h]=o.data[h+1]=o.data[h+2]=d,o.data[h+3]=255}n.c.putImageData(s,0,0),n.hc.putImageData(r,0,0),n.rc.putImageData(o,0,0)}function Y0(n,t,e,i,s,r){for(let o of[-n,0,n])for(let a of[-t,0,t])e+o+s<0||e+o-s>n||i+a+s<0||i+a-s>t||r(e+o,i+a)}function Dx(n,t){let{w:e,h:i}=n,s=n.hc.getImageData(0,0,e,i).data,r=Qn(e,i),o=r.getContext("2d"),a=o.createImageData(e,i),l=(c,f)=>s[((f+i)%i*e+(c+e)%e)*4]/255;for(let c=0;c<i;c++)for(let f=0;f<e;f++){let h=(l(f+1,c)-l(f-1,c))*t,u=(l(f,c+1)-l(f,c-1))*t,d=-h,m=u,x=1,g=Math.hypot(d,m,x);d/=g,m/=g,x/=g;let p=(c*e+f)*4;a.data[p]=(d*.5+.5)*255,a.data[p+1]=(m*.5+.5)*255,a.data[p+2]=(x*.5+.5)*255,a.data[p+3]=255}return o.putImageData(a,0,0),r}function G0(n,t,e=!0){let i=new On(n);return i.wrapS=i.wrapT=e?qi:Gi,i.colorSpace=t?$e:ii,i.minFilter=Vi,i.anisotropy=4,i}function Li(n,{tile:t,normal:e=2,roughness:i=1,metalness:s=0,envColor:r}){let o=G0(n.col,!0),a=G0(n.rough,!1),l=G0(Dx(n,e),!1);for(let f of[o,a,l])f.repeat.set(1/t[0],1/t[1]);let c=new Ke({map:o,roughnessMap:a,normalMap:l,roughness:i,metalness:s});return c.normalScale=new Mt(1,1),r&&(c.color=new jt(r)),c.userData.tile=t,c}function Gn(n){return[n>>16&255,n>>8&255,n&255]}function q0(n,t,e,i){i[0]=n[0]+(t[0]-n[0])*e,i[1]=n[1]+(t[1]-n[1])*e,i[2]=n[2]+(t[2]-n[2])*e}function $0(n,t,e,i=.35){let{c:s,w:r,h:o}=n;for(let a=0;a<t;a++){let l=e()*r,c=e()*o,f=(.02+e()*.08)*r,h=e()*6.3;Y0(r,o,l,c,f,(u,d)=>{s.strokeStyle=`rgba(20,18,16,${i*(.3+e()*.7)})`,s.lineWidth=.6+e()*2.2*(r/512),s.beginPath(),s.arc(u,d,f,h,h+.3+e()*.9),s.stroke()})}}var V0={};function kx(n,t){let e=`${n}-${t}`;if(V0[e])return V0[e];let i=Tn(900+t*17),s=Cn(n,n,3,3,5,i,.6),r=Qn(n),o=r.getContext("2d"),a=o.createImageData(n,n);for(let l=0;l<n;l++)for(let c=0;c<n;c++){let f=l*n+c,h=Math.hypot(c-n/2,l-n/2)/(n/2),u=s[f]*1.35+.3-h*.6,d=bn((u-.5)*14),m=Math.exp(-(((u-.53)*26)**2)),x=(d*.3+m*.28)*bn((1-h)*3),g=f*4;a.data[g]=a.data[g+1]=a.data[g+2]=255,a.data[g+3]=bn(x)*255}return o.putImageData(a,0,0),V0[e]=r,r}function ks(n,t,e,i="90,62,30",s=.18,r=1){let{c:o,rc:a,w:l,h:c}=n,f=kx(128,Math.floor(e()*3)),h=Qn(128),u=h.getContext("2d");u.drawImage(f,0,0),u.globalCompositeOperation="source-in",u.fillStyle=`rgb(${i})`,u.fillRect(0,0,128,128);for(let d=0;d<t;d++){let m=e()*l,x=e()*c,g=(.04+e()*s)*Math.min(l,c),p=e()*6.3,_=.6+e()*.5;Y0(l,c,m,x,g,(y,b)=>{for(let L of[o,a])L.save(),L.translate(y,b),L.rotate(p),L.scale(1,_),L.globalAlpha=L===o?.8*r:.25,L.drawImage(L===o?h:f,-g,-g,g*2,g*2),L.restore()})}}function kr(n,t,e,i=4){return Cn(n,t,i,i,5,e,.55)}function Fx(n,t){let e=Tn(t),i=Ii(n,n),s=Cn(n,n,8,8,4,e),r=kr(n,n,e,3),o=Ci(n,n,n/2,n/2,e),a=[];for(let d=0;d<16;d++)a.push(e());let l=n/4,c=Gn(12894388),f=Gn(11775647),h=Gn(4865841),u=[0,0,0];return Pi(i,(d,m,x,g)=>{let p=Math.floor(m/l),_=Math.floor(x/l),y=m%l/l,b=x%l/l,L=Math.min(y,b,1-y,1-b),R=a[_*4+p];q0(c,f,R*.8,u);let w=o[d],P=w>.82?-26:w<.12?14:0,T=(s[d]-.5)*26+P,M=bn((r[d]-.45)*2.2)*.45+bn(1-L*30)*.3*(.5+r[d]);g[0]=u[0]+T,g[1]=u[1]+T,g[2]=u[2]+T;let U=Math.min(.75,M);g[0]+=(h[0]-g[0])*U,g[1]+=(h[1]-g[1])*U,g[2]+=(h[2]-g[2])*U;let W=L<.006;W&&(g[0]*=.72,g[1]*=.72,g[2]*=.72),g[3]=W?.45:.62+s[d]*.06-M*.05,g[4]=.42+M*.45+(W?.4:0)+(s[d]-.5)*.1}),$0(i,45,e,.3),Li(i,{tile:[1.2,1.2],normal:2})}function Bx(n,t){let e=Tn(t),i=Ii(n,n),s=Cn(n,n,6,6,5,e,.6),r=Ci(n,n,n/3,n/3,e),o=kr(n,n,e,3),a=Gn(9674906),l=Gn(6253414),c=[0,0,0];return Pi(i,(f,h,u,d)=>{q0(a,l,bn((s[f]-.35)*1.6),c);let m=r[f]>.86?22:r[f]<.1?-18:0,x=bn((o[f]-.45)*2.2);d[0]=c[0]+m-x*40,d[1]=c[1]+m-x*38,d[2]=c[2]+m-x*42;let g=Math.abs(h-n/2)<1;g&&(d[0]*=.55,d[1]*=.55,d[2]*=.55),d[3]=g?.3:.6+s[f]*.04,d[4]=.28+x*.5+s[f]*.15}),$0(i,60,e,.32),ks(i,2,e,"80,70,40",.1),Li(i,{tile:[2,2],normal:1.5})}function zx(n,t){let e=Tn(t),i=Ii(n,n),s=Cn(n,n,2,48,4,e,.5),r=Ci(n,n,6,160,e),o=kr(n,n,e,3),a=8,l=n/a,c=[];for(let m=0;m<a;m++){let x=e();c.push([x,(x+.35+e()*.3)%1])}let f=[];for(let m=0;m<a*3;m++)f.push(e());let h=Gn(9399888),u=Gn(5192232),d=[0,0,0];return Pi(i,(m,x,g,p)=>{let _=Math.floor(x/l),y=x%l/l,b=g/n,[L,R]=c[_],w=b>Math.min(L,R)&&b<Math.max(L,R)?1:0,P=f[_*3+w];q0(h,u,.25+P*.5,d);let T=(s[m]-.5)*50+(r[m]-.5)*22,M=bn((o[m]-.5)*2);p[0]=d[0]+T-M*18,p[1]=d[1]+T*.8-M*18,p[2]=d[2]+T*.6-M*14;let U=y<.025||y>.975||Math.abs(b-L)<.003||Math.abs(b-R)<.003;U&&(p[0]*=.5,p[1]*=.5,p[2]*=.5),p[3]=U?.25:.6+(r[m]-.5)*.12,p[4]=.5+M*.35+(s[m]-.5)*.15+(U?.4:0)}),$0(i,25,e,.25),ks(i,2,e,"40,25,12",.1),Li(i,{tile:[1.6,1.6],normal:2.5})}function Hx(n,t){let e=Tn(t),i=Ii(n,n),s=Ci(n,n,n/2,n/2,e),r=Cn(n,n,16,16,3,e),o=kr(n,n,e,3),a=Gn(6117970);return Pi(i,(l,c,f,h)=>{let u=(s[l]-.5)*30+(r[l]-.5)*24,d=bn((o[l]-.45)*2);h[0]=a[0]+u-d*30,h[1]=a[1]+u-d*30,h[2]=a[2]+u-d*26,h[3]=.5+s[l]*.4,h[4]=.95}),ks(i,4,e,"60,40,22",.14),Li(i,{tile:[1,1],normal:1.2})}function Gx(n,t){let e=Tn(t),i=Ii(n,n),s=Cn(n,n,4,4,6,e,.55),r=Ci(n,n,n/2,n/2,e),o=Gn(9144964);Pi(i,(h,u,d,m)=>{let x=(s[h]-.5)*60,g=r[h]>.9?-30:0;m[0]=o[0]+x+g,m[1]=o[1]+x+g,m[2]=o[2]+x*.95+g;let p=Math.abs(u%(n/2)-0)<1.2||Math.abs(d%(n/2)-0)<1.2;p&&(m[0]*=.4,m[1]*=.4,m[2]*=.4),m[3]=p?.1:.55+s[h]*.15+(g?-.2:0),m[4]=.82+(s[h]-.5)*.2});let{c:a,hc:l,w:c,h:f}=i;for(let h=0;h<4;h++){let u=e()*c,d=e()*f,m=e()*6.3;a.strokeStyle="rgba(25,24,22,0.7)",l.strokeStyle="rgba(0,0,0,0.8)",a.lineWidth=l.lineWidth=1.2*(c/512),a.beginPath(),l.beginPath(),a.moveTo(u,d),l.moveTo(u,d);for(let x=0;x<40;x++)m+=(e()-.5)*.9,u+=Math.cos(m)*6*(c/512),d+=Math.sin(m)*6*(c/512),a.lineTo(u,d),l.lineTo(u,d);a.stroke(),l.stroke()}for(let h=0;h<4;h++){let u=e()*c,d=e()*f,m=(.03+e()*.08)*c;Y0(c,f,u,d,m,(x,g)=>{let p=a.createRadialGradient(x,g,0,x,g,m);p.addColorStop(0,"rgba(15,13,10,0.55)"),p.addColorStop(1,"rgba(15,13,10,0)"),a.fillStyle=p,a.beginPath(),a.arc(x,g,m,0,6.3),a.fill();let _=i.rc.createRadialGradient(x,g,0,x,g,m);_.addColorStop(0,"rgba(0,0,0,0.6)"),_.addColorStop(1,"rgba(0,0,0,0)"),i.rc.fillStyle=_,i.rc.beginPath(),i.rc.arc(x,g,m,0,6.3),i.rc.fill()})}return Li(i,{tile:[3,3],normal:2})}function lu(n,t,e,i){let s=Tn(t),r=n,o=n*3,a=Ii(r,o),l=Ci(r,o,r/3,o/3,s),c=Cn(r,o,3,9,5,s,.55),f=Gn(e),h=Gn(i),u=Math.round(o*(.11/6)),d=Math.round(o*(.9/6));Pi(a,(g,p,_,y)=>{let b=o-1-_;if(b<u){let P=b>u-3?18:0;y[0]=h[0]+P+(c[g]-.5)*12,y[1]=h[1]+P+(c[g]-.5)*12,y[2]=h[2]+P+(c[g]-.5)*12,y[3]=.85,y[4]=.55;return}let L=(c[g]-.5)*22,R=bn(1-(b-u)/d),w=R*R*(.4+c[g]*.6);y[0]=f[0]+L-w*60,y[1]=f[1]+L-w*62,y[2]=f[2]+L-w*66,y[3]=.5+l[g]*.06,y[4]=.78+w*.15});let{c:m,rc:x}=a;for(let g=0;g<2;g++){let p=s()*r,_=o*(.35+s()*.25),y=r*(.1+s()*.12);for(let b=0;b<5;b++){let L=p+(s()-.5)*y,R=o*(.04+s()*.2),w=m.createLinearGradient(L,_,L,_+R);w.addColorStop(0,"rgba(100,72,38,0.22)"),w.addColorStop(1,"rgba(100,72,38,0)"),m.fillStyle=w,m.fillRect(L,_,1+s()*2.5,R)}}ks(a,3,s,"105,78,40",.16,.7);for(let g=0;g<14;g++){let p=s()*r,_=o-u-s()*o*.12;m.fillStyle=`rgba(30,28,26,${.06+s()*.14})`,m.save(),m.translate(p,_),m.rotate((s()-.5)*.5),m.fillRect(0,0,2+s()*r*.05,.8+s()*1.5),m.restore()}for(let g=0;g<5;g++){let p=s()*r,_=o*(.6+s()*.35),y=1+s()*3*(r/512);m.fillStyle="rgba(160,150,135,0.7)",m.beginPath(),m.arc(p,_,y,0,6.3),m.fill(),a.hc.fillStyle="rgba(0,0,0,0.6)",a.hc.beginPath(),a.hc.arc(p,_,y,0,6.3),a.hc.fill()}return x.globalAlpha=1,Li(a,{tile:[2,6],normal:1.6})}function Vx(n,t){let e=Tn(t),i=Ii(n,n),s=Cn(n,n,6,6,4,e),r=kr(n,n,e,2),o=n/4,a=Gn(14211795),l=[];for(let d=0;d<16;d++)l.push(e());Pi(i,(d,m,x,g)=>{let p=m%o/o,_=x%o/o,y=Math.min(p,_,1-p,1-_),b=y<.035,L=l[Math.floor(x/o)*4+Math.floor(m/o)],R=bn((r[d]-.45)*2);if(b){let T=120-R*60+(s[d]-.5)*30;g[0]=T,g[1]=T*.95,g[2]=T*.85,g[3]=.2,g[4]=.9;return}let w=(s[d]-.5)*10-L*10-R*35;g[0]=a[0]+w,g[1]=a[1]+w,g[2]=a[2]+w-R*8;let P=bn(y*12);g[3]=.35+P*.4,g[4]=.12+R*.4});let{c,hc:f}=i,h=Math.floor(e()*4)*o,u=Math.floor(e()*4)*o;c.strokeStyle="rgba(40,40,36,0.8)",f.strokeStyle="rgba(0,0,0,1)",c.lineWidth=f.lineWidth=1;for(let d of[c,f])d.beginPath(),d.moveTo(h+o*.1,u+o*.2),d.lineTo(h+o*.45,u+o*.55),d.lineTo(h+o*.6,u+o*.5),d.lineTo(h+o*.92,u+o*.85),d.stroke();return Li(i,{tile:[.6,.6],normal:4})}function Wx(n,t){let e=Tn(t),i=Ii(n,n),s=Cn(n,n,24,24,3,e,.6),r=Ci(n,n,n/1.5,n/1.5,e),o=Cn(n,n,4,4,3,e),a=n/4,l=-1,c=[];for(let f=0;f<16;f++)c.push(e());return Pi(i,(f,h,u,d)=>{let m=Math.floor(u/a)*4+Math.floor(h/a),x=h%a/a,g=u%a/a;if(Math.min(x,g,1-x,1-g)<.018){d[0]=168,d[1]=168,d[2]=162,d[3]=1,d[4]=.55;return}if(m===l){let y=14+s[f]*18;d[0]=y,d[1]=y,d[2]=y,d[3]=0,d[4]=1;return}let _=172-c[m]*16+(s[f]-.5)*28-(r[f]>.88?40:0)-bn((o[f]-.5)*2)*20;d[0]=_,d[1]=_*.985,d[2]=_*.94,d[3]=.6+s[f]*.2-(r[f]>.88?.2:0),d[4]=1}),ks(i,4,e,"120,85,40",.12,.8),Li(i,{tile:[2.4,2.4],normal:2.5})}function Xx(n,t){let e=Tn(t),i=Ii(n,n),s=Cn(n,n,10,10,4,e,.6),r=Ci(n,n,n/2,n/2,e),o=kr(n,n,e,2),a=Gn(11053983),l=n/4,c=n/8;return Pi(i,(f,h,u,d)=>{let m=Math.floor(u/c),g=(h+(m%2?l/2:0))%n%l/l,p=u%c/c,_=g<.02||g>.98||p<.04||p>.96,y=bn((o[f]-.5)*2),b=(s[f]-.5)*22-(r[f]>.85?20:0)-y*30;d[0]=a[0]+b,d[1]=a[1]+b,d[2]=a[2]+b,_&&(d[0]*=.8,d[1]*=.8,d[2]*=.8),d[3]=_?.2:.6+s[f]*.2-(r[f]>.85?.25:0),d[4]=.65+y*.2}),ks(i,2,e,"90,70,40",.14),Li(i,{tile:[1.6,1.6],normal:3})}function Yx(n,t,e=12894390){let i=Tn(t),s=Ii(n,n),r=Cn(n,n,5,5,5,i,.55),o=Ci(n,n,n/3,n/3,i),a=Gn(e);return Pi(s,(l,c,f,h)=>{let u=(r[l]-.5)*20;h[0]=a[0]+u,h[1]=a[1]+u,h[2]=a[2]+u,h[3]=.5+o[l]*.15,h[4]=.92}),ks(s,2,i,"115,85,45",.1,.35),Li(s,{tile:[3,3],normal:1.2})}var Co={};function qx(n="high"){if(Co[n])return Co[n];let t=n==="low",e=t?256:512,i={storeTile:()=>Fx(e,11),linoleum:()=>Bx(e,23),woodFloor:()=>zx(e,37),carpet:()=>Hx(t?256:384,41),concrete:()=>Gx(e,53),drywall:()=>lu(t?192:384,61,11843754,3881527),drywallWarm:()=>lu(t?192:384,67,11773324,13814974),tileWall:()=>Vx(e,71),ceilingTile:()=>Wx(e,83),blockWall:()=>Xx(e,89),plaster:()=>Yx(t?256:384,97)},s={quality:n,surfaceFor:(o,a,l)=>Z0(o,a,l,n)},r={};for(let o of Object.keys(i))Object.defineProperty(s,o,{enumerable:!0,get:()=>r[o]||(r[o]=i[o]())});return s.names=Object.keys(i),s.all=()=>{for(let o of s.names)s[o];return s},Co[n]=s,s}var $x={supermarket:"storeTile",convenience:"storeTile",gas:"storeTile",pharmacy:"storeTile",clinic:"linoleum",hospital:"linoleum",hardware:"concrete",outdoor:"woodFloor",fire:"concrete",house:"woodFloor"},Zx={supermarket:"drywall",convenience:"drywall",gas:"blockWall",pharmacy:"drywall",clinic:"drywall",hospital:"drywall",hardware:"blockWall",outdoor:"drywallWarm",fire:"blockWall",house:"drywallWarm"},Kx={supermarket:"ceilingTile",convenience:"ceilingTile",gas:"ceilingTile",pharmacy:"ceilingTile",clinic:"ceilingTile",hospital:"ceilingTile",hardware:"concrete",outdoor:"plaster",fire:"plaster",house:"plaster"};function Z0(n,t,e,i){let s=i||(Co.high?"high":Co.low?"low":"high"),r=qx(s);return e==="bathroom"&&t==="wall"?r.tileWall:e==="bathroom"&&t==="floor"?r.linoleum:e==="garage"?t==="ceiling"?r.plaster:t==="wall"?r.blockWall:r.concrete:(e==="bedroom"||e==="second bedroom")&&t==="floor"?r.carpet:r[(t==="floor"?$x:t==="wall"?Zx:Kx)[n]||(t==="floor"?"storeTile":t==="wall"?"drywall":"ceilingTile")]}function Io(n){n.updateMatrixWorld(!0);let t=n.geometry,e=t.attributes.position,i=t.attributes.normal,s=t.attributes.uv;if(!e||!i||!s)return n;let r=new N,o=new N,a=new Sn;n.matrixWorld.decompose(new N,a,new N);for(let l=0;l<e.count;l++){r.fromBufferAttribute(e,l).applyMatrix4(n.matrixWorld),o.fromBufferAttribute(i,l).applyQuaternion(a);let c=Math.abs(o.x),f=Math.abs(o.y),h=Math.abs(o.z);f>=c&&f>=h?s.setXY(l,r.x,-r.z):c>=h?s.setXY(l,o.x>0?-r.z:r.z,r.y):s.setXY(l,o.z>0?r.x:-r.x,r.y)}return s.needsUpdate=!0,n}function K0(){try{let n=new URLSearchParams(location.search).get("q");if(n==="low"||n==="high")return n}catch{}try{let n=typeof matchMedia=="function"&&matchMedia("(pointer: coarse)").matches,t=/Android|iPhone|iPad|iPod|Mobile|Silk/i.test(navigator.userAgent||"");if(n||t||(navigator.deviceMemory||8)<=2)return"low";let e="",s=document.createElement("canvas").getContext("webgl");if(s){let o=s.getExtension("WEBGL_debug_renderer_info");e=o?String(s.getParameter(o.UNMASKED_RENDERER_WEBGL)):"",s.getExtension("WEBGL_lose_context")?.loseContext()}if(/swiftshader|llvmpipe|softpipe|software|mali|adreno|powervr|videocore/i.test(e)||(window.devicePixelRatio||1)<1.3&&/intel/i.test(e)&&!/iris|arc|uhd graphics 7/i.test(e)&&(navigator.hardwareConcurrency||8)<=4)return"low"}catch{}return"high"}var on={};function Jx(){if(on.cookie)return on.cookie;let n=256,t=Qn(n),e=t.getContext("2d");e.fillStyle="#000",e.fillRect(0,0,n,n);let i=n/2,s=e.createRadialGradient(i,i,0,i,i,i);s.addColorStop(0,"rgba(255,250,240,1)"),s.addColorStop(.12,"rgba(255,246,228,1)"),s.addColorStop(.22,"rgba(225,214,195,1)"),s.addColorStop(.3,"rgba(160,150,135,1)"),s.addColorStop(.38,"rgba(190,180,160,1)"),s.addColorStop(.46,"rgba(110,104,92,1)"),s.addColorStop(.75,"rgba(70,66,58,1)"),s.addColorStop(.95,"rgba(18,17,15,1)"),s.addColorStop(1,"rgba(0,0,0,1)"),e.fillStyle=s,e.beginPath(),e.arc(i,i,i,0,6.3),e.fill();let r=Tn(5);for(let a=0;a<24;a++)e.fillStyle=`rgba(0,0,0,${.015+r()*.025})`,e.beginPath(),e.arc(i+(r()-.5)*i,i+(r()-.5)*i,3+r()*10,0,6.3),e.fill();let o=new On(t);return o.colorSpace=$e,on.cookie=o,o}function cu(n="255,255,255"){let t=`dot${n}`;if(on[t])return on[t];let e=64,i=Qn(e),s=i.getContext("2d"),r=s.createRadialGradient(e/2,e/2,0,e/2,e/2,e/2);r.addColorStop(0,`rgba(${n},1)`),r.addColorStop(.25,`rgba(${n},0.45)`),r.addColorStop(1,`rgba(${n},0)`),s.fillStyle=r,s.fillRect(0,0,e,e);let o=new On(i);return o.colorSpace=$e,on[t]=o,o}function W0(){if(on.prism)return on.prism;let n=128,t=Qn(n,n/2),e=t.getContext("2d");e.fillStyle="#d8dde0",e.fillRect(0,0,n,n/2),e.fillStyle="rgba(0,0,0,0.12)";for(let r=0;r<n;r+=4)for(let o=r/4%2?2:0;o<n/2;o+=4)e.fillRect(r,o,2,2);let i=Tn(3);for(let r=0;r<14;r++)e.fillStyle=`rgba(30,25,20,${.2+i()*.5})`,e.fillRect(i()*n,n/2-6-i()*20,2+i()*3,1+i()*2);let s=new On(t);return s.colorSpace=$e,on.prism=s,s}function jx(){if(on.halo)return on.halo;let n=128,t=128,e=Qn(n,t),i=e.getContext("2d"),s=i.createImageData(n,t);for(let o=0;o<t;o++)for(let a=0;a<n;a++){let l=Math.max(0,Math.abs(a/n-.5)-.24)/.26,c=Math.max(0,Math.abs(o/t-.52)-.3)/.2,f=Math.min(1,Math.hypot(l,c)),u=Math.abs(a/n-.5)<.24&&Math.abs(o/t-.52)<.3?.25:(1-f)**2.2*.8,d=(o*n+a)*4;s.data[d]=s.data[d+1]=s.data[d+2]=255,s.data[d+3]=u*255}i.putImageData(s,0,0);let r=new On(e);return on.halo=r,r}function fu(){if(on.exit)return on.exit;let n=Qn(256,128),t=n.getContext("2d");t.fillStyle="#0b120c",t.fillRect(0,0,256,128),t.fillStyle="#5dff7e",t.font='bold 74px "Arial Black", Arial, sans-serif',t.textAlign="center",t.textBaseline="middle",t.fillText("EXIT",128,58),t.beginPath(),t.moveTo(26,104),t.lineTo(44,94),t.lineTo(44,114),t.closePath(),t.moveTo(230,104),t.lineTo(212,94),t.lineTo(212,114),t.closePath(),t.fill(),t.fillRect(48,101,160,6);let e=new On(n);return e.colorSpace=$e,on.exit=e,e}function X0(n,t){let e=`decal-${n}-${t}`;if(on[e])return on[e];let i=256,s=Qn(i),r=s.getContext("2d"),o=Tn(100+t*31+n.length*7),a=(c,f,h,u)=>{let d=Cn(i,i,4,4,5,o,.55),m=r.createImageData(i,i);for(let x=0;x<i;x++)for(let g=0;g<i;g++){let p=x*i+g,_=Math.hypot(g-i/2,x-i/2)/(i/2),y=bn((d[p]-.35-_*u)*3)*h,b=p*4;m.data[b]=f[0]+(d[p]-.5)*c,m.data[b+1]=f[1]+(d[p]-.5)*c,m.data[b+2]=f[2]+(d[p]-.5)*c,m.data[b+3]=y*255}r.putImageData(m,0,0)};if(n==="dirt")a(60,[62,50,36],.85,.55);else if(n==="water")a(20,[18,20,22],.9,.5);else if(n==="snow"){a(30,[228,233,238],1,.45),r.globalCompositeOperation="source-atop";for(let c=0;c<300;c++)r.fillStyle=`rgba(255,255,255,${o()*.5})`,r.fillRect(o()*i,o()*i,1,1);r.globalCompositeOperation="source-over"}else if(n==="paper")for(let c=0;c<7;c++){r.save(),r.translate(i*(.2+o()*.6),i*(.2+o()*.6)),r.rotate(o()*6.3);let f=38+o()*26,h=f*1.3,u=200+o()*40;r.fillStyle=`rgb(${u},${u-4},${u-14})`,r.fillRect(-f/2,-h/2,f,h),r.fillStyle="rgba(40,40,40,0.5)";for(let d=0;d<9;d++)r.fillRect(-f/2+5,-h/2+8+d*6,(f-10)*(.5+o()*.5),1.5);r.fillStyle="rgba(80,60,30,0.25)",r.beginPath(),r.arc((o()-.5)*f,(o()-.5)*h,8+o()*10,0,6.3),r.fill(),r.fillStyle="rgba(40,30,20,0.18)",r.fillRect(-f/4,-h/6,f/2,h/3),r.restore()}else if(n==="leaves")for(let c=0;c<46;c++){r.save();let f=o()**.7,h=o()*6.3;r.translate(i/2+Math.cos(h)*f*i*.42,i/2+Math.sin(h)*f*i*.42),r.rotate(o()*6.3);let u=8+o()*12,d=[[120,70,30],[150,95,35],[90,60,30],[110,85,40]][Math.floor(o()*4)];r.fillStyle=`rgb(${d[0]},${d[1]},${d[2]})`,r.beginPath(),r.ellipse(0,0,u,u*.45,0,0,6.3),r.fill(),r.strokeStyle="rgba(50,30,15,0.7)",r.lineWidth=1,r.beginPath(),r.moveTo(-u,0),r.lineTo(u,0),r.stroke(),r.restore()}else if(n==="glass")for(let c=0;c<70;c++){let f=o()**1.3,h=o()*6.3,u=i/2+Math.cos(h)*f*i*.45,d=i/2+Math.sin(h)*f*i*.45,m=(1-f)*10+2+o()*4;r.fillStyle=`rgba(200,220,225,${.25+o()*.35})`,r.strokeStyle="rgba(235,245,250,0.8)",r.lineWidth=.8,r.beginPath(),r.moveTo(u+(o()-.5)*m*2,d+(o()-.5)*m*2),r.lineTo(u+(o()-.5)*m*2,d+(o()-.5)*m*2),r.lineTo(u+(o()-.5)*m*2,d+(o()-.5)*m*2),r.closePath(),r.fill(),r.stroke()}else if(n==="grime"){let c=r.createLinearGradient(0,i,0,0);c.addColorStop(0,"rgba(20,16,12,0.75)"),c.addColorStop(.35,"rgba(25,20,15,0.35)"),c.addColorStop(1,"rgba(25,20,15,0)"),r.fillStyle=c,r.fillRect(0,0,i,i);let f=Cn(i,i,6,2,4,o),h=r.getImageData(0,0,i,i);for(let u=0;u<i*i;u++)h.data[u*4+3]*=.55+f[u]*.9;r.putImageData(h,0,0)}else if(n==="pool"){let c=r.createRadialGradient(i/2,i/2,0,i/2,i/2,i/2);c.addColorStop(0,"rgba(255,255,255,0.9)"),c.addColorStop(.4,"rgba(255,255,255,0.35)"),c.addColorStop(1,"rgba(255,255,255,0)"),r.fillStyle=c,r.fillRect(0,0,i,i)}let l=new On(s);return l.colorSpace=$e,n==="grime"&&(l.wrapS=qi),on[e]=l,l}var cl={quarantine:[.43,.56],closed:[.22,.28],mask:[.43,.56],evac:[.22,.28],missing:[.22,.28],note:[.5,.36],poster:[.6,.9],staff:[.3,.12]};function Qx(n,t){let e=`notice-${n}-${t}`;if(on[e])return on[e];let[i,s]=cl[n]||cl.closed,r=256,o=Math.round(r*s/i),a=Qn(r,o),l=a.getContext("2d"),c=Tn(7+t*13+n.length*101),f="Arial, Helvetica, sans-serif",h='"Arial Black", Arial, sans-serif',u='"Segoe Print", "Bradley Hand", "Comic Sans MS", cursive',d=p=>{l.fillStyle=p,l.fillRect(0,0,r,o)},m=(p,_,y,b="#151515")=>{l.font=y,l.fillStyle=b,l.textAlign="center",l.textBaseline="alphabetic";let L=parseInt(y,10);for(;l.measureText(p).width>r*.88&&L>6;)L-=1,l.font=y.replace(/\d+px/,`${L}px`);l.fillText(p,r/2,_)},x=(p,_,y)=>{l.fillStyle="rgba(30,30,30,0.55)";for(let b=0;b<_;b++)l.fillRect(r*.1,p+b*y,r*(.6+c()*.2),2)};if(n==="quarantine"){d("#e6d64a"),l.fillStyle="#141414",l.fillRect(0,0,r,64),m("QUARANTINE",46,`bold 40px ${h}`,"#e6d64a"),m("DO NOT ENTER",110,`bold 34px ${h}`,"#b01d14"),l.strokeStyle="#141414",l.lineWidth=7;for(let p=0;p<3;p++){let _=p/3*Math.PI*2-Math.PI/2;l.beginPath(),l.arc(r/2+Math.cos(_)*22,190+Math.sin(_)*22,24,0,6.3),l.stroke()}l.beginPath(),l.arc(r/2,190,9,0,6.3),l.stroke(),m("PNEUMONIC PLAGUE EXPOSURE SITE",262,`bold 15px ${f}`),m("By order of Multnomah County Health",286,`14px ${f}`),m("Entry is prohibited until cleared.",304,`14px ${f}`)}else if(n==="closed")d("#efece2"),m("CLOSED",52,`bold 42px ${h}`,"#121212"),m("BY ORDER OF",84,`bold 18px ${f}`),m("WASHINGTON COUNTY HEALTH",108,`bold 17px ${f}`),l.strokeStyle="#2a3c6a",l.lineWidth=3,l.beginPath(),l.arc(r/2,170,34,0,6.3),l.stroke(),l.beginPath(),l.arc(r/2,170,26,0,6.3),l.stroke(),m("PUBLIC HEALTH",175,`bold 10px ${f}`,"#2a3c6a"),x(222,6,13),m("Sep 19, 2026",o-18,`italic 13px ${f}`);else if(n==="mask")d("#f1efe8"),l.fillStyle="#b3241a",l.fillRect(0,0,r,78),m("PNEUMONIC PLAGUE",34,`bold 26px ${h}`,"#fff"),m("WEAR A MASK",66,`bold 28px ${h}`,"#fff"),l.fillStyle="#d9cbb5",l.beginPath(),l.arc(r/2,140,40,0,6.3),l.fill(),l.fillStyle="#9fc5d8",l.fillRect(r/2-34,138,68,30),l.strokeStyle="#555",l.lineWidth=2,l.strokeRect(r/2-34,138,68,30),["Cover every cough","Stay 6 feet apart","Fever or cough? Stay home","Call 211 for help"].forEach((_,y)=>m(`\u2022 ${_}`,212+y*22,`bold 15px ${f}`,"#1a1a1a")),m("Oregon Health Authority",o-14,`11px ${f}`,"#444");else if(n==="evac")d("#f4f1e6"),m("EVACUATION",40,`bold 28px ${h}`,"#14306b"),m("NOTICE",70,`bold 24px ${h}`,"#14306b"),["Buses leave Pioneer Sq.","Sept 14, 8:00 AM","Bring ID, water, 1 bag.","No pets on the bus.","Shelter: Expo Center"].forEach((_,y)=>m(_,112+y*26,`bold 16px ${f}`)),x(250,5,12);else if(n==="missing")d("#eeeae0"),m("HAVE YOU SEEN US?",34,`bold 21px ${h}`,"#202020"),l.fillStyle="#8b8d8e",l.fillRect(r*.2,48,r*.6,120),l.fillStyle="rgba(255,255,255,0.25)",l.fillRect(r*.2,48,r*.6,40),l.fillStyle="rgba(40,40,40,0.4)",l.beginPath(),l.arc(r*.42,120,18,0,6.3),l.fill(),l.beginPath(),l.arc(r*.58,128,14,0,6.3),l.fill(),["Went to Expo Center","shelter. Oct 2.","Maria + kids. Love you."].forEach((_,y)=>m(_,200+y*24,`20px ${u}`,"#1b2a6b"));else if(n==="note"){d("#a8875a");let p=Cn(r,o,4,3,3,c),_=l.getImageData(0,0,r,o);for(let R=0;R<r*o;R++){let w=(p[R]-.5)*30;_.data[R*4]+=w,_.data[R*4+1]+=w,_.data[R*4+2]+=w}l.putImageData(_,0,0);let y=[["NO MEDS","LEFT"],["DONT GO","IN BACK"],["TOOK WATER","SORRY"],["SICK INSIDE","STAY OUT"]],[b,L]=y[t%y.length];l.save(),l.translate(r/2,o/2),l.rotate((c()-.5)*.12),l.font=`bold 46px ${u}`,l.fillStyle="#121212",l.textAlign="center",l.fillText(b,0,-10),l.fillText(L,0,46),l.restore()}else if(n==="poster"){let p=["#2e4f78","#7a2e2a","#2f5a45"][t%3];d(p),l.fillStyle="rgba(255,255,255,0.12)";for(let _=0;_<6;_++)l.beginPath(),l.arc(c()*r,c()*o,30+c()*60,0,6.3),l.fill();m("WINTER",90,`bold 50px ${h}`,"#f6e9c9"),m("SAVINGS",145,`bold 46px ${h}`,"#f6e9c9"),l.fillStyle="#f6c63c",l.beginPath(),l.arc(r/2,240,58,0,6.3),l.fill(),m("20%",248,`bold 40px ${h}`,"#1a1a1a"),m("OFF",276,`bold 20px ${h}`,"#1a1a1a"),m("Ends Sept 30",o-30,`bold 18px ${f}`,"#f6e9c9")}else n==="staff"&&(d("#1d2a33"),m("STAFF ONLY",o*.66,`bold 34px ${h}`,"#e9eef0"));l.fillStyle=`rgba(160,130,60,${.06+c()*.08})`,l.fillRect(0,0,r,o);for(let p=0;p<3;p++){let _=l.createRadialGradient(c()*r,c()*o,2,c()*r,c()*o,40+c()*60);_.addColorStop(0,"rgba(110,80,30,0.18)"),_.addColorStop(1,"rgba(110,80,30,0)"),l.fillStyle=_,l.fillRect(0,0,r,o)}if(l.fillStyle="rgba(0,0,0,0.06)",l.fillRect(0,o/2-1,r,2),n!=="staff"&&n!=="note"){l.fillStyle="rgba(225,215,170,0.75)";for(let[p,_]of[[8,4],[r-40,4]])l.fillRect(p,_,32,12);l.clearRect(0,0,0,0),l.globalCompositeOperation="destination-out",l.beginPath(),l.moveTo(r,o),l.lineTo(r-20-c()*30,o),l.lineTo(r-6,o-10-c()*14),l.lineTo(r,o-30-c()*20),l.closePath(),l.fill(),l.globalCompositeOperation="source-over"}let g=new On(a);return g.colorSpace=$e,g.anisotropy=4,on[e]=g,g}var ty=`
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
}`,ey=`
varying float vLight;
void main() {
  float r = length(gl_PointCoord - 0.5);
  float a = (1.0 - smoothstep(0.0, 0.5, r)) * vLight;
  gl_FragColor = vec4(vec3(1.0, 0.96, 0.88) * a, a);
}`,ny=`
attribute vec2 aSlice; // x: 1 for a cross-section slice, y: its distance along the shaft (0..1)
varying float vT; varying float vS; varying float vR; varying vec3 vW; varying vec3 vN;
void main() {
  vT = mix(uv.y, aSlice.y, aSlice.x); vS = uv.x;
  vR = aSlice.x > 0.5 ? uv.y : 0.5; // second edge fade for slices
  vec4 w = modelMatrix * vec4(position, 1.0);
  vW = w.xyz;
  vN = normalize(mat3(modelMatrix) * normal);
  gl_Position = projectionMatrix * viewMatrix * w;
}`,iy=`
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
}`;function sy(n,t,e){let i=[[-n/2,0],[n/2,0],[n/2,t],[-n/2,t]],s=n*1.9,r=t*.18,o=[[-s/2,0],[s/2,0],[s/2,r],[-s/2,r]],a=[],l=[],c=[],f=0,h=(g,p,_,y)=>{a.push(...g,...p,..._,...y),l.push(0,0,1,0,1,1,0,1),c.push(f,f+1,f+2,f,f+2,f+3),f+=4};h([i[0][0],i[0][1],0],[i[3][0],i[3][1],0],[o[3][0],o[3][1],-e],[o[0][0],o[0][1],-e]),h([i[1][0],i[1][1],0],[i[2][0],i[2][1],0],[o[2][0],o[2][1],-e],[o[1][0],o[1][1],-e]),h([i[3][0],i[3][1],0],[i[2][0],i[2][1],0],[o[2][0],o[2][1],-e],[o[3][0],o[3][1],-e]),h([0,0,0],[0,t,0],[0,r,-e],[0,0,-e]),h([-n/2,t*.5,0],[n/2,t*.5,0],[s/2,r*.5,-e],[-s/2,r*.5,-e]);let u=new De,d=f;for(let g of[.12,.3,.5,.7]){let p=(n+(s-n)*g)/2,_=m(g);h([-p,0,-e*g],[p,0,-e*g],[p,_,-e*g],[-p,_,-e*g])}function m(g){return t+(r-t)*g}let x=new Float32Array(f*2);for(let g=d;g<f;g++){let p=[.12,.3,.5,.7][Math.floor((g-d)/4)];x[g*2]=1,x[g*2+1]=p}return u.setAttribute("aSlice",new Ze(x,2)),u.setAttribute("position",new Ze(new Float32Array(a),3)),u.setAttribute("uv",new Ze(new Float32Array(l),2)),u.setIndex(c),u.computeVertexNormals(),u}function hu(n,t,e,i={}){let s=i.quality||K0(),r=s==="high",o=!!i.dark,a=!!i.night,l=o||a,c=new Ht;c.name="look3d",t.add(c);let f=[],h=B=>(f.push(B),B);n.toneMapping=C0,n.toneMappingExposure=l?1.25:1,n.outputColorSpace=$e,n.shadowMap.enabled=!0,n.shadowMap.type=r?R0:sl;let u=o?263430:a?329483:3817800;t.background=new jt(u),t.fog=new Ar(o?197637:a?329482:4870746,o?a?.085:.065:a?.07:.035);let d=null;if(i.env??r)try{let B=new Rr,rt=new _n({side:yn,vertexColors:!0}),A=new Ae(10,4,10),dt=[],X=A.attributes.position,pt=new jt(l?1382428:6975090),at=new jt(l?789258:4208943),Lt=new jt(l?658189:9080466);for(let S=0;S<X.count;S++){let V=X.getY(S),it=V>1?Lt:V<-1?at:pt;dt.push(it.r,it.g,it.b)}A.setAttribute("color",new Ze(new Float32Array(dt),3)),B.add(new Xt(A,rt));let mt=new Xt(new Be(2,2.6),new _n({color:new jt(a?2898514:14674165).multiplyScalar(a?1:3),side:we}));mt.position.set(0,-.6,4.9),B.add(mt);let I=new wr(n);d=I.fromScene(B,.02),I.dispose(),A.dispose(),rt.dispose(),mt.geometry.dispose(),mt.material.dispose(),t.environment=d.texture,t.environmentIntensity=o?.35:a?.3:.6}catch{d=null}let m=null;i.fill!==!1&&(m=o?new Or(8030880,1906707,a?.55:.95):a?new Or(6123404,1380878,.6):new Or(14081768,9209726,1.5),c.add(m));let x=null,g=!1,p=1,_=70,y=new rn;if(i.flashlight!==!1){let B=new So(16773596,0,26,.48,.55,2);B.position.set(.22,-.2,.05),y.position.set(.04,-.22,-4),e.add(B,y),B.target=y,e.parent!==t&&!e.parent&&t.add(e),B.castShadow=!0,B.shadow.mapSize.set(r?1024:512,r?1024:512),B.shadow.camera.near=.15,B.shadow.camera.far=24,B.shadow.bias=-4e-4,B.shadow.normalBias=.03,B.shadow.radius=r?3:1,B.map=Jx(),i.flashShadow===!1&&(B.castShadow=!1),x=B,B.setOn=rt=>{g=!!rt},B.isOn=()=>g,B.setPower=rt=>{p=bn(rt)}}let b=i.maxLights??(r?6:3),L=0,R=()=>L<b?(L++,!0):!1,w=[],P=h(new Ke({color:10330789,roughness:.55,metalness:.6})),T=h(new Ke({map:W0(),color:10132632,roughness:.4}));function M(B,rt,A,dt,X,pt){let at=new Xt(new Be(X*2,X*2),h(new _n({map:X0("pool",0),color:dt,transparent:!0,opacity:pt,depthWrite:!1,blending:Yi,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4})));return at.rotation.x=-Math.PI/2,at.position.set(B,rt,A),c.add(at),at}function U(B,rt,A,dt="dead"){let X=new Ht;X.position.set(B,rt,A);let pt=Ro(B,A);if(dt==="emergency"){let at=new Xt(new Ae(.34,.12,.2),P);at.position.y=-.06;let Lt=h(new Ke({color:2755076,emissive:16734756,emissiveIntensity:2.4,roughness:.3})),mt=new Xt(new ji(.06,12,8),Lt);mt.position.y=-.17;let I=new Xt(new Ji(.075,.075,.12,8,1,!0),h(new Ke({color:2236962,wireframe:!0})));I.position.y=-.17;let S=new po(h(new Cr({map:cu("255,110,50"),blending:Yi,depthWrite:!1,transparent:!0,opacity:.6})));S.scale.set(.7,.7,1),S.position.y=-.17,X.add(at,mt,I,S);let V=null;R()?(V=new Eo(16738864,2.4,9,2),V.position.y=-.3,X.add(V)):M(B,.012,A,16738864,2.4,.18),w.push({light:V,mats:[Lt],glow:S,base:V?V.intensity:0,baseE:2.4,state:dt,t:pt*10,seed:pt})}else{let at=new Xt(new Ae(.62,.08,1.22),P);at.position.y=-.04;let Lt=dt==="flicker",mt=Lt?h(new Ke({map:W0(),color:13160146,emissive:15397631,emissiveMap:W0(),emissiveIntensity:2.2,roughness:.4})):T,I=new Xt(new Be(.56,1.16),mt);if(I.rotation.x=Math.PI/2,I.position.y=-.082,X.add(at,I),!Lt&&pt<.3){X.rotation.x=(pt<.15?1:-1)*(.45+pt),X.position.y-=.35;let S=new Xt(new Ji(.004,.004,.5,4),P);S.position.set(.25,.2,0),X.add(S)}if(Lt){let S=null;R()?(S=new Eo(14674431,14,13,2),S.position.y=-.35,X.add(S)):M(B,.012,A,14674431,3,.3),w.push({light:S,mats:[mt],base:S?S.intensity:0,baseE:2.2,state:dt,t:pt*10,seed:pt,off:0})}}return c.add(X),X}function W(B,rt,A,dt=0){let X=new Ht,pt=h(new Ke({map:fu(),emissive:16777215,emissiveMap:fu(),emissiveIntensity:1.6,roughness:.5})),at=new Xt(new Ae(.38,.2,.06),[P,P,P,P,pt,pt]),Lt=new po(h(new Cr({map:cu("80,255,120"),blending:Yi,depthWrite:!1,transparent:!0,opacity:.55})));return Lt.scale.set(1.1,.7,1),X.add(at,Lt),X.position.set(B,rt,A),X.rotation.y=dt,c.add(X),X}let F=[];function H(B,rt,A=a,dt={}){let X=dt.width??1.8,pt=dt.height??2.2,at=dt.length??5.5,Lt=dt.rotY??0,mt=new Ht;mt.position.set(B,0,rt),mt.rotation.y=Lt;let I=A?8492987:14477567,S=new So(I,A?6:60,16,.85,1,2);S.position.set(0,pt+.6,1.6);let V=new rn;V.position.set(0,0,-3.5),mt.add(S,V),S.target=V;let it=h(new jn({vertexShader:ny,fragmentShader:iy,transparent:!0,depthWrite:!1,blending:Yi,side:we,uniforms:{uColor:{value:new jt(I)},uAlpha:{value:A?.16:.5},uTime:{value:0}}})),ht=new Xt(sy(X,pt,at),it);ht.position.z=-.05,ht.renderOrder=5,mt.add(ht);let lt=h(new _n({map:jx(),color:I,transparent:!0,opacity:A?.25:.55,blending:Yi,depthWrite:!1,fog:!1,side:we})),Wt=new Xt(new Be(X+2.2,pt+1.6),lt);if(Wt.position.set(0,pt/2+.1,-.12),Wt.renderOrder=4,mt.add(Wt),dt.sky!==!1){let Nt=h(new _n({color:A?2372170:15331576,toneMapped:!1,fog:!1})),zt=new Xt(new Be(X+6,pt+4),Nt);zt.position.set(0,pt/2+1,2.4),zt.rotation.y=Math.PI;let se=h(new _n({color:A?3951200:13226716,fog:!1})),gt=new Xt(new Be(X+6,2.3),se);gt.rotation.x=-Math.PI/2,gt.position.set(0,.005,1.25),mt.add(zt,gt)}return c.add(mt),F.push({x:B,z:rt,w:X,L:at,rotY:Lt,mat:it,night:A}),{group:mt,light:S,shaft:ht}}let ot=[];function j(B,rt){let A=B.min?{minX:B.min.x,maxX:B.max.x,minY:B.min.y,maxY:B.max.y,minZ:B.min.z,maxZ:B.max.z}:B,dt=(A.maxX-A.minX)*(A.maxY-A.minY)*(A.maxZ-A.minZ),X=rt??Math.min(r?700:220,Math.max(80,Math.round(dt*(r?1.6:.6)))),pt=Tn(Math.floor((A.minX+A.maxZ)*100)+7),at=new Float32Array(X*3);for(let S=0;S<at.length;S++)at[S]=pt();let Lt=new De;Lt.setAttribute("seed",new Ze(at,3)),Lt.setAttribute("position",new Ze(new Float32Array(X*3),3)),Lt.boundingSphere=null;let mt=h(new jn({vertexShader:ty,fragmentShader:ey,transparent:!0,depthWrite:!1,blending:Yi,uniforms:{uTime:{value:0},uScale:{value:500},uMin:{value:new N(A.minX,A.minY,A.minZ)},uSize:{value:new N(A.maxX-A.minX,A.maxY-A.minY,A.maxZ-A.minZ)},uFlashPos:{value:new N},uFlashDir:{value:new N(0,0,-1)},uFlashCos:{value:Math.cos(.48)},uFlashOn:{value:0},uShaft:{value:[new Fe(0,0,1,1),new Fe(0,0,1,1)]},uShaftOn:{value:[0,0]}}})),I=new Va(Lt,mt);return I.frustumCulled=!1,I.renderOrder=6,c.add(I),ot.push(mt),I}function ut(B,rt,A,dt=0,X="closed",pt){let at=pt??Math.floor(Ro(B,A)*4),[Lt,mt]=cl[X]||cl.closed,I=h(new Ke({map:Qx(X,at),roughness:.92,alphaTest:.5,side:we,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-2})),S=new Xt(new Be(Lt,mt),I);return S.position.set(B+Math.sin(dt)*.012,rt,A+Math.cos(dt)*.012),S.rotation.set(0,dt,(Ro(A,B)-.5)*.12),S.receiveShadow=!0,c.add(S),S}let tt=0;function Tt(B,rt,A="dirt",dt=1,X=0){let pt=Math.floor(Ro(B*3,rt*5)*3),at=A==="water",Lt=h(new Ke({map:X0(A,pt),transparent:!0,depthWrite:!1,roughness:at?.06:A==="snow"?.85:.95,metalness:at?.2:0,color:at?10133670:16777215,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-4})),mt=new Xt(new Be(dt,dt),Lt);return mt.rotation.set(-Math.PI/2,0,X),tt=(tt+1)%8,mt.position.set(B,.003+tt*8e-4,rt),mt.receiveShadow=!0,mt.renderOrder=1,c.add(mt),mt}let Rt=h(new De);Rt.setAttribute("position",new Ze(new Float32Array([0,0,0,.05,0,-.012,.018,0,.04]),3)),Rt.setAttribute("normal",new Ze(new Float32Array([0,1,0,0,1,0,0,1,0]),3));let Bt=h(new Ke({color:14675698,roughness:.04,metalness:0,transparent:!0,opacity:.55,side:we,envMapIntensity:3}));function oe(B,rt,A=1.2){let dt=new Ht,X=Tn(Math.floor(Ro(B,rt)*1e6)+3),pt=Tt(B,rt,"glass",A,X()*6.3);pt.material.roughness=.05,pt.material.envMapIntensity=3,dt.add(pt);for(let at=0;at<(r?18:8);at++){let Lt=new Xt(Rt,Bt),mt=X()*6.3,I=X()**1.5*A*.45;Lt.position.set(B+Math.cos(mt)*I,.006,rt+Math.sin(mt)*I),Lt.rotation.set((X()-.5)*.3,X()*6.3,(X()-.5)*.3),Lt.scale.setScalar(.6+X()*1.6),dt.add(Lt)}return c.add(dt),dt}function ye(B,rt,A,dt,X=.7){let pt=X0("grime",0),at=h(new _n({map:pt,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-3,color:16777215})),Lt=(mt,I,S,V)=>{let it=new Xt(new Be(S,X),at);it.rotation.set(-Math.PI/2,0,V),it.position.set(mt,.002,I),it.renderOrder=1,c.add(it)};Lt((B+rt)/2,A+X/2,rt-B,0),Lt((B+rt)/2,dt-X/2,rt-B,Math.PI),Lt(B+X/2,(A+dt)/2,dt-A,Math.PI/2),Lt(rt-X/2,(A+dt)/2,dt-A,-Math.PI/2)}let st=0,vt=new N,Vt=new N,St=new N,$t=new Mt,le=1;function Zt(B,rt){if(st+=B,x){let A=p;g&&A<.2&&(Math.random()<B*3&&(le=.2+Math.random()*.6),le+=(1-le)*Math.min(1,B*6),A=(.35+A*3)*le),x.intensity=g?_*Math.max(0,Math.min(1,A)):0}for(let A of w){let dt;if(A.state==="emergency")dt=.88+.08*Math.sin(st*2.1+A.seed*9)+.04*Math.sin(st*31+A.seed*3);else{if(A.t-=B,A.t<=0){let X=Math.random();A.burst>0?(A.burst--,A.off=A.off?0:1,A.t=.03+Math.random()*.09):X<.5?(A.off=0,A.t=.8+Math.random()*3.5):X<.85?(A.burst=3+Math.floor(Math.random()*8),A.t=.05):(A.off=1,A.t=.4+Math.random()*1.6)}dt=A.off?.04:.92+Math.random()*.08}A.light&&(A.light.intensity=A.base*dt);for(let X of A.mats)X.emissiveIntensity=A.baseE*dt;A.glow&&(A.glow.material.opacity=.6*dt)}if(ot.length){e.getWorldPosition(vt),rt&&vt.copy(rt),e.getWorldDirection(Vt),x?x.getWorldPosition(St):St.copy(vt),n.getDrawingBufferSize($t);let A=$t.y/(2*Math.tan(gs.degToRad(e.fov||70)/2));for(let dt of ot){let X=dt.uniforms;X.uTime.value=st,X.uScale.value=A,X.uFlashPos.value.copy(St),X.uFlashDir.value.copy(Vt),X.uFlashOn.value=x?x.intensity/_:0;for(let pt=0;pt<2;pt++){let at=F[pt];at&&Math.abs(at.rotY)<.01?(X.uShaft.value[pt].set(at.x,at.z,at.w/2,at.L),X.uShaftOn.value[pt]=at.night?.25:1):X.uShaftOn.value[pt]=0}}}for(let A of F)A.mat.uniforms.uTime.value=st}function Se(){t.remove(c),x&&e.remove(x,y),c.traverse(B=>{B.geometry&&B.geometry.dispose()});for(let B of f)B.dispose?.();d&&(t.environment===d.texture&&(t.environment=null),d.dispose())}return{quality:s,group:c,fill:m,flashlight:x,update:Zt,dispose:Se,addCeilingLight:U,addExitSign:W,addDoorLight:H,addDust:j,addWallNotice:ut,addDecal:Tt,addBrokenGlass:oe,addRoomShade:ye,setExposure:B=>{n.toneMappingExposure=B},lightsUsed:()=>L}}var pn=new Map,ry=new Map,Eu=new Map;function en(n,t,e){let i=n.get(t);return i===void 0&&(i=e(),n.set(t,i)),i}function Qi(n){let t=n>>>0^2654435769;return()=>{t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Bs(n){let t=2166136261;for(let e=0;e<n.length;e++)t^=n.charCodeAt(e),t=Math.imul(t,16777619);return t>>>0}var qt=(n,t)=>t[Math.floor(n()*t.length)%t.length],At=Math.PI*2,oy='Arial, Helvetica, "Liberation Sans", "DejaVu Sans", sans-serif',bi='"Arial Narrow", "Liberation Sans Narrow", Arial, Helvetica, sans-serif';function Tu(n,t){if(typeof document<"u"){let e=document.createElement("canvas");return e.width=n,e.height=t,e}return typeof OffscreenCanvas<"u"?new OffscreenCanvas(n,t):null}function bt(n,t,e,i,s={}){return en(Eu,n,()=>{let r=Tu(t,e);if(!r)return null;let o=r.getContext("2d");i(o,t,e,Qi(Bs(n)));let a=new On(r);return a.colorSpace=s.data?ii:$e,a.anisotropy=4,s.repeat&&(a.wrapS=a.wrapT=qi,a.repeat.set(s.repeat[0],s.repeat[1])),a})}function kt(n,t,e,i,s,r={}){n.save(),n.font=`${r.italic?"italic ":""}${r.weight||"bold"} ${s}px ${r.font||oy}`,n.fillStyle=r.color||"#111",n.textAlign=r.align||"center",n.textBaseline=r.baseline||"middle",n.translate(e,i),r.rot&&n.rotate(r.rot);let o=n.measureText(t).width,a=r.sx||1;r.maxW&&o*a>r.maxW?n.scale(r.maxW/o,1):a!==1&&n.scale(a,1),r.stroke&&(n.lineWidth=r.strokeW||s*.12,n.strokeStyle=r.stroke,n.lineJoin="round",n.strokeText(t,0,0)),n.fillText(t,0,0),n.restore()}function qe(n,t,e,i,s,r,o,a="rgba(0,0,0,0.55)"){n.fillStyle=a;for(let l=0;l<s;l++){let c=t,f=t+i*(l===s-1?.3+o()*.5:.85+o()*.15);for(;c<f;){let h=Math.min(f-c,r*(.8+o()*3));n.fillRect(c,e+l*r,h,r*.55),c+=h+r*.45}}}function Hr(n,t,e,i,s,r){n.fillStyle="#fff",n.fillRect(t-i*.06,e-s*.06,i*1.12,s*1.3),n.fillStyle="#000";let o=t;for(;o<t+i;){let a=Math.max(1,(r()<.6?1:2+Math.floor(r()*2))*i/95);r()<.55&&n.fillRect(o,e,a,s),o+=a}n.fillRect(t,e,i/95,s*1.08),n.fillRect(t+i-i/95,e,i/95,s*1.08),qe(n,t+i*.1,e+s*1.06,i*.8,1,s*.18,r,"#000")}function wu(n,t,e,i,s,r){n.fillStyle="#fff",n.fillRect(t,e,i,s),n.strokeStyle="#000",n.lineWidth=Math.max(1,i*.012),n.strokeRect(t,e,i,s),kt(n,"Nutrition Facts",t+i*.06,e+s*.08,s*.1,{align:"left",color:"#000",maxW:i*.88,font:bi}),n.fillStyle="#000",n.fillRect(t+i*.05,e+s*.17,i*.9,s*.035);let o=9;for(let a=0;a<o;a++){let l=e+s*(.24+a*.075);qe(n,t+i*.06,l,i*.6,1,s*.05,r,"#000"),qe(n,t+i*.78,l,i*.14,1,s*.05,r,"#000"),n.fillRect(t+i*.05,l+s*.055,i*.9,Math.max(1,s*.006))}n.fillRect(t+i*.05,e+s*.92,i*.9,s*.02)}function ae(n,t,e,i,s=1){for(let r=0;r<260*s;r++){n.fillStyle=i()<.5?`rgba(70,60,45,${.05+i()*.08})`:`rgba(255,255,255,${.04+i()*.06})`;let o=1+i()*2.5;n.fillRect(i()*t,i()*e,o,o)}for(let r=0;r<4*s;r++){let o=i()*t,a=i()*e,l=(.05+i()*.18)*Math.max(t,e),c=n.createRadialGradient(o,a,0,o,a,l);c.addColorStop(0,`rgba(80,66,44,${.05+i()*.08})`),c.addColorStop(1,"rgba(80,66,44,0)"),n.fillStyle=c,n.fillRect(o-l,a-l,l*2,l*2)}for(let r=0;r<3*s;r++){n.strokeStyle=`rgba(255,255,255,${.08+i()*.1})`,n.lineWidth=1,n.beginPath();let o=i()*t,a=i()*e;n.moveTo(o,a),n.lineTo(o+(i()-.5)*t*.3,a+(i()-.5)*e*.2),n.stroke()}}function Me(n,t,e,i,s,r,o=4e3,a=2){n.fillStyle=s,n.fillRect(0,0,t,e);for(let l=0;l<o;l++){let c=(i()-.5)*r;n.fillStyle=c>0?`rgba(255,255,255,${c})`:`rgba(0,0,0,${-c})`,n.fillRect(i()*t,i()*e,a*(.5+i()),a*(.5+i()))}}function Xn(n,t){let e=new jt(n);return t<0?e.multiplyScalar(1+t):e.lerp(new jt(16777215),t),"#"+e.getHexString()}function dl(n,t,e,i,s,r){n.save(),n.translate(e,i);let o=(l,c,f,h)=>{n.fillStyle=h,n.beginPath(),n.arc(l,c,f,0,At),n.fill()},a=(l,c,f,h,u,d)=>{n.fillStyle=d,n.beginPath(),n.ellipse(l,c,f,h,u,0,At),n.fill()};switch(t){case"beans":case"chili":a(0,s*.25,s*.9,s*.35,0,"#f3efe6"),a(0,s*.12,s*.75,s*.28,0,t==="chili"?"#7a1e10":"#9a4a1c");for(let l=0;l<16;l++)a((r()-.5)*s*1.2,s*(.05+r()*.15),s*.13,s*.08,r()*3,t==="chili"?"#5a140c":"#c06a2c");break;case"soup":a(0,s*.3,s*.95,s*.4,0,"#fafafa"),a(0,s*.18,s*.78,s*.26,0,"#e8b850");for(let l=0;l<9;l++)a((r()-.5)*s,s*(.1+r()*.12),s*.12,s*.05,r()*3,r()<.5?"#f6e3b0":"#d9822b");n.strokeStyle="rgba(255,255,255,0.8)",n.lineWidth=s*.06;for(let l=-1;l<=1;l++)n.beginPath(),n.moveTo(l*s*.3,-s*.15),n.bezierCurveTo(l*s*.3+s*.15,-s*.4,l*s*.3-s*.15,-s*.55,l*s*.3,-s*.8),n.stroke();break;case"corn":for(let l=0;l<30;l++)o((r()-.5)*s*1.4,(r()-.5)*s*.9,s*.13,l%3?"#f2c21b":"#e0a812");a(-s*.6,s*.1,s*.5,s*.15,-.6,"#5c9a2c");break;case"peas":for(let l=0;l<26;l++)o((r()-.5)*s*1.4,(r()-.5)*s*.9,s*.14,l%4?"#5aa43a":"#3f8a28");break;case"tomato":case"fruit":case"peach":case"apple":{let l=t==="tomato"?"#d8261c":t==="peach"?"#f39a42":t==="apple"?"#c8221c":"#f2a33a";o(-s*.35,s*.1,s*.5,l),o(s*.4,s*.15,s*.45,t==="fruit"?"#f2d24a":l),a(-s*.5,-s*.1,s*.15,s*.1,-.5,"rgba(255,255,255,0.45)"),a(-s*.3,-s*.42,s*.22,s*.08,-.4,"#3f8a28");break}case"fish":a(0,0,s*.85,s*.35,0,"#7f98ad"),n.fillStyle="#7f98ad",n.beginPath(),n.moveTo(s*.7,0),n.lineTo(s*1.1,-s*.35),n.lineTo(s*1.1,s*.35),n.fill(),o(-s*.55,-s*.05,s*.07,"#111");break;case"grain":n.strokeStyle="#c9a24a",n.lineWidth=s*.06;for(let l=-1;l<=1;l++){n.beginPath(),n.moveTo(l*s*.3,s*.9),n.lineTo(l*s*.15,-s*.6),n.stroke();for(let c=0;c<6;c++)a(l*s*.15-s*.1,-s*.5+c*s*.18,s*.1,s*.05,.6,"#d9b25a"),a(l*s*.15+s*.1,-s*.5+c*s*.18,s*.1,s*.05,-.6,"#d9b25a")}break;case"noodle":a(0,s*.3,s*.9,s*.35,0,"#fff"),n.strokeStyle="#f0d48a",n.lineWidth=s*.06;for(let l=0;l<7;l++){n.beginPath(),n.moveTo(-s*.7,s*(.05+l*.05));for(let c=-.7;c<=.7;c+=.1)n.lineTo(c*s,s*(.05+l*.05)+Math.sin(c*14+l)*s*.05);n.stroke()}a(s*.3,s*.08,s*.15,s*.07,0,"#d9822b"),a(-s*.25,s*.12,s*.1,s*.06,0,"#5aa43a");break;case"chip":for(let l=0;l<7;l++)a((r()-.5)*s*1.3,(r()-.3)*s*.9,s*.38,s*.26,r()*3,l%2?"#f0c24a":"#e6ae32");break;case"meat":for(let l=0;l<4;l++)n.fillStyle=l%2?"#6a2c18":"#7d3a1e",n.save(),n.rotate(-.4+l*.25),n.fillRect(-s*.8,-s*.12+l*s*.05,s*1.6,s*.2),n.restore();break;case"oats":a(0,s*.3,s*.95,s*.4,0,"#2a4f8a"),a(0,s*.18,s*.8,s*.27,0,"#e9dcc0");for(let l=0;l<30;l++)a((r()-.5)*s*1.3,s*(.08+r()*.18),s*.07,s*.04,r()*3,"#cdb98a");ay(n,s*.6,-s*.4,s*.5);break;case"peanut":for(let l=0;l<3;l++)n.save(),n.translate((l-1)*s*.55,l%2*s*.2),n.rotate(.5-l*.4),a(0,-s*.18,s*.22,s*.25,0,"#d4a35c"),a(0,s*.18,s*.24,s*.27,0,"#d4a35c"),n.restore();break;case"cross":n.fillStyle="#d61f26",n.fillRect(-s*.2,-s*.65,s*.4,s*1.3),n.fillRect(-s*.65,-s*.2,s*1.3,s*.4);break;case"wcross":n.fillStyle="#fff",n.fillRect(-s*.2,-s*.65,s*.4,s*1.3),n.fillRect(-s*.65,-s*.2,s*1.3,s*.4);break;case"pill":n.save(),n.rotate(-.5),n.fillStyle="#fff",n.beginPath(),n.roundRect(-s*.7,-s*.25,s*.7,s*.5,[s*.25,0,0,s*.25]),n.fill(),n.fillStyle="#e8572a",n.beginPath(),n.roundRect(0,-s*.25,s*.7,s*.5,[0,s*.25,s*.25,0]),n.fill(),n.restore(),o(s*.5,s*.45,s*.2,"#fff");break;case"drop":n.fillStyle="#3d8fd6",n.beginPath(),n.moveTo(0,-s*.8),n.bezierCurveTo(s*.7,0,s*.6,s*.7,0,s*.7),n.bezierCurveTo(-s*.6,s*.7,-s*.7,0,0,-s*.8),n.fill(),a(-s*.2,s*.2,s*.12,s*.2,.3,"rgba(255,255,255,0.5)");break;case"bolt":n.fillStyle="#f5c518",n.beginPath(),n.moveTo(s*.1,-s*.8),n.lineTo(-s*.45,s*.1),n.lineTo(-s*.05,s*.1),n.lineTo(-s*.2,s*.8),n.lineTo(s*.45,-s*.15),n.lineTo(s*.05,-s*.15),n.closePath(),n.fill();break;case"flame":n.fillStyle="#f08a1c",n.beginPath(),n.moveTo(0,-s*.85),n.bezierCurveTo(s*.7,-s*.1,s*.55,s*.75,0,s*.75),n.bezierCurveTo(-s*.55,s*.75,-s*.6,0,0,-s*.85),n.fill(),n.fillStyle="#ffd34a",n.beginPath(),n.moveTo(0,-s*.2),n.bezierCurveTo(s*.35,s*.2,s*.3,s*.65,0,s*.65),n.bezierCurveTo(-s*.3,s*.65,-s*.3,s*.2,0,-s*.2),n.fill();break;case"paw":a(0,s*.3,s*.42,s*.36,0,"#3b2a1c"),a(-s*.48,-s*.15,s*.16,s*.21,-.3,"#3b2a1c"),a(-s*.17,-s*.45,s*.16,s*.21,-.1,"#3b2a1c"),a(s*.17,-s*.45,s*.16,s*.21,.1,"#3b2a1c"),a(s*.48,-s*.15,s*.16,s*.21,.3,"#3b2a1c");break;case"bug":a(0,0,s*.3,s*.45,0,"#3a2a1a"),n.strokeStyle="#3a2a1a",n.lineWidth=s*.06;for(let l=-1;l<=1;l++)n.beginPath(),n.moveTo(-s*.25,l*s*.2),n.lineTo(-s*.6,l*s*.35),n.moveTo(s*.25,l*s*.2),n.lineTo(s*.6,l*s*.35),n.stroke();n.strokeStyle="#d61f26",n.lineWidth=s*.12,n.beginPath(),n.arc(0,0,s*.8,0,At),n.moveTo(-s*.56,-s*.56),n.lineTo(s*.56,s*.56),n.stroke();break;case"leaf":case"seedling":n.strokeStyle="#3f7a2a",n.lineWidth=s*.08,n.beginPath(),n.moveTo(0,s*.8),n.lineTo(0,-s*.1),n.stroke(),a(-s*.3,-s*.2,s*.35,s*.16,-.5,"#5aa43a"),a(s*.3,-s*.35,s*.35,s*.16,.5,"#6bb84a");break;case"carrot":n.fillStyle="#ee7a1c",n.beginPath(),n.moveTo(-s*.3,-s*.5),n.lineTo(s*.3,-s*.5),n.lineTo(0,s*.9),n.fill(),a(-s*.15,-s*.75,s*.12,s*.3,-.3,"#4c9a2c"),a(s*.15,-s*.75,s*.12,s*.3,.3,"#4c9a2c");break;case"bean":n.strokeStyle="#4c9a2c",n.lineWidth=s*.18,n.lineCap="round";for(let l=-1;l<=1;l++)n.beginPath(),n.moveTo(l*s*.35,-s*.7),n.quadraticCurveTo(l*s*.35+s*.3,0,l*s*.35,s*.7),n.stroke();break;case"sun":o(0,0,s*.45,"#f5b51c"),n.strokeStyle="#f5b51c",n.lineWidth=s*.08;for(let l=0;l<12;l++){let c=l*At/12;n.beginPath(),n.moveTo(Math.cos(c)*s*.58,Math.sin(c)*s*.58),n.lineTo(Math.cos(c)*s*.85,Math.sin(c)*s*.85),n.stroke()}break;case"snow":n.strokeStyle="#fff",n.lineWidth=s*.08;for(let l=0;l<3;l++)n.save(),n.rotate(l*Math.PI/3),n.beginPath(),n.moveTo(0,-s*.8),n.lineTo(0,s*.8),n.moveTo(-s*.2,-s*.6),n.lineTo(0,-s*.4),n.lineTo(s*.2,-s*.6),n.moveTo(-s*.2,s*.6),n.lineTo(0,s*.4),n.lineTo(s*.2,s*.6),n.stroke(),n.restore();break;case"screw":n.fillStyle="#9aa0a6",n.fillRect(-s*.1,-s*.5,s*.2,s*1.2),n.fillRect(-s*.3,-s*.65,s*.6,s*.15),n.strokeStyle="#555",n.lineWidth=s*.05;for(let l=0;l<8;l++)n.beginPath(),n.moveTo(-s*.14,-s*.4+l*s*.13),n.lineTo(s*.14,-s*.34+l*s*.13),n.stroke();break;case"battery":n.fillStyle="#1a1a1a",n.fillRect(-s*.3,-s*.55,s*.6,s*1.3),n.fillStyle="#c98a2a",n.fillRect(-s*.3,-s*.55,s*.6,s*.4),n.fillStyle="#bbb",n.fillRect(-s*.1,-s*.7,s*.2,s*.15);break;case"tooth":n.fillStyle="#fff",n.beginPath(),n.moveTo(-s*.5,-s*.4),n.quadraticCurveTo(0,-s*.7,s*.5,-s*.4),n.lineTo(s*.35,s*.7),n.lineTo(s*.1,s*.1),n.lineTo(-s*.1,s*.1),n.lineTo(-s*.35,s*.7),n.closePath(),n.fill();break;case"bubble":for(let l=0;l<7;l++)n.strokeStyle="rgba(255,255,255,0.9)",n.lineWidth=s*.05,n.beginPath(),n.arc((r()-.5)*s*1.2,(r()-.5)*s*1.2,s*(.1+r()*.25),0,At),n.stroke();break;case"moon":o(0,0,s*.6,"#f2e6a0"),o(s*.28,-s*.15,s*.5,"rgba(20,30,70,1)");break;case"bottle":n.fillStyle="rgba(255,255,255,0.9)",n.fillRect(-s*.25,-s*.2,s*.5,s*.9),n.fillRect(-s*.1,-s*.5,s*.2,s*.3);break;default:o(0,0,s*.5,"rgba(255,255,255,0.6)")}n.restore()}function ay(n,t,e,i){n.save(),n.translate(t,e),n.strokeStyle="#c9a24a",n.lineWidth=i*.06,n.beginPath(),n.moveTo(0,i),n.lineTo(0,-i*.5),n.stroke(),n.fillStyle="#d9b25a";for(let s=0;s<5;s++)n.beginPath(),n.ellipse(-i*.1,-i*.4+s*i*.2,i*.1,i*.05,.6,0,At),n.ellipse(i*.1,-i*.4+s*i*.2,i*.1,i*.05,-.6,0,At),n.fill();n.restore()}function Au(n,t,e,i,s){n.fillStyle=i.b,n.fillRect(0,0,t,e),n.fillStyle=i.a,n.fillRect(0,0,t,e*.12),n.fillRect(0,e*.88,t,e*.12),n.fillStyle=Xn(i.a,.25),n.beginPath(),n.moveTo(t*.22,e*.62),n.bezierCurveTo(t*.4,e*.5,t*.6,e*.75,t*.78,e*.6),n.lineTo(t*.78,e*.88),n.lineTo(t*.22,e*.88),n.fill();let r=t*.5,o=t*.42;i.p&&(n.fillStyle="rgba(255,255,255,0.18)",n.beginPath(),n.ellipse(r,e*.66,o*.36,e*.2,0,0,At),n.fill(),dl(n,i.p,r,e*.66,e*.17,s)),kt(n,i.t,r,e*.3,e*.2,{color:i.f,maxW:o,font:bi,stroke:i.st}),i.s&&kt(n,i.s,r,e*.45,e*.08,{color:i.f,maxW:o*.9,weight:"bold"}),i.n&&kt(n,i.n,r,e*.94,e*.055,{color:i.nf||"#fff",maxW:o}),i.tag&&kt(n,i.tag,r,e*.06,e*.06,{color:"#fff",maxW:o}),wu(n,t*.04,e*.16,t*.16,e*.68,s),qe(n,t*.8,e*.18,t*.16,6,e*.045,s,"rgba(0,0,0,0.45)"),Hr(n,t*.82,e*.52,t*.12,e*.2,s),ae(n,t,e,s,.8)}function Ru(n,t,e,i,s){n.fillStyle=i.b,n.fillRect(0,0,t,e),n.fillStyle=i.a,n.fillRect(0,0,t,e*.16),n.beginPath(),n.moveTo(0,e*.16),n.lineTo(t,e*.16),n.lineTo(t,e*.22),n.quadraticCurveTo(t*.5,e*.3,0,e*.22),n.fill(),i.tag&&(n.fillStyle=i.tc||"#e8302a",n.beginPath(),n.arc(t*.82,e*.3,Math.min(t,e)*.12,0,At),n.fill(),kt(n,i.tag,t*.82,e*.3,Math.min(t,e)*.06,{color:"#fff",maxW:Math.min(t,e)*.2})),i.top&&kt(n,i.top,t/2,e*.08,e*.07,{color:i.tf||"#fff",maxW:t*.86}),kt(n,i.t,t/2,e*(i.t2?.34:.4),Math.min(e*.13,t*.3),{color:i.f,maxW:t*.88,font:bi,stroke:i.st}),i.t2&&kt(n,i.t2,t/2,e*.46,Math.min(e*.1,t*.24),{color:i.f,maxW:t*.88,font:bi,stroke:i.st}),i.s&&kt(n,i.s,t/2,e*.56,Math.min(e*.055,t*.1),{color:i.f,maxW:t*.85}),i.p&&(n.fillStyle="rgba(255,255,255,0.16)",n.beginPath(),n.ellipse(t/2,e*.75,t*.36,e*.13,0,0,At),n.fill(),dl(n,i.p,t/2,e*.75,Math.min(t*.32,e*.14),s)),i.n&&(n.fillStyle="rgba(0,0,0,0.25)",n.fillRect(0,e*.91,t,e*.09),kt(n,i.n,t/2,e*.955,e*.045,{color:"#fff",maxW:t*.9})),ae(n,t,e,s,.7)}function ly(n,t,e,i,s){n.fillStyle=i.b,n.fillRect(0,0,t,e),n.fillStyle=i.a,n.fillRect(0,0,t,e*.16),i.food!==!1?wu(n,t*.1,e*.22,t*.8,e*.5,s):(n.fillStyle="#fff",n.fillRect(t*.08,e*.22,t*.84,e*.5),qe(n,t*.12,e*.25,t*.76,12,e*.035,s,"#333")),Hr(n,t*.2,e*.78,t*.6,e*.12,s),ae(n,t,e,s,.7)}function J(n,t,e){return en(pn,`box${n},${t},${e}`,()=>new Ae(n,t,e).translate(0,t/2,0))}function K(n,t,e,i=16,s=!1){return en(pn,`cyl${n},${t},${e},${i},${s}`,()=>new Ji(n,t,e,i,1,s,Math.PI,At).translate(0,e/2,0))}function dn(n,t=12,e=8){return en(pn,`sph${n},${t},${e}`,()=>new ji(n,t,e))}function Dn(n,t=16){return en(pn,`circ${n},${t}`,()=>new xo(n,t).rotateX(-Math.PI/2))}function Le(n,t,e=6,i=16,s=At){return en(pn,`tor${n},${t},${e},${i},${s}`,()=>new tl(n,t,e,i,s))}function Ge(n,t,e=16){return en(pn,"lathe"+n+e,()=>new Ja(t.map(i=>new Mt(Math.max(1e-4,i[0]),i[1])),e,Math.PI,At))}function Un(n,t,e,i=16,s=6,r=!1){return en(pn,"tube"+n,()=>new vo(new Ir(t.map(o=>new N(o[0],o[1],o[2])),r),i,e,s,r))}function Qt(n,t,e,i){return en(pn,`rbox${n},${t},${e},${i}`,()=>{let s=new Ae(n,t,e,3,3,3),r=s.attributes.position,o=s.attributes.normal,a=n/2,l=t/2,c=e/2,f=Math.min(i,a*.9,l*.9,c*.9),h=a-f,u=l-f,d=c-f,m=new N,x=new N,g=(p,_,y)=>Math.abs(Math.abs(p)-_/3)<1e-6?Math.sign(p)*y:p;for(let p=0;p<r.count;p++){m.set(g(r.getX(p),a,h),g(r.getY(p),l,u),g(r.getZ(p),c,d)),x.set(gs.clamp(m.x,-h,h),gs.clamp(m.y,-u,u),gs.clamp(m.z,-d,d));let _=m.clone().sub(x);_.lengthSq()>1e-12&&(_.normalize(),m.copy(x).addScaledVector(_,f),o.setXYZ(p,_.x,_.y,_.z)),r.setXYZ(p,m.x,m.y+l,m.z)}return s})}function Do(n,t,e,i=.08,s=6,r=8){return en(pn,`pil${n},${t},${e},${i},${s},${r}`,()=>{let o=new Ae(n,t,e,s,r,1),a=o.attributes.position;for(let l=0;l<a.count;l++){let c=a.getX(l),f=a.getY(l),h=a.getZ(l),u=Math.abs(c)/(n/2),d=Math.abs(f)/(t/2),m=Math.sqrt(Math.max(0,1-u**4))*Math.sqrt(Math.max(0,1-d**3));i>0&&d>1-i*2&&(m=.06),m=Math.max(.06,m),a.setXYZ(l,c*(1-.04*(1-d)),f+t/2,h*m)}return o.computeVertexNormals(),o})}function uu(n,t,e,i=.001){return en(pn,"ext"+n,()=>{let s=new ja(t(),{depth:e,bevelEnabled:i>0,bevelThickness:i,bevelSize:i,bevelSegments:1,curveSegments:6});return s.translate(0,0,-e/2),s})}function ee(n,t){return en(ry,n,()=>new Ke(t))}function et(n,t=.7,e=0){return ee(`c${n}|${t}|${e}`,{color:n,roughness:t,metalness:e})}function q(n,t=.7,e=0,i={}){let s=`t${n?n.uuid:"none"}|${t}|${e}|${JSON.stringify(i)}`;return ee(s,{map:n,roughness:t,metalness:e,...i})}var nt={get steel(){return et(11844030,.38,.55)},get tin(){return et(13817304,.32,.6)},get alu(){return et(13225168,.3,.55)},get chrome(){return et(14212064,.22,.6)},get darkMetal(){return et(3816769,.5,.45)},get brass(){return et(12950085,.35,.6)},get blackPl(){return et(1908256,.55)},get whitePl(){return et(15526886,.45)},get greyPl(){return et(9080208,.55)},get rubber(){return et(1710618,.92)},get paper(){return et(15789282,.85)},get glass(){return ee("glass",{color:13624298,roughness:.08,metalness:.1,transparent:!0,opacity:.32,depthWrite:!1})},get clearPl(){return ee("clearpl",{color:15003378,roughness:.15,metalness:0,transparent:!0,opacity:.4,depthWrite:!1})}};function xs(n=0){return bt("cardboard"+n,256,256,(t,e,i,s)=>{Me(t,e,i,s,n===1?"#b99868":"#a9824f",.12,3e3,2),t.strokeStyle="rgba(80,55,25,0.18)",t.lineWidth=1;for(let r=0;r<i;r+=4+s()*3)t.beginPath(),t.moveTo(0,r),t.lineTo(e,r+(s()-.5)*3),t.stroke();ae(t,e,i,s,.6)})}function sf(n="FRAGILE",t=0){return bt("carton"+n+t,512,512,(e,i,s,r)=>{Me(e,i,s,r,"#ad8653",.1,4e3,2),e.strokeStyle="rgba(80,55,25,0.15)";for(let o=0;o<s;o+=5+r()*3)e.beginPath(),e.moveTo(0,o),e.lineTo(i,o),e.stroke();e.fillStyle="rgba(200,170,110,0.75)",e.fillRect(i*.43,0,i*.14,s),e.fillStyle="rgba(255,255,255,0.15)",e.fillRect(i*.45,0,i*.02,s),e.fillStyle="rgba(40,30,20,0.75)",kt(e,n,i*.22,s*.25,34,{color:"rgba(40,30,20,0.8)",maxW:i*.36,font:bi}),kt(e,`${12+t%4*12} CT`,i*.78,s*.25,30,{color:"rgba(40,30,20,0.8)",maxW:i*.36});for(let o=0;o<2;o++){let a=i*(.72+o*.12),l=s*.72;e.beginPath(),e.moveTo(a,l-40),e.lineTo(a-18,l-12),e.lineTo(a-6,l-12),e.lineTo(a-6,l+30),e.lineTo(a+6,l+30),e.lineTo(a+6,l-12),e.lineTo(a+18,l-12),e.fill()}e.strokeStyle="rgba(40,30,20,0.7)",e.lineWidth=3,e.strokeRect(i*.06,s*.62,i*.3,s*.2),qe(e,i*.08,s*.65,i*.26,5,10,r,"rgba(40,30,20,0.6)"),ae(e,i,s,r,1.2)})}function Br(n="#b98c5a",t="#8a5f35",e=""){return bt("wood"+n+t+e,256,256,(i,s,r,o)=>{i.fillStyle=n,i.fillRect(0,0,s,r);for(let a=0;a<60;a++){i.strokeStyle=`rgba(${a%2?"90,55,25":"60,35,15"},${.08+o()*.2})`,i.lineWidth=1+o()*3;let l=o()*r;i.beginPath(),i.moveTo(0,l);for(let c=0;c<=s;c+=16)i.lineTo(c,l+Math.sin(c*.02+a)*4+(o()-.5)*2);i.stroke()}i.fillStyle=t,i.globalAlpha=.25;for(let a=0;a<3;a++)i.beginPath(),i.ellipse(o()*s,o()*r,6+o()*6,3+o()*3,0,0,At),i.fill();i.globalAlpha=1,ae(i,s,r,o,.5)},{repeat:[1,1]})}function cy(){return bt("bark",256,256,(n,t,e,i)=>{Me(n,t,e,i,"#4f3b2a",.25,3e3,3);for(let s=0;s<40;s++){n.strokeStyle=`rgba(20,12,6,${.3+i()*.4})`,n.lineWidth=2+i()*4;let r=i()*t;n.beginPath(),n.moveTo(r,0);for(let o=0;o<=e;o+=20)n.lineTo(r+(i()-.5)*12,o);n.stroke()}n.fillStyle="rgba(110,120,80,0.25)";for(let s=0;s<8;s++)n.beginPath(),n.ellipse(i()*t,i()*e,10+i()*20,5+i()*10,i()*3,0,At),n.fill()},{repeat:[1,1]})}function du(n=!1){return bt("endgrain"+n,128,128,(t,e,i,s)=>{t.fillStyle="#c9a26c",t.fillRect(0,0,e,i);let r=n?0:e/2,o=n?i:i/2;for(let a=1;a<26;a++)t.strokeStyle=`rgba(120,80,40,${.2+s()*.3})`,t.lineWidth=1+s(),t.beginPath(),t.arc(r,o,a*6+s()*2,0,At),t.stroke();t.strokeStyle="rgba(60,40,20,0.5)",t.lineWidth=1.5;for(let a=0;a<4;a++)t.beginPath(),t.moveTo(r,o),t.lineTo(r+(s()-.3)*e,o-s()*i),t.stroke()})}function Po(n,t=""){return bt("knit"+n+t,128,128,(e,i,s,r)=>{e.fillStyle=n,e.fillRect(0,0,i,s);let o=Xn(n,-.35),a=Xn(n,.18);for(let l=0;l<i;l+=8)for(let c=0;c<s;c+=8)e.fillStyle=a,e.beginPath(),e.ellipse(l+2,c+4,2.2,4,-.5,0,At),e.ellipse(l+6,c+4,2.2,4,.5,0,At),e.fill(),e.fillStyle=o,e.fillRect(l+3.6,c,.8,8);ae(e,i,s,r,.3)},{repeat:[3,3]})}function fy(n){return bt("quilt"+n,256,256,(t,e,i,s)=>{let r=Xn(n,-.45),o=Xn(n,.22);for(let a=0;a<i;a+=32){let l=t.createLinearGradient(0,a,0,a+32);l.addColorStop(0,r),l.addColorStop(.15,n),l.addColorStop(.5,o),l.addColorStop(.85,n),l.addColorStop(1,r),t.fillStyle=l,t.fillRect(0,a,e,32),t.fillStyle="rgba(0,0,0,0.35)";for(let c=0;c<e;c+=6)t.fillRect(c,a+31,3,1)}ae(t,e,i,s,.4)},{repeat:[1,1]})}function xi(n,t=""){return bt("nylon"+n+t,128,128,(e,i,s,r)=>{Me(e,i,s,r,n,.06,1500,1),e.strokeStyle="rgba(0,0,0,0.12)",e.lineWidth=1;for(let o=0;o<i;o+=8)e.beginPath(),e.moveTo(o,0),e.lineTo(o,s),e.moveTo(0,o),e.lineTo(i,o),e.stroke();ae(e,i,s,r,.4)},{repeat:[2,2]})}function Cu(n,t,e){return bt("plaid"+n+t+e,256,256,(i,s,r,o)=>{i.fillStyle=n,i.fillRect(0,0,s,r),i.globalAlpha=.55,i.fillStyle=t;for(let a=0;a<s;a+=64)i.fillRect(a,0,24,r),i.fillRect(0,a,s,24);i.fillStyle=e,i.globalAlpha=.7;for(let a=40;a<s;a+=64)i.fillRect(a,0,4,r),i.fillRect(0,a,s,4);i.globalAlpha=1,Q0(i,s,r,o,.05)},{repeat:[1,1]})}function Q0(n,t,e,i,s){for(let r=0;r<2500;r++){let o=(i()-.5)*s;n.fillStyle=o>0?`rgba(255,255,255,${o})`:`rgba(0,0,0,${-o})`,n.fillRect(i()*t,i()*e,2,2)}}function Fr(n="#b9bec4",t=""){return bt("brushed"+n+t,128,128,(e,i,s,r)=>{e.fillStyle=n,e.fillRect(0,0,i,s);for(let o=0;o<300;o++)e.fillStyle=r()<.5?"rgba(255,255,255,0.12)":"rgba(0,0,0,0.1)",e.fillRect(0,r()*s,i,1);ae(e,i,s,r,.5)})}function tf(n,t=""){return bt("paint"+n+t,256,256,(e,i,s,r)=>{Me(e,i,s,r,n,.06,2e3,2);for(let o=0;o<40;o++)e.fillStyle=r()<.6?"rgba(70,70,72,0.85)":"rgba(110,60,30,0.6)",e.beginPath(),e.ellipse(r()*i,r()*s,1+r()*6,1+r()*3,r()*3,0,At),e.fill();ae(e,i,s,r,.8)})}function hy(n=""){return bt("lid"+n,128,128,(t,e,i,s)=>{let r=t.createRadialGradient(64,64,0,64,64,64);r.addColorStop(0,"#d9dcdf"),r.addColorStop(1,"#a9adb2"),t.fillStyle=r,t.fillRect(0,0,e,i),t.strokeStyle="rgba(0,0,0,0.25)",t.lineWidth=2;for(let o of[60,54,46,38])t.beginPath(),t.arc(64,64,o,0,At),t.stroke();t.strokeStyle="rgba(255,255,255,0.4)",t.lineWidth=1;for(let o of[57,50,42])t.beginPath(),t.arc(64,64,o,0,At),t.stroke();ae(t,e,i,s,.5)})}function v(n,t,e,i=0,s=0,r=0,o=0,a=0,l=0,c=1,f=1,h=1){let u=new Xt(t,e);return u.position.set(i,s,r),u.rotation.set(o,a,l),(c!==1||f!==1||h!==1)&&u.scale.set(c,f,h),u.castShadow=!0,u.receiveShadow=!0,n.add(u),u}function uy(n,t,e,i){return[t,t,e||t,e||t,n,i||t]}function yi(n,t=512,e=200){return bt("wrap"+JSON.stringify(n)+t+"x"+e,t,e,(i,s,r,o)=>Au(i,s,r,n,o))}function oi(n,t=256,e=384){return bt("front"+JSON.stringify(n)+t+"x"+e,t,e,(i,s,r,o)=>Ru(i,s,r,n,o))}function dy(n,t=128,e=256){return bt("side"+n.b+n.a+(n.food===!1)+t+"x"+e,t,e,(i,s,r,o)=>ly(i,s,r,n,o))}function ti(n,t,e,i,s,r={}){let o=q(oi(s,r.tw||256,r.th||Math.round(256*e/t)),r.rough??.65),a=q(dy(s,128,256),r.rough??.65),l=et(new jt(s.a).getHex(),r.rough??.65),c=r.r?Qt(t,e,i,r.r):J(t,e,i);return v(n,c,uy(o,a,l,r.backSame?o:a))}function Iu(n){n.updateMatrixWorld(!0);let t=new re().copy(n.matrixWorld).invert(),e=new Map,i=new re,s=new me,r=new N,o=new N;n.traverse(l=>{if(!l.isMesh)return;i.multiplyMatrices(t,l.matrixWorld),s.getNormalMatrix(i);let c=i.determinant()<0,f=l.geometry,h=f.attributes.position,u=f.attributes.normal,d=f.attributes.uv,m=f.index,x=Array.isArray(l.material)?l.material:null,g=x?f.groups.length?f.groups:[{start:0,count:m?m.count:h.count,materialIndex:0}]:[{start:0,count:m?m.count:h.count,materialIndex:-1}];for(let p of g){let _=x?x[p.materialIndex]:l.material;if(!_)continue;let y=e.get(_);y||(y={p:[],n:[],u:[]},e.set(_,y));let b=Math.min(p.start+p.count,m?m.count:h.count);for(let L=p.start;L+2<b;L+=3){let R=c?[L,L+2,L+1]:[L,L+1,L+2];for(let w of R){let P=m?m.getX(w):w;r.fromBufferAttribute(h,P).applyMatrix4(i),y.p.push(r.x,r.y,r.z),u?(o.fromBufferAttribute(u,P).applyMatrix3(s).normalize(),y.n.push(o.x,o.y,o.z)):y.n.push(0,1,0),d?y.u.push(d.getX(P),d.getY(P)):y.u.push(0,0)}}}});let a=new Ht;for(let[l,c]of e){if(!c.p.length)continue;let f=new De;f.setAttribute("position",new ue(c.p,3)),f.setAttribute("normal",new ue(c.n,3)),f.setAttribute("uv",new ue(c.u,2)),f.computeBoundingSphere();let h=new Xt(f,l);h.castShadow=!l.transparent,h.receiveShadow=!0,a.add(h)}return a.children.sort((l,c)=>(l.material.transparent?1:0)-(c.material.transparent?1:0)),a}function Pu(n,t,e=!1,i=!1){let s=new Ht;s.add(n);let r=Iu(s),o=new Ht;o.add(r),o.updateMatrixWorld(!0);let a=new Nn().setFromObject(r),l=new N;a.getSize(l);let c=new N;return a.getCenter(c),i?r.position.set(-c.x,-c.y,-a.min.z):r.position.set(-c.x,e?0:-a.min.y,-c.z),o.userData.height=l.y,o.userData.radius=Math.max(.06,Math.hypot(l.x,l.z)/2),o.userData.kind=t,o.name=t,o}function pu(n,t,e,i,s={}){let r=q(yi(i,512,Math.round(512*e/(At*t))),.5);v(n,K(t*.985,t*.985,e*.98,18,!0),nt.tin,0,e*.01,0),v(n,K(t,t,e*.84,18,!0),r,0,e*.08,0),v(n,Le(t*.975,t*.04,4,18),nt.tin,0,e-t*.04,0,Math.PI/2),v(n,Le(t*.975,t*.04,4,18),nt.tin,0,t*.04,0,Math.PI/2),v(n,Dn(t*.96,18),q(hy(),.35,.5),0,e-t*.05,0),v(n,Dn(t*.96,18),nt.tin,0,.001,0,Math.PI),s.tab&&(v(n,Le(t*.22,t*.05,3,10),nt.alu,t*.3,e-t*.035,0,Math.PI/2,0,0,1,1.4,1),v(n,K(t*.07,t*.07,t*.03,8),nt.alu,0,e-t*.06,0))}function Lo(n,t,e,i,s,r,o,a,l=.02,c={}){v(n,Ge(JSON.stringify(t),t,18),i);let f=t[t.length-1];if(e){let h=c.front?oi(e,256,160):yi(e,512,Math.round(512*(o-r)/(At*a))),u=v(n,K(a,a,o-r,18,!0),q(h,c.labRough??.5),0,r,0);c.labelSide&&(u.material=[q(h,.5)])}if(s){let h=Math.max(f[0]*1.12,c.capR||0);v(n,K(h,h,l,16),s,0,f[1],0),v(n,K(h*.92,h*.92,.002,16),s,0,f[1]+l,0)}}function py(n){return bt("ribcap"+n,64,32,(t,e,i,s)=>{t.fillStyle=n,t.fillRect(0,0,e,i),t.fillStyle="rgba(0,0,0,0.25)";for(let r=0;r<e;r+=3)t.fillRect(r,0,1,i)})}function Ni(n){return q(py(n),.45)}function my(n,t,e){return bt("rx"+n+t+e,512,160,(i,s,r,o)=>{i.fillStyle="#fbfbf7",i.fillRect(0,0,s,r),i.fillStyle="#1d5fa8",i.fillRect(0,0,s,r*.18),kt(i,"PHARMACY  Rx",s*.3,r*.09,r*.12,{color:"#fff",maxW:s*.4}),kt(i,n,s*.3,r*.36,r*.15,{color:"#111",maxW:s*.42,align:"center"}),kt(i,t,s*.3,r*.56,r*.08,{color:"#222",maxW:s*.44}),qe(i,s*.08,r*.68,s*.45,3,r*.07,o,"#333"),i.fillStyle="#f2c21b",i.fillRect(s*.62,r*.25,s*.32,r*.25),kt(i,"FINISH ALL",s*.78,r*.37,r*.09,{color:"#111",maxW:s*.28}),Hr(i,s*.66,r*.62,s*.24,r*.22,o),ae(i,s,r,o,.5)})}function Oi(n){return bt("band"+JSON.stringify(n),512,128,(t,e,i,s)=>{t.fillStyle=n.b,t.fillRect(0,0,e,i),t.fillStyle=n.a,t.fillRect(0,0,e,i*.15),t.fillRect(0,i*.85,e,i*.15),kt(t,n.t,e*.5,i*.42,i*.36,{color:n.f,maxW:e*.45,font:bi}),n.s&&kt(t,n.s,e*.5,i*.7,i*.13,{color:n.f,maxW:e*.45}),qe(t,e*.05,i*.3,e*.18,4,i*.1,s,"rgba(0,0,0,0.5)"),Hr(t,e*.8,i*.3,e*.12,i*.35,s),ae(t,e,i,s,.5)})}function mu(n,t,e,i,s=.003){let r=q(oi(i,256,Math.round(256*e/t)),.6);return v(n,J(t,s,e),[et(14540253,.7),et(14540253,.7),r,et(15658734,.8),et(14540253,.7),et(14540253,.7)],0,0,0,0,0,0)}function gi(n,t,e,i,s,r=.45,o=.15,a=.06){let l=oi(s,256,Math.round(256*e/t));return v(n,Do(t,e,i,a),[q(l,.5),q(l,.5),et(new jt(s.b).getHex(),r,o),et(new jt(s.b).getHex(),r,o),q(l,r,o),q(l,r,o)])}function gu(n,t,e,i){let s=i.th;v(n,Qt(.44,s,.56,s*.45),t,0,0,.02),v(n,Qt(.5,s*.9,.16,s*.4),t,0,.002,-.2);for(let r of[-1,1]){let o=[[r*.2,0,-.22],[r*.33,0,-.17],[r*.4,0,-.02],[r*.43,0,.17]];v(n,Un("sleeve"+r+i.sleeveR,o,i.sleeveR,8,5),t,0,s*.5,0,0,0,0,1,s/(i.sleeveR*2.1),1),v(n,K(i.sleeveR*.85,i.sleeveR*.85,.05,8),e,r*.432,s*.5,.17,Math.PI/2,0,0,1,1,s/(i.sleeveR*1.9)),v(n,J(.12,.004,.012),i.rain?nt.blackPl:et(1118481,.6),r*.11,s,.12,0,r*.5,0)}if(v(n,Do(.3,.22,s*1.1,0,4,5),t,0,s*.55,-.27,-Math.PI/2,0,0),i.fur&&v(n,Le(.13,.028,4,12),i.fur,0,s*.75,-.39,Math.PI/2,0,0,1.1,.95,.5),i.rain)for(let r of[-1,1])v(n,Un("cord"+r,[[r*.05,0,0],[r*.07,0,.05],[r*.06,0,.1]],.003,6,3),nt.blackPl,0,s+.002,-.28),v(n,K(.007,.007,.016,6),nt.blackPl,r*.06,s+.004,-.17,Math.PI/2);v(n,J(.012,.004,.55),nt.darkMetal,0,s-5e-4,.02),v(n,J(.012,.006,.03),nt.steel,0,s,-.12),v(n,J(.06,.002,.03),q(Oi({t:i.rain?"RAIN SHELL":"INSULATED",s:i.rain?"WATERPROOF":"DOWN ALTERNATIVE",b:"#f4f1ea",f:"#111",a:"#111"}),.6),0,s*.9,-.33)}var zr=[{t:"BAKED BEANS",s:"IN TOMATO SAUCE",n:"NET WT 15 OZ (425g)",b:"#e8a33a",f:"#5a1d0a",a:"#7a2a10",p:"beans"},{t:"CHICKEN SOUP",s:"WITH NOODLES",n:"NET WT 10.5 OZ (298g)",b:"#f4f1ea",f:"#c41e1e",a:"#c41e1e",p:"soup"},{t:"SWEET CORN",s:"WHOLE KERNEL",n:"NET WT 15.25 OZ (432g)",b:"#2f7a32",f:"#ffe14a",a:"#1d5220",p:"corn"},{t:"DICED TOMATOES",s:"NO SALT ADDED",n:"NET WT 14.5 OZ (411g)",b:"#b81d18",f:"#fff",a:"#2f6a2a",p:"tomato"},{t:"BEEF CHILI",s:"WITH BEANS",n:"NET WT 15 OZ (425g)",b:"#3a1a10",f:"#f3c04a",a:"#b5321a",p:"chili"},{t:"GREEN PEAS",s:"SWEET TENDER",n:"NET WT 15 OZ (425g)",b:"#e9efe2",f:"#2f6a2a",a:"#3f8a28",p:"peas"}],Lu=[{t:"PEACH HALVES",s:"IN LIGHT SYRUP",n:"NET WT 15.25 OZ (432g)",b:"#fbe6c4",f:"#b8501a",a:"#f39a42",p:"peach"},{t:"FRUIT COCKTAIL",s:"IN 100% JUICE",n:"NET WT 15 OZ (425g)",b:"#2b4f9a",f:"#fff",a:"#f2c21b",p:"fruit"},{t:"PEAR HALVES",s:"BARTLETT",n:"NET WT 15 OZ (425g)",b:"#e7efc8",f:"#4f6a1a",a:"#9ab83a",p:"apple"}],ko={canned_food(n,t){pu(n,.038,.112,qt(t,zr))},canned_fruit(n,t){pu(n,.038,.11,qt(t,Lu),{tab:!0})},dry_food(n,t){t()<.5?gi(n,.17,.25,.08,{t:"LONG GRAIN",t2:"WHITE RICE",s:"ENRICHED",n:"NET WT 2 LB (907g)",b:"#f6f3ea",f:"#1d4f8a",a:"#1d4f8a",p:"grain",top:"PANTRY"},.5,.05):ti(n,.15,.24,.06,{t:"PENNE",t2:"RIGATE",s:"ENRICHED MACARONI",n:"NET WT 16 OZ (1 LB) 454g",b:"#1d4f9a",f:"#fff",a:"#f2c21b",tf:"#1d4f9a",p:"grain",top:"NO. 41"})},peanut_butter(n,t){Lo(n,[[0,0],[.042,0],[.046,.006],[.046,.1],[.042,.112],[.036,.116],[.036,.122]],{t:"PEANUT BUTTER",s:"CREAMY",n:"NET WT 16 OZ (454g)",b:"#f5e6c0",f:"#8a3a12",a:"#c8321e",p:"peanut"},et(10119724,.35),Ni(qt(t,["#c8321e","#1d4f9a","#2f7a32"])),.012,.095,.0465,.025,{capR:.043})},snacks(n,t){let e=qt(t,[{t:"SALTINE",t2:"CRACKERS",s:"ORIGINAL",n:"NET WT 16 OZ (454g)",b:"#f4f1ea",f:"#c41e1e",a:"#c41e1e",p:"grain",top:"4 SLEEVES"},{t:"GRAHAM",t2:"CRACKERS",s:"HONEY",n:"NET WT 14.4 OZ (408g)",b:"#e3c07a",f:"#5a2a0a",a:"#2b4f9a",p:"grain",top:"FAMILY SIZE"}]);ti(n,.2,.22,.07,e)},formula(n){gi(n,.13,.19,.05,{t:"LIQUID",t2:"NUTRITION",s:"COMPLETE  1.0 KCAL/ML",n:"1000 mL  TUBE FEEDING OR ORAL",b:"#fbfbf7",f:"#1d5fa8",a:"#3aa7a0",p:"drop",top:"MEDICAL"},.35,.05,.05),v(n,K(.009,.009,.02,12),nt.whitePl,.03,.185,0),v(n,K(.013,.013,.014,12),Ni("#3aa7a0"),.03,.2,0)},dog_food(n){gi(n,.42,.62,.16,{t:"DOG FOOD",s:"CHICKEN & RICE  ADULT",n:"NET WT 15 LB (6.8 kg)",b:"#2f7a32",f:"#fff",a:"#f2c21b",tf:"#2f7a32",p:"paw",top:"COMPLETE NUTRITION",tag:"NEW",st:"#14401a"},.7,.02,.04)},energy_bar(n,t){ti(n,.16,.05,.09,{t:"ENERGY BARS",s:"OATS & HONEY  6 BARS",n:"6 x 1.4 OZ (40g)",b:"#f08a1c",f:"#fff",a:"#5a2a0a",p:"oats",st:"#7a3a0a"},{tw:256,th:96});let i=new Ht;gi(i,.04,.13,.016,{t:"OAT BAR",b:"#f08a1c",f:"#fff",a:"#5a2a0a"},.4,.2,.08),i.rotation.set(-Math.PI/2,0,.3+t()*.4),i.position.set(-.01,.058,.06),n.add(i)},instant_noodles(n,t){t()<.5?(v(n,Ge("noodlecup",[[0,0],[.037,0],[.038,.004],[.049,.1],[.051,.102]],18),et(16052714,.7)),v(n,K(.05,.0385,.094,18,!0),q(yi({t:"INSTANT NOODLES",s:"CHICKEN FLAVOR",n:"NET WT 2.25 OZ (64g)",b:"#f4f1ea",f:"#c41e1e",a:"#f2c21b",p:"noodle"},512,160),.6),0,.004,0),v(n,Dn(.051,18),q(bt("foillid",128,128,(i,s,r,o)=>{i.fillStyle="#d8d8d0",i.fillRect(0,0,s,r),i.fillStyle="#c41e1e",i.beginPath(),i.arc(64,64,40,0,At),i.fill(),kt(i,"PEEL",64,64,18,{color:"#fff"}),ae(i,s,r,o,.5)}),.35,.4),0,.103,0)):gi(n,.12,.16,.035,{t:"RAMEN",t2:"NOODLES",s:"BEEF FLAVOR",n:"NET WT 3 OZ (85g)",b:"#c41e1e",f:"#fff",a:"#f2c21b",tf:"#c41e1e",p:"noodle",top:"QUICK 3 MIN"},.4,.15).rotation.x=-Math.PI/2},chips(n,t){let e=qt(t,[{t:"POTATO",t2:"CHIPS",s:"SEA SALT",n:"NET WT 8 OZ (226g)",b:"#f2c21b",f:"#c41e1e",a:"#c41e1e",p:"chip",top:"KETTLE COOKED",st:"#fff"},{t:"TORTILLA",t2:"CHIPS",s:"RESTAURANT STYLE",n:"NET WT 11 OZ (311g)",b:"#2b4f9a",f:"#fff",a:"#f2c21b",tf:"#2b4f9a",p:"chip",top:"FAMILY SIZE"}]);gi(n,.21,.3,.08,e,.3,.35,.05)},jerky(n){gi(n,.14,.2,.035,{t:"BEEF JERKY",s:"ORIGINAL  HIGH PROTEIN",n:"NET WT 3.25 OZ (92g)",b:"#2a2420",f:"#f2c21b",a:"#8a2a12",p:"meat",top:"RESEALABLE"},.4,.2,.06).rotation.x=-Math.PI/2},oatmeal(n){v(n,K(.064,.064,.18,20,!0),q(yi({t:"OLD FASHIONED OATS",s:"100% WHOLE GRAIN",n:"NET WT 42 OZ (2 LB 10 OZ) 1.19kg",b:"#f4f1ea",f:"#2a4f8a",a:"#2a4f8a",p:"oats"},512,220),.75)),v(n,K(.066,.066,.025,20),et(2772874,.4),0,.17,0),v(n,Dn(.063,20),et(8022608,.9),0,.001,0,Math.PI)},soda(n,t){let e=qt(t,[{t:"COLA",s:"CLASSIC",n:"12 FL OZ (355 mL)",b:"#a8141a",f:"#fff",a:"#5a0a0a",p:"bubble"},{t:"LEMON LIME",s:"CAFFEINE FREE",n:"12 FL OZ (355 mL)",b:"#2f8a3a",f:"#f6ee4a",a:"#0f4a1a",p:"bubble"},{t:"ROOT BEER",s:"OLD FASHIONED",n:"12 FL OZ (355 mL)",b:"#4a2412",f:"#f3c04a",a:"#1a0a05",p:"bubble"}]);v(n,Ge("sodacan",[[0,.004],[.026,0],[.033,.01],[.033,.104],[.027,.118],[.0265,.122]],18),nt.alu),v(n,K(.0332,.0332,.092,18,!0),q(yi(e,512,150),.3,.3),0,.011,0),v(n,Dn(.026,16),nt.alu,0,.12,0),v(n,Le(.0065,.0015,3,8),nt.alu,.008,.121,0,Math.PI/2,0,0,1,1.5,1)},sports_drink(n,t){let e=qt(t,[[2785238,"GLACIER BLUE","#2a7fd6"],[15763996,"ORANGE","#f08a1c"],[14035002,"FRUIT PUNCH","#d6283a"]]);v(n,Ge("sportsbottle",[[0,0],[.033,0],[.036,.01],[.036,.08],[.031,.095],[.036,.11],[.036,.17],[.022,.2],[.016,.205],[.016,.215]],18),ee("sport"+e[0],{color:e[0],roughness:.15,transparent:!0,opacity:.82})),v(n,K(.0365,.0365,.055,18,!0),q(yi({t:"SPORTS DRINK",s:e[1],n:"28 FL OZ (828 mL)",b:"#111",f:"#fff",a:e[2],p:"bolt"},512,120),.4),0,.112,0),v(n,K(.018,.018,.022,16),Ni(e[2]),0,.212,0)},water_bottle(n){let t=ee("jugwater",{color:14412270,roughness:.2,transparent:!0,opacity:.55});v(n,Qt(.15,.22,.15,.025),t),v(n,Qt(.13,.2,.13,.02),ee("water",{color:10274520,roughness:.1,transparent:!0,opacity:.45,depthWrite:!1}),0,.005,0),v(n,Ge("jugtop",[[.075,0],[.065,.03],[.02,.05],[.018,.06]],12),t,0,.215,0),v(n,K(.021,.021,.016,14),Ni("#2a6fd6"),0,.27,0),v(n,Un("jughandle",[[.04,.2,-.06],[.06,.25,-.06],[.065,.27,-.02],[.05,.25,.02],[.04,.2,.04]],.012,12,6),t,0,0,0);let e=q(Oi({t:"DRINKING WATER",s:"1 GALLON (3.78 L)  PURIFIED",b:"#ffffff",f:"#1d5fa8",a:"#3d8fd6"}),.5);v(n,J(.152,.07,.152),[e,e,nt.clearPl,nt.clearPl,e,e],0,.08,0)},saline(n){let t=bt("salinebag",256,384,(s,r,o,a)=>{s.fillStyle="#e9f0f2",s.fillRect(0,0,r,o),s.strokeStyle="#1d5fa8",s.lineWidth=3,s.strokeRect(r*.1,o*.12,r*.8,o*.62),kt(s,"0.9% SODIUM",r/2,o*.22,30,{color:"#1d5fa8",maxW:r*.75,font:bi}),kt(s,"CHLORIDE",r/2,o*.3,30,{color:"#1d5fa8",maxW:r*.75,font:bi}),kt(s,"INJECTION USP",r/2,o*.37,16,{color:"#1d5fa8",maxW:r*.75}),kt(s,"1000 mL",r/2,o*.47,40,{color:"#111",maxW:r*.7}),qe(s,r*.15,o*.55,r*.7,6,10,a,"rgba(20,60,120,0.6)");for(let l=1;l<10;l++)s.fillStyle="#333",s.fillRect(r*.88,o*(.12+l*.062),l%2?10:18,2);kt(s,"STERILE  SINGLE USE",r/2,o*.82,14,{color:"#1d5fa8",maxW:r*.8}),ae(s,r,o,a,.4)}),e=q(t,.2,0,{transparent:!0,opacity:.92}),i=v(n,Do(.15,.25,.03,.05),[e,e,nt.clearPl,nt.clearPl,e,e]);i.rotation.x=-Math.PI/2,i.position.y=.015,i.position.z=.125,v(n,K(.005,.005,.04,8),nt.whitePl,-.02,.012,.135,Math.PI/2),v(n,K(.006,.006,.03,8),et(2781142,.5),.025,.012,.13,Math.PI/2)},ors(n){ti(n,.1,.13,.04,{t:"ORAL",t2:"REHYDRATION SALTS",s:"WHO FORMULA  10 SACHETS",n:"DISSOLVE 1 SACHET IN 1 L WATER",b:"#f4f8fb",f:"#1d5fa8",a:"#3aa7a0",p:"drop",top:"ELECTROLYTES"});for(let e=0;e<2;e++){let i=new Ht;gi(i,.07,.1,.008,{t:"ORS",s:"1 L SACHET",b:"#fbfbf7",f:"#1d5fa8",a:"#3aa7a0"},.35,.25,.08),i.rotation.set(-Math.PI/2,0,.4+e*.5),i.position.set(.08+e*.03,.005+e*.006,.07),n.add(i)}},first_aid(n){let t=et(13115422,.45),e=bt("fakit",256,192,(s,r,o,a)=>{s.fillStyle="#c8201e",s.fillRect(0,0,r,o),s.fillStyle="#fff",s.beginPath(),s.roundRect(r*.34,o*.14,r*.32,o*.56,10),s.fill(),dl(s,"cross",r/2,o*.42,o*.2,a),kt(s,"FIRST AID",r/2,o*.84,o*.13,{color:"#fff",maxW:r*.8}),ae(s,r,o,a,.8)}),i=q(e,.45);v(n,Qt(.28,.055,.2,.015),[t,t,i,t,t,t]),v(n,Qt(.28,.035,.2,.015),t,0,.056,0),v(n,Qt(.284,.004,.204,.002),et(15658734,.5),0,.054,0),v(n,J(.24,.002,.17),[t,t,i,t,t,t],0,.091,0),v(n,Un("fahandle",[[-.06,.05,.1],[-.05,.05,.125],[.05,.05,.125],[.06,.05,.1]],.008,10,6),nt.whitePl);for(let s of[-.09,.09])v(n,J(.025,.03,.008),nt.whitePl,s,.04,.102)},antibiotics(n,t){let e=ee("amber",{color:11887901,roughness:.2,transparent:!0,opacity:.85});v(n,Ge("rxbottle",[[0,0],[.019,0],[.021,.004],[.021,.07],[.018,.074],[.018,.078]],16),e);let s=qt(t,["AMOXICILLIN 500 MG","DOXYCYCLINE 100 MG","CEPHALEXIN 500 MG"]);v(n,K(.0212,.0212,.045,16,!0),q(my(s,"TAKE 1 CAPSULE 3 TIMES DAILY",1),.6),0,.012,0),v(n,K(.023,.023,.018,16),Ni("#f4f4f0"),0,.075,0),v(n,Dn(.022,16),et(16053488,.5),0,.0935,0)},pain_pills(n){Lo(n,[[0,0],[.026,0],[.029,.006],[.029,.085],[.02,.098],[.016,.1]],{t:"PAIN RELIEVER",s:"ACETAMINOPHEN 500 MG",n:"100 CAPLETS",b:"#f4f4f0",f:"#c41e1e",a:"#c41e1e",p:"pill"},et(16053488,.4),Ni("#f4f4f0"),.01,.08,.0293,.02,{capR:.02})},ibuprofen(n){ti(n,.075,.115,.04,{t:"IBUPROFEN",s:"200 MG  PAIN RELIEVER",n:"50 COATED TABLETS",b:"#f08a1c",f:"#fff",a:"#7a2a0a",p:"pill",top:"NSAID",st:"#a0400a"});let t=[[0,0],[.018,0],[.02,.004],[.02,.06],[.014,.068],[.012,.07]],e=new Ht;Lo(e,t,{t:"IBUPROFEN",s:"200 MG",n:"50 TABLETS",b:"#fff",f:"#f08a1c",a:"#f08a1c",p:"pill"},et(16053488,.4),Ni("#f08a1c"),.008,.055,.0203,.016,{capR:.015}),e.position.set(.065,0,.01),n.add(e)},vitamins(n){Lo(n,[[0,0],[.034,0],[.037,.006],[.037,.105],[.03,.115],[.028,.118]],{t:"MULTIVITAMIN",s:"DAILY  ADULT 50+",n:"120 TABLETS",b:"#2a2a6a",f:"#f2c21b",a:"#f2c21b",p:"sun"},et(2302799,.35),Ni("#23234f"),.012,.1,.0373,.022,{capR:.031})},bandages(n){ti(n,.1,.13,.045,{t:"ADHESIVE",t2:"BANDAGES",s:"FLEXIBLE FABRIC  ASSORTED",n:"60 BANDAGES",b:"#f4f1ea",f:"#c41e1e",a:"#e0b38a",tf:"#5a2a0a",p:"cross",top:"STERILE"}),v(n,K(.025,.025,.05,16),q(bt("gauze",64,64,(t,e,i,s)=>{Me(t,e,i,s,"#f3f0e8",.08,600,1),t.strokeStyle="rgba(0,0,0,0.08)";for(let r=0;r<e;r+=3)t.beginPath(),t.moveTo(r,0),t.lineTo(r,i),t.moveTo(0,r),t.lineTo(e,r),t.stroke()}),.95),.085,.025,.02,Math.PI/2,0,.3)},water_tablets(n){Lo(n,[[0,0],[.018,0],[.02,.004],[.02,.055],[.013,.062],[.012,.065]],{t:"WATER PURIFICATION",s:"TABLETS  KILLS GERMS",n:"50 TABLETS  TREATS 25 L",b:"#4a5a2a",f:"#fff",a:"#f2c21b",p:"drop"},ee("brownglass",{color:5913114,roughness:.15,transparent:!0,opacity:.88}),Ni("#3a3a3a"),.008,.05,.0203,.016,{capR:.015})},first_aid_kit:null,flashlight(n){let t=[[0,0],[.016,0],[.017,.005],[.017,.13],[.019,.14],[.026,.165],[.027,.2],[.025,.203],[0,.203]],e=q(bt("knurl",64,64,(s,r,o)=>{s.fillStyle="#2b2d30",s.fillRect(0,0,r,o),s.strokeStyle="rgba(255,255,255,0.18)";for(let a=-64;a<128;a+=5)s.beginPath(),s.moveTo(a,0),s.lineTo(a+64,o),s.moveTo(a+64,0),s.lineTo(a,o),s.stroke()}),.45,.4),i=new Ht;v(i,Ge("flashlight",t,16),et(2829616,.4,.45)),v(i,K(.0172,.0172,.09,16,!0),e,0,.02,0),v(i,Dn(.024,16),ee("lens",{color:15660799,roughness:.05,emissive:2236962}),0,.2015,0),v(i,K(.006,.006,.006,8),et(1118481,.8),0,.15,.019,Math.PI/2),v(i,Le(.026,.0025,4,16),nt.alu,0,.2,0,Math.PI/2),i.rotation.z=Math.PI/2,i.position.y=.027,n.add(i)},batteries(n){mu(n,.12,.17,{t:"AA BATTERIES",s:"ALKALINE  1.5V",n:"8 PACK",b:"#111",f:"#f2c21b",a:"#c98a2a",p:"battery",top:"LONG LASTING"});let t=q(bt("aacell",128,64,(e,i,s)=>{e.fillStyle="#151515",e.fillRect(0,0,i,s),e.fillStyle="#c98a2a",e.fillRect(0,0,i*.35,s),kt(e,"AA",i*.65,s/2,22,{color:"#f2c21b"})}),.4,.3);for(let e=0;e<8;e++){let i=-.042+e%4*.028,s=e<4?-.035:.035;v(n,K(.007,.007,.05,10),t,i,.01,s-.025,Math.PI/2)}v(n,Qt(.112,.016,.13,.006),nt.clearPl,0,.003,-.002)},pry_bar(n){let t=q(tf("#c4221c","pry"),.5,.2);v(n,Un("prybar",[[-.33,.012,0],[-.1,.012,0],[.18,.012,0],[.26,.016,0],[.31,.04,0],[.31,.075,0],[.28,.09,0],[.25,.085,0]],.011,40,6),t),v(n,J(.05,.006,.026),nt.steel,-.355,.006,0,0,0,.12),v(n,J(.02,.008,.026),nt.darkMetal,.24,.083,0,0,0,.5)},backpack(n,t){let e=qt(t,["#2f3f2a","#22304a","#3a3a3c","#5a2a22"]),i=q(xi(e),.8),s=q(xi(Xn(e,-.3),"dk"),.8);v(n,Qt(.3,.46,.17,.05),i),v(n,Qt(.24,.2,.07,.03),s,0,.04,.1),v(n,J(.2,.1,.04),i,0,.27,.095),v(n,Qt(.31,.09,.18,.03),s,0,.39,.002),v(n,J(.22,.004,.004),nt.blackPl,0,.235,.135),v(n,J(.008,.02,.003),nt.steel,.09,.225,.136);for(let r of[-.08,.08])v(n,Un("bpstrap",[[0,.42,-.08],[0,.4,-.12],[0,.25,-.12],[0,.08,-.105],[0,.04,-.085]],.018,10,4),s,r,0,0,0,0,0,1,1,.45);v(n,Le(.03,.006,4,10,Math.PI),s,0,.47,-.02,0,0,0);for(let r of[-1,1])v(n,J(.03,.14,.1),q(xi("#111111","mesh"),.9),r*.155,.02,0);for(let r of[-1,1])v(n,J(.025,.03,.008),nt.blackPl,r*.07,.15,.137)},winter_coat(n,t){let e=qt(t,["#22304a","#2f3a2a","#5a1d1a","#2a2a2c","#6a5a3a"]),i=q(fy(e),.75),s=q(bt("fur",128,128,(r,o,a,l)=>{Me(r,o,a,l,"#9a8a72",.35,4e3,2);for(let c=0;c<600;c++){r.strokeStyle=l()<.5?"rgba(60,50,40,0.5)":"rgba(220,210,190,0.5)",r.beginPath();let f=l()*o,h=l()*a;r.moveTo(f,h),r.lineTo(f+(l()-.5)*8,h+6),r.stroke()}}),.95);gu(n,i,q(Po(Xn(e,-.2),"coatcuff"),.95),{th:.075,sleeveR:.065,color:e,fur:s})},winter_hat(n,t){let e=qt(t,["#8a1d1a","#22304a","#3a5a2a","#7a6a50","#d8d2c4"]),i=q(Po(e),.95);v(n,Ge("beanie",[[0,.17],[.04,.168],[.07,.155],[.088,.13],[.095,.09],[.095,.04]],18),i,0,0,0),v(n,K(.1,.1,.06,18,!0),q(Po(Xn(e,-.1),"cuff"),.95),0,.01,0),v(n,Le(.097,.008,4,18),i,0,.012,0,Math.PI/2),v(n,Dn(.097,18),et(1710618,.95),0,.012,0),v(n,dn(.035,8,6),q(bt("pom"+e,64,64,(s,r,o,a)=>{Me(s,r,o,a,e,.4,900,2)}),1),0,.19,0)},gloves(n,t){let e=qt(t,["#1d1d1f","#3a2a1f","#2a3a4a"]),i=q(xi(e,"glove"),.85),s=q(Po(Xn(e,.1),"gcuff"),.95),r=(o,a,l,c)=>{let f=new Ht;v(f,Qt(.09,.025,.1,.012),i,0,0,0);for(let h=0;h<4;h++)v(f,K(.0095,.0105,.08-Math.abs(h-1.5)*.012,6),i,-.032+h*.021,.012,.035,Math.PI/2-.04,0,(h-1.5)*.05);v(f,K(.011,.012,.06,6),i,c*.04,.012,0,Math.PI/2,0,c*.9),v(f,K(.047,.05,.065,10),s,0,.014,-.045,-Math.PI/2,0,0,1,1,.45),f.position.set(o,.005,a),f.rotation.y=l,n.add(f)};r(-.05,0,.15,1),r(.06,.03,-.25,-1),n.children[n.children.length-1].position.y=.025},boots(n,t){let e=qt(t,["#5a3a22","#2a2622","#6a5a40"]),i=q(bt("leather"+e,128,128,(a,l,c,f)=>{Me(a,l,c,f,e,.12,2500,2),a.strokeStyle="rgba(0,0,0,0.25)",a.setLineDash([4,3]),a.strokeRect(6,6,l-12,c-12),ae(a,l,c,f,.8)}),.75),s=q(bt("sole",128,32,(a,l,c)=>{a.fillStyle="#1b1b1b",a.fillRect(0,0,l,c),a.fillStyle="#333";for(let f=0;f<l;f+=8)a.fillRect(f,c*.4,4,c*.6)}),.95),r=et(12101770,1),o=(a,l)=>{let c=new Ht;v(c,J(.11,.035,.29),s,0,0,0),v(c,Qt(.1,.08,.27,.035),i,0,.03,.005),v(c,K(.058,.062,.17,10),i,0,.05,-.065,0,0,0,.9,1,1.1),v(c,Le(.055,.015,4,10),r,0,.22,-.065,Math.PI/2,0,0,.95,1.25,1);for(let f=0;f<4;f++)v(c,J(.06,.004,.006),et(13153418,.9),0,.1+f*.025,0+(f<2?.05-f*.03:.002),-.3+(f<2?-.7:0),0,0);c.position.x=a,c.rotation.y=l,n.add(c)};o(-.065,.05),o(.065,-.08)},rain_jacket(n,t){let e=qt(t,["#e8b81b","#d8501c","#1d5fa8","#2f6a3a"]),i=q(xi(e,"rain"),.3,.05);gu(n,i,q(xi(Xn(e,-.3),"raincuff"),.4),{th:.035,sleeveR:.05,color:e,rain:!0})},firewood(n,t){let e=q(cy(),.95),i=q(du(!0),.9),s=q(Br("#c9a26c","#8a6a3a","split"),.9),r=.4,o=[3,3,2],a=0;o.forEach((l,c)=>{for(let f=0;f<l;f++,a++){let h=.048+t()*.012,u=(f-(l-1)/2)*.095+(t()-.5)*.012;v(n,K(h,h,r+(t()-.5)*.04,t()<.5?3:4),[t()<.45?s:e,i,i],u,.045+c*.078,-r/2+(t()-.5)*.03,Math.PI/2,t()*At,0)}});for(let l of[-.12,.12])v(n,Le(.16,.004,4,20),et(13152384,.9),0,.12,l,0,0,0,1,.85,1);v(n,J(.1,.001,.07),q(Oi({t:"FIREWOOD",s:"KILN DRIED  0.75 CU FT",b:"#f4f1ea",f:"#5a2a0a",a:"#2f7a32"}),.8),0,.255,0)},propane_1lb(n){let t=et(3111474,.4,.2);v(n,Ge("propane",[[0,0],[.05,0],[.056,.01],[.056,.16],[.05,.185],[.03,.2],[.016,.205]],18),t),v(n,K(.0565,.0565,.11,18,!0),q(yi({t:"PROPANE",s:"CAMPING FUEL  CYLINDER",n:"NET WT 16.4 OZ (465g)  FLAMMABLE",b:"#2f7a32",f:"#fff",a:"#1d4a20",p:"flame"},512,160),.45,.15),0,.03,0),v(n,K(.014,.016,.02,12),nt.brass,0,.205,0),v(n,K(.008,.008,.012,8),nt.brass,0,.225,0),v(n,K(.052,.052,.012,18,!0),et(1919520,.6),0,0,0)},tarp(n,t){let e=qt(t,["#2a5ab8","#6a7a3a","#a85a1a"]),i=q(bt("tarp"+e,128,128,(r,o,a,l)=>{Me(r,o,a,l,e,.08,1200,1),r.strokeStyle="rgba(255,255,255,0.12)";for(let c=0;c<o;c+=4)r.beginPath(),r.moveTo(c,0),r.lineTo(c,a),r.moveTo(0,c),r.lineTo(o,c),r.stroke();ae(r,o,a,l,.6)},{repeat:[3,3]}),.55);v(n,Qt(.36,.035,.28,.012),i),v(n,Qt(.34,.03,.27,.012),i,.005,.03,-.003,0,.03,0),v(n,Qt(.3,.028,.25,.012),i,-.01,.056,.004,0,-.04,0);for(let r=0;r<4;r++)v(n,Le(.008,.003,4,10),nt.alu,-.14+r*.09,.085,.115,Math.PI/2);let s=q(oi({t:"TARP",s:"ALL PURPOSE 8 x 10 FT",n:"WATERPROOF",b:"#f4f1ea",f:"#1d4f9a",a:"#1d4f9a"},256,192),.7);v(n,J(.12,.002,.09),[nt.paper,nt.paper,s,nt.paper,nt.paper,nt.paper],.03,.084,-.03)},bleach(n){let t=et(15921902,.35);v(n,Qt(.15,.24,.1,.025),t),v(n,Ge("bleachneck",[[.03,0],[.024,.012],[.021,.025]],14),t,.035,.238,0),v(n,K(.024,.024,.024,14),Ni("#1d5fa8"),.035,.262,0),v(n,Un("bleachhandle",[[-.065,.22,0],[-.065,.27,0],[-.03,.29,0],[0,.25,0],[0,.22,0]],.012,12,6),t);let e={t:"BLEACH",s:"REGULAR  UNSCENTED",n:"121 FL OZ (3.57 L)",b:"#f4f6fa",f:"#1d5fa8",a:"#1d5fa8",p:"drop",top:"DISINFECTS"};v(n,J(.12,.15,.001),q(oi(e,256,320),.4),0,.03,.0505),v(n,J(.12,.15,.001),q(bt("bleachback",256,320,(i,s,r,o)=>{i.fillStyle="#f4f6fa",i.fillRect(0,0,s,r),kt(i,"DANGER",s/2,30,30,{color:"#c41e1e"}),qe(i,20,60,s-40,18,12,o,"#333"),Hr(i,60,r-60,130,40,o)}),.4),0,.03,-.0505,0,Math.PI,0)},water_filter(n){let t=et(2781142,.4),e=new Ht;v(e,K(.02,.02,.1,14),t),v(e,K(.021,.021,.03,14),nt.whitePl,0,.1,0),v(e,K(.008,.012,.025,10),nt.whitePl,0,.13,0),v(e,K(.022,.022,.02,14),nt.whitePl,0,-.005,0),v(e,K(.0205,.0205,.05,14,!0),q(Oi({t:"SQUEEZE FILTER",s:"0.1 MICRON",b:"#2a6fd6",f:"#fff",a:"#fff"}),.4),0,.03,0),e.rotation.z=Math.PI/2,e.position.set(0,.022,.08),n.add(e);let i=new Ht;gi(i,.12,.22,.012,{t:"SQUEEZE POUCH",s:"1 L  REUSABLE",b:"#cfe3ef",f:"#1d5fa8",a:"#2a6fd6",p:"drop"},.25,0,.04),i.rotation.x=-Math.PI/2,i.position.set(0,.006,-.03),i.rotation.z=.2,n.add(i)},flea_spray(n){v(n,Ge("aerosol",[[0,0],[.03,0],[.033,.008],[.033,.16],[.028,.18],[.014,.19],[.012,.195]],18),nt.tin),v(n,K(.0333,.0333,.145,18,!0),q(yi({t:"FLEA & TICK",s:"HOME SPRAY  KILLS ON CONTACT",n:"NET WT 16 OZ (454g)",b:"#f4f1ea",f:"#2a5a1a",a:"#2a5a1a",p:"bug"},512,340),.45,.1),0,.012,0),v(n,K(.031,.033,.045,16),et(2775578,.4),0,.17,0),v(n,J(.012,.01,.01),nt.whitePl,0,.215,.02)},seeds(n,t){let e=[{t:"TOMATO",s:"EARLY GIRL  HEIRLOOM",n:"PLANT AFTER LAST FROST",b:"#f4ecd2",f:"#8a1d12",a:"#3f7a2a",p:"tomato"},{t:"CARROT",s:"DANVERS HALF LONG",n:"SOW EARLY SPRING",b:"#f4ecd2",f:"#c85a12",a:"#3f7a2a",p:"carrot"},{t:"BUSH BEANS",s:"PROVIDER  GREEN",n:"DIRECT SOW",b:"#f4ecd2",f:"#2f6a2a",a:"#3f7a2a",p:"bean"},{t:"KALE",s:"WINTER HARDY",n:"COOL SEASON",b:"#f4ecd2",f:"#2f6a2a",a:"#3f7a2a",p:"leaf"}],i=Math.floor(t()*4);for(let s=0;s<3;s++){let r=new Ht;mu(r,.085,.125,e[(i+s)%4],.003),r.position.set((s-1)*.04,s*.0032,(s-1)*.015),r.rotation.y=(s-1)*.35,n.add(r)}},lighter(n,t){let e=qt(t,[14035002,2781142,3115578,15909403,8006298]),i=new Ht;v(i,Qt(.025,.06,.013,.005),ee("lighter"+e,{color:e,roughness:.2,transparent:!0,opacity:.9})),v(i,Qt(.02,.05,.008,.003),ee("fuel",{color:15261872,roughness:.2,transparent:!0,opacity:.5}),0,.004,0),v(i,J(.025,.018,.013),nt.chrome,0,.06,0),v(i,K(.005,.005,.009,10),nt.darkMetal,-.004,.08,0,Math.PI/2),v(i,J(.009,.006,.01),nt.blackPl,.007,.077,0),i.rotation.x=-Math.PI/2,i.position.set(0,.0065,.04),n.add(i)},comfort(n,t){if(t()<.6){let e=qt(t,["THE LONG WINTER","RIVER STORIES","FIELD GUIDE TO BIRDS","COLLECTED POEMS","THE NORTHERN ROAD"]),i=qt(t,["#22304a","#5a1d1a","#2f4a2a","#4a3a2a"]),s=q(bt("book"+e+i,256,384,(a,l,c,f)=>{Me(a,l,c,f,i,.08,1500,2),a.strokeStyle="#c9a24a",a.lineWidth=4,a.strokeRect(16,16,l-32,c-32),e.split(" ").forEach((u,d)=>kt(a,u,l/2,c*.3+d*40,34,{color:"#e8d8a0",maxW:l*.8,font:'Georgia, "DejaVu Serif", serif'})),kt(a,"A NOVEL",l/2,c*.82,16,{color:"#e8d8a0"}),ae(a,l,c,f,1)}),.7),r=q(bt("pages",64,64,(a,l,c)=>{a.fillStyle="#efe6cf",a.fillRect(0,0,l,c),a.fillStyle="rgba(0,0,0,0.12)";for(let f=0;f<c;f+=2)a.fillRect(0,f,l,1)}),.9),o=et(new jt(i).getHex(),.7);v(n,J(.15,.035,.22),[r,o,s,s,r,r])}else{let e=q(bt("cards",128,192,(s,r,o,a)=>{s.fillStyle="#b8201e",s.fillRect(0,0,r,o),s.strokeStyle="#fff",s.lineWidth=3,s.strokeRect(8,8,r-16,o-16);for(let l=0;l<60;l++)s.strokeStyle="rgba(255,255,255,0.35)",s.beginPath(),s.arc(r/2,o/2,6+l*2,0,3),s.stroke();kt(s,"PLAYING CARDS",r/2,o*.88,13,{color:"#fff",maxW:r*.8}),ae(s,r,o,a,.6)}),.5);v(n,J(.064,.02,.09),[et(12066846,.5),et(12066846,.5),e,et(12066846,.5),et(12066846,.5),et(12066846,.5)]);let i=q(bt("cardface",64,96,(s,r,o)=>{s.fillStyle="#fafafa",s.fillRect(0,0,r,o),kt(s,"A",10,14,14,{color:"#c41e1e"}),s.fillStyle="#c41e1e",s.beginPath(),s.moveTo(32,36),s.bezierCurveTo(10,20,10,50,32,64),s.bezierCurveTo(54,50,54,20,32,36),s.fill()}),.6);for(let s=0;s<3;s++)v(n,J(.063,8e-4,.088),[nt.paper,nt.paper,i,nt.paper,nt.paper,nt.paper],.07+s*.012,s*.001,.01+s*.01,0,.3+s*.4,0)}},toolkit(n,t){let e=qt(t,[12853788,1920922,2763308]),i=q(tf("#"+new jt(e).getHexString(),"tk"),.45,.3);v(n,Qt(.46,.15,.21,.01),i),v(n,Qt(.47,.06,.22,.012),i,0,.14,0),v(n,J(.472,.004,.222),nt.darkMetal,0,.14,0),v(n,Un("tkhandle",[[-.11,.2,0],[-.1,.235,0],[.1,.235,0],[.11,.2,0]],.011,12,6),nt.blackPl);for(let s of[-.17,.17])v(n,J(.04,.05,.012),nt.chrome,s,.11,.11),v(n,J(.03,.02,.008),nt.chrome,s,.15,.115);v(n,J(.012,.015,.03),nt.steel,.215,.18,0)},scrap_wood(n,t){let e=q(Br("#c9a26c","#8a6a3a","lumber"),.85),i=q(bt("ply",256,256,(o,a,l,c)=>{Me(o,a,l,c,"#d2b07a",.1,2e3,2);for(let f=0;f<20;f++)o.strokeStyle="rgba(140,90,40,0.25)",o.lineWidth=2+c()*6,o.beginPath(),o.ellipse(c()*a,c()*l,30+c()*60,6+c()*10,0,0,At),o.stroke();ae(o,a,l,c,.8)}),.85),s=q(bt("plyedge",64,16,(o,a,l)=>{for(let c=0;c<5;c++)o.fillStyle=c%2?"#a67c48":"#d2b07a",o.fillRect(0,c*l/5,a,l/5)}),.9),r=q(du(),.9);v(n,J(.6,.018,.45),[s,s,i,i,s,s],0,0,0,0,.1,0);for(let o=0;o<3;o++)v(n,J(1,.038,.089),[r,r,e,e,e,e],(t()-.5)*.1,.018+o*.038,-.1+o*.09,0,(t()-.5)*.2,0)},hardware_parts(n,t){ti(n,.14,.09,.1,{t:"WOOD SCREWS",s:"#8 x 2-1/2 IN  COARSE",n:"1 LB  APPROX 120 PCS",b:"#f2c21b",f:"#111",a:"#111",p:"screw",top:"ZINC PLATED"});let e=et(11054514,.4,.5);for(let i=0;i<3;i++){let s=new Ht;v(s,J(.05,.003,.03),e,0,0,0),v(s,J(.003,.05,.03),e,-.0235,0,0),s.position.set(.11+i*.02,0,-.03+i*.035),s.rotation.y=t()*At,n.add(s)}for(let i=0;i<6;i++)v(n,K(.002,5e-4,.05,6),e,-.05+t()*.1,.003,.08+t()*.04,Math.PI/2,0,t()*At)},wiring(n,t){let e=qt(t,["#e0521c","#f2c21b","#f4f1ea"]),i=q(bt("wire"+e,256,32,(r,o,a)=>{r.fillStyle=e,r.fillRect(0,0,o,a),r.strokeStyle="rgba(0,0,0,0.3)",r.lineWidth=1.5;for(let l=-32;l<o;l+=4)r.beginPath(),r.moveTo(l,0),r.lineTo(l+16,a),r.stroke()}),.45);v(n,Le(.1,.035,6,20),i,0,.035,0,Math.PI/2,0,0,1,1,.9),v(n,K(.137,.137,.05,16,!0),q(Oi({t:"12/2 NM-B",s:"COPPER BUILDING WIRE  50 FT",b:"#f4f1ea",f:"#111",a:e}),.6),0,.012,0,0,0,0,1,1,1),v(n,Un("wiretail",[[.12,.05,0],[.18,.04,.05],[.22,.01,.02]],.005,10,4),et(new jt(e).getHex(),.4));let s=new Ht;gi(s,.07,.1,.02,{t:"WIRE NUTS",s:"25 PCS",b:"#e8eef2",f:"#c41e1e",a:"#f2c21b"},.2,0,.06),s.rotation.x=-Math.PI/2,s.position.set(-.17,.01,.09),n.add(s)},pipe_fittings(n,t){let e=et(15658730,.4),i=et(7829367,.8);for(let s=0;s<3;s++){let r=new Ht;v(r,K(.017,.017,.5,10,!0),e),v(r,K(.015,.015,.5,8,!0),q(null,.8,0,{color:6710886,side:yn})),r.rotation.z=Math.PI/2,r.position.set(.25,.017,-.05+s*.036),r.rotation.y=(t()-.5)*.05,n.add(r)}v(n,Le(.03,.02,8,8,Math.PI/2),e,-.1,.02,.07,Math.PI/2,0,0),v(n,K(.022,.022,.05,12),e,-.05,0,.1),v(n,Le(.09,.012,5,16),et(3111474,.5),-.05,.012,-.05,Math.PI/2),v(n,Le(.075,.012,5,16),et(3111474,.5),-.05,.034,-.05,Math.PI/2),v(n,K(.016,.016,.03,8),nt.brass,.03,.016,-.05,0,0,Math.PI/2)},plastic_sheet(n){let t=ee("plasroll",{color:15265520,roughness:.25,transparent:!0,opacity:.85}),e=q(bt("rollend",128,128,(s,r,o)=>{s.fillStyle="#dfe6e8",s.fillRect(0,0,r,o),s.strokeStyle="rgba(0,0,0,0.12)";for(let a=18;a<64;a+=2)s.beginPath(),s.arc(64,64,a,0,At),s.stroke();s.fillStyle="#a67c48",s.beginPath(),s.arc(64,64,17,0,At),s.fill(),s.fillStyle="#222",s.beginPath(),s.arc(64,64,13,0,At),s.fill()}),.5),i=new Ht;v(i,K(.07,.07,.6,18),[t,e,e]),v(i,K(.0705,.0705,.2,18,!0),q(Oi({t:"PLASTIC SHEETING",s:"6 MIL  10 x 25 FT  CLEAR",b:"#f4f1ea",f:"#111",a:"#c41e1e"}),.5),0,.2,0),i.rotation.z=Math.PI/2,i.position.set(.3,.07,0),n.add(i)},insulation(n){let t=q(bt("foam",256,256,(i,s,r,o)=>{Me(i,s,r,o,"#e9a0b0",.08,3e3,2),kt(i,"RIGID FOAM  R-5",s/2,r*.3,26,{color:"rgba(30,60,140,0.8)",maxW:s*.9}),kt(i,"1 IN x 2 FT x 4 FT",s/2,r*.45,18,{color:"rgba(30,60,140,0.8)"}),qe(i,30,r*.6,s-60,4,10,o,"rgba(30,60,140,0.5)"),ae(i,s,r,o,.6)}),.9),e=et(15311024,.95);for(let i=0;i<4;i++)v(n,J(.6,.025,.3),[e,e,t,t,e,e],i%2*.01,i*.025,i%2*-.008);v(n,J(.08,.104,.304),ee("shrink",{color:16777215,roughness:.1,transparent:!0,opacity:.25}),.18,-.002,0)},metal_bin(n){let t=q(bt("galv",256,256,(i,s,r,o)=>{Me(i,s,r,o,"#a9aeb2",.12,2500,3);for(let a=0;a<30;a++)i.fillStyle=`rgba(255,255,255,${.05+o()*.1})`,i.beginPath(),i.ellipse(o()*s,o()*r,8+o()*20,6+o()*14,o()*3,0,At),i.fill();ae(i,s,r,o,1.2)}),.5,.45);v(n,Ge("trashcan",[[0,.005],[.2,.005],[.205,.08],[.215,.09],[.207,.1],[.212,.26],[.222,.27],[.214,.28],[.22,.46],[.23,.47],[.222,.48],[.234,.6]],16),q(t.map,.5,.45,{side:we})),v(n,Ge("trashlid",[[.245,0],[.24,.015],[.2,.04],[.1,.06],[0,.065]],16),t,0,.595,0),v(n,Un("binlidh",[[-.05,.66,0],[-.04,.69,0],[.04,.69,0],[.05,.66,0]],.008,6,5),nt.steel);for(let i of[-1,1])v(n,Un("binsideh",[[0,.5,-.05],[.035,.49,-.04],[.035,.49,.04],[0,.5,.05]],.007,6,4),nt.steel,i*.22,0,0,0,i<0?Math.PI:0,0)},rain_barrel(n){let t=et(1920922,.45);v(n,Ge("barrel",[[0,0],[.27,0],[.29,.02],[.3,.12],[.31,.14],[.3,.16],[.305,.45],[.3,.74],[.31,.76],[.3,.78],[.29,.88],[.27,.9],[0,.9]],24),t);for(let i of[-.18,.18])v(n,K(.03,.03,.015,10),et(1194610,.5),i,.895,0);v(n,K(.015,.015,.06,10),nt.brass,0,.12,.31,Math.PI/2),v(n,J(.02,.04,.01),nt.brass,0,.12,.345),v(n,J(.24,.12,.002),q(oi({t:"RAIN BARREL",s:"55 GAL  NOT FOR DRINKING",b:"#f4f1ea",f:"#1d4f9a",a:"#1d4f9a"},256,128),.6),0,.5,.303)},stove_kit(n){let t=q(bt("stoveblk",128,128,(e,i,s,r)=>{Me(e,i,s,r,"#26272a",.12,2e3,2),ae(e,i,s,r,1)}),.7,.35);v(n,Qt(.45,.4,.5,.02),t,0,.12,0);for(let e of[-.19,.19])for(let i of[-.21,.21])v(n,K(.018,.012,.12,8),t,e,0,i);v(n,J(.3,.24,.02),t,0,.19,.25),v(n,J(.2,.14,.004),ee("stoveglass",{color:2234900,roughness:.1,metalness:.3}),0,.24,.26),v(n,K(.008,.008,.08,8),nt.chrome,.12,.28,.275),v(n,K(.07,.07,.08,16,!0),t,0,.52,-.08);for(let e=0;e<2;e++)v(n,K(.075,.075,.6,16,!0),q(Fr("#4a4c50","pipe"),.6,.4),.38+e*.16,.075,0,Math.PI/2,0,0);v(n,J(.2,.1,.002),q(oi({t:"WOOD STOVE",s:"EPA CERTIFIED  60,000 BTU",b:"#f4f1ea",f:"#111",a:"#c4221c"},256,128),.6),0,.42,.251)},battery_module(n){let t=et(15263972,.4);v(n,Qt(.5,.7,.16,.03),t),v(n,J(.44,.06,.004),et(2763308,.3),0,.58,.08);for(let i=0;i<5;i++)v(n,J(.04,.008,.002),ee("ledg"+i,{color:i<3?3135066:1718818,emissive:i<3?674330:0,roughness:.3}),-.12+i*.06,.6,.083);let e=q(bt("vent",128,64,(i,s,r)=>{i.fillStyle="#d8d8d4",i.fillRect(0,0,s,r),i.fillStyle="#333";for(let o=6;o<r-4;o+=7)i.fillRect(8,o,s-16,3)}),.5);v(n,J(.36,.14,.003),e,0,.08,.08),v(n,J(.2,.12,.002),q(oi({t:"HOME BATTERY",s:"LiFePO4  5 kWh  48 V DC",n:"CAUTION  HIGH VOLTAGE",b:"#f4f1ea",f:"#111",a:"#2a6fd6"},256,160),.5),0,.35,.081);for(let i of[-.06,.06])v(n,K(.012,.012,.03,10),i<0?et(1710618,.5):et(12852766,.5),i,.7,0)},candles(n,t){ti(n,.12,.16,.06,{t:"EMERGENCY",t2:"CANDLES",s:"UNSCENTED  9 HR BURN",n:"6 CANDLES",b:"#f4f1ea",f:"#c41e1e",a:"#2a2a2c",p:"flame",top:"POWER OUTAGE"});let e=ee("wax",{color:15986396,roughness:.55,emissive:1315344});for(let i=0;i<2;i++){let s=.1+t()*.04;v(n,K(.025,.025,s,14),e,.11+i*.06,0,.02-i*.03),v(n,K(.0015,.0015,.01,4),et(1118481,.9),.11+i*.06,s,.02-i*.03)}},matches(n,t){let i=q(oi({t:"STRIKE",t2:"ANYWHERE",s:"KITCHEN MATCHES",n:"250 MATCHES",b:"#f2c21b",f:"#c41e1e",a:"#c41e1e",top:"SAFETY",p:"flame"},256,160),.7),s=q(bt("strike",64,64,(a,l,c,f)=>Me(a,l,c,f,"#5a3a2a",.4,600,2)),.95),r=new Ht;v(r,J(.115,.03,.065),[s,s,i,i,et(15909403,.7),et(15909403,.7)]);let o=q(bt("matchheads",128,64,(a,l,c)=>{a.fillStyle="#d8b88a",a.fillRect(0,0,l,c);for(let f=0;f<l;f+=6)for(let h=0;h<c;h+=6)a.fillStyle="#b81d18",a.beginPath(),a.arc(f+3+(h%12?0:2),h+3,2.6,0,At),a.fill()}),.8);v(r,J(.105,.024,.058),[et(15261900,.8),et(15261900,.8),o,et(15261900,.8),et(15261900,.8),et(15261900,.8)],.045,.004,0),n.add(r);for(let a=0;a<3;a++){let l=new Ht;v(l,J(.003,.003,.06),et(14203018,.8)),v(l,dn(.003,6,4),et(12066072,.6),0,.0015,.03,0,0,0,1,1,1.4),l.position.set(-.03+a*.02,0,.06+t()*.02),l.rotation.y=t()*2-1,n.add(l)}},duct_tape(n){let t=q(Fr("#9ea3a8","tape"),.5,.25);v(n,Ge("ducttape",[[.038,0],[.056,0],[.057,.002],[.057,.046],[.056,.048],[.038,.048]],20),t),v(n,K(.0375,.0375,.048,16,!0),q(Oi({t:"DUCT TAPE",s:"1.88 IN x 60 YD",b:"#b99868",f:"#2a2a2c",a:"#b99868"}),.9,0,{side:we}),0,0,0),v(n,J(.002,.046,.05),t,.058,.001,.025,0,.3,0)},rope(n,t){let e=qt(t,["#c8b080","#2a6fd6","#d6283a","#3a5a2a"]),i=q(bt("rope"+e,128,32,(s,r,o)=>{s.fillStyle=e,s.fillRect(0,0,r,o),s.strokeStyle="rgba(0,0,0,0.35)",s.lineWidth=2;for(let a=-32;a<r;a+=6)s.beginPath(),s.moveTo(a,0),s.lineTo(a+18,o),s.stroke();s.strokeStyle="rgba(255,255,255,0.2)";for(let a=-30;a<r;a+=6)s.beginPath(),s.moveTo(a,0),s.lineTo(a+18,o),s.stroke()},{repeat:[12,1]}),.95);for(let s=0;s<3;s++)v(n,Le(.11+s%2*.006,.013,4,20),i,s%2*.005,.012+s*.016,s%3*.004,Math.PI/2,0,s*.7);for(let s=0;s<2;s++)v(n,Le(.03,.009,4,8),i,.115,.028,-.008+s*.016,0,Math.PI/2,0,1,1.4,1);v(n,Un("ropetail",[[-.1,.012,.03],[-.16,.01,.1],[-.12,.012,.18],[-.05,.012,.2]],.012,10,5),i),v(n,K(.124,.124,.03,16,!0),q(Oi({t:"UTILITY ROPE",s:"3/8 IN x 50 FT",b:"#f4f1ea",f:"#111",a:"#c41e1e"}),.8),0,.02,0,0,0,0,1,1,1)},knife(n){let t=q(Fr("#c8ccd0","blade"),.22,.55);v(n,uu("knifeblade2",()=>{let s=new Lr;return s.moveTo(0,0),s.lineTo(.125,0),s.quadraticCurveTo(.158,.004,.172,.03),s.lineTo(.13,.032),s.lineTo(0,.032),s.closePath(),s},.0025,7e-4),t,.004,.011,.016,-Math.PI/2,0,0),v(n,J(.165,6e-4,.004),et(15658734,.15,.6),.09,.0125,.013),v(n,Qt(.115,.02,.028,.008),et(1908256,.6),-.058,.001,0),v(n,J(.008,.024,.042),nt.steel,.002,0,0);for(let s of[-.03,-.08])v(n,K(.0035,.0035,.022,8),nt.brass,s,5e-4,0);v(n,Le(.005,.0015,3,8),nt.steel,-.118,.011,0,Math.PI/2);let i=q(bt("sheath",128,64,(s,r,o,a)=>{Me(s,r,o,a,"#5a3a22",.15,900,2),s.strokeStyle="rgba(230,210,170,0.6)",s.setLineDash([4,3]),s.lineWidth=2,s.strokeRect(5,5,r-10,o-10),ae(s,r,o,a,1)}),.8);v(n,Qt(.19,.014,.05,.006),i,.03,0,.065,0,.12,0),v(n,J(.03,.016,.05),i,-.07,0,.078,0,.12,0)},multitool(n){let t=q(Fr("#b8bcc0","mt"),.3,.5);v(n,Qt(.1,.012,.016,.004),t,0,0,-.009),v(n,Qt(.1,.012,.016,.004),t,0,0,.009),v(n,J(.03,.008,.02),nt.darkMetal,.06,.002,0);for(let e=0;e<3;e++)v(n,J(.06,.001,.003),nt.darkMetal,-.01+e*.01,.012,-.012+e*.012);v(n,Le(.008,.002,4,10),nt.steel,-.055,.006,0,Math.PI/2),v(n,Qt(.08,.025,.04,.008),et(1908256,.85),.02,0,.06,0,.3,0)},can_opener(n){let t=et(12853788,.5),e=new Ht;v(e,Qt(.13,.016,.022,.007),t,-.07,0,-.016,0,.12,0),v(e,Qt(.13,.016,.022,.007),t,-.07,0,.016,0,-.12,0),v(e,J(.04,.022,.05),nt.steel,.01,-.003,0),v(e,K(.012,.012,.005,12),nt.steel,.02,-.003,0),v(e,Un("openerkey",[[.02,.02,0],[.02,.035,0],[.045,.04,0],[.06,.03,0]],.004,8,5),nt.steel),v(e,Qt(.03,.02,.02,.006),t,.07,.025,0,0,0,Math.PI/2),e.position.y=.011,n.add(e)},cooking_pot(n){let t=q(Fr("#bfc3c7","pot"),.3,.55);v(n,Ge("pot",[[0,.002],[.095,.002],[.1,.008],[.1,.12],[.104,.124],[.097,.124],[.093,.12],[.093,.01],[0,.01]],16),t),v(n,Ge("potlid",[[.104,0],[.1,.006],[.06,.02],[0,.026]],16),t,0,.122,0),v(n,K(.012,.018,.018,10),nt.blackPl,0,.148,0);for(let e of[-1,1])v(n,Un("pothandle"+e,[[e*.098,.105,-.035],[e*.128,.105,-.025],[e*.128,.105,.025],[e*.098,.105,.035]],.006,8,5),nt.blackPl)},blanket(n,t){let e=qt(t,[["#7a1d1a","#22304a","#e8d8a0"],["#2f4a2a","#1a1a1a","#c8a24a"],["#4a5a7a","#e8e8e0","#1a2a4a"]]),i=q(Cu(e[0],e[1],e[2]),.95);v(n,Qt(.4,.04,.3,.02),i),v(n,Qt(.4,.04,.3,.02),i,.003,.038,.003,0,.02,0),v(n,Qt(.4,.04,.3,.02),i,-.004,.076,-.002,0,-.015,0),v(n,K(.02,.02,.3,10),i,.2,.06,-.15,Math.PI/2,0,0,1,1,2.6)},sleeping_bag(n,t){let e=qt(t,["#2a5ab8","#c8521c","#3a5a2a"]),i=q(xi(e,"sb"),.55),s=new Ht;v(s,K(.13,.13,.4,18),[i,q(bt("stuffend"+e,128,128,(r,o,a)=>{r.fillStyle=e,r.fillRect(0,0,o,a),r.strokeStyle="rgba(0,0,0,0.35)",r.lineWidth=2;for(let l=0;l<12;l++)r.beginPath(),r.moveTo(64,64),r.lineTo(64+Math.cos(l)*64,64+Math.sin(l)*64),r.stroke()}),.6),i]);for(let r of[.08,.32])v(s,K(.133,.133,.025,18,!0),nt.blackPl,0,r,0);for(let r=0;r<4;r++)v(s,J(.025,.42,.004),nt.blackPl,Math.sin(r*Math.PI/2)*.132,-.01,Math.cos(r*Math.PI/2)*.132,0,r*Math.PI/2,0);v(s,K(.004,.004,.06,6),nt.blackPl,.03,.4,0),v(s,K(.008,.008,.02,8),et(2763306,.5),.03,.45,0),s.rotation.z=Math.PI/2,s.position.set(.2,.13,0),n.add(s)},hand_warmers(n){for(let t=0;t<2;t++){let e=new Ht;gi(e,.09,.13,.012,{t:"HAND",t2:"WARMERS",s:"UP TO 10 HRS",n:"1 PAIR",b:"#e0521c",f:"#fff",a:"#2a2a2c",p:"flame"},.45,.1,.06),e.rotation.set(-Math.PI/2,0,t*.5-.2),e.position.set(t*.06,.006+t*.008,t*.02),n.add(e)}},wool_socks(n,t){let e=qt(t,["#8a8a86","#6a5a4a","#4a5a6a"]),i=qt(t,["#a8321e","#2a4a7a","#e8e2d2"]),s=.3,r=bt("sockface"+e+i,256,256,(c,f,h,u)=>{c.fillStyle=e,c.fillRect(0,0,f,h);let d=Xn(e,-.3),m=Xn(e,.15);for(let p=0;p<f;p+=6)for(let _=0;_<h;_+=6)c.fillStyle=m,c.beginPath(),c.ellipse(p+1.5,_+3,1.6,3,-.5,0,At),c.ellipse(p+4.5,_+3,1.6,3,.5,0,At),c.fill(),c.fillStyle=d,c.fillRect(p+2.7,_,.6,6);let x=p=>p/s*f,g=p=>h-p/s*h;c.fillStyle=i,c.globalAlpha=.85,c.beginPath(),c.arc(x(0),g(0),x(.06),0,At),c.fill(),c.fillRect(x(.165),g(.1),x(.06),x(.1)),c.fillRect(0,g(.275),x(.1),x(.035)),c.globalAlpha=1;for(let p=g(.27);p<g(.215);p+=4)c.fillStyle="rgba(0,0,0,0.18)",c.fillRect(0,p,x(.1),1.5);ae(c,f,h,u,.5)},{repeat:[1/s,1/s]}),a=uu("sock",()=>{let c=new Lr;return c.moveTo(0,.27),c.lineTo(0,.06),c.quadraticCurveTo(0,0,.06,0),c.lineTo(.17,0),c.quadraticCurveTo(.215,.002,.215,.04),c.quadraticCurveTo(.212,.078,.17,.08),c.lineTo(.095,.085),c.lineTo(.088,.27),c.closePath(),c},.012,.006),l=q(Po(e,"sockside"),.95);for(let c=0;c<2;c++)v(n,a,[q(r,.95),l],c*.025-.1,.009+c*.024,-.13+c*.012,-Math.PI/2,0,c*.08);v(n,J(.105,.05,.003),q(Oi({t:"WOOL SOCKS",s:"MERINO BLEND  1 PAIR",b:"#f4f1ea",f:"#3a2a1f",a:i}),.8),-.065,.005,-.03,-Math.PI/2,0,0)},trash_bags(n){ti(n,.26,.12,.13,{t:"TRASH BAGS",s:"LARGE 30 GAL  DRAWSTRING",n:"40 BAGS",b:"#1a1a1c",f:"#f2c21b",a:"#2f7a32",p:"bolt",top:"HEAVY DUTY"},{tw:384,th:180}),v(n,J(.12,.002,.04),et(657930,.3),0,.12,0)},radio(n){let t=et(14701084,.5),e=et(3815996,.6),i=q(bt("radiofront",256,160,(s,r,o,a)=>{s.fillStyle="#3a3a3c",s.fillRect(0,0,r,o),s.fillStyle="#1a1a1a";for(let l=20;l<o-20;l+=9)for(let c=16;c<r*.5;c+=9)s.beginPath(),s.arc(c,l,3,0,At),s.fill();s.fillStyle="#9ab89a",s.fillRect(r*.56,24,r*.38,40),s.fillStyle="#2a3a2a";for(let l=0;l<10;l++)s.fillRect(r*.58+l*9,50,2,10);kt(s,"AM  FM  WB",r*.75,36,12,{color:"#2a3a2a"});for(let l=0;l<3;l++)s.fillStyle="#c8c8c8",s.fillRect(r*.58+l*30,84,22,12);kt(s,"EMERGENCY RADIO",r*.75,120,14,{color:"#ddd",maxW:r*.4}),ae(s,r,o,a,.8)}),.5);v(n,Qt(.19,.11,.07,.015),[t,t,t,t,i,t]),v(n,J(.1,.004,.05),ee("solar",{color:1714762,roughness:.15,metalness:.4}),-.03,.11,0),v(n,K(.003,.003,.22,6),nt.chrome,.08,.11,-.02,0,0,-.25),v(n,K(.012,.012,.012,12),e,.06,.07,.04,Math.PI/2),v(n,J(.012,.06,.012),e,.1,.04,0),v(n,K(.006,.006,.03,8),e,.12,.015,0,0,0,Math.PI/2)},paper_map(n,t){let e=q(bt("mapcover",256,448,(i,s,r,o)=>{i.fillStyle="#f4f1e6",i.fillRect(0,0,s,r),i.fillStyle="#1d4f9a",i.fillRect(0,0,s,r*.28),kt(i,"PORTLAND",s/2,r*.09,36,{color:"#fff",maxW:s*.9}),kt(i,"METRO STREET MAP",s/2,r*.18,20,{color:"#f2c21b",maxW:s*.9}),i.fillStyle="#e8e2c8",i.fillRect(16,r*.32,s-32,r*.5),i.strokeStyle="#7fa8d6",i.lineWidth=10,i.beginPath(),i.moveTo(s*.45,r*.32),i.bezierCurveTo(s*.6,r*.5,s*.35,r*.62,s*.55,r*.82),i.stroke(),i.strokeStyle="#d6a04a",i.lineWidth=3;for(let a=0;a<9;a++)i.beginPath(),i.moveTo(16,r*(.34+a*.055)),i.lineTo(s-16,r*(.34+a*.055)+(o()-.5)*10),i.stroke(),i.beginPath(),i.moveTo(20+a*26,r*.32),i.lineTo(20+a*26+(o()-.5)*10,r*.82),i.stroke();i.fillStyle="#9ac48a",i.fillRect(s*.12,r*.38,40,30),kt(i,"FOLD HERE",s/2,r*.9,12,{color:"#666"}),ae(i,s,r,o,1.2)}),.85);v(n,J(.12,.008,.21),[nt.paper,nt.paper,e,nt.paper,nt.paper,nt.paper],0,0,0,0,t()*.6,0)},toilet_paper(n){let t=q(bt("tproll",128,64,(s,r,o,a)=>{Me(s,r,o,a,"#f6f4ee",.05,500,1),s.strokeStyle="rgba(0,0,0,0.06)";for(let l=0;l<r;l+=8)s.beginPath(),s.moveTo(l,0),s.lineTo(l,o),s.stroke()}),.95),e=q(bt("tptop",128,128,(s,r,o)=>{s.fillStyle="#f6f4ee",s.fillRect(0,0,r,o),s.strokeStyle="rgba(0,0,0,0.08)";for(let a=24;a<64;a+=3)s.beginPath(),s.arc(64,64,a,0,At),s.stroke();s.fillStyle="#a67c48",s.beginPath(),s.arc(64,64,22,0,At),s.fill(),s.fillStyle="#2a2420",s.beginPath(),s.arc(64,64,19,0,At),s.fill()}),.9);for(let s=0;s<4;s++)v(n,K(.055,.055,.1,18),[t,e,e],(s%2-.5)*.112,0,(Math.floor(s/2)-.5)*.112);let i=ee("tpwrap",{color:16777215,roughness:.15,transparent:!0,opacity:.2,depthWrite:!1});v(n,Qt(.23,.105,.23,.03),i),v(n,J(.2,.06,.002),q(Oi({t:"BATH TISSUE",s:"4 DOUBLE ROLLS  2-PLY",b:"#f4f6fa",f:"#2a4f9a",a:"#7fa8d6"}),.5),0,.02,.116)},soap(n,t){ti(n,.095,.035,.065,{t:"BAR SOAP",s:"GENTLE  UNSCENTED",n:"4 OZ (113g)",b:"#f4f6fa",f:"#2a6fd6",a:"#7fc4d6",p:"bubble"},{tw:256,th:96}),v(n,Qt(.085,.03,.055,.012),et(qt(t,[16052454,15259888,14217440]),.4),.11,0,.02,0,.4,0)},toothpaste(n){let t={t:"TOOTHPASTE",s:"FLUORIDE  COOL MINT",n:"NET WT 6 OZ (170g)",b:"#2a6fd6",f:"#fff",a:"#d6283a",p:"tooth"},e=new Ht;ti(e,.045,.2,.04,t,{tw:128,th:512}),e.rotation.z=Math.PI/2,e.position.set(.1,0,0),n.add(e);let i=new Ht;v(i,Ge("tptube",[[0,0],[.012,0],[.016,.012],[.019,.04],[.019,.12],[.017,.165],[.016,.17]],14),q(yi({...t,s:"COOL MINT"},256,256),.35),0,0,0,0,0,0,1,1,.65),v(i,K(.012,.014,.018,12),nt.whitePl,0,-.018,0),v(i,J(.04,.012,.003),et(16777215,.5),0,.168,0),i.rotation.z=Math.PI/2,i.position.set(0,.013,.07),n.add(i)}};delete ko.first_aid_kit;var Nu={book_first_aid:{title:["FIRST-AID","HANDBOOK"],sub:"EMERGENCY CARE AT HOME",bg:"#c4221c",band:"#f4f2ec",ink:"#f4f2ec",icon:"cross"},book_repair:{title:["HOME REPAIR","MANUAL"],sub:"FIX IT YOURSELF",bg:"#e8701c",band:"#5a5e62",ink:"#2a2c2e",icon:"wrench"},book_cooking:{title:["CAMP","COOKING"],sub:"MEALS OVER AN OPEN FIRE",bg:"#2f6a3a",band:"#efe6cf",ink:"#efe6cf",icon:"pot"},book_survival:{title:["WILDERNESS","SURVIVAL GUIDE"],sub:"SHELTER  WATER  FIRE  FOOD",bg:"#1f3a26",band:"#c9a24a",ink:"#e8d8a0",icon:"compass"}};function gy(n,t,e,i,s,r){if(n.save(),n.translate(e,i),t==="cross"){n.fillStyle=r.band,n.beginPath(),n.arc(0,0,s,0,At),n.fill(),n.fillStyle=r.bg;let o=s*.62,a=s*.22;n.fillRect(-a,-o,2*a,2*o),n.fillRect(-o,-a,2*o,2*a)}else if(t==="wrench"){n.rotate(-.7),n.fillStyle=r.ink,n.fillRect(-s*.13,-s*.7,s*.26,s*1.4);for(let o of[-1,1])n.beginPath(),n.arc(0,o*s*.78,s*.3,0,At),n.fill();n.fillStyle=r.bg,n.fillRect(-s*.1,-s*1.12,s*.2,s*.36),n.beginPath(),n.arc(0,s*.78,s*.13,0,At),n.fill()}else if(t==="pot"){n.fillStyle=r.ink,n.strokeStyle=r.ink,n.lineWidth=s*.08,n.beginPath(),n.moveTo(-s*.7,-s*.15),n.lineTo(s*.7,-s*.15),n.lineTo(s*.6,s*.6),n.lineTo(-s*.6,s*.6),n.closePath(),n.fill(),n.fillRect(-s*.78,-s*.3,s*1.56,s*.12),n.beginPath(),n.arc(0,-s*.3,s*.55,Math.PI*1.1,Math.PI*1.9),n.stroke();for(let o=-1;o<=1;o++)n.beginPath(),n.moveTo(o*s*.3,-s*.45),n.bezierCurveTo(o*s*.3+s*.12,-s*.6,o*s*.3-s*.12,-s*.75,o*s*.3,-s*.9),n.stroke()}else{n.strokeStyle=r.band,n.lineWidth=s*.06,n.beginPath(),n.arc(0,0,s*.9,0,At),n.stroke();for(let o=0;o<8;o++){let a=o%2?s*.5:s*.85,l=s*.14;n.save(),n.rotate(o*Math.PI/4),n.fillStyle=o%2?r.ink:r.band,n.beginPath(),n.moveTo(0,-a),n.lineTo(l,0),n.lineTo(-l,0),n.closePath(),n.fill(),n.fillStyle="rgba(0,0,0,0.3)",n.beginPath(),n.moveTo(0,-a),n.lineTo(l,0),n.lineTo(0,0),n.closePath(),n.fill(),n.restore()}kt(n,"N",0,-s*.98,s*.28,{color:r.ink})}n.restore()}function xy(n,t,e){let i=Nu[e],s='"DejaVu Sans", Arial, sans-serif',r=q(bt("gbook"+e,640,384,(l,c,f,h)=>{Me(l,544,f,h,i.bg,.06,3e3,2),l.fillStyle=i.band,l.fillRect(0,f*.06,256,6),l.fillRect(0,f*.94-6,256,6),i.title.forEach((d,m)=>kt(l,d,256/2,f*.16+m*34,28,{color:i.ink,maxW:256*.86,font:s})),gy(l,i.icon,256/2,f*.56,62,i),kt(l,i.sub,256/2,f*.86,12,{color:i.ink,maxW:256*.86}),l.strokeStyle="rgba(255,255,255,0.25)",l.lineWidth=2,l.beginPath(),l.moveTo(256*.7,f),l.lineTo(256,f*.82),l.stroke(),l.strokeStyle="rgba(80,60,30,0.25)",l.lineWidth=3,l.beginPath(),l.arc(256*(.3+h()*.4),f*(.3+h()*.4),34,0,At),l.stroke(),l.fillStyle=i.band,l.fillRect(256+256*.1,f*.12,256*.8,3),qe(l,256+256*.12,f*.18,256*.76,12,14,h,i.ink),l.fillStyle="#f4f2ec",l.fillRect(256+256*.55,f*.8,256*.35,f*.1),Hr(l,256+256*.57,f*.81,256*.31,f*.08,h),l.save(),l.translate(528,f/2),l.rotate(Math.PI/2),kt(l,i.title.join(" "),0,6,17,{color:i.ink,maxW:f*.9,font:s}),l.restore(),l.fillStyle="rgba(0,0,0,0.25)",l.fillRect(512,0,2,f),l.fillRect(542,0,2,f),l.fillStyle="#efe6cf",l.fillRect(544,0,96,f),l.fillStyle="rgba(0,0,0,0.12)";for(let d=544;d<c;d+=2)l.fillRect(d,0,1,f);ae(l,c,f,h,1.2)}),.75),o=en(pn,"gbookgeo",()=>{let l=new Ae(.15,.03,.22).translate(0,.015,0),c=l.attributes.uv,f=l.attributes.position,h=u=>u/640;for(let u=0;u<6;u++)for(let d=0;d<4;d++){let m=u*4+d,x=f.getX(m)/.15+.5,g=f.getY(m)/.03,p=f.getZ(m)/.22+.5,_,y;u===2?(_=h(x*256),y=1-p):u===3?(_=h(256+(1-x)*256),y=1-p):u===1?(_=h(512+g*32),y=1-p):(_=h(544+(u===0?p:x)*96),y=g),c.setXY(m,_,y)}return l}),a=new Ht;v(a,o,r),t()<.35?(a.rotation.x=Math.PI/2,a.position.set(0,.11,-.015)):a.rotation.y=(t()-.5)*.3,n.add(a)}for(let n of Object.keys(Nu))ko[n]=(t,e)=>xy(t,e,n);var o_=Object.keys(ko);function Ou(n,t=0){let e=new Ht,i=Qi(Bs(String(n))^Math.imul(t+1,2654435761)),s=ko[n];return s?s(e,i):yy(e,n),Pu(e,n)}function yy(n,t){let e=String(t||"SUPPLIES").replace(/_/g," ").toUpperCase(),i=q(sf(e.slice(0,18),0),.9),s=q(xs(),.9);v(n,J(.3,.22,.24),[i,i,s,s,i,i])}var _y=["#c9ccd0","#f2f1ec","#1c1c1e","#a9824f","#c4221c","#1d4f9a","#2f7a32","#f2c21b","#8a4a1a","#cfdde4","#e8701c","#c59a45","#4a4c50","#2a9a9a","#9a6a2c","#e9a0b0"],by={tin:0,white:1,black:2,card:3,red:4,blue:5,green:6,yellow:7,amber:8,clear:9,orange:10,brass:11,dark:12,teal:13,brown:14,pink:15},yt=(n,t,e,i,s,r,o,a={})=>({t:n,s:t,b:e,f:i,a:s,p:r,n:o,...a}),Gr={grocery:[{s:"can",r:.038,h:.112,L:zr[0],w8:2,stack:1},{s:"can",r:.038,h:.11,L:zr[1],w8:2,stack:1},{s:"can",r:.038,h:.112,L:zr[2],w8:1,stack:1},{s:"can",r:.038,h:.112,L:zr[3],w8:1,stack:1},{s:"can",r:.038,h:.11,L:Lu[0],w8:2,stack:1},{s:"can",r:.043,h:.04,L:yt("TUNA","CHUNK LIGHT IN WATER","#2b4f9a","#fff","#f2c21b","fish","NET WT 5 OZ (142g)"),w8:2,stack:1},{s:"box",w:.19,h:.29,d:.07,L:yt("CORN FLAKES","TOASTED","#f2f1ec","#1d4f9a","#e8701c","grain","NET WT 18 OZ (510g)",{top:"FAMILY SIZE",tf:"#fff"}),w8:2},{s:"box",w:.19,h:.28,d:.07,L:yt("OAT RINGS","HONEY NUT","#f2c21b","#7a2a10","#7a2a10","oats","NET WT 15.4 OZ (436g)",{top:"WHOLE GRAIN"}),w8:2},{s:"box",w:.1,h:.26,d:.04,L:yt("SPAGHETTI","ENRICHED","#1d4f9a","#fff","#f2c21b","grain","1 LB (454g)",{tf:"#1d4f9a",top:"NO. 3"}),w8:2},{s:"box",w:.2,h:.22,d:.07,L:yt("SALTINES","ORIGINAL","#f4f1ea","#c41e1e","#c41e1e","grain","NET WT 16 OZ (454g)"),w8:2},{s:"box",w:.13,h:.17,d:.04,L:yt("MAC & CHEESE","ORIGINAL","#2b6fd6","#fff","#f2c21b","noodle","NET WT 7.25 OZ",{tf:"#2b6fd6",top:"DINNER"}),w8:2},{s:"jar",r:.045,h:.125,L:yt("PEANUT BUTTER","CREAMY","#f5e6c0","#8a3a12","#c8321e","peanut","NET WT 16 OZ"),cap:"red",body:"brown",w8:2},{s:"jar",r:.042,h:.16,L:yt("PASTA SAUCE","MARINARA","#2f5a2a","#fff","#b81d18","tomato","24 OZ (680g)"),cap:"tin",body:"red",w8:2},{s:"bottle",r:.042,h:.3,L:yt("VEGETABLE OIL","PURE","#f2c21b","#1d4f9a","#1d4f9a","leaf","48 FL OZ (1.42 L)"),cap:"yellow",body:"yellow",w8:1},{s:"bag",w:.17,h:.25,d:.08,L:yt("WHITE RICE","LONG GRAIN","#f6f3ea","#1d4f8a","#1d4f8a","grain","NET WT 2 LB (907g)"),w8:2},{s:"bag",w:.16,h:.27,d:.09,L:yt("FLOUR","ALL PURPOSE","#f6f3ea","#c41e1e","#2b4f9a","grain","5 LB (2.26 kg)"),w8:1},{s:"bag",w:.21,h:.3,d:.08,L:yt("POTATO CHIPS","SEA SALT","#f2c21b","#c41e1e","#c41e1e","chip","NET WT 8 OZ"),gl:1,w8:2},{s:"jug",w:.15,h:.27,d:.15,L:yt("DRINKING WATER","1 GALLON","#e9f2f6","#1d5fa8","#3d8fd6","drop","3.78 L"),cap:"blue",body:"clear",w8:2},{s:"can",r:.064,h:.18,L:yt("OLD FASHIONED OATS","100% WHOLE GRAIN","#f4f1ea","#2a4f8a","#2a4f8a","oats","42 OZ (1.19 kg)"),cap:"blue",w8:1},{s:"cup",r:.05,h:.1,L:yt("INSTANT NOODLES","CHICKEN FLAVOR","#f4f1ea","#c41e1e","#f2c21b","noodle","2.25 OZ"),cap:"white",w8:2,stack:1},{s:"can",r:.065,h:.16,L:yt("GROUND COFFEE","MEDIUM ROAST","#3a1a10","#f3c04a","#b5321a","bean","30.5 OZ (864g)"),cap:"red",w8:1},{s:"bag",w:.14,h:.21,d:.08,L:yt("SUGAR","GRANULATED","#f6f3ea","#1d4f9a","#c41e1e","grain","4 LB (1.81 kg)"),w8:1},{s:"box",w:.4,h:.125,d:.135,L:yt("COLA 12 PACK","12 FL OZ CANS","#a8141a","#fff","#5a0a0a","bubble","144 FL OZ (4.26 L)"),w8:1,wide:1},{s:"bottle",r:.036,h:.22,L:yt("KETCHUP","TOMATO","#c41e1e","#fff","#2f6a2a","tomato","20 OZ (567g)"),cap:"white",body:"red",w8:1}],pharmacy:[{s:"jar",r:.028,h:.1,L:yt("PAIN RELIEVER","ACETAMINOPHEN 500 MG","#f4f4f0","#c41e1e","#c41e1e","pill","100 CAPLETS"),cap:"white",body:"white",w8:3,stack:1},{s:"jar",r:.028,h:.1,L:yt("IBUPROFEN","200 MG TABLETS","#f08a1c","#fff","#7a2a0a","pill","100 TABLETS"),cap:"orange",body:"white",w8:3,stack:1},{s:"jar",r:.035,h:.12,L:yt("MULTIVITAMIN","ADULT DAILY","#2a2a6a","#f2c21b","#f2c21b","sun","120 TABLETS"),cap:"black",body:"dark",w8:2},{s:"box",w:.08,h:.11,d:.03,L:yt("ALLERGY","24 HOUR RELIEF","#6a2a9a","#fff","#f2c21b","leaf","30 TABLETS"),w8:2,stack:1},{s:"box",w:.1,h:.14,d:.04,L:yt("COLD & FLU","DAY + NIGHT","#1d4f9a","#fff","#e8701c","moon","24 LIQUID CAPS"),w8:2,stack:1},{s:"bottle",r:.033,h:.14,L:yt("ANTACID","EXTRA STRENGTH","#f2f1ec","#2a9a9a","#2a9a9a","drop","160 CHEWABLES"),cap:"teal",body:"white",w8:1},{s:"box",w:.1,h:.13,d:.045,L:yt("BANDAGES","FLEXIBLE FABRIC","#f4f1ea","#c41e1e","#e0b38a","cross","60 ASSORTED"),w8:2,stack:1},{s:"box",w:.1,h:.1,d:.05,L:yt("GAUZE PADS","STERILE 4 x 4 IN","#f4f8fb","#1d5fa8","#3aa7a0","cross","25 PADS"),w8:2,stack:1},{s:"box",w:.08,h:.12,d:.03,L:yt("SLEEP AID","NIGHTTIME","#1a2a5a","#fff","#7fa8d6","moon","32 CAPLETS"),w8:1,stack:1},{s:"bottle",r:.036,h:.23,L:yt("SHAMPOO","DAILY CLEAN","#2a9a9a","#fff","#fff","bubble","12 FL OZ"),cap:"white",body:"teal",w8:2},{s:"jug",w:.1,h:.24,d:.065,L:yt("MOUTHWASH","ANTISEPTIC MINT","#2f7a32","#fff","#f2f1ec","tooth","1 L"),cap:"white",body:"green",w8:1},{s:"box",w:.065,h:.15,d:.065,L:yt("COUGH SYRUP","DM MAX","#b81d18","#fff","#f2c21b","drop","8 FL OZ"),w8:2},{s:"bottle",r:.036,h:.21,L:yt("LOTION","DRY SKIN","#f2f1ec","#1d4f9a","#7fa8d6","drop","16 FL OZ"),cap:"white",body:"white",w8:1},{s:"bottle",r:.03,h:.18,L:yt("HAND SANITIZER","70% ALCOHOL","#cfe3ef","#1d5fa8","#1d5fa8","drop","12 FL OZ"),cap:"blue",body:"clear",w8:2},{s:"bottle",r:.04,h:.21,L:yt("ISOPROPYL","ALCOHOL 70%","#f2f1ec","#1d4f9a","#1d4f9a","drop","32 FL OZ"),cap:"white",body:"clear",w8:2},{s:"bottle",r:.04,h:.21,L:yt("HYDROGEN","PEROXIDE 3%","#f2f1ec","#8a4a1a","#8a4a1a","drop","32 FL OZ"),cap:"white",body:"amber",w8:1},{s:"box",w:.045,h:.19,d:.04,L:yt("TOOTHPASTE","FLUORIDE","#2a6fd6","#fff","#d6283a","tooth","6 OZ"),w8:2},{s:"box",w:.07,h:.15,d:.04,L:yt("DEODORANT","UNSCENTED","#4a4c50","#fff","#7fa8d6","drop","2.6 OZ"),w8:1},{s:"box",w:.1,h:.13,d:.04,L:yt("ORAL SALTS","REHYDRATION","#f4f8fb","#1d5fa8","#3aa7a0","drop","10 SACHETS"),w8:2,stack:1},{s:"box",w:.2,h:.14,d:.07,L:yt("FIRST AID KIT","100 PIECES","#c8201e","#fff","#fff","wcross","HOME CAR WORK",{tf:"#c8201e"}),w8:1},{s:"bag",w:.15,h:.2,d:.1,L:yt("COTTON BALLS","TRIPLE SIZE","#f2f1ec","#d6283a","#e9a0b0","bubble","100 CT"),gl:1,w8:1},{s:"bag",w:.11,h:.15,d:.04,L:yt("COUGH DROPS","HONEY LEMON","#f2c21b","#7a2a10","#c41e1e","drop","30 DROPS"),gl:1,w8:1},{s:"box",w:.065,h:.18,d:.025,L:yt("THERMOMETER","DIGITAL","#f2f1ec","#1d4f9a","#1d4f9a","bolt","ORAL 60 SEC"),w8:1},{s:"box",w:.05,h:.1,d:.03,L:yt("EYE DROPS","LUBRICANT","#f2f1ec","#2a9a9a","#2a9a9a","drop","0.5 FL OZ"),w8:1,stack:1}],hardware:[{s:"can",r:.085,h:.19,L:yt("INTERIOR PAINT","EGGSHELL  WHITE","#f2f1ec","#1d4f9a","#1d4f9a","drop","1 GALLON (3.78 L)"),w8:2},{s:"can",r:.085,h:.19,L:yt("PRIMER","STAIN BLOCKING","#c4221c","#fff","#2a2a2c","drop","1 GALLON"),w8:1},{s:"tall",r:.033,h:.21,L:yt("SPRAY PAINT","GLOSS BLACK","#1c1c1e","#fff","#e8701c","drop","NET WT 12 OZ"),cap:"black",w8:2},{s:"tall",r:.033,h:.21,L:yt("SPRAY PAINT","SAFETY RED","#f2f1ec","#c4221c","#c4221c","drop","NET WT 12 OZ"),cap:"red",w8:1},{s:"tall",r:.03,h:.2,L:yt("PENETRATING","OIL  FREES RUST","#1d4f9a","#f2c21b","#f2c21b","drop","NET WT 11 OZ"),cap:"blue",w8:2},{s:"box",w:.14,h:.09,d:.1,L:yt("WOOD SCREWS","#8 x 2-1/2 IN","#f2c21b","#111","#111","screw","1 LB"),w8:2,stack:1},{s:"box",w:.12,h:.1,d:.08,L:yt("FRAMING NAILS","16D  3-1/2 IN","#c4221c","#fff","#111","screw","5 LB"),w8:2,stack:1},{s:"tall",r:.025,h:.23,L:yt("SILICONE","SEALANT  CLEAR","#f2f1ec","#1d4f9a","#1d4f9a","drop","10.1 FL OZ"),cap:"white",w8:2},{s:"roll",r:.056,h:.048,cap:"tin",w8:2,stack:2,L:yt("DUCT TAPE","","#c9ccd0","#333","#c9ccd0")},{s:"box",w:.18,h:.2,d:.08,L:yt("EXTENSION CORD","25 FT  OUTDOOR","#e8701c","#fff","#1c1c1e","bolt","16/3 GAUGE"),w8:1},{s:"box",w:.075,h:.12,d:.07,L:yt("LED BULBS","60W EQUAL 4 PACK","#f2f1ec","#1d4f9a","#f2c21b","sun","SOFT WHITE"),w8:2,stack:1},{s:"bottle",r:.026,h:.15,L:yt("WOOD GLUE","INTERIOR","#f2c21b","#7a2a10","#7a2a10","drop","8 FL OZ"),cap:"orange",body:"white",w8:1},{s:"bag",w:.12,h:.24,d:.03,L:yt("WORK GLOVES","LEATHER PALM","#f2c21b","#111","#111","bolt","ONE PAIR  L"),gl:1,w8:2},{s:"bag",w:.1,h:.25,d:.02,L:yt("ZIP TIES","8 IN  BLACK","#cfdde4","#111","#c4221c","bolt","100 PACK"),gl:1,w8:1},{s:"jar",r:.07,h:.12,L:yt("SPACKLE","LIGHTWEIGHT","#f2f1ec","#1d4f9a","#c4221c","drop","1 QT"),cap:"white",body:"white",w8:1},{s:"box",w:.1,h:.16,d:.03,L:yt("AA BATTERIES","ALKALINE","#111","#f2c21b","#c98a2a","battery","8 PACK"),w8:2,stack:1},{s:"can",r:.035,h:.1,L:yt("PVC CEMENT","MEDIUM BODY","#4a4c50","#fff","#c4221c","drop","8 FL OZ"),cap:"red",w8:1,stack:1},{s:"box",w:.12,h:.2,d:.02,L:yt("SANDPAPER","ASSORTED GRIT","#e8701c","#fff","#1c1c1e","grain","12 SHEETS"),w8:1},{s:"box",w:.15,h:.15,d:.08,L:yt("NYLON ROPE","3/8 IN x 50 FT","#f2f1ec","#c4221c","#c4221c","bolt","WORKING LOAD 244 LB"),w8:2},{s:"roll",r:.05,h:.048,cap:"card",w8:1,stack:2,L:yt("MASKING","","#e8dcb0","#333","#e8dcb0")},{s:"jug",w:.1,h:.2,d:.06,L:yt("MOTOR OIL","5W-30 SYNTHETIC","#1c1c1e","#f2c21b","#f2c21b","drop","1 QUART"),cap:"black",body:"black",w8:2},{s:"box",w:.22,h:.16,d:.1,L:yt("UTILITY KNIFE","RETRACTABLE + 5 BLADES","#c4221c","#fff","#1c1c1e","bolt","CARDED"),w8:1}],outdoor:[{s:"tall",r:.056,h:.22,L:yt("PROPANE","CAMPING FUEL","#2f7a32","#fff","#1d4a20","flame","16.4 OZ"),cap:"brass",w8:3},{s:"can",r:.055,h:.1,L:yt("BUTANE","ISOBUTANE MIX","#1d4f9a","#fff","#e8701c","flame","8 OZ (227g)"),cap:"tin",w8:2,stack:1},{s:"box",w:.15,h:.26,d:.075,L:yt("CAMP FUEL","WHITE GAS","#c4221c","#fff","#f2c21b","flame","1 GALLON"),gl:1,w8:1},{s:"bag",w:.17,h:.24,d:.05,L:yt("BEEF STROGANOFF","FREEZE-DRIED MEAL","#2a3a2a","#f2c21b","#e8701c","noodle","2 SERVINGS"),gl:1,w8:2},{s:"bag",w:.17,h:.24,d:.05,L:yt("CHILI MAC","FREEZE-DRIED MEAL","#4a2412","#f2c21b","#c4221c","chili","2 SERVINGS"),gl:1,w8:2},{s:"box",w:.3,h:.22,d:.05,L:yt("TARP","ALL PURPOSE 8 x 10 FT","#1d4f9a","#fff","#f2c21b","drop","WATERPROOF"),w8:1},{s:"box",w:.16,h:.26,d:.16,L:yt("LED LANTERN","1000 LUMENS","#1c1c1e","#e8701c","#e8701c","sun","USES 3 D CELLS"),w8:1},{s:"box",w:.3,h:.12,d:.25,L:yt("CAMP STOVE","TWO BURNER","#2f7a32","#fff","#1c1c1e","flame","PROPANE"),w8:1,wide:1},{s:"tall",r:.03,h:.17,L:yt("BUG SPRAY","25% DEET","#2f7a32","#fff","#f2c21b","bug","6 OZ"),cap:"green",w8:2},{s:"bottle",r:.03,h:.16,L:yt("SUNSCREEN","SPF 50 SPORT","#f2c21b","#1d4f9a","#e8701c","sun","8 FL OZ"),cap:"blue",body:"yellow",w8:1},{s:"bag",w:.1,h:.14,d:.02,L:yt("HAND WARMERS","UP TO 10 HRS","#e0521c","#fff","#2a2a2c","flame","1 PAIR"),gl:1,w8:2,stack:1},{s:"bottle",r:.042,h:.21,L:yt("WATER BOTTLE","BPA FREE 32 OZ","#cfdde4","#1d4f9a","#1d4f9a","drop","WIDE MOUTH"),cap:"black",body:"clear",w8:1},{s:"can",r:.12,h:.36,L:yt("SLEEPING BAG","RATED 30 F","#2a5ab8","#fff","#1c1c1e","snow","STUFF SACK INCLUDED"),cap:"black",w8:1},{s:"box",w:.1,h:.13,d:.04,L:yt("FIRE STARTERS","WATERPROOF","#c4221c","#fff","#f2c21b","flame","12 PIECES"),w8:2,stack:1},{s:"box",w:.1,h:.2,d:.05,L:yt("WATER FILTER","SQUEEZE SYSTEM","#2a6fd6","#fff","#fff","drop","0.1 MICRON"),w8:1},{s:"bag",w:.1,h:.15,d:.02,L:yt("EMERGENCY BLANKET","MYLAR","#c9ccd0","#c4221c","#c4221c","sun","52 x 82 IN"),gl:1,w8:1,stack:1},{s:"box",w:.1,h:.18,d:.04,L:yt("HEADLAMP","300 LUMENS","#1c1c1e","#f2c21b","#f2c21b","sun","BATTERIES INCLUDED"),w8:1},{s:"box",w:.18,h:.08,d:.18,L:yt("MESS KIT","5 PIECE","#4a4c50","#fff","#e8701c","flame","ALUMINUM"),w8:1,stack:1},{s:"box",w:.11,h:.07,d:.035,L:yt("MATCHES","STRIKE ANYWHERE","#f2c21b","#c41e1e","#c41e1e","flame","250 CT"),w8:1,stack:2}],convenience:[{s:"can",r:.033,h:.122,L:{t:"COLA",s:"CLASSIC",n:"12 FL OZ",b:"#a8141a",f:"#fff",a:"#5a0a0a",p:"bubble"},cap:"tin",w8:2,stack:1,gl:1},{s:"can",r:.033,h:.122,L:{t:"LEMON LIME",s:"CAFFEINE FREE",n:"12 FL OZ",b:"#2f8a3a",f:"#f6ee4a",a:"#0f4a1a",p:"bubble"},cap:"tin",w8:2,stack:1,gl:1},{s:"can",r:.029,h:.16,L:yt("ENERGY","DRINK","#1c1c1e","#7fd62a","#7fd62a","bolt","16 FL OZ"),cap:"tin",w8:2,gl:1},{s:"bottle",r:.033,h:.21,L:yt("SPRING WATER","NATURAL","#e9f2f6","#1d5fa8","#3d8fd6","drop","16.9 FL OZ"),cap:"blue",body:"clear",w8:3},{s:"bottle",r:.036,h:.21,L:yt("SPORTS DRINK","GLACIER","#111","#fff","#2a7fd6","bolt","28 FL OZ"),cap:"blue",body:"blue",w8:2},{s:"bottle",r:.036,h:.245,L:yt("ORANGE SODA","","#e8701c","#fff","#1d4f9a","bubble","20 FL OZ"),cap:"orange",body:"orange",w8:1},{s:"bag",w:.2,h:.28,d:.07,L:yt("POTATO CHIPS","SEA SALT","#f2c21b","#c41e1e","#c41e1e","chip","8 OZ"),gl:1,w8:2},{s:"bag",w:.2,h:.28,d:.07,L:yt("TORTILLA CHIPS","NACHO","#c4221c","#fff","#f2c21b","chip","9.75 OZ"),gl:1,w8:2},{s:"box",w:.2,h:.06,d:.1,L:yt("CHOCOLATE BARS","MILK  36 CT","#4a2412","#f2c21b","#c4221c","bean","DISPLAY BOX"),w8:2,stack:2,wide:1},{s:"bag",w:.14,h:.2,d:.035,L:yt("BEEF JERKY","ORIGINAL","#2a2420","#f2c21b","#8a2a12","meat","3.25 OZ"),gl:1,w8:2},{s:"cup",r:.05,h:.1,L:yt("INSTANT NOODLES","SPICY BEEF","#f4f1ea","#c41e1e","#c41e1e","noodle","2.25 OZ"),cap:"white",w8:2,stack:1},{s:"jug",w:.1,h:.2,d:.06,L:yt("MOTOR OIL","10W-30","#1c1c1e","#f2c21b","#f2c21b","drop","1 QUART"),cap:"black",body:"black",w8:1},{s:"box",w:.1,h:.16,d:.03,L:yt("AA BATTERIES","ALKALINE","#111","#f2c21b","#c98a2a","battery","4 PACK"),w8:1,stack:1},{s:"box",w:.22,h:.1,d:.11,L:yt("TISSUES","2-PLY","#7fa8d6","#fff","#1d4f9a","bubble","160 SHEETS"),w8:1,wide:1,stack:1},{s:"box",w:.2,h:.08,d:.12,L:yt("SNACK CAKES","CREME FILLED","#f2f1ec","#c4221c","#e9a0b0","sun","8 CAKES"),w8:1,wide:1,stack:1},{s:"bag",w:.15,h:.22,d:.05,L:yt("TRAIL MIX","NUTS & RAISINS","#3a5a2a","#f2c21b","#e8701c","peanut","10 OZ"),gl:1,w8:1},{s:"can",r:.042,h:.09,L:yt("ROASTED PEANUTS","SALTED","#1d4f9a","#f2c21b","#f2c21b","peanut","16 OZ"),cap:"tin",w8:1,stack:1},{s:"box",w:.08,h:.05,d:.06,L:yt("GUM","SPEARMINT","#2f7a32","#fff","#fff","leaf","15 STICKS"),w8:1,stack:2},{s:"bottle",r:.03,h:.2,L:yt("ICED TEA","LEMON","#f2c21b","#7a2a10","#7a2a10","leaf","18.5 FL OZ"),cap:"yellow",body:"amber",w8:1}]},No=2048,Oo=1024,ai=256,xu=8,Uu=31,Du=30,yu=12763324,ef=[{t:"SALE",b:"#c4221c",f:"#fff",a:"#f2c21b"},{t:"SEASONAL",b:"#2f6a3a",f:"#fff",a:"#c9a24a"},{t:"BACK TO SCHOOL",b:"#1d4f9a",f:"#fff",a:"#f2c21b"},{t:"CLEARANCE",b:"#f2c21b",f:"#1c1c1e",a:"#c4221c"}];function vy(n,t){let[e,i]=Fs(Du);ef.forEach((s,r)=>{let o=i+r*64;n.fillStyle=s.b,n.fillRect(e,o,256,64),n.fillStyle=s.a,n.fillRect(e,o+4,256,4),n.fillRect(e,o+56,256,4),kt(n,s.t,e+128,o+33,34,{color:s.f,maxW:236,font:bi});for(let l=0;l<140;l++)n.fillStyle=`rgba(${t()<.5?"0,0,0":"255,255,255"},${.05+t()*.08})`,n.fillRect(e+t()*256,o+t()*64,2,2);let a=n.createLinearGradient(0,o,0,o+64);a.addColorStop(0,"rgba(60,50,30,0)"),a.addColorStop(1,"rgba(60,50,30,0.3)"),n.fillStyle=a,n.fillRect(e,o,256,64)})}function My(n){let[t,e]=Fs(Du);return pl(t+1,e+n*64+1,254,62)}function Fs(n){return[n%xu*ai,Math.floor(n/xu)*ai]}function Sy(n){if(n.s==="box"||n.s==="bag"||n.s==="jug")return[256,Math.round(256*n.h/n.w)];let t=n.r,e=n.s==="bottle"?n.h*.55:n.s==="jar"?n.h*.85:n.s==="tall"?n.h*.78:n.h;return[512,Math.max(60,Math.round(512*e/(At*t)))]}function Ey(n){return en(Eu,"atlas|"+n,()=>{let t=Tu(No,Oo);if(!t)return null;let e=t.getContext("2d");e.fillStyle="#888",e.fillRect(0,0,No,Oo);let i=Qi(Bs("atlas"+n));Gr[n].forEach((a,l)=>{let[c,f]=Fs(l),[h,u]=Sy(a);e.save(),e.beginPath(),e.rect(c,f,ai,ai),e.clip(),e.translate(c,f),e.scale(ai/h,ai/u),a.s==="roll"?Me(e,h,u,i,a.L.b,.08,400,2):a.s==="box"||a.s==="bag"||a.s==="jug"?Ru(e,h,u,a.L,i):Au(e,h,u,a.L,i),e.restore(),e.fillStyle=a.L.b,e.fillRect(c,f+ai*.3,12,ai*.6)});let[s,r]=Fs(Uu);_y.forEach((a,l)=>{let c=s+l%4*64,f=r+Math.floor(l/4)*64;e.fillStyle=a,e.fillRect(c,f,64,64);for(let h=0;h<120;h++)e.fillStyle=i()<.5?"rgba(0,0,0,0.06)":"rgba(255,255,255,0.08)",e.fillRect(c+i()*64,f+i()*64,2,2)}),vy(e,i),e.save(),e.globalCompositeOperation="saturation",e.globalAlpha=.28,e.fillStyle="#808080",e.fillRect(0,0,No,Oo),e.restore();let o=new On(t);return o.colorSpace=$e,o.anisotropy=4,o})}function pl(n,t,e,i){return[n/No,1-(t+i)/Oo,(n+e)/No,1-t/Oo]}function Ty(n){let[t,e]=Fs(n);return pl(t+2,e+2,ai-4,ai-4)}function wy(n){let[t,e]=Fs(n);return pl(t+3,e+ai*.35,6,ai*.45)}function ku(n){let t=by[n]??0,[e,i]=Fs(Uu);return pl(e+t%4*64+12,i+Math.floor(t/4)*64+12,40,40)}var _u=new WeakMap;function Ay(n){let t=_u.get(n);if(t)return t;t=new Uint8Array(n.attributes.position.count);let e=n.index;for(let i of n.groups)for(let s=i.start;s<i.start+i.count;s++)t[e?e.getX(s):s]=i.materialIndex;return _u.set(n,t),t}var _i=class{constructor(t){this.b=[];for(let e=0;e<t;e++)this.b.push({p:[],n:[],u:[],i:[]})}add(t,e,i,s){this.root&&(e=new re().multiplyMatrices(this.root,e));let r=t.attributes.position,o=t.attributes.normal,a=t.attributes.uv,l=t.index,c=Ay(t),f=new me().getNormalMatrix(e),h=e.elements,u=f.elements,d=new Int32Array(r.count),m=new Uint8Array(r.count);for(let g=0;g<r.count;g++){let p=c[g],_=s[p]??s[0],y=this.b[_];m[g]=_,d[g]=y.p.length/3;let b=r.getX(g),L=r.getY(g),R=r.getZ(g);y.p.push(h[0]*b+h[4]*L+h[8]*R+h[12],h[1]*b+h[5]*L+h[9]*R+h[13],h[2]*b+h[6]*L+h[10]*R+h[14]);let w=o.getX(g),P=o.getY(g),T=o.getZ(g),M=u[0]*w+u[3]*P+u[6]*T,U=u[1]*w+u[4]*P+u[7]*T,W=u[2]*w+u[5]*P+u[8]*T,F=Math.hypot(M,U,W)||1;y.n.push(M/F,U/F,W/F);let H=i[p]??i[0];y.u.push(H[0]+a.getX(g)*(H[2]-H[0]),H[1]+a.getY(g)*(H[3]-H[1]))}let x=l?l.count:r.count;for(let g=0;g<x;g+=3){let p=l?l.getX(g):g,_=l?l.getX(g+1):g+1,y=l?l.getX(g+2):g+2;this.b[m[p]].i.push(d[p],d[_],d[y])}}meshes(t){let e=[];return this.b.forEach((i,s)=>{if(!i.i.length)return;let r=new De;r.setAttribute("position",new ue(i.p,3)),r.setAttribute("normal",new ue(i.n,3)),r.setAttribute("uv",new ue(i.u,2)),r.setIndex(i.p.length/3>65535?new Er(i.i,1):new Sr(i.i,1)),r.computeBoundingSphere(),r.computeBoundingBox();let o=new Xt(r,t[s]);o.receiveShadow=!0,e.push(o)}),e}};function Ry(n,t){return en(pn,`prod|${n}|${t}`,()=>{let e=Gr[n][t],i=Ty(t),s=wy(t),r=u=>ku(u),o=e.gl?1:0,a=new re,l=(u,d,m)=>new re().makeTranslation(u,d,m),c=[];switch(e.s){case"can":c.push({geo:K(e.r,e.r,e.h,12),m:a,rects:[i,r(e.cap||"tin"),r(e.cap||"tin")],bk:[o,1,1]});break;case"tall":c.push({geo:K(e.r,e.r,e.h*.78,10),m:a,rects:[i,r("tin"),r("tin")],bk:[o,1,1]}),c.push({geo:K(e.r*.94,e.r*.94,e.h*.22,10),m:l(0,e.h*.78,0),rects:[r(e.cap||"white"),r(e.cap||"white"),r(e.cap||"white")],bk:[1,1,1]});break;case"box":c.push({geo:J(e.w,e.h,e.d),m:a,rects:[s,s,s,s,i,i],bk:[o,o,o,o,o,o]});break;case"bag":c.push({geo:Do(e.w,e.h,e.d,.06,4,5),m:a,rects:[s,s,s,s,i,i],bk:[o,o,o,o,o,o]});break;case"bottle":{let u=r(e.body||"white");c.push({geo:K(e.r,e.r,e.h*.55,10),m:l(0,e.h*.05,0),rects:[i,u,u],bk:[1,1,1]}),c.push({geo:K(e.r,e.r*.95,e.h*.05,10,!0),m:a,rects:[u],bk:[1]}),c.push({geo:K(e.r*.38,e.r,e.h*.25,10,!0),m:l(0,e.h*.6,0),rects:[u],bk:[1]});let d=r(e.cap||"white");c.push({geo:K(e.r*.42,e.r*.42,e.h*.15,8),m:l(0,e.h*.85,0),rects:[d,d,d],bk:[1,1,1]});break}case"jar":{let u=r(e.body||"white"),d=r(e.cap||"white");c.push({geo:K(e.r,e.r,e.h*.85,10),m:a,rects:[i,u,u],bk:[o,1,1]}),c.push({geo:K(e.r*.9,e.r*.9,e.h*.15,10),m:l(0,e.h*.85,0),rects:[d,d,d],bk:[1,1,1]});break}case"jug":{let u=r(e.body||"white"),d=r(e.cap||"white");c.push({geo:J(e.w,e.h*.8,e.d),m:a,rects:[u,u,u,u,i,i],bk:[1,1,1,1,0,0]}),c.push({geo:K(e.w*.2,e.w*.42,e.h*.08,8,!0),m:l(-e.w*.15,e.h*.8,0),rects:[u],bk:[1]}),c.push({geo:K(e.w*.2,e.w*.2,e.h*.12,8),m:l(-e.w*.15,e.h*.88,0),rects:[d,d,d],bk:[1,1,1]});break}case"cup":{let u=r(e.cap||"white");c.push({geo:K(e.r,e.r*.76,e.h,12),m:a,rects:[i,u,u],bk:[0,1,0]});break}case"roll":{let u=r(e.cap||"tin");c.push({geo:K(e.r,e.r,e.h,12),m:a,rects:[i,r("card"),r("card")],bk:[1,0,0]}),c.push({geo:K(e.r*.68,e.r*.68,.002,10),m:l(0,e.h,0),rects:[u,r("dark"),r("dark")],bk:[0,0,0]});break}}let f=e.w??e.r*2,h=e.d??e.r*2;return{p:e,parts:c,w:f,h:e.h,d:h}})}function ul(n,t,e,i,s,r,o,a=0){let l=new re().makeRotationY(r);if(o){let h=a?new re().makeRotationX(o):new re().makeRotationZ(o);l.multiply(h)}let c=1/0,f=new N;for(let h of[-1,1])for(let u of[0,1])for(let d of[-1,1])f.set(h*t.w/2,u*t.h,d*t.d/2).applyMatrix4(l),c=Math.min(c,f.y);l.setPosition(e,i-c,s);for(let h of t.parts){let u=new re().multiplyMatrices(l,h.m);n.add(h.geo,u,h.rects,h.bk)}}function Fu(n){let t=Ey(n);return[ee("shelfMatte|"+n,{map:t,color:yu,roughness:.78,metalness:0}),ee("shelfGloss|"+n,{map:t,color:yu,roughness:.4,metalness:.2})]}function Bu(n){let t=Gr[n],e=t.map((s,r)=>Ry(n,r)),i=t.reduce((s,r)=>s+(r.w8||1),0);return{cat:t,tpls:e,total:i}}function zu(n,t,e,i,s,r,o=.385,a=.02,l=.42){let{cat:c,tpls:f,total:h}=Bu(t),u=(y,b)=>{for(let R=0;R<12;R++){let w=e()*h,P=0;for(;w>(c[P].w8||1);)w-=c[P].w8||1,P++;if(f[P].h<=y&&f[P].d<=b)return P}let L=0;return f.forEach((R,w)=>{R.h*R.d<f[L].h*f[L].d&&(L=w)}),f[L].h<=y?L:-1},d=1-r,m=d*.45,x=Math.min(1,r/(1-m)),g=[...s].sort((y,b)=>y-b),p=0,_=0;return g.forEach((y,b)=>{let L=(b+1<g.length?g[b+1]-y:l)-.035,R=[],w=-i/2+.015;for(;w<i/2-.05;){let T=u(L,o-a);if(T<0)break;let M=f[T],U=M.p,W=.25+e()*.45,F=Math.max(1,Math.round(W/(M.w+.004))),H=e()<m,ot=Math.max(1,Math.min(U.wide?2:3,Math.floor((o-a)/(M.d+.004)))),j=w;for(let ut=0;ut<F&&w+M.w<i/2-.01;ut++){let tt=w+M.w/2;if(w+=M.w+.004+(r<.6?e()*.01:0),H&&e()<.92)continue;let Tt=r>.92?ot:Math.min(ot,Math.max(0,Math.round(ot*x*(.45+e()*1.1)-.15)));Tt===0&&R.push(tt);for(let Rt=0;Rt<Tt;Rt++){let Bt=r>.85?0:(ot-Tt)*(M.d+.004)*(.3+e()*.7),oe=o-M.d/2-(Tt-1-Rt)*(M.d+.004)-Bt,ye=Math.PI/2+(e()-.5)*(.04+d*.5),st=0,vt=0;if(Rt===Tt-1&&e()<d*.3?(st=Math.PI/2*(e()<.5?1:-1),vt=e()<.5?1:0,ye+=(e()-.5)*1.2,_++):e()<d*.1&&(ye+=(e()-.5)*2.5),ul(n,M,Math.max(a+M.d/2,oe),y,tt+(e()-.5)*d*.02,ye,st,vt),p++,U.stack&&!st&&r>.45){let Vt=Math.min(U.stack+1,Math.floor(L/(M.h+.002)));for(let St=1;St<Vt&&!(e()>r*1.05);St++)ul(n,M,Math.max(a+M.d/2,oe)+(e()-.5)*.004,y+St*(M.h+.001),tt+(e()-.5)*.006,ye+(e()-.5)*.08,0),p++}}}if(H)for(let ut=j+.08;ut<w-.08;ut+=.16)R.push(ut);w+=e()<.15+d*.3?e()*.08:.002}let P=Math.round(d*d*i*2.2*(.6+e()*.8));for(let T=0;T<P&&R.length;T++){let M=R.splice(Math.floor(e()*R.length),1)[0],U=u(Math.min(L,.3),o-a);if(U<0)continue;let W=f[U];if(Math.max(W.w,W.d,W.h)>o-a+.06&&e()<.5)continue;let H=Math.min(o-.05,Math.max(a+.06,o-.04-e()*.15));ul(n,W,H,y,M+(e()-.5)*.05,e()*At,Math.PI/2,e()<.5?1:0),p++,_++}}),{count:p,tipped:_}}function Hu(n="grocery",t=2,e=[.1,.5,.9,1.3],i=.7,s=0){Gr[n]||(n="grocery");let r=Qi(Bs(n)^Math.imul((s|0)+7,2654435761));i=gs.clamp(i,0,1);let o=new _i(2),{count:a,tipped:l}=zu(o,n,r,t,e,i),{tpls:c}=Bu(n),f=Math.round((1-i)*t*(1+r()*1.2));for(let m=0;m<f;m++){let x=c[Math.floor(r()*c.length)];x.h>.32||(ul(o,x,.45+r()*.85,0,(r()-.5)*(t-.2),r()*At,r()<.75?Math.PI/2:0,r()<.5?1:0),a++,l++)}let h=new Ht;h.name="shelfFill:"+n;let u=o.meshes(Fu(n)),d=0;for(let m of u)h.add(m),d+=m.geometry.index.count/3;return h.userData={kind:n,items:a,fallen:l,triangles:d,drawCalls:u.length},h}function Gu(n="grocery",t=1.2,e=1.9,i=.6,s=0,r=.55,o={}){Gr[n]||(n="grocery");let a=Qi(Bs("endcap"+n)^Math.imul((s|0)+13,2654435761));i=gs.clamp(i,0,1);let l=t,c=r,f=e,h=new _i(2),u=H=>ku(H),d=(H,ot,j,ut,tt,Tt,Rt,Bt=0)=>{let oe=new re().makeTranslation((H+ot)/2,j,(tt+Tt)/2);h.add(J(Math.max(.002,ot-H),Math.max(.002,ut-j),Math.max(.002,Tt-tt)),oe,Array.isArray(Rt)?Rt:[Rt],[Bt])},m=Math.min(.26,f*.14),x=f-m-.06,g=x>1.55?4:3,p=.12,_=x-.32,y=[];for(let H=0;H<g;H++)y.push(p+(_-p)*H/(g-1));if(o.unit!==!1){let H=u("tin"),ot=u("dark"),j=u("white");d(-l/2,l/2,0,p,-c/2+.03,c/2,[ot]),d(-l/2,l/2,0,x,-c/2,-c/2+.03,[H]);for(let ut of[-1,1])d(ut<0?-l/2:l/2-.025,ut<0?-l/2+.025:l/2,0,x,-c/2,c/2,[H]);for(let ut of y.slice(1))d(-l/2+.025,l/2-.025,ut-.02,ut,-c/2+.03,c/2-.01,[H]),d(-l/2+.025,l/2-.025,ut-.045,ut,c/2-.012,c/2,[j]);d(-l/2,l/2,x-.03,x,-c/2,c/2,[H])}let b=o.sign??Math.floor(a()*ef.length),L=Math.min(l-.06,m*4),R=f-m;for(let H of[-1,1])d(H*L*.3-.012,H*L*.3+.012,x,R+.02,-.012,.012,[u("tin")],1);let w=(a()-.5)*.12*(1-i),P=new re().makeTranslation(0,R,0).multiply(new re().makeRotationZ(w)),T=My(b);h.add(J(L,m*.98,.012),P,[u("white"),u("white"),u("white"),u("white"),T,T],[0]),h.root=new re().makeRotationY(-Math.PI/2);let M=zu(h,n,a,l-.07,y,i,c/2-.015,-c/2+.035,x-y[y.length-1]);h.root=null;let U=new Ht;U.name="endcap:"+n;let W=h.meshes(Fu(n)),F=0;for(let H of W)H.castShadow=!0,U.add(H),F+=H.geometry.index.count/3;return U.userData={kind:n,w:l,d:c,h:f,levels:y,sign:ef[b].t,items:M.count,fallen:M.tipped,triangles:F,drawCalls:W.length},U}var a_=Object.keys(Gr);function bu(n,t,e=1){return en(pn,"quads"+n,()=>{let i=[],s=[],r=new N,o=new N,a=new N,l=new N;for(let f of t){r.fromArray(f[0]),o.fromArray(f[1]),a.fromArray(f[2]),l.fromArray(f[3]);let h=r.distanceTo(o)*e,u=r.distanceTo(l)*e;i.push(...f[0],...f[1],...f[2],...f[0],...f[2],...f[3]),s.push(0,0,h,0,h,u,0,0,h,u,0,u)}let c=new De;return c.setAttribute("position",new ue(i,3)),c.setAttribute("uv",new ue(s,2)),c.computeVertexNormals(),c})}function Cy(){return bt("wiregrid",64,64,(n,t,e)=>{n.clearRect(0,0,t,e),n.fillStyle="#d4d8dc",n.fillRect(0,0,t,7),n.fillRect(0,32,t,7),n.fillRect(0,0,7,e),n.fillRect(32,0,7,e),n.fillStyle="rgba(255,255,255,0.6)",n.fillRect(0,2,t,2),n.fillRect(0,34,t,2),n.fillRect(2,0,2,e),n.fillRect(34,0,2,e)},{repeat:[1,1]})}function Iy(){return ee("wiremat",{map:Cy(),color:14672870,roughness:.35,metalness:.45,alphaTest:.5,side:we,transparent:!1})}function un(n,t,e,i,s,r=!1,o=24){return v(n,Un(t,e,i,o,6,r),s)}function fl(n,t=.04){let e=[],i=n.length,s=n.map(r=>new N(...r));for(let r=0;r<i;r++){let o=s[(r+i-1)%i],a=s[r],l=s[(r+1)%i],c=o.clone().sub(a).normalize().multiplyScalar(t).add(a),f=l.clone().sub(a).normalize().multiplyScalar(t).add(a),h=c.clone().add(f).multiplyScalar(.5).lerp(a,.45);e.push(c.toArray(),h.toArray(),f.toArray())}return e}function hl(n,t,e,i=.05){v(n,K(i,i,.03,10),nt.rubber,t+.015,i,e,0,0,Math.PI/2),v(n,K(i*.5,i*.5,.032,8),nt.greyPl,t+.016,i,e,0,0,Math.PI/2),v(n,J(.012,i*1.4,.045),nt.steel,t+.018,i*.9,e),v(n,J(.012,i*1.4,.045),nt.steel,t-.018,i*.9,e),v(n,J(.05,.012,.05),nt.steel,t,i*2.2,e)}function Py(n,t,e,i,s,r,o,a=0){v(n,Le(s-r,r,5,24),nt.rubber,t,e,i,0,Math.PI/2,0),v(n,Le(s-r*2.2,r*.4,3,24),o,t,e,i,0,Math.PI/2,0),v(n,K(.025,.025,.05,10),o,t-.025,e,i,0,0,Math.PI/2);for(let l=0;l<a;l++)v(n,K(.0025,.0025,(s-r*2.2)*2,4),o,t,e,i,l*Math.PI/a,0,0,1,1,1)}function Ly(n,t,e,i){return q(bt(n,t,e,i),.5)}function J0(n,t,e,i,s,r){let o=qt(s,["FRAGILE","CANNED GOODS","PAPER TOWELS","BOTTLED WATER","SUPPLIES","HANDLE WITH CARE","PRODUCE","DRY GOODS"]),a=q(sf(o,Math.floor(s()*4)),.9),l=q(xs(),.9),c=r?et(2760728,.95):q(bt("cartontop",256,256,(f,h,u,d)=>{Me(f,h,u,d,"#a9824f",.1,2500,2),f.fillStyle="rgba(40,25,10,0.5)",f.fillRect(0,u/2-1,h,2),f.fillStyle="rgba(200,170,110,0.8)",f.fillRect(0,u*.42,h,u*.16),f.fillStyle="rgba(255,255,255,0.18)",f.fillRect(0,u*.44,h,3),ae(f,h,u,d,1)}),.85);v(n,J(t,e,i),[a,a,c,l,a,a])}var Uo={shopping_cart(n,t){let e=Iy(),i=et(13225425,.3,.5),s=[[-.27,1,.45],[.27,1,.45],[.25,.98,-.45],[-.25,.98,-.45]],r=[[-.23,.55,.38],[.23,.55,.38],[.19,.6,-.36],[-.19,.6,-.36]],o=[[r[0],r[3],s[3],s[0]],[r[2],r[1],s[1],s[2]],[r[3],r[2],s[2],s[3]],[r[1],r[0],s[0],s[1]],[r[0],r[1],r[2],r[3]],[[-.22,.16,.38],[.22,.16,.38],[.2,.16,-.36],[-.2,.16,-.36]]];v(n,bu("cart",o,30),e),un(n,"cartrim2",fl(s,.04),.008,i,!0,60),un(n,"cartbot2",fl(r,.03),.006,i,!0,60);for(let l of[-1,1])un(n,"cartbase"+l,[[l*.2,.13,-.4],[l*.22,.13,.1],[l*.24,.14,.42],[l*.25,.5,.45],[l*.27,.98,.47]],.012,i,!1,20),un(n,"cartstrut"+l,[[l*.19,.6,-.36],[l*.2,.14,-.36]],.009,i,!1,2);let a=et(12853788,.45);v(n,K(.016,.016,.58,12),a,-.29,1.03,.5,0,0,-Math.PI/2);for(let l of[-1,1])v(n,K(.008,.008,.06,6),i,l*.27,1,.485,.7,0,0);v(n,J(.3,.06,.004),Ly("cartplate",256,64,(l,c,f)=>{l.fillStyle="#c4221c",l.fillRect(0,0,c,f),kt(l,"PLEASE RETURN CART",c/2,f/2,22,{color:"#fff",maxW:c*.9})}),0,.88,-.455);for(let[l,c]of[[-.2,-.38],[.2,-.38],[-.22,.4],[.22,.4]])hl(n,l,c,.055);t()<.4&&(n.rotation.y=t()*At)},basket(n,t){let e=qt(t,["#c4221c","#1d4f9a","#2f7a32"]),i=bt("basketholes"+e,64,64,(a,l,c)=>{a.fillStyle=e,a.fillRect(0,0,l,c),a.clearRect(8,10,20,12),a.clearRect(36,10,20,12),a.clearRect(8,40,20,12),a.clearRect(36,40,20,12)},{repeat:[1,1]}),s=ee("basket"+e,{map:i,roughness:.5,alphaTest:.5,side:we}),r=[[-.22,.22,.16],[.22,.22,.16],[.22,.22,-.16],[-.22,.22,-.16]],o=[[-.19,0,.13],[.19,0,.13],[.19,0,-.13],[-.19,0,-.13]];v(n,bu("basket",[[o[0],o[1],r[1],r[0]],[o[1],o[2],r[2],r[1]],[o[2],o[3],r[3],r[2]],[o[3],o[0],r[0],r[3]]],12),s),v(n,J(.38,.01,.26),et(new jt(e).getHex(),.5)),un(n,"basketrim2",fl(r,.03),.01,et(new jt(e).getHex(),.45),!0,24);for(let a of[-1,1])un(n,"baskethandle"+a,[[-.2,.22,a*.16],[-.12,.36,a*.06],[.12,.36,a*.06],[.2,.22,a*.16]],.009,nt.blackPl,!1,16)},cardboard_box(n,t){let e=.3+t()*.3,i=.22+t()*.25,s=.25+t()*.2,r=t()<.5;if(J0(n,e,i,s,t,r),r){let o=q(xs(1),.9),a=(l,c,f,h,u,d,m,x)=>{let g=new Ht;v(g,J(f,.004,h),o,u,0,d),g.position.set(l,i,c),g.rotation.set(m,0,x),n.add(g)};a(0,s/2,e,s/2,0,s/4,(t()-.25)*1.5,0),a(0,-s/2,e,s/2,0,-s/4,-(t()-.25)*1.5,0),a(e/2,0,e/2,s,e/4,0,0,-(t()-.25)*1.5),a(-e/2,0,e/2,s,-e/4,0,0,(t()-.25)*1.5)}},box_stack(n,t){let e=1+Math.floor(t()*2);for(let i=0;i<e;i++){let s=0,r=2+Math.floor(t()*3),o=.4+t()*.15,a=.32+t()*.1;for(let l=0;l<r;l++){let c=.25+t()*.15,f=new Ht;J0(f,o*(.9+t()*.1),c,a*(.9+t()*.1),t,!1),f.position.set(i*.6+(t()-.5)*.06,s,(t()-.5)*.06),f.rotation.y=(t()-.5)*.25,n.add(f),s+=c}}if(t()<.5){let i=new Ht;J0(i,.4,.3,.3,t,!1),i.position.set(-.55,.2,.3),i.rotation.set(Math.PI/2,t()*2,0),n.add(i)}},pallet(n){let t=q(Br("#b48a5a","#7a5a35","pallet"),.9);for(let e=0;e<7;e++)v(n,J(1.2,.02,.1),t,0,.12,-.45+e*.15);for(let e of[-.45,0,.45])v(n,J(1.2,.1,.1),t,0,.02,e,0,0,0);for(let e=0;e<3;e++)v(n,J(.1,.02,1),t,-.55+e*.55,0,0)},trash_bag(n,t){let e=Math.floor(t()*4),i=en(pn,"trashbag"+e,()=>{let o=new ji(.28,14,10),a=o.attributes.position,l=Qi(77+e),c=Array.from({length:6},()=>[new N(l()-.5,l()-.5,l()-.5).normalize(),.03+l()*.05]),f=new N;for(let h=0;h<a.count;h++){f.set(a.getX(h),a.getY(h),a.getZ(h));let u=f.clone().normalize(),d=0;for(let[m,x]of c)d+=Math.max(0,u.dot(m)-.6)*x*3;d+=(l()-.5)*.015,f.addScaledVector(u,d),f.y*=.8,f.y<-.15&&(f.y=-.15+(f.y+.15)*.15),a.setXYZ(h,f.x*(1+e*.05),f.y+.18,f.z)}return o.computeVertexNormals(),o}),s=qt(t,[1118740,1118740,2046495,6974056]),r=et(s,.3,.1);v(n,i,r),v(n,K(.02,.06,.08,8),r,0,.38+e*0,0),v(n,dn(.03,8,6),r,0,.47,0),v(n,K(.005,.04,.1,6),r,.04,.47,0,0,0,-1.1,1,1,.3),v(n,K(.005,.04,.1,6),r,-.04,.47,0,0,0,1.1,1,1,.3)},trash_pile(n,t){let e=2+Math.floor(t()*3);for(let a=0;a<e;a++){let l=new Ht;Uo.trash_bag(l,Qi(Math.floor(t()*1e9)));let c=t()*At,f=a===0?0:.35+t()*.2;l.position.set(Math.cos(c)*f,0,Math.sin(c)*f),l.rotation.set((t()-.5)*.4,t()*At,(t()-.5)*.4),l.scale.setScalar(.8+t()*.4),n.add(l)}let i=q(yi(qt(t,zr),512,200),.5),s=q(yi({t:"COLA",s:"CLASSIC",n:"12 FL OZ",b:"#a8141a",f:"#fff",a:"#5a0a0a",p:"bubble"},512,150),.35,.3),r=q(oi({t:"CHIPS",b:"#f2c21b",f:"#c41e1e",a:"#c41e1e",p:"chip"},128,160),.35,.3);for(let a=0;a<7;a++){let l=t()*At,c=.4+t()*.6,f=a%3;f===2?v(n,Do(.12,.16,.02,.06,4,5),r,Math.cos(l)*c,.01,Math.sin(l)*c,-Math.PI/2,0,t()*3):v(n,K(f?.033:.038,f?.033:.038,f?.122:.11,10),[f?s:i,nt.tin,nt.tin],Math.cos(l)*c,f?.033:.038,Math.sin(l)*c,Math.PI/2,0,t()*At,1,t()<.5?.6:1,1)}v(n,J(.5,.008,.4),[q(xs(),.9),q(xs(),.9),q(sf("PAPER TOWELS",1),.9),q(xs(),.9),q(xs(),.9),q(xs(),.9)],-.6,.004,.4,0,t()*2,.05);let o=vi("paper_scatter",Math.floor(t()*1e3));o.scale.setScalar(.6),n.add(o)},register(n){let t=et(2763566,.45),e=q(bt("posscreen",256,192,(s,r,o,a)=>{s.fillStyle="#0c0f12",s.fillRect(0,0,r,o),s.fillStyle="rgba(120,140,160,0.12)";for(let l=0;l<6;l++)s.fillRect(12,14+l*26,r*.55,16);for(let l=0;l<8;l++)s.fillRect(r*.66+l%2*40,14+Math.floor(l/2)*40,34,32);s.fillStyle="rgba(255,255,255,0.05)",s.beginPath(),s.moveTo(0,0),s.lineTo(r*.5,0),s.lineTo(0,o*.7),s.fill(),ae(s,r,o,a,1.5)}),.15,.1);v(n,J(.44,.1,.42),[t,t,t,t,q(bt("drawer",256,64,(s,r,o)=>{s.fillStyle="#2a2b2e",s.fillRect(0,0,r,o),s.fillStyle="#111",s.fillRect(8,6,r-16,2),s.fillRect(r/2-20,o/2,40,6),s.fillStyle="#888",s.beginPath(),s.arc(r-30,o/2,6,0,At),s.fill()}),.5),t],0,0,0),v(n,K(.025,.04,.2,10),t,0,.1,-.05);let i=new Ht;v(i,Qt(.38,.28,.05,.012),[t,t,t,t,e,t]),i.position.set(0,.28,-.05),i.rotation.x=-.25,n.add(i),v(n,Qt(.3,.03,.12,.008),q(bt("keys",256,96,(s,r,o)=>{s.fillStyle="#333",s.fillRect(0,0,r,o);for(let a=0;a<4;a++)for(let l=0;l<12;l++)s.fillStyle=l>8&&a<3?"#5a5a5a":"#cfcfcf",s.fillRect(6+l*20.5,6+a*22,17,18)}),.5),0,.1,.13,.15,0,0),v(n,Qt(.09,.05,.14,.01),t,.3,0,.1,.4,-.3,0),v(n,J(.07,.001,.06),ee("readerscreen",{color:1316892,roughness:.1}),.3,.052,.095,.4,-.3,0),v(n,Qt(.15,.13,.18,.02),et(14474456,.5),-.3,0,-.02),v(n,J(.08,.001,.12),nt.paper,-.3,.135,.11,-.5,0,0)},price_strip(n,t){let e=bt("pricestrip",1024,48,(i,s,r,o)=>{i.fillStyle="#e8e6e0",i.fillRect(0,0,s,r);let a=6;for(;a<s-60;){let l=70+Math.floor(o()*40),c=o()<.2;i.fillStyle=c?"#f2c21b":"#ffffff",i.fillRect(a,4,l,r-8),kt(i,`$${(o()*9+.5).toFixed(2)}`,a+l*.68,r*.45,18,{color:c?"#c41e1e":"#111",maxW:l*.6}),qe(i,a+4,8,l*.35,3,6,o,"#444"),i.fillStyle="#000";for(let f=0;f<14;f++)o()<.6&&i.fillRect(a+4+f*2,r-14,1,7);a+=l+10+Math.floor(o()*60)}ae(i,s,r,o,.6)});v(n,J(.012,.04,1),[q(e,.5),et(13619151,.6),et(13619151,.6),et(13619151,.6),et(13619151,.6),et(13619151,.6)]),t()<.6&&v(n,J(.002,.035,.07),nt.paper,.012,-.02,(t()-.5)*.8,0,0,.6)},chair(n,t){let e=q(Br(qt(t,["#b98c5a","#7a5032","#d0b08a"]),"#5a3a20","chair"),.6);v(n,Qt(.44,.04,.42,.01),e,0,.43,0);for(let[i,s]of[[-.19,-.18],[.19,-.18],[-.19,.18],[.19,.18]])v(n,K(.018,.015,.43,8),e,i,0,s);for(let i of[-.19,.19])v(n,K(.018,.018,.48,8),e,i,.45,-.19,-.08,0,0);v(n,Qt(.44,.08,.025,.01),e,0,.87,-.23,-.08,0,0);for(let i=0;i<3;i++)v(n,K(.01,.01,.38,6),e,-.1+i*.1,.47,-.205,-.08,0,0);for(let i of[-.18,.18])v(n,K(.01,.01,.38,6),e,.19,.15,i,0,0,Math.PI/2);t()<.3&&(n.rotation.z=Math.PI/2,n.position.y=.22)},office_chair(n,t){let e=q(xi(qt(t,["#2a2a2c","#22304a","#3a2a2a"]),"office"),.95),i=nt.blackPl;for(let s=0;s<5;s++){let r=s*At/5,o=v(n,J(.3,.03,.045),i,Math.cos(r)*.15,.06,Math.sin(r)*.15,0,-r,0);o.rotation.z=0,v(n,dn(.028,6,4),i,Math.cos(r)*.3,.028,Math.sin(r)*.3)}v(n,K(.03,.03,.32,10),nt.chrome,0,.08,0),v(n,K(.05,.05,.08,10),i,0,.06,0),v(n,Qt(.5,.08,.48,.035),e,0,.42,0),v(n,J(.05,.3,.03),i,0,.45,-.25,-.1,0,0),v(n,Qt(.46,.55,.07,.035),e,0,.56,-.29,-.12,0,0);for(let s of[-1,1])v(n,J(.03,.18,.03),i,s*.24,.45,0,0,0,0),v(n,Qt(.06,.03,.24,.01),i,s*.24,.63,0);n.rotation.y=t()*At},ceiling_tile(n,t){let e=q(bt("ceiltile",256,256,(a,l,c,f)=>{Me(a,l,c,f,"#e6e3da",.06,2500,2),a.fillStyle="rgba(90,85,75,0.35)";for(let u=0;u<900;u++)a.beginPath(),a.ellipse(f()*l,f()*c,1+f()*2.5,.6+f(),f()*3,0,At),a.fill();let h=a.createRadialGradient(l*.6,c*.4,10,l*.6,c*.4,120);h.addColorStop(0,"rgba(140,100,40,0.35)"),h.addColorStop(.7,"rgba(140,100,40,0.15)"),h.addColorStop(1,"rgba(140,100,40,0)"),a.fillStyle=h,a.fillRect(0,0,l,c)}),.95),i=et(14210248,.95),s=et(12103840,.95),r=[[.6,.6],[.35,.28],[.22,.18],[.12,.1]],o=0;for(let[a,l]of r.slice(0,2+Math.floor(t()*3))){let c=v(n,J(a*(.8+t()*.2),.016,l*(.8+t()*.2)),[i,i,e,s,i,i],(t()-.5)*.7*(o?1:0),.008+(o===1?.03:0),(t()-.5)*.7*(o?1:0),o===1?.15:(t()-.5)*.05,t()*At,0);o===1&&(c.position.y=.04),o++}for(let a=0;a<8;a++)v(n,J(.02+t()*.03,.012,.02+t()*.03),i,(t()-.5)*.9,.006,(t()-.5)*.9,0,t()*3,0)},paper_scatter(n,t){let e=bt("papers",1024,512,(o,a,l,c)=>{for(let h=0;h<8;h++){let u=h%4*256,d=Math.floor(h/4)*256;o.save(),o.translate(u,d);let m=h%8;if(o.fillStyle=m===2?"#f2e6a0":m===5?"#e9e4d6":"#f4f2ec",o.fillRect(0,0,256,256),m===0)kt(o,"NOTICE TO RESIDENTS",128,30,22,{color:"#111",maxW:220}),qe(o,20,60,216,14,12,c,"#333");else if(m===1)o.fillStyle="#c41e1e",o.fillRect(0,0,256,50),kt(o,"BOIL WATER",128,26,30,{color:"#fff",maxW:230}),kt(o,"UNTIL FURTHER NOTICE",128,74,18,{color:"#111",maxW:230}),qe(o,20,100,216,10,13,c,"#333");else if(m===2)kt(o,"SHELTER",128,50,40,{color:"#1d4f9a",maxW:230}),kt(o,"MEMORIAL COLISEUM",128,92,18,{color:"#111",maxW:230}),kt(o,"FOOD  WATER  MEDICAL",128,124,16,{color:"#111",maxW:230}),qe(o,30,150,196,6,13,c,"#333");else if(m===3)o.fillStyle="#ddd",o.fillRect(0,0,256,256),o.fillStyle="#fbfbf8",o.fillRect(70,0,116,256),qe(o,78,14,100,18,12,c,"#555"),kt(o,"TOTAL  $48.17",128,236,13,{color:"#111"});else if(m===4){kt(o,"THE DAILY",128,26,30,{color:"#111",font:'Georgia, "DejaVu Serif", serif',maxW:230}),o.fillStyle="#111",o.fillRect(10,46,236,2),kt(o,"OUTBREAK SPREADS",128,70,24,{color:"#111",maxW:236,font:bi});for(let x=0;x<3;x++)qe(o,12+x*80,92,70,14,11,c,"#444")}else if(m===5)kt(o,"LOST DOG",128,40,40,{color:"#111",maxW:230}),dl(o,"paw",128,120,45,c),kt(o,'ANSWERS TO "BISCUIT"',128,190,16,{color:"#111",maxW:230}),qe(o,40,210,176,2,12,c,"#333");else if(m===6){o.strokeStyle="rgba(80,120,200,0.5)";for(let x=30;x<256;x+=16)o.beginPath(),o.moveTo(0,x),o.lineTo(256,x),o.stroke();o.strokeStyle="rgba(200,60,60,0.5)",o.beginPath(),o.moveTo(30,0),o.lineTo(30,256),o.stroke(),kt(o,"went to the river camp",40,42,15,{color:"#223",align:"left",italic:!0,weight:"normal"}),kt(o,"water + food there?",40,58,15,{color:"#223",align:"left",italic:!0,weight:"normal"}),kt(o,"- M.",40,74,15,{color:"#223",align:"left",italic:!0,weight:"normal"})}else o.fillStyle="#e8e2d2",o.fillRect(0,0,256,256),qe(o,20,20,90,3,12,c,"#444"),qe(o,90,110,120,3,12,c,"#222"),o.fillStyle="#c41e1e",o.fillRect(200,14,40,40),kt(o,"PAST DUE",128,200,22,{color:"#c41e1e"});ae(o,256,256,c,1.4),o.restore()}}),i=new _i(1),s=en(pn,"paperplane",()=>{let o=new Be(.216,.28,3,1).rotateX(-Math.PI/2),a=o.attributes.position;for(let l=0;l<a.count;l++){let c=a.getX(l);a.setY(l,Math.pow(Math.abs(c)/.108,2)*.012)}return o.computeVertexNormals(),o}),r=10+Math.floor(t()*10);for(let o=0;o<r;o++){let a=Math.floor(t()*8),l=[a%4/4,1-(Math.floor(a/4)+1)/2,(a%4+1)/4,1-Math.floor(a/4)/2],c=t()*At,f=Math.sqrt(t())*1,h=new re().compose(new N(Math.cos(c)*f,.002+o*8e-4,Math.sin(c)*f),new Sn().setFromEuler(new En((t()-.5)*.06,t()*At,(t()-.5)*.06)),new N(a===3?.5:1,1,1));i.add(s,h,[l],[0])}for(let o of i.meshes([ee("papermat",{map:e,roughness:.9,side:we,...j0})]))n.add(o)},glass_shards(n,t){let e=[],i=60+Math.floor(t()*40);for(let o=0;o<i;o++){let a=t()*At,l=Math.pow(t(),.7)*.8,c=Math.cos(a)*l,f=Math.sin(a)*l,h=.015+t()*.06*(1-l*.6),u=.002+t()*.004,d=[],m=t()<.5?3:4;for(let x=0;x<m;x++){let g=x/m*At+t()*.8;d.push([c+Math.cos(g)*h*(.4+t()),u+(t()<.15?t()*.015:0),f+Math.sin(g)*h*(.4+t())])}e.push(...d[0],...d[2],...d[1]),m===4&&e.push(...d[0],...d[3],...d[2])}let s=new De;s.setAttribute("position",new ue(e,3)),s.computeVertexNormals();let r=new Xt(s,ee("shardglass",{color:15268090,roughness:.04,metalness:.5,transparent:!0,opacity:.75,side:we,depthWrite:!1,emissive:1712676,...j0}));n.add(r)},traffic_cone(n){let t=q(bt("cone",64,256,(e,i,s,r)=>{e.fillStyle="#f0641c",e.fillRect(0,0,i,s),e.fillStyle="#f2f2f2",e.fillRect(0,s*.22,i,s*.13),e.fillRect(0,s*.48,i,s*.09),ae(e,i,s,r,1.5)}),.55);v(n,K(.025,.13,.66,16,!0),t,0,.03,0),v(n,Dn(.025,10),et(15754268,.6),0,.69,0),v(n,Qt(.36,.03,.36,.02),et(13651994,.8))},mop_bucket(n,t){let e=et(15909403,.5);v(n,Qt(.46,.32,.34,.05),e,0,.06,0),v(n,J(.38,.002,.26),ee("dirtywater",{color:4867638,roughness:.1,metalness:.2}),0,.33,0),v(n,Qt(.18,.2,.28,.02),et(4869200,.5),.12,.34,0),v(n,K(.012,.012,.5,8),et(4869200,.5),.2,.5,-.1,.6,0,0);for(let[s,r]of[[-.19,-.13],[.19,-.13],[-.19,.13],[.19,.13]])v(n,dn(.035,8,6),nt.blackPl,s,.035,r);v(n,K(.012,.012,1.35,8),et(2781142,.4),.06,.25,.04,0,0,-.18);let i=q(bt("mopstrands",64,64,(s,r,o,a)=>{s.fillStyle="#b8b0a0",s.fillRect(0,0,r,o);for(let l=0;l<r;l+=3)s.fillStyle=`rgba(0,0,0,${.1+a()*.25})`,s.fillRect(l,0,1,o)}),.95);v(n,K(.08,.11,.22,10),i,.03,.22,.04)},wet_floor_sign(n){let t=bt("wetfloor",256,512,(s,r,o,a)=>{s.fillStyle="#f2c21b",s.fillRect(0,0,r,o),s.fillStyle="#111",s.fillRect(0,o*.08,r,o*.12),kt(s,"CAUTION",r/2,o*.14,46,{color:"#f2c21b",maxW:r*.9}),s.fillStyle="#111",s.beginPath(),s.moveTo(r/2,o*.27),s.lineTo(r*.88,o*.62),s.lineTo(r*.12,o*.62),s.closePath(),s.fill(),s.fillStyle="#f2c21b",s.beginPath(),s.moveTo(r/2,o*.31),s.lineTo(r*.8,o*.6),s.lineTo(r*.2,o*.6),s.closePath(),s.fill(),s.strokeStyle="#111",s.lineWidth=7,s.lineCap="round",s.beginPath(),s.arc(r*.56,o*.4,9,0,At),s.fillStyle="#111",s.fill(),s.beginPath(),s.moveTo(r*.54,o*.43),s.lineTo(r*.46,o*.52),s.moveTo(r*.46,o*.52),s.lineTo(r*.38,o*.56),s.moveTo(r*.46,o*.52),s.lineTo(r*.58,o*.57),s.moveTo(r*.52,o*.46),s.lineTo(r*.62,o*.47),s.moveTo(r*.5,o*.47),s.lineTo(r*.42,o*.44),s.stroke(),kt(s,"WET FLOOR",r/2,o*.72,40,{color:"#111",maxW:r*.9}),kt(s,"PISO MOJADO",r/2,o*.8,26,{color:"#111",maxW:r*.9}),ae(s,r,o,a,1.2)}),e=q(t,.45),i=et(15909403,.45);for(let s of[-1,1]){let r=new Ht;v(r,J(.3,.6,.012),[i,i,i,i,s<0?e:i,s>0?e:i],0,-.6,0),r.position.set(0,.62,0),r.rotation.x=s*.2,n.add(r)}v(n,Le(.05,.012,5,12,Math.PI),i,0,.62,0)},fire_extinguisher(n){let t=et(12850716,.35,.1);v(n,Ge("extbody",[[0,0],[.07,0],[.076,.012],[.076,.38],[.065,.43],[.03,.455],[.02,.46]],18),t),v(n,J(.09,.14,.002),q(oi({t:"FIRE",t2:"EXTINGUISHER",s:"ABC DRY CHEMICAL",n:"INSPECT MONTHLY",b:"#f4f1ea",f:"#c4161c",a:"#c4161c",p:"flame"},192,300),.5),0,.16,.074),v(n,K(.02,.022,.04,10),nt.brass,0,.455,0),v(n,J(.12,.012,.03),nt.chrome,.03,.5,0,0,0,.1),v(n,J(.1,.012,.028),nt.chrome,.02,.475,0,0,0,.05),v(n,K(.017,.017,.01,12),nt.chrome,-.04,.47,.012,Math.PI/2),v(n,Dn(.014,12),q(bt("gauge",64,64,(e,i,s)=>{e.fillStyle="#fff",e.beginPath(),e.arc(32,32,30,0,At),e.fill(),e.fillStyle="#2f9a3a",e.beginPath(),e.moveTo(32,32),e.arc(32,32,26,-2.2,-.9),e.fill(),e.strokeStyle="#111",e.lineWidth=3,e.beginPath(),e.moveTo(32,32),e.lineTo(46,16),e.stroke()}),.3),-.04,.47,.018,Math.PI/2),un(n,"exthose",[[.04,.46,0],[.09,.44,.02],[.1,.3,.05],[.085,.18,.06],[.07,.12,.07]],.009,nt.rubber,!1,20),v(n,K(.008,.014,.05,8),nt.blackPl,.07,.07,.07),v(n,Le(.012,.002,4,10),et(15909403,.4),0,.49,.02,0,Math.PI/2,0)},iv_stand(n,t){for(let e=0;e<5;e++){let i=e*At/5;v(n,J(.28,.025,.03),nt.chrome,Math.cos(i)*.14,.05,Math.sin(i)*.14,0,-i,0),v(n,dn(.022,8,6),nt.blackPl,Math.cos(i)*.27,.022,Math.sin(i)*.27)}v(n,K(.012,.012,1.85,8),nt.chrome,0,.05,0);for(let e=0;e<4;e++)v(n,Le(.04,.004,4,10,Math.PI),nt.chrome,Math.cos(e*Math.PI/2)*.04,1.86,Math.sin(e*Math.PI/2)*.04,0,-e*Math.PI/2,Math.PI);if(t()<.75){let e=new Ht;ko.saline(e,t),e.rotation.x=Math.PI/2,e.position.set(.08,1.85,-.02),n.add(e),un(n,"ivline",[[.08,1.58,0],[.1,1.2,.02],[.14,.8,.05],[.12,.5,.1],[.05,.35,.12]],.002,ee("ivtube",{color:15660278,roughness:.2,transparent:!0,opacity:.6}),!1,24)}},wheelchair(n){let t=nt.chrome,e=q(xi("#1d1e22","wc"),.9);for(let i of[-1,1])Py(n,i*.3,.3,-.05,.3,.018,t,12),v(n,Le(.27,.005,3,20),nt.chrome,i*.33,.3,-.05,0,Math.PI/2,0),hl(n,i*.22,.32,.06),un(n,"wcside",[[0,.16,.3],[0,.5,.3],[0,.5,-.12],[0,.95,-.2],[0,.95,-.28]],.011,t,!1,20).position.x=i*.22,v(n,K(.016,.016,.1,8),nt.rubber,i*.22,.95,-.3,Math.PI/2,0,0),un(n,"wcfoot",[[0,.5,.25],[0,.18,.42],[0,.12,.44]],.01,t,!1,10).position.x=i*.2,v(n,J(.12,.01,.12),nt.blackPl,i*.13,.12,.46),v(n,Qt(.05,.03,.28,.01),nt.blackPl,i*.23,.68,.06),un(n,"wcarm",[[0,.5,.18],[0,.66,.18]],.01,t,!1,2).position.x=i*.23;v(n,J(.42,.012,.42),e,0,.495,.08),v(n,J(.42,.4,.012),e,0,.55,-.15,-.15,0,0),v(n,K(.01,.01,.44,8),t,-.22,.25,.08,0,0,-Math.PI/2)},gurney(n,t){let e=nt.chrome;un(n,"gurneyframe2",fl([[-.32,.6,-.95],[.32,.6,-.95],[.32,.6,.95],[-.32,.6,.95]],.06),.016,e,!0,60);for(let[s,r]of[[-.25,-.75],[.25,-.75],[-.25,.75],[.25,.75]])v(n,K(.02,.02,.52,8),e,s,.1,r),hl(n,s,r,.055);v(n,J(.56,.03,1.6),e,0,.12,0);let i=q(bt("sheet",128,256,(s,r,o,a)=>{Me(s,r,o,a,"#e8ecee",.06,1500,2),s.strokeStyle="rgba(0,0,0,0.08)";for(let l=0;l<12;l++)s.beginPath(),s.moveTo(a()*r,0),s.bezierCurveTo(a()*r,o*.3,a()*r,o*.6,a()*r,o),s.stroke();ae(s,r,o,a,1)}),.95);v(n,Qt(.62,.1,1.86,.04),i,0,.63,0),v(n,Qt(.42,.08,.26,.04),et(16054006,.95),0,.72,-.75,.1,0,0),v(n,Qt(.64,.05,.5,.025),q(xi("#3a6a9a","blanket"),.95),0,.72,.62,0,.08,.02);for(let s of[-1,1])un(n,"gurneyrail"+s,[[s*.33,.62,-.5],[s*.34,.84,-.45],[s*.34,.84,.45],[s*.33,.62,.5]],.01,e,!1,20);un(n,"gurneyhandle",[[-.25,.62,.95],[-.25,.9,1],[.25,.9,1],[.25,.62,.95]],.013,e,!1,20),t()<.5&&(n.rotation.y=(t()-.5)*.8)},medical_cart(n,t){let e=qt(t,["#c4221c","#2a6fd6","#d8d8d4"]),i=et(new jt(e).getHex(),.4,.1),s=q(bt("cartdrawers"+e,256,320,(o,a,l,c)=>{o.fillStyle=e,o.fillRect(0,0,a,l);let f=[.15,.15,.2,.25,.25],h=0;for(let u of f){let d=u*l;o.fillStyle="rgba(0,0,0,0.35)",o.fillRect(0,h,a,3),o.fillStyle="rgba(255,255,255,0.15)",o.fillRect(0,h+3,a,2),o.fillStyle="#ddd",o.fillRect(a*.35,h+d*.35,a*.3,8),o.fillStyle="#f4f1ea",o.fillRect(a*.08,h+d*.3,44,18),qe(o,a*.09,h+d*.3+5,40,1,8,c,"#333"),h+=d}ae(o,a,l,c,1)}),.4,.1);v(n,Qt(.7,.85,.5,.02),[i,i,i,i,s,i],0,.1,0),v(n,J(.76,.03,.56),et(4869200,.5),0,.95,0);for(let o of[-1,1])v(n,J(.76,.05,.01),et(4869200,.5),0,.98,o*.275);for(let[o,a]of[[-.28,-.18],[.28,-.18],[-.28,.18],[.28,.18]])hl(n,o,a,.045);un(n,"mcarthandle",[[.37,.8,-.18],[.42,.82,-.15],[.42,.82,.15],[.37,.8,.18]],.012,nt.chrome,!1,12);let r=new Ht;ti(r,.24,.12,.13,{t:"EXAM GLOVES",s:"NITRILE  POWDER FREE",n:"100 GLOVES  SIZE L",b:"#2a6fd6",f:"#fff",a:"#fff",tf:"#2a6fd6",p:"cross"},{tw:256,th:128}),r.position.set(-.15,.98,0),r.rotation.y=.2,n.add(r),v(n,J(.18,.22,.12),et(12852766,.45),.2,.98,-.05),v(n,J(.14,.03,.1),et(15921644,.5),.2,1.2,-.05)},locker_row(n,t){let e=qt(t,["#4a5a6a","#6a7a5a","#8a8a86","#3a4a7a"]),i=q(bt("lockerdoor"+e,128,512,(h,u,d,m)=>{Me(h,u,d,m,e,.05,1500,2),h.fillStyle="rgba(0,0,0,0.5)";for(let x of[.08,.82])for(let g=0;g<6;g++)h.fillRect(u*.25,d*x+g*10,u*.5,4);h.fillStyle="rgba(255,255,255,0.12)",h.fillRect(4,4,u-8,2),h.fillStyle="#d8d8d4",h.fillRect(u*.35,d*.3,u*.3,20),ae(h,u,d,m,1.5)}),.45,.35),s=q(tf(e,"locker"),.5,.3),r=et(1974564,.8),o=4,a=.3,l=1.8,c=.45;v(n,J(o*a+.02,l,c),[s,s,s,s,r,s],0,.08,0),v(n,J(o*a+.02,.08,c-.04),et(1973790,.8),0,0,-.02);let f=Math.floor(t()*(o+2));for(let h=0;h<o;h++){let u=new Ht;v(u,J(a-.012,l-.03,.015),[s,s,s,s,i,s],(a-.012)/2,0,0),v(u,J(.02,.1,.02),nt.chrome,a*.82,l*.48,.015);let d=bt("lockernum"+(101+h),64,32,(m,x,g)=>{m.fillStyle="#d8d8d4",m.fillRect(0,0,x,g),kt(m,String(101+h),x/2,g/2,20,{color:"#111"})});v(u,J(.05,.025,.002),[nt.paper,nt.paper,nt.paper,nt.paper,q(d,.5),nt.paper],a*.48,l*.86,.009),u.position.set(-o*a/2+h*a+.006,.095,c/2),h===f&&(u.rotation.y=-(.7+t()*.9)),n.add(u)}for(let h=1;h<o;h++)v(n,J(.012,l,c-.02),s,-o*a/2+h*a,.08,0);for(let h=0;h<o;h++)v(n,J(a-.02,.012,c-.04),s,-o*a/2+h*a+a/2,1.55,0);f<o&&v(n,Qt(.2,.3,.12,.03),q(xi("#2f3f2a","lk"),.85),-o*a/2+f*a+a/2,.1,0)},helmet_rack(n,t){let e=et(5922402,.5,.4),i=1.8,s=1.9;for(let a of[-i/2,-i/6,i/6,i/2])v(n,J(.04,s,.04),e,a,0,-.25);v(n,J(i+.04,.03,.45),e,0,1.6,-.05),v(n,J(i+.04,.03,.45),e,0,.35,-.05);let r=q(bt("turnout",128,256,(a,l,c,f)=>{Me(a,l,c,f,"#a8946a",.1,2e3,2);for(let h of[.55,.9])a.fillStyle="#d8e040",a.fillRect(0,c*h,l,c*.06),a.fillStyle="#d8d8d8",a.fillRect(0,c*h+c*.018,l,c*.024);ae(a,l,c,f,2)}),.9),o=[15909403,1908256,12853788,15921644];for(let a=0;a<3;a++){let l=-i/3+a*i/3;if(v(n,Qt(.5,.85,.2,.08),r,l,.6,-.12),v(n,K(.07,.075,.75,8),r,l-.29,.68,-.12,0,0,.08),v(n,K(.07,.075,.75,8),r,l+.29,.68,-.12,0,0,-.08),v(n,Le(.1,.03,4,10),r,l,1.42,-.12,Math.PI/2,0,0,1,.8,1),t()<.85){let f=et(qt(t,o),.35),h=new Ht;v(h,Ge("helmdome",[[0,.2],[.07,.19],[.12,.15],[.14,.08],[.15,0]],14),f,0,0,0),v(h,K(.19,.2,.012,16),f,0,-.005,.03,0,0,0,1,1,1.25),v(h,J(.1,.06,.012),et(12950085,.4,.5),0,.1,.15,-.5,0,0),h.position.set(l+(t()-.5)*.1,1.625,-.05),h.rotation.y=(t()-.5)*.6,n.add(h)}let c=et(1908256,.6);for(let f of[-1,1])v(n,J(.11,.06,.28),c,l+f*.07,0,.07),v(n,K(.06,.065,.3,8),c,l+f*.07,.04,0),v(n,Le(.07,.035,4,8),r,l+f*.07,.36,0,Math.PI/2),v(n,K(.066,.066,.03,8,!0),et(14213184,.5),l+f*.07,.25,0);v(n,J(.1,.06,.002),q(bt("nametag"+a,128,64,(f,h,u)=>{f.fillStyle="#1d1e20",f.fillRect(0,0,h,u),kt(f,["ENGINE 1","TRUCK 3","RESCUE 7"][a],h/2,u/2,22,{color:"#f2c21b",maxW:h*.9})}),.5),l,1.52,.18)}},hose_reel(n){let t=et(12853788,.45,.15),e=q(bt("hose",128,32,(s,r,o)=>{s.fillStyle="#b8201e",s.fillRect(0,0,r,o),s.fillStyle="rgba(0,0,0,0.25)";for(let a=0;a<r;a+=4)s.fillRect(a,0,1,o)},{repeat:[6,1]}),.7);for(let s of[-1,1])v(n,K(.38,.38,.02,20),t,s*.25-.01,.55,0,0,0,Math.PI/2),un(n,"reelleg"+s,[[0,0,-.35],[0,.55,0],[0,0,.35]],.02,t,!1,4).position.x=s*.29;v(n,K(.04,.04,.6,10),nt.steel,-.3,.55,0,0,0,-Math.PI/2);let i=q(bt("hosecoil",256,64,(s,r,o)=>{s.fillStyle="#9a1a18",s.fillRect(0,0,r,o);for(let a=0;a<r;a+=8){let l=s.createLinearGradient(a,0,a+8,0);l.addColorStop(0,"#5a0e0c"),l.addColorStop(.5,"#c8282a"),l.addColorStop(1,"#5a0e0c"),s.fillStyle=l,s.fillRect(a,0,8,o)}},{repeat:[1,6]}),.7);v(n,K(.31,.31,.47,20),[i,et(5901836,.8),et(5901836,.8)],-.235,.55,0,0,0,-Math.PI/2);for(let s=0;s<7;s++)v(n,Le(.31,.019,4,18),e,-.21+s*.07,.55,0,0,Math.PI/2,0);un(n,"hosetail",[[0,.2,.3],[.05,.05,.45],[.2,.025,.7],[.4,.025,.8]],.022,e,!1,20),v(n,K(.025,.04,.16,10),nt.brass,.42,.04,.82,0,0,Math.PI/2+.3),un(n,"reelcrank",[[.29,.55,0],[.36,.55,0],[.36,.4,0],[.42,.4,0]],.012,nt.steel,!1,6)},kitchen_counter_items(n,t){let e=q(Fr("#c9ccd0","kettle"),.25,.55);v(n,Ge("kettle",[[0,0],[.09,0],[.1,.03],[.095,.12],[.06,.17],[.025,.18],[0,.185]],18),e,-.4,0,0),v(n,dn(.015,8,6),nt.blackPl,-.4,.19,0),un(n,"kettlespout",[[-.32,.05,0],[-.27,.12,0],[-.25,.16,0]],.012,e,!1,8),v(n,Le(.06,.012,5,12,Math.PI),nt.blackPl,-.4,.17,0,0,0,0);let i=ee("plate",{color:15921644,roughness:.3,side:we});for(let r=0;r<5;r++)v(n,Ge("plate",[[0,0],[.07,0],[.09,.012],[.12,.018]],18),i,-.1,r*.014,.05);for(let r=0;r<2;r++){let o=ee("mug"+Math.floor(t()*4),{color:[1920922,12853788,15921644,3111474][r%4],roughness:.35,side:we});v(n,Ge("mug",[[0,0],[.04,0],[.042,.095],[.037,.095],[.035,.008],[0,.008]],14),o,.08+r*.1,0,-.08),v(n,Le(.025,.007,4,10,Math.PI*1.2),o,.08+r*.1+.045,.05,-.08,0,0,-Math.PI*.6)}let s=new Ht;ti(s,.19,.29,.07,{t:"CORN FLAKES",s:"TOASTED",n:"NET WT 18 OZ",b:"#f2f1ec",f:"#1d4f9a",a:"#e8701c",p:"grain",top:"FAMILY SIZE",tf:"#fff"}),s.position.set(.35,0,.05),s.rotation.y=-.3,n.add(s),v(n,Qt(.36,.018,.24,.008),q(Br("#c9a26c","#8a6a3a","board"),.7),-.05,0,.2),v(n,Ge("bowl",[[0,0],[.04,0],[.07,.03],[.08,.06],[.075,.06],[.065,.032],[.035,.008],[0,.008]],16),ee("bowl",{color:14207144,roughness:.4,side:we}),.2,0,.22)},bookshelf(n,t){let e=q(Br("#7a5032","#4a2a18","shelf"),.7),i=.9,s=1.8,r=.3,o=5;v(n,J(.02,s,r),e,-i/2+.01,0,0),v(n,J(.02,s,r),e,i/2-.01,0,0),v(n,J(i,.01,r),et(3810328,.8),0,0,-r/2+.005,Math.PI/2,0,0);for(let u=0;u<=o;u++)v(n,J(i-.04,.02,r),e,0,.05+u*(s-.07)/o,0);let a=bt("spines",1024,256,(u,d,m,x)=>{for(let g=0;g<32;g++){let p=g*32,_=qt(x,["#7a1d1a","#22304a","#2f4a2a","#c9a24a","#e8e2d2","#1d1e20","#5a2a5a","#2a6a7a","#c4521c","#4a3a2a"]);Q0(u,0,0,x,0),u.fillStyle=_,u.fillRect(p,0,32,m),u.fillStyle="rgba(255,255,255,0.12)",u.fillRect(p+2,0,2,m),u.fillStyle="rgba(0,0,0,0.2)",u.fillRect(p+28,0,4,m),u.fillStyle=x()<.5?"#e8d8a0":"#f4f1ea",u.fillRect(p+6,m*.1,20,3),u.fillRect(p+6,m*.85,20,3);for(let y=0;y<6;y++)u.fillRect(p+12,m*.25+y*14,8,9)}ae(u,d,m,x,1)}),l="#efe6cf",c=new _i(1),f=J(1,1,1);for(let u=0;u<o;u++){let d=.06+u*(s-.07)/o,m=-i/2+.03,x=(s-.07)/o-.03;for(;m<i/2-.06;){if(t()<.12){m+=.05+t()*.15;continue}let g=.02+t()*.035,p=Math.min(x,.17+t()*.12),_=.15+t()*.08,y=Math.floor(t()*32),b=[y/32,0,(y+1)/32,1],L=t()<.08?.25:0,R=new re().compose(new N(m+g/2+L*p*.5,d,-r/2+_/2+.01),new Sn().setFromEuler(new En(0,0,-L)),new N(g,p,_));c.add(f,R,[b,b,[.999,.999,1,1],b,b,b],[0]),m+=g+.002+L*p}}c.meshes([ee("bookmat",{map:a,roughness:.75})]).forEach(u=>n.add(u))},tv(n,t){let e=et(1118740,.4),i=q(bt("tvscreen"+(t()<.3?"c":""),256,144,(s,r,o,a)=>{let l=s.createLinearGradient(0,0,r,o);l.addColorStop(0,"#1a1d22"),l.addColorStop(.5,"#0a0c0e"),l.addColorStop(1,"#14171a"),s.fillStyle=l,s.fillRect(0,0,r,o),ae(s,r,o,a,1.5)}),.12,.2);v(n,J(1.23,.71,.04),[e,e,e,e,i,e],0,.1,0),v(n,J(.06,.1,.03),e,0,0,-.01),v(n,Qt(.4,.015,.2,.006),e,0,0,0)},lamp(n,t){let e=et(qt(t,[14207144,2771562,9058858]),.3);v(n,Ge("lampbase",[[0,0],[.08,0],[.085,.02],[.1,.12],[.09,.2],[.03,.26],[.015,.28],[0,.28]],16),e),v(n,K(.006,.006,.18,6),nt.brass,0,.28,0);let i=ee("lampshade",{map:bt("shadefab",128,64,(s,r,o,a)=>{Me(s,r,o,a,"#e8dcc0",.08,800,1),ae(s,r,o,a,1)}),roughness:.95,side:we});v(n,K(.1,.17,.2,18,!0),i,0,.37,0),v(n,dn(.03,8,6),ee("bulb",{color:16052448,roughness:.2}),0,.45,0)},rug(n,t){let e=qt(t,[["#7a1d1a","#22304a","#c9a24a"],["#2a3a5a","#c8b48a","#7a2a1a"],["#4a5a3a","#e8dcc0","#7a4a2a"]]),i=bt("rug"+e.join(),512,360,(r,o,a,l)=>{r.fillStyle=e[0],r.fillRect(0,0,o,a);for(let c=0;c<3;c++)r.strokeStyle=c%2?e[2]:e[1],r.lineWidth=10,r.strokeRect(24+c*16,18+c*16,o-48-c*32,a-36-c*32);r.fillStyle=e[1],r.beginPath(),r.moveTo(o/2,a*.22),r.lineTo(o*.72,a/2),r.lineTo(o/2,a*.78),r.lineTo(o*.28,a/2),r.closePath(),r.fill(),r.fillStyle=e[2],r.beginPath(),r.moveTo(o/2,a*.32),r.lineTo(o*.62,a/2),r.lineTo(o/2,a*.68),r.lineTo(o*.38,a/2),r.closePath(),r.fill();for(let c=0;c<40;c++)r.fillStyle=l()<.5?e[1]:e[2],r.fillRect(90+l()*(o-180),80+l()*(a-160),6,6);r.fillStyle="#e8dcc0";for(let c=0;c<o;c+=4)r.fillRect(c,0,2,10),r.fillRect(c,a-10,2,10);Q0(r,o,a,l,.15),ae(r,o,a,l,2)}),s=en(pn,"rug",()=>{let r=new Be(2,1.4,8,6).rotateX(-Math.PI/2),o=r.attributes.position;for(let a=0;a<o.count;a++){let l=o.getX(a),c=o.getZ(a),f=Math.hypot(l-1,c-.7);o.setY(a,.004+Math.max(0,.45-f)*.18)}return r.computeVertexNormals(),r});v(n,s,ee("rugmat"+e.join(),{map:i,roughness:1,side:we,...j0}))},potted_plant_dead(n,t){let e=q(bt("terracotta",128,64,(o,a,l,c)=>{Me(o,a,l,c,"#b5653a",.12,1500,2),o.fillStyle="rgba(255,255,255,0.15)";for(let f=0;f<6;f++)o.fillRect(0,l*.8+c()*l*.2,a,2);ae(o,a,l,c,1)}),.85);v(n,Ge("pot",[[0,0],[.11,0],[.15,.24],[.17,.25],[.17,.3],[.155,.3],[.15,.26]],16),e),v(n,Dn(.15,16),q(bt("soil",64,64,(o,a,l,c)=>Me(o,a,l,c,"#3a2a1e",.3,800,2)),1),0,.27,0);let i=et(5917234,.9),s=ee("deadleaf",{color:8018482,roughness:.95,side:we}),r=en(pn,"leafdisc",()=>new xo(.035,5).scale(1,.45,1));for(let o=0;o<6;o++){let a=t()*At,l=.1+t()*.3,c=.3+t()*.35,f=[[0,.27,0],[Math.cos(a)*l*.2,.27+c*.5,Math.sin(a)*l*.2],[Math.cos(a)*l*.6,.27+c*.85,Math.sin(a)*l*.6],[Math.cos(a)*l*(.9+t()*.4),.27+c*(.7+t()*.2),Math.sin(a)*l]];v(n,new vo(new Ir(f.map(h=>new N(...h))),6,.005,4),i);for(let h=0;h<3;h++){let u=.4+h*.2;v(n,r,s,f[2][0]*u,.27+c*u*.9,f[2][2]*u,t()*3,t()*3,t()*3)}}for(let o=0;o<6;o++)v(n,r,s,(t()-.5)*.7,.004,(t()-.5)*.7,-Math.PI/2,0,t()*3)},kids_toy(n,t){let e=qt(t,["#8a5a32","#c8a070","#6a4a3a"]),i=q(bt("bearfur"+e,128,128,(o,a,l,c)=>{Me(o,a,l,c,e,.25,5e3,2),ae(o,a,l,c,1.5)}),1),s=q(bt("bearlight"+e,64,64,(o,a,l,c)=>Me(o,a,l,c,Xn(e,.4),.2,800,2)),1),r=et(1118481,.3);v(n,dn(.09,10,8),i,0,.1,0,0,0,0,1,1.15,.9),v(n,dn(.055,10,8),s,0,.09,.045,0,0,0,1,1.2,.6),v(n,dn(.075,10,8),i,0,.255,.01),v(n,dn(.03,8,6),s,0,.24,.07,0,0,0,1.1,.8,.9),v(n,dn(.011,6,4),r,0,.25,.097);for(let o of[-1,1])v(n,dn(.009,6,4),r,o*.027,.275,.068),v(n,dn(.03,8,6),i,o*.055,.315,0,0,0,0,1,1,.5),v(n,dn(.018,8,6),s,o*.055,.315,.012,0,0,0,1,1,.4),v(n,dn(.03,8,6),i,o*.1,.13,.03,.6,0,o*.5,1,1.9,1),v(n,dn(.035,8,6),i,o*.055,.035,.08,Math.PI/2,0,0,1,1.8,1),v(n,Dn(.026,10),s,o*.055,.035,.143,Math.PI/2,0,0);t()<.6&&v(n,Le(.04,.01,4,12),et(12853788,.6),0,.19,.02,Math.PI/2+.2,0,0,1,1,.5),n.rotation.y=(t()-.5)*.6,t()<.3&&(n.rotation.x=-1.2)}};function vu(n,t,e){let i=e%n,s=Math.floor(e/n);return[i/n,1-(s+1)/t,(i+1)/n,1-s/t]}function Mu(n,t,e,i,s){if(i<3){let r=[["#9ab8d0","#e8dcc0"],["#e8a070","#f4d8a0"],["#b8c4cc","#e4e6e4"]],[o,a]=r[i],l=n.createLinearGradient(0,0,0,e*.6);l.addColorStop(0,o),l.addColorStop(1,a),n.fillStyle=l,n.fillRect(0,0,t,e),i===1&&(n.fillStyle="rgba(250,220,150,0.9)",n.beginPath(),n.arc(t*.7,e*.42,e*.08,0,At),n.fill());let c=(f,h,u,d)=>{n.fillStyle=u,n.beginPath(),n.moveTo(0,e);for(let m=0;m<=t;m+=8)n.lineTo(m,f-Math.abs(Math.sin(m*d+f))*h-Math.sin(m*d*3.1)*h*.2);n.lineTo(t,e),n.fill()};if(i===0)c(e*.5,e*.22,"#6a7a8a",.012),c(e*.58,e*.1,"#4a5a4a",.02),n.fillStyle="#7a9ab0",n.fillRect(0,e*.66,t,e*.12),c(e*.84,e*.04,"#3a4a2a",.05);else if(i===1){c(e*.62,e*.05,"#8a6a3a",.01);for(let f=0;f<6;f++)n.fillStyle=f%2?"#c8a050":"#a8803a",n.beginPath(),n.moveTo(0,e*(.66+f*.06)),n.lineTo(t,e*(.62+f*.07)),n.lineTo(t,e),n.lineTo(0,e),n.fill();n.fillStyle="#3a2a1a",n.fillRect(t*.2,e*.5,t*.012,e*.14),n.beginPath(),n.arc(t*.206,e*.48,e*.06,0,At),n.fill()}else{c(e*.55,e*.15,"#9aa4ac",.015),n.fillStyle="#eef0ee",n.fillRect(0,e*.7,t,e*.3);for(let f=0;f<14;f++){let h=s()*t,u=e*(.62+s()*.25),d=e*(.08+s()*.1);n.fillStyle="#2a3a2e",n.beginPath(),n.moveTo(h,u-d),n.lineTo(h+d*.35,u),n.lineTo(h-d*.35,u),n.fill()}}for(let f=0;f<400;f++)n.fillStyle=`rgba(${s()<.5?"0,0,0":"255,255,255"},0.05)`,n.fillRect(s()*t,s()*e,6+s()*10,2)}else{let o=[["#e8dcc0","#c4421c","#1d4f7a","#e8b030","#2a2a2a"],["#d8d4cc","#5a7a6a","#c8a070","#8a3a2a","#e8e4d8"],["#1e2630","#e8701c","#e8dcc0","#4a7a9a","#c8b040"]][i-3];if(n.fillStyle=o[0],n.fillRect(0,0,t,e),i===3)for(let a=0;a<9;a++)n.fillStyle=o[1+a%4],n.fillRect(s()*t*.8,s()*e*.8,t*(.1+s()*.3),e*(.08+s()*.3));else if(i===4)for(let a=0;a<7;a++)n.fillStyle=o[1+a%4],n.globalAlpha=.85,n.beginPath(),n.arc(s()*t,s()*e,e*(.08+s()*.25),0,At),n.fill(),n.globalAlpha=1;else for(let a=0;a<12;a++)n.strokeStyle=o[1+a%4],n.lineWidth=6+s()*18,n.beginPath(),n.moveTo(s()*t,0),n.bezierCurveTo(s()*t,e*.3,s()*t,e*.7,s()*t,e),n.stroke();for(let a=0;a<300;a++)n.fillStyle="rgba(0,0,0,0.05)",n.fillRect(s()*t,s()*e,3,3)}}var Ny={wall_frame(n,t){let e=Math.floor(t()*6),i=e<3||t()<.5,s=.4+t()*.4,r=i?s*(.66+t()*.1):s*(1.2+t()*.15),o=.035+t()*.02,a=.025,l=q(bt("frameart"+e+i,512,512,(f,h,u,d)=>{f.fillStyle="#ece6d4",f.fillRect(0,0,h,u),f.save(),f.beginPath(),f.rect(36,36,h-72,u-72),f.clip(),f.translate(36,36),Mu(f,h-72,u-72,e,d),f.restore(),f.strokeStyle="rgba(0,0,0,0.25)",f.lineWidth=2,f.strokeRect(36,36,h-72,u-72),f.fillStyle="rgba(210,200,180,0.12)",f.fillRect(0,0,h,u);let m=f.createRadialGradient(h,0,0,h,0,h*.6);m.addColorStop(0,"rgba(255,250,230,0.25)"),m.addColorStop(1,"rgba(255,250,230,0)"),f.fillStyle=m,f.fillRect(0,0,h,u),ae(f,h,u,d,1.2)}),.35),c=qt(t,[xe.wood("#3a2616"),xe.wood("#8a6440"),et(1908256,.5),et(12098138,.4,.5)]);v(n,J(s-2*o+.004,r-2*o+.004,.006),l,0,-(r-2*o)/2,.012),v(n,J(s,o,a),c,0,r/2-o,a/2),v(n,J(s,o,a),c,0,-r/2,a/2),v(n,J(o,r-2*o,a),c,-s/2+o/2,-r/2+o,a/2),v(n,J(o,r-2*o,a),c,s/2-o/2,-r/2+o,a/2),t()<.5&&(n.rotation.z=(t()-.5)*.12)},wall_clock(n,t){let e=.13+t()*.05,i=qt(t,[nt.blackPl,nt.whitePl,xe.wood("#5a3a22")]),s=q(bt("clockface",256,256,(f,h,u,d)=>{f.fillStyle="#f2ecd8",f.beginPath(),f.arc(128,128,128,0,At),f.fill();for(let x=0;x<60;x++){let g=x/60*At,p=x%5===0;f.strokeStyle="#1a1a1a",f.lineWidth=p?5:1.5,f.beginPath(),f.moveTo(128+Math.sin(g)*118,128-Math.cos(g)*118),f.lineTo(128+Math.sin(g)*(p?100:110),128-Math.cos(g)*(p?100:110)),f.stroke()}for(let x=1;x<=12;x++){let g=x/12*At;kt(f,String(x),128+Math.sin(g)*82,130-Math.cos(g)*82,24,{color:"#1a1a1a"})}let m=f.createRadialGradient(128,128,40,128,128,128);m.addColorStop(0,"rgba(180,150,90,0)"),m.addColorStop(1,"rgba(150,120,60,0.3)"),f.fillStyle=m,f.fillRect(0,0,h,u),ae(f,h,u,d,1.2)}),.5),r=.045;v(n,K(e,e,r,24,!0),i,0,0,0,Math.PI/2,0,0),v(n,Le(e-.006,.01,4,24),i,0,0,r-.004),v(n,Dn(e-.012,24),s,0,0,r-.012,Math.PI/2,0,0),v(n,Dn(e,24),i,0,0,.001,-Math.PI/2,0,0);let o=Math.floor(t()*12),a=Math.floor(t()*60),l=Math.floor(t()*60),c=(f,h,u,d)=>v(n,J(u,h,.002),nt.blackPl,0,0,r-.012+d,0,0,-f);c((o+a/60)/12*At,e*.5,.012,.003),c(a/60*At,e*.78,.008,.006),c(l/60*At,e*.82,.002,.009),v(n,K(.008,.008,.012,8),nt.blackPl,0,0,r-.012,Math.PI/2,0,0),t()<.4&&(n.rotation.z=(t()-.5)*.1)},curtain(n,t){let e=1.2+t()*.5,i=1.5+t()*.5,s=qt(t,["#8a3a2a","#4a5a6a","#c8b890","#5a6a4a","#7a5a7a"]),r=xe.fabric(s),o=ee("curtain"+s,{map:r.map,roughness:.95,side:we}),a=qt(t,[et(12098138,.4,.5),et(2763308,.5,.3),et(11844030,.38,.55)]),l=.085,c=0;v(n,K(.012,.012,e,10),a,-e/2,c,l,0,0,-Math.PI/2);for(let h of[-1,1])v(n,dn(.025,8,6),a,h*(e/2+.02),c,l),v(n,J(.02,.04,l),a,h*(e/2-.08),c-.02,l/2-.012+.012);let f=t();for(let h of[-1,1]){let u=e*(h<0?.2+f*.3:.5-f*.3+.2)*.9,d=h<0?-e/2+.02:e/2-.02-u,m=t()<.3?.06+t()*.12:0,x=22,g=6,p=Math.max(3,Math.round(u/.09)),_=new Be(1,1,x,g),y=_.attributes.position,b=_.attributes.uv,L=t()*6,R=u*1.8;for(let w=0;w<y.count;w++){let P=y.getX(w)+.5,T=.5-y.getY(w),M=d+P*u,U=l+.02+Math.sin(P*p*At+L)*(.025+T*.02),W=c-.03-T*i,F=h<0?1-P:P;m&&(W-=m*Math.max(0,F-.6)/.4*(1-T*.6)),T>.9&&(W+=Math.sin(P*17+L)*.015),U+=T*T*.04*Math.sin(P*3+L),y.setXYZ(w,M,W,U),b.setXY(w,P*R,(1-T)*i)}_.computeVertexNormals(),v(n,_,o);for(let w=0;w<=p;w++){let P=d+w/p*u;m&&(h<0?w/p<.4:w/p>.6)||v(n,Le(.018,.004,3,8),a,P,c,l)}}},mail_pile(n,t){let e=bt("mailatlas",1024,512,(l,c,f,h)=>{for(let u=0;u<8;u++){let d=u%4*256,m=Math.floor(u/4)*256;if(l.save(),l.translate(d,m),l.beginPath(),l.rect(0,0,256,256),l.clip(),u===0||u===1){if(l.fillStyle=u?"#eae4d4":"#f4f2ec",l.fillRect(0,0,256,256),l.fillStyle="rgba(0,0,0,0.06)",l.fillRect(0,0,256,8),u||(l.fillStyle="#dfe3e2",l.fillRect(30,120,120,60),l.strokeStyle="rgba(0,0,0,0.2)",l.strokeRect(30,120,120,60)),l.fillStyle=u?"#7a9ab8":"#c8c8c4",l.fillRect(196,20,40,34),u){l.strokeStyle="rgba(40,40,40,0.4)";for(let x=0;x<4;x++)l.beginPath(),l.moveTo(170,30+x*6),l.bezierCurveTo(185,25+x*6,200,35+x*6,236,30+x*6),l.stroke()}}else if(u===2)Me(l,256,256,h,"#d2b47a",.08,800,2),l.fillStyle="rgba(80,60,30,0.3)",l.beginPath(),l.arc(128,40,10,0,At),l.fill();else if(u===3){l.fillStyle="#f6f2e6",l.fillRect(0,0,256,256),l.fillStyle="#c4221c",l.fillRect(0,0,256,50),kt(l,"WEEKLY SPECIALS",128,26,26,{color:"#fff",maxW:240,font:bi});let x=["#e8701c","#2f7a32","#f2c21b","#1d4f9a","#8a4a1a","#c4221c"];for(let g=0;g<6;g++){let p=12+g%3*82,_=62+Math.floor(g/3)*96;l.fillStyle=x[g],l.beginPath(),l.arc(p+35,_+32,24,0,At),l.fill(),kt(l,"$"+(1+g)+".99",p+35,_+76,18,{color:"#c4221c"})}}else if(u===4){l.fillStyle="#fbf6dc",l.fillRect(0,0,256,256),l.setLineDash([6,4]),l.strokeStyle="#555";for(let x=0;x<4;x++)l.strokeRect(10+x%2*124,40+Math.floor(x/2)*106,112,96);l.setLineDash([]),kt(l,"COUPONS",128,20,22,{color:"#1d4f9a"});for(let x=0;x<4;x++)kt(l,["50% OFF","SAVE $1","BUY 1 GET 1","FREE"][x],66+x%2*124,88+Math.floor(x/2)*106,18,{color:"#111",maxW:100})}else u===5?(l.fillStyle="#e8e4dc",l.fillRect(0,0,256,256),l.fillStyle="#3a5a7a",l.fillRect(0,40,256,150),l.fillStyle="#c8a070",l.fillRect(30,100,90,70),l.fillStyle="#8a3a2a",l.fillRect(140,80,80,100),kt(l,"HOME & GARDEN",128,22,22,{color:"#222",maxW:240}),kt(l,"SPRING CATALOG",128,220,18,{color:"#222"})):u===6?Mu(l,256,256,0,h):(l.fillStyle="#f4f2ec",l.fillRect(0,0,256,256),l.fillStyle="#2a6a5a",l.fillRect(0,0,256,34),kt(l,"STATEMENT",128,18,20,{color:"#fff"}),qe(l,20,50,216,10,14,h,"#444"),kt(l,"FINAL NOTICE",128,216,22,{color:"#c4221c"}));ae(l,256,256,h,1.2),l.restore()}}),i=new _i(1),s=[.02,.52,.05,.55],r=[[.24,.0015,.105,0],[.24,.0015,.105,1],[.23,.004,.3,2],[.216,8e-4,.28,3],[.216,8e-4,.28,4],[.2,.006,.26,5],[.15,.001,.105,6],[.216,8e-4,.28,7]],o=7+Math.floor(t()*8),a=0;for(let l=0;l<o;l++){let[c,f,h,u]=r[Math.floor(t()*r.length)],d=vu(4,2,u),m=l>2&&t()<.15,x=m?(t()-.5)*.5:(t()-.5)*.06,g=m?(t()-.5)*.4:(t()-.5)*.06,p=new re().compose(new N(x,m?0:a,g),new Sn().setFromEuler(new En(0,t()*At,0)),new N(1,1,1));i.add(J(c,f,h),p,[s,s,d,s,s,s],[0]),m||(a+=f+4e-4)}for(let l of i.meshes([ee("mailmat",{map:e,roughness:.9})]))n.add(l)},shoes(n,t){let e=qt(t,["#2a3a5a","#7a2a22","#3a3a3c","#5a6a4a","#c8c4b8"]),i=q(bt("shoeup"+e,256,128,(d,m,x,g)=>{Me(d,m,x,g,e,.08,2e3,2),d.fillStyle=Xn(e,-.25),d.fillRect(0,x*.75,m,x*.25),d.strokeStyle="rgba(255,255,255,0.35)",d.setLineDash([3,3]),d.beginPath(),d.moveTo(0,x*.72),d.lineTo(m,x*.72),d.stroke(),d.setLineDash([]);for(let p=0;p<40;p++)d.fillStyle=g()<.6?"rgba(80,60,40,0.35)":"rgba(235,235,225,0.35)",d.beginPath(),d.ellipse(g()*m,x*(.8+g()*.2),3+g()*10,2+g()*4,0,0,At),d.fill();ae(d,m,x,g,1.5)}),.8),s=ee("shoesole",{color:14210248,roughness:.9}),r=nt.blackPl,o=d=>{let m=.036+.012*Math.sin(Math.min(1,d*1.25)*Math.PI*.9),x=d>.82?Math.sqrt(Math.max(.05,1-((d-.82)/.18)**2)):1,g=d<.08?Math.sqrt(Math.max(.2,1-((.08-d)/.08)**2)):1;return m*x*g},a=.27,l=(d,m,x,g,p,_)=>en(pn,"shoe"+d,()=>{let y=new Ae(1,1,1,g,p,10),b=y.attributes.position;for(let L=0;L<b.count;L++){let R=b.getX(L)*2,w=b.getY(L)+.5,P=b.getZ(L)+.5,T=o(P)*_,M=x(P);b.setXYZ(L,R*T*(1-.3*w*w),m+w*M,(P-.5)*a)}return y.computeVertexNormals(),y}),c=l("sole",0,()=>.022,2,1,1.06),f=l("up",.02,d=>d<.45?.085-d*.02:.076-(d-.45)*.08,3,3,1),h=(d,m,x,g)=>{let p=new Ht;v(p,c,s),v(p,f,i),v(p,Dn(.03,10),r,0,.1,-.075,0,0,0,.95,1,1.5);for(let _=0;_<4;_++)v(p,J(.045,.004,.006),nt.whitePl,0,.088-_*.006,-.03+_*.022,.25,0,0);p.position.set(d,0,m),p.rotation.y=x,g&&(p.rotation.z=Math.PI/2*g,p.position.y=.05,p.position.x+=g*.05),n.add(p)},u=t()<.35;h(-.055,0,(t()-.5)*.15,0),h(u?.12:.055,u?.05:(t()-.5)*.04,u?.6+t():(t()-.5)*.15,u?1:0)},clothes_pile(n,t){let e=bt("clothesatlas",512,512,(o,a,l,c)=>{o.clearRect(0,0,a,l);let f=(x,g)=>{o.save(),o.translate(x%2*256,Math.floor(x/2)*256),g(),o.restore()},h=(x,g)=>{if(Me(o,256,256,c,x,.08,1500,2),g==="denim"){o.strokeStyle="rgba(255,255,255,0.08)";for(let p=-256;p<256;p+=4)o.beginPath(),o.moveTo(p,0),o.lineTo(p+256,256),o.stroke()}if(g==="plaid"){o.globalAlpha=.5,o.fillStyle="#1a1a1a";for(let p=0;p<256;p+=48)o.fillRect(p,0,18,256),o.fillRect(0,p,256,18);o.fillStyle="#e8d8a0";for(let p=30;p<256;p+=48)o.fillRect(p,0,3,256),o.fillRect(0,p,256,3);o.globalAlpha=1}if(g==="knit"){o.strokeStyle="rgba(0,0,0,0.15)";for(let p=0;p<256;p+=5)o.beginPath(),o.moveTo(p,0),o.lineTo(p,256),o.stroke()}ae(o,256,256,c,1.5)},u=()=>{o.beginPath(),o.moveTo(70,20),o.lineTo(100,10),o.quadraticCurveTo(128,30,156,10),o.lineTo(186,20),o.lineTo(250,70),o.lineTo(222,110),o.lineTo(190,85),o.lineTo(192,246),o.lineTo(64,246),o.lineTo(66,85),o.lineTo(34,110),o.lineTo(6,70),o.closePath(),o.clip()},d=()=>{o.beginPath(),o.moveTo(56,6),o.lineTo(200,6),o.lineTo(226,250),o.lineTo(146,250),o.lineTo(128,90),o.lineTo(110,250),o.lineTo(30,250),o.closePath(),o.clip()},m=()=>{o.beginPath(),o.moveTo(60,14),o.quadraticCurveTo(128,40,196,14),o.lineTo(252,200),o.lineTo(214,214),o.lineTo(192,110),o.lineTo(196,250),o.lineTo(60,250),o.lineTo(64,110),o.lineTo(42,214),o.lineTo(4,200),o.closePath(),o.clip()};f(0,()=>{u(),h("#7a1d1a","plaid")}),f(1,()=>{d(),h("#2a3e5e","denim"),o.fillStyle="rgba(255,255,255,0.15)",o.fillRect(0,0,256,14)}),f(2,()=>{m(),h("#8a8a84","knit")}),f(3,()=>{u(),h(qt(c,["#2f5a3a","#c8b890","#3a4a6a"]),"tee")})}),i=new _i(1),s=3+Math.floor(t()*3),r=.02;for(let o=0;o<s;o++){let a=o<4?o:Math.floor(t()*4),l=.5+t()*.15,c=a===1?.8:.62,f=(t()-.5)*.25,h=(t()-.5)*.25,u=t()*At,d=t()*10,m=11,x=11,g=new Be(1,1,m,x).rotateX(-Math.PI/2),p=g.attributes.position,_=Math.cos(u),y=Math.sin(u);for(let b=0;b<p.count;b++){let L=p.getX(b),R=p.getZ(b),w=.55+t()*.08,P=L*l*w,T=R*c*w,M=P*_-T*y+f,U=P*y+T*_+h,W=Math.hypot(M,U),F=Math.max(0,r+.06-W*.35)+Math.sin(L*9+d)*.012+Math.cos(R*11+d)*.012;p.setXYZ(b,M,Math.max(.004+o*.002,F),U)}g.computeVertexNormals(),i.add(g,new re,[vu(2,2,a)],[0]),r+=.02}for(let o of i.meshes([ee("clothesmat",{map:e,roughness:.95,side:we,alphaTest:.5})]))n.add(o)},dish_stack(n,t){let e=bt("dishatlas",256,256,(x,g,p,_)=>{["#f2f0e8","#e8dcc0","#3a5a8a","#8a2a22","#4a6a4a","#d8d4cc","#f2f0e8","#e8e4dc","#c8a070"].forEach((b,L)=>{let R=L%3*85,w=Math.floor(L/3)*85;if(x.fillStyle=b,x.fillRect(R,w,85,85),L===6)for(let P=0;P<14;P++)x.fillStyle=`rgba(${90+_()*60},${50+_()*30},20,0.5)`,x.beginPath(),x.ellipse(R+_()*85,w+_()*50,2+_()*6,1+_()*4,_()*3,0,At),x.fill();L===7&&(x.fillStyle="rgba(90,60,30,0.45)",x.fillRect(R,w+50,85,10));for(let P=0;P<40;P++)x.fillStyle="rgba(90,80,60,0.12)",x.fillRect(R+_()*85,w+_()*85,2,2)})}),i=x=>{let g=x%3*85+6,p=Math.floor(x/3)*85+6;return[g/256,1-(p+73)/256,(g+73)/256,1-p/256]},s=new _i(1),r=(x,g,p,_=0,y=0)=>new re().compose(new N(x,g,p),new Sn().setFromEuler(new En(y,_,0)),new N(1,1,1)),o=Ge("dplate",[[0,0],[.07,0],[.09,.012],[.12,.018],[.118,.02],[.088,.015],[.068,.004],[0,.004]],16),a=Ge("dbowl",[[0,0],[.035,0],[.065,.03],[.075,.058],[.071,.058],[.061,.032],[.033,.006],[0,.006]],14),l=Ge("dmug",[[0,0],[.04,0],[.042,.095],[.037,.095],[.035,.008],[0,.008]],12),c=Le(.025,.007,4,8,Math.PI*1.2),f=qt(t,[0,1,5]),h=3+Math.floor(t()*5),u=-.08+(t()-.5)*.04;for(let x=0;x<h;x++)s.add(o,r(u+(t()-.5)*.008,x*.0145,(t()-.5)*.008,t()*At),[i(x===h-1&&t()<.6?6:f)],[0]);let d=Math.floor(t()*3);for(let x=0;x<d;x++)s.add(a,r(.12,x*.02,-.06,t()*At),[i(qt(t,[0,2,4]))],[0]);let m=1+Math.floor(t()*3);for(let x=0;x<m;x++){let g=i(qt(t,[2,3,4,7,1])),p=.6+x*1.3+t()*.4,_=.17,y=Math.cos(p)*_,b=Math.sin(p)*_,L=t()*At,R=x===m-1&&t()<.3,w=r(y,R?.042:0,b,L,R?Math.PI/2:0);s.add(l,w,[g],[0]),s.add(c,w.clone().multiply(r(.045,.05,0,0,0).multiply(new re().makeRotationZ(-Math.PI*.6))),[g],[0])}if(t()<.6)for(let x=0;x<2;x++)s.add(J(.012,.003,.19),r(u+(x-.5)*.04,h*.0145+.006+x*.003,0,.3+x*.4),[i(5)],[0]);for(let x of s.meshes([ee("dishmat",{map:e,roughness:.35,side:we})]))n.add(x)}};Object.assign(Uo,Ny);var Oy=new Set(["wall_frame","wall_clock","curtain"]),ml=Object.keys(Uo),Uy=new Set(["rug","paper_scatter","glass_shards"]),j0={polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2};function vi(n,t=0){let e=new Ht,i=Qi(Bs(String(n))^Math.imul((t|0)+3,2246822519)),s=Uo[n];if(s)s(e,i);else{let r=new Ht;Uo.cardboard_box(r,i),e.add(r)}return Pu(e,n,Uy.has(n),Oy.has(n))}function Vu(n,t,e){let i=`boxw${n.toFixed(3)},${t.toFixed(3)},${e.toFixed(3)}`;return en(pn,i,()=>{let s=new Ae(n,t,e),r=s.attributes.uv,o=[[e,t],[e,t],[n,e],[n,e],[n,t],[n,t]];for(let a=0;a<6;a++)for(let l=0;l<4;l++){let c=a*4+l;r.setXY(c,r.getX(c)*o[a][0],r.getY(c)*o[a][1])}return s.translate(0,t/2,0),s})}function ri(n,t,e){return bt("fx|"+n,t,t,e,{repeat:[1,1]})}function Wn(n,t,e,i,s=1){ae(n,t,e,i,s);for(let r=0;r<1500*s;r++)n.fillStyle=`rgba(200,190,170,${.04+i()*.06})`,n.fillRect(i()*t,i()*e,1.5,1.5)}var xe={wood(n="#6a4528"){return ee("fxwood"+n,{map:ri("wood"+n,512,(t,e,i,s)=>{t.fillStyle=n,t.fillRect(0,0,e,i);for(let r=0;r<140;r++){t.strokeStyle=`rgba(${s()<.5?"30,18,8":"255,230,200"},${.04+s()*.1})`,t.lineWidth=1+s()*3;let o=s()*i;t.beginPath(),t.moveTo(0,o);for(let a=0;a<=e;a+=32)t.lineTo(a,o+Math.sin(a*.01+r)*6);t.stroke()}Wn(t,e,i,s,1)}),roughness:.62})},fabric(n){return ee("fxfab"+n,{map:ri("fab"+n,256,(t,e,i,s)=>{t.fillStyle=n,t.fillRect(0,0,e,i);for(let r=0;r<i;r+=2)t.fillStyle=`rgba(0,0,0,${.05+s()*.06})`,t.fillRect(0,r,e,1);for(let r=0;r<e;r+=2)t.fillStyle=`rgba(255,255,255,${.03+s()*.04})`,t.fillRect(r,0,1,i);for(let r=0;r<5;r++){let o=s()*e,a=s()*i,l=20+s()*50,c=t.createRadialGradient(o,a,0,o,a,l);c.addColorStop(0,"rgba(60,45,30,0.18)"),c.addColorStop(1,"rgba(60,45,30,0)"),t.fillStyle=c,t.fillRect(o-l,a-l,l*2,l*2)}Wn(t,e,i,s,.8)}),roughness:.95})},sheet(){return ee("fxsheet",{map:ri("sheet",256,(n,t,e,i)=>{Me(n,t,e,i,"#e4e2da",.05,1500,2),n.strokeStyle="rgba(0,0,0,0.07)";for(let s=0;s<25;s++)n.lineWidth=1+i()*2,n.beginPath(),n.moveTo(i()*t,i()*e),n.bezierCurveTo(i()*t,i()*e,i()*t,i()*e,i()*t,i()*e),n.stroke();Wn(n,t,e,i,.8)}),roughness:.95,side:we})},enamel(n="w",t="#e9e8e2"){return ee("fxenamel"+n,{map:ri("enamel"+n,256,(e,i,s,r)=>{e.fillStyle=t,e.fillRect(0,0,i,s);for(let o=0;o<18;o++){let a=r()*i,l=e.createLinearGradient(0,0,0,s);l.addColorStop(0,"rgba(120,100,60,0)"),l.addColorStop(1,`rgba(120,100,60,${.05+r()*.08})`),e.fillStyle=l,e.fillRect(a,r()*s*.5,2+r()*4,s)}Wn(e,i,s,r,1)}),roughness:.3})},painted(n){return ee("fxpaint"+n,{map:ri("paint"+n,256,(t,e,i,s)=>{Me(t,e,i,s,n,.04,1500,2);for(let r=0;r<25;r++)t.fillStyle="rgba(60,50,40,0.25)",t.beginPath(),t.ellipse(s()*e,s()*i,1+s()*4,1+s()*2,s()*3,0,At),t.fill();Wn(t,e,i,s,1)}),roughness:.55,metalness:.05})},metal(n="#9ea3a8",t=""){return ee("fxmetal"+n+t,{map:ri("metal"+n,128,(e,i,s,r)=>{e.fillStyle=n,e.fillRect(0,0,i,s);for(let o=0;o<200;o++)e.fillStyle=r()<.5?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.08)",e.fillRect(0,r()*s,i,1);Wn(e,i,s,r,.6)}),roughness:.38,metalness:.5})},dark(n="k",t="#1b1c1e",e=.6){return ee("fxdark"+n,{map:ri("dark"+n,128,(i,s,r,o)=>{Me(i,s,r,o,t,.04,600,2),Wn(i,s,r,o,1.2)}),roughness:e})},laminate(n="#b8b4aa"){return ee("fxlam"+n,{map:ri("lam"+n,256,(t,e,i,s)=>{Me(t,e,i,s,n,.06,3e3,1.5),Wn(t,e,i,s,1.2)}),roughness:.5})},counterTop(n="#cfc8b8"){return ee("fxtop"+n,{map:ri("top"+n,256,(t,e,i,s)=>{Me(t,e,i,s,n,.1,5e3,2);for(let r=0;r<300;r++)t.fillStyle=s()<.5?"rgba(60,50,40,0.35)":"rgba(255,255,255,0.3)",t.fillRect(s()*e,s()*i,2,2);Wn(t,e,i,s,1.5)}),roughness:.4})},card(){return ee("fxcard",{map:ri("card",256,(n,t,e,i)=>{Me(n,t,e,i,"#a9824f",.1,2500,2),n.fillStyle="rgba(200,170,110,0.7)",n.fillRect(0,e*.45,t,e*.1),Wn(n,t,e,i,1)}),roughness:.9})},glass(){return ee("fxglass",{map:ri("glass",256,(n,t,e,i)=>{n.fillStyle="#c8d4d8",n.fillRect(0,0,t,e);for(let s=0;s<40;s++){let r=i()*t,o=i()*e,a=10+i()*60,l=n.createRadialGradient(r,o,0,r,o,a);l.addColorStop(0,"rgba(255,255,255,0.6)"),l.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=l,n.fillRect(r-a,o-a,a*2,a*2)}for(let s=0;s<30;s++)n.fillStyle="rgba(90,80,60,0.4)",n.fillRect(i()*t,i()*e*.6+e*.4,1+i()*2,10+i()*50)}),roughness:.1,metalness:.1,transparent:!0,opacity:.32,depthWrite:!1})}};function _t(n,t,e,i,s,r,o,a,l=!0){let c=Math.max(.001,i-e),f=Math.max(.001,r-s),h=Math.max(.001,a-o);return v(n,l?Vu(c,f,h):J(c,f,h),t,(e+i)/2,s,(o+a)/2)}function Vn(n,t,e,i,s,r,o,a,l){let c=i-e,f=r-s,h=a-o;return v(n,Qt(+c.toFixed(3),+f.toFixed(3),+h.toFixed(3),l),t,(e+i)/2,s,(o+a)/2)}var nf={sofa(n,t,e,i,s){let r=xe.fabric(qt(s,["#5a5f4a","#6a4a3a","#3e4a5a","#7a7468","#4a3a42"])),o=xe.wood("#3a2616"),a=Math.min(.08,i*.1),l=Math.min(.46,i*.55),c=Math.min(.2,t*.1),f=Math.min(.22,e*.25),h=Math.min(i,l+.2);for(let m of[-t/2+.06,t/2-.06])for(let x of[-e/2+.06,e/2-.06])v(n,K(.025,.02,a,8),o,m,0,x);Vn(n,r,-t/2,t/2,a,l-.12,-e/2,e/2,.03),Vn(n,r,-t/2,t/2,a,i,-e/2,-e/2+f,.05);for(let m of[-1,1])Vn(n,r,m<0?-t/2:t/2-c,m<0?-t/2+c:t/2,a,h,-e/2,e/2,.06);let u=t-2*c>1.5?3:t-2*c>.9?2:1,d=(t-2*c)/u;for(let m=0;m<u;m++){let x=-t/2+c+m*d+.006,g=x+d-.012,p=s()*.025;Vn(n,r,x,g,l-.13,l-p,-e/2+f+.005,e/2-.005,.05);let _=Vn(n,r,x+.01,g-.01,l-.02,Math.min(i-.02,l+(i-l)*.85),-e/2+f,-e/2+f+.16,.06);_.rotation.x=-.08-s()*.08}if(s()<.8){let m=new Ht;v(m,Qt(.4,.38,.12,.05),Su(s),0,0,0),m.position.set(-t/2+c+.25,l-.02,-e/2+f+.15),m.rotation.set(-.5,.3,.35),n.add(m)}},table(n,t,e,i,s){let r=xe.wood(qt(s,["#6a4528","#8a6440","#4a3020"])),o=xe.wood("#7a5434"),a=.035;_t(n,o,-t/2,t/2,i-a,i,-e/2,e/2);let l=t/2-.08,c=e/2-.08;for(let x of[-l,l])for(let g of[-c,c])_t(n,r,x-.03,x+.03,0,i-a,g-.03,g+.03);if(_t(n,r,-l,l,i-a-.08,i-a,-c-.01,-c+.01),_t(n,r,-l,l,i-a-.08,i-a,c-.01,c+.01),_t(n,r,-l-.01,-l+.01,i-a-.08,i-a,-c,c),_t(n,r,l-.01,l+.01,i-a-.08,i-a,-c,c),e<.5||i<.5)return;let f=Math.max(1,Math.floor((t-.2)/.6)),h=Math.min(.45,i-.22),u=(x,g,p)=>{let _=new Ht,y=.4;_t(_,r,-y/2,y/2,h-.035,h,-.2,.2);for(let b of[-y/2+.03,y/2-.03])for(let L of[-.17,.17])_t(_,r,b-.017,b+.017,0,h-.035,L-.017,L+.017);for(let b of[-y/2+.03,y/2-.03])_t(_,r,b-.017,b+.017,h,i-a-.012,.2-.03,.2-.005);_t(_,r,-y/2+.02,y/2-.02,i-a-.1,i-a-.02,.2-.03,.2-.008),_t(_,r,-y/2+.02,y/2-.02,h+.12,h+.16,.2-.028,.2-.01),_.position.set(x,0,g),_.rotation.y=p+(s()-.5)*.08,n.add(_)},d=Math.min(.4,t/f-.06),m=t/e<1.5&&e>=1.15;for(let x of[-1,1])for(let g=0;g<f;g++){if(s()<.12)continue;let p=-t/2+(g+.5)*(t/f)+(s()-.5)*(m?.02:Math.max(0,t/f-d-.06));u(p,x*(e/2-.205),x>0?0:Math.PI)}if(m)for(let x of[-1,1])s()>.12&&u(x*(t/2-.205),(s()-.5)*.06,x*Math.PI/2)},bed(n,t,e,i,s){let r=xe.wood(qt(s,["#5a3a22","#7a5a3a","#3a2a1e"])),o=xe.sheet(),a=Su(s,!0),l=Math.min(.6,i*.62),c=.06;_t(n,r,-t/2,-t/2+c,0,i,-e/2,e/2);let f=Math.min(i,l+.06);_t(n,r,t/2-.05,t/2,0,f,-e/2,e/2);for(let R of[-e/2,e/2-.04])_t(n,r,-t/2+c,t/2-.05,.14,.32,R,R+.04);Vn(n,o,-t/2+c+.01,t/2-.06,.32,l,-e/2+.03,e/2-.03,.05);let h=e>1.2?2:1;for(let R=0;R<h;R++){let w=h===1?0:(R-.5)*e*.48;Vn(n,o,-t/2+c+.04,-t/2+c+.4,l-.02,l+.12,w-Math.min(.32,e*.4),w+Math.min(.32,e*.4),.06).rotation.set(0,(s()-.5)*.2,(s()-.5)*.15)}let u=-t/2+c+.45+s()*.2,d=t/2-.07,m=e/2-.02,x=Math.min(.22,l-.12),g=18,p=14,_=new Be(1,1,g,p),y=_.attributes.position,b=_.attributes.uv,L=s()*10;for(let R=0;R<y.count;R++){let w=y.getX(R)+.5,P=y.getY(R)+.5,T=u+(d-u)*w,M=(P-.5)*2*(m+x),U=Math.sin(T*9+L+M*3)*.018+Math.sin(T*23+M*11+L)*.006,W,F;Math.abs(M)<=m?(F=M,W=l+.025+U*(1-Math.abs(M)/m*.5)+(w<.12?(.12-w)*.5:0)):(F=Math.sign(M)*(m+.01),W=l+.02-(Math.abs(M)-m)+U*.4),y.setXYZ(R,T,W,F),b.setXY(R,w*(d-u),P*(m+x)*2)}_.computeVertexNormals(),v(n,_,a),v(n,K(.03,.03,2*m,8),a,u+.02,l+.03,-m,Math.PI/2,0,0)},dresser(n,t,e,i,s){let r=xe.wood(qt(s,["#6a4528","#5a3a22","#8a6a48"])),o=xe.metal("#b8a070","brass");_t(n,r,-t/2,t/2,i-.03,i,-e/2,e/2),_t(n,r,-t/2+.01,t/2-.01,0,i-.03,-e/2,e/2-.02),_t(n,xe.dark("dresserin","#1a120c"),-t/2+.02,t/2-.02,.1,i-.04,e/2-.0225,e/2-.02);let a=Math.max(2,Math.round((i-.12)/.22)),l=t>1?2:1,c=(i-.03-.1)/a;for(let f=0;f<a;f++)for(let h=0;h<l;h++){let u=f===a-1&&l===2&&s()<0?1:l,d=(t-.04)/u;if(h>=u)continue;let m=-t/2+.02+h*d+.006,x=m+d-.012,g=.1+f*c+.006,p=g+c-.012,_=(s()<.15,0);_t(n,r,m,x,g,p,e/2-.022+_,e/2);let y=(m+x)/2,b=(g+p)/2;for(let L of d>.5?[-.12,.12]:[0])v(n,K(.012,.012,.012,8),o,y+L,b,e/2-.012,Math.PI/2,0,0)}},fridge(n,t,e,i,s){let r=xe.enamel("fridge",qt(s,["#e9e8e2","#d8d6cc","#c8cacb"])),o=xe.dark("fridgek","#2a2b2d",.5),a=ee("fxnotes",{map:bt("fridgenotes",256,256,(u,d,m,x)=>{u.fillStyle="#ece6d0",u.fillRect(0,0,d,m),u.fillStyle="#f2c21b",u.fillRect(0,0,d/2,m/2),u.fillStyle="#f4f4f4",u.fillRect(d/2,0,d/2,m/2),u.fillStyle="#cfe0ef",u.fillRect(0,m/2,d/2,m/2),u.fillStyle="#f6f0e4",u.fillRect(d/2,m/2,d/2,m/2),qe(u,12,20,100,6,12,x,"#333"),qe(u,140,20,100,8,10,x,"#333"),u.strokeStyle="#2a6fd6",u.lineWidth=4,u.strokeRect(30,170,60,50),u.beginPath(),u.moveTo(25,172),u.lineTo(60,140),u.lineTo(95,172),u.stroke(),u.fillStyle="#f08a1c",u.beginPath(),u.arc(105,150,12,0,At),u.fill(),qe(u,140,150,100,7,12,x,"#223"),ae(u,d,m,x,1)}),roughness:.9}),l=.045;Vn(n,r,-t/2+.005,t/2-.005,0,i-.005,-e/2,e/2-l,.02),_t(n,o,-t/2+.03,t/2-.03,0,.09,e/2-l,e/2-l+.01);let c=i*(i>1.5?.68:.62);Vn(n,r,-t/2,t/2,.1,c-.006,e/2-l+.002,e/2,.015),Vn(n,r,-t/2,t/2,c+.006,i,e/2-l+.002,e/2,.015),_t(n,o,-t/2+.01,t/2-.01,c-.008,c+.008,e/2-l-.004,e/2-l+.004);let f=t/2-.07;_t(n,o,f-.015,f+.015,c-.42>.2?c-.42:.2,c-.08,e/2-.005-0,e/2),_t(n,o,f-.015,f+.015,c+.06,Math.min(i-.06,c+.32),e/2-.005,e/2);let h=[[-.15,c-.25,0,0],[.05,c-.45,1,1],[-.12,c+.15,2,0],[-.05,c-.75,3,1]];for(let[u,d,m,x]of h){if(s()<.25||d<.2)continue;let g=m%2/2,p=1-(Math.floor(m/2)+1)/2,_=new Be(.14,.18),y=_.attributes.uv;for(let b=0;b<y.count;b++)y.setXY(b,g+y.getX(b)*.5,p+y.getY(b)*.5);v(n,_,a,Math.max(-t/2+.1,Math.min(t/2-.15,u*t/.75)),d,e/2-.0015,0,0,x?.12:-.06),v(n,K(.008,.008,.004,8),o,Math.max(-t/2+.1,Math.min(t/2-.15,u*t/.75)),d+.075,e/2-.004,Math.PI/2,0,0)}},counter(n,t,e,i,s){let r=xe.painted(qt(s,["#e8e2d2","#8a9a88","#5a6a7a","#d8d0c0"])),o=xe.counterTop(qt(s,["#cfc8b8","#6a6a68","#b8a890"])),a=xe.metal("#b8bcc0","ss"),l=ee("fxcooktop",{map:bt("cooktop",256,256,(w,P,T,M)=>{w.fillStyle="#141516",w.fillRect(0,0,P,T),w.strokeStyle="rgba(200,200,200,0.35)",w.lineWidth=3;for(let[U,W,F]of[[64,64,44],[192,64,34],[64,192,34],[192,192,44]])w.beginPath(),w.arc(U,W,F,0,At),w.stroke(),w.beginPath(),w.arc(U,W,F*.6,0,At),w.stroke();Wn(w,P,T,M,1.5)}),roughness:.25,metalness:.1}),c=.04,f=.09;_t(n,l,-t/2,t/2,0,f,-e/2,e/2-.07),_t(n,r,-t/2,t/2,f,i-c,-e/2,e/2-.03);let h=t>=.7&&(t>=1.6||s()<.55),u=t>=.7&&(t>=1.6||!h),d=.6,m=.62,x=h?u?-t/2+.2+d/2:(s()-.5)*(t-d-.1):null,g=u?h?t/2-.15-m/2:(s()-.5)*(t-m-.1):null,p=Math.max(1,Math.round(t/.5)),_=t/p;for(let w=0;w<p;w++){let P=-t/2+w*_+.004,T=P+_-.008,M=(P+T)/2;g!==null&&Math.abs(M-g)<m/2||(_t(n,r,P,T,i-c-.17,i-c-.01,e/2-.03,e/2-.008),_t(n,a,M-.06,M+.06,i-c-.1,i-c-.085,e/2-.008,e/2),_t(n,r,P,T,f+.01,i-c-.19,e/2-.03,e/2-.008),_t(n,a,T-.04,T-.028,i-c-.4,i-c-.26,e/2-.008,e/2))}if(g!==null){let w=g-m/2,P=g+m/2;_t(n,l,w,P,f,i-c,e/2-.035,e/2-.005),_t(n,a,w+.1,P-.1,f+.2,i-c-.25,e/2-.006,e/2-.003),_t(n,a,w+.06,P-.06,i-c-.17,i-c-.15,e/2-.004,e/2);for(let T=0;T<4;T++)v(n,K(.018,.018,.02,8),a,w+.1+T*(m-.2)/3,i-c-.07,e/2-.02,Math.PI/2,0,0)}let y=[];x!==null&&y.push([x-d/2+.04,x+d/2-.04,"sink"]),g!==null&&y.push([g-m/2,g+m/2,"stove"]),y.sort((w,P)=>w[0]-P[0]);let b=-t/2,L=e/2-.08,R=-e/2+.1;for(let[w,P,T]of y){if(_t(n,o,b,w,i-c,i,-e/2,e/2),_t(n,o,w,P,i-c,i,L,e/2),_t(n,o,w,P,i-c,i,-e/2,R),T==="sink"){let M=i-c-.18;_t(n,a,w,P,M,M+.01,R,L),_t(n,a,w,w+.006,M,i,R,L),_t(n,a,P-.006,P,M,i,R,L),_t(n,a,w,P,M,i,R,R+.006),_t(n,a,w,P,M,i,L-.006,L),P-w>.45&&_t(n,a,(w+P)/2-.005,(w+P)/2+.005,M,i-.02,R,L),v(n,K(.03,.03,.004,10),l,(w+P)/2-(P-w)/4,M+.01,(R+L)/2),v(n,K(.025,.025,.004,10),a,(w+P)/2,i-.004,R-.045)}else _t(n,l,w,P,i-c,i,R,L);b=P}_t(n,o,b,t/2,i-c,i,-e/2,e/2)},tub(n,t,e,i,s){let r=xe.enamel("tub","#ecebe6"),o=ee("fxtubring",{map:ri("tubring",256,(c,f,h,u)=>{c.fillStyle="#e4e0d4",c.fillRect(0,0,f,h);let d=c.createRadialGradient(f*.6,h*.5,10,f*.5,h*.5,f*.7);d.addColorStop(0,"rgba(150,120,70,0.35)"),d.addColorStop(1,"rgba(150,120,70,0.05)"),c.fillStyle=d,c.fillRect(0,0,f,h),Wn(c,f,h,u,2)}),roughness:.35}),a=xe.metal("#c8ccd0","chrome"),l=.07;_t(n,r,-t/2,t/2,0,.06,-e/2,e/2),_t(n,o,-t/2+l,t/2-l,.06,.07,-e/2+l,e/2-l),Vn(n,r,-t/2,t/2,0,i,e/2-l,e/2,.02),Vn(n,r,-t/2,t/2,0,i,-e/2,-e/2+l,.02),Vn(n,r,-t/2,-t/2+l,0,i,-e/2,e/2,.02),Vn(n,r,t/2-l*1.6,t/2,0,i,-e/2,e/2,.02),_t(n,o,-t/2+l,t/2-l*1.6,.07,.11,-e/2+l,-e/2+l+.002),v(n,K(.025,.025,.005,10),a,-t/2+l+.1,.07,0),v(n,K(.018,.018,.12,8),a,-t/2+l,i-.12,0,0,0,-Math.PI/2);for(let c of[-.09,.09])v(n,K(.022,.022,.03,8),a,-t/2+l,i-.07,c,0,0,-Math.PI/2)},cabinet(n,t,e,i,s){let r=xe.painted(qt(s,["#d8d4c8","#6a7a6a","#8a7a6a","#b8bcc0"])),o=xe.metal("#9a9ea2","cab");_t(n,r,-t/2,t/2,0,i,-e/2,e/2-.02);let a=t>.55?2:1,l=i>1.3?i*.55:0;for(let c=0;c<a;c++)for(let[f,h]of l?[[.08,l-.005],[l+.005,i-.04]]:[[.08,i-.04]]){let u=-t/2+.01+c*(t-.02)/a+.004,d=u+(t-.02)/a-.008;_t(n,r,u,d,f,h,e/2-.02,e/2),_t(n,r,u+.05,d-.05,f+.05,h-.05,e/2-.005,e/2+0);let m=a===2?c===0?d-.04:u+.04:d-.04;_t(n,o,m-.008,m+.008,(f+h)/2-.06,(f+h)/2+.06,e/2-0,e/2)}_t(n,xe.dark("kickc"),-t/2+.02,t/2-.02,0,.08,e/2-.05,e/2-.03)},checkout(n,t,e,i,s){let r=xe.laminate(qt(s,["#8a8e92","#b8b0a0","#5a6a5a"])),o=xe.dark("belt","#18191b",.85),a=xe.metal("#b0b4b8","lane"),l=Math.min(.92,i);_t(n,r,-t/2,t/2,0,l-.05,-e/2+.02,e/2-.02),_t(n,o,-t/2+.03,t/2-.03,0,.06,-e/2+.02,e/2-.02);let c=t/2-Math.min(.8,t*.4);_t(n,a,-t/2,t/2,l-.05,l-.03,-e/2,e/2),_t(n,o,-t/2+.05,c,l-.03,l-.005,-e/2+.06,e/2-.06),_t(n,a,-t/2,c,l-.03,l,-e/2,-e/2+.05),_t(n,a,-t/2,c,l-.03,l,e/2-.05,e/2),v(n,K(.025,.025,e-.12,8),a,c,l-.03,-(e-.12)/2,Math.PI/2,0,0),_t(n,r,c+.06,c+.36,l-.03,l-.02,-.15,.15),_t(n,a,c+.04,t/2,l-.03,l-.01,-e/2,e/2),_t(n,o,-t/2+.4+s()*(c+t/2-.8),-t/2+.42+s()*0+.36,l-.005,l+Math.min(.03,i-l),-.15,.15);let f=t/2-.2,h=-e/2+.15,u=i-l;if(u>.12){let d=Math.min(i-.18,l+.25);v(n,K(.02,.025,Math.max(.02,d-l),8),o,f,l,h);let m=new Ht;_t(m,o,-.15,.15,0,Math.min(.22,i-d-.01),-.02,.02),_t(m,a,-.13,.13,.015,Math.min(.2,i-d-.03),.02,.023,!1),m.position.set(f,d,h),m.rotation.y=-.6,n.add(m)}if(u>.04){_t(n,o,t/2-.5,t/2-.3,l,l+.035,e/2-.2,e/2-.06);let d=v(n,J(.08,Math.min(.12,u-.005),.05),o,t/2-.15,l,e/2-.12);d.rotation.x=-.3}},coolers(n,t,e,i,s){let r=xe.dark("coolerframe","#2a2c2f",.45),o=ee("fxcoolerin",{color:1447962,roughness:.7}),a=xe.glass(),l=Math.max(1,Math.round(t/.76)),c=t/l,f=.05;_t(n,r,-t/2,t/2,0,.12,-e/2,e/2),_t(n,r,-t/2,t/2,i-.16,i,-e/2,e/2),_t(n,r,-t/2,t/2,.12,i-.16,-e/2,-e/2+.03),_t(n,r,-t/2,-t/2+.03,.12,i-.16,-e/2,e/2),_t(n,r,t/2-.03,t/2,.12,i-.16,-e/2,e/2),_t(n,o,-t/2+.03,t/2-.03,.12,i-.16,-e/2+.03,-e/2+.035);let h=Math.max(2,Math.floor((i-.4)/.32)),u=(i-.28)/(h+0),d=new _i(1),m=bt("coolerbottles",512,64,(g,p,_)=>{["#a8141a","#2f8a3a","#e8701c","#1d4f9a","#f2c21b","#e9f2f6","#4a2412","#7fd62a"].forEach((b,L)=>{g.fillStyle=b,g.fillRect(L*64,0,64,_),g.fillStyle="rgba(255,255,255,0.8)",g.fillRect(L*64,_*.35,64,_*.3),g.fillStyle="rgba(0,0,0,0.6)",g.fillRect(L*64+10,_*.45,44,6)})}),x=K(.035,.035,.22,6);for(let g=0;g<h;g++){let p=.12+g*u;_t(n,r,-t/2+.03,t/2-.03,p,p+.015,-e/2+.03,e/2-f-.01);for(let _=0;_<l;_++){let y=-t/2+_*c+.08;for(let b=0;b<4;b++){if(s()>.55)continue;let L=Math.floor(s()*8),R=[L/8,0,(L+1)/8,1],w=s()<.15,P=new re().compose(new N(y+b*(c-.16)/3,p+.015+(w?.035:0),e/2-f-.08-s()*.1),new Sn().setFromEuler(new En(w?Math.PI/2:0,s()*3,0)),new N(1,Math.min(1,(u-.04)/.22),1));d.add(x,P,[R,[.01,.01,.02,.02],[.01,.01,.02,.02]],[0])}}}for(let g of d.meshes([ee("fxbottles",{map:m,roughness:.3})]))n.add(g);for(let g=0;g<l;g++){let p=-t/2+g*c,_=p+c;_t(n,r,p,p+.04,.12,i-.16,e/2-f,e/2),_t(n,r,_-.04,_,.12,i-.16,e/2-f,e/2),_t(n,a,p+.04,_-.04,.12,i-.16,e/2-f+.02,e/2-f+.026);let y=g%2?p+.08:_-.08;_t(n,r,y-.012,y+.012,i*.35,i*.65,e/2-.022,e/2)}},rx_counter(n,t,e,i,s){let r=xe.laminate(qt(s,["#d8d4c8","#8a9aa8","#b8a890"])),o=xe.counterTop("#e0dcd0"),a=ee("fxbins",{map:bt("rxbins",512,128,(m,x,g,p)=>{["#2a6fd6","#c4221c","#2f8a3a","#f2c21b"].forEach((y,b)=>{m.fillStyle=y,m.fillRect(b*128,0,128,g),m.fillStyle="#f4f2ec",m.fillRect(b*128+24,g*.35,80,30),qe(m,b*128+30,g*.35+8,68,2,8,p,"#333")}),Wn(m,x,g,p,1.2)}),roughness:.55}),l=.25;_t(n,r,-t/2,t/2,0,i-.03,e/2-l,e/2-.02),_t(n,o,-t/2,t/2,i-.03,i,e/2-l-.02,e/2);let c=Math.max(.7,i-.28);_t(n,r,-t/2,t/2,0,c-.03,-e/2,e/2-l),_t(n,o,-t/2,t/2,c-.03,c,-e/2,e/2-l);let f=J(.14,.09,.22),h=new _i(1),u=(m,x,g,p)=>{let _=Math.floor(s()*4),y=[_/4,0,(_+1)/4,1];h.add(f,new re().compose(new N(m,x,g),new Sn().setFromEuler(new En(0,p,0)),new N(1,1,1)),[y,y,y,y,y,y],[0])},d=Math.floor((t-.1)/.16);for(let m=0;m<2;m++)for(let x=0;x<d;x++){if(s()<.3)continue;let g=c+m*.095;g+.09>i||u(-t/2+.09+x*.16,g,-e/2+.13+0,(s()-.5)*.08)}for(let m=0;m<2;m++){let x=.12+m*.3;_t(n,r,-t/2+.02,t/2-.02,x-.015,x,-e/2,e/2-l);for(let g=0;g<d;g++)s()<.55&&u(-t/2+.09+g*.16,x,-e/2+.12,(s()-.5)*.1)}for(let m of h.meshes([a]))n.add(m)},desk(n,t,e,i,s){let r=xe.wood(qt(s,["#6a4528","#9a7a5a","#4a4a4c"])),o=xe.laminate("#d8d4cc"),a=xe.dark("desk","#1d1e20",.45),l=Math.min(.75,i-.25),c=.05;_t(n,r,-t/2,t/2,0,i-.03,e/2-c,e/2),_t(n,o,-t/2,t/2,i-.03,i,e/2-.28,e/2);for(let u of[-1,1])_t(n,r,u<0?-t/2:t/2-.04,u<0?-t/2+.04:t/2,0,l,-e/2,e/2-c);_t(n,o,-t/2,t/2,l-.03,l,-e/2,e/2-c);let f=(s()-.5)*(t-.7),h=Math.min(.32,i-l-.02);if(h>.12){v(n,J(.2,.012,.15),a,f,l,-e/2+.25),v(n,J(.04,h*.4,.03),a,f,l,-e/2+.25);let u=new Ht;_t(u,a,-.26,.26,0,h*.75,-.02,.02,!1),u.position.set(f,l+h*.25,-e/2+.27),u.rotation.x=-.05,n.add(u)}v(n,J(.44,.02,.14),a,f,l,-e/2+.48>e/2-c-.08?e/2-c-.09:-e/2+.48,0,(s()-.5)*.2,0),v(n,J(.18,.05,.2),a,f+.45<t/2-.15?f+.45:f-.45,l,-e/2+.22);for(let u=0;u<4;u++)v(n,J(.216,.002,.28),o,(s()-.5)*(t-.4),l+.001+u*.002,(s()-.5)*.2-.05,0,s()*3,0)},bench(n,t,e,i,s){let r=xe.wood(qt(s,["#8a6440","#6a4a30"])),o=xe.dark("benchleg","#2a2c2e",.5),a=Math.min(.46,i),l=i>.65,c=l?e*.85:e,f=Math.max(2,Math.round(c/.11));for(let u=0;u<f;u++){let d=e/2-c+u*c/f+.008;_t(n,r,-t/2,t/2,a-.035,a,d,d+c/f-.016)}let h=Math.max(2,Math.ceil(t/1.2)+1);for(let u=0;u<h;u++){let d=-t/2+.08+u*(t-.16)/(h-1);_t(n,o,d-.025,d+.025,0,a-.035,e/2-c+.03,e/2-c+.07),_t(n,o,d-.025,d+.025,0,a-.035,e/2-.07,e/2-.03),_t(n,o,d-.025,d+.025,a-.08,a-.035,e/2-c+.03,e/2-.03),l&&_t(n,o,d-.025,d+.025,0,i-.02,-e/2,-e/2+.04)}if(l)for(let u=0;u<2;u++)_t(n,r,-t/2,t/2,i-.12-u*.14,i-.02-u*.14,-e/2+.04,-e/2+.075)},locker(n,t,e,i,s){let r=qt(s,["#4a5a6a","#6a7a5a","#8a8a86","#3a4a7a"]),o=xe.painted(r),a=ee("fxlockerdoor"+r,{map:bt("fxlockerdoor"+r,128,512,(f,h,u,d)=>{Me(f,h,u,d,r,.05,1500,2),f.fillStyle="rgba(0,0,0,0.55)";for(let m of[.05,.85])for(let x=0;x<6;x++)f.fillRect(h*.25,u*m+x*9,h*.5,4);f.fillStyle="rgba(255,255,255,0.1)",f.fillRect(3,3,h-6,2),f.fillStyle="#d8d8d4",f.fillRect(h*.35,u*.28,h*.3,16),f.fillStyle="#c8ccd0",f.fillRect(h*.75,u*.45,10,46);for(let m=0;m<6;m++)f.fillStyle="rgba(110,60,30,0.5)",f.beginPath(),f.ellipse(d()*h,d()*u,1+d()*4,1+d()*8,0,0,At),f.fill();Wn(f,h,u,d,1.5)}),roughness:.45,metalness:.3}),l=Math.max(1,Math.round(t/.32)),c=t/l;_t(n,o,-t/2,t/2,0,i,-e/2,e/2-.02),_t(n,xe.dark("lockbase"),-t/2,t/2,0,.1,e/2-.02,e/2);for(let f=0;f<l;f++){let h=-t/2+f*c+.006;v(n,J(c-.012,i-.12-.01,.018),[o,o,o,o,a,o],h+(c-.012)/2,.11,e/2-.009)}},rack(n,t,e,i,s){let r=xe.painted("#2a4a8a"),o=xe.painted("#d8601c"),a=xe.wood("#a8845a"),l=xe.card(),c=Math.max(1,Math.round(t/2.7)),f=t/c;for(let d=0;d<=c;d++){let m=-t/2+d*f,x=Math.max(-t/2,Math.min(t/2-.08,m-.04));for(let _ of[-e/2,e/2-.08])_t(n,r,x,x+.08,0,i,_,_+.08);let g=e-.16,p=Math.atan2(g,.6);for(let _=0;_<Math.floor((i-.3)/.6);_++){let y=_%2?1:-1;v(n,Vu(.03,Math.hypot(.6,g),.02),r,x+.04,.2+_*.6,-y*g/2,y*p,0,0)}}let h=Math.max(1,Math.floor((i-.2)/1.2)),u=(i-.12)/h;for(let d=0;d<=h;d++){let m=d===0?0:d*u;if(d>0)for(let g of[-e/2+.005,e/2-.065])_t(n,o,-t/2,t/2,m-.12,m,g,g+.06);if(d===h)break;let x=u-.18;for(let g=0;g<c;g++)for(let p=0;p<2;p++){if(s()<.25)continue;let _=-t/2+g*f+(p+.5)*f/2,y=Math.min(1.1,f/2-.1),b=Math.min(1,e-.1);_t(n,a,_-y/2,_+y/2,m,m+.13,-b/2,b/2);let L=s();if(L<.2)continue;let R=2,w=2,P=Math.min(.35,(x-.13)/2),T=Math.max(1,Math.floor((x-.13)*L/P));for(let M=0;M<R;M++)for(let U=0;U<w;U++)for(let W=0;W<T;W++){if(s()<.2)continue;let F=y/R-.02,H=b/w-.02,ot=_t(n,l,_-y/2+M*y/R+.01,_-y/2+M*y/R+.01+F,m+.13+W*P,m+.13+(W+1)*P-.005,-b/2+U*b/w+.01,-b/2+U*b/w+.01+H);ot.rotation.y=(s()-.5)*.06}}}}};function Su(n,t=!1){let e=qt(n,[["#7a1d1a","#22304a","#e8d8a0"],["#2f4a2a","#1a1a1a","#c8a24a"],["#4a5a7a","#e8e8e0","#1a2a4a"],["#8a7a5a","#3a2a1a","#e8e0d0"]]);return ee("fxplaid"+e.join()+t,{map:Cu(e[0],e[1],e[2]),roughness:.95,side:we})}var Wu=Object.keys(nf);function Xu(n,t=1,e=.6,i=.9,s=0){let r=nf[n]||nf.cabinet,o=t>=e,a=Math.max(t,e),l=Math.min(t,e),c=i,f=new Ht;r(f,a,l,c,Qi(Bs("fx"+n)^Math.imul((s|0)+11,2654435761)));let h=new Ht;h.add(f),o||(f.rotation.y=Math.PI/2);let u=Iu(h),d=new Nn().setFromObject(u),m=d.max.x-d.min.x>t+1e-4?t/(d.max.x-d.min.x):1,x=d.max.z-d.min.z>e+1e-4?e/(d.max.z-d.min.z):1,g=d.max.y>i+1e-4?i/d.max.y:1;if(m!==1||g!==1||x!==1){u.scale.set(m,g,x),u.updateMatrixWorld(!0);let _=new Nn().setFromObject(u);u.position.x-=Math.max(0,_.max.x-t/2)+Math.min(0,_.min.x+t/2),u.position.z-=Math.max(0,_.max.z-e/2)+Math.min(0,_.min.z+e/2)}let p=new Ht;return p.add(u),p.name="fixture:"+n,p.userData={kind:n,w:t,d:e,h:i,front:o?[0,0,1]:[1,0,0],height:i,radius:Math.hypot(t,e)/2},p}function Fo(n,t=!1){let e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new De,c=0;for(let f=0;f<n.length;++f){let h=n[f],u=0;if(e!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in h.attributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(h.attributes[d]),u++}if(u!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in h.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(h.morphAttributes[d])}if(t){let d;if(e)d=h.index.count;else if(h.attributes.position!==void 0)d=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,f),c+=d}}if(e){let f=0,h=[];for(let u=0;u<n.length;++u){let d=n[u].index;for(let m=0;m<d.count;++m)h.push(d.getX(m)+f);f+=n[u].attributes.position.count}l.setIndex(h)}for(let f in r){let h=Yu(r[f]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+f+" attribute."),null;l.setAttribute(f,h)}for(let f in o){let h=o[f][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[f]=[];for(let u=0;u<h;++u){let d=[];for(let x=0;x<o[f].length;++x)d.push(o[f][x][u]);let m=Yu(d);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+f+" morphAttribute."),null;l.morphAttributes[f].push(m)}}return l}function Yu(n){let t,e,i,s=-1,r=0;for(let c=0;c<n.length;++c){let f=n[c];if(t===void 0&&(t=f.array.constructor),t!==f.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=f.itemSize),e!==f.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=f.normalized),i!==f.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=f.gpuType),s!==f.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=f.count*e}let o=new t(r),a=new Ze(o,e,i),l=0;for(let c=0;c<n.length;++c){let f=n[c];if(f.isInterleavedBufferAttribute){let h=l/e;for(let u=0,d=f.count;u<d;u++)for(let m=0;m<e;m++){let x=f.getComponent(u,m);a.setComponent(u+h,m,x)}}else o.set(f.array,l);l+=f.count*e}return s!==void 0&&(a.gpuType=s),a}var gl=[{group:"Movement",keys:["KeyW","KeyA","KeyS","KeyD"],show:"W A S D",action:"move",label:"Walk (also arrow keys)",ready:!0},{group:"Movement",keys:["Space"],show:"Space",action:"jump",label:"Jump",ready:!0},{group:"Movement",keys:["ShiftLeft","ShiftRight"],show:"Shift (hold)",action:"sprint",label:"Sprint",ready:!0},{group:"Movement",keys:["ControlLeft","ControlRight"],show:"Ctrl (hold)",action:"crouch",label:"Crouch",ready:!0},{group:"Movement",keys:["KeyZ"],show:"Z",action:"stance",label:"Change stance: stand, crouch, prone",ready:!0},{group:"Movement",keys:["CapsLock"],show:"Caps Lock",action:"walktoggle",label:"Slow walk on / off",ready:!0},{group:"Movement",keys:[],show:"Mouse",action:"look",label:"Look (click the view first)",ready:!0},{group:"Interact",keys:["KeyE"],show:"E",action:"interact",label:"Take the item you look at (also doors, gates). Hold E: take all in reach",ready:!0},{group:"Interact",keys:["KeyF"],show:"F",action:"context",label:"Context: take the item, or items found before. Hold F: take all in reach",ready:!0},{group:"Interact",keys:["KeyL"],show:"L",action:"flashlight",label:"Flashlight on / off",ready:!0},{group:"Interact",keys:["Mouse1"],show:"Middle mouse",action:"ping",label:"Mark a spot on the floor",ready:!0},{group:"Interact",keys:["Mouse2"],show:"Right mouse (hold)",action:"aim",label:"Look closer (zoom)",ready:!0},{group:"Panels",keys:["Tab","KeyI"],show:"Tab / I",action:"inventory",label:"Inventory",ready:!0},{group:"Panels",keys:["KeyC"],show:"C",action:"character",label:"Character and vitals",ready:!0},{group:"Panels",keys:["KeyM"],show:"M",action:"map",label:"Floor plan of this building",ready:!0},{group:"Panels",keys:["KeyJ"],show:"J",action:"journal",label:"Journal",ready:!0},{group:"Panels",keys:["KeyO"],show:"O",action:"objectives",label:"Objectives",ready:!0},{group:"Panels",keys:["KeyK"],show:"K",action:"skills",label:"Skills",ready:!1},{group:"Panels",keys:["KeyP"],show:"P",action:"progression",label:"Character progression",ready:!1},{group:"Panels",keys:["KeyN"],show:"N",action:"crafting",label:"Crafting",ready:!1},{group:"Panels",keys:["KeyU"],show:"U",action:"perks",label:"Perks",ready:!1},{group:"Quick items",keys:["Digit5"],show:"5",action:"quick_med",label:"Medical item (bandage, pills)",ready:!0},{group:"Quick items",keys:["Digit6"],show:"6",action:"quick_stamina",label:"Stamina item",ready:!1},{group:"Quick items",keys:["Digit7"],show:"7",action:"quick_food",label:"Eat or drink (what you need most)",ready:!0},{group:"Quick items",keys:["Digit8"],show:"8",action:"quick_buff",label:"Stimulant",ready:!1},{group:"Quick items",keys:["Digit9"],show:"9",action:"quick_utility",label:"Utility: new batteries in the flashlight",ready:!0},{group:"Quick items",keys:["Digit0"],show:"0",action:"inventory",label:"Item list (opens the inventory)",ready:!0},{group:"Weapons (not yet)",keys:["Mouse0"],show:"Left mouse",action:"fire",label:"Fire",ready:!1},{group:"Weapons (not yet)",keys:["KeyR"],show:"R",action:"reload",label:"Reload",ready:!1},{group:"Weapons (not yet)",keys:["Digit1","Digit2","Digit3","Digit4"],show:"1 \u2013 4",action:"weapon",label:"Primary, secondary, sidearm, melee",ready:!1},{group:"Weapons (not yet)",keys:["Wheel"],show:"Mouse wheel",action:"cycle",label:"Change weapon",ready:!1},{group:"Weapons (not yet)",keys:["KeyG"],show:"G",action:"grenade",label:"Throw",ready:!1},{group:"Weapons (not yet)",keys:["KeyV"],show:"V",action:"melee",label:"Melee",ready:!1},{group:"Weapons (not yet)",keys:["KeyQ"],show:"Q",action:"tactical",label:"Tactical ability",ready:!1},{group:"Weapons (not yet)",keys:["KeyT"],show:"T",action:"equipment",label:"Tactical equipment",ready:!1},{group:"Weapons (not yet)",keys:["KeyB"],show:"B",action:"inspect",label:"Inspect weapon",ready:!1},{group:"Weapons (not yet)",keys:["KeyH"],show:"H",action:"holster",label:"Holster",ready:!1},{group:"Weapons (not yet)",keys:["KeyX"],show:"X",action:"special",label:"Special ability",ready:!1},{group:"Game",keys:["Escape"],show:"Esc",action:"pause",label:"Pause menu (and this key list)",ready:!0},{group:"Game",keys:["Enter","NumpadEnter"],show:"Enter",action:"confirm",label:"Confirm",ready:!0},{group:"Game",keys:["F5"],show:"F5",action:"quicksave",label:"Quick save",ready:!0},{group:"Game",keys:["F9"],show:"F9",action:"quickload",label:"Quick load (last save)",ready:!0},{group:"Game",keys:["F3","Backquote"],show:"F3",action:"debug",label:"Diagnostics (FPS, frame time, draw calls, memory)",ready:!0}];var qu=new Map;for(let n of gl)for(let t of n.keys)qu.set(t,n);function Vr(n){return qu.get(n)||null}var Bo={stand:{eye:1.62,speed:2.6},crouch:{eye:1.05,speed:1.3},prone:{eye:.4,speed:.6}},Dy=4.4,ky=1.3,$u=3.6,Zu=9.8,Ku=700;function Ju({stance:n,sprint:t,slowWalk:e}){return n!=="stand"?Bo[n].speed:t?Dy:e?ky:Bo.stand.speed}function rf(n){return n==="stand"?"crouch":n==="crouch"?"prone":"stand"}var Fy=7328742,By=typeof navigator<"u"&&/Mac/.test(navigator.platform||""),zy=30,ts=n=>String(n).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]);var Hy={shelf:8226704,rack:12610091,clothes:7040883,checkout:4936796,coolers:10134440,rx_counter:14210248,gate:9213083,bed:10135213,cabinet:9341568,fridge:14277339,counter:8022616,sofa:5991006,tub:15329764,locker:7175046,dresser:7232069,cart:11581114,table:7034433,bench:6050634,desk:6975348},xl=[11682863,13935931,4157342,6262602,14998992,9064317,13070394,3104090,10394252,14139996];function Gy(n){let{plan:t}=n,e=document.createElement("div");e.id="inside",e.innerHTML=`
    <canvas></canvas>
    <div class="in-top corners">
      <div class="in-title">${ts(n.title)}</div>
      <div class="in-sub">${ts(n.subtitle||"")}</div>
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
        <h3>${ts(n.title)}</h3>
        <p class="hint">Game time moves only when you walk or search. It is stopped now.</p>
        <div class="row"><button class="primary" data-in="resume">Resume</button>
        <button data-in="leave">Leave the building</button></div>
        <h4>Keys</h4>
        <div class="in-keys">${$y()}</div>
      </div>
    </div>`,document.body.appendChild(e);let i=E=>e.querySelector(E),s=i("canvas"),r=matchMedia("(pointer: coarse)").matches;e.classList.toggle("is-touch",r);let o=new Fa({canvas:s,antialias:!r});o.setPixelRatio(Math.min(devicePixelRatio||1,r?1.5:2)),o.outputColorSpace=$e;let a=new Rr,l=new Mn(72,1,.05,80);a.add(l);let{w:c,d:f,h}=t.size,u=n.dark,d=u?329482:2765112;a.background=new jt(d),a.fog=new Ar(d,.035);let m=K0(),x=hu(o,a,l,{dark:u,night:!!n.night,quality:m,flashlight:n.hasFlashlight()}),g=x.flashlight,p=wo(Hn(`look:${n.title}`));function _(){g&&(g.setOn(n.isLightOn()),n.lightHours&&g.setPower(Math.min(1,n.lightHours()/2)))}_();let y=E=>Z0(t.cat,E,null,m),b=new Xt(new Be(c,f),y("floor"));b.rotation.x=-Math.PI/2,b.position.set(0,0,-f/2),b.receiveShadow=!0,a.add(Io(b));let L=new Xt(new Be(c,f),y("ceiling"));if(L.rotation.x=Math.PI/2,L.position.set(0,h,-f/2),a.add(Io(L)),t.kind==="hall"&&t.cat!=="hardware"&&t.cat!=="outdoor"){let E=[],O=h-.01;for(let ct=-c/2;ct<=c/2+1e-6;ct+=1.2)E.push(ct,O,0,ct,O,-f);for(let ct=0;ct>=-f-1e-6;ct-=.6)E.push(-c/2,O,ct,c/2,O,ct);let G=new De;G.setAttribute("position",new ue(E,3)),a.add(new Ns(G,new Ls({color:u?3817285:9278103,fog:!0})));let Z=new _n({color:328965}),Et=[],xt=Math.round(c*f/40);for(let ct=0;ct<xt;ct++){let It=new Be(1.2,.6);It.rotateX(Math.PI/2),It.translate(-c/2+.6+Math.floor(p()*(c/1.2-1))*1.2,h-.02,-.3-Math.floor(p()*(f/.6-1))*.6),Et.push(It)}Et.length&&a.add(new Xt(Fo(Et),Z))}{let E=[];for(let G=-3;G>-f+1;G-=5)for(let Z=-c/2+3;Z<c/2-1;Z+=6)E.push([Z,G]);(t.cat==="house"||t.kind!=="hall")&&E.splice(0,E.length,...E.filter((G,Z)=>Z%2===0));let O=u?1+Math.floor(p()*2):0;E.forEach(([G,Z],Et)=>{let xt=p(),ct=O>0&&xt<.18?(O--,"emergency"):t.cat!=="house"&&xt>.86?"flicker":"dead";x.addCeilingLight(G,h,Z,ct),Et===E.length-1&&O>0&&x.addCeilingLight(G,h,Z-1.5,"emergency")})}let R=y("wall");for(let E of t.walls){let O=new Xt(new Ae(E.w,h,E.d),R);O.position.set(E.x,h/2,E.z),O.receiveShadow=!0,a.add(Io(O))}x.addRoomShade(-c/2,c/2,-f,0);let w=new Xt(new Ae(2,h-2.2,.2),R);w.position.set(0,2.2+(h-2.2)/2,0),a.add(Io(w)),x.addDoorLight(0,0,!!n.night,{width:1.8,height:2.2}),t.cat!=="house"&&x.addExitSign(0,Math.min(h-.25,2.55),-.14,Math.PI),x.addDust({minX:-c/2+.3,maxX:c/2-.3,minY:.1,maxY:h-.2,minZ:-f+.3,maxZ:-.3});{let E=t.cat==="house"?["note","evac"]:t.cat==="clinic"||t.cat==="hospital"?["quarantine","mask","staff"]:["closed","mask","quarantine","poster"],O=t.cat==="house"?1:2;for(let Z=0;Z<O;Z++){let Et=Z%2?1:-1;x.addWallNotice(Et*(1.5+p()*1.2),1.35+p()*.3,-.13,Math.PI,E[Math.floor(p()*E.length)])}let G=Math.min(28,Math.round(c*f/(t.cat==="house"?24:50)));for(let Z=0;Z<G;Z++){let Et=p(),xt=Et<.45?"dirt":Et<.7?"paper":Et<.82?"water":Et<.92?"leaves":"snow",ct=(p()-.5)*(c-1),It=-.5-p()*(xt==="snow"||xt==="leaves"?4:f-1);x.addDecal(ct,It,xt,.6+p()*1.4,p()*Math.PI)}t.windows==="front"&&p()<.7&&x.addBrokenGlass((p()<.5?-1:1)*(3+p()*(c/2-5)),-.8,1.3)}let P=new Xt(new Be(6,4),new _n({color:n.night?1713203:14673644}));P.position.set(0,2,2.5),P.rotation.y=Math.PI,a.add(P);let T=new Xt(new Be(6,3),new _n({color:n.night?3819094:16054008}));if(T.rotation.x=-Math.PI/2,T.position.set(0,.01,1.4),a.add(T),t.windows==="front"){let E=new _n({color:n.night?1450028:12964830,transparent:!0,opacity:.85});for(let O of[-1,1]){let G=c/2-2,Z=new Xt(new Be(G,1.8),E);Z.position.set(O*(1+G/2+.5),1.6,-.12),a.add(Z)}}let M=new Ht;a.add(M);let U={},W=E=>U[E]||(U[E]=new Ke({color:Hy[E]??8947848,roughness:.8,metalness:E==="shelf"||E==="gate"||E==="locker"?.35:.05})),F=[],H=[],ot=u||n.night?13:20,j={supermarket:"grocery",pharmacy:"pharmacy",hardware:"hardware",outdoor:"outdoor",convenience:"convenience",gas:"convenience"}[t.cat]||"grocery",ut=null;for(let E of t.fixtures){if(E.type==="gate"){let G=new Ht,Z=Math.floor(E.w/.15);for(let Et=0;Et<=Z;Et++){let xt=new Xt(new Ae(.03,E.h,.03),W("gate"));xt.position.set(E.x-E.w/2+Et*.15,E.h/2,E.z),G.add(xt)}ut=G,G.visible=!n.counterOpen,a.add(G);continue}if(E.type==="shelf"||E.type==="rack"||E.type==="clothes"){let G=Zy(E,W(E.type));if(G.traverse(Z=>{Z.isMesh&&(Z.castShadow=!0,Z.receiveShadow=!0)}),E.tipped){G.rotation.z=.16*(E.x>0?1:-1);for(let Z=0;Z<14;Z++){let Et=new Xt(new Ae(.22,.26,.24),new Ke({color:xl[Z%xl.length],roughness:.7}));Et.position.set(E.x+(Z%2?1:-1)*(.7+Z%3*.25),.12,E.z-E.d/2+Z*7%13/13*E.d),Et.rotation.set(0,Z,Z%2?Math.PI/2:0),M.add(Et)}}if(M.add(G),!E.tipped&&E.type!=="clothes")for(let Z of[-1,1]){let Et=Z<0?E.leftZone:E.rightZone;Et!=null&&H.push({f:E,side:Z,zone:Et,group:null,done:null})}else if(!E.tipped){let Z=[1.25];for(let Et of Z)for(let xt=-E.d/2+.3;xt<E.d/2-.2;xt+=.34)for(let ct of[-1,1]){let It=ct<0?E.leftZone:E.rightZone;It!=null&&F.push({x:E.x+ct*.27,y:Et,z:E.z+xt,zone:It,clothes:E.type==="clothes"})}}continue}if(E.type==="endcap"){let G=Gu(j,E.w,E.h,Math.max(.05,n.stock*.5),Hn(`${n.title}:end:${E.x.toFixed(2)}`),E.d);G.position.set(E.x,0,E.z),G.traverse(Z=>{Z.isMesh&&(Z.receiveShadow=!0)}),M.add(G);continue}if(Wu.includes(E.type)){let G=Xu(E.type,E.w,E.d,E.h,Hn(`${n.title}:${E.type}:${E.x.toFixed(2)}:${E.z.toFixed(2)}`)),Z=E.zone!=null?t.spots.find(It=>It.zone===E.zone):null,Et=Z?Z.x-E.x:0,xt=Z?Z.z-E.z:1,ct=E.w>=E.d?xt:Et;G.position.set(E.x,0,E.z),ct<0&&(G.rotation.y=Math.PI),G.traverse(It=>{It.isMesh&&(It.castShadow=!0,It.receiveShadow=!0)}),M.add(G);continue}if(E.type==="bed"){let G=new Ht,Z=new Xt(new Ae(E.d,.45,E.w),W("bed"));Z.position.y=.225;let Et=new Xt(new Ae(E.d*.95,.15,E.w*.95),new Ke({color:14080210,roughness:1}));Et.position.y=.52,G.add(Z,Et),G.position.set(E.x,0,E.z),G.rotation.y=Math.PI/2,M.add(G);continue}let O=new Xt(new Ae(E.w,E.h,E.d),W(E.type));if(O.position.set(E.x,E.h/2,E.z),O.castShadow=!0,O.receiveShadow=!0,M.add(O),E.type==="coolers"){let G=new Xt(new Be(E.w,E.h*.75),new Ke({color:2306091,roughness:.2,metalness:.4}));G.position.set(E.x,E.h*.55,E.z+E.d/2+.01),a.add(G)}}let tt=new Ae(.22,.26,.24),Tt=new Ke({roughness:.7}),Rt=new za(tt,Tt,Math.max(1,F.length)),Bt=new re,oe=new jt,ye=11,st=()=>(ye=ye*16807%2147483647)/2147483647,vt=F.map(()=>st());F.forEach((E,O)=>{oe.setHex(xl[Math.floor(st()*xl.length)]),E.clothes&&oe.multiplyScalar(.7),Rt.setColorAt(O,oe)}),a.add(Rt);function Vt(E,O){E.group&&(a.remove(E.group),E.group.traverse(ct=>{ct.isMesh&&ct.geometry.dispose()}));let{f:G,side:Z}=E,Et=Math.max(.03,n.stock*(O?.12:.85)),xt=Hu(j,G.d-.1,[.12,.62,1.12,1.57],Et,Hn(`${n.title}:${G.x}:${G.z}:${Z}`));xt.position.set(G.x+Z*.05,0,G.z),xt.rotation.y=Z>0?0:Math.PI,xt.traverse(ct=>{ct.isMesh&&(ct.receiveShadow=!0)}),a.add(xt),E.group=xt,E.done=O}function St(){for(let O of H){let G=!!n.isDone(O.zone);O.done!==G&&Vt(O,G)}let E=n.stock;F.forEach((O,G)=>{let Z=n.isDone(O.zone)?E*.12:E*.85,Et=vt[G]<Z;Bt.makeScale(Et?1:0,Et?O.clothes?3:1:0,Et?1:0),Bt.setPosition(O.x,O.y+(O.clothes?0:.13),O.z),Rt.setMatrixAt(G,Bt)}),Rt.count=F.length,Rt.instanceMatrix.needsUpdate=!0,Rt.instanceColor&&(Rt.instanceColor.needsUpdate=!0)}St();let $t={box:new Ke({color:10255186,roughness:1}),can:new Ke({color:9212310,roughness:.5,metalness:.5}),paper:new Ke({color:14276300,roughness:1,side:we}),cart:new Ls({color:10331306})};for(let E of t.debris){let O,G=Hn(`${n.title}:d:${E.x.toFixed(2)}:${E.z.toFixed(2)}`);if(E.kind==="box"){O=vi(E.s>.35?"box_stack":"cardboard_box",G),O.position.set(E.x,0,E.z),O.rotation.y=E.rot||0,M.add(O);continue}if(E.kind==="cart"){O=vi(p()<.7?"shopping_cart":"basket",G),O.position.set(E.x,0,E.z),O.rotation.set(0,E.rot||0,0),M.add(O);continue}if(E.kind==="paper"){O=vi("paper_scatter",G),O.position.set(E.x,0,E.z),O.rotation.y=E.rot||0,M.add(O);continue}if(E.kind==="box")O=new Xt(new Ae(E.s*1.4,E.s,E.s),$t.box);else if(E.kind==="can")O=new Xt(new Ji(.04,.04,.12,8),$t.can),O.rotation.z=Math.PI/2;else if(E.kind==="cart"){O=new Ht;let Z=new Ns(new Pr(new Ae(.55,.45,.85)),$t.cart);Z.position.y=.2,O.add(Z);for(let[Et,xt]of[[-.22,-.35],[.22,-.35],[-.22,.35],[.22,.35]]){let ct=new Ns(new Pr(new Ae(.02,.45,.02)),$t.cart);ct.position.set(Et,-.25,xt),O.add(ct)}}else O=new Xt(new Be(.3,.22),$t.paper),O.rotation.x=-Math.PI/2;O.position.set(E.x,E.kind==="paper"?.01:E.kind==="cart"?.45:(E.s||.1)/2,E.z),O.rotation.y=E.rot||0,M.add(O)}{let E=Ao(t,{counter:!0}),O=[],G=(xt,ct,It)=>!E.some(te=>Math.abs(xt-te.x)<te.w/2+It&&Math.abs(ct-te.z)<te.d/2+It)&&!(Math.abs(xt)<1.6&&ct>-3)&&!O.some(te=>Math.hypot(te[0]-xt,te[1]-ct)<te[2]+It)&&xt>-c/2+It&&xt<c/2-It&&ct<-It&&ct>-f+It,Z=(xt,ct=!1,It=null)=>{if(!ml.includes(xt))return null;let te=vi(xt,Math.floor(p()*1e6)),Te=Math.min(1.2,(te.userData.radius||.3)+.1),je=xt==="rug"||xt==="paper_scatter"||xt==="clothes_pile",ze=It||{x1:-c/2,x2:c/2,z1:-f,z2:0};for(let mn=0;mn<30;mn++){let ge=ze.x1+Te+p()*Math.max(0,ze.x2-ze.x1-2*Te);ct&&(ge=p()<.5?ze.x1+Te+.05:ze.x2-Te-.05);let Ie=ze.z1+Te+p()*Math.max(0,ze.z2-ze.z1-2*Te);if(je&&It){if(!(ge>-c/2+Te&&ge<c/2-Te&&Ie<-Te&&Ie>-f+Te))continue;return te.position.set(ge,0,Ie),te.rotation.y=p()*Math.PI,M.add(te),te}if(G(ge,Ie,Te))return te.position.set(ge,0,Ie),te.rotation.y=ct?(ge>(ze.x1+ze.x2)/2?-Math.PI/2:Math.PI/2)+(p()-.5)*.3:p()*Math.PI*2,te.traverse(sn=>{sn.isMesh&&(sn.castShadow=Te>.25,sn.receiveShadow=!0)}),M.add(te),O.push([ge,Ie,Te]),te}return null},Et={supermarket:[["basket",3],["trash_bag",3],["wet_floor_sign",1],["mop_bucket",1],["pallet",1,!0],["box_stack",2,!0],["trash_pile",1,!0]],convenience:[["trash_bag",1],["basket",1],["cardboard_box",2]],gas:[["trash_bag",1],["traffic_cone",1],["cardboard_box",2]],pharmacy:[["basket",2],["trash_bag",1],["wet_floor_sign",1],["box_stack",1,!0]],hardware:[["pallet",2,!0],["box_stack",2,!0],["traffic_cone",2],["trash_bag",1]],outdoor:[["box_stack",2,!0],["trash_bag",1],["basket",1]],clinic:[["iv_stand",2,!0],["wheelchair",1,!0],["office_chair",2],["medical_cart",1,!0],["trash_bag",1]],hospital:[["gurney",2,!0],["iv_stand",3,!0],["wheelchair",2,!0],["medical_cart",2,!0],["office_chair",1],["trash_pile",1,!0]],fire:[["helmet_rack",1,!0],["hose_reel",1,!0],["locker_row",1,!0],["traffic_cone",2],["fire_extinguisher",1,!0]],house:[["rug",2],["lamp",1,!0],["potted_plant_dead",1,!0],["chair",2],["tv",1,!0],["bookshelf",1,!0],["trash_bag",1],["cardboard_box",1]]};if(t.cat==="house"){let xt={kitchen:[["trash_bag",1],["paper_scatter",1],["chair",1]],"living room":[["rug",1],["tv",1,!0],["lamp",1,!0],["potted_plant_dead",1,!0],["bookshelf",1,!0],["kids_toy",1],["clothes_pile",1],["paper_scatter",1],["shoes",1]],bedroom:[["rug",1],["lamp",1,!0],["clothes_pile",2],["shoes",1],["cardboard_box",1]],bathroom:[["clothes_pile",1],["trash_bag",1]],"second bedroom":[["rug",1],["kids_toy",2],["clothes_pile",1],["shoes",1]],garage:[["box_stack",1,!0],["cardboard_box",2],["trash_bag",1],["traffic_cone",1]]},ct={kitchen:["wall_clock","curtain"],"living room":["wall_frame","wall_frame","curtain"],bedroom:["wall_frame","curtain"],"second bedroom":["wall_frame","curtain"],bathroom:[],garage:[]};for(let It of t.spots){if(!It.area)continue;let te={x1:It.area.x1,x2:It.area.x2,z1:Math.min(It.area.z1,It.area.z2),z2:Math.max(It.area.z1,It.area.z2)};for(let[Te,je,ze]of xt[It.label]||[])for(let mn=0;mn<je;mn++)Z(Te,!!ze,te);(ct[It.label]||[]).forEach((Te,je)=>{if(!ml.includes(Te))return;let ze=vi(Te,Math.floor(p()*1e6)),mn=je%2===0,ge=te.x1+.6+p()*Math.max(0,te.x2-te.x1-1.2);ze.position.set(ge,Te==="curtain"?.9:1.45,mn?te.z1+.09:te.z2-.09),ze.rotation.y=mn?0:Math.PI,M.add(ze)})}for(let It of t.fixtures)if(It.type==="table")for(let[te,Te]of[["mail_pile",-.25],["dish_stack",.25]]){if(!ml.includes(te)||p()<.3)continue;let je=vi(te,Math.floor(p()*1e6));je.position.set(It.x+Te,It.h,It.z+(p()-.5)*.4),je.rotation.y=p()*Math.PI,M.add(je)}}else for(let[xt,ct,It]of Et[t.cat]||Et.house)for(let te=0;te<ct;te++)Z(xt,!!It);for(let xt of t.fixtures){if(xt.type==="checkout"){let ct=vi("register",Math.floor(xt.x*100));ct.position.set(xt.x,xt.h,xt.z-xt.d/4),ct.rotation.y=Math.PI/2,M.add(ct)}if(xt.type==="counter"&&t.cat==="house"){let ct=vi("kitchen_counter_items",Math.floor(xt.z*100));ct.position.set(xt.x,xt.h,xt.z),M.add(ct)}}}let le=new Ke({color:13620175,roughness:1});for(let E of t.bodies){let O=new Ht,G=new Xt(new Ae(.42,.2,1.3),le);G.position.set(0,.1,.1);let Z=new Xt(new ji(.15,10,8),le);Z.scale.set(1,.7,1.1),Z.position.set(0,.12,-.72),O.add(G,Z),O.position.set(E.x,E.y||0,E.z),O.rotation.y=(E.rot||0)+Math.PI/2,M.add(O)}qy(M),Wy(x.group);let Zt=new Map,Se=()=>Ao(t,{counter:!0});function B(E){let O=wo(Hn(`place:${E.pid}:${n.title}`)),G=t.spots.find(ct=>ct.zone===E.zone);if(!G)return{x:0,y:0,z:-1};if(G.counter){let ct=t.fixtures.find(It=>It.type==="rx_counter");return{x:ct.x+(O()-.5)*(ct.w-1),y:ct.h,z:ct.z+(O()-.5)*.4}}let Z=G.area;if(t.kind==="hall"){if(O()<.2)return{x:G.x+(O()-.5)*1.2,y:0,z:Z.z1+1+O()*(Z.z2-Z.z1-2)};let ct=O()<.5?-1:1,It=[.12,.62,1.12,1.57];return{x:G.x+ct*((Z.x2-Z.x1)/2+.06),y:It[Math.floor(O()*It.length)],z:Z.z1+1+O()*(Z.z2-Z.z1-2)}}let Et=t.fixtures.filter(ct=>ct.zone===E.zone&&ct.solid&&ct.h<=1.2&&ct.type!=="tub");if(Et.length&&O()<.7){let ct=Et[Math.floor(O()*Et.length)],It=ct.type==="bed"?ct.d:ct.w,te=ct.type==="bed"?ct.w:ct.d;return{x:ct.x+(O()-.5)*Math.max(0,It-.4),y:ct.h+(ct.type==="bed"?.15:0),z:ct.z+(O()-.5)*Math.max(0,te-.4)}}let xt=Se();for(let ct=0;ct<12;ct++){let It=Z.x1+.5+O()*(Z.x2-Z.x1-1),te=Z.z1+.5+O()*(Z.z2-Z.z1-1);if(!xt.some(Te=>Math.abs(It-Te.x)<Te.w/2+.2&&Math.abs(te-Te.z)<Te.d/2+.2))return{x:It,y:0,z:te}}return{x:G.x,y:0,z:G.z}}let rt=1500,A=n.notice?n.notice():{countRadius:0,boxCount:!1,lootGlow:0},dt=new Map,X=E=>E.zone!==pt()&&Hn(`${E.pid}:box`)%10<3;function pt(){let E=t.spots.find(O=>O.counter);return E?E.zone:-1}function at(E){let O=wo(Hn(`box:${E}:${n.title}`)),G=t.spots.find(xt=>xt.zone===E),Z=G&&G.area;if(!Z)return null;let Et=Se();for(let xt=0;xt<16;xt++){let ct=t.kind==="hall"?G.x+(O()-.5)*Math.max(.2,Z.x2-Z.x1-1.4):Z.x1+.5+O()*(Z.x2-Z.x1-1),It=Z.z1+.8+O()*(Z.z2-Z.z1-1.6);if(!Et.some(te=>Math.abs(ct-te.x)<te.w/2+.3&&Math.abs(It-te.z)<te.d/2+.3))return{x:ct,z:It,rot:O()*Math.PI}}return null}function Lt(E){let O=`c${E}`;if(dt.has(O))return dt.get(O);let G=at(E);if(!G)return dt.set(O,null),null;let Z=vi("cardboard_box",Hn(`${O}:${n.title}`));Z.position.set(G.x,0,G.z),Z.rotation.y=G.rot,a.add(Z);let Et=Z.userData.height||.35,xt={cid:O,zone:E,obj:Z,x:G.x,y:Et/2,z:G.z,r:Z.userData.radius||.3,opened:n.isOpened(O),container:!0};return xt.opened&&I(xt),dt.set(O,xt),xt}function mt(E){if(!A.boxCount)return"look inside";let O=n.items().filter(G=>G.zone===E.zone&&X(G)).length;return O?`something inside: ${O} item${O>1?"s":""}`:"it sounds empty"}function I(E){E.obj.scale.y=.85,E.obj.rotation.z=.06}function S(){for(let E of n.items()){if(Zt.has(E.pid))continue;let O=null;if(X(E)){let xt=Lt(E.zone);if(xt&&!xt.opened)continue;if(xt){let ct=Hn(E.pid)%360;O={x:xt.x+Math.cos(ct)*(xt.r+.15),y:0,z:xt.z+Math.sin(ct)*(xt.r+.15)}}}O=O||B(E);let G=Ou(E.item,Hn(E.pid));G.position.set(O.x,O.y,O.z),G.rotation.y=Hn(E.pid)%628/100;let Z=.32+.18*A.lootGlow;G.traverse(xt=>{if(!xt.isMesh||!xt.material)return;let ct=It=>{if(!It.emissive)return It;let te=It.clone();return te.map?(te.emissiveMap=te.map,te.emissive.setRGB(Z,Z,Z)):te.emissive.copy(te.color).multiplyScalar(Z),te};xt.material=Array.isArray(xt.material)?xt.material.map(ct):ct(xt.material)}),a.add(G);let Et=G.userData.height||.2;Zt.set(E.pid,{it:E,obj:G,x:O.x,y:O.y+Et/2,z:O.z,r:G.userData.radius||.15})}}S();function V(E){let O=Zt.get(E);O&&(a.remove(O.obj),Zt.delete(E))}let it=new Ls({color:Fy,transparent:!0,opacity:.9,depthTest:!1}),ht=new Ns(new Pr(new Ae(1,1,1)),it);ht.renderOrder=10,ht.visible=!1,a.add(ht);let lt=2.3;function Wt(E,O){let G=O.x-E.x,Z=O.y-E.y,Et=O.z-E.z,xt=Math.max(0,1-.25/Math.max(.25,Math.hypot(G,Z,Et)));for(let ct of Ao(t,{counter:n.isCounterOpen()})){let It=[ct.x-ct.w/2+.02,0,ct.z-ct.d/2+.02],te=[ct.x+ct.w/2-.02,(ct.h||9)-.02,ct.z+ct.d/2-.02],Te=[E.x,E.y,E.z],je=[G,Z,Et],ze=0,mn=xt,ge=!0;for(let Ie=0;Ie<3&&ge;Ie++){if(Math.abs(je[Ie])<1e-9){(Te[Ie]<It[Ie]||Te[Ie]>te[Ie])&&(ge=!1);continue}let sn=(It[Ie]-Te[Ie])/je[Ie],Bn=(te[Ie]-Te[Ie])/je[Ie];sn>Bn&&([sn,Bn]=[Bn,sn]),ze=Math.max(ze,sn),mn=Math.min(mn,Bn),ze>mn&&(ge=!1)}if(ge)return!0}return!1}function Nt(E){let O=[];for(let G of Zt.values()){let Z=Math.hypot(G.x-E.x,G.y-E.y,G.z-E.z);Z<=lt&&!Wt(E,G)&&O.push({o:G,d:Z})}return O.sort((G,Z)=>G.d-Z.d)}function zt(E,O){let G=null,Z=[...dt.values()].filter(Et=>Et&&!Et.opened).map(Et=>({o:Et,d:Math.hypot(Et.x-E.x,Et.y-E.y,Et.z-E.z)})).filter(Et=>Et.d<=lt&&!Wt(E,Et.o));for(let{o:Et,d:xt}of[...Nt(E),...Z]){let ct=Et.x-E.x,It=Et.y-E.y,te=Et.z-E.z,Te=(ct*O.x+It*O.y+te*O.z)/Math.max(1e-6,xt),je=Math.acos(Math.min(1,Te)),ze=Math.atan2(Et.r+.12,xt);je>Math.max(ze,.09)||(!G||je<G.ang)&&(G={o:Et,ang:je,d:xt})}return G?G.o:null}let se={x:t.start.x,z:t.start.z},gt=t.start.yaw||0,Gt=0,ie=0,ce=0,Pt="stand",_e=!1,he=!1,Re=!1,D=Bo.stand.eye,Ct=new Set,Q=!1,ft=!1,Ot=!1,Ut=0,fe=null,be=null,nn=!1,Ne={acc:{game:0,look:0,cull:0,render:0},n:0,worst:0,last:0,mb:0,mbAt:-1e9,sample(E,O){for(let ct in O)this.acc[ct]+=O[ct];this.n+=1,this.worst=Math.max(this.worst,E*1e3);let G=performance.now();if(G-this.last<250)return;this.last=G,G-this.mbAt>2e3&&(this.mb=Vy(a),this.mbAt=G);let Z=ct=>(this.acc[ct]/Math.max(1,this.n)).toFixed(1),Et=1e3/Math.max(1,wn),xt=o.info;i(".in-debug").textContent=[`${wn.toFixed(0)} fps  ${Et.toFixed(1)} ms (worst ${this.worst.toFixed(0)})  budget 33.3 ms  q:${m}`,`game ${Z("game")}  light ${Z("look")}  cull ${Z("cull")}  render ${Z("render")} ms (CPU)`,`${xt.render.calls} calls  ${(xt.render.triangles/1e3).toFixed(0)}k tris  ${xt.memory.geometries} geo  ${xt.memory.textures} tex  ~${this.mb.toFixed(0)} MB`,`x ${se.x.toFixed(1)}  z ${se.z.toFixed(1)}  yaw ${(gt*57.3%360).toFixed(0)}\xB0  ${Pt}  ${Zt.size} items`].join(`
`),this.acc={game:0,look:0,cull:0,render:0},this.n=0,this.worst=0}},wn=0,Xe={x:0,y:0,id:null,ox:0,oy:0},es=null,ys=null,Mi=0,cn=null,li=0;function zs(){let E=e.clientWidth,O=e.clientHeight;o.setSize(E,O,!1),l.aspect=E/O,l.updateProjectionMatrix()}zs(),window.addEventListener("resize",zs);function Si(){i(".in-status").innerHTML=n.getStatus()}Si();function Je(E,O=2600){let G=i(".in-toast");G.textContent=E,G.hidden=!1,clearTimeout(Je.h),Je.h=setTimeout(()=>{G.hidden=!0},O)}function ns(E){let O=i(".in-found");if(!E){O.hidden=!0;return}let G=E.items.length?`<ul>${E.items.map(Z=>`<li>${ts(Z)}</li>`).join("")}</ul>`:'<p class="hint">Nothing useful here.</p>';O.innerHTML=`<h4>${ts(E.title)}</h4>${G}
      <p class="hint">${ts(E.note||"")}</p>
      <div class="row">${E.canTake?'<button class="primary" data-in="take">Take all that fits (F)</button>':""}<button data-in="close">Close</button></div>`,O.hidden=!1}let is=()=>!i(".in-found").hidden;function Yn(){let E=i(".in-stance"),O=[];Pt!=="stand"&&O.push(Pt==="crouch"?"Crouching":"Prone"),he&&Pt==="stand"&&O.push("Slow walk"),Re&&O.push("Looking closer"),E.hidden=!O.length,E.textContent=O.join(" \xB7 ")}function zo(E){let O=i(".in-panel");if(be===E){Hs();return}let G;E==="map"?G=C():G=n.panel(E),G&&(be=E,Ct.clear(),O.innerHTML=`${G}<div class="row"><button data-in="closepanel">Close</button></div>`,O.hidden=!1,document.pointerLockElement===s&&document.exitPointerLock())}function Hs(){be=null,i(".in-panel").hidden=!0}function _s(){if(be&&be!=="map"){let E=be;be=null,zo(E)}}function C(){let O=c+2,G=f+1*2+1.5,Z=Pe=>(Pe+c/2+1).toFixed(2),Et=Pe=>(Pe+f+1).toFixed(2),xt=(Pe,Gs)=>`<rect class="${Gs}" x="${Z(Pe.x-Pe.w/2)}" y="${Et(Pe.z-Pe.d/2)}" width="${Pe.w.toFixed(2)}" height="${Pe.d.toFixed(2)}"/>`,ct=t.walls.map(Pe=>xt(Pe,"w")).join(""),It=t.fixtures.filter(Pe=>Pe.type!=="gate").map(Pe=>xt(Pe,"f")).join(""),te=t.spots.map(Pe=>`<circle class="${n.isDone(Pe.zone)?"sd":"s"}" cx="${Z(Pe.x)}" cy="${Et(Pe.z)}" r="0.45"/>`).join(""),Te=Ce.map(Pe=>`<circle class="pg" cx="${Z(Pe.x)}" cy="${Et(Pe.z)}" r="0.3"/>`).join(""),je=Math.sin(gt),ze=Math.cos(gt),mn=+Z(se.x),ge=+Et(se.z),Ie=`${(mn-je*.9).toFixed(2)},${(ge-ze*.9).toFixed(2)}`,sn=`${(mn-ze*.45).toFixed(2)},${(ge+je*.45).toFixed(2)}`,Bn=`${(mn+ze*.45).toFixed(2)},${(ge-je*.45).toFixed(2)}`;return`<h4>Floor plan</h4>
      <svg class="in-map" viewBox="0 0 ${O.toFixed(1)} ${G.toFixed(1)}">${It}${ct}${te}${Te}
        <polygon class="me" points="${Ie} ${sn} ${Bn}"/>
        <text x="${Z(0)}" y="${(f+1+1.2).toFixed(1)}" text-anchor="middle">Door</text></svg>
      <p class="hint">Blue: not searched. Grey: searched. Triangle: you.</p>`}function k(){Ut>.5&&n.onWalk(Ut),Ut=0}let Y=null,$="",z=new Set,wt=new N,Ft=new N;function Kt(E){if(!E)return!1;if(E.container)return pe(E),!1;k();let O=n.onPickUp(E.it.pid);return O.ok?(V(E.it.pid),Je(`Taken: ${O.name}`,1400)):O.msg&&Je(O.msg,2400),St(),an(),_s(),O.ok}function Yt(){if(!(ft||Q||Ot)){if(Y){Kt(Y);return}if(!fe){Je("Look at an item to take it.",1400);return}if(fe.type==="exit"){qn();return}if(fe.counter&&!n.isCounterOpen()){de();return}Je("Look at an item to take it.",1400)}}function de(){k();let E=n.onCounter();ut&&(ut.visible=!n.isCounterOpen()),Je(E),an()}function pe(E){if(ft||Q||Ot||cn||E.opened)return;ft=!0;let O=i(".in-bar"),G=O.querySelector("i");O.hidden=!1,G.style.width="0%",Je("Opening the box\u2026",rt);let Z=performance.now(),Et=()=>{if(Ot)return;let xt=Math.min(1,(performance.now()-Z)/rt);if(G.style.width=`${xt*100}%`,xt<1){requestAnimationFrame(Et);return}if(O.hidden=!0,ft=!1,k(),!n.onOpenContainer(E.cid))return;E.opened=!0,I(E);let ct=Zt.size;S();let It=Zt.size-ct;Je(It?`Inside: ${It} item${It>1?"s":""}.`:"It is empty.",1800),$="",an()};Et()}function Jt(){if(ft||Q||Ot||cn||Y&&Y.container)return!1;let E=Nt(l.position);if(!E.length)return!1;let O=i(".in-bar"),G=O.querySelector("i");O.hidden=!1,G.style.width="0%",cn={t0:performance.now(),n:E.length};let Z=()=>{if(!cn)return;let Et=Math.min(1,(performance.now()-cn.t0)/Ku);if(G.style.width=`${Et*100}%`,Et<1){cn.raf=requestAnimationFrame(Z);return}cn=null,O.hidden=!0,Ve()};return Z(),!0}function Ee(){cn&&(cancelAnimationFrame(cn.raf),cn=null,i(".in-bar").hidden=!0)}function Ve(){ft=!0,k();let E=0,O="";for(let{o:G}of Nt(l.position)){let Z=n.onPickUp(G.it.pid);if(!Z.ok){if(O=Z.msg||"",n.isDead())break;continue}V(G.it.pid),E+=1}ft=!1,Je(E?`You take ${E} item${E>1?"s":""}.${O?" "+O:""}`:O||"Nothing to take.",2600),St(),an(),_s()}function ke(){let E=n.onTakeAll();ns(null),E&&Je(E),an(),_s()}function vn(){if(is()&&i('[data-in="take"]')){ke();return}if(Y){Kt(Y);return}if(n.hasLoot()){ke();return}if(fe&&fe.type==="exit"){qn();return}if(fe&&fe.counter&&!n.isCounterOpen()){de();return}Je("Nothing to take here.",1500)}function Ue(){if(!n.hasFlashlight()){Je("You have no flashlight.");return}let E=n.toggleLight();_(),Si(),E&&Je(E,1800)}function ne(E){let O=n.quickUse(E);O&&Je(O,3200),an(),_(),_s()}function kn(E){let O=performance.now();kn.last&&O-kn.last<700||(kn.last=O,Je(`${E.label}: not yet in the game.`,1800))}let Ce=[],Fn=new il,ss=new ui(new N(0,1,0),0),In=new Qa(.15,.24,24);function bs(){Fn.setFromCamera(new Mt(0,0),l);let E=new N;if(!Fn.ray.intersectPlane(ss,E)||E.distanceTo(l.position)>25){Je("Look at the floor to mark it.",1500);return}let O=new Xt(In,new _n({color:15323030,side:we,fog:!1}));O.rotation.x=-Math.PI/2,O.position.set(E.x,.03,E.z),a.add(O),Ce.push({x:E.x,z:E.z,m:O}),Ce.length>5&&a.remove(Ce.shift().m),Je("Marked.",900)}function Ye(){if(!(ie>.001||ce!==0)){if(Pt!=="stand"){Pt="stand",_e=!1,Yn();return}ce=$u}}function ei(){k(),Je(n.quickSave(),1800)}function vs(){if(k(),!n.canQuickLoad()){Je("There is no save to load.");return}$n(!1,"quickload")}function an(){n.notice&&(A=n.notice()),fe=void 0,Si(),n.isDead()&&$n(!0)}function qn(){k(),$n(!1)}function $n(E,O){Ot||(Ot=!0,Ee(),document.pointerLockElement===s&&document.exitPointerLock(),window.removeEventListener("resize",zs),window.removeEventListener("keydown",of,!0),window.removeEventListener("keyup",af,!0),window.removeEventListener("blur",lf),document.removeEventListener("pointerlockchange",cf),o.dispose(),e.remove(),n.onLeave(!!E,O))}function rs(E){Q=E,i(".in-pause").hidden=!E,E&&(Ct.clear(),Ee(),Re=!1)}function Wr(E,O){switch(E.action){case"jump":return Ye();case"stance":return Pt=rf(Pt),_e=!1,Yn();case"walktoggle":return he=!he,Yn();case"interact":return null;case"context":return vn();case"flashlight":return Ue();case"inventory":case"character":case"map":case"journal":case"objectives":return zo(E.action);case"quick_med":case"quick_food":case"quick_utility":return ne(E.action);case"confirm":return is()&&i('[data-in="take"]')?ke():be?Hs():Yt();case"quicksave":return ei();case"quickload":return vs();case"debug":return nn=!nn,i(".in-debug").hidden=!nn,Ne.last=0,Ne.mbAt=-1e9,null;case"ping":return bs();default:return E.ready||kn(E),null}}let ju=new Set(["move","sprint","crouch"]);function of(E){if(Ot)return;let O=E.code;if((["Tab","F3","F5","F9","Space","Backquote","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(O)||E.ctrlKey&&O!=="KeyW")&&E.preventDefault(),O==="Escape"){if(is()){ns(null);return}if(be){Hs();return}document.pointerLockElement||rs(!Q);return}if(Q){O==="Enter"&&rs(!1);return}if(O==="CapsLock"){he=!he,Yn();return}let G=Vr(O)||(O.startsWith("Arrow")?{action:"move"}:null);if(G&&!(be&&!["inventory","character","map","journal","objectives","pause","quicksave","quickload","confirm"].includes(G.action)&&!G.action.startsWith("quick"))){if(ju.has(G.action)){Ct.add(O),G.action==="crouch"&&!E.repeat&&(_e=!0,Pt==="stand"&&(Pt="crouch"),Yn());return}if(!E.repeat){if(G.action==="interact"||G.action==="context"){if(Y&&Y.container&&!Q&&!be){pe(Y);return}li=performance.now(),Jt();return}Wr(G,E)}}}function af(E){if(Ct.delete(E.code),E.code==="CapsLock"&&By){he=!1,Yn();return}let O=Vr(E.code);if(O&&(O.action==="crouch"&&_e&&(_e=!1,Pt==="crouch"&&(Pt="stand"),Yn()),(O.action==="interact"||O.action==="context")&&li)){let G=!!cn||performance.now()-li<300;li=0,cn&&Ee(),G&&!Q&&!be&&(O.action==="interact"?Yt():vn())}}function lf(){Ct.clear(),Ee()}function cf(){!document.pointerLockElement&&!Ot&&!r&&!be&&!is()&&rs(!0)}window.addEventListener("keydown",of,!0),window.addEventListener("keyup",af,!0),window.addEventListener("blur",lf),document.addEventListener("pointerlockchange",cf);function ff(){if(!(r||Q||be||!s.requestPointerLock))try{let E=s.requestPointerLock();E&&E.catch&&E.catch(()=>{})}catch{}}s.addEventListener("contextmenu",E=>E.preventDefault()),s.addEventListener("mousedown",E=>{if(Q||r)return;let O=document.pointerLockElement===s;if(E.button===1){E.preventDefault(),Wr(Vr("Mouse1"));return}if(E.button===2){Re=!0,Yn();return}if(E.button===0){if(!O){ff();return}Wr(Vr("Mouse0"))}}),window.addEventListener("mouseup",E=>{E.button===2&&Re&&(Re=!1,Yn())}),s.addEventListener("wheel",E=>{E.preventDefault(),Q||Wr(Vr("Wheel"))},{passive:!1}),s.addEventListener("mousemove",E=>{Q||(document.pointerLockElement===s||E.buttons===1)&&hf(E.movementX,E.movementY)});function hf(E,O){let G=Re?.45:1;gt-=E*.0024*G,Gt=Math.max(-1.3,Math.min(1.3,Gt-O*.0024*G))}e.addEventListener("click",E=>{let O=E.target.closest("[data-in],[data-use],[data-tk]");if(!O)return;if(O.dataset.use){Je(n.useItem(O.dataset.use,O.dataset.verb)||"",3e3),an(),_(),_s();return}if(O.dataset.tk){let Z=gl.find(Et=>Et.action===O.dataset.tk);if(Z.action==="stance"){Pt=rf(Pt),Yn(),O.textContent=Pt==="stand"?"CROUCH":Pt==="crouch"?"PRONE":"STAND";return}Wr(Z);return}let G=O.dataset.in;G==="resume"?(rs(!1),ff()):G==="leave"?qn():G==="take"?ke():G==="close"?ns(null):G==="closepanel"&&Hs()});let Ho=i(".in-use");Ho.addEventListener("pointerdown",E=>{if(E.preventDefault(),Y&&Y.container){pe(Y);return}li=performance.now(),Jt()});let yl=E=>{if(!li)return;let O=E&&E.type==="pointerup"&&(!!cn||performance.now()-li<300);li=0,cn&&Ee(),O&&(is()&&i('[data-in="take"]')?ke():Yt())};Ho.addEventListener("pointerup",yl),Ho.addEventListener("pointerleave",yl),Ho.addEventListener("pointercancel",yl),i(".in-menu").addEventListener("click",()=>rs(!0)),s.addEventListener("touchstart",E=>{for(let O of E.changedTouches)if(O.clientX<e.clientWidth/2&&Xe.id===null){Xe.id=O.identifier,Xe.ox=O.clientX,Xe.oy=O.clientY;let G=i(".in-stick");G.style.left=`${O.clientX-50}px`,G.style.top=`${O.clientY-50}px`,G.classList.add("on")}else es===null&&(es=O.identifier,ys={x:O.clientX,y:O.clientY});E.preventDefault()},{passive:!1}),s.addEventListener("touchmove",E=>{for(let O of E.changedTouches)if(O.identifier===Xe.id){let G=O.clientX-Xe.ox,Z=O.clientY-Xe.oy,Et=Math.min(45,Math.hypot(G,Z)),xt=Math.atan2(Z,G);Xe.x=Math.cos(xt)*Et/45,Xe.y=Math.sin(xt)*Et/45,i(".in-stick i").style.transform=`translate(${Xe.x*30}px, ${Xe.y*30}px)`}else O.identifier===es&&(hf((O.clientX-ys.x)*1.6,(O.clientY-ys.y)*1.6),ys={x:O.clientX,y:O.clientY});E.preventDefault()},{passive:!1});let uf=E=>{for(let O of E.changedTouches)O.identifier===Xe.id?(Xe.id=null,Xe.x=Xe.y=0,i(".in-stick").classList.remove("on"),i(".in-stick i").style.transform=""):O.identifier===es&&(es=null)};s.addEventListener("touchend",uf),s.addEventListener("touchcancel",uf);let df=performance.now(),pf=new N;function Go(E){if(Ot)return;let O=Math.min(.1,(E-df)/1e3);df=E,wn=wn*.9+(O>0?1/O:0)*.1;let G=performance.now();if(!Q&&!ft&&!be&&!cn){let ge=0,Ie=0;(Ct.has("KeyW")||Ct.has("ArrowUp"))&&(Ie-=1),(Ct.has("KeyS")||Ct.has("ArrowDown"))&&(Ie+=1),(Ct.has("KeyA")||Ct.has("ArrowLeft"))&&(ge-=1),(Ct.has("KeyD")||Ct.has("ArrowRight"))&&(ge+=1),ge+=Xe.x,Ie+=Xe.y;let sn=Math.hypot(ge,Ie);if(sn>.05){let Bn=Ct.has("ShiftLeft")||Ct.has("ShiftRight"),Pe=Ju({stance:Pt,sprint:Bn,slowWalk:he})*Math.min(1,sn)/sn,Gs=(ge*Math.cos(gt)+Ie*Math.sin(gt))*Pe*O,Qu=(-ge*Math.sin(gt)+Ie*Math.cos(gt))*Pe*O,Vs=ru(t,se.x+Gs,se.z+Qu,.3,{counter:n.isCounterOpen()});Vs.z=Math.min(Vs.z,.2);let mf=Math.hypot(Vs.x-se.x,Vs.z-se.z);if(Ut+=mf,ie===0&&(Mi+=mf*(Pt==="stand"?3.2:2)),se.x=Vs.x,se.z=Vs.z,Ut>=zy&&(k(),Si(),n.isDead())){$n(!0);return}}}(ce!==0||ie>0)&&(ce-=Zu*O,ie=Math.max(0,ie+ce*O),ie===0&&(ce=0));let Et=Bo[Pt].eye;D+=(Et-D)*Math.min(1,O*10);let xt=Re?40:72;Math.abs(l.fov-xt)>.1&&(l.fov+=(xt-l.fov)*Math.min(1,O*12),l.updateProjectionMatrix()),l.position.set(se.x,D+ie+Math.sin(Mi)*(Pt==="stand"?.03:.015),se.z),l.rotation.order="YXZ",l.rotation.set(Gt,gt,0),l.getWorldDirection(pf);let ct=Q||be?null:zt(l.position,pf),It=ou(t,se.x,se.z,gt);It&&It.type==="search"&&It.dist===0&&!z.has(It.zone)&&(z.add(It.zone),n.onSeeZone(It.zone),Si()),It&&It.type==="search"&&!(It.counter&&!n.isCounterOpen())&&(It=null);let te=(ct?`i:${ct.container?ct.cid:ct.it.pid}`:"")+(It?`${It.type}:${It.zone}`:"");if(fe===void 0||te!==$||Go.n++%20===0){fe=It,Y=ct,$=te;let ge=i(".in-prompt"),Ie=Nt(l.position).length;if(ct){ge.hidden=!1,ge.innerHTML=ct.container?`<kbd>${r?"USE":"E"}</kbd> Open the box <small>${mt(ct)} \xB7 1 min</small>`:n.describeItem(ct.it,Ie,r),ht.visible=!0;let Pe=new Nn().setFromObject(ct.obj);Pe.getSize(wt),Pe.getCenter(Ft),ht.scale.set(wt.x+.04,wt.y+.04,wt.z+.04),ht.position.copy(Ft),i(".in-cross").classList.add("on")}else ht.visible=!1,i(".in-cross").classList.remove("on"),It?(ge.hidden=!1,ge.innerHTML=n.describe(It)):ge.hidden=!0;let sn=A.countRadius,Bn=i(".in-notice");if(sn>0){let Pe=0;for(let Gs of Zt.values())Math.hypot(Gs.x-l.position.x,Gs.z-l.position.z)<sn&&Pe++;Bn.hidden=Pe===0,Bn.textContent=`You notice ${Pe} item${Pe===1?"":"s"} near you`}else Bn.hidden=!0}let Te=performance.now();x.update(O,l.position);let je=performance.now();for(let ge of H){if(!ge.group)continue;let Ie=Math.max(0,Math.abs(l.position.z-ge.f.z)-ge.f.d/2),sn=l.position.x-ge.f.x,Bn=Ie===0;ge.group.visible=Bn?sn*ge.side>0&&Math.abs(sn)<3.2:Math.hypot(sn,Ie)<(m==="high"?11:8)}for(let ge of Zt.values())ge.obj.visible=Math.hypot(ge.x-l.position.x,ge.z-l.position.z)<ot;let ze=performance.now();o.render(a,l);let mn=performance.now();nn&&Ne.sample(O,{game:Te-G,look:je-Te,cull:ze-je,render:mn-ze}),requestAnimationFrame(Go)}return Go.n=0,requestAnimationFrame(Go),window.__llInside={scene:a,renderer:o,plan:t,pos:se,look:(E,O=0)=>{gt=E,Gt=O},reach:()=>Nt(l.position).map(({o:E})=>E.it.zone),boxes:()=>[...dt.values()].filter(Boolean).map(E=>({cid:E.cid,x:E.x,y:E.y,z:E.z,opened:E.opened})),census:()=>{let E={};return a.traverse(O=>{if(O.isMesh||O.isPoints||O.isLine||O.isSprite){let G=O;for(;G.parent&&G.parent!==a;)G=G.parent;let Z=G.name||G.type;E[Z]=(E[Z]||0)+1}}),Object.entries(E).sort((O,G)=>G[1]-O[1]).slice(0,25).map(O=>O.join(":")).join(" ")},items:()=>[...Zt.values()].map(E=>({pid:E.it.pid,id:E.it.item,zone:E.it.zone,x:E.x,y:E.y,z:E.z})),state:()=>({stance:Pt,feet:ie,slowWalk:he,aiming:Re,panel:be,fov:l.fov,light:g?g.isOn():null,quality:m,info:()=>({calls:o.info.render.calls,tris:o.info.render.triangles})})},{close:()=>qn()}}function Vy(n){let t=new Set,e=new Set;n.traverse(s=>{s.geometry&&t.add(s.geometry);let r=Array.isArray(s.material)?s.material:s.material?[s.material]:[];for(let o of r)for(let a of["map","normalMap","roughnessMap","emissiveMap","alphaMap","aoMap","bumpMap"])o[a]&&e.add(o[a])});let i=0;for(let s of t){for(let r of Object.values(s.attributes))i+=r.array.byteLength;s.index&&(i+=s.index.array.byteLength)}for(let s of e){let r=s.image;r&&r.width&&(i+=r.width*r.height*4*1.33)}return n.environment&&n.environment.image&&(i+=256*256*6*8),i/1048576}function Wy(n){n.updateMatrixWorld(!0);let t=new Map,e=[];n.traverse(i=>{if(!i.isMesh||i.isInstancedMesh||i.isSkinnedMesh||Array.isArray(i.material)||i.children.length)return;let s=i.geometry,r=`${i.material.uuid}|${Object.keys(s.attributes).sort().join(",")}|${i.castShadow?1:0}|${i.receiveShadow?1:0}|${i.renderOrder}`,o=t.get(r);o||t.set(r,o={mat:i.material,cast:i.castShadow,recv:i.receiveShadow,order:i.renderOrder,geos:[],src:[]}),o.src.push(i)});for(let i of t.values()){if(i.src.length<2)continue;let s=i.src.map(a=>{let l=a.geometry.index?a.geometry.toNonIndexed():a.geometry.clone();return l.applyMatrix4(a.matrixWorld),l}),r=Fo(s);if(!r)continue;for(let a of i.src)a.parent.remove(a);let o=new Xt(r,i.mat);o.castShadow=i.cast,o.receiveShadow=i.recv,o.renderOrder=i.order,e.push(o)}for(let i of e)i.matrixAutoUpdate=!1,i.matrix.copy(n.matrixWorld).invert(),n.add(i)}var Xy=["map","normalMap","roughnessMap","metalnessMap","emissiveMap","alphaMap","aoMap","bumpMap"];function Yy(n){if(n.type!=="MeshStandardMaterial"&&n.type!=="MeshBasicMaterial"&&n.type!=="MeshLambertMaterial"||n.onBeforeCompile&&n.onBeforeCompile.toString()!=="onBeforeCompile(){}"&&n.customProgramCacheKey)return n.uuid;let t=Xy.map(i=>n[i]?(n[i].source?n[i].source.uuid:n[i].uuid)+n[i].repeat.x.toFixed(3)+n[i].repeat.y.toFixed(3)+n[i].offset.x.toFixed(3)+n[i].offset.y.toFixed(3):"-").join(","),e=i=>i?i.getHexString():"-";return[n.type,e(n.color),e(n.emissive),n.emissiveIntensity,n.roughness,n.metalness,n.transparent,n.opacity,n.side,n.alphaTest,n.vertexColors,n.flatShading,n.depthWrite,n.polygonOffset,n.polygonOffsetFactor,n.envMapIntensity,t].join("|")}function qy(n){n.updateMatrixWorld(!0);let t=new Map,e=[];n.traverse(i=>{if(!i.isMesh||i.isInstancedMesh||Array.isArray(i.material)){(i.isLine||i.isPoints||i.isSprite||i.isInstancedMesh||i.isMesh&&Array.isArray(i.material))&&e.push(i);return}let s=i.geometry,r=`${Yy(i.material)}|${Object.keys(s.attributes).sort().join(",")}|${i.castShadow?1:0}`,o=t.get(r);o||t.set(r,o={mat:i.material,cast:i.castShadow,geos:[]});let a=s.index?s.toNonIndexed():s.clone();a.applyMatrix4(i.matrixWorld),o.geos.push(a)});for(let i of e)i.updateMatrixWorld(!0),i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale);n.clear();for(let i of e)n.add(i);for(let i of t.values()){let s=i.geos.length===1?i.geos[0]:Fo(i.geos);if(!s)continue;let r=new Xt(s,i.mat);r.castShadow=i.cast,r.receiveShadow=!0,n.add(r)}}function $y(){let n=[];for(let t of gl){let e=n.find(i=>i.name===t.group);e||n.push(e={name:t.group,rows:[]}),e.rows.push(t)}return n.map(t=>`<div class="kg"><h5>${ts(t.name)}</h5>${t.rows.map(e=>`<div class="kr ${e.ready?"":"no"}"><kbd>${ts(e.show)}</kbd><span>${ts(e.label)}</span></div>`).join("")}</div>`).join("")}function Zy(n,t){let e=new Ht;if(n.type==="clothes"){let o=new Xt(new Ae(.05,.05,n.d),t);o.position.y=n.h,e.add(o);for(let a of[-n.d/2+.1,n.d/2-.1]){let l=new Xt(new Ae(.06,n.h,.06),t);l.position.set(0,n.h/2,a),e.add(l)}}else{let o=new Xt(new Ae(.06,n.h,n.d),t);o.position.y=n.h/2,e.add(o);for(let a of[.1,.6,1.1,1.55,1.98]){let l=new Xt(new Ae(n.w,.04,n.d),t);l.position.y=a,e.add(l)}for(let a of[-n.d/2,n.d/2]){let l=new Xt(new Ae(n.w,n.h,.05),t);l.position.set(0,n.h/2,a),e.add(l)}}let i=[];e.children.forEach(o=>{o.updateMatrix();let a=o.geometry.clone();a.applyMatrix4(o.matrix),i.push(a)});let s=new Xt(Fo(i.map(o=>o.toNonIndexed())),t),r=new Ht;return r.add(s),r.position.set(n.x,0,n.z),r}window.LLInside3D={openInside:Gy};})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
