import React, { useState, useEffect } from 'react';
import { Row, Col, Label, Container, Button, Form, FormGroup, Input } from 'reactstrap';
//import { Link } from 'react-router-dom';

const EditUser = (props) => {
  
  	const initialState = {
        username:'',
        role:''
    };
    
	const [ user, setUser ] = useState(initialState);

	function handleChange(event) {
		setUser({ ...user, [event.target.name]: event.target.value });
	}

	function handleSubmit(event) {
		console.log(user);
		event.preventDefault();
		async function postUser() {
			fetch('/api/users/' + user._id, {
				method: 'put',
				body: JSON.stringify(user),
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json'
				}
			})
				.then((response) => response.json())
				.then((data) => {
					props.history.push('/user/' + data._id);
				})
				.catch((error) => {
					console.log('Error: ', error);
				});
		}
		postUser();
    }
    
    const [userId, setUserId] = useState(props.match.params._id);

	useEffect(() => {
		const fetchUsers = async () => {
			const response = await fetch('/api/user/' + userId);

			const responseData = await response.json();
			setUser(responseData);
			setUserId(userId);
		};

		fetchUsers();
    }, []);

    return (
        <Container>
            <Row>
                <Col md={6} xs="auto">
                    <Label><h3>Username</h3></Label>
                </Col>
                <Col md={6} xs="auto">
                    <Label><h3>Role</h3></Label>
                </Col>
            </Row>
            <hr />
            <Form id="user-create-form" className="container">
				<Row form>
					<Col md={6}>
						<FormGroup>
							
							<Input
								type="text"
								name="user"
								id="userName"
								value={user.name}
								onChange={handleChange}
							/>
						</FormGroup>
					</Col>
					<Col md={6}>
						<FormGroup>
							
                    <Input type="text" name="role" id="userRole" value={user.role} onChange={handleChange}>
				</Input>

						</FormGroup>
					</Col>
				</Row>
        </Form>
        				<Row form>
					<Col md={12}>
						<Button href="/users" color="primary" className="float-right" onClick={handleSubmit}>
							Save
						</Button>

						<a href="/users" id="cancel" name="cancel" className="btn btn-secondary float-left">
							Cancel
						</a>
					</Col>
				</Row>

        </Container>
    );
};

export default EditUser;
