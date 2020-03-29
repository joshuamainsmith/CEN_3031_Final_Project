import React from 'react';
import { Row, Col, Label, Container, Input } from 'reactstrap';

const UserList = () => {
    return (
        <Container>
            <Row>
                <Col md={3} xs="auto">
                    <Label><h4 >Name</h4></Label>
                    <Input></Input>
                </Col>
                <Col md={9} xs="auto">
                    <Label><h4>Email</h4></Label>
                    <Input></Input>
                </Col>
            </Row>
        </Container>
    );
};

export default UserList;