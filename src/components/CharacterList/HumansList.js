import React from 'react';
import HumansItem from '../CharacterItem/HumansItem';

const HumansList = ({humans, cardSelected}) => {


  if(humans.humans){
    const humansList = humans.humans.map((human) => {
      return(
        <HumansItem key={human.name} human={human} cardSelected={cardSelected}/>
      )
    })
  
    return (
      <div>
        <div className="section">
          <p className="section-title">Humanos</p>
          <p className="see-all">Ver tudo</p>
        </div>
        <div className="personagem-wrapper">
            {humansList}
        </div>
      </div>
    );
  };
  return null;
}

export default HumansList;