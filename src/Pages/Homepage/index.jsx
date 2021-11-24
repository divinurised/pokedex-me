import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Navbar from '../../components/navbar';
import Loader from '../../components/loader';
import { CardPokemons } from '../../components/cardPokemons/index';

import './styles.scss'

const Homepage = () => {

  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true)

  const getPokemonList = async () => {
    let pokemonArray = [];
    for (let i = 1; i <= 151; i++) {
      pokemonArray.push(await getPokemonData(i));
    }
    console.log(pokemonArray);
    setPokemon(pokemonArray);
    setLoading(false)
  }

  const getPokemonData = async (id) => {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return response;
  }

  useEffect(() => {
    getPokemonList();
  }, [])

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <div className="cardContainer">
            {pokemon.map(pokemon => (
              <CardPokemons
                key={pokemon.data.name}
                pokemon={pokemon}
              />
            ))}
          </div>
        </>
      )}
    </>
  )
}

export default Homepage;