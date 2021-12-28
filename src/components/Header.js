import React from 'react'
import logo from '../image/logo.png'
import { Navbar, Nav, Container, Form, Modal, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
const Header = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" variant="dark" fixed="top" className='nav'>
                <Container>
                    <Navbar.Brand href="#"><img src={logo} className='logo' /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="m-auto">
                            <LinkContainer to="/">
                                <Nav.Link>Home</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/about">
                                <Nav.Link>About</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/services">
                                <Nav.Link>Services</Nav.Link>
                            </LinkContainer>

                            <LinkContainer to="/contact">
                                <Nav.Link>Contact</Nav.Link>
                            </LinkContainer>

                        </Nav>
                        <Form className="d-flex">

                            <Button variant="outline-success mx-2">Login</Button>
                            <Button variant="outline-success mx-2">Sign Up</Button>


                        </Form>

                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    )
}

export default Header
