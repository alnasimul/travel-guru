import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Login.css';

const Login = () => {
    const [newUser,setNewUser] = useState(false);
    const [user,setUser] = useState({
        isSignedIn: false,
        name: '',
        photo: '',
        email: '',
    })
    return (
        <Container>
            <Row className="justify-content-center">
                <Col md={6}>
                    <div className="login-form">
                        <form>
                            <h3>{newUser ? 'Create an account' : 'Login'}</h3>
                        </form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;