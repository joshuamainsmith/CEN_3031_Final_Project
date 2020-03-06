import React from 'react';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';
import './Home.css';

function Home() {
	return (
		<div>
			<ButtonToolbar>
				<Button variant="primary" size="lg">
					Large button
				</Button>
			</ButtonToolbar>
			<ul className="justify-content-center nav nav-tabs">
				<li className="nav-item">
					<a className="nav-link active" href="#">
						Active
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="#">
						Link
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="#">
						Link
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link disabled" href="#">
						Disabled
					</a>
				</li>
			</ul>
		</div>
	);
}

export default Home;
