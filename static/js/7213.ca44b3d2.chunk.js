"use strict";(self.webpackChunkreact_sisp=self.webpackChunkreact_sisp||[]).push([[7213],{70804:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(71002),a=n(89611),i=n(60136);function s(){s=function(e,t){return new n(e,void 0,t)};var e=RegExp.prototype,t=new WeakMap;function n(e,r,i){var s=new RegExp(e,r);return t.set(s,i||t.get(e)),(0,a.Z)(s,n.prototype)}function o(e,n){var r=t.get(n);return Object.keys(r).reduce((function(t,n){return t[n]=e[r[n]],t}),Object.create(null))}return(0,i.Z)(n,RegExp),n.prototype.exec=function(t){var n=e.exec.call(this,t);return n&&(n.groups=o(n,this)),n},n.prototype[Symbol.replace]=function(n,a){if("string"==typeof a){var i=t.get(this);return e[Symbol.replace].call(this,n,a.replace(/\$<([^>]+)>/g,(function(e,t){return"$"+i[t]})))}if("function"==typeof a){var s=this;return e[Symbol.replace].call(this,n,(function(){var e=arguments;return"object"!=(0,r.Z)(e[e.length-1])&&(e=[].slice.call(e)).push(o(e,s)),a.apply(this,e)}))}return e[Symbol.replace].call(this,n,a)},s.apply(this,arguments)}},47615:function(e,t,n){n.d(t,{O3:function(){return T},lG:function(){return G},my:function(){return P},q9:function(){return y}});var r=n(29439),a=n(37762),i=n(87757),s=n(10064),o=n(3182),u=n(80457),c=n(80031),l=i.mark(m),p=i.mark(g),f=i.mark(h),d={LineString:"esriGeometryPolyline",MultiLineString:"esriGeometryPolyline",MultiPoint:"esriGeometryMultipoint",Point:"esriGeometryPoint",Polygon:"esriGeometryPolygon",MultiPolygon:"esriGeometryPolygon"};function y(e){return d[e]}function m(e){var t,n,r;return i.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:i.t0=e.type,i.next="Feature"===i.t0?3:"FeatureCollection"===i.t0?6:25;break;case 3:return i.next=5,e;case 5:return i.abrupt("break",25);case 6:t=(0,a.Z)(e.features),i.prev=7,t.s();case 9:if((n=t.n()).done){i.next=17;break}if(r=n.value,i.t1=r,!i.t1){i.next=15;break}return i.next=15,r;case 15:i.next=9;break;case 17:i.next=22;break;case 19:i.prev=19,i.t2=i.catch(7),t.e(i.t2);case 22:return i.prev=22,t.f(),i.finish(22);case 25:case"end":return i.stop()}}),l,null,[[7,19,22,25]])}function g(e){var t,n,r,s,o,u,c,l,f;return i.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(e){i.next=2;break}return i.abrupt("return",null);case 2:i.t0=e.type,i.next="Point"===i.t0?5:"LineString"===i.t0||"MultiPoint"===i.t0?8:"MultiLineString"===i.t0||"Polygon"===i.t0?10:"MultiPolygon"===i.t0?27:58;break;case 5:return i.next=7,e.coordinates;case 7:return i.abrupt("break",58);case 8:return i.delegateYield(e.coordinates,"t1",9);case 9:return i.abrupt("break",58);case 10:t=(0,a.Z)(e.coordinates),i.prev=11,t.s();case 13:if((n=t.n()).done){i.next=18;break}return r=n.value,i.delegateYield(r,"t2",16);case 16:i.next=13;break;case 18:i.next=23;break;case 20:i.prev=20,i.t3=i.catch(11),t.e(i.t3);case 23:return i.prev=23,t.f(),i.finish(23);case 26:return i.abrupt("break",58);case 27:s=(0,a.Z)(e.coordinates),i.prev=28,s.s();case 30:if((o=s.n()).done){i.next=50;break}u=o.value,c=(0,a.Z)(u),i.prev=33,c.s();case 35:if((l=c.n()).done){i.next=40;break}return f=l.value,i.delegateYield(f,"t4",38);case 38:i.next=35;break;case 40:i.next=45;break;case 42:i.prev=42,i.t5=i.catch(33),c.e(i.t5);case 45:return i.prev=45,c.f(),i.finish(45);case 48:i.next=30;break;case 50:i.next=55;break;case 52:i.prev=52,i.t6=i.catch(28),s.e(i.t6);case 55:return i.prev=55,s.f(),i.finish(55);case 58:case"end":return i.stop()}}),p,null,[[11,20,23,26],[28,52,55,58],[33,42,45,48]])}function h(e){var t,n,r,s,c,l,p,d,m,g,h,v,b,w=arguments;return i.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:t=w.length>1&&void 0!==w[1]?w[1]:{},n=t.geometryType,r=t.objectIdField,s=(0,a.Z)(e),i.prev=3,s.s();case 5:if((c=s.n()).done){i.next=18;break}if(l=c.value,d=l.geometry,m=l.properties,g=l.id,!d||y(d.type)===n){i.next=10;break}return i.abrupt("continue",16);case 10:return v=null!=(p=(h=m||{})[r])?p:null,r&&null!=g&&!h[r]&&(h[r]=v=g),b=new o.ZP(d?k(new u.Z,d,t):null,h,null,v),i.next=16,b;case 16:i.next=5;break;case 18:i.next=23;break;case 20:i.prev=20,i.t0=i.catch(3),s.e(i.t0);case 23:return i.prev=23,s.f(),i.finish(23);case 26:case"end":return i.stop()}}),f,null,[[3,20,23,26]])}function v(e){var t,n=(0,a.Z)(e);try{for(n.s();!(t=n.n()).done;){if(t.value.length>2)return!0}}catch(r){n.e(r)}finally{n.f()}return!1}function b(e){for(var t=0,n=0;n<e.length;n++){var r=e[n],a=e[(n+1)%e.length];t+=r[0]*a[1]-a[0]*r[1]}return t<=0}function w(e){var t=e[0],n=e[e.length-1];return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]||e.push(t),e}function k(e,t,n){switch(t.type){case"LineString":case"MultiPoint":return function(e,t,n){return F(e,t.coordinates,n),e}(e,t,n);case"MultiLineString":return function(e,t,n){var r,i=(0,a.Z)(t.coordinates);try{for(i.s();!(r=i.n()).done;){F(e,r.value,n)}}catch(s){i.e(s)}finally{i.f()}return e}(e,t,n);case"MultiPolygon":return function(e,t,n){var r,i=(0,a.Z)(t.coordinates);try{for(i.s();!(r=i.n()).done;){var s=r.value;x(e,s[0],n);for(var o=1;o<s.length;o++)Z(e,s[o],n)}}catch(u){i.e(u)}finally{i.f()}return e}(e,t,n);case"Point":return function(e,t,n){return j(e,t.coordinates,n),e}(e,t,n);case"Polygon":return function(e,t,n){var r=t.coordinates;x(e,r[0],n);for(var a=1;a<r.length;a++)Z(e,r[a],n);return e}(e,t,n)}}function x(e,t,n){var r=w(t);!function(e){return!b(e)}(r)?F(e,r,n):I(e,r,n)}function Z(e,t,n){var r=w(t);!function(e){return b(e)}(r)?F(e,r,n):I(e,r,n)}function F(e,t,n){var r,i=(0,a.Z)(t);try{for(i.s();!(r=i.n()).done;){j(e,r.value,n)}}catch(s){i.e(s)}finally{i.f()}e.lengths.push(t.length)}function I(e,t,n){for(var r=t.length-1;r>=0;r--)j(e,t[r],n);e.lengths.push(t.length)}function j(e,t,n){var a=(0,r.Z)(t,3),i=a[0],s=a[1],o=a[2];e.coords.push(i,s),n.hasZ&&e.coords.push(o||0)}function S(e){switch(typeof e){case"string":return"esriFieldTypeString";case"number":return"esriFieldTypeDouble";default:return"unknown"}}function T(e){if(!e)throw new s.Z("geojson-layer:empty","GeoJSON data is empty");if("Feature"!==e.type&&"FeatureCollection"!==e.type)throw new s.Z("geojson-layer:unsupported-geojson-object","missing or not supported GeoJSON object type",{data:e});var t=e.crs;if(t){var n="string"==typeof t?t:"name"===t.type?t.properties.name:"EPSG"===t.type?t.properties.code:null,r=new RegExp(".*(CRS84H?|4326)$","i");if(!n||!r.test(n))throw new s.Z("geojson-layer:unsupported-crs","unsupported GeoJSON 'crs' member",{crs:t})}}function P(e){var t,n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=[],s=new Set,o=new Set,u=!1,l=null,p=!1,f=r.geometryType,d=void 0===f?null:f,h=!1,b=(0,a.Z)(m(e));try{var w=function(){var e=n.value,r=e.geometry,a=e.properties,c=e.id;if((!r||(d||(d=y(r.type)),y(r.type)===d))&&(u||(u=v(g(r))),p||(p=null!=c)&&(t=typeof c,l=Object.keys(a).filter((function(e){return a[e]===c}))),p&&null!=c&&(l.length>1?l=l.filter((function(e){return a[e]===c})):1===l.length&&(l=a[l[0]]===c?l:[])),!h&&a)){var f=!0;for(var m in a)if(!s.has(m)){var b=a[m];if(null!=b){var w=S(b);"unknown"!==w?(o.delete(m),s.add(m),i.push({name:m,alias:m,type:w})):o.add(m)}else f=!1,o.add(m)}h=f}};for(b.s();!(n=b.n()).done;)w()}catch(I){b.e(I)}finally{b.f()}var k=l&&1===l.length&&l[0]||null;if(k){var x,Z=(0,a.Z)(i);try{for(Z.s();!(x=Z.n()).done;){var F=x.value;if(F.name===k&&(0,c.H7)(F)){F.type="esriFieldTypeOID";break}}}catch(I){Z.e(I)}finally{Z.f()}}return{fields:i,geometryType:d,hasZ:u,objectIdFieldName:k,objectIdFieldType:t,unknownFields:Array.from(o)}}function G(e,t){return Array.from(h(m(e),t))}},63543:function(e,t,n){n.d(t,{Dm:function(){return l},Hq:function(){return p},MS:function(){return f},bU:function(){return c}});var r=n(4942),a=n(1413),i=n(93169),s=n(84652),o=n(60480),u=n(76115);function c(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?u.I4:"esriGeometryPolyline"===e?u.ET:u.lF}}}function l(e,t){if((0,i.Z)("esri-csp-restrictions"))return function(){return(0,a.Z)((0,r.Z)({},t,null),e)};try{var n="this.".concat(t," = null;");for(var s in e)n+="this".concat(s.includes(".")?'["'.concat(s,'"]'):".".concat(s)," = ").concat(JSON.stringify(e[s]),";");var o=new Function(n);return function(){return new o}}catch(u){return function(){return(0,a.Z)((0,r.Z)({},t,null),e)}}}function p(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return[{name:"New Feature",description:"",prototype:{attributes:(0,s.d9)(e)}}]}function f(e,t){return{attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:t,supportsDelete:t,supportsEditing:t,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAttachments:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:t,supportsExceedsLimitStatistics:!0},query:o.g,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0},editing:{supportsGeometryUpdate:t,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1}}}},67213:function(e,t,n){n.d(t,{$9:function(){return Z},G4:function(){return T},Lu:function(){return x},WW:function(){return q},d:function(){return W},eS:function(){return O},gp:function(){return G},j:function(){return j},w9:function(){return F},yN:function(){return N}});var r=n(37762),a=n(1413),i=n(70804),s=n(15861),o=n(87757),u=(n(59486),n(76200)),c=n(10064),l=n(32718),p=n(92026),f=n(92975),d=n(81753),y=n(83406),m=n(6908),g=n(47615),h=n(63543),v=n(52410),b=n(85249),w=n(78952),k=l.Z.getLogger("esri.layers.graphics.sources.ogcfeature"),x="http://www.opengis.net/def/crs/",Z="".concat(x,"OGC/1.3/CRS84");function F(e,t){return I.apply(this,arguments)}function I(){return I=(0,s.Z)(o.mark((function e(t,n){var i,s,l,f,d,y,m,w,x,Z,F,I,j,S,T,P,G,M,O,C,W,N=arguments;return o.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=N.length>2&&void 0!==N[2]?N[2]:{},s=N.length>3&&void 0!==N[3]?N[3]:5,l=t.links,f=B(l,"items","application/geo+json")||B(l,"http://www.opengis.net/def/rel/ogc/1.0/items","application/geo+json"),!(0,p.Wi)(f)){e.next=5;break}throw new c.Z("ogc-feature-layer:missing-items-page","Missing items url");case 5:return e.next=7,(0,u.default)(f.href,{signal:i.signal,query:(0,a.Z)((0,a.Z)({limit:s},i.customParameters),{},{token:i.apiKey}),headers:{accept:"application/geo+json"}});case 7:return d=e.sent,y=d.data,e.next=11,(0,g.O3)(y);case 11:if(m=(0,g.my)(y,{geometryType:n.geometryType}),w=n.fields||m.fields||[],x=null!=n.hasZ?n.hasZ:m.hasZ,Z=m.geometryType,F=n.objectIdField||m.objectIdFieldName||"OBJECTID",I=n.timeInfo,j=w.find((function(e){return e.name===F}))){e.next=20;break}if(m.objectIdFieldType){e.next=17;break}throw new c.Z("ogc-feature-layer:missing-feature-id","Collection geojson require a feature id as a unique identifier");case 17:w.unshift({name:F,alias:F,type:"esriFieldTypeOID",editable:!1,nullable:!1}),e.next=21;break;case 20:j.type="esriFieldTypeOID",j.editable=!1,j.nullable=!1;case 21:F!==m.objectIdFieldName&&(S=w.find((function(e){return e.name===m.objectIdFieldName})))&&(S.type="esriFieldTypeInteger"),w===m.fields&&m.unknownFields.length>0&&k.warn({name:"ogc-feature-layer:unknown-field-types",message:"Some fields types couldn't be inferred from the features and were dropped",details:{unknownFields:m.unknownFields}}),T=(0,r.Z)(w),e.prev=24,T.s();case 26:if((P=T.n()).done){e.next=34;break}if(null==(G=P.value).name&&(G.name=G.alias),null==G.alias&&(G.alias=G.name),"esriFieldTypeOID"!==G.type&&"esriFieldTypeGlobalID"!==G.type&&(G.editable=null==G.editable||!!G.editable,G.nullable=null==G.nullable||!!G.nullable),G.name){e.next=30;break}throw new c.Z("ogc-feature-layer:invalid-field-name","field name is missing",{field:G});case 30:if(-1!==b.v.jsonValues.indexOf(G.type)){e.next=32;break}throw new c.Z("ogc-feature-layer:invalid-field-type",'invalid type for field "'.concat(G.name,'"'),{field:G});case 32:e.next=26;break;case 34:e.next=39;break;case 36:e.prev=36,e.t0=e.catch(24),T.e(e.t0);case 39:return e.prev=39,T.f(),e.finish(39);case 42:return I&&(M=new v.Z(w),I.startTimeField&&((O=M.get(I.startTimeField))?(I.startTimeField=O.name,O.type="esriFieldTypeDate"):I.startTimeField=null),I.endTimeField&&((C=M.get(I.endTimeField))?(I.endTimeField=C.name,C.type="esriFieldTypeDate"):I.endTimeField=null),I.trackIdField&&((W=M.get(I.trackIdField))?I.trackIdField=W.name:(I.trackIdField=null,k.warn({name:"ogc-feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:I}}))),I.startTimeField||I.endTimeField||(k.warn({name:"ogc-feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing",details:{timeInfo:I}}),I=null)),e.abrupt("return",{drawingInfo:Z?(0,h.bU)(Z):null,geometryType:Z,fields:w,hasZ:!!x,objectIdField:F,timeInfo:I});case 44:case"end":return e.stop()}}),e,null,[[24,36,39,42]])}))),I.apply(this,arguments)}function j(e){return S.apply(this,arguments)}function S(){return S=(0,s.Z)(o.mark((function e(t){var n,r,i,s,l,f,d,y,m=arguments;return o.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=m.length>1&&void 0!==m[1]?m[1]:{},r=t.links,i=B(r,"data","application/json")||B(r,"http://www.opengis.net/def/rel/ogc/1.0/data","application/json"),!(0,p.Wi)(i)){e.next=4;break}throw new c.Z("ogc-feature-layer:missing-collections-page","Missing collections url");case 4:return s=n.apiKey,l=n.customParameters,f=n.signal,e.next=9,(0,u.default)(i.href,{signal:f,headers:{accept:"application/json"},query:(0,a.Z)((0,a.Z)({},l),{},{token:s})});case 9:return d=e.sent,y=d.data,e.abrupt("return",y);case 12:case"end":return e.stop()}}),e)}))),S.apply(this,arguments)}function T(e){return P.apply(this,arguments)}function P(){return P=(0,s.Z)(o.mark((function e(t){var n,r,i,s,l,f,d,y,m=arguments;return o.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=m.length>1&&void 0!==m[1]?m[1]:{},r=t.links,i=B(r,"conformance","application/json")||B(r,"http://www.opengis.net/def/rel/ogc/1.0/conformance","application/json"),!(0,p.Wi)(i)){e.next=4;break}throw new c.Z("ogc-feature-layer:missing-conformance-page","Missing conformance url");case 4:return s=n.apiKey,l=n.customParameters,f=n.signal,e.next=9,(0,u.default)(i.href,{signal:f,headers:{accept:"application/json"},query:(0,a.Z)((0,a.Z)({},l),{},{token:s})});case 9:return d=e.sent,y=d.data,e.abrupt("return",y);case 12:case"end":return e.stop()}}),e)}))),P.apply(this,arguments)}function G(e){return M.apply(this,arguments)}function M(){return M=(0,s.Z)(o.mark((function e(t){var n,r,i,s,c,l,p=arguments;return o.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=p.length>1&&void 0!==p[1]?p[1]:{},r=n.apiKey,i=n.customParameters,s=n.signal,e.next=6,(0,u.default)(t,{signal:s,headers:{accept:"application/json"},query:(0,a.Z)((0,a.Z)({},i),{},{token:r})});case 6:return c=e.sent,l=c.data,e.abrupt("return",l);case 9:case"end":return e.stop()}}),e)}))),M.apply(this,arguments)}function O(e){return C.apply(this,arguments)}function C(){return C=(0,s.Z)(o.mark((function e(t){var n,r,i,s,c,l,f,d,y=arguments;return o.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=y.length>1&&void 0!==y[1]?y[1]:{},r="application/vnd.oai.openapi+json;version=3.0",i=B(t.links,"service-desc",r),!(0,p.Wi)(i)){e.next=4;break}return e.abrupt("return",(k.warn("ogc-feature-layer:missing-openapi-page","The OGC API-Features server does not have an OpenAPI page."),null));case 4:return s=n.apiKey,c=n.customParameters,l=n.signal,e.next=9,(0,u.default)(i.href,{signal:l,headers:{accept:r},query:(0,a.Z)((0,a.Z)({},c),{},{token:s})});case 9:return f=e.sent,d=f.data,e.abrupt("return",d);case 12:case"end":return e.stop()}}),e)}))),C.apply(this,arguments)}function W(e){var t=(0,i.Z)(/^http:\/\/www\.opengis.net\/def\/crs\/(.*)\/(.*)\/(.*)$/i,{authority:1,version:2,code:3}).exec(e),n=null==t?void 0:t.groups;if(!n)return null;var r=n.authority,a=n.code;switch(r.toLowerCase()){case"ogc":switch(a.toLowerCase()){case"crs27":return w.Z.GCS_NAD_1927.wkid;case"crs83":return 4269;case"crs84":case"crs84h":return w.Z.WGS84.wkid;default:return null}case"esri":case"epsg":var s=Number.parseInt(a,10);return Number.isNaN(s)?null:s;default:return null}}function N(e,t,n){return R.apply(this,arguments)}function R(){return(R=(0,s.Z)(o.mark((function e(t,n,r){var a;return o.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q(t,n,r);case 2:return a=e.sent,e.abrupt("return",(0,y.cn)(a));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function q(e,t,n){return D.apply(this,arguments)}function D(){return D=(0,s.Z)(o.mark((function e(t,n,i){var s,l,h,v,b,k,x,Z,F,I,j,S,T,P,G,M,O,C,W,N,R,q,D,L,K,V,$,H,_,Q,Y,z,X,ee,te,ne,re,ae,ie,se,oe,ue;return o.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s=t.capabilities.query.maxRecordCount,l=t.collection,h=t.layerDefinition,v=t.queryParameters,b=v.apiKey,k=v.customParameters,x=t.spatialReference,Z=t.supportedCrs,F=l.links,I=B(F,"items","application/geo+json")||B(F,"http://www.opengis.net/def/rel/ogc/1.0/items","application/geo+json"),!(0,p.Wi)(I)){e.next=3;break}throw new c.Z("ogc-feature-layer:missing-items-page","Missing items url");case 3:if(j=n.geometry,S=n.num,T=n.start,P=n.timeExtent,G=n.where,!n.objectIds){e.next=6;break}throw new c.Z("ogc-feature-layer:query-by-objectids-not-supported","Queries with objectids are not supported");case 6:return M=w.Z.fromJSON(x),O=(0,p.Pt)(n.outSpatialReference,M),C=O.isWGS84?null:A(O,Z),W=J(j,Z),N=E(P),R=U(G),q=null!=S?S:null!=T&&void 0!==T?10:s,e.next=15,(0,u.default)(I.href,(0,a.Z)((0,a.Z)({},i),{},{query:(0,a.Z)((0,a.Z)((0,a.Z)({},k),W),{},{crs:C,datetime:N,query:R,limit:q,startindex:T,token:b}),headers:{accept:"application/geo+json"}}));case 15:if(D=e.sent,L=D.data,K=!1,L.links&&(V=L.links.find((function(e){return"next"===e.rel})),K=!!V),!K&&Number.isInteger(L.numberMatched)&&Number.isInteger(L.numberReturned)&&(K=L.numberReturned<L.numberMatched),$=h.fields,H=h.globalIdField,_=h.hasM,Q=h.hasZ,Y=h.objectIdField,z=h.geometryType,X=(0,g.lG)(L,{geometryType:z,hasZ:Q,objectIdField:Y}),!C&&O.isWebMercator){ee=(0,r.Z)(X);try{for(ee.s();!(te=ee.n()).done;)ne=te.value,(0,p.pC)(ne.geometry)&&((re=(0,y.di)(ne.geometry,z,Q,!1)).spatialReference=w.Z.WGS84,ne.geometry=(0,y.GH)((0,d.iV)(re,O)))}catch(o){ee.e(o)}finally{ee.f()}}ae=(0,r.Z)(X);try{for(ae.s();!(ie=ae.n()).done;)(se=ie.value).objectId=se.attributes[Y]}catch(o){ae.e(o)}finally{ae.f()}return oe=C||!C&&O.isWebMercator?O.toJSON():f.Zn,ue=new m.Z,e.abrupt("return",(ue.exceededTransferLimit=K,ue.features=X,ue.fields=$,ue.geometryType=z,ue.globalIdFieldName=H,ue.hasM=_,ue.hasZ=Q,ue.objectIdFieldName=Y,ue.spatialReference=oe,ue));case 26:case"end":return e.stop()}}),e)}))),D.apply(this,arguments)}function A(e,t){var n,r,a,i=e.isWebMercator;if(!e.wkid)return null;var s=i?null!=(n=null!=(r=null!=(a=t[3857])?a:t[102100])?r:t[102113])?n:t[900913]:t[e.wkid];return s?"".concat(x).concat(s):null}function L(e){if((0,p.Wi)(e))return"";var t=e.xmin,n=e.ymin,r=e.xmax,a=e.ymax;return"".concat(t,",").concat(n,",").concat(r,",").concat(a)}function E(e){if((0,p.Wi)(e))return null;var t=e.start,n=e.end;return"".concat((0,p.pC)(t)?t.toISOString():"..","/").concat((0,p.pC)(n)?n.toISOString():"..")}function U(e){return(0,p.Wi)(e)||!e||"1=1"===e?null:e}function J(e,t){if(!function(e){return(0,p.pC)(e)&&"extent"===e.type}(e))return null;var n=e.spatialReference;if(!n||n.isWGS84)return{bbox:L(e)};var r=A(n,t);return(0,p.pC)(r)?{bbox:L(e),"bbox-crs":r}:n.isWebMercator?{bbox:L((0,d.iV)(e,w.Z.WGS84))}:null}function B(e,t,n){return e.find((function(e){return e.rel===t&&e.type===n}))||e.find((function(e){return e.rel===t&&!e.type}))}}}]);
//# sourceMappingURL=7213.ca44b3d2.chunk.js.map