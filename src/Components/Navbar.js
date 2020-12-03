import React from 'react';
import logo from '../Images/Tejas.svg'
import {Navbar, Nav} from 'react-bootstrap';

export default function NavbarComponent () {
    return(
        <Navbar collapseOnSelect expand="lg" fixed="top">
                    <Navbar.Brand href="/portfolio"><img src={logo} className="brand__image"></img></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="ml-auto">
                            {/* <Nav.Link href="#">Home.</Nav.Link>
                            <Nav.Link href="#">About Me.</Nav.Link>
                            <Nav.Link href="#">Projects.</Nav.Link> */}
                            <Nav.Link href="/portfolio/contact-me">Contact.</Nav.Link>
                            </Nav>
                    </Navbar.Collapse>
                </Navbar>
    );
}