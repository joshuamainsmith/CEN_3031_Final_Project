import React from 'react';
import { Button } from 'reactstrap';
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
	return (
		<div className="discover-btn">
			<Link to="/careers">
				<Button color="primary">Discover your Future</Button>
			</Link>
		</div>
	);
}

export default Home;
