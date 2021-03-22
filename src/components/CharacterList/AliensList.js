import React from 'react';
import AliensItem from '../CharacterItem/AliensItem'

const AliensList = ({aliens}) => {

  const aliensList = aliens.map((alien) => {
    return(
      <AliensItem key={alien.name} alien={alien}/>
    )
  });

  


  return (
    <div>
    <div className="section">
      <p className="section-title">Alienigenas</p>
      <p className="see-all">Ver tudo</p>
    </div>
    <div className="personagem-wrapper">
      {aliensList}
    </div>
    </div>
  )
}

export default AliensList;