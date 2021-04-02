import React from 'react';
import AliensItem from '../CharacterItem/AliensItem'

const AliensList = ({aliens, cardSelected}) => {


  if (aliens.aliens){
    const aliensList = aliens.aliens.map((alien) => {
      return(
        <AliensItem key={alien.name} alien={alien} cardSelected={cardSelected}/>
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
  };

  return null;
}

export default AliensList;