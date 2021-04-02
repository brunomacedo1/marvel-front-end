import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Navbar from './AppBar/AppBar.component';
import AliensList from './CharacterList/AliensList';
import HeroesList from './CharacterList/HeroesList';
import HumansList from './CharacterList/HumansList';
import VillainsList from './CharacterList/VillainsList';
import AntiHeroesList from './CharacterList/AntiHeroesList';
import Details from './Details/Details';
import IconBar from './IconBar/IconBar.component';
import Route from './Route';


const App = () => {

  // Criando o state e setState com hooks.
  const [data, setData] = useState([]);
  const [cardSelected, setCardSelected] = useState(null);

  // Callback de pai para filho onde é selecionado os dados de um card especifico.
  const onCardSelected = (cardData) => {
    setCardSelected(cardData);
  };

  //Função  onde é feita a requisição(GET) a api e atribui ao state 'data' os dados retornados da api.
  const renderList = async () => {
    const response = await axios.get('https://marvel-api-teste.herokuapp.com/api');
    setData(response.data)
  };


  //Garante que os dados sejam obtidos, executando a função quando o app é renderizado.
  useEffect(() => {
    renderList();

    //Cleanup function.
    //obs: não foi necessário utilizar.
    return () => {

    }
  }, [])

  if (cardSelected === null) {
    return (
      <div className="content-wrapper">
          <Navbar/>
          <div className="head">
            <p className="title">Bem vindo ao Marvel Heroes</p>
            <p className="subtitle">Escolha o seu personagem</p>
          </div>
          <IconBar/>
          <HeroesList heroes={data} cardSelected={onCardSelected} />
          <VillainsList villains={data} cardSelected={onCardSelected} />
          <AntiHeroesList antiheroes={data} cardSelected={onCardSelected} />
          <AliensList aliens={data} cardSelected={onCardSelected} />
          <HumansList humans={data} cardSelected={onCardSelected}/>
      </div>
    );
  } else {
    return (
      <Details data={cardSelected}/>
    );
  }

}

export default App;