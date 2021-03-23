import React from 'react';
import VillainsItem from '../CharacterItem/VillainsItem'

const VillainsList = ({villains, cardSelected}) => {

  const villainsList = villains.map((villain) => {
    return(
      <VillainsItem key={villain.name} villain={villain} cardSelected={cardSelected}/>
    )
  });

  


  return (
    <section className="vilao">
      <div className="section">
        <p className="section-title">Vilões</p>
        <p className="see-all">Ver tudo</p>
      </div>
      <div className="personagem-wrapper">
        {villainsList}
      </div>
    </section>
  )
}

export default VillainsList;