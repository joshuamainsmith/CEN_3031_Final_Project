import React, { useState, useEffect } from 'react';
import './Search.css';
import { Link, useLocation } from 'react-router-dom';

function useQuery() {
	return new URLSearchParams(useLocation().search);
}

function Page(props) {
	return <button onClick={() => props.setIndex(props.pageNumber)}> {props.pageNumber} </button>;
}

function Search(props) {
	let query = useQuery();
	let median_wage, growth_rate;
	const [ loadedCareers, setLoadedCareers ] = useState([]);
	const [ keyword, setKeyword ] = useState('');
	const [ index, setIndex ] = useState(1);
	//const [ careerID ] = useState(props.match.params.id);
	// Create a limit, 10
	const limit = 3;

	useEffect(() => {
		const fetchCareers = async () => {
			let uri;
			const keyword = query.get('keyword');

			if (keyword) {
				uri = '/api/careers?keyword=' + keyword;
			} else {
				uri = '/api/careers';
			}
			const response = await fetch(uri);
			const responseData = await response.json();

			setKeyword(keyword);
			setLoadedCareers(responseData);
		};

		fetchCareers();
	}, []);

	function medianWage(career) {
		return (
			<div className="col-12">
				<p>Median Wage: ${career.salary_ranges.median.toLocaleString()}</p>
			</div>
		);
	}

	function growthRate(career) {
		return (
			<div className="col-12">
				<p>Growth Rate: {career.outlook}%</p>
			</div>
		);
	}

	const totalPages = Math.ceil(loadedCareers.length / limit);
	//
	const renderedPages = [];
	for (let i = 1; i <= totalPages; i++) {
		renderedPages.push(<Page setIndex={setIndex} pageNumber={i} />);
	}

	const careerList = loadedCareers.slice(index * limit - limit, limit * index).map((career) => {
		if (career.salary_ranges && career.salary_ranges.median) {
			median_wage = medianWage(career);
		}

		if (career.outlook) {
			growth_rate = growthRate(career);
		}

		return (
			<div className="row" key={career._id}>
				<div className="col-12">
					<h3>
						<Link to={'/career/' + career._id}>{career.name}</Link>
					</h3>
				</div>
				<div className="col-12">
					<p>{career.description}</p>
				</div>
				{median_wage}
				{growth_rate}
			</div>
		);
	});

	return (
		<div>
			<h1>Careers</h1>
			{careerList}
			<div className="pagination-buttons">{renderedPages}</div>
		</div>
	);
}

export default Search;
