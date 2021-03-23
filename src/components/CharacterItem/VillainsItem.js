import React from 'react';
import './Characters.css';

const VillainsItem = ({villain, cardSelected}) => {
  return(
    
    <div className="card" onClick={() => cardSelected(villain)}>
      <img src={villain.imagePath} alt=""/>
      <div className="card-content">
        <p className="text-ego">{villain.alterEgo}</p>
        <p className="text-name">{villain.name}</p> 
      </div>   
    </div>
  )
}

export default VillainsItem;