import React from 'react';
import { Button } from 'reactstrap';
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
	return (
	<div>
		<div>
			<h1 className="title">Florida Middle</h1>
			<img className="logoHome" src="logoHome.jpg" alt="School Home Logo"></img>
			<h1 className="title" margin-left="2em">School</h1>
		</div>
		<div className="discover-btn">
			<Link to="/Search">
				<Button color="primary">Discover your Future</Button>		
			</Link>			
		</div>
		<div className="button quiz-btn">
			<Button color="limegreen">Quiz</Button>
		</div>
	</div>
		
	);
}

export default Home;
