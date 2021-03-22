import React from 'react';
import HumansItem from '../CharacterItem/HumansItem';

const HumansList = ({humans}) => {

  const humansList = humans.map((human) => {
    return(
      <HumansItem key={human.name} human={human}/>
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
  )
}

export default HumansList;