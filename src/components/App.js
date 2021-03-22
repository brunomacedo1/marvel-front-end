import axios from 'axios';
import React from 'react';
import Navbar from './AppBar/AppBar.component';
import AliensList from './CharacterList/AliensList';
import HeroesList from './CharacterList/HeroesList';
import HumansList from './CharacterList/HumansList';
import VillainsList from './CharacterList/VillainsList';
import AntiHeroesList from './CharacterList/AntiHeroesList';
import IconBar from './IconBar/IconBar.component';

class App extends React.Component {

  state = { heroes: [], antiheroes: [], villains: [], aliens: [], humans: []}

  renderList = async () => {
    const response = await axios.get('http://localhost:3000/marvel-api');
    // console.log(response.data)
    this.setState({heroes: response.data.heroes})
    this.setState({antiheroes: response.data.antiHeroes})
    this.setState({villains: response.data.villains})
    this.setState({aliens: response.data.aliens})
    this.setState({humans: response.data.humans})
  }

  componentDidMount(){
    this.renderList();
  }

  render() {
    return (  
      <div className="content-wrapper">
          <Navbar/>
          <div className="head">
            <p className="title">Bem vindo ao Marvel Heroes</p>
            <p className="subtitle">Escolha o seu personagem</p>
          </div>
          <IconBar/>
          <HeroesList heroes={this.state.heroes}/>
          <VillainsList villains={this.state.villains}/>
          <AntiHeroesList antiheroes={this.state.antiheroes} />
          <AliensList aliens={this.state.aliens}/>
          <HumansList humans={this.state.humans}/>
      </div>
    );
  };
};

export default App;