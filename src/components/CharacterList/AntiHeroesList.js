import React from 'react';
import AntiHeroesItem from '../CharacterItem/AntiHeroesItem'

const AntiHeroesList = ({antiheroes}) => {

  const antiheroesList = antiheroes.map((antiheroe) => {
    return(
      <AntiHeroesItem key={antiheroe.name} antiheroe={antiheroe}/>
    )
  });
  
  return (
    <div className="">
      <div className="section">
        <p className="section-title">Anti-Herois</p>
        <p className="see-all">Ver tudo</p>
      </div>
      <div className="personagem-wrapper">
        {antiheroesList}
      </div>
    </div>
  )
}

export default AntiHeroesList;