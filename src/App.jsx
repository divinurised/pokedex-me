import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Homepage from './pages/Homepage';
import PokemonPage from './pages/PokemonPage';
import About from './pages/About';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

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
