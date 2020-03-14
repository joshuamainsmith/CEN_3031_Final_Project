import React, { useState, useEffect } from 'react';
import { Row, Col, Button } from 'reactstrap';
import './ShowView.css';

function CareerShow(props) {
	const listSubjects = props.career.important_subjects.map((item) => <li key={item}>{item}</li>);
	const listKeywords = props.career.keywords.map((item) => <li key={item}>{item}</li>);

	const [ article, setCareer ] = useState({});

	async function handleDelete() {
		console.log(props.career._id);
		try {
			fetch(`/api/careers/${props.career._id}`, { method: 'delete' });

			props.history.push('/careers/');
		} catch (error) {
			console.error(error);
		}
	}

	return (
		<div>
			<div>
				<h3>{props.career.name}</h3>
				<p>
					<h4>Job Description: </h4>
					{props.career.description}
				</p>
			</div>
			<div>
				<h3>Wages:</h3>
				<ul key="Entry {props.career.salary_ranges.entry}">Entry: {props.career.salary_ranges.entry}</ul>

				<ul key="Median {props.career.salary_ranges.median}">Median: {props.career.salary_ranges.median}</ul>

				{/*<ul key={props.career.salary_ranges.high}>High: {props.career.salary_ranges.high}</ul>*/}

				<ul key="Mean {props.career.salary_ranges.mean}">Mean: {props.career.salary_ranges.mean}</ul>
			</div>
			<div>
				<h3>Education</h3>
				{props.career.education}
			</div>
			<div>
				<h3>Projection</h3>
				<ul>
					<li>{props.career.outlook}</li>
				</ul>
			</div>
			<div>
				<h3>Important Subjects</h3>
				<ul>{listSubjects}</ul>
			</div>

			<div>
				<h3>Keywords:</h3>
				<ul>{listKeywords}</ul>
			</div>

			<Row form>
				<Col md={12}>
					<Button color="danger" className="float-right" name="delete" onClick={handleDelete}>
						Delete
					</Button>
					<a href="/careers" id="cancel" name="cancel" className="btn btn-secondary float-left">
						Cancel
					</a>
				</Col>
			</Row>
		</div>
	);
}
const ShowView = (props) => {
	const [ careerId, setCareerId ] = useState(props.match.params.id);
	const [ loadedCareer, setLoadedCareer ] = useState({ salary_ranges: {}, important_subjects: [], keywords: [] });

	useEffect(() => {
		const fetchCareers = async () => {
			const response = await fetch('/api/careers/' + careerId);

			const responseData = await response.json();

			setLoadedCareer(responseData);
			setCareerId(careerId);
		};

		fetchCareers();
	}, []);

	return <CareerShow career={loadedCareer} history={props.history} />;
};

export default ShowView;
