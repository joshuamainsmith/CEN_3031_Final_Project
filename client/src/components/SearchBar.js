import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import { FormControl, Button, Form, Navbar } from 'react-bootstrap';
import './Home.css';
//import FormControl from 'react-bootstrap/FormControl';
//import Button from 'react-bootstrap/Button';
//import Form from 'react-bootstrap/Form';
//import Navbar from 'react-bootstrap/NavBar';

const SearchBar = () => {
	return (
		<Navbar className="Search-Bar" bg="dark" variant="dark" padding="40%">
			<Navbar.Brand href="#home">Careers</Navbar.Brand>
			<Nav className="mr-auto">
				<Nav.Link href="#home">Home</Nav.Link>
				<Nav.Link href="#features">Browse</Nav.Link>
				<Nav.Link href="#pricing">About</Nav.Link>
			</Nav>
			<Form inline>
				<FormControl type="text" placeholder="Search" className="mr-sm-2" />
				<Button variant="outline-info">Search</Button>
			</Form>
		</Navbar>
	);
};

export default SearchBar;
