"use strict";(self.webpackChunkreact_sisp=self.webpackChunkreact_sisp||[]).push([[8048],{45956:function(e,t,i){i.d(t,{eY:function(){return _}});var r=i(29439),n=i(15671),a=i(43144),o=i(97326),s=i(11752),u=i(61120),h=i(60136),c=i(29388),l=i(92026),d=i(22753),p=i(23588),f=i(15245),v=i(87422),x=i(10978),g=i(51378);function m(e,t,i){var r={target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071};return t&&i&&(r.width=t,r.height=i),new g.Z(e,r)}var _=function(e){(0,h.Z)(i,e);var t=(0,c.Z)(i);function i(){var e,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,a=arguments.length>1?arguments[1]:void 0,s=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return(0,n.Z)(this,i),(e=t.call(this)).requestRenderOnSourceChangedEnabled=s,e._textureInvalidated=!0,e.stencilRef=0,e.coordScale=[1,1],e._height=void 0,e.pixelRatio=1,e.resolution=0,e.rotation=0,e._source=null,e._width=void 0,e.x=0,e.y=0,e.blendFunction=a,e.source=r,e.requestRender=e.requestRender.bind((0,o.Z)(e)),e}return(0,a.Z)(i,[{key:"destroy",value:function(){this._texture&&(this._texture.dispose(),this._texture=null)}},{key:"isSourceScaled",get:function(){return this.width!==this.sourceWidth||this.height!==this.sourceHeight}},{key:"height",get:function(){return void 0!==this._height?this._height:this.sourceHeight},set:function(e){this._height=e}},{key:"source",get:function(){return this._source},set:function(e){this._source=e,this.invalidateTexture()}},{key:"sourceHeight",get:function(){return this._source instanceof HTMLImageElement?this._source.naturalHeight:this._source.height}},{key:"sourceWidth",get:function(){return this._source instanceof HTMLImageElement?this._source.naturalWidth:this._source.width}},{key:"width",get:function(){return void 0!==this._width?this._width:this.sourceWidth},set:function(e){this._width=e}},{key:"beforeRender",value:function(e){(0,s.Z)((0,u.Z)(i.prototype),"beforeRender",this).call(this,e),this.updateTexture(e.context)}},{key:"invalidateTexture",value:function(){this._textureInvalidated||(this._textureInvalidated=!0,this.requestRenderOnSourceChangedEnabled&&this.requestRender())}},{key:"_createTransforms",value:function(){return{dvs:(0,p.c)()}}},{key:"setTransform",value:function(e){var t=(0,d.b)(this.transforms.dvs),i=e.toScreenNoRotation([0,0],[this.x,this.y]),n=(0,r.Z)(i,2),a=n[0],o=n[1],s=this.resolution/this.pixelRatio/e.resolution,u=s*this.width,h=s*this.height,c=Math.PI*this.rotation/180;(0,d.c)(t,t,(0,f.f)(a,o)),(0,d.c)(t,t,(0,f.f)(u/2,h/2)),(0,d.r)(t,t,-c),(0,d.c)(t,t,(0,f.f)(-u/2,-h/2)),(0,d.j)(t,t,(0,f.f)(u,h)),(0,d.m)(this.transforms.dvs,e.displayViewMat3,t)}},{key:"setSamplingProfile",value:function(e){this._texture&&(e.mips&&!this._texture.descriptor.hasMipmap&&this._texture.generateMipmap(),this._texture.setSamplingMode(e.samplingMode))}},{key:"bind",value:function(e,t){this._texture&&e.bindTexture(this._texture,t)}},{key:"updateTexture",value:function(e){var t;if(!this.stage)return null==(t=this._texture)||t.dispose(),void(this._texture=null);if(this._textureInvalidated){this._textureInvalidated=!1,this._texture||(this.source?this._texture=m(e,this.sourceWidth,this.sourceHeight):this._texture=m(e));var i,r=this.source;if(r){if(this._texture.resize(this.sourceWidth,this.sourceHeight),(i=r)&&"render"in i)if(r instanceof x.Z){var n=r.getRenderedRasterPixels();this._texture.setData((0,l.pC)(n)?n.renderedRasterPixels:null)}else this._texture.setData(function(e){var t=document.createElement("canvas");return t.width=e.width,t.height=e.height,e.render(t.getContext("2d")),t}(r));else(function(e){return e&&!("render"in e)})(r)&&this._texture.setData(r);this.ready()}else this._texture.setData(null)}}},{key:"onAttach",value:function(){this.invalidateTexture()}},{key:"onDetach",value:function(){this.invalidateTexture()}}]),i}(v.s)},90110:function(e,t,i){i.d(t,{c:function(){return d}});var r=i(93433),n=i(15671),a=i(43144),o=i(11752),s=i(61120),u=i(60136),h=i(29388),c=i(37826),l=i(80613),d=function(e){(0,u.Z)(i,e);var t=(0,h.Z)(i);function i(){return(0,n.Z)(this,i),t.apply(this,arguments)}return(0,a.Z)(i,[{key:"requiresDedicatedFBO",get:function(){return this.children.some((function(e){return"additive"===e.blendFunction}))}},{key:"prepareRenderPasses",value:function(e){var t=this,n=e.registerRenderPass({name:"bitmap",brushes:[c.U.bitmap],target:function(){return t.children},drawPhase:l.jx.MAP});return[].concat((0,r.Z)((0,o.Z)((0,s.Z)(i.prototype),"prepareRenderPasses",this).call(this,e)),[n])}}]),i}(i(64510).Z)},10978:function(e,t,i){i.d(t,{Z:function(){return o}});var r=i(15671),n=i(43144),a=i(92026),o=function(){function e(t,i,n){(0,r.Z)(this,e),this.pixelBlock=t,this.extent=i,this.originalPixelBlock=n}return(0,n.Z)(e,[{key:"width",get:function(){return(0,a.pC)(this.pixelBlock)?this.pixelBlock.width:0}},{key:"height",get:function(){return(0,a.pC)(this.pixelBlock)?this.pixelBlock.height:0}},{key:"render",value:function(e){var t=this.pixelBlock;if(!(0,a.Wi)(t)){var i=this.filter({pixelBlock:t});if(!(0,a.Wi)(i.pixelBlock)){var r=i.pixelBlock.getAsRGBA(),n=e.createImageData(i.pixelBlock.width,i.pixelBlock.height);n.data.set(r),e.putImageData(n,0,0)}}}},{key:"getRenderedRasterPixels",value:function(){var e=this.filter({pixelBlock:this.pixelBlock});return(0,a.Wi)(e.pixelBlock)?null:{width:e.pixelBlock.width,height:e.pixelBlock.height,renderedRasterPixels:new Uint8Array(e.pixelBlock.getAsRGBA().buffer)}}}]),e}()},9229:function(e,t,i){i.d(t,{Z:function(){return z}});var r=i(37762),n=i(15861),a=i(15671),o=i(43144),s=i(60136),u=i(29388),h=i(87757),c=i(27366),l=i(85015),d=i(66978),p=i(49861),f=(i(63780),i(93169),i(25243),i(69912)),v=i(53866),x=i(65156),g=i(92975),m=i(22824),_=i(29439),y=Math.PI/180;function k(e){return e*y}function w(e,t){var i=k(t.rotation),r=Math.abs(Math.cos(i)),n=Math.abs(Math.sin(i)),a=(0,_.Z)(t.size,2),o=a[0],s=a[1];return e[0]=Math.round(s*n+o*r),e[1]=Math.round(s*r+o*n),e}function Z(e,t,i,r){var n=(0,_.Z)(t,2),a=n[0],o=n[1],s=(0,_.Z)(r,2),u=s[0],h=s[1],c=.5*i;return e[0]=a-c*u,e[1]=o-c*h,e[2]=a+c*u,e[3]=o+c*h,e}var b=i(45956),R=i(37995),M=i(73828),S=(0,x.Ue)(),B=[0,0],C=new M.Z(0,0,0,0),P=2048,W=2048,T=!1,E=!1,H=!1,I=function(e){(0,s.Z)(i,e);var t=(0,u.Z)(i);function i(e){var o;return(0,a.Z)(this,i),(o=t.call(this,e))._imagePromise=null,o.bitmaps=[],o.hidpi=H,o.imageMaxWidth=P,o.imageMaxHeight=W,o.imageRotationSupported=T,o.imageNormalizationSupported=E,o.update=(0,d.Ds)(function(){var e=(0,n.Z)(h.mark((function e(t,i){var a,s,u,c,l,d,p,f,v,x,m;return h.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.stationary&&!o.destroyed){e.next=2;break}return e.abrupt("return",null);case 2:return a=t.state,s=(0,g.C5)(a.spatialReference),u=o.hidpi?t.pixelRatio:1,(c=o.imageNormalizationSupported&&a.worldScreenWidth&&a.worldScreenWidth<a.size[0])?(B[0]=a.worldScreenWidth,B[1]=a.size[1]):o.imageRotationSupported?(B[0]=a.size[0],B[1]=a.size[1]):w(B,a),l=Math.floor(B[0]*u)>o.imageMaxWidth||Math.floor(B[1]*u)>o.imageMaxHeight,d=s&&(a.extent.xmin<s.valid[0]||a.extent.xmax>s.valid[1]),p=!o.imageNormalizationSupported&&d,f=!l&&!p,v=o.imageRotationSupported?a.rotation:0,f?(x=c?a.paddedViewState.center:a.center,o._imagePromise=o._singleExport(a,B,x,a.resolution,v,u,i)):(m=Math.min(o.imageMaxWidth,o.imageMaxHeight),p&&(m=Math.min(a.worldScreenWidth,m)),o._imagePromise=o._tiledExport(a,m,v,u,i)),e.abrupt("return",o._imagePromise.then(function(){var e=(0,n.Z)(h.mark((function e(t){var i,n,a,s,u,c;return h.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o._imagePromise=null,!o.destroyed){o.bitmaps=null!=t?t:[],i=(0,r.Z)(o.container.children);try{for(a=function(){var e=n.value;t.includes(e)||e.fadeOut().then((function(){e.remove()}))},i.s();!(n=i.n()).done;)a()}catch(h){i.e(h)}finally{i.f()}s=(0,r.Z)(t);try{for(s.s();!(u=s.n()).done;)c=u.value,o.container.addChild(c),c.fadeIn()}catch(h){s.e(h)}finally{s.f()}}case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){throw o._imagePromise=null,e})));case 7:case"end":return e.stop()}}),e)})));return function(t,i){return e.apply(this,arguments)}}(),5e3),o}return(0,o.Z)(i,[{key:"destroy",value:function(){this.bitmaps=[]}},{key:"updating",get:function(){return!this.destroyed&&null!==this._imagePromise}},{key:"updateExports",value:function(e){var t,i=(0,r.Z)(this.container.children);try{for(i.s();!(t=i.n()).done;){var n=t.value;if(!n.visible||!n.stage)return;e(n),n.invalidateTexture(),n.requestRender()}}catch(a){i.e(a)}finally{i.f()}}},{key:"_export",value:function(){var e=(0,n.Z)(h.mark((function e(t,i,r,n,a,o){var s,u;return h.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetchSource(t,Math.floor(i*a),Math.floor(r*a),{rotation:n,pixelRatio:a,signal:o});case 2:return s=e.sent,u=new b.eY(s,"additive"),e.abrupt("return",(u.x=t.xmin,u.y=t.ymax,u.resolution=t.width/i,u.rotation=n,u.pixelRatio=a,u));case 5:case"end":return e.stop()}}),e,this)})));return function(t,i,r,n,a,o){return e.apply(this,arguments)}}()},{key:"_singleExport",value:function(){var e=(0,n.Z)(h.mark((function e(t,i,r,n,a,o,s){var u;return h.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Z(S,r,n,i),u=new v.Z(S[0],S[1],S[2],S[3],t.spatialReference),e.next=4,this._export(u,i[0],i[1],a,o,s);case 4:return e.t0=e.sent,e.abrupt("return",[e.t0]);case 6:case"end":return e.stop()}}),e,this)})));return function(t,i,r,n,a,o,s){return e.apply(this,arguments)}}()},{key:"_tiledExport",value:function(e,t,i,r,n){var a=this,o=m.Z.create({size:t,spatialReference:e.spatialReference,scales:[e.scale]}),s=new R.Z(o),u=s.getTileCoverage(e);if(!u)return null;var h=[];return u.forEach((function(o,u,c,l){C.set(o,u,c,l),s.getTileBounds(S,C);var d=new v.Z(S[0],S[1],S[2],S[3],e.spatialReference);h.push(a._export(d,t,t,i,r,n))})),Promise.all(h)}}]),i}(l.Z);(0,c._)([(0,p.Cb)()],I.prototype,"_imagePromise",void 0),(0,c._)([(0,p.Cb)()],I.prototype,"bitmaps",void 0),(0,c._)([(0,p.Cb)()],I.prototype,"container",void 0),(0,c._)([(0,p.Cb)()],I.prototype,"fetchSource",void 0),(0,c._)([(0,p.Cb)()],I.prototype,"hidpi",void 0),(0,c._)([(0,p.Cb)()],I.prototype,"imageMaxWidth",void 0),(0,c._)([(0,p.Cb)()],I.prototype,"imageMaxHeight",void 0),(0,c._)([(0,p.Cb)()],I.prototype,"imageRotationSupported",void 0),(0,c._)([(0,p.Cb)()],I.prototype,"imageNormalizationSupported",void 0),(0,c._)([(0,p.Cb)()],I.prototype,"requestUpdate",void 0),(0,c._)([(0,p.Cb)()],I.prototype,"updating",null);var z=I=(0,c._)([(0,f.j)("esri.views.2d.layers.support.ExportStrategy")],I)}}]);
//# sourceMappingURL=8048.c366ac9c.chunk.js.map