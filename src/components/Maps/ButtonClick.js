import React, {useEffect, useRef, useState, useCallback} from 'react'
import ButtonCSS from '../Button.module.css';
import NewBarChart from './Newbar';


export default function ButtonClick() {

    // const data = useRef(20)

   const [data, setData] = useState([0]);
   const [labels, setLabels] = useState(['1']);
    // const [data, setData] = useState([])



    //  const numberRef = useRef(0)

     const justClick = () => {

        setData([...data, data[data.length - 1] + 10])
        console.log(data)
        setLabels([...labels, labels[labels.length - 1] + '1'])
        console.log(data)
        console.log(setData([...data, data[data.length - 1] + 10]))
        }
     




        return (
 <>
                <button className={ButtonCSS.waze} onClick={justClick}> Click </button>
                <div style={{ height: 800 }}><NewBarChart count={[data]} label={[labels]}/></div>
</>
        )
    
}




