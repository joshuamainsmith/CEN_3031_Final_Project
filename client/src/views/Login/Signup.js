import React from 'react';
import { FormGroup, FormControl } from 'react-bootstrap';
import { Label, Button } from 'reactstrap';

const Signup = () => {
	return (
		<form>
			<FormGroup controlId="email" bsSize="small" >
				<Label>Email</Label>
				<FormControl autoFocus type="email" placeholder="enter valid email address"/>
			</FormGroup>
			<FormGroup controlId="password" bsSize="small">
				<Label>Password</Label>
				<FormControl type="password" placeholder="Enter password"/>
			</FormGroup>
			<FormGroup controlId="confirmPassword" bsSize="small">
				<Label>Confirm Password</Label>
				<FormControl type="password" placeholder="Validate password"/>
			</FormGroup>
			<Button block type="submit" bsSize="small">
				Signup
			</Button>
		</form>
	);
};

export default Signup;
