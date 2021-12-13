import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Homepage from './Pages/Homepage/index';
import PokemonPage from './Pages/PokemonPage/index';
import About from './Pages/About/index';

import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

import pokemonsName from './pokemonsName.json';

import './Styles/globalStyles.scss';

function App() {
	return (
		<>
			<Navbar pokemonsName={pokemonsName} />
			<main>
				<Routes>
					<Route exact path="/" element={<Homepage />}></Route>
					<Route path="/pokemon/:id" element={<PokemonPage />}></Route>
					<Route exact path="/about" element={<About />}></Route>
				</Routes>
			</main>
			<Footer />
		</>
	);
}

export default App;
