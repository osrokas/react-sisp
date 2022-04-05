"use strict";(self.webpackChunkreact_sisp=self.webpackChunkreact_sisp||[]).push([[5461],{65461:function(e,t,r){r.r(t),r.d(t,{BufferObject:function(){return n.Z},FramebufferObject:function(){return i.Z},Program:function(){return a.$},ProgramCache:function(){return o.Z},Renderbuffer:function(){return s.Z},ShaderCompiler:function(){return u.Z},Texture:function(){return c.Z},VertexArrayObject:function(){return l.Z},createContextOrErrorHTML:function(){return h.s},createProgram:function(){return p.H},glslifyDefineMap:function(){return p.K}});var n=r(44070),i=r(53634),a=r(9256),o=r(68267),s=r(15880),u=r(56648),c=r(51378),l=r(45412),p=r(65706),h=r(49800)},68267:function(e,t,r){r.d(t,{Z:function(){return o}});var n=r(15671),i=r(43144),a=r(65706),o=function(){function e(t){(0,n.Z)(this,e),this._programCacheByTemplate=new Map,this._rctx=t}return(0,i.Z)(e,[{key:"dispose",value:function(){this._programCacheByTemplate.forEach((function(e){return e.programs.forEach((function(e){return e.dispose()}))})),this._programCacheByTemplate=null}},{key:"getProgram",value:function(e,t){var r=this;return this._programCacheByTemplate.has(e)||this.addProgramTemplate(e,(function(t){return(0,a.H)(r._rctx,e,t)})),this.getProgramTemplateInstance(e,t)}},{key:"addProgramTemplate",value:function(e,t){this._programCacheByTemplate.set(e,{constructor:t,programs:new Map})}},{key:"getProgramTemplateInstance",value:function(e,t){var r=this._programCacheByTemplate.get(e);if(r){var n=t?JSON.stringify(t):"default";if(!r.programs.has(n)){var i=r.constructor(t);r.programs.set(n,i)}return r.programs.get(n)}return null}}]),e}()},56648:function(e,t,r){r.d(t,{Z:function(){return a}});var n=r(15671),i=r(43144),a=function(){function e(t){(0,n.Z)(this,e),this.readFile=t}return(0,i.Z)(e,[{key:"resolveIncludes",value:function(e){return this.resolve(e)}},{key:"resolve",value:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Map;if(r.has(e))return r.get(e);var n=this.read(e);if(!n)throw new Error("cannot find shader file ".concat(e));for(var i=/^[^\S\n]*#include\s+<(\S+)>[^\S\n]?/gm,a=i.exec(n),o=[];null!=a;)o.push({path:a[1],start:a.index,length:a[0].length}),a=i.exec(n);var s=0,u="";return o.forEach((function(e){u+=n.slice(s,e.start),u+=r.has(e.path)?"":t.resolve(e.path,r),s=e.start+e.length})),u+=n.slice(s),r.set(e,u),u}},{key:"read",value:function(e){return this.readFile(e)}}]),e}()},51378:function(e,t,r){r.d(t,{Z:function(){return p}});var n=r(1413),i=r(15671),a=r(43144),o=r(16889),s=r(92026),u=r(37825),c=r(8548),l=r(30308),p=function(){function e(t,r){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;(0,i.Z)(this,e),this._context=t,this.type="texture",this._glName=null,this._descriptor=void 0,this._samplingModeDirty=!1,this._wrapModeDirty=!1,t.instanceCounter.increment(c._g.Texture,this),this._descriptor=(0,n.Z)({target:3553,samplingMode:9729,wrapMode:10497,flipped:!1,hasMipmap:!1,isOpaque:!1,unpackAlignment:4,preMultiplyAlpha:!1},r),34067===this._descriptor.target?this.setDataCubeMap(a):this.setData(a)}return(0,a.Z)(e,[{key:"glName",get:function(){return this._glName}},{key:"descriptor",get:function(){return this._descriptor}},{key:"isDirty",get:function(){return this._samplingModeDirty||this._wrapModeDirty}},{key:"dispose",value:function(){this._context.gl&&this._glName&&(this._context.unbindTextureAllUnits(this),this._context.gl.deleteTexture(this._glName),this._glName=null,this._context.instanceCounter.decrement(c._g.Texture,this))}},{key:"release",value:function(){this.dispose()}},{key:"resize",value:function(e,t){var r=this._descriptor;r.width===e&&r.height===t||(r.width=e,r.height=t,34067===this._descriptor.target?this.setDataCubeMap(null):this.setData(null))}},{key:"setDataCubeMap",value:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=34069;t<=34074;t++)this.setData(e,t)}},{key:"setData",value:function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3553;if(this._context&&this._context.gl){var n=this._context.gl;this._glName||(this._glName=n.createTexture()),void 0===t&&(t=null),null===t&&(this._descriptor.width=this._descriptor.width||4,this._descriptor.height=this._descriptor.height||4);var i=this._context.bindTexture(this,e.TEXTURE_UNIT_FOR_UPDATES),a=this._descriptor;e._validateTexture(this._context,a),n.pixelStorei(n.UNPACK_ALIGNMENT,a.unpackAlignment),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,a.flipped?1:0),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,a.preMultiplyAlpha?1:0);var o=a.pixelFormat,c=a.internalFormat?a.internalFormat:this._deriveInternalFormat(o,a.dataType);if(t instanceof ImageData||t instanceof HTMLImageElement||t instanceof HTMLCanvasElement||t instanceof HTMLVideoElement){var l=t.width,p=t.height;t instanceof HTMLVideoElement&&(l=t.videoWidth,p=t.videoHeight),a.width&&a.height,n.texImage2D(r,0,c,o,a.dataType,t),(0,u.zu)(n),a.hasMipmap&&this.generateMipmap(),void 0===a.width&&(a.width=l),void 0===a.height&&(a.height=p)}else{null!=a.width&&null!=a.height||console.error("Width and height must be specified!"),n.DEPTH24_STENCIL8&&c===n.DEPTH_STENCIL&&(c=n.DEPTH24_STENCIL8);var d=a.width,f=a.height;if(h(t)){var m=Math.round(Math.log(Math.max(d,f))/Math.LN2)+1;a.hasMipmap=a.hasMipmap&&m===t.levels.length;for(var _=0;;++_){var g=t.levels[Math.min(_,t.levels.length-1)];if(n.compressedTexImage2D(r,_,c,d,f,0,g),1===d&&1===f||!a.hasMipmap)break;d=Math.max(1,d>>1),f=Math.max(1,f>>1)}}else if((0,s.pC)(t))n.texImage2D(r,0,c,d,f,0,o,a.dataType,t),(0,u.zu)(n),a.hasMipmap&&this.generateMipmap();else for(var T=0;n.texImage2D(r,T,c,d,f,0,o,a.dataType,null),(0,u.zu)(n),(1!==d||1!==f)&&a.hasMipmap;++T)d=Math.max(1,d>>1),f=Math.max(1,f>>1)}e._applySamplingMode(n,this._descriptor),e._applyWrapMode(n,this._descriptor),e._applyAnisotropicFilteringParameters(this._context,this._descriptor),(0,u.zu)(n),this._context.bindTexture(i,e.TEXTURE_UNIT_FOR_UPDATES)}}},{key:"updateData",value:function(t,r,n,i,a,o){var s=arguments.length>6&&void 0!==arguments[6]?arguments[6]:3553;o||console.error("An attempt to use uninitialized data!"),this._glName||console.error("An attempt to update uninitialized texture!");var u=this._context.gl,c=this._descriptor,l=this._context.bindTexture(this,e.TEXTURE_UNIT_FOR_UPDATES);(r<0||n<0||i>c.width||a>c.height||r+i>c.width||n+a>c.height)&&console.error("An attempt to update out of bounds of the texture!"),u.pixelStorei(u.UNPACK_ALIGNMENT,c.unpackAlignment),u.pixelStorei(u.UNPACK_FLIP_Y_WEBGL,c.flipped?1:0),u.pixelStorei(u.UNPACK_PREMULTIPLY_ALPHA_WEBGL,c.preMultiplyAlpha?1:0),o instanceof ImageData||o instanceof HTMLImageElement||o instanceof HTMLCanvasElement||o instanceof HTMLVideoElement?u.texSubImage2D(s,t,r,n,c.pixelFormat,c.dataType,o):u.texSubImage2D(s,t,r,n,i,a,c.pixelFormat,c.dataType,o),this._context.bindTexture(l,e.TEXTURE_UNIT_FOR_UPDATES)}},{key:"generateMipmap",value:function(){var t=this._descriptor;t.hasMipmap||(t.hasMipmap=!0,this._samplingModeDirty=!0,e._validateTexture(this._context,t)),9729===t.samplingMode?(this._samplingModeDirty=!0,t.samplingMode=9985):9728===t.samplingMode&&(this._samplingModeDirty=!0,t.samplingMode=9984);var r=this._context.bindTexture(this,e.TEXTURE_UNIT_FOR_UPDATES);this._context.gl.generateMipmap(t.target),this._context.bindTexture(r,e.TEXTURE_UNIT_FOR_UPDATES)}},{key:"setSamplingMode",value:function(e){e!==this._descriptor.samplingMode&&(this._descriptor.samplingMode=e,this._samplingModeDirty=!0)}},{key:"setWrapMode",value:function(t){t!==this._descriptor.wrapMode&&(this._descriptor.wrapMode=t,e._validateTexture(this._context,this._descriptor),this._wrapModeDirty=!0)}},{key:"applyChanges",value:function(){var t=this._context.gl,r=this._descriptor;this._samplingModeDirty&&(e._applySamplingMode(t,r),this._samplingModeDirty=!1),this._wrapModeDirty&&(e._applyWrapMode(t,r),this._wrapModeDirty=!1)}},{key:"_deriveInternalFormat",value:function(e,t){if("webgl"===this._context.webglVersion)return e;if(5126===t)switch(e){case 6408:return 34836;case 6407:return 34837;default:throw new Error("Unable to derive format")}return e}}],[{key:"_validateTexture",value:function(e,t){(t.width<0||t.height<0)&&console.error("Negative dimension parameters are not allowed!");var r=(0,o.wt)(t.width)&&(0,o.wt)(t.height);(0,l.Z)(e.gl)||r||("number"==typeof t.wrapMode?33071!==t.wrapMode&&console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"):33071===t.wrapMode.s&&33071===t.wrapMode.t||console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"),t.hasMipmap&&console.error("Mipmapping requires power-of-two textures!"))}},{key:"_applySamplingMode",value:function(e,t){var r=t.samplingMode,n=t.samplingMode;9985===r||9987===r?(r=9729,t.hasMipmap||(n=9729)):9984!==r&&9986!==r||(r=9728,t.hasMipmap||(n=9728)),e.texParameteri(t.target,e.TEXTURE_MAG_FILTER,r),e.texParameteri(t.target,e.TEXTURE_MIN_FILTER,n)}},{key:"_applyWrapMode",value:function(e,t){"number"==typeof t.wrapMode?(e.texParameteri(t.target,e.TEXTURE_WRAP_S,t.wrapMode),e.texParameteri(t.target,e.TEXTURE_WRAP_T,t.wrapMode)):(e.texParameteri(t.target,e.TEXTURE_WRAP_S,t.wrapMode.s),e.texParameteri(t.target,e.TEXTURE_WRAP_T,t.wrapMode.t))}},{key:"_applyAnisotropicFilteringParameters",value:function(e,t){var r,n=e.capabilities.textureFilterAnisotropic;n&&e.gl.texParameterf(t.target,n.TEXTURE_MAX_ANISOTROPY,null!=(r=t.maxAnisotropy)?r:1)}}]),e}();function h(e){return(0,s.pC)(e)&&"type"in e&&"compressed"===e.type}p.TEXTURE_UNIT_FOR_UPDATES=0},30308:function(e,t,r){function n(e){return window.WebGL2RenderingContext&&e instanceof window.WebGL2RenderingContext}r.d(t,{Z:function(){return n}})},37825:function(e,t,r){r.d(t,{CG:function(){return u},hZ:function(){return s},zu:function(){return c}});var n=r(10064),i=r(93169),a=r(32718).Z.getLogger("esri/views/webgl");var o=!!(0,i.Z)("enable-feature:webgl-debug");function s(){return o}function u(){return o}function c(e){if(s()){var t=e.getError();if(t){var r=function(e,t){switch(t){case e.INVALID_ENUM:return"Invalid Enum. An unacceptable value has been specified for an enumerated argument.";case e.INVALID_VALUE:return"Invalid Value. A numeric argument is out of range.";case e.INVALID_OPERATION:return"Invalid Operation. The specified command is not allowed for the current state.";case e.INVALID_FRAMEBUFFER_OPERATION:return"Invalid Framebuffer operation. The currently bound framebuffer is not framebuffer complete when trying to render to or to read from it.";case e.OUT_OF_MEMORY:return"Out of memory. Not enough memory is left to execute the command.";case e.CONTEXT_LOST_WEBGL:return"WebGL context has been lost";default:return"Unknown error"}}(e,t),i=(new Error).stack;a.error(new n.Z("webgl-error","WebGL error occured",{message:r,stack:i}))}}}},8548:function(e,t,r){r.d(t,{Ld:function(){return i},Lu:function(){return a},_g:function(){return n}});var n,i=33984;!function(e){e[e.Texture=0]="Texture",e[e.Buffer=1]="Buffer",e[e.VAO=2]="VAO",e[e.VertexShader=3]="VertexShader",e[e.FragmentShader=4]="FragmentShader",e[e.Program=5]="Program",e[e.Framebuffer=6]="Framebuffer",e[e.Renderbuffer=7]="Renderbuffer",e[e.COUNT=8]="COUNT"}(n||(n={}));var a=33306},65706:function(e,t,r){r.d(t,{H:function(){return a},K:function(){return i}});var n=r(9256);function i(e){var t="";for(var r in e){var n=e[r];if("boolean"==typeof n)n&&(t+="#define ".concat(r,"\n"));else if("number"==typeof n)t+="#define ".concat(r," ").concat(n.toFixed(),"\n");else if("object"==typeof n){var i=n.options,a=0;for(var o in i)t+="#define ".concat(i[o]," ").concat((a++).toFixed(),"\n");t+="#define ".concat(r," ").concat(i[n.value],"\n")}}return t}function a(e,t,r,i){r=r||{},i=i||"";var a="function"==typeof t.shaders?t.shaders(r):t.shaders;return new n.$(e,i+a.vertexShader,i+a.fragmentShader,t.attributes)}}}]);
//# sourceMappingURL=5461.9be60fe4.chunk.js.map