import React, { useState } from 'react';

import { MdCatchingPokemon } from 'react-icons/md';
import {
	RiInstagramLine,
	RiLinkedinLine,
	RiGithubLine,
	RiBracesLine,
	RiMailOpenLine,
} from 'react-icons/ri';
import Me from '../../assets/images/me.svg';

import './styles.scss';

function About() {
	const [query, setQuery] = useState('');

	return (
		<div className="article">
			<div className="article-title-container">
				<h1 id="headline">A react app based in the public PokeAPI</h1>
			</div>
			<div className="article-content-container">
				<p>
					This app was made with the purpose to practice ReactJS and API
					consumption. However I decided to add some{' '}
					<span title="Reference to shine pokemons :P">"shine"</span>, if you
					get my meaning rs.
				</p>
				<br />
				<p>
					First of all, let me show you all my inspirations for this project:
				</p>
				<ul>
					<li>
						{' '}
						<a href="https://www.craftz.dog" target="_blank">
							Takuya Matsuyama
						</a>{' '}
						<span>-</span>{' '}
						<span>
							A full-stack developer based in Japan (Inkdrop, Craftzdog).
						</span>
					</li>
					<li>
						<a href="https://github.com/devSalaz" target="_blank">
							devSalaz
						</a>{' '}
						<span>-</span>{' '}
						<span>
							Random programmer that I found on the web (Pokedex with Three.JS).
						</span>
					</li>
					<li>
						<a href="https://github.com/ErosMLima" target="_blank">
							Eros M.Lima
						</a>
						<span>-</span>{' '}
						<span>
							Amazing brazilian programmer that gave me some hints (Pokedex).
						</span>
					</li>
				</ul>
				<br />
				<p>Now, let's get into the Techs.</p>
				<div>
					<MdCatchingPokemon size={50} />
					<h2>Techs, Libs and more...</h2>
				</div>
				<br />
				<h2>Main</h2>
				<ul>
					<li>
						<a href="https://pt-br.reactjs.org" target="_blank">
							ReactJS
						</a>{' '}
						- To build the entire application.
					</li>
					<li>
						<a href="https://pokeapi.co" target="_blank">
							PokeAPI
						</a>{' '}
						- To get all Pokemon informations
					</li>
					<li>
						<a
							href="https://reactrouter.com/docs/en/v6/getting-started/overview"
							target="_blank"
						>
							React Router
						</a>{' '}
						- For application routes.
					</li>
					<li>
						<a href="https://sass-lang.com" target="_blank">
							Sass
						</a>{' '}
						- To improve the CSS.
					</li>
					<li>
						<a href="https://axios-http.com/docs/intro" target="_blank">
							Axios
						</a>{' '}
						- For API consumption.
					</li>
				</ul>
				<br />
				<h2>Libs</h2>
				<ul>
					<li>
						<a href="https://react-leaflet.js.org" target="_blank">
							React Leaflet
						</a>{' '}
						- For interactive map feature.
					</li>
					<li>
						<a href="https://react.semantic-ui.com" target="_blank">
							React Semantic UI
						</a>{' '}
						- For Pokemon list pagination.
					</li>
					<li>
						<a
							href="https://react-icons.github.io/react-icons/"
							target="_blank"
						>
							React Icons
						</a>{' '}
						- For logos and icons at all.
					</li>
					<li>
						<a href="https://www.davidhu.io/react-spinners/" target="_blank">
							React Spinners
						</a>{' '}
						- To add some animations.
					</li>
				</ul>
				<br />
				<h2>More...</h2>
				<ul>
					<li>
						<a
							href="https://play.pokemonshowdown.com/audio/cries/"
							target="_blank"
						>
							pokemonshowdown
						</a>{' '}
						- Index of all Pokemon cries.
					</li>
				</ul>
				<br />
				<h1 id="davi">Find me!</h1>
				<div className="media-container">
					<div className="medias">
						<a href="mailto:dxvialcantara@gmail.com">
							<RiMailOpenLine />
							Mail
						</a>
						<a href="https://github.com/divinurised" target="_blank">
							<RiGithubLine />
							Github
						</a>
						<a
							href="https://www.linkedin.com/in/davi-alcântara-35b5931a0/"
							target="_blank"
						>
							<RiLinkedinLine />
							Linkedin
						</a>
						<a
							href="https://www.instagram.com/davialcantara__/"
							target="_blank"
						>
							<RiInstagramLine />
							Instagram
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
