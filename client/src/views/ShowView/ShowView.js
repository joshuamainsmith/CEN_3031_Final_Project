import React, { useState, useEffect } from 'react';
import { Row, Col, Button } from 'reactstrap';
import './ShowView.css';


function capitalize(str){
		return str.charAt(0).toUpperCase() + str.slice(1);
}

function CareerShow(props) {
	const listSubjects = props.career.important_subjects.map((item) => <li key={item}>{capitalize(item)}</li>);
	const listKeywords = props.career.keywords.map((item) => <li key={item}>{capitalize(item)}</li>);

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
				<h2>{props.career.name}</h2>
        <sm>{props.career.type}</sm>
        <div className="space"></div>
				<p>
					<h3>Description </h3>
					{props.career.description}
				</p>
			</div>

      <Row>
			<Col md={4} >
				<h3>Wages</h3>
				<ul key="Entry {props.career.salary_ranges.entry}">Entry: ${props.career.salary_ranges.entry}</ul>

				<ul key="Median {props.career.salary_ranges.median}">Median: ${props.career.salary_ranges.median}</ul>

				<ul key="Mean {props.career.salary_ranges.mean}">Mean: ${props.career.salary_ranges.mean}</ul>
			</Col>

			<Col md={4} >
				<h3>Education</h3>
				<p>{props.career.education}</p>
			</Col>

			<Col md={4} >
				<h3>Projection</h3>
				<p>Growth Rate: {props.career.outlook}%</p>
			</Col>
</Row>

      <Row>
      <Col md={4} >
			<div>
				<h3>Important Subjects</h3>
				<ul>{listSubjects}</ul>
			</div>
      </Col>
      <Col md={4}>
			<div>
				<h3>Keywords:</h3>
				<ul>{listKeywords}</ul>
			</div>
      </Col>
      </Row>

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
