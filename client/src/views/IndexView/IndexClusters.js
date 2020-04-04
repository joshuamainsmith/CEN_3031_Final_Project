import React, { useState, useEffect } from 'react';
import './IndexClusters.css';
import { Link, useLocation } from 'react-router-dom';
import { PromiseProvider } from 'mongoose';

function useQuery() {
	return new URLSearchParams(useLocation().search);
}

function IndexClusters(props) {
	let query = useQuery();
	const [ loadedClusters, setloadedClusters ] = useState([]);
	const [ keyword, setKeyword ] = useState('');
	const [ careerID ] = useState(props.match.params.id);

	useEffect(() => {
		const fetchClusters = async () => {
			let uri;
			const keyword = query.get('keyword')
			if (keyword) {
				uri = '/api/career_clusters?keyword=' + keyword
			} else {
				uri = '/api/career_clusters/'
			}
			const response = await fetch(uri);
			const responseData = await response.json();

			setKeyword(keyword);
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
		<div>
			<h1>Clusters</h1>
			{clusterList}
		</div>
	);
}

export default IndexClusters;
