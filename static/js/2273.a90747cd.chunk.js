"use strict";(self.webpackChunkreact_sisp=self.webpackChunkreact_sisp||[]).push([[2273],{62273:function(e,t,n){n.r(t),n.d(t,{default:function(){return L},inferFieldType:function(){return z},inferFields:function(){return J},inferLocationInfo:function(){return Y}});var r=n(37762),i=n(1413),a=n(29439),u=n(15861),s=n(43144),o=n(15671),l=n(87757),c=(n(59486),n(76200)),p=n(10064),f=n(32718),d=n(29616),h=n(66978),y=n(35995),v=n(62315),m=n(40237),g=n(92975),x=n(81753),b=n(3182),F=n(80457),w=n(97114),k=n(19995),_=n(83706),I=l.mark(S),N=l.mark(O),Z=/^\s*"([\S\s]*)"\s*$/,T=/""/g,E=[","," ",";","|","\t"];function S(e,t,n){var r,i,a;return l.wrap((function(u){for(;;)switch(u.prev=u.next){case 0:r=0;case 1:if(!(r<=e.length)){u.next=10;break}if(i=e.indexOf(t,r),a=e.substring(r,i>-1?i:void 0),r+=a.length+t.length,u.t0=n&&!a.trim(),u.t0){u.next=8;break}return u.next=8,a;case 8:u.next=1;break;case 10:case"end":return u.stop()}}),I)}function q(e){var t=e.includes("\r\n")?"\r\n":"\n";return S(e,t,!0)}function C(e,t){return S(e,t,!1)}function D(e){var t,n=e.trim(),i=0,a="",u=(0,r.Z)(E);try{for(u.s();!(t=u.n()).done;){var s=t.value,o=n.split(s).length;o>i&&(i=o,a=s)}}catch(l){u.e(l)}finally{u.f()}return""===a?null:a}function O(e,t,n){var i,a,u,s,o,c,p,f,d,h,y,v,m,g,x=arguments;return l.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:i=x.length>3&&void 0!==x[3]?x[3]:function(){return Object.create(null)},a="",u="",s=0,o=i(),c=0,p=(0,r.Z)(e),l.prev=3,p.s();case 5:if((f=p.n()).done){l.next=47;break}d=f.value,h=C(d,n),y=(0,r.Z)(h),l.prev=9,y.s();case 11:if((v=y.n()).done){l.next=29;break}if(m=v.value,a+=u+m,u="",(s+=j(m))%2!=0){l.next=26;break}if(!(s>0)){l.next=22;break}if(g=Z.exec(a)){l.next=19;break}return o=i(),c=0,a="",s=0,l.abrupt("continue",45);case 19:o[t[c]]=g[1].replace(T,'"'),c++,l.next=23;break;case 22:o[t[c]]=a,c++;case 23:a="",s=0,l.next=27;break;case 26:u=n;case 27:l.next=11;break;case 29:l.next=34;break;case 31:l.prev=31,l.t0=l.catch(9),y.e(l.t0);case 34:return l.prev=34,y.f(),l.finish(34);case 37:if(0!==s){l.next=44;break}return l.next=40,o;case 40:o=i(),c=0,l.next=45;break;case 44:u="\n";case 45:l.next=5;break;case 47:l.next=52;break;case 49:l.prev=49,l.t1=l.catch(3),p.e(l.t1);case 52:return l.prev=52,p.f(),l.finish(52);case 55:case"end":return l.stop()}}),N,null,[[3,49,52,55],[9,31,34,37]])}function j(e){var t=0,n=0;for(n=e.indexOf('"',n);n>=0;)t++,n=e.indexOf('"',n+1);return t}var P=n(63543),G=n(52410),V=n(80031),R=n(78952),A=(0,P.bU)("esriGeometryPoint"),M=["csv"],Q=[0,0],U=(0,s.Z)((function e(t,n){(0,o.Z)(this,e),this.x=t,this.y=n})),L=function(){function e(){var t=this;(0,o.Z)(this,e),this._queryEngine=null,this._snapshotFeatures=function(){var e=(0,u.Z)(l.mark((function e(n){var r;return l.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._fetch(n);case 2:return r=e.sent,e.abrupt("return",t._createFeatures(r));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}return(0,s.Z)(e,[{key:"destroy",value:function(){var e;null==(e=this._queryEngine)||e.destroy(),this._queryEngine=null}},{key:"load",value:function(){var e=(0,u.Z)(l.mark((function e(t){var n,r,i,u,s,o,c,p,f,d,h=arguments;return l.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=h.length>1&&void 0!==h[1]?h[1]:{},this.loadOptions=t,e.next=4,Promise.all([this._fetch(n.signal),this._checkProjection(null==t||null==(r=t.parsingOptions)?void 0:r.spatialReference)]);case 4:return i=e.sent,u=(0,a.Z)(i,1),s=u[0],o=B(s,t),this.locationInfo=o.locationInfo,this.delimiter=o.delimiter,this._queryEngine=this._createQueryEngine(o),e.next=11,this._createFeatures(s);case 11:return c=e.sent,this._queryEngine.featureStore.addMany(c),o.layerDefinition.extent=this._queryEngine.fullExtent,o.layerDefinition.timeInfo&&(p=this._queryEngine.timeExtent,f=p.start,d=p.end,o.layerDefinition.timeInfo.timeExtent=[f,d]),e.abrupt("return",o);case 14:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"applyEdits",value:function(){var e=(0,u.Z)(l.mark((function e(){return l.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:throw new p.Z("csv-layer:editing-not-supported","applyEdits() is not supported on CSVLayer");case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"queryFeatures",value:function(){var e=(0,u.Z)(l.mark((function e(){var t,n,r=arguments;return l.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:{},n=r.length>1&&void 0!==r[1]?r[1]:{},e.next=4,this._waitSnapshotComplete();case 4:return e.abrupt("return",this._queryEngine.executeQuery(t,n.signal));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"queryFeatureCount",value:function(){var e=(0,u.Z)(l.mark((function e(){var t,n,r=arguments;return l.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:{},n=r.length>1&&void 0!==r[1]?r[1]:{},e.next=4,this._waitSnapshotComplete();case 4:return e.abrupt("return",this._queryEngine.executeQueryForCount(t,n.signal));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"queryObjectIds",value:function(){var e=(0,u.Z)(l.mark((function e(){var t,n,r=arguments;return l.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:{},n=r.length>1&&void 0!==r[1]?r[1]:{},e.next=4,this._waitSnapshotComplete();case 4:return e.abrupt("return",this._queryEngine.executeQueryForIds(t,n.signal));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"queryExtent",value:function(){var e=(0,u.Z)(l.mark((function e(){var t,n,r=arguments;return l.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:{},n=r.length>1&&void 0!==r[1]?r[1]:{},e.next=4,this._waitSnapshotComplete();case 4:return e.abrupt("return",this._queryEngine.executeQueryForExtent(t,n.signal));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"querySnapping",value:function(){var e=(0,u.Z)(l.mark((function e(t){var n,r=arguments;return l.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.length>1&&void 0!==r[1]?r[1]:{},e.next=3,this._waitSnapshotComplete();case 3:return e.abrupt("return",this._queryEngine.executeQueryForSnapping(t,n.signal));case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"refresh",value:function(){var e=(0,u.Z)(l.mark((function e(t){var n,r=this;return l.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.loadOptions.customParameters=t,null==(n=this._snapshotTask)||n.abort(),this._snapshotTask=(0,h.vr)(this._snapshotFeatures),this._snapshotTask.promise.then((function(e){r._queryEngine.featureStore.clear(),e&&r._queryEngine.featureStore.addMany(e)}),(function(e){r._queryEngine.featureStore.clear(),(0,h.D_)(e)||f.Z.getLogger("esri.layers.CSVLayer").error(new p.Z("csv-layer:refresh","An error occurred during refresh",{error:e}))})),e.next=6,this._waitSnapshotComplete();case 6:return e.abrupt("return",{extent:this._queryEngine.fullExtent,timeExtent:this._queryEngine.timeExtent});case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_waitSnapshotComplete",value:function(){var e=(0,u.Z)(l.mark((function e(){return l.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this._snapshotTask||this._snapshotTask.finished){e.next=9;break}return e.prev=1,e.next=4,this._snapshotTask.promise;case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:return e.abrupt("return",this._waitSnapshotComplete());case 9:case"end":return e.stop()}}),e,this,[[1,6]])})));return function(){return e.apply(this,arguments)}}()},{key:"_fetch",value:function(){var e=(0,u.Z)(l.mark((function e(t){var n,r,a,u;return l.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.loadOptions,r=n.url,a=n.customParameters,r){e.next=3;break}throw new p.Z("csv-layer:invalid-source","url not defined");case 3:return u=(0,y.mN)(r),e.next=6,(0,c.default)(u.path,{query:(0,i.Z)((0,i.Z)({},u.query),a),responseType:"text",signal:t});case 6:return e.abrupt("return",e.sent.data);case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_createQueryEngine",value:function(e){var t=e.layerDefinition,n=t.objectIdField,r=t.fields,i=t.extent,a=t.timeInfo,u=new w.Z({geometryType:"esriGeometryPoint",hasM:!1,hasZ:!1});return new _.Z({fields:r,geometryType:"esriGeometryPoint",hasM:!1,hasZ:!1,timeInfo:a,objectIdField:n,spatialReference:i.spatialReference||{wkid:4326},cacheSpatialQueries:!0,featureStore:u})}},{key:"_createFeatures",value:function(){var e=(0,u.Z)(l.mark((function e(t){var n,i,u,s,o,c,p,f,d,h,y,w,k,_,I,N,Z,T,E,S,C,D,j,G,A,M,L,B,W,$,Y,J,z,H,K,te,ne;return l.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=this.locationInfo,i=n.latitudeFieldName,u=n.longitudeFieldName,s=this._queryEngine,o=s.objectIdField,c=s.fieldsIndex,p=s.spatialReference,f=[],d=[],h=c.fields.filter((function(e){return e.name!==o})).map((function(e){return e.name})),y=0,(w=q(t)).next(),k={},_=(0,r.Z)(c.fields);try{for(_.s();!(I=_.n()).done;)"esriFieldTypeOID"!==(N=I.value).type&&"esriFieldTypeGlobalID"!==N.type&&void 0!==(Z=(0,V.os)(N))&&(k[N.name]=Z)}catch(l){_.e(l)}finally{_.f()}T=O(w,h,this.delimiter,(0,P.Dm)(k,o)),E=(0,r.Z)(T);try{for(E.s();!(S=E.n()).done;)if(C=S.value,D=this._parseCoordinateValue(C[i]),null!=(j=this._parseCoordinateValue(C[u]))&&null!=D&&!isNaN(D)&&!isNaN(j)){for(G in C[i]=D,C[u]=j,C)G!==i&&G!==u&&(c.isDateField(G)?(A=new Date(C[G]),C[G]=X(A,C[G])?A.getTime():null):c.isNumericField(G)&&(M=ee(C[G]),isNaN(M)?C[G]=null:C[G]=M));C[o]=y,y++,f.push(new U(j,D)),d.push(C)}}catch(l){E.e(l)}finally{E.f()}if(!(0,g.fS)({wkid:4326},p))if((0,g.sS)(p)){L=(0,r.Z)(f);try{for(L.s();!(B=L.n()).done;)W=B.value,$=(0,x.hG)(W.x,W.y,Q),Y=(0,a.Z)($,2),W.x=Y[0],W.y=Y[1]}catch(l){L.e(l)}finally{L.f()}}else f=(0,v.oj)(m.N,f,R.Z.WGS84,p,null);for(J=[],z=0;z<f.length;z++)H=f[z],K=H.x,te=H.y,(ne=d[z])[o]=z+1,J.push(new b.ZP(new F.Z([],[K,te]),ne,null,ne[o]));return e.abrupt("return",J);case 16:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_parseCoordinateValue",value:function(e){if(null==e||""===e)return null;var t=ee(e);return(isNaN(t)||Math.abs(t)>181)&&(t=parseFloat(e)),t}},{key:"_checkProjection",value:function(){var e=(0,u.Z)(l.mark((function e(t){return l.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,k._W)(g.Zn,t);case 3:e.next=8;break;case 5:throw e.prev=5,e.t0=e.catch(0),new p.Z("csv-layer:projection-not-supported","Projection not supported");case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}()}]),e}();function B(e,t){var n=t.parsingOptions||{},i={delimiter:n.delimiter,layerDefinition:null,locationInfo:{latitudeFieldName:n.latitudeField,longitudeFieldName:n.longitudeField}},a=q(e),u=a.next().value;if(!u)throw new p.Z("csv-layer:empty-csv","CSV is empty",{csv:e});if(u=u.trim(),!n.delimiter){var s=D(u);if(!s)throw new p.Z("csv-layer:invalid-delimiter","Unable to detect the delimiter from CSV");i.delimiter=s}var o=u.split(i.delimiter).filter((function(e){return!!e})),l=i.layerDefinition={name:(0,y.vt)(t.url,M)||"csv",drawingInfo:A,geometryType:"esriGeometryPoint",objectIdField:null,fields:[],timeInfo:n.timeInfo,extent:{xmin:Number.POSITIVE_INFINITY,ymin:Number.POSITIVE_INFINITY,xmax:Number.NEGATIVE_INFINITY,ymax:Number.NEGATIVE_INFINITY,spatialReference:n.spatialReference||{wkid:102100}}};if(!n.latitudeField||!n.longitudeField){var c=Y(o);if(!n.longitudeField&&!c.longitudeFieldName||!n.latitudeField&&!c.latitudeFieldName)throw new p.Z("csv-layer:location-fields-not-found","Unable to identify latitude and longitude fields from the CSV file");i.locationInfo={longitudeFieldName:n.longitudeField||c.longitudeFieldName,latitudeFieldName:n.latitudeField||c.latitudeFieldName}}var f=J(a,i.delimiter,o,i.locationInfo);if(n.fields&&n.fields.length){var d,h=new Map,v=(0,r.Z)(n.fields);try{for(v.s();!(d=v.n()).done;){var m=d.value;h.set(m.name.toLowerCase(),m)}}catch(E){v.e(E)}finally{v.f()}var g,x=(0,r.Z)(f);try{for(x.s();!(g=x.n()).done;){var b=g.value,F=h.get(b.name.toLowerCase());if(F){var w=b.name;Object.assign(b,F),b.name=w}}}catch(E){x.e(E)}finally{x.f()}}if(l.fields=f,!l.fields.some((function(e){return"esriFieldTypeOID"===e.type&&(l.objectIdField=e.name,!0)}))){var k={name:"__OBJECTID",alias:"__OBJECTID",type:"esriFieldTypeOID",editable:!1,nullable:!1};l.objectIdField=k.name,l.fields.unshift(k)}if(l.timeInfo){var _=new G.Z(l.fields),I=l.timeInfo;if(I.startTimeField){var N=_.get(I.startTimeField);N?(I.startTimeField=N.name,N.type="esriFieldTypeDate"):I.startTimeField=null}if(I.endTimeField){var Z=_.get(I.endTimeField);Z?(I.endTimeField=Z.name,Z.type="esriFieldTypeDate"):I.endTimeField=null}if(I.trackIdField){var T=_.get(I.trackIdField);I.trackIdField=T?T.name:null}I.startTimeField||I.endTimeField||(l.timeInfo=null)}return i}var W=["lat","latitude","latitude83","latdecdeg","lat_dd","y","ycenter","point-y"],$=["lon","lng","long","longitude","longitude83","longdecdeg","long_dd","x","xcenter","point-x"];function Y(e){var t=e.map((function(e){return e.toLowerCase()}));return{longitudeFieldName:e[t.indexOf($.find((function(e){return t.includes(e)})))],latitudeFieldName:e[t.indexOf(W.find((function(e){return t.includes(e)})))]}}function J(e,t,n,i){var a,u=[],s=O(e,n,t),o=[],l=(0,r.Z)(s);try{for(l.s();!(a=l.n()).done;){var c=a.value;if(10===o.length)break;o.push(c)}}catch(h){l.e(h)}finally{l.f()}var p,f=(0,r.Z)(n);try{var d=function(){var e=p.value;if(e===i.longitudeFieldName||e===i.latitudeFieldName)u.push({name:e,type:"esriFieldTypeDouble",alias:e});else{var t=z(o.map((function(t){return t[e]}))),n={name:e,type:null,alias:e};switch(t){case"integer":n.type="esriFieldTypeInteger";break;case"double":n.type="esriFieldTypeDouble";break;case"date":n.type="esriFieldTypeDate",n.length=36;break;default:n.type="esriFieldTypeString",n.length=255}u.push(n)}};for(f.s();!(p=f.n()).done;)d()}catch(h){f.e(h)}finally{f.f()}return u}function z(e){if(!e.length)return"string";var t=/[^+-.,0-9]/;return e.map((function(e){var n=!1;if(""!==e){if(t.test(e))n=!0;else{var r=ee(e);if(!isNaN(r))return/[.,]/.test(e)||!Number.isInteger(r)||r>214783647||r<-214783648?"double":"integer";if(-1===e.indexOf("E"))n=!0;else{if(r=Number(e),!isNaN(r))return"double";if(-1===e.indexOf(","))n=!0;else{if(e=e.replace(",","."),r=Number(e),!isNaN(r))return"double";n=!0}}}return n?/^[-]?\d*[.,]?\d*$/.test(e)?"string":X(new Date(e),e)?"date":"string":"string"}})).reduce((function(e,t){return void 0===e||e===t?t:"string"===e||"string"===t?"string":"double"===e||"double"===t?"double":void 0}))}var H=/^((jan(uary)?)|(feb(ruary)?)|(mar(ch)?)|(apr(il)?)|(may)|(jun(e)?)|(jul(y)?)|(aug(ust)?)|(sep(tember)?)|(oct(ober)?)|(nov(ember)?)|(dec(ember)?)|(am)|(pm)|(gmt)|(utc))$/i,K=Number.isNaN(new Date("technology 10").getTime());function X(e,t){if(!e||"[object Date]"!==Object.prototype.toString.call(e)||isNaN(e.getTime()))return!1;var n=!0;if(!K&&/\d+\W*$/.test(t)){var r=t.match(/[a-zA-Z]{2,}/);if(r){for(var i=!1,a=0;!i&&a<=r.length;)i=!H.test(r[a]),a++;n=!i}}return n}var ee=function(){var e=(0,d.lt)(),t=new RegExp("^"+e.regexp+"$"),n=new RegExp("["+e.group+"\\s\\xa0]","g"),r=e.factor;return function(i){var a=t.exec(i);if(e.factor=r,!a)return NaN;var u=a[1];if(!a[1]){if(!a[2])return NaN;u=a[2],e.factor*=-1}return+(u=u.replace(n,"").replace(e.decimal,"."))*e.factor}}()},63543:function(e,t,n){n.d(t,{Dm:function(){return c},Hq:function(){return p},MS:function(){return f},bU:function(){return l}});var r=n(4942),i=n(1413),a=n(93169),u=n(84652),s=n(60480),o=n(76115);function l(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?o.I4:"esriGeometryPolyline"===e?o.ET:o.lF}}}function c(e,t){if((0,a.Z)("esri-csp-restrictions"))return function(){return(0,i.Z)((0,r.Z)({},t,null),e)};try{var n="this.".concat(t," = null;");for(var u in e)n+="this".concat(u.includes(".")?'["'.concat(u,'"]'):".".concat(u)," = ").concat(JSON.stringify(e[u]),";");var s=new Function(n);return function(){return new s}}catch(o){return function(){return(0,i.Z)((0,r.Z)({},t,null),e)}}}function p(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return[{name:"New Feature",description:"",prototype:{attributes:(0,u.d9)(e)}}]}function f(e,t){return{attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:t,supportsDelete:t,supportsEditing:t,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAttachments:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:t,supportsExceedsLimitStatistics:!0},query:s.g,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0},editing:{supportsGeometryUpdate:t,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1}}}}}]);
//# sourceMappingURL=2273.a90747cd.chunk.js.map