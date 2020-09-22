import React from 'react';
import './search-box.css';

export const SearchBox = ({ searchChange, placeholder }) => {
	return (
		<div className="searchBox">
			<input
				className="searchBox__input"
				type="search"
				placeholder={placeholder}
				onChange={searchChange}
			></input>
		</div>
	);
};
