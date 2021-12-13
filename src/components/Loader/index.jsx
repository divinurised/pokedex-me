import React from 'react';
import { SyncLoader } from 'react-spinners';

import './styles.scss';

const Loader = () => {
	return (
		<div className="loader">
			<SyncLoader />
			<h1>Loading...</h1>
		</div>
	);
};

export default Loader;
