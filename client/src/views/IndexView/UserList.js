import React, { useState, useEffect } from 'react';
import { Row, Col, Label, Container } from 'reactstrap';

const UserList = () => {
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

  const userList = loadedUsers.map((user) => {
    return (
      <Row key={user._id}>
        <Col md={6} xs="auto">
          <Label><h5>{user.username}</h5></Label>
        </Col>
        <Col md={6} xs="auto">
          <Label><h5>{user.role}</h5></Label>
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
