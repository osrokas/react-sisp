"use strict";(self.webpackChunkreact_sisp=self.webpackChunkreact_sisp||[]).push([[916],{9997:function(e,t,r){r.d(t,{F:function(){return y},M:function(){return n}});var n={Base64:0,Hex:1,String:2,Raw:3};function i(e,t){var r=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(r>>16)<<16|65535&r}function a(e){for(var t=[],r=0,n=8*e.length;r<n;r+=8)t[r>>5]|=(255&e.charCodeAt(r/8))<<r%32;return t}function l(e){for(var t=[],r=0,n=32*e.length;r<n;r+=8)t.push(String.fromCharCode(e[r>>5]>>>r%32&255));return t.join("")}function s(e){for(var t="0123456789abcdef",r=[],n=0,i=4*e.length;n<i;n++)r.push(t.charAt(e[n>>2]>>n%4*8+4&15)+t.charAt(e[n>>2]>>n%4*8&15));return r.join("")}function u(e){for(var t=[],r=0,n=4*e.length;r<n;r+=3)for(var i=(e[r>>2]>>r%4*8&255)<<16|(e[r+1>>2]>>(r+1)%4*8&255)<<8|e[r+2>>2]>>(r+2)%4*8&255,a=0;a<4;a++)8*r+6*a>32*e.length?t.push("="):t.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(i>>6*(3-a)&63));return t.join("")}function o(e,t,r,n,a,l){return i(function(e,t){return e<<t|e>>>32-t}(i(i(t,e),i(n,l)),a),r)}function c(e,t,r,n,i,a,l){return o(t&r|~t&n,e,t,i,a,l)}function f(e,t,r,n,i,a,l){return o(t&n|r&~n,e,t,i,a,l)}function p(e,t,r,n,i,a,l){return o(t^r^n,e,t,i,a,l)}function d(e,t,r,n,i,a,l){return o(r^(t|~n),e,t,i,a,l)}function m(e,t){e[t>>5]|=128<<t%32,e[14+(t+64>>>9<<4)]=t;for(var r=1732584193,n=-271733879,a=-1732584194,l=271733878,s=0;s<e.length;s+=16){var u=r,o=n,m=a,y=l;r=c(r,n,a,l,e[s+0],7,-680876936),l=c(l,r,n,a,e[s+1],12,-389564586),a=c(a,l,r,n,e[s+2],17,606105819),n=c(n,a,l,r,e[s+3],22,-1044525330),r=c(r,n,a,l,e[s+4],7,-176418897),l=c(l,r,n,a,e[s+5],12,1200080426),a=c(a,l,r,n,e[s+6],17,-1473231341),n=c(n,a,l,r,e[s+7],22,-45705983),r=c(r,n,a,l,e[s+8],7,1770035416),l=c(l,r,n,a,e[s+9],12,-1958414417),a=c(a,l,r,n,e[s+10],17,-42063),n=c(n,a,l,r,e[s+11],22,-1990404162),r=c(r,n,a,l,e[s+12],7,1804603682),l=c(l,r,n,a,e[s+13],12,-40341101),a=c(a,l,r,n,e[s+14],17,-1502002290),r=f(r,n=c(n,a,l,r,e[s+15],22,1236535329),a,l,e[s+1],5,-165796510),l=f(l,r,n,a,e[s+6],9,-1069501632),a=f(a,l,r,n,e[s+11],14,643717713),n=f(n,a,l,r,e[s+0],20,-373897302),r=f(r,n,a,l,e[s+5],5,-701558691),l=f(l,r,n,a,e[s+10],9,38016083),a=f(a,l,r,n,e[s+15],14,-660478335),n=f(n,a,l,r,e[s+4],20,-405537848),r=f(r,n,a,l,e[s+9],5,568446438),l=f(l,r,n,a,e[s+14],9,-1019803690),a=f(a,l,r,n,e[s+3],14,-187363961),n=f(n,a,l,r,e[s+8],20,1163531501),r=f(r,n,a,l,e[s+13],5,-1444681467),l=f(l,r,n,a,e[s+2],9,-51403784),a=f(a,l,r,n,e[s+7],14,1735328473),r=p(r,n=f(n,a,l,r,e[s+12],20,-1926607734),a,l,e[s+5],4,-378558),l=p(l,r,n,a,e[s+8],11,-2022574463),a=p(a,l,r,n,e[s+11],16,1839030562),n=p(n,a,l,r,e[s+14],23,-35309556),r=p(r,n,a,l,e[s+1],4,-1530992060),l=p(l,r,n,a,e[s+4],11,1272893353),a=p(a,l,r,n,e[s+7],16,-155497632),n=p(n,a,l,r,e[s+10],23,-1094730640),r=p(r,n,a,l,e[s+13],4,681279174),l=p(l,r,n,a,e[s+0],11,-358537222),a=p(a,l,r,n,e[s+3],16,-722521979),n=p(n,a,l,r,e[s+6],23,76029189),r=p(r,n,a,l,e[s+9],4,-640364487),l=p(l,r,n,a,e[s+12],11,-421815835),a=p(a,l,r,n,e[s+15],16,530742520),r=d(r,n=p(n,a,l,r,e[s+2],23,-995338651),a,l,e[s+0],6,-198630844),l=d(l,r,n,a,e[s+7],10,1126891415),a=d(a,l,r,n,e[s+14],15,-1416354905),n=d(n,a,l,r,e[s+5],21,-57434055),r=d(r,n,a,l,e[s+12],6,1700485571),l=d(l,r,n,a,e[s+3],10,-1894986606),a=d(a,l,r,n,e[s+10],15,-1051523),n=d(n,a,l,r,e[s+1],21,-2054922799),r=d(r,n,a,l,e[s+8],6,1873313359),l=d(l,r,n,a,e[s+15],10,-30611744),a=d(a,l,r,n,e[s+6],15,-1560198380),n=d(n,a,l,r,e[s+13],21,1309151649),r=d(r,n,a,l,e[s+4],6,-145523070),l=d(l,r,n,a,e[s+11],10,-1120210379),a=d(a,l,r,n,e[s+2],15,718787259),n=d(n,a,l,r,e[s+9],21,-343485551),r=i(r,u),n=i(n,o),a=i(a,m),l=i(l,y)}return[r,n,a,l]}function y(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n.Hex,r=t||n.Base64,i=m(a(e),8*e.length);switch(r){case n.Raw:return i;case n.Hex:return s(i);case n.String:return l(i);case n.Base64:return u(i)}}},80916:function(e,t,r){r.r(t),r.d(t,{addAggregateFields:function(){return J},createMatcherSchema:function(){return U},createSchema:function(){return T},createSymbolSchema:function(){return M},createSymbolSchemaOptions:function(){return E}});var n=r(93433),i=r(1413),a=r(37762),l=(r(94931),r(78451),r(34213),r(45130),r(49018),r(34999)),s=(r(79850),r(9014),r(10064)),u=r(93169),o=r(84652),c=r(32718),f=r(92026),p=r(17842),d=r(42283),m=r(80613),y=r(46640),v=r(54815),h=r(18745);var g=r(42079),b=r(65760),x=r(20478),S=r(31666),w=c.Z.getLogger("esri.views.2d.layers.features.schemaUtils"),Z="ValidationError",z={esriGeometryPoint:["above-right","above-center","above-left","center-center","center-left","center-right","below-center","below-left","below-right"],esriGeometryPolygon:["always-horizontal"],esriGeometryPolyline:["center-along"],esriGeometryMultipoint:null};function F(e){return(0,v.hF)(e)}function V(e){var t;return"line-marker"===e.type?{type:"line-marker",color:null==(t=e.color)?void 0:t.toJSON(),placement:e.placement,style:e.style}:(0,d.i)(e.toJSON()).toJSON()}function E(e){var t=0,r=0,n=!1,i=!0,l=!0;if((0,f.pC)(e)&&(r=(0,g.J)(e),"visualVariables"in e&&(t=function(e){if(!e)return m.X.NONE;var t,r=0,n=(0,a.Z)(e);try{for(n.s();!(t=n.n()).done;){var i=t.value;if("size"===i.type){var l=(0,h.a)(i);r|=l,"outline"===i.target&&(r|=l<<4)}else"color"===i.type?r|=m.X.COLOR:"opacity"===i.type?r|=m.X.OPACITY:"rotation"===i.type&&(r|=m.X.ROTATION)}}catch(s){n.e(s)}finally{n.f()}return r}(e.visualVariables||[]),n="dot-density"===e.type),!n)){var s=e.getSymbols();"backgroundFillSymbol"in e&&e.backgroundFillSymbol&&s.push(e.backgroundFillSymbol);var u,o=(0,a.Z)(s);try{for(o.s();!(u=o.n()).done;){var c=u.value;if("cim"===c.type&&(i=!1),"simple-fill"===c.type||"picture-fill"===c.type){var p=c.outline;p&&"none"!==p.style&&"solid"!==p.style&&(l=!1);var d=p&&"none"!==p.style&&"solid"!==p.style,y="simple-fill"===c.type&&"none"!==c.style&&"solid"!==c.style;("picture-fill"===c.type||y||d)&&(i=!1)}}}catch(v){o.e(v)}finally{o.f()}}return n&&(l=!1),{vvFlags:t,maxVVSize:r,supportsOutlineFills:l,stride:{fill:n?"dot-density":i?"simple":"default"}}}function M(e,t,r){return k(e,E(t),r)}function k(e,t,r){if(!e)return null;switch(e.type){case"simple-fill":case"picture-fill":return function(e,t,r){var n=t.supportsOutlineFills,a=(0,v.jj)(m.LW.FILL,(0,i.Z)((0,i.Z)({},t),{},{isOutlinedFill:n})),l=r?F(a):a,s=e.clone(),u=s.outline;t.supportsOutlineFills||(s.outline=null);var o=(0,i.Z)({materialKey:l,hash:s.hash(),isOutlinedFill:!!t.supportsOutlineFills},V(s));if(t.supportsOutlineFills)return o;var c=[];if(c.push(o),u){var f=(0,v.jj)(m.LW.LINE,(0,i.Z)((0,i.Z)({},t),{},{isOutline:!0})),p=(0,i.Z)({materialKey:r?F(f):f,hash:u.hash()},V(u));c.push(p)}return{type:"composite-symbol",layers:c,hash:c.reduce((function(e,t){return t.hash+e}),"")}}(e,t,r);case"simple-marker":case"picture-marker":return function(e,t,r){var n=(0,v.jj)(m.LW.MARKER,t),a=r?F(n):n,l=V(e);return(0,i.Z)((0,i.Z)({materialKey:a,hash:e.hash()},l),{},{angle:e.angle,maxVVSize:t.maxVVSize})}(e,t,r);case"simple-line":return function(e,t,r){var n=(0,v.jj)(m.LW.LINE,t),a=r?F(n):n,l=e.clone(),s=l.marker;l.marker=null;var u=[];if(u.push((0,i.Z)({materialKey:a,hash:l.hash()},V(l))),s){var o,c=(0,v.jj)(m.LW.MARKER,t),f=r?F(c):c;s.color=null!=(o=s.color)?o:l.color,u.push((0,i.Z)({materialKey:f,hash:s.hash(),lineWidth:l.width},V(s)))}return{type:"composite-symbol",layers:u,hash:u.reduce((function(e,t){return t.hash+e}),"")}}(e,t,r);case"text":return function(e,t,r){var n=(0,v.jj)(m.LW.TEXT,t),a=r?F(n):n,l=V(e);return(0,i.Z)((0,i.Z)({materialKey:a,hash:e.hash()},l),{},{angle:e.angle,maxVVSize:t.maxVVSize})}(e,t,r);case"label":return function(e,t,r){var n=e.toJSON(),a=(0,v.jj)(m.LW.LABEL,(0,i.Z)((0,i.Z)({},t),{},{placement:n.labelPlacement}));return(0,i.Z)((0,i.Z)({materialKey:r?F(a):a,hash:e.hash()},n),{},{labelPlacement:n.labelPlacement})}(e,t,r);case"cim":return{type:"cim",rendererKey:t.vvFlags,data:e.data,maxVVSize:t.maxVVSize};case"CIMSymbolReference":return{type:"cim",rendererKey:t.vvFlags,data:e,maxVVSize:t.maxVVSize};case"web-style":return(0,i.Z)((0,i.Z)({},V(e)),{},{type:"web-style",hash:e.hash(),rendererKey:t.vvFlags,maxVVSize:t.maxVVSize});default:throw new Error("symbol not supported ".concat(e.type))}}function I(e,t){var r=(0,o.d9)(e);return r.some((function(e){return function(e,t){var r=e.labelPlacement,n=z[t];if(!e.symbol)return w.warn("No ILabelClass symbol specified."),!0;if(!n)return w.error(new s.Z("mapview-labeling:unsupported-geometry-type","Unable to create labels for Feature Layer, ".concat(t," is not supported"))),!0;if(!n.some((function(e){return e===r}))){var i=n[0];r&&w.warn("Found invalid label placement type ".concat(r," for ").concat(t,". Defaulting to ").concat(i)),e.labelPlacement=i}return!1}(e,t)}))?[]:r}function T(e){return(0,u.Z)("esri-2d-update-debug")&&console.debug("Created new schema",O(e,!0)),O(e)}function O(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];try{var r,n,i=j(e,t),a={};return i.map((function(t){return R(a,e,t)})),{source:{definitionExpression:e.definitionExpression,fields:e.fields.map((function(e){return e.toJSON()})),gdbVersion:e.gdbVersion,historicMoment:null==(r=e.historicMoment)?void 0:r.getTime(),outFields:e.availableFields,pixelBuffer:e.pixelBuffer,spatialReference:e.spatialReference.toJSON(),timeExtent:null==(n=e.timeExtent)?void 0:n.toJSON(),customParameters:e.customParameters},attributes:{fields:{},indexCount:0},processors:i,targets:a}}catch(l){if(l.fieldName===Z)return w.error(l),null;throw l}}function R(e,t,r){switch(r.target){case"feature":return void L(e,N(t),r);case"aggregate":if(!("featureReduction"in t))return;var n=t.featureReduction;if("selection"===n.type)throw new s.Z(Z,"Mapview does not support `selection` reduction type",n);return L(e,N(t),r),void function(e,t,r){e.aggregate||(e.aggregate={name:"aggregate",input:"feature",filters:null,attributes:{},params:{clusterRadius:(0,p.F2)(t.clusterRadius/2),clusterPixelBuffer:64*Math.ceil((0,p.F2)(t.clusterMaxSize)/64),fields:r.aggregateFields}}),C(e.aggregate,r.attributes.fields)}(e,n,r)}}function C(e,t){for(var r in t){var n=t[r];if(n.target===e.name){var i=e.attributes[r];i?(i.context.mesh=i.context.mesh||n.context.mesh,i.context.storage=i.context.storage||n.context.storage):e.attributes[r]=n}}return e}function N(e){var t,r,n,i,a;return[null!=(t=null==(r=(0,f.Wg)(e.filter))?void 0:r.toJSON())?t:null,null!=(n=null==(i=(0,f.Wg)(null==(a=(0,f.Wg)(e.featureEffect))?void 0:a.filter))?void 0:i.toJSON())?n:null]}function L(e,t,r){return e.feature||(e.feature={name:"feature",input:"source",filters:t,attributes:{}}),C(e.feature,r.attributes.fields),e}function _(e,t){return t.field?P(e,(0,i.Z)((0,i.Z)({},t),{},{type:"field",field:t.field})):t.valueExpression?P(e,(0,i.Z)((0,i.Z)({},t),{},{type:"expression",valueExpression:t.valueExpression})):{field:null,fieldIndex:null}}function P(e,t){switch(t.type){case"expression":var r=t.valueExpression;if(!e.fields[r]){var n=e.indexCount++;e.fields[r]=(0,i.Z)((0,i.Z)({},t),{},{name:r,fieldIndex:n})}return{fieldIndex:e.fields[r].fieldIndex};case"label-expression":var a=JSON.stringify(t.label);if(!e.fields[a]){var l=e.indexCount++;e.fields[a]=(0,i.Z)((0,i.Z)({},t),{},{name:a,fieldIndex:l})}return{fieldIndex:e.fields[a].fieldIndex};case"field":var s=t.field;return"aggregate"===t.target&&e.fields[s]||(e.fields[s]=(0,i.Z)((0,i.Z)({},t),{},{name:s})),{field:s};case"statistic":return e.fields[t.name]=(0,i.Z)({},t),{field:t.name}}}function j(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=new Array,n=0;return r.push(W(e,n++,t)),r}function A(e,t,r,n,a){var l=arguments.length>5&&void 0!==arguments[5]&&arguments[5],s=P(t,{type:"label-expression",target:n,context:{mesh:!0},resultType:"string",label:{labelExpression:r.labelExpression,labelExpressionInfo:r.labelExpressionInfo?{expression:r.labelExpressionInfo.expression}:null,symbol:!!r.symbol,where:r.where}}),u=s.fieldIndex;return(0,i.Z)((0,i.Z)({},M(r,e,l)),{},{fieldIndex:u,target:n,index:a})}function W(e,t){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i={indexCount:0,fields:{}},u="featureReduction"in e&&e.featureReduction,o=u?"aggregate":"feature";if("sublayers"in e){var c=function(){var t,n={type:"subtype",subtypeField:e.subtypeField,renderers:{},stride:{fill:"default"}},l={type:"subtype",mapping:{},target:"feature"},u={type:"subtype",classes:{}},c={type:"symbol",target:"feature",aggregateFields:[],attributes:i,storage:l,mesh:{matcher:n,aggregateMatcher:null,labels:u,sortKey:null}},p=new Set,d=0,m=(0,a.Z)(e.sublayers);try{var y=function(){var e=t.value,a=e.renderer,c=e.subtypeCode,m=e.labelingInfo,y=e.labelsVisible,v=U(i,o,a,r),h=K(i,o,a),g=y&&m;if("visualVariables"in a&&a.visualVariables&&a.visualVariables.length)throw new s.Z(Z,"Visual variables are currently not supported for subtype layers");if("dictionary"===v.type)throw new s.Z(Z,"Dictionary renderer is not supported in subtype layers");if("subtype"===v.type)throw new s.Z(Z,"Nested subtype renderers is not supported");if((0,f.pC)(h)&&"subtype"===h.type)throw new s.Z(Z,"Nested subtype storage is not supported");if((0,f.pC)(h)&&"dot-density"===h.type)throw new s.Z(Z,"Dot density attributes are not supported in subtype layers");if(p.has(c))throw new s.Z(Z,"Subtype codes for sublayers must be unique");p.add(c),n.renderers[c]=v,l.mapping[c]=h,g&&(u.classes[c]=g.map((function(e){return A(a,i,e,"feature",d++,r)})))};for(m.s();!(t=m.n()).done;)y()}catch(v){m.e(v)}finally{m.f()}return{v:c}}();if("object"===typeof c)return c.v}if("heatmap"===e.renderer.type){var p=e.renderer,d=p.blurRadius,m=p.fieldOffset,y=p.field;return{type:"heatmap",aggregateFields:[],attributes:i,target:o,storage:null,mesh:{blurRadius:d,fieldOffset:m,field:_(i,{target:o,field:y,resultType:"numeric"}).field}}}var v=[],h="aggregate"===o?(0,x.S1)(v,e.renderer,u,null):e.renderer;J(i,v);var g=U(i,o,h,r),b=null,w=K(i,o,h),z=(0,S.oq)(e.geometryType),F=e.labelsVisible&&e.labelingInfo||[],V=[];if(u){if("selection"===u.type)throw new s.Z(Z,"Mapview does not support `selection` reduction type",u);if(u.symbol){var E=new l.Z({symbol:u.symbol,visualVariables:"visualVariables"in h?h.visualVariables:null});b=U(i,o,E,r)}V=u&&u.labelsVisible&&u.labelingInfo||[]}F=I(F,z),V=I(V,z);var M=0,k=[].concat((0,n.Z)(F.map((function(e){return A(h,i,e,"feature",M++,r)}))),(0,n.Z)(V.map((function(e){return A(h,i,e,"aggregate",M++,r)})))),T=B(i,e.orderBy);return{type:"symbol",target:o,attributes:i,aggregateFields:v,storage:w,mesh:{matcher:g,labels:{type:"simple",classes:k},aggregateMatcher:b,sortKey:T}}}function B(e,t){if((0,f.Wi)(t)||!t.length)return null;t.length>1&&w.warn("Layer rendering currently only supports ordering by 1 orderByInfo, but found ".concat(t.length,". All but the first will be discarded"));var r=t[0],n="ascending"===r.order?"asc":"desc";return r.field?{field:r.field,order:n}:r.valueExpression?{fieldIndex:P(e,{type:"expression",target:"feature",valueExpression:r.valueExpression,resultType:"numeric"}).fieldIndex,order:n}:(w.error(new s.Z(Z,"Expected to find a field or valueExpression for OrderByInfo",r)),null)}function J(e,t){var r,n={mesh:!0,storage:!0},i=(0,a.Z)(t);try{for(i.s();!(r=i.n()).done;){var l=r.value,s=l.name,u=l.outStatistic,o=u.statisticType,c=u.onStatisticField,f=null,p=null,d=null,m="numeric",y="feature";"onStatisticValueExpression"in u?p=P(e,{type:"expression",target:y,valueExpression:u.onStatisticValueExpression,resultType:m}).fieldIndex:"onStatisticNormalizationField"in u?(f=P(e,{type:"field",target:y,field:c,resultType:m}).field,d=u.onStatisticNormalizationField):f=P(e,{type:"field",target:y,field:c,resultType:m}).field,P(e,{type:"statistic",target:"aggregate",name:s,context:n,inField:f,inNormalizationField:d,inFieldIndex:p,statisticType:o})}}catch(v){i.e(v)}finally{i.f()}}function K(e,t,r){switch(r.type){case"dot-density":return function(e,t,r){return r&&r.length?{type:"dot-density",mapping:r.map((function(r,n){var i=_(e,{valueExpression:r.valueExpression,field:r.field,resultType:"numeric",target:t});return{binding:n,field:i.field,fieldIndex:i.fieldIndex}})),target:t}:{type:"dot-density",mapping:[],target:t}}(e,t,r.attributes);case"simple":case"class-breaks":case"unique-value":case"dictionary":return function(e,t,r){if(!r||!r.length)return{type:"visual-variable",mapping:[],target:t};var n={storage:!0},i="numeric";return{type:"visual-variable",mapping:(0,b.t)(r).map((function(r){var a,l=(0,y.nU)(r.type),s=_(e,{target:t,valueExpression:r.valueExpression,field:r.field,context:n,resultType:i}),u=s.field,o=s.fieldIndex;switch(r.type){case"size":return"$view.scale"===r.valueExpression?null:{type:"size",binding:l,field:u,fieldIndex:o,normalizationField:_(e,{target:t,field:r.normalizationField,context:n,resultType:i}).field,valueRepresentation:null!=(a=r.valueRepresentation)?a:null};case"color":return{type:"color",binding:l,field:u,fieldIndex:o,normalizationField:_(e,{target:t,field:r.normalizationField,context:n,resultType:i}).field};case"opacity":return{type:"opacity",binding:l,field:u,fieldIndex:o,normalizationField:_(e,{target:t,field:r.normalizationField,context:n,resultType:i}).field};case"rotation":return{type:"rotation",binding:l,field:u,fieldIndex:o}}})).filter((function(e){return e})),target:t}}(e,t,r.visualVariables);case"heatmap":return null}}function U(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]&&arguments[3],i=(0,f.Pt)(e,{indexCount:0,fields:{}});switch(r.type){case"simple":case"dot-density":return q(i,r,n);case"class-breaks":return G(i,t,r,n);case"unique-value":return D(i,t,r,n);case"dictionary":return H(i,r,n)}}function q(e,t){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=t.getSymbols(),i=n.length?n[0]:null,a=E(t),l=a.stride;return{type:"simple",symbol:M(i,t,r),stride:l}}function G(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]&&arguments[3],i={mesh:!0,use:"renderer.field"},a=r.backgroundFillSymbol,l=_(e,{target:t,field:r.field,valueExpression:r.valueExpression,resultType:"numeric",context:i}),s=l.field,u=l.fieldIndex,o=r.normalizationType,c="log"===o?"esriNormalizeByLog":"percent-of-total"===o?"esriNormalizeByPercentOfTotal":"field"===o?"esriNormalizeByField":null,f=E(r),p=r.classBreakInfos.map((function(e){return{symbol:k(e.symbol,f,n),min:e.minValue,max:e.maxValue}})).sort((function(e,t){return e.min-t.min}));return{type:"interval",attributes:e.fields,field:s,fieldIndex:u,backgroundFillSymbol:k(a,f,n),defaultSymbol:k(r.defaultSymbol,f,n),intervals:p,normalizationField:r.normalizationField,normalizationTotal:r.normalizationTotal,normalizationType:c,isMaxInclusive:r.isMaxInclusive,stride:f.stride}}function D(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]&&arguments[3],l=[],u=r.backgroundFillSymbol,o={target:t,context:{mesh:!0},resultType:"string"};if(r.field&&"string"!=typeof r.field)throw new s.Z(Z,"Expected renderer.field to be a string",r);var c,f=_(e,(0,i.Z)((0,i.Z)({},o),{},{field:r.field,valueExpression:r.valueExpression})),p=f.field,d=f.fieldIndex,m=E(r),y=(0,a.Z)(r.uniqueValueInfos);try{for(y.s();!(c=y.n()).done;){var v=c.value;l.push({value:""+v.value,symbol:k(v.symbol,m,n)})}}catch(h){y.e(h)}finally{y.f()}return{type:"map",attributes:e.fields,field:p,fieldIndex:d,field2:_(e,(0,i.Z)((0,i.Z)({},o),{},{field:r.field2})).field,field3:_(e,(0,i.Z)((0,i.Z)({},o),{},{field:r.field3})).field,fieldDelimiter:r.fieldDelimiter,backgroundFillSymbol:k(u,m),defaultSymbol:k(r.defaultSymbol,m),map:l,stride:m.stride}}function H(e,t){return{type:"dictionary",renderer:t.toJSON(),stride:{fill:"default"}}}},42079:function(e,t,r){r.d(t,{G:function(){return v},J:function(){return m}});var n=r(37762),i=r(1413),a=r(15861),l=r(87757),s=r(17842),u=r(78915),o=r(691),c=r(94109),f=r(95857),p=r(98125),d={"simple-marker":1,"picture-marker":1,text:0,"simple-line":0,"simple-fill":0,"picture-fill":0,cim:1,"web-style":1};function m(e){if(!("visualVariables"in e))return 0;if(!e.hasVisualVariables("size"))return 0;var t=e.getVisualVariablesForType("size");if(!t[0])return 0;var r=t[0];if("outline"===r.target)return 0;if("stops"===r.transformationType)return r.stops.map((function(e){return e.size})).reduce(M,0);if("clamped-linear"===r.transformationType){var n,i;return n="number"==typeof r.maxSize?r.maxSize:r.maxSize.stops.map((function(e){return e.size})).reduce(M,0),i="number"==typeof r.minSize?r.minSize:r.minSize.stops.map((function(e){return e.size})).reduce(M,0),Math.max(n,i)}return"real-world-size"===r.transformationType?30:void 0}function y(e){return e.type in d}function v(e,t,r,n,i,a){return h.apply(this,arguments)}function h(){return h=(0,a.Z)(l.mark((function e(t,r,i,a,u,o){var c,f,p,d,y,v,h;return l.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t&&(!o||"cluster"!==o.type)){e.next=2;break}return e.abrupt("return",0);case 2:if("heatmap"!==t.type){e.next=4;break}return e.abrupt("return",Math.round(3*t.blurRadius));case 4:if("dot-density"!==t.type){e.next=6;break}return e.abrupt("return",0);case 6:if("dictionary"!==t.type){e.next=8;break}return e.abrupt("return","esriGeometryPoint"===r||"esriGeometryMultipoint"===r?100:200);case 8:c=t.getSymbols(),f=m(t),p=[],d=(0,n.Z)(c);try{for(d.s();!(y=d.n()).done;)v=y.value,p.push(F(v,f,i,r,a,u))}catch(l){d.e(l)}finally{d.f()}return e.next=13,Promise.all(p);case 13:return h=e.sent,e.abrupt("return",(0,s.F2)(h.reduce(M,0)));case 15:case"end":return e.stop()}}),e)}))),h.apply(this,arguments)}var g=[0,0,0,0];function b(e,t){return null==e?t:e}function x(e,t){return null==e.outline?t:b(e.outline.width,t)}var S={sdf:!0,code:99,metrics:c.eF.metrics,rect:new o.Z(0,0,24,24),page:0,textureBinding:2};function w(e){var t=e.text&&e.text.length;if(!t)return{glyphMosaicItems:[S]};for(var r=[],n=0;n<t;n++)r.push((0,i.Z)((0,i.Z)({},S),{},{code:e.text.charCodeAt(n)}));return{glyphMosaicItems:r}}function Z(e,t,r,n,i,a){return z.apply(this,arguments)}function z(){return z=(0,a.Z)(l.mark((function e(t,r,n,i,a,s){var o,c,d,m,y,v,h,S,z,F,V,M,k,I;return l.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("simple-marker"!==t.type){e.next=3;break}return o=Math.max(b(t.size,12),r),e.abrupt("return",E(t)+.707*o);case 3:if("picture-marker"!==t.type){e.next=6;break}return c=Math.max(b(t.height,12),r),d=b(t.width,12)*(c/b(t.height,12))/2,m=c/2,e.abrupt("return",E(t)+Math.sqrt(d*d+m*m));case 6:if("text"!==t.type){e.next=11;break}return y=w(t),(0,f.Q2)(g,t.toJSON(),y),v=Math.abs(g[0]),h=Math.abs(g[1]),S=g[2],z=g[3],e.abrupt("return",Math.max(v,h)+Math.max(S,z));case 11:if("simple-line"!==t.type){e.next=14;break}return F=t,V=Math.max(b(F.width,.75),r)/2,e.abrupt("return",F.marker?Math.max(6*F.width,2*r):V);case 14:if("simple-fill"!==t.type&&"picture-fill"!==t.type){e.next=16;break}return e.abrupt("return",Math.max(x(t,0),r)/2);case 16:if("cim"!==t.type){e.next=22;break}return M={geometryType:i,fields:a,spatialReference:s},k={type:"cim",rendererKey:0,data:t.data,maxVVSize:r},e.next=20,(0,p.B3)(k,M,n);case 20:return I=u.B$.getEnvelope(t.data,n),e.abrupt("return",I?Math.sqrt(I.width*I.width+I.height*I.height):0);case 22:if("web-style"!==t.type){e.next=35;break}return e.t1=Z,e.next=26,t.fetchCIMSymbol();case 26:e.t2=e.sent,e.t3=r,e.t4=n,e.t5=i,e.t6=a,e.t7=s,e.t0=(0,e.t1)(e.t2,e.t3,e.t4,e.t5,e.t6,e.t7),e.next=36;break;case 35:e.t0=0;case 36:return e.abrupt("return",e.t0);case 37:case"end":return e.stop()}}),e)}))),z.apply(this,arguments)}function F(e,t,r,n,i,a){return V.apply(this,arguments)}function V(){return(V=(0,a.Z)(l.mark((function e(t,r,n,i,a,s){return l.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!y(t)){e.next=8;break}return e.t1=Math,e.next=4,Z(t,r,n,i,a,s);case 4:e.t2=e.sent,e.t0=e.t1.min.call(e.t1,e.t2,75),e.next=9;break;case 8:e.t0=0;case 9:return e.abrupt("return",e.t0);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(e){var t=b(e.xoffset,0),r=b(e.yoffset,0);return Math.sqrt(t*t+r*r)}function M(e,t){return Math.max(e,t)}},65760:function(e,t,r){r.d(t,{a:function(){return p},t:function(){return d}});var n=r(93433),i=r(83878),a=r(59199),l=r(40181),s=r(25267);function u(e){return(0,i.Z)(e)||(0,a.Z)(e)||(0,l.Z)(e)||(0,s.Z)()}var o=r(32718),c=r(17842),f=o.Z.getLogger("esri.renderers.visualVariables.support.utils"),p=function(e){if(!("visualVariables"in e)||!e.visualVariables||!e.visualVariables.length)return e;var t=e.clone(),r=t.visualVariables.map((function(e){return m(e)?y(e):e}));return t.visualVariables=r,t};function d(e){return e.map((function(e){return m(e)?y(e.clone()):e}))}function m(e){return("size"===e.type||"color"===e.type||"opacity"===e.type)&&null!=e.stops}function y(e){return e.stops=function(e,t){return t.length<=8?t:(f.warn("Found ".concat(t.length," Visual Variable stops, but MapView only supports ").concat(8,". Displayed stops will be simplified.")),t.length>16?function(e,t){for(var r=u(t),n=r[0],i=r.slice(1),a=i.pop(),l=i[0].value,s=i[i.length-1].value,o=(s-l)/6,f=[],p=l;p<s;p+=o){for(var d=0;p>=i[d].value;)d++;var m=i[d],y=t[d-1],h=p-y.value,g=m.value===y.value?1:h/(m.value-y.value);if("color"===e){var b=i[d],x=t[d-1],S=b.color.clone();S.r=v(x.color.r,S.r,g),S.g=v(x.color.g,S.g,g),S.b=v(x.color.b,S.b,g),S.a=v(x.color.a,S.a,g),f.push({value:p,color:S,label:b.label})}else if("size"===e){var w=i[d],Z=t[d-1],z=(0,c.t_)(w.size),F=v((0,c.t_)(Z.size),z,g);f.push({value:p,size:F,label:w.label})}else{var V=i[d],E=v(t[d-1].opacity,V.opacity,g);f.push({value:p,opacity:E,label:V.label})}}return[n].concat(f,[a])}(e,t):function(e){for(var t=u(e),r=t[0],i=t.slice(1),a=i.pop();i.length>6;){for(var l=0,s=0,o=1;o<i.length;o++){var c=i[o-1],f=i[o],p=Math.abs(f.value-c.value);p>s&&(s=p,l=o)}i.splice(l,1)}return[r].concat((0,n.Z)(i),[a])}(t))}(e.type,e.stops),e}function v(e,t,r){return(1-r)*e+r*t}},95857:function(e,t,r){r.d(t,{I_:function(){return d},Q2:function(){return b},XA:function(){return x},Zu:function(){return y},ab:function(){return v},eT:function(){return g},y1:function(){return m},yA:function(){return h}});var n=r(29439),i=r(75746),a=r(92026),l=r(17842),s=r(80885),u=r(65156),o=r(76335),c=r(38999),f=r(94109),p=r(47975),d=512,m=50;function y(e,t){if(!t.isWrappable)return null;var r=(0,o.uS)(t),i=(0,n.Z)(r,2),a=i[0],l=i[1];return e[2]>l?[(0,u.Ue)([e[0],e[1],l,e[3]]),(0,u.Ue)([a,e[1],a+e[2]-l,e[3]])]:e[0]<a?[(0,u.Ue)([a,e[1],e[2],e[3]]),(0,u.Ue)([l-(a-e[0]),e[1],l,e[3]])]:null}function v(e){return"text"===e||"esriTS"===e}function h(e){return"simple-marker"===e||"picture-marker"===e||"esriSMS"===e||"esriPMS"===e}function g(e){switch((0,a.Wg)(e.geometry).type){case"point":case"multipoint":return 0;case"polyline":return 1;case"polygon":case"extent":return 2}return 0}function b(e,t,r){var n,a,s;if(!r||0===r.glyphMosaicItems.length)return e;var u=(0,i.E)(t.text)[1],o=r.glyphMosaicItems,d=(0,p.Nr)(o,u,{scale:(0,l.F2)(t.font.size)/f.Ex,angle:null!=(n=t.angle)?n:0,xOffset:null!=(a=t.xoffset)?a:0,yOffset:null!=(s=t.yoffset)?s:0,hAlign:(0,c.kH)(t.horizontalAlignment||"center"),vAlign:(0,c.b7)(t.verticalAlignment||"baseline"),maxLineWidth:Math.max(32,Math.min(t.lineWidth||512,512)),lineHeight:f.xm*Math.max(.25,Math.min(t.lineHeight||1,4)),decoration:t.font.decoration||"none",isCIM:!1}).bounds;return e[0]=(0,l.F2)(d.x-d.halfWidth),e[1]=(0,l.F2)(d.y-d.halfHeight),e[2]=(0,l.F2)(d.width),e[3]=(0,l.F2)(d.height),e}function x(e){if(!e)return null;var t=e.xmin,r=e.ymin,n=e.xmax,i=e.ymax,a=e.spatialReference;return new s.Z({rings:[[[t,r],[t,i],[n,i],[n,r],[t,r]]],spatialReference:a})}},20478:function(e,t,r){r.d(t,{aV:function(){return I},S1:function(){return E},os:function(){return M},yR:function(){return T}});var n,i=r(4942),a=r(1413),l=r(37762),s=r(10064),u=r(93169),o=r(32718),c=r(92026),f=r(9997),p=r(17590),d=r(53896),m=r(15671),y=r(43144),v=r(60136),h=r(29388),g=r(27366),b=r(84652),x=r(49861),S=(r(25243),r(69912)),w=r(31201),Z=r(80724),z=n=function(e){(0,v.Z)(r,e);var t=(0,h.Z)(r);function r(){return(0,m.Z)(this,r),t.apply(this,arguments)}return(0,y.Z)(r,[{key:"writeLevels",value:function(e,t,r){for(var n in e){var i=this.levels[n];return void(t.stops=i)}}},{key:"clone",value:function(){return new n({axis:this.axis,field:this.field,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,maxDataValue:this.maxDataValue,maxSize:(0,Z.iY)(this.maxSize)?this.maxSize.clone():this.maxSize,minDataValue:this.minDataValue,minSize:(0,Z.iY)(this.minSize)?this.minSize.clone():this.minSize,normalizationField:this.normalizationField,stops:this.stops&&this.stops.map((function(e){return e.clone()})),target:this.target,useSymbolValue:this.useSymbolValue,valueRepresentation:this.valueRepresentation,valueUnit:this.valueUnit,legendOptions:this.legendOptions&&this.legendOptions.clone(),levels:(0,b.d9)(this.levels)})}}]),r}(p.Z);(0,g._)([(0,x.Cb)()],z.prototype,"levels",void 0),(0,g._)([(0,w.c)("levels")],z.prototype,"writeLevels",null),z=n=(0,g._)([(0,S.j)("esri.views.2d.engine.LevelDependentSizeVariable")],z);var F=o.Z.getLogger("esri.views.2d.layers.support.clusterUtils");u.Z.add("esri-cluster-arcade-enabled",!0);var V=(0,u.Z)("esri-cluster-arcade-enabled"),E=function(e,t,r,n){var i=t.clone();if(!T(i))return i;if(r.fields){var a,s=(0,l.Z)(r.fields);try{for(s.s();!(a=s.n()).done;){var u=a.value;O(e,u)}}catch(p){s.e(p)}finally{s.f()}}if("visualVariables"in i){var o=(i.visualVariables||[]).filter((function(e){return"$view.scale"!==e.valueExpression})),f=M(o);o.forEach((function(t){"rotation"===t.type?t.field?t.field=C(e,t.field,"avg_angle"):t.valueExpression&&(t.field=R(e,t.valueExpression,"avg_angle"),t.valueExpression=null):t.normalizationField?(t.field=C(e,t.field,"norm",t.normalizationField),t.normalizationField=null):t.field?t.field=C(e,t.field,"avg"):(t.field=R(e,t.valueExpression,"avg"),t.valueExpression=null)})),(0,c.Wi)(f)&&!k(o)&&(o.push(I(r,n)),i.dynamicClusterSize=!0),i.visualVariables=o}switch(i.type){case"simple":break;case"unique-value":i.field?i.field=C(e,i.field,"mode"):i.valueExpression&&(i.field=R(e,i.valueExpression,"mode"),i.valueExpression=null);break;case"class-breaks":i.normalizationField?(i.field=C(e,i.field,"norm",i.normalizationField),i.normalizationField=null):i.field?i.field=C(e,i.field,"avg"):(i.field=R(e,i.valueExpression,"avg"),i.valueExpression=null)}return i},M=function(e){var t,r=(0,l.Z)(e);try{for(r.s();!(t=r.n()).done;){var n=t.value;if("size"===n.type)return n}}catch(i){r.e(i)}finally{r.f()}return null},k=function(e){var t,r=(0,l.Z)(e);try{for(r.s();!(t=r.n()).done;){if("cluster_count"===t.value.field)return!0}}catch(n){r.e(n)}finally{r.f()}return!1},I=function(e,t){var r=[new d.Z({value:0,size:0}),new d.Z({value:1})];if((0,c.Wi)(t))return new p.Z({field:"cluster_count",stops:[].concat(r,[new d.Z({value:2,size:0})])});var n=Object.keys(t).reduce((function(n,l){return(0,a.Z)((0,a.Z)({},n),{},(0,i.Z)({},l,[].concat(r,[new d.Z({value:Math.max(2,t[l].minValue),size:e.clusterMinSize}),new d.Z({value:Math.max(3,t[l].maxValue),size:e.clusterMaxSize})])))}),{});return new z({field:"cluster_count",levels:n})},T=function(e){var t=function(t){return F.error(new s.Z("Unsupported-renderer",t,{renderer:e}))};if("unique-value"===e.type){if(e.field2||e.field3)return t("FeatureReductionCluster does not support multi-field UniqueValueRenderers"),!1}else if("class-breaks"===e.type){if(e.normalizationField){var r=e.normalizationType;if("field"!==r)return t("FeatureReductionCluster does not support a normalizationType of ".concat(r)),!1}}else if("simple"!==e.type)return t("FeatureReductionCluster does not support renderers of type ".concat(e.type)),!1;if(!V){if("valueExpression"in e&&e.valueExpression)return t("FeatureReductionCluster does not currently support renderer.valueExpression. Support will be added in a future release"),!1;if(("visualVariables"in e&&e.visualVariables||[]).some((function(e){return!(!("valueExpression"in e)||!e.valueExpression)})))return t("FeatureReductionCluster does not currently support visualVariables with a valueExpression. Support will be added in a future release"),!1}return!0};function O(e,t){var r=t.name,n=t.outStatistic,i=n.onStatisticField,a=n.onStatisticValueExpression,l=n.statisticType;if(a){var u=(0,f.F)(a.toLowerCase());e.push({name:r,outStatistic:{onStatisticField:u,onStatisticValueExpression:a,statisticType:l}})}else i?e.push({name:r,outStatistic:{onStatisticField:i,statisticType:l}}):F.error(new s.Z("mapview-unsupported-field","Unable to handle field",{field:t}))}function R(e,t,r){var n=(0,f.F)(t),i="mode"===r?"cluster_type_".concat(n):"cluster_avg_".concat(n);return e.some((function(e){return e.name===i}))||e.push({name:i,outStatistic:{onStatisticField:n,onStatisticValueExpression:t,statisticType:r}}),i}function C(e,t,r,n){if("cluster_count"===t||e.some((function(e){return e.name===t})))return t;var i=function(e,t,r){switch(e){case"avg":case"avg_angle":return"cluster_avg_".concat(t);case"mode":return"cluster_type_".concat(t);case"norm":var n=r,i=t.toLowerCase()+",norm:field,"+n.toLowerCase();return"cluster_avg_"+(0,f.F)(i)}}(r,t,n);return e.some((function(e){return e.name===i}))||("norm"===r?e.push({name:i,outStatistic:{onStatisticField:t,onStatisticNormalizationField:n,statisticType:r}}):e.push({name:i,outStatistic:{onStatisticField:t,statisticType:r}})),i}},31666:function(e,t,r){r.d(t,{JV:function(){return a},oq:function(){return i}});var n=new(r(43404).Xn)({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryMultiPatch:"multipatch",mesh:"mesh"});function i(e){return n.toJSON(e)}function a(e){var t=e.rasterInfo,r=t.bandCount,n=t.attributeTable,i=t.colormap,a=t.pixelType;return 1===r&&(null!=n||null!=i||"u8"===a||"s8"===a)}}}]);
//# sourceMappingURL=916.615a80c3.chunk.js.map