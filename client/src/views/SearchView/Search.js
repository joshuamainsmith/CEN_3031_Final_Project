import React, { useState, useEffect } from 'react';
import './Search.css';
import { useLocation } from "react-router-dom";

function useQuery() {
	return new URLSearchParams(useLocation().search);
}


function Search() {
	let query = useQuery()
	const [ loadedCareers, setLoadedCareers ] = useState([]);
	const [ keyword, setKeyword ] = useState('');

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
