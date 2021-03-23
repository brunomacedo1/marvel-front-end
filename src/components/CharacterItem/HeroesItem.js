import React from 'react';
import './Characters.css';

const HeroesItem = ({heroes, cardSelected}) => {
  return(
    
    <div className="card" onClick={() => cardSelected(heroes)}>
      <img src={heroes.imagePath} alt=""/>
      <div className="card-content">
        <p className="text-ego">{heroes.alterEgo}</p>
        <p className="text-name">{heroes.name}</p> 
      </div>   
    </div>
  )
}

export default HeroesItem;