import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Homepage from './pages/Homepage/index.jsx';
import PokemonPage from './pages/PokemonPage/index.jsx';
import About from './pages/About/index.jsx';

import Navbar from './components/Navbar/index.jsx';
import Footer from './components/Footer/index.jsx';

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
