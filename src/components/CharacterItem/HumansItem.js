import React from 'react';
import './Characters.css';

const HumansItem = ({human, cardSelected}) => {
  return(
    
    <div className="card" onClick={() => cardSelected(human)}>
      <img src={human.imagePath} alt=""/>
      <div className="card-content">
        <p className="text-ego">{human.alterEgo}</p>
        <p className="text-name">{human.name}</p> 
      </div>   
    </div>
  )
}

export default HumansItem;