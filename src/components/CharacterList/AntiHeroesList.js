import React from 'react';
import AntiHeroesItem from '../CharacterItem/AntiHeroesItem'

const AntiHeroesList = ({antiheroes, cardSelected}) => {


  if (antiheroes.antiheroes){
    const antiheroesList = antiheroes.antiheroes.map((antiheroe) => {
      return(
        <AntiHeroesItem key={antiheroe.name} antiheroe={antiheroe} cardSelected={cardSelected}/>
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
    );
  };

  return null;
}

export default AntiHeroesList;