import React from 'react';
import { ReactComponent as Alien} from "../../assets/icons/alien.svg";
import { ReactComponent as Antihero} from "../../assets/icons/antihero.svg"; 
import { ReactComponent as Hero} from "../../assets/icons/hero.svg"; 
import { ReactComponent as Human} from "../../assets/icons/human.svg"; 
import {ReactComponent as Villain} from "../../assets/icons/villain.svg"; 
import './IconBar.css';

const IconBar = props => {
  return(
    <div className="categories">
        <Hero className="circle hero"/>
        <Villain className="circle villain"/>
        <Antihero className="circle antihero"/>
        <Alien className="circle alien" />
        <Human className="circle human"/>
    </div>
  )
}

export default IconBar;