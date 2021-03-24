import axios from 'axios';
import React from 'react';
import Navbar from './AppBar/AppBar.component';
import AliensList from './CharacterList/AliensList';
import HeroesList from './CharacterList/HeroesList';
import HumansList from './CharacterList/HumansList';
import VillainsList from './CharacterList/VillainsList';
import AntiHeroesList from './CharacterList/AntiHeroesList';
import Details from './Details/Details';
import IconBar from './IconBar/IconBar.component';

class App extends React.Component {
  
  // Objetos que vão conter as informações do sistema, e são definidos pelo metódo constructor. 
  state = { heroes: [], antiheroes: [], villains: [], aliens: [], humans: [], cardSelected: null}


  //Função  onde é feita a requisição(GET) a api e muda os respectivos states com o que é retornado da api.
  renderList = async () => {
    await axios.get('https://marvel-api-teste.herokuapp.com/api')
    .then((response) => {
      this.setState({heroes: response.data.heroes});
      this.setState({antiheroes: response.data.antiHeroes});
      this.setState({villains: response.data.villains});
      this.setState({aliens: response.data.aliens});
      this.setState({humans: response.data.humans});
    });
  }

  // Callback de pai para filho onde é selecionado os dados de um card especifico.
  onCardSelected = (cardData) => {
    this.setState({cardSelected: cardData});
  }

  //Lifecycle method para garantir que os dados sejam obtidos.
  componentDidMount(){
    this.renderList();
  }


  //Metódo obrigatorio para definir um class component.
  
  render() {
    const cardData = this.state.cardSelected
    if (cardData === null) {
      return (
        <div className="content-wrapper">
            <Navbar/>
            <div className="head">
              <p className="title">Bem vindo ao Marvel Heroes</p>
              <p className="subtitle">Escolha o seu personagem</p>
            </div>
            <IconBar/>
            <HeroesList heroes={this.state.heroes} cardSelected={this.onCardSelected} />
            <VillainsList villains={this.state.villains} cardSelected={this.onCardSelected} />
            <AntiHeroesList antiheroes={this.state.antiheroes} cardSelected={this.onCardSelected} />
            <AliensList aliens={this.state.aliens} cardSelected={this.onCardSelected} />
            <HumansList humans={this.state.humans} cardSelected={this.onCardSelected}/>
        </div>
      );
    } else {
      return (
        <Details data={this.state.cardSelected}/>
      );
    }
  };
};

export default App;