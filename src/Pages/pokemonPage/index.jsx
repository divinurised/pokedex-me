import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';

import Loader from '../../components/loader';
import Navbar from '../../components/navbar';
import PokemonType from '../../components/PokemonType';
import Map from '../../components/Map';
import Footer from '../../components/Footer';

import { ScaleLoader } from 'react-spinners';
import './styles.scss';

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
					<Navbar getQuery={(q) => setQuery(q)} />
					<div className="pokemonContainer">
						<h1>
							{pokemonDetails.name.charAt(0).toUpperCase() +
								pokemonDetails.name.slice(1)}
						</h1>
						<PokemonType pokemon={pokemonDetails} />
						<img
							src={pokemonDetails.sprites.front_default}
							alt="Pokemon Sprite"
						/>
						<div
							type="checkbox"
							className="pokemonCry"
							onClick={playPokemonCry}
						>
							<ScaleLoader />

							<video id="cry" style={{ display: 'none' }} name="media">
								<source
									src={`https://play.pokemonshowdown.com/audio/cries/${pokemonDetails.name}.ogg`}
									type="audio/ogg"
								/>
							</video>
						</div>

						<div className="infoContainer">
							{pokemonDetails.stats.map((stats) => (
								<div className="titleContainer">
									<div className="statContainer">
										<div key={pokemonDetails.name} className="titleContent">
											{stats.stat.name}
										</div>
										<div key={pokemonDetails.name} className="titleContent">
											{stats.base_stat}
										</div>
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
					<Footer />
				</>
			)}
		</>
	);
};

export default PokemonPage;
