import React from 'react';
import './Search.css';

function Search() {
	return (
		<div className="search">
			<a className="active" href="#home">
				Home {'  '}
			</a>
			<a href="#about">About </a>
			<a href="#contact">Contact </a>
			<input type="text" placeholder="Career Search..." />

		</div>
	);
}

export default Search;
