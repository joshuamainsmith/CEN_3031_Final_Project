import React, { useState, useEffect } from 'react';
import './ShowView.css';

function CareerShow(props) {
	return (
		<div>
			<div className="row">
				<div className="col-4">Name:</div>
				<div className="col-8">{props.career.name}</div>
			</div>
			<div className="row">
				<div className="col-4">Description:</div>
				<div className="col-8">{props.career.description}</div>
			</div>
			<div className="row">
				<div className="col-4">Type:</div>
				<div className="col-8">{props.career.type}</div>
			</div>
		</div>
	);
}
const ShowView = (props) => {
	const [ careerId, setCareerId ] = useState(props.match.params.id);
	const [ loadedCareer, setLoadedCareer ] = useState({});

	useEffect(() => {
		const fetchCareers = async () => {
			const response = await fetch('http://localhost:5000/api/careers/' + careerId);

			const responseData = await response.json();

			setLoadedCareer(responseData);
			setCareerId(careerId);
		};

		fetchCareers();
	}, []);

	return <CareerShow career={loadedCareer} />;
};

export default ShowView;
