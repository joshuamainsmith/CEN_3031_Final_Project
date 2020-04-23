import React, { useState, useEffect } from 'react';
import './IndexClusters.css';
import { Link, useLocation } from 'react-router-dom';

function useQuery() {
	return new URLSearchParams(useLocation().search);
}

function IndexClusters(props) {
	let query = useQuery();
	const [ loadedClusters, setloadedClusters ] = useState([]);

	useEffect(() => {
		const fetchClusters = async () => {
			let uri;
			const cluster = query.get('cluster')
			if (cluster) {
				uri = '/api/career_clusters?cluster=' + cluster
			} else {
				uri = '/api/career_clusters/'
			}
			const response = await fetch(uri);
			const responseData = await response.json();

			setloadedClusters(responseData);
		};

		fetchClusters();
	}, []);


	const clusterList = loadedClusters.map((cluster) => {

		return (
			<div className="row" key={cluster._id}>
				<div className="col-12">
					<h3><Link to={"/cluster/" + cluster._id}>{cluster.name}</Link></h3>
				</div>

				<div className="col-12">
					<p>{cluster.description}</p>
				</div>
			</div>
		);
	});

	return (
		<div className="container">
			<h1>Clusters</h1>
			{clusterList}
		</div>
	);
}

export default IndexClusters;
