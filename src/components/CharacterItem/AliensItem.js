import React from 'react';
import './Characters.css';

const AliensItem = ({alien}) => {
  return(
    
    <div className="card">
      <img src={alien.imagePath} alt=""/>
      <div className="card-content">
        <p className="text-ego">{alien.alterEgo}</p>
        <p className="text-name">{alien.name}</p> 
      </div>   
    </div>
  )
}

export default AliensItem;