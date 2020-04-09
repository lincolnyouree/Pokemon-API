import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { getAllPokemon } from './services/pokemon-api';
import PokemonPage from './pages/PokemonPage/PokemonPage';
import './App.css';

class App extends Component {
  state = {
    pokemon: []
  };

  getPokemon = (idx) => {
    return this.state.pokemon[idx];
  }

  async componentDidMount() {
    const pokemon = await getAllPokemon();
    console.log(pokemon.results);
    this.setState({ pokemon: pokemon.results })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">Pokémon Index</header>
        <Route exact path="/" render={() =>
          <section>
            {this.state.pokemon.map((pokemon, idx) => 
              <Link
                key={pokemon.name}
                to={`/pokemon/${idx}`}
              >
                {pokemon.name}
              </Link>
            )}
          </section>
        }>
        </Route>
        <Route path='/pokemon/:idx' render={(props) =>
          <PokemonPage 
            {...props}
            getPokemon={this.getPokemon}
          />
        }>
        </Route>
      </div>
    )
  }
}

export default App;