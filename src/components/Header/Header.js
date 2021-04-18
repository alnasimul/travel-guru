import React from 'react';
import { Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../logo-white.png'
import './Header.css'

const Header = () => {
    // const location = useLocation();
    return (
        <Container>
            <Navbar className="pt-4 text-primary">
                <Navbar.Brand>
                    <img src={logo} width="150" height="80" alt="" className="logo" />
                </Navbar.Brand>
                {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
                <Navbar.Collapse id="basic-navbar-nav">
                    <Form inline className="m-auto navBarSearchForm pl-3">
                        <FormControl type="text" placeholder="Search your Destination..." className="searchBox" />
                    </Form>
                    <Nav className="m-auto">
                        <Nav.Link className="px-4 ">News</Nav.Link>
                        <Nav.Link className="px-4">Destination</Nav.Link>
                        <Nav.Link className="px-4">Blog</Nav.Link>
                        <Nav.Link className="px-4">Contact</Nav.Link>
                        <Nav.Link className="px-4">Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
};

export default Header;