import React from 'react'
import logo from '../image/logo.jpeg'
import { Navbar, Nav, Container, Form, Modal, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import menu from '../image/menu.png'

import '../App.css';
const Header = () => {


    return (
        <>
            <Navbar collapseOnSelect expand="lg" variant="dark" fixed="top" className='nav'>
                <Container>
                    <Navbar.Brand href="/"><img src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <LinkContainer className='li' to="/">
                                <Nav.Link className='a'>HOME</Nav.Link>
                            </LinkContainer>
                            <LinkContainer className='li' to="/about">
                                <Nav.Link className='a'>ABOUT US</Nav.Link>
                            </LinkContainer>
                            <LinkContainer className='li' to="/courses">
                                <Nav.Link className='a'>COURSES</Nav.Link>
                            </LinkContainer>

                            <LinkContainer className='li' to="/contact">
                                <Nav.Link className='a'>CONTACT US</Nav.Link>
                            </LinkContainer>

                        </Nav>


                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* <nav>
                <a href="#"><img src={logo} alt="" /></a>
                <div className="nav-links" >
                    <ul>
                        <i id='menu-close' class="fa fa-times"></i>

                        <LinkContainer className='li' to="/">
                            <Nav.Link className='a'>HOME</Nav.Link>
                        </LinkContainer>
                        <LinkContainer className='li' to="/about">
                            <Nav.Link className='a'>ABOUT US</Nav.Link>
                        </LinkContainer>
                        <LinkContainer className='li' to="/services">
                            <Nav.Link className='a'>COURSES</Nav.Link>
                        </LinkContainer>

                        <LinkContainer className='li' to="/contact">
                            <Nav.Link className='a'>CONTACT US</Nav.Link>
                        </LinkContainer>
                    </ul>
                    <img id='menu-btn' src={menu} alt="" />
                </div>
            </nav> */}




        </>
    )
}

export default Header
