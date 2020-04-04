import React, { useState, useEffect } from 'react';
import './IndexCareer.css';
import { Link } from 'react-router-dom';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
const mongoose = require('mongoose');

let cName;

function IndexCareer(props) {
	console.log(mongoose.Types.ObjectId.isValid('5e66e1986d36792db02d3d90'));
	return (
		<dvi className="career-list">
			<ul>
				<h4>
					<Link to={'/career/' + cName}>{props.career.name}</Link>
				</h4>
				<textarea className="text-box" key={props.career.description}>
					{props.career.description}
				</textarea>
			</ul>
			
		</dvi>
	);
};

const IndexList = (props) => {
	const [ careerName ] = useState(props.match.params.id);
	const [ loadedCareer, setLoadedCareer ] = useState({});

	useEffect(() => {
		const fetchCareers = async () => {
			const response = await fetch('http://localhost:5000/api/careers/' + careerName);
			cName = careerName;

			const responseData = await response.json();

			setLoadedCareer(responseData);
		};

		fetchCareers();
	}, []);

	return <IndexCareer career={loadedCareer} />;
};

export default IndexCareer;
