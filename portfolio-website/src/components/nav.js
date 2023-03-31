import React from 'react';
import { Link, animateScroll } from 'react-scroll';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavbarMain = () => {

    const handleScrollToTop = () => {
        animateScroll.scrollToTop();
    };
    return (
        <Navbar bg="light" expand="lg" sticky="top" >
            <Container>
                <Navbar.Brand onClick={handleScrollToTop}>EC</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link><Link to="home" spy={true} smooth={true} offset={-50} duration={500}>Home</Link></Nav.Link>
                        <Nav.Link><Link to="about" spy={true} smooth={true} offset={-50} duration={500}>About</Link></Nav.Link>
                        <Nav.Link><Link to="projects" spy={true} smooth={true} offset={-50} duration={500}>Projects</Link></Nav.Link>
                        <Nav.Link><Link to="contact-me" spy={true} smooth={true} offset={-50} duration={500}>Contact Me</Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );

}

export default NavbarMain;