import React from 'react';
import './styles.scss'
import { Link } from 'react-router-dom';

export function CardPokemons({ pokemon }) {
  return (
    <Link style={{ textDecoration: 'none', color: '#000' }} to={`/pokemon/${pokemon.data.id}`}>
      <div className="card">
        <img src={pokemon.data.sprites.front_default} alt="Pokemon Card" />
        <div className="textConteiner">
          <h2>#{pokemon.data.id} {pokemon.data.name.charAt(0).toUpperCase() + pokemon.data.name.slice(1)}</h2>
          <p>Type: {pokemon.data.types[0].type.name}</p>
          <p>Attack: {pokemon.data.stats[1].base_stat}</p>
          <p>Defense: {pokemon.data.stats[2].base_stat}</p>
        </div>
      </div>
    </Link>
  );
}