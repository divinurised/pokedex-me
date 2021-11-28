import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Navbar from '../../components/navbar';
import Footer from '../../components/Footer';
import Loader from '../../components/loader';
import { Pagination } from 'semantic-ui-react';
import { CardPokemons } from '../../components/cardPokemons/index';

import './styles.scss';

const Homepage = function () {
	const [pokemon, setPokemon] = useState([]);
	const [loading, setLoading] = useState(true);
	const [query, setQuery] = useState('');

	const [totalPokemons, setTotalPokemons] = useState([]);
	const [pokemonsPerPage, setPokemonsPerPage] = useState(20);

	const getTotalPokemons = async () => {
		await axios.get('https://pokeapi.co/api/v2/pokemon').then((response) => {
			setTotalPokemons(response.data.count);
			console.log(totalPokemons);
		});
	};

	useEffect(() => {
		getTotalPokemons();
	}, [totalPokemons]);

	const totalPage = Math.ceil(totalPokemons / pokemonsPerPage);
	const [currentPage, setCurrentPage] = useState(0);
	const [previousPageUrl, setPreviousPageUrl] = useState();
	const [offset, setOffSet] = useState(0);
	const [pageCount, setPageCount] = useState();
	const [loadingPokemons, setLoadingPokemons] = useState(true);

	const getCurrentPage = (e, pageInfo) => {
		setPageCount(pageInfo.activePage);
		setCurrentPage(pageInfo.activePage * 21 - 21);
	};

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

	const renderPokemons = () => {
		const pokemonList = [];
		pokemon
			.filter((pokemon) => {
				if (query == '') {
					return pokemon;
				}
				if (pokemon.data.name.toLowerCase().includes(query.toLowerCase())) {
					return pokemon;
				}
			})
			.map((pokemon) =>
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
					<Navbar getQuery={(q) => setQuery(q)} />
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
					<Footer />
				</>
			)}
		</>
	);
};

export default Homepage;
