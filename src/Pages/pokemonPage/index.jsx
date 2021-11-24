import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';

import Loader from '../../components/loader';
import Navbar from '../../components/navbar';

const PokemonPage = () => {
  const { id } = useParams();

  const [pokemonDetails, setPokemonDetails] = useState();
  const [loading, setLoading] = useState(true);

  const getPokemon = async (id) => {
    const details = await getPokemonData(id);
    setPokemonDetails(details.data);
    console.log(details.data)
    setLoading(false);
  }

  const getPokemonData = async (id) => {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return res;
  }

  useEffect(() => {
    getPokemon(id);
  }, [])

  console.log(pokemonDetails)

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <h1>{pokemonDetails.name}</h1>
        </>
      )}
    </>
  );
}

export default PokemonPage;
