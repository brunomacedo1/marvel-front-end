import React from 'react';
import VillainsItem from '../CharacterItem/VillainsItem'

const VillainsList = ({villains}) => {

  const villainsList = villains.map((villain) => {
    return(
      <VillainsItem key={villain.name} villain={villain}/>
    )
  });

  


  return (
    <div>
      <div className="section">
        <p className="section-title">Vilões</p>
        <p className="see-all">Ver tudo</p>
      </div>
      <div className="personagem-wrapper">
        {villainsList}
      </div>
    </div>
  )
}

export default VillainsList;