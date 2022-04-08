// import React, { useRef, useEffect } from "react";
// import { loadModules } from 'esri-loader';
// import ReactDOM from 'react-dom'


// function Table() {

//     const table=useRef(null)

//   useEffect(() => {

//     let view;

//       loadModules([

//          "esri/widgets/FeatureTable",
//          "esri/layers/FeatureLayer"

         

         
 
//       ],{css:"https://js.arcgis.com/4.22/esri/themes/dark/main.css"})
//         .then(([FeatureLayer, FeatureTable]) => {

          
         



//         // Traffic layer 
//         const trafficLayer = new FeatureLayer({
//     url: "https://services1.arcgis.com/usA3lHW20rGU6glp/arcgis/rest/services/Eismo_srautai/FeatureServer/0"
    
  
//   });

//    const tableLayer = new FeatureTable({
//           layer: trafficLayer});






  
//       })
//     return() => {
//         if(!!view){
//             view.destroy()
//             view=null
//         }
//     }
//     })
    
//     return (
       
//         <div style={{ display: 'block-inline'}}>
//           {/* <Sidebar /> */}
          
//         <div style={{height:860}} ref={table}></div>
//         {/* <div className="overlay-css"></div> */}


//         </div>
//     )
//     }


// export default Table;

polygon[id] = new esri.geometry.Polygon(new esri.SpatialReference({wkid:4326})); 
polygon[id].addRing(ring); var symbol = new esri.symbol.SimpleFillSymbol(); 
footprint[id] = new esri.Graphic(polygon[id], symbol); 
footprintLayer.add(footprint[id]);  
dojo.connect(footprint[id], "onClick", 
    function(evt) {      alert('It works'); });
