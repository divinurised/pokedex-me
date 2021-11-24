import React from 'react';
import { Link } from 'react-router-dom';

import { GoMarkGithub, GoSearch } from 'react-icons/go'
import './styles.scss'

function Navbar() {
  return (
    <section className="navbar">
      <div className="title">
        <Link to='/' style={{ textDecoration: 'none', color: 'black' }}>
          <h2>Pokedex.me</h2>
        </Link>
        <p>Find your favorite Pokemon near you!</p>
        <div className="searchContainer">
          <GoSearch />
          <input
            type="text"
            name=""
            id=""
            placeholder="Search your Pokemon" />
        </div>
      </div>
      <div className="navigation">
        <p>Map</p>
        <p><GoMarkGithub className="githubIcon" />  Source</p>
      </div>
    </section>
  );
}

export default Navbar;