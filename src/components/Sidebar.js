import React from 'react'
import './Sidebar.css'
import Button from './Button'

function Sidebar() {



    return (
        <div style={{position:'absolute', marginTop:'30px'}}>
            
      <Button name="Konstitucijos žiedas"/>
       <Button name="Šeimyniškių sankryža"/>
        <Button name="Santariškių sankryža"/>
      </div>
    )
  }


export default Sidebar