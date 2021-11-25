import React from 'react';
import { Link } from 'react-router-dom'

import './styles.scss'

import Hope from '../../assets/images/hope.png'

function Footer() {
  return (
    <section className="footer">
      <Link to="#" className="aboutContainer">
        <p>Learn more about this project here.</p>
      </Link>
      <p>Made with <img src={Hope} alt="Hope!" title="Hope!" />by <Link className="me" to="#">Davi Alcântara</Link></p>
    </section>
  );
}

export default Footer;