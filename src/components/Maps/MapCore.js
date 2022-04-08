// import Map from '@arcgis/core/Map';
// import MapView from '@arcgis/core/views/MapView';
// import Basemap from '@arcgis/core/Basemap';
// import WebMap from '@arcgis/core/WebMap';
// import VectorTileLayer from '@arcgis/core/layers/VectorTileLayer';
// import React, { useRef, useEffect } from "react";

// const NewMap = () =>{

//     let view;

//     const mapEl=useRef(null)

//      const vectorTileLayer = new VectorTileLayer({
//               portalItem: {
//                 id: "29900f03344f480d985780e7d45650d3" // Neon basemap
//               },
//               effect: "opacity(0.9) bloom(1.1  0 .4)",
//             });

//     const basemap = new Basemap({
//               baseLayers: [vectorTileLayer],
            
//             });

//           // Webmap variable

//           const webmap = new WebMap({
//             basemap: basemap
//           });


          

// view = new MapView({
//             container: mapEl.current,
//             map:webmap,
//             center: [25.266847, 54.694623],
//             zoom: 10.5,
//             highlightOptions: {
//             color: "#5600e6",
//             width: "40",
//           },
//               background: { // autocasts new ColorBackground()
//               color: "#0c0d39" },// autocasts as new Color()
//             popup:{
//                         dockEnabled: true,
//           dockOptions: {
//             buttonEnabled: false,
//             breakpoint: false
//           }
        
//             }
            
//         })





//       return (
//         <div>
//                 <div style={{ height: 800 }} ref={mapEl}></div>
//         </div>
//         )
//     }


// export default NewMap


import React, { useRef, useEffect } from "react";
import ArcGISMap from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import NewFl from "@arcgis/core/layers/FeatureLayer";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import NewBarChart from "./Newbar";
import ButtonClick from "./ButtonClick"
import InputComp from "./InputComp";

function MapTest() {
  const mapDiv = useRef(null);

  useEffect(() => {
    if (mapDiv.current) {
      const map = new ArcGISMap({
        basemap: "gray-vector",
      });




      const view = new MapView({
        map,
        container: mapDiv.current,
        extent: {
          spatialReference: {
            wkid: 102100,
          },
          xmax: -13581772,
          xmin: -13584170,
          ymax: 4436367,
          ymin: 4435053,
        },
      });


      const naujas = new FeatureLayer({
  // URL to the service
  url: "https://services1.arcgis.com/usA3lHW20rGU6glp/arcgis/rest/services/Eismo_srautai/FeatureServer/1",
            outFields: ['*'],

            minScale: 7000.819286,
            // popupTemplate: template ,
            highlightOptions: {
                    color: "red"
                  },
            effect: "bloom(3  0 .1) blur(2pt) opacity(0.9)",
            timeInfo: {
    startField: "date"},
});

map.layers.add(naujas)

    }
    
  });

  return (
  <div>
   <ButtonClick/>

  </div>
  
  )
}

export default MapTest;