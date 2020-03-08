import React from 'react';
import './Show.css';

function Show() {
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

export default Show;
