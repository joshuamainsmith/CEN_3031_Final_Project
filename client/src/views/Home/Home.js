import React from 'react';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';
import './Home.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Redirect } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

function Home() {
	const history = useHistory();
	const handleClick = () => {
		//return <Redirect to="/Temp/" />;
		history.push('/Show/');
	};
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
			<Container>
				<Row>Blank line</Row>
				<Row>
					<Col />
					<Col>
						<Button onClick={handleClick}>Discover Your Future Career Now!</Button>
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

export default Home;
