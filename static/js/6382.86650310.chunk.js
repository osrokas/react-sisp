"use strict";(self.webpackChunkreact_sisp=self.webpackChunkreact_sisp||[]).push([[6382],{16382:function(e,t,n){n.r(t),n.d(t,{ElevationQuery:function(){return M},GeometryDescriptor:function(){return F},default:function(){return M},getFinestLodIndex:function(){return L}});var r=n(60136),a=n(29388),i=n(37762),o=n(1413),s=n(15861),l=n(15671),u=n(43144),c=n(87757),f=n(14921),p=n(10064),h=n(92026),v=n(66978),y=n(68860),m=n(77577),d=n(7882),x=n(29909),k=n(62315),T=n(65156),w=(n(59486),n(93169),n(32718)),g=n(34066),Z=n(81753),R=w.Z.getLogger("esri.layers.support.ElevationSampler"),_=function(){function e(){(0,l.Z)(this,e)}return(0,u.Z)(e,[{key:"queryElevation",value:function(e){return function(e,t){var n=q(e,t.spatialReference);if(!n)return null;switch(e.type){case"point":!function(e,t,n){e.z=(0,h.Pt)(n.elevationAt(t),0)}(e,n,t);break;case"polyline":!function(e,t,n){A.spatialReference=t.spatialReference;for(var r=e.hasM&&!e.hasZ,a=0;a<e.paths.length;a++)for(var i=e.paths[a],o=t.paths[a],s=0;s<i.length;s++){var l=i[s],u=o[s];A.x=u[0],A.y=u[1],r&&(l[3]=l[2]),l[2]=(0,h.Pt)(n.elevationAt(A),0)}e.hasZ=!0}(e,n,t);break;case"multipoint":!function(e,t,n){A.spatialReference=t.spatialReference;for(var r=e.hasM&&!e.hasZ,a=0;a<e.points.length;a++){var i=e.points[a],o=t.points[a];A.x=o[0],A.y=o[1],r&&(i[3]=i[2]),i[2]=(0,h.Pt)(n.elevationAt(A),0)}e.hasZ=!0}(e,n,t)}return e}(e.clone(),this)}},{key:"on",value:function(){return I}},{key:"projectIfRequired",value:function(e,t){return q(e,t)}}]),e}(),b=function(e){(0,r.Z)(n,e);var t=(0,a.Z)(n);function n(e,r,a){var i;(0,l.Z)(this,n),(i=t.call(this)).tile=e,i.noDataValue=a,i.extent=(0,T.HH)(e.tile.extent,r.spatialReference);var o=(0,y.c9)(r.spatialReference),s=r.lodAt(e.tile.level).resolution*o;return i.demResolution={min:s,max:s},i}return(0,u.Z)(n,[{key:"spatialReference",get:function(){return this.extent.spatialReference}},{key:"contains",value:function(e){var t=this.projectIfRequired(e,this.spatialReference);return(0,g.aV)(this.extent,t)}},{key:"elevationAt",value:function(e){var t=this.projectIfRequired(e,this.spatialReference);if((0,h.Wi)(t))return null;if(!this.contains(e)){var n=this.extent,r="".concat(n.xmin,", ").concat(n.ymin,", ").concat(n.xmax,", ").concat(n.ymax);return R.warn("#elevationAt()","Point used to sample elevation (".concat(e.x,", ").concat(e.y,") is outside of the sampler extent (").concat(r,")")),this.noDataValue}return this.tile.sample(t.x,t.y)}}]),n}(_),E=function(e){(0,r.Z)(n,e);var t=(0,a.Z)(n);function n(e,r,a){var i,o;(0,l.Z)(this,n),i=t.call(this),"number"==typeof r?(i.noDataValue=r,o=null):(o=r,i.noDataValue=a),i.samplers=o?e.map((function(e){return new b(e,o,i.noDataValue)})):e;var s=i.samplers[0];if(s){i.extent=s.extent.clone();var u=s.demResolution,c=u.min,f=u.max;i.demResolution={min:c,max:f};for(var p=1;p<i.samplers.length;p++){var h=i.samplers[p];i.extent.union(h.extent),i.demResolution.min=Math.min(i.demResolution.min,h.demResolution.min),i.demResolution.max=Math.max(i.demResolution.max,h.demResolution.max)}}else i.extent=(0,T.HH)((0,T.Ue)(),o.spatialReference),i.demResolution={min:0,max:0};return i}return(0,u.Z)(n,[{key:"spatialReference",get:function(){return this.extent.spatialReference}},{key:"elevationAt",value:function(e){var t=this.projectIfRequired(e,this.spatialReference);if(!t)return null;var n,r=(0,i.Z)(this.samplers);try{for(r.s();!(n=r.n()).done;){var a=n.value;if(a.contains(t))return a.elevationAt(t)}}catch(o){r.e(o)}finally{r.f()}return R.warn("#elevationAt()","Point used to sample elevation (".concat(e.x,", ").concat(e.y,") is outside of the sampler")),this.noDataValue}}]),n}(_);function q(e,t){if((0,h.Wi)(e))return null;var n=e.spatialReference;if(n.equals(t))return e;var r=(0,Z.iV)(e,t);return r||R.error("Cannot project geometry spatial reference (wkid:".concat(n.wkid,") to elevation sampler spatial reference (wkid:").concat(t.wkid,")")),r}var A=new d.Z,I={remove:function(){}},D=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if((0,l.Z)(this,e),this.tile=t,(0,h.pC)(n)){var r=t.extent;this.samplerData={pixelData:n.values,width:n.width,height:n.height,safeWidth:.99999999*(n.width-1),noDataValue:n.noDataValue,dx:(n.width-1)/(r[2]-r[0]),dy:(n.width-1)/(r[3]-r[1]),x0:r[0],y1:r[3]}}}return(0,u.Z)(e,[{key:"sample",value:function(e,t){if(!(0,h.Wi)(this.samplerData)){var n=this.samplerData,r=n.safeWidth,a=n.width,i=n.pixelData,o=n.noDataValue,s=n.dx,l=n.dy,u=n.y1,c=n.x0,f=C(l*(u-t),0,r),p=C(s*(e-c),0,r),v=Math.floor(f),y=Math.floor(p),m=v*a+y,d=m+a,x=i[m],k=i[d],T=i[m+1],w=i[d+1];if(x!==o&&k!==o&&T!==o&&w!==o){var g=p-y,Z=x+(T-x)*g;return Z+(k+(w-k)*g-Z)*(f-v)}}}}]),e}();function C(e,t,n){return e<t?t:e>n?n:e}var M=function(){function e(){(0,l.Z)(this,e)}return(0,u.Z)(e,[{key:"queryAll",value:function(){var e=(0,s.Z)(c.mark((function e(t,n,r){var a,i,s,l,u;return c.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((t=r&&r.ignoreInvisibleLayers?t.filter((function(e){return e.visible})):t.slice()).length){e.next=2;break}throw new p.Z("elevation-query:invalid-layer","Elevation queries require at least one elevation layer to fetch tiles from");case 2:return a=F.fromGeometry(n),i=!1,r&&r.returnSampleInfo||(i=!0),s=(0,o.Z)((0,o.Z)((0,o.Z)({},O),r),{},{returnSampleInfo:!0}),e.next=8,this.query(t[t.length-1],a,s);case 8:return l=e.sent,e.next=11,this._queryAllContinue(t,l,s);case 11:return u=e.sent,e.abrupt("return",(u.geometry=u.geometry.export(),i&&delete u.sampleInfo,u));case 13:case"end":return e.stop()}}),e,this)})));return function(t,n,r){return e.apply(this,arguments)}}()},{key:"query",value:function(){var e=(0,s.Z)(c.mark((function e(t,n,r){var a,i,s;return c.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}throw new p.Z("elevation-query:invalid-layer","Elevation queries require an elevation layer to fetch tiles from");case 2:if(n&&(n instanceof F||"point"===n.type||"multipoint"===n.type||"polyline"===n.type)){e.next=4;break}throw new p.Z("elevation-query:invalid-geometry","Only point, polyline and multipoint geometries can be used to query elevation");case 4:return a=(0,o.Z)((0,o.Z)({},O),r),i=new V(t,n.spatialReference,a),s=a.signal,e.next=7,t.load({signal:s});case 7:return e.next=9,this._createGeometryDescriptor(i,n,s);case 9:return e.next=11,this._selectTiles(i,s);case 11:return e.next=13,this._populateElevationTiles(i,s);case 13:return this._sampleGeometryWithElevation(i),e.abrupt("return",this._createQueryResult(i,s));case 15:case"end":return e.stop()}}),e,this)})));return function(t,n,r){return e.apply(this,arguments)}}()},{key:"createSampler",value:function(){var e=(0,s.Z)(c.mark((function e(t,n,r){var a;return c.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}throw new p.Z("elevation-query:invalid-layer","Elevation queries require an elevation layer to fetch tiles from");case 2:if(n&&"extent"===n.type){e.next=4;break}throw new p.Z("elevation-query:invalid-extent","Invalid or undefined extent");case 4:return a=(0,o.Z)((0,o.Z)({},O),r),e.abrupt("return",this._createSampler(t,n,a));case 6:case"end":return e.stop()}}),e,this)})));return function(t,n,r){return e.apply(this,arguments)}}()},{key:"createSamplerAll",value:function(){var e=(0,s.Z)(c.mark((function e(t,n,r){var a,i;return c.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((t=r&&r.ignoreInvisibleLayers?t.filter((function(e){return e.visible})):t.slice()).length){e.next=2;break}throw new p.Z("elevation-query:invalid-layer","Elevation queries require at least one elevation layer to fetch tiles from");case 2:if(n&&"extent"===n.type){e.next=4;break}throw new p.Z("elevation-query:invalid-extent","Invalid or undefined extent");case 4:return a=(0,o.Z)((0,o.Z)((0,o.Z)({},O),r),{},{returnSampleInfo:!0}),e.next=7,this._createSampler(t[t.length-1],n,a);case 7:return i=e.sent,e.abrupt("return",this._createSamplerAllContinue(t,n,i,a));case 9:case"end":return e.stop()}}),e,this)})));return function(t,n,r){return e.apply(this,arguments)}}()},{key:"_createSampler",value:function(){var e=(0,s.Z)(c.mark((function e(t,n,r,a){var i,o,s,l;return c.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=r.signal,e.next=3,t.load({signal:i});case 3:if(o=n.spatialReference,s=t.tileInfo.spatialReference,e.t0=o.equals(s),e.t0){e.next=9;break}return e.next=8,(0,k.iQ)([{source:o,dest:s}],{signal:i});case 8:n=(0,k.iV)(n,s);case 9:return l=new S(t,n,r,a),e.next=12,this._selectTiles(l,i);case 12:return e.next=14,this._populateElevationTiles(l,i);case 14:return e.abrupt("return",new E(l.elevationTiles,l.layer.tileInfo,l.options.noDataValue));case 15:case"end":return e.stop()}}),e,this)})));return function(t,n,r,a){return e.apply(this,arguments)}}()},{key:"_createSamplerAllContinue",value:function(){var e=(0,s.Z)(c.mark((function e(t,n,r,a){var i,o,s,l;return c.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.pop(),t.length){e.next=2;break}return e.abrupt("return",r);case 2:return i=r.samplers.map((function(e){return(0,T.oJ)(e.extent)})),e.next=5,this._createSampler(t[t.length-1],n,a,i);case 5:if(0!==(o=e.sent).samplers.length){e.next=8;break}return e.abrupt("return",r);case 8:return s=r.samplers.concat(o.samplers),l=new E(s,a.noDataValue),e.abrupt("return",this._createSamplerAllContinue(t,n,l,a));case 10:case"end":return e.stop()}}),e,this)})));return function(t,n,r,a){return e.apply(this,arguments)}}()},{key:"_queryAllContinue",value:function(){var e=(0,s.Z)(c.mark((function e(t,n,r){var a,i,o,s,l,u,f,p;return c.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(a=t.pop(),i=n.geometry.coordinates,o=[],s=[],l=0;l<i.length;l++)(u=n.sampleInfo[l]).demResolution>=0?u.source||(u.source=a):t.length&&(o.push(i[l]),s.push(l));if(t.length&&0!==o.length){e.next=4;break}return e.abrupt("return",n);case 4:return f=n.geometry.clone(o),e.next=7,this.query(t[t.length-1],f,r);case 7:return p=e.sent,e.abrupt("return",(s.forEach((function(e,t){i[e].z=p.geometry.coordinates[t].z,n.sampleInfo[e].demResolution=p.sampleInfo[t].demResolution})),this._queryAllContinue(t,n,r)));case 9:case"end":return e.stop()}}),e,this)})));return function(t,n,r){return e.apply(this,arguments)}}()},{key:"_createQueryResult",value:function(){var e=(0,s.Z)(c.mark((function e(t,n){var r;return c.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.geometry.project(t.outSpatialReference,n);case 2:return e.t0=e.sent.export(),e.t1=t.options.noDataValue,r={geometry:e.t0,noDataValue:e.t1},e.abrupt("return",(t.options.returnSampleInfo&&(r.sampleInfo=this._extractSampleInfo(t)),t.geometry.coordinates.forEach((function(e){e.tile=null,e.elevationTile=null})),r));case 6:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"_createGeometryDescriptor",value:function(){var e=(0,s.Z)(c.mark((function e(t,n,r){var a,i;return c.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=t.layer.tileInfo.spatialReference,!(n instanceof F)){e.next=7;break}return e.next=4,n.project(i,r);case 4:a=e.sent,e.next=10;break;case 7:return e.next=9,(0,k.iQ)([{source:n.spatialReference,dest:i}],{signal:r});case 9:a=(0,k.iV)(n,i);case 10:if(a){e.next=12;break}throw new p.Z("elevation-query:spatial-reference-mismatch","Cannot query elevation in '".concat(n.spatialReference.wkid,"' on an elevation service in '").concat(i.wkid,"'"));case 12:t.geometry=F.fromGeometry(a);case 13:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}()},{key:"_selectTiles",value:function(){var e=(0,s.Z)(c.mark((function e(t,n){var r;return c.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.options.demResolution,"geometry"===t.type&&this._preselectOutsideLayerExtent(t),"number"!=typeof r){e.next=5;break}this._selectTilesClosestResolution(t),e.next=14;break;case 5:if("finest-contiguous"!==r){e.next=10;break}return e.next=8,this._selectTilesFinestContiguous(t,n);case 8:e.next=14;break;case 10:if("auto"===r){e.next=12;break}throw new p.Z("elevation-query:invalid-dem-resolution","Invalid dem resolution value '".concat(r,'\', expected a number, "finest-contiguous" or "auto"'));case 12:return e.next=14,this._selectTilesAuto(t,n);case 14:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"_preselectOutsideLayerExtent",value:function(e){if(!(0,h.Wi)(e.layer.fullExtent)){var t=new D(null);t.sample=function(){return e.options.noDataValue},e.outsideExtentTile=t;var n=e.layer.fullExtent;e.geometry.coordinates.forEach((function(e){var r=e.x,a=e.y;(r<n.xmin||r>n.xmax||a<n.ymin||a>n.ymax)&&(e.elevationTile=t)}))}}},{key:"_selectTilesClosestResolution",value:function(e){var t=e.layer.tileInfo,n=this._findNearestDemResolutionLODIndex(t,e.options.demResolution);e.selectTilesAtLOD(n)}},{key:"_findNearestDemResolutionLODIndex",value:function(e,t){for(var n=t/(0,y.c9)(e.spatialReference),r=e.lods[0],a=0,i=1;i<e.lods.length;i++){var o=e.lods[i];Math.abs(o.resolution-n)<Math.abs(r.resolution-n)&&(r=o,a=i)}return a}},{key:"_selectTilesFinestContiguous",value:function(){var e=(0,s.Z)(c.mark((function e(t,n){var r;return c.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=L(t.layer.tileInfo,t.options.minDemResolution),e.next=3,this._selectTilesFinestContiguousAt(t,r,n);case 3:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"_selectTilesFinestContiguousAt",value:function(){var e=(0,s.Z)(c.mark((function e(t,n,r){var a,i,o;return c.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.layer,t.selectTilesAtLOD(n),!(n<0)){e.next=3;break}return e.abrupt("return");case 3:if(i=a.tilemapCache,o=t.getTilesToFetch(),e.prev=4,!i){e.next=10;break}return e.next=8,(0,v.Hl)(Promise.all(o.map((function(e){return i.fetchAvailability(e.level,e.row,e.col,{signal:r})}))),r);case 8:e.next=14;break;case 10:return e.next=12,this._populateElevationTiles(t,r);case 12:if(t.allElevationTilesFetched()){e.next=14;break}throw t.clearElevationTiles(),new p.Z("elevation-query:has-unavailable-tiles");case 14:e.next=21;break;case 16:return e.prev=16,e.t0=e.catch(4),(0,v.r9)(e.t0),e.next=21,this._selectTilesFinestContiguousAt(t,n-1,r);case 21:case"end":return e.stop()}}),e,this,[[4,16]])})));return function(t,n,r){return e.apply(this,arguments)}}()},{key:"_populateElevationTiles",value:function(){var e=(0,s.Z)(c.mark((function e(t,n){var r,a,i,o,l;return c.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.getTilesToFetch(),a={},i=t.options.cache,o=t.options.noDataValue,l=r.map(function(){var e=(0,s.Z)(c.mark((function e(r){var s,l,u;return c.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s="".concat(t.layer.uid,":").concat(r.id,":").concat(o),l=(0,h.pC)(i)?i.get(s):null,!(0,h.pC)(l)){e.next=6;break}e.t0=l,e.next=9;break;case 6:return e.next=8,t.layer.fetchTile(r.level,r.row,r.col,{noDataValue:o,signal:n});case 8:e.t0=e.sent;case 9:u=e.t0,(0,h.pC)(i)&&i.put(s,u),a[r.id]=new D(r,u);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.next=3,(0,v.Hl)((0,v.as)(l),n);case 3:t.populateElevationTiles(a);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"_selectTilesAuto",value:function(){var e=(0,s.Z)(c.mark((function e(t,n){var r,a,i,o;return c.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this._selectTilesAutoFinest(t),this._reduceTilesForMaximumRequests(t),r=t.layer.tilemapCache){e.next=4;break}return e.abrupt("return",this._selectTilesAutoPrefetchUpsample(t,n));case 4:return a=t.getTilesToFetch(),i={},o=a.map(function(){var e=(0,s.Z)(c.mark((function e(t){var a,o;return c.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={id:null,level:0,row:0,col:0,extent:(0,T.Ue)()},e.next=3,(0,f.q6)(r.fetchAvailabilityUpsample(t.level,t.row,t.col,a,{signal:n}));case 3:!1===(o=e.sent).ok?(0,v.r9)(o.error):i[t.id]=a;case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.next=7,(0,v.Hl)(Promise.all(o),n);case 7:t.remapTiles(i);case 8:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"_reduceTilesForMaximumRequests",value:function(e){var t=e.layer.tileInfo,n=0,r={},a=function(e){e.id in r?r[e.id]++:(r[e.id]=1,n++)},i=function(e){var t=r[e.id];1===t?(delete r[e.id],n--):r[e.id]=t-1};e.forEachTileToFetch(a,i);for(var o=!0;o&&(o=!1,e.forEachTileToFetch((function(r){n<=e.options.maximumAutoTileRequests||(i(r),t.upsampleTile(r)&&(o=!0),a(r))}),i),o););}},{key:"_selectTilesAutoFinest",value:function(e){var t=L(e.layer.tileInfo,e.options.minDemResolution);e.selectTilesAtLOD(t,e.options.maximumAutoTileRequests)}},{key:"_selectTilesAutoPrefetchUpsample",value:function(){var e=(0,s.Z)(c.mark((function e(t,n){var r,a;return c.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.layer.tileInfo,e.next=3,this._populateElevationTiles(t,n);case 3:if(a=!1,t.forEachTileToFetch((function(e,t){r.upsampleTile(e)?a=!0:t()})),e.t0=a,!e.t0){e.next=9;break}return e.next=9,this._selectTilesAutoPrefetchUpsample(t,n);case 9:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"_sampleGeometryWithElevation",value:function(e){e.geometry.coordinates.forEach((function(t){var n=t.elevationTile,r=e.options.noDataValue;if(n){var a=n.sample(t.x,t.y);(0,h.pC)(a)?r=a:t.elevationTile=null}t.z=r}))}},{key:"_extractSampleInfo",value:function(e){var t=e.layer.tileInfo,n=(0,y.c9)(t.spatialReference);return e.geometry.coordinates.map((function(r){var a=-1;return r.elevationTile&&r.elevationTile!==e.outsideExtentTile&&(a=t.lodAt(r.elevationTile.tile.level).resolution*n),{demResolution:a}}))}}]),e}(),F=function(){function e(){(0,l.Z)(this,e)}return(0,u.Z)(e,[{key:"export",value:function(){return this._exporter(this.coordinates,this.spatialReference)}},{key:"clone",value:function(t){var n=this,r=new e;return r.geometry=this.geometry,r.spatialReference=this.spatialReference,r.coordinates=t||this.coordinates.map((function(e){return n._cloneCoordinate(e)})),r._exporter=this._exporter,r}},{key:"project",value:function(){var e=(0,s.Z)(c.mark((function e(t,n){var r,a,i,o,s=this;return c.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.spatialReference.equals(t)){e.next=2;break}return e.abrupt("return",this.clone());case 2:return e.next=4,(0,k.iQ)([{source:this.spatialReference,dest:t}],{signal:n});case 4:if(r=new m.Z({spatialReference:this.spatialReference,points:this.coordinates.map((function(e){return[e.x,e.y]}))}),a=(0,k.iV)(r,t)){e.next=7;break}return e.abrupt("return",null);case 7:return i=this.coordinates.map((function(e,t){var n=s._cloneCoordinate(e),r=a.points[t];return n.x=r[0],n.y=r[1],n})),o=this.clone(i),e.abrupt("return",(o.spatialReference=t,o));case 9:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"_cloneCoordinate",value:function(e){return{x:e.x,y:e.y,z:e.z,m:e.m,tile:null,elevationTile:null}}}],[{key:"fromGeometry",value:function(t){var n=new e;if(n.geometry=t,n.spatialReference=t.spatialReference,t instanceof e)n.coordinates=t.coordinates.map((function(e){return n._cloneCoordinate(e)})),n._exporter=function(e,n){var r=t.clone(e);return r.spatialReference=n,r};else switch(t.type){case"point":var r=t,a=r.hasZ,o=r.hasM;n.coordinates=a&&o?[{x:r.x,y:r.y,z:r.z,m:r.m}]:a?[{x:r.x,y:r.y,z:r.z}]:o?[{x:r.x,y:r.y,m:r.m}]:[{x:r.x,y:r.y}],n._exporter=function(e,n){return t.hasM?new d.Z(e[0].x,e[0].y,e[0].z,e[0].m,n):new d.Z(e[0].x,e[0].y,e[0].z,n)};break;case"multipoint":var s=t,l=s.hasZ,u=s.hasM;n.coordinates=l&&u?s.points.map((function(e){return{x:e[0],y:e[1],z:e[2],m:e[3]}})):l?s.points.map((function(e){return{x:e[0],y:e[1],z:e[2]}})):u?s.points.map((function(e){return{x:e[0],y:e[1],m:e[2]}})):s.points.map((function(e){return{x:e[0],y:e[1]}})),n._exporter=function(e,n){return t.hasM?new m.Z({points:e.map((function(e){return[e.x,e.y,e.z,e.m]})),hasZ:!0,hasM:!0,spatiaReference:n}):new m.Z(e.map((function(e){return[e.x,e.y,e.z]})),n)};break;case"polyline":var c,f=t,p=[],h=[],v=t.hasZ,y=t.hasM,k=0,T=(0,i.Z)(f.paths);try{for(T.s();!(c=T.n()).done;){var w=c.value;if(h.push([k,k+w.length]),k+=w.length,v&&y){var g,Z=(0,i.Z)(w);try{for(Z.s();!(g=Z.n()).done;){var R=g.value;p.push({x:R[0],y:R[1],z:R[2],m:R[3]})}}catch(F){Z.e(F)}finally{Z.f()}}else if(v){var _,b=(0,i.Z)(w);try{for(b.s();!(_=b.n()).done;){var E=_.value;p.push({x:E[0],y:E[1],z:E[2]})}}catch(F){b.e(F)}finally{b.f()}}else if(y){var q,A=(0,i.Z)(w);try{for(A.s();!(q=A.n()).done;){var I=q.value;p.push({x:I[0],y:I[1],m:I[2]})}}catch(F){A.e(F)}finally{A.f()}}else{var D,C=(0,i.Z)(w);try{for(C.s();!(D=C.n()).done;){var M=D.value;p.push({x:M[0],y:M[1]})}}catch(F){C.e(F)}finally{C.f()}}}}catch(F){T.e(F)}finally{T.f()}n.coordinates=p,n._exporter=function(e,n){var r=t.hasM?e.map((function(e){return[e.x,e.y,e.z,e.m]})):e.map((function(e){return[e.x,e.y,e.z]})),a=h.map((function(e){return r.slice(e[0],e[1])}));return new x.Z({paths:a,hasM:t.hasM,hasZ:!0,spatialReference:n})}}return n}}]),e}(),z=(0,u.Z)((function e(t,n){(0,l.Z)(this,e),this.layer=t,this.options=n})),V=function(e){(0,r.Z)(n,e);var t=(0,a.Z)(n);function n(e,r,a){var i;return(0,l.Z)(this,n),(i=t.call(this,e,a)).outSpatialReference=r,i.type="geometry",i}return(0,u.Z)(n,[{key:"selectTilesAtLOD",value:function(e){if(e<0)this.geometry.coordinates.forEach((function(e){return e.tile=null}));else{var t=this.layer.tileInfo,n=t.lods[e].level;this.geometry.coordinates.forEach((function(e){e.tile=t.tileAt(n,e.x,e.y)}))}}},{key:"allElevationTilesFetched",value:function(){return!this.geometry.coordinates.some((function(e){return!e.elevationTile}))}},{key:"clearElevationTiles",value:function(){var e,t=(0,i.Z)(this.geometry.coordinates);try{for(t.s();!(e=t.n()).done;){var n=e.value;n.elevationTile!==this.outsideExtentTile&&(n.elevationTile=null)}}catch(r){t.e(r)}finally{t.f()}}},{key:"populateElevationTiles",value:function(e){var t,n=(0,i.Z)(this.geometry.coordinates);try{for(n.s();!(t=n.n()).done;){var r=t.value;!r.elevationTile&&r.tile&&(r.elevationTile=e[r.tile.id])}}catch(a){n.e(a)}finally{n.f()}}},{key:"remapTiles",value:function(e){var t,n=(0,i.Z)(this.geometry.coordinates);try{for(n.s();!(t=n.n()).done;){var r=t.value;r.tile=e[r.tile.id]}}catch(a){n.e(a)}finally{n.f()}}},{key:"getTilesToFetch",value:function(){var e,t={},n=[],r=(0,i.Z)(this.geometry.coordinates);try{for(r.s();!(e=r.n()).done;){var a=e.value,o=a.tile;a.elevationTile||!a.tile||t[o.id]||(t[o.id]=o,n.push(o))}}catch(s){r.e(s)}finally{r.f()}return n}},{key:"forEachTileToFetch",value:function(e){var t,n=(0,i.Z)(this.geometry.coordinates);try{var r=function(){var n=t.value;n.tile&&!n.elevationTile&&e(n.tile,(function(){return n.tile=null}))};for(n.s();!(t=n.n()).done;)r()}catch(a){n.e(a)}finally{n.f()}}}]),n}(z),S=function(e){(0,r.Z)(n,e);var t=(0,a.Z)(n);function n(e,r,a,i){var o;return(0,l.Z)(this,n),(o=t.call(this,e,a)).type="extent",o.elevationTiles=[],o.candidateTiles=[],o.fetchedCandidates=new Set,o.extent=r.intersection(e.fullExtent),o.maskExtents=i,o}return(0,u.Z)(n,[{key:"selectTilesAtLOD",value:function(e,t){var n=this._maximumLodForRequests(t),r=Math.min(n,e);r<0?this.candidateTiles.length=0:this._selectCandidateTilesCoveringExtentAt(r)}},{key:"_maximumLodForRequests",value:function(e){var t=this.layer.tileInfo;if(!e)return t.lods.length-1;var n=this.extent;if((0,h.Wi)(n))return-1;for(var r=t.lods.length-1;r>=0;r--){var a=t.lods[r],i=a.resolution*t.size[0],o=a.resolution*t.size[1];if(Math.ceil(n.width/i)*Math.ceil(n.height/o)<=e)return r}return-1}},{key:"allElevationTilesFetched",value:function(){return this.candidateTiles.length===this.elevationTiles.length}},{key:"clearElevationTiles",value:function(){this.elevationTiles.length=0,this.fetchedCandidates.clear()}},{key:"populateElevationTiles",value:function(e){var t,n=(0,i.Z)(this.candidateTiles);try{for(n.s();!(t=n.n()).done;){var r=t.value,a=e[r.id];a&&(this.fetchedCandidates.add(r),this.elevationTiles.push(a))}}catch(o){n.e(o)}finally{n.f()}}},{key:"remapTiles",value:function(e){this.candidateTiles=this._uniqueNonOverlappingTiles(this.candidateTiles.map((function(t){return e[t.id]})))}},{key:"getTilesToFetch",value:function(){return this.candidateTiles}},{key:"forEachTileToFetch",value:function(e,t){var n=this,r=this.candidateTiles;this.candidateTiles=[],r.forEach((function(r){if(n.fetchedCandidates.has(r))t&&t(r);else{var a=!1;e(r,(function(){return a=!0})),a?t&&t(r):n.candidateTiles.push(r)}})),this.candidateTiles=this._uniqueNonOverlappingTiles(this.candidateTiles,t)}},{key:"_uniqueNonOverlappingTiles",value:function(e,t){var n,r={},a=[],o=(0,i.Z)(e);try{for(o.s();!(n=o.n()).done;){var s=n.value;r[s.id]?t&&t(s):(r[s.id]=s,a.push(s))}}catch(u){o.e(u)}finally{o.f()}var l=a.sort((function(e,t){return e.level-t.level}));return l.filter((function(e,n){for(var r=0;r<n;r++)if((0,T.r3)(l[r].extent,e.extent))return t&&t(e),!1;return!0}))}},{key:"_selectCandidateTilesCoveringExtentAt",value:function(e){this.candidateTiles.length=0;var t=this.extent;if(!(0,h.Wi)(t))for(var n=this.layer.tileInfo,r=n.lods[e],a=n.tileAt(r.level,t.xmin,t.ymin),i=r.resolution*n.size[0],o=r.resolution*n.size[1],s=Math.ceil((t.xmax-a.extent[0])/i),l=Math.ceil((t.ymax-a.extent[1])/o),u=0;u<l;u++)for(var c=0;c<s;c++){var f={id:null,level:a.level,row:a.row-u,col:a.col+c};n.updateTileInfo(f),this._tileIsMasked(f)||this.candidateTiles.push(f)}}},{key:"_tileIsMasked",value:function(e){return!!this.maskExtents&&this.maskExtents.some((function(t){return(0,T.r3)(t,e.extent)}))}}]),n}(z);function L(e,t){var n=e.lods.length-1;if(t>0){var r=e.lods.findIndex((function(e){return e.resolution<t}));0===r?n=0:r>0&&(n=r-1)}return n}var O={maximumAutoTileRequests:20,noDataValue:0,returnSampleInfo:!1,demResolution:"auto",minDemResolution:0}}}]);
//# sourceMappingURL=6382.86650310.chunk.js.map