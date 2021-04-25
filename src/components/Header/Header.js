
import React, { useContext } from 'react';
import { Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import signOut from '../Login/Login';
import logo from '../../logo-white.png'
import './Header.css'
import { handleSignOut } from '../Login/loginManager';

const Header = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
  
    return (
        <Container>
            <Navbar className="pt-4 text-primary">
                <Navbar.Brand>
                    <Link to="/home">
                        <img src={logo} width="150" height="80" alt="" className="logo" />
                    </Link>
                </Navbar.Brand>
                {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
                <Navbar.Collapse id="basic-navbar-nav">
                    <Form inline className="m-auto navBarSearchForm pl-3">
                        <FormControl type="text" placeholder="Search your Destination..." className="searchBox" />
                    </Form>
                    <Nav className="m-auto">
                        <Nav.Link className="px-4 ">News</Nav.Link>
                        <Nav.Link className="px-4" >Destination</Nav.Link>
                        <Nav.Link className="px-4">Blog</Nav.Link>
                        <Nav.Link className="px-4">Contact</Nav.Link>

                        {
                            loggedInUser.email ? <p className="userName">{loggedInUser.name}</p> :  <Link to="/login" className="px-4 nav-link btnLogin">
                             Login
                         </Link>
                        }

                        {/* {
                            loggedInUser &&  <Link className="px-4 nav-link" to="/login" >Sign Out</Link>
                        } */}
                       
                     </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
};

export default Header;