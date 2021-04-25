import React, { useContext, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import './Login.css';
import g from './g.svg';
import { createUserWithEmailAndPassword, handleGoogleSignIn, handleFbSignIn, handleSignOut, initializeLoginFramework, signInWithEmailAndPassword } from './loginManager';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

const Login = () => {
    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        photo: '',
        error: '',
        success: false
    })
    initializeLoginFramework();

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const history = useHistory();
    const location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };

    const googleSignIn = () => {
        handleGoogleSignIn()
            .then(res => {
                handelResponse(res, true);
            })
    }

    const fbSignIn = () => {
        handleFbSignIn()
            .then(res => {
                console.log(res);
                handelResponse(res, true);
            })
    }

    const signOut = () => {
        handleSignOut
            .then(res => {
                handelResponse(res, false)
            })
    }

    const handleChange = (e) => {
        let isFieldValid = true;
        if (e.target.name === "email") {
            const re = /\S+@\S+\.\S+/;
            isFieldValid = re.test(e.target.value);
            console.log(isFieldValid);
        } else if (e.target.name === "password") {
            const isPasswordValid = e.target.value.length > 6;
            const re = /\d{1}/;
            const passwordHasNumber = re.test(e.target.value);
            isFieldValid = isPasswordValid && passwordHasNumber;
            console.log(isFieldValid);
        }
        if (isFieldValid) {
            const newUserInfo = { ...user }
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
            console.log(user);

        }
    }
    const handleSubmit = (e) => {
        if (newUser && user.email && user.password) {
            createUserWithEmailAndPassword(user.name, user.email, user.password)
                .then(res => {
                    handelResponse(res, true);
                })
        }
        if (!newUser && user.email && user.password) {
            signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    handelResponse(res, true);
                })
        }
        e.preventDefault();
    }

    const handelResponse = (res, redirect) => {
        setUser(res);
        setLoggedInUser(res);

        if (redirect) {
            history.replace(from)
        }
    }
    return (
        <Container>
            <Row className="justify-content-center">
                <Col md={7}>
                    <div className="login-form">
                        <h4>{newUser ? 'Create an account' : 'Login'}</h4>
                        <Form onSubmit={handleSubmit}>
                            {newUser &&
                                <Form.Group controlId="formBasicName">
                                    <Form.Label>Your Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter name" name="name" required onBlur={handleChange} />
                                </Form.Group>
                            }
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" required onBlur={handleChange} />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" required onBlur={handleChange} />
                            </Form.Group>

                            <Form.Group controlId="formBasicSubmit">
                                <Form.Control type="submit" value={newUser ? 'Sign up' : 'Sign in'} className=" btn btn-success" />
                            </Form.Group>

                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="New user sign up" onChange={() => setNewUser(!newUser)} />
                            </Form.Group>
                        </Form>
                        {user.error && <p style={{ color: 'red' }}>{user.error}</p>}
                        {user.success && <p style={{ color: 'green' }}>User {newUser ? 'Created' : 'Logged in'} Successfully</p>}
                        <hr />
                        <div>
                            <h5>Or</h5>
                        </div>
                        {
                            loggedInUser.email ?
                                <Button onClick={signOut}>Sign Out</Button>
                                : <div className="google-sign-in mt-2" onClick={googleSignIn}>
                                 <span> <img className="google" src={g} alt="google" /> Continue with google </span>
                                </div>
                        }
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;