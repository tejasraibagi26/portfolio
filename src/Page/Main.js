import React from 'react';
import logo from '../Images/Tejas.svg';
import $ from "jquery";
import {Navbar, Nav, Col, Row, Button, Container} from 'react-bootstrap';

function Main() {

    $(document).ready(function () {
        $('#hidden1').hover(function () {
            $(this).css("visiblility", "visible");
        })
    })
        return(
            <section id = "main__page">
                    <Navbar collapseOnSelect expand="lg" fixed="top">
                    <Navbar.Brand href="#home"><img src={logo} className="brand__image"></img></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="ml-auto">
                            {/* <Nav.Link href="#">Home.</Nav.Link>
                            <Nav.Link href="#">About Me.</Nav.Link>
                            <Nav.Link href="#">Projects.</Nav.Link> */}
                            <Nav.Link href="#">Contact.</Nav.Link>
                            </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <div className="personal__info">
                    <Container fluid>
                        <Row>
                        <Col xs={12} md={4} className="about">
                            <Container fluid>
                                <div className = "info__name">
                                    <a href = "#">
                                        <h1 className="grad1">About Me.</h1>
                                    </a>
                                    <p align = "center">
                                        <Button className = "abt__btn">Click Me. ➞</Button>
                                    </p>
                                </div>
                            </Container>
                        </Col>
                        <Col xs={12} md={4}>
                            <Container fluid>
                                <div className = "info__name">
                                    <a href = "#">
                                        <h1 className="grad2">Project.</h1>
                                    </a>
                                    <p align = "center">
                                        <Button className = "abt__btn2">Click Me. ➞</Button>
                                    </p>
                                </div>
                            </Container>
                        </Col>
                        <Col xs={12} md={4}>
                            <Container fluid>
                                <div className = "info__name">
                                    <a href="#">
                                        <h1 className="grad3">Resume.</h1>
                                    </a>
                                    <p align = "center">
                                        <Button className = "abt__btn3">Click Me. ➞</Button>
                                    </p>
                                </div>
                            </Container>
                        </Col>
                    </Row>
                    </Container>
                </div>
            </section>
        );
}

export default Main;