import React from 'react';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';
//import './Home.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Show() {
	return (
		<div>
			<ButtonToolbar>
				<Button variant="primary" size="lg">
					Show Button
				</Button>
			</ButtonToolbar>
			<ul className="justify-content-center nav nav-tabs">
				<li className="nav-item">
					<a className="nav-link active" href="#">
						Show Active
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="#">
						Did nothing
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
			<Container>
				<Row>Blank line</Row>
				<Row>
					<Col />
					<Col>
						<Button>
							Discoover Your Future Career Now!
							<a target="_blank" rel="noopener noreferrer" href="https://localhost:3000/Home" />
						</Button>
					</Col>
					<Col />
				</Row>
				<Row>
					<Col />
					<Col>
						<Button>Take your Quiz</Button>
					</Col>
					<Col />
				</Row>
			</Container>
		</div>
	);
}

export default Show;
