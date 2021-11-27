import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { GoMarkGithub, GoSearch } from 'react-icons/go';
import { MdCatchingPokemon } from 'react-icons/md';
import './styles.scss';

function Navbar({ getQuery }) {
	const [text, setText] = useState('');

	const onChange = (q) => {
		setText(q);
		getQuery(q);
	};

	// console.log(text);
	// console.log(window.location.pathname);

	// const searchPokemon = () => {
	//   window.location.replace(`/pokemon/${text.toLocaleLowerCase()}`)
	//   console.log(text)
	// }

	return (
		<section className="navbar">
			<div className="title">
				<Link
					className="logoContainer"
					to="/"
					style={{ textDecoration: 'none', color: 'black' }}
				>
					<MdCatchingPokemon size={30} />
					<h2>Pokedex.me</h2>
				</Link>
				<p>Find your favorite Pokemon near you!</p>
				<div className="searchContainer">
					<form action={`/pokemon/${text.toLocaleLowerCase()}`}>
						<GoSearch />
						<input
							type="text"
							placeholder="Search your Pokemon"
							onChange={(e) => onChange(e.target.value)}
							value={text}
						/>
						<input type="submit" value="" />
					</form>
				</div>
			</div>
			<div className="navigation">
				<Link to="/about">About</Link>
				<Link to="#">
					<GoMarkGithub className="githubIcon" /> Source
				</Link>
			</div>
		</section>
	);
}

export default Navbar;
