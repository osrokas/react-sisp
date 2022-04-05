"use strict";(self.webpackChunkreact_sisp=self.webpackChunkreact_sisp||[]).push([[6795],{16795:function(e,r,t){t.r(r),t.d(r,{default:function(){return J}});var a=t(15671),i=t(43144),n=t(60136),o=t(29388),s=t(27366),l=t(49861),u=(t(63780),t(93169),t(25243),t(69912)),p=t(1413),c=t(15861),y=t(87757),f=t(76200),v=t(43813),B=t(64455),d=t(27991),g=t(23084),m=(t(59486),t(52639)),Z=t(67123),b=t(92026),P=t(38511),k=t(78952),_=t(89677),h=t(7882),A=t(29909),S=t(80885),C=t(77981);function R(e){return e.features.map((function(r){var t=k.Z.fromJSON(e.spatialReference),a=m.Z.fromJSON(r);return(0,b.Wg)(a.geometry).spatialReference=t,a}))}function w(e){return(0,b.lV)(e.features.map((function(r){return(0,b.pC)(r.geometry)&&(r.geometry.spatialReference=e.spatialReference),(0,C.im)(r.geometry)})))}var x=function(e){(0,n.Z)(t,e);var r=(0,o.Z)(t);function t(e){var i;return(0,a.Z)(this,t),(i=r.call(this,e)).facilities=null,i.messages=null,i.pointBarriers=null,i.polylineBarriers=null,i.polygonBarriers=null,i.serviceAreaPolylines=null,i.serviceAreaPolygons=null,i}return(0,i.Z)(t,[{key:"readFacilities",value:function(e){return w(e)}},{key:"readPointBarriers",value:function(e,r){return w(r.barriers)}},{key:"readPolylineBarriers",value:function(e){return w(e)}},{key:"readPolygonBarriers",value:function(e){return w(e)}},{key:"readIncidents",value:function(e,r){return R(r.saPolylines)}},{key:"readServiceAreaPolygons",value:function(e,r){return R(r.saPolygons)}}]),t}(Z.wq);(0,s._)([(0,l.Cb)({type:[h.Z]})],x.prototype,"facilities",void 0),(0,s._)([(0,P.r)("facilities")],x.prototype,"readFacilities",null),(0,s._)([(0,l.Cb)({type:[_.Z]})],x.prototype,"messages",void 0),(0,s._)([(0,l.Cb)({type:[h.Z]})],x.prototype,"pointBarriers",void 0),(0,s._)([(0,P.r)("pointBarriers",["barriers"])],x.prototype,"readPointBarriers",null),(0,s._)([(0,l.Cb)({type:[A.Z]})],x.prototype,"polylineBarriers",void 0),(0,s._)([(0,P.r)("polylineBarriers")],x.prototype,"readPolylineBarriers",null),(0,s._)([(0,l.Cb)({type:[S.Z]})],x.prototype,"polygonBarriers",void 0),(0,s._)([(0,P.r)("polygonBarriers")],x.prototype,"readPolygonBarriers",null),(0,s._)([(0,l.Cb)({type:[m.Z]})],x.prototype,"serviceAreaPolylines",void 0),(0,s._)([(0,P.r)("serviceAreaPolylines",["saPolylines"])],x.prototype,"readIncidents",null),(0,s._)([(0,l.Cb)({type:[m.Z]})],x.prototype,"serviceAreaPolygons",void 0),(0,s._)([(0,P.r)("serviceAreaPolygons",["saPolygons"])],x.prototype,"readServiceAreaPolygons",null);var N=x=(0,s._)([(0,u.j)("esri.rest.support.ServiceAreaSolveResult")],x),j=(0,v.E)({accumulateAttributes:{name:"accumulateAttributeNames"},attributeParameterValues:!0,defaultBreaks:!0,facilities:!0,outSpatialReference:{name:"outSR",getter:function(e){return e.outSpatialReference.wkid}},pointBarriers:{name:"barriers"},polylineBarriers:!0,polygonBarriers:!0,restrictionAttributes:{name:"restrictionAttributeNames"},returnPointBarriers:{name:"returnBarriers"},travelMode:!0});function q(){return q=(0,c.Z)(y.mark((function e(r,t,a){var i,n,o,s,l,u,c,v,m,Z,b,P,k,_,h;return y.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=[],n=[],o={},s={},l=(0,g.en)(r),u=l.path,t.facilities&&t.facilities.features&&(0,d.et)(t.facilities.features,n,"facilities.features",o),t.pointBarriers&&t.pointBarriers.features&&(0,d.et)(t.pointBarriers.features,n,"pointBarriers.features",o),t.polylineBarriers&&t.polylineBarriers.features&&(0,d.et)(t.polylineBarriers.features,n,"polylineBarriers.features",o),t.polygonBarriers&&t.polygonBarriers.features&&(0,d.et)(t.polygonBarriers.features,n,"polygonBarriers.features",o),e.next=4,(0,B.aX)(n);case 4:for(v in c=e.sent,o)m=o[v],i.push(v),s[v]=c.slice(m[0],m[1]);if(!(0,d.Wf)(s,i)){e.next=17;break}return Z=null,e.prev=8,e.next=11,(0,d.bI)(u,t.apiKey,a);case 11:Z=e.sent,e.next=16;break;case 14:e.prev=14,e.t0=e.catch(8);case 16:Z&&!Z.hasZ&&(0,d.ef)(s,i);case 17:for(P in b=function(e){s[e].forEach((function(r,a){t.get(e)[a].geometry=r}))},s)b(P);return k=(0,p.Z)((0,p.Z)({},a),{},{query:(0,p.Z)((0,p.Z)((0,p.Z)({},l.query),j.toQueryParams(t)),{},{f:"json"})}),e.next=22,(0,f.default)("".concat(u,"/solveServiceArea"),k);case 22:return _=e.sent,h=_.data,e.abrupt("return",N.fromJSON(h));case 25:case"end":return e.stop()}}),e,null,[[8,14]])}))),q.apply(this,arguments)}var I=function(e){(0,n.Z)(t,e);var r=(0,o.Z)(t);function t(e){var i;return(0,a.Z)(this,t),(i=r.call(this,e)).url=null,i}return(0,i.Z)(t,[{key:"solve",value:function(e,r){return function(e,r,t){return q.apply(this,arguments)}(this.url,e,r)}}]),t}(t(4338).Z);(0,s._)([(0,l.Cb)()],I.prototype,"url",void 0);var J=I=(0,s._)([(0,u.j)("esri.tasks.ServiceAreaTask")],I)}}]);
//# sourceMappingURL=6795.1b5eacab.chunk.js.map