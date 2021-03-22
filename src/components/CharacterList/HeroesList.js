import React from 'react';
import HeroesItem from '../CharacterItem/HeroesItem';

const HeroesList = ({heroes}) => {

  const heroesList = heroes.map((heroe) => {
    return(
      <HeroesItem key={heroe.name} heroes={heroe}/>
    );
  });

  return (
    <div>
      <div className="section">
        <p className="section-title">Heróis</p>
        <p className="see-all">Ver tudo</p>
      </div>
      <div className="personagem-wrapper">
              {heroesList}   
      </div>
    </div>
  )
}

export default HeroesList;