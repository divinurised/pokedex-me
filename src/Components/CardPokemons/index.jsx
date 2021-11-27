import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';
import PokemonType from '../PokemonType';

export const CardPokemons = function ({ pokemon }) {
	// console.log(pokemon);

	return (
		<Link
			style={{ textDecoration: 'none', color: '#000' }}
			to={`/pokemon/${pokemon.data.id}`}
		>
			<div className="card">
				<img src={pokemon.data.sprites.front_default} alt="Pokemon Card" />
				<div className="textContainer">
					<h2>
						#{pokemon.data.id}{' '}
						{pokemon.data.name.charAt(0).toUpperCase() +
							pokemon.data.name.slice(1)}
					</h2>
					<PokemonType pokemon={pokemon.data} />
				</div>
			</div>
		</Link>
	);
};
