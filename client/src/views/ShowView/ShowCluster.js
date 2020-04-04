import React, { useState, useEffect } from 'react';
import { Button, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
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

	async function handleDelete() {
		
		try {
			fetch(`/api/career_clusters/${clusterId}`, { method: 'delete' });

			props.history.push('/clusters/');
		} catch (error) {
			console.error(error);
		}
	}

	const { buttonLabel, className } = props;

	const [ modal, setModal ] = useState(false);

	const toggle = () => setModal(!modal);

	const careerList = loadedCareers.map((career) => {
		console.log(career.name);
		console.log(career.type);
		console.log(loadedCluster.name);

		if (career.type === loadedCluster.name) {
			return (
				<div className="row" key={career._id}>
					<div className="col-12">
						<h3 color>
							<Link to={'/career/' + career._id}>{career.name}</Link>
						</h3>
					</div>
					<div className="col-12">
						<p>{career.description}</p>
					</div>
				</div>
			);
		}
	});

	return (
		<div>
			<h1>{loadedCluster.name}</h1>
			<p>{loadedCluster.description}</p>
			{careerList}
			<Row>
				<Col md={12}>
				
						<Button color="danger" className="float-right" name="delete" onClick={toggle}>
							Delete
						</Button>

						<Modal isOpen={modal} toggle={toggle} className={className}>
							<ModalHeader toggle={toggle}>Confirm deletion of {loadedCluster.name}</ModalHeader>
							<ModalBody>Are you sure you want to delete?</ModalBody>
							<ModalFooter>
								<Button color="danger" className="float-left" onClick={handleDelete}>
									Confirm
								</Button>{' '}
								<Button color="warning" onClick={toggle}>
									Cancel
								</Button>
							</ModalFooter>
						</Modal>
						<a href={`/cluster/${clusterId}/edit`} id="edit" name="edit">
						<Button color="warning" className="float-left" name="edit">
							Edit
						</Button>
					</a>
				</Col>
			</Row>
		</div>
	);
}

export default ShowCluster;
