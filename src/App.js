import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Navbar from './components/AppBar/AppBar.component';
import CharacterList from './components/CharacterList/CharacterList';
import Details from './components/Details/Details';
import IconBar from './components/IconBar/IconBar.component';
import Route from './Route'

const App = () => {

  // Criando o state e setState com hooks.
  const [data, setData] = useState([]);
  // const [cardSelected, setCardSelected] = useState(null);

  // Callback de pai para filho onde é selecionado os dados de um card especifico.
  // const onCardSelected = (cardData) => {
  //   setCardSelected(cardData);
  // };

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
  
  console.log(data.villains)

  return (
    <React.Fragment>
      <Route path="/">
        <div className="content-wrapper">
          <Navbar/>
          <div className="head">
            <p className="title">Bem vindo ao Marvel Heroes</p>
            <p className="subtitle">Escolha o seu personagem</p>
          </div>
          <IconBar/>
          <CharacterList data={data.heroes} section="Heróis" />
          <CharacterList data={data.villains} section="Vilões"/>
          <CharacterList data={data.antiHeroes} section="Anti-Heróis"/>
          <CharacterList data={data.aliens} section="Aliens"/>
          <CharacterList data={data.humans} section="Humanos"/>
      </div>
      </Route>
      {/* Rota dos Heróis */}
      { data.heroes
        ? <Route path="/homem-aranha"><Details data={data.heroes[0]}/></Route>
        : null
      }
      { data.heroes
        ? <Route path="/pantera-negra"><Details data={data.heroes[1]}/></Route>
        : null
      }
      { data.heroes
        ? <Route path="/homem-de-ferro"><Details data={data.heroes[2]}/></Route>
        : null
      }
      {/* Rota dos Vilões */}
      { data.villains
        ? <Route path="/caveira-vermelha"><Details data={data.villains[0]}/></Route>
        : null
      }
      { data.villains
        ? <Route path="/doutor-destino"><Details data={data.villains[1]}/></Route>
        : null
      }
      { data.villains
        ? <Route path="/duende-verde"><Details data={data.villains[2]}/></Route>
        : null
      }
       {/* Rota dos Vilões */}
      { data.antiHeroes
        ? <Route path="/deadpool"><Details data={data.antiHeroes[0]}/></Route>
        : null
      }
      { data.antiHeroes
        ? <Route path="/venom"><Details data={data.antiHeroes[1]}/></Route>
        : null
      }
      { data.antiHeroes
        ? <Route path="/justiceiro"><Details data={data.antiHeroes[2]}/></Route>
        : null
      }
      {/* Rota dos Vilões */}
      { data.aliens
        ? <Route path="/thanos"><Details data={data.aliens[0]}/></Route>
        : null
      }
      { data.aliens
        ? <Route path="/ronan"><Details data={data.aliens[1]}/></Route>
        : null
      }
      { data.aliens
        ? <Route path="/talos"><Details data={data.aliens[2]}/></Route>
        : null
      }
      {/* Rota dos Vilões */}
      { data.humans
        ? <Route path="/howard-stark"><Details data={data.humans[0]}/></Route>
        : null
      }
      { data.humans
        ? <Route path="/mary-jane"><Details data={data.humans[1]}/></Route>
        : null
      }
      { data.humans
        ? <Route path="/happy-hogan"><Details data={data.humans[2]}/></Route>
        : null
      }
    </React.Fragment>
  )
}

export default App;