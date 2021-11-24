import React from 'react';

import './styles.scss';

function PokemonType({ pokemon }) {
  return (
    <div className="typeContainer">
      <p className={pokemon.types[0].type.name}>{pokemon.types[0].type.name.charAt(0).toUpperCase() + pokemon.types[0].type.name.slice(1)}</p>
    </div>
  );
}

export default PokemonType;