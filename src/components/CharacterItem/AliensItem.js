import React from 'react';
import './Characters.css';

const AliensItem = ({alien, cardSelected }) => {
  return(
    
    <div className="card" onClick={() => cardSelected(alien)}>
      <img src={alien.imagePath} alt=""/>
      <div className="card-content">
        <p className="text-ego">{alien.alterEgo}</p>
        <p className="text-name">{alien.name}</p> 
      </div>   
    </div>
  )
}

export default AliensItem;