import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Loader from '../../components/Loader';
import { Pagination } from 'semantic-ui-react';
import { CardPokemons } from '../../components/CardPokemons/index';

import './styles.scss';

const Homepage = function () {
	const [pokemon, setPokemon] = useState([]);
	const [loading, setLoading] = useState(true);
	const [query, setQuery] = useState('');

	const [totalPokemons, setTotalPokemons] = useState(882);
	const [allPokemons, setAllPokemons] = useState([]);
	const [pokemonsPerPage, setPokemonsPerPage] = useState(21);
	const totalPage = Math.ceil(totalPokemons / pokemonsPerPage);
	const [currentPage, setCurrentPage] = useState(0);
	const [pageCount, setPageCount] = useState();
	const [loadingPokemons, setLoadingPokemons] = useState(true);

	// const getAllPokemonsName = async () => {
	// 	await axios
	// 		.get('https://pokeapi.com/api/v2/pokemon?limit=882')
	// 		.then((response) => {
	// 			console.log(response.data.results);
	// 		});
	// };

	// useEffect(() => {
	// 	getAllPokemonsName();
	// }, [pokemon, currentPage, loading]);

	// Get Total Pokemons

	// const getTotalPokemons = async () => {
	// 	await axios.get('https://pokeapi.co/api/v2/pokemon').then((response) => {
	// 		setTotalPokemons(response.data.count);
	// 		console.log(totalPokemons);
	// 		getAllPokemonsName();
	// 	});
	// };
	// useEffect(() => {
	// 	getTotalPokemons();
	// }, [totalPokemons]);

	const getCurrentPage = (e, pageInfo) => {
		setPageCount(pageInfo.activePage);
		setCurrentPage(pageInfo.activePage * 21 - 21);
	};

	// List Pokemons

	const getPokemonList = async () => {
		setLoadingPokemons(true);
		setPokemon([]);
		const pokemonArray = [];
		for (let i = 1; i <= 21; i++) {
			pokemonArray.push(await getPokemonData(i + currentPage));
		}
		console.log(pokemonArray);
		setPokemon(pokemonArray);
		setLoadingPokemons(false);
		setLoading(false);
	};

	const getPokemonData = async (id) => {
		const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
		return response;
	};

	useEffect(() => {
		getPokemonList();
	}, [currentPage]);

	// Render Pokemons

	const renderPokemons = () => {
		const pokemonList = [];
		pokemon.map((pokemon) =>
			pokemonList.push(
				<CardPokemons key={pokemon.data.name} pokemon={pokemon} />
			)
		);
		if (loadingPokemons) {
			const pokemonList = [];
			pokemonList.push(
				<div className="pokemonLoader">
					<Loader />
				</div>
			);
			return pokemonList;
		} else {
			return pokemonList;
		}
	};
	useEffect(() => {
		renderPokemons();
	}, [pokemon, currentPage]);

	return (
		<>
			{loading ? (
				<Loader />
			) : (
				<>
					<div className="paginationContainer">
						<Pagination
							activePage={pageCount}
							defaultActivePage={1}
							totalPages={totalPage}
							onPageChange={getCurrentPage}
						/>
					</div>
					<div className="cardContainer">{renderPokemons()}</div>
					<div className="paginationContainer">
						<Pagination
							activePage={pageCount}
							defaultActivePage={1}
							totalPages={totalPage}
							onPageChange={getCurrentPage}
						/>
					</div>
				</>
			)}
		</>
	);
};

export default Homepage;
