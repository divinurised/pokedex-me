import React, { useEffect, useState } from 'react';
// import { Menu, Dropdown } from 'semantic-ui-react';

import './styles.scss';
import { HiMenu } from 'react-icons/hi';
import { GoMarkGithub } from 'react-icons/go';
import { Link } from 'react-router-dom';

function ToggleMenu() {
	function activate() {
		if (document.getElementById('toggler').style.display == 'flex') {
			document.getElementById('toggler').style.display = 'none';
		} else {
			document.getElementById('toggler').style.display = 'flex';
		}
	}
	function desativate() {
		setTimeout(() => {
			document.getElementById('toggler').style.display = 'none';
		}, 1);
	}
	return (
		<div className="toggle-container">
			<button onClick={activate}>
				<HiMenu size={28} />
			</button>
			<div id="toggler">
				<Link onClick={desativate} to="/about">
					About
				</Link>
				<Link onClick={desativate} to="#">
					<p>Source</p>
					<GoMarkGithub />
				</Link>
			</div>
		</div>
	);
}

export default ToggleMenu;
