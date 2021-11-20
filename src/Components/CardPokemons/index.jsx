import React from 'react';
import './styles.scss'

export function CardPokemons({ pokemon }) {
  return (
    <div className="card">
      <img src={pokemon.data.sprites.front_default} alt="Pokemon Card" />
      <div className="textConteiner">
        <h2>{pokemon.data.name}</h2>
        <p>Type: {pokemon.data.types[0].type.name}</p>
        <p>Attack: {pokemon.data.stats[1].base_stat}</p>
        <p>Defense: {pokemon.data.stats[2].base_stat}</p>
      </div>
    </div>
  );
}