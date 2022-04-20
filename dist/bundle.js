(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],2:[function(require,module,exports){
(function (process){(function (){
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.MessagePack=e():t.MessagePack=e()}(this,(function(){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e,r){"use strict";r.r(e),r.d(e,"encode",(function(){return T})),r.d(e,"decode",(function(){return V})),r.d(e,"decodeAsync",(function(){return Y})),r.d(e,"decodeArrayStream",(function(){return Z})),r.d(e,"decodeStream",(function(){return $})),r.d(e,"Decoder",(function(){return O})),r.d(e,"Encoder",(function(){return I})),r.d(e,"ExtensionCodec",(function(){return S})),r.d(e,"ExtData",(function(){return p})),r.d(e,"EXT_TIMESTAMP",(function(){return w})),r.d(e,"encodeDateToTimeSpec",(function(){return g})),r.d(e,"encodeTimeSpecToTimestamp",(function(){return v})),r.d(e,"decodeTimestampToTimeSpec",(function(){return U})),r.d(e,"encodeTimestampExtension",(function(){return b})),r.d(e,"decodeTimestampExtension",(function(){return m}));var n=function(t,e){var r="function"==typeof Symbol&&t[Symbol.iterator];if(!r)return t;var n,i,o=r.call(t),s=[];try{for(;(void 0===e||e-- >0)&&!(n=o.next()).done;)s.push(n.value)}catch(t){i={error:t}}finally{try{n&&!n.done&&(r=o.return)&&r.call(o)}finally{if(i)throw i.error}}return s},i=function(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(n(arguments[e]));return t},o="undefined"!=typeof process&&"undefined"!=typeof TextEncoder&&"undefined"!=typeof TextDecoder;function s(t){for(var e=t.length,r=0,n=0;n<e;){var i=t.charCodeAt(n++);if(0!=(4294967168&i))if(0==(4294965248&i))r+=2;else{if(i>=55296&&i<=56319&&n<e){var o=t.charCodeAt(n);56320==(64512&o)&&(++n,i=((1023&i)<<10)+(1023&o)+65536)}r+=0==(4294901760&i)?3:4}else r++}return r}var a=o?new TextEncoder:void 0,h="undefined"!=typeof process?200:0;var u=(null==a?void 0:a.encodeInto)?function(t,e,r){a.encodeInto(t,e.subarray(r))}:function(t,e,r){e.set(a.encode(t),r)};function c(t,e,r){for(var n=e,o=n+r,s=[],a="";n<o;){var h=t[n++];if(0==(128&h))s.push(h);else if(192==(224&h)){var u=63&t[n++];s.push((31&h)<<6|u)}else if(224==(240&h)){u=63&t[n++];var c=63&t[n++];s.push((31&h)<<12|u<<6|c)}else if(240==(248&h)){var f=(7&h)<<18|(u=63&t[n++])<<12|(c=63&t[n++])<<6|63&t[n++];f>65535&&(f-=65536,s.push(f>>>10&1023|55296),f=56320|1023&f),s.push(f)}else s.push(h);s.length>=4096&&(a+=String.fromCharCode.apply(String,i(s)),s.length=0)}return s.length>0&&(a+=String.fromCharCode.apply(String,i(s))),a}var f=o?new TextDecoder:null,l="undefined"!=typeof process?200:0;var p=function(t,e){this.type=t,this.data=e};function d(t,e,r){var n=Math.floor(r/4294967296),i=r;t.setUint32(e,n),t.setUint32(e+4,i)}function y(t,e){var r=t.getInt32(e),n=t.getUint32(e+4),i=r<Math.floor(Number.MIN_SAFE_INTEGER/4294967296)||r===Math.floor(Number.MIN_SAFE_INTEGER/4294967296)&&0===n,o=r>Math.floor(Number.MAX_SAFE_INTEGER/4294967296);return i||o?BigInt(r)*BigInt(4294967296)+BigInt(n):4294967296*r+n}var w=-1;function v(t){var e=t.sec,r=t.nsec;if(e>=0&&r>=0&&e<=17179869183){if(0===r&&e<=4294967295){var n=new Uint8Array(4);return(s=new DataView(n.buffer)).setUint32(0,e),n}var i=e/4294967296,o=4294967295&e;n=new Uint8Array(8);return(s=new DataView(n.buffer)).setUint32(0,r<<2|3&i),s.setUint32(4,o),n}var s;n=new Uint8Array(12);return(s=new DataView(n.buffer)).setUint32(0,r),d(s,4,e),n}function g(t){var e=t.getTime(),r=Math.floor(e/1e3),n=1e6*(e-1e3*r),i=Math.floor(n/1e9);return{sec:r+i,nsec:n-1e9*i}}function b(t){return t instanceof Date?v(g(t)):null}function U(t){var e=new DataView(t.buffer,t.byteOffset,t.byteLength);switch(t.byteLength){case 4:return{sec:e.getUint32(0),nsec:0};case 8:var r=e.getUint32(0);return{sec:4294967296*(3&r)+e.getUint32(4),nsec:r>>>2};case 12:return{sec:y(e,4),nsec:e.getUint32(0)};default:throw new Error("Unrecognized data size for timestamp: "+t.length)}}function m(t){var e=U(t);return new Date(1e3*e.sec+e.nsec/1e6)}var x={type:w,encode:b,decode:m},S=function(){function t(){this.builtInEncoders=[],this.builtInDecoders=[],this.encoders=[],this.decoders=[],this.register(x)}return t.prototype.register=function(t){var e=t.type,r=t.encode,n=t.decode;if(e>=0)this.encoders[e]=r,this.decoders[e]=n;else{var i=1+e;this.builtInEncoders[i]=r,this.builtInDecoders[i]=n}},t.prototype.tryToEncode=function(t,e){for(var r=0;r<this.builtInEncoders.length;r++){if(null!=(n=this.builtInEncoders[r]))if(null!=(i=n(t,e)))return new p(-1-r,i)}for(r=0;r<this.encoders.length;r++){var n,i;if(null!=(n=this.encoders[r]))if(null!=(i=n(t,e)))return new p(r,i)}return t instanceof p?t:null},t.prototype.decode=function(t,e,r){var n=e<0?this.builtInDecoders[-1-e]:this.decoders[e];return n?n(t,e,r):new p(e,t)},t.defaultCodec=new t,t}();function B(t){return t instanceof Uint8Array?t:ArrayBuffer.isView(t)?new Uint8Array(t.buffer,t.byteOffset,t.byteLength):t instanceof ArrayBuffer?new Uint8Array(t):Uint8Array.from(t)}var E=function(t){var e="function"==typeof Symbol&&Symbol.iterator,r=e&&t[e],n=0;if(r)return r.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")},I=function(){function t(t,e,r,n,i,o,s,a){void 0===t&&(t=S.defaultCodec),void 0===e&&(e=void 0),void 0===r&&(r=100),void 0===n&&(n=2048),void 0===i&&(i=!1),void 0===o&&(o=!1),void 0===s&&(s=!1),void 0===a&&(a=!1),this.extensionCodec=t,this.context=e,this.maxDepth=r,this.initialBufferSize=n,this.sortKeys=i,this.forceFloat32=o,this.ignoreUndefined=s,this.forceIntegerToFloat=a,this.pos=0,this.view=new DataView(new ArrayBuffer(this.initialBufferSize)),this.bytes=new Uint8Array(this.view.buffer)}return t.prototype.getUint8Array=function(){return this.bytes.subarray(0,this.pos)},t.prototype.reinitializeState=function(){this.pos=0},t.prototype.encode=function(t){return this.reinitializeState(),this.doEncode(t,1),this.getUint8Array()},t.prototype.doEncode=function(t,e){if(e>this.maxDepth)throw new Error("Too deep objects in depth "+e);null==t?this.encodeNil():"boolean"==typeof t?this.encodeBoolean(t):"number"==typeof t?this.encodeNumber(t):"string"==typeof t?this.encodeString(t):"bigint"==typeof t?this.encodebigint(t):this.encodeObject(t,e)},t.prototype.ensureBufferSizeToWrite=function(t){var e=this.pos+t;this.view.byteLength<e&&this.resizeBuffer(2*e)},t.prototype.resizeBuffer=function(t){var e=new ArrayBuffer(t),r=new Uint8Array(e),n=new DataView(e);r.set(this.bytes),this.view=n,this.bytes=r},t.prototype.encodeNil=function(){this.writeU8(192)},t.prototype.encodeBoolean=function(t){!1===t?this.writeU8(194):this.writeU8(195)},t.prototype.encodeNumber=function(t){Number.isSafeInteger(t)&&!this.forceIntegerToFloat?t>=0?t<128?this.writeU8(t):t<256?(this.writeU8(204),this.writeU8(t)):t<65536?(this.writeU8(205),this.writeU16(t)):t<4294967296?(this.writeU8(206),this.writeU32(t)):(this.writeU8(207),this.writeU64(t)):t>=-32?this.writeU8(224|t+32):t>=-128?(this.writeU8(208),this.writeI8(t)):t>=-32768?(this.writeU8(209),this.writeI16(t)):t>=-2147483648?(this.writeU8(210),this.writeI32(t)):(this.writeU8(211),this.writeI64(t)):this.forceFloat32?(this.writeU8(202),this.writeF32(t)):(this.writeU8(203),this.writeF64(t))},t.prototype.encodebigint=function(t){t>=BigInt(0)?t<BigInt(128)?this.writeU8(Number(t)):t<BigInt(256)?(this.writeU8(204),this.writeU8(Number(t))):t<BigInt(65536)?(this.writeU8(205),this.writeU16(Number(t))):t<BigInt(4294967296)?(this.writeU8(206),this.writeU32(Number(t))):(this.writeU8(207),this.writeBig64(t)):t>=BigInt(-32)?this.writeU8(224|Number(t)+32):t>=BigInt(-128)?(this.writeU8(208),this.writeI8(Number(t))):t>=BigInt(-32768)?(this.writeU8(209),this.writeI16(Number(t))):t>=BigInt(-2147483648)?(this.writeU8(210),this.writeI32(Number(t))):(this.writeU8(211),this.writeBig64(t))},t.prototype.writeStringHeader=function(t){if(t<32)this.writeU8(160+t);else if(t<256)this.writeU8(217),this.writeU8(t);else if(t<65536)this.writeU8(218),this.writeU16(t);else{if(!(t<4294967296))throw new Error("Too long string: "+t+" bytes in UTF-8");this.writeU8(219),this.writeU32(t)}},t.prototype.encodeString=function(t){var e=t.length;if(o&&e>h){var r=s(t);this.ensureBufferSizeToWrite(5+r),this.writeStringHeader(r),u(t,this.bytes,this.pos),this.pos+=r}else{r=s(t);this.ensureBufferSizeToWrite(5+r),this.writeStringHeader(r),function(t,e,r){for(var n=t.length,i=r,o=0;o<n;){var s=t.charCodeAt(o++);if(0!=(4294967168&s)){if(0==(4294965248&s))e[i++]=s>>6&31|192;else{if(s>=55296&&s<=56319&&o<n){var a=t.charCodeAt(o);56320==(64512&a)&&(++o,s=((1023&s)<<10)+(1023&a)+65536)}0==(4294901760&s)?(e[i++]=s>>12&15|224,e[i++]=s>>6&63|128):(e[i++]=s>>18&7|240,e[i++]=s>>12&63|128,e[i++]=s>>6&63|128)}e[i++]=63&s|128}else e[i++]=s}}(t,this.bytes,this.pos),this.pos+=r}},t.prototype.encodeObject=function(t,e){var r=this.extensionCodec.tryToEncode(t,this.context);if(null!=r)this.encodeExtension(r);else if(Array.isArray(t))this.encodeArray(t,e);else if(ArrayBuffer.isView(t))this.encodeBinary(t);else{if("object"!=typeof t)throw new Error("Unrecognized object: "+Object.prototype.toString.apply(t));this.encodeMap(t,e)}},t.prototype.encodeBinary=function(t){var e=t.byteLength;if(e<256)this.writeU8(196),this.writeU8(e);else if(e<65536)this.writeU8(197),this.writeU16(e);else{if(!(e<4294967296))throw new Error("Too large binary: "+e);this.writeU8(198),this.writeU32(e)}var r=B(t);this.writeU8a(r)},t.prototype.encodeArray=function(t,e){var r,n,i=t.length;if(i<16)this.writeU8(144+i);else if(i<65536)this.writeU8(220),this.writeU16(i);else{if(!(i<4294967296))throw new Error("Too large array: "+i);this.writeU8(221),this.writeU32(i)}try{for(var o=E(t),s=o.next();!s.done;s=o.next()){var a=s.value;this.doEncode(a,e+1)}}catch(t){r={error:t}}finally{try{s&&!s.done&&(n=o.return)&&n.call(o)}finally{if(r)throw r.error}}},t.prototype.countWithoutUndefined=function(t,e){var r,n,i=0;try{for(var o=E(e),s=o.next();!s.done;s=o.next()){void 0!==t[s.value]&&i++}}catch(t){r={error:t}}finally{try{s&&!s.done&&(n=o.return)&&n.call(o)}finally{if(r)throw r.error}}return i},t.prototype.encodeMap=function(t,e){var r,n,i=Object.keys(t);this.sortKeys&&i.sort();var o=this.ignoreUndefined?this.countWithoutUndefined(t,i):i.length;if(o<16)this.writeU8(128+o);else if(o<65536)this.writeU8(222),this.writeU16(o);else{if(!(o<4294967296))throw new Error("Too large map object: "+o);this.writeU8(223),this.writeU32(o)}try{for(var s=E(i),a=s.next();!a.done;a=s.next()){var h=a.value,u=t[h];this.ignoreUndefined&&void 0===u||(this.encodeString(h),this.doEncode(u,e+1))}}catch(t){r={error:t}}finally{try{a&&!a.done&&(n=s.return)&&n.call(s)}finally{if(r)throw r.error}}},t.prototype.encodeExtension=function(t){var e=t.data.length;if(1===e)this.writeU8(212);else if(2===e)this.writeU8(213);else if(4===e)this.writeU8(214);else if(8===e)this.writeU8(215);else if(16===e)this.writeU8(216);else if(e<256)this.writeU8(199),this.writeU8(e);else if(e<65536)this.writeU8(200),this.writeU16(e);else{if(!(e<4294967296))throw new Error("Too large extension object: "+e);this.writeU8(201),this.writeU32(e)}this.writeI8(t.type),this.writeU8a(t.data)},t.prototype.writeU8=function(t){this.ensureBufferSizeToWrite(1),this.view.setUint8(this.pos,t),this.pos++},t.prototype.writeU8a=function(t){var e=t.length;this.ensureBufferSizeToWrite(e),this.bytes.set(t,this.pos),this.pos+=e},t.prototype.writeI8=function(t){this.ensureBufferSizeToWrite(1),this.view.setInt8(this.pos,t),this.pos++},t.prototype.writeU16=function(t){this.ensureBufferSizeToWrite(2),this.view.setUint16(this.pos,t),this.pos+=2},t.prototype.writeI16=function(t){this.ensureBufferSizeToWrite(2),this.view.setInt16(this.pos,t),this.pos+=2},t.prototype.writeU32=function(t){this.ensureBufferSizeToWrite(4),this.view.setUint32(this.pos,t),this.pos+=4},t.prototype.writeI32=function(t){this.ensureBufferSizeToWrite(4),this.view.setInt32(this.pos,t),this.pos+=4},t.prototype.writeF32=function(t){this.ensureBufferSizeToWrite(4),this.view.setFloat32(this.pos,t),this.pos+=4},t.prototype.writeF64=function(t){this.ensureBufferSizeToWrite(8),this.view.setFloat64(this.pos,t),this.pos+=8},t.prototype.writeU64=function(t){this.ensureBufferSizeToWrite(8),function(t,e,r){var n=r/4294967296,i=r;t.setUint32(e,n),t.setUint32(e+4,i)}(this.view,this.pos,t),this.pos+=8},t.prototype.writeI64=function(t){this.ensureBufferSizeToWrite(8),d(this.view,this.pos,t),this.pos+=8},t.prototype.writeBig64=function(t){this.ensureBufferSizeToWrite(8),function(t,e,r){var n=Number(r/BigInt(4294967296)),i=Number(r%BigInt(4294967296));n<0&&0!==i&&(n-=1),t.setUint32(e,n),t.setUint32(e+4,i)}(this.view,this.pos,t),this.pos+=8},t}(),A={};function T(t,e){return void 0===e&&(e=A),new I(e.extensionCodec,e.context,e.maxDepth,e.initialBufferSize,e.sortKeys,e.forceFloat32,e.ignoreUndefined,e.forceIntegerToFloat).encode(t)}function L(t){return(t<0?"-":"")+"0x"+Math.abs(t).toString(16).padStart(2,"0")}var M=function(){function t(t,e){void 0===t&&(t=16),void 0===e&&(e=16),this.maxKeyLength=t,this.maxLengthPerKey=e,this.hit=0,this.miss=0,this.caches=[];for(var r=0;r<this.maxKeyLength;r++)this.caches.push([])}return t.prototype.canBeCached=function(t){return t>0&&t<=this.maxKeyLength},t.prototype.get=function(t,e,r){var n=this.caches[r-1],i=n.length;t:for(var o=0;o<i;o++){for(var s=n[o],a=s.bytes,h=0;h<r;h++)if(a[h]!==t[e+h])continue t;return s.value}return null},t.prototype.store=function(t,e){var r=this.caches[t.length-1],n={bytes:t,value:e};r.length>=this.maxLengthPerKey?r[Math.random()*r.length|0]=n:r.push(n)},t.prototype.decode=function(t,e,r){var n=this.get(t,e,r);if(null!=n)return this.hit++,n;this.miss++;var i=c(t,e,r),o=Uint8Array.prototype.slice.call(t,e,e+r);return this.store(o,i),i},t}(),k=function(t,e,r,n){return new(r||(r=Promise))((function(i,o){function s(t){try{h(n.next(t))}catch(t){o(t)}}function a(t){try{h(n.throw(t))}catch(t){o(t)}}function h(t){var e;t.done?i(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(s,a)}h((n=n.apply(t,e||[])).next())}))},z=function(t,e){var r,n,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;s;)try{if(r=1,n&&(i=2&o[0]?n.return:o[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,o[1])).done)return i;switch(n=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,n=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!(i=s.trys,(i=i.length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){s=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1];break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o);break}i[2]&&s.ops.pop(),s.trys.pop();continue}o=e.call(t,s)}catch(t){o=[6,t],n=0}finally{r=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}},D=function(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e,r=t[Symbol.asyncIterator];return r?r.call(t):(t="function"==typeof __values?__values(t):t[Symbol.iterator](),e={},n("next"),n("throw"),n("return"),e[Symbol.asyncIterator]=function(){return this},e);function n(r){e[r]=t[r]&&function(e){return new Promise((function(n,i){(function(t,e,r,n){Promise.resolve(n).then((function(e){t({value:e,done:r})}),e)})(n,i,(e=t[r](e)).done,e.value)}))}}},N=function(t){return this instanceof N?(this.v=t,this):new N(t)},C=function(t,e,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,i=r.apply(t,e||[]),o=[];return n={},s("next"),s("throw"),s("return"),n[Symbol.asyncIterator]=function(){return this},n;function s(t){i[t]&&(n[t]=function(e){return new Promise((function(r,n){o.push([t,e,r,n])>1||a(t,e)}))})}function a(t,e){try{(r=i[t](e)).value instanceof N?Promise.resolve(r.value.v).then(h,u):c(o[0][2],r)}catch(t){c(o[0][3],t)}var r}function h(t){a("next",t)}function u(t){a("throw",t)}function c(t,e){t(e),o.shift(),o.length&&a(o[0][0],o[0][1])}},P=new DataView(new ArrayBuffer(0)),F=new Uint8Array(P.buffer),j=function(){try{P.getInt8(0)}catch(t){return t.constructor}throw new Error("never reached")}(),_=new j("Insufficient data"),W=new M,O=function(){function t(t,e,r,n,i,o,s,a){void 0===t&&(t=S.defaultCodec),void 0===e&&(e=void 0),void 0===r&&(r=4294967295),void 0===n&&(n=4294967295),void 0===i&&(i=4294967295),void 0===o&&(o=4294967295),void 0===s&&(s=4294967295),void 0===a&&(a=W),this.extensionCodec=t,this.context=e,this.maxStrLength=r,this.maxBinLength=n,this.maxArrayLength=i,this.maxMapLength=o,this.maxExtLength=s,this.keyDecoder=a,this.totalPos=0,this.pos=0,this.view=P,this.bytes=F,this.headByte=-1,this.stack=[]}return t.prototype.reinitializeState=function(){this.totalPos=0,this.headByte=-1},t.prototype.setBuffer=function(t){this.bytes=B(t),this.view=function(t){if(t instanceof ArrayBuffer)return new DataView(t);var e=B(t);return new DataView(e.buffer,e.byteOffset,e.byteLength)}(this.bytes),this.pos=0},t.prototype.appendBuffer=function(t){if(-1!==this.headByte||this.hasRemaining()){var e=this.bytes.subarray(this.pos),r=B(t),n=new Uint8Array(e.length+r.length);n.set(e),n.set(r,e.length),this.setBuffer(n)}else this.setBuffer(t)},t.prototype.hasRemaining=function(t){return void 0===t&&(t=1),this.view.byteLength-this.pos>=t},t.prototype.createNoExtraBytesError=function(t){var e=this.view,r=this.pos;return new RangeError("Extra "+(e.byteLength-r)+" of "+e.byteLength+" byte(s) found at buffer["+t+"]")},t.prototype.decode=function(t){return this.reinitializeState(),this.setBuffer(t),this.doDecodeSingleSync()},t.prototype.doDecodeSingleSync=function(){var t=this.doDecodeSync();if(this.hasRemaining())throw this.createNoExtraBytesError(this.pos);return t},t.prototype.decodeAsync=function(t){var e,r,n,i;return k(this,void 0,void 0,(function(){var o,s,a,h,u,c,f,l;return z(this,(function(p){switch(p.label){case 0:o=!1,p.label=1;case 1:p.trys.push([1,6,7,12]),e=D(t),p.label=2;case 2:return[4,e.next()];case 3:if((r=p.sent()).done)return[3,5];if(a=r.value,o)throw this.createNoExtraBytesError(this.totalPos);this.appendBuffer(a);try{s=this.doDecodeSync(),o=!0}catch(t){if(!(t instanceof j))throw t}this.totalPos+=this.pos,p.label=4;case 4:return[3,2];case 5:return[3,12];case 6:return h=p.sent(),n={error:h},[3,12];case 7:return p.trys.push([7,,10,11]),r&&!r.done&&(i=e.return)?[4,i.call(e)]:[3,9];case 8:p.sent(),p.label=9;case 9:return[3,11];case 10:if(n)throw n.error;return[7];case 11:return[7];case 12:if(o){if(this.hasRemaining())throw this.createNoExtraBytesError(this.totalPos);return[2,s]}throw c=(u=this).headByte,f=u.pos,l=u.totalPos,new RangeError("Insufficient data in parcing "+L(c)+" at "+l+" ("+f+" in the current buffer)")}}))}))},t.prototype.decodeArrayStream=function(t){return this.decodeMultiAsync(t,!0)},t.prototype.decodeStream=function(t){return this.decodeMultiAsync(t,!1)},t.prototype.decodeMultiAsync=function(t,e){return C(this,arguments,(function(){var r,n,i,o,s,a,h,u,c;return z(this,(function(f){switch(f.label){case 0:r=e,n=-1,f.label=1;case 1:f.trys.push([1,13,14,19]),i=D(t),f.label=2;case 2:return[4,N(i.next())];case 3:if((o=f.sent()).done)return[3,12];if(s=o.value,e&&0===n)throw this.createNoExtraBytesError(this.totalPos);this.appendBuffer(s),r&&(n=this.readArraySize(),r=!1,this.complete()),f.label=4;case 4:f.trys.push([4,9,,10]),f.label=5;case 5:return[4,N(this.doDecodeSync())];case 6:return[4,f.sent()];case 7:return f.sent(),0==--n?[3,8]:[3,5];case 8:return[3,10];case 9:if(!((a=f.sent())instanceof j))throw a;return[3,10];case 10:this.totalPos+=this.pos,f.label=11;case 11:return[3,2];case 12:return[3,19];case 13:return h=f.sent(),u={error:h},[3,19];case 14:return f.trys.push([14,,17,18]),o&&!o.done&&(c=i.return)?[4,N(c.call(i))]:[3,16];case 15:f.sent(),f.label=16;case 16:return[3,18];case 17:if(u)throw u.error;return[7];case 18:return[7];case 19:return[2]}}))}))},t.prototype.doDecodeSync=function(){t:for(;;){var t=this.readHeadByte(),e=void 0;if(t>=224)e=t-256;else if(t<192)if(t<128)e=t;else if(t<144){if(0!==(n=t-128)){this.pushMapState(n),this.complete();continue t}e={}}else if(t<160){if(0!==(n=t-144)){this.pushArrayState(n),this.complete();continue t}e=[]}else{var r=t-160;e=this.decodeUtf8String(r,0)}else if(192===t)e=null;else if(194===t)e=!1;else if(195===t)e=!0;else if(202===t)e=this.readF32();else if(203===t)e=this.readF64();else if(204===t)e=this.readU8();else if(205===t)e=this.readU16();else if(206===t)e=this.readU32();else if(207===t)e=this.readU64();else if(208===t)e=this.readI8();else if(209===t)e=this.readI16();else if(210===t)e=this.readI32();else if(211===t)e=this.readI64();else if(217===t){r=this.lookU8();e=this.decodeUtf8String(r,1)}else if(218===t){r=this.lookU16();e=this.decodeUtf8String(r,2)}else if(219===t){r=this.lookU32();e=this.decodeUtf8String(r,4)}else if(220===t){if(0!==(n=this.readU16())){this.pushArrayState(n),this.complete();continue t}e=[]}else if(221===t){if(0!==(n=this.readU32())){this.pushArrayState(n),this.complete();continue t}e=[]}else if(222===t){if(0!==(n=this.readU16())){this.pushMapState(n),this.complete();continue t}e={}}else if(223===t){if(0!==(n=this.readU32())){this.pushMapState(n),this.complete();continue t}e={}}else if(196===t){var n=this.lookU8();e=this.decodeBinary(n,1)}else if(197===t){n=this.lookU16();e=this.decodeBinary(n,2)}else if(198===t){n=this.lookU32();e=this.decodeBinary(n,4)}else if(212===t)e=this.decodeExtension(1,0);else if(213===t)e=this.decodeExtension(2,0);else if(214===t)e=this.decodeExtension(4,0);else if(215===t)e=this.decodeExtension(8,0);else if(216===t)e=this.decodeExtension(16,0);else if(199===t){n=this.lookU8();e=this.decodeExtension(n,1)}else if(200===t){n=this.lookU16();e=this.decodeExtension(n,2)}else{if(201!==t)throw new Error("Unrecognized type byte: "+L(t));n=this.lookU32();e=this.decodeExtension(n,4)}this.complete();for(var i=this.stack;i.length>0;){var o=i[i.length-1];if(0===o.type){if(o.array[o.position]=e,o.position++,o.position!==o.size)continue t;i.pop(),e=o.array}else{if(1===o.type){if(s=void 0,"string"!==(s=typeof e)&&"number"!==s)throw new Error("The type of key must be string or number but "+typeof e);o.key=e,o.type=2;continue t}if(o.map[o.key]=e,o.readCount++,o.readCount!==o.size){o.key=null,o.type=1;continue t}i.pop(),e=o.map}}return e}var s},t.prototype.readHeadByte=function(){return-1===this.headByte&&(this.headByte=this.readU8()),this.headByte},t.prototype.complete=function(){this.headByte=-1},t.prototype.readArraySize=function(){var t=this.readHeadByte();switch(t){case 220:return this.readU16();case 221:return this.readU32();default:if(t<160)return t-144;throw new Error("Unrecognized array type byte: "+L(t))}},t.prototype.pushMapState=function(t){if(t>this.maxMapLength)throw new Error("Max length exceeded: map length ("+t+") > maxMapLengthLength ("+this.maxMapLength+")");this.stack.push({type:1,size:t,key:null,readCount:0,map:{}})},t.prototype.pushArrayState=function(t){if(t>this.maxArrayLength)throw new Error("Max length exceeded: array length ("+t+") > maxArrayLength ("+this.maxArrayLength+")");this.stack.push({type:0,size:t,array:new Array(t),position:0})},t.prototype.decodeUtf8String=function(t,e){var r;if(t>this.maxStrLength)throw new Error("Max length exceeded: UTF-8 byte length ("+t+") > maxStrLength ("+this.maxStrLength+")");if(this.bytes.byteLength<this.pos+e+t)throw _;var n,i=this.pos+e;return n=this.stateIsMapKey()&&(null===(r=this.keyDecoder)||void 0===r?void 0:r.canBeCached(t))?this.keyDecoder.decode(this.bytes,i,t):o&&t>l?function(t,e,r){var n=t.subarray(e,e+r);return f.decode(n)}(this.bytes,i,t):c(this.bytes,i,t),this.pos+=e+t,n},t.prototype.stateIsMapKey=function(){return this.stack.length>0&&1===this.stack[this.stack.length-1].type},t.prototype.decodeBinary=function(t,e){if(t>this.maxBinLength)throw new Error("Max length exceeded: bin length ("+t+") > maxBinLength ("+this.maxBinLength+")");if(!this.hasRemaining(t+e))throw _;var r=this.pos+e,n=this.bytes.subarray(r,r+t);return this.pos+=e+t,n},t.prototype.decodeExtension=function(t,e){if(t>this.maxExtLength)throw new Error("Max length exceeded: ext length ("+t+") > maxExtLength ("+this.maxExtLength+")");var r=this.view.getInt8(this.pos+e),n=this.decodeBinary(t,e+1);return this.extensionCodec.decode(n,r,this.context)},t.prototype.lookU8=function(){return this.view.getUint8(this.pos)},t.prototype.lookU16=function(){return this.view.getUint16(this.pos)},t.prototype.lookU32=function(){return this.view.getUint32(this.pos)},t.prototype.readU8=function(){var t=this.view.getUint8(this.pos);return this.pos++,t},t.prototype.readI8=function(){var t=this.view.getInt8(this.pos);return this.pos++,t},t.prototype.readU16=function(){var t=this.view.getUint16(this.pos);return this.pos+=2,t},t.prototype.readI16=function(){var t=this.view.getInt16(this.pos);return this.pos+=2,t},t.prototype.readU32=function(){var t=this.view.getUint32(this.pos);return this.pos+=4,t},t.prototype.readI32=function(){var t=this.view.getInt32(this.pos);return this.pos+=4,t},t.prototype.readU64=function(){var t,e,r,n,i=(t=this.view,e=this.pos,r=t.getUint32(e),n=t.getUint32(e+4),r>Math.floor(Number.MAX_SAFE_INTEGER/4294967296)?BigInt(r)*BigInt(4294967296)+BigInt(n):4294967296*r+n);return this.pos+=8,i},t.prototype.readI64=function(){var t=y(this.view,this.pos);return this.pos+=8,t},t.prototype.readF32=function(){var t=this.view.getFloat32(this.pos);return this.pos+=4,t},t.prototype.readF64=function(){var t=this.view.getFloat64(this.pos);return this.pos+=8,t},t}(),R={};function V(t,e){return void 0===e&&(e=R),new O(e.extensionCodec,e.context,e.maxStrLength,e.maxBinLength,e.maxArrayLength,e.maxMapLength,e.maxExtLength).decode(t)}var K=function(t,e){var r,n,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;s;)try{if(r=1,n&&(i=2&o[0]?n.return:o[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,o[1])).done)return i;switch(n=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,n=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!(i=s.trys,(i=i.length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){s=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1];break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o);break}i[2]&&s.ops.pop(),s.trys.pop();continue}o=e.call(t,s)}catch(t){o=[6,t],n=0}finally{r=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}},G=function(t){return this instanceof G?(this.v=t,this):new G(t)},H=function(t,e,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,i=r.apply(t,e||[]),o=[];return n={},s("next"),s("throw"),s("return"),n[Symbol.asyncIterator]=function(){return this},n;function s(t){i[t]&&(n[t]=function(e){return new Promise((function(r,n){o.push([t,e,r,n])>1||a(t,e)}))})}function a(t,e){try{(r=i[t](e)).value instanceof G?Promise.resolve(r.value.v).then(h,u):c(o[0][2],r)}catch(t){c(o[0][3],t)}var r}function h(t){a("next",t)}function u(t){a("throw",t)}function c(t,e){t(e),o.shift(),o.length&&a(o[0][0],o[0][1])}};function X(t){if(null==t)throw new Error("Assertion Failure: value must not be null nor undefined")}function q(t){return null!=t[Symbol.asyncIterator]?t:function(t){return H(this,arguments,(function(){var e,r,n,i;return K(this,(function(o){switch(o.label){case 0:e=t.getReader(),o.label=1;case 1:o.trys.push([1,,9,10]),o.label=2;case 2:return[4,G(e.read())];case 3:return r=o.sent(),n=r.done,i=r.value,n?[4,G(void 0)]:[3,5];case 4:return[2,o.sent()];case 5:return X(i),[4,G(i)];case 6:return[4,o.sent()];case 7:return o.sent(),[3,2];case 8:return[3,10];case 9:return e.releaseLock(),[7];case 10:return[2]}}))}))}(t)}var J=function(t,e,r,n){return new(r||(r=Promise))((function(i,o){function s(t){try{h(n.next(t))}catch(t){o(t)}}function a(t){try{h(n.throw(t))}catch(t){o(t)}}function h(t){var e;t.done?i(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(s,a)}h((n=n.apply(t,e||[])).next())}))},Q=function(t,e){var r,n,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;s;)try{if(r=1,n&&(i=2&o[0]?n.return:o[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,o[1])).done)return i;switch(n=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,n=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!(i=s.trys,(i=i.length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){s=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1];break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o);break}i[2]&&s.ops.pop(),s.trys.pop();continue}o=e.call(t,s)}catch(t){o=[6,t],n=0}finally{r=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}};function Y(t,e){return void 0===e&&(e=R),J(this,void 0,void 0,(function(){var r;return Q(this,(function(n){return r=q(t),[2,new O(e.extensionCodec,e.context,e.maxStrLength,e.maxBinLength,e.maxArrayLength,e.maxMapLength,e.maxExtLength).decodeAsync(r)]}))}))}function Z(t,e){void 0===e&&(e=R);var r=q(t);return new O(e.extensionCodec,e.context,e.maxStrLength,e.maxBinLength,e.maxArrayLength,e.maxMapLength,e.maxExtLength).decodeArrayStream(r)}function $(t,e){void 0===e&&(e=R);var r=q(t);return new O(e.extensionCodec,e.context,e.maxStrLength,e.maxBinLength,e.maxArrayLength,e.maxMapLength,e.maxExtLength).decodeStream(r)}}])}));

}).call(this)}).call(this,require('_process'))
},{"_process":115}],3:[function(require,module,exports){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
const algosdk = __importStar(require("./src/main"));
__exportStar(require("./src/main"), exports);
exports.default = algosdk;

},{"./src/main":73}],4:[function(require,module,exports){
(function (Buffer){(function (){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ABITupleType = exports.ABIArrayDynamicType = exports.ABIArrayStaticType = exports.ABIStringType = exports.ABIByteType = exports.ABIBoolType = exports.ABIAddressType = exports.ABIUfixedType = exports.ABIUintType = exports.ABIType = exports.LENGTH_ENCODE_BYTE_SIZE = exports.SINGLE_BOOL_SIZE = exports.SINGLE_BYTE_SIZE = exports.ADDR_BYTE_SIZE = exports.MAX_LEN = void 0;
const address_1 = require("../encoding/address");
const bigint_1 = require("../encoding/bigint");
const utils_1 = require("../utils/utils");
exports.MAX_LEN = 2 ** 16 - 1;
exports.ADDR_BYTE_SIZE = 32;
exports.SINGLE_BYTE_SIZE = 1;
exports.SINGLE_BOOL_SIZE = 1;
exports.LENGTH_ENCODE_BYTE_SIZE = 2;
const staticArrayRegexp = /^([a-z\d[\](),]+)\[([1-9][\d]*)]$/;
const ufixedRegexp = /^ufixed([1-9][\d]*)x([1-9][\d]*)$/;
class ABIType {
    
    static from(str) {
        if (str.endsWith('[]')) {
            const arrayArgType = ABIType.from(str.slice(0, str.length - 2));
            return new ABIArrayDynamicType(arrayArgType);
        }
        if (str.endsWith(']')) {
            const stringMatches = str.match(staticArrayRegexp);
            
            if (stringMatches.length !== 3) {
                throw new Error(`malformed static array string: ${str}`);
            }
            
            const arrayLengthStr = stringMatches[2];
            const arrayLength = parseInt(arrayLengthStr, 10);
            if (arrayLength > exports.MAX_LEN) {
                throw new Error(`array length exceeds limit ${exports.MAX_LEN}`);
            }
            
            const arrayType = ABIType.from(stringMatches[1]);
            return new ABIArrayStaticType(arrayType, arrayLength);
        }
        if (str.startsWith('uint')) {
            
            const digitsOnly = (string) => [...string].every((c) => '0123456789'.includes(c));
            const typeSizeStr = str.slice(4, str.length);
            if (!digitsOnly(typeSizeStr)) {
                throw new Error(`malformed uint string: ${typeSizeStr}`);
            }
            const typeSize = parseInt(typeSizeStr, 10);
            if (typeSize > exports.MAX_LEN) {
                throw new Error(`malformed uint string: ${typeSize}`);
            }
            return new ABIUintType(typeSize);
        }
        if (str === 'byte') {
            return new ABIByteType();
        }
        if (str.startsWith('ufixed')) {
            const stringMatches = str.match(ufixedRegexp);
            if (stringMatches.length !== 3) {
                throw new Error(`malformed ufixed type: ${str}`);
            }
            const ufixedSize = parseInt(stringMatches[1], 10);
            const ufixedPrecision = parseInt(stringMatches[2], 10);
            return new ABIUfixedType(ufixedSize, ufixedPrecision);
        }
        if (str === 'bool') {
            return new ABIBoolType();
        }
        if (str === 'address') {
            return new ABIAddressType();
        }
        if (str === 'string') {
            return new ABIStringType();
        }
        if (str.length >= 2 && str[0] === '(' && str[str.length - 1] === ')') {
            const tupleContent = ABITupleType.parseTupleContent(str.slice(1, str.length - 1));
            const tupleTypes = [];
            for (let i = 0; i < tupleContent.length; i++) {
                const ti = ABIType.from(tupleContent[i]);
                tupleTypes.push(ti);
            }
            return new ABITupleType(tupleTypes);
        }
        throw new Error(`cannot convert a string ${str} to an ABI type`);
    }
}
exports.ABIType = ABIType;
class ABIUintType extends ABIType {
    constructor(size) {
        super();
        if (size % 8 !== 0 || size < 8 || size > 512) {
            throw new Error(`unsupported uint type bitSize: ${size}`);
        }
        this.bitSize = size;
    }
    toString() {
        return `uint${this.bitSize}`;
    }
    equals(other) {
        return other instanceof ABIUintType && this.bitSize === other.bitSize;
    }
    isDynamic() {
        return false;
    }
    byteLen() {
        return this.bitSize / 8;
    }
    encode(value) {
        if (typeof value !== 'bigint' && typeof value !== 'number') {
            throw new Error(`Cannot encode value as uint${this.bitSize}: ${value}`);
        }
        if (value >= BigInt(2 ** this.bitSize) || value < BigInt(0)) {
            throw new Error(`${value} is not a non-negative int or too big to fit in size uint${this.bitSize}`);
        }
        if (typeof value === 'number' && !Number.isSafeInteger(value)) {
            throw new Error(`${value} should be converted into a BigInt before it is encoded`);
        }
        return bigint_1.bigIntToBytes(value, this.bitSize / 8);
    }
    decode(byteString) {
        if (byteString.length !== this.bitSize / 8) {
            throw new Error(`byte string must correspond to a uint${this.bitSize}`);
        }
        return bigint_1.bytesToBigInt(byteString);
    }
}
exports.ABIUintType = ABIUintType;
class ABIUfixedType extends ABIType {
    constructor(size, denominator) {
        super();
        if (size % 8 !== 0 || size < 8 || size > 512) {
            throw new Error(`unsupported ufixed type bitSize: ${size}`);
        }
        if (denominator > 160 || denominator < 1) {
            throw new Error(`unsupported ufixed type precision: ${denominator}`);
        }
        this.bitSize = size;
        this.precision = denominator;
    }
    toString() {
        return `ufixed${this.bitSize}x${this.precision}`;
    }
    equals(other) {
        return (other instanceof ABIUfixedType &&
            this.bitSize === other.bitSize &&
            this.precision === other.precision);
    }
    isDynamic() {
        return false;
    }
    byteLen() {
        return this.bitSize / 8;
    }
    encode(value) {
        if (typeof value !== 'bigint' && typeof value !== 'number') {
            throw new Error(`Cannot encode value as ${this.toString()}: ${value}`);
        }
        if (value >= BigInt(2 ** this.bitSize) || value < BigInt(0)) {
            throw new Error(`${value} is not a non-negative int or too big to fit in size ${this.toString()}`);
        }
        if (typeof value === 'number' && !Number.isSafeInteger(value)) {
            throw new Error(`${value} should be converted into a BigInt before it is encoded`);
        }
        return bigint_1.bigIntToBytes(value, this.bitSize / 8);
    }
    decode(byteString) {
        if (byteString.length !== this.bitSize / 8) {
            throw new Error(`byte string must correspond to a ${this.toString()}`);
        }
        return bigint_1.bytesToBigInt(byteString);
    }
}
exports.ABIUfixedType = ABIUfixedType;
class ABIAddressType extends ABIType {
    toString() {
        return 'address';
    }
    equals(other) {
        return other instanceof ABIAddressType;
    }
    isDynamic() {
        return false;
    }
    byteLen() {
        return exports.ADDR_BYTE_SIZE;
    }
    encode(value) {
        if (typeof value !== 'string' && !(value instanceof Uint8Array)) {
            throw new Error(`Cannot encode value as ${this.toString()}: ${value}`);
        }
        if (typeof value === 'string') {
            const decodedAddress = address_1.decodeAddress(value);
            return decodedAddress.publicKey;
        }
        
        if (value.byteLength !== 32) {
            throw new Error(`byte string must be 32 bytes long for an address`);
        }
        return value;
    }
    decode(byteString) {
        if (byteString.byteLength !== 32) {
            throw new Error(`byte string must be 32 bytes long for an address`);
        }
        return address_1.encodeAddress(byteString);
    }
}
exports.ABIAddressType = ABIAddressType;
class ABIBoolType extends ABIType {
    toString() {
        return 'bool';
    }
    equals(other) {
        return other instanceof ABIBoolType;
    }
    isDynamic() {
        return false;
    }
    byteLen() {
        return exports.SINGLE_BOOL_SIZE;
    }
    encode(value) {
        if (typeof value !== 'boolean') {
            throw new Error(`Cannot encode value as bool: ${value}`);
        }
        if (value) {
            return new Uint8Array([128]);
        }
        return new Uint8Array([0]);
    }
    decode(byteString) {
        if (byteString.byteLength !== 1) {
            throw new Error(`bool string must be 1 byte long`);
        }
        const value = byteString[0];
        if (value === 128) {
            return true;
        }
        if (value === 0) {
            return false;
        }
        throw new Error(`boolean could not be decoded from the byte string`);
    }
}
exports.ABIBoolType = ABIBoolType;
class ABIByteType extends ABIType {
    toString() {
        return 'byte';
    }
    equals(other) {
        return other instanceof ABIByteType;
    }
    isDynamic() {
        return false;
    }
    byteLen() {
        return exports.SINGLE_BYTE_SIZE;
    }
    encode(value) {
        if (typeof value !== 'number' && typeof value !== 'bigint') {
            throw new Error(`Cannot encode value as byte: ${value}`);
        }
        if (typeof value === 'bigint') {
            
            value = Number(value);
        }
        if (value < 0 || value > 255) {
            throw new Error(`${value} cannot be encoded into a byte`);
        }
        return new Uint8Array([value]);
    }
    decode(byteString) {
        if (byteString.byteLength !== 1) {
            throw new Error(`byte string must be 1 byte long`);
        }
        return byteString[0];
    }
}
exports.ABIByteType = ABIByteType;
class ABIStringType extends ABIType {
    toString() {
        return 'string';
    }
    equals(other) {
        return other instanceof ABIStringType;
    }
    isDynamic() {
        return true;
    }
    byteLen() {
        throw new Error(`${this.toString()} is a dynamic type`);
    }
    encode(value) {
        if (typeof value !== 'string' && !(value instanceof Uint8Array)) {
            throw new Error(`Cannot encode value as string: ${value}`);
        }
        const encodedBytes = Buffer.from(value);
        const encodedLength = bigint_1.bigIntToBytes(value.length, exports.LENGTH_ENCODE_BYTE_SIZE);
        const mergedBytes = new Uint8Array(value.length + exports.LENGTH_ENCODE_BYTE_SIZE);
        mergedBytes.set(encodedLength);
        mergedBytes.set(encodedBytes, exports.LENGTH_ENCODE_BYTE_SIZE);
        return mergedBytes;
    }
    decode(byteString) {
        if (byteString.length < exports.LENGTH_ENCODE_BYTE_SIZE) {
            throw new Error(`byte string is too short to be decoded. Actual length is ${byteString.length}, but expected at least ${exports.LENGTH_ENCODE_BYTE_SIZE}`);
        }
        const buf = Buffer.from(byteString);
        const byteLength = buf.readUIntBE(0, exports.LENGTH_ENCODE_BYTE_SIZE);
        const byteValue = byteString.slice(exports.LENGTH_ENCODE_BYTE_SIZE, byteString.length);
        if (byteLength !== byteValue.length) {
            throw new Error(`string length bytes do not match the actual length of string. Expected ${byteLength}, got ${byteValue.length}`);
        }
        return Buffer.from(byteValue).toString('utf-8');
    }
}
exports.ABIStringType = ABIStringType;
class ABIArrayStaticType extends ABIType {
    constructor(argType, arrayLength) {
        super();
        if (arrayLength < 1) {
            throw new Error(`static array must have a length greater than 0: ${arrayLength}`);
        }
        this.childType = argType;
        this.staticLength = arrayLength;
    }
    toString() {
        return `${this.childType.toString()}[${this.staticLength}]`;
    }
    equals(other) {
        return (other instanceof ABIArrayStaticType &&
            this.staticLength === other.staticLength &&
            this.childType.equals(other.childType));
    }
    isDynamic() {
        return this.childType.isDynamic();
    }
    byteLen() {
        if (this.childType.constructor === ABIBoolType) {
            return Math.ceil(this.staticLength / 8);
        }
        return this.staticLength * this.childType.byteLen();
    }
    encode(value) {
        if (!Array.isArray(value) && !(value instanceof Uint8Array)) {
            throw new Error(`Cannot encode value as ${this.toString()}: ${value}`);
        }
        if (value.length !== this.staticLength) {
            throw new Error(`Value array does not match static array length. Expected ${this.staticLength}, got ${value.length}`);
        }
        const convertedTuple = this.toABITupleType();
        return convertedTuple.encode(value);
    }
    decode(byteString) {
        const convertedTuple = this.toABITupleType();
        return convertedTuple.decode(byteString);
    }
    toABITupleType() {
        return new ABITupleType(Array(this.staticLength).fill(this.childType));
    }
}
exports.ABIArrayStaticType = ABIArrayStaticType;
class ABIArrayDynamicType extends ABIType {
    constructor(argType) {
        super();
        this.childType = argType;
    }
    toString() {
        return `${this.childType.toString()}[]`;
    }
    equals(other) {
        return (other instanceof ABIArrayDynamicType &&
            this.childType.equals(other.childType));
    }
    isDynamic() {
        return true;
    }
    byteLen() {
        throw new Error(`${this.toString()} is a dynamic type`);
    }
    encode(value) {
        if (!Array.isArray(value) && !(value instanceof Uint8Array)) {
            throw new Error(`Cannot encode value as ${this.toString()}: ${value}`);
        }
        const convertedTuple = this.toABITupleType(value.length);
        const encodedTuple = convertedTuple.encode(value);
        const encodedLength = bigint_1.bigIntToBytes(convertedTuple.childTypes.length, exports.LENGTH_ENCODE_BYTE_SIZE);
        const mergedBytes = utils_1.concatArrays(encodedLength, encodedTuple);
        return mergedBytes;
    }
    decode(byteString) {
        const buf = Buffer.from(byteString);
        const byteLength = buf.readUIntBE(0, exports.LENGTH_ENCODE_BYTE_SIZE);
        const convertedTuple = this.toABITupleType(byteLength);
        return convertedTuple.decode(byteString.slice(exports.LENGTH_ENCODE_BYTE_SIZE, byteString.length));
    }
    toABITupleType(length) {
        return new ABITupleType(Array(length).fill(this.childType));
    }
}
exports.ABIArrayDynamicType = ABIArrayDynamicType;
class ABITupleType extends ABIType {
    constructor(argTypes) {
        super();
        if (argTypes.length >= exports.MAX_LEN) {
            throw new Error('tuple type child type number larger than maximum uint16 error');
        }
        this.childTypes = argTypes;
    }
    toString() {
        const typeStrings = [];
        for (let i = 0; i < this.childTypes.length; i++) {
            typeStrings[i] = this.childTypes[i].toString();
        }
        return `(${typeStrings.join(',')})`;
    }
    equals(other) {
        return (other instanceof ABITupleType &&
            this.childTypes.length === other.childTypes.length &&
            this.childTypes.every((child, index) => child.equals(other.childTypes[index])));
    }
    isDynamic() {
        const isDynamic = (child) => child.isDynamic();
        return this.childTypes.some(isDynamic);
    }
    byteLen() {
        let size = 0;
        for (let i = 0; i < this.childTypes.length; i++) {
            if (this.childTypes[i].constructor === ABIBoolType) {
                const after = findBoolLR(this.childTypes, i, 1);
                const boolNum = after + 1;
                i += after;
                size += Math.trunc((boolNum + 7) / 8);
            }
            else {
                const childByteSize = this.childTypes[i].byteLen();
                size += childByteSize;
            }
        }
        return size;
    }
    encode(value) {
        if (!Array.isArray(value) && !(value instanceof Uint8Array)) {
            throw new Error(`Cannot encode value as ${this.toString()}: ${value}`);
        }
        const values = Array.from(value);
        if (value.length > exports.MAX_LEN) {
            throw new Error('length of tuple array should not exceed a uint16');
        }
        const tupleTypes = this.childTypes;
        const heads = [];
        const tails = [];
        const isDynamicIndex = new Map();
        let i = 0;
        while (i < tupleTypes.length) {
            const tupleType = tupleTypes[i];
            if (tupleType.isDynamic()) {
                
                isDynamicIndex.set(heads.length, true);
                heads.push(new Uint8Array([0, 0]));
                tails.push(tupleType.encode(values[i]));
            }
            else {
                if (tupleType.constructor === ABIBoolType) {
                    const before = findBoolLR(tupleTypes, i, -1);
                    let after = findBoolLR(tupleTypes, i, 1);
                    
                    if (before % 8 !== 0) {
                        throw new Error('expected before index should have number of bool mod 8 equal 0');
                    }
                    after = Math.min(7, after);
                    const compressedInt = compressMultipleBool(values.slice(i, i + after + 1));
                    heads.push(bigint_1.bigIntToBytes(compressedInt, 1));
                    i += after;
                }
                else {
                    const encodedTupleValue = tupleType.encode(values[i]);
                    heads.push(encodedTupleValue);
                }
                isDynamicIndex.set(i, false);
                tails.push(new Uint8Array());
            }
            i += 1;
        }
        
        let headLength = 0;
        for (const headElement of heads) {
            headLength += headElement.length;
        }
        
        let tailLength = 0;
        for (let j = 0; j < heads.length; j++) {
            if (isDynamicIndex.get(j)) {
                const headValue = headLength + tailLength;
                if (headValue > exports.MAX_LEN) {
                    throw new Error(`byte length of ${headValue} should not exceed a uint16`);
                }
                heads[j] = bigint_1.bigIntToBytes(headValue, exports.LENGTH_ENCODE_BYTE_SIZE);
            }
            tailLength += tails[j].length;
        }
        return utils_1.concatArrays(...heads, ...tails);
    }
    decode(byteString) {
        const tupleTypes = this.childTypes;
        const dynamicSegments = [];
        const valuePartition = [];
        let i = 0;
        let iterIndex = 0;
        const buf = Buffer.from(byteString);
        while (i < tupleTypes.length) {
            const tupleType = tupleTypes[i];
            if (tupleType.isDynamic()) {
                if (byteString.slice(iterIndex, byteString.length).length <
                    exports.LENGTH_ENCODE_BYTE_SIZE) {
                    throw new Error('dynamic type in tuple is too short to be decoded');
                }
                const dynamicIndex = buf.readUIntBE(iterIndex, exports.LENGTH_ENCODE_BYTE_SIZE);
                if (dynamicSegments.length > 0) {
                    dynamicSegments[dynamicSegments.length - 1].right = dynamicIndex;
                    
                    if (dynamicIndex < dynamicSegments[dynamicSegments.length - 1].left) {
                        throw new Error('dynamic index segment miscalculation: left is greater than right index');
                    }
                }
                
                const seg = {
                    left: dynamicIndex,
                    right: -1,
                };
                dynamicSegments.push(seg);
                valuePartition.push(null);
                iterIndex += exports.LENGTH_ENCODE_BYTE_SIZE;
            }
            else {
                
                if (tupleType.constructor === ABIBoolType) {
                    const before = findBoolLR(this.childTypes, i, -1);
                    let after = findBoolLR(this.childTypes, i, 1);
                    if (before % 8 !== 0) {
                        throw new Error('expected before bool number mod 8 === 0');
                    }
                    after = Math.min(7, after);
                    
                    for (let boolIndex = 0; boolIndex <= after; boolIndex++) {
                        const boolMask = 0x80 >> boolIndex;
                        if ((byteString[iterIndex] & boolMask) > 0) {
                            valuePartition.push(new Uint8Array([128]));
                        }
                        else {
                            valuePartition.push(new Uint8Array([0]));
                        }
                    }
                    i += after;
                    iterIndex += 1;
                }
                else {
                    const currLen = tupleType.byteLen();
                    valuePartition.push(byteString.slice(iterIndex, iterIndex + currLen));
                    iterIndex += currLen;
                }
            }
            if (i !== tupleTypes.length - 1 && iterIndex >= byteString.length) {
                throw new Error('input byte not enough to decode');
            }
            i += 1;
        }
        if (dynamicSegments.length > 0) {
            dynamicSegments[dynamicSegments.length - 1].right = byteString.length;
            iterIndex = byteString.length;
        }
        if (iterIndex < byteString.length) {
            throw new Error('input byte not fully consumed');
        }
        
        
        for (let j = 0; j < dynamicSegments.length; j++) {
            const seg = dynamicSegments[j];
            if (seg.left > seg.right) {
                throw new Error('dynamic segment should display a [l, r] space with l <= r');
            }
            if (j !== dynamicSegments.length - 1 &&
                seg.right !== dynamicSegments[j + 1].left) {
                throw new Error('dynamic segment should be consecutive');
            }
        }
        
        let segIndex = 0;
        for (let j = 0; j < tupleTypes.length; j++) {
            if (tupleTypes[j].isDynamic()) {
                valuePartition[j] = byteString.slice(dynamicSegments[segIndex].left, dynamicSegments[segIndex].right);
                segIndex += 1;
            }
        }
        
        const returnValues = [];
        for (let j = 0; j < tupleTypes.length; j++) {
            const valueTi = tupleTypes[j].decode(valuePartition[j]);
            returnValues.push(valueTi);
        }
        return returnValues;
    }
    static parseTupleContent(str) {
        if (str.length === 0) {
            return [];
        }
        if (str.endsWith(',') || str.startsWith(',')) {
            throw new Error('tuple string should not start with comma');
        }
        if (str.includes(',,')) {
            throw new Error('tuple string should not have consecutive commas');
        }
        const tupleStrings = [];
        let depth = 0;
        let word = '';
        for (const char of str) {
            word += char;
            if (char === '(') {
                depth += 1;
            }
            else if (char === ')') {
                depth -= 1;
            }
            else if (char === ',') {
                
                if (depth === 0) {
                    tupleStrings.push(word.slice(0, word.length - 1));
                    word = '';
                }
            }
        }
        if (word.length !== 0) {
            tupleStrings.push(word);
        }
        if (depth !== 0) {
            throw new Error('tuple string has mismatched parentheses');
        }
        return tupleStrings;
    }
}
exports.ABITupleType = ABITupleType;

function compressMultipleBool(valueList) {
    let res = 0;
    if (valueList.length > 8) {
        throw new Error('value list passed in should be no greater than length 8');
    }
    for (let i = 0; i < valueList.length; i++) {
        const boolVal = valueList[i];
        if (typeof boolVal !== 'boolean') {
            throw new Error('non-boolean values cannot be compressed into a byte');
        }
        if (boolVal) {
            res |= 1 << (7 - i);
        }
    }
    return res;
}


function findBoolLR(typeList, index, delta) {
    let until = 0;
    while (true) {
        const curr = index + delta * until;
        if (typeList[curr].constructor === ABIBoolType) {
            if (curr !== typeList.length - 1 && delta === 1) {
                until += 1;
            }
            else if (curr > 0 && delta === -1) {
                until += 1;
            }
            else {
                break;
            }
        }
        else {
            until -= 1;
            break;
        }
    }
    return until;
}

}).call(this)}).call(this,require("buffer").Buffer)
},{"../encoding/address":58,"../encoding/bigint":59,"../utils/utils":88,"buffer":95}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ABIContract = void 0;
const method_1 = require("./method");
class ABIContract {
    constructor(params) {
        if (typeof params.name !== 'string' ||
            !Array.isArray(params.methods) ||
            (params.networks && typeof params.networks !== 'object')) {
            throw new Error('Invalid ABIContract parameters');
        }
        this.name = params.name;
        this.description = params.desc;
        this.networks = params.networks ? { ...params.networks } : {};
        this.methods = params.methods.map((method) => new method_1.ABIMethod(method));
    }
    toJSON() {
        return {
            name: this.name,
            desc: this.description,
            networks: this.networks,
            methods: this.methods.map((method) => method.toJSON()),
        };
    }
}
exports.ABIContract = ABIContract;

},{"./method":8}],6:[function(require,module,exports){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./abi_type"), exports);
__exportStar(require("./contract"), exports);
__exportStar(require("./interface"), exports);
__exportStar(require("./method"), exports);
__exportStar(require("./transaction"), exports);
__exportStar(require("./reference"), exports);

},{"./abi_type":4,"./contract":5,"./interface":7,"./method":8,"./reference":9,"./transaction":10}],7:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ABIInterface = void 0;
const method_1 = require("./method");
class ABIInterface {
    constructor(params) {
        if (typeof params.name !== 'string' || !Array.isArray(params.methods)) {
            throw new Error('Invalid ABIInterface parameters');
        }
        this.name = params.name;
        this.description = params.desc;
        this.methods = params.methods.map((method) => new method_1.ABIMethod(method));
    }
    toJSON() {
        return {
            name: this.name,
            desc: this.description,
            methods: this.methods.map((method) => method.toJSON()),
        };
    }
}
exports.ABIInterface = ABIInterface;

},{"./method":8}],8:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ABIMethod = void 0;
const naclWrappers_1 = require("../nacl/naclWrappers");
const abi_type_1 = require("./abi_type");
const transaction_1 = require("./transaction");
const reference_1 = require("./reference");
function parseMethodSignature(signature) {
    const argsStart = signature.indexOf('(');
    if (argsStart === -1) {
        throw new Error(`Invalid method signature: ${signature}`);
    }
    let argsEnd = -1;
    let depth = 0;
    for (let i = argsStart; i < signature.length; i++) {
        const char = signature[i];
        if (char === '(') {
            depth += 1;
        }
        else if (char === ')') {
            if (depth === 0) {
                
                break;
            }
            depth -= 1;
            if (depth === 0) {
                argsEnd = i;
                break;
            }
        }
    }
    if (argsEnd === -1) {
        throw new Error(`Invalid method signature: ${signature}`);
    }
    return {
        name: signature.slice(0, argsStart),
        args: abi_type_1.ABITupleType.parseTupleContent(signature.slice(argsStart + 1, argsEnd)),
        returns: signature.slice(argsEnd + 1),
    };
}
class ABIMethod {
    constructor(params) {
        if (typeof params.name !== 'string' ||
            typeof params.returns !== 'object' ||
            !Array.isArray(params.args)) {
            throw new Error('Invalid ABIMethod parameters');
        }
        this.name = params.name;
        this.description = params.desc;
        this.args = params.args.map(({ type, name, desc }) => {
            if (transaction_1.abiTypeIsTransaction(type) || reference_1.abiTypeIsReference(type)) {
                return {
                    type,
                    name,
                    description: desc,
                };
            }
            return {
                type: abi_type_1.ABIType.from(type),
                name,
                description: desc,
            };
        });
        this.returns = {
            type: params.returns.type === 'void'
                ? params.returns.type
                : abi_type_1.ABIType.from(params.returns.type),
            description: params.returns.desc,
        };
    }
    getSignature() {
        const args = this.args.map((arg) => arg.type.toString()).join(',');
        const returns = this.returns.type.toString();
        return `${this.name}(${args})${returns}`;
    }
    getSelector() {
        const hash = naclWrappers_1.genericHash(this.getSignature());
        return new Uint8Array(hash.slice(0, 4));
    }
    txnCount() {
        let count = 1;
        for (const arg of this.args) {
            if (typeof arg.type === 'string' && transaction_1.abiTypeIsTransaction(arg.type)) {
                count += 1;
            }
        }
        return count;
    }
    toJSON() {
        return {
            name: this.name,
            desc: this.description,
            args: this.args.map(({ type, name, description }) => ({
                type: type.toString(),
                name,
                desc: description,
            })),
            returns: {
                type: this.returns.type.toString(),
                desc: this.returns.description,
            },
        };
    }
    static fromSignature(signature) {
        const { name, args, returns } = parseMethodSignature(signature);
        return new ABIMethod({
            name,
            args: args.map((arg) => ({ type: arg })),
            returns: { type: returns },
        });
    }
}
exports.ABIMethod = ABIMethod;

},{"../nacl/naclWrappers":78,"./abi_type":4,"./reference":9,"./transaction":10}],9:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.abiTypeIsReference = exports.ABIReferenceType = void 0;
var ABIReferenceType;
(function (ABIReferenceType) {
        ABIReferenceType["account"] = "account";
        ABIReferenceType["application"] = "application";
        ABIReferenceType["asset"] = "asset";
})(ABIReferenceType = exports.ABIReferenceType || (exports.ABIReferenceType = {}));
function abiTypeIsReference(type) {
    return (type === ABIReferenceType.account ||
        type === ABIReferenceType.application ||
        type === ABIReferenceType.asset);
}
exports.abiTypeIsReference = abiTypeIsReference;

},{}],10:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.abiCheckTransactionType = exports.abiTypeIsTransaction = exports.ABITransactionType = void 0;
var ABITransactionType;
(function (ABITransactionType) {
        ABITransactionType["any"] = "txn";
        ABITransactionType["pay"] = "pay";
        ABITransactionType["keyreg"] = "keyreg";
        ABITransactionType["acfg"] = "acfg";
        ABITransactionType["axfer"] = "axfer";
        ABITransactionType["afrz"] = "afrz";
        ABITransactionType["appl"] = "appl";
})(ABITransactionType = exports.ABITransactionType || (exports.ABITransactionType = {}));
function abiTypeIsTransaction(type) {
    return (type === ABITransactionType.any ||
        type === ABITransactionType.pay ||
        type === ABITransactionType.keyreg ||
        type === ABITransactionType.acfg ||
        type === ABITransactionType.axfer ||
        type === ABITransactionType.afrz ||
        type === ABITransactionType.appl);
}
exports.abiTypeIsTransaction = abiTypeIsTransaction;
function abiCheckTransactionType(type, txn) {
    if (type === ABITransactionType.any) {
        return true;
    }
    return txn.type && txn.type.toString() === type.toString();
}
exports.abiCheckTransactionType = abiCheckTransactionType;

},{}],11:[function(require,module,exports){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const nacl = __importStar(require("./nacl/naclWrappers"));
const address = __importStar(require("./encoding/address"));
function generateAccount() {
    const keys = nacl.keyPair();
    const encodedPk = address.encodeAddress(keys.publicKey);
    return { addr: encodedPk, sk: keys.secretKey };
}
exports.default = generateAccount;

},{"./encoding/address":58,"./nacl/naclWrappers":78}],12:[function(require,module,exports){
(function (Buffer){(function (){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const address = __importStar(require("./encoding/address"));
const encoding = __importStar(require("./encoding/encoding"));
const nacl = __importStar(require("./nacl/naclWrappers"));
const utils = __importStar(require("./utils/utils"));
class Bid {
    constructor({ bidderKey, bidAmount, bidID, auctionKey, auctionID, maxPrice, }) {
        this.name = 'Bid';
        this.tag = Buffer.from([97, 66]); 
        const decodedBidderKey = address.decodeAddress(bidderKey);
        const decodedAuctionKey = address.decodeAddress(auctionKey);
        if (!Number.isSafeInteger(bidAmount) || bidAmount < 0)
            throw Error('Bid amount must be positive and 2^53-1');
        if (!Number.isSafeInteger(bidID) || bidID < 0)
            throw Error('BidID must be positive and 2^53-1');
        if (!Number.isSafeInteger(auctionID) || auctionID < 0)
            throw Error('auctionID must be positive');
        Object.assign(this, {
            bidderKey: decodedBidderKey,
            bidAmount,
            bidID,
            auctionKey: decodedAuctionKey,
            auctionID,
            maxPrice,
        });
    }
    
    get_obj_for_encoding() {
        return {
            bidder: Buffer.from(this.bidderKey.publicKey),
            cur: this.bidAmount,
            price: this.maxPrice,
            id: this.bidID,
            auc: Buffer.from(this.auctionKey.publicKey),
            aid: this.auctionID,
        };
    }
    signBid(sk) {
        const encodedMsg = encoding.encode(this.get_obj_for_encoding());
        const toBeSigned = Buffer.from(utils.concatArrays(this.tag, encodedMsg));
        const sig = nacl.sign(toBeSigned, sk);
        
        const sBid = {
            sig: Buffer.from(sig),
            bid: this.get_obj_for_encoding(),
        };
        const note = {
            t: 'b',
            b: sBid,
        };
        return new Uint8Array(encoding.encode(note));
    }
}
exports.default = Bid;

}).call(this)}).call(this,require("buffer").Buffer)
},{"./encoding/address":58,"./encoding/encoding":60,"./nacl/naclWrappers":78,"./utils/utils":88,"buffer":95}],13:[function(require,module,exports){
(function (Buffer){(function (){
const { default: HTTPClient } = require('./client');
const { setSendTransactionHeaders } = require('./v2/algod/sendRawTransaction');
function Algod(token = '', baseServer = 'http://r2.algorand.network', port = 4180, headers = {}) {
    
    let tokenHeader = token;
    if (typeof tokenHeader === 'string') {
        tokenHeader = { 'X-Algo-API-Token': tokenHeader };
    }
    
    const c = new HTTPClient(tokenHeader, baseServer, port, headers);
        function noteb64ToNote(o) {
        if (!(o.noteb64 === undefined || o.noteb64 === null)) {
            
            o.note = Buffer.from(o.noteb64, 'base64');
        }
        return o;
    }
        this.status = async (headerObj = {}) => {
        const res = await c.get('/v1/status', {}, headerObj);
        return res.body;
    };
        this.healthCheck = async (headerObj = {}) => {
        const res = await c.get('/health', {}, headerObj);
        if (!res.ok) {
            throw new Error(`Health response: ${res.status}`);
        }
        return {};
    };
        this.statusAfterBlock = async (roundNumber, headerObj = {}) => {
        if (!Number.isInteger(roundNumber))
            throw Error('roundNumber should be an integer');
        const res = await c.get(`/v1/status/wait-for-block-after/${roundNumber}`, {}, headerObj);
        return res.body;
    };
        this.pendingTransactions = async (maxTxns, headerObj = {}) => {
        if (!Number.isInteger(maxTxns))
            throw Error('maxTxns should be an integer');
        const res = await c.get('/v1/transactions/pending', { max: maxTxns }, headerObj);
        if (res.statusCode === 200 &&
            res.body.truncatedTxns.transactions !== undefined) {
            for (let i = 0; i < res.body.truncatedTxns.transactions.length; i++) {
                res.body.truncatedTxns.transactions[i] = noteb64ToNote(res.body.truncatedTxns.transactions[i]);
            }
        }
        return res.body;
    };
        this.versions = async (headerObj = {}) => {
        const res = await c.get('/versions', {}, headerObj);
        return res.body;
    };
        this.ledgerSupply = async (headerObj = {}) => {
        const res = await c.get('/v1/ledger/supply', {}, headerObj);
        return res.body;
    };
        this.transactionByAddress = async (addr, first = null, last = null, maxTxns = null, headerObj = {}) => {
        if (first !== null && !Number.isInteger(first)) {
            throw Error('first round should be an integer');
        }
        if (last !== null && !Number.isInteger(last)) {
            throw Error('last round should be an integer');
        }
        const res = await c.get(`/v1/account/${addr}/transactions`, { firstRound: first, lastRound: last, max: maxTxns }, headerObj);
        if (res.statusCode === 200 && res.body.transactions !== undefined) {
            for (let i = 0; i < res.body.transactions.length; i++) {
                res.body.transactions[i] = noteb64ToNote(res.body.transactions[i]);
            }
        }
        return res.body;
    };
        this.transactionByAddressAndDate = async (addr, fromDate, toDate, maxTxns = null, headerObj = {}) => {
        const res = await c.get(`/v1/account/${addr}/transactions`, { fromDate, toDate, max: maxTxns }, headerObj);
        if (res.statusCode === 200 && res.body.transactions !== undefined) {
            for (let i = 0; i < res.body.transactions.length; i++) {
                res.body.transactions[i] = noteb64ToNote(res.body.transactions[i]);
            }
        }
        return res.body;
    };
        this.transactionById = async (txid, headerObj = {}) => {
        const res = await c.get(`/v1/transaction/${txid}`, {}, headerObj);
        if (res.statusCode === 200) {
            res.body = noteb64ToNote(res.body);
        }
        return res.body;
    };
        this.transactionInformation = async (addr, txid, headerObj = {}) => {
        const res = await c.get(`/v1/account/${addr}/transaction/${txid}`, {}, headerObj);
        if (res.statusCode === 200) {
            res.body = noteb64ToNote(res.body);
        }
        return res.body;
    };
        this.pendingTransactionInformation = async (txid, headerObj = {}) => {
        const res = await c.get(`/v1/transactions/pending/${txid}`, {}, headerObj);
        if (res.statusCode === 200) {
            res.body = noteb64ToNote(res.body);
        }
        return res.body;
    };
        this.accountInformation = async (addr, headerObj = {}) => {
        const res = await c.get(`/v1/account/${addr}`, {}, headerObj);
        return res.body;
    };
        this.assetInformation = async (index, headerObj = {}) => {
        const res = await c.get(`/v1/asset/${index}`, {}, headerObj);
        return res.body;
    };
        this.suggestedFee = async (headerObj = {}) => {
        const res = await c.get('/v1/transactions/fee', {}, headerObj);
        return res.body;
    };
        this.sendRawTransaction = async (txn, headerObj = {}) => {
        const txHeaders = setSendTransactionHeaders(headerObj);
        const res = await c.post('/v1/transactions', Buffer.from(txn), txHeaders);
        return res.body;
    };
        this.sendRawTransactions = async (txns, headerObj = {}) => {
        const txHeaders = setSendTransactionHeaders(headerObj);
        const merged = Array.prototype.concat(...txns.map((arr) => Array.from(arr)));
        const res = await c.post('/v1/transactions', Buffer.from(merged), txHeaders);
        return res.body;
    };
        this.getTransactionParams = async (headerObj = {}) => {
        const res = await c.get('/v1/transactions/params', {}, headerObj);
        return res.body;
    };
        this.suggestParams = async (headerObj = {}) => {
        const result = await this.getTransactionParams(headerObj);
        return {
            flatFee: false,
            fee: result.fee,
            firstRound: result.lastRound,
            lastRound: result.lastRound + 1000,
            genesisID: result.genesisID,
            genesisHash: result.genesishashb64,
        };
    };
        this.block = async (roundNumber, headerObj = {}) => {
        if (!Number.isInteger(roundNumber))
            throw Error('roundNumber should be an integer');
        const res = await c.get(`/v1/block/${roundNumber}`, {}, headerObj);
        if (res.statusCode === 200 && res.body.txns.transactions !== undefined) {
            for (let i = 0; i < res.body.txns.transactions.length; i++) {
                res.body.txns.transactions[i] = noteb64ToNote(res.body.txns.transactions[i]);
            }
        }
        return res.body;
    };
}
module.exports = { Algod };

}).call(this)}).call(this,require("buffer").Buffer)
},{"./client":14,"./v2/algod/sendRawTransaction":32,"buffer":95}],14:[function(require,module,exports){
(function (Buffer){(function (){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils = __importStar(require("../utils/utils"));
const urlTokenBaseHTTPClient_1 = require("./urlTokenBaseHTTPClient");
function removeFalsyOrEmpty(obj) {
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            
            if (!obj[key] || obj[key].length === 0)
                delete obj[key];
        }
    }
    return obj;
}
function tolowerCaseKeys(o) {
        return Object.keys(o).reduce((c, k) => ((c[k.toLowerCase()] = o[k]), c), {});
    }
function getAcceptFormat(query) {
    if (query !== undefined &&
        Object.prototype.hasOwnProperty.call(query, 'format')) {
        switch (query.format) {
            case 'msgpack':
                return 'application/msgpack';
            case 'json':
            default:
                return 'application/json';
        }
    }
    else
        return 'application/json';
}
class HTTPClient {
    constructor(bcOrTokenHeader, baseServer, port, defaultHeaders = {}) {
        if (baseServer !== undefined) {
            this.bc = new urlTokenBaseHTTPClient_1.URLTokenBaseHTTPClient(bcOrTokenHeader, baseServer, port, defaultHeaders);
        }
        else {
            this.bc = bcOrTokenHeader;
        }
    }
        static parseJSON(text, status, jsonOptions = {}) {
        try {
            if (Object.keys(jsonOptions).length === 0) {
                return text && JSON.parse(text);
            }
            return text && utils.parseJSON(text, jsonOptions);
        }
        catch (err_) {
            const err = err_;
            
            err.rawResponse = text || null;
            
            err.statusCode = status;
            throw err;
        }
    }
        static serializeData(data, requestHeaders) {
        if (!data) {
            return new Uint8Array(0); 
        }
        if (requestHeaders['content-type'] === 'application/json') {
            return new Uint8Array(Buffer.from(JSON.stringify(data)));
        }
        if (typeof data === 'string') {
            return new Uint8Array(Buffer.from(data));
        }
        if (data instanceof Uint8Array) {
            return data;
        }
        throw new Error('provided data is neither a string nor a Uint8Array and content-type is not application/json');
    }
        static prepareResponse(res, format, jsonOptions = {}) {
        let { body } = res;
        let text;
        if (format !== 'application/msgpack') {
            text = (body && Buffer.from(body).toString()) || '';
        }
        if (format === 'application/json') {
            body = HTTPClient.parseJSON(text, res.status, jsonOptions);
        }
        return {
            ...res,
            body,
            text,
            ok: Math.trunc(res.status / 100) === 2,
        };
    }
        static prepareResponseError(err) {
        if (err.response) {
            
            err.response = HTTPClient.prepareResponse(err.response, 'application/json');
            
            err.status = err.response.status;
        }
        return err;
    }
        async get(relativePath, query, requestHeaders = {}, jsonOptions = {}) {
        const format = getAcceptFormat(query);
        const fullHeaders = { ...requestHeaders, accept: format };
        try {
            const res = await this.bc.get(relativePath, removeFalsyOrEmpty(query), fullHeaders);
            return HTTPClient.prepareResponse(res, format, jsonOptions);
        }
        catch (err) {
            throw HTTPClient.prepareResponseError(err);
        }
    }
        async post(relativePath, data, requestHeaders = {}) {
        const fullHeaders = {
            'content-type': 'application/json',
            ...tolowerCaseKeys(requestHeaders),
        };
        try {
            const res = await this.bc.post(relativePath, HTTPClient.serializeData(data, fullHeaders), undefined, fullHeaders);
            return HTTPClient.prepareResponse(res, 'application/json');
        }
        catch (err) {
            throw HTTPClient.prepareResponseError(err);
        }
    }
        async delete(relativePath, data, requestHeaders = {}) {
        const fullHeaders = {
            'content-type': 'application/json',
            ...tolowerCaseKeys(requestHeaders),
        };
        const res = await this.bc.delete(relativePath, HTTPClient.serializeData(data, fullHeaders), undefined, fullHeaders);
        return HTTPClient.prepareResponse(res, 'application/json');
    }
}
exports.default = HTTPClient;

}).call(this)}).call(this,require("buffer").Buffer)
},{"../utils/utils":88,"./urlTokenBaseHTTPClient":16,"buffer":95}],15:[function(require,module,exports){
(function (Buffer){(function (){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const serviceClient_1 = __importDefault(require("./v2/serviceClient"));
const txn = __importStar(require("../transaction"));
class Kmd extends serviceClient_1.default {
    constructor(token, baseServer = 'http://127.0.0.1', port = 7833, headers = {}) {
        super('X-KMD-API-Token', token, baseServer, port, headers);
    }
        async versions() {
        const res = await this.c.get('/versions');
        return res.body;
    }
        async listWallets() {
        const res = await this.c.get('/v1/wallets');
        return res.body;
    }
        async createWallet(walletName, walletPassword, walletMDK = '', walletDriverName = 'sqlite') {
        const req = {
            wallet_name: walletName,
            wallet_driver_name: walletDriverName,
            wallet_password: walletPassword,
            master_derivation_key: Buffer.from(walletMDK).toString('base64'),
        };
        const res = await this.c.post('/v1/wallet', req);
        return res.body;
    }
        async initWalletHandle(walletID, walletPassword) {
        const req = {
            wallet_id: walletID,
            wallet_password: walletPassword,
        };
        const res = await this.c.post('/v1/wallet/init', req);
        return res.body;
    }
        async releaseWalletHandle(walletHandle) {
        const req = {
            wallet_handle_token: walletHandle,
        };
        const res = await this.c.post('/v1/wallet/release', req);
        return res.body;
    }
        async renewWalletHandle(walletHandle) {
        const req = {
            wallet_handle_token: walletHandle,
        };
        const res = await this.c.post('/v1/wallet/renew', req);
        return res.body;
    }
        async renameWallet(walletID, walletPassword, newWalletName) {
        const req = {
            wallet_id: walletID,
            wallet_password: walletPassword,
            wallet_name: newWalletName,
        };
        const res = await this.c.post('/v1/wallet/rename', req);
        return res.body;
    }
        async getWallet(walletHandle) {
        const req = {
            wallet_handle_token: walletHandle,
        };
        const res = await this.c.post('/v1/wallet/info', req);
        return res.body;
    }
        async exportMasterDerivationKey(walletHandle, walletPassword) {
        const req = {
            wallet_handle_token: walletHandle,
            wallet_password: walletPassword,
        };
        const res = await this.c.post('/v1/master-key/export', req);
        return {
            master_derivation_key: Buffer.from(res.body.master_derivation_key, 'base64'),
        };
    }
        async importKey(walletHandle, secretKey) {
        const req = {
            wallet_handle_token: walletHandle,
            private_key: Buffer.from(secretKey).toString('base64'),
        };
        const res = await this.c.post('/v1/key/import', req);
        return res.body;
    }
        async exportKey(walletHandle, walletPassword, addr) {
        const req = {
            wallet_handle_token: walletHandle,
            address: addr,
            wallet_password: walletPassword,
        };
        const res = await this.c.post('/v1/key/export', req);
        return { private_key: Buffer.from(res.body.private_key, 'base64') };
    }
        async generateKey(walletHandle) {
        const req = {
            wallet_handle_token: walletHandle,
            display_mnemonic: false,
        };
        const res = await this.c.post('/v1/key', req);
        return res.body;
    }
        async deleteKey(walletHandle, walletPassword, addr) {
        const req = {
            wallet_handle_token: walletHandle,
            address: addr,
            wallet_password: walletPassword,
        };
        const res = await this.c.delete('/v1/key', req);
        return res.body;
    }
        async listKeys(walletHandle) {
        const req = {
            wallet_handle_token: walletHandle,
        };
        const res = await this.c.post('/v1/key/list', req);
        return res.body;
    }
        async signTransaction(walletHandle, walletPassword, transaction) {
        const tx = txn.instantiateTxnIfNeeded(transaction);
        const req = {
            wallet_handle_token: walletHandle,
            wallet_password: walletPassword,
            transaction: Buffer.from(tx.toByte()).toString('base64'),
        };
        const res = await this.c.post('/v1/transaction/sign', req);
        if (res.status === 200) {
            return Buffer.from(res.body.signed_transaction, 'base64');
        }
        return res.body;
    }
        async signTransactionWithSpecificPublicKey(walletHandle, walletPassword, transaction, publicKey) {
        const tx = txn.instantiateTxnIfNeeded(transaction);
        const req = {
            wallet_handle_token: walletHandle,
            wallet_password: walletPassword,
            transaction: Buffer.from(tx.toByte()).toString('base64'),
            public_key: Buffer.from(publicKey).toString('base64'),
        };
        const res = await this.c.post('/v1/transaction/sign', req);
        if (res.status === 200) {
            return Buffer.from(res.body.signed_transaction, 'base64');
        }
        return res.body;
    }
        async listMultisig(walletHandle) {
        const req = {
            wallet_handle_token: walletHandle,
        };
        const res = await this.c.post('/v1/multisig/list', req);
        return res.body;
    }
        async importMultisig(walletHandle, version, threshold, pks) {
        const req = {
            wallet_handle_token: walletHandle,
            multisig_version: version,
            threshold,
            pks,
        };
        const res = await this.c.post('/v1/multisig/import', req);
        return res.body;
    }
        async exportMultisig(walletHandle, addr) {
        const req = {
            wallet_handle_token: walletHandle,
            address: addr,
        };
        const res = await this.c.post('/v1/multisig/export', req);
        return res.body;
    }
        async signMultisigTransaction(walletHandle, pw, transaction, pk, partial) {
        const tx = txn.instantiateTxnIfNeeded(transaction);
        const req = {
            wallet_handle_token: walletHandle,
            transaction: Buffer.from(tx.toByte()).toString('base64'),
            public_key: Buffer.from(pk).toString('base64'),
            partial_multisig: partial,
            wallet_password: pw,
        };
        const res = await this.c.post('/v1/multisig/sign', req);
        return res.body;
    }
        async deleteMultisig(walletHandle, walletPassword, addr) {
        const req = {
            wallet_handle_token: walletHandle,
            address: addr,
            wallet_password: walletPassword,
        };
        const res = await this.c.delete('/v1/multisig', req);
        return res.body;
    }
}
exports.default = Kmd;

}).call(this)}).call(this,require("buffer").Buffer)
},{"../transaction":80,"./v2/serviceClient":54,"buffer":95}],16:[function(require,module,exports){
(function (Buffer){(function (){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.URLTokenBaseHTTPClient = void 0;
const url_parse_1 = __importDefault(require("url-parse"));
const path_1 = __importDefault(require("path"));
const request = __importStar(require("superagent"));
class URLTokenBaseHTTPClient {
    constructor(tokenHeader, baseServer, port, defaultHeaders = {}) {
        this.defaultHeaders = defaultHeaders;
        const baseServerURL = new url_parse_1.default(baseServer, {});
        if (typeof port !== 'undefined') {
            baseServerURL.set('port', port.toString());
        }
        if (baseServerURL.protocol.length === 0) {
            throw new Error('Invalid base server URL, protocol must be defined.');
        }
        this.baseURL = baseServerURL;
        this.tokenHeader = tokenHeader;
    }
        addressWithPath(relativePath) {
        const address = new url_parse_1.default(path_1.default.posix.join(this.baseURL.pathname, relativePath), this.baseURL);
        return address.toString();
    }
        static superagentToHTTPClientResponse(res) {
        if (res.body instanceof ArrayBuffer) {
            
            res.body = new Uint8Array(res.body);
        }
        return res;
    }
        static formatSuperagentError(err) {
        if (err.response) {
            try {
                const decoded = JSON.parse(Buffer.from(err.response.body).toString());
                
                err.message = `Network request error. Received status ${err.response.status}: ${decoded.message}`;
            }
            catch (err2) {
                
            }
        }
        return err;
    }
    async get(relativePath, query, requestHeaders = {}) {
        const r = request
            .get(this.addressWithPath(relativePath))
            .set(this.tokenHeader)
            .set(this.defaultHeaders)
            .set(requestHeaders)
            .responseType('arraybuffer')
            .query(query);
        try {
            const res = await r;
            return URLTokenBaseHTTPClient.superagentToHTTPClientResponse(res);
        }
        catch (err) {
            throw URLTokenBaseHTTPClient.formatSuperagentError(err);
        }
    }
    async post(relativePath, data, query, requestHeaders = {}) {
        const r = request
            .post(this.addressWithPath(relativePath))
            .set(this.tokenHeader)
            .set(this.defaultHeaders)
            .set(requestHeaders)
            .query(query)
            .serialize((o) => o) 
            .responseType('arraybuffer')
            .send(Buffer.from(data)); 
        try {
            const res = await r;
            return URLTokenBaseHTTPClient.superagentToHTTPClientResponse(res);
        }
        catch (err) {
            throw URLTokenBaseHTTPClient.formatSuperagentError(err);
        }
    }
    async delete(relativePath, data, query, requestHeaders = {}) {
        const r = request
            .delete(this.addressWithPath(relativePath))
            .set(this.tokenHeader)
            .set(this.defaultHeaders)
            .set(requestHeaders)
            .query(query)
            .serialize((o) => o) 
            .responseType('arraybuffer')
            .send(Buffer.from(data)); 
        try {
            const res = await r;
            return URLTokenBaseHTTPClient.superagentToHTTPClientResponse(res);
        }
        catch (err) {
            throw URLTokenBaseHTTPClient.formatSuperagentError(err);
        }
    }
}
exports.URLTokenBaseHTTPClient = URLTokenBaseHTTPClient;

}).call(this)}).call(this,require("buffer").Buffer)
},{"buffer":95,"path":114,"superagent":125,"url-parse":131}],17:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonrequest_1 = __importDefault(require("../jsonrequest"));
class AccountInformation extends jsonrequest_1.default {
    constructor(c, intDecoding, account) {
        super(c, intDecoding);
        this.account = account;
        this.account = account;
    }
    path() {
        return `/v2/accounts/${this.account}`;
    }
}
exports.default = AccountInformation;

},{"../jsonrequest":53}],18:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const serviceClient_1 = __importDefault(require("../serviceClient"));
const accountInformation_1 = __importDefault(require("./accountInformation"));
const block_1 = __importDefault(require("./block"));
const compile_1 = __importDefault(require("./compile"));
const dryrun_1 = __importDefault(require("./dryrun"));
const getAssetByID_1 = __importDefault(require("./getAssetByID"));
const getApplicationByID_1 = __importDefault(require("./getApplicationByID"));
const healthCheck_1 = __importDefault(require("./healthCheck"));
const pendingTransactionInformation_1 = __importDefault(require("./pendingTransactionInformation"));
const pendingTransactions_1 = __importDefault(require("./pendingTransactions"));
const pendingTransactionsByAddress_1 = __importDefault(require("./pendingTransactionsByAddress"));
const sendRawTransaction_1 = __importDefault(require("./sendRawTransaction"));
const status_1 = __importDefault(require("./status"));
const statusAfterBlock_1 = __importDefault(require("./statusAfterBlock"));
const suggestedParams_1 = __importDefault(require("./suggestedParams"));
const supply_1 = __importDefault(require("./supply"));
const versions_1 = __importDefault(require("./versions"));
const genesis_1 = __importDefault(require("./genesis"));
const proof_1 = __importDefault(require("./proof"));
class AlgodClient extends serviceClient_1.default {
        constructor(tokenOrBaseClient, baseServer = 'http://r2.algorand.network', port = 4180, headers = {}) {
        super('X-Algo-API-Token', tokenOrBaseClient, baseServer, port, headers);
    }
        healthCheck() {
        return new healthCheck_1.default(this.c);
    }
        versionsCheck() {
        return new versions_1.default(this.c);
    }
        sendRawTransaction(stxOrStxs) {
        return new sendRawTransaction_1.default(this.c, stxOrStxs);
    }
        accountInformation(account) {
        return new accountInformation_1.default(this.c, this.intDecoding, account);
    }
        block(roundNumber) {
        return new block_1.default(this.c, roundNumber);
    }
        pendingTransactionInformation(txid) {
        return new pendingTransactionInformation_1.default(this.c, txid);
    }
        pendingTransactionsInformation() {
        return new pendingTransactions_1.default(this.c);
    }
        pendingTransactionByAddress(address) {
        return new pendingTransactionsByAddress_1.default(this.c, address);
    }
        status() {
        return new status_1.default(this.c, this.intDecoding);
    }
        statusAfterBlock(round) {
        return new statusAfterBlock_1.default(this.c, this.intDecoding, round);
    }
        getTransactionParams() {
        return new suggestedParams_1.default(this.c);
    }
        supply() {
        return new supply_1.default(this.c, this.intDecoding);
    }
        compile(source) {
        return new compile_1.default(this.c, source);
    }
        dryrun(dr) {
        return new dryrun_1.default(this.c, dr);
    }
        getAssetByID(index) {
        return new getAssetByID_1.default(this.c, this.intDecoding, index);
    }
        getApplicationByID(index) {
        return new getApplicationByID_1.default(this.c, this.intDecoding, index);
    }
        genesis() {
        return new genesis_1.default(this.c, this.intDecoding);
    }
        getProof(round, txID) {
        return new proof_1.default(this.c, this.intDecoding, round, txID);
    }
}
exports.default = AlgodClient;

},{"../serviceClient":54,"./accountInformation":17,"./block":19,"./compile":20,"./dryrun":21,"./genesis":22,"./getApplicationByID":23,"./getAssetByID":24,"./healthCheck":25,"./pendingTransactionInformation":28,"./pendingTransactions":29,"./pendingTransactionsByAddress":30,"./proof":31,"./sendRawTransaction":32,"./status":33,"./statusAfterBlock":34,"./suggestedParams":35,"./supply":36,"./versions":37}],19:[function(require,module,exports){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const encoding = __importStar(require("../../../encoding/encoding"));
const jsonrequest_1 = __importDefault(require("../jsonrequest"));
class Block extends jsonrequest_1.default {
    constructor(c, roundNumber) {
        super(c);
        if (!Number.isInteger(roundNumber))
            throw Error('roundNumber should be an integer');
        this.round = roundNumber;
        this.query = { format: 'msgpack' };
    }
    path() {
        return `/v2/blocks/${this.round}`;
    }
    
    prepare(body) {
        if (body && body.byteLength > 0) {
            return encoding.decode(body);
        }
        return undefined;
    }
}
exports.default = Block;

},{"../../../encoding/encoding":60,"../jsonrequest":53}],20:[function(require,module,exports){
(function (Buffer){(function (){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setHeaders = void 0;
const jsonrequest_1 = __importDefault(require("../jsonrequest"));
function setHeaders(headers = {}) {
    let hdrs = headers;
    if (Object.keys(hdrs).every((key) => key.toLowerCase() !== 'content-type')) {
        hdrs = { ...headers };
        hdrs['Content-Type'] = 'text/plain';
    }
    return hdrs;
}
exports.setHeaders = setHeaders;
class Compile extends jsonrequest_1.default {
    constructor(c, source) {
        super(c);
        this.source = source;
        this.source = source;
    }
    
    path() {
        return `/v2/teal/compile`;
    }
        async do(headers = {}) {
        const txHeaders = setHeaders(headers);
        const res = await this.c.post(this.path(), Buffer.from(this.source), txHeaders);
        return res.body;
    }
}
exports.default = Compile;

}).call(this)}).call(this,require("buffer").Buffer)
},{"../jsonrequest":53,"buffer":95}],21:[function(require,module,exports){
(function (Buffer){(function (){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonrequest_1 = __importDefault(require("../jsonrequest"));
const encoding = __importStar(require("../../../encoding/encoding"));
const compile_1 = require("./compile");
class Dryrun extends jsonrequest_1.default {
    constructor(c, dr) {
        super(c);
        this.blob = encoding.encode(dr.get_obj_for_encoding(true));
    }
    
    path() {
        return '/v2/teal/dryrun';
    }
        async do(headers = {}) {
        const txHeaders = compile_1.setHeaders(headers);
        const res = await this.c.post(this.path(), Buffer.from(this.blob), txHeaders);
        return res.body;
    }
}
exports.default = Dryrun;

}).call(this)}).call(this,require("buffer").Buffer)
},{"../../../encoding/encoding":60,"../jsonrequest":53,"./compile":20,"buffer":95}],22:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonrequest_1 = __importDefault(require("../jsonrequest"));
class Genesis extends jsonrequest_1.default {
    
    path() {
        return '/genesis';
    }
}
exports.default = Genesis;

},{"../jsonrequest":53}],23:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonrequest_1 = __importDefault(require("../jsonrequest"));
class GetApplicationByID extends jsonrequest_1.default {
    constructor(c, intDecoding, index) {
        super(c, intDecoding);
        this.index = index;
        this.index = index;
    }
    path() {
        return `/v2/applications/${this.index}`;
    }
}
exports.default = GetApplicationByID;

},{"../jsonrequest":53}],24:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonrequest_1 = __importDefault(require("../jsonrequest"));
class GetAssetByID extends jsonrequest_1.default {
    constructor(c, intDecoding, index) {
        super(c, intDecoding);
        this.index = index;
        this.index = index;
    }
    path() {
        return `/v2/assets/${this.index}`;
    }
}
exports.default = GetAssetByID;

},{"../jsonrequest":53}],25:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonrequest_1 = __importDefault(require("../jsonrequest"));
class HealthCheck extends jsonrequest_1.default {
    
    path() {
        return '/health';
    }
    async do(headers = {}) {
        const res = await this.c.get(this.path(), {}, headers);
        if (!res.ok) {
            throw new Error(`Health response: ${res.status}`);
        }
        return {};
    }
}
exports.default = HealthCheck;

},{"../jsonrequest":53}],26:[function(require,module,exports){
(function (Buffer){(function (){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function _is_primitive(val) {
        return (val === undefined ||
        val == null ||
        (typeof val !== 'object' && typeof val !== 'function'));
}
function _get_obj_for_encoding(val, binary) {
        let targetPropValue;
    if (val instanceof Uint8Array) {
        targetPropValue = binary ? val : Buffer.from(val).toString('base64');
    }
    else if (typeof val.get_obj_for_encoding === 'function') {
        targetPropValue = val.get_obj_for_encoding(binary);
    }
    else if (Array.isArray(val)) {
        targetPropValue = [];
        for (const elem of val) {
            targetPropValue.push(_get_obj_for_encoding(elem, binary));
        }
    }
    else if (typeof val === 'object') {
        const obj = {};
        for (const prop of Object.keys(val)) {
            obj[prop] = _get_obj_for_encoding(val[prop], binary);
        }
        targetPropValue = obj;
    }
    else if (_is_primitive(val)) {
        targetPropValue = val;
    }
    else {
        throw new Error(`Unsupported value: ${String(val)}`);
    }
    return targetPropValue;
}
class BaseModel {
        get_obj_for_encoding(binary = false) {
                const obj = {};
        for (const prop of Object.keys(this.attribute_map)) {
            const name = this.attribute_map[prop];
            const value = this[prop];
            if (typeof value !== 'undefined') {
                obj[name] =
                    value === null ? null : _get_obj_for_encoding(value, binary);
            }
        }
        return obj;
    }
}
exports.default = BaseModel;

}).call(this)}).call(this,require("buffer").Buffer)
},{"buffer":95}],27:[function(require,module,exports){
(function (Buffer){(function (){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Version = exports.TransactionParametersResponse = exports.TealValue = exports.TealKeyValue = exports.SupplyResponse = exports.ProofResponse = exports.PostTransactionsResponse = exports.PendingTransactionsResponse = exports.PendingTransactionResponse = exports.NodeStatusResponse = exports.EvalDeltaKeyValue = exports.EvalDelta = exports.ErrorResponse = exports.DryrunTxnResult = exports.DryrunState = exports.DryrunSource = exports.DryrunResponse = exports.DryrunRequest = exports.CompileResponse = exports.CatchpointStartResponse = exports.CatchpointAbortResponse = exports.BuildVersion = exports.BlockResponse = exports.AssetParams = exports.AssetHolding = exports.Asset = exports.ApplicationStateSchema = exports.ApplicationParams = exports.ApplicationLocalState = exports.Application = exports.AccountStateDelta = exports.AccountParticipation = exports.Account = void 0;
const base_1 = __importDefault(require("./base"));
class Account extends base_1.default {
        constructor({ address, amount, amountWithoutPendingRewards, minBalance, pendingRewards, rewards, round, status, appsLocalState, appsTotalExtraPages, appsTotalSchema, assets, authAddr, createdApps, createdAssets, participation, rewardBase, sigType, }) {
        super();
        this.address = address;
        this.amount = amount;
        this.amountWithoutPendingRewards = amountWithoutPendingRewards;
        this.minBalance = minBalance;
        this.pendingRewards = pendingRewards;
        this.rewards = rewards;
        this.round = round;
        this.status = status;
        this.appsLocalState = appsLocalState;
        this.appsTotalExtraPages = appsTotalExtraPages;
        this.appsTotalSchema = appsTotalSchema;
        this.assets = assets;
        this.authAddr = authAddr;
        this.createdApps = createdApps;
        this.createdAssets = createdAssets;
        this.participation = participation;
        this.rewardBase = rewardBase;
        this.sigType = sigType;
        this.attribute_map = {
            address: 'address',
            amount: 'amount',
            amountWithoutPendingRewards: 'amount-without-pending-rewards',
            minBalance: 'min-balance',
            pendingRewards: 'pending-rewards',
            rewards: 'rewards',
            round: 'round',
            status: 'status',
            appsLocalState: 'apps-local-state',
            appsTotalExtraPages: 'apps-total-extra-pages',
            appsTotalSchema: 'apps-total-schema',
            assets: 'assets',
            authAddr: 'auth-addr',
            createdApps: 'created-apps',
            createdAssets: 'created-assets',
            participation: 'participation',
            rewardBase: 'reward-base',
            sigType: 'sig-type',
        };
    }
}
exports.Account = Account;
class AccountParticipation extends base_1.default {
        constructor({ selectionParticipationKey, voteFirstValid, voteKeyDilution, voteLastValid, voteParticipationKey, stateProofKey, }) {
        super();
        this.selectionParticipationKey =
            typeof selectionParticipationKey === 'string'
                ? new Uint8Array(Buffer.from(selectionParticipationKey, 'base64'))
                : selectionParticipationKey;
        this.voteFirstValid = voteFirstValid;
        this.voteKeyDilution = voteKeyDilution;
        this.voteLastValid = voteLastValid;
        this.voteParticipationKey =
            typeof voteParticipationKey === 'string'
                ? new Uint8Array(Buffer.from(voteParticipationKey, 'base64'))
                : voteParticipationKey;
        this.stateProofKey =
            typeof stateProofKey === 'string'
                ? new Uint8Array(Buffer.from(stateProofKey, 'base64'))
                : stateProofKey;
        this.attribute_map = {
            selectionParticipationKey: 'selection-participation-key',
            voteFirstValid: 'vote-first-valid',
            voteKeyDilution: 'vote-key-dilution',
            voteLastValid: 'vote-last-valid',
            voteParticipationKey: 'vote-participation-key',
            stateProofKey: 'state-proof-key',
        };
    }
}
exports.AccountParticipation = AccountParticipation;
class AccountStateDelta extends base_1.default {
        constructor(address, delta) {
        super();
        this.address = address;
        this.delta = delta;
        this.attribute_map = {
            address: 'address',
            delta: 'delta',
        };
    }
}
exports.AccountStateDelta = AccountStateDelta;
class Application extends base_1.default {
        constructor(id, params) {
        super();
        this.id = id;
        this.params = params;
        this.attribute_map = {
            id: 'id',
            params: 'params',
        };
    }
}
exports.Application = Application;
class ApplicationLocalState extends base_1.default {
        constructor(id, schema, keyValue) {
        super();
        this.id = id;
        this.schema = schema;
        this.keyValue = keyValue;
        this.attribute_map = {
            id: 'id',
            schema: 'schema',
            keyValue: 'key-value',
        };
    }
}
exports.ApplicationLocalState = ApplicationLocalState;
class ApplicationParams extends base_1.default {
        constructor({ approvalProgram, clearStateProgram, creator, extraProgramPages, globalState, globalStateSchema, localStateSchema, }) {
        super();
        this.approvalProgram =
            typeof approvalProgram === 'string'
                ? new Uint8Array(Buffer.from(approvalProgram, 'base64'))
                : approvalProgram;
        this.clearStateProgram =
            typeof clearStateProgram === 'string'
                ? new Uint8Array(Buffer.from(clearStateProgram, 'base64'))
                : clearStateProgram;
        this.creator = creator;
        this.extraProgramPages = extraProgramPages;
        this.globalState = globalState;
        this.globalStateSchema = globalStateSchema;
        this.localStateSchema = localStateSchema;
        this.attribute_map = {
            approvalProgram: 'approval-program',
            clearStateProgram: 'clear-state-program',
            creator: 'creator',
            extraProgramPages: 'extra-program-pages',
            globalState: 'global-state',
            globalStateSchema: 'global-state-schema',
            localStateSchema: 'local-state-schema',
        };
    }
}
exports.ApplicationParams = ApplicationParams;
class ApplicationStateSchema extends base_1.default {
        constructor(numUint, numByteSlice) {
        super();
        this.numUint = numUint;
        this.numByteSlice = numByteSlice;
        this.attribute_map = {
            numUint: 'num-uint',
            numByteSlice: 'num-byte-slice',
        };
    }
}
exports.ApplicationStateSchema = ApplicationStateSchema;
class Asset extends base_1.default {
        constructor(index, params) {
        super();
        this.index = index;
        this.params = params;
        this.attribute_map = {
            index: 'index',
            params: 'params',
        };
    }
}
exports.Asset = Asset;
class AssetHolding extends base_1.default {
        constructor(amount, assetId, creator, isFrozen) {
        super();
        this.amount = amount;
        this.assetId = assetId;
        this.creator = creator;
        this.isFrozen = isFrozen;
        this.attribute_map = {
            amount: 'amount',
            assetId: 'asset-id',
            creator: 'creator',
            isFrozen: 'is-frozen',
        };
    }
}
exports.AssetHolding = AssetHolding;
class AssetParams extends base_1.default {
        constructor({ creator, decimals, total, clawback, defaultFrozen, freeze, manager, metadataHash, name, nameB64, reserve, unitName, unitNameB64, url, urlB64, }) {
        super();
        this.creator = creator;
        this.decimals = decimals;
        this.total = total;
        this.clawback = clawback;
        this.defaultFrozen = defaultFrozen;
        this.freeze = freeze;
        this.manager = manager;
        this.metadataHash =
            typeof metadataHash === 'string'
                ? new Uint8Array(Buffer.from(metadataHash, 'base64'))
                : metadataHash;
        this.name = name;
        this.nameB64 =
            typeof nameB64 === 'string'
                ? new Uint8Array(Buffer.from(nameB64, 'base64'))
                : nameB64;
        this.reserve = reserve;
        this.unitName = unitName;
        this.unitNameB64 =
            typeof unitNameB64 === 'string'
                ? new Uint8Array(Buffer.from(unitNameB64, 'base64'))
                : unitNameB64;
        this.url = url;
        this.urlB64 =
            typeof urlB64 === 'string'
                ? new Uint8Array(Buffer.from(urlB64, 'base64'))
                : urlB64;
        this.attribute_map = {
            creator: 'creator',
            decimals: 'decimals',
            total: 'total',
            clawback: 'clawback',
            defaultFrozen: 'default-frozen',
            freeze: 'freeze',
            manager: 'manager',
            metadataHash: 'metadata-hash',
            name: 'name',
            nameB64: 'name-b64',
            reserve: 'reserve',
            unitName: 'unit-name',
            unitNameB64: 'unit-name-b64',
            url: 'url',
            urlB64: 'url-b64',
        };
    }
}
exports.AssetParams = AssetParams;
class BlockResponse extends base_1.default {
        constructor(block, cert) {
        super();
        this.block = block;
        this.cert = cert;
        this.attribute_map = {
            block: 'block',
            cert: 'cert',
        };
    }
}
exports.BlockResponse = BlockResponse;
class BuildVersion extends base_1.default {
        constructor({ branch, buildNumber, channel, commitHash, major, minor, }) {
        super();
        this.branch = branch;
        this.buildNumber = buildNumber;
        this.channel = channel;
        this.commitHash = commitHash;
        this.major = major;
        this.minor = minor;
        this.attribute_map = {
            branch: 'branch',
            buildNumber: 'build_number',
            channel: 'channel',
            commitHash: 'commit_hash',
            major: 'major',
            minor: 'minor',
        };
    }
}
exports.BuildVersion = BuildVersion;
class CatchpointAbortResponse extends base_1.default {
        constructor(catchupMessage) {
        super();
        this.catchupMessage = catchupMessage;
        this.attribute_map = {
            catchupMessage: 'catchup-message',
        };
    }
}
exports.CatchpointAbortResponse = CatchpointAbortResponse;
class CatchpointStartResponse extends base_1.default {
        constructor(catchupMessage) {
        super();
        this.catchupMessage = catchupMessage;
        this.attribute_map = {
            catchupMessage: 'catchup-message',
        };
    }
}
exports.CatchpointStartResponse = CatchpointStartResponse;
class CompileResponse extends base_1.default {
        constructor(hash, result) {
        super();
        this.hash = hash;
        this.result = result;
        this.attribute_map = {
            hash: 'hash',
            result: 'result',
        };
    }
}
exports.CompileResponse = CompileResponse;
class DryrunRequest extends base_1.default {
        constructor({ accounts, apps, latestTimestamp, protocolVersion, round, sources, txns, }) {
        super();
        this.accounts = accounts;
        this.apps = apps;
        this.latestTimestamp = latestTimestamp;
        this.protocolVersion = protocolVersion;
        this.round = round;
        this.sources = sources;
        this.txns = txns;
        this.attribute_map = {
            accounts: 'accounts',
            apps: 'apps',
            latestTimestamp: 'latest-timestamp',
            protocolVersion: 'protocol-version',
            round: 'round',
            sources: 'sources',
            txns: 'txns',
        };
    }
}
exports.DryrunRequest = DryrunRequest;
class DryrunResponse extends base_1.default {
        constructor(error, protocolVersion, txns) {
        super();
        this.error = error;
        this.protocolVersion = protocolVersion;
        this.txns = txns;
        this.attribute_map = {
            error: 'error',
            protocolVersion: 'protocol-version',
            txns: 'txns',
        };
    }
}
exports.DryrunResponse = DryrunResponse;
class DryrunSource extends base_1.default {
        constructor(fieldName, source, txnIndex, appIndex) {
        super();
        this.fieldName = fieldName;
        this.source = source;
        this.txnIndex = txnIndex;
        this.appIndex = appIndex;
        this.attribute_map = {
            fieldName: 'field-name',
            source: 'source',
            txnIndex: 'txn-index',
            appIndex: 'app-index',
        };
    }
}
exports.DryrunSource = DryrunSource;
class DryrunState extends base_1.default {
        constructor({ line, pc, stack, error, scratch, }) {
        super();
        this.line = line;
        this.pc = pc;
        this.stack = stack;
        this.error = error;
        this.scratch = scratch;
        this.attribute_map = {
            line: 'line',
            pc: 'pc',
            stack: 'stack',
            error: 'error',
            scratch: 'scratch',
        };
    }
}
exports.DryrunState = DryrunState;
class DryrunTxnResult extends base_1.default {
        constructor({ disassembly, appCallMessages, appCallTrace, cost, globalDelta, localDeltas, logicSigDisassembly, logicSigMessages, logicSigTrace, logs, }) {
        super();
        this.disassembly = disassembly;
        this.appCallMessages = appCallMessages;
        this.appCallTrace = appCallTrace;
        this.cost = cost;
        this.globalDelta = globalDelta;
        this.localDeltas = localDeltas;
        this.logicSigDisassembly = logicSigDisassembly;
        this.logicSigMessages = logicSigMessages;
        this.logicSigTrace = logicSigTrace;
        this.logs = logs;
        this.attribute_map = {
            disassembly: 'disassembly',
            appCallMessages: 'app-call-messages',
            appCallTrace: 'app-call-trace',
            cost: 'cost',
            globalDelta: 'global-delta',
            localDeltas: 'local-deltas',
            logicSigDisassembly: 'logic-sig-disassembly',
            logicSigMessages: 'logic-sig-messages',
            logicSigTrace: 'logic-sig-trace',
            logs: 'logs',
        };
    }
}
exports.DryrunTxnResult = DryrunTxnResult;
class ErrorResponse extends base_1.default {
        constructor(message, data) {
        super();
        this.message = message;
        this.data = data;
        this.attribute_map = {
            message: 'message',
            data: 'data',
        };
    }
}
exports.ErrorResponse = ErrorResponse;
class EvalDelta extends base_1.default {
        constructor(action, bytes, uint) {
        super();
        this.action = action;
        this.bytes = bytes;
        this.uint = uint;
        this.attribute_map = {
            action: 'action',
            bytes: 'bytes',
            uint: 'uint',
        };
    }
}
exports.EvalDelta = EvalDelta;
class EvalDeltaKeyValue extends base_1.default {
        constructor(key, value) {
        super();
        this.key = key;
        this.value = value;
        this.attribute_map = {
            key: 'key',
            value: 'value',
        };
    }
}
exports.EvalDeltaKeyValue = EvalDeltaKeyValue;
class NodeStatusResponse extends base_1.default {
        constructor({ catchupTime, lastRound, lastVersion, nextVersion, nextVersionRound, nextVersionSupported, stoppedAtUnsupportedRound, timeSinceLastRound, catchpoint, catchpointAcquiredBlocks, catchpointProcessedAccounts, catchpointTotalAccounts, catchpointTotalBlocks, catchpointVerifiedAccounts, lastCatchpoint, }) {
        super();
        this.catchupTime = catchupTime;
        this.lastRound = lastRound;
        this.lastVersion = lastVersion;
        this.nextVersion = nextVersion;
        this.nextVersionRound = nextVersionRound;
        this.nextVersionSupported = nextVersionSupported;
        this.stoppedAtUnsupportedRound = stoppedAtUnsupportedRound;
        this.timeSinceLastRound = timeSinceLastRound;
        this.catchpoint = catchpoint;
        this.catchpointAcquiredBlocks = catchpointAcquiredBlocks;
        this.catchpointProcessedAccounts = catchpointProcessedAccounts;
        this.catchpointTotalAccounts = catchpointTotalAccounts;
        this.catchpointTotalBlocks = catchpointTotalBlocks;
        this.catchpointVerifiedAccounts = catchpointVerifiedAccounts;
        this.lastCatchpoint = lastCatchpoint;
        this.attribute_map = {
            catchupTime: 'catchup-time',
            lastRound: 'last-round',
            lastVersion: 'last-version',
            nextVersion: 'next-version',
            nextVersionRound: 'next-version-round',
            nextVersionSupported: 'next-version-supported',
            stoppedAtUnsupportedRound: 'stopped-at-unsupported-round',
            timeSinceLastRound: 'time-since-last-round',
            catchpoint: 'catchpoint',
            catchpointAcquiredBlocks: 'catchpoint-acquired-blocks',
            catchpointProcessedAccounts: 'catchpoint-processed-accounts',
            catchpointTotalAccounts: 'catchpoint-total-accounts',
            catchpointTotalBlocks: 'catchpoint-total-blocks',
            catchpointVerifiedAccounts: 'catchpoint-verified-accounts',
            lastCatchpoint: 'last-catchpoint',
        };
    }
}
exports.NodeStatusResponse = NodeStatusResponse;
class PendingTransactionResponse extends base_1.default {
        constructor({ poolError, txn, applicationIndex, assetClosingAmount, assetIndex, closeRewards, closingAmount, confirmedRound, globalStateDelta, innerTxns, localStateDelta, logs, receiverRewards, senderRewards, }) {
        super();
        this.poolError = poolError;
        this.txn = txn;
        this.applicationIndex = applicationIndex;
        this.assetClosingAmount = assetClosingAmount;
        this.assetIndex = assetIndex;
        this.closeRewards = closeRewards;
        this.closingAmount = closingAmount;
        this.confirmedRound = confirmedRound;
        this.globalStateDelta = globalStateDelta;
        this.innerTxns = innerTxns;
        this.localStateDelta = localStateDelta;
        this.logs = logs;
        this.receiverRewards = receiverRewards;
        this.senderRewards = senderRewards;
        this.attribute_map = {
            poolError: 'pool-error',
            txn: 'txn',
            applicationIndex: 'application-index',
            assetClosingAmount: 'asset-closing-amount',
            assetIndex: 'asset-index',
            closeRewards: 'close-rewards',
            closingAmount: 'closing-amount',
            confirmedRound: 'confirmed-round',
            globalStateDelta: 'global-state-delta',
            innerTxns: 'inner-txns',
            localStateDelta: 'local-state-delta',
            logs: 'logs',
            receiverRewards: 'receiver-rewards',
            senderRewards: 'sender-rewards',
        };
    }
}
exports.PendingTransactionResponse = PendingTransactionResponse;
class PendingTransactionsResponse extends base_1.default {
        constructor(topTransactions, totalTransactions) {
        super();
        this.topTransactions = topTransactions;
        this.totalTransactions = totalTransactions;
        this.attribute_map = {
            topTransactions: 'top-transactions',
            totalTransactions: 'total-transactions',
        };
    }
}
exports.PendingTransactionsResponse = PendingTransactionsResponse;
class PostTransactionsResponse extends base_1.default {
        constructor(txid) {
        super();
        this.txid = txid;
        this.attribute_map = {
            txid: 'txId',
        };
    }
}
exports.PostTransactionsResponse = PostTransactionsResponse;
class ProofResponse extends base_1.default {
        constructor({ idx, proof, stibhash, treedepth, hashtype, }) {
        super();
        this.idx = idx;
        this.proof =
            typeof proof === 'string'
                ? new Uint8Array(Buffer.from(proof, 'base64'))
                : proof;
        this.stibhash =
            typeof stibhash === 'string'
                ? new Uint8Array(Buffer.from(stibhash, 'base64'))
                : stibhash;
        this.treedepth = treedepth;
        this.hashtype = hashtype;
        this.attribute_map = {
            idx: 'idx',
            proof: 'proof',
            stibhash: 'stibhash',
            treedepth: 'treedepth',
            hashtype: 'hashtype',
        };
    }
}
exports.ProofResponse = ProofResponse;
class SupplyResponse extends base_1.default {
        constructor(currentRound, onlineMoney, totalMoney) {
        super();
        this.currentRound = currentRound;
        this.onlineMoney = onlineMoney;
        this.totalMoney = totalMoney;
        this.attribute_map = {
            currentRound: 'current_round',
            onlineMoney: 'online-money',
            totalMoney: 'total-money',
        };
    }
}
exports.SupplyResponse = SupplyResponse;
class TealKeyValue extends base_1.default {
        constructor(key, value) {
        super();
        this.key = key;
        this.value = value;
        this.attribute_map = {
            key: 'key',
            value: 'value',
        };
    }
}
exports.TealKeyValue = TealKeyValue;
class TealValue extends base_1.default {
        constructor(type, bytes, uint) {
        super();
        this.type = type;
        this.bytes = bytes;
        this.uint = uint;
        this.attribute_map = {
            type: 'type',
            bytes: 'bytes',
            uint: 'uint',
        };
    }
}
exports.TealValue = TealValue;
class TransactionParametersResponse extends base_1.default {
        constructor({ consensusVersion, fee, genesisHash, genesisId, lastRound, minFee, }) {
        super();
        this.consensusVersion = consensusVersion;
        this.fee = fee;
        this.genesisHash =
            typeof genesisHash === 'string'
                ? new Uint8Array(Buffer.from(genesisHash, 'base64'))
                : genesisHash;
        this.genesisId = genesisId;
        this.lastRound = lastRound;
        this.minFee = minFee;
        this.attribute_map = {
            consensusVersion: 'consensus-version',
            fee: 'fee',
            genesisHash: 'genesis-hash',
            genesisId: 'genesis-id',
            lastRound: 'last-round',
            minFee: 'min-fee',
        };
    }
}
exports.TransactionParametersResponse = TransactionParametersResponse;
class Version extends base_1.default {
        constructor(build, genesisHashB64, genesisId, versions) {
        super();
        this.build = build;
        this.genesisHashB64 =
            typeof genesisHashB64 === 'string'
                ? new Uint8Array(Buffer.from(genesisHashB64, 'base64'))
                : genesisHashB64;
        this.genesisId = genesisId;
        this.versions = versions;
        this.attribute_map = {
            build: 'build',
            genesisHashB64: 'genesis_hash_b64',
            genesisId: 'genesis_id',
            versions: 'versions',
        };
    }
}
exports.Version = Version;

}).call(this)}).call(this,require("buffer").Buffer)
},{"./base":26,"buffer":95}],28:[function(require,module,exports){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonrequest_1 = __importDefault(require("../jsonrequest"));
const encoding = __importStar(require("../../../encoding/encoding"));
class PendingTransactionInformation extends jsonrequest_1.default {
    constructor(c, txid) {
        super(c);
        this.txid = txid;
        this.txid = txid;
        this.query.format = 'msgpack';
    }
    
    prepare(body) {
        if (body && body.byteLength > 0) {
            return encoding.decode(body);
        }
        return undefined;
    }
    path() {
        return `/v2/transactions/pending/${this.txid}`;
    }
    
    max(max) {
        this.query.max = max;
        return this;
    }
}
exports.default = PendingTransactionInformation;

},{"../../../encoding/encoding":60,"../jsonrequest":53}],29:[function(require,module,exports){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonrequest_1 = __importDefault(require("../jsonrequest"));
const encoding = __importStar(require("../../../encoding/encoding"));
class PendingTransactions extends jsonrequest_1.default {
    constructor(c) {
        super(c);
        this.query.format = 'msgpack';
    }
        path() {
        return '/v2/transactions/pending';
    }
    prepare(body) {
        if (body && body.byteLength > 0) {
            return encoding.decode(body);
        }
        return undefined;
    }
        
    max(max) {
        this.query.max = max;
        return this;
    }
}
exports.default = PendingTransactions;

},{"../../../encoding/encoding":60,"../jsonrequest":53}],30:[function(require,module,exports){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonrequest_1 = __importDefault(require("../jsonrequest"));
const encoding = __importStar(require("../../../encoding/encoding"));
class PendingTransactionsByAddress extends jsonrequest_1.default {
    constructor(c, address) {
        super(c);
        this.address = address;
        this.address = address;
        this.query.format = 'msgpack';
    }
    
    prepare(body) {
        if (body && body.byteLength > 0) {
            return encoding.decode(body);
        }
        return undefined;
    }
    path() {
        return `/v2/accounts/${this.address}/transactions/pending`;
    }
    
    max(max) {
        this.query.max = max;
        return this;
    }
}
exports.default = PendingTransactionsByAddress;

},{"../../../encoding/encoding":60,"../jsonrequest":53}],31:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonrequest_1 = __importDefault(require("../jsonrequest"));
class Proof extends jsonrequest_1.default {
    constructor(c, intDecoding, round, txID) {
        super(c, intDecoding);
        this.round = round;
        this.txID = txID;
        this.round = round;
        this.txID = txID;
    }
    path() {
        return `/v2/blocks/${this.round}/transactions/${this.txID}/proof`;
    }
}
exports.default = Proof;

},{"../jsonrequest":53}],32:[function(require,module,exports){
(function (Buffer){(function (){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setSendTransactionHeaders = void 0;
const jsonrequest_1 = __importDefault(require("../jsonrequest"));
const utils_1 = require("../../../utils/utils");
function setSendTransactionHeaders(headers = {}) {
    let hdrs = headers;
    if (Object.keys(hdrs).every((key) => key.toLowerCase() !== 'content-type')) {
        hdrs = { ...headers };
        hdrs['Content-Type'] = 'application/x-binary';
    }
    return hdrs;
}
exports.setSendTransactionHeaders = setSendTransactionHeaders;
function isByteArray(array) {
    return array && array.byteLength !== undefined;
}
class SendRawTransaction extends jsonrequest_1.default {
    constructor(c, stxOrStxs) {
        super(c);
        let forPosting = stxOrStxs;
        if (Array.isArray(stxOrStxs)) {
            if (!stxOrStxs.every(isByteArray)) {
                throw new TypeError('Array elements must be byte arrays');
            }
            
            forPosting = utils_1.concatArrays(...stxOrStxs);
        }
        else if (!isByteArray(forPosting)) {
            throw new TypeError('Argument must be byte array');
        }
        this.txnBytesToPost = forPosting;
    }
    
    path() {
        return '/v2/transactions';
    }
    async do(headers = {}) {
        const txHeaders = setSendTransactionHeaders(headers);
        const res = await this.c.post(this.path(), Buffer.from(this.txnBytesToPost), txHeaders);
        return res.body;
    }
}
exports.default = SendRawTransaction;

}).call(this)}).call(this,require("buffer").Buffer)
},{"../../../utils/utils":88,"../jsonrequest":53,"buffer":95}],33:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonrequest_1 = __importDefault(require("../jsonrequest"));
class Status extends jsonrequest_1.default {
    
    path() {
        return '/v2/status';
    }
}
exports.default = Status;

},{"../jsonrequest":53}],34:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonrequest_1 = __importDefault(require("../jsonrequest"));
class StatusAfterBlock extends jsonrequest_1.default {
    constructor(c, intDecoding, round) {
        super(c, intDecoding);
        this.round = round;
        if (!Number.isInteger(round))
            throw Error('round should be an integer');
        this.round = round;
    }
    path() {
        return `/v2/status/wait-for-block-after/${this.round}`;
    }
}
exports.default = StatusAfterBlock;

},{"../jsonrequest":53}],35:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonrequest_1 = __importDefault(require("../jsonrequest"));
class SuggestedParamsRequest extends jsonrequest_1.default {
        path() {
        return '/v2/transactions/params';
    }
    prepare(body) {
        return {
            flatFee: false,
            fee: body.fee,
            firstRound: body['last-round'],
            lastRound: body['last-round'] + 1000,
            genesisID: body['genesis-id'],
            genesisHash: body['genesis-hash'],
        };
    }
}
exports.default = SuggestedParamsRequest;

},{"../jsonrequest":53}],36:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonrequest_1 = __importDefault(require("../jsonrequest"));
class Supply extends jsonrequest_1.default {
    
    path() {
        return '/v2/ledger/supply';
    }
}
exports.default = Supply;

},{"../jsonrequest":53}],37:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonrequest_1 = __importDefault(require("../jsonrequest"));
class Versions extends jsonrequest_1.default {
    
    path() {
        return '/versions';
    }
}
exports.default = Versions;

},{"../jsonrequest":53}],38:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const serviceClient_1 = __importDefault(require("../serviceClient"));
const makeHealthCheck_1 = __importDefault(require("./makeHealthCheck"));
const lookupAssetBalances_1 = __importDefault(require("./lookupAssetBalances"));
const lookupAssetTransactions_1 = __importDefault(require("./lookupAssetTransactions"));
const lookupAccountTransactions_1 = __importDefault(require("./lookupAccountTransactions"));
const lookupBlock_1 = __importDefault(require("./lookupBlock"));
const lookupTransactionByID_1 = __importDefault(require("./lookupTransactionByID"));
const lookupAccountByID_1 = __importDefault(require("./lookupAccountByID"));
const lookupAssetByID_1 = __importDefault(require("./lookupAssetByID"));
const lookupApplications_1 = __importDefault(require("./lookupApplications"));
const lookupApplicationLogs_1 = __importDefault(require("./lookupApplicationLogs"));
const searchAccounts_1 = __importDefault(require("./searchAccounts"));
const searchForTransactions_1 = __importDefault(require("./searchForTransactions"));
const searchForAssets_1 = __importDefault(require("./searchForAssets"));
const searchForApplications_1 = __importDefault(require("./searchForApplications"));
class IndexerClient extends serviceClient_1.default {
        constructor(tokenOrBaseClient, baseServer = 'http://127.0.0.1', port = 8080, headers = {}) {
        super('X-Indexer-API-Token', tokenOrBaseClient, baseServer, port, headers);
    }
        makeHealthCheck() {
        return new makeHealthCheck_1.default(this.c, this.intDecoding);
    }
        lookupAssetBalances(index) {
        return new lookupAssetBalances_1.default(this.c, this.intDecoding, index);
    }
        lookupAssetTransactions(index) {
        return new lookupAssetTransactions_1.default(this.c, this.intDecoding, index);
    }
        lookupAccountTransactions(account) {
        return new lookupAccountTransactions_1.default(this.c, this.intDecoding, account);
    }
        lookupBlock(round) {
        return new lookupBlock_1.default(this.c, this.intDecoding, round);
    }
        lookupTransactionByID(txID) {
        return new lookupTransactionByID_1.default(this.c, this.intDecoding, txID);
    }
        lookupAccountByID(account) {
        return new lookupAccountByID_1.default(this.c, this.intDecoding, account);
    }
        lookupAssetByID(index) {
        return new lookupAssetByID_1.default(this.c, this.intDecoding, index);
    }
        lookupApplications(index) {
        return new lookupApplications_1.default(this.c, this.intDecoding, index);
    }
        lookupApplicationLogs(appID) {
        return new lookupApplicationLogs_1.default(this.c, this.intDecoding, appID);
    }
        searchAccounts() {
        return new searchAccounts_1.default(this.c, this.intDecoding);
    }
        searchForTransactions() {
        return new searchForTransactions_1.default(this.c, this.intDecoding);
    }
        searchForAssets() {
        return new searchForAssets_1.default(this.c, this.intDecoding);
    }
        searchForApplications() {
        return new searchForApplications_1.default(this.c, this.intDecoding);
    }
}
exports.default = IndexerClient;

},{"../serviceClient":54,"./lookupAccountByID":39,"./lookupAccountTransactions":40,"./lookupApplicationLogs":41,"./lookupApplications":42,"./lookupAssetBalances":43,"./lookupAssetByID":44,"./lookupAssetTransactions":45,"./lookupBlock":46,"./lookupTransactionByID":47,"./makeHealthCheck":48,"./searchAccounts":49,"./searchForApplications":50,"./searchForAssets":51,"./searchForTransactions":52}],39:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonrequest_1 = __importDefault(require("../jsonrequest"));
class LookupAccountByID extends jsonrequest_1.default {
    constructor(c, intDecoding, account) {
        super(c, intDecoding);
        this.account = account;
        this.account = account;
    }
    path() {
        return `/v2/accounts/${this.account}`;
    }
    
    round(round) {
        this.query.round = round;
        return this;
    }
    
    includeAll(value = true) {
        this.query['include-all'] = value;
        return this;
    }
}
exports.default = LookupAccountByID;

},{"../jsonrequest":53}],40:[function(require,module,exports){
(function (Buffer){(function (){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.base64StringFunnel = void 0;
const jsonrequest_1 = __importDefault(require("../jsonrequest"));
function base64StringFunnel(data) {
    if (typeof data === 'string') {
        return data;
    }
    return Buffer.from(data).toString('base64');
}
exports.base64StringFunnel = base64StringFunnel;
class LookupAccountTransactions extends jsonrequest_1.default {
        constructor(c, intDecoding, account) {
        super(c, intDecoding);
        this.account = account;
        this.account = account;
    }
        path() {
        return `/v2/accounts/${this.account}/transactions`;
    }
        notePrefix(prefix) {
        this.query['note-prefix'] = base64StringFunnel(prefix);
        return this;
    }
        txType(type) {
        this.query['tx-type'] = type;
        return this;
    }
        sigType(type) {
        this.query['sig-type'] = type;
        return this;
    }
        txid(txid) {
        this.query.txid = txid;
        return this;
    }
        round(round) {
        this.query.round = round;
        return this;
    }
        minRound(round) {
        this.query['min-round'] = round;
        return this;
    }
        maxRound(round) {
        this.query['max-round'] = round;
        return this;
    }
        assetID(id) {
        this.query['asset-id'] = id;
        return this;
    }
        limit(limit) {
        this.query.limit = limit;
        return this;
    }
        beforeTime(before) {
        this.query['before-time'] = before;
        return this;
    }
        afterTime(after) {
        this.query['after-time'] = after;
        return this;
    }
        currencyGreaterThan(greater) {
        this.query['currency-greater-than'] = greater;
        return this;
    }
        currencyLessThan(lesser) {
        this.query['currency-less-than'] = lesser;
        return this;
    }
        nextToken(nextToken) {
        this.query.next = nextToken;
        return this;
    }
        rekeyTo(rekeyTo) {
        this.query['rekey-to'] = rekeyTo;
        return this;
    }
}
exports.default = LookupAccountTransactions;

}).call(this)}).call(this,require("buffer").Buffer)
},{"../jsonrequest":53,"buffer":95}],41:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonrequest_1 = __importDefault(require("../jsonrequest"));
class LookupApplicationLogs extends jsonrequest_1.default {
    constructor(c, intDecoding, appID) {
        super(c, intDecoding);
        this.appID = appID;
        this.appID = appID;
    }
    path() {
        return `/v2/applications/${this.appID}/logs`;
    }
        limit(limit) {
        this.query.limit = limit;
        return this;
    }
        minRound(round) {
        this.query['min-round'] = round;
        return this;
    }
        maxRound(round) {
        this.query['max-round'] = round;
        return this;
    }
        nextToken(nextToken) {
        this.query.next = nextToken;
        return this;
    }
        sender(senderAddress) {
        this.query['sender-address'] = senderAddress;
        return this;
    }
        txid(txid) {
        this.query.txid = txid;
        return this;
    }
}
exports.default = LookupApplicationLogs;

},{"../jsonrequest":53}],42:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonrequest_1 = __importDefault(require("../jsonrequest"));
class LookupApplications extends jsonrequest_1.default {
    constructor(c, intDecoding, index) {
        super(c, intDecoding);
        this.index = index;
        this.index = index;
    }
    path() {
        return `/v2/applications/${this.index}`;
    }
    
    includeAll(value = true) {
        this.query['include-all'] = value;
        return this;
    }
}
exports.default = LookupApplications;

},{"../jsonrequest":53}],43:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonrequest_1 = __importDefault(require("../jsonrequest"));
class LookupAssetBalances extends jsonrequest_1.default {
        constructor(c, intDecoding, index) {
        super(c, intDecoding);
        this.index = index;
        this.index = index;
    }
    path() {
        return `/v2/assets/${this.index}/balances`;
    }
        limit(limit) {
        this.query.limit = limit;
        return this;
    }
        round(round) {
        this.query.round = round;
        return this;
    }
        currencyGreaterThan(greater) {
        this.query['currency-greater-than'] = greater;
        return this;
    }
        currencyLessThan(lesser) {
        this.query['currency-less-than'] = lesser;
        return this;
    }
        nextToken(nextToken) {
        this.query.next = nextToken;
        return this;
    }
        includeAll(value = true) {
        this.query['include-all'] = value;
        return this;
    }
}
exports.default = LookupAssetBalances;

},{"../jsonrequest":53}],44:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonrequest_1 = __importDefault(require("../jsonrequest"));
class LookupAssetByID extends jsonrequest_1.default {
        constructor(c, intDecoding, index) {
        super(c, intDecoding);
        this.index = index;
        this.index = index;
    }
        path() {
        return `/v2/assets/${this.index}`;
    }
        includeAll(value = true) {
        this.query['include-all'] = value;
        return this;
    }
}
exports.default = LookupAssetByID;

},{"../jsonrequest":53}],45:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonrequest_1 = __importDefault(require("../jsonrequest"));
const lookupAccountTransactions_1 = require("./lookupAccountTransactions");
class LookupAssetTransactions extends jsonrequest_1.default {
    constructor(c, intDecoding, index) {
        super(c, intDecoding);
        this.index = index;
        this.index = index;
    }
    path() {
        return `/v2/assets/${this.index}/transactions`;
    }
        notePrefix(prefix) {
        this.query['note-prefix'] = lookupAccountTransactions_1.base64StringFunnel(prefix);
        return this;
    }
    
    txType(type) {
        this.query['tx-type'] = type;
        return this;
    }
    
    sigType(type) {
        this.query['sig-type'] = type;
        return this;
    }
    
    txid(txid) {
        this.query.txid = txid;
        return this;
    }
    
    round(round) {
        this.query.round = round;
        return this;
    }
    
    minRound(round) {
        this.query['min-round'] = round;
        return this;
    }
    
    maxRound(round) {
        this.query['max-round'] = round;
        return this;
    }
    
    assetID(id) {
        this.query['asset-id'] = id;
        return this;
    }
    
    limit(limit) {
        this.query.limit = limit;
        return this;
    }
    
    beforeTime(before) {
        this.query['before-time'] = before;
        return this;
    }
    
    afterTime(after) {
        this.query['after-time'] = after;
        return this;
    }
    
    currencyGreaterThan(greater) {
        this.query['currency-greater-than'] = greater;
        return this;
    }
    
    currencyLessThan(lesser) {
        this.query['currency-less-than'] = lesser;
        return this;
    }
    
    addressRole(role) {
        this.query['address-role'] = role;
        return this;
    }
    
    address(address) {
        this.query.address = address;
        return this;
    }
    
    excludeCloseTo(exclude) {
        this.query['exclude-close-to'] = exclude;
        return this;
    }
    
    nextToken(nextToken) {
        this.query.next = nextToken;
        return this;
    }
    
    rekeyTo(rekeyTo) {
        this.query['rekey-to'] = rekeyTo;
        return this;
    }
}
exports.default = LookupAssetTransactions;

},{"../jsonrequest":53,"./lookupAccountTransactions":40}],46:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonrequest_1 = __importDefault(require("../jsonrequest"));
class LookupBlock extends jsonrequest_1.default {
    constructor(c, intDecoding, round) {
        super(c, intDecoding);
        this.round = round;
        this.round = round;
    }
    path() {
        return `/v2/blocks/${this.round}`;
    }
}
exports.default = LookupBlock;

},{"../jsonrequest":53}],47:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonrequest_1 = __importDefault(require("../jsonrequest"));
class LookupTransactionByID extends jsonrequest_1.default {
    constructor(c, intDecoding, txID) {
        super(c, intDecoding);
        this.txID = txID;
        this.txID = txID;
    }
    path() {
        return `/v2/transactions/${this.txID}`;
    }
}
exports.default = LookupTransactionByID;

},{"../jsonrequest":53}],48:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonrequest_1 = __importDefault(require("../jsonrequest"));
class MakeHealthCheck extends jsonrequest_1.default {
    
    path() {
        return '/health';
    }
}
exports.default = MakeHealthCheck;

},{"../jsonrequest":53}],49:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonrequest_1 = __importDefault(require("../jsonrequest"));
class SearchAccounts extends jsonrequest_1.default {
    
    path() {
        return '/v2/accounts';
    }
    
    currencyGreaterThan(greater) {
        this.query['currency-greater-than'] = greater;
        return this;
    }
    
    currencyLessThan(lesser) {
        this.query['currency-less-than'] = lesser;
        return this;
    }
    
    limit(limit) {
        this.query.limit = limit;
        return this;
    }
    
    assetID(id) {
        this.query['asset-id'] = id;
        return this;
    }
    
    nextToken(nextToken) {
        this.query.next = nextToken;
        return this;
    }
    
    round(round) {
        this.query.round = round;
        return this;
    }
    
    authAddr(authAddr) {
        this.query['auth-addr'] = authAddr;
        return this;
    }
    
    applicationID(applicationID) {
        this.query['application-id'] = applicationID;
        return this;
    }
    
    includeAll(value = true) {
        this.query['include-all'] = value;
        return this;
    }
}
exports.default = SearchAccounts;

},{"../jsonrequest":53}],50:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonrequest_1 = __importDefault(require("../jsonrequest"));
class SearchForApplications extends jsonrequest_1.default {
    
    path() {
        return '/v2/applications';
    }
    
    index(index) {
        this.query['application-id'] = index;
        return this;
    }
    
    nextToken(next) {
        this.query.next = next;
        return this;
    }
    
    limit(limit) {
        this.query.limit = limit;
        return this;
    }
    
    includeAll(value = true) {
        this.query['include-all'] = value;
        return this;
    }
}
exports.default = SearchForApplications;

},{"../jsonrequest":53}],51:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonrequest_1 = __importDefault(require("../jsonrequest"));
class SearchForAssets extends jsonrequest_1.default {
    
    path() {
        return '/v2/assets';
    }
    
    limit(limit) {
        this.query.limit = limit;
        return this;
    }
    
    creator(creator) {
        this.query.creator = creator;
        return this;
    }
    
    name(name) {
        this.query.name = name;
        return this;
    }
    
    unit(unit) {
        this.query.unit = unit;
        return this;
    }
    
    index(index) {
        this.query['asset-id'] = index;
        return this;
    }
    
    nextToken(nextToken) {
        this.query.next = nextToken;
        return this;
    }
    
    includeAll(value = true) {
        this.query['include-all'] = value;
        return this;
    }
}
exports.default = SearchForAssets;

},{"../jsonrequest":53}],52:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonrequest_1 = __importDefault(require("../jsonrequest"));
const lookupAccountTransactions_1 = require("./lookupAccountTransactions");
class SearchForTransactions extends jsonrequest_1.default {
    
    path() {
        return '/v2/transactions';
    }
        notePrefix(prefix) {
        this.query['note-prefix'] = lookupAccountTransactions_1.base64StringFunnel(prefix);
        return this;
    }
    
    txType(type) {
        this.query['tx-type'] = type;
        return this;
    }
    
    sigType(type) {
        this.query['sig-type'] = type;
        return this;
    }
    
    txid(txid) {
        this.query.txid = txid;
        return this;
    }
    
    round(round) {
        this.query.round = round;
        return this;
    }
    
    minRound(round) {
        this.query['min-round'] = round;
        return this;
    }
    
    maxRound(round) {
        this.query['max-round'] = round;
        return this;
    }
    
    assetID(id) {
        this.query['asset-id'] = id;
        return this;
    }
    
    limit(limit) {
        this.query.limit = limit;
        return this;
    }
    
    beforeTime(before) {
        this.query['before-time'] = before;
        return this;
    }
    
    afterTime(after) {
        this.query['after-time'] = after;
        return this;
    }
    
    currencyGreaterThan(greater) {
        this.query['currency-greater-than'] = greater;
        return this;
    }
    
    currencyLessThan(lesser) {
        this.query['currency-less-than'] = lesser;
        return this;
    }
    
    addressRole(role) {
        this.query['address-role'] = role;
        return this;
    }
    
    address(address) {
        this.query.address = address;
        return this;
    }
    
    excludeCloseTo(exclude) {
        this.query['exclude-close-to'] = exclude;
        return this;
    }
    
    nextToken(nextToken) {
        this.query.next = nextToken;
        return this;
    }
    
    rekeyTo(rekeyTo) {
        this.query['rekey-to'] = rekeyTo;
        return this;
    }
    
    applicationID(applicationID) {
        this.query['application-id'] = applicationID;
        return this;
    }
}
exports.default = SearchForTransactions;

},{"../jsonrequest":53,"./lookupAccountTransactions":40}],53:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const intDecoding_1 = __importDefault(require("../../types/intDecoding"));
class JSONRequest {
        constructor(client, intDecoding) {
        this.c = client;
        this.query = {};
        this.intDecoding = intDecoding || intDecoding_1.default.DEFAULT;
    }
        
    prepare(body) {
        return body;
    }
        async do(headers = {}) {
        const jsonOptions = {};
        if (this.intDecoding !== 'default') {
            jsonOptions.intDecoding = this.intDecoding;
        }
        const res = await this.c.get(this.path(), this.query, headers, jsonOptions);
        return this.prepare(res.body);
    }
        setIntDecoding(method) {
        if (method !== 'default' &&
            method !== 'safe' &&
            method !== 'mixed' &&
            method !== 'bigint')
            throw new Error(`Invalid method for int decoding: ${method}`);
        this.intDecoding = method;
        return this;
    }
}
exports.default = JSONRequest;

},{"../../types/intDecoding":83}],54:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = __importDefault(require("../client"));
const intDecoding_1 = __importDefault(require("../../types/intDecoding"));
function convertTokenStringToTokenHeader(token = '', headerIdentifier) {
    const tokenHeader = {};
    tokenHeader[headerIdentifier] = token;
    return tokenHeader;
}
function isBaseHTTPClient(tbc) {
    return typeof tbc.get === 'function';
}
class ServiceClient {
    constructor(tokenHeaderIdentifier, tokenHeaderOrStrOrBaseClient, baseServer, port, defaultHeaders = {}) {
        if (isBaseHTTPClient(tokenHeaderOrStrOrBaseClient)) {
            
            this.c = new client_1.default(tokenHeaderOrStrOrBaseClient);
        }
        else {
            
            
            let tokenHeader;
            if (typeof tokenHeaderOrStrOrBaseClient === 'string') {
                tokenHeader = convertTokenStringToTokenHeader(tokenHeaderOrStrOrBaseClient, tokenHeaderIdentifier);
            }
            else {
                tokenHeader = tokenHeaderOrStrOrBaseClient;
            }
            this.c = new client_1.default(tokenHeader, baseServer, port, defaultHeaders);
        }
        this.intDecoding = intDecoding_1.default.DEFAULT;
    }
        setIntEncoding(method) {
        this.intDecoding = method;
    }
        getIntEncoding() {
        return this.intDecoding;
    }
}
exports.default = ServiceClient;

},{"../../types/intDecoding":83,"../client":14}],55:[function(require,module,exports){
(function (Buffer){(function (){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AtomicTransactionComposer = exports.AtomicTransactionComposerStatus = void 0;
const abi_1 = require("./abi");
const transaction_1 = require("./transaction");
const makeTxn_1 = require("./makeTxn");
const group_1 = require("./group");
const wait_1 = require("./wait");
const signer_1 = require("./signer");
const base_1 = require("./types/transactions/base");

const RETURN_PREFIX = Buffer.from([21, 31, 124, 117]);

const MAX_APP_ARGS = 16;
var AtomicTransactionComposerStatus;
(function (AtomicTransactionComposerStatus) {
        AtomicTransactionComposerStatus[AtomicTransactionComposerStatus["BUILDING"] = 0] = "BUILDING";
        AtomicTransactionComposerStatus[AtomicTransactionComposerStatus["BUILT"] = 1] = "BUILT";
        AtomicTransactionComposerStatus[AtomicTransactionComposerStatus["SIGNED"] = 2] = "SIGNED";
        AtomicTransactionComposerStatus[AtomicTransactionComposerStatus["SUBMITTED"] = 3] = "SUBMITTED";
        AtomicTransactionComposerStatus[AtomicTransactionComposerStatus["COMMITTED"] = 4] = "COMMITTED";
})(AtomicTransactionComposerStatus = exports.AtomicTransactionComposerStatus || (exports.AtomicTransactionComposerStatus = {}));
function populateForeignArray(valueToAdd, array, zeroValue) {
    if (zeroValue != null && valueToAdd === zeroValue) {
        return 0;
    }
    const offset = zeroValue == null ? 0 : 1;
    for (let i = 0; i < array.length; i++) {
        if (valueToAdd === array[i]) {
            return i + offset;
        }
    }
    array.push(valueToAdd);
    return array.length - 1 + offset;
}
class AtomicTransactionComposer {
    constructor() {
        this.status = AtomicTransactionComposerStatus.BUILDING;
        this.transactions = [];
        this.methodCalls = new Map();
        this.signedTxns = [];
        this.txIDs = [];
    }
        getStatus() {
        return this.status;
    }
        count() {
        return this.transactions.length;
    }
        clone() {
        const theClone = new AtomicTransactionComposer();
        theClone.transactions = this.transactions.map(({ txn, signer }) => ({
            
            txn: transaction_1.Transaction.from_obj_for_encoding({
                ...txn.get_obj_for_encoding(),
                
                grp: undefined,
            }),
            signer,
        }));
        theClone.methodCalls = new Map(this.methodCalls);
        return theClone;
    }
        addTransaction(txnAndSigner) {
        if (this.status !== AtomicTransactionComposerStatus.BUILDING) {
            throw new Error('Cannot add transactions when composer status is not BUILDING');
        }
        if (this.transactions.length === AtomicTransactionComposer.MAX_GROUP_SIZE) {
            throw new Error(`Adding an additional transaction exceeds the maximum atomic group size of ${AtomicTransactionComposer.MAX_GROUP_SIZE}`);
        }
        if (txnAndSigner.txn.group && txnAndSigner.txn.group.some((v) => v !== 0)) {
            throw new Error('Cannot add a transaction with nonzero group ID');
        }
        this.transactions.push(txnAndSigner);
    }
        addMethodCall({ appID, method, methodArgs, sender, suggestedParams, onComplete, approvalProgram, clearProgram, numGlobalInts, numGlobalByteSlices, numLocalInts, numLocalByteSlices, extraPages, note, lease, rekeyTo, signer, }) {
        if (this.status !== AtomicTransactionComposerStatus.BUILDING) {
            throw new Error('Cannot add transactions when composer status is not BUILDING');
        }
        if (this.transactions.length + method.txnCount() >
            AtomicTransactionComposer.MAX_GROUP_SIZE) {
            throw new Error(`Adding additional transactions exceeds the maximum atomic group size of ${AtomicTransactionComposer.MAX_GROUP_SIZE}`);
        }
        if (appID === 0) {
            if (approvalProgram == null ||
                clearProgram == null ||
                numGlobalInts == null ||
                numGlobalByteSlices == null ||
                numLocalInts == null ||
                numLocalByteSlices == null) {
                throw new Error('One of the following required parameters for application creation is missing: approvalProgram, clearProgram, numGlobalInts, numGlobalByteSlices, numLocalInts, numLocalByteSlices');
            }
        }
        else if (onComplete === base_1.OnApplicationComplete.UpdateApplicationOC) {
            if (approvalProgram == null || clearProgram == null) {
                throw new Error('One of the following required parameters for OnApplicationComplete.UpdateApplicationOC is missing: approvalProgram, clearProgram');
            }
            if (numGlobalInts != null ||
                numGlobalByteSlices != null ||
                numLocalInts != null ||
                numLocalByteSlices != null ||
                extraPages != null) {
                throw new Error('One of the following application creation parameters were set on a non-creation call: numGlobalInts, numGlobalByteSlices, numLocalInts, numLocalByteSlices, extraPages');
            }
        }
        else if (approvalProgram != null ||
            clearProgram != null ||
            numGlobalInts != null ||
            numGlobalByteSlices != null ||
            numLocalInts != null ||
            numLocalByteSlices != null ||
            extraPages != null) {
            throw new Error('One of the following application creation parameters were set on a non-creation call: approvalProgram, clearProgram, numGlobalInts, numGlobalByteSlices, numLocalInts, numLocalByteSlices, extraPages');
        }
        if (methodArgs == null) {
            
            methodArgs = [];
        }
        if (methodArgs.length !== method.args.length) {
            throw new Error(`Incorrect number of method arguments. Expected ${method.args.length}, got ${methodArgs.length}`);
        }
        let basicArgTypes = [];
        let basicArgValues = [];
        const txnArgs = [];
        const refArgTypes = [];
        const refArgValues = [];
        const refArgIndexToBasicArgIndex = new Map();
        for (let i = 0; i < methodArgs.length; i++) {
            let argType = method.args[i].type;
            const argValue = methodArgs[i];
            if (abi_1.abiTypeIsTransaction(argType)) {
                if (!signer_1.isTransactionWithSigner(argValue) ||
                    !abi_1.abiCheckTransactionType(argType, argValue.txn)) {
                    throw new Error(`Expected ${argType} transaction for argument at index ${i}`);
                }
                if (argValue.txn.group && argValue.txn.group.some((v) => v !== 0)) {
                    throw new Error('Cannot add a transaction with nonzero group ID');
                }
                txnArgs.push(argValue);
                continue;
            }
            if (signer_1.isTransactionWithSigner(argValue)) {
                throw new Error(`Expected non-transaction value for argument at index ${i}`);
            }
            if (abi_1.abiTypeIsReference(argType)) {
                refArgIndexToBasicArgIndex.set(refArgTypes.length, basicArgTypes.length);
                refArgTypes.push(argType);
                refArgValues.push(argValue);
                
                argType = new abi_1.ABIUintType(8);
            }
            if (typeof argType === 'string') {
                throw new Error(`Unknown ABI type: ${argType}`);
            }
            basicArgTypes.push(argType);
            basicArgValues.push(argValue);
        }
        const resolvedRefIndexes = [];
        const foreignAccounts = [];
        const foreignApps = [];
        const foreignAssets = [];
        for (let i = 0; i < refArgTypes.length; i++) {
            const refType = refArgTypes[i];
            const refValue = refArgValues[i];
            let resolved = 0;
            switch (refType) {
                case abi_1.ABIReferenceType.account: {
                    const addressType = new abi_1.ABIAddressType();
                    const address = addressType.decode(addressType.encode(refValue));
                    resolved = populateForeignArray(address, foreignAccounts, sender);
                    break;
                }
                case abi_1.ABIReferenceType.application: {
                    const uint64Type = new abi_1.ABIUintType(64);
                    const refAppID = uint64Type.decode(uint64Type.encode(refValue));
                    if (refAppID > Number.MAX_SAFE_INTEGER) {
                        throw new Error(`Expected safe integer for application value, got ${refAppID}`);
                    }
                    resolved = populateForeignArray(Number(refAppID), foreignApps, appID);
                    break;
                }
                case abi_1.ABIReferenceType.asset: {
                    const uint64Type = new abi_1.ABIUintType(64);
                    const refAssetID = uint64Type.decode(uint64Type.encode(refValue));
                    if (refAssetID > Number.MAX_SAFE_INTEGER) {
                        throw new Error(`Expected safe integer for asset value, got ${refAssetID}`);
                    }
                    resolved = populateForeignArray(Number(refAssetID), foreignAssets);
                    break;
                }
                default:
                    throw new Error(`Unknown reference type: ${refType}`);
            }
            resolvedRefIndexes.push(resolved);
        }
        for (let i = 0; i < resolvedRefIndexes.length; i++) {
            const basicArgIndex = refArgIndexToBasicArgIndex.get(i);
            basicArgValues[basicArgIndex] = resolvedRefIndexes[i];
        }
        if (basicArgTypes.length > MAX_APP_ARGS - 1) {
            const lastArgTupleTypes = basicArgTypes.slice(MAX_APP_ARGS - 2);
            const lastArgTupleValues = basicArgValues.slice(MAX_APP_ARGS - 2);
            basicArgTypes = basicArgTypes.slice(0, MAX_APP_ARGS - 2);
            basicArgValues = basicArgValues.slice(0, MAX_APP_ARGS - 2);
            basicArgTypes.push(new abi_1.ABITupleType(lastArgTupleTypes));
            basicArgValues.push(lastArgTupleValues);
        }
        const appArgsEncoded = [method.getSelector()];
        for (let i = 0; i < basicArgTypes.length; i++) {
            appArgsEncoded.push(basicArgTypes[i].encode(basicArgValues[i]));
        }
        const appCall = {
            txn: makeTxn_1.makeApplicationCallTxnFromObject({
                from: sender,
                appIndex: appID,
                appArgs: appArgsEncoded,
                accounts: foreignAccounts,
                foreignApps,
                foreignAssets,
                onComplete: onComplete == null ? base_1.OnApplicationComplete.NoOpOC : onComplete,
                approvalProgram,
                clearProgram,
                numGlobalInts,
                numGlobalByteSlices,
                numLocalInts,
                numLocalByteSlices,
                extraPages,
                lease,
                note,
                rekeyTo,
                suggestedParams,
            }),
            signer,
        };
        this.transactions.push(...txnArgs, appCall);
        this.methodCalls.set(this.transactions.length - 1, method);
    }
        buildGroup() {
        if (this.status === AtomicTransactionComposerStatus.BUILDING) {
            if (this.transactions.length === 0) {
                throw new Error('Cannot build a group with 0 transactions');
            }
            if (this.transactions.length > 1) {
                group_1.assignGroupID(this.transactions.map((txnWithSigner) => txnWithSigner.txn));
            }
            this.status = AtomicTransactionComposerStatus.BUILT;
        }
        return this.transactions;
    }
        async gatherSignatures() {
        if (this.status >= AtomicTransactionComposerStatus.SIGNED) {
            return this.signedTxns;
        }
        
        const txnsWithSigners = this.buildGroup();
        const txnGroup = txnsWithSigners.map((txnWithSigner) => txnWithSigner.txn);
        const indexesPerSigner = new Map();
        for (let i = 0; i < txnsWithSigners.length; i++) {
            const { signer } = txnsWithSigners[i];
            if (!indexesPerSigner.has(signer)) {
                indexesPerSigner.set(signer, []);
            }
            indexesPerSigner.get(signer).push(i);
        }
        const orderedSigners = Array.from(indexesPerSigner);
        const batchedSigs = await Promise.all(orderedSigners.map(([signer, indexes]) => signer(txnGroup, indexes)));
        const signedTxns = txnsWithSigners.map(() => null);
        for (let signerIndex = 0; signerIndex < orderedSigners.length; signerIndex++) {
            const indexes = orderedSigners[signerIndex][1];
            const sigs = batchedSigs[signerIndex];
            for (let i = 0; i < indexes.length; i++) {
                signedTxns[indexes[i]] = sigs[i];
            }
        }
        if (!signedTxns.every((sig) => sig != null)) {
            throw new Error(`Missing signatures. Got ${signedTxns}`);
        }
        const txIDs = signedTxns.map((stxn, index) => {
            try {
                return transaction_1.decodeSignedTransaction(stxn).txn.txID();
            }
            catch (err) {
                throw new Error(`Cannot decode signed transaction at index ${index}. ${err}`);
            }
        });
        this.signedTxns = signedTxns;
        this.txIDs = txIDs;
        this.status = AtomicTransactionComposerStatus.SIGNED;
        return signedTxns;
    }
        async submit(client) {
        if (this.status > AtomicTransactionComposerStatus.SUBMITTED) {
            throw new Error('Transaction group cannot be resubmitted');
        }
        const stxns = await this.gatherSignatures();
        await client.sendRawTransaction(stxns).do();
        this.status = AtomicTransactionComposerStatus.SUBMITTED;
        return this.txIDs;
    }
        async execute(client, waitRounds) {
        if (this.status === AtomicTransactionComposerStatus.COMMITTED) {
            throw new Error('Transaction group has already been executed successfully');
        }
        const txIDs = await this.submit(client);
        this.status = AtomicTransactionComposerStatus.SUBMITTED;
        const firstMethodCallIndex = this.transactions.findIndex((_, index) => this.methodCalls.has(index));
        const indexToWaitFor = firstMethodCallIndex === -1 ? 0 : firstMethodCallIndex;
        const confirmedTxnInfo = await wait_1.waitForConfirmation(client, txIDs[indexToWaitFor], waitRounds);
        this.status = AtomicTransactionComposerStatus.COMMITTED;
        const confirmedRound = confirmedTxnInfo['confirmed-round'];
        const methodResults = [];
        for (const [txnIndex, method] of this.methodCalls) {
            const txID = txIDs[txnIndex];
            const methodResult = {
                txID,
                rawReturnValue: new Uint8Array(),
            };
            try {
                const pendingInfo = txnIndex === firstMethodCallIndex
                    ? confirmedTxnInfo
                    : 
                        await client.pendingTransactionInformation(txID).do();
                methodResult.txInfo = pendingInfo;
                if (method.returns.type !== 'void') {
                    const logs = pendingInfo.logs || [];
                    if (logs.length === 0) {
                        throw new Error('App call transaction did not log a return value');
                    }
                    const lastLog = Buffer.from(logs[logs.length - 1], 'base64');
                    if (lastLog.byteLength < 4 ||
                        !lastLog.slice(0, 4).equals(RETURN_PREFIX)) {
                        throw new Error('App call transaction did not log a return value');
                    }
                    methodResult.rawReturnValue = new Uint8Array(lastLog.slice(4));
                    methodResult.returnValue = method.returns.type.decode(methodResult.rawReturnValue);
                }
            }
            catch (err) {
                methodResult.decodeError = err;
            }
            methodResults.push(methodResult);
        }
        return {
            confirmedRound,
            txIDs,
            methodResults,
        };
    }
}
exports.AtomicTransactionComposer = AtomicTransactionComposer;
AtomicTransactionComposer.MAX_GROUP_SIZE = 16;

}).call(this)}).call(this,require("buffer").Buffer)
},{"./abi":6,"./group":62,"./makeTxn":74,"./signer":79,"./transaction":80,"./types/transactions/base":85,"./wait":89,"buffer":95}],56:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.algosToMicroalgos = exports.microalgosToAlgos = exports.INVALID_MICROALGOS_ERROR_MSG = void 0;
const MICROALGOS_TO_ALGOS_RATIO = 1e6;
exports.INVALID_MICROALGOS_ERROR_MSG = 'Microalgos should be positive and less than 2^53 - 1.';
function microalgosToAlgos(microalgos) {
    if (microalgos < 0 || !Number.isSafeInteger(microalgos)) {
        throw new Error(exports.INVALID_MICROALGOS_ERROR_MSG);
    }
    return microalgos / MICROALGOS_TO_ALGOS_RATIO;
}
exports.microalgosToAlgos = microalgosToAlgos;
function algosToMicroalgos(algos) {
    const microalgos = algos * MICROALGOS_TO_ALGOS_RATIO;
    return Math.round(microalgos);
}
exports.algosToMicroalgos = algosToMicroalgos;

},{}],57:[function(require,module,exports){
(function (Buffer){(function (){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDryrun = void 0;
const types_1 = require("./client/v2/algod/models/types");
const transactions_1 = require("./types/transactions");
const address_1 = require("./encoding/address");
const defaultAppId = 1380011588;
function decodePrograms(ap) {
    
    ap.params['approval-program'] = Buffer.from(ap.params['approval-program'].toString(), 'base64');
    
    ap.params['clear-state-program'] = Buffer.from(ap.params['clear-state-program'].toString(), 'base64');
    return ap;
}
async function createDryrun({ client, txns, protocolVersion, latestTimestamp, round, sources, }) {
    const appInfos = [];
    const acctInfos = [];
    const apps = [];
    const assets = [];
    const accts = [];
    for (const t of txns) {
        if (t.txn.type === transactions_1.TransactionType.appl) {
            accts.push(address_1.encodeAddress(t.txn.from.publicKey));
            if (t.txn.appAccounts)
                accts.push(...t.txn.appAccounts.map((a) => address_1.encodeAddress(a.publicKey)));
            if (t.txn.appForeignApps)
                apps.push(...t.txn.appForeignApps);
            if (t.txn.appForeignAssets)
                assets.push(...t.txn.appForeignAssets);
            
            if (t.txn.appIndex === 0) {
                appInfos.push(new types_1.Application(defaultAppId, new types_1.ApplicationParams({
                    creator: address_1.encodeAddress(t.txn.from.publicKey),
                    approvalProgram: t.txn.appApprovalProgram,
                    clearStateProgram: t.txn.appClearProgram,
                    localStateSchema: new types_1.ApplicationStateSchema(t.txn.appLocalInts, t.txn.appLocalByteSlices),
                    globalStateSchema: new types_1.ApplicationStateSchema(t.txn.appGlobalInts, t.txn.appGlobalByteSlices),
                })));
            }
            else {
                apps.push(t.txn.appIndex);
                accts.push(address_1.getApplicationAddress(t.txn.appIndex));
            }
        }
    }
    
    const assetPromises = [];
    for (const assetId of [...new Set(assets)]) {
        assetPromises.push(client
            .getAssetByID(assetId)
            .do()
            .then((assetInfo) => {
            accts.push(assetInfo.params.creator);
        }));
    }
    
    await Promise.all(assetPromises);
    
    const appPromises = [];
    for (const appId of [...new Set(apps)]) {
        appPromises.push(client
            .getApplicationByID(appId)
            .do()
            .then((appInfo) => {
            const ai = decodePrograms(appInfo);
            appInfos.push(ai);
            accts.push(ai.params.creator);
        }));
    }
    await Promise.all(appPromises);
    const acctPromises = [];
    for (const acct of [...new Set(accts)]) {
        acctPromises.push(client
            .accountInformation(acct)
            .do()
            .then((acctInfo) => {
            if ('created-apps' in acctInfo) {
                
                acctInfo['created-apps'] = acctInfo['created-apps'].map((app) => decodePrograms(app));
            }
            acctInfos.push(acctInfo);
        }));
    }
    await Promise.all(acctPromises);
    return new types_1.DryrunRequest({
        txns: txns.map((st) => ({ ...st, txn: st.txn.get_obj_for_encoding() })),
        accounts: acctInfos,
        apps: appInfos,
        latestTimestamp,
        round,
        protocolVersion,
        sources,
    });
}
exports.createDryrun = createDryrun;

}).call(this)}).call(this,require("buffer").Buffer)
},{"./client/v2/algod/models/types":27,"./encoding/address":58,"./types/transactions":87,"buffer":95}],58:[function(require,module,exports){
(function (Buffer){(function (){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getApplicationAddress = exports.fromMultisigPreImgAddrs = exports.fromMultisigPreImg = exports.encodeAddress = exports.isValidAddress = exports.decodeAddress = exports.UNEXPECTED_PK_LEN_ERROR_MSG = exports.INVALID_MSIG_PK_ERROR_MSG = exports.INVALID_MSIG_THRESHOLD_ERROR_MSG = exports.INVALID_MSIG_VERSION_ERROR_MSG = exports.CHECKSUM_ADDRESS_ERROR_MSG = exports.MALFORMED_ADDRESS_ERROR_MSG = exports.ALGORAND_ZERO_ADDRESS_STRING = void 0;
const hi_base32_1 = __importDefault(require("hi-base32"));
const nacl = __importStar(require("../nacl/naclWrappers"));
const utils = __importStar(require("../utils/utils"));
const uint64_1 = require("./uint64");
const ALGORAND_ADDRESS_BYTE_LENGTH = 36;
const ALGORAND_CHECKSUM_BYTE_LENGTH = 4;
const ALGORAND_ADDRESS_LENGTH = 58;
exports.ALGORAND_ZERO_ADDRESS_STRING = 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY5HFKQ';

const MULTISIG_PREIMG2ADDR_PREFIX = new Uint8Array([
    77,
    117,
    108,
    116,
    105,
    115,
    105,
    103,
    65,
    100,
    100,
    114,
]);
const APP_ID_PREFIX = Buffer.from('appID');
exports.MALFORMED_ADDRESS_ERROR_MSG = 'address seems to be malformed';
exports.CHECKSUM_ADDRESS_ERROR_MSG = 'wrong checksum for address';
exports.INVALID_MSIG_VERSION_ERROR_MSG = 'invalid multisig version';
exports.INVALID_MSIG_THRESHOLD_ERROR_MSG = 'bad multisig threshold';
exports.INVALID_MSIG_PK_ERROR_MSG = 'bad multisig public key - wrong length';
exports.UNEXPECTED_PK_LEN_ERROR_MSG = 'nacl public key length is not 32 bytes';
function decodeAddress(address) {
    if (typeof address !== 'string' || address.length !== ALGORAND_ADDRESS_LENGTH)
        throw new Error(exports.MALFORMED_ADDRESS_ERROR_MSG);
    
    const decoded = hi_base32_1.default.decode.asBytes(address.toString());
    
    if (decoded.length !== ALGORAND_ADDRESS_BYTE_LENGTH)
        throw new Error(exports.MALFORMED_ADDRESS_ERROR_MSG);
    
    const pk = new Uint8Array(decoded.slice(0, ALGORAND_ADDRESS_BYTE_LENGTH - ALGORAND_CHECKSUM_BYTE_LENGTH));
    const cs = new Uint8Array(decoded.slice(nacl.PUBLIC_KEY_LENGTH, ALGORAND_ADDRESS_BYTE_LENGTH));
    
    const checksum = nacl
        .genericHash(pk)
        .slice(nacl.HASH_BYTES_LENGTH - ALGORAND_CHECKSUM_BYTE_LENGTH, nacl.HASH_BYTES_LENGTH);
    
    if (!utils.arrayEqual(checksum, cs))
        throw new Error(exports.CHECKSUM_ADDRESS_ERROR_MSG);
    return { publicKey: pk, checksum: cs };
}
exports.decodeAddress = decodeAddress;
function isValidAddress(address) {
    
    try {
        decodeAddress(address);
    }
    catch (e) {
        return false;
    }
    return true;
}
exports.isValidAddress = isValidAddress;
function encodeAddress(address) {
    
    const checksum = nacl
        .genericHash(address)
        .slice(nacl.PUBLIC_KEY_LENGTH - ALGORAND_CHECKSUM_BYTE_LENGTH, nacl.PUBLIC_KEY_LENGTH);
    const addr = hi_base32_1.default.encode(utils.concatArrays(address, checksum));
    return addr.toString().slice(0, ALGORAND_ADDRESS_LENGTH); 
}
exports.encodeAddress = encodeAddress;
function fromMultisigPreImg({ version, threshold, pks, }) {
    if (version !== 1 || version > 255 || version < 0) {
        
        throw new Error(exports.INVALID_MSIG_VERSION_ERROR_MSG);
    }
    if (threshold === 0 ||
        pks.length === 0 ||
        threshold > pks.length ||
        threshold > 255) {
        throw new Error(exports.INVALID_MSIG_THRESHOLD_ERROR_MSG);
    }
    const pkLen = ALGORAND_ADDRESS_BYTE_LENGTH - ALGORAND_CHECKSUM_BYTE_LENGTH;
    if (pkLen !== nacl.PUBLIC_KEY_LENGTH) {
        throw new Error(exports.UNEXPECTED_PK_LEN_ERROR_MSG);
    }
    const merged = new Uint8Array(MULTISIG_PREIMG2ADDR_PREFIX.length + 2 + pkLen * pks.length);
    merged.set(MULTISIG_PREIMG2ADDR_PREFIX, 0);
    merged.set([version], MULTISIG_PREIMG2ADDR_PREFIX.length);
    merged.set([threshold], MULTISIG_PREIMG2ADDR_PREFIX.length + 1);
    for (let i = 0; i < pks.length; i++) {
        if (pks[i].length !== pkLen) {
            throw new Error(exports.INVALID_MSIG_PK_ERROR_MSG);
        }
        merged.set(pks[i], MULTISIG_PREIMG2ADDR_PREFIX.length + 2 + i * pkLen);
    }
    return new Uint8Array(nacl.genericHash(merged));
}
exports.fromMultisigPreImg = fromMultisigPreImg;
function fromMultisigPreImgAddrs({ version, threshold, addrs, }) {
    const pks = addrs.map((addr) => decodeAddress(addr).publicKey);
    return encodeAddress(fromMultisigPreImg({ version, threshold, pks }));
}
exports.fromMultisigPreImgAddrs = fromMultisigPreImgAddrs;
function getApplicationAddress(appID) {
    const toBeSigned = utils.concatArrays(APP_ID_PREFIX, uint64_1.encodeUint64(appID));
    const hash = nacl.genericHash(toBeSigned);
    return encodeAddress(new Uint8Array(hash));
}
exports.getApplicationAddress = getApplicationAddress;

}).call(this)}).call(this,require("buffer").Buffer)
},{"../nacl/naclWrappers":78,"../utils/utils":88,"./uint64":61,"buffer":95,"hi-base32":106}],59:[function(require,module,exports){
(function (Buffer){(function (){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bytesToBigInt = exports.bigIntToBytes = void 0;
function bigIntToBytes(bi, size) {
    let hex = bi.toString(16);
    
    if (hex.length !== size * 2) {
        hex = hex.padStart(size * 2, '0');
    }
    const byteArray = new Uint8Array(hex.length / 2);
    for (let i = 0, j = 0; i < hex.length / 2; i++, j += 2) {
        byteArray[i] = parseInt(hex.slice(j, j + 2), 16);
    }
    return byteArray;
}
exports.bigIntToBytes = bigIntToBytes;
function bytesToBigInt(bytes) {
    let res = BigInt(0);
    const buf = Buffer.from(bytes);
    for (let i = 0; i < bytes.length; i++) {
        res = BigInt(Number(buf.readUIntBE(i, 1))) + res * BigInt(256);
    }
    return res;
}
exports.bytesToBigInt = bytesToBigInt;

}).call(this)}).call(this,require("buffer").Buffer)
},{"buffer":95}],60:[function(require,module,exports){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.decode = exports.encode = exports.ERROR_CONTAINS_EMPTY_STRING = void 0;
const msgpack = __importStar(require("algo-msgpack-with-bigint"));

exports.ERROR_CONTAINS_EMPTY_STRING = 'The object contains empty or 0 values. First empty or 0 value encountered during encoding: ';
function containsEmpty(obj) {
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            if (!obj[key] || obj[key].length === 0) {
                return { containsEmpty: true, firstEmptyKey: key };
            }
        }
    }
    return { containsEmpty: false, firstEmptyKey: undefined };
}
function encode(obj) {
    
    const emptyCheck = containsEmpty(obj);
    if (emptyCheck.containsEmpty) {
        throw new Error(exports.ERROR_CONTAINS_EMPTY_STRING + emptyCheck.firstEmptyKey);
    }
    
    const options = { sortKeys: true };
    return msgpack.encode(obj, options);
}
exports.encode = encode;
function decode(buffer) {
    return msgpack.decode(buffer);
}
exports.decode = decode;

},{"algo-msgpack-with-bigint":2}],61:[function(require,module,exports){
(function (Buffer){(function (){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeUint64 = exports.encodeUint64 = void 0;
function encodeUint64(num) {
    const isInteger = typeof num === 'bigint' || Number.isInteger(num);
    if (!isInteger || num < 0 || num > BigInt('0xffffffffffffffff')) {
        throw new Error('Input is not a 64-bit unsigned integer');
    }
    const buf = Buffer.allocUnsafe(8);
    buf.writeBigUInt64BE(BigInt(num));
    return new Uint8Array(buf);
}
exports.encodeUint64 = encodeUint64;
function decodeUint64(data, decodingMode = 'safe') {
    if (decodingMode !== 'safe' &&
        decodingMode !== 'mixed' &&
        decodingMode !== 'bigint') {
        throw new Error(`Unknown decodingMode option: ${decodingMode}`);
    }
    if (data.byteLength === 0 || data.byteLength > 8) {
        throw new Error(`Data has unacceptable length. Expected length is between 1 and 8, got ${data.byteLength}`);
    }
    
    const padding = Buffer.allocUnsafe(8 - data.byteLength);
    padding.fill(0);
    const buf = Buffer.concat([padding, Buffer.from(data)]);
    const num = buf.readBigUInt64BE();
    const isBig = num > Number.MAX_SAFE_INTEGER;
    if (decodingMode === 'safe') {
        if (isBig) {
            throw new Error(`Integer exceeds maximum safe integer: ${num.toString()}. Try decoding with "mixed" or "safe" decodingMode.`);
        }
        return Number(num);
    }
    if (decodingMode === 'mixed' && !isBig) {
        return Number(num);
    }
    return num;
}
exports.decodeUint64 = decodeUint64;

}).call(this)}).call(this,require("buffer").Buffer)
},{"buffer":95}],62:[function(require,module,exports){
(function (Buffer){(function (){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.assignGroupID = exports.computeGroupID = exports.TxGroup = void 0;
const txnBuilder = __importStar(require("./transaction"));
const nacl = __importStar(require("./nacl/naclWrappers"));
const encoding = __importStar(require("./encoding/encoding"));
const address = __importStar(require("./encoding/address"));
const utils = __importStar(require("./utils/utils"));
const ALGORAND_MAX_TX_GROUP_SIZE = 16;
class TxGroup {
    constructor(hashes) {
        this.name = 'Transaction group';
        this.tag = Buffer.from('TG');
        if (hashes.length > ALGORAND_MAX_TX_GROUP_SIZE) {
            const errorMsg = `${hashes.length.toString()} transactions grouped together but max group size is ${ALGORAND_MAX_TX_GROUP_SIZE.toString()}`;
            throw Error(errorMsg);
        }
        this.txGroupHashes = hashes;
    }
    
    get_obj_for_encoding() {
        const txgroup = {
            txlist: this.txGroupHashes,
        };
        return txgroup;
    }
    
    static from_obj_for_encoding(txgroupForEnc) {
        const txn = Object.create(this.prototype);
        txn.name = 'Transaction group';
        txn.tag = Buffer.from('TG');
        txn.txGroupHashes = [];
        for (const hash of txgroupForEnc.txlist) {
            txn.txGroupHashes.push(Buffer.from(hash));
        }
        return txn;
    }
    toByte() {
        return encoding.encode(this.get_obj_for_encoding());
    }
}
exports.TxGroup = TxGroup;
function computeGroupID(txns) {
    const hashes = [];
    for (const txn of txns) {
        const tx = txnBuilder.instantiateTxnIfNeeded(txn);
        hashes.push(tx.rawTxID());
    }
    const txgroup = new TxGroup(hashes);
    const bytes = txgroup.toByte();
    const toBeHashed = Buffer.from(utils.concatArrays(txgroup.tag, bytes));
    const gid = nacl.genericHash(toBeHashed);
    return Buffer.from(gid);
}
exports.computeGroupID = computeGroupID;
function assignGroupID(txns, from) {
    const gid = computeGroupID(txns);
    const result = [];
    for (const txn of txns) {
        const tx = txnBuilder.instantiateTxnIfNeeded(txn);
        if (!from || address.encodeAddress(tx.from.publicKey) === from) {
            tx.group = gid;
            result.push(tx);
        }
    }
    return result;
}
exports.assignGroupID = assignGroupID;
exports.default = TxGroup;

}).call(this)}).call(this,require("buffer").Buffer)
},{"./encoding/address":58,"./encoding/encoding":60,"./nacl/naclWrappers":78,"./transaction":80,"./utils/utils":88,"buffer":95}],63:[function(require,module,exports){
(function (Buffer){(function (){
const address = require('../encoding/address');
const encoding = require('../encoding/encoding');
const group = require('../group');
const logic = require('../logic/logic');
const logicSig = require('../logicsig');
const nacl = require('../nacl/naclWrappers');
const templates = require('./templates');
const transaction = require('../transaction');
class DynamicFee {
        constructor(receiver, amount, firstValid, lastValid, closeRemainder, lease) {
        
        if (!Number.isSafeInteger(amount) || amount < 0)
            throw Error('amount must be a positive number and smaller than 2^53-1');
        if (!Number.isSafeInteger(firstValid) || firstValid < 0)
            throw Error('firstValid must be a positive number and smaller than 2^53-1');
        if (!Number.isSafeInteger(lastValid) || lastValid < 0)
            throw Error('lastValid must be a positive number and smaller than 2^53-1');
        if (typeof closeRemainder === 'undefined') {
            
            closeRemainder = address.ALGORAND_ZERO_ADDRESS_STRING;
        }
        if (typeof lease === 'undefined') {
            const leaseBytes = nacl.randomBytes(32);
            
            lease = Buffer.from(leaseBytes).toString('base64');
        }
        const referenceProgramB64 = 'ASAFAgEHBgUmAyD+vKC7FEpaTqe0OKRoGsgObKEFvLYH/FZTJclWlfaiEyDmmpYeby1feshmB5JlUr6YI17TM2PKiJGLuck4qRW2+SB/g7Flf/H8U7ktwYFIodZd/C1LH6PWdyhK3dIAEm2QaTIEIhIzABAjEhAzAAcxABIQMwAIMQESEDEWIxIQMRAjEhAxBygSEDEJKRIQMQgkEhAxAiUSEDEEIQQSEDEGKhIQ';
        const referenceProgramBytes = Buffer.from(referenceProgramB64, 'base64');
        const referenceOffsets = [
            5 ,
            6 ,
            7 ,
            11 ,
            44 ,
            76,
        ];
        const injectionVector = [
            amount,
            firstValid,
            lastValid,
            receiver,
            closeRemainder,
            lease,
        ];
        const injectionTypes = [
            templates.valTypes.INT,
            templates.valTypes.INT,
            templates.valTypes.INT,
            templates.valTypes.ADDRESS,
            templates.valTypes.ADDRESS,
            templates.valTypes.BASE64,
        ];
        const injectedBytes = templates.inject(referenceProgramBytes, referenceOffsets, injectionVector, injectionTypes);
        this.programBytes = injectedBytes;
        const lsig = new logicSig.LogicSig(injectedBytes, undefined);
        this.address = lsig.address();
    }
        getProgram() {
        return this.programBytes;
    }
        getAddress() {
        return this.address;
    }
}
function signDynamicFee(contract, secretKey, genesisHash) {
    const programOutputs = logic.readProgram(contract, undefined);
    const ints = programOutputs[0];
    const byteArrays = programOutputs[1];
    const keys = nacl.keyPairFromSecretKey(secretKey);
    const from = address.encodeAddress(keys.publicKey);
    const to = address.encodeAddress(byteArrays[0]);
    const fee = 0;
    const amount = ints[2];
    const closeRemainderTo = address.encodeAddress(byteArrays[1]);
    const firstRound = ints[3];
    const lastRound = ints[4];
    const lease = new Uint8Array(byteArrays[2]);
    const txn = {
        from,
        to,
        fee,
        amount,
        closeRemainderTo,
        firstRound,
        lastRound,
        genesisHash,
        type: 'pay',
        lease,
    };
    const lsig = new logicSig.LogicSig(contract, undefined);
    lsig.sign(secretKey);
    return { txn, lsig };
}
function getDynamicFeeTransactions(txn, lsig, privateKey, fee) {
    if (!lsig.verify(address.decodeAddress(txn.from).publicKey)) {
        throw new Error('invalid signature');
    }
    txn.fee = fee;
    if (txn.fee < transaction.ALGORAND_MIN_TX_FEE) {
        txn.fee = transaction.ALGORAND_MIN_TX_FEE;
    }
    const keys = nacl.keyPairFromSecretKey(privateKey);
    const from = address.encodeAddress(keys.publicKey);
    
    const { lease } = txn;
    delete txn.lease;
    const txnObj = new transaction.Transaction(txn);
    txnObj.addLease(lease, fee);
    const feePayTxn = {
        from,
        to: txn.from,
        fee,
        amount: txnObj.fee,
        firstRound: txn.firstRound,
        lastRound: txn.lastRound,
        genesisHash: txn.genesisHash,
        type: 'pay',
    };
    const feePayTxnObj = new transaction.Transaction(feePayTxn);
    feePayTxnObj.addLease(lease, fee);
    const txnGroup = group.assignGroupID([feePayTxnObj, txnObj], undefined);
    const feePayTxnWithGroup = txnGroup[0];
    const txnObjWithGroup = txnGroup[1];
    const lstx = {
        lsig: lsig.get_obj_for_encoding(),
        txn: txnObjWithGroup.get_obj_for_encoding(),
    };
    const stx1 = feePayTxnWithGroup.signTxn(privateKey);
    const stx2 = encoding.encode(lstx);
    const concatStx = new Uint8Array(stx1.length + stx2.length);
    concatStx.set(stx1);
    concatStx.set(stx2, stx1.length);
    return concatStx;
}
module.exports = {
    DynamicFee,
    getDynamicFeeTransactions,
    signDynamicFee,
};

}).call(this)}).call(this,require("buffer").Buffer)
},{"../encoding/address":58,"../encoding/encoding":60,"../group":62,"../logic/logic":71,"../logicsig":72,"../nacl/naclWrappers":78,"../transaction":80,"./templates":69,"buffer":95}],64:[function(require,module,exports){
(function (Buffer){(function (){
const sha256 = require('js-sha256');
const { keccak256 } = require('js-sha3');
const logic = require('../logic/logic');
const logicSig = require('../logicsig');
const templates = require('./templates');
const transaction = require('../transaction');
class HTLC {
        constructor(owner, receiver, hashFunction, hashImage, expiryRound, maxFee) {
        
        if (!Number.isSafeInteger(expiryRound) || expiryRound < 0)
            throw Error('expiryRound must be a positive number and smaller than 2^53-1');
        if (!Number.isSafeInteger(maxFee) || maxFee < 0)
            throw Error('maxFee must be a positive number and smaller than 2^53-1');
        let referenceProgramB64 = '';
        if (hashFunction === 'sha256') {
            referenceProgramB64 =
                'ASAECAEACSYDIOaalh5vLV96yGYHkmVSvpgjXtMzY8qIkYu5yTipFbb5IH+DsWV/8fxTuS3BgUih1l38LUsfo9Z3KErd0gASbZBpIP68oLsUSlpOp7Q4pGgayA5soQW8tgf8VlMlyVaV9qITMQEiDjEQIxIQMQcyAxIQMQgkEhAxCSgSLQEpEhAxCSoSMQIlDRAREA==';
        }
        else if (hashFunction === 'keccak256') {
            referenceProgramB64 =
                'ASAECAEACSYDIOaalh5vLV96yGYHkmVSvpgjXtMzY8qIkYu5yTipFbb5IH+DsWV/8fxTuS3BgUih1l38LUsfo9Z3KErd0gASbZBpIP68oLsUSlpOp7Q4pGgayA5soQW8tgf8VlMlyVaV9qITMQEiDjEQIxIQMQcyAxIQMQgkEhAxCSgSLQIpEhAxCSoSMQIlDRAREA==';
        }
        else {
            throw Error('hash function unrecognized');
        }
        
        const hashImageBytes = Buffer.from(hashImage, 'base64');
        if (hashImageBytes.length !== 32)
            throw Error('hash image must be 32 bytes');
        const referenceProgramBytes = Buffer.from(referenceProgramB64, 'base64');
        const referenceOffsets = [
            3 ,
            6 ,
            10 ,
            42 ,
            76,
        ];
        const injectionVector = [maxFee, expiryRound, receiver, hashImage, owner];
        const injectionTypes = [
            templates.valTypes.INT,
            templates.valTypes.INT,
            templates.valTypes.ADDRESS,
            templates.valTypes.BASE64,
            templates.valTypes.ADDRESS,
        ];
        const injectedBytes = templates.inject(referenceProgramBytes, referenceOffsets, injectionVector, injectionTypes);
        this.programBytes = injectedBytes;
        const lsig = new logicSig.LogicSig(injectedBytes, undefined);
        this.address = lsig.address();
    }
        getProgram() {
        return this.programBytes;
    }
        getAddress() {
        return this.address;
    }
}
function signTransactionWithHTLCUnlock(contract, txn, preImageAsBase64) {
    const preImageBytes = Buffer.from(preImageAsBase64, 'base64');
    
    const readResult = logic.readProgram(contract, undefined);
    const ints = readResult[0];
    const byteArrays = readResult[1];
    const expectedHashedOutput = byteArrays[1];
    const hashFunction = contract[contract.length - 15];
    if (hashFunction === 1) {
        const hash = sha256.create();
        hash.update(preImageBytes);
        const actualHashedOutput = Buffer.from(hash.hex(), 'hex');
        if (!actualHashedOutput.equals(expectedHashedOutput)) {
            throw new Error('sha256 hash of preimage did not match stored contract hash');
        }
    }
    else if (hashFunction === 2) {
        const hash = keccak256.create();
        hash.update(preImageBytes);
        const actualHashedOutput = Buffer.from(hash.hex(), 'hex');
        if (!actualHashedOutput.equals(expectedHashedOutput)) {
            throw new Error('keccak256 hash of preimage did not match stored contract hash');
        }
    }
    else {
        throw new Error('hash function in contract unrecognized');
    }
    const args = [preImageBytes]; 
    const lsig = new logicSig.LogicSig(contract, args);
    
    
    delete txn.to;
    const maxFee = ints[0];
    
    const tempTxn = new transaction.Transaction(txn);
    if (tempTxn.fee > maxFee) {
        throw new Error(`final fee of payment transaction${tempTxn.fee.toString()}greater than transaction max fee${maxFee.toString()}`);
    }
    return logicSig.signLogicSigTransaction(txn, lsig);
}
module.exports = {
    HTLC,
    signTransactionWithHTLCUnlock,
};

}).call(this)}).call(this,require("buffer").Buffer)
},{"../logic/logic":71,"../logicsig":72,"../transaction":80,"./templates":69,"buffer":95,"js-sha256":108,"js-sha3":90}],65:[function(require,module,exports){
const dynamicFeeTemplate = require('./dynamicfee');
const htlcTemplate = require('./htlc');
const limitOrderTemplate = require('./limitorder');
const splitTemplate = require('./split');
const periodicPayTemplate = require('./periodicpayment');
module.exports = {
    DynamicFee: dynamicFeeTemplate.DynamicFee,
    getDynamicFeeTransactions: dynamicFeeTemplate.getDynamicFeeTransactions,
    signDynamicFee: dynamicFeeTemplate.signDynamicFee,
    HTLC: htlcTemplate.HTLC,
    signTransactionWithHTLCUnlock: htlcTemplate.signTransactionWithHTLCUnlock,
    LimitOrder: limitOrderTemplate.LimitOrder,
    getSwapAssetsTransaction: limitOrderTemplate.getSwapAssetsTransaction,
    Split: splitTemplate.Split,
    getSplitFundsTransaction: splitTemplate.getSplitFundsTransaction,
    PeriodicPayment: periodicPayTemplate.PeriodicPayment,
    getPeriodicPaymentWithdrawalTransaction: periodicPayTemplate.getPeriodicPaymentWithdrawalTransaction,
};

},{"./dynamicfee":63,"./htlc":64,"./limitorder":66,"./periodicpayment":67,"./split":68}],66:[function(require,module,exports){
(function (Buffer){(function (){
const address = require('../encoding/address');
const makeTxn = require('../makeTxn');
const group = require('../group');
const logic = require('../logic/logic');
const logicSig = require('../logicsig');
const nacl = require('../nacl/naclWrappers');
const templates = require('./templates');
const utils = require('../utils/utils');
class LimitOrder {
        constructor(owner, assetid, ratn, ratd, expiryRound, minTrade, maxFee) {
        
        if (!Number.isSafeInteger(assetid) || assetid < 0)
            throw Error('assetid must be a positive number and smaller than 2^53-1');
        if (!Number.isSafeInteger(ratn) || ratn < 0)
            throw Error('ratn must be a positive number and smaller than 2^53-1');
        if (!Number.isSafeInteger(ratd) || ratd < 0)
            throw Error('ratd must be a positive number and smaller than 2^53-1');
        if (!Number.isSafeInteger(expiryRound) || expiryRound < 0)
            throw Error('expiryRound must be a positive number and smaller than 2^53-1');
        if (!Number.isSafeInteger(minTrade) || minTrade < 0)
            throw Error('minTrade must be a positive number and smaller than 2^53-1');
        if (!Number.isSafeInteger(maxFee) || maxFee < 0)
            throw Error('maxFee must be a positive number and smaller than 2^53-1');
        const referenceProgramB64 = 'ASAKAAEFAgYEBwgJCiYBIP68oLsUSlpOp7Q4pGgayA5soQW8tgf8VlMlyVaV9qITMRYiEjEQIxIQMQEkDhAyBCMSQABVMgQlEjEIIQQNEDEJMgMSEDMBECEFEhAzAREhBhIQMwEUKBIQMwETMgMSEDMBEiEHHTUCNQExCCEIHTUENQM0ATQDDUAAJDQBNAMSNAI0BA8QQAAWADEJKBIxAiEJDRAxBzIDEhAxCCISEBA=';
        const referenceProgramBytes = Buffer.from(referenceProgramB64, 'base64');
        const referenceOffsets = [
            5 ,
            7 ,
            9 ,
            10 ,
            11 ,
            12 ,
            16,
        ];
        const injectionVector = [
            maxFee,
            minTrade,
            assetid,
            ratd,
            ratn,
            expiryRound,
            owner,
        ];
        const injectionTypes = [
            templates.valTypes.INT,
            templates.valTypes.INT,
            templates.valTypes.INT,
            templates.valTypes.INT,
            templates.valTypes.INT,
            templates.valTypes.INT,
            templates.valTypes.ADDRESS,
        ];
        const injectedBytes = templates.inject(referenceProgramBytes, referenceOffsets, injectionVector, injectionTypes);
        this.programBytes = injectedBytes;
        const lsig = new logicSig.LogicSig(injectedBytes, undefined);
        this.address = lsig.address();
        this.owner = owner;
        this.assetid = assetid;
    }
        getProgram() {
        return this.programBytes;
    }
        getAddress() {
        return this.address;
    }
}
function getSwapAssetsTransaction(contract, assetAmount, microAlgoAmount, secretKey, fee, firstRound, lastRound, genesisHash) {
    const buyerKeyPair = nacl.keyPairFromSecretKey(secretKey);
    const buyerAddr = address.encodeAddress(buyerKeyPair.publicKey);
    const programOutputs = logic.readProgram(contract, undefined);
    const ints = programOutputs[0];
    const byteArrays = programOutputs[1];
    let noCloseRemainder;
    let noAssetRevocationTarget;
    const contractAssetID = ints[6];
    const contractOwner = address.encodeAddress(byteArrays[0]);
    const lsig = logicSig.makeLogicSig(contract, undefined);
    const contractAddress = lsig.address();
    const algosForAssets = makeTxn.makePaymentTxn(contractAddress, buyerAddr, fee, microAlgoAmount, noCloseRemainder, firstRound, lastRound, undefined, genesisHash, undefined);
    const assetsForAlgos = makeTxn.makeAssetTransferTxn(buyerAddr, contractOwner, noCloseRemainder, noAssetRevocationTarget, fee, assetAmount, firstRound, lastRound, undefined, genesisHash, undefined, contractAssetID);
    const txns = [algosForAssets, assetsForAlgos];
    const txGroup = group.assignGroupID(txns);
    const ratd = ints[7];
    const ratn = ints[8];
    if (assetAmount * ratd < microAlgoAmount * ratn) {
        throw new Error(`bad payment ratio, ${assetAmount.toString()}*${ratd.toString()} !>= ${microAlgoAmount.toString()}*${ratn.toString()}`);
    }
    const minTrade = ints[4];
    if (microAlgoAmount < minTrade) {
        throw new Error(`payment amount ${microAlgoAmount.toString()} less than minimum trade ${minTrade.toString()}`);
    }
    const maxFee = ints[2];
    if (txGroup[0].fee > maxFee) {
        throw new Error(`final fee of payment transaction ${txGroup[0].fee.toString()} greater than transaction max fee ${maxFee.toString()}`);
    }
    if (txGroup[1].fee > maxFee) {
        throw new Error(`final fee of asset transaction ${txGroup[1].fee.toString()} greater than transaction max fee ${maxFee.toString()}`);
    }
    const algosForAssetsSigned = logicSig.signLogicSigTransactionObject(txGroup[0], lsig);
    const assetsForAlgosSigned = txGroup[1].signTxn(secretKey);
    return utils.concatArrays(algosForAssetsSigned.blob, assetsForAlgosSigned);
}
module.exports = {
    LimitOrder,
    getSwapAssetsTransaction,
};

}).call(this)}).call(this,require("buffer").Buffer)
},{"../encoding/address":58,"../group":62,"../logic/logic":71,"../logicsig":72,"../makeTxn":74,"../nacl/naclWrappers":78,"../utils/utils":88,"./templates":69,"buffer":95}],67:[function(require,module,exports){
(function (Buffer){(function (){
const address = require('../encoding/address');
const makeTxn = require('../makeTxn');
const logic = require('../logic/logic');
const logicSig = require('../logicsig');
const nacl = require('../nacl/naclWrappers');
const templates = require('./templates');
class PeriodicPayment {
        constructor(receiver, amount, withdrawalWindow, period, expiryRound, maxFee, lease) {
        
        this.receiver = receiver;
        if (!Number.isSafeInteger(amount) || amount < 0)
            throw Error('amount must be a positive number and smaller than 2^53-1');
        this.amount = amount;
        if (!Number.isSafeInteger(withdrawalWindow) || withdrawalWindow < 0)
            throw Error('withdrawalWindow must be a positive number and smaller than 2^53-1');
        this.withdrawalWindow = withdrawalWindow;
        if (!Number.isSafeInteger(period) || period < 0)
            throw Error('period must be a positive number and smaller than 2^53-1');
        this.period = period;
        if (!Number.isSafeInteger(expiryRound) || expiryRound < 0)
            throw Error('expiryRound must be a positive number and smaller than 2^53-1');
        this.expiryRound = expiryRound;
        if (!Number.isSafeInteger(maxFee) || maxFee < 0)
            throw Error('maxFee must be a positive number and smaller than 2^53-1');
        this.maxFee = maxFee;
        if (lease === undefined) {
            const leaseBytes = nacl.randomBytes(32);
            this.lease = Buffer.from(leaseBytes).toString('base64');
        }
        else {
            this.lease = lease;
        }
        this.programBytes = this.getProgram();
        const lsig = new logicSig.LogicSig(this.programBytes, undefined);
        this.address = lsig.address();
    }
        getProgram() {
        const referenceProgramB64 = 'ASAHAQYFAAQDByYCIAECAwQFBgcIAQIDBAUGBwgBAgMEBQYHCAECAwQFBgcIIJKvkYTkEzwJf2arzJOxERsSogG9nQzKPkpIoc4TzPTFMRAiEjEBIw4QMQIkGCUSEDEEIQQxAggSEDEGKBIQMQkyAxIxBykSEDEIIQUSEDEJKRIxBzIDEhAxAiEGDRAxCCUSEBEQ';
        const referenceProgramBytes = Buffer.from(referenceProgramB64, 'base64');
        const referenceOffsets = [
            4 ,
            5 ,
            7 ,
            8 ,
            9 ,
            12 ,
            46,
        ];
        const injectionVector = [
            this.maxFee,
            this.period,
            this.withdrawalWindow,
            this.amount,
            this.expiryRound,
            this.lease,
            this.receiver,
        ];
        const injectionTypes = [
            templates.valTypes.INT,
            templates.valTypes.INT,
            templates.valTypes.INT,
            templates.valTypes.INT,
            templates.valTypes.INT,
            templates.valTypes.BASE64,
            templates.valTypes.ADDRESS,
        ];
        return templates.inject(referenceProgramBytes, referenceOffsets, injectionVector, injectionTypes);
    }
        getAddress() {
        return this.address;
    }
}
function getPeriodicPaymentWithdrawalTransaction(contract, fee, firstValid, genesisHash) {
    const readResult = logic.readProgram(contract, undefined);
    const ints = readResult[0];
    const byteArrays = readResult[1];
    const period = ints[2];
    const duration = ints[4];
    const amount = ints[5];
    if (firstValid % period !== 0) {
        throw new Error(`firstValid round ${firstValid.toString()} was not a multiple of contract period ${period.toString()}`);
    }
    
    const receiverBytes = byteArrays[1];
    const receiver = address.encodeAddress(receiverBytes);
    
    const leaseBuffer = byteArrays[0];
    const lease = new Uint8Array(leaseBuffer);
    const lastValid = firstValid + duration;
    const to = receiver;
    let noCloseRemainder;
    let noNote;
    const lsig = logicSig.makeLogicSig(contract, undefined);
    const from = lsig.address();
    const txn = {
        from,
        to,
        fee,
        amount,
        closeRemainderTo: noCloseRemainder,
        firstRound: firstValid,
        lastRound: lastValid,
        note: noNote,
        genesisHash,
        genesisID: '',
        type: 'pay',
        lease,
    };
    
    const tempTxn = makeTxn.makePaymentTxn(from, to, fee, amount, noCloseRemainder, firstValid, lastValid, noNote, genesisHash, '');
    if (tempTxn.fee > ints[1]) {
        throw new Error(`final fee of payment transaction${tempTxn.fee.toString()}greater than transaction max fee${ints[1].toString()}`);
    }
    return logicSig.signLogicSigTransaction(txn, lsig);
}
module.exports = {
    PeriodicPayment,
    getPeriodicPaymentWithdrawalTransaction,
};

}).call(this)}).call(this,require("buffer").Buffer)
},{"../encoding/address":58,"../logic/logic":71,"../logicsig":72,"../makeTxn":74,"../nacl/naclWrappers":78,"./templates":69,"buffer":95}],68:[function(require,module,exports){
(function (Buffer){(function (){
const address = require('../encoding/address');
const makeTxn = require('../makeTxn');
const group = require('../group');
const logicsig = require('../logicsig');
const logic = require('../logic/logic');
const templates = require('./templates');
const utils = require('../utils/utils');
class Split {
        constructor(owner, receiverOne, receiverTwo, rat1, rat2, expiryRound, minPay, maxFee) {
        
        if (!Number.isSafeInteger(rat2) || rat2 < 0)
            throw Error('rat2 must be a positive number and smaller than 2^53-1');
        if (!Number.isSafeInteger(rat1) || rat1 < 0)
            throw Error('rat1 must be a positive number and smaller than 2^53-1');
        if (!Number.isSafeInteger(expiryRound) || expiryRound < 0)
            throw Error('expiryRound must be a positive number and smaller than 2^53-1');
        if (!Number.isSafeInteger(minPay) || minPay < 0)
            throw Error('minPay must be a positive number and smaller than 2^53-1');
        if (!Number.isSafeInteger(maxFee) || maxFee < 0)
            throw Error('maxFee must be a positive number and smaller than 2^53-1');
        const referenceProgramB64 = 'ASAIAQUCAAYHCAkmAyCztwQn0+DycN+vsk+vJWcsoz/b7NDS6i33HOkvTpf+YiC3qUpIgHGWE8/1LPh9SGCalSN7IaITeeWSXbfsS5wsXyC4kBQ38Z8zcwWVAym4S8vpFB/c0XC6R4mnPi9EBADsPDEQIhIxASMMEDIEJBJAABkxCSgSMQcyAxIQMQglEhAxAiEEDRAiQAAuMwAAMwEAEjEJMgMSEDMABykSEDMBByoSEDMACCEFCzMBCCEGCxIQMwAIIQcPEBA=';
        const referenceProgramBytes = Buffer.from(referenceProgramB64, 'base64');
        const referenceOffsets = [
            4 ,
            7 ,
            8 ,
            9 ,
            10 ,
            14 ,
            47 ,
            80,
        ];
        const injectionVector = [
            maxFee,
            expiryRound,
            rat2,
            rat1,
            minPay,
            owner,
            receiverOne,
            receiverTwo,
        ];
        const injectionTypes = [
            templates.valTypes.INT,
            templates.valTypes.INT,
            templates.valTypes.INT,
            templates.valTypes.INT,
            templates.valTypes.INT,
            templates.valTypes.ADDRESS,
            templates.valTypes.ADDRESS,
            templates.valTypes.ADDRESS,
        ];
        const injectedBytes = templates.inject(referenceProgramBytes, referenceOffsets, injectionVector, injectionTypes);
        this.programBytes = injectedBytes;
        const lsig = logicsig.makeLogicSig(injectedBytes, undefined);
        this.address = lsig.address();
    }
        getProgram() {
        return this.programBytes;
    }
        getAddress() {
        return this.address;
    }
}
function getSplitFundsTransaction(contract, amount, firstRound, lastRound, fee, genesisHash) {
    const programOutputs = logic.readProgram(contract, undefined);
    const ints = programOutputs[0];
    const byteArrays = programOutputs[1];
    let rat2 = ints[6];
    let rat1 = ints[5];
    let amountForReceiverOne = 0;
    
    const gcdFn = (a, b) => {
        if (typeof a !== 'number' || typeof b !== 'number')
            throw new Error('gcd operates only on positive integers');
        if (!b) {
            return a;
        }
        return gcdFn(b, a % b);
    };
    const gcd = gcdFn(rat2, rat1);
    rat2 = Math.floor(rat2 / gcd);
    rat1 = Math.floor(rat1 / gcd);
    const ratio = rat1 / rat2;
    amountForReceiverOne = Math.round(amount / (1 + ratio));
    const amountForReceiverTwo = amount - amountForReceiverOne;
    if (rat1 * amountForReceiverOne !== rat2 * amountForReceiverTwo) {
        throw Error('could not split funds in a way that satisfied the contract ratio');
    }
    const logicSig = logicsig.makeLogicSig(contract, undefined); 
    const from = logicSig.address();
    const receiverOne = address.encodeAddress(byteArrays[1]);
    const receiverTwo = address.encodeAddress(byteArrays[2]);
    const tx1 = makeTxn.makePaymentTxn(from, receiverOne, fee, amountForReceiverOne, undefined, firstRound, lastRound, undefined, genesisHash);
    const tx2 = makeTxn.makePaymentTxn(from, receiverTwo, fee, amountForReceiverTwo, undefined, firstRound, lastRound, undefined, genesisHash);
    const txns = [tx1, tx2];
    const txGroup = group.assignGroupID(txns);
    const signedTxns = txGroup.map((txn) => logicsig.signLogicSigTransactionObject(txn, logicsig).blob);
    return utils.concatArrays(signedTxns[0], signedTxns[1]);
}
module.exports = {
    Split,
    getSplitFundsTransaction,
};

}).call(this)}).call(this,require("buffer").Buffer)
},{"../encoding/address":58,"../group":62,"../logic/logic":71,"../logicsig":72,"../makeTxn":74,"../utils/utils":88,"./templates":69,"buffer":95}],69:[function(require,module,exports){
(function (Buffer){(function (){
const address = require('../encoding/address');
function putUvarint(buf, x) {
    let i = 0;
    while (x > 0x80) {
        buf.push((x & 0xff) | 0x80);
        
        x >>= 7;
        i += 1;
    }
    buf.push(x & 0xff);
    return i + 1;
}
const valTypes = {
    INT: 1,
    ADDRESS: 2,
    BASE64: 3,
};
function inject(orig, offsets, values, valueTypes) {
    if (offsets.length !== values.length ||
        offsets.length !== valueTypes.length) {
        throw new Error('Lengths do not match');
    }
    let res = orig;
    function replace(arr, newVal, offset, placeholderLength) {
        const beforeReplacement = arr.slice(0, offset);
        const afterReplacement = arr.slice(offset + placeholderLength, arr.length);
        const chunks = [beforeReplacement, Buffer.from(newVal), afterReplacement];
        return Buffer.concat(chunks);
    }
    for (let i = 0; i < offsets.length; i++) {
        let decodedLength = 0;
        let val = values[i];
        const valType = valueTypes[i];
        switch (valType) {
            case valTypes.INT:
                
                const intBuf = [];
                decodedLength = putUvarint(intBuf, val);
                res = replace(res, intBuf, offsets[i], 1);
                break;
            case valTypes.ADDRESS:
                val = address.decodeAddress(val);
                res = replace(res, val.publicKey, offsets[i], 32);
                break;
            case valTypes.BASE64:
                
                const lenBuf = [];
                val = Buffer.from(val, 'base64');
                putUvarint(lenBuf, val.length);
                val = Buffer.concat([Buffer.from(lenBuf), val]);
                res = replace(res, val, offsets[i], 33);
                break;
            default:
                throw new Error('unrecognized value type');
        }
        if (decodedLength !== 0) {
            for (let o = 0; o < offsets.length; o++) {
                
                offsets[o] += decodedLength - 1;
            }
        }
    }
    return res;
}
module.exports = { inject, valTypes };

}).call(this)}).call(this,require("buffer").Buffer)
},{"../encoding/address":58,"buffer":95}],70:[function(require,module,exports){
module.exports={
    "EvalMaxVersion": 6,
    "LogicSigVersion": 5,
    "Ops": [
        {
            "Opcode": 0,
            "Name": "err",
            "Cost": 1,
            "Size": 1,
            "Doc": "Fail immediately.",
            "Groups": ["Flow Control"]
        },
        {
            "Opcode": 1,
            "Name": "sha256",
            "Args": "B",
            "Returns": "B",
            "Cost": 35,
            "Size": 1,
            "Doc": "SHA256 hash of value A, yields [32]byte",
            "Groups": ["Arithmetic"]
        },
        {
            "Opcode": 2,
            "Name": "keccak256",
            "Args": "B",
            "Returns": "B",
            "Cost": 130,
            "Size": 1,
            "Doc": "Keccak256 hash of value A, yields [32]byte",
            "Groups": ["Arithmetic"]
        },
        {
            "Opcode": 3,
            "Name": "sha512_256",
            "Args": "B",
            "Returns": "B",
            "Cost": 45,
            "Size": 1,
            "Doc": "SHA512_256 hash of value A, yields [32]byte",
            "Groups": ["Arithmetic"]
        },
        {
            "Opcode": 4,
            "Name": "ed25519verify",
            "Args": "BBB",
            "Returns": "U",
            "Cost": 1900,
            "Size": 1,
            "Doc": "for (data A, signature B, pubkey C) verify the signature of (\"ProgData\" || program_hash || data) against the pubkey =\u003e {0 or 1}",
            "DocExtra": "The 32 byte public key is the last element on the stack, preceded by the 64 byte signature at the second-to-last element on the stack, preceded by the data which was signed at the third-to-last element on the stack.",
            "Groups": ["Arithmetic"]
        },
        {
            "Opcode": 5,
            "Name": "ecdsa_verify",
            "Args": "BBBBB",
            "Returns": "U",
            "Cost": 1700,
            "Size": 2,
            "Doc": "for (data A, signature B, C and pubkey D, E) verify the signature of the data against the pubkey =\u003e {0 or 1}",
            "DocExtra": "The 32 byte Y-component of a public key is the last element on the stack, preceded by X-component of a pubkey, preceded by S and R components of a signature, preceded by the data that is fifth element on the stack. All values are big-endian encoded. The signed data must be 32 bytes long, and signatures in lower-S form are only accepted.",
            "ImmediateNote": "{uint8 curve index}",
            "Groups": ["Arithmetic"]
        },
        {
            "Opcode": 6,
            "Name": "ecdsa_pk_decompress",
            "Args": "B",
            "Returns": "BB",
            "Cost": 650,
            "Size": 2,
            "Doc": "decompress pubkey A into components X, Y",
            "DocExtra": "The 33 byte public key in a compressed form to be decompressed into X and Y (top) components. All values are big-endian encoded.",
            "ImmediateNote": "{uint8 curve index}",
            "Groups": ["Arithmetic"]
        },
        {
            "Opcode": 7,
            "Name": "ecdsa_pk_recover",
            "Args": "BUBB",
            "Returns": "BB",
            "Cost": 2000,
            "Size": 2,
            "Doc": "for (data A, recovery id B, signature C, D) recover a public key",
            "DocExtra": "S (top) and R elements of a signature, recovery id and data (bottom) are expected on the stack and used to deriver a public key. All values are big-endian encoded. The signed data must be 32 bytes long.",
            "ImmediateNote": "{uint8 curve index}",
            "Groups": ["Arithmetic"]
        },
        {
            "Opcode": 8,
            "Name": "+",
            "Args": "UU",
            "Returns": "U",
            "Cost": 1,
            "Size": 1,
            "Doc": "A plus B. Fail on overflow.",
            "DocExtra": "Overflow is an error condition which halts execution and fails the transaction. Full precision is available from `addw`.",
            "Groups": ["Arithmetic"]
        },
        {
            "Opcode": 9,
            "Name": "-",
            "Args": "UU",
            "Returns": "U",
            "Cost": 1,
            "Size": 1,
            "Doc": "A minus B. Fail if B \u003e A.",
            "Groups": ["Arithmetic"]
        },
        {
            "Opcode": 10,
            "Name": "/",
            "Args": "UU",
            "Returns": "U",
            "Cost": 1,
            "Size": 1,
            "Doc": "A divided by B (truncated division). Fail if B == 0.",
            "DocExtra": "`divmodw` is available to divide the two-element values produced by `mulw` and `addw`.",
            "Groups": ["Arithmetic"]
        },
        {
            "Opcode": 11,
            "Name": "*",
            "Args": "UU",
            "Returns": "U",
            "Cost": 1,
            "Size": 1,
            "Doc": "A times B. Fail on overflow.",
            "DocExtra": "Overflow is an error condition which halts execution and fails the transaction. Full precision is available from `mulw`.",
            "Groups": ["Arithmetic"]
        },
        {
            "Opcode": 12,
            "Name": "\u003c",
            "Args": "UU",
            "Returns": "U",
            "Cost": 1,
            "Size": 1,
            "Doc": "A less than B =\u003e {0 or 1}",
            "Groups": ["Arithmetic"]
        },
        {
            "Opcode": 13,
            "Name": "\u003e",
            "Args": "UU",
            "Returns": "U",
            "Cost": 1,
            "Size": 1,
            "Doc": "A greater than B =\u003e {0 or 1}",
            "Groups": ["Arithmetic"]
        },
        {
            "Opcode": 14,
            "Name": "\u003c=",
            "Args": "UU",
            "Returns": "U",
            "Cost": 1,
            "Size": 1,
            "Doc": "A less than or equal to B =\u003e {0 or 1}",
            "Groups": ["Arithmetic"]
        },
        {
            "Opcode": 15,
            "Name": "\u003e=",
            "Args": "UU",
            "Returns": "U",
            "Cost": 1,
            "Size": 1,
            "Doc": "A greater than or equal to B =\u003e {0 or 1}",
            "Groups": ["Arithmetic"]
        },
        {
            "Opcode": 16,
            "Name": "\u0026\u0026",
            "Args": "UU",
            "Returns": "U",
            "Cost": 1,
            "Size": 1,
            "Doc": "A is not zero and B is not zero =\u003e {0 or 1}",
            "Groups": ["Arithmetic"]
        },
        {
            "Opcode": 17,
            "Name": "||",
            "Args": "UU",
            "Returns": "U",
            "Cost": 1,
            "Size": 1,
            "Doc": "A is not zero or B is not zero =\u003e {0 or 1}",
            "Groups": ["Arithmetic"]
        },
        {
            "Opcode": 18,
            "Name": "==",
            "Args": "..",
            "Returns": "U",
            "Cost": 1,
            "Size": 1,
            "Doc": "A is equal to B =\u003e {0 or 1}",
            "Groups": ["Arithmetic"]
        },
        {
            "Opcode": 19,
            "Name": "!=",
            "Args": "..",
            "Returns": "U",
            "Cost": 1,
            "Size": 1,
            "Doc": "A is not equal to B =\u003e {0 or 1}",
            "Groups": ["Arithmetic"]
        },
        {
            "Opcode": 20,
            "Name": "!",
            "Args": "U",
            "Returns": "U",
            "Cost": 1,
            "Size": 1,
            "Doc": "A == 0 yields 1; else 0",
            "Groups": ["Arithmetic"]
        },
        {
            "Opcode": 21,
            "Name": "len",
            "Args": "B",
            "Returns": "U",
            "Cost": 1,
            "Size": 1,
            "Doc": "yields length of byte value A",
            "Groups": ["Arithmetic"]
        },
        {
            "Opcode": 22,
            "Name": "itob",
            "Args": "U",
            "Returns": "B",
            "Cost": 1,
            "Size": 1,
            "Doc": "converts uint64 A to big endian bytes",
            "Groups": ["Arithmetic"]
        },
        {
            "Opcode": 23,
            "Name": "btoi",
            "Args": "B",
            "Returns": "U",
            "Cost": 1,
            "Size": 1,
            "Doc": "converts bytes A as big endian to uint64",
            "DocExtra": "`btoi` fails if the input is longer than 8 bytes.",
            "Groups": ["Arithmetic"]
        },
        {
            "Opcode": 24,
            "Name": "%",
            "Args": "UU",
            "Returns": "U",
            "Cost": 1,
            "Size": 1,
            "Doc": "A modulo B. Fail if B == 0.",
            "Groups": ["Arithmetic"]
        },
        {
            "Opcode": 25,
            "Name": "|",
            "Args": "UU",
            "Returns": "U",
            "Cost": 1,
            "Size": 1,
            "Doc": "A bitwise-or B",
            "Groups": ["Arithmetic"]
        },
        {
            "Opcode": 26,
            "Name": "\u0026",
            "Args": "UU",
            "Returns": "U",
            "Cost": 1,
            "Size": 1,
            "Doc": "A bitwise-and B",
            "Groups": ["Arithmetic"]
        },
        {
            "Opcode": 27,
            "Name": "^",
            "Args": "UU",
            "Returns": "U",
            "Cost": 1,
            "Size": 1,
            "Doc": "A bitwise-xor B",
            "Groups": ["Arithmetic"]
        },
        {
            "Opcode": 28,
            "Name": "~",
            "Args": "U",
            "Returns": "U",
            "Cost": 1,
            "Size": 1,
            "Doc": "bitwise invert value A",
            "Groups": ["Arithmetic"]
        },
        {
            "Opcode": 29,
            "Name": "mulw",
            "Args": "UU",
            "Returns": "UU",
            "Cost": 1,
            "Size": 1,
            "Doc": "A times B as a 128-bit result in two uint64s. X is the high 64 bits, Y is the low",
            "Groups": ["Arithmetic"]
        },
        {
            "Opcode": 30,
            "Name": "addw",
            "Args": "UU",
            "Returns": "UU",
            "Cost": 1,
            "Size": 1,
            "Doc": "A plus B as a 128-bit result. X is the carry-bit, Y is the low-order 64 bits.",
            "Groups": ["Arithmetic"]
        },
        {
            "Opcode": 31,
            "Name": "divmodw",
            "Args": "UUUU",
            "Returns": "UUUU",
            "Cost": 20,
            "Size": 1,
            "Doc": "W,X = (A,B / C,D); Y,Z = (A,B modulo C,D)",
            "DocExtra": "The notation J,K indicates that two uint64 values J and K are interpreted as a uint128 value, with J as the high uint64 and K the low.",
            "Groups": ["Arithmetic"]
        },
        {
            "Opcode": 32,
            "Name": "intcblock",
            "Cost": 1,
            "Size": 0,
            "Doc": "prepare block of uint64 constants for use by intc",
            "DocExtra": "`intcblock` loads following program bytes into an array of integer constants in the evaluator. These integer constants can be referred to by `intc` and `intc_*` which will push the value onto the stack. Subsequent calls to `intcblock` reset and replace the integer constants available to the script.",
            "ImmediateNote": "{varuint length} [{varuint value}, ...]",
            "Groups": ["Loading Values"]
        },
        {
            "Opcode": 33,
            "Name": "intc",
            "Returns": "U",
            "Cost": 1,
            "Size": 2,
            "Doc": "Ith constant from intcblock",
            "ImmediateNote": "{uint8 int constant index}",
            "Groups": ["Loading Values"]
        },
        {
            "Opcode": 34,
            "Name": "intc_0",
            "Returns": "U",
            "Cost": 1,
            "Size": 1,
            "Doc": "constant 0 from intcblock",
            "Groups": ["Loading Values"]
        },
        {
            "Opcode": 35,
            "Name": "intc_1",
            "Returns": "U",
            "Cost": 1,
            "Size": 1,
            "Doc": "constant 1 from intcblock",
            "Groups": ["Loading Values"]
        },
        {
            "Opcode": 36,
            "Name": "intc_2",
            "Returns": "U",
            "Cost": 1,
            "Size": 1,
            "Doc": "constant 2 from intcblock",
            "Groups": ["Loading Values"]
        },
        {
            "Opcode": 37,
            "Name": "intc_3",
            "Returns": "U",
            "Cost": 1,
            "Size": 1,
            "Doc": "constant 3 from intcblock",
            "Groups": ["Loading Values"]
        },
        {
            "Opcode": 38,
            "Name": "bytecblock",
            "Cost": 1,
            "Size": 0,
            "Doc": "prepare block of byte-array constants for use by bytec",
            "DocExtra": "`bytecblock` loads the following program bytes into an array of byte-array constants in the evaluator. These constants can be referred to by `bytec` and `bytec_*` which will push the value onto the stack. Subsequent calls to `bytecblock` reset and replace the bytes constants available to the script.",
            "ImmediateNote": "{varuint length} [({varuint value length} bytes), ...]",
            "Groups": ["Loading Values"]
        },
        {
            "Opcode": 39,
            "Name": "bytec",
            "Returns": "B",
            "Cost": 1,
            "Size": 2,
            "Doc": "Ith constant from bytecblock",
            "ImmediateNote": "{uint8 byte constant index}",
            "Groups": ["Loading Values"]
        },
        {
            "Opcode": 40,
            "Name": "bytec_0",
            "Returns": "B",
            "Cost": 1,
            "Size": 1,
            "Doc": "constant 0 from bytecblock",
            "Groups": ["Loading Values"]
        },
        {
            "Opcode": 41,
            "Name": "bytec_1",
            "Returns": "B",
            "Cost": 1,
            "Size": 1,
            "Doc": "constant 1 from bytecblock",
            "Groups": ["Loading Values"]
        },
        {
            "Opcode": 42,
            "Name": "bytec_2",
            "Returns": "B",
            "Cost": 1,
            "Size": 1,
            "Doc": "constant 2 from bytecblock",
            "Groups": ["Loading Values"]
        },
        {
            "Opcode": 43,
            "Name": "bytec_3",
            "Returns": "B",
            "Cost": 1,
            "Size": 1,
            "Doc": "constant 3 from bytecblock",
            "Groups": ["Loading Values"]
        },
        {
            "Opcode": 44,
            "Name": "arg",
            "Returns": "B",
            "Cost": 1,
            "Size": 2,
            "Doc": "Nth LogicSig argument",
            "ImmediateNote": "{uint8 arg index N}",
            "Groups": ["Loading Values"]
        },
        {
            "Opcode": 45,
            "Name": "arg_0",
            "Returns": "B",
            "Cost": 1,
            "Size": 1,
            "Doc": "LogicSig argument 0",
            "Groups": ["Loading Values"]
        },
        {
            "Opcode": 46,
            "Name": "arg_1",
            "Returns": "B",
            "Cost": 1,
            "Size": 1,
            "Doc": "LogicSig argument 1",
            "Groups": ["Loading Values"]
        },
        {
            "Opcode": 47,
            "Name": "arg_2",
            "Returns": "B",
            "Cost": 1,
            "Size": 1,
            "Doc": "LogicSig argument 2",
            "Groups": ["Loading Values"]
        },
        {
            "Opcode": 48,
            "Name": "arg_3",
            "Returns": "B",
            "Cost": 1,
            "Size": 1,
            "Doc": "LogicSig argument 3",
            "Groups": ["Loading Values"]
        },
        {
            "Opcode": 49,
            "Name": "txn",
            "Returns": ".",
            "Cost": 1,
            "Size": 2,
            "ArgEnum": [
                "Sender",
                "Fee",
                "FirstValid",
                "FirstValidTime",
                "LastValid",
                "Note",
                "Lease",
                "Receiver",
                "Amount",
                "CloseRemainderTo",
                "VotePK",
                "SelectionPK",
                "VoteFirst",
                "VoteLast",
                "VoteKeyDilution",
                "Type",
                "TypeEnum",
                "XferAsset",
                "AssetAmount",
                "AssetSender",
                "AssetReceiver",
                "AssetCloseTo",
                "GroupIndex",
                "TxID",
                "ApplicationID",
                "OnCompletion",
                "ApplicationArgs",
                "NumAppArgs",
                "Accounts",
                "NumAccounts",
                "ApprovalProgram",
                "ClearStateProgram",
                "RekeyTo",
                "ConfigAsset",
                "ConfigAssetTotal",
                "ConfigAssetDecimals",
                "ConfigAssetDefaultFrozen",
                "ConfigAssetUnitName",
                "ConfigAssetName",
                "ConfigAssetURL",
                "ConfigAssetMetadataHash",
                "ConfigAssetManager",
                "ConfigAssetReserve",
                "ConfigAssetFreeze",
                "ConfigAssetClawback",
                "FreezeAsset",
                "FreezeAssetAccount",
                "FreezeAssetFrozen",
                "Assets",
                "NumAssets",
                "Applications",
                "NumApplications",
                "GlobalNumUint",
                "GlobalNumByteSlice",
                "LocalNumUint",
                "LocalNumByteSlice",
                "ExtraProgramPages",
                "Nonparticipation",
                "Logs",
                "NumLogs",
                "CreatedAssetID",
                "CreatedApplicationID",
                "LastLog",
                "StateProofPK"
            ],
            "ArgEnumTypes": "BUUUUBBBUBBBUUUBUUUBBBUBUUBUBUBBBUUUUBBBBBBBBUBUUUUUUUUUUUBUUUBB",
            "Doc": "field F of current transaction",
            "DocExtra": "FirstValidTime causes the program to fail. The field is reserved for future use.",
            "ImmediateNote": "{uint8 transaction field index}",
            "Groups": ["Loading Values"]
        },
        {
            "Opcode": 50,
            "Name": "global",
            "Returns": ".",
            "Cost": 1,
            "Size": 2,
            "Doc": "global field F",
            "ImmediateNote": "{uint8 global field index}",
            "Groups": ["Loading Values"]
        },
        {
            "Opcode": 51,
            "Name": "gtxn",
            "Returns": ".",
            "Cost": 1,
            "Size": 3,
            "ArgEnum": [
                "Sender",
                "Fee",
                "FirstValid",
                "FirstValidTime",
                "LastValid",
                "Note",
                "Lease",
                "Receiver",
                "Amount",
                "CloseRemainderTo",
                "VotePK",
                "SelectionPK",
                "VoteFirst",
                "VoteLast",
                "VoteKeyDilution",
                "Type",
                "TypeEnum",
                "XferAsset",
                "AssetAmount",
                "AssetSender",
                "AssetReceiver",
                "AssetCloseTo",
                "GroupIndex",
                "TxID",
                "ApplicationID",
                "OnCompletion",
                "ApplicationArgs",
                "NumAppArgs",
                "Accounts",
                "NumAccounts",
                "ApprovalProgram",
                "ClearStateProgram",
                "RekeyTo",
                "ConfigAsset",
                "ConfigAssetTotal",
                "ConfigAssetDecimals",
                "ConfigAssetDefaultFrozen",
                "ConfigAssetUnitName",
                "ConfigAssetName",
                "ConfigAssetURL",
                "ConfigAssetMetadataHash",
                "ConfigAssetManager",
                "ConfigAssetReserve",
                "ConfigAssetFreeze",
                "ConfigAssetClawback",
                "FreezeAsset",
                "FreezeAssetAccount",
                "FreezeAssetFrozen",
                "Assets",
                "NumAssets",
                "Applications",
                "NumApplications",
                "GlobalNumUint",
                "GlobalNumByteSlice",
                "LocalNumUint",
                "LocalNumByteSlice",
                "ExtraProgramPages",
                "Nonparticipation",
                "Logs",
                "NumLogs",
                "CreatedAssetID",
                "CreatedApplicationID",
                "LastLog",
                "StateProofPK"
            ],
            "ArgEnumTypes": "BUUUUBBBUBBBUUUBUUUBBBUBUUBUBUBBBUUUUBBBBBBBBUBUUUUUUUUUUUBUUUBB",
            "Doc": "field F of the Tth transaction in the current group",
            "DocExtra": "for notes on transaction fields available, see `txn`. If this transaction is _i_ in the group, `gtxn i field` is equivalent to `txn field`.",
            "ImmediateNote": "{uint8 transaction group index} {uint8 transaction field index}",
            "Groups": ["Loading Values"]
        },
        {
            "Opcode": 52,
            "Name": "load",
            "Returns": ".",
            "Cost": 1,
            "Size": 2,
            "Doc": "Ith scratch space value. All scratch spaces are 0 at program start.",
            "ImmediateNote": "{uint8 position in scratch space to load from}",
            "Groups": ["Loading Values"]
        },
        {
            "Opcode": 53,
            "Name": "store",
            "Args": ".",
            "Cost": 1,
            "Size": 2,
            "Doc": "store A to the Ith scratch space",
            "ImmediateNote": "{uint8 position in scratch space to store to}",
            "Groups": ["Loading Values"]
        },
        {
            "Opcode": 54,
            "Name": "txna",
            "Returns": ".",
            "Cost": 1,
            "Size": 3,
            "ArgEnum": [
                "ApplicationArgs",
                "Accounts",
                "Assets",
                "Applications",
                "Logs"
            ],
            "ArgEnumTypes": "BBUUB",
            "Doc": "Ith value of the array field F of the current transaction",
            "ImmediateNote": "{uint8 transaction field index} {uint8 transaction field array index}",
            "Groups": ["Loading Values"]
        },
        {
            "Opcode": 55,
            "Name": "gtxna",
            "Returns": ".",
            "Cost": 1,
            "Size": 4,
            "ArgEnum": [
                "ApplicationArgs",
                "Accounts",
                "Assets",
                "Applications",
                "Logs"
            ],
            "ArgEnumTypes": "BBUUB",
            "Doc": "Ith value of the array field F from the Tth transaction in the current group",
            "ImmediateNote": "{uint8 transaction group index} {uint8 transaction field index} {uint8 transaction field array index}",
            "Groups": ["Loading Values"]
        },
        {
            "Opcode": 56,
            "Name": "gtxns",
            "Args": "U",
            "Returns": ".",
            "Cost": 1,
            "Size": 2,
            "ArgEnum": [
                "Sender",
                "Fee",
                "FirstValid",
                "FirstValidTime",
                "LastValid",
                "Note",
                "Lease",
                "Receiver",
                "Amount",
                "CloseRemainderTo",
                "VotePK",
                "SelectionPK",
                "VoteFirst",
                "VoteLast",
                "VoteKeyDilution",
                "Type",
                "TypeEnum",
                "XferAsset",
                "AssetAmount",
                "AssetSender",
                "AssetReceiver",
                "AssetCloseTo",
                "GroupIndex",
                "TxID",
                "ApplicationID",
                "OnCompletion",
                "ApplicationArgs",
                "NumAppArgs",
                "Accounts",
                "NumAccounts",
                "ApprovalProgram",
                "ClearStateProgram",
                "RekeyTo",
                "ConfigAsset",
                "ConfigAssetTotal",
                "ConfigAssetDecimals",
                "ConfigAssetDefaultFrozen",
                "ConfigAssetUnitName",
                "ConfigAssetName",
                "ConfigAssetURL",
                "ConfigAssetMetadataHash",
                "ConfigAssetManager",
                "ConfigAssetReserve",
                "ConfigAssetFreeze",
                "ConfigAssetClawback",
                "FreezeAsset",
                "FreezeAssetAccount",
                "FreezeAssetFrozen",
                "Assets",
                "NumAssets",
                "Applications",
                "NumApplications",
                "GlobalNumUint",
                "GlobalNumByteSlice",
                "LocalNumUint",
                "LocalNumByteSlice",
                "ExtraProgramPages",
                "Nonparticipation",
                "Logs",
                "NumLogs",
                "CreatedAssetID",
                "CreatedApplicationID",
                "LastLog",
                "StateProofPK"
            ],
            "ArgEnumTypes": "BUUUUBBBUBBBUUUBUUUBBBUBUUBUBUBBBUUUUBBBBBBBBUBUUUUUUUUUUUBUUUBB",
            "Doc": "field F of the Ath transaction in the current group",
            "DocExtra": "for notes on transaction fields available, see `txn`. If top of stack is _i_, `gtxns field` is equivalent to `gtxn _i_ field`. gtxns exists so that _i_ can be calculated, often based on the index of the current transaction.",
            "ImmediateNote": "{uint8 transaction field index}",
            "Groups": ["Loading Values"]
        },
        {
            "Opcode": 57,
            "Name": "gtxnsa",
            "Args": "U",
            "Returns": ".",
            "Cost": 1,
            "Size": 3,
            "ArgEnum": [
                "ApplicationArgs",
                "Accounts",
                "Assets",
                "Applications",
                "Logs"
            ],
            "ArgEnumTypes": "BBUUB",
            "Doc": "Ith value of the array field F from the Ath transaction in the current group",
            "ImmediateNote": "{uint8 transaction field index} {uint8 transaction field array index}",
            "Groups": ["Loading Values"]
        },
        {
            "Opcode": 58,
            "Name": "gload",
            "Returns": ".",
            "Cost": 1,
            "Size": 3,
            "Doc": "Ith scratch space value of the Tth transaction in the current group",
            "DocExtra": "`gload` fails unless the requested transaction is an ApplicationCall and T \u003c GroupIndex.",
            "ImmediateNote": "{uint8 transaction group index} {uint8 position in scratch space to load from}",
            "Groups": ["Loading Values"]
        },
        {
            "Opcode": 59,
            "Name": "gloads",
            "Args": "U",
            "Returns": ".",
            "Cost": 1,
            "Size": 2,
            "Doc": "Ith scratch space value of the Ath transaction in the current group",
            "DocExtra": "`gloads` fails unless the requested transaction is an ApplicationCall and A \u003c GroupIndex.",
            "ImmediateNote": "{uint8 position in scratch space to load from}",
            "Groups": ["Loading Values"]
        },
        {
            "Opcode": 60,
            "Name": "gaid",
            "Returns": "U",
            "Cost": 1,
            "Size": 2,
            "Doc": "ID of the asset or application created in the Tth transaction of the current group",
            "DocExtra": "`gaid` fails unless the requested transaction created an asset or application and T \u003c GroupIndex.",
            "ImmediateNote": "{uint8 transaction group index}",
            "Groups": ["Loading Values"]
        },
        {
            "Opcode": 61,
            "Name": "gaids",
            "Args": "U",
            "Returns": "U",
            "Cost": 1,
            "Size": 1,
            "Doc": "ID of the asset or application created in the Ath transaction of the current group",
            "DocExtra": "`gaids` fails unless the requested transaction created an asset or application and A \u003c GroupIndex.",
            "Groups": ["Loading Values"]
        },
        {
            "Opcode": 62,
            "Name": "loads",
            "Args": "U",
            "Returns": ".",
            "Cost": 1,
            "Size": 1,
            "Doc": "Ath scratch space value.  All scratch spaces are 0 at program start.",
            "Groups": ["Loading Values"]
        },
        {
            "Opcode": 63,
            "Name": "stores",
            "Args": "U.",
            "Cost": 1,
            "Size": 1,
            "Doc": "store B to the Ath scratch space",
            "Groups": ["Loading Values"]
        },
        {
            "Opcode": 64,
            "Name": "bnz",
            "Args": "U",
            "Cost": 1,
            "Size": 3,
            "Doc": "branch to TARGET if value A is not zero",
            "DocExtra": "The `bnz` instruction opcode 0x40 is followed by two immediate data bytes which are a high byte first and low byte second which together form a 16 bit offset which the instruction may branch to. For a bnz instruction at `pc`, if the last element of the stack is not zero then branch to instruction at `pc + 3 + N`, else proceed to next instruction at `pc + 3`. Branch targets must be aligned instructions. (e.g. Branching to the second byte of a 2 byte op will be rejected.) Starting at v4, the offset is treated as a signed 16 bit integer allowing for backward branches and looping. In prior version (v1 to v3), branch offsets are limited to forward branches only, 0-0x7fff.\n\nAt v2 it became allowed to branch to the end of the program exactly after the last instruction: bnz to byte N (with 0-indexing) was illegal for a TEAL program with N bytes before v2, and is legal after it. This change eliminates the need for a last instruction of no-op as a branch target at the end. (Branching beyond the end--in other words, to a byte larger than N--is still illegal and will cause the program to fail.)",
            "ImmediateNote": "{int16 branch offset, big endian}",
            "Groups": ["Flow Control"]
        },
        {
            "Opcode": 65,
            "Name": "bz",
            "Args": "U",
            "Cost": 1,
            "Size": 3,
            "Doc": "branch to TARGET if value A is zero",
            "DocExtra": "See `bnz` for details on how branches work. `bz` inverts the behavior of `bnz`.",
            "ImmediateNote": "{int16 branch offset, big endian}",
            "Groups": ["Flow Control"]
        },
        {
            "Opcode": 66,
            "Name": "b",
            "Cost": 1,
            "Size": 3,
            "Doc": "branch unconditionally to TARGET",
            "DocExtra": "See `bnz` for details on how branches work. `b` always jumps to the offset.",
            "ImmediateNote": "{int16 branch offset, big endian}",
            "Groups": ["Flow Control"]
        },
        {
            "Opcode": 67,
            "Name": "return",
            "Args": "U",
            "Cost": 1,
            "Size": 1,
            "Doc": "use A as success value; end",
            "Groups": ["Flow Control"]
        },
        {
            "Opcode": 68,
            "Name": "assert",
            "Args": "U",
            "Cost": 1,
            "Size": 1,
            "Doc": "immediately fail unless A is a non-zero number",
            "Groups": ["Flow Control"]
        },
        {
            "Opcode": 72,
            "Name": "pop",
            "Args": ".",
            "Cost": 1,
            "Size": 1,
            "Doc": "discard A",
            "Groups": ["Flow Control"]
        },
        {
            "Opcode": 73,
            "Name": "dup",
            "Args": ".",
            "Returns": "..",
            "Cost": 1,
            "Size": 1,
            "Doc": "duplicate A",
            "Groups": ["Flow Control"]
        },
        {
            "Opcode": 74,
            "Name": "dup2",
            "Args": "..",
            "Returns": "....",
            "Cost": 1,
            "Size": 1,
            "Doc": "duplicate A and B",
            "Groups": ["Flow Control"]
        },
        {
            "Opcode": 75,
            "Name": "dig",
            "Args": ".",
            "Returns": "..",
            "Cost": 1,
            "Size": 2,
            "Doc": "Nth value from the top of the stack. dig 0 is equivalent to dup",
            "ImmediateNote": "{uint8 depth}",
            "Groups": ["Flow Control"]
        },
        {
            "Opcode": 76,
            "Name": "swap",
            "Args": "..",
            "Returns": "..",
            "Cost": 1,
            "Size": 1,
            "Doc": "swaps A and B on stack",
            "Groups": ["Flow Control"]
        },
        {
            "Opcode": 77,
            "Name": "select",
            "Args": "..U",
            "Returns": ".",
            "Cost": 1,
            "Size": 1,
            "Doc": "selects one of two values based on top-of-stack: B if C != 0, else A",
            "Groups": ["Flow Control"]
        },
        {
            "Opcode": 78,
            "Name": "cover",
            "Args": ".",
            "Returns": ".",
            "Cost": 1,
            "Size": 2,
            "Doc": "remove top of stack, and place it deeper in the stack such that N elements are above it. Fails if stack depth \u003c= N.",
            "ImmediateNote": "{uint8 depth}",
            "Groups": ["Flow Control"]
        },
        {
            "Opcode": 79,
            "Name": "uncover",
            "Args": ".",
            "Returns": ".",
            "Cost": 1,
            "Size": 2,
            "Doc": "remove the value at depth N in the stack and shift above items down so the Nth deep value is on top of the stack. Fails if stack depth \u003c= N.",
            "ImmediateNote": "{uint8 depth}",
            "Groups": ["Flow Control"]
        },
        {
            "Opcode": 80,
            "Name": "concat",
            "Args": "BB",
            "Returns": "B",
            "Cost": 1,
            "Size": 1,
            "Doc": "join A and B",
            "DocExtra": "`concat` fails if the result would be greater than 4096 bytes.",
            "Groups": ["Arithmetic"]
        },
        {
            "Opcode": 81,
            "Name": "substring",
            "Args": "B",
            "Returns": "B",
            "Cost": 1,
            "Size": 3,
            "Doc": "A range of bytes from A starting at S up to but not including E. If E \u003c S, or either is larger than the array length, the program fails",
            "ImmediateNote": "{uint8 start position} {uint8 end position}",
            "Groups": ["Byte Array Manipulation"]
        },
        {
            "Opcode": 82,
            "Name": "substring3",
            "Args": "BUU",
            "Returns": "B",
            "Cost": 1,
            "Size": 1,
            "Doc": "A range of bytes from A starting at B up to but not including C. If C \u003c B, or either is larger than the array length, the program fails",
            "Groups": ["Byte Array Manipulation"]
        },
        {
            "Opcode": 83,
            "Name": "getbit",
            "Args": ".U",
            "Returns": "U",
            "Cost": 1,
            "Size": 1,
            "Doc": "Bth bit of (byte-array or integer) A.",
            "DocExtra": "see explanation of bit ordering in setbit",
            "Groups": ["Arithmetic"]
        },
        {
            "Opcode": 84,
            "Name": "setbit",
            "Args": ".UU",
            "Returns": ".",
            "Cost": 1,
            "Size": 1,
            "Doc": "Copy of (byte-array or integer) A, with the Bth bit set to (0 or 1) C",
            "DocExtra": "When A is a uint64, index 0 is the least significant bit. Setting bit 3 to 1 on the integer 0 yields 8, or 2^3. When A is a byte array, index 0 is the leftmost bit of the leftmost byte. Setting bits 0 through 11 to 1 in a 4-byte-array of 0s yields the byte array 0xfff00000. Setting bit 3 to 1 on the 1-byte-array 0x00 yields the byte array 0x10.",
            "Groups": ["Arithmetic"]
        },
        {
            "Opcode": 85,
            "Name": "getbyte",
            "Args": "BU",
            "Returns": "U",
            "Cost": 1,
            "Size": 1,
            "Doc": "Bth byte of A, as an integer",
            "Groups": ["Arithmetic"]
        },
        {
            "Opcode": 86,
            "Name": "setbyte",
            "Args": "BUU",
            "Returns": "B",
            "Cost": 1,
            "Size": 1,
            "Doc": "Copy of A with the Bth byte set to small integer (between 0..255) C",
            "Groups": ["Arithmetic"]
        },
        {
            "Opcode": 87,
            "Name": "extract",
            "Args": "B",
            "Returns": "B",
            "Cost": 1,
            "Size": 3,
            "Doc": "A range of bytes from A starting at S up to but not including S+L. If L is 0, then extract to the end of the string. If S or S+L is larger than the array length, the program fails",
            "ImmediateNote": "{uint8 start position} {uint8 length}",
            "Groups": ["Byte Array Manipulation"]
        },
        {
            "Opcode": 88,
            "Name": "extract3",
            "Args": "BUU",
            "Returns": "B",
            "Cost": 1,
            "Size": 1,
            "Doc": "A range of bytes from A starting at B up to but not including B+C. If B+C is larger than the array length, the program fails",
            "Groups": ["Byte Array Manipulation"]
        },
        {
            "Opcode": 89,
            "Name": "extract_uint16",
            "Args": "BU",
            "Returns": "U",
            "Cost": 1,
            "Size": 1,
            "Doc": "A uint16 formed from a range of big-endian bytes from A starting at B up to but not including B+2. If B+2 is larger than the array length, the program fails",
            "Groups": ["Byte Array Manipulation"]
        },
        {
            "Opcode": 90,
            "Name": "extract_uint32",
            "Args": "BU",
            "Returns": "U",
            "Cost": 1,
            "Size": 1,
            "Doc": "A uint32 formed from a range of big-endian bytes from A starting at B up to but not including B+4. If B+4 is larger than the array length, the program fails",
            "Groups": ["Byte Array Manipulation"]
        },
        {
            "Opcode": 91,
            "Name": "extract_uint64",
            "Args": "BU",
            "Returns": "U",
            "Cost": 1,
            "Size": 1,
            "Doc": "A uint64 formed from a range of big-endian bytes from A starting at B up to but not including B+8. If B+8 is larger than the array length, the program fails",
            "Groups": ["Byte Array Manipulation"]
        },
        {
            "Opcode": 96,
            "Name": "balance",
            "Args": ".",
            "Returns": "U",
            "Cost": 1,
            "Size": 1,
            "Doc": "get balance for account A, in microalgos. The balance is observed after the effects of previous transactions in the group, and after the fee for the current transaction is deducted.",
            "DocExtra": "params: Txn.Accounts offset (or, since v4, an _available_ account address), _available_ application id (or, since v4, a Txn.ForeignApps offset). Return: value.",
            "Groups": ["State Access"]
        },
        {
            "Opcode": 97,
            "Name": "app_opted_in",
            "Args": ".U",
            "Returns": "U",
            "Cost": 1,
            "Size": 1,
            "Doc": "1 if account A is opted in to application B, else 0",
            "DocExtra": "params: Txn.Accounts offset (or, since v4, an _available_ account address), _available_ application id (or, since v4, a Txn.ForeignApps offset). Return: 1 if opted in and 0 otherwise.",
            "Groups": ["State Access"]
        },
        {
            "Opcode": 98,
            "Name": "app_local_get",
            "Args": ".B",
            "Returns": ".",
            "Cost": 1,
            "Size": 1,
            "Doc": "local state of the key B in the current application in account A",
            "DocExtra": "params: Txn.Accounts offset (or, since v4, an _available_ account address), state key. Return: value. The value is zero (of type uint64) if the key does not exist.",
            "Groups": ["State Access"]
        },
        {
            "Opcode": 99,
            "Name": "app_local_get_ex",
            "Args": ".UB",
            "Returns": ".U",
            "Cost": 1,
            "Size": 1,
            "Doc": "X is the local state of application B, key C in account A. Y is 1 if key existed, else 0",
            "DocExtra": "params: Txn.Accounts offset (or, since v4, an _available_ account address), _available_ application id (or, since v4, a Txn.ForeignApps offset), state key. Return: did_exist flag (top of the stack, 1 if the application and key existed and 0 otherwise), value. The value is zero (of type uint64) if the key does not exist.",
            "Groups": ["State Access"]
        },
        {
            "Opcode": 100,
            "Name": "app_global_get",
            "Args": "B",
            "Returns": ".",
            "Cost": 1,
            "Size": 1,
            "Doc": "global state of the key A in the current application",
            "DocExtra": "params: state key. Return: value. The value is zero (of type uint64) if the key does not exist.",
            "Groups": ["State Access"]
        },
        {
            "Opcode": 101,
            "Name": "app_global_get_ex",
            "Args": "UB",
            "Returns": ".U",
            "Cost": 1,
            "Size": 1,
            "Doc": "X is the global state of application A, key B. Y is 1 if key existed, else 0",
            "DocExtra": "params: Txn.ForeignApps offset (or, since v4, an _available_ application id), state key. Return: did_exist flag (top of the stack, 1 if the application and key existed and 0 otherwise), value. The value is zero (of type uint64) if the key does not exist.",
            "Groups": ["State Access"]
        },
        {
            "Opcode": 102,
            "Name": "app_local_put",
            "Args": ".B.",
            "Cost": 1,
            "Size": 1,
            "Doc": "write C to key B in account A's local state of the current application",
            "DocExtra": "params: Txn.Accounts offset (or, since v4, an _available_ account address), state key, value.",
            "Groups": ["State Access"]
        },
        {
            "Opcode": 103,
            "Name": "app_global_put",
            "Args": "B.",
            "Cost": 1,
            "Size": 1,
            "Doc": "write B to key A in the global state of the current application",
            "Groups": ["State Access"]
        },
        {
            "Opcode": 104,
            "Name": "app_local_del",
            "Args": ".B",
            "Cost": 1,
            "Size": 1,
            "Doc": "delete key B from account A's local state of the current application",
            "DocExtra": "params: Txn.Accounts offset (or, since v4, an _available_ account address), state key.\n\nDeleting a key which is already absent has no effect on the application local state. (In particular, it does _not_ cause the program to fail.)",
            "Groups": ["State Access"]
        },
        {
            "Opcode": 105,
            "Name": "app_global_del",
            "Args": "B",
            "Cost": 1,
            "Size": 1,
            "Doc": "delete key A from the global state of the current application",
            "DocExtra": "params: state key.\n\nDeleting a key which is already absent has no effect on the application global state. (In particular, it does _not_ cause the program to fail.)",
            "Groups": ["State Access"]
        },
        {
            "Opcode": 112,
            "Name": "asset_holding_get",
            "Args": ".U",
            "Returns": ".U",
            "Cost": 1,
            "Size": 2,
            "ArgEnum": ["AssetBalance", "AssetFrozen"],
            "ArgEnumTypes": "UU",
            "Doc": "X is field F from account A's holding of asset B. Y is 1 if A is opted into B, else 0",
            "DocExtra": "params: Txn.Accounts offset (or, since v4, an _available_ address), asset id (or, since v4, a Txn.ForeignAssets offset). Return: did_exist flag (1 if the asset existed and 0 otherwise), value.",
            "ImmediateNote": "{uint8 asset holding field index}",
            "Groups": ["State Access"]
        },
        {
            "Opcode": 113,
            "Name": "asset_params_get",
            "Args": "U",
            "Returns": ".U",
            "Cost": 1,
            "Size": 2,
            "ArgEnum": [
                "AssetTotal",
                "AssetDecimals",
                "AssetDefaultFrozen",
                "AssetUnitName",
                "AssetName",
                "AssetURL",
                "AssetMetadataHash",
                "AssetManager",
                "AssetReserve",
                "AssetFreeze",
                "AssetClawback",
                "AssetCreator"
            ],
            "ArgEnumTypes": "UUUBBBBBBBBB",
            "Doc": "X is field F from asset A. Y is 1 if A exists, else 0",
            "DocExtra": "params: Txn.ForeignAssets offset (or, since v4, an _available_ asset id. Return: did_exist flag (1 if the asset existed and 0 otherwise), value.",
            "ImmediateNote": "{uint8 asset params field index}",
            "Groups": ["State Access"]
        },
        {
            "Opcode": 114,
            "Name": "app_params_get",
            "Args": "U",
            "Returns": ".U",
            "Cost": 1,
            "Size": 2,
            "ArgEnum": [
                "AppApprovalProgram",
                "AppClearStateProgram",
                "AppGlobalNumUint",
                "AppGlobalNumByteSlice",
                "AppLocalNumUint",
                "AppLocalNumByteSlice",
                "AppExtraProgramPages",
                "AppCreator",
                "AppAddress"
            ],
            "ArgEnumTypes": "BBUUUUUBB",
            "Doc": "X is field F from app A. Y is 1 if A exists, else 0",
            "DocExtra": "params: Txn.ForeignApps offset or an _available_ app id. Return: did_exist flag (1 if the application existed and 0 otherwise), value.",
            "ImmediateNote": "{uint8 app params field index}",
            "Groups": ["State Access"]
        },
        {
            "Opcode": 115,
            "Name": "acct_params_get",
            "Args": ".",
            "Returns": ".U",
            "Cost": 1,
            "Size": 2,
            "Doc": "X is field F from account A. Y is 1 if A owns positive algos, else 0",
            "ImmediateNote": "{uint8 account params field index}",
            "Groups": ["State Access"]
        },
        {
            "Opcode": 120,
            "Name": "min_balance",
            "Args": ".",
            "Returns": "U",
            "Cost": 1,
            "Size": 1,
            "Doc": "get minimum required balance for account A, in microalgos. Required balance is affected by [ASA](https://developer.algorand.org/docs/features/asa/#assets-overview) and [App](https://developer.algorand.org/docs/features/asc1/stateful/#minimum-balance-requirement-for-a-smart-contract) usage. When creating or opting into an app, the minimum balance grows before the app code runs, therefore the increase is visible there. When deleting or closing out, the minimum balance decreases after the app executes.",
            "DocExtra": "params: Txn.Accounts offset (or, since v4, an _available_ account address), _available_ application id (or, since v4, a Txn.ForeignApps offset). Return: value.",
            "Groups": ["State Access"]
        },
        {
            "Opcode": 128,
            "Name": "pushbytes",
            "Returns": "B",
            "Cost": 1,
            "Size": 0,
            "Doc": "immediate BYTES",
            "DocExtra": "pushbytes args are not added to the bytecblock during assembly processes",
            "ImmediateNote": "{varuint length} {bytes}",
            "Groups": ["Loading Values"]
        },
        {
            "Opcode": 129,
            "Name": "pushint",
            "Returns": "U",
            "Cost": 1,
            "Size": 0,
            "Doc": "immediate UINT",
            "DocExtra": "pushint args are not added to the intcblock during assembly processes",
            "ImmediateNote": "{varuint int}",
            "Groups": ["Loading Values"]
        },
        {
            "Opcode": 136,
            "Name": "callsub",
            "Cost": 1,
            "Size": 3,
            "Doc": "branch unconditionally to TARGET, saving the next instruction on the call stack",
            "DocExtra": "The call stack is separate from the data stack. Only `callsub` and `retsub` manipulate it.",
            "ImmediateNote": "{int16 branch offset, big endian}",
            "Groups": ["Flow Control"]
        },
        {
            "Opcode": 137,
            "Name": "retsub",
            "Cost": 1,
            "Size": 1,
            "Doc": "pop the top instruction from the call stack and branch to it",
            "DocExtra": "The call stack is separate from the data stack. Only `callsub` and `retsub` manipulate it.",
            "Groups": ["Flow Control"]
        },
        {
            "Opcode": 144,
            "Name": "shl",
            "Args": "UU",
            "Returns": "U",
            "Cost": 1,
            "Size": 1,
            "Doc": "A times 2^B, modulo 2^64",
            "Groups": ["Arithmetic"]
        },
        {
            "Opcode": 145,
            "Name": "shr",
            "Args": "UU",
            "Returns": "U",
            "Cost": 1,
            "Size": 1,
            "Doc": "A divided by 2^B",
            "Groups": ["Arithmetic"]
        },
        {
            "Opcode": 146,
            "Name": "sqrt",
            "Args": "U",
            "Returns": "U",
            "Cost": 4,
            "Size": 1,
            "Doc": "The largest integer I such that I^2 \u003c= A",
            "Groups": ["Arithmetic"]
        },
        {
            "Opcode": 147,
            "Name": "bitlen",
            "Args": ".",
            "Returns": "U",
            "Cost": 1,
            "Size": 1,
            "Doc": "The highest set bit in A. If A is a byte-array, it is interpreted as a big-endian unsigned integer. bitlen of 0 is 0, bitlen of 8 is 4",
            "DocExtra": "bitlen interprets arrays as big-endian integers, unlike setbit/getbit",
            "Groups": ["Arithmetic"]
        },
        {
            "Opcode": 148,
            "Name": "exp",
            "Args": "UU",
            "Returns": "U",
            "Cost": 1,
            "Size": 1,
            "Doc": "A raised to the Bth power. Fail if A == B == 0 and on overflow",
            "Groups": ["Arithmetic"]
        },
        {
            "Opcode": 149,
            "Name": "expw",
            "Args": "UU",
            "Returns": "UU",
            "Cost": 10,
            "Size": 1,
            "Doc": "A raised to the Bth power as a 128-bit result in two uint64s. X is the high 64 bits, Y is the low. Fail if A == B == 0 or if the results exceeds 2^128-1",
            "Groups": ["Arithmetic"]
        },
        {
            "Opcode": 150,
            "Name": "bsqrt",
            "Args": "B",
            "Returns": "B",
            "Cost": 40,
            "Size": 1,
            "Doc": "The largest integer I such that I^2 \u003c= A. A and I are interpreted as big-endian unsigned integers",
            "Groups": ["Byte Array Arithmetic"]
        },
        {
            "Opcode": 151,
            "Name": "divw",
            "Args": "UUU",
            "Returns": "U",
            "Cost": 1,
            "Size": 1,
            "Doc": "A,B / C. Fail if C == 0 or if result overflows.",
            "DocExtra": "The notation A,B indicates that A and B are interpreted as a uint128 value, with A as the high uint64 and B the low.",
            "Groups": ["Arithmetic"]
        },
        {
            "Opcode": 160,
            "Name": "b+",
            "Args": "BB",
            "Returns": "B",
            "Cost": 10,
            "Size": 1,
            "Doc": "A plus B. A and B are interpreted as big-endian unsigned integers",
            "Groups": ["Byte Array Arithmetic"]
        },
        {
            "Opcode": 161,
            "Name": "b-",
            "Args": "BB",
            "Returns": "B",
            "Cost": 10,
            "Size": 1,
            "Doc": "A minus B. A and B are interpreted as big-endian unsigned integers. Fail on underflow.",
            "Groups": ["Byte Array Arithmetic"]
        },
        {
            "Opcode": 162,
            "Name": "b/",
            "Args": "BB",
            "Returns": "B",
            "Cost": 20,
            "Size": 1,
            "Doc": "A divided by B (truncated division). A and B are interpreted as big-endian unsigned integers. Fail if B is zero.",
            "Groups": ["Byte Array Arithmetic"]
        },
        {
            "Opcode": 163,
            "Name": "b*",
            "Args": "BB",
            "Returns": "B",
            "Cost": 20,
            "Size": 1,
            "Doc": "A times B. A and B are interpreted as big-endian unsigned integers.",
            "Groups": ["Byte Array Arithmetic"]
        },
        {
            "Opcode": 164,
            "Name": "b\u003c",
            "Args": "BB",
            "Returns": "U",
            "Cost": 1,
            "Size": 1,
            "Doc": "1 if A is less than B, else 0. A and B are interpreted as big-endian unsigned integers",
            "Groups": ["Byte Array Arithmetic"]
        },
        {
            "Opcode": 165,
            "Name": "b\u003e",
            "Args": "BB",
            "Returns": "U",
            "Cost": 1,
            "Size": 1,
            "Doc": "1 if A is greater than B, else 0. A and B are interpreted as big-endian unsigned integers",
            "Groups": ["Byte Array Arithmetic"]
        },
        {
            "Opcode": 166,
            "Name": "b\u003c=",
            "Args": "BB",
            "Returns": "U",
            "Cost": 1,
            "Size": 1,
            "Doc": "1 if A is less than or equal to B, else 0. A and B are interpreted as big-endian unsigned integers",
            "Groups": ["Byte Array Arithmetic"]
        },
        {
            "Opcode": 167,
            "Name": "b\u003e=",
            "Args": "BB",
            "Returns": "U",
            "Cost": 1,
            "Size": 1,
            "Doc": "1 if A is greater than or equal to B, else 0. A and B are interpreted as big-endian unsigned integers",
            "Groups": ["Byte Array Arithmetic"]
        },
        {
            "Opcode": 168,
            "Name": "b==",
            "Args": "BB",
            "Returns": "U",
            "Cost": 1,
            "Size": 1,
            "Doc": "1 if A is equal to B, else 0. A and B are interpreted as big-endian unsigned integers",
            "Groups": ["Byte Array Arithmetic"]
        },
        {
            "Opcode": 169,
            "Name": "b!=",
            "Args": "BB",
            "Returns": "U",
            "Cost": 1,
            "Size": 1,
            "Doc": "0 if A is equal to B, else 1. A and B are interpreted as big-endian unsigned integers",
            "Groups": ["Byte Array Arithmetic"]
        },
        {
            "Opcode": 170,
            "Name": "b%",
            "Args": "BB",
            "Returns": "B",
            "Cost": 20,
            "Size": 1,
            "Doc": "A modulo B. A and B are interpreted as big-endian unsigned integers. Fail if B is zero.",
            "Groups": ["Byte Array Arithmetic"]
        },
        {
            "Opcode": 171,
            "Name": "b|",
            "Args": "BB",
            "Returns": "B",
            "Cost": 6,
            "Size": 1,
            "Doc": "A bitwise-or B. A and B are zero-left extended to the greater of their lengths",
            "Groups": ["Byte Array Logic"]
        },
        {
            "Opcode": 172,
            "Name": "b\u0026",
            "Args": "BB",
            "Returns": "B",
            "Cost": 6,
            "Size": 1,
            "Doc": "A bitwise-and B. A and B are zero-left extended to the greater of their lengths",
            "Groups": ["Byte Array Logic"]
        },
        {
            "Opcode": 173,
            "Name": "b^",
            "Args": "BB",
            "Returns": "B",
            "Cost": 6,
            "Size": 1,
            "Doc": "A bitwise-xor B. A and B are zero-left extended to the greater of their lengths",
            "Groups": ["Byte Array Logic"]
        },
        {
            "Opcode": 174,
            "Name": "b~",
            "Args": "B",
            "Returns": "B",
            "Cost": 4,
            "Size": 1,
            "Doc": "A with all bits inverted",
            "Groups": ["Byte Array Logic"]
        },
        {
            "Opcode": 175,
            "Name": "bzero",
            "Args": "U",
            "Returns": "B",
            "Cost": 1,
            "Size": 1,
            "Doc": "zero filled byte-array of length A",
            "Groups": ["Loading Values"]
        },
        {
            "Opcode": 176,
            "Name": "log",
            "Args": "B",
            "Cost": 1,
            "Size": 1,
            "Doc": "write A to log state of the current application",
            "DocExtra": "`log` fails if called more than MaxLogCalls times in a program, or if the sum of logged bytes exceeds 1024 bytes.",
            "Groups": ["State Access"]
        },
        {
            "Opcode": 177,
            "Name": "itxn_begin",
            "Cost": 1,
            "Size": 1,
            "Doc": "begin preparation of a new inner transaction in a new transaction group",
            "DocExtra": "`itxn_begin` initializes Sender to the application address; Fee to the minimum allowable, taking into account MinTxnFee and credit from overpaying in earlier transactions; FirstValid/LastValid to the values in the invoking transaction, and all other fields to zero or empty values.",
            "Groups": ["Inner Transactions"]
        },
        {
            "Opcode": 178,
            "Name": "itxn_field",
            "Args": ".",
            "Cost": 1,
            "Size": 2,
            "ArgEnum": [
                "Sender",
                "Fee",
                "FirstValid",
                "FirstValidTime",
                "LastValid",
                "Note",
                "Lease",
                "Receiver",
                "Amount",
                "CloseRemainderTo",
                "VotePK",
                "SelectionPK",
                "VoteFirst",
                "VoteLast",
                "VoteKeyDilution",
                "Type",
                "TypeEnum",
                "XferAsset",
                "AssetAmount",
                "AssetSender",
                "AssetReceiver",
                "AssetCloseTo",
                "GroupIndex",
                "TxID",
                "ApplicationID",
                "OnCompletion",
                "ApplicationArgs",
                "NumAppArgs",
                "Accounts",
                "NumAccounts",
                "ApprovalProgram",
                "ClearStateProgram",
                "RekeyTo",
                "ConfigAsset",
                "ConfigAssetTotal",
                "ConfigAssetDecimals",
                "ConfigAssetDefaultFrozen",
                "ConfigAssetUnitName",
                "ConfigAssetName",
                "ConfigAssetURL",
                "ConfigAssetMetadataHash",
                "ConfigAssetManager",
                "ConfigAssetReserve",
                "ConfigAssetFreeze",
                "ConfigAssetClawback",
                "FreezeAsset",
                "FreezeAssetAccount",
                "FreezeAssetFrozen",
                "Assets",
                "NumAssets",
                "Applications",
                "NumApplications",
                "GlobalNumUint",
                "GlobalNumByteSlice",
                "LocalNumUint",
                "LocalNumByteSlice",
                "ExtraProgramPages",
                "Nonparticipation",
                "Logs",
                "NumLogs",
                "CreatedAssetID",
                "CreatedApplicationID",
                "LastLog",
                "StateProofPK"
            ],
            "ArgEnumTypes": "BUUUUBBBUBBBUUUBUUUBBBUBUUBUBUBBBUUUUBBBBBBBBUBUUUUUUUUUUUBUUUBB",
            "Doc": "set field F of the current inner transaction to A",
            "DocExtra": "`itxn_field` fails if A is of the wrong type for F, including a byte array of the wrong size for use as an address when F is an address field. `itxn_field` also fails if A is an account, asset, or app that is not _available_, or an attempt is made extend an array field beyond the limit imposed by consensus parameters. (Addresses set into asset params of acfg transactions need not be _available_.)",
            "ImmediateNote": "{uint8 transaction field index}",
            "Groups": ["Inner Transactions"]
        },
        {
            "Opcode": 179,
            "Name": "itxn_submit",
            "Cost": 1,
            "Size": 1,
            "Doc": "execute the current inner transaction group. Fail if executing this group would exceed the inner transaction limit, or if any transaction in the group fails.",
            "DocExtra": "`itxn_submit` resets the current transaction so that it can not be resubmitted. A new `itxn_begin` is required to prepare another inner transaction.",
            "Groups": ["Inner Transactions"]
        },
        {
            "Opcode": 180,
            "Name": "itxn",
            "Returns": ".",
            "Cost": 1,
            "Size": 2,
            "ArgEnum": [
                "Sender",
                "Fee",
                "FirstValid",
                "FirstValidTime",
                "LastValid",
                "Note",
                "Lease",
                "Receiver",
                "Amount",
                "CloseRemainderTo",
                "VotePK",
                "SelectionPK",
                "VoteFirst",
                "VoteLast",
                "VoteKeyDilution",
                "Type",
                "TypeEnum",
                "XferAsset",
                "AssetAmount",
                "AssetSender",
                "AssetReceiver",
                "AssetCloseTo",
                "GroupIndex",
                "TxID",
                "ApplicationID",
                "OnCompletion",
                "ApplicationArgs",
                "NumAppArgs",
                "Accounts",
                "NumAccounts",
                "ApprovalProgram",
                "ClearStateProgram",
                "RekeyTo",
                "ConfigAsset",
                "ConfigAssetTotal",
                "ConfigAssetDecimals",
                "ConfigAssetDefaultFrozen",
                "ConfigAssetUnitName",
                "ConfigAssetName",
                "ConfigAssetURL",
                "ConfigAssetMetadataHash",
                "ConfigAssetManager",
                "ConfigAssetReserve",
                "ConfigAssetFreeze",
                "ConfigAssetClawback",
                "FreezeAsset",
                "FreezeAssetAccount",
                "FreezeAssetFrozen",
                "Assets",
                "NumAssets",
                "Applications",
                "NumApplications",
                "GlobalNumUint",
                "GlobalNumByteSlice",
                "LocalNumUint",
                "LocalNumByteSlice",
                "ExtraProgramPages",
                "Nonparticipation",
                "Logs",
                "NumLogs",
                "CreatedAssetID",
                "CreatedApplicationID",
                "LastLog",
                "StateProofPK"
            ],
            "ArgEnumTypes": "BUUUUBBBUBBBUUUBUUUBBBUBUUBUBUBBBUUUUBBBBBBBBUBUUUUUUUUUUUBUUUBB",
            "Doc": "field F of the last inner transaction",
            "ImmediateNote": "{uint8 transaction field index}",
            "Groups": ["Inner Transactions"]
        },
        {
            "Opcode": 181,
            "Name": "itxna",
            "Returns": ".",
            "Cost": 1,
            "Size": 3,
            "ArgEnum": [
                "ApplicationArgs",
                "Accounts",
                "Assets",
                "Applications",
                "Logs"
            ],
            "ArgEnumTypes": "BBUUB",
            "Doc": "Ith value of the array field F of the last inner transaction",
            "ImmediateNote": "{uint8 transaction field index} {uint8 transaction field array index}",
            "Groups": ["Inner Transactions"]
        },
        {
            "Opcode": 182,
            "Name": "itxn_next",
            "Cost": 1,
            "Size": 1,
            "Doc": "begin preparation of a new inner transaction in the same transaction group",
            "DocExtra": "`itxn_next` initializes the transaction exactly as `itxn_begin` does",
            "Groups": ["Inner Transactions"]
        },
        {
            "Opcode": 183,
            "Name": "gitxn",
            "Returns": ".",
            "Cost": 1,
            "Size": 3,
            "ArgEnum": [
                "Sender",
                "Fee",
                "FirstValid",
                "FirstValidTime",
                "LastValid",
                "Note",
                "Lease",
                "Receiver",
                "Amount",
                "CloseRemainderTo",
                "VotePK",
                "SelectionPK",
                "VoteFirst",
                "VoteLast",
                "VoteKeyDilution",
                "Type",
                "TypeEnum",
                "XferAsset",
                "AssetAmount",
                "AssetSender",
                "AssetReceiver",
                "AssetCloseTo",
                "GroupIndex",
                "TxID",
                "ApplicationID",
                "OnCompletion",
                "ApplicationArgs",
                "NumAppArgs",
                "Accounts",
                "NumAccounts",
                "ApprovalProgram",
                "ClearStateProgram",
                "RekeyTo",
                "ConfigAsset",
                "ConfigAssetTotal",
                "ConfigAssetDecimals",
                "ConfigAssetDefaultFrozen",
                "ConfigAssetUnitName",
                "ConfigAssetName",
                "ConfigAssetURL",
                "ConfigAssetMetadataHash",
                "ConfigAssetManager",
                "ConfigAssetReserve",
                "ConfigAssetFreeze",
                "ConfigAssetClawback",
                "FreezeAsset",
                "FreezeAssetAccount",
                "FreezeAssetFrozen",
                "Assets",
                "NumAssets",
                "Applications",
                "NumApplications",
                "GlobalNumUint",
                "GlobalNumByteSlice",
                "LocalNumUint",
                "LocalNumByteSlice",
                "ExtraProgramPages",
                "Nonparticipation",
                "Logs",
                "NumLogs",
                "CreatedAssetID",
                "CreatedApplicationID",
                "LastLog",
                "StateProofPK"
            ],
            "ArgEnumTypes": "BUUUUBBBUBBBUUUBUUUBBBUBUUBUBUBBBUUUUBBBBBBBBUBUUUUUUUUUUUBUUUBB",
            "Doc": "field F of the Tth transaction in the last inner group submitted",
            "ImmediateNote": "{uint8 transaction group index} {uint8 transaction field index}",
            "Groups": ["Inner Transactions"]
        },
        {
            "Opcode": 184,
            "Name": "gitxna",
            "Returns": ".",
            "Cost": 1,
            "Size": 4,
            "ArgEnum": [
                "ApplicationArgs",
                "Accounts",
                "Assets",
                "Applications",
                "Logs"
            ],
            "ArgEnumTypes": "BBUUB",
            "Doc": "Ith value of the array field F from the Tth transaction in the last inner group submitted",
            "ImmediateNote": "{uint8 transaction group index} {uint8 transaction field index} {uint8 transaction field array index}",
            "Groups": ["Inner Transactions"]
        },
        {
            "Opcode": 192,
            "Name": "txnas",
            "Args": "U",
            "Returns": ".",
            "Cost": 1,
            "Size": 2,
            "ArgEnum": [
                "ApplicationArgs",
                "Accounts",
                "Assets",
                "Applications",
                "Logs"
            ],
            "ArgEnumTypes": "BBUUB",
            "Doc": "Ath value of the array field F of the current transaction",
            "ImmediateNote": "{uint8 transaction field index}",
            "Groups": ["Loading Values"]
        },
        {
            "Opcode": 193,
            "Name": "gtxnas",
            "Args": "U",
            "Returns": ".",
            "Cost": 1,
            "Size": 3,
            "ArgEnum": [
                "ApplicationArgs",
                "Accounts",
                "Assets",
                "Applications",
                "Logs"
            ],
            "ArgEnumTypes": "BBUUB",
            "Doc": "Ath value of the array field F from the Tth transaction in the current group",
            "ImmediateNote": "{uint8 transaction group index} {uint8 transaction field index}",
            "Groups": ["Loading Values"]
        },
        {
            "Opcode": 194,
            "Name": "gtxnsas",
            "Args": "UU",
            "Returns": ".",
            "Cost": 1,
            "Size": 2,
            "ArgEnum": [
                "ApplicationArgs",
                "Accounts",
                "Assets",
                "Applications",
                "Logs"
            ],
            "ArgEnumTypes": "BBUUB",
            "Doc": "Bth value of the array field F from the Ath transaction in the current group",
            "ImmediateNote": "{uint8 transaction field index}",
            "Groups": ["Loading Values"]
        },
        {
            "Opcode": 195,
            "Name": "args",
            "Args": "U",
            "Returns": "B",
            "Cost": 1,
            "Size": 1,
            "Doc": "Ath LogicSig argument",
            "Groups": ["Loading Values"]
        },
        {
            "Opcode": 196,
            "Name": "gloadss",
            "Args": "UU",
            "Returns": ".",
            "Cost": 1,
            "Size": 1,
            "Doc": "Bth scratch space value of the Ath transaction in the current group",
            "Groups": ["Loading Values"]
        },
        {
            "Opcode": 197,
            "Name": "itxnas",
            "Args": "U",
            "Returns": ".",
            "Cost": 1,
            "Size": 2,
            "Doc": "Ath value of the array field F of the last inner transaction",
            "ImmediateNote": "{uint8 transaction field index}",
            "Groups": ["Inner Transactions"]
        },
        {
            "Opcode": 198,
            "Name": "gitxnas",
            "Args": "U",
            "Returns": ".",
            "Cost": 1,
            "Size": 3,
            "Doc": "Ath value of the array field F from the Tth transaction in the last inner group submitted",
            "ImmediateNote": "{uint8 transaction group index} {uint8 transaction field index}",
            "Groups": ["Inner Transactions"]
        }
    ]
}

},{}],71:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.langspecLogicSigVersion = exports.langspecEvalMaxVersion = exports.checkPushByteOp = exports.checkPushIntOp = exports.checkByteConstBlock = exports.checkIntConstBlock = exports.checkProgram = exports.readProgram = exports.parseUvarint = void 0;
const langspec_json_1 = __importDefault(require("./langspec.json"));
let opcodes;
const maxCost = 20000;
const maxLength = 1000;
function parseUvarint(array) {
    let x = 0;
    let s = 0;
    for (let i = 0; i < array.length; i++) {
        const b = array[i];
        if (b < 0x80) {
            if (i > 9 || (i === 9 && b > 1)) {
                return [0, -(i + 1)];
            }
            return [x | (b << s), i + 1];
        }
        x += (b & 0x7f) << s;
        s += 7;
    }
    return [0, 0];
}
exports.parseUvarint = parseUvarint;
function readIntConstBlock(program, pc) {
    let size = 1;
    const parsed = parseUvarint(program.slice(pc + size));
    const numInts = parsed[0];
    let bytesUsed = parsed[1];
    if (bytesUsed <= 0) {
        throw new Error(`could not decode int const block size at pc=${pc + size}`);
    }
    const ints = [];
    size += bytesUsed;
    for (let i = 0; i < numInts; i++) {
        if (pc + size >= program.length) {
            throw new Error('intcblock ran past end of program');
        }
        let numberFound;
        [numberFound, bytesUsed] = parseUvarint(program.slice(pc + size));
        if (bytesUsed <= 0) {
            throw new Error(`could not decode int const[${i}] block size at pc=${pc + size}`);
        }
        ints.push(numberFound);
        size += bytesUsed;
    }
    return [size, ints];
}
function readByteConstBlock(program, pc) {
    let size = 1;
    const parsed = parseUvarint(program.slice(pc + size));
    const numInts = parsed[0];
    let bytesUsed = parsed[1];
    if (bytesUsed <= 0) {
        throw new Error(`could not decode []byte const block size at pc=${pc + size}`);
    }
    const byteArrays = [];
    size += bytesUsed;
    for (let i = 0; i < numInts; i++) {
        if (pc + size >= program.length) {
            throw new Error('bytecblock ran past end of program');
        }
        let itemLen;
        [itemLen, bytesUsed] = parseUvarint(program.slice(pc + size));
        if (bytesUsed <= 0) {
            throw new Error(`could not decode []byte] const[${i}] block size at pc=${pc + size}`);
        }
        size += bytesUsed;
        if (pc + size + itemLen > program.length) {
            throw new Error('bytecblock ran past end of program');
        }
        const byteArray = program.slice(pc + size, pc + size + itemLen);
        byteArrays.push(byteArray);
        size += itemLen;
    }
    return [size, byteArrays];
}
function readPushIntOp(program, pc) {
    let size = 1;
    const [numberFound, bytesUsed] = parseUvarint(program.slice(pc + size));
    if (bytesUsed <= 0) {
        throw new Error(`could not decode push int const at pc=${pc + size}`);
    }
    size += bytesUsed;
    return [size, numberFound];
}
function readPushByteOp(program, pc) {
    let size = 1;
    const [itemLen, bytesUsed] = parseUvarint(program.slice(pc + size));
    if (bytesUsed <= 0) {
        throw new Error(`could not decode push []byte const size at pc=${pc + size}`);
    }
    size += bytesUsed;
    if (pc + size + itemLen > program.length) {
        throw new Error('pushbytes ran past end of program');
    }
    const byteArray = program.slice(pc + size, pc + size + itemLen);
    size += itemLen;
    return [size, byteArray];
}
function readProgram(program, args) {
    const intcblockOpcode = 32;
    const bytecblockOpcode = 38;
    const pushbytesOpcode = 128;
    const pushintOpcode = 129;
    if (!program) {
        throw new Error('empty program');
    }
    if (typeof args === 'undefined') {
        
        args = [];
    }
    if (!Array.isArray(args)) {
        throw new Error('invalid arguments');
    }
    const [version, vlen] = parseUvarint(program);
    if (vlen <= 0) {
        throw new Error('version parsing error');
    }
    if (version > langspec_json_1.default.EvalMaxVersion) {
        throw new Error('unsupported version');
    }
    let cost = 0;
    let { length } = program;
    for (const arg of args) {
        length += arg.length;
    }
    if (length > maxLength) {
        throw new Error('program too long');
    }
    if (!opcodes) {
        opcodes = {};
        for (const op of langspec_json_1.default.Ops) {
            opcodes[op.Opcode] = op;
        }
    }
    let pc = vlen;
    let ints = [];
    let byteArrays = [];
    while (pc < program.length) {
        const op = opcodes[program[pc]];
        if (op === undefined) {
            throw new Error('invalid instruction');
        }
        cost += op.Cost;
        let size = op.Size;
        if (size === 0) {
            switch (op.Opcode) {
                case intcblockOpcode: {
                    let foundInts;
                    [size, foundInts] = readIntConstBlock(program, pc);
                    ints = ints.concat(foundInts);
                    break;
                }
                case bytecblockOpcode: {
                    let foundByteArrays;
                    [size, foundByteArrays] = readByteConstBlock(program, pc);
                    byteArrays = byteArrays.concat(foundByteArrays);
                    break;
                }
                case pushintOpcode: {
                    let foundInt;
                    [size, foundInt] = readPushIntOp(program, pc);
                    ints.push(foundInt);
                    break;
                }
                case pushbytesOpcode: {
                    let foundByteArray;
                    [size, foundByteArray] = readPushByteOp(program, pc);
                    byteArrays.push(foundByteArray);
                    break;
                }
                default: {
                    throw new Error('invalid instruction');
                }
            }
        }
        pc += size;
    }
    
    if (version < 4 && cost > maxCost) {
        throw new Error('program too costly for Teal version < 4. consider using v4.');
    }
    return [ints, byteArrays, true];
}
exports.readProgram = readProgram;
function checkProgram(program, args) {
    const [, , success] = readProgram(program, args);
    return success;
}
exports.checkProgram = checkProgram;
function checkIntConstBlock(program, pc) {
    const [size] = readIntConstBlock(program, pc);
    return size;
}
exports.checkIntConstBlock = checkIntConstBlock;
function checkByteConstBlock(program, pc) {
    const [size] = readByteConstBlock(program, pc);
    return size;
}
exports.checkByteConstBlock = checkByteConstBlock;
function checkPushIntOp(program, pc) {
    const [size] = readPushIntOp(program, pc);
    return size;
}
exports.checkPushIntOp = checkPushIntOp;
function checkPushByteOp(program, pc) {
    const [size] = readPushByteOp(program, pc);
    return size;
}
exports.checkPushByteOp = checkPushByteOp;
exports.langspecEvalMaxVersion = langspec_json_1.default.EvalMaxVersion;
exports.langspecLogicSigVersion = langspec_json_1.default.LogicSigVersion;

},{"./langspec.json":70}],72:[function(require,module,exports){
(function (Buffer){(function (){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tealSignFromProgram = exports.tealSign = exports.logicSigFromByte = exports.signLogicSigTransaction = exports.signLogicSigTransactionObject = exports.makeLogicSig = exports.LogicSigAccount = exports.LogicSig = void 0;
const nacl = __importStar(require("./nacl/naclWrappers"));
const address = __importStar(require("./encoding/address"));
const encoding = __importStar(require("./encoding/encoding"));
const logic = __importStar(require("./logic/logic"));
const multisig_1 = require("./multisig");
const utils = __importStar(require("./utils/utils"));
const txnBuilder = __importStar(require("./transaction"));
class LogicSig {
    constructor(program, programArgs) {
        this.tag = Buffer.from('Program');
        if (programArgs &&
            (!Array.isArray(programArgs) ||
                !programArgs.every((arg) => arg.constructor === Uint8Array || Buffer.isBuffer(arg)))) {
            throw new TypeError('Invalid arguments');
        }
        let args;
        if (programArgs != null)
            args = programArgs.map((arg) => new Uint8Array(arg));
        if (!logic.checkProgram(program, args)) {
            throw new Error('Invalid program');
        }
        this.logic = program;
        this.args = args;
        this.sig = undefined;
        this.msig = undefined;
    }
    
    get_obj_for_encoding() {
        const obj = {
            l: this.logic,
        };
        if (this.args) {
            obj.arg = this.args;
        }
        if (this.sig) {
            obj.sig = this.sig;
        }
        else if (this.msig) {
            obj.msig = this.msig;
        }
        return obj;
    }
    
    static from_obj_for_encoding(encoded) {
        const lsig = new LogicSig(encoded.l, encoded.arg);
        lsig.sig = encoded.sig;
        lsig.msig = encoded.msig;
        return lsig;
    }
        verify(publicKey) {
        if (this.sig && this.msig) {
            return false;
        }
        try {
            logic.checkProgram(this.logic, this.args);
        }
        catch (e) {
            return false;
        }
        const toBeSigned = utils.concatArrays(this.tag, this.logic);
        if (!this.sig && !this.msig) {
            const hash = nacl.genericHash(toBeSigned);
            return utils.arrayEqual(hash, publicKey);
        }
        if (this.sig) {
            return nacl.verify(toBeSigned, this.sig, publicKey);
        }
        return multisig_1.verifyMultisig(toBeSigned, this.msig, publicKey);
    }
        address() {
        const toBeSigned = utils.concatArrays(this.tag, this.logic);
        const hash = nacl.genericHash(toBeSigned);
        return address.encodeAddress(new Uint8Array(hash));
    }
        sign(secretKey, msig) {
        if (msig == null) {
            this.sig = this.signProgram(secretKey);
        }
        else {
            const subsigs = msig.addrs.map((addr) => ({
                pk: address.decodeAddress(addr).publicKey,
            }));
            this.msig = {
                v: msig.version,
                thr: msig.threshold,
                subsig: subsigs,
            };
            const [sig, index] = this.singleSignMultisig(secretKey, this.msig);
            this.msig.subsig[index].s = sig;
        }
    }
        appendToMultisig(secretKey) {
        if (this.msig === undefined) {
            throw new Error('no multisig present');
        }
        const [sig, index] = this.singleSignMultisig(secretKey, this.msig);
        this.msig.subsig[index].s = sig;
    }
    signProgram(secretKey) {
        const toBeSigned = utils.concatArrays(this.tag, this.logic);
        const sig = nacl.sign(toBeSigned, secretKey);
        return sig;
    }
    singleSignMultisig(secretKey, msig) {
        let index = -1;
        const myPk = nacl.keyPairFromSecretKey(secretKey).publicKey;
        for (let i = 0; i < msig.subsig.length; i++) {
            const { pk } = msig.subsig[i];
            if (utils.arrayEqual(pk, myPk)) {
                index = i;
                break;
            }
        }
        if (index === -1) {
            throw new Error('invalid secret key');
        }
        const sig = this.signProgram(secretKey);
        return [sig, index];
    }
    toByte() {
        return encoding.encode(this.get_obj_for_encoding());
    }
    static fromByte(encoded) {
        const decodedObj = encoding.decode(encoded);
        return LogicSig.from_obj_for_encoding(decodedObj);
    }
}
exports.LogicSig = LogicSig;
class LogicSigAccount {
        constructor(program, args) {
        this.lsig = new LogicSig(program, args);
        this.sigkey = undefined;
    }
    
    get_obj_for_encoding() {
        const obj = {
            lsig: this.lsig.get_obj_for_encoding(),
        };
        if (this.sigkey) {
            obj.sigkey = this.sigkey;
        }
        return obj;
    }
    
    static from_obj_for_encoding(encoded) {
        const lsigAccount = new LogicSigAccount(encoded.lsig.l, encoded.lsig.arg);
        lsigAccount.lsig = LogicSig.from_obj_for_encoding(encoded.lsig);
        lsigAccount.sigkey = encoded.sigkey;
        return lsigAccount;
    }
        toByte() {
        return encoding.encode(this.get_obj_for_encoding());
    }
        static fromByte(encoded) {
        const decodedObj = encoding.decode(encoded);
        return LogicSigAccount.from_obj_for_encoding(decodedObj);
    }
        isDelegated() {
        return !!(this.lsig.sig || this.lsig.msig);
    }
        verify() {
        const addr = this.address();
        return this.lsig.verify(address.decodeAddress(addr).publicKey);
    }
        address() {
        if (this.lsig.sig && this.lsig.msig) {
            throw new Error('LogicSig has too many signatures. At most one of sig or msig may be present');
        }
        if (this.lsig.sig) {
            if (!this.sigkey) {
                throw new Error('Signing key for delegated account is missing');
            }
            return address.encodeAddress(this.sigkey);
        }
        if (this.lsig.msig) {
            const msigMetadata = {
                version: this.lsig.msig.v,
                threshold: this.lsig.msig.thr,
                pks: this.lsig.msig.subsig.map((subsig) => subsig.pk),
            };
            return address.encodeAddress(address.fromMultisigPreImg(msigMetadata));
        }
        return this.lsig.address();
    }
        signMultisig(msig, secretKey) {
        this.lsig.sign(secretKey, msig);
    }
        appendToMultisig(secretKey) {
        this.lsig.appendToMultisig(secretKey);
    }
        sign(secretKey) {
        this.lsig.sign(secretKey);
        this.sigkey = nacl.keyPairFromSecretKey(secretKey).publicKey;
    }
}
exports.LogicSigAccount = LogicSigAccount;
function makeLogicSig(program, args) {
    return new LogicSig(program, args);
}
exports.makeLogicSig = makeLogicSig;
function signLogicSigTransactionWithAddress(txn, lsig, lsigAddress) {
    if (!lsig.verify(lsigAddress)) {
        throw new Error('Logic signature verification failed. Ensure the program and signature are valid.');
    }
    const signedTxn = {
        lsig: lsig.get_obj_for_encoding(),
        txn: txn.get_obj_for_encoding(),
    };
    if (!nacl.bytesEqual(lsigAddress, txn.from.publicKey)) {
        signedTxn.sgnr = Buffer.from(lsigAddress);
    }
    return {
        txID: txn.txID().toString(),
        blob: encoding.encode(signedTxn),
    };
}
function signLogicSigTransactionObject(txn, lsigObject) {
    let lsig;
    let lsigAddress;
    if (lsigObject instanceof LogicSigAccount) {
        lsig = lsigObject.lsig;
        lsigAddress = address.decodeAddress(lsigObject.address()).publicKey;
    }
    else {
        lsig = lsigObject;
        if (lsig.sig) {
            
            
            
            
            lsigAddress = txn.from.publicKey;
        }
        else if (lsig.msig) {
            const msigMetadata = {
                version: lsig.msig.v,
                threshold: lsig.msig.thr,
                pks: lsig.msig.subsig.map((subsig) => subsig.pk),
            };
            lsigAddress = address.fromMultisigPreImg(msigMetadata);
        }
        else {
            lsigAddress = address.decodeAddress(lsig.address()).publicKey;
        }
    }
    return signLogicSigTransactionWithAddress(txn, lsig, lsigAddress);
}
exports.signLogicSigTransactionObject = signLogicSigTransactionObject;
function signLogicSigTransaction(txn, lsigObject) {
    const algoTxn = txnBuilder.instantiateTxnIfNeeded(txn);
    return signLogicSigTransactionObject(algoTxn, lsigObject);
}
exports.signLogicSigTransaction = signLogicSigTransaction;
function logicSigFromByte(encoded) {
    return LogicSig.fromByte(encoded);
}
exports.logicSigFromByte = logicSigFromByte;
const SIGN_PROGRAM_DATA_PREFIX = Buffer.from('ProgData');
function tealSign(sk, data, contractAddress) {
    const parts = utils.concatArrays(address.decodeAddress(contractAddress).publicKey, data);
    const toBeSigned = Buffer.from(utils.concatArrays(SIGN_PROGRAM_DATA_PREFIX, parts));
    return nacl.sign(toBeSigned, sk);
}
exports.tealSign = tealSign;
function tealSignFromProgram(sk, data, program) {
    const lsig = new LogicSig(program);
    const contractAddress = lsig.address();
    return tealSign(sk, data, contractAddress);
}
exports.tealSignFromProgram = tealSignFromProgram;

}).call(this)}).call(this,require("buffer").Buffer)
},{"./encoding/address":58,"./encoding/encoding":60,"./logic/logic":71,"./multisig":77,"./nacl/naclWrappers":78,"./transaction":80,"./utils/utils":88,"buffer":95}],73:[function(require,module,exports){
(function (Buffer){(function (){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogicTemplates = exports.multisigAddress = exports.appendSignMultisigTransaction = exports.mergeMultisigTransactions = exports.signMultisigTransaction = exports.tealSignFromProgram = exports.tealSign = exports.logicSigFromByte = exports.signLogicSigTransactionObject = exports.signLogicSigTransaction = exports.makeLogicSig = exports.LogicSigAccount = exports.assignGroupID = exports.computeGroupID = exports.INVALID_MICROALGOS_ERROR_MSG = exports.algosToMicroalgos = exports.microalgosToAlgos = exports.mnemonicFromSeed = exports.seedFromMnemonic = exports.mnemonicToSecretKey = exports.secretKeyToMnemonic = exports.masterDerivationKeyToMnemonic = exports.mnemonicToMasterDerivationKey = exports.modelsv2 = exports.generateAccount = exports.decodeUint64 = exports.encodeUint64 = exports.bigIntToBytes = exports.bytesToBigInt = exports.getApplicationAddress = exports.decodeAddress = exports.encodeAddress = exports.isValidAddress = exports.waitForConfirmation = exports.Indexer = exports.IntDecoding = exports.Kmd = exports.Algodv2 = exports.ERROR_INVALID_MICROALGOS = exports.ERROR_MULTISIG_BAD_SENDER = exports.decodeObj = exports.encodeObj = exports.verifyBytes = exports.signBytes = exports.signBid = exports.signTransaction = exports.MULTISIG_BAD_SENDER_ERROR_MSG = void 0;
const nacl = __importStar(require("./nacl/naclWrappers"));
const address = __importStar(require("./encoding/address"));
const encoding = __importStar(require("./encoding/encoding"));
const txnBuilder = __importStar(require("./transaction"));
const LogicTemplatesCommonJSExport = __importStar(require("./logicTemplates"));
const bid_1 = __importDefault(require("./bid"));
const convert = __importStar(require("./convert"));
const utils = __importStar(require("./utils/utils"));
const SIGN_BYTES_PREFIX = Buffer.from([77, 88]); 

exports.MULTISIG_BAD_SENDER_ERROR_MSG = 'The transaction sender address and multisig preimage do not match.';
function signTransaction(txn, sk) {
    if (typeof txn.from === 'undefined') {
        
        const key = nacl.keyPairFromSecretKey(sk);
        
        txn.from = address.encodeAddress(key.publicKey);
    }
    const algoTxn = txnBuilder.instantiateTxnIfNeeded(txn);
    return {
        txID: algoTxn.txID().toString(),
        blob: algoTxn.signTxn(sk),
    };
}
exports.signTransaction = signTransaction;
function signBid(bid, sk) {
    const signedBid = new bid_1.default(bid);
    return signedBid.signBid(sk);
}
exports.signBid = signBid;
function signBytes(bytes, sk) {
    const toBeSigned = Buffer.from(utils.concatArrays(SIGN_BYTES_PREFIX, bytes));
    const sig = nacl.sign(toBeSigned, sk);
    return sig;
}
exports.signBytes = signBytes;
function verifyBytes(bytes, signature, addr) {
    const toBeVerified = Buffer.from(utils.concatArrays(SIGN_BYTES_PREFIX, bytes));
    const pk = address.decodeAddress(addr).publicKey;
    return nacl.verify(toBeVerified, signature, pk);
}
exports.verifyBytes = verifyBytes;
function encodeObj(o) {
    return new Uint8Array(encoding.encode(o));
}
exports.encodeObj = encodeObj;
function decodeObj(o) {
    return encoding.decode(o);
}
exports.decodeObj = decodeObj;
exports.ERROR_MULTISIG_BAD_SENDER = new Error(exports.MULTISIG_BAD_SENDER_ERROR_MSG);
exports.ERROR_INVALID_MICROALGOS = new Error(convert.INVALID_MICROALGOS_ERROR_MSG);
__exportStar(require("./client/algod"), exports);
var algod_1 = require("./client/v2/algod/algod");
Object.defineProperty(exports, "Algodv2", { enumerable: true, get: function () { return __importDefault(algod_1).default; } });
var kmd_1 = require("./client/kmd");
Object.defineProperty(exports, "Kmd", { enumerable: true, get: function () { return __importDefault(kmd_1).default; } });
var intDecoding_1 = require("./types/intDecoding");
Object.defineProperty(exports, "IntDecoding", { enumerable: true, get: function () { return __importDefault(intDecoding_1).default; } });
var indexer_1 = require("./client/v2/indexer/indexer");
Object.defineProperty(exports, "Indexer", { enumerable: true, get: function () { return __importDefault(indexer_1).default; } });
var wait_1 = require("./wait");
Object.defineProperty(exports, "waitForConfirmation", { enumerable: true, get: function () { return wait_1.waitForConfirmation; } });
var address_1 = require("./encoding/address");
Object.defineProperty(exports, "isValidAddress", { enumerable: true, get: function () { return address_1.isValidAddress; } });
Object.defineProperty(exports, "encodeAddress", { enumerable: true, get: function () { return address_1.encodeAddress; } });
Object.defineProperty(exports, "decodeAddress", { enumerable: true, get: function () { return address_1.decodeAddress; } });
Object.defineProperty(exports, "getApplicationAddress", { enumerable: true, get: function () { return address_1.getApplicationAddress; } });
var bigint_1 = require("./encoding/bigint");
Object.defineProperty(exports, "bytesToBigInt", { enumerable: true, get: function () { return bigint_1.bytesToBigInt; } });
Object.defineProperty(exports, "bigIntToBytes", { enumerable: true, get: function () { return bigint_1.bigIntToBytes; } });
var uint64_1 = require("./encoding/uint64");
Object.defineProperty(exports, "encodeUint64", { enumerable: true, get: function () { return uint64_1.encodeUint64; } });
Object.defineProperty(exports, "decodeUint64", { enumerable: true, get: function () { return uint64_1.decodeUint64; } });
var account_1 = require("./account");
Object.defineProperty(exports, "generateAccount", { enumerable: true, get: function () { return __importDefault(account_1).default; } });
exports.modelsv2 = __importStar(require("./client/v2/algod/models/types"));
var mnemonic_1 = require("./mnemonic/mnemonic");
Object.defineProperty(exports, "mnemonicToMasterDerivationKey", { enumerable: true, get: function () { return mnemonic_1.mnemonicToMasterDerivationKey; } });
Object.defineProperty(exports, "masterDerivationKeyToMnemonic", { enumerable: true, get: function () { return mnemonic_1.masterDerivationKeyToMnemonic; } });
Object.defineProperty(exports, "secretKeyToMnemonic", { enumerable: true, get: function () { return mnemonic_1.secretKeyToMnemonic; } });
Object.defineProperty(exports, "mnemonicToSecretKey", { enumerable: true, get: function () { return mnemonic_1.mnemonicToSecretKey; } });
Object.defineProperty(exports, "seedFromMnemonic", { enumerable: true, get: function () { return mnemonic_1.seedFromMnemonic; } });
Object.defineProperty(exports, "mnemonicFromSeed", { enumerable: true, get: function () { return mnemonic_1.mnemonicFromSeed; } });
var convert_1 = require("./convert");
Object.defineProperty(exports, "microalgosToAlgos", { enumerable: true, get: function () { return convert_1.microalgosToAlgos; } });
Object.defineProperty(exports, "algosToMicroalgos", { enumerable: true, get: function () { return convert_1.algosToMicroalgos; } });
Object.defineProperty(exports, "INVALID_MICROALGOS_ERROR_MSG", { enumerable: true, get: function () { return convert_1.INVALID_MICROALGOS_ERROR_MSG; } });
var group_1 = require("./group");
Object.defineProperty(exports, "computeGroupID", { enumerable: true, get: function () { return group_1.computeGroupID; } });
Object.defineProperty(exports, "assignGroupID", { enumerable: true, get: function () { return group_1.assignGroupID; } });
var logicsig_1 = require("./logicsig");
Object.defineProperty(exports, "LogicSigAccount", { enumerable: true, get: function () { return logicsig_1.LogicSigAccount; } });
Object.defineProperty(exports, "makeLogicSig", { enumerable: true, get: function () { return logicsig_1.makeLogicSig; } });
Object.defineProperty(exports, "signLogicSigTransaction", { enumerable: true, get: function () { return logicsig_1.signLogicSigTransaction; } });
Object.defineProperty(exports, "signLogicSigTransactionObject", { enumerable: true, get: function () { return logicsig_1.signLogicSigTransactionObject; } });
Object.defineProperty(exports, "logicSigFromByte", { enumerable: true, get: function () { return logicsig_1.logicSigFromByte; } });
Object.defineProperty(exports, "tealSign", { enumerable: true, get: function () { return logicsig_1.tealSign; } });
Object.defineProperty(exports, "tealSignFromProgram", { enumerable: true, get: function () { return logicsig_1.tealSignFromProgram; } });
var multisig_1 = require("./multisig");
Object.defineProperty(exports, "signMultisigTransaction", { enumerable: true, get: function () { return multisig_1.signMultisigTransaction; } });
Object.defineProperty(exports, "mergeMultisigTransactions", { enumerable: true, get: function () { return multisig_1.mergeMultisigTransactions; } });
Object.defineProperty(exports, "appendSignMultisigTransaction", { enumerable: true, get: function () { return multisig_1.appendSignMultisigTransaction; } });
Object.defineProperty(exports, "multisigAddress", { enumerable: true, get: function () { return multisig_1.multisigAddress; } });
exports.LogicTemplates = LogicTemplatesCommonJSExport.default;
__exportStar(require("./dryrun"), exports);
__exportStar(require("./makeTxn"), exports);
__exportStar(require("./transaction"), exports);
__exportStar(require("./signer"), exports);
__exportStar(require("./composer"), exports);
__exportStar(require("./types"), exports);
__exportStar(require("./abi"), exports);

}).call(this)}).call(this,require("buffer").Buffer)
},{"./abi":6,"./account":11,"./bid":12,"./client/algod":13,"./client/kmd":15,"./client/v2/algod/algod":18,"./client/v2/algod/models/types":27,"./client/v2/indexer/indexer":38,"./composer":55,"./convert":56,"./dryrun":57,"./encoding/address":58,"./encoding/bigint":59,"./encoding/encoding":60,"./encoding/uint64":61,"./group":62,"./logicTemplates":65,"./logicsig":72,"./makeTxn":74,"./mnemonic/mnemonic":75,"./multisig":77,"./nacl/naclWrappers":78,"./signer":79,"./transaction":80,"./types":82,"./types/intDecoding":83,"./utils/utils":88,"./wait":89,"buffer":95}],74:[function(require,module,exports){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeApplicationCallTxnFromObject = exports.OnApplicationComplete = exports.makeApplicationNoOpTxnFromObject = exports.makeApplicationNoOpTxn = exports.makeApplicationClearStateTxnFromObject = exports.makeApplicationClearStateTxn = exports.makeApplicationCloseOutTxnFromObject = exports.makeApplicationCloseOutTxn = exports.makeApplicationOptInTxnFromObject = exports.makeApplicationOptInTxn = exports.makeApplicationDeleteTxnFromObject = exports.makeApplicationDeleteTxn = exports.makeApplicationUpdateTxnFromObject = exports.makeApplicationUpdateTxn = exports.makeApplicationCreateTxnFromObject = exports.makeApplicationCreateTxn = exports.makeAssetTransferTxnWithSuggestedParamsFromObject = exports.makeAssetTransferTxn = exports.makeAssetTransferTxnWithSuggestedParams = exports.makeAssetFreezeTxnWithSuggestedParamsFromObject = exports.makeAssetFreezeTxn = exports.makeAssetFreezeTxnWithSuggestedParams = exports.makeAssetDestroyTxnWithSuggestedParamsFromObject = exports.makeAssetDestroyTxn = exports.makeAssetDestroyTxnWithSuggestedParams = exports.makeAssetConfigTxnWithSuggestedParamsFromObject = exports.makeAssetConfigTxn = exports.makeAssetConfigTxnWithSuggestedParams = exports.makeAssetCreateTxnWithSuggestedParamsFromObject = exports.makeAssetCreateTxn = exports.makeAssetCreateTxnWithSuggestedParams = exports.makeKeyRegistrationTxnWithSuggestedParamsFromObject = exports.makeKeyRegistrationTxn = exports.makeKeyRegistrationTxnWithSuggestedParams = exports.makePaymentTxnWithSuggestedParamsFromObject = exports.makePaymentTxn = exports.makePaymentTxnWithSuggestedParams = void 0;
const txnBuilder = __importStar(require("./transaction"));
const base_1 = require("./types/transactions/base");
const transactions_1 = require("./types/transactions");
function makePaymentTxnWithSuggestedParams(from, to, amount, closeRemainderTo, note, suggestedParams, rekeyTo) {
    const o = {
        from,
        to,
        amount,
        closeRemainderTo,
        note,
        suggestedParams,
        type: transactions_1.TransactionType.pay,
        reKeyTo: rekeyTo,
    };
    return new txnBuilder.Transaction(o);
}
exports.makePaymentTxnWithSuggestedParams = makePaymentTxnWithSuggestedParams;
function makePaymentTxn(from, to, fee, amount, closeRemainderTo, firstRound, lastRound, note, genesisHash, genesisID, rekeyTo) {
    const suggestedParams = {
        genesisHash,
        genesisID,
        firstRound,
        lastRound,
        fee,
    };
    return makePaymentTxnWithSuggestedParams(from, to, amount, closeRemainderTo, note, suggestedParams, rekeyTo);
}
exports.makePaymentTxn = makePaymentTxn;

function makePaymentTxnWithSuggestedParamsFromObject(o) {
    return makePaymentTxnWithSuggestedParams(o.from, o.to, o.amount, o.closeRemainderTo, o.note, o.suggestedParams, o.rekeyTo);
}
exports.makePaymentTxnWithSuggestedParamsFromObject = makePaymentTxnWithSuggestedParamsFromObject;
function makeKeyRegistrationTxnWithSuggestedParams(from, note, voteKey, selectionKey, voteFirst, voteLast, voteKeyDilution, suggestedParams, rekeyTo, nonParticipation = false, stateProofKey = undefined) {
    const o = {
        from,
        note,
        voteKey,
        selectionKey,
        voteFirst,
        voteLast,
        voteKeyDilution,
        suggestedParams,
        type: transactions_1.TransactionType.keyreg,
        reKeyTo: rekeyTo,
        nonParticipation,
        stateProofKey,
    };
    return new txnBuilder.Transaction(o);
}
exports.makeKeyRegistrationTxnWithSuggestedParams = makeKeyRegistrationTxnWithSuggestedParams;
function makeKeyRegistrationTxn(from, fee, firstRound, lastRound, note, genesisHash, genesisID, voteKey, selectionKey, voteFirst, voteLast, voteKeyDilution, rekeyTo, nonParticipation = false, stateProofKey = undefined) {
    const suggestedParams = {
        genesisHash,
        genesisID,
        firstRound,
        lastRound,
        fee,
    };
    return makeKeyRegistrationTxnWithSuggestedParams(from, note, voteKey, selectionKey, voteFirst, voteLast, voteKeyDilution, suggestedParams, rekeyTo, nonParticipation, stateProofKey);
}
exports.makeKeyRegistrationTxn = makeKeyRegistrationTxn;
function makeKeyRegistrationTxnWithSuggestedParamsFromObject(o) {
    return makeKeyRegistrationTxnWithSuggestedParams(o.from, o.note, o.voteKey, o.selectionKey, o.voteFirst, o.voteLast, o.voteKeyDilution, o.suggestedParams, o.rekeyTo, o.nonParticipation, o.stateProofKey);
}
exports.makeKeyRegistrationTxnWithSuggestedParamsFromObject = makeKeyRegistrationTxnWithSuggestedParamsFromObject;
function makeAssetCreateTxnWithSuggestedParams(from, note, total, decimals, defaultFrozen, manager, reserve, freeze, clawback, unitName, assetName, assetURL, assetMetadataHash, suggestedParams, rekeyTo) {
    const o = {
        from,
        note,
        suggestedParams,
        assetTotal: total,
        assetDecimals: decimals,
        assetDefaultFrozen: defaultFrozen,
        assetUnitName: unitName,
        assetName,
        assetURL,
        assetMetadataHash,
        assetManager: manager,
        assetReserve: reserve,
        assetFreeze: freeze,
        assetClawback: clawback,
        type: transactions_1.TransactionType.acfg,
        reKeyTo: rekeyTo,
    };
    return new txnBuilder.Transaction(o);
}
exports.makeAssetCreateTxnWithSuggestedParams = makeAssetCreateTxnWithSuggestedParams;
function makeAssetCreateTxn(from, fee, firstRound, lastRound, note, genesisHash, genesisID, total, decimals, defaultFrozen, manager, reserve, freeze, clawback, unitName, assetName, assetURL, assetMetadataHash, rekeyTo) {
    const suggestedParams = {
        genesisHash,
        genesisID,
        firstRound,
        lastRound,
        fee,
    };
    return makeAssetCreateTxnWithSuggestedParams(from, note, total, decimals, defaultFrozen, manager, reserve, freeze, clawback, unitName, assetName, assetURL, assetMetadataHash, suggestedParams, rekeyTo);
}
exports.makeAssetCreateTxn = makeAssetCreateTxn;

function makeAssetCreateTxnWithSuggestedParamsFromObject(o) {
    return makeAssetCreateTxnWithSuggestedParams(o.from, o.note, o.total, o.decimals, o.defaultFrozen, o.manager, o.reserve, o.freeze, o.clawback, o.unitName, o.assetName, o.assetURL, o.assetMetadataHash, o.suggestedParams, o.rekeyTo);
}
exports.makeAssetCreateTxnWithSuggestedParamsFromObject = makeAssetCreateTxnWithSuggestedParamsFromObject;
function makeAssetConfigTxnWithSuggestedParams(from, note, assetIndex, manager, reserve, freeze, clawback, suggestedParams, strictEmptyAddressChecking = true, rekeyTo) {
    if (strictEmptyAddressChecking &&
        (manager === undefined ||
            reserve === undefined ||
            freeze === undefined ||
            clawback === undefined)) {
        throw Error('strict empty address checking was turned on, but at least one empty address was provided');
    }
    const o = {
        from,
        suggestedParams,
        assetIndex,
        assetManager: manager,
        assetReserve: reserve,
        assetFreeze: freeze,
        assetClawback: clawback,
        type: transactions_1.TransactionType.acfg,
        note,
        reKeyTo: rekeyTo,
    };
    return new txnBuilder.Transaction(o);
}
exports.makeAssetConfigTxnWithSuggestedParams = makeAssetConfigTxnWithSuggestedParams;
function makeAssetConfigTxn(from, fee, firstRound, lastRound, note, genesisHash, genesisID, assetIndex, manager, reserve, freeze, clawback, strictEmptyAddressChecking = true, rekeyTo) {
    const suggestedParams = {
        genesisHash,
        genesisID,
        firstRound,
        lastRound,
        fee,
    };
    return makeAssetConfigTxnWithSuggestedParams(from, note, assetIndex, manager, reserve, freeze, clawback, suggestedParams, strictEmptyAddressChecking, rekeyTo);
}
exports.makeAssetConfigTxn = makeAssetConfigTxn;

function makeAssetConfigTxnWithSuggestedParamsFromObject(o) {
    return makeAssetConfigTxnWithSuggestedParams(o.from, o.note, o.assetIndex, o.manager, o.reserve, o.freeze, o.clawback, o.suggestedParams, o.strictEmptyAddressChecking, o.rekeyTo);
}
exports.makeAssetConfigTxnWithSuggestedParamsFromObject = makeAssetConfigTxnWithSuggestedParamsFromObject;
function makeAssetDestroyTxnWithSuggestedParams(from, note, assetIndex, suggestedParams, rekeyTo) {
    const o = {
        from,
        suggestedParams,
        assetIndex,
        type: transactions_1.TransactionType.acfg,
        note,
        reKeyTo: rekeyTo,
    };
    return new txnBuilder.Transaction(o);
}
exports.makeAssetDestroyTxnWithSuggestedParams = makeAssetDestroyTxnWithSuggestedParams;
function makeAssetDestroyTxn(from, fee, firstRound, lastRound, note, genesisHash, genesisID, assetIndex, rekeyTo) {
    const suggestedParams = {
        genesisHash,
        genesisID,
        firstRound,
        lastRound,
        fee,
    };
    return makeAssetDestroyTxnWithSuggestedParams(from, note, assetIndex, suggestedParams, rekeyTo);
}
exports.makeAssetDestroyTxn = makeAssetDestroyTxn;

function makeAssetDestroyTxnWithSuggestedParamsFromObject(o) {
    return makeAssetDestroyTxnWithSuggestedParams(o.from, o.note, o.assetIndex, o.suggestedParams, o.rekeyTo);
}
exports.makeAssetDestroyTxnWithSuggestedParamsFromObject = makeAssetDestroyTxnWithSuggestedParamsFromObject;
function makeAssetFreezeTxnWithSuggestedParams(from, note, assetIndex, freezeTarget, freezeState, suggestedParams, rekeyTo) {
    const o = {
        from,
        type: transactions_1.TransactionType.afrz,
        freezeAccount: freezeTarget,
        assetIndex,
        freezeState,
        note,
        suggestedParams,
        reKeyTo: rekeyTo,
    };
    return new txnBuilder.Transaction(o);
}
exports.makeAssetFreezeTxnWithSuggestedParams = makeAssetFreezeTxnWithSuggestedParams;
function makeAssetFreezeTxn(from, fee, firstRound, lastRound, note, genesisHash, genesisID, assetIndex, freezeTarget, freezeState, rekeyTo) {
    const suggestedParams = {
        genesisHash,
        genesisID,
        firstRound,
        lastRound,
        fee,
    };
    return makeAssetFreezeTxnWithSuggestedParams(from, note, assetIndex, freezeTarget, freezeState, suggestedParams, rekeyTo);
}
exports.makeAssetFreezeTxn = makeAssetFreezeTxn;

function makeAssetFreezeTxnWithSuggestedParamsFromObject(o) {
    return makeAssetFreezeTxnWithSuggestedParams(o.from, o.note, o.assetIndex, o.freezeTarget, o.freezeState, o.suggestedParams, o.rekeyTo);
}
exports.makeAssetFreezeTxnWithSuggestedParamsFromObject = makeAssetFreezeTxnWithSuggestedParamsFromObject;
function makeAssetTransferTxnWithSuggestedParams(from, to, closeRemainderTo, revocationTarget, amount, note, assetIndex, suggestedParams, rekeyTo) {
    const o = {
        type: transactions_1.TransactionType.axfer,
        from,
        to,
        amount,
        suggestedParams,
        assetIndex,
        note,
        assetRevocationTarget: revocationTarget,
        closeRemainderTo,
        reKeyTo: rekeyTo,
    };
    return new txnBuilder.Transaction(o);
}
exports.makeAssetTransferTxnWithSuggestedParams = makeAssetTransferTxnWithSuggestedParams;
function makeAssetTransferTxn(from, to, closeRemainderTo, revocationTarget, fee, amount, firstRound, lastRound, note, genesisHash, genesisID, assetIndex, rekeyTo) {
    const suggestedParams = {
        genesisHash,
        genesisID,
        firstRound,
        lastRound,
        fee,
    };
    return makeAssetTransferTxnWithSuggestedParams(from, to, closeRemainderTo, revocationTarget, amount, note, assetIndex, suggestedParams, rekeyTo);
}
exports.makeAssetTransferTxn = makeAssetTransferTxn;

function makeAssetTransferTxnWithSuggestedParamsFromObject(o) {
    return makeAssetTransferTxnWithSuggestedParams(o.from, o.to, o.closeRemainderTo, o.revocationTarget, o.amount, o.note, o.assetIndex, o.suggestedParams, o.rekeyTo);
}
exports.makeAssetTransferTxnWithSuggestedParamsFromObject = makeAssetTransferTxnWithSuggestedParamsFromObject;
function makeApplicationCreateTxn(from, suggestedParams, onComplete, approvalProgram, clearProgram, numLocalInts, numLocalByteSlices, numGlobalInts, numGlobalByteSlices, appArgs, accounts, foreignApps, foreignAssets, note, lease, rekeyTo, extraPages) {
    const o = {
        type: transactions_1.TransactionType.appl,
        from,
        suggestedParams,
        appIndex: 0,
        appOnComplete: onComplete,
        appLocalInts: numLocalInts,
        appLocalByteSlices: numLocalByteSlices,
        appGlobalInts: numGlobalInts,
        appGlobalByteSlices: numGlobalByteSlices,
        appApprovalProgram: approvalProgram,
        appClearProgram: clearProgram,
        appArgs,
        appAccounts: accounts,
        appForeignApps: foreignApps,
        appForeignAssets: foreignAssets,
        note,
        lease,
        reKeyTo: rekeyTo,
        extraPages,
    };
    return new txnBuilder.Transaction(o);
}
exports.makeApplicationCreateTxn = makeApplicationCreateTxn;

function makeApplicationCreateTxnFromObject(o) {
    return makeApplicationCreateTxn(o.from, o.suggestedParams, o.onComplete, o.approvalProgram, o.clearProgram, o.numLocalInts, o.numLocalByteSlices, o.numGlobalInts, o.numGlobalByteSlices, o.appArgs, o.accounts, o.foreignApps, o.foreignAssets, o.note, o.lease, o.rekeyTo, o.extraPages);
}
exports.makeApplicationCreateTxnFromObject = makeApplicationCreateTxnFromObject;
function makeApplicationUpdateTxn(from, suggestedParams, appIndex, approvalProgram, clearProgram, appArgs, accounts, foreignApps, foreignAssets, note, lease, rekeyTo) {
    const o = {
        type: transactions_1.TransactionType.appl,
        from,
        suggestedParams,
        appIndex,
        appApprovalProgram: approvalProgram,
        appOnComplete: base_1.OnApplicationComplete.UpdateApplicationOC,
        appClearProgram: clearProgram,
        appArgs,
        appAccounts: accounts,
        appForeignApps: foreignApps,
        appForeignAssets: foreignAssets,
        note,
        lease,
        reKeyTo: rekeyTo,
    };
    return new txnBuilder.Transaction(o);
}
exports.makeApplicationUpdateTxn = makeApplicationUpdateTxn;

function makeApplicationUpdateTxnFromObject(o) {
    return makeApplicationUpdateTxn(o.from, o.suggestedParams, o.appIndex, o.approvalProgram, o.clearProgram, o.appArgs, o.accounts, o.foreignApps, o.foreignAssets, o.note, o.lease, o.rekeyTo);
}
exports.makeApplicationUpdateTxnFromObject = makeApplicationUpdateTxnFromObject;
function makeApplicationDeleteTxn(from, suggestedParams, appIndex, appArgs, accounts, foreignApps, foreignAssets, note, lease, rekeyTo) {
    const o = {
        type: transactions_1.TransactionType.appl,
        from,
        suggestedParams,
        appIndex,
        appOnComplete: base_1.OnApplicationComplete.DeleteApplicationOC,
        appArgs,
        appAccounts: accounts,
        appForeignApps: foreignApps,
        appForeignAssets: foreignAssets,
        note,
        lease,
        reKeyTo: rekeyTo,
    };
    return new txnBuilder.Transaction(o);
}
exports.makeApplicationDeleteTxn = makeApplicationDeleteTxn;

function makeApplicationDeleteTxnFromObject(o) {
    return makeApplicationDeleteTxn(o.from, o.suggestedParams, o.appIndex, o.appArgs, o.accounts, o.foreignApps, o.foreignAssets, o.note, o.lease, o.rekeyTo);
}
exports.makeApplicationDeleteTxnFromObject = makeApplicationDeleteTxnFromObject;
function makeApplicationOptInTxn(from, suggestedParams, appIndex, appArgs, accounts, foreignApps, foreignAssets, note, lease, rekeyTo) {
    const o = {
        type: transactions_1.TransactionType.appl,
        from,
        suggestedParams,
        appIndex,
        appOnComplete: base_1.OnApplicationComplete.OptInOC,
        appArgs,
        appAccounts: accounts,
        appForeignApps: foreignApps,
        appForeignAssets: foreignAssets,
        note,
        lease,
        reKeyTo: rekeyTo,
    };
    return new txnBuilder.Transaction(o);
}
exports.makeApplicationOptInTxn = makeApplicationOptInTxn;

function makeApplicationOptInTxnFromObject(o) {
    return makeApplicationOptInTxn(o.from, o.suggestedParams, o.appIndex, o.appArgs, o.accounts, o.foreignApps, o.foreignAssets, o.note, o.lease, o.rekeyTo);
}
exports.makeApplicationOptInTxnFromObject = makeApplicationOptInTxnFromObject;
function makeApplicationCloseOutTxn(from, suggestedParams, appIndex, appArgs, accounts, foreignApps, foreignAssets, note, lease, rekeyTo) {
    const o = {
        type: transactions_1.TransactionType.appl,
        from,
        suggestedParams,
        appIndex,
        appOnComplete: base_1.OnApplicationComplete.CloseOutOC,
        appArgs,
        appAccounts: accounts,
        appForeignApps: foreignApps,
        appForeignAssets: foreignAssets,
        note,
        lease,
        reKeyTo: rekeyTo,
    };
    return new txnBuilder.Transaction(o);
}
exports.makeApplicationCloseOutTxn = makeApplicationCloseOutTxn;

function makeApplicationCloseOutTxnFromObject(o) {
    return makeApplicationCloseOutTxn(o.from, o.suggestedParams, o.appIndex, o.appArgs, o.accounts, o.foreignApps, o.foreignAssets, o.note, o.lease, o.rekeyTo);
}
exports.makeApplicationCloseOutTxnFromObject = makeApplicationCloseOutTxnFromObject;
function makeApplicationClearStateTxn(from, suggestedParams, appIndex, appArgs, accounts, foreignApps, foreignAssets, note, lease, rekeyTo) {
    const o = {
        type: transactions_1.TransactionType.appl,
        from,
        suggestedParams,
        appIndex,
        appOnComplete: base_1.OnApplicationComplete.ClearStateOC,
        appArgs,
        appAccounts: accounts,
        appForeignApps: foreignApps,
        appForeignAssets: foreignAssets,
        note,
        lease,
        reKeyTo: rekeyTo,
    };
    return new txnBuilder.Transaction(o);
}
exports.makeApplicationClearStateTxn = makeApplicationClearStateTxn;

function makeApplicationClearStateTxnFromObject(o) {
    return makeApplicationClearStateTxn(o.from, o.suggestedParams, o.appIndex, o.appArgs, o.accounts, o.foreignApps, o.foreignAssets, o.note, o.lease, o.rekeyTo);
}
exports.makeApplicationClearStateTxnFromObject = makeApplicationClearStateTxnFromObject;
function makeApplicationNoOpTxn(from, suggestedParams, appIndex, appArgs, accounts, foreignApps, foreignAssets, note, lease, rekeyTo) {
    const o = {
        type: transactions_1.TransactionType.appl,
        from,
        suggestedParams,
        appIndex,
        appOnComplete: base_1.OnApplicationComplete.NoOpOC,
        appArgs,
        appAccounts: accounts,
        appForeignApps: foreignApps,
        appForeignAssets: foreignAssets,
        note,
        lease,
        reKeyTo: rekeyTo,
    };
    return new txnBuilder.Transaction(o);
}
exports.makeApplicationNoOpTxn = makeApplicationNoOpTxn;

function makeApplicationNoOpTxnFromObject(o) {
    return makeApplicationNoOpTxn(o.from, o.suggestedParams, o.appIndex, o.appArgs, o.accounts, o.foreignApps, o.foreignAssets, o.note, o.lease, o.rekeyTo);
}
exports.makeApplicationNoOpTxnFromObject = makeApplicationNoOpTxnFromObject;
var base_2 = require("./types/transactions/base");
Object.defineProperty(exports, "OnApplicationComplete", { enumerable: true, get: function () { return base_2.OnApplicationComplete; } });
function makeApplicationCallTxnFromObject(options) {
    const o = {
        type: transactions_1.TransactionType.appl,
        from: options.from,
        suggestedParams: options.suggestedParams,
        appIndex: options.appIndex,
        appOnComplete: options.onComplete,
        appLocalInts: options.numLocalInts,
        appLocalByteSlices: options.numLocalByteSlices,
        appGlobalInts: options.numGlobalInts,
        appGlobalByteSlices: options.numGlobalByteSlices,
        appApprovalProgram: options.approvalProgram,
        appClearProgram: options.clearProgram,
        appArgs: options.appArgs,
        appAccounts: options.accounts,
        appForeignApps: options.foreignApps,
        appForeignAssets: options.foreignAssets,
        note: options.note,
        lease: options.lease,
        reKeyTo: options.rekeyTo,
        extraPages: options.extraPages,
    };
    return new txnBuilder.Transaction(o);
}
exports.makeApplicationCallTxnFromObject = makeApplicationCallTxnFromObject;

},{"./transaction":80,"./types/transactions":87,"./types/transactions/base":85}],75:[function(require,module,exports){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.masterDerivationKeyToMnemonic = exports.mnemonicToMasterDerivationKey = exports.secretKeyToMnemonic = exports.mnemonicToSecretKey = exports.seedFromMnemonic = exports.mnemonicFromSeed = exports.NOT_IN_WORDS_LIST_ERROR_MSG = exports.FAIL_TO_DECODE_MNEMONIC_ERROR_MSG = void 0;
const english_1 = __importDefault(require("./wordlists/english"));
const nacl = __importStar(require("../nacl/naclWrappers"));
const address = __importStar(require("../encoding/address"));
exports.FAIL_TO_DECODE_MNEMONIC_ERROR_MSG = 'failed to decode mnemonic';
exports.NOT_IN_WORDS_LIST_ERROR_MSG = 'the mnemonic contains a word that is not in the wordlist';

function toUint11Array(buffer8) {
    const buffer11 = [];
    let acc = 0;
    let accBits = 0;
    function add(octet) {
        acc |= octet << accBits;
        accBits += 8;
        if (accBits >= 11) {
            buffer11.push(acc & 0x7ff);
            acc >>= 11;
            accBits -= 11;
        }
    }
    function flush() {
        if (accBits) {
            buffer11.push(acc);
        }
    }
    buffer8.forEach(add);
    flush();
    return buffer11;
}
function applyWords(nums) {
    return nums.map((n) => english_1.default[n]);
}
function computeChecksum(seed) {
    const hashBuffer = nacl.genericHash(seed);
    const uint11Hash = toUint11Array(hashBuffer);
    const words = applyWords(uint11Hash);
    return words[0];
}
function mnemonicFromSeed(seed) {
    
    if (seed.length !== nacl.SEED_BTYES_LENGTH) {
        throw new RangeError(`Seed length must be ${nacl.SEED_BTYES_LENGTH}`);
    }
    const uint11Array = toUint11Array(seed);
    const words = applyWords(uint11Array);
    const checksumWord = computeChecksum(seed);
    return `${words.join(' ')} ${checksumWord}`;
}
exports.mnemonicFromSeed = mnemonicFromSeed;


function toUint8Array(buffer11) {
    const buffer8 = [];
    let acc = 0;
    let accBits = 0;
    function add(ui11) {
        acc |= ui11 << accBits;
        accBits += 11;
        while (accBits >= 8) {
            buffer8.push(acc & 0xff);
            acc >>= 8;
            accBits -= 8;
        }
    }
    function flush() {
        if (accBits) {
            buffer8.push(acc);
        }
    }
    buffer11.forEach(add);
    flush();
    return new Uint8Array(buffer8);
}
function seedFromMnemonic(mnemonic) {
    const words = mnemonic.split(' ');
    const key = words.slice(0, 24);
    
    for (const w of key) {
        if (english_1.default.indexOf(w) === -1)
            throw new Error(exports.NOT_IN_WORDS_LIST_ERROR_MSG);
    }
    const checksum = words[words.length - 1];
    const uint11Array = key.map((word) => english_1.default.indexOf(word));
    
    let uint8Array = toUint8Array(uint11Array);
    
    
    
    
    
    
    if (uint8Array.length !== 33)
        throw new Error(exports.FAIL_TO_DECODE_MNEMONIC_ERROR_MSG);
    
    if (uint8Array[uint8Array.length - 1] !== 0x0)
        throw new Error(exports.FAIL_TO_DECODE_MNEMONIC_ERROR_MSG);
    
    uint8Array = uint8Array.slice(0, uint8Array.length - 1);
    
    const cs = computeChecksum(uint8Array);
    
    if (cs === checksum)
        return uint8Array;
    throw new Error(exports.FAIL_TO_DECODE_MNEMONIC_ERROR_MSG);
}
exports.seedFromMnemonic = seedFromMnemonic;
function mnemonicToSecretKey(mn) {
    const seed = seedFromMnemonic(mn);
    const keys = nacl.keyPairFromSeed(seed);
    const encodedPk = address.encodeAddress(keys.publicKey);
    return { addr: encodedPk, sk: keys.secretKey };
}
exports.mnemonicToSecretKey = mnemonicToSecretKey;
function secretKeyToMnemonic(sk) {
    
    const seed = sk.slice(0, nacl.SEED_BTYES_LENGTH);
    return mnemonicFromSeed(seed);
}
exports.secretKeyToMnemonic = secretKeyToMnemonic;
function mnemonicToMasterDerivationKey(mn) {
    return seedFromMnemonic(mn);
}
exports.mnemonicToMasterDerivationKey = mnemonicToMasterDerivationKey;
function masterDerivationKeyToMnemonic(mdk) {
    return mnemonicFromSeed(mdk);
}
exports.masterDerivationKeyToMnemonic = masterDerivationKeyToMnemonic;

},{"../encoding/address":58,"../nacl/naclWrappers":78,"./wordlists/english":76}],76:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const english = [
    'abandon',
    'ability',
    'able',
    'about',
    'above',
    'absent',
    'absorb',
    'abstract',
    'absurd',
    'abuse',
    'access',
    'accident',
    'account',
    'accuse',
    'achieve',
    'acid',
    'acoustic',
    'acquire',
    'across',
    'act',
    'action',
    'actor',
    'actress',
    'actual',
    'adapt',
    'add',
    'addict',
    'address',
    'adjust',
    'admit',
    'adult',
    'advance',
    'advice',
    'aerobic',
    'affair',
    'afford',
    'afraid',
    'again',
    'age',
    'agent',
    'agree',
    'ahead',
    'aim',
    'air',
    'airport',
    'aisle',
    'alarm',
    'album',
    'alcohol',
    'alert',
    'alien',
    'all',
    'alley',
    'allow',
    'almost',
    'alone',
    'alpha',
    'already',
    'also',
    'alter',
    'always',
    'amateur',
    'amazing',
    'among',
    'amount',
    'amused',
    'analyst',
    'anchor',
    'ancient',
    'anger',
    'angle',
    'angry',
    'animal',
    'ankle',
    'announce',
    'annual',
    'another',
    'answer',
    'antenna',
    'antique',
    'anxiety',
    'any',
    'apart',
    'apology',
    'appear',
    'apple',
    'approve',
    'april',
    'arch',
    'arctic',
    'area',
    'arena',
    'argue',
    'arm',
    'armed',
    'armor',
    'army',
    'around',
    'arrange',
    'arrest',
    'arrive',
    'arrow',
    'art',
    'artefact',
    'artist',
    'artwork',
    'ask',
    'aspect',
    'assault',
    'asset',
    'assist',
    'assume',
    'asthma',
    'athlete',
    'atom',
    'attack',
    'attend',
    'attitude',
    'attract',
    'auction',
    'audit',
    'august',
    'aunt',
    'author',
    'auto',
    'autumn',
    'average',
    'avocado',
    'avoid',
    'awake',
    'aware',
    'away',
    'awesome',
    'awful',
    'awkward',
    'axis',
    'baby',
    'bachelor',
    'bacon',
    'badge',
    'bag',
    'balance',
    'balcony',
    'ball',
    'bamboo',
    'banana',
    'banner',
    'bar',
    'barely',
    'bargain',
    'barrel',
    'base',
    'basic',
    'basket',
    'battle',
    'beach',
    'bean',
    'beauty',
    'because',
    'become',
    'beef',
    'before',
    'begin',
    'behave',
    'behind',
    'believe',
    'below',
    'belt',
    'bench',
    'benefit',
    'best',
    'betray',
    'better',
    'between',
    'beyond',
    'bicycle',
    'bid',
    'bike',
    'bind',
    'biology',
    'bird',
    'birth',
    'bitter',
    'black',
    'blade',
    'blame',
    'blanket',
    'blast',
    'bleak',
    'bless',
    'blind',
    'blood',
    'blossom',
    'blouse',
    'blue',
    'blur',
    'blush',
    'board',
    'boat',
    'body',
    'boil',
    'bomb',
    'bone',
    'bonus',
    'book',
    'boost',
    'border',
    'boring',
    'borrow',
    'boss',
    'bottom',
    'bounce',
    'box',
    'boy',
    'bracket',
    'brain',
    'brand',
    'brass',
    'brave',
    'bread',
    'breeze',
    'brick',
    'bridge',
    'brief',
    'bright',
    'bring',
    'brisk',
    'broccoli',
    'broken',
    'bronze',
    'broom',
    'brother',
    'brown',
    'brush',
    'bubble',
    'buddy',
    'budget',
    'buffalo',
    'build',
    'bulb',
    'bulk',
    'bullet',
    'bundle',
    'bunker',
    'burden',
    'burger',
    'burst',
    'bus',
    'business',
    'busy',
    'butter',
    'buyer',
    'buzz',
    'cabbage',
    'cabin',
    'cable',
    'cactus',
    'cage',
    'cake',
    'call',
    'calm',
    'camera',
    'camp',
    'can',
    'canal',
    'cancel',
    'candy',
    'cannon',
    'canoe',
    'canvas',
    'canyon',
    'capable',
    'capital',
    'captain',
    'car',
    'carbon',
    'card',
    'cargo',
    'carpet',
    'carry',
    'cart',
    'case',
    'cash',
    'casino',
    'castle',
    'casual',
    'cat',
    'catalog',
    'catch',
    'category',
    'cattle',
    'caught',
    'cause',
    'caution',
    'cave',
    'ceiling',
    'celery',
    'cement',
    'census',
    'century',
    'cereal',
    'certain',
    'chair',
    'chalk',
    'champion',
    'change',
    'chaos',
    'chapter',
    'charge',
    'chase',
    'chat',
    'cheap',
    'check',
    'cheese',
    'chef',
    'cherry',
    'chest',
    'chicken',
    'chief',
    'child',
    'chimney',
    'choice',
    'choose',
    'chronic',
    'chuckle',
    'chunk',
    'churn',
    'cigar',
    'cinnamon',
    'circle',
    'citizen',
    'city',
    'civil',
    'claim',
    'clap',
    'clarify',
    'claw',
    'clay',
    'clean',
    'clerk',
    'clever',
    'click',
    'client',
    'cliff',
    'climb',
    'clinic',
    'clip',
    'clock',
    'clog',
    'close',
    'cloth',
    'cloud',
    'clown',
    'club',
    'clump',
    'cluster',
    'clutch',
    'coach',
    'coast',
    'coconut',
    'code',
    'coffee',
    'coil',
    'coin',
    'collect',
    'color',
    'column',
    'combine',
    'come',
    'comfort',
    'comic',
    'common',
    'company',
    'concert',
    'conduct',
    'confirm',
    'congress',
    'connect',
    'consider',
    'control',
    'convince',
    'cook',
    'cool',
    'copper',
    'copy',
    'coral',
    'core',
    'corn',
    'correct',
    'cost',
    'cotton',
    'couch',
    'country',
    'couple',
    'course',
    'cousin',
    'cover',
    'coyote',
    'crack',
    'cradle',
    'craft',
    'cram',
    'crane',
    'crash',
    'crater',
    'crawl',
    'crazy',
    'cream',
    'credit',
    'creek',
    'crew',
    'cricket',
    'crime',
    'crisp',
    'critic',
    'crop',
    'cross',
    'crouch',
    'crowd',
    'crucial',
    'cruel',
    'cruise',
    'crumble',
    'crunch',
    'crush',
    'cry',
    'crystal',
    'cube',
    'culture',
    'cup',
    'cupboard',
    'curious',
    'current',
    'curtain',
    'curve',
    'cushion',
    'custom',
    'cute',
    'cycle',
    'dad',
    'damage',
    'damp',
    'dance',
    'danger',
    'daring',
    'dash',
    'daughter',
    'dawn',
    'day',
    'deal',
    'debate',
    'debris',
    'decade',
    'december',
    'decide',
    'decline',
    'decorate',
    'decrease',
    'deer',
    'defense',
    'define',
    'defy',
    'degree',
    'delay',
    'deliver',
    'demand',
    'demise',
    'denial',
    'dentist',
    'deny',
    'depart',
    'depend',
    'deposit',
    'depth',
    'deputy',
    'derive',
    'describe',
    'desert',
    'design',
    'desk',
    'despair',
    'destroy',
    'detail',
    'detect',
    'develop',
    'device',
    'devote',
    'diagram',
    'dial',
    'diamond',
    'diary',
    'dice',
    'diesel',
    'diet',
    'differ',
    'digital',
    'dignity',
    'dilemma',
    'dinner',
    'dinosaur',
    'direct',
    'dirt',
    'disagree',
    'discover',
    'disease',
    'dish',
    'dismiss',
    'disorder',
    'display',
    'distance',
    'divert',
    'divide',
    'divorce',
    'dizzy',
    'doctor',
    'document',
    'dog',
    'doll',
    'dolphin',
    'domain',
    'donate',
    'donkey',
    'donor',
    'door',
    'dose',
    'double',
    'dove',
    'draft',
    'dragon',
    'drama',
    'drastic',
    'draw',
    'dream',
    'dress',
    'drift',
    'drill',
    'drink',
    'drip',
    'drive',
    'drop',
    'drum',
    'dry',
    'duck',
    'dumb',
    'dune',
    'during',
    'dust',
    'dutch',
    'duty',
    'dwarf',
    'dynamic',
    'eager',
    'eagle',
    'early',
    'earn',
    'earth',
    'easily',
    'east',
    'easy',
    'echo',
    'ecology',
    'economy',
    'edge',
    'edit',
    'educate',
    'effort',
    'egg',
    'eight',
    'either',
    'elbow',
    'elder',
    'electric',
    'elegant',
    'element',
    'elephant',
    'elevator',
    'elite',
    'else',
    'embark',
    'embody',
    'embrace',
    'emerge',
    'emotion',
    'employ',
    'empower',
    'empty',
    'enable',
    'enact',
    'end',
    'endless',
    'endorse',
    'enemy',
    'energy',
    'enforce',
    'engage',
    'engine',
    'enhance',
    'enjoy',
    'enlist',
    'enough',
    'enrich',
    'enroll',
    'ensure',
    'enter',
    'entire',
    'entry',
    'envelope',
    'episode',
    'equal',
    'equip',
    'era',
    'erase',
    'erode',
    'erosion',
    'error',
    'erupt',
    'escape',
    'essay',
    'essence',
    'estate',
    'eternal',
    'ethics',
    'evidence',
    'evil',
    'evoke',
    'evolve',
    'exact',
    'example',
    'excess',
    'exchange',
    'excite',
    'exclude',
    'excuse',
    'execute',
    'exercise',
    'exhaust',
    'exhibit',
    'exile',
    'exist',
    'exit',
    'exotic',
    'expand',
    'expect',
    'expire',
    'explain',
    'expose',
    'express',
    'extend',
    'extra',
    'eye',
    'eyebrow',
    'fabric',
    'face',
    'faculty',
    'fade',
    'faint',
    'faith',
    'fall',
    'false',
    'fame',
    'family',
    'famous',
    'fan',
    'fancy',
    'fantasy',
    'farm',
    'fashion',
    'fat',
    'fatal',
    'father',
    'fatigue',
    'fault',
    'favorite',
    'feature',
    'february',
    'federal',
    'fee',
    'feed',
    'feel',
    'female',
    'fence',
    'festival',
    'fetch',
    'fever',
    'few',
    'fiber',
    'fiction',
    'field',
    'figure',
    'file',
    'film',
    'filter',
    'final',
    'find',
    'fine',
    'finger',
    'finish',
    'fire',
    'firm',
    'first',
    'fiscal',
    'fish',
    'fit',
    'fitness',
    'fix',
    'flag',
    'flame',
    'flash',
    'flat',
    'flavor',
    'flee',
    'flight',
    'flip',
    'float',
    'flock',
    'floor',
    'flower',
    'fluid',
    'flush',
    'fly',
    'foam',
    'focus',
    'fog',
    'foil',
    'fold',
    'follow',
    'food',
    'foot',
    'force',
    'forest',
    'forget',
    'fork',
    'fortune',
    'forum',
    'forward',
    'fossil',
    'foster',
    'found',
    'fox',
    'fragile',
    'frame',
    'frequent',
    'fresh',
    'friend',
    'fringe',
    'frog',
    'front',
    'frost',
    'frown',
    'frozen',
    'fruit',
    'fuel',
    'fun',
    'funny',
    'furnace',
    'fury',
    'future',
    'gadget',
    'gain',
    'galaxy',
    'gallery',
    'game',
    'gap',
    'garage',
    'garbage',
    'garden',
    'garlic',
    'garment',
    'gas',
    'gasp',
    'gate',
    'gather',
    'gauge',
    'gaze',
    'general',
    'genius',
    'genre',
    'gentle',
    'genuine',
    'gesture',
    'ghost',
    'giant',
    'gift',
    'giggle',
    'ginger',
    'giraffe',
    'girl',
    'give',
    'glad',
    'glance',
    'glare',
    'glass',
    'glide',
    'glimpse',
    'globe',
    'gloom',
    'glory',
    'glove',
    'glow',
    'glue',
    'goat',
    'goddess',
    'gold',
    'good',
    'goose',
    'gorilla',
    'gospel',
    'gossip',
    'govern',
    'gown',
    'grab',
    'grace',
    'grain',
    'grant',
    'grape',
    'grass',
    'gravity',
    'great',
    'green',
    'grid',
    'grief',
    'grit',
    'grocery',
    'group',
    'grow',
    'grunt',
    'guard',
    'guess',
    'guide',
    'guilt',
    'guitar',
    'gun',
    'gym',
    'habit',
    'hair',
    'half',
    'hammer',
    'hamster',
    'hand',
    'happy',
    'harbor',
    'hard',
    'harsh',
    'harvest',
    'hat',
    'have',
    'hawk',
    'hazard',
    'head',
    'health',
    'heart',
    'heavy',
    'hedgehog',
    'height',
    'hello',
    'helmet',
    'help',
    'hen',
    'hero',
    'hidden',
    'high',
    'hill',
    'hint',
    'hip',
    'hire',
    'history',
    'hobby',
    'hockey',
    'hold',
    'hole',
    'holiday',
    'hollow',
    'home',
    'honey',
    'hood',
    'hope',
    'horn',
    'horror',
    'horse',
    'hospital',
    'host',
    'hotel',
    'hour',
    'hover',
    'hub',
    'huge',
    'human',
    'humble',
    'humor',
    'hundred',
    'hungry',
    'hunt',
    'hurdle',
    'hurry',
    'hurt',
    'husband',
    'hybrid',
    'ice',
    'icon',
    'idea',
    'identify',
    'idle',
    'ignore',
    'ill',
    'illegal',
    'illness',
    'image',
    'imitate',
    'immense',
    'immune',
    'impact',
    'impose',
    'improve',
    'impulse',
    'inch',
    'include',
    'income',
    'increase',
    'index',
    'indicate',
    'indoor',
    'industry',
    'infant',
    'inflict',
    'inform',
    'inhale',
    'inherit',
    'initial',
    'inject',
    'injury',
    'inmate',
    'inner',
    'innocent',
    'input',
    'inquiry',
    'insane',
    'insect',
    'inside',
    'inspire',
    'install',
    'intact',
    'interest',
    'into',
    'invest',
    'invite',
    'involve',
    'iron',
    'island',
    'isolate',
    'issue',
    'item',
    'ivory',
    'jacket',
    'jaguar',
    'jar',
    'jazz',
    'jealous',
    'jeans',
    'jelly',
    'jewel',
    'job',
    'join',
    'joke',
    'journey',
    'joy',
    'judge',
    'juice',
    'jump',
    'jungle',
    'junior',
    'junk',
    'just',
    'kangaroo',
    'keen',
    'keep',
    'ketchup',
    'key',
    'kick',
    'kid',
    'kidney',
    'kind',
    'kingdom',
    'kiss',
    'kit',
    'kitchen',
    'kite',
    'kitten',
    'kiwi',
    'knee',
    'knife',
    'knock',
    'know',
    'lab',
    'label',
    'labor',
    'ladder',
    'lady',
    'lake',
    'lamp',
    'language',
    'laptop',
    'large',
    'later',
    'latin',
    'laugh',
    'laundry',
    'lava',
    'law',
    'lawn',
    'lawsuit',
    'layer',
    'lazy',
    'leader',
    'leaf',
    'learn',
    'leave',
    'lecture',
    'left',
    'leg',
    'legal',
    'legend',
    'leisure',
    'lemon',
    'lend',
    'length',
    'lens',
    'leopard',
    'lesson',
    'letter',
    'level',
    'liar',
    'liberty',
    'library',
    'license',
    'life',
    'lift',
    'light',
    'like',
    'limb',
    'limit',
    'link',
    'lion',
    'liquid',
    'list',
    'little',
    'live',
    'lizard',
    'load',
    'loan',
    'lobster',
    'local',
    'lock',
    'logic',
    'lonely',
    'long',
    'loop',
    'lottery',
    'loud',
    'lounge',
    'love',
    'loyal',
    'lucky',
    'luggage',
    'lumber',
    'lunar',
    'lunch',
    'luxury',
    'lyrics',
    'machine',
    'mad',
    'magic',
    'magnet',
    'maid',
    'mail',
    'main',
    'major',
    'make',
    'mammal',
    'man',
    'manage',
    'mandate',
    'mango',
    'mansion',
    'manual',
    'maple',
    'marble',
    'march',
    'margin',
    'marine',
    'market',
    'marriage',
    'mask',
    'mass',
    'master',
    'match',
    'material',
    'math',
    'matrix',
    'matter',
    'maximum',
    'maze',
    'meadow',
    'mean',
    'measure',
    'meat',
    'mechanic',
    'medal',
    'media',
    'melody',
    'melt',
    'member',
    'memory',
    'mention',
    'menu',
    'mercy',
    'merge',
    'merit',
    'merry',
    'mesh',
    'message',
    'metal',
    'method',
    'middle',
    'midnight',
    'milk',
    'million',
    'mimic',
    'mind',
    'minimum',
    'minor',
    'minute',
    'miracle',
    'mirror',
    'misery',
    'miss',
    'mistake',
    'mix',
    'mixed',
    'mixture',
    'mobile',
    'model',
    'modify',
    'mom',
    'moment',
    'monitor',
    'monkey',
    'monster',
    'month',
    'moon',
    'moral',
    'more',
    'morning',
    'mosquito',
    'mother',
    'motion',
    'motor',
    'mountain',
    'mouse',
    'move',
    'movie',
    'much',
    'muffin',
    'mule',
    'multiply',
    'muscle',
    'museum',
    'mushroom',
    'music',
    'must',
    'mutual',
    'myself',
    'mystery',
    'myth',
    'naive',
    'name',
    'napkin',
    'narrow',
    'nasty',
    'nation',
    'nature',
    'near',
    'neck',
    'need',
    'negative',
    'neglect',
    'neither',
    'nephew',
    'nerve',
    'nest',
    'net',
    'network',
    'neutral',
    'never',
    'news',
    'next',
    'nice',
    'night',
    'noble',
    'noise',
    'nominee',
    'noodle',
    'normal',
    'north',
    'nose',
    'notable',
    'note',
    'nothing',
    'notice',
    'novel',
    'now',
    'nuclear',
    'number',
    'nurse',
    'nut',
    'oak',
    'obey',
    'object',
    'oblige',
    'obscure',
    'observe',
    'obtain',
    'obvious',
    'occur',
    'ocean',
    'october',
    'odor',
    'off',
    'offer',
    'office',
    'often',
    'oil',
    'okay',
    'old',
    'olive',
    'olympic',
    'omit',
    'once',
    'one',
    'onion',
    'online',
    'only',
    'open',
    'opera',
    'opinion',
    'oppose',
    'option',
    'orange',
    'orbit',
    'orchard',
    'order',
    'ordinary',
    'organ',
    'orient',
    'original',
    'orphan',
    'ostrich',
    'other',
    'outdoor',
    'outer',
    'output',
    'outside',
    'oval',
    'oven',
    'over',
    'own',
    'owner',
    'oxygen',
    'oyster',
    'ozone',
    'pact',
    'paddle',
    'page',
    'pair',
    'palace',
    'palm',
    'panda',
    'panel',
    'panic',
    'panther',
    'paper',
    'parade',
    'parent',
    'park',
    'parrot',
    'party',
    'pass',
    'patch',
    'path',
    'patient',
    'patrol',
    'pattern',
    'pause',
    'pave',
    'payment',
    'peace',
    'peanut',
    'pear',
    'peasant',
    'pelican',
    'pen',
    'penalty',
    'pencil',
    'people',
    'pepper',
    'perfect',
    'permit',
    'person',
    'pet',
    'phone',
    'photo',
    'phrase',
    'physical',
    'piano',
    'picnic',
    'picture',
    'piece',
    'pig',
    'pigeon',
    'pill',
    'pilot',
    'pink',
    'pioneer',
    'pipe',
    'pistol',
    'pitch',
    'pizza',
    'place',
    'planet',
    'plastic',
    'plate',
    'play',
    'please',
    'pledge',
    'pluck',
    'plug',
    'plunge',
    'poem',
    'poet',
    'point',
    'polar',
    'pole',
    'police',
    'pond',
    'pony',
    'pool',
    'popular',
    'portion',
    'position',
    'possible',
    'post',
    'potato',
    'pottery',
    'poverty',
    'powder',
    'power',
    'practice',
    'praise',
    'predict',
    'prefer',
    'prepare',
    'present',
    'pretty',
    'prevent',
    'price',
    'pride',
    'primary',
    'print',
    'priority',
    'prison',
    'private',
    'prize',
    'problem',
    'process',
    'produce',
    'profit',
    'program',
    'project',
    'promote',
    'proof',
    'property',
    'prosper',
    'protect',
    'proud',
    'provide',
    'public',
    'pudding',
    'pull',
    'pulp',
    'pulse',
    'pumpkin',
    'punch',
    'pupil',
    'puppy',
    'purchase',
    'purity',
    'purpose',
    'purse',
    'push',
    'put',
    'puzzle',
    'pyramid',
    'quality',
    'quantum',
    'quarter',
    'question',
    'quick',
    'quit',
    'quiz',
    'quote',
    'rabbit',
    'raccoon',
    'race',
    'rack',
    'radar',
    'radio',
    'rail',
    'rain',
    'raise',
    'rally',
    'ramp',
    'ranch',
    'random',
    'range',
    'rapid',
    'rare',
    'rate',
    'rather',
    'raven',
    'raw',
    'razor',
    'ready',
    'real',
    'reason',
    'rebel',
    'rebuild',
    'recall',
    'receive',
    'recipe',
    'record',
    'recycle',
    'reduce',
    'reflect',
    'reform',
    'refuse',
    'region',
    'regret',
    'regular',
    'reject',
    'relax',
    'release',
    'relief',
    'rely',
    'remain',
    'remember',
    'remind',
    'remove',
    'render',
    'renew',
    'rent',
    'reopen',
    'repair',
    'repeat',
    'replace',
    'report',
    'require',
    'rescue',
    'resemble',
    'resist',
    'resource',
    'response',
    'result',
    'retire',
    'retreat',
    'return',
    'reunion',
    'reveal',
    'review',
    'reward',
    'rhythm',
    'rib',
    'ribbon',
    'rice',
    'rich',
    'ride',
    'ridge',
    'rifle',
    'right',
    'rigid',
    'ring',
    'riot',
    'ripple',
    'risk',
    'ritual',
    'rival',
    'river',
    'road',
    'roast',
    'robot',
    'robust',
    'rocket',
    'romance',
    'roof',
    'rookie',
    'room',
    'rose',
    'rotate',
    'rough',
    'round',
    'route',
    'royal',
    'rubber',
    'rude',
    'rug',
    'rule',
    'run',
    'runway',
    'rural',
    'sad',
    'saddle',
    'sadness',
    'safe',
    'sail',
    'salad',
    'salmon',
    'salon',
    'salt',
    'salute',
    'same',
    'sample',
    'sand',
    'satisfy',
    'satoshi',
    'sauce',
    'sausage',
    'save',
    'say',
    'scale',
    'scan',
    'scare',
    'scatter',
    'scene',
    'scheme',
    'school',
    'science',
    'scissors',
    'scorpion',
    'scout',
    'scrap',
    'screen',
    'script',
    'scrub',
    'sea',
    'search',
    'season',
    'seat',
    'second',
    'secret',
    'section',
    'security',
    'seed',
    'seek',
    'segment',
    'select',
    'sell',
    'seminar',
    'senior',
    'sense',
    'sentence',
    'series',
    'service',
    'session',
    'settle',
    'setup',
    'seven',
    'shadow',
    'shaft',
    'shallow',
    'share',
    'shed',
    'shell',
    'sheriff',
    'shield',
    'shift',
    'shine',
    'ship',
    'shiver',
    'shock',
    'shoe',
    'shoot',
    'shop',
    'short',
    'shoulder',
    'shove',
    'shrimp',
    'shrug',
    'shuffle',
    'shy',
    'sibling',
    'sick',
    'side',
    'siege',
    'sight',
    'sign',
    'silent',
    'silk',
    'silly',
    'silver',
    'similar',
    'simple',
    'since',
    'sing',
    'siren',
    'sister',
    'situate',
    'six',
    'size',
    'skate',
    'sketch',
    'ski',
    'skill',
    'skin',
    'skirt',
    'skull',
    'slab',
    'slam',
    'sleep',
    'slender',
    'slice',
    'slide',
    'slight',
    'slim',
    'slogan',
    'slot',
    'slow',
    'slush',
    'small',
    'smart',
    'smile',
    'smoke',
    'smooth',
    'snack',
    'snake',
    'snap',
    'sniff',
    'snow',
    'soap',
    'soccer',
    'social',
    'sock',
    'soda',
    'soft',
    'solar',
    'soldier',
    'solid',
    'solution',
    'solve',
    'someone',
    'song',
    'soon',
    'sorry',
    'sort',
    'soul',
    'sound',
    'soup',
    'source',
    'south',
    'space',
    'spare',
    'spatial',
    'spawn',
    'speak',
    'special',
    'speed',
    'spell',
    'spend',
    'sphere',
    'spice',
    'spider',
    'spike',
    'spin',
    'spirit',
    'split',
    'spoil',
    'sponsor',
    'spoon',
    'sport',
    'spot',
    'spray',
    'spread',
    'spring',
    'spy',
    'square',
    'squeeze',
    'squirrel',
    'stable',
    'stadium',
    'staff',
    'stage',
    'stairs',
    'stamp',
    'stand',
    'start',
    'state',
    'stay',
    'steak',
    'steel',
    'stem',
    'step',
    'stereo',
    'stick',
    'still',
    'sting',
    'stock',
    'stomach',
    'stone',
    'stool',
    'story',
    'stove',
    'strategy',
    'street',
    'strike',
    'strong',
    'struggle',
    'student',
    'stuff',
    'stumble',
    'style',
    'subject',
    'submit',
    'subway',
    'success',
    'such',
    'sudden',
    'suffer',
    'sugar',
    'suggest',
    'suit',
    'summer',
    'sun',
    'sunny',
    'sunset',
    'super',
    'supply',
    'supreme',
    'sure',
    'surface',
    'surge',
    'surprise',
    'surround',
    'survey',
    'suspect',
    'sustain',
    'swallow',
    'swamp',
    'swap',
    'swarm',
    'swear',
    'sweet',
    'swift',
    'swim',
    'swing',
    'switch',
    'sword',
    'symbol',
    'symptom',
    'syrup',
    'system',
    'table',
    'tackle',
    'tag',
    'tail',
    'talent',
    'talk',
    'tank',
    'tape',
    'target',
    'task',
    'taste',
    'tattoo',
    'taxi',
    'teach',
    'team',
    'tell',
    'ten',
    'tenant',
    'tennis',
    'tent',
    'term',
    'test',
    'text',
    'thank',
    'that',
    'theme',
    'then',
    'theory',
    'there',
    'they',
    'thing',
    'this',
    'thought',
    'three',
    'thrive',
    'throw',
    'thumb',
    'thunder',
    'ticket',
    'tide',
    'tiger',
    'tilt',
    'timber',
    'time',
    'tiny',
    'tip',
    'tired',
    'tissue',
    'title',
    'toast',
    'tobacco',
    'today',
    'toddler',
    'toe',
    'together',
    'toilet',
    'token',
    'tomato',
    'tomorrow',
    'tone',
    'tongue',
    'tonight',
    'tool',
    'tooth',
    'top',
    'topic',
    'topple',
    'torch',
    'tornado',
    'tortoise',
    'toss',
    'total',
    'tourist',
    'toward',
    'tower',
    'town',
    'toy',
    'track',
    'trade',
    'traffic',
    'tragic',
    'train',
    'transfer',
    'trap',
    'trash',
    'travel',
    'tray',
    'treat',
    'tree',
    'trend',
    'trial',
    'tribe',
    'trick',
    'trigger',
    'trim',
    'trip',
    'trophy',
    'trouble',
    'truck',
    'true',
    'truly',
    'trumpet',
    'trust',
    'truth',
    'try',
    'tube',
    'tuition',
    'tumble',
    'tuna',
    'tunnel',
    'turkey',
    'turn',
    'turtle',
    'twelve',
    'twenty',
    'twice',
    'twin',
    'twist',
    'two',
    'type',
    'typical',
    'ugly',
    'umbrella',
    'unable',
    'unaware',
    'uncle',
    'uncover',
    'under',
    'undo',
    'unfair',
    'unfold',
    'unhappy',
    'uniform',
    'unique',
    'unit',
    'universe',
    'unknown',
    'unlock',
    'until',
    'unusual',
    'unveil',
    'update',
    'upgrade',
    'uphold',
    'upon',
    'upper',
    'upset',
    'urban',
    'urge',
    'usage',
    'use',
    'used',
    'useful',
    'useless',
    'usual',
    'utility',
    'vacant',
    'vacuum',
    'vague',
    'valid',
    'valley',
    'valve',
    'van',
    'vanish',
    'vapor',
    'various',
    'vast',
    'vault',
    'vehicle',
    'velvet',
    'vendor',
    'venture',
    'venue',
    'verb',
    'verify',
    'version',
    'very',
    'vessel',
    'veteran',
    'viable',
    'vibrant',
    'vicious',
    'victory',
    'video',
    'view',
    'village',
    'vintage',
    'violin',
    'virtual',
    'virus',
    'visa',
    'visit',
    'visual',
    'vital',
    'vivid',
    'vocal',
    'voice',
    'void',
    'volcano',
    'volume',
    'vote',
    'voyage',
    'wage',
    'wagon',
    'wait',
    'walk',
    'wall',
    'walnut',
    'want',
    'warfare',
    'warm',
    'warrior',
    'wash',
    'wasp',
    'waste',
    'water',
    'wave',
    'way',
    'wealth',
    'weapon',
    'wear',
    'weasel',
    'weather',
    'web',
    'wedding',
    'weekend',
    'weird',
    'welcome',
    'west',
    'wet',
    'whale',
    'what',
    'wheat',
    'wheel',
    'when',
    'where',
    'whip',
    'whisper',
    'wide',
    'width',
    'wife',
    'wild',
    'will',
    'win',
    'window',
    'wine',
    'wing',
    'wink',
    'winner',
    'winter',
    'wire',
    'wisdom',
    'wise',
    'wish',
    'witness',
    'wolf',
    'woman',
    'wonder',
    'wood',
    'wool',
    'word',
    'work',
    'world',
    'worry',
    'worth',
    'wrap',
    'wreck',
    'wrestle',
    'wrist',
    'write',
    'wrong',
    'yard',
    'year',
    'yellow',
    'you',
    'young',
    'youth',
    'zebra',
    'zero',
    'zone',
    'zoo',
];
exports.default = english;

},{}],77:[function(require,module,exports){
(function (Buffer){(function (){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.multisigAddress = exports.appendSignMultisigTransaction = exports.signMultisigTransaction = exports.verifyMultisig = exports.mergeMultisigTransactions = exports.MultisigTransaction = exports.MULTISIG_USE_PARTIAL_SIGN_ERROR_MSG = exports.MULTISIG_NO_MUTATE_ERROR_MSG = exports.MULTISIG_MERGE_SIG_MISMATCH_ERROR_MSG = exports.MULTISIG_MERGE_WRONG_PREIMAGE_ERROR_MSG = exports.MULTISIG_MERGE_MISMATCH_AUTH_ADDR_MSG = exports.MULTISIG_MERGE_MISMATCH_ERROR_MSG = exports.MULTISIG_MERGE_LESSTHANTWO_ERROR_MSG = void 0;
const nacl = __importStar(require("./nacl/naclWrappers"));
const address = __importStar(require("./encoding/address"));
const encoding = __importStar(require("./encoding/encoding"));
const txnBuilder = __importStar(require("./transaction"));
const utils = __importStar(require("./utils/utils"));
exports.MULTISIG_MERGE_LESSTHANTWO_ERROR_MSG = 'Not enough multisig transactions to merge. Need at least two';
exports.MULTISIG_MERGE_MISMATCH_ERROR_MSG = 'Cannot merge txs. txIDs differ';
exports.MULTISIG_MERGE_MISMATCH_AUTH_ADDR_MSG = 'Cannot merge txs. Auth addrs differ';
exports.MULTISIG_MERGE_WRONG_PREIMAGE_ERROR_MSG = 'Cannot merge txs. Multisig preimages differ';
exports.MULTISIG_MERGE_SIG_MISMATCH_ERROR_MSG = 'Cannot merge txs. subsigs are mismatched.';
const MULTISIG_KEY_NOT_EXIST_ERROR_MSG = 'Key does not exist';
exports.MULTISIG_NO_MUTATE_ERROR_MSG = 'Cannot mutate a multisig field as it would invalidate all existing signatures.';
exports.MULTISIG_USE_PARTIAL_SIGN_ERROR_MSG = 'Cannot sign a multisig transaction using `signTxn`. Use `partialSignTxn` instead.';
function createMultisigTransaction(txnForEncoding, { rawSig, myPk }, { version, threshold, pks }) {
    let keyExist = false;
    
    const subsigs = pks.map((pk) => {
        if (nacl.bytesEqual(pk, myPk)) {
            keyExist = true;
            return {
                pk: Buffer.from(pk),
                s: rawSig,
            };
        }
        return { pk: Buffer.from(pk) };
    });
    if (keyExist === false) {
        throw new Error(MULTISIG_KEY_NOT_EXIST_ERROR_MSG);
    }
    const msig = {
        v: version,
        thr: threshold,
        subsig: subsigs,
    };
    const signedTxn = {
        msig,
        txn: txnForEncoding,
    };
    
    
    const msigAddr = address.fromMultisigPreImg({
        version,
        threshold,
        pks,
    });
    if (address.encodeAddress(txnForEncoding.snd) !==
        address.encodeAddress(msigAddr)) {
        signedTxn.sgnr = Buffer.from(msigAddr);
    }
    return new Uint8Array(encoding.encode(signedTxn));
}
class MultisigTransaction extends txnBuilder.Transaction {
            addLease() {
        throw new Error(exports.MULTISIG_NO_MUTATE_ERROR_MSG);
    }
        addRekey() {
        throw new Error(exports.MULTISIG_NO_MUTATE_ERROR_MSG);
    }
    signTxn(sk) {
        throw new Error(exports.MULTISIG_USE_PARTIAL_SIGN_ERROR_MSG);
    }
            partialSignTxn({ version, threshold, pks }, sk) {
        
        const myPk = nacl.keyPairFromSecretKey(sk).publicKey;
        return createMultisigTransaction(this.get_obj_for_encoding(), { rawSig: this.rawSignTxn(sk), myPk }, { version, threshold, pks });
    }
    
    static from_obj_for_encoding(txnForEnc) {
        return super.from_obj_for_encoding(txnForEnc);
    }
}
exports.MultisigTransaction = MultisigTransaction;
function mergeMultisigTransactions(multisigTxnBlobs) {
    if (multisigTxnBlobs.length < 2) {
        throw new Error(exports.MULTISIG_MERGE_LESSTHANTWO_ERROR_MSG);
    }
    const refSigTx = encoding.decode(multisigTxnBlobs[0]);
    const refTxID = MultisigTransaction.from_obj_for_encoding(refSigTx.txn).txID();
    const refAuthAddr = refSigTx.sgnr
        ? address.encodeAddress(refSigTx.sgnr)
        : undefined;
    const refPreImage = {
        version: refSigTx.msig.v,
        threshold: refSigTx.msig.thr,
        pks: refSigTx.msig.subsig.map((subsig) => subsig.pk),
    };
    const refMsigAddr = address.encodeAddress(address.fromMultisigPreImg(refPreImage));
    let newSubsigs = refSigTx.msig.subsig;
    for (let i = 0; i < multisigTxnBlobs.length; i++) {
        const unisig = encoding.decode(multisigTxnBlobs[i]);
        const unisigAlgoTxn = MultisigTransaction.from_obj_for_encoding(unisig.txn);
        if (unisigAlgoTxn.txID() !== refTxID) {
            throw new Error(exports.MULTISIG_MERGE_MISMATCH_ERROR_MSG);
        }
        const authAddr = unisig.sgnr
            ? address.encodeAddress(unisig.sgnr)
            : undefined;
        if (refAuthAddr !== authAddr) {
            throw new Error(exports.MULTISIG_MERGE_MISMATCH_AUTH_ADDR_MSG);
        }
        
        if (unisig.msig.subsig.length !== refSigTx.msig.subsig.length) {
            throw new Error(exports.MULTISIG_MERGE_WRONG_PREIMAGE_ERROR_MSG);
        }
        const preimg = {
            version: unisig.msig.v,
            threshold: unisig.msig.thr,
            pks: unisig.msig.subsig.map((subsig) => subsig.pk),
        };
        const msgigAddr = address.encodeAddress(address.fromMultisigPreImg(preimg));
        if (refMsigAddr !== msgigAddr) {
            throw new Error(exports.MULTISIG_MERGE_WRONG_PREIMAGE_ERROR_MSG);
        }
        
        newSubsigs = unisig.msig.subsig.map((uniSubsig, index) => {
            const current = refSigTx.msig.subsig[index];
            if (current.s) {
                
                
                
                
                if (uniSubsig.s &&
                    Buffer.compare(Buffer.from(uniSubsig.s), Buffer.from(current.s)) !== 0) {
                    
                    throw new Error(exports.MULTISIG_MERGE_SIG_MISMATCH_ERROR_MSG);
                }
                return {
                    pk: current.pk,
                    s: current.s,
                };
            }
            if (uniSubsig.s) {
                return {
                    pk: current.pk,
                    s: uniSubsig.s,
                };
            }
            return current;
        });
    }
    const msig = {
        v: refSigTx.msig.v,
        thr: refSigTx.msig.thr,
        subsig: newSubsigs,
    };
    const signedTxn = {
        msig,
        txn: refSigTx.txn,
    };
    if (typeof refAuthAddr !== 'undefined') {
        signedTxn.sgnr = Buffer.from(address.decodeAddress(refAuthAddr).publicKey);
    }
    return new Uint8Array(encoding.encode(signedTxn));
}
exports.mergeMultisigTransactions = mergeMultisigTransactions;
function verifyMultisig(toBeVerified, msig, publicKey) {
    const version = msig.v;
    const threshold = msig.thr;
    const subsigs = msig.subsig;
    const pks = subsigs.map((subsig) => subsig.pk);
    if (msig.subsig.length < threshold) {
        return false;
    }
    let pk;
    try {
        pk = address.fromMultisigPreImg({ version, threshold, pks });
    }
    catch (e) {
        return false;
    }
    if (!utils.arrayEqual(pk, publicKey)) {
        return false;
    }
    let counter = 0;
    for (const subsig of subsigs) {
        if (subsig.s !== undefined) {
            counter += 1;
        }
    }
    if (counter < threshold) {
        return false;
    }
    let verifiedCounter = 0;
    for (const subsig of subsigs) {
        if (subsig.s !== undefined) {
            if (nacl.verify(toBeVerified, subsig.s, subsig.pk)) {
                verifiedCounter += 1;
            }
        }
    }
    if (verifiedCounter < threshold) {
        return false;
    }
    return true;
}
exports.verifyMultisig = verifyMultisig;
function signMultisigTransaction(txn, { version, threshold, addrs }, sk) {
    
    const expectedFromRaw = address.fromMultisigPreImgAddrs({
        version,
        threshold,
        addrs,
    });
    if (!Object.prototype.hasOwnProperty.call(txn, 'from')) {
        
        txn.from = expectedFromRaw;
    }
    
    const pks = addrs.map((addr) => address.decodeAddress(addr).publicKey);
    
    const txnAlreadyBuilt = txn instanceof txnBuilder.Transaction;
    let algoTxn;
    let blob;
    if (txnAlreadyBuilt) {
        algoTxn = txn;
        blob = MultisigTransaction.prototype.partialSignTxn.call(algoTxn, { version, threshold, pks }, sk);
    }
    else {
        algoTxn = new MultisigTransaction(txn);
        blob = algoTxn.partialSignTxn({ version, threshold, pks }, sk);
    }
    return {
        txID: algoTxn.txID().toString(),
        blob,
    };
}
exports.signMultisigTransaction = signMultisigTransaction;
function appendSignMultisigTransaction(multisigTxnBlob, { version, threshold, addrs }, sk) {
    const pks = addrs.map((addr) => address.decodeAddress(addr).publicKey);
    
    const multisigTxObj = encoding.decode(multisigTxnBlob);
    const msigTxn = MultisigTransaction.from_obj_for_encoding(multisigTxObj.txn);
    const partialSignedBlob = msigTxn.partialSignTxn({ version, threshold, pks }, sk);
    return {
        txID: msigTxn.txID().toString(),
        blob: mergeMultisigTransactions([multisigTxnBlob, partialSignedBlob]),
    };
}
exports.appendSignMultisigTransaction = appendSignMultisigTransaction;
function multisigAddress({ version, threshold, addrs, }) {
    return address.fromMultisigPreImgAddrs({ version, threshold, addrs });
}
exports.multisigAddress = multisigAddress;

}).call(this)}).call(this,require("buffer").Buffer)
},{"./encoding/address":58,"./encoding/encoding":60,"./nacl/naclWrappers":78,"./transaction":80,"./utils/utils":88,"buffer":95}],78:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SEED_BTYES_LENGTH = exports.HASH_BYTES_LENGTH = exports.SECRET_KEY_LENGTH = exports.PUBLIC_KEY_LENGTH = exports.verify = exports.bytesEqual = exports.sign = exports.keyPairFromSecretKey = exports.keyPair = exports.keyPairFromSeed = exports.randomBytes = exports.genericHash = void 0;
const tweetnacl_1 = __importDefault(require("tweetnacl"));
const js_sha512_1 = __importDefault(require("js-sha512"));
function genericHash(arr) {
    return js_sha512_1.default.sha512_256.array(arr);
}
exports.genericHash = genericHash;
function randomBytes(length) {
    return tweetnacl_1.default.randomBytes(length);
}
exports.randomBytes = randomBytes;
function keyPairFromSeed(seed) {
    return tweetnacl_1.default.sign.keyPair.fromSeed(seed);
}
exports.keyPairFromSeed = keyPairFromSeed;
function keyPair() {
    const seed = randomBytes(tweetnacl_1.default.box.secretKeyLength);
    return keyPairFromSeed(seed);
}
exports.keyPair = keyPair;
function keyPairFromSecretKey(sk) {
    return tweetnacl_1.default.sign.keyPair.fromSecretKey(sk);
}
exports.keyPairFromSecretKey = keyPairFromSecretKey;
function sign(msg, secretKey) {
    return tweetnacl_1.default.sign.detached(msg, secretKey);
}
exports.sign = sign;
function bytesEqual(a, b) {
    return tweetnacl_1.default.verify(a, b);
}
exports.bytesEqual = bytesEqual;
function verify(message, signature, verifyKey) {
    return tweetnacl_1.default.sign.detached.verify(message, signature, verifyKey);
}
exports.verify = verify;

exports.PUBLIC_KEY_LENGTH = tweetnacl_1.default.sign.publicKeyLength;
exports.SECRET_KEY_LENGTH = tweetnacl_1.default.sign.secretKeyLength;
exports.HASH_BYTES_LENGTH = 32;
exports.SEED_BTYES_LENGTH = 32;

},{"js-sha512":109,"tweetnacl":91}],79:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isTransactionWithSigner = exports.makeMultiSigAccountTransactionSigner = exports.makeLogicSigAccountTransactionSigner = exports.makeBasicAccountTransactionSigner = void 0;
const logicsig_1 = require("./logicsig");
const multisig_1 = require("./multisig");
function makeBasicAccountTransactionSigner(account) {
    return (txnGroup, indexesToSign) => {
        const signed = [];
        for (const index of indexesToSign) {
            signed.push(txnGroup[index].signTxn(account.sk));
        }
        return Promise.resolve(signed);
    };
}
exports.makeBasicAccountTransactionSigner = makeBasicAccountTransactionSigner;
function makeLogicSigAccountTransactionSigner(account) {
    return (txnGroup, indexesToSign) => {
        const signed = [];
        for (const index of indexesToSign) {
            const { blob } = logicsig_1.signLogicSigTransactionObject(txnGroup[index], account);
            signed.push(blob);
        }
        return Promise.resolve(signed);
    };
}
exports.makeLogicSigAccountTransactionSigner = makeLogicSigAccountTransactionSigner;
function makeMultiSigAccountTransactionSigner(msig, sks) {
    return (txnGroup, indexesToSign) => {
        const signed = [];
        for (const index of indexesToSign) {
            const txn = txnGroup[index];
            const partialSigs = [];
            for (const sk of sks) {
                const { blob } = multisig_1.signMultisigTransaction(txn, msig, sk);
                partialSigs.push(blob);
            }
            signed.push(multisig_1.mergeMultisigTransactions(partialSigs));
        }
        return Promise.resolve(signed);
    };
}
exports.makeMultiSigAccountTransactionSigner = makeMultiSigAccountTransactionSigner;
function isTransactionWithSigner(value) {
    return (typeof value === 'object' &&
        Object.keys(value).length === 2 &&
        typeof value.txn === 'object' &&
        typeof value.signer === 'function');
}
exports.isTransactionWithSigner = isTransactionWithSigner;

},{"./logicsig":72,"./multisig":77}],80:[function(require,module,exports){
(function (Buffer){(function (){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.instantiateTxnIfNeeded = exports.decodeSignedTransaction = exports.decodeUnsignedTransaction = exports.encodeUnsignedTransaction = exports.Transaction = exports.ALGORAND_MIN_TX_FEE = void 0;
const hi_base32_1 = __importDefault(require("hi-base32"));
const address = __importStar(require("./encoding/address"));
const encoding = __importStar(require("./encoding/encoding"));
const nacl = __importStar(require("./nacl/naclWrappers"));
const utils = __importStar(require("./utils/utils"));
const base_1 = require("./types/transactions/base");
const ALGORAND_TRANSACTION_LENGTH = 52;
exports.ALGORAND_MIN_TX_FEE = 1000; 
const ALGORAND_TRANSACTION_LEASE_LENGTH = 32;
const ALGORAND_MAX_ASSET_DECIMALS = 19;
const NUM_ADDL_BYTES_AFTER_SIGNING = 75; 
const ALGORAND_TRANSACTION_LEASE_LABEL_LENGTH = 5;
const ALGORAND_TRANSACTION_ADDRESS_LENGTH = 32;
const ALGORAND_TRANSACTION_REKEY_LABEL_LENGTH = 5;
const ASSET_METADATA_HASH_LENGTH = 32;
const KEYREG_VOTE_KEY_LENGTH = 32;
const KEYREG_SELECTION_KEY_LENGTH = 32;
const KEYREG_STATE_PROOF_KEY_LENGTH = 64;
function getKeyregKey(input, inputName, length) {
    if (input == null) {
        return undefined;
    }
    let inputAsBuffer;
    if (typeof input === 'string') {
        inputAsBuffer = Buffer.from(input, 'base64');
    }
    else if (input.constructor === Uint8Array) {
        inputAsBuffer = Buffer.from(input);
    }
    else if (Buffer.isBuffer(input)) {
        inputAsBuffer = input;
    }
    if (inputAsBuffer == null || inputAsBuffer.byteLength !== length) {
        throw Error(`${inputName} must be a ${length} byte Uint8Array or Buffer or base64 string.`);
    }
    return inputAsBuffer;
}
class Transaction {
    constructor({ ...transaction }) {
        this.name = 'Transaction';
        this.tag = Buffer.from('TX');
        
                const defaults = {
            type: base_1.TransactionType.pay,
            flatFee: false,
            nonParticipation: false,
        };
        
        if (typeof transaction.type === 'undefined') {
            transaction.type = defaults.type;
        }
        
        if (typeof transaction.flatFee ===
            'undefined') {
            transaction.flatFee =
                defaults.flatFee;
        }
        
        if (transaction.type === base_1.TransactionType.keyreg &&
            typeof transaction.voteKey !== 'undefined' &&
            typeof transaction.nonParticipation === 'undefined') {
            transaction.nonParticipation = defaults.nonParticipation;
        }
                
        if (transaction.suggestedParams !== undefined) {
            
            
            const reference = transaction;
            reference.genesisHash = reference.suggestedParams.genesisHash;
            reference.fee = reference.suggestedParams.fee;
            if (reference.suggestedParams.flatFee !== undefined)
                reference.flatFee = reference.suggestedParams.flatFee;
            reference.firstRound = reference.suggestedParams.firstRound;
            reference.lastRound = reference.suggestedParams.lastRound;
            reference.genesisID = reference.suggestedParams.genesisID;
        }
        
        
        const txn = transaction;
        txn.from = address.decodeAddress(txn.from);
        if (txn.to !== undefined)
            txn.to = address.decodeAddress(txn.to);
        if (txn.closeRemainderTo !== undefined)
            txn.closeRemainderTo = address.decodeAddress(txn.closeRemainderTo);
        if (txn.assetManager !== undefined)
            txn.assetManager = address.decodeAddress(txn.assetManager);
        if (txn.assetReserve !== undefined)
            txn.assetReserve = address.decodeAddress(txn.assetReserve);
        if (txn.assetFreeze !== undefined)
            txn.assetFreeze = address.decodeAddress(txn.assetFreeze);
        if (txn.assetClawback !== undefined)
            txn.assetClawback = address.decodeAddress(txn.assetClawback);
        if (txn.assetRevocationTarget !== undefined)
            txn.assetRevocationTarget = address.decodeAddress(txn.assetRevocationTarget);
        if (txn.freezeAccount !== undefined)
            txn.freezeAccount = address.decodeAddress(txn.freezeAccount);
        if (txn.reKeyTo !== undefined)
            txn.reKeyTo = address.decodeAddress(txn.reKeyTo);
        if (txn.genesisHash === undefined)
            throw Error('genesis hash must be specified and in a base64 string.');
        txn.genesisHash = Buffer.from(txn.genesisHash, 'base64');
        if (txn.amount !== undefined &&
            (!(Number.isSafeInteger(txn.amount) ||
                (typeof txn.amount === 'bigint' &&
                    txn.amount <= BigInt('0xffffffffffffffff'))) ||
                txn.amount < 0))
            throw Error('Amount must be a positive number and smaller than 2^64-1. If the number is larger than 2^53-1, use bigint.');
        if (!Number.isSafeInteger(txn.fee) || txn.fee < 0)
            throw Error('fee must be a positive number and smaller than 2^53-1');
        if (!Number.isSafeInteger(txn.firstRound) || txn.firstRound < 0)
            throw Error('firstRound must be a positive number');
        if (!Number.isSafeInteger(txn.lastRound) || txn.lastRound < 0)
            throw Error('lastRound must be a positive number');
        if (txn.extraPages !== undefined &&
            (!Number.isInteger(txn.extraPages) ||
                txn.extraPages < 0 ||
                txn.extraPages > 3))
            throw Error('extraPages must be an Integer between and including 0 to 3');
        if (txn.assetTotal !== undefined &&
            (!(Number.isSafeInteger(txn.assetTotal) ||
                (typeof txn.assetTotal === 'bigint' &&
                    txn.assetTotal <= BigInt('0xffffffffffffffff'))) ||
                txn.assetTotal < 0))
            throw Error('Total asset issuance must be a positive number and smaller than 2^64-1. If the number is larger than 2^53-1, use bigint.');
        if (txn.assetDecimals !== undefined &&
            (!Number.isSafeInteger(txn.assetDecimals) ||
                txn.assetDecimals < 0 ||
                txn.assetDecimals > ALGORAND_MAX_ASSET_DECIMALS))
            throw Error(`assetDecimals must be a positive number and smaller than ${ALGORAND_MAX_ASSET_DECIMALS.toString()}`);
        if (txn.assetIndex !== undefined &&
            (!Number.isSafeInteger(txn.assetIndex) || txn.assetIndex < 0))
            throw Error('Asset index must be a positive number and smaller than 2^53-1');
        if (txn.appIndex !== undefined &&
            (!Number.isSafeInteger(txn.appIndex) || txn.appIndex < 0))
            throw Error('Application index must be a positive number and smaller than 2^53-1');
        if (txn.appLocalInts !== undefined &&
            (!Number.isSafeInteger(txn.appLocalInts) || txn.appLocalInts < 0))
            throw Error('Application local ints count must be a positive number and smaller than 2^53-1');
        if (txn.appLocalByteSlices !== undefined &&
            (!Number.isSafeInteger(txn.appLocalByteSlices) ||
                txn.appLocalByteSlices < 0))
            throw Error('Application local byte slices count must be a positive number and smaller than 2^53-1');
        if (txn.appGlobalInts !== undefined &&
            (!Number.isSafeInteger(txn.appGlobalInts) || txn.appGlobalInts < 0))
            throw Error('Application global ints count must be a positive number and smaller than 2^53-1');
        if (txn.appGlobalByteSlices !== undefined &&
            (!Number.isSafeInteger(txn.appGlobalByteSlices) ||
                txn.appGlobalByteSlices < 0))
            throw Error('Application global byte slices count must be a positive number and smaller than 2^53-1');
        if (txn.appApprovalProgram !== undefined) {
            if (txn.appApprovalProgram.constructor !== Uint8Array)
                throw Error('appApprovalProgram must be a Uint8Array.');
        }
        if (txn.appClearProgram !== undefined) {
            if (txn.appClearProgram.constructor !== Uint8Array)
                throw Error('appClearProgram must be a Uint8Array.');
        }
        if (txn.appArgs !== undefined) {
            if (!Array.isArray(txn.appArgs))
                throw Error('appArgs must be an Array of Uint8Array.');
            txn.appArgs = txn.appArgs.slice();
            txn.appArgs.forEach((arg) => {
                if (arg.constructor !== Uint8Array)
                    throw Error('each element of AppArgs must be a Uint8Array.');
            });
        }
        else {
            txn.appArgs = [];
        }
        if (txn.appAccounts !== undefined) {
            if (!Array.isArray(txn.appAccounts))
                throw Error('appAccounts must be an Array of addresses.');
            txn.appAccounts = txn.appAccounts.map((addressAsString) => address.decodeAddress(addressAsString));
        }
        if (txn.appForeignApps !== undefined) {
            if (!Array.isArray(txn.appForeignApps))
                throw Error('appForeignApps must be an Array of integers.');
            txn.appForeignApps = txn.appForeignApps.slice();
            txn.appForeignApps.forEach((foreignAppIndex) => {
                if (!Number.isSafeInteger(foreignAppIndex) || foreignAppIndex < 0)
                    throw Error('each foreign application index must be a positive number and smaller than 2^53-1');
            });
        }
        if (txn.appForeignAssets !== undefined) {
            if (!Array.isArray(txn.appForeignAssets))
                throw Error('appForeignAssets must be an Array of integers.');
            txn.appForeignAssets = txn.appForeignAssets.slice();
            txn.appForeignAssets.forEach((foreignAssetIndex) => {
                if (!Number.isSafeInteger(foreignAssetIndex) || foreignAssetIndex < 0)
                    throw Error('each foreign asset index must be a positive number and smaller than 2^53-1');
            });
        }
        if (txn.assetMetadataHash !== undefined &&
            txn.assetMetadataHash.length !== 0) {
            if (typeof txn.assetMetadataHash === 'string') {
                txn.assetMetadataHash = new Uint8Array(Buffer.from(txn.assetMetadataHash));
            }
            if (txn.assetMetadataHash.constructor !== Uint8Array ||
                txn.assetMetadataHash.byteLength !== ASSET_METADATA_HASH_LENGTH) {
                throw Error(`assetMetadataHash must be a ${ASSET_METADATA_HASH_LENGTH} byte Uint8Array or string.`);
            }
            if (txn.assetMetadataHash.every((value) => value === 0)) {
                
                txn.assetMetadataHash = undefined;
            }
        }
        else {
            txn.assetMetadataHash = undefined;
        }
        if (txn.note !== undefined) {
            if (txn.note.constructor !== Uint8Array)
                throw Error('note must be a Uint8Array.');
        }
        else {
            txn.note = new Uint8Array(0);
        }
        if (txn.lease !== undefined) {
            if (txn.lease.constructor !== Uint8Array)
                throw Error('lease must be a Uint8Array.');
            if (txn.lease.length !== ALGORAND_TRANSACTION_LEASE_LENGTH)
                throw Error(`lease must be of length ${ALGORAND_TRANSACTION_LEASE_LENGTH.toString()}.`);
            if (txn.lease.every((value) => value === 0)) {
                
                txn.lease = new Uint8Array(0);
            }
        }
        else {
            txn.lease = new Uint8Array(0);
        }
        txn.voteKey = getKeyregKey(txn.voteKey, 'voteKey', KEYREG_VOTE_KEY_LENGTH);
        txn.selectionKey = getKeyregKey(txn.selectionKey, 'selectionKey', KEYREG_SELECTION_KEY_LENGTH);
        txn.stateProofKey = getKeyregKey(txn.stateProofKey, 'stateProofKey', KEYREG_STATE_PROOF_KEY_LENGTH);
        
        if (txn.nonParticipation &&
            (txn.voteKey ||
                txn.selectionKey ||
                txn.voteFirst ||
                txn.stateProofKey ||
                txn.voteLast ||
                txn.voteKeyDilution)) {
            throw new Error('nonParticipation is true but participation params are present.');
        }
        
        if (!txn.nonParticipation &&
            (txn.voteKey ||
                txn.selectionKey ||
                txn.stateProofKey ||
                txn.voteFirst ||
                txn.voteLast ||
                txn.voteKeyDilution) &&
            !(txn.voteKey &&
                txn.selectionKey &&
                txn.voteFirst &&
                txn.voteLast &&
                txn.voteKeyDilution)
        
        ) {
            throw new Error('online key registration missing at least one of the following fields: ' +
                'voteKey, selectionKey, voteFirst, voteLast, voteKeyDilution');
        }
        
        
        
        
        delete txn.suggestedParams;
        Object.assign(this, utils.removeUndefinedProperties(txn));
        
        if (!txn.flatFee) {
            this.fee *= this.estimateSize();
            
            if (this.fee < exports.ALGORAND_MIN_TX_FEE) {
                this.fee = exports.ALGORAND_MIN_TX_FEE;
            }
        }
        
        this.group = undefined;
    }
    
    get_obj_for_encoding() {
        if (this.type === 'pay') {
            const txn = {
                amt: this.amount,
                fee: this.fee,
                fv: this.firstRound,
                lv: this.lastRound,
                note: Buffer.from(this.note),
                snd: Buffer.from(this.from.publicKey),
                type: 'pay',
                gen: this.genesisID,
                gh: this.genesisHash,
                lx: Buffer.from(this.lease),
                grp: this.group,
            };
            
            if (this.closeRemainderTo !== undefined &&
                address.encodeAddress(this.closeRemainderTo.publicKey) !==
                    address.ALGORAND_ZERO_ADDRESS_STRING) {
                txn.close = Buffer.from(this.closeRemainderTo.publicKey);
            }
            if (this.reKeyTo !== undefined) {
                txn.rekey = Buffer.from(this.reKeyTo.publicKey);
            }
            
            if (this.to !== undefined)
                txn.rcv = Buffer.from(this.to.publicKey);
            if (!txn.note.length)
                delete txn.note;
            if (!txn.amt)
                delete txn.amt;
            if (!txn.fee)
                delete txn.fee;
            if (!txn.fv)
                delete txn.fv;
            if (!txn.gen)
                delete txn.gen;
            if (txn.grp === undefined)
                delete txn.grp;
            if (!txn.lx.length)
                delete txn.lx;
            if (!txn.rekey)
                delete txn.rekey;
            return txn;
        }
        if (this.type === 'keyreg') {
            const txn = {
                fee: this.fee,
                fv: this.firstRound,
                lv: this.lastRound,
                note: Buffer.from(this.note),
                snd: Buffer.from(this.from.publicKey),
                type: this.type,
                gen: this.genesisID,
                gh: this.genesisHash,
                lx: Buffer.from(this.lease),
                grp: this.group,
                votekey: this.voteKey,
                selkey: this.selectionKey,
                sprfkey: this.stateProofKey,
                votefst: this.voteFirst,
                votelst: this.voteLast,
                votekd: this.voteKeyDilution,
            };
            
            if (!txn.note.length)
                delete txn.note;
            if (!txn.lx.length)
                delete txn.lx;
            if (!txn.fee)
                delete txn.fee;
            if (!txn.fv)
                delete txn.fv;
            if (!txn.gen)
                delete txn.gen;
            if (txn.grp === undefined)
                delete txn.grp;
            if (this.reKeyTo !== undefined) {
                txn.rekey = Buffer.from(this.reKeyTo.publicKey);
            }
            if (this.nonParticipation) {
                txn.nonpart = true;
            }
            if (!txn.selkey)
                delete txn.selkey;
            if (!txn.votekey)
                delete txn.votekey;
            if (!txn.sprfkey)
                delete txn.sprfkey;
            if (!txn.votefst)
                delete txn.votefst;
            if (!txn.votelst)
                delete txn.votelst;
            if (!txn.votekd)
                delete txn.votekd;
            return txn;
        }
        if (this.type === 'acfg') {
            
            const txn = {
                fee: this.fee,
                fv: this.firstRound,
                lv: this.lastRound,
                note: Buffer.from(this.note),
                snd: Buffer.from(this.from.publicKey),
                type: this.type,
                gen: this.genesisID,
                gh: this.genesisHash,
                lx: Buffer.from(this.lease),
                grp: this.group,
                caid: this.assetIndex,
                apar: {
                    t: this.assetTotal,
                    df: this.assetDefaultFrozen,
                    dc: this.assetDecimals,
                },
            };
            if (this.assetManager !== undefined)
                txn.apar.m = Buffer.from(this.assetManager.publicKey);
            if (this.assetReserve !== undefined)
                txn.apar.r = Buffer.from(this.assetReserve.publicKey);
            if (this.assetFreeze !== undefined)
                txn.apar.f = Buffer.from(this.assetFreeze.publicKey);
            if (this.assetClawback !== undefined)
                txn.apar.c = Buffer.from(this.assetClawback.publicKey);
            if (this.assetName !== undefined)
                txn.apar.an = this.assetName;
            if (this.assetUnitName !== undefined)
                txn.apar.un = this.assetUnitName;
            if (this.assetURL !== undefined)
                txn.apar.au = this.assetURL;
            if (this.assetMetadataHash !== undefined)
                txn.apar.am = Buffer.from(this.assetMetadataHash);
            
            if (!txn.note.length)
                delete txn.note;
            if (!txn.lx.length)
                delete txn.lx;
            if (!txn.amt)
                delete txn.amt;
            if (!txn.fee)
                delete txn.fee;
            if (!txn.fv)
                delete txn.fv;
            if (!txn.gen)
                delete txn.gen;
            if (this.reKeyTo !== undefined) {
                txn.rekey = Buffer.from(this.reKeyTo.publicKey);
            }
            if (!txn.caid)
                delete txn.caid;
            if (!txn.apar.t &&
                !txn.apar.un &&
                !txn.apar.an &&
                !txn.apar.df &&
                !txn.apar.m &&
                !txn.apar.r &&
                !txn.apar.f &&
                !txn.apar.c &&
                !txn.apar.au &&
                !txn.apar.am &&
                !txn.apar.dc) {
                delete txn.apar;
            }
            else {
                if (!txn.apar.t)
                    delete txn.apar.t;
                if (!txn.apar.dc)
                    delete txn.apar.dc;
                if (!txn.apar.un)
                    delete txn.apar.un;
                if (!txn.apar.an)
                    delete txn.apar.an;
                if (!txn.apar.df)
                    delete txn.apar.df;
                if (!txn.apar.m)
                    delete txn.apar.m;
                if (!txn.apar.r)
                    delete txn.apar.r;
                if (!txn.apar.f)
                    delete txn.apar.f;
                if (!txn.apar.c)
                    delete txn.apar.c;
                if (!txn.apar.au)
                    delete txn.apar.au;
                if (!txn.apar.am)
                    delete txn.apar.am;
            }
            if (txn.grp === undefined)
                delete txn.grp;
            return txn;
        }
        if (this.type === 'axfer') {
            
            const txn = {
                aamt: this.amount,
                fee: this.fee,
                fv: this.firstRound,
                lv: this.lastRound,
                note: Buffer.from(this.note),
                snd: Buffer.from(this.from.publicKey),
                arcv: Buffer.from(this.to.publicKey),
                type: this.type,
                gen: this.genesisID,
                gh: this.genesisHash,
                lx: Buffer.from(this.lease),
                grp: this.group,
                xaid: this.assetIndex,
            };
            if (this.closeRemainderTo !== undefined)
                txn.aclose = Buffer.from(this.closeRemainderTo.publicKey);
            if (this.assetRevocationTarget !== undefined)
                txn.asnd = Buffer.from(this.assetRevocationTarget.publicKey);
            
            if (!txn.note.length)
                delete txn.note;
            if (!txn.lx.length)
                delete txn.lx;
            if (!txn.aamt)
                delete txn.aamt;
            if (!txn.amt)
                delete txn.amt;
            if (!txn.fee)
                delete txn.fee;
            if (!txn.fv)
                delete txn.fv;
            if (!txn.gen)
                delete txn.gen;
            if (txn.grp === undefined)
                delete txn.grp;
            if (!txn.aclose)
                delete txn.aclose;
            if (!txn.asnd)
                delete txn.asnd;
            if (!txn.rekey)
                delete txn.rekey;
            if (this.reKeyTo !== undefined) {
                txn.rekey = Buffer.from(this.reKeyTo.publicKey);
            }
            return txn;
        }
        if (this.type === 'afrz') {
            
            const txn = {
                fee: this.fee,
                fv: this.firstRound,
                lv: this.lastRound,
                note: Buffer.from(this.note),
                snd: Buffer.from(this.from.publicKey),
                type: this.type,
                gen: this.genesisID,
                gh: this.genesisHash,
                lx: Buffer.from(this.lease),
                grp: this.group,
                faid: this.assetIndex,
                afrz: this.freezeState,
            };
            if (this.freezeAccount !== undefined)
                txn.fadd = Buffer.from(this.freezeAccount.publicKey);
            
            if (!txn.note.length)
                delete txn.note;
            if (!txn.lx.length)
                delete txn.lx;
            if (!txn.amt)
                delete txn.amt;
            if (!txn.fee)
                delete txn.fee;
            if (!txn.fv)
                delete txn.fv;
            if (!txn.gen)
                delete txn.gen;
            if (!txn.afrz)
                delete txn.afrz;
            if (txn.grp === undefined)
                delete txn.grp;
            if (this.reKeyTo !== undefined) {
                txn.rekey = Buffer.from(this.reKeyTo.publicKey);
            }
            return txn;
        }
        if (this.type === 'appl') {
            
            const txn = {
                fee: this.fee,
                fv: this.firstRound,
                lv: this.lastRound,
                note: Buffer.from(this.note),
                snd: Buffer.from(this.from.publicKey),
                type: this.type,
                gen: this.genesisID,
                gh: this.genesisHash,
                lx: Buffer.from(this.lease),
                grp: this.group,
                apid: this.appIndex,
                apan: this.appOnComplete,
                apls: {
                    nui: this.appLocalInts,
                    nbs: this.appLocalByteSlices,
                },
                apgs: {
                    nui: this.appGlobalInts,
                    nbs: this.appGlobalByteSlices,
                },
                apfa: this.appForeignApps,
                apas: this.appForeignAssets,
                apep: this.extraPages,
            };
            if (this.reKeyTo !== undefined) {
                txn.rekey = Buffer.from(this.reKeyTo.publicKey);
            }
            if (this.appApprovalProgram !== undefined) {
                txn.apap = Buffer.from(this.appApprovalProgram);
            }
            if (this.appClearProgram !== undefined) {
                txn.apsu = Buffer.from(this.appClearProgram);
            }
            if (this.appArgs !== undefined) {
                txn.apaa = this.appArgs.map((arg) => Buffer.from(arg));
            }
            if (this.appAccounts !== undefined) {
                txn.apat = this.appAccounts.map((decodedAddress) => Buffer.from(decodedAddress.publicKey));
            }
            
            if (!txn.note.length)
                delete txn.note;
            if (!txn.lx.length)
                delete txn.lx;
            if (!txn.amt)
                delete txn.amt;
            if (!txn.fee)
                delete txn.fee;
            if (!txn.fv)
                delete txn.fv;
            if (!txn.gen)
                delete txn.gen;
            if (!txn.apid)
                delete txn.apid;
            if (!txn.apls.nui)
                delete txn.apls.nui;
            if (!txn.apls.nbs)
                delete txn.apls.nbs;
            if (!txn.apls.nui && !txn.apls.nbs)
                delete txn.apls;
            if (!txn.apgs.nui)
                delete txn.apgs.nui;
            if (!txn.apgs.nbs)
                delete txn.apgs.nbs;
            if (!txn.apaa || !txn.apaa.length)
                delete txn.apaa;
            if (!txn.apgs.nui && !txn.apgs.nbs)
                delete txn.apgs;
            if (!txn.apap)
                delete txn.apap;
            if (!txn.apsu)
                delete txn.apsu;
            if (!txn.apan)
                delete txn.apan;
            if (!txn.apfa || !txn.apfa.length)
                delete txn.apfa;
            if (!txn.apas || !txn.apas.length)
                delete txn.apas;
            if (!txn.apat || !txn.apat.length)
                delete txn.apat;
            if (!txn.apep)
                delete txn.apep;
            if (txn.grp === undefined)
                delete txn.grp;
            return txn;
        }
        return undefined;
    }
    
    static from_obj_for_encoding(txnForEnc) {
        const txn = Object.create(this.prototype);
        txn.name = 'Transaction';
        txn.tag = Buffer.from('TX');
        txn.genesisID = txnForEnc.gen;
        txn.genesisHash = Buffer.from(txnForEnc.gh);
        if (!base_1.isTransactionType(txnForEnc.type)) {
            throw new Error(`Unrecognized transaction type: ${txnForEnc.type}`);
        }
        txn.type = txnForEnc.type;
        txn.fee = txnForEnc.fee;
        txn.firstRound = txnForEnc.fv;
        txn.lastRound = txnForEnc.lv;
        txn.note = new Uint8Array(txnForEnc.note);
        txn.lease = new Uint8Array(txnForEnc.lx);
        txn.from = address.decodeAddress(address.encodeAddress(new Uint8Array(txnForEnc.snd)));
        if (txnForEnc.grp !== undefined)
            txn.group = Buffer.from(txnForEnc.grp);
        if (txnForEnc.rekey !== undefined)
            txn.reKeyTo = address.decodeAddress(address.encodeAddress(new Uint8Array(txnForEnc.rekey)));
        if (txnForEnc.type === 'pay') {
            txn.amount = txnForEnc.amt;
            txn.to = address.decodeAddress(address.encodeAddress(new Uint8Array(txnForEnc.rcv)));
            if (txnForEnc.close !== undefined)
                txn.closeRemainderTo = address.decodeAddress(address.encodeAddress(txnForEnc.close));
        }
        else if (txnForEnc.type === 'keyreg') {
            if (txnForEnc.votekey !== undefined) {
                txn.voteKey = Buffer.from(txnForEnc.votekey);
            }
            if (txnForEnc.selkey !== undefined) {
                txn.selectionKey = Buffer.from(txnForEnc.selkey);
            }
            if (txnForEnc.sprfkey !== undefined) {
                txn.stateProofKey = Buffer.from(txnForEnc.sprfkey);
            }
            if (txnForEnc.votekd !== undefined) {
                txn.voteKeyDilution = txnForEnc.votekd;
            }
            if (txnForEnc.votefst !== undefined) {
                txn.voteFirst = txnForEnc.votefst;
            }
            if (txnForEnc.votelst !== undefined) {
                txn.voteLast = txnForEnc.votelst;
            }
            if (txnForEnc.nonpart !== undefined) {
                txn.nonParticipation = txnForEnc.nonpart;
            }
        }
        else if (txnForEnc.type === 'acfg') {
            
            if (txnForEnc.caid !== undefined) {
                txn.assetIndex = txnForEnc.caid;
            }
            if (txnForEnc.apar !== undefined) {
                txn.assetTotal = txnForEnc.apar.t;
                txn.assetDefaultFrozen = txnForEnc.apar.df;
                if (txnForEnc.apar.dc !== undefined)
                    txn.assetDecimals = txnForEnc.apar.dc;
                if (txnForEnc.apar.m !== undefined)
                    txn.assetManager = address.decodeAddress(address.encodeAddress(new Uint8Array(txnForEnc.apar.m)));
                if (txnForEnc.apar.r !== undefined)
                    txn.assetReserve = address.decodeAddress(address.encodeAddress(new Uint8Array(txnForEnc.apar.r)));
                if (txnForEnc.apar.f !== undefined)
                    txn.assetFreeze = address.decodeAddress(address.encodeAddress(new Uint8Array(txnForEnc.apar.f)));
                if (txnForEnc.apar.c !== undefined)
                    txn.assetClawback = address.decodeAddress(address.encodeAddress(new Uint8Array(txnForEnc.apar.c)));
                if (txnForEnc.apar.un !== undefined)
                    txn.assetUnitName = txnForEnc.apar.un;
                if (txnForEnc.apar.an !== undefined)
                    txn.assetName = txnForEnc.apar.an;
                if (txnForEnc.apar.au !== undefined)
                    txn.assetURL = txnForEnc.apar.au;
                if (txnForEnc.apar.am !== undefined)
                    txn.assetMetadataHash = txnForEnc.apar.am;
            }
        }
        else if (txnForEnc.type === 'axfer') {
            
            if (txnForEnc.xaid !== undefined) {
                txn.assetIndex = txnForEnc.xaid;
            }
            if (txnForEnc.aamt !== undefined)
                txn.amount = txnForEnc.aamt;
            if (txnForEnc.aclose !== undefined) {
                txn.closeRemainderTo = address.decodeAddress(address.encodeAddress(new Uint8Array(txnForEnc.aclose)));
            }
            if (txnForEnc.asnd !== undefined) {
                txn.assetRevocationTarget = address.decodeAddress(address.encodeAddress(new Uint8Array(txnForEnc.asnd)));
            }
            txn.to = address.decodeAddress(address.encodeAddress(new Uint8Array(txnForEnc.arcv)));
        }
        else if (txnForEnc.type === 'afrz') {
            if (txnForEnc.afrz !== undefined) {
                txn.freezeState = txnForEnc.afrz;
            }
            if (txnForEnc.faid !== undefined) {
                txn.assetIndex = txnForEnc.faid;
            }
            txn.freezeAccount = address.decodeAddress(address.encodeAddress(new Uint8Array(txnForEnc.fadd)));
        }
        else if (txnForEnc.type === 'appl') {
            if (txnForEnc.apid !== undefined) {
                txn.appIndex = txnForEnc.apid;
            }
            if (txnForEnc.apan !== undefined) {
                txn.appOnComplete = txnForEnc.apan;
            }
            if (txnForEnc.apls !== undefined) {
                if (txnForEnc.apls.nui !== undefined)
                    txn.appLocalInts = txnForEnc.apls.nui;
                if (txnForEnc.apls.nbs !== undefined)
                    txn.appLocalByteSlices = txnForEnc.apls.nbs;
            }
            if (txnForEnc.apgs !== undefined) {
                if (txnForEnc.apgs.nui !== undefined)
                    txn.appGlobalInts = txnForEnc.apgs.nui;
                if (txnForEnc.apgs.nbs !== undefined)
                    txn.appGlobalByteSlices = txnForEnc.apgs.nbs;
            }
            if (txnForEnc.apep !== undefined) {
                txn.extraPages = txnForEnc.apep;
            }
            if (txnForEnc.apap !== undefined) {
                txn.appApprovalProgram = new Uint8Array(txnForEnc.apap);
            }
            if (txnForEnc.apsu !== undefined) {
                txn.appClearProgram = new Uint8Array(txnForEnc.apsu);
            }
            if (txnForEnc.apaa !== undefined) {
                txn.appArgs = txnForEnc.apaa.map((arg) => new Uint8Array(arg));
            }
            if (txnForEnc.apat !== undefined) {
                txn.appAccounts = txnForEnc.apat.map((addressBytes) => address.decodeAddress(address.encodeAddress(new Uint8Array(addressBytes))));
            }
            if (txnForEnc.apfa !== undefined) {
                txn.appForeignApps = txnForEnc.apfa;
            }
            if (txnForEnc.apas !== undefined) {
                txn.appForeignAssets = txnForEnc.apas;
            }
        }
        return txn;
    }
    estimateSize() {
        return this.toByte().length + NUM_ADDL_BYTES_AFTER_SIGNING;
    }
    bytesToSign() {
        const encodedMsg = this.toByte();
        return Buffer.from(utils.concatArrays(this.tag, encodedMsg));
    }
    toByte() {
        return encoding.encode(this.get_obj_for_encoding());
    }
    
    rawSignTxn(sk) {
        const toBeSigned = this.bytesToSign();
        const sig = nacl.sign(toBeSigned, sk);
        return Buffer.from(sig);
    }
    signTxn(sk) {
        
        const sTxn = {
            sig: this.rawSignTxn(sk),
            txn: this.get_obj_for_encoding(),
        };
        
        const keypair = nacl.keyPairFromSecretKey(sk);
        const pubKeyFromSk = keypair.publicKey;
        if (address.encodeAddress(pubKeyFromSk) !==
            address.encodeAddress(this.from.publicKey)) {
            sTxn.sgnr = Buffer.from(pubKeyFromSk);
        }
        return new Uint8Array(encoding.encode(sTxn));
    }
    rawTxID() {
        const enMsg = this.toByte();
        const gh = Buffer.from(utils.concatArrays(this.tag, enMsg));
        return Buffer.from(nacl.genericHash(gh));
    }
    txID() {
        const hash = this.rawTxID();
        return hi_base32_1.default.encode(hash).slice(0, ALGORAND_TRANSACTION_LENGTH);
    }
    
    
    addLease(lease, feePerByte = 0) {
        let mutableLease;
        if (lease !== undefined) {
            if (lease.constructor !== Uint8Array)
                throw Error('lease must be a Uint8Array.');
            if (lease.length !== ALGORAND_TRANSACTION_LEASE_LENGTH)
                throw Error(`lease must be of length ${ALGORAND_TRANSACTION_LEASE_LENGTH.toString()}.`);
            mutableLease = new Uint8Array(lease);
        }
        else {
            mutableLease = new Uint8Array(0);
        }
        this.lease = mutableLease;
        if (feePerByte !== 0) {
            this.fee +=
                (ALGORAND_TRANSACTION_LEASE_LABEL_LENGTH +
                    ALGORAND_TRANSACTION_LEASE_LENGTH) *
                    feePerByte;
        }
    }
    
    
    addRekey(reKeyTo, feePerByte = 0) {
        if (reKeyTo !== undefined) {
            this.reKeyTo = address.decodeAddress(reKeyTo);
        }
        if (feePerByte !== 0) {
            this.fee +=
                (ALGORAND_TRANSACTION_REKEY_LABEL_LENGTH +
                    ALGORAND_TRANSACTION_ADDRESS_LENGTH) *
                    feePerByte;
        }
    }
    
    
    _getDictForDisplay() {
        const forPrinting = {
            ...this,
        };
        forPrinting.tag = forPrinting.tag.toString();
        forPrinting.from = address.encodeAddress(forPrinting.from.publicKey);
        if (forPrinting.to !== undefined)
            forPrinting.to = address.encodeAddress(forPrinting.to.publicKey);
        
        if (forPrinting.freezeAccount !== undefined)
            forPrinting.freezeAccount = address.encodeAddress(forPrinting.freezeAccount.publicKey);
        if (forPrinting.closeRemainderTo !== undefined)
            forPrinting.closeRemainderTo = address.encodeAddress(forPrinting.closeRemainderTo.publicKey);
        if (forPrinting.assetManager !== undefined)
            forPrinting.assetManager = address.encodeAddress(forPrinting.assetManager.publicKey);
        if (forPrinting.assetReserve !== undefined)
            forPrinting.assetReserve = address.encodeAddress(forPrinting.assetReserve.publicKey);
        if (forPrinting.assetFreeze !== undefined)
            forPrinting.assetFreeze = address.encodeAddress(forPrinting.assetFreeze.publicKey);
        if (forPrinting.assetClawback !== undefined)
            forPrinting.assetClawback = address.encodeAddress(forPrinting.assetClawback.publicKey);
        if (forPrinting.assetRevocationTarget !== undefined)
            forPrinting.assetRevocationTarget = address.encodeAddress(forPrinting.assetRevocationTarget.publicKey);
        if (forPrinting.reKeyTo !== undefined)
            forPrinting.reKeyTo = address.encodeAddress(forPrinting.reKeyTo.publicKey);
        forPrinting.genesisHash = forPrinting.genesisHash.toString('base64');
        return forPrinting;
    }
    
    prettyPrint() {
        
        console.log(this._getDictForDisplay());
    }
    
    toString() {
        
        return JSON.stringify(this._getDictForDisplay());
    }
}
exports.Transaction = Transaction;
function encodeUnsignedTransaction(transactionObject) {
    const objToEncode = transactionObject.get_obj_for_encoding();
    return encoding.encode(objToEncode);
}
exports.encodeUnsignedTransaction = encodeUnsignedTransaction;
function decodeUnsignedTransaction(transactionBuffer) {
    const partlyDecodedObject = encoding.decode(transactionBuffer);
    return Transaction.from_obj_for_encoding(partlyDecodedObject);
}
exports.decodeUnsignedTransaction = decodeUnsignedTransaction;
function decodeSignedTransaction(transactionBuffer) {
    const stxnDecoded = encoding.decode(transactionBuffer);
    const stxn = {
        ...stxnDecoded,
        txn: Transaction.from_obj_for_encoding(stxnDecoded.txn),
    };
    return stxn;
}
exports.decodeSignedTransaction = decodeSignedTransaction;
function instantiateTxnIfNeeded(transactionLike) {
    return transactionLike instanceof Transaction
        ? transactionLike
        : new Transaction(transactionLike);
}
exports.instantiateTxnIfNeeded = instantiateTxnIfNeeded;
exports.default = Transaction;

}).call(this)}).call(this,require("buffer").Buffer)
},{"./encoding/address":58,"./encoding/encoding":60,"./nacl/naclWrappers":78,"./types/transactions/base":85,"./utils/utils":88,"buffer":95,"hi-base32":106}],81:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],82:[function(require,module,exports){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./transactions"), exports);
__exportStar(require("./multisig"), exports);
__exportStar(require("./address"), exports);

},{"./address":81,"./multisig":84,"./transactions":87}],83:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IntDecoding;
(function (IntDecoding) {
        IntDecoding["DEFAULT"] = "default";
        IntDecoding["SAFE"] = "safe";
        IntDecoding["MIXED"] = "mixed";
        IntDecoding["BIGINT"] = "bigint";
})(IntDecoding || (IntDecoding = {}));
exports.default = IntDecoding;

},{}],84:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],85:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnApplicationComplete = exports.isTransactionType = exports.TransactionType = void 0;
var TransactionType;
(function (TransactionType) {
        TransactionType["pay"] = "pay";
        TransactionType["keyreg"] = "keyreg";
        TransactionType["acfg"] = "acfg";
        TransactionType["axfer"] = "axfer";
        TransactionType["afrz"] = "afrz";
        TransactionType["appl"] = "appl";
})(TransactionType = exports.TransactionType || (exports.TransactionType = {}));
function isTransactionType(s) {
    return (s === TransactionType.pay ||
        s === TransactionType.keyreg ||
        s === TransactionType.acfg ||
        s === TransactionType.axfer ||
        s === TransactionType.afrz ||
        s === TransactionType.appl);
}
exports.isTransactionType = isTransactionType;
var OnApplicationComplete;
(function (OnApplicationComplete) {
        OnApplicationComplete[OnApplicationComplete["NoOpOC"] = 0] = "NoOpOC";
        OnApplicationComplete[OnApplicationComplete["OptInOC"] = 1] = "OptInOC";
        OnApplicationComplete[OnApplicationComplete["CloseOutOC"] = 2] = "CloseOutOC";
        OnApplicationComplete[OnApplicationComplete["ClearStateOC"] = 3] = "ClearStateOC";
        OnApplicationComplete[OnApplicationComplete["UpdateApplicationOC"] = 4] = "UpdateApplicationOC";
        OnApplicationComplete[OnApplicationComplete["DeleteApplicationOC"] = 5] = "DeleteApplicationOC";
})(OnApplicationComplete = exports.OnApplicationComplete || (exports.OnApplicationComplete = {}));

},{}],86:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],87:[function(require,module,exports){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionType = void 0;

var base_1 = require("./base");
Object.defineProperty(exports, "TransactionType", { enumerable: true, get: function () { return base_1.TransactionType; } });
__exportStar(require("./encoded"), exports);

},{"./base":85,"./encoded":86}],88:[function(require,module,exports){
(function (process){(function (){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNode = exports.removeUndefinedProperties = exports.concatArrays = exports.arrayEqual = exports.parseJSON = void 0;
const json_bigint_1 = __importDefault(require("json-bigint"));
const intDecoding_1 = __importDefault(require("../types/intDecoding"));
const JSONbig = json_bigint_1.default({ useNativeBigInt: true, strict: true });
function parseJSON(str, options) {
    const intDecoding = options && options.intDecoding ? options.intDecoding : intDecoding_1.default.DEFAULT;
    const parsed = JSONbig.parse(str, (_, value) => {
        if (value != null &&
            typeof value === 'object' &&
            Object.getPrototypeOf(value) == null) {
            
            
            Object.setPrototypeOf(value, Object.prototype);
        }
        if (typeof value === 'bigint') {
            if (intDecoding === 'bigint' ||
                (intDecoding === 'mixed' && value > Number.MAX_SAFE_INTEGER)) {
                return value;
            }
            
            
            if (intDecoding === 'default' || intDecoding === 'mixed') {
                return Number(value);
            }
            throw new Error(`Integer exceeds maximum safe integer: ${value.toString()}. Try parsing with a different intDecoding option.`);
        }
        if (typeof value === 'number') {
            if (intDecoding === 'bigint' && Number.isInteger(value)) {
                return BigInt(value);
            }
        }
        return value;
    });
    return parsed;
}
exports.parseJSON = parseJSON;
function arrayEqual(a, b) {
    if (a.length !== b.length) {
        return false;
    }
    return Array.from(a).every((val, i) => val === b[i]);
}
exports.arrayEqual = arrayEqual;
function concatArrays(...arrs) {
    const size = arrs.reduce((sum, arr) => sum + arr.length, 0);
    const c = new Uint8Array(size);
    let offset = 0;
    for (let i = 0; i < arrs.length; i++) {
        c.set(arrs[i], offset);
        offset += arrs[i].length;
    }
    return c;
}
exports.concatArrays = concatArrays;
function removeUndefinedProperties(obj) {
    const mutableCopy = { ...obj };
    Object.keys(mutableCopy).forEach((key) => {
        if (typeof mutableCopy[key] === 'undefined')
            delete mutableCopy[key];
    });
    return mutableCopy;
}
exports.removeUndefinedProperties = removeUndefinedProperties;
function isNode() {
    return (typeof process === 'object' &&
        typeof process.versions === 'object' &&
        typeof process.versions.node !== 'undefined');
}
exports.isNode = isNode;

}).call(this)}).call(this,require('_process'))
},{"../types/intDecoding":83,"_process":115,"json-bigint":110}],89:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitForConfirmation = void 0;
async function waitForConfirmation(client, txid, waitRounds) {
    
    
    const status = await client.status().do();
    if (typeof status === 'undefined') {
        throw new Error('Unable to get node status');
    }
    const startRound = status['last-round'] + 1;
    let currentRound = startRound;
        while (currentRound < startRound + waitRounds) {
        let poolError = false;
        try {
            const pendingInfo = await client.pendingTransactionInformation(txid).do();
            if (pendingInfo['confirmed-round']) {
                
                return pendingInfo;
            }
            if (pendingInfo['pool-error']) {
                
                poolError = true;
                throw new Error(`Transaction Rejected: ${pendingInfo['pool-error']}`);
            }
        }
        catch (err) {
            
            
            
            if (poolError) {
                
                throw err;
            }
        }
        await client.statusAfterBlock(currentRound).do();
        currentRound += 1;
    }
        throw new Error(`Transaction not confirmed after ${waitRounds} rounds`);
}
exports.waitForConfirmation = waitForConfirmation;

},{}],90:[function(require,module,exports){
(function (process,global){(function (){
(function () {
  'use strict';

  var INPUT_ERROR = 'input is invalid type';
  var FINALIZE_ERROR = 'finalize already called';
  var WINDOW = typeof window === 'object';
  var root = WINDOW ? window : {};
  if (root.JS_SHA3_NO_WINDOW) {
    WINDOW = false;
  }
  var WEB_WORKER = !WINDOW && typeof self === 'object';
  var NODE_JS = !root.JS_SHA3_NO_NODE_JS && typeof process === 'object' && process.versions && process.versions.node;
  if (NODE_JS) {
    root = global;
  } else if (WEB_WORKER) {
    root = self;
  }
  var COMMON_JS = !root.JS_SHA3_NO_COMMON_JS && typeof module === 'object' && module.exports;
  var AMD = typeof define === 'function' && define.amd;
  var ARRAY_BUFFER = !root.JS_SHA3_NO_ARRAY_BUFFER && typeof ArrayBuffer !== 'undefined';
  var HEX_CHARS = '0123456789abcdef'.split('');
  var SHAKE_PADDING = [31, 7936, 2031616, 520093696];
  var CSHAKE_PADDING = [4, 1024, 262144, 67108864];
  var KECCAK_PADDING = [1, 256, 65536, 16777216];
  var PADDING = [6, 1536, 393216, 100663296];
  var SHIFT = [0, 8, 16, 24];
  var RC = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649,
    0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0,
    2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771,
    2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648,
    2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648];
  var BITS = [224, 256, 384, 512];
  var SHAKE_BITS = [128, 256];
  var OUTPUT_TYPES = ['hex', 'buffer', 'arrayBuffer', 'array', 'digest'];
  var CSHAKE_BYTEPAD = {
    '128': 168,
    '256': 136
  };

  if (root.JS_SHA3_NO_NODE_JS || !Array.isArray) {
    Array.isArray = function (obj) {
      return Object.prototype.toString.call(obj) === '[object Array]';
    };
  }

  if (ARRAY_BUFFER && (root.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView)) {
    ArrayBuffer.isView = function (obj) {
      return typeof obj === 'object' && obj.buffer && obj.buffer.constructor === ArrayBuffer;
    };
  }

  var createOutputMethod = function (bits, padding, outputType) {
    return function (message) {
      return new Keccak(bits, padding, bits).update(message)[outputType]();
    };
  };

  var createShakeOutputMethod = function (bits, padding, outputType) {
    return function (message, outputBits) {
      return new Keccak(bits, padding, outputBits).update(message)[outputType]();
    };
  };

  var createCshakeOutputMethod = function (bits, padding, outputType) {
    return function (message, outputBits, n, s) {
      return methods['cshake' + bits].update(message, outputBits, n, s)[outputType]();
    };
  };

  var createKmacOutputMethod = function (bits, padding, outputType) {
    return function (key, message, outputBits, s) {
      return methods['kmac' + bits].update(key, message, outputBits, s)[outputType]();
    };
  };

  var createOutputMethods = function (method, createMethod, bits, padding) {
    for (var i = 0; i < OUTPUT_TYPES.length; ++i) {
      var type = OUTPUT_TYPES[i];
      method[type] = createMethod(bits, padding, type);
    }
    return method;
  };

  var createMethod = function (bits, padding) {
    var method = createOutputMethod(bits, padding, 'hex');
    method.create = function () {
      return new Keccak(bits, padding, bits);
    };
    method.update = function (message) {
      return method.create().update(message);
    };
    return createOutputMethods(method, createOutputMethod, bits, padding);
  };

  var createShakeMethod = function (bits, padding) {
    var method = createShakeOutputMethod(bits, padding, 'hex');
    method.create = function (outputBits) {
      return new Keccak(bits, padding, outputBits);
    };
    method.update = function (message, outputBits) {
      return method.create(outputBits).update(message);
    };
    return createOutputMethods(method, createShakeOutputMethod, bits, padding);
  };

  var createCshakeMethod = function (bits, padding) {
    var w = CSHAKE_BYTEPAD[bits];
    var method = createCshakeOutputMethod(bits, padding, 'hex');
    method.create = function (outputBits, n, s) {
      if (!n && !s) {
        return methods['shake' + bits].create(outputBits);
      } else {
        return new Keccak(bits, padding, outputBits).bytepad([n, s], w);
      }
    };
    method.update = function (message, outputBits, n, s) {
      return method.create(outputBits, n, s).update(message);
    };
    return createOutputMethods(method, createCshakeOutputMethod, bits, padding);
  };

  var createKmacMethod = function (bits, padding) {
    var w = CSHAKE_BYTEPAD[bits];
    var method = createKmacOutputMethod(bits, padding, 'hex');
    method.create = function (key, outputBits, s) {
      return new Kmac(bits, padding, outputBits).bytepad(['KMAC', s], w).bytepad([key], w);
    };
    method.update = function (key, message, outputBits, s) {
      return method.create(key, outputBits, s).update(message);
    };
    return createOutputMethods(method, createKmacOutputMethod, bits, padding);
  };

  var algorithms = [
    { name: 'keccak', padding: KECCAK_PADDING, bits: BITS, createMethod: createMethod },
    { name: 'sha3', padding: PADDING, bits: BITS, createMethod: createMethod },
    { name: 'shake', padding: SHAKE_PADDING, bits: SHAKE_BITS, createMethod: createShakeMethod },
    { name: 'cshake', padding: CSHAKE_PADDING, bits: SHAKE_BITS, createMethod: createCshakeMethod },
    { name: 'kmac', padding: CSHAKE_PADDING, bits: SHAKE_BITS, createMethod: createKmacMethod }
  ];

  var methods = {}, methodNames = [];

  for (var i = 0; i < algorithms.length; ++i) {
    var algorithm = algorithms[i];
    var bits = algorithm.bits;
    for (var j = 0; j < bits.length; ++j) {
      var methodName = algorithm.name + '_' + bits[j];
      methodNames.push(methodName);
      methods[methodName] = algorithm.createMethod(bits[j], algorithm.padding);
      if (algorithm.name !== 'sha3') {
        var newMethodName = algorithm.name + bits[j];
        methodNames.push(newMethodName);
        methods[newMethodName] = methods[methodName];
      }
    }
  }

  function Keccak(bits, padding, outputBits) {
    this.blocks = [];
    this.s = [];
    this.padding = padding;
    this.outputBits = outputBits;
    this.reset = true;
    this.finalized = false;
    this.block = 0;
    this.start = 0;
    this.blockCount = (1600 - (bits << 1)) >> 5;
    this.byteCount = this.blockCount << 2;
    this.outputBlocks = outputBits >> 5;
    this.extraBytes = (outputBits & 31) >> 3;

    for (var i = 0; i < 50; ++i) {
      this.s[i] = 0;
    }
  }

  Keccak.prototype.update = function (message) {
    if (this.finalized) {
      throw new Error(FINALIZE_ERROR);
    }
    var notString, type = typeof message;
    if (type !== 'string') {
      if (type === 'object') {
        if (message === null) {
          throw new Error(INPUT_ERROR);
        } else if (ARRAY_BUFFER && message.constructor === ArrayBuffer) {
          message = new Uint8Array(message);
        } else if (!Array.isArray(message)) {
          if (!ARRAY_BUFFER || !ArrayBuffer.isView(message)) {
            throw new Error(INPUT_ERROR);
          }
        }
      } else {
        throw new Error(INPUT_ERROR);
      }
      notString = true;
    }
    var blocks = this.blocks, byteCount = this.byteCount, length = message.length,
      blockCount = this.blockCount, index = 0, s = this.s, i, code;

    while (index < length) {
      if (this.reset) {
        this.reset = false;
        blocks[0] = this.block;
        for (i = 1; i < blockCount + 1; ++i) {
          blocks[i] = 0;
        }
      }
      if (notString) {
        for (i = this.start; index < length && i < byteCount; ++index) {
          blocks[i >> 2] |= message[index] << SHIFT[i++ & 3];
        }
      } else {
        for (i = this.start; index < length && i < byteCount; ++index) {
          code = message.charCodeAt(index);
          if (code < 0x80) {
            blocks[i >> 2] |= code << SHIFT[i++ & 3];
          } else if (code < 0x800) {
            blocks[i >> 2] |= (0xc0 | (code >> 6)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];
          } else if (code < 0xd800 || code >= 0xe000) {
            blocks[i >> 2] |= (0xe0 | (code >> 12)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | ((code >> 6) & 0x3f)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];
          } else {
            code = 0x10000 + (((code & 0x3ff) << 10) | (message.charCodeAt(++index) & 0x3ff));
            blocks[i >> 2] |= (0xf0 | (code >> 18)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | ((code >> 12) & 0x3f)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | ((code >> 6) & 0x3f)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];
          }
        }
      }
      this.lastByteIndex = i;
      if (i >= byteCount) {
        this.start = i - byteCount;
        this.block = blocks[blockCount];
        for (i = 0; i < blockCount; ++i) {
          s[i] ^= blocks[i];
        }
        f(s);
        this.reset = true;
      } else {
        this.start = i;
      }
    }
    return this;
  };

  Keccak.prototype.encode = function (x, right) {
    var o = x & 255, n = 1;
    var bytes = [o];
    x = x >> 8;
    o = x & 255;
    while (o > 0) {
      bytes.unshift(o);
      x = x >> 8;
      o = x & 255;
      ++n;
    }
    if (right) {
      bytes.push(n);
    } else {
      bytes.unshift(n);
    }
    this.update(bytes);
    return bytes.length;
  };

  Keccak.prototype.encodeString = function (str) {
    var notString, type = typeof str;
    if (type !== 'string') {
      if (type === 'object') {
        if (str === null) {
          throw new Error(INPUT_ERROR);
        } else if (ARRAY_BUFFER && str.constructor === ArrayBuffer) {
          str = new Uint8Array(str);
        } else if (!Array.isArray(str)) {
          if (!ARRAY_BUFFER || !ArrayBuffer.isView(str)) {
            throw new Error(INPUT_ERROR);
          }
        }
      } else {
        throw new Error(INPUT_ERROR);
      }
      notString = true;
    }
    var bytes = 0, length = str.length;
    if (notString) {
      bytes = length;
    } else {
      for (var i = 0; i < str.length; ++i) {
        var code = str.charCodeAt(i);
        if (code < 0x80) {
          bytes += 1;
        } else if (code < 0x800) {
          bytes += 2;
        } else if (code < 0xd800 || code >= 0xe000) {
          bytes += 3;
        } else {
          code = 0x10000 + (((code & 0x3ff) << 10) | (str.charCodeAt(++i) & 0x3ff));
          bytes += 4;
        }
      }
    }
    bytes += this.encode(bytes * 8);
    this.update(str);
    return bytes;
  };

  Keccak.prototype.bytepad = function (strs, w) {
    var bytes = this.encode(w);
    for (var i = 0; i < strs.length; ++i) {
      bytes += this.encodeString(strs[i]);
    }
    var paddingBytes = w - bytes % w;
    var zeros = [];
    zeros.length = paddingBytes;
    this.update(zeros);
    return this;
  };

  Keccak.prototype.finalize = function () {
    if (this.finalized) {
      return;
    }
    this.finalized = true;
    var blocks = this.blocks, i = this.lastByteIndex, blockCount = this.blockCount, s = this.s;
    blocks[i >> 2] |= this.padding[i & 3];
    if (this.lastByteIndex === this.byteCount) {
      blocks[0] = blocks[blockCount];
      for (i = 1; i < blockCount + 1; ++i) {
        blocks[i] = 0;
      }
    }
    blocks[blockCount - 1] |= 0x80000000;
    for (i = 0; i < blockCount; ++i) {
      s[i] ^= blocks[i];
    }
    f(s);
  };

  Keccak.prototype.toString = Keccak.prototype.hex = function () {
    this.finalize();

    var blockCount = this.blockCount, s = this.s, outputBlocks = this.outputBlocks,
      extraBytes = this.extraBytes, i = 0, j = 0;
    var hex = '', block;
    while (j < outputBlocks) {
      for (i = 0; i < blockCount && j < outputBlocks; ++i, ++j) {
        block = s[i];
        hex += HEX_CHARS[(block >> 4) & 0x0F] + HEX_CHARS[block & 0x0F] +
          HEX_CHARS[(block >> 12) & 0x0F] + HEX_CHARS[(block >> 8) & 0x0F] +
          HEX_CHARS[(block >> 20) & 0x0F] + HEX_CHARS[(block >> 16) & 0x0F] +
          HEX_CHARS[(block >> 28) & 0x0F] + HEX_CHARS[(block >> 24) & 0x0F];
      }
      if (j % blockCount === 0) {
        f(s);
        i = 0;
      }
    }
    if (extraBytes) {
      block = s[i];
      hex += HEX_CHARS[(block >> 4) & 0x0F] + HEX_CHARS[block & 0x0F];
      if (extraBytes > 1) {
        hex += HEX_CHARS[(block >> 12) & 0x0F] + HEX_CHARS[(block >> 8) & 0x0F];
      }
      if (extraBytes > 2) {
        hex += HEX_CHARS[(block >> 20) & 0x0F] + HEX_CHARS[(block >> 16) & 0x0F];
      }
    }
    return hex;
  };

  Keccak.prototype.arrayBuffer = function () {
    this.finalize();

    var blockCount = this.blockCount, s = this.s, outputBlocks = this.outputBlocks,
      extraBytes = this.extraBytes, i = 0, j = 0;
    var bytes = this.outputBits >> 3;
    var buffer;
    if (extraBytes) {
      buffer = new ArrayBuffer((outputBlocks + 1) << 2);
    } else {
      buffer = new ArrayBuffer(bytes);
    }
    var array = new Uint32Array(buffer);
    while (j < outputBlocks) {
      for (i = 0; i < blockCount && j < outputBlocks; ++i, ++j) {
        array[j] = s[i];
      }
      if (j % blockCount === 0) {
        f(s);
      }
    }
    if (extraBytes) {
      array[i] = s[i];
      buffer = buffer.slice(0, bytes);
    }
    return buffer;
  };

  Keccak.prototype.buffer = Keccak.prototype.arrayBuffer;

  Keccak.prototype.digest = Keccak.prototype.array = function () {
    this.finalize();

    var blockCount = this.blockCount, s = this.s, outputBlocks = this.outputBlocks,
      extraBytes = this.extraBytes, i = 0, j = 0;
    var array = [], offset, block;
    while (j < outputBlocks) {
      for (i = 0; i < blockCount && j < outputBlocks; ++i, ++j) {
        offset = j << 2;
        block = s[i];
        array[offset] = block & 0xFF;
        array[offset + 1] = (block >> 8) & 0xFF;
        array[offset + 2] = (block >> 16) & 0xFF;
        array[offset + 3] = (block >> 24) & 0xFF;
      }
      if (j % blockCount === 0) {
        f(s);
      }
    }
    if (extraBytes) {
      offset = j << 2;
      block = s[i];
      array[offset] = block & 0xFF;
      if (extraBytes > 1) {
        array[offset + 1] = (block >> 8) & 0xFF;
      }
      if (extraBytes > 2) {
        array[offset + 2] = (block >> 16) & 0xFF;
      }
    }
    return array;
  };

  function Kmac(bits, padding, outputBits) {
    Keccak.call(this, bits, padding, outputBits);
  }

  Kmac.prototype = new Keccak();

  Kmac.prototype.finalize = function () {
    this.encode(this.outputBits, true);
    return Keccak.prototype.finalize.call(this);
  };

  var f = function (s) {
    var h, l, n, c0, c1, c2, c3, c4, c5, c6, c7, c8, c9,
      b0, b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14, b15, b16, b17,
      b18, b19, b20, b21, b22, b23, b24, b25, b26, b27, b28, b29, b30, b31, b32, b33,
      b34, b35, b36, b37, b38, b39, b40, b41, b42, b43, b44, b45, b46, b47, b48, b49;
    for (n = 0; n < 48; n += 2) {
      c0 = s[0] ^ s[10] ^ s[20] ^ s[30] ^ s[40];
      c1 = s[1] ^ s[11] ^ s[21] ^ s[31] ^ s[41];
      c2 = s[2] ^ s[12] ^ s[22] ^ s[32] ^ s[42];
      c3 = s[3] ^ s[13] ^ s[23] ^ s[33] ^ s[43];
      c4 = s[4] ^ s[14] ^ s[24] ^ s[34] ^ s[44];
      c5 = s[5] ^ s[15] ^ s[25] ^ s[35] ^ s[45];
      c6 = s[6] ^ s[16] ^ s[26] ^ s[36] ^ s[46];
      c7 = s[7] ^ s[17] ^ s[27] ^ s[37] ^ s[47];
      c8 = s[8] ^ s[18] ^ s[28] ^ s[38] ^ s[48];
      c9 = s[9] ^ s[19] ^ s[29] ^ s[39] ^ s[49];

      h = c8 ^ ((c2 << 1) | (c3 >>> 31));
      l = c9 ^ ((c3 << 1) | (c2 >>> 31));
      s[0] ^= h;
      s[1] ^= l;
      s[10] ^= h;
      s[11] ^= l;
      s[20] ^= h;
      s[21] ^= l;
      s[30] ^= h;
      s[31] ^= l;
      s[40] ^= h;
      s[41] ^= l;
      h = c0 ^ ((c4 << 1) | (c5 >>> 31));
      l = c1 ^ ((c5 << 1) | (c4 >>> 31));
      s[2] ^= h;
      s[3] ^= l;
      s[12] ^= h;
      s[13] ^= l;
      s[22] ^= h;
      s[23] ^= l;
      s[32] ^= h;
      s[33] ^= l;
      s[42] ^= h;
      s[43] ^= l;
      h = c2 ^ ((c6 << 1) | (c7 >>> 31));
      l = c3 ^ ((c7 << 1) | (c6 >>> 31));
      s[4] ^= h;
      s[5] ^= l;
      s[14] ^= h;
      s[15] ^= l;
      s[24] ^= h;
      s[25] ^= l;
      s[34] ^= h;
      s[35] ^= l;
      s[44] ^= h;
      s[45] ^= l;
      h = c4 ^ ((c8 << 1) | (c9 >>> 31));
      l = c5 ^ ((c9 << 1) | (c8 >>> 31));
      s[6] ^= h;
      s[7] ^= l;
      s[16] ^= h;
      s[17] ^= l;
      s[26] ^= h;
      s[27] ^= l;
      s[36] ^= h;
      s[37] ^= l;
      s[46] ^= h;
      s[47] ^= l;
      h = c6 ^ ((c0 << 1) | (c1 >>> 31));
      l = c7 ^ ((c1 << 1) | (c0 >>> 31));
      s[8] ^= h;
      s[9] ^= l;
      s[18] ^= h;
      s[19] ^= l;
      s[28] ^= h;
      s[29] ^= l;
      s[38] ^= h;
      s[39] ^= l;
      s[48] ^= h;
      s[49] ^= l;

      b0 = s[0];
      b1 = s[1];
      b32 = (s[11] << 4) | (s[10] >>> 28);
      b33 = (s[10] << 4) | (s[11] >>> 28);
      b14 = (s[20] << 3) | (s[21] >>> 29);
      b15 = (s[21] << 3) | (s[20] >>> 29);
      b46 = (s[31] << 9) | (s[30] >>> 23);
      b47 = (s[30] << 9) | (s[31] >>> 23);
      b28 = (s[40] << 18) | (s[41] >>> 14);
      b29 = (s[41] << 18) | (s[40] >>> 14);
      b20 = (s[2] << 1) | (s[3] >>> 31);
      b21 = (s[3] << 1) | (s[2] >>> 31);
      b2 = (s[13] << 12) | (s[12] >>> 20);
      b3 = (s[12] << 12) | (s[13] >>> 20);
      b34 = (s[22] << 10) | (s[23] >>> 22);
      b35 = (s[23] << 10) | (s[22] >>> 22);
      b16 = (s[33] << 13) | (s[32] >>> 19);
      b17 = (s[32] << 13) | (s[33] >>> 19);
      b48 = (s[42] << 2) | (s[43] >>> 30);
      b49 = (s[43] << 2) | (s[42] >>> 30);
      b40 = (s[5] << 30) | (s[4] >>> 2);
      b41 = (s[4] << 30) | (s[5] >>> 2);
      b22 = (s[14] << 6) | (s[15] >>> 26);
      b23 = (s[15] << 6) | (s[14] >>> 26);
      b4 = (s[25] << 11) | (s[24] >>> 21);
      b5 = (s[24] << 11) | (s[25] >>> 21);
      b36 = (s[34] << 15) | (s[35] >>> 17);
      b37 = (s[35] << 15) | (s[34] >>> 17);
      b18 = (s[45] << 29) | (s[44] >>> 3);
      b19 = (s[44] << 29) | (s[45] >>> 3);
      b10 = (s[6] << 28) | (s[7] >>> 4);
      b11 = (s[7] << 28) | (s[6] >>> 4);
      b42 = (s[17] << 23) | (s[16] >>> 9);
      b43 = (s[16] << 23) | (s[17] >>> 9);
      b24 = (s[26] << 25) | (s[27] >>> 7);
      b25 = (s[27] << 25) | (s[26] >>> 7);
      b6 = (s[36] << 21) | (s[37] >>> 11);
      b7 = (s[37] << 21) | (s[36] >>> 11);
      b38 = (s[47] << 24) | (s[46] >>> 8);
      b39 = (s[46] << 24) | (s[47] >>> 8);
      b30 = (s[8] << 27) | (s[9] >>> 5);
      b31 = (s[9] << 27) | (s[8] >>> 5);
      b12 = (s[18] << 20) | (s[19] >>> 12);
      b13 = (s[19] << 20) | (s[18] >>> 12);
      b44 = (s[29] << 7) | (s[28] >>> 25);
      b45 = (s[28] << 7) | (s[29] >>> 25);
      b26 = (s[38] << 8) | (s[39] >>> 24);
      b27 = (s[39] << 8) | (s[38] >>> 24);
      b8 = (s[48] << 14) | (s[49] >>> 18);
      b9 = (s[49] << 14) | (s[48] >>> 18);

      s[0] = b0 ^ (~b2 & b4);
      s[1] = b1 ^ (~b3 & b5);
      s[10] = b10 ^ (~b12 & b14);
      s[11] = b11 ^ (~b13 & b15);
      s[20] = b20 ^ (~b22 & b24);
      s[21] = b21 ^ (~b23 & b25);
      s[30] = b30 ^ (~b32 & b34);
      s[31] = b31 ^ (~b33 & b35);
      s[40] = b40 ^ (~b42 & b44);
      s[41] = b41 ^ (~b43 & b45);
      s[2] = b2 ^ (~b4 & b6);
      s[3] = b3 ^ (~b5 & b7);
      s[12] = b12 ^ (~b14 & b16);
      s[13] = b13 ^ (~b15 & b17);
      s[22] = b22 ^ (~b24 & b26);
      s[23] = b23 ^ (~b25 & b27);
      s[32] = b32 ^ (~b34 & b36);
      s[33] = b33 ^ (~b35 & b37);
      s[42] = b42 ^ (~b44 & b46);
      s[43] = b43 ^ (~b45 & b47);
      s[4] = b4 ^ (~b6 & b8);
      s[5] = b5 ^ (~b7 & b9);
      s[14] = b14 ^ (~b16 & b18);
      s[15] = b15 ^ (~b17 & b19);
      s[24] = b24 ^ (~b26 & b28);
      s[25] = b25 ^ (~b27 & b29);
      s[34] = b34 ^ (~b36 & b38);
      s[35] = b35 ^ (~b37 & b39);
      s[44] = b44 ^ (~b46 & b48);
      s[45] = b45 ^ (~b47 & b49);
      s[6] = b6 ^ (~b8 & b0);
      s[7] = b7 ^ (~b9 & b1);
      s[16] = b16 ^ (~b18 & b10);
      s[17] = b17 ^ (~b19 & b11);
      s[26] = b26 ^ (~b28 & b20);
      s[27] = b27 ^ (~b29 & b21);
      s[36] = b36 ^ (~b38 & b30);
      s[37] = b37 ^ (~b39 & b31);
      s[46] = b46 ^ (~b48 & b40);
      s[47] = b47 ^ (~b49 & b41);
      s[8] = b8 ^ (~b0 & b2);
      s[9] = b9 ^ (~b1 & b3);
      s[18] = b18 ^ (~b10 & b12);
      s[19] = b19 ^ (~b11 & b13);
      s[28] = b28 ^ (~b20 & b22);
      s[29] = b29 ^ (~b21 & b23);
      s[38] = b38 ^ (~b30 & b32);
      s[39] = b39 ^ (~b31 & b33);
      s[48] = b48 ^ (~b40 & b42);
      s[49] = b49 ^ (~b41 & b43);

      s[0] ^= RC[n];
      s[1] ^= RC[n + 1];
    }
  };

  if (COMMON_JS) {
    module.exports = methods;
  } else {
    for (i = 0; i < methodNames.length; ++i) {
      root[methodNames[i]] = methods[methodNames[i]];
    }
    if (AMD) {
      define(function () {
        return methods;
      });
    }
  }
})();

}).call(this)}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"_process":115}],91:[function(require,module,exports){
(function(nacl) {
'use strict';







var gf = function(init) {
  var i, r = new Float64Array(16);
  if (init) for (i = 0; i < init.length; i++) r[i] = init[i];
  return r;
};


var randombytes = function() { throw new Error('no PRNG'); };

var _0 = new Uint8Array(16);
var _9 = new Uint8Array(32); _9[0] = 9;

var gf0 = gf(),
    gf1 = gf([1]),
    _121665 = gf([0xdb41, 1]),
    D = gf([0x78a3, 0x1359, 0x4dca, 0x75eb, 0xd8ab, 0x4141, 0x0a4d, 0x0070, 0xe898, 0x7779, 0x4079, 0x8cc7, 0xfe73, 0x2b6f, 0x6cee, 0x5203]),
    D2 = gf([0xf159, 0x26b2, 0x9b94, 0xebd6, 0xb156, 0x8283, 0x149a, 0x00e0, 0xd130, 0xeef3, 0x80f2, 0x198e, 0xfce7, 0x56df, 0xd9dc, 0x2406]),
    X = gf([0xd51a, 0x8f25, 0x2d60, 0xc956, 0xa7b2, 0x9525, 0xc760, 0x692c, 0xdc5c, 0xfdd6, 0xe231, 0xc0a4, 0x53fe, 0xcd6e, 0x36d3, 0x2169]),
    Y = gf([0x6658, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666]),
    I = gf([0xa0b0, 0x4a0e, 0x1b27, 0xc4ee, 0xe478, 0xad2f, 0x1806, 0x2f43, 0xd7a7, 0x3dfb, 0x0099, 0x2b4d, 0xdf0b, 0x4fc1, 0x2480, 0x2b83]);

function ts64(x, i, h, l) {
  x[i]   = (h >> 24) & 0xff;
  x[i+1] = (h >> 16) & 0xff;
  x[i+2] = (h >>  8) & 0xff;
  x[i+3] = h & 0xff;
  x[i+4] = (l >> 24)  & 0xff;
  x[i+5] = (l >> 16)  & 0xff;
  x[i+6] = (l >>  8)  & 0xff;
  x[i+7] = l & 0xff;
}

function vn(x, xi, y, yi, n) {
  var i,d = 0;
  for (i = 0; i < n; i++) d |= x[xi+i]^y[yi+i];
  return (1 & ((d - 1) >>> 8)) - 1;
}

function crypto_verify_16(x, xi, y, yi) {
  return vn(x,xi,y,yi,16);
}

function crypto_verify_32(x, xi, y, yi) {
  return vn(x,xi,y,yi,32);
}

function core_salsa20(o, p, k, c) {
  var j0  = c[ 0] & 0xff | (c[ 1] & 0xff)<<8 | (c[ 2] & 0xff)<<16 | (c[ 3] & 0xff)<<24,
      j1  = k[ 0] & 0xff | (k[ 1] & 0xff)<<8 | (k[ 2] & 0xff)<<16 | (k[ 3] & 0xff)<<24,
      j2  = k[ 4] & 0xff | (k[ 5] & 0xff)<<8 | (k[ 6] & 0xff)<<16 | (k[ 7] & 0xff)<<24,
      j3  = k[ 8] & 0xff | (k[ 9] & 0xff)<<8 | (k[10] & 0xff)<<16 | (k[11] & 0xff)<<24,
      j4  = k[12] & 0xff | (k[13] & 0xff)<<8 | (k[14] & 0xff)<<16 | (k[15] & 0xff)<<24,
      j5  = c[ 4] & 0xff | (c[ 5] & 0xff)<<8 | (c[ 6] & 0xff)<<16 | (c[ 7] & 0xff)<<24,
      j6  = p[ 0] & 0xff | (p[ 1] & 0xff)<<8 | (p[ 2] & 0xff)<<16 | (p[ 3] & 0xff)<<24,
      j7  = p[ 4] & 0xff | (p[ 5] & 0xff)<<8 | (p[ 6] & 0xff)<<16 | (p[ 7] & 0xff)<<24,
      j8  = p[ 8] & 0xff | (p[ 9] & 0xff)<<8 | (p[10] & 0xff)<<16 | (p[11] & 0xff)<<24,
      j9  = p[12] & 0xff | (p[13] & 0xff)<<8 | (p[14] & 0xff)<<16 | (p[15] & 0xff)<<24,
      j10 = c[ 8] & 0xff | (c[ 9] & 0xff)<<8 | (c[10] & 0xff)<<16 | (c[11] & 0xff)<<24,
      j11 = k[16] & 0xff | (k[17] & 0xff)<<8 | (k[18] & 0xff)<<16 | (k[19] & 0xff)<<24,
      j12 = k[20] & 0xff | (k[21] & 0xff)<<8 | (k[22] & 0xff)<<16 | (k[23] & 0xff)<<24,
      j13 = k[24] & 0xff | (k[25] & 0xff)<<8 | (k[26] & 0xff)<<16 | (k[27] & 0xff)<<24,
      j14 = k[28] & 0xff | (k[29] & 0xff)<<8 | (k[30] & 0xff)<<16 | (k[31] & 0xff)<<24,
      j15 = c[12] & 0xff | (c[13] & 0xff)<<8 | (c[14] & 0xff)<<16 | (c[15] & 0xff)<<24;

  var x0 = j0, x1 = j1, x2 = j2, x3 = j3, x4 = j4, x5 = j5, x6 = j6, x7 = j7,
      x8 = j8, x9 = j9, x10 = j10, x11 = j11, x12 = j12, x13 = j13, x14 = j14,
      x15 = j15, u;

  for (var i = 0; i < 20; i += 2) {
    u = x0 + x12 | 0;
    x4 ^= u<<7 | u>>>(32-7);
    u = x4 + x0 | 0;
    x8 ^= u<<9 | u>>>(32-9);
    u = x8 + x4 | 0;
    x12 ^= u<<13 | u>>>(32-13);
    u = x12 + x8 | 0;
    x0 ^= u<<18 | u>>>(32-18);

    u = x5 + x1 | 0;
    x9 ^= u<<7 | u>>>(32-7);
    u = x9 + x5 | 0;
    x13 ^= u<<9 | u>>>(32-9);
    u = x13 + x9 | 0;
    x1 ^= u<<13 | u>>>(32-13);
    u = x1 + x13 | 0;
    x5 ^= u<<18 | u>>>(32-18);

    u = x10 + x6 | 0;
    x14 ^= u<<7 | u>>>(32-7);
    u = x14 + x10 | 0;
    x2 ^= u<<9 | u>>>(32-9);
    u = x2 + x14 | 0;
    x6 ^= u<<13 | u>>>(32-13);
    u = x6 + x2 | 0;
    x10 ^= u<<18 | u>>>(32-18);

    u = x15 + x11 | 0;
    x3 ^= u<<7 | u>>>(32-7);
    u = x3 + x15 | 0;
    x7 ^= u<<9 | u>>>(32-9);
    u = x7 + x3 | 0;
    x11 ^= u<<13 | u>>>(32-13);
    u = x11 + x7 | 0;
    x15 ^= u<<18 | u>>>(32-18);

    u = x0 + x3 | 0;
    x1 ^= u<<7 | u>>>(32-7);
    u = x1 + x0 | 0;
    x2 ^= u<<9 | u>>>(32-9);
    u = x2 + x1 | 0;
    x3 ^= u<<13 | u>>>(32-13);
    u = x3 + x2 | 0;
    x0 ^= u<<18 | u>>>(32-18);

    u = x5 + x4 | 0;
    x6 ^= u<<7 | u>>>(32-7);
    u = x6 + x5 | 0;
    x7 ^= u<<9 | u>>>(32-9);
    u = x7 + x6 | 0;
    x4 ^= u<<13 | u>>>(32-13);
    u = x4 + x7 | 0;
    x5 ^= u<<18 | u>>>(32-18);

    u = x10 + x9 | 0;
    x11 ^= u<<7 | u>>>(32-7);
    u = x11 + x10 | 0;
    x8 ^= u<<9 | u>>>(32-9);
    u = x8 + x11 | 0;
    x9 ^= u<<13 | u>>>(32-13);
    u = x9 + x8 | 0;
    x10 ^= u<<18 | u>>>(32-18);

    u = x15 + x14 | 0;
    x12 ^= u<<7 | u>>>(32-7);
    u = x12 + x15 | 0;
    x13 ^= u<<9 | u>>>(32-9);
    u = x13 + x12 | 0;
    x14 ^= u<<13 | u>>>(32-13);
    u = x14 + x13 | 0;
    x15 ^= u<<18 | u>>>(32-18);
  }
   x0 =  x0 +  j0 | 0;
   x1 =  x1 +  j1 | 0;
   x2 =  x2 +  j2 | 0;
   x3 =  x3 +  j3 | 0;
   x4 =  x4 +  j4 | 0;
   x5 =  x5 +  j5 | 0;
   x6 =  x6 +  j6 | 0;
   x7 =  x7 +  j7 | 0;
   x8 =  x8 +  j8 | 0;
   x9 =  x9 +  j9 | 0;
  x10 = x10 + j10 | 0;
  x11 = x11 + j11 | 0;
  x12 = x12 + j12 | 0;
  x13 = x13 + j13 | 0;
  x14 = x14 + j14 | 0;
  x15 = x15 + j15 | 0;

  o[ 0] = x0 >>>  0 & 0xff;
  o[ 1] = x0 >>>  8 & 0xff;
  o[ 2] = x0 >>> 16 & 0xff;
  o[ 3] = x0 >>> 24 & 0xff;

  o[ 4] = x1 >>>  0 & 0xff;
  o[ 5] = x1 >>>  8 & 0xff;
  o[ 6] = x1 >>> 16 & 0xff;
  o[ 7] = x1 >>> 24 & 0xff;

  o[ 8] = x2 >>>  0 & 0xff;
  o[ 9] = x2 >>>  8 & 0xff;
  o[10] = x2 >>> 16 & 0xff;
  o[11] = x2 >>> 24 & 0xff;

  o[12] = x3 >>>  0 & 0xff;
  o[13] = x3 >>>  8 & 0xff;
  o[14] = x3 >>> 16 & 0xff;
  o[15] = x3 >>> 24 & 0xff;

  o[16] = x4 >>>  0 & 0xff;
  o[17] = x4 >>>  8 & 0xff;
  o[18] = x4 >>> 16 & 0xff;
  o[19] = x4 >>> 24 & 0xff;

  o[20] = x5 >>>  0 & 0xff;
  o[21] = x5 >>>  8 & 0xff;
  o[22] = x5 >>> 16 & 0xff;
  o[23] = x5 >>> 24 & 0xff;

  o[24] = x6 >>>  0 & 0xff;
  o[25] = x6 >>>  8 & 0xff;
  o[26] = x6 >>> 16 & 0xff;
  o[27] = x6 >>> 24 & 0xff;

  o[28] = x7 >>>  0 & 0xff;
  o[29] = x7 >>>  8 & 0xff;
  o[30] = x7 >>> 16 & 0xff;
  o[31] = x7 >>> 24 & 0xff;

  o[32] = x8 >>>  0 & 0xff;
  o[33] = x8 >>>  8 & 0xff;
  o[34] = x8 >>> 16 & 0xff;
  o[35] = x8 >>> 24 & 0xff;

  o[36] = x9 >>>  0 & 0xff;
  o[37] = x9 >>>  8 & 0xff;
  o[38] = x9 >>> 16 & 0xff;
  o[39] = x9 >>> 24 & 0xff;

  o[40] = x10 >>>  0 & 0xff;
  o[41] = x10 >>>  8 & 0xff;
  o[42] = x10 >>> 16 & 0xff;
  o[43] = x10 >>> 24 & 0xff;

  o[44] = x11 >>>  0 & 0xff;
  o[45] = x11 >>>  8 & 0xff;
  o[46] = x11 >>> 16 & 0xff;
  o[47] = x11 >>> 24 & 0xff;

  o[48] = x12 >>>  0 & 0xff;
  o[49] = x12 >>>  8 & 0xff;
  o[50] = x12 >>> 16 & 0xff;
  o[51] = x12 >>> 24 & 0xff;

  o[52] = x13 >>>  0 & 0xff;
  o[53] = x13 >>>  8 & 0xff;
  o[54] = x13 >>> 16 & 0xff;
  o[55] = x13 >>> 24 & 0xff;

  o[56] = x14 >>>  0 & 0xff;
  o[57] = x14 >>>  8 & 0xff;
  o[58] = x14 >>> 16 & 0xff;
  o[59] = x14 >>> 24 & 0xff;

  o[60] = x15 >>>  0 & 0xff;
  o[61] = x15 >>>  8 & 0xff;
  o[62] = x15 >>> 16 & 0xff;
  o[63] = x15 >>> 24 & 0xff;
}

function core_hsalsa20(o,p,k,c) {
  var j0  = c[ 0] & 0xff | (c[ 1] & 0xff)<<8 | (c[ 2] & 0xff)<<16 | (c[ 3] & 0xff)<<24,
      j1  = k[ 0] & 0xff | (k[ 1] & 0xff)<<8 | (k[ 2] & 0xff)<<16 | (k[ 3] & 0xff)<<24,
      j2  = k[ 4] & 0xff | (k[ 5] & 0xff)<<8 | (k[ 6] & 0xff)<<16 | (k[ 7] & 0xff)<<24,
      j3  = k[ 8] & 0xff | (k[ 9] & 0xff)<<8 | (k[10] & 0xff)<<16 | (k[11] & 0xff)<<24,
      j4  = k[12] & 0xff | (k[13] & 0xff)<<8 | (k[14] & 0xff)<<16 | (k[15] & 0xff)<<24,
      j5  = c[ 4] & 0xff | (c[ 5] & 0xff)<<8 | (c[ 6] & 0xff)<<16 | (c[ 7] & 0xff)<<24,
      j6  = p[ 0] & 0xff | (p[ 1] & 0xff)<<8 | (p[ 2] & 0xff)<<16 | (p[ 3] & 0xff)<<24,
      j7  = p[ 4] & 0xff | (p[ 5] & 0xff)<<8 | (p[ 6] & 0xff)<<16 | (p[ 7] & 0xff)<<24,
      j8  = p[ 8] & 0xff | (p[ 9] & 0xff)<<8 | (p[10] & 0xff)<<16 | (p[11] & 0xff)<<24,
      j9  = p[12] & 0xff | (p[13] & 0xff)<<8 | (p[14] & 0xff)<<16 | (p[15] & 0xff)<<24,
      j10 = c[ 8] & 0xff | (c[ 9] & 0xff)<<8 | (c[10] & 0xff)<<16 | (c[11] & 0xff)<<24,
      j11 = k[16] & 0xff | (k[17] & 0xff)<<8 | (k[18] & 0xff)<<16 | (k[19] & 0xff)<<24,
      j12 = k[20] & 0xff | (k[21] & 0xff)<<8 | (k[22] & 0xff)<<16 | (k[23] & 0xff)<<24,
      j13 = k[24] & 0xff | (k[25] & 0xff)<<8 | (k[26] & 0xff)<<16 | (k[27] & 0xff)<<24,
      j14 = k[28] & 0xff | (k[29] & 0xff)<<8 | (k[30] & 0xff)<<16 | (k[31] & 0xff)<<24,
      j15 = c[12] & 0xff | (c[13] & 0xff)<<8 | (c[14] & 0xff)<<16 | (c[15] & 0xff)<<24;

  var x0 = j0, x1 = j1, x2 = j2, x3 = j3, x4 = j4, x5 = j5, x6 = j6, x7 = j7,
      x8 = j8, x9 = j9, x10 = j10, x11 = j11, x12 = j12, x13 = j13, x14 = j14,
      x15 = j15, u;

  for (var i = 0; i < 20; i += 2) {
    u = x0 + x12 | 0;
    x4 ^= u<<7 | u>>>(32-7);
    u = x4 + x0 | 0;
    x8 ^= u<<9 | u>>>(32-9);
    u = x8 + x4 | 0;
    x12 ^= u<<13 | u>>>(32-13);
    u = x12 + x8 | 0;
    x0 ^= u<<18 | u>>>(32-18);

    u = x5 + x1 | 0;
    x9 ^= u<<7 | u>>>(32-7);
    u = x9 + x5 | 0;
    x13 ^= u<<9 | u>>>(32-9);
    u = x13 + x9 | 0;
    x1 ^= u<<13 | u>>>(32-13);
    u = x1 + x13 | 0;
    x5 ^= u<<18 | u>>>(32-18);

    u = x10 + x6 | 0;
    x14 ^= u<<7 | u>>>(32-7);
    u = x14 + x10 | 0;
    x2 ^= u<<9 | u>>>(32-9);
    u = x2 + x14 | 0;
    x6 ^= u<<13 | u>>>(32-13);
    u = x6 + x2 | 0;
    x10 ^= u<<18 | u>>>(32-18);

    u = x15 + x11 | 0;
    x3 ^= u<<7 | u>>>(32-7);
    u = x3 + x15 | 0;
    x7 ^= u<<9 | u>>>(32-9);
    u = x7 + x3 | 0;
    x11 ^= u<<13 | u>>>(32-13);
    u = x11 + x7 | 0;
    x15 ^= u<<18 | u>>>(32-18);

    u = x0 + x3 | 0;
    x1 ^= u<<7 | u>>>(32-7);
    u = x1 + x0 | 0;
    x2 ^= u<<9 | u>>>(32-9);
    u = x2 + x1 | 0;
    x3 ^= u<<13 | u>>>(32-13);
    u = x3 + x2 | 0;
    x0 ^= u<<18 | u>>>(32-18);

    u = x5 + x4 | 0;
    x6 ^= u<<7 | u>>>(32-7);
    u = x6 + x5 | 0;
    x7 ^= u<<9 | u>>>(32-9);
    u = x7 + x6 | 0;
    x4 ^= u<<13 | u>>>(32-13);
    u = x4 + x7 | 0;
    x5 ^= u<<18 | u>>>(32-18);

    u = x10 + x9 | 0;
    x11 ^= u<<7 | u>>>(32-7);
    u = x11 + x10 | 0;
    x8 ^= u<<9 | u>>>(32-9);
    u = x8 + x11 | 0;
    x9 ^= u<<13 | u>>>(32-13);
    u = x9 + x8 | 0;
    x10 ^= u<<18 | u>>>(32-18);

    u = x15 + x14 | 0;
    x12 ^= u<<7 | u>>>(32-7);
    u = x12 + x15 | 0;
    x13 ^= u<<9 | u>>>(32-9);
    u = x13 + x12 | 0;
    x14 ^= u<<13 | u>>>(32-13);
    u = x14 + x13 | 0;
    x15 ^= u<<18 | u>>>(32-18);
  }

  o[ 0] = x0 >>>  0 & 0xff;
  o[ 1] = x0 >>>  8 & 0xff;
  o[ 2] = x0 >>> 16 & 0xff;
  o[ 3] = x0 >>> 24 & 0xff;

  o[ 4] = x5 >>>  0 & 0xff;
  o[ 5] = x5 >>>  8 & 0xff;
  o[ 6] = x5 >>> 16 & 0xff;
  o[ 7] = x5 >>> 24 & 0xff;

  o[ 8] = x10 >>>  0 & 0xff;
  o[ 9] = x10 >>>  8 & 0xff;
  o[10] = x10 >>> 16 & 0xff;
  o[11] = x10 >>> 24 & 0xff;

  o[12] = x15 >>>  0 & 0xff;
  o[13] = x15 >>>  8 & 0xff;
  o[14] = x15 >>> 16 & 0xff;
  o[15] = x15 >>> 24 & 0xff;

  o[16] = x6 >>>  0 & 0xff;
  o[17] = x6 >>>  8 & 0xff;
  o[18] = x6 >>> 16 & 0xff;
  o[19] = x6 >>> 24 & 0xff;

  o[20] = x7 >>>  0 & 0xff;
  o[21] = x7 >>>  8 & 0xff;
  o[22] = x7 >>> 16 & 0xff;
  o[23] = x7 >>> 24 & 0xff;

  o[24] = x8 >>>  0 & 0xff;
  o[25] = x8 >>>  8 & 0xff;
  o[26] = x8 >>> 16 & 0xff;
  o[27] = x8 >>> 24 & 0xff;

  o[28] = x9 >>>  0 & 0xff;
  o[29] = x9 >>>  8 & 0xff;
  o[30] = x9 >>> 16 & 0xff;
  o[31] = x9 >>> 24 & 0xff;
}

function crypto_core_salsa20(out,inp,k,c) {
  core_salsa20(out,inp,k,c);
}

function crypto_core_hsalsa20(out,inp,k,c) {
  core_hsalsa20(out,inp,k,c);
}

var sigma = new Uint8Array([101, 120, 112, 97, 110, 100, 32, 51, 50, 45, 98, 121, 116, 101, 32, 107]);
            

function crypto_stream_salsa20_xor(c,cpos,m,mpos,b,n,k) {
  var z = new Uint8Array(16), x = new Uint8Array(64);
  var u, i;
  for (i = 0; i < 16; i++) z[i] = 0;
  for (i = 0; i < 8; i++) z[i] = n[i];
  while (b >= 64) {
    crypto_core_salsa20(x,z,k,sigma);
    for (i = 0; i < 64; i++) c[cpos+i] = m[mpos+i] ^ x[i];
    u = 1;
    for (i = 8; i < 16; i++) {
      u = u + (z[i] & 0xff) | 0;
      z[i] = u & 0xff;
      u >>>= 8;
    }
    b -= 64;
    cpos += 64;
    mpos += 64;
  }
  if (b > 0) {
    crypto_core_salsa20(x,z,k,sigma);
    for (i = 0; i < b; i++) c[cpos+i] = m[mpos+i] ^ x[i];
  }
  return 0;
}

function crypto_stream_salsa20(c,cpos,b,n,k) {
  var z = new Uint8Array(16), x = new Uint8Array(64);
  var u, i;
  for (i = 0; i < 16; i++) z[i] = 0;
  for (i = 0; i < 8; i++) z[i] = n[i];
  while (b >= 64) {
    crypto_core_salsa20(x,z,k,sigma);
    for (i = 0; i < 64; i++) c[cpos+i] = x[i];
    u = 1;
    for (i = 8; i < 16; i++) {
      u = u + (z[i] & 0xff) | 0;
      z[i] = u & 0xff;
      u >>>= 8;
    }
    b -= 64;
    cpos += 64;
  }
  if (b > 0) {
    crypto_core_salsa20(x,z,k,sigma);
    for (i = 0; i < b; i++) c[cpos+i] = x[i];
  }
  return 0;
}

function crypto_stream(c,cpos,d,n,k) {
  var s = new Uint8Array(32);
  crypto_core_hsalsa20(s,n,k,sigma);
  var sn = new Uint8Array(8);
  for (var i = 0; i < 8; i++) sn[i] = n[i+16];
  return crypto_stream_salsa20(c,cpos,d,sn,s);
}

function crypto_stream_xor(c,cpos,m,mpos,d,n,k) {
  var s = new Uint8Array(32);
  crypto_core_hsalsa20(s,n,k,sigma);
  var sn = new Uint8Array(8);
  for (var i = 0; i < 8; i++) sn[i] = n[i+16];
  return crypto_stream_salsa20_xor(c,cpos,m,mpos,d,sn,s);
}


var poly1305 = function(key) {
  this.buffer = new Uint8Array(16);
  this.r = new Uint16Array(10);
  this.h = new Uint16Array(10);
  this.pad = new Uint16Array(8);
  this.leftover = 0;
  this.fin = 0;

  var t0, t1, t2, t3, t4, t5, t6, t7;

  t0 = key[ 0] & 0xff | (key[ 1] & 0xff) << 8; this.r[0] = ( t0                     ) & 0x1fff;
  t1 = key[ 2] & 0xff | (key[ 3] & 0xff) << 8; this.r[1] = ((t0 >>> 13) | (t1 <<  3)) & 0x1fff;
  t2 = key[ 4] & 0xff | (key[ 5] & 0xff) << 8; this.r[2] = ((t1 >>> 10) | (t2 <<  6)) & 0x1f03;
  t3 = key[ 6] & 0xff | (key[ 7] & 0xff) << 8; this.r[3] = ((t2 >>>  7) | (t3 <<  9)) & 0x1fff;
  t4 = key[ 8] & 0xff | (key[ 9] & 0xff) << 8; this.r[4] = ((t3 >>>  4) | (t4 << 12)) & 0x00ff;
  this.r[5] = ((t4 >>>  1)) & 0x1ffe;
  t5 = key[10] & 0xff | (key[11] & 0xff) << 8; this.r[6] = ((t4 >>> 14) | (t5 <<  2)) & 0x1fff;
  t6 = key[12] & 0xff | (key[13] & 0xff) << 8; this.r[7] = ((t5 >>> 11) | (t6 <<  5)) & 0x1f81;
  t7 = key[14] & 0xff | (key[15] & 0xff) << 8; this.r[8] = ((t6 >>>  8) | (t7 <<  8)) & 0x1fff;
  this.r[9] = ((t7 >>>  5)) & 0x007f;

  this.pad[0] = key[16] & 0xff | (key[17] & 0xff) << 8;
  this.pad[1] = key[18] & 0xff | (key[19] & 0xff) << 8;
  this.pad[2] = key[20] & 0xff | (key[21] & 0xff) << 8;
  this.pad[3] = key[22] & 0xff | (key[23] & 0xff) << 8;
  this.pad[4] = key[24] & 0xff | (key[25] & 0xff) << 8;
  this.pad[5] = key[26] & 0xff | (key[27] & 0xff) << 8;
  this.pad[6] = key[28] & 0xff | (key[29] & 0xff) << 8;
  this.pad[7] = key[30] & 0xff | (key[31] & 0xff) << 8;
};

poly1305.prototype.blocks = function(m, mpos, bytes) {
  var hibit = this.fin ? 0 : (1 << 11);
  var t0, t1, t2, t3, t4, t5, t6, t7, c;
  var d0, d1, d2, d3, d4, d5, d6, d7, d8, d9;

  var h0 = this.h[0],
      h1 = this.h[1],
      h2 = this.h[2],
      h3 = this.h[3],
      h4 = this.h[4],
      h5 = this.h[5],
      h6 = this.h[6],
      h7 = this.h[7],
      h8 = this.h[8],
      h9 = this.h[9];

  var r0 = this.r[0],
      r1 = this.r[1],
      r2 = this.r[2],
      r3 = this.r[3],
      r4 = this.r[4],
      r5 = this.r[5],
      r6 = this.r[6],
      r7 = this.r[7],
      r8 = this.r[8],
      r9 = this.r[9];

  while (bytes >= 16) {
    t0 = m[mpos+ 0] & 0xff | (m[mpos+ 1] & 0xff) << 8; h0 += ( t0                     ) & 0x1fff;
    t1 = m[mpos+ 2] & 0xff | (m[mpos+ 3] & 0xff) << 8; h1 += ((t0 >>> 13) | (t1 <<  3)) & 0x1fff;
    t2 = m[mpos+ 4] & 0xff | (m[mpos+ 5] & 0xff) << 8; h2 += ((t1 >>> 10) | (t2 <<  6)) & 0x1fff;
    t3 = m[mpos+ 6] & 0xff | (m[mpos+ 7] & 0xff) << 8; h3 += ((t2 >>>  7) | (t3 <<  9)) & 0x1fff;
    t4 = m[mpos+ 8] & 0xff | (m[mpos+ 9] & 0xff) << 8; h4 += ((t3 >>>  4) | (t4 << 12)) & 0x1fff;
    h5 += ((t4 >>>  1)) & 0x1fff;
    t5 = m[mpos+10] & 0xff | (m[mpos+11] & 0xff) << 8; h6 += ((t4 >>> 14) | (t5 <<  2)) & 0x1fff;
    t6 = m[mpos+12] & 0xff | (m[mpos+13] & 0xff) << 8; h7 += ((t5 >>> 11) | (t6 <<  5)) & 0x1fff;
    t7 = m[mpos+14] & 0xff | (m[mpos+15] & 0xff) << 8; h8 += ((t6 >>>  8) | (t7 <<  8)) & 0x1fff;
    h9 += ((t7 >>> 5)) | hibit;

    c = 0;

    d0 = c;
    d0 += h0 * r0;
    d0 += h1 * (5 * r9);
    d0 += h2 * (5 * r8);
    d0 += h3 * (5 * r7);
    d0 += h4 * (5 * r6);
    c = (d0 >>> 13); d0 &= 0x1fff;
    d0 += h5 * (5 * r5);
    d0 += h6 * (5 * r4);
    d0 += h7 * (5 * r3);
    d0 += h8 * (5 * r2);
    d0 += h9 * (5 * r1);
    c += (d0 >>> 13); d0 &= 0x1fff;

    d1 = c;
    d1 += h0 * r1;
    d1 += h1 * r0;
    d1 += h2 * (5 * r9);
    d1 += h3 * (5 * r8);
    d1 += h4 * (5 * r7);
    c = (d1 >>> 13); d1 &= 0x1fff;
    d1 += h5 * (5 * r6);
    d1 += h6 * (5 * r5);
    d1 += h7 * (5 * r4);
    d1 += h8 * (5 * r3);
    d1 += h9 * (5 * r2);
    c += (d1 >>> 13); d1 &= 0x1fff;

    d2 = c;
    d2 += h0 * r2;
    d2 += h1 * r1;
    d2 += h2 * r0;
    d2 += h3 * (5 * r9);
    d2 += h4 * (5 * r8);
    c = (d2 >>> 13); d2 &= 0x1fff;
    d2 += h5 * (5 * r7);
    d2 += h6 * (5 * r6);
    d2 += h7 * (5 * r5);
    d2 += h8 * (5 * r4);
    d2 += h9 * (5 * r3);
    c += (d2 >>> 13); d2 &= 0x1fff;

    d3 = c;
    d3 += h0 * r3;
    d3 += h1 * r2;
    d3 += h2 * r1;
    d3 += h3 * r0;
    d3 += h4 * (5 * r9);
    c = (d3 >>> 13); d3 &= 0x1fff;
    d3 += h5 * (5 * r8);
    d3 += h6 * (5 * r7);
    d3 += h7 * (5 * r6);
    d3 += h8 * (5 * r5);
    d3 += h9 * (5 * r4);
    c += (d3 >>> 13); d3 &= 0x1fff;

    d4 = c;
    d4 += h0 * r4;
    d4 += h1 * r3;
    d4 += h2 * r2;
    d4 += h3 * r1;
    d4 += h4 * r0;
    c = (d4 >>> 13); d4 &= 0x1fff;
    d4 += h5 * (5 * r9);
    d4 += h6 * (5 * r8);
    d4 += h7 * (5 * r7);
    d4 += h8 * (5 * r6);
    d4 += h9 * (5 * r5);
    c += (d4 >>> 13); d4 &= 0x1fff;

    d5 = c;
    d5 += h0 * r5;
    d5 += h1 * r4;
    d5 += h2 * r3;
    d5 += h3 * r2;
    d5 += h4 * r1;
    c = (d5 >>> 13); d5 &= 0x1fff;
    d5 += h5 * r0;
    d5 += h6 * (5 * r9);
    d5 += h7 * (5 * r8);
    d5 += h8 * (5 * r7);
    d5 += h9 * (5 * r6);
    c += (d5 >>> 13); d5 &= 0x1fff;

    d6 = c;
    d6 += h0 * r6;
    d6 += h1 * r5;
    d6 += h2 * r4;
    d6 += h3 * r3;
    d6 += h4 * r2;
    c = (d6 >>> 13); d6 &= 0x1fff;
    d6 += h5 * r1;
    d6 += h6 * r0;
    d6 += h7 * (5 * r9);
    d6 += h8 * (5 * r8);
    d6 += h9 * (5 * r7);
    c += (d6 >>> 13); d6 &= 0x1fff;

    d7 = c;
    d7 += h0 * r7;
    d7 += h1 * r6;
    d7 += h2 * r5;
    d7 += h3 * r4;
    d7 += h4 * r3;
    c = (d7 >>> 13); d7 &= 0x1fff;
    d7 += h5 * r2;
    d7 += h6 * r1;
    d7 += h7 * r0;
    d7 += h8 * (5 * r9);
    d7 += h9 * (5 * r8);
    c += (d7 >>> 13); d7 &= 0x1fff;

    d8 = c;
    d8 += h0 * r8;
    d8 += h1 * r7;
    d8 += h2 * r6;
    d8 += h3 * r5;
    d8 += h4 * r4;
    c = (d8 >>> 13); d8 &= 0x1fff;
    d8 += h5 * r3;
    d8 += h6 * r2;
    d8 += h7 * r1;
    d8 += h8 * r0;
    d8 += h9 * (5 * r9);
    c += (d8 >>> 13); d8 &= 0x1fff;

    d9 = c;
    d9 += h0 * r9;
    d9 += h1 * r8;
    d9 += h2 * r7;
    d9 += h3 * r6;
    d9 += h4 * r5;
    c = (d9 >>> 13); d9 &= 0x1fff;
    d9 += h5 * r4;
    d9 += h6 * r3;
    d9 += h7 * r2;
    d9 += h8 * r1;
    d9 += h9 * r0;
    c += (d9 >>> 13); d9 &= 0x1fff;

    c = (((c << 2) + c)) | 0;
    c = (c + d0) | 0;
    d0 = c & 0x1fff;
    c = (c >>> 13);
    d1 += c;

    h0 = d0;
    h1 = d1;
    h2 = d2;
    h3 = d3;
    h4 = d4;
    h5 = d5;
    h6 = d6;
    h7 = d7;
    h8 = d8;
    h9 = d9;

    mpos += 16;
    bytes -= 16;
  }
  this.h[0] = h0;
  this.h[1] = h1;
  this.h[2] = h2;
  this.h[3] = h3;
  this.h[4] = h4;
  this.h[5] = h5;
  this.h[6] = h6;
  this.h[7] = h7;
  this.h[8] = h8;
  this.h[9] = h9;
};

poly1305.prototype.finish = function(mac, macpos) {
  var g = new Uint16Array(10);
  var c, mask, f, i;

  if (this.leftover) {
    i = this.leftover;
    this.buffer[i++] = 1;
    for (; i < 16; i++) this.buffer[i] = 0;
    this.fin = 1;
    this.blocks(this.buffer, 0, 16);
  }

  c = this.h[1] >>> 13;
  this.h[1] &= 0x1fff;
  for (i = 2; i < 10; i++) {
    this.h[i] += c;
    c = this.h[i] >>> 13;
    this.h[i] &= 0x1fff;
  }
  this.h[0] += (c * 5);
  c = this.h[0] >>> 13;
  this.h[0] &= 0x1fff;
  this.h[1] += c;
  c = this.h[1] >>> 13;
  this.h[1] &= 0x1fff;
  this.h[2] += c;

  g[0] = this.h[0] + 5;
  c = g[0] >>> 13;
  g[0] &= 0x1fff;
  for (i = 1; i < 10; i++) {
    g[i] = this.h[i] + c;
    c = g[i] >>> 13;
    g[i] &= 0x1fff;
  }
  g[9] -= (1 << 13);

  mask = (c ^ 1) - 1;
  for (i = 0; i < 10; i++) g[i] &= mask;
  mask = ~mask;
  for (i = 0; i < 10; i++) this.h[i] = (this.h[i] & mask) | g[i];

  this.h[0] = ((this.h[0]       ) | (this.h[1] << 13)                    ) & 0xffff;
  this.h[1] = ((this.h[1] >>>  3) | (this.h[2] << 10)                    ) & 0xffff;
  this.h[2] = ((this.h[2] >>>  6) | (this.h[3] <<  7)                    ) & 0xffff;
  this.h[3] = ((this.h[3] >>>  9) | (this.h[4] <<  4)                    ) & 0xffff;
  this.h[4] = ((this.h[4] >>> 12) | (this.h[5] <<  1) | (this.h[6] << 14)) & 0xffff;
  this.h[5] = ((this.h[6] >>>  2) | (this.h[7] << 11)                    ) & 0xffff;
  this.h[6] = ((this.h[7] >>>  5) | (this.h[8] <<  8)                    ) & 0xffff;
  this.h[7] = ((this.h[8] >>>  8) | (this.h[9] <<  5)                    ) & 0xffff;

  f = this.h[0] + this.pad[0];
  this.h[0] = f & 0xffff;
  for (i = 1; i < 8; i++) {
    f = (((this.h[i] + this.pad[i]) | 0) + (f >>> 16)) | 0;
    this.h[i] = f & 0xffff;
  }

  mac[macpos+ 0] = (this.h[0] >>> 0) & 0xff;
  mac[macpos+ 1] = (this.h[0] >>> 8) & 0xff;
  mac[macpos+ 2] = (this.h[1] >>> 0) & 0xff;
  mac[macpos+ 3] = (this.h[1] >>> 8) & 0xff;
  mac[macpos+ 4] = (this.h[2] >>> 0) & 0xff;
  mac[macpos+ 5] = (this.h[2] >>> 8) & 0xff;
  mac[macpos+ 6] = (this.h[3] >>> 0) & 0xff;
  mac[macpos+ 7] = (this.h[3] >>> 8) & 0xff;
  mac[macpos+ 8] = (this.h[4] >>> 0) & 0xff;
  mac[macpos+ 9] = (this.h[4] >>> 8) & 0xff;
  mac[macpos+10] = (this.h[5] >>> 0) & 0xff;
  mac[macpos+11] = (this.h[5] >>> 8) & 0xff;
  mac[macpos+12] = (this.h[6] >>> 0) & 0xff;
  mac[macpos+13] = (this.h[6] >>> 8) & 0xff;
  mac[macpos+14] = (this.h[7] >>> 0) & 0xff;
  mac[macpos+15] = (this.h[7] >>> 8) & 0xff;
};

poly1305.prototype.update = function(m, mpos, bytes) {
  var i, want;

  if (this.leftover) {
    want = (16 - this.leftover);
    if (want > bytes)
      want = bytes;
    for (i = 0; i < want; i++)
      this.buffer[this.leftover + i] = m[mpos+i];
    bytes -= want;
    mpos += want;
    this.leftover += want;
    if (this.leftover < 16)
      return;
    this.blocks(this.buffer, 0, 16);
    this.leftover = 0;
  }

  if (bytes >= 16) {
    want = bytes - (bytes % 16);
    this.blocks(m, mpos, want);
    mpos += want;
    bytes -= want;
  }

  if (bytes) {
    for (i = 0; i < bytes; i++)
      this.buffer[this.leftover + i] = m[mpos+i];
    this.leftover += bytes;
  }
};

function crypto_onetimeauth(out, outpos, m, mpos, n, k) {
  var s = new poly1305(k);
  s.update(m, mpos, n);
  s.finish(out, outpos);
  return 0;
}

function crypto_onetimeauth_verify(h, hpos, m, mpos, n, k) {
  var x = new Uint8Array(16);
  crypto_onetimeauth(x,0,m,mpos,n,k);
  return crypto_verify_16(h,hpos,x,0);
}

function crypto_secretbox(c,m,d,n,k) {
  var i;
  if (d < 32) return -1;
  crypto_stream_xor(c,0,m,0,d,n,k);
  crypto_onetimeauth(c, 16, c, 32, d - 32, c);
  for (i = 0; i < 16; i++) c[i] = 0;
  return 0;
}

function crypto_secretbox_open(m,c,d,n,k) {
  var i;
  var x = new Uint8Array(32);
  if (d < 32) return -1;
  crypto_stream(x,0,32,n,k);
  if (crypto_onetimeauth_verify(c, 16,c, 32,d - 32,x) !== 0) return -1;
  crypto_stream_xor(m,0,c,0,d,n,k);
  for (i = 0; i < 32; i++) m[i] = 0;
  return 0;
}

function set25519(r, a) {
  var i;
  for (i = 0; i < 16; i++) r[i] = a[i]|0;
}

function car25519(o) {
  var i, v, c = 1;
  for (i = 0; i < 16; i++) {
    v = o[i] + c + 65535;
    c = Math.floor(v / 65536);
    o[i] = v - c * 65536;
  }
  o[0] += c-1 + 37 * (c-1);
}

function sel25519(p, q, b) {
  var t, c = ~(b-1);
  for (var i = 0; i < 16; i++) {
    t = c & (p[i] ^ q[i]);
    p[i] ^= t;
    q[i] ^= t;
  }
}

function pack25519(o, n) {
  var i, j, b;
  var m = gf(), t = gf();
  for (i = 0; i < 16; i++) t[i] = n[i];
  car25519(t);
  car25519(t);
  car25519(t);
  for (j = 0; j < 2; j++) {
    m[0] = t[0] - 0xffed;
    for (i = 1; i < 15; i++) {
      m[i] = t[i] - 0xffff - ((m[i-1]>>16) & 1);
      m[i-1] &= 0xffff;
    }
    m[15] = t[15] - 0x7fff - ((m[14]>>16) & 1);
    b = (m[15]>>16) & 1;
    m[14] &= 0xffff;
    sel25519(t, m, 1-b);
  }
  for (i = 0; i < 16; i++) {
    o[2*i] = t[i] & 0xff;
    o[2*i+1] = t[i]>>8;
  }
}

function neq25519(a, b) {
  var c = new Uint8Array(32), d = new Uint8Array(32);
  pack25519(c, a);
  pack25519(d, b);
  return crypto_verify_32(c, 0, d, 0);
}

function par25519(a) {
  var d = new Uint8Array(32);
  pack25519(d, a);
  return d[0] & 1;
}

function unpack25519(o, n) {
  var i;
  for (i = 0; i < 16; i++) o[i] = n[2*i] + (n[2*i+1] << 8);
  o[15] &= 0x7fff;
}

function A(o, a, b) {
  for (var i = 0; i < 16; i++) o[i] = a[i] + b[i];
}

function Z(o, a, b) {
  for (var i = 0; i < 16; i++) o[i] = a[i] - b[i];
}

function M(o, a, b) {
  var v, c,
     t0 = 0,  t1 = 0,  t2 = 0,  t3 = 0,  t4 = 0,  t5 = 0,  t6 = 0,  t7 = 0,
     t8 = 0,  t9 = 0, t10 = 0, t11 = 0, t12 = 0, t13 = 0, t14 = 0, t15 = 0,
    t16 = 0, t17 = 0, t18 = 0, t19 = 0, t20 = 0, t21 = 0, t22 = 0, t23 = 0,
    t24 = 0, t25 = 0, t26 = 0, t27 = 0, t28 = 0, t29 = 0, t30 = 0,
    b0 = b[0],
    b1 = b[1],
    b2 = b[2],
    b3 = b[3],
    b4 = b[4],
    b5 = b[5],
    b6 = b[6],
    b7 = b[7],
    b8 = b[8],
    b9 = b[9],
    b10 = b[10],
    b11 = b[11],
    b12 = b[12],
    b13 = b[13],
    b14 = b[14],
    b15 = b[15];

  v = a[0];
  t0 += v * b0;
  t1 += v * b1;
  t2 += v * b2;
  t3 += v * b3;
  t4 += v * b4;
  t5 += v * b5;
  t6 += v * b6;
  t7 += v * b7;
  t8 += v * b8;
  t9 += v * b9;
  t10 += v * b10;
  t11 += v * b11;
  t12 += v * b12;
  t13 += v * b13;
  t14 += v * b14;
  t15 += v * b15;
  v = a[1];
  t1 += v * b0;
  t2 += v * b1;
  t3 += v * b2;
  t4 += v * b3;
  t5 += v * b4;
  t6 += v * b5;
  t7 += v * b6;
  t8 += v * b7;
  t9 += v * b8;
  t10 += v * b9;
  t11 += v * b10;
  t12 += v * b11;
  t13 += v * b12;
  t14 += v * b13;
  t15 += v * b14;
  t16 += v * b15;
  v = a[2];
  t2 += v * b0;
  t3 += v * b1;
  t4 += v * b2;
  t5 += v * b3;
  t6 += v * b4;
  t7 += v * b5;
  t8 += v * b6;
  t9 += v * b7;
  t10 += v * b8;
  t11 += v * b9;
  t12 += v * b10;
  t13 += v * b11;
  t14 += v * b12;
  t15 += v * b13;
  t16 += v * b14;
  t17 += v * b15;
  v = a[3];
  t3 += v * b0;
  t4 += v * b1;
  t5 += v * b2;
  t6 += v * b3;
  t7 += v * b4;
  t8 += v * b5;
  t9 += v * b6;
  t10 += v * b7;
  t11 += v * b8;
  t12 += v * b9;
  t13 += v * b10;
  t14 += v * b11;
  t15 += v * b12;
  t16 += v * b13;
  t17 += v * b14;
  t18 += v * b15;
  v = a[4];
  t4 += v * b0;
  t5 += v * b1;
  t6 += v * b2;
  t7 += v * b3;
  t8 += v * b4;
  t9 += v * b5;
  t10 += v * b6;
  t11 += v * b7;
  t12 += v * b8;
  t13 += v * b9;
  t14 += v * b10;
  t15 += v * b11;
  t16 += v * b12;
  t17 += v * b13;
  t18 += v * b14;
  t19 += v * b15;
  v = a[5];
  t5 += v * b0;
  t6 += v * b1;
  t7 += v * b2;
  t8 += v * b3;
  t9 += v * b4;
  t10 += v * b5;
  t11 += v * b6;
  t12 += v * b7;
  t13 += v * b8;
  t14 += v * b9;
  t15 += v * b10;
  t16 += v * b11;
  t17 += v * b12;
  t18 += v * b13;
  t19 += v * b14;
  t20 += v * b15;
  v = a[6];
  t6 += v * b0;
  t7 += v * b1;
  t8 += v * b2;
  t9 += v * b3;
  t10 += v * b4;
  t11 += v * b5;
  t12 += v * b6;
  t13 += v * b7;
  t14 += v * b8;
  t15 += v * b9;
  t16 += v * b10;
  t17 += v * b11;
  t18 += v * b12;
  t19 += v * b13;
  t20 += v * b14;
  t21 += v * b15;
  v = a[7];
  t7 += v * b0;
  t8 += v * b1;
  t9 += v * b2;
  t10 += v * b3;
  t11 += v * b4;
  t12 += v * b5;
  t13 += v * b6;
  t14 += v * b7;
  t15 += v * b8;
  t16 += v * b9;
  t17 += v * b10;
  t18 += v * b11;
  t19 += v * b12;
  t20 += v * b13;
  t21 += v * b14;
  t22 += v * b15;
  v = a[8];
  t8 += v * b0;
  t9 += v * b1;
  t10 += v * b2;
  t11 += v * b3;
  t12 += v * b4;
  t13 += v * b5;
  t14 += v * b6;
  t15 += v * b7;
  t16 += v * b8;
  t17 += v * b9;
  t18 += v * b10;
  t19 += v * b11;
  t20 += v * b12;
  t21 += v * b13;
  t22 += v * b14;
  t23 += v * b15;
  v = a[9];
  t9 += v * b0;
  t10 += v * b1;
  t11 += v * b2;
  t12 += v * b3;
  t13 += v * b4;
  t14 += v * b5;
  t15 += v * b6;
  t16 += v * b7;
  t17 += v * b8;
  t18 += v * b9;
  t19 += v * b10;
  t20 += v * b11;
  t21 += v * b12;
  t22 += v * b13;
  t23 += v * b14;
  t24 += v * b15;
  v = a[10];
  t10 += v * b0;
  t11 += v * b1;
  t12 += v * b2;
  t13 += v * b3;
  t14 += v * b4;
  t15 += v * b5;
  t16 += v * b6;
  t17 += v * b7;
  t18 += v * b8;
  t19 += v * b9;
  t20 += v * b10;
  t21 += v * b11;
  t22 += v * b12;
  t23 += v * b13;
  t24 += v * b14;
  t25 += v * b15;
  v = a[11];
  t11 += v * b0;
  t12 += v * b1;
  t13 += v * b2;
  t14 += v * b3;
  t15 += v * b4;
  t16 += v * b5;
  t17 += v * b6;
  t18 += v * b7;
  t19 += v * b8;
  t20 += v * b9;
  t21 += v * b10;
  t22 += v * b11;
  t23 += v * b12;
  t24 += v * b13;
  t25 += v * b14;
  t26 += v * b15;
  v = a[12];
  t12 += v * b0;
  t13 += v * b1;
  t14 += v * b2;
  t15 += v * b3;
  t16 += v * b4;
  t17 += v * b5;
  t18 += v * b6;
  t19 += v * b7;
  t20 += v * b8;
  t21 += v * b9;
  t22 += v * b10;
  t23 += v * b11;
  t24 += v * b12;
  t25 += v * b13;
  t26 += v * b14;
  t27 += v * b15;
  v = a[13];
  t13 += v * b0;
  t14 += v * b1;
  t15 += v * b2;
  t16 += v * b3;
  t17 += v * b4;
  t18 += v * b5;
  t19 += v * b6;
  t20 += v * b7;
  t21 += v * b8;
  t22 += v * b9;
  t23 += v * b10;
  t24 += v * b11;
  t25 += v * b12;
  t26 += v * b13;
  t27 += v * b14;
  t28 += v * b15;
  v = a[14];
  t14 += v * b0;
  t15 += v * b1;
  t16 += v * b2;
  t17 += v * b3;
  t18 += v * b4;
  t19 += v * b5;
  t20 += v * b6;
  t21 += v * b7;
  t22 += v * b8;
  t23 += v * b9;
  t24 += v * b10;
  t25 += v * b11;
  t26 += v * b12;
  t27 += v * b13;
  t28 += v * b14;
  t29 += v * b15;
  v = a[15];
  t15 += v * b0;
  t16 += v * b1;
  t17 += v * b2;
  t18 += v * b3;
  t19 += v * b4;
  t20 += v * b5;
  t21 += v * b6;
  t22 += v * b7;
  t23 += v * b8;
  t24 += v * b9;
  t25 += v * b10;
  t26 += v * b11;
  t27 += v * b12;
  t28 += v * b13;
  t29 += v * b14;
  t30 += v * b15;

  t0  += 38 * t16;
  t1  += 38 * t17;
  t2  += 38 * t18;
  t3  += 38 * t19;
  t4  += 38 * t20;
  t5  += 38 * t21;
  t6  += 38 * t22;
  t7  += 38 * t23;
  t8  += 38 * t24;
  t9  += 38 * t25;
  t10 += 38 * t26;
  t11 += 38 * t27;
  t12 += 38 * t28;
  t13 += 38 * t29;
  t14 += 38 * t30;
  

  
  c = 1;
  v =  t0 + c + 65535; c = Math.floor(v / 65536);  t0 = v - c * 65536;
  v =  t1 + c + 65535; c = Math.floor(v / 65536);  t1 = v - c * 65536;
  v =  t2 + c + 65535; c = Math.floor(v / 65536);  t2 = v - c * 65536;
  v =  t3 + c + 65535; c = Math.floor(v / 65536);  t3 = v - c * 65536;
  v =  t4 + c + 65535; c = Math.floor(v / 65536);  t4 = v - c * 65536;
  v =  t5 + c + 65535; c = Math.floor(v / 65536);  t5 = v - c * 65536;
  v =  t6 + c + 65535; c = Math.floor(v / 65536);  t6 = v - c * 65536;
  v =  t7 + c + 65535; c = Math.floor(v / 65536);  t7 = v - c * 65536;
  v =  t8 + c + 65535; c = Math.floor(v / 65536);  t8 = v - c * 65536;
  v =  t9 + c + 65535; c = Math.floor(v / 65536);  t9 = v - c * 65536;
  v = t10 + c + 65535; c = Math.floor(v / 65536); t10 = v - c * 65536;
  v = t11 + c + 65535; c = Math.floor(v / 65536); t11 = v - c * 65536;
  v = t12 + c + 65535; c = Math.floor(v / 65536); t12 = v - c * 65536;
  v = t13 + c + 65535; c = Math.floor(v / 65536); t13 = v - c * 65536;
  v = t14 + c + 65535; c = Math.floor(v / 65536); t14 = v - c * 65536;
  v = t15 + c + 65535; c = Math.floor(v / 65536); t15 = v - c * 65536;
  t0 += c-1 + 37 * (c-1);

  
  c = 1;
  v =  t0 + c + 65535; c = Math.floor(v / 65536);  t0 = v - c * 65536;
  v =  t1 + c + 65535; c = Math.floor(v / 65536);  t1 = v - c * 65536;
  v =  t2 + c + 65535; c = Math.floor(v / 65536);  t2 = v - c * 65536;
  v =  t3 + c + 65535; c = Math.floor(v / 65536);  t3 = v - c * 65536;
  v =  t4 + c + 65535; c = Math.floor(v / 65536);  t4 = v - c * 65536;
  v =  t5 + c + 65535; c = Math.floor(v / 65536);  t5 = v - c * 65536;
  v =  t6 + c + 65535; c = Math.floor(v / 65536);  t6 = v - c * 65536;
  v =  t7 + c + 65535; c = Math.floor(v / 65536);  t7 = v - c * 65536;
  v =  t8 + c + 65535; c = Math.floor(v / 65536);  t8 = v - c * 65536;
  v =  t9 + c + 65535; c = Math.floor(v / 65536);  t9 = v - c * 65536;
  v = t10 + c + 65535; c = Math.floor(v / 65536); t10 = v - c * 65536;
  v = t11 + c + 65535; c = Math.floor(v / 65536); t11 = v - c * 65536;
  v = t12 + c + 65535; c = Math.floor(v / 65536); t12 = v - c * 65536;
  v = t13 + c + 65535; c = Math.floor(v / 65536); t13 = v - c * 65536;
  v = t14 + c + 65535; c = Math.floor(v / 65536); t14 = v - c * 65536;
  v = t15 + c + 65535; c = Math.floor(v / 65536); t15 = v - c * 65536;
  t0 += c-1 + 37 * (c-1);

  o[ 0] = t0;
  o[ 1] = t1;
  o[ 2] = t2;
  o[ 3] = t3;
  o[ 4] = t4;
  o[ 5] = t5;
  o[ 6] = t6;
  o[ 7] = t7;
  o[ 8] = t8;
  o[ 9] = t9;
  o[10] = t10;
  o[11] = t11;
  o[12] = t12;
  o[13] = t13;
  o[14] = t14;
  o[15] = t15;
}

function S(o, a) {
  M(o, a, a);
}

function inv25519(o, i) {
  var c = gf();
  var a;
  for (a = 0; a < 16; a++) c[a] = i[a];
  for (a = 253; a >= 0; a--) {
    S(c, c);
    if(a !== 2 && a !== 4) M(c, c, i);
  }
  for (a = 0; a < 16; a++) o[a] = c[a];
}

function pow2523(o, i) {
  var c = gf();
  var a;
  for (a = 0; a < 16; a++) c[a] = i[a];
  for (a = 250; a >= 0; a--) {
      S(c, c);
      if(a !== 1) M(c, c, i);
  }
  for (a = 0; a < 16; a++) o[a] = c[a];
}

function crypto_scalarmult(q, n, p) {
  var z = new Uint8Array(32);
  var x = new Float64Array(80), r, i;
  var a = gf(), b = gf(), c = gf(),
      d = gf(), e = gf(), f = gf();
  for (i = 0; i < 31; i++) z[i] = n[i];
  z[31]=(n[31]&127)|64;
  z[0]&=248;
  unpack25519(x,p);
  for (i = 0; i < 16; i++) {
    b[i]=x[i];
    d[i]=a[i]=c[i]=0;
  }
  a[0]=d[0]=1;
  for (i=254; i>=0; --i) {
    r=(z[i>>>3]>>>(i&7))&1;
    sel25519(a,b,r);
    sel25519(c,d,r);
    A(e,a,c);
    Z(a,a,c);
    A(c,b,d);
    Z(b,b,d);
    S(d,e);
    S(f,a);
    M(a,c,a);
    M(c,b,e);
    A(e,a,c);
    Z(a,a,c);
    S(b,a);
    Z(c,d,f);
    M(a,c,_121665);
    A(a,a,d);
    M(c,c,a);
    M(a,d,f);
    M(d,b,x);
    S(b,e);
    sel25519(a,b,r);
    sel25519(c,d,r);
  }
  for (i = 0; i < 16; i++) {
    x[i+16]=a[i];
    x[i+32]=c[i];
    x[i+48]=b[i];
    x[i+64]=d[i];
  }
  var x32 = x.subarray(32);
  var x16 = x.subarray(16);
  inv25519(x32,x32);
  M(x16,x16,x32);
  pack25519(q,x16);
  return 0;
}

function crypto_scalarmult_base(q, n) {
  return crypto_scalarmult(q, n, _9);
}

function crypto_box_keypair(y, x) {
  randombytes(x, 32);
  return crypto_scalarmult_base(y, x);
}

function crypto_box_beforenm(k, y, x) {
  var s = new Uint8Array(32);
  crypto_scalarmult(s, x, y);
  return crypto_core_hsalsa20(k, _0, s, sigma);
}

var crypto_box_afternm = crypto_secretbox;
var crypto_box_open_afternm = crypto_secretbox_open;

function crypto_box(c, m, d, n, y, x) {
  var k = new Uint8Array(32);
  crypto_box_beforenm(k, y, x);
  return crypto_box_afternm(c, m, d, n, k);
}

function crypto_box_open(m, c, d, n, y, x) {
  var k = new Uint8Array(32);
  crypto_box_beforenm(k, y, x);
  return crypto_box_open_afternm(m, c, d, n, k);
}

var K = [
  0x428a2f98, 0xd728ae22, 0x71374491, 0x23ef65cd,
  0xb5c0fbcf, 0xec4d3b2f, 0xe9b5dba5, 0x8189dbbc,
  0x3956c25b, 0xf348b538, 0x59f111f1, 0xb605d019,
  0x923f82a4, 0xaf194f9b, 0xab1c5ed5, 0xda6d8118,
  0xd807aa98, 0xa3030242, 0x12835b01, 0x45706fbe,
  0x243185be, 0x4ee4b28c, 0x550c7dc3, 0xd5ffb4e2,
  0x72be5d74, 0xf27b896f, 0x80deb1fe, 0x3b1696b1,
  0x9bdc06a7, 0x25c71235, 0xc19bf174, 0xcf692694,
  0xe49b69c1, 0x9ef14ad2, 0xefbe4786, 0x384f25e3,
  0x0fc19dc6, 0x8b8cd5b5, 0x240ca1cc, 0x77ac9c65,
  0x2de92c6f, 0x592b0275, 0x4a7484aa, 0x6ea6e483,
  0x5cb0a9dc, 0xbd41fbd4, 0x76f988da, 0x831153b5,
  0x983e5152, 0xee66dfab, 0xa831c66d, 0x2db43210,
  0xb00327c8, 0x98fb213f, 0xbf597fc7, 0xbeef0ee4,
  0xc6e00bf3, 0x3da88fc2, 0xd5a79147, 0x930aa725,
  0x06ca6351, 0xe003826f, 0x14292967, 0x0a0e6e70,
  0x27b70a85, 0x46d22ffc, 0x2e1b2138, 0x5c26c926,
  0x4d2c6dfc, 0x5ac42aed, 0x53380d13, 0x9d95b3df,
  0x650a7354, 0x8baf63de, 0x766a0abb, 0x3c77b2a8,
  0x81c2c92e, 0x47edaee6, 0x92722c85, 0x1482353b,
  0xa2bfe8a1, 0x4cf10364, 0xa81a664b, 0xbc423001,
  0xc24b8b70, 0xd0f89791, 0xc76c51a3, 0x0654be30,
  0xd192e819, 0xd6ef5218, 0xd6990624, 0x5565a910,
  0xf40e3585, 0x5771202a, 0x106aa070, 0x32bbd1b8,
  0x19a4c116, 0xb8d2d0c8, 0x1e376c08, 0x5141ab53,
  0x2748774c, 0xdf8eeb99, 0x34b0bcb5, 0xe19b48a8,
  0x391c0cb3, 0xc5c95a63, 0x4ed8aa4a, 0xe3418acb,
  0x5b9cca4f, 0x7763e373, 0x682e6ff3, 0xd6b2b8a3,
  0x748f82ee, 0x5defb2fc, 0x78a5636f, 0x43172f60,
  0x84c87814, 0xa1f0ab72, 0x8cc70208, 0x1a6439ec,
  0x90befffa, 0x23631e28, 0xa4506ceb, 0xde82bde9,
  0xbef9a3f7, 0xb2c67915, 0xc67178f2, 0xe372532b,
  0xca273ece, 0xea26619c, 0xd186b8c7, 0x21c0c207,
  0xeada7dd6, 0xcde0eb1e, 0xf57d4f7f, 0xee6ed178,
  0x06f067aa, 0x72176fba, 0x0a637dc5, 0xa2c898a6,
  0x113f9804, 0xbef90dae, 0x1b710b35, 0x131c471b,
  0x28db77f5, 0x23047d84, 0x32caab7b, 0x40c72493,
  0x3c9ebe0a, 0x15c9bebc, 0x431d67c4, 0x9c100d4c,
  0x4cc5d4be, 0xcb3e42b6, 0x597f299c, 0xfc657e2a,
  0x5fcb6fab, 0x3ad6faec, 0x6c44198c, 0x4a475817
];

function crypto_hashblocks_hl(hh, hl, m, n) {
  var wh = new Int32Array(16), wl = new Int32Array(16),
      bh0, bh1, bh2, bh3, bh4, bh5, bh6, bh7,
      bl0, bl1, bl2, bl3, bl4, bl5, bl6, bl7,
      th, tl, i, j, h, l, a, b, c, d;

  var ah0 = hh[0],
      ah1 = hh[1],
      ah2 = hh[2],
      ah3 = hh[3],
      ah4 = hh[4],
      ah5 = hh[5],
      ah6 = hh[6],
      ah7 = hh[7],

      al0 = hl[0],
      al1 = hl[1],
      al2 = hl[2],
      al3 = hl[3],
      al4 = hl[4],
      al5 = hl[5],
      al6 = hl[6],
      al7 = hl[7];

  var pos = 0;
  while (n >= 128) {
    for (i = 0; i < 16; i++) {
      j = 8 * i + pos;
      wh[i] = (m[j+0] << 24) | (m[j+1] << 16) | (m[j+2] << 8) | m[j+3];
      wl[i] = (m[j+4] << 24) | (m[j+5] << 16) | (m[j+6] << 8) | m[j+7];
    }
    for (i = 0; i < 80; i++) {
      bh0 = ah0;
      bh1 = ah1;
      bh2 = ah2;
      bh3 = ah3;
      bh4 = ah4;
      bh5 = ah5;
      bh6 = ah6;
      bh7 = ah7;

      bl0 = al0;
      bl1 = al1;
      bl2 = al2;
      bl3 = al3;
      bl4 = al4;
      bl5 = al5;
      bl6 = al6;
      bl7 = al7;

      
      h = ah7;
      l = al7;

      a = l & 0xffff; b = l >>> 16;
      c = h & 0xffff; d = h >>> 16;

      
      h = ((ah4 >>> 14) | (al4 << (32-14))) ^ ((ah4 >>> 18) | (al4 << (32-18))) ^ ((al4 >>> (41-32)) | (ah4 << (32-(41-32))));
      l = ((al4 >>> 14) | (ah4 << (32-14))) ^ ((al4 >>> 18) | (ah4 << (32-18))) ^ ((ah4 >>> (41-32)) | (al4 << (32-(41-32))));

      a += l & 0xffff; b += l >>> 16;
      c += h & 0xffff; d += h >>> 16;

      
      h = (ah4 & ah5) ^ (~ah4 & ah6);
      l = (al4 & al5) ^ (~al4 & al6);

      a += l & 0xffff; b += l >>> 16;
      c += h & 0xffff; d += h >>> 16;

      
      h = K[i*2];
      l = K[i*2+1];

      a += l & 0xffff; b += l >>> 16;
      c += h & 0xffff; d += h >>> 16;

      
      h = wh[i%16];
      l = wl[i%16];

      a += l & 0xffff; b += l >>> 16;
      c += h & 0xffff; d += h >>> 16;

      b += a >>> 16;
      c += b >>> 16;
      d += c >>> 16;

      th = c & 0xffff | d << 16;
      tl = a & 0xffff | b << 16;

      
      h = th;
      l = tl;

      a = l & 0xffff; b = l >>> 16;
      c = h & 0xffff; d = h >>> 16;

      
      h = ((ah0 >>> 28) | (al0 << (32-28))) ^ ((al0 >>> (34-32)) | (ah0 << (32-(34-32)))) ^ ((al0 >>> (39-32)) | (ah0 << (32-(39-32))));
      l = ((al0 >>> 28) | (ah0 << (32-28))) ^ ((ah0 >>> (34-32)) | (al0 << (32-(34-32)))) ^ ((ah0 >>> (39-32)) | (al0 << (32-(39-32))));

      a += l & 0xffff; b += l >>> 16;
      c += h & 0xffff; d += h >>> 16;

      
      h = (ah0 & ah1) ^ (ah0 & ah2) ^ (ah1 & ah2);
      l = (al0 & al1) ^ (al0 & al2) ^ (al1 & al2);

      a += l & 0xffff; b += l >>> 16;
      c += h & 0xffff; d += h >>> 16;

      b += a >>> 16;
      c += b >>> 16;
      d += c >>> 16;

      bh7 = (c & 0xffff) | (d << 16);
      bl7 = (a & 0xffff) | (b << 16);

      
      h = bh3;
      l = bl3;

      a = l & 0xffff; b = l >>> 16;
      c = h & 0xffff; d = h >>> 16;

      h = th;
      l = tl;

      a += l & 0xffff; b += l >>> 16;
      c += h & 0xffff; d += h >>> 16;

      b += a >>> 16;
      c += b >>> 16;
      d += c >>> 16;

      bh3 = (c & 0xffff) | (d << 16);
      bl3 = (a & 0xffff) | (b << 16);

      ah1 = bh0;
      ah2 = bh1;
      ah3 = bh2;
      ah4 = bh3;
      ah5 = bh4;
      ah6 = bh5;
      ah7 = bh6;
      ah0 = bh7;

      al1 = bl0;
      al2 = bl1;
      al3 = bl2;
      al4 = bl3;
      al5 = bl4;
      al6 = bl5;
      al7 = bl6;
      al0 = bl7;

      if (i%16 === 15) {
        for (j = 0; j < 16; j++) {
          
          h = wh[j];
          l = wl[j];

          a = l & 0xffff; b = l >>> 16;
          c = h & 0xffff; d = h >>> 16;

          h = wh[(j+9)%16];
          l = wl[(j+9)%16];

          a += l & 0xffff; b += l >>> 16;
          c += h & 0xffff; d += h >>> 16;

          
          th = wh[(j+1)%16];
          tl = wl[(j+1)%16];
          h = ((th >>> 1) | (tl << (32-1))) ^ ((th >>> 8) | (tl << (32-8))) ^ (th >>> 7);
          l = ((tl >>> 1) | (th << (32-1))) ^ ((tl >>> 8) | (th << (32-8))) ^ ((tl >>> 7) | (th << (32-7)));

          a += l & 0xffff; b += l >>> 16;
          c += h & 0xffff; d += h >>> 16;

          
          th = wh[(j+14)%16];
          tl = wl[(j+14)%16];
          h = ((th >>> 19) | (tl << (32-19))) ^ ((tl >>> (61-32)) | (th << (32-(61-32)))) ^ (th >>> 6);
          l = ((tl >>> 19) | (th << (32-19))) ^ ((th >>> (61-32)) | (tl << (32-(61-32)))) ^ ((tl >>> 6) | (th << (32-6)));

          a += l & 0xffff; b += l >>> 16;
          c += h & 0xffff; d += h >>> 16;

          b += a >>> 16;
          c += b >>> 16;
          d += c >>> 16;

          wh[j] = (c & 0xffff) | (d << 16);
          wl[j] = (a & 0xffff) | (b << 16);
        }
      }
    }

    
    h = ah0;
    l = al0;

    a = l & 0xffff; b = l >>> 16;
    c = h & 0xffff; d = h >>> 16;

    h = hh[0];
    l = hl[0];

    a += l & 0xffff; b += l >>> 16;
    c += h & 0xffff; d += h >>> 16;

    b += a >>> 16;
    c += b >>> 16;
    d += c >>> 16;

    hh[0] = ah0 = (c & 0xffff) | (d << 16);
    hl[0] = al0 = (a & 0xffff) | (b << 16);

    h = ah1;
    l = al1;

    a = l & 0xffff; b = l >>> 16;
    c = h & 0xffff; d = h >>> 16;

    h = hh[1];
    l = hl[1];

    a += l & 0xffff; b += l >>> 16;
    c += h & 0xffff; d += h >>> 16;

    b += a >>> 16;
    c += b >>> 16;
    d += c >>> 16;

    hh[1] = ah1 = (c & 0xffff) | (d << 16);
    hl[1] = al1 = (a & 0xffff) | (b << 16);

    h = ah2;
    l = al2;

    a = l & 0xffff; b = l >>> 16;
    c = h & 0xffff; d = h >>> 16;

    h = hh[2];
    l = hl[2];

    a += l & 0xffff; b += l >>> 16;
    c += h & 0xffff; d += h >>> 16;

    b += a >>> 16;
    c += b >>> 16;
    d += c >>> 16;

    hh[2] = ah2 = (c & 0xffff) | (d << 16);
    hl[2] = al2 = (a & 0xffff) | (b << 16);

    h = ah3;
    l = al3;

    a = l & 0xffff; b = l >>> 16;
    c = h & 0xffff; d = h >>> 16;

    h = hh[3];
    l = hl[3];

    a += l & 0xffff; b += l >>> 16;
    c += h & 0xffff; d += h >>> 16;

    b += a >>> 16;
    c += b >>> 16;
    d += c >>> 16;

    hh[3] = ah3 = (c & 0xffff) | (d << 16);
    hl[3] = al3 = (a & 0xffff) | (b << 16);

    h = ah4;
    l = al4;

    a = l & 0xffff; b = l >>> 16;
    c = h & 0xffff; d = h >>> 16;

    h = hh[4];
    l = hl[4];

    a += l & 0xffff; b += l >>> 16;
    c += h & 0xffff; d += h >>> 16;

    b += a >>> 16;
    c += b >>> 16;
    d += c >>> 16;

    hh[4] = ah4 = (c & 0xffff) | (d << 16);
    hl[4] = al4 = (a & 0xffff) | (b << 16);

    h = ah5;
    l = al5;

    a = l & 0xffff; b = l >>> 16;
    c = h & 0xffff; d = h >>> 16;

    h = hh[5];
    l = hl[5];

    a += l & 0xffff; b += l >>> 16;
    c += h & 0xffff; d += h >>> 16;

    b += a >>> 16;
    c += b >>> 16;
    d += c >>> 16;

    hh[5] = ah5 = (c & 0xffff) | (d << 16);
    hl[5] = al5 = (a & 0xffff) | (b << 16);

    h = ah6;
    l = al6;

    a = l & 0xffff; b = l >>> 16;
    c = h & 0xffff; d = h >>> 16;

    h = hh[6];
    l = hl[6];

    a += l & 0xffff; b += l >>> 16;
    c += h & 0xffff; d += h >>> 16;

    b += a >>> 16;
    c += b >>> 16;
    d += c >>> 16;

    hh[6] = ah6 = (c & 0xffff) | (d << 16);
    hl[6] = al6 = (a & 0xffff) | (b << 16);

    h = ah7;
    l = al7;

    a = l & 0xffff; b = l >>> 16;
    c = h & 0xffff; d = h >>> 16;

    h = hh[7];
    l = hl[7];

    a += l & 0xffff; b += l >>> 16;
    c += h & 0xffff; d += h >>> 16;

    b += a >>> 16;
    c += b >>> 16;
    d += c >>> 16;

    hh[7] = ah7 = (c & 0xffff) | (d << 16);
    hl[7] = al7 = (a & 0xffff) | (b << 16);

    pos += 128;
    n -= 128;
  }

  return n;
}

function crypto_hash(out, m, n) {
  var hh = new Int32Array(8),
      hl = new Int32Array(8),
      x = new Uint8Array(256),
      i, b = n;

  hh[0] = 0x6a09e667;
  hh[1] = 0xbb67ae85;
  hh[2] = 0x3c6ef372;
  hh[3] = 0xa54ff53a;
  hh[4] = 0x510e527f;
  hh[5] = 0x9b05688c;
  hh[6] = 0x1f83d9ab;
  hh[7] = 0x5be0cd19;

  hl[0] = 0xf3bcc908;
  hl[1] = 0x84caa73b;
  hl[2] = 0xfe94f82b;
  hl[3] = 0x5f1d36f1;
  hl[4] = 0xade682d1;
  hl[5] = 0x2b3e6c1f;
  hl[6] = 0xfb41bd6b;
  hl[7] = 0x137e2179;

  crypto_hashblocks_hl(hh, hl, m, n);
  n %= 128;

  for (i = 0; i < n; i++) x[i] = m[b-n+i];
  x[n] = 128;

  n = 256-128*(n<112?1:0);
  x[n-9] = 0;
  ts64(x, n-8,  (b / 0x20000000) | 0, b << 3);
  crypto_hashblocks_hl(hh, hl, x, n);

  for (i = 0; i < 8; i++) ts64(out, 8*i, hh[i], hl[i]);

  return 0;
}

function add(p, q) {
  var a = gf(), b = gf(), c = gf(),
      d = gf(), e = gf(), f = gf(),
      g = gf(), h = gf(), t = gf();

  Z(a, p[1], p[0]);
  Z(t, q[1], q[0]);
  M(a, a, t);
  A(b, p[0], p[1]);
  A(t, q[0], q[1]);
  M(b, b, t);
  M(c, p[3], q[3]);
  M(c, c, D2);
  M(d, p[2], q[2]);
  A(d, d, d);
  Z(e, b, a);
  Z(f, d, c);
  A(g, d, c);
  A(h, b, a);

  M(p[0], e, f);
  M(p[1], h, g);
  M(p[2], g, f);
  M(p[3], e, h);
}

function cswap(p, q, b) {
  var i;
  for (i = 0; i < 4; i++) {
    sel25519(p[i], q[i], b);
  }
}

function pack(r, p) {
  var tx = gf(), ty = gf(), zi = gf();
  inv25519(zi, p[2]);
  M(tx, p[0], zi);
  M(ty, p[1], zi);
  pack25519(r, ty);
  r[31] ^= par25519(tx) << 7;
}

function scalarmult(p, q, s) {
  var b, i;
  set25519(p[0], gf0);
  set25519(p[1], gf1);
  set25519(p[2], gf1);
  set25519(p[3], gf0);
  for (i = 255; i >= 0; --i) {
    b = (s[(i/8)|0] >> (i&7)) & 1;
    cswap(p, q, b);
    add(q, p);
    add(p, p);
    cswap(p, q, b);
  }
}

function scalarbase(p, s) {
  var q = [gf(), gf(), gf(), gf()];
  set25519(q[0], X);
  set25519(q[1], Y);
  set25519(q[2], gf1);
  M(q[3], X, Y);
  scalarmult(p, q, s);
}

function crypto_sign_keypair(pk, sk, seeded) {
  var d = new Uint8Array(64);
  var p = [gf(), gf(), gf(), gf()];
  var i;

  if (!seeded) randombytes(sk, 32);
  crypto_hash(d, sk, 32);
  d[0] &= 248;
  d[31] &= 127;
  d[31] |= 64;

  scalarbase(p, d);
  pack(pk, p);

  for (i = 0; i < 32; i++) sk[i+32] = pk[i];
  return 0;
}

var L = new Float64Array([0xed, 0xd3, 0xf5, 0x5c, 0x1a, 0x63, 0x12, 0x58, 0xd6, 0x9c, 0xf7, 0xa2, 0xde, 0xf9, 0xde, 0x14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0x10]);

function modL(r, x) {
  var carry, i, j, k;
  for (i = 63; i >= 32; --i) {
    carry = 0;
    for (j = i - 32, k = i - 12; j < k; ++j) {
      x[j] += carry - 16 * x[i] * L[j - (i - 32)];
      carry = Math.floor((x[j] + 128) / 256);
      x[j] -= carry * 256;
    }
    x[j] += carry;
    x[i] = 0;
  }
  carry = 0;
  for (j = 0; j < 32; j++) {
    x[j] += carry - (x[31] >> 4) * L[j];
    carry = x[j] >> 8;
    x[j] &= 255;
  }
  for (j = 0; j < 32; j++) x[j] -= carry * L[j];
  for (i = 0; i < 32; i++) {
    x[i+1] += x[i] >> 8;
    r[i] = x[i] & 255;
  }
}

function reduce(r) {
  var x = new Float64Array(64), i;
  for (i = 0; i < 64; i++) x[i] = r[i];
  for (i = 0; i < 64; i++) r[i] = 0;
  modL(r, x);
}


function crypto_sign(sm, m, n, sk) {
  var d = new Uint8Array(64), h = new Uint8Array(64), r = new Uint8Array(64);
  var i, j, x = new Float64Array(64);
  var p = [gf(), gf(), gf(), gf()];

  crypto_hash(d, sk, 32);
  d[0] &= 248;
  d[31] &= 127;
  d[31] |= 64;

  var smlen = n + 64;
  for (i = 0; i < n; i++) sm[64 + i] = m[i];
  for (i = 0; i < 32; i++) sm[32 + i] = d[32 + i];

  crypto_hash(r, sm.subarray(32), n+32);
  reduce(r);
  scalarbase(p, r);
  pack(sm, p);

  for (i = 32; i < 64; i++) sm[i] = sk[i];
  crypto_hash(h, sm, n + 64);
  reduce(h);

  for (i = 0; i < 64; i++) x[i] = 0;
  for (i = 0; i < 32; i++) x[i] = r[i];
  for (i = 0; i < 32; i++) {
    for (j = 0; j < 32; j++) {
      x[i+j] += h[i] * d[j];
    }
  }

  modL(sm.subarray(32), x);
  return smlen;
}

function unpackneg(r, p) {
  var t = gf(), chk = gf(), num = gf(),
      den = gf(), den2 = gf(), den4 = gf(),
      den6 = gf();

  set25519(r[2], gf1);
  unpack25519(r[1], p);
  S(num, r[1]);
  M(den, num, D);
  Z(num, num, r[2]);
  A(den, r[2], den);

  S(den2, den);
  S(den4, den2);
  M(den6, den4, den2);
  M(t, den6, num);
  M(t, t, den);

  pow2523(t, t);
  M(t, t, num);
  M(t, t, den);
  M(t, t, den);
  M(r[0], t, den);

  S(chk, r[0]);
  M(chk, chk, den);
  if (neq25519(chk, num)) M(r[0], r[0], I);

  S(chk, r[0]);
  M(chk, chk, den);
  if (neq25519(chk, num)) return -1;

  if (par25519(r[0]) === (p[31]>>7)) Z(r[0], gf0, r[0]);

  M(r[3], r[0], r[1]);
  return 0;
}

function crypto_sign_open(m, sm, n, pk) {
  var i;
  var t = new Uint8Array(32), h = new Uint8Array(64);
  var p = [gf(), gf(), gf(), gf()],
      q = [gf(), gf(), gf(), gf()];

  if (n < 64) return -1;

  if (unpackneg(q, pk)) return -1;

  for (i = 0; i < n; i++) m[i] = sm[i];
  for (i = 0; i < 32; i++) m[i+32] = pk[i];
  crypto_hash(h, m, n);
  reduce(h);
  scalarmult(p, q, h);

  scalarbase(q, sm.subarray(32));
  add(p, q);
  pack(t, p);

  n -= 64;
  if (crypto_verify_32(sm, 0, t, 0)) {
    for (i = 0; i < n; i++) m[i] = 0;
    return -1;
  }

  for (i = 0; i < n; i++) m[i] = sm[i + 64];
  return n;
}

var crypto_secretbox_KEYBYTES = 32,
    crypto_secretbox_NONCEBYTES = 24,
    crypto_secretbox_ZEROBYTES = 32,
    crypto_secretbox_BOXZEROBYTES = 16,
    crypto_scalarmult_BYTES = 32,
    crypto_scalarmult_SCALARBYTES = 32,
    crypto_box_PUBLICKEYBYTES = 32,
    crypto_box_SECRETKEYBYTES = 32,
    crypto_box_BEFORENMBYTES = 32,
    crypto_box_NONCEBYTES = crypto_secretbox_NONCEBYTES,
    crypto_box_ZEROBYTES = crypto_secretbox_ZEROBYTES,
    crypto_box_BOXZEROBYTES = crypto_secretbox_BOXZEROBYTES,
    crypto_sign_BYTES = 64,
    crypto_sign_PUBLICKEYBYTES = 32,
    crypto_sign_SECRETKEYBYTES = 64,
    crypto_sign_SEEDBYTES = 32,
    crypto_hash_BYTES = 64;

nacl.lowlevel = {
  crypto_core_hsalsa20: crypto_core_hsalsa20,
  crypto_stream_xor: crypto_stream_xor,
  crypto_stream: crypto_stream,
  crypto_stream_salsa20_xor: crypto_stream_salsa20_xor,
  crypto_stream_salsa20: crypto_stream_salsa20,
  crypto_onetimeauth: crypto_onetimeauth,
  crypto_onetimeauth_verify: crypto_onetimeauth_verify,
  crypto_verify_16: crypto_verify_16,
  crypto_verify_32: crypto_verify_32,
  crypto_secretbox: crypto_secretbox,
  crypto_secretbox_open: crypto_secretbox_open,
  crypto_scalarmult: crypto_scalarmult,
  crypto_scalarmult_base: crypto_scalarmult_base,
  crypto_box_beforenm: crypto_box_beforenm,
  crypto_box_afternm: crypto_box_afternm,
  crypto_box: crypto_box,
  crypto_box_open: crypto_box_open,
  crypto_box_keypair: crypto_box_keypair,
  crypto_hash: crypto_hash,
  crypto_sign: crypto_sign,
  crypto_sign_keypair: crypto_sign_keypair,
  crypto_sign_open: crypto_sign_open,

  crypto_secretbox_KEYBYTES: crypto_secretbox_KEYBYTES,
  crypto_secretbox_NONCEBYTES: crypto_secretbox_NONCEBYTES,
  crypto_secretbox_ZEROBYTES: crypto_secretbox_ZEROBYTES,
  crypto_secretbox_BOXZEROBYTES: crypto_secretbox_BOXZEROBYTES,
  crypto_scalarmult_BYTES: crypto_scalarmult_BYTES,
  crypto_scalarmult_SCALARBYTES: crypto_scalarmult_SCALARBYTES,
  crypto_box_PUBLICKEYBYTES: crypto_box_PUBLICKEYBYTES,
  crypto_box_SECRETKEYBYTES: crypto_box_SECRETKEYBYTES,
  crypto_box_BEFORENMBYTES: crypto_box_BEFORENMBYTES,
  crypto_box_NONCEBYTES: crypto_box_NONCEBYTES,
  crypto_box_ZEROBYTES: crypto_box_ZEROBYTES,
  crypto_box_BOXZEROBYTES: crypto_box_BOXZEROBYTES,
  crypto_sign_BYTES: crypto_sign_BYTES,
  crypto_sign_PUBLICKEYBYTES: crypto_sign_PUBLICKEYBYTES,
  crypto_sign_SECRETKEYBYTES: crypto_sign_SECRETKEYBYTES,
  crypto_sign_SEEDBYTES: crypto_sign_SEEDBYTES,
  crypto_hash_BYTES: crypto_hash_BYTES,

  gf: gf,
  D: D,
  L: L,
  pack25519: pack25519,
  unpack25519: unpack25519,
  M: M,
  A: A,
  S: S,
  Z: Z,
  pow2523: pow2523,
  add: add,
  set25519: set25519,
  modL: modL,
  scalarmult: scalarmult,
  scalarbase: scalarbase,
};


function checkLengths(k, n) {
  if (k.length !== crypto_secretbox_KEYBYTES) throw new Error('bad key size');
  if (n.length !== crypto_secretbox_NONCEBYTES) throw new Error('bad nonce size');
}

function checkBoxLengths(pk, sk) {
  if (pk.length !== crypto_box_PUBLICKEYBYTES) throw new Error('bad public key size');
  if (sk.length !== crypto_box_SECRETKEYBYTES) throw new Error('bad secret key size');
}

function checkArrayTypes() {
  for (var i = 0; i < arguments.length; i++) {
    if (!(arguments[i] instanceof Uint8Array))
      throw new TypeError('unexpected type, use Uint8Array');
  }
}

function cleanup(arr) {
  for (var i = 0; i < arr.length; i++) arr[i] = 0;
}

nacl.randomBytes = function(n) {
  var b = new Uint8Array(n);
  randombytes(b, n);
  return b;
};

nacl.secretbox = function(msg, nonce, key) {
  checkArrayTypes(msg, nonce, key);
  checkLengths(key, nonce);
  var m = new Uint8Array(crypto_secretbox_ZEROBYTES + msg.length);
  var c = new Uint8Array(m.length);
  for (var i = 0; i < msg.length; i++) m[i+crypto_secretbox_ZEROBYTES] = msg[i];
  crypto_secretbox(c, m, m.length, nonce, key);
  return c.subarray(crypto_secretbox_BOXZEROBYTES);
};

nacl.secretbox.open = function(box, nonce, key) {
  checkArrayTypes(box, nonce, key);
  checkLengths(key, nonce);
  var c = new Uint8Array(crypto_secretbox_BOXZEROBYTES + box.length);
  var m = new Uint8Array(c.length);
  for (var i = 0; i < box.length; i++) c[i+crypto_secretbox_BOXZEROBYTES] = box[i];
  if (c.length < 32) return null;
  if (crypto_secretbox_open(m, c, c.length, nonce, key) !== 0) return null;
  return m.subarray(crypto_secretbox_ZEROBYTES);
};

nacl.secretbox.keyLength = crypto_secretbox_KEYBYTES;
nacl.secretbox.nonceLength = crypto_secretbox_NONCEBYTES;
nacl.secretbox.overheadLength = crypto_secretbox_BOXZEROBYTES;

nacl.scalarMult = function(n, p) {
  checkArrayTypes(n, p);
  if (n.length !== crypto_scalarmult_SCALARBYTES) throw new Error('bad n size');
  if (p.length !== crypto_scalarmult_BYTES) throw new Error('bad p size');
  var q = new Uint8Array(crypto_scalarmult_BYTES);
  crypto_scalarmult(q, n, p);
  return q;
};

nacl.scalarMult.base = function(n) {
  checkArrayTypes(n);
  if (n.length !== crypto_scalarmult_SCALARBYTES) throw new Error('bad n size');
  var q = new Uint8Array(crypto_scalarmult_BYTES);
  crypto_scalarmult_base(q, n);
  return q;
};

nacl.scalarMult.scalarLength = crypto_scalarmult_SCALARBYTES;
nacl.scalarMult.groupElementLength = crypto_scalarmult_BYTES;

nacl.box = function(msg, nonce, publicKey, secretKey) {
  var k = nacl.box.before(publicKey, secretKey);
  return nacl.secretbox(msg, nonce, k);
};

nacl.box.before = function(publicKey, secretKey) {
  checkArrayTypes(publicKey, secretKey);
  checkBoxLengths(publicKey, secretKey);
  var k = new Uint8Array(crypto_box_BEFORENMBYTES);
  crypto_box_beforenm(k, publicKey, secretKey);
  return k;
};

nacl.box.after = nacl.secretbox;

nacl.box.open = function(msg, nonce, publicKey, secretKey) {
  var k = nacl.box.before(publicKey, secretKey);
  return nacl.secretbox.open(msg, nonce, k);
};

nacl.box.open.after = nacl.secretbox.open;

nacl.box.keyPair = function() {
  var pk = new Uint8Array(crypto_box_PUBLICKEYBYTES);
  var sk = new Uint8Array(crypto_box_SECRETKEYBYTES);
  crypto_box_keypair(pk, sk);
  return {publicKey: pk, secretKey: sk};
};

nacl.box.keyPair.fromSecretKey = function(secretKey) {
  checkArrayTypes(secretKey);
  if (secretKey.length !== crypto_box_SECRETKEYBYTES)
    throw new Error('bad secret key size');
  var pk = new Uint8Array(crypto_box_PUBLICKEYBYTES);
  crypto_scalarmult_base(pk, secretKey);
  return {publicKey: pk, secretKey: new Uint8Array(secretKey)};
};

nacl.box.publicKeyLength = crypto_box_PUBLICKEYBYTES;
nacl.box.secretKeyLength = crypto_box_SECRETKEYBYTES;
nacl.box.sharedKeyLength = crypto_box_BEFORENMBYTES;
nacl.box.nonceLength = crypto_box_NONCEBYTES;
nacl.box.overheadLength = nacl.secretbox.overheadLength;

nacl.sign = function(msg, secretKey) {
  checkArrayTypes(msg, secretKey);
  if (secretKey.length !== crypto_sign_SECRETKEYBYTES)
    throw new Error('bad secret key size');
  var signedMsg = new Uint8Array(crypto_sign_BYTES+msg.length);
  crypto_sign(signedMsg, msg, msg.length, secretKey);
  return signedMsg;
};

nacl.sign.open = function(signedMsg, publicKey) {
  checkArrayTypes(signedMsg, publicKey);
  if (publicKey.length !== crypto_sign_PUBLICKEYBYTES)
    throw new Error('bad public key size');
  var tmp = new Uint8Array(signedMsg.length);
  var mlen = crypto_sign_open(tmp, signedMsg, signedMsg.length, publicKey);
  if (mlen < 0) return null;
  var m = new Uint8Array(mlen);
  for (var i = 0; i < m.length; i++) m[i] = tmp[i];
  return m;
};

nacl.sign.detached = function(msg, secretKey) {
  var signedMsg = nacl.sign(msg, secretKey);
  var sig = new Uint8Array(crypto_sign_BYTES);
  for (var i = 0; i < sig.length; i++) sig[i] = signedMsg[i];
  return sig;
};

nacl.sign.detached.verify = function(msg, sig, publicKey) {
  checkArrayTypes(msg, sig, publicKey);
  if (sig.length !== crypto_sign_BYTES)
    throw new Error('bad signature size');
  if (publicKey.length !== crypto_sign_PUBLICKEYBYTES)
    throw new Error('bad public key size');
  var sm = new Uint8Array(crypto_sign_BYTES + msg.length);
  var m = new Uint8Array(crypto_sign_BYTES + msg.length);
  var i;
  for (i = 0; i < crypto_sign_BYTES; i++) sm[i] = sig[i];
  for (i = 0; i < msg.length; i++) sm[i+crypto_sign_BYTES] = msg[i];
  return (crypto_sign_open(m, sm, sm.length, publicKey) >= 0);
};

nacl.sign.keyPair = function() {
  var pk = new Uint8Array(crypto_sign_PUBLICKEYBYTES);
  var sk = new Uint8Array(crypto_sign_SECRETKEYBYTES);
  crypto_sign_keypair(pk, sk);
  return {publicKey: pk, secretKey: sk};
};

nacl.sign.keyPair.fromSecretKey = function(secretKey) {
  checkArrayTypes(secretKey);
  if (secretKey.length !== crypto_sign_SECRETKEYBYTES)
    throw new Error('bad secret key size');
  var pk = new Uint8Array(crypto_sign_PUBLICKEYBYTES);
  for (var i = 0; i < pk.length; i++) pk[i] = secretKey[32+i];
  return {publicKey: pk, secretKey: new Uint8Array(secretKey)};
};

nacl.sign.keyPair.fromSeed = function(seed) {
  checkArrayTypes(seed);
  if (seed.length !== crypto_sign_SEEDBYTES)
    throw new Error('bad seed size');
  var pk = new Uint8Array(crypto_sign_PUBLICKEYBYTES);
  var sk = new Uint8Array(crypto_sign_SECRETKEYBYTES);
  for (var i = 0; i < 32; i++) sk[i] = seed[i];
  crypto_sign_keypair(pk, sk, true);
  return {publicKey: pk, secretKey: sk};
};

nacl.sign.publicKeyLength = crypto_sign_PUBLICKEYBYTES;
nacl.sign.secretKeyLength = crypto_sign_SECRETKEYBYTES;
nacl.sign.seedLength = crypto_sign_SEEDBYTES;
nacl.sign.signatureLength = crypto_sign_BYTES;

nacl.hash = function(msg) {
  checkArrayTypes(msg);
  var h = new Uint8Array(crypto_hash_BYTES);
  crypto_hash(h, msg, msg.length);
  return h;
};

nacl.hash.hashLength = crypto_hash_BYTES;

nacl.verify = function(x, y) {
  checkArrayTypes(x, y);
  
  if (x.length === 0 || y.length === 0) return false;
  if (x.length !== y.length) return false;
  return (vn(x, 0, y, 0, x.length) === 0) ? true : false;
};

nacl.setPRNG = function(fn) {
  randombytes = fn;
};

(function() {
  
  
  var crypto = typeof self !== 'undefined' ? (self.crypto || self.msCrypto) : null;
  if (crypto && crypto.getRandomValues) {
    
    var QUOTA = 65536;
    nacl.setPRNG(function(x, n) {
      var i, v = new Uint8Array(n);
      for (i = 0; i < n; i += QUOTA) {
        crypto.getRandomValues(v.subarray(i, i + Math.min(n - i, QUOTA)));
      }
      for (i = 0; i < n; i++) x[i] = v[i];
      cleanup(v);
    });
  } else if (typeof require !== 'undefined') {
    
    crypto = require('crypto');
    if (crypto && crypto.randomBytes) {
      nacl.setPRNG(function(x, n) {
        var i, v = crypto.randomBytes(n);
        for (i = 0; i < n; i++) x[i] = v[i];
        cleanup(v);
      });
    }
  }
})();

})(typeof module !== 'undefined' && module.exports ? module.exports : (self.nacl = self.nacl || {}));

},{"crypto":94}],92:[function(require,module,exports){
'use strict'

exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}



revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  
  
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}


function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 
  var parts = []
  var maxChunkLength = 16383 

  
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}

},{}],93:[function(require,module,exports){
;(function (globalObject) {
  'use strict';




  var BigNumber,
    isNumeric = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,
    mathceil = Math.ceil,
    mathfloor = Math.floor,

    bignumberError = '[BigNumber Error] ',
    tooManyDigits = bignumberError + 'Number primitive has more than 15 significant digits: ',

    BASE = 1e14,
    LOG_BASE = 14,
    MAX_SAFE_INTEGER = 0x1fffffffffffff,         
    
    POWS_TEN = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13],
    SQRT_BASE = 1e7,

    
    
    
    MAX = 1E9;                                   


  
  function clone(configObject) {
    var div, convertBase, parseNumeric,
      P = BigNumber.prototype = { constructor: BigNumber, toString: null, valueOf: null },
      ONE = new BigNumber(1),


      


      
      

      
      DECIMAL_PLACES = 20,                     

      
      
      
      
      
      
      
      
      
      
      
      ROUNDING_MODE = 4,                       

      

      
      
      TO_EXP_NEG = -7,                         

      
      
      TO_EXP_POS = 21,                         

      

      
      
      MIN_EXP = -1e7,                          

      
      
      
      MAX_EXP = 1e7,                           

      
      CRYPTO = false,                          

      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      MODULO_MODE = 1,                         

      
      
      POW_PRECISION = 0,                       

      
      FORMAT = {
        prefix: '',
        groupSize: 3,
        secondaryGroupSize: 0,
        groupSeparator: ',',
        decimalSeparator: '.',
        fractionGroupSize: 0,
        fractionGroupSeparator: '\xA0',        
        suffix: ''
      },

      
      
      
      ALPHABET = '0123456789abcdefghijklmnopqrstuvwxyz',
      alphabetHasNormalDecimalDigits = true;


    


    


    
    function BigNumber(v, b) {
      var alphabet, c, caseChanged, e, i, isNum, len, str,
        x = this;

      
      if (!(x instanceof BigNumber)) return new BigNumber(v, b);

      if (b == null) {

        if (v && v._isBigNumber === true) {
          x.s = v.s;

          if (!v.c || v.e > MAX_EXP) {
            x.c = x.e = null;
          } else if (v.e < MIN_EXP) {
            x.c = [x.e = 0];
          } else {
            x.e = v.e;
            x.c = v.c.slice();
          }

          return;
        }

        if ((isNum = typeof v == 'number') && v * 0 == 0) {

          
          x.s = 1 / v < 0 ? (v = -v, -1) : 1;

          
          if (v === ~~v) {
            for (e = 0, i = v; i >= 10; i /= 10, e++);

            if (e > MAX_EXP) {
              x.c = x.e = null;
            } else {
              x.e = e;
              x.c = [v];
            }

            return;
          }

          str = String(v);
        } else {

          if (!isNumeric.test(str = String(v))) return parseNumeric(x, str, isNum);

          x.s = str.charCodeAt(0) == 45 ? (str = str.slice(1), -1) : 1;
        }

        
        if ((e = str.indexOf('.')) > -1) str = str.replace('.', '');

        
        if ((i = str.search(/e/i)) > 0) {

          
          if (e < 0) e = i;
          e += +str.slice(i + 1);
          str = str.substring(0, i);
        } else if (e < 0) {

          
          e = str.length;
        }

      } else {

        
        intCheck(b, 2, ALPHABET.length, 'Base');

        
        
        if (b == 10 && alphabetHasNormalDecimalDigits) {
          x = new BigNumber(v);
          return round(x, DECIMAL_PLACES + x.e + 1, ROUNDING_MODE);
        }

        str = String(v);

        if (isNum = typeof v == 'number') {

          
          if (v * 0 != 0) return parseNumeric(x, str, isNum, b);

          x.s = 1 / v < 0 ? (str = str.slice(1), -1) : 1;

          
          if (BigNumber.DEBUG && str.replace(/^0\.0*|\./, '').length > 15) {
            throw Error
             (tooManyDigits + v);
          }
        } else {
          x.s = str.charCodeAt(0) === 45 ? (str = str.slice(1), -1) : 1;
        }

        alphabet = ALPHABET.slice(0, b);
        e = i = 0;

        
        
        for (len = str.length; i < len; i++) {
          if (alphabet.indexOf(c = str.charAt(i)) < 0) {
            if (c == '.') {

              
              if (i > e) {
                e = len;
                continue;
              }
            } else if (!caseChanged) {

              
              if (str == str.toUpperCase() && (str = str.toLowerCase()) ||
                  str == str.toLowerCase() && (str = str.toUpperCase())) {
                caseChanged = true;
                i = -1;
                e = 0;
                continue;
              }
            }

            return parseNumeric(x, String(v), isNum, b);
          }
        }

        
        isNum = false;
        str = convertBase(str, b, 10, x.s);

        
        if ((e = str.indexOf('.')) > -1) str = str.replace('.', '');
        else e = str.length;
      }

      
      for (i = 0; str.charCodeAt(i) === 48; i++);

      
      for (len = str.length; str.charCodeAt(--len) === 48;);

      if (str = str.slice(i, ++len)) {
        len -= i;

        
        if (isNum && BigNumber.DEBUG &&
          len > 15 && (v > MAX_SAFE_INTEGER || v !== mathfloor(v))) {
            throw Error
             (tooManyDigits + (x.s * v));
        }

         
        if ((e = e - i - 1) > MAX_EXP) {

          
          x.c = x.e = null;

        
        } else if (e < MIN_EXP) {

          
          x.c = [x.e = 0];
        } else {
          x.e = e;
          x.c = [];

          

          
          
          i = (e + 1) % LOG_BASE;
          if (e < 0) i += LOG_BASE;  

          if (i < len) {
            if (i) x.c.push(+str.slice(0, i));

            for (len -= LOG_BASE; i < len;) {
              x.c.push(+str.slice(i, i += LOG_BASE));
            }

            i = LOG_BASE - (str = str.slice(i)).length;
          } else {
            i -= len;
          }

          for (; i--; str += '0');
          x.c.push(+str);
        }
      } else {

        
        x.c = [x.e = 0];
      }
    }


    


    BigNumber.clone = clone;

    BigNumber.ROUND_UP = 0;
    BigNumber.ROUND_DOWN = 1;
    BigNumber.ROUND_CEIL = 2;
    BigNumber.ROUND_FLOOR = 3;
    BigNumber.ROUND_HALF_UP = 4;
    BigNumber.ROUND_HALF_DOWN = 5;
    BigNumber.ROUND_HALF_EVEN = 6;
    BigNumber.ROUND_HALF_CEIL = 7;
    BigNumber.ROUND_HALF_FLOOR = 8;
    BigNumber.EUCLID = 9;


    
    BigNumber.config = BigNumber.set = function (obj) {
      var p, v;

      if (obj != null) {

        if (typeof obj == 'object') {

          
          
          if (obj.hasOwnProperty(p = 'DECIMAL_PLACES')) {
            v = obj[p];
            intCheck(v, 0, MAX, p);
            DECIMAL_PLACES = v;
          }

          
          
          if (obj.hasOwnProperty(p = 'ROUNDING_MODE')) {
            v = obj[p];
            intCheck(v, 0, 8, p);
            ROUNDING_MODE = v;
          }

          
          
          
          
          if (obj.hasOwnProperty(p = 'EXPONENTIAL_AT')) {
            v = obj[p];
            if (v && v.pop) {
              intCheck(v[0], -MAX, 0, p);
              intCheck(v[1], 0, MAX, p);
              TO_EXP_NEG = v[0];
              TO_EXP_POS = v[1];
            } else {
              intCheck(v, -MAX, MAX, p);
              TO_EXP_NEG = -(TO_EXP_POS = v < 0 ? -v : v);
            }
          }

          
          
          
          if (obj.hasOwnProperty(p = 'RANGE')) {
            v = obj[p];
            if (v && v.pop) {
              intCheck(v[0], -MAX, -1, p);
              intCheck(v[1], 1, MAX, p);
              MIN_EXP = v[0];
              MAX_EXP = v[1];
            } else {
              intCheck(v, -MAX, MAX, p);
              if (v) {
                MIN_EXP = -(MAX_EXP = v < 0 ? -v : v);
              } else {
                throw Error
                 (bignumberError + p + ' cannot be zero: ' + v);
              }
            }
          }

          
          
          
          if (obj.hasOwnProperty(p = 'CRYPTO')) {
            v = obj[p];
            if (v === !!v) {
              if (v) {
                if (typeof crypto != 'undefined' && crypto &&
                 (crypto.getRandomValues || crypto.randomBytes)) {
                  CRYPTO = v;
                } else {
                  CRYPTO = !v;
                  throw Error
                   (bignumberError + 'crypto unavailable');
                }
              } else {
                CRYPTO = v;
              }
            } else {
              throw Error
               (bignumberError + p + ' not true or false: ' + v);
            }
          }

          
          
          if (obj.hasOwnProperty(p = 'MODULO_MODE')) {
            v = obj[p];
            intCheck(v, 0, 9, p);
            MODULO_MODE = v;
          }

          
          
          if (obj.hasOwnProperty(p = 'POW_PRECISION')) {
            v = obj[p];
            intCheck(v, 0, MAX, p);
            POW_PRECISION = v;
          }

          
          
          if (obj.hasOwnProperty(p = 'FORMAT')) {
            v = obj[p];
            if (typeof v == 'object') FORMAT = v;
            else throw Error
             (bignumberError + p + ' not an object: ' + v);
          }

          
          
          if (obj.hasOwnProperty(p = 'ALPHABET')) {
            v = obj[p];

            
            
            if (typeof v == 'string' && !/^.?$|[+\-.\s]|(.).*\1/.test(v)) {
              alphabetHasNormalDecimalDigits = v.slice(0, 10) == '0123456789';
              ALPHABET = v;
            } else {
              throw Error
               (bignumberError + p + ' invalid: ' + v);
            }
          }

        } else {

          
          throw Error
           (bignumberError + 'Object expected: ' + obj);
        }
      }

      return {
        DECIMAL_PLACES: DECIMAL_PLACES,
        ROUNDING_MODE: ROUNDING_MODE,
        EXPONENTIAL_AT: [TO_EXP_NEG, TO_EXP_POS],
        RANGE: [MIN_EXP, MAX_EXP],
        CRYPTO: CRYPTO,
        MODULO_MODE: MODULO_MODE,
        POW_PRECISION: POW_PRECISION,
        FORMAT: FORMAT,
        ALPHABET: ALPHABET
      };
    };


    
    BigNumber.isBigNumber = function (v) {
      if (!v || v._isBigNumber !== true) return false;
      if (!BigNumber.DEBUG) return true;

      var i, n,
        c = v.c,
        e = v.e,
        s = v.s;

      out: if ({}.toString.call(c) == '[object Array]') {

        if ((s === 1 || s === -1) && e >= -MAX && e <= MAX && e === mathfloor(e)) {

          
          if (c[0] === 0) {
            if (e === 0 && c.length === 1) return true;
            break out;
          }

          
          i = (e + 1) % LOG_BASE;
          if (i < 1) i += LOG_BASE;

          
          
          if (String(c[0]).length == i) {

            for (i = 0; i < c.length; i++) {
              n = c[i];
              if (n < 0 || n >= BASE || n !== mathfloor(n)) break out;
            }

            
            if (n !== 0) return true;
          }
        }

      
      } else if (c === null && e === null && (s === null || s === 1 || s === -1)) {
        return true;
      }

      throw Error
        (bignumberError + 'Invalid BigNumber: ' + v);
    };


    
    BigNumber.maximum = BigNumber.max = function () {
      return maxOrMin(arguments, P.lt);
    };


    
    BigNumber.minimum = BigNumber.min = function () {
      return maxOrMin(arguments, P.gt);
    };


    
    BigNumber.random = (function () {
      var pow2_53 = 0x20000000000000;

      
      
      
      
      var random53bitInt = (Math.random() * pow2_53) & 0x1fffff
       ? function () { return mathfloor(Math.random() * pow2_53); }
       : function () { return ((Math.random() * 0x40000000 | 0) * 0x800000) +
         (Math.random() * 0x800000 | 0); };

      return function (dp) {
        var a, b, e, k, v,
          i = 0,
          c = [],
          rand = new BigNumber(ONE);

        if (dp == null) dp = DECIMAL_PLACES;
        else intCheck(dp, 0, MAX);

        k = mathceil(dp / LOG_BASE);

        if (CRYPTO) {

          
          if (crypto.getRandomValues) {

            a = crypto.getRandomValues(new Uint32Array(k *= 2));

            for (; i < k;) {

              
              
              
              
              
              
              v = a[i] * 0x20000 + (a[i + 1] >>> 11);

              
              
              
              
              if (v >= 9e15) {
                b = crypto.getRandomValues(new Uint32Array(2));
                a[i] = b[0];
                a[i + 1] = b[1];
              } else {

                
                
                c.push(v % 1e14);
                i += 2;
              }
            }
            i = k / 2;

          
          } else if (crypto.randomBytes) {

            
            a = crypto.randomBytes(k *= 7);

            for (; i < k;) {

              
              
              
              
              v = ((a[i] & 31) * 0x1000000000000) + (a[i + 1] * 0x10000000000) +
                 (a[i + 2] * 0x100000000) + (a[i + 3] * 0x1000000) +
                 (a[i + 4] << 16) + (a[i + 5] << 8) + a[i + 6];

              if (v >= 9e15) {
                crypto.randomBytes(7).copy(a, i);
              } else {

                
                c.push(v % 1e14);
                i += 7;
              }
            }
            i = k / 7;
          } else {
            CRYPTO = false;
            throw Error
             (bignumberError + 'crypto unavailable');
          }
        }

        
        if (!CRYPTO) {

          for (; i < k;) {
            v = random53bitInt();
            if (v < 9e15) c[i++] = v % 1e14;
          }
        }

        k = c[--i];
        dp %= LOG_BASE;

        
        if (k && dp) {
          v = POWS_TEN[LOG_BASE - dp];
          c[i] = mathfloor(k / v) * v;
        }

        
        for (; c[i] === 0; c.pop(), i--);

        
        if (i < 0) {
          c = [e = 0];
        } else {

          
          for (e = -1 ; c[0] === 0; c.splice(0, 1), e -= LOG_BASE);

          
          for (i = 1, v = c[0]; v >= 10; v /= 10, i++);

          
          if (i < LOG_BASE) e -= LOG_BASE - i;
        }

        rand.e = e;
        rand.c = c;
        return rand;
      };
    })();


    
    BigNumber.sum = function () {
      var i = 1,
        args = arguments,
        sum = new BigNumber(args[0]);
      for (; i < args.length;) sum = sum.plus(args[i++]);
      return sum;
    };


    


    
    convertBase = (function () {
      var decimal = '0123456789';

      
      function toBaseOut(str, baseIn, baseOut, alphabet) {
        var j,
          arr = [0],
          arrL,
          i = 0,
          len = str.length;

        for (; i < len;) {
          for (arrL = arr.length; arrL--; arr[arrL] *= baseIn);

          arr[0] += alphabet.indexOf(str.charAt(i++));

          for (j = 0; j < arr.length; j++) {

            if (arr[j] > baseOut - 1) {
              if (arr[j + 1] == null) arr[j + 1] = 0;
              arr[j + 1] += arr[j] / baseOut | 0;
              arr[j] %= baseOut;
            }
          }
        }

        return arr.reverse();
      }

      
      
      
      return function (str, baseIn, baseOut, sign, callerIsToString) {
        var alphabet, d, e, k, r, x, xc, y,
          i = str.indexOf('.'),
          dp = DECIMAL_PLACES,
          rm = ROUNDING_MODE;

        
        if (i >= 0) {
          k = POW_PRECISION;

          
          POW_PRECISION = 0;
          str = str.replace('.', '');
          y = new BigNumber(baseIn);
          x = y.pow(str.length - i);
          POW_PRECISION = k;

          
          

          y.c = toBaseOut(toFixedPoint(coeffToString(x.c), x.e, '0'),
           10, baseOut, decimal);
          y.e = y.c.length;
        }

        

        xc = toBaseOut(str, baseIn, baseOut, callerIsToString
         ? (alphabet = ALPHABET, decimal)
         : (alphabet = decimal, ALPHABET));

        
        e = k = xc.length;

        
        for (; xc[--k] == 0; xc.pop());

        
        if (!xc[0]) return alphabet.charAt(0);

        
        if (i < 0) {
          --e;
        } else {
          x.c = xc;
          x.e = e;

          
          x.s = sign;
          x = div(x, y, dp, rm, baseOut);
          xc = x.c;
          r = x.r;
          e = x.e;
        }

        

        
        d = e + dp + 1;

        
        i = xc[d];

        

        k = baseOut / 2;
        r = r || d < 0 || xc[d + 1] != null;

        r = rm < 4 ? (i != null || r) && (rm == 0 || rm == (x.s < 0 ? 3 : 2))
              : i > k || i == k &&(rm == 4 || r || rm == 6 && xc[d - 1] & 1 ||
               rm == (x.s < 0 ? 8 : 7));

        
        
        
        if (d < 1 || !xc[0]) {

          
          str = r ? toFixedPoint(alphabet.charAt(1), -dp, alphabet.charAt(0)) : alphabet.charAt(0);
        } else {

          
          xc.length = d;

          
          if (r) {

            
            for (--baseOut; ++xc[--d] > baseOut;) {
              xc[d] = 0;

              if (!d) {
                ++e;
                xc = [1].concat(xc);
              }
            }
          }

          
          for (k = xc.length; !xc[--k];);

          
          for (i = 0, str = ''; i <= k; str += alphabet.charAt(xc[i++]));

          
          str = toFixedPoint(str, e, alphabet.charAt(0));
        }

        
        return str;
      };
    })();


    
    div = (function () {

      
      function multiply(x, k, base) {
        var m, temp, xlo, xhi,
          carry = 0,
          i = x.length,
          klo = k % SQRT_BASE,
          khi = k / SQRT_BASE | 0;

        for (x = x.slice(); i--;) {
          xlo = x[i] % SQRT_BASE;
          xhi = x[i] / SQRT_BASE | 0;
          m = khi * xlo + xhi * klo;
          temp = klo * xlo + ((m % SQRT_BASE) * SQRT_BASE) + carry;
          carry = (temp / base | 0) + (m / SQRT_BASE | 0) + khi * xhi;
          x[i] = temp % base;
        }

        if (carry) x = [carry].concat(x);

        return x;
      }

      function compare(a, b, aL, bL) {
        var i, cmp;

        if (aL != bL) {
          cmp = aL > bL ? 1 : -1;
        } else {

          for (i = cmp = 0; i < aL; i++) {

            if (a[i] != b[i]) {
              cmp = a[i] > b[i] ? 1 : -1;
              break;
            }
          }
        }

        return cmp;
      }

      function subtract(a, b, aL, base) {
        var i = 0;

        
        for (; aL--;) {
          a[aL] -= i;
          i = a[aL] < b[aL] ? 1 : 0;
          a[aL] = i * base + a[aL] - b[aL];
        }

        
        for (; !a[0] && a.length > 1; a.splice(0, 1));
      }

      
      return function (x, y, dp, rm, base) {
        var cmp, e, i, more, n, prod, prodL, q, qc, rem, remL, rem0, xi, xL, yc0,
          yL, yz,
          s = x.s == y.s ? 1 : -1,
          xc = x.c,
          yc = y.c;

        
        if (!xc || !xc[0] || !yc || !yc[0]) {

          return new BigNumber(

           
           !x.s || !y.s || (xc ? yc && xc[0] == yc[0] : !yc) ? NaN :

            
            xc && xc[0] == 0 || !yc ? s * 0 : s / 0
         );
        }

        q = new BigNumber(s);
        qc = q.c = [];
        e = x.e - y.e;
        s = dp + e + 1;

        if (!base) {
          base = BASE;
          e = bitFloor(x.e / LOG_BASE) - bitFloor(y.e / LOG_BASE);
          s = s / LOG_BASE | 0;
        }

        
        
        for (i = 0; yc[i] == (xc[i] || 0); i++);

        if (yc[i] > (xc[i] || 0)) e--;

        if (s < 0) {
          qc.push(1);
          more = true;
        } else {
          xL = xc.length;
          yL = yc.length;
          i = 0;
          s += 2;

          

          n = mathfloor(base / (yc[0] + 1));

          
          
          if (n > 1) {
            yc = multiply(yc, n, base);
            xc = multiply(xc, n, base);
            yL = yc.length;
            xL = xc.length;
          }

          xi = yL;
          rem = xc.slice(0, yL);
          remL = rem.length;

          
          for (; remL < yL; rem[remL++] = 0);
          yz = yc.slice();
          yz = [0].concat(yz);
          yc0 = yc[0];
          if (yc[1] >= base / 2) yc0++;
          
          

          do {
            n = 0;

            
            cmp = compare(yc, rem, yL, remL);

            
            if (cmp < 0) {

              

              rem0 = rem[0];
              if (yL != remL) rem0 = rem0 * base + (rem[1] || 0);

              
              n = mathfloor(rem0 / yc0);

              
              
              
              
              
              
              
              
              
              

              if (n > 1) {

                
                if (n >= base) n = base - 1;

                
                prod = multiply(yc, n, base);
                prodL = prod.length;
                remL = rem.length;

                
                
                
                
                while (compare(prod, rem, prodL, remL) == 1) {
                  n--;

                  
                  subtract(prod, yL < prodL ? yz : yc, prodL, base);
                  prodL = prod.length;
                  cmp = 1;
                }
              } else {

                
                
                
                
                if (n == 0) {

                  
                  cmp = n = 1;
                }

                
                prod = yc.slice();
                prodL = prod.length;
              }

              if (prodL < remL) prod = [0].concat(prod);

              
              subtract(rem, prod, remL, base);
              remL = rem.length;

               
              if (cmp == -1) {

                
                
                
                
                while (compare(yc, rem, yL, remL) < 1) {
                  n++;

                  
                  subtract(rem, yL < remL ? yz : yc, remL, base);
                  remL = rem.length;
                }
              }
            } else if (cmp === 0) {
              n++;
              rem = [0];
            } 

            
            qc[i++] = n;

            
            if (rem[0]) {
              rem[remL++] = xc[xi] || 0;
            } else {
              rem = [xc[xi]];
              remL = 1;
            }
          } while ((xi++ < xL || rem[0] != null) && s--);

          more = rem[0] != null;

          
          if (!qc[0]) qc.splice(0, 1);
        }

        if (base == BASE) {

          
          for (i = 1, s = qc[0]; s >= 10; s /= 10, i++);

          round(q, dp + (q.e = i + e * LOG_BASE - 1) + 1, rm, more);

        
        } else {
          q.e = e;
          q.r = +more;
        }

        return q;
      };
    })();


    
    function format(n, i, rm, id) {
      var c0, e, ne, len, str;

      if (rm == null) rm = ROUNDING_MODE;
      else intCheck(rm, 0, 8);

      if (!n.c) return n.toString();

      c0 = n.c[0];
      ne = n.e;

      if (i == null) {
        str = coeffToString(n.c);
        str = id == 1 || id == 2 && (ne <= TO_EXP_NEG || ne >= TO_EXP_POS)
         ? toExponential(str, ne)
         : toFixedPoint(str, ne, '0');
      } else {
        n = round(new BigNumber(n), i, rm);

        
        e = n.e;

        str = coeffToString(n.c);
        len = str.length;

        
        
        

        
        if (id == 1 || id == 2 && (i <= e || e <= TO_EXP_NEG)) {

          
          for (; len < i; str += '0', len++);
          str = toExponential(str, e);

        
        } else {
          i -= ne;
          str = toFixedPoint(str, e, '0');

          
          if (e + 1 > len) {
            if (--i > 0) for (str += '.'; i--; str += '0');
          } else {
            i += e - len;
            if (i > 0) {
              if (e + 1 == len) str += '.';
              for (; i--; str += '0');
            }
          }
        }
      }

      return n.s < 0 && c0 ? '-' + str : str;
    }


    
    function maxOrMin(args, method) {
      var n,
        i = 1,
        m = new BigNumber(args[0]);

      for (; i < args.length; i++) {
        n = new BigNumber(args[i]);

        
        if (!n.s) {
          m = n;
          break;
        } else if (method.call(m, n)) {
          m = n;
        }
      }

      return m;
    }


    
    function normalise(n, c, e) {
      var i = 1,
        j = c.length;

       
      for (; !c[--j]; c.pop());

      
      for (j = c[0]; j >= 10; j /= 10, i++);

      
      if ((e = i + e * LOG_BASE - 1) > MAX_EXP) {

        
        n.c = n.e = null;

      
      } else if (e < MIN_EXP) {

        
        n.c = [n.e = 0];
      } else {
        n.e = e;
        n.c = c;
      }

      return n;
    }


    
    parseNumeric = (function () {
      var basePrefix = /^(-?)0([xbo])(?=\w[\w.]*$)/i,
        dotAfter = /^([^.]+)\.$/,
        dotBefore = /^\.([^.]+)$/,
        isInfinityOrNaN = /^-?(Infinity|NaN)$/,
        whitespaceOrPlus = /^\s*\+(?=[\w.])|^\s+|\s+$/g;

      return function (x, str, isNum, b) {
        var base,
          s = isNum ? str : str.replace(whitespaceOrPlus, '');

        
        if (isInfinityOrNaN.test(s)) {
          x.s = isNaN(s) ? null : s < 0 ? -1 : 1;
        } else {
          if (!isNum) {

            
            s = s.replace(basePrefix, function (m, p1, p2) {
              base = (p2 = p2.toLowerCase()) == 'x' ? 16 : p2 == 'b' ? 2 : 8;
              return !b || b == base ? p1 : m;
            });

            if (b) {
              base = b;

              
              s = s.replace(dotAfter, '$1').replace(dotBefore, '0.$1');
            }

            if (str != s) return new BigNumber(s, base);
          }

          
          
          if (BigNumber.DEBUG) {
            throw Error
              (bignumberError + 'Not a' + (b ? ' base ' + b : '') + ' number: ' + str);
          }

          
          x.s = null;
        }

        x.c = x.e = null;
      }
    })();


    
    function round(x, sd, rm, r) {
      var d, i, j, k, n, ni, rd,
        xc = x.c,
        pows10 = POWS_TEN;

      
      if (xc) {

        
        
        
        
        
        
        out: {

          
          for (d = 1, k = xc[0]; k >= 10; k /= 10, d++);
          i = sd - d;

          
          if (i < 0) {
            i += LOG_BASE;
            j = sd;
            n = xc[ni = 0];

            
            rd = n / pows10[d - j - 1] % 10 | 0;
          } else {
            ni = mathceil((i + 1) / LOG_BASE);

            if (ni >= xc.length) {

              if (r) {

                
                for (; xc.length <= ni; xc.push(0));
                n = rd = 0;
                d = 1;
                i %= LOG_BASE;
                j = i - LOG_BASE + 1;
              } else {
                break out;
              }
            } else {
              n = k = xc[ni];

              
              for (d = 1; k >= 10; k /= 10, d++);

              
              i %= LOG_BASE;

              
              
              j = i - LOG_BASE + d;

              
              rd = j < 0 ? 0 : n / pows10[d - j - 1] % 10 | 0;
            }
          }

          r = r || sd < 0 ||

          
          
          
           xc[ni + 1] != null || (j < 0 ? n : n % pows10[d - j - 1]);

          r = rm < 4
           ? (rd || r) && (rm == 0 || rm == (x.s < 0 ? 3 : 2))
           : rd > 5 || rd == 5 && (rm == 4 || r || rm == 6 &&

            
            ((i > 0 ? j > 0 ? n / pows10[d - j] : 0 : xc[ni - 1]) % 10) & 1 ||
             rm == (x.s < 0 ? 8 : 7));

          if (sd < 1 || !xc[0]) {
            xc.length = 0;

            if (r) {

              
              sd -= x.e + 1;

              
              xc[0] = pows10[(LOG_BASE - sd % LOG_BASE) % LOG_BASE];
              x.e = -sd || 0;
            } else {

              
              xc[0] = x.e = 0;
            }

            return x;
          }

          
          if (i == 0) {
            xc.length = ni;
            k = 1;
            ni--;
          } else {
            xc.length = ni + 1;
            k = pows10[LOG_BASE - i];

            
            
            xc[ni] = j > 0 ? mathfloor(n / pows10[d - j] % pows10[j]) * k : 0;
          }

          
          if (r) {

            for (; ;) {

              
              if (ni == 0) {

                
                for (i = 1, j = xc[0]; j >= 10; j /= 10, i++);
                j = xc[0] += k;
                for (k = 1; j >= 10; j /= 10, k++);

                
                if (i != k) {
                  x.e++;
                  if (xc[0] == BASE) xc[0] = 1;
                }

                break;
              } else {
                xc[ni] += k;
                if (xc[ni] != BASE) break;
                xc[ni--] = 0;
                k = 1;
              }
            }
          }

          
          for (i = xc.length; xc[--i] === 0; xc.pop());
        }

        
        if (x.e > MAX_EXP) {
          x.c = x.e = null;

        
        } else if (x.e < MIN_EXP) {
          x.c = [x.e = 0];
        }
      }

      return x;
    }


    function valueOf(n) {
      var str,
        e = n.e;

      if (e === null) return n.toString();

      str = coeffToString(n.c);

      str = e <= TO_EXP_NEG || e >= TO_EXP_POS
        ? toExponential(str, e)
        : toFixedPoint(str, e, '0');

      return n.s < 0 ? '-' + str : str;
    }


    


    
    P.absoluteValue = P.abs = function () {
      var x = new BigNumber(this);
      if (x.s < 0) x.s = 1;
      return x;
    };


    
    P.comparedTo = function (y, b) {
      return compare(this, new BigNumber(y, b));
    };


    
    P.decimalPlaces = P.dp = function (dp, rm) {
      var c, n, v,
        x = this;

      if (dp != null) {
        intCheck(dp, 0, MAX);
        if (rm == null) rm = ROUNDING_MODE;
        else intCheck(rm, 0, 8);

        return round(new BigNumber(x), dp + x.e + 1, rm);
      }

      if (!(c = x.c)) return null;
      n = ((v = c.length - 1) - bitFloor(this.e / LOG_BASE)) * LOG_BASE;

      
      if (v = c[v]) for (; v % 10 == 0; v /= 10, n--);
      if (n < 0) n = 0;

      return n;
    };


    
    P.dividedBy = P.div = function (y, b) {
      return div(this, new BigNumber(y, b), DECIMAL_PLACES, ROUNDING_MODE);
    };


    
    P.dividedToIntegerBy = P.idiv = function (y, b) {
      return div(this, new BigNumber(y, b), 0, 1);
    };


    
    P.exponentiatedBy = P.pow = function (n, m) {
      var half, isModExp, i, k, more, nIsBig, nIsNeg, nIsOdd, y,
        x = this;

      n = new BigNumber(n);

      
      if (n.c && !n.isInteger()) {
        throw Error
          (bignumberError + 'Exponent not an integer: ' + valueOf(n));
      }

      if (m != null) m = new BigNumber(m);

      
      nIsBig = n.e > 14;

      
      if (!x.c || !x.c[0] || x.c[0] == 1 && !x.e && x.c.length == 1 || !n.c || !n.c[0]) {

        
        
        y = new BigNumber(Math.pow(+valueOf(x), nIsBig ? 2 - isOdd(n) : +valueOf(n)));
        return m ? y.mod(m) : y;
      }

      nIsNeg = n.s < 0;

      if (m) {

        
        if (m.c ? !m.c[0] : !m.s) return new BigNumber(NaN);

        isModExp = !nIsNeg && x.isInteger() && m.isInteger();

        if (isModExp) x = x.mod(m);

      
      
      } else if (n.e > 9 && (x.e > 0 || x.e < -1 || (x.e == 0
        
        ? x.c[0] > 1 || nIsBig && x.c[1] >= 24e7
        
        : x.c[0] < 8e13 || nIsBig && x.c[0] <= 9999975e7))) {

        
        k = x.s < 0 && isOdd(n) ? -0 : 0;

        
        if (x.e > -1) k = 1 / k;

        
        return new BigNumber(nIsNeg ? 1 / k : k);

      } else if (POW_PRECISION) {

        
        
        
        k = mathceil(POW_PRECISION / LOG_BASE + 2);
      }

      if (nIsBig) {
        half = new BigNumber(0.5);
        if (nIsNeg) n.s = 1;
        nIsOdd = isOdd(n);
      } else {
        i = Math.abs(+valueOf(n));
        nIsOdd = i % 2;
      }

      y = new BigNumber(ONE);

      
      for (; ;) {

        if (nIsOdd) {
          y = y.times(x);
          if (!y.c) break;

          if (k) {
            if (y.c.length > k) y.c.length = k;
          } else if (isModExp) {
            y = y.mod(m);    
          }
        }

        if (i) {
          i = mathfloor(i / 2);
          if (i === 0) break;
          nIsOdd = i % 2;
        } else {
          n = n.times(half);
          round(n, n.e + 1, 1);

          if (n.e > 14) {
            nIsOdd = isOdd(n);
          } else {
            i = +valueOf(n);
            if (i === 0) break;
            nIsOdd = i % 2;
          }
        }

        x = x.times(x);

        if (k) {
          if (x.c && x.c.length > k) x.c.length = k;
        } else if (isModExp) {
          x = x.mod(m);    
        }
      }

      if (isModExp) return y;
      if (nIsNeg) y = ONE.div(y);

      return m ? y.mod(m) : k ? round(y, POW_PRECISION, ROUNDING_MODE, more) : y;
    };


    
    P.integerValue = function (rm) {
      var n = new BigNumber(this);
      if (rm == null) rm = ROUNDING_MODE;
      else intCheck(rm, 0, 8);
      return round(n, n.e + 1, rm);
    };


    
    P.isEqualTo = P.eq = function (y, b) {
      return compare(this, new BigNumber(y, b)) === 0;
    };


    
    P.isFinite = function () {
      return !!this.c;
    };


    
    P.isGreaterThan = P.gt = function (y, b) {
      return compare(this, new BigNumber(y, b)) > 0;
    };


    
    P.isGreaterThanOrEqualTo = P.gte = function (y, b) {
      return (b = compare(this, new BigNumber(y, b))) === 1 || b === 0;

    };


    
    P.isInteger = function () {
      return !!this.c && bitFloor(this.e / LOG_BASE) > this.c.length - 2;
    };


    
    P.isLessThan = P.lt = function (y, b) {
      return compare(this, new BigNumber(y, b)) < 0;
    };


    
    P.isLessThanOrEqualTo = P.lte = function (y, b) {
      return (b = compare(this, new BigNumber(y, b))) === -1 || b === 0;
    };


    
    P.isNaN = function () {
      return !this.s;
    };


    
    P.isNegative = function () {
      return this.s < 0;
    };


    
    P.isPositive = function () {
      return this.s > 0;
    };


    
    P.isZero = function () {
      return !!this.c && this.c[0] == 0;
    };


    
    P.minus = function (y, b) {
      var i, j, t, xLTy,
        x = this,
        a = x.s;

      y = new BigNumber(y, b);
      b = y.s;

      
      if (!a || !b) return new BigNumber(NaN);

      
      if (a != b) {
        y.s = -b;
        return x.plus(y);
      }

      var xe = x.e / LOG_BASE,
        ye = y.e / LOG_BASE,
        xc = x.c,
        yc = y.c;

      if (!xe || !ye) {

        
        if (!xc || !yc) return xc ? (y.s = -b, y) : new BigNumber(yc ? x : NaN);

        
        if (!xc[0] || !yc[0]) {

          
          return yc[0] ? (y.s = -b, y) : new BigNumber(xc[0] ? x :

           
           ROUNDING_MODE == 3 ? -0 : 0);
        }
      }

      xe = bitFloor(xe);
      ye = bitFloor(ye);
      xc = xc.slice();

      
      if (a = xe - ye) {

        if (xLTy = a < 0) {
          a = -a;
          t = xc;
        } else {
          ye = xe;
          t = yc;
        }

        t.reverse();

        
        for (b = a; b--; t.push(0));
        t.reverse();
      } else {

        
        j = (xLTy = (a = xc.length) < (b = yc.length)) ? a : b;

        for (a = b = 0; b < j; b++) {

          if (xc[b] != yc[b]) {
            xLTy = xc[b] < yc[b];
            break;
          }
        }
      }

      
      if (xLTy) t = xc, xc = yc, yc = t, y.s = -y.s;

      b = (j = yc.length) - (i = xc.length);

      
      
      if (b > 0) for (; b--; xc[i++] = 0);
      b = BASE - 1;

      
      for (; j > a;) {

        if (xc[--j] < yc[j]) {
          for (i = j; i && !xc[--i]; xc[i] = b);
          --xc[i];
          xc[j] += BASE;
        }

        xc[j] -= yc[j];
      }

      
      for (; xc[0] == 0; xc.splice(0, 1), --ye);

      
      if (!xc[0]) {

        
        
        y.s = ROUNDING_MODE == 3 ? -1 : 1;
        y.c = [y.e = 0];
        return y;
      }

      
      
      return normalise(y, xc, ye);
    };


    
    P.modulo = P.mod = function (y, b) {
      var q, s,
        x = this;

      y = new BigNumber(y, b);

      
      if (!x.c || !y.s || y.c && !y.c[0]) {
        return new BigNumber(NaN);

      
      } else if (!y.c || x.c && !x.c[0]) {
        return new BigNumber(x);
      }

      if (MODULO_MODE == 9) {

        
        
        s = y.s;
        y.s = 1;
        q = div(x, y, 0, 3);
        y.s = s;
        q.s *= s;
      } else {
        q = div(x, y, 0, MODULO_MODE);
      }

      y = x.minus(q.times(y));

      
      if (!y.c[0] && MODULO_MODE == 1) y.s = x.s;

      return y;
    };


    
    P.multipliedBy = P.times = function (y, b) {
      var c, e, i, j, k, m, xcL, xlo, xhi, ycL, ylo, yhi, zc,
        base, sqrtBase,
        x = this,
        xc = x.c,
        yc = (y = new BigNumber(y, b)).c;

      
      if (!xc || !yc || !xc[0] || !yc[0]) {

        
        if (!x.s || !y.s || xc && !xc[0] && !yc || yc && !yc[0] && !xc) {
          y.c = y.e = y.s = null;
        } else {
          y.s *= x.s;

          
          if (!xc || !yc) {
            y.c = y.e = null;

          
          } else {
            y.c = [0];
            y.e = 0;
          }
        }

        return y;
      }

      e = bitFloor(x.e / LOG_BASE) + bitFloor(y.e / LOG_BASE);
      y.s *= x.s;
      xcL = xc.length;
      ycL = yc.length;

      
      if (xcL < ycL) zc = xc, xc = yc, yc = zc, i = xcL, xcL = ycL, ycL = i;

      
      for (i = xcL + ycL, zc = []; i--; zc.push(0));

      base = BASE;
      sqrtBase = SQRT_BASE;

      for (i = ycL; --i >= 0;) {
        c = 0;
        ylo = yc[i] % sqrtBase;
        yhi = yc[i] / sqrtBase | 0;

        for (k = xcL, j = i + k; j > i;) {
          xlo = xc[--k] % sqrtBase;
          xhi = xc[k] / sqrtBase | 0;
          m = yhi * xlo + xhi * ylo;
          xlo = ylo * xlo + ((m % sqrtBase) * sqrtBase) + zc[j] + c;
          c = (xlo / base | 0) + (m / sqrtBase | 0) + yhi * xhi;
          zc[j--] = xlo % base;
        }

        zc[j] = c;
      }

      if (c) {
        ++e;
      } else {
        zc.splice(0, 1);
      }

      return normalise(y, zc, e);
    };


    
    P.negated = function () {
      var x = new BigNumber(this);
      x.s = -x.s || null;
      return x;
    };


    
    P.plus = function (y, b) {
      var t,
        x = this,
        a = x.s;

      y = new BigNumber(y, b);
      b = y.s;

      
      if (!a || !b) return new BigNumber(NaN);

      
       if (a != b) {
        y.s = -b;
        return x.minus(y);
      }

      var xe = x.e / LOG_BASE,
        ye = y.e / LOG_BASE,
        xc = x.c,
        yc = y.c;

      if (!xe || !ye) {

        
        if (!xc || !yc) return new BigNumber(a / 0);

        
        
        if (!xc[0] || !yc[0]) return yc[0] ? y : new BigNumber(xc[0] ? x : a * 0);
      }

      xe = bitFloor(xe);
      ye = bitFloor(ye);
      xc = xc.slice();

      
      if (a = xe - ye) {
        if (a > 0) {
          ye = xe;
          t = yc;
        } else {
          a = -a;
          t = xc;
        }

        t.reverse();
        for (; a--; t.push(0));
        t.reverse();
      }

      a = xc.length;
      b = yc.length;

      
      if (a - b < 0) t = yc, yc = xc, xc = t, b = a;

      
      for (a = 0; b;) {
        a = (xc[--b] = xc[b] + yc[b] + a) / BASE | 0;
        xc[b] = BASE === xc[b] ? 0 : xc[b] % BASE;
      }

      if (a) {
        xc = [a].concat(xc);
        ++ye;
      }

      
      
      return normalise(y, xc, ye);
    };


    
    P.precision = P.sd = function (sd, rm) {
      var c, n, v,
        x = this;

      if (sd != null && sd !== !!sd) {
        intCheck(sd, 1, MAX);
        if (rm == null) rm = ROUNDING_MODE;
        else intCheck(rm, 0, 8);

        return round(new BigNumber(x), sd, rm);
      }

      if (!(c = x.c)) return null;
      v = c.length - 1;
      n = v * LOG_BASE + 1;

      if (v = c[v]) {

        
        for (; v % 10 == 0; v /= 10, n--);

        
        for (v = c[0]; v >= 10; v /= 10, n++);
      }

      if (sd && x.e + 1 > n) n = x.e + 1;

      return n;
    };


    
    P.shiftedBy = function (k) {
      intCheck(k, -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER);
      return this.times('1e' + k);
    };


    
    P.squareRoot = P.sqrt = function () {
      var m, n, r, rep, t,
        x = this,
        c = x.c,
        s = x.s,
        e = x.e,
        dp = DECIMAL_PLACES + 4,
        half = new BigNumber('0.5');

      
      if (s !== 1 || !c || !c[0]) {
        return new BigNumber(!s || s < 0 && (!c || c[0]) ? NaN : c ? x : 1 / 0);
      }

      
      s = Math.sqrt(+valueOf(x));

      
      
      if (s == 0 || s == 1 / 0) {
        n = coeffToString(c);
        if ((n.length + e) % 2 == 0) n += '0';
        s = Math.sqrt(+n);
        e = bitFloor((e + 1) / 2) - (e < 0 || e % 2);

        if (s == 1 / 0) {
          n = '5e' + e;
        } else {
          n = s.toExponential();
          n = n.slice(0, n.indexOf('e') + 1) + e;
        }

        r = new BigNumber(n);
      } else {
        r = new BigNumber(s + '');
      }

      
      
      
      
      if (r.c[0]) {
        e = r.e;
        s = e + dp;
        if (s < 3) s = 0;

        
        for (; ;) {
          t = r;
          r = half.times(t.plus(div(x, t, dp, 1)));

          if (coeffToString(t.c).slice(0, s) === (n = coeffToString(r.c)).slice(0, s)) {

            
            
            
            if (r.e < e) --s;
            n = n.slice(s - 3, s + 1);

            
            
            
            if (n == '9999' || !rep && n == '4999') {

              
              
              if (!rep) {
                round(t, t.e + DECIMAL_PLACES + 2, 0);

                if (t.times(t).eq(x)) {
                  r = t;
                  break;
                }
              }

              dp += 4;
              s += 4;
              rep = 1;
            } else {

              
              
              if (!+n || !+n.slice(1) && n.charAt(0) == '5') {

                
                round(r, r.e + DECIMAL_PLACES + 2, 1);
                m = !r.times(r).eq(x);
              }

              break;
            }
          }
        }
      }

      return round(r, r.e + DECIMAL_PLACES + 1, ROUNDING_MODE, m);
    };


    
    P.toExponential = function (dp, rm) {
      if (dp != null) {
        intCheck(dp, 0, MAX);
        dp++;
      }
      return format(this, dp, rm, 1);
    };


    
    P.toFixed = function (dp, rm) {
      if (dp != null) {
        intCheck(dp, 0, MAX);
        dp = dp + this.e + 1;
      }
      return format(this, dp, rm);
    };


    
    P.toFormat = function (dp, rm, format) {
      var str,
        x = this;

      if (format == null) {
        if (dp != null && rm && typeof rm == 'object') {
          format = rm;
          rm = null;
        } else if (dp && typeof dp == 'object') {
          format = dp;
          dp = rm = null;
        } else {
          format = FORMAT;
        }
      } else if (typeof format != 'object') {
        throw Error
          (bignumberError + 'Argument not an object: ' + format);
      }

      str = x.toFixed(dp, rm);

      if (x.c) {
        var i,
          arr = str.split('.'),
          g1 = +format.groupSize,
          g2 = +format.secondaryGroupSize,
          groupSeparator = format.groupSeparator || '',
          intPart = arr[0],
          fractionPart = arr[1],
          isNeg = x.s < 0,
          intDigits = isNeg ? intPart.slice(1) : intPart,
          len = intDigits.length;

        if (g2) i = g1, g1 = g2, g2 = i, len -= i;

        if (g1 > 0 && len > 0) {
          i = len % g1 || g1;
          intPart = intDigits.substr(0, i);
          for (; i < len; i += g1) intPart += groupSeparator + intDigits.substr(i, g1);
          if (g2 > 0) intPart += groupSeparator + intDigits.slice(i);
          if (isNeg) intPart = '-' + intPart;
        }

        str = fractionPart
         ? intPart + (format.decimalSeparator || '') + ((g2 = +format.fractionGroupSize)
          ? fractionPart.replace(new RegExp('\\d{' + g2 + '}\\B', 'g'),
           '$&' + (format.fractionGroupSeparator || ''))
          : fractionPart)
         : intPart;
      }

      return (format.prefix || '') + str + (format.suffix || '');
    };


    
    P.toFraction = function (md) {
      var d, d0, d1, d2, e, exp, n, n0, n1, q, r, s,
        x = this,
        xc = x.c;

      if (md != null) {
        n = new BigNumber(md);

        
        if (!n.isInteger() && (n.c || n.s !== 1) || n.lt(ONE)) {
          throw Error
            (bignumberError + 'Argument ' +
              (n.isInteger() ? 'out of range: ' : 'not an integer: ') + valueOf(n));
        }
      }

      if (!xc) return new BigNumber(x);

      d = new BigNumber(ONE);
      n1 = d0 = new BigNumber(ONE);
      d1 = n0 = new BigNumber(ONE);
      s = coeffToString(xc);

      
      
      e = d.e = s.length - x.e - 1;
      d.c[0] = POWS_TEN[(exp = e % LOG_BASE) < 0 ? LOG_BASE + exp : exp];
      md = !md || n.comparedTo(d) > 0 ? (e > 0 ? d : n1) : n;

      exp = MAX_EXP;
      MAX_EXP = 1 / 0;
      n = new BigNumber(s);

      
      n0.c[0] = 0;

      for (; ;)  {
        q = div(n, d, 0, 1);
        d2 = d0.plus(q.times(d1));
        if (d2.comparedTo(md) == 1) break;
        d0 = d1;
        d1 = d2;
        n1 = n0.plus(q.times(d2 = n1));
        n0 = d2;
        d = n.minus(q.times(d2 = d));
        n = d2;
      }

      d2 = div(md.minus(d0), d1, 0, 1);
      n0 = n0.plus(d2.times(n1));
      d0 = d0.plus(d2.times(d1));
      n0.s = n1.s = x.s;
      e = e * 2;

      
      r = div(n1, d1, e, ROUNDING_MODE).minus(x).abs().comparedTo(
          div(n0, d0, e, ROUNDING_MODE).minus(x).abs()) < 1 ? [n1, d1] : [n0, d0];

      MAX_EXP = exp;

      return r;
    };


    
    P.toNumber = function () {
      return +valueOf(this);
    };


    
    P.toPrecision = function (sd, rm) {
      if (sd != null) intCheck(sd, 1, MAX);
      return format(this, sd, rm, 2);
    };


    
    P.toString = function (b) {
      var str,
        n = this,
        s = n.s,
        e = n.e;

      
      if (e === null) {
        if (s) {
          str = 'Infinity';
          if (s < 0) str = '-' + str;
        } else {
          str = 'NaN';
        }
      } else {
        if (b == null) {
          str = e <= TO_EXP_NEG || e >= TO_EXP_POS
           ? toExponential(coeffToString(n.c), e)
           : toFixedPoint(coeffToString(n.c), e, '0');
        } else if (b === 10 && alphabetHasNormalDecimalDigits) {
          n = round(new BigNumber(n), DECIMAL_PLACES + e + 1, ROUNDING_MODE);
          str = toFixedPoint(coeffToString(n.c), n.e, '0');
        } else {
          intCheck(b, 2, ALPHABET.length, 'Base');
          str = convertBase(toFixedPoint(coeffToString(n.c), e, '0'), 10, b, s, true);
        }

        if (s < 0 && n.c[0]) str = '-' + str;
      }

      return str;
    };


    
    P.valueOf = P.toJSON = function () {
      return valueOf(this);
    };


    P._isBigNumber = true;

    if (configObject != null) BigNumber.set(configObject);

    return BigNumber;
  }


  

  
  


  function bitFloor(n) {
    var i = n | 0;
    return n > 0 || n === i ? i : i - 1;
  }


  
  function coeffToString(a) {
    var s, z,
      i = 1,
      j = a.length,
      r = a[0] + '';

    for (; i < j;) {
      s = a[i++] + '';
      z = LOG_BASE - s.length;
      for (; z--; s = '0' + s);
      r += s;
    }

    
    for (j = r.length; r.charCodeAt(--j) === 48;);

    return r.slice(0, j + 1 || 1);
  }


  
  function compare(x, y) {
    var a, b,
      xc = x.c,
      yc = y.c,
      i = x.s,
      j = y.s,
      k = x.e,
      l = y.e;

    
    if (!i || !j) return null;

    a = xc && !xc[0];
    b = yc && !yc[0];

    
    if (a || b) return a ? b ? 0 : -j : i;

    
    if (i != j) return i;

    a = i < 0;
    b = k == l;

    
    if (!xc || !yc) return b ? 0 : !xc ^ a ? 1 : -1;

    
    if (!b) return k > l ^ a ? 1 : -1;

    j = (k = xc.length) < (l = yc.length) ? k : l;

    
    for (i = 0; i < j; i++) if (xc[i] != yc[i]) return xc[i] > yc[i] ^ a ? 1 : -1;

    
    return k == l ? 0 : k > l ^ a ? 1 : -1;
  }


  
  function intCheck(n, min, max, name) {
    if (n < min || n > max || n !== mathfloor(n)) {
      throw Error
       (bignumberError + (name || 'Argument') + (typeof n == 'number'
         ? n < min || n > max ? ' out of range: ' : ' not an integer: '
         : ' not a primitive number: ') + String(n));
    }
  }


  
  function isOdd(n) {
    var k = n.c.length - 1;
    return bitFloor(n.e / LOG_BASE) == k && n.c[k] % 2 != 0;
  }


  function toExponential(str, e) {
    return (str.length > 1 ? str.charAt(0) + '.' + str.slice(1) : str) +
     (e < 0 ? 'e' : 'e+') + e;
  }


  function toFixedPoint(str, e, z) {
    var len, zs;

    
    if (e < 0) {

      
      for (zs = z + '.'; ++e; zs += z);
      str = zs + str;

    
    } else {
      len = str.length;

      
      if (++e > len) {
        for (zs = z, e -= len; --e; zs += z);
        str += zs;
      } else if (e < len) {
        str = str.slice(0, e) + '.' + str.slice(e);
      }
    }

    return str;
  }


  


  BigNumber = clone();
  BigNumber['default'] = BigNumber.BigNumber = BigNumber;

  
  if (typeof define == 'function' && define.amd) {
    define(function () { return BigNumber; });

  
  } else if (typeof module != 'undefined' && module.exports) {
    module.exports = BigNumber;

  
  } else {
    if (!globalObject) {
      globalObject = typeof self != 'undefined' && self ? self : window;
    }

    globalObject.BigNumber = BigNumber;
  }
})(this);

},{}],94:[function(require,module,exports){

},{}],95:[function(require,module,exports){
(function (Buffer){(function (){

'use strict'

var base64 = require('base64-js')
var ieee754 = require('ieee754')

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

var K_MAX_LENGTH = 0x7fffffff
exports.kMaxLength = K_MAX_LENGTH

Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport()

if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== 'undefined' &&
    typeof console.error === 'function') {
  console.error(
    'This browser lacks typed array (Uint8Array) support which is required by ' +
    '`buffer` v5.x. Use `buffer` v4.x if you require old browser support.'
  )
}

function typedArraySupport () {
  
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = { __proto__: Uint8Array.prototype, foo: function () { return 42 } }
    return arr.foo() === 42
  } catch (e) {
    return false
  }
}

Object.defineProperty(Buffer.prototype, 'parent', {
  enumerable: true,
  get: function () {
    if (!Buffer.isBuffer(this)) return undefined
    return this.buffer
  }
})

Object.defineProperty(Buffer.prototype, 'offset', {
  enumerable: true,
  get: function () {
    if (!Buffer.isBuffer(this)) return undefined
    return this.byteOffset
  }
})

function createBuffer (length) {
  if (length > K_MAX_LENGTH) {
    throw new RangeError('The value "' + length + '" is invalid for option "size"')
  }
  
  var buf = new Uint8Array(length)
  buf.__proto__ = Buffer.prototype
  return buf
}


function Buffer (arg, encodingOrOffset, length) {
  
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new TypeError(
        'The "string" argument must be of type string. Received type number'
      )
    }
    return allocUnsafe(arg)
  }
  return from(arg, encodingOrOffset, length)
}


if (typeof Symbol !== 'undefined' && Symbol.species != null &&
    Buffer[Symbol.species] === Buffer) {
  Object.defineProperty(Buffer, Symbol.species, {
    value: null,
    configurable: true,
    enumerable: false,
    writable: false
  })
}

Buffer.poolSize = 8192 

function from (value, encodingOrOffset, length) {
  if (typeof value === 'string') {
    return fromString(value, encodingOrOffset)
  }

  if (ArrayBuffer.isView(value)) {
    return fromArrayLike(value)
  }

  if (value == null) {
    throw TypeError(
      'The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' +
      'or Array-like Object. Received type ' + (typeof value)
    )
  }

  if (isInstance(value, ArrayBuffer) ||
      (value && isInstance(value.buffer, ArrayBuffer))) {
    return fromArrayBuffer(value, encodingOrOffset, length)
  }

  if (typeof value === 'number') {
    throw new TypeError(
      'The "value" argument must not be of type number. Received type number'
    )
  }

  var valueOf = value.valueOf && value.valueOf()
  if (valueOf != null && valueOf !== value) {
    return Buffer.from(valueOf, encodingOrOffset, length)
  }

  var b = fromObject(value)
  if (b) return b

  if (typeof Symbol !== 'undefined' && Symbol.toPrimitive != null &&
      typeof value[Symbol.toPrimitive] === 'function') {
    return Buffer.from(
      value[Symbol.toPrimitive]('string'), encodingOrOffset, length
    )
  }

  throw new TypeError(
    'The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' +
    'or Array-like Object. Received type ' + (typeof value)
  )
}

Buffer.from = function (value, encodingOrOffset, length) {
  return from(value, encodingOrOffset, length)
}



Buffer.prototype.__proto__ = Uint8Array.prototype
Buffer.__proto__ = Uint8Array

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be of type number')
  } else if (size < 0) {
    throw new RangeError('The value "' + size + '" is invalid for option "size"')
  }
}

function alloc (size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(size)
  }
  if (fill !== undefined) {
    
    
    
    return typeof encoding === 'string'
      ? createBuffer(size).fill(fill, encoding)
      : createBuffer(size).fill(fill)
  }
  return createBuffer(size)
}

Buffer.alloc = function (size, fill, encoding) {
  return alloc(size, fill, encoding)
}

function allocUnsafe (size) {
  assertSize(size)
  return createBuffer(size < 0 ? 0 : checked(size) | 0)
}

Buffer.allocUnsafe = function (size) {
  return allocUnsafe(size)
}
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(size)
}

function fromString (string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('Unknown encoding: ' + encoding)
  }

  var length = byteLength(string, encoding) | 0
  var buf = createBuffer(length)

  var actual = buf.write(string, encoding)

  if (actual !== length) {
    
    
    
    buf = buf.slice(0, actual)
  }

  return buf
}

function fromArrayLike (array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  var buf = createBuffer(length)
  for (var i = 0; i < length; i += 1) {
    buf[i] = array[i] & 255
  }
  return buf
}

function fromArrayBuffer (array, byteOffset, length) {
  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('"offset" is outside of buffer bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('"length" is outside of buffer bounds')
  }

  var buf
  if (byteOffset === undefined && length === undefined) {
    buf = new Uint8Array(array)
  } else if (length === undefined) {
    buf = new Uint8Array(array, byteOffset)
  } else {
    buf = new Uint8Array(array, byteOffset, length)
  }

  
  buf.__proto__ = Buffer.prototype
  return buf
}

function fromObject (obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    var buf = createBuffer(len)

    if (buf.length === 0) {
      return buf
    }

    obj.copy(buf, 0, 0, len)
    return buf
  }

  if (obj.length !== undefined) {
    if (typeof obj.length !== 'number' || numberIsNaN(obj.length)) {
      return createBuffer(0)
    }
    return fromArrayLike(obj)
  }

  if (obj.type === 'Buffer' && Array.isArray(obj.data)) {
    return fromArrayLike(obj.data)
  }
}

function checked (length) {
  
  
  if (length >= K_MAX_LENGTH) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + K_MAX_LENGTH.toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { 
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return b != null && b._isBuffer === true &&
    b !== Buffer.prototype 
}

Buffer.compare = function compare (a, b) {
  if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength)
  if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength)
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError(
      'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
    )
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!Array.isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (isInstance(buf, Uint8Array)) {
      buf = Buffer.from(buf)
    }
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    throw new TypeError(
      'The "string" argument must be one of type string, Buffer, or ArrayBuffer. ' +
      'Received type ' + typeof string
    )
  }

  var len = string.length
  var mustMatch = (arguments.length > 2 && arguments[2] === true)
  if (!mustMatch && len === 0) return 0

  
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) {
          return mustMatch ? -1 : utf8ToBytes(string).length 
        }
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  
  

  
  
  
  
  if (start === undefined || start < 0) {
    start = 0
  }
  
  
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}







Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.toLocaleString = Buffer.prototype.toString

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  str = this.toString('hex', 0, max).replace(/(.{2})/g, '$1 ').trim()
  if (this.length > max) str += ' ... '
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (isInstance(target, Uint8Array)) {
    target = Buffer.from(target, target.offset, target.byteLength)
  }
  if (!Buffer.isBuffer(target)) {
    throw new TypeError(
      'The "target" argument must be one of type Buffer or Uint8Array. ' +
      'Received type ' + (typeof target)
    )
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}










function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  
  if (buffer.length === 0) return -1

  
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset 
  if (numberIsNaN(byteOffset)) {
    
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  
  if (Buffer.isBuffer(val)) {
    
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF 
    if (typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  var strLen = string.length

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (numberIsNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  
  } else if (isFinite(offset)) {
    offset = offset >>> 0
    if (isFinite(length)) {
      length = length >>> 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
        : (firstByte > 0xBF) ? 2
          : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      
      
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}




var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) 
  }

  
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + (bytes[i + 1] * 256))
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf = this.subarray(start, end)
  
  newBuf.__proto__ = Buffer.prototype
  return newBuf
}

function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  this[offset] = (value >>> 8)
  this[offset + 1] = (value & 0xff)
  return offset + 2
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  this[offset + 3] = (value >>> 24)
  this[offset + 2] = (value >>> 16)
  this[offset + 1] = (value >>> 8)
  this[offset] = (value & 0xff)
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  this[offset] = (value >>> 24)
  this[offset + 1] = (value >>> 16)
  this[offset + 2] = (value >>> 8)
  this[offset + 3] = (value & 0xff)
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    var limit = Math.pow(2, (8 * byteLength) - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    var limit = Math.pow(2, (8 * byteLength) - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  this[offset] = (value >>> 8)
  this[offset + 1] = (value & 0xff)
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  this[offset + 2] = (value >>> 16)
  this[offset + 3] = (value >>> 24)
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  this[offset] = (value >>> 24)
  this[offset + 1] = (value >>> 16)
  this[offset + 2] = (value >>> 8)
  this[offset + 3] = (value & 0xff)
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}


Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!Buffer.isBuffer(target)) throw new TypeError('argument should be a Buffer')
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('Index out of range')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start

  if (this === target && typeof Uint8Array.prototype.copyWithin === 'function') {
    
    this.copyWithin(targetStart, start, end)
  } else if (this === target && start < targetStart && targetStart < end) {
    
    for (var i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, end),
      targetStart
    )
  }

  return len
}





Buffer.prototype.fill = function fill (val, start, end, encoding) {
  
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if ((encoding === 'utf8' && code < 128) ||
          encoding === 'latin1') {
        
        val = code
      }
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : Buffer.from(val, encoding)
    var len = bytes.length
    if (len === 0) {
      throw new TypeError('The value "' + val +
        '" is invalid for argument "value"')
    }
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}




var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g

function base64clean (str) {
  
  str = str.split('=')[0]
  
  str = str.trim().replace(INVALID_BASE64_RE, '')
  
  if (str.length < 2) return ''
  
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      
      if (!leadSurrogate) {
        
        if (codePoint > 0xDBFF) {
          
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        
        leadSurrogate = codePoint

        continue
      }

      
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}




function isInstance (obj, type) {
  return obj instanceof type ||
    (obj != null && obj.constructor != null && obj.constructor.name != null &&
      obj.constructor.name === type.name)
}
function numberIsNaN (obj) {
  
  return obj !== obj 
}

}).call(this)}).call(this,require("buffer").Buffer)
},{"base64-js":92,"buffer":95,"ieee754":107}],96:[function(require,module,exports){
'use strict';

var GetIntrinsic = require('get-intrinsic');

var callBind = require('./');

var $indexOf = callBind(GetIntrinsic('String.prototype.indexOf'));

module.exports = function callBoundIntrinsic(name, allowMissing) {
	var intrinsic = GetIntrinsic(name, !!allowMissing);
	if (typeof intrinsic === 'function' && $indexOf(name, '.prototype.') > -1) {
		return callBind(intrinsic);
	}
	return intrinsic;
};

},{"./":97,"get-intrinsic":102}],97:[function(require,module,exports){
'use strict';

var bind = require('function-bind');
var GetIntrinsic = require('get-intrinsic');

var $apply = GetIntrinsic('%Function.prototype.apply%');
var $call = GetIntrinsic('%Function.prototype.call%');
var $reflectApply = GetIntrinsic('%Reflect.apply%', true) || bind.call($call, $apply);

var $gOPD = GetIntrinsic('%Object.getOwnPropertyDescriptor%', true);
var $defineProperty = GetIntrinsic('%Object.defineProperty%', true);
var $max = GetIntrinsic('%Math.max%');

if ($defineProperty) {
	try {
		$defineProperty({}, 'a', { value: 1 });
	} catch (e) {
		
		$defineProperty = null;
	}
}

module.exports = function callBind(originalFunction) {
	var func = $reflectApply(bind, $call, arguments);
	if ($gOPD && $defineProperty) {
		var desc = $gOPD(func, 'length');
		if (desc.configurable) {
			
			$defineProperty(
				func,
				'length',
				{ value: 1 + $max(0, originalFunction.length - (arguments.length - 1)) }
			);
		}
	}
	return func;
};

var applyBind = function applyBind() {
	return $reflectApply(bind, $apply, arguments);
};

if ($defineProperty) {
	$defineProperty(module.exports, 'apply', { value: applyBind });
} else {
	module.exports.apply = applyBind;
}

},{"function-bind":101,"get-intrinsic":102}],98:[function(require,module,exports){



if (typeof module !== 'undefined') {
  module.exports = Emitter;
}



function Emitter(obj) {
  if (obj) return mixin(obj);
};



function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }
  return obj;
}



Emitter.prototype.on =
Emitter.prototype.addEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};
  (this._callbacks['$' + event] = this._callbacks['$' + event] || [])
    .push(fn);
  return this;
};



Emitter.prototype.once = function(event, fn){
  function on() {
    this.off(event, on);
    fn.apply(this, arguments);
  }

  on.fn = fn;
  this.on(event, on);
  return this;
};



Emitter.prototype.off =
Emitter.prototype.removeListener =
Emitter.prototype.removeAllListeners =
Emitter.prototype.removeEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};

  
  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  }

  
  var callbacks = this._callbacks['$' + event];
  if (!callbacks) return this;

  
  if (1 == arguments.length) {
    delete this._callbacks['$' + event];
    return this;
  }

  
  var cb;
  for (var i = 0; i < callbacks.length; i++) {
    cb = callbacks[i];
    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i, 1);
      break;
    }
  }

  
  
  if (callbacks.length === 0) {
    delete this._callbacks['$' + event];
  }

  return this;
};



Emitter.prototype.emit = function(event){
  this._callbacks = this._callbacks || {};

  var args = new Array(arguments.length - 1)
    , callbacks = this._callbacks['$' + event];

  for (var i = 1; i < arguments.length; i++) {
    args[i - 1] = arguments[i];
  }

  if (callbacks) {
    callbacks = callbacks.slice(0);
    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }

  return this;
};



Emitter.prototype.listeners = function(event){
  this._callbacks = this._callbacks || {};
  return this._callbacks['$' + event] || [];
};



Emitter.prototype.hasListeners = function(event){
  return !! this.listeners(event).length;
};

},{}],99:[function(require,module,exports){
module.exports = stringify
stringify.default = stringify
stringify.stable = deterministicStringify
stringify.stableStringify = deterministicStringify

var LIMIT_REPLACE_NODE = '[...]'
var CIRCULAR_REPLACE_NODE = '[Circular]'

var arr = []
var replacerStack = []

function defaultOptions () {
  return {
    depthLimit: Number.MAX_SAFE_INTEGER,
    edgesLimit: Number.MAX_SAFE_INTEGER
  }
}


function stringify (obj, replacer, spacer, options) {
  if (typeof options === 'undefined') {
    options = defaultOptions()
  }

  decirc(obj, '', 0, [], undefined, 0, options)
  var res
  try {
    if (replacerStack.length === 0) {
      res = JSON.stringify(obj, replacer, spacer)
    } else {
      res = JSON.stringify(obj, replaceGetterValues(replacer), spacer)
    }
  } catch (_) {
    return JSON.stringify('[unable to serialize, circular reference is too complex to analyze]')
  } finally {
    while (arr.length !== 0) {
      var part = arr.pop()
      if (part.length === 4) {
        Object.defineProperty(part[0], part[1], part[3])
      } else {
        part[0][part[1]] = part[2]
      }
    }
  }
  return res
}

function setReplace (replace, val, k, parent) {
  var propertyDescriptor = Object.getOwnPropertyDescriptor(parent, k)
  if (propertyDescriptor.get !== undefined) {
    if (propertyDescriptor.configurable) {
      Object.defineProperty(parent, k, { value: replace })
      arr.push([parent, k, val, propertyDescriptor])
    } else {
      replacerStack.push([val, k, replace])
    }
  } else {
    parent[k] = replace
    arr.push([parent, k, val])
  }
}

function decirc (val, k, edgeIndex, stack, parent, depth, options) {
  depth += 1
  var i
  if (typeof val === 'object' && val !== null) {
    for (i = 0; i < stack.length; i++) {
      if (stack[i] === val) {
        setReplace(CIRCULAR_REPLACE_NODE, val, k, parent)
        return
      }
    }

    if (
      typeof options.depthLimit !== 'undefined' &&
      depth > options.depthLimit
    ) {
      setReplace(LIMIT_REPLACE_NODE, val, k, parent)
      return
    }

    if (
      typeof options.edgesLimit !== 'undefined' &&
      edgeIndex + 1 > options.edgesLimit
    ) {
      setReplace(LIMIT_REPLACE_NODE, val, k, parent)
      return
    }

    stack.push(val)
    
    if (Array.isArray(val)) {
      for (i = 0; i < val.length; i++) {
        decirc(val[i], i, i, stack, val, depth, options)
      }
    } else {
      var keys = Object.keys(val)
      for (i = 0; i < keys.length; i++) {
        var key = keys[i]
        decirc(val[key], key, i, stack, val, depth, options)
      }
    }
    stack.pop()
  }
}


function compareFunction (a, b) {
  if (a < b) {
    return -1
  }
  if (a > b) {
    return 1
  }
  return 0
}

function deterministicStringify (obj, replacer, spacer, options) {
  if (typeof options === 'undefined') {
    options = defaultOptions()
  }

  var tmp = deterministicDecirc(obj, '', 0, [], undefined, 0, options) || obj
  var res
  try {
    if (replacerStack.length === 0) {
      res = JSON.stringify(tmp, replacer, spacer)
    } else {
      res = JSON.stringify(tmp, replaceGetterValues(replacer), spacer)
    }
  } catch (_) {
    return JSON.stringify('[unable to serialize, circular reference is too complex to analyze]')
  } finally {
    
    while (arr.length !== 0) {
      var part = arr.pop()
      if (part.length === 4) {
        Object.defineProperty(part[0], part[1], part[3])
      } else {
        part[0][part[1]] = part[2]
      }
    }
  }
  return res
}

function deterministicDecirc (val, k, edgeIndex, stack, parent, depth, options) {
  depth += 1
  var i
  if (typeof val === 'object' && val !== null) {
    for (i = 0; i < stack.length; i++) {
      if (stack[i] === val) {
        setReplace(CIRCULAR_REPLACE_NODE, val, k, parent)
        return
      }
    }
    try {
      if (typeof val.toJSON === 'function') {
        return
      }
    } catch (_) {
      return
    }

    if (
      typeof options.depthLimit !== 'undefined' &&
      depth > options.depthLimit
    ) {
      setReplace(LIMIT_REPLACE_NODE, val, k, parent)
      return
    }

    if (
      typeof options.edgesLimit !== 'undefined' &&
      edgeIndex + 1 > options.edgesLimit
    ) {
      setReplace(LIMIT_REPLACE_NODE, val, k, parent)
      return
    }

    stack.push(val)
    
    if (Array.isArray(val)) {
      for (i = 0; i < val.length; i++) {
        deterministicDecirc(val[i], i, i, stack, val, depth, options)
      }
    } else {
      
      var tmp = {}
      var keys = Object.keys(val).sort(compareFunction)
      for (i = 0; i < keys.length; i++) {
        var key = keys[i]
        deterministicDecirc(val[key], key, i, stack, val, depth, options)
        tmp[key] = val[key]
      }
      if (typeof parent !== 'undefined') {
        arr.push([parent, k, val])
        parent[k] = tmp
      } else {
        return tmp
      }
    }
    stack.pop()
  }
}



function replaceGetterValues (replacer) {
  replacer =
    typeof replacer !== 'undefined'
      ? replacer
      : function (k, v) {
        return v
      }
  return function (key, val) {
    if (replacerStack.length > 0) {
      for (var i = 0; i < replacerStack.length; i++) {
        var part = replacerStack[i]
        if (part[1] === key && part[0] === val) {
          val = part[2]
          replacerStack.splice(i, 1)
          break
        }
      }
    }
    return replacer.call(this, key, val)
  }
}

},{}],100:[function(require,module,exports){
'use strict';


var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var slice = Array.prototype.slice;
var toStr = Object.prototype.toString;
var funcType = '[object Function]';

module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.call(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slice.call(arguments, 1);

    var bound;
    var binder = function () {
        if (this instanceof bound) {
            var result = target.apply(
                this,
                args.concat(slice.call(arguments))
            );
            if (Object(result) === result) {
                return result;
            }
            return this;
        } else {
            return target.apply(
                that,
                args.concat(slice.call(arguments))
            );
        }
    };

    var boundLength = Math.max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
        boundArgs.push('$' + i);
    }

    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }

    return bound;
};

},{}],101:[function(require,module,exports){
'use strict';

var implementation = require('./implementation');

module.exports = Function.prototype.bind || implementation;

},{"./implementation":100}],102:[function(require,module,exports){
'use strict';

var undefined;

var $SyntaxError = SyntaxError;
var $Function = Function;
var $TypeError = TypeError;


var getEvalledConstructor = function (expressionSyntax) {
	try {
		return $Function('"use strict"; return (' + expressionSyntax + ').constructor;')();
	} catch (e) {}
};

var $gOPD = Object.getOwnPropertyDescriptor;
if ($gOPD) {
	try {
		$gOPD({}, '');
	} catch (e) {
		$gOPD = null; 
	}
}

var throwTypeError = function () {
	throw new $TypeError();
};
var ThrowTypeError = $gOPD
	? (function () {
		try {
			
			arguments.callee; 
			return throwTypeError;
		} catch (calleeThrows) {
			try {
				
				return $gOPD(arguments, 'callee').get;
			} catch (gOPDthrows) {
				return throwTypeError;
			}
		}
	}())
	: throwTypeError;

var hasSymbols = require('has-symbols')();

var getProto = Object.getPrototypeOf || function (x) { return x.__proto__; }; 

var needsEval = {};

var TypedArray = typeof Uint8Array === 'undefined' ? undefined : getProto(Uint8Array);

var INTRINSICS = {
	'%AggregateError%': typeof AggregateError === 'undefined' ? undefined : AggregateError,
	'%Array%': Array,
	'%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer,
	'%ArrayIteratorPrototype%': hasSymbols ? getProto([][Symbol.iterator]()) : undefined,
	'%AsyncFromSyncIteratorPrototype%': undefined,
	'%AsyncFunction%': needsEval,
	'%AsyncGenerator%': needsEval,
	'%AsyncGeneratorFunction%': needsEval,
	'%AsyncIteratorPrototype%': needsEval,
	'%Atomics%': typeof Atomics === 'undefined' ? undefined : Atomics,
	'%BigInt%': typeof BigInt === 'undefined' ? undefined : BigInt,
	'%Boolean%': Boolean,
	'%DataView%': typeof DataView === 'undefined' ? undefined : DataView,
	'%Date%': Date,
	'%decodeURI%': decodeURI,
	'%decodeURIComponent%': decodeURIComponent,
	'%encodeURI%': encodeURI,
	'%encodeURIComponent%': encodeURIComponent,
	'%Error%': Error,
	'%eval%': eval, 
	'%EvalError%': EvalError,
	'%Float32Array%': typeof Float32Array === 'undefined' ? undefined : Float32Array,
	'%Float64Array%': typeof Float64Array === 'undefined' ? undefined : Float64Array,
	'%FinalizationRegistry%': typeof FinalizationRegistry === 'undefined' ? undefined : FinalizationRegistry,
	'%Function%': $Function,
	'%GeneratorFunction%': needsEval,
	'%Int8Array%': typeof Int8Array === 'undefined' ? undefined : Int8Array,
	'%Int16Array%': typeof Int16Array === 'undefined' ? undefined : Int16Array,
	'%Int32Array%': typeof Int32Array === 'undefined' ? undefined : Int32Array,
	'%isFinite%': isFinite,
	'%isNaN%': isNaN,
	'%IteratorPrototype%': hasSymbols ? getProto(getProto([][Symbol.iterator]())) : undefined,
	'%JSON%': typeof JSON === 'object' ? JSON : undefined,
	'%Map%': typeof Map === 'undefined' ? undefined : Map,
	'%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols ? undefined : getProto(new Map()[Symbol.iterator]()),
	'%Math%': Math,
	'%Number%': Number,
	'%Object%': Object,
	'%parseFloat%': parseFloat,
	'%parseInt%': parseInt,
	'%Promise%': typeof Promise === 'undefined' ? undefined : Promise,
	'%Proxy%': typeof Proxy === 'undefined' ? undefined : Proxy,
	'%RangeError%': RangeError,
	'%ReferenceError%': ReferenceError,
	'%Reflect%': typeof Reflect === 'undefined' ? undefined : Reflect,
	'%RegExp%': RegExp,
	'%Set%': typeof Set === 'undefined' ? undefined : Set,
	'%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols ? undefined : getProto(new Set()[Symbol.iterator]()),
	'%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer,
	'%String%': String,
	'%StringIteratorPrototype%': hasSymbols ? getProto(''[Symbol.iterator]()) : undefined,
	'%Symbol%': hasSymbols ? Symbol : undefined,
	'%SyntaxError%': $SyntaxError,
	'%ThrowTypeError%': ThrowTypeError,
	'%TypedArray%': TypedArray,
	'%TypeError%': $TypeError,
	'%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array,
	'%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray,
	'%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array,
	'%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array,
	'%URIError%': URIError,
	'%WeakMap%': typeof WeakMap === 'undefined' ? undefined : WeakMap,
	'%WeakRef%': typeof WeakRef === 'undefined' ? undefined : WeakRef,
	'%WeakSet%': typeof WeakSet === 'undefined' ? undefined : WeakSet
};

var doEval = function doEval(name) {
	var value;
	if (name === '%AsyncFunction%') {
		value = getEvalledConstructor('async function () {}');
	} else if (name === '%GeneratorFunction%') {
		value = getEvalledConstructor('function* () {}');
	} else if (name === '%AsyncGeneratorFunction%') {
		value = getEvalledConstructor('async function* () {}');
	} else if (name === '%AsyncGenerator%') {
		var fn = doEval('%AsyncGeneratorFunction%');
		if (fn) {
			value = fn.prototype;
		}
	} else if (name === '%AsyncIteratorPrototype%') {
		var gen = doEval('%AsyncGenerator%');
		if (gen) {
			value = getProto(gen.prototype);
		}
	}

	INTRINSICS[name] = value;

	return value;
};

var LEGACY_ALIASES = {
	'%ArrayBufferPrototype%': ['ArrayBuffer', 'prototype'],
	'%ArrayPrototype%': ['Array', 'prototype'],
	'%ArrayProto_entries%': ['Array', 'prototype', 'entries'],
	'%ArrayProto_forEach%': ['Array', 'prototype', 'forEach'],
	'%ArrayProto_keys%': ['Array', 'prototype', 'keys'],
	'%ArrayProto_values%': ['Array', 'prototype', 'values'],
	'%AsyncFunctionPrototype%': ['AsyncFunction', 'prototype'],
	'%AsyncGenerator%': ['AsyncGeneratorFunction', 'prototype'],
	'%AsyncGeneratorPrototype%': ['AsyncGeneratorFunction', 'prototype', 'prototype'],
	'%BooleanPrototype%': ['Boolean', 'prototype'],
	'%DataViewPrototype%': ['DataView', 'prototype'],
	'%DatePrototype%': ['Date', 'prototype'],
	'%ErrorPrototype%': ['Error', 'prototype'],
	'%EvalErrorPrototype%': ['EvalError', 'prototype'],
	'%Float32ArrayPrototype%': ['Float32Array', 'prototype'],
	'%Float64ArrayPrototype%': ['Float64Array', 'prototype'],
	'%FunctionPrototype%': ['Function', 'prototype'],
	'%Generator%': ['GeneratorFunction', 'prototype'],
	'%GeneratorPrototype%': ['GeneratorFunction', 'prototype', 'prototype'],
	'%Int8ArrayPrototype%': ['Int8Array', 'prototype'],
	'%Int16ArrayPrototype%': ['Int16Array', 'prototype'],
	'%Int32ArrayPrototype%': ['Int32Array', 'prototype'],
	'%JSONParse%': ['JSON', 'parse'],
	'%JSONStringify%': ['JSON', 'stringify'],
	'%MapPrototype%': ['Map', 'prototype'],
	'%NumberPrototype%': ['Number', 'prototype'],
	'%ObjectPrototype%': ['Object', 'prototype'],
	'%ObjProto_toString%': ['Object', 'prototype', 'toString'],
	'%ObjProto_valueOf%': ['Object', 'prototype', 'valueOf'],
	'%PromisePrototype%': ['Promise', 'prototype'],
	'%PromiseProto_then%': ['Promise', 'prototype', 'then'],
	'%Promise_all%': ['Promise', 'all'],
	'%Promise_reject%': ['Promise', 'reject'],
	'%Promise_resolve%': ['Promise', 'resolve'],
	'%RangeErrorPrototype%': ['RangeError', 'prototype'],
	'%ReferenceErrorPrototype%': ['ReferenceError', 'prototype'],
	'%RegExpPrototype%': ['RegExp', 'prototype'],
	'%SetPrototype%': ['Set', 'prototype'],
	'%SharedArrayBufferPrototype%': ['SharedArrayBuffer', 'prototype'],
	'%StringPrototype%': ['String', 'prototype'],
	'%SymbolPrototype%': ['Symbol', 'prototype'],
	'%SyntaxErrorPrototype%': ['SyntaxError', 'prototype'],
	'%TypedArrayPrototype%': ['TypedArray', 'prototype'],
	'%TypeErrorPrototype%': ['TypeError', 'prototype'],
	'%Uint8ArrayPrototype%': ['Uint8Array', 'prototype'],
	'%Uint8ClampedArrayPrototype%': ['Uint8ClampedArray', 'prototype'],
	'%Uint16ArrayPrototype%': ['Uint16Array', 'prototype'],
	'%Uint32ArrayPrototype%': ['Uint32Array', 'prototype'],
	'%URIErrorPrototype%': ['URIError', 'prototype'],
	'%WeakMapPrototype%': ['WeakMap', 'prototype'],
	'%WeakSetPrototype%': ['WeakSet', 'prototype']
};

var bind = require('function-bind');
var hasOwn = require('has');
var $concat = bind.call(Function.call, Array.prototype.concat);
var $spliceApply = bind.call(Function.apply, Array.prototype.splice);
var $replace = bind.call(Function.call, String.prototype.replace);
var $strSlice = bind.call(Function.call, String.prototype.slice);

var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
var reEscapeChar = /\\(\\)?/g; /** Used to match backslashes in property paths. */
var stringToPath = function stringToPath(string) {
	var first = $strSlice(string, 0, 1);
	var last = $strSlice(string, -1);
	if (first === '%' && last !== '%') {
		throw new $SyntaxError('invalid intrinsic syntax, expected closing `%`');
	} else if (last === '%' && first !== '%') {
		throw new $SyntaxError('invalid intrinsic syntax, expected opening `%`');
	}
	var result = [];
	$replace(string, rePropName, function (match, number, quote, subString) {
		result[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : number || match;
	});
	return result;
};
/* end adaptation */

var getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
	var intrinsicName = name;
	var alias;
	if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
		alias = LEGACY_ALIASES[intrinsicName];
		intrinsicName = '%' + alias[0] + '%';
	}

	if (hasOwn(INTRINSICS, intrinsicName)) {
		var value = INTRINSICS[intrinsicName];
		if (value === needsEval) {
			value = doEval(intrinsicName);
		}
		if (typeof value === 'undefined' && !allowMissing) {
			throw new $TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');
		}

		return {
			alias: alias,
			name: intrinsicName,
			value: value
		};
	}

	throw new $SyntaxError('intrinsic ' + name + ' does not exist!');
};

module.exports = function GetIntrinsic(name, allowMissing) {
	if (typeof name !== 'string' || name.length === 0) {
		throw new $TypeError('intrinsic name must be a non-empty string');
	}
	if (arguments.length > 1 && typeof allowMissing !== 'boolean') {
		throw new $TypeError('"allowMissing" argument must be a boolean');
	}

	var parts = stringToPath(name);
	var intrinsicBaseName = parts.length > 0 ? parts[0] : '';

	var intrinsic = getBaseIntrinsic('%' + intrinsicBaseName + '%', allowMissing);
	var intrinsicRealName = intrinsic.name;
	var value = intrinsic.value;
	var skipFurtherCaching = false;

	var alias = intrinsic.alias;
	if (alias) {
		intrinsicBaseName = alias[0];
		$spliceApply(parts, $concat([0, 1], alias));
	}

	for (var i = 1, isOwn = true; i < parts.length; i += 1) {
		var part = parts[i];
		var first = $strSlice(part, 0, 1);
		var last = $strSlice(part, -1);
		if (
			(
				(first === '"' || first === "'" || first === '`')
				|| (last === '"' || last === "'" || last === '`')
			)
			&& first !== last
		) {
			throw new $SyntaxError('property names with quotes must have matching quotes');
		}
		if (part === 'constructor' || !isOwn) {
			skipFurtherCaching = true;
		}

		intrinsicBaseName += '.' + part;
		intrinsicRealName = '%' + intrinsicBaseName + '%';

		if (hasOwn(INTRINSICS, intrinsicRealName)) {
			value = INTRINSICS[intrinsicRealName];
		} else if (value != null) {
			if (!(part in value)) {
				if (!allowMissing) {
					throw new $TypeError('base intrinsic for ' + name + ' exists, but the property is not available.');
				}
				return void undefined;
			}
			if ($gOPD && (i + 1) >= parts.length) {
				var desc = $gOPD(value, part);
				isOwn = !!desc;

				
				
				
				
				
				
				
				if (isOwn && 'get' in desc && !('originalValue' in desc.get)) {
					value = desc.get;
				} else {
					value = value[part];
				}
			} else {
				isOwn = hasOwn(value, part);
				value = value[part];
			}

			if (isOwn && !skipFurtherCaching) {
				INTRINSICS[intrinsicRealName] = value;
			}
		}
	}
	return value;
};

},{"function-bind":101,"has":105,"has-symbols":103}],103:[function(require,module,exports){
'use strict';

var origSymbol = typeof Symbol !== 'undefined' && Symbol;
var hasSymbolSham = require('./shams');

module.exports = function hasNativeSymbols() {
	if (typeof origSymbol !== 'function') { return false; }
	if (typeof Symbol !== 'function') { return false; }
	if (typeof origSymbol('foo') !== 'symbol') { return false; }
	if (typeof Symbol('bar') !== 'symbol') { return false; }

	return hasSymbolSham();
};

},{"./shams":104}],104:[function(require,module,exports){
'use strict';

module.exports = function hasSymbols() {
	if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') { return false; }
	if (typeof Symbol.iterator === 'symbol') { return true; }

	var obj = {};
	var sym = Symbol('test');
	var symObj = Object(sym);
	if (typeof sym === 'string') { return false; }

	if (Object.prototype.toString.call(sym) !== '[object Symbol]') { return false; }
	if (Object.prototype.toString.call(symObj) !== '[object Symbol]') { return false; }

	
	
	
	

	
	

	var symVal = 42;
	obj[sym] = symVal;
	for (sym in obj) { return false; } 
	if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) { return false; }

	if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) { return false; }

	var syms = Object.getOwnPropertySymbols(obj);
	if (syms.length !== 1 || syms[0] !== sym) { return false; }

	if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) { return false; }

	if (typeof Object.getOwnPropertyDescriptor === 'function') {
		var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
		if (descriptor.value !== symVal || descriptor.enumerable !== true) { return false; }
	}

	return true;
};

},{}],105:[function(require,module,exports){
'use strict';

var bind = require('function-bind');

module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);

},{"function-bind":101}],106:[function(require,module,exports){
(function (process,global){(function (){
(function () {
  'use strict';

  var root = typeof window === 'object' ? window : {};
  var NODE_JS = !root.HI_BASE32_NO_NODE_JS && typeof process === 'object' && process.versions && process.versions.node;
  if (NODE_JS) {
    root = global;
  }
  var COMMON_JS = !root.HI_BASE32_NO_COMMON_JS && typeof module === 'object' && module.exports;
  var AMD = typeof define === 'function' && define.amd;
  var BASE32_ENCODE_CHAR = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567'.split('');
  var BASE32_DECODE_CHAR = {
    'A': 0, 'B': 1, 'C': 2, 'D': 3, 'E': 4, 'F': 5, 'G': 6, 'H': 7, 'I': 8,
    'J': 9, 'K': 10, 'L': 11, 'M': 12, 'N': 13, 'O': 14, 'P': 15, 'Q': 16,
    'R': 17, 'S': 18, 'T': 19, 'U': 20, 'V': 21, 'W': 22, 'X': 23, 'Y': 24,
    'Z': 25, '2': 26, '3': 27, '4': 28, '5': 29, '6': 30, '7': 31
  };

  var blocks = [0, 0, 0, 0, 0, 0, 0, 0];

  var throwInvalidUtf8 = function (position, partial) {
    if (partial.length > 10) {
      partial = '...' + partial.substr(-10);
    }
    var err = new Error('Decoded data is not valid UTF-8.'
      + ' Maybe try base32.decode.asBytes()?'
      + ' Partial data after reading ' + position + ' bytes: ' + partial + ' <-');
    err.position = position;
    throw err;
  };

  var toUtf8String = function (bytes) {
    var str = '', length = bytes.length, i = 0, followingChars = 0, b, c;
    while (i < length) {
      b = bytes[i++];
      if (b <= 0x7F) {
        str += String.fromCharCode(b);
        continue;
      } else if (b > 0xBF && b <= 0xDF) {
        c = b & 0x1F;
        followingChars = 1;
      } else if (b <= 0xEF) {
        c = b & 0x0F;
        followingChars = 2;
      } else if (b <= 0xF7) {
        c = b & 0x07;
        followingChars = 3;
      } else {
        throwInvalidUtf8(i, str);
      }

      for (var j = 0; j < followingChars; ++j) {
        b = bytes[i++];
        if (b < 0x80 || b > 0xBF) {
          throwInvalidUtf8(i, str);
        }
        c <<= 6;
        c += b & 0x3F;
      }
      if (c >= 0xD800 && c <= 0xDFFF) {
        throwInvalidUtf8(i, str);
      }
      if (c > 0x10FFFF) {
        throwInvalidUtf8(i, str);
      }

      if (c <= 0xFFFF) {
        str += String.fromCharCode(c);
      } else {
        c -= 0x10000;
        str += String.fromCharCode((c >> 10) + 0xD800);
        str += String.fromCharCode((c & 0x3FF) + 0xDC00);
      }
    }
    return str;
  };

  var decodeAsBytes = function (base32Str) {
    if (base32Str === '') {
      return [];
    } else if (!/^[A-Z2-7=]+$/.test(base32Str)) {
      throw new Error('Invalid base32 characters');
    }
    base32Str = base32Str.replace(/=/g, '');
    var v1, v2, v3, v4, v5, v6, v7, v8, bytes = [], index = 0, length = base32Str.length;

    
    for (var i = 0, count = length >> 3 << 3; i < count;) {
      v1 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      v2 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      v3 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      v4 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      v5 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      v6 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      v7 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      v8 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      bytes[index++] = (v1 << 3 | v2 >>> 2) & 255;
      bytes[index++] = (v2 << 6 | v3 << 1 | v4 >>> 4) & 255;
      bytes[index++] = (v4 << 4 | v5 >>> 1) & 255;
      bytes[index++] = (v5 << 7 | v6 << 2 | v7 >>> 3) & 255;
      bytes[index++] = (v7 << 5 | v8) & 255;
    }

    
    var remain = length - count;
    if (remain === 2) {
      v1 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      v2 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      bytes[index++] = (v1 << 3 | v2 >>> 2) & 255;
    } else if (remain === 4) {
      v1 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      v2 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      v3 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      v4 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      bytes[index++] = (v1 << 3 | v2 >>> 2) & 255;
      bytes[index++] = (v2 << 6 | v3 << 1 | v4 >>> 4) & 255;
    } else if (remain === 5) {
      v1 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      v2 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      v3 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      v4 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      v5 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      bytes[index++] = (v1 << 3 | v2 >>> 2) & 255;
      bytes[index++] = (v2 << 6 | v3 << 1 | v4 >>> 4) & 255;
      bytes[index++] = (v4 << 4 | v5 >>> 1) & 255;
    } else if (remain === 7) {
      v1 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      v2 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      v3 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      v4 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      v5 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      v6 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      v7 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      bytes[index++] = (v1 << 3 | v2 >>> 2) & 255;
      bytes[index++] = (v2 << 6 | v3 << 1 | v4 >>> 4) & 255;
      bytes[index++] = (v4 << 4 | v5 >>> 1) & 255;
      bytes[index++] = (v5 << 7 | v6 << 2 | v7 >>> 3) & 255;
    }
    return bytes;
  };

  var encodeAscii = function (str) {
    var v1, v2, v3, v4, v5, base32Str = '', length = str.length;
    for (var i = 0, count = parseInt(length / 5) * 5; i < count;) {
      v1 = str.charCodeAt(i++);
      v2 = str.charCodeAt(i++);
      v3 = str.charCodeAt(i++);
      v4 = str.charCodeAt(i++);
      v5 = str.charCodeAt(i++);
      base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] +
        BASE32_ENCODE_CHAR[(v1 << 2 | v2 >>> 6) & 31] +
        BASE32_ENCODE_CHAR[(v2 >>> 1) & 31] +
        BASE32_ENCODE_CHAR[(v2 << 4 | v3 >>> 4) & 31] +
        BASE32_ENCODE_CHAR[(v3 << 1 | v4 >>> 7) & 31] +
        BASE32_ENCODE_CHAR[(v4 >>> 2) & 31] +
        BASE32_ENCODE_CHAR[(v4 << 3 | v5 >>> 5) & 31] +
        BASE32_ENCODE_CHAR[v5 & 31];
    }

    
    var remain = length - count;
    if (remain === 1) {
      v1 = str.charCodeAt(i);
      base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] +
        BASE32_ENCODE_CHAR[(v1 << 2) & 31] +
        '======';
    } else if (remain === 2) {
      v1 = str.charCodeAt(i++);
      v2 = str.charCodeAt(i);
      base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] +
        BASE32_ENCODE_CHAR[(v1 << 2 | v2 >>> 6) & 31] +
        BASE32_ENCODE_CHAR[(v2 >>> 1) & 31] +
        BASE32_ENCODE_CHAR[(v2 << 4) & 31] +
        '====';
    } else if (remain === 3) {
      v1 = str.charCodeAt(i++);
      v2 = str.charCodeAt(i++);
      v3 = str.charCodeAt(i);
      base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] +
        BASE32_ENCODE_CHAR[(v1 << 2 | v2 >>> 6) & 31] +
        BASE32_ENCODE_CHAR[(v2 >>> 1) & 31] +
        BASE32_ENCODE_CHAR[(v2 << 4 | v3 >>> 4) & 31] +
        BASE32_ENCODE_CHAR[(v3 << 1) & 31] +
        '===';
    } else if (remain === 4) {
      v1 = str.charCodeAt(i++);
      v2 = str.charCodeAt(i++);
      v3 = str.charCodeAt(i++);
      v4 = str.charCodeAt(i);
      base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] +
        BASE32_ENCODE_CHAR[(v1 << 2 | v2 >>> 6) & 31] +
        BASE32_ENCODE_CHAR[(v2 >>> 1) & 31] +
        BASE32_ENCODE_CHAR[(v2 << 4 | v3 >>> 4) & 31] +
        BASE32_ENCODE_CHAR[(v3 << 1 | v4 >>> 7) & 31] +
        BASE32_ENCODE_CHAR[(v4 >>> 2) & 31] +
        BASE32_ENCODE_CHAR[(v4 << 3) & 31] +
        '=';
    }
    return base32Str;
  };

  var encodeUtf8 = function (str) {
    var v1, v2, v3, v4, v5, code, end = false, base32Str = '',
      index = 0, i, start = 0, bytes = 0, length = str.length;
      if (str === '') {
        return base32Str;
      }
    do {
      blocks[0] = blocks[5];
      blocks[1] = blocks[6];
      blocks[2] = blocks[7];
      for (i = start; index < length && i < 5; ++index) {
        code = str.charCodeAt(index);
        if (code < 0x80) {
          blocks[i++] = code;
        } else if (code < 0x800) {
          blocks[i++] = 0xc0 | (code >> 6);
          blocks[i++] = 0x80 | (code & 0x3f);
        } else if (code < 0xd800 || code >= 0xe000) {
          blocks[i++] = 0xe0 | (code >> 12);
          blocks[i++] = 0x80 | ((code >> 6) & 0x3f);
          blocks[i++] = 0x80 | (code & 0x3f);
        } else {
          code = 0x10000 + (((code & 0x3ff) << 10) | (str.charCodeAt(++index) & 0x3ff));
          blocks[i++] = 0xf0 | (code >> 18);
          blocks[i++] = 0x80 | ((code >> 12) & 0x3f);
          blocks[i++] = 0x80 | ((code >> 6) & 0x3f);
          blocks[i++] = 0x80 | (code & 0x3f);
        }
      }
      bytes += i - start;
      start = i - 5;
      if (index === length) {
        ++index;
      }
      if (index > length && i < 6) {
        end = true;
      }
      v1 = blocks[0];
      if (i > 4) {
        v2 = blocks[1];
        v3 = blocks[2];
        v4 = blocks[3];
        v5 = blocks[4];
        base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] +
          BASE32_ENCODE_CHAR[(v1 << 2 | v2 >>> 6) & 31] +
          BASE32_ENCODE_CHAR[(v2 >>> 1) & 31] +
          BASE32_ENCODE_CHAR[(v2 << 4 | v3 >>> 4) & 31] +
          BASE32_ENCODE_CHAR[(v3 << 1 | v4 >>> 7) & 31] +
          BASE32_ENCODE_CHAR[(v4 >>> 2) & 31] +
          BASE32_ENCODE_CHAR[(v4 << 3 | v5 >>> 5) & 31] +
          BASE32_ENCODE_CHAR[v5 & 31];
      } else if (i === 1) {
        base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] +
          BASE32_ENCODE_CHAR[(v1 << 2) & 31] +
          '======';
      } else if (i === 2) {
        v2 = blocks[1];
        base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] +
          BASE32_ENCODE_CHAR[(v1 << 2 | v2 >>> 6) & 31] +
          BASE32_ENCODE_CHAR[(v2 >>> 1) & 31] +
          BASE32_ENCODE_CHAR[(v2 << 4) & 31] +
          '====';
      } else if (i === 3) {
        v2 = blocks[1];
        v3 = blocks[2];
        base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] +
          BASE32_ENCODE_CHAR[(v1 << 2 | v2 >>> 6) & 31] +
          BASE32_ENCODE_CHAR[(v2 >>> 1) & 31] +
          BASE32_ENCODE_CHAR[(v2 << 4 | v3 >>> 4) & 31] +
          BASE32_ENCODE_CHAR[(v3 << 1) & 31] +
          '===';
      } else {
        v2 = blocks[1];
        v3 = blocks[2];
        v4 = blocks[3];
        base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] +
          BASE32_ENCODE_CHAR[(v1 << 2 | v2 >>> 6) & 31] +
          BASE32_ENCODE_CHAR[(v2 >>> 1) & 31] +
          BASE32_ENCODE_CHAR[(v2 << 4 | v3 >>> 4) & 31] +
          BASE32_ENCODE_CHAR[(v3 << 1 | v4 >>> 7) & 31] +
          BASE32_ENCODE_CHAR[(v4 >>> 2) & 31] +
          BASE32_ENCODE_CHAR[(v4 << 3) & 31] +
          '=';
      }
    } while (!end);
    return base32Str;
  };

  var encodeBytes = function (bytes) {
    var v1, v2, v3, v4, v5, base32Str = '', length = bytes.length;
    for (var i = 0, count = parseInt(length / 5) * 5; i < count;) {
      v1 = bytes[i++];
      v2 = bytes[i++];
      v3 = bytes[i++];
      v4 = bytes[i++];
      v5 = bytes[i++];
      base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] +
        BASE32_ENCODE_CHAR[(v1 << 2 | v2 >>> 6) & 31] +
        BASE32_ENCODE_CHAR[(v2 >>> 1) & 31] +
        BASE32_ENCODE_CHAR[(v2 << 4 | v3 >>> 4) & 31] +
        BASE32_ENCODE_CHAR[(v3 << 1 | v4 >>> 7) & 31] +
        BASE32_ENCODE_CHAR[(v4 >>> 2) & 31] +
        BASE32_ENCODE_CHAR[(v4 << 3 | v5 >>> 5) & 31] +
        BASE32_ENCODE_CHAR[v5 & 31];
    }

    
    var remain = length - count;
    if (remain === 1) {
      v1 = bytes[i];
      base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] +
        BASE32_ENCODE_CHAR[(v1 << 2) & 31] +
        '======';
    } else if (remain === 2) {
      v1 = bytes[i++];
      v2 = bytes[i];
      base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] +
        BASE32_ENCODE_CHAR[(v1 << 2 | v2 >>> 6) & 31] +
        BASE32_ENCODE_CHAR[(v2 >>> 1) & 31] +
        BASE32_ENCODE_CHAR[(v2 << 4) & 31] +
        '====';
    } else if (remain === 3) {
      v1 = bytes[i++];
      v2 = bytes[i++];
      v3 = bytes[i];
      base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] +
        BASE32_ENCODE_CHAR[(v1 << 2 | v2 >>> 6) & 31] +
        BASE32_ENCODE_CHAR[(v2 >>> 1) & 31] +
        BASE32_ENCODE_CHAR[(v2 << 4 | v3 >>> 4) & 31] +
        BASE32_ENCODE_CHAR[(v3 << 1) & 31] +
        '===';
    } else if (remain === 4) {
      v1 = bytes[i++];
      v2 = bytes[i++];
      v3 = bytes[i++];
      v4 = bytes[i];
      base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] +
        BASE32_ENCODE_CHAR[(v1 << 2 | v2 >>> 6) & 31] +
        BASE32_ENCODE_CHAR[(v2 >>> 1) & 31] +
        BASE32_ENCODE_CHAR[(v2 << 4 | v3 >>> 4) & 31] +
        BASE32_ENCODE_CHAR[(v3 << 1 | v4 >>> 7) & 31] +
        BASE32_ENCODE_CHAR[(v4 >>> 2) & 31] +
        BASE32_ENCODE_CHAR[(v4 << 3) & 31] +
        '=';
    }
    return base32Str;
  };

  var encode = function (input, asciiOnly) {
    var notString = typeof(input) !== 'string';
    if (notString && input.constructor === ArrayBuffer) {
      input = new Uint8Array(input);
    }
    if (notString) {
      return encodeBytes(input);
    } else if (asciiOnly) {
      return encodeAscii(input);
    } else {
      return encodeUtf8(input);
    }
  };

  var decode = function (base32Str, asciiOnly) {
    if (!asciiOnly) {
      return toUtf8String(decodeAsBytes(base32Str));
    }
    if (base32Str === '') {
      return '';
    } else if (!/^[A-Z2-7=]+$/.test(base32Str)) {
      throw new Error('Invalid base32 characters');
    }
    var v1, v2, v3, v4, v5, v6, v7, v8, str = '', length = base32Str.indexOf('=');
    if (length === -1) {
      length = base32Str.length;
    }

    
    for (var i = 0, count = length >> 3 << 3; i < count;) {
      v1 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      v2 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      v3 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      v4 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      v5 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      v6 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      v7 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      v8 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      str += String.fromCharCode((v1 << 3 | v2 >>> 2) & 255) +
        String.fromCharCode((v2 << 6 | v3 << 1 | v4 >>> 4) & 255) +
        String.fromCharCode((v4 << 4 | v5 >>> 1) & 255) +
        String.fromCharCode((v5 << 7 | v6 << 2 | v7 >>> 3) & 255) +
        String.fromCharCode((v7 << 5 | v8) & 255);
    }

    
    var remain = length - count;
    if (remain === 2) {
      v1 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      v2 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      str += String.fromCharCode((v1 << 3 | v2 >>> 2) & 255);
    } else if (remain === 4) {
      v1 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      v2 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      v3 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      v4 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      str += String.fromCharCode((v1 << 3 | v2 >>> 2) & 255) +
        String.fromCharCode((v2 << 6 | v3 << 1 | v4 >>> 4) & 255);
    } else if (remain === 5) {
      v1 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      v2 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      v3 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      v4 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      v5 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      str += String.fromCharCode((v1 << 3 | v2 >>> 2) & 255) +
        String.fromCharCode((v2 << 6 | v3 << 1 | v4 >>> 4) & 255) +
        String.fromCharCode((v4 << 4 | v5 >>> 1) & 255);
    } else if (remain === 7) {
      v1 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      v2 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      v3 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      v4 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      v5 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      v6 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      v7 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      str += String.fromCharCode((v1 << 3 | v2 >>> 2) & 255) +
        String.fromCharCode((v2 << 6 | v3 << 1 | v4 >>> 4) & 255) +
        String.fromCharCode((v4 << 4 | v5 >>> 1) & 255) +
        String.fromCharCode((v5 << 7 | v6 << 2 | v7 >>> 3) & 255);
    }
    return str;
  };

  var exports = {
    encode: encode,
    decode: decode
  };
  decode.asBytes = decodeAsBytes;

  if (COMMON_JS) {
    module.exports = exports;
  } else {
    root.base32 = exports;
    if (AMD) {
      define(function() {
        return exports;
      });
    }
  }
})();

}).call(this)}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"_process":115}],107:[function(require,module,exports){
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}

},{}],108:[function(require,module,exports){
(function (process,global){(function (){
(function () {
  'use strict';

  var ERROR = 'input is invalid type';
  var WINDOW = typeof window === 'object';
  var root = WINDOW ? window : {};
  if (root.JS_SHA256_NO_WINDOW) {
    WINDOW = false;
  }
  var WEB_WORKER = !WINDOW && typeof self === 'object';
  var NODE_JS = !root.JS_SHA256_NO_NODE_JS && typeof process === 'object' && process.versions && process.versions.node;
  if (NODE_JS) {
    root = global;
  } else if (WEB_WORKER) {
    root = self;
  }
  var COMMON_JS = !root.JS_SHA256_NO_COMMON_JS && typeof module === 'object' && module.exports;
  var AMD = typeof define === 'function' && define.amd;
  var ARRAY_BUFFER = !root.JS_SHA256_NO_ARRAY_BUFFER && typeof ArrayBuffer !== 'undefined';
  var HEX_CHARS = '0123456789abcdef'.split('');
  var EXTRA = [-2147483648, 8388608, 32768, 128];
  var SHIFT = [24, 16, 8, 0];
  var K = [
    0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5,
    0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
    0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
    0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,
    0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
    0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
    0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3,
    0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2
  ];
  var OUTPUT_TYPES = ['hex', 'array', 'digest', 'arrayBuffer'];

  var blocks = [];

  if (root.JS_SHA256_NO_NODE_JS || !Array.isArray) {
    Array.isArray = function (obj) {
      return Object.prototype.toString.call(obj) === '[object Array]';
    };
  }

  if (ARRAY_BUFFER && (root.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView)) {
    ArrayBuffer.isView = function (obj) {
      return typeof obj === 'object' && obj.buffer && obj.buffer.constructor === ArrayBuffer;
    };
  }

  var createOutputMethod = function (outputType, is224) {
    return function (message) {
      return new Sha256(is224, true).update(message)[outputType]();
    };
  };

  var createMethod = function (is224) {
    var method = createOutputMethod('hex', is224);
    if (NODE_JS) {
      method = nodeWrap(method, is224);
    }
    method.create = function () {
      return new Sha256(is224);
    };
    method.update = function (message) {
      return method.create().update(message);
    };
    for (var i = 0; i < OUTPUT_TYPES.length; ++i) {
      var type = OUTPUT_TYPES[i];
      method[type] = createOutputMethod(type, is224);
    }
    return method;
  };

  var nodeWrap = function (method, is224) {
    var crypto = (1, eval)("require('crypto')");
    var Buffer = (1, eval)("require('buffer').Buffer");
    var algorithm = is224 ? 'sha224' : 'sha256';
    var nodeMethod = function (message) {
      if (typeof message === 'string') {
        return crypto.createHash(algorithm).update(message, 'utf8').digest('hex');
      } else {
        if (message === null || message === undefined) {
          throw new Error(ERROR);
        } else if (message.constructor === ArrayBuffer) {
          message = new Uint8Array(message);
        }
      }
      if (Array.isArray(message) || ArrayBuffer.isView(message) ||
        message.constructor === Buffer) {
        return crypto.createHash(algorithm).update(new Buffer(message)).digest('hex');
      } else {
        return method(message);
      }
    };
    return nodeMethod;
  };

  var createHmacOutputMethod = function (outputType, is224) {
    return function (key, message) {
      return new HmacSha256(key, is224, true).update(message)[outputType]();
    };
  };

  var createHmacMethod = function (is224) {
    var method = createHmacOutputMethod('hex', is224);
    method.create = function (key) {
      return new HmacSha256(key, is224);
    };
    method.update = function (key, message) {
      return method.create(key).update(message);
    };
    for (var i = 0; i < OUTPUT_TYPES.length; ++i) {
      var type = OUTPUT_TYPES[i];
      method[type] = createHmacOutputMethod(type, is224);
    }
    return method;
  };

  function Sha256(is224, sharedMemory) {
    if (sharedMemory) {
      blocks[0] = blocks[16] = blocks[1] = blocks[2] = blocks[3] =
        blocks[4] = blocks[5] = blocks[6] = blocks[7] =
        blocks[8] = blocks[9] = blocks[10] = blocks[11] =
        blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
      this.blocks = blocks;
    } else {
      this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    }

    if (is224) {
      this.h0 = 0xc1059ed8;
      this.h1 = 0x367cd507;
      this.h2 = 0x3070dd17;
      this.h3 = 0xf70e5939;
      this.h4 = 0xffc00b31;
      this.h5 = 0x68581511;
      this.h6 = 0x64f98fa7;
      this.h7 = 0xbefa4fa4;
    } else { 
      this.h0 = 0x6a09e667;
      this.h1 = 0xbb67ae85;
      this.h2 = 0x3c6ef372;
      this.h3 = 0xa54ff53a;
      this.h4 = 0x510e527f;
      this.h5 = 0x9b05688c;
      this.h6 = 0x1f83d9ab;
      this.h7 = 0x5be0cd19;
    }

    this.block = this.start = this.bytes = this.hBytes = 0;
    this.finalized = this.hashed = false;
    this.first = true;
    this.is224 = is224;
  }

  Sha256.prototype.update = function (message) {
    if (this.finalized) {
      return;
    }
    var notString, type = typeof message;
    if (type !== 'string') {
      if (type === 'object') {
        if (message === null) {
          throw new Error(ERROR);
        } else if (ARRAY_BUFFER && message.constructor === ArrayBuffer) {
          message = new Uint8Array(message);
        } else if (!Array.isArray(message)) {
          if (!ARRAY_BUFFER || !ArrayBuffer.isView(message)) {
            throw new Error(ERROR);
          }
        }
      } else {
        throw new Error(ERROR);
      }
      notString = true;
    }
    var code, index = 0, i, length = message.length, blocks = this.blocks;

    while (index < length) {
      if (this.hashed) {
        this.hashed = false;
        blocks[0] = this.block;
        blocks[16] = blocks[1] = blocks[2] = blocks[3] =
          blocks[4] = blocks[5] = blocks[6] = blocks[7] =
          blocks[8] = blocks[9] = blocks[10] = blocks[11] =
          blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
      }

      if (notString) {
        for (i = this.start; index < length && i < 64; ++index) {
          blocks[i >> 2] |= message[index] << SHIFT[i++ & 3];
        }
      } else {
        for (i = this.start; index < length && i < 64; ++index) {
          code = message.charCodeAt(index);
          if (code < 0x80) {
            blocks[i >> 2] |= code << SHIFT[i++ & 3];
          } else if (code < 0x800) {
            blocks[i >> 2] |= (0xc0 | (code >> 6)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];
          } else if (code < 0xd800 || code >= 0xe000) {
            blocks[i >> 2] |= (0xe0 | (code >> 12)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | ((code >> 6) & 0x3f)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];
          } else {
            code = 0x10000 + (((code & 0x3ff) << 10) | (message.charCodeAt(++index) & 0x3ff));
            blocks[i >> 2] |= (0xf0 | (code >> 18)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | ((code >> 12) & 0x3f)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | ((code >> 6) & 0x3f)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];
          }
        }
      }

      this.lastByteIndex = i;
      this.bytes += i - this.start;
      if (i >= 64) {
        this.block = blocks[16];
        this.start = i - 64;
        this.hash();
        this.hashed = true;
      } else {
        this.start = i;
      }
    }
    if (this.bytes > 4294967295) {
      this.hBytes += this.bytes / 4294967296 << 0;
      this.bytes = this.bytes % 4294967296;
    }
    return this;
  };

  Sha256.prototype.finalize = function () {
    if (this.finalized) {
      return;
    }
    this.finalized = true;
    var blocks = this.blocks, i = this.lastByteIndex;
    blocks[16] = this.block;
    blocks[i >> 2] |= EXTRA[i & 3];
    this.block = blocks[16];
    if (i >= 56) {
      if (!this.hashed) {
        this.hash();
      }
      blocks[0] = this.block;
      blocks[16] = blocks[1] = blocks[2] = blocks[3] =
        blocks[4] = blocks[5] = blocks[6] = blocks[7] =
        blocks[8] = blocks[9] = blocks[10] = blocks[11] =
        blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
    }
    blocks[14] = this.hBytes << 3 | this.bytes >>> 29;
    blocks[15] = this.bytes << 3;
    this.hash();
  };

  Sha256.prototype.hash = function () {
    var a = this.h0, b = this.h1, c = this.h2, d = this.h3, e = this.h4, f = this.h5, g = this.h6,
      h = this.h7, blocks = this.blocks, j, s0, s1, maj, t1, t2, ch, ab, da, cd, bc;

    for (j = 16; j < 64; ++j) {
      
      t1 = blocks[j - 15];
      s0 = ((t1 >>> 7) | (t1 << 25)) ^ ((t1 >>> 18) | (t1 << 14)) ^ (t1 >>> 3);
      t1 = blocks[j - 2];
      s1 = ((t1 >>> 17) | (t1 << 15)) ^ ((t1 >>> 19) | (t1 << 13)) ^ (t1 >>> 10);
      blocks[j] = blocks[j - 16] + s0 + blocks[j - 7] + s1 << 0;
    }

    bc = b & c;
    for (j = 0; j < 64; j += 4) {
      if (this.first) {
        if (this.is224) {
          ab = 300032;
          t1 = blocks[0] - 1413257819;
          h = t1 - 150054599 << 0;
          d = t1 + 24177077 << 0;
        } else {
          ab = 704751109;
          t1 = blocks[0] - 210244248;
          h = t1 - 1521486534 << 0;
          d = t1 + 143694565 << 0;
        }
        this.first = false;
      } else {
        s0 = ((a >>> 2) | (a << 30)) ^ ((a >>> 13) | (a << 19)) ^ ((a >>> 22) | (a << 10));
        s1 = ((e >>> 6) | (e << 26)) ^ ((e >>> 11) | (e << 21)) ^ ((e >>> 25) | (e << 7));
        ab = a & b;
        maj = ab ^ (a & c) ^ bc;
        ch = (e & f) ^ (~e & g);
        t1 = h + s1 + ch + K[j] + blocks[j];
        t2 = s0 + maj;
        h = d + t1 << 0;
        d = t1 + t2 << 0;
      }
      s0 = ((d >>> 2) | (d << 30)) ^ ((d >>> 13) | (d << 19)) ^ ((d >>> 22) | (d << 10));
      s1 = ((h >>> 6) | (h << 26)) ^ ((h >>> 11) | (h << 21)) ^ ((h >>> 25) | (h << 7));
      da = d & a;
      maj = da ^ (d & b) ^ ab;
      ch = (h & e) ^ (~h & f);
      t1 = g + s1 + ch + K[j + 1] + blocks[j + 1];
      t2 = s0 + maj;
      g = c + t1 << 0;
      c = t1 + t2 << 0;
      s0 = ((c >>> 2) | (c << 30)) ^ ((c >>> 13) | (c << 19)) ^ ((c >>> 22) | (c << 10));
      s1 = ((g >>> 6) | (g << 26)) ^ ((g >>> 11) | (g << 21)) ^ ((g >>> 25) | (g << 7));
      cd = c & d;
      maj = cd ^ (c & a) ^ da;
      ch = (g & h) ^ (~g & e);
      t1 = f + s1 + ch + K[j + 2] + blocks[j + 2];
      t2 = s0 + maj;
      f = b + t1 << 0;
      b = t1 + t2 << 0;
      s0 = ((b >>> 2) | (b << 30)) ^ ((b >>> 13) | (b << 19)) ^ ((b >>> 22) | (b << 10));
      s1 = ((f >>> 6) | (f << 26)) ^ ((f >>> 11) | (f << 21)) ^ ((f >>> 25) | (f << 7));
      bc = b & c;
      maj = bc ^ (b & d) ^ cd;
      ch = (f & g) ^ (~f & h);
      t1 = e + s1 + ch + K[j + 3] + blocks[j + 3];
      t2 = s0 + maj;
      e = a + t1 << 0;
      a = t1 + t2 << 0;
    }

    this.h0 = this.h0 + a << 0;
    this.h1 = this.h1 + b << 0;
    this.h2 = this.h2 + c << 0;
    this.h3 = this.h3 + d << 0;
    this.h4 = this.h4 + e << 0;
    this.h5 = this.h5 + f << 0;
    this.h6 = this.h6 + g << 0;
    this.h7 = this.h7 + h << 0;
  };

  Sha256.prototype.hex = function () {
    this.finalize();

    var h0 = this.h0, h1 = this.h1, h2 = this.h2, h3 = this.h3, h4 = this.h4, h5 = this.h5,
      h6 = this.h6, h7 = this.h7;

    var hex = HEX_CHARS[(h0 >> 28) & 0x0F] + HEX_CHARS[(h0 >> 24) & 0x0F] +
      HEX_CHARS[(h0 >> 20) & 0x0F] + HEX_CHARS[(h0 >> 16) & 0x0F] +
      HEX_CHARS[(h0 >> 12) & 0x0F] + HEX_CHARS[(h0 >> 8) & 0x0F] +
      HEX_CHARS[(h0 >> 4) & 0x0F] + HEX_CHARS[h0 & 0x0F] +
      HEX_CHARS[(h1 >> 28) & 0x0F] + HEX_CHARS[(h1 >> 24) & 0x0F] +
      HEX_CHARS[(h1 >> 20) & 0x0F] + HEX_CHARS[(h1 >> 16) & 0x0F] +
      HEX_CHARS[(h1 >> 12) & 0x0F] + HEX_CHARS[(h1 >> 8) & 0x0F] +
      HEX_CHARS[(h1 >> 4) & 0x0F] + HEX_CHARS[h1 & 0x0F] +
      HEX_CHARS[(h2 >> 28) & 0x0F] + HEX_CHARS[(h2 >> 24) & 0x0F] +
      HEX_CHARS[(h2 >> 20) & 0x0F] + HEX_CHARS[(h2 >> 16) & 0x0F] +
      HEX_CHARS[(h2 >> 12) & 0x0F] + HEX_CHARS[(h2 >> 8) & 0x0F] +
      HEX_CHARS[(h2 >> 4) & 0x0F] + HEX_CHARS[h2 & 0x0F] +
      HEX_CHARS[(h3 >> 28) & 0x0F] + HEX_CHARS[(h3 >> 24) & 0x0F] +
      HEX_CHARS[(h3 >> 20) & 0x0F] + HEX_CHARS[(h3 >> 16) & 0x0F] +
      HEX_CHARS[(h3 >> 12) & 0x0F] + HEX_CHARS[(h3 >> 8) & 0x0F] +
      HEX_CHARS[(h3 >> 4) & 0x0F] + HEX_CHARS[h3 & 0x0F] +
      HEX_CHARS[(h4 >> 28) & 0x0F] + HEX_CHARS[(h4 >> 24) & 0x0F] +
      HEX_CHARS[(h4 >> 20) & 0x0F] + HEX_CHARS[(h4 >> 16) & 0x0F] +
      HEX_CHARS[(h4 >> 12) & 0x0F] + HEX_CHARS[(h4 >> 8) & 0x0F] +
      HEX_CHARS[(h4 >> 4) & 0x0F] + HEX_CHARS[h4 & 0x0F] +
      HEX_CHARS[(h5 >> 28) & 0x0F] + HEX_CHARS[(h5 >> 24) & 0x0F] +
      HEX_CHARS[(h5 >> 20) & 0x0F] + HEX_CHARS[(h5 >> 16) & 0x0F] +
      HEX_CHARS[(h5 >> 12) & 0x0F] + HEX_CHARS[(h5 >> 8) & 0x0F] +
      HEX_CHARS[(h5 >> 4) & 0x0F] + HEX_CHARS[h5 & 0x0F] +
      HEX_CHARS[(h6 >> 28) & 0x0F] + HEX_CHARS[(h6 >> 24) & 0x0F] +
      HEX_CHARS[(h6 >> 20) & 0x0F] + HEX_CHARS[(h6 >> 16) & 0x0F] +
      HEX_CHARS[(h6 >> 12) & 0x0F] + HEX_CHARS[(h6 >> 8) & 0x0F] +
      HEX_CHARS[(h6 >> 4) & 0x0F] + HEX_CHARS[h6 & 0x0F];
    if (!this.is224) {
      hex += HEX_CHARS[(h7 >> 28) & 0x0F] + HEX_CHARS[(h7 >> 24) & 0x0F] +
        HEX_CHARS[(h7 >> 20) & 0x0F] + HEX_CHARS[(h7 >> 16) & 0x0F] +
        HEX_CHARS[(h7 >> 12) & 0x0F] + HEX_CHARS[(h7 >> 8) & 0x0F] +
        HEX_CHARS[(h7 >> 4) & 0x0F] + HEX_CHARS[h7 & 0x0F];
    }
    return hex;
  };

  Sha256.prototype.toString = Sha256.prototype.hex;

  Sha256.prototype.digest = function () {
    this.finalize();

    var h0 = this.h0, h1 = this.h1, h2 = this.h2, h3 = this.h3, h4 = this.h4, h5 = this.h5,
      h6 = this.h6, h7 = this.h7;

    var arr = [
      (h0 >> 24) & 0xFF, (h0 >> 16) & 0xFF, (h0 >> 8) & 0xFF, h0 & 0xFF,
      (h1 >> 24) & 0xFF, (h1 >> 16) & 0xFF, (h1 >> 8) & 0xFF, h1 & 0xFF,
      (h2 >> 24) & 0xFF, (h2 >> 16) & 0xFF, (h2 >> 8) & 0xFF, h2 & 0xFF,
      (h3 >> 24) & 0xFF, (h3 >> 16) & 0xFF, (h3 >> 8) & 0xFF, h3 & 0xFF,
      (h4 >> 24) & 0xFF, (h4 >> 16) & 0xFF, (h4 >> 8) & 0xFF, h4 & 0xFF,
      (h5 >> 24) & 0xFF, (h5 >> 16) & 0xFF, (h5 >> 8) & 0xFF, h5 & 0xFF,
      (h6 >> 24) & 0xFF, (h6 >> 16) & 0xFF, (h6 >> 8) & 0xFF, h6 & 0xFF
    ];
    if (!this.is224) {
      arr.push((h7 >> 24) & 0xFF, (h7 >> 16) & 0xFF, (h7 >> 8) & 0xFF, h7 & 0xFF);
    }
    return arr;
  };

  Sha256.prototype.array = Sha256.prototype.digest;

  Sha256.prototype.arrayBuffer = function () {
    this.finalize();

    var buffer = new ArrayBuffer(this.is224 ? 28 : 32);
    var dataView = new DataView(buffer);
    dataView.setUint32(0, this.h0);
    dataView.setUint32(4, this.h1);
    dataView.setUint32(8, this.h2);
    dataView.setUint32(12, this.h3);
    dataView.setUint32(16, this.h4);
    dataView.setUint32(20, this.h5);
    dataView.setUint32(24, this.h6);
    if (!this.is224) {
      dataView.setUint32(28, this.h7);
    }
    return buffer;
  };

  function HmacSha256(key, is224, sharedMemory) {
    var i, type = typeof key;
    if (type === 'string') {
      var bytes = [], length = key.length, index = 0, code;
      for (i = 0; i < length; ++i) {
        code = key.charCodeAt(i);
        if (code < 0x80) {
          bytes[index++] = code;
        } else if (code < 0x800) {
          bytes[index++] = (0xc0 | (code >> 6));
          bytes[index++] = (0x80 | (code & 0x3f));
        } else if (code < 0xd800 || code >= 0xe000) {
          bytes[index++] = (0xe0 | (code >> 12));
          bytes[index++] = (0x80 | ((code >> 6) & 0x3f));
          bytes[index++] = (0x80 | (code & 0x3f));
        } else {
          code = 0x10000 + (((code & 0x3ff) << 10) | (key.charCodeAt(++i) & 0x3ff));
          bytes[index++] = (0xf0 | (code >> 18));
          bytes[index++] = (0x80 | ((code >> 12) & 0x3f));
          bytes[index++] = (0x80 | ((code >> 6) & 0x3f));
          bytes[index++] = (0x80 | (code & 0x3f));
        }
      }
      key = bytes;
    } else {
      if (type === 'object') {
        if (key === null) {
          throw new Error(ERROR);
        } else if (ARRAY_BUFFER && key.constructor === ArrayBuffer) {
          key = new Uint8Array(key);
        } else if (!Array.isArray(key)) {
          if (!ARRAY_BUFFER || !ArrayBuffer.isView(key)) {
            throw new Error(ERROR);
          }
        }
      } else {
        throw new Error(ERROR);
      }
    }

    if (key.length > 64) {
      key = (new Sha256(is224, true)).update(key).array();
    }

    var oKeyPad = [], iKeyPad = [];
    for (i = 0; i < 64; ++i) {
      var b = key[i] || 0;
      oKeyPad[i] = 0x5c ^ b;
      iKeyPad[i] = 0x36 ^ b;
    }

    Sha256.call(this, is224, sharedMemory);

    this.update(iKeyPad);
    this.oKeyPad = oKeyPad;
    this.inner = true;
    this.sharedMemory = sharedMemory;
  }
  HmacSha256.prototype = new Sha256();

  HmacSha256.prototype.finalize = function () {
    Sha256.prototype.finalize.call(this);
    if (this.inner) {
      this.inner = false;
      var innerHash = this.array();
      Sha256.call(this, this.is224, this.sharedMemory);
      this.update(this.oKeyPad);
      this.update(innerHash);
      Sha256.prototype.finalize.call(this);
    }
  };

  var exports = createMethod();
  exports.sha256 = exports;
  exports.sha224 = createMethod(true);
  exports.sha256.hmac = createHmacMethod();
  exports.sha224.hmac = createHmacMethod(true);

  if (COMMON_JS) {
    module.exports = exports;
  } else {
    root.sha256 = exports.sha256;
    root.sha224 = exports.sha224;
    if (AMD) {
      define(function () {
        return exports;
      });
    }
  }
})();

}).call(this)}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"_process":115}],109:[function(require,module,exports){
(function (process,global){(function (){
(function () {
  'use strict';

  var INPUT_ERROR = 'input is invalid type';
  var FINALIZE_ERROR = 'finalize already called';
  var WINDOW = typeof window === 'object';
  var root = WINDOW ? window : {};
  if (root.JS_SHA512_NO_WINDOW) {
    WINDOW = false;
  }
  var WEB_WORKER = !WINDOW && typeof self === 'object';
  var NODE_JS = !root.JS_SHA512_NO_NODE_JS && typeof process === 'object' && process.versions && process.versions.node;
  if (NODE_JS) {
    root = global;
  } else if (WEB_WORKER) {
    root = self;
  }
  var COMMON_JS = !root.JS_SHA512_NO_COMMON_JS && typeof module === 'object' && module.exports;
  var AMD = typeof define === 'function' && define.amd;
  var ARRAY_BUFFER = !root.JS_SHA512_NO_ARRAY_BUFFER && typeof ArrayBuffer !== 'undefined';
  var HEX_CHARS = '0123456789abcdef'.split('');
  var EXTRA = [-2147483648, 8388608, 32768, 128];
  var SHIFT = [24, 16, 8, 0];
  var K = [
    0x428A2F98, 0xD728AE22, 0x71374491, 0x23EF65CD,
    0xB5C0FBCF, 0xEC4D3B2F, 0xE9B5DBA5, 0x8189DBBC,
    0x3956C25B, 0xF348B538, 0x59F111F1, 0xB605D019,
    0x923F82A4, 0xAF194F9B, 0xAB1C5ED5, 0xDA6D8118,
    0xD807AA98, 0xA3030242, 0x12835B01, 0x45706FBE,
    0x243185BE, 0x4EE4B28C, 0x550C7DC3, 0xD5FFB4E2,
    0x72BE5D74, 0xF27B896F, 0x80DEB1FE, 0x3B1696B1,
    0x9BDC06A7, 0x25C71235, 0xC19BF174, 0xCF692694,
    0xE49B69C1, 0x9EF14AD2, 0xEFBE4786, 0x384F25E3,
    0x0FC19DC6, 0x8B8CD5B5, 0x240CA1CC, 0x77AC9C65,
    0x2DE92C6F, 0x592B0275, 0x4A7484AA, 0x6EA6E483,
    0x5CB0A9DC, 0xBD41FBD4, 0x76F988DA, 0x831153B5,
    0x983E5152, 0xEE66DFAB, 0xA831C66D, 0x2DB43210,
    0xB00327C8, 0x98FB213F, 0xBF597FC7, 0xBEEF0EE4,
    0xC6E00BF3, 0x3DA88FC2, 0xD5A79147, 0x930AA725,
    0x06CA6351, 0xE003826F, 0x14292967, 0x0A0E6E70,
    0x27B70A85, 0x46D22FFC, 0x2E1B2138, 0x5C26C926,
    0x4D2C6DFC, 0x5AC42AED, 0x53380D13, 0x9D95B3DF,
    0x650A7354, 0x8BAF63DE, 0x766A0ABB, 0x3C77B2A8,
    0x81C2C92E, 0x47EDAEE6, 0x92722C85, 0x1482353B,
    0xA2BFE8A1, 0x4CF10364, 0xA81A664B, 0xBC423001,
    0xC24B8B70, 0xD0F89791, 0xC76C51A3, 0x0654BE30,
    0xD192E819, 0xD6EF5218, 0xD6990624, 0x5565A910,
    0xF40E3585, 0x5771202A, 0x106AA070, 0x32BBD1B8,
    0x19A4C116, 0xB8D2D0C8, 0x1E376C08, 0x5141AB53,
    0x2748774C, 0xDF8EEB99, 0x34B0BCB5, 0xE19B48A8,
    0x391C0CB3, 0xC5C95A63, 0x4ED8AA4A, 0xE3418ACB,
    0x5B9CCA4F, 0x7763E373, 0x682E6FF3, 0xD6B2B8A3,
    0x748F82EE, 0x5DEFB2FC, 0x78A5636F, 0x43172F60,
    0x84C87814, 0xA1F0AB72, 0x8CC70208, 0x1A6439EC,
    0x90BEFFFA, 0x23631E28, 0xA4506CEB, 0xDE82BDE9,
    0xBEF9A3F7, 0xB2C67915, 0xC67178F2, 0xE372532B,
    0xCA273ECE, 0xEA26619C, 0xD186B8C7, 0x21C0C207,
    0xEADA7DD6, 0xCDE0EB1E, 0xF57D4F7F, 0xEE6ED178,
    0x06F067AA, 0x72176FBA, 0x0A637DC5, 0xA2C898A6,
    0x113F9804, 0xBEF90DAE, 0x1B710B35, 0x131C471B,
    0x28DB77F5, 0x23047D84, 0x32CAAB7B, 0x40C72493,
    0x3C9EBE0A, 0x15C9BEBC, 0x431D67C4, 0x9C100D4C,
    0x4CC5D4BE, 0xCB3E42B6, 0x597F299C, 0xFC657E2A,
    0x5FCB6FAB, 0x3AD6FAEC, 0x6C44198C, 0x4A475817
  ];

  var OUTPUT_TYPES = ['hex', 'array', 'digest', 'arrayBuffer'];

  var blocks = [];

  if (root.JS_SHA512_NO_NODE_JS || !Array.isArray) {
    Array.isArray = function (obj) {
      return Object.prototype.toString.call(obj) === '[object Array]';
    };
  }

  if (ARRAY_BUFFER && (root.JS_SHA512_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView)) {
    ArrayBuffer.isView = function (obj) {
      return typeof obj === 'object' && obj.buffer && obj.buffer.constructor === ArrayBuffer;
    };
  }

  var createOutputMethod = function (outputType, bits) {
    return function (message) {
      return new Sha512(bits, true).update(message)[outputType]();
    };
  };

  var createMethod = function (bits) {
    var method = createOutputMethod('hex', bits);
    method.create = function () {
      return new Sha512(bits);
    };
    method.update = function (message) {
      return method.create().update(message);
    };
    for (var i = 0; i < OUTPUT_TYPES.length; ++i) {
      var type = OUTPUT_TYPES[i];
      method[type] = createOutputMethod(type, bits);
    }
    return method;
  };

  var createHmacOutputMethod = function (outputType, bits) {
    return function (key, message) {
      return new HmacSha512(key, bits, true).update(message)[outputType]();
    };
  };

  var createHmacMethod = function (bits) {
    var method = createHmacOutputMethod('hex', bits);
    method.create = function (key) {
      return new HmacSha512(key, bits);
    };
    method.update = function (key, message) {
      return method.create(key).update(message);
    };
    for (var i = 0; i < OUTPUT_TYPES.length; ++i) {
      var type = OUTPUT_TYPES[i];
      method[type] = createHmacOutputMethod(type, bits);
    }
    return method;
  };

  function Sha512(bits, sharedMemory) {
    if (sharedMemory) {
      blocks[0] = blocks[1] = blocks[2] = blocks[3] = blocks[4] =
      blocks[5] = blocks[6] = blocks[7] = blocks[8] =
      blocks[9] = blocks[10] = blocks[11] = blocks[12] =
      blocks[13] = blocks[14] = blocks[15] = blocks[16] =
      blocks[17] = blocks[18] = blocks[19] = blocks[20] =
      blocks[21] = blocks[22] = blocks[23] = blocks[24] =
      blocks[25] = blocks[26] = blocks[27] = blocks[28] =
      blocks[29] = blocks[30] = blocks[31] = blocks[32] = 0;
      this.blocks = blocks;
    } else {
      this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    }

    if (bits == 384) {
      this.h0h = 0xCBBB9D5D;
      this.h0l = 0xC1059ED8;
      this.h1h = 0x629A292A;
      this.h1l = 0x367CD507;
      this.h2h = 0x9159015A;
      this.h2l = 0x3070DD17;
      this.h3h = 0x152FECD8;
      this.h3l = 0xF70E5939;
      this.h4h = 0x67332667;
      this.h4l = 0xFFC00B31;
      this.h5h = 0x8EB44A87;
      this.h5l = 0x68581511;
      this.h6h = 0xDB0C2E0D;
      this.h6l = 0x64F98FA7;
      this.h7h = 0x47B5481D;
      this.h7l = 0xBEFA4FA4;
    } else if (bits == 256) {
      this.h0h = 0x22312194;
      this.h0l = 0xFC2BF72C;
      this.h1h = 0x9F555FA3;
      this.h1l = 0xC84C64C2;
      this.h2h = 0x2393B86B;
      this.h2l = 0x6F53B151;
      this.h3h = 0x96387719;
      this.h3l = 0x5940EABD;
      this.h4h = 0x96283EE2;
      this.h4l = 0xA88EFFE3;
      this.h5h = 0xBE5E1E25;
      this.h5l = 0x53863992;
      this.h6h = 0x2B0199FC;
      this.h6l = 0x2C85B8AA;
      this.h7h = 0x0EB72DDC;
      this.h7l = 0x81C52CA2;
    } else if (bits == 224) {
      this.h0h = 0x8C3D37C8;
      this.h0l = 0x19544DA2;
      this.h1h = 0x73E19966;
      this.h1l = 0x89DCD4D6;
      this.h2h = 0x1DFAB7AE;
      this.h2l = 0x32FF9C82;
      this.h3h = 0x679DD514;
      this.h3l = 0x582F9FCF;
      this.h4h = 0x0F6D2B69;
      this.h4l = 0x7BD44DA8;
      this.h5h = 0x77E36F73;
      this.h5l = 0x04C48942;
      this.h6h = 0x3F9D85A8;
      this.h6l = 0x6A1D36C8;
      this.h7h = 0x1112E6AD;
      this.h7l = 0x91D692A1;
    } else { 
      this.h0h = 0x6A09E667;
      this.h0l = 0xF3BCC908;
      this.h1h = 0xBB67AE85;
      this.h1l = 0x84CAA73B;
      this.h2h = 0x3C6EF372;
      this.h2l = 0xFE94F82B;
      this.h3h = 0xA54FF53A;
      this.h3l = 0x5F1D36F1;
      this.h4h = 0x510E527F;
      this.h4l = 0xADE682D1;
      this.h5h = 0x9B05688C;
      this.h5l = 0x2B3E6C1F;
      this.h6h = 0x1F83D9AB;
      this.h6l = 0xFB41BD6B;
      this.h7h = 0x5BE0CD19;
      this.h7l = 0x137E2179;
    }
    this.bits = bits;

    this.block = this.start = this.bytes = this.hBytes = 0;
    this.finalized = this.hashed = false;
  }

  Sha512.prototype.update = function (message) {
    if (this.finalized) {
      throw new Error(FINALIZE_ERROR);
    }
    var notString, type = typeof message;
    if (type !== 'string') {
      if (type === 'object') {
        if (message === null) {
          throw new Error(INPUT_ERROR);
        } else if (ARRAY_BUFFER && message.constructor === ArrayBuffer) {
          message = new Uint8Array(message);
        } else if (!Array.isArray(message)) {
          if (!ARRAY_BUFFER || !ArrayBuffer.isView(message)) {
            throw new Error(INPUT_ERROR);
          }
        }
      } else {
        throw new Error(INPUT_ERROR);
      }
      notString = true;
    }
    var code, index = 0, i, length = message.length, blocks = this.blocks;

    while (index < length) {
      if (this.hashed) {
        this.hashed = false;
        blocks[0] = this.block;
        blocks[1] = blocks[2] = blocks[3] = blocks[4] =
        blocks[5] = blocks[6] = blocks[7] = blocks[8] =
        blocks[9] = blocks[10] = blocks[11] = blocks[12] =
        blocks[13] = blocks[14] = blocks[15] = blocks[16] =
        blocks[17] = blocks[18] = blocks[19] = blocks[20] =
        blocks[21] = blocks[22] = blocks[23] = blocks[24] =
        blocks[25] = blocks[26] = blocks[27] = blocks[28] =
        blocks[29] = blocks[30] = blocks[31] = blocks[32] = 0;
      }

      if(notString) {
        for (i = this.start; index < length && i < 128; ++index) {
          blocks[i >> 2] |= message[index] << SHIFT[i++ & 3];
        }
      } else {
        for (i = this.start; index < length && i < 128; ++index) {
          code = message.charCodeAt(index);
          if (code < 0x80) {
            blocks[i >> 2] |= code << SHIFT[i++ & 3];
          } else if (code < 0x800) {
            blocks[i >> 2] |= (0xc0 | (code >> 6)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];
          } else if (code < 0xd800 || code >= 0xe000) {
            blocks[i >> 2] |= (0xe0 | (code >> 12)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | ((code >> 6) & 0x3f)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];
          } else {
            code = 0x10000 + (((code & 0x3ff) << 10) | (message.charCodeAt(++index) & 0x3ff));
            blocks[i >> 2] |= (0xf0 | (code >> 18)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | ((code >> 12) & 0x3f)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | ((code >> 6) & 0x3f)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];
          }
        }
      }

      this.lastByteIndex = i;
      this.bytes += i - this.start;
      if (i >= 128) {
        this.block = blocks[32];
        this.start = i - 128;
        this.hash();
        this.hashed = true;
      } else {
        this.start = i;
      }
    }
    if (this.bytes > 4294967295) {
      this.hBytes += this.bytes / 4294967296 << 0;
      this.bytes = this.bytes % 4294967296;
    }
    return this;
  };

  Sha512.prototype.finalize = function () {
    if (this.finalized) {
      return;
    }
    this.finalized = true;
    var blocks = this.blocks, i = this.lastByteIndex;
    blocks[32] = this.block;
    blocks[i >> 2] |= EXTRA[i & 3];
    this.block = blocks[32];
    if (i >= 112) {
      if (!this.hashed) {
        this.hash();
      }
      blocks[0] = this.block;
      blocks[1] = blocks[2] = blocks[3] = blocks[4] =
      blocks[5] = blocks[6] = blocks[7] = blocks[8] =
      blocks[9] = blocks[10] = blocks[11] = blocks[12] =
      blocks[13] = blocks[14] = blocks[15] = blocks[16] =
      blocks[17] = blocks[18] = blocks[19] = blocks[20] =
      blocks[21] = blocks[22] = blocks[23] = blocks[24] =
      blocks[25] = blocks[26] = blocks[27] = blocks[28] =
      blocks[29] = blocks[30] = blocks[31] = blocks[32] = 0;
    }
    blocks[30] = this.hBytes << 3 | this.bytes >>> 29;
    blocks[31] = this.bytes << 3;
    this.hash();
  };

  Sha512.prototype.hash = function () {
    var h0h = this.h0h, h0l = this.h0l, h1h = this.h1h, h1l = this.h1l,
      h2h = this.h2h, h2l = this.h2l, h3h = this.h3h, h3l = this.h3l,
      h4h = this.h4h, h4l = this.h4l, h5h = this.h5h, h5l = this.h5l,
      h6h = this.h6h, h6l = this.h6l, h7h = this.h7h, h7l = this.h7l,
      blocks = this.blocks, j, s0h, s0l, s1h, s1l, c1, c2, c3, c4,
      abh, abl, dah, dal, cdh, cdl, bch, bcl,
      majh, majl, t1h, t1l, t2h, t2l, chh, chl;

    for (j = 32; j < 160; j += 2) {
      t1h = blocks[j - 30];
      t1l = blocks[j - 29];
      s0h = ((t1h >>> 1) | (t1l << 31)) ^ ((t1h >>> 8) | (t1l << 24)) ^ (t1h >>> 7);
      s0l = ((t1l >>> 1) | (t1h << 31)) ^ ((t1l >>> 8) | (t1h << 24)) ^ ((t1l >>> 7) | t1h << 25);

      t1h = blocks[j - 4];
      t1l = blocks[j - 3];
      s1h = ((t1h >>> 19) | (t1l << 13)) ^ ((t1l >>> 29) | (t1h << 3)) ^ (t1h >>> 6);
      s1l = ((t1l >>> 19) | (t1h << 13)) ^ ((t1h >>> 29) | (t1l << 3)) ^ ((t1l >>> 6) | t1h << 26);

      t1h = blocks[j - 32];
      t1l = blocks[j - 31];
      t2h = blocks[j - 14];
      t2l = blocks[j - 13];

      c1 = (t2l & 0xFFFF) + (t1l & 0xFFFF) + (s0l & 0xFFFF) + (s1l & 0xFFFF);
      c2 = (t2l >>> 16) + (t1l >>> 16) + (s0l >>> 16) + (s1l >>> 16) + (c1 >>> 16);
      c3 = (t2h & 0xFFFF) + (t1h & 0xFFFF) + (s0h & 0xFFFF) + (s1h & 0xFFFF) + (c2 >>> 16);
      c4 = (t2h >>> 16) + (t1h >>> 16) + (s0h >>> 16) + (s1h >>> 16) + (c3 >>> 16);

      blocks[j] = (c4 << 16) | (c3 & 0xFFFF);
      blocks[j + 1] = (c2 << 16) | (c1 & 0xFFFF);
    }

    var ah = h0h, al = h0l, bh = h1h, bl = h1l, ch = h2h, cl = h2l, dh = h3h, dl = h3l, eh = h4h, el = h4l, fh = h5h, fl = h5l, gh = h6h, gl = h6l, hh = h7h, hl = h7l;
    bch = bh & ch;
    bcl = bl & cl;
    for (j = 0; j < 160; j += 8) {
      s0h = ((ah >>> 28) | (al << 4)) ^ ((al >>> 2) | (ah << 30)) ^ ((al >>> 7) | (ah << 25));
      s0l = ((al >>> 28) | (ah << 4)) ^ ((ah >>> 2) | (al << 30)) ^ ((ah >>> 7) | (al << 25));

      s1h = ((eh >>> 14) | (el << 18)) ^ ((eh >>> 18) | (el << 14)) ^ ((el >>> 9) | (eh << 23));
      s1l = ((el >>> 14) | (eh << 18)) ^ ((el >>> 18) | (eh << 14)) ^ ((eh >>> 9) | (el << 23));

      abh = ah & bh;
      abl = al & bl;
      majh = abh ^ (ah & ch) ^ bch;
      majl = abl ^ (al & cl) ^ bcl;

      chh = (eh & fh) ^ (~eh & gh);
      chl = (el & fl) ^ (~el & gl);

      t1h = blocks[j];
      t1l = blocks[j + 1];
      t2h = K[j];
      t2l = K[j + 1];

      c1 = (t2l & 0xFFFF) + (t1l & 0xFFFF) + (chl & 0xFFFF) + (s1l & 0xFFFF) + (hl & 0xFFFF);
      c2 = (t2l >>> 16) + (t1l >>> 16) + (chl >>> 16) + (s1l >>> 16) + (hl >>> 16) + (c1 >>> 16);
      c3 = (t2h & 0xFFFF) + (t1h & 0xFFFF) + (chh & 0xFFFF) + (s1h & 0xFFFF) + (hh & 0xFFFF) + (c2 >>> 16);
      c4 = (t2h >>> 16) + (t1h >>> 16) + (chh >>> 16) + (s1h >>> 16) + (hh >>> 16) + (c3 >>> 16);

      t1h = (c4 << 16) | (c3 & 0xFFFF);
      t1l = (c2 << 16) | (c1 & 0xFFFF);

      c1 = (majl & 0xFFFF) + (s0l & 0xFFFF);
      c2 = (majl >>> 16) + (s0l >>> 16) + (c1 >>> 16);
      c3 = (majh & 0xFFFF) + (s0h & 0xFFFF) + (c2 >>> 16);
      c4 = (majh >>> 16) + (s0h >>> 16) + (c3 >>> 16);

      t2h = (c4 << 16) | (c3 & 0xFFFF);
      t2l = (c2 << 16) | (c1 & 0xFFFF);

      c1 = (dl & 0xFFFF) + (t1l & 0xFFFF);
      c2 = (dl >>> 16) + (t1l >>> 16) + (c1 >>> 16);
      c3 = (dh & 0xFFFF) + (t1h & 0xFFFF) + (c2 >>> 16);
      c4 = (dh >>> 16) + (t1h >>> 16) + (c3 >>> 16);

      hh = (c4 << 16) | (c3 & 0xFFFF);
      hl = (c2 << 16) | (c1 & 0xFFFF);

      c1 = (t2l & 0xFFFF) + (t1l & 0xFFFF);
      c2 = (t2l >>> 16) + (t1l >>> 16) + (c1 >>> 16);
      c3 = (t2h & 0xFFFF) + (t1h & 0xFFFF) + (c2 >>> 16);
      c4 = (t2h >>> 16) + (t1h >>> 16) + (c3 >>> 16);

      dh = (c4 << 16) | (c3 & 0xFFFF);
      dl = (c2 << 16) | (c1 & 0xFFFF);

      s0h = ((dh >>> 28) | (dl << 4)) ^ ((dl >>> 2) | (dh << 30)) ^ ((dl >>> 7) | (dh << 25));
      s0l = ((dl >>> 28) | (dh << 4)) ^ ((dh >>> 2) | (dl << 30)) ^ ((dh >>> 7) | (dl << 25));

      s1h = ((hh >>> 14) | (hl << 18)) ^ ((hh >>> 18) | (hl << 14)) ^ ((hl >>> 9) | (hh << 23));
      s1l = ((hl >>> 14) | (hh << 18)) ^ ((hl >>> 18) | (hh << 14)) ^ ((hh >>> 9) | (hl << 23));

      dah = dh & ah;
      dal = dl & al;
      majh = dah ^ (dh & bh) ^ abh;
      majl = dal ^ (dl & bl) ^ abl;

      chh = (hh & eh) ^ (~hh & fh);
      chl = (hl & el) ^ (~hl & fl);

      t1h = blocks[j + 2];
      t1l = blocks[j + 3];
      t2h = K[j + 2];
      t2l = K[j + 3];

      c1 = (t2l & 0xFFFF) + (t1l & 0xFFFF) + (chl & 0xFFFF) + (s1l & 0xFFFF) + (gl & 0xFFFF);
      c2 = (t2l >>> 16) + (t1l >>> 16) + (chl >>> 16) + (s1l >>> 16) + (gl >>> 16) + (c1 >>> 16);
      c3 = (t2h & 0xFFFF) + (t1h & 0xFFFF) + (chh & 0xFFFF) + (s1h & 0xFFFF) + (gh & 0xFFFF) + (c2 >>> 16);
      c4 = (t2h >>> 16) + (t1h >>> 16) + (chh >>> 16) + (s1h >>> 16) + (gh >>> 16) + (c3 >>> 16);

      t1h = (c4 << 16) | (c3 & 0xFFFF);
      t1l = (c2 << 16) | (c1 & 0xFFFF);

      c1 = (majl & 0xFFFF) + (s0l & 0xFFFF);
      c2 = (majl >>> 16) + (s0l >>> 16) + (c1 >>> 16);
      c3 = (majh & 0xFFFF) + (s0h & 0xFFFF) + (c2 >>> 16);
      c4 = (majh >>> 16) + (s0h >>> 16) + (c3 >>> 16);

      t2h = (c4 << 16) | (c3 & 0xFFFF);
      t2l = (c2 << 16) | (c1 & 0xFFFF);

      c1 = (cl & 0xFFFF) + (t1l & 0xFFFF);
      c2 = (cl >>> 16) + (t1l >>> 16) + (c1 >>> 16);
      c3 = (ch & 0xFFFF) + (t1h & 0xFFFF) + (c2 >>> 16);
      c4 = (ch >>> 16) + (t1h >>> 16) + (c3 >>> 16);

      gh = (c4 << 16) | (c3 & 0xFFFF);
      gl = (c2 << 16) | (c1 & 0xFFFF);

      c1 = (t2l & 0xFFFF) + (t1l & 0xFFFF);
      c2 = (t2l >>> 16) + (t1l >>> 16) + (c1 >>> 16);
      c3 = (t2h & 0xFFFF) + (t1h & 0xFFFF) + (c2 >>> 16);
      c4 = (t2h >>> 16) + (t1h >>> 16) + (c3 >>> 16);

      ch = (c4 << 16) | (c3 & 0xFFFF);
      cl = (c2 << 16) | (c1 & 0xFFFF);

      s0h = ((ch >>> 28) | (cl << 4)) ^ ((cl >>> 2) | (ch << 30)) ^ ((cl >>> 7) | (ch << 25));
      s0l = ((cl >>> 28) | (ch << 4)) ^ ((ch >>> 2) | (cl << 30)) ^ ((ch >>> 7) | (cl << 25));

      s1h = ((gh >>> 14) | (gl << 18)) ^ ((gh >>> 18) | (gl << 14)) ^ ((gl >>> 9) | (gh << 23));
      s1l = ((gl >>> 14) | (gh << 18)) ^ ((gl >>> 18) | (gh << 14)) ^ ((gh >>> 9) | (gl << 23));

      cdh = ch & dh;
      cdl = cl & dl;
      majh = cdh ^ (ch & ah) ^ dah;
      majl = cdl ^ (cl & al) ^ dal;

      chh = (gh & hh) ^ (~gh & eh);
      chl = (gl & hl) ^ (~gl & el);

      t1h = blocks[j + 4];
      t1l = blocks[j + 5];
      t2h = K[j + 4];
      t2l = K[j + 5];

      c1 = (t2l & 0xFFFF) + (t1l & 0xFFFF) + (chl & 0xFFFF) + (s1l & 0xFFFF) + (fl & 0xFFFF);
      c2 = (t2l >>> 16) + (t1l >>> 16) + (chl >>> 16) + (s1l >>> 16) + (fl >>> 16) + (c1 >>> 16);
      c3 = (t2h & 0xFFFF) + (t1h & 0xFFFF) + (chh & 0xFFFF) + (s1h & 0xFFFF) + (fh & 0xFFFF) + (c2 >>> 16);
      c4 = (t2h >>> 16) + (t1h >>> 16) + (chh >>> 16) + (s1h >>> 16) + (fh >>> 16) + (c3 >>> 16);

      t1h = (c4 << 16) | (c3 & 0xFFFF);
      t1l = (c2 << 16) | (c1 & 0xFFFF);

      c1 = (majl & 0xFFFF) + (s0l & 0xFFFF);
      c2 = (majl >>> 16) + (s0l >>> 16) + (c1 >>> 16);
      c3 = (majh & 0xFFFF) + (s0h & 0xFFFF) + (c2 >>> 16);
      c4 = (majh >>> 16) + (s0h >>> 16) + (c3 >>> 16);

      t2h = (c4 << 16) | (c3 & 0xFFFF);
      t2l = (c2 << 16) | (c1 & 0xFFFF);

      c1 = (bl & 0xFFFF) + (t1l & 0xFFFF);
      c2 = (bl >>> 16) + (t1l >>> 16) + (c1 >>> 16);
      c3 = (bh & 0xFFFF) + (t1h & 0xFFFF) + (c2 >>> 16);
      c4 = (bh >>> 16) + (t1h >>> 16) + (c3 >>> 16);

      fh = (c4 << 16) | (c3 & 0xFFFF);
      fl = (c2 << 16) | (c1 & 0xFFFF);

      c1 = (t2l & 0xFFFF) + (t1l & 0xFFFF);
      c2 = (t2l >>> 16) + (t1l >>> 16) + (c1 >>> 16);
      c3 = (t2h & 0xFFFF) + (t1h & 0xFFFF) + (c2 >>> 16);
      c4 = (t2h >>> 16) + (t1h >>> 16) + (c3 >>> 16);

      bh = (c4 << 16) | (c3 & 0xFFFF);
      bl = (c2 << 16) | (c1 & 0xFFFF);

      s0h = ((bh >>> 28) | (bl << 4)) ^ ((bl >>> 2) | (bh << 30)) ^ ((bl >>> 7) | (bh << 25));
      s0l = ((bl >>> 28) | (bh << 4)) ^ ((bh >>> 2) | (bl << 30)) ^ ((bh >>> 7) | (bl << 25));

      s1h = ((fh >>> 14) | (fl << 18)) ^ ((fh >>> 18) | (fl << 14)) ^ ((fl >>> 9) | (fh << 23));
      s1l = ((fl >>> 14) | (fh << 18)) ^ ((fl >>> 18) | (fh << 14)) ^ ((fh >>> 9) | (fl << 23));

      bch = bh & ch;
      bcl = bl & cl;
      majh = bch ^ (bh & dh) ^ cdh;
      majl = bcl ^ (bl & dl) ^ cdl;

      chh = (fh & gh) ^ (~fh & hh);
      chl = (fl & gl) ^ (~fl & hl);

      t1h = blocks[j + 6];
      t1l = blocks[j + 7];
      t2h = K[j + 6];
      t2l = K[j + 7];

      c1 = (t2l & 0xFFFF) + (t1l & 0xFFFF) + (chl & 0xFFFF) + (s1l & 0xFFFF) + (el & 0xFFFF);
      c2 = (t2l >>> 16) + (t1l >>> 16) + (chl >>> 16) + (s1l >>> 16) + (el >>> 16) + (c1 >>> 16);
      c3 = (t2h & 0xFFFF) + (t1h & 0xFFFF) + (chh & 0xFFFF) + (s1h & 0xFFFF) + (eh & 0xFFFF) + (c2 >>> 16);
      c4 = (t2h >>> 16) + (t1h >>> 16) + (chh >>> 16) + (s1h >>> 16) + (eh >>> 16) + (c3 >>> 16);

      t1h = (c4 << 16) | (c3 & 0xFFFF);
      t1l = (c2 << 16) | (c1 & 0xFFFF);

      c1 = (majl & 0xFFFF) + (s0l & 0xFFFF);
      c2 = (majl >>> 16) + (s0l >>> 16) + (c1 >>> 16);
      c3 = (majh & 0xFFFF) + (s0h & 0xFFFF) + (c2 >>> 16);
      c4 = (majh >>> 16) + (s0h >>> 16) + (c3 >>> 16);

      t2h = (c4 << 16) | (c3 & 0xFFFF);
      t2l = (c2 << 16) | (c1 & 0xFFFF);

      c1 = (al & 0xFFFF) + (t1l & 0xFFFF);
      c2 = (al >>> 16) + (t1l >>> 16) + (c1 >>> 16);
      c3 = (ah & 0xFFFF) + (t1h & 0xFFFF) + (c2 >>> 16);
      c4 = (ah >>> 16) + (t1h >>> 16) + (c3 >>> 16);

      eh = (c4 << 16) | (c3 & 0xFFFF);
      el = (c2 << 16) | (c1 & 0xFFFF);

      c1 = (t2l & 0xFFFF) + (t1l & 0xFFFF);
      c2 = (t2l >>> 16) + (t1l >>> 16) + (c1 >>> 16);
      c3 = (t2h & 0xFFFF) + (t1h & 0xFFFF) + (c2 >>> 16);
      c4 = (t2h >>> 16) + (t1h >>> 16) + (c3 >>> 16);

      ah = (c4 << 16) | (c3 & 0xFFFF);
      al = (c2 << 16) | (c1 & 0xFFFF);
    }

    c1 = (h0l & 0xFFFF) + (al & 0xFFFF);
    c2 = (h0l >>> 16) + (al >>> 16) + (c1 >>> 16);
    c3 = (h0h & 0xFFFF) + (ah & 0xFFFF) + (c2 >>> 16);
    c4 = (h0h >>> 16) + (ah >>> 16) + (c3 >>> 16);

    this.h0h = (c4 << 16) | (c3 & 0xFFFF);
    this.h0l = (c2 << 16) | (c1 & 0xFFFF);

    c1 = (h1l & 0xFFFF) + (bl & 0xFFFF);
    c2 = (h1l >>> 16) + (bl >>> 16) + (c1 >>> 16);
    c3 = (h1h & 0xFFFF) + (bh & 0xFFFF) + (c2 >>> 16);
    c4 = (h1h >>> 16) + (bh >>> 16) + (c3 >>> 16);

    this.h1h = (c4 << 16) | (c3 & 0xFFFF);
    this.h1l = (c2 << 16) | (c1 & 0xFFFF);

    c1 = (h2l & 0xFFFF) + (cl & 0xFFFF);
    c2 = (h2l >>> 16) + (cl >>> 16) + (c1 >>> 16);
    c3 = (h2h & 0xFFFF) + (ch & 0xFFFF) + (c2 >>> 16);
    c4 = (h2h >>> 16) + (ch >>> 16) + (c3 >>> 16);

    this.h2h = (c4 << 16) | (c3 & 0xFFFF);
    this.h2l = (c2 << 16) | (c1 & 0xFFFF);

    c1 = (h3l & 0xFFFF) + (dl & 0xFFFF);
    c2 = (h3l >>> 16) + (dl >>> 16) + (c1 >>> 16);
    c3 = (h3h & 0xFFFF) + (dh & 0xFFFF) + (c2 >>> 16);
    c4 = (h3h >>> 16) + (dh >>> 16) + (c3 >>> 16);

    this.h3h = (c4 << 16) | (c3 & 0xFFFF);
    this.h3l = (c2 << 16) | (c1 & 0xFFFF);

    c1 = (h4l & 0xFFFF) + (el & 0xFFFF);
    c2 = (h4l >>> 16) + (el >>> 16) + (c1 >>> 16);
    c3 = (h4h & 0xFFFF) + (eh & 0xFFFF) + (c2 >>> 16);
    c4 = (h4h >>> 16) + (eh >>> 16) + (c3 >>> 16);

    this.h4h = (c4 << 16) | (c3 & 0xFFFF);
    this.h4l = (c2 << 16) | (c1 & 0xFFFF);

    c1 = (h5l & 0xFFFF) + (fl & 0xFFFF);
    c2 = (h5l >>> 16) + (fl >>> 16) + (c1 >>> 16);
    c3 = (h5h & 0xFFFF) + (fh & 0xFFFF) + (c2 >>> 16);
    c4 = (h5h >>> 16) + (fh >>> 16) + (c3 >>> 16);

    this.h5h = (c4 << 16) | (c3 & 0xFFFF);
    this.h5l = (c2 << 16) | (c1 & 0xFFFF);

    c1 = (h6l & 0xFFFF) + (gl & 0xFFFF);
    c2 = (h6l >>> 16) + (gl >>> 16) + (c1 >>> 16);
    c3 = (h6h & 0xFFFF) + (gh & 0xFFFF) + (c2 >>> 16);
    c4 = (h6h >>> 16) + (gh >>> 16) + (c3 >>> 16);

    this.h6h = (c4 << 16) | (c3 & 0xFFFF);
    this.h6l = (c2 << 16) | (c1 & 0xFFFF);

    c1 = (h7l & 0xFFFF) + (hl & 0xFFFF);
    c2 = (h7l >>> 16) + (hl >>> 16) + (c1 >>> 16);
    c3 = (h7h & 0xFFFF) + (hh & 0xFFFF) + (c2 >>> 16);
    c4 = (h7h >>> 16) + (hh >>> 16) + (c3 >>> 16);

    this.h7h = (c4 << 16) | (c3 & 0xFFFF);
    this.h7l = (c2 << 16) | (c1 & 0xFFFF);
  };

  Sha512.prototype.hex = function () {
    this.finalize();

    var h0h = this.h0h, h0l = this.h0l, h1h = this.h1h, h1l = this.h1l,
      h2h = this.h2h, h2l = this.h2l, h3h = this.h3h, h3l = this.h3l,
      h4h = this.h4h, h4l = this.h4l, h5h = this.h5h, h5l = this.h5l,
      h6h = this.h6h, h6l = this.h6l, h7h = this.h7h, h7l = this.h7l,
      bits = this.bits;

    var hex = HEX_CHARS[(h0h >> 28) & 0x0F] + HEX_CHARS[(h0h >> 24) & 0x0F] +
      HEX_CHARS[(h0h >> 20) & 0x0F] + HEX_CHARS[(h0h >> 16) & 0x0F] +
      HEX_CHARS[(h0h >> 12) & 0x0F] + HEX_CHARS[(h0h >> 8) & 0x0F] +
      HEX_CHARS[(h0h >> 4) & 0x0F] + HEX_CHARS[h0h & 0x0F] +
      HEX_CHARS[(h0l >> 28) & 0x0F] + HEX_CHARS[(h0l >> 24) & 0x0F] +
      HEX_CHARS[(h0l >> 20) & 0x0F] + HEX_CHARS[(h0l >> 16) & 0x0F] +
      HEX_CHARS[(h0l >> 12) & 0x0F] + HEX_CHARS[(h0l >> 8) & 0x0F] +
      HEX_CHARS[(h0l >> 4) & 0x0F] + HEX_CHARS[h0l & 0x0F] +
      HEX_CHARS[(h1h >> 28) & 0x0F] + HEX_CHARS[(h1h >> 24) & 0x0F] +
      HEX_CHARS[(h1h >> 20) & 0x0F] + HEX_CHARS[(h1h >> 16) & 0x0F] +
      HEX_CHARS[(h1h >> 12) & 0x0F] + HEX_CHARS[(h1h >> 8) & 0x0F] +
      HEX_CHARS[(h1h >> 4) & 0x0F] + HEX_CHARS[h1h & 0x0F] +
      HEX_CHARS[(h1l >> 28) & 0x0F] + HEX_CHARS[(h1l >> 24) & 0x0F] +
      HEX_CHARS[(h1l >> 20) & 0x0F] + HEX_CHARS[(h1l >> 16) & 0x0F] +
      HEX_CHARS[(h1l >> 12) & 0x0F] + HEX_CHARS[(h1l >> 8) & 0x0F] +
      HEX_CHARS[(h1l >> 4) & 0x0F] + HEX_CHARS[h1l & 0x0F] +
      HEX_CHARS[(h2h >> 28) & 0x0F] + HEX_CHARS[(h2h >> 24) & 0x0F] +
      HEX_CHARS[(h2h >> 20) & 0x0F] + HEX_CHARS[(h2h >> 16) & 0x0F] +
      HEX_CHARS[(h2h >> 12) & 0x0F] + HEX_CHARS[(h2h >> 8) & 0x0F] +
      HEX_CHARS[(h2h >> 4) & 0x0F] + HEX_CHARS[h2h & 0x0F] +
      HEX_CHARS[(h2l >> 28) & 0x0F] + HEX_CHARS[(h2l >> 24) & 0x0F] +
      HEX_CHARS[(h2l >> 20) & 0x0F] + HEX_CHARS[(h2l >> 16) & 0x0F] +
      HEX_CHARS[(h2l >> 12) & 0x0F] + HEX_CHARS[(h2l >> 8) & 0x0F] +
      HEX_CHARS[(h2l >> 4) & 0x0F] + HEX_CHARS[h2l & 0x0F] +
      HEX_CHARS[(h3h >> 28) & 0x0F] + HEX_CHARS[(h3h >> 24) & 0x0F] +
      HEX_CHARS[(h3h >> 20) & 0x0F] + HEX_CHARS[(h3h >> 16) & 0x0F] +
      HEX_CHARS[(h3h >> 12) & 0x0F] + HEX_CHARS[(h3h >> 8) & 0x0F] +
      HEX_CHARS[(h3h >> 4) & 0x0F] + HEX_CHARS[h3h & 0x0F];
    if (bits >= 256) {
      hex += HEX_CHARS[(h3l >> 28) & 0x0F] + HEX_CHARS[(h3l >> 24) & 0x0F] +
        HEX_CHARS[(h3l >> 20) & 0x0F] + HEX_CHARS[(h3l >> 16) & 0x0F] +
        HEX_CHARS[(h3l >> 12) & 0x0F] + HEX_CHARS[(h3l >> 8) & 0x0F] +
        HEX_CHARS[(h3l >> 4) & 0x0F] + HEX_CHARS[h3l & 0x0F];
    }
    if (bits >= 384) {
      hex += HEX_CHARS[(h4h >> 28) & 0x0F] + HEX_CHARS[(h4h >> 24) & 0x0F] +
        HEX_CHARS[(h4h >> 20) & 0x0F] + HEX_CHARS[(h4h >> 16) & 0x0F] +
        HEX_CHARS[(h4h >> 12) & 0x0F] + HEX_CHARS[(h4h >> 8) & 0x0F] +
        HEX_CHARS[(h4h >> 4) & 0x0F] + HEX_CHARS[h4h & 0x0F] +
        HEX_CHARS[(h4l >> 28) & 0x0F] + HEX_CHARS[(h4l >> 24) & 0x0F] +
        HEX_CHARS[(h4l >> 20) & 0x0F] + HEX_CHARS[(h4l >> 16) & 0x0F] +
        HEX_CHARS[(h4l >> 12) & 0x0F] + HEX_CHARS[(h4l >> 8) & 0x0F] +
        HEX_CHARS[(h4l >> 4) & 0x0F] + HEX_CHARS[h4l & 0x0F] +
        HEX_CHARS[(h5h >> 28) & 0x0F] + HEX_CHARS[(h5h >> 24) & 0x0F] +
        HEX_CHARS[(h5h >> 20) & 0x0F] + HEX_CHARS[(h5h >> 16) & 0x0F] +
        HEX_CHARS[(h5h >> 12) & 0x0F] + HEX_CHARS[(h5h >> 8) & 0x0F] +
        HEX_CHARS[(h5h >> 4) & 0x0F] + HEX_CHARS[h5h & 0x0F] +
        HEX_CHARS[(h5l >> 28) & 0x0F] + HEX_CHARS[(h5l >> 24) & 0x0F] +
        HEX_CHARS[(h5l >> 20) & 0x0F] + HEX_CHARS[(h5l >> 16) & 0x0F] +
        HEX_CHARS[(h5l >> 12) & 0x0F] + HEX_CHARS[(h5l >> 8) & 0x0F] +
        HEX_CHARS[(h5l >> 4) & 0x0F] + HEX_CHARS[h5l & 0x0F];
    }
    if (bits == 512) {
      hex += HEX_CHARS[(h6h >> 28) & 0x0F] + HEX_CHARS[(h6h >> 24) & 0x0F] +
        HEX_CHARS[(h6h >> 20) & 0x0F] + HEX_CHARS[(h6h >> 16) & 0x0F] +
        HEX_CHARS[(h6h >> 12) & 0x0F] + HEX_CHARS[(h6h >> 8) & 0x0F] +
        HEX_CHARS[(h6h >> 4) & 0x0F] + HEX_CHARS[h6h & 0x0F] +
        HEX_CHARS[(h6l >> 28) & 0x0F] + HEX_CHARS[(h6l >> 24) & 0x0F] +
        HEX_CHARS[(h6l >> 20) & 0x0F] + HEX_CHARS[(h6l >> 16) & 0x0F] +
        HEX_CHARS[(h6l >> 12) & 0x0F] + HEX_CHARS[(h6l >> 8) & 0x0F] +
        HEX_CHARS[(h6l >> 4) & 0x0F] + HEX_CHARS[h6l & 0x0F] +
        HEX_CHARS[(h7h >> 28) & 0x0F] + HEX_CHARS[(h7h >> 24) & 0x0F] +
        HEX_CHARS[(h7h >> 20) & 0x0F] + HEX_CHARS[(h7h >> 16) & 0x0F] +
        HEX_CHARS[(h7h >> 12) & 0x0F] + HEX_CHARS[(h7h >> 8) & 0x0F] +
        HEX_CHARS[(h7h >> 4) & 0x0F] + HEX_CHARS[h7h & 0x0F] +
        HEX_CHARS[(h7l >> 28) & 0x0F] + HEX_CHARS[(h7l >> 24) & 0x0F] +
        HEX_CHARS[(h7l >> 20) & 0x0F] + HEX_CHARS[(h7l >> 16) & 0x0F] +
        HEX_CHARS[(h7l >> 12) & 0x0F] + HEX_CHARS[(h7l >> 8) & 0x0F] +
        HEX_CHARS[(h7l >> 4) & 0x0F] + HEX_CHARS[h7l & 0x0F];
    }
    return hex;
  };

  Sha512.prototype.toString = Sha512.prototype.hex;

  Sha512.prototype.digest = function () {
    this.finalize();

    var h0h = this.h0h, h0l = this.h0l, h1h = this.h1h, h1l = this.h1l,
      h2h = this.h2h, h2l = this.h2l, h3h = this.h3h, h3l = this.h3l,
      h4h = this.h4h, h4l = this.h4l, h5h = this.h5h, h5l = this.h5l,
      h6h = this.h6h, h6l = this.h6l, h7h = this.h7h, h7l = this.h7l,
      bits = this.bits;

    var arr = [
      (h0h >> 24) & 0xFF, (h0h >> 16) & 0xFF, (h0h >> 8) & 0xFF, h0h & 0xFF,
      (h0l >> 24) & 0xFF, (h0l >> 16) & 0xFF, (h0l >> 8) & 0xFF, h0l & 0xFF,
      (h1h >> 24) & 0xFF, (h1h >> 16) & 0xFF, (h1h >> 8) & 0xFF, h1h & 0xFF,
      (h1l >> 24) & 0xFF, (h1l >> 16) & 0xFF, (h1l >> 8) & 0xFF, h1l & 0xFF,
      (h2h >> 24) & 0xFF, (h2h >> 16) & 0xFF, (h2h >> 8) & 0xFF, h2h & 0xFF,
      (h2l >> 24) & 0xFF, (h2l >> 16) & 0xFF, (h2l >> 8) & 0xFF, h2l & 0xFF,
      (h3h >> 24) & 0xFF, (h3h >> 16) & 0xFF, (h3h >> 8) & 0xFF, h3h & 0xFF
    ];

    if (bits >= 256) {
      arr.push((h3l >> 24) & 0xFF, (h3l >> 16) & 0xFF, (h3l >> 8) & 0xFF, h3l & 0xFF);
    }
    if (bits >= 384) {
      arr.push(
        (h4h >> 24) & 0xFF, (h4h >> 16) & 0xFF, (h4h >> 8) & 0xFF, h4h & 0xFF,
        (h4l >> 24) & 0xFF, (h4l >> 16) & 0xFF, (h4l >> 8) & 0xFF, h4l & 0xFF,
        (h5h >> 24) & 0xFF, (h5h >> 16) & 0xFF, (h5h >> 8) & 0xFF, h5h & 0xFF,
        (h5l >> 24) & 0xFF, (h5l >> 16) & 0xFF, (h5l >> 8) & 0xFF, h5l & 0xFF
      );
    }
    if (bits == 512) {
      arr.push(
        (h6h >> 24) & 0xFF, (h6h >> 16) & 0xFF, (h6h >> 8) & 0xFF, h6h & 0xFF,
        (h6l >> 24) & 0xFF, (h6l >> 16) & 0xFF, (h6l >> 8) & 0xFF, h6l & 0xFF,
        (h7h >> 24) & 0xFF, (h7h >> 16) & 0xFF, (h7h >> 8) & 0xFF, h7h & 0xFF,
        (h7l >> 24) & 0xFF, (h7l >> 16) & 0xFF, (h7l >> 8) & 0xFF, h7l & 0xFF
      );
    }
    return arr;
  };

  Sha512.prototype.array = Sha512.prototype.digest;

  Sha512.prototype.arrayBuffer = function () {
    this.finalize();

    var bits = this.bits;
    var buffer = new ArrayBuffer(bits / 8);
    var dataView = new DataView(buffer);
    dataView.setUint32(0, this.h0h);
    dataView.setUint32(4, this.h0l);
    dataView.setUint32(8, this.h1h);
    dataView.setUint32(12, this.h1l);
    dataView.setUint32(16, this.h2h);
    dataView.setUint32(20, this.h2l);
    dataView.setUint32(24, this.h3h);

    if (bits >= 256) {
      dataView.setUint32(28, this.h3l);
    }
    if (bits >= 384) {
      dataView.setUint32(32, this.h4h);
      dataView.setUint32(36, this.h4l);
      dataView.setUint32(40, this.h5h);
      dataView.setUint32(44, this.h5l);
    }
    if (bits == 512) {
      dataView.setUint32(48, this.h6h);
      dataView.setUint32(52, this.h6l);
      dataView.setUint32(56, this.h7h);
      dataView.setUint32(60, this.h7l);
    }
    return buffer;
  };

  Sha512.prototype.clone = function () {
    var hash = new Sha512(this.bits, false);
    this.copyTo(hash);
    return hash;
  };

  Sha512.prototype.copyTo = function (hash) {
    var i = 0, attrs = [
      'h0h', 'h0l', 'h1h', 'h1l', 'h2h', 'h2l', 'h3h', 'h3l', 'h4h', 'h4l', 'h5h', 'h5l', 'h6h', 'h6l', 'h7h', 'h7l',
      'start', 'bytes', 'hBytes', 'finalized', 'hashed', 'lastByteIndex'
    ];
    for (i = 0; i < attrs.length; ++i) {
      hash[attrs[i]] = this[attrs[i]];
    }
    for (i = 0; i < this.blocks.length; ++i) {
      hash.blocks[i] = this.blocks[i];
    }
  };

  function HmacSha512(key, bits, sharedMemory) {
    var notString, type = typeof key;
    if (type !== 'string') {
      if (type === 'object') {
        if (key === null) {
          throw new Error(INPUT_ERROR);
        } else if (ARRAY_BUFFER && key.constructor === ArrayBuffer) {
          key = new Uint8Array(key);
        } else if (!Array.isArray(key)) {
          if (!ARRAY_BUFFER || !ArrayBuffer.isView(key)) {
            throw new Error(INPUT_ERROR);
          }
        }
      } else {
        throw new Error(INPUT_ERROR);
      }
      notString = true;
    }
    var length = key.length;
    if (!notString) {
      var bytes = [], length = key.length, index = 0, code;
      for (var i = 0; i < length; ++i) {
        code = key.charCodeAt(i);
        if (code < 0x80) {
          bytes[index++] = code;
        } else if (code < 0x800) {
          bytes[index++] = (0xc0 | (code >> 6));
          bytes[index++] = (0x80 | (code & 0x3f));
        } else if (code < 0xd800 || code >= 0xe000) {
          bytes[index++] = (0xe0 | (code >> 12));
          bytes[index++] = (0x80 | ((code >> 6) & 0x3f));
          bytes[index++] = (0x80 | (code & 0x3f));
        } else {
          code = 0x10000 + (((code & 0x3ff) << 10) | (key.charCodeAt(++i) & 0x3ff));
          bytes[index++] = (0xf0 | (code >> 18));
          bytes[index++] = (0x80 | ((code >> 12) & 0x3f));
          bytes[index++] = (0x80 | ((code >> 6) & 0x3f));
          bytes[index++] = (0x80 | (code & 0x3f));
        }
      }
      key = bytes;
    }

    if (key.length > 128) {
      key = (new Sha512(bits, true)).update(key).array();
    }

    var oKeyPad = [], iKeyPad = [];
    for (var i = 0; i < 128; ++i) {
      var b = key[i] || 0;
      oKeyPad[i] = 0x5c ^ b;
      iKeyPad[i] = 0x36 ^ b;
    }

    Sha512.call(this, bits, sharedMemory);

    this.update(iKeyPad);
    this.oKeyPad = oKeyPad;
    this.inner = true;
    this.sharedMemory = sharedMemory;
  }
  HmacSha512.prototype = new Sha512();

  HmacSha512.prototype.finalize = function () {
    Sha512.prototype.finalize.call(this);
    if (this.inner) {
      this.inner = false;
      var innerHash = this.array();
      Sha512.call(this, this.bits, this.sharedMemory);
      this.update(this.oKeyPad);
      this.update(innerHash);
      Sha512.prototype.finalize.call(this);
    }
  };

  HmacSha512.prototype.clone = function () {
    var hash = new HmacSha512([], this.bits, false);
    this.copyTo(hash);
    hash.inner = this.inner;
    for (var i = 0; i < this.oKeyPad.length; ++i) {
      hash.oKeyPad[i] = this.oKeyPad[i];
    }
    return hash;
  };

  var exports = createMethod(512);
  exports.sha512 = exports;
  exports.sha384 = createMethod(384);
  exports.sha512_256 = createMethod(256);
  exports.sha512_224 = createMethod(224);
  exports.sha512.hmac = createHmacMethod(512);
  exports.sha384.hmac = createHmacMethod(384);
  exports.sha512_256.hmac = createHmacMethod(256);
  exports.sha512_224.hmac = createHmacMethod(224);

  if (COMMON_JS) {
    module.exports = exports;
  } else {
    root.sha512 = exports.sha512;
    root.sha384 = exports.sha384;
    root.sha512_256 = exports.sha512_256;
    root.sha512_224 = exports.sha512_224;
    if (AMD) {
      define(function () {
        return exports;
      });
    }
  }
})();

}).call(this)}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"_process":115}],110:[function(require,module,exports){
var json_stringify = require('./lib/stringify.js').stringify;
var json_parse     = require('./lib/parse.js');

module.exports = function(options) {
    return  {
        parse: json_parse(options),
        stringify: json_stringify
    }
};

module.exports.parse = json_parse();
module.exports.stringify = json_stringify;

},{"./lib/parse.js":111,"./lib/stringify.js":112}],111:[function(require,module,exports){
var BigNumber = null;





const suspectProtoRx = /(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])/;
const suspectConstructorRx = /(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)/;



var json_parse = function (options) {
  'use strict';

  
  
  
  

  
  

  
  var _options = {
    strict: false, 
    storeAsString: false, 
    alwaysParseAsBig: false, 
    useNativeBigInt: false, 
    protoAction: 'error',
    constructorAction: 'error',
  };

  
  if (options !== undefined && options !== null) {
    if (options.strict === true) {
      _options.strict = true;
    }
    if (options.storeAsString === true) {
      _options.storeAsString = true;
    }
    _options.alwaysParseAsBig =
      options.alwaysParseAsBig === true ? options.alwaysParseAsBig : false;
    _options.useNativeBigInt =
      options.useNativeBigInt === true ? options.useNativeBigInt : false;

    if (typeof options.constructorAction !== 'undefined') {
      if (
        options.constructorAction === 'error' ||
        options.constructorAction === 'ignore' ||
        options.constructorAction === 'preserve'
      ) {
        _options.constructorAction = options.constructorAction;
      } else {
        throw new Error(
          `Incorrect value for constructorAction option, must be "error", "ignore" or undefined but passed ${options.constructorAction}`
        );
      }
    }

    if (typeof options.protoAction !== 'undefined') {
      if (
        options.protoAction === 'error' ||
        options.protoAction === 'ignore' ||
        options.protoAction === 'preserve'
      ) {
        _options.protoAction = options.protoAction;
      } else {
        throw new Error(
          `Incorrect value for protoAction option, must be "error", "ignore" or undefined but passed ${options.protoAction}`
        );
      }
    }
  }

  var at, 
    ch, 
    escapee = {
      '"': '"',
      '\\': '\\',
      '/': '/',
      b: '\b',
      f: '\f',
      n: '\n',
      r: '\r',
      t: '\t',
    },
    text,
    error = function (m) {
      

      throw {
        name: 'SyntaxError',
        message: m,
        at: at,
        text: text,
      };
    },
    next = function (c) {
      

      if (c && c !== ch) {
        error("Expected '" + c + "' instead of '" + ch + "'");
      }

      
      

      ch = text.charAt(at);
      at += 1;
      return ch;
    },
    number = function () {
      

      var number,
        string = '';

      if (ch === '-') {
        string = '-';
        next('-');
      }
      while (ch >= '0' && ch <= '9') {
        string += ch;
        next();
      }
      if (ch === '.') {
        string += '.';
        while (next() && ch >= '0' && ch <= '9') {
          string += ch;
        }
      }
      if (ch === 'e' || ch === 'E') {
        string += ch;
        next();
        if (ch === '-' || ch === '+') {
          string += ch;
          next();
        }
        while (ch >= '0' && ch <= '9') {
          string += ch;
          next();
        }
      }
      number = +string;
      if (!isFinite(number)) {
        error('Bad number');
      } else {
        if (BigNumber == null) BigNumber = require('bignumber.js');
        
        
        if (string.length > 15)
          return _options.storeAsString
            ? string
            : _options.useNativeBigInt
            ? BigInt(string)
            : new BigNumber(string);
        else
          return !_options.alwaysParseAsBig
            ? number
            : _options.useNativeBigInt
            ? BigInt(number)
            : new BigNumber(number);
      }
    },
    string = function () {
      

      var hex,
        i,
        string = '',
        uffff;

      

      if (ch === '"') {
        var startAt = at;
        while (next()) {
          if (ch === '"') {
            if (at - 1 > startAt) string += text.substring(startAt, at - 1);
            next();
            return string;
          }
          if (ch === '\\') {
            if (at - 1 > startAt) string += text.substring(startAt, at - 1);
            next();
            if (ch === 'u') {
              uffff = 0;
              for (i = 0; i < 4; i += 1) {
                hex = parseInt(next(), 16);
                if (!isFinite(hex)) {
                  break;
                }
                uffff = uffff * 16 + hex;
              }
              string += String.fromCharCode(uffff);
            } else if (typeof escapee[ch] === 'string') {
              string += escapee[ch];
            } else {
              break;
            }
            startAt = at;
          }
        }
      }
      error('Bad string');
    },
    white = function () {
      

      while (ch && ch <= ' ') {
        next();
      }
    },
    word = function () {
      

      switch (ch) {
        case 't':
          next('t');
          next('r');
          next('u');
          next('e');
          return true;
        case 'f':
          next('f');
          next('a');
          next('l');
          next('s');
          next('e');
          return false;
        case 'n':
          next('n');
          next('u');
          next('l');
          next('l');
          return null;
      }
      error("Unexpected '" + ch + "'");
    },
    value, 
    array = function () {
      

      var array = [];

      if (ch === '[') {
        next('[');
        white();
        if (ch === ']') {
          next(']');
          return array; 
        }
        while (ch) {
          array.push(value());
          white();
          if (ch === ']') {
            next(']');
            return array;
          }
          next(',');
          white();
        }
      }
      error('Bad array');
    },
    object = function () {
      

      var key,
        object = Object.create(null);

      if (ch === '{') {
        next('{');
        white();
        if (ch === '}') {
          next('}');
          return object; 
        }
        while (ch) {
          key = string();
          white();
          next(':');
          if (
            _options.strict === true &&
            Object.hasOwnProperty.call(object, key)
          ) {
            error('Duplicate key "' + key + '"');
          }

          if (suspectProtoRx.test(key) === true) {
            if (_options.protoAction === 'error') {
              error('Object contains forbidden prototype property');
            } else if (_options.protoAction === 'ignore') {
              value();
            } else {
              object[key] = value();
            }
          } else if (suspectConstructorRx.test(key) === true) {
            if (_options.constructorAction === 'error') {
              error('Object contains forbidden constructor property');
            } else if (_options.constructorAction === 'ignore') {
              value();
            } else {
              object[key] = value();
            }
          } else {
            object[key] = value();
          }

          white();
          if (ch === '}') {
            next('}');
            return object;
          }
          next(',');
          white();
        }
      }
      error('Bad object');
    };

  value = function () {
    
    

    white();
    switch (ch) {
      case '{':
        return object();
      case '[':
        return array();
      case '"':
        return string();
      case '-':
        return number();
      default:
        return ch >= '0' && ch <= '9' ? number() : word();
    }
  };

  
  

  return function (source, reviver) {
    var result;

    text = source + '';
    at = 0;
    ch = ' ';
    result = value();
    white();
    if (ch) {
      error('Syntax error');
    }

    
    
    
    
    

    return typeof reviver === 'function'
      ? (function walk(holder, key) {
          var k,
            v,
            value = holder[key];
          if (value && typeof value === 'object') {
            Object.keys(value).forEach(function (k) {
              v = walk(value, k);
              if (v !== undefined) {
                value[k] = v;
              } else {
                delete value[k];
              }
            });
          }
          return reviver.call(holder, key, value);
        })({ '': result }, '')
      : result;
  };
};

module.exports = json_parse;

},{"bignumber.js":93}],112:[function(require,module,exports){
var BigNumber = require('bignumber.js');








var JSON = module.exports;

(function () {
    'use strict';

    function f(n) {
        
        return n < 10 ? '0' + n : n;
    }

    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        gap,
        indent,
        meta = {    
            '\b': '\\b',
            '\t': '\\t',
            '\n': '\\n',
            '\f': '\\f',
            '\r': '\\r',
            '"' : '\\"',
            '\\': '\\\\'
        },
        rep;


    function quote(string) {






        escapable.lastIndex = 0;
        return escapable.test(string) ? '"' + string.replace(escapable, function (a) {
            var c = meta[a];
            return typeof c === 'string'
                ? c
                : '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
        }) + '"' : '"' + string + '"';
    }


    function str(key, holder) {



        var i,          
            k,          
            v,          
            length,
            mind = gap,
            partial,
            value = holder[key],
            isBigNumber = value != null && (value instanceof BigNumber || BigNumber.isBigNumber(value));



        if (value && typeof value === 'object' &&
                typeof value.toJSON === 'function') {
            value = value.toJSON(key);
        }




        if (typeof rep === 'function') {
            value = rep.call(holder, key, value);
        }



        switch (typeof value) {
        case 'string':
            if (isBigNumber) {
                return value;
            } else {
                return quote(value);
            }

        case 'number':



            return isFinite(value) ? String(value) : 'null';

        case 'boolean':
        case 'null':
        case 'bigint':





            return String(value);




        case 'object':




            if (!value) {
                return 'null';
            }



            gap += indent;
            partial = [];



            if (Object.prototype.toString.apply(value) === '[object Array]') {




                length = value.length;
                for (i = 0; i < length; i += 1) {
                    partial[i] = str(i, value) || 'null';
                }




                v = partial.length === 0
                    ? '[]'
                    : gap
                    ? '[\n' + gap + partial.join(',\n' + gap) + '\n' + mind + ']'
                    : '[' + partial.join(',') + ']';
                gap = mind;
                return v;
            }



            if (rep && typeof rep === 'object') {
                length = rep.length;
                for (i = 0; i < length; i += 1) {
                    if (typeof rep[i] === 'string') {
                        k = rep[i];
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            } else {



                Object.keys(value).forEach(function(k) {
                    var v = str(k, value);
                    if (v) {
                        partial.push(quote(k) + (gap ? ': ' : ':') + v);
                    }
                });
            }




            v = partial.length === 0
                ? '{}'
                : gap
                ? '{\n' + gap + partial.join(',\n' + gap) + '\n' + mind + '}'
                : '{' + partial.join(',') + '}';
            gap = mind;
            return v;
        }
    }



    if (typeof JSON.stringify !== 'function') {
        JSON.stringify = function (value, replacer, space) {







            var i;
            gap = '';
            indent = '';




            if (typeof space === 'number') {
                for (i = 0; i < space; i += 1) {
                    indent += ' ';
                }



            } else if (typeof space === 'string') {
                indent = space;
            }




            rep = replacer;
            if (replacer && typeof replacer !== 'function' &&
                    (typeof replacer !== 'object' ||
                    typeof replacer.length !== 'number')) {
                throw new Error('JSON.stringify');
            }




            return str('', {'': value});
        };
    }
}());

},{"bignumber.js":93}],113:[function(require,module,exports){
var hasMap = typeof Map === 'function' && Map.prototype;
var mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, 'size') : null;
var mapSize = hasMap && mapSizeDescriptor && typeof mapSizeDescriptor.get === 'function' ? mapSizeDescriptor.get : null;
var mapForEach = hasMap && Map.prototype.forEach;
var hasSet = typeof Set === 'function' && Set.prototype;
var setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, 'size') : null;
var setSize = hasSet && setSizeDescriptor && typeof setSizeDescriptor.get === 'function' ? setSizeDescriptor.get : null;
var setForEach = hasSet && Set.prototype.forEach;
var hasWeakMap = typeof WeakMap === 'function' && WeakMap.prototype;
var weakMapHas = hasWeakMap ? WeakMap.prototype.has : null;
var hasWeakSet = typeof WeakSet === 'function' && WeakSet.prototype;
var weakSetHas = hasWeakSet ? WeakSet.prototype.has : null;
var hasWeakRef = typeof WeakRef === 'function' && WeakRef.prototype;
var weakRefDeref = hasWeakRef ? WeakRef.prototype.deref : null;
var booleanValueOf = Boolean.prototype.valueOf;
var objectToString = Object.prototype.toString;
var functionToString = Function.prototype.toString;
var $match = String.prototype.match;
var $slice = String.prototype.slice;
var $replace = String.prototype.replace;
var $toUpperCase = String.prototype.toUpperCase;
var $toLowerCase = String.prototype.toLowerCase;
var $test = RegExp.prototype.test;
var $concat = Array.prototype.concat;
var $join = Array.prototype.join;
var $arrSlice = Array.prototype.slice;
var $floor = Math.floor;
var bigIntValueOf = typeof BigInt === 'function' ? BigInt.prototype.valueOf : null;
var gOPS = Object.getOwnPropertySymbols;
var symToString = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? Symbol.prototype.toString : null;
var hasShammedSymbols = typeof Symbol === 'function' && typeof Symbol.iterator === 'object';

var toStringTag = typeof Symbol === 'function' && Symbol.toStringTag && (typeof Symbol.toStringTag === hasShammedSymbols ? 'object' : 'symbol')
    ? Symbol.toStringTag
    : null;
var isEnumerable = Object.prototype.propertyIsEnumerable;

var gPO = (typeof Reflect === 'function' ? Reflect.getPrototypeOf : Object.getPrototypeOf) || (
    [].__proto__ === Array.prototype 
        ? function (O) {
            return O.__proto__; 
        }
        : null
);

function addNumericSeparator(num, str) {
    if (
        num === Infinity
        || num === -Infinity
        || num !== num
        || (num && num > -1000 && num < 1000)
        || $test.call(/e/, str)
    ) {
        return str;
    }
    var sepRegex = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof num === 'number') {
        var int = num < 0 ? -$floor(-num) : $floor(num); 
        if (int !== num) {
            var intStr = String(int);
            var dec = $slice.call(str, intStr.length + 1);
            return $replace.call(intStr, sepRegex, '$&_') + '.' + $replace.call($replace.call(dec, /([0-9]{3})/g, '$&_'), /_$/, '');
        }
    }
    return $replace.call(str, sepRegex, '$&_');
}

var inspectCustom = require('./util.inspect').custom;
var inspectSymbol = inspectCustom && isSymbol(inspectCustom) ? inspectCustom : null;

module.exports = function inspect_(obj, options, depth, seen) {
    var opts = options || {};

    if (has(opts, 'quoteStyle') && (opts.quoteStyle !== 'single' && opts.quoteStyle !== 'double')) {
        throw new TypeError('option "quoteStyle" must be "single" or "double"');
    }
    if (
        has(opts, 'maxStringLength') && (typeof opts.maxStringLength === 'number'
            ? opts.maxStringLength < 0 && opts.maxStringLength !== Infinity
            : opts.maxStringLength !== null
        )
    ) {
        throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    }
    var customInspect = has(opts, 'customInspect') ? opts.customInspect : true;
    if (typeof customInspect !== 'boolean' && customInspect !== 'symbol') {
        throw new TypeError('option "customInspect", if provided, must be `true`, `false`, or `\'symbol\'`');
    }

    if (
        has(opts, 'indent')
        && opts.indent !== null
        && opts.indent !== '\t'
        && !(parseInt(opts.indent, 10) === opts.indent && opts.indent > 0)
    ) {
        throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
    }
    if (has(opts, 'numericSeparator') && typeof opts.numericSeparator !== 'boolean') {
        throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
    }
    var numericSeparator = opts.numericSeparator;

    if (typeof obj === 'undefined') {
        return 'undefined';
    }
    if (obj === null) {
        return 'null';
    }
    if (typeof obj === 'boolean') {
        return obj ? 'true' : 'false';
    }

    if (typeof obj === 'string') {
        return inspectString(obj, opts);
    }
    if (typeof obj === 'number') {
        if (obj === 0) {
            return Infinity / obj > 0 ? '0' : '-0';
        }
        var str = String(obj);
        return numericSeparator ? addNumericSeparator(obj, str) : str;
    }
    if (typeof obj === 'bigint') {
        var bigIntStr = String(obj) + 'n';
        return numericSeparator ? addNumericSeparator(obj, bigIntStr) : bigIntStr;
    }

    var maxDepth = typeof opts.depth === 'undefined' ? 5 : opts.depth;
    if (typeof depth === 'undefined') { depth = 0; }
    if (depth >= maxDepth && maxDepth > 0 && typeof obj === 'object') {
        return isArray(obj) ? '[Array]' : '[Object]';
    }

    var indent = getIndent(opts, depth);

    if (typeof seen === 'undefined') {
        seen = [];
    } else if (indexOf(seen, obj) >= 0) {
        return '[Circular]';
    }

    function inspect(value, from, noIndent) {
        if (from) {
            seen = $arrSlice.call(seen);
            seen.push(from);
        }
        if (noIndent) {
            var newOpts = {
                depth: opts.depth
            };
            if (has(opts, 'quoteStyle')) {
                newOpts.quoteStyle = opts.quoteStyle;
            }
            return inspect_(value, newOpts, depth + 1, seen);
        }
        return inspect_(value, opts, depth + 1, seen);
    }

    if (typeof obj === 'function') {
        var name = nameOf(obj);
        var keys = arrObjKeys(obj, inspect);
        return '[Function' + (name ? ': ' + name : ' (anonymous)') + ']' + (keys.length > 0 ? ' { ' + $join.call(keys, ', ') + ' }' : '');
    }
    if (isSymbol(obj)) {
        var symString = hasShammedSymbols ? $replace.call(String(obj), /^(Symbol\(.*\))_[^)]*$/, '$1') : symToString.call(obj);
        return typeof obj === 'object' && !hasShammedSymbols ? markBoxed(symString) : symString;
    }
    if (isElement(obj)) {
        var s = '<' + $toLowerCase.call(String(obj.nodeName));
        var attrs = obj.attributes || [];
        for (var i = 0; i < attrs.length; i++) {
            s += ' ' + attrs[i].name + '=' + wrapQuotes(quote(attrs[i].value), 'double', opts);
        }
        s += '>';
        if (obj.childNodes && obj.childNodes.length) { s += '...'; }
        s += '</' + $toLowerCase.call(String(obj.nodeName)) + '>';
        return s;
    }
    if (isArray(obj)) {
        if (obj.length === 0) { return '[]'; }
        var xs = arrObjKeys(obj, inspect);
        if (indent && !singleLineValues(xs)) {
            return '[' + indentedJoin(xs, indent) + ']';
        }
        return '[ ' + $join.call(xs, ', ') + ' ]';
    }
    if (isError(obj)) {
        var parts = arrObjKeys(obj, inspect);
        if ('cause' in obj && !isEnumerable.call(obj, 'cause')) {
            return '{ [' + String(obj) + '] ' + $join.call($concat.call('[cause]: ' + inspect(obj.cause), parts), ', ') + ' }';
        }
        if (parts.length === 0) { return '[' + String(obj) + ']'; }
        return '{ [' + String(obj) + '] ' + $join.call(parts, ', ') + ' }';
    }
    if (typeof obj === 'object' && customInspect) {
        if (inspectSymbol && typeof obj[inspectSymbol] === 'function') {
            return obj[inspectSymbol]();
        } else if (customInspect !== 'symbol' && typeof obj.inspect === 'function') {
            return obj.inspect();
        }
    }
    if (isMap(obj)) {
        var mapParts = [];
        mapForEach.call(obj, function (value, key) {
            mapParts.push(inspect(key, obj, true) + ' => ' + inspect(value, obj));
        });
        return collectionOf('Map', mapSize.call(obj), mapParts, indent);
    }
    if (isSet(obj)) {
        var setParts = [];
        setForEach.call(obj, function (value) {
            setParts.push(inspect(value, obj));
        });
        return collectionOf('Set', setSize.call(obj), setParts, indent);
    }
    if (isWeakMap(obj)) {
        return weakCollectionOf('WeakMap');
    }
    if (isWeakSet(obj)) {
        return weakCollectionOf('WeakSet');
    }
    if (isWeakRef(obj)) {
        return weakCollectionOf('WeakRef');
    }
    if (isNumber(obj)) {
        return markBoxed(inspect(Number(obj)));
    }
    if (isBigInt(obj)) {
        return markBoxed(inspect(bigIntValueOf.call(obj)));
    }
    if (isBoolean(obj)) {
        return markBoxed(booleanValueOf.call(obj));
    }
    if (isString(obj)) {
        return markBoxed(inspect(String(obj)));
    }
    if (!isDate(obj) && !isRegExp(obj)) {
        var ys = arrObjKeys(obj, inspect);
        var isPlainObject = gPO ? gPO(obj) === Object.prototype : obj instanceof Object || obj.constructor === Object;
        var protoTag = obj instanceof Object ? '' : 'null prototype';
        var stringTag = !isPlainObject && toStringTag && Object(obj) === obj && toStringTag in obj ? $slice.call(toStr(obj), 8, -1) : protoTag ? 'Object' : '';
        var constructorTag = isPlainObject || typeof obj.constructor !== 'function' ? '' : obj.constructor.name ? obj.constructor.name + ' ' : '';
        var tag = constructorTag + (stringTag || protoTag ? '[' + $join.call($concat.call([], stringTag || [], protoTag || []), ': ') + '] ' : '');
        if (ys.length === 0) { return tag + '{}'; }
        if (indent) {
            return tag + '{' + indentedJoin(ys, indent) + '}';
        }
        return tag + '{ ' + $join.call(ys, ', ') + ' }';
    }
    return String(obj);
};

function wrapQuotes(s, defaultStyle, opts) {
    var quoteChar = (opts.quoteStyle || defaultStyle) === 'double' ? '"' : "'";
    return quoteChar + s + quoteChar;
}

function quote(s) {
    return $replace.call(String(s), /"/g, '&quot;');
}

function isArray(obj) { return toStr(obj) === '[object Array]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isDate(obj) { return toStr(obj) === '[object Date]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isRegExp(obj) { return toStr(obj) === '[object RegExp]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isError(obj) { return toStr(obj) === '[object Error]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isString(obj) { return toStr(obj) === '[object String]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isNumber(obj) { return toStr(obj) === '[object Number]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isBoolean(obj) { return toStr(obj) === '[object Boolean]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }

// Symbol and BigInt do have Symbol.toStringTag by spec, so that can't be used to eliminate false positives
function isSymbol(obj) {
    if (hasShammedSymbols) {
        return obj && typeof obj === 'object' && obj instanceof Symbol;
    }
    if (typeof obj === 'symbol') {
        return true;
    }
    if (!obj || typeof obj !== 'object' || !symToString) {
        return false;
    }
    try {
        symToString.call(obj);
        return true;
    } catch (e) {}
    return false;
}

function isBigInt(obj) {
    if (!obj || typeof obj !== 'object' || !bigIntValueOf) {
        return false;
    }
    try {
        bigIntValueOf.call(obj);
        return true;
    } catch (e) {}
    return false;
}

var hasOwn = Object.prototype.hasOwnProperty || function (key) { return key in this; };
function has(obj, key) {
    return hasOwn.call(obj, key);
}

function toStr(obj) {
    return objectToString.call(obj);
}

function nameOf(f) {
    if (f.name) { return f.name; }
    var m = $match.call(functionToString.call(f), /^function\s*([\w$]+)/);
    if (m) { return m[1]; }
    return null;
}

function indexOf(xs, x) {
    if (xs.indexOf) { return xs.indexOf(x); }
    for (var i = 0, l = xs.length; i < l; i++) {
        if (xs[i] === x) { return i; }
    }
    return -1;
}

function isMap(x) {
    if (!mapSize || !x || typeof x !== 'object') {
        return false;
    }
    try {
        mapSize.call(x);
        try {
            setSize.call(x);
        } catch (s) {
            return true;
        }
        return x instanceof Map; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isWeakMap(x) {
    if (!weakMapHas || !x || typeof x !== 'object') {
        return false;
    }
    try {
        weakMapHas.call(x, weakMapHas);
        try {
            weakSetHas.call(x, weakSetHas);
        } catch (s) {
            return true;
        }
        return x instanceof WeakMap; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isWeakRef(x) {
    if (!weakRefDeref || !x || typeof x !== 'object') {
        return false;
    }
    try {
        weakRefDeref.call(x);
        return true;
    } catch (e) {}
    return false;
}

function isSet(x) {
    if (!setSize || !x || typeof x !== 'object') {
        return false;
    }
    try {
        setSize.call(x);
        try {
            mapSize.call(x);
        } catch (m) {
            return true;
        }
        return x instanceof Set; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isWeakSet(x) {
    if (!weakSetHas || !x || typeof x !== 'object') {
        return false;
    }
    try {
        weakSetHas.call(x, weakSetHas);
        try {
            weakMapHas.call(x, weakMapHas);
        } catch (s) {
            return true;
        }
        return x instanceof WeakSet; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isElement(x) {
    if (!x || typeof x !== 'object') { return false; }
    if (typeof HTMLElement !== 'undefined' && x instanceof HTMLElement) {
        return true;
    }
    return typeof x.nodeName === 'string' && typeof x.getAttribute === 'function';
}

function inspectString(str, opts) {
    if (str.length > opts.maxStringLength) {
        var remaining = str.length - opts.maxStringLength;
        var trailer = '... ' + remaining + ' more character' + (remaining > 1 ? 's' : '');
        return inspectString($slice.call(str, 0, opts.maxStringLength), opts) + trailer;
    }
    // eslint-disable-next-line no-control-regex
    var s = $replace.call($replace.call(str, /(['\\])/g, '\\$1'), /[\x00-\x1f]/g, lowbyte);
    return wrapQuotes(s, 'single', opts);
}

function lowbyte(c) {
    var n = c.charCodeAt(0);
    var x = {
        8: 'b',
        9: 't',
        10: 'n',
        12: 'f',
        13: 'r'
    }[n];
    if (x) { return '\\' + x; }
    return '\\x' + (n < 0x10 ? '0' : '') + $toUpperCase.call(n.toString(16));
}

function markBoxed(str) {
    return 'Object(' + str + ')';
}

function weakCollectionOf(type) {
    return type + ' { ? }';
}

function collectionOf(type, size, entries, indent) {
    var joinedEntries = indent ? indentedJoin(entries, indent) : $join.call(entries, ', ');
    return type + ' (' + size + ') {' + joinedEntries + '}';
}

function singleLineValues(xs) {
    for (var i = 0; i < xs.length; i++) {
        if (indexOf(xs[i], '\n') >= 0) {
            return false;
        }
    }
    return true;
}

function getIndent(opts, depth) {
    var baseIndent;
    if (opts.indent === '\t') {
        baseIndent = '\t';
    } else if (typeof opts.indent === 'number' && opts.indent > 0) {
        baseIndent = $join.call(Array(opts.indent + 1), ' ');
    } else {
        return null;
    }
    return {
        base: baseIndent,
        prev: $join.call(Array(depth + 1), baseIndent)
    };
}

function indentedJoin(xs, indent) {
    if (xs.length === 0) { return ''; }
    var lineJoiner = '\n' + indent.prev + indent.base;
    return lineJoiner + $join.call(xs, ',' + lineJoiner) + '\n' + indent.prev;
}

function arrObjKeys(obj, inspect) {
    var isArr = isArray(obj);
    var xs = [];
    if (isArr) {
        xs.length = obj.length;
        for (var i = 0; i < obj.length; i++) {
            xs[i] = has(obj, i) ? inspect(obj[i], obj) : '';
        }
    }
    var syms = typeof gOPS === 'function' ? gOPS(obj) : [];
    var symMap;
    if (hasShammedSymbols) {
        symMap = {};
        for (var k = 0; k < syms.length; k++) {
            symMap['$' + syms[k]] = syms[k];
        }
    }

    for (var key in obj) { // eslint-disable-line no-restricted-syntax
        if (!has(obj, key)) { continue; } // eslint-disable-line no-restricted-syntax, no-continue
        if (isArr && String(Number(key)) === key && key < obj.length) { continue; } // eslint-disable-line no-restricted-syntax, no-continue
        if (hasShammedSymbols && symMap['$' + key] instanceof Symbol) {
            // this is to prevent shammed Symbols, which are stored as strings, from being included in the string key section
            continue; // eslint-disable-line no-restricted-syntax, no-continue
        } else if ($test.call(/[^\w$]/, key)) {
            xs.push(inspect(key, obj) + ': ' + inspect(obj[key], obj));
        } else {
            xs.push(key + ': ' + inspect(obj[key], obj));
        }
    }
    if (typeof gOPS === 'function') {
        for (var j = 0; j < syms.length; j++) {
            if (isEnumerable.call(obj, syms[j])) {
                xs.push('[' + inspect(syms[j]) + ']: ' + inspect(obj[syms[j]], obj));
            }
        }
    }
    return xs;
}

},{"./util.inspect":94}],114:[function(require,module,exports){
(function (process){(function (){
























'use strict';

function assertPath(path) {
  if (typeof path !== 'string') {
    throw new TypeError('Path must be a string. Received ' + JSON.stringify(path));
  }
}


function normalizeStringPosix(path, allowAboveRoot) {
  var res = '';
  var lastSegmentLength = 0;
  var lastSlash = -1;
  var dots = 0;
  var code;
  for (var i = 0; i <= path.length; ++i) {
    if (i < path.length)
      code = path.charCodeAt(i);
    else if (code === 47 )
      break;
    else
      code = 47 ;
    if (code === 47 ) {
      if (lastSlash === i - 1 || dots === 1) {
        
      } else if (lastSlash !== i - 1 && dots === 2) {
        if (res.length < 2 || lastSegmentLength !== 2 || res.charCodeAt(res.length - 1) !== 46  || res.charCodeAt(res.length - 2) !== 46 ) {
          if (res.length > 2) {
            var lastSlashIndex = res.lastIndexOf('/');
            if (lastSlashIndex !== res.length - 1) {
              if (lastSlashIndex === -1) {
                res = '';
                lastSegmentLength = 0;
              } else {
                res = res.slice(0, lastSlashIndex);
                lastSegmentLength = res.length - 1 - res.lastIndexOf('/');
              }
              lastSlash = i;
              dots = 0;
              continue;
            }
          } else if (res.length === 2 || res.length === 1) {
            res = '';
            lastSegmentLength = 0;
            lastSlash = i;
            dots = 0;
            continue;
          }
        }
        if (allowAboveRoot) {
          if (res.length > 0)
            res += '/..';
          else
            res = '..';
          lastSegmentLength = 2;
        }
      } else {
        if (res.length > 0)
          res += '/' + path.slice(lastSlash + 1, i);
        else
          res = path.slice(lastSlash + 1, i);
        lastSegmentLength = i - lastSlash - 1;
      }
      lastSlash = i;
      dots = 0;
    } else if (code === 46  && dots !== -1) {
      ++dots;
    } else {
      dots = -1;
    }
  }
  return res;
}

function _format(sep, pathObject) {
  var dir = pathObject.dir || pathObject.root;
  var base = pathObject.base || (pathObject.name || '') + (pathObject.ext || '');
  if (!dir) {
    return base;
  }
  if (dir === pathObject.root) {
    return dir + base;
  }
  return dir + sep + base;
}

var posix = {
  
  resolve: function resolve() {
    var resolvedPath = '';
    var resolvedAbsolute = false;
    var cwd;

    for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
      var path;
      if (i >= 0)
        path = arguments[i];
      else {
        if (cwd === undefined)
          cwd = process.cwd();
        path = cwd;
      }

      assertPath(path);

      
      if (path.length === 0) {
        continue;
      }

      resolvedPath = path + '/' + resolvedPath;
      resolvedAbsolute = path.charCodeAt(0) === 47 ;
    }

    
    

    
    resolvedPath = normalizeStringPosix(resolvedPath, !resolvedAbsolute);

    if (resolvedAbsolute) {
      if (resolvedPath.length > 0)
        return '/' + resolvedPath;
      else
        return '/';
    } else if (resolvedPath.length > 0) {
      return resolvedPath;
    } else {
      return '.';
    }
  },

  normalize: function normalize(path) {
    assertPath(path);

    if (path.length === 0) return '.';

    var isAbsolute = path.charCodeAt(0) === 47 ;
    var trailingSeparator = path.charCodeAt(path.length - 1) === 47 ;

    
    path = normalizeStringPosix(path, !isAbsolute);

    if (path.length === 0 && !isAbsolute) path = '.';
    if (path.length > 0 && trailingSeparator) path += '/';

    if (isAbsolute) return '/' + path;
    return path;
  },

  isAbsolute: function isAbsolute(path) {
    assertPath(path);
    return path.length > 0 && path.charCodeAt(0) === 47 ;
  },

  join: function join() {
    if (arguments.length === 0)
      return '.';
    var joined;
    for (var i = 0; i < arguments.length; ++i) {
      var arg = arguments[i];
      assertPath(arg);
      if (arg.length > 0) {
        if (joined === undefined)
          joined = arg;
        else
          joined += '/' + arg;
      }
    }
    if (joined === undefined)
      return '.';
    return posix.normalize(joined);
  },

  relative: function relative(from, to) {
    assertPath(from);
    assertPath(to);

    if (from === to) return '';

    from = posix.resolve(from);
    to = posix.resolve(to);

    if (from === to) return '';

    
    var fromStart = 1;
    for (; fromStart < from.length; ++fromStart) {
      if (from.charCodeAt(fromStart) !== 47 )
        break;
    }
    var fromEnd = from.length;
    var fromLen = fromEnd - fromStart;

    
    var toStart = 1;
    for (; toStart < to.length; ++toStart) {
      if (to.charCodeAt(toStart) !== 47 )
        break;
    }
    var toEnd = to.length;
    var toLen = toEnd - toStart;

    
    var length = fromLen < toLen ? fromLen : toLen;
    var lastCommonSep = -1;
    var i = 0;
    for (; i <= length; ++i) {
      if (i === length) {
        if (toLen > length) {
          if (to.charCodeAt(toStart + i) === 47 ) {
            
            
            return to.slice(toStart + i + 1);
          } else if (i === 0) {
            
            
            return to.slice(toStart + i);
          }
        } else if (fromLen > length) {
          if (from.charCodeAt(fromStart + i) === 47 ) {
            
            
            lastCommonSep = i;
          } else if (i === 0) {
            
            
            lastCommonSep = 0;
          }
        }
        break;
      }
      var fromCode = from.charCodeAt(fromStart + i);
      var toCode = to.charCodeAt(toStart + i);
      if (fromCode !== toCode)
        break;
      else if (fromCode === 47 )
        lastCommonSep = i;
    }

    var out = '';
    
    
    for (i = fromStart + lastCommonSep + 1; i <= fromEnd; ++i) {
      if (i === fromEnd || from.charCodeAt(i) === 47 ) {
        if (out.length === 0)
          out += '..';
        else
          out += '/..';
      }
    }

    
    
    if (out.length > 0)
      return out + to.slice(toStart + lastCommonSep);
    else {
      toStart += lastCommonSep;
      if (to.charCodeAt(toStart) === 47 )
        ++toStart;
      return to.slice(toStart);
    }
  },

  _makeLong: function _makeLong(path) {
    return path;
  },

  dirname: function dirname(path) {
    assertPath(path);
    if (path.length === 0) return '.';
    var code = path.charCodeAt(0);
    var hasRoot = code === 47 ;
    var end = -1;
    var matchedSlash = true;
    for (var i = path.length - 1; i >= 1; --i) {
      code = path.charCodeAt(i);
      if (code === 47 ) {
          if (!matchedSlash) {
            end = i;
            break;
          }
        } else {
        
        matchedSlash = false;
      }
    }

    if (end === -1) return hasRoot ? '/' : '.';
    if (hasRoot && end === 1) return '//';
    return path.slice(0, end);
  },

  basename: function basename(path, ext) {
    if (ext !== undefined && typeof ext !== 'string') throw new TypeError('"ext" argument must be a string');
    assertPath(path);

    var start = 0;
    var end = -1;
    var matchedSlash = true;
    var i;

    if (ext !== undefined && ext.length > 0 && ext.length <= path.length) {
      if (ext.length === path.length && ext === path) return '';
      var extIdx = ext.length - 1;
      var firstNonSlashEnd = -1;
      for (i = path.length - 1; i >= 0; --i) {
        var code = path.charCodeAt(i);
        if (code === 47 ) {
            
            
            if (!matchedSlash) {
              start = i + 1;
              break;
            }
          } else {
          if (firstNonSlashEnd === -1) {
            
            
            matchedSlash = false;
            firstNonSlashEnd = i + 1;
          }
          if (extIdx >= 0) {
            
            if (code === ext.charCodeAt(extIdx)) {
              if (--extIdx === -1) {
                
                
                end = i;
              }
            } else {
              
              
              extIdx = -1;
              end = firstNonSlashEnd;
            }
          }
        }
      }

      if (start === end) end = firstNonSlashEnd;else if (end === -1) end = path.length;
      return path.slice(start, end);
    } else {
      for (i = path.length - 1; i >= 0; --i) {
        if (path.charCodeAt(i) === 47 ) {
            
            
            if (!matchedSlash) {
              start = i + 1;
              break;
            }
          } else if (end === -1) {
          
          
          matchedSlash = false;
          end = i + 1;
        }
      }

      if (end === -1) return '';
      return path.slice(start, end);
    }
  },

  extname: function extname(path) {
    assertPath(path);
    var startDot = -1;
    var startPart = 0;
    var end = -1;
    var matchedSlash = true;
    
    
    var preDotState = 0;
    for (var i = path.length - 1; i >= 0; --i) {
      var code = path.charCodeAt(i);
      if (code === 47 ) {
          
          
          if (!matchedSlash) {
            startPart = i + 1;
            break;
          }
          continue;
        }
      if (end === -1) {
        
        
        matchedSlash = false;
        end = i + 1;
      }
      if (code === 46 ) {
          
          if (startDot === -1)
            startDot = i;
          else if (preDotState !== 1)
            preDotState = 1;
      } else if (startDot !== -1) {
        
        
        preDotState = -1;
      }
    }

    if (startDot === -1 || end === -1 ||
        
        preDotState === 0 ||
        
        preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
      return '';
    }
    return path.slice(startDot, end);
  },

  format: function format(pathObject) {
    if (pathObject === null || typeof pathObject !== 'object') {
      throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof pathObject);
    }
    return _format('/', pathObject);
  },

  parse: function parse(path) {
    assertPath(path);

    var ret = { root: '', dir: '', base: '', ext: '', name: '' };
    if (path.length === 0) return ret;
    var code = path.charCodeAt(0);
    var isAbsolute = code === 47 ;
    var start;
    if (isAbsolute) {
      ret.root = '/';
      start = 1;
    } else {
      start = 0;
    }
    var startDot = -1;
    var startPart = 0;
    var end = -1;
    var matchedSlash = true;
    var i = path.length - 1;

    
    
    var preDotState = 0;

    
    for (; i >= start; --i) {
      code = path.charCodeAt(i);
      if (code === 47 ) {
          
          
          if (!matchedSlash) {
            startPart = i + 1;
            break;
          }
          continue;
        }
      if (end === -1) {
        
        
        matchedSlash = false;
        end = i + 1;
      }
      if (code === 46 ) {
          
          if (startDot === -1) startDot = i;else if (preDotState !== 1) preDotState = 1;
        } else if (startDot !== -1) {
        
        
        preDotState = -1;
      }
    }

    if (startDot === -1 || end === -1 ||
    
    preDotState === 0 ||
    
    preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
      if (end !== -1) {
        if (startPart === 0 && isAbsolute) ret.base = ret.name = path.slice(1, end);else ret.base = ret.name = path.slice(startPart, end);
      }
    } else {
      if (startPart === 0 && isAbsolute) {
        ret.name = path.slice(1, startDot);
        ret.base = path.slice(1, end);
      } else {
        ret.name = path.slice(startPart, startDot);
        ret.base = path.slice(startPart, end);
      }
      ret.ext = path.slice(startDot, end);
    }

    if (startPart > 0) ret.dir = path.slice(0, startPart - 1);else if (isAbsolute) ret.dir = '/';

    return ret;
  },

  sep: '/',
  delimiter: ':',
  win32: null,
  posix: null
};

posix.posix = posix;

module.exports = posix;

}).call(this)}).call(this,require('_process'))
},{"_process":115}],115:[function(require,module,exports){

var process = module.exports = {};






var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        
        return setTimeout(fun, 0);
    }
    
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        
        return clearTimeout(marker);
    }
    
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            
            
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};


function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; 
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],116:[function(require,module,exports){
'use strict';

var replace = String.prototype.replace;
var percentTwenties = /%20/g;

var Format = {
    RFC1738: 'RFC1738',
    RFC3986: 'RFC3986'
};

module.exports = {
    'default': Format.RFC3986,
    formatters: {
        RFC1738: function (value) {
            return replace.call(value, percentTwenties, '+');
        },
        RFC3986: function (value) {
            return String(value);
        }
    },
    RFC1738: Format.RFC1738,
    RFC3986: Format.RFC3986
};

},{}],117:[function(require,module,exports){
'use strict';

var stringify = require('./stringify');
var parse = require('./parse');
var formats = require('./formats');

module.exports = {
    formats: formats,
    parse: parse,
    stringify: stringify
};

},{"./formats":116,"./parse":118,"./stringify":119}],118:[function(require,module,exports){
'use strict';

var utils = require('./utils');

var has = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;

var defaults = {
    allowDots: false,
    allowPrototypes: false,
    allowSparse: false,
    arrayLimit: 20,
    charset: 'utf-8',
    charsetSentinel: false,
    comma: false,
    decoder: utils.decode,
    delimiter: '&',
    depth: 5,
    ignoreQueryPrefix: false,
    interpretNumericEntities: false,
    parameterLimit: 1000,
    parseArrays: true,
    plainObjects: false,
    strictNullHandling: false
};

var interpretNumericEntities = function (str) {
    return str.replace(/&#(\d+);/g, function ($0, numberStr) {
        return String.fromCharCode(parseInt(numberStr, 10));
    });
};

var parseArrayValue = function (val, options) {
    if (val && typeof val === 'string' && options.comma && val.indexOf(',') > -1) {
        return val.split(',');
    }

    return val;
};






var isoSentinel = 'utf8=%26%2310003%3B'; 


var charsetSentinel = 'utf8=%E2%9C%93'; 

var parseValues = function parseQueryStringValues(str, options) {
    var obj = {};
    var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, '') : str;
    var limit = options.parameterLimit === Infinity ? undefined : options.parameterLimit;
    var parts = cleanStr.split(options.delimiter, limit);
    var skipIndex = -1; 
    var i;

    var charset = options.charset;
    if (options.charsetSentinel) {
        for (i = 0; i < parts.length; ++i) {
            if (parts[i].indexOf('utf8=') === 0) {
                if (parts[i] === charsetSentinel) {
                    charset = 'utf-8';
                } else if (parts[i] === isoSentinel) {
                    charset = 'iso-8859-1';
                }
                skipIndex = i;
                i = parts.length; 
            }
        }
    }

    for (i = 0; i < parts.length; ++i) {
        if (i === skipIndex) {
            continue;
        }
        var part = parts[i];

        var bracketEqualsPos = part.indexOf(']=');
        var pos = bracketEqualsPos === -1 ? part.indexOf('=') : bracketEqualsPos + 1;

        var key, val;
        if (pos === -1) {
            key = options.decoder(part, defaults.decoder, charset, 'key');
            val = options.strictNullHandling ? null : '';
        } else {
            key = options.decoder(part.slice(0, pos), defaults.decoder, charset, 'key');
            val = utils.maybeMap(
                parseArrayValue(part.slice(pos + 1), options),
                function (encodedVal) {
                    return options.decoder(encodedVal, defaults.decoder, charset, 'value');
                }
            );
        }

        if (val && options.interpretNumericEntities && charset === 'iso-8859-1') {
            val = interpretNumericEntities(val);
        }

        if (part.indexOf('[]=') > -1) {
            val = isArray(val) ? [val] : val;
        }

        if (has.call(obj, key)) {
            obj[key] = utils.combine(obj[key], val);
        } else {
            obj[key] = val;
        }
    }

    return obj;
};

var parseObject = function (chain, val, options, valuesParsed) {
    var leaf = valuesParsed ? val : parseArrayValue(val, options);

    for (var i = chain.length - 1; i >= 0; --i) {
        var obj;
        var root = chain[i];

        if (root === '[]' && options.parseArrays) {
            obj = [].concat(leaf);
        } else {
            obj = options.plainObjects ? Object.create(null) : {};
            var cleanRoot = root.charAt(0) === '[' && root.charAt(root.length - 1) === ']' ? root.slice(1, -1) : root;
            var index = parseInt(cleanRoot, 10);
            if (!options.parseArrays && cleanRoot === '') {
                obj = { 0: leaf };
            } else if (
                !isNaN(index)
                && root !== cleanRoot
                && String(index) === cleanRoot
                && index >= 0
                && (options.parseArrays && index <= options.arrayLimit)
            ) {
                obj = [];
                obj[index] = leaf;
            } else if (cleanRoot !== '__proto__') {
                obj[cleanRoot] = leaf;
            }
        }

        leaf = obj;
    }

    return leaf;
};

var parseKeys = function parseQueryStringKeys(givenKey, val, options, valuesParsed) {
    if (!givenKey) {
        return;
    }

    
    var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, '[$1]') : givenKey;

    

    var brackets = /(\[[^[\]]*])/;
    var child = /(\[[^[\]]*])/g;

    

    var segment = options.depth > 0 && brackets.exec(key);
    var parent = segment ? key.slice(0, segment.index) : key;

    

    var keys = [];
    if (parent) {
        
        if (!options.plainObjects && has.call(Object.prototype, parent)) {
            if (!options.allowPrototypes) {
                return;
            }
        }

        keys.push(parent);
    }

    

    var i = 0;
    while (options.depth > 0 && (segment = child.exec(key)) !== null && i < options.depth) {
        i += 1;
        if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
            if (!options.allowPrototypes) {
                return;
            }
        }
        keys.push(segment[1]);
    }

    

    if (segment) {
        keys.push('[' + key.slice(segment.index) + ']');
    }

    return parseObject(keys, val, options, valuesParsed);
};

var normalizeParseOptions = function normalizeParseOptions(opts) {
    if (!opts) {
        return defaults;
    }

    if (opts.decoder !== null && opts.decoder !== undefined && typeof opts.decoder !== 'function') {
        throw new TypeError('Decoder has to be a function.');
    }

    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
        throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
    }
    var charset = typeof opts.charset === 'undefined' ? defaults.charset : opts.charset;

    return {
        allowDots: typeof opts.allowDots === 'undefined' ? defaults.allowDots : !!opts.allowDots,
        allowPrototypes: typeof opts.allowPrototypes === 'boolean' ? opts.allowPrototypes : defaults.allowPrototypes,
        allowSparse: typeof opts.allowSparse === 'boolean' ? opts.allowSparse : defaults.allowSparse,
        arrayLimit: typeof opts.arrayLimit === 'number' ? opts.arrayLimit : defaults.arrayLimit,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
        comma: typeof opts.comma === 'boolean' ? opts.comma : defaults.comma,
        decoder: typeof opts.decoder === 'function' ? opts.decoder : defaults.decoder,
        delimiter: typeof opts.delimiter === 'string' || utils.isRegExp(opts.delimiter) ? opts.delimiter : defaults.delimiter,
        
        depth: (typeof opts.depth === 'number' || opts.depth === false) ? +opts.depth : defaults.depth,
        ignoreQueryPrefix: opts.ignoreQueryPrefix === true,
        interpretNumericEntities: typeof opts.interpretNumericEntities === 'boolean' ? opts.interpretNumericEntities : defaults.interpretNumericEntities,
        parameterLimit: typeof opts.parameterLimit === 'number' ? opts.parameterLimit : defaults.parameterLimit,
        parseArrays: opts.parseArrays !== false,
        plainObjects: typeof opts.plainObjects === 'boolean' ? opts.plainObjects : defaults.plainObjects,
        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
    };
};

module.exports = function (str, opts) {
    var options = normalizeParseOptions(opts);

    if (str === '' || str === null || typeof str === 'undefined') {
        return options.plainObjects ? Object.create(null) : {};
    }

    var tempObj = typeof str === 'string' ? parseValues(str, options) : str;
    var obj = options.plainObjects ? Object.create(null) : {};

    

    var keys = Object.keys(tempObj);
    for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        var newObj = parseKeys(key, tempObj[key], options, typeof str === 'string');
        obj = utils.merge(obj, newObj, options);
    }

    if (options.allowSparse === true) {
        return obj;
    }

    return utils.compact(obj);
};

},{"./utils":120}],119:[function(require,module,exports){
'use strict';

var getSideChannel = require('side-channel');
var utils = require('./utils');
var formats = require('./formats');
var has = Object.prototype.hasOwnProperty;

var arrayPrefixGenerators = {
    brackets: function brackets(prefix) {
        return prefix + '[]';
    },
    comma: 'comma',
    indices: function indices(prefix, key) {
        return prefix + '[' + key + ']';
    },
    repeat: function repeat(prefix) {
        return prefix;
    }
};

var isArray = Array.isArray;
var split = String.prototype.split;
var push = Array.prototype.push;
var pushToArray = function (arr, valueOrArray) {
    push.apply(arr, isArray(valueOrArray) ? valueOrArray : [valueOrArray]);
};

var toISO = Date.prototype.toISOString;

var defaultFormat = formats['default'];
var defaults = {
    addQueryPrefix: false,
    allowDots: false,
    charset: 'utf-8',
    charsetSentinel: false,
    delimiter: '&',
    encode: true,
    encoder: utils.encode,
    encodeValuesOnly: false,
    format: defaultFormat,
    formatter: formats.formatters[defaultFormat],
    
    indices: false,
    serializeDate: function serializeDate(date) {
        return toISO.call(date);
    },
    skipNulls: false,
    strictNullHandling: false
};

var isNonNullishPrimitive = function isNonNullishPrimitive(v) {
    return typeof v === 'string'
        || typeof v === 'number'
        || typeof v === 'boolean'
        || typeof v === 'symbol'
        || typeof v === 'bigint';
};

var sentinel = {};

var stringify = function stringify(
    object,
    prefix,
    generateArrayPrefix,
    strictNullHandling,
    skipNulls,
    encoder,
    filter,
    sort,
    allowDots,
    serializeDate,
    format,
    formatter,
    encodeValuesOnly,
    charset,
    sideChannel
) {
    var obj = object;

    var tmpSc = sideChannel;
    var step = 0;
    var findFlag = false;
    while ((tmpSc = tmpSc.get(sentinel)) !== void undefined && !findFlag) {
        
        var pos = tmpSc.get(object);
        step += 1;
        if (typeof pos !== 'undefined') {
            if (pos === step) {
                throw new RangeError('Cyclic object value');
            } else {
                findFlag = true; 
            }
        }
        if (typeof tmpSc.get(sentinel) === 'undefined') {
            step = 0;
        }
    }

    if (typeof filter === 'function') {
        obj = filter(prefix, obj);
    } else if (obj instanceof Date) {
        obj = serializeDate(obj);
    } else if (generateArrayPrefix === 'comma' && isArray(obj)) {
        obj = utils.maybeMap(obj, function (value) {
            if (value instanceof Date) {
                return serializeDate(value);
            }
            return value;
        });
    }

    if (obj === null) {
        if (strictNullHandling) {
            return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder, charset, 'key', format) : prefix;
        }

        obj = '';
    }

    if (isNonNullishPrimitive(obj) || utils.isBuffer(obj)) {
        if (encoder) {
            var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder, charset, 'key', format);
            if (generateArrayPrefix === 'comma' && encodeValuesOnly) {
                var valuesArray = split.call(String(obj), ',');
                var valuesJoined = '';
                for (var i = 0; i < valuesArray.length; ++i) {
                    valuesJoined += (i === 0 ? '' : ',') + formatter(encoder(valuesArray[i], defaults.encoder, charset, 'value', format));
                }
                return [formatter(keyValue) + '=' + valuesJoined];
            }
            return [formatter(keyValue) + '=' + formatter(encoder(obj, defaults.encoder, charset, 'value', format))];
        }
        return [formatter(prefix) + '=' + formatter(String(obj))];
    }

    var values = [];

    if (typeof obj === 'undefined') {
        return values;
    }

    var objKeys;
    if (generateArrayPrefix === 'comma' && isArray(obj)) {
        
        objKeys = [{ value: obj.length > 0 ? obj.join(',') || null : void undefined }];
    } else if (isArray(filter)) {
        objKeys = filter;
    } else {
        var keys = Object.keys(obj);
        objKeys = sort ? keys.sort(sort) : keys;
    }

    for (var j = 0; j < objKeys.length; ++j) {
        var key = objKeys[j];
        var value = typeof key === 'object' && typeof key.value !== 'undefined' ? key.value : obj[key];

        if (skipNulls && value === null) {
            continue;
        }

        var keyPrefix = isArray(obj)
            ? typeof generateArrayPrefix === 'function' ? generateArrayPrefix(prefix, key) : prefix
            : prefix + (allowDots ? '.' + key : '[' + key + ']');

        sideChannel.set(object, step);
        var valueSideChannel = getSideChannel();
        valueSideChannel.set(sentinel, sideChannel);
        pushToArray(values, stringify(
            value,
            keyPrefix,
            generateArrayPrefix,
            strictNullHandling,
            skipNulls,
            encoder,
            filter,
            sort,
            allowDots,
            serializeDate,
            format,
            formatter,
            encodeValuesOnly,
            charset,
            valueSideChannel
        ));
    }

    return values;
};

var normalizeStringifyOptions = function normalizeStringifyOptions(opts) {
    if (!opts) {
        return defaults;
    }

    if (opts.encoder !== null && typeof opts.encoder !== 'undefined' && typeof opts.encoder !== 'function') {
        throw new TypeError('Encoder has to be a function.');
    }

    var charset = opts.charset || defaults.charset;
    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
        throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
    }

    var format = formats['default'];
    if (typeof opts.format !== 'undefined') {
        if (!has.call(formats.formatters, opts.format)) {
            throw new TypeError('Unknown format option provided.');
        }
        format = opts.format;
    }
    var formatter = formats.formatters[format];

    var filter = defaults.filter;
    if (typeof opts.filter === 'function' || isArray(opts.filter)) {
        filter = opts.filter;
    }

    return {
        addQueryPrefix: typeof opts.addQueryPrefix === 'boolean' ? opts.addQueryPrefix : defaults.addQueryPrefix,
        allowDots: typeof opts.allowDots === 'undefined' ? defaults.allowDots : !!opts.allowDots,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
        delimiter: typeof opts.delimiter === 'undefined' ? defaults.delimiter : opts.delimiter,
        encode: typeof opts.encode === 'boolean' ? opts.encode : defaults.encode,
        encoder: typeof opts.encoder === 'function' ? opts.encoder : defaults.encoder,
        encodeValuesOnly: typeof opts.encodeValuesOnly === 'boolean' ? opts.encodeValuesOnly : defaults.encodeValuesOnly,
        filter: filter,
        format: format,
        formatter: formatter,
        serializeDate: typeof opts.serializeDate === 'function' ? opts.serializeDate : defaults.serializeDate,
        skipNulls: typeof opts.skipNulls === 'boolean' ? opts.skipNulls : defaults.skipNulls,
        sort: typeof opts.sort === 'function' ? opts.sort : null,
        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
    };
};

module.exports = function (object, opts) {
    var obj = object;
    var options = normalizeStringifyOptions(opts);

    var objKeys;
    var filter;

    if (typeof options.filter === 'function') {
        filter = options.filter;
        obj = filter('', obj);
    } else if (isArray(options.filter)) {
        filter = options.filter;
        objKeys = filter;
    }

    var keys = [];

    if (typeof obj !== 'object' || obj === null) {
        return '';
    }

    var arrayFormat;
    if (opts && opts.arrayFormat in arrayPrefixGenerators) {
        arrayFormat = opts.arrayFormat;
    } else if (opts && 'indices' in opts) {
        arrayFormat = opts.indices ? 'indices' : 'repeat';
    } else {
        arrayFormat = 'indices';
    }

    var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];

    if (!objKeys) {
        objKeys = Object.keys(obj);
    }

    if (options.sort) {
        objKeys.sort(options.sort);
    }

    var sideChannel = getSideChannel();
    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (options.skipNulls && obj[key] === null) {
            continue;
        }
        pushToArray(keys, stringify(
            obj[key],
            key,
            generateArrayPrefix,
            options.strictNullHandling,
            options.skipNulls,
            options.encode ? options.encoder : null,
            options.filter,
            options.sort,
            options.allowDots,
            options.serializeDate,
            options.format,
            options.formatter,
            options.encodeValuesOnly,
            options.charset,
            sideChannel
        ));
    }

    var joined = keys.join(options.delimiter);
    var prefix = options.addQueryPrefix === true ? '?' : '';

    if (options.charsetSentinel) {
        if (options.charset === 'iso-8859-1') {
            
            prefix += 'utf8=%26%2310003%3B&';
        } else {
            
            prefix += 'utf8=%E2%9C%93&';
        }
    }

    return joined.length > 0 ? prefix + joined : '';
};

},{"./formats":116,"./utils":120,"side-channel":123}],120:[function(require,module,exports){
'use strict';

var formats = require('./formats');

var has = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;

var hexTable = (function () {
    var array = [];
    for (var i = 0; i < 256; ++i) {
        array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());
    }

    return array;
}());

var compactQueue = function compactQueue(queue) {
    while (queue.length > 1) {
        var item = queue.pop();
        var obj = item.obj[item.prop];

        if (isArray(obj)) {
            var compacted = [];

            for (var j = 0; j < obj.length; ++j) {
                if (typeof obj[j] !== 'undefined') {
                    compacted.push(obj[j]);
                }
            }

            item.obj[item.prop] = compacted;
        }
    }
};

var arrayToObject = function arrayToObject(source, options) {
    var obj = options && options.plainObjects ? Object.create(null) : {};
    for (var i = 0; i < source.length; ++i) {
        if (typeof source[i] !== 'undefined') {
            obj[i] = source[i];
        }
    }

    return obj;
};

var merge = function merge(target, source, options) {
        if (!source) {
        return target;
    }

    if (typeof source !== 'object') {
        if (isArray(target)) {
            target.push(source);
        } else if (target && typeof target === 'object') {
            if ((options && (options.plainObjects || options.allowPrototypes)) || !has.call(Object.prototype, source)) {
                target[source] = true;
            }
        } else {
            return [target, source];
        }

        return target;
    }

    if (!target || typeof target !== 'object') {
        return [target].concat(source);
    }

    var mergeTarget = target;
    if (isArray(target) && !isArray(source)) {
        mergeTarget = arrayToObject(target, options);
    }

    if (isArray(target) && isArray(source)) {
        source.forEach(function (item, i) {
            if (has.call(target, i)) {
                var targetItem = target[i];
                if (targetItem && typeof targetItem === 'object' && item && typeof item === 'object') {
                    target[i] = merge(targetItem, item, options);
                } else {
                    target.push(item);
                }
            } else {
                target[i] = item;
            }
        });
        return target;
    }

    return Object.keys(source).reduce(function (acc, key) {
        var value = source[key];

        if (has.call(acc, key)) {
            acc[key] = merge(acc[key], value, options);
        } else {
            acc[key] = value;
        }
        return acc;
    }, mergeTarget);
};

var assign = function assignSingleSource(target, source) {
    return Object.keys(source).reduce(function (acc, key) {
        acc[key] = source[key];
        return acc;
    }, target);
};

var decode = function (str, decoder, charset) {
    var strWithoutPlus = str.replace(/\+/g, ' ');
    if (charset === 'iso-8859-1') {
        
        return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
    }
    
    try {
        return decodeURIComponent(strWithoutPlus);
    } catch (e) {
        return strWithoutPlus;
    }
};

var encode = function encode(str, defaultEncoder, charset, kind, format) {
    
    
    if (str.length === 0) {
        return str;
    }

    var string = str;
    if (typeof str === 'symbol') {
        string = Symbol.prototype.toString.call(str);
    } else if (typeof str !== 'string') {
        string = String(str);
    }

    if (charset === 'iso-8859-1') {
        return escape(string).replace(/%u[0-9a-f]{4}/gi, function ($0) {
            return '%26%23' + parseInt($0.slice(2), 16) + '%3B';
        });
    }

    var out = '';
    for (var i = 0; i < string.length; ++i) {
        var c = string.charCodeAt(i);

        if (
            c === 0x2D 
            || c === 0x2E 
            || c === 0x5F 
            || c === 0x7E 
            || (c >= 0x30 && c <= 0x39) 
            || (c >= 0x41 && c <= 0x5A) 
            || (c >= 0x61 && c <= 0x7A) 
            || (format === formats.RFC1738 && (c === 0x28 || c === 0x29)) 
        ) {
            out += string.charAt(i);
            continue;
        }

        if (c < 0x80) {
            out = out + hexTable[c];
            continue;
        }

        if (c < 0x800) {
            out = out + (hexTable[0xC0 | (c >> 6)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        if (c < 0xD800 || c >= 0xE000) {
            out = out + (hexTable[0xE0 | (c >> 12)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        i += 1;
        c = 0x10000 + (((c & 0x3FF) << 10) | (string.charCodeAt(i) & 0x3FF));
                out += hexTable[0xF0 | (c >> 18)]
            + hexTable[0x80 | ((c >> 12) & 0x3F)]
            + hexTable[0x80 | ((c >> 6) & 0x3F)]
            + hexTable[0x80 | (c & 0x3F)];
    }

    return out;
};

var compact = function compact(value) {
    var queue = [{ obj: { o: value }, prop: 'o' }];
    var refs = [];

    for (var i = 0; i < queue.length; ++i) {
        var item = queue[i];
        var obj = item.obj[item.prop];

        var keys = Object.keys(obj);
        for (var j = 0; j < keys.length; ++j) {
            var key = keys[j];
            var val = obj[key];
            if (typeof val === 'object' && val !== null && refs.indexOf(val) === -1) {
                queue.push({ obj: obj, prop: key });
                refs.push(val);
            }
        }
    }

    compactQueue(queue);

    return value;
};

var isRegExp = function isRegExp(obj) {
    return Object.prototype.toString.call(obj) === '[object RegExp]';
};

var isBuffer = function isBuffer(obj) {
    if (!obj || typeof obj !== 'object') {
        return false;
    }

    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
};

var combine = function combine(a, b) {
    return [].concat(a, b);
};

var maybeMap = function maybeMap(val, fn) {
    if (isArray(val)) {
        var mapped = [];
        for (var i = 0; i < val.length; i += 1) {
            mapped.push(fn(val[i]));
        }
        return mapped;
    }
    return fn(val);
};

module.exports = {
    arrayToObject: arrayToObject,
    assign: assign,
    combine: combine,
    compact: compact,
    decode: decode,
    encode: encode,
    isBuffer: isBuffer,
    isRegExp: isRegExp,
    maybeMap: maybeMap,
    merge: merge
};

},{"./formats":116}],121:[function(require,module,exports){
'use strict';

var has = Object.prototype.hasOwnProperty
  , undef;

function decode(input) {
  try {
    return decodeURIComponent(input.replace(/\+/g, ' '));
  } catch (e) {
    return null;
  }
}

function encode(input) {
  try {
    return encodeURIComponent(input);
  } catch (e) {
    return null;
  }
}

function querystring(query) {
  var parser = /([^=?#&]+)=?([^&]*)/g
    , result = {}
    , part;

  while (part = parser.exec(query)) {
    var key = decode(part[1])
      , value = decode(part[2]);

    
    
    
    
    
    
    
    
    if (key === null || value === null || key in result) continue;
    result[key] = value;
  }

  return result;
}

function querystringify(obj, prefix) {
  prefix = prefix || '';

  var pairs = []
    , value
    , key;

  
  
  
  if ('string' !== typeof prefix) prefix = '?';

  for (key in obj) {
    if (has.call(obj, key)) {
      value = obj[key];

      
      
      
      
      if (!value && (value === null || value === undef || isNaN(value))) {
        value = '';
      }

      key = encode(key);
      value = encode(value);

      
      
      
      
      if (key === null || value === null) continue;
      pairs.push(key +'='+ value);
    }
  }

  return pairs.length ? prefix + pairs.join('&') : '';
}




exports.stringify = querystringify;
exports.parse = querystring;

},{}],122:[function(require,module,exports){
'use strict';

module.exports = function required(port, protocol) {
  protocol = protocol.split(':')[0];
  port = +port;

  if (!port) return false;

  switch (protocol) {
    case 'http':
    case 'ws':
    return port !== 80;

    case 'https':
    case 'wss':
    return port !== 443;

    case 'ftp':
    return port !== 21;

    case 'gopher':
    return port !== 70;

    case 'file':
    return false;
  }

  return port !== 0;
};

},{}],123:[function(require,module,exports){
'use strict';

var GetIntrinsic = require('get-intrinsic');
var callBound = require('call-bind/callBound');
var inspect = require('object-inspect');

var $TypeError = GetIntrinsic('%TypeError%');
var $WeakMap = GetIntrinsic('%WeakMap%', true);
var $Map = GetIntrinsic('%Map%', true);

var $weakMapGet = callBound('WeakMap.prototype.get', true);
var $weakMapSet = callBound('WeakMap.prototype.set', true);
var $weakMapHas = callBound('WeakMap.prototype.has', true);
var $mapGet = callBound('Map.prototype.get', true);
var $mapSet = callBound('Map.prototype.set', true);
var $mapHas = callBound('Map.prototype.has', true);

var listGetNode = function (list, key) { 
	for (var prev = list, curr; (curr = prev.next) !== null; prev = curr) {
		if (curr.key === key) {
			prev.next = curr.next;
			curr.next = list.next;
			list.next = curr; 
			return curr;
		}
	}
};

var listGet = function (objects, key) {
	var node = listGetNode(objects, key);
	return node && node.value;
};
var listSet = function (objects, key, value) {
	var node = listGetNode(objects, key);
	if (node) {
		node.value = value;
	} else {
		
		objects.next = { 
			key: key,
			next: objects.next,
			value: value
		};
	}
};
var listHas = function (objects, key) {
	return !!listGetNode(objects, key);
};

module.exports = function getSideChannel() {
	var $wm;
	var $m;
	var $o;
	var channel = {
		assert: function (key) {
			if (!channel.has(key)) {
				throw new $TypeError('Side channel does not contain ' + inspect(key));
			}
		},
		get: function (key) { 
			if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
				if ($wm) {
					return $weakMapGet($wm, key);
				}
			} else if ($Map) {
				if ($m) {
					return $mapGet($m, key);
				}
			} else {
				if ($o) { 
					return listGet($o, key);
				}
			}
		},
		has: function (key) {
			if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
				if ($wm) {
					return $weakMapHas($wm, key);
				}
			} else if ($Map) {
				if ($m) {
					return $mapHas($m, key);
				}
			} else {
				if ($o) { 
					return listHas($o, key);
				}
			}
			return false;
		},
		set: function (key, value) {
			if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
				if (!$wm) {
					$wm = new $WeakMap();
				}
				$weakMapSet($wm, key, value);
			} else if ($Map) {
				if (!$m) {
					$m = new $Map();
				}
				$mapSet($m, key, value);
			} else {
				if (!$o) {
										$o = { key: {}, next: null };
				}
				listSet($o, key, value);
			}
		}
	};
	return channel;
};

},{"call-bind/callBound":96,"get-intrinsic":102,"object-inspect":113}],124:[function(require,module,exports){
"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function Agent() {
  this._defaults = [];
}

['use', 'on', 'once', 'set', 'query', 'type', 'accept', 'auth', 'withCredentials', 'sortQuery', 'retry', 'ok', 'redirects', 'timeout', 'buffer', 'serialize', 'parse', 'ca', 'key', 'pfx', 'cert', 'disableTLSCerts'].forEach(function (fn) {
  
  Agent.prototype[fn] = function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    this._defaults.push({
      fn: fn,
      args: args
    });

    return this;
  };
});

Agent.prototype._setDefaults = function (req) {
  this._defaults.forEach(function (def) {
    req[def.fn].apply(req, _toConsumableArray(def.args));
  });
};

module.exports = Agent;

},{}],125:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var root;

if (typeof window !== 'undefined') {
  
  root = window;
} else if (typeof self === 'undefined') {
  
  console.warn('Using browser-only version of superagent in non-browser environment');
  root = void 0;
} else {
  
  root = self;
}

var Emitter = require('component-emitter');

var safeStringify = require('fast-safe-stringify');

var qs = require('qs');

var RequestBase = require('./request-base');

var isObject = require('./is-object');

var ResponseBase = require('./response-base');

var Agent = require('./agent-base');


function noop() {}


module.exports = function (method, url) {
  
  if (typeof url === 'function') {
    return new exports.Request('GET', method).end(url);
  } 


  if (arguments.length === 1) {
    return new exports.Request('GET', method);
  }

  return new exports.Request(method, url);
};

exports = module.exports;
var request = exports;
exports.Request = Request;

request.getXHR = function () {
  if (root.XMLHttpRequest && (!root.location || root.location.protocol !== 'file:' || !root.ActiveXObject)) {
    return new XMLHttpRequest();
  }

  try {
    return new ActiveXObject('Microsoft.XMLHTTP');
  } catch (_unused) {}

  try {
    return new ActiveXObject('Msxml2.XMLHTTP.6.0');
  } catch (_unused2) {}

  try {
    return new ActiveXObject('Msxml2.XMLHTTP.3.0');
  } catch (_unused3) {}

  try {
    return new ActiveXObject('Msxml2.XMLHTTP');
  } catch (_unused4) {}

  throw new Error('Browser-only version of superagent could not find XHR');
};


var trim = ''.trim ? function (s) {
  return s.trim();
} : function (s) {
  return s.replace(/(^\s*|\s*$)/g, '');
};

function serialize(obj) {
  if (!isObject(obj)) return obj;
  var pairs = [];

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) pushEncodedKeyValuePair(pairs, key, obj[key]);
  }

  return pairs.join('&');
}


function pushEncodedKeyValuePair(pairs, key, val) {
  if (val === undefined) return;

  if (val === null) {
    pairs.push(encodeURI(key));
    return;
  }

  if (Array.isArray(val)) {
    val.forEach(function (v) {
      pushEncodedKeyValuePair(pairs, key, v);
    });
  } else if (isObject(val)) {
    for (var subkey in val) {
      if (Object.prototype.hasOwnProperty.call(val, subkey)) pushEncodedKeyValuePair(pairs, "".concat(key, "[").concat(subkey, "]"), val[subkey]);
    }
  } else {
    pairs.push(encodeURI(key) + '=' + encodeURIComponent(val));
  }
}


request.serializeObject = serialize;

function parseString(str) {
  var obj = {};
  var pairs = str.split('&');
  var pair;
  var pos;

  for (var i = 0, len = pairs.length; i < len; ++i) {
    pair = pairs[i];
    pos = pair.indexOf('=');

    if (pos === -1) {
      obj[decodeURIComponent(pair)] = '';
    } else {
      obj[decodeURIComponent(pair.slice(0, pos))] = decodeURIComponent(pair.slice(pos + 1));
    }
  }

  return obj;
}


request.parseString = parseString;

request.types = {
  html: 'text/html',
  json: 'application/json',
  xml: 'text/xml',
  urlencoded: 'application/x-www-form-urlencoded',
  form: 'application/x-www-form-urlencoded',
  'form-data': 'application/x-www-form-urlencoded'
};

request.serialize = {
  'application/x-www-form-urlencoded': qs.stringify,
  'application/json': safeStringify
};

request.parse = {
  'application/x-www-form-urlencoded': parseString,
  'application/json': JSON.parse
};

function parseHeader(str) {
  var lines = str.split(/\r?\n/);
  var fields = {};
  var index;
  var line;
  var field;
  var val;

  for (var i = 0, len = lines.length; i < len; ++i) {
    line = lines[i];
    index = line.indexOf(':');

    if (index === -1) {
      
      continue;
    }

    field = line.slice(0, index).toLowerCase();
    val = trim(line.slice(index + 1));
    fields[field] = val;
  }

  return fields;
}


function isJSON(mime) {
  
  
  return /[/+]json($|[^-\w])/i.test(mime);
}


function Response(req) {
  this.req = req;
  this.xhr = this.req.xhr; 

  this.text = this.req.method !== 'HEAD' && (this.xhr.responseType === '' || this.xhr.responseType === 'text') || typeof this.xhr.responseType === 'undefined' ? this.xhr.responseText : null;
  this.statusText = this.req.xhr.statusText;
  var status = this.xhr.status; 

  if (status === 1223) {
    status = 204;
  }

  this._setStatusProperties(status);

  this.headers = parseHeader(this.xhr.getAllResponseHeaders());
  this.header = this.headers; 
  
  

  this.header['content-type'] = this.xhr.getResponseHeader('content-type');

  this._setHeaderProperties(this.header);

  if (this.text === null && req._responseType) {
    this.body = this.xhr.response;
  } else {
    this.body = this.req.method === 'HEAD' ? null : this._parseBody(this.text ? this.text : this.xhr.response);
  }
} 


ResponseBase(Response.prototype);

Response.prototype._parseBody = function (str) {
  var parse = request.parse[this.type];

  if (this.req._parser) {
    return this.req._parser(this, str);
  }

  if (!parse && isJSON(this.type)) {
    parse = request.parse['application/json'];
  }

  return parse && str && (str.length > 0 || str instanceof Object) ? parse(str) : null;
};


Response.prototype.toError = function () {
  var req = this.req;
  var method = req.method;
  var url = req.url;
  var msg = "cannot ".concat(method, " ").concat(url, " (").concat(this.status, ")");
  var err = new Error(msg);
  err.status = this.status;
  err.method = method;
  err.url = url;
  return err;
};


request.Response = Response;

function Request(method, url) {
  var self = this;
  this._query = this._query || [];
  this.method = method;
  this.url = url;
  this.header = {}; 

  this._header = {}; 

  this.on('end', function () {
    var err = null;
    var res = null;

    try {
      res = new Response(self);
    } catch (err_) {
      err = new Error('Parser is unable to parse the response');
      err.parse = true;
      err.original = err_; 

      if (self.xhr) {
        
        err.rawResponse = typeof self.xhr.responseType === 'undefined' ? self.xhr.responseText : self.xhr.response; 

        err.status = self.xhr.status ? self.xhr.status : null;
        err.statusCode = err.status; 
      } else {
        err.rawResponse = null;
        err.status = null;
      }

      return self.callback(err);
    }

    self.emit('response', res);
    var new_err;

    try {
      if (!self._isResponseOK(res)) {
        new_err = new Error(res.statusText || res.text || 'Unsuccessful HTTP response');
      }
    } catch (err_) {
      new_err = err_; 
    } 


    if (new_err) {
      new_err.original = err;
      new_err.response = res;
      new_err.status = res.status;
      self.callback(new_err, res);
    } else {
      self.callback(null, res);
    }
  });
}



Emitter(Request.prototype); 

RequestBase(Request.prototype);

Request.prototype.type = function (type) {
  this.set('Content-Type', request.types[type] || type);
  return this;
};


Request.prototype.accept = function (type) {
  this.set('Accept', request.types[type] || type);
  return this;
};


Request.prototype.auth = function (user, pass, options) {
  if (arguments.length === 1) pass = '';

  if (_typeof(pass) === 'object' && pass !== null) {
    
    options = pass;
    pass = '';
  }

  if (!options) {
    options = {
      type: typeof btoa === 'function' ? 'basic' : 'auto'
    };
  }

  var encoder = function encoder(string) {
    if (typeof btoa === 'function') {
      return btoa(string);
    }

    throw new Error('Cannot use basic auth, btoa is not a function');
  };

  return this._auth(user, pass, options, encoder);
};


Request.prototype.query = function (val) {
  if (typeof val !== 'string') val = serialize(val);
  if (val) this._query.push(val);
  return this;
};


Request.prototype.attach = function (field, file, options) {
  if (file) {
    if (this._data) {
      throw new Error("superagent can't mix .send() and .attach()");
    }

    this._getFormData().append(field, file, options || file.name);
  }

  return this;
};

Request.prototype._getFormData = function () {
  if (!this._formData) {
    this._formData = new root.FormData();
  }

  return this._formData;
};


Request.prototype.callback = function (err, res) {
  if (this._shouldRetry(err, res)) {
    return this._retry();
  }

  var fn = this._callback;
  this.clearTimeout();

  if (err) {
    if (this._maxRetries) err.retries = this._retries - 1;
    this.emit('error', err);
  }

  fn(err, res);
};


Request.prototype.crossDomainError = function () {
  var err = new Error('Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.');
  err.crossDomain = true;
  err.status = this.status;
  err.method = this.method;
  err.url = this.url;
  this.callback(err);
}; 


Request.prototype.agent = function () {
  console.warn('This is not supported in browser version of superagent');
  return this;
};

Request.prototype.ca = Request.prototype.agent;
Request.prototype.buffer = Request.prototype.ca; 

Request.prototype.write = function () {
  throw new Error('Streaming is not supported in browser version of superagent');
};

Request.prototype.pipe = Request.prototype.write;

Request.prototype._isHost = function (obj) {
  
  return obj && _typeof(obj) === 'object' && !Array.isArray(obj) && Object.prototype.toString.call(obj) !== '[object Object]';
};


Request.prototype.end = function (fn) {
  if (this._endCalled) {
    console.warn('Warning: .end() was called twice. This is not supported in superagent');
  }

  this._endCalled = true; 

  this._callback = fn || noop; 

  this._finalizeQueryString();

  this._end();
};

Request.prototype._setUploadTimeout = function () {
  var self = this; 

  if (this._uploadTimeout && !this._uploadTimeoutTimer) {
    this._uploadTimeoutTimer = setTimeout(function () {
      self._timeoutError('Upload timeout of ', self._uploadTimeout, 'ETIMEDOUT');
    }, this._uploadTimeout);
  }
}; 


Request.prototype._end = function () {
  if (this._aborted) return this.callback(new Error('The request has been aborted even before .end() was called'));
  var self = this;
  this.xhr = request.getXHR();
  var xhr = this.xhr;
  var data = this._formData || this._data;

  this._setTimeouts(); 


  xhr.onreadystatechange = function () {
    var readyState = xhr.readyState;

    if (readyState >= 2 && self._responseTimeoutTimer) {
      clearTimeout(self._responseTimeoutTimer);
    }

    if (readyState !== 4) {
      return;
    } 
    


    var status;

    try {
      status = xhr.status;
    } catch (_unused5) {
      status = 0;
    }

    if (!status) {
      if (self.timedout || self._aborted) return;
      return self.crossDomainError();
    }

    self.emit('end');
  }; 


  var handleProgress = function handleProgress(direction, e) {
    if (e.total > 0) {
      e.percent = e.loaded / e.total * 100;

      if (e.percent === 100) {
        clearTimeout(self._uploadTimeoutTimer);
      }
    }

    e.direction = direction;
    self.emit('progress', e);
  };

  if (this.hasListeners('progress')) {
    try {
      xhr.addEventListener('progress', handleProgress.bind(null, 'download'));

      if (xhr.upload) {
        xhr.upload.addEventListener('progress', handleProgress.bind(null, 'upload'));
      }
    } catch (_unused6) {
      
      
    }
  }

  if (xhr.upload) {
    this._setUploadTimeout();
  } 


  try {
    if (this.username && this.password) {
      xhr.open(this.method, this.url, true, this.username, this.password);
    } else {
      xhr.open(this.method, this.url, true);
    }
  } catch (err) {
    
    return this.callback(err);
  } 


  if (this._withCredentials) xhr.withCredentials = true; 

  if (!this._formData && this.method !== 'GET' && this.method !== 'HEAD' && typeof data !== 'string' && !this._isHost(data)) {
    
    var contentType = this._header['content-type'];

    var _serialize = this._serializer || request.serialize[contentType ? contentType.split(';')[0] : ''];

    if (!_serialize && isJSON(contentType)) {
      _serialize = request.serialize['application/json'];
    }

    if (_serialize) data = _serialize(data);
  } 


  for (var field in this.header) {
    if (this.header[field] === null) continue;
    if (Object.prototype.hasOwnProperty.call(this.header, field)) xhr.setRequestHeader(field, this.header[field]);
  }

  if (this._responseType) {
    xhr.responseType = this._responseType;
  } 


  this.emit('request', this); 
  

  xhr.send(typeof data === 'undefined' ? null : data);
};

request.agent = function () {
  return new Agent();
};

['GET', 'POST', 'OPTIONS', 'PATCH', 'PUT', 'DELETE'].forEach(function (method) {
  Agent.prototype[method.toLowerCase()] = function (url, fn) {
    var req = new request.Request(method, url);

    this._setDefaults(req);

    if (fn) {
      req.end(fn);
    }

    return req;
  };
});
Agent.prototype.del = Agent.prototype.delete;

request.get = function (url, data, fn) {
  var req = request('GET', url);

  if (typeof data === 'function') {
    fn = data;
    data = null;
  }

  if (data) req.query(data);
  if (fn) req.end(fn);
  return req;
};


request.head = function (url, data, fn) {
  var req = request('HEAD', url);

  if (typeof data === 'function') {
    fn = data;
    data = null;
  }

  if (data) req.query(data);
  if (fn) req.end(fn);
  return req;
};


request.options = function (url, data, fn) {
  var req = request('OPTIONS', url);

  if (typeof data === 'function') {
    fn = data;
    data = null;
  }

  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};


function del(url, data, fn) {
  var req = request('DELETE', url);

  if (typeof data === 'function') {
    fn = data;
    data = null;
  }

  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
}

request.del = del;
request.delete = del;

request.patch = function (url, data, fn) {
  var req = request('PATCH', url);

  if (typeof data === 'function') {
    fn = data;
    data = null;
  }

  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};


request.post = function (url, data, fn) {
  var req = request('POST', url);

  if (typeof data === 'function') {
    fn = data;
    data = null;
  }

  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};


request.put = function (url, data, fn) {
  var req = request('PUT', url);

  if (typeof data === 'function') {
    fn = data;
    data = null;
  }

  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

},{"./agent-base":124,"./is-object":126,"./request-base":127,"./response-base":128,"component-emitter":98,"fast-safe-stringify":99,"qs":117}],126:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function isObject(obj) {
  return obj !== null && _typeof(obj) === 'object';
}

module.exports = isObject;

},{}],127:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var isObject = require('./is-object');


module.exports = RequestBase;

function RequestBase(object) {
  if (object) return mixin(object);
}


function mixin(object) {
  for (var key in RequestBase.prototype) {
    if (Object.prototype.hasOwnProperty.call(RequestBase.prototype, key)) object[key] = RequestBase.prototype[key];
  }

  return object;
}


RequestBase.prototype.clearTimeout = function () {
  clearTimeout(this._timer);
  clearTimeout(this._responseTimeoutTimer);
  clearTimeout(this._uploadTimeoutTimer);
  delete this._timer;
  delete this._responseTimeoutTimer;
  delete this._uploadTimeoutTimer;
  return this;
};


RequestBase.prototype.parse = function (fn) {
  this._parser = fn;
  return this;
};


RequestBase.prototype.responseType = function (value) {
  this._responseType = value;
  return this;
};


RequestBase.prototype.serialize = function (fn) {
  this._serializer = fn;
  return this;
};


RequestBase.prototype.timeout = function (options) {
  if (!options || _typeof(options) !== 'object') {
    this._timeout = options;
    this._responseTimeout = 0;
    this._uploadTimeout = 0;
    return this;
  }

  for (var option in options) {
    if (Object.prototype.hasOwnProperty.call(options, option)) {
      switch (option) {
        case 'deadline':
          this._timeout = options.deadline;
          break;

        case 'response':
          this._responseTimeout = options.response;
          break;

        case 'upload':
          this._uploadTimeout = options.upload;
          break;

        default:
          console.warn('Unknown timeout option', option);
      }
    }
  }

  return this;
};


RequestBase.prototype.retry = function (count, fn) {
  
  if (arguments.length === 0 || count === true) count = 1;
  if (count <= 0) count = 0;
  this._maxRetries = count;
  this._retries = 0;
  this._retryCallback = fn;
  return this;
}; 












var ERROR_CODES = new Set(['ETIMEDOUT', 'ECONNRESET', 'EADDRINUSE', 'ECONNREFUSED', 'EPIPE', 'ENOTFOUND', 'ENETUNREACH', 'EAI_AGAIN']);
var STATUS_CODES = new Set([408, 413, 429, 500, 502, 503, 504, 521, 522, 524]); 



RequestBase.prototype._shouldRetry = function (err, res) {
  if (!this._maxRetries || this._retries++ >= this._maxRetries) {
    return false;
  }

  if (this._retryCallback) {
    try {
      var override = this._retryCallback(err, res);

      if (override === true) return true;
      if (override === false) return false; 
    } catch (err_) {
      console.error(err_);
    }
  } 

  

  if (res && res.status && STATUS_CODES.has(res.status)) return true;

  if (err) {
    if (err.code && ERROR_CODES.has(err.code)) return true; 

    if (err.timeout && err.code === 'ECONNABORTED') return true;
    if (err.crossDomain) return true;
  }

  return false;
};


RequestBase.prototype._retry = function () {
  this.clearTimeout(); 

  if (this.req) {
    this.req = null;
    this.req = this.request();
  }

  this._aborted = false;
  this.timedout = false;
  this.timedoutError = null;
  return this._end();
};


RequestBase.prototype.then = function (resolve, reject) {
  var _this = this;

  if (!this._fullfilledPromise) {
    var self = this;

    if (this._endCalled) {
      console.warn('Warning: superagent request was sent twice, because both .end() and .then() were called. Never call .end() if you use promises');
    }

    this._fullfilledPromise = new Promise(function (resolve, reject) {
      self.on('abort', function () {
        if (_this._maxRetries && _this._maxRetries > _this._retries) {
          return;
        }

        if (_this.timedout && _this.timedoutError) {
          reject(_this.timedoutError);
          return;
        }

        var err = new Error('Aborted');
        err.code = 'ABORTED';
        err.status = _this.status;
        err.method = _this.method;
        err.url = _this.url;
        reject(err);
      });
      self.end(function (err, res) {
        if (err) reject(err);else resolve(res);
      });
    });
  }

  return this._fullfilledPromise.then(resolve, reject);
};

RequestBase.prototype.catch = function (cb) {
  return this.then(undefined, cb);
};


RequestBase.prototype.use = function (fn) {
  fn(this);
  return this;
};

RequestBase.prototype.ok = function (cb) {
  if (typeof cb !== 'function') throw new Error('Callback required');
  this._okCallback = cb;
  return this;
};

RequestBase.prototype._isResponseOK = function (res) {
  if (!res) {
    return false;
  }

  if (this._okCallback) {
    return this._okCallback(res);
  }

  return res.status >= 200 && res.status < 300;
};


RequestBase.prototype.get = function (field) {
  return this._header[field.toLowerCase()];
};


RequestBase.prototype.getHeader = RequestBase.prototype.get;

RequestBase.prototype.set = function (field, value) {
  if (isObject(field)) {
    for (var key in field) {
      if (Object.prototype.hasOwnProperty.call(field, key)) this.set(key, field[key]);
    }

    return this;
  }

  this._header[field.toLowerCase()] = value;
  this.header[field] = value;
  return this;
};


RequestBase.prototype.unset = function (field) {
  delete this._header[field.toLowerCase()];
  delete this.header[field];
  return this;
};


RequestBase.prototype.field = function (name, value) {
  
  if (name === null || undefined === name) {
    throw new Error('.field(name, val) name can not be empty');
  }

  if (this._data) {
    throw new Error(".field() can't be used if .send() is used. Please use only .send() or only .field() & .attach()");
  }

  if (isObject(name)) {
    for (var key in name) {
      if (Object.prototype.hasOwnProperty.call(name, key)) this.field(key, name[key]);
    }

    return this;
  }

  if (Array.isArray(value)) {
    for (var i in value) {
      if (Object.prototype.hasOwnProperty.call(value, i)) this.field(name, value[i]);
    }

    return this;
  } 


  if (value === null || undefined === value) {
    throw new Error('.field(name, val) val can not be empty');
  }

  if (typeof value === 'boolean') {
    value = String(value);
  }

  this._getFormData().append(name, value);

  return this;
};


RequestBase.prototype.abort = function () {
  if (this._aborted) {
    return this;
  }

  this._aborted = true;
  if (this.xhr) this.xhr.abort(); 

  if (this.req) this.req.abort(); 

  this.clearTimeout();
  this.emit('abort');
  return this;
};

RequestBase.prototype._auth = function (user, pass, options, base64Encoder) {
  switch (options.type) {
    case 'basic':
      this.set('Authorization', "Basic ".concat(base64Encoder("".concat(user, ":").concat(pass))));
      break;

    case 'auto':
      this.username = user;
      this.password = pass;
      break;

    case 'bearer':
      
      this.set('Authorization', "Bearer ".concat(user));
      break;

    default:
      break;
  }

  return this;
};


RequestBase.prototype.withCredentials = function (on) {
  
  if (on === undefined) on = true;
  this._withCredentials = on;
  return this;
};


RequestBase.prototype.redirects = function (n) {
  this._maxRedirects = n;
  return this;
};


RequestBase.prototype.maxResponseSize = function (n) {
  if (typeof n !== 'number') {
    throw new TypeError('Invalid argument');
  }

  this._maxResponseSize = n;
  return this;
};


RequestBase.prototype.toJSON = function () {
  return {
    method: this.method,
    url: this.url,
    data: this._data,
    headers: this._header
  };
};



RequestBase.prototype.send = function (data) {
  var isObject_ = isObject(data);
  var type = this._header['content-type'];

  if (this._formData) {
    throw new Error(".send() can't be used if .attach() or .field() is used. Please use only .send() or only .field() & .attach()");
  }

  if (isObject_ && !this._data) {
    if (Array.isArray(data)) {
      this._data = [];
    } else if (!this._isHost(data)) {
      this._data = {};
    }
  } else if (data && this._data && this._isHost(this._data)) {
    throw new Error("Can't merge these send calls");
  } 


  if (isObject_ && isObject(this._data)) {
    for (var key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) this._data[key] = data[key];
    }
  } else if (typeof data === 'string') {
    
    if (!type) this.type('form');
    type = this._header['content-type'];
    if (type) type = type.toLowerCase().trim();

    if (type === 'application/x-www-form-urlencoded') {
      this._data = this._data ? "".concat(this._data, "&").concat(data) : data;
    } else {
      this._data = (this._data || '') + data;
    }
  } else {
    this._data = data;
  }

  if (!isObject_ || this._isHost(data)) {
    return this;
  } 


  if (!type) this.type('json');
  return this;
};


RequestBase.prototype.sortQuery = function (sort) {
  
  this._sort = typeof sort === 'undefined' ? true : sort;
  return this;
};


RequestBase.prototype._finalizeQueryString = function () {
  var query = this._query.join('&');

  if (query) {
    this.url += (this.url.includes('?') ? '&' : '?') + query;
  }

  this._query.length = 0; 

  if (this._sort) {
    var index = this.url.indexOf('?');

    if (index >= 0) {
      var queryArray = this.url.slice(index + 1).split('&');

      if (typeof this._sort === 'function') {
        queryArray.sort(this._sort);
      } else {
        queryArray.sort();
      }

      this.url = this.url.slice(0, index) + '?' + queryArray.join('&');
    }
  }
}; 


RequestBase.prototype._appendQueryString = function () {
  console.warn('Unsupported');
};


RequestBase.prototype._timeoutError = function (reason, timeout, errno) {
  if (this._aborted) {
    return;
  }

  var err = new Error("".concat(reason + timeout, "ms exceeded"));
  err.timeout = timeout;
  err.code = 'ECONNABORTED';
  err.errno = errno;
  this.timedout = true;
  this.timedoutError = err;
  this.abort();
  this.callback(err);
};

RequestBase.prototype._setTimeouts = function () {
  var self = this; 

  if (this._timeout && !this._timer) {
    this._timer = setTimeout(function () {
      self._timeoutError('Timeout of ', self._timeout, 'ETIME');
    }, this._timeout);
  } 


  if (this._responseTimeout && !this._responseTimeoutTimer) {
    this._responseTimeoutTimer = setTimeout(function () {
      self._timeoutError('Response timeout of ', self._responseTimeout, 'ETIMEDOUT');
    }, this._responseTimeout);
  }
};

},{"./is-object":126}],128:[function(require,module,exports){
"use strict";

var utils = require('./utils');


module.exports = ResponseBase;

function ResponseBase(obj) {
  if (obj) return mixin(obj);
}


function mixin(obj) {
  for (var key in ResponseBase.prototype) {
    if (Object.prototype.hasOwnProperty.call(ResponseBase.prototype, key)) obj[key] = ResponseBase.prototype[key];
  }

  return obj;
}


ResponseBase.prototype.get = function (field) {
  return this.header[field.toLowerCase()];
};


ResponseBase.prototype._setHeaderProperties = function (header) {
  
  
  
  var ct = header['content-type'] || '';
  this.type = utils.type(ct); 

  var params = utils.params(ct);

  for (var key in params) {
    if (Object.prototype.hasOwnProperty.call(params, key)) this[key] = params[key];
  }

  this.links = {}; 

  try {
    if (header.link) {
      this.links = utils.parseLinks(header.link);
    }
  } catch (_unused) {
  }
};


ResponseBase.prototype._setStatusProperties = function (status) {
  var type = status / 100 | 0; 

  this.statusCode = status;
  this.status = this.statusCode;
  this.statusType = type; 

  this.info = type === 1;
  this.ok = type === 2;
  this.redirect = type === 3;
  this.clientError = type === 4;
  this.serverError = type === 5;
  this.error = type === 4 || type === 5 ? this.toError() : false; 

  this.created = status === 201;
  this.accepted = status === 202;
  this.noContent = status === 204;
  this.badRequest = status === 400;
  this.unauthorized = status === 401;
  this.notAcceptable = status === 406;
  this.forbidden = status === 403;
  this.notFound = status === 404;
  this.unprocessableEntity = status === 422;
};

},{"./utils":129}],129:[function(require,module,exports){
"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

exports.type = function (str) {
  return str.split(/ *; */).shift();
};


exports.params = function (val) {
  var obj = {};

  var _iterator = _createForOfIteratorHelper(val.split(/ *; */)),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var str = _step.value;
      var parts = str.split(/ *= */);
      var key = parts.shift();

      var _val = parts.shift();

      if (key && _val) obj[key] = _val;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return obj;
};


exports.parseLinks = function (val) {
  var obj = {};

  var _iterator2 = _createForOfIteratorHelper(val.split(/ *, */)),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var str = _step2.value;
      var parts = str.split(/ *; */);
      var url = parts[0].slice(1, -1);
      var rel = parts[1].split(/ *= */)[1].slice(1, -1);
      obj[rel] = url;
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  return obj;
};


exports.cleanHeader = function (header, changesOrigin) {
  delete header['content-type'];
  delete header['content-length'];
  delete header['transfer-encoding'];
  delete header.host; 

  if (changesOrigin) {
    delete header.authorization;
    delete header.cookie;
  }

  return header;
};

},{}],130:[function(require,module,exports){
(function(nacl) {
'use strict';







var gf = function(init) {
  var i, r = new Float64Array(16);
  if (init) for (i = 0; i < init.length; i++) r[i] = init[i];
  return r;
};


var randombytes = function() { throw new Error('no PRNG'); };

var _0 = new Uint8Array(16);
var _9 = new Uint8Array(32); _9[0] = 9;

var gf0 = gf(),
    gf1 = gf([1]),
    _121665 = gf([0xdb41, 1]),
    D = gf([0x78a3, 0x1359, 0x4dca, 0x75eb, 0xd8ab, 0x4141, 0x0a4d, 0x0070, 0xe898, 0x7779, 0x4079, 0x8cc7, 0xfe73, 0x2b6f, 0x6cee, 0x5203]),
    D2 = gf([0xf159, 0x26b2, 0x9b94, 0xebd6, 0xb156, 0x8283, 0x149a, 0x00e0, 0xd130, 0xeef3, 0x80f2, 0x198e, 0xfce7, 0x56df, 0xd9dc, 0x2406]),
    X = gf([0xd51a, 0x8f25, 0x2d60, 0xc956, 0xa7b2, 0x9525, 0xc760, 0x692c, 0xdc5c, 0xfdd6, 0xe231, 0xc0a4, 0x53fe, 0xcd6e, 0x36d3, 0x2169]),
    Y = gf([0x6658, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666]),
    I = gf([0xa0b0, 0x4a0e, 0x1b27, 0xc4ee, 0xe478, 0xad2f, 0x1806, 0x2f43, 0xd7a7, 0x3dfb, 0x0099, 0x2b4d, 0xdf0b, 0x4fc1, 0x2480, 0x2b83]);

function ts64(x, i, h, l) {
  x[i]   = (h >> 24) & 0xff;
  x[i+1] = (h >> 16) & 0xff;
  x[i+2] = (h >>  8) & 0xff;
  x[i+3] = h & 0xff;
  x[i+4] = (l >> 24)  & 0xff;
  x[i+5] = (l >> 16)  & 0xff;
  x[i+6] = (l >>  8)  & 0xff;
  x[i+7] = l & 0xff;
}

function vn(x, xi, y, yi, n) {
  var i,d = 0;
  for (i = 0; i < n; i++) d |= x[xi+i]^y[yi+i];
  return (1 & ((d - 1) >>> 8)) - 1;
}

function crypto_verify_16(x, xi, y, yi) {
  return vn(x,xi,y,yi,16);
}

function crypto_verify_32(x, xi, y, yi) {
  return vn(x,xi,y,yi,32);
}

function core_salsa20(o, p, k, c) {
  var j0  = c[ 0] & 0xff | (c[ 1] & 0xff)<<8 | (c[ 2] & 0xff)<<16 | (c[ 3] & 0xff)<<24,
      j1  = k[ 0] & 0xff | (k[ 1] & 0xff)<<8 | (k[ 2] & 0xff)<<16 | (k[ 3] & 0xff)<<24,
      j2  = k[ 4] & 0xff | (k[ 5] & 0xff)<<8 | (k[ 6] & 0xff)<<16 | (k[ 7] & 0xff)<<24,
      j3  = k[ 8] & 0xff | (k[ 9] & 0xff)<<8 | (k[10] & 0xff)<<16 | (k[11] & 0xff)<<24,
      j4  = k[12] & 0xff | (k[13] & 0xff)<<8 | (k[14] & 0xff)<<16 | (k[15] & 0xff)<<24,
      j5  = c[ 4] & 0xff | (c[ 5] & 0xff)<<8 | (c[ 6] & 0xff)<<16 | (c[ 7] & 0xff)<<24,
      j6  = p[ 0] & 0xff | (p[ 1] & 0xff)<<8 | (p[ 2] & 0xff)<<16 | (p[ 3] & 0xff)<<24,
      j7  = p[ 4] & 0xff | (p[ 5] & 0xff)<<8 | (p[ 6] & 0xff)<<16 | (p[ 7] & 0xff)<<24,
      j8  = p[ 8] & 0xff | (p[ 9] & 0xff)<<8 | (p[10] & 0xff)<<16 | (p[11] & 0xff)<<24,
      j9  = p[12] & 0xff | (p[13] & 0xff)<<8 | (p[14] & 0xff)<<16 | (p[15] & 0xff)<<24,
      j10 = c[ 8] & 0xff | (c[ 9] & 0xff)<<8 | (c[10] & 0xff)<<16 | (c[11] & 0xff)<<24,
      j11 = k[16] & 0xff | (k[17] & 0xff)<<8 | (k[18] & 0xff)<<16 | (k[19] & 0xff)<<24,
      j12 = k[20] & 0xff | (k[21] & 0xff)<<8 | (k[22] & 0xff)<<16 | (k[23] & 0xff)<<24,
      j13 = k[24] & 0xff | (k[25] & 0xff)<<8 | (k[26] & 0xff)<<16 | (k[27] & 0xff)<<24,
      j14 = k[28] & 0xff | (k[29] & 0xff)<<8 | (k[30] & 0xff)<<16 | (k[31] & 0xff)<<24,
      j15 = c[12] & 0xff | (c[13] & 0xff)<<8 | (c[14] & 0xff)<<16 | (c[15] & 0xff)<<24;

  var x0 = j0, x1 = j1, x2 = j2, x3 = j3, x4 = j4, x5 = j5, x6 = j6, x7 = j7,
      x8 = j8, x9 = j9, x10 = j10, x11 = j11, x12 = j12, x13 = j13, x14 = j14,
      x15 = j15, u;

  for (var i = 0; i < 20; i += 2) {
    u = x0 + x12 | 0;
    x4 ^= u<<7 | u>>>(32-7);
    u = x4 + x0 | 0;
    x8 ^= u<<9 | u>>>(32-9);
    u = x8 + x4 | 0;
    x12 ^= u<<13 | u>>>(32-13);
    u = x12 + x8 | 0;
    x0 ^= u<<18 | u>>>(32-18);

    u = x5 + x1 | 0;
    x9 ^= u<<7 | u>>>(32-7);
    u = x9 + x5 | 0;
    x13 ^= u<<9 | u>>>(32-9);
    u = x13 + x9 | 0;
    x1 ^= u<<13 | u>>>(32-13);
    u = x1 + x13 | 0;
    x5 ^= u<<18 | u>>>(32-18);

    u = x10 + x6 | 0;
    x14 ^= u<<7 | u>>>(32-7);
    u = x14 + x10 | 0;
    x2 ^= u<<9 | u>>>(32-9);
    u = x2 + x14 | 0;
    x6 ^= u<<13 | u>>>(32-13);
    u = x6 + x2 | 0;
    x10 ^= u<<18 | u>>>(32-18);

    u = x15 + x11 | 0;
    x3 ^= u<<7 | u>>>(32-7);
    u = x3 + x15 | 0;
    x7 ^= u<<9 | u>>>(32-9);
    u = x7 + x3 | 0;
    x11 ^= u<<13 | u>>>(32-13);
    u = x11 + x7 | 0;
    x15 ^= u<<18 | u>>>(32-18);

    u = x0 + x3 | 0;
    x1 ^= u<<7 | u>>>(32-7);
    u = x1 + x0 | 0;
    x2 ^= u<<9 | u>>>(32-9);
    u = x2 + x1 | 0;
    x3 ^= u<<13 | u>>>(32-13);
    u = x3 + x2 | 0;
    x0 ^= u<<18 | u>>>(32-18);

    u = x5 + x4 | 0;
    x6 ^= u<<7 | u>>>(32-7);
    u = x6 + x5 | 0;
    x7 ^= u<<9 | u>>>(32-9);
    u = x7 + x6 | 0;
    x4 ^= u<<13 | u>>>(32-13);
    u = x4 + x7 | 0;
    x5 ^= u<<18 | u>>>(32-18);

    u = x10 + x9 | 0;
    x11 ^= u<<7 | u>>>(32-7);
    u = x11 + x10 | 0;
    x8 ^= u<<9 | u>>>(32-9);
    u = x8 + x11 | 0;
    x9 ^= u<<13 | u>>>(32-13);
    u = x9 + x8 | 0;
    x10 ^= u<<18 | u>>>(32-18);

    u = x15 + x14 | 0;
    x12 ^= u<<7 | u>>>(32-7);
    u = x12 + x15 | 0;
    x13 ^= u<<9 | u>>>(32-9);
    u = x13 + x12 | 0;
    x14 ^= u<<13 | u>>>(32-13);
    u = x14 + x13 | 0;
    x15 ^= u<<18 | u>>>(32-18);
  }
   x0 =  x0 +  j0 | 0;
   x1 =  x1 +  j1 | 0;
   x2 =  x2 +  j2 | 0;
   x3 =  x3 +  j3 | 0;
   x4 =  x4 +  j4 | 0;
   x5 =  x5 +  j5 | 0;
   x6 =  x6 +  j6 | 0;
   x7 =  x7 +  j7 | 0;
   x8 =  x8 +  j8 | 0;
   x9 =  x9 +  j9 | 0;
  x10 = x10 + j10 | 0;
  x11 = x11 + j11 | 0;
  x12 = x12 + j12 | 0;
  x13 = x13 + j13 | 0;
  x14 = x14 + j14 | 0;
  x15 = x15 + j15 | 0;

  o[ 0] = x0 >>>  0 & 0xff;
  o[ 1] = x0 >>>  8 & 0xff;
  o[ 2] = x0 >>> 16 & 0xff;
  o[ 3] = x0 >>> 24 & 0xff;

  o[ 4] = x1 >>>  0 & 0xff;
  o[ 5] = x1 >>>  8 & 0xff;
  o[ 6] = x1 >>> 16 & 0xff;
  o[ 7] = x1 >>> 24 & 0xff;

  o[ 8] = x2 >>>  0 & 0xff;
  o[ 9] = x2 >>>  8 & 0xff;
  o[10] = x2 >>> 16 & 0xff;
  o[11] = x2 >>> 24 & 0xff;

  o[12] = x3 >>>  0 & 0xff;
  o[13] = x3 >>>  8 & 0xff;
  o[14] = x3 >>> 16 & 0xff;
  o[15] = x3 >>> 24 & 0xff;

  o[16] = x4 >>>  0 & 0xff;
  o[17] = x4 >>>  8 & 0xff;
  o[18] = x4 >>> 16 & 0xff;
  o[19] = x4 >>> 24 & 0xff;

  o[20] = x5 >>>  0 & 0xff;
  o[21] = x5 >>>  8 & 0xff;
  o[22] = x5 >>> 16 & 0xff;
  o[23] = x5 >>> 24 & 0xff;

  o[24] = x6 >>>  0 & 0xff;
  o[25] = x6 >>>  8 & 0xff;
  o[26] = x6 >>> 16 & 0xff;
  o[27] = x6 >>> 24 & 0xff;

  o[28] = x7 >>>  0 & 0xff;
  o[29] = x7 >>>  8 & 0xff;
  o[30] = x7 >>> 16 & 0xff;
  o[31] = x7 >>> 24 & 0xff;

  o[32] = x8 >>>  0 & 0xff;
  o[33] = x8 >>>  8 & 0xff;
  o[34] = x8 >>> 16 & 0xff;
  o[35] = x8 >>> 24 & 0xff;

  o[36] = x9 >>>  0 & 0xff;
  o[37] = x9 >>>  8 & 0xff;
  o[38] = x9 >>> 16 & 0xff;
  o[39] = x9 >>> 24 & 0xff;

  o[40] = x10 >>>  0 & 0xff;
  o[41] = x10 >>>  8 & 0xff;
  o[42] = x10 >>> 16 & 0xff;
  o[43] = x10 >>> 24 & 0xff;

  o[44] = x11 >>>  0 & 0xff;
  o[45] = x11 >>>  8 & 0xff;
  o[46] = x11 >>> 16 & 0xff;
  o[47] = x11 >>> 24 & 0xff;

  o[48] = x12 >>>  0 & 0xff;
  o[49] = x12 >>>  8 & 0xff;
  o[50] = x12 >>> 16 & 0xff;
  o[51] = x12 >>> 24 & 0xff;

  o[52] = x13 >>>  0 & 0xff;
  o[53] = x13 >>>  8 & 0xff;
  o[54] = x13 >>> 16 & 0xff;
  o[55] = x13 >>> 24 & 0xff;

  o[56] = x14 >>>  0 & 0xff;
  o[57] = x14 >>>  8 & 0xff;
  o[58] = x14 >>> 16 & 0xff;
  o[59] = x14 >>> 24 & 0xff;

  o[60] = x15 >>>  0 & 0xff;
  o[61] = x15 >>>  8 & 0xff;
  o[62] = x15 >>> 16 & 0xff;
  o[63] = x15 >>> 24 & 0xff;
}

function core_hsalsa20(o,p,k,c) {
  var j0  = c[ 0] & 0xff | (c[ 1] & 0xff)<<8 | (c[ 2] & 0xff)<<16 | (c[ 3] & 0xff)<<24,
      j1  = k[ 0] & 0xff | (k[ 1] & 0xff)<<8 | (k[ 2] & 0xff)<<16 | (k[ 3] & 0xff)<<24,
      j2  = k[ 4] & 0xff | (k[ 5] & 0xff)<<8 | (k[ 6] & 0xff)<<16 | (k[ 7] & 0xff)<<24,
      j3  = k[ 8] & 0xff | (k[ 9] & 0xff)<<8 | (k[10] & 0xff)<<16 | (k[11] & 0xff)<<24,
      j4  = k[12] & 0xff | (k[13] & 0xff)<<8 | (k[14] & 0xff)<<16 | (k[15] & 0xff)<<24,
      j5  = c[ 4] & 0xff | (c[ 5] & 0xff)<<8 | (c[ 6] & 0xff)<<16 | (c[ 7] & 0xff)<<24,
      j6  = p[ 0] & 0xff | (p[ 1] & 0xff)<<8 | (p[ 2] & 0xff)<<16 | (p[ 3] & 0xff)<<24,
      j7  = p[ 4] & 0xff | (p[ 5] & 0xff)<<8 | (p[ 6] & 0xff)<<16 | (p[ 7] & 0xff)<<24,
      j8  = p[ 8] & 0xff | (p[ 9] & 0xff)<<8 | (p[10] & 0xff)<<16 | (p[11] & 0xff)<<24,
      j9  = p[12] & 0xff | (p[13] & 0xff)<<8 | (p[14] & 0xff)<<16 | (p[15] & 0xff)<<24,
      j10 = c[ 8] & 0xff | (c[ 9] & 0xff)<<8 | (c[10] & 0xff)<<16 | (c[11] & 0xff)<<24,
      j11 = k[16] & 0xff | (k[17] & 0xff)<<8 | (k[18] & 0xff)<<16 | (k[19] & 0xff)<<24,
      j12 = k[20] & 0xff | (k[21] & 0xff)<<8 | (k[22] & 0xff)<<16 | (k[23] & 0xff)<<24,
      j13 = k[24] & 0xff | (k[25] & 0xff)<<8 | (k[26] & 0xff)<<16 | (k[27] & 0xff)<<24,
      j14 = k[28] & 0xff | (k[29] & 0xff)<<8 | (k[30] & 0xff)<<16 | (k[31] & 0xff)<<24,
      j15 = c[12] & 0xff | (c[13] & 0xff)<<8 | (c[14] & 0xff)<<16 | (c[15] & 0xff)<<24;

  var x0 = j0, x1 = j1, x2 = j2, x3 = j3, x4 = j4, x5 = j5, x6 = j6, x7 = j7,
      x8 = j8, x9 = j9, x10 = j10, x11 = j11, x12 = j12, x13 = j13, x14 = j14,
      x15 = j15, u;

  for (var i = 0; i < 20; i += 2) {
    u = x0 + x12 | 0;
    x4 ^= u<<7 | u>>>(32-7);
    u = x4 + x0 | 0;
    x8 ^= u<<9 | u>>>(32-9);
    u = x8 + x4 | 0;
    x12 ^= u<<13 | u>>>(32-13);
    u = x12 + x8 | 0;
    x0 ^= u<<18 | u>>>(32-18);

    u = x5 + x1 | 0;
    x9 ^= u<<7 | u>>>(32-7);
    u = x9 + x5 | 0;
    x13 ^= u<<9 | u>>>(32-9);
    u = x13 + x9 | 0;
    x1 ^= u<<13 | u>>>(32-13);
    u = x1 + x13 | 0;
    x5 ^= u<<18 | u>>>(32-18);

    u = x10 + x6 | 0;
    x14 ^= u<<7 | u>>>(32-7);
    u = x14 + x10 | 0;
    x2 ^= u<<9 | u>>>(32-9);
    u = x2 + x14 | 0;
    x6 ^= u<<13 | u>>>(32-13);
    u = x6 + x2 | 0;
    x10 ^= u<<18 | u>>>(32-18);

    u = x15 + x11 | 0;
    x3 ^= u<<7 | u>>>(32-7);
    u = x3 + x15 | 0;
    x7 ^= u<<9 | u>>>(32-9);
    u = x7 + x3 | 0;
    x11 ^= u<<13 | u>>>(32-13);
    u = x11 + x7 | 0;
    x15 ^= u<<18 | u>>>(32-18);

    u = x0 + x3 | 0;
    x1 ^= u<<7 | u>>>(32-7);
    u = x1 + x0 | 0;
    x2 ^= u<<9 | u>>>(32-9);
    u = x2 + x1 | 0;
    x3 ^= u<<13 | u>>>(32-13);
    u = x3 + x2 | 0;
    x0 ^= u<<18 | u>>>(32-18);

    u = x5 + x4 | 0;
    x6 ^= u<<7 | u>>>(32-7);
    u = x6 + x5 | 0;
    x7 ^= u<<9 | u>>>(32-9);
    u = x7 + x6 | 0;
    x4 ^= u<<13 | u>>>(32-13);
    u = x4 + x7 | 0;
    x5 ^= u<<18 | u>>>(32-18);

    u = x10 + x9 | 0;
    x11 ^= u<<7 | u>>>(32-7);
    u = x11 + x10 | 0;
    x8 ^= u<<9 | u>>>(32-9);
    u = x8 + x11 | 0;
    x9 ^= u<<13 | u>>>(32-13);
    u = x9 + x8 | 0;
    x10 ^= u<<18 | u>>>(32-18);

    u = x15 + x14 | 0;
    x12 ^= u<<7 | u>>>(32-7);
    u = x12 + x15 | 0;
    x13 ^= u<<9 | u>>>(32-9);
    u = x13 + x12 | 0;
    x14 ^= u<<13 | u>>>(32-13);
    u = x14 + x13 | 0;
    x15 ^= u<<18 | u>>>(32-18);
  }

  o[ 0] = x0 >>>  0 & 0xff;
  o[ 1] = x0 >>>  8 & 0xff;
  o[ 2] = x0 >>> 16 & 0xff;
  o[ 3] = x0 >>> 24 & 0xff;

  o[ 4] = x5 >>>  0 & 0xff;
  o[ 5] = x5 >>>  8 & 0xff;
  o[ 6] = x5 >>> 16 & 0xff;
  o[ 7] = x5 >>> 24 & 0xff;

  o[ 8] = x10 >>>  0 & 0xff;
  o[ 9] = x10 >>>  8 & 0xff;
  o[10] = x10 >>> 16 & 0xff;
  o[11] = x10 >>> 24 & 0xff;

  o[12] = x15 >>>  0 & 0xff;
  o[13] = x15 >>>  8 & 0xff;
  o[14] = x15 >>> 16 & 0xff;
  o[15] = x15 >>> 24 & 0xff;

  o[16] = x6 >>>  0 & 0xff;
  o[17] = x6 >>>  8 & 0xff;
  o[18] = x6 >>> 16 & 0xff;
  o[19] = x6 >>> 24 & 0xff;

  o[20] = x7 >>>  0 & 0xff;
  o[21] = x7 >>>  8 & 0xff;
  o[22] = x7 >>> 16 & 0xff;
  o[23] = x7 >>> 24 & 0xff;

  o[24] = x8 >>>  0 & 0xff;
  o[25] = x8 >>>  8 & 0xff;
  o[26] = x8 >>> 16 & 0xff;
  o[27] = x8 >>> 24 & 0xff;

  o[28] = x9 >>>  0 & 0xff;
  o[29] = x9 >>>  8 & 0xff;
  o[30] = x9 >>> 16 & 0xff;
  o[31] = x9 >>> 24 & 0xff;
}

function crypto_core_salsa20(out,inp,k,c) {
  core_salsa20(out,inp,k,c);
}

function crypto_core_hsalsa20(out,inp,k,c) {
  core_hsalsa20(out,inp,k,c);
}

var sigma = new Uint8Array([101, 120, 112, 97, 110, 100, 32, 51, 50, 45, 98, 121, 116, 101, 32, 107]);
            

function crypto_stream_salsa20_xor(c,cpos,m,mpos,b,n,k) {
  var z = new Uint8Array(16), x = new Uint8Array(64);
  var u, i;
  for (i = 0; i < 16; i++) z[i] = 0;
  for (i = 0; i < 8; i++) z[i] = n[i];
  while (b >= 64) {
    crypto_core_salsa20(x,z,k,sigma);
    for (i = 0; i < 64; i++) c[cpos+i] = m[mpos+i] ^ x[i];
    u = 1;
    for (i = 8; i < 16; i++) {
      u = u + (z[i] & 0xff) | 0;
      z[i] = u & 0xff;
      u >>>= 8;
    }
    b -= 64;
    cpos += 64;
    mpos += 64;
  }
  if (b > 0) {
    crypto_core_salsa20(x,z,k,sigma);
    for (i = 0; i < b; i++) c[cpos+i] = m[mpos+i] ^ x[i];
  }
  return 0;
}

function crypto_stream_salsa20(c,cpos,b,n,k) {
  var z = new Uint8Array(16), x = new Uint8Array(64);
  var u, i;
  for (i = 0; i < 16; i++) z[i] = 0;
  for (i = 0; i < 8; i++) z[i] = n[i];
  while (b >= 64) {
    crypto_core_salsa20(x,z,k,sigma);
    for (i = 0; i < 64; i++) c[cpos+i] = x[i];
    u = 1;
    for (i = 8; i < 16; i++) {
      u = u + (z[i] & 0xff) | 0;
      z[i] = u & 0xff;
      u >>>= 8;
    }
    b -= 64;
    cpos += 64;
  }
  if (b > 0) {
    crypto_core_salsa20(x,z,k,sigma);
    for (i = 0; i < b; i++) c[cpos+i] = x[i];
  }
  return 0;
}

function crypto_stream(c,cpos,d,n,k) {
  var s = new Uint8Array(32);
  crypto_core_hsalsa20(s,n,k,sigma);
  var sn = new Uint8Array(8);
  for (var i = 0; i < 8; i++) sn[i] = n[i+16];
  return crypto_stream_salsa20(c,cpos,d,sn,s);
}

function crypto_stream_xor(c,cpos,m,mpos,d,n,k) {
  var s = new Uint8Array(32);
  crypto_core_hsalsa20(s,n,k,sigma);
  var sn = new Uint8Array(8);
  for (var i = 0; i < 8; i++) sn[i] = n[i+16];
  return crypto_stream_salsa20_xor(c,cpos,m,mpos,d,sn,s);
}


var poly1305 = function(key) {
  this.buffer = new Uint8Array(16);
  this.r = new Uint16Array(10);
  this.h = new Uint16Array(10);
  this.pad = new Uint16Array(8);
  this.leftover = 0;
  this.fin = 0;

  var t0, t1, t2, t3, t4, t5, t6, t7;

  t0 = key[ 0] & 0xff | (key[ 1] & 0xff) << 8; this.r[0] = ( t0                     ) & 0x1fff;
  t1 = key[ 2] & 0xff | (key[ 3] & 0xff) << 8; this.r[1] = ((t0 >>> 13) | (t1 <<  3)) & 0x1fff;
  t2 = key[ 4] & 0xff | (key[ 5] & 0xff) << 8; this.r[2] = ((t1 >>> 10) | (t2 <<  6)) & 0x1f03;
  t3 = key[ 6] & 0xff | (key[ 7] & 0xff) << 8; this.r[3] = ((t2 >>>  7) | (t3 <<  9)) & 0x1fff;
  t4 = key[ 8] & 0xff | (key[ 9] & 0xff) << 8; this.r[4] = ((t3 >>>  4) | (t4 << 12)) & 0x00ff;
  this.r[5] = ((t4 >>>  1)) & 0x1ffe;
  t5 = key[10] & 0xff | (key[11] & 0xff) << 8; this.r[6] = ((t4 >>> 14) | (t5 <<  2)) & 0x1fff;
  t6 = key[12] & 0xff | (key[13] & 0xff) << 8; this.r[7] = ((t5 >>> 11) | (t6 <<  5)) & 0x1f81;
  t7 = key[14] & 0xff | (key[15] & 0xff) << 8; this.r[8] = ((t6 >>>  8) | (t7 <<  8)) & 0x1fff;
  this.r[9] = ((t7 >>>  5)) & 0x007f;

  this.pad[0] = key[16] & 0xff | (key[17] & 0xff) << 8;
  this.pad[1] = key[18] & 0xff | (key[19] & 0xff) << 8;
  this.pad[2] = key[20] & 0xff | (key[21] & 0xff) << 8;
  this.pad[3] = key[22] & 0xff | (key[23] & 0xff) << 8;
  this.pad[4] = key[24] & 0xff | (key[25] & 0xff) << 8;
  this.pad[5] = key[26] & 0xff | (key[27] & 0xff) << 8;
  this.pad[6] = key[28] & 0xff | (key[29] & 0xff) << 8;
  this.pad[7] = key[30] & 0xff | (key[31] & 0xff) << 8;
};

poly1305.prototype.blocks = function(m, mpos, bytes) {
  var hibit = this.fin ? 0 : (1 << 11);
  var t0, t1, t2, t3, t4, t5, t6, t7, c;
  var d0, d1, d2, d3, d4, d5, d6, d7, d8, d9;

  var h0 = this.h[0],
      h1 = this.h[1],
      h2 = this.h[2],
      h3 = this.h[3],
      h4 = this.h[4],
      h5 = this.h[5],
      h6 = this.h[6],
      h7 = this.h[7],
      h8 = this.h[8],
      h9 = this.h[9];

  var r0 = this.r[0],
      r1 = this.r[1],
      r2 = this.r[2],
      r3 = this.r[3],
      r4 = this.r[4],
      r5 = this.r[5],
      r6 = this.r[6],
      r7 = this.r[7],
      r8 = this.r[8],
      r9 = this.r[9];

  while (bytes >= 16) {
    t0 = m[mpos+ 0] & 0xff | (m[mpos+ 1] & 0xff) << 8; h0 += ( t0                     ) & 0x1fff;
    t1 = m[mpos+ 2] & 0xff | (m[mpos+ 3] & 0xff) << 8; h1 += ((t0 >>> 13) | (t1 <<  3)) & 0x1fff;
    t2 = m[mpos+ 4] & 0xff | (m[mpos+ 5] & 0xff) << 8; h2 += ((t1 >>> 10) | (t2 <<  6)) & 0x1fff;
    t3 = m[mpos+ 6] & 0xff | (m[mpos+ 7] & 0xff) << 8; h3 += ((t2 >>>  7) | (t3 <<  9)) & 0x1fff;
    t4 = m[mpos+ 8] & 0xff | (m[mpos+ 9] & 0xff) << 8; h4 += ((t3 >>>  4) | (t4 << 12)) & 0x1fff;
    h5 += ((t4 >>>  1)) & 0x1fff;
    t5 = m[mpos+10] & 0xff | (m[mpos+11] & 0xff) << 8; h6 += ((t4 >>> 14) | (t5 <<  2)) & 0x1fff;
    t6 = m[mpos+12] & 0xff | (m[mpos+13] & 0xff) << 8; h7 += ((t5 >>> 11) | (t6 <<  5)) & 0x1fff;
    t7 = m[mpos+14] & 0xff | (m[mpos+15] & 0xff) << 8; h8 += ((t6 >>>  8) | (t7 <<  8)) & 0x1fff;
    h9 += ((t7 >>> 5)) | hibit;

    c = 0;

    d0 = c;
    d0 += h0 * r0;
    d0 += h1 * (5 * r9);
    d0 += h2 * (5 * r8);
    d0 += h3 * (5 * r7);
    d0 += h4 * (5 * r6);
    c = (d0 >>> 13); d0 &= 0x1fff;
    d0 += h5 * (5 * r5);
    d0 += h6 * (5 * r4);
    d0 += h7 * (5 * r3);
    d0 += h8 * (5 * r2);
    d0 += h9 * (5 * r1);
    c += (d0 >>> 13); d0 &= 0x1fff;

    d1 = c;
    d1 += h0 * r1;
    d1 += h1 * r0;
    d1 += h2 * (5 * r9);
    d1 += h3 * (5 * r8);
    d1 += h4 * (5 * r7);
    c = (d1 >>> 13); d1 &= 0x1fff;
    d1 += h5 * (5 * r6);
    d1 += h6 * (5 * r5);
    d1 += h7 * (5 * r4);
    d1 += h8 * (5 * r3);
    d1 += h9 * (5 * r2);
    c += (d1 >>> 13); d1 &= 0x1fff;

    d2 = c;
    d2 += h0 * r2;
    d2 += h1 * r1;
    d2 += h2 * r0;
    d2 += h3 * (5 * r9);
    d2 += h4 * (5 * r8);
    c = (d2 >>> 13); d2 &= 0x1fff;
    d2 += h5 * (5 * r7);
    d2 += h6 * (5 * r6);
    d2 += h7 * (5 * r5);
    d2 += h8 * (5 * r4);
    d2 += h9 * (5 * r3);
    c += (d2 >>> 13); d2 &= 0x1fff;

    d3 = c;
    d3 += h0 * r3;
    d3 += h1 * r2;
    d3 += h2 * r1;
    d3 += h3 * r0;
    d3 += h4 * (5 * r9);
    c = (d3 >>> 13); d3 &= 0x1fff;
    d3 += h5 * (5 * r8);
    d3 += h6 * (5 * r7);
    d3 += h7 * (5 * r6);
    d3 += h8 * (5 * r5);
    d3 += h9 * (5 * r4);
    c += (d3 >>> 13); d3 &= 0x1fff;

    d4 = c;
    d4 += h0 * r4;
    d4 += h1 * r3;
    d4 += h2 * r2;
    d4 += h3 * r1;
    d4 += h4 * r0;
    c = (d4 >>> 13); d4 &= 0x1fff;
    d4 += h5 * (5 * r9);
    d4 += h6 * (5 * r8);
    d4 += h7 * (5 * r7);
    d4 += h8 * (5 * r6);
    d4 += h9 * (5 * r5);
    c += (d4 >>> 13); d4 &= 0x1fff;

    d5 = c;
    d5 += h0 * r5;
    d5 += h1 * r4;
    d5 += h2 * r3;
    d5 += h3 * r2;
    d5 += h4 * r1;
    c = (d5 >>> 13); d5 &= 0x1fff;
    d5 += h5 * r0;
    d5 += h6 * (5 * r9);
    d5 += h7 * (5 * r8);
    d5 += h8 * (5 * r7);
    d5 += h9 * (5 * r6);
    c += (d5 >>> 13); d5 &= 0x1fff;

    d6 = c;
    d6 += h0 * r6;
    d6 += h1 * r5;
    d6 += h2 * r4;
    d6 += h3 * r3;
    d6 += h4 * r2;
    c = (d6 >>> 13); d6 &= 0x1fff;
    d6 += h5 * r1;
    d6 += h6 * r0;
    d6 += h7 * (5 * r9);
    d6 += h8 * (5 * r8);
    d6 += h9 * (5 * r7);
    c += (d6 >>> 13); d6 &= 0x1fff;

    d7 = c;
    d7 += h0 * r7;
    d7 += h1 * r6;
    d7 += h2 * r5;
    d7 += h3 * r4;
    d7 += h4 * r3;
    c = (d7 >>> 13); d7 &= 0x1fff;
    d7 += h5 * r2;
    d7 += h6 * r1;
    d7 += h7 * r0;
    d7 += h8 * (5 * r9);
    d7 += h9 * (5 * r8);
    c += (d7 >>> 13); d7 &= 0x1fff;

    d8 = c;
    d8 += h0 * r8;
    d8 += h1 * r7;
    d8 += h2 * r6;
    d8 += h3 * r5;
    d8 += h4 * r4;
    c = (d8 >>> 13); d8 &= 0x1fff;
    d8 += h5 * r3;
    d8 += h6 * r2;
    d8 += h7 * r1;
    d8 += h8 * r0;
    d8 += h9 * (5 * r9);
    c += (d8 >>> 13); d8 &= 0x1fff;

    d9 = c;
    d9 += h0 * r9;
    d9 += h1 * r8;
    d9 += h2 * r7;
    d9 += h3 * r6;
    d9 += h4 * r5;
    c = (d9 >>> 13); d9 &= 0x1fff;
    d9 += h5 * r4;
    d9 += h6 * r3;
    d9 += h7 * r2;
    d9 += h8 * r1;
    d9 += h9 * r0;
    c += (d9 >>> 13); d9 &= 0x1fff;

    c = (((c << 2) + c)) | 0;
    c = (c + d0) | 0;
    d0 = c & 0x1fff;
    c = (c >>> 13);
    d1 += c;

    h0 = d0;
    h1 = d1;
    h2 = d2;
    h3 = d3;
    h4 = d4;
    h5 = d5;
    h6 = d6;
    h7 = d7;
    h8 = d8;
    h9 = d9;

    mpos += 16;
    bytes -= 16;
  }
  this.h[0] = h0;
  this.h[1] = h1;
  this.h[2] = h2;
  this.h[3] = h3;
  this.h[4] = h4;
  this.h[5] = h5;
  this.h[6] = h6;
  this.h[7] = h7;
  this.h[8] = h8;
  this.h[9] = h9;
};

poly1305.prototype.finish = function(mac, macpos) {
  var g = new Uint16Array(10);
  var c, mask, f, i;

  if (this.leftover) {
    i = this.leftover;
    this.buffer[i++] = 1;
    for (; i < 16; i++) this.buffer[i] = 0;
    this.fin = 1;
    this.blocks(this.buffer, 0, 16);
  }

  c = this.h[1] >>> 13;
  this.h[1] &= 0x1fff;
  for (i = 2; i < 10; i++) {
    this.h[i] += c;
    c = this.h[i] >>> 13;
    this.h[i] &= 0x1fff;
  }
  this.h[0] += (c * 5);
  c = this.h[0] >>> 13;
  this.h[0] &= 0x1fff;
  this.h[1] += c;
  c = this.h[1] >>> 13;
  this.h[1] &= 0x1fff;
  this.h[2] += c;

  g[0] = this.h[0] + 5;
  c = g[0] >>> 13;
  g[0] &= 0x1fff;
  for (i = 1; i < 10; i++) {
    g[i] = this.h[i] + c;
    c = g[i] >>> 13;
    g[i] &= 0x1fff;
  }
  g[9] -= (1 << 13);

  mask = (c ^ 1) - 1;
  for (i = 0; i < 10; i++) g[i] &= mask;
  mask = ~mask;
  for (i = 0; i < 10; i++) this.h[i] = (this.h[i] & mask) | g[i];

  this.h[0] = ((this.h[0]       ) | (this.h[1] << 13)                    ) & 0xffff;
  this.h[1] = ((this.h[1] >>>  3) | (this.h[2] << 10)                    ) & 0xffff;
  this.h[2] = ((this.h[2] >>>  6) | (this.h[3] <<  7)                    ) & 0xffff;
  this.h[3] = ((this.h[3] >>>  9) | (this.h[4] <<  4)                    ) & 0xffff;
  this.h[4] = ((this.h[4] >>> 12) | (this.h[5] <<  1) | (this.h[6] << 14)) & 0xffff;
  this.h[5] = ((this.h[6] >>>  2) | (this.h[7] << 11)                    ) & 0xffff;
  this.h[6] = ((this.h[7] >>>  5) | (this.h[8] <<  8)                    ) & 0xffff;
  this.h[7] = ((this.h[8] >>>  8) | (this.h[9] <<  5)                    ) & 0xffff;

  f = this.h[0] + this.pad[0];
  this.h[0] = f & 0xffff;
  for (i = 1; i < 8; i++) {
    f = (((this.h[i] + this.pad[i]) | 0) + (f >>> 16)) | 0;
    this.h[i] = f & 0xffff;
  }

  mac[macpos+ 0] = (this.h[0] >>> 0) & 0xff;
  mac[macpos+ 1] = (this.h[0] >>> 8) & 0xff;
  mac[macpos+ 2] = (this.h[1] >>> 0) & 0xff;
  mac[macpos+ 3] = (this.h[1] >>> 8) & 0xff;
  mac[macpos+ 4] = (this.h[2] >>> 0) & 0xff;
  mac[macpos+ 5] = (this.h[2] >>> 8) & 0xff;
  mac[macpos+ 6] = (this.h[3] >>> 0) & 0xff;
  mac[macpos+ 7] = (this.h[3] >>> 8) & 0xff;
  mac[macpos+ 8] = (this.h[4] >>> 0) & 0xff;
  mac[macpos+ 9] = (this.h[4] >>> 8) & 0xff;
  mac[macpos+10] = (this.h[5] >>> 0) & 0xff;
  mac[macpos+11] = (this.h[5] >>> 8) & 0xff;
  mac[macpos+12] = (this.h[6] >>> 0) & 0xff;
  mac[macpos+13] = (this.h[6] >>> 8) & 0xff;
  mac[macpos+14] = (this.h[7] >>> 0) & 0xff;
  mac[macpos+15] = (this.h[7] >>> 8) & 0xff;
};

poly1305.prototype.update = function(m, mpos, bytes) {
  var i, want;

  if (this.leftover) {
    want = (16 - this.leftover);
    if (want > bytes)
      want = bytes;
    for (i = 0; i < want; i++)
      this.buffer[this.leftover + i] = m[mpos+i];
    bytes -= want;
    mpos += want;
    this.leftover += want;
    if (this.leftover < 16)
      return;
    this.blocks(this.buffer, 0, 16);
    this.leftover = 0;
  }

  if (bytes >= 16) {
    want = bytes - (bytes % 16);
    this.blocks(m, mpos, want);
    mpos += want;
    bytes -= want;
  }

  if (bytes) {
    for (i = 0; i < bytes; i++)
      this.buffer[this.leftover + i] = m[mpos+i];
    this.leftover += bytes;
  }
};

function crypto_onetimeauth(out, outpos, m, mpos, n, k) {
  var s = new poly1305(k);
  s.update(m, mpos, n);
  s.finish(out, outpos);
  return 0;
}

function crypto_onetimeauth_verify(h, hpos, m, mpos, n, k) {
  var x = new Uint8Array(16);
  crypto_onetimeauth(x,0,m,mpos,n,k);
  return crypto_verify_16(h,hpos,x,0);
}

function crypto_secretbox(c,m,d,n,k) {
  var i;
  if (d < 32) return -1;
  crypto_stream_xor(c,0,m,0,d,n,k);
  crypto_onetimeauth(c, 16, c, 32, d - 32, c);
  for (i = 0; i < 16; i++) c[i] = 0;
  return 0;
}

function crypto_secretbox_open(m,c,d,n,k) {
  var i;
  var x = new Uint8Array(32);
  if (d < 32) return -1;
  crypto_stream(x,0,32,n,k);
  if (crypto_onetimeauth_verify(c, 16,c, 32,d - 32,x) !== 0) return -1;
  crypto_stream_xor(m,0,c,0,d,n,k);
  for (i = 0; i < 32; i++) m[i] = 0;
  return 0;
}

function set25519(r, a) {
  var i;
  for (i = 0; i < 16; i++) r[i] = a[i]|0;
}

function car25519(o) {
  var i, v, c = 1;
  for (i = 0; i < 16; i++) {
    v = o[i] + c + 65535;
    c = Math.floor(v / 65536);
    o[i] = v - c * 65536;
  }
  o[0] += c-1 + 37 * (c-1);
}

function sel25519(p, q, b) {
  var t, c = ~(b-1);
  for (var i = 0; i < 16; i++) {
    t = c & (p[i] ^ q[i]);
    p[i] ^= t;
    q[i] ^= t;
  }
}

function pack25519(o, n) {
  var i, j, b;
  var m = gf(), t = gf();
  for (i = 0; i < 16; i++) t[i] = n[i];
  car25519(t);
  car25519(t);
  car25519(t);
  for (j = 0; j < 2; j++) {
    m[0] = t[0] - 0xffed;
    for (i = 1; i < 15; i++) {
      m[i] = t[i] - 0xffff - ((m[i-1]>>16) & 1);
      m[i-1] &= 0xffff;
    }
    m[15] = t[15] - 0x7fff - ((m[14]>>16) & 1);
    b = (m[15]>>16) & 1;
    m[14] &= 0xffff;
    sel25519(t, m, 1-b);
  }
  for (i = 0; i < 16; i++) {
    o[2*i] = t[i] & 0xff;
    o[2*i+1] = t[i]>>8;
  }
}

function neq25519(a, b) {
  var c = new Uint8Array(32), d = new Uint8Array(32);
  pack25519(c, a);
  pack25519(d, b);
  return crypto_verify_32(c, 0, d, 0);
}

function par25519(a) {
  var d = new Uint8Array(32);
  pack25519(d, a);
  return d[0] & 1;
}

function unpack25519(o, n) {
  var i;
  for (i = 0; i < 16; i++) o[i] = n[2*i] + (n[2*i+1] << 8);
  o[15] &= 0x7fff;
}

function A(o, a, b) {
  for (var i = 0; i < 16; i++) o[i] = a[i] + b[i];
}

function Z(o, a, b) {
  for (var i = 0; i < 16; i++) o[i] = a[i] - b[i];
}

function M(o, a, b) {
  var v, c,
     t0 = 0,  t1 = 0,  t2 = 0,  t3 = 0,  t4 = 0,  t5 = 0,  t6 = 0,  t7 = 0,
     t8 = 0,  t9 = 0, t10 = 0, t11 = 0, t12 = 0, t13 = 0, t14 = 0, t15 = 0,
    t16 = 0, t17 = 0, t18 = 0, t19 = 0, t20 = 0, t21 = 0, t22 = 0, t23 = 0,
    t24 = 0, t25 = 0, t26 = 0, t27 = 0, t28 = 0, t29 = 0, t30 = 0,
    b0 = b[0],
    b1 = b[1],
    b2 = b[2],
    b3 = b[3],
    b4 = b[4],
    b5 = b[5],
    b6 = b[6],
    b7 = b[7],
    b8 = b[8],
    b9 = b[9],
    b10 = b[10],
    b11 = b[11],
    b12 = b[12],
    b13 = b[13],
    b14 = b[14],
    b15 = b[15];

  v = a[0];
  t0 += v * b0;
  t1 += v * b1;
  t2 += v * b2;
  t3 += v * b3;
  t4 += v * b4;
  t5 += v * b5;
  t6 += v * b6;
  t7 += v * b7;
  t8 += v * b8;
  t9 += v * b9;
  t10 += v * b10;
  t11 += v * b11;
  t12 += v * b12;
  t13 += v * b13;
  t14 += v * b14;
  t15 += v * b15;
  v = a[1];
  t1 += v * b0;
  t2 += v * b1;
  t3 += v * b2;
  t4 += v * b3;
  t5 += v * b4;
  t6 += v * b5;
  t7 += v * b6;
  t8 += v * b7;
  t9 += v * b8;
  t10 += v * b9;
  t11 += v * b10;
  t12 += v * b11;
  t13 += v * b12;
  t14 += v * b13;
  t15 += v * b14;
  t16 += v * b15;
  v = a[2];
  t2 += v * b0;
  t3 += v * b1;
  t4 += v * b2;
  t5 += v * b3;
  t6 += v * b4;
  t7 += v * b5;
  t8 += v * b6;
  t9 += v * b7;
  t10 += v * b8;
  t11 += v * b9;
  t12 += v * b10;
  t13 += v * b11;
  t14 += v * b12;
  t15 += v * b13;
  t16 += v * b14;
  t17 += v * b15;
  v = a[3];
  t3 += v * b0;
  t4 += v * b1;
  t5 += v * b2;
  t6 += v * b3;
  t7 += v * b4;
  t8 += v * b5;
  t9 += v * b6;
  t10 += v * b7;
  t11 += v * b8;
  t12 += v * b9;
  t13 += v * b10;
  t14 += v * b11;
  t15 += v * b12;
  t16 += v * b13;
  t17 += v * b14;
  t18 += v * b15;
  v = a[4];
  t4 += v * b0;
  t5 += v * b1;
  t6 += v * b2;
  t7 += v * b3;
  t8 += v * b4;
  t9 += v * b5;
  t10 += v * b6;
  t11 += v * b7;
  t12 += v * b8;
  t13 += v * b9;
  t14 += v * b10;
  t15 += v * b11;
  t16 += v * b12;
  t17 += v * b13;
  t18 += v * b14;
  t19 += v * b15;
  v = a[5];
  t5 += v * b0;
  t6 += v * b1;
  t7 += v * b2;
  t8 += v * b3;
  t9 += v * b4;
  t10 += v * b5;
  t11 += v * b6;
  t12 += v * b7;
  t13 += v * b8;
  t14 += v * b9;
  t15 += v * b10;
  t16 += v * b11;
  t17 += v * b12;
  t18 += v * b13;
  t19 += v * b14;
  t20 += v * b15;
  v = a[6];
  t6 += v * b0;
  t7 += v * b1;
  t8 += v * b2;
  t9 += v * b3;
  t10 += v * b4;
  t11 += v * b5;
  t12 += v * b6;
  t13 += v * b7;
  t14 += v * b8;
  t15 += v * b9;
  t16 += v * b10;
  t17 += v * b11;
  t18 += v * b12;
  t19 += v * b13;
  t20 += v * b14;
  t21 += v * b15;
  v = a[7];
  t7 += v * b0;
  t8 += v * b1;
  t9 += v * b2;
  t10 += v * b3;
  t11 += v * b4;
  t12 += v * b5;
  t13 += v * b6;
  t14 += v * b7;
  t15 += v * b8;
  t16 += v * b9;
  t17 += v * b10;
  t18 += v * b11;
  t19 += v * b12;
  t20 += v * b13;
  t21 += v * b14;
  t22 += v * b15;
  v = a[8];
  t8 += v * b0;
  t9 += v * b1;
  t10 += v * b2;
  t11 += v * b3;
  t12 += v * b4;
  t13 += v * b5;
  t14 += v * b6;
  t15 += v * b7;
  t16 += v * b8;
  t17 += v * b9;
  t18 += v * b10;
  t19 += v * b11;
  t20 += v * b12;
  t21 += v * b13;
  t22 += v * b14;
  t23 += v * b15;
  v = a[9];
  t9 += v * b0;
  t10 += v * b1;
  t11 += v * b2;
  t12 += v * b3;
  t13 += v * b4;
  t14 += v * b5;
  t15 += v * b6;
  t16 += v * b7;
  t17 += v * b8;
  t18 += v * b9;
  t19 += v * b10;
  t20 += v * b11;
  t21 += v * b12;
  t22 += v * b13;
  t23 += v * b14;
  t24 += v * b15;
  v = a[10];
  t10 += v * b0;
  t11 += v * b1;
  t12 += v * b2;
  t13 += v * b3;
  t14 += v * b4;
  t15 += v * b5;
  t16 += v * b6;
  t17 += v * b7;
  t18 += v * b8;
  t19 += v * b9;
  t20 += v * b10;
  t21 += v * b11;
  t22 += v * b12;
  t23 += v * b13;
  t24 += v * b14;
  t25 += v * b15;
  v = a[11];
  t11 += v * b0;
  t12 += v * b1;
  t13 += v * b2;
  t14 += v * b3;
  t15 += v * b4;
  t16 += v * b5;
  t17 += v * b6;
  t18 += v * b7;
  t19 += v * b8;
  t20 += v * b9;
  t21 += v * b10;
  t22 += v * b11;
  t23 += v * b12;
  t24 += v * b13;
  t25 += v * b14;
  t26 += v * b15;
  v = a[12];
  t12 += v * b0;
  t13 += v * b1;
  t14 += v * b2;
  t15 += v * b3;
  t16 += v * b4;
  t17 += v * b5;
  t18 += v * b6;
  t19 += v * b7;
  t20 += v * b8;
  t21 += v * b9;
  t22 += v * b10;
  t23 += v * b11;
  t24 += v * b12;
  t25 += v * b13;
  t26 += v * b14;
  t27 += v * b15;
  v = a[13];
  t13 += v * b0;
  t14 += v * b1;
  t15 += v * b2;
  t16 += v * b3;
  t17 += v * b4;
  t18 += v * b5;
  t19 += v * b6;
  t20 += v * b7;
  t21 += v * b8;
  t22 += v * b9;
  t23 += v * b10;
  t24 += v * b11;
  t25 += v * b12;
  t26 += v * b13;
  t27 += v * b14;
  t28 += v * b15;
  v = a[14];
  t14 += v * b0;
  t15 += v * b1;
  t16 += v * b2;
  t17 += v * b3;
  t18 += v * b4;
  t19 += v * b5;
  t20 += v * b6;
  t21 += v * b7;
  t22 += v * b8;
  t23 += v * b9;
  t24 += v * b10;
  t25 += v * b11;
  t26 += v * b12;
  t27 += v * b13;
  t28 += v * b14;
  t29 += v * b15;
  v = a[15];
  t15 += v * b0;
  t16 += v * b1;
  t17 += v * b2;
  t18 += v * b3;
  t19 += v * b4;
  t20 += v * b5;
  t21 += v * b6;
  t22 += v * b7;
  t23 += v * b8;
  t24 += v * b9;
  t25 += v * b10;
  t26 += v * b11;
  t27 += v * b12;
  t28 += v * b13;
  t29 += v * b14;
  t30 += v * b15;

  t0  += 38 * t16;
  t1  += 38 * t17;
  t2  += 38 * t18;
  t3  += 38 * t19;
  t4  += 38 * t20;
  t5  += 38 * t21;
  t6  += 38 * t22;
  t7  += 38 * t23;
  t8  += 38 * t24;
  t9  += 38 * t25;
  t10 += 38 * t26;
  t11 += 38 * t27;
  t12 += 38 * t28;
  t13 += 38 * t29;
  t14 += 38 * t30;
  

  
  c = 1;
  v =  t0 + c + 65535; c = Math.floor(v / 65536);  t0 = v - c * 65536;
  v =  t1 + c + 65535; c = Math.floor(v / 65536);  t1 = v - c * 65536;
  v =  t2 + c + 65535; c = Math.floor(v / 65536);  t2 = v - c * 65536;
  v =  t3 + c + 65535; c = Math.floor(v / 65536);  t3 = v - c * 65536;
  v =  t4 + c + 65535; c = Math.floor(v / 65536);  t4 = v - c * 65536;
  v =  t5 + c + 65535; c = Math.floor(v / 65536);  t5 = v - c * 65536;
  v =  t6 + c + 65535; c = Math.floor(v / 65536);  t6 = v - c * 65536;
  v =  t7 + c + 65535; c = Math.floor(v / 65536);  t7 = v - c * 65536;
  v =  t8 + c + 65535; c = Math.floor(v / 65536);  t8 = v - c * 65536;
  v =  t9 + c + 65535; c = Math.floor(v / 65536);  t9 = v - c * 65536;
  v = t10 + c + 65535; c = Math.floor(v / 65536); t10 = v - c * 65536;
  v = t11 + c + 65535; c = Math.floor(v / 65536); t11 = v - c * 65536;
  v = t12 + c + 65535; c = Math.floor(v / 65536); t12 = v - c * 65536;
  v = t13 + c + 65535; c = Math.floor(v / 65536); t13 = v - c * 65536;
  v = t14 + c + 65535; c = Math.floor(v / 65536); t14 = v - c * 65536;
  v = t15 + c + 65535; c = Math.floor(v / 65536); t15 = v - c * 65536;
  t0 += c-1 + 37 * (c-1);

  
  c = 1;
  v =  t0 + c + 65535; c = Math.floor(v / 65536);  t0 = v - c * 65536;
  v =  t1 + c + 65535; c = Math.floor(v / 65536);  t1 = v - c * 65536;
  v =  t2 + c + 65535; c = Math.floor(v / 65536);  t2 = v - c * 65536;
  v =  t3 + c + 65535; c = Math.floor(v / 65536);  t3 = v - c * 65536;
  v =  t4 + c + 65535; c = Math.floor(v / 65536);  t4 = v - c * 65536;
  v =  t5 + c + 65535; c = Math.floor(v / 65536);  t5 = v - c * 65536;
  v =  t6 + c + 65535; c = Math.floor(v / 65536);  t6 = v - c * 65536;
  v =  t7 + c + 65535; c = Math.floor(v / 65536);  t7 = v - c * 65536;
  v =  t8 + c + 65535; c = Math.floor(v / 65536);  t8 = v - c * 65536;
  v =  t9 + c + 65535; c = Math.floor(v / 65536);  t9 = v - c * 65536;
  v = t10 + c + 65535; c = Math.floor(v / 65536); t10 = v - c * 65536;
  v = t11 + c + 65535; c = Math.floor(v / 65536); t11 = v - c * 65536;
  v = t12 + c + 65535; c = Math.floor(v / 65536); t12 = v - c * 65536;
  v = t13 + c + 65535; c = Math.floor(v / 65536); t13 = v - c * 65536;
  v = t14 + c + 65535; c = Math.floor(v / 65536); t14 = v - c * 65536;
  v = t15 + c + 65535; c = Math.floor(v / 65536); t15 = v - c * 65536;
  t0 += c-1 + 37 * (c-1);

  o[ 0] = t0;
  o[ 1] = t1;
  o[ 2] = t2;
  o[ 3] = t3;
  o[ 4] = t4;
  o[ 5] = t5;
  o[ 6] = t6;
  o[ 7] = t7;
  o[ 8] = t8;
  o[ 9] = t9;
  o[10] = t10;
  o[11] = t11;
  o[12] = t12;
  o[13] = t13;
  o[14] = t14;
  o[15] = t15;
}

function S(o, a) {
  M(o, a, a);
}

function inv25519(o, i) {
  var c = gf();
  var a;
  for (a = 0; a < 16; a++) c[a] = i[a];
  for (a = 253; a >= 0; a--) {
    S(c, c);
    if(a !== 2 && a !== 4) M(c, c, i);
  }
  for (a = 0; a < 16; a++) o[a] = c[a];
}

function pow2523(o, i) {
  var c = gf();
  var a;
  for (a = 0; a < 16; a++) c[a] = i[a];
  for (a = 250; a >= 0; a--) {
      S(c, c);
      if(a !== 1) M(c, c, i);
  }
  for (a = 0; a < 16; a++) o[a] = c[a];
}

function crypto_scalarmult(q, n, p) {
  var z = new Uint8Array(32);
  var x = new Float64Array(80), r, i;
  var a = gf(), b = gf(), c = gf(),
      d = gf(), e = gf(), f = gf();
  for (i = 0; i < 31; i++) z[i] = n[i];
  z[31]=(n[31]&127)|64;
  z[0]&=248;
  unpack25519(x,p);
  for (i = 0; i < 16; i++) {
    b[i]=x[i];
    d[i]=a[i]=c[i]=0;
  }
  a[0]=d[0]=1;
  for (i=254; i>=0; --i) {
    r=(z[i>>>3]>>>(i&7))&1;
    sel25519(a,b,r);
    sel25519(c,d,r);
    A(e,a,c);
    Z(a,a,c);
    A(c,b,d);
    Z(b,b,d);
    S(d,e);
    S(f,a);
    M(a,c,a);
    M(c,b,e);
    A(e,a,c);
    Z(a,a,c);
    S(b,a);
    Z(c,d,f);
    M(a,c,_121665);
    A(a,a,d);
    M(c,c,a);
    M(a,d,f);
    M(d,b,x);
    S(b,e);
    sel25519(a,b,r);
    sel25519(c,d,r);
  }
  for (i = 0; i < 16; i++) {
    x[i+16]=a[i];
    x[i+32]=c[i];
    x[i+48]=b[i];
    x[i+64]=d[i];
  }
  var x32 = x.subarray(32);
  var x16 = x.subarray(16);
  inv25519(x32,x32);
  M(x16,x16,x32);
  pack25519(q,x16);
  return 0;
}

function crypto_scalarmult_base(q, n) {
  return crypto_scalarmult(q, n, _9);
}

function crypto_box_keypair(y, x) {
  randombytes(x, 32);
  return crypto_scalarmult_base(y, x);
}

function crypto_box_beforenm(k, y, x) {
  var s = new Uint8Array(32);
  crypto_scalarmult(s, x, y);
  return crypto_core_hsalsa20(k, _0, s, sigma);
}

var crypto_box_afternm = crypto_secretbox;
var crypto_box_open_afternm = crypto_secretbox_open;

function crypto_box(c, m, d, n, y, x) {
  var k = new Uint8Array(32);
  crypto_box_beforenm(k, y, x);
  return crypto_box_afternm(c, m, d, n, k);
}

function crypto_box_open(m, c, d, n, y, x) {
  var k = new Uint8Array(32);
  crypto_box_beforenm(k, y, x);
  return crypto_box_open_afternm(m, c, d, n, k);
}

var K = [
  0x428a2f98, 0xd728ae22, 0x71374491, 0x23ef65cd,
  0xb5c0fbcf, 0xec4d3b2f, 0xe9b5dba5, 0x8189dbbc,
  0x3956c25b, 0xf348b538, 0x59f111f1, 0xb605d019,
  0x923f82a4, 0xaf194f9b, 0xab1c5ed5, 0xda6d8118,
  0xd807aa98, 0xa3030242, 0x12835b01, 0x45706fbe,
  0x243185be, 0x4ee4b28c, 0x550c7dc3, 0xd5ffb4e2,
  0x72be5d74, 0xf27b896f, 0x80deb1fe, 0x3b1696b1,
  0x9bdc06a7, 0x25c71235, 0xc19bf174, 0xcf692694,
  0xe49b69c1, 0x9ef14ad2, 0xefbe4786, 0x384f25e3,
  0x0fc19dc6, 0x8b8cd5b5, 0x240ca1cc, 0x77ac9c65,
  0x2de92c6f, 0x592b0275, 0x4a7484aa, 0x6ea6e483,
  0x5cb0a9dc, 0xbd41fbd4, 0x76f988da, 0x831153b5,
  0x983e5152, 0xee66dfab, 0xa831c66d, 0x2db43210,
  0xb00327c8, 0x98fb213f, 0xbf597fc7, 0xbeef0ee4,
  0xc6e00bf3, 0x3da88fc2, 0xd5a79147, 0x930aa725,
  0x06ca6351, 0xe003826f, 0x14292967, 0x0a0e6e70,
  0x27b70a85, 0x46d22ffc, 0x2e1b2138, 0x5c26c926,
  0x4d2c6dfc, 0x5ac42aed, 0x53380d13, 0x9d95b3df,
  0x650a7354, 0x8baf63de, 0x766a0abb, 0x3c77b2a8,
  0x81c2c92e, 0x47edaee6, 0x92722c85, 0x1482353b,
  0xa2bfe8a1, 0x4cf10364, 0xa81a664b, 0xbc423001,
  0xc24b8b70, 0xd0f89791, 0xc76c51a3, 0x0654be30,
  0xd192e819, 0xd6ef5218, 0xd6990624, 0x5565a910,
  0xf40e3585, 0x5771202a, 0x106aa070, 0x32bbd1b8,
  0x19a4c116, 0xb8d2d0c8, 0x1e376c08, 0x5141ab53,
  0x2748774c, 0xdf8eeb99, 0x34b0bcb5, 0xe19b48a8,
  0x391c0cb3, 0xc5c95a63, 0x4ed8aa4a, 0xe3418acb,
  0x5b9cca4f, 0x7763e373, 0x682e6ff3, 0xd6b2b8a3,
  0x748f82ee, 0x5defb2fc, 0x78a5636f, 0x43172f60,
  0x84c87814, 0xa1f0ab72, 0x8cc70208, 0x1a6439ec,
  0x90befffa, 0x23631e28, 0xa4506ceb, 0xde82bde9,
  0xbef9a3f7, 0xb2c67915, 0xc67178f2, 0xe372532b,
  0xca273ece, 0xea26619c, 0xd186b8c7, 0x21c0c207,
  0xeada7dd6, 0xcde0eb1e, 0xf57d4f7f, 0xee6ed178,
  0x06f067aa, 0x72176fba, 0x0a637dc5, 0xa2c898a6,
  0x113f9804, 0xbef90dae, 0x1b710b35, 0x131c471b,
  0x28db77f5, 0x23047d84, 0x32caab7b, 0x40c72493,
  0x3c9ebe0a, 0x15c9bebc, 0x431d67c4, 0x9c100d4c,
  0x4cc5d4be, 0xcb3e42b6, 0x597f299c, 0xfc657e2a,
  0x5fcb6fab, 0x3ad6faec, 0x6c44198c, 0x4a475817
];

function crypto_hashblocks_hl(hh, hl, m, n) {
  var wh = new Int32Array(16), wl = new Int32Array(16),
      bh0, bh1, bh2, bh3, bh4, bh5, bh6, bh7,
      bl0, bl1, bl2, bl3, bl4, bl5, bl6, bl7,
      th, tl, i, j, h, l, a, b, c, d;

  var ah0 = hh[0],
      ah1 = hh[1],
      ah2 = hh[2],
      ah3 = hh[3],
      ah4 = hh[4],
      ah5 = hh[5],
      ah6 = hh[6],
      ah7 = hh[7],

      al0 = hl[0],
      al1 = hl[1],
      al2 = hl[2],
      al3 = hl[3],
      al4 = hl[4],
      al5 = hl[5],
      al6 = hl[6],
      al7 = hl[7];

  var pos = 0;
  while (n >= 128) {
    for (i = 0; i < 16; i++) {
      j = 8 * i + pos;
      wh[i] = (m[j+0] << 24) | (m[j+1] << 16) | (m[j+2] << 8) | m[j+3];
      wl[i] = (m[j+4] << 24) | (m[j+5] << 16) | (m[j+6] << 8) | m[j+7];
    }
    for (i = 0; i < 80; i++) {
      bh0 = ah0;
      bh1 = ah1;
      bh2 = ah2;
      bh3 = ah3;
      bh4 = ah4;
      bh5 = ah5;
      bh6 = ah6;
      bh7 = ah7;

      bl0 = al0;
      bl1 = al1;
      bl2 = al2;
      bl3 = al3;
      bl4 = al4;
      bl5 = al5;
      bl6 = al6;
      bl7 = al7;

      
      h = ah7;
      l = al7;

      a = l & 0xffff; b = l >>> 16;
      c = h & 0xffff; d = h >>> 16;

      
      h = ((ah4 >>> 14) | (al4 << (32-14))) ^ ((ah4 >>> 18) | (al4 << (32-18))) ^ ((al4 >>> (41-32)) | (ah4 << (32-(41-32))));
      l = ((al4 >>> 14) | (ah4 << (32-14))) ^ ((al4 >>> 18) | (ah4 << (32-18))) ^ ((ah4 >>> (41-32)) | (al4 << (32-(41-32))));

      a += l & 0xffff; b += l >>> 16;
      c += h & 0xffff; d += h >>> 16;

      
      h = (ah4 & ah5) ^ (~ah4 & ah6);
      l = (al4 & al5) ^ (~al4 & al6);

      a += l & 0xffff; b += l >>> 16;
      c += h & 0xffff; d += h >>> 16;

      
      h = K[i*2];
      l = K[i*2+1];

      a += l & 0xffff; b += l >>> 16;
      c += h & 0xffff; d += h >>> 16;

      
      h = wh[i%16];
      l = wl[i%16];

      a += l & 0xffff; b += l >>> 16;
      c += h & 0xffff; d += h >>> 16;

      b += a >>> 16;
      c += b >>> 16;
      d += c >>> 16;

      th = c & 0xffff | d << 16;
      tl = a & 0xffff | b << 16;

      
      h = th;
      l = tl;

      a = l & 0xffff; b = l >>> 16;
      c = h & 0xffff; d = h >>> 16;

      
      h = ((ah0 >>> 28) | (al0 << (32-28))) ^ ((al0 >>> (34-32)) | (ah0 << (32-(34-32)))) ^ ((al0 >>> (39-32)) | (ah0 << (32-(39-32))));
      l = ((al0 >>> 28) | (ah0 << (32-28))) ^ ((ah0 >>> (34-32)) | (al0 << (32-(34-32)))) ^ ((ah0 >>> (39-32)) | (al0 << (32-(39-32))));

      a += l & 0xffff; b += l >>> 16;
      c += h & 0xffff; d += h >>> 16;

      
      h = (ah0 & ah1) ^ (ah0 & ah2) ^ (ah1 & ah2);
      l = (al0 & al1) ^ (al0 & al2) ^ (al1 & al2);

      a += l & 0xffff; b += l >>> 16;
      c += h & 0xffff; d += h >>> 16;

      b += a >>> 16;
      c += b >>> 16;
      d += c >>> 16;

      bh7 = (c & 0xffff) | (d << 16);
      bl7 = (a & 0xffff) | (b << 16);

      
      h = bh3;
      l = bl3;

      a = l & 0xffff; b = l >>> 16;
      c = h & 0xffff; d = h >>> 16;

      h = th;
      l = tl;

      a += l & 0xffff; b += l >>> 16;
      c += h & 0xffff; d += h >>> 16;

      b += a >>> 16;
      c += b >>> 16;
      d += c >>> 16;

      bh3 = (c & 0xffff) | (d << 16);
      bl3 = (a & 0xffff) | (b << 16);

      ah1 = bh0;
      ah2 = bh1;
      ah3 = bh2;
      ah4 = bh3;
      ah5 = bh4;
      ah6 = bh5;
      ah7 = bh6;
      ah0 = bh7;

      al1 = bl0;
      al2 = bl1;
      al3 = bl2;
      al4 = bl3;
      al5 = bl4;
      al6 = bl5;
      al7 = bl6;
      al0 = bl7;

      if (i%16 === 15) {
        for (j = 0; j < 16; j++) {
          
          h = wh[j];
          l = wl[j];

          a = l & 0xffff; b = l >>> 16;
          c = h & 0xffff; d = h >>> 16;

          h = wh[(j+9)%16];
          l = wl[(j+9)%16];

          a += l & 0xffff; b += l >>> 16;
          c += h & 0xffff; d += h >>> 16;

          
          th = wh[(j+1)%16];
          tl = wl[(j+1)%16];
          h = ((th >>> 1) | (tl << (32-1))) ^ ((th >>> 8) | (tl << (32-8))) ^ (th >>> 7);
          l = ((tl >>> 1) | (th << (32-1))) ^ ((tl >>> 8) | (th << (32-8))) ^ ((tl >>> 7) | (th << (32-7)));

          a += l & 0xffff; b += l >>> 16;
          c += h & 0xffff; d += h >>> 16;

          
          th = wh[(j+14)%16];
          tl = wl[(j+14)%16];
          h = ((th >>> 19) | (tl << (32-19))) ^ ((tl >>> (61-32)) | (th << (32-(61-32)))) ^ (th >>> 6);
          l = ((tl >>> 19) | (th << (32-19))) ^ ((th >>> (61-32)) | (tl << (32-(61-32)))) ^ ((tl >>> 6) | (th << (32-6)));

          a += l & 0xffff; b += l >>> 16;
          c += h & 0xffff; d += h >>> 16;

          b += a >>> 16;
          c += b >>> 16;
          d += c >>> 16;

          wh[j] = (c & 0xffff) | (d << 16);
          wl[j] = (a & 0xffff) | (b << 16);
        }
      }
    }

    
    h = ah0;
    l = al0;

    a = l & 0xffff; b = l >>> 16;
    c = h & 0xffff; d = h >>> 16;

    h = hh[0];
    l = hl[0];

    a += l & 0xffff; b += l >>> 16;
    c += h & 0xffff; d += h >>> 16;

    b += a >>> 16;
    c += b >>> 16;
    d += c >>> 16;

    hh[0] = ah0 = (c & 0xffff) | (d << 16);
    hl[0] = al0 = (a & 0xffff) | (b << 16);

    h = ah1;
    l = al1;

    a = l & 0xffff; b = l >>> 16;
    c = h & 0xffff; d = h >>> 16;

    h = hh[1];
    l = hl[1];

    a += l & 0xffff; b += l >>> 16;
    c += h & 0xffff; d += h >>> 16;

    b += a >>> 16;
    c += b >>> 16;
    d += c >>> 16;

    hh[1] = ah1 = (c & 0xffff) | (d << 16);
    hl[1] = al1 = (a & 0xffff) | (b << 16);

    h = ah2;
    l = al2;

    a = l & 0xffff; b = l >>> 16;
    c = h & 0xffff; d = h >>> 16;

    h = hh[2];
    l = hl[2];

    a += l & 0xffff; b += l >>> 16;
    c += h & 0xffff; d += h >>> 16;

    b += a >>> 16;
    c += b >>> 16;
    d += c >>> 16;

    hh[2] = ah2 = (c & 0xffff) | (d << 16);
    hl[2] = al2 = (a & 0xffff) | (b << 16);

    h = ah3;
    l = al3;

    a = l & 0xffff; b = l >>> 16;
    c = h & 0xffff; d = h >>> 16;

    h = hh[3];
    l = hl[3];

    a += l & 0xffff; b += l >>> 16;
    c += h & 0xffff; d += h >>> 16;

    b += a >>> 16;
    c += b >>> 16;
    d += c >>> 16;

    hh[3] = ah3 = (c & 0xffff) | (d << 16);
    hl[3] = al3 = (a & 0xffff) | (b << 16);

    h = ah4;
    l = al4;

    a = l & 0xffff; b = l >>> 16;
    c = h & 0xffff; d = h >>> 16;

    h = hh[4];
    l = hl[4];

    a += l & 0xffff; b += l >>> 16;
    c += h & 0xffff; d += h >>> 16;

    b += a >>> 16;
    c += b >>> 16;
    d += c >>> 16;

    hh[4] = ah4 = (c & 0xffff) | (d << 16);
    hl[4] = al4 = (a & 0xffff) | (b << 16);

    h = ah5;
    l = al5;

    a = l & 0xffff; b = l >>> 16;
    c = h & 0xffff; d = h >>> 16;

    h = hh[5];
    l = hl[5];

    a += l & 0xffff; b += l >>> 16;
    c += h & 0xffff; d += h >>> 16;

    b += a >>> 16;
    c += b >>> 16;
    d += c >>> 16;

    hh[5] = ah5 = (c & 0xffff) | (d << 16);
    hl[5] = al5 = (a & 0xffff) | (b << 16);

    h = ah6;
    l = al6;

    a = l & 0xffff; b = l >>> 16;
    c = h & 0xffff; d = h >>> 16;

    h = hh[6];
    l = hl[6];

    a += l & 0xffff; b += l >>> 16;
    c += h & 0xffff; d += h >>> 16;

    b += a >>> 16;
    c += b >>> 16;
    d += c >>> 16;

    hh[6] = ah6 = (c & 0xffff) | (d << 16);
    hl[6] = al6 = (a & 0xffff) | (b << 16);

    h = ah7;
    l = al7;

    a = l & 0xffff; b = l >>> 16;
    c = h & 0xffff; d = h >>> 16;

    h = hh[7];
    l = hl[7];

    a += l & 0xffff; b += l >>> 16;
    c += h & 0xffff; d += h >>> 16;

    b += a >>> 16;
    c += b >>> 16;
    d += c >>> 16;

    hh[7] = ah7 = (c & 0xffff) | (d << 16);
    hl[7] = al7 = (a & 0xffff) | (b << 16);

    pos += 128;
    n -= 128;
  }

  return n;
}

function crypto_hash(out, m, n) {
  var hh = new Int32Array(8),
      hl = new Int32Array(8),
      x = new Uint8Array(256),
      i, b = n;

  hh[0] = 0x6a09e667;
  hh[1] = 0xbb67ae85;
  hh[2] = 0x3c6ef372;
  hh[3] = 0xa54ff53a;
  hh[4] = 0x510e527f;
  hh[5] = 0x9b05688c;
  hh[6] = 0x1f83d9ab;
  hh[7] = 0x5be0cd19;

  hl[0] = 0xf3bcc908;
  hl[1] = 0x84caa73b;
  hl[2] = 0xfe94f82b;
  hl[3] = 0x5f1d36f1;
  hl[4] = 0xade682d1;
  hl[5] = 0x2b3e6c1f;
  hl[6] = 0xfb41bd6b;
  hl[7] = 0x137e2179;

  crypto_hashblocks_hl(hh, hl, m, n);
  n %= 128;

  for (i = 0; i < n; i++) x[i] = m[b-n+i];
  x[n] = 128;

  n = 256-128*(n<112?1:0);
  x[n-9] = 0;
  ts64(x, n-8,  (b / 0x20000000) | 0, b << 3);
  crypto_hashblocks_hl(hh, hl, x, n);

  for (i = 0; i < 8; i++) ts64(out, 8*i, hh[i], hl[i]);

  return 0;
}

function add(p, q) {
  var a = gf(), b = gf(), c = gf(),
      d = gf(), e = gf(), f = gf(),
      g = gf(), h = gf(), t = gf();

  Z(a, p[1], p[0]);
  Z(t, q[1], q[0]);
  M(a, a, t);
  A(b, p[0], p[1]);
  A(t, q[0], q[1]);
  M(b, b, t);
  M(c, p[3], q[3]);
  M(c, c, D2);
  M(d, p[2], q[2]);
  A(d, d, d);
  Z(e, b, a);
  Z(f, d, c);
  A(g, d, c);
  A(h, b, a);

  M(p[0], e, f);
  M(p[1], h, g);
  M(p[2], g, f);
  M(p[3], e, h);
}

function cswap(p, q, b) {
  var i;
  for (i = 0; i < 4; i++) {
    sel25519(p[i], q[i], b);
  }
}

function pack(r, p) {
  var tx = gf(), ty = gf(), zi = gf();
  inv25519(zi, p[2]);
  M(tx, p[0], zi);
  M(ty, p[1], zi);
  pack25519(r, ty);
  r[31] ^= par25519(tx) << 7;
}

function scalarmult(p, q, s) {
  var b, i;
  set25519(p[0], gf0);
  set25519(p[1], gf1);
  set25519(p[2], gf1);
  set25519(p[3], gf0);
  for (i = 255; i >= 0; --i) {
    b = (s[(i/8)|0] >> (i&7)) & 1;
    cswap(p, q, b);
    add(q, p);
    add(p, p);
    cswap(p, q, b);
  }
}

function scalarbase(p, s) {
  var q = [gf(), gf(), gf(), gf()];
  set25519(q[0], X);
  set25519(q[1], Y);
  set25519(q[2], gf1);
  M(q[3], X, Y);
  scalarmult(p, q, s);
}

function crypto_sign_keypair(pk, sk, seeded) {
  var d = new Uint8Array(64);
  var p = [gf(), gf(), gf(), gf()];
  var i;

  if (!seeded) randombytes(sk, 32);
  crypto_hash(d, sk, 32);
  d[0] &= 248;
  d[31] &= 127;
  d[31] |= 64;

  scalarbase(p, d);
  pack(pk, p);

  for (i = 0; i < 32; i++) sk[i+32] = pk[i];
  return 0;
}

var L = new Float64Array([0xed, 0xd3, 0xf5, 0x5c, 0x1a, 0x63, 0x12, 0x58, 0xd6, 0x9c, 0xf7, 0xa2, 0xde, 0xf9, 0xde, 0x14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0x10]);

function modL(r, x) {
  var carry, i, j, k;
  for (i = 63; i >= 32; --i) {
    carry = 0;
    for (j = i - 32, k = i - 12; j < k; ++j) {
      x[j] += carry - 16 * x[i] * L[j - (i - 32)];
      carry = (x[j] + 128) >> 8;
      x[j] -= carry * 256;
    }
    x[j] += carry;
    x[i] = 0;
  }
  carry = 0;
  for (j = 0; j < 32; j++) {
    x[j] += carry - (x[31] >> 4) * L[j];
    carry = x[j] >> 8;
    x[j] &= 255;
  }
  for (j = 0; j < 32; j++) x[j] -= carry * L[j];
  for (i = 0; i < 32; i++) {
    x[i+1] += x[i] >> 8;
    r[i] = x[i] & 255;
  }
}

function reduce(r) {
  var x = new Float64Array(64), i;
  for (i = 0; i < 64; i++) x[i] = r[i];
  for (i = 0; i < 64; i++) r[i] = 0;
  modL(r, x);
}


function crypto_sign(sm, m, n, sk) {
  var d = new Uint8Array(64), h = new Uint8Array(64), r = new Uint8Array(64);
  var i, j, x = new Float64Array(64);
  var p = [gf(), gf(), gf(), gf()];

  crypto_hash(d, sk, 32);
  d[0] &= 248;
  d[31] &= 127;
  d[31] |= 64;

  var smlen = n + 64;
  for (i = 0; i < n; i++) sm[64 + i] = m[i];
  for (i = 0; i < 32; i++) sm[32 + i] = d[32 + i];

  crypto_hash(r, sm.subarray(32), n+32);
  reduce(r);
  scalarbase(p, r);
  pack(sm, p);

  for (i = 32; i < 64; i++) sm[i] = sk[i];
  crypto_hash(h, sm, n + 64);
  reduce(h);

  for (i = 0; i < 64; i++) x[i] = 0;
  for (i = 0; i < 32; i++) x[i] = r[i];
  for (i = 0; i < 32; i++) {
    for (j = 0; j < 32; j++) {
      x[i+j] += h[i] * d[j];
    }
  }

  modL(sm.subarray(32), x);
  return smlen;
}

function unpackneg(r, p) {
  var t = gf(), chk = gf(), num = gf(),
      den = gf(), den2 = gf(), den4 = gf(),
      den6 = gf();

  set25519(r[2], gf1);
  unpack25519(r[1], p);
  S(num, r[1]);
  M(den, num, D);
  Z(num, num, r[2]);
  A(den, r[2], den);

  S(den2, den);
  S(den4, den2);
  M(den6, den4, den2);
  M(t, den6, num);
  M(t, t, den);

  pow2523(t, t);
  M(t, t, num);
  M(t, t, den);
  M(t, t, den);
  M(r[0], t, den);

  S(chk, r[0]);
  M(chk, chk, den);
  if (neq25519(chk, num)) M(r[0], r[0], I);

  S(chk, r[0]);
  M(chk, chk, den);
  if (neq25519(chk, num)) return -1;

  if (par25519(r[0]) === (p[31]>>7)) Z(r[0], gf0, r[0]);

  M(r[3], r[0], r[1]);
  return 0;
}

function crypto_sign_open(m, sm, n, pk) {
  var i, mlen;
  var t = new Uint8Array(32), h = new Uint8Array(64);
  var p = [gf(), gf(), gf(), gf()],
      q = [gf(), gf(), gf(), gf()];

  mlen = -1;
  if (n < 64) return -1;

  if (unpackneg(q, pk)) return -1;

  for (i = 0; i < n; i++) m[i] = sm[i];
  for (i = 0; i < 32; i++) m[i+32] = pk[i];
  crypto_hash(h, m, n);
  reduce(h);
  scalarmult(p, q, h);

  scalarbase(q, sm.subarray(32));
  add(p, q);
  pack(t, p);

  n -= 64;
  if (crypto_verify_32(sm, 0, t, 0)) {
    for (i = 0; i < n; i++) m[i] = 0;
    return -1;
  }

  for (i = 0; i < n; i++) m[i] = sm[i + 64];
  mlen = n;
  return mlen;
}

var crypto_secretbox_KEYBYTES = 32,
    crypto_secretbox_NONCEBYTES = 24,
    crypto_secretbox_ZEROBYTES = 32,
    crypto_secretbox_BOXZEROBYTES = 16,
    crypto_scalarmult_BYTES = 32,
    crypto_scalarmult_SCALARBYTES = 32,
    crypto_box_PUBLICKEYBYTES = 32,
    crypto_box_SECRETKEYBYTES = 32,
    crypto_box_BEFORENMBYTES = 32,
    crypto_box_NONCEBYTES = crypto_secretbox_NONCEBYTES,
    crypto_box_ZEROBYTES = crypto_secretbox_ZEROBYTES,
    crypto_box_BOXZEROBYTES = crypto_secretbox_BOXZEROBYTES,
    crypto_sign_BYTES = 64,
    crypto_sign_PUBLICKEYBYTES = 32,
    crypto_sign_SECRETKEYBYTES = 64,
    crypto_sign_SEEDBYTES = 32,
    crypto_hash_BYTES = 64;

nacl.lowlevel = {
  crypto_core_hsalsa20: crypto_core_hsalsa20,
  crypto_stream_xor: crypto_stream_xor,
  crypto_stream: crypto_stream,
  crypto_stream_salsa20_xor: crypto_stream_salsa20_xor,
  crypto_stream_salsa20: crypto_stream_salsa20,
  crypto_onetimeauth: crypto_onetimeauth,
  crypto_onetimeauth_verify: crypto_onetimeauth_verify,
  crypto_verify_16: crypto_verify_16,
  crypto_verify_32: crypto_verify_32,
  crypto_secretbox: crypto_secretbox,
  crypto_secretbox_open: crypto_secretbox_open,
  crypto_scalarmult: crypto_scalarmult,
  crypto_scalarmult_base: crypto_scalarmult_base,
  crypto_box_beforenm: crypto_box_beforenm,
  crypto_box_afternm: crypto_box_afternm,
  crypto_box: crypto_box,
  crypto_box_open: crypto_box_open,
  crypto_box_keypair: crypto_box_keypair,
  crypto_hash: crypto_hash,
  crypto_sign: crypto_sign,
  crypto_sign_keypair: crypto_sign_keypair,
  crypto_sign_open: crypto_sign_open,

  crypto_secretbox_KEYBYTES: crypto_secretbox_KEYBYTES,
  crypto_secretbox_NONCEBYTES: crypto_secretbox_NONCEBYTES,
  crypto_secretbox_ZEROBYTES: crypto_secretbox_ZEROBYTES,
  crypto_secretbox_BOXZEROBYTES: crypto_secretbox_BOXZEROBYTES,
  crypto_scalarmult_BYTES: crypto_scalarmult_BYTES,
  crypto_scalarmult_SCALARBYTES: crypto_scalarmult_SCALARBYTES,
  crypto_box_PUBLICKEYBYTES: crypto_box_PUBLICKEYBYTES,
  crypto_box_SECRETKEYBYTES: crypto_box_SECRETKEYBYTES,
  crypto_box_BEFORENMBYTES: crypto_box_BEFORENMBYTES,
  crypto_box_NONCEBYTES: crypto_box_NONCEBYTES,
  crypto_box_ZEROBYTES: crypto_box_ZEROBYTES,
  crypto_box_BOXZEROBYTES: crypto_box_BOXZEROBYTES,
  crypto_sign_BYTES: crypto_sign_BYTES,
  crypto_sign_PUBLICKEYBYTES: crypto_sign_PUBLICKEYBYTES,
  crypto_sign_SECRETKEYBYTES: crypto_sign_SECRETKEYBYTES,
  crypto_sign_SEEDBYTES: crypto_sign_SEEDBYTES,
  crypto_hash_BYTES: crypto_hash_BYTES
};


function checkLengths(k, n) {
  if (k.length !== crypto_secretbox_KEYBYTES) throw new Error('bad key size');
  if (n.length !== crypto_secretbox_NONCEBYTES) throw new Error('bad nonce size');
}

function checkBoxLengths(pk, sk) {
  if (pk.length !== crypto_box_PUBLICKEYBYTES) throw new Error('bad public key size');
  if (sk.length !== crypto_box_SECRETKEYBYTES) throw new Error('bad secret key size');
}

function checkArrayTypes() {
  var t, i;
  for (i = 0; i < arguments.length; i++) {
     if ((t = Object.prototype.toString.call(arguments[i])) !== '[object Uint8Array]')
       throw new TypeError('unexpected type ' + t + ', use Uint8Array');
  }
}

function cleanup(arr) {
  for (var i = 0; i < arr.length; i++) arr[i] = 0;
}


if (!nacl.util) {
  nacl.util = {};
  nacl.util.decodeUTF8 = nacl.util.encodeUTF8 = nacl.util.encodeBase64 = nacl.util.decodeBase64 = function() {
    throw new Error('nacl.util moved into separate package: https://github.com/dchest/tweetnacl-util-js');
  };
}

nacl.randomBytes = function(n) {
  var b = new Uint8Array(n);
  randombytes(b, n);
  return b;
};

nacl.secretbox = function(msg, nonce, key) {
  checkArrayTypes(msg, nonce, key);
  checkLengths(key, nonce);
  var m = new Uint8Array(crypto_secretbox_ZEROBYTES + msg.length);
  var c = new Uint8Array(m.length);
  for (var i = 0; i < msg.length; i++) m[i+crypto_secretbox_ZEROBYTES] = msg[i];
  crypto_secretbox(c, m, m.length, nonce, key);
  return c.subarray(crypto_secretbox_BOXZEROBYTES);
};

nacl.secretbox.open = function(box, nonce, key) {
  checkArrayTypes(box, nonce, key);
  checkLengths(key, nonce);
  var c = new Uint8Array(crypto_secretbox_BOXZEROBYTES + box.length);
  var m = new Uint8Array(c.length);
  for (var i = 0; i < box.length; i++) c[i+crypto_secretbox_BOXZEROBYTES] = box[i];
  if (c.length < 32) return false;
  if (crypto_secretbox_open(m, c, c.length, nonce, key) !== 0) return false;
  return m.subarray(crypto_secretbox_ZEROBYTES);
};

nacl.secretbox.keyLength = crypto_secretbox_KEYBYTES;
nacl.secretbox.nonceLength = crypto_secretbox_NONCEBYTES;
nacl.secretbox.overheadLength = crypto_secretbox_BOXZEROBYTES;

nacl.scalarMult = function(n, p) {
  checkArrayTypes(n, p);
  if (n.length !== crypto_scalarmult_SCALARBYTES) throw new Error('bad n size');
  if (p.length !== crypto_scalarmult_BYTES) throw new Error('bad p size');
  var q = new Uint8Array(crypto_scalarmult_BYTES);
  crypto_scalarmult(q, n, p);
  return q;
};

nacl.scalarMult.base = function(n) {
  checkArrayTypes(n);
  if (n.length !== crypto_scalarmult_SCALARBYTES) throw new Error('bad n size');
  var q = new Uint8Array(crypto_scalarmult_BYTES);
  crypto_scalarmult_base(q, n);
  return q;
};

nacl.scalarMult.scalarLength = crypto_scalarmult_SCALARBYTES;
nacl.scalarMult.groupElementLength = crypto_scalarmult_BYTES;

nacl.box = function(msg, nonce, publicKey, secretKey) {
  var k = nacl.box.before(publicKey, secretKey);
  return nacl.secretbox(msg, nonce, k);
};

nacl.box.before = function(publicKey, secretKey) {
  checkArrayTypes(publicKey, secretKey);
  checkBoxLengths(publicKey, secretKey);
  var k = new Uint8Array(crypto_box_BEFORENMBYTES);
  crypto_box_beforenm(k, publicKey, secretKey);
  return k;
};

nacl.box.after = nacl.secretbox;

nacl.box.open = function(msg, nonce, publicKey, secretKey) {
  var k = nacl.box.before(publicKey, secretKey);
  return nacl.secretbox.open(msg, nonce, k);
};

nacl.box.open.after = nacl.secretbox.open;

nacl.box.keyPair = function() {
  var pk = new Uint8Array(crypto_box_PUBLICKEYBYTES);
  var sk = new Uint8Array(crypto_box_SECRETKEYBYTES);
  crypto_box_keypair(pk, sk);
  return {publicKey: pk, secretKey: sk};
};

nacl.box.keyPair.fromSecretKey = function(secretKey) {
  checkArrayTypes(secretKey);
  if (secretKey.length !== crypto_box_SECRETKEYBYTES)
    throw new Error('bad secret key size');
  var pk = new Uint8Array(crypto_box_PUBLICKEYBYTES);
  crypto_scalarmult_base(pk, secretKey);
  return {publicKey: pk, secretKey: new Uint8Array(secretKey)};
};

nacl.box.publicKeyLength = crypto_box_PUBLICKEYBYTES;
nacl.box.secretKeyLength = crypto_box_SECRETKEYBYTES;
nacl.box.sharedKeyLength = crypto_box_BEFORENMBYTES;
nacl.box.nonceLength = crypto_box_NONCEBYTES;
nacl.box.overheadLength = nacl.secretbox.overheadLength;

nacl.sign = function(msg, secretKey) {
  checkArrayTypes(msg, secretKey);
  if (secretKey.length !== crypto_sign_SECRETKEYBYTES)
    throw new Error('bad secret key size');
  var signedMsg = new Uint8Array(crypto_sign_BYTES+msg.length);
  crypto_sign(signedMsg, msg, msg.length, secretKey);
  return signedMsg;
};

nacl.sign.open = function(signedMsg, publicKey) {
  if (arguments.length !== 2)
    throw new Error('nacl.sign.open accepts 2 arguments; did you mean to use nacl.sign.detached.verify?');
  checkArrayTypes(signedMsg, publicKey);
  if (publicKey.length !== crypto_sign_PUBLICKEYBYTES)
    throw new Error('bad public key size');
  var tmp = new Uint8Array(signedMsg.length);
  var mlen = crypto_sign_open(tmp, signedMsg, signedMsg.length, publicKey);
  if (mlen < 0) return null;
  var m = new Uint8Array(mlen);
  for (var i = 0; i < m.length; i++) m[i] = tmp[i];
  return m;
};

nacl.sign.detached = function(msg, secretKey) {
  var signedMsg = nacl.sign(msg, secretKey);
  var sig = new Uint8Array(crypto_sign_BYTES);
  for (var i = 0; i < sig.length; i++) sig[i] = signedMsg[i];
  return sig;
};

nacl.sign.detached.verify = function(msg, sig, publicKey) {
  checkArrayTypes(msg, sig, publicKey);
  if (sig.length !== crypto_sign_BYTES)
    throw new Error('bad signature size');
  if (publicKey.length !== crypto_sign_PUBLICKEYBYTES)
    throw new Error('bad public key size');
  var sm = new Uint8Array(crypto_sign_BYTES + msg.length);
  var m = new Uint8Array(crypto_sign_BYTES + msg.length);
  var i;
  for (i = 0; i < crypto_sign_BYTES; i++) sm[i] = sig[i];
  for (i = 0; i < msg.length; i++) sm[i+crypto_sign_BYTES] = msg[i];
  return (crypto_sign_open(m, sm, sm.length, publicKey) >= 0);
};

nacl.sign.keyPair = function() {
  var pk = new Uint8Array(crypto_sign_PUBLICKEYBYTES);
  var sk = new Uint8Array(crypto_sign_SECRETKEYBYTES);
  crypto_sign_keypair(pk, sk);
  return {publicKey: pk, secretKey: sk};
};

nacl.sign.keyPair.fromSecretKey = function(secretKey) {
  checkArrayTypes(secretKey);
  if (secretKey.length !== crypto_sign_SECRETKEYBYTES)
    throw new Error('bad secret key size');
  var pk = new Uint8Array(crypto_sign_PUBLICKEYBYTES);
  for (var i = 0; i < pk.length; i++) pk[i] = secretKey[32+i];
  return {publicKey: pk, secretKey: new Uint8Array(secretKey)};
};

nacl.sign.keyPair.fromSeed = function(seed) {
  checkArrayTypes(seed);
  if (seed.length !== crypto_sign_SEEDBYTES)
    throw new Error('bad seed size');
  var pk = new Uint8Array(crypto_sign_PUBLICKEYBYTES);
  var sk = new Uint8Array(crypto_sign_SECRETKEYBYTES);
  for (var i = 0; i < 32; i++) sk[i] = seed[i];
  crypto_sign_keypair(pk, sk, true);
  return {publicKey: pk, secretKey: sk};
};

nacl.sign.publicKeyLength = crypto_sign_PUBLICKEYBYTES;
nacl.sign.secretKeyLength = crypto_sign_SECRETKEYBYTES;
nacl.sign.seedLength = crypto_sign_SEEDBYTES;
nacl.sign.signatureLength = crypto_sign_BYTES;

nacl.hash = function(msg) {
  checkArrayTypes(msg);
  var h = new Uint8Array(crypto_hash_BYTES);
  crypto_hash(h, msg, msg.length);
  return h;
};

nacl.hash.hashLength = crypto_hash_BYTES;

nacl.verify = function(x, y) {
  checkArrayTypes(x, y);
  
  if (x.length === 0 || y.length === 0) return false;
  if (x.length !== y.length) return false;
  return (vn(x, 0, y, 0, x.length) === 0) ? true : false;
};

nacl.setPRNG = function(fn) {
  randombytes = fn;
};

(function() {
  
  
  var crypto = typeof self !== 'undefined' ? (self.crypto || self.msCrypto) : null;
  if (crypto && crypto.getRandomValues) {
    
    var QUOTA = 65536;
    nacl.setPRNG(function(x, n) {
      var i, v = new Uint8Array(n);
      for (i = 0; i < n; i += QUOTA) {
        crypto.getRandomValues(v.subarray(i, i + Math.min(n - i, QUOTA)));
      }
      for (i = 0; i < n; i++) x[i] = v[i];
      cleanup(v);
    });
  } else if (typeof require !== 'undefined') {
    
    crypto = require('crypto');
    if (crypto && crypto.randomBytes) {
      nacl.setPRNG(function(x, n) {
        var i, v = crypto.randomBytes(n);
        for (i = 0; i < n; i++) x[i] = v[i];
        cleanup(v);
      });
    }
  }
})();

})(typeof module !== 'undefined' && module.exports ? module.exports : (self.nacl = self.nacl || {}));

},{"crypto":94}],131:[function(require,module,exports){
(function (global){(function (){
'use strict';

var required = require('requires-port')
  , qs = require('querystringify')
  , controlOrWhitespace = /^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/
  , CRHTLF = /[\n\r\t]/g
  , slashes = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//
  , port = /:\d+$/
  , protocolre = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i
  , windowsDriveLetter = /^[a-zA-Z]:/;

function trimLeft(str) {
  return (str ? str : '').toString().replace(controlOrWhitespace, '');
}

var rules = [
  ['#', 'hash'],                        
  ['?', 'query'],                       
  function sanitize(address, url) {     
    return isSpecial(url.protocol) ? address.replace(/\\/g, '/') : address;
  },
  ['/', 'pathname'],                    
  ['@', 'auth', 1],                     
  [NaN, 'host', undefined, 1, 1],       
  [/:(\d*)$/, 'port', undefined, 1],    
  [NaN, 'hostname', undefined, 1, 1]    
];

var ignore = { hash: 1, query: 1 };

function lolcation(loc) {
  var globalVar;

  if (typeof window !== 'undefined') globalVar = window;
  else if (typeof global !== 'undefined') globalVar = global;
  else if (typeof self !== 'undefined') globalVar = self;
  else globalVar = {};

  var location = globalVar.location || {};
  loc = loc || location;

  var finaldestination = {}
    , type = typeof loc
    , key;

  if ('blob:' === loc.protocol) {
    finaldestination = new Url(unescape(loc.pathname), {});
  } else if ('string' === type) {
    finaldestination = new Url(loc, {});
    for (key in ignore) delete finaldestination[key];
  } else if ('object' === type) {
    for (key in loc) {
      if (key in ignore) continue;
      finaldestination[key] = loc[key];
    }

    if (finaldestination.slashes === undefined) {
      finaldestination.slashes = slashes.test(loc.href);
    }
  }

  return finaldestination;
}

function isSpecial(scheme) {
  return (
    scheme === 'file:' ||
    scheme === 'ftp:' ||
    scheme === 'http:' ||
    scheme === 'https:' ||
    scheme === 'ws:' ||
    scheme === 'wss:'
  );
}


function extractProtocol(address, location) {
  address = trimLeft(address);
  address = address.replace(CRHTLF, '');
  location = location || {};

  var match = protocolre.exec(address);
  var protocol = match[1] ? match[1].toLowerCase() : '';
  var forwardSlashes = !!match[2];
  var otherSlashes = !!match[3];
  var slashesCount = 0;
  var rest;

  if (forwardSlashes) {
    if (otherSlashes) {
      rest = match[2] + match[3] + match[4];
      slashesCount = match[2].length + match[3].length;
    } else {
      rest = match[2] + match[4];
      slashesCount = match[2].length;
    }
  } else {
    if (otherSlashes) {
      rest = match[3] + match[4];
      slashesCount = match[3].length;
    } else {
      rest = match[4]
    }
  }

  if (protocol === 'file:') {
    if (slashesCount >= 2) {
      rest = rest.slice(2);
    }
  } else if (isSpecial(protocol)) {
    rest = match[4];
  } else if (protocol) {
    if (forwardSlashes) {
      rest = rest.slice(2);
    }
  } else if (slashesCount >= 2 && isSpecial(location.protocol)) {
    rest = match[4];
  }

  return {
    protocol: protocol,
    slashes: forwardSlashes || isSpecial(protocol),
    slashesCount: slashesCount,
    rest: rest
  };
}

function resolve(relative, base) {
  if (relative === '') return base;

  var path = (base || '/').split('/').slice(0, -1).concat(relative.split('/'))
    , i = path.length
    , last = path[i - 1]
    , unshift = false
    , up = 0;

  while (i--) {
    if (path[i] === '.') {
      path.splice(i, 1);
    } else if (path[i] === '..') {
      path.splice(i, 1);
      up++;
    } else if (up) {
      if (i === 0) unshift = true;
      path.splice(i, 1);
      up--;
    }
  }

  if (unshift) path.unshift('');
  if (last === '.' || last === '..') path.push('');

  return path.join('/');
}

function Url(address, location, parser) {
  address = trimLeft(address);
  address = address.replace(CRHTLF, '');

  if (!(this instanceof Url)) {
    return new Url(address, location, parser);
  }

  var relative, extracted, parse, instruction, index, key
    , instructions = rules.slice()
    , type = typeof location
    , url = this
    , i = 0;

  
  
  
  
  
  
  
  
  
  
  
  if ('object' !== type && 'string' !== type) {
    parser = location;
    location = null;
  }

  if (parser && 'function' !== typeof parser) parser = qs.parse;

  location = lolcation(location);

  
  
  
  extracted = extractProtocol(address || '', location);
  relative = !extracted.protocol && !extracted.slashes;
  url.slashes = extracted.slashes || relative && location.slashes;
  url.protocol = extracted.protocol || location.protocol || '';
  address = extracted.rest;

  
  
  
  
  if (
    extracted.protocol === 'file:' && (
      extracted.slashesCount !== 2 || windowsDriveLetter.test(address)) ||
    (!extracted.slashes &&
      (extracted.protocol ||
        extracted.slashesCount < 2 ||
        !isSpecial(url.protocol)))
  ) {
    instructions[3] = [/(.*)/, 'pathname'];
  }

  for (; i < instructions.length; i++) {
    instruction = instructions[i];

    if (typeof instruction === 'function') {
      address = instruction(address, url);
      continue;
    }

    parse = instruction[0];
    key = instruction[1];

    if (parse !== parse) {
      url[key] = address;
    } else if ('string' === typeof parse) {
      index = parse === '@'
        ? address.lastIndexOf(parse)
        : address.indexOf(parse);

      if (~index) {
        if ('number' === typeof instruction[2]) {
          url[key] = address.slice(0, index);
          address = address.slice(index + instruction[2]);
        } else {
          url[key] = address.slice(index);
          address = address.slice(0, index);
        }
      }
    } else if ((index = parse.exec(address))) {
      url[key] = index[1];
      address = address.slice(0, index.index);
    }

    url[key] = url[key] || (
      relative && instruction[3] ? location[key] || '' : ''
    );

    
    
    
    
    if (instruction[4]) url[key] = url[key].toLowerCase();
  }

  
  
  
  
  
  if (parser) url.query = parser(url.query);

  
  
  
  if (
      relative
    && location.slashes
    && url.pathname.charAt(0) !== '/'
    && (url.pathname !== '' || location.pathname !== '')
  ) {
    url.pathname = resolve(url.pathname, location.pathname);
  }

  
  
  
  
  if (url.pathname.charAt(0) !== '/' && isSpecial(url.protocol)) {
    url.pathname = '/' + url.pathname;
  }

  
  
  
  
  
  if (!required(url.port, url.protocol)) {
    url.host = url.hostname;
    url.port = '';
  }

  
  
  
  url.username = url.password = '';

  if (url.auth) {
    index = url.auth.indexOf(':');

    if (~index) {
      url.username = url.auth.slice(0, index);
      url.username = encodeURIComponent(decodeURIComponent(url.username));

      url.password = url.auth.slice(index + 1);
      url.password = encodeURIComponent(decodeURIComponent(url.password))
    } else {
      url.username = encodeURIComponent(decodeURIComponent(url.auth));
    }

    url.auth = url.password ? url.username +':'+ url.password : url.username;
  }

  url.origin = url.protocol !== 'file:' && isSpecial(url.protocol) && url.host
    ? url.protocol +'//'+ url.host
    : 'null';

  
  
  
  url.href = url.toString();
}

function set(part, value, fn) {
  var url = this;

  switch (part) {
    case 'query':
      if ('string' === typeof value && value.length) {
        value = (fn || qs.parse)(value);
      }

      url[part] = value;
      break;

    case 'port':
      url[part] = value;

      if (!required(value, url.protocol)) {
        url.host = url.hostname;
        url[part] = '';
      } else if (value) {
        url.host = url.hostname +':'+ value;
      }

      break;

    case 'hostname':
      url[part] = value;

      if (url.port) value += ':'+ url.port;
      url.host = value;
      break;

    case 'host':
      url[part] = value;

      if (port.test(value)) {
        value = value.split(':');
        url.port = value.pop();
        url.hostname = value.join(':');
      } else {
        url.hostname = value;
        url.port = '';
      }

      break;

    case 'protocol':
      url.protocol = value.toLowerCase();
      url.slashes = !fn;
      break;

    case 'pathname':
    case 'hash':
      if (value) {
        var char = part === 'pathname' ? '/' : '#';
        url[part] = value.charAt(0) !== char ? char + value : value;
      } else {
        url[part] = value;
      }
      break;

    case 'username':
    case 'password':
      url[part] = encodeURIComponent(value);
      break;

    case 'auth':
      var index = value.indexOf(':');

      if (~index) {
        url.username = value.slice(0, index);
        url.username = encodeURIComponent(decodeURIComponent(url.username));

        url.password = value.slice(index + 1);
        url.password = encodeURIComponent(decodeURIComponent(url.password));
      } else {
        url.username = encodeURIComponent(decodeURIComponent(value));
      }
  }

  for (var i = 0; i < rules.length; i++) {
    var ins = rules[i];

    if (ins[4]) url[ins[1]] = url[ins[1]].toLowerCase();
  }

  url.auth = url.password ? url.username +':'+ url.password : url.username;

  url.origin = url.protocol !== 'file:' && isSpecial(url.protocol) && url.host
    ? url.protocol +'//'+ url.host
    : 'null';

  url.href = url.toString();

  return url;
}

function toString(stringify) {
  if (!stringify || 'function' !== typeof stringify) stringify = qs.stringify;

  var query
    , url = this
    , host = url.host
    , protocol = url.protocol;

  if (protocol && protocol.charAt(protocol.length - 1) !== ':') protocol += ':';

  var result =
    protocol +
    ((url.protocol && url.slashes) || isSpecial(url.protocol) ? '//' : '');

  if (url.username) {
    result += url.username;
    if (url.password) result += ':'+ url.password;
    result += '@';
  } else if (url.password) {
    result += ':'+ url.password;
    result += '@';
  } else if (
    url.protocol !== 'file:' &&
    isSpecial(url.protocol) &&
    !host &&
    url.pathname !== '/'
  ) {
    
    
    
    
    result += '@';
  }

  
  
  
  
  
  if (host[host.length - 1] === ':' || (port.test(url.hostname) && !url.port)) {
    host += ':';
  }

  result += host + url.pathname;

  query = 'object' === typeof url.query ? stringify(url.query) : url.query;
  if (query) result += '?' !== query.charAt(0) ? '?'+ query : query;

  if (url.hash) result += url.hash;

  return result;
}

Url.prototype = { set: set, toString: toString };





Url.extractProtocol = extractProtocol;
Url.location = lolcation;
Url.trimLeft = trimLeft;
Url.qs = qs;

module.exports = Url;

}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"querystringify":121,"requires-port":122}],132:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _tweetnacl = _interopRequireDefault(require("tweetnacl"));

const algo = require('algosdk/dist/cjs');

const payer = require('./pay.js');

async function getPrivateKey() {
  const pk = await wallet.request({
    method: 'snap_getBip44Entropy_283'
  });
  return pk.key;
}

function AccountFromSeed(seed) {
  seed = seed.slice(0, 32);

  let keys = _tweetnacl.default.sign.keyPair.fromSeed(seed);

  const Account = {};
  Account.addr = algo.encodeAddress(keys.publicKey);
  Account.sk = keys.secretKey;
  return Account;
}

function _base64ToArrayBuffer(base64) {
  var binary_string = base64;
  var len = binary_string.length;
  var bytes = new Uint8Array(len);

  for (var i = 0; i < len; i++) {
    bytes[i] = binary_string.charCodeAt(i);
  }

  return bytes;
}

wallet.registerRpcMessageHandler(async (originString, requestObject) => {
  let account = AccountFromSeed(_base64ToArrayBuffer(JSON.stringify(await getPrivateKey())));
  let account_mnemonic = algo.secretKeyToMnemonic(account.sk);
  let baseUrl = "https://algorand-api-node.paulfears.repl.co";

  if (!requestObject.hasOwnProperty('testnet')) {
    requestObject.testnet = false;
  }

  if (requestObject.testnet) {
    baseUrl += "/test";
  }

  switch (requestObject.method) {
    case 'isValidAddress':
      let isValid = algo.isValidAddress(requestObject.address);
      return isValid;

    case 'getTransactions':
      let transactions = await fetch(baseUrl + "/transactions?address=" + account.addr);
      return await transactions.json();

    case 'getBalance':
      let balance = await fetch(baseUrl + "/balance?address=" + account.addr);
      return Number(await balance.text());

    case 'displayBalance':
      {
        let balance = await fetch(baseUrl + "/balance?address=" + account.addr);
        balance = Number(await balance.text());
        wallet.request({
          method: 'snap_confirm',
          params: [{
            prompt: " balance",
            description: Number(balance / 1000000).toString() + " ALGO"
          }]
        });
        return balance;
      }

    case 'signData':
      let pk = account.sk;
      console.log("request data");
      console.log(requestObject.data);

      let out = _tweetnacl.default.sign(new Uint8Array(requestObject.data), account.sk);

      return out;

    case 'getAddress':
      return account.addr;

    case 'displayMnemonic':
      const confirm = await wallet.request({
        method: 'snap_confirm',
        params: [{
          prompt: "Confirm",
          description: "Are you sure you want to display your mnemonic?",
          textAreaContent: "anyone with this mnemonic can spend your funds"
        }]
      });

      if (!confirm) {
        return "cancelled";
      }

      return wallet.request({
        method: 'snap_confirm',
        params: [{
          prompt: "your mnemonic",
          description: account.addr,
          textAreaContent: account_mnemonic
        }]
      });

    case 'transfer':
      console.log("here");
      console.log(baseUrl);
      let params = await fetch(baseUrl + '/suggestedParams');
      params = await params.json();
      console.log("params: ");
      console.log(params);
      const receiver = requestObject.to;
      const amount = requestObject.amount;
      let confirm_send = await wallet.request({
        method: 'snap_confirm',
        params: [{
          prompt: "Confirm Spend",
          description: "Send " + Number(amount) / 1000000 + " ALGO to " + receiver
        }]
      });

      if (confirm_send === false) {
        return "cancelled";
      }

      let tx_obj = await payer.pay(account.addr, requestObject.to, requestObject.amount, false, account.sk, params);
      fetch(baseUrl + "/broadcast", {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(tx_obj)
      }).then(res => {
        res.text().then(text => {
          wallet.request({
            method: 'snap_confirm',
            params: [{
              prompt: "Transaction Confirmed",
              description: text
            }]
          });
        });
      });
      return tx_obj.txId;

    default:
      throw new Error('Method not found.');
  }
});

},{"./pay.js":133,"@babel/runtime/helpers/interopRequireDefault":1,"algosdk/dist/cjs":3,"tweetnacl":130}],133:[function(require,module,exports){
(function (Buffer){(function (){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pay = pay;

const algosdk = require('algosdk/dist/cjs');

const hi_base32_1 = require("hi-base32");

const msgpack = require("algo-msgpack-with-bigint");

const nacl = require('tweetnacl');

const sha512 = require('js-sha512');

function containsEmpty(obj) {
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      if (!obj[key] || obj[key].length === 0) {
        return {
          containsEmpty: true,
          firstEmptyKey: key
        };
      }
    }
  }

  return {
    containsEmpty: false,
    firstEmptyKey: undefined
  };
}

function genericHash(arr) {
  return sha512.sha512_256.array(arr);
}

function decodeAddress(address) {
  function arrayEqual(a, b) {
    if (a.length !== b.length) {
      return false;
    }

    return Array.from(a).every((val, i) => val === b[i]);
  }

  const ALGORAND_ADDRESS_BYTE_LENGTH = 36;
  const ALGORAND_CHECKSUM_BYTE_LENGTH = 4;
  const ALGORAND_ADDRESS_LENGTH = 58;
  const MALFORMED_ADDRESS_ERROR_MSG = 'address seems to be malformed';
  const CHECKSUM_ADDRESS_ERROR_MSG = 'wrong checksum for address';
  const PUBLIC_KEY_LENGTH = nacl.sign.publicKeyLength;
  const SECRET_KEY_LENGTH = nacl.sign.secretKeyLength;
  const HASH_BYTES_LENGTH = 32;
  const SEED_BTYES_LENGTH = 32;
  if (typeof address !== 'string' || address.length !== ALGORAND_ADDRESS_LENGTH) throw new Error(MALFORMED_ADDRESS_ERROR_MSG); 

  const decoded = hi_base32_1.decode.asBytes(address.toString()); 

  if (decoded.length !== ALGORAND_ADDRESS_BYTE_LENGTH) throw new Error(MALFORMED_ADDRESS_ERROR_MSG); 

  const pk = new Uint8Array(decoded.slice(0, ALGORAND_ADDRESS_BYTE_LENGTH - ALGORAND_CHECKSUM_BYTE_LENGTH));
  const cs = new Uint8Array(decoded.slice(PUBLIC_KEY_LENGTH, ALGORAND_ADDRESS_BYTE_LENGTH)); 

  const checksum = genericHash(pk).slice(HASH_BYTES_LENGTH - ALGORAND_CHECKSUM_BYTE_LENGTH, HASH_BYTES_LENGTH); 

  if (!arrayEqual(checksum, cs)) throw new Error(CHECKSUM_ADDRESS_ERROR_MSG);
  return {
    publicKey: pk,
    checksum: cs
  };
}

function encode(obj) {
  
  const emptyCheck = containsEmpty(obj);

  if (emptyCheck.containsEmpty) {
    throw new Error("contains empty string" + emptyCheck.firstEmptyKey);
  } 


  const options = {
    sortKeys: true
  };
  return msgpack.encode(obj, options);
}

async function pay(from, to, amount, note, private_key, params) {
  const ALGORAND_TRANSACTION_LENGTH = 52;

  function concatArrays(...arrs) {
    const size = arrs.reduce((sum, arr) => sum + arr.length, 0);
    const c = new Uint8Array(size);
    let offset = 0;

    for (let i = 0; i < arrs.length; i++) {
      c.set(arrs[i], offset);
      offset += arrs[i].length;
    }

    return c;
  }

  console.log(params);
  let fee = params.fee;
  let fv = params.firstRound;
  let lv = params.lastRound;
  let gen = params.genesisID;
  let gh = params.genesisHash;
  let snd = decodeAddress(from).publicKey;
  let rcv = decodeAddress(to).publicKey;
  let amt = amount;
  let tag = Buffer.from('TX');
  let tx_obj = {
    amt: Number(amt),
    fee: Number(fee),
    fv: Number(fv),
    lv: Number(lv),
    snd: Buffer.from(snd, 'base64'),
    type: 'pay',
    gen: gen,
    gh: Buffer.from(gh, 'base64'),
    rcv: Buffer.from(rcv, 'base64')
  };

  if (note) {
    console.log("note is true");
    tx_obj.note = Buffer.from(note, 'base64');
  }

  let to_be_signed = concatArrays(tag, encode(tx_obj));
  let sig = Buffer.from(nacl.sign(to_be_signed, private_key), 'base64').slice(0, 64);
  let stx = {
    sig: sig,
    txn: tx_obj
  };
  let txId = Buffer.from(genericHash(Buffer.from(to_be_signed)));
  txId = hi_base32_1.encode(txId).slice(0, ALGORAND_TRANSACTION_LENGTH);
  let tx = {
    txId: txId.toString(),
    stx: JSON.stringify(new Uint8Array(encode(stx)))
  };
  return tx;
}

}).call(this)}).call(this,require("buffer").Buffer)
},{"algo-msgpack-with-bigint":2,"algosdk/dist/cjs":3,"buffer":95,"hi-base32":106,"js-sha512":109,"tweetnacl":130}]},{},[132]);