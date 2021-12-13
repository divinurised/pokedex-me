import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import ToggleMenu from '../ToggleMenu';

import { GoMarkGithub, GoSearch } from 'react-icons/go';
import { MdCatchingPokemon } from 'react-icons/md';
import './styles.scss';

function Navbar({ pokemon, pokemonsName }) {
	const [text, setText] = useState('');
	const [nextURL, setNextURL] = [''];

	const [filteredPokemons, setFilteredPokemons] = useState([]);

	const handleFilter = (event) => {
		const searchWord = event.target.value;
		const newFilter = pokemonsName.results.filter((value) => {
			const search = value.name
				.toLowerCase()
				.includes(searchWord.toLowerCase());
			return search;
		});
		searchWord == '' ? setFilteredPokemons([]) : setFilteredPokemons(newFilter);
	};

	function desativate() {
		document.getElementById('toggler').style.display = 'none';
	}

	return (
		<section className="navbar">
			<div className="title">
				<Link
					className="logoContainer"
					onClick={desativate}
					to="/"
					style={{ textDecoration: 'none', color: 'black' }}
				>
					<MdCatchingPokemon size={30} />
					<h2>Pokedex.me</h2>
				</Link>
				<p>Find your favorite Pokemon near you!</p>
				<div className="searchContainer">
					<GoSearch />
					<input
						type="text"
						onChange={handleFilter}
						placeholder="Search your Pokemon"
					/>
				</div>
				{filteredPokemons.length != 0 && (
					<div className="search-results">
						{filteredPokemons.map((pokemon) => {
							return (
								<Link
									key={pokemon.name}
									className="name-link"
									to={`/pokemon/${pokemon.url.slice(34)}`}
								>
									<p>{pokemon.name}</p>
								</Link>
							);
						})}
					</div>
				)}
			</div>

			<div className="navigation">
				<Link to="/about">About</Link>
				<Link to="#">
					<GoMarkGithub className="githubIcon" /> Source
				</Link>
			</div>
			<ToggleMenu />
		</section>
	);
}

export default Navbar;
