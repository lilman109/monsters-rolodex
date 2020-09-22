import React from 'react';
import './card.styles.css';

export const Card = ({ name, email, id }) => {
	return (
		<div className="card-container">
			<img
				className="card-container__img"
				alt="monster"
				src={`https://robohash.org/${id}?set=set2`}
			></img>
			<h2>{name}</h2>
			<p>{email}</p>
		</div>
	);
};
