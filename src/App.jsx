import React from 'react';
import Homepage from './pages/homepage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PokemonPage from './pages/pokemonPage';

import './styles/globalStyles.scss'

function App() {
  return (
    <div className="container">
      <main>
        <Router>
          <Routes>
            <Route exact path='/' element={<Homepage />} />
            <Route path='/pokemon/:id' element={<PokemonPage />} />
          </Routes>
        </Router>
      </main>
    </div>
  );
}

export default App;