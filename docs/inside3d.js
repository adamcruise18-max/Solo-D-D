(()=>{var v0="170";var Uu=0,lh=1,Ou=2;var Za=1,b0=2,Fi=3,hs=0,un=1,Ce=2,ls=0,ir=1,Vi=2,ch=3,hh=4,Du=5,Ss=100,Fu=101,ku=102,Bu=103,zu=104,Hu=200,Gu=201,Vu=202,Wu=203,$l=204,Zl=205,Xu=206,Yu=207,qu=208,$u=209,Zu=210,Ku=211,Ju=212,ju=213,Qu=214,Kl=0,Jl=1,jl=2,lr=3,Ql=4,tc=5,ec=6,nc=7,Af=0,td=1,ed=2,cs=0,nd=1,id=2,sd=3,M0=4,rd=5,od=6,ad=7;var Rf=300,cr=301,hr=302,ic=303,sc=304,Ka=306,Wi=1e3,Bi=1001,rc=1002,qn=1003,ld=1004;var Uo=1005;var bi=1006,ul=1007;var zi=1008;var Xi=1009,Cf=1010,If=1011,no=1012,S0=1013,Ts=1014,Mi=1015,_o=1016,E0=1017,T0=1018,fr=1020,Pf=35902,Lf=1021,Nf=1022,pi=1023,Uf=1024,Of=1025,sr=1026,ur=1027,w0=1028,A0=1029,Df=1030,R0=1031;var C0=1033,ga=33776,xa=33777,_a=33778,ya=33779,oc=35840,ac=35841,lc=35842,cc=35843,hc=36196,fc=37492,uc=37496,dc=37808,pc=37809,mc=37810,gc=37811,xc=37812,_c=37813,yc=37814,vc=37815,bc=37816,Mc=37817,Sc=37818,Ec=37819,Tc=37820,wc=37821,va=36492,Ac=36494,Rc=36495,Ff=36283,Cc=36284,Ic=36285,Pc=36286;var ba=2300,Lc=2301,dl=2302,fh=2400,uh=2401,dh=2402;var cd=3200,hd=3201;var kf=0,fd=1,ni="",We="srgb",Cr="srgb-linear",Ja="linear",ze="srgb";var Ds=7680;var ph=519,ud=512,dd=513,pd=514,Bf=515,md=516,gd=517,xd=518,_d=519,Nc=35044;var mh="300 es",Hi=2e3,Ma=2001,fs=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],gh=1234567,rr=Math.PI/180,dr=180/Math.PI;function Si(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Mn[n&255]+Mn[n>>8&255]+Mn[n>>16&255]+Mn[n>>24&255]+"-"+Mn[t&255]+Mn[t>>8&255]+"-"+Mn[t>>16&15|64]+Mn[t>>24&255]+"-"+Mn[e&63|128]+Mn[e>>8&255]+"-"+Mn[e>>16&255]+Mn[e>>24&255]+Mn[i&255]+Mn[i>>8&255]+Mn[i>>16&255]+Mn[i>>24&255]).toLowerCase()}function fn(n,t,e){return Math.max(t,Math.min(e,n))}function I0(n,t){return(n%t+t)%t}function yd(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function vd(n,t,e){return n!==t?(e-n)/(t-n):0}function Jr(n,t,e){return(1-e)*n+e*t}function bd(n,t,e,i){return Jr(n,t,1-Math.exp(-e*i))}function Md(n,t=1){return t-Math.abs(I0(n,t*2)-t)}function Sd(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Ed(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Td(n,t){return n+Math.floor(Math.random()*(t-n+1))}function wd(n,t){return n+Math.random()*(t-n)}function Ad(n){return n*(.5-Math.random())}function Rd(n){n!==void 0&&(gh=n);let t=gh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Cd(n){return n*rr}function Id(n){return n*dr}function Pd(n){return(n&n-1)===0&&n!==0}function Ld(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Nd(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Ud(n,t,e,i,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+i)/2),h=o((t+i)/2),f=r((t-i)/2),u=o((t-i)/2),d=r((i-t)/2),m=o((i-t)/2);switch(s){case"XYX":n.set(a*h,l*f,l*u,a*c);break;case"YZY":n.set(l*u,a*h,l*f,a*c);break;case"ZXZ":n.set(l*f,l*u,a*h,a*c);break;case"XZX":n.set(a*h,l*m,l*d,a*c);break;case"YXY":n.set(l*d,a*h,l*m,a*c);break;case"ZYZ":n.set(l*m,l*d,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function di(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function De(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Cs={DEG2RAD:rr,RAD2DEG:dr,generateUUID:Si,clamp:fn,euclideanModulo:I0,mapLinear:yd,inverseLerp:vd,lerp:Jr,damp:bd,pingpong:Md,smoothstep:Sd,smootherstep:Ed,randInt:Td,randFloat:wd,randFloatSpread:Ad,seededRandom:Rd,degToRad:Cd,radToDeg:Id,isPowerOfTwo:Pd,ceilPowerOfTwo:Ld,floorPowerOfTwo:Nd,setQuaternionFromProperEuler:Ud,normalize:De,denormalize:di},vt=class n{constructor(t=0,e=0){n.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(fn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},me=class n{constructor(t,e,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],f=i[7],u=i[2],d=i[5],m=i[8],x=s[0],g=s[3],p=s[6],b=s[1],_=s[4],y=s[7],L=s[2],R=s[5],C=s[8];return r[0]=o*x+a*b+l*L,r[3]=o*g+a*_+l*R,r[6]=o*p+a*y+l*C,r[1]=c*x+h*b+f*L,r[4]=c*g+h*_+f*R,r[7]=c*p+h*y+f*C,r[2]=u*x+d*b+m*L,r[5]=u*g+d*_+m*R,r[8]=u*p+d*y+m*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=h*o-a*c,u=a*l-h*r,d=c*r-o*l,m=e*f+i*u+s*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return t[0]=f*x,t[1]=(s*c-h*i)*x,t[2]=(a*i-s*o)*x,t[3]=u*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-a*e)*x,t[6]=d*x,t[7]=(i*l-c*e)*x,t[8]=(o*e-i*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(pl.makeScale(t,e)),this}rotate(t){return this.premultiply(pl.makeRotation(-t)),this}translate(t,e){return this.premultiply(pl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},pl=new me;function zf(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Sa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Od(){let n=Sa("canvas");return n.style.display="block",n}var xh={};function Zr(n){n in xh||(xh[n]=!0,console.warn(n))}function Dd(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function Fd(n){let t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function kd(n){let t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Re={enabled:!0,workingColorSpace:Cr,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ze&&(n.r=Gi(n.r),n.g=Gi(n.g),n.b=Gi(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ze&&(n.r=or(n.r),n.g=or(n.g),n.b=or(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===ni?Ja:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Gi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function or(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var _h=[.64,.33,.3,.6,.15,.06],yh=[.2126,.7152,.0722],vh=[.3127,.329],bh=new me().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Mh=new me().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Re.define({[Cr]:{primaries:_h,whitePoint:vh,transfer:Ja,toXYZ:bh,fromXYZ:Mh,luminanceCoefficients:yh,workingColorSpaceConfig:{unpackColorSpace:We},outputColorSpaceConfig:{drawingBufferColorSpace:We}},[We]:{primaries:_h,whitePoint:vh,transfer:ze,toXYZ:bh,fromXYZ:Mh,luminanceCoefficients:yh,outputColorSpaceConfig:{drawingBufferColorSpace:We}}});var Fs,Uc=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Fs===void 0&&(Fs=Sa("canvas")),Fs.width=t.width,Fs.height=t.height;let i=Fs.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Fs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Sa("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Gi(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Gi(e[i]/255)*255):e[i]=Gi(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Bd=0,Ea=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Bd++}),this.uuid=Si(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ml(s[o].image)):r.push(ml(s[o]))}else r=ml(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function ml(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Uc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var zd=0,On=class n extends fs{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=Bi,s=Bi,r=bi,o=zi,a=pi,l=Xi,c=n.DEFAULT_ANISOTROPY,h=ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zd++}),this.uuid=Si(),this.name="",this.source=new Ea(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new vt(0,0),this.repeat=new vt(1,1),this.center=new vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new me,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Rf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Wi:t.x=t.x-Math.floor(t.x);break;case Bi:t.x=t.x<0?0:1;break;case rc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Wi:t.y=t.y-Math.floor(t.y);break;case Bi:t.y=t.y<0?0:1;break;case rc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};On.DEFAULT_IMAGE=null;On.DEFAULT_MAPPING=Rf;On.DEFAULT_ANISOTROPY=1;var Le=class n{constructor(t=0,e=0,i=0,s=1){n.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],m=l[9],x=l[2],g=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+x)<.1&&Math.abs(m+g)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let _=(c+1)/2,y=(d+1)/2,L=(p+1)/2,R=(h+u)/4,C=(f+x)/4,P=(m+g)/4;return _>y&&_>L?_<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(_),s=R/i,r=C/i):y>L?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=R/s,r=P/s):L<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),i=C/r,s=P/r),this.set(i,s,r,e),this}let b=Math.sqrt((g-m)*(g-m)+(f-x)*(f-x)+(u-h)*(u-h));return Math.abs(b)<.001&&(b=1),this.x=(g-m)/b,this.y=(f-x)/b,this.z=(u-h)/b,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Oc=class extends fs{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Le(0,0,t,e),this.scissorTest=!1,this.viewport=new Le(0,0,t,e);let s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new On(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Ea(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Yi=class extends Oc{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Ta=class extends On{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=qn,this.minFilter=qn,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Dc=class extends On{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=qn,this.minFilter=qn,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Cn=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],f=i[s+3],u=r[o+0],d=r[o+1],m=r[o+2],x=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f;return}if(a===1){t[e+0]=u,t[e+1]=d,t[e+2]=m,t[e+3]=x;return}if(f!==x||l!==u||c!==d||h!==m){let g=1-a,p=l*u+c*d+h*m+f*x,b=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){let L=Math.sqrt(_),R=Math.atan2(L,p*b);g=Math.sin(g*R)/L,a=Math.sin(a*R)/L}let y=a*b;if(l=l*g+u*y,c=c*g+d*y,h=h*g+m*y,f=f*g+x*y,g===1-a){let L=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=L,c*=L,h*=L,f*=L}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],f=r[o],u=r[o+1],d=r[o+2],m=r[o+3];return t[e]=a*m+h*f+l*d-c*u,t[e+1]=l*m+h*u+c*f-a*d,t[e+2]=c*m+h*d+a*u-l*f,t[e+3]=h*m-a*f-l*u-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),f=a(r/2),u=l(i/2),d=l(s/2),m=l(r/2);switch(o){case"XYZ":this._x=u*h*f+c*d*m,this._y=c*d*f-u*h*m,this._z=c*h*m+u*d*f,this._w=c*h*f-u*d*m;break;case"YXZ":this._x=u*h*f+c*d*m,this._y=c*d*f-u*h*m,this._z=c*h*m-u*d*f,this._w=c*h*f+u*d*m;break;case"ZXY":this._x=u*h*f-c*d*m,this._y=c*d*f+u*h*m,this._z=c*h*m+u*d*f,this._w=c*h*f-u*d*m;break;case"ZYX":this._x=u*h*f-c*d*m,this._y=c*d*f+u*h*m,this._z=c*h*m-u*d*f,this._w=c*h*f+u*d*m;break;case"YZX":this._x=u*h*f+c*d*m,this._y=c*d*f+u*h*m,this._z=c*h*m-u*d*f,this._w=c*h*f-u*d*m;break;case"XZY":this._x=u*h*f-c*d*m,this._y=c*d*f-u*h*m,this._z=c*h*m+u*d*f,this._w=c*h*f+u*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],f=e[10],u=i+a+f;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(i>a&&i>f){let d=2*Math.sqrt(1+i-a-f);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>f){let d=2*Math.sqrt(1+a-i-f);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+f-i-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(fn(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let d=1-e;return this._w=d*o+e*this._w,this._x=d*i+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),f=Math.sin((1-e)*h)/c,u=Math.sin(e*h)/c;return this._w=o*f+this._w*u,this._x=i*f+this._x*u,this._y=s*f+this._y*u,this._z=r*f+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},N=class n{constructor(t=0,e=0,i=0){n.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Sh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Sh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),h=2*(a*e-r*s),f=2*(r*i-o*e);return this.x=e+l*c+o*f-a*h,this.y=i+l*h+a*c-r*f,this.z=s+l*f+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return gl.copy(this).projectOnVector(t),this.sub(gl)}reflect(t){return this.sub(gl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(fn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},gl=new N,Sh=new Cn,$n=class{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(ci.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(ci.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=ci.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,ci):ci.fromBufferAttribute(r,o),ci.applyMatrix4(t.matrixWorld),this.expandByPoint(ci);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Oo.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Oo.copy(i.boundingBox)),Oo.applyMatrix4(t.matrixWorld),this.union(Oo)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ci),ci.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(kr),Do.subVectors(this.max,kr),ks.subVectors(t.a,kr),Bs.subVectors(t.b,kr),zs.subVectors(t.c,kr),ns.subVectors(Bs,ks),is.subVectors(zs,Bs),gs.subVectors(ks,zs);let e=[0,-ns.z,ns.y,0,-is.z,is.y,0,-gs.z,gs.y,ns.z,0,-ns.x,is.z,0,-is.x,gs.z,0,-gs.x,-ns.y,ns.x,0,-is.y,is.x,0,-gs.y,gs.x,0];return!xl(e,ks,Bs,zs,Do)||(e=[1,0,0,0,1,0,0,0,1],!xl(e,ks,Bs,zs,Do))?!1:(Fo.crossVectors(ns,is),e=[Fo.x,Fo.y,Fo.z],xl(e,ks,Bs,zs,Do))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ci).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ci).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Li),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Li=[new N,new N,new N,new N,new N,new N,new N,new N],ci=new N,Oo=new $n,ks=new N,Bs=new N,zs=new N,ns=new N,is=new N,gs=new N,kr=new N,Do=new N,Fo=new N,xs=new N;function xl(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){xs.fromArray(n,r);let a=s.x*Math.abs(xs.x)+s.y*Math.abs(xs.y)+s.z*Math.abs(xs.z),l=t.dot(xs),c=e.dot(xs),h=i.dot(xs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Hd=new $n,Br=new N,_l=new N,qi=class{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Hd.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Br.subVectors(t,this.center);let e=Br.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Br,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(_l.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Br.copy(t.center).add(_l)),this.expandByPoint(Br.copy(t.center).sub(_l))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Ni=new N,yl=new N,ko=new N,ss=new N,vl=new N,Bo=new N,bl=new N,pr=class{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ni)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ni.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ni.copy(this.origin).addScaledVector(this.direction,e),Ni.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){yl.copy(t).add(e).multiplyScalar(.5),ko.copy(e).sub(t).normalize(),ss.copy(this.origin).sub(yl);let r=t.distanceTo(e)*.5,o=-this.direction.dot(ko),a=ss.dot(this.direction),l=-ss.dot(ko),c=ss.lengthSq(),h=Math.abs(1-o*o),f,u,d,m;if(h>0)if(f=o*l-a,u=o*a-l,m=r*h,f>=0)if(u>=-m)if(u<=m){let x=1/h;f*=x,u*=x,d=f*(f+o*u+2*a)+u*(o*f+u+2*l)+c}else u=r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;else u<=-m?(f=Math.max(0,-(-o*r+a)),u=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c):u<=m?(f=0,u=Math.min(Math.max(-r,-l),r),d=u*(u+2*l)+c):(f=Math.max(0,-(o*r+a)),u=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c);else u=o>0?-r:r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(yl).addScaledVector(ko,u),d}intersectSphere(t,e){Ni.subVectors(t.center,this.origin);let i=Ni.dot(this.direction),s=Ni.dot(Ni)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(t.min.z-u.z)*f,l=(t.max.z-u.z)*f):(a=(t.max.z-u.z)*f,l=(t.min.z-u.z)*f),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Ni)!==null}intersectTriangle(t,e,i,s,r){vl.subVectors(e,t),Bo.subVectors(i,t),bl.crossVectors(vl,Bo);let o=this.direction.dot(bl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ss.subVectors(this.origin,t);let l=a*this.direction.dot(Bo.crossVectors(ss,Bo));if(l<0)return null;let c=a*this.direction.dot(vl.cross(ss));if(c<0||l+c>o)return null;let h=-a*ss.dot(bl);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},de=class n{constructor(t,e,i,s,r,o,a,l,c,h,f,u,d,m,x,g){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,h,f,u,d,m,x,g)}set(t,e,i,s,r,o,a,l,c,h,f,u,d,m,x,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=f,p[14]=u,p[3]=d,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,s=1/Hs.setFromMatrixColumn(t,0).length(),r=1/Hs.setFromMatrixColumn(t,1).length(),o=1/Hs.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let u=o*h,d=o*f,m=a*h,x=a*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=d+m*c,e[5]=u-x*c,e[9]=-a*l,e[2]=x-u*c,e[6]=m+d*c,e[10]=o*l}else if(t.order==="YXZ"){let u=l*h,d=l*f,m=c*h,x=c*f;e[0]=u+x*a,e[4]=m*a-d,e[8]=o*c,e[1]=o*f,e[5]=o*h,e[9]=-a,e[2]=d*a-m,e[6]=x+u*a,e[10]=o*l}else if(t.order==="ZXY"){let u=l*h,d=l*f,m=c*h,x=c*f;e[0]=u-x*a,e[4]=-o*f,e[8]=m+d*a,e[1]=d+m*a,e[5]=o*h,e[9]=x-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let u=o*h,d=o*f,m=a*h,x=a*f;e[0]=l*h,e[4]=m*c-d,e[8]=u*c+x,e[1]=l*f,e[5]=x*c+u,e[9]=d*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let u=o*l,d=o*c,m=a*l,x=a*c;e[0]=l*h,e[4]=x-u*f,e[8]=m*f+d,e[1]=f,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*f+m,e[10]=u-x*f}else if(t.order==="XZY"){let u=o*l,d=o*c,m=a*l,x=a*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=u*f+x,e[5]=o*h,e[9]=d*f-m,e[2]=m*f-d,e[6]=a*h,e[10]=x*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Gd,t,Vd)}lookAt(t,e,i){let s=this.elements;return Xn.subVectors(t,e),Xn.lengthSq()===0&&(Xn.z=1),Xn.normalize(),rs.crossVectors(i,Xn),rs.lengthSq()===0&&(Math.abs(i.z)===1?Xn.x+=1e-4:Xn.z+=1e-4,Xn.normalize(),rs.crossVectors(i,Xn)),rs.normalize(),zo.crossVectors(Xn,rs),s[0]=rs.x,s[4]=zo.x,s[8]=Xn.x,s[1]=rs.y,s[5]=zo.y,s[9]=Xn.y,s[2]=rs.z,s[6]=zo.z,s[10]=Xn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],f=i[5],u=i[9],d=i[13],m=i[2],x=i[6],g=i[10],p=i[14],b=i[3],_=i[7],y=i[11],L=i[15],R=s[0],C=s[4],P=s[8],E=s[12],S=s[1],O=s[5],V=s[9],z=s[13],X=s[2],lt=s[6],j=s[10],gt=s[14],J=s[3],Ct=s[7],It=s[11],Ot=s[15];return r[0]=o*R+a*S+l*X+c*J,r[4]=o*C+a*O+l*lt+c*Ct,r[8]=o*P+a*V+l*j+c*It,r[12]=o*E+a*z+l*gt+c*Ot,r[1]=h*R+f*S+u*X+d*J,r[5]=h*C+f*O+u*lt+d*Ct,r[9]=h*P+f*V+u*j+d*It,r[13]=h*E+f*z+u*gt+d*Ot,r[2]=m*R+x*S+g*X+p*J,r[6]=m*C+x*O+g*lt+p*Ct,r[10]=m*P+x*V+g*j+p*It,r[14]=m*E+x*z+g*gt+p*Ot,r[3]=b*R+_*S+y*X+L*J,r[7]=b*C+_*O+y*lt+L*Ct,r[11]=b*P+_*V+y*j+L*It,r[15]=b*E+_*z+y*gt+L*Ot,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],f=t[6],u=t[10],d=t[14],m=t[3],x=t[7],g=t[11],p=t[15];return m*(+r*l*f-s*c*f-r*a*u+i*c*u+s*a*d-i*l*d)+x*(+e*l*d-e*c*u+r*o*u-s*o*d+s*c*h-r*l*h)+g*(+e*c*f-e*a*d-r*o*f+i*o*d+r*a*h-i*c*h)+p*(-s*a*h-e*l*f+e*a*u+s*o*f-i*o*u+i*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=t[9],u=t[10],d=t[11],m=t[12],x=t[13],g=t[14],p=t[15],b=f*g*c-x*u*c+x*l*d-a*g*d-f*l*p+a*u*p,_=m*u*c-h*g*c-m*l*d+o*g*d+h*l*p-o*u*p,y=h*x*c-m*f*c+m*a*d-o*x*d-h*a*p+o*f*p,L=m*f*l-h*x*l-m*a*u+o*x*u+h*a*g-o*f*g,R=e*b+i*_+s*y+r*L;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/R;return t[0]=b*C,t[1]=(x*u*r-f*g*r-x*s*d+i*g*d+f*s*p-i*u*p)*C,t[2]=(a*g*r-x*l*r+x*s*c-i*g*c-a*s*p+i*l*p)*C,t[3]=(f*l*r-a*u*r-f*s*c+i*u*c+a*s*d-i*l*d)*C,t[4]=_*C,t[5]=(h*g*r-m*u*r+m*s*d-e*g*d-h*s*p+e*u*p)*C,t[6]=(m*l*r-o*g*r-m*s*c+e*g*c+o*s*p-e*l*p)*C,t[7]=(o*u*r-h*l*r+h*s*c-e*u*c-o*s*d+e*l*d)*C,t[8]=y*C,t[9]=(m*f*r-h*x*r-m*i*d+e*x*d+h*i*p-e*f*p)*C,t[10]=(o*x*r-m*a*r+m*i*c-e*x*c-o*i*p+e*a*p)*C,t[11]=(h*a*r-o*f*r-h*i*c+e*f*c+o*i*d-e*a*d)*C,t[12]=L*C,t[13]=(h*x*s-m*f*s+m*i*u-e*x*u-h*i*g+e*f*g)*C,t[14]=(m*a*s-o*x*s-m*i*l+e*x*l+o*i*g-e*a*g)*C,t[15]=(o*f*s-h*a*s+h*i*l-e*f*l-o*i*u+e*a*u)*C,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,f=a+a,u=r*c,d=r*h,m=r*f,x=o*h,g=o*f,p=a*f,b=l*c,_=l*h,y=l*f,L=i.x,R=i.y,C=i.z;return s[0]=(1-(x+p))*L,s[1]=(d+y)*L,s[2]=(m-_)*L,s[3]=0,s[4]=(d-y)*R,s[5]=(1-(u+p))*R,s[6]=(g+b)*R,s[7]=0,s[8]=(m+_)*C,s[9]=(g-b)*C,s[10]=(1-(u+x))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements,r=Hs.set(s[0],s[1],s[2]).length(),o=Hs.set(s[4],s[5],s[6]).length(),a=Hs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],hi.copy(this);let c=1/r,h=1/o,f=1/a;return hi.elements[0]*=c,hi.elements[1]*=c,hi.elements[2]*=c,hi.elements[4]*=h,hi.elements[5]*=h,hi.elements[6]*=h,hi.elements[8]*=f,hi.elements[9]*=f,hi.elements[10]*=f,e.setFromRotationMatrix(hi),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=Hi){let l=this.elements,c=2*r/(e-t),h=2*r/(i-s),f=(e+t)/(e-t),u=(i+s)/(i-s),d,m;if(a===Hi)d=-(o+r)/(o-r),m=-2*o*r/(o-r);else if(a===Ma)d=-o/(o-r),m=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=Hi){let l=this.elements,c=1/(e-t),h=1/(i-s),f=1/(o-r),u=(e+t)*c,d=(i+s)*h,m,x;if(a===Hi)m=(o+r)*f,x=-2*f;else if(a===Ma)m=r*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=x,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},Hs=new N,hi=new de,Gd=new N(0,0,0),Vd=new N(1,1,1),rs=new N,zo=new N,Xn=new N,Eh=new de,Th=new Cn,In=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],f=s[2],u=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(fn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-fn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(fn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-fn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(fn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-fn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Eh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Eh,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Th.setFromEuler(this),this.setFromQuaternion(Th,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};In.DEFAULT_ORDER="XYZ";var io=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Wd=0,wh=new N,Gs=new Cn,Ui=new de,Ho=new N,zr=new N,Xd=new N,Yd=new Cn,Ah=new N(1,0,0),Rh=new N(0,1,0),Ch=new N(0,0,1),Ih={type:"added"},qd={type:"removed"},Vs={type:"childadded",child:null},Ml={type:"childremoved",child:null},nn=class n extends fs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Wd++}),this.uuid=Si(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new N,e=new In,i=new Cn,s=new N(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new de},normalMatrix:{value:new me}}),this.matrix=new de,this.matrixWorld=new de,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new io,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Gs.setFromAxisAngle(t,e),this.quaternion.multiply(Gs),this}rotateOnWorldAxis(t,e){return Gs.setFromAxisAngle(t,e),this.quaternion.premultiply(Gs),this}rotateX(t){return this.rotateOnAxis(Ah,t)}rotateY(t){return this.rotateOnAxis(Rh,t)}rotateZ(t){return this.rotateOnAxis(Ch,t)}translateOnAxis(t,e){return wh.copy(t).applyQuaternion(this.quaternion),this.position.add(wh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ah,t)}translateY(t){return this.translateOnAxis(Rh,t)}translateZ(t){return this.translateOnAxis(Ch,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ui.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Ho.copy(t):Ho.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),zr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ui.lookAt(zr,Ho,this.up):Ui.lookAt(Ho,zr,this.up),this.quaternion.setFromRotationMatrix(Ui),s&&(Ui.extractRotation(s.matrixWorld),Gs.setFromRotationMatrix(Ui),this.quaternion.premultiply(Gs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ih),Vs.child=t,this.dispatchEvent(Vs),Vs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(qd),Ml.child=t,this.dispatchEvent(Ml),Ml.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ui.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ui.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ui),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ih),Vs.child=t,this.dispatchEvent(Vs),Vs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zr,t,Xd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zr,Yd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),f=o(t.shapes),u=o(t.skeletons),d=o(t.animations),m=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),u.length>0&&(i.skeletons=u),d.length>0&&(i.animations=d),m.length>0&&(i.nodes=m)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};nn.DEFAULT_UP=new N(0,1,0);nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var fi=new N,Oi=new N,Sl=new N,Di=new N,Ws=new N,Xs=new N,Ph=new N,El=new N,Tl=new N,wl=new N,Al=new Le,Rl=new Le,Cl=new Le,ki=class n{constructor(t=new N,e=new N,i=new N){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),fi.subVectors(t,e),s.cross(fi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){fi.subVectors(s,e),Oi.subVectors(i,e),Sl.subVectors(t,e);let o=fi.dot(fi),a=fi.dot(Oi),l=fi.dot(Sl),c=Oi.dot(Oi),h=Oi.dot(Sl),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;let u=1/f,d=(c*l-a*h)*u,m=(o*h-a*l)*u;return r.set(1-d-m,m,d)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Di)===null?!1:Di.x>=0&&Di.y>=0&&Di.x+Di.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,Di)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Di.x),l.addScaledVector(o,Di.y),l.addScaledVector(a,Di.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return Al.setScalar(0),Rl.setScalar(0),Cl.setScalar(0),Al.fromBufferAttribute(t,e),Rl.fromBufferAttribute(t,i),Cl.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Al,r.x),o.addScaledVector(Rl,r.y),o.addScaledVector(Cl,r.z),o}static isFrontFacing(t,e,i,s){return fi.subVectors(i,e),Oi.subVectors(t,e),fi.cross(Oi).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return fi.subVectors(this.c,this.b),Oi.subVectors(this.a,this.b),fi.cross(Oi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;Ws.subVectors(s,i),Xs.subVectors(r,i),El.subVectors(t,i);let l=Ws.dot(El),c=Xs.dot(El);if(l<=0&&c<=0)return e.copy(i);Tl.subVectors(t,s);let h=Ws.dot(Tl),f=Xs.dot(Tl);if(h>=0&&f<=h)return e.copy(s);let u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(i).addScaledVector(Ws,o);wl.subVectors(t,r);let d=Ws.dot(wl),m=Xs.dot(wl);if(m>=0&&d<=m)return e.copy(r);let x=d*c-l*m;if(x<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(i).addScaledVector(Xs,a);let g=h*m-d*f;if(g<=0&&f-h>=0&&d-m>=0)return Ph.subVectors(r,s),a=(f-h)/(f-h+(d-m)),e.copy(s).addScaledVector(Ph,a);let p=1/(g+x+u);return o=x*p,a=u*p,e.copy(i).addScaledVector(Ws,o).addScaledVector(Xs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Hf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},os={h:0,s:0,l:0},Go={h:0,s:0,l:0};function Il(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var Zt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=We){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Re.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=Re.workingColorSpace){return this.r=t,this.g=e,this.b=i,Re.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=Re.workingColorSpace){if(t=I0(t,1),e=fn(e,0,1),i=fn(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Il(o,r,t+1/3),this.g=Il(o,r,t),this.b=Il(o,r,t-1/3)}return Re.toWorkingColorSpace(this,s),this}setStyle(t,e=We){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=We){let i=Hf[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Gi(t.r),this.g=Gi(t.g),this.b=Gi(t.b),this}copyLinearToSRGB(t){return this.r=or(t.r),this.g=or(t.g),this.b=or(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=We){return Re.fromWorkingColorSpace(Sn.copy(this),t),Math.round(fn(Sn.r*255,0,255))*65536+Math.round(fn(Sn.g*255,0,255))*256+Math.round(fn(Sn.b*255,0,255))}getHexString(t=We){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Re.workingColorSpace){Re.fromWorkingColorSpace(Sn.copy(this),e);let i=Sn.r,s=Sn.g,r=Sn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Re.workingColorSpace){return Re.fromWorkingColorSpace(Sn.copy(this),e),t.r=Sn.r,t.g=Sn.g,t.b=Sn.b,t}getStyle(t=We){Re.fromWorkingColorSpace(Sn.copy(this),t);let e=Sn.r,i=Sn.g,s=Sn.b;return t!==We?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(os),this.setHSL(os.h+t,os.s+e,os.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(os),t.getHSL(Go);let i=Jr(os.h,Go.h,e),s=Jr(os.s,Go.s,e),r=Jr(os.l,Go.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Sn=new Zt;Zt.NAMES=Hf;var $d=0,Ei=class extends fs{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$d++}),this.uuid=Si(),this.name="",this.blending=ir,this.side=hs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$l,this.blendDst=Zl,this.blendEquation=Ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Zt(0,0,0),this.blendAlpha=0,this.depthFunc=lr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ph,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ds,this.stencilZFail=Ds,this.stencilZPass=Ds,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ir&&(i.blending=this.blending),this.side!==hs&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==$l&&(i.blendSrc=this.blendSrc),this.blendDst!==Zl&&(i.blendDst=this.blendDst),this.blendEquation!==Ss&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==lr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ph&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ds&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ds&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ds&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},_n=class extends Ei{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new In,this.combine=Af,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var rn=new N,Vo=new vt,Ye=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Nc,this.updateRanges=[],this.gpuType=Mi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Vo.fromBufferAttribute(this,e),Vo.applyMatrix3(t),this.setXY(e,Vo.x,Vo.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)rn.fromBufferAttribute(this,e),rn.applyMatrix3(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)rn.fromBufferAttribute(this,e),rn.applyMatrix4(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)rn.fromBufferAttribute(this,e),rn.applyNormalMatrix(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)rn.fromBufferAttribute(this,e),rn.transformDirection(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=di(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=De(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=di(e,this.array)),e}setX(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=di(e,this.array)),e}setY(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=di(e,this.array)),e}setZ(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=di(e,this.array)),e}setW(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),i=De(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),i=De(i,this.array),s=De(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),i=De(i,this.array),s=De(s,this.array),r=De(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Nc&&(t.usage=this.usage),t}};var mr=class extends Ye{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var gr=class extends Ye{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var ue=class extends Ye{constructor(t,e,i){super(new Float32Array(t),e,i)}},Zd=0,ei=new de,Pl=new nn,Ys=new N,Yn=new $n,Hr=new $n,hn=new N,Ue=class n extends fs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zd++}),this.uuid=Si(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(zf(t)?gr:mr)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new me().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ei.makeRotationFromQuaternion(t),this.applyMatrix4(ei),this}rotateX(t){return ei.makeRotationX(t),this.applyMatrix4(ei),this}rotateY(t){return ei.makeRotationY(t),this.applyMatrix4(ei),this}rotateZ(t){return ei.makeRotationZ(t),this.applyMatrix4(ei),this}translate(t,e,i){return ei.makeTranslation(t,e,i),this.applyMatrix4(ei),this}scale(t,e,i){return ei.makeScale(t,e,i),this.applyMatrix4(ei),this}lookAt(t){return Pl.lookAt(t),Pl.updateMatrix(),this.applyMatrix4(Pl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ys).negate(),this.translate(Ys.x,Ys.y,Ys.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ue(i,3))}else{for(let i=0,s=e.count;i<s;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $n);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];Yn.setFromBufferAttribute(r),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,Yn.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,Yn.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint(Yn.min),this.boundingBox.expandByPoint(Yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){let i=this.boundingSphere.center;if(Yn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Hr.setFromBufferAttribute(a),this.morphTargetsRelative?(hn.addVectors(Yn.min,Hr.min),Yn.expandByPoint(hn),hn.addVectors(Yn.max,Hr.max),Yn.expandByPoint(hn)):(Yn.expandByPoint(Hr.min),Yn.expandByPoint(Hr.max))}Yn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)hn.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(hn));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)hn.fromBufferAttribute(a,c),l&&(Ys.fromBufferAttribute(t,c),hn.add(Ys)),s=Math.max(s,i.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ye(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<i.count;P++)a[P]=new N,l[P]=new N;let c=new N,h=new N,f=new N,u=new vt,d=new vt,m=new vt,x=new N,g=new N;function p(P,E,S){c.fromBufferAttribute(i,P),h.fromBufferAttribute(i,E),f.fromBufferAttribute(i,S),u.fromBufferAttribute(r,P),d.fromBufferAttribute(r,E),m.fromBufferAttribute(r,S),h.sub(c),f.sub(c),d.sub(u),m.sub(u);let O=1/(d.x*m.y-m.x*d.y);isFinite(O)&&(x.copy(h).multiplyScalar(m.y).addScaledVector(f,-d.y).multiplyScalar(O),g.copy(f).multiplyScalar(d.x).addScaledVector(h,-m.x).multiplyScalar(O),a[P].add(x),a[E].add(x),a[S].add(x),l[P].add(g),l[E].add(g),l[S].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let P=0,E=b.length;P<E;++P){let S=b[P],O=S.start,V=S.count;for(let z=O,X=O+V;z<X;z+=3)p(t.getX(z+0),t.getX(z+1),t.getX(z+2))}let _=new N,y=new N,L=new N,R=new N;function C(P){L.fromBufferAttribute(s,P),R.copy(L);let E=a[P];_.copy(E),_.sub(L.multiplyScalar(L.dot(E))).normalize(),y.crossVectors(R,E);let O=y.dot(l[P])<0?-1:1;o.setXYZW(P,_.x,_.y,_.z,O)}for(let P=0,E=b.length;P<E;++P){let S=b[P],O=S.start,V=S.count;for(let z=O,X=O+V;z<X;z+=3)C(t.getX(z+0)),C(t.getX(z+1)),C(t.getX(z+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ye(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,d=i.count;u<d;u++)i.setXYZ(u,0,0,0);let s=new N,r=new N,o=new N,a=new N,l=new N,c=new N,h=new N,f=new N;if(t)for(let u=0,d=t.count;u<d;u+=3){let m=t.getX(u+0),x=t.getX(u+1),g=t.getX(u+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,g),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,g),a.add(h),l.add(h),c.add(h),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,d=e.count;u<d;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)hn.fromBufferAttribute(t,e),hn.normalize(),t.setXYZ(e,hn.x,hn.y,hn.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,f=a.normalized,u=new c.constructor(l.length*h),d=0,m=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*h;for(let p=0;p<h;p++)u[m++]=c[d++]}return new Ye(u,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,i);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,f=c.length;h<f;h++){let u=c[h],d=t(u,i);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){let d=c[f];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],f=r[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Lh=new de,_s=new pr,Wo=new qi,Nh=new N,Xo=new N,Yo=new N,qo=new N,Ll=new N,$o=new N,Uh=new N,Zo=new N,Vt=class extends nn{constructor(t=new Ue,e=new _n){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){$o.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],f=r[l];h!==0&&(Ll.fromBufferAttribute(f,t),o?$o.addScaledVector(Ll,h):$o.addScaledVector(Ll.sub(e),h))}e.add($o)}return e}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Wo.copy(i.boundingSphere),Wo.applyMatrix4(r),_s.copy(t.ray).recast(t.near),!(Wo.containsPoint(_s.origin)===!1&&(_s.intersectSphere(Wo,Nh)===null||_s.origin.distanceToSquared(Nh)>(t.far-t.near)**2))&&(Lh.copy(r).invert(),_s.copy(t.ray).applyMatrix4(Lh),!(i.boundingBox!==null&&_s.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,_s)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,x=u.length;m<x;m++){let g=u[m],p=o[g.materialIndex],b=Math.max(g.start,d.start),_=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let y=b,L=_;y<L;y+=3){let R=a.getX(y),C=a.getX(y+1),P=a.getX(y+2);s=Ko(this,p,t,i,c,h,f,R,C,P),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let g=m,p=x;g<p;g+=3){let b=a.getX(g),_=a.getX(g+1),y=a.getX(g+2);s=Ko(this,o,t,i,c,h,f,b,_,y),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,x=u.length;m<x;m++){let g=u[m],p=o[g.materialIndex],b=Math.max(g.start,d.start),_=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let y=b,L=_;y<L;y+=3){let R=y,C=y+1,P=y+2;s=Ko(this,p,t,i,c,h,f,R,C,P),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let g=m,p=x;g<p;g+=3){let b=g,_=g+1,y=g+2;s=Ko(this,o,t,i,c,h,f,b,_,y),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function Kd(n,t,e,i,s,r,o,a){let l;if(t.side===un?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===hs,a),l===null)return null;Zo.copy(a),Zo.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(Zo);return c<e.near||c>e.far?null:{distance:c,point:Zo.clone(),object:n}}function Ko(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,Xo),n.getVertexPosition(l,Yo),n.getVertexPosition(c,qo);let h=Kd(n,t,e,i,Xo,Yo,qo,Uh);if(h){let f=new N;ki.getBarycoord(Uh,Xo,Yo,qo,f),s&&(h.uv=ki.getInterpolatedAttribute(s,a,l,c,f,new vt)),r&&(h.uv1=ki.getInterpolatedAttribute(r,a,l,c,f,new vt)),o&&(h.normal=ki.getInterpolatedAttribute(o,a,l,c,f,new N),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new N,materialIndex:0};ki.getNormal(Xo,Yo,qo,u.normal),h.face=u,h.barycoord=f}return h}var we=class n extends Ue{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],f=[],u=0,d=0;m("z","y","x",-1,-1,i,e,t,o,r,0),m("z","y","x",1,-1,i,e,-t,o,r,1),m("x","z","y",1,1,t,i,e,s,o,2),m("x","z","y",1,-1,t,i,-e,s,o,3),m("x","y","z",1,-1,t,e,i,s,r,4),m("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ue(c,3)),this.setAttribute("normal",new ue(h,3)),this.setAttribute("uv",new ue(f,2));function m(x,g,p,b,_,y,L,R,C,P,E){let S=y/C,O=L/P,V=y/2,z=L/2,X=R/2,lt=C+1,j=P+1,gt=0,J=0,Ct=new N;for(let It=0;It<j;It++){let Ot=It*O-z;for(let ie=0;ie<lt;ie++){let ye=ie*S-V;Ct[x]=ye*b,Ct[g]=Ot*_,Ct[p]=X,c.push(Ct.x,Ct.y,Ct.z),Ct[x]=0,Ct[g]=0,Ct[p]=R>0?1:-1,h.push(Ct.x,Ct.y,Ct.z),f.push(ie/C),f.push(1-It/P),gt+=1}}for(let It=0;It<P;It++)for(let Ot=0;Ot<C;Ot++){let ie=u+Ot+lt*It,ye=u+Ot+lt*(It+1),it=u+(Ot+1)+lt*(It+1),bt=u+(Ot+1)+lt*It;l.push(ie,ye,bt),l.push(ye,it,bt),J+=6}a.addGroup(d,J,E),d+=J,u+=gt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function xr(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Rn(n){let t={};for(let e=0;e<n.length;e++){let i=xr(n[e]);for(let s in i)t[s]=i[s]}return t}function Jd(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Gf(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Re.workingColorSpace}var jd={clone:xr,merge:Rn},Qd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Zn=class extends Ei{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Qd,this.fragmentShader=tp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=xr(t.uniforms),this.uniformsGroups=Jd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},wa=class extends nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new de,this.projectionMatrix=new de,this.projectionMatrixInverse=new de,this.coordinateSystem=Hi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},as=new N,Oh=new vt,Dh=new vt,xn=class extends wa{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=dr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(rr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return dr*2*Math.atan(Math.tan(rr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){as.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(as.x,as.y).multiplyScalar(-t/as.z),as.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(as.x,as.y).multiplyScalar(-t/as.z)}getViewSize(t,e){return this.getViewBounds(t,Oh,Dh),e.subVectors(Dh,Oh)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(rr*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},qs=-90,$s=1,Fc=class extends nn{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new xn(qs,$s,t,e);s.layers=this.layers,this.add(s);let r=new xn(qs,$s,t,e);r.layers=this.layers,this.add(r);let o=new xn(qs,$s,t,e);o.layers=this.layers,this.add(o);let a=new xn(qs,$s,t,e);a.layers=this.layers,this.add(a);let l=new xn(qs,$s,t,e);l.layers=this.layers,this.add(l);let c=new xn(qs,$s,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Hi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ma)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(f,u,d),t.xr.enabled=m,i.texture.needsPMREMUpdate=!0}},Aa=class extends On{constructor(t,e,i,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:cr,super(t,e,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},kc=class extends Yi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Aa(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:bi}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new we(5,5,5),r=new Zn({name:"CubemapFromEquirect",uniforms:xr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:un,blending:ls});r.uniforms.tEquirect.value=e;let o=new Vt(s,r),a=e.minFilter;return e.minFilter===zi&&(e.minFilter=bi),new Fc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}},Nl=new N,ep=new N,np=new me,ui=class{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=Nl.subVectors(i,e).cross(ep.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(Nl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||np.getNormalMatrix(t),s=this.coplanarPoint(Nl).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},ys=new qi,Jo=new N,so=class{constructor(t=new ui,e=new ui,i=new ui,s=new ui,r=new ui,o=new ui){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Hi){let i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],f=s[6],u=s[7],d=s[8],m=s[9],x=s[10],g=s[11],p=s[12],b=s[13],_=s[14],y=s[15];if(i[0].setComponents(l-r,u-c,g-d,y-p).normalize(),i[1].setComponents(l+r,u+c,g+d,y+p).normalize(),i[2].setComponents(l+o,u+h,g+m,y+b).normalize(),i[3].setComponents(l-o,u-h,g-m,y-b).normalize(),i[4].setComponents(l-a,u-f,g-x,y-_).normalize(),e===Hi)i[5].setComponents(l+a,u+f,g+x,y+_).normalize();else if(e===Ma)i[5].setComponents(a,f,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ys.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ys.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ys)}intersectsSprite(t){return ys.center.set(0,0,0),ys.radius=.7071067811865476,ys.applyMatrix4(t.matrixWorld),this.intersectsSphere(ys)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(Jo.x=s.normal.x>0?t.max.x:t.min.x,Jo.y=s.normal.y>0?t.max.y:t.min.y,Jo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Jo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Vf(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function ip(n){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,f=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){let h=l.array,f=l.updateRanges;if(n.bindBuffer(c,a),f.length===0)n.bufferSubData(c,0,h);else{f.sort((d,m)=>d.start-m.start);let u=0;for(let d=1;d<f.length;d++){let m=f[u],x=f[d];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++u,f[u]=x)}f.length=u+1;for(let d=0,m=f.length;d<m;d++){let x=f[d];n.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Ge=class n extends Ue{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,f=t/a,u=e/l,d=[],m=[],x=[],g=[];for(let p=0;p<h;p++){let b=p*u-o;for(let _=0;_<c;_++){let y=_*f-r;m.push(y,-b,0),x.push(0,0,1),g.push(_/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<a;b++){let _=b+c*p,y=b+c*(p+1),L=b+1+c*(p+1),R=b+1+c*p;d.push(_,y,R),d.push(y,L,R)}this.setIndex(d),this.setAttribute("position",new ue(m,3)),this.setAttribute("normal",new ue(x,3)),this.setAttribute("uv",new ue(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},sp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rp=`#ifdef USE_ALPHAHASH
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
#endif`,op=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ap=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,cp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hp=`#ifdef USE_AOMAP
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
#endif`,fp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,up=`#ifdef USE_BATCHING
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
#endif`,dp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,pp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,xp=`#ifdef USE_IRIDESCENCE
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
#endif`,_p=`#ifdef USE_BUMPMAP
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
#endif`,yp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,vp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Mp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Sp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ep=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Tp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,wp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Ap=`#define PI 3.141592653589793
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
} // validated`,Rp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Cp=`vec3 transformedNormal = objectNormal;
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
#endif`,Ip=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Pp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Lp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Np=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Up="gl_FragColor = linearToOutputTexel( gl_FragColor );",Op=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Dp=`#ifdef USE_ENVMAP
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
#endif`,Fp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,kp=`#ifdef USE_ENVMAP
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
#endif`,Bp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zp=`#ifdef USE_ENVMAP
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
#endif`,Hp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Gp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Vp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xp=`#ifdef USE_GRADIENTMAP
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
}`,Yp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$p=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Zp=`uniform bool receiveShadow;
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
#endif`,Kp=`#ifdef USE_ENVMAP
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
#endif`,Jp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Qp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,em=`PhysicalMaterial material;
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
#endif`,nm=`struct PhysicalMaterial {
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
}`,im=`
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
#endif`,sm=`#if defined( RE_IndirectDiffuse )
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
#endif`,rm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,om=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,am=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,um=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,dm=`#if defined( USE_POINTS_UV )
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
#endif`,pm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,xm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_m=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ym=`#ifdef USE_MORPHTARGETS
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
#endif`,vm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Mm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Sm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Em=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,wm=`#ifdef USE_NORMALMAP
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
#endif`,Am=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Rm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Cm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Im=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Pm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Lm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Nm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Um=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Om=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Dm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Fm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,km=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Bm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Hm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Gm=`float getShadowMask() {
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
}`,Vm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Wm=`#ifdef USE_SKINNING
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
#endif`,Xm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ym=`#ifdef USE_SKINNING
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
#endif`,qm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$m=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Zm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Km=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Jm=`#ifdef USE_TRANSMISSION
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
#endif`,jm=`#ifdef USE_TRANSMISSION
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
#endif`,Qm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,t1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,e1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,n1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,i1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,s1=`uniform sampler2D t2D;
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
}`,r1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,o1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,a1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,l1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,c1=`#include <common>
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
}`,h1=`#if DEPTH_PACKING == 3200
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
}`,f1=`#define DISTANCE
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
}`,u1=`#define DISTANCE
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
}`,d1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,p1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,m1=`uniform float scale;
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
}`,g1=`uniform vec3 diffuse;
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
}`,x1=`#include <common>
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
}`,_1=`uniform vec3 diffuse;
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
}`,y1=`#define LAMBERT
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
}`,v1=`#define LAMBERT
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
}`,b1=`#define MATCAP
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
}`,M1=`#define MATCAP
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
}`,S1=`#define NORMAL
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
}`,E1=`#define NORMAL
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
}`,T1=`#define PHONG
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
}`,w1=`#define PHONG
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
}`,A1=`#define STANDARD
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
}`,R1=`#define STANDARD
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
}`,C1=`#define TOON
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
}`,I1=`#define TOON
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
}`,P1=`uniform float size;
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
}`,L1=`uniform vec3 diffuse;
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
}`,N1=`#include <common>
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
}`,U1=`uniform vec3 color;
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
}`,O1=`uniform float rotation;
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
}`,D1=`uniform vec3 diffuse;
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
}`,_e={alphahash_fragment:sp,alphahash_pars_fragment:rp,alphamap_fragment:op,alphamap_pars_fragment:ap,alphatest_fragment:lp,alphatest_pars_fragment:cp,aomap_fragment:hp,aomap_pars_fragment:fp,batching_pars_vertex:up,batching_vertex:dp,begin_vertex:pp,beginnormal_vertex:mp,bsdfs:gp,iridescence_fragment:xp,bumpmap_pars_fragment:_p,clipping_planes_fragment:yp,clipping_planes_pars_fragment:vp,clipping_planes_pars_vertex:bp,clipping_planes_vertex:Mp,color_fragment:Sp,color_pars_fragment:Ep,color_pars_vertex:Tp,color_vertex:wp,common:Ap,cube_uv_reflection_fragment:Rp,defaultnormal_vertex:Cp,displacementmap_pars_vertex:Ip,displacementmap_vertex:Pp,emissivemap_fragment:Lp,emissivemap_pars_fragment:Np,colorspace_fragment:Up,colorspace_pars_fragment:Op,envmap_fragment:Dp,envmap_common_pars_fragment:Fp,envmap_pars_fragment:kp,envmap_pars_vertex:Bp,envmap_physical_pars_fragment:Kp,envmap_vertex:zp,fog_vertex:Hp,fog_pars_vertex:Gp,fog_fragment:Vp,fog_pars_fragment:Wp,gradientmap_pars_fragment:Xp,lightmap_pars_fragment:Yp,lights_lambert_fragment:qp,lights_lambert_pars_fragment:$p,lights_pars_begin:Zp,lights_toon_fragment:Jp,lights_toon_pars_fragment:jp,lights_phong_fragment:Qp,lights_phong_pars_fragment:tm,lights_physical_fragment:em,lights_physical_pars_fragment:nm,lights_fragment_begin:im,lights_fragment_maps:sm,lights_fragment_end:rm,logdepthbuf_fragment:om,logdepthbuf_pars_fragment:am,logdepthbuf_pars_vertex:lm,logdepthbuf_vertex:cm,map_fragment:hm,map_pars_fragment:fm,map_particle_fragment:um,map_particle_pars_fragment:dm,metalnessmap_fragment:pm,metalnessmap_pars_fragment:mm,morphinstance_vertex:gm,morphcolor_vertex:xm,morphnormal_vertex:_m,morphtarget_pars_vertex:ym,morphtarget_vertex:vm,normal_fragment_begin:bm,normal_fragment_maps:Mm,normal_pars_fragment:Sm,normal_pars_vertex:Em,normal_vertex:Tm,normalmap_pars_fragment:wm,clearcoat_normal_fragment_begin:Am,clearcoat_normal_fragment_maps:Rm,clearcoat_pars_fragment:Cm,iridescence_pars_fragment:Im,opaque_fragment:Pm,packing:Lm,premultiplied_alpha_fragment:Nm,project_vertex:Um,dithering_fragment:Om,dithering_pars_fragment:Dm,roughnessmap_fragment:Fm,roughnessmap_pars_fragment:km,shadowmap_pars_fragment:Bm,shadowmap_pars_vertex:zm,shadowmap_vertex:Hm,shadowmask_pars_fragment:Gm,skinbase_vertex:Vm,skinning_pars_vertex:Wm,skinning_vertex:Xm,skinnormal_vertex:Ym,specularmap_fragment:qm,specularmap_pars_fragment:$m,tonemapping_fragment:Zm,tonemapping_pars_fragment:Km,transmission_fragment:Jm,transmission_pars_fragment:jm,uv_pars_fragment:Qm,uv_pars_vertex:t1,uv_vertex:e1,worldpos_vertex:n1,background_vert:i1,background_frag:s1,backgroundCube_vert:r1,backgroundCube_frag:o1,cube_vert:a1,cube_frag:l1,depth_vert:c1,depth_frag:h1,distanceRGBA_vert:f1,distanceRGBA_frag:u1,equirect_vert:d1,equirect_frag:p1,linedashed_vert:m1,linedashed_frag:g1,meshbasic_vert:x1,meshbasic_frag:_1,meshlambert_vert:y1,meshlambert_frag:v1,meshmatcap_vert:b1,meshmatcap_frag:M1,meshnormal_vert:S1,meshnormal_frag:E1,meshphong_vert:T1,meshphong_frag:w1,meshphysical_vert:A1,meshphysical_frag:R1,meshtoon_vert:C1,meshtoon_frag:I1,points_vert:P1,points_frag:L1,shadow_vert:N1,shadow_frag:U1,sprite_vert:O1,sprite_frag:D1},Ut={common:{diffuse:{value:new Zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new me},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new me}},envmap:{envMap:{value:null},envMapRotation:{value:new me},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new me}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new me}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new me},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new me},normalScale:{value:new vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new me},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new me}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new me}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new me}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0},uvTransform:{value:new me}},sprite:{diffuse:{value:new Zt(16777215)},opacity:{value:1},center:{value:new vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new me},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0}}},vi={basic:{uniforms:Rn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.fog]),vertexShader:_e.meshbasic_vert,fragmentShader:_e.meshbasic_frag},lambert:{uniforms:Rn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new Zt(0)}}]),vertexShader:_e.meshlambert_vert,fragmentShader:_e.meshlambert_frag},phong:{uniforms:Rn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new Zt(0)},specular:{value:new Zt(1118481)},shininess:{value:30}}]),vertexShader:_e.meshphong_vert,fragmentShader:_e.meshphong_frag},standard:{uniforms:Rn([Ut.common,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.roughnessmap,Ut.metalnessmap,Ut.fog,Ut.lights,{emissive:{value:new Zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_e.meshphysical_vert,fragmentShader:_e.meshphysical_frag},toon:{uniforms:Rn([Ut.common,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.gradientmap,Ut.fog,Ut.lights,{emissive:{value:new Zt(0)}}]),vertexShader:_e.meshtoon_vert,fragmentShader:_e.meshtoon_frag},matcap:{uniforms:Rn([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,{matcap:{value:null}}]),vertexShader:_e.meshmatcap_vert,fragmentShader:_e.meshmatcap_frag},points:{uniforms:Rn([Ut.points,Ut.fog]),vertexShader:_e.points_vert,fragmentShader:_e.points_frag},dashed:{uniforms:Rn([Ut.common,Ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_e.linedashed_vert,fragmentShader:_e.linedashed_frag},depth:{uniforms:Rn([Ut.common,Ut.displacementmap]),vertexShader:_e.depth_vert,fragmentShader:_e.depth_frag},normal:{uniforms:Rn([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,{opacity:{value:1}}]),vertexShader:_e.meshnormal_vert,fragmentShader:_e.meshnormal_frag},sprite:{uniforms:Rn([Ut.sprite,Ut.fog]),vertexShader:_e.sprite_vert,fragmentShader:_e.sprite_frag},background:{uniforms:{uvTransform:{value:new me},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_e.background_vert,fragmentShader:_e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new me}},vertexShader:_e.backgroundCube_vert,fragmentShader:_e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_e.cube_vert,fragmentShader:_e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_e.equirect_vert,fragmentShader:_e.equirect_frag},distanceRGBA:{uniforms:Rn([Ut.common,Ut.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_e.distanceRGBA_vert,fragmentShader:_e.distanceRGBA_frag},shadow:{uniforms:Rn([Ut.lights,Ut.fog,{color:{value:new Zt(0)},opacity:{value:1}}]),vertexShader:_e.shadow_vert,fragmentShader:_e.shadow_frag}};vi.physical={uniforms:Rn([vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new me},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new me},clearcoatNormalScale:{value:new vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new me},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new me},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new me},sheen:{value:0},sheenColor:{value:new Zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new me},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new me},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new me},transmissionSamplerSize:{value:new vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new me},attenuationDistance:{value:0},attenuationColor:{value:new Zt(0)},specularColor:{value:new Zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new me},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new me},anisotropyVector:{value:new vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new me}}]),vertexShader:_e.meshphysical_vert,fragmentShader:_e.meshphysical_frag};var jo={r:0,b:0,g:0},vs=new In,F1=new de;function k1(n,t,e,i,s,r,o){let a=new Zt(0),l=r===!0?0:1,c,h,f=null,u=0,d=null;function m(b){let _=b.isScene===!0?b.background:null;return _&&_.isTexture&&(_=(b.backgroundBlurriness>0?e:t).get(_)),_}function x(b){let _=!1,y=m(b);y===null?p(a,l):y&&y.isColor&&(p(y,1),_=!0);let L=n.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(b,_){let y=m(_);y&&(y.isCubeTexture||y.mapping===Ka)?(h===void 0&&(h=new Vt(new we(1,1,1),new Zn({name:"BackgroundCubeMaterial",uniforms:xr(vi.backgroundCube.uniforms),vertexShader:vi.backgroundCube.vertexShader,fragmentShader:vi.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,R,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),vs.copy(_.backgroundRotation),vs.x*=-1,vs.y*=-1,vs.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(vs.y*=-1,vs.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(F1.makeRotationFromEuler(vs)),h.material.toneMapped=Re.getTransfer(y.colorSpace)!==ze,(f!==y||u!==y.version||d!==n.toneMapping)&&(h.material.needsUpdate=!0,f=y,u=y.version,d=n.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Vt(new Ge(2,2),new Zn({name:"BackgroundMaterial",uniforms:xr(vi.background.uniforms),vertexShader:vi.background.vertexShader,fragmentShader:vi.background.fragmentShader,side:hs,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=Re.getTransfer(y.colorSpace)!==ze,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||u!==y.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,f=y,u=y.version,d=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,_){b.getRGB(jo,Gf(n)),i.buffers.color.setClear(jo.r,jo.g,jo.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(b,_=1){a.set(b),l=_,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(a,l)},render:x,addToRenderList:g}}function B1(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,o=!1;function a(S,O,V,z,X){let lt=!1,j=f(z,V,O);r!==j&&(r=j,c(r.object)),lt=d(S,z,V,X),lt&&m(S,z,V,X),X!==null&&t.update(X,n.ELEMENT_ARRAY_BUFFER),(lt||o)&&(o=!1,y(S,O,V,z),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function l(){return n.createVertexArray()}function c(S){return n.bindVertexArray(S)}function h(S){return n.deleteVertexArray(S)}function f(S,O,V){let z=V.wireframe===!0,X=i[S.id];X===void 0&&(X={},i[S.id]=X);let lt=X[O.id];lt===void 0&&(lt={},X[O.id]=lt);let j=lt[z];return j===void 0&&(j=u(l()),lt[z]=j),j}function u(S){let O=[],V=[],z=[];for(let X=0;X<e;X++)O[X]=0,V[X]=0,z[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:V,attributeDivisors:z,object:S,attributes:{},index:null}}function d(S,O,V,z){let X=r.attributes,lt=O.attributes,j=0,gt=V.getAttributes();for(let J in gt)if(gt[J].location>=0){let It=X[J],Ot=lt[J];if(Ot===void 0&&(J==="instanceMatrix"&&S.instanceMatrix&&(Ot=S.instanceMatrix),J==="instanceColor"&&S.instanceColor&&(Ot=S.instanceColor)),It===void 0||It.attribute!==Ot||Ot&&It.data!==Ot.data)return!0;j++}return r.attributesNum!==j||r.index!==z}function m(S,O,V,z){let X={},lt=O.attributes,j=0,gt=V.getAttributes();for(let J in gt)if(gt[J].location>=0){let It=lt[J];It===void 0&&(J==="instanceMatrix"&&S.instanceMatrix&&(It=S.instanceMatrix),J==="instanceColor"&&S.instanceColor&&(It=S.instanceColor));let Ot={};Ot.attribute=It,It&&It.data&&(Ot.data=It.data),X[J]=Ot,j++}r.attributes=X,r.attributesNum=j,r.index=z}function x(){let S=r.newAttributes;for(let O=0,V=S.length;O<V;O++)S[O]=0}function g(S){p(S,0)}function p(S,O){let V=r.newAttributes,z=r.enabledAttributes,X=r.attributeDivisors;V[S]=1,z[S]===0&&(n.enableVertexAttribArray(S),z[S]=1),X[S]!==O&&(n.vertexAttribDivisor(S,O),X[S]=O)}function b(){let S=r.newAttributes,O=r.enabledAttributes;for(let V=0,z=O.length;V<z;V++)O[V]!==S[V]&&(n.disableVertexAttribArray(V),O[V]=0)}function _(S,O,V,z,X,lt,j){j===!0?n.vertexAttribIPointer(S,O,V,X,lt):n.vertexAttribPointer(S,O,V,z,X,lt)}function y(S,O,V,z){x();let X=z.attributes,lt=V.getAttributes(),j=O.defaultAttributeValues;for(let gt in lt){let J=lt[gt];if(J.location>=0){let Ct=X[gt];if(Ct===void 0&&(gt==="instanceMatrix"&&S.instanceMatrix&&(Ct=S.instanceMatrix),gt==="instanceColor"&&S.instanceColor&&(Ct=S.instanceColor)),Ct!==void 0){let It=Ct.normalized,Ot=Ct.itemSize,ie=t.get(Ct);if(ie===void 0)continue;let ye=ie.buffer,it=ie.type,bt=ie.bytesPerElement,kt=it===n.INT||it===n.UNSIGNED_INT||Ct.gpuType===S0;if(Ct.isInterleavedBufferAttribute){let Mt=Ct.data,Yt=Mt.stride,re=Ct.offset;if(Mt.isInstancedInterleavedBuffer){for(let jt=0;jt<J.locationSize;jt++)p(J.location+jt,Mt.meshPerAttribute);S.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let jt=0;jt<J.locationSize;jt++)g(J.location+jt);n.bindBuffer(n.ARRAY_BUFFER,ye);for(let jt=0;jt<J.locationSize;jt++)_(J.location+jt,Ot/J.locationSize,it,It,Yt*bt,(re+Ot/J.locationSize*jt)*bt,kt)}else{if(Ct.isInstancedBufferAttribute){for(let Mt=0;Mt<J.locationSize;Mt++)p(J.location+Mt,Ct.meshPerAttribute);S.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=Ct.meshPerAttribute*Ct.count)}else for(let Mt=0;Mt<J.locationSize;Mt++)g(J.location+Mt);n.bindBuffer(n.ARRAY_BUFFER,ye);for(let Mt=0;Mt<J.locationSize;Mt++)_(J.location+Mt,Ot/J.locationSize,it,It,Ot*bt,Ot/J.locationSize*Mt*bt,kt)}}else if(j!==void 0){let It=j[gt];if(It!==void 0)switch(It.length){case 2:n.vertexAttrib2fv(J.location,It);break;case 3:n.vertexAttrib3fv(J.location,It);break;case 4:n.vertexAttrib4fv(J.location,It);break;default:n.vertexAttrib1fv(J.location,It)}}}}b()}function L(){P();for(let S in i){let O=i[S];for(let V in O){let z=O[V];for(let X in z)h(z[X].object),delete z[X];delete O[V]}delete i[S]}}function R(S){if(i[S.id]===void 0)return;let O=i[S.id];for(let V in O){let z=O[V];for(let X in z)h(z[X].object),delete z[X];delete O[V]}delete i[S.id]}function C(S){for(let O in i){let V=i[O];if(V[S.id]===void 0)continue;let z=V[S.id];for(let X in z)h(z[X].object),delete z[X];delete V[S.id]}}function P(){E(),o=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:E,dispose:L,releaseStatesOfGeometry:R,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:g,disableUnusedAttributes:b}}function z1(n,t,e){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),e.update(h,i,1)}function o(c,h,f){f!==0&&(n.drawArraysInstanced(i,c,h,f),e.update(h,i,f))}function a(c,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,f);let d=0;for(let m=0;m<f;m++)d+=h[m];e.update(d,i,1)}function l(c,h,f,u){if(f===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<c.length;m++)o(c[m],h[m],u[m]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,h,0,u,0,f);let m=0;for(let x=0;x<f;x++)m+=h[x]*u[x];e.update(m,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function H1(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==pi&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){let P=C===_o&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==Xi&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Mi&&!P)}function l(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),_=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),L=m>0,R=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:u,maxTextures:d,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:b,maxVaryings:_,maxFragmentUniforms:y,vertexTextures:L,maxSamples:R}}function G1(n){let t=this,e=null,i=0,s=!1,r=!1,o=new ui,a=new me,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let d=f.length!==0||u||i!==0||s;return s=u,i=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,d){let m=f.clippingPlanes,x=f.clipIntersection,g=f.clipShadows,p=n.get(f);if(!s||m===null||m.length===0||r&&!g)r?h(null):c();else{let b=r?0:i,_=b*4,y=p.clippingState||null;l.value=y,y=h(m,u,_,d);for(let L=0;L!==_;++L)y[L]=e[L];p.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(f,u,d,m){let x=f!==null?f.length:0,g=null;if(x!==0){if(g=l.value,m!==!0||g===null){let p=d+x*4,b=u.matrixWorldInverse;a.getNormalMatrix(b),(g===null||g.length<p)&&(g=new Float32Array(p));for(let _=0,y=d;_!==x;++_,y+=4)o.copy(f[_]).applyMatrix4(b,a),o.normal.toArray(g,y),g[y+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}function V1(n){let t=new WeakMap;function e(o,a){return a===ic?o.mapping=cr:a===sc&&(o.mapping=hr),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===ic||a===sc)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new kc(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}var Bc=class extends wa{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},er=4,Fh=[.125,.215,.35,.446,.526,.582],Es=20,Ul=new Bc,kh=new Zt,Ol=null,Dl=0,Fl=0,kl=!1,Ms=(1+Math.sqrt(5))/2,Zs=1/Ms,Bh=[new N(-Ms,Zs,0),new N(Ms,Zs,0),new N(-Zs,0,Ms),new N(Zs,0,Ms),new N(0,Ms,-Zs),new N(0,Ms,Zs),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)],_r=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){Ol=this._renderer.getRenderTarget(),Dl=this._renderer.getActiveCubeFace(),Fl=this._renderer.getActiveMipmapLevel(),kl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ol,Dl,Fl),this._renderer.xr.enabled=kl,t.scissorTest=!1,Qo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===cr||t.mapping===hr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ol=this._renderer.getRenderTarget(),Dl=this._renderer.getActiveCubeFace(),Fl=this._renderer.getActiveMipmapLevel(),kl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:bi,minFilter:bi,generateMipmaps:!1,type:_o,format:pi,colorSpace:Cr,depthBuffer:!1},s=zh(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zh(t,e,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=W1(r)),this._blurMaterial=X1(r,t,e)}return s}_compileMaterial(t){let e=new Vt(this._lodPlanes[0],t);this._renderer.compile(e,Ul)}_sceneToCubeUV(t,e,i,s){let a=new xn(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,u=h.toneMapping;h.getClearColor(kh),h.toneMapping=cs,h.autoClear=!1;let d=new _n({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1}),m=new Vt(new we,d),x=!1,g=t.background;g?g.isColor&&(d.color.copy(g),t.background=null,x=!0):(d.color.copy(kh),x=!0);for(let p=0;p<6;p++){let b=p%3;b===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):b===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let _=this._cubeSize;Qo(s,b*_,p>2?_:0,_,_),h.setRenderTarget(s),x&&h.render(m,a),h.render(t,a)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=u,h.autoClear=f,t.background=g}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===cr||t.mapping===hr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hh());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Vt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Qo(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,Ul)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Bh[(s-r-1)%Bh.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,f=new Vt(this._lodPlanes[s],c),u=c.uniforms,d=this._sizeLods[i]-1,m=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Es-1),x=r/m,g=isFinite(r)?1+Math.floor(h*x):Es;g>Es&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Es}`);let p=[],b=0;for(let C=0;C<Es;++C){let P=C/x,E=Math.exp(-P*P/2);p.push(E),C===0?b+=E:C<g&&(b+=2*E)}for(let C=0;C<p.length;C++)p[C]=p[C]/b;u.envMap.value=t.texture,u.samples.value=g,u.weights.value=p,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);let{_lodMax:_}=this;u.dTheta.value=m,u.mipInt.value=_-i;let y=this._sizeLods[s],L=3*y*(s>_-er?s-_+er:0),R=4*(this._cubeSize-y);Qo(e,L,R,3*y,2*y),l.setRenderTarget(e),l.render(f,Ul)}};function W1(n){let t=[],e=[],i=[],s=n,r=n-er+1+Fh.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>n-er?l=Fh[o-n+er-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),h=-c,f=1+c,u=[h,h,f,h,f,f,h,h,f,f,h,f],d=6,m=6,x=3,g=2,p=1,b=new Float32Array(x*m*d),_=new Float32Array(g*m*d),y=new Float32Array(p*m*d);for(let R=0;R<d;R++){let C=R%3*2/3-1,P=R>2?0:-1,E=[C,P,0,C+2/3,P,0,C+2/3,P+1,0,C,P,0,C+2/3,P+1,0,C,P+1,0];b.set(E,x*m*R),_.set(u,g*m*R);let S=[R,R,R,R,R,R];y.set(S,p*m*R)}let L=new Ue;L.setAttribute("position",new Ye(b,x)),L.setAttribute("uv",new Ye(_,g)),L.setAttribute("faceIndex",new Ye(y,p)),t.push(L),s>er&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function zh(n,t,e){let i=new Yi(n,t,e);return i.texture.mapping=Ka,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Qo(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function X1(n,t,e){let i=new Float32Array(Es),s=new N(0,1,0);return new Zn({name:"SphericalGaussianBlur",defines:{n:Es,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:P0(),fragmentShader:`

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
		`,blending:ls,depthTest:!1,depthWrite:!1})}function Hh(){return new Zn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:P0(),fragmentShader:`

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
		`,blending:ls,depthTest:!1,depthWrite:!1})}function Gh(){return new Zn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:P0(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ls,depthTest:!1,depthWrite:!1})}function P0(){return`

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
	`}function Y1(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===ic||l===sc,h=l===cr||l===hr;if(c||h){let f=t.get(a),u=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return e===null&&(e=new _r(n)),f=c?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{let d=a.image;return c&&d&&d.height>0||h&&d&&s(d)?(e===null&&(e=new _r(n)),f=c?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function q1(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&Zr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function $1(n,t,e,i){let s={},r=new WeakMap;function o(f){let u=f.target;u.index!==null&&t.remove(u.index);for(let m in u.attributes)t.remove(u.attributes[m]);for(let m in u.morphAttributes){let x=u.morphAttributes[m];for(let g=0,p=x.length;g<p;g++)t.remove(x[g])}u.removeEventListener("dispose",o),delete s[u.id];let d=r.get(u);d&&(t.remove(d),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(f,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function l(f){let u=f.attributes;for(let m in u)t.update(u[m],n.ARRAY_BUFFER);let d=f.morphAttributes;for(let m in d){let x=d[m];for(let g=0,p=x.length;g<p;g++)t.update(x[g],n.ARRAY_BUFFER)}}function c(f){let u=[],d=f.index,m=f.attributes.position,x=0;if(d!==null){let b=d.array;x=d.version;for(let _=0,y=b.length;_<y;_+=3){let L=b[_+0],R=b[_+1],C=b[_+2];u.push(L,R,R,C,C,L)}}else if(m!==void 0){let b=m.array;x=m.version;for(let _=0,y=b.length/3-1;_<y;_+=3){let L=_+0,R=_+1,C=_+2;u.push(L,R,R,C,C,L)}}else return;let g=new(zf(u)?gr:mr)(u,1);g.version=x;let p=r.get(f);p&&t.remove(p),r.set(f,g)}function h(f){let u=r.get(f);if(u){let d=f.index;d!==null&&u.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:h}}function Z1(n,t,e){let i;function s(u){i=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,d){n.drawElements(i,d,r,u*o),e.update(d,i,1)}function c(u,d,m){m!==0&&(n.drawElementsInstanced(i,d,r,u*o,m),e.update(d,i,m))}function h(u,d,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,u,0,m);let g=0;for(let p=0;p<m;p++)g+=d[p];e.update(g,i,1)}function f(u,d,m,x){if(m===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<u.length;p++)c(u[p]/o,d[p],x[p]);else{g.multiDrawElementsInstancedWEBGL(i,d,0,r,u,0,x,0,m);let p=0;for(let b=0;b<m;b++)p+=d[b]*x[b];e.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function K1(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function J1(n,t,e){let i=new WeakMap,s=new Le;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0,u=i.get(a);if(u===void 0||u.count!==f){let E=function(){C.dispose(),i.delete(a),a.removeEventListener("dispose",E)};u!==void 0&&u.texture.dispose();let d=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],_=0;d===!0&&(_=1),m===!0&&(_=2),x===!0&&(_=3);let y=a.attributes.position.count*_,L=1;y>t.maxTextureSize&&(L=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let R=new Float32Array(y*L*4*f),C=new Ta(R,y,L,f);C.type=Mi,C.needsUpdate=!0;let P=_*4;for(let S=0;S<f;S++){let O=g[S],V=p[S],z=b[S],X=y*L*4*S;for(let lt=0;lt<O.count;lt++){let j=lt*P;d===!0&&(s.fromBufferAttribute(O,lt),R[X+j+0]=s.x,R[X+j+1]=s.y,R[X+j+2]=s.z,R[X+j+3]=0),m===!0&&(s.fromBufferAttribute(V,lt),R[X+j+4]=s.x,R[X+j+5]=s.y,R[X+j+6]=s.z,R[X+j+7]=0),x===!0&&(s.fromBufferAttribute(z,lt),R[X+j+8]=s.x,R[X+j+9]=s.y,R[X+j+10]=s.z,R[X+j+11]=z.itemSize===4?s.w:1)}}u={count:f,texture:C,size:new vt(y,L)},i.set(a,u),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let m=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",m),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function j1(n,t,e,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,f=t.get(l,h);if(s.get(f)!==c&&(t.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return f}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var Ra=class extends On{constructor(t,e,i,s,r,o,a,l,c,h=sr){if(h!==sr&&h!==ur)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===sr&&(i=Ts),i===void 0&&h===ur&&(i=fr),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:qn,this.minFilter=l!==void 0?l:qn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Wf=new On,Vh=new Ra(1,1),Xf=new Ta,Yf=new Dc,qf=new Aa,Wh=[],Xh=[],Yh=new Float32Array(16),qh=new Float32Array(9),$h=new Float32Array(4);function Ir(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=Wh[s];if(r===void 0&&(r=new Float32Array(s),Wh[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function an(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function ln(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function ja(n,t){let e=Xh[t];e===void 0&&(e=new Int32Array(t),Xh[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Q1(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function tg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(an(e,t))return;n.uniform2fv(this.addr,t),ln(e,t)}}function eg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(an(e,t))return;n.uniform3fv(this.addr,t),ln(e,t)}}function ng(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(an(e,t))return;n.uniform4fv(this.addr,t),ln(e,t)}}function ig(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(an(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),ln(e,t)}else{if(an(e,i))return;$h.set(i),n.uniformMatrix2fv(this.addr,!1,$h),ln(e,i)}}function sg(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(an(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),ln(e,t)}else{if(an(e,i))return;qh.set(i),n.uniformMatrix3fv(this.addr,!1,qh),ln(e,i)}}function rg(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(an(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),ln(e,t)}else{if(an(e,i))return;Yh.set(i),n.uniformMatrix4fv(this.addr,!1,Yh),ln(e,i)}}function og(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function ag(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(an(e,t))return;n.uniform2iv(this.addr,t),ln(e,t)}}function lg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(an(e,t))return;n.uniform3iv(this.addr,t),ln(e,t)}}function cg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(an(e,t))return;n.uniform4iv(this.addr,t),ln(e,t)}}function hg(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function fg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(an(e,t))return;n.uniform2uiv(this.addr,t),ln(e,t)}}function ug(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(an(e,t))return;n.uniform3uiv(this.addr,t),ln(e,t)}}function dg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(an(e,t))return;n.uniform4uiv(this.addr,t),ln(e,t)}}function pg(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Vh.compareFunction=Bf,r=Vh):r=Wf,e.setTexture2D(t||r,s)}function mg(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Yf,s)}function gg(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||qf,s)}function xg(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Xf,s)}function _g(n){switch(n){case 5126:return Q1;case 35664:return tg;case 35665:return eg;case 35666:return ng;case 35674:return ig;case 35675:return sg;case 35676:return rg;case 5124:case 35670:return og;case 35667:case 35671:return ag;case 35668:case 35672:return lg;case 35669:case 35673:return cg;case 5125:return hg;case 36294:return fg;case 36295:return ug;case 36296:return dg;case 35678:case 36198:case 36298:case 36306:case 35682:return pg;case 35679:case 36299:case 36307:return mg;case 35680:case 36300:case 36308:case 36293:return gg;case 36289:case 36303:case 36311:case 36292:return xg}}function yg(n,t){n.uniform1fv(this.addr,t)}function vg(n,t){let e=Ir(t,this.size,2);n.uniform2fv(this.addr,e)}function bg(n,t){let e=Ir(t,this.size,3);n.uniform3fv(this.addr,e)}function Mg(n,t){let e=Ir(t,this.size,4);n.uniform4fv(this.addr,e)}function Sg(n,t){let e=Ir(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Eg(n,t){let e=Ir(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Tg(n,t){let e=Ir(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function wg(n,t){n.uniform1iv(this.addr,t)}function Ag(n,t){n.uniform2iv(this.addr,t)}function Rg(n,t){n.uniform3iv(this.addr,t)}function Cg(n,t){n.uniform4iv(this.addr,t)}function Ig(n,t){n.uniform1uiv(this.addr,t)}function Pg(n,t){n.uniform2uiv(this.addr,t)}function Lg(n,t){n.uniform3uiv(this.addr,t)}function Ng(n,t){n.uniform4uiv(this.addr,t)}function Ug(n,t,e){let i=this.cache,s=t.length,r=ja(e,s);an(i,r)||(n.uniform1iv(this.addr,r),ln(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Wf,r[o])}function Og(n,t,e){let i=this.cache,s=t.length,r=ja(e,s);an(i,r)||(n.uniform1iv(this.addr,r),ln(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Yf,r[o])}function Dg(n,t,e){let i=this.cache,s=t.length,r=ja(e,s);an(i,r)||(n.uniform1iv(this.addr,r),ln(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||qf,r[o])}function Fg(n,t,e){let i=this.cache,s=t.length,r=ja(e,s);an(i,r)||(n.uniform1iv(this.addr,r),ln(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Xf,r[o])}function kg(n){switch(n){case 5126:return yg;case 35664:return vg;case 35665:return bg;case 35666:return Mg;case 35674:return Sg;case 35675:return Eg;case 35676:return Tg;case 5124:case 35670:return wg;case 35667:case 35671:return Ag;case 35668:case 35672:return Rg;case 35669:case 35673:return Cg;case 5125:return Ig;case 36294:return Pg;case 36295:return Lg;case 36296:return Ng;case 35678:case 36198:case 36298:case 36306:case 35682:return Ug;case 35679:case 36299:case 36307:return Og;case 35680:case 36300:case 36308:case 36293:return Dg;case 36289:case 36303:case 36311:case 36292:return Fg}}var zc=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=_g(e.type)}},Hc=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=kg(e.type)}},Gc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},Bl=/(\w+)(\])?(\[|\.)?/g;function Zh(n,t){n.seq.push(t),n.map[t.id]=t}function Bg(n,t,e){let i=n.name,s=i.length;for(Bl.lastIndex=0;;){let r=Bl.exec(i),o=Bl.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Zh(e,c===void 0?new zc(a,n,t):new Hc(a,n,t));break}else{let f=e.map[a];f===void 0&&(f=new Gc(a),Zh(e,f)),e=f}}}var ar=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Bg(r,o,this)}}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function Kh(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var zg=37297,Hg=0;function Gg(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var Jh=new me;function Vg(n){Re._getMatrix(Jh,Re.workingColorSpace,n);let t=`mat3( ${Jh.elements.map(e=>e.toFixed(4))} )`;switch(Re.getTransfer(n)){case Ja:return[t,"LinearTransferOETF"];case ze:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function jh(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Gg(n.getShaderSource(t),o)}else return s}function Wg(n,t){let e=Vg(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Xg(n,t){let e;switch(t){case nd:e="Linear";break;case id:e="Reinhard";break;case sd:e="Cineon";break;case M0:e="ACESFilmic";break;case od:e="AgX";break;case ad:e="Neutral";break;case rd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ta=new N;function Yg(){Re.getLuminanceCoefficients(ta);let n=ta.x.toFixed(4),t=ta.y.toFixed(4),e=ta.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function qg(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Kr).join(`
`)}function $g(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Zg(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Kr(n){return n!==""}function Qh(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function tf(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Kg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vc(n){return n.replace(Kg,jg)}var Jg=new Map;function jg(n,t){let e=_e[t];if(e===void 0){let i=Jg.get(t);if(i!==void 0)e=_e[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Vc(e)}var Qg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ef(n){return n.replace(Qg,t2)}function t2(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function nf(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function e2(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Za?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===b0?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Fi&&(t="SHADOWMAP_TYPE_VSM"),t}function n2(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case cr:case hr:t="ENVMAP_TYPE_CUBE";break;case Ka:t="ENVMAP_TYPE_CUBE_UV";break}return t}function i2(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case hr:t="ENVMAP_MODE_REFRACTION";break}return t}function s2(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Af:t="ENVMAP_BLENDING_MULTIPLY";break;case td:t="ENVMAP_BLENDING_MIX";break;case ed:t="ENVMAP_BLENDING_ADD";break}return t}function r2(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function o2(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=e2(e),c=n2(e),h=i2(e),f=s2(e),u=r2(e),d=qg(e),m=$g(r),x=s.createProgram(),g,p,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Kr).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Kr).join(`
`),p.length>0&&(p+=`
`)):(g=[nf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Kr).join(`
`),p=[nf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==cs?"#define TONE_MAPPING":"",e.toneMapping!==cs?_e.tonemapping_pars_fragment:"",e.toneMapping!==cs?Xg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",_e.colorspace_pars_fragment,Wg("linearToOutputTexel",e.outputColorSpace),Yg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Kr).join(`
`)),o=Vc(o),o=Qh(o,e),o=tf(o,e),a=Vc(a),a=Qh(a,e),a=tf(a,e),o=ef(o),a=ef(a),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===mh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===mh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let _=b+g+o,y=b+p+a,L=Kh(s,s.VERTEX_SHADER,_),R=Kh(s,s.FRAGMENT_SHADER,y);s.attachShader(x,L),s.attachShader(x,R),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function C(O){if(n.debug.checkShaderErrors){let V=s.getProgramInfoLog(x).trim(),z=s.getShaderInfoLog(L).trim(),X=s.getShaderInfoLog(R).trim(),lt=!0,j=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(lt=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,L,R);else{let gt=jh(s,L,"vertex"),J=jh(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+V+`
`+gt+`
`+J)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(z===""||X==="")&&(j=!1);j&&(O.diagnostics={runnable:lt,programLog:V,vertexShader:{log:z,prefix:g},fragmentShader:{log:X,prefix:p}})}s.deleteShader(L),s.deleteShader(R),P=new ar(s,x),E=Zg(s,x)}let P;this.getUniforms=function(){return P===void 0&&C(this),P};let E;this.getAttributes=function(){return E===void 0&&C(this),E};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(x,zg)),S},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Hg++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=L,this.fragmentShader=R,this}var a2=0,Wc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Xc(t),e.set(t,i)),i}},Xc=class{constructor(t){this.id=a2++,this.code=t,this.usedTimes=0}};function l2(n,t,e,i,s,r,o){let a=new io,l=new Wc,c=new Set,h=[],f=s.logarithmicDepthBuffer,u=s.vertexTextures,d=s.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(E){return c.add(E),E===0?"uv":`uv${E}`}function g(E,S,O,V,z){let X=V.fog,lt=z.geometry,j=E.isMeshStandardMaterial?V.environment:null,gt=(E.isMeshStandardMaterial?e:t).get(E.envMap||j),J=gt&&gt.mapping===Ka?gt.image.height:null,Ct=m[E.type];E.precision!==null&&(d=s.getMaxPrecision(E.precision),d!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",d,"instead."));let It=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,Ot=It!==void 0?It.length:0,ie=0;lt.morphAttributes.position!==void 0&&(ie=1),lt.morphAttributes.normal!==void 0&&(ie=2),lt.morphAttributes.color!==void 0&&(ie=3);let ye,it,bt,kt;if(Ct){let Ee=vi[Ct];ye=Ee.vertexShader,it=Ee.fragmentShader}else ye=E.vertexShader,it=E.fragmentShader,l.update(E),bt=l.getVertexShaderID(E),kt=l.getFragmentShaderID(E);let Mt=n.getRenderTarget(),Yt=n.state.buffers.depth.getReversed(),re=z.isInstancedMesh===!0,jt=z.isBatchedMesh===!0,ve=!!E.map,k=!!E.matcap,st=!!gt,T=!!E.aoMap,ft=!!E.lightMap,G=!!E.bumpMap,ut=!!E.normalMap,ot=!!E.displacementMap,At=!!E.emissiveMap,dt=!!E.metalnessMap,I=!!E.roughnessMap,M=E.anisotropy>0,H=E.clearcoat>0,tt=E.dispersion>0,ht=E.iridescence>0,at=E.sheen>0,zt=E.transmission>0,Pt=M&&!!E.anisotropyMap,Ft=H&&!!E.clearcoatMap,ne=H&&!!E.clearcoatNormalMap,pt=H&&!!E.clearcoatRoughnessMap,Bt=ht&&!!E.iridescenceMap,te=ht&&!!E.iridescenceThicknessMap,oe=at&&!!E.sheenColorMap,wt=at&&!!E.sheenRoughnessMap,ge=!!E.specularMap,le=!!E.specularColorMap,Se=!!E.specularIntensityMap,F=zt&&!!E.transmissionMap,St=zt&&!!E.thicknessMap,K=!!E.gradientMap,ct=!!E.alphaMap,Lt=E.alphaTest>0,Nt=!!E.alphaHash,ae=!!E.extensions,xe=cs;E.toneMapped&&(Mt===null||Mt.isXRRenderTarget===!0)&&(xe=n.toneMapping);let tn={shaderID:Ct,shaderType:E.type,shaderName:E.name,vertexShader:ye,fragmentShader:it,defines:E.defines,customVertexShaderID:bt,customFragmentShaderID:kt,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:d,batching:jt,batchingColor:jt&&z._colorsTexture!==null,instancing:re,instancingColor:re&&z.instanceColor!==null,instancingMorph:re&&z.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:Mt===null?n.outputColorSpace:Mt.isXRRenderTarget===!0?Mt.texture.colorSpace:Cr,alphaToCoverage:!!E.alphaToCoverage,map:ve,matcap:k,envMap:st,envMapMode:st&&gt.mapping,envMapCubeUVHeight:J,aoMap:T,lightMap:ft,bumpMap:G,normalMap:ut,displacementMap:u&&ot,emissiveMap:At,normalMapObjectSpace:ut&&E.normalMapType===fd,normalMapTangentSpace:ut&&E.normalMapType===kf,metalnessMap:dt,roughnessMap:I,anisotropy:M,anisotropyMap:Pt,clearcoat:H,clearcoatMap:Ft,clearcoatNormalMap:ne,clearcoatRoughnessMap:pt,dispersion:tt,iridescence:ht,iridescenceMap:Bt,iridescenceThicknessMap:te,sheen:at,sheenColorMap:oe,sheenRoughnessMap:wt,specularMap:ge,specularColorMap:le,specularIntensityMap:Se,transmission:zt,transmissionMap:F,thicknessMap:St,gradientMap:K,opaque:E.transparent===!1&&E.blending===ir&&E.alphaToCoverage===!1,alphaMap:ct,alphaTest:Lt,alphaHash:Nt,combine:E.combine,mapUv:ve&&x(E.map.channel),aoMapUv:T&&x(E.aoMap.channel),lightMapUv:ft&&x(E.lightMap.channel),bumpMapUv:G&&x(E.bumpMap.channel),normalMapUv:ut&&x(E.normalMap.channel),displacementMapUv:ot&&x(E.displacementMap.channel),emissiveMapUv:At&&x(E.emissiveMap.channel),metalnessMapUv:dt&&x(E.metalnessMap.channel),roughnessMapUv:I&&x(E.roughnessMap.channel),anisotropyMapUv:Pt&&x(E.anisotropyMap.channel),clearcoatMapUv:Ft&&x(E.clearcoatMap.channel),clearcoatNormalMapUv:ne&&x(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pt&&x(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Bt&&x(E.iridescenceMap.channel),iridescenceThicknessMapUv:te&&x(E.iridescenceThicknessMap.channel),sheenColorMapUv:oe&&x(E.sheenColorMap.channel),sheenRoughnessMapUv:wt&&x(E.sheenRoughnessMap.channel),specularMapUv:ge&&x(E.specularMap.channel),specularColorMapUv:le&&x(E.specularColorMap.channel),specularIntensityMapUv:Se&&x(E.specularIntensityMap.channel),transmissionMapUv:F&&x(E.transmissionMap.channel),thicknessMapUv:St&&x(E.thicknessMap.channel),alphaMapUv:ct&&x(E.alphaMap.channel),vertexTangents:!!lt.attributes.tangent&&(ut||M),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!lt.attributes.uv&&(ve||ct),fog:!!X,useFog:E.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Yt,skinning:z.isSkinnedMesh===!0,morphTargets:lt.morphAttributes.position!==void 0,morphNormals:lt.morphAttributes.normal!==void 0,morphColors:lt.morphAttributes.color!==void 0,morphTargetsCount:Ot,morphTextureStride:ie,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&O.length>0,shadowMapType:n.shadowMap.type,toneMapping:xe,decodeVideoTexture:ve&&E.map.isVideoTexture===!0&&Re.getTransfer(E.map.colorSpace)===ze,decodeVideoTextureEmissive:At&&E.emissiveMap.isVideoTexture===!0&&Re.getTransfer(E.emissiveMap.colorSpace)===ze,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Ce,flipSided:E.side===un,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:ae&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ae&&E.extensions.multiDraw===!0||jt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return tn.vertexUv1s=c.has(1),tn.vertexUv2s=c.has(2),tn.vertexUv3s=c.has(3),c.clear(),tn}function p(E){let S=[];if(E.shaderID?S.push(E.shaderID):(S.push(E.customVertexShaderID),S.push(E.customFragmentShaderID)),E.defines!==void 0)for(let O in E.defines)S.push(O),S.push(E.defines[O]);return E.isRawShaderMaterial===!1&&(b(S,E),_(S,E),S.push(n.outputColorSpace)),S.push(E.customProgramCacheKey),S.join()}function b(E,S){E.push(S.precision),E.push(S.outputColorSpace),E.push(S.envMapMode),E.push(S.envMapCubeUVHeight),E.push(S.mapUv),E.push(S.alphaMapUv),E.push(S.lightMapUv),E.push(S.aoMapUv),E.push(S.bumpMapUv),E.push(S.normalMapUv),E.push(S.displacementMapUv),E.push(S.emissiveMapUv),E.push(S.metalnessMapUv),E.push(S.roughnessMapUv),E.push(S.anisotropyMapUv),E.push(S.clearcoatMapUv),E.push(S.clearcoatNormalMapUv),E.push(S.clearcoatRoughnessMapUv),E.push(S.iridescenceMapUv),E.push(S.iridescenceThicknessMapUv),E.push(S.sheenColorMapUv),E.push(S.sheenRoughnessMapUv),E.push(S.specularMapUv),E.push(S.specularColorMapUv),E.push(S.specularIntensityMapUv),E.push(S.transmissionMapUv),E.push(S.thicknessMapUv),E.push(S.combine),E.push(S.fogExp2),E.push(S.sizeAttenuation),E.push(S.morphTargetsCount),E.push(S.morphAttributeCount),E.push(S.numDirLights),E.push(S.numPointLights),E.push(S.numSpotLights),E.push(S.numSpotLightMaps),E.push(S.numHemiLights),E.push(S.numRectAreaLights),E.push(S.numDirLightShadows),E.push(S.numPointLightShadows),E.push(S.numSpotLightShadows),E.push(S.numSpotLightShadowsWithMaps),E.push(S.numLightProbes),E.push(S.shadowMapType),E.push(S.toneMapping),E.push(S.numClippingPlanes),E.push(S.numClipIntersection),E.push(S.depthPacking)}function _(E,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),E.push(a.mask)}function y(E){let S=m[E.type],O;if(S){let V=vi[S];O=jd.clone(V.uniforms)}else O=E.uniforms;return O}function L(E,S){let O;for(let V=0,z=h.length;V<z;V++){let X=h[V];if(X.cacheKey===S){O=X,++O.usedTimes;break}}return O===void 0&&(O=new o2(n,S,E,r),h.push(O)),O}function R(E){if(--E.usedTimes===0){let S=h.indexOf(E);h[S]=h[h.length-1],h.pop(),E.destroy()}}function C(E){l.remove(E)}function P(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:y,acquireProgram:L,releaseProgram:R,releaseShaderCache:C,programs:h,dispose:P}}function c2(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function h2(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function sf(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function rf(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(f,u,d,m,x,g){let p=n[t];return p===void 0?(p={id:f.id,object:f,geometry:u,material:d,groupOrder:m,renderOrder:f.renderOrder,z:x,group:g},n[t]=p):(p.id=f.id,p.object=f,p.geometry=u,p.material=d,p.groupOrder=m,p.renderOrder=f.renderOrder,p.z=x,p.group=g),t++,p}function a(f,u,d,m,x,g){let p=o(f,u,d,m,x,g);d.transmission>0?i.push(p):d.transparent===!0?s.push(p):e.push(p)}function l(f,u,d,m,x,g){let p=o(f,u,d,m,x,g);d.transmission>0?i.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function c(f,u){e.length>1&&e.sort(f||h2),i.length>1&&i.sort(u||sf),s.length>1&&s.sort(u||sf)}function h(){for(let f=t,u=n.length;f<u;f++){let d=n[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function f2(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new rf,n.set(i,[o])):s>=r.length?(o=new rf,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function u2(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new Zt};break;case"SpotLight":e={position:new N,direction:new N,color:new Zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new Zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new Zt,groundColor:new Zt};break;case"RectAreaLight":e={color:new Zt,position:new N,halfWidth:new N,halfHeight:new N};break}return n[t.id]=e,e}}}function d2(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var p2=0;function m2(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function g2(n){let t=new u2,e=d2(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new N);let s=new N,r=new de,o=new de;function a(c){let h=0,f=0,u=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let d=0,m=0,x=0,g=0,p=0,b=0,_=0,y=0,L=0,R=0,C=0;c.sort(m2);for(let E=0,S=c.length;E<S;E++){let O=c[E],V=O.color,z=O.intensity,X=O.distance,lt=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)h+=V.r*z,f+=V.g*z,u+=V.b*z;else if(O.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(O.sh.coefficients[j],z);C++}else if(O.isDirectionalLight){let j=t.get(O);if(j.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){let gt=O.shadow,J=e.get(O);J.shadowIntensity=gt.intensity,J.shadowBias=gt.bias,J.shadowNormalBias=gt.normalBias,J.shadowRadius=gt.radius,J.shadowMapSize=gt.mapSize,i.directionalShadow[d]=J,i.directionalShadowMap[d]=lt,i.directionalShadowMatrix[d]=O.shadow.matrix,b++}i.directional[d]=j,d++}else if(O.isSpotLight){let j=t.get(O);j.position.setFromMatrixPosition(O.matrixWorld),j.color.copy(V).multiplyScalar(z),j.distance=X,j.coneCos=Math.cos(O.angle),j.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),j.decay=O.decay,i.spot[x]=j;let gt=O.shadow;if(O.map&&(i.spotLightMap[L]=O.map,L++,gt.updateMatrices(O),O.castShadow&&R++),i.spotLightMatrix[x]=gt.matrix,O.castShadow){let J=e.get(O);J.shadowIntensity=gt.intensity,J.shadowBias=gt.bias,J.shadowNormalBias=gt.normalBias,J.shadowRadius=gt.radius,J.shadowMapSize=gt.mapSize,i.spotShadow[x]=J,i.spotShadowMap[x]=lt,y++}x++}else if(O.isRectAreaLight){let j=t.get(O);j.color.copy(V).multiplyScalar(z),j.halfWidth.set(O.width*.5,0,0),j.halfHeight.set(0,O.height*.5,0),i.rectArea[g]=j,g++}else if(O.isPointLight){let j=t.get(O);if(j.color.copy(O.color).multiplyScalar(O.intensity),j.distance=O.distance,j.decay=O.decay,O.castShadow){let gt=O.shadow,J=e.get(O);J.shadowIntensity=gt.intensity,J.shadowBias=gt.bias,J.shadowNormalBias=gt.normalBias,J.shadowRadius=gt.radius,J.shadowMapSize=gt.mapSize,J.shadowCameraNear=gt.camera.near,J.shadowCameraFar=gt.camera.far,i.pointShadow[m]=J,i.pointShadowMap[m]=lt,i.pointShadowMatrix[m]=O.shadow.matrix,_++}i.point[m]=j,m++}else if(O.isHemisphereLight){let j=t.get(O);j.skyColor.copy(O.color).multiplyScalar(z),j.groundColor.copy(O.groundColor).multiplyScalar(z),i.hemi[p]=j,p++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ut.LTC_FLOAT_1,i.rectAreaLTC2=Ut.LTC_FLOAT_2):(i.rectAreaLTC1=Ut.LTC_HALF_1,i.rectAreaLTC2=Ut.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=u;let P=i.hash;(P.directionalLength!==d||P.pointLength!==m||P.spotLength!==x||P.rectAreaLength!==g||P.hemiLength!==p||P.numDirectionalShadows!==b||P.numPointShadows!==_||P.numSpotShadows!==y||P.numSpotMaps!==L||P.numLightProbes!==C)&&(i.directional.length=d,i.spot.length=x,i.rectArea.length=g,i.point.length=m,i.hemi.length=p,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=y+L-R,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=C,P.directionalLength=d,P.pointLength=m,P.spotLength=x,P.rectAreaLength=g,P.hemiLength=p,P.numDirectionalShadows=b,P.numPointShadows=_,P.numSpotShadows=y,P.numSpotMaps=L,P.numLightProbes=C,i.version=p2++)}function l(c,h){let f=0,u=0,d=0,m=0,x=0,g=h.matrixWorldInverse;for(let p=0,b=c.length;p<b;p++){let _=c[p];if(_.isDirectionalLight){let y=i.directional[f];y.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),f++}else if(_.isSpotLight){let y=i.spot[d];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),d++}else if(_.isRectAreaLight){let y=i.rectArea[m];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(g),o.identity(),r.copy(_.matrixWorld),r.premultiply(g),o.extractRotation(r),y.halfWidth.set(_.width*.5,0,0),y.halfHeight.set(0,_.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),m++}else if(_.isPointLight){let y=i.point[u];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(g),u++}else if(_.isHemisphereLight){let y=i.hemi[x];y.direction.setFromMatrixPosition(_.matrixWorld),y.direction.transformDirection(g),x++}}}return{setup:a,setupView:l,state:i}}function of(n){let t=new g2(n),e=[],i=[];function s(h){c.camera=h,e.length=0,i.length=0}function r(h){e.push(h)}function o(h){i.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function x2(n){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new of(n),t.set(s,[a])):r>=o.length?(a=new of(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var Yc=class extends Ei{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=cd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},qc=class extends Ei{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},_2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,y2=`uniform sampler2D shadow_pass;
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
}`;function v2(n,t,e){let i=new so,s=new vt,r=new vt,o=new Le,a=new Yc({depthPacking:hd}),l=new qc,c={},h=e.maxTextureSize,f={[hs]:un,[un]:hs,[Ce]:Ce},u=new Zn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new vt},radius:{value:4}},vertexShader:_2,fragmentShader:y2}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let m=new Ue;m.setAttribute("position",new Ye(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Vt(m,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Za;let p=this.type;this.render=function(R,C,P){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||R.length===0)return;let E=n.getRenderTarget(),S=n.getActiveCubeFace(),O=n.getActiveMipmapLevel(),V=n.state;V.setBlending(ls),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);let z=p!==Fi&&this.type===Fi,X=p===Fi&&this.type!==Fi;for(let lt=0,j=R.length;lt<j;lt++){let gt=R[lt],J=gt.shadow;if(J===void 0){console.warn("THREE.WebGLShadowMap:",gt,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;s.copy(J.mapSize);let Ct=J.getFrameExtents();if(s.multiply(Ct),r.copy(J.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Ct.x),s.x=r.x*Ct.x,J.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Ct.y),s.y=r.y*Ct.y,J.mapSize.y=r.y)),J.map===null||z===!0||X===!0){let Ot=this.type!==Fi?{minFilter:qn,magFilter:qn}:{};J.map!==null&&J.map.dispose(),J.map=new Yi(s.x,s.y,Ot),J.map.texture.name=gt.name+".shadowMap",J.camera.updateProjectionMatrix()}n.setRenderTarget(J.map),n.clear();let It=J.getViewportCount();for(let Ot=0;Ot<It;Ot++){let ie=J.getViewport(Ot);o.set(r.x*ie.x,r.y*ie.y,r.x*ie.z,r.y*ie.w),V.viewport(o),J.updateMatrices(gt,Ot),i=J.getFrustum(),y(C,P,J.camera,gt,this.type)}J.isPointLightShadow!==!0&&this.type===Fi&&b(J,P),J.needsUpdate=!1}p=this.type,g.needsUpdate=!1,n.setRenderTarget(E,S,O)};function b(R,C){let P=t.update(x);u.defines.VSM_SAMPLES!==R.blurSamples&&(u.defines.VSM_SAMPLES=R.blurSamples,d.defines.VSM_SAMPLES=R.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Yi(s.x,s.y)),u.uniforms.shadow_pass.value=R.map.texture,u.uniforms.resolution.value=R.mapSize,u.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(C,null,P,u,x,null),d.uniforms.shadow_pass.value=R.mapPass.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(C,null,P,d,x,null)}function _(R,C,P,E){let S=null,O=P.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(O!==void 0)S=O;else if(S=P.isPointLight===!0?l:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){let V=S.uuid,z=C.uuid,X=c[V];X===void 0&&(X={},c[V]=X);let lt=X[z];lt===void 0&&(lt=S.clone(),X[z]=lt,C.addEventListener("dispose",L)),S=lt}if(S.visible=C.visible,S.wireframe=C.wireframe,E===Fi?S.side=C.shadowSide!==null?C.shadowSide:C.side:S.side=C.shadowSide!==null?C.shadowSide:f[C.side],S.alphaMap=C.alphaMap,S.alphaTest=C.alphaTest,S.map=C.map,S.clipShadows=C.clipShadows,S.clippingPlanes=C.clippingPlanes,S.clipIntersection=C.clipIntersection,S.displacementMap=C.displacementMap,S.displacementScale=C.displacementScale,S.displacementBias=C.displacementBias,S.wireframeLinewidth=C.wireframeLinewidth,S.linewidth=C.linewidth,P.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let V=n.properties.get(S);V.light=P}return S}function y(R,C,P,E,S){if(R.visible===!1)return;if(R.layers.test(C.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&S===Fi)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,R.matrixWorld);let z=t.update(R),X=R.material;if(Array.isArray(X)){let lt=z.groups;for(let j=0,gt=lt.length;j<gt;j++){let J=lt[j],Ct=X[J.materialIndex];if(Ct&&Ct.visible){let It=_(R,Ct,E,S);R.onBeforeShadow(n,R,C,P,z,It,J),n.renderBufferDirect(P,null,z,It,R,J),R.onAfterShadow(n,R,C,P,z,It,J)}}}else if(X.visible){let lt=_(R,X,E,S);R.onBeforeShadow(n,R,C,P,z,lt,null),n.renderBufferDirect(P,null,z,lt,R,null),R.onAfterShadow(n,R,C,P,z,lt,null)}}let V=R.children;for(let z=0,X=V.length;z<X;z++)y(V[z],C,P,E,S)}function L(R){R.target.removeEventListener("dispose",L);for(let P in c){let E=c[P],S=R.target.uuid;S in E&&(E[S].dispose(),delete E[S])}}}var b2={[Kl]:Jl,[jl]:ec,[Ql]:nc,[lr]:tc,[Jl]:Kl,[ec]:jl,[nc]:Ql,[tc]:lr};function M2(n,t){function e(){let F=!1,St=new Le,K=null,ct=new Le(0,0,0,0);return{setMask:function(Lt){K!==Lt&&!F&&(n.colorMask(Lt,Lt,Lt,Lt),K=Lt)},setLocked:function(Lt){F=Lt},setClear:function(Lt,Nt,ae,xe,tn){tn===!0&&(Lt*=xe,Nt*=xe,ae*=xe),St.set(Lt,Nt,ae,xe),ct.equals(St)===!1&&(n.clearColor(Lt,Nt,ae,xe),ct.copy(St))},reset:function(){F=!1,K=null,ct.set(-1,0,0,0)}}}function i(){let F=!1,St=!1,K=null,ct=null,Lt=null;return{setReversed:function(Nt){if(St!==Nt){let ae=t.get("EXT_clip_control");St?ae.clipControlEXT(ae.LOWER_LEFT_EXT,ae.ZERO_TO_ONE_EXT):ae.clipControlEXT(ae.LOWER_LEFT_EXT,ae.NEGATIVE_ONE_TO_ONE_EXT);let xe=Lt;Lt=null,this.setClear(xe)}St=Nt},getReversed:function(){return St},setTest:function(Nt){Nt?Mt(n.DEPTH_TEST):Yt(n.DEPTH_TEST)},setMask:function(Nt){K!==Nt&&!F&&(n.depthMask(Nt),K=Nt)},setFunc:function(Nt){if(St&&(Nt=b2[Nt]),ct!==Nt){switch(Nt){case Kl:n.depthFunc(n.NEVER);break;case Jl:n.depthFunc(n.ALWAYS);break;case jl:n.depthFunc(n.LESS);break;case lr:n.depthFunc(n.LEQUAL);break;case Ql:n.depthFunc(n.EQUAL);break;case tc:n.depthFunc(n.GEQUAL);break;case ec:n.depthFunc(n.GREATER);break;case nc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ct=Nt}},setLocked:function(Nt){F=Nt},setClear:function(Nt){Lt!==Nt&&(St&&(Nt=1-Nt),n.clearDepth(Nt),Lt=Nt)},reset:function(){F=!1,K=null,ct=null,Lt=null,St=!1}}}function s(){let F=!1,St=null,K=null,ct=null,Lt=null,Nt=null,ae=null,xe=null,tn=null;return{setTest:function(Ee){F||(Ee?Mt(n.STENCIL_TEST):Yt(n.STENCIL_TEST))},setMask:function(Ee){St!==Ee&&!F&&(n.stencilMask(Ee),St=Ee)},setFunc:function(Ee,Oe,Tn){(K!==Ee||ct!==Oe||Lt!==Tn)&&(n.stencilFunc(Ee,Oe,Tn),K=Ee,ct=Oe,Lt=Tn)},setOp:function(Ee,Oe,Tn){(Nt!==Ee||ae!==Oe||xe!==Tn)&&(n.stencilOp(Ee,Oe,Tn),Nt=Ee,ae=Oe,xe=Tn)},setLocked:function(Ee){F=Ee},setClear:function(Ee){tn!==Ee&&(n.clearStencil(Ee),tn=Ee)},reset:function(){F=!1,St=null,K=null,ct=null,Lt=null,Nt=null,ae=null,xe=null,tn=null}}}let r=new e,o=new i,a=new s,l=new WeakMap,c=new WeakMap,h={},f={},u=new WeakMap,d=[],m=null,x=!1,g=null,p=null,b=null,_=null,y=null,L=null,R=null,C=new Zt(0,0,0),P=0,E=!1,S=null,O=null,V=null,z=null,X=null,lt=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),j=!1,gt=0,J=n.getParameter(n.VERSION);J.indexOf("WebGL")!==-1?(gt=parseFloat(/^WebGL (\d)/.exec(J)[1]),j=gt>=1):J.indexOf("OpenGL ES")!==-1&&(gt=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),j=gt>=2);let Ct=null,It={},Ot=n.getParameter(n.SCISSOR_BOX),ie=n.getParameter(n.VIEWPORT),ye=new Le().fromArray(Ot),it=new Le().fromArray(ie);function bt(F,St,K,ct){let Lt=new Uint8Array(4),Nt=n.createTexture();n.bindTexture(F,Nt),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ae=0;ae<K;ae++)F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY?n.texImage3D(St,0,n.RGBA,1,1,ct,0,n.RGBA,n.UNSIGNED_BYTE,Lt):n.texImage2D(St+ae,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Lt);return Nt}let kt={};kt[n.TEXTURE_2D]=bt(n.TEXTURE_2D,n.TEXTURE_2D,1),kt[n.TEXTURE_CUBE_MAP]=bt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),kt[n.TEXTURE_2D_ARRAY]=bt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),kt[n.TEXTURE_3D]=bt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Mt(n.DEPTH_TEST),o.setFunc(lr),G(!1),ut(lh),Mt(n.CULL_FACE),T(ls);function Mt(F){h[F]!==!0&&(n.enable(F),h[F]=!0)}function Yt(F){h[F]!==!1&&(n.disable(F),h[F]=!1)}function re(F,St){return f[F]!==St?(n.bindFramebuffer(F,St),f[F]=St,F===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=St),F===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=St),!0):!1}function jt(F,St){let K=d,ct=!1;if(F){K=u.get(St),K===void 0&&(K=[],u.set(St,K));let Lt=F.textures;if(K.length!==Lt.length||K[0]!==n.COLOR_ATTACHMENT0){for(let Nt=0,ae=Lt.length;Nt<ae;Nt++)K[Nt]=n.COLOR_ATTACHMENT0+Nt;K.length=Lt.length,ct=!0}}else K[0]!==n.BACK&&(K[0]=n.BACK,ct=!0);ct&&n.drawBuffers(K)}function ve(F){return m!==F?(n.useProgram(F),m=F,!0):!1}let k={[Ss]:n.FUNC_ADD,[Fu]:n.FUNC_SUBTRACT,[ku]:n.FUNC_REVERSE_SUBTRACT};k[Bu]=n.MIN,k[zu]=n.MAX;let st={[Hu]:n.ZERO,[Gu]:n.ONE,[Vu]:n.SRC_COLOR,[$l]:n.SRC_ALPHA,[Zu]:n.SRC_ALPHA_SATURATE,[qu]:n.DST_COLOR,[Xu]:n.DST_ALPHA,[Wu]:n.ONE_MINUS_SRC_COLOR,[Zl]:n.ONE_MINUS_SRC_ALPHA,[$u]:n.ONE_MINUS_DST_COLOR,[Yu]:n.ONE_MINUS_DST_ALPHA,[Ku]:n.CONSTANT_COLOR,[Ju]:n.ONE_MINUS_CONSTANT_COLOR,[ju]:n.CONSTANT_ALPHA,[Qu]:n.ONE_MINUS_CONSTANT_ALPHA};function T(F,St,K,ct,Lt,Nt,ae,xe,tn,Ee){if(F===ls){x===!0&&(Yt(n.BLEND),x=!1);return}if(x===!1&&(Mt(n.BLEND),x=!0),F!==Du){if(F!==g||Ee!==E){if((p!==Ss||y!==Ss)&&(n.blendEquation(n.FUNC_ADD),p=Ss,y=Ss),Ee)switch(F){case ir:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Vi:n.blendFunc(n.ONE,n.ONE);break;case ch:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case hh:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case ir:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Vi:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case ch:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case hh:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}b=null,_=null,L=null,R=null,C.set(0,0,0),P=0,g=F,E=Ee}return}Lt=Lt||St,Nt=Nt||K,ae=ae||ct,(St!==p||Lt!==y)&&(n.blendEquationSeparate(k[St],k[Lt]),p=St,y=Lt),(K!==b||ct!==_||Nt!==L||ae!==R)&&(n.blendFuncSeparate(st[K],st[ct],st[Nt],st[ae]),b=K,_=ct,L=Nt,R=ae),(xe.equals(C)===!1||tn!==P)&&(n.blendColor(xe.r,xe.g,xe.b,tn),C.copy(xe),P=tn),g=F,E=!1}function ft(F,St){F.side===Ce?Yt(n.CULL_FACE):Mt(n.CULL_FACE);let K=F.side===un;St&&(K=!K),G(K),F.blending===ir&&F.transparent===!1?T(ls):T(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);let ct=F.stencilWrite;a.setTest(ct),ct&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),At(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?Mt(n.SAMPLE_ALPHA_TO_COVERAGE):Yt(n.SAMPLE_ALPHA_TO_COVERAGE)}function G(F){S!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),S=F)}function ut(F){F!==Uu?(Mt(n.CULL_FACE),F!==O&&(F===lh?n.cullFace(n.BACK):F===Ou?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Yt(n.CULL_FACE),O=F}function ot(F){F!==V&&(j&&n.lineWidth(F),V=F)}function At(F,St,K){F?(Mt(n.POLYGON_OFFSET_FILL),(z!==St||X!==K)&&(n.polygonOffset(St,K),z=St,X=K)):Yt(n.POLYGON_OFFSET_FILL)}function dt(F){F?Mt(n.SCISSOR_TEST):Yt(n.SCISSOR_TEST)}function I(F){F===void 0&&(F=n.TEXTURE0+lt-1),Ct!==F&&(n.activeTexture(F),Ct=F)}function M(F,St,K){K===void 0&&(Ct===null?K=n.TEXTURE0+lt-1:K=Ct);let ct=It[K];ct===void 0&&(ct={type:void 0,texture:void 0},It[K]=ct),(ct.type!==F||ct.texture!==St)&&(Ct!==K&&(n.activeTexture(K),Ct=K),n.bindTexture(F,St||kt[F]),ct.type=F,ct.texture=St)}function H(){let F=It[Ct];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function tt(){try{n.compressedTexImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ht(){try{n.compressedTexImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function at(){try{n.texSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function zt(){try{n.texSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Pt(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ft(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ne(){try{n.texStorage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function pt(){try{n.texStorage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Bt(){try{n.texImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function te(){try{n.texImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function oe(F){ye.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),ye.copy(F))}function wt(F){it.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),it.copy(F))}function ge(F,St){let K=c.get(St);K===void 0&&(K=new WeakMap,c.set(St,K));let ct=K.get(F);ct===void 0&&(ct=n.getUniformBlockIndex(St,F.name),K.set(F,ct))}function le(F,St){let ct=c.get(St).get(F);l.get(St)!==ct&&(n.uniformBlockBinding(St,ct,F.__bindingPointIndex),l.set(St,ct))}function Se(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},Ct=null,It={},f={},u=new WeakMap,d=[],m=null,x=!1,g=null,p=null,b=null,_=null,y=null,L=null,R=null,C=new Zt(0,0,0),P=0,E=!1,S=null,O=null,V=null,z=null,X=null,ye.set(0,0,n.canvas.width,n.canvas.height),it.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Mt,disable:Yt,bindFramebuffer:re,drawBuffers:jt,useProgram:ve,setBlending:T,setMaterial:ft,setFlipSided:G,setCullFace:ut,setLineWidth:ot,setPolygonOffset:At,setScissorTest:dt,activeTexture:I,bindTexture:M,unbindTexture:H,compressedTexImage2D:tt,compressedTexImage3D:ht,texImage2D:Bt,texImage3D:te,updateUBOMapping:ge,uniformBlockBinding:le,texStorage2D:ne,texStorage3D:pt,texSubImage2D:at,texSubImage3D:zt,compressedTexSubImage2D:Pt,compressedTexSubImage3D:Ft,scissor:oe,viewport:wt,reset:Se}}function af(n,t,e,i){let s=S2(i);switch(e){case Lf:return n*t;case Uf:return n*t;case Of:return n*t*2;case w0:return n*t/s.components*s.byteLength;case A0:return n*t/s.components*s.byteLength;case Df:return n*t*2/s.components*s.byteLength;case R0:return n*t*2/s.components*s.byteLength;case Nf:return n*t*3/s.components*s.byteLength;case pi:return n*t*4/s.components*s.byteLength;case C0:return n*t*4/s.components*s.byteLength;case ga:case xa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case _a:case ya:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ac:case cc:return Math.max(n,16)*Math.max(t,8)/4;case oc:case lc:return Math.max(n,8)*Math.max(t,8)/2;case hc:case fc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case uc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case dc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case pc:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case mc:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case gc:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case xc:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case _c:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case yc:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case vc:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case bc:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Mc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Sc:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Ec:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Tc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case wc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case va:case Ac:case Rc:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Ff:case Cc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Ic:case Pc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function S2(n){switch(n){case Xi:case Cf:return{byteLength:1,components:1};case no:case If:case _o:return{byteLength:2,components:1};case E0:case T0:return{byteLength:2,components:4};case Ts:case S0:case Mi:return{byteLength:4,components:1};case Pf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function E2(n,t,e,i,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new vt,h=new WeakMap,f,u=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(I,M){return d?new OffscreenCanvas(I,M):Sa("canvas")}function x(I,M,H){let tt=1,ht=dt(I);if((ht.width>H||ht.height>H)&&(tt=H/Math.max(ht.width,ht.height)),tt<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let at=Math.floor(tt*ht.width),zt=Math.floor(tt*ht.height);f===void 0&&(f=m(at,zt));let Pt=M?m(at,zt):f;return Pt.width=at,Pt.height=zt,Pt.getContext("2d").drawImage(I,0,0,at,zt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ht.width+"x"+ht.height+") to ("+at+"x"+zt+")."),Pt}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ht.width+"x"+ht.height+")."),I;return I}function g(I){return I.generateMipmaps}function p(I){n.generateMipmap(I)}function b(I){return I.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?n.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function _(I,M,H,tt,ht=!1){if(I!==null){if(n[I]!==void 0)return n[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let at=M;if(M===n.RED&&(H===n.FLOAT&&(at=n.R32F),H===n.HALF_FLOAT&&(at=n.R16F),H===n.UNSIGNED_BYTE&&(at=n.R8)),M===n.RED_INTEGER&&(H===n.UNSIGNED_BYTE&&(at=n.R8UI),H===n.UNSIGNED_SHORT&&(at=n.R16UI),H===n.UNSIGNED_INT&&(at=n.R32UI),H===n.BYTE&&(at=n.R8I),H===n.SHORT&&(at=n.R16I),H===n.INT&&(at=n.R32I)),M===n.RG&&(H===n.FLOAT&&(at=n.RG32F),H===n.HALF_FLOAT&&(at=n.RG16F),H===n.UNSIGNED_BYTE&&(at=n.RG8)),M===n.RG_INTEGER&&(H===n.UNSIGNED_BYTE&&(at=n.RG8UI),H===n.UNSIGNED_SHORT&&(at=n.RG16UI),H===n.UNSIGNED_INT&&(at=n.RG32UI),H===n.BYTE&&(at=n.RG8I),H===n.SHORT&&(at=n.RG16I),H===n.INT&&(at=n.RG32I)),M===n.RGB_INTEGER&&(H===n.UNSIGNED_BYTE&&(at=n.RGB8UI),H===n.UNSIGNED_SHORT&&(at=n.RGB16UI),H===n.UNSIGNED_INT&&(at=n.RGB32UI),H===n.BYTE&&(at=n.RGB8I),H===n.SHORT&&(at=n.RGB16I),H===n.INT&&(at=n.RGB32I)),M===n.RGBA_INTEGER&&(H===n.UNSIGNED_BYTE&&(at=n.RGBA8UI),H===n.UNSIGNED_SHORT&&(at=n.RGBA16UI),H===n.UNSIGNED_INT&&(at=n.RGBA32UI),H===n.BYTE&&(at=n.RGBA8I),H===n.SHORT&&(at=n.RGBA16I),H===n.INT&&(at=n.RGBA32I)),M===n.RGB&&H===n.UNSIGNED_INT_5_9_9_9_REV&&(at=n.RGB9_E5),M===n.RGBA){let zt=ht?Ja:Re.getTransfer(tt);H===n.FLOAT&&(at=n.RGBA32F),H===n.HALF_FLOAT&&(at=n.RGBA16F),H===n.UNSIGNED_BYTE&&(at=zt===ze?n.SRGB8_ALPHA8:n.RGBA8),H===n.UNSIGNED_SHORT_4_4_4_4&&(at=n.RGBA4),H===n.UNSIGNED_SHORT_5_5_5_1&&(at=n.RGB5_A1)}return(at===n.R16F||at===n.R32F||at===n.RG16F||at===n.RG32F||at===n.RGBA16F||at===n.RGBA32F)&&t.get("EXT_color_buffer_float"),at}function y(I,M){let H;return I?M===null||M===Ts||M===fr?H=n.DEPTH24_STENCIL8:M===Mi?H=n.DEPTH32F_STENCIL8:M===no&&(H=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ts||M===fr?H=n.DEPTH_COMPONENT24:M===Mi?H=n.DEPTH_COMPONENT32F:M===no&&(H=n.DEPTH_COMPONENT16),H}function L(I,M){return g(I)===!0||I.isFramebufferTexture&&I.minFilter!==qn&&I.minFilter!==bi?Math.log2(Math.max(M.width,M.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?M.mipmaps.length:1}function R(I){let M=I.target;M.removeEventListener("dispose",R),P(M),M.isVideoTexture&&h.delete(M)}function C(I){let M=I.target;M.removeEventListener("dispose",C),S(M)}function P(I){let M=i.get(I);if(M.__webglInit===void 0)return;let H=I.source,tt=u.get(H);if(tt){let ht=tt[M.__cacheKey];ht.usedTimes--,ht.usedTimes===0&&E(I),Object.keys(tt).length===0&&u.delete(H)}i.remove(I)}function E(I){let M=i.get(I);n.deleteTexture(M.__webglTexture);let H=I.source,tt=u.get(H);delete tt[M.__cacheKey],o.memory.textures--}function S(I){let M=i.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),i.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(M.__webglFramebuffer[tt]))for(let ht=0;ht<M.__webglFramebuffer[tt].length;ht++)n.deleteFramebuffer(M.__webglFramebuffer[tt][ht]);else n.deleteFramebuffer(M.__webglFramebuffer[tt]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[tt])}else{if(Array.isArray(M.__webglFramebuffer))for(let tt=0;tt<M.__webglFramebuffer.length;tt++)n.deleteFramebuffer(M.__webglFramebuffer[tt]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let tt=0;tt<M.__webglColorRenderbuffer.length;tt++)M.__webglColorRenderbuffer[tt]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[tt]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let H=I.textures;for(let tt=0,ht=H.length;tt<ht;tt++){let at=i.get(H[tt]);at.__webglTexture&&(n.deleteTexture(at.__webglTexture),o.memory.textures--),i.remove(H[tt])}i.remove(I)}let O=0;function V(){O=0}function z(){let I=O;return I>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+s.maxTextures),O+=1,I}function X(I){let M=[];return M.push(I.wrapS),M.push(I.wrapT),M.push(I.wrapR||0),M.push(I.magFilter),M.push(I.minFilter),M.push(I.anisotropy),M.push(I.internalFormat),M.push(I.format),M.push(I.type),M.push(I.generateMipmaps),M.push(I.premultiplyAlpha),M.push(I.flipY),M.push(I.unpackAlignment),M.push(I.colorSpace),M.join()}function lt(I,M){let H=i.get(I);if(I.isVideoTexture&&ot(I),I.isRenderTargetTexture===!1&&I.version>0&&H.__version!==I.version){let tt=I.image;if(tt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{it(H,I,M);return}}e.bindTexture(n.TEXTURE_2D,H.__webglTexture,n.TEXTURE0+M)}function j(I,M){let H=i.get(I);if(I.version>0&&H.__version!==I.version){it(H,I,M);return}e.bindTexture(n.TEXTURE_2D_ARRAY,H.__webglTexture,n.TEXTURE0+M)}function gt(I,M){let H=i.get(I);if(I.version>0&&H.__version!==I.version){it(H,I,M);return}e.bindTexture(n.TEXTURE_3D,H.__webglTexture,n.TEXTURE0+M)}function J(I,M){let H=i.get(I);if(I.version>0&&H.__version!==I.version){bt(H,I,M);return}e.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture,n.TEXTURE0+M)}let Ct={[Wi]:n.REPEAT,[Bi]:n.CLAMP_TO_EDGE,[rc]:n.MIRRORED_REPEAT},It={[qn]:n.NEAREST,[ld]:n.NEAREST_MIPMAP_NEAREST,[Uo]:n.NEAREST_MIPMAP_LINEAR,[bi]:n.LINEAR,[ul]:n.LINEAR_MIPMAP_NEAREST,[zi]:n.LINEAR_MIPMAP_LINEAR},Ot={[ud]:n.NEVER,[_d]:n.ALWAYS,[dd]:n.LESS,[Bf]:n.LEQUAL,[pd]:n.EQUAL,[xd]:n.GEQUAL,[md]:n.GREATER,[gd]:n.NOTEQUAL};function ie(I,M){if(M.type===Mi&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===bi||M.magFilter===ul||M.magFilter===Uo||M.magFilter===zi||M.minFilter===bi||M.minFilter===ul||M.minFilter===Uo||M.minFilter===zi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(I,n.TEXTURE_WRAP_S,Ct[M.wrapS]),n.texParameteri(I,n.TEXTURE_WRAP_T,Ct[M.wrapT]),(I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY)&&n.texParameteri(I,n.TEXTURE_WRAP_R,Ct[M.wrapR]),n.texParameteri(I,n.TEXTURE_MAG_FILTER,It[M.magFilter]),n.texParameteri(I,n.TEXTURE_MIN_FILTER,It[M.minFilter]),M.compareFunction&&(n.texParameteri(I,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(I,n.TEXTURE_COMPARE_FUNC,Ot[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===qn||M.minFilter!==Uo&&M.minFilter!==zi||M.type===Mi&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){let H=t.get("EXT_texture_filter_anisotropic");n.texParameterf(I,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function ye(I,M){let H=!1;I.__webglInit===void 0&&(I.__webglInit=!0,M.addEventListener("dispose",R));let tt=M.source,ht=u.get(tt);ht===void 0&&(ht={},u.set(tt,ht));let at=X(M);if(at!==I.__cacheKey){ht[at]===void 0&&(ht[at]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,H=!0),ht[at].usedTimes++;let zt=ht[I.__cacheKey];zt!==void 0&&(ht[I.__cacheKey].usedTimes--,zt.usedTimes===0&&E(M)),I.__cacheKey=at,I.__webglTexture=ht[at].texture}return H}function it(I,M,H){let tt=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(tt=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(tt=n.TEXTURE_3D);let ht=ye(I,M),at=M.source;e.bindTexture(tt,I.__webglTexture,n.TEXTURE0+H);let zt=i.get(at);if(at.version!==zt.__version||ht===!0){e.activeTexture(n.TEXTURE0+H);let Pt=Re.getPrimaries(Re.workingColorSpace),Ft=M.colorSpace===ni?null:Re.getPrimaries(M.colorSpace),ne=M.colorSpace===ni||Pt===Ft?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);let pt=x(M.image,!1,s.maxTextureSize);pt=At(M,pt);let Bt=r.convert(M.format,M.colorSpace),te=r.convert(M.type),oe=_(M.internalFormat,Bt,te,M.colorSpace,M.isVideoTexture);ie(tt,M);let wt,ge=M.mipmaps,le=M.isVideoTexture!==!0,Se=zt.__version===void 0||ht===!0,F=at.dataReady,St=L(M,pt);if(M.isDepthTexture)oe=y(M.format===ur,M.type),Se&&(le?e.texStorage2D(n.TEXTURE_2D,1,oe,pt.width,pt.height):e.texImage2D(n.TEXTURE_2D,0,oe,pt.width,pt.height,0,Bt,te,null));else if(M.isDataTexture)if(ge.length>0){le&&Se&&e.texStorage2D(n.TEXTURE_2D,St,oe,ge[0].width,ge[0].height);for(let K=0,ct=ge.length;K<ct;K++)wt=ge[K],le?F&&e.texSubImage2D(n.TEXTURE_2D,K,0,0,wt.width,wt.height,Bt,te,wt.data):e.texImage2D(n.TEXTURE_2D,K,oe,wt.width,wt.height,0,Bt,te,wt.data);M.generateMipmaps=!1}else le?(Se&&e.texStorage2D(n.TEXTURE_2D,St,oe,pt.width,pt.height),F&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,pt.width,pt.height,Bt,te,pt.data)):e.texImage2D(n.TEXTURE_2D,0,oe,pt.width,pt.height,0,Bt,te,pt.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){le&&Se&&e.texStorage3D(n.TEXTURE_2D_ARRAY,St,oe,ge[0].width,ge[0].height,pt.depth);for(let K=0,ct=ge.length;K<ct;K++)if(wt=ge[K],M.format!==pi)if(Bt!==null)if(le){if(F)if(M.layerUpdates.size>0){let Lt=af(wt.width,wt.height,M.format,M.type);for(let Nt of M.layerUpdates){let ae=wt.data.subarray(Nt*Lt/wt.data.BYTES_PER_ELEMENT,(Nt+1)*Lt/wt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,Nt,wt.width,wt.height,1,Bt,ae)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,wt.width,wt.height,pt.depth,Bt,wt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,K,oe,wt.width,wt.height,pt.depth,0,wt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else le?F&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,wt.width,wt.height,pt.depth,Bt,te,wt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,K,oe,wt.width,wt.height,pt.depth,0,Bt,te,wt.data)}else{le&&Se&&e.texStorage2D(n.TEXTURE_2D,St,oe,ge[0].width,ge[0].height);for(let K=0,ct=ge.length;K<ct;K++)wt=ge[K],M.format!==pi?Bt!==null?le?F&&e.compressedTexSubImage2D(n.TEXTURE_2D,K,0,0,wt.width,wt.height,Bt,wt.data):e.compressedTexImage2D(n.TEXTURE_2D,K,oe,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):le?F&&e.texSubImage2D(n.TEXTURE_2D,K,0,0,wt.width,wt.height,Bt,te,wt.data):e.texImage2D(n.TEXTURE_2D,K,oe,wt.width,wt.height,0,Bt,te,wt.data)}else if(M.isDataArrayTexture)if(le){if(Se&&e.texStorage3D(n.TEXTURE_2D_ARRAY,St,oe,pt.width,pt.height,pt.depth),F)if(M.layerUpdates.size>0){let K=af(pt.width,pt.height,M.format,M.type);for(let ct of M.layerUpdates){let Lt=pt.data.subarray(ct*K/pt.data.BYTES_PER_ELEMENT,(ct+1)*K/pt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ct,pt.width,pt.height,1,Bt,te,Lt)}M.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,pt.width,pt.height,pt.depth,Bt,te,pt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,oe,pt.width,pt.height,pt.depth,0,Bt,te,pt.data);else if(M.isData3DTexture)le?(Se&&e.texStorage3D(n.TEXTURE_3D,St,oe,pt.width,pt.height,pt.depth),F&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,pt.width,pt.height,pt.depth,Bt,te,pt.data)):e.texImage3D(n.TEXTURE_3D,0,oe,pt.width,pt.height,pt.depth,0,Bt,te,pt.data);else if(M.isFramebufferTexture){if(Se)if(le)e.texStorage2D(n.TEXTURE_2D,St,oe,pt.width,pt.height);else{let K=pt.width,ct=pt.height;for(let Lt=0;Lt<St;Lt++)e.texImage2D(n.TEXTURE_2D,Lt,oe,K,ct,0,Bt,te,null),K>>=1,ct>>=1}}else if(ge.length>0){if(le&&Se){let K=dt(ge[0]);e.texStorage2D(n.TEXTURE_2D,St,oe,K.width,K.height)}for(let K=0,ct=ge.length;K<ct;K++)wt=ge[K],le?F&&e.texSubImage2D(n.TEXTURE_2D,K,0,0,Bt,te,wt):e.texImage2D(n.TEXTURE_2D,K,oe,Bt,te,wt);M.generateMipmaps=!1}else if(le){if(Se){let K=dt(pt);e.texStorage2D(n.TEXTURE_2D,St,oe,K.width,K.height)}F&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Bt,te,pt)}else e.texImage2D(n.TEXTURE_2D,0,oe,Bt,te,pt);g(M)&&p(tt),zt.__version=at.version,M.onUpdate&&M.onUpdate(M)}I.__version=M.version}function bt(I,M,H){if(M.image.length!==6)return;let tt=ye(I,M),ht=M.source;e.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+H);let at=i.get(ht);if(ht.version!==at.__version||tt===!0){e.activeTexture(n.TEXTURE0+H);let zt=Re.getPrimaries(Re.workingColorSpace),Pt=M.colorSpace===ni?null:Re.getPrimaries(M.colorSpace),Ft=M.colorSpace===ni||zt===Pt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ft);let ne=M.isCompressedTexture||M.image[0].isCompressedTexture,pt=M.image[0]&&M.image[0].isDataTexture,Bt=[];for(let ct=0;ct<6;ct++)!ne&&!pt?Bt[ct]=x(M.image[ct],!0,s.maxCubemapSize):Bt[ct]=pt?M.image[ct].image:M.image[ct],Bt[ct]=At(M,Bt[ct]);let te=Bt[0],oe=r.convert(M.format,M.colorSpace),wt=r.convert(M.type),ge=_(M.internalFormat,oe,wt,M.colorSpace),le=M.isVideoTexture!==!0,Se=at.__version===void 0||tt===!0,F=ht.dataReady,St=L(M,te);ie(n.TEXTURE_CUBE_MAP,M);let K;if(ne){le&&Se&&e.texStorage2D(n.TEXTURE_CUBE_MAP,St,ge,te.width,te.height);for(let ct=0;ct<6;ct++){K=Bt[ct].mipmaps;for(let Lt=0;Lt<K.length;Lt++){let Nt=K[Lt];M.format!==pi?oe!==null?le?F&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Lt,0,0,Nt.width,Nt.height,oe,Nt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Lt,ge,Nt.width,Nt.height,0,Nt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):le?F&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Lt,0,0,Nt.width,Nt.height,oe,wt,Nt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Lt,ge,Nt.width,Nt.height,0,oe,wt,Nt.data)}}}else{if(K=M.mipmaps,le&&Se){K.length>0&&St++;let ct=dt(Bt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,St,ge,ct.width,ct.height)}for(let ct=0;ct<6;ct++)if(pt){le?F&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,Bt[ct].width,Bt[ct].height,oe,wt,Bt[ct].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,ge,Bt[ct].width,Bt[ct].height,0,oe,wt,Bt[ct].data);for(let Lt=0;Lt<K.length;Lt++){let ae=K[Lt].image[ct].image;le?F&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Lt+1,0,0,ae.width,ae.height,oe,wt,ae.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Lt+1,ge,ae.width,ae.height,0,oe,wt,ae.data)}}else{le?F&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,oe,wt,Bt[ct]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,ge,oe,wt,Bt[ct]);for(let Lt=0;Lt<K.length;Lt++){let Nt=K[Lt];le?F&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Lt+1,0,0,oe,wt,Nt.image[ct]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Lt+1,ge,oe,wt,Nt.image[ct])}}}g(M)&&p(n.TEXTURE_CUBE_MAP),at.__version=ht.version,M.onUpdate&&M.onUpdate(M)}I.__version=M.version}function kt(I,M,H,tt,ht,at){let zt=r.convert(H.format,H.colorSpace),Pt=r.convert(H.type),Ft=_(H.internalFormat,zt,Pt,H.colorSpace),ne=i.get(M),pt=i.get(H);if(pt.__renderTarget=M,!ne.__hasExternalTextures){let Bt=Math.max(1,M.width>>at),te=Math.max(1,M.height>>at);ht===n.TEXTURE_3D||ht===n.TEXTURE_2D_ARRAY?e.texImage3D(ht,at,Ft,Bt,te,M.depth,0,zt,Pt,null):e.texImage2D(ht,at,Ft,Bt,te,0,zt,Pt,null)}e.bindFramebuffer(n.FRAMEBUFFER,I),ut(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,tt,ht,pt.__webglTexture,0,G(M)):(ht===n.TEXTURE_2D||ht>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ht<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,tt,ht,pt.__webglTexture,at),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Mt(I,M,H){if(n.bindRenderbuffer(n.RENDERBUFFER,I),M.depthBuffer){let tt=M.depthTexture,ht=tt&&tt.isDepthTexture?tt.type:null,at=y(M.stencilBuffer,ht),zt=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Pt=G(M);ut(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Pt,at,M.width,M.height):H?n.renderbufferStorageMultisample(n.RENDERBUFFER,Pt,at,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,at,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,zt,n.RENDERBUFFER,I)}else{let tt=M.textures;for(let ht=0;ht<tt.length;ht++){let at=tt[ht],zt=r.convert(at.format,at.colorSpace),Pt=r.convert(at.type),Ft=_(at.internalFormat,zt,Pt,at.colorSpace),ne=G(M);H&&ut(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ne,Ft,M.width,M.height):ut(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ne,Ft,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,Ft,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Yt(I,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,I),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let tt=i.get(M.depthTexture);tt.__renderTarget=M,(!tt.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),lt(M.depthTexture,0);let ht=tt.__webglTexture,at=G(M);if(M.depthTexture.format===sr)ut(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ht,0,at):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ht,0);else if(M.depthTexture.format===ur)ut(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ht,0,at):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ht,0);else throw new Error("Unknown depthTexture format")}function re(I){let M=i.get(I),H=I.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==I.depthTexture){let tt=I.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),tt){let ht=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,tt.removeEventListener("dispose",ht)};tt.addEventListener("dispose",ht),M.__depthDisposeCallback=ht}M.__boundDepthTexture=tt}if(I.depthTexture&&!M.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Yt(M.__webglFramebuffer,I)}else if(H){M.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)if(e.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[tt]),M.__webglDepthbuffer[tt]===void 0)M.__webglDepthbuffer[tt]=n.createRenderbuffer(),Mt(M.__webglDepthbuffer[tt],I,!1);else{let ht=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,at=M.__webglDepthbuffer[tt];n.bindRenderbuffer(n.RENDERBUFFER,at),n.framebufferRenderbuffer(n.FRAMEBUFFER,ht,n.RENDERBUFFER,at)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),Mt(M.__webglDepthbuffer,I,!1);else{let tt=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ht=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ht),n.framebufferRenderbuffer(n.FRAMEBUFFER,tt,n.RENDERBUFFER,ht)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function jt(I,M,H){let tt=i.get(I);M!==void 0&&kt(tt.__webglFramebuffer,I,I.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),H!==void 0&&re(I)}function ve(I){let M=I.texture,H=i.get(I),tt=i.get(M);I.addEventListener("dispose",C);let ht=I.textures,at=I.isWebGLCubeRenderTarget===!0,zt=ht.length>1;if(zt||(tt.__webglTexture===void 0&&(tt.__webglTexture=n.createTexture()),tt.__version=M.version,o.memory.textures++),at){H.__webglFramebuffer=[];for(let Pt=0;Pt<6;Pt++)if(M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer[Pt]=[];for(let Ft=0;Ft<M.mipmaps.length;Ft++)H.__webglFramebuffer[Pt][Ft]=n.createFramebuffer()}else H.__webglFramebuffer[Pt]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer=[];for(let Pt=0;Pt<M.mipmaps.length;Pt++)H.__webglFramebuffer[Pt]=n.createFramebuffer()}else H.__webglFramebuffer=n.createFramebuffer();if(zt)for(let Pt=0,Ft=ht.length;Pt<Ft;Pt++){let ne=i.get(ht[Pt]);ne.__webglTexture===void 0&&(ne.__webglTexture=n.createTexture(),o.memory.textures++)}if(I.samples>0&&ut(I)===!1){H.__webglMultisampledFramebuffer=n.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let Pt=0;Pt<ht.length;Pt++){let Ft=ht[Pt];H.__webglColorRenderbuffer[Pt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,H.__webglColorRenderbuffer[Pt]);let ne=r.convert(Ft.format,Ft.colorSpace),pt=r.convert(Ft.type),Bt=_(Ft.internalFormat,ne,pt,Ft.colorSpace,I.isXRRenderTarget===!0),te=G(I);n.renderbufferStorageMultisample(n.RENDERBUFFER,te,Bt,I.width,I.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pt,n.RENDERBUFFER,H.__webglColorRenderbuffer[Pt])}n.bindRenderbuffer(n.RENDERBUFFER,null),I.depthBuffer&&(H.__webglDepthRenderbuffer=n.createRenderbuffer(),Mt(H.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(at){e.bindTexture(n.TEXTURE_CUBE_MAP,tt.__webglTexture),ie(n.TEXTURE_CUBE_MAP,M);for(let Pt=0;Pt<6;Pt++)if(M.mipmaps&&M.mipmaps.length>0)for(let Ft=0;Ft<M.mipmaps.length;Ft++)kt(H.__webglFramebuffer[Pt][Ft],I,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,Ft);else kt(H.__webglFramebuffer[Pt],I,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,0);g(M)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(zt){for(let Pt=0,Ft=ht.length;Pt<Ft;Pt++){let ne=ht[Pt],pt=i.get(ne);e.bindTexture(n.TEXTURE_2D,pt.__webglTexture),ie(n.TEXTURE_2D,ne),kt(H.__webglFramebuffer,I,ne,n.COLOR_ATTACHMENT0+Pt,n.TEXTURE_2D,0),g(ne)&&p(n.TEXTURE_2D)}e.unbindTexture()}else{let Pt=n.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Pt=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(Pt,tt.__webglTexture),ie(Pt,M),M.mipmaps&&M.mipmaps.length>0)for(let Ft=0;Ft<M.mipmaps.length;Ft++)kt(H.__webglFramebuffer[Ft],I,M,n.COLOR_ATTACHMENT0,Pt,Ft);else kt(H.__webglFramebuffer,I,M,n.COLOR_ATTACHMENT0,Pt,0);g(M)&&p(Pt),e.unbindTexture()}I.depthBuffer&&re(I)}function k(I){let M=I.textures;for(let H=0,tt=M.length;H<tt;H++){let ht=M[H];if(g(ht)){let at=b(I),zt=i.get(ht).__webglTexture;e.bindTexture(at,zt),p(at),e.unbindTexture()}}}let st=[],T=[];function ft(I){if(I.samples>0){if(ut(I)===!1){let M=I.textures,H=I.width,tt=I.height,ht=n.COLOR_BUFFER_BIT,at=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,zt=i.get(I),Pt=M.length>1;if(Pt)for(let Ft=0;Ft<M.length;Ft++)e.bindFramebuffer(n.FRAMEBUFFER,zt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ft,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,zt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ft,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,zt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,zt.__webglFramebuffer);for(let Ft=0;Ft<M.length;Ft++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(ht|=n.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(ht|=n.STENCIL_BUFFER_BIT)),Pt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,zt.__webglColorRenderbuffer[Ft]);let ne=i.get(M[Ft]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ne,0)}n.blitFramebuffer(0,0,H,tt,0,0,H,tt,ht,n.NEAREST),l===!0&&(st.length=0,T.length=0,st.push(n.COLOR_ATTACHMENT0+Ft),I.depthBuffer&&I.resolveDepthBuffer===!1&&(st.push(at),T.push(at),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,T)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,st))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Pt)for(let Ft=0;Ft<M.length;Ft++){e.bindFramebuffer(n.FRAMEBUFFER,zt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ft,n.RENDERBUFFER,zt.__webglColorRenderbuffer[Ft]);let ne=i.get(M[Ft]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,zt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ft,n.TEXTURE_2D,ne,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,zt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&l){let M=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function G(I){return Math.min(s.maxSamples,I.samples)}function ut(I){let M=i.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ot(I){let M=o.render.frame;h.get(I)!==M&&(h.set(I,M),I.update())}function At(I,M){let H=I.colorSpace,tt=I.format,ht=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||H!==Cr&&H!==ni&&(Re.getTransfer(H)===ze?(tt!==pi||ht!==Xi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),M}function dt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=V,this.setTexture2D=lt,this.setTexture2DArray=j,this.setTexture3D=gt,this.setTextureCube=J,this.rebindTextures=jt,this.setupRenderTarget=ve,this.updateRenderTargetMipmap=k,this.updateMultisampleRenderTarget=ft,this.setupDepthRenderbuffer=re,this.setupFrameBufferTexture=kt,this.useMultisampledRTT=ut}function T2(n,t){function e(i,s=ni){let r,o=Re.getTransfer(s);if(i===Xi)return n.UNSIGNED_BYTE;if(i===E0)return n.UNSIGNED_SHORT_4_4_4_4;if(i===T0)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Pf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Cf)return n.BYTE;if(i===If)return n.SHORT;if(i===no)return n.UNSIGNED_SHORT;if(i===S0)return n.INT;if(i===Ts)return n.UNSIGNED_INT;if(i===Mi)return n.FLOAT;if(i===_o)return n.HALF_FLOAT;if(i===Lf)return n.ALPHA;if(i===Nf)return n.RGB;if(i===pi)return n.RGBA;if(i===Uf)return n.LUMINANCE;if(i===Of)return n.LUMINANCE_ALPHA;if(i===sr)return n.DEPTH_COMPONENT;if(i===ur)return n.DEPTH_STENCIL;if(i===w0)return n.RED;if(i===A0)return n.RED_INTEGER;if(i===Df)return n.RG;if(i===R0)return n.RG_INTEGER;if(i===C0)return n.RGBA_INTEGER;if(i===ga||i===xa||i===_a||i===ya)if(o===ze)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ga)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===xa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===_a)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ya)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ga)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===xa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===_a)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ya)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===oc||i===ac||i===lc||i===cc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===oc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ac)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===lc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===cc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===hc||i===fc||i===uc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===hc||i===fc)return o===ze?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===uc)return o===ze?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===dc||i===pc||i===mc||i===gc||i===xc||i===_c||i===yc||i===vc||i===bc||i===Mc||i===Sc||i===Ec||i===Tc||i===wc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===dc)return o===ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===pc)return o===ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===mc)return o===ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===gc)return o===ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===xc)return o===ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===_c)return o===ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===yc)return o===ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===vc)return o===ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===bc)return o===ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Mc)return o===ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Sc)return o===ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ec)return o===ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Tc)return o===ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===wc)return o===ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===va||i===Ac||i===Rc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===va)return o===ze?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ac)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Rc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ff||i===Cc||i===Ic||i===Pc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===va)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Cc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ic)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Pc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===fr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var $c=class extends xn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Wt=class extends nn{constructor(){super(),this.isGroup=!0,this.type="Group"}},w2={type:"move"},jr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let g=e.getJointPose(x,i),p=this._getHandJoint(c,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,m=.005;c.inputState.pinching&&u>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(w2)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Wt;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},A2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,R2=`
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

}`,Zc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){let s=new On,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Zn({vertexShader:A2,fragmentShader:R2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Vt(new Ge(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Kc=class extends fs{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,m=null,x=new Zc,g=e.getContextAttributes(),p=null,b=null,_=[],y=[],L=new vt,R=null,C=new xn;C.viewport=new Le;let P=new xn;P.viewport=new Le;let E=[C,P],S=new $c,O=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(it){let bt=_[it];return bt===void 0&&(bt=new jr,_[it]=bt),bt.getTargetRaySpace()},this.getControllerGrip=function(it){let bt=_[it];return bt===void 0&&(bt=new jr,_[it]=bt),bt.getGripSpace()},this.getHand=function(it){let bt=_[it];return bt===void 0&&(bt=new jr,_[it]=bt),bt.getHandSpace()};function z(it){let bt=y.indexOf(it.inputSource);if(bt===-1)return;let kt=_[bt];kt!==void 0&&(kt.update(it.inputSource,it.frame,c||o),kt.dispatchEvent({type:it.type,data:it.inputSource}))}function X(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",lt);for(let it=0;it<_.length;it++){let bt=y[it];bt!==null&&(y[it]=null,_[it].disconnect(bt))}O=null,V=null,x.reset(),t.setRenderTarget(p),d=null,u=null,f=null,s=null,b=null,ye.stop(),i.isPresenting=!1,t.setPixelRatio(R),t.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(it){r=it,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(it){a=it,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(it){c=it},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(it){if(s=it,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",X),s.addEventListener("inputsourceschange",lt),g.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(L),s.renderState.layers===void 0){let bt={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,bt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),b=new Yi(d.framebufferWidth,d.framebufferHeight,{format:pi,type:Xi,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let bt=null,kt=null,Mt=null;g.depth&&(Mt=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,bt=g.stencil?ur:sr,kt=g.stencil?fr:Ts);let Yt={colorFormat:e.RGBA8,depthFormat:Mt,scaleFactor:r};f=new XRWebGLBinding(s,e),u=f.createProjectionLayer(Yt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),b=new Yi(u.textureWidth,u.textureHeight,{format:pi,type:Xi,depthTexture:new Ra(u.textureWidth,u.textureHeight,kt,void 0,void 0,void 0,void 0,void 0,void 0,bt),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ye.setContext(s),ye.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function lt(it){for(let bt=0;bt<it.removed.length;bt++){let kt=it.removed[bt],Mt=y.indexOf(kt);Mt>=0&&(y[Mt]=null,_[Mt].disconnect(kt))}for(let bt=0;bt<it.added.length;bt++){let kt=it.added[bt],Mt=y.indexOf(kt);if(Mt===-1){for(let re=0;re<_.length;re++)if(re>=y.length){y.push(kt),Mt=re;break}else if(y[re]===null){y[re]=kt,Mt=re;break}if(Mt===-1)break}let Yt=_[Mt];Yt&&Yt.connect(kt)}}let j=new N,gt=new N;function J(it,bt,kt){j.setFromMatrixPosition(bt.matrixWorld),gt.setFromMatrixPosition(kt.matrixWorld);let Mt=j.distanceTo(gt),Yt=bt.projectionMatrix.elements,re=kt.projectionMatrix.elements,jt=Yt[14]/(Yt[10]-1),ve=Yt[14]/(Yt[10]+1),k=(Yt[9]+1)/Yt[5],st=(Yt[9]-1)/Yt[5],T=(Yt[8]-1)/Yt[0],ft=(re[8]+1)/re[0],G=jt*T,ut=jt*ft,ot=Mt/(-T+ft),At=ot*-T;if(bt.matrixWorld.decompose(it.position,it.quaternion,it.scale),it.translateX(At),it.translateZ(ot),it.matrixWorld.compose(it.position,it.quaternion,it.scale),it.matrixWorldInverse.copy(it.matrixWorld).invert(),Yt[10]===-1)it.projectionMatrix.copy(bt.projectionMatrix),it.projectionMatrixInverse.copy(bt.projectionMatrixInverse);else{let dt=jt+ot,I=ve+ot,M=G-At,H=ut+(Mt-At),tt=k*ve/I*dt,ht=st*ve/I*dt;it.projectionMatrix.makePerspective(M,H,tt,ht,dt,I),it.projectionMatrixInverse.copy(it.projectionMatrix).invert()}}function Ct(it,bt){bt===null?it.matrixWorld.copy(it.matrix):it.matrixWorld.multiplyMatrices(bt.matrixWorld,it.matrix),it.matrixWorldInverse.copy(it.matrixWorld).invert()}this.updateCamera=function(it){if(s===null)return;let bt=it.near,kt=it.far;x.texture!==null&&(x.depthNear>0&&(bt=x.depthNear),x.depthFar>0&&(kt=x.depthFar)),S.near=P.near=C.near=bt,S.far=P.far=C.far=kt,(O!==S.near||V!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),O=S.near,V=S.far),C.layers.mask=it.layers.mask|2,P.layers.mask=it.layers.mask|4,S.layers.mask=C.layers.mask|P.layers.mask;let Mt=it.parent,Yt=S.cameras;Ct(S,Mt);for(let re=0;re<Yt.length;re++)Ct(Yt[re],Mt);Yt.length===2?J(S,C,P):S.projectionMatrix.copy(C.projectionMatrix),It(it,S,Mt)};function It(it,bt,kt){kt===null?it.matrix.copy(bt.matrixWorld):(it.matrix.copy(kt.matrixWorld),it.matrix.invert(),it.matrix.multiply(bt.matrixWorld)),it.matrix.decompose(it.position,it.quaternion,it.scale),it.updateMatrixWorld(!0),it.projectionMatrix.copy(bt.projectionMatrix),it.projectionMatrixInverse.copy(bt.projectionMatrixInverse),it.isPerspectiveCamera&&(it.fov=dr*2*Math.atan(1/it.projectionMatrix.elements[5]),it.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(it){l=it,u!==null&&(u.fixedFoveation=it),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=it)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(S)};let Ot=null;function ie(it,bt){if(h=bt.getViewerPose(c||o),m=bt,h!==null){let kt=h.views;d!==null&&(t.setRenderTargetFramebuffer(b,d.framebuffer),t.setRenderTarget(b));let Mt=!1;kt.length!==S.cameras.length&&(S.cameras.length=0,Mt=!0);for(let re=0;re<kt.length;re++){let jt=kt[re],ve=null;if(d!==null)ve=d.getViewport(jt);else{let st=f.getViewSubImage(u,jt);ve=st.viewport,re===0&&(t.setRenderTargetTextures(b,st.colorTexture,u.ignoreDepthValues?void 0:st.depthStencilTexture),t.setRenderTarget(b))}let k=E[re];k===void 0&&(k=new xn,k.layers.enable(re),k.viewport=new Le,E[re]=k),k.matrix.fromArray(jt.transform.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale),k.projectionMatrix.fromArray(jt.projectionMatrix),k.projectionMatrixInverse.copy(k.projectionMatrix).invert(),k.viewport.set(ve.x,ve.y,ve.width,ve.height),re===0&&(S.matrix.copy(k.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),Mt===!0&&S.cameras.push(k)}let Yt=s.enabledFeatures;if(Yt&&Yt.includes("depth-sensing")){let re=f.getDepthInformation(kt[0]);re&&re.isValid&&re.texture&&x.init(t,re,s.renderState)}}for(let kt=0;kt<_.length;kt++){let Mt=y[kt],Yt=_[kt];Mt!==null&&Yt!==void 0&&Yt.update(Mt,bt,c||o)}Ot&&Ot(it,bt),bt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:bt}),m=null}let ye=new Vf;ye.setAnimationLoop(ie),this.setAnimationLoop=function(it){Ot=it},this.dispose=function(){}}},bs=new In,C2=new de;function I2(n,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,Gf(n)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,b,_,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),f(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),u(g,p),p.isMeshPhysicalMaterial&&d(g,p,y)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),x(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,b,_):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===un&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===un&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let b=t.get(p),_=b.envMap,y=b.envMapRotation;_&&(g.envMap.value=_,bs.copy(y),bs.x*=-1,bs.y*=-1,bs.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(bs.y*=-1,bs.z*=-1),g.envMapRotation.value.setFromMatrix4(C2.makeRotationFromEuler(bs)),g.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,b,_){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*b,g.scale.value=_*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function f(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function u(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,b){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===un&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=b.texture,g.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){let b=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(b.matrixWorld),g.nearDistance.value=b.shadow.camera.near,g.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function P2(n,t,e,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,_){let y=_.program;i.uniformBlockBinding(b,y)}function c(b,_){let y=s[b.id];y===void 0&&(m(b),y=h(b),s[b.id]=y,b.addEventListener("dispose",g));let L=_.program;i.updateUBOMapping(b,L);let R=t.render.frame;r[b.id]!==R&&(u(b),r[b.id]=R)}function h(b){let _=f();b.__bindingPointIndex=_;let y=n.createBuffer(),L=b.__size,R=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,L,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,y),y}function f(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(b){let _=s[b.id],y=b.uniforms,L=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let R=0,C=y.length;R<C;R++){let P=Array.isArray(y[R])?y[R]:[y[R]];for(let E=0,S=P.length;E<S;E++){let O=P[E];if(d(O,R,E,L)===!0){let V=O.__offset,z=Array.isArray(O.value)?O.value:[O.value],X=0;for(let lt=0;lt<z.length;lt++){let j=z[lt],gt=x(j);typeof j=="number"||typeof j=="boolean"?(O.__data[0]=j,n.bufferSubData(n.UNIFORM_BUFFER,V+X,O.__data)):j.isMatrix3?(O.__data[0]=j.elements[0],O.__data[1]=j.elements[1],O.__data[2]=j.elements[2],O.__data[3]=0,O.__data[4]=j.elements[3],O.__data[5]=j.elements[4],O.__data[6]=j.elements[5],O.__data[7]=0,O.__data[8]=j.elements[6],O.__data[9]=j.elements[7],O.__data[10]=j.elements[8],O.__data[11]=0):(j.toArray(O.__data,X),X+=gt.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,V,O.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(b,_,y,L){let R=b.value,C=_+"_"+y;if(L[C]===void 0)return typeof R=="number"||typeof R=="boolean"?L[C]=R:L[C]=R.clone(),!0;{let P=L[C];if(typeof R=="number"||typeof R=="boolean"){if(P!==R)return L[C]=R,!0}else if(P.equals(R)===!1)return P.copy(R),!0}return!1}function m(b){let _=b.uniforms,y=0,L=16;for(let C=0,P=_.length;C<P;C++){let E=Array.isArray(_[C])?_[C]:[_[C]];for(let S=0,O=E.length;S<O;S++){let V=E[S],z=Array.isArray(V.value)?V.value:[V.value];for(let X=0,lt=z.length;X<lt;X++){let j=z[X],gt=x(j),J=y%L,Ct=J%gt.boundary,It=J+Ct;y+=Ct,It!==0&&L-It<gt.storage&&(y+=L-It),V.__data=new Float32Array(gt.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=y,y+=gt.storage}}}let R=y%L;return R>0&&(y+=L-R),b.__size=y,b.__cache={},this}function x(b){let _={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(_.boundary=4,_.storage=4):b.isVector2?(_.boundary=8,_.storage=8):b.isVector3||b.isColor?(_.boundary=16,_.storage=12):b.isVector4?(_.boundary=16,_.storage=16):b.isMatrix3?(_.boundary=48,_.storage=48):b.isMatrix4?(_.boundary=64,_.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),_}function g(b){let _=b.target;_.removeEventListener("dispose",g);let y=o.indexOf(_.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function p(){for(let b in s)n.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}var Ca=class{constructor(t={}){let{canvas:e=Od(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;let m=new Uint32Array(4),x=new Int32Array(4),g=null,p=null,b=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=We,this.toneMapping=cs,this.toneMappingExposure=1;let y=this,L=!1,R=0,C=0,P=null,E=-1,S=null,O=new Le,V=new Le,z=null,X=new Zt(0),lt=0,j=e.width,gt=e.height,J=1,Ct=null,It=null,Ot=new Le(0,0,j,gt),ie=new Le(0,0,j,gt),ye=!1,it=new so,bt=!1,kt=!1,Mt=new de,Yt=new de,re=new N,jt=new Le,ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},k=!1;function st(){return P===null?J:1}let T=i;function ft(A,D){return e.getContext(A,D)}try{let A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${v0}`),e.addEventListener("webglcontextlost",ct,!1),e.addEventListener("webglcontextrestored",Lt,!1),e.addEventListener("webglcontextcreationerror",Nt,!1),T===null){let D="webgl2";if(T=ft(D,A),T===null)throw ft(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let G,ut,ot,At,dt,I,M,H,tt,ht,at,zt,Pt,Ft,ne,pt,Bt,te,oe,wt,ge,le,Se,F;function St(){G=new q1(T),G.init(),le=new T2(T,G),ut=new H1(T,G,t,le),ot=new M2(T,G),ut.reverseDepthBuffer&&u&&ot.buffers.depth.setReversed(!0),At=new K1(T),dt=new c2,I=new E2(T,G,ot,dt,ut,le,At),M=new V1(y),H=new Y1(y),tt=new ip(T),Se=new B1(T,tt),ht=new $1(T,tt,At,Se),at=new j1(T,ht,tt,At),oe=new J1(T,ut,I),pt=new G1(dt),zt=new l2(y,M,H,G,ut,Se,pt),Pt=new I2(y,dt),Ft=new f2,ne=new x2(G),te=new k1(y,M,H,ot,at,d,l),Bt=new v2(y,at,ut),F=new P2(T,At,ut,ot),wt=new z1(T,G,At),ge=new Z1(T,G,At),At.programs=zt.programs,y.capabilities=ut,y.extensions=G,y.properties=dt,y.renderLists=Ft,y.shadowMap=Bt,y.state=ot,y.info=At}St();let K=new Kc(y,T);this.xr=K,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){let A=G.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=G.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(A){A!==void 0&&(J=A,this.setSize(j,gt,!1))},this.getSize=function(A){return A.set(j,gt)},this.setSize=function(A,D,q=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=A,gt=D,e.width=Math.floor(A*J),e.height=Math.floor(D*J),q===!0&&(e.style.width=A+"px",e.style.height=D+"px"),this.setViewport(0,0,A,D)},this.getDrawingBufferSize=function(A){return A.set(j*J,gt*J).floor()},this.setDrawingBufferSize=function(A,D,q){j=A,gt=D,J=q,e.width=Math.floor(A*q),e.height=Math.floor(D*q),this.setViewport(0,0,A,D)},this.getCurrentViewport=function(A){return A.copy(O)},this.getViewport=function(A){return A.copy(Ot)},this.setViewport=function(A,D,q,$){A.isVector4?Ot.set(A.x,A.y,A.z,A.w):Ot.set(A,D,q,$),ot.viewport(O.copy(Ot).multiplyScalar(J).round())},this.getScissor=function(A){return A.copy(ie)},this.setScissor=function(A,D,q,$){A.isVector4?ie.set(A.x,A.y,A.z,A.w):ie.set(A,D,q,$),ot.scissor(V.copy(ie).multiplyScalar(J).round())},this.getScissorTest=function(){return ye},this.setScissorTest=function(A){ot.setScissorTest(ye=A)},this.setOpaqueSort=function(A){Ct=A},this.setTransparentSort=function(A){It=A},this.getClearColor=function(A){return A.copy(te.getClearColor())},this.setClearColor=function(){te.setClearColor.apply(te,arguments)},this.getClearAlpha=function(){return te.getClearAlpha()},this.setClearAlpha=function(){te.setClearAlpha.apply(te,arguments)},this.clear=function(A=!0,D=!0,q=!0){let $=0;if(A){let B=!1;if(P!==null){let Et=P.texture.format;B=Et===C0||Et===R0||Et===A0}if(B){let Et=P.texture.type,Dt=Et===Xi||Et===Ts||Et===no||Et===fr||Et===E0||Et===T0,Xt=te.getClearColor(),qt=te.getClearAlpha(),ce=Xt.r,pe=Xt.g,Gt=Xt.b;Dt?(m[0]=ce,m[1]=pe,m[2]=Gt,m[3]=qt,T.clearBufferuiv(T.COLOR,0,m)):(x[0]=ce,x[1]=pe,x[2]=Gt,x[3]=qt,T.clearBufferiv(T.COLOR,0,x))}else $|=T.COLOR_BUFFER_BIT}D&&($|=T.DEPTH_BUFFER_BIT),q&&($|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ct,!1),e.removeEventListener("webglcontextrestored",Lt,!1),e.removeEventListener("webglcontextcreationerror",Nt,!1),Ft.dispose(),ne.dispose(),dt.dispose(),M.dispose(),H.dispose(),at.dispose(),Se.dispose(),F.dispose(),zt.dispose(),K.dispose(),K.removeEventListener("sessionstart",ds),K.removeEventListener("sessionend",Dr),Ke.stop()};function ct(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function Lt(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;let A=At.autoReset,D=Bt.enabled,q=Bt.autoUpdate,$=Bt.needsUpdate,B=Bt.type;St(),At.autoReset=A,Bt.enabled=D,Bt.autoUpdate=q,Bt.needsUpdate=$,Bt.type=B}function Nt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ae(A){let D=A.target;D.removeEventListener("dispose",ae),xe(D)}function xe(A){tn(A),dt.remove(A)}function tn(A){let D=dt.get(A).programs;D!==void 0&&(D.forEach(function(q){zt.releaseProgram(q)}),A.isShaderMaterial&&zt.releaseShaderCache(A))}this.renderBufferDirect=function(A,D,q,$,B,Et){D===null&&(D=ve);let Dt=B.isMesh&&B.matrixWorld.determinant()<0,Xt=Os(A,D,q,$,B);ot.setMaterial($,Dt);let qt=q.index,ce=1;if($.wireframe===!0){if(qt=ht.getWireframeAttribute(q),qt===void 0)return;ce=2}let pe=q.drawRange,Gt=q.attributes.position,Te=pe.start*ce,Ie=(pe.start+pe.count)*ce;Et!==null&&(Te=Math.max(Te,Et.start*ce),Ie=Math.min(Ie,(Et.start+Et.count)*ce)),qt!==null?(Te=Math.max(Te,0),Ie=Math.min(Ie,qt.count)):Gt!=null&&(Te=Math.max(Te,0),Ie=Math.min(Ie,Gt.count));let Fe=Ie-Te;if(Fe<0||Fe===1/0)return;Se.setup(B,$,Xt,q,qt);let bn,Pe=wt;if(qt!==null&&(bn=tt.get(qt),Pe=ge,Pe.setIndex(bn)),B.isMesh)$.wireframe===!0?(ot.setLineWidth($.wireframeLinewidth*st()),Pe.setMode(T.LINES)):Pe.setMode(T.TRIANGLES);else if(B.isLine){let $t=$.linewidth;$t===void 0&&($t=1),ot.setLineWidth($t*st()),B.isLineSegments?Pe.setMode(T.LINES):B.isLineLoop?Pe.setMode(T.LINE_LOOP):Pe.setMode(T.LINE_STRIP)}else B.isPoints?Pe.setMode(T.POINTS):B.isSprite&&Pe.setMode(T.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)Pe.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(G.get("WEBGL_multi_draw"))Pe.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{let $t=B._multiDrawStarts,Nn=B._multiDrawCounts,Ae=B._multiDrawCount,zn=qt?tt.get(qt).bytesPerElement:1,ts=dt.get($).currentProgram.getUniforms();for(let wn=0;wn<Ae;wn++)ts.setValue(T,"_gl_DrawID",wn),Pe.render($t[wn]/zn,Nn[wn])}else if(B.isInstancedMesh)Pe.renderInstances(Te,Fe,B.count);else if(q.isInstancedBufferGeometry){let $t=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Nn=Math.min(q.instanceCount,$t);Pe.renderInstances(Te,Fe,Nn)}else Pe.render(Te,Fe)};function Ee(A,D,q){A.transparent===!0&&A.side===Ce&&A.forceSinglePass===!1?(A.side=un,A.needsUpdate=!0,yi(A,D,q),A.side=hs,A.needsUpdate=!0,yi(A,D,q),A.side=Ce):yi(A,D,q)}this.compile=function(A,D,q=null){q===null&&(q=A),p=ne.get(q),p.init(D),_.push(p),q.traverseVisible(function(B){B.isLight&&B.layers.test(D.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),A!==q&&A.traverseVisible(function(B){B.isLight&&B.layers.test(D.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),p.setupLights();let $=new Set;return A.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;let Et=B.material;if(Et)if(Array.isArray(Et))for(let Dt=0;Dt<Et.length;Dt++){let Xt=Et[Dt];Ee(Xt,q,B),$.add(Xt)}else Ee(Et,q,B),$.add(Et)}),_.pop(),p=null,$},this.compileAsync=function(A,D,q=null){let $=this.compile(A,D,q);return new Promise(B=>{function Et(){if($.forEach(function(Dt){dt.get(Dt).currentProgram.isReady()&&$.delete(Dt)}),$.size===0){B(A);return}setTimeout(Et,10)}G.get("KHR_parallel_shader_compile")!==null?Et():setTimeout(Et,10)})};let Oe=null;function Tn(A){Oe&&Oe(A)}function ds(){Ke.stop()}function Dr(){Ke.start()}let Ke=new Vf;Ke.setAnimationLoop(Tn),typeof self<"u"&&Ke.setContext(self),this.setAnimationLoop=function(A){Oe=A,K.setAnimationLoop(A),A===null?Ke.stop():Ke.start()},K.addEventListener("sessionstart",ds),K.addEventListener("sessionend",Dr),this.render=function(A,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(D),D=K.getCamera()),A.isScene===!0&&A.onBeforeRender(y,A,D,P),p=ne.get(A,_.length),p.init(D),_.push(p),Yt.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),it.setFromProjectionMatrix(Yt),kt=this.localClippingEnabled,bt=pt.init(this.clippingPlanes,kt),g=Ft.get(A,b.length),g.init(),b.push(g),K.enabled===!0&&K.isPresenting===!0){let Et=y.xr.getDepthSensingMesh();Et!==null&&Qn(Et,D,-1/0,y.sortObjects)}Qn(A,D,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(Ct,It),k=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,k&&te.addToRenderList(g,A),this.info.render.frame++,bt===!0&&pt.beginShadows();let q=p.state.shadowsArray;Bt.render(q,A,D),bt===!0&&pt.endShadows(),this.info.autoReset===!0&&this.info.reset();let $=g.opaque,B=g.transmissive;if(p.setupLights(),D.isArrayCamera){let Et=D.cameras;if(B.length>0)for(let Dt=0,Xt=Et.length;Dt<Xt;Dt++){let qt=Et[Dt];Qi($,B,A,qt)}k&&te.render(A);for(let Dt=0,Xt=Et.length;Dt<Xt;Dt++){let qt=Et[Dt];Ns(g,A,qt,qt.viewport)}}else B.length>0&&Qi($,B,A,D),k&&te.render(A),Ns(g,A,D);P!==null&&(I.updateMultisampleRenderTarget(P),I.updateRenderTargetMipmap(P)),A.isScene===!0&&A.onAfterRender(y,A,D),Se.resetDefaultState(),E=-1,S=null,_.pop(),_.length>0?(p=_[_.length-1],bt===!0&&pt.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,b.pop(),b.length>0?g=b[b.length-1]:g=null};function Qn(A,D,q,$){if(A.visible===!1)return;if(A.layers.test(D.layers)){if(A.isGroup)q=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(D);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||it.intersectsSprite(A)){$&&jt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Yt);let Dt=at.update(A),Xt=A.material;Xt.visible&&g.push(A,Dt,Xt,q,jt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||it.intersectsObject(A))){let Dt=at.update(A),Xt=A.material;if($&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),jt.copy(A.boundingSphere.center)):(Dt.boundingSphere===null&&Dt.computeBoundingSphere(),jt.copy(Dt.boundingSphere.center)),jt.applyMatrix4(A.matrixWorld).applyMatrix4(Yt)),Array.isArray(Xt)){let qt=Dt.groups;for(let ce=0,pe=qt.length;ce<pe;ce++){let Gt=qt[ce],Te=Xt[Gt.materialIndex];Te&&Te.visible&&g.push(A,Dt,Te,q,jt.z,Gt)}}else Xt.visible&&g.push(A,Dt,Xt,q,jt.z,null)}}let Et=A.children;for(let Dt=0,Xt=Et.length;Dt<Xt;Dt++)Qn(Et[Dt],D,q,$)}function Ns(A,D,q,$){let B=A.opaque,Et=A.transmissive,Dt=A.transparent;p.setupLightsView(q),bt===!0&&pt.setGlobalState(y.clippingPlanes,q),$&&ot.viewport(O.copy($)),B.length>0&&Ve(B,D,q),Et.length>0&&Ve(Et,D,q),Dt.length>0&&Ve(Dt,D,q),ot.buffers.depth.setTest(!0),ot.buffers.depth.setMask(!0),ot.buffers.color.setMask(!0),ot.setPolygonOffset(!1)}function Qi(A,D,q,$){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[$.id]===void 0&&(p.state.transmissionRenderTarget[$.id]=new Yi(1,1,{generateMipmaps:!0,type:G.has("EXT_color_buffer_half_float")||G.has("EXT_color_buffer_float")?_o:Xi,minFilter:zi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Re.workingColorSpace}));let Et=p.state.transmissionRenderTarget[$.id],Dt=$.viewport||O;Et.setSize(Dt.z,Dt.w);let Xt=y.getRenderTarget();y.setRenderTarget(Et),y.getClearColor(X),lt=y.getClearAlpha(),lt<1&&y.setClearColor(16777215,.5),y.clear(),k&&te.render(q);let qt=y.toneMapping;y.toneMapping=cs;let ce=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),p.setupLightsView($),bt===!0&&pt.setGlobalState(y.clippingPlanes,$),Ve(A,q,$),I.updateMultisampleRenderTarget(Et),I.updateRenderTargetMipmap(Et),G.has("WEBGL_multisampled_render_to_texture")===!1){let pe=!1;for(let Gt=0,Te=D.length;Gt<Te;Gt++){let Ie=D[Gt],Fe=Ie.object,bn=Ie.geometry,Pe=Ie.material,$t=Ie.group;if(Pe.side===Ce&&Fe.layers.test($.layers)){let Nn=Pe.side;Pe.side=un,Pe.needsUpdate=!0,Us(Fe,q,$,bn,Pe,$t),Pe.side=Nn,Pe.needsUpdate=!0,pe=!0}}pe===!0&&(I.updateMultisampleRenderTarget(Et),I.updateRenderTargetMipmap(Et))}y.setRenderTarget(Xt),y.setClearColor(X,lt),ce!==void 0&&($.viewport=ce),y.toneMapping=qt}function Ve(A,D,q){let $=D.isScene===!0?D.overrideMaterial:null;for(let B=0,Et=A.length;B<Et;B++){let Dt=A[B],Xt=Dt.object,qt=Dt.geometry,ce=$===null?Dt.material:$,pe=Dt.group;Xt.layers.test(q.layers)&&Us(Xt,D,q,qt,ce,pe)}}function Us(A,D,q,$,B,Et){A.onBeforeRender(y,D,q,$,B,Et),A.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),B.onBeforeRender(y,D,q,$,A,Et),B.transparent===!0&&B.side===Ce&&B.forceSinglePass===!1?(B.side=un,B.needsUpdate=!0,y.renderBufferDirect(q,D,$,B,A,Et),B.side=hs,B.needsUpdate=!0,y.renderBufferDirect(q,D,$,B,A,Et),B.side=Ce):y.renderBufferDirect(q,D,$,B,A,Et),A.onAfterRender(y,D,q,$,B,Et)}function yi(A,D,q){D.isScene!==!0&&(D=ve);let $=dt.get(A),B=p.state.lights,Et=p.state.shadowsArray,Dt=B.state.version,Xt=zt.getParameters(A,B.state,Et,D,q),qt=zt.getProgramCacheKey(Xt),ce=$.programs;$.environment=A.isMeshStandardMaterial?D.environment:null,$.fog=D.fog,$.envMap=(A.isMeshStandardMaterial?H:M).get(A.envMap||$.environment),$.envMapRotation=$.environment!==null&&A.envMap===null?D.environmentRotation:A.envMapRotation,ce===void 0&&(A.addEventListener("dispose",ae),ce=new Map,$.programs=ce);let pe=ce.get(qt);if(pe!==void 0){if($.currentProgram===pe&&$.lightsStateVersion===Dt)return Fr(A,Xt),pe}else Xt.uniforms=zt.getUniforms(A),A.onBeforeCompile(Xt,y),pe=zt.acquireProgram(Xt,qt),ce.set(qt,pe),$.uniforms=Xt.uniforms;let Gt=$.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Gt.clippingPlanes=pt.uniform),Fr(A,Xt),$.needsLights=hl(A),$.lightsStateVersion=Dt,$.needsLights&&(Gt.ambientLightColor.value=B.state.ambient,Gt.lightProbe.value=B.state.probe,Gt.directionalLights.value=B.state.directional,Gt.directionalLightShadows.value=B.state.directionalShadow,Gt.spotLights.value=B.state.spot,Gt.spotLightShadows.value=B.state.spotShadow,Gt.rectAreaLights.value=B.state.rectArea,Gt.ltc_1.value=B.state.rectAreaLTC1,Gt.ltc_2.value=B.state.rectAreaLTC2,Gt.pointLights.value=B.state.point,Gt.pointLightShadows.value=B.state.pointShadow,Gt.hemisphereLights.value=B.state.hemi,Gt.directionalShadowMap.value=B.state.directionalShadowMap,Gt.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Gt.spotShadowMap.value=B.state.spotShadowMap,Gt.spotLightMatrix.value=B.state.spotLightMatrix,Gt.spotLightMap.value=B.state.spotLightMap,Gt.pointShadowMap.value=B.state.pointShadowMap,Gt.pointShadowMatrix.value=B.state.pointShadowMatrix),$.currentProgram=pe,$.uniformsList=null,pe}function Bn(A){if(A.uniformsList===null){let D=A.currentProgram.getUniforms();A.uniformsList=ar.seqWithValue(D.seq,A.uniforms)}return A.uniformsList}function Fr(A,D){let q=dt.get(A);q.outputColorSpace=D.outputColorSpace,q.batching=D.batching,q.batchingColor=D.batchingColor,q.instancing=D.instancing,q.instancingColor=D.instancingColor,q.instancingMorph=D.instancingMorph,q.skinning=D.skinning,q.morphTargets=D.morphTargets,q.morphNormals=D.morphNormals,q.morphColors=D.morphColors,q.morphTargetsCount=D.morphTargetsCount,q.numClippingPlanes=D.numClippingPlanes,q.numIntersection=D.numClipIntersection,q.vertexAlphas=D.vertexAlphas,q.vertexTangents=D.vertexTangents,q.toneMapping=D.toneMapping}function Os(A,D,q,$,B){D.isScene!==!0&&(D=ve),I.resetTextureUnits();let Et=D.fog,Dt=$.isMeshStandardMaterial?D.environment:null,Xt=P===null?y.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Cr,qt=($.isMeshStandardMaterial?H:M).get($.envMap||Dt),ce=$.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pe=!!q.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Gt=!!q.morphAttributes.position,Te=!!q.morphAttributes.normal,Ie=!!q.morphAttributes.color,Fe=cs;$.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Fe=y.toneMapping);let bn=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Pe=bn!==void 0?bn.length:0,$t=dt.get($),Nn=p.state.lights;if(bt===!0&&(kt===!0||A!==S)){let mn=A===S&&$.id===E;pt.setState($,A,mn)}let Ae=!1;$.version===$t.__version?($t.needsLights&&$t.lightsStateVersion!==Nn.state.version||$t.outputColorSpace!==Xt||B.isBatchedMesh&&$t.batching===!1||!B.isBatchedMesh&&$t.batching===!0||B.isBatchedMesh&&$t.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&$t.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&$t.instancing===!1||!B.isInstancedMesh&&$t.instancing===!0||B.isSkinnedMesh&&$t.skinning===!1||!B.isSkinnedMesh&&$t.skinning===!0||B.isInstancedMesh&&$t.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&$t.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&$t.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&$t.instancingMorph===!1&&B.morphTexture!==null||$t.envMap!==qt||$.fog===!0&&$t.fog!==Et||$t.numClippingPlanes!==void 0&&($t.numClippingPlanes!==pt.numPlanes||$t.numIntersection!==pt.numIntersection)||$t.vertexAlphas!==ce||$t.vertexTangents!==pe||$t.morphTargets!==Gt||$t.morphNormals!==Te||$t.morphColors!==Ie||$t.toneMapping!==Fe||$t.morphTargetsCount!==Pe)&&(Ae=!0):(Ae=!0,$t.__version=$.version);let zn=$t.currentProgram;Ae===!0&&(zn=yi($,D,B));let ts=!1,wn=!1,ms=!1,He=zn.getUniforms(),ti=$t.uniforms;if(ot.useProgram(zn.program)&&(ts=!0,wn=!0,ms=!0),$.id!==E&&(E=$.id,wn=!0),ts||S!==A){ot.buffers.depth.getReversed()?(Mt.copy(A.projectionMatrix),Fd(Mt),kd(Mt),He.setValue(T,"projectionMatrix",Mt)):He.setValue(T,"projectionMatrix",A.projectionMatrix),He.setValue(T,"viewMatrix",A.matrixWorldInverse);let Gn=He.map.cameraPosition;Gn!==void 0&&Gn.setValue(T,re.setFromMatrixPosition(A.matrixWorld)),ut.logarithmicDepthBuffer&&He.setValue(T,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&He.setValue(T,"isOrthographic",A.isOrthographicCamera===!0),S!==A&&(S=A,wn=!0,ms=!0)}if(B.isSkinnedMesh){He.setOptional(T,B,"bindMatrix"),He.setOptional(T,B,"bindMatrixInverse");let mn=B.skeleton;mn&&(mn.boneTexture===null&&mn.computeBoneTexture(),He.setValue(T,"boneTexture",mn.boneTexture,I))}B.isBatchedMesh&&(He.setOptional(T,B,"batchingTexture"),He.setValue(T,"batchingTexture",B._matricesTexture,I),He.setOptional(T,B,"batchingIdTexture"),He.setValue(T,"batchingIdTexture",B._indirectTexture,I),He.setOptional(T,B,"batchingColorTexture"),B._colorsTexture!==null&&He.setValue(T,"batchingColorTexture",B._colorsTexture,I));let Hn=q.morphAttributes;if((Hn.position!==void 0||Hn.normal!==void 0||Hn.color!==void 0)&&oe.update(B,q,zn),(wn||$t.receiveShadow!==B.receiveShadow)&&($t.receiveShadow=B.receiveShadow,He.setValue(T,"receiveShadow",B.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(ti.envMap.value=qt,ti.flipEnvMap.value=qt.isCubeTexture&&qt.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&D.environment!==null&&(ti.envMapIntensity.value=D.environmentIntensity),wn&&(He.setValue(T,"toneMappingExposure",y.toneMappingExposure),$t.needsLights&&ps(ti,ms),Et&&$.fog===!0&&Pt.refreshFogUniforms(ti,Et),Pt.refreshMaterialUniforms(ti,$,J,gt,p.state.transmissionRenderTarget[A.id]),ar.upload(T,Bn($t),ti,I)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(ar.upload(T,Bn($t),ti,I),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&He.setValue(T,"center",B.center),He.setValue(T,"modelViewMatrix",B.modelViewMatrix),He.setValue(T,"normalMatrix",B.normalMatrix),He.setValue(T,"modelMatrix",B.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){let mn=$.uniformsGroups;for(let Gn=0,Un=mn.length;Gn<Un;Gn++){let es=mn[Gn];F.update(es,zn),F.bind(es,zn)}}return zn}function ps(A,D){A.ambientLightColor.needsUpdate=D,A.lightProbe.needsUpdate=D,A.directionalLights.needsUpdate=D,A.directionalLightShadows.needsUpdate=D,A.pointLights.needsUpdate=D,A.pointLightShadows.needsUpdate=D,A.spotLights.needsUpdate=D,A.spotLightShadows.needsUpdate=D,A.rectAreaLights.needsUpdate=D,A.hemisphereLights.needsUpdate=D}function hl(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(A,D,q){dt.get(A.texture).__webglTexture=D,dt.get(A.depthTexture).__webglTexture=q;let $=dt.get(A);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=q===void 0,$.__autoAllocateDepthBuffer||G.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,D){let q=dt.get(A);q.__webglFramebuffer=D,q.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(A,D=0,q=0){P=A,R=D,C=q;let $=!0,B=null,Et=!1,Dt=!1;if(A){let qt=dt.get(A);if(qt.__useDefaultFramebuffer!==void 0)ot.bindFramebuffer(T.FRAMEBUFFER,null),$=!1;else if(qt.__webglFramebuffer===void 0)I.setupRenderTarget(A);else if(qt.__hasExternalTextures)I.rebindTextures(A,dt.get(A.texture).__webglTexture,dt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let Gt=A.depthTexture;if(qt.__boundDepthTexture!==Gt){if(Gt!==null&&dt.has(Gt)&&(A.width!==Gt.image.width||A.height!==Gt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(A)}}let ce=A.texture;(ce.isData3DTexture||ce.isDataArrayTexture||ce.isCompressedArrayTexture)&&(Dt=!0);let pe=dt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(pe[D])?B=pe[D][q]:B=pe[D],Et=!0):A.samples>0&&I.useMultisampledRTT(A)===!1?B=dt.get(A).__webglMultisampledFramebuffer:Array.isArray(pe)?B=pe[q]:B=pe,O.copy(A.viewport),V.copy(A.scissor),z=A.scissorTest}else O.copy(Ot).multiplyScalar(J).floor(),V.copy(ie).multiplyScalar(J).floor(),z=ye;if(ot.bindFramebuffer(T.FRAMEBUFFER,B)&&$&&ot.drawBuffers(A,B),ot.viewport(O),ot.scissor(V),ot.setScissorTest(z),Et){let qt=dt.get(A.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+D,qt.__webglTexture,q)}else if(Dt){let qt=dt.get(A.texture),ce=D||0;T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,qt.__webglTexture,q||0,ce)}E=-1},this.readRenderTargetPixels=function(A,D,q,$,B,Et,Dt){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xt=dt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Dt!==void 0&&(Xt=Xt[Dt]),Xt){ot.bindFramebuffer(T.FRAMEBUFFER,Xt);try{let qt=A.texture,ce=qt.format,pe=qt.type;if(!ut.textureFormatReadable(ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ut.textureTypeReadable(pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=A.width-$&&q>=0&&q<=A.height-B&&T.readPixels(D,q,$,B,le.convert(ce),le.convert(pe),Et)}finally{let qt=P!==null?dt.get(P).__webglFramebuffer:null;ot.bindFramebuffer(T.FRAMEBUFFER,qt)}}},this.readRenderTargetPixelsAsync=async function(A,D,q,$,B,Et,Dt){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xt=dt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Dt!==void 0&&(Xt=Xt[Dt]),Xt){let qt=A.texture,ce=qt.format,pe=qt.type;if(!ut.textureFormatReadable(ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ut.textureTypeReadable(pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=A.width-$&&q>=0&&q<=A.height-B){ot.bindFramebuffer(T.FRAMEBUFFER,Xt);let Gt=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,Gt),T.bufferData(T.PIXEL_PACK_BUFFER,Et.byteLength,T.STREAM_READ),T.readPixels(D,q,$,B,le.convert(ce),le.convert(pe),0);let Te=P!==null?dt.get(P).__webglFramebuffer:null;ot.bindFramebuffer(T.FRAMEBUFFER,Te);let Ie=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await Dd(T,Ie,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,Gt),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,Et),T.deleteBuffer(Gt),T.deleteSync(Ie),Et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,D=null,q=0){A.isTexture!==!0&&(Zr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,A=arguments[1]);let $=Math.pow(2,-q),B=Math.floor(A.image.width*$),Et=Math.floor(A.image.height*$),Dt=D!==null?D.x:0,Xt=D!==null?D.y:0;I.setTexture2D(A,0),T.copyTexSubImage2D(T.TEXTURE_2D,q,0,0,Dt,Xt,B,Et),ot.unbindTexture()},this.copyTextureToTexture=function(A,D,q=null,$=null,B=0){A.isTexture!==!0&&(Zr("WebGLRenderer: copyTextureToTexture function signature has changed."),$=arguments[0]||null,A=arguments[1],D=arguments[2],B=arguments[3]||0,q=null);let Et,Dt,Xt,qt,ce,pe,Gt,Te,Ie,Fe=A.isCompressedTexture?A.mipmaps[B]:A.image;q!==null?(Et=q.max.x-q.min.x,Dt=q.max.y-q.min.y,Xt=q.isBox3?q.max.z-q.min.z:1,qt=q.min.x,ce=q.min.y,pe=q.isBox3?q.min.z:0):(Et=Fe.width,Dt=Fe.height,Xt=Fe.depth||1,qt=0,ce=0,pe=0),$!==null?(Gt=$.x,Te=$.y,Ie=$.z):(Gt=0,Te=0,Ie=0);let bn=le.convert(D.format),Pe=le.convert(D.type),$t;D.isData3DTexture?(I.setTexture3D(D,0),$t=T.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(I.setTexture2DArray(D,0),$t=T.TEXTURE_2D_ARRAY):(I.setTexture2D(D,0),$t=T.TEXTURE_2D),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,D.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,D.unpackAlignment);let Nn=T.getParameter(T.UNPACK_ROW_LENGTH),Ae=T.getParameter(T.UNPACK_IMAGE_HEIGHT),zn=T.getParameter(T.UNPACK_SKIP_PIXELS),ts=T.getParameter(T.UNPACK_SKIP_ROWS),wn=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,Fe.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,Fe.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,qt),T.pixelStorei(T.UNPACK_SKIP_ROWS,ce),T.pixelStorei(T.UNPACK_SKIP_IMAGES,pe);let ms=A.isDataArrayTexture||A.isData3DTexture,He=D.isDataArrayTexture||D.isData3DTexture;if(A.isRenderTargetTexture||A.isDepthTexture){let ti=dt.get(A),Hn=dt.get(D),mn=dt.get(ti.__renderTarget),Gn=dt.get(Hn.__renderTarget);ot.bindFramebuffer(T.READ_FRAMEBUFFER,mn.__webglFramebuffer),ot.bindFramebuffer(T.DRAW_FRAMEBUFFER,Gn.__webglFramebuffer);for(let Un=0;Un<Xt;Un++)ms&&T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,dt.get(A).__webglTexture,B,pe+Un),A.isDepthTexture?(He&&T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,dt.get(D).__webglTexture,B,Ie+Un),T.blitFramebuffer(qt,ce,Et,Dt,Gt,Te,Et,Dt,T.DEPTH_BUFFER_BIT,T.NEAREST)):He?T.copyTexSubImage3D($t,B,Gt,Te,Ie+Un,qt,ce,Et,Dt):T.copyTexSubImage2D($t,B,Gt,Te,Ie+Un,qt,ce,Et,Dt);ot.bindFramebuffer(T.READ_FRAMEBUFFER,null),ot.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else He?A.isDataTexture||A.isData3DTexture?T.texSubImage3D($t,B,Gt,Te,Ie,Et,Dt,Xt,bn,Pe,Fe.data):D.isCompressedArrayTexture?T.compressedTexSubImage3D($t,B,Gt,Te,Ie,Et,Dt,Xt,bn,Fe.data):T.texSubImage3D($t,B,Gt,Te,Ie,Et,Dt,Xt,bn,Pe,Fe):A.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,B,Gt,Te,Et,Dt,bn,Pe,Fe.data):A.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,B,Gt,Te,Fe.width,Fe.height,bn,Fe.data):T.texSubImage2D(T.TEXTURE_2D,B,Gt,Te,Et,Dt,bn,Pe,Fe);T.pixelStorei(T.UNPACK_ROW_LENGTH,Nn),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,Ae),T.pixelStorei(T.UNPACK_SKIP_PIXELS,zn),T.pixelStorei(T.UNPACK_SKIP_ROWS,ts),T.pixelStorei(T.UNPACK_SKIP_IMAGES,wn),B===0&&D.generateMipmaps&&T.generateMipmap($t),ot.unbindTexture()},this.copyTextureToTexture3D=function(A,D,q=null,$=null,B=0){return A.isTexture!==!0&&(Zr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),q=arguments[0]||null,$=arguments[1]||null,A=arguments[2],D=arguments[3],B=arguments[4]||0),Zr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,D,q,$,B)},this.initRenderTarget=function(A){dt.get(A).__webglFramebuffer===void 0&&I.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?I.setTextureCube(A,0):A.isData3DTexture?I.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?I.setTexture2DArray(A,0):I.setTexture2D(A,0),ot.unbindTexture()},this.resetState=function(){R=0,C=0,P=null,ot.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Re._getDrawingBufferColorSpace(t),e.unpackColorSpace=Re._getUnpackColorSpace()}},yr=class n{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Zt(t),this.density=e}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var vr=class extends nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new In,this.environmentIntensity=1,this.environmentRotation=new In,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Ia=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Nc,this.updateRanges=[],this.version=0,this.uuid=Si()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Si()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Si()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},An=new N,ro=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)An.fromBufferAttribute(this,e),An.applyMatrix4(t),this.setXYZ(e,An.x,An.y,An.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)An.fromBufferAttribute(this,e),An.applyNormalMatrix(t),this.setXYZ(e,An.x,An.y,An.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)An.fromBufferAttribute(this,e),An.transformDirection(t),this.setXYZ(e,An.x,An.y,An.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=di(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=De(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=De(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=De(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=De(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=De(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=di(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=di(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=di(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=di(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=De(e,this.array),i=De(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=De(e,this.array),i=De(i,this.array),s=De(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=De(e,this.array),i=De(i,this.array),s=De(s,this.array),r=De(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ye(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},br=class extends Ei{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Zt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ks,Gr=new N,Js=new N,js=new N,Qs=new vt,Vr=new vt,$f=new de,ea=new N,Wr=new N,na=new N,lf=new vt,zl=new vt,cf=new vt,oo=class extends nn{constructor(t=new br){if(super(),this.isSprite=!0,this.type="Sprite",Ks===void 0){Ks=new Ue;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Ia(e,5);Ks.setIndex([0,1,2,0,2,3]),Ks.setAttribute("position",new ro(i,3,0,!1)),Ks.setAttribute("uv",new ro(i,2,3,!1))}this.geometry=Ks,this.material=t,this.center=new vt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Js.setFromMatrixScale(this.matrixWorld),$f.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),js.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Js.multiplyScalar(-js.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;ia(ea.set(-.5,-.5,0),js,o,Js,s,r),ia(Wr.set(.5,-.5,0),js,o,Js,s,r),ia(na.set(.5,.5,0),js,o,Js,s,r),lf.set(0,0),zl.set(1,0),cf.set(1,1);let a=t.ray.intersectTriangle(ea,Wr,na,!1,Gr);if(a===null&&(ia(Wr.set(-.5,.5,0),js,o,Js,s,r),zl.set(0,1),a=t.ray.intersectTriangle(ea,na,Wr,!1,Gr),a===null))return;let l=t.ray.origin.distanceTo(Gr);l<t.near||l>t.far||e.push({distance:l,point:Gr.clone(),uv:ki.getInterpolation(Gr,ea,Wr,na,lf,zl,cf,new vt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function ia(n,t,e,i,s,r){Qs.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(Vr.x=r*Qs.x-s*Qs.y,Vr.y=s*Qs.x+r*Qs.y):Vr.copy(Qs),n.copy(t),n.x+=Vr.x,n.y+=Vr.y,n.applyMatrix4($f)}var Jc=class extends On{constructor(t=null,e=1,i=1,s,r,o,a,l,c=qn,h=qn,f,u){super(null,o,a,l,c,h,s,r,f,u),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ao=class extends Ye{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},tr=new de,hf=new de,sa=[],ff=new $n,L2=new de,Xr=new Vt,Yr=new qi,Pa=class extends Vt{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ao(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,L2)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new $n),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,tr),ff.copy(t.boundingBox).applyMatrix4(tr),this.boundingBox.union(ff)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new qi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,tr),Yr.copy(t.boundingSphere).applyMatrix4(tr),this.boundingSphere.union(Yr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(t,e){let i=this.matrixWorld,s=this.count;if(Xr.geometry=this.geometry,Xr.material=this.material,Xr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Yr.copy(this.boundingSphere),Yr.applyMatrix4(i),t.ray.intersectsSphere(Yr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,tr),hf.multiplyMatrices(i,tr),Xr.matrixWorld=hf,Xr.raycast(t,sa);for(let o=0,a=sa.length;o<a;o++){let l=sa[o];l.instanceId=r,l.object=this,e.push(l)}sa.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new ao(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Jc(new Float32Array(s*this.count),s,this.count,w0,Mi));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Mr=class extends Ei{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Zt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},La=new N,Na=new N,uf=new de,qr=new pr,ra=new qi,Hl=new N,df=new N,jc=class extends nn{constructor(t=new Ue,e=new Mr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)La.fromBufferAttribute(e,s-1),Na.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=La.distanceTo(Na);t.setAttribute("lineDistance",new ue(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ra.copy(i.boundingSphere),ra.applyMatrix4(s),ra.radius+=r,t.ray.intersectsSphere(ra)===!1)return;uf.copy(s).invert(),qr.copy(t.ray).applyMatrix4(uf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){let d=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let x=d,g=m-1;x<g;x+=c){let p=h.getX(x),b=h.getX(x+1),_=oa(this,t,qr,l,p,b);_&&e.push(_)}if(this.isLineLoop){let x=h.getX(m-1),g=h.getX(d),p=oa(this,t,qr,l,x,g);p&&e.push(p)}}else{let d=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let x=d,g=m-1;x<g;x+=c){let p=oa(this,t,qr,l,x,x+1);p&&e.push(p)}if(this.isLineLoop){let x=oa(this,t,qr,l,m-1,d);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function oa(n,t,e,i,s,r){let o=n.geometry.attributes.position;if(La.fromBufferAttribute(o,s),Na.fromBufferAttribute(o,r),e.distanceSqToSegment(La,Na,Hl,df)>i)return;Hl.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(Hl);if(!(l<t.near||l>t.far))return{distance:l,point:df.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}var pf=new N,mf=new N,Sr=class extends jc{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)pf.fromBufferAttribute(e,s),mf.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+pf.distanceTo(mf);t.setAttribute("lineDistance",new ue(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Qc=class extends Ei{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Zt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},gf=new de,t0=new pr,aa=new qi,la=new N,Ua=class extends nn{constructor(t=new Ue,e=new Qc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),aa.copy(i.boundingSphere),aa.applyMatrix4(s),aa.radius+=r,t.ray.intersectsSphere(aa)===!1)return;gf.copy(s).invert(),t0.copy(t.ray).applyMatrix4(gf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){let u=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let m=u,x=d;m<x;m++){let g=c.getX(m);la.fromBufferAttribute(f,g),xf(la,g,l,s,t,e,this)}}else{let u=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let m=u,x=d;m<x;m++)la.fromBufferAttribute(f,m),xf(la,m,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function xf(n,t,e,i,s,r,o){let a=t0.distanceSqToPoint(n);if(a<e){let l=new N;t0.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Pn=class extends On{constructor(t,e,i,s,r,o,a,l,c){super(t,e,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},ii=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let i=this.getLengths(),s=0,r=i.length,o;e?o=e:o=t*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let h=i[s],u=i[s+1]-h,d=(o-h)/u;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new vt:new N);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){let i=new N,s=[],r=[],o=[],a=new N,l=new de;for(let d=0;d<=t;d++){let m=d/t;s[d]=this.getTangentAt(m,new N)}r[0]=new N,o[0]=new N;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),u<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(fn(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,m))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(fn(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],d*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},lo=class extends ii{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new vt){let i=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=l-this.aX,d=c-this.aY;l=u*h-d*f+this.aX,c=u*f+d*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},e0=class extends lo{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function L0(){let n=0,t=0,e=0,i=0;function s(r,o,a,l){n=r,t=a,e=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,f){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+f)+(l-a)/f;u*=h,d*=h,s(o,a,u,d)},calc:function(r){let o=r*r,a=o*r;return n+t*r+e*o+i*a}}}var ca=new N,Gl=new L0,Vl=new L0,Wl=new L0,Er=class extends ii{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new N){let i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(ca.subVectors(s[0],s[1]).add(s[0]),c=ca);let f=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(ca.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=ca),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(f),d),x=Math.pow(f.distanceToSquared(u),d),g=Math.pow(u.distanceToSquared(h),d);x<1e-4&&(x=1),m<1e-4&&(m=x),g<1e-4&&(g=x),Gl.initNonuniformCatmullRom(c.x,f.x,u.x,h.x,m,x,g),Vl.initNonuniformCatmullRom(c.y,f.y,u.y,h.y,m,x,g),Wl.initNonuniformCatmullRom(c.z,f.z,u.z,h.z,m,x,g)}else this.curveType==="catmullrom"&&(Gl.initCatmullRom(c.x,f.x,u.x,h.x,this.tension),Vl.initCatmullRom(c.y,f.y,u.y,h.y,this.tension),Wl.initCatmullRom(c.z,f.z,u.z,h.z,this.tension));return i.set(Gl.calc(l),Vl.calc(l),Wl.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new N().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function _f(n,t,e,i,s){let r=(i-t)*.5,o=(s-e)*.5,a=n*n,l=n*a;return(2*e-2*i+r+o)*l+(-3*e+3*i-2*r-o)*a+r*n+e}function N2(n,t){let e=1-n;return e*e*t}function U2(n,t){return 2*(1-n)*n*t}function O2(n,t){return n*n*t}function Qr(n,t,e,i){return N2(n,t)+U2(n,e)+O2(n,i)}function D2(n,t){let e=1-n;return e*e*e*t}function F2(n,t){let e=1-n;return 3*e*e*n*t}function k2(n,t){return 3*(1-n)*n*n*t}function B2(n,t){return n*n*n*t}function to(n,t,e,i,s){return D2(n,t)+F2(n,e)+k2(n,i)+B2(n,s)}var Oa=class extends ii{constructor(t=new vt,e=new vt,i=new vt,s=new vt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new vt){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(to(t,s.x,r.x,o.x,a.x),to(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},n0=class extends ii{constructor(t=new N,e=new N,i=new N,s=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new N){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(to(t,s.x,r.x,o.x,a.x),to(t,s.y,r.y,o.y,a.y),to(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Da=class extends ii{constructor(t=new vt,e=new vt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new vt){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new vt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},i0=class extends ii{constructor(t=new N,e=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new N){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new N){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Fa=class extends ii{constructor(t=new vt,e=new vt,i=new vt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new vt){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Qr(t,s.x,r.x,o.x),Qr(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ka=class extends ii{constructor(t=new N,e=new N,i=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new N){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Qr(t,s.x,r.x,o.x),Qr(t,s.y,r.y,o.y),Qr(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ba=class extends ii{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new vt){let i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return i.set(_f(a,l.x,c.x,h.x,f.x),_f(a,l.y,c.y,h.y,f.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new vt().fromArray(s))}return this}},za=Object.freeze({__proto__:null,ArcCurve:e0,CatmullRomCurve3:Er,CubicBezierCurve:Oa,CubicBezierCurve3:n0,EllipseCurve:lo,LineCurve:Da,LineCurve3:i0,QuadraticBezierCurve:Fa,QuadraticBezierCurve3:ka,SplineCurve:Ba}),s0=class extends ii{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new za[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(new za[s.type]().fromJSON(s))}return this}},Ha=class extends s0{constructor(t){super(),this.type="Path",this.currentPoint=new vt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new Da(this.currentPoint.clone(),new vt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){let r=new Fa(this.currentPoint.clone(),new vt(t,e),new vt(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,o){let a=new Oa(this.currentPoint.clone(),new vt(t,e),new vt(i,s),new vt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new Ba(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,s,r,o),this}absarc(t,e,i,s,r,o){return this.absellipse(t,e,i,i,s,r,o),this}ellipse(t,e,i,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,s,r,o,a,l),this}absellipse(t,e,i,s,r,o,a,l){let c=new lo(t,e,i,s,r,o,a,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Ga=class n extends Ue{constructor(t=[new vt(0,-.5),new vt(.5,0),new vt(0,.5)],e=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:s},e=Math.floor(e),s=fn(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,f=new N,u=new vt,d=new N,m=new N,x=new N,g=0,p=0;for(let b=0;b<=t.length-1;b++)switch(b){case 0:g=t[b+1].x-t[b].x,p=t[b+1].y-t[b].y,d.x=p*1,d.y=-g,d.z=p*0,x.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:g=t[b+1].x-t[b].x,p=t[b+1].y-t[b].y,d.x=p*1,d.y=-g,d.z=p*0,m.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),l.push(d.x,d.y,d.z),x.copy(m)}for(let b=0;b<=e;b++){let _=i+b*h*s,y=Math.sin(_),L=Math.cos(_);for(let R=0;R<=t.length-1;R++){f.x=t[R].x*y,f.y=t[R].y,f.z=t[R].x*L,o.push(f.x,f.y,f.z),u.x=b/e,u.y=R/(t.length-1),a.push(u.x,u.y);let C=l[3*R+0]*y,P=l[3*R+1],E=l[3*R+0]*L;c.push(C,P,E)}}for(let b=0;b<e;b++)for(let _=0;_<t.length-1;_++){let y=_+b*t.length,L=y,R=y+t.length,C=y+t.length+1,P=y+1;r.push(L,R,P),r.push(C,P,R)}this.setIndex(r),this.setAttribute("position",new ue(o,3)),this.setAttribute("uv",new ue(a,2)),this.setAttribute("normal",new ue(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.points,t.segments,t.phiStart,t.phiLength)}};var co=class n extends Ue{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new N,h=new vt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,u=3;f<=e;f++,u+=3){let d=i+f/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/t+1)/2,h.y=(o[u+1]/t+1)/2,l.push(h.x,h.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new ue(o,3)),this.setAttribute("normal",new ue(a,3)),this.setAttribute("uv",new ue(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.segments,t.thetaStart,t.thetaLength)}},$i=class n extends Ue{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],u=[],d=[],m=0,x=[],g=i/2,p=0;b(),o===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new ue(f,3)),this.setAttribute("normal",new ue(u,3)),this.setAttribute("uv",new ue(d,2));function b(){let y=new N,L=new N,R=0,C=(e-t)/i;for(let P=0;P<=r;P++){let E=[],S=P/r,O=S*(e-t)+t;for(let V=0;V<=s;V++){let z=V/s,X=z*l+a,lt=Math.sin(X),j=Math.cos(X);L.x=O*lt,L.y=-S*i+g,L.z=O*j,f.push(L.x,L.y,L.z),y.set(lt,C,j).normalize(),u.push(y.x,y.y,y.z),d.push(z,1-S),E.push(m++)}x.push(E)}for(let P=0;P<s;P++)for(let E=0;E<r;E++){let S=x[E][P],O=x[E+1][P],V=x[E+1][P+1],z=x[E][P+1];(t>0||E!==0)&&(h.push(S,O,z),R+=3),(e>0||E!==r-1)&&(h.push(O,V,z),R+=3)}c.addGroup(p,R,0),p+=R}function _(y){let L=m,R=new vt,C=new N,P=0,E=y===!0?t:e,S=y===!0?1:-1;for(let V=1;V<=s;V++)f.push(0,g*S,0),u.push(0,S,0),d.push(.5,.5),m++;let O=m;for(let V=0;V<=s;V++){let X=V/s*l+a,lt=Math.cos(X),j=Math.sin(X);C.x=E*j,C.y=g*S,C.z=E*lt,f.push(C.x,C.y,C.z),u.push(0,S,0),R.x=lt*.5+.5,R.y=j*.5*S+.5,d.push(R.x,R.y),m++}for(let V=0;V<s;V++){let z=L+V,X=O+V;y===!0?h.push(X,X+1,z):h.push(X+1,X,z),P+=3}c.addGroup(p,P,y===!0?1:2),p+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var ha=new N,fa=new N,Xl=new N,ua=new ki,Tr=class extends Ue{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let s=Math.pow(10,4),r=Math.cos(rr*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],f=new Array(3),u={},d=[];for(let m=0;m<l;m+=3){o?(c[0]=o.getX(m),c[1]=o.getX(m+1),c[2]=o.getX(m+2)):(c[0]=m,c[1]=m+1,c[2]=m+2);let{a:x,b:g,c:p}=ua;if(x.fromBufferAttribute(a,c[0]),g.fromBufferAttribute(a,c[1]),p.fromBufferAttribute(a,c[2]),ua.getNormal(Xl),f[0]=`${Math.round(x.x*s)},${Math.round(x.y*s)},${Math.round(x.z*s)}`,f[1]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,f[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let b=0;b<3;b++){let _=(b+1)%3,y=f[b],L=f[_],R=ua[h[b]],C=ua[h[_]],P=`${y}_${L}`,E=`${L}_${y}`;E in u&&u[E]?(Xl.dot(u[E].normal)<=r&&(d.push(R.x,R.y,R.z),d.push(C.x,C.y,C.z)),u[E]=null):P in u||(u[P]={index0:c[b],index1:c[_],normal:Xl.clone()})}}for(let m in u)if(u[m]){let{index0:x,index1:g}=u[m];ha.fromBufferAttribute(a,x),fa.fromBufferAttribute(a,g),d.push(ha.x,ha.y,ha.z),d.push(fa.x,fa.y,fa.z)}this.setAttribute("position",new ue(d,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}},wr=class extends Ha{constructor(t){super(t),this.uuid=Si(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(new Ha().fromJSON(s))}return this}},z2={triangulate:function(n,t,e=2){let i=t&&t.length,s=i?t[0]*e:n.length,r=Zf(n,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,f,u,d;if(i&&(r=X2(n,t,r,e)),n.length>80*e){a=c=n[0],l=h=n[1];for(let m=e;m<s;m+=e)f=n[m],u=n[m+1],f<a&&(a=f),u<l&&(l=u),f>c&&(c=f),u>h&&(h=u);d=Math.max(c-a,h-l),d=d!==0?32767/d:0}return ho(r,o,e,a,l,d,0),o}};function Zf(n,t,e,i,s){let r,o;if(s===nx(n,t,e,i)>0)for(r=t;r<e;r+=i)o=yf(r,n[r],n[r+1],o);else for(r=e-i;r>=t;r-=i)o=yf(r,n[r],n[r+1],o);return o&&Qa(o,o.next)&&(uo(o),o=o.next),o}function ws(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(Qa(e,e.next)||je(e.prev,e,e.next)===0)){if(uo(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function ho(n,t,e,i,s,r,o){if(!n)return;!o&&r&&K2(n,i,s,r);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,r?G2(n,i,s,r):H2(n)){t.push(l.i/e|0),t.push(n.i/e|0),t.push(c.i/e|0),uo(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=V2(ws(n),t,e),ho(n,t,e,i,s,r,2)):o===2&&W2(n,t,e,i,s,r):ho(ws(n),t,e,i,s,r,1);break}}}function H2(n){let t=n.prev,e=n,i=n.next;if(je(t,e,i)>=0)return!1;let s=t.x,r=e.x,o=i.x,a=t.y,l=e.y,c=i.y,h=s<r?s<o?s:o:r<o?r:o,f=a<l?a<c?a:c:l<c?l:c,u=s>r?s>o?s:o:r>o?r:o,d=a>l?a>c?a:c:l>c?l:c,m=i.next;for(;m!==t;){if(m.x>=h&&m.x<=u&&m.y>=f&&m.y<=d&&nr(s,a,r,l,o,c,m.x,m.y)&&je(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function G2(n,t,e,i){let s=n.prev,r=n,o=n.next;if(je(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,f=r.y,u=o.y,d=a<l?a<c?a:c:l<c?l:c,m=h<f?h<u?h:u:f<u?f:u,x=a>l?a>c?a:c:l>c?l:c,g=h>f?h>u?h:u:f>u?f:u,p=r0(d,m,t,e,i),b=r0(x,g,t,e,i),_=n.prevZ,y=n.nextZ;for(;_&&_.z>=p&&y&&y.z<=b;){if(_.x>=d&&_.x<=x&&_.y>=m&&_.y<=g&&_!==s&&_!==o&&nr(a,h,l,f,c,u,_.x,_.y)&&je(_.prev,_,_.next)>=0||(_=_.prevZ,y.x>=d&&y.x<=x&&y.y>=m&&y.y<=g&&y!==s&&y!==o&&nr(a,h,l,f,c,u,y.x,y.y)&&je(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;_&&_.z>=p;){if(_.x>=d&&_.x<=x&&_.y>=m&&_.y<=g&&_!==s&&_!==o&&nr(a,h,l,f,c,u,_.x,_.y)&&je(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;y&&y.z<=b;){if(y.x>=d&&y.x<=x&&y.y>=m&&y.y<=g&&y!==s&&y!==o&&nr(a,h,l,f,c,u,y.x,y.y)&&je(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function V2(n,t,e){let i=n;do{let s=i.prev,r=i.next.next;!Qa(s,r)&&Kf(s,i,i.next,r)&&fo(s,r)&&fo(r,s)&&(t.push(s.i/e|0),t.push(i.i/e|0),t.push(r.i/e|0),uo(i),uo(i.next),i=n=r),i=i.next}while(i!==n);return ws(i)}function W2(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Q2(o,a)){let l=Jf(o,a);o=ws(o,o.next),l=ws(l,l.next),ho(o,t,e,i,s,r,0),ho(l,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function X2(n,t,e,i){let s=[],r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*i,l=r<o-1?t[r+1]*i:n.length,c=Zf(n,a,l,i,!1),c===c.next&&(c.steiner=!0),s.push(j2(c));for(s.sort(Y2),r=0;r<s.length;r++)e=q2(s[r],e);return e}function Y2(n,t){return n.x-t.x}function q2(n,t){let e=$2(n,t);if(!e)return t;let i=Jf(e,n);return ws(i,i.next),ws(e,e.next)}function $2(n,t){let e=t,i=-1/0,s,r=n.x,o=n.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let u=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=r&&u>i&&(i=u,s=e.x<e.next.x?e:e.next,u===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,l=s.x,c=s.y,h=1/0,f;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&nr(o<c?r:i,o,l,c,o<c?i:r,o,e.x,e.y)&&(f=Math.abs(o-e.y)/(r-e.x),fo(e,n)&&(f<h||f===h&&(e.x>s.x||e.x===s.x&&Z2(s,e)))&&(s=e,h=f)),e=e.next;while(e!==a);return s}function Z2(n,t){return je(n.prev,n,t.prev)<0&&je(t.next,n,n.next)<0}function K2(n,t,e,i){let s=n;do s.z===0&&(s.z=r0(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,J2(s)}function J2(n){let t,e,i,s,r,o,a,l,c=1;do{for(e=n,n=null,r=null,o=0;e;){for(o++,i=e,a=0,t=0;t<c&&(a++,i=i.nextZ,!!i);t++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||e.z<=i.z)?(s=e,e=e.nextZ,a--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;e=i}r.nextZ=null,c*=2}while(o>1);return n}function r0(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function j2(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function nr(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function Q2(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!tx(n,t)&&(fo(n,t)&&fo(t,n)&&ex(n,t)&&(je(n.prev,n,t.prev)||je(n,t.prev,t))||Qa(n,t)&&je(n.prev,n,n.next)>0&&je(t.prev,t,t.next)>0)}function je(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Qa(n,t){return n.x===t.x&&n.y===t.y}function Kf(n,t,e,i){let s=pa(je(n,t,e)),r=pa(je(n,t,i)),o=pa(je(e,i,n)),a=pa(je(e,i,t));return!!(s!==r&&o!==a||s===0&&da(n,e,t)||r===0&&da(n,i,t)||o===0&&da(e,n,i)||a===0&&da(e,t,i))}function da(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function pa(n){return n>0?1:n<0?-1:0}function tx(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&Kf(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function fo(n,t){return je(n.prev,n,n.next)<0?je(n,t,n.next)>=0&&je(n,n.prev,t)>=0:je(n,t,n.prev)<0||je(n,n.next,t)<0}function ex(n,t){let e=n,i=!1,s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function Jf(n,t){let e=new o0(n.i,n.x,n.y),i=new o0(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function yf(n,t,e,i){let s=new o0(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function uo(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function o0(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function nx(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var eo=class n{static area(t){let e=t.length,i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return n.area(t)<0}static triangulateShape(t,e){let i=[],s=[],r=[];vf(t),bf(i,t);let o=t.length;e.forEach(vf);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,bf(i,e[l]);let a=z2.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function vf(n){let t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function bf(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}var Va=class n extends Ue{constructor(t=new wr([new vt(.5,.5),new vt(-.5,.5),new vt(-.5,-.5),new vt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let i=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new ue(s,3)),this.setAttribute("uv",new ue(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:d-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,b=e.UVGenerator!==void 0?e.UVGenerator:ix,_,y=!1,L,R,C,P;p&&(_=p.getSpacedPoints(h),y=!0,u=!1,L=p.computeFrenetFrames(h,!1),R=new N,C=new N,P=new N),u||(g=0,d=0,m=0,x=0);let E=a.extractPoints(c),S=E.shape,O=E.holes;if(!eo.isClockWise(S)){S=S.reverse();for(let k=0,st=O.length;k<st;k++){let T=O[k];eo.isClockWise(T)&&(O[k]=T.reverse())}}let z=eo.triangulateShape(S,O),X=S;for(let k=0,st=O.length;k<st;k++){let T=O[k];S=S.concat(T)}function lt(k,st,T){return st||console.error("THREE.ExtrudeGeometry: vec does not exist"),k.clone().addScaledVector(st,T)}let j=S.length,gt=z.length;function J(k,st,T){let ft,G,ut,ot=k.x-st.x,At=k.y-st.y,dt=T.x-k.x,I=T.y-k.y,M=ot*ot+At*At,H=ot*I-At*dt;if(Math.abs(H)>Number.EPSILON){let tt=Math.sqrt(M),ht=Math.sqrt(dt*dt+I*I),at=st.x-At/tt,zt=st.y+ot/tt,Pt=T.x-I/ht,Ft=T.y+dt/ht,ne=((Pt-at)*I-(Ft-zt)*dt)/(ot*I-At*dt);ft=at+ot*ne-k.x,G=zt+At*ne-k.y;let pt=ft*ft+G*G;if(pt<=2)return new vt(ft,G);ut=Math.sqrt(pt/2)}else{let tt=!1;ot>Number.EPSILON?dt>Number.EPSILON&&(tt=!0):ot<-Number.EPSILON?dt<-Number.EPSILON&&(tt=!0):Math.sign(At)===Math.sign(I)&&(tt=!0),tt?(ft=-At,G=ot,ut=Math.sqrt(M)):(ft=ot,G=At,ut=Math.sqrt(M/2))}return new vt(ft/ut,G/ut)}let Ct=[];for(let k=0,st=X.length,T=st-1,ft=k+1;k<st;k++,T++,ft++)T===st&&(T=0),ft===st&&(ft=0),Ct[k]=J(X[k],X[T],X[ft]);let It=[],Ot,ie=Ct.concat();for(let k=0,st=O.length;k<st;k++){let T=O[k];Ot=[];for(let ft=0,G=T.length,ut=G-1,ot=ft+1;ft<G;ft++,ut++,ot++)ut===G&&(ut=0),ot===G&&(ot=0),Ot[ft]=J(T[ft],T[ut],T[ot]);It.push(Ot),ie=ie.concat(Ot)}for(let k=0;k<g;k++){let st=k/g,T=d*Math.cos(st*Math.PI/2),ft=m*Math.sin(st*Math.PI/2)+x;for(let G=0,ut=X.length;G<ut;G++){let ot=lt(X[G],Ct[G],ft);Mt(ot.x,ot.y,-T)}for(let G=0,ut=O.length;G<ut;G++){let ot=O[G];Ot=It[G];for(let At=0,dt=ot.length;At<dt;At++){let I=lt(ot[At],Ot[At],ft);Mt(I.x,I.y,-T)}}}let ye=m+x;for(let k=0;k<j;k++){let st=u?lt(S[k],ie[k],ye):S[k];y?(C.copy(L.normals[0]).multiplyScalar(st.x),R.copy(L.binormals[0]).multiplyScalar(st.y),P.copy(_[0]).add(C).add(R),Mt(P.x,P.y,P.z)):Mt(st.x,st.y,0)}for(let k=1;k<=h;k++)for(let st=0;st<j;st++){let T=u?lt(S[st],ie[st],ye):S[st];y?(C.copy(L.normals[k]).multiplyScalar(T.x),R.copy(L.binormals[k]).multiplyScalar(T.y),P.copy(_[k]).add(C).add(R),Mt(P.x,P.y,P.z)):Mt(T.x,T.y,f/h*k)}for(let k=g-1;k>=0;k--){let st=k/g,T=d*Math.cos(st*Math.PI/2),ft=m*Math.sin(st*Math.PI/2)+x;for(let G=0,ut=X.length;G<ut;G++){let ot=lt(X[G],Ct[G],ft);Mt(ot.x,ot.y,f+T)}for(let G=0,ut=O.length;G<ut;G++){let ot=O[G];Ot=It[G];for(let At=0,dt=ot.length;At<dt;At++){let I=lt(ot[At],Ot[At],ft);y?Mt(I.x,I.y+_[h-1].y,_[h-1].x+T):Mt(I.x,I.y,f+T)}}}it(),bt();function it(){let k=s.length/3;if(u){let st=0,T=j*st;for(let ft=0;ft<gt;ft++){let G=z[ft];Yt(G[2]+T,G[1]+T,G[0]+T)}st=h+g*2,T=j*st;for(let ft=0;ft<gt;ft++){let G=z[ft];Yt(G[0]+T,G[1]+T,G[2]+T)}}else{for(let st=0;st<gt;st++){let T=z[st];Yt(T[2],T[1],T[0])}for(let st=0;st<gt;st++){let T=z[st];Yt(T[0]+j*h,T[1]+j*h,T[2]+j*h)}}i.addGroup(k,s.length/3-k,0)}function bt(){let k=s.length/3,st=0;kt(X,st),st+=X.length;for(let T=0,ft=O.length;T<ft;T++){let G=O[T];kt(G,st),st+=G.length}i.addGroup(k,s.length/3-k,1)}function kt(k,st){let T=k.length;for(;--T>=0;){let ft=T,G=T-1;G<0&&(G=k.length-1);for(let ut=0,ot=h+g*2;ut<ot;ut++){let At=j*ut,dt=j*(ut+1),I=st+ft+At,M=st+G+At,H=st+G+dt,tt=st+ft+dt;re(I,M,H,tt)}}}function Mt(k,st,T){l.push(k),l.push(st),l.push(T)}function Yt(k,st,T){jt(k),jt(st),jt(T);let ft=s.length/3,G=b.generateTopUV(i,s,ft-3,ft-2,ft-1);ve(G[0]),ve(G[1]),ve(G[2])}function re(k,st,T,ft){jt(k),jt(st),jt(ft),jt(st),jt(T),jt(ft);let G=s.length/3,ut=b.generateSideWallUV(i,s,G-6,G-3,G-2,G-1);ve(ut[0]),ve(ut[1]),ve(ut[3]),ve(ut[1]),ve(ut[2]),ve(ut[3])}function jt(k){s.push(l[k*3+0]),s.push(l[k*3+1]),s.push(l[k*3+2])}function ve(k){r.push(k.x),r.push(k.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return sx(e,i,t)}static fromJSON(t,e){let i=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];i.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new za[s.type]().fromJSON(s)),new n(i,t.options)}},ix={generateTopUV:function(n,t,e,i,s){let r=t[e*3],o=t[e*3+1],a=t[i*3],l=t[i*3+1],c=t[s*3],h=t[s*3+1];return[new vt(r,o),new vt(a,l),new vt(c,h)]},generateSideWallUV:function(n,t,e,i,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[i*3],h=t[i*3+1],f=t[i*3+2],u=t[s*3],d=t[s*3+1],m=t[s*3+2],x=t[r*3],g=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new vt(o,1-l),new vt(c,1-f),new vt(u,1-m),new vt(x,1-p)]:[new vt(a,1-l),new vt(h,1-f),new vt(d,1-m),new vt(g,1-p)]}};function sx(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Wa=class n extends Ue{constructor(t=.5,e=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],c=[],h=[],f=t,u=(e-t)/s,d=new N,m=new vt;for(let x=0;x<=s;x++){for(let g=0;g<=i;g++){let p=r+g/i*o;d.x=f*Math.cos(p),d.y=f*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),m.x=(d.x/e+1)/2,m.y=(d.y/e+1)/2,h.push(m.x,m.y)}f+=u}for(let x=0;x<s;x++){let g=x*(i+1);for(let p=0;p<i;p++){let b=p+g,_=b,y=b+i+1,L=b+i+2,R=b+1;a.push(_,y,R),a.push(y,L,R)}}this.setIndex(a),this.setAttribute("position",new ue(l,3)),this.setAttribute("normal",new ue(c,3)),this.setAttribute("uv",new ue(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Zi=class n extends Ue{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],f=new N,u=new N,d=[],m=[],x=[],g=[];for(let p=0;p<=i;p++){let b=[],_=p/i,y=0;p===0&&o===0?y=.5/e:p===i&&l===Math.PI&&(y=-.5/e);for(let L=0;L<=e;L++){let R=L/e;f.x=-t*Math.cos(s+R*r)*Math.sin(o+_*a),f.y=t*Math.cos(o+_*a),f.z=t*Math.sin(s+R*r)*Math.sin(o+_*a),m.push(f.x,f.y,f.z),u.copy(f).normalize(),x.push(u.x,u.y,u.z),g.push(R+y,1-_),b.push(c++)}h.push(b)}for(let p=0;p<i;p++)for(let b=0;b<e;b++){let _=h[p][b+1],y=h[p][b],L=h[p+1][b],R=h[p+1][b+1];(p!==0||o>0)&&d.push(_,y,R),(p!==i-1||l<Math.PI)&&d.push(y,L,R)}this.setIndex(d),this.setAttribute("position",new ue(m,3)),this.setAttribute("normal",new ue(x,3)),this.setAttribute("uv",new ue(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Xa=class n extends Ue{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new N,f=new N,u=new N;for(let d=0;d<=i;d++)for(let m=0;m<=s;m++){let x=m/s*r,g=d/i*Math.PI*2;f.x=(t+e*Math.cos(g))*Math.cos(x),f.y=(t+e*Math.cos(g))*Math.sin(x),f.z=e*Math.sin(g),a.push(f.x,f.y,f.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),u.subVectors(f,h).normalize(),l.push(u.x,u.y,u.z),c.push(m/s),c.push(d/i)}for(let d=1;d<=i;d++)for(let m=1;m<=s;m++){let x=(s+1)*d+m-1,g=(s+1)*(d-1)+m-1,p=(s+1)*(d-1)+m,b=(s+1)*d+m;o.push(x,g,b),o.push(g,p,b)}this.setIndex(o),this.setAttribute("position",new ue(a,3)),this.setAttribute("normal",new ue(l,3)),this.setAttribute("uv",new ue(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var po=class n extends Ue{constructor(t=new ka(new N(-1,-1,0),new N(-1,1,0),new N(1,1,0)),e=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new N,l=new N,c=new vt,h=new N,f=[],u=[],d=[],m=[];x(),this.setIndex(m),this.setAttribute("position",new ue(f,3)),this.setAttribute("normal",new ue(u,3)),this.setAttribute("uv",new ue(d,2));function x(){for(let _=0;_<e;_++)g(_);g(r===!1?e:0),b(),p()}function g(_){h=t.getPointAt(_/e,h);let y=o.normals[_],L=o.binormals[_];for(let R=0;R<=s;R++){let C=R/s*Math.PI*2,P=Math.sin(C),E=-Math.cos(C);l.x=E*y.x+P*L.x,l.y=E*y.y+P*L.y,l.z=E*y.z+P*L.z,l.normalize(),u.push(l.x,l.y,l.z),a.x=h.x+i*l.x,a.y=h.y+i*l.y,a.z=h.z+i*l.z,f.push(a.x,a.y,a.z)}}function p(){for(let _=1;_<=e;_++)for(let y=1;y<=s;y++){let L=(s+1)*(_-1)+(y-1),R=(s+1)*_+(y-1),C=(s+1)*_+y,P=(s+1)*(_-1)+y;m.push(L,R,P),m.push(R,C,P)}}function b(){for(let _=0;_<=e;_++)for(let y=0;y<=s;y++)c.x=_/e,c.y=y/s,d.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new n(new za[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var qe=class extends Ei{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Zt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kf,this.normalScale=new vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new In,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function ma(n,t,e){return!n||!e&&n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function rx(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Ar=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break n}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},a0=class extends Ar{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:fh,endingEnd:fh}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case uh:r=t,a=2*e-i;break;case dh:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case uh:o=t,l=2*i-e;break;case dh:o=1,l=i+s[1]-s[0];break;default:o=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,d=this._weightNext,m=(i-e)/(s-e),x=m*m,g=x*m,p=-u*g+2*u*x-u*m,b=(1+u)*g+(-1.5-2*u)*x+(-.5+u)*m+1,_=(-1-d)*g+(1.5+d)*x+.5*m,y=d*g-d*x;for(let L=0;L!==a;++L)r[L]=p*o[h+L]+b*o[c+L]+_*o[l+L]+y*o[f+L];return r}},l0=class extends Ar{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(i-e)/(s-e),f=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*f+o[l+u]*h;return r}},c0=class extends Ar{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},mi=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ma(e,this.TimeBufferType),this.values=ma(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:ma(t.times,Array),values:ma(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new c0(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new l0(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new a0(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case ba:e=this.InterpolantFactoryMethodDiscrete;break;case Lc:e=this.InterpolantFactoryMethodLinear;break;case dl:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ba;case this.InterpolantFactoryMethodLinear:return Lc;case this.InterpolantFactoryMethodSmooth:return dl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&rx(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===dl,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let f=a*i,u=f-i,d=f+i;for(let m=0;m!==i;++m){let x=e[f+m];if(x!==e[u+m]||x!==e[d+m]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let f=a*i,u=o*i;for(let d=0;d!==i;++d)e[u+d]=e[f+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};mi.prototype.TimeBufferType=Float32Array;mi.prototype.ValueBufferType=Float32Array;mi.prototype.DefaultInterpolation=Lc;var As=class extends mi{constructor(t,e,i){super(t,e,i)}};As.prototype.ValueTypeName="bool";As.prototype.ValueBufferType=Array;As.prototype.DefaultInterpolation=ba;As.prototype.InterpolantFactoryMethodLinear=void 0;As.prototype.InterpolantFactoryMethodSmooth=void 0;var h0=class extends mi{};h0.prototype.ValueTypeName="color";var f0=class extends mi{};f0.prototype.ValueTypeName="number";var u0=class extends Ar{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)Cn.slerpFlat(r,0,o,c-a,o,c,l);return r}},Ya=class extends mi{InterpolantFactoryMethodLinear(t){return new u0(this.times,this.values,this.getValueSize(),t)}};Ya.prototype.ValueTypeName="quaternion";Ya.prototype.InterpolantFactoryMethodSmooth=void 0;var Rs=class extends mi{constructor(t,e,i){super(t,e,i)}};Rs.prototype.ValueTypeName="string";Rs.prototype.ValueBufferType=Array;Rs.prototype.DefaultInterpolation=ba;Rs.prototype.InterpolantFactoryMethodLinear=void 0;Rs.prototype.InterpolantFactoryMethodSmooth=void 0;var d0=class extends mi{};d0.prototype.ValueTypeName="vector";var p0=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=c.length;f<u;f+=2){let d=c[f],m=c[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return m}return null}}},ox=new p0,m0=class{constructor(t){this.manager=t!==void 0?t:ox,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};m0.DEFAULT_MATERIAL_NAME="__DEFAULT";var mo=class extends nn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Zt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Rr=class extends mo{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(nn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Zt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Yl=new de,Mf=new N,Sf=new N,qa=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new vt(512,512),this.map=null,this.mapPass=null,this.matrix=new de,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new so,this._frameExtents=new vt(1,1),this._viewportCount=1,this._viewports=[new Le(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;Mf.setFromMatrixPosition(t.matrixWorld),e.position.copy(Mf),Sf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Sf),e.updateMatrixWorld(),Yl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Yl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},g0=class extends qa{constructor(){super(new xn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,i=dr*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(i!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=i,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},go=class extends mo{constructor(t,e,i=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(nn.DEFAULT_UP),this.updateMatrix(),this.target=new nn,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new g0}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Ef=new de,$r=new N,ql=new N,x0=class extends qa{constructor(){super(new xn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new vt(4,2),this._viewportCount=6,this._viewports=[new Le(2,1,1,1),new Le(0,1,1,1),new Le(3,1,1,1),new Le(1,1,1,1),new Le(3,0,1,1),new Le(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(t,e=0){let i=this.camera,s=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),$r.setFromMatrixPosition(t.matrixWorld),i.position.copy($r),ql.copy(i.position),ql.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(ql),i.updateMatrixWorld(),s.makeTranslation(-$r.x,-$r.y,-$r.z),Ef.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ef)}},xo=class extends mo{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new x0}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}};var N0="\\[\\]\\.:\\/",ax=new RegExp("["+N0+"]","g"),U0="[^"+N0+"]",lx="[^"+N0.replace("\\.","")+"]",cx=/((?:WC+[\/:])*)/.source.replace("WC",U0),hx=/(WCOD+)?/.source.replace("WCOD",lx),fx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",U0),ux=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",U0),dx=new RegExp("^"+cx+hx+fx+ux+"$"),px=["material","materials","bones","map"],_0=class{constructor(t,e,i){let s=i||Ze.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Ze=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(ax,"")}static parseTrackName(t){let e=dx.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);px.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ze.Composite=_0;Ze.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ze.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ze.prototype.GetterByBindingType=[Ze.prototype._getValue_direct,Ze.prototype._getValue_array,Ze.prototype._getValue_arrayElement,Ze.prototype._getValue_toArray];Ze.prototype.SetterByBindingTypeAndVersioning=[[Ze.prototype._setValue_direct,Ze.prototype._setValue_direct_setNeedsUpdate,Ze.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ze.prototype._setValue_array,Ze.prototype._setValue_array_setNeedsUpdate,Ze.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ze.prototype._setValue_arrayElement,Ze.prototype._setValue_arrayElement_setNeedsUpdate,Ze.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ze.prototype._setValue_fromArray,Ze.prototype._setValue_fromArray_setNeedsUpdate,Ze.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var E_=new Float32Array(1);var Tf=new de,$a=class{constructor(t,e,i=0,s=1/0){this.ray=new pr(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new io,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Tf.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Tf),this}intersectObject(t,e=!0,i=[]){return y0(t,this,i,e),i.sort(wf),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)y0(t[s],this,i,e);return i.sort(wf),i}};function wf(n,t){return n.distance-t.distance}function y0(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let o=0,a=r.length;o<a;o++)y0(r[o],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:v0}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=v0);function yo(n){return function(){n|=0,n=n+1831565813|0;let e=Math.imul(n^n>>>15,1|n);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function si(n){let t=2166136261;for(let e=0;e<n.length;e++)t^=n.charCodeAt(e),t=Math.imul(t,16777619);return t>>>0}function jf(n,t,e,i=.3,s={}){let r=vo(n,s);for(let o=0;o<2;o++)for(let a of r){let l=a.w/2+i,c=a.d/2+i,h=t-a.x,f=e-a.z;if(Math.abs(h)<l&&Math.abs(f)<c){let u=l-Math.abs(h),d=c-Math.abs(f);u<d?t+=Math.sign(h||1)*u:e+=Math.sign(f||1)*d}}return{x:t,z:e}}function vo(n,t={}){let e=n.walls.slice();for(let i of n.fixtures)i.solid&&e.push(i),i.type==="gate"&&!t.counter&&e.push(i);return e}function Qf(n,t,e,i,s=2.2){for(let c of n.spots){let h=c.area;if(h&&t>=h.x1&&t<=h.x2&&e>=h.z1&&e<=h.z2)return{...c,type:"search",dist:0}}let r=null,o=-Math.sin(i),a=-Math.cos(i),l=n.spots.filter(c=>!c.area).map(c=>({...c,type:"search"}));l.push({type:"exit",x:n.exit.x,z:n.exit.z,label:"Leave the building"});for(let c of l){let h=c.x-t,f=c.z-e,u=Math.hypot(h,f);if(u>s)continue;let d=u<.6?1:(h*o+f*a)/u;if(d<.35)continue;let m=u-d;(!r||m<r.score)&&(r={...c,dist:u,score:m})}return r}var yn=n=>{let t=Math.abs(Math.floor(n))%2147483646+1;return()=>(t=t*16807%2147483647)/2147483647},bo=(n,t)=>{let e=Math.sin(n*127.1+t*311.7)*43758.5453;return e-Math.floor(e)},dn=n=>n<0?0:n>1?1:n,tu=n=>n*n*(3-2*n),Kn=(n,t=n)=>{let e=document.createElement("canvas");return e.width=n,e.height=t,e};function Ti(n,t,e,i,s){let r=new Float32Array(e*i);for(let a=0;a<r.length;a++)r[a]=s();let o=new Float32Array(n*t);for(let a=0;a<t;a++){let l=a/t*i,c=Math.floor(l),h=tu(l-c),f=c%i*e,u=(c+1)%i*e;for(let d=0;d<n;d++){let m=d/n*e,x=Math.floor(m),g=tu(m-x),p=x%e,b=(x+1)%e,_=r[f+p]+(r[f+b]-r[f+p])*g,y=r[u+p]+(r[u+b]-r[u+p])*g;o[a*n+d]=_+(y-_)*h}}return o}function En(n,t,e,i,s,r,o=.5){let a=new Float32Array(n*t),l=1,c=0;for(let h=0;h<s;h++){let f=Ti(n,t,e<<h,i<<h,r);for(let u=0;u<a.length;u++)a[u]+=f[u]*l;c+=l,l*=o}for(let h=0;h<a.length;h++)a[h]/=c;return a}function wi(n,t){let e=Kn(n,t),i=Kn(n,t),s=Kn(n,t);return{w:n,h:t,col:e,hgt:i,rough:s,c:e.getContext("2d"),hc:i.getContext("2d"),rc:s.getContext("2d")}}function Ai(n,t){let{w:e,h:i}=n,s=n.c.createImageData(e,i),r=n.hc.createImageData(e,i),o=n.rc.createImageData(e,i),a=[0,0,0,0,0];for(let l=0;l<i;l++)for(let c=0;c<e;c++){let h=l*e+c;t(h,c,l,a);let f=h*4;s.data[f]=a[0],s.data[f+1]=a[1],s.data[f+2]=a[2],s.data[f+3]=255;let u=dn(a[3])*255;r.data[f]=r.data[f+1]=r.data[f+2]=u,r.data[f+3]=255;let d=dn(a[4])*255;o.data[f]=o.data[f+1]=o.data[f+2]=d,o.data[f+3]=255}n.c.putImageData(s,0,0),n.hc.putImageData(r,0,0),n.rc.putImageData(o,0,0)}function B0(n,t,e,i,s,r){for(let o of[-n,0,n])for(let a of[-t,0,t])e+o+s<0||e+o-s>n||i+a+s<0||i+a-s>t||r(e+o,i+a)}function gx(n,t){let{w:e,h:i}=n,s=n.hc.getImageData(0,0,e,i).data,r=Kn(e,i),o=r.getContext("2d"),a=o.createImageData(e,i),l=(c,h)=>s[((h+i)%i*e+(c+e)%e)*4]/255;for(let c=0;c<i;c++)for(let h=0;h<e;h++){let f=(l(h+1,c)-l(h-1,c))*t,u=(l(h,c+1)-l(h,c-1))*t,d=-f,m=u,x=1,g=Math.hypot(d,m,x);d/=g,m/=g,x/=g;let p=(c*e+h)*4;a.data[p]=(d*.5+.5)*255,a.data[p+1]=(m*.5+.5)*255,a.data[p+2]=(x*.5+.5)*255,a.data[p+3]=255}return o.putImageData(a,0,0),r}function O0(n,t,e=!0){let i=new Pn(n);return i.wrapS=i.wrapT=e?Wi:Bi,i.colorSpace=t?We:ni,i.minFilter=zi,i.anisotropy=4,i}function Ri(n,{tile:t,normal:e=2,roughness:i=1,metalness:s=0,envColor:r}){let o=O0(n.col,!0),a=O0(n.rough,!1),l=O0(gx(n,e),!1);for(let h of[o,a,l])h.repeat.set(1/t[0],1/t[1]);let c=new qe({map:o,roughnessMap:a,normalMap:l,roughness:i,metalness:s});return c.normalScale=new vt(1,1),r&&(c.color=new Zt(r)),c.userData.tile=t,c}function Dn(n){return[n>>16&255,n>>8&255,n&255]}function z0(n,t,e,i){i[0]=n[0]+(t[0]-n[0])*e,i[1]=n[1]+(t[1]-n[1])*e,i[2]=n[2]+(t[2]-n[2])*e}function H0(n,t,e,i=.35){let{c:s,w:r,h:o}=n;for(let a=0;a<t;a++){let l=e()*r,c=e()*o,h=(.02+e()*.08)*r,f=e()*6.3;B0(r,o,l,c,h,(u,d)=>{s.strokeStyle=`rgba(20,18,16,${i*(.3+e()*.7)})`,s.lineWidth=.6+e()*2.2*(r/512),s.beginPath(),s.arc(u,d,h,f,f+.3+e()*.9),s.stroke()})}}var D0={};function xx(n,t){let e=`${n}-${t}`;if(D0[e])return D0[e];let i=yn(900+t*17),s=En(n,n,3,3,5,i,.6),r=Kn(n),o=r.getContext("2d"),a=o.createImageData(n,n);for(let l=0;l<n;l++)for(let c=0;c<n;c++){let h=l*n+c,f=Math.hypot(c-n/2,l-n/2)/(n/2),u=s[h]*1.35+.3-f*.6,d=dn((u-.5)*14),m=Math.exp(-(((u-.53)*26)**2)),x=(d*.3+m*.28)*dn((1-f)*3),g=h*4;a.data[g]=a.data[g+1]=a.data[g+2]=255,a.data[g+3]=dn(x)*255}return o.putImageData(a,0,0),D0[e]=r,r}function Is(n,t,e,i="90,62,30",s=.18,r=1){let{c:o,rc:a,w:l,h:c}=n,h=xx(128,Math.floor(e()*3)),f=Kn(128),u=f.getContext("2d");u.drawImage(h,0,0),u.globalCompositeOperation="source-in",u.fillStyle=`rgb(${i})`,u.fillRect(0,0,128,128);for(let d=0;d<t;d++){let m=e()*l,x=e()*c,g=(.04+e()*s)*Math.min(l,c),p=e()*6.3,b=.6+e()*.5;B0(l,c,m,x,g,(_,y)=>{for(let L of[o,a])L.save(),L.translate(_,y),L.rotate(p),L.scale(1,b),L.globalAlpha=L===o?.8*r:.25,L.drawImage(L===o?f:h,-g,-g,g*2,g*2),L.restore()})}}function Pr(n,t,e,i=4){return En(n,t,i,i,5,e,.55)}function _x(n,t){let e=yn(t),i=wi(n,n),s=En(n,n,8,8,4,e),r=Pr(n,n,e,3),o=Ti(n,n,n/2,n/2,e),a=[];for(let d=0;d<16;d++)a.push(e());let l=n/4,c=Dn(12894388),h=Dn(11775647),f=Dn(4865841),u=[0,0,0];return Ai(i,(d,m,x,g)=>{let p=Math.floor(m/l),b=Math.floor(x/l),_=m%l/l,y=x%l/l,L=Math.min(_,y,1-_,1-y),R=a[b*4+p];z0(c,h,R*.8,u);let C=o[d],P=C>.82?-26:C<.12?14:0,E=(s[d]-.5)*26+P,S=dn((r[d]-.45)*2.2)*.45+dn(1-L*30)*.3*(.5+r[d]);g[0]=u[0]+E,g[1]=u[1]+E,g[2]=u[2]+E;let O=Math.min(.75,S);g[0]+=(f[0]-g[0])*O,g[1]+=(f[1]-g[1])*O,g[2]+=(f[2]-g[2])*O;let V=L<.006;V&&(g[0]*=.72,g[1]*=.72,g[2]*=.72),g[3]=V?.45:.62+s[d]*.06-S*.05,g[4]=.42+S*.45+(V?.4:0)+(s[d]-.5)*.1}),H0(i,45,e,.3),Ri(i,{tile:[1.2,1.2],normal:2})}function yx(n,t){let e=yn(t),i=wi(n,n),s=En(n,n,6,6,5,e,.6),r=Ti(n,n,n/3,n/3,e),o=Pr(n,n,e,3),a=Dn(9674906),l=Dn(6253414),c=[0,0,0];return Ai(i,(h,f,u,d)=>{z0(a,l,dn((s[h]-.35)*1.6),c);let m=r[h]>.86?22:r[h]<.1?-18:0,x=dn((o[h]-.45)*2.2);d[0]=c[0]+m-x*40,d[1]=c[1]+m-x*38,d[2]=c[2]+m-x*42;let g=Math.abs(f-n/2)<1;g&&(d[0]*=.55,d[1]*=.55,d[2]*=.55),d[3]=g?.3:.6+s[h]*.04,d[4]=.28+x*.5+s[h]*.15}),H0(i,60,e,.32),Is(i,2,e,"80,70,40",.1),Ri(i,{tile:[2,2],normal:1.5})}function vx(n,t){let e=yn(t),i=wi(n,n),s=En(n,n,2,48,4,e,.5),r=Ti(n,n,6,160,e),o=Pr(n,n,e,3),a=8,l=n/a,c=[];for(let m=0;m<a;m++){let x=e();c.push([x,(x+.35+e()*.3)%1])}let h=[];for(let m=0;m<a*3;m++)h.push(e());let f=Dn(9399888),u=Dn(5192232),d=[0,0,0];return Ai(i,(m,x,g,p)=>{let b=Math.floor(x/l),_=x%l/l,y=g/n,[L,R]=c[b],C=y>Math.min(L,R)&&y<Math.max(L,R)?1:0,P=h[b*3+C];z0(f,u,.25+P*.5,d);let E=(s[m]-.5)*50+(r[m]-.5)*22,S=dn((o[m]-.5)*2);p[0]=d[0]+E-S*18,p[1]=d[1]+E*.8-S*18,p[2]=d[2]+E*.6-S*14;let O=_<.025||_>.975||Math.abs(y-L)<.003||Math.abs(y-R)<.003;O&&(p[0]*=.5,p[1]*=.5,p[2]*=.5),p[3]=O?.25:.6+(r[m]-.5)*.12,p[4]=.5+S*.35+(s[m]-.5)*.15+(O?.4:0)}),H0(i,25,e,.25),Is(i,2,e,"40,25,12",.1),Ri(i,{tile:[1.6,1.6],normal:2.5})}function bx(n,t){let e=yn(t),i=wi(n,n),s=Ti(n,n,n/2,n/2,e),r=En(n,n,16,16,3,e),o=Pr(n,n,e,3),a=Dn(6117970);return Ai(i,(l,c,h,f)=>{let u=(s[l]-.5)*30+(r[l]-.5)*24,d=dn((o[l]-.45)*2);f[0]=a[0]+u-d*30,f[1]=a[1]+u-d*30,f[2]=a[2]+u-d*26,f[3]=.5+s[l]*.4,f[4]=.95}),Is(i,4,e,"60,40,22",.14),Ri(i,{tile:[1,1],normal:1.2})}function Mx(n,t){let e=yn(t),i=wi(n,n),s=En(n,n,4,4,6,e,.55),r=Ti(n,n,n/2,n/2,e),o=Dn(9144964);Ai(i,(f,u,d,m)=>{let x=(s[f]-.5)*60,g=r[f]>.9?-30:0;m[0]=o[0]+x+g,m[1]=o[1]+x+g,m[2]=o[2]+x*.95+g;let p=Math.abs(u%(n/2)-0)<1.2||Math.abs(d%(n/2)-0)<1.2;p&&(m[0]*=.4,m[1]*=.4,m[2]*=.4),m[3]=p?.1:.55+s[f]*.15+(g?-.2:0),m[4]=.82+(s[f]-.5)*.2});let{c:a,hc:l,w:c,h}=i;for(let f=0;f<4;f++){let u=e()*c,d=e()*h,m=e()*6.3;a.strokeStyle="rgba(25,24,22,0.7)",l.strokeStyle="rgba(0,0,0,0.8)",a.lineWidth=l.lineWidth=1.2*(c/512),a.beginPath(),l.beginPath(),a.moveTo(u,d),l.moveTo(u,d);for(let x=0;x<40;x++)m+=(e()-.5)*.9,u+=Math.cos(m)*6*(c/512),d+=Math.sin(m)*6*(c/512),a.lineTo(u,d),l.lineTo(u,d);a.stroke(),l.stroke()}for(let f=0;f<4;f++){let u=e()*c,d=e()*h,m=(.03+e()*.08)*c;B0(c,h,u,d,m,(x,g)=>{let p=a.createRadialGradient(x,g,0,x,g,m);p.addColorStop(0,"rgba(15,13,10,0.55)"),p.addColorStop(1,"rgba(15,13,10,0)"),a.fillStyle=p,a.beginPath(),a.arc(x,g,m,0,6.3),a.fill();let b=i.rc.createRadialGradient(x,g,0,x,g,m);b.addColorStop(0,"rgba(0,0,0,0.6)"),b.addColorStop(1,"rgba(0,0,0,0)"),i.rc.fillStyle=b,i.rc.beginPath(),i.rc.arc(x,g,m,0,6.3),i.rc.fill()})}return Ri(i,{tile:[3,3],normal:2})}function eu(n,t,e,i){let s=yn(t),r=n,o=n*3,a=wi(r,o),l=Ti(r,o,r/3,o/3,s),c=En(r,o,3,9,5,s,.55),h=Dn(e),f=Dn(i),u=Math.round(o*(.11/6)),d=Math.round(o*(.9/6));Ai(a,(g,p,b,_)=>{let y=o-1-b;if(y<u){let P=y>u-3?18:0;_[0]=f[0]+P+(c[g]-.5)*12,_[1]=f[1]+P+(c[g]-.5)*12,_[2]=f[2]+P+(c[g]-.5)*12,_[3]=.85,_[4]=.55;return}let L=(c[g]-.5)*22,R=dn(1-(y-u)/d),C=R*R*(.4+c[g]*.6);_[0]=h[0]+L-C*60,_[1]=h[1]+L-C*62,_[2]=h[2]+L-C*66,_[3]=.5+l[g]*.06,_[4]=.78+C*.15});let{c:m,rc:x}=a;for(let g=0;g<2;g++){let p=s()*r,b=o*(.35+s()*.25),_=r*(.1+s()*.12);for(let y=0;y<5;y++){let L=p+(s()-.5)*_,R=o*(.04+s()*.2),C=m.createLinearGradient(L,b,L,b+R);C.addColorStop(0,"rgba(100,72,38,0.22)"),C.addColorStop(1,"rgba(100,72,38,0)"),m.fillStyle=C,m.fillRect(L,b,1+s()*2.5,R)}}Is(a,3,s,"105,78,40",.16,.7);for(let g=0;g<14;g++){let p=s()*r,b=o-u-s()*o*.12;m.fillStyle=`rgba(30,28,26,${.06+s()*.14})`,m.save(),m.translate(p,b),m.rotate((s()-.5)*.5),m.fillRect(0,0,2+s()*r*.05,.8+s()*1.5),m.restore()}for(let g=0;g<5;g++){let p=s()*r,b=o*(.6+s()*.35),_=1+s()*3*(r/512);m.fillStyle="rgba(160,150,135,0.7)",m.beginPath(),m.arc(p,b,_,0,6.3),m.fill(),a.hc.fillStyle="rgba(0,0,0,0.6)",a.hc.beginPath(),a.hc.arc(p,b,_,0,6.3),a.hc.fill()}return x.globalAlpha=1,Ri(a,{tile:[2,6],normal:1.6})}function Sx(n,t){let e=yn(t),i=wi(n,n),s=En(n,n,6,6,4,e),r=Pr(n,n,e,2),o=n/4,a=Dn(14211795),l=[];for(let d=0;d<16;d++)l.push(e());Ai(i,(d,m,x,g)=>{let p=m%o/o,b=x%o/o,_=Math.min(p,b,1-p,1-b),y=_<.035,L=l[Math.floor(x/o)*4+Math.floor(m/o)],R=dn((r[d]-.45)*2);if(y){let E=120-R*60+(s[d]-.5)*30;g[0]=E,g[1]=E*.95,g[2]=E*.85,g[3]=.2,g[4]=.9;return}let C=(s[d]-.5)*10-L*10-R*35;g[0]=a[0]+C,g[1]=a[1]+C,g[2]=a[2]+C-R*8;let P=dn(_*12);g[3]=.35+P*.4,g[4]=.12+R*.4});let{c,hc:h}=i,f=Math.floor(e()*4)*o,u=Math.floor(e()*4)*o;c.strokeStyle="rgba(40,40,36,0.8)",h.strokeStyle="rgba(0,0,0,1)",c.lineWidth=h.lineWidth=1;for(let d of[c,h])d.beginPath(),d.moveTo(f+o*.1,u+o*.2),d.lineTo(f+o*.45,u+o*.55),d.lineTo(f+o*.6,u+o*.5),d.lineTo(f+o*.92,u+o*.85),d.stroke();return Ri(i,{tile:[.6,.6],normal:4})}function Ex(n,t){let e=yn(t),i=wi(n,n),s=En(n,n,24,24,3,e,.6),r=Ti(n,n,n/1.5,n/1.5,e),o=En(n,n,4,4,3,e),a=n/4,l=-1,c=[];for(let h=0;h<16;h++)c.push(e());return Ai(i,(h,f,u,d)=>{let m=Math.floor(u/a)*4+Math.floor(f/a),x=f%a/a,g=u%a/a;if(Math.min(x,g,1-x,1-g)<.018){d[0]=168,d[1]=168,d[2]=162,d[3]=1,d[4]=.55;return}if(m===l){let _=14+s[h]*18;d[0]=_,d[1]=_,d[2]=_,d[3]=0,d[4]=1;return}let b=172-c[m]*16+(s[h]-.5)*28-(r[h]>.88?40:0)-dn((o[h]-.5)*2)*20;d[0]=b,d[1]=b*.985,d[2]=b*.94,d[3]=.6+s[h]*.2-(r[h]>.88?.2:0),d[4]=1}),Is(i,4,e,"120,85,40",.12,.8),Ri(i,{tile:[2.4,2.4],normal:2.5})}function Tx(n,t){let e=yn(t),i=wi(n,n),s=En(n,n,10,10,4,e,.6),r=Ti(n,n,n/2,n/2,e),o=Pr(n,n,e,2),a=Dn(11053983),l=n/4,c=n/8;return Ai(i,(h,f,u,d)=>{let m=Math.floor(u/c),g=(f+(m%2?l/2:0))%n%l/l,p=u%c/c,b=g<.02||g>.98||p<.04||p>.96,_=dn((o[h]-.5)*2),y=(s[h]-.5)*22-(r[h]>.85?20:0)-_*30;d[0]=a[0]+y,d[1]=a[1]+y,d[2]=a[2]+y,b&&(d[0]*=.8,d[1]*=.8,d[2]*=.8),d[3]=b?.2:.6+s[h]*.2-(r[h]>.85?.25:0),d[4]=.65+_*.2}),Is(i,2,e,"90,70,40",.14),Ri(i,{tile:[1.6,1.6],normal:3})}function wx(n,t,e=12894390){let i=yn(t),s=wi(n,n),r=En(n,n,5,5,5,i,.55),o=Ti(n,n,n/3,n/3,i),a=Dn(e);return Ai(s,(l,c,h,f)=>{let u=(r[l]-.5)*20;f[0]=a[0]+u,f[1]=a[1]+u,f[2]=a[2]+u,f[3]=.5+o[l]*.15,f[4]=.92}),Is(s,2,i,"115,85,45",.1,.35),Ri(s,{tile:[3,3],normal:1.2})}var Mo={};function Ax(n="high"){if(Mo[n])return Mo[n];let t=n==="low",e=t?256:512,i={storeTile:()=>_x(e,11),linoleum:()=>yx(e,23),woodFloor:()=>vx(e,37),carpet:()=>bx(t?256:384,41),concrete:()=>Mx(e,53),drywall:()=>eu(t?192:384,61,11843754,3881527),drywallWarm:()=>eu(t?192:384,67,11773324,13814974),tileWall:()=>Sx(e,71),ceilingTile:()=>Ex(e,83),blockWall:()=>Tx(e,89),plaster:()=>wx(t?256:384,97)},s={quality:n,surfaceFor:(o,a,l)=>G0(o,a,l,n)},r={};for(let o of Object.keys(i))Object.defineProperty(s,o,{enumerable:!0,get:()=>r[o]||(r[o]=i[o]())});return s.names=Object.keys(i),s.all=()=>{for(let o of s.names)s[o];return s},Mo[n]=s,s}var Rx={supermarket:"storeTile",convenience:"storeTile",gas:"storeTile",pharmacy:"storeTile",clinic:"linoleum",hospital:"linoleum",hardware:"concrete",outdoor:"woodFloor",fire:"concrete",house:"woodFloor"},Cx={supermarket:"drywall",convenience:"drywall",gas:"blockWall",pharmacy:"drywall",clinic:"drywall",hospital:"drywall",hardware:"blockWall",outdoor:"drywallWarm",fire:"blockWall",house:"drywallWarm"},Ix={supermarket:"ceilingTile",convenience:"ceilingTile",gas:"ceilingTile",pharmacy:"ceilingTile",clinic:"ceilingTile",hospital:"ceilingTile",hardware:"concrete",outdoor:"plaster",fire:"plaster",house:"plaster"};function G0(n,t,e,i){let s=i||(Mo.high?"high":Mo.low?"low":"high"),r=Ax(s);return e==="bathroom"&&t==="wall"?r.tileWall:e==="bathroom"&&t==="floor"?r.linoleum:e==="garage"?t==="ceiling"?r.plaster:t==="wall"?r.blockWall:r.concrete:(e==="bedroom"||e==="second bedroom")&&t==="floor"?r.carpet:r[(t==="floor"?Rx:t==="wall"?Cx:Ix)[n]||(t==="floor"?"storeTile":t==="wall"?"drywall":"ceilingTile")]}function So(n){n.updateMatrixWorld(!0);let t=n.geometry,e=t.attributes.position,i=t.attributes.normal,s=t.attributes.uv;if(!e||!i||!s)return n;let r=new N,o=new N,a=new Cn;n.matrixWorld.decompose(new N,a,new N);for(let l=0;l<e.count;l++){r.fromBufferAttribute(e,l).applyMatrix4(n.matrixWorld),o.fromBufferAttribute(i,l).applyQuaternion(a);let c=Math.abs(o.x),h=Math.abs(o.y),f=Math.abs(o.z);h>=c&&h>=f?s.setXY(l,r.x,-r.z):c>=f?s.setXY(l,o.x>0?-r.z:r.z,r.y):s.setXY(l,o.z>0?r.x:-r.x,r.y)}return s.needsUpdate=!0,n}function V0(){try{let n=new URLSearchParams(location.search).get("q");if(n==="low"||n==="high")return n}catch{}try{let n=typeof matchMedia=="function"&&matchMedia("(pointer: coarse)").matches,t=/Android|iPhone|iPad|iPod|Mobile|Silk/i.test(navigator.userAgent||"");if(n||t||(navigator.deviceMemory||8)<=2)return"low";let e="",s=document.createElement("canvas").getContext("webgl");if(s){let o=s.getExtension("WEBGL_debug_renderer_info");e=o?String(s.getParameter(o.UNMASKED_RENDERER_WEBGL)):"",s.getExtension("WEBGL_lose_context")?.loseContext()}if(/swiftshader|llvmpipe|softpipe|software|mali|adreno|powervr|videocore/i.test(e)||(window.devicePixelRatio||1)<1.3&&/intel/i.test(e)&&!/iris|arc|uhd graphics 7/i.test(e)&&(navigator.hardwareConcurrency||8)<=4)return"low"}catch{}return"high"}var sn={};function Px(){if(sn.cookie)return sn.cookie;let n=256,t=Kn(n),e=t.getContext("2d");e.fillStyle="#000",e.fillRect(0,0,n,n);let i=n/2,s=e.createRadialGradient(i,i,0,i,i,i);s.addColorStop(0,"rgba(255,250,240,1)"),s.addColorStop(.12,"rgba(255,246,228,1)"),s.addColorStop(.22,"rgba(225,214,195,1)"),s.addColorStop(.3,"rgba(160,150,135,1)"),s.addColorStop(.38,"rgba(190,180,160,1)"),s.addColorStop(.46,"rgba(110,104,92,1)"),s.addColorStop(.75,"rgba(70,66,58,1)"),s.addColorStop(.95,"rgba(18,17,15,1)"),s.addColorStop(1,"rgba(0,0,0,1)"),e.fillStyle=s,e.beginPath(),e.arc(i,i,i,0,6.3),e.fill();let r=yn(5);for(let a=0;a<24;a++)e.fillStyle=`rgba(0,0,0,${.015+r()*.025})`,e.beginPath(),e.arc(i+(r()-.5)*i,i+(r()-.5)*i,3+r()*10,0,6.3),e.fill();let o=new Pn(t);return o.colorSpace=We,sn.cookie=o,o}function nu(n="255,255,255"){let t=`dot${n}`;if(sn[t])return sn[t];let e=64,i=Kn(e),s=i.getContext("2d"),r=s.createRadialGradient(e/2,e/2,0,e/2,e/2,e/2);r.addColorStop(0,`rgba(${n},1)`),r.addColorStop(.25,`rgba(${n},0.45)`),r.addColorStop(1,`rgba(${n},0)`),s.fillStyle=r,s.fillRect(0,0,e,e);let o=new Pn(i);return o.colorSpace=We,sn[t]=o,o}function F0(){if(sn.prism)return sn.prism;let n=128,t=Kn(n,n/2),e=t.getContext("2d");e.fillStyle="#d8dde0",e.fillRect(0,0,n,n/2),e.fillStyle="rgba(0,0,0,0.12)";for(let r=0;r<n;r+=4)for(let o=r/4%2?2:0;o<n/2;o+=4)e.fillRect(r,o,2,2);let i=yn(3);for(let r=0;r<14;r++)e.fillStyle=`rgba(30,25,20,${.2+i()*.5})`,e.fillRect(i()*n,n/2-6-i()*20,2+i()*3,1+i()*2);let s=new Pn(t);return s.colorSpace=We,sn.prism=s,s}function Lx(){if(sn.halo)return sn.halo;let n=128,t=128,e=Kn(n,t),i=e.getContext("2d"),s=i.createImageData(n,t);for(let o=0;o<t;o++)for(let a=0;a<n;a++){let l=Math.max(0,Math.abs(a/n-.5)-.24)/.26,c=Math.max(0,Math.abs(o/t-.52)-.3)/.2,h=Math.min(1,Math.hypot(l,c)),u=Math.abs(a/n-.5)<.24&&Math.abs(o/t-.52)<.3?.25:(1-h)**2.2*.8,d=(o*n+a)*4;s.data[d]=s.data[d+1]=s.data[d+2]=255,s.data[d+3]=u*255}i.putImageData(s,0,0);let r=new Pn(e);return sn.halo=r,r}function iu(){if(sn.exit)return sn.exit;let n=Kn(256,128),t=n.getContext("2d");t.fillStyle="#0b120c",t.fillRect(0,0,256,128),t.fillStyle="#5dff7e",t.font='bold 74px "Arial Black", Arial, sans-serif',t.textAlign="center",t.textBaseline="middle",t.fillText("EXIT",128,58),t.beginPath(),t.moveTo(26,104),t.lineTo(44,94),t.lineTo(44,114),t.closePath(),t.moveTo(230,104),t.lineTo(212,94),t.lineTo(212,114),t.closePath(),t.fill(),t.fillRect(48,101,160,6);let e=new Pn(n);return e.colorSpace=We,sn.exit=e,e}function k0(n,t){let e=`decal-${n}-${t}`;if(sn[e])return sn[e];let i=256,s=Kn(i),r=s.getContext("2d"),o=yn(100+t*31+n.length*7),a=(c,h,f,u)=>{let d=En(i,i,4,4,5,o,.55),m=r.createImageData(i,i);for(let x=0;x<i;x++)for(let g=0;g<i;g++){let p=x*i+g,b=Math.hypot(g-i/2,x-i/2)/(i/2),_=dn((d[p]-.35-b*u)*3)*f,y=p*4;m.data[y]=h[0]+(d[p]-.5)*c,m.data[y+1]=h[1]+(d[p]-.5)*c,m.data[y+2]=h[2]+(d[p]-.5)*c,m.data[y+3]=_*255}r.putImageData(m,0,0)};if(n==="dirt")a(60,[62,50,36],.85,.55);else if(n==="water")a(20,[18,20,22],.9,.5);else if(n==="snow"){a(30,[228,233,238],1,.45),r.globalCompositeOperation="source-atop";for(let c=0;c<300;c++)r.fillStyle=`rgba(255,255,255,${o()*.5})`,r.fillRect(o()*i,o()*i,1,1);r.globalCompositeOperation="source-over"}else if(n==="paper")for(let c=0;c<7;c++){r.save(),r.translate(i*(.2+o()*.6),i*(.2+o()*.6)),r.rotate(o()*6.3);let h=38+o()*26,f=h*1.3,u=200+o()*40;r.fillStyle=`rgb(${u},${u-4},${u-14})`,r.fillRect(-h/2,-f/2,h,f),r.fillStyle="rgba(40,40,40,0.5)";for(let d=0;d<9;d++)r.fillRect(-h/2+5,-f/2+8+d*6,(h-10)*(.5+o()*.5),1.5);r.fillStyle="rgba(80,60,30,0.25)",r.beginPath(),r.arc((o()-.5)*h,(o()-.5)*f,8+o()*10,0,6.3),r.fill(),r.fillStyle="rgba(40,30,20,0.18)",r.fillRect(-h/4,-f/6,h/2,f/3),r.restore()}else if(n==="leaves")for(let c=0;c<46;c++){r.save();let h=o()**.7,f=o()*6.3;r.translate(i/2+Math.cos(f)*h*i*.42,i/2+Math.sin(f)*h*i*.42),r.rotate(o()*6.3);let u=8+o()*12,d=[[120,70,30],[150,95,35],[90,60,30],[110,85,40]][Math.floor(o()*4)];r.fillStyle=`rgb(${d[0]},${d[1]},${d[2]})`,r.beginPath(),r.ellipse(0,0,u,u*.45,0,0,6.3),r.fill(),r.strokeStyle="rgba(50,30,15,0.7)",r.lineWidth=1,r.beginPath(),r.moveTo(-u,0),r.lineTo(u,0),r.stroke(),r.restore()}else if(n==="glass")for(let c=0;c<70;c++){let h=o()**1.3,f=o()*6.3,u=i/2+Math.cos(f)*h*i*.45,d=i/2+Math.sin(f)*h*i*.45,m=(1-h)*10+2+o()*4;r.fillStyle=`rgba(200,220,225,${.25+o()*.35})`,r.strokeStyle="rgba(235,245,250,0.8)",r.lineWidth=.8,r.beginPath(),r.moveTo(u+(o()-.5)*m*2,d+(o()-.5)*m*2),r.lineTo(u+(o()-.5)*m*2,d+(o()-.5)*m*2),r.lineTo(u+(o()-.5)*m*2,d+(o()-.5)*m*2),r.closePath(),r.fill(),r.stroke()}else if(n==="grime"){let c=r.createLinearGradient(0,i,0,0);c.addColorStop(0,"rgba(20,16,12,0.75)"),c.addColorStop(.35,"rgba(25,20,15,0.35)"),c.addColorStop(1,"rgba(25,20,15,0)"),r.fillStyle=c,r.fillRect(0,0,i,i);let h=En(i,i,6,2,4,o),f=r.getImageData(0,0,i,i);for(let u=0;u<i*i;u++)f.data[u*4+3]*=.55+h[u]*.9;r.putImageData(f,0,0)}else if(n==="pool"){let c=r.createRadialGradient(i/2,i/2,0,i/2,i/2,i/2);c.addColorStop(0,"rgba(255,255,255,0.9)"),c.addColorStop(.4,"rgba(255,255,255,0.35)"),c.addColorStop(1,"rgba(255,255,255,0)"),r.fillStyle=c,r.fillRect(0,0,i,i)}let l=new Pn(s);return l.colorSpace=We,n==="grime"&&(l.wrapS=Wi),sn[e]=l,l}var tl={quarantine:[.43,.56],closed:[.22,.28],mask:[.43,.56],evac:[.22,.28],missing:[.22,.28],note:[.5,.36],poster:[.6,.9],staff:[.3,.12]};function Nx(n,t){let e=`notice-${n}-${t}`;if(sn[e])return sn[e];let[i,s]=tl[n]||tl.closed,r=256,o=Math.round(r*s/i),a=Kn(r,o),l=a.getContext("2d"),c=yn(7+t*13+n.length*101),h="Arial, Helvetica, sans-serif",f='"Arial Black", Arial, sans-serif',u='"Segoe Print", "Bradley Hand", "Comic Sans MS", cursive',d=p=>{l.fillStyle=p,l.fillRect(0,0,r,o)},m=(p,b,_,y="#151515")=>{l.font=_,l.fillStyle=y,l.textAlign="center",l.textBaseline="alphabetic";let L=parseInt(_,10);for(;l.measureText(p).width>r*.88&&L>6;)L-=1,l.font=_.replace(/\d+px/,`${L}px`);l.fillText(p,r/2,b)},x=(p,b,_)=>{l.fillStyle="rgba(30,30,30,0.55)";for(let y=0;y<b;y++)l.fillRect(r*.1,p+y*_,r*(.6+c()*.2),2)};if(n==="quarantine"){d("#e6d64a"),l.fillStyle="#141414",l.fillRect(0,0,r,64),m("QUARANTINE",46,`bold 40px ${f}`,"#e6d64a"),m("DO NOT ENTER",110,`bold 34px ${f}`,"#b01d14"),l.strokeStyle="#141414",l.lineWidth=7;for(let p=0;p<3;p++){let b=p/3*Math.PI*2-Math.PI/2;l.beginPath(),l.arc(r/2+Math.cos(b)*22,190+Math.sin(b)*22,24,0,6.3),l.stroke()}l.beginPath(),l.arc(r/2,190,9,0,6.3),l.stroke(),m("PNEUMONIC PLAGUE EXPOSURE SITE",262,`bold 15px ${h}`),m("By order of Multnomah County Health",286,`14px ${h}`),m("Entry is prohibited until cleared.",304,`14px ${h}`)}else if(n==="closed")d("#efece2"),m("CLOSED",52,`bold 42px ${f}`,"#121212"),m("BY ORDER OF",84,`bold 18px ${h}`),m("WASHINGTON COUNTY HEALTH",108,`bold 17px ${h}`),l.strokeStyle="#2a3c6a",l.lineWidth=3,l.beginPath(),l.arc(r/2,170,34,0,6.3),l.stroke(),l.beginPath(),l.arc(r/2,170,26,0,6.3),l.stroke(),m("PUBLIC HEALTH",175,`bold 10px ${h}`,"#2a3c6a"),x(222,6,13),m("Sep 19, 2026",o-18,`italic 13px ${h}`);else if(n==="mask")d("#f1efe8"),l.fillStyle="#b3241a",l.fillRect(0,0,r,78),m("PNEUMONIC PLAGUE",34,`bold 26px ${f}`,"#fff"),m("WEAR A MASK",66,`bold 28px ${f}`,"#fff"),l.fillStyle="#d9cbb5",l.beginPath(),l.arc(r/2,140,40,0,6.3),l.fill(),l.fillStyle="#9fc5d8",l.fillRect(r/2-34,138,68,30),l.strokeStyle="#555",l.lineWidth=2,l.strokeRect(r/2-34,138,68,30),["Cover every cough","Stay 6 feet apart","Fever or cough? Stay home","Call 211 for help"].forEach((b,_)=>m(`\u2022 ${b}`,212+_*22,`bold 15px ${h}`,"#1a1a1a")),m("Oregon Health Authority",o-14,`11px ${h}`,"#444");else if(n==="evac")d("#f4f1e6"),m("EVACUATION",40,`bold 28px ${f}`,"#14306b"),m("NOTICE",70,`bold 24px ${f}`,"#14306b"),["Buses leave Pioneer Sq.","Sept 14, 8:00 AM","Bring ID, water, 1 bag.","No pets on the bus.","Shelter: Expo Center"].forEach((b,_)=>m(b,112+_*26,`bold 16px ${h}`)),x(250,5,12);else if(n==="missing")d("#eeeae0"),m("HAVE YOU SEEN US?",34,`bold 21px ${f}`,"#202020"),l.fillStyle="#8b8d8e",l.fillRect(r*.2,48,r*.6,120),l.fillStyle="rgba(255,255,255,0.25)",l.fillRect(r*.2,48,r*.6,40),l.fillStyle="rgba(40,40,40,0.4)",l.beginPath(),l.arc(r*.42,120,18,0,6.3),l.fill(),l.beginPath(),l.arc(r*.58,128,14,0,6.3),l.fill(),["Went to Expo Center","shelter. Oct 2.","Maria + kids. Love you."].forEach((b,_)=>m(b,200+_*24,`20px ${u}`,"#1b2a6b"));else if(n==="note"){d("#a8875a");let p=En(r,o,4,3,3,c),b=l.getImageData(0,0,r,o);for(let R=0;R<r*o;R++){let C=(p[R]-.5)*30;b.data[R*4]+=C,b.data[R*4+1]+=C,b.data[R*4+2]+=C}l.putImageData(b,0,0);let _=[["NO MEDS","LEFT"],["DONT GO","IN BACK"],["TOOK WATER","SORRY"],["SICK INSIDE","STAY OUT"]],[y,L]=_[t%_.length];l.save(),l.translate(r/2,o/2),l.rotate((c()-.5)*.12),l.font=`bold 46px ${u}`,l.fillStyle="#121212",l.textAlign="center",l.fillText(y,0,-10),l.fillText(L,0,46),l.restore()}else if(n==="poster"){let p=["#2e4f78","#7a2e2a","#2f5a45"][t%3];d(p),l.fillStyle="rgba(255,255,255,0.12)";for(let b=0;b<6;b++)l.beginPath(),l.arc(c()*r,c()*o,30+c()*60,0,6.3),l.fill();m("WINTER",90,`bold 50px ${f}`,"#f6e9c9"),m("SAVINGS",145,`bold 46px ${f}`,"#f6e9c9"),l.fillStyle="#f6c63c",l.beginPath(),l.arc(r/2,240,58,0,6.3),l.fill(),m("20%",248,`bold 40px ${f}`,"#1a1a1a"),m("OFF",276,`bold 20px ${f}`,"#1a1a1a"),m("Ends Sept 30",o-30,`bold 18px ${h}`,"#f6e9c9")}else n==="staff"&&(d("#1d2a33"),m("STAFF ONLY",o*.66,`bold 34px ${f}`,"#e9eef0"));l.fillStyle=`rgba(160,130,60,${.06+c()*.08})`,l.fillRect(0,0,r,o);for(let p=0;p<3;p++){let b=l.createRadialGradient(c()*r,c()*o,2,c()*r,c()*o,40+c()*60);b.addColorStop(0,"rgba(110,80,30,0.18)"),b.addColorStop(1,"rgba(110,80,30,0)"),l.fillStyle=b,l.fillRect(0,0,r,o)}if(l.fillStyle="rgba(0,0,0,0.06)",l.fillRect(0,o/2-1,r,2),n!=="staff"&&n!=="note"){l.fillStyle="rgba(225,215,170,0.75)";for(let[p,b]of[[8,4],[r-40,4]])l.fillRect(p,b,32,12);l.clearRect(0,0,0,0),l.globalCompositeOperation="destination-out",l.beginPath(),l.moveTo(r,o),l.lineTo(r-20-c()*30,o),l.lineTo(r-6,o-10-c()*14),l.lineTo(r,o-30-c()*20),l.closePath(),l.fill(),l.globalCompositeOperation="source-over"}let g=new Pn(a);return g.colorSpace=We,g.anisotropy=4,sn[e]=g,g}var Ux=`
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
}`,Ox=`
varying float vLight;
void main() {
  float r = length(gl_PointCoord - 0.5);
  float a = (1.0 - smoothstep(0.0, 0.5, r)) * vLight;
  gl_FragColor = vec4(vec3(1.0, 0.96, 0.88) * a, a);
}`,Dx=`
attribute vec2 aSlice; // x: 1 for a cross-section slice, y: its distance along the shaft (0..1)
varying float vT; varying float vS; varying float vR; varying vec3 vW; varying vec3 vN;
void main() {
  vT = mix(uv.y, aSlice.y, aSlice.x); vS = uv.x;
  vR = aSlice.x > 0.5 ? uv.y : 0.5; // second edge fade for slices
  vec4 w = modelMatrix * vec4(position, 1.0);
  vW = w.xyz;
  vN = normalize(mat3(modelMatrix) * normal);
  gl_Position = projectionMatrix * viewMatrix * w;
}`,Fx=`
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
}`;function kx(n,t,e){let i=[[-n/2,0],[n/2,0],[n/2,t],[-n/2,t]],s=n*1.9,r=t*.18,o=[[-s/2,0],[s/2,0],[s/2,r],[-s/2,r]],a=[],l=[],c=[],h=0,f=(g,p,b,_)=>{a.push(...g,...p,...b,..._),l.push(0,0,1,0,1,1,0,1),c.push(h,h+1,h+2,h,h+2,h+3),h+=4};f([i[0][0],i[0][1],0],[i[3][0],i[3][1],0],[o[3][0],o[3][1],-e],[o[0][0],o[0][1],-e]),f([i[1][0],i[1][1],0],[i[2][0],i[2][1],0],[o[2][0],o[2][1],-e],[o[1][0],o[1][1],-e]),f([i[3][0],i[3][1],0],[i[2][0],i[2][1],0],[o[2][0],o[2][1],-e],[o[3][0],o[3][1],-e]),f([0,0,0],[0,t,0],[0,r,-e],[0,0,-e]),f([-n/2,t*.5,0],[n/2,t*.5,0],[s/2,r*.5,-e],[-s/2,r*.5,-e]);let u=new Ue,d=h;for(let g of[.12,.3,.5,.7]){let p=(n+(s-n)*g)/2,b=m(g);f([-p,0,-e*g],[p,0,-e*g],[p,b,-e*g],[-p,b,-e*g])}function m(g){return t+(r-t)*g}let x=new Float32Array(h*2);for(let g=d;g<h;g++){let p=[.12,.3,.5,.7][Math.floor((g-d)/4)];x[g*2]=1,x[g*2+1]=p}return u.setAttribute("aSlice",new Ye(x,2)),u.setAttribute("position",new Ye(new Float32Array(a),3)),u.setAttribute("uv",new Ye(new Float32Array(l),2)),u.setIndex(c),u.computeVertexNormals(),u}function su(n,t,e,i={}){let s=i.quality||V0(),r=s==="high",o=!!i.dark,a=!!i.night,l=o||a,c=new Wt;c.name="look3d",t.add(c);let h=[],f=k=>(h.push(k),k);n.toneMapping=M0,n.toneMappingExposure=l?1.25:1,n.outputColorSpace=We,n.shadowMap.enabled=!0,n.shadowMap.type=r?b0:Za;let u=o?263430:a?329483:3817800;t.background=new Zt(u),t.fog=new yr(o?197637:a?329482:4870746,o?.085:a?.07:.035);let d=null;if(i.env??r)try{let k=new vr,st=new _n({side:un,vertexColors:!0}),T=new we(10,4,10),ft=[],G=T.attributes.position,ut=new Zt(l?1382428:6975090),ot=new Zt(l?789258:4208943),At=new Zt(l?658189:9080466);for(let M=0;M<G.count;M++){let H=G.getY(M),tt=H>1?At:H<-1?ot:ut;ft.push(tt.r,tt.g,tt.b)}T.setAttribute("color",new Ye(new Float32Array(ft),3)),k.add(new Vt(T,st));let dt=new Vt(new Ge(2,2.6),new _n({color:new Zt(a?2898514:14674165).multiplyScalar(a?1:3),side:Ce}));dt.position.set(0,-.6,4.9),k.add(dt);let I=new _r(n);d=I.fromScene(k,.02),I.dispose(),T.dispose(),st.dispose(),dt.geometry.dispose(),dt.material.dispose(),t.environment=d.texture,t.environmentIntensity=o?.35:a?.3:.6}catch{d=null}let m=null;i.fill!==!1&&(m=o?new Rr(7241622,1512207,.55):a?new Rr(6123404,1380878,.6):new Rr(14081768,9209726,1.5),c.add(m));let x=null,g=!1,p=1,b=70,_=new nn;if(i.flashlight!==!1){let k=new go(16773596,0,26,.48,.55,2);k.position.set(.22,-.2,.05),_.position.set(.04,-.22,-4),e.add(k,_),k.target=_,e.parent!==t&&!e.parent&&t.add(e),k.castShadow=!0,k.shadow.mapSize.set(r?1024:512,r?1024:512),k.shadow.camera.near=.15,k.shadow.camera.far=24,k.shadow.bias=-4e-4,k.shadow.normalBias=.03,k.shadow.radius=r?3:1,k.map=Px(),i.flashShadow===!1&&(k.castShadow=!1),x=k,k.setOn=st=>{g=!!st},k.isOn=()=>g,k.setPower=st=>{p=dn(st)}}let y=i.maxLights??(r?6:3),L=0,R=()=>L<y?(L++,!0):!1,C=[],P=f(new qe({color:10330789,roughness:.55,metalness:.6})),E=f(new qe({map:F0(),color:10132632,roughness:.4}));function S(k,st,T,ft,G,ut){let ot=new Vt(new Ge(G*2,G*2),f(new _n({map:k0("pool",0),color:ft,transparent:!0,opacity:ut,depthWrite:!1,blending:Vi,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4})));return ot.rotation.x=-Math.PI/2,ot.position.set(k,st,T),c.add(ot),ot}function O(k,st,T,ft="dead"){let G=new Wt;G.position.set(k,st,T);let ut=bo(k,T);if(ft==="emergency"){let ot=new Vt(new we(.34,.12,.2),P);ot.position.y=-.06;let At=f(new qe({color:2755076,emissive:16734756,emissiveIntensity:2.4,roughness:.3})),dt=new Vt(new Zi(.06,12,8),At);dt.position.y=-.17;let I=new Vt(new $i(.075,.075,.12,8,1,!0),f(new qe({color:2236962,wireframe:!0})));I.position.y=-.17;let M=new oo(f(new br({map:nu("255,110,50"),blending:Vi,depthWrite:!1,transparent:!0,opacity:.6})));M.scale.set(.7,.7,1),M.position.y=-.17,G.add(ot,dt,I,M);let H=null;R()?(H=new xo(16738864,2.4,9,2),H.position.y=-.3,G.add(H)):S(k,.012,T,16738864,2.4,.18),C.push({light:H,mats:[At],glow:M,base:H?H.intensity:0,baseE:2.4,state:ft,t:ut*10,seed:ut})}else{let ot=new Vt(new we(.62,.08,1.22),P);ot.position.y=-.04;let At=ft==="flicker",dt=At?f(new qe({map:F0(),color:13160146,emissive:15397631,emissiveMap:F0(),emissiveIntensity:2.2,roughness:.4})):E,I=new Vt(new Ge(.56,1.16),dt);if(I.rotation.x=Math.PI/2,I.position.y=-.082,G.add(ot,I),!At&&ut<.3){G.rotation.x=(ut<.15?1:-1)*(.45+ut),G.position.y-=.35;let M=new Vt(new $i(.004,.004,.5,4),P);M.position.set(.25,.2,0),G.add(M)}if(At){let M=null;R()?(M=new xo(14674431,14,13,2),M.position.y=-.35,G.add(M)):S(k,.012,T,14674431,3,.3),C.push({light:M,mats:[dt],base:M?M.intensity:0,baseE:2.2,state:ft,t:ut*10,seed:ut,off:0})}}return c.add(G),G}function V(k,st,T,ft=0){let G=new Wt,ut=f(new qe({map:iu(),emissive:16777215,emissiveMap:iu(),emissiveIntensity:1.6,roughness:.5})),ot=new Vt(new we(.38,.2,.06),[P,P,P,P,ut,ut]),At=new oo(f(new br({map:nu("80,255,120"),blending:Vi,depthWrite:!1,transparent:!0,opacity:.55})));return At.scale.set(1.1,.7,1),G.add(ot,At),G.position.set(k,st,T),G.rotation.y=ft,c.add(G),G}let z=[];function X(k,st,T=a,ft={}){let G=ft.width??1.8,ut=ft.height??2.2,ot=ft.length??5.5,At=ft.rotY??0,dt=new Wt;dt.position.set(k,0,st),dt.rotation.y=At;let I=T?8492987:14477567,M=new go(I,T?6:60,16,.85,1,2);M.position.set(0,ut+.6,1.6);let H=new nn;H.position.set(0,0,-3.5),dt.add(M,H),M.target=H;let tt=f(new Zn({vertexShader:Dx,fragmentShader:Fx,transparent:!0,depthWrite:!1,blending:Vi,side:Ce,uniforms:{uColor:{value:new Zt(I)},uAlpha:{value:T?.16:.5},uTime:{value:0}}})),ht=new Vt(kx(G,ut,ot),tt);ht.position.z=-.05,ht.renderOrder=5,dt.add(ht);let at=f(new _n({map:Lx(),color:I,transparent:!0,opacity:T?.25:.55,blending:Vi,depthWrite:!1,fog:!1,side:Ce})),zt=new Vt(new Ge(G+2.2,ut+1.6),at);if(zt.position.set(0,ut/2+.1,-.12),zt.renderOrder=4,dt.add(zt),ft.sky!==!1){let Pt=f(new _n({color:T?2372170:15331576,toneMapped:!1,fog:!1})),Ft=new Vt(new Ge(G+6,ut+4),Pt);Ft.position.set(0,ut/2+1,2.4),Ft.rotation.y=Math.PI;let ne=f(new _n({color:T?3951200:13226716,fog:!1})),pt=new Vt(new Ge(G+6,2.3),ne);pt.rotation.x=-Math.PI/2,pt.position.set(0,.005,1.25),dt.add(Ft,pt)}return c.add(dt),z.push({x:k,z:st,w:G,L:ot,rotY:At,mat:tt,night:T}),{group:dt,light:M,shaft:ht}}let lt=[];function j(k,st){let T=k.min?{minX:k.min.x,maxX:k.max.x,minY:k.min.y,maxY:k.max.y,minZ:k.min.z,maxZ:k.max.z}:k,ft=(T.maxX-T.minX)*(T.maxY-T.minY)*(T.maxZ-T.minZ),G=st??Math.min(r?700:220,Math.max(80,Math.round(ft*(r?1.6:.6)))),ut=yn(Math.floor((T.minX+T.maxZ)*100)+7),ot=new Float32Array(G*3);for(let M=0;M<ot.length;M++)ot[M]=ut();let At=new Ue;At.setAttribute("seed",new Ye(ot,3)),At.setAttribute("position",new Ye(new Float32Array(G*3),3)),At.boundingSphere=null;let dt=f(new Zn({vertexShader:Ux,fragmentShader:Ox,transparent:!0,depthWrite:!1,blending:Vi,uniforms:{uTime:{value:0},uScale:{value:500},uMin:{value:new N(T.minX,T.minY,T.minZ)},uSize:{value:new N(T.maxX-T.minX,T.maxY-T.minY,T.maxZ-T.minZ)},uFlashPos:{value:new N},uFlashDir:{value:new N(0,0,-1)},uFlashCos:{value:Math.cos(.48)},uFlashOn:{value:0},uShaft:{value:[new Le(0,0,1,1),new Le(0,0,1,1)]},uShaftOn:{value:[0,0]}}})),I=new Ua(At,dt);return I.frustumCulled=!1,I.renderOrder=6,c.add(I),lt.push(dt),I}function gt(k,st,T,ft=0,G="closed",ut){let ot=ut??Math.floor(bo(k,T)*4),[At,dt]=tl[G]||tl.closed,I=f(new qe({map:Nx(G,ot),roughness:.92,alphaTest:.5,side:Ce,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-2})),M=new Vt(new Ge(At,dt),I);return M.position.set(k+Math.sin(ft)*.012,st,T+Math.cos(ft)*.012),M.rotation.set(0,ft,(bo(T,k)-.5)*.12),M.receiveShadow=!0,c.add(M),M}let J=0;function Ct(k,st,T="dirt",ft=1,G=0){let ut=Math.floor(bo(k*3,st*5)*3),ot=T==="water",At=f(new qe({map:k0(T,ut),transparent:!0,depthWrite:!1,roughness:ot?.06:T==="snow"?.85:.95,metalness:ot?.2:0,color:ot?10133670:16777215,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-4})),dt=new Vt(new Ge(ft,ft),At);return dt.rotation.set(-Math.PI/2,0,G),J=(J+1)%8,dt.position.set(k,.003+J*8e-4,st),dt.receiveShadow=!0,dt.renderOrder=1,c.add(dt),dt}let It=f(new Ue);It.setAttribute("position",new Ye(new Float32Array([0,0,0,.05,0,-.012,.018,0,.04]),3)),It.setAttribute("normal",new Ye(new Float32Array([0,1,0,0,1,0,0,1,0]),3));let Ot=f(new qe({color:14675698,roughness:.04,metalness:0,transparent:!0,opacity:.55,side:Ce,envMapIntensity:3}));function ie(k,st,T=1.2){let ft=new Wt,G=yn(Math.floor(bo(k,st)*1e6)+3),ut=Ct(k,st,"glass",T,G()*6.3);ut.material.roughness=.05,ut.material.envMapIntensity=3,ft.add(ut);for(let ot=0;ot<(r?18:8);ot++){let At=new Vt(It,Ot),dt=G()*6.3,I=G()**1.5*T*.45;At.position.set(k+Math.cos(dt)*I,.006,st+Math.sin(dt)*I),At.rotation.set((G()-.5)*.3,G()*6.3,(G()-.5)*.3),At.scale.setScalar(.6+G()*1.6),ft.add(At)}return c.add(ft),ft}function ye(k,st,T,ft,G=.7){let ut=k0("grime",0),ot=f(new _n({map:ut,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-3,color:16777215})),At=(dt,I,M,H)=>{let tt=new Vt(new Ge(M,G),ot);tt.rotation.set(-Math.PI/2,0,H),tt.position.set(dt,.002,I),tt.renderOrder=1,c.add(tt)};At((k+st)/2,T+G/2,st-k,0),At((k+st)/2,ft-G/2,st-k,Math.PI),At(k+G/2,(T+ft)/2,ft-T,Math.PI/2),At(st-G/2,(T+ft)/2,ft-T,-Math.PI/2)}let it=0,bt=new N,kt=new N,Mt=new N,Yt=new vt,re=1;function jt(k,st){if(it+=k,x){let T=p;g&&T<.2&&(Math.random()<k*3&&(re=.2+Math.random()*.6),re+=(1-re)*Math.min(1,k*6),T=(.35+T*3)*re),x.intensity=g?b*Math.max(0,Math.min(1,T)):0}for(let T of C){let ft;if(T.state==="emergency")ft=.88+.08*Math.sin(it*2.1+T.seed*9)+.04*Math.sin(it*31+T.seed*3);else{if(T.t-=k,T.t<=0){let G=Math.random();T.burst>0?(T.burst--,T.off=T.off?0:1,T.t=.03+Math.random()*.09):G<.5?(T.off=0,T.t=.8+Math.random()*3.5):G<.85?(T.burst=3+Math.floor(Math.random()*8),T.t=.05):(T.off=1,T.t=.4+Math.random()*1.6)}ft=T.off?.04:.92+Math.random()*.08}T.light&&(T.light.intensity=T.base*ft);for(let G of T.mats)G.emissiveIntensity=T.baseE*ft;T.glow&&(T.glow.material.opacity=.6*ft)}if(lt.length){e.getWorldPosition(bt),st&&bt.copy(st),e.getWorldDirection(kt),x?x.getWorldPosition(Mt):Mt.copy(bt),n.getDrawingBufferSize(Yt);let T=Yt.y/(2*Math.tan(Cs.degToRad(e.fov||70)/2));for(let ft of lt){let G=ft.uniforms;G.uTime.value=it,G.uScale.value=T,G.uFlashPos.value.copy(Mt),G.uFlashDir.value.copy(kt),G.uFlashOn.value=x?x.intensity/b:0;for(let ut=0;ut<2;ut++){let ot=z[ut];ot&&Math.abs(ot.rotY)<.01?(G.uShaft.value[ut].set(ot.x,ot.z,ot.w/2,ot.L),G.uShaftOn.value[ut]=ot.night?.25:1):G.uShaftOn.value[ut]=0}}}for(let T of z)T.mat.uniforms.uTime.value=it}function ve(){t.remove(c),x&&e.remove(x,_),c.traverse(k=>{k.geometry&&k.geometry.dispose()});for(let k of h)k.dispose?.();d&&(t.environment===d.texture&&(t.environment=null),d.dispose())}return{quality:s,group:c,fill:m,flashlight:x,update:jt,dispose:ve,addCeilingLight:O,addExitSign:V,addDoorLight:X,addDust:j,addWallNotice:gt,addDecal:Ct,addBrokenGlass:ie,addRoomShade:ye,setExposure:k=>{n.toneMappingExposure=k},lightsUsed:()=>L}}var vn=new Map,Bx=new Map,pu=new Map;function on(n,t,e){let i=n.get(t);return i===void 0&&(i=e(),n.set(t,i)),i}function Ps(n){let t=n>>>0^2654435769;return()=>{t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Ro(n){let t=2166136261;for(let e=0;e<n.length;e++)t^=n.charCodeAt(e),t=Math.imul(t,16777619);return t>>>0}var se=(n,t)=>t[Math.floor(n()*t.length)%t.length],Ht=Math.PI*2,zx='Arial, Helvetica, "Liberation Sans", "DejaVu Sans", sans-serif',Ki='"Arial Narrow", "Liberation Sans Narrow", Arial, Helvetica, sans-serif';function mu(n,t){if(typeof document<"u"){let e=document.createElement("canvas");return e.width=n,e.height=t,e}return typeof OffscreenCanvas<"u"?new OffscreenCanvas(n,t):null}function Tt(n,t,e,i,s={}){return on(pu,n,()=>{let r=mu(t,e);if(!r)return null;let o=r.getContext("2d");i(o,t,e,Ps(Ro(n)));let a=new Pn(r);return a.colorSpace=s.data?ni:We,a.anisotropy=4,s.repeat&&(a.wrapS=a.wrapT=Wi,a.repeat.set(s.repeat[0],s.repeat[1])),a})}function Jt(n,t,e,i,s,r={}){n.save(),n.font=`${r.italic?"italic ":""}${r.weight||"bold"} ${s}px ${r.font||zx}`,n.fillStyle=r.color||"#111",n.textAlign=r.align||"center",n.textBaseline=r.baseline||"middle",n.translate(e,i),r.rot&&n.rotate(r.rot);let o=n.measureText(t).width,a=r.sx||1;r.maxW&&o*a>r.maxW?n.scale(r.maxW/o,1):a!==1&&n.scale(a,1),r.stroke&&(n.lineWidth=r.strokeW||s*.12,n.strokeStyle=r.stroke,n.lineJoin="round",n.strokeText(t,0,0)),n.fillText(t,0,0),n.restore()}function $e(n,t,e,i,s,r,o,a="rgba(0,0,0,0.55)"){n.fillStyle=a;for(let l=0;l<s;l++){let c=t,h=t+i*(l===s-1?.3+o()*.5:.85+o()*.15);for(;c<h;){let f=Math.min(h-c,r*(.8+o()*3));n.fillRect(c,e+l*r,f,r*.55),c+=f+r*.45}}}function Co(n,t,e,i,s,r){n.fillStyle="#fff",n.fillRect(t-i*.06,e-s*.06,i*1.12,s*1.3),n.fillStyle="#000";let o=t;for(;o<t+i;){let a=Math.max(1,(r()<.6?1:2+Math.floor(r()*2))*i/95);r()<.55&&n.fillRect(o,e,a,s),o+=a}n.fillRect(t,e,i/95,s*1.08),n.fillRect(t+i-i/95,e,i/95,s*1.08),$e(n,t+i*.1,e+s*1.06,i*.8,1,s*.18,r,"#000")}function gu(n,t,e,i,s,r){n.fillStyle="#fff",n.fillRect(t,e,i,s),n.strokeStyle="#000",n.lineWidth=Math.max(1,i*.012),n.strokeRect(t,e,i,s),Jt(n,"Nutrition Facts",t+i*.06,e+s*.08,s*.1,{align:"left",color:"#000",maxW:i*.88,font:Ki}),n.fillStyle="#000",n.fillRect(t+i*.05,e+s*.17,i*.9,s*.035);let o=9;for(let a=0;a<o;a++){let l=e+s*(.24+a*.075);$e(n,t+i*.06,l,i*.6,1,s*.05,r,"#000"),$e(n,t+i*.78,l,i*.14,1,s*.05,r,"#000"),n.fillRect(t+i*.05,l+s*.055,i*.9,Math.max(1,s*.006))}n.fillRect(t+i*.05,e+s*.92,i*.9,s*.02)}function fe(n,t,e,i,s=1){for(let r=0;r<260*s;r++){n.fillStyle=i()<.5?`rgba(70,60,45,${.05+i()*.08})`:`rgba(255,255,255,${.04+i()*.06})`;let o=1+i()*2.5;n.fillRect(i()*t,i()*e,o,o)}for(let r=0;r<4*s;r++){let o=i()*t,a=i()*e,l=(.05+i()*.18)*Math.max(t,e),c=n.createRadialGradient(o,a,0,o,a,l);c.addColorStop(0,`rgba(80,66,44,${.05+i()*.08})`),c.addColorStop(1,"rgba(80,66,44,0)"),n.fillStyle=c,n.fillRect(o-l,a-l,l*2,l*2)}for(let r=0;r<3*s;r++){n.strokeStyle=`rgba(255,255,255,${.08+i()*.1})`,n.lineWidth=1,n.beginPath();let o=i()*t,a=i()*e;n.moveTo(o,a),n.lineTo(o+(i()-.5)*t*.3,a+(i()-.5)*e*.2),n.stroke()}}function Me(n,t,e,i,s,r,o=4e3,a=2){n.fillStyle=s,n.fillRect(0,0,t,e);for(let l=0;l<o;l++){let c=(i()-.5)*r;n.fillStyle=c>0?`rgba(255,255,255,${c})`:`rgba(0,0,0,${-c})`,n.fillRect(i()*t,i()*e,a*(.5+i()),a*(.5+i()))}}function jn(n,t){let e=new Zt(n);return t<0?e.multiplyScalar(1+t):e.lerp(new Zt(16777215),t),"#"+e.getHexString()}function ol(n,t,e,i,s,r){n.save(),n.translate(e,i);let o=(l,c,h,f)=>{n.fillStyle=f,n.beginPath(),n.arc(l,c,h,0,Ht),n.fill()},a=(l,c,h,f,u,d)=>{n.fillStyle=d,n.beginPath(),n.ellipse(l,c,h,f,u,0,Ht),n.fill()};switch(t){case"beans":case"chili":a(0,s*.25,s*.9,s*.35,0,"#f3efe6"),a(0,s*.12,s*.75,s*.28,0,t==="chili"?"#7a1e10":"#9a4a1c");for(let l=0;l<16;l++)a((r()-.5)*s*1.2,s*(.05+r()*.15),s*.13,s*.08,r()*3,t==="chili"?"#5a140c":"#c06a2c");break;case"soup":a(0,s*.3,s*.95,s*.4,0,"#fafafa"),a(0,s*.18,s*.78,s*.26,0,"#e8b850");for(let l=0;l<9;l++)a((r()-.5)*s,s*(.1+r()*.12),s*.12,s*.05,r()*3,r()<.5?"#f6e3b0":"#d9822b");n.strokeStyle="rgba(255,255,255,0.8)",n.lineWidth=s*.06;for(let l=-1;l<=1;l++)n.beginPath(),n.moveTo(l*s*.3,-s*.15),n.bezierCurveTo(l*s*.3+s*.15,-s*.4,l*s*.3-s*.15,-s*.55,l*s*.3,-s*.8),n.stroke();break;case"corn":for(let l=0;l<30;l++)o((r()-.5)*s*1.4,(r()-.5)*s*.9,s*.13,l%3?"#f2c21b":"#e0a812");a(-s*.6,s*.1,s*.5,s*.15,-.6,"#5c9a2c");break;case"peas":for(let l=0;l<26;l++)o((r()-.5)*s*1.4,(r()-.5)*s*.9,s*.14,l%4?"#5aa43a":"#3f8a28");break;case"tomato":case"fruit":case"peach":case"apple":{let l=t==="tomato"?"#d8261c":t==="peach"?"#f39a42":t==="apple"?"#c8221c":"#f2a33a";o(-s*.35,s*.1,s*.5,l),o(s*.4,s*.15,s*.45,t==="fruit"?"#f2d24a":l),a(-s*.5,-s*.1,s*.15,s*.1,-.5,"rgba(255,255,255,0.45)"),a(-s*.3,-s*.42,s*.22,s*.08,-.4,"#3f8a28");break}case"fish":a(0,0,s*.85,s*.35,0,"#7f98ad"),n.fillStyle="#7f98ad",n.beginPath(),n.moveTo(s*.7,0),n.lineTo(s*1.1,-s*.35),n.lineTo(s*1.1,s*.35),n.fill(),o(-s*.55,-s*.05,s*.07,"#111");break;case"grain":n.strokeStyle="#c9a24a",n.lineWidth=s*.06;for(let l=-1;l<=1;l++){n.beginPath(),n.moveTo(l*s*.3,s*.9),n.lineTo(l*s*.15,-s*.6),n.stroke();for(let c=0;c<6;c++)a(l*s*.15-s*.1,-s*.5+c*s*.18,s*.1,s*.05,.6,"#d9b25a"),a(l*s*.15+s*.1,-s*.5+c*s*.18,s*.1,s*.05,-.6,"#d9b25a")}break;case"noodle":a(0,s*.3,s*.9,s*.35,0,"#fff"),n.strokeStyle="#f0d48a",n.lineWidth=s*.06;for(let l=0;l<7;l++){n.beginPath(),n.moveTo(-s*.7,s*(.05+l*.05));for(let c=-.7;c<=.7;c+=.1)n.lineTo(c*s,s*(.05+l*.05)+Math.sin(c*14+l)*s*.05);n.stroke()}a(s*.3,s*.08,s*.15,s*.07,0,"#d9822b"),a(-s*.25,s*.12,s*.1,s*.06,0,"#5aa43a");break;case"chip":for(let l=0;l<7;l++)a((r()-.5)*s*1.3,(r()-.3)*s*.9,s*.38,s*.26,r()*3,l%2?"#f0c24a":"#e6ae32");break;case"meat":for(let l=0;l<4;l++)n.fillStyle=l%2?"#6a2c18":"#7d3a1e",n.save(),n.rotate(-.4+l*.25),n.fillRect(-s*.8,-s*.12+l*s*.05,s*1.6,s*.2),n.restore();break;case"oats":a(0,s*.3,s*.95,s*.4,0,"#2a4f8a"),a(0,s*.18,s*.8,s*.27,0,"#e9dcc0");for(let l=0;l<30;l++)a((r()-.5)*s*1.3,s*(.08+r()*.18),s*.07,s*.04,r()*3,"#cdb98a");Hx(n,s*.6,-s*.4,s*.5);break;case"peanut":for(let l=0;l<3;l++)n.save(),n.translate((l-1)*s*.55,l%2*s*.2),n.rotate(.5-l*.4),a(0,-s*.18,s*.22,s*.25,0,"#d4a35c"),a(0,s*.18,s*.24,s*.27,0,"#d4a35c"),n.restore();break;case"cross":n.fillStyle="#d61f26",n.fillRect(-s*.2,-s*.65,s*.4,s*1.3),n.fillRect(-s*.65,-s*.2,s*1.3,s*.4);break;case"wcross":n.fillStyle="#fff",n.fillRect(-s*.2,-s*.65,s*.4,s*1.3),n.fillRect(-s*.65,-s*.2,s*1.3,s*.4);break;case"pill":n.save(),n.rotate(-.5),n.fillStyle="#fff",n.beginPath(),n.roundRect(-s*.7,-s*.25,s*.7,s*.5,[s*.25,0,0,s*.25]),n.fill(),n.fillStyle="#e8572a",n.beginPath(),n.roundRect(0,-s*.25,s*.7,s*.5,[0,s*.25,s*.25,0]),n.fill(),n.restore(),o(s*.5,s*.45,s*.2,"#fff");break;case"drop":n.fillStyle="#3d8fd6",n.beginPath(),n.moveTo(0,-s*.8),n.bezierCurveTo(s*.7,0,s*.6,s*.7,0,s*.7),n.bezierCurveTo(-s*.6,s*.7,-s*.7,0,0,-s*.8),n.fill(),a(-s*.2,s*.2,s*.12,s*.2,.3,"rgba(255,255,255,0.5)");break;case"bolt":n.fillStyle="#f5c518",n.beginPath(),n.moveTo(s*.1,-s*.8),n.lineTo(-s*.45,s*.1),n.lineTo(-s*.05,s*.1),n.lineTo(-s*.2,s*.8),n.lineTo(s*.45,-s*.15),n.lineTo(s*.05,-s*.15),n.closePath(),n.fill();break;case"flame":n.fillStyle="#f08a1c",n.beginPath(),n.moveTo(0,-s*.85),n.bezierCurveTo(s*.7,-s*.1,s*.55,s*.75,0,s*.75),n.bezierCurveTo(-s*.55,s*.75,-s*.6,0,0,-s*.85),n.fill(),n.fillStyle="#ffd34a",n.beginPath(),n.moveTo(0,-s*.2),n.bezierCurveTo(s*.35,s*.2,s*.3,s*.65,0,s*.65),n.bezierCurveTo(-s*.3,s*.65,-s*.3,s*.2,0,-s*.2),n.fill();break;case"paw":a(0,s*.3,s*.42,s*.36,0,"#3b2a1c"),a(-s*.48,-s*.15,s*.16,s*.21,-.3,"#3b2a1c"),a(-s*.17,-s*.45,s*.16,s*.21,-.1,"#3b2a1c"),a(s*.17,-s*.45,s*.16,s*.21,.1,"#3b2a1c"),a(s*.48,-s*.15,s*.16,s*.21,.3,"#3b2a1c");break;case"bug":a(0,0,s*.3,s*.45,0,"#3a2a1a"),n.strokeStyle="#3a2a1a",n.lineWidth=s*.06;for(let l=-1;l<=1;l++)n.beginPath(),n.moveTo(-s*.25,l*s*.2),n.lineTo(-s*.6,l*s*.35),n.moveTo(s*.25,l*s*.2),n.lineTo(s*.6,l*s*.35),n.stroke();n.strokeStyle="#d61f26",n.lineWidth=s*.12,n.beginPath(),n.arc(0,0,s*.8,0,Ht),n.moveTo(-s*.56,-s*.56),n.lineTo(s*.56,s*.56),n.stroke();break;case"leaf":case"seedling":n.strokeStyle="#3f7a2a",n.lineWidth=s*.08,n.beginPath(),n.moveTo(0,s*.8),n.lineTo(0,-s*.1),n.stroke(),a(-s*.3,-s*.2,s*.35,s*.16,-.5,"#5aa43a"),a(s*.3,-s*.35,s*.35,s*.16,.5,"#6bb84a");break;case"carrot":n.fillStyle="#ee7a1c",n.beginPath(),n.moveTo(-s*.3,-s*.5),n.lineTo(s*.3,-s*.5),n.lineTo(0,s*.9),n.fill(),a(-s*.15,-s*.75,s*.12,s*.3,-.3,"#4c9a2c"),a(s*.15,-s*.75,s*.12,s*.3,.3,"#4c9a2c");break;case"bean":n.strokeStyle="#4c9a2c",n.lineWidth=s*.18,n.lineCap="round";for(let l=-1;l<=1;l++)n.beginPath(),n.moveTo(l*s*.35,-s*.7),n.quadraticCurveTo(l*s*.35+s*.3,0,l*s*.35,s*.7),n.stroke();break;case"sun":o(0,0,s*.45,"#f5b51c"),n.strokeStyle="#f5b51c",n.lineWidth=s*.08;for(let l=0;l<12;l++){let c=l*Ht/12;n.beginPath(),n.moveTo(Math.cos(c)*s*.58,Math.sin(c)*s*.58),n.lineTo(Math.cos(c)*s*.85,Math.sin(c)*s*.85),n.stroke()}break;case"snow":n.strokeStyle="#fff",n.lineWidth=s*.08;for(let l=0;l<3;l++)n.save(),n.rotate(l*Math.PI/3),n.beginPath(),n.moveTo(0,-s*.8),n.lineTo(0,s*.8),n.moveTo(-s*.2,-s*.6),n.lineTo(0,-s*.4),n.lineTo(s*.2,-s*.6),n.moveTo(-s*.2,s*.6),n.lineTo(0,s*.4),n.lineTo(s*.2,s*.6),n.stroke(),n.restore();break;case"screw":n.fillStyle="#9aa0a6",n.fillRect(-s*.1,-s*.5,s*.2,s*1.2),n.fillRect(-s*.3,-s*.65,s*.6,s*.15),n.strokeStyle="#555",n.lineWidth=s*.05;for(let l=0;l<8;l++)n.beginPath(),n.moveTo(-s*.14,-s*.4+l*s*.13),n.lineTo(s*.14,-s*.34+l*s*.13),n.stroke();break;case"battery":n.fillStyle="#1a1a1a",n.fillRect(-s*.3,-s*.55,s*.6,s*1.3),n.fillStyle="#c98a2a",n.fillRect(-s*.3,-s*.55,s*.6,s*.4),n.fillStyle="#bbb",n.fillRect(-s*.1,-s*.7,s*.2,s*.15);break;case"tooth":n.fillStyle="#fff",n.beginPath(),n.moveTo(-s*.5,-s*.4),n.quadraticCurveTo(0,-s*.7,s*.5,-s*.4),n.lineTo(s*.35,s*.7),n.lineTo(s*.1,s*.1),n.lineTo(-s*.1,s*.1),n.lineTo(-s*.35,s*.7),n.closePath(),n.fill();break;case"bubble":for(let l=0;l<7;l++)n.strokeStyle="rgba(255,255,255,0.9)",n.lineWidth=s*.05,n.beginPath(),n.arc((r()-.5)*s*1.2,(r()-.5)*s*1.2,s*(.1+r()*.25),0,Ht),n.stroke();break;case"moon":o(0,0,s*.6,"#f2e6a0"),o(s*.28,-s*.15,s*.5,"rgba(20,30,70,1)");break;case"bottle":n.fillStyle="rgba(255,255,255,0.9)",n.fillRect(-s*.25,-s*.2,s*.5,s*.9),n.fillRect(-s*.1,-s*.5,s*.2,s*.3);break;default:o(0,0,s*.5,"rgba(255,255,255,0.6)")}n.restore()}function Hx(n,t,e,i){n.save(),n.translate(t,e),n.strokeStyle="#c9a24a",n.lineWidth=i*.06,n.beginPath(),n.moveTo(0,i),n.lineTo(0,-i*.5),n.stroke(),n.fillStyle="#d9b25a";for(let s=0;s<5;s++)n.beginPath(),n.ellipse(-i*.1,-i*.4+s*i*.2,i*.1,i*.05,.6,0,Ht),n.ellipse(i*.1,-i*.4+s*i*.2,i*.1,i*.05,-.6,0,Ht),n.fill();n.restore()}function xu(n,t,e,i,s){n.fillStyle=i.b,n.fillRect(0,0,t,e),n.fillStyle=i.a,n.fillRect(0,0,t,e*.12),n.fillRect(0,e*.88,t,e*.12),n.fillStyle=jn(i.a,.25),n.beginPath(),n.moveTo(t*.22,e*.62),n.bezierCurveTo(t*.4,e*.5,t*.6,e*.75,t*.78,e*.6),n.lineTo(t*.78,e*.88),n.lineTo(t*.22,e*.88),n.fill();let r=t*.5,o=t*.42;i.p&&(n.fillStyle="rgba(255,255,255,0.18)",n.beginPath(),n.ellipse(r,e*.66,o*.36,e*.2,0,0,Ht),n.fill(),ol(n,i.p,r,e*.66,e*.17,s)),Jt(n,i.t,r,e*.3,e*.2,{color:i.f,maxW:o,font:Ki,stroke:i.st}),i.s&&Jt(n,i.s,r,e*.45,e*.08,{color:i.f,maxW:o*.9,weight:"bold"}),i.n&&Jt(n,i.n,r,e*.94,e*.055,{color:i.nf||"#fff",maxW:o}),i.tag&&Jt(n,i.tag,r,e*.06,e*.06,{color:"#fff",maxW:o}),gu(n,t*.04,e*.16,t*.16,e*.68,s),$e(n,t*.8,e*.18,t*.16,6,e*.045,s,"rgba(0,0,0,0.45)"),Co(n,t*.82,e*.52,t*.12,e*.2,s),fe(n,t,e,s,.8)}function _u(n,t,e,i,s){n.fillStyle=i.b,n.fillRect(0,0,t,e),n.fillStyle=i.a,n.fillRect(0,0,t,e*.16),n.beginPath(),n.moveTo(0,e*.16),n.lineTo(t,e*.16),n.lineTo(t,e*.22),n.quadraticCurveTo(t*.5,e*.3,0,e*.22),n.fill(),i.tag&&(n.fillStyle=i.tc||"#e8302a",n.beginPath(),n.arc(t*.82,e*.3,Math.min(t,e)*.12,0,Ht),n.fill(),Jt(n,i.tag,t*.82,e*.3,Math.min(t,e)*.06,{color:"#fff",maxW:Math.min(t,e)*.2})),i.top&&Jt(n,i.top,t/2,e*.08,e*.07,{color:i.tf||"#fff",maxW:t*.86}),Jt(n,i.t,t/2,e*(i.t2?.34:.4),Math.min(e*.13,t*.3),{color:i.f,maxW:t*.88,font:Ki,stroke:i.st}),i.t2&&Jt(n,i.t2,t/2,e*.46,Math.min(e*.1,t*.24),{color:i.f,maxW:t*.88,font:Ki,stroke:i.st}),i.s&&Jt(n,i.s,t/2,e*.56,Math.min(e*.055,t*.1),{color:i.f,maxW:t*.85}),i.p&&(n.fillStyle="rgba(255,255,255,0.16)",n.beginPath(),n.ellipse(t/2,e*.75,t*.36,e*.13,0,0,Ht),n.fill(),ol(n,i.p,t/2,e*.75,Math.min(t*.32,e*.14),s)),i.n&&(n.fillStyle="rgba(0,0,0,0.25)",n.fillRect(0,e*.91,t,e*.09),Jt(n,i.n,t/2,e*.955,e*.045,{color:"#fff",maxW:t*.9})),fe(n,t,e,s,.7)}function Gx(n,t,e,i,s){n.fillStyle=i.b,n.fillRect(0,0,t,e),n.fillStyle=i.a,n.fillRect(0,0,t,e*.16),i.food!==!1?gu(n,t*.1,e*.22,t*.8,e*.5,s):(n.fillStyle="#fff",n.fillRect(t*.08,e*.22,t*.84,e*.5),$e(n,t*.12,e*.25,t*.76,12,e*.035,s,"#333")),Co(n,t*.2,e*.78,t*.6,e*.12,s),fe(n,t,e,s,.7)}function Q(n,t,e){return on(vn,`box${n},${t},${e}`,()=>new we(n,t,e).translate(0,t/2,0))}function Z(n,t,e,i=16,s=!1){return on(vn,`cyl${n},${t},${e},${i},${s}`,()=>new $i(n,t,e,i,1,s,Math.PI,Ht).translate(0,e/2,0))}function pn(n,t=12,e=8){return on(vn,`sph${n},${t},${e}`,()=>new Zi(n,t,e))}function oi(n,t=16){return on(vn,`circ${n},${t}`,()=>new co(n,t).rotateX(-Math.PI/2))}function Ne(n,t,e=6,i=16,s=Ht){return on(vn,`tor${n},${t},${e},${i},${s}`,()=>new Xa(n,t,e,i,s))}function Xe(n,t,e=16){return on(vn,"lathe"+n+e,()=>new Ga(t.map(i=>new vt(Math.max(1e-4,i[0]),i[1])),e,Math.PI,Ht))}function Ln(n,t,e,i=16,s=6,r=!1){return on(vn,"tube"+n,()=>new po(new Er(t.map(o=>new N(o[0],o[1],o[2])),r),i,e,s,r))}function Kt(n,t,e,i){return on(vn,`rbox${n},${t},${e},${i}`,()=>{let s=new we(n,t,e,3,3,3),r=s.attributes.position,o=s.attributes.normal,a=n/2,l=t/2,c=e/2,h=Math.min(i,a*.9,l*.9,c*.9),f=a-h,u=l-h,d=c-h,m=new N,x=new N,g=(p,b,_)=>Math.abs(Math.abs(p)-b/3)<1e-6?Math.sign(p)*_:p;for(let p=0;p<r.count;p++){m.set(g(r.getX(p),a,f),g(r.getY(p),l,u),g(r.getZ(p),c,d)),x.set(Cs.clamp(m.x,-f,f),Cs.clamp(m.y,-u,u),Cs.clamp(m.z,-d,d));let b=m.clone().sub(x);b.lengthSq()>1e-12&&(b.normalize(),m.copy(x).addScaledVector(b,h),o.setXYZ(p,b.x,b.y,b.z)),r.setXYZ(p,m.x,m.y+l,m.z)}return s})}function Io(n,t,e,i=.08,s=6,r=8){return on(vn,`pil${n},${t},${e},${i},${s},${r}`,()=>{let o=new we(n,t,e,s,r,1),a=o.attributes.position;for(let l=0;l<a.count;l++){let c=a.getX(l),h=a.getY(l),f=a.getZ(l),u=Math.abs(c)/(n/2),d=Math.abs(h)/(t/2),m=Math.sqrt(Math.max(0,1-u**4))*Math.sqrt(Math.max(0,1-d**3));i>0&&d>1-i*2&&(m=.06),m=Math.max(.06,m),a.setXYZ(l,c*(1-.04*(1-d)),h+t/2,f*m)}return o.computeVertexNormals(),o})}function ru(n,t,e,i=.001){return on(vn,"ext"+n,()=>{let s=new Va(t(),{depth:e,bevelEnabled:i>0,bevelThickness:i,bevelSize:i,bevelSegments:1,curveSegments:6});return s.translate(0,0,-e/2),s})}function ee(n,t){return on(Bx,n,()=>new qe(t))}function nt(n,t=.7,e=0){return ee(`c${n}|${t}|${e}`,{color:n,roughness:t,metalness:e})}function Y(n,t=.7,e=0,i={}){let s=`t${n?n.uuid:"none"}|${t}|${e}|${JSON.stringify(i)}`;return ee(s,{map:n,roughness:t,metalness:e,...i})}var rt={get steel(){return nt(11844030,.38,.55)},get tin(){return nt(13817304,.32,.6)},get alu(){return nt(13225168,.3,.55)},get chrome(){return nt(14212064,.22,.6)},get darkMetal(){return nt(3816769,.5,.45)},get brass(){return nt(12950085,.35,.6)},get blackPl(){return nt(1908256,.55)},get whitePl(){return nt(15526886,.45)},get greyPl(){return nt(9080208,.55)},get rubber(){return nt(1710618,.92)},get paper(){return nt(15789282,.85)},get glass(){return ee("glass",{color:13624298,roughness:.08,metalness:.1,transparent:!0,opacity:.32,depthWrite:!1})},get clearPl(){return ee("clearpl",{color:15003378,roughness:.15,metalness:0,transparent:!0,opacity:.4,depthWrite:!1})}};function us(n=0){return Tt("cardboard"+n,256,256,(t,e,i,s)=>{Me(t,e,i,s,n===1?"#b99868":"#a9824f",.12,3e3,2),t.strokeStyle="rgba(80,55,25,0.18)",t.lineWidth=1;for(let r=0;r<i;r+=4+s()*3)t.beginPath(),t.moveTo(0,r),t.lineTo(e,r+(s()-.5)*3),t.stroke();fe(t,e,i,s,.6)})}function Z0(n="FRAGILE",t=0){return Tt("carton"+n+t,512,512,(e,i,s,r)=>{Me(e,i,s,r,"#ad8653",.1,4e3,2),e.strokeStyle="rgba(80,55,25,0.15)";for(let o=0;o<s;o+=5+r()*3)e.beginPath(),e.moveTo(0,o),e.lineTo(i,o),e.stroke();e.fillStyle="rgba(200,170,110,0.75)",e.fillRect(i*.43,0,i*.14,s),e.fillStyle="rgba(255,255,255,0.15)",e.fillRect(i*.45,0,i*.02,s),e.fillStyle="rgba(40,30,20,0.75)",Jt(e,n,i*.22,s*.25,34,{color:"rgba(40,30,20,0.8)",maxW:i*.36,font:Ki}),Jt(e,`${12+t%4*12} CT`,i*.78,s*.25,30,{color:"rgba(40,30,20,0.8)",maxW:i*.36});for(let o=0;o<2;o++){let a=i*(.72+o*.12),l=s*.72;e.beginPath(),e.moveTo(a,l-40),e.lineTo(a-18,l-12),e.lineTo(a-6,l-12),e.lineTo(a-6,l+30),e.lineTo(a+6,l+30),e.lineTo(a+6,l-12),e.lineTo(a+18,l-12),e.fill()}e.strokeStyle="rgba(40,30,20,0.7)",e.lineWidth=3,e.strokeRect(i*.06,s*.62,i*.3,s*.2),$e(e,i*.08,s*.65,i*.26,5,10,r,"rgba(40,30,20,0.6)"),fe(e,i,s,r,1.2)})}function Nr(n="#b98c5a",t="#8a5f35",e=""){return Tt("wood"+n+t+e,256,256,(i,s,r,o)=>{i.fillStyle=n,i.fillRect(0,0,s,r);for(let a=0;a<60;a++){i.strokeStyle=`rgba(${a%2?"90,55,25":"60,35,15"},${.08+o()*.2})`,i.lineWidth=1+o()*3;let l=o()*r;i.beginPath(),i.moveTo(0,l);for(let c=0;c<=s;c+=16)i.lineTo(c,l+Math.sin(c*.02+a)*4+(o()-.5)*2);i.stroke()}i.fillStyle=t,i.globalAlpha=.25;for(let a=0;a<3;a++)i.beginPath(),i.ellipse(o()*s,o()*r,6+o()*6,3+o()*3,0,0,Ht),i.fill();i.globalAlpha=1,fe(i,s,r,o,.5)},{repeat:[1,1]})}function Vx(){return Tt("bark",256,256,(n,t,e,i)=>{Me(n,t,e,i,"#4f3b2a",.25,3e3,3);for(let s=0;s<40;s++){n.strokeStyle=`rgba(20,12,6,${.3+i()*.4})`,n.lineWidth=2+i()*4;let r=i()*t;n.beginPath(),n.moveTo(r,0);for(let o=0;o<=e;o+=20)n.lineTo(r+(i()-.5)*12,o);n.stroke()}n.fillStyle="rgba(110,120,80,0.25)";for(let s=0;s<8;s++)n.beginPath(),n.ellipse(i()*t,i()*e,10+i()*20,5+i()*10,i()*3,0,Ht),n.fill()},{repeat:[1,1]})}function ou(n=!1){return Tt("endgrain"+n,128,128,(t,e,i,s)=>{t.fillStyle="#c9a26c",t.fillRect(0,0,e,i);let r=n?0:e/2,o=n?i:i/2;for(let a=1;a<26;a++)t.strokeStyle=`rgba(120,80,40,${.2+s()*.3})`,t.lineWidth=1+s(),t.beginPath(),t.arc(r,o,a*6+s()*2,0,Ht),t.stroke();t.strokeStyle="rgba(60,40,20,0.5)",t.lineWidth=1.5;for(let a=0;a<4;a++)t.beginPath(),t.moveTo(r,o),t.lineTo(r+(s()-.3)*e,o-s()*i),t.stroke()})}function Eo(n,t=""){return Tt("knit"+n+t,128,128,(e,i,s,r)=>{e.fillStyle=n,e.fillRect(0,0,i,s);let o=jn(n,-.35),a=jn(n,.18);for(let l=0;l<i;l+=8)for(let c=0;c<s;c+=8)e.fillStyle=a,e.beginPath(),e.ellipse(l+2,c+4,2.2,4,-.5,0,Ht),e.ellipse(l+6,c+4,2.2,4,.5,0,Ht),e.fill(),e.fillStyle=o,e.fillRect(l+3.6,c,.8,8);fe(e,i,s,r,.3)},{repeat:[3,3]})}function Wx(n){return Tt("quilt"+n,256,256,(t,e,i,s)=>{let r=jn(n,-.45),o=jn(n,.22);for(let a=0;a<i;a+=32){let l=t.createLinearGradient(0,a,0,a+32);l.addColorStop(0,r),l.addColorStop(.15,n),l.addColorStop(.5,o),l.addColorStop(.85,n),l.addColorStop(1,r),t.fillStyle=l,t.fillRect(0,a,e,32),t.fillStyle="rgba(0,0,0,0.35)";for(let c=0;c<e;c+=6)t.fillRect(c,a+31,3,1)}fe(t,e,i,s,.4)},{repeat:[1,1]})}function xi(n,t=""){return Tt("nylon"+n+t,128,128,(e,i,s,r)=>{Me(e,i,s,r,n,.06,1500,1),e.strokeStyle="rgba(0,0,0,0.12)",e.lineWidth=1;for(let o=0;o<i;o+=8)e.beginPath(),e.moveTo(o,0),e.lineTo(o,s),e.moveTo(0,o),e.lineTo(i,o),e.stroke();fe(e,i,s,r,.4)},{repeat:[2,2]})}function yu(n,t,e){return Tt("plaid"+n+t+e,256,256,(i,s,r,o)=>{i.fillStyle=n,i.fillRect(0,0,s,r),i.globalAlpha=.55,i.fillStyle=t;for(let a=0;a<s;a+=64)i.fillRect(a,0,24,r),i.fillRect(0,a,s,24);i.fillStyle=e,i.globalAlpha=.7;for(let a=40;a<s;a+=64)i.fillRect(a,0,4,r),i.fillRect(0,a,s,4);i.globalAlpha=1,q0(i,s,r,o,.05)},{repeat:[1,1]})}function q0(n,t,e,i,s){for(let r=0;r<2500;r++){let o=(i()-.5)*s;n.fillStyle=o>0?`rgba(255,255,255,${o})`:`rgba(0,0,0,${-o})`,n.fillRect(i()*t,i()*e,2,2)}}function Lr(n="#b9bec4",t=""){return Tt("brushed"+n+t,128,128,(e,i,s,r)=>{e.fillStyle=n,e.fillRect(0,0,i,s);for(let o=0;o<300;o++)e.fillStyle=r()<.5?"rgba(255,255,255,0.12)":"rgba(0,0,0,0.1)",e.fillRect(0,r()*s,i,1);fe(e,i,s,r,.5)})}function $0(n,t=""){return Tt("paint"+n+t,256,256,(e,i,s,r)=>{Me(e,i,s,r,n,.06,2e3,2);for(let o=0;o<40;o++)e.fillStyle=r()<.6?"rgba(70,70,72,0.85)":"rgba(110,60,30,0.6)",e.beginPath(),e.ellipse(r()*i,r()*s,1+r()*6,1+r()*3,r()*3,0,Ht),e.fill();fe(e,i,s,r,.8)})}function Xx(n=""){return Tt("lid"+n,128,128,(t,e,i,s)=>{let r=t.createRadialGradient(64,64,0,64,64,64);r.addColorStop(0,"#d9dcdf"),r.addColorStop(1,"#a9adb2"),t.fillStyle=r,t.fillRect(0,0,e,i),t.strokeStyle="rgba(0,0,0,0.25)",t.lineWidth=2;for(let o of[60,54,46,38])t.beginPath(),t.arc(64,64,o,0,Ht),t.stroke();t.strokeStyle="rgba(255,255,255,0.4)",t.lineWidth=1;for(let o of[57,50,42])t.beginPath(),t.arc(64,64,o,0,Ht),t.stroke();fe(t,e,i,s,.5)})}function v(n,t,e,i=0,s=0,r=0,o=0,a=0,l=0,c=1,h=1,f=1){let u=new Vt(t,e);return u.position.set(i,s,r),u.rotation.set(o,a,l),(c!==1||h!==1||f!==1)&&u.scale.set(c,h,f),u.castShadow=!0,u.receiveShadow=!0,n.add(u),u}function Yx(n,t,e,i){return[t,t,e||t,e||t,n,i||t]}function _i(n,t=512,e=200){return Tt("wrap"+JSON.stringify(n)+t+"x"+e,t,e,(i,s,r,o)=>xu(i,s,r,n,o))}function ai(n,t=256,e=384){return Tt("front"+JSON.stringify(n)+t+"x"+e,t,e,(i,s,r,o)=>_u(i,s,r,n,o))}function qx(n,t=128,e=256){return Tt("side"+n.b+n.a+(n.food===!1)+t+"x"+e,t,e,(i,s,r,o)=>Gx(i,s,r,n,o))}function Jn(n,t,e,i,s,r={}){let o=Y(ai(s,r.tw||256,r.th||Math.round(256*e/t)),r.rough??.65),a=Y(qx(s,128,256),r.rough??.65),l=nt(new Zt(s.a).getHex(),r.rough??.65),c=r.r?Kt(t,e,i,r.r):Q(t,e,i);return v(n,c,Yx(o,a,l,r.backSame?o:a))}function $x(n){n.updateMatrixWorld(!0);let t=new de().copy(n.matrixWorld).invert(),e=new Map,i=new de,s=new me,r=new N,o=new N;n.traverse(l=>{if(!l.isMesh)return;i.multiplyMatrices(t,l.matrixWorld),s.getNormalMatrix(i);let c=i.determinant()<0,h=l.geometry,f=h.attributes.position,u=h.attributes.normal,d=h.attributes.uv,m=h.index,x=Array.isArray(l.material)?l.material:null,g=x?h.groups.length?h.groups:[{start:0,count:m?m.count:f.count,materialIndex:0}]:[{start:0,count:m?m.count:f.count,materialIndex:-1}];for(let p of g){let b=x?x[p.materialIndex]:l.material;if(!b)continue;let _=e.get(b);_||(_={p:[],n:[],u:[]},e.set(b,_));let y=Math.min(p.start+p.count,m?m.count:f.count);for(let L=p.start;L+2<y;L+=3){let R=c?[L,L+2,L+1]:[L,L+1,L+2];for(let C of R){let P=m?m.getX(C):C;r.fromBufferAttribute(f,P).applyMatrix4(i),_.p.push(r.x,r.y,r.z),u?(o.fromBufferAttribute(u,P).applyMatrix3(s).normalize(),_.n.push(o.x,o.y,o.z)):_.n.push(0,1,0),d?_.u.push(d.getX(P),d.getY(P)):_.u.push(0,0)}}}});let a=new Wt;for(let[l,c]of e){if(!c.p.length)continue;let h=new Ue;h.setAttribute("position",new ue(c.p,3)),h.setAttribute("normal",new ue(c.n,3)),h.setAttribute("uv",new ue(c.u,2)),h.computeBoundingSphere();let f=new Vt(h,l);f.castShadow=!l.transparent,f.receiveShadow=!0,a.add(f)}return a.children.sort((l,c)=>(l.material.transparent?1:0)-(c.material.transparent?1:0)),a}function vu(n,t,e=!1){let i=$x(n),s=new Wt;s.add(i),s.updateMatrixWorld(!0);let r=new $n().setFromObject(i),o=new N;r.getSize(o);let a=new N;return r.getCenter(a),i.position.set(-a.x,e?0:-r.min.y,-a.z),s.userData.height=o.y,s.userData.radius=Math.max(.06,Math.hypot(o.x,o.z)/2),s.userData.kind=t,s.name=t,s}function au(n,t,e,i,s={}){let r=Y(_i(i,512,Math.round(512*e/(Ht*t))),.5);v(n,Z(t*.985,t*.985,e*.98,18,!0),rt.tin,0,e*.01,0),v(n,Z(t,t,e*.84,18,!0),r,0,e*.08,0),v(n,Ne(t*.975,t*.04,4,18),rt.tin,0,e-t*.04,0,Math.PI/2),v(n,Ne(t*.975,t*.04,4,18),rt.tin,0,t*.04,0,Math.PI/2),v(n,oi(t*.96,18),Y(Xx(),.35,.5),0,e-t*.05,0),v(n,oi(t*.96,18),rt.tin,0,.001,0,Math.PI),s.tab&&(v(n,Ne(t*.22,t*.05,3,10),rt.alu,t*.3,e-t*.035,0,Math.PI/2,0,0,1,1.4,1),v(n,Z(t*.07,t*.07,t*.03,8),rt.alu,0,e-t*.06,0))}function To(n,t,e,i,s,r,o,a,l=.02,c={}){v(n,Xe(JSON.stringify(t),t,18),i);let h=t[t.length-1];if(e){let f=c.front?ai(e,256,160):_i(e,512,Math.round(512*(o-r)/(Ht*a))),u=v(n,Z(a,a,o-r,18,!0),Y(f,c.labRough??.5),0,r,0);c.labelSide&&(u.material=[Y(f,.5)])}if(s){let f=Math.max(h[0]*1.12,c.capR||0);v(n,Z(f,f,l,16),s,0,h[1],0),v(n,Z(f*.92,f*.92,.002,16),s,0,h[1]+l,0)}}function Zx(n){return Tt("ribcap"+n,64,32,(t,e,i,s)=>{t.fillStyle=n,t.fillRect(0,0,e,i),t.fillStyle="rgba(0,0,0,0.25)";for(let r=0;r<e;r+=3)t.fillRect(r,0,1,i)})}function Ci(n){return Y(Zx(n),.45)}function Kx(n,t,e){return Tt("rx"+n+t+e,512,160,(i,s,r,o)=>{i.fillStyle="#fbfbf7",i.fillRect(0,0,s,r),i.fillStyle="#1d5fa8",i.fillRect(0,0,s,r*.18),Jt(i,"PHARMACY  Rx",s*.3,r*.09,r*.12,{color:"#fff",maxW:s*.4}),Jt(i,n,s*.3,r*.36,r*.15,{color:"#111",maxW:s*.42,align:"center"}),Jt(i,t,s*.3,r*.56,r*.08,{color:"#222",maxW:s*.44}),$e(i,s*.08,r*.68,s*.45,3,r*.07,o,"#333"),i.fillStyle="#f2c21b",i.fillRect(s*.62,r*.25,s*.32,r*.25),Jt(i,"FINISH ALL",s*.78,r*.37,r*.09,{color:"#111",maxW:s*.28}),Co(i,s*.66,r*.62,s*.24,r*.22,o),fe(i,s,r,o,.5)})}function Ii(n){return Tt("band"+JSON.stringify(n),512,128,(t,e,i,s)=>{t.fillStyle=n.b,t.fillRect(0,0,e,i),t.fillStyle=n.a,t.fillRect(0,0,e,i*.15),t.fillRect(0,i*.85,e,i*.15),Jt(t,n.t,e*.5,i*.42,i*.36,{color:n.f,maxW:e*.45,font:Ki}),n.s&&Jt(t,n.s,e*.5,i*.7,i*.13,{color:n.f,maxW:e*.45}),$e(t,e*.05,i*.3,e*.18,4,i*.1,s,"rgba(0,0,0,0.5)"),Co(t,e*.8,i*.3,e*.12,i*.35,s),fe(t,e,i,s,.5)})}function lu(n,t,e,i,s=.003){let r=Y(ai(i,256,Math.round(256*e/t)),.6);return v(n,Q(t,s,e),[nt(14540253,.7),nt(14540253,.7),r,nt(15658734,.8),nt(14540253,.7),nt(14540253,.7)],0,0,0,0,0,0)}function gi(n,t,e,i,s,r=.45,o=.15,a=.06){let l=ai(s,256,Math.round(256*e/t));return v(n,Io(t,e,i,a),[Y(l,.5),Y(l,.5),nt(new Zt(s.b).getHex(),r,o),nt(new Zt(s.b).getHex(),r,o),Y(l,r,o),Y(l,r,o)])}function cu(n,t,e,i){let s=i.th;v(n,Kt(.44,s,.56,s*.45),t,0,0,.02),v(n,Kt(.5,s*.9,.16,s*.4),t,0,.002,-.2);for(let r of[-1,1]){let o=[[r*.2,0,-.22],[r*.33,0,-.17],[r*.4,0,-.02],[r*.43,0,.17]];v(n,Ln("sleeve"+r+i.sleeveR,o,i.sleeveR,8,5),t,0,s*.5,0,0,0,0,1,s/(i.sleeveR*2.1),1),v(n,Z(i.sleeveR*.85,i.sleeveR*.85,.05,8),e,r*.432,s*.5,.17,Math.PI/2,0,0,1,1,s/(i.sleeveR*1.9)),v(n,Q(.12,.004,.012),i.rain?rt.blackPl:nt(1118481,.6),r*.11,s,.12,0,r*.5,0)}if(v(n,Io(.3,.22,s*1.1,0,4,5),t,0,s*.55,-.27,-Math.PI/2,0,0),i.fur&&v(n,Ne(.13,.028,4,12),i.fur,0,s*.75,-.39,Math.PI/2,0,0,1.1,.95,.5),i.rain)for(let r of[-1,1])v(n,Ln("cord"+r,[[r*.05,0,0],[r*.07,0,.05],[r*.06,0,.1]],.003,6,3),rt.blackPl,0,s+.002,-.28),v(n,Z(.007,.007,.016,6),rt.blackPl,r*.06,s+.004,-.17,Math.PI/2);v(n,Q(.012,.004,.55),rt.darkMetal,0,s-5e-4,.02),v(n,Q(.012,.006,.03),rt.steel,0,s,-.12),v(n,Q(.06,.002,.03),Y(Ii({t:i.rain?"RAIN SHELL":"INSULATED",s:i.rain?"WATERPROOF":"DOWN ALTERNATIVE",b:"#f4f1ea",f:"#111",a:"#111"}),.6),0,s*.9,-.33)}var Ur=[{t:"BAKED BEANS",s:"IN TOMATO SAUCE",n:"NET WT 15 OZ (425g)",b:"#e8a33a",f:"#5a1d0a",a:"#7a2a10",p:"beans"},{t:"CHICKEN SOUP",s:"WITH NOODLES",n:"NET WT 10.5 OZ (298g)",b:"#f4f1ea",f:"#c41e1e",a:"#c41e1e",p:"soup"},{t:"SWEET CORN",s:"WHOLE KERNEL",n:"NET WT 15.25 OZ (432g)",b:"#2f7a32",f:"#ffe14a",a:"#1d5220",p:"corn"},{t:"DICED TOMATOES",s:"NO SALT ADDED",n:"NET WT 14.5 OZ (411g)",b:"#b81d18",f:"#fff",a:"#2f6a2a",p:"tomato"},{t:"BEEF CHILI",s:"WITH BEANS",n:"NET WT 15 OZ (425g)",b:"#3a1a10",f:"#f3c04a",a:"#b5321a",p:"chili"},{t:"GREEN PEAS",s:"SWEET TENDER",n:"NET WT 15 OZ (425g)",b:"#e9efe2",f:"#2f6a2a",a:"#3f8a28",p:"peas"}],bu=[{t:"PEACH HALVES",s:"IN LIGHT SYRUP",n:"NET WT 15.25 OZ (432g)",b:"#fbe6c4",f:"#b8501a",a:"#f39a42",p:"peach"},{t:"FRUIT COCKTAIL",s:"IN 100% JUICE",n:"NET WT 15 OZ (425g)",b:"#2b4f9a",f:"#fff",a:"#f2c21b",p:"fruit"},{t:"PEAR HALVES",s:"BARTLETT",n:"NET WT 15 OZ (425g)",b:"#e7efc8",f:"#4f6a1a",a:"#9ab83a",p:"apple"}],al={canned_food(n,t){au(n,.038,.112,se(t,Ur))},canned_fruit(n,t){au(n,.038,.11,se(t,bu),{tab:!0})},dry_food(n,t){t()<.5?gi(n,.17,.25,.08,{t:"LONG GRAIN",t2:"WHITE RICE",s:"ENRICHED",n:"NET WT 2 LB (907g)",b:"#f6f3ea",f:"#1d4f8a",a:"#1d4f8a",p:"grain",top:"PANTRY"},.5,.05):Jn(n,.15,.24,.06,{t:"PENNE",t2:"RIGATE",s:"ENRICHED MACARONI",n:"NET WT 16 OZ (1 LB) 454g",b:"#1d4f9a",f:"#fff",a:"#f2c21b",tf:"#1d4f9a",p:"grain",top:"NO. 41"})},peanut_butter(n,t){To(n,[[0,0],[.042,0],[.046,.006],[.046,.1],[.042,.112],[.036,.116],[.036,.122]],{t:"PEANUT BUTTER",s:"CREAMY",n:"NET WT 16 OZ (454g)",b:"#f5e6c0",f:"#8a3a12",a:"#c8321e",p:"peanut"},nt(10119724,.35),Ci(se(t,["#c8321e","#1d4f9a","#2f7a32"])),.012,.095,.0465,.025,{capR:.043})},snacks(n,t){let e=se(t,[{t:"SALTINE",t2:"CRACKERS",s:"ORIGINAL",n:"NET WT 16 OZ (454g)",b:"#f4f1ea",f:"#c41e1e",a:"#c41e1e",p:"grain",top:"4 SLEEVES"},{t:"GRAHAM",t2:"CRACKERS",s:"HONEY",n:"NET WT 14.4 OZ (408g)",b:"#e3c07a",f:"#5a2a0a",a:"#2b4f9a",p:"grain",top:"FAMILY SIZE"}]);Jn(n,.2,.22,.07,e)},formula(n){gi(n,.13,.19,.05,{t:"LIQUID",t2:"NUTRITION",s:"COMPLETE  1.0 KCAL/ML",n:"1000 mL  TUBE FEEDING OR ORAL",b:"#fbfbf7",f:"#1d5fa8",a:"#3aa7a0",p:"drop",top:"MEDICAL"},.35,.05,.05),v(n,Z(.009,.009,.02,12),rt.whitePl,.03,.185,0),v(n,Z(.013,.013,.014,12),Ci("#3aa7a0"),.03,.2,0)},dog_food(n){gi(n,.42,.62,.16,{t:"DOG FOOD",s:"CHICKEN & RICE  ADULT",n:"NET WT 15 LB (6.8 kg)",b:"#2f7a32",f:"#fff",a:"#f2c21b",tf:"#2f7a32",p:"paw",top:"COMPLETE NUTRITION",tag:"NEW",st:"#14401a"},.7,.02,.04)},energy_bar(n,t){Jn(n,.16,.05,.09,{t:"ENERGY BARS",s:"OATS & HONEY  6 BARS",n:"6 x 1.4 OZ (40g)",b:"#f08a1c",f:"#fff",a:"#5a2a0a",p:"oats",st:"#7a3a0a"},{tw:256,th:96});let i=new Wt;gi(i,.04,.13,.016,{t:"OAT BAR",b:"#f08a1c",f:"#fff",a:"#5a2a0a"},.4,.2,.08),i.rotation.set(-Math.PI/2,0,.3+t()*.4),i.position.set(-.01,.058,.06),n.add(i)},instant_noodles(n,t){t()<.5?(v(n,Xe("noodlecup",[[0,0],[.037,0],[.038,.004],[.049,.1],[.051,.102]],18),nt(16052714,.7)),v(n,Z(.05,.0385,.094,18,!0),Y(_i({t:"INSTANT NOODLES",s:"CHICKEN FLAVOR",n:"NET WT 2.25 OZ (64g)",b:"#f4f1ea",f:"#c41e1e",a:"#f2c21b",p:"noodle"},512,160),.6),0,.004,0),v(n,oi(.051,18),Y(Tt("foillid",128,128,(i,s,r,o)=>{i.fillStyle="#d8d8d0",i.fillRect(0,0,s,r),i.fillStyle="#c41e1e",i.beginPath(),i.arc(64,64,40,0,Ht),i.fill(),Jt(i,"PEEL",64,64,18,{color:"#fff"}),fe(i,s,r,o,.5)}),.35,.4),0,.103,0)):gi(n,.12,.16,.035,{t:"RAMEN",t2:"NOODLES",s:"BEEF FLAVOR",n:"NET WT 3 OZ (85g)",b:"#c41e1e",f:"#fff",a:"#f2c21b",tf:"#c41e1e",p:"noodle",top:"QUICK 3 MIN"},.4,.15).rotation.x=-Math.PI/2},chips(n,t){let e=se(t,[{t:"POTATO",t2:"CHIPS",s:"SEA SALT",n:"NET WT 8 OZ (226g)",b:"#f2c21b",f:"#c41e1e",a:"#c41e1e",p:"chip",top:"KETTLE COOKED",st:"#fff"},{t:"TORTILLA",t2:"CHIPS",s:"RESTAURANT STYLE",n:"NET WT 11 OZ (311g)",b:"#2b4f9a",f:"#fff",a:"#f2c21b",tf:"#2b4f9a",p:"chip",top:"FAMILY SIZE"}]);gi(n,.21,.3,.08,e,.3,.35,.05)},jerky(n){gi(n,.14,.2,.035,{t:"BEEF JERKY",s:"ORIGINAL  HIGH PROTEIN",n:"NET WT 3.25 OZ (92g)",b:"#2a2420",f:"#f2c21b",a:"#8a2a12",p:"meat",top:"RESEALABLE"},.4,.2,.06).rotation.x=-Math.PI/2},oatmeal(n){v(n,Z(.064,.064,.18,20,!0),Y(_i({t:"OLD FASHIONED OATS",s:"100% WHOLE GRAIN",n:"NET WT 42 OZ (2 LB 10 OZ) 1.19kg",b:"#f4f1ea",f:"#2a4f8a",a:"#2a4f8a",p:"oats"},512,220),.75)),v(n,Z(.066,.066,.025,20),nt(2772874,.4),0,.17,0),v(n,oi(.063,20),nt(8022608,.9),0,.001,0,Math.PI)},soda(n,t){let e=se(t,[{t:"COLA",s:"CLASSIC",n:"12 FL OZ (355 mL)",b:"#a8141a",f:"#fff",a:"#5a0a0a",p:"bubble"},{t:"LEMON LIME",s:"CAFFEINE FREE",n:"12 FL OZ (355 mL)",b:"#2f8a3a",f:"#f6ee4a",a:"#0f4a1a",p:"bubble"},{t:"ROOT BEER",s:"OLD FASHIONED",n:"12 FL OZ (355 mL)",b:"#4a2412",f:"#f3c04a",a:"#1a0a05",p:"bubble"}]);v(n,Xe("sodacan",[[0,.004],[.026,0],[.033,.01],[.033,.104],[.027,.118],[.0265,.122]],18),rt.alu),v(n,Z(.0332,.0332,.092,18,!0),Y(_i(e,512,150),.3,.3),0,.011,0),v(n,oi(.026,16),rt.alu,0,.12,0),v(n,Ne(.0065,.0015,3,8),rt.alu,.008,.121,0,Math.PI/2,0,0,1,1.5,1)},sports_drink(n,t){let e=se(t,[[2785238,"GLACIER BLUE","#2a7fd6"],[15763996,"ORANGE","#f08a1c"],[14035002,"FRUIT PUNCH","#d6283a"]]);v(n,Xe("sportsbottle",[[0,0],[.033,0],[.036,.01],[.036,.08],[.031,.095],[.036,.11],[.036,.17],[.022,.2],[.016,.205],[.016,.215]],18),ee("sport"+e[0],{color:e[0],roughness:.15,transparent:!0,opacity:.82})),v(n,Z(.0365,.0365,.055,18,!0),Y(_i({t:"SPORTS DRINK",s:e[1],n:"28 FL OZ (828 mL)",b:"#111",f:"#fff",a:e[2],p:"bolt"},512,120),.4),0,.112,0),v(n,Z(.018,.018,.022,16),Ci(e[2]),0,.212,0)},water_bottle(n){let t=ee("jugwater",{color:14412270,roughness:.2,transparent:!0,opacity:.55});v(n,Kt(.15,.22,.15,.025),t),v(n,Kt(.13,.2,.13,.02),ee("water",{color:10274520,roughness:.1,transparent:!0,opacity:.45,depthWrite:!1}),0,.005,0),v(n,Xe("jugtop",[[.075,0],[.065,.03],[.02,.05],[.018,.06]],12),t,0,.215,0),v(n,Z(.021,.021,.016,14),Ci("#2a6fd6"),0,.27,0),v(n,Ln("jughandle",[[.04,.2,-.06],[.06,.25,-.06],[.065,.27,-.02],[.05,.25,.02],[.04,.2,.04]],.012,12,6),t,0,0,0);let e=Y(Ii({t:"DRINKING WATER",s:"1 GALLON (3.78 L)  PURIFIED",b:"#ffffff",f:"#1d5fa8",a:"#3d8fd6"}),.5);v(n,Q(.152,.07,.152),[e,e,rt.clearPl,rt.clearPl,e,e],0,.08,0)},saline(n){let t=Tt("salinebag",256,384,(s,r,o,a)=>{s.fillStyle="#e9f0f2",s.fillRect(0,0,r,o),s.strokeStyle="#1d5fa8",s.lineWidth=3,s.strokeRect(r*.1,o*.12,r*.8,o*.62),Jt(s,"0.9% SODIUM",r/2,o*.22,30,{color:"#1d5fa8",maxW:r*.75,font:Ki}),Jt(s,"CHLORIDE",r/2,o*.3,30,{color:"#1d5fa8",maxW:r*.75,font:Ki}),Jt(s,"INJECTION USP",r/2,o*.37,16,{color:"#1d5fa8",maxW:r*.75}),Jt(s,"1000 mL",r/2,o*.47,40,{color:"#111",maxW:r*.7}),$e(s,r*.15,o*.55,r*.7,6,10,a,"rgba(20,60,120,0.6)");for(let l=1;l<10;l++)s.fillStyle="#333",s.fillRect(r*.88,o*(.12+l*.062),l%2?10:18,2);Jt(s,"STERILE  SINGLE USE",r/2,o*.82,14,{color:"#1d5fa8",maxW:r*.8}),fe(s,r,o,a,.4)}),e=Y(t,.2,0,{transparent:!0,opacity:.92}),i=v(n,Io(.15,.25,.03,.05),[e,e,rt.clearPl,rt.clearPl,e,e]);i.rotation.x=-Math.PI/2,i.position.y=.015,i.position.z=.125,v(n,Z(.005,.005,.04,8),rt.whitePl,-.02,.012,.135,Math.PI/2),v(n,Z(.006,.006,.03,8),nt(2781142,.5),.025,.012,.13,Math.PI/2)},ors(n){Jn(n,.1,.13,.04,{t:"ORAL",t2:"REHYDRATION SALTS",s:"WHO FORMULA  10 SACHETS",n:"DISSOLVE 1 SACHET IN 1 L WATER",b:"#f4f8fb",f:"#1d5fa8",a:"#3aa7a0",p:"drop",top:"ELECTROLYTES"});for(let e=0;e<2;e++){let i=new Wt;gi(i,.07,.1,.008,{t:"ORS",s:"1 L SACHET",b:"#fbfbf7",f:"#1d5fa8",a:"#3aa7a0"},.35,.25,.08),i.rotation.set(-Math.PI/2,0,.4+e*.5),i.position.set(.08+e*.03,.005+e*.006,.07),n.add(i)}},first_aid(n){let t=nt(13115422,.45),e=Tt("fakit",256,192,(s,r,o,a)=>{s.fillStyle="#c8201e",s.fillRect(0,0,r,o),s.fillStyle="#fff",s.beginPath(),s.roundRect(r*.34,o*.14,r*.32,o*.56,10),s.fill(),ol(s,"cross",r/2,o*.42,o*.2,a),Jt(s,"FIRST AID",r/2,o*.84,o*.13,{color:"#fff",maxW:r*.8}),fe(s,r,o,a,.8)}),i=Y(e,.45);v(n,Kt(.28,.055,.2,.015),[t,t,i,t,t,t]),v(n,Kt(.28,.035,.2,.015),t,0,.056,0),v(n,Kt(.284,.004,.204,.002),nt(15658734,.5),0,.054,0),v(n,Q(.24,.002,.17),[t,t,i,t,t,t],0,.091,0),v(n,Ln("fahandle",[[-.06,.05,.1],[-.05,.05,.125],[.05,.05,.125],[.06,.05,.1]],.008,10,6),rt.whitePl);for(let s of[-.09,.09])v(n,Q(.025,.03,.008),rt.whitePl,s,.04,.102)},antibiotics(n,t){let e=ee("amber",{color:11887901,roughness:.2,transparent:!0,opacity:.85});v(n,Xe("rxbottle",[[0,0],[.019,0],[.021,.004],[.021,.07],[.018,.074],[.018,.078]],16),e);let s=se(t,["AMOXICILLIN 500 MG","DOXYCYCLINE 100 MG","CEPHALEXIN 500 MG"]);v(n,Z(.0212,.0212,.045,16,!0),Y(Kx(s,"TAKE 1 CAPSULE 3 TIMES DAILY",1),.6),0,.012,0),v(n,Z(.023,.023,.018,16),Ci("#f4f4f0"),0,.075,0),v(n,oi(.022,16),nt(16053488,.5),0,.0935,0)},pain_pills(n){To(n,[[0,0],[.026,0],[.029,.006],[.029,.085],[.02,.098],[.016,.1]],{t:"PAIN RELIEVER",s:"ACETAMINOPHEN 500 MG",n:"100 CAPLETS",b:"#f4f4f0",f:"#c41e1e",a:"#c41e1e",p:"pill"},nt(16053488,.4),Ci("#f4f4f0"),.01,.08,.0293,.02,{capR:.02})},ibuprofen(n){Jn(n,.075,.115,.04,{t:"IBUPROFEN",s:"200 MG  PAIN RELIEVER",n:"50 COATED TABLETS",b:"#f08a1c",f:"#fff",a:"#7a2a0a",p:"pill",top:"NSAID",st:"#a0400a"});let t=[[0,0],[.018,0],[.02,.004],[.02,.06],[.014,.068],[.012,.07]],e=new Wt;To(e,t,{t:"IBUPROFEN",s:"200 MG",n:"50 TABLETS",b:"#fff",f:"#f08a1c",a:"#f08a1c",p:"pill"},nt(16053488,.4),Ci("#f08a1c"),.008,.055,.0203,.016,{capR:.015}),e.position.set(.065,0,.01),n.add(e)},vitamins(n){To(n,[[0,0],[.034,0],[.037,.006],[.037,.105],[.03,.115],[.028,.118]],{t:"MULTIVITAMIN",s:"DAILY  ADULT 50+",n:"120 TABLETS",b:"#2a2a6a",f:"#f2c21b",a:"#f2c21b",p:"sun"},nt(2302799,.35),Ci("#23234f"),.012,.1,.0373,.022,{capR:.031})},bandages(n){Jn(n,.1,.13,.045,{t:"ADHESIVE",t2:"BANDAGES",s:"FLEXIBLE FABRIC  ASSORTED",n:"60 BANDAGES",b:"#f4f1ea",f:"#c41e1e",a:"#e0b38a",tf:"#5a2a0a",p:"cross",top:"STERILE"}),v(n,Z(.025,.025,.05,16),Y(Tt("gauze",64,64,(t,e,i,s)=>{Me(t,e,i,s,"#f3f0e8",.08,600,1),t.strokeStyle="rgba(0,0,0,0.08)";for(let r=0;r<e;r+=3)t.beginPath(),t.moveTo(r,0),t.lineTo(r,i),t.moveTo(0,r),t.lineTo(e,r),t.stroke()}),.95),.085,.025,.02,Math.PI/2,0,.3)},water_tablets(n){To(n,[[0,0],[.018,0],[.02,.004],[.02,.055],[.013,.062],[.012,.065]],{t:"WATER PURIFICATION",s:"TABLETS  KILLS GERMS",n:"50 TABLETS  TREATS 25 L",b:"#4a5a2a",f:"#fff",a:"#f2c21b",p:"drop"},ee("brownglass",{color:5913114,roughness:.15,transparent:!0,opacity:.88}),Ci("#3a3a3a"),.008,.05,.0203,.016,{capR:.015})},first_aid_kit:null,flashlight(n){let t=[[0,0],[.016,0],[.017,.005],[.017,.13],[.019,.14],[.026,.165],[.027,.2],[.025,.203],[0,.203]],e=Y(Tt("knurl",64,64,(s,r,o)=>{s.fillStyle="#2b2d30",s.fillRect(0,0,r,o),s.strokeStyle="rgba(255,255,255,0.18)";for(let a=-64;a<128;a+=5)s.beginPath(),s.moveTo(a,0),s.lineTo(a+64,o),s.moveTo(a+64,0),s.lineTo(a,o),s.stroke()}),.45,.4),i=new Wt;v(i,Xe("flashlight",t,16),nt(2829616,.4,.45)),v(i,Z(.0172,.0172,.09,16,!0),e,0,.02,0),v(i,oi(.024,16),ee("lens",{color:15660799,roughness:.05,emissive:2236962}),0,.2015,0),v(i,Z(.006,.006,.006,8),nt(1118481,.8),0,.15,.019,Math.PI/2),v(i,Ne(.026,.0025,4,16),rt.alu,0,.2,0,Math.PI/2),i.rotation.z=Math.PI/2,i.position.y=.027,n.add(i)},batteries(n){lu(n,.12,.17,{t:"AA BATTERIES",s:"ALKALINE  1.5V",n:"8 PACK",b:"#111",f:"#f2c21b",a:"#c98a2a",p:"battery",top:"LONG LASTING"});let t=Y(Tt("aacell",128,64,(e,i,s)=>{e.fillStyle="#151515",e.fillRect(0,0,i,s),e.fillStyle="#c98a2a",e.fillRect(0,0,i*.35,s),Jt(e,"AA",i*.65,s/2,22,{color:"#f2c21b"})}),.4,.3);for(let e=0;e<8;e++){let i=-.042+e%4*.028,s=e<4?-.035:.035;v(n,Z(.007,.007,.05,10),t,i,.01,s-.025,Math.PI/2)}v(n,Kt(.112,.016,.13,.006),rt.clearPl,0,.003,-.002)},pry_bar(n){let t=Y($0("#c4221c","pry"),.5,.2);v(n,Ln("prybar",[[-.33,.012,0],[-.1,.012,0],[.18,.012,0],[.26,.016,0],[.31,.04,0],[.31,.075,0],[.28,.09,0],[.25,.085,0]],.011,40,6),t),v(n,Q(.05,.006,.026),rt.steel,-.355,.006,0,0,0,.12),v(n,Q(.02,.008,.026),rt.darkMetal,.24,.083,0,0,0,.5)},backpack(n,t){let e=se(t,["#2f3f2a","#22304a","#3a3a3c","#5a2a22"]),i=Y(xi(e),.8),s=Y(xi(jn(e,-.3),"dk"),.8);v(n,Kt(.3,.46,.17,.05),i),v(n,Kt(.24,.2,.07,.03),s,0,.04,.1),v(n,Q(.2,.1,.04),i,0,.27,.095),v(n,Kt(.31,.09,.18,.03),s,0,.39,.002),v(n,Q(.22,.004,.004),rt.blackPl,0,.235,.135),v(n,Q(.008,.02,.003),rt.steel,.09,.225,.136);for(let r of[-.08,.08])v(n,Ln("bpstrap",[[0,.42,-.08],[0,.4,-.12],[0,.25,-.12],[0,.08,-.105],[0,.04,-.085]],.018,10,4),s,r,0,0,0,0,0,1,1,.45);v(n,Ne(.03,.006,4,10,Math.PI),s,0,.47,-.02,0,0,0);for(let r of[-1,1])v(n,Q(.03,.14,.1),Y(xi("#111111","mesh"),.9),r*.155,.02,0);for(let r of[-1,1])v(n,Q(.025,.03,.008),rt.blackPl,r*.07,.15,.137)},winter_coat(n,t){let e=se(t,["#22304a","#2f3a2a","#5a1d1a","#2a2a2c","#6a5a3a"]),i=Y(Wx(e),.75),s=Y(Tt("fur",128,128,(r,o,a,l)=>{Me(r,o,a,l,"#9a8a72",.35,4e3,2);for(let c=0;c<600;c++){r.strokeStyle=l()<.5?"rgba(60,50,40,0.5)":"rgba(220,210,190,0.5)",r.beginPath();let h=l()*o,f=l()*a;r.moveTo(h,f),r.lineTo(h+(l()-.5)*8,f+6),r.stroke()}}),.95);cu(n,i,Y(Eo(jn(e,-.2),"coatcuff"),.95),{th:.075,sleeveR:.065,color:e,fur:s})},winter_hat(n,t){let e=se(t,["#8a1d1a","#22304a","#3a5a2a","#7a6a50","#d8d2c4"]),i=Y(Eo(e),.95);v(n,Xe("beanie",[[0,.17],[.04,.168],[.07,.155],[.088,.13],[.095,.09],[.095,.04]],18),i,0,0,0),v(n,Z(.1,.1,.06,18,!0),Y(Eo(jn(e,-.1),"cuff"),.95),0,.01,0),v(n,Ne(.097,.008,4,18),i,0,.012,0,Math.PI/2),v(n,oi(.097,18),nt(1710618,.95),0,.012,0),v(n,pn(.035,8,6),Y(Tt("pom"+e,64,64,(s,r,o,a)=>{Me(s,r,o,a,e,.4,900,2)}),1),0,.19,0)},gloves(n,t){let e=se(t,["#1d1d1f","#3a2a1f","#2a3a4a"]),i=Y(xi(e,"glove"),.85),s=Y(Eo(jn(e,.1),"gcuff"),.95),r=(o,a,l,c)=>{let h=new Wt;v(h,Kt(.09,.025,.1,.012),i,0,0,0);for(let f=0;f<4;f++)v(h,Z(.0095,.0105,.08-Math.abs(f-1.5)*.012,6),i,-.032+f*.021,.012,.035,Math.PI/2-.04,0,(f-1.5)*.05);v(h,Z(.011,.012,.06,6),i,c*.04,.012,0,Math.PI/2,0,c*.9),v(h,Z(.047,.05,.065,10),s,0,.014,-.045,-Math.PI/2,0,0,1,1,.45),h.position.set(o,.005,a),h.rotation.y=l,n.add(h)};r(-.05,0,.15,1),r(.06,.03,-.25,-1),n.children[n.children.length-1].position.y=.025},boots(n,t){let e=se(t,["#5a3a22","#2a2622","#6a5a40"]),i=Y(Tt("leather"+e,128,128,(a,l,c,h)=>{Me(a,l,c,h,e,.12,2500,2),a.strokeStyle="rgba(0,0,0,0.25)",a.setLineDash([4,3]),a.strokeRect(6,6,l-12,c-12),fe(a,l,c,h,.8)}),.75),s=Y(Tt("sole",128,32,(a,l,c)=>{a.fillStyle="#1b1b1b",a.fillRect(0,0,l,c),a.fillStyle="#333";for(let h=0;h<l;h+=8)a.fillRect(h,c*.4,4,c*.6)}),.95),r=nt(12101770,1),o=(a,l)=>{let c=new Wt;v(c,Q(.11,.035,.29),s,0,0,0),v(c,Kt(.1,.08,.27,.035),i,0,.03,.005),v(c,Z(.058,.062,.17,10),i,0,.05,-.065,0,0,0,.9,1,1.1),v(c,Ne(.055,.015,4,10),r,0,.22,-.065,Math.PI/2,0,0,.95,1.25,1);for(let h=0;h<4;h++)v(c,Q(.06,.004,.006),nt(13153418,.9),0,.1+h*.025,0+(h<2?.05-h*.03:.002),-.3+(h<2?-.7:0),0,0);c.position.x=a,c.rotation.y=l,n.add(c)};o(-.065,.05),o(.065,-.08)},rain_jacket(n,t){let e=se(t,["#e8b81b","#d8501c","#1d5fa8","#2f6a3a"]),i=Y(xi(e,"rain"),.3,.05);cu(n,i,Y(xi(jn(e,-.3),"raincuff"),.4),{th:.035,sleeveR:.05,color:e,rain:!0})},firewood(n,t){let e=Y(Vx(),.95),i=Y(ou(!0),.9),s=Y(Nr("#c9a26c","#8a6a3a","split"),.9),r=.4,o=[3,3,2],a=0;o.forEach((l,c)=>{for(let h=0;h<l;h++,a++){let f=.048+t()*.012,u=(h-(l-1)/2)*.095+(t()-.5)*.012;v(n,Z(f,f,r+(t()-.5)*.04,t()<.5?3:4),[t()<.45?s:e,i,i],u,.045+c*.078,-r/2+(t()-.5)*.03,Math.PI/2,t()*Ht,0)}});for(let l of[-.12,.12])v(n,Ne(.16,.004,4,20),nt(13152384,.9),0,.12,l,0,0,0,1,.85,1);v(n,Q(.1,.001,.07),Y(Ii({t:"FIREWOOD",s:"KILN DRIED  0.75 CU FT",b:"#f4f1ea",f:"#5a2a0a",a:"#2f7a32"}),.8),0,.255,0)},propane_1lb(n){let t=nt(3111474,.4,.2);v(n,Xe("propane",[[0,0],[.05,0],[.056,.01],[.056,.16],[.05,.185],[.03,.2],[.016,.205]],18),t),v(n,Z(.0565,.0565,.11,18,!0),Y(_i({t:"PROPANE",s:"CAMPING FUEL  CYLINDER",n:"NET WT 16.4 OZ (465g)  FLAMMABLE",b:"#2f7a32",f:"#fff",a:"#1d4a20",p:"flame"},512,160),.45,.15),0,.03,0),v(n,Z(.014,.016,.02,12),rt.brass,0,.205,0),v(n,Z(.008,.008,.012,8),rt.brass,0,.225,0),v(n,Z(.052,.052,.012,18,!0),nt(1919520,.6),0,0,0)},tarp(n,t){let e=se(t,["#2a5ab8","#6a7a3a","#a85a1a"]),i=Y(Tt("tarp"+e,128,128,(r,o,a,l)=>{Me(r,o,a,l,e,.08,1200,1),r.strokeStyle="rgba(255,255,255,0.12)";for(let c=0;c<o;c+=4)r.beginPath(),r.moveTo(c,0),r.lineTo(c,a),r.moveTo(0,c),r.lineTo(o,c),r.stroke();fe(r,o,a,l,.6)},{repeat:[3,3]}),.55);v(n,Kt(.36,.035,.28,.012),i),v(n,Kt(.34,.03,.27,.012),i,.005,.03,-.003,0,.03,0),v(n,Kt(.3,.028,.25,.012),i,-.01,.056,.004,0,-.04,0);for(let r=0;r<4;r++)v(n,Ne(.008,.003,4,10),rt.alu,-.14+r*.09,.085,.115,Math.PI/2);let s=Y(ai({t:"TARP",s:"ALL PURPOSE 8 x 10 FT",n:"WATERPROOF",b:"#f4f1ea",f:"#1d4f9a",a:"#1d4f9a"},256,192),.7);v(n,Q(.12,.002,.09),[rt.paper,rt.paper,s,rt.paper,rt.paper,rt.paper],.03,.084,-.03)},bleach(n){let t=nt(15921902,.35);v(n,Kt(.15,.24,.1,.025),t),v(n,Xe("bleachneck",[[.03,0],[.024,.012],[.021,.025]],14),t,.035,.238,0),v(n,Z(.024,.024,.024,14),Ci("#1d5fa8"),.035,.262,0),v(n,Ln("bleachhandle",[[-.065,.22,0],[-.065,.27,0],[-.03,.29,0],[0,.25,0],[0,.22,0]],.012,12,6),t);let e={t:"BLEACH",s:"REGULAR  UNSCENTED",n:"121 FL OZ (3.57 L)",b:"#f4f6fa",f:"#1d5fa8",a:"#1d5fa8",p:"drop",top:"DISINFECTS"};v(n,Q(.12,.15,.001),Y(ai(e,256,320),.4),0,.03,.0505),v(n,Q(.12,.15,.001),Y(Tt("bleachback",256,320,(i,s,r,o)=>{i.fillStyle="#f4f6fa",i.fillRect(0,0,s,r),Jt(i,"DANGER",s/2,30,30,{color:"#c41e1e"}),$e(i,20,60,s-40,18,12,o,"#333"),Co(i,60,r-60,130,40,o)}),.4),0,.03,-.0505,0,Math.PI,0)},water_filter(n){let t=nt(2781142,.4),e=new Wt;v(e,Z(.02,.02,.1,14),t),v(e,Z(.021,.021,.03,14),rt.whitePl,0,.1,0),v(e,Z(.008,.012,.025,10),rt.whitePl,0,.13,0),v(e,Z(.022,.022,.02,14),rt.whitePl,0,-.005,0),v(e,Z(.0205,.0205,.05,14,!0),Y(Ii({t:"SQUEEZE FILTER",s:"0.1 MICRON",b:"#2a6fd6",f:"#fff",a:"#fff"}),.4),0,.03,0),e.rotation.z=Math.PI/2,e.position.set(0,.022,.08),n.add(e);let i=new Wt;gi(i,.12,.22,.012,{t:"SQUEEZE POUCH",s:"1 L  REUSABLE",b:"#cfe3ef",f:"#1d5fa8",a:"#2a6fd6",p:"drop"},.25,0,.04),i.rotation.x=-Math.PI/2,i.position.set(0,.006,-.03),i.rotation.z=.2,n.add(i)},flea_spray(n){v(n,Xe("aerosol",[[0,0],[.03,0],[.033,.008],[.033,.16],[.028,.18],[.014,.19],[.012,.195]],18),rt.tin),v(n,Z(.0333,.0333,.145,18,!0),Y(_i({t:"FLEA & TICK",s:"HOME SPRAY  KILLS ON CONTACT",n:"NET WT 16 OZ (454g)",b:"#f4f1ea",f:"#2a5a1a",a:"#2a5a1a",p:"bug"},512,340),.45,.1),0,.012,0),v(n,Z(.031,.033,.045,16),nt(2775578,.4),0,.17,0),v(n,Q(.012,.01,.01),rt.whitePl,0,.215,.02)},seeds(n,t){let e=[{t:"TOMATO",s:"EARLY GIRL  HEIRLOOM",n:"PLANT AFTER LAST FROST",b:"#f4ecd2",f:"#8a1d12",a:"#3f7a2a",p:"tomato"},{t:"CARROT",s:"DANVERS HALF LONG",n:"SOW EARLY SPRING",b:"#f4ecd2",f:"#c85a12",a:"#3f7a2a",p:"carrot"},{t:"BUSH BEANS",s:"PROVIDER  GREEN",n:"DIRECT SOW",b:"#f4ecd2",f:"#2f6a2a",a:"#3f7a2a",p:"bean"},{t:"KALE",s:"WINTER HARDY",n:"COOL SEASON",b:"#f4ecd2",f:"#2f6a2a",a:"#3f7a2a",p:"leaf"}],i=Math.floor(t()*4);for(let s=0;s<3;s++){let r=new Wt;lu(r,.085,.125,e[(i+s)%4],.003),r.position.set((s-1)*.04,s*.0032,(s-1)*.015),r.rotation.y=(s-1)*.35,n.add(r)}},lighter(n,t){let e=se(t,[14035002,2781142,3115578,15909403,8006298]),i=new Wt;v(i,Kt(.025,.06,.013,.005),ee("lighter"+e,{color:e,roughness:.2,transparent:!0,opacity:.9})),v(i,Kt(.02,.05,.008,.003),ee("fuel",{color:15261872,roughness:.2,transparent:!0,opacity:.5}),0,.004,0),v(i,Q(.025,.018,.013),rt.chrome,0,.06,0),v(i,Z(.005,.005,.009,10),rt.darkMetal,-.004,.08,0,Math.PI/2),v(i,Q(.009,.006,.01),rt.blackPl,.007,.077,0),i.rotation.x=-Math.PI/2,i.position.set(0,.0065,.04),n.add(i)},comfort(n,t){if(t()<.6){let e=se(t,["THE LONG WINTER","RIVER STORIES","FIELD GUIDE TO BIRDS","COLLECTED POEMS","THE NORTHERN ROAD"]),i=se(t,["#22304a","#5a1d1a","#2f4a2a","#4a3a2a"]),s=Y(Tt("book"+e+i,256,384,(a,l,c,h)=>{Me(a,l,c,h,i,.08,1500,2),a.strokeStyle="#c9a24a",a.lineWidth=4,a.strokeRect(16,16,l-32,c-32),e.split(" ").forEach((u,d)=>Jt(a,u,l/2,c*.3+d*40,34,{color:"#e8d8a0",maxW:l*.8,font:'Georgia, "DejaVu Serif", serif'})),Jt(a,"A NOVEL",l/2,c*.82,16,{color:"#e8d8a0"}),fe(a,l,c,h,1)}),.7),r=Y(Tt("pages",64,64,(a,l,c)=>{a.fillStyle="#efe6cf",a.fillRect(0,0,l,c),a.fillStyle="rgba(0,0,0,0.12)";for(let h=0;h<c;h+=2)a.fillRect(0,h,l,1)}),.9),o=nt(new Zt(i).getHex(),.7);v(n,Q(.15,.035,.22),[r,o,s,s,r,r])}else{let e=Y(Tt("cards",128,192,(s,r,o,a)=>{s.fillStyle="#b8201e",s.fillRect(0,0,r,o),s.strokeStyle="#fff",s.lineWidth=3,s.strokeRect(8,8,r-16,o-16);for(let l=0;l<60;l++)s.strokeStyle="rgba(255,255,255,0.35)",s.beginPath(),s.arc(r/2,o/2,6+l*2,0,3),s.stroke();Jt(s,"PLAYING CARDS",r/2,o*.88,13,{color:"#fff",maxW:r*.8}),fe(s,r,o,a,.6)}),.5);v(n,Q(.064,.02,.09),[nt(12066846,.5),nt(12066846,.5),e,nt(12066846,.5),nt(12066846,.5),nt(12066846,.5)]);let i=Y(Tt("cardface",64,96,(s,r,o)=>{s.fillStyle="#fafafa",s.fillRect(0,0,r,o),Jt(s,"A",10,14,14,{color:"#c41e1e"}),s.fillStyle="#c41e1e",s.beginPath(),s.moveTo(32,36),s.bezierCurveTo(10,20,10,50,32,64),s.bezierCurveTo(54,50,54,20,32,36),s.fill()}),.6);for(let s=0;s<3;s++)v(n,Q(.063,8e-4,.088),[rt.paper,rt.paper,i,rt.paper,rt.paper,rt.paper],.07+s*.012,s*.001,.01+s*.01,0,.3+s*.4,0)}},toolkit(n,t){let e=se(t,[12853788,1920922,2763308]),i=Y($0("#"+new Zt(e).getHexString(),"tk"),.45,.3);v(n,Kt(.46,.15,.21,.01),i),v(n,Kt(.47,.06,.22,.012),i,0,.14,0),v(n,Q(.472,.004,.222),rt.darkMetal,0,.14,0),v(n,Ln("tkhandle",[[-.11,.2,0],[-.1,.235,0],[.1,.235,0],[.11,.2,0]],.011,12,6),rt.blackPl);for(let s of[-.17,.17])v(n,Q(.04,.05,.012),rt.chrome,s,.11,.11),v(n,Q(.03,.02,.008),rt.chrome,s,.15,.115);v(n,Q(.012,.015,.03),rt.steel,.215,.18,0)},scrap_wood(n,t){let e=Y(Nr("#c9a26c","#8a6a3a","lumber"),.85),i=Y(Tt("ply",256,256,(o,a,l,c)=>{Me(o,a,l,c,"#d2b07a",.1,2e3,2);for(let h=0;h<20;h++)o.strokeStyle="rgba(140,90,40,0.25)",o.lineWidth=2+c()*6,o.beginPath(),o.ellipse(c()*a,c()*l,30+c()*60,6+c()*10,0,0,Ht),o.stroke();fe(o,a,l,c,.8)}),.85),s=Y(Tt("plyedge",64,16,(o,a,l)=>{for(let c=0;c<5;c++)o.fillStyle=c%2?"#a67c48":"#d2b07a",o.fillRect(0,c*l/5,a,l/5)}),.9),r=Y(ou(),.9);v(n,Q(.6,.018,.45),[s,s,i,i,s,s],0,0,0,0,.1,0);for(let o=0;o<3;o++)v(n,Q(1,.038,.089),[r,r,e,e,e,e],(t()-.5)*.1,.018+o*.038,-.1+o*.09,0,(t()-.5)*.2,0)},hardware_parts(n,t){Jn(n,.14,.09,.1,{t:"WOOD SCREWS",s:"#8 x 2-1/2 IN  COARSE",n:"1 LB  APPROX 120 PCS",b:"#f2c21b",f:"#111",a:"#111",p:"screw",top:"ZINC PLATED"});let e=nt(11054514,.4,.5);for(let i=0;i<3;i++){let s=new Wt;v(s,Q(.05,.003,.03),e,0,0,0),v(s,Q(.003,.05,.03),e,-.0235,0,0),s.position.set(.11+i*.02,0,-.03+i*.035),s.rotation.y=t()*Ht,n.add(s)}for(let i=0;i<6;i++)v(n,Z(.002,5e-4,.05,6),e,-.05+t()*.1,.003,.08+t()*.04,Math.PI/2,0,t()*Ht)},wiring(n,t){let e=se(t,["#e0521c","#f2c21b","#f4f1ea"]),i=Y(Tt("wire"+e,256,32,(r,o,a)=>{r.fillStyle=e,r.fillRect(0,0,o,a),r.strokeStyle="rgba(0,0,0,0.3)",r.lineWidth=1.5;for(let l=-32;l<o;l+=4)r.beginPath(),r.moveTo(l,0),r.lineTo(l+16,a),r.stroke()}),.45);v(n,Ne(.1,.035,6,20),i,0,.035,0,Math.PI/2,0,0,1,1,.9),v(n,Z(.137,.137,.05,16,!0),Y(Ii({t:"12/2 NM-B",s:"COPPER BUILDING WIRE  50 FT",b:"#f4f1ea",f:"#111",a:e}),.6),0,.012,0,0,0,0,1,1,1),v(n,Ln("wiretail",[[.12,.05,0],[.18,.04,.05],[.22,.01,.02]],.005,10,4),nt(new Zt(e).getHex(),.4));let s=new Wt;gi(s,.07,.1,.02,{t:"WIRE NUTS",s:"25 PCS",b:"#e8eef2",f:"#c41e1e",a:"#f2c21b"},.2,0,.06),s.rotation.x=-Math.PI/2,s.position.set(-.17,.01,.09),n.add(s)},pipe_fittings(n,t){let e=nt(15658730,.4),i=nt(7829367,.8);for(let s=0;s<3;s++){let r=new Wt;v(r,Z(.017,.017,.5,10,!0),e),v(r,Z(.015,.015,.5,8,!0),Y(null,.8,0,{color:6710886,side:un})),r.rotation.z=Math.PI/2,r.position.set(.25,.017,-.05+s*.036),r.rotation.y=(t()-.5)*.05,n.add(r)}v(n,Ne(.03,.02,8,8,Math.PI/2),e,-.1,.02,.07,Math.PI/2,0,0),v(n,Z(.022,.022,.05,12),e,-.05,0,.1),v(n,Ne(.09,.012,5,16),nt(3111474,.5),-.05,.012,-.05,Math.PI/2),v(n,Ne(.075,.012,5,16),nt(3111474,.5),-.05,.034,-.05,Math.PI/2),v(n,Z(.016,.016,.03,8),rt.brass,.03,.016,-.05,0,0,Math.PI/2)},plastic_sheet(n){let t=ee("plasroll",{color:15265520,roughness:.25,transparent:!0,opacity:.85}),e=Y(Tt("rollend",128,128,(s,r,o)=>{s.fillStyle="#dfe6e8",s.fillRect(0,0,r,o),s.strokeStyle="rgba(0,0,0,0.12)";for(let a=18;a<64;a+=2)s.beginPath(),s.arc(64,64,a,0,Ht),s.stroke();s.fillStyle="#a67c48",s.beginPath(),s.arc(64,64,17,0,Ht),s.fill(),s.fillStyle="#222",s.beginPath(),s.arc(64,64,13,0,Ht),s.fill()}),.5),i=new Wt;v(i,Z(.07,.07,.6,18),[t,e,e]),v(i,Z(.0705,.0705,.2,18,!0),Y(Ii({t:"PLASTIC SHEETING",s:"6 MIL  10 x 25 FT  CLEAR",b:"#f4f1ea",f:"#111",a:"#c41e1e"}),.5),0,.2,0),i.rotation.z=Math.PI/2,i.position.set(.3,.07,0),n.add(i)},insulation(n){let t=Y(Tt("foam",256,256,(i,s,r,o)=>{Me(i,s,r,o,"#e9a0b0",.08,3e3,2),Jt(i,"RIGID FOAM  R-5",s/2,r*.3,26,{color:"rgba(30,60,140,0.8)",maxW:s*.9}),Jt(i,"1 IN x 2 FT x 4 FT",s/2,r*.45,18,{color:"rgba(30,60,140,0.8)"}),$e(i,30,r*.6,s-60,4,10,o,"rgba(30,60,140,0.5)"),fe(i,s,r,o,.6)}),.9),e=nt(15311024,.95);for(let i=0;i<4;i++)v(n,Q(.6,.025,.3),[e,e,t,t,e,e],i%2*.01,i*.025,i%2*-.008);v(n,Q(.08,.104,.304),ee("shrink",{color:16777215,roughness:.1,transparent:!0,opacity:.25}),.18,-.002,0)},metal_bin(n){let t=Y(Tt("galv",256,256,(i,s,r,o)=>{Me(i,s,r,o,"#a9aeb2",.12,2500,3);for(let a=0;a<30;a++)i.fillStyle=`rgba(255,255,255,${.05+o()*.1})`,i.beginPath(),i.ellipse(o()*s,o()*r,8+o()*20,6+o()*14,o()*3,0,Ht),i.fill();fe(i,s,r,o,1.2)}),.5,.45);v(n,Xe("trashcan",[[0,.005],[.2,.005],[.205,.08],[.215,.09],[.207,.1],[.212,.26],[.222,.27],[.214,.28],[.22,.46],[.23,.47],[.222,.48],[.234,.6]],16),Y(t.map,.5,.45,{side:Ce})),v(n,Xe("trashlid",[[.245,0],[.24,.015],[.2,.04],[.1,.06],[0,.065]],16),t,0,.595,0),v(n,Ln("binlidh",[[-.05,.66,0],[-.04,.69,0],[.04,.69,0],[.05,.66,0]],.008,6,5),rt.steel);for(let i of[-1,1])v(n,Ln("binsideh",[[0,.5,-.05],[.035,.49,-.04],[.035,.49,.04],[0,.5,.05]],.007,6,4),rt.steel,i*.22,0,0,0,i<0?Math.PI:0,0)},rain_barrel(n){let t=nt(1920922,.45);v(n,Xe("barrel",[[0,0],[.27,0],[.29,.02],[.3,.12],[.31,.14],[.3,.16],[.305,.45],[.3,.74],[.31,.76],[.3,.78],[.29,.88],[.27,.9],[0,.9]],24),t);for(let i of[-.18,.18])v(n,Z(.03,.03,.015,10),nt(1194610,.5),i,.895,0);v(n,Z(.015,.015,.06,10),rt.brass,0,.12,.31,Math.PI/2),v(n,Q(.02,.04,.01),rt.brass,0,.12,.345),v(n,Q(.24,.12,.002),Y(ai({t:"RAIN BARREL",s:"55 GAL  NOT FOR DRINKING",b:"#f4f1ea",f:"#1d4f9a",a:"#1d4f9a"},256,128),.6),0,.5,.303)},stove_kit(n){let t=Y(Tt("stoveblk",128,128,(e,i,s,r)=>{Me(e,i,s,r,"#26272a",.12,2e3,2),fe(e,i,s,r,1)}),.7,.35);v(n,Kt(.45,.4,.5,.02),t,0,.12,0);for(let e of[-.19,.19])for(let i of[-.21,.21])v(n,Z(.018,.012,.12,8),t,e,0,i);v(n,Q(.3,.24,.02),t,0,.19,.25),v(n,Q(.2,.14,.004),ee("stoveglass",{color:2234900,roughness:.1,metalness:.3}),0,.24,.26),v(n,Z(.008,.008,.08,8),rt.chrome,.12,.28,.275),v(n,Z(.07,.07,.08,16,!0),t,0,.52,-.08);for(let e=0;e<2;e++)v(n,Z(.075,.075,.6,16,!0),Y(Lr("#4a4c50","pipe"),.6,.4),.38+e*.16,.075,0,Math.PI/2,0,0);v(n,Q(.2,.1,.002),Y(ai({t:"WOOD STOVE",s:"EPA CERTIFIED  60,000 BTU",b:"#f4f1ea",f:"#111",a:"#c4221c"},256,128),.6),0,.42,.251)},battery_module(n){let t=nt(15263972,.4);v(n,Kt(.5,.7,.16,.03),t),v(n,Q(.44,.06,.004),nt(2763308,.3),0,.58,.08);for(let i=0;i<5;i++)v(n,Q(.04,.008,.002),ee("ledg"+i,{color:i<3?3135066:1718818,emissive:i<3?674330:0,roughness:.3}),-.12+i*.06,.6,.083);let e=Y(Tt("vent",128,64,(i,s,r)=>{i.fillStyle="#d8d8d4",i.fillRect(0,0,s,r),i.fillStyle="#333";for(let o=6;o<r-4;o+=7)i.fillRect(8,o,s-16,3)}),.5);v(n,Q(.36,.14,.003),e,0,.08,.08),v(n,Q(.2,.12,.002),Y(ai({t:"HOME BATTERY",s:"LiFePO4  5 kWh  48 V DC",n:"CAUTION  HIGH VOLTAGE",b:"#f4f1ea",f:"#111",a:"#2a6fd6"},256,160),.5),0,.35,.081);for(let i of[-.06,.06])v(n,Z(.012,.012,.03,10),i<0?nt(1710618,.5):nt(12852766,.5),i,.7,0)},candles(n,t){Jn(n,.12,.16,.06,{t:"EMERGENCY",t2:"CANDLES",s:"UNSCENTED  9 HR BURN",n:"6 CANDLES",b:"#f4f1ea",f:"#c41e1e",a:"#2a2a2c",p:"flame",top:"POWER OUTAGE"});let e=ee("wax",{color:15986396,roughness:.55,emissive:1315344});for(let i=0;i<2;i++){let s=.1+t()*.04;v(n,Z(.025,.025,s,14),e,.11+i*.06,0,.02-i*.03),v(n,Z(.0015,.0015,.01,4),nt(1118481,.9),.11+i*.06,s,.02-i*.03)}},matches(n,t){let i=Y(ai({t:"STRIKE",t2:"ANYWHERE",s:"KITCHEN MATCHES",n:"250 MATCHES",b:"#f2c21b",f:"#c41e1e",a:"#c41e1e",top:"SAFETY",p:"flame"},256,160),.7),s=Y(Tt("strike",64,64,(a,l,c,h)=>Me(a,l,c,h,"#5a3a2a",.4,600,2)),.95),r=new Wt;v(r,Q(.115,.03,.065),[s,s,i,i,nt(15909403,.7),nt(15909403,.7)]);let o=Y(Tt("matchheads",128,64,(a,l,c)=>{a.fillStyle="#d8b88a",a.fillRect(0,0,l,c);for(let h=0;h<l;h+=6)for(let f=0;f<c;f+=6)a.fillStyle="#b81d18",a.beginPath(),a.arc(h+3+(f%12?0:2),f+3,2.6,0,Ht),a.fill()}),.8);v(r,Q(.105,.024,.058),[nt(15261900,.8),nt(15261900,.8),o,nt(15261900,.8),nt(15261900,.8),nt(15261900,.8)],.045,.004,0),n.add(r);for(let a=0;a<3;a++){let l=new Wt;v(l,Q(.003,.003,.06),nt(14203018,.8)),v(l,pn(.003,6,4),nt(12066072,.6),0,.0015,.03,0,0,0,1,1,1.4),l.position.set(-.03+a*.02,0,.06+t()*.02),l.rotation.y=t()*2-1,n.add(l)}},duct_tape(n){let t=Y(Lr("#9ea3a8","tape"),.5,.25);v(n,Xe("ducttape",[[.038,0],[.056,0],[.057,.002],[.057,.046],[.056,.048],[.038,.048]],20),t),v(n,Z(.0375,.0375,.048,16,!0),Y(Ii({t:"DUCT TAPE",s:"1.88 IN x 60 YD",b:"#b99868",f:"#2a2a2c",a:"#b99868"}),.9,0,{side:Ce}),0,0,0),v(n,Q(.002,.046,.05),t,.058,.001,.025,0,.3,0)},rope(n,t){let e=se(t,["#c8b080","#2a6fd6","#d6283a","#3a5a2a"]),i=Y(Tt("rope"+e,128,32,(s,r,o)=>{s.fillStyle=e,s.fillRect(0,0,r,o),s.strokeStyle="rgba(0,0,0,0.35)",s.lineWidth=2;for(let a=-32;a<r;a+=6)s.beginPath(),s.moveTo(a,0),s.lineTo(a+18,o),s.stroke();s.strokeStyle="rgba(255,255,255,0.2)";for(let a=-30;a<r;a+=6)s.beginPath(),s.moveTo(a,0),s.lineTo(a+18,o),s.stroke()},{repeat:[12,1]}),.95);for(let s=0;s<3;s++)v(n,Ne(.11+s%2*.006,.013,4,20),i,s%2*.005,.012+s*.016,s%3*.004,Math.PI/2,0,s*.7);for(let s=0;s<2;s++)v(n,Ne(.03,.009,4,8),i,.115,.028,-.008+s*.016,0,Math.PI/2,0,1,1.4,1);v(n,Ln("ropetail",[[-.1,.012,.03],[-.16,.01,.1],[-.12,.012,.18],[-.05,.012,.2]],.012,10,5),i),v(n,Z(.124,.124,.03,16,!0),Y(Ii({t:"UTILITY ROPE",s:"3/8 IN x 50 FT",b:"#f4f1ea",f:"#111",a:"#c41e1e"}),.8),0,.02,0,0,0,0,1,1,1)},knife(n){let t=Y(Lr("#c8ccd0","blade"),.22,.55);v(n,ru("knifeblade2",()=>{let s=new wr;return s.moveTo(0,0),s.lineTo(.125,0),s.quadraticCurveTo(.158,.004,.172,.03),s.lineTo(.13,.032),s.lineTo(0,.032),s.closePath(),s},.0025,7e-4),t,.004,.011,.016,-Math.PI/2,0,0),v(n,Q(.165,6e-4,.004),nt(15658734,.15,.6),.09,.0125,.013),v(n,Kt(.115,.02,.028,.008),nt(1908256,.6),-.058,.001,0),v(n,Q(.008,.024,.042),rt.steel,.002,0,0);for(let s of[-.03,-.08])v(n,Z(.0035,.0035,.022,8),rt.brass,s,5e-4,0);v(n,Ne(.005,.0015,3,8),rt.steel,-.118,.011,0,Math.PI/2);let i=Y(Tt("sheath",128,64,(s,r,o,a)=>{Me(s,r,o,a,"#5a3a22",.15,900,2),s.strokeStyle="rgba(230,210,170,0.6)",s.setLineDash([4,3]),s.lineWidth=2,s.strokeRect(5,5,r-10,o-10),fe(s,r,o,a,1)}),.8);v(n,Kt(.19,.014,.05,.006),i,.03,0,.065,0,.12,0),v(n,Q(.03,.016,.05),i,-.07,0,.078,0,.12,0)},multitool(n){let t=Y(Lr("#b8bcc0","mt"),.3,.5);v(n,Kt(.1,.012,.016,.004),t,0,0,-.009),v(n,Kt(.1,.012,.016,.004),t,0,0,.009),v(n,Q(.03,.008,.02),rt.darkMetal,.06,.002,0);for(let e=0;e<3;e++)v(n,Q(.06,.001,.003),rt.darkMetal,-.01+e*.01,.012,-.012+e*.012);v(n,Ne(.008,.002,4,10),rt.steel,-.055,.006,0,Math.PI/2),v(n,Kt(.08,.025,.04,.008),nt(1908256,.85),.02,0,.06,0,.3,0)},can_opener(n){let t=nt(12853788,.5),e=new Wt;v(e,Kt(.13,.016,.022,.007),t,-.07,0,-.016,0,.12,0),v(e,Kt(.13,.016,.022,.007),t,-.07,0,.016,0,-.12,0),v(e,Q(.04,.022,.05),rt.steel,.01,-.003,0),v(e,Z(.012,.012,.005,12),rt.steel,.02,-.003,0),v(e,Ln("openerkey",[[.02,.02,0],[.02,.035,0],[.045,.04,0],[.06,.03,0]],.004,8,5),rt.steel),v(e,Kt(.03,.02,.02,.006),t,.07,.025,0,0,0,Math.PI/2),e.position.y=.011,n.add(e)},cooking_pot(n){let t=Y(Lr("#bfc3c7","pot"),.3,.55);v(n,Xe("pot",[[0,.002],[.095,.002],[.1,.008],[.1,.12],[.104,.124],[.097,.124],[.093,.12],[.093,.01],[0,.01]],16),t),v(n,Xe("potlid",[[.104,0],[.1,.006],[.06,.02],[0,.026]],16),t,0,.122,0),v(n,Z(.012,.018,.018,10),rt.blackPl,0,.148,0);for(let e of[-1,1])v(n,Ln("pothandle"+e,[[e*.098,.105,-.035],[e*.128,.105,-.025],[e*.128,.105,.025],[e*.098,.105,.035]],.006,8,5),rt.blackPl)},blanket(n,t){let e=se(t,[["#7a1d1a","#22304a","#e8d8a0"],["#2f4a2a","#1a1a1a","#c8a24a"],["#4a5a7a","#e8e8e0","#1a2a4a"]]),i=Y(yu(e[0],e[1],e[2]),.95);v(n,Kt(.4,.04,.3,.02),i),v(n,Kt(.4,.04,.3,.02),i,.003,.038,.003,0,.02,0),v(n,Kt(.4,.04,.3,.02),i,-.004,.076,-.002,0,-.015,0),v(n,Z(.02,.02,.3,10),i,.2,.06,-.15,Math.PI/2,0,0,1,1,2.6)},sleeping_bag(n,t){let e=se(t,["#2a5ab8","#c8521c","#3a5a2a"]),i=Y(xi(e,"sb"),.55),s=new Wt;v(s,Z(.13,.13,.4,18),[i,Y(Tt("stuffend"+e,128,128,(r,o,a)=>{r.fillStyle=e,r.fillRect(0,0,o,a),r.strokeStyle="rgba(0,0,0,0.35)",r.lineWidth=2;for(let l=0;l<12;l++)r.beginPath(),r.moveTo(64,64),r.lineTo(64+Math.cos(l)*64,64+Math.sin(l)*64),r.stroke()}),.6),i]);for(let r of[.08,.32])v(s,Z(.133,.133,.025,18,!0),rt.blackPl,0,r,0);for(let r=0;r<4;r++)v(s,Q(.025,.42,.004),rt.blackPl,Math.sin(r*Math.PI/2)*.132,-.01,Math.cos(r*Math.PI/2)*.132,0,r*Math.PI/2,0);v(s,Z(.004,.004,.06,6),rt.blackPl,.03,.4,0),v(s,Z(.008,.008,.02,8),nt(2763306,.5),.03,.45,0),s.rotation.z=Math.PI/2,s.position.set(.2,.13,0),n.add(s)},hand_warmers(n){for(let t=0;t<2;t++){let e=new Wt;gi(e,.09,.13,.012,{t:"HAND",t2:"WARMERS",s:"UP TO 10 HRS",n:"1 PAIR",b:"#e0521c",f:"#fff",a:"#2a2a2c",p:"flame"},.45,.1,.06),e.rotation.set(-Math.PI/2,0,t*.5-.2),e.position.set(t*.06,.006+t*.008,t*.02),n.add(e)}},wool_socks(n,t){let e=se(t,["#8a8a86","#6a5a4a","#4a5a6a"]),i=se(t,["#a8321e","#2a4a7a","#e8e2d2"]),s=.3,r=Tt("sockface"+e+i,256,256,(c,h,f,u)=>{c.fillStyle=e,c.fillRect(0,0,h,f);let d=jn(e,-.3),m=jn(e,.15);for(let p=0;p<h;p+=6)for(let b=0;b<f;b+=6)c.fillStyle=m,c.beginPath(),c.ellipse(p+1.5,b+3,1.6,3,-.5,0,Ht),c.ellipse(p+4.5,b+3,1.6,3,.5,0,Ht),c.fill(),c.fillStyle=d,c.fillRect(p+2.7,b,.6,6);let x=p=>p/s*h,g=p=>f-p/s*f;c.fillStyle=i,c.globalAlpha=.85,c.beginPath(),c.arc(x(0),g(0),x(.06),0,Ht),c.fill(),c.fillRect(x(.165),g(.1),x(.06),x(.1)),c.fillRect(0,g(.275),x(.1),x(.035)),c.globalAlpha=1;for(let p=g(.27);p<g(.215);p+=4)c.fillStyle="rgba(0,0,0,0.18)",c.fillRect(0,p,x(.1),1.5);fe(c,h,f,u,.5)},{repeat:[1/s,1/s]}),a=ru("sock",()=>{let c=new wr;return c.moveTo(0,.27),c.lineTo(0,.06),c.quadraticCurveTo(0,0,.06,0),c.lineTo(.17,0),c.quadraticCurveTo(.215,.002,.215,.04),c.quadraticCurveTo(.212,.078,.17,.08),c.lineTo(.095,.085),c.lineTo(.088,.27),c.closePath(),c},.012,.006),l=Y(Eo(e,"sockside"),.95);for(let c=0;c<2;c++)v(n,a,[Y(r,.95),l],c*.025-.1,.009+c*.024,-.13+c*.012,-Math.PI/2,0,c*.08);v(n,Q(.105,.05,.003),Y(Ii({t:"WOOL SOCKS",s:"MERINO BLEND  1 PAIR",b:"#f4f1ea",f:"#3a2a1f",a:i}),.8),-.065,.005,-.03,-Math.PI/2,0,0)},trash_bags(n){Jn(n,.26,.12,.13,{t:"TRASH BAGS",s:"LARGE 30 GAL  DRAWSTRING",n:"40 BAGS",b:"#1a1a1c",f:"#f2c21b",a:"#2f7a32",p:"bolt",top:"HEAVY DUTY"},{tw:384,th:180}),v(n,Q(.12,.002,.04),nt(657930,.3),0,.12,0)},radio(n){let t=nt(14701084,.5),e=nt(3815996,.6),i=Y(Tt("radiofront",256,160,(s,r,o,a)=>{s.fillStyle="#3a3a3c",s.fillRect(0,0,r,o),s.fillStyle="#1a1a1a";for(let l=20;l<o-20;l+=9)for(let c=16;c<r*.5;c+=9)s.beginPath(),s.arc(c,l,3,0,Ht),s.fill();s.fillStyle="#9ab89a",s.fillRect(r*.56,24,r*.38,40),s.fillStyle="#2a3a2a";for(let l=0;l<10;l++)s.fillRect(r*.58+l*9,50,2,10);Jt(s,"AM  FM  WB",r*.75,36,12,{color:"#2a3a2a"});for(let l=0;l<3;l++)s.fillStyle="#c8c8c8",s.fillRect(r*.58+l*30,84,22,12);Jt(s,"EMERGENCY RADIO",r*.75,120,14,{color:"#ddd",maxW:r*.4}),fe(s,r,o,a,.8)}),.5);v(n,Kt(.19,.11,.07,.015),[t,t,t,t,i,t]),v(n,Q(.1,.004,.05),ee("solar",{color:1714762,roughness:.15,metalness:.4}),-.03,.11,0),v(n,Z(.003,.003,.22,6),rt.chrome,.08,.11,-.02,0,0,-.25),v(n,Z(.012,.012,.012,12),e,.06,.07,.04,Math.PI/2),v(n,Q(.012,.06,.012),e,.1,.04,0),v(n,Z(.006,.006,.03,8),e,.12,.015,0,0,0,Math.PI/2)},paper_map(n,t){let e=Y(Tt("mapcover",256,448,(i,s,r,o)=>{i.fillStyle="#f4f1e6",i.fillRect(0,0,s,r),i.fillStyle="#1d4f9a",i.fillRect(0,0,s,r*.28),Jt(i,"PORTLAND",s/2,r*.09,36,{color:"#fff",maxW:s*.9}),Jt(i,"METRO STREET MAP",s/2,r*.18,20,{color:"#f2c21b",maxW:s*.9}),i.fillStyle="#e8e2c8",i.fillRect(16,r*.32,s-32,r*.5),i.strokeStyle="#7fa8d6",i.lineWidth=10,i.beginPath(),i.moveTo(s*.45,r*.32),i.bezierCurveTo(s*.6,r*.5,s*.35,r*.62,s*.55,r*.82),i.stroke(),i.strokeStyle="#d6a04a",i.lineWidth=3;for(let a=0;a<9;a++)i.beginPath(),i.moveTo(16,r*(.34+a*.055)),i.lineTo(s-16,r*(.34+a*.055)+(o()-.5)*10),i.stroke(),i.beginPath(),i.moveTo(20+a*26,r*.32),i.lineTo(20+a*26+(o()-.5)*10,r*.82),i.stroke();i.fillStyle="#9ac48a",i.fillRect(s*.12,r*.38,40,30),Jt(i,"FOLD HERE",s/2,r*.9,12,{color:"#666"}),fe(i,s,r,o,1.2)}),.85);v(n,Q(.12,.008,.21),[rt.paper,rt.paper,e,rt.paper,rt.paper,rt.paper],0,0,0,0,t()*.6,0)},toilet_paper(n){let t=Y(Tt("tproll",128,64,(s,r,o,a)=>{Me(s,r,o,a,"#f6f4ee",.05,500,1),s.strokeStyle="rgba(0,0,0,0.06)";for(let l=0;l<r;l+=8)s.beginPath(),s.moveTo(l,0),s.lineTo(l,o),s.stroke()}),.95),e=Y(Tt("tptop",128,128,(s,r,o)=>{s.fillStyle="#f6f4ee",s.fillRect(0,0,r,o),s.strokeStyle="rgba(0,0,0,0.08)";for(let a=24;a<64;a+=3)s.beginPath(),s.arc(64,64,a,0,Ht),s.stroke();s.fillStyle="#a67c48",s.beginPath(),s.arc(64,64,22,0,Ht),s.fill(),s.fillStyle="#2a2420",s.beginPath(),s.arc(64,64,19,0,Ht),s.fill()}),.9);for(let s=0;s<4;s++)v(n,Z(.055,.055,.1,18),[t,e,e],(s%2-.5)*.112,0,(Math.floor(s/2)-.5)*.112);let i=ee("tpwrap",{color:16777215,roughness:.15,transparent:!0,opacity:.2,depthWrite:!1});v(n,Kt(.23,.105,.23,.03),i),v(n,Q(.2,.06,.002),Y(Ii({t:"BATH TISSUE",s:"4 DOUBLE ROLLS  2-PLY",b:"#f4f6fa",f:"#2a4f9a",a:"#7fa8d6"}),.5),0,.02,.116)},soap(n,t){Jn(n,.095,.035,.065,{t:"BAR SOAP",s:"GENTLE  UNSCENTED",n:"4 OZ (113g)",b:"#f4f6fa",f:"#2a6fd6",a:"#7fc4d6",p:"bubble"},{tw:256,th:96}),v(n,Kt(.085,.03,.055,.012),nt(se(t,[16052454,15259888,14217440]),.4),.11,0,.02,0,.4,0)},toothpaste(n){let t={t:"TOOTHPASTE",s:"FLUORIDE  COOL MINT",n:"NET WT 6 OZ (170g)",b:"#2a6fd6",f:"#fff",a:"#d6283a",p:"tooth"},e=new Wt;Jn(e,.045,.2,.04,t,{tw:128,th:512}),e.rotation.z=Math.PI/2,e.position.set(.1,0,0),n.add(e);let i=new Wt;v(i,Xe("tptube",[[0,0],[.012,0],[.016,.012],[.019,.04],[.019,.12],[.017,.165],[.016,.17]],14),Y(_i({...t,s:"COOL MINT"},256,256),.35),0,0,0,0,0,0,1,1,.65),v(i,Z(.012,.014,.018,12),rt.whitePl,0,-.018,0),v(i,Q(.04,.012,.003),nt(16777215,.5),0,.168,0),i.rotation.z=Math.PI/2,i.position.set(0,.013,.07),n.add(i)}};delete al.first_aid_kit;var U_=Object.keys(al);function Mu(n,t=0){let e=new Wt,i=Ps(Ro(String(n))^Math.imul(t+1,2654435761)),s=al[n];return s?s(e,i):Jx(e,n),vu(e,n)}function Jx(n,t){let e=String(t||"SUPPLIES").replace(/_/g," ").toUpperCase(),i=Y(Z0(e.slice(0,18),0),.9),s=Y(us(),.9);v(n,Q(.3,.22,.24),[i,i,s,s,i,i])}var jx=["#c9ccd0","#f2f1ec","#1c1c1e","#a9824f","#c4221c","#1d4f9a","#2f7a32","#f2c21b","#8a4a1a","#cfdde4","#e8701c","#c59a45","#4a4c50","#2a9a9a","#9a6a2c","#e9a0b0"],Qx={tin:0,white:1,black:2,card:3,red:4,blue:5,green:6,yellow:7,amber:8,clear:9,orange:10,brass:11,dark:12,teal:13,brown:14,pink:15},mt=(n,t,e,i,s,r,o,a={})=>({t:n,s:t,b:e,f:i,a:s,p:r,n:o,...a}),wo={grocery:[{s:"can",r:.038,h:.112,L:Ur[0],w8:2,stack:1},{s:"can",r:.038,h:.11,L:Ur[1],w8:2,stack:1},{s:"can",r:.038,h:.112,L:Ur[2],w8:1,stack:1},{s:"can",r:.038,h:.112,L:Ur[3],w8:1,stack:1},{s:"can",r:.038,h:.11,L:bu[0],w8:2,stack:1},{s:"can",r:.043,h:.04,L:mt("TUNA","CHUNK LIGHT IN WATER","#2b4f9a","#fff","#f2c21b","fish","NET WT 5 OZ (142g)"),w8:2,stack:1},{s:"box",w:.19,h:.29,d:.07,L:mt("CORN FLAKES","TOASTED","#f2f1ec","#1d4f9a","#e8701c","grain","NET WT 18 OZ (510g)",{top:"FAMILY SIZE",tf:"#fff"}),w8:2},{s:"box",w:.19,h:.28,d:.07,L:mt("OAT RINGS","HONEY NUT","#f2c21b","#7a2a10","#7a2a10","oats","NET WT 15.4 OZ (436g)",{top:"WHOLE GRAIN"}),w8:2},{s:"box",w:.1,h:.26,d:.04,L:mt("SPAGHETTI","ENRICHED","#1d4f9a","#fff","#f2c21b","grain","1 LB (454g)",{tf:"#1d4f9a",top:"NO. 3"}),w8:2},{s:"box",w:.2,h:.22,d:.07,L:mt("SALTINES","ORIGINAL","#f4f1ea","#c41e1e","#c41e1e","grain","NET WT 16 OZ (454g)"),w8:2},{s:"box",w:.13,h:.17,d:.04,L:mt("MAC & CHEESE","ORIGINAL","#2b6fd6","#fff","#f2c21b","noodle","NET WT 7.25 OZ",{tf:"#2b6fd6",top:"DINNER"}),w8:2},{s:"jar",r:.045,h:.125,L:mt("PEANUT BUTTER","CREAMY","#f5e6c0","#8a3a12","#c8321e","peanut","NET WT 16 OZ"),cap:"red",body:"brown",w8:2},{s:"jar",r:.042,h:.16,L:mt("PASTA SAUCE","MARINARA","#2f5a2a","#fff","#b81d18","tomato","24 OZ (680g)"),cap:"tin",body:"red",w8:2},{s:"bottle",r:.042,h:.3,L:mt("VEGETABLE OIL","PURE","#f2c21b","#1d4f9a","#1d4f9a","leaf","48 FL OZ (1.42 L)"),cap:"yellow",body:"yellow",w8:1},{s:"bag",w:.17,h:.25,d:.08,L:mt("WHITE RICE","LONG GRAIN","#f6f3ea","#1d4f8a","#1d4f8a","grain","NET WT 2 LB (907g)"),w8:2},{s:"bag",w:.16,h:.27,d:.09,L:mt("FLOUR","ALL PURPOSE","#f6f3ea","#c41e1e","#2b4f9a","grain","5 LB (2.26 kg)"),w8:1},{s:"bag",w:.21,h:.3,d:.08,L:mt("POTATO CHIPS","SEA SALT","#f2c21b","#c41e1e","#c41e1e","chip","NET WT 8 OZ"),gl:1,w8:2},{s:"jug",w:.15,h:.27,d:.15,L:mt("DRINKING WATER","1 GALLON","#e9f2f6","#1d5fa8","#3d8fd6","drop","3.78 L"),cap:"blue",body:"clear",w8:2},{s:"can",r:.064,h:.18,L:mt("OLD FASHIONED OATS","100% WHOLE GRAIN","#f4f1ea","#2a4f8a","#2a4f8a","oats","42 OZ (1.19 kg)"),cap:"blue",w8:1},{s:"cup",r:.05,h:.1,L:mt("INSTANT NOODLES","CHICKEN FLAVOR","#f4f1ea","#c41e1e","#f2c21b","noodle","2.25 OZ"),cap:"white",w8:2,stack:1},{s:"can",r:.065,h:.16,L:mt("GROUND COFFEE","MEDIUM ROAST","#3a1a10","#f3c04a","#b5321a","bean","30.5 OZ (864g)"),cap:"red",w8:1},{s:"bag",w:.14,h:.21,d:.08,L:mt("SUGAR","GRANULATED","#f6f3ea","#1d4f9a","#c41e1e","grain","4 LB (1.81 kg)"),w8:1},{s:"box",w:.4,h:.125,d:.135,L:mt("COLA 12 PACK","12 FL OZ CANS","#a8141a","#fff","#5a0a0a","bubble","144 FL OZ (4.26 L)"),w8:1,wide:1},{s:"bottle",r:.036,h:.22,L:mt("KETCHUP","TOMATO","#c41e1e","#fff","#2f6a2a","tomato","20 OZ (567g)"),cap:"white",body:"red",w8:1}],pharmacy:[{s:"jar",r:.028,h:.1,L:mt("PAIN RELIEVER","ACETAMINOPHEN 500 MG","#f4f4f0","#c41e1e","#c41e1e","pill","100 CAPLETS"),cap:"white",body:"white",w8:3,stack:1},{s:"jar",r:.028,h:.1,L:mt("IBUPROFEN","200 MG TABLETS","#f08a1c","#fff","#7a2a0a","pill","100 TABLETS"),cap:"orange",body:"white",w8:3,stack:1},{s:"jar",r:.035,h:.12,L:mt("MULTIVITAMIN","ADULT DAILY","#2a2a6a","#f2c21b","#f2c21b","sun","120 TABLETS"),cap:"black",body:"dark",w8:2},{s:"box",w:.08,h:.11,d:.03,L:mt("ALLERGY","24 HOUR RELIEF","#6a2a9a","#fff","#f2c21b","leaf","30 TABLETS"),w8:2,stack:1},{s:"box",w:.1,h:.14,d:.04,L:mt("COLD & FLU","DAY + NIGHT","#1d4f9a","#fff","#e8701c","moon","24 LIQUID CAPS"),w8:2,stack:1},{s:"bottle",r:.033,h:.14,L:mt("ANTACID","EXTRA STRENGTH","#f2f1ec","#2a9a9a","#2a9a9a","drop","160 CHEWABLES"),cap:"teal",body:"white",w8:1},{s:"box",w:.1,h:.13,d:.045,L:mt("BANDAGES","FLEXIBLE FABRIC","#f4f1ea","#c41e1e","#e0b38a","cross","60 ASSORTED"),w8:2,stack:1},{s:"box",w:.1,h:.1,d:.05,L:mt("GAUZE PADS","STERILE 4 x 4 IN","#f4f8fb","#1d5fa8","#3aa7a0","cross","25 PADS"),w8:2,stack:1},{s:"box",w:.08,h:.12,d:.03,L:mt("SLEEP AID","NIGHTTIME","#1a2a5a","#fff","#7fa8d6","moon","32 CAPLETS"),w8:1,stack:1},{s:"bottle",r:.036,h:.23,L:mt("SHAMPOO","DAILY CLEAN","#2a9a9a","#fff","#fff","bubble","12 FL OZ"),cap:"white",body:"teal",w8:2},{s:"jug",w:.1,h:.24,d:.065,L:mt("MOUTHWASH","ANTISEPTIC MINT","#2f7a32","#fff","#f2f1ec","tooth","1 L"),cap:"white",body:"green",w8:1},{s:"box",w:.065,h:.15,d:.065,L:mt("COUGH SYRUP","DM MAX","#b81d18","#fff","#f2c21b","drop","8 FL OZ"),w8:2},{s:"bottle",r:.036,h:.21,L:mt("LOTION","DRY SKIN","#f2f1ec","#1d4f9a","#7fa8d6","drop","16 FL OZ"),cap:"white",body:"white",w8:1},{s:"bottle",r:.03,h:.18,L:mt("HAND SANITIZER","70% ALCOHOL","#cfe3ef","#1d5fa8","#1d5fa8","drop","12 FL OZ"),cap:"blue",body:"clear",w8:2},{s:"bottle",r:.04,h:.21,L:mt("ISOPROPYL","ALCOHOL 70%","#f2f1ec","#1d4f9a","#1d4f9a","drop","32 FL OZ"),cap:"white",body:"clear",w8:2},{s:"bottle",r:.04,h:.21,L:mt("HYDROGEN","PEROXIDE 3%","#f2f1ec","#8a4a1a","#8a4a1a","drop","32 FL OZ"),cap:"white",body:"amber",w8:1},{s:"box",w:.045,h:.19,d:.04,L:mt("TOOTHPASTE","FLUORIDE","#2a6fd6","#fff","#d6283a","tooth","6 OZ"),w8:2},{s:"box",w:.07,h:.15,d:.04,L:mt("DEODORANT","UNSCENTED","#4a4c50","#fff","#7fa8d6","drop","2.6 OZ"),w8:1},{s:"box",w:.1,h:.13,d:.04,L:mt("ORAL SALTS","REHYDRATION","#f4f8fb","#1d5fa8","#3aa7a0","drop","10 SACHETS"),w8:2,stack:1},{s:"box",w:.2,h:.14,d:.07,L:mt("FIRST AID KIT","100 PIECES","#c8201e","#fff","#fff","wcross","HOME CAR WORK",{tf:"#c8201e"}),w8:1},{s:"bag",w:.15,h:.2,d:.1,L:mt("COTTON BALLS","TRIPLE SIZE","#f2f1ec","#d6283a","#e9a0b0","bubble","100 CT"),gl:1,w8:1},{s:"bag",w:.11,h:.15,d:.04,L:mt("COUGH DROPS","HONEY LEMON","#f2c21b","#7a2a10","#c41e1e","drop","30 DROPS"),gl:1,w8:1},{s:"box",w:.065,h:.18,d:.025,L:mt("THERMOMETER","DIGITAL","#f2f1ec","#1d4f9a","#1d4f9a","bolt","ORAL 60 SEC"),w8:1},{s:"box",w:.05,h:.1,d:.03,L:mt("EYE DROPS","LUBRICANT","#f2f1ec","#2a9a9a","#2a9a9a","drop","0.5 FL OZ"),w8:1,stack:1}],hardware:[{s:"can",r:.085,h:.19,L:mt("INTERIOR PAINT","EGGSHELL  WHITE","#f2f1ec","#1d4f9a","#1d4f9a","drop","1 GALLON (3.78 L)"),w8:2},{s:"can",r:.085,h:.19,L:mt("PRIMER","STAIN BLOCKING","#c4221c","#fff","#2a2a2c","drop","1 GALLON"),w8:1},{s:"tall",r:.033,h:.21,L:mt("SPRAY PAINT","GLOSS BLACK","#1c1c1e","#fff","#e8701c","drop","NET WT 12 OZ"),cap:"black",w8:2},{s:"tall",r:.033,h:.21,L:mt("SPRAY PAINT","SAFETY RED","#f2f1ec","#c4221c","#c4221c","drop","NET WT 12 OZ"),cap:"red",w8:1},{s:"tall",r:.03,h:.2,L:mt("PENETRATING","OIL  FREES RUST","#1d4f9a","#f2c21b","#f2c21b","drop","NET WT 11 OZ"),cap:"blue",w8:2},{s:"box",w:.14,h:.09,d:.1,L:mt("WOOD SCREWS","#8 x 2-1/2 IN","#f2c21b","#111","#111","screw","1 LB"),w8:2,stack:1},{s:"box",w:.12,h:.1,d:.08,L:mt("FRAMING NAILS","16D  3-1/2 IN","#c4221c","#fff","#111","screw","5 LB"),w8:2,stack:1},{s:"tall",r:.025,h:.23,L:mt("SILICONE","SEALANT  CLEAR","#f2f1ec","#1d4f9a","#1d4f9a","drop","10.1 FL OZ"),cap:"white",w8:2},{s:"roll",r:.056,h:.048,cap:"tin",w8:2,stack:2,L:mt("DUCT TAPE","","#c9ccd0","#333","#c9ccd0")},{s:"box",w:.18,h:.2,d:.08,L:mt("EXTENSION CORD","25 FT  OUTDOOR","#e8701c","#fff","#1c1c1e","bolt","16/3 GAUGE"),w8:1},{s:"box",w:.075,h:.12,d:.07,L:mt("LED BULBS","60W EQUAL 4 PACK","#f2f1ec","#1d4f9a","#f2c21b","sun","SOFT WHITE"),w8:2,stack:1},{s:"bottle",r:.026,h:.15,L:mt("WOOD GLUE","INTERIOR","#f2c21b","#7a2a10","#7a2a10","drop","8 FL OZ"),cap:"orange",body:"white",w8:1},{s:"bag",w:.12,h:.24,d:.03,L:mt("WORK GLOVES","LEATHER PALM","#f2c21b","#111","#111","bolt","ONE PAIR  L"),gl:1,w8:2},{s:"bag",w:.1,h:.25,d:.02,L:mt("ZIP TIES","8 IN  BLACK","#cfdde4","#111","#c4221c","bolt","100 PACK"),gl:1,w8:1},{s:"jar",r:.07,h:.12,L:mt("SPACKLE","LIGHTWEIGHT","#f2f1ec","#1d4f9a","#c4221c","drop","1 QT"),cap:"white",body:"white",w8:1},{s:"box",w:.1,h:.16,d:.03,L:mt("AA BATTERIES","ALKALINE","#111","#f2c21b","#c98a2a","battery","8 PACK"),w8:2,stack:1},{s:"can",r:.035,h:.1,L:mt("PVC CEMENT","MEDIUM BODY","#4a4c50","#fff","#c4221c","drop","8 FL OZ"),cap:"red",w8:1,stack:1},{s:"box",w:.12,h:.2,d:.02,L:mt("SANDPAPER","ASSORTED GRIT","#e8701c","#fff","#1c1c1e","grain","12 SHEETS"),w8:1},{s:"box",w:.15,h:.15,d:.08,L:mt("NYLON ROPE","3/8 IN x 50 FT","#f2f1ec","#c4221c","#c4221c","bolt","WORKING LOAD 244 LB"),w8:2},{s:"roll",r:.05,h:.048,cap:"card",w8:1,stack:2,L:mt("MASKING","","#e8dcb0","#333","#e8dcb0")},{s:"jug",w:.1,h:.2,d:.06,L:mt("MOTOR OIL","5W-30 SYNTHETIC","#1c1c1e","#f2c21b","#f2c21b","drop","1 QUART"),cap:"black",body:"black",w8:2},{s:"box",w:.22,h:.16,d:.1,L:mt("UTILITY KNIFE","RETRACTABLE + 5 BLADES","#c4221c","#fff","#1c1c1e","bolt","CARDED"),w8:1}],outdoor:[{s:"tall",r:.056,h:.22,L:mt("PROPANE","CAMPING FUEL","#2f7a32","#fff","#1d4a20","flame","16.4 OZ"),cap:"brass",w8:3},{s:"can",r:.055,h:.1,L:mt("BUTANE","ISOBUTANE MIX","#1d4f9a","#fff","#e8701c","flame","8 OZ (227g)"),cap:"tin",w8:2,stack:1},{s:"box",w:.15,h:.26,d:.075,L:mt("CAMP FUEL","WHITE GAS","#c4221c","#fff","#f2c21b","flame","1 GALLON"),gl:1,w8:1},{s:"bag",w:.17,h:.24,d:.05,L:mt("BEEF STROGANOFF","FREEZE-DRIED MEAL","#2a3a2a","#f2c21b","#e8701c","noodle","2 SERVINGS"),gl:1,w8:2},{s:"bag",w:.17,h:.24,d:.05,L:mt("CHILI MAC","FREEZE-DRIED MEAL","#4a2412","#f2c21b","#c4221c","chili","2 SERVINGS"),gl:1,w8:2},{s:"box",w:.3,h:.22,d:.05,L:mt("TARP","ALL PURPOSE 8 x 10 FT","#1d4f9a","#fff","#f2c21b","drop","WATERPROOF"),w8:1},{s:"box",w:.16,h:.26,d:.16,L:mt("LED LANTERN","1000 LUMENS","#1c1c1e","#e8701c","#e8701c","sun","USES 3 D CELLS"),w8:1},{s:"box",w:.3,h:.12,d:.25,L:mt("CAMP STOVE","TWO BURNER","#2f7a32","#fff","#1c1c1e","flame","PROPANE"),w8:1,wide:1},{s:"tall",r:.03,h:.17,L:mt("BUG SPRAY","25% DEET","#2f7a32","#fff","#f2c21b","bug","6 OZ"),cap:"green",w8:2},{s:"bottle",r:.03,h:.16,L:mt("SUNSCREEN","SPF 50 SPORT","#f2c21b","#1d4f9a","#e8701c","sun","8 FL OZ"),cap:"blue",body:"yellow",w8:1},{s:"bag",w:.1,h:.14,d:.02,L:mt("HAND WARMERS","UP TO 10 HRS","#e0521c","#fff","#2a2a2c","flame","1 PAIR"),gl:1,w8:2,stack:1},{s:"bottle",r:.042,h:.21,L:mt("WATER BOTTLE","BPA FREE 32 OZ","#cfdde4","#1d4f9a","#1d4f9a","drop","WIDE MOUTH"),cap:"black",body:"clear",w8:1},{s:"can",r:.12,h:.36,L:mt("SLEEPING BAG","RATED 30 F","#2a5ab8","#fff","#1c1c1e","snow","STUFF SACK INCLUDED"),cap:"black",w8:1},{s:"box",w:.1,h:.13,d:.04,L:mt("FIRE STARTERS","WATERPROOF","#c4221c","#fff","#f2c21b","flame","12 PIECES"),w8:2,stack:1},{s:"box",w:.1,h:.2,d:.05,L:mt("WATER FILTER","SQUEEZE SYSTEM","#2a6fd6","#fff","#fff","drop","0.1 MICRON"),w8:1},{s:"bag",w:.1,h:.15,d:.02,L:mt("EMERGENCY BLANKET","MYLAR","#c9ccd0","#c4221c","#c4221c","sun","52 x 82 IN"),gl:1,w8:1,stack:1},{s:"box",w:.1,h:.18,d:.04,L:mt("HEADLAMP","300 LUMENS","#1c1c1e","#f2c21b","#f2c21b","sun","BATTERIES INCLUDED"),w8:1},{s:"box",w:.18,h:.08,d:.18,L:mt("MESS KIT","5 PIECE","#4a4c50","#fff","#e8701c","flame","ALUMINUM"),w8:1,stack:1},{s:"box",w:.11,h:.07,d:.035,L:mt("MATCHES","STRIKE ANYWHERE","#f2c21b","#c41e1e","#c41e1e","flame","250 CT"),w8:1,stack:2}],convenience:[{s:"can",r:.033,h:.122,L:{t:"COLA",s:"CLASSIC",n:"12 FL OZ",b:"#a8141a",f:"#fff",a:"#5a0a0a",p:"bubble"},cap:"tin",w8:2,stack:1,gl:1},{s:"can",r:.033,h:.122,L:{t:"LEMON LIME",s:"CAFFEINE FREE",n:"12 FL OZ",b:"#2f8a3a",f:"#f6ee4a",a:"#0f4a1a",p:"bubble"},cap:"tin",w8:2,stack:1,gl:1},{s:"can",r:.029,h:.16,L:mt("ENERGY","DRINK","#1c1c1e","#7fd62a","#7fd62a","bolt","16 FL OZ"),cap:"tin",w8:2,gl:1},{s:"bottle",r:.033,h:.21,L:mt("SPRING WATER","NATURAL","#e9f2f6","#1d5fa8","#3d8fd6","drop","16.9 FL OZ"),cap:"blue",body:"clear",w8:3},{s:"bottle",r:.036,h:.21,L:mt("SPORTS DRINK","GLACIER","#111","#fff","#2a7fd6","bolt","28 FL OZ"),cap:"blue",body:"blue",w8:2},{s:"bottle",r:.036,h:.245,L:mt("ORANGE SODA","","#e8701c","#fff","#1d4f9a","bubble","20 FL OZ"),cap:"orange",body:"orange",w8:1},{s:"bag",w:.2,h:.28,d:.07,L:mt("POTATO CHIPS","SEA SALT","#f2c21b","#c41e1e","#c41e1e","chip","8 OZ"),gl:1,w8:2},{s:"bag",w:.2,h:.28,d:.07,L:mt("TORTILLA CHIPS","NACHO","#c4221c","#fff","#f2c21b","chip","9.75 OZ"),gl:1,w8:2},{s:"box",w:.2,h:.06,d:.1,L:mt("CHOCOLATE BARS","MILK  36 CT","#4a2412","#f2c21b","#c4221c","bean","DISPLAY BOX"),w8:2,stack:2,wide:1},{s:"bag",w:.14,h:.2,d:.035,L:mt("BEEF JERKY","ORIGINAL","#2a2420","#f2c21b","#8a2a12","meat","3.25 OZ"),gl:1,w8:2},{s:"cup",r:.05,h:.1,L:mt("INSTANT NOODLES","SPICY BEEF","#f4f1ea","#c41e1e","#c41e1e","noodle","2.25 OZ"),cap:"white",w8:2,stack:1},{s:"jug",w:.1,h:.2,d:.06,L:mt("MOTOR OIL","10W-30","#1c1c1e","#f2c21b","#f2c21b","drop","1 QUART"),cap:"black",body:"black",w8:1},{s:"box",w:.1,h:.16,d:.03,L:mt("AA BATTERIES","ALKALINE","#111","#f2c21b","#c98a2a","battery","4 PACK"),w8:1,stack:1},{s:"box",w:.22,h:.1,d:.11,L:mt("TISSUES","2-PLY","#7fa8d6","#fff","#1d4f9a","bubble","160 SHEETS"),w8:1,wide:1,stack:1},{s:"box",w:.2,h:.08,d:.12,L:mt("SNACK CAKES","CREME FILLED","#f2f1ec","#c4221c","#e9a0b0","sun","8 CAKES"),w8:1,wide:1,stack:1},{s:"bag",w:.15,h:.22,d:.05,L:mt("TRAIL MIX","NUTS & RAISINS","#3a5a2a","#f2c21b","#e8701c","peanut","10 OZ"),gl:1,w8:1},{s:"can",r:.042,h:.09,L:mt("ROASTED PEANUTS","SALTED","#1d4f9a","#f2c21b","#f2c21b","peanut","16 OZ"),cap:"tin",w8:1,stack:1},{s:"box",w:.08,h:.05,d:.06,L:mt("GUM","SPEARMINT","#2f7a32","#fff","#fff","leaf","15 STICKS"),w8:1,stack:2},{s:"bottle",r:.03,h:.2,L:mt("ICED TEA","LEMON","#f2c21b","#7a2a10","#7a2a10","leaf","18.5 FL OZ"),cap:"yellow",body:"amber",w8:1}]},il=2048,sl=1024,li=256,hu=8,Su=31;function Ao(n){return[n%hu*li,Math.floor(n/hu)*li]}function t_(n){if(n.s==="box"||n.s==="bag"||n.s==="jug")return[256,Math.round(256*n.h/n.w)];let t=n.r,e=n.s==="bottle"?n.h*.55:n.s==="jar"?n.h*.85:n.s==="tall"?n.h*.78:n.h;return[512,Math.max(60,Math.round(512*e/(Ht*t)))]}function e_(n){return on(pu,"atlas|"+n,()=>{let t=mu(il,sl);if(!t)return null;let e=t.getContext("2d");e.fillStyle="#888",e.fillRect(0,0,il,sl);let i=Ps(Ro("atlas"+n));wo[n].forEach((a,l)=>{let[c,h]=Ao(l),[f,u]=t_(a);e.save(),e.beginPath(),e.rect(c,h,li,li),e.clip(),e.translate(c,h),e.scale(li/f,li/u),a.s==="roll"?Me(e,f,u,i,a.L.b,.08,400,2):a.s==="box"||a.s==="bag"||a.s==="jug"?_u(e,f,u,a.L,i):xu(e,f,u,a.L,i),e.restore(),e.fillStyle=a.L.b,e.fillRect(c,h+li*.3,12,li*.6)});let[s,r]=Ao(Su);jx.forEach((a,l)=>{let c=s+l%4*64,h=r+Math.floor(l/4)*64;e.fillStyle=a,e.fillRect(c,h,64,64);for(let f=0;f<120;f++)e.fillStyle=i()<.5?"rgba(0,0,0,0.06)":"rgba(255,255,255,0.08)",e.fillRect(c+i()*64,h+i()*64,2,2)});let o=new Pn(t);return o.colorSpace=We,o.anisotropy=4,o})}function K0(n,t,e,i){return[n/il,1-(t+i)/sl,(n+e)/il,1-t/sl]}function n_(n){let[t,e]=Ao(n);return K0(t+2,e+2,li-4,li-4)}function i_(n){let[t,e]=Ao(n);return K0(t+3,e+li*.35,6,li*.45)}function s_(n){let t=Qx[n]??0,[e,i]=Ao(Su);return K0(e+t%4*64+12,i+Math.floor(t/4)*64+12,40,40)}var fu=new WeakMap;function r_(n){let t=fu.get(n);if(t)return t;t=new Uint8Array(n.attributes.position.count);let e=n.index;for(let i of n.groups)for(let s=i.start;s<i.start+i.count;s++)t[e?e.getX(s):s]=i.materialIndex;return fu.set(n,t),t}var Ls=class{constructor(t){this.b=[];for(let e=0;e<t;e++)this.b.push({p:[],n:[],u:[],i:[]})}add(t,e,i,s){let r=t.attributes.position,o=t.attributes.normal,a=t.attributes.uv,l=t.index,c=r_(t),h=new me().getNormalMatrix(e),f=e.elements,u=h.elements,d=new Int32Array(r.count),m=new Uint8Array(r.count);for(let g=0;g<r.count;g++){let p=c[g],b=s[p]??s[0],_=this.b[b];m[g]=b,d[g]=_.p.length/3;let y=r.getX(g),L=r.getY(g),R=r.getZ(g);_.p.push(f[0]*y+f[4]*L+f[8]*R+f[12],f[1]*y+f[5]*L+f[9]*R+f[13],f[2]*y+f[6]*L+f[10]*R+f[14]);let C=o.getX(g),P=o.getY(g),E=o.getZ(g),S=u[0]*C+u[3]*P+u[6]*E,O=u[1]*C+u[4]*P+u[7]*E,V=u[2]*C+u[5]*P+u[8]*E,z=Math.hypot(S,O,V)||1;_.n.push(S/z,O/z,V/z);let X=i[p]??i[0];_.u.push(X[0]+a.getX(g)*(X[2]-X[0]),X[1]+a.getY(g)*(X[3]-X[1]))}let x=l?l.count:r.count;for(let g=0;g<x;g+=3){let p=l?l.getX(g):g,b=l?l.getX(g+1):g+1,_=l?l.getX(g+2):g+2;this.b[m[p]].i.push(d[p],d[b],d[_])}}meshes(t){let e=[];return this.b.forEach((i,s)=>{if(!i.i.length)return;let r=new Ue;r.setAttribute("position",new ue(i.p,3)),r.setAttribute("normal",new ue(i.n,3)),r.setAttribute("uv",new ue(i.u,2)),r.setIndex(i.p.length/3>65535?new gr(i.i,1):new mr(i.i,1)),r.computeBoundingSphere(),r.computeBoundingBox();let o=new Vt(r,t[s]);o.receiveShadow=!0,e.push(o)}),e}};function o_(n,t){return on(vn,`prod|${n}|${t}`,()=>{let e=wo[n][t],i=n_(t),s=i_(t),r=u=>s_(u),o=e.gl?1:0,a=new de,l=(u,d,m)=>new de().makeTranslation(u,d,m),c=[];switch(e.s){case"can":c.push({geo:Z(e.r,e.r,e.h,12),m:a,rects:[i,r(e.cap||"tin"),r(e.cap||"tin")],bk:[o,1,1]});break;case"tall":c.push({geo:Z(e.r,e.r,e.h*.78,10),m:a,rects:[i,r("tin"),r("tin")],bk:[o,1,1]}),c.push({geo:Z(e.r*.94,e.r*.94,e.h*.22,10),m:l(0,e.h*.78,0),rects:[r(e.cap||"white"),r(e.cap||"white"),r(e.cap||"white")],bk:[1,1,1]});break;case"box":c.push({geo:Q(e.w,e.h,e.d),m:a,rects:[s,s,s,s,i,i],bk:[o,o,o,o,o,o]});break;case"bag":c.push({geo:Io(e.w,e.h,e.d,.06,4,5),m:a,rects:[s,s,s,s,i,i],bk:[o,o,o,o,o,o]});break;case"bottle":{let u=r(e.body||"white");c.push({geo:Z(e.r,e.r,e.h*.55,10),m:l(0,e.h*.05,0),rects:[i,u,u],bk:[1,1,1]}),c.push({geo:Z(e.r,e.r*.95,e.h*.05,10,!0),m:a,rects:[u],bk:[1]}),c.push({geo:Z(e.r*.38,e.r,e.h*.25,10,!0),m:l(0,e.h*.6,0),rects:[u],bk:[1]});let d=r(e.cap||"white");c.push({geo:Z(e.r*.42,e.r*.42,e.h*.15,8),m:l(0,e.h*.85,0),rects:[d,d,d],bk:[1,1,1]});break}case"jar":{let u=r(e.body||"white"),d=r(e.cap||"white");c.push({geo:Z(e.r,e.r,e.h*.85,10),m:a,rects:[i,u,u],bk:[o,1,1]}),c.push({geo:Z(e.r*.9,e.r*.9,e.h*.15,10),m:l(0,e.h*.85,0),rects:[d,d,d],bk:[1,1,1]});break}case"jug":{let u=r(e.body||"white"),d=r(e.cap||"white");c.push({geo:Q(e.w,e.h*.8,e.d),m:a,rects:[u,u,u,u,i,i],bk:[1,1,1,1,0,0]}),c.push({geo:Z(e.w*.2,e.w*.42,e.h*.08,8,!0),m:l(-e.w*.15,e.h*.8,0),rects:[u],bk:[1]}),c.push({geo:Z(e.w*.2,e.w*.2,e.h*.12,8),m:l(-e.w*.15,e.h*.88,0),rects:[d,d,d],bk:[1,1,1]});break}case"cup":{let u=r(e.cap||"white");c.push({geo:Z(e.r,e.r*.76,e.h,12),m:a,rects:[i,u,u],bk:[0,1,0]});break}case"roll":{let u=r(e.cap||"tin");c.push({geo:Z(e.r,e.r,e.h,12),m:a,rects:[i,r("card"),r("card")],bk:[1,0,0]}),c.push({geo:Z(e.r*.68,e.r*.68,.002,10),m:l(0,e.h,0),rects:[u,r("dark"),r("dark")],bk:[0,0,0]});break}}let h=e.w??e.r*2,f=e.d??e.r*2;return{p:e,parts:c,w:h,h:e.h,d:f}})}function W0(n,t,e,i,s,r,o,a=0){let l=new de().makeRotationY(r);if(o){let f=a?new de().makeRotationX(o):new de().makeRotationZ(o);l.multiply(f)}let c=1/0,h=new N;for(let f of[-1,1])for(let u of[0,1])for(let d of[-1,1])h.set(f*t.w/2,u*t.h,d*t.d/2).applyMatrix4(l),c=Math.min(c,h.y);l.setPosition(e,i-c,s);for(let f of t.parts){let u=new de().multiplyMatrices(l,f.m);n.add(f.geo,u,f.rects,f.bk)}}function a_(n){let t=e_(n);return[ee("shelfMatte|"+n,{map:t,roughness:.72,metalness:0}),ee("shelfGloss|"+n,{map:t,roughness:.32,metalness:.2})]}function Eu(n="grocery",t=2,e=[.1,.5,.9,1.3],i=.7,s=0){wo[n]||(n="grocery");let r=Ps(Ro(n)^Math.imul((s|0)+7,2654435761));i=Cs.clamp(i,0,1);let o=wo[n],a=o.map((_,y)=>o_(n,y)),l=o.reduce((_,y)=>_+(y.w8||1),0),c=_=>{for(let L=0;L<12;L++){let R=r()*l,C=0;for(;R>(o[C].w8||1);)R-=o[C].w8||1,C++;if(a[C].h<=_)return C}let y=0;return a.forEach((L,R)=>{L.h<a[y].h&&(y=R)}),a[y].h<=_?y:-1},h=new Ls(2),f=.385,u=.02,d=[...e].sort((_,y)=>_-y),m=0;d.forEach((_,y)=>{let L=(y+1<d.length?d[y+1]-_:.42)-.035,R=-t/2+.015;for(;R<t/2-.05;){let C=c(L);if(C<0)break;let P=a[C],E=P.p,S=.25+r()*.45,O=Math.max(1,Math.round(S/(P.w+.004))),V=r()<(1-i)*.55,z=Math.max(1,Math.min(E.wide?2:3,Math.floor((f-u)/(P.d+.004))));for(let X=0;X<O&&R+P.w<t/2-.01;X++){let lt=R+P.w/2;if(R+=P.w+.004+(i<.6?r()*.01:0),V&&r()<.9)continue;let j=i*z*(.6+r()*.8),gt=Math.min(z,Math.max(0,Math.round(j-.2)));i>.92&&(gt=z);for(let J=0;J<gt;J++){let Ct=i>.85?0:(z-gt)*(P.d+.004)*(.3+r()*.7),It=f-P.d/2-(gt-1-J)*(P.d+.004)-Ct,Ot=1-i,ie=Math.PI/2+(r()-.5)*(.04+Ot*.5),ye=0,it=0;if(J===gt-1&&r()<Ot*.16?(ye=Math.PI/2*(r()<.5?1:-1),it=r()<.5?1:0,ie+=(r()-.5)*1.2):r()<Ot*.06&&(ie+=(r()-.5)*2.5),W0(h,P,Math.max(u+P.d/2,It),_,lt+(r()-.5)*Ot*.02,ie,ye,it),m++,E.stack&&!ye&&i>.45){let bt=Math.min(E.stack+1,Math.floor(L/(P.h+.002)));for(let kt=1;kt<bt&&!(r()>i*1.05);kt++)W0(h,P,Math.max(u+P.d/2,It)+(r()-.5)*.004,_+kt*(P.h+.001),lt+(r()-.5)*.006,ie+(r()-.5)*.08,0),m++}}}R+=r()<.15+(1-i)*.3?r()*.08:.002}});let x=Math.round((1-i)*t*(1+r()*1.2));for(let _=0;_<x;_++){let y=a[Math.floor(r()*a.length)];y.h>.32||(W0(h,y,.45+r()*.85,0,(r()-.5)*(t-.2),r()*Ht,r()<.75?Math.PI/2:0,r()<.5?1:0),m++)}let g=new Wt;g.name="shelfFill:"+n;let p=h.meshes(a_(n)),b=0;for(let _ of p)g.add(_),b+=_.geometry.index.count/3;return g.userData={kind:n,items:m,triangles:b,drawCalls:p.length},g}var O_=Object.keys(wo);function uu(n,t,e=1){return on(vn,"quads"+n,()=>{let i=[],s=[],r=new N,o=new N,a=new N,l=new N;for(let h of t){r.fromArray(h[0]),o.fromArray(h[1]),a.fromArray(h[2]),l.fromArray(h[3]);let f=r.distanceTo(o)*e,u=r.distanceTo(l)*e;i.push(...h[0],...h[1],...h[2],...h[0],...h[2],...h[3]),s.push(0,0,f,0,f,u,0,0,f,u,0,u)}let c=new Ue;return c.setAttribute("position",new ue(i,3)),c.setAttribute("uv",new ue(s,2)),c.computeVertexNormals(),c})}function l_(){return Tt("wiregrid",64,64,(n,t,e)=>{n.clearRect(0,0,t,e),n.fillStyle="#d4d8dc",n.fillRect(0,0,t,7),n.fillRect(0,32,t,7),n.fillRect(0,0,7,e),n.fillRect(32,0,7,e),n.fillStyle="rgba(255,255,255,0.6)",n.fillRect(0,2,t,2),n.fillRect(0,34,t,2),n.fillRect(2,0,2,e),n.fillRect(34,0,2,e)},{repeat:[1,1]})}function c_(){return ee("wiremat",{map:l_(),color:14672870,roughness:.35,metalness:.45,alphaTest:.5,side:Ce,transparent:!1})}function cn(n,t,e,i,s,r=!1,o=24){return v(n,Ln(t,e,i,o,6,r),s)}function el(n,t=.04){let e=[],i=n.length,s=n.map(r=>new N(...r));for(let r=0;r<i;r++){let o=s[(r+i-1)%i],a=s[r],l=s[(r+1)%i],c=o.clone().sub(a).normalize().multiplyScalar(t).add(a),h=l.clone().sub(a).normalize().multiplyScalar(t).add(a),f=c.clone().add(h).multiplyScalar(.5).lerp(a,.45);e.push(c.toArray(),f.toArray(),h.toArray())}return e}function nl(n,t,e,i=.05){v(n,Z(i,i,.03,10),rt.rubber,t+.015,i,e,0,0,Math.PI/2),v(n,Z(i*.5,i*.5,.032,8),rt.greyPl,t+.016,i,e,0,0,Math.PI/2),v(n,Q(.012,i*1.4,.045),rt.steel,t+.018,i*.9,e),v(n,Q(.012,i*1.4,.045),rt.steel,t-.018,i*.9,e),v(n,Q(.05,.012,.05),rt.steel,t,i*2.2,e)}function h_(n,t,e,i,s,r,o,a=0){v(n,Ne(s-r,r,5,24),rt.rubber,t,e,i,0,Math.PI/2,0),v(n,Ne(s-r*2.2,r*.4,3,24),o,t,e,i,0,Math.PI/2,0),v(n,Z(.025,.025,.05,10),o,t-.025,e,i,0,0,Math.PI/2);for(let l=0;l<a;l++)v(n,Z(.0025,.0025,(s-r*2.2)*2,4),o,t,e,i,l*Math.PI/a,0,0,1,1,1)}function f_(n,t,e,i){return Y(Tt(n,t,e,i),.5)}function X0(n,t,e,i,s,r){let o=se(s,["FRAGILE","CANNED GOODS","PAPER TOWELS","BOTTLED WATER","SUPPLIES","HANDLE WITH CARE","PRODUCE","DRY GOODS"]),a=Y(Z0(o,Math.floor(s()*4)),.9),l=Y(us(),.9),c=r?nt(2760728,.95):Y(Tt("cartontop",256,256,(h,f,u,d)=>{Me(h,f,u,d,"#a9824f",.1,2500,2),h.fillStyle="rgba(40,25,10,0.5)",h.fillRect(0,u/2-1,f,2),h.fillStyle="rgba(200,170,110,0.8)",h.fillRect(0,u*.42,f,u*.16),h.fillStyle="rgba(255,255,255,0.18)",h.fillRect(0,u*.44,f,3),fe(h,f,u,d,1)}),.85);v(n,Q(t,e,i),[a,a,c,l,a,a])}var rl={shopping_cart(n,t){let e=c_(),i=nt(13225425,.3,.5),s=[[-.27,1,.45],[.27,1,.45],[.25,.98,-.45],[-.25,.98,-.45]],r=[[-.23,.55,.38],[.23,.55,.38],[.19,.6,-.36],[-.19,.6,-.36]],o=[[r[0],r[3],s[3],s[0]],[r[2],r[1],s[1],s[2]],[r[3],r[2],s[2],s[3]],[r[1],r[0],s[0],s[1]],[r[0],r[1],r[2],r[3]],[[-.22,.16,.38],[.22,.16,.38],[.2,.16,-.36],[-.2,.16,-.36]]];v(n,uu("cart",o,30),e),cn(n,"cartrim2",el(s,.04),.008,i,!0,60),cn(n,"cartbot2",el(r,.03),.006,i,!0,60);for(let l of[-1,1])cn(n,"cartbase"+l,[[l*.2,.13,-.4],[l*.22,.13,.1],[l*.24,.14,.42],[l*.25,.5,.45],[l*.27,.98,.47]],.012,i,!1,20),cn(n,"cartstrut"+l,[[l*.19,.6,-.36],[l*.2,.14,-.36]],.009,i,!1,2);let a=nt(12853788,.45);v(n,Z(.016,.016,.58,12),a,-.29,1.03,.5,0,0,-Math.PI/2);for(let l of[-1,1])v(n,Z(.008,.008,.06,6),i,l*.27,1,.485,.7,0,0);v(n,Q(.3,.06,.004),f_("cartplate",256,64,(l,c,h)=>{l.fillStyle="#c4221c",l.fillRect(0,0,c,h),Jt(l,"PLEASE RETURN CART",c/2,h/2,22,{color:"#fff",maxW:c*.9})}),0,.88,-.455);for(let[l,c]of[[-.2,-.38],[.2,-.38],[-.22,.4],[.22,.4]])nl(n,l,c,.055);t()<.4&&(n.rotation.y=t()*Ht)},basket(n,t){let e=se(t,["#c4221c","#1d4f9a","#2f7a32"]),i=Tt("basketholes"+e,64,64,(a,l,c)=>{a.fillStyle=e,a.fillRect(0,0,l,c),a.clearRect(8,10,20,12),a.clearRect(36,10,20,12),a.clearRect(8,40,20,12),a.clearRect(36,40,20,12)},{repeat:[1,1]}),s=ee("basket"+e,{map:i,roughness:.5,alphaTest:.5,side:Ce}),r=[[-.22,.22,.16],[.22,.22,.16],[.22,.22,-.16],[-.22,.22,-.16]],o=[[-.19,0,.13],[.19,0,.13],[.19,0,-.13],[-.19,0,-.13]];v(n,uu("basket",[[o[0],o[1],r[1],r[0]],[o[1],o[2],r[2],r[1]],[o[2],o[3],r[3],r[2]],[o[3],o[0],r[0],r[3]]],12),s),v(n,Q(.38,.01,.26),nt(new Zt(e).getHex(),.5)),cn(n,"basketrim2",el(r,.03),.01,nt(new Zt(e).getHex(),.45),!0,24);for(let a of[-1,1])cn(n,"baskethandle"+a,[[-.2,.22,a*.16],[-.12,.36,a*.06],[.12,.36,a*.06],[.2,.22,a*.16]],.009,rt.blackPl,!1,16)},cardboard_box(n,t){let e=.3+t()*.3,i=.22+t()*.25,s=.25+t()*.2,r=t()<.5;if(X0(n,e,i,s,t,r),r){let o=Y(us(1),.9),a=(l,c,h,f,u,d,m,x)=>{let g=new Wt;v(g,Q(h,.004,f),o,u,0,d),g.position.set(l,i,c),g.rotation.set(m,0,x),n.add(g)};a(0,s/2,e,s/2,0,s/4,(t()-.25)*1.5,0),a(0,-s/2,e,s/2,0,-s/4,-(t()-.25)*1.5,0),a(e/2,0,e/2,s,e/4,0,0,-(t()-.25)*1.5),a(-e/2,0,e/2,s,-e/4,0,0,(t()-.25)*1.5)}},box_stack(n,t){let e=1+Math.floor(t()*2);for(let i=0;i<e;i++){let s=0,r=2+Math.floor(t()*3),o=.4+t()*.15,a=.32+t()*.1;for(let l=0;l<r;l++){let c=.25+t()*.15,h=new Wt;X0(h,o*(.9+t()*.1),c,a*(.9+t()*.1),t,!1),h.position.set(i*.6+(t()-.5)*.06,s,(t()-.5)*.06),h.rotation.y=(t()-.5)*.25,n.add(h),s+=c}}if(t()<.5){let i=new Wt;X0(i,.4,.3,.3,t,!1),i.position.set(-.55,.2,.3),i.rotation.set(Math.PI/2,t()*2,0),n.add(i)}},pallet(n){let t=Y(Nr("#b48a5a","#7a5a35","pallet"),.9);for(let e=0;e<7;e++)v(n,Q(1.2,.02,.1),t,0,.12,-.45+e*.15);for(let e of[-.45,0,.45])v(n,Q(1.2,.1,.1),t,0,.02,e,0,0,0);for(let e=0;e<3;e++)v(n,Q(.1,.02,1),t,-.55+e*.55,0,0)},trash_bag(n,t){let e=Math.floor(t()*4),i=on(vn,"trashbag"+e,()=>{let o=new Zi(.28,14,10),a=o.attributes.position,l=Ps(77+e),c=Array.from({length:6},()=>[new N(l()-.5,l()-.5,l()-.5).normalize(),.03+l()*.05]),h=new N;for(let f=0;f<a.count;f++){h.set(a.getX(f),a.getY(f),a.getZ(f));let u=h.clone().normalize(),d=0;for(let[m,x]of c)d+=Math.max(0,u.dot(m)-.6)*x*3;d+=(l()-.5)*.015,h.addScaledVector(u,d),h.y*=.8,h.y<-.15&&(h.y=-.15+(h.y+.15)*.15),a.setXYZ(f,h.x*(1+e*.05),h.y+.18,h.z)}return o.computeVertexNormals(),o}),s=se(t,[1118740,1118740,2046495,6974056]),r=nt(s,.3,.1);v(n,i,r),v(n,Z(.02,.06,.08,8),r,0,.38+e*0,0),v(n,pn(.03,8,6),r,0,.47,0),v(n,Z(.005,.04,.1,6),r,.04,.47,0,0,0,-1.1,1,1,.3),v(n,Z(.005,.04,.1,6),r,-.04,.47,0,0,0,1.1,1,1,.3)},trash_pile(n,t){let e=2+Math.floor(t()*3);for(let a=0;a<e;a++){let l=new Wt;rl.trash_bag(l,Ps(Math.floor(t()*1e9)));let c=t()*Ht,h=a===0?0:.35+t()*.2;l.position.set(Math.cos(c)*h,0,Math.sin(c)*h),l.rotation.set((t()-.5)*.4,t()*Ht,(t()-.5)*.4),l.scale.setScalar(.8+t()*.4),n.add(l)}let i=Y(_i(se(t,Ur),512,200),.5),s=Y(_i({t:"COLA",s:"CLASSIC",n:"12 FL OZ",b:"#a8141a",f:"#fff",a:"#5a0a0a",p:"bubble"},512,150),.35,.3),r=Y(ai({t:"CHIPS",b:"#f2c21b",f:"#c41e1e",a:"#c41e1e",p:"chip"},128,160),.35,.3);for(let a=0;a<7;a++){let l=t()*Ht,c=.4+t()*.6,h=a%3;h===2?v(n,Io(.12,.16,.02,.06,4,5),r,Math.cos(l)*c,.01,Math.sin(l)*c,-Math.PI/2,0,t()*3):v(n,Z(h?.033:.038,h?.033:.038,h?.122:.11,10),[h?s:i,rt.tin,rt.tin],Math.cos(l)*c,h?.033:.038,Math.sin(l)*c,Math.PI/2,0,t()*Ht,1,t()<.5?.6:1,1)}v(n,Q(.5,.008,.4),[Y(us(),.9),Y(us(),.9),Y(Z0("PAPER TOWELS",1),.9),Y(us(),.9),Y(us(),.9),Y(us(),.9)],-.6,.004,.4,0,t()*2,.05);let o=Ji("paper_scatter",Math.floor(t()*1e3));o.scale.setScalar(.6),n.add(o)},register(n){let t=nt(2763566,.45),e=Y(Tt("posscreen",256,192,(s,r,o,a)=>{s.fillStyle="#0c0f12",s.fillRect(0,0,r,o),s.fillStyle="rgba(120,140,160,0.12)";for(let l=0;l<6;l++)s.fillRect(12,14+l*26,r*.55,16);for(let l=0;l<8;l++)s.fillRect(r*.66+l%2*40,14+Math.floor(l/2)*40,34,32);s.fillStyle="rgba(255,255,255,0.05)",s.beginPath(),s.moveTo(0,0),s.lineTo(r*.5,0),s.lineTo(0,o*.7),s.fill(),fe(s,r,o,a,1.5)}),.15,.1);v(n,Q(.44,.1,.42),[t,t,t,t,Y(Tt("drawer",256,64,(s,r,o)=>{s.fillStyle="#2a2b2e",s.fillRect(0,0,r,o),s.fillStyle="#111",s.fillRect(8,6,r-16,2),s.fillRect(r/2-20,o/2,40,6),s.fillStyle="#888",s.beginPath(),s.arc(r-30,o/2,6,0,Ht),s.fill()}),.5),t],0,0,0),v(n,Z(.025,.04,.2,10),t,0,.1,-.05);let i=new Wt;v(i,Kt(.38,.28,.05,.012),[t,t,t,t,e,t]),i.position.set(0,.28,-.05),i.rotation.x=-.25,n.add(i),v(n,Kt(.3,.03,.12,.008),Y(Tt("keys",256,96,(s,r,o)=>{s.fillStyle="#333",s.fillRect(0,0,r,o);for(let a=0;a<4;a++)for(let l=0;l<12;l++)s.fillStyle=l>8&&a<3?"#5a5a5a":"#cfcfcf",s.fillRect(6+l*20.5,6+a*22,17,18)}),.5),0,.1,.13,.15,0,0),v(n,Kt(.09,.05,.14,.01),t,.3,0,.1,.4,-.3,0),v(n,Q(.07,.001,.06),ee("readerscreen",{color:1316892,roughness:.1}),.3,.052,.095,.4,-.3,0),v(n,Kt(.15,.13,.18,.02),nt(14474456,.5),-.3,0,-.02),v(n,Q(.08,.001,.12),rt.paper,-.3,.135,.11,-.5,0,0)},price_strip(n,t){let e=Tt("pricestrip",1024,48,(i,s,r,o)=>{i.fillStyle="#e8e6e0",i.fillRect(0,0,s,r);let a=6;for(;a<s-60;){let l=70+Math.floor(o()*40),c=o()<.2;i.fillStyle=c?"#f2c21b":"#ffffff",i.fillRect(a,4,l,r-8),Jt(i,`$${(o()*9+.5).toFixed(2)}`,a+l*.68,r*.45,18,{color:c?"#c41e1e":"#111",maxW:l*.6}),$e(i,a+4,8,l*.35,3,6,o,"#444"),i.fillStyle="#000";for(let h=0;h<14;h++)o()<.6&&i.fillRect(a+4+h*2,r-14,1,7);a+=l+10+Math.floor(o()*60)}fe(i,s,r,o,.6)});v(n,Q(.012,.04,1),[Y(e,.5),nt(13619151,.6),nt(13619151,.6),nt(13619151,.6),nt(13619151,.6),nt(13619151,.6)]),t()<.6&&v(n,Q(.002,.035,.07),rt.paper,.012,-.02,(t()-.5)*.8,0,0,.6)},chair(n,t){let e=Y(Nr(se(t,["#b98c5a","#7a5032","#d0b08a"]),"#5a3a20","chair"),.6);v(n,Kt(.44,.04,.42,.01),e,0,.43,0);for(let[i,s]of[[-.19,-.18],[.19,-.18],[-.19,.18],[.19,.18]])v(n,Z(.018,.015,.43,8),e,i,0,s);for(let i of[-.19,.19])v(n,Z(.018,.018,.48,8),e,i,.45,-.19,-.08,0,0);v(n,Kt(.44,.08,.025,.01),e,0,.87,-.23,-.08,0,0);for(let i=0;i<3;i++)v(n,Z(.01,.01,.38,6),e,-.1+i*.1,.47,-.205,-.08,0,0);for(let i of[-.18,.18])v(n,Z(.01,.01,.38,6),e,.19,.15,i,0,0,Math.PI/2);t()<.3&&(n.rotation.z=Math.PI/2,n.position.y=.22)},office_chair(n,t){let e=Y(xi(se(t,["#2a2a2c","#22304a","#3a2a2a"]),"office"),.95),i=rt.blackPl;for(let s=0;s<5;s++){let r=s*Ht/5,o=v(n,Q(.3,.03,.045),i,Math.cos(r)*.15,.06,Math.sin(r)*.15,0,-r,0);o.rotation.z=0,v(n,pn(.028,6,4),i,Math.cos(r)*.3,.028,Math.sin(r)*.3)}v(n,Z(.03,.03,.32,10),rt.chrome,0,.08,0),v(n,Z(.05,.05,.08,10),i,0,.06,0),v(n,Kt(.5,.08,.48,.035),e,0,.42,0),v(n,Q(.05,.3,.03),i,0,.45,-.25,-.1,0,0),v(n,Kt(.46,.55,.07,.035),e,0,.56,-.29,-.12,0,0);for(let s of[-1,1])v(n,Q(.03,.18,.03),i,s*.24,.45,0,0,0,0),v(n,Kt(.06,.03,.24,.01),i,s*.24,.63,0);n.rotation.y=t()*Ht},ceiling_tile(n,t){let e=Y(Tt("ceiltile",256,256,(a,l,c,h)=>{Me(a,l,c,h,"#e6e3da",.06,2500,2),a.fillStyle="rgba(90,85,75,0.35)";for(let u=0;u<900;u++)a.beginPath(),a.ellipse(h()*l,h()*c,1+h()*2.5,.6+h(),h()*3,0,Ht),a.fill();let f=a.createRadialGradient(l*.6,c*.4,10,l*.6,c*.4,120);f.addColorStop(0,"rgba(140,100,40,0.35)"),f.addColorStop(.7,"rgba(140,100,40,0.15)"),f.addColorStop(1,"rgba(140,100,40,0)"),a.fillStyle=f,a.fillRect(0,0,l,c)}),.95),i=nt(14210248,.95),s=nt(12103840,.95),r=[[.6,.6],[.35,.28],[.22,.18],[.12,.1]],o=0;for(let[a,l]of r.slice(0,2+Math.floor(t()*3))){let c=v(n,Q(a*(.8+t()*.2),.016,l*(.8+t()*.2)),[i,i,e,s,i,i],(t()-.5)*.7*(o?1:0),.008+(o===1?.03:0),(t()-.5)*.7*(o?1:0),o===1?.15:(t()-.5)*.05,t()*Ht,0);o===1&&(c.position.y=.04),o++}for(let a=0;a<8;a++)v(n,Q(.02+t()*.03,.012,.02+t()*.03),i,(t()-.5)*.9,.006,(t()-.5)*.9,0,t()*3,0)},paper_scatter(n,t){let e=Tt("papers",1024,512,(o,a,l,c)=>{for(let f=0;f<8;f++){let u=f%4*256,d=Math.floor(f/4)*256;o.save(),o.translate(u,d);let m=f%8;if(o.fillStyle=m===2?"#f2e6a0":m===5?"#e9e4d6":"#f4f2ec",o.fillRect(0,0,256,256),m===0)Jt(o,"NOTICE TO RESIDENTS",128,30,22,{color:"#111",maxW:220}),$e(o,20,60,216,14,12,c,"#333");else if(m===1)o.fillStyle="#c41e1e",o.fillRect(0,0,256,50),Jt(o,"BOIL WATER",128,26,30,{color:"#fff",maxW:230}),Jt(o,"UNTIL FURTHER NOTICE",128,74,18,{color:"#111",maxW:230}),$e(o,20,100,216,10,13,c,"#333");else if(m===2)Jt(o,"SHELTER",128,50,40,{color:"#1d4f9a",maxW:230}),Jt(o,"MEMORIAL COLISEUM",128,92,18,{color:"#111",maxW:230}),Jt(o,"FOOD  WATER  MEDICAL",128,124,16,{color:"#111",maxW:230}),$e(o,30,150,196,6,13,c,"#333");else if(m===3)o.fillStyle="#ddd",o.fillRect(0,0,256,256),o.fillStyle="#fbfbf8",o.fillRect(70,0,116,256),$e(o,78,14,100,18,12,c,"#555"),Jt(o,"TOTAL  $48.17",128,236,13,{color:"#111"});else if(m===4){Jt(o,"THE DAILY",128,26,30,{color:"#111",font:'Georgia, "DejaVu Serif", serif',maxW:230}),o.fillStyle="#111",o.fillRect(10,46,236,2),Jt(o,"OUTBREAK SPREADS",128,70,24,{color:"#111",maxW:236,font:Ki});for(let x=0;x<3;x++)$e(o,12+x*80,92,70,14,11,c,"#444")}else if(m===5)Jt(o,"LOST DOG",128,40,40,{color:"#111",maxW:230}),ol(o,"paw",128,120,45,c),Jt(o,'ANSWERS TO "BISCUIT"',128,190,16,{color:"#111",maxW:230}),$e(o,40,210,176,2,12,c,"#333");else if(m===6){o.strokeStyle="rgba(80,120,200,0.5)";for(let x=30;x<256;x+=16)o.beginPath(),o.moveTo(0,x),o.lineTo(256,x),o.stroke();o.strokeStyle="rgba(200,60,60,0.5)",o.beginPath(),o.moveTo(30,0),o.lineTo(30,256),o.stroke(),Jt(o,"went to the river camp",40,42,15,{color:"#223",align:"left",italic:!0,weight:"normal"}),Jt(o,"water + food there?",40,58,15,{color:"#223",align:"left",italic:!0,weight:"normal"}),Jt(o,"- M.",40,74,15,{color:"#223",align:"left",italic:!0,weight:"normal"})}else o.fillStyle="#e8e2d2",o.fillRect(0,0,256,256),$e(o,20,20,90,3,12,c,"#444"),$e(o,90,110,120,3,12,c,"#222"),o.fillStyle="#c41e1e",o.fillRect(200,14,40,40),Jt(o,"PAST DUE",128,200,22,{color:"#c41e1e"});fe(o,256,256,c,1.4),o.restore()}}),i=new Ls(1),s=on(vn,"paperplane",()=>{let o=new Ge(.216,.28,3,1).rotateX(-Math.PI/2),a=o.attributes.position;for(let l=0;l<a.count;l++){let c=a.getX(l);a.setY(l,Math.pow(Math.abs(c)/.108,2)*.012)}return o.computeVertexNormals(),o}),r=10+Math.floor(t()*10);for(let o=0;o<r;o++){let a=Math.floor(t()*8),l=[a%4/4,1-(Math.floor(a/4)+1)/2,(a%4+1)/4,1-Math.floor(a/4)/2],c=t()*Ht,h=Math.sqrt(t())*1,f=new de().compose(new N(Math.cos(c)*h,.002+o*8e-4,Math.sin(c)*h),new Cn().setFromEuler(new In((t()-.5)*.06,t()*Ht,(t()-.5)*.06)),new N(a===3?.5:1,1,1));i.add(s,f,[l],[0])}for(let o of i.meshes([ee("papermat",{map:e,roughness:.9,side:Ce,...Y0})]))n.add(o)},glass_shards(n,t){let e=[],i=60+Math.floor(t()*40);for(let o=0;o<i;o++){let a=t()*Ht,l=Math.pow(t(),.7)*.8,c=Math.cos(a)*l,h=Math.sin(a)*l,f=.015+t()*.06*(1-l*.6),u=.002+t()*.004,d=[],m=t()<.5?3:4;for(let x=0;x<m;x++){let g=x/m*Ht+t()*.8;d.push([c+Math.cos(g)*f*(.4+t()),u+(t()<.15?t()*.015:0),h+Math.sin(g)*f*(.4+t())])}e.push(...d[0],...d[2],...d[1]),m===4&&e.push(...d[0],...d[3],...d[2])}let s=new Ue;s.setAttribute("position",new ue(e,3)),s.computeVertexNormals();let r=new Vt(s,ee("shardglass",{color:15268090,roughness:.04,metalness:.5,transparent:!0,opacity:.75,side:Ce,depthWrite:!1,emissive:1712676,...Y0}));n.add(r)},traffic_cone(n){let t=Y(Tt("cone",64,256,(e,i,s,r)=>{e.fillStyle="#f0641c",e.fillRect(0,0,i,s),e.fillStyle="#f2f2f2",e.fillRect(0,s*.22,i,s*.13),e.fillRect(0,s*.48,i,s*.09),fe(e,i,s,r,1.5)}),.55);v(n,Z(.025,.13,.66,16,!0),t,0,.03,0),v(n,oi(.025,10),nt(15754268,.6),0,.69,0),v(n,Kt(.36,.03,.36,.02),nt(13651994,.8))},mop_bucket(n,t){let e=nt(15909403,.5);v(n,Kt(.46,.32,.34,.05),e,0,.06,0),v(n,Q(.38,.002,.26),ee("dirtywater",{color:4867638,roughness:.1,metalness:.2}),0,.33,0),v(n,Kt(.18,.2,.28,.02),nt(4869200,.5),.12,.34,0),v(n,Z(.012,.012,.5,8),nt(4869200,.5),.2,.5,-.1,.6,0,0);for(let[s,r]of[[-.19,-.13],[.19,-.13],[-.19,.13],[.19,.13]])v(n,pn(.035,8,6),rt.blackPl,s,.035,r);v(n,Z(.012,.012,1.35,8),nt(2781142,.4),.06,.25,.04,0,0,-.18);let i=Y(Tt("mopstrands",64,64,(s,r,o,a)=>{s.fillStyle="#b8b0a0",s.fillRect(0,0,r,o);for(let l=0;l<r;l+=3)s.fillStyle=`rgba(0,0,0,${.1+a()*.25})`,s.fillRect(l,0,1,o)}),.95);v(n,Z(.08,.11,.22,10),i,.03,.22,.04)},wet_floor_sign(n){let t=Tt("wetfloor",256,512,(s,r,o,a)=>{s.fillStyle="#f2c21b",s.fillRect(0,0,r,o),s.fillStyle="#111",s.fillRect(0,o*.08,r,o*.12),Jt(s,"CAUTION",r/2,o*.14,46,{color:"#f2c21b",maxW:r*.9}),s.fillStyle="#111",s.beginPath(),s.moveTo(r/2,o*.27),s.lineTo(r*.88,o*.62),s.lineTo(r*.12,o*.62),s.closePath(),s.fill(),s.fillStyle="#f2c21b",s.beginPath(),s.moveTo(r/2,o*.31),s.lineTo(r*.8,o*.6),s.lineTo(r*.2,o*.6),s.closePath(),s.fill(),s.strokeStyle="#111",s.lineWidth=7,s.lineCap="round",s.beginPath(),s.arc(r*.56,o*.4,9,0,Ht),s.fillStyle="#111",s.fill(),s.beginPath(),s.moveTo(r*.54,o*.43),s.lineTo(r*.46,o*.52),s.moveTo(r*.46,o*.52),s.lineTo(r*.38,o*.56),s.moveTo(r*.46,o*.52),s.lineTo(r*.58,o*.57),s.moveTo(r*.52,o*.46),s.lineTo(r*.62,o*.47),s.moveTo(r*.5,o*.47),s.lineTo(r*.42,o*.44),s.stroke(),Jt(s,"WET FLOOR",r/2,o*.72,40,{color:"#111",maxW:r*.9}),Jt(s,"PISO MOJADO",r/2,o*.8,26,{color:"#111",maxW:r*.9}),fe(s,r,o,a,1.2)}),e=Y(t,.45),i=nt(15909403,.45);for(let s of[-1,1]){let r=new Wt;v(r,Q(.3,.6,.012),[i,i,i,i,s<0?e:i,s>0?e:i],0,-.6,0),r.position.set(0,.62,0),r.rotation.x=s*.2,n.add(r)}v(n,Ne(.05,.012,5,12,Math.PI),i,0,.62,0)},fire_extinguisher(n){let t=nt(12850716,.35,.1);v(n,Xe("extbody",[[0,0],[.07,0],[.076,.012],[.076,.38],[.065,.43],[.03,.455],[.02,.46]],18),t),v(n,Q(.09,.14,.002),Y(ai({t:"FIRE",t2:"EXTINGUISHER",s:"ABC DRY CHEMICAL",n:"INSPECT MONTHLY",b:"#f4f1ea",f:"#c4161c",a:"#c4161c",p:"flame"},192,300),.5),0,.16,.074),v(n,Z(.02,.022,.04,10),rt.brass,0,.455,0),v(n,Q(.12,.012,.03),rt.chrome,.03,.5,0,0,0,.1),v(n,Q(.1,.012,.028),rt.chrome,.02,.475,0,0,0,.05),v(n,Z(.017,.017,.01,12),rt.chrome,-.04,.47,.012,Math.PI/2),v(n,oi(.014,12),Y(Tt("gauge",64,64,(e,i,s)=>{e.fillStyle="#fff",e.beginPath(),e.arc(32,32,30,0,Ht),e.fill(),e.fillStyle="#2f9a3a",e.beginPath(),e.moveTo(32,32),e.arc(32,32,26,-2.2,-.9),e.fill(),e.strokeStyle="#111",e.lineWidth=3,e.beginPath(),e.moveTo(32,32),e.lineTo(46,16),e.stroke()}),.3),-.04,.47,.018,Math.PI/2),cn(n,"exthose",[[.04,.46,0],[.09,.44,.02],[.1,.3,.05],[.085,.18,.06],[.07,.12,.07]],.009,rt.rubber,!1,20),v(n,Z(.008,.014,.05,8),rt.blackPl,.07,.07,.07),v(n,Ne(.012,.002,4,10),nt(15909403,.4),0,.49,.02,0,Math.PI/2,0)},iv_stand(n,t){for(let e=0;e<5;e++){let i=e*Ht/5;v(n,Q(.28,.025,.03),rt.chrome,Math.cos(i)*.14,.05,Math.sin(i)*.14,0,-i,0),v(n,pn(.022,8,6),rt.blackPl,Math.cos(i)*.27,.022,Math.sin(i)*.27)}v(n,Z(.012,.012,1.85,8),rt.chrome,0,.05,0);for(let e=0;e<4;e++)v(n,Ne(.04,.004,4,10,Math.PI),rt.chrome,Math.cos(e*Math.PI/2)*.04,1.86,Math.sin(e*Math.PI/2)*.04,0,-e*Math.PI/2,Math.PI);if(t()<.75){let e=new Wt;al.saline(e,t),e.rotation.x=Math.PI/2,e.position.set(.08,1.85,-.02),n.add(e),cn(n,"ivline",[[.08,1.58,0],[.1,1.2,.02],[.14,.8,.05],[.12,.5,.1],[.05,.35,.12]],.002,ee("ivtube",{color:15660278,roughness:.2,transparent:!0,opacity:.6}),!1,24)}},wheelchair(n){let t=rt.chrome,e=Y(xi("#1d1e22","wc"),.9);for(let i of[-1,1])h_(n,i*.3,.3,-.05,.3,.018,t,12),v(n,Ne(.27,.005,3,20),rt.chrome,i*.33,.3,-.05,0,Math.PI/2,0),nl(n,i*.22,.32,.06),cn(n,"wcside",[[0,.16,.3],[0,.5,.3],[0,.5,-.12],[0,.95,-.2],[0,.95,-.28]],.011,t,!1,20).position.x=i*.22,v(n,Z(.016,.016,.1,8),rt.rubber,i*.22,.95,-.3,Math.PI/2,0,0),cn(n,"wcfoot",[[0,.5,.25],[0,.18,.42],[0,.12,.44]],.01,t,!1,10).position.x=i*.2,v(n,Q(.12,.01,.12),rt.blackPl,i*.13,.12,.46),v(n,Kt(.05,.03,.28,.01),rt.blackPl,i*.23,.68,.06),cn(n,"wcarm",[[0,.5,.18],[0,.66,.18]],.01,t,!1,2).position.x=i*.23;v(n,Q(.42,.012,.42),e,0,.495,.08),v(n,Q(.42,.4,.012),e,0,.55,-.15,-.15,0,0),v(n,Z(.01,.01,.44,8),t,-.22,.25,.08,0,0,-Math.PI/2)},gurney(n,t){let e=rt.chrome;cn(n,"gurneyframe2",el([[-.32,.6,-.95],[.32,.6,-.95],[.32,.6,.95],[-.32,.6,.95]],.06),.016,e,!0,60);for(let[s,r]of[[-.25,-.75],[.25,-.75],[-.25,.75],[.25,.75]])v(n,Z(.02,.02,.52,8),e,s,.1,r),nl(n,s,r,.055);v(n,Q(.56,.03,1.6),e,0,.12,0);let i=Y(Tt("sheet",128,256,(s,r,o,a)=>{Me(s,r,o,a,"#e8ecee",.06,1500,2),s.strokeStyle="rgba(0,0,0,0.08)";for(let l=0;l<12;l++)s.beginPath(),s.moveTo(a()*r,0),s.bezierCurveTo(a()*r,o*.3,a()*r,o*.6,a()*r,o),s.stroke();fe(s,r,o,a,1)}),.95);v(n,Kt(.62,.1,1.86,.04),i,0,.63,0),v(n,Kt(.42,.08,.26,.04),nt(16054006,.95),0,.72,-.75,.1,0,0),v(n,Kt(.64,.05,.5,.025),Y(xi("#3a6a9a","blanket"),.95),0,.72,.62,0,.08,.02);for(let s of[-1,1])cn(n,"gurneyrail"+s,[[s*.33,.62,-.5],[s*.34,.84,-.45],[s*.34,.84,.45],[s*.33,.62,.5]],.01,e,!1,20);cn(n,"gurneyhandle",[[-.25,.62,.95],[-.25,.9,1],[.25,.9,1],[.25,.62,.95]],.013,e,!1,20),t()<.5&&(n.rotation.y=(t()-.5)*.8)},medical_cart(n,t){let e=se(t,["#c4221c","#2a6fd6","#d8d8d4"]),i=nt(new Zt(e).getHex(),.4,.1),s=Y(Tt("cartdrawers"+e,256,320,(o,a,l,c)=>{o.fillStyle=e,o.fillRect(0,0,a,l);let h=[.15,.15,.2,.25,.25],f=0;for(let u of h){let d=u*l;o.fillStyle="rgba(0,0,0,0.35)",o.fillRect(0,f,a,3),o.fillStyle="rgba(255,255,255,0.15)",o.fillRect(0,f+3,a,2),o.fillStyle="#ddd",o.fillRect(a*.35,f+d*.35,a*.3,8),o.fillStyle="#f4f1ea",o.fillRect(a*.08,f+d*.3,44,18),$e(o,a*.09,f+d*.3+5,40,1,8,c,"#333"),f+=d}fe(o,a,l,c,1)}),.4,.1);v(n,Kt(.7,.85,.5,.02),[i,i,i,i,s,i],0,.1,0),v(n,Q(.76,.03,.56),nt(4869200,.5),0,.95,0);for(let o of[-1,1])v(n,Q(.76,.05,.01),nt(4869200,.5),0,.98,o*.275);for(let[o,a]of[[-.28,-.18],[.28,-.18],[-.28,.18],[.28,.18]])nl(n,o,a,.045);cn(n,"mcarthandle",[[.37,.8,-.18],[.42,.82,-.15],[.42,.82,.15],[.37,.8,.18]],.012,rt.chrome,!1,12);let r=new Wt;Jn(r,.24,.12,.13,{t:"EXAM GLOVES",s:"NITRILE  POWDER FREE",n:"100 GLOVES  SIZE L",b:"#2a6fd6",f:"#fff",a:"#fff",tf:"#2a6fd6",p:"cross"},{tw:256,th:128}),r.position.set(-.15,.98,0),r.rotation.y=.2,n.add(r),v(n,Q(.18,.22,.12),nt(12852766,.45),.2,.98,-.05),v(n,Q(.14,.03,.1),nt(15921644,.5),.2,1.2,-.05)},locker_row(n,t){let e=se(t,["#4a5a6a","#6a7a5a","#8a8a86","#3a4a7a"]),i=Y(Tt("lockerdoor"+e,128,512,(f,u,d,m)=>{Me(f,u,d,m,e,.05,1500,2),f.fillStyle="rgba(0,0,0,0.5)";for(let x of[.08,.82])for(let g=0;g<6;g++)f.fillRect(u*.25,d*x+g*10,u*.5,4);f.fillStyle="rgba(255,255,255,0.12)",f.fillRect(4,4,u-8,2),f.fillStyle="#d8d8d4",f.fillRect(u*.35,d*.3,u*.3,20),fe(f,u,d,m,1.5)}),.45,.35),s=Y($0(e,"locker"),.5,.3),r=nt(1974564,.8),o=4,a=.3,l=1.8,c=.45;v(n,Q(o*a+.02,l,c),[s,s,s,s,r,s],0,.08,0),v(n,Q(o*a+.02,.08,c-.04),nt(1973790,.8),0,0,-.02);let h=Math.floor(t()*(o+2));for(let f=0;f<o;f++){let u=new Wt;v(u,Q(a-.012,l-.03,.015),[s,s,s,s,i,s],(a-.012)/2,0,0),v(u,Q(.02,.1,.02),rt.chrome,a*.82,l*.48,.015);let d=Tt("lockernum"+(101+f),64,32,(m,x,g)=>{m.fillStyle="#d8d8d4",m.fillRect(0,0,x,g),Jt(m,String(101+f),x/2,g/2,20,{color:"#111"})});v(u,Q(.05,.025,.002),[rt.paper,rt.paper,rt.paper,rt.paper,Y(d,.5),rt.paper],a*.48,l*.86,.009),u.position.set(-o*a/2+f*a+.006,.095,c/2),f===h&&(u.rotation.y=-(.7+t()*.9)),n.add(u)}for(let f=1;f<o;f++)v(n,Q(.012,l,c-.02),s,-o*a/2+f*a,.08,0);for(let f=0;f<o;f++)v(n,Q(a-.02,.012,c-.04),s,-o*a/2+f*a+a/2,1.55,0);h<o&&v(n,Kt(.2,.3,.12,.03),Y(xi("#2f3f2a","lk"),.85),-o*a/2+h*a+a/2,.1,0)},helmet_rack(n,t){let e=nt(5922402,.5,.4),i=1.8,s=1.9;for(let a of[-i/2,-i/6,i/6,i/2])v(n,Q(.04,s,.04),e,a,0,-.25);v(n,Q(i+.04,.03,.45),e,0,1.6,-.05),v(n,Q(i+.04,.03,.45),e,0,.35,-.05);let r=Y(Tt("turnout",128,256,(a,l,c,h)=>{Me(a,l,c,h,"#a8946a",.1,2e3,2);for(let f of[.55,.9])a.fillStyle="#d8e040",a.fillRect(0,c*f,l,c*.06),a.fillStyle="#d8d8d8",a.fillRect(0,c*f+c*.018,l,c*.024);fe(a,l,c,h,2)}),.9),o=[15909403,1908256,12853788,15921644];for(let a=0;a<3;a++){let l=-i/3+a*i/3;if(v(n,Kt(.5,.85,.2,.08),r,l,.6,-.12),v(n,Z(.07,.075,.75,8),r,l-.29,.68,-.12,0,0,.08),v(n,Z(.07,.075,.75,8),r,l+.29,.68,-.12,0,0,-.08),v(n,Ne(.1,.03,4,10),r,l,1.42,-.12,Math.PI/2,0,0,1,.8,1),t()<.85){let h=nt(se(t,o),.35),f=new Wt;v(f,Xe("helmdome",[[0,.2],[.07,.19],[.12,.15],[.14,.08],[.15,0]],14),h,0,0,0),v(f,Z(.19,.2,.012,16),h,0,-.005,.03,0,0,0,1,1,1.25),v(f,Q(.1,.06,.012),nt(12950085,.4,.5),0,.1,.15,-.5,0,0),f.position.set(l+(t()-.5)*.1,1.625,-.05),f.rotation.y=(t()-.5)*.6,n.add(f)}let c=nt(1908256,.6);for(let h of[-1,1])v(n,Q(.11,.06,.28),c,l+h*.07,0,.07),v(n,Z(.06,.065,.3,8),c,l+h*.07,.04,0),v(n,Ne(.07,.035,4,8),r,l+h*.07,.36,0,Math.PI/2),v(n,Z(.066,.066,.03,8,!0),nt(14213184,.5),l+h*.07,.25,0);v(n,Q(.1,.06,.002),Y(Tt("nametag"+a,128,64,(h,f,u)=>{h.fillStyle="#1d1e20",h.fillRect(0,0,f,u),Jt(h,["ENGINE 1","TRUCK 3","RESCUE 7"][a],f/2,u/2,22,{color:"#f2c21b",maxW:f*.9})}),.5),l,1.52,.18)}},hose_reel(n){let t=nt(12853788,.45,.15),e=Y(Tt("hose",128,32,(s,r,o)=>{s.fillStyle="#b8201e",s.fillRect(0,0,r,o),s.fillStyle="rgba(0,0,0,0.25)";for(let a=0;a<r;a+=4)s.fillRect(a,0,1,o)},{repeat:[6,1]}),.7);for(let s of[-1,1])v(n,Z(.38,.38,.02,20),t,s*.25-.01,.55,0,0,0,Math.PI/2),cn(n,"reelleg"+s,[[0,0,-.35],[0,.55,0],[0,0,.35]],.02,t,!1,4).position.x=s*.29;v(n,Z(.04,.04,.6,10),rt.steel,-.3,.55,0,0,0,-Math.PI/2);let i=Y(Tt("hosecoil",256,64,(s,r,o)=>{s.fillStyle="#9a1a18",s.fillRect(0,0,r,o);for(let a=0;a<r;a+=8){let l=s.createLinearGradient(a,0,a+8,0);l.addColorStop(0,"#5a0e0c"),l.addColorStop(.5,"#c8282a"),l.addColorStop(1,"#5a0e0c"),s.fillStyle=l,s.fillRect(a,0,8,o)}},{repeat:[1,6]}),.7);v(n,Z(.31,.31,.47,20),[i,nt(5901836,.8),nt(5901836,.8)],-.235,.55,0,0,0,-Math.PI/2);for(let s=0;s<7;s++)v(n,Ne(.31,.019,4,18),e,-.21+s*.07,.55,0,0,Math.PI/2,0);cn(n,"hosetail",[[0,.2,.3],[.05,.05,.45],[.2,.025,.7],[.4,.025,.8]],.022,e,!1,20),v(n,Z(.025,.04,.16,10),rt.brass,.42,.04,.82,0,0,Math.PI/2+.3),cn(n,"reelcrank",[[.29,.55,0],[.36,.55,0],[.36,.4,0],[.42,.4,0]],.012,rt.steel,!1,6)},kitchen_counter_items(n,t){let e=Y(Lr("#c9ccd0","kettle"),.25,.55);v(n,Xe("kettle",[[0,0],[.09,0],[.1,.03],[.095,.12],[.06,.17],[.025,.18],[0,.185]],18),e,-.4,0,0),v(n,pn(.015,8,6),rt.blackPl,-.4,.19,0),cn(n,"kettlespout",[[-.32,.05,0],[-.27,.12,0],[-.25,.16,0]],.012,e,!1,8),v(n,Ne(.06,.012,5,12,Math.PI),rt.blackPl,-.4,.17,0,0,0,0);let i=ee("plate",{color:15921644,roughness:.3,side:Ce});for(let r=0;r<5;r++)v(n,Xe("plate",[[0,0],[.07,0],[.09,.012],[.12,.018]],18),i,-.1,r*.014,.05);for(let r=0;r<2;r++){let o=ee("mug"+Math.floor(t()*4),{color:[1920922,12853788,15921644,3111474][r%4],roughness:.35,side:Ce});v(n,Xe("mug",[[0,0],[.04,0],[.042,.095],[.037,.095],[.035,.008],[0,.008]],14),o,.08+r*.1,0,-.08),v(n,Ne(.025,.007,4,10,Math.PI*1.2),o,.08+r*.1+.045,.05,-.08,0,0,-Math.PI*.6)}let s=new Wt;Jn(s,.19,.29,.07,{t:"CORN FLAKES",s:"TOASTED",n:"NET WT 18 OZ",b:"#f2f1ec",f:"#1d4f9a",a:"#e8701c",p:"grain",top:"FAMILY SIZE",tf:"#fff"}),s.position.set(.35,0,.05),s.rotation.y=-.3,n.add(s),v(n,Kt(.36,.018,.24,.008),Y(Nr("#c9a26c","#8a6a3a","board"),.7),-.05,0,.2),v(n,Xe("bowl",[[0,0],[.04,0],[.07,.03],[.08,.06],[.075,.06],[.065,.032],[.035,.008],[0,.008]],16),ee("bowl",{color:14207144,roughness:.4,side:Ce}),.2,0,.22)},bookshelf(n,t){let e=Y(Nr("#7a5032","#4a2a18","shelf"),.7),i=.9,s=1.8,r=.3,o=5;v(n,Q(.02,s,r),e,-i/2+.01,0,0),v(n,Q(.02,s,r),e,i/2-.01,0,0),v(n,Q(i,.01,r),nt(3810328,.8),0,0,-r/2+.005,Math.PI/2,0,0);for(let u=0;u<=o;u++)v(n,Q(i-.04,.02,r),e,0,.05+u*(s-.07)/o,0);let a=Tt("spines",1024,256,(u,d,m,x)=>{for(let g=0;g<32;g++){let p=g*32,b=se(x,["#7a1d1a","#22304a","#2f4a2a","#c9a24a","#e8e2d2","#1d1e20","#5a2a5a","#2a6a7a","#c4521c","#4a3a2a"]);q0(u,0,0,x,0),u.fillStyle=b,u.fillRect(p,0,32,m),u.fillStyle="rgba(255,255,255,0.12)",u.fillRect(p+2,0,2,m),u.fillStyle="rgba(0,0,0,0.2)",u.fillRect(p+28,0,4,m),u.fillStyle=x()<.5?"#e8d8a0":"#f4f1ea",u.fillRect(p+6,m*.1,20,3),u.fillRect(p+6,m*.85,20,3);for(let _=0;_<6;_++)u.fillRect(p+12,m*.25+_*14,8,9)}fe(u,d,m,x,1)}),l="#efe6cf",c=new Ls(1),h=Q(1,1,1);for(let u=0;u<o;u++){let d=.06+u*(s-.07)/o,m=-i/2+.03,x=(s-.07)/o-.03;for(;m<i/2-.06;){if(t()<.12){m+=.05+t()*.15;continue}let g=.02+t()*.035,p=Math.min(x,.17+t()*.12),b=.15+t()*.08,_=Math.floor(t()*32),y=[_/32,0,(_+1)/32,1],L=t()<.08?.25:0,R=new de().compose(new N(m+g/2+L*p*.5,d,-r/2+b/2+.01),new Cn().setFromEuler(new In(0,0,-L)),new N(g,p,b));c.add(h,R,[y,y,[.999,.999,1,1],y,y,y],[0]),m+=g+.002+L*p}}c.meshes([ee("bookmat",{map:a,roughness:.75})]).forEach(u=>n.add(u))},tv(n,t){let e=nt(1118740,.4),i=Y(Tt("tvscreen"+(t()<.3?"c":""),256,144,(s,r,o,a)=>{let l=s.createLinearGradient(0,0,r,o);l.addColorStop(0,"#1a1d22"),l.addColorStop(.5,"#0a0c0e"),l.addColorStop(1,"#14171a"),s.fillStyle=l,s.fillRect(0,0,r,o),fe(s,r,o,a,1.5)}),.12,.2);v(n,Q(1.23,.71,.04),[e,e,e,e,i,e],0,.1,0),v(n,Q(.06,.1,.03),e,0,0,-.01),v(n,Kt(.4,.015,.2,.006),e,0,0,0)},lamp(n,t){let e=nt(se(t,[14207144,2771562,9058858]),.3);v(n,Xe("lampbase",[[0,0],[.08,0],[.085,.02],[.1,.12],[.09,.2],[.03,.26],[.015,.28],[0,.28]],16),e),v(n,Z(.006,.006,.18,6),rt.brass,0,.28,0);let i=ee("lampshade",{map:Tt("shadefab",128,64,(s,r,o,a)=>{Me(s,r,o,a,"#e8dcc0",.08,800,1),fe(s,r,o,a,1)}),roughness:.95,side:Ce});v(n,Z(.1,.17,.2,18,!0),i,0,.37,0),v(n,pn(.03,8,6),ee("bulb",{color:16052448,roughness:.2}),0,.45,0)},rug(n,t){let e=se(t,[["#7a1d1a","#22304a","#c9a24a"],["#2a3a5a","#c8b48a","#7a2a1a"],["#4a5a3a","#e8dcc0","#7a4a2a"]]),i=Tt("rug"+e.join(),512,360,(r,o,a,l)=>{r.fillStyle=e[0],r.fillRect(0,0,o,a);for(let c=0;c<3;c++)r.strokeStyle=c%2?e[2]:e[1],r.lineWidth=10,r.strokeRect(24+c*16,18+c*16,o-48-c*32,a-36-c*32);r.fillStyle=e[1],r.beginPath(),r.moveTo(o/2,a*.22),r.lineTo(o*.72,a/2),r.lineTo(o/2,a*.78),r.lineTo(o*.28,a/2),r.closePath(),r.fill(),r.fillStyle=e[2],r.beginPath(),r.moveTo(o/2,a*.32),r.lineTo(o*.62,a/2),r.lineTo(o/2,a*.68),r.lineTo(o*.38,a/2),r.closePath(),r.fill();for(let c=0;c<40;c++)r.fillStyle=l()<.5?e[1]:e[2],r.fillRect(90+l()*(o-180),80+l()*(a-160),6,6);r.fillStyle="#e8dcc0";for(let c=0;c<o;c+=4)r.fillRect(c,0,2,10),r.fillRect(c,a-10,2,10);q0(r,o,a,l,.15),fe(r,o,a,l,2)}),s=on(vn,"rug",()=>{let r=new Ge(2,1.4,8,6).rotateX(-Math.PI/2),o=r.attributes.position;for(let a=0;a<o.count;a++){let l=o.getX(a),c=o.getZ(a),h=Math.hypot(l-1,c-.7);o.setY(a,.004+Math.max(0,.45-h)*.18)}return r.computeVertexNormals(),r});v(n,s,ee("rugmat"+e.join(),{map:i,roughness:1,side:Ce,...Y0}))},potted_plant_dead(n,t){let e=Y(Tt("terracotta",128,64,(o,a,l,c)=>{Me(o,a,l,c,"#b5653a",.12,1500,2),o.fillStyle="rgba(255,255,255,0.15)";for(let h=0;h<6;h++)o.fillRect(0,l*.8+c()*l*.2,a,2);fe(o,a,l,c,1)}),.85);v(n,Xe("pot",[[0,0],[.11,0],[.15,.24],[.17,.25],[.17,.3],[.155,.3],[.15,.26]],16),e),v(n,oi(.15,16),Y(Tt("soil",64,64,(o,a,l,c)=>Me(o,a,l,c,"#3a2a1e",.3,800,2)),1),0,.27,0);let i=nt(5917234,.9),s=ee("deadleaf",{color:8018482,roughness:.95,side:Ce}),r=on(vn,"leafdisc",()=>new co(.035,5).scale(1,.45,1));for(let o=0;o<6;o++){let a=t()*Ht,l=.1+t()*.3,c=.3+t()*.35,h=[[0,.27,0],[Math.cos(a)*l*.2,.27+c*.5,Math.sin(a)*l*.2],[Math.cos(a)*l*.6,.27+c*.85,Math.sin(a)*l*.6],[Math.cos(a)*l*(.9+t()*.4),.27+c*(.7+t()*.2),Math.sin(a)*l]];v(n,new po(new Er(h.map(f=>new N(...f))),6,.005,4),i);for(let f=0;f<3;f++){let u=.4+f*.2;v(n,r,s,h[2][0]*u,.27+c*u*.9,h[2][2]*u,t()*3,t()*3,t()*3)}}for(let o=0;o<6;o++)v(n,r,s,(t()-.5)*.7,.004,(t()-.5)*.7,-Math.PI/2,0,t()*3)},kids_toy(n,t){let e=se(t,["#8a5a32","#c8a070","#6a4a3a"]),i=Y(Tt("bearfur"+e,128,128,(o,a,l,c)=>{Me(o,a,l,c,e,.25,5e3,2),fe(o,a,l,c,1.5)}),1),s=Y(Tt("bearlight"+e,64,64,(o,a,l,c)=>Me(o,a,l,c,jn(e,.4),.2,800,2)),1),r=nt(1118481,.3);v(n,pn(.09,10,8),i,0,.1,0,0,0,0,1,1.15,.9),v(n,pn(.055,10,8),s,0,.09,.045,0,0,0,1,1.2,.6),v(n,pn(.075,10,8),i,0,.255,.01),v(n,pn(.03,8,6),s,0,.24,.07,0,0,0,1.1,.8,.9),v(n,pn(.011,6,4),r,0,.25,.097);for(let o of[-1,1])v(n,pn(.009,6,4),r,o*.027,.275,.068),v(n,pn(.03,8,6),i,o*.055,.315,0,0,0,0,1,1,.5),v(n,pn(.018,8,6),s,o*.055,.315,.012,0,0,0,1,1,.4),v(n,pn(.03,8,6),i,o*.1,.13,.03,.6,0,o*.5,1,1.9,1),v(n,pn(.035,8,6),i,o*.055,.035,.08,Math.PI/2,0,0,1,1.8,1),v(n,oi(.026,10),s,o*.055,.035,.143,Math.PI/2,0,0);t()<.6&&v(n,Ne(.04,.01,4,12),nt(12853788,.6),0,.19,.02,Math.PI/2+.2,0,0,1,1,.5),n.rotation.y=(t()-.5)*.6,t()<.3&&(n.rotation.x=-1.2)}},D_=Object.keys(rl),u_=new Set(["rug","paper_scatter","glass_shards"]),Y0={polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2};function Ji(n,t=0){let e=new Wt,i=Ps(Ro(String(n))^Math.imul((t|0)+3,2246822519)),s=rl[n];if(s)s(e,i);else{let r=new Wt;rl.cardboard_box(r,i),e.add(r)}return vu(e,n,u_.has(n))}function Tu(n,t,e){let i=`boxw${n.toFixed(3)},${t.toFixed(3)},${e.toFixed(3)}`;return on(vn,i,()=>{let s=new we(n,t,e),r=s.attributes.uv,o=[[e,t],[e,t],[n,e],[n,e],[n,t],[n,t]];for(let a=0;a<6;a++)for(let l=0;l<4;l++){let c=a*4+l;r.setXY(c,r.getX(c)*o[a][0],r.getY(c)*o[a][1])}return s.translate(0,t/2,0),s})}function ri(n,t,e){return Tt("fx|"+n,t,t,e,{repeat:[1,1]})}function kn(n,t,e,i,s=1){fe(n,t,e,i,s);for(let r=0;r<1500*s;r++)n.fillStyle=`rgba(200,190,170,${.04+i()*.06})`,n.fillRect(i()*t,i()*e,1.5,1.5)}var be={wood(n="#6a4528"){return ee("fxwood"+n,{map:ri("wood"+n,512,(t,e,i,s)=>{t.fillStyle=n,t.fillRect(0,0,e,i);for(let r=0;r<140;r++){t.strokeStyle=`rgba(${s()<.5?"30,18,8":"255,230,200"},${.04+s()*.1})`,t.lineWidth=1+s()*3;let o=s()*i;t.beginPath(),t.moveTo(0,o);for(let a=0;a<=e;a+=32)t.lineTo(a,o+Math.sin(a*.01+r)*6);t.stroke()}kn(t,e,i,s,1)}),roughness:.62})},fabric(n){return ee("fxfab"+n,{map:ri("fab"+n,256,(t,e,i,s)=>{t.fillStyle=n,t.fillRect(0,0,e,i);for(let r=0;r<i;r+=2)t.fillStyle=`rgba(0,0,0,${.05+s()*.06})`,t.fillRect(0,r,e,1);for(let r=0;r<e;r+=2)t.fillStyle=`rgba(255,255,255,${.03+s()*.04})`,t.fillRect(r,0,1,i);for(let r=0;r<5;r++){let o=s()*e,a=s()*i,l=20+s()*50,c=t.createRadialGradient(o,a,0,o,a,l);c.addColorStop(0,"rgba(60,45,30,0.18)"),c.addColorStop(1,"rgba(60,45,30,0)"),t.fillStyle=c,t.fillRect(o-l,a-l,l*2,l*2)}kn(t,e,i,s,.8)}),roughness:.95})},sheet(){return ee("fxsheet",{map:ri("sheet",256,(n,t,e,i)=>{Me(n,t,e,i,"#e4e2da",.05,1500,2),n.strokeStyle="rgba(0,0,0,0.07)";for(let s=0;s<25;s++)n.lineWidth=1+i()*2,n.beginPath(),n.moveTo(i()*t,i()*e),n.bezierCurveTo(i()*t,i()*e,i()*t,i()*e,i()*t,i()*e),n.stroke();kn(n,t,e,i,.8)}),roughness:.95,side:Ce})},enamel(n="w",t="#e9e8e2"){return ee("fxenamel"+n,{map:ri("enamel"+n,256,(e,i,s,r)=>{e.fillStyle=t,e.fillRect(0,0,i,s);for(let o=0;o<18;o++){let a=r()*i,l=e.createLinearGradient(0,0,0,s);l.addColorStop(0,"rgba(120,100,60,0)"),l.addColorStop(1,`rgba(120,100,60,${.05+r()*.08})`),e.fillStyle=l,e.fillRect(a,r()*s*.5,2+r()*4,s)}kn(e,i,s,r,1)}),roughness:.3})},painted(n){return ee("fxpaint"+n,{map:ri("paint"+n,256,(t,e,i,s)=>{Me(t,e,i,s,n,.04,1500,2);for(let r=0;r<25;r++)t.fillStyle="rgba(60,50,40,0.25)",t.beginPath(),t.ellipse(s()*e,s()*i,1+s()*4,1+s()*2,s()*3,0,Ht),t.fill();kn(t,e,i,s,1)}),roughness:.55,metalness:.05})},metal(n="#9ea3a8",t=""){return ee("fxmetal"+n+t,{map:ri("metal"+n,128,(e,i,s,r)=>{e.fillStyle=n,e.fillRect(0,0,i,s);for(let o=0;o<200;o++)e.fillStyle=r()<.5?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.08)",e.fillRect(0,r()*s,i,1);kn(e,i,s,r,.6)}),roughness:.38,metalness:.5})},dark(n="k",t="#1b1c1e",e=.6){return ee("fxdark"+n,{map:ri("dark"+n,128,(i,s,r,o)=>{Me(i,s,r,o,t,.04,600,2),kn(i,s,r,o,1.2)}),roughness:e})},laminate(n="#b8b4aa"){return ee("fxlam"+n,{map:ri("lam"+n,256,(t,e,i,s)=>{Me(t,e,i,s,n,.06,3e3,1.5),kn(t,e,i,s,1.2)}),roughness:.5})},counterTop(n="#cfc8b8"){return ee("fxtop"+n,{map:ri("top"+n,256,(t,e,i,s)=>{Me(t,e,i,s,n,.1,5e3,2);for(let r=0;r<300;r++)t.fillStyle=s()<.5?"rgba(60,50,40,0.35)":"rgba(255,255,255,0.3)",t.fillRect(s()*e,s()*i,2,2);kn(t,e,i,s,1.5)}),roughness:.4})},card(){return ee("fxcard",{map:ri("card",256,(n,t,e,i)=>{Me(n,t,e,i,"#a9824f",.1,2500,2),n.fillStyle="rgba(200,170,110,0.7)",n.fillRect(0,e*.45,t,e*.1),kn(n,t,e,i,1)}),roughness:.9})},glass(){return ee("fxglass",{map:ri("glass",256,(n,t,e,i)=>{n.fillStyle="#c8d4d8",n.fillRect(0,0,t,e);for(let s=0;s<40;s++){let r=i()*t,o=i()*e,a=10+i()*60,l=n.createRadialGradient(r,o,0,r,o,a);l.addColorStop(0,"rgba(255,255,255,0.6)"),l.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=l,n.fillRect(r-a,o-a,a*2,a*2)}for(let s=0;s<30;s++)n.fillStyle="rgba(90,80,60,0.4)",n.fillRect(i()*t,i()*e*.6+e*.4,1+i()*2,10+i()*50)}),roughness:.1,metalness:.1,transparent:!0,opacity:.32,depthWrite:!1})}};function yt(n,t,e,i,s,r,o,a,l=!0){let c=Math.max(.001,i-e),h=Math.max(.001,r-s),f=Math.max(.001,a-o);return v(n,l?Tu(c,h,f):Q(c,h,f),t,(e+i)/2,s,(o+a)/2)}function Fn(n,t,e,i,s,r,o,a,l){let c=i-e,h=r-s,f=a-o;return v(n,Kt(+c.toFixed(3),+h.toFixed(3),+f.toFixed(3),l),t,(e+i)/2,s,(o+a)/2)}var d_={sofa(n,t,e,i,s){let r=be.fabric(se(s,["#5a5f4a","#6a4a3a","#3e4a5a","#7a7468","#4a3a42"])),o=be.wood("#3a2616"),a=Math.min(.08,i*.1),l=Math.min(.46,i*.55),c=Math.min(.2,t*.1),h=Math.min(.22,e*.25),f=Math.min(i,l+.2);for(let m of[-t/2+.06,t/2-.06])for(let x of[-e/2+.06,e/2-.06])v(n,Z(.025,.02,a,8),o,m,0,x);Fn(n,r,-t/2,t/2,a,l-.12,-e/2,e/2,.03),Fn(n,r,-t/2,t/2,a,i,-e/2,-e/2+h,.05);for(let m of[-1,1])Fn(n,r,m<0?-t/2:t/2-c,m<0?-t/2+c:t/2,a,f,-e/2,e/2,.06);let u=t-2*c>1.5?3:t-2*c>.9?2:1,d=(t-2*c)/u;for(let m=0;m<u;m++){let x=-t/2+c+m*d+.006,g=x+d-.012,p=s()*.025;Fn(n,r,x,g,l-.13,l-p,-e/2+h+.005,e/2-.005,.05);let b=Fn(n,r,x+.01,g-.01,l-.02,Math.min(i-.02,l+(i-l)*.85),-e/2+h,-e/2+h+.16,.06);b.rotation.x=-.08-s()*.08}if(s()<.8){let m=new Wt;v(m,Kt(.4,.38,.12,.05),du(s),0,0,0),m.position.set(-t/2+c+.25,l-.02,-e/2+h+.15),m.rotation.set(-.5,.3,.35),n.add(m)}},table(n,t,e,i,s){let r=be.wood(se(s,["#6a4528","#8a6440","#4a3020"])),o=be.wood("#7a5434"),a=.035;yt(n,o,-t/2,t/2,i-a,i,-e/2,e/2);let l=t/2-.08,c=e/2-.08;for(let u of[-l,l])for(let d of[-c,c])yt(n,r,u-.03,u+.03,0,i-a,d-.03,d+.03);if(yt(n,r,-l,l,i-a-.08,i-a,-c-.01,-c+.01),yt(n,r,-l,l,i-a-.08,i-a,c-.01,c+.01),yt(n,r,-l-.01,-l+.01,i-a-.08,i-a,-c,c),yt(n,r,l-.01,l+.01,i-a-.08,i-a,-c,c),e<.55||i<.55)return;let h=Math.max(1,Math.floor((t-.2)/.6)),f=Math.min(.45,i-.22);for(let u of[-1,1])for(let d=0;d<h;d++){if(s()<.15)continue;let m=-t/2+(d+.5)*(t/h)+(s()-.5)*.08,x=u*(e/2-.22),g=u*(e/2-.025),p=new Wt,b=Math.min(.42,t/h-.06);yt(p,r,-b/2,b/2,f-.035,f,-.2,.2);for(let _ of[-b/2+.03,b/2-.03])for(let y of[-.17,.17])yt(p,r,_-.017,_+.017,0,f-.035,y-.017,y+.017);for(let _ of[-b/2+.03,b/2-.03])yt(p,r,_-.017,_+.017,f,i-a-.012,.2-.03,.2-.005);yt(p,r,-b/2+.02,b/2-.02,i-a-.1,i-a-.02,.2-.03,.2-.008),yt(p,r,-b/2+.02,b/2-.02,f+.12,f+.16,.2-.028,.2-.01),p.position.set(m,0,(x+g-u*.2+u*.2)/2+u*0),p.position.z=g-u*.2*1,p.position.z=u>0?e/2-.205:-(e/2-.205),u<0&&(p.rotation.y=Math.PI),p.rotation.y+=(s()-.5)*.08,n.add(p)}},bed(n,t,e,i,s){let r=be.wood(se(s,["#5a3a22","#7a5a3a","#3a2a1e"])),o=be.sheet(),a=du(s,!0),l=Math.min(.6,i*.62),c=.06;yt(n,r,-t/2,-t/2+c,0,i,-e/2,e/2);let h=Math.min(i,l+.06);yt(n,r,t/2-.05,t/2,0,h,-e/2,e/2);for(let R of[-e/2,e/2-.04])yt(n,r,-t/2+c,t/2-.05,.14,.32,R,R+.04);Fn(n,o,-t/2+c+.01,t/2-.06,.32,l,-e/2+.03,e/2-.03,.05);let f=e>1.2?2:1;for(let R=0;R<f;R++){let C=f===1?0:(R-.5)*e*.48;Fn(n,o,-t/2+c+.04,-t/2+c+.4,l-.02,l+.12,C-Math.min(.32,e*.4),C+Math.min(.32,e*.4),.06).rotation.set(0,(s()-.5)*.2,(s()-.5)*.15)}let u=-t/2+c+.45+s()*.2,d=t/2-.07,m=e/2-.02,x=Math.min(.22,l-.12),g=18,p=14,b=new Ge(1,1,g,p),_=b.attributes.position,y=b.attributes.uv,L=s()*10;for(let R=0;R<_.count;R++){let C=_.getX(R)+.5,P=_.getY(R)+.5,E=u+(d-u)*C,S=(P-.5)*2*(m+x),O=Math.sin(E*9+L+S*3)*.018+Math.sin(E*23+S*11+L)*.006,V,z;Math.abs(S)<=m?(z=S,V=l+.025+O*(1-Math.abs(S)/m*.5)+(C<.12?(.12-C)*.5:0)):(z=Math.sign(S)*(m+.01),V=l+.02-(Math.abs(S)-m)+O*.4),_.setXYZ(R,E,V,z),y.setXY(R,C*(d-u),P*(m+x)*2)}b.computeVertexNormals(),v(n,b,a),v(n,Z(.03,.03,2*m,8),a,u+.02,l+.03,-m,Math.PI/2,0,0)},dresser(n,t,e,i,s){let r=be.wood(se(s,["#6a4528","#5a3a22","#8a6a48"])),o=be.metal("#b8a070","brass");yt(n,r,-t/2,t/2,i-.03,i,-e/2,e/2),yt(n,r,-t/2+.01,t/2-.01,0,i-.03,-e/2,e/2-.02),yt(n,be.dark("dresserin","#1a120c"),-t/2+.02,t/2-.02,.1,i-.04,e/2-.0225,e/2-.02);let a=Math.max(2,Math.round((i-.12)/.22)),l=t>1?2:1,c=(i-.03-.1)/a;for(let h=0;h<a;h++)for(let f=0;f<l;f++){let u=h===a-1&&l===2&&s()<0?1:l,d=(t-.04)/u;if(f>=u)continue;let m=-t/2+.02+f*d+.006,x=m+d-.012,g=.1+h*c+.006,p=g+c-.012,b=(s()<.15,0);yt(n,r,m,x,g,p,e/2-.022+b,e/2);let _=(m+x)/2,y=(g+p)/2;for(let L of d>.5?[-.12,.12]:[0])v(n,Z(.012,.012,.012,8),o,_+L,y,e/2-.012,Math.PI/2,0,0)}},fridge(n,t,e,i,s){let r=be.enamel("fridge",se(s,["#e9e8e2","#d8d6cc","#c8cacb"])),o=be.dark("fridgek","#2a2b2d",.5),a=ee("fxnotes",{map:Tt("fridgenotes",256,256,(u,d,m,x)=>{u.fillStyle="#ece6d0",u.fillRect(0,0,d,m),u.fillStyle="#f2c21b",u.fillRect(0,0,d/2,m/2),u.fillStyle="#f4f4f4",u.fillRect(d/2,0,d/2,m/2),u.fillStyle="#cfe0ef",u.fillRect(0,m/2,d/2,m/2),u.fillStyle="#f6f0e4",u.fillRect(d/2,m/2,d/2,m/2),$e(u,12,20,100,6,12,x,"#333"),$e(u,140,20,100,8,10,x,"#333"),u.strokeStyle="#2a6fd6",u.lineWidth=4,u.strokeRect(30,170,60,50),u.beginPath(),u.moveTo(25,172),u.lineTo(60,140),u.lineTo(95,172),u.stroke(),u.fillStyle="#f08a1c",u.beginPath(),u.arc(105,150,12,0,Ht),u.fill(),$e(u,140,150,100,7,12,x,"#223"),fe(u,d,m,x,1)}),roughness:.9}),l=.045;Fn(n,r,-t/2+.005,t/2-.005,0,i-.005,-e/2,e/2-l,.02),yt(n,o,-t/2+.03,t/2-.03,0,.09,e/2-l,e/2-l+.01);let c=i*(i>1.5?.68:.62);Fn(n,r,-t/2,t/2,.1,c-.006,e/2-l+.002,e/2,.015),Fn(n,r,-t/2,t/2,c+.006,i,e/2-l+.002,e/2,.015),yt(n,o,-t/2+.01,t/2-.01,c-.008,c+.008,e/2-l-.004,e/2-l+.004);let h=t/2-.07;yt(n,o,h-.015,h+.015,c-.42>.2?c-.42:.2,c-.08,e/2-.005-0,e/2),yt(n,o,h-.015,h+.015,c+.06,Math.min(i-.06,c+.32),e/2-.005,e/2);let f=[[-.15,c-.25,0,0],[.05,c-.45,1,1],[-.12,c+.15,2,0],[-.05,c-.75,3,1]];for(let[u,d,m,x]of f){if(s()<.25||d<.2)continue;let g=m%2/2,p=1-(Math.floor(m/2)+1)/2,b=new Ge(.14,.18),_=b.attributes.uv;for(let y=0;y<_.count;y++)_.setXY(y,g+_.getX(y)*.5,p+_.getY(y)*.5);v(n,b,a,Math.max(-t/2+.1,Math.min(t/2-.15,u*t/.75)),d,e/2-.0015,0,0,x?.12:-.06),v(n,Z(.008,.008,.004,8),o,Math.max(-t/2+.1,Math.min(t/2-.15,u*t/.75)),d+.075,e/2-.004,Math.PI/2,0,0)}},counter(n,t,e,i,s){let r=be.painted(se(s,["#e8e2d2","#8a9a88","#5a6a7a","#d8d0c0"])),o=be.counterTop(se(s,["#cfc8b8","#6a6a68","#b8a890"])),a=be.metal("#b8bcc0","ss"),l=ee("fxcooktop",{map:Tt("cooktop",256,256,(C,P,E,S)=>{C.fillStyle="#141516",C.fillRect(0,0,P,E),C.strokeStyle="rgba(200,200,200,0.35)",C.lineWidth=3;for(let[O,V,z]of[[64,64,44],[192,64,34],[64,192,34],[192,192,44]])C.beginPath(),C.arc(O,V,z,0,Ht),C.stroke(),C.beginPath(),C.arc(O,V,z*.6,0,Ht),C.stroke();kn(C,P,E,S,1.5)}),roughness:.25,metalness:.1}),c=.04,h=.09;yt(n,l,-t/2,t/2,0,h,-e/2,e/2-.07),yt(n,r,-t/2,t/2,h,i-c,-e/2,e/2-.03);let f=t>=.7&&(t>=1.6||s()<.55),u=t>=.7&&(t>=1.6||!f),d=.6,m=.62,x=f?u?-t/2+.2+d/2:(s()-.5)*(t-d-.1):null,g=u?f?t/2-.15-m/2:(s()-.5)*(t-m-.1):null,p=Math.max(1,Math.round(t/.5)),b=t/p;for(let C=0;C<p;C++){let P=-t/2+C*b+.004,E=P+b-.008,S=(P+E)/2;g!==null&&Math.abs(S-g)<m/2||(yt(n,r,P,E,i-c-.17,i-c-.01,e/2-.03,e/2-.008),yt(n,a,S-.06,S+.06,i-c-.1,i-c-.085,e/2-.008,e/2),yt(n,r,P,E,h+.01,i-c-.19,e/2-.03,e/2-.008),yt(n,a,E-.04,E-.028,i-c-.4,i-c-.26,e/2-.008,e/2))}if(g!==null){let C=g-m/2,P=g+m/2;yt(n,l,C,P,h,i-c,e/2-.035,e/2-.005),yt(n,a,C+.1,P-.1,h+.2,i-c-.25,e/2-.006,e/2-.003),yt(n,a,C+.06,P-.06,i-c-.17,i-c-.15,e/2-.004,e/2);for(let E=0;E<4;E++)v(n,Z(.018,.018,.02,8),a,C+.1+E*(m-.2)/3,i-c-.07,e/2-.02,Math.PI/2,0,0)}let _=[];x!==null&&_.push([x-d/2+.04,x+d/2-.04,"sink"]),g!==null&&_.push([g-m/2,g+m/2,"stove"]),_.sort((C,P)=>C[0]-P[0]);let y=-t/2,L=e/2-.08,R=-e/2+.1;for(let[C,P,E]of _){if(yt(n,o,y,C,i-c,i,-e/2,e/2),yt(n,o,C,P,i-c,i,L,e/2),yt(n,o,C,P,i-c,i,-e/2,R),E==="sink"){let S=i-c-.18;yt(n,a,C,P,S,S+.01,R,L),yt(n,a,C,C+.006,S,i,R,L),yt(n,a,P-.006,P,S,i,R,L),yt(n,a,C,P,S,i,R,R+.006),yt(n,a,C,P,S,i,L-.006,L),P-C>.45&&yt(n,a,(C+P)/2-.005,(C+P)/2+.005,S,i-.02,R,L),v(n,Z(.03,.03,.004,10),l,(C+P)/2-(P-C)/4,S+.01,(R+L)/2),v(n,Z(.025,.025,.004,10),a,(C+P)/2,i-.004,R-.045)}else yt(n,l,C,P,i-c,i,R,L);y=P}yt(n,o,y,t/2,i-c,i,-e/2,e/2)},tub(n,t,e,i,s){let r=be.enamel("tub","#ecebe6"),o=ee("fxtubring",{map:ri("tubring",256,(c,h,f,u)=>{c.fillStyle="#e4e0d4",c.fillRect(0,0,h,f);let d=c.createRadialGradient(h*.6,f*.5,10,h*.5,f*.5,h*.7);d.addColorStop(0,"rgba(150,120,70,0.35)"),d.addColorStop(1,"rgba(150,120,70,0.05)"),c.fillStyle=d,c.fillRect(0,0,h,f),kn(c,h,f,u,2)}),roughness:.35}),a=be.metal("#c8ccd0","chrome"),l=.07;yt(n,r,-t/2,t/2,0,.06,-e/2,e/2),yt(n,o,-t/2+l,t/2-l,.06,.07,-e/2+l,e/2-l),Fn(n,r,-t/2,t/2,0,i,e/2-l,e/2,.02),Fn(n,r,-t/2,t/2,0,i,-e/2,-e/2+l,.02),Fn(n,r,-t/2,-t/2+l,0,i,-e/2,e/2,.02),Fn(n,r,t/2-l*1.6,t/2,0,i,-e/2,e/2,.02),yt(n,o,-t/2+l,t/2-l*1.6,.07,.11,-e/2+l,-e/2+l+.002),v(n,Z(.025,.025,.005,10),a,-t/2+l+.1,.07,0),v(n,Z(.018,.018,.12,8),a,-t/2+l,i-.12,0,0,0,-Math.PI/2);for(let c of[-.09,.09])v(n,Z(.022,.022,.03,8),a,-t/2+l,i-.07,c,0,0,-Math.PI/2)},cabinet(n,t,e,i,s){let r=be.painted(se(s,["#d8d4c8","#6a7a6a","#8a7a6a","#b8bcc0"])),o=be.metal("#9a9ea2","cab");yt(n,r,-t/2,t/2,0,i,-e/2,e/2-.02);let a=t>.55?2:1,l=i>1.3?i*.55:0;for(let c=0;c<a;c++)for(let[h,f]of l?[[.08,l-.005],[l+.005,i-.04]]:[[.08,i-.04]]){let u=-t/2+.01+c*(t-.02)/a+.004,d=u+(t-.02)/a-.008;yt(n,r,u,d,h,f,e/2-.02,e/2),yt(n,r,u+.05,d-.05,h+.05,f-.05,e/2-.005,e/2+0);let m=a===2?c===0?d-.04:u+.04:d-.04;yt(n,o,m-.008,m+.008,(h+f)/2-.06,(h+f)/2+.06,e/2-0,e/2)}yt(n,be.dark("kickc"),-t/2+.02,t/2-.02,0,.08,e/2-.05,e/2-.03)},checkout(n,t,e,i,s){let r=be.laminate(se(s,["#8a8e92","#b8b0a0","#5a6a5a"])),o=be.dark("belt","#18191b",.85),a=be.metal("#b0b4b8","lane"),l=Math.min(.92,i);yt(n,r,-t/2,t/2,0,l-.05,-e/2+.02,e/2-.02),yt(n,o,-t/2+.03,t/2-.03,0,.06,-e/2+.02,e/2-.02);let c=t/2-Math.min(.8,t*.4);yt(n,a,-t/2,t/2,l-.05,l-.03,-e/2,e/2),yt(n,o,-t/2+.05,c,l-.03,l-.005,-e/2+.06,e/2-.06),yt(n,a,-t/2,c,l-.03,l,-e/2,-e/2+.05),yt(n,a,-t/2,c,l-.03,l,e/2-.05,e/2),v(n,Z(.025,.025,e-.12,8),a,c,l-.03,-(e-.12)/2,Math.PI/2,0,0),yt(n,r,c+.06,c+.36,l-.03,l-.02,-.15,.15),yt(n,a,c+.04,t/2,l-.03,l-.01,-e/2,e/2),yt(n,o,-t/2+.4+s()*(c+t/2-.8),-t/2+.42+s()*0+.36,l-.005,l+Math.min(.03,i-l),-.15,.15);let h=t/2-.2,f=-e/2+.15,u=i-l;if(u>.12){let d=Math.min(i-.18,l+.25);v(n,Z(.02,.025,Math.max(.02,d-l),8),o,h,l,f);let m=new Wt;yt(m,o,-.15,.15,0,Math.min(.22,i-d-.01),-.02,.02),yt(m,a,-.13,.13,.015,Math.min(.2,i-d-.03),.02,.023,!1),m.position.set(h,d,f),m.rotation.y=-.6,n.add(m)}if(u>.04){yt(n,o,t/2-.5,t/2-.3,l,l+.035,e/2-.2,e/2-.06);let d=v(n,Q(.08,Math.min(.12,u-.005),.05),o,t/2-.15,l,e/2-.12);d.rotation.x=-.3}},coolers(n,t,e,i,s){let r=be.dark("coolerframe","#2a2c2f",.45),o=ee("fxcoolerin",{color:1447962,roughness:.7}),a=be.glass(),l=Math.max(1,Math.round(t/.76)),c=t/l,h=.05;yt(n,r,-t/2,t/2,0,.12,-e/2,e/2),yt(n,r,-t/2,t/2,i-.16,i,-e/2,e/2),yt(n,r,-t/2,t/2,.12,i-.16,-e/2,-e/2+.03),yt(n,r,-t/2,-t/2+.03,.12,i-.16,-e/2,e/2),yt(n,r,t/2-.03,t/2,.12,i-.16,-e/2,e/2),yt(n,o,-t/2+.03,t/2-.03,.12,i-.16,-e/2+.03,-e/2+.035);let f=Math.max(2,Math.floor((i-.4)/.32)),u=(i-.28)/(f+0),d=new Ls(1),m=Tt("coolerbottles",512,64,(g,p,b)=>{["#a8141a","#2f8a3a","#e8701c","#1d4f9a","#f2c21b","#e9f2f6","#4a2412","#7fd62a"].forEach((y,L)=>{g.fillStyle=y,g.fillRect(L*64,0,64,b),g.fillStyle="rgba(255,255,255,0.8)",g.fillRect(L*64,b*.35,64,b*.3),g.fillStyle="rgba(0,0,0,0.6)",g.fillRect(L*64+10,b*.45,44,6)})}),x=Z(.035,.035,.22,6);for(let g=0;g<f;g++){let p=.12+g*u;yt(n,r,-t/2+.03,t/2-.03,p,p+.015,-e/2+.03,e/2-h-.01);for(let b=0;b<l;b++){let _=-t/2+b*c+.08;for(let y=0;y<4;y++){if(s()>.55)continue;let L=Math.floor(s()*8),R=[L/8,0,(L+1)/8,1],C=s()<.15,P=new de().compose(new N(_+y*(c-.16)/3,p+.015+(C?.035:0),e/2-h-.08-s()*.1),new Cn().setFromEuler(new In(C?Math.PI/2:0,s()*3,0)),new N(1,Math.min(1,(u-.04)/.22),1));d.add(x,P,[R,[.01,.01,.02,.02],[.01,.01,.02,.02]],[0])}}}for(let g of d.meshes([ee("fxbottles",{map:m,roughness:.3})]))n.add(g);for(let g=0;g<l;g++){let p=-t/2+g*c,b=p+c;yt(n,r,p,p+.04,.12,i-.16,e/2-h,e/2),yt(n,r,b-.04,b,.12,i-.16,e/2-h,e/2),yt(n,a,p+.04,b-.04,.12,i-.16,e/2-h+.02,e/2-h+.026);let _=g%2?p+.08:b-.08;yt(n,r,_-.012,_+.012,i*.35,i*.65,e/2-.022,e/2)}},rx_counter(n,t,e,i,s){let r=be.laminate(se(s,["#d8d4c8","#8a9aa8","#b8a890"])),o=be.counterTop("#e0dcd0"),a=ee("fxbins",{map:Tt("rxbins",512,128,(m,x,g,p)=>{["#2a6fd6","#c4221c","#2f8a3a","#f2c21b"].forEach((_,y)=>{m.fillStyle=_,m.fillRect(y*128,0,128,g),m.fillStyle="#f4f2ec",m.fillRect(y*128+24,g*.35,80,30),$e(m,y*128+30,g*.35+8,68,2,8,p,"#333")}),kn(m,x,g,p,1.2)}),roughness:.55}),l=.25;yt(n,r,-t/2,t/2,0,i-.03,e/2-l,e/2-.02),yt(n,o,-t/2,t/2,i-.03,i,e/2-l-.02,e/2);let c=Math.max(.7,i-.28);yt(n,r,-t/2,t/2,0,c-.03,-e/2,e/2-l),yt(n,o,-t/2,t/2,c-.03,c,-e/2,e/2-l);let h=Q(.14,.09,.22),f=new Ls(1),u=(m,x,g,p)=>{let b=Math.floor(s()*4),_=[b/4,0,(b+1)/4,1];f.add(h,new de().compose(new N(m,x,g),new Cn().setFromEuler(new In(0,p,0)),new N(1,1,1)),[_,_,_,_,_,_],[0])},d=Math.floor((t-.1)/.16);for(let m=0;m<2;m++)for(let x=0;x<d;x++){if(s()<.3)continue;let g=c+m*.095;g+.09>i||u(-t/2+.09+x*.16,g,-e/2+.13+0,(s()-.5)*.08)}for(let m=0;m<2;m++){let x=.12+m*.3;yt(n,r,-t/2+.02,t/2-.02,x-.015,x,-e/2,e/2-l);for(let g=0;g<d;g++)s()<.55&&u(-t/2+.09+g*.16,x,-e/2+.12,(s()-.5)*.1)}for(let m of f.meshes([a]))n.add(m)},desk(n,t,e,i,s){let r=be.wood(se(s,["#6a4528","#9a7a5a","#4a4a4c"])),o=be.laminate("#d8d4cc"),a=be.dark("desk","#1d1e20",.45),l=Math.min(.75,i-.25),c=.05;yt(n,r,-t/2,t/2,0,i-.03,e/2-c,e/2),yt(n,o,-t/2,t/2,i-.03,i,e/2-.28,e/2);for(let u of[-1,1])yt(n,r,u<0?-t/2:t/2-.04,u<0?-t/2+.04:t/2,0,l,-e/2,e/2-c);yt(n,o,-t/2,t/2,l-.03,l,-e/2,e/2-c);let h=(s()-.5)*(t-.7),f=Math.min(.32,i-l-.02);if(f>.12){v(n,Q(.2,.012,.15),a,h,l,-e/2+.25),v(n,Q(.04,f*.4,.03),a,h,l,-e/2+.25);let u=new Wt;yt(u,a,-.26,.26,0,f*.75,-.02,.02,!1),u.position.set(h,l+f*.25,-e/2+.27),u.rotation.x=-.05,n.add(u)}v(n,Q(.44,.02,.14),a,h,l,-e/2+.48>e/2-c-.08?e/2-c-.09:-e/2+.48,0,(s()-.5)*.2,0),v(n,Q(.18,.05,.2),a,h+.45<t/2-.15?h+.45:h-.45,l,-e/2+.22);for(let u=0;u<4;u++)v(n,Q(.216,.002,.28),o,(s()-.5)*(t-.4),l+.001+u*.002,(s()-.5)*.2-.05,0,s()*3,0)},bench(n,t,e,i,s){let r=be.wood(se(s,["#8a6440","#6a4a30"])),o=be.dark("benchleg","#2a2c2e",.5),a=Math.min(.46,i),l=i>.65,c=l?e*.85:e,h=Math.max(2,Math.round(c/.11));for(let u=0;u<h;u++){let d=e/2-c+u*c/h+.008;yt(n,r,-t/2,t/2,a-.035,a,d,d+c/h-.016)}let f=Math.max(2,Math.ceil(t/1.2)+1);for(let u=0;u<f;u++){let d=-t/2+.08+u*(t-.16)/(f-1);yt(n,o,d-.025,d+.025,0,a-.035,e/2-c+.03,e/2-c+.07),yt(n,o,d-.025,d+.025,0,a-.035,e/2-.07,e/2-.03),yt(n,o,d-.025,d+.025,a-.08,a-.035,e/2-c+.03,e/2-.03),l&&yt(n,o,d-.025,d+.025,0,i-.02,-e/2,-e/2+.04)}if(l)for(let u=0;u<2;u++)yt(n,r,-t/2,t/2,i-.12-u*.14,i-.02-u*.14,-e/2+.04,-e/2+.075)},locker(n,t,e,i,s){let r=se(s,["#4a5a6a","#6a7a5a","#8a8a86","#3a4a7a"]),o=be.painted(r),a=ee("fxlockerdoor"+r,{map:Tt("fxlockerdoor"+r,128,512,(h,f,u,d)=>{Me(h,f,u,d,r,.05,1500,2),h.fillStyle="rgba(0,0,0,0.55)";for(let m of[.05,.85])for(let x=0;x<6;x++)h.fillRect(f*.25,u*m+x*9,f*.5,4);h.fillStyle="rgba(255,255,255,0.1)",h.fillRect(3,3,f-6,2),h.fillStyle="#d8d8d4",h.fillRect(f*.35,u*.28,f*.3,16),h.fillStyle="#c8ccd0",h.fillRect(f*.75,u*.45,10,46);for(let m=0;m<6;m++)h.fillStyle="rgba(110,60,30,0.5)",h.beginPath(),h.ellipse(d()*f,d()*u,1+d()*4,1+d()*8,0,0,Ht),h.fill();kn(h,f,u,d,1.5)}),roughness:.45,metalness:.3}),l=Math.max(1,Math.round(t/.32)),c=t/l;yt(n,o,-t/2,t/2,0,i,-e/2,e/2-.02),yt(n,be.dark("lockbase"),-t/2,t/2,0,.1,e/2-.02,e/2);for(let h=0;h<l;h++){let f=-t/2+h*c+.006;v(n,Q(c-.012,i-.12-.01,.018),[o,o,o,o,a,o],f+(c-.012)/2,.11,e/2-.009)}},rack(n,t,e,i,s){let r=be.painted("#2a4a8a"),o=be.painted("#d8601c"),a=be.wood("#a8845a"),l=be.card(),c=Math.max(1,Math.round(t/2.7)),h=t/c;for(let d=0;d<=c;d++){let m=-t/2+d*h,x=Math.max(-t/2,Math.min(t/2-.08,m-.04));for(let g of[-e/2,e/2-.08])yt(n,r,x,x+.08,0,i,g,g+.08);for(let g=0;g<Math.floor(i/.6);g++){let p=.2+g*.6,b=v(n,Tu(.03,Math.hypot(.6,e-.16),.02),r,x+.04,p,0,-Math.atan2(e-.16,.6)*(g%2?1:-1)+0*Math.PI,0,0);b.rotation.set(Math.atan2(e-.16,.6)*(g%2?1:-1),0,0),b.scale.y=Math.min(1,((i-p-.02)/.6>1,1))}}let f=Math.max(1,Math.floor((i-.2)/1.2)),u=(i-.12)/f;for(let d=0;d<=f;d++){let m=d===0?0:d*u;if(d>0)for(let g of[-e/2+.005,e/2-.065])yt(n,o,-t/2,t/2,m-.12,m,g,g+.06);if(d===f)break;let x=u-.18;for(let g=0;g<c;g++)for(let p=0;p<2;p++){if(s()<.25)continue;let b=-t/2+g*h+(p+.5)*h/2,_=Math.min(1.1,h/2-.1),y=Math.min(1,e-.1);yt(n,a,b-_/2,b+_/2,m,m+.13,-y/2,y/2);let L=s();if(L<.2)continue;let R=2,C=2,P=Math.min(.35,(x-.13)/2),E=Math.max(1,Math.floor((x-.13)*L/P));for(let S=0;S<R;S++)for(let O=0;O<C;O++)for(let V=0;V<E;V++){if(s()<.2)continue;let z=_/R-.02,X=y/C-.02,lt=yt(n,l,b-_/2+S*_/R+.01,b-_/2+S*_/R+.01+z,m+.13+V*P,m+.13+(V+1)*P-.005,-y/2+O*y/C+.01,-y/2+O*y/C+.01+X);lt.rotation.y=(s()-.5)*.06}}}}};function du(n,t=!1){let e=se(n,[["#7a1d1a","#22304a","#e8d8a0"],["#2f4a2a","#1a1a1a","#c8a24a"],["#4a5a7a","#e8e8e0","#1a2a4a"],["#8a7a5a","#3a2a1a","#e8e0d0"]]);return ee("fxplaid"+e.join()+t,{map:yu(e[0],e[1],e[2]),roughness:.95,side:Ce})}var F_=Object.keys(d_);function J0(n,t=!1){let e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new Ue,c=0;for(let h=0;h<n.length;++h){let f=n[h],u=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in f.attributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(f.attributes[d]),u++}if(u!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in f.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(f.morphAttributes[d])}if(t){let d;if(e)d=f.index.count;else if(f.attributes.position!==void 0)d=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(e){let h=0,f=[];for(let u=0;u<n.length;++u){let d=n[u].index;for(let m=0;m<d.count;++m)f.push(d.getX(m)+h);h+=n[u].attributes.position.count}l.setIndex(f)}for(let h in r){let f=wu(r[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,f)}for(let h in o){let f=o[h][0].length;if(f===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<f;++u){let d=[];for(let x=0;x<o[h].length;++x)d.push(o[h][x][u]);let m=wu(d);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}return l}function wu(n){let t,e,i,s=-1,r=0;for(let c=0;c<n.length;++c){let h=n[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new Ye(o,e,i),l=0;for(let c=0;c<n.length;++c){let h=n[c];if(h.isInterleavedBufferAttribute){let f=l/e;for(let u=0,d=h.count;u<d;u++)for(let m=0;m<e;m++){let x=h.getComponent(u,m);a.setComponent(u+f,m,x)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}var ll=[{group:"Movement",keys:["KeyW","KeyA","KeyS","KeyD"],show:"W A S D",action:"move",label:"Walk (also arrow keys)",ready:!0},{group:"Movement",keys:["Space"],show:"Space",action:"jump",label:"Jump",ready:!0},{group:"Movement",keys:["ShiftLeft","ShiftRight"],show:"Shift (hold)",action:"sprint",label:"Sprint",ready:!0},{group:"Movement",keys:["ControlLeft","ControlRight"],show:"Ctrl (hold)",action:"crouch",label:"Crouch",ready:!0},{group:"Movement",keys:["KeyZ"],show:"Z",action:"stance",label:"Change stance: stand, crouch, prone",ready:!0},{group:"Movement",keys:["CapsLock"],show:"Caps Lock",action:"walktoggle",label:"Slow walk on / off",ready:!0},{group:"Movement",keys:[],show:"Mouse",action:"look",label:"Look (click the view first)",ready:!0},{group:"Interact",keys:["KeyE"],show:"E",action:"interact",label:"Take the item you look at (also doors, gates). Hold E: take all in reach",ready:!0},{group:"Interact",keys:["KeyF"],show:"F",action:"context",label:"Context: take the item, or items found before. Hold F: take all in reach",ready:!0},{group:"Interact",keys:["KeyL"],show:"L",action:"flashlight",label:"Flashlight on / off",ready:!0},{group:"Interact",keys:["Mouse1"],show:"Middle mouse",action:"ping",label:"Mark a spot on the floor",ready:!0},{group:"Interact",keys:["Mouse2"],show:"Right mouse (hold)",action:"aim",label:"Look closer (zoom)",ready:!0},{group:"Panels",keys:["Tab","KeyI"],show:"Tab / I",action:"inventory",label:"Inventory",ready:!0},{group:"Panels",keys:["KeyC"],show:"C",action:"character",label:"Character and vitals",ready:!0},{group:"Panels",keys:["KeyM"],show:"M",action:"map",label:"Floor plan of this building",ready:!0},{group:"Panels",keys:["KeyJ"],show:"J",action:"journal",label:"Journal",ready:!0},{group:"Panels",keys:["KeyO"],show:"O",action:"objectives",label:"Objectives",ready:!0},{group:"Panels",keys:["KeyK"],show:"K",action:"skills",label:"Skills",ready:!1},{group:"Panels",keys:["KeyP"],show:"P",action:"progression",label:"Character progression",ready:!1},{group:"Panels",keys:["KeyN"],show:"N",action:"crafting",label:"Crafting",ready:!1},{group:"Panels",keys:["KeyU"],show:"U",action:"perks",label:"Perks",ready:!1},{group:"Quick items",keys:["Digit5"],show:"5",action:"quick_med",label:"Medical item (bandage, pills)",ready:!0},{group:"Quick items",keys:["Digit6"],show:"6",action:"quick_stamina",label:"Stamina item",ready:!1},{group:"Quick items",keys:["Digit7"],show:"7",action:"quick_food",label:"Eat or drink (what you need most)",ready:!0},{group:"Quick items",keys:["Digit8"],show:"8",action:"quick_buff",label:"Stimulant",ready:!1},{group:"Quick items",keys:["Digit9"],show:"9",action:"quick_utility",label:"Utility: new batteries in the flashlight",ready:!0},{group:"Quick items",keys:["Digit0"],show:"0",action:"inventory",label:"Item list (opens the inventory)",ready:!0},{group:"Weapons (not yet)",keys:["Mouse0"],show:"Left mouse",action:"fire",label:"Fire",ready:!1},{group:"Weapons (not yet)",keys:["KeyR"],show:"R",action:"reload",label:"Reload",ready:!1},{group:"Weapons (not yet)",keys:["Digit1","Digit2","Digit3","Digit4"],show:"1 \u2013 4",action:"weapon",label:"Primary, secondary, sidearm, melee",ready:!1},{group:"Weapons (not yet)",keys:["Wheel"],show:"Mouse wheel",action:"cycle",label:"Change weapon",ready:!1},{group:"Weapons (not yet)",keys:["KeyG"],show:"G",action:"grenade",label:"Throw",ready:!1},{group:"Weapons (not yet)",keys:["KeyV"],show:"V",action:"melee",label:"Melee",ready:!1},{group:"Weapons (not yet)",keys:["KeyQ"],show:"Q",action:"tactical",label:"Tactical ability",ready:!1},{group:"Weapons (not yet)",keys:["KeyT"],show:"T",action:"equipment",label:"Tactical equipment",ready:!1},{group:"Weapons (not yet)",keys:["KeyB"],show:"B",action:"inspect",label:"Inspect weapon",ready:!1},{group:"Weapons (not yet)",keys:["KeyH"],show:"H",action:"holster",label:"Holster",ready:!1},{group:"Weapons (not yet)",keys:["KeyX"],show:"X",action:"special",label:"Special ability",ready:!1},{group:"Game",keys:["Escape"],show:"Esc",action:"pause",label:"Pause menu (and this key list)",ready:!0},{group:"Game",keys:["Enter","NumpadEnter"],show:"Enter",action:"confirm",label:"Confirm",ready:!0},{group:"Game",keys:["F5"],show:"F5",action:"quicksave",label:"Quick save",ready:!0},{group:"Game",keys:["F9"],show:"F9",action:"quickload",label:"Quick load (last save)",ready:!0},{group:"Game",keys:["Backquote"],show:"`",action:"debug",label:"Debug readout",ready:!0}];var Au=new Map;for(let n of ll)for(let t of n.keys)Au.set(t,n);function Or(n){return Au.get(n)||null}var Po={stand:{eye:1.62,speed:2.6},crouch:{eye:1.05,speed:1.3},prone:{eye:.4,speed:.6}},p_=4.4,m_=1.3,Ru=3.6,Cu=9.8,Iu=700;function Pu({stance:n,sprint:t,slowWalk:e}){return n!=="stand"?Po[n].speed:t?p_:e?m_:Po.stand.speed}function j0(n){return n==="stand"?"crouch":n==="crouch"?"prone":"stand"}var g_=7328742,x_=typeof navigator<"u"&&/Mac/.test(navigator.platform||""),__=30,ji=n=>String(n).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]);var y_={shelf:8226704,rack:12610091,clothes:7040883,checkout:4936796,coolers:10134440,rx_counter:14210248,gate:9213083,bed:10135213,cabinet:9341568,fridge:14277339,counter:8022616,sofa:5991006,tub:15329764,locker:7175046,dresser:7232069,cart:11581114,table:7034433,bench:6050634,desk:6975348},cl=[11682863,13935931,4157342,6262602,14998992,9064317,13070394,3104090,10394252,14139996];function v_(n){let{plan:t}=n,e=document.createElement("div");e.id="inside",e.innerHTML=`
    <canvas></canvas>
    <div class="in-top corners">
      <div class="in-title">${ji(n.title)}</div>
      <div class="in-sub">${ji(n.subtitle||"")}</div>
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
        <h3>${ji(n.title)}</h3>
        <p class="hint">Game time moves only when you walk or search. It is stopped now.</p>
        <div class="row"><button class="primary" data-in="resume">Resume</button>
        <button data-in="leave">Leave the building</button></div>
        <h4>Keys</h4>
        <div class="in-keys">${M_()}</div>
      </div>
    </div>`,document.body.appendChild(e);let i=w=>e.querySelector(w),s=i("canvas"),r=matchMedia("(pointer: coarse)").matches;e.classList.toggle("is-touch",r);let o=new Ca({canvas:s,antialias:!r});o.setPixelRatio(Math.min(devicePixelRatio||1,r?1.5:2)),o.outputColorSpace=We;let a=new vr,l=new xn(72,1,.05,80);a.add(l);let{w:c,d:h,h:f}=t.size,u=n.dark,d=u?329482:2765112;a.background=new Zt(d),a.fog=new yr(d,.035);let m=V0(),x=su(o,a,l,{dark:u,night:!!n.night,quality:m,flashlight:n.hasFlashlight()}),g=x.flashlight,p=yo(si(`look:${n.title}`));function b(){g&&(g.setOn(n.isLightOn()),n.lightHours&&g.setPower(Math.min(1,n.lightHours()/2)))}b();let _=w=>G0(t.cat,w,null,m),y=new Vt(new Ge(c,h),_("floor"));y.rotation.x=-Math.PI/2,y.position.set(0,0,-h/2),y.receiveShadow=!0,a.add(So(y));let L=new Vt(new Ge(c,h),_("ceiling"));L.rotation.x=Math.PI/2,L.position.set(0,f,-h/2),a.add(So(L));{let w=[];for(let W=-3;W>-h+1;W-=5)for(let et=-c/2+3;et<c/2-1;et+=6)w.push([et,W]);(t.cat==="house"||t.kind!=="hall")&&w.splice(0,w.length,...w.filter((W,et)=>et%2===0));let U=u?1+Math.floor(p()*2):0;w.forEach(([W,et],xt)=>{let Rt=p(),_t=U>0&&Rt<.18?(U--,"emergency"):t.cat!=="house"&&Rt>.86?"flicker":"dead";x.addCeilingLight(W,f,et,_t),xt===w.length-1&&U>0&&x.addCeilingLight(W,f,et-1.5,"emergency")})}let R=_("wall");for(let w of t.walls){let U=new Vt(new we(w.w,f,w.d),R);U.position.set(w.x,f/2,w.z),U.receiveShadow=!0,a.add(So(U))}x.addRoomShade(-c/2,c/2,-h,0);let C=new Vt(new we(2,f-2.2,.2),R);C.position.set(0,2.2+(f-2.2)/2,0),a.add(So(C)),x.addDoorLight(0,0,!!n.night,{width:1.8,height:2.2}),t.cat!=="house"&&x.addExitSign(0,Math.min(f-.25,2.55),-.14,Math.PI),x.addDust({minX:-c/2+.3,maxX:c/2-.3,minY:.1,maxY:f-.2,minZ:-h+.3,maxZ:-.3});{let w=t.cat==="house"?["note","evac"]:t.cat==="clinic"||t.cat==="hospital"?["quarantine","mask","staff"]:["closed","mask","quarantine","poster"],U=t.cat==="house"?1:2;for(let et=0;et<U;et++){let xt=et%2?1:-1;x.addWallNotice(xt*(1.5+p()*1.2),1.35+p()*.3,-.13,Math.PI,w[Math.floor(p()*w.length)])}let W=Math.min(28,Math.round(c*h/(t.cat==="house"?24:50)));for(let et=0;et<W;et++){let xt=p(),Rt=xt<.45?"dirt":xt<.7?"paper":xt<.82?"water":xt<.92?"leaves":"snow",_t=(p()-.5)*(c-1),he=-.5-p()*(Rt==="snow"||Rt==="leaves"?4:h-1);x.addDecal(_t,he,Rt,.6+p()*1.4,p()*Math.PI)}t.windows==="front"&&p()<.7&&x.addBrokenGlass((p()<.5?-1:1)*(3+p()*(c/2-5)),-.8,1.3)}let P=new Vt(new Ge(6,4),new _n({color:n.night?1713203:14673644}));P.position.set(0,2,2.5),P.rotation.y=Math.PI,a.add(P);let E=new Vt(new Ge(6,3),new _n({color:n.night?3819094:16054008}));if(E.rotation.x=-Math.PI/2,E.position.set(0,.01,1.4),a.add(E),t.windows==="front"){let w=new _n({color:n.night?1450028:12964830,transparent:!0,opacity:.85});for(let U of[-1,1]){let W=c/2-2,et=new Vt(new Ge(W,1.8),w);et.position.set(U*(1+W/2+.5),1.6,-.12),a.add(et)}}let S=new Wt;a.add(S);let O={},V=w=>O[w]||(O[w]=new qe({color:y_[w]??8947848,roughness:.8,metalness:w==="shelf"||w==="gate"||w==="locker"?.35:.05})),z=[],X=[],lt=u||n.night?13:20,j={supermarket:"grocery",pharmacy:"pharmacy",hardware:"hardware",outdoor:"outdoor",convenience:"convenience",gas:"convenience"}[t.cat]||"grocery",gt=null;for(let w of t.fixtures){if(w.type==="gate"){let W=new Wt,et=Math.floor(w.w/.15);for(let xt=0;xt<=et;xt++){let Rt=new Vt(new we(.03,w.h,.03),V("gate"));Rt.position.set(w.x-w.w/2+xt*.15,w.h/2,w.z),W.add(Rt)}gt=W,W.visible=!n.counterOpen,a.add(W);continue}if(w.type==="shelf"||w.type==="rack"||w.type==="clothes"){let W=S_(w,V(w.type));if(W.traverse(et=>{et.isMesh&&(et.castShadow=!0,et.receiveShadow=!0)}),w.tipped){W.rotation.z=.16*(w.x>0?1:-1);for(let et=0;et<14;et++){let xt=new Vt(new we(.22,.26,.24),new qe({color:cl[et%cl.length],roughness:.7}));xt.position.set(w.x+(et%2?1:-1)*(.7+et%3*.25),.12,w.z-w.d/2+et*7%13/13*w.d),xt.rotation.set(0,et,et%2?Math.PI/2:0),S.add(xt)}}if(S.add(W),!w.tipped&&w.type!=="clothes")for(let et of[-1,1]){let xt=et<0?w.leftZone:w.rightZone;xt!=null&&X.push({f:w,side:et,zone:xt,group:null,done:null})}else if(!w.tipped){let et=[1.25];for(let xt of et)for(let Rt=-w.d/2+.3;Rt<w.d/2-.2;Rt+=.34)for(let _t of[-1,1]){let he=_t<0?w.leftZone:w.rightZone;he!=null&&z.push({x:w.x+_t*.27,y:xt,z:w.z+Rt,zone:he,clothes:w.type==="clothes"})}}continue}if(w.type==="bed"){let W=new Wt,et=new Vt(new we(w.d,.45,w.w),V("bed"));et.position.y=.225;let xt=new Vt(new we(w.d*.95,.15,w.w*.95),new qe({color:14080210,roughness:1}));xt.position.y=.52,W.add(et,xt),W.position.set(w.x,0,w.z),W.rotation.y=Math.PI/2,S.add(W);continue}let U=new Vt(new we(w.w,w.h,w.d),V(w.type));if(U.position.set(w.x,w.h/2,w.z),U.castShadow=!0,U.receiveShadow=!0,S.add(U),w.type==="coolers"){let W=new Vt(new Ge(w.w,w.h*.75),new qe({color:2306091,roughness:.2,metalness:.4}));W.position.set(w.x,w.h*.55,w.z+w.d/2+.01),a.add(W)}}let J=new we(.22,.26,.24),Ct=new qe({roughness:.7}),It=new Pa(J,Ct,Math.max(1,z.length)),Ot=new de,ie=new Zt,ye=11,it=()=>(ye=ye*16807%2147483647)/2147483647,bt=z.map(()=>it());z.forEach((w,U)=>{ie.setHex(cl[Math.floor(it()*cl.length)]),w.clothes&&ie.multiplyScalar(.7),It.setColorAt(U,ie)}),a.add(It);function kt(w,U){w.group&&(a.remove(w.group),w.group.traverse(_t=>{_t.isMesh&&_t.geometry.dispose()}));let{f:W,side:et}=w,xt=Math.max(.03,n.stock*(U?.12:.85)),Rt=Eu(j,W.d-.1,[.12,.62,1.12,1.57],xt,si(`${n.title}:${W.x}:${W.z}:${et}`));Rt.position.set(W.x+et*.05,0,W.z),Rt.rotation.y=et>0?0:Math.PI,Rt.traverse(_t=>{_t.isMesh&&(_t.receiveShadow=!0)}),a.add(Rt),w.group=Rt,w.done=U}function Mt(){for(let U of X){let W=!!n.isDone(U.zone);U.done!==W&&kt(U,W)}let w=n.stock;z.forEach((U,W)=>{let et=n.isDone(U.zone)?w*.12:w*.85,xt=bt[W]<et;Ot.makeScale(xt?1:0,xt?U.clothes?3:1:0,xt?1:0),Ot.setPosition(U.x,U.y+(U.clothes?0:.13),U.z),It.setMatrixAt(W,Ot)}),It.count=z.length,It.instanceMatrix.needsUpdate=!0,It.instanceColor&&(It.instanceColor.needsUpdate=!0)}Mt();let Yt={box:new qe({color:10255186,roughness:1}),can:new qe({color:9212310,roughness:.5,metalness:.5}),paper:new qe({color:14276300,roughness:1,side:Ce}),cart:new Mr({color:10331306})};for(let w of t.debris){let U,W=si(`${n.title}:d:${w.x.toFixed(2)}:${w.z.toFixed(2)}`);if(w.kind==="box"){U=Ji(w.s>.35?"box_stack":"cardboard_box",W),U.position.set(w.x,0,w.z),U.rotation.y=w.rot||0,S.add(U);continue}if(w.kind==="cart"){U=Ji(p()<.7?"shopping_cart":"basket",W),U.position.set(w.x,0,w.z),U.rotation.set(0,w.rot||0,0),S.add(U);continue}if(w.kind==="paper"){U=Ji("paper_scatter",W),U.position.set(w.x,0,w.z),U.rotation.y=w.rot||0,S.add(U);continue}if(w.kind==="box")U=new Vt(new we(w.s*1.4,w.s,w.s),Yt.box);else if(w.kind==="can")U=new Vt(new $i(.04,.04,.12,8),Yt.can),U.rotation.z=Math.PI/2;else if(w.kind==="cart"){U=new Wt;let et=new Sr(new Tr(new we(.55,.45,.85)),Yt.cart);et.position.y=.2,U.add(et);for(let[xt,Rt]of[[-.22,-.35],[.22,-.35],[-.22,.35],[.22,.35]]){let _t=new Sr(new Tr(new we(.02,.45,.02)),Yt.cart);_t.position.set(xt,-.25,Rt),U.add(_t)}}else U=new Vt(new Ge(.3,.22),Yt.paper),U.rotation.x=-Math.PI/2;U.position.set(w.x,w.kind==="paper"?.01:w.kind==="cart"?.45:(w.s||.1)/2,w.z),U.rotation.y=w.rot||0,S.add(U)}{let w=vo(t,{counter:!0}),U=[],W=(Rt,_t,he)=>!w.some(Qt=>Math.abs(Rt-Qt.x)<Qt.w/2+he&&Math.abs(_t-Qt.z)<Qt.d/2+he)&&!(Math.abs(Rt)<1.6&&_t>-3)&&!U.some(Qt=>Math.hypot(Qt[0]-Rt,Qt[1]-_t)<Qt[2]+he)&&Rt>-c/2+he&&Rt<c/2-he&&_t<-he&&_t>-h+he,et=(Rt,_t=!1)=>{let he=Ji(Rt,Math.floor(p()*1e6)),Qt=Math.min(1.2,(he.userData.radius||.3)+.1);for(let ke=0;ke<30;ke++){let Be=(p()-.5)*(c-2*Qt);_t&&(Be=(p()<.5?-1:1)*(c/2-Qt-.05));let en=-Qt-p()*(h-2*Qt);if(W(Be,en,Qt))return he.position.set(Be,0,en),he.rotation.y=_t?(Be>0?-Math.PI/2:Math.PI/2)+(p()-.5)*.3:p()*Math.PI*2,he.traverse(Qe=>{Qe.isMesh&&(Qe.castShadow=Qt>.25,Qe.receiveShadow=!0)}),S.add(he),U.push([Be,en,Qt]),he}return null},xt={supermarket:[["basket",3],["trash_bag",3],["wet_floor_sign",1],["mop_bucket",1],["pallet",1,!0],["box_stack",2,!0],["trash_pile",1,!0]],convenience:[["trash_bag",1],["basket",1],["cardboard_box",2]],gas:[["trash_bag",1],["traffic_cone",1],["cardboard_box",2]],pharmacy:[["basket",2],["trash_bag",1],["wet_floor_sign",1],["box_stack",1,!0]],hardware:[["pallet",2,!0],["box_stack",2,!0],["traffic_cone",2],["trash_bag",1]],outdoor:[["box_stack",2,!0],["trash_bag",1],["basket",1]],clinic:[["iv_stand",2,!0],["wheelchair",1,!0],["office_chair",2],["medical_cart",1,!0],["trash_bag",1]],hospital:[["gurney",2,!0],["iv_stand",3,!0],["wheelchair",2,!0],["medical_cart",2,!0],["office_chair",1],["trash_pile",1,!0]],fire:[["helmet_rack",1,!0],["hose_reel",1,!0],["locker_row",1,!0],["traffic_cone",2],["fire_extinguisher",1,!0]],house:[["rug",2],["lamp",1,!0],["potted_plant_dead",1,!0],["chair",2],["tv",1,!0],["bookshelf",1,!0],["trash_bag",1],["cardboard_box",1]]};for(let[Rt,_t,he]of xt[t.cat]||xt.house)for(let Qt=0;Qt<_t;Qt++)et(Rt,!!he);for(let Rt of t.fixtures){if(Rt.type==="checkout"){let _t=Ji("register",Math.floor(Rt.x*100));_t.position.set(Rt.x,Rt.h,Rt.z-Rt.d/4),_t.rotation.y=Math.PI/2,S.add(_t)}if(Rt.type==="counter"&&t.cat==="house"){let _t=Ji("kitchen_counter_items",Math.floor(Rt.z*100));_t.position.set(Rt.x,Rt.h,Rt.z),S.add(_t)}}}let re=new qe({color:13620175,roughness:1});for(let w of t.bodies){let U=new Wt,W=new Vt(new we(.42,.2,1.3),re);W.position.set(0,.1,.1);let et=new Vt(new Zi(.15,10,8),re);et.scale.set(1,.7,1.1),et.position.set(0,.12,-.72),U.add(W,et),U.position.set(w.x,w.y||0,w.z),U.rotation.y=(w.rot||0)+Math.PI/2,S.add(U)}b_(S);let jt=new Map,ve=()=>vo(t,{counter:!0});function k(w){let U=yo(si(`place:${w.pid}:${n.title}`)),W=t.spots.find(_t=>_t.zone===w.zone);if(!W)return{x:0,y:0,z:-1};if(W.counter){let _t=t.fixtures.find(he=>he.type==="rx_counter");return{x:_t.x+(U()-.5)*(_t.w-1),y:_t.h,z:_t.z+(U()-.5)*.4}}let et=W.area;if(t.kind==="hall"){if(U()<.2)return{x:W.x+(U()-.5)*1.2,y:0,z:et.z1+1+U()*(et.z2-et.z1-2)};let _t=U()<.5?-1:1,he=[.12,.62,1.12,1.57];return{x:W.x+_t*((et.x2-et.x1)/2+.06),y:he[Math.floor(U()*he.length)],z:et.z1+1+U()*(et.z2-et.z1-2)}}let xt=t.fixtures.filter(_t=>_t.zone===w.zone&&_t.solid&&_t.h<=1.2&&_t.type!=="tub");if(xt.length&&U()<.7){let _t=xt[Math.floor(U()*xt.length)],he=_t.type==="bed"?_t.d:_t.w,Qt=_t.type==="bed"?_t.w:_t.d;return{x:_t.x+(U()-.5)*Math.max(0,he-.4),y:_t.h+(_t.type==="bed"?.15:0),z:_t.z+(U()-.5)*Math.max(0,Qt-.4)}}let Rt=ve();for(let _t=0;_t<12;_t++){let he=et.x1+.5+U()*(et.x2-et.x1-1),Qt=et.z1+.5+U()*(et.z2-et.z1-1);if(!Rt.some(ke=>Math.abs(he-ke.x)<ke.w/2+.2&&Math.abs(Qt-ke.z)<ke.d/2+.2))return{x:he,y:0,z:Qt}}return{x:W.x,y:0,z:W.z}}let st=1500,T=n.notice?n.notice():{countRadius:0,boxCount:!1,lootGlow:0},ft=new Map,G=w=>w.zone!==ut()&&si(`${w.pid}:box`)%10<3;function ut(){let w=t.spots.find(U=>U.counter);return w?w.zone:-1}function ot(w){let U=yo(si(`box:${w}:${n.title}`)),W=t.spots.find(Rt=>Rt.zone===w),et=W&&W.area;if(!et)return null;let xt=ve();for(let Rt=0;Rt<16;Rt++){let _t=t.kind==="hall"?W.x+(U()-.5)*Math.max(.2,et.x2-et.x1-1.4):et.x1+.5+U()*(et.x2-et.x1-1),he=et.z1+.8+U()*(et.z2-et.z1-1.6);if(!xt.some(Qt=>Math.abs(_t-Qt.x)<Qt.w/2+.3&&Math.abs(he-Qt.z)<Qt.d/2+.3))return{x:_t,z:he,rot:U()*Math.PI}}return null}function At(w){let U=`c${w}`;if(ft.has(U))return ft.get(U);let W=ot(w);if(!W)return ft.set(U,null),null;let et=Ji("cardboard_box",si(`${U}:${n.title}`));et.position.set(W.x,0,W.z),et.rotation.y=W.rot,a.add(et);let xt=et.userData.height||.35,Rt={cid:U,zone:w,obj:et,x:W.x,y:xt/2,z:W.z,r:et.userData.radius||.3,opened:n.isOpened(U),container:!0};return Rt.opened&&I(Rt),ft.set(U,Rt),Rt}function dt(w){if(!T.boxCount)return"look inside";let U=n.items().filter(W=>W.zone===w.zone&&G(W)).length;return U?`something inside: ${U} item${U>1?"s":""}`:"it sounds empty"}function I(w){w.obj.scale.y=.85,w.obj.rotation.z=.06}function M(){for(let w of n.items()){if(jt.has(w.pid))continue;let U=null;if(G(w)){let xt=At(w.zone);if(xt&&!xt.opened)continue;if(xt){let Rt=si(w.pid)%360;U={x:xt.x+Math.cos(Rt)*(xt.r+.15),y:0,z:xt.z+Math.sin(Rt)*(xt.r+.15)}}}U=U||k(w);let W=Mu(w.item,si(w.pid));W.position.set(U.x,U.y,U.z),W.rotation.y=si(w.pid)%628/100,W.traverse(xt=>{xt.isMesh&&xt.material&&xt.material.emissive&&(xt.material=xt.material.clone(),xt.material.emissive.setHex(T.lootGlow>=1?4868682:T.lootGlow>0?3552822:2236962))}),a.add(W);let et=W.userData.height||.2;jt.set(w.pid,{it:w,obj:W,x:U.x,y:U.y+et/2,z:U.z,r:W.userData.radius||.15})}}M();function H(w){let U=jt.get(w);U&&(a.remove(U.obj),jt.delete(w))}let tt=new Mr({color:g_,transparent:!0,opacity:.9,depthTest:!1}),ht=new Sr(new Tr(new we(1,1,1)),tt);ht.renderOrder=10,ht.visible=!1,a.add(ht);let at=2.3;function zt(w,U){let W=U.x-w.x,et=U.y-w.y,xt=U.z-w.z,Rt=Math.max(0,1-.25/Math.max(.25,Math.hypot(W,et,xt)));for(let _t of vo(t,{counter:n.isCounterOpen()})){let he=[_t.x-_t.w/2+.02,0,_t.z-_t.d/2+.02],Qt=[_t.x+_t.w/2-.02,(_t.h||9)-.02,_t.z+_t.d/2-.02],ke=[w.x,w.y,w.z],Be=[W,et,xt],en=0,Qe=Rt,Vn=!0;for(let gn=0;gn<3&&Vn;gn++){if(Math.abs(Be[gn])<1e-9){(ke[gn]<he[gn]||ke[gn]>Qt[gn])&&(Vn=!1);continue}let Wn=(he[gn]-ke[gn])/Be[gn],Pi=(Qt[gn]-ke[gn])/Be[gn];Wn>Pi&&([Wn,Pi]=[Pi,Wn]),en=Math.max(en,Wn),Qe=Math.min(Qe,Pi),en>Qe&&(Vn=!1)}if(Vn)return!0}return!1}function Pt(w){let U=[];for(let W of jt.values()){let et=Math.hypot(W.x-w.x,W.y-w.y,W.z-w.z);et<=at&&!zt(w,W)&&U.push({o:W,d:et})}return U.sort((W,et)=>W.d-et.d)}function Ft(w,U){let W=null,et=[...ft.values()].filter(xt=>xt&&!xt.opened).map(xt=>({o:xt,d:Math.hypot(xt.x-w.x,xt.y-w.y,xt.z-w.z)})).filter(xt=>xt.d<=at&&!zt(w,xt.o));for(let{o:xt,d:Rt}of[...Pt(w),...et]){let _t=xt.x-w.x,he=xt.y-w.y,Qt=xt.z-w.z,ke=(_t*U.x+he*U.y+Qt*U.z)/Math.max(1e-6,Rt),Be=Math.acos(Math.min(1,ke)),en=Math.atan2(xt.r+.12,Rt);Be>Math.max(en,.09)||(!W||Be<W.ang)&&(W={o:xt,ang:Be,d:Rt})}return W?W.o:null}let ne={x:t.start.x,z:t.start.z},pt=t.start.yaw||0,Bt=0,te=0,oe=0,wt="stand",ge=!1,le=!1,Se=!1,F=Po.stand.eye,St=new Set,K=!1,ct=!1,Lt=!1,Nt=0,ae=null,xe=null,tn=!1,Ee=0,Oe={x:0,y:0,id:null,ox:0,oy:0},Tn=null,ds=null,Dr=0,Ke=null,Qn=0;function Ns(){let w=e.clientWidth,U=e.clientHeight;o.setSize(w,U,!1),l.aspect=w/U,l.updateProjectionMatrix()}Ns(),window.addEventListener("resize",Ns);function Qi(){i(".in-status").innerHTML=n.getStatus()}Qi();function Ve(w,U=2600){let W=i(".in-toast");W.textContent=w,W.hidden=!1,clearTimeout(Ve.h),Ve.h=setTimeout(()=>{W.hidden=!0},U)}function Us(w){let U=i(".in-found");if(!w){U.hidden=!0;return}let W=w.items.length?`<ul>${w.items.map(et=>`<li>${ji(et)}</li>`).join("")}</ul>`:'<p class="hint">Nothing useful here.</p>';U.innerHTML=`<h4>${ji(w.title)}</h4>${W}
      <p class="hint">${ji(w.note||"")}</p>
      <div class="row">${w.canTake?'<button class="primary" data-in="take">Take all that fits (F)</button>':""}<button data-in="close">Close</button></div>`,U.hidden=!1}let yi=()=>!i(".in-found").hidden;function Bn(){let w=i(".in-stance"),U=[];wt!=="stand"&&U.push(wt==="crouch"?"Crouching":"Prone"),le&&wt==="stand"&&U.push("Slow walk"),Se&&U.push("Looking closer"),w.hidden=!U.length,w.textContent=U.join(" \xB7 ")}function Fr(w){let U=i(".in-panel");if(xe===w){Os();return}let W;w==="map"?W=hl():W=n.panel(w),W&&(xe=w,St.clear(),U.innerHTML=`${W}<div class="row"><button data-in="closepanel">Close</button></div>`,U.hidden=!1,document.pointerLockElement===s&&document.exitPointerLock())}function Os(){xe=null,i(".in-panel").hidden=!0}function ps(){if(xe&&xe!=="map"){let w=xe;xe=null,Fr(w)}}function hl(){let U=c+2,W=h+1*2+1.5,et=Je=>(Je+c/2+1).toFixed(2),xt=Je=>(Je+h+1).toFixed(2),Rt=(Je,Nu)=>`<rect class="${Nu}" x="${et(Je.x-Je.w/2)}" y="${xt(Je.z-Je.d/2)}" width="${Je.w.toFixed(2)}" height="${Je.d.toFixed(2)}"/>`,_t=t.walls.map(Je=>Rt(Je,"w")).join(""),he=t.fixtures.filter(Je=>Je.type!=="gate").map(Je=>Rt(Je,"f")).join(""),Qt=t.spots.map(Je=>`<circle class="${n.isDone(Je.zone)?"sd":"s"}" cx="${et(Je.x)}" cy="${xt(Je.z)}" r="0.45"/>`).join(""),ke=Nn.map(Je=>`<circle class="pg" cx="${et(Je.x)}" cy="${xt(Je.z)}" r="0.3"/>`).join(""),Be=Math.sin(pt),en=Math.cos(pt),Qe=+et(ne.x),Vn=+xt(ne.z),gn=`${(Qe-Be*.9).toFixed(2)},${(Vn-en*.9).toFixed(2)}`,Wn=`${(Qe-en*.45).toFixed(2)},${(Vn+Be*.45).toFixed(2)}`,Pi=`${(Qe+en*.45).toFixed(2)},${(Vn-Be*.45).toFixed(2)}`;return`<h4>Floor plan</h4>
      <svg class="in-map" viewBox="0 0 ${U.toFixed(1)} ${W.toFixed(1)}">${he}${_t}${Qt}${ke}
        <polygon class="me" points="${gn} ${Wn} ${Pi}"/>
        <text x="${et(0)}" y="${(h+1+1.2).toFixed(1)}" text-anchor="middle">Door</text></svg>
      <p class="hint">Blue: not searched. Grey: searched. Triangle: you.</p>`}function A(){Nt>.5&&n.onWalk(Nt),Nt=0}let D=null,q="",$=new Set,B=new N,Et=new N;function Dt(w){if(!w)return!1;if(w.container)return ce(w),!1;A();let U=n.onPickUp(w.it.pid);return U.ok?(H(w.it.pid),Ve(`Taken: ${U.name}`,1400)):U.msg&&Ve(U.msg,2400),Mt(),Hn(),ps(),U.ok}function Xt(){if(!(ct||K||Lt)){if(D){Dt(D);return}if(!ae){Ve("Look at an item to take it.",1400);return}if(ae.type==="exit"){mn();return}if(ae.counter&&!n.isCounterOpen()){qt();return}Ve("Look at an item to take it.",1400)}}function qt(){A();let w=n.onCounter();gt&&(gt.visible=!n.isCounterOpen()),Ve(w),Hn()}function ce(w){if(ct||K||Lt||Ke||w.opened)return;ct=!0;let U=i(".in-bar"),W=U.querySelector("i");U.hidden=!1,W.style.width="0%",Ve("Opening the box\u2026",st);let et=performance.now(),xt=()=>{if(Lt)return;let Rt=Math.min(1,(performance.now()-et)/st);if(W.style.width=`${Rt*100}%`,Rt<1){requestAnimationFrame(xt);return}if(U.hidden=!0,ct=!1,A(),!n.onOpenContainer(w.cid))return;w.opened=!0,I(w);let _t=jt.size;M();let he=jt.size-_t;Ve(he?`Inside: ${he} item${he>1?"s":""}.`:"It is empty.",1800),q="",Hn()};xt()}function pe(){if(ct||K||Lt||Ke||D&&D.container)return!1;let w=Pt(l.position);if(!w.length)return!1;let U=i(".in-bar"),W=U.querySelector("i");U.hidden=!1,W.style.width="0%",Ke={t0:performance.now(),n:w.length};let et=()=>{if(!Ke)return;let xt=Math.min(1,(performance.now()-Ke.t0)/Iu);if(W.style.width=`${xt*100}%`,xt<1){Ke.raf=requestAnimationFrame(et);return}Ke=null,U.hidden=!0,Te()};return et(),!0}function Gt(){Ke&&(cancelAnimationFrame(Ke.raf),Ke=null,i(".in-bar").hidden=!0)}function Te(){ct=!0,A();let w=0,U="";for(let{o:W}of Pt(l.position)){let et=n.onPickUp(W.it.pid);if(!et.ok){if(U=et.msg||"",n.isDead())break;continue}H(W.it.pid),w+=1}ct=!1,Ve(w?`You take ${w} item${w>1?"s":""}.${U?" "+U:""}`:U||"Nothing to take.",2600),Mt(),Hn(),ps()}function Ie(){let w=n.onTakeAll();Us(null),w&&Ve(w),Hn(),ps()}function Fe(){if(yi()&&i('[data-in="take"]')){Ie();return}if(D){Dt(D);return}if(n.hasLoot()){Ie();return}if(ae&&ae.type==="exit"){mn();return}if(ae&&ae.counter&&!n.isCounterOpen()){qt();return}Ve("Nothing to take here.",1500)}function bn(){if(!n.hasFlashlight()){Ve("You have no flashlight.");return}let w=n.toggleLight();b(),Qi(),w&&Ve(w,1800)}function Pe(w){let U=n.quickUse(w);U&&Ve(U,3200),Hn(),b(),ps()}function $t(w){let U=performance.now();$t.last&&U-$t.last<700||($t.last=U,Ve(`${w.label}: not yet in the game.`,1800))}let Nn=[],Ae=new $a,zn=new ui(new N(0,1,0),0),ts=new Wa(.15,.24,24);function wn(){Ae.setFromCamera(new vt(0,0),l);let w=new N;if(!Ae.ray.intersectPlane(zn,w)||w.distanceTo(l.position)>25){Ve("Look at the floor to mark it.",1500);return}let U=new Vt(ts,new _n({color:15323030,side:Ce,fog:!1}));U.rotation.x=-Math.PI/2,U.position.set(w.x,.03,w.z),a.add(U),Nn.push({x:w.x,z:w.z,m:U}),Nn.length>5&&a.remove(Nn.shift().m),Ve("Marked.",900)}function ms(){if(!(te>.001||oe!==0)){if(wt!=="stand"){wt="stand",ge=!1,Bn();return}oe=Ru}}function He(){A(),Ve(n.quickSave(),1800)}function ti(){if(A(),!n.canQuickLoad()){Ve("There is no save to load.");return}Gn(!1,"quickload")}function Hn(){n.notice&&(T=n.notice()),ae=void 0,Qi(),n.isDead()&&Gn(!0)}function mn(){A(),Gn(!1)}function Gn(w,U){Lt||(Lt=!0,Gt(),document.pointerLockElement===s&&document.exitPointerLock(),window.removeEventListener("resize",Ns),window.removeEventListener("keydown",Q0,!0),window.removeEventListener("keyup",th,!0),window.removeEventListener("blur",eh),document.removeEventListener("pointerlockchange",nh),o.dispose(),e.remove(),n.onLeave(!!w,U))}function Un(w){K=w,i(".in-pause").hidden=!w,w&&(St.clear(),Gt(),Se=!1)}function es(w,U){switch(w.action){case"jump":return ms();case"stance":return wt=j0(wt),ge=!1,Bn();case"walktoggle":return le=!le,Bn();case"interact":return null;case"context":return Fe();case"flashlight":return bn();case"inventory":case"character":case"map":case"journal":case"objectives":return Fr(w.action);case"quick_med":case"quick_food":case"quick_utility":return Pe(w.action);case"confirm":return yi()&&i('[data-in="take"]')?Ie():xe?Os():Xt();case"quicksave":return He();case"quickload":return ti();case"debug":return tn=!tn,i(".in-debug").hidden=!tn,null;case"ping":return wn();default:return w.ready||$t(w),null}}let Lu=new Set(["move","sprint","crouch"]);function Q0(w){if(Lt)return;let U=w.code;if((["Tab","F5","F9","Space","Backquote","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(U)||w.ctrlKey&&U!=="KeyW")&&w.preventDefault(),U==="Escape"){if(yi()){Us(null);return}if(xe){Os();return}document.pointerLockElement||Un(!K);return}if(K){U==="Enter"&&Un(!1);return}if(U==="CapsLock"){le=!le,Bn();return}let W=Or(U)||(U.startsWith("Arrow")?{action:"move"}:null);if(W&&!(xe&&!["inventory","character","map","journal","objectives","pause","quicksave","quickload","confirm"].includes(W.action)&&!W.action.startsWith("quick"))){if(Lu.has(W.action)){St.add(U),W.action==="crouch"&&!w.repeat&&(ge=!0,wt==="stand"&&(wt="crouch"),Bn());return}if(!w.repeat){if(W.action==="interact"||W.action==="context"){if(D&&D.container&&!K&&!xe){ce(D);return}Qn=performance.now(),pe();return}es(W,w)}}}function th(w){if(St.delete(w.code),w.code==="CapsLock"&&x_){le=!1,Bn();return}let U=Or(w.code);if(U&&(U.action==="crouch"&&ge&&(ge=!1,wt==="crouch"&&(wt="stand"),Bn()),(U.action==="interact"||U.action==="context")&&Qn)){let W=!!Ke||performance.now()-Qn<300;Qn=0,Ke&&Gt(),W&&!K&&!xe&&(U.action==="interact"?Xt():Fe())}}function eh(){St.clear(),Gt()}function nh(){!document.pointerLockElement&&!Lt&&!r&&!xe&&!yi()&&Un(!0)}window.addEventListener("keydown",Q0,!0),window.addEventListener("keyup",th,!0),window.addEventListener("blur",eh),document.addEventListener("pointerlockchange",nh);function ih(){if(!(r||K||xe||!s.requestPointerLock))try{let w=s.requestPointerLock();w&&w.catch&&w.catch(()=>{})}catch{}}s.addEventListener("contextmenu",w=>w.preventDefault()),s.addEventListener("mousedown",w=>{if(K||r)return;let U=document.pointerLockElement===s;if(w.button===1){w.preventDefault(),es(Or("Mouse1"));return}if(w.button===2){Se=!0,Bn();return}if(w.button===0){if(!U){ih();return}es(Or("Mouse0"))}}),window.addEventListener("mouseup",w=>{w.button===2&&Se&&(Se=!1,Bn())}),s.addEventListener("wheel",w=>{w.preventDefault(),K||es(Or("Wheel"))},{passive:!1}),s.addEventListener("mousemove",w=>{K||(document.pointerLockElement===s||w.buttons===1)&&sh(w.movementX,w.movementY)});function sh(w,U){let W=Se?.45:1;pt-=w*.0024*W,Bt=Math.max(-1.3,Math.min(1.3,Bt-U*.0024*W))}e.addEventListener("click",w=>{let U=w.target.closest("[data-in],[data-use],[data-tk]");if(!U)return;if(U.dataset.use){Ve(n.useItem(U.dataset.use,U.dataset.verb)||"",3e3),Hn(),b(),ps();return}if(U.dataset.tk){let et=ll.find(xt=>xt.action===U.dataset.tk);if(et.action==="stance"){wt=j0(wt),Bn(),U.textContent=wt==="stand"?"CROUCH":wt==="crouch"?"PRONE":"STAND";return}es(et);return}let W=U.dataset.in;W==="resume"?(Un(!1),ih()):W==="leave"?mn():W==="take"?Ie():W==="close"?Us(null):W==="closepanel"&&Os()});let Lo=i(".in-use");Lo.addEventListener("pointerdown",w=>{if(w.preventDefault(),D&&D.container){ce(D);return}Qn=performance.now(),pe()});let fl=w=>{if(!Qn)return;let U=w&&w.type==="pointerup"&&(!!Ke||performance.now()-Qn<300);Qn=0,Ke&&Gt(),U&&(yi()&&i('[data-in="take"]')?Ie():Xt())};Lo.addEventListener("pointerup",fl),Lo.addEventListener("pointerleave",fl),Lo.addEventListener("pointercancel",fl),i(".in-menu").addEventListener("click",()=>Un(!0)),s.addEventListener("touchstart",w=>{for(let U of w.changedTouches)if(U.clientX<e.clientWidth/2&&Oe.id===null){Oe.id=U.identifier,Oe.ox=U.clientX,Oe.oy=U.clientY;let W=i(".in-stick");W.style.left=`${U.clientX-50}px`,W.style.top=`${U.clientY-50}px`,W.classList.add("on")}else Tn===null&&(Tn=U.identifier,ds={x:U.clientX,y:U.clientY});w.preventDefault()},{passive:!1}),s.addEventListener("touchmove",w=>{for(let U of w.changedTouches)if(U.identifier===Oe.id){let W=U.clientX-Oe.ox,et=U.clientY-Oe.oy,xt=Math.min(45,Math.hypot(W,et)),Rt=Math.atan2(et,W);Oe.x=Math.cos(Rt)*xt/45,Oe.y=Math.sin(Rt)*xt/45,i(".in-stick i").style.transform=`translate(${Oe.x*30}px, ${Oe.y*30}px)`}else U.identifier===Tn&&(sh((U.clientX-ds.x)*1.6,(U.clientY-ds.y)*1.6),ds={x:U.clientX,y:U.clientY});w.preventDefault()},{passive:!1});let rh=w=>{for(let U of w.changedTouches)U.identifier===Oe.id?(Oe.id=null,Oe.x=Oe.y=0,i(".in-stick").classList.remove("on"),i(".in-stick i").style.transform=""):U.identifier===Tn&&(Tn=null)};s.addEventListener("touchend",rh),s.addEventListener("touchcancel",rh);let oh=performance.now(),ah=new N;function No(w){if(Lt)return;let U=Math.min(.1,(w-oh)/1e3);if(oh=w,Ee=Ee*.9+(U>0?1/U:0)*.1,!K&&!ct&&!xe&&!Ke){let Qt=0,ke=0;(St.has("KeyW")||St.has("ArrowUp"))&&(ke-=1),(St.has("KeyS")||St.has("ArrowDown"))&&(ke+=1),(St.has("KeyA")||St.has("ArrowLeft"))&&(Qt-=1),(St.has("KeyD")||St.has("ArrowRight"))&&(Qt+=1),Qt+=Oe.x,ke+=Oe.y;let Be=Math.hypot(Qt,ke);if(Be>.05){let en=St.has("ShiftLeft")||St.has("ShiftRight"),Qe=Pu({stance:wt,sprint:en,slowWalk:le})*Math.min(1,Be)/Be,Vn=(Qt*Math.cos(pt)+ke*Math.sin(pt))*Qe*U,gn=(-Qt*Math.sin(pt)+ke*Math.cos(pt))*Qe*U,Wn=jf(t,ne.x+Vn,ne.z+gn,.3,{counter:n.isCounterOpen()});Wn.z=Math.min(Wn.z,.2);let Pi=Math.hypot(Wn.x-ne.x,Wn.z-ne.z);if(Nt+=Pi,te===0&&(Dr+=Pi*(wt==="stand"?3.2:2)),ne.x=Wn.x,ne.z=Wn.z,Nt>=__&&(A(),Qi(),n.isDead())){Gn(!0);return}}}(oe!==0||te>0)&&(oe-=Cu*U,te=Math.max(0,te+oe*U),te===0&&(oe=0));let et=Po[wt].eye;F+=(et-F)*Math.min(1,U*10);let xt=Se?40:72;Math.abs(l.fov-xt)>.1&&(l.fov+=(xt-l.fov)*Math.min(1,U*12),l.updateProjectionMatrix()),l.position.set(ne.x,F+te+Math.sin(Dr)*(wt==="stand"?.03:.015),ne.z),l.rotation.order="YXZ",l.rotation.set(Bt,pt,0),l.getWorldDirection(ah);let Rt=K||xe?null:Ft(l.position,ah),_t=Qf(t,ne.x,ne.z,pt);_t&&_t.type==="search"&&_t.dist===0&&!$.has(_t.zone)&&($.add(_t.zone),n.onSeeZone(_t.zone),Qi()),_t&&_t.type==="search"&&!(_t.counter&&!n.isCounterOpen())&&(_t=null);let he=(Rt?`i:${Rt.container?Rt.cid:Rt.it.pid}`:"")+(_t?`${_t.type}:${_t.zone}`:"");if(ae===void 0||he!==q||No.n++%20===0){ae=_t,D=Rt,q=he;let Qt=i(".in-prompt"),ke=Pt(l.position).length;if(Rt){Qt.hidden=!1,Qt.innerHTML=Rt.container?`<kbd>${r?"USE":"E"}</kbd> Open the box <small>${dt(Rt)} \xB7 1 min</small>`:n.describeItem(Rt.it,ke,r),ht.visible=!0;let Qe=new $n().setFromObject(Rt.obj);Qe.getSize(B),Qe.getCenter(Et),ht.scale.set(B.x+.04,B.y+.04,B.z+.04),ht.position.copy(Et),i(".in-cross").classList.add("on")}else ht.visible=!1,i(".in-cross").classList.remove("on"),_t?(Qt.hidden=!1,Qt.innerHTML=n.describe(_t)):Qt.hidden=!0;let Be=T.countRadius,en=i(".in-notice");if(Be>0){let Qe=0;for(let Vn of jt.values())Math.hypot(Vn.x-l.position.x,Vn.z-l.position.z)<Be&&Qe++;en.hidden=Qe===0,en.textContent=`You notice ${Qe} item${Qe===1?"":"s"} near you`}else en.hidden=!0;tn&&(i(".in-debug").textContent=`x ${ne.x.toFixed(1)}  z ${ne.z.toFixed(1)}  yaw ${(pt*57.3%360).toFixed(0)}\xB0  ${wt}  ${Ee.toFixed(0)} fps  ${(1e3/Math.max(1,Ee)).toFixed(1)} ms  ${o.info.render.calls} calls  ${(o.info.render.triangles/1e3).toFixed(0)}k tris  ${o.info.memory.geometries} geo  ${o.info.memory.textures} tex  q:${m}`)}x.update(U,l.position);for(let Qt of X){if(!Qt.group)continue;let ke=Math.max(0,Math.abs(l.position.z-Qt.f.z)-Qt.f.d/2),Be=l.position.x-Qt.f.x,en=ke===0;Qt.group.visible=en?Be*Qt.side>0&&Math.abs(Be)<3.2:Math.hypot(Be,ke)<(m==="high"?11:8)}for(let Qt of jt.values())Qt.obj.visible=Math.hypot(Qt.x-l.position.x,Qt.z-l.position.z)<lt;o.render(a,l),requestAnimationFrame(No)}return No.n=0,requestAnimationFrame(No),window.__llInside={plan:t,pos:ne,look:(w,U=0)=>{pt=w,Bt=U},reach:()=>Pt(l.position).map(({o:w})=>w.it.zone),boxes:()=>[...ft.values()].filter(Boolean).map(w=>({cid:w.cid,x:w.x,y:w.y,z:w.z,opened:w.opened})),census:()=>{let w={};return a.traverse(U=>{if(U.isMesh||U.isPoints||U.isLine||U.isSprite){let W=U;for(;W.parent&&W.parent!==a;)W=W.parent;let et=W.name||W.type;w[et]=(w[et]||0)+1}}),Object.entries(w).sort((U,W)=>W[1]-U[1]).slice(0,25).map(U=>U.join(":")).join(" ")},items:()=>[...jt.values()].map(w=>({pid:w.it.pid,id:w.it.item,zone:w.it.zone,x:w.x,y:w.y,z:w.z})),state:()=>({stance:wt,feet:te,slowWalk:le,aiming:Se,panel:xe,fov:l.fov,light:g?g.isOn():null,quality:m,info:()=>({calls:o.info.render.calls,tris:o.info.render.triangles})})},{close:()=>mn()}}function b_(n){n.updateMatrixWorld(!0);let t=new Map,e=[];n.traverse(i=>{if(!i.isMesh||i.isInstancedMesh||Array.isArray(i.material)){(i.isLine||i.isPoints||i.isSprite||i.isInstancedMesh)&&e.push(i);return}let s=i.geometry,r=`${i.material.uuid}|${Object.keys(s.attributes).sort().join(",")}|${i.castShadow?1:0}`,o=t.get(r);o||t.set(r,o={mat:i.material,cast:i.castShadow,geos:[]});let a=s.index?s.toNonIndexed():s.clone();a.applyMatrix4(i.matrixWorld),o.geos.push(a)});for(let i of e)i.updateMatrixWorld(!0),i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale);n.clear();for(let i of e)n.add(i);for(let i of t.values()){let s=i.geos.length===1?i.geos[0]:J0(i.geos);if(!s)continue;let r=new Vt(s,i.mat);r.castShadow=i.cast,r.receiveShadow=!0,n.add(r)}}function M_(){let n=[];for(let t of ll){let e=n.find(i=>i.name===t.group);e||n.push(e={name:t.group,rows:[]}),e.rows.push(t)}return n.map(t=>`<div class="kg"><h5>${ji(t.name)}</h5>${t.rows.map(e=>`<div class="kr ${e.ready?"":"no"}"><kbd>${ji(e.show)}</kbd><span>${ji(e.label)}</span></div>`).join("")}</div>`).join("")}function S_(n,t){let e=new Wt;if(n.type==="clothes"){let o=new Vt(new we(.05,.05,n.d),t);o.position.y=n.h,e.add(o);for(let a of[-n.d/2+.1,n.d/2-.1]){let l=new Vt(new we(.06,n.h,.06),t);l.position.set(0,n.h/2,a),e.add(l)}}else{let o=new Vt(new we(.06,n.h,n.d),t);o.position.y=n.h/2,e.add(o);for(let a of[.1,.6,1.1,1.55,1.98]){let l=new Vt(new we(n.w,.04,n.d),t);l.position.y=a,e.add(l)}for(let a of[-n.d/2,n.d/2]){let l=new Vt(new we(n.w,n.h,.05),t);l.position.set(0,n.h/2,a),e.add(l)}}let i=[];e.children.forEach(o=>{o.updateMatrix();let a=o.geometry.clone();a.applyMatrix4(o.matrix),i.push(a)});let s=new Vt(J0(i.map(o=>o.toNonIndexed())),t),r=new Wt;return r.add(s),r.position.set(n.x,0,n.z),r}window.LLInside3D={openInside:v_};})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
