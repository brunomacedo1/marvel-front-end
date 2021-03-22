import React from 'react';
import './Characters.css';

const AntiHeroesItem = ({antiheroe}) => {
  return(
    
    <div className="card">
      <img src={antiheroe.imagePath} alt=""/>
      <div className="card-content">
        <p className="text-ego">{antiheroe.alterEgo}</p>
        <p className="text-name">{antiheroe.name}</p> 
      </div>   
    </div>
  )
}

export default AntiHeroesItem;