import React from 'react';
import Homepage from './pages/homepage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PokemonPage from './pages/pokemonPage';

import usePokemonList from './hooks/usePokemonList';

import './styles/globalStyles.scss'

function App() {
  const pokemon = usePokemonList();

  return (
    <div className="container">
      <main>
        <Router>
          <Routes>
            <Route exact path='/' element={<Homepage pokemon={pokemon} />} />
            <Route path='/pokemon/:id' element={<PokemonPage pokemon={pokemon} />} />
          </Routes>
        </Router>
      </main>
    </div>
  );
}

export default App;