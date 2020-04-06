import React, { useState, useEffect } from 'react';
import { Row, Col, Label, Container, Button } from 'reactstrap';
//import { Link } from 'react-router-dom';

const UserList = (props) => {
  const [loadedUsers, setLoadedUsers] = useState([]);
  
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('/api/users/');
      const responseData = await response.json();
      console.log(responseData)
      setLoadedUsers(responseData);
    };

    fetchUsers();
  }, []);

  	async function handleDelete() {
		try {
			fetch(`/api/users/${props.user._id}`, { method: 'delete' });

			props.history.push('/users/');
		} catch (error) {
			console.error(error);
		}
	}

  const userList = loadedUsers.map((user) => {
    return (
      <Row key={user._id}>
        <Col md={6} xs="auto">
          <Label><h5>{user.username}</h5></Label>
        </Col>
        <Col md={6} xs="auto">
          <Label><h5>{user.role}</h5></Label>
          <Button href={"/user/" + user._id + "/edit"} color="warning" >Edit</Button> {'  '}
          <Button href={"/users/" + user._id }onClick={handleDelete} color="danger">Delete</Button>

        </Col>
      </Row>
    )
  })
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
            {userList}
         </Container>
    );
};

export default UserList;
