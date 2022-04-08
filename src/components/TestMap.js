import React, { useRef, useEffect, useState } from "react";
import { loadModules } from "esri-loader";


import './TestMap.css'

 


function TestMap({ id }) {
  // create a ref to element to be used as the map's container
  const mapEl = useRef(null);


  // use a side effect to create the map after react has rendered the DOM
  useEffect(
    () => {
      // define the view here so it can be referenced in the clean up function
      let view;
      // the following code is based on this sample:
      // https://developers.arcgis.com/javascript/latest/sample-code/webmap-basic/index.html
      // first lazy-load the esri classes
      loadModules(["esri/views/MapView", "esri/WebMap","esri/layers/FeatureLayer"], {
        css: true
      }).then(([MapView, WebMap, FeatureLayer]) => {

      const trafficLayer = new FeatureLayer({
    url: "https://services1.arcgis.com/usA3lHW20rGU6glp/arcgis/rest/services/Eismo_srautai/FeatureServer/0",
    outFields: ["Pavadinimas", "car_count","id_srautai","ID", "OBJECTID"],
    minScale: 7000.819286,
    // popupTemplate: template ,

  });

        // then we load a web map from an id
        const webmap = new WebMap({
          // autocasts as new PortalItem()
          portalItem: {
            // get item id from the props
            id
          }
        });

        // and we show that map in a container
        view = new MapView({
          map: webmap,
           center: [25.266847, 54.694623],
            zoom: 16,
          // use the ref as a container
          container: mapEl.current
        });


 const listTraffic = document.getElementById("traffic_graphics");




        webmap.layers.add(trafficLayer)

let highlightSelect;
let graphics;
webmap.when(() => {
        const layer = webmap.layers.getItemAt(0)

        view.whenLayerView(layer).then((layerView) => {

            layerView.watch("updating", function (value) {
              console.log(value)
            if (!value) {

              layerView
                .queryFeatures({
                  geometry: view.extent,
                  returnGeometry: true,
                  orderByFields: ["car_count"]
                })
                .then(function (results) {
                  
                  graphics = results.features;

                  let fragment = document.createDocumentFragment();

                  graphics.forEach(function (result, index) {

                    
                    let attributes = result.attributes;

                    console.log(attributes)

    
                    let li = document.createElement("li");
                    li.classList.add("panel-result")
                    li.tabIndex = 0;
                    li.setAttribute("id_srautai", index);
                    li.textContent = result.attributes.id_srautai;
                    
                    fragment.appendChild(li);
                    listTraffic.innerHTML = ""
                    

                  });

                    listTraffic.innerHTML = "";
                  listTraffic.appendChild(fragment);
                  
                 console.log(listTraffic)

                  const queryLayer = layer.createQuery();
            const buttons = document.querySelectorAll("li");
            
            console.log(buttons)

                   for (let i = 0, button = null; (button = buttons[i]); i++) {
              button.addEventListener("click", onClick);

       function onClick(event) {

              console.log(event)
              queryLayer.where = `id_srautai=${event.target.innerText}`;
             

                 layer.queryFeatures(queryLayer).then((result) => {

                console.log(result)


                if (highlightSelect) {
                  highlightSelect.remove();
                }


                const feature = result.features[0];

                console.log(feature.attributes)

                highlightSelect = layerView.highlight(
                  feature.attributes["id_srautai"]
                  
                  
                );
                
                 })
  
       }
                   }
          

                  
                })
                .catch(function (error) {
                  console.error("query failed: ", error);
                });

            }
          });

        });

}

//
        )


      });



      






      return () => {
        // clean up the map view
        if (!!view) {
          view.destroy();
          view = null;
        }
      };
    },
    // only re-load the map if the id has changed
    [id]
  );

  return( <div>

     <div className="panel-container">
            
      <div className="panel-side esri-widget">
        <h3>Eismo srautų kryptys</h3>
        <ul id="traffic_graphics">

       
        
        </ul>
        
      </div>
      
      </div>

      <button className='butt' id='button-highlight'> 20</button>
      <button className='butt' id='button-highlight'> 10</button>

       <div style={{ height: 800 }} ref={mapEl} />
     </div>
        )
  }


export default TestMap

