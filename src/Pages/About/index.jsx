import React, { useState } from 'react';

import { MdCatchingPokemon } from 'react-icons/md';

function About() {
	const [query, setQuery] = useState('');

	return (
		<>
			<MdCatchingPokemon size={30} />
			<h2>Pokedex.me</h2>
			<h1>A react app based in the public PokeAPI</h1>
			<p>
				This app was made with the purpose to practice React.JS and API
				consumption. However I decided to add some "shine", if you get my
				meaning rs
			</p>
			<p>First of all, let me show you all my inspirations for this project:</p>
			<ul>
				<li>
					{' '}
					<a href="#">Takuya Matsuyama</a> <span>-</span>{' '}
					<span>
						A full-stack developer based in Japan (Inkdrop, Craftzdog)
					</span>
				</li>
				<li>
					<a href="#">devSalaz</a> <span>-</span>{' '}
					<span>
						Random programmer that I found on the web (Pokedex with Three.JS)
					</span>
				</li>
				<li>
					<a href="#">Eros M.Lima</a>
					<span>-</span>{' '}
					<span>
						Amazing brazilian programmer that gave me some hints (Pokedex)
					</span>
				</li>
			</ul>
		</>
	);
}

export default About;
