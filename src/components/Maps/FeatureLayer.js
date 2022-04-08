
export default NewFl = () => ({
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



