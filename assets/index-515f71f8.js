(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Al="157",Ur={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ir={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ad=0,uc=1,od=2,lh=1,ch=2,Mi=3,Ki=0,pn=1,Ti=2,Wi=0,is=1,el=2,hc=3,fc=4,ld=5,Jr=100,cd=101,ud=102,dc=103,pc=104,hd=200,fd=201,dd=202,pd=203,uh=204,hh=205,md=206,_d=207,gd=208,vd=209,xd=210,yd=0,Md=1,Sd=2,nl=3,Ed=4,Td=5,bd=6,wd=7,Rl=0,Ad=1,Rd=2,Xi=0,Cd=1,Pd=2,Ld=3,Dd=4,Ud=5,fh=300,ls=301,cs=302,il=303,rl=304,Ja=306,sl=1e3,Yn=1001,al=1002,fn=1003,mc=1004,fo=1005,In=1006,Id=1007,Vs=1008,qi=1009,Od=1010,Nd=1011,Cl=1012,dh=1013,zi=1014,ki=1015,Ws=1016,ph=1017,mh=1018,gr=1020,Fd=1021,jn=1023,Bd=1024,zd=1025,vr=1026,us=1027,kd=1028,_h=1029,Gd=1030,gh=1031,vh=1033,po=33776,mo=33777,_o=33778,go=33779,_c=35840,gc=35841,vc=35842,xc=35843,Hd=36196,yc=37492,Mc=37496,Sc=37808,Ec=37809,Tc=37810,bc=37811,wc=37812,Ac=37813,Rc=37814,Cc=37815,Pc=37816,Lc=37817,Dc=37818,Uc=37819,Ic=37820,Oc=37821,vo=36492,Nc=36494,Fc=36495,Vd=36283,Bc=36284,zc=36285,kc=36286,xh=3e3,xr=3001,Wd=3200,Xd=3201,yh=0,qd=1,On="",Ze="srgb",wi="srgb-linear",Pl="display-p3",Qa="display-p3-linear",Fa="linear",ye="srgb",Ba="rec709",za="p3",xo=7680,Yd=519,jd=512,Kd=513,Zd=514,$d=515,Jd=516,Qd=517,tp=518,ep=519,Gc=35044,Hc="300 es",ol=1035,bi=2e3,ka=2001;class Rr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}}const tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Vc=1234567;const Fs=Math.PI/180,Xs=180/Math.PI;function xs(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(tn[r&255]+tn[r>>8&255]+tn[r>>16&255]+tn[r>>24&255]+"-"+tn[t&255]+tn[t>>8&255]+"-"+tn[t>>16&15|64]+tn[t>>24&255]+"-"+tn[e&63|128]+tn[e>>8&255]+"-"+tn[e>>16&255]+tn[e>>24&255]+tn[n&255]+tn[n>>8&255]+tn[n>>16&255]+tn[n>>24&255]).toLowerCase()}function nn(r,t,e){return Math.max(t,Math.min(e,r))}function Ll(r,t){return(r%t+t)%t}function np(r,t,e,n,i){return n+(r-t)*(i-n)/(e-t)}function ip(r,t,e){return r!==t?(e-r)/(t-r):0}function Bs(r,t,e){return(1-e)*r+e*t}function rp(r,t,e,n){return Bs(r,t,1-Math.exp(-e*n))}function sp(r,t=1){return t-Math.abs(Ll(r,t*2)-t)}function ap(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function op(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function lp(r,t){return r+Math.floor(Math.random()*(t-r+1))}function cp(r,t){return r+Math.random()*(t-r)}function up(r){return r*(.5-Math.random())}function hp(r){r!==void 0&&(Vc=r);let t=Vc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function fp(r){return r*Fs}function dp(r){return r*Xs}function ll(r){return(r&r-1)===0&&r!==0}function pp(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Ga(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function mp(r,t,e,n,i){const s=Math.cos,o=Math.sin,a=s(e/2),l=o(e/2),c=s((t+n)/2),u=o((t+n)/2),h=s((t-n)/2),f=o((t-n)/2),p=s((n-t)/2),g=o((n-t)/2);switch(i){case"XYX":r.set(a*u,l*h,l*f,a*c);break;case"YZY":r.set(l*f,a*u,l*h,a*c);break;case"ZXZ":r.set(l*h,l*f,a*u,a*c);break;case"XZX":r.set(a*u,l*g,l*p,a*c);break;case"YXY":r.set(l*p,a*u,l*g,a*c);break;case"ZYZ":r.set(l*g,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Qr(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function un(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const _p={DEG2RAD:Fs,RAD2DEG:Xs,generateUUID:xs,clamp:nn,euclideanModulo:Ll,mapLinear:np,inverseLerp:ip,lerp:Bs,damp:rp,pingpong:sp,smoothstep:ap,smootherstep:op,randInt:lp,randFloat:cp,randFloatSpread:up,seededRandom:hp,degToRad:fp,radToDeg:dp,isPowerOfTwo:ll,ceilPowerOfTwo:pp,floorPowerOfTwo:Ga,setQuaternionFromProperEuler:mp,normalize:un,denormalize:Qr};class Yt{constructor(t=0,e=0){Yt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(nn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $t{constructor(t,e,n,i,s,o,a,l,c){$t.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c)}set(t,e,n,i,s,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=i,u[2]=a,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],p=n[5],g=n[8],_=i[0],m=i[3],d=i[6],T=i[1],v=i[4],y=i[7],S=i[2],R=i[5],b=i[8];return s[0]=o*_+a*T+l*S,s[3]=o*m+a*v+l*R,s[6]=o*d+a*y+l*b,s[1]=c*_+u*T+h*S,s[4]=c*m+u*v+h*R,s[7]=c*d+u*y+h*b,s[2]=f*_+p*T+g*S,s[5]=f*m+p*v+g*R,s[8]=f*d+p*y+g*b,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,f=a*l-u*s,p=c*s-o*l,g=e*h+n*f+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=h*_,t[1]=(i*c-u*n)*_,t[2]=(a*n-i*o)*_,t[3]=f*_,t[4]=(u*e-i*l)*_,t[5]=(i*s-a*e)*_,t[6]=p*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(yo.makeScale(t,e)),this}rotate(t){return this.premultiply(yo.makeRotation(-t)),this}translate(t,e){return this.premultiply(yo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const yo=new $t;function Mh(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function qs(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function gp(){const r=qs("canvas");return r.style.display="block",r}const Wc={};function zs(r){r in Wc||(Wc[r]=!0,console.warn(r))}const Xc=new $t().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),qc=new $t().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),sa={[wi]:{transfer:Fa,primaries:Ba,toReference:r=>r,fromReference:r=>r},[Ze]:{transfer:ye,primaries:Ba,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[Qa]:{transfer:Fa,primaries:za,toReference:r=>r.applyMatrix3(qc),fromReference:r=>r.applyMatrix3(Xc)},[Pl]:{transfer:ye,primaries:za,toReference:r=>r.convertSRGBToLinear().applyMatrix3(qc),fromReference:r=>r.applyMatrix3(Xc).convertLinearToSRGB()}},vp=new Set([wi,Qa]),ce={enabled:!0,_workingColorSpace:wi,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(r){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!r},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!vp.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,t,e){if(this.enabled===!1||t===e||!t||!e)return r;const n=sa[t].toReference,i=sa[e].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,t){return this.convert(r,this._workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this._workingColorSpace)},getPrimaries:function(r){return sa[r].primaries},getTransfer:function(r){return r===On?Fa:sa[r].transfer}};function rs(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Mo(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Or;class Sh{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Or===void 0&&(Or=qs("canvas")),Or.width=t.width,Or.height=t.height;const n=Or.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Or}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=qs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=rs(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(rs(e[n]/255)*255):e[n]=rs(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let xp=0;class Eh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xp++}),this.uuid=xs(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(So(i[o].image)):s.push(So(i[o]))}else s=So(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function So(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Sh.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let yp=0;class mn extends Rr{constructor(t=mn.DEFAULT_IMAGE,e=mn.DEFAULT_MAPPING,n=Yn,i=Yn,s=In,o=Vs,a=jn,l=qi,c=mn.DEFAULT_ANISOTROPY,u=On){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yp++}),this.uuid=xs(),this.name="",this.source=new Eh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Yt(0,0),this.repeat=new Yt(1,1),this.center=new Yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(zs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===xr?Ze:On),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==fh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case sl:t.x=t.x-Math.floor(t.x);break;case Yn:t.x=t.x<0?0:1;break;case al:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case sl:t.y=t.y-Math.floor(t.y);break;case Yn:t.y=t.y<0?0:1;break;case al:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return zs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ze?xr:xh}set encoding(t){zs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===xr?Ze:On}}mn.DEFAULT_IMAGE=null;mn.DEFAULT_MAPPING=fh;mn.DEFAULT_ANISOTROPY=1;class we{constructor(t=0,e=0,n=0,i=1){we.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],g=l[9],_=l[2],m=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(c+1)/2,y=(p+1)/2,S=(d+1)/2,R=(u+f)/4,b=(h+_)/4,U=(g+m)/4;return v>y&&v>S?v<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(v),i=R/n,s=b/n):y>S?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=R/i,s=U/i):S<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(S),n=b/s,i=U/s),this.set(n,i,s,e),this}let T=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(h-_)/T,this.z=(f-u)/T,this.w=Math.acos((c+p+d-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Mp extends Rr{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new we(0,0,t,e),this.scissorTest=!1,this.viewport=new we(0,0,t,e);const i={width:t,height:e,depth:1};n.encoding!==void 0&&(zs("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===xr?Ze:On),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:In,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new mn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Eh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Tr extends Mp{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Th extends mn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=fn,this.minFilter=fn,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Sp extends mn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=fn,this.minFilter=fn,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zi{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=s[o+0],p=s[o+1],g=s[o+2],_=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=f,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(h!==_||l!==f||c!==p||u!==g){let m=1-a;const d=l*f+c*p+u*g+h*_,T=d>=0?1:-1,v=1-d*d;if(v>Number.EPSILON){const S=Math.sqrt(v),R=Math.atan2(S,d*T);m=Math.sin(m*R)/S,a=Math.sin(a*R)/S}const y=a*T;if(l=l*m+f*y,c=c*m+p*y,u=u*m+g*y,h=h*m+_*y,m===1-a){const S=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=S,c*=S,u*=S,h*=S}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[o],f=s[o+1],p=s[o+2],g=s[o+3];return t[e]=a*g+u*h+l*p-c*f,t[e+1]=l*g+u*f+c*h-a*p,t[e+2]=c*g+u*p+a*f-l*h,t[e+3]=u*g-a*h-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(s/2),f=l(n/2),p=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"YXZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"ZXY":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"ZYX":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"YZX":this._x=f*u*h+c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h-f*p*g;break;case"XZY":this._x=f*u*h-c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=n+a+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-i)*p}else if(n>a&&n>h){const p=2*Math.sqrt(1+n-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(s+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-n-h);this._w=(s-c)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-n-a);this._w=(o-i)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(nn(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*i+e*this._y,this._z=p*s+e*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(s),n*Math.cos(s),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(t=0,e=0,n=0){F.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Yc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Yc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=l*e+o*i-a*n,u=l*n+a*e-s*i,h=l*i+s*n-o*e,f=-s*e-o*n-a*i;return this.x=c*l+f*-s+u*-a-h*-o,this.y=u*l+f*-o+h*-s-c*-a,this.z=h*l+f*-a+c*-o-u*-s,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Eo.copy(this).projectOnVector(t),this.sub(Eo)}reflect(t){return this.sub(Eo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(nn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Eo=new F,Yc=new Zi;class ta{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(mi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(mi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=mi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){if(t.updateWorldMatrix(!1,!1),t.boundingBox!==void 0)t.boundingBox===null&&t.computeBoundingBox(),Nr.copy(t.boundingBox),Nr.applyMatrix4(t.matrixWorld),this.union(Nr);else{const i=t.geometry;if(i!==void 0)if(e&&i.attributes!==void 0&&i.attributes.position!==void 0){const s=i.attributes.position;for(let o=0,a=s.count;o<a;o++)mi.fromBufferAttribute(s,o).applyMatrix4(t.matrixWorld),this.expandByPoint(mi)}else i.boundingBox===null&&i.computeBoundingBox(),Nr.copy(i.boundingBox),Nr.applyMatrix4(t.matrixWorld),this.union(Nr)}const n=t.children;for(let i=0,s=n.length;i<s;i++)this.expandByObject(n[i],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,mi),mi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(As),aa.subVectors(this.max,As),Fr.subVectors(t.a,As),Br.subVectors(t.b,As),zr.subVectors(t.c,As),Ui.subVectors(Br,Fr),Ii.subVectors(zr,Br),rr.subVectors(Fr,zr);let e=[0,-Ui.z,Ui.y,0,-Ii.z,Ii.y,0,-rr.z,rr.y,Ui.z,0,-Ui.x,Ii.z,0,-Ii.x,rr.z,0,-rr.x,-Ui.y,Ui.x,0,-Ii.y,Ii.x,0,-rr.y,rr.x,0];return!To(e,Fr,Br,zr,aa)||(e=[1,0,0,0,1,0,0,0,1],!To(e,Fr,Br,zr,aa))?!1:(oa.crossVectors(Ui,Ii),e=[oa.x,oa.y,oa.z],To(e,Fr,Br,zr,aa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,mi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(mi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(pi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const pi=[new F,new F,new F,new F,new F,new F,new F,new F],mi=new F,Nr=new ta,Fr=new F,Br=new F,zr=new F,Ui=new F,Ii=new F,rr=new F,As=new F,aa=new F,oa=new F,sr=new F;function To(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){sr.fromArray(r,s);const a=i.x*Math.abs(sr.x)+i.y*Math.abs(sr.y)+i.z*Math.abs(sr.z),l=t.dot(sr),c=e.dot(sr),u=n.dot(sr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Ep=new ta,Rs=new F,bo=new F;class to{constructor(t=new F,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Ep.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Rs.subVectors(t,this.center);const e=Rs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Rs,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(bo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Rs.copy(t.center).add(bo)),this.expandByPoint(Rs.copy(t.center).sub(bo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const _i=new F,wo=new F,la=new F,Oi=new F,Ao=new F,ca=new F,Ro=new F;class Dl{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,_i)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=_i.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(_i.copy(this.origin).addScaledVector(this.direction,e),_i.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){wo.copy(t).add(e).multiplyScalar(.5),la.copy(e).sub(t).normalize(),Oi.copy(this.origin).sub(wo);const s=t.distanceTo(e)*.5,o=-this.direction.dot(la),a=Oi.dot(this.direction),l=-Oi.dot(la),c=Oi.lengthSq(),u=Math.abs(1-o*o);let h,f,p,g;if(u>0)if(h=o*l-a,f=o*a-l,g=s*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,p=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(wo).addScaledVector(la,f),p}intersectSphere(t,e){_i.subVectors(t.center,this.origin);const n=_i.dot(this.direction),i=_i.dot(_i)-n*n,s=t.radius*t.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),u>=0?(s=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(s=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),h>=0?(a=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,_i)!==null}intersectTriangle(t,e,n,i,s){Ao.subVectors(e,t),ca.subVectors(n,t),Ro.crossVectors(Ao,ca);let o=this.direction.dot(Ro),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Oi.subVectors(this.origin,t);const l=a*this.direction.dot(ca.crossVectors(Oi,ca));if(l<0)return null;const c=a*this.direction.dot(Ao.cross(Oi));if(c<0||l+c>o)return null;const u=-a*Oi.dot(Ro);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ne{constructor(t,e,n,i,s,o,a,l,c,u,h,f,p,g,_,m){Ne.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c,u,h,f,p,g,_,m)}set(t,e,n,i,s,o,a,l,c,u,h,f,p,g,_,m){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=i,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=g,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ne().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/kr.setFromMatrixColumn(t,0).length(),s=1/kr.setFromMatrixColumn(t,1).length(),o=1/kr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const f=o*u,p=o*h,g=a*u,_=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=p+g*c,e[5]=f-_*c,e[9]=-a*l,e[2]=_-f*c,e[6]=g+p*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*u,p=l*h,g=c*u,_=c*h;e[0]=f+_*a,e[4]=g*a-p,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=p*a-g,e[6]=_+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*u,p=l*h,g=c*u,_=c*h;e[0]=f-_*a,e[4]=-o*h,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*u,e[9]=_-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*u,p=o*h,g=a*u,_=a*h;e[0]=l*u,e[4]=g*c-p,e[8]=f*c+_,e[1]=l*h,e[5]=_*c+f,e[9]=p*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,p=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=_-f*h,e[8]=g*h+p,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=p*h+g,e[10]=f-_*h}else if(t.order==="XZY"){const f=o*l,p=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+_,e[5]=o*u,e[9]=p*h-g,e[2]=g*h-p,e[6]=a*u,e[10]=_*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Tp,t,bp)}lookAt(t,e,n){const i=this.elements;return En.subVectors(t,e),En.lengthSq()===0&&(En.z=1),En.normalize(),Ni.crossVectors(n,En),Ni.lengthSq()===0&&(Math.abs(n.z)===1?En.x+=1e-4:En.z+=1e-4,En.normalize(),Ni.crossVectors(n,En)),Ni.normalize(),ua.crossVectors(En,Ni),i[0]=Ni.x,i[4]=ua.x,i[8]=En.x,i[1]=Ni.y,i[5]=ua.y,i[9]=En.y,i[2]=Ni.z,i[6]=ua.z,i[10]=En.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],p=n[13],g=n[2],_=n[6],m=n[10],d=n[14],T=n[3],v=n[7],y=n[11],S=n[15],R=i[0],b=i[4],U=i[8],x=i[12],C=i[1],X=i[5],J=i[9],Q=i[13],I=i[2],H=i[6],$=i[10],Y=i[14],at=i[3],nt=i[7],tt=i[11],B=i[15];return s[0]=o*R+a*C+l*I+c*at,s[4]=o*b+a*X+l*H+c*nt,s[8]=o*U+a*J+l*$+c*tt,s[12]=o*x+a*Q+l*Y+c*B,s[1]=u*R+h*C+f*I+p*at,s[5]=u*b+h*X+f*H+p*nt,s[9]=u*U+h*J+f*$+p*tt,s[13]=u*x+h*Q+f*Y+p*B,s[2]=g*R+_*C+m*I+d*at,s[6]=g*b+_*X+m*H+d*nt,s[10]=g*U+_*J+m*$+d*tt,s[14]=g*x+_*Q+m*Y+d*B,s[3]=T*R+v*C+y*I+S*at,s[7]=T*b+v*X+y*H+S*nt,s[11]=T*U+v*J+y*$+S*tt,s[15]=T*x+v*Q+y*Y+S*B,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],p=t[14],g=t[3],_=t[7],m=t[11],d=t[15];return g*(+s*l*h-i*c*h-s*a*f+n*c*f+i*a*p-n*l*p)+_*(+e*l*p-e*c*f+s*o*f-i*o*p+i*c*u-s*l*u)+m*(+e*c*h-e*a*p-s*o*h+n*o*p+s*a*u-n*c*u)+d*(-i*a*u-e*l*h+e*a*f+i*o*h-n*o*f+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],p=t[11],g=t[12],_=t[13],m=t[14],d=t[15],T=h*m*c-_*f*c+_*l*p-a*m*p-h*l*d+a*f*d,v=g*f*c-u*m*c-g*l*p+o*m*p+u*l*d-o*f*d,y=u*_*c-g*h*c+g*a*p-o*_*p-u*a*d+o*h*d,S=g*h*l-u*_*l-g*a*f+o*_*f+u*a*m-o*h*m,R=e*T+n*v+i*y+s*S;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/R;return t[0]=T*b,t[1]=(_*f*s-h*m*s-_*i*p+n*m*p+h*i*d-n*f*d)*b,t[2]=(a*m*s-_*l*s+_*i*c-n*m*c-a*i*d+n*l*d)*b,t[3]=(h*l*s-a*f*s-h*i*c+n*f*c+a*i*p-n*l*p)*b,t[4]=v*b,t[5]=(u*m*s-g*f*s+g*i*p-e*m*p-u*i*d+e*f*d)*b,t[6]=(g*l*s-o*m*s-g*i*c+e*m*c+o*i*d-e*l*d)*b,t[7]=(o*f*s-u*l*s+u*i*c-e*f*c-o*i*p+e*l*p)*b,t[8]=y*b,t[9]=(g*h*s-u*_*s-g*n*p+e*_*p+u*n*d-e*h*d)*b,t[10]=(o*_*s-g*a*s+g*n*c-e*_*c-o*n*d+e*a*d)*b,t[11]=(u*a*s-o*h*s-u*n*c+e*h*c+o*n*p-e*a*p)*b,t[12]=S*b,t[13]=(u*_*i-g*h*i+g*n*f-e*_*f-u*n*m+e*h*m)*b,t[14]=(g*a*i-o*_*i-g*n*l+e*_*l+o*n*m-e*a*m)*b,t[15]=(o*h*i-u*a*i+u*n*l-e*h*l-o*n*f+e*a*f)*b,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,u=o+o,h=a+a,f=s*c,p=s*u,g=s*h,_=o*u,m=o*h,d=a*h,T=l*c,v=l*u,y=l*h,S=n.x,R=n.y,b=n.z;return i[0]=(1-(_+d))*S,i[1]=(p+y)*S,i[2]=(g-v)*S,i[3]=0,i[4]=(p-y)*R,i[5]=(1-(f+d))*R,i[6]=(m+T)*R,i[7]=0,i[8]=(g+v)*b,i[9]=(m-T)*b,i[10]=(1-(f+_))*b,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=kr.set(i[0],i[1],i[2]).length();const o=kr.set(i[4],i[5],i[6]).length(),a=kr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],Wn.copy(this);const c=1/s,u=1/o,h=1/a;return Wn.elements[0]*=c,Wn.elements[1]*=c,Wn.elements[2]*=c,Wn.elements[4]*=u,Wn.elements[5]*=u,Wn.elements[6]*=u,Wn.elements[8]*=h,Wn.elements[9]*=h,Wn.elements[10]*=h,e.setFromRotationMatrix(Wn),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,i,s,o,a=bi){const l=this.elements,c=2*s/(e-t),u=2*s/(n-i),h=(e+t)/(e-t),f=(n+i)/(n-i);let p,g;if(a===bi)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===ka)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=bi){const l=this.elements,c=1/(e-t),u=1/(n-i),h=1/(o-s),f=(e+t)*c,p=(n+i)*u;let g,_;if(a===bi)g=(o+s)*h,_=-2*h;else if(a===ka)g=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const kr=new F,Wn=new Ne,Tp=new F(0,0,0),bp=new F(1,1,1),Ni=new F,ua=new F,En=new F,jc=new Ne,Kc=new Zi;class eo{constructor(t=0,e=0,n=0,i=eo.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin(nn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-nn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(nn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-nn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(nn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-nn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return jc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(jc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Kc.setFromEuler(this),this.setFromQuaternion(Kc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}eo.DEFAULT_ORDER="XYZ";class bh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let wp=0;const Zc=new F,Gr=new Zi,gi=new Ne,ha=new F,Cs=new F,Ap=new F,Rp=new Zi,$c=new F(1,0,0),Jc=new F(0,1,0),Qc=new F(0,0,1),Cp={type:"added"},Pp={type:"removed"};class Je extends Rr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wp++}),this.uuid=xs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Je.DEFAULT_UP.clone();const t=new F,e=new eo,n=new Zi,i=new F(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ne},normalMatrix:{value:new $t}}),this.matrix=new Ne,this.matrixWorld=new Ne,this.matrixAutoUpdate=Je.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Je.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new bh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Gr.setFromAxisAngle(t,e),this.quaternion.multiply(Gr),this}rotateOnWorldAxis(t,e){return Gr.setFromAxisAngle(t,e),this.quaternion.premultiply(Gr),this}rotateX(t){return this.rotateOnAxis($c,t)}rotateY(t){return this.rotateOnAxis(Jc,t)}rotateZ(t){return this.rotateOnAxis(Qc,t)}translateOnAxis(t,e){return Zc.copy(t).applyQuaternion(this.quaternion),this.position.add(Zc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis($c,t)}translateY(t){return this.translateOnAxis(Jc,t)}translateZ(t){return this.translateOnAxis(Qc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(gi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ha.copy(t):ha.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Cs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gi.lookAt(Cs,ha,this.up):gi.lookAt(ha,Cs,this.up),this.quaternion.setFromRotationMatrix(gi),i&&(gi.extractRotation(i.matrixWorld),Gr.setFromRotationMatrix(gi),this.quaternion.premultiply(Gr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Cp)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Pp)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),gi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),gi.multiply(t.parent.matrixWorld)),t.applyMatrix4(gi),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e){let n=[];this[t]===e&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectsByProperty(t,e);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cs,t,Ap),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cs,Rp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(t.shapes,h)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),f=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Je.DEFAULT_UP=new F(0,1,0);Je.DEFAULT_MATRIX_AUTO_UPDATE=!0;Je.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Xn=new F,vi=new F,Co=new F,xi=new F,Hr=new F,Vr=new F,tu=new F,Po=new F,Lo=new F,Do=new F;let fa=!1;class qn{constructor(t=new F,e=new F,n=new F){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Xn.subVectors(t,e),i.cross(Xn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){Xn.subVectors(i,e),vi.subVectors(n,e),Co.subVectors(t,e);const o=Xn.dot(Xn),a=Xn.dot(vi),l=Xn.dot(Co),c=vi.dot(vi),u=vi.dot(Co),h=o*c-a*a;if(h===0)return s.set(-2,-1,-1);const f=1/h,p=(c*l-a*u)*f,g=(o*u-a*l)*f;return s.set(1-p-g,g,p)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,xi),xi.x>=0&&xi.y>=0&&xi.x+xi.y<=1}static getUV(t,e,n,i,s,o,a,l){return fa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),fa=!0),this.getInterpolation(t,e,n,i,s,o,a,l)}static getInterpolation(t,e,n,i,s,o,a,l){return this.getBarycoord(t,e,n,i,xi),l.setScalar(0),l.addScaledVector(s,xi.x),l.addScaledVector(o,xi.y),l.addScaledVector(a,xi.z),l}static isFrontFacing(t,e,n,i){return Xn.subVectors(n,e),vi.subVectors(t,e),Xn.cross(vi).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Xn.subVectors(this.c,this.b),vi.subVectors(this.a,this.b),Xn.cross(vi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return qn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return qn.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,s){return fa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),fa=!0),qn.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}getInterpolation(t,e,n,i,s){return qn.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return qn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return qn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let o,a;Hr.subVectors(i,n),Vr.subVectors(s,n),Po.subVectors(t,n);const l=Hr.dot(Po),c=Vr.dot(Po);if(l<=0&&c<=0)return e.copy(n);Lo.subVectors(t,i);const u=Hr.dot(Lo),h=Vr.dot(Lo);if(u>=0&&h<=u)return e.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(Hr,o);Do.subVectors(t,s);const p=Hr.dot(Do),g=Vr.dot(Do);if(g>=0&&p<=g)return e.copy(s);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Vr,a);const m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return tu.subVectors(s,i),a=(h-u)/(h-u+(p-g)),e.copy(i).addScaledVector(tu,a);const d=1/(m+_+f);return o=_*d,a=f*d,e.copy(n).addScaledVector(Hr,o).addScaledVector(Vr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let Lp=0;class ys extends Rr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Lp++}),this.uuid=xs(),this.name="",this.type="Material",this.blending=is,this.side=Ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=uh,this.blendDst=hh,this.blendEquation=Jr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=nl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xo,this.stencilZFail=xo,this.stencilZPass=xo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==is&&(n.blending=this.blending),this.side!==Ki&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const wh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fi={h:0,s:0,l:0},da={h:0,s:0,l:0};function Uo(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class re{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ze){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ce.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=ce.workingColorSpace){return this.r=t,this.g=e,this.b=n,ce.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=ce.workingColorSpace){if(t=Ll(t,1),e=nn(e,0,1),n=nn(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=Uo(o,s,t+1/3),this.g=Uo(o,s,t),this.b=Uo(o,s,t-1/3)}return ce.toWorkingColorSpace(this,i),this}setStyle(t,e=Ze){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ze){const n=wh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=rs(t.r),this.g=rs(t.g),this.b=rs(t.b),this}copyLinearToSRGB(t){return this.r=Mo(t.r),this.g=Mo(t.g),this.b=Mo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ze){return ce.fromWorkingColorSpace(en.copy(this),t),Math.round(nn(en.r*255,0,255))*65536+Math.round(nn(en.g*255,0,255))*256+Math.round(nn(en.b*255,0,255))}getHexString(t=Ze){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ce.workingColorSpace){ce.fromWorkingColorSpace(en.copy(this),e);const n=en.r,i=en.g,s=en.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=ce.workingColorSpace){return ce.fromWorkingColorSpace(en.copy(this),e),t.r=en.r,t.g=en.g,t.b=en.b,t}getStyle(t=Ze){ce.fromWorkingColorSpace(en.copy(this),t);const e=en.r,n=en.g,i=en.b;return t!==Ze?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Fi),this.setHSL(Fi.h+t,Fi.s+e,Fi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Fi),t.getHSL(da);const n=Bs(Fi.h,da.h,e),i=Bs(Fi.s,da.s,e),s=Bs(Fi.l,da.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const en=new re;re.NAMES=wh;class Ah extends ys{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Rl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Fe=new F,pa=new Yt;class Kn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Gc,this.updateRange={offset:0,count:-1},this.gpuType=ki,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)pa.fromBufferAttribute(this,e),pa.applyMatrix3(t),this.setXY(e,pa.x,pa.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix3(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix4(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyNormalMatrix(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.transformDirection(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Qr(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=un(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Qr(e,this.array)),e}setX(t,e){return this.normalized&&(e=un(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Qr(e,this.array)),e}setY(t,e){return this.normalized&&(e=un(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Qr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=un(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Qr(e,this.array)),e}setW(t,e){return this.normalized&&(e=un(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=un(e,this.array),n=un(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=un(e,this.array),n=un(n,this.array),i=un(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=un(e,this.array),n=un(n,this.array),i=un(i,this.array),s=un(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Gc&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}}class Rh extends Kn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Ch extends Kn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ai extends Kn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Dp=0;const Ln=new Ne,Io=new Je,Wr=new F,Tn=new ta,Ps=new ta,qe=new F;class ci extends Rr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dp++}),this.uuid=xs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Mh(t)?Ch:Rh)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new $t().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ln.makeRotationFromQuaternion(t),this.applyMatrix4(Ln),this}rotateX(t){return Ln.makeRotationX(t),this.applyMatrix4(Ln),this}rotateY(t){return Ln.makeRotationY(t),this.applyMatrix4(Ln),this}rotateZ(t){return Ln.makeRotationZ(t),this.applyMatrix4(Ln),this}translate(t,e,n){return Ln.makeTranslation(t,e,n),this.applyMatrix4(Ln),this}scale(t,e,n){return Ln.makeScale(t,e,n),this.applyMatrix4(Ln),this}lookAt(t){return Io.lookAt(t),Io.updateMatrix(),this.applyMatrix4(Io.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wr).negate(),this.translate(Wr.x,Wr.y,Wr.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ai(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ta);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];Tn.setFromBufferAttribute(s),this.morphTargetsRelative?(qe.addVectors(this.boundingBox.min,Tn.min),this.boundingBox.expandByPoint(qe),qe.addVectors(this.boundingBox.max,Tn.max),this.boundingBox.expandByPoint(qe)):(this.boundingBox.expandByPoint(Tn.min),this.boundingBox.expandByPoint(Tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new to);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new F,1/0);return}if(t){const n=this.boundingSphere.center;if(Tn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Ps.setFromBufferAttribute(a),this.morphTargetsRelative?(qe.addVectors(Tn.min,Ps.min),Tn.expandByPoint(qe),qe.addVectors(Tn.max,Ps.max),Tn.expandByPoint(qe)):(Tn.expandByPoint(Ps.min),Tn.expandByPoint(Ps.max))}Tn.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)qe.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(qe));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)qe.fromBufferAttribute(a,c),l&&(Wr.fromBufferAttribute(t,c),qe.add(Wr)),i=Math.max(i,n.distanceToSquared(qe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,s=e.normal.array,o=e.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Kn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let C=0;C<a;C++)c[C]=new F,u[C]=new F;const h=new F,f=new F,p=new F,g=new Yt,_=new Yt,m=new Yt,d=new F,T=new F;function v(C,X,J){h.fromArray(i,C*3),f.fromArray(i,X*3),p.fromArray(i,J*3),g.fromArray(o,C*2),_.fromArray(o,X*2),m.fromArray(o,J*2),f.sub(h),p.sub(h),_.sub(g),m.sub(g);const Q=1/(_.x*m.y-m.x*_.y);isFinite(Q)&&(d.copy(f).multiplyScalar(m.y).addScaledVector(p,-_.y).multiplyScalar(Q),T.copy(p).multiplyScalar(_.x).addScaledVector(f,-m.x).multiplyScalar(Q),c[C].add(d),c[X].add(d),c[J].add(d),u[C].add(T),u[X].add(T),u[J].add(T))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let C=0,X=y.length;C<X;++C){const J=y[C],Q=J.start,I=J.count;for(let H=Q,$=Q+I;H<$;H+=3)v(n[H+0],n[H+1],n[H+2])}const S=new F,R=new F,b=new F,U=new F;function x(C){b.fromArray(s,C*3),U.copy(b);const X=c[C];S.copy(X),S.sub(b.multiplyScalar(b.dot(X))).normalize(),R.crossVectors(U,X);const Q=R.dot(u[C])<0?-1:1;l[C*4]=S.x,l[C*4+1]=S.y,l[C*4+2]=S.z,l[C*4+3]=Q}for(let C=0,X=y.length;C<X;++C){const J=y[C],Q=J.start,I=J.count;for(let H=Q,$=Q+I;H<$;H+=3)x(n[H+0]),x(n[H+1]),x(n[H+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Kn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const i=new F,s=new F,o=new F,a=new F,l=new F,c=new F,u=new F,h=new F;if(t)for(let f=0,p=t.count;f<p;f+=3){const g=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=e.count;f<p;f+=3)i.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)qe.fromBufferAttribute(t,e),qe.normalize(),t.setXYZ(e,qe.x,qe.y,qe.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*u;for(let d=0;d<u;d++)f[g++]=c[p++]}return new Kn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ci,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],p=t(f,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];u.push(p.toJSON(t.data))}u.length>0&&(i[l]=u,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const eu=new Ne,ar=new Dl,ma=new to,nu=new F,Xr=new F,qr=new F,Yr=new F,Oo=new F,_a=new F,ga=new Yt,va=new Yt,xa=new Yt,iu=new F,ru=new F,su=new F,ya=new F,Ma=new F;class Nn extends Je{constructor(t=new ci,e=new Ah){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(s&&a){_a.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(Oo.fromBufferAttribute(h,t),o?_a.addScaledVector(Oo,u):_a.addScaledVector(Oo.sub(e),u))}e.add(_a)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ma.copy(n.boundingSphere),ma.applyMatrix4(s),ar.copy(t.ray).recast(t.near),!(ma.containsPoint(ar.origin)===!1&&(ar.intersectSphere(ma,nu)===null||ar.origin.distanceToSquared(nu)>(t.far-t.near)**2))&&(eu.copy(s).invert(),ar.copy(t.ray).applyMatrix4(eu),!(n.boundingBox!==null&&ar.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ar)))}_computeIntersections(t,e,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],d=o[m.materialIndex],T=Math.max(m.start,p.start),v=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=T,S=v;y<S;y+=3){const R=a.getX(y),b=a.getX(y+1),U=a.getX(y+2);i=Sa(this,d,t,n,c,u,h,R,b,U),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const T=a.getX(m),v=a.getX(m+1),y=a.getX(m+2);i=Sa(this,o,t,n,c,u,h,T,v,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],d=o[m.materialIndex],T=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=T,S=v;y<S;y+=3){const R=y,b=y+1,U=y+2;i=Sa(this,d,t,n,c,u,h,R,b,U),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const T=m,v=m+1,y=m+2;i=Sa(this,o,t,n,c,u,h,T,v,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function Up(r,t,e,n,i,s,o,a){let l;if(t.side===pn?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,t.side===Ki,a),l===null)return null;Ma.copy(a),Ma.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(Ma);return c<e.near||c>e.far?null:{distance:c,point:Ma.clone(),object:r}}function Sa(r,t,e,n,i,s,o,a,l,c){r.getVertexPosition(a,Xr),r.getVertexPosition(l,qr),r.getVertexPosition(c,Yr);const u=Up(r,t,e,n,Xr,qr,Yr,ya);if(u){i&&(ga.fromBufferAttribute(i,a),va.fromBufferAttribute(i,l),xa.fromBufferAttribute(i,c),u.uv=qn.getInterpolation(ya,Xr,qr,Yr,ga,va,xa,new Yt)),s&&(ga.fromBufferAttribute(s,a),va.fromBufferAttribute(s,l),xa.fromBufferAttribute(s,c),u.uv1=qn.getInterpolation(ya,Xr,qr,Yr,ga,va,xa,new Yt),u.uv2=u.uv1),o&&(iu.fromBufferAttribute(o,a),ru.fromBufferAttribute(o,l),su.fromBufferAttribute(o,c),u.normal=qn.getInterpolation(ya,Xr,qr,Yr,iu,ru,su,new F),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new F,materialIndex:0};qn.getNormal(Xr,qr,Yr,h.normal),u.face=h}return u}class ea extends ci{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,p=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new ai(c,3)),this.setAttribute("normal",new ai(u,3)),this.setAttribute("uv",new ai(h,2));function g(_,m,d,T,v,y,S,R,b,U,x){const C=y/b,X=S/U,J=y/2,Q=S/2,I=R/2,H=b+1,$=U+1;let Y=0,at=0;const nt=new F;for(let tt=0;tt<$;tt++){const B=tt*X-Q;for(let j=0;j<H;j++){const gt=j*C-J;nt[_]=gt*T,nt[m]=B*v,nt[d]=I,c.push(nt.x,nt.y,nt.z),nt[_]=0,nt[m]=0,nt[d]=R>0?1:-1,u.push(nt.x,nt.y,nt.z),h.push(j/b),h.push(1-tt/U),Y+=1}}for(let tt=0;tt<U;tt++)for(let B=0;B<b;B++){const j=f+B+H*tt,gt=f+B+H*(tt+1),mt=f+(B+1)+H*(tt+1),xt=f+(B+1)+H*tt;l.push(j,gt,xt),l.push(gt,mt,xt),at+=6}a.addGroup(p,at,x),p+=at,f+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ea(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function hs(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function hn(r){const t={};for(let e=0;e<r.length;e++){const n=hs(r[e]);for(const i in n)t[i]=n[i]}return t}function Ip(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function Ph(r){return r.getRenderTarget()===null?r.outputColorSpace:ce.workingColorSpace}const Op={clone:hs,merge:hn};var Np=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Fp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class br extends ys{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Np,this.fragmentShader=Fp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=hs(t.uniforms),this.uniformsGroups=Ip(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Lh extends Je{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ne,this.projectionMatrix=new Ne,this.projectionMatrixInverse=new Ne,this.coordinateSystem=bi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class wn extends Lh{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Xs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Fs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Xs*2*Math.atan(Math.tan(Fs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Fs*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const jr=-90,Kr=1;class Bp extends Je{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new wn(jr,Kr,t,e);i.layers=this.layers,this.add(i);const s=new wn(jr,Kr,t,e);s.layers=this.layers,this.add(s);const o=new wn(jr,Kr,t,e);o.layers=this.layers,this.add(o);const a=new wn(jr,Kr,t,e);a.layers=this.layers,this.add(a);const l=new wn(jr,Kr,t,e);l.layers=this.layers,this.add(l);const c=new wn(jr,Kr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,l]=e;for(const c of e)this.remove(c);if(t===bi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ka)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,u),t.setRenderTarget(h,f,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Dh extends mn{constructor(t,e,n,i,s,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:ls,super(t,e,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class zp extends Tr{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];e.encoding!==void 0&&(zs("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===xr?Ze:On),this.texture=new Dh(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:In}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ea(5,5,5),s=new br({name:"CubemapFromEquirect",uniforms:hs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:pn,blending:Wi});s.uniforms.tEquirect.value=e;const o=new Nn(i,s),a=e.minFilter;return e.minFilter===Vs&&(e.minFilter=In),new Bp(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}}const No=new F,kp=new F,Gp=new $t;class Bi{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=No.subVectors(n,e).cross(kp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(No),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Gp.getNormalMatrix(t),i=this.coplanarPoint(No).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const or=new to,Ea=new F;class Ul{constructor(t=new Bi,e=new Bi,n=new Bi,i=new Bi,s=new Bi,o=new Bi){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=bi){const n=this.planes,i=t.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],h=i[6],f=i[7],p=i[8],g=i[9],_=i[10],m=i[11],d=i[12],T=i[13],v=i[14],y=i[15];if(n[0].setComponents(l-s,f-c,m-p,y-d).normalize(),n[1].setComponents(l+s,f+c,m+p,y+d).normalize(),n[2].setComponents(l+o,f+u,m+g,y+T).normalize(),n[3].setComponents(l-o,f-u,m-g,y-T).normalize(),n[4].setComponents(l-a,f-h,m-_,y-v).normalize(),e===bi)n[5].setComponents(l+a,f+h,m+_,y+v).normalize();else if(e===ka)n[5].setComponents(a,h,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),or.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),or.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(or)}intersectsSprite(t){return or.center.set(0,0,0),or.radius=.7071067811865476,or.applyMatrix4(t.matrixWorld),this.intersectsSphere(or)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Ea.x=i.normal.x>0?t.max.x:t.min.x,Ea.y=i.normal.y>0?t.max.y:t.min.y,Ea.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Ea)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Uh(){let r=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function Hp(r,t){const e=t.isWebGL2,n=new WeakMap;function i(c,u){const h=c.array,f=c.usage,p=r.createBuffer();r.bindBuffer(u,p),r.bufferData(u,h,f),c.onUploadCallback();let g;if(h instanceof Float32Array)g=r.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)g=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)g=r.SHORT;else if(h instanceof Uint32Array)g=r.UNSIGNED_INT;else if(h instanceof Int32Array)g=r.INT;else if(h instanceof Int8Array)g=r.BYTE;else if(h instanceof Uint8Array)g=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)g=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:p,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,h){const f=u.array,p=u.updateRange;r.bindBuffer(h,c),p.count===-1?r.bufferSubData(h,0,f):(e?r.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):r.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(r.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,i(c,u)):h.version<c.version&&(s(h.buffer,c,u),h.version=c.version)}return{get:o,remove:a,update:l}}class Il extends ci{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=t/a,f=e/l,p=[],g=[],_=[],m=[];for(let d=0;d<u;d++){const T=d*f-o;for(let v=0;v<c;v++){const y=v*h-s;g.push(y,-T,0),_.push(0,0,1),m.push(v/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let T=0;T<a;T++){const v=T+c*d,y=T+c*(d+1),S=T+1+c*(d+1),R=T+1+c*d;p.push(v,y,R),p.push(y,S,R)}this.setIndex(p),this.setAttribute("position",new ai(g,3)),this.setAttribute("normal",new ai(_,3)),this.setAttribute("uv",new ai(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Il(t.width,t.height,t.widthSegments,t.heightSegments)}}var Vp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wp=`#ifdef USE_ALPHAHASH
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
#endif`,Xp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yp=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,jp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Kp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Zp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$p=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Jp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Qp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,tm=`#ifdef USE_IRIDESCENCE
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
#endif`,em=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,nm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,im=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,am=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,om=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,lm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,cm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,um=`#define PI 3.141592653589793
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,hm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,fm=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,dm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,mm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_m=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gm="gl_FragColor = linearToOutputTexel( gl_FragColor );",vm=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,xm=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,ym=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Mm=`#ifdef USE_ENVMAP
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
#endif`,Sm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Em=`#ifdef USE_ENVMAP
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
#endif`,Tm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Am=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Rm=`#ifdef USE_GRADIENTMAP
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
}`,Cm=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Pm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Lm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Dm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Um=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,Im=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,Om=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Nm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Fm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Bm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zm=`PhysicalMaterial material;
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
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,km=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
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
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
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
}`,Gm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,Hm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Vm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Wm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Ym=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,jm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Km=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Zm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,$m=`#if defined( USE_POINTS_UV )
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
#endif`,Jm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Qm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,t_=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,e_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,n_=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,i_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,r_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,s_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,a_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,o_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,l_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,c_=`#ifdef USE_NORMALMAP
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
#endif`,u_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,h_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,f_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,d_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,p_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,m_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,__=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,g_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,v_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,x_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,y_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,M_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,S_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,E_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,T_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,b_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,w_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,A_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,R_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,C_=`#ifdef USE_SKINNING
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
#endif`,P_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,L_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,D_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,U_=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,I_=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,O_=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,N_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,F_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,B_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,z_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const k_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,G_=`uniform sampler2D t2D;
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
}`,H_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,V_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,W_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,X_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,q_=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,Y_=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
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
	#endif
}`,j_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,K_=`#define DISTANCE
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Z_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,J_=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Q_=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,tg=`#include <common>
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
	#include <morphcolor_vertex>
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
}`,eg=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,ng=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
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
}`,ig=`#define LAMBERT
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,rg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,ag=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,lg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
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
}`,cg=`#define PHONG
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,ug=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
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
	#include <morphcolor_vertex>
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
}`,hg=`#define STANDARD
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fg=`#define TOON
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,dg=`#define TOON
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,pg=`uniform float size;
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
}`,mg=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,_g=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
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
}`,vg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,xg=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Kt={alphahash_fragment:Vp,alphahash_pars_fragment:Wp,alphamap_fragment:Xp,alphamap_pars_fragment:qp,alphatest_fragment:Yp,alphatest_pars_fragment:jp,aomap_fragment:Kp,aomap_pars_fragment:Zp,begin_vertex:$p,beginnormal_vertex:Jp,bsdfs:Qp,iridescence_fragment:tm,bumpmap_pars_fragment:em,clipping_planes_fragment:nm,clipping_planes_pars_fragment:im,clipping_planes_pars_vertex:rm,clipping_planes_vertex:sm,color_fragment:am,color_pars_fragment:om,color_pars_vertex:lm,color_vertex:cm,common:um,cube_uv_reflection_fragment:hm,defaultnormal_vertex:fm,displacementmap_pars_vertex:dm,displacementmap_vertex:pm,emissivemap_fragment:mm,emissivemap_pars_fragment:_m,colorspace_fragment:gm,colorspace_pars_fragment:vm,envmap_fragment:xm,envmap_common_pars_fragment:ym,envmap_pars_fragment:Mm,envmap_pars_vertex:Sm,envmap_physical_pars_fragment:Im,envmap_vertex:Em,fog_vertex:Tm,fog_pars_vertex:bm,fog_fragment:wm,fog_pars_fragment:Am,gradientmap_pars_fragment:Rm,lightmap_fragment:Cm,lightmap_pars_fragment:Pm,lights_lambert_fragment:Lm,lights_lambert_pars_fragment:Dm,lights_pars_begin:Um,lights_toon_fragment:Om,lights_toon_pars_fragment:Nm,lights_phong_fragment:Fm,lights_phong_pars_fragment:Bm,lights_physical_fragment:zm,lights_physical_pars_fragment:km,lights_fragment_begin:Gm,lights_fragment_maps:Hm,lights_fragment_end:Vm,logdepthbuf_fragment:Wm,logdepthbuf_pars_fragment:Xm,logdepthbuf_pars_vertex:qm,logdepthbuf_vertex:Ym,map_fragment:jm,map_pars_fragment:Km,map_particle_fragment:Zm,map_particle_pars_fragment:$m,metalnessmap_fragment:Jm,metalnessmap_pars_fragment:Qm,morphcolor_vertex:t_,morphnormal_vertex:e_,morphtarget_pars_vertex:n_,morphtarget_vertex:i_,normal_fragment_begin:r_,normal_fragment_maps:s_,normal_pars_fragment:a_,normal_pars_vertex:o_,normal_vertex:l_,normalmap_pars_fragment:c_,clearcoat_normal_fragment_begin:u_,clearcoat_normal_fragment_maps:h_,clearcoat_pars_fragment:f_,iridescence_pars_fragment:d_,opaque_fragment:p_,packing:m_,premultiplied_alpha_fragment:__,project_vertex:g_,dithering_fragment:v_,dithering_pars_fragment:x_,roughnessmap_fragment:y_,roughnessmap_pars_fragment:M_,shadowmap_pars_fragment:S_,shadowmap_pars_vertex:E_,shadowmap_vertex:T_,shadowmask_pars_fragment:b_,skinbase_vertex:w_,skinning_pars_vertex:A_,skinning_vertex:R_,skinnormal_vertex:C_,specularmap_fragment:P_,specularmap_pars_fragment:L_,tonemapping_fragment:D_,tonemapping_pars_fragment:U_,transmission_fragment:I_,transmission_pars_fragment:O_,uv_pars_fragment:N_,uv_pars_vertex:F_,uv_vertex:B_,worldpos_vertex:z_,background_vert:k_,background_frag:G_,backgroundCube_vert:H_,backgroundCube_frag:V_,cube_vert:W_,cube_frag:X_,depth_vert:q_,depth_frag:Y_,distanceRGBA_vert:j_,distanceRGBA_frag:K_,equirect_vert:Z_,equirect_frag:$_,linedashed_vert:J_,linedashed_frag:Q_,meshbasic_vert:tg,meshbasic_frag:eg,meshlambert_vert:ng,meshlambert_frag:ig,meshmatcap_vert:rg,meshmatcap_frag:sg,meshnormal_vert:ag,meshnormal_frag:og,meshphong_vert:lg,meshphong_frag:cg,meshphysical_vert:ug,meshphysical_frag:hg,meshtoon_vert:fg,meshtoon_frag:dg,points_vert:pg,points_frag:mg,shadow_vert:_g,shadow_frag:gg,sprite_vert:vg,sprite_frag:xg},vt={common:{diffuse:{value:new re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new Yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new re(16777215)},opacity:{value:1},center:{value:new Yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},ni={basic:{uniforms:hn([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.fog]),vertexShader:Kt.meshbasic_vert,fragmentShader:Kt.meshbasic_frag},lambert:{uniforms:hn([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new re(0)}}]),vertexShader:Kt.meshlambert_vert,fragmentShader:Kt.meshlambert_frag},phong:{uniforms:hn([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new re(0)},specular:{value:new re(1118481)},shininess:{value:30}}]),vertexShader:Kt.meshphong_vert,fragmentShader:Kt.meshphong_frag},standard:{uniforms:hn([vt.common,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.roughnessmap,vt.metalnessmap,vt.fog,vt.lights,{emissive:{value:new re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag},toon:{uniforms:hn([vt.common,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.gradientmap,vt.fog,vt.lights,{emissive:{value:new re(0)}}]),vertexShader:Kt.meshtoon_vert,fragmentShader:Kt.meshtoon_frag},matcap:{uniforms:hn([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,{matcap:{value:null}}]),vertexShader:Kt.meshmatcap_vert,fragmentShader:Kt.meshmatcap_frag},points:{uniforms:hn([vt.points,vt.fog]),vertexShader:Kt.points_vert,fragmentShader:Kt.points_frag},dashed:{uniforms:hn([vt.common,vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Kt.linedashed_vert,fragmentShader:Kt.linedashed_frag},depth:{uniforms:hn([vt.common,vt.displacementmap]),vertexShader:Kt.depth_vert,fragmentShader:Kt.depth_frag},normal:{uniforms:hn([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,{opacity:{value:1}}]),vertexShader:Kt.meshnormal_vert,fragmentShader:Kt.meshnormal_frag},sprite:{uniforms:hn([vt.sprite,vt.fog]),vertexShader:Kt.sprite_vert,fragmentShader:Kt.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Kt.background_vert,fragmentShader:Kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Kt.backgroundCube_vert,fragmentShader:Kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Kt.cube_vert,fragmentShader:Kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Kt.equirect_vert,fragmentShader:Kt.equirect_frag},distanceRGBA:{uniforms:hn([vt.common,vt.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Kt.distanceRGBA_vert,fragmentShader:Kt.distanceRGBA_frag},shadow:{uniforms:hn([vt.lights,vt.fog,{color:{value:new re(0)},opacity:{value:1}}]),vertexShader:Kt.shadow_vert,fragmentShader:Kt.shadow_frag}};ni.physical={uniforms:hn([ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new Yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new Yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new re(0)},specularColor:{value:new re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new Yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag};const Ta={r:0,b:0,g:0};function yg(r,t,e,n,i,s,o){const a=new re(0);let l=s===!0?0:1,c,u,h=null,f=0,p=null;function g(m,d){let T=!1,v=d.isScene===!0?d.background:null;v&&v.isTexture&&(v=(d.backgroundBlurriness>0?e:t).get(v)),v===null?_(a,l):v&&v.isColor&&(_(v,1),T=!0);const y=r.xr.getEnvironmentBlendMode();y==="additive"?n.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||T)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Ja)?(u===void 0&&(u=new Nn(new ea(1,1,1),new br({name:"BackgroundCubeMaterial",uniforms:hs(ni.backgroundCube.uniforms),vertexShader:ni.backgroundCube.vertexShader,fragmentShader:ni.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(S,R,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=ce.getTransfer(v.colorSpace)!==ye,(h!==v||f!==v.version||p!==r.toneMapping)&&(u.material.needsUpdate=!0,h=v,f=v.version,p=r.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Nn(new Il(2,2),new br({name:"BackgroundMaterial",uniforms:hs(ni.background.uniforms),vertexShader:ni.background.vertexShader,fragmentShader:ni.background.fragmentShader,side:Ki,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=ce.getTransfer(v.colorSpace)!==ye,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||p!==r.toneMapping)&&(c.material.needsUpdate=!0,h=v,f=v.version,p=r.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function _(m,d){m.getRGB(Ta,Ph(r)),n.buffers.color.setClear(Ta.r,Ta.g,Ta.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(m,d=1){a.set(m),l=d,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(a,l)},render:g}}function Mg(r,t,e,n){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=m(null);let c=l,u=!1;function h(I,H,$,Y,at){let nt=!1;if(o){const tt=_(Y,$,H);c!==tt&&(c=tt,p(c.object)),nt=d(I,Y,$,at),nt&&T(I,Y,$,at)}else{const tt=H.wireframe===!0;(c.geometry!==Y.id||c.program!==$.id||c.wireframe!==tt)&&(c.geometry=Y.id,c.program=$.id,c.wireframe=tt,nt=!0)}at!==null&&e.update(at,r.ELEMENT_ARRAY_BUFFER),(nt||u)&&(u=!1,U(I,H,$,Y),at!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(at).buffer))}function f(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function p(I){return n.isWebGL2?r.bindVertexArray(I):s.bindVertexArrayOES(I)}function g(I){return n.isWebGL2?r.deleteVertexArray(I):s.deleteVertexArrayOES(I)}function _(I,H,$){const Y=$.wireframe===!0;let at=a[I.id];at===void 0&&(at={},a[I.id]=at);let nt=at[H.id];nt===void 0&&(nt={},at[H.id]=nt);let tt=nt[Y];return tt===void 0&&(tt=m(f()),nt[Y]=tt),tt}function m(I){const H=[],$=[],Y=[];for(let at=0;at<i;at++)H[at]=0,$[at]=0,Y[at]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:$,attributeDivisors:Y,object:I,attributes:{},index:null}}function d(I,H,$,Y){const at=c.attributes,nt=H.attributes;let tt=0;const B=$.getAttributes();for(const j in B)if(B[j].location>=0){const mt=at[j];let xt=nt[j];if(xt===void 0&&(j==="instanceMatrix"&&I.instanceMatrix&&(xt=I.instanceMatrix),j==="instanceColor"&&I.instanceColor&&(xt=I.instanceColor)),mt===void 0||mt.attribute!==xt||xt&&mt.data!==xt.data)return!0;tt++}return c.attributesNum!==tt||c.index!==Y}function T(I,H,$,Y){const at={},nt=H.attributes;let tt=0;const B=$.getAttributes();for(const j in B)if(B[j].location>=0){let mt=nt[j];mt===void 0&&(j==="instanceMatrix"&&I.instanceMatrix&&(mt=I.instanceMatrix),j==="instanceColor"&&I.instanceColor&&(mt=I.instanceColor));const xt={};xt.attribute=mt,mt&&mt.data&&(xt.data=mt.data),at[j]=xt,tt++}c.attributes=at,c.attributesNum=tt,c.index=Y}function v(){const I=c.newAttributes;for(let H=0,$=I.length;H<$;H++)I[H]=0}function y(I){S(I,0)}function S(I,H){const $=c.newAttributes,Y=c.enabledAttributes,at=c.attributeDivisors;$[I]=1,Y[I]===0&&(r.enableVertexAttribArray(I),Y[I]=1),at[I]!==H&&((n.isWebGL2?r:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,H),at[I]=H)}function R(){const I=c.newAttributes,H=c.enabledAttributes;for(let $=0,Y=H.length;$<Y;$++)H[$]!==I[$]&&(r.disableVertexAttribArray($),H[$]=0)}function b(I,H,$,Y,at,nt,tt){tt===!0?r.vertexAttribIPointer(I,H,$,at,nt):r.vertexAttribPointer(I,H,$,Y,at,nt)}function U(I,H,$,Y){if(n.isWebGL2===!1&&(I.isInstancedMesh||Y.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;v();const at=Y.attributes,nt=$.getAttributes(),tt=H.defaultAttributeValues;for(const B in nt){const j=nt[B];if(j.location>=0){let gt=at[B];if(gt===void 0&&(B==="instanceMatrix"&&I.instanceMatrix&&(gt=I.instanceMatrix),B==="instanceColor"&&I.instanceColor&&(gt=I.instanceColor)),gt!==void 0){const mt=gt.normalized,xt=gt.itemSize,It=e.get(gt);if(It===void 0)continue;const Mt=It.buffer,Lt=It.type,Jt=It.bytesPerElement,_e=n.isWebGL2===!0&&(Lt===r.INT||Lt===r.UNSIGNED_INT||gt.gpuType===dh);if(gt.isInterleavedBufferAttribute){const Vt=gt.data,z=Vt.stride,ge=gt.offset;if(Vt.isInstancedInterleavedBuffer){for(let Ct=0;Ct<j.locationSize;Ct++)S(j.location+Ct,Vt.meshPerAttribute);I.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=Vt.meshPerAttribute*Vt.count)}else for(let Ct=0;Ct<j.locationSize;Ct++)y(j.location+Ct);r.bindBuffer(r.ARRAY_BUFFER,Mt);for(let Ct=0;Ct<j.locationSize;Ct++)b(j.location+Ct,xt/j.locationSize,Lt,mt,z*Jt,(ge+xt/j.locationSize*Ct)*Jt,_e)}else{if(gt.isInstancedBufferAttribute){for(let Vt=0;Vt<j.locationSize;Vt++)S(j.location+Vt,gt.meshPerAttribute);I.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let Vt=0;Vt<j.locationSize;Vt++)y(j.location+Vt);r.bindBuffer(r.ARRAY_BUFFER,Mt);for(let Vt=0;Vt<j.locationSize;Vt++)b(j.location+Vt,xt/j.locationSize,Lt,mt,xt*Jt,xt/j.locationSize*Vt*Jt,_e)}}else if(tt!==void 0){const mt=tt[B];if(mt!==void 0)switch(mt.length){case 2:r.vertexAttrib2fv(j.location,mt);break;case 3:r.vertexAttrib3fv(j.location,mt);break;case 4:r.vertexAttrib4fv(j.location,mt);break;default:r.vertexAttrib1fv(j.location,mt)}}}}R()}function x(){J();for(const I in a){const H=a[I];for(const $ in H){const Y=H[$];for(const at in Y)g(Y[at].object),delete Y[at];delete H[$]}delete a[I]}}function C(I){if(a[I.id]===void 0)return;const H=a[I.id];for(const $ in H){const Y=H[$];for(const at in Y)g(Y[at].object),delete Y[at];delete H[$]}delete a[I.id]}function X(I){for(const H in a){const $=a[H];if($[I.id]===void 0)continue;const Y=$[I.id];for(const at in Y)g(Y[at].object),delete Y[at];delete $[I.id]}}function J(){Q(),u=!0,c!==l&&(c=l,p(c.object))}function Q(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:J,resetDefaultState:Q,dispose:x,releaseStatesOfGeometry:C,releaseStatesOfProgram:X,initAttributes:v,enableAttribute:y,disableUnusedAttributes:R}}function Sg(r,t,e,n){const i=n.isWebGL2;let s;function o(c){s=c}function a(c,u){r.drawArrays(s,c,u),e.update(u,s,1)}function l(c,u,h){if(h===0)return;let f,p;if(i)f=r,p="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](s,c,u,h),e.update(u,s,h)}this.setMode=o,this.render=a,this.renderInstances=l}function Eg(r,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const b=t.get("EXT_texture_filter_anisotropic");n=r.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(b){if(b==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let a=e.precision!==void 0?e.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||t.has("WEBGL_draw_buffers"),u=e.logarithmicDepthBuffer===!0,h=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),f=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),m=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),d=r.getParameter(r.MAX_VARYING_VECTORS),T=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),v=f>0,y=o||t.has("OES_texture_float"),S=v&&y,R=o?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:T,vertexTextures:v,floatFragmentTextures:y,floatVertexTextures:S,maxSamples:R}}function Tg(r){const t=this;let e=null,n=0,i=!1,s=!1;const o=new Bi,a=new $t,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||n!==0||i;return i=f,n=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,p){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,d=r.get(h);if(!i||g===null||g.length===0||s&&!m)s?u(null):c();else{const T=s?0:n,v=T*4;let y=d.clippingState||null;l.value=y,y=u(g,f,v,p);for(let S=0;S!==v;++S)y[S]=e[S];d.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,f,p,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const d=p+_*4,T=f.matrixWorldInverse;a.getNormalMatrix(T),(m===null||m.length<d)&&(m=new Float32Array(d));for(let v=0,y=p;v!==_;++v,y+=4)o.copy(h[v]).applyMatrix4(T,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function bg(r){let t=new WeakMap;function e(o,a){return a===il?o.mapping=ls:a===rl&&(o.mapping=cs),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===il||a===rl)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new zp(l.height/2);return c.fromEquirectangularTexture(r,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class wg extends Lh{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ts=4,au=[.125,.215,.35,.446,.526,.582],mr=20,Fo=new wg,ou=new re;let Bo=null;const fr=(1+Math.sqrt(5))/2,Zr=1/fr,lu=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,fr,Zr),new F(0,fr,-Zr),new F(Zr,0,fr),new F(-Zr,0,fr),new F(fr,Zr,0),new F(-fr,Zr,0)];class cu{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Bo=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Bo),t.scissorTest=!1,ba(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ls||t.mapping===cs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Bo=this._renderer.getRenderTarget();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:In,minFilter:In,generateMipmaps:!1,type:Ws,format:jn,colorSpace:wi,depthBuffer:!1},i=uu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=uu(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ag(s)),this._blurMaterial=Rg(s,t,e)}return i}_compileMaterial(t){const e=new Nn(this._lodPlanes[0],t);this._renderer.compile(e,Fo)}_sceneToCubeUV(t,e,n,i){const a=new wn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(ou),u.toneMapping=Xi,u.autoClear=!1;const p=new Ah({name:"PMREM.Background",side:pn,depthWrite:!1,depthTest:!1}),g=new Nn(new ea,p);let _=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,_=!0):(p.color.copy(ou),_=!0);for(let d=0;d<6;d++){const T=d%3;T===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):T===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));const v=this._cubeSize;ba(i,T*v,d>2?v:0,v,v),u.setRenderTarget(i),_&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===ls||t.mapping===cs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=fu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hu());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Nn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;ba(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Fo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=lu[(i-1)%lu.length];this._blur(t,i-1,i,s,o)}e.autoClear=n}_blur(t,e,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Nn(this._lodPlanes[i],c),f=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*mr-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):mr;m>mr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${mr}`);const d=[];let T=0;for(let b=0;b<mr;++b){const U=b/_,x=Math.exp(-U*U/2);d.push(x),b===0?T+=x:b<m&&(T+=2*x)}for(let b=0;b<d.length;b++)d[b]=d[b]/T;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-n;const y=this._sizeLods[i],S=3*y*(i>v-ts?i-v+ts:0),R=4*(this._cubeSize-y);ba(e,S,R,3*y,2*y),l.setRenderTarget(e),l.render(h,Fo)}}function Ag(r){const t=[],e=[],n=[];let i=r;const s=r-ts+1+au.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>r-ts?l=au[o-r+ts-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,_=3,m=2,d=1,T=new Float32Array(_*g*p),v=new Float32Array(m*g*p),y=new Float32Array(d*g*p);for(let R=0;R<p;R++){const b=R%3*2/3-1,U=R>2?0:-1,x=[b,U,0,b+2/3,U,0,b+2/3,U+1,0,b,U,0,b+2/3,U+1,0,b,U+1,0];T.set(x,_*g*R),v.set(f,m*g*R);const C=[R,R,R,R,R,R];y.set(C,d*g*R)}const S=new ci;S.setAttribute("position",new Kn(T,_)),S.setAttribute("uv",new Kn(v,m)),S.setAttribute("faceIndex",new Kn(y,d)),t.push(S),i>ts&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function uu(r,t,e){const n=new Tr(r,t,e);return n.texture.mapping=Ja,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ba(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function Rg(r,t,e){const n=new Float32Array(mr),i=new F(0,1,0);return new br({name:"SphericalGaussianBlur",defines:{n:mr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ol(),fragmentShader:`

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
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function hu(){return new br({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ol(),fragmentShader:`

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
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function fu(){return new br({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ol(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function Ol(){return`

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
	`}function Cg(r){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===il||l===rl,u=l===ls||l===cs;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=t.get(a);return e===null&&(e=new cu(r)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),t.set(a,h),h.texture}else{if(t.has(a))return t.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&i(h)){e===null&&(e=new cu(r));const f=c?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Pg(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Lg(r,t,e,n){const i={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let m=0,d=_.length;m<d;m++)t.remove(_[m])}f.removeEventListener("dispose",o),delete i[f.id];const p=s.get(f);p&&(t.remove(p),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,e.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)t.update(f[g],r.ARRAY_BUFFER);const p=h.morphAttributes;for(const g in p){const _=p[g];for(let m=0,d=_.length;m<d;m++)t.update(_[m],r.ARRAY_BUFFER)}}function c(h){const f=[],p=h.index,g=h.attributes.position;let _=0;if(p!==null){const T=p.array;_=p.version;for(let v=0,y=T.length;v<y;v+=3){const S=T[v+0],R=T[v+1],b=T[v+2];f.push(S,R,R,b,b,S)}}else if(g!==void 0){const T=g.array;_=g.version;for(let v=0,y=T.length/3-1;v<y;v+=3){const S=v+0,R=v+1,b=v+2;f.push(S,R,R,b,b,S)}}else return;const m=new(Mh(f)?Ch:Rh)(f,1);m.version=_;const d=s.get(h);d&&t.remove(d),s.set(h,m)}function u(h){const f=s.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Dg(r,t,e,n){const i=n.isWebGL2;let s;function o(f){s=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function u(f,p){r.drawElements(s,p,a,f*l),e.update(p,s,1)}function h(f,p,g){if(g===0)return;let _,m;if(i)_=r,m="drawElementsInstanced";else if(_=t.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[m](s,p,a,f*l,g),e.update(p,s,g)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h}function Ug(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Ig(r,t){return r[0]-t[0]}function Og(r,t){return Math.abs(t[1])-Math.abs(r[1])}function Ng(r,t,e){const n={},i=new Float32Array(8),s=new WeakMap,o=new we,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h){const f=c.morphTargetInfluences;if(t.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=g!==void 0?g.length:0;let m=s.get(u);if(m===void 0||m.count!==_){let H=function(){Q.dispose(),s.delete(u),u.removeEventListener("dispose",H)};var p=H;m!==void 0&&m.texture.dispose();const v=u.morphAttributes.position!==void 0,y=u.morphAttributes.normal!==void 0,S=u.morphAttributes.color!==void 0,R=u.morphAttributes.position||[],b=u.morphAttributes.normal||[],U=u.morphAttributes.color||[];let x=0;v===!0&&(x=1),y===!0&&(x=2),S===!0&&(x=3);let C=u.attributes.position.count*x,X=1;C>t.maxTextureSize&&(X=Math.ceil(C/t.maxTextureSize),C=t.maxTextureSize);const J=new Float32Array(C*X*4*_),Q=new Th(J,C,X,_);Q.type=ki,Q.needsUpdate=!0;const I=x*4;for(let $=0;$<_;$++){const Y=R[$],at=b[$],nt=U[$],tt=C*X*4*$;for(let B=0;B<Y.count;B++){const j=B*I;v===!0&&(o.fromBufferAttribute(Y,B),J[tt+j+0]=o.x,J[tt+j+1]=o.y,J[tt+j+2]=o.z,J[tt+j+3]=0),y===!0&&(o.fromBufferAttribute(at,B),J[tt+j+4]=o.x,J[tt+j+5]=o.y,J[tt+j+6]=o.z,J[tt+j+7]=0),S===!0&&(o.fromBufferAttribute(nt,B),J[tt+j+8]=o.x,J[tt+j+9]=o.y,J[tt+j+10]=o.z,J[tt+j+11]=nt.itemSize===4?o.w:1)}}m={count:_,texture:Q,size:new Yt(C,X)},s.set(u,m),u.addEventListener("dispose",H)}let d=0;for(let v=0;v<f.length;v++)d+=f[v];const T=u.morphTargetsRelative?1:1-d;h.getUniforms().setValue(r,"morphTargetBaseInfluence",T),h.getUniforms().setValue(r,"morphTargetInfluences",f),h.getUniforms().setValue(r,"morphTargetsTexture",m.texture,e),h.getUniforms().setValue(r,"morphTargetsTextureSize",m.size)}else{const g=f===void 0?0:f.length;let _=n[u.id];if(_===void 0||_.length!==g){_=[];for(let y=0;y<g;y++)_[y]=[y,0];n[u.id]=_}for(let y=0;y<g;y++){const S=_[y];S[0]=y,S[1]=f[y]}_.sort(Og);for(let y=0;y<8;y++)y<g&&_[y][1]?(a[y][0]=_[y][0],a[y][1]=_[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(Ig);const m=u.morphAttributes.position,d=u.morphAttributes.normal;let T=0;for(let y=0;y<8;y++){const S=a[y],R=S[0],b=S[1];R!==Number.MAX_SAFE_INTEGER&&b?(m&&u.getAttribute("morphTarget"+y)!==m[R]&&u.setAttribute("morphTarget"+y,m[R]),d&&u.getAttribute("morphNormal"+y)!==d[R]&&u.setAttribute("morphNormal"+y,d[R]),i[y]=b,T+=b):(m&&u.hasAttribute("morphTarget"+y)===!0&&u.deleteAttribute("morphTarget"+y),d&&u.hasAttribute("morphNormal"+y)===!0&&u.deleteAttribute("morphNormal"+y),i[y]=0)}const v=u.morphTargetsRelative?1:1-T;h.getUniforms().setValue(r,"morphTargetBaseInfluence",v),h.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function Fg(r,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=t.get(l,u);if(i.get(h)!==c&&(t.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return h}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}const Ih=new mn,Oh=new Th,Nh=new Sp,Fh=new Dh,du=[],pu=[],mu=new Float32Array(16),_u=new Float32Array(9),gu=new Float32Array(4);function Ms(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=du[i];if(s===void 0&&(s=new Float32Array(i),du[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function He(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function Ve(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function no(r,t){let e=pu[t];e===void 0&&(e=new Int32Array(t),pu[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function Bg(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function zg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;r.uniform2fv(this.addr,t),Ve(e,t)}}function kg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(He(e,t))return;r.uniform3fv(this.addr,t),Ve(e,t)}}function Gg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;r.uniform4fv(this.addr,t),Ve(e,t)}}function Hg(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(He(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Ve(e,t)}else{if(He(e,n))return;gu.set(n),r.uniformMatrix2fv(this.addr,!1,gu),Ve(e,n)}}function Vg(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(He(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Ve(e,t)}else{if(He(e,n))return;_u.set(n),r.uniformMatrix3fv(this.addr,!1,_u),Ve(e,n)}}function Wg(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(He(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Ve(e,t)}else{if(He(e,n))return;mu.set(n),r.uniformMatrix4fv(this.addr,!1,mu),Ve(e,n)}}function Xg(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function qg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;r.uniform2iv(this.addr,t),Ve(e,t)}}function Yg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(He(e,t))return;r.uniform3iv(this.addr,t),Ve(e,t)}}function jg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;r.uniform4iv(this.addr,t),Ve(e,t)}}function Kg(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function Zg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;r.uniform2uiv(this.addr,t),Ve(e,t)}}function $g(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(He(e,t))return;r.uniform3uiv(this.addr,t),Ve(e,t)}}function Jg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;r.uniform4uiv(this.addr,t),Ve(e,t)}}function Qg(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2D(t||Ih,i)}function t0(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Nh,i)}function e0(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Fh,i)}function n0(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Oh,i)}function i0(r){switch(r){case 5126:return Bg;case 35664:return zg;case 35665:return kg;case 35666:return Gg;case 35674:return Hg;case 35675:return Vg;case 35676:return Wg;case 5124:case 35670:return Xg;case 35667:case 35671:return qg;case 35668:case 35672:return Yg;case 35669:case 35673:return jg;case 5125:return Kg;case 36294:return Zg;case 36295:return $g;case 36296:return Jg;case 35678:case 36198:case 36298:case 36306:case 35682:return Qg;case 35679:case 36299:case 36307:return t0;case 35680:case 36300:case 36308:case 36293:return e0;case 36289:case 36303:case 36311:case 36292:return n0}}function r0(r,t){r.uniform1fv(this.addr,t)}function s0(r,t){const e=Ms(t,this.size,2);r.uniform2fv(this.addr,e)}function a0(r,t){const e=Ms(t,this.size,3);r.uniform3fv(this.addr,e)}function o0(r,t){const e=Ms(t,this.size,4);r.uniform4fv(this.addr,e)}function l0(r,t){const e=Ms(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function c0(r,t){const e=Ms(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function u0(r,t){const e=Ms(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function h0(r,t){r.uniform1iv(this.addr,t)}function f0(r,t){r.uniform2iv(this.addr,t)}function d0(r,t){r.uniform3iv(this.addr,t)}function p0(r,t){r.uniform4iv(this.addr,t)}function m0(r,t){r.uniform1uiv(this.addr,t)}function _0(r,t){r.uniform2uiv(this.addr,t)}function g0(r,t){r.uniform3uiv(this.addr,t)}function v0(r,t){r.uniform4uiv(this.addr,t)}function x0(r,t,e){const n=this.cache,i=t.length,s=no(e,i);He(n,s)||(r.uniform1iv(this.addr,s),Ve(n,s));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||Ih,s[o])}function y0(r,t,e){const n=this.cache,i=t.length,s=no(e,i);He(n,s)||(r.uniform1iv(this.addr,s),Ve(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Nh,s[o])}function M0(r,t,e){const n=this.cache,i=t.length,s=no(e,i);He(n,s)||(r.uniform1iv(this.addr,s),Ve(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Fh,s[o])}function S0(r,t,e){const n=this.cache,i=t.length,s=no(e,i);He(n,s)||(r.uniform1iv(this.addr,s),Ve(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Oh,s[o])}function E0(r){switch(r){case 5126:return r0;case 35664:return s0;case 35665:return a0;case 35666:return o0;case 35674:return l0;case 35675:return c0;case 35676:return u0;case 5124:case 35670:return h0;case 35667:case 35671:return f0;case 35668:case 35672:return d0;case 35669:case 35673:return p0;case 5125:return m0;case 36294:return _0;case 36295:return g0;case 36296:return v0;case 35678:case 36198:case 36298:case 36306:case 35682:return x0;case 35679:case 36299:case 36307:return y0;case 35680:case 36300:case 36308:case 36293:return M0;case 36289:case 36303:case 36311:case 36292:return S0}}class T0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=i0(e.type)}}class b0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=E0(e.type)}}class w0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(t,e[a.id],n)}}}const zo=/(\w+)(\])?(\[|\.)?/g;function vu(r,t){r.seq.push(t),r.map[t.id]=t}function A0(r,t,e){const n=r.name,i=n.length;for(zo.lastIndex=0;;){const s=zo.exec(n),o=zo.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){vu(e,c===void 0?new T0(a,r,t):new b0(a,r,t));break}else{let h=e.map[a];h===void 0&&(h=new w0(a),vu(e,h)),e=h}}}class Da{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),o=t.getUniformLocation(e,s.name);A0(s,o,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function xu(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}let R0=0;function C0(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function P0(r){const t=ce.getPrimaries(ce.workingColorSpace),e=ce.getPrimaries(r);let n;switch(t===e?n="":t===za&&e===Ba?n="LinearDisplayP3ToLinearSRGB":t===Ba&&e===za&&(n="LinearSRGBToLinearDisplayP3"),r){case wi:case Qa:return[n,"LinearTransferOETF"];case Ze:case Pl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function yu(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+C0(r.getShaderSource(t),o)}else return i}function L0(r,t){const e=P0(t);return`vec4 ${r}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function D0(r,t){let e;switch(t){case Cd:e="Linear";break;case Pd:e="Reinhard";break;case Ld:e="OptimizedCineon";break;case Dd:e="ACESFilmic";break;case Ud:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function U0(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Us).join(`
`)}function I0(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function O0(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function Us(r){return r!==""}function Mu(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Su(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const N0=/^[ \t]*#include +<([\w\d./]+)>/gm;function cl(r){return r.replace(N0,B0)}const F0=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function B0(r,t){let e=Kt[t];if(e===void 0){const n=F0.get(t);if(n!==void 0)e=Kt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return cl(e)}const z0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Eu(r){return r.replace(z0,k0)}function k0(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Tu(r){let t="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function G0(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===lh?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===ch?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Mi&&(t="SHADOWMAP_TYPE_VSM"),t}function H0(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case ls:case cs:t="ENVMAP_TYPE_CUBE";break;case Ja:t="ENVMAP_TYPE_CUBE_UV";break}return t}function V0(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case cs:t="ENVMAP_MODE_REFRACTION";break}return t}function W0(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Rl:t="ENVMAP_BLENDING_MULTIPLY";break;case Ad:t="ENVMAP_BLENDING_MIX";break;case Rd:t="ENVMAP_BLENDING_ADD";break}return t}function X0(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function q0(r,t,e,n){const i=r.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=G0(e),c=H0(e),u=V0(e),h=W0(e),f=X0(e),p=e.isWebGL2?"":U0(e),g=I0(s),_=i.createProgram();let m,d,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Us).join(`
`),m.length>0&&(m+=`
`),d=[p,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Us).join(`
`),d.length>0&&(d+=`
`)):(m=[Tu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Us).join(`
`),d=[p,Tu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Xi?"#define TONE_MAPPING":"",e.toneMapping!==Xi?Kt.tonemapping_pars_fragment:"",e.toneMapping!==Xi?D0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Kt.colorspace_pars_fragment,L0("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Us).join(`
`)),o=cl(o),o=Mu(o,e),o=Su(o,e),a=cl(a),a=Mu(a,e),a=Su(a,e),o=Eu(o),a=Eu(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===Hc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Hc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const v=T+m+o,y=T+d+a,S=xu(i,i.VERTEX_SHADER,v),R=xu(i,i.FRAGMENT_SHADER,y);if(i.attachShader(_,S),i.attachShader(_,R),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_),r.debug.checkShaderErrors){const x=i.getProgramInfoLog(_).trim(),C=i.getShaderInfoLog(S).trim(),X=i.getShaderInfoLog(R).trim();let J=!0,Q=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(J=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,S,R);else{const I=yu(i,S,"vertex"),H=yu(i,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Program Info Log: `+x+`
`+I+`
`+H)}else x!==""?console.warn("THREE.WebGLProgram: Program Info Log:",x):(C===""||X==="")&&(Q=!1);Q&&(this.diagnostics={runnable:J,programLog:x,vertexShader:{log:C,prefix:m},fragmentShader:{log:X,prefix:d}})}i.deleteShader(S),i.deleteShader(R);let b;this.getUniforms=function(){return b===void 0&&(b=new Da(i,_)),b};let U;return this.getAttributes=function(){return U===void 0&&(U=O0(i,_)),U},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=R0++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=S,this.fragmentShader=R,this}let Y0=0;class j0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new K0(t),e.set(t,n)),n}}class K0{constructor(t){this.id=Y0++,this.code=t,this.usedTimes=0}}function Z0(r,t,e,n,i,s,o){const a=new bh,l=new j0,c=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,f=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return x===0?"uv":`uv${x}`}function m(x,C,X,J,Q){const I=J.fog,H=Q.geometry,$=x.isMeshStandardMaterial?J.environment:null,Y=(x.isMeshStandardMaterial?e:t).get(x.envMap||$),at=Y&&Y.mapping===Ja?Y.image.height:null,nt=g[x.type];x.precision!==null&&(p=i.getMaxPrecision(x.precision),p!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",p,"instead."));const tt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,B=tt!==void 0?tt.length:0;let j=0;H.morphAttributes.position!==void 0&&(j=1),H.morphAttributes.normal!==void 0&&(j=2),H.morphAttributes.color!==void 0&&(j=3);let gt,mt,xt,It;if(nt){const te=ni[nt];gt=te.vertexShader,mt=te.fragmentShader}else gt=x.vertexShader,mt=x.fragmentShader,l.update(x),xt=l.getVertexShaderID(x),It=l.getFragmentShaderID(x);const Mt=r.getRenderTarget(),Lt=Q.isInstancedMesh===!0,Jt=!!x.map,_e=!!x.matcap,Vt=!!Y,z=!!x.aoMap,ge=!!x.lightMap,Ct=!!x.bumpMap,Ht=!!x.normalMap,Ft=!!x.displacementMap,ae=!!x.emissiveMap,qt=!!x.metalnessMap,kt=!!x.roughnessMap,Qt=x.anisotropy>0,ve=x.clearcoat>0,Ae=x.iridescence>0,P=x.sheen>0,E=x.transmission>0,W=Qt&&!!x.anisotropyMap,ot=ve&&!!x.clearcoatMap,rt=ve&&!!x.clearcoatNormalMap,ut=ve&&!!x.clearcoatRoughnessMap,Et=Ae&&!!x.iridescenceMap,dt=Ae&&!!x.iridescenceThicknessMap,yt=P&&!!x.sheenColorMap,D=P&&!!x.sheenRoughnessMap,ft=!!x.specularMap,it=!!x.specularColorMap,Dt=!!x.specularIntensityMap,At=E&&!!x.transmissionMap,Rt=E&&!!x.thicknessMap,Tt=!!x.gradientMap,L=!!x.alphaMap,lt=x.alphaTest>0,ct=!!x.alphaHash,_t=!!x.extensions,pt=!!H.attributes.uv1,st=!!H.attributes.uv2,bt=!!H.attributes.uv3;let Pt=Xi;return x.toneMapped&&(Mt===null||Mt.isXRRenderTarget===!0)&&(Pt=r.toneMapping),{isWebGL2:u,shaderID:nt,shaderType:x.type,shaderName:x.name,vertexShader:gt,fragmentShader:mt,defines:x.defines,customVertexShaderID:xt,customFragmentShaderID:It,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:p,instancing:Lt,instancingColor:Lt&&Q.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:Mt===null?r.outputColorSpace:Mt.isXRRenderTarget===!0?Mt.texture.colorSpace:wi,map:Jt,matcap:_e,envMap:Vt,envMapMode:Vt&&Y.mapping,envMapCubeUVHeight:at,aoMap:z,lightMap:ge,bumpMap:Ct,normalMap:Ht,displacementMap:f&&Ft,emissiveMap:ae,normalMapObjectSpace:Ht&&x.normalMapType===qd,normalMapTangentSpace:Ht&&x.normalMapType===yh,metalnessMap:qt,roughnessMap:kt,anisotropy:Qt,anisotropyMap:W,clearcoat:ve,clearcoatMap:ot,clearcoatNormalMap:rt,clearcoatRoughnessMap:ut,iridescence:Ae,iridescenceMap:Et,iridescenceThicknessMap:dt,sheen:P,sheenColorMap:yt,sheenRoughnessMap:D,specularMap:ft,specularColorMap:it,specularIntensityMap:Dt,transmission:E,transmissionMap:At,thicknessMap:Rt,gradientMap:Tt,opaque:x.transparent===!1&&x.blending===is,alphaMap:L,alphaTest:lt,alphaHash:ct,combine:x.combine,mapUv:Jt&&_(x.map.channel),aoMapUv:z&&_(x.aoMap.channel),lightMapUv:ge&&_(x.lightMap.channel),bumpMapUv:Ct&&_(x.bumpMap.channel),normalMapUv:Ht&&_(x.normalMap.channel),displacementMapUv:Ft&&_(x.displacementMap.channel),emissiveMapUv:ae&&_(x.emissiveMap.channel),metalnessMapUv:qt&&_(x.metalnessMap.channel),roughnessMapUv:kt&&_(x.roughnessMap.channel),anisotropyMapUv:W&&_(x.anisotropyMap.channel),clearcoatMapUv:ot&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:rt&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ut&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Et&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:dt&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:yt&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:D&&_(x.sheenRoughnessMap.channel),specularMapUv:ft&&_(x.specularMap.channel),specularColorMapUv:it&&_(x.specularColorMap.channel),specularIntensityMapUv:Dt&&_(x.specularIntensityMap.channel),transmissionMapUv:At&&_(x.transmissionMap.channel),thicknessMapUv:Rt&&_(x.thicknessMap.channel),alphaMapUv:L&&_(x.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Ht||Qt),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,vertexUv1s:pt,vertexUv2s:st,vertexUv3s:bt,pointsUvs:Q.isPoints===!0&&!!H.attributes.uv&&(Jt||L),fog:!!I,useFog:x.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:Q.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:B,morphTextureStride:j,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&X.length>0,shadowMapType:r.shadowMap.type,toneMapping:Pt,useLegacyLights:r._useLegacyLights,decodeVideoTexture:Jt&&x.map.isVideoTexture===!0&&ce.getTransfer(x.map.colorSpace)===ye,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ti,flipSided:x.side===pn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:_t&&x.extensions.derivatives===!0,extensionFragDepth:_t&&x.extensions.fragDepth===!0,extensionDrawBuffers:_t&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:_t&&x.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function d(x){const C=[];if(x.shaderID?C.push(x.shaderID):(C.push(x.customVertexShaderID),C.push(x.customFragmentShaderID)),x.defines!==void 0)for(const X in x.defines)C.push(X),C.push(x.defines[X]);return x.isRawShaderMaterial===!1&&(T(C,x),v(C,x),C.push(r.outputColorSpace)),C.push(x.customProgramCacheKey),C.join()}function T(x,C){x.push(C.precision),x.push(C.outputColorSpace),x.push(C.envMapMode),x.push(C.envMapCubeUVHeight),x.push(C.mapUv),x.push(C.alphaMapUv),x.push(C.lightMapUv),x.push(C.aoMapUv),x.push(C.bumpMapUv),x.push(C.normalMapUv),x.push(C.displacementMapUv),x.push(C.emissiveMapUv),x.push(C.metalnessMapUv),x.push(C.roughnessMapUv),x.push(C.anisotropyMapUv),x.push(C.clearcoatMapUv),x.push(C.clearcoatNormalMapUv),x.push(C.clearcoatRoughnessMapUv),x.push(C.iridescenceMapUv),x.push(C.iridescenceThicknessMapUv),x.push(C.sheenColorMapUv),x.push(C.sheenRoughnessMapUv),x.push(C.specularMapUv),x.push(C.specularColorMapUv),x.push(C.specularIntensityMapUv),x.push(C.transmissionMapUv),x.push(C.thicknessMapUv),x.push(C.combine),x.push(C.fogExp2),x.push(C.sizeAttenuation),x.push(C.morphTargetsCount),x.push(C.morphAttributeCount),x.push(C.numDirLights),x.push(C.numPointLights),x.push(C.numSpotLights),x.push(C.numSpotLightMaps),x.push(C.numHemiLights),x.push(C.numRectAreaLights),x.push(C.numDirLightShadows),x.push(C.numPointLightShadows),x.push(C.numSpotLightShadows),x.push(C.numSpotLightShadowsWithMaps),x.push(C.numLightProbes),x.push(C.shadowMapType),x.push(C.toneMapping),x.push(C.numClippingPlanes),x.push(C.numClipIntersection),x.push(C.depthPacking)}function v(x,C){a.disableAll(),C.isWebGL2&&a.enable(0),C.supportsVertexTextures&&a.enable(1),C.instancing&&a.enable(2),C.instancingColor&&a.enable(3),C.matcap&&a.enable(4),C.envMap&&a.enable(5),C.normalMapObjectSpace&&a.enable(6),C.normalMapTangentSpace&&a.enable(7),C.clearcoat&&a.enable(8),C.iridescence&&a.enable(9),C.alphaTest&&a.enable(10),C.vertexColors&&a.enable(11),C.vertexAlphas&&a.enable(12),C.vertexUv1s&&a.enable(13),C.vertexUv2s&&a.enable(14),C.vertexUv3s&&a.enable(15),C.vertexTangents&&a.enable(16),C.anisotropy&&a.enable(17),x.push(a.mask),a.disableAll(),C.fog&&a.enable(0),C.useFog&&a.enable(1),C.flatShading&&a.enable(2),C.logarithmicDepthBuffer&&a.enable(3),C.skinning&&a.enable(4),C.morphTargets&&a.enable(5),C.morphNormals&&a.enable(6),C.morphColors&&a.enable(7),C.premultipliedAlpha&&a.enable(8),C.shadowMapEnabled&&a.enable(9),C.useLegacyLights&&a.enable(10),C.doubleSided&&a.enable(11),C.flipSided&&a.enable(12),C.useDepthPacking&&a.enable(13),C.dithering&&a.enable(14),C.transmission&&a.enable(15),C.sheen&&a.enable(16),C.opaque&&a.enable(17),C.pointsUvs&&a.enable(18),C.decodeVideoTexture&&a.enable(19),x.push(a.mask)}function y(x){const C=g[x.type];let X;if(C){const J=ni[C];X=Op.clone(J.uniforms)}else X=x.uniforms;return X}function S(x,C){let X;for(let J=0,Q=c.length;J<Q;J++){const I=c[J];if(I.cacheKey===C){X=I,++X.usedTimes;break}}return X===void 0&&(X=new q0(r,C,x,s),c.push(X)),X}function R(x){if(--x.usedTimes===0){const C=c.indexOf(x);c[C]=c[c.length-1],c.pop(),x.destroy()}}function b(x){l.remove(x)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:y,acquireProgram:S,releaseProgram:R,releaseShaderCache:b,programs:c,dispose:U}}function $0(){let r=new WeakMap;function t(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function e(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function J0(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function bu(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function wu(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(h,f,p,g,_,m){let d=r[t];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},r[t]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=h.renderOrder,d.z=_,d.group=m),t++,d}function a(h,f,p,g,_,m){const d=o(h,f,p,g,_,m);p.transmission>0?n.push(d):p.transparent===!0?i.push(d):e.push(d)}function l(h,f,p,g,_,m){const d=o(h,f,p,g,_,m);p.transmission>0?n.unshift(d):p.transparent===!0?i.unshift(d):e.unshift(d)}function c(h,f){e.length>1&&e.sort(h||J0),n.length>1&&n.sort(f||bu),i.length>1&&i.sort(f||bu)}function u(){for(let h=t,f=r.length;h<f;h++){const p=r[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function Q0(){let r=new WeakMap;function t(n,i){const s=r.get(n);let o;return s===void 0?(o=new wu,r.set(n,[o])):i>=s.length?(o=new wu,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function tv(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new F,color:new re};break;case"SpotLight":e={position:new F,direction:new F,color:new re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new re,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new re,groundColor:new re};break;case"RectAreaLight":e={color:new re,position:new F,halfWidth:new F,halfHeight:new F};break}return r[t.id]=e,e}}}function ev(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let nv=0;function iv(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function rv(r,t){const e=new tv,n=ev(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new F);const s=new F,o=new Ne,a=new Ne;function l(u,h){let f=0,p=0,g=0;for(let J=0;J<9;J++)i.probe[J].set(0,0,0);let _=0,m=0,d=0,T=0,v=0,y=0,S=0,R=0,b=0,U=0,x=0;u.sort(iv);const C=h===!0?Math.PI:1;for(let J=0,Q=u.length;J<Q;J++){const I=u[J],H=I.color,$=I.intensity,Y=I.distance,at=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)f+=H.r*$*C,p+=H.g*$*C,g+=H.b*$*C;else if(I.isLightProbe){for(let nt=0;nt<9;nt++)i.probe[nt].addScaledVector(I.sh.coefficients[nt],$);x++}else if(I.isDirectionalLight){const nt=e.get(I);if(nt.color.copy(I.color).multiplyScalar(I.intensity*C),I.castShadow){const tt=I.shadow,B=n.get(I);B.shadowBias=tt.bias,B.shadowNormalBias=tt.normalBias,B.shadowRadius=tt.radius,B.shadowMapSize=tt.mapSize,i.directionalShadow[_]=B,i.directionalShadowMap[_]=at,i.directionalShadowMatrix[_]=I.shadow.matrix,y++}i.directional[_]=nt,_++}else if(I.isSpotLight){const nt=e.get(I);nt.position.setFromMatrixPosition(I.matrixWorld),nt.color.copy(H).multiplyScalar($*C),nt.distance=Y,nt.coneCos=Math.cos(I.angle),nt.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),nt.decay=I.decay,i.spot[d]=nt;const tt=I.shadow;if(I.map&&(i.spotLightMap[b]=I.map,b++,tt.updateMatrices(I),I.castShadow&&U++),i.spotLightMatrix[d]=tt.matrix,I.castShadow){const B=n.get(I);B.shadowBias=tt.bias,B.shadowNormalBias=tt.normalBias,B.shadowRadius=tt.radius,B.shadowMapSize=tt.mapSize,i.spotShadow[d]=B,i.spotShadowMap[d]=at,R++}d++}else if(I.isRectAreaLight){const nt=e.get(I);nt.color.copy(H).multiplyScalar($),nt.halfWidth.set(I.width*.5,0,0),nt.halfHeight.set(0,I.height*.5,0),i.rectArea[T]=nt,T++}else if(I.isPointLight){const nt=e.get(I);if(nt.color.copy(I.color).multiplyScalar(I.intensity*C),nt.distance=I.distance,nt.decay=I.decay,I.castShadow){const tt=I.shadow,B=n.get(I);B.shadowBias=tt.bias,B.shadowNormalBias=tt.normalBias,B.shadowRadius=tt.radius,B.shadowMapSize=tt.mapSize,B.shadowCameraNear=tt.camera.near,B.shadowCameraFar=tt.camera.far,i.pointShadow[m]=B,i.pointShadowMap[m]=at,i.pointShadowMatrix[m]=I.shadow.matrix,S++}i.point[m]=nt,m++}else if(I.isHemisphereLight){const nt=e.get(I);nt.skyColor.copy(I.color).multiplyScalar($*C),nt.groundColor.copy(I.groundColor).multiplyScalar($*C),i.hemi[v]=nt,v++}}T>0&&(t.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=vt.LTC_FLOAT_1,i.rectAreaLTC2=vt.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=vt.LTC_HALF_1,i.rectAreaLTC2=vt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=p,i.ambient[2]=g;const X=i.hash;(X.directionalLength!==_||X.pointLength!==m||X.spotLength!==d||X.rectAreaLength!==T||X.hemiLength!==v||X.numDirectionalShadows!==y||X.numPointShadows!==S||X.numSpotShadows!==R||X.numSpotMaps!==b||X.numLightProbes!==x)&&(i.directional.length=_,i.spot.length=d,i.rectArea.length=T,i.point.length=m,i.hemi.length=v,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=R,i.spotShadowMap.length=R,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=R+b-U,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=U,i.numLightProbes=x,X.directionalLength=_,X.pointLength=m,X.spotLength=d,X.rectAreaLength=T,X.hemiLength=v,X.numDirectionalShadows=y,X.numPointShadows=S,X.numSpotShadows=R,X.numSpotMaps=b,X.numLightProbes=x,i.version=nv++)}function c(u,h){let f=0,p=0,g=0,_=0,m=0;const d=h.matrixWorldInverse;for(let T=0,v=u.length;T<v;T++){const y=u[T];if(y.isDirectionalLight){const S=i.directional[f];S.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(d),f++}else if(y.isSpotLight){const S=i.spot[g];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(d),S.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(d),g++}else if(y.isRectAreaLight){const S=i.rectArea[_];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(d),a.identity(),o.copy(y.matrixWorld),o.premultiply(d),a.extractRotation(o),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){const S=i.point[p];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(d),p++}else if(y.isHemisphereLight){const S=i.hemi[m];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(d),m++}}}return{setup:l,setupView:c,state:i}}function Au(r,t){const e=new rv(r,t),n=[],i=[];function s(){n.length=0,i.length=0}function o(h){n.push(h)}function a(h){i.push(h)}function l(h){e.setup(n,h)}function c(h){e.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function sv(r,t){let e=new WeakMap;function n(s,o=0){const a=e.get(s);let l;return a===void 0?(l=new Au(r,t),e.set(s,[l])):o>=a.length?(l=new Au(r,t),a.push(l)):l=a[o],l}function i(){e=new WeakMap}return{get:n,dispose:i}}class av extends ys{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Wd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class ov extends ys{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const lv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cv=`uniform sampler2D shadow_pass;
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
}`;function uv(r,t,e){let n=new Ul;const i=new Yt,s=new Yt,o=new we,a=new av({depthPacking:Xd}),l=new ov,c={},u=e.maxTextureSize,h={[Ki]:pn,[pn]:Ki,[Ti]:Ti},f=new br({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Yt},radius:{value:4}},vertexShader:lv,fragmentShader:cv}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new ci;g.setAttribute("position",new Kn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Nn(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=lh;let d=this.type;this.render=function(S,R,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;const U=r.getRenderTarget(),x=r.getActiveCubeFace(),C=r.getActiveMipmapLevel(),X=r.state;X.setBlending(Wi),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const J=d!==Mi&&this.type===Mi,Q=d===Mi&&this.type!==Mi;for(let I=0,H=S.length;I<H;I++){const $=S[I],Y=$.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;i.copy(Y.mapSize);const at=Y.getFrameExtents();if(i.multiply(at),s.copy(Y.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/at.x),i.x=s.x*at.x,Y.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/at.y),i.y=s.y*at.y,Y.mapSize.y=s.y)),Y.map===null||J===!0||Q===!0){const tt=this.type!==Mi?{minFilter:fn,magFilter:fn}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Tr(i.x,i.y,tt),Y.map.texture.name=$.name+".shadowMap",Y.camera.updateProjectionMatrix()}r.setRenderTarget(Y.map),r.clear();const nt=Y.getViewportCount();for(let tt=0;tt<nt;tt++){const B=Y.getViewport(tt);o.set(s.x*B.x,s.y*B.y,s.x*B.z,s.y*B.w),X.viewport(o),Y.updateMatrices($,tt),n=Y.getFrustum(),y(R,b,Y.camera,$,this.type)}Y.isPointLightShadow!==!0&&this.type===Mi&&T(Y,b),Y.needsUpdate=!1}d=this.type,m.needsUpdate=!1,r.setRenderTarget(U,x,C)};function T(S,R){const b=t.update(_);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Tr(i.x,i.y)),f.uniforms.shadow_pass.value=S.map.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,r.setRenderTarget(S.mapPass),r.clear(),r.renderBufferDirect(R,null,b,f,_,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value=S.mapSize,p.uniforms.radius.value=S.radius,r.setRenderTarget(S.map),r.clear(),r.renderBufferDirect(R,null,b,p,_,null)}function v(S,R,b,U){let x=null;const C=b.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(C!==void 0)x=C;else if(x=b.isPointLight===!0?l:a,r.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const X=x.uuid,J=R.uuid;let Q=c[X];Q===void 0&&(Q={},c[X]=Q);let I=Q[J];I===void 0&&(I=x.clone(),Q[J]=I),x=I}if(x.visible=R.visible,x.wireframe=R.wireframe,U===Mi?x.side=R.shadowSide!==null?R.shadowSide:R.side:x.side=R.shadowSide!==null?R.shadowSide:h[R.side],x.alphaMap=R.alphaMap,x.alphaTest=R.alphaTest,x.map=R.map,x.clipShadows=R.clipShadows,x.clippingPlanes=R.clippingPlanes,x.clipIntersection=R.clipIntersection,x.displacementMap=R.displacementMap,x.displacementScale=R.displacementScale,x.displacementBias=R.displacementBias,x.wireframeLinewidth=R.wireframeLinewidth,x.linewidth=R.linewidth,b.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const X=r.properties.get(x);X.light=b}return x}function y(S,R,b,U,x){if(S.visible===!1)return;if(S.layers.test(R.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&x===Mi)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,S.matrixWorld);const J=t.update(S),Q=S.material;if(Array.isArray(Q)){const I=J.groups;for(let H=0,$=I.length;H<$;H++){const Y=I[H],at=Q[Y.materialIndex];if(at&&at.visible){const nt=v(S,at,U,x);r.renderBufferDirect(b,null,J,nt,S,Y)}}}else if(Q.visible){const I=v(S,Q,U,x);r.renderBufferDirect(b,null,J,I,S,null)}}const X=S.children;for(let J=0,Q=X.length;J<Q;J++)y(X[J],R,b,U,x)}}function hv(r,t,e){const n=e.isWebGL2;function i(){let L=!1;const lt=new we;let ct=null;const _t=new we(0,0,0,0);return{setMask:function(pt){ct!==pt&&!L&&(r.colorMask(pt,pt,pt,pt),ct=pt)},setLocked:function(pt){L=pt},setClear:function(pt,st,bt,Pt,Me){Me===!0&&(pt*=Pt,st*=Pt,bt*=Pt),lt.set(pt,st,bt,Pt),_t.equals(lt)===!1&&(r.clearColor(pt,st,bt,Pt),_t.copy(lt))},reset:function(){L=!1,ct=null,_t.set(-1,0,0,0)}}}function s(){let L=!1,lt=null,ct=null,_t=null;return{setTest:function(pt){pt?Mt(r.DEPTH_TEST):Lt(r.DEPTH_TEST)},setMask:function(pt){lt!==pt&&!L&&(r.depthMask(pt),lt=pt)},setFunc:function(pt){if(ct!==pt){switch(pt){case yd:r.depthFunc(r.NEVER);break;case Md:r.depthFunc(r.ALWAYS);break;case Sd:r.depthFunc(r.LESS);break;case nl:r.depthFunc(r.LEQUAL);break;case Ed:r.depthFunc(r.EQUAL);break;case Td:r.depthFunc(r.GEQUAL);break;case bd:r.depthFunc(r.GREATER);break;case wd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ct=pt}},setLocked:function(pt){L=pt},setClear:function(pt){_t!==pt&&(r.clearDepth(pt),_t=pt)},reset:function(){L=!1,lt=null,ct=null,_t=null}}}function o(){let L=!1,lt=null,ct=null,_t=null,pt=null,st=null,bt=null,Pt=null,Me=null;return{setTest:function(te){L||(te?Mt(r.STENCIL_TEST):Lt(r.STENCIL_TEST))},setMask:function(te){lt!==te&&!L&&(r.stencilMask(te),lt=te)},setFunc:function(te,ln,ze){(ct!==te||_t!==ln||pt!==ze)&&(r.stencilFunc(te,ln,ze),ct=te,_t=ln,pt=ze)},setOp:function(te,ln,ze){(st!==te||bt!==ln||Pt!==ze)&&(r.stencilOp(te,ln,ze),st=te,bt=ln,Pt=ze)},setLocked:function(te){L=te},setClear:function(te){Me!==te&&(r.clearStencil(te),Me=te)},reset:function(){L=!1,lt=null,ct=null,_t=null,pt=null,st=null,bt=null,Pt=null,Me=null}}}const a=new i,l=new s,c=new o,u=new WeakMap,h=new WeakMap;let f={},p={},g=new WeakMap,_=[],m=null,d=!1,T=null,v=null,y=null,S=null,R=null,b=null,U=null,x=!1,C=null,X=null,J=null,Q=null,I=null;const H=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,Y=0;const at=r.getParameter(r.VERSION);at.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(at)[1]),$=Y>=1):at.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(at)[1]),$=Y>=2);let nt=null,tt={};const B=r.getParameter(r.SCISSOR_BOX),j=r.getParameter(r.VIEWPORT),gt=new we().fromArray(B),mt=new we().fromArray(j);function xt(L,lt,ct,_t){const pt=new Uint8Array(4),st=r.createTexture();r.bindTexture(L,st),r.texParameteri(L,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(L,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let bt=0;bt<ct;bt++)n&&(L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY)?r.texImage3D(lt,0,r.RGBA,1,1,_t,0,r.RGBA,r.UNSIGNED_BYTE,pt):r.texImage2D(lt+bt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,pt);return st}const It={};It[r.TEXTURE_2D]=xt(r.TEXTURE_2D,r.TEXTURE_2D,1),It[r.TEXTURE_CUBE_MAP]=xt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(It[r.TEXTURE_2D_ARRAY]=xt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),It[r.TEXTURE_3D]=xt(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Mt(r.DEPTH_TEST),l.setFunc(nl),Ft(!1),ae(uc),Mt(r.CULL_FACE),Ct(Wi);function Mt(L){f[L]!==!0&&(r.enable(L),f[L]=!0)}function Lt(L){f[L]!==!1&&(r.disable(L),f[L]=!1)}function Jt(L,lt){return p[L]!==lt?(r.bindFramebuffer(L,lt),p[L]=lt,n&&(L===r.DRAW_FRAMEBUFFER&&(p[r.FRAMEBUFFER]=lt),L===r.FRAMEBUFFER&&(p[r.DRAW_FRAMEBUFFER]=lt)),!0):!1}function _e(L,lt){let ct=_,_t=!1;if(L)if(ct=g.get(lt),ct===void 0&&(ct=[],g.set(lt,ct)),L.isWebGLMultipleRenderTargets){const pt=L.texture;if(ct.length!==pt.length||ct[0]!==r.COLOR_ATTACHMENT0){for(let st=0,bt=pt.length;st<bt;st++)ct[st]=r.COLOR_ATTACHMENT0+st;ct.length=pt.length,_t=!0}}else ct[0]!==r.COLOR_ATTACHMENT0&&(ct[0]=r.COLOR_ATTACHMENT0,_t=!0);else ct[0]!==r.BACK&&(ct[0]=r.BACK,_t=!0);_t&&(e.isWebGL2?r.drawBuffers(ct):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(ct))}function Vt(L){return m!==L?(r.useProgram(L),m=L,!0):!1}const z={[Jr]:r.FUNC_ADD,[cd]:r.FUNC_SUBTRACT,[ud]:r.FUNC_REVERSE_SUBTRACT};if(n)z[dc]=r.MIN,z[pc]=r.MAX;else{const L=t.get("EXT_blend_minmax");L!==null&&(z[dc]=L.MIN_EXT,z[pc]=L.MAX_EXT)}const ge={[hd]:r.ZERO,[fd]:r.ONE,[dd]:r.SRC_COLOR,[uh]:r.SRC_ALPHA,[xd]:r.SRC_ALPHA_SATURATE,[gd]:r.DST_COLOR,[md]:r.DST_ALPHA,[pd]:r.ONE_MINUS_SRC_COLOR,[hh]:r.ONE_MINUS_SRC_ALPHA,[vd]:r.ONE_MINUS_DST_COLOR,[_d]:r.ONE_MINUS_DST_ALPHA};function Ct(L,lt,ct,_t,pt,st,bt,Pt){if(L===Wi){d===!0&&(Lt(r.BLEND),d=!1);return}if(d===!1&&(Mt(r.BLEND),d=!0),L!==ld){if(L!==T||Pt!==x){if((v!==Jr||R!==Jr)&&(r.blendEquation(r.FUNC_ADD),v=Jr,R=Jr),Pt)switch(L){case is:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case el:r.blendFunc(r.ONE,r.ONE);break;case hc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case fc:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case is:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case el:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case hc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case fc:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}y=null,S=null,b=null,U=null,T=L,x=Pt}return}pt=pt||lt,st=st||ct,bt=bt||_t,(lt!==v||pt!==R)&&(r.blendEquationSeparate(z[lt],z[pt]),v=lt,R=pt),(ct!==y||_t!==S||st!==b||bt!==U)&&(r.blendFuncSeparate(ge[ct],ge[_t],ge[st],ge[bt]),y=ct,S=_t,b=st,U=bt),T=L,x=!1}function Ht(L,lt){L.side===Ti?Lt(r.CULL_FACE):Mt(r.CULL_FACE);let ct=L.side===pn;lt&&(ct=!ct),Ft(ct),L.blending===is&&L.transparent===!1?Ct(Wi):Ct(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),a.setMask(L.colorWrite);const _t=L.stencilWrite;c.setTest(_t),_t&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),kt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Mt(r.SAMPLE_ALPHA_TO_COVERAGE):Lt(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ft(L){C!==L&&(L?r.frontFace(r.CW):r.frontFace(r.CCW),C=L)}function ae(L){L!==ad?(Mt(r.CULL_FACE),L!==X&&(L===uc?r.cullFace(r.BACK):L===od?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Lt(r.CULL_FACE),X=L}function qt(L){L!==J&&($&&r.lineWidth(L),J=L)}function kt(L,lt,ct){L?(Mt(r.POLYGON_OFFSET_FILL),(Q!==lt||I!==ct)&&(r.polygonOffset(lt,ct),Q=lt,I=ct)):Lt(r.POLYGON_OFFSET_FILL)}function Qt(L){L?Mt(r.SCISSOR_TEST):Lt(r.SCISSOR_TEST)}function ve(L){L===void 0&&(L=r.TEXTURE0+H-1),nt!==L&&(r.activeTexture(L),nt=L)}function Ae(L,lt,ct){ct===void 0&&(nt===null?ct=r.TEXTURE0+H-1:ct=nt);let _t=tt[ct];_t===void 0&&(_t={type:void 0,texture:void 0},tt[ct]=_t),(_t.type!==L||_t.texture!==lt)&&(nt!==ct&&(r.activeTexture(ct),nt=ct),r.bindTexture(L,lt||It[L]),_t.type=L,_t.texture=lt)}function P(){const L=tt[nt];L!==void 0&&L.type!==void 0&&(r.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function E(){try{r.compressedTexImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function W(){try{r.compressedTexImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ot(){try{r.texSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function rt(){try{r.texSubImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ut(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Et(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function dt(){try{r.texStorage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function yt(){try{r.texStorage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function D(){try{r.texImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ft(){try{r.texImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function it(L){gt.equals(L)===!1&&(r.scissor(L.x,L.y,L.z,L.w),gt.copy(L))}function Dt(L){mt.equals(L)===!1&&(r.viewport(L.x,L.y,L.z,L.w),mt.copy(L))}function At(L,lt){let ct=h.get(lt);ct===void 0&&(ct=new WeakMap,h.set(lt,ct));let _t=ct.get(L);_t===void 0&&(_t=r.getUniformBlockIndex(lt,L.name),ct.set(L,_t))}function Rt(L,lt){const _t=h.get(lt).get(L);u.get(lt)!==_t&&(r.uniformBlockBinding(lt,_t,L.__bindingPointIndex),u.set(lt,_t))}function Tt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),f={},nt=null,tt={},p={},g=new WeakMap,_=[],m=null,d=!1,T=null,v=null,y=null,S=null,R=null,b=null,U=null,x=!1,C=null,X=null,J=null,Q=null,I=null,gt.set(0,0,r.canvas.width,r.canvas.height),mt.set(0,0,r.canvas.width,r.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Mt,disable:Lt,bindFramebuffer:Jt,drawBuffers:_e,useProgram:Vt,setBlending:Ct,setMaterial:Ht,setFlipSided:Ft,setCullFace:ae,setLineWidth:qt,setPolygonOffset:kt,setScissorTest:Qt,activeTexture:ve,bindTexture:Ae,unbindTexture:P,compressedTexImage2D:E,compressedTexImage3D:W,texImage2D:D,texImage3D:ft,updateUBOMapping:At,uniformBlockBinding:Rt,texStorage2D:dt,texStorage3D:yt,texSubImage2D:ot,texSubImage3D:rt,compressedTexSubImage2D:ut,compressedTexSubImage3D:Et,scissor:it,viewport:Dt,reset:Tt}}function fv(r,t,e,n,i,s,o){const a=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let _;const m=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(P,E){return d?new OffscreenCanvas(P,E):qs("canvas")}function v(P,E,W,ot){let rt=1;if((P.width>ot||P.height>ot)&&(rt=ot/Math.max(P.width,P.height)),rt<1||E===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap){const ut=E?Ga:Math.floor,Et=ut(rt*P.width),dt=ut(rt*P.height);_===void 0&&(_=T(Et,dt));const yt=W?T(Et,dt):_;return yt.width=Et,yt.height=dt,yt.getContext("2d").drawImage(P,0,0,Et,dt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+Et+"x"+dt+")."),yt}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function y(P){return ll(P.width)&&ll(P.height)}function S(P){return a?!1:P.wrapS!==Yn||P.wrapT!==Yn||P.minFilter!==fn&&P.minFilter!==In}function R(P,E){return P.generateMipmaps&&E&&P.minFilter!==fn&&P.minFilter!==In}function b(P){r.generateMipmap(P)}function U(P,E,W,ot,rt=!1){if(a===!1)return E;if(P!==null){if(r[P]!==void 0)return r[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ut=E;if(E===r.RED&&(W===r.FLOAT&&(ut=r.R32F),W===r.HALF_FLOAT&&(ut=r.R16F),W===r.UNSIGNED_BYTE&&(ut=r.R8)),E===r.RED_INTEGER&&(W===r.UNSIGNED_BYTE&&(ut=r.R8UI),W===r.UNSIGNED_SHORT&&(ut=r.R16UI),W===r.UNSIGNED_INT&&(ut=r.R32UI),W===r.BYTE&&(ut=r.R8I),W===r.SHORT&&(ut=r.R16I),W===r.INT&&(ut=r.R32I)),E===r.RG&&(W===r.FLOAT&&(ut=r.RG32F),W===r.HALF_FLOAT&&(ut=r.RG16F),W===r.UNSIGNED_BYTE&&(ut=r.RG8)),E===r.RGBA){const Et=rt?Fa:ce.getTransfer(ot);W===r.FLOAT&&(ut=r.RGBA32F),W===r.HALF_FLOAT&&(ut=r.RGBA16F),W===r.UNSIGNED_BYTE&&(ut=Et===ye?r.SRGB8_ALPHA8:r.RGBA8),W===r.UNSIGNED_SHORT_4_4_4_4&&(ut=r.RGBA4),W===r.UNSIGNED_SHORT_5_5_5_1&&(ut=r.RGB5_A1)}return(ut===r.R16F||ut===r.R32F||ut===r.RG16F||ut===r.RG32F||ut===r.RGBA16F||ut===r.RGBA32F)&&t.get("EXT_color_buffer_float"),ut}function x(P,E,W){return R(P,W)===!0||P.isFramebufferTexture&&P.minFilter!==fn&&P.minFilter!==In?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function C(P){return P===fn||P===mc||P===fo?r.NEAREST:r.LINEAR}function X(P){const E=P.target;E.removeEventListener("dispose",X),Q(E),E.isVideoTexture&&g.delete(E)}function J(P){const E=P.target;E.removeEventListener("dispose",J),H(E)}function Q(P){const E=n.get(P);if(E.__webglInit===void 0)return;const W=P.source,ot=m.get(W);if(ot){const rt=ot[E.__cacheKey];rt.usedTimes--,rt.usedTimes===0&&I(P),Object.keys(ot).length===0&&m.delete(W)}n.remove(P)}function I(P){const E=n.get(P);r.deleteTexture(E.__webglTexture);const W=P.source,ot=m.get(W);delete ot[E.__cacheKey],o.memory.textures--}function H(P){const E=P.texture,W=n.get(P),ot=n.get(E);if(ot.__webglTexture!==void 0&&(r.deleteTexture(ot.__webglTexture),o.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let rt=0;rt<6;rt++){if(Array.isArray(W.__webglFramebuffer[rt]))for(let ut=0;ut<W.__webglFramebuffer[rt].length;ut++)r.deleteFramebuffer(W.__webglFramebuffer[rt][ut]);else r.deleteFramebuffer(W.__webglFramebuffer[rt]);W.__webglDepthbuffer&&r.deleteRenderbuffer(W.__webglDepthbuffer[rt])}else{if(Array.isArray(W.__webglFramebuffer))for(let rt=0;rt<W.__webglFramebuffer.length;rt++)r.deleteFramebuffer(W.__webglFramebuffer[rt]);else r.deleteFramebuffer(W.__webglFramebuffer);if(W.__webglDepthbuffer&&r.deleteRenderbuffer(W.__webglDepthbuffer),W.__webglMultisampledFramebuffer&&r.deleteFramebuffer(W.__webglMultisampledFramebuffer),W.__webglColorRenderbuffer)for(let rt=0;rt<W.__webglColorRenderbuffer.length;rt++)W.__webglColorRenderbuffer[rt]&&r.deleteRenderbuffer(W.__webglColorRenderbuffer[rt]);W.__webglDepthRenderbuffer&&r.deleteRenderbuffer(W.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let rt=0,ut=E.length;rt<ut;rt++){const Et=n.get(E[rt]);Et.__webglTexture&&(r.deleteTexture(Et.__webglTexture),o.memory.textures--),n.remove(E[rt])}n.remove(E),n.remove(P)}let $=0;function Y(){$=0}function at(){const P=$;return P>=l&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+l),$+=1,P}function nt(P){const E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function tt(P,E){const W=n.get(P);if(P.isVideoTexture&&ve(P),P.isRenderTargetTexture===!1&&P.version>0&&W.__version!==P.version){const ot=P.image;if(ot===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ot.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Jt(W,P,E);return}}e.bindTexture(r.TEXTURE_2D,W.__webglTexture,r.TEXTURE0+E)}function B(P,E){const W=n.get(P);if(P.version>0&&W.__version!==P.version){Jt(W,P,E);return}e.bindTexture(r.TEXTURE_2D_ARRAY,W.__webglTexture,r.TEXTURE0+E)}function j(P,E){const W=n.get(P);if(P.version>0&&W.__version!==P.version){Jt(W,P,E);return}e.bindTexture(r.TEXTURE_3D,W.__webglTexture,r.TEXTURE0+E)}function gt(P,E){const W=n.get(P);if(P.version>0&&W.__version!==P.version){_e(W,P,E);return}e.bindTexture(r.TEXTURE_CUBE_MAP,W.__webglTexture,r.TEXTURE0+E)}const mt={[sl]:r.REPEAT,[Yn]:r.CLAMP_TO_EDGE,[al]:r.MIRRORED_REPEAT},xt={[fn]:r.NEAREST,[mc]:r.NEAREST_MIPMAP_NEAREST,[fo]:r.NEAREST_MIPMAP_LINEAR,[In]:r.LINEAR,[Id]:r.LINEAR_MIPMAP_NEAREST,[Vs]:r.LINEAR_MIPMAP_LINEAR},It={[jd]:r.NEVER,[ep]:r.ALWAYS,[Kd]:r.LESS,[$d]:r.LEQUAL,[Zd]:r.EQUAL,[tp]:r.GEQUAL,[Jd]:r.GREATER,[Qd]:r.NOTEQUAL};function Mt(P,E,W){if(W?(r.texParameteri(P,r.TEXTURE_WRAP_S,mt[E.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,mt[E.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,mt[E.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,xt[E.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,xt[E.minFilter])):(r.texParameteri(P,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(P,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(E.wrapS!==Yn||E.wrapT!==Yn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(P,r.TEXTURE_MAG_FILTER,C(E.magFilter)),r.texParameteri(P,r.TEXTURE_MIN_FILTER,C(E.minFilter)),E.minFilter!==fn&&E.minFilter!==In&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,It[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const ot=t.get("EXT_texture_filter_anisotropic");if(E.magFilter===fn||E.minFilter!==fo&&E.minFilter!==Vs||E.type===ki&&t.has("OES_texture_float_linear")===!1||a===!1&&E.type===Ws&&t.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||n.get(E).__currentAnisotropy)&&(r.texParameterf(P,ot.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy)}}function Lt(P,E){let W=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",X));const ot=E.source;let rt=m.get(ot);rt===void 0&&(rt={},m.set(ot,rt));const ut=nt(E);if(ut!==P.__cacheKey){rt[ut]===void 0&&(rt[ut]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,W=!0),rt[ut].usedTimes++;const Et=rt[P.__cacheKey];Et!==void 0&&(rt[P.__cacheKey].usedTimes--,Et.usedTimes===0&&I(E)),P.__cacheKey=ut,P.__webglTexture=rt[ut].texture}return W}function Jt(P,E,W){let ot=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ot=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ot=r.TEXTURE_3D);const rt=Lt(P,E),ut=E.source;e.bindTexture(ot,P.__webglTexture,r.TEXTURE0+W);const Et=n.get(ut);if(ut.version!==Et.__version||rt===!0){e.activeTexture(r.TEXTURE0+W);const dt=ce.getPrimaries(ce.workingColorSpace),yt=E.colorSpace===On?null:ce.getPrimaries(E.colorSpace),D=E.colorSpace===On||dt===yt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,D);const ft=S(E)&&y(E.image)===!1;let it=v(E.image,ft,!1,u);it=Ae(E,it);const Dt=y(it)||a,At=s.convert(E.format,E.colorSpace);let Rt=s.convert(E.type),Tt=U(E.internalFormat,At,Rt,E.colorSpace,E.isVideoTexture);Mt(ot,E,Dt);let L;const lt=E.mipmaps,ct=a&&E.isVideoTexture!==!0,_t=Et.__version===void 0||rt===!0,pt=x(E,it,Dt);if(E.isDepthTexture)Tt=r.DEPTH_COMPONENT,a?E.type===ki?Tt=r.DEPTH_COMPONENT32F:E.type===zi?Tt=r.DEPTH_COMPONENT24:E.type===gr?Tt=r.DEPTH24_STENCIL8:Tt=r.DEPTH_COMPONENT16:E.type===ki&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===vr&&Tt===r.DEPTH_COMPONENT&&E.type!==Cl&&E.type!==zi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=zi,Rt=s.convert(E.type)),E.format===us&&Tt===r.DEPTH_COMPONENT&&(Tt=r.DEPTH_STENCIL,E.type!==gr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=gr,Rt=s.convert(E.type))),_t&&(ct?e.texStorage2D(r.TEXTURE_2D,1,Tt,it.width,it.height):e.texImage2D(r.TEXTURE_2D,0,Tt,it.width,it.height,0,At,Rt,null));else if(E.isDataTexture)if(lt.length>0&&Dt){ct&&_t&&e.texStorage2D(r.TEXTURE_2D,pt,Tt,lt[0].width,lt[0].height);for(let st=0,bt=lt.length;st<bt;st++)L=lt[st],ct?e.texSubImage2D(r.TEXTURE_2D,st,0,0,L.width,L.height,At,Rt,L.data):e.texImage2D(r.TEXTURE_2D,st,Tt,L.width,L.height,0,At,Rt,L.data);E.generateMipmaps=!1}else ct?(_t&&e.texStorage2D(r.TEXTURE_2D,pt,Tt,it.width,it.height),e.texSubImage2D(r.TEXTURE_2D,0,0,0,it.width,it.height,At,Rt,it.data)):e.texImage2D(r.TEXTURE_2D,0,Tt,it.width,it.height,0,At,Rt,it.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){ct&&_t&&e.texStorage3D(r.TEXTURE_2D_ARRAY,pt,Tt,lt[0].width,lt[0].height,it.depth);for(let st=0,bt=lt.length;st<bt;st++)L=lt[st],E.format!==jn?At!==null?ct?e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,st,0,0,0,L.width,L.height,it.depth,At,L.data,0,0):e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,st,Tt,L.width,L.height,it.depth,0,L.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ct?e.texSubImage3D(r.TEXTURE_2D_ARRAY,st,0,0,0,L.width,L.height,it.depth,At,Rt,L.data):e.texImage3D(r.TEXTURE_2D_ARRAY,st,Tt,L.width,L.height,it.depth,0,At,Rt,L.data)}else{ct&&_t&&e.texStorage2D(r.TEXTURE_2D,pt,Tt,lt[0].width,lt[0].height);for(let st=0,bt=lt.length;st<bt;st++)L=lt[st],E.format!==jn?At!==null?ct?e.compressedTexSubImage2D(r.TEXTURE_2D,st,0,0,L.width,L.height,At,L.data):e.compressedTexImage2D(r.TEXTURE_2D,st,Tt,L.width,L.height,0,L.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ct?e.texSubImage2D(r.TEXTURE_2D,st,0,0,L.width,L.height,At,Rt,L.data):e.texImage2D(r.TEXTURE_2D,st,Tt,L.width,L.height,0,At,Rt,L.data)}else if(E.isDataArrayTexture)ct?(_t&&e.texStorage3D(r.TEXTURE_2D_ARRAY,pt,Tt,it.width,it.height,it.depth),e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,At,Rt,it.data)):e.texImage3D(r.TEXTURE_2D_ARRAY,0,Tt,it.width,it.height,it.depth,0,At,Rt,it.data);else if(E.isData3DTexture)ct?(_t&&e.texStorage3D(r.TEXTURE_3D,pt,Tt,it.width,it.height,it.depth),e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,At,Rt,it.data)):e.texImage3D(r.TEXTURE_3D,0,Tt,it.width,it.height,it.depth,0,At,Rt,it.data);else if(E.isFramebufferTexture){if(_t)if(ct)e.texStorage2D(r.TEXTURE_2D,pt,Tt,it.width,it.height);else{let st=it.width,bt=it.height;for(let Pt=0;Pt<pt;Pt++)e.texImage2D(r.TEXTURE_2D,Pt,Tt,st,bt,0,At,Rt,null),st>>=1,bt>>=1}}else if(lt.length>0&&Dt){ct&&_t&&e.texStorage2D(r.TEXTURE_2D,pt,Tt,lt[0].width,lt[0].height);for(let st=0,bt=lt.length;st<bt;st++)L=lt[st],ct?e.texSubImage2D(r.TEXTURE_2D,st,0,0,At,Rt,L):e.texImage2D(r.TEXTURE_2D,st,Tt,At,Rt,L);E.generateMipmaps=!1}else ct?(_t&&e.texStorage2D(r.TEXTURE_2D,pt,Tt,it.width,it.height),e.texSubImage2D(r.TEXTURE_2D,0,0,0,At,Rt,it)):e.texImage2D(r.TEXTURE_2D,0,Tt,At,Rt,it);R(E,Dt)&&b(ot),Et.__version=ut.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function _e(P,E,W){if(E.image.length!==6)return;const ot=Lt(P,E),rt=E.source;e.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+W);const ut=n.get(rt);if(rt.version!==ut.__version||ot===!0){e.activeTexture(r.TEXTURE0+W);const Et=ce.getPrimaries(ce.workingColorSpace),dt=E.colorSpace===On?null:ce.getPrimaries(E.colorSpace),yt=E.colorSpace===On||Et===dt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);const D=E.isCompressedTexture||E.image[0].isCompressedTexture,ft=E.image[0]&&E.image[0].isDataTexture,it=[];for(let st=0;st<6;st++)!D&&!ft?it[st]=v(E.image[st],!1,!0,c):it[st]=ft?E.image[st].image:E.image[st],it[st]=Ae(E,it[st]);const Dt=it[0],At=y(Dt)||a,Rt=s.convert(E.format,E.colorSpace),Tt=s.convert(E.type),L=U(E.internalFormat,Rt,Tt,E.colorSpace),lt=a&&E.isVideoTexture!==!0,ct=ut.__version===void 0||ot===!0;let _t=x(E,Dt,At);Mt(r.TEXTURE_CUBE_MAP,E,At);let pt;if(D){lt&&ct&&e.texStorage2D(r.TEXTURE_CUBE_MAP,_t,L,Dt.width,Dt.height);for(let st=0;st<6;st++){pt=it[st].mipmaps;for(let bt=0;bt<pt.length;bt++){const Pt=pt[bt];E.format!==jn?Rt!==null?lt?e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,bt,0,0,Pt.width,Pt.height,Rt,Pt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,bt,L,Pt.width,Pt.height,0,Pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):lt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,bt,0,0,Pt.width,Pt.height,Rt,Tt,Pt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,bt,L,Pt.width,Pt.height,0,Rt,Tt,Pt.data)}}}else{pt=E.mipmaps,lt&&ct&&(pt.length>0&&_t++,e.texStorage2D(r.TEXTURE_CUBE_MAP,_t,L,it[0].width,it[0].height));for(let st=0;st<6;st++)if(ft){lt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,it[st].width,it[st].height,Rt,Tt,it[st].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,L,it[st].width,it[st].height,0,Rt,Tt,it[st].data);for(let bt=0;bt<pt.length;bt++){const Me=pt[bt].image[st].image;lt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,bt+1,0,0,Me.width,Me.height,Rt,Tt,Me.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,bt+1,L,Me.width,Me.height,0,Rt,Tt,Me.data)}}else{lt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,Rt,Tt,it[st]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,L,Rt,Tt,it[st]);for(let bt=0;bt<pt.length;bt++){const Pt=pt[bt];lt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,bt+1,0,0,Rt,Tt,Pt.image[st]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,bt+1,L,Rt,Tt,Pt.image[st])}}}R(E,At)&&b(r.TEXTURE_CUBE_MAP),ut.__version=rt.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function Vt(P,E,W,ot,rt,ut){const Et=s.convert(W.format,W.colorSpace),dt=s.convert(W.type),yt=U(W.internalFormat,Et,dt,W.colorSpace);if(!n.get(E).__hasExternalTextures){const ft=Math.max(1,E.width>>ut),it=Math.max(1,E.height>>ut);rt===r.TEXTURE_3D||rt===r.TEXTURE_2D_ARRAY?e.texImage3D(rt,ut,yt,ft,it,E.depth,0,Et,dt,null):e.texImage2D(rt,ut,yt,ft,it,0,Et,dt,null)}e.bindFramebuffer(r.FRAMEBUFFER,P),Qt(E)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ot,rt,n.get(W).__webglTexture,0,kt(E)):(rt===r.TEXTURE_2D||rt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&rt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ot,rt,n.get(W).__webglTexture,ut),e.bindFramebuffer(r.FRAMEBUFFER,null)}function z(P,E,W){if(r.bindRenderbuffer(r.RENDERBUFFER,P),E.depthBuffer&&!E.stencilBuffer){let ot=a===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(W||Qt(E)){const rt=E.depthTexture;rt&&rt.isDepthTexture&&(rt.type===ki?ot=r.DEPTH_COMPONENT32F:rt.type===zi&&(ot=r.DEPTH_COMPONENT24));const ut=kt(E);Qt(E)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ut,ot,E.width,E.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,ut,ot,E.width,E.height)}else r.renderbufferStorage(r.RENDERBUFFER,ot,E.width,E.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,P)}else if(E.depthBuffer&&E.stencilBuffer){const ot=kt(E);W&&Qt(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ot,r.DEPTH24_STENCIL8,E.width,E.height):Qt(E)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ot,r.DEPTH24_STENCIL8,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,P)}else{const ot=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let rt=0;rt<ot.length;rt++){const ut=ot[rt],Et=s.convert(ut.format,ut.colorSpace),dt=s.convert(ut.type),yt=U(ut.internalFormat,Et,dt,ut.colorSpace),D=kt(E);W&&Qt(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,D,yt,E.width,E.height):Qt(E)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,D,yt,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,yt,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ge(P,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),tt(E.depthTexture,0);const ot=n.get(E.depthTexture).__webglTexture,rt=kt(E);if(E.depthTexture.format===vr)Qt(E)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ot,0,rt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ot,0);else if(E.depthTexture.format===us)Qt(E)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ot,0,rt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ot,0);else throw new Error("Unknown depthTexture format")}function Ct(P){const E=n.get(P),W=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!E.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");ge(E.__webglFramebuffer,P)}else if(W){E.__webglDepthbuffer=[];for(let ot=0;ot<6;ot++)e.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[ot]),E.__webglDepthbuffer[ot]=r.createRenderbuffer(),z(E.__webglDepthbuffer[ot],P,!1)}else e.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=r.createRenderbuffer(),z(E.__webglDepthbuffer,P,!1);e.bindFramebuffer(r.FRAMEBUFFER,null)}function Ht(P,E,W){const ot=n.get(P);E!==void 0&&Vt(ot.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),W!==void 0&&Ct(P)}function Ft(P){const E=P.texture,W=n.get(P),ot=n.get(E);P.addEventListener("dispose",J),P.isWebGLMultipleRenderTargets!==!0&&(ot.__webglTexture===void 0&&(ot.__webglTexture=r.createTexture()),ot.__version=E.version,o.memory.textures++);const rt=P.isWebGLCubeRenderTarget===!0,ut=P.isWebGLMultipleRenderTargets===!0,Et=y(P)||a;if(rt){W.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(a&&E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer[dt]=[];for(let yt=0;yt<E.mipmaps.length;yt++)W.__webglFramebuffer[dt][yt]=r.createFramebuffer()}else W.__webglFramebuffer[dt]=r.createFramebuffer()}else{if(a&&E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer=[];for(let dt=0;dt<E.mipmaps.length;dt++)W.__webglFramebuffer[dt]=r.createFramebuffer()}else W.__webglFramebuffer=r.createFramebuffer();if(ut)if(i.drawBuffers){const dt=P.texture;for(let yt=0,D=dt.length;yt<D;yt++){const ft=n.get(dt[yt]);ft.__webglTexture===void 0&&(ft.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&P.samples>0&&Qt(P)===!1){const dt=ut?E:[E];W.__webglMultisampledFramebuffer=r.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let yt=0;yt<dt.length;yt++){const D=dt[yt];W.__webglColorRenderbuffer[yt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,W.__webglColorRenderbuffer[yt]);const ft=s.convert(D.format,D.colorSpace),it=s.convert(D.type),Dt=U(D.internalFormat,ft,it,D.colorSpace,P.isXRRenderTarget===!0),At=kt(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,At,Dt,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+yt,r.RENDERBUFFER,W.__webglColorRenderbuffer[yt])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(W.__webglDepthRenderbuffer=r.createRenderbuffer(),z(W.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(rt){e.bindTexture(r.TEXTURE_CUBE_MAP,ot.__webglTexture),Mt(r.TEXTURE_CUBE_MAP,E,Et);for(let dt=0;dt<6;dt++)if(a&&E.mipmaps&&E.mipmaps.length>0)for(let yt=0;yt<E.mipmaps.length;yt++)Vt(W.__webglFramebuffer[dt][yt],P,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,yt);else Vt(W.__webglFramebuffer[dt],P,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);R(E,Et)&&b(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ut){const dt=P.texture;for(let yt=0,D=dt.length;yt<D;yt++){const ft=dt[yt],it=n.get(ft);e.bindTexture(r.TEXTURE_2D,it.__webglTexture),Mt(r.TEXTURE_2D,ft,Et),Vt(W.__webglFramebuffer,P,ft,r.COLOR_ATTACHMENT0+yt,r.TEXTURE_2D,0),R(ft,Et)&&b(r.TEXTURE_2D)}e.unbindTexture()}else{let dt=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(a?dt=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(dt,ot.__webglTexture),Mt(dt,E,Et),a&&E.mipmaps&&E.mipmaps.length>0)for(let yt=0;yt<E.mipmaps.length;yt++)Vt(W.__webglFramebuffer[yt],P,E,r.COLOR_ATTACHMENT0,dt,yt);else Vt(W.__webglFramebuffer,P,E,r.COLOR_ATTACHMENT0,dt,0);R(E,Et)&&b(dt),e.unbindTexture()}P.depthBuffer&&Ct(P)}function ae(P){const E=y(P)||a,W=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let ot=0,rt=W.length;ot<rt;ot++){const ut=W[ot];if(R(ut,E)){const Et=P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,dt=n.get(ut).__webglTexture;e.bindTexture(Et,dt),b(Et),e.unbindTexture()}}}function qt(P){if(a&&P.samples>0&&Qt(P)===!1){const E=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],W=P.width,ot=P.height;let rt=r.COLOR_BUFFER_BIT;const ut=[],Et=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,dt=n.get(P),yt=P.isWebGLMultipleRenderTargets===!0;if(yt)for(let D=0;D<E.length;D++)e.bindFramebuffer(r.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+D,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,dt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+D,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,dt.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,dt.__webglFramebuffer);for(let D=0;D<E.length;D++){ut.push(r.COLOR_ATTACHMENT0+D),P.depthBuffer&&ut.push(Et);const ft=dt.__ignoreDepthValues!==void 0?dt.__ignoreDepthValues:!1;if(ft===!1&&(P.depthBuffer&&(rt|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&(rt|=r.STENCIL_BUFFER_BIT)),yt&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,dt.__webglColorRenderbuffer[D]),ft===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[Et]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[Et])),yt){const it=n.get(E[D]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,it,0)}r.blitFramebuffer(0,0,W,ot,0,0,W,ot,rt,r.NEAREST),p&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ut)}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),yt)for(let D=0;D<E.length;D++){e.bindFramebuffer(r.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+D,r.RENDERBUFFER,dt.__webglColorRenderbuffer[D]);const ft=n.get(E[D]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,dt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+D,r.TEXTURE_2D,ft,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,dt.__webglMultisampledFramebuffer)}}function kt(P){return Math.min(h,P.samples)}function Qt(P){const E=n.get(P);return a&&P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function ve(P){const E=o.render.frame;g.get(P)!==E&&(g.set(P,E),P.update())}function Ae(P,E){const W=P.colorSpace,ot=P.format,rt=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||P.format===ol||W!==wi&&W!==On&&(ce.getTransfer(W)===ye?a===!1?t.has("EXT_sRGB")===!0&&ot===jn?(P.format=ol,P.minFilter=In,P.generateMipmaps=!1):E=Sh.sRGBToLinear(E):(ot!==jn||rt!==qi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),E}this.allocateTextureUnit=at,this.resetTextureUnits=Y,this.setTexture2D=tt,this.setTexture2DArray=B,this.setTexture3D=j,this.setTextureCube=gt,this.rebindTextures=Ht,this.setupRenderTarget=Ft,this.updateRenderTargetMipmap=ae,this.updateMultisampleRenderTarget=qt,this.setupDepthRenderbuffer=Ct,this.setupFrameBufferTexture=Vt,this.useMultisampledRTT=Qt}function dv(r,t,e){const n=e.isWebGL2;function i(s,o=On){let a;const l=ce.getTransfer(o);if(s===qi)return r.UNSIGNED_BYTE;if(s===ph)return r.UNSIGNED_SHORT_4_4_4_4;if(s===mh)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Od)return r.BYTE;if(s===Nd)return r.SHORT;if(s===Cl)return r.UNSIGNED_SHORT;if(s===dh)return r.INT;if(s===zi)return r.UNSIGNED_INT;if(s===ki)return r.FLOAT;if(s===Ws)return n?r.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Fd)return r.ALPHA;if(s===jn)return r.RGBA;if(s===Bd)return r.LUMINANCE;if(s===zd)return r.LUMINANCE_ALPHA;if(s===vr)return r.DEPTH_COMPONENT;if(s===us)return r.DEPTH_STENCIL;if(s===ol)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===kd)return r.RED;if(s===_h)return r.RED_INTEGER;if(s===Gd)return r.RG;if(s===gh)return r.RG_INTEGER;if(s===vh)return r.RGBA_INTEGER;if(s===po||s===mo||s===_o||s===go)if(l===ye)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===po)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===mo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===_o)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===go)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===po)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===mo)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===_o)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===go)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===_c||s===gc||s===vc||s===xc)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===_c)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===gc)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===vc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===xc)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Hd)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===yc||s===Mc)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(s===yc)return l===ye?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Mc)return l===ye?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Sc||s===Ec||s===Tc||s===bc||s===wc||s===Ac||s===Rc||s===Cc||s===Pc||s===Lc||s===Dc||s===Uc||s===Ic||s===Oc)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Sc)return l===ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Ec)return l===ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Tc)return l===ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===bc)return l===ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===wc)return l===ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Ac)return l===ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Rc)return l===ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Cc)return l===ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Pc)return l===ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Lc)return l===ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Dc)return l===ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Uc)return l===ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ic)return l===ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Oc)return l===ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===vo||s===Nc||s===Fc)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(s===vo)return l===ye?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Nc)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Fc)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Vd||s===Bc||s===zc||s===kc)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(s===vo)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Bc)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===zc)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===kc)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===gr?n?r.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class pv extends wn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Is extends Je{constructor(){super(),this.isGroup=!0,this.type="Group"}}const mv={type:"move"};class ko{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Is,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Is,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Is,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),d=this._getHandJoint(c,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(mv)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Is;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class _v extends mn{constructor(t,e,n,i,s,o,a,l,c,u){if(u=u!==void 0?u:vr,u!==vr&&u!==us)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===vr&&(n=zi),n===void 0&&u===us&&(n=gr),super(null,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:fn,this.minFilter=l!==void 0?l:fn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class gv extends Rr{constructor(t,e){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,p=null,g=null;const _=e.getContextAttributes();let m=null,d=null;const T=[],v=[],y=new wn;y.layers.enable(1),y.viewport=new we;const S=new wn;S.layers.enable(2),S.viewport=new we;const R=[y,S],b=new pv;b.layers.enable(1),b.layers.enable(2);let U=null,x=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let j=T[B];return j===void 0&&(j=new ko,T[B]=j),j.getTargetRaySpace()},this.getControllerGrip=function(B){let j=T[B];return j===void 0&&(j=new ko,T[B]=j),j.getGripSpace()},this.getHand=function(B){let j=T[B];return j===void 0&&(j=new ko,T[B]=j),j.getHandSpace()};function C(B){const j=v.indexOf(B.inputSource);if(j===-1)return;const gt=T[j];gt!==void 0&&(gt.update(B.inputSource,B.frame,c||o),gt.dispatchEvent({type:B.type,data:B.inputSource}))}function X(){i.removeEventListener("select",C),i.removeEventListener("selectstart",C),i.removeEventListener("selectend",C),i.removeEventListener("squeeze",C),i.removeEventListener("squeezestart",C),i.removeEventListener("squeezeend",C),i.removeEventListener("end",X),i.removeEventListener("inputsourceschange",J);for(let B=0;B<T.length;B++){const j=v[B];j!==null&&(v[B]=null,T[B].disconnect(j))}U=null,x=null,t.setRenderTarget(m),p=null,f=null,h=null,i=null,d=null,tt.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){s=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){a=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(B){c=B},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(B){if(i=B,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",C),i.addEventListener("selectstart",C),i.addEventListener("selectend",C),i.addEventListener("squeeze",C),i.addEventListener("squeezestart",C),i.addEventListener("squeezeend",C),i.addEventListener("end",X),i.addEventListener("inputsourceschange",J),_.xrCompatible!==!0&&await e.makeXRCompatible(),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const j={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(i,e,j),i.updateRenderState({baseLayer:p}),d=new Tr(p.framebufferWidth,p.framebufferHeight,{format:jn,type:qi,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let j=null,gt=null,mt=null;_.depth&&(mt=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,j=_.stencil?us:vr,gt=_.stencil?gr:zi);const xt={colorFormat:e.RGBA8,depthFormat:mt,scaleFactor:s};h=new XRWebGLBinding(i,e),f=h.createProjectionLayer(xt),i.updateRenderState({layers:[f]}),d=new Tr(f.textureWidth,f.textureHeight,{format:jn,type:qi,depthTexture:new _v(f.textureWidth,f.textureHeight,gt,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0});const It=t.properties.get(d);It.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),tt.setContext(i),tt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function J(B){for(let j=0;j<B.removed.length;j++){const gt=B.removed[j],mt=v.indexOf(gt);mt>=0&&(v[mt]=null,T[mt].disconnect(gt))}for(let j=0;j<B.added.length;j++){const gt=B.added[j];let mt=v.indexOf(gt);if(mt===-1){for(let It=0;It<T.length;It++)if(It>=v.length){v.push(gt),mt=It;break}else if(v[It]===null){v[It]=gt,mt=It;break}if(mt===-1)break}const xt=T[mt];xt&&xt.connect(gt)}}const Q=new F,I=new F;function H(B,j,gt){Q.setFromMatrixPosition(j.matrixWorld),I.setFromMatrixPosition(gt.matrixWorld);const mt=Q.distanceTo(I),xt=j.projectionMatrix.elements,It=gt.projectionMatrix.elements,Mt=xt[14]/(xt[10]-1),Lt=xt[14]/(xt[10]+1),Jt=(xt[9]+1)/xt[5],_e=(xt[9]-1)/xt[5],Vt=(xt[8]-1)/xt[0],z=(It[8]+1)/It[0],ge=Mt*Vt,Ct=Mt*z,Ht=mt/(-Vt+z),Ft=Ht*-Vt;j.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(Ft),B.translateZ(Ht),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert();const ae=Mt+Ht,qt=Lt+Ht,kt=ge-Ft,Qt=Ct+(mt-Ft),ve=Jt*Lt/qt*ae,Ae=_e*Lt/qt*ae;B.projectionMatrix.makePerspective(kt,Qt,ve,Ae,ae,qt),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}function $(B,j){j===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(j.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(i===null)return;b.near=S.near=y.near=B.near,b.far=S.far=y.far=B.far,(U!==b.near||x!==b.far)&&(i.updateRenderState({depthNear:b.near,depthFar:b.far}),U=b.near,x=b.far);const j=B.parent,gt=b.cameras;$(b,j);for(let mt=0;mt<gt.length;mt++)$(gt[mt],j);gt.length===2?H(b,y,S):b.projectionMatrix.copy(y.projectionMatrix),Y(B,b,j)};function Y(B,j,gt){gt===null?B.matrix.copy(j.matrixWorld):(B.matrix.copy(gt.matrixWorld),B.matrix.invert(),B.matrix.multiply(j.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(j.projectionMatrix),B.projectionMatrixInverse.copy(j.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=Xs*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(B){l=B,f!==null&&(f.fixedFoveation=B),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=B)};let at=null;function nt(B,j){if(u=j.getViewerPose(c||o),g=j,u!==null){const gt=u.views;p!==null&&(t.setRenderTargetFramebuffer(d,p.framebuffer),t.setRenderTarget(d));let mt=!1;gt.length!==b.cameras.length&&(b.cameras.length=0,mt=!0);for(let xt=0;xt<gt.length;xt++){const It=gt[xt];let Mt=null;if(p!==null)Mt=p.getViewport(It);else{const Jt=h.getViewSubImage(f,It);Mt=Jt.viewport,xt===0&&(t.setRenderTargetTextures(d,Jt.colorTexture,f.ignoreDepthValues?void 0:Jt.depthStencilTexture),t.setRenderTarget(d))}let Lt=R[xt];Lt===void 0&&(Lt=new wn,Lt.layers.enable(xt),Lt.viewport=new we,R[xt]=Lt),Lt.matrix.fromArray(It.transform.matrix),Lt.matrix.decompose(Lt.position,Lt.quaternion,Lt.scale),Lt.projectionMatrix.fromArray(It.projectionMatrix),Lt.projectionMatrixInverse.copy(Lt.projectionMatrix).invert(),Lt.viewport.set(Mt.x,Mt.y,Mt.width,Mt.height),xt===0&&(b.matrix.copy(Lt.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),mt===!0&&b.cameras.push(Lt)}}for(let gt=0;gt<T.length;gt++){const mt=v[gt],xt=T[gt];mt!==null&&xt!==void 0&&xt.update(mt,j,c||o)}at&&at(B,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),g=null}const tt=new Uh;tt.setAnimationLoop(nt),this.setAnimationLoop=function(B){at=B},this.dispose=function(){}}}function vv(r,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Ph(r)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function i(m,d,T,v,y){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),h(m,d)):d.isMeshPhongMaterial?(s(m,d),u(m,d)):d.isMeshStandardMaterial?(s(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,y)):d.isMeshMatcapMaterial?(s(m,d),g(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),_(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,T,v):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===pn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===pn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const T=t.get(d).envMap;if(T&&(m.envMap.value=T,m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const v=r._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*v,e(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,T,v){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*T,m.scale.value=v*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),t.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,T){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===pn&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){const T=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function xv(r,t,e,n){let i={},s={},o=[];const a=e.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(T,v){const y=v.program;n.uniformBlockBinding(T,y)}function c(T,v){let y=i[T.id];y===void 0&&(g(T),y=u(T),i[T.id]=y,T.addEventListener("dispose",m));const S=v.program;n.updateUBOMapping(T,S);const R=t.render.frame;s[T.id]!==R&&(f(T),s[T.id]=R)}function u(T){const v=h();T.__bindingPointIndex=v;const y=r.createBuffer(),S=T.__size,R=T.usage;return r.bindBuffer(r.UNIFORM_BUFFER,y),r.bufferData(r.UNIFORM_BUFFER,S,R),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,v,y),y}function h(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(T){const v=i[T.id],y=T.uniforms,S=T.__cache;r.bindBuffer(r.UNIFORM_BUFFER,v);for(let R=0,b=y.length;R<b;R++){const U=y[R];if(p(U,R,S)===!0){const x=U.__offset,C=Array.isArray(U.value)?U.value:[U.value];let X=0;for(let J=0;J<C.length;J++){const Q=C[J],I=_(Q);typeof Q=="number"?(U.__data[0]=Q,r.bufferSubData(r.UNIFORM_BUFFER,x+X,U.__data)):Q.isMatrix3?(U.__data[0]=Q.elements[0],U.__data[1]=Q.elements[1],U.__data[2]=Q.elements[2],U.__data[3]=Q.elements[0],U.__data[4]=Q.elements[3],U.__data[5]=Q.elements[4],U.__data[6]=Q.elements[5],U.__data[7]=Q.elements[0],U.__data[8]=Q.elements[6],U.__data[9]=Q.elements[7],U.__data[10]=Q.elements[8],U.__data[11]=Q.elements[0]):(Q.toArray(U.__data,X),X+=I.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,x,U.__data)}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function p(T,v,y){const S=T.value;if(y[v]===void 0){if(typeof S=="number")y[v]=S;else{const R=Array.isArray(S)?S:[S],b=[];for(let U=0;U<R.length;U++)b.push(R[U].clone());y[v]=b}return!0}else if(typeof S=="number"){if(y[v]!==S)return y[v]=S,!0}else{const R=Array.isArray(y[v])?y[v]:[y[v]],b=Array.isArray(S)?S:[S];for(let U=0;U<R.length;U++){const x=R[U];if(x.equals(b[U])===!1)return x.copy(b[U]),!0}}return!1}function g(T){const v=T.uniforms;let y=0;const S=16;let R=0;for(let b=0,U=v.length;b<U;b++){const x=v[b],C={boundary:0,storage:0},X=Array.isArray(x.value)?x.value:[x.value];for(let J=0,Q=X.length;J<Q;J++){const I=X[J],H=_(I);C.boundary+=H.boundary,C.storage+=H.storage}if(x.__data=new Float32Array(C.storage/Float32Array.BYTES_PER_ELEMENT),x.__offset=y,b>0){R=y%S;const J=S-R;R!==0&&J-C.boundary<0&&(y+=S-R,x.__offset=y)}y+=C.storage}return R=y%S,R>0&&(y+=S-R),T.__size=y,T.__cache={},this}function _(T){const v={boundary:0,storage:0};return typeof T=="number"?(v.boundary=4,v.storage=4):T.isVector2?(v.boundary=8,v.storage=8):T.isVector3||T.isColor?(v.boundary=16,v.storage=12):T.isVector4?(v.boundary=16,v.storage=16):T.isMatrix3?(v.boundary=48,v.storage=48):T.isMatrix4?(v.boundary=64,v.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),v}function m(T){const v=T.target;v.removeEventListener("dispose",m);const y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),r.deleteBuffer(i[v.id]),delete i[v.id],delete s[v.id]}function d(){for(const T in i)r.deleteBuffer(i[T]);o=[],i={},s={}}return{bind:l,update:c,dispose:d}}class Bh{constructor(t={}){const{canvas:e=gp(),context:n=null,depth:i=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;const p=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const d=[],T=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ze,this._useLegacyLights=!1,this.toneMapping=Xi,this.toneMappingExposure=1;const v=this;let y=!1,S=0,R=0,b=null,U=-1,x=null;const C=new we,X=new we;let J=null;const Q=new re(0);let I=0,H=e.width,$=e.height,Y=1,at=null,nt=null;const tt=new we(0,0,H,$),B=new we(0,0,H,$);let j=!1;const gt=new Ul;let mt=!1,xt=!1,It=null;const Mt=new Ne,Lt=new Yt,Jt=new F,_e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Vt(){return b===null?Y:1}let z=n;function ge(w,k){for(let K=0;K<w.length;K++){const V=w[K],Z=e.getContext(V,k);if(Z!==null)return Z}return null}try{const w={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Al}`),e.addEventListener("webglcontextlost",lt,!1),e.addEventListener("webglcontextrestored",ct,!1),e.addEventListener("webglcontextcreationerror",_t,!1),z===null){const k=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&k.shift(),z=ge(k,w),z===null)throw ge(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&z instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),z.getShaderPrecisionFormat===void 0&&(z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Ct,Ht,Ft,ae,qt,kt,Qt,ve,Ae,P,E,W,ot,rt,ut,Et,dt,yt,D,ft,it,Dt,At,Rt;function Tt(){Ct=new Pg(z),Ht=new Eg(z,Ct,t),Ct.init(Ht),Dt=new dv(z,Ct,Ht),Ft=new hv(z,Ct,Ht),ae=new Ug(z),qt=new $0,kt=new fv(z,Ct,Ft,qt,Ht,Dt,ae),Qt=new bg(v),ve=new Cg(v),Ae=new Hp(z,Ht),At=new Mg(z,Ct,Ae,Ht),P=new Lg(z,Ae,ae,At),E=new Fg(z,P,Ae,ae),D=new Ng(z,Ht,kt),Et=new Tg(qt),W=new Z0(v,Qt,ve,Ct,Ht,At,Et),ot=new vv(v,qt),rt=new Q0,ut=new sv(Ct,Ht),yt=new yg(v,Qt,ve,Ft,E,f,l),dt=new uv(v,E,Ht),Rt=new xv(z,ae,Ht,Ft),ft=new Sg(z,Ct,ae,Ht),it=new Dg(z,Ct,ae,Ht),ae.programs=W.programs,v.capabilities=Ht,v.extensions=Ct,v.properties=qt,v.renderLists=rt,v.shadowMap=dt,v.state=Ft,v.info=ae}Tt();const L=new gv(v,z);this.xr=L,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const w=Ct.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Ct.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(w){w!==void 0&&(Y=w,this.setSize(H,$,!1))},this.getSize=function(w){return w.set(H,$)},this.setSize=function(w,k,K=!0){if(L.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=w,$=k,e.width=Math.floor(w*Y),e.height=Math.floor(k*Y),K===!0&&(e.style.width=w+"px",e.style.height=k+"px"),this.setViewport(0,0,w,k)},this.getDrawingBufferSize=function(w){return w.set(H*Y,$*Y).floor()},this.setDrawingBufferSize=function(w,k,K){H=w,$=k,Y=K,e.width=Math.floor(w*K),e.height=Math.floor(k*K),this.setViewport(0,0,w,k)},this.getCurrentViewport=function(w){return w.copy(C)},this.getViewport=function(w){return w.copy(tt)},this.setViewport=function(w,k,K,V){w.isVector4?tt.set(w.x,w.y,w.z,w.w):tt.set(w,k,K,V),Ft.viewport(C.copy(tt).multiplyScalar(Y).floor())},this.getScissor=function(w){return w.copy(B)},this.setScissor=function(w,k,K,V){w.isVector4?B.set(w.x,w.y,w.z,w.w):B.set(w,k,K,V),Ft.scissor(X.copy(B).multiplyScalar(Y).floor())},this.getScissorTest=function(){return j},this.setScissorTest=function(w){Ft.setScissorTest(j=w)},this.setOpaqueSort=function(w){at=w},this.setTransparentSort=function(w){nt=w},this.getClearColor=function(w){return w.copy(yt.getClearColor())},this.setClearColor=function(){yt.setClearColor.apply(yt,arguments)},this.getClearAlpha=function(){return yt.getClearAlpha()},this.setClearAlpha=function(){yt.setClearAlpha.apply(yt,arguments)},this.clear=function(w=!0,k=!0,K=!0){let V=0;if(w){let Z=!1;if(b!==null){const St=b.texture.format;Z=St===vh||St===gh||St===_h}if(Z){const St=b.texture.type,Ut=St===qi||St===zi||St===Cl||St===gr||St===ph||St===mh,Bt=yt.getClearColor(),Gt=yt.getClearAlpha(),jt=Bt.r,zt=Bt.g,Wt=Bt.b;Ut?(p[0]=jt,p[1]=zt,p[2]=Wt,p[3]=Gt,z.clearBufferuiv(z.COLOR,0,p)):(g[0]=jt,g[1]=zt,g[2]=Wt,g[3]=Gt,z.clearBufferiv(z.COLOR,0,g))}else V|=z.COLOR_BUFFER_BIT}k&&(V|=z.DEPTH_BUFFER_BIT),K&&(V|=z.STENCIL_BUFFER_BIT),z.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",lt,!1),e.removeEventListener("webglcontextrestored",ct,!1),e.removeEventListener("webglcontextcreationerror",_t,!1),rt.dispose(),ut.dispose(),qt.dispose(),Qt.dispose(),ve.dispose(),E.dispose(),At.dispose(),Rt.dispose(),W.dispose(),L.dispose(),L.removeEventListener("sessionstart",te),L.removeEventListener("sessionend",ln),It&&(It.dispose(),It=null),ze.stop()};function lt(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function ct(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const w=ae.autoReset,k=dt.enabled,K=dt.autoUpdate,V=dt.needsUpdate,Z=dt.type;Tt(),ae.autoReset=w,dt.enabled=k,dt.autoUpdate=K,dt.needsUpdate=V,dt.type=Z}function _t(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function pt(w){const k=w.target;k.removeEventListener("dispose",pt),st(k)}function st(w){bt(w),qt.remove(w)}function bt(w){const k=qt.get(w).programs;k!==void 0&&(k.forEach(function(K){W.releaseProgram(K)}),w.isShaderMaterial&&W.releaseShaderCache(w))}this.renderBufferDirect=function(w,k,K,V,Z,St){k===null&&(k=_e);const Ut=Z.isMesh&&Z.matrixWorld.determinant()<0,Bt=Es(w,k,K,V,Z);Ft.setMaterial(V,Ut);let Gt=K.index,jt=1;if(V.wireframe===!0){if(Gt=P.getWireframeAttribute(K),Gt===void 0)return;jt=2}const zt=K.drawRange,Wt=K.attributes.position;let oe=zt.start*jt,xe=(zt.start+zt.count)*jt;St!==null&&(oe=Math.max(oe,St.start*jt),xe=Math.min(xe,(St.start+St.count)*jt)),Gt!==null?(oe=Math.max(oe,0),xe=Math.min(xe,Gt.count)):Wt!=null&&(oe=Math.max(oe,0),xe=Math.min(xe,Wt.count));const Ge=xe-oe;if(Ge<0||Ge===1/0)return;At.setup(Z,V,Bt,K,Gt);let Qe,Se=ft;if(Gt!==null&&(Qe=Ae.get(Gt),Se=it,Se.setIndex(Qe)),Z.isMesh)V.wireframe===!0?(Ft.setLineWidth(V.wireframeLinewidth*Vt()),Se.setMode(z.LINES)):Se.setMode(z.TRIANGLES);else if(Z.isLine){let Xt=V.linewidth;Xt===void 0&&(Xt=1),Ft.setLineWidth(Xt*Vt()),Z.isLineSegments?Se.setMode(z.LINES):Z.isLineLoop?Se.setMode(z.LINE_LOOP):Se.setMode(z.LINE_STRIP)}else Z.isPoints?Se.setMode(z.POINTS):Z.isSprite&&Se.setMode(z.TRIANGLES);if(Z.isInstancedMesh)Se.renderInstances(oe,Ge,Z.count);else if(K.isInstancedBufferGeometry){const Xt=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,We=Math.min(K.instanceCount,Xt);Se.renderInstances(oe,Ge,We)}else Se.render(oe,Ge)},this.compile=function(w,k){function K(V,Z,St){V.transparent===!0&&V.side===Ti&&V.forceSinglePass===!1?(V.side=pn,V.needsUpdate=!0,Pi(V,Z,St),V.side=Ki,V.needsUpdate=!0,Pi(V,Z,St),V.side=Ti):Pi(V,Z,St)}m=ut.get(w),m.init(),T.push(m),w.traverseVisible(function(V){V.isLight&&V.layers.test(k.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),m.setupLights(v._useLegacyLights),w.traverse(function(V){const Z=V.material;if(Z)if(Array.isArray(Z))for(let St=0;St<Z.length;St++){const Ut=Z[St];K(Ut,w,V)}else K(Z,w,V)}),T.pop(),m=null};let Pt=null;function Me(w){Pt&&Pt(w)}function te(){ze.stop()}function ln(){ze.start()}const ze=new Uh;ze.setAnimationLoop(Me),typeof self<"u"&&ze.setContext(self),this.setAnimationLoop=function(w){Pt=w,L.setAnimationLoop(w),w===null?ze.stop():ze.start()},L.addEventListener("sessionstart",te),L.addEventListener("sessionend",ln),this.render=function(w,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),L.enabled===!0&&L.isPresenting===!0&&(L.cameraAutoUpdate===!0&&L.updateCamera(k),k=L.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,k,b),m=ut.get(w,T.length),m.init(),T.push(m),Mt.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),gt.setFromProjectionMatrix(Mt),xt=this.localClippingEnabled,mt=Et.init(this.clippingPlanes,xt),_=rt.get(w,d.length),_.init(),d.push(_),je(w,k,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(at,nt),this.info.render.frame++,mt===!0&&Et.beginShadows();const K=m.state.shadowsArray;if(dt.render(K,w,k),mt===!0&&Et.endShadows(),this.info.autoReset===!0&&this.info.reset(),yt.render(_,w),m.setupLights(v._useLegacyLights),k.isArrayCamera){const V=k.cameras;for(let Z=0,St=V.length;Z<St;Z++){const Ut=V[Z];Pr(_,w,Ut,Ut.viewport)}}else Pr(_,w,k);b!==null&&(kt.updateMultisampleRenderTarget(b),kt.updateRenderTargetMipmap(b)),w.isScene===!0&&w.onAfterRender(v,w,k),At.resetDefaultState(),U=-1,x=null,T.pop(),T.length>0?m=T[T.length-1]:m=null,d.pop(),d.length>0?_=d[d.length-1]:_=null};function je(w,k,K,V){if(w.visible===!1)return;if(w.layers.test(k.layers)){if(w.isGroup)K=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(k);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||gt.intersectsSprite(w)){V&&Jt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Mt);const Ut=E.update(w),Bt=w.material;Bt.visible&&_.push(w,Ut,Bt,K,Jt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||gt.intersectsObject(w))){const Ut=E.update(w),Bt=w.material;if(V&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Jt.copy(w.boundingSphere.center)):(Ut.boundingSphere===null&&Ut.computeBoundingSphere(),Jt.copy(Ut.boundingSphere.center)),Jt.applyMatrix4(w.matrixWorld).applyMatrix4(Mt)),Array.isArray(Bt)){const Gt=Ut.groups;for(let jt=0,zt=Gt.length;jt<zt;jt++){const Wt=Gt[jt],oe=Bt[Wt.materialIndex];oe&&oe.visible&&_.push(w,Ut,oe,K,Jt.z,Wt)}}else Bt.visible&&_.push(w,Ut,Bt,K,Jt.z,null)}}const St=w.children;for(let Ut=0,Bt=St.length;Ut<Bt;Ut++)je(St[Ut],k,K,V)}function Pr(w,k,K,V){const Z=w.opaque,St=w.transmissive,Ut=w.transparent;m.setupLightsView(K),mt===!0&&Et.setGlobalState(v.clippingPlanes,K),St.length>0&&hi(Z,St,k,K),V&&Ft.viewport(C.copy(V)),Z.length>0&&ke(Z,k,K),St.length>0&&ke(St,k,K),Ut.length>0&&ke(Ut,k,K),Ft.buffers.depth.setTest(!0),Ft.buffers.depth.setMask(!0),Ft.buffers.color.setMask(!0),Ft.setPolygonOffset(!1)}function hi(w,k,K,V){const Z=Ht.isWebGL2;It===null&&(It=new Tr(1,1,{generateMipmaps:!0,type:Ct.has("EXT_color_buffer_half_float")?Ws:qi,minFilter:Vs,samples:Z?4:0})),v.getDrawingBufferSize(Lt),Z?It.setSize(Lt.x,Lt.y):It.setSize(Ga(Lt.x),Ga(Lt.y));const St=v.getRenderTarget();v.setRenderTarget(It),v.getClearColor(Q),I=v.getClearAlpha(),I<1&&v.setClearColor(16777215,.5),v.clear();const Ut=v.toneMapping;v.toneMapping=Xi,ke(w,K,V),kt.updateMultisampleRenderTarget(It),kt.updateRenderTargetMipmap(It);let Bt=!1;for(let Gt=0,jt=k.length;Gt<jt;Gt++){const zt=k[Gt],Wt=zt.object,oe=zt.geometry,xe=zt.material,Ge=zt.group;if(xe.side===Ti&&Wt.layers.test(V.layers)){const Qe=xe.side;xe.side=pn,xe.needsUpdate=!0,Lr(Wt,K,V,oe,xe,Ge),xe.side=Qe,xe.needsUpdate=!0,Bt=!0}}Bt===!0&&(kt.updateMultisampleRenderTarget(It),kt.updateRenderTargetMipmap(It)),v.setRenderTarget(St),v.setClearColor(Q,I),v.toneMapping=Ut}function ke(w,k,K){const V=k.isScene===!0?k.overrideMaterial:null;for(let Z=0,St=w.length;Z<St;Z++){const Ut=w[Z],Bt=Ut.object,Gt=Ut.geometry,jt=V===null?Ut.material:V,zt=Ut.group;Bt.layers.test(K.layers)&&Lr(Bt,k,K,Gt,jt,zt)}}function Lr(w,k,K,V,Z,St){w.onBeforeRender(v,k,K,V,Z,St),w.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),Z.onBeforeRender(v,k,K,V,w,St),Z.transparent===!0&&Z.side===Ti&&Z.forceSinglePass===!1?(Z.side=pn,Z.needsUpdate=!0,v.renderBufferDirect(K,k,V,Z,w,St),Z.side=Ki,Z.needsUpdate=!0,v.renderBufferDirect(K,k,V,Z,w,St),Z.side=Ti):v.renderBufferDirect(K,k,V,Z,w,St),w.onAfterRender(v,k,K,V,Z,St)}function Pi(w,k,K){k.isScene!==!0&&(k=_e);const V=qt.get(w),Z=m.state.lights,St=m.state.shadowsArray,Ut=Z.state.version,Bt=W.getParameters(w,Z.state,St,k,K),Gt=W.getProgramCacheKey(Bt);let jt=V.programs;V.environment=w.isMeshStandardMaterial?k.environment:null,V.fog=k.fog,V.envMap=(w.isMeshStandardMaterial?ve:Qt).get(w.envMap||V.environment),jt===void 0&&(w.addEventListener("dispose",pt),jt=new Map,V.programs=jt);let zt=jt.get(Gt);if(zt!==void 0){if(V.currentProgram===zt&&V.lightsStateVersion===Ut)return Li(w,Bt),zt}else Bt.uniforms=W.getUniforms(w),w.onBuild(K,Bt,v),w.onBeforeCompile(Bt,v),zt=W.acquireProgram(Bt,Gt),jt.set(Gt,zt),V.uniforms=Bt.uniforms;const Wt=V.uniforms;(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Wt.clippingPlanes=Et.uniform),Li(w,Bt),V.needsLights=Gn(w),V.lightsStateVersion=Ut,V.needsLights&&(Wt.ambientLightColor.value=Z.state.ambient,Wt.lightProbe.value=Z.state.probe,Wt.directionalLights.value=Z.state.directional,Wt.directionalLightShadows.value=Z.state.directionalShadow,Wt.spotLights.value=Z.state.spot,Wt.spotLightShadows.value=Z.state.spotShadow,Wt.rectAreaLights.value=Z.state.rectArea,Wt.ltc_1.value=Z.state.rectAreaLTC1,Wt.ltc_2.value=Z.state.rectAreaLTC2,Wt.pointLights.value=Z.state.point,Wt.pointLightShadows.value=Z.state.pointShadow,Wt.hemisphereLights.value=Z.state.hemi,Wt.directionalShadowMap.value=Z.state.directionalShadowMap,Wt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Wt.spotShadowMap.value=Z.state.spotShadowMap,Wt.spotLightMatrix.value=Z.state.spotLightMatrix,Wt.spotLightMap.value=Z.state.spotLightMap,Wt.pointShadowMap.value=Z.state.pointShadowMap,Wt.pointShadowMatrix.value=Z.state.pointShadowMatrix);const oe=zt.getUniforms(),xe=Da.seqWithValue(oe.seq,Wt);return V.currentProgram=zt,V.uniformsList=xe,zt}function Li(w,k){const K=qt.get(w);K.outputColorSpace=k.outputColorSpace,K.instancing=k.instancing,K.instancingColor=k.instancingColor,K.skinning=k.skinning,K.morphTargets=k.morphTargets,K.morphNormals=k.morphNormals,K.morphColors=k.morphColors,K.morphTargetsCount=k.morphTargetsCount,K.numClippingPlanes=k.numClippingPlanes,K.numIntersection=k.numClipIntersection,K.vertexAlphas=k.vertexAlphas,K.vertexTangents=k.vertexTangents,K.toneMapping=k.toneMapping}function Es(w,k,K,V,Z){k.isScene!==!0&&(k=_e),kt.resetTextureUnits();const St=k.fog,Ut=V.isMeshStandardMaterial?k.environment:null,Bt=b===null?v.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:wi,Gt=(V.isMeshStandardMaterial?ve:Qt).get(V.envMap||Ut),jt=V.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,zt=!!K.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Wt=!!K.morphAttributes.position,oe=!!K.morphAttributes.normal,xe=!!K.morphAttributes.color;let Ge=Xi;V.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(Ge=v.toneMapping);const Qe=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Se=Qe!==void 0?Qe.length:0,Xt=qt.get(V),We=m.state.lights;if(mt===!0&&(xt===!0||w!==x)){const M=w===x&&V.id===U;Et.setState(V,w,M)}let me=!1;V.version===Xt.__version?(Xt.needsLights&&Xt.lightsStateVersion!==We.state.version||Xt.outputColorSpace!==Bt||Z.isInstancedMesh&&Xt.instancing===!1||!Z.isInstancedMesh&&Xt.instancing===!0||Z.isSkinnedMesh&&Xt.skinning===!1||!Z.isSkinnedMesh&&Xt.skinning===!0||Z.isInstancedMesh&&Xt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Xt.instancingColor===!1&&Z.instanceColor!==null||Xt.envMap!==Gt||V.fog===!0&&Xt.fog!==St||Xt.numClippingPlanes!==void 0&&(Xt.numClippingPlanes!==Et.numPlanes||Xt.numIntersection!==Et.numIntersection)||Xt.vertexAlphas!==jt||Xt.vertexTangents!==zt||Xt.morphTargets!==Wt||Xt.morphNormals!==oe||Xt.morphColors!==xe||Xt.toneMapping!==Ge||Ht.isWebGL2===!0&&Xt.morphTargetsCount!==Se)&&(me=!0):(me=!0,Xt.__version=V.version);let Hn=Xt.currentProgram;me===!0&&(Hn=Pi(V,k,Z));let Di=!1,$n=!1,er=!1;const le=Hn.getUniforms(),Ie=Xt.uniforms;if(Ft.useProgram(Hn.program)&&(Di=!0,$n=!0,er=!0),V.id!==U&&(U=V.id,$n=!0),Di||x!==w){le.setValue(z,"projectionMatrix",w.projectionMatrix),le.setValue(z,"viewMatrix",w.matrixWorldInverse);const M=le.map.cameraPosition;M!==void 0&&M.setValue(z,Jt.setFromMatrixPosition(w.matrixWorld)),Ht.logarithmicDepthBuffer&&le.setValue(z,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&le.setValue(z,"isOrthographic",w.isOrthographicCamera===!0),x!==w&&(x=w,$n=!0,er=!0)}if(Z.isSkinnedMesh){le.setOptional(z,Z,"bindMatrix"),le.setOptional(z,Z,"bindMatrixInverse");const M=Z.skeleton;M&&(Ht.floatVertexTextures?(M.boneTexture===null&&M.computeBoneTexture(),le.setValue(z,"boneTexture",M.boneTexture,kt),le.setValue(z,"boneTextureSize",M.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const nr=K.morphAttributes;if((nr.position!==void 0||nr.normal!==void 0||nr.color!==void 0&&Ht.isWebGL2===!0)&&D.update(Z,K,Hn),($n||Xt.receiveShadow!==Z.receiveShadow)&&(Xt.receiveShadow=Z.receiveShadow,le.setValue(z,"receiveShadow",Z.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Ie.envMap.value=Gt,Ie.flipEnvMap.value=Gt.isCubeTexture&&Gt.isRenderTargetTexture===!1?-1:1),$n&&(le.setValue(z,"toneMappingExposure",v.toneMappingExposure),Xt.needsLights&&Ts(Ie,er),St&&V.fog===!0&&ot.refreshFogUniforms(Ie,St),ot.refreshMaterialUniforms(Ie,V,Y,$,It),Da.upload(z,Xt.uniformsList,Ie,kt)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Da.upload(z,Xt.uniformsList,Ie,kt),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&le.setValue(z,"center",Z.center),le.setValue(z,"modelViewMatrix",Z.modelViewMatrix),le.setValue(z,"normalMatrix",Z.normalMatrix),le.setValue(z,"modelMatrix",Z.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const M=V.uniformsGroups;for(let N=0,et=M.length;N<et;N++)if(Ht.isWebGL2){const G=M[N];Rt.update(G,Hn),Rt.bind(G,Hn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Hn}function Ts(w,k){w.ambientLightColor.needsUpdate=k,w.lightProbe.needsUpdate=k,w.directionalLights.needsUpdate=k,w.directionalLightShadows.needsUpdate=k,w.pointLights.needsUpdate=k,w.pointLightShadows.needsUpdate=k,w.spotLights.needsUpdate=k,w.spotLightShadows.needsUpdate=k,w.rectAreaLights.needsUpdate=k,w.hemisphereLights.needsUpdate=k}function Gn(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(w,k,K){qt.get(w.texture).__webglTexture=k,qt.get(w.depthTexture).__webglTexture=K;const V=qt.get(w);V.__hasExternalTextures=!0,V.__hasExternalTextures&&(V.__autoAllocateDepthBuffer=K===void 0,V.__autoAllocateDepthBuffer||Ct.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,k){const K=qt.get(w);K.__webglFramebuffer=k,K.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(w,k=0,K=0){b=w,S=k,R=K;let V=!0,Z=null,St=!1,Ut=!1;if(w){const Gt=qt.get(w);Gt.__useDefaultFramebuffer!==void 0?(Ft.bindFramebuffer(z.FRAMEBUFFER,null),V=!1):Gt.__webglFramebuffer===void 0?kt.setupRenderTarget(w):Gt.__hasExternalTextures&&kt.rebindTextures(w,qt.get(w.texture).__webglTexture,qt.get(w.depthTexture).__webglTexture);const jt=w.texture;(jt.isData3DTexture||jt.isDataArrayTexture||jt.isCompressedArrayTexture)&&(Ut=!0);const zt=qt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(zt[k])?Z=zt[k][K]:Z=zt[k],St=!0):Ht.isWebGL2&&w.samples>0&&kt.useMultisampledRTT(w)===!1?Z=qt.get(w).__webglMultisampledFramebuffer:Array.isArray(zt)?Z=zt[K]:Z=zt,C.copy(w.viewport),X.copy(w.scissor),J=w.scissorTest}else C.copy(tt).multiplyScalar(Y).floor(),X.copy(B).multiplyScalar(Y).floor(),J=j;if(Ft.bindFramebuffer(z.FRAMEBUFFER,Z)&&Ht.drawBuffers&&V&&Ft.drawBuffers(w,Z),Ft.viewport(C),Ft.scissor(X),Ft.setScissorTest(J),St){const Gt=qt.get(w.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+k,Gt.__webglTexture,K)}else if(Ut){const Gt=qt.get(w.texture),jt=k||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Gt.__webglTexture,K||0,jt)}U=-1},this.readRenderTargetPixels=function(w,k,K,V,Z,St,Ut){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Bt=qt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ut!==void 0&&(Bt=Bt[Ut]),Bt){Ft.bindFramebuffer(z.FRAMEBUFFER,Bt);try{const Gt=w.texture,jt=Gt.format,zt=Gt.type;if(jt!==jn&&Dt.convert(jt)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Wt=zt===Ws&&(Ct.has("EXT_color_buffer_half_float")||Ht.isWebGL2&&Ct.has("EXT_color_buffer_float"));if(zt!==qi&&Dt.convert(zt)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_TYPE)&&!(zt===ki&&(Ht.isWebGL2||Ct.has("OES_texture_float")||Ct.has("WEBGL_color_buffer_float")))&&!Wt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=w.width-V&&K>=0&&K<=w.height-Z&&z.readPixels(k,K,V,Z,Dt.convert(jt),Dt.convert(zt),St)}finally{const Gt=b!==null?qt.get(b).__webglFramebuffer:null;Ft.bindFramebuffer(z.FRAMEBUFFER,Gt)}}},this.copyFramebufferToTexture=function(w,k,K=0){const V=Math.pow(2,-K),Z=Math.floor(k.image.width*V),St=Math.floor(k.image.height*V);kt.setTexture2D(k,0),z.copyTexSubImage2D(z.TEXTURE_2D,K,0,0,w.x,w.y,Z,St),Ft.unbindTexture()},this.copyTextureToTexture=function(w,k,K,V=0){const Z=k.image.width,St=k.image.height,Ut=Dt.convert(K.format),Bt=Dt.convert(K.type);kt.setTexture2D(K,0),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,K.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,K.unpackAlignment),k.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,V,w.x,w.y,Z,St,Ut,Bt,k.image.data):k.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,V,w.x,w.y,k.mipmaps[0].width,k.mipmaps[0].height,Ut,k.mipmaps[0].data):z.texSubImage2D(z.TEXTURE_2D,V,w.x,w.y,Ut,Bt,k.image),V===0&&K.generateMipmaps&&z.generateMipmap(z.TEXTURE_2D),Ft.unbindTexture()},this.copyTextureToTexture3D=function(w,k,K,V,Z=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const St=w.max.x-w.min.x+1,Ut=w.max.y-w.min.y+1,Bt=w.max.z-w.min.z+1,Gt=Dt.convert(V.format),jt=Dt.convert(V.type);let zt;if(V.isData3DTexture)kt.setTexture3D(V,0),zt=z.TEXTURE_3D;else if(V.isDataArrayTexture)kt.setTexture2DArray(V,0),zt=z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,V.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,V.unpackAlignment);const Wt=z.getParameter(z.UNPACK_ROW_LENGTH),oe=z.getParameter(z.UNPACK_IMAGE_HEIGHT),xe=z.getParameter(z.UNPACK_SKIP_PIXELS),Ge=z.getParameter(z.UNPACK_SKIP_ROWS),Qe=z.getParameter(z.UNPACK_SKIP_IMAGES),Se=K.isCompressedTexture?K.mipmaps[0]:K.image;z.pixelStorei(z.UNPACK_ROW_LENGTH,Se.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Se.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,w.min.x),z.pixelStorei(z.UNPACK_SKIP_ROWS,w.min.y),z.pixelStorei(z.UNPACK_SKIP_IMAGES,w.min.z),K.isDataTexture||K.isData3DTexture?z.texSubImage3D(zt,Z,k.x,k.y,k.z,St,Ut,Bt,Gt,jt,Se.data):K.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),z.compressedTexSubImage3D(zt,Z,k.x,k.y,k.z,St,Ut,Bt,Gt,Se.data)):z.texSubImage3D(zt,Z,k.x,k.y,k.z,St,Ut,Bt,Gt,jt,Se),z.pixelStorei(z.UNPACK_ROW_LENGTH,Wt),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,oe),z.pixelStorei(z.UNPACK_SKIP_PIXELS,xe),z.pixelStorei(z.UNPACK_SKIP_ROWS,Ge),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Qe),Z===0&&V.generateMipmaps&&z.generateMipmap(zt),Ft.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?kt.setTextureCube(w,0):w.isData3DTexture?kt.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?kt.setTexture2DArray(w,0):kt.setTexture2D(w,0),Ft.unbindTexture()},this.resetState=function(){S=0,R=0,b=null,Ft.reset(),At.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Pl?"display-p3":"srgb",e.unpackColorSpace=ce.workingColorSpace===Qa?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(t){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!t}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ze?xr:xh}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===xr?Ze:wi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class yv extends Bh{}yv.prototype.isWebGL1Renderer=!0;class Mv extends Je{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class zh extends ys{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Ru=new Ne,ul=new Dl,wa=new to,Aa=new F;class Sv extends Je{constructor(t=new ci,e=new zh){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),wa.copy(n.boundingSphere),wa.applyMatrix4(i),wa.radius+=s,t.ray.intersectsSphere(wa)===!1)return;Ru.copy(i).invert(),ul.copy(t.ray).applyMatrix4(Ru);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=f,_=p;g<_;g++){const m=c.getX(g);Aa.fromBufferAttribute(h,m),Cu(Aa,m,l,i,t,e,this)}}else{const f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let g=f,_=p;g<_;g++)Aa.fromBufferAttribute(h,g),Cu(Aa,g,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Cu(r,t,e,n,i,s,o){const a=ul.distanceSqToPoint(r);if(a<e){const l=new F;ul.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,object:o})}}class Nl extends ci{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new F,f=new F,p=[],g=[],_=[],m=[];for(let d=0;d<=n;d++){const T=[],v=d/n;let y=0;d===0&&o===0?y=.5/e:d===n&&l===Math.PI&&(y=-.5/e);for(let S=0;S<=e;S++){const R=S/e;h.x=-t*Math.cos(i+R*s)*Math.sin(o+v*a),h.y=t*Math.cos(o+v*a),h.z=t*Math.sin(i+R*s)*Math.sin(o+v*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),m.push(R+y,1-v),T.push(c++)}u.push(T)}for(let d=0;d<n;d++)for(let T=0;T<e;T++){const v=u[d][T+1],y=u[d][T],S=u[d+1][T],R=u[d+1][T+1];(d!==0||o>0)&&p.push(v,y,R),(d!==n-1||l<Math.PI)&&p.push(y,S,R)}this.setIndex(p),this.setAttribute("position",new ai(g,3)),this.setAttribute("normal",new ai(_,3)),this.setAttribute("uv",new ai(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Nl(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ev extends ys{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new re(16777215),this.specular=new re(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yh,this.normalScale=new Yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Rl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const Ha={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class kh{constructor(t,e,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const p=c[h],g=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const Tv=new kh;class na{constructor(t){this.manager=t!==void 0?t:Tv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}na.DEFAULT_MATERIAL_NAME="__DEFAULT";const yi={};class bv extends Error{constructor(t,e){super(t),this.response=e}}class wv extends na{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=Ha.get(t);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(yi[t]!==void 0){yi[t].push({onLoad:e,onProgress:n,onError:i});return}yi[t]=[],yi[t].push({onLoad:e,onProgress:n,onError:i});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=yi[t],h=c.body.getReader(),f=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),p=f?parseInt(f):0,g=p!==0;let _=0;const m=new ReadableStream({start(d){T();function T(){h.read().then(({done:v,value:y})=>{if(v)d.close();else{_+=y.byteLength;const S=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:p});for(let R=0,b=u.length;R<b;R++){const U=u[R];U.onProgress&&U.onProgress(S)}d.enqueue(y),T()}})}}});return new Response(m)}else throw new bv(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(f);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{Ha.add(t,c);const u=yi[t];delete yi[t];for(let h=0,f=u.length;h<f;h++){const p=u[h];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=yi[t];if(u===void 0)throw this.manager.itemError(t),c;delete yi[t];for(let h=0,f=u.length;h<f;h++){const p=u[h];p.onError&&p.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class Av extends na{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,o=Ha.get(t);if(o!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0),o;const a=qs("img");function l(){u(),Ha.add(t,this),e&&e(this),s.manager.itemEnd(t)}function c(h){u(),i&&i(h),s.manager.itemError(t),s.manager.itemEnd(t)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(t),a.src=t,a}}class Rv extends na{constructor(t){super(t)}load(t,e,n,i){const s=new mn,o=new Av(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},n,i),s}}class Gh extends Je{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new re(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const Go=new Ne,Pu=new F,Lu=new F;class Cv{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Yt(512,512),this.map=null,this.mapPass=null,this.matrix=new Ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ul,this._frameExtents=new Yt(1,1),this._viewportCount=1,this._viewports=[new we(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Pu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Pu),Lu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Lu),e.updateMatrixWorld(),Go.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Go),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Go)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Du=new Ne,Ls=new F,Ho=new F;class Pv extends Cv{constructor(){super(new wn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Yt(4,2),this._viewportCount=6,this._viewports=[new we(2,1,1,1),new we(0,1,1,1),new we(3,1,1,1),new we(1,1,1,1),new we(3,0,1,1),new we(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Ls.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ls),Ho.copy(n.position),Ho.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Ho),n.updateMatrixWorld(),i.makeTranslation(-Ls.x,-Ls.y,-Ls.z),Du.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Du)}}class Lv extends Gh{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Pv}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}let Hh=class extends Gh{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}},Ra;class Vh{static getContext(){return Ra===void 0&&(Ra=new(window.AudioContext||window.webkitAudioContext)),Ra}static setContext(t){Ra=t}}class Dv extends na{constructor(t){super(t)}load(t,e,n,i){const s=this,o=new wv(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(l){try{const c=l.slice(0);Vh.getContext().decodeAudioData(c,function(h){e(h)},a)}catch(c){a(c)}},n,i);function a(l){i?i(l):console.error(l),s.manager.itemError(t)}}}class Wh{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Uu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Uu();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Uu(){return(typeof performance>"u"?Date:performance).now()}const lr=new F,Iu=new Zi,Uv=new F,cr=new F;class Iv extends Je{constructor(){super(),this.type="AudioListener",this.context=Vh.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new Wh}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(t){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=t,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}updateMatrixWorld(t){super.updateMatrixWorld(t);const e=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(lr,Iu,Uv),cr.set(0,0,-1).applyQuaternion(Iu),e.positionX){const i=this.context.currentTime+this.timeDelta;e.positionX.linearRampToValueAtTime(lr.x,i),e.positionY.linearRampToValueAtTime(lr.y,i),e.positionZ.linearRampToValueAtTime(lr.z,i),e.forwardX.linearRampToValueAtTime(cr.x,i),e.forwardY.linearRampToValueAtTime(cr.y,i),e.forwardZ.linearRampToValueAtTime(cr.z,i),e.upX.linearRampToValueAtTime(n.x,i),e.upY.linearRampToValueAtTime(n.y,i),e.upZ.linearRampToValueAtTime(n.z,i)}else e.setPosition(lr.x,lr.y,lr.z),e.setOrientation(cr.x,cr.y,cr.z,n.x,n.y,n.z)}}class Ov extends Je{constructor(t){super(),this.type="Audio",this.listener=t,this.context=t.context,this.gain=this.context.createGain(),this.gain.connect(t.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(t){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=t,this.connect(),this}setMediaElementSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(t),this.connect(),this}setMediaStreamSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(t),this.connect(),this}setBuffer(t){return this.buffer=t,this.sourceType="buffer",this.autoplay&&this.play(),this}play(t=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+t;const e=this.context.createBufferSource();return e.buffer=this.buffer,e.loop=this.loop,e.loopStart=this.loopStart,e.loopEnd=this.loopEnd,e.onended=this.onEnded.bind(this),e.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=e,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].connect(this.filters[t]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].disconnect(this.filters[t]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(t){return t||(t=[]),this._connected===!0?(this.disconnect(),this.filters=t.slice(),this.connect()):this.filters=t.slice(),this}setDetune(t){if(this.detune=t,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(t){return this.setFilters(t?[t]:[])}setPlaybackRate(t){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=t,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(t){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=t,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(t){return this.loopStart=t,this}setLoopEnd(t){return this.loopEnd=t,this}getVolume(){return this.gain.gain.value}setVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}}class Nv{constructor(t,e=2048){this.analyser=t.context.createAnalyser(),this.analyser.fftSize=e,this.data=new Uint8Array(this.analyser.frequencyBinCount),t.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let t=0;const e=this.getFrequencyData();for(let n=0;n<e.length;n++)t+=e[n];return t/e.length}}class Ou{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(nn(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Al}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Al);const Nu={type:"change"},Vo={type:"start"},Fu={type:"end"},Ca=new Dl,Bu=new Bi,Fv=Math.cos(70*_p.DEG2RAD);class Bv extends Rr{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ur.ROTATE,MIDDLE:Ur.DOLLY,RIGHT:Ur.PAN},this.touches={ONE:Ir.ROTATE,TWO:Ir.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(D){D.addEventListener("keydown",E),this._domElementKeyEvents=D},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",E),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Nu),n.update(),s=i.NONE},this.update=function(){const D=new F,ft=new Zi().setFromUnitVectors(t.up,new F(0,1,0)),it=ft.clone().invert(),Dt=new F,At=new Zi,Rt=new F,Tt=2*Math.PI;return function(lt=null){const ct=n.object.position;D.copy(ct).sub(n.target),D.applyQuaternion(ft),a.setFromVector3(D),n.autoRotate&&s===i.NONE&&X(x(lt)),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let _t=n.minAzimuthAngle,pt=n.maxAzimuthAngle;isFinite(_t)&&isFinite(pt)&&(_t<-Math.PI?_t+=Tt:_t>Math.PI&&(_t-=Tt),pt<-Math.PI?pt+=Tt:pt>Math.PI&&(pt-=Tt),_t<=pt?a.theta=Math.max(_t,Math.min(pt,a.theta)):a.theta=a.theta>(_t+pt)/2?Math.max(_t,a.theta):Math.min(pt,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.zoomToCursor&&R||n.object.isOrthographicCamera?a.radius=nt(a.radius):a.radius=nt(a.radius*c),D.setFromSpherical(a),D.applyQuaternion(it),ct.copy(n.target).add(D),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0));let st=!1;if(n.zoomToCursor&&R){let bt=null;if(n.object.isPerspectiveCamera){const Pt=D.length();bt=nt(Pt*c);const Me=Pt-bt;n.object.position.addScaledVector(y,Me),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const Pt=new F(S.x,S.y,0);Pt.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),st=!0;const Me=new F(S.x,S.y,0);Me.unproject(n.object),n.object.position.sub(Me).add(Pt),n.object.updateMatrixWorld(),bt=D.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;bt!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(bt).add(n.object.position):(Ca.origin.copy(n.object.position),Ca.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Ca.direction))<Fv?t.lookAt(n.target):(Bu.setFromNormalAndCoplanarPoint(n.object.up,n.target),Ca.intersectPlane(Bu,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),st=!0);return c=1,R=!1,st||Dt.distanceToSquared(n.object.position)>o||8*(1-At.dot(n.object.quaternion))>o||Rt.distanceToSquared(n.target)>0?(n.dispatchEvent(Nu),Dt.copy(n.object.position),At.copy(n.object.quaternion),Rt.copy(n.target),st=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",rt),n.domElement.removeEventListener("pointerdown",qt),n.domElement.removeEventListener("pointercancel",Qt),n.domElement.removeEventListener("wheel",P),n.domElement.removeEventListener("pointermove",kt),n.domElement.removeEventListener("pointerup",Qt),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",E),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const o=1e-6,a=new Ou,l=new Ou;let c=1;const u=new F,h=new Yt,f=new Yt,p=new Yt,g=new Yt,_=new Yt,m=new Yt,d=new Yt,T=new Yt,v=new Yt,y=new F,S=new Yt;let R=!1;const b=[],U={};function x(D){return D!==null?2*Math.PI/60*n.autoRotateSpeed*D:2*Math.PI/60/60*n.autoRotateSpeed}function C(){return Math.pow(.95,n.zoomSpeed)}function X(D){l.theta-=D}function J(D){l.phi-=D}const Q=function(){const D=new F;return function(it,Dt){D.setFromMatrixColumn(Dt,0),D.multiplyScalar(-it),u.add(D)}}(),I=function(){const D=new F;return function(it,Dt){n.screenSpacePanning===!0?D.setFromMatrixColumn(Dt,1):(D.setFromMatrixColumn(Dt,0),D.crossVectors(n.object.up,D)),D.multiplyScalar(it),u.add(D)}}(),H=function(){const D=new F;return function(it,Dt){const At=n.domElement;if(n.object.isPerspectiveCamera){const Rt=n.object.position;D.copy(Rt).sub(n.target);let Tt=D.length();Tt*=Math.tan(n.object.fov/2*Math.PI/180),Q(2*it*Tt/At.clientHeight,n.object.matrix),I(2*Dt*Tt/At.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(Q(it*(n.object.right-n.object.left)/n.object.zoom/At.clientWidth,n.object.matrix),I(Dt*(n.object.top-n.object.bottom)/n.object.zoom/At.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function $(D){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=D:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Y(D){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=D:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function at(D){if(!n.zoomToCursor)return;R=!0;const ft=n.domElement.getBoundingClientRect(),it=D.clientX-ft.left,Dt=D.clientY-ft.top,At=ft.width,Rt=ft.height;S.x=it/At*2-1,S.y=-(Dt/Rt)*2+1,y.set(S.x,S.y,1).unproject(n.object).sub(n.object.position).normalize()}function nt(D){return Math.max(n.minDistance,Math.min(n.maxDistance,D))}function tt(D){h.set(D.clientX,D.clientY)}function B(D){at(D),d.set(D.clientX,D.clientY)}function j(D){g.set(D.clientX,D.clientY)}function gt(D){f.set(D.clientX,D.clientY),p.subVectors(f,h).multiplyScalar(n.rotateSpeed);const ft=n.domElement;X(2*Math.PI*p.x/ft.clientHeight),J(2*Math.PI*p.y/ft.clientHeight),h.copy(f),n.update()}function mt(D){T.set(D.clientX,D.clientY),v.subVectors(T,d),v.y>0?$(C()):v.y<0&&Y(C()),d.copy(T),n.update()}function xt(D){_.set(D.clientX,D.clientY),m.subVectors(_,g).multiplyScalar(n.panSpeed),H(m.x,m.y),g.copy(_),n.update()}function It(D){at(D),D.deltaY<0?Y(C()):D.deltaY>0&&$(C()),n.update()}function Mt(D){let ft=!1;switch(D.code){case n.keys.UP:D.ctrlKey||D.metaKey||D.shiftKey?J(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(0,n.keyPanSpeed),ft=!0;break;case n.keys.BOTTOM:D.ctrlKey||D.metaKey||D.shiftKey?J(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(0,-n.keyPanSpeed),ft=!0;break;case n.keys.LEFT:D.ctrlKey||D.metaKey||D.shiftKey?X(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(n.keyPanSpeed,0),ft=!0;break;case n.keys.RIGHT:D.ctrlKey||D.metaKey||D.shiftKey?X(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(-n.keyPanSpeed,0),ft=!0;break}ft&&(D.preventDefault(),n.update())}function Lt(){if(b.length===1)h.set(b[0].pageX,b[0].pageY);else{const D=.5*(b[0].pageX+b[1].pageX),ft=.5*(b[0].pageY+b[1].pageY);h.set(D,ft)}}function Jt(){if(b.length===1)g.set(b[0].pageX,b[0].pageY);else{const D=.5*(b[0].pageX+b[1].pageX),ft=.5*(b[0].pageY+b[1].pageY);g.set(D,ft)}}function _e(){const D=b[0].pageX-b[1].pageX,ft=b[0].pageY-b[1].pageY,it=Math.sqrt(D*D+ft*ft);d.set(0,it)}function Vt(){n.enableZoom&&_e(),n.enablePan&&Jt()}function z(){n.enableZoom&&_e(),n.enableRotate&&Lt()}function ge(D){if(b.length==1)f.set(D.pageX,D.pageY);else{const it=yt(D),Dt=.5*(D.pageX+it.x),At=.5*(D.pageY+it.y);f.set(Dt,At)}p.subVectors(f,h).multiplyScalar(n.rotateSpeed);const ft=n.domElement;X(2*Math.PI*p.x/ft.clientHeight),J(2*Math.PI*p.y/ft.clientHeight),h.copy(f)}function Ct(D){if(b.length===1)_.set(D.pageX,D.pageY);else{const ft=yt(D),it=.5*(D.pageX+ft.x),Dt=.5*(D.pageY+ft.y);_.set(it,Dt)}m.subVectors(_,g).multiplyScalar(n.panSpeed),H(m.x,m.y),g.copy(_)}function Ht(D){const ft=yt(D),it=D.pageX-ft.x,Dt=D.pageY-ft.y,At=Math.sqrt(it*it+Dt*Dt);T.set(0,At),v.set(0,Math.pow(T.y/d.y,n.zoomSpeed)),$(v.y),d.copy(T)}function Ft(D){n.enableZoom&&Ht(D),n.enablePan&&Ct(D)}function ae(D){n.enableZoom&&Ht(D),n.enableRotate&&ge(D)}function qt(D){n.enabled!==!1&&(b.length===0&&(n.domElement.setPointerCapture(D.pointerId),n.domElement.addEventListener("pointermove",kt),n.domElement.addEventListener("pointerup",Qt)),ut(D),D.pointerType==="touch"?W(D):ve(D))}function kt(D){n.enabled!==!1&&(D.pointerType==="touch"?ot(D):Ae(D))}function Qt(D){Et(D),b.length===0&&(n.domElement.releasePointerCapture(D.pointerId),n.domElement.removeEventListener("pointermove",kt),n.domElement.removeEventListener("pointerup",Qt)),n.dispatchEvent(Fu),s=i.NONE}function ve(D){let ft;switch(D.button){case 0:ft=n.mouseButtons.LEFT;break;case 1:ft=n.mouseButtons.MIDDLE;break;case 2:ft=n.mouseButtons.RIGHT;break;default:ft=-1}switch(ft){case Ur.DOLLY:if(n.enableZoom===!1)return;B(D),s=i.DOLLY;break;case Ur.ROTATE:if(D.ctrlKey||D.metaKey||D.shiftKey){if(n.enablePan===!1)return;j(D),s=i.PAN}else{if(n.enableRotate===!1)return;tt(D),s=i.ROTATE}break;case Ur.PAN:if(D.ctrlKey||D.metaKey||D.shiftKey){if(n.enableRotate===!1)return;tt(D),s=i.ROTATE}else{if(n.enablePan===!1)return;j(D),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Vo)}function Ae(D){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;gt(D);break;case i.DOLLY:if(n.enableZoom===!1)return;mt(D);break;case i.PAN:if(n.enablePan===!1)return;xt(D);break}}function P(D){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(D.preventDefault(),n.dispatchEvent(Vo),It(D),n.dispatchEvent(Fu))}function E(D){n.enabled===!1||n.enablePan===!1||Mt(D)}function W(D){switch(dt(D),b.length){case 1:switch(n.touches.ONE){case Ir.ROTATE:if(n.enableRotate===!1)return;Lt(),s=i.TOUCH_ROTATE;break;case Ir.PAN:if(n.enablePan===!1)return;Jt(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case Ir.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Vt(),s=i.TOUCH_DOLLY_PAN;break;case Ir.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;z(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Vo)}function ot(D){switch(dt(D),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;ge(D),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;Ct(D),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ft(D),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ae(D),n.update();break;default:s=i.NONE}}function rt(D){n.enabled!==!1&&D.preventDefault()}function ut(D){b.push(D)}function Et(D){delete U[D.pointerId];for(let ft=0;ft<b.length;ft++)if(b[ft].pointerId==D.pointerId){b.splice(ft,1);return}}function dt(D){let ft=U[D.pointerId];ft===void 0&&(ft=new Yt,U[D.pointerId]=ft),ft.set(D.pageX,D.pageY)}function yt(D){const ft=D.pointerId===b[0].pointerId?b[1]:b[0];return U[ft.pointerId]}n.domElement.addEventListener("contextmenu",rt),n.domElement.addEventListener("pointerdown",qt),n.domElement.addEventListener("pointercancel",Qt),n.domElement.addEventListener("wheel",P,{passive:!1}),this.update()}}function Si(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Xh(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}/*!
 * GSAP 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Rn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},fs={duration:.5,overwrite:!1,delay:0},Fl,an,De,Fn=1e8,pe=1/Fn,hl=Math.PI*2,zv=hl/4,kv=0,qh=Math.sqrt,Gv=Math.cos,Hv=Math.sin,Ye=function(t){return typeof t=="string"},Ue=function(t){return typeof t=="function"},Ai=function(t){return typeof t=="number"},Bl=function(t){return typeof t>"u"},li=function(t){return typeof t=="object"},_n=function(t){return t!==!1},zl=function(){return typeof window<"u"},Pa=function(t){return Ue(t)||Ye(t)},Yh=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},on=Array.isArray,fl=/(?:-?\.?\d|\.)+/gi,jh=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,es=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Wo=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Kh=/[+-]=-?[.\d]+/,Zh=/[^,'"\[\]\s]+/gi,Vv=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ce,Un,dl,kl,Cn={},Va={},$h,Jh=function(t){return(Va=wr(t,Cn))&&xn},Gl=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Wa=function(t,e){return!e&&console.warn(t)},Qh=function(t,e){return t&&(Cn[t]=e)&&Va&&(Va[t]=e)||Cn},Ys=function(){return 0},Wv={suppressEvents:!0,isStart:!0,kill:!1},Ua={suppressEvents:!0,kill:!1},Xv={suppressEvents:!0},Hl={},Yi=[],pl={},tf,bn={},Xo={},zu=30,Ia=[],Vl="",Wl=function(t){var e=t[0],n,i;if(li(e)||Ue(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=Ia.length;i--&&!Ia[i].targetTest(e););n=Ia[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new bf(t[i],n)))||t.splice(i,1);return t},yr=function(t){return t._gsap||Wl(Bn(t))[0]._gsap},ef=function(t,e,n){return(n=t[e])&&Ue(n)?t[e]():Bl(n)&&t.getAttribute&&t.getAttribute(e)||n},gn=function(t,e){return(t=t.split(",")).forEach(e)||t},Oe=function(t){return Math.round(t*1e5)/1e5||0},$e=function(t){return Math.round(t*1e7)/1e7||0},ss=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},qv=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},Xa=function(){var t=Yi.length,e=Yi.slice(0),n,i;for(pl={},Yi.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},nf=function(t,e,n,i){Yi.length&&!an&&Xa(),t.render(e,n,i||an&&e<0&&(t._initted||t._startAt)),Yi.length&&!an&&Xa()},rf=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Zh).length<2?e:Ye(t)?t.trim():t},sf=function(t){return t},kn=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Yv=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},wr=function(t,e){for(var n in e)t[n]=e[n];return t},ku=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=li(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},qa=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},ks=function(t){var e=t.parent||Ce,n=t.keyframes?Yv(on(t.keyframes)):kn;if(_n(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},jv=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},af=function(t,e,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=t[i],a;if(s)for(a=e[s];o&&o[s]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=o,e.parent=e._dp=t,e},io=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,o=e._next;s?s._next=o:t[n]===e&&(t[n]=o),o?o._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},$i=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Mr=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},Kv=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},ml=function(t,e,n,i){return t._startAt&&(an?t._startAt.revert(Ua):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},Zv=function r(t){return!t||t._ts&&r(t.parent)},Gu=function(t){return t._repeat?ds(t._tTime,t=t.duration()+t._rDelay)*t:0},ds=function(t,e){var n=Math.floor(t/=e);return t&&n===t?n-1:n},Ya=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},ro=function(t){return t._end=$e(t._start+(t._tDur/Math.abs(t._ts||t._rts||pe)||0))},so=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=$e(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),ro(t),n._dirty||Mr(n,t)),t},of=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=Ya(t.rawTime(),e),(!e._dur||ia(0,e.totalDuration(),n)-e._tTime>pe)&&e.render(n,!0)),Mr(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-pe}},ri=function(t,e,n,i){return e.parent&&$i(e),e._start=$e((Ai(n)?n:n||t!==Ce?Dn(t,n,e):t._time)+e._delay),e._end=$e(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),af(t,e,"_first","_last",t._sort?"_start":0),_l(e)||(t._recent=e),i||of(t,e),t._ts<0&&so(t,t._tTime),t},lf=function(t,e){return(Cn.ScrollTrigger||Gl("scrollTrigger",e))&&Cn.ScrollTrigger.create(e,t)},cf=function(t,e,n,i,s){if(ql(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!an&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&tf!==An.frame)return Yi.push(t),t._lazy=[s,i],1},$v=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},_l=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},Jv=function(t,e,n,i){var s=t.ratio,o=e<0||!e&&(!t._start&&$v(t)&&!(!t._initted&&_l(t))||(t._ts<0||t._dp._ts<0)&&!_l(t))?0:1,a=t._rDelay,l=0,c,u,h;if(a&&t._repeat&&(l=ia(0,t._tDur,e),u=ds(l,a),t._yoyo&&u&1&&(o=1-o),u!==ds(t._tTime,a)&&(s=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==s||an||i||t._zTime===pe||!e&&t._zTime){if(!t._initted&&cf(t,e,i,n,l))return;for(h=t._zTime,t._zTime=e||(n?pe:0),n||(n=e&&!h),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&ml(t,e,n,!0),t._onUpdate&&!n&&zn(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&zn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&$i(t,1),!n&&!an&&(zn(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},Qv=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},ps=function(t,e,n,i){var s=t._repeat,o=$e(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=s?s<0?1e10:$e(o*(s+1)+t._rDelay*s):o,a>0&&!i&&so(t,t._tTime=t._tDur*a),t.parent&&ro(t),n||Mr(t.parent,t),t},Hu=function(t){return t instanceof dn?Mr(t):ps(t,t._dur)},tx={_start:0,endTime:Ys,totalDuration:Ys},Dn=function r(t,e,n){var i=t.labels,s=t._recent||tx,o=t.duration()>=Fn?s.endTime(!1):t._dur,a,l,c;return Ye(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=o),i[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(on(n)?n[0]:n).totalDuration()),a>1?r(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},Gs=function(t,e,n){var i=Ai(e[1]),s=(i?2:1)+(t<2?0:1),o=e[s],a,l;if(i&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=_n(l.vars.inherit)&&l.parent;o.immediateRender=_n(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[s-1]}return new Be(e[0],o,e[s+1])},Qi=function(t,e){return t||t===0?e(t):e},ia=function(t,e,n){return n<t?t:n>e?e:n},sn=function(t,e){return!Ye(t)||!(e=Vv.exec(t))?"":e[1]},ex=function(t,e,n){return Qi(n,function(i){return ia(t,e,i)})},gl=[].slice,uf=function(t,e){return t&&li(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&li(t[0]))&&!t.nodeType&&t!==Un},nx=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return Ye(i)&&!e||uf(i,1)?(s=n).push.apply(s,Bn(i)):n.push(i)})||n},Bn=function(t,e,n){return De&&!e&&De.selector?De.selector(t):Ye(t)&&!n&&(dl||!ms())?gl.call((e||kl).querySelectorAll(t),0):on(t)?nx(t,n):uf(t)?gl.call(t,0):t?[t]:[]},vl=function(t){return t=Bn(t)[0]||Wa("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return Bn(e,n.querySelectorAll?n:n===t?Wa("Invalid scope")||kl.createElement("div"):t)}},hf=function(t){return t.sort(function(){return .5-Math.random()})},ff=function(t){if(Ue(t))return t;var e=li(t)?t:{each:t},n=Sr(e.ease),i=e.from||0,s=parseFloat(e.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=e.axis,u=i,h=i;return Ye(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],h=i[1]),function(f,p,g){var _=(g||e).length,m=o[_],d,T,v,y,S,R,b,U,x;if(!m){if(x=e.grid==="auto"?0:(e.grid||[1,Fn])[1],!x){for(b=-Fn;b<(b=g[x++].getBoundingClientRect().left)&&x<_;);x--}for(m=o[_]=[],d=l?Math.min(x,_)*u-.5:i%x,T=x===Fn?0:l?_*h/x-.5:i/x|0,b=0,U=Fn,R=0;R<_;R++)v=R%x-d,y=T-(R/x|0),m[R]=S=c?Math.abs(c==="y"?y:v):qh(v*v+y*y),S>b&&(b=S),S<U&&(U=S);i==="random"&&hf(m),m.max=b-U,m.min=U,m.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(x>_?_-1:c?c==="y"?_/x:x:Math.max(x,_/x))||0)*(i==="edges"?-1:1),m.b=_<0?s-_:s,m.u=sn(e.amount||e.each)||0,n=n&&_<0?Sf(n):n}return _=(m[f]-m.min)/m.max||0,$e(m.b+(n?n(_):_)*m.v)+m.u}},xl=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=$e(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(Ai(n)?0:sn(n))}},df=function(t,e){var n=on(t),i,s;return!n&&li(t)&&(i=n=t.radius||Fn,t.values?(t=Bn(t.values),(s=!Ai(t[0]))&&(i*=i)):t=xl(t.increment)),Qi(e,n?Ue(t)?function(o){return s=t(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=Fn,u=0,h=t.length,f,p;h--;)s?(f=t[h].x-a,p=t[h].y-l,f=f*f+p*p):f=Math.abs(t[h]-a),f<c&&(c=f,u=h);return u=!i||c<=i?t[u]:o,s||u===o||Ai(o)?u:u+sn(o)}:xl(t))},pf=function(t,e,n,i){return Qi(on(t)?!e:n===!0?!!(n=0):!i,function(){return on(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},ix=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,o){return o(s)},i)}},rx=function(t,e){return function(n){return t(parseFloat(n))+(e||sn(n))}},sx=function(t,e,n){return _f(t,e,0,1,n)},mf=function(t,e,n){return Qi(n,function(i){return t[~~e(i)]})},ax=function r(t,e,n){var i=e-t;return on(t)?mf(t,r(0,t.length),e):Qi(n,function(s){return(i+(s-t)%i)%i+t})},ox=function r(t,e,n){var i=e-t,s=i*2;return on(t)?mf(t,r(0,t.length-1),e):Qi(n,function(o){return o=(s+(o-t)%s)%s||0,t+(o>i?s-o:o)})},js=function(t){for(var e=0,n="",i,s,o,a;~(i=t.indexOf("random(",e));)o=t.indexOf(")",i),a=t.charAt(i+7)==="[",s=t.substr(i+7,o-i-7).match(a?Zh:fl),n+=t.substr(e,i-e)+pf(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),e=o+1;return n+t.substr(e,t.length-e)},_f=function(t,e,n,i,s){var o=e-t,a=i-n;return Qi(s,function(l){return n+((l-t)/o*a||0)})},lx=function r(t,e,n,i){var s=isNaN(t+e)?0:function(p){return(1-p)*t+p*e};if(!s){var o=Ye(t),a={},l,c,u,h,f;if(n===!0&&(i=1)&&(n=null),o)t={p:t},e={p:e};else if(on(t)&&!on(e)){for(u=[],h=t.length,f=h-2,c=1;c<h;c++)u.push(r(t[c-1],t[c]));h--,s=function(g){g*=h;var _=Math.min(f,~~g);return u[_](g-_)},n=e}else i||(t=wr(on(t)?[]:{},t));if(!u){for(l in e)Xl.call(a,t,l,"get",e[l]);s=function(g){return Kl(g,a)||(o?t.p:t)}}}return Qi(n,s)},Vu=function(t,e,n){var i=t.labels,s=Fn,o,a,l;for(o in i)a=i[o]-e,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},zn=function(t,e,n){var i=t.vars,s=i[e],o=De,a=t._ctx,l,c,u;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&Yi.length&&Xa(),a&&(De=a),u=l?s.apply(c,l):s.call(c),De=o,u},Os=function(t){return $i(t),t.scrollTrigger&&t.scrollTrigger.kill(!!an),t.progress()<1&&zn(t,"onInterrupt"),t},ns,gf=[],vf=function(t){if(zl()&&t){t=!t.name&&t.default||t;var e=t.name,n=Ue(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:Ys,render:Kl,add:Xl,kill:Tx,modifier:Ex,rawVars:0},o={targetTest:0,get:0,getSetter:jl,aliases:{},register:0};if(ms(),t!==i){if(bn[e])return;kn(i,kn(qa(t,s),o)),wr(i.prototype,wr(s,qa(t,o))),bn[i.prop=e]=i,t.targetTest&&(Ia.push(i),Hl[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Qh(e,i),t.register&&t.register(xn,i,vn)}else t&&gf.push(t)},de=255,Ns={aqua:[0,de,de],lime:[0,de,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,de],navy:[0,0,128],white:[de,de,de],olive:[128,128,0],yellow:[de,de,0],orange:[de,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[de,0,0],pink:[de,192,203],cyan:[0,de,de],transparent:[de,de,de,0]},qo=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*de+.5|0},xf=function(t,e,n){var i=t?Ai(t)?[t>>16,t>>8&de,t&de]:0:Ns.black,s,o,a,l,c,u,h,f,p,g;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Ns[t])i=Ns[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+s+s+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&de,i&de,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&de,t&de]}else if(t.substr(0,3)==="hsl"){if(i=g=t.match(fl),!e)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,i.length>3&&(i[3]*=1),i[0]=qo(l+1/3,s,o),i[1]=qo(l,s,o),i[2]=qo(l-1/3,s,o);else if(~t.indexOf("="))return i=t.match(jh),n&&i.length<4&&(i[3]=1),i}else i=t.match(fl)||Ns.transparent;i=i.map(Number)}return e&&!g&&(s=i[0]/de,o=i[1]/de,a=i[2]/de,h=Math.max(s,o,a),f=Math.min(s,o,a),u=(h+f)/2,h===f?l=c=0:(p=h-f,c=u>.5?p/(2-h-f):p/(h+f),l=h===s?(o-a)/p+(o<a?6:0):h===o?(a-s)/p+2:(s-o)/p+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},yf=function(t){var e=[],n=[],i=-1;return t.split(ji).forEach(function(s){var o=s.match(es)||[];e.push.apply(e,o),n.push(i+=o.length+1)}),e.c=n,e},Wu=function(t,e,n){var i="",s=(t+i).match(ji),o=e?"hsla(":"rgba(",a=0,l,c,u,h;if(!s)return t;if(s=s.map(function(f){return(f=xf(f,e,1))&&o+(e?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=yf(t),l=n.c,l.join(i)!==u.c.join(i)))for(c=t.replace(ji,"1").split(es),h=c.length-1;a<h;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=t.split(ji),h=c.length-1;a<h;a++)i+=c[a]+s[a];return i+c[h]},ji=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Ns)r+="|"+t+"\\b";return new RegExp(r+")","gi")}(),cx=/hsl[a]?\(/,Mf=function(t){var e=t.join(" "),n;if(ji.lastIndex=0,ji.test(e))return n=cx.test(e),t[1]=Wu(t[1],n),t[0]=Wu(t[0],n,yf(t[1])),!0},Ks,An=function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,u,h,f,p,g=function _(m){var d=r()-i,T=m===!0,v,y,S,R;if(d>t&&(n+=d-e),i+=d,S=i-n,v=S-o,(v>0||T)&&(R=++h.frame,f=S-h.time*1e3,h.time=S=S/1e3,o+=v+(v>=s?4:s-v),y=1),T||(l=c(_)),y)for(p=0;p<a.length;p++)a[p](S,f,R,m)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){$h&&(!dl&&zl()&&(Un=dl=window,kl=Un.document||{},Cn.gsap=xn,(Un.gsapVersions||(Un.gsapVersions=[])).push(xn.version),Jh(Va||Un.GreenSockGlobals||!Un.gsap&&Un||{}),u=Un.requestAnimationFrame,gf.forEach(vf)),l&&h.sleep(),c=u||function(m){return setTimeout(m,o-h.time*1e3+1|0)},Ks=1,g(2))},sleep:function(){(u?Un.cancelAnimationFrame:clearTimeout)(l),Ks=0,c=Ys},lagSmoothing:function(m,d){t=m||1/0,e=Math.min(d||33,t)},fps:function(m){s=1e3/(m||240),o=h.time*1e3+s},add:function(m,d,T){var v=d?function(y,S,R,b){m(y,S,R,b),h.remove(v)}:m;return h.remove(m),a[T?"unshift":"push"](v),ms(),v},remove:function(m,d){~(d=a.indexOf(m))&&a.splice(d,1)&&p>=d&&p--},_listeners:a},h}(),ms=function(){return!Ks&&An.wake()},ne={},ux=/^[\d.\-M][\d.\-,\s]/,hx=/["']/g,fx=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[i]=isNaN(c)?c.replace(hx,"").trim():+c,i=l.substr(a+1).trim();return e},dx=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},px=function(t){var e=(t+"").split("("),n=ne[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[fx(e[1])]:dx(t).split(",").map(rf)):ne._CE&&ux.test(t)?ne._CE("",t):n},Sf=function(t){return function(e){return 1-t(1-e)}},Ef=function r(t,e){for(var n=t._first,i;n;)n instanceof dn?r(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?r(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},Sr=function(t,e){return t&&(Ue(t)?t:ne[t]||px(t))||e},Cr=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},o;return gn(t,function(a){ne[a]=Cn[a]=s,ne[o=a.toLowerCase()]=n;for(var l in s)ne[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ne[a+"."+l]=s[l]}),s},Tf=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Yo=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),o=s/hl*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*Hv((u-o)*s)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:Tf(a);return s=hl/s,l.config=function(c,u){return r(t,c,u)},l},jo=function r(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:Tf(n);return i.config=function(s){return r(t,s)},i};gn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;Cr(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});ne.Linear.easeNone=ne.none=ne.Linear.easeIn;Cr("Elastic",Yo("in"),Yo("out"),Yo());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(a){return a<e?r*a*a:a<n?r*Math.pow(a-1.5/t,2)+.75:a<i?r*(a-=2.25/t)*a+.9375:r*Math.pow(a-2.625/t,2)+.984375};Cr("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Cr("Expo",function(r){return r?Math.pow(2,10*(r-1)):0});Cr("Circ",function(r){return-(qh(1-r*r)-1)});Cr("Sine",function(r){return r===1?1:-Gv(r*zv)+1});Cr("Back",jo("in"),jo("out"),jo());ne.SteppedEase=ne.steps=Cn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,o=1-pe;return function(a){return((i*ia(0,o,a)|0)+s)*n}}};fs.ease=ne["quad.out"];gn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Vl+=r+","+r+"Params,"});var bf=function(t,e){this.id=kv++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:ef,this.set=e?e.getSetter:jl},Zs=function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,ps(this,+e.duration,1,1),this.data=e.data,De&&(this._ctx=De,De.data.push(this)),Ks||An.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,ps(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(ms(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(so(this,n),!s._dp||s.parent||of(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&ri(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===pe||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),nf(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Gu(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Gu(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?ds(this._tTime,s)+1:1},t.timeScale=function(n){if(!arguments.length)return this._rts===-pe?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?Ya(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-pe?0:this._rts,this.totalTime(ia(-Math.abs(this._delay),this._tDur,i),!0),ro(this),Kv(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ms(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==pe&&(this._tTime-=pe)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&ri(i,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(_n(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ya(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=Xv);var i=an;return an=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),an=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(i._ts||1),i=i._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1/0:this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Hu(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Hu(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(Dn(this,n),_n(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,_n(i))},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-pe:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-pe,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-pe)},t.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},t.then=function(n){var i=this;return new Promise(function(s){var o=Ue(n)?n:sf,a=function(){var c=i.then;i.then=null,Ue(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=c),s(o),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},t.kill=function(){Os(this)},r}();kn(Zs.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-pe,_prom:0,_ps:!1,_rts:1});var dn=function(r){Xh(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=_n(n.sortChildren),Ce&&ri(n.parent||Ce,Si(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&lf(Si(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,o){return Gs(0,arguments,this),this},e.from=function(i,s,o){return Gs(1,arguments,this),this},e.fromTo=function(i,s,o,a){return Gs(2,arguments,this),this},e.set=function(i,s,o){return s.duration=0,s.parent=this,ks(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Be(i,s,Dn(this,o),1),this},e.call=function(i,s,o){return ri(this,Be.delayedCall(0,i,s),o)},e.staggerTo=function(i,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new Be(i,o,Dn(this,l)),this},e.staggerFrom=function(i,s,o,a,l,c,u){return o.runBackwards=1,ks(o).immediateRender=_n(o.immediateRender),this.staggerTo(i,s,o,a,l,c,u)},e.staggerFromTo=function(i,s,o,a,l,c,u,h){return a.startAt=o,ks(a).immediateRender=_n(a.immediateRender),this.staggerTo(i,s,a,l,c,u,h)},e.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:$e(i),h=this._zTime<0!=i<0&&(this._initted||!c),f,p,g,_,m,d,T,v,y,S,R,b;if(this!==Ce&&u>l&&i>=0&&(u=l),u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),f=u,y=this._start,v=this._ts,d=!v,h&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(R=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,o);if(f=$e(u%m),u===l?(_=this._repeat,f=c):(_=~~(u/m),_&&_===u/m&&(f=c,_--),f>c&&(f=c)),S=ds(this._tTime,m),!a&&this._tTime&&S!==_&&this._tTime-S*m-this._dur<=0&&(S=_),R&&_&1&&(f=c-f,b=1),_!==S&&!this._lock){var U=R&&S&1,x=U===(R&&_&1);if(_<S&&(U=!U),a=U?0:u%c?c:u,this._lock=1,this.render(a||(b?0:$e(_*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&zn(this,"onRepeat"),this.vars.repeatRefresh&&!b&&(this.invalidate()._lock=1),a&&a!==this._time||d!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,x&&(this._lock=2,a=U?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!b&&this.invalidate()),this._lock=0,!this._ts&&!d)return this;Ef(this,b)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(T=Qv(this,$e(a),$e(f)),T&&(u-=f-(f=T._start))),this._tTime=u,this._time=f,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&f&&!s&&!_&&(zn(this,"onStart"),this._tTime!==u))return this;if(f>=a&&i>=0)for(p=this._first;p;){if(g=p._next,(p._act||f>=p._start)&&p._ts&&T!==p){if(p.parent!==this)return this.render(i,s,o);if(p.render(p._ts>0?(f-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(f-p._start)*p._ts,s,o),f!==this._time||!this._ts&&!d){T=0,g&&(u+=this._zTime=-pe);break}}p=g}else{p=this._last;for(var C=i<0?i:f;p;){if(g=p._prev,(p._act||C<=p._end)&&p._ts&&T!==p){if(p.parent!==this)return this.render(i,s,o);if(p.render(p._ts>0?(C-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(C-p._start)*p._ts,s,o||an&&(p._initted||p._startAt)),f!==this._time||!this._ts&&!d){T=0,g&&(u+=this._zTime=C?-pe:pe);break}}p=g}}if(T&&!s&&(this.pause(),T.render(f>=a?0:-pe)._zTime=f>=a?1:-1,this._ts))return this._start=y,ro(this),this.render(i,s,o);this._onUpdate&&!s&&zn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(y===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&$i(this,1),!s&&!(i<0&&!a)&&(u||a||!l)&&(zn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var o=this;if(Ai(s)||(s=Dn(this,s,i)),!(i instanceof Zs)){if(on(i))return i.forEach(function(a){return o.add(a,s)}),this;if(Ye(i))return this.addLabel(i,s);if(Ue(i))i=Be.delayedCall(0,i);else return this}return this!==i?ri(this,i,s):this},e.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Fn);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Be?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},e.remove=function(i){return Ye(i)?this.removeLabel(i):Ue(i)?this.killTweensOf(i):(io(this,i),i===this._recent&&(this._recent=this._last),Mr(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=$e(An.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=Dn(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,o){var a=Be.delayedCall(0,s||Ys,o);return a.data="isPause",this._hasPause=1,ri(this,a,Dn(this,i))},e.removePause=function(i){var s=this._first;for(i=Dn(this,i);s;)s._start===i&&s.data==="isPause"&&$i(s),s=s._next},e.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Gi!==a[l]&&a[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var o=[],a=Bn(i),l=this._first,c=Ai(s),u;l;)l instanceof Be?qv(l._targets,a)&&(c?(!Gi||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},e.tweenTo=function(i,s){s=s||{};var o=this,a=Dn(o,i),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,p,g=Be.to(o,kn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||pe,onStart:function(){if(o.pause(),!p){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==m&&ps(g,m,0,1).render(g._time,!0,!0),p=1}u&&u.apply(g,h||[])}},s));return f?g.render(0):g},e.tweenFromTo=function(i,s,o){return this.tweenTo(s,kn({startAt:{time:Dn(this,i)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Vu(this,Dn(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Vu(this,Dn(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+pe)},e.shiftChildren=function(i,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return Mr(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Mr(this)},e.totalDuration=function(i){var s=0,o=this,a=o._last,l=Fn,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,ri(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;ps(o,o===Ce&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(i){if(Ce._ts&&(nf(Ce,Ya(i,Ce)),tf=An.frame),An.frame>=zu){zu+=Rn.autoSleep||120;var s=Ce._first;if((!s||!s._ts)&&Rn.autoSleep&&An._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||An.sleep()}}},t}(Zs);kn(dn.prototype,{_lock:0,_hasPause:0,_forcing:0});var mx=function(t,e,n,i,s,o,a){var l=new vn(this._pt,t,e,0,1,Lf,null,s),c=0,u=0,h,f,p,g,_,m,d,T;for(l.b=n,l.e=i,n+="",i+="",(d=~i.indexOf("random("))&&(i=js(i)),o&&(T=[n,i],o(T,t,e),n=T[0],i=T[1]),f=n.match(Wo)||[];h=Wo.exec(i);)g=h[0],_=i.substring(c,h.index),p?p=(p+1)%5:_.substr(-5)==="rgba("&&(p=1),g!==f[u++]&&(m=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:m,c:g.charAt(1)==="="?ss(m,g)-m:parseFloat(g)-m,m:p&&p<4?Math.round:0},c=Wo.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(Kh.test(i)||d)&&(l.e=0),this._pt=l,l},Xl=function(t,e,n,i,s,o,a,l,c,u){Ue(i)&&(i=i(s||0,t,o));var h=t[e],f=n!=="get"?n:Ue(h)?c?t[e.indexOf("set")||!Ue(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():h,p=Ue(h)?c?yx:Cf:Yl,g;if(Ye(i)&&(~i.indexOf("random(")&&(i=js(i)),i.charAt(1)==="="&&(g=ss(f,i)+(sn(f)||0),(g||g===0)&&(i=g))),!u||f!==i||yl)return!isNaN(f*i)&&i!==""?(g=new vn(this._pt,t,e,+f||0,i-(f||0),typeof h=="boolean"?Sx:Pf,0,p),c&&(g.fp=c),a&&g.modifier(a,this,t),this._pt=g):(!h&&!(e in t)&&Gl(e,i),mx.call(this,t,e,f,i,p,l||Rn.stringFilter,c))},_x=function(t,e,n,i,s){if(Ue(t)&&(t=Hs(t,s,e,n,i)),!li(t)||t.style&&t.nodeType||on(t)||Yh(t))return Ye(t)?Hs(t,s,e,n,i):t;var o={},a;for(a in t)o[a]=Hs(t[a],s,e,n,i);return o},wf=function(t,e,n,i,s,o){var a,l,c,u;if(bn[t]&&(a=new bn[t]).init(s,a.rawVars?e[t]:_x(e[t],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new vn(n._pt,s,t,0,1,a.render,a,0,a.priority),n!==ns))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},Gi,yl,ql=function r(t,e,n){var i=t.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.onUpdateParams,h=i.callbackScope,f=i.runBackwards,p=i.yoyoEase,g=i.keyframes,_=i.autoRevert,m=t._dur,d=t._startAt,T=t._targets,v=t.parent,y=v&&v.data==="nested"?v.vars.targets:T,S=t._overwrite==="auto"&&!Fl,R=t.timeline,b,U,x,C,X,J,Q,I,H,$,Y,at,nt;if(R&&(!g||!s)&&(s="none"),t._ease=Sr(s,fs.ease),t._yEase=p?Sf(Sr(p===!0?s:p,fs.ease)):0,p&&t._yoyo&&!t._repeat&&(p=t._yEase,t._yEase=t._ease,t._ease=p),t._from=!R&&!!i.runBackwards,!R||g&&!i.stagger){if(I=T[0]?yr(T[0]).harness:0,at=I&&i[I.prop],b=qa(i,Hl),d&&(d._zTime<0&&d.progress(1),e<0&&f&&a&&!_?d.render(-1,!0):d.revert(f&&m?Ua:Wv),d._lazy=0),o){if($i(t._startAt=Be.set(T,kn({data:"isStart",overwrite:!1,parent:v,immediateRender:!0,lazy:!d&&_n(l),startAt:null,delay:0,onUpdate:c,onUpdateParams:u,callbackScope:h,stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(an||!a&&!_)&&t._startAt.revert(Ua),a&&m&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(f&&m&&!d){if(e&&(a=!1),x=kn({overwrite:!1,data:"isFromStart",lazy:a&&!d&&_n(l),immediateRender:a,stagger:0,parent:v},b),at&&(x[I.prop]=at),$i(t._startAt=Be.set(T,x)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(an?t._startAt.revert(Ua):t._startAt.render(-1,!0)),t._zTime=e,!a)r(t._startAt,pe,pe);else if(!e)return}for(t._pt=t._ptCache=0,l=m&&_n(l)||l&&!m,U=0;U<T.length;U++){if(X=T[U],Q=X._gsap||Wl(T)[U]._gsap,t._ptLookup[U]=$={},pl[Q.id]&&Yi.length&&Xa(),Y=y===T?U:y.indexOf(X),I&&(H=new I).init(X,at||b,t,Y,y)!==!1&&(t._pt=C=new vn(t._pt,X,H.name,0,1,H.render,H,0,H.priority),H._props.forEach(function(tt){$[tt]=C}),H.priority&&(J=1)),!I||at)for(x in b)bn[x]&&(H=wf(x,b,t,Y,X,y))?H.priority&&(J=1):$[x]=C=Xl.call(t,X,x,"get",b[x],Y,y,0,i.stringFilter);t._op&&t._op[U]&&t.kill(X,t._op[U]),S&&t._pt&&(Gi=t,Ce.killTweensOf(X,$,t.globalTime(e)),nt=!t.parent,Gi=0),t._pt&&l&&(pl[Q.id]=1)}J&&Df(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!nt,g&&e<=0&&R.render(Fn,!0,!0)},gx=function(t,e,n,i,s,o,a){var l=(t._pt&&t._ptCache||(t._ptCache={}))[e],c,u,h,f;if(!l)for(l=t._ptCache[e]=[],h=t._ptLookup,f=t._targets.length;f--;){if(c=h[f][e],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==e&&c.fp!==e;)c=c._next;if(!c)return yl=1,t.vars[e]="+=0",ql(t,a),yl=0,1;l.push(c)}for(f=l.length;f--;)u=l[f],c=u._pt||u,c.s=(i||i===0)&&!s?i:c.s+(i||0)+o*c.c,c.c=n-c.s,u.e&&(u.e=Oe(n)+sn(u.e)),u.b&&(u.b=c.s+sn(u.b))},vx=function(t,e){var n=t[0]?yr(t[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return e;s=wr({},e);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},xx=function(t,e,n,i){var s=e.ease||i||"power1.inOut",o,a;if(on(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:s})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:s})},Hs=function(t,e,n,i,s){return Ue(t)?t.call(e,n,i,s):Ye(t)&&~t.indexOf("random(")?js(t):t},Af=Vl+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Rf={};gn(Af+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Rf[r]=1});var Be=function(r){Xh(t,r);function t(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:ks(i))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,p=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,d=l.yoyoEase,T=i.parent||Ce,v=(on(n)||Yh(n)?Ai(n[0]):"length"in i)?[n]:Bn(n),y,S,R,b,U,x,C,X;if(a._targets=v.length?Wl(v):Wa("GSAP target "+n+" not found. https://greensock.com",!Rn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=p,g||f||Pa(c)||Pa(u)){if(i=a.vars,y=a.timeline=new dn({data:"nested",defaults:_||{},targets:T&&T.data==="nested"?T.vars.targets:v}),y.kill(),y.parent=y._dp=Si(a),y._start=0,f||Pa(c)||Pa(u)){if(b=v.length,C=f&&ff(f),li(f))for(U in f)~Af.indexOf(U)&&(X||(X={}),X[U]=f[U]);for(S=0;S<b;S++)R=qa(i,Rf),R.stagger=0,d&&(R.yoyoEase=d),X&&wr(R,X),x=v[S],R.duration=+Hs(c,Si(a),S,x,v),R.delay=(+Hs(u,Si(a),S,x,v)||0)-a._delay,!f&&b===1&&R.delay&&(a._delay=u=R.delay,a._start+=u,R.delay=0),y.to(x,R,C?C(S,x,v):0),y._ease=ne.none;y.duration()?c=u=0:a.timeline=0}else if(g){ks(kn(y.vars.defaults,{ease:"none"})),y._ease=Sr(g.ease||i.ease||"none");var J=0,Q,I,H;if(on(g))g.forEach(function($){return y.to(v,$,">")}),y.duration();else{R={};for(U in g)U==="ease"||U==="easeEach"||xx(U,g[U],R,g.easeEach);for(U in R)for(Q=R[U].sort(function($,Y){return $.t-Y.t}),J=0,S=0;S<Q.length;S++)I=Q[S],H={ease:I.e,duration:(I.t-(S?Q[S-1].t:0))/100*c},H[U]=I.v,y.to(v,H,J),J+=H.duration;y.duration()<c&&y.to({},{duration:c-y.duration()})}}c||a.duration(c=y.duration())}else a.timeline=0;return p===!0&&!Fl&&(Gi=Si(a),Ce.killTweensOf(v),Gi=0),ri(T,Si(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(h||!c&&!g&&a._start===$e(T._time)&&_n(h)&&Zv(Si(a))&&T.data!=="nested")&&(a._tTime=-pe,a.render(Math.max(0,-u)||0)),m&&lf(Si(a),m),a}var e=t.prototype;return e.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-pe&&!u?l:i<pe?0:i,f,p,g,_,m,d,T,v,y;if(!c)Jv(this,i,s,o);else if(h!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(f=h,v=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,s,o);if(f=$e(h%_),h===l?(g=this._repeat,f=c):(g=~~(h/_),g&&g===h/_&&(f=c,g--),f>c&&(f=c)),d=this._yoyo&&g&1,d&&(y=this._yEase,f=c-f),m=ds(this._tTime,_),f===a&&!o&&this._initted)return this._tTime=h,this;g!==m&&(v&&this._yEase&&Ef(v,d),this.vars.repeatRefresh&&!d&&!this._lock&&(this._lock=o=1,this.render($e(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(cf(this,u?i:f,o,s,h))return this._tTime=0,this;if(a!==this._time)return this;if(c!==this._dur)return this.render(i,s,o)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=T=(y||this._ease)(f/c),this._from&&(this.ratio=T=1-T),f&&!a&&!s&&!g&&(zn(this,"onStart"),this._tTime!==h))return this;for(p=this._pt;p;)p.r(T,p.d),p=p._next;v&&v.render(i<0?i:!f&&d?-pe:v._dur*v._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&ml(this,i,s,o),zn(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&zn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&ml(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&$i(this,1),!s&&!(u&&!a)&&(h||a||d)&&(zn(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,o,a){Ks||An.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||ql(this,l),c=this._ease(l/this._dur),gx(this,i,s,o,a,c,l)?this.resetTo(i,s,o,a):(so(this,0),this.parent||af(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Os(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Gi&&Gi.vars.overwrite!==!0)._first||Os(this),this.parent&&o!==this.timeline.totalDuration()&&ps(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?Bn(i):a,c=this._ptLookup,u=this._pt,h,f,p,g,_,m,d;if((!s||s==="all")&&jv(a,l))return s==="all"&&(this._pt=0),Os(this);for(h=this._op=this._op||[],s!=="all"&&(Ye(s)&&(_={},gn(s,function(T){return _[T]=1}),s=_),s=vx(a,s)),d=a.length;d--;)if(~l.indexOf(a[d])){f=c[d],s==="all"?(h[d]=s,g=f,p={}):(p=h[d]=h[d]||{},g=s);for(_ in g)m=f&&f[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&io(this,m,"_pt"),delete f[_]),p!=="all"&&(p[_]=1)}return this._initted&&!this._pt&&u&&Os(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return Gs(1,arguments)},t.delayedCall=function(i,s,o,a){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(i,s,o){return Gs(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,o){return Ce.killTweensOf(i,s,o)},t}(Zs);kn(Be.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});gn("staggerTo,staggerFrom,staggerFromTo",function(r){Be[r]=function(){var t=new dn,e=gl.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var Yl=function(t,e,n){return t[e]=n},Cf=function(t,e,n){return t[e](n)},yx=function(t,e,n,i){return t[e](i.fp,n)},Mx=function(t,e,n){return t.setAttribute(e,n)},jl=function(t,e){return Ue(t[e])?Cf:Bl(t[e])&&t.setAttribute?Mx:Yl},Pf=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},Sx=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Lf=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},Kl=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},Ex=function(t,e,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(t,e,n),s=o},Tx=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?io(this,e,"_pt"):e.dep||(n=1),e=i;return!n},bx=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},Df=function(t){for(var e=t._pt,n,i,s,o;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:o=e,e=n}t._pt=s},vn=function(){function r(e,n,i,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||Pf,this.d=l||this,this.set=c||Yl,this.pr=u||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=bx,this.m=n,this.mt=s,this.tween=i},r}();gn(Vl+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return Hl[r]=1});Cn.TweenMax=Cn.TweenLite=Be;Cn.TimelineLite=Cn.TimelineMax=dn;Ce=new dn({sortChildren:!1,defaults:fs,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Rn.stringFilter=Mf;var Er=[],Oa={},wx=[],Xu=0,Ax=0,Ko=function(t){return(Oa[t]||wx).map(function(e){return e()})},Ml=function(){var t=Date.now(),e=[];t-Xu>2&&(Ko("matchMediaInit"),Er.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=Un.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&e.push(n))}),Ko("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n)}),Xu=t,Ko("matchMedia"))},Uf=function(){function r(e,n){this.selector=n&&vl(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Ax++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){Ue(n)&&(s=i,i=n,n=Ue);var o=this,a=function(){var c=De,u=o.selector,h;return c&&c!==o&&c.data.push(o),s&&(o.selector=vl(s)),De=o,h=i.apply(o,arguments),Ue(h)&&o._r.push(h),De=c,o.selector=u,o.isReverted=!1,h};return o.last=a,n===Ue?a(o):n?o[n]=a:a},t.ignore=function(n){var i=De;De=null,n(this),De=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Be&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n){var o=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(c){return o.splice(o.indexOf(c),1)}))}),o.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,c){return c.g-l.g||-1/0}).forEach(function(l){return l.t.revert(n)}),this.data.forEach(function(l){return!(l instanceof Be)&&l.revert&&l.revert(n)}),this._r.forEach(function(l){return l(n,s)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),i)for(var a=Er.length;a--;)Er[a].id===this.id&&Er.splice(a,1)},t.revert=function(n){this.kill(n||{})},r}(),Rx=function(){function r(e){this.contexts=[],this.scope=e}var t=r.prototype;return t.add=function(n,i,s){li(n)||(n={matches:n});var o=new Uf(0,s||this.scope),a=o.conditions={},l,c,u;De&&!o.selector&&(o.selector=De.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=Un.matchMedia(n[c]),l&&(Er.indexOf(o)<0&&Er.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(Ml):l.addEventListener("change",Ml)));return u&&i(o),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),ja={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return vf(i)})},timeline:function(t){return new dn(t)},getTweensOf:function(t,e){return Ce.getTweensOf(t,e)},getProperty:function(t,e,n,i){Ye(t)&&(t=Bn(t)[0]);var s=yr(t||{}).get,o=n?sf:rf;return n==="native"&&(n=""),t&&(e?o((bn[e]&&bn[e].get||s)(t,e,n,i)):function(a,l,c){return o((bn[a]&&bn[a].get||s)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=Bn(t),t.length>1){var i=t.map(function(u){return xn.quickSetter(u,e,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}t=t[0]||{};var o=bn[e],a=yr(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(u){var h=new o;ns._pt=0,h.init(t,n?u+n:u,ns,0,[t]),h.render(1,h),ns._pt&&Kl(1,ns)}:a.set(t,l);return o?c:function(u){return c(t,l,n?u+n:u,a,1)}},quickTo:function(t,e,n){var i,s=xn.to(t,wr((i={},i[e]="+=0.1",i.paused=!0,i),n||{})),o=function(l,c,u){return s.resetTo(e,l,c,u)};return o.tween=s,o},isTweening:function(t){return Ce.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Sr(t.ease,fs.ease)),ku(fs,t||{})},config:function(t){return ku(Rn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!bn[a]&&!Cn[a]&&Wa(e+" effect requires "+a+" plugin.")}),Xo[e]=function(a,l,c){return n(Bn(a),kn(l||{},s),c)},o&&(dn.prototype[e]=function(a,l,c){return this.add(Xo[e](a,li(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){ne[t]=Sr(e)},parseEase:function(t,e){return arguments.length?Sr(t,e):ne},getById:function(t){return Ce.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new dn(t),i,s;for(n.smoothChildTiming=_n(t.smoothChildTiming),Ce.remove(n),n._dp=0,n._time=n._tTime=Ce._time,i=Ce._first;i;)s=i._next,(e||!(!i._dur&&i instanceof Be&&i.vars.onComplete===i._targets[0]))&&ri(n,i,i._start-i._delay),i=s;return ri(Ce,n,0),n},context:function(t,e){return t?new Uf(t,e):De},matchMedia:function(t){return new Rx(t)},matchMediaRefresh:function(){return Er.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||Ml()},addEventListener:function(t,e){var n=Oa[t]||(Oa[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=Oa[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:ax,wrapYoyo:ox,distribute:ff,random:pf,snap:df,normalize:sx,getUnit:sn,clamp:ex,splitColor:xf,toArray:Bn,selector:vl,mapRange:_f,pipe:ix,unitize:rx,interpolate:lx,shuffle:hf},install:Jh,effects:Xo,ticker:An,updateRoot:dn.updateRoot,plugins:bn,globalTimeline:Ce,core:{PropTween:vn,globals:Qh,Tween:Be,Timeline:dn,Animation:Zs,getCache:yr,_removeLinkedListItem:io,reverting:function(){return an},context:function(t){return t&&De&&(De.data.push(t),t._ctx=De),De},suppressOverwrites:function(t){return Fl=t}}};gn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return ja[r]=Be[r]});An.add(dn.updateRoot);ns=ja.to({},{duration:0});var Cx=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},Px=function(t,e){var n=t._targets,i,s,o;for(i in e)for(s=n.length;s--;)o=t._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=Cx(o,i)),o&&o.modifier&&o.modifier(e[i],t,n[s],i))},Zo=function(t,e){return{name:t,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(Ye(s)&&(l={},gn(s,function(u){return l[u]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}Px(a,s)}}}},xn=ja.registerPlugin({name:"attr",init:function(t,e,n,i,s){var o,a,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)an?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},Zo("roundProps",xl),Zo("modifiers"),Zo("snap",df))||ja;Be.version=dn.version=xn.version="3.12.2";$h=1;zl()&&ms();ne.Power0;ne.Power1;ne.Power2;ne.Power3;ne.Power4;ne.Linear;ne.Quad;ne.Cubic;ne.Quart;ne.Quint;ne.Strong;ne.Elastic;ne.Back;ne.SteppedEase;ne.Bounce;ne.Sine;ne.Expo;ne.Circ;/*!
 * CSSPlugin 3.12.2
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var qu,Hi,as,Zl,_r,Yu,$l,Lx=function(){return typeof window<"u"},Ri={},dr=180/Math.PI,os=Math.PI/180,$r=Math.atan2,ju=1e8,Jl=/([A-Z])/g,Dx=/(left|right|width|margin|padding|x)/i,Ux=/[\s,\(]\S/,si={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Sl=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Ix=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Ox=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Nx=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},If=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},Of=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},Fx=function(t,e,n){return t.style[e]=n},Bx=function(t,e,n){return t.style.setProperty(e,n)},zx=function(t,e,n){return t._gsap[e]=n},kx=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},Gx=function(t,e,n,i,s){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},Hx=function(t,e,n,i,s){var o=t._gsap;o[e]=n,o.renderTransform(s,o)},Pe="transform",Zn=Pe+"Origin",Vx=function r(t,e){var n=this,i=this.target,s=i.style;if(t in Ri&&s){if(this.tfm=this.tfm||{},t!=="transform")t=si[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return n.tfm[o]=Ei(i,o)}):this.tfm[t]=i._gsap.x?i._gsap[t]:Ei(i,t);else return si.transform.split(",").forEach(function(o){return r.call(n,o,e)});if(this.props.indexOf(Pe)>=0)return;i._gsap.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Zn,e,"")),t=Pe}(s||e)&&this.props.push(t,e,s[t])},Nf=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},Wx=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,o;for(s=0;s<t.length;s+=3)t[s+1]?e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(Jl,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=$l(),(!s||!s.isStart)&&!n[Pe]&&(Nf(n),i.uncache=1)}},Ff=function(t,e){var n={target:t,props:[],revert:Wx,save:Vx};return t._gsap||xn.core.getCache(t),e&&e.split(",").forEach(function(i){return n.save(i)}),n},Bf,El=function(t,e){var n=Hi.createElementNS?Hi.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Hi.createElement(t);return n.style?n:Hi.createElement(t)},oi=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Jl,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,_s(e)||e,1)||""},Ku="O,Moz,ms,Ms,Webkit".split(","),_s=function(t,e,n){var i=e||_r,s=i.style,o=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(Ku[o]+t in s););return o<0?null:(o===3?"ms":o>=0?Ku[o]:"")+t},Tl=function(){Lx()&&window.document&&(qu=window,Hi=qu.document,as=Hi.documentElement,_r=El("div")||{style:{}},El("div"),Pe=_s(Pe),Zn=Pe+"Origin",_r.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Bf=!!_s("perspective"),$l=xn.core.reverting,Zl=1)},$o=function r(t){var e=El("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,s=this.style.cssText,o;if(as.appendChild(e),e.appendChild(this),this.style.display="block",t)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=r}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),as.removeChild(e),this.style.cssText=s,o},Zu=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},zf=function(t){var e;try{e=t.getBBox()}catch{e=$o.call(t,!0)}return e&&(e.width||e.height)||t.getBBox===$o||(e=$o.call(t,!0)),e&&!e.width&&!e.x&&!e.y?{x:+Zu(t,["x","cx","x1"])||0,y:+Zu(t,["y","cy","y1"])||0,width:0,height:0}:e},kf=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&zf(t))},$s=function(t,e){if(e){var n=t.style;e in Ri&&e!==Zn&&(e=Pe),n.removeProperty?((e.substr(0,2)==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(e.replace(Jl,"-$1").toLowerCase())):n.removeAttribute(e)}},Vi=function(t,e,n,i,s,o){var a=new vn(t._pt,e,n,0,1,o?Of:If);return t._pt=a,a.b=i,a.e=s,t._props.push(n),a},$u={deg:1,rad:1,turn:1},Xx={grid:1,flex:1},Ji=function r(t,e,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=_r.style,l=Dx.test(e),c=t.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=i==="px",p=i==="%",g,_,m,d;return i===o||!s||$u[i]||$u[o]?s:(o!=="px"&&!f&&(s=r(t,e,n,"px")),d=t.getCTM&&kf(t),(p||o==="%")&&(Ri[e]||~e.indexOf("adius"))?(g=d?t.getBBox()[l?"width":"height"]:t[u],Oe(p?s/g*h:s/100*g)):(a[l?"width":"height"]=h+(f?o:i),_=~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,d&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===Hi||!_.appendChild)&&(_=Hi.body),m=_._gsap,m&&p&&m.width&&l&&m.time===An.time&&!m.uncache?Oe(s/m.width*h):((p||o==="%")&&!Xx[oi(_,"display")]&&(a.position=oi(t,"position")),_===t&&(a.position="static"),_.appendChild(_r),g=_r[u],_.removeChild(_r),a.position="absolute",l&&p&&(m=yr(_),m.time=An.time,m.width=_[u]),Oe(f?g*s/h:g&&s?h/g*s:0))))},Ei=function(t,e,n,i){var s;return Zl||Tl(),e in si&&e!=="transform"&&(e=si[e],~e.indexOf(",")&&(e=e.split(",")[0])),Ri[e]&&e!=="transform"?(s=Qs(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:Za(oi(t,Zn))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Ka[e]&&Ka[e](t,e,n)||oi(t,e)||ef(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Ji(t,e,s,n)+n:s},qx=function(t,e,n,i){if(!n||n==="none"){var s=_s(e,t,1),o=s&&oi(t,s,1);o&&o!==n?(e=s,n=o):e==="borderColor"&&(n=oi(t,"borderTopColor"))}var a=new vn(this._pt,t.style,e,0,1,Lf),l=0,c=0,u,h,f,p,g,_,m,d,T,v,y,S;if(a.b=n,a.e=i,n+="",i+="",i==="auto"&&(t.style[e]=i,i=oi(t,e)||i,t.style[e]=n),u=[n,i],Mf(u),n=u[0],i=u[1],f=n.match(es)||[],S=i.match(es)||[],S.length){for(;h=es.exec(i);)m=h[0],T=i.substring(l,h.index),g?g=(g+1)%5:(T.substr(-5)==="rgba("||T.substr(-5)==="hsla(")&&(g=1),m!==(_=f[c++]||"")&&(p=parseFloat(_)||0,y=_.substr((p+"").length),m.charAt(1)==="="&&(m=ss(p,m)+y),d=parseFloat(m),v=m.substr((d+"").length),l=es.lastIndex-v.length,v||(v=v||Rn.units[e]||y,l===i.length&&(i+=v,a.e+=v)),y!==v&&(p=Ji(t,e,_,v)||0),a._pt={_next:a._pt,p:T||c===1?T:",",s:p,c:d-p,m:g&&g<4||e==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=e==="display"&&i==="none"?Of:If;return Kh.test(i)&&(a.e=0),this._pt=a,a},Ju={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Yx=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=Ju[n]||n,e[1]=Ju[i]||i,e.join(" ")},jx=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Ri[a]&&(l=1,a=a==="transformOrigin"?Zn:Pe),$s(n,a);l&&($s(n,Pe),o&&(o.svg&&n.removeAttribute("transform"),Qs(n,1),o.uncache=1,Nf(i)))}},Ka={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var o=t._pt=new vn(t._pt,e,n,0,0,jx);return o.u=i,o.pr=-10,o.tween=s,t._props.push(n),1}}},Js=[1,0,0,1,0,0],Gf={},Hf=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Qu=function(t){var e=oi(t,Pe);return Hf(e)?Js:e.substr(7).match(jh).map(Oe)},Ql=function(t,e){var n=t._gsap||yr(t),i=t.style,s=Qu(t),o,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Js:s):(s===Js&&!t.offsetParent&&t!==as&&!n.svg&&(l=i.display,i.display="block",o=t.parentNode,(!o||!t.offsetParent)&&(c=1,a=t.nextElementSibling,as.appendChild(t)),s=Qu(t),l?i.display=l:$s(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):as.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},bl=function(t,e,n,i,s,o){var a=t._gsap,l=s||Ql(t,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,f=a.yOffset||0,p=l[0],g=l[1],_=l[2],m=l[3],d=l[4],T=l[5],v=e.split(" "),y=parseFloat(v[0])||0,S=parseFloat(v[1])||0,R,b,U,x;n?l!==Js&&(b=p*m-g*_)&&(U=y*(m/b)+S*(-_/b)+(_*T-m*d)/b,x=y*(-g/b)+S*(p/b)-(p*T-g*d)/b,y=U,S=x):(R=zf(t),y=R.x+(~v[0].indexOf("%")?y/100*R.width:y),S=R.y+(~(v[1]||v[0]).indexOf("%")?S/100*R.height:S)),i||i!==!1&&a.smooth?(d=y-c,T=S-u,a.xOffset=h+(d*p+T*_)-d,a.yOffset=f+(d*g+T*m)-T):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=S,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[Zn]="0px 0px",o&&(Vi(o,a,"xOrigin",c,y),Vi(o,a,"yOrigin",u,S),Vi(o,a,"xOffset",h,a.xOffset),Vi(o,a,"yOffset",f,a.yOffset)),t.setAttribute("data-svg-origin",y+" "+S)},Qs=function(t,e){var n=t._gsap||new bf(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=oi(t,Zn)||"0",u,h,f,p,g,_,m,d,T,v,y,S,R,b,U,x,C,X,J,Q,I,H,$,Y,at,nt,tt,B,j,gt,mt,xt;return u=h=f=_=m=d=T=v=y=0,p=g=1,n.svg=!!(t.getCTM&&kf(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Pe]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Pe]!=="none"?l[Pe]:"")),i.scale=i.rotate=i.translate="none"),b=Ql(t,n.svg),n.svg&&(n.uncache?(at=t.getBBox(),c=n.xOrigin-at.x+"px "+(n.yOrigin-at.y)+"px",Y=""):Y=!e&&t.getAttribute("data-svg-origin"),bl(t,Y||c,!!Y||n.originIsAbsolute,n.smooth!==!1,b)),S=n.xOrigin||0,R=n.yOrigin||0,b!==Js&&(X=b[0],J=b[1],Q=b[2],I=b[3],u=H=b[4],h=$=b[5],b.length===6?(p=Math.sqrt(X*X+J*J),g=Math.sqrt(I*I+Q*Q),_=X||J?$r(J,X)*dr:0,T=Q||I?$r(Q,I)*dr+_:0,T&&(g*=Math.abs(Math.cos(T*os))),n.svg&&(u-=S-(S*X+R*Q),h-=R-(S*J+R*I))):(xt=b[6],gt=b[7],tt=b[8],B=b[9],j=b[10],mt=b[11],u=b[12],h=b[13],f=b[14],U=$r(xt,j),m=U*dr,U&&(x=Math.cos(-U),C=Math.sin(-U),Y=H*x+tt*C,at=$*x+B*C,nt=xt*x+j*C,tt=H*-C+tt*x,B=$*-C+B*x,j=xt*-C+j*x,mt=gt*-C+mt*x,H=Y,$=at,xt=nt),U=$r(-Q,j),d=U*dr,U&&(x=Math.cos(-U),C=Math.sin(-U),Y=X*x-tt*C,at=J*x-B*C,nt=Q*x-j*C,mt=I*C+mt*x,X=Y,J=at,Q=nt),U=$r(J,X),_=U*dr,U&&(x=Math.cos(U),C=Math.sin(U),Y=X*x+J*C,at=H*x+$*C,J=J*x-X*C,$=$*x-H*C,X=Y,H=at),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,d=180-d),p=Oe(Math.sqrt(X*X+J*J+Q*Q)),g=Oe(Math.sqrt($*$+xt*xt)),U=$r(H,$),T=Math.abs(U)>2e-4?U*dr:0,y=mt?1/(mt<0?-mt:mt):0),n.svg&&(Y=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Hf(oi(t,Pe)),Y&&t.setAttribute("transform",Y))),Math.abs(T)>90&&Math.abs(T)<270&&(s?(p*=-1,T+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,T+=T<=0?180:-180)),e=e||n.uncache,n.x=u-((n.xPercent=u&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-u)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-h)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=Oe(p),n.scaleY=Oe(g),n.rotation=Oe(_)+a,n.rotationX=Oe(m)+a,n.rotationY=Oe(d)+a,n.skewX=T+a,n.skewY=v+a,n.transformPerspective=y+o,(n.zOrigin=parseFloat(c.split(" ")[2])||0)&&(i[Zn]=Za(c)),n.xOffset=n.yOffset=0,n.force3D=Rn.force3D,n.renderTransform=n.svg?Zx:Bf?Vf:Kx,n.uncache=0,n},Za=function(t){return(t=t.split(" "))[0]+" "+t[1]},Jo=function(t,e,n){var i=sn(e);return Oe(parseFloat(e)+parseFloat(Ji(t,"x",n+"px",i)))+i},Kx=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Vf(t,e)},ur="0deg",Ds="0px",hr=") ",Vf=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,p=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,d=n.force3D,T=n.target,v=n.zOrigin,y="",S=d==="auto"&&t&&t!==1||d===!0;if(v&&(h!==ur||u!==ur)){var R=parseFloat(u)*os,b=Math.sin(R),U=Math.cos(R),x;R=parseFloat(h)*os,x=Math.cos(R),o=Jo(T,o,b*x*-v),a=Jo(T,a,-Math.sin(R)*-v),l=Jo(T,l,U*x*-v+v)}m!==Ds&&(y+="perspective("+m+hr),(i||s)&&(y+="translate("+i+"%, "+s+"%) "),(S||o!==Ds||a!==Ds||l!==Ds)&&(y+=l!==Ds||S?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+hr),c!==ur&&(y+="rotate("+c+hr),u!==ur&&(y+="rotateY("+u+hr),h!==ur&&(y+="rotateX("+h+hr),(f!==ur||p!==ur)&&(y+="skew("+f+", "+p+hr),(g!==1||_!==1)&&(y+="scale("+g+", "+_+hr),T.style[Pe]=y||"translate(0, 0)"},Zx=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,p=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,d=n.yOffset,T=n.forceCSS,v=parseFloat(o),y=parseFloat(a),S,R,b,U,x;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=os,c*=os,S=Math.cos(l)*h,R=Math.sin(l)*h,b=Math.sin(l-c)*-f,U=Math.cos(l-c)*f,c&&(u*=os,x=Math.tan(c-u),x=Math.sqrt(1+x*x),b*=x,U*=x,u&&(x=Math.tan(u),x=Math.sqrt(1+x*x),S*=x,R*=x)),S=Oe(S),R=Oe(R),b=Oe(b),U=Oe(U)):(S=h,U=f,R=b=0),(v&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(v=Ji(p,"x",o,"px"),y=Ji(p,"y",a,"px")),(g||_||m||d)&&(v=Oe(v+g-(g*S+_*b)+m),y=Oe(y+_-(g*R+_*U)+d)),(i||s)&&(x=p.getBBox(),v=Oe(v+i/100*x.width),y=Oe(y+s/100*x.height)),x="matrix("+S+","+R+","+b+","+U+","+v+","+y+")",p.setAttribute("transform",x),T&&(p.style[Pe]=x)},$x=function(t,e,n,i,s){var o=360,a=Ye(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?dr:1),c=l-i,u=i+c+"deg",h,f;return a&&(h=s.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),h==="cw"&&c<0?c=(c+o*ju)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*ju)%o-~~(c/o)*o)),t._pt=f=new vn(t._pt,e,n,i,c,Ix),f.e=u,f.u="deg",t._props.push(n),f},th=function(t,e){for(var n in e)t[n]=e[n];return t},Jx=function(t,e,n){var i=th({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,h,f,p,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Pe]=e,a=Qs(n,1),$s(n,Pe),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Pe],o[Pe]=e,a=Qs(n,1),o[Pe]=c);for(l in Ri)c=i[l],u=a[l],c!==u&&s.indexOf(l)<0&&(p=sn(c),g=sn(u),h=p!==g?Ji(n,l,c,g):parseFloat(c),f=parseFloat(u),t._pt=new vn(t._pt,a,l,h,f-h,Sl),t._pt.u=g||0,t._props.push(l));th(a,i)};gn("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",o=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(a){return t<2?r+a:"border"+a+r});Ka[t>1?"border"+r:r]=function(a,l,c,u,h){var f,p;if(arguments.length<4)return f=o.map(function(g){return Ei(a,g,c)}),p=f.join(" "),p.split(f[0]).length===5?f[0]:p;f=(u+"").split(" "),p={},o.forEach(function(g,_){return p[g]=f[_]=f[_]||f[(_-1)/2|0]}),a.init(l,p,h)}});var Wf={name:"css",register:Tl,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var o=this._props,a=t.style,l=n.vars.startAt,c,u,h,f,p,g,_,m,d,T,v,y,S,R,b,U;Zl||Tl(),this.styles=this.styles||Ff(t),U=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(u=e[_],!(bn[_]&&wf(_,e,n,i,t,s)))){if(p=typeof u,g=Ka[_],p==="function"&&(u=u.call(n,i,t,s),p=typeof u),p==="string"&&~u.indexOf("random(")&&(u=js(u)),g)g(this,t,_,u,n)&&(b=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),u+="",ji.lastIndex=0,ji.test(c)||(m=sn(c),d=sn(u)),d?m!==d&&(c=Ji(t,_,c,d)+d):m&&(u+=m),this.add(a,"setProperty",c,u,i,s,0,0,_),o.push(_),U.push(_,0,a[_]);else if(p!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,t,s):l[_],Ye(c)&&~c.indexOf("random(")&&(c=js(c)),sn(c+"")||(c+=Rn.units[_]||sn(Ei(t,_))||""),(c+"").charAt(1)==="="&&(c=Ei(t,_))):c=Ei(t,_),f=parseFloat(c),T=p==="string"&&u.charAt(1)==="="&&u.substr(0,2),T&&(u=u.substr(2)),h=parseFloat(u),_ in si&&(_==="autoAlpha"&&(f===1&&Ei(t,"visibility")==="hidden"&&h&&(f=0),U.push("visibility",0,a.visibility),Vi(this,a,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=si[_],~_.indexOf(",")&&(_=_.split(",")[0]))),v=_ in Ri,v){if(this.styles.save(_),y||(S=t._gsap,S.renderTransform&&!e.parseTransform||Qs(t,e.parseTransform),R=e.smoothOrigin!==!1&&S.smooth,y=this._pt=new vn(this._pt,a,Pe,0,1,S.renderTransform,S,0,-1),y.dep=1),_==="scale")this._pt=new vn(this._pt,S,"scaleY",S.scaleY,(T?ss(S.scaleY,T+h):h)-S.scaleY||0,Sl),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){U.push(Zn,0,a[Zn]),u=Yx(u),S.svg?bl(t,u,0,R,0,this):(d=parseFloat(u.split(" ")[2])||0,d!==S.zOrigin&&Vi(this,S,"zOrigin",S.zOrigin,d),Vi(this,a,_,Za(c),Za(u)));continue}else if(_==="svgOrigin"){bl(t,u,1,R,0,this);continue}else if(_ in Gf){$x(this,S,_,f,T?ss(f,T+u):u);continue}else if(_==="smoothOrigin"){Vi(this,S,"smooth",S.smooth,u);continue}else if(_==="force3D"){S[_]=u;continue}else if(_==="transform"){Jx(this,u,t);continue}}else _ in a||(_=_s(_)||_);if(v||(h||h===0)&&(f||f===0)&&!Ux.test(u)&&_ in a)m=(c+"").substr((f+"").length),h||(h=0),d=sn(u)||(_ in Rn.units?Rn.units[_]:m),m!==d&&(f=Ji(t,_,c,d)),this._pt=new vn(this._pt,v?S:a,_,f,(T?ss(f,T+h):h)-f,!v&&(d==="px"||_==="zIndex")&&e.autoRound!==!1?Nx:Sl),this._pt.u=d||0,m!==d&&d!=="%"&&(this._pt.b=c,this._pt.r=Ox);else if(_ in a)qx.call(this,t,_,c,T?T+u:u);else if(_ in t)this.add(t,_,c||t[_],T?T+u:u,i,s);else if(_!=="parseTransform"){Gl(_,u);continue}v||(_ in a?U.push(_,0,a[_]):U.push(_,1,c||t[_])),o.push(_)}}b&&Df(this)},render:function(t,e){if(e.tween._time||!$l())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Ei,aliases:si,getSetter:function(t,e,n){var i=si[e];return i&&i.indexOf(",")<0&&(e=i),e in Ri&&e!==Zn&&(t._gsap.x||Ei(t,"x"))?n&&Yu===n?e==="scale"?kx:zx:(Yu=n||{})&&(e==="scale"?Gx:Hx):t.style&&!Bl(t.style[e])?Fx:~e.indexOf("-")?Bx:jl(t,e)},core:{_removeProperty:$s,_getMatrix:Ql}};xn.utils.checkPrefix=_s;xn.core.getStyleSaver=Ff;(function(r,t,e,n){var i=gn(r+","+t+","+e,function(s){Ri[s]=1});gn(t,function(s){Rn.units[s]="deg",Gf[s]=1}),si[i[13]]=r+","+t,gn(n,function(s){var o=s.split(":");si[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");gn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Rn.units[r]="px"});xn.registerPlugin(Wf);var rn=xn.registerPlugin(Wf)||xn;rn.core.Tween;var eh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function La(r){throw new Error('Could not dynamically require "'+r+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Xf={exports:{}};(function(r,t){(function(e){r.exports=e()})(function(){return function(){function e(n,i,s){function o(c,u){if(!i[c]){if(!n[c]){var h=typeof La=="function"&&La;if(!u&&h)return h(c,!0);if(a)return a(c,!0);var f=new Error("Cannot find module '"+c+"'");throw f.code="MODULE_NOT_FOUND",f}var p=i[c]={exports:{}};n[c][0].call(p.exports,function(g){var _=n[c][1][g];return o(_||g)},p,p.exports,e,n,i,s)}return i[c].exports}for(var a=typeof La=="function"&&La,l=0;l<s.length;l++)o(s[l]);return o}return e}()({1:[function(e,n,i){(function(s){(function(){var o=200,a="__lodash_hash_undefined__",l=800,c=16,u=9007199254740991,h="[object Arguments]",f="[object Array]",p="[object AsyncFunction]",g="[object Boolean]",_="[object Date]",m="[object Error]",d="[object Function]",T="[object GeneratorFunction]",v="[object Map]",y="[object Number]",S="[object Null]",R="[object Object]",b="[object Proxy]",U="[object RegExp]",x="[object Set]",C="[object String]",X="[object Undefined]",J="[object WeakMap]",Q="[object ArrayBuffer]",I="[object DataView]",H="[object Float32Array]",$="[object Float64Array]",Y="[object Int8Array]",at="[object Int16Array]",nt="[object Int32Array]",tt="[object Uint8Array]",B="[object Uint8ClampedArray]",j="[object Uint16Array]",gt="[object Uint32Array]",mt=/[\\^$.*+?()[\]{}|]/g,xt=/^\[object .+?Constructor\]$/,It=/^(?:0|[1-9]\d*)$/,Mt={};Mt[H]=Mt[$]=Mt[Y]=Mt[at]=Mt[nt]=Mt[tt]=Mt[B]=Mt[j]=Mt[gt]=!0,Mt[h]=Mt[f]=Mt[Q]=Mt[g]=Mt[I]=Mt[_]=Mt[m]=Mt[d]=Mt[v]=Mt[y]=Mt[R]=Mt[U]=Mt[x]=Mt[C]=Mt[J]=!1;var Lt=typeof s=="object"&&s&&s.Object===Object&&s,Jt=typeof self=="object"&&self&&self.Object===Object&&self,_e=Lt||Jt||Function("return this")(),Vt=typeof i=="object"&&i&&!i.nodeType&&i,z=Vt&&typeof n=="object"&&n&&!n.nodeType&&n,ge=z&&z.exports===Vt,Ct=ge&&Lt.process,Ht=function(){try{var A=z&&z.require&&z.require("util").types;return A||Ct&&Ct.binding&&Ct.binding("util")}catch{}}(),Ft=Ht&&Ht.isTypedArray;function ae(A,O,q){switch(q.length){case 0:return A.call(O);case 1:return A.call(O,q[0]);case 2:return A.call(O,q[0],q[1]);case 3:return A.call(O,q[0],q[1],q[2])}return A.apply(O,q)}function qt(A,O){for(var q=-1,wt=Array(A);++q<A;)wt[q]=O(q);return wt}function kt(A){return function(O){return A(O)}}function Qt(A,O){return A==null?void 0:A[O]}function ve(A,O){return function(q){return A(O(q))}}var Ae=Array.prototype,P=Function.prototype,E=Object.prototype,W=_e["__core-js_shared__"],ot=P.toString,rt=E.hasOwnProperty,ut=function(){var A=/[^.]+$/.exec(W&&W.keys&&W.keys.IE_PROTO||"");return A?"Symbol(src)_1."+A:""}(),Et=E.toString,dt=ot.call(Object),yt=RegExp("^"+ot.call(rt).replace(mt,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),D=ge?_e.Buffer:void 0,ft=_e.Symbol,it=_e.Uint8Array,Dt=D?D.allocUnsafe:void 0,At=ve(Object.getPrototypeOf,Object),Rt=Object.create,Tt=E.propertyIsEnumerable,L=Ae.splice,lt=ft?ft.toStringTag:void 0,ct=function(){try{var A=Zt(Object,"defineProperty");return A({},"",{}),A}catch{}}(),_t=D?D.isBuffer:void 0,pt=Math.max,st=Date.now,bt=Zt(_e,"Map"),Pt=Zt(Object,"create"),Me=function(){function A(){}return function(O){if(!ir(O))return{};if(Rt)return Rt(O);A.prototype=O;var q=new A;return A.prototype=void 0,q}}();function te(A){var O=-1,q=A==null?0:A.length;for(this.clear();++O<q;){var wt=A[O];this.set(wt[0],wt[1])}}function ln(){this.__data__=Pt?Pt(null):{},this.size=0}function ze(A){var O=this.has(A)&&delete this.__data__[A];return this.size-=O?1:0,O}function je(A){var O=this.__data__;if(Pt){var q=O[A];return q===a?void 0:q}return rt.call(O,A)?O[A]:void 0}function Pr(A){var O=this.__data__;return Pt?O[A]!==void 0:rt.call(O,A)}function hi(A,O){var q=this.__data__;return this.size+=this.has(A)?0:1,q[A]=Pt&&O===void 0?a:O,this}te.prototype.clear=ln,te.prototype.delete=ze,te.prototype.get=je,te.prototype.has=Pr,te.prototype.set=hi;function ke(A){var O=-1,q=A==null?0:A.length;for(this.clear();++O<q;){var wt=A[O];this.set(wt[0],wt[1])}}function Lr(){this.__data__=[],this.size=0}function Pi(A){var O=this.__data__,q=Ge(O,A);if(q<0)return!1;var wt=O.length-1;return q==wt?O.pop():L.call(O,q,1),--this.size,!0}function Li(A){var O=this.__data__,q=Ge(O,A);return q<0?void 0:O[q][1]}function Es(A){return Ge(this.__data__,A)>-1}function Ts(A,O){var q=this.__data__,wt=Ge(q,A);return wt<0?(++this.size,q.push([A,O])):q[wt][1]=O,this}ke.prototype.clear=Lr,ke.prototype.delete=Pi,ke.prototype.get=Li,ke.prototype.has=Es,ke.prototype.set=Ts;function Gn(A){var O=-1,q=A==null?0:A.length;for(this.clear();++O<q;){var wt=A[O];this.set(wt[0],wt[1])}}function w(){this.size=0,this.__data__={hash:new te,map:new(bt||ke),string:new te}}function k(A){var O=Nt(this,A).delete(A);return this.size-=O?1:0,O}function K(A){return Nt(this,A).get(A)}function V(A){return Nt(this,A).has(A)}function Z(A,O){var q=Nt(this,A),wt=q.size;return q.set(A,O),this.size+=q.size==wt?0:1,this}Gn.prototype.clear=w,Gn.prototype.delete=k,Gn.prototype.get=K,Gn.prototype.has=V,Gn.prototype.set=Z;function St(A){var O=this.__data__=new ke(A);this.size=O.size}function Ut(){this.__data__=new ke,this.size=0}function Bt(A){var O=this.__data__,q=O.delete(A);return this.size=O.size,q}function Gt(A){return this.__data__.get(A)}function jt(A){return this.__data__.has(A)}function zt(A,O){var q=this.__data__;if(q instanceof ke){var wt=q.__data__;if(!bt||wt.length<o-1)return wt.push([A,O]),this.size=++q.size,this;q=this.__data__=new Gn(wt)}return q.set(A,O),this.size=q.size,this}St.prototype.clear=Ut,St.prototype.delete=Bt,St.prototype.get=Gt,St.prototype.has=jt,St.prototype.set=zt;function Wt(A,O){var q=Vn(A),wt=!q&&Mn(A),ie=!q&&!wt&&rc(A),fe=!q&&!wt&&!ie&&ac(A),Te=q||wt||ie||fe,ee=Te?qt(A.length,String):[],be=ee.length;for(var Pn in A)(O||rt.call(A,Pn))&&!(Te&&(Pn=="length"||ie&&(Pn=="offset"||Pn=="parent")||fe&&(Pn=="buffer"||Pn=="byteLength"||Pn=="byteOffset")||ue(Pn,be)))&&ee.push(Pn);return ee}function oe(A,O,q){(q!==void 0&&!cn(A[O],q)||q===void 0&&!(O in A))&&Qe(A,O,q)}function xe(A,O,q){var wt=A[O];(!(rt.call(A,O)&&cn(wt,q))||q===void 0&&!(O in A))&&Qe(A,O,q)}function Ge(A,O){for(var q=A.length;q--;)if(cn(A[q][0],O))return q;return-1}function Qe(A,O,q){O=="__proto__"&&ct?ct(A,O,{configurable:!0,enumerable:!0,value:q,writable:!0}):A[O]=q}var Se=Ot();function Xt(A){return A==null?A===void 0?X:S:lt&&lt in Object(A)?se(A):Qn(A)}function We(A){return bs(A)&&Xt(A)==h}function me(A){if(!ir(A)||Ke(A))return!1;var O=co(A)?yt:xt;return O.test(Xe(A))}function Hn(A){return bs(A)&&sc(A.length)&&!!Mt[Xt(A)]}function Di(A){if(!ir(A))return Jn(A);var O=fi(A),q=[];for(var wt in A)wt=="constructor"&&(O||!rt.call(A,wt))||q.push(wt);return q}function $n(A,O,q,wt,ie){A!==O&&Se(O,function(fe,Te){if(ie||(ie=new St),ir(fe))er(A,O,Te,q,$n,wt,ie);else{var ee=wt?wt(ti(A,Te),fe,Te+"",A,O,ie):void 0;ee===void 0&&(ee=fe),oe(A,Te,ee)}},oc)}function er(A,O,q,wt,ie,fe,Te){var ee=ti(A,q),be=ti(O,q),Pn=Te.get(be);if(Pn){oe(A,q,Pn);return}var Sn=fe?fe(ee,be,q+"",A,O,Te):void 0,ws=Sn===void 0;if(ws){var uo=Vn(be),ho=!uo&&rc(be),cc=!uo&&!ho&&ac(be);Sn=be,uo||ho||cc?Vn(ee)?Sn=ee:td(ee)?Sn=et(ee):ho?(ws=!1,Sn=nr(be,!0)):cc?(ws=!1,Sn=N(be,!0)):Sn=[]:ed(be)||Mn(be)?(Sn=ee,Mn(ee)?Sn=nd(ee):(!ir(ee)||co(ee))&&(Sn=Re(be))):ws=!1}ws&&(Te.set(be,Sn),ie(Sn,be,wt,fe,Te),Te.delete(be)),oe(A,q,Sn)}function le(A,O){return ei(he(A,O,lc),A+"")}var Ie=ct?function(A,O){return ct(A,"toString",{configurable:!0,enumerable:!1,value:rd(O),writable:!0})}:lc;function nr(A,O){if(O)return A.slice();var q=A.length,wt=Dt?Dt(q):new A.constructor(q);return A.copy(wt),wt}function M(A){var O=new A.constructor(A.byteLength);return new it(O).set(new it(A)),O}function N(A,O){var q=O?M(A.buffer):A.buffer;return new A.constructor(q,A.byteOffset,A.length)}function et(A,O){var q=-1,wt=A.length;for(O||(O=Array(wt));++q<wt;)O[q]=A[q];return O}function G(A,O,q,wt){var ie=!q;q||(q={});for(var fe=-1,Te=O.length;++fe<Te;){var ee=O[fe],be=wt?wt(q[ee],A[ee],ee,q,A):void 0;be===void 0&&(be=A[ee]),ie?Qe(q,ee,be):xe(q,ee,be)}return q}function ht(A){return le(function(O,q){var wt=-1,ie=q.length,fe=ie>1?q[ie-1]:void 0,Te=ie>2?q[2]:void 0;for(fe=A.length>3&&typeof fe=="function"?(ie--,fe):void 0,Te&&Ee(q[0],q[1],Te)&&(fe=ie<3?void 0:fe,ie=1),O=Object(O);++wt<ie;){var ee=q[wt];ee&&A(O,ee,wt,fe)}return O})}function Ot(A){return function(O,q,wt){for(var ie=-1,fe=Object(O),Te=wt(O),ee=Te.length;ee--;){var be=Te[A?ee:++ie];if(q(fe[be],be,fe)===!1)break}return O}}function Nt(A,O){var q=A.__data__;return Le(O)?q[typeof O=="string"?"string":"hash"]:q.map}function Zt(A,O){var q=Qt(A,O);return me(q)?q:void 0}function se(A){var O=rt.call(A,lt),q=A[lt];try{A[lt]=void 0;var wt=!0}catch{}var ie=Et.call(A);return wt&&(O?A[lt]=q:delete A[lt]),ie}function Re(A){return typeof A.constructor=="function"&&!fi(A)?Me(At(A)):{}}function ue(A,O){var q=typeof A;return O=O??u,!!O&&(q=="number"||q!="symbol"&&It.test(A))&&A>-1&&A%1==0&&A<O}function Ee(A,O,q){if(!ir(q))return!1;var wt=typeof O;return(wt=="number"?Dr(q)&&ue(O,q.length):wt=="string"&&O in q)?cn(q[O],A):!1}function Le(A){var O=typeof A;return O=="string"||O=="number"||O=="symbol"||O=="boolean"?A!=="__proto__":A===null}function Ke(A){return!!ut&&ut in A}function fi(A){var O=A&&A.constructor,q=typeof O=="function"&&O.prototype||E;return A===q}function Jn(A){var O=[];if(A!=null)for(var q in Object(A))O.push(q);return O}function Qn(A){return Et.call(A)}function he(A,O,q){return O=pt(O===void 0?A.length-1:O,0),function(){for(var wt=arguments,ie=-1,fe=pt(wt.length-O,0),Te=Array(fe);++ie<fe;)Te[ie]=wt[O+ie];ie=-1;for(var ee=Array(O+1);++ie<O;)ee[ie]=wt[ie];return ee[O]=q(Te),ae(A,this,ee)}}function ti(A,O){if(!(O==="constructor"&&typeof A[O]=="function")&&O!="__proto__")return A[O]}var ei=di(Ie);function di(A){var O=0,q=0;return function(){var wt=st(),ie=c-(wt-q);if(q=wt,ie>0){if(++O>=l)return arguments[0]}else O=0;return A.apply(void 0,arguments)}}function Xe(A){if(A!=null){try{return ot.call(A)}catch{}try{return A+""}catch{}}return""}function cn(A,O){return A===O||A!==A&&O!==O}var Mn=We(function(){return arguments}())?We:function(A){return bs(A)&&rt.call(A,"callee")&&!Tt.call(A,"callee")},Vn=Array.isArray;function Dr(A){return A!=null&&sc(A.length)&&!co(A)}function td(A){return bs(A)&&Dr(A)}var rc=_t||sd;function co(A){if(!ir(A))return!1;var O=Xt(A);return O==d||O==T||O==p||O==b}function sc(A){return typeof A=="number"&&A>-1&&A%1==0&&A<=u}function ir(A){var O=typeof A;return A!=null&&(O=="object"||O=="function")}function bs(A){return A!=null&&typeof A=="object"}function ed(A){if(!bs(A)||Xt(A)!=R)return!1;var O=At(A);if(O===null)return!0;var q=rt.call(O,"constructor")&&O.constructor;return typeof q=="function"&&q instanceof q&&ot.call(q)==dt}var ac=Ft?kt(Ft):Hn;function nd(A){return G(A,oc(A))}function oc(A){return Dr(A)?Wt(A,!0):Di(A)}var id=ht(function(A,O,q){$n(A,O,q)});function rd(A){return function(){return A}}function lc(A){return A}function sd(){return!1}n.exports=id}).call(this)}).call(this,typeof eh<"u"?eh:typeof self<"u"?self:typeof window<"u"?window:{})},{}],2:[function(e,n,i){/*! For license information please see shifty.js.LICENSE.txt */(function(s,o){typeof i=="object"&&typeof n=="object"?n.exports=o():typeof i=="object"?i.shifty=o():s.shifty=o()})(self,function(){return function(){var s={720:function(l,c,u){u.r(c),u.d(c,{Scene:function(){return nr},Tweenable:function(){return je},interpolate:function(){return Hn},processTweens:function(){return pt},setBezierFunction:function(){return Ht},shouldScheduleUpdate:function(){return Pt},tween:function(){return Pr},unsetBezierFunction:function(){return Ft}});var h={};u.r(h),u.d(h,{bounce:function(){return Mt},bouncePast:function(){return Lt},easeFrom:function(){return _e},easeFromTo:function(){return Jt},easeInBack:function(){return tt},easeInCirc:function(){return $},easeInCubic:function(){return d},easeInExpo:function(){return Q},easeInOutBack:function(){return j},easeInOutCirc:function(){return at},easeInOutCubic:function(){return v},easeInOutExpo:function(){return H},easeInOutQuad:function(){return m},easeInOutQuart:function(){return R},easeInOutQuint:function(){return x},easeInOutSine:function(){return J},easeInQuad:function(){return g},easeInQuart:function(){return y},easeInQuint:function(){return b},easeInSine:function(){return C},easeOutBack:function(){return B},easeOutBounce:function(){return nt},easeOutCirc:function(){return Y},easeOutCubic:function(){return T},easeOutExpo:function(){return I},easeOutQuad:function(){return _},easeOutQuart:function(){return S},easeOutQuint:function(){return U},easeOutSine:function(){return X},easeTo:function(){return Vt},elastic:function(){return gt},linear:function(){return p},swingFrom:function(){return xt},swingFromTo:function(){return mt},swingTo:function(){return It}});var f={};u.r(f),u.d(f,{afterTween:function(){return Ge},beforeTween:function(){return xe},doesApply:function(){return Wt},tweenCreated:function(){return oe}});var p=function(M){return M},g=function(M){return Math.pow(M,2)},_=function(M){return-(Math.pow(M-1,2)-1)},m=function(M){return(M/=.5)<1?.5*Math.pow(M,2):-.5*((M-=2)*M-2)},d=function(M){return Math.pow(M,3)},T=function(M){return Math.pow(M-1,3)+1},v=function(M){return(M/=.5)<1?.5*Math.pow(M,3):.5*(Math.pow(M-2,3)+2)},y=function(M){return Math.pow(M,4)},S=function(M){return-(Math.pow(M-1,4)-1)},R=function(M){return(M/=.5)<1?.5*Math.pow(M,4):-.5*((M-=2)*Math.pow(M,3)-2)},b=function(M){return Math.pow(M,5)},U=function(M){return Math.pow(M-1,5)+1},x=function(M){return(M/=.5)<1?.5*Math.pow(M,5):.5*(Math.pow(M-2,5)+2)},C=function(M){return 1-Math.cos(M*(Math.PI/2))},X=function(M){return Math.sin(M*(Math.PI/2))},J=function(M){return-.5*(Math.cos(Math.PI*M)-1)},Q=function(M){return M===0?0:Math.pow(2,10*(M-1))},I=function(M){return M===1?1:1-Math.pow(2,-10*M)},H=function(M){return M===0?0:M===1?1:(M/=.5)<1?.5*Math.pow(2,10*(M-1)):.5*(2-Math.pow(2,-10*--M))},$=function(M){return-(Math.sqrt(1-M*M)-1)},Y=function(M){return Math.sqrt(1-Math.pow(M-1,2))},at=function(M){return(M/=.5)<1?-.5*(Math.sqrt(1-M*M)-1):.5*(Math.sqrt(1-(M-=2)*M)+1)},nt=function(M){return M<1/2.75?7.5625*M*M:M<2/2.75?7.5625*(M-=1.5/2.75)*M+.75:M<2.5/2.75?7.5625*(M-=2.25/2.75)*M+.9375:7.5625*(M-=2.625/2.75)*M+.984375},tt=function(M){var N=1.70158;return M*M*((N+1)*M-N)},B=function(M){var N=1.70158;return(M-=1)*M*((N+1)*M+N)+1},j=function(M){var N=1.70158;return(M/=.5)<1?M*M*((1+(N*=1.525))*M-N)*.5:.5*((M-=2)*M*((1+(N*=1.525))*M+N)+2)},gt=function(M){return-1*Math.pow(4,-8*M)*Math.sin((6*M-1)*(2*Math.PI)/2)+1},mt=function(M){var N=1.70158;return(M/=.5)<1?M*M*((1+(N*=1.525))*M-N)*.5:.5*((M-=2)*M*((1+(N*=1.525))*M+N)+2)},xt=function(M){var N=1.70158;return M*M*((N+1)*M-N)},It=function(M){var N=1.70158;return(M-=1)*M*((N+1)*M+N)+1},Mt=function(M){return M<1/2.75?7.5625*M*M:M<2/2.75?7.5625*(M-=1.5/2.75)*M+.75:M<2.5/2.75?7.5625*(M-=2.25/2.75)*M+.9375:7.5625*(M-=2.625/2.75)*M+.984375},Lt=function(M){return M<1/2.75?7.5625*M*M:M<2/2.75?2-(7.5625*(M-=1.5/2.75)*M+.75):M<2.5/2.75?2-(7.5625*(M-=2.25/2.75)*M+.9375):2-(7.5625*(M-=2.625/2.75)*M+.984375)},Jt=function(M){return(M/=.5)<1?.5*Math.pow(M,4):-.5*((M-=2)*Math.pow(M,3)-2)},_e=function(M){return Math.pow(M,4)},Vt=function(M){return Math.pow(M,.25)};function z(M,N,et,G,ht,Ot){var Nt,Zt,se,Re,ue,Ee=0,Le=0,Ke=0,fi=function(he){return((Ee*he+Le)*he+Ke)*he},Jn=function(he){return(3*Ee*he+2*Le)*he+Ke},Qn=function(he){return he>=0?he:0-he};return Ee=1-(Ke=3*N)-(Le=3*(G-N)-Ke),se=1-(ue=3*et)-(Re=3*(ht-et)-ue),Nt=M,Zt=function(he){return 1/(200*he)}(Ot),function(he){return((se*he+Re)*he+ue)*he}(function(he,ti){var ei,di,Xe,cn,Mn,Vn;for(Xe=he,Vn=0;Vn<8;Vn++){if(cn=fi(Xe)-he,Qn(cn)<ti)return Xe;if(Mn=Jn(Xe),Qn(Mn)<1e-6)break;Xe-=cn/Mn}if((Xe=he)<(ei=0))return ei;if(Xe>(di=1))return di;for(;ei<di;){if(cn=fi(Xe),Qn(cn-he)<ti)return Xe;he>cn?ei=Xe:di=Xe,Xe=.5*(di-ei)+ei}return Xe}(Nt,Zt))}var ge,Ct=function(){var M=arguments.length>0&&arguments[0]!==void 0?arguments[0]:.25,N=arguments.length>1&&arguments[1]!==void 0?arguments[1]:.25,et=arguments.length>2&&arguments[2]!==void 0?arguments[2]:.75,G=arguments.length>3&&arguments[3]!==void 0?arguments[3]:.75;return function(ht){return z(ht,M,N,et,G,1)}},Ht=function(M,N,et,G,ht){var Ot=Ct(N,et,G,ht);return Ot.displayName=M,Ot.x1=N,Ot.y1=et,Ot.x2=G,Ot.y2=ht,je.formulas[M]=Ot},Ft=function(M){return delete je.formulas[M]};function ae(M,N){if(!(M instanceof N))throw new TypeError("Cannot call a class as a function")}function qt(M,N){for(var et=0;et<N.length;et++){var G=N[et];G.enumerable=G.enumerable||!1,G.configurable=!0,"value"in G&&(G.writable=!0),Object.defineProperty(M,G.key,G)}}function kt(M){return kt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(N){return typeof N}:function(N){return N&&typeof Symbol=="function"&&N.constructor===Symbol&&N!==Symbol.prototype?"symbol":typeof N},kt(M)}function Qt(M){return function(N){if(Array.isArray(N))return ve(N)}(M)||function(N){if(typeof Symbol<"u"&&Symbol.iterator in Object(N))return Array.from(N)}(M)||function(N,et){if(N){if(typeof N=="string")return ve(N,et);var G=Object.prototype.toString.call(N).slice(8,-1);return G==="Object"&&N.constructor&&(G=N.constructor.name),G==="Map"||G==="Set"?Array.from(N):G==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(G)?ve(N,et):void 0}}(M)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function ve(M,N){(N==null||N>M.length)&&(N=M.length);for(var et=0,G=new Array(N);et<N;et++)G[et]=M[et];return G}function Ae(M,N){var et=Object.keys(M);if(Object.getOwnPropertySymbols){var G=Object.getOwnPropertySymbols(M);N&&(G=G.filter(function(ht){return Object.getOwnPropertyDescriptor(M,ht).enumerable})),et.push.apply(et,G)}return et}function P(M){for(var N=1;N<arguments.length;N++){var et=arguments[N]!=null?arguments[N]:{};N%2?Ae(Object(et),!0).forEach(function(G){E(M,G,et[G])}):Object.getOwnPropertyDescriptors?Object.defineProperties(M,Object.getOwnPropertyDescriptors(et)):Ae(Object(et)).forEach(function(G){Object.defineProperty(M,G,Object.getOwnPropertyDescriptor(et,G))})}return M}function E(M,N,et){return N in M?Object.defineProperty(M,N,{value:et,enumerable:!0,configurable:!0,writable:!0}):M[N]=et,M}var W,ot,rt,ut="linear",Et=typeof window<"u"?window:u.g,dt="afterTween",yt="afterTweenEnd",D="beforeTween",ft="tweenCreated",it="function",Dt="string",At=Et.requestAnimationFrame||Et.webkitRequestAnimationFrame||Et.oRequestAnimationFrame||Et.msRequestAnimationFrame||Et.mozCancelRequestAnimationFrame&&Et.mozRequestAnimationFrame||setTimeout,Rt=function(){},Tt=null,L=null,lt=P({},h),ct=function(M,N,et,G,ht,Ot,Nt){var Zt,se,Re,ue=M<Ot?0:(M-Ot)/ht,Ee=!1;for(var Le in Nt&&Nt.call&&(Ee=!0,Zt=Nt(ue)),N)Ee||(Zt=((se=Nt[Le]).call?se:lt[se])(ue)),Re=et[Le],N[Le]=Re+(G[Le]-Re)*Zt;return N},_t=function(M,N){var et=M._timestamp,G=M._currentState,ht=M._delay;if(!(N<et+ht)){var Ot=M._duration,Nt=M._targetState,Zt=et+ht+Ot,se=N>Zt?Zt:N;M._hasEnded=se>=Zt;var Re=Ot-(Zt-se),ue=M._filters.length>0;if(M._hasEnded)return M._render(Nt,M._data,Re),M.stop(!0);ue&&M._applyFilter(D),se<et+ht?et=Ot=se=1:et+=ht,ct(se,G,M._originalState,Nt,Ot,et,M._easing),ue&&M._applyFilter(dt),M._render(G,M._data,Re)}},pt=function(){for(var M,N=je.now(),et=Tt;et;)M=et._next,_t(et,N),et=M},st=Date.now||function(){return+new Date},bt=!1,Pt=function(M){M&&bt||(bt=M,M&&Me())},Me=function M(){W=st(),bt&&At.call(Et,M,16.666666666666668),pt()},te=function(M){var N=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ut,et=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(Array.isArray(N)){var G=Ct.apply(void 0,Qt(N));return G}var ht=kt(N);if(lt[N])return lt[N];if(ht===Dt||ht===it)for(var Ot in M)et[Ot]=N;else for(var Nt in M)et[Nt]=N[Nt]||ut;return et},ln=function(M){M===Tt?(Tt=M._next)?Tt._previous=null:L=null:M===L?(L=M._previous)?L._next=null:Tt=null:(ot=M._previous,rt=M._next,ot._next=rt,rt._previous=ot),M._previous=M._next=null},ze=typeof Promise=="function"?Promise:null;ge=Symbol.toStringTag;var je=function(){function M(){var G=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},ht=arguments.length>1&&arguments[1]!==void 0?arguments[1]:void 0;ae(this,M),E(this,ge,"Promise"),this._config={},this._data={},this._delay=0,this._filters=[],this._next=null,this._previous=null,this._timestamp=null,this._hasEnded=!1,this._resolve=null,this._reject=null,this._currentState=G||{},this._originalState={},this._targetState={},this._start=Rt,this._render=Rt,this._promiseCtor=ze,ht&&this.setConfig(ht)}var N,et;return N=M,et=[{key:"_applyFilter",value:function(G){for(var ht=this._filters.length;ht>0;ht--){var Ot=this._filters[ht-ht][G];Ot&&Ot(this)}}},{key:"tween",value:function(){var G=arguments.length>0&&arguments[0]!==void 0?arguments[0]:void 0;return this._isPlaying&&this.stop(),!G&&this._config||this.setConfig(G),this._pausedAtTime=null,this._timestamp=M.now(),this._start(this.get(),this._data),this._delay&&this._render(this._currentState,this._data,0),this._resume(this._timestamp)}},{key:"setConfig",value:function(){var G=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},ht=this._config;for(var Ot in G)ht[Ot]=G[Ot];var Nt=ht.promise,Zt=Nt===void 0?this._promiseCtor:Nt,se=ht.start,Re=se===void 0?Rt:se,ue=ht.finish,Ee=ht.render,Le=Ee===void 0?this._config.step||Rt:Ee,Ke=ht.step,fi=Ke===void 0?Rt:Ke;this._data=ht.data||ht.attachment||this._data,this._isPlaying=!1,this._pausedAtTime=null,this._scheduleId=null,this._delay=G.delay||0,this._start=Re,this._render=Le||fi,this._duration=ht.duration||500,this._promiseCtor=Zt,ue&&(this._resolve=ue);var Jn=G.from,Qn=G.to,he=Qn===void 0?{}:Qn,ti=this._currentState,ei=this._originalState,di=this._targetState;for(var Xe in Jn)ti[Xe]=Jn[Xe];var cn=!1;for(var Mn in ti){var Vn=ti[Mn];cn||kt(Vn)!==Dt||(cn=!0),ei[Mn]=Vn,di[Mn]=he.hasOwnProperty(Mn)?he[Mn]:Vn}if(this._easing=te(this._currentState,ht.easing,this._easing),this._filters.length=0,cn){for(var Dr in M.filters)M.filters[Dr].doesApply(this)&&this._filters.push(M.filters[Dr]);this._applyFilter(ft)}return this}},{key:"then",value:function(G,ht){var Ot=this;return this._promise=new this._promiseCtor(function(Nt,Zt){Ot._resolve=Nt,Ot._reject=Zt}),this._promise.then(G,ht)}},{key:"catch",value:function(G){return this.then().catch(G)}},{key:"finally",value:function(G){return this.then().finally(G)}},{key:"get",value:function(){return P({},this._currentState)}},{key:"set",value:function(G){this._currentState=G}},{key:"pause",value:function(){if(this._isPlaying)return this._pausedAtTime=M.now(),this._isPlaying=!1,ln(this),this}},{key:"resume",value:function(){return this._resume()}},{key:"_resume",value:function(){var G=arguments.length>0&&arguments[0]!==void 0?arguments[0]:M.now();return this._timestamp===null?this.tween():this._isPlaying?this._promise:(this._pausedAtTime&&(this._timestamp+=G-this._pausedAtTime,this._pausedAtTime=null),this._isPlaying=!0,Tt===null?(Tt=this,L=this):(this._previous=L,L._next=this,L=this),this)}},{key:"seek",value:function(G){G=Math.max(G,0);var ht=M.now();return this._timestamp+G===0||(this._timestamp=ht-G,_t(this,ht)),this}},{key:"stop",value:function(){var G=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if(!this._isPlaying)return this;this._isPlaying=!1,ln(this);var ht=this._filters.length>0;return G&&(ht&&this._applyFilter(D),ct(1,this._currentState,this._originalState,this._targetState,1,0,this._easing),ht&&(this._applyFilter(dt),this._applyFilter(yt))),this._resolve&&this._resolve({data:this._data,state:this._currentState,tweenable:this}),this._resolve=null,this._reject=null,this}},{key:"cancel",value:function(){var G=arguments.length>0&&arguments[0]!==void 0&&arguments[0],ht=this._currentState,Ot=this._data,Nt=this._isPlaying;return Nt?(this._reject&&this._reject({data:Ot,state:ht,tweenable:this}),this._resolve=null,this._reject=null,this.stop(G)):this}},{key:"isPlaying",value:function(){return this._isPlaying}},{key:"hasEnded",value:function(){return this._hasEnded}},{key:"setScheduleFunction",value:function(G){M.setScheduleFunction(G)}},{key:"data",value:function(){var G=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null;return G&&(this._data=P({},G)),this._data}},{key:"dispose",value:function(){for(var G in this)delete this[G]}}],et&&qt(N.prototype,et),M}();function Pr(){var M=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},N=new je;return N.tween(M),N.tweenable=N,N}E(je,"now",function(){return W}),E(je,"setScheduleFunction",function(M){return At=M}),E(je,"filters",{}),E(je,"formulas",lt),Pt(!0);var hi,ke,Lr=/(\d|-|\.)/,Pi=/([^\-0-9.]+)/g,Li=/[0-9.-]+/g,Es=(hi=Li.source,ke=/,\s*/.source,new RegExp("rgba?\\(".concat(hi).concat(ke).concat(hi).concat(ke).concat(hi,"(").concat(ke).concat(hi,")?\\)"),"g")),Ts=/^.*\(/,Gn=/#([0-9]|[a-f]){3,6}/gi,w="VAL",k=function(M,N){return M.map(function(et,G){return"_".concat(N,"_").concat(G)})};function K(M){return parseInt(M,16)}var V=function(M){return"rgb(".concat((N=M,(N=N.replace(/#/,"")).length===3&&(N=(N=N.split(""))[0]+N[0]+N[1]+N[1]+N[2]+N[2]),[K(N.substr(0,2)),K(N.substr(2,2)),K(N.substr(4,2))]).join(","),")");var N},Z=function(M,N,et){var G=N.match(M),ht=N.replace(M,w);return G&&G.forEach(function(Ot){return ht=ht.replace(w,et(Ot))}),ht},St=function(M){for(var N in M){var et=M[N];typeof et=="string"&&et.match(Gn)&&(M[N]=Z(Gn,et,V))}},Ut=function(M){var N=M.match(Li),et=N.slice(0,3).map(Math.floor),G=M.match(Ts)[0];if(N.length===3)return"".concat(G).concat(et.join(","),")");if(N.length===4)return"".concat(G).concat(et.join(","),",").concat(N[3],")");throw new Error("Invalid rgbChunk: ".concat(M))},Bt=function(M){return M.match(Li)},Gt=function(M,N){var et={};return N.forEach(function(G){et[G]=M[G],delete M[G]}),et},jt=function(M,N){return N.map(function(et){return M[et]})},zt=function(M,N){return N.forEach(function(et){return M=M.replace(w,+et.toFixed(4))}),M},Wt=function(M){for(var N in M._currentState)if(typeof M._currentState[N]=="string")return!0;return!1};function oe(M){var N=M._currentState;[N,M._originalState,M._targetState].forEach(St),M._tokenData=function(et){var G,ht,Ot={};for(var Nt in et){var Zt=et[Nt];typeof Zt=="string"&&(Ot[Nt]={formatString:(G=Zt,ht=void 0,ht=G.match(Pi),ht?(ht.length===1||G.charAt(0).match(Lr))&&ht.unshift(""):ht=["",""],ht.join(w)),chunkNames:k(Bt(Zt),Nt)})}return Ot}(N)}function xe(M){var N=M._currentState,et=M._originalState,G=M._targetState,ht=M._easing,Ot=M._tokenData;(function(Nt,Zt){var se=function(ue){var Ee=Zt[ue].chunkNames,Le=Nt[ue];if(typeof Le=="string"){var Ke=Le.split(" "),fi=Ke[Ke.length-1];Ee.forEach(function(Jn,Qn){return Nt[Jn]=Ke[Qn]||fi})}else Ee.forEach(function(Jn){return Nt[Jn]=Le});delete Nt[ue]};for(var Re in Zt)se(Re)})(ht,Ot),[N,et,G].forEach(function(Nt){return function(Zt,se){var Re=function(Ee){Bt(Zt[Ee]).forEach(function(Le,Ke){return Zt[se[Ee].chunkNames[Ke]]=+Le}),delete Zt[Ee]};for(var ue in se)Re(ue)}(Nt,Ot)})}function Ge(M){var N=M._currentState,et=M._originalState,G=M._targetState,ht=M._easing,Ot=M._tokenData;[N,et,G].forEach(function(Nt){return function(Zt,se){for(var Re in se){var ue=se[Re],Ee=ue.chunkNames,Le=ue.formatString,Ke=zt(Le,jt(Gt(Zt,Ee),Ee));Zt[Re]=Z(Es,Ke,Ut)}}(Nt,Ot)}),function(Nt,Zt){for(var se in Zt){var Re=Zt[se].chunkNames,ue=Nt[Re[0]];Nt[se]=typeof ue=="string"?Re.map(function(Ee){var Le=Nt[Ee];return delete Nt[Ee],Le}).join(" "):ue}}(ht,Ot)}function Qe(M,N){var et=Object.keys(M);if(Object.getOwnPropertySymbols){var G=Object.getOwnPropertySymbols(M);N&&(G=G.filter(function(ht){return Object.getOwnPropertyDescriptor(M,ht).enumerable})),et.push.apply(et,G)}return et}function Se(M){for(var N=1;N<arguments.length;N++){var et=arguments[N]!=null?arguments[N]:{};N%2?Qe(Object(et),!0).forEach(function(G){Xt(M,G,et[G])}):Object.getOwnPropertyDescriptors?Object.defineProperties(M,Object.getOwnPropertyDescriptors(et)):Qe(Object(et)).forEach(function(G){Object.defineProperty(M,G,Object.getOwnPropertyDescriptor(et,G))})}return M}function Xt(M,N,et){return N in M?Object.defineProperty(M,N,{value:et,enumerable:!0,configurable:!0,writable:!0}):M[N]=et,M}var We=new je,me=je.filters,Hn=function(M,N,et,G){var ht=arguments.length>4&&arguments[4]!==void 0?arguments[4]:0,Ot=Se({},M),Nt=te(M,G);for(var Zt in We._filters.length=0,We.set({}),We._currentState=Ot,We._originalState=M,We._targetState=N,We._easing=Nt,me)me[Zt].doesApply(We)&&We._filters.push(me[Zt]);We._applyFilter("tweenCreated"),We._applyFilter("beforeTween");var se=ct(et,Ot,M,N,1,ht,Nt);return We._applyFilter("afterTween"),se};function Di(M,N){(N==null||N>M.length)&&(N=M.length);for(var et=0,G=new Array(N);et<N;et++)G[et]=M[et];return G}function $n(M,N){if(!(M instanceof N))throw new TypeError("Cannot call a class as a function")}function er(M,N){for(var et=0;et<N.length;et++){var G=N[et];G.enumerable=G.enumerable||!1,G.configurable=!0,"value"in G&&(G.writable=!0),Object.defineProperty(M,G.key,G)}}function le(M,N){var et=N.get(M);if(!et)throw new TypeError("attempted to get private field on non-instance");return et.get?et.get.call(M):et.value}var Ie=new WeakMap,nr=function(){function M(){$n(this,M),Ie.set(this,{writable:!0,value:[]});for(var G=arguments.length,ht=new Array(G),Ot=0;Ot<G;Ot++)ht[Ot]=arguments[Ot];ht.forEach(this.add.bind(this))}var N,et;return N=M,(et=[{key:"add",value:function(G){return le(this,Ie).push(G),G}},{key:"remove",value:function(G){var ht=le(this,Ie).indexOf(G);return~ht&&le(this,Ie).splice(ht,1),G}},{key:"empty",value:function(){return this.tweenables.map(this.remove.bind(this))}},{key:"isPlaying",value:function(){return le(this,Ie).some(function(G){return G.isPlaying()})}},{key:"play",value:function(){return le(this,Ie).forEach(function(G){return G.tween()}),this}},{key:"pause",value:function(){return le(this,Ie).forEach(function(G){return G.pause()}),this}},{key:"resume",value:function(){return this.playingTweenables.forEach(function(G){return G.resume()}),this}},{key:"stop",value:function(G){return le(this,Ie).forEach(function(ht){return ht.stop(G)}),this}},{key:"tweenables",get:function(){return function(ht){if(Array.isArray(ht))return Di(ht)}(G=le(this,Ie))||function(ht){if(typeof Symbol<"u"&&Symbol.iterator in Object(ht))return Array.from(ht)}(G)||function(ht,Ot){if(ht){if(typeof ht=="string")return Di(ht,Ot);var Nt=Object.prototype.toString.call(ht).slice(8,-1);return Nt==="Object"&&ht.constructor&&(Nt=ht.constructor.name),Nt==="Map"||Nt==="Set"?Array.from(ht):Nt==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Nt)?Di(ht,Ot):void 0}}(G)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}();var G}},{key:"playingTweenables",get:function(){return le(this,Ie).filter(function(G){return!G.hasEnded()})}},{key:"promises",get:function(){return le(this,Ie).map(function(G){return G.then()})}}])&&er(N.prototype,et),M}();je.filters.token=f}},o={};function a(l){if(o[l])return o[l].exports;var c=o[l]={exports:{}};return s[l](c,c.exports,a),c.exports}return a.d=function(l,c){for(var u in c)a.o(c,u)&&!a.o(l,u)&&Object.defineProperty(l,u,{enumerable:!0,get:c[u]})},a.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),a.o=function(l,c){return Object.prototype.hasOwnProperty.call(l,c)},a.r=function(l){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(l,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(l,"__esModule",{value:!0})},a(720)}()})},{}],3:[function(e,n,i){var s=e("./shape"),o=e("./utils"),a=function(c,u){this._pathTemplate="M 50,50 m 0,-{radius} a {radius},{radius} 0 1 1 0,{2radius} a {radius},{radius} 0 1 1 0,-{2radius}",this.containerAspectRatio=1,s.apply(this,arguments)};a.prototype=new s,a.prototype.constructor=a,a.prototype._pathString=function(c){var u=c.strokeWidth;c.trailWidth&&c.trailWidth>c.strokeWidth&&(u=c.trailWidth);var h=50-u/2;return o.render(this._pathTemplate,{radius:h,"2radius":h*2})},a.prototype._trailString=function(c){return this._pathString(c)},n.exports=a},{"./shape":8,"./utils":10}],4:[function(e,n,i){var s=e("./shape"),o=e("./utils"),a=function(c,u){this._pathTemplate=u.vertical?"M {center},100 L {center},0":"M 0,{center} L 100,{center}",s.apply(this,arguments)};a.prototype=new s,a.prototype.constructor=a,a.prototype._initializeSvg=function(c,u){var h=u.vertical?"0 0 "+u.strokeWidth+" 100":"0 0 100 "+u.strokeWidth;c.setAttribute("viewBox",h),c.setAttribute("preserveAspectRatio","none")},a.prototype._pathString=function(c){return o.render(this._pathTemplate,{center:c.strokeWidth/2})},a.prototype._trailString=function(c){return this._pathString(c)},n.exports=a},{"./shape":8,"./utils":10}],5:[function(e,n,i){n.exports={Line:e("./line"),Circle:e("./circle"),SemiCircle:e("./semicircle"),Square:e("./square"),Path:e("./path"),Shape:e("./shape"),utils:e("./utils")}},{"./circle":3,"./line":4,"./path":6,"./semicircle":7,"./shape":8,"./square":9,"./utils":10}],6:[function(e,n,i){var s=e("shifty"),o=e("./utils"),a=s.Tweenable,l={easeIn:"easeInCubic",easeOut:"easeOutCubic",easeInOut:"easeInOutCubic"},c=function u(h,f){if(!(this instanceof u))throw new Error("Constructor was called without new keyword");f=o.extend({delay:0,duration:800,easing:"linear",from:{},to:{},step:function(){}},f);var p;o.isString(h)?p=document.querySelector(h):p=h,this.path=p,this._opts=f,this._tweenable=null;var g=this.path.getTotalLength();this.path.style.strokeDasharray=g+" "+g,this.set(0)};c.prototype.value=function(){var h=this._getComputedDashOffset(),f=this.path.getTotalLength(),p=1-h/f;return parseFloat(p.toFixed(6),10)},c.prototype.set=function(h){this.stop(),this.path.style.strokeDashoffset=this._progressToOffset(h);var f=this._opts.step;if(o.isFunction(f)){var p=this._easing(this._opts.easing),g=this._calculateTo(h,p),_=this._opts.shape||this;f(g,_,this._opts.attachment)}},c.prototype.stop=function(){this._stopTween(),this.path.style.strokeDashoffset=this._getComputedDashOffset()},c.prototype.animate=function(h,f,p){f=f||{},o.isFunction(f)&&(p=f,f={});var g=o.extend({},f),_=o.extend({},this._opts);f=o.extend(_,f);var m=this._easing(f.easing),d=this._resolveFromAndTo(h,m,g);this.stop(),this.path.getBoundingClientRect();var T=this._getComputedDashOffset(),v=this._progressToOffset(h),y=this;this._tweenable=new a,this._tweenable.tween({from:o.extend({offset:T},d.from),to:o.extend({offset:v},d.to),duration:f.duration,delay:f.delay,easing:m,step:function(S){y.path.style.strokeDashoffset=S.offset;var R=f.shape||y;f.step(S,R,f.attachment)}}).then(function(S){o.isFunction(p)&&p()}).catch(function(S){throw console.error("Error in tweening:",S),S})},c.prototype._getComputedDashOffset=function(){var h=window.getComputedStyle(this.path,null);return parseFloat(h.getPropertyValue("stroke-dashoffset"),10)},c.prototype._progressToOffset=function(h){var f=this.path.getTotalLength();return f-h*f},c.prototype._resolveFromAndTo=function(h,f,p){return p.from&&p.to?{from:p.from,to:p.to}:{from:this._calculateFrom(f),to:this._calculateTo(h,f)}},c.prototype._calculateFrom=function(h){return s.interpolate(this._opts.from,this._opts.to,this.value(),h)},c.prototype._calculateTo=function(h,f){return s.interpolate(this._opts.from,this._opts.to,h,f)},c.prototype._stopTween=function(){this._tweenable!==null&&(this._tweenable.stop(!0),this._tweenable=null)},c.prototype._easing=function(h){return l.hasOwnProperty(h)?l[h]:h},n.exports=c},{"./utils":10,shifty:2}],7:[function(e,n,i){var s=e("./shape"),o=e("./circle"),a=e("./utils"),l=function(u,h){this._pathTemplate="M 50,50 m -{radius},0 a {radius},{radius} 0 1 1 {2radius},0",this.containerAspectRatio=2,s.apply(this,arguments)};l.prototype=new s,l.prototype.constructor=l,l.prototype._initializeSvg=function(u,h){u.setAttribute("viewBox","0 0 100 50")},l.prototype._initializeTextContainer=function(u,h,f){u.text.style&&(f.style.top="auto",f.style.bottom="0",u.text.alignToBottom?a.setStyle(f,"transform","translate(-50%, 0)"):a.setStyle(f,"transform","translate(-50%, 50%)"))},l.prototype._pathString=o.prototype._pathString,l.prototype._trailString=o.prototype._trailString,n.exports=l},{"./circle":3,"./shape":8,"./utils":10}],8:[function(e,n,i){var s=e("./path"),o=e("./utils"),a="Object is destroyed",l=function c(u,h){if(!(this instanceof c))throw new Error("Constructor was called without new keyword");if(arguments.length!==0){this._opts=o.extend({color:"#555",strokeWidth:1,trailColor:null,trailWidth:null,fill:null,text:{style:{color:null,position:"absolute",left:"50%",top:"50%",padding:0,margin:0,transform:{prefix:!0,value:"translate(-50%, -50%)"}},autoStyleContainer:!0,alignToBottom:!0,value:null,className:"progressbar-text"},svgStyle:{display:"block",width:"100%"},warnings:!1},h,!0),o.isObject(h)&&h.svgStyle!==void 0&&(this._opts.svgStyle=h.svgStyle),o.isObject(h)&&o.isObject(h.text)&&h.text.style!==void 0&&(this._opts.text.style=h.text.style);var f=this._createSvgView(this._opts),p;if(o.isString(u)?p=document.querySelector(u):p=u,!p)throw new Error("Container does not exist: "+u);this._container=p,this._container.appendChild(f.svg),this._opts.warnings&&this._warnContainerAspectRatio(this._container),this._opts.svgStyle&&o.setStyles(f.svg,this._opts.svgStyle),this.svg=f.svg,this.path=f.path,this.trail=f.trail,this.text=null;var g=o.extend({attachment:void 0,shape:this},this._opts);this._progressPath=new s(f.path,g),o.isObject(this._opts.text)&&this._opts.text.value!==null&&this.setText(this._opts.text.value)}};l.prototype.animate=function(u,h,f){if(this._progressPath===null)throw new Error(a);this._progressPath.animate(u,h,f)},l.prototype.stop=function(){if(this._progressPath===null)throw new Error(a);this._progressPath!==void 0&&this._progressPath.stop()},l.prototype.pause=function(){if(this._progressPath===null)throw new Error(a);this._progressPath!==void 0&&this._progressPath._tweenable&&this._progressPath._tweenable.pause()},l.prototype.resume=function(){if(this._progressPath===null)throw new Error(a);this._progressPath!==void 0&&this._progressPath._tweenable&&this._progressPath._tweenable.resume()},l.prototype.destroy=function(){if(this._progressPath===null)throw new Error(a);this.stop(),this.svg.parentNode.removeChild(this.svg),this.svg=null,this.path=null,this.trail=null,this._progressPath=null,this.text!==null&&(this.text.parentNode.removeChild(this.text),this.text=null)},l.prototype.set=function(u){if(this._progressPath===null)throw new Error(a);this._progressPath.set(u)},l.prototype.value=function(){if(this._progressPath===null)throw new Error(a);return this._progressPath===void 0?0:this._progressPath.value()},l.prototype.setText=function(u){if(this._progressPath===null)throw new Error(a);this.text===null&&(this.text=this._createTextContainer(this._opts,this._container),this._container.appendChild(this.text)),o.isObject(u)?(o.removeChildren(this.text),this.text.appendChild(u)):this.text.innerHTML=u},l.prototype._createSvgView=function(u){var h=document.createElementNS("http://www.w3.org/2000/svg","svg");this._initializeSvg(h,u);var f=null;(u.trailColor||u.trailWidth)&&(f=this._createTrail(u),h.appendChild(f));var p=this._createPath(u);return h.appendChild(p),{svg:h,path:p,trail:f}},l.prototype._initializeSvg=function(u,h){u.setAttribute("viewBox","0 0 100 100")},l.prototype._createPath=function(u){var h=this._pathString(u);return this._createPathElement(h,u)},l.prototype._createTrail=function(u){var h=this._trailString(u),f=o.extend({},u);return f.trailColor||(f.trailColor="#eee"),f.trailWidth||(f.trailWidth=f.strokeWidth),f.color=f.trailColor,f.strokeWidth=f.trailWidth,f.fill=null,this._createPathElement(h,f)},l.prototype._createPathElement=function(u,h){var f=document.createElementNS("http://www.w3.org/2000/svg","path");return f.setAttribute("d",u),f.setAttribute("stroke",h.color),f.setAttribute("stroke-width",h.strokeWidth),h.fill?f.setAttribute("fill",h.fill):f.setAttribute("fill-opacity","0"),f},l.prototype._createTextContainer=function(u,h){var f=document.createElement("div");f.className=u.text.className;var p=u.text.style;return p&&(u.text.autoStyleContainer&&(h.style.position="relative"),o.setStyles(f,p),p.color||(f.style.color=u.color)),this._initializeTextContainer(u,h,f),f},l.prototype._initializeTextContainer=function(c,u,h){},l.prototype._pathString=function(u){throw new Error("Override this function for each progress bar")},l.prototype._trailString=function(u){throw new Error("Override this function for each progress bar")},l.prototype._warnContainerAspectRatio=function(u){if(this.containerAspectRatio){var h=window.getComputedStyle(u,null),f=parseFloat(h.getPropertyValue("width"),10),p=parseFloat(h.getPropertyValue("height"),10);o.floatEquals(this.containerAspectRatio,f/p)||(console.warn("Incorrect aspect ratio of container","#"+u.id,"detected:",h.getPropertyValue("width")+"(width)","/",h.getPropertyValue("height")+"(height)","=",f/p),console.warn("Aspect ratio of should be",this.containerAspectRatio))}},n.exports=l},{"./path":6,"./utils":10}],9:[function(e,n,i){var s=e("./shape"),o=e("./utils"),a=function(c,u){this._pathTemplate="M 0,{halfOfStrokeWidth} L {width},{halfOfStrokeWidth} L {width},{width} L {halfOfStrokeWidth},{width} L {halfOfStrokeWidth},{strokeWidth}",this._trailTemplate="M {startMargin},{halfOfStrokeWidth} L {width},{halfOfStrokeWidth} L {width},{width} L {halfOfStrokeWidth},{width} L {halfOfStrokeWidth},{halfOfStrokeWidth}",s.apply(this,arguments)};a.prototype=new s,a.prototype.constructor=a,a.prototype._pathString=function(c){var u=100-c.strokeWidth/2;return o.render(this._pathTemplate,{width:u,strokeWidth:c.strokeWidth,halfOfStrokeWidth:c.strokeWidth/2})},a.prototype._trailString=function(c){var u=100-c.strokeWidth/2;return o.render(this._trailTemplate,{width:u,strokeWidth:c.strokeWidth,halfOfStrokeWidth:c.strokeWidth/2,startMargin:c.strokeWidth/2-c.trailWidth/2})},n.exports=a},{"./shape":8,"./utils":10}],10:[function(e,n,i){var s=e("lodash.merge"),o="Webkit Moz O ms".split(" "),a=.001;function l(v,y){var S=v;for(var R in y)if(y.hasOwnProperty(R)){var b=y[R],U="\\{"+R+"\\}",x=new RegExp(U,"g");S=S.replace(x,b)}return S}function c(v,y,S){for(var R=v.style,b=0;b<o.length;++b){var U=o[b];R[U+h(y)]=S}R[y]=S}function u(v,y){m(y,function(S,R){S!=null&&(_(S)&&S.prefix===!0?c(v,R,S.value):v.style[R]=S)})}function h(v){return v.charAt(0).toUpperCase()+v.slice(1)}function f(v){return typeof v=="string"||v instanceof String}function p(v){return typeof v=="function"}function g(v){return Object.prototype.toString.call(v)==="[object Array]"}function _(v){if(g(v))return!1;var y=typeof v;return y==="object"&&!!v}function m(v,y){for(var S in v)if(v.hasOwnProperty(S)){var R=v[S];y(R,S)}}function d(v,y){return Math.abs(v-y)<a}function T(v){for(;v.firstChild;)v.removeChild(v.firstChild)}n.exports={extend:s,render:l,setStyle:c,setStyles:u,capitalize:h,isString:f,isFunction:p,isObject:_,forEachObject:m,floatEquals:d,removeChildren:T}},{"lodash.merge":1}]},{},[5])(5)})})(Xf);var tc=Xf.exports,nh=new tc.Path("#g",{easing:"easeOut",duration:2e3}),ih=new tc.Path("#i",{easing:"easeOut",duration:2e3}),rh=new tc.Path("#ampo",{easing:"easeOut",duration:2e3}),Qo=document.getElementById("container"),wl=!1,tl=0;let qf={valore:1};function Yf(){tl++,wl||rn.to(Qo,{opacity:0,duration:1,onComplete:function(){console.log(tl),nh.set(0),ih.set(0),rh.set(0),rn.to(Qo,{opacity:1,duration:1,onComplete:function(){nh.animate(1),ih.animate(1),rh.animate(1),setTimeout(function(){rn.to(Qo,{opacity:0,duration:1,onComplete:function(){if(wl===!0&&tl>=1){console.log("odio i ne");var r=document.getElementById("content");document.getElementById("content").style.display="block",rn.to(r,{opacity:1,duration:1})}else Yf()}})},3500)}})}})}Yf();const gs=document.querySelector("canvas.webgl"),tr=new Mv;tr.background=new re(0);const ao=new kh;let sh;ao.onProgress=function(r,t,e){sh=t/e*100,console.log(sh)};ao.onLoad=function(){wl=!0};const ra=new Rv(ao),Qx=ra.load("textures/normal.jpg"),ty=ra.load("textures/test.jpg"),ey=ra.load("textures/height.png"),ny=ra.load("textures/height.png"),ah=ra.load("particles/8.png"),iy=new Dv(ao);iy.load("Files/outline meme.mp3",function(r){ic.setBuffer(r)});const ui=new Is;ui.position.set(0,0,0);const oo=new Nl(.5,32,16),yn=new Ev;yn.color=new re("white");yn.normalMap=Qx;yn.normalScale.set(.5,.5);yn.alphaMap=ty;yn.transparent=!0;yn.displacementMap=ey;yn.roughnessMap=ny;yn.displacementScale=0;const ec=yn.clone();ec.color=new re("white");const lo=new Nn(oo,ec),jf=new Nn(oo,yn);lo.scale.set(.9,.9,.9);console.log(lo.position);const $a=new Nn(oo,yn),nc=new Nn(oo,yn);$a.scale.set(1.2,1.2,1.2);nc.scale.set(1.3,1.3,1.3);ui.add(jf);ui.add($a);ui.add(nc);tr.add(ui);ui.scale.set(10,10,10);tr.add(lo);const ry=new Hh(16777215,1);tr.add(ry);const sy=new zh({color:16777215,size:.3,opacity:.5,transparent:!0,sizeAttenuation:!0,blending:el,map:ah,alphaMap:ah,alphaTest:.1}),Kf=new ci,Zf=200,Na=new Float32Array(Zf*3);for(let r=0;r<Zf;r++){const t=r*3;Na[t]=(Math.random()-.5)*4,Na[t+1]=(Math.random()-.5)*4,Na[t+2]=(Math.random()-.5)*4}Kf.setAttribute("position",new Kn(Na,3));const vs=new Sv(Kf,sy);vs.renderOrder=-1;function ay(){vs.geometry.attributes.position.array.forEach(function(r,t){}),vs.geometry.attributes.position.needsUpdate=!0}ay();tr.add(vs);const ii={width:window.innerWidth,height:window.innerHeight};window.addEventListener("resize",()=>{ii.width=window.innerWidth,ii.height=window.innerHeight,Ci.aspect=ii.width/ii.height,Ci.updateProjectionMatrix(),Ar.setSize(ii.width,ii.height),Ar.setPixelRatio(Math.min(window.devicePixelRatio,2))});const oy=20,Ci=new wn(oy,ii.width/ii.height,.1,100);Ci.position.x=1;Ci.position.y=1;Ci.position.z=-5;tr.add(Ci);const ly=new Hh(16777215,1);tr.add(ly);const $f=new Lv(16777215,100,5);$f.position.set(0,0,0);ui.add($f);const Jf=new Iv;Ci.add(Jf);const ic=new Ov(Jf),cy=new Nv(ic,8192);let oh=!1;const Ss=new Bv(Ci,gs);Ss.enableDamping=!0;Ss.dampingFactor=.05;Ss.autoRotate=!0;Ss.autoRotateSpeed=1;Ss.enableZoom=!0;const Ar=new Bh({canvas:gs,alpha:!0,antialias:!0});Ar.setSize(ii.width,ii.height);Ar.setPixelRatio(Math.min(window.devicePixelRatio,2));Ar.shadowMap.enabled=!0;Ar.shadowMap.type=ch;gs.style.webkitFilter="blur(10px)";ui.scale.set(5,5,5);var pr=.1;document.getElementById("x").addEventListener("click",function(){ic.play(),pr=1,rn.to(".titolo",{opacity:-10,duration:2,ease:"power1.inOut",onComplete:function(){const r=document.getElementById("x");r.style.display="none"}}),rn.to(".webgl",{webkitFilter:"blur(0px)",duration:3,ease:"easein",onComplete:function(){rn.to(qf,{valore:0,duration:2,ease:"power2.out"})}}),rn.to(ui.scale,{x:1,y:1,z:1,duration:2,ease:"easein"}),console.log("ok"),oh||rn.to(".sidenav",{opacity:1,duration:2,ease:"power1.in",onComplete:function(){const r=document.getElementById("x");r.style.display="none"}}),oh=!0});gs.classList.add("shakera");const uy=new Wh,Qf=()=>{const t=cy.getFrequencyData().slice(0,32),n=t.reduce((s,o)=>s+o)/t.length/256*1.2,i=uy.getElapsedTime();jf.rotation.x=Math.sin(i)*.2*pr,$a.rotation.y=Math.sin(i)*.2*pr,$a.rotation.y=Math.sin(i)*.4*pr,lo.rotation.x=Math.sin(i)*.2*pr,nc.rotation.y=Math.sin(i)*pr,ui.rotation.x=i,yn.opacity=Math.sin(n*2)*pr+qf.valore,n>.99?(rn.to(".webgl",{webkitFilter:"blur(1.2px)",duration:.2,ease:"ease.in",onComplete:function(){rn.to(".webgl",{webkitFilter:"blur(0px)",duration:.2,ease:"power2.out"})}}),rn.to(yn,{opacity:0,duration:1}),rn.to(vs.material,{opacity:.5,duration:1}),gs.style.animationPlayState="running"):n<.97&&(gs.style.animationPlayState="paused",rn.to(ec,{opacity:0,duration:.5}),rn.to(vs.material,{opacity:.2,duration:1})),Ss.update(),Ar.render(tr,Ci),window.requestAnimationFrame(Qf)};Qf();
