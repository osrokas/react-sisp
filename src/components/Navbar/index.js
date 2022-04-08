
import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,

} from './NavbarElements';
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
  
        <NavMenu>
          <NavLink to='/traffic' activestyle>
            SRAUTAI
          </NavLink>
          <NavLink to='/parking' activestyle>
            PARKINGAS
          </NavLink>
           <NavLink to='/TEST' activestyle>
            TEST
          </NavLink>
          <NavLink to='/newmap' activestyle>
            NEWMAP
          </NavLink>

          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;