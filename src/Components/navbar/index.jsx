import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { GoMarkGithub, GoSearch } from 'react-icons/go'
import { MdCatchingPokemon } from 'react-icons/md'
import './styles.scss'

function Navbar({ getQuery }) {

  const [text, setText] = useState("");

  const onChange = (q) => {
    setText(q);
    getQuery(q);
  };

  console.log(text)

  return (
    <section className="navbar">
      <div className="title">
        <Link className="logoContainer" to='/' style={{ textDecoration: 'none', color: 'black' }}>
          <MdCatchingPokemon size={30} />
          <h2>Pokedex.me</h2>
        </Link>
        <p>Find your favorite Pokemon near you!</p>
        <div className="searchContainer">
          <GoSearch />

          <input
            type="text"
            name=""
            id=""
            placeholder="Search your Pokemon"
            onChange={(e) => onChange(e.target.value)}
            value={text}
          />

        </div>
      </div>
      <div className="navigation">
        <p>About</p>
        <p><GoMarkGithub className="githubIcon" />  Source</p>
      </div>
    </section>
  );
}

export default Navbar;