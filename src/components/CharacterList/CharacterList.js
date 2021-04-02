import React from 'react';
import CharacterCard from '../CharacterCard/CharacterCard';

const CharacterList = ({data, cardSelected}) => {

  if (data) {
    const cardList = data.map((data) => {
      return(
        <CharacterCard key={data.name} data={data} cardSelected={cardSelected}/>
      );
    });

    return (
      <div>
        <div className="section">
          <p className="section-title">Heróis</p>
          <p className="see-all">Ver tudo</p>
        </div>
        <div className="personagem-wrapper">
                {cardList}   
        </div>
      </div>
    )
  }

  return (
    <div>Loading...</div>
  )
}

export default CharacterList;