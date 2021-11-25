import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Navbar from '../../components/navbar';
import Footer from '../../components/Footer';
import Loader from '../../components/loader';
import { CardPokemons } from '../../components/cardPokemons/index';

import './styles.scss'

const Homepage = () => {

  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true)
  const [query, setQuery] = useState("");

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

  console.log(pokemon)

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar getQuery={(q) => setQuery(q)} />
          <div className="cardContainer">
            {pokemon.filter((pokemon) => {
              if (query == '') {
                return pokemon;
              } else if (pokemon.data.name.toLowerCase().includes(query.toLowerCase())) {
                return pokemon;
              }
            }).map(pokemon => (
              <CardPokemons
                key={pokemon.data.name}
                pokemon={pokemon}
              />
            ))}
          </div>
          <Footer />
        </>
      )}
    </>
  )
}

export default Homepage;