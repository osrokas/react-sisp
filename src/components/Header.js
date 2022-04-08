import React  from "react";
import './Header.css'
import Button from "./Button";
import logo from './logo.jpg';


function Header() {
  console.log('helau');
  return (
    
    <div className="header-css">
      <img className="logo-css" src={logo} width={130} height={100}/>
      
      
     <Button name="Srautai" />
     <Button name="Parkingas" />
      
    </div>
  )
}


export default Header


