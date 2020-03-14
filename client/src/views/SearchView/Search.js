import React, { useState, useEffect } from 'react';
import './Search.css';
import { Link } from 'react-router-dom';
import { PromiseProvider } from 'mongoose';

let cName;

function Search(props) {
	const [ careerID ] = useState(props.match.params.id);
	const [ loadedCareers, setLoadedCareers ] = useState([]);

	useEffect(() => {
		const fetchCareers = async () => {
			const response = await fetch('http://localhost:5000/api/careers/');
			cName = careerID;

			const responseData = await response.json();

			setLoadedCareers(responseData);
		};

		fetchCareers();
	}, []);

	const careerList = loadedCareers.map((career) => {
		return (
			<div className="row" key={career.id}>
				<div className="col-12">
					<h3 color><Link to={"/career/" + career._id}>{career.name}</Link></h3>
				</div>
				<div className="col-12">
					<p>{career.description}</p>
				</div>
				<div className="col-12">
					<p>Median Wage: ${career.salary_ranges.median}</p>
				</div>
				<div className="col-12">
					<p>{career.outlook}</p>
				</div>
			</div>
		);
	});

	return (
		<div>
			<h2 className='school-name'>Florida Middle School</h2>

			<h1>Careers</h1>
			{careerList}
		</div>
	);
}

export default Search;
