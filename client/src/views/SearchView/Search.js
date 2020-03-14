import React, { useState, useEffect } from 'react';
import './Search.css';

function Search() {
	const [ loadedCareers, setLoadedCareers ] = useState([]);

	useEffect(() => {
		const fetchCareers = async () => {
			const response = await fetch('http://localhost:5000/api/careers');

			const responseData = await response.json();

			setLoadedCareers(responseData);
		};

		fetchCareers();
	}, []);

	const careerList = loadedCareers.map((career) => {
		return (
			<div className="row" key={career.id}>
				<div className="col-12">
					<h3>{career.name}</h3>
				</div>
				<div className="col-12">
					<p>{career.description}</p>
				</div>
				<div className="col-12">
					<p>{career._id}</p>
				</div>
			</div>
		);
	});

	return (
		<div>
			<h1>Careers</h1>
			{careerList}
		</div>
	);
}

export default Search;
