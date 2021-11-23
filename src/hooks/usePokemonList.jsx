import React, { useEffect, useState } from 'react';
import axios from 'axios';


function usePokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const getPokemonList = async () => {
    let pokemonArray = [];
    for (let i = 1; i <= 151; i++) {
      pokemonArray.push(await getPokemonData(i));
    }
    console.log(pokemonArray);
    setPokemon(pokemonArray);
  }

  const getPokemonData = async (id) => {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return response;
  }

  useEffect(() => {
    getPokemonList();
  }, [])

  return pokemon;
}

export default usePokemonList;