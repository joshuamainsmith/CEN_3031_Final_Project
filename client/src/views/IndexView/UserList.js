import React, { useState, useEffect } from 'react';
import { Row, Col, Label, Container, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
//import { Link } from 'react-router-dom';

const UserList = (props) => {
	const [ loadedUsers, setLoadedUsers ] = useState([]);

	useEffect(() => {
		const fetchUsers = async () => {
			const response = await fetch('/api/users/');
			const responseData = await response.json();
			console.log(responseData);

			setLoadedUsers(responseData);
		};

		fetchUsers();
	}, []);

	const [modal, setModal] = useState(false);

  	const toggle = () => setModal(!modal);

	const userList = loadedUsers.map((user) => {
		return (
			<Row key={user._id}>
				<Col md={6} xs="auto">
					<Label>
						<h5>{user.username}</h5>
					</Label>
				</Col>
				<Col md={6} xs="auto">
					<Label>
						<h5>{user.role}</h5>
					</Label>
					<Button href={'/user/' + user._id + '/edit'} color="warning">
						Edit
					</Button>{' '}
					{'  '}
					<Button onClick={() => handleDelete(user._id)} color="danger">
						Delete
					</Button>
				</Col>
			</Row>
		);
	});

	async function handleDelete(userId) {
		try {
			// Delete off the backend
			const response = await fetch(`/api/users/${userId}`, { method: 'delete' });
			// Delete off the frontend
			const index = loadedUsers.findIndex((user) => user._id === userId);

			const updatedUsers = [ ...loadedUsers ];
			updatedUsers.splice(index, 1);
			setLoadedUsers(updatedUsers);
		} catch (error) {
			console.error(error);
		}
	}

	return (
		<Container>
			<Row>
				<Col md={6} xs="auto">
					<Label>
						<h3>Username</h3>
					</Label>
				</Col>
				<Col md={6} xs="auto">
					<Label>
						<h3>Role</h3>
					</Label>
				</Col>
			</Row>
			<hr />
			{userList}
		</Container>
	);
};

export default UserList;
