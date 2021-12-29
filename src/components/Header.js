import React from 'react'
import logo from '../image/logo.png'
import { Navbar, Nav, Container, Form, Modal, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'bootstrap/dist/css/bootstrap.min.css';
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import '../App.css';
const Header = () => {

    const navLinks = document.getElementById('navLinks');
    function show() {
        navLinks.style.right = "0";


    }
    function hide() {
        navLinks.style.right = "-200px";

    }



    return (


        <>


            <nav>
                <a href="#"><img src={logo} alt="" /></a>
                <div className="nav-links" >

                    <ul>

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
                </div>


            </nav>
          
          


        </>
    )
}

export default Header
