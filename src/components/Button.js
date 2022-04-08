import React from 'react'
import ButtonCSS from './Button.module.css';



const Button = (props) => {


        return (
        <div>
                <button className={ButtonCSS.waze}> {props.name} </button>
        </div>
        )
    }


export default Button