import React, { useState, useEffect } from 'react';
import { Button, Row, Col } from 'reactstrap';
import './ShowCluster.css';
import { Link, useLocation } from 'react-router-dom';
import { PromiseProvider } from 'mongoose';

function useQuery() {
	return new URLSearchParams(useLocation().search);
}

function ShowCluster(props) {
	let query = useQuery();
	const [ loadedCareers, setLoadedCareers ] = useState([]);
	const [ clusterId, setClusterId ] = useState(props.match.params.id);
	const [ loadedCluster, setLoadedCluster ] = useState({ salary_ranges: {}, important_subjects: [], keywords: [] });
	const [ keyword, setKeyword ] = useState('');
	const [ cluster, setCluster ] = useState({});
	//const [ careerID ] = useState(props.match.params.id);

	useEffect(() => {
		const fetchCareers = async () => {
			let uri;
			const cluster = query.get('cluster');
			console.log(cluster);
			if (cluster) {
				uri = '/api/careers?cluster=' + cluster;
			} else {
				uri = '/api/careers';
			}
			const response = await fetch(uri);
			const responseData = await response.json();

			setKeyword(cluster);
			setLoadedCareers(responseData);
		};

		const fetchCluster = async () => {
			const response = await fetch('/api/career_clusters/' + clusterId);

			const responseData = await response.json();

			setLoadedCluster(responseData);
			setClusterId(clusterId);
		};

		fetchCluster();
		fetchCareers();
	}, []);

	const careerList = loadedCareers.map((career) => {
		console.log(career.name);
		console.log(career.type);
		console.log(loadedCluster.name);

		if (career.type === loadedCluster.name) {
			return (
				<div className="row" key={career._id}>
					<div className="col-12">
						<h3 color>
							<Link to={'/career/' + career._id}>{career.type}</Link>
						</h3>
					</div>
					<div className="col-12">
						<p>{career.description}</p>
						<p>{career.type}</p>
					</div>
					<Row form>
						<Col md={12}>
						<Button color="danger" className="float-right" name="edit">
							Edit
						</Button>
					
					</Col>
					</Row>
				</div>
			);
		}
	});

	return (
		<div>
			<h1>{loadedCluster.name}</h1>
			<p>{loadedCluster.description}</p>
			{careerList}
		</div>
	);
}

export default ShowCluster;
