import React, { useState, useEffect } from 'react';
import './Search.css';
import { Link, useLocation } from 'react-router-dom';
import { PromiseProvider } from 'mongoose';

function useQuery() {
	return new URLSearchParams(useLocation().search);
}

function Search(props) {
	let query = useQuery()
	const [ loadedCareers, setLoadedCareers ] = useState([]);
	const [ keyword, setKeyword ] = useState('');
	const [ careerID ] = useState(props.match.params.id);

	useEffect(() => {
		const fetchCareers = async () => {
			let uri;
			const keyword = query.get('keyword')
			if (keyword) {
				uri = '/api/careers?keyword=' + keyword
			} else {
				uri = '/api/careers'
			}
			const response = await fetch(uri);
			const responseData = await response.json();

			setKeyword(keyword);
			setLoadedCareers(responseData);
		};

		fetchCareers();
	}, []);

	const careerList = loadedCareers.map((career) => {
		return (
			<div className="row" key={career._id}>
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
