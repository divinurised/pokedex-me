import React from 'react';

import './styles.scss';

const PokemonType = function ({ pokemon }) {
	return (
		<div className="typeContainer">
			{pokemon.types.map((types) => (
				<p key={types.type.name} className={types.type.name}>
					{types.type.name.charAt(0).toUpperCase() + types.type.name.slice(1)}
				</p>
			))}
		</div>
	);
};

export default PokemonType;
