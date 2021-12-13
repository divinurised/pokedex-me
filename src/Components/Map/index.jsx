import React, { useState, useEffect } from 'react';

import Loader from '../../components/Loader/index';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

function Map({ pokemon }) {
	console.log(pokemon);

	const [loading, setLoading] = useState(true);

	const pokemonMarker = new L.icon({
		iconUrl:
			'https://cdn.picpng.com/pin/pin-pokemon-pokeball-map-seeker-54266.png',
		iconSize: [25, 41],
		iconAnchor: [10, 41],
		popupAnchor: [2, -40],
	});

	const userMarker = new L.icon({
		iconUrl:
			'https://www.pinclipart.com/picdir/big/17-171343_maps-clipart-map-pin-google-maps-marker-blue.png',
		iconSize: [25, 41],
		iconAnchor: [10, 41],
		popupAnchor: [2, -40],
	});

	const [current, setCurrent] = useState({
		longitude: 0,
		latitude: 0,
	});

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(
			function (positon) {
				setCurrent({
					longitude: positon.coords.longitude,
					latitude: positon.coords.latitude,
				});
				setLoading(false);
			},
			function (error) {
				alert(error);
			},
			{
				enableHighAccuracy: true,
			}
		);
	}, []);

	console.log(current);

	return (
		<>
			{loading ? (
				<Loader />
			) : (
				<MapContainer
					center={[current.latitude, current.longitude]}
					zoom={20}
					scrollWheelZoom={false}
				>
					<TileLayer
						attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					/>
					<Marker
						position={[current.latitude, current.longitude]}
						icon={userMarker}
					>
						<Popup>You</Popup>
						You
					</Marker>

					<Marker
						position={[
							current.latitude + Math.random() * (-0.001 - 0.001) + 0.001,
							current.longitude + Math.random() * (-0.001 - 0.001) + 0.001,
						]}
						icon={pokemonMarker}
					>
						<Popup>
							<img
								style={{ width: '100px', height: '100px' }}
								src={pokemon.sprites.front_default}
								alt="Wild Pokemon Appears"
							/>
						</Popup>
					</Marker>
				</MapContainer>
			)}
		</>
	);
}

export default Map;
