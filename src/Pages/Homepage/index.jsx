import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../../components/navbar';
import usePokemonList from '../../hooks/usePokemonList';


import { CardPokemons } from '../../components/cardPokemons/index';
import './styles.scss'

const Homepage = () => {
  const pokemon = usePokemonList()

  return (
    <>
      <div className="homepage">
        <main>
          <Navbar />
          <div className="cardContainer">
            {pokemon.map(pokemon => (
              <CardPokemons
                key={pokemon.data.name}
                pokemon={pokemon}
              />
            ))}
          </div>
        </main>
      </div>
    </>
  )
}

export default Homepage;