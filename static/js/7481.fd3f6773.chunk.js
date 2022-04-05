"use strict";(self.webpackChunkreact_sisp=self.webpackChunkreact_sisp||[]).push([[7481],{77095:function(e,t,r){r.d(t,{hN:function(){return G},P0:function(){return Z},cW:function(){return T}});var n=r(37762),i=r(15861),s=r(87757),a=r(10064),u=r(34066),o=r(66504);var l=r(77981),c=r(92975);function f(e,t){return e?t?4:3:t?3:2}function p(e,t,r,n,i,s){var a=f(i,s),u=n.coords,o=n.lengths;if(!o)return!1;for(var l=0,c=0;l<o.length;l++,c+=a)if(!h(e,t,r,u[c],u[c+1]))return!1;return!0}function h(e,t,r,i,s){if(!e)return!1;var a,u=f(t,r),o=e.coords,l=e.lengths,c=!1,p=0,h=(0,n.Z)(l);try{for(h.s();!(a=h.n()).done;){var d=a.value;c=y(c,o,u,p,d,i,s),p+=d*u}}catch(v){h.e(v)}finally{h.f()}return c}function y(e,t,r,n,i,s,a){for(var u=e,o=n,l=n,c=n+i*r;l<c;l+=r){(o=l+r)===c&&(o=n);var f=t[l],p=t[l+1],h=t[o],y=t[o+1];(p<a&&y>=a||y<a&&p>=a)&&f+(a-p)/(y-p)*(h-f)<s&&(u=!u)}return u}var d=r(83406),v=r(80457),m=r(19995),b=r(31904),_="feature-store:unsupported-query",w={esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"intersects",esriSpatialRelIndexIntersects:null,esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:null},g={esriSpatialRelIntersects:!0,esriSpatialRelContains:!0,esriSpatialRelWithin:!0,esriSpatialRelCrosses:!0,esriSpatialRelDisjoint:!0,esriSpatialRelTouches:!0,esriSpatialRelOverlaps:!0,esriSpatialRelEnvelopeIntersects:!0,esriSpatialRelIndexIntersects:!1,esriSpatialRelRelation:!1},S={esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!0},R={esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!1};function x(e){return!0===g[e]}function I(e){return!0===S[(0,l.Ji)(e)]}function k(e){return!0===R[e]}function T(e,t,n,i,s){if((0,l.oU)(t)&&"esriGeometryPoint"===n&&("esriSpatialRelIntersects"===e||"esriSpatialRelContains"===e)){var a=(0,d.Uy)(new v.Z,t,!1,!1);return Promise.resolve((function(e){return function(e,t,r,n){return h(e,t,r,n.coords[0],n.coords[1])}(a,!1,!1,e)}))}if((0,l.oU)(t)&&"esriGeometryMultipoint"===n){var c=(0,d.Uy)(new v.Z,t,!1,!1);if("esriSpatialRelContains"===e)return Promise.resolve((function(e){return p(c,!1,!1,e,i,s)}))}if((0,l.YX)(t)&&"esriGeometryPoint"===n&&("esriSpatialRelIntersects"===e||"esriSpatialRelContains"===e))return Promise.resolve((function(e){return(0,u.aV)(t,(0,b.Op)(n,i,s,e))}));if((0,l.YX)(t)&&"esriGeometryMultipoint"===n&&"esriSpatialRelContains"===e)return Promise.resolve((function(e){return(0,u.lQ)(t,(0,b.Op)(n,i,s,e))}));if((0,l.YX)(t)&&"esriSpatialRelIntersects"===e){var f=function(e){return"mesh"===e?o.h_:(0,o.IY)(e)}(n);return Promise.resolve((function(e){return f(t,(0,b.Op)(n,i,s,e))}))}return Promise.all([r.e(9058),r.e(309)]).then(r.bind(r,50309)).then((function(r){var a=r[w[e]].bind(null,t.spatialReference,t);return function(e){return a((0,b.Op)(n,i,s,e))}}))}function Z(e,t,r){return F.apply(this,arguments)}function F(){return F=(0,i.Z)(s.mark((function e(t,r,n){var i,u;return s.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=t.spatialRel,!(u=t.geometry)){e.next=11;break}if(x(i)){e.next=4;break}throw new a.Z(_,"Unsupported query spatial relationship",{query:t});case 4:if(!(0,c.JY)(u.spatialReference)||!(0,c.JY)(n)){e.next=11;break}if(I(u)){e.next=7;break}throw new a.Z(_,"Unsupported query geometry type",{query:t});case 7:if(k(r)){e.next=9;break}throw new a.Z(_,"Unsupported layer geometry type",{query:t});case 9:if(!t.outSR){e.next=11;break}return e.abrupt("return",(0,m._W)(t.geometry&&t.geometry.spatialReference,t.outSR));case 11:case"end":return e.stop()}}),e)}))),F.apply(this,arguments)}function G(e){if((0,l.YX)(e))return!0;if((0,l.oU)(e)){var t,r=(0,n.Z)(e.rings);try{for(r.s();!(t=r.n()).done;){var i=t.value;if(5!==i.length)return!1;if(i[0][0]!==i[1][0]||i[0][0]!==i[4][0]||i[2][0]!==i[3][0]||i[0][1]!==i[3][1]||i[0][1]!==i[4][1]||i[1][1]!==i[2][1])return!1}}catch(s){r.e(s)}finally{r.f()}return!0}return!1}},20311:function(e,t,r){function n(e,t){if(!e)return null;var r=t.featureAdapter,n=e.startTimeField,i=e.endTimeField,s=Number.POSITIVE_INFINITY,a=Number.NEGATIVE_INFINITY;if(n&&i)t.forEach((function(e){var t=r.getAttribute(e,n),u=r.getAttribute(e,i);null==t||isNaN(t)||(s=Math.min(s,t)),null==u||isNaN(u)||(a=Math.max(a,u))}));else{var u=n||i;t.forEach((function(e){var t=r.getAttribute(e,u);null==t||isNaN(t)||(s=Math.min(s,t),a=Math.max(a,t))}))}return{start:s,end:a}}function i(e,t,r){if(!t||!e)return null;var n=e.startTimeField,i=e.endTimeField;if(!n&&!i)return null;var s=t.start,a=t.end;return null===s&&null===a?null:void 0===s&&void 0===a?function(){return!1}:n&&i?function(e,t,r,n,i){return null!=n&&null!=i?function(s){var a=e.getAttribute(s,t),u=e.getAttribute(s,r);return(null==a||a<=i)&&(null==u||u>=n)}:null!=n?function(t){var i=e.getAttribute(t,r);return null==i||i>=n}:null!=i?function(r){var n=e.getAttribute(r,t);return null==n||n<=i}:void 0}(r,n,i,s,a):function(e,t,r,n){return null!=r&&null!=n&&r===n?function(n){return e.getAttribute(n,t)===r}:null!=r&&null!=n?function(i){var s=e.getAttribute(i,t);return s>=r&&s<=n}:null!=r?function(n){return e.getAttribute(n,t)>=r}:null!=n?function(r){return e.getAttribute(r,t)<=n}:void 0}(r,n||i,s,a)}r.d(t,{R:function(){return n},y:function(){return i}})},31904:function(e,t,r){r.d(t,{EG:function(){return g},Op:function(){return S},S2:function(){return E},Up:function(){return R},j6:function(){return I},vF:function(){return v}});var n=r(15861),i=r(87757),s=r(43404),a=r(92026),u=r(68860),o=r(94446),l=r(77981),c=r(64455),f=r(92975),p=r(83406),h=r(80457),y=r(19995),d=new s.Xn({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"}),v=Object.freeze({}),m=new h.Z,b=new h.Z,_=new h.Z,w={esriGeometryPoint:p.fQ,esriGeometryPolyline:p.J6,esriGeometryPolygon:p.eG,esriGeometryMultipoint:p.Iv};function g(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:e.hasZ,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:e.hasM;if((0,a.Wi)(t))return null;var s=e.hasZ&&n,u=e.hasM&&i;if(r){var o=(0,p.Nh)(_,t,e.hasZ,e.hasM,"esriGeometryPoint",r,n,i);return(0,p.fQ)(o,s,u)}return(0,p.fQ)(t,s,u)}function S(e,t,r,n,i,s){var u=arguments.length>6&&void 0!==arguments[6]?arguments[6]:t,o=arguments.length>7&&void 0!==arguments[7]?arguments[7]:r,l=t&&u,c=r&&o,f=(0,a.pC)(n)?"coords"in n?n:n.geometry:null;if((0,a.Wi)(f))return null;if(i){var h=(0,p.zj)(b,f,t,r,e,i,u,o);return s&&(h=(0,p.Nh)(_,h,l,c,e,s)),w[e](h,l,c)}if(s){var y=(0,p.Nh)(_,f,t,r,e,s,u,o);return w[e](y,l,c)}return(0,p.hY)(m,f,t,r,u,o),w[e](m,l,c)}function R(e,t,r){return x.apply(this,arguments)}function x(){return(x=(0,n.Z)(i.mark((function e(t,r,n){var s,a,u,o,l,c,f,p;return i.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s=t.outFields,a=t.orderByFields,u=t.groupByFieldsForStatistics,o=t.outStatistics,s)for(l=0;l<s.length;l++)s[l]=s[l].trim();if(a)for(c=0;c<a.length;c++)a[c]=a[c].trim();if(u)for(f=0;f<u.length;f++)u[f]=u[f].trim();if(o)for(p=0;p<o.length;p++)o[p].onStatisticField&&(o[p].onStatisticField=o[p].onStatisticField.trim());return e.abrupt("return",(t.geometry&&!t.outSR&&(t.outSR=t.geometry.spatialReference),I(t,r,n)));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(e,t,r){return k.apply(this,arguments)}function k(){return(k=(0,n.Z)(i.mark((function e(t,r,n){var s,u,f,p,h,d;return i.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",null);case 2:if(s=t.where,t.where=s=s&&s.trim(),(!s||/^1 *= *1$/.test(s)||r&&r===s)&&(t.where=null),t.geometry){e.next=5;break}return e.abrupt("return",t);case 5:return e.next=7,T(t);case 7:return u=e.sent,t.distance=0,t.units=null,"esriSpatialRelEnvelopeIntersects"===t.spatialRel&&(f=t.geometry.spatialReference,(u=(0,o.aO)(u)).spatialReference=f),t.geometry=u,e.next=12,(0,y._W)(u.spatialReference,n);case 12:return e.next=14,(0,c.aX)((0,l.im)(u));case 14:if(p=e.sent[0],!(0,a.Wi)(p)){e.next=17;break}throw v;case 17:return h=p.toJSON(),e.next=20,(0,y.iV)(h,h.spatialReference,n);case 20:if(d=e.sent){e.next=23;break}throw v;case 23:return e.abrupt("return",(d.spatialReference=n,t.geometry=d,t));case 24:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(e){return Z.apply(this,arguments)}function Z(){return(Z=(0,n.Z)(i.mark((function e(t){var r,n,s,a,o,l;return i.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.geometry,n=t.distance,s=t.units,null!=n&&!("vertexAttributes"in r)){e.next=3;break}return e.abrupt("return",r);case 3:if(a=r.spatialReference,o=s?d.fromJSON(s):(0,u.qE)(a),!a||!(0,f.sT)(a)&&!(0,f.sS)(a)){e.next=9;break}e.t0=r,e.next=12;break;case 9:return e.next=11,(0,y._W)(a,f.Zn).then((function(){return(0,y.iV)(r,f.Zn)}));case 11:e.t0=e.sent;case 12:return l=e.t0,e.next=15,F();case 15:return e.t1=e.sent,e.abrupt("return",(0,e.t1)(l.spatialReference,l,n,o));case 17:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function F(){return G.apply(this,arguments)}function G(){return(G=(0,n.Z)(i.mark((function e(){return i.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([r.e(9058),r.e(309)]).then(r.bind(r,50309));case 2:return e.abrupt("return",e.sent.geodesicBuffer);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(e){return e&&N in e?JSON.parse(JSON.stringify(e,O)):e}var N="_geVersion",O=function(e,t){return e!==N?t:void 0}},37481:function(e,t,r){r.r(t),r.d(t,{default:function(){return R}});var n=r(15861),i=r(37762),s=r(15671),a=r(43144),u=r(87757),o=r(10064),l=r(32718),c=r(92026),f=r(65156),p=r(376),h=r(77095),y=r(20311),d=r(31904),v=r(21149),m=r(36876),b=l.Z.getLogger("esri.views.2d.layers.features.support.whereUtils"),_={getAttribute:function(e,t){return e.field(t)}};function w(e,t){return g.apply(this,arguments)}function g(){return g=(0,n.Z)(u.mark((function e(t,n){var i,s,a;return u.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.e(8562).then(r.bind(r,48562));case 2:return i=e.sent,e.prev=3,(s=i.WhereClause.create(t,n)).isStandardized||(a=new o.Z("mapview - bad input","Unable to apply filter's definition expression, as expression is not standardized.",s),b.error(a)),e.abrupt("return",(function(e){var t=e.readArcadeFeature();return s.testFeature(t,_)}));case 9:return e.prev=9,e.t0=e.catch(3),e.abrupt("return",(b.warn("mapview-bad-where-clause","Encountered an error when evaluating where clause",t),function(e){return!0}));case 12:case"end":return e.stop()}}),e,null,[[3,9]])}))),g.apply(this,arguments)}var S=l.Z.getLogger("esri.views.2d.layers.features.controllers.FeatureFilter"),R=function(){function e(t){(0,s.Z)(this,e),this._geometryBounds=(0,f.Ue)(),this._idToVisibility=new Map,this._serviceInfo=t}return(0,a.Z)(e,[{key:"hash",get:function(){return this._hash}},{key:"check",value:function(e){return this._applyFilter(e)}},{key:"clear",value:function(){var e=this._resetAllHiddenIds();return this.update(),{show:e,hide:[]}}},{key:"invalidate",value:function(){var e=this;this._idToVisibility.forEach((function(t,r){e._idToVisibility.set(r,0)}))}},{key:"setKnownIds",value:function(e){var t,r=(0,i.Z)(e);try{for(r.s();!(t=r.n()).done;){var n=t.value;this._idToVisibility.set(n,1)}}catch(s){r.e(s)}finally{r.f()}}},{key:"setTrue",value:function(e){var t=this,r=[],n=[],i=new Set(e);return this._idToVisibility.forEach((function(e,s){var a=!!(1&t._idToVisibility.get(s)),u=i.has(s);!a&&u?r.push(s):a&&!u&&n.push(s),t._idToVisibility.set(s,u?3:0)})),{show:r,hide:n}}},{key:"createQuery",value:function(){var e=this.geometry,t=this.spatialRel,r=this.where,n=this.timeExtent,i=this.objectIds;return v.Z.fromJSON({geometry:e,spatialRel:t,where:r,timeExtent:n,objectIds:i})}},{key:"update",value:function(){var e=(0,n.Z)(u.mark((function e(t,r){var n;return u.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this._hash=JSON.stringify(t),e.next=3,(0,d.j6)(t,null,r);case 3:return n=e.sent,e.next=6,Promise.all([this._setGeometryFilter(n),this._setIdFilter(n),this._setAttributeFilter(n),this._setTimeFilter(n)]);case 6:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"_setAttributeFilter",value:function(){var e=(0,n.Z)(u.mark((function e(t){return u.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t&&t.where){e.next=2;break}return e.abrupt("return",(this._clause=null,void(this.where=null)));case 2:return e.next=4,w(t.where,this._serviceInfo.fieldsIndex);case 4:this._clause=e.sent,this.where=t.where;case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_setIdFilter",value:function(e){this._idsToShow=e&&e.objectIds&&new Set(e.objectIds),this._idsToHide=e&&e.hiddenIds&&new Set(e.hiddenIds),this.objectIds=e&&e.objectIds}},{key:"_setGeometryFilter",value:function(){var e=(0,n.Z)(u.mark((function e(t){var r,n,i;return u.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t&&t.geometry){e.next=2;break}return e.abrupt("return",(this._spatialQueryOperator=null,this.geometry=null,void(this.spatialRel=null)));case 2:return r=t.geometry,n=t.spatialRel||"esriSpatialRelIntersects",e.next=6,(0,h.cW)(n,r,this._serviceInfo.geometryType,this._serviceInfo.hasZ,this._serviceInfo.hasM);case 6:i=e.sent,(0,p.$P)(this._geometryBounds,r),this._spatialQueryOperator=i,this.geometry=r,this.spatialRel=n;case 8:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_setTimeFilter",value:function(e){if(this.timeExtent=this._timeOperator=null,e&&e.timeExtent)if(this._serviceInfo.timeInfo)this.timeExtent=e.timeExtent,this._timeOperator=(0,y.y)(this._serviceInfo.timeInfo,e.timeExtent,m.k);else{var t=new o.Z("feature-layer-view:time-filter-not-available","Unable to apply time filter, as layer doesn't have time metadata.",e.timeExtent);S.error(t)}}},{key:"_applyFilter",value:function(e){return this._filterByGeometry(e)&&this._filterById(e)&&this._filterByTime(e)&&this._filterByExpression(e)}},{key:"_filterByExpression",value:function(e){return!this.where||this._clause(e)}},{key:"_filterById",value:function(e){return(!this._idsToHide||!this._idsToHide.size||!this._idsToHide.has(e.getObjectId()))&&(!this._idsToShow||!this._idsToShow.size||this._idsToShow.has(e.getObjectId()))}},{key:"_filterByGeometry",value:function(e){if(!this.geometry)return!0;var t=e.readHydratedGeometry();return!!t&&this._spatialQueryOperator(t)}},{key:"_filterByTime",value:function(e){return!(0,c.pC)(this._timeOperator)||this._timeOperator(e)}},{key:"_resetAllHiddenIds",value:function(){var e=this,t=[];return this._idToVisibility.forEach((function(r,n){1&r||(e._idToVisibility.set(n,1),t.push(n))})),t}}]),e}()}}]);
//# sourceMappingURL=7481.fd3f6773.chunk.js.map