import React from 'react';
import { ReactComponent as Search} from "../../assets/icons/search.svg";
import {ReactComponent as Menu} from "../../assets/icons/menu.svg";
import {ReactComponent as Logo} from "../../assets/icons/marvel.svg";
import './AppBar.css'

const Navbar = props => {
  return (
    <div className="nav-bar">
      <div className="menu-icon"> 
        <Menu/>
      </div>
      <div className="logo-container">
        <Logo/>
      </div>
      <div className="search-icon">
        <Search/>
      </div>
    </div>
  )
};

export default Navbar;