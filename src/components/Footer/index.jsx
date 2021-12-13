import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

import Hope from '../../assets/images/hope.png';

function Footer() {
	return (
		<section className="footer">
			<div className="signature">
				<p>Made with</p>
				<img src={Hope} alt="Hope!" title="Hope!" />
				<p>by</p>
				<Link className="me" to="/about#davi">
					Davi Alcântara
				</Link>
			</div>
		</section>
	);
}

export default Footer;
