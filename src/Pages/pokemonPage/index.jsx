import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';

import Loader from '../../Components/Loader';
import PokemonType from '../../Components/PokemonType';
import Map from '../../Components/Map';

import './styles.scss';
import { ScaleLoader } from 'react-spinners';
import { GoChevronLeft, GoChevronRight } from 'react-icons/go';
import { Link } from 'react-router-dom';

const PokemonPage = () => {
	const { id } = useParams();

	const [pokemonDetails, setPokemonDetails] = useState();
	const [loading, setLoading] = useState(true);
	const [query, setQuery] = useState('');

	const getPokemon = async (id) => {
		const details = await getPokemonData(id);
		setPokemonDetails(details.data);
		console.log(details.data);
		setLoading(false);
	};

	const getPokemonData = async (id) => {
		const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
		return res;
	};

	useEffect(() => {
		getPokemon(id);
	}, []);

	console.log(pokemonDetails);

	const playPokemonCry = () => {
		document.getElementById('cry').play();
		console.log('TA INDOOO');
	};

	return (
		<>
			{loading ? (
				<Loader />
			) : (
				<>
					<div className="pokemonContainer">
						<h1>
							{pokemonDetails.name.charAt(0).toUpperCase() +
								pokemonDetails.name.slice(1)}
						</h1>
						<PokemonType pokemon={pokemonDetails} />
						<div className="next-previous-container">
							<a href={`/pokemon/${parseInt(id) - 1}`}>
								<GoChevronLeft size={40} />
							</a>
							<img
								src={pokemonDetails.sprites.front_default}
								alt="Pokemon Sprite"
							/>
							<a href={`/pokemon/${parseInt(id) + 1}`}>
								<GoChevronRight size={40} />
							</a>
						</div>
						<div
							type="checkbox"
							className="pokemonCry"
							onClick={playPokemonCry}
						>
							<ScaleLoader />
							<video id="cry" style={{ display: 'none' }} name="media">
								<source
									// src={`https://play.pokemonshowdown.com/audio/cries/${pokemonDetails.name}.ogg`}
									src={`https://play.pokemonshowdown.com/audio/cries/${pokemonDetails.name}.mp3`}
									// type="audio/ogg"
									type="audio/mp3"
								/>
							</video>
						</div>

						<div className="infoContainer">
							{pokemonDetails.stats.map((stats) => (
								<div key={pokemonDetails.id} className="titleContainer">
									<div className="statContainer">
										<div className="titleContent">{stats.stat.name}</div>
										<div className="titleContent">{stats.base_stat}</div>
									</div>
									<div className="statBarContainer">
										<div className="statBar">
											<span
												className={pokemonDetails.types[0].type.name}
												style={{
													width: stats.base_stat + '%',
													display: 'block',
													height: '100%',
													borderRadius: '3px',
												}}
											></span>
										</div>
									</div>
								</div>
							))}
						</div>

						<h2>Find it near you!</h2>
						<Map pokemon={pokemonDetails} />
					</div>
				</>
			)}
		</>
	);
};

export default PokemonPage;
