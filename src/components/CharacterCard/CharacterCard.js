import React from 'react';
import './Characters.css';

const characterCard = ({data, cardSelected}) => {
  return(
    
    <div className="card" onClick={() => cardSelected(data)}>
      <img src={data.imagePath} alt=""/>
      <div className="card-content">
        <p className="text-ego">{data.alterEgo}</p>
        <p className="text-name">{data.name}</p> 
      </div>   
    </div>
  )
}

export default characterCard;