import {Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip} from 'chart.js';
import {Bar, getDatasetAtEvent} from 'react-chartjs-2'
import ChartDataLabels from 'chartjs-plugin-datalabels';
import '../BarChart.css';
import { useEffect, useState } from 'react';


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip
)







var NewBarChart =  ({count, label}) => {


    
    var data = {
        
        plugins: [ChartDataLabels],
        labels: label[0],
        datasets: [{
            
            label: 'Transporto priemonės ',
            data: count[0],
            backgroundColor: [

                '#b300ff93',
                
            ],
            // borderColor: [
    
            //     'black',
                
            // ],
            // borderWidth: 3,

        }]
    };

    var options =  {
        plugins: {
      // Change options for ALL labels of THIS CHART
      datalabels: {
        color: '#36A2EB'
      }
    },
        tooltips: {
                enabled: true
            },
            //  hover: {
            //     animationDuration: 1
            // },    

        responsive: true,
        maintainAspectRatio: false,
        scales: {
            
                y: {

                    max: 150,
                    min: 0,
                    // grid:{
                    //     color: 'rgba (218, 223, 225, 0.4)',
                    // },
                    color: 'red',
                    ticks: {
                        color: 'white', // not 'fontColor:' anymore
          // fontSize: 18,
                        font: {
                            size: 12, // 'size' now within object 'font {}'
                        },
                        steps: 15,
                        stepSize: 10,
                        beginAtZero: true
                    }

                },
                    
      
                x: {

                    // grid:{
                    //     color: 'rgba (218, 223, 225, 0.4)',
                    // },
                    ticks: {
                        color: 'white', // not 'fontColor:' anymore
                        // fontSize: 18,
                        font: {
                            size: 14, // 'size' now within object 'font {}'
                        },
                    
                    }
                }
                                
            },
                    legend:{
                        labels:{
                            color : "black",
                            fontSize:26,
                        }
                    },
                }



    return (

        <Bar className='BarChart' data={data}
         options={options}/>

         
        
        )
    }
    
export default NewBarChart;
