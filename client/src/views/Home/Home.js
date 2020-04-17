import React from 'react';
import { Button } from 'reactstrap';
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
	return (
		<div className="page-header header-filter">
			<div className="container">
				<div className="row">
					<div className="col-md-12 col-md-offset-2 text-center">
						<h1 className="title">Career Finder</h1>
						<h4 className="title">A place to research careers.</h4>
						<a
							href="/careers"
							class="btn btn-info btn-fill btn-round"
							target="_blank"
							>Discover your future</a
						>
					</div>
				</div>
			</div>
		</div>

	);
}

export default Home;
