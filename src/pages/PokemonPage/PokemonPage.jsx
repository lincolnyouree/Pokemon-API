import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './PokemonPage.css';

class PokemonPage extends Component {
    state = {
        pokemon: []
    }

    render() {
        return (
            <div className='PokemonPage'>
                Pokémon Page
            </div>
        )
    }

}

export default PokemonPage;