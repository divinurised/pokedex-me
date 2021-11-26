import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Homepage from './pages/homepage';
import PokemonPage from './pages/pokemonPage';
import About from './pages/About'

import './styles/globalStyles.scss'

function App() {
  return (
    <div className="container">
      <main>
        <Router>
          <Routes>
            <Route exact path='/' element={<Homepage />} />
            <Route path='/pokemon/:id' element={<PokemonPage />} />
            <Route exact path='/about' element={<About />} />
          </Routes>
        </Router>
      </main>
    </div>
  );
}

export default App;