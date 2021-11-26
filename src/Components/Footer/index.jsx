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
      <div className="signature">
        <p>Made with</p>
        <img src={Hope} alt="Hope!" title="Hope!" />
        <p>by</p>
        <Link className="me" to="#">Davi Alcântara</Link>
      </div>
    </section>
  );
}

export default Footer;