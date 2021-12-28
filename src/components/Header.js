import React from 'react'
import logo from '../image/logo.png'
import { Navbar, Nav, Container, Form, Modal, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'bootstrap/dist/css/bootstrap.min.css';
import {faTimes} from '@fortawesome/free-solid-svg-icons'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import '../App.css';
const Header = () => {

    const navLinks = document.getElementById('navLinks');
    function show() {
        navLinks.style.right= "0";


    }
    function hide() {
        navLinks.style.right = "-200px";

    }



    return (


        <>


            <section className='header'>
                <nav>
                    <a href="#"><img src={logo} alt="" /></a>
                    <div className="nav-links" id='navLinks' >
                        {/* <FontAwesomeIcon icon={faTimes} className='fa' onClick={hide()}></FontAwesomeIcon> */}
                        {/* <FontAwesomeIcon icon={["fas", "fa-times"]} className='fa' /> */}
                        {/* <i class="fa fa-times" onClick={hide}></i> */}
                        <ul>
                            <li><a href="/">HOME</a></li>
                            <li><a href="/about">ABOUT</a></li>
                            <li><a href="/services">SERVICES</a></li>
                            <li><a href="/contact">CONTACT US</a></li>

                        </ul>
                    </div>
                    {/* <FontAwesomeIcon icon={faBars} className='fa' onClick={show()}></FontAwesomeIcon> */}
                    {/* <i class="fa fa-bars" ></i> */}

                </nav>
                <div className="text-box">
                    <h1>Younity Finschool</h1>
                    <p>First Digital Student Community Of INDIA</p>
                    <a href="#" className='button'>Get Started</a>
                </div>
            </section>
            {/* <Navbar collapseOnSelect expand="lg" variant="dark" fixed="top" className='nav'>
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
            </Navbar> */}


        </>
    )
}

export default Header
