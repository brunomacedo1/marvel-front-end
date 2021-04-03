import React from 'react';
import './Details.css'
import {ReactComponent as Age} from "../../assets/icons/age.svg"; 
import {ReactComponent as Height} from "../../assets/icons/height.svg"; 
import {ReactComponent as Weight} from "../../assets/icons/weight.svg"; 
import {ReactComponent as Universe} from "../../assets/icons/universe.svg"; 
import {ReactComponent as BackArrow} from "../../assets/icons/back.svg"; 



const Details = ({data}) => {

  const weight = Object.entries(data.caracteristics.weight)
  const height = Object.entries(data.caracteristics.height)

  return (
    <div className="wrapper">
      <div className="details-container" style={{ backgroundImage: `url(${data.imagePath})`}} >
        <a href="/">
          <BackArrow/>
        </a>
        <div className="details-hero">
          <p className="alterEgo">{data.alterEgo}</p>
          <p className="name">{data.name}</p>
        </div>

        <div className="caracteristics">
          <div className="age">
            <Age/>
            <p>{data.caracteristics.birth}</p>
          </div>
          <div className="peso">
            <Weight/>
            <p>{weight[0][1]}{weight[1][1]}</p>
          </div>
          <div className="altura">
            <Height/>
            <p>{height[0][1]}{height[1][1]}</p>
          </div>
          <div className="universo">
            <Universe/>
            <p>{data.caracteristics.universe}</p>
          </div>
          
          
          
        </div>

        <div className="biografia">
          <p>{data.biography}</p>
        </div>

        <div className="habilidades">
        <h1>Habilidades</h1>
          <p>Força {data.abilities.force}</p>
          <p>Inteligência {data.abilities.intelligence}</p>
          <p>Agilidade {data.abilities.agility}</p>
          <p>Resiliência {data.abilities.endurance}</p>
          <p>Velocidade {data.abilities.velocity}</p>
        </div>

        
        <h1>Filmes</h1>
        <div className="movies">
          {data.movies.map(img => 
              <div className="detailCard"> 
                <img src={img} alt=""/>
              </div>
          )}
        </div>
      </div>
    </div>
  );
}


export default Details;