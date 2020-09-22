import React from 'react';
import { Card } from '../Card/Card.jsx';
import './card-list.styles.css';

export const CardList = ({ monsters }) => {
	return (
		<div className="card-list">
			{monsters.map((monster) => {
				return (
					<Card
						key={monster.id}
						name={monster.name}
						id={monster.id}
						email={monster.email}
					></Card>
				);
			})}
		</div>
	);
};
