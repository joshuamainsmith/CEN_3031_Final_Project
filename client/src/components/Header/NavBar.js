import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
	return (

			<div className="nav-items">
				<Link className="nav-link" to="/Home">
					Home
				</Link>
				<Link className="nav-link" to="/Register">
					Register
				</Link>
				<a
					className="nav-link"
					target="_blank"
					rel="noopener noreferrer"
					href="https://reactjs.org/docs/getting-started.html"
				>
					React Docs
				</a>
				<a
					className="nav-link"
					target="_blank"
					rel="noopener noreferrer"
					href="https://reactjs.org/tutorial/tutorial.html"
				>
					React Tutorial
				</a>
				<a className="nav-link" target="_blank" rel="noopener norefferer" href="https://amazon.com">
					To Change Later
				</a>
			</div>
	);
};

export default NavBar;
