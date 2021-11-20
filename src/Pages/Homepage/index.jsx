import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { GoMarkGithub, GoSearch } from 'react-icons/go'


import { CardPokemons } from '../../Components/CardPokemons/index';
import './styles.scss'

const App = () => {

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

  return (
    <>
      <div className="homepage">
        <main>
          <section className="navbar">
            <div className="title">
              <h1>Pokedex.me</h1>
              <p>Find your favorite Pokemon near you!</p>
              <div className="searchContainer">
                <GoSearch />
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Search your Pokemon" />
              </div>
            </div>
            <div className="navigation">
              <p>Map</p>
              <p><GoMarkGithub className="githubIcon" />  Source</p>
            </div>
          </section>
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
export default App