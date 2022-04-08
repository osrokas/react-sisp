import React, { useRef, useEffect } from "react";
import { loadModules } from 'esri-loader';
import './MapParking.css';



function MapParking() {

    const mapEl=useRef(null)

  useEffect(() => {

    let view;

      loadModules([
        "esri/views/MapView",
        "esri/WebMap"
               
      ],{css:true})
        .then(([MapView, WebMap]) => {

          // Webmap variable

          const webmap = new WebMap({

            portalItem: {
      id: "f6dfe377d4604de5baad83a7f68a06bc"}
      // id: "3986dbca03504241a02be7febab62888" // Srautų webmap
        
          });
          // view variable with parameters

          view = new MapView({
            container: mapEl.current,
            map:webmap,
            center: [25.266847, 54.694623],
            zoom: 10.5,
        });
       

      })
    return() => {
        if(!!view){
            view.destroy()
            view=null
        }
    }
    })
    
    return (
        <div>
          <div className="mapparking-css" ref={mapEl}></div>
        </div>
    )
    }

export default MapParking;