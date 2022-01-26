import React from 'react'
import logo from '../image/logo.jpeg'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


import '../App.css';
const Header = () => {
    // const scroll = () => {
    //     const icon = document.getElementById('watsap');


    //     window.onscroll = function () { scrollFunction() };

    //     function scrollFunction() {
    //         if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    //             icon.classList.add('active');
    //         } else {
    //             icon.classList.remove('active');
    //         }
    //     }
    // }



    return (
        <>
            {/* <a onClick={scroll} id="watsap" title="WhatsApp" href='https://wa.me/919756102244'><i class="fa fa-whatsapp"></i></a> */}
            <a id="watsap" title="WhatsApp" href='https://wa.me/919756102244'><i class="fa fa-whatsapp"></i></a>
            <a id="phone" title="WhatsApp" href="tel:+91-975-610-2244"><i class="fa fa-phone"></i></a>
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
                        <i id='menu-close' className="fa fa-times"></i>

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
