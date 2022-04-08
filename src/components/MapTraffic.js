import React, { useRef, useEffect, useState } from "react";
import { loadModules } from 'esri-loader';
import './MapTraffic.css'
import './Info.css'
import BarChart from "./BarChart";



function MapTraffic() {

  // Variables for BarChart

  const [traf, setTraf] = useState([]);
  const [date, setDate] = useState([]);
  


  // const chartRef = useRef();

  // Map useRef
  const mapEl=useRef(null)

  

  useEffect(() => {

    let view;
    
      // Loading modules from ArcGIS esri-loader library
      loadModules([
        "esri/views/MapView",
        "esri/WebMap",
        "esri/layers/FeatureLayer",
        "esri/Basemap",
        "esri/layers/VectorTileLayer",
        // "esri/symbols/support/cimSymbolUtils",
        "esri/symbols/LineSymbolMarker",
         "esri/widgets/Bookmarks",
        "esri/webmap/Bookmark",
        // "esri/Graphic",
        "esri/layers/GraphicsLayer",
        "esri/symbols/CIMSymbol",
        "esri/widgets/TimeSlider"


        // "esri/symbols/PictureMarkerSymbol",
        // "esri/Color",
        // "esri/symbols/SimpleFillSymbol",
        // "esri/symbols/SimpleLineSymbol",

      ],{css:"https://js.arcgis.com/4.22/esri/themes/dark/main.css"})
        .then(([
          MapView, 
          WebMap, 
          FeatureLayer, 
          Basemap, 
          VectorTileLayer,
          LineSymbolMarker,
          Bookmarks,
          Bookmark,
          GraphicsLayer,
          CIMSymbol,
          TimeSlider,
        ]) => {

         



          // Creating variable for traffic list 

          const listTraffic = document.getElementById("traffic_graphics");
          


          
          const template = {

            
          // autocasts as new PopupTemplate()
          title: "Automobilių srautų matavimai",
          content: [
            {

              type: "fields",
              fieldInfos: [         
                {
                  fieldName: "kryptis",
                  label: "Srautas",      
                }
              ]
            },
              {type: "media",
            // MediaContentElement
                mediaInfos: [
                  {
                    type: "column-chart",
                    color: 'red',   
                    caption: "",
                    value: {
                      theme: "GreySkies",
                      symbol: 'red',
                      fields: ["kryptis",'id_srautai'],
                    }
                  },
                ]
              },
            ]
          };



            // Time slider

        const timeSlider = new TimeSlider({
          container: "timeSlider",
          view: view,
          timeVisible: true, // show the time stamps on the timeslider
          loop: true,

          
        });

          // Simbology 

        // Traffic polyline symbol
 
         const lineSymbolMarker = new LineSymbolMarker({
              placement: "end",
              style: "arrow"
            });



          // Basemap tile layer

          const vectorTileLayer = new VectorTileLayer({
              portalItem: {
                id: "29900f03344f480d985780e7d45650d3" // Neon basemap
              },
              effect: "opacity(0.9) bloom(1.1  0 .4)",
            });


          // Traffic line renderer

          const trafficRenderer = {
            type: "simple",
            symbol: {
              marker: lineSymbolMarker,
              type: "simple-line",
              style: "solid"
            },
            visualVariables: [
              {
                type: "size",
                field: "car_count",
                minDataValue: 0,
                maxDataValue: 200,
                minSize: "1px",
                maxSize: "25px"
              },
           {
              type: "color", // indicates this is a color visual variable
              field: "car_count", // car count field
              stops: [
                {
                  value: 0, // features where < 10% of the pop in poverty
                  color: "rgba(48,0,156,3)",
                },
                {
                  value: 30, // features where < 10% of the pop in poverty
                  color: "#rgba(55,0,179,3)", // will be assigned this color (beige)
                },
                {
                  value: 60, // features where < 10% of the pop in poverty
                  color: "rgba(98,0,238,3)",
                },
                {
                  value: 90, // features where < 10% of the pop in poverty
                  color: "rgba(187,134,252,3)",
                },
                {
                  value: 120, // features where < 10% of the pop in poverty
                  color: "rgba(219,178,255,3)", // will be assigned this color (beige)
                },
                {
                  value: 200, // features where > 30% of the pop in poverty
                  color: "rgba(242,231,254,3)",
                }]
                  }
                ]
      };


      // Traffic count variable 

      const trafficcountrenderer = {
          type: "simple",  // autocasts as new SimpleRenderer()
          symbol: { type: "simple-fill",
                opacity: 0.1,
              
              outline: {  // autocasts as new SimpleLineSymbol()
              width: 6,
              color: "black"},},  // autocasts as new SimpleFillSymbol()

          visualVariables: [{
            type: "color",
            field: "kryptis",
            // features with 30 ppl/sq km or below are assigned the first color
            stops: [
                {
                  value: 0, // features where < 10% of the pop in poverty
                  color: "rgba(48,0,156,.6)",

                },
                {
                  value: 30, // features where < 10% of the pop in poverty
                  color: "rgba(98,0,238,.6)"
                  , // will be assigned this color (beige)

                },
                {
                  value: 60, // features where < 10% of the pop in poverty
                  color: "rgba(187,134,252,.6)",


                },
                {
                  value: 90, // features where < 10% of the pop in poverty
                  color: "#rgba(55,0,179,.6)",
                },
                {
                  value: 120, // features where < 10% of the pop in poverty
                  color: "rgba(219,178,255,.6)", // will be assigned this color (beige)

                }]
          }]
        };

      // Basemap 

           const basemap = new Basemap({
              baseLayers: [vectorTileLayer],
            
            });

          // Webmap 

          const webmap = new WebMap({
            basemap: basemap,
      //       portalItem: {
      // id: basemap // Neon basemap
      // id: "3986dbca03504241a02be7febab62888" // Srautų webmap

          });

          // view variable with parameters

          view = new MapView({
            container: mapEl.current,
            map:webmap,
            center: [25.266847, 54.694623],
            zoom: 10.5,
            highlightOptions: {
            color: "#5600e6",
            width: "40",
          },
              background: { // autocasts new ColorBackground()
              color: "#0c0d39" },// autocasts as new Color()
            popup:{
                        dockEnabled: true,
          dockOptions: {
            buttonEnabled: false,
            breakpoint: false
          }
        
            }
            
        });
        ///// Feeature layers 

        // Traffic layer 
        const trafficLayer = new FeatureLayer({
            url: "https://services1.arcgis.com/usA3lHW20rGU6glp/arcgis/rest/services/Eismo_srautai/FeatureServer/1",
            outFields: ['data','car_count','kryptis','Pavadinimas','id_srautai','OBJECTID'],
            renderer: trafficRenderer,
            minScale: 7000.819286,
            // popupTemplate: template ,
            highlightOptions: {
                    color: "red"
                  },
            effect: "bloom(3  0 .1) blur(2pt) opacity(0.9)",
    //         timeInfo: {
    // startField: "data"},

          });
        // Traffic signs polygon layer

        const signspolygonlayer = new FeatureLayer({
            url: "https://services1.arcgis.com/usA3lHW20rGU6glp/arcgis/rest/services/zenklu_poligonas/FeatureServer/0",
            // renderer: trafficRenderer,
            // popupTemplate: template,
            renderer: trafficcountrenderer,
            minScale: 7000.819286,
            // effect: "bloom(3  0 .1) blur(2pt) opacity(0.9)",
          });


      // Traffic signs point layer

        const signspointlayer = new FeatureLayer({
          url: "https://services1.arcgis.com/usA3lHW20rGU6glp/arcgis/rest/services/zenklai_taskinis/FeatureServer/0",
          // renderer: trafficRenderer,
          // popupTemplate: template,
          minScale: 7000.819286,
          symbol: new CIMSymbol({
              data:  {
                type: "CIMSymbolReference",
                symbol: {
                  type: "CIMPointSymbol",
                  symbolLayers: [{
                      type: "CIMVectorMarker",
                      enable: true,
                      size: 32,
                      frame: {
                        xmin: 0,
                        ymin: 0,
                        xmax: 16,
                        ymax: 16
                      },
                      markerGraphics: [{
                        type: "CIMMarkerGraphic",
                        geometry: {
                          rings: [[[8, 16],[0, 0],[16, 0],[8, 16]]]
                        },
                        symbol: {
                          type: "CIMPolygonSymbol",
                          symbolLayers: [{
                            type: "CIMSolidStroke",
                            width: 5,
                            color: [240, 94, 35, 255]
                          }]
                        }
                      }]
                  }]
                }
              }
          })

        });

       
      


      // Traffic count polygon layer (represents car number of each direction)

        const trafficcountlayer = new FeatureLayer({
          url: "https://services1.arcgis.com/usA3lHW20rGU6glp/arcgis/rest/services/srautai_sk/FeatureServer/0",
          outFields: ["id_srautai", "kryptis"],
          // renderer: trafficRenderer,
          // popupTemplate: template,

          minScale: 7000.819286,
          renderer: trafficcountrenderer,
          effect: "bloom(1.3  0 .1) opacity(1)",
        });



    // Polygon layer of measurable interestions

        const interestionstraffic = new FeatureLayer({
          url: "https://services1.arcgis.com/usA3lHW20rGU6glp/arcgis/rest/services/Sankryžos/FeatureServer/0",
          // renderer: trafficRenderer,
          minScale: 7000.819286,
          // effect: "bloom(3  0 .1) blur(2pt) opacity(0.9)",
        });



        let highlight;
        let graphics;

        webmap.when(() => {
                const layer = webmap.layers.getItemAt(0)
                

                view.whenLayerView(layer).then((layerView) => {

                  
                      
                    
                    layerView.watch("updating", function (value) {
                    if (!value) {
                      layerView
                        .queryFeatures({
                          
                          geometry: view.extent,
                          returnGeometry: true,
                          orderByFields: ["kryptis"]
                        })
                        .then(function (results) {
                         
                      
                          graphics = results.features;
                          // console.log(graphics)
                          let fragment = document.createDocumentFragment();
                          timeSlider.fullTimeExtent =
                                                      layer.timeInfo.fullTimeExtent.expandTo("hours");
                                                      timeSlider.stops = {
                                                      interval: layer.timeInfo.interval
                                                      };
                          
                          graphics.forEach(function (result, index) {                   
                          // console.log(result +  "  " +  index)
                            
                          //   console.log(result.attributes)
                            

                            let li = document.createElement("li");
                            li.classList.add("panel-result")
                            li.tabIndex = 0;
                            li.setAttribute("id", result.attributes.OBJECTID);
                            li.textContent = "ŽYMĖTI";
                            li.style.backgroundColor = '#5600e6';
                            li.style.borderRadius = '10px'
                            li.style.justifyContent = 'center';
                            li.style.padding = "10px";
                            li.style.paddingLeft = '120px';
                            li.style.color  = 'white';
                            
                            
                            let es = document.createElement("div");
                            es.classList.add("panel-result-es");
                            es.textContent =  result.attributes.kryptis;
                            es.style.height = '35px';
                            es.style.fontSize = '30px';
                            es.style.justifyContent = 'center';
                            es.style.padding = "10px";
                            es.style.paddingLeft = '120px';
                            es.style.color  = 'white';

                            let ef = document.createElement("div");
                            ef.classList.add("panel-result-es");
                            ef.textContent =  result.attributes.Pavadinimas;
                            ef.style.padding = "10px";
                            ef.style.fontSize = '14px';
                            ef.style.color  = 'white';
                            
                            // ef.style.height = '35px';
                            // ef.style.fontSize = '25px';
                            // ef.style.justifyContent = 'center';
                            // ef.style.paddingLeft = '120px'


                            
                            fragment.appendChild(es);
                            fragment.appendChild(ef);
                            fragment.appendChild(li);
                            listTraffic.innerHTML = ""                       
                          });


                          
                          listTraffic.innerHTML = "";
                          listTraffic.appendChild(fragment);
                          const queryLayer = layer.createQuery();
                          // const buttons = document.querySelectorAll("li");
                          // for (let i = 0, button = null; (button = buttons[i]); i++) {
                          //     button.addEventListener("click", onClick);
                          //     function onClick(event) {
                          const cars = []
                          const datePush = []
                          const buttons = document.querySelectorAll("li");
                          for (let i = 0; i < buttons.length;  i++) {
                              buttons[i].addEventListener("click", onClick);
                              
              

                          }                                       
                        })
                        .catch(function (error) {
                          console.error("query failed: ", error);
                        });
                    }
                  });
                });
        });

              

          // Bookmarks 

          const bookmarks = new Bookmarks({
                  view: view,
                  expanded: true,
                  duration: 200000,
                  bookmarks: [
                    new Bookmark({
                      name: "Konstitucijos žiedas",
                      viewpoint: {
                        targetGeometry: {
                          type: "extent",
                          spatialReference: {
                            wkid: 4326
                          },
                          xmin: 25.257541121 ,
                          ymin: 54.695864 ,
                          xmax: 25.271445343 ,
                          ymax: 54.701221212 
                        }
                      }
                    }),
                    new Bookmark({
                      name: "Šeimyniškių sankryža",
                      viewpoint: {
                        targetGeometry: {
                          type: "extent",
                          spatialReference: {
                            wkid: 4326
                          },
                          xmin: 25.280194 ,
                          ymin: 54.694189,
                          xmax: 25.283383,
                          ymax: 54.695249
                        }
                      }
                    }),
                    new Bookmark({
                      name: "Santariškių sankryža",
                      viewpoint: {
                        targetGeometry: {
                          type: "extent",
                          spatialReference: {
                            wkid: 4326
                          },
                          xmin: 25.267747 ,
                          ymin: 54.752639,
                          xmax: 25.270478 ,
                          ymax: 54.75367
                        }
                      }
                    })
                  ]
                });


              

  // Adding feature layer to Webmap
  
  // webmap.layers.add(interestionstraffic)
        webmap.layers.add(trafficLayer)
        webmap.layers.add(signspolygonlayer)
        webmap.layers.add(signspointlayer)
        webmap.layers.add(trafficcountlayer)
        // webmap.add(graphicsLayer)
        
  // graphicsLayer.add(pointGraphic)
          view.ui.add(bookmarks, {
                  position: "top-right",
                });      
            view.on("click", (event) => {
          
            
        });
function onClick(event) {      
                              // console.log(event)
  
                            queryLayer.where = `OBJECTID=${event.target.id}`;
      
                            layer.queryFeatures(queryLayer).then((queryres) => {
                                // console.log('queryres   ' + queryres.features[0])
                                if (highlight) {
                                  highlight.remove();
                                }
                                const feature = queryres.features[0];
                                highlight = layerView.highlight(
                                  feature.attributes["OBJECTID"]
                                );
                                // console.log("id  " + feature.attributes["id_srautai"])
                                // console.log("skaicius" + feature.attributes["car_count"]);
                                // console.log(feature.attributes)

                                cars.push(feature.attributes["car_count"])
     
                                // console.log(feature.attributes["car_count"])

                                datePush.push(feature.attributes["data"])

                                
                                const count_car = cars
                                

                                const unix = datePush

                                console.log('cars'+ cars)

                                // setTraf([...traf, traf[traf.length - 1] + 10])
                                // console.log(traf)
                                // setDate([...date, date[date.length - 1] + '1'])
                                // console.log(date)

                                // console.log(traf)
                                // console.log(unix)
                                // Create a new JavaScript Date object based on the timestamp
                                // multiplied by 1000 so that the argument is in milliseconds, not seconds.
                                // var date = new Date(unix);
                                // // Hours part from the timestamp
                                // var day = date.getUTCDay();
                                // var month = date.getMonth();
                                // var year = date.getFullYear();
                                // var hours = date.getHours();
                                // // Minutes part from the timestamp
                                // var minutes = "0" + date.getMinutes();
                                // // Seconds part from the timestamp
                                // var seconds = "0" + date.getSeconds();
                                // // Will display time in 10:30:23 format
                                // var formattedTime = year + '-' + month +  '-' +  day + '  ' + hours + ':' + minutes.substr(-2) 
                                setTraf(cars) 
                                setDate(unix)              
              
                            })
              }
       

view.ui.add(timeSlider, {position: "bottom-left"})
        
// wait for the time-aware layer to load
// trafficcountlayer.when(() => {
//   // set up time slider properties based on layer timeInfo
//   timeSlider.fullTimeExtent = trafficcountlayer.timeInfo.fullTimeExtent;
//   timeSlider.stops = {
//    interval: trafficcountlayer.timeInfo.interval
//   };
// });


      })
    return() => {
        if(!!view){
            view.destroy()
            view=null
        }
      }
  },
          [mapEl])
          



    return (
      <div>
        <div style={{ display: 'block-inline',}}>
          <div className="panel-container">
            <div className="panel-side esri-widget">
              <h3 style={{color: 'white'}}>Eismo srautų kryptys	</h3>
                <ul id="traffic_graphics">
                  <li style={{color: 'white'}}>Kraunasi&hellip;</li>
                </ul>
            </div>
          </div>
          <div className="element"><BarChart count={traf} date={date} /></div>
          <div className="map-css" ref={mapEl}></div>
          <div id="timeSlider" className="slider"> </div>
        </div>
      </div>
    )
    }


export default MapTraffic;