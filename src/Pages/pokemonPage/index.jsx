import React from 'react';
import Navbar from '../../components/navbar';
import usePokemonList from '../../hooks/usePokemonList';

function PokemonPage() {
  const pokemon = usePokemonList();

  return (
    <>
      <Navbar />
      <h1>asjkhdajkls</h1>
    </>
  );
}

export default PokemonPage;
