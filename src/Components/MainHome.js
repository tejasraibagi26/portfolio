import React from 'react';
import '../CSS/Home.css';
import {Container, Row, Col,Button} from 'react-bootstrap';

export default function Home() {
    return (
        <Container fluid>
            <Row>
                <Col xs={12} md={4} className="about">
                    <div className = "info__name">
                        <a href = "#">
                            <h1 className="grad1">About Me.</h1>
                        </a>
                        <p align = "center">
                            <Button className = "abt__btn">Click Me. ➞</Button>
                        </p>
                    </div>
                </Col>
                <Col xs={12} md={4}>
                        <div className = "info__name">
                            <a href = "#">
                                <h1 className="grad2">Project.</h1>
                            </a>
                            <p align = "center">
                                <Button className = "abt__btn2">Click Me. ➞</Button>
                            </p>
                        </div>
                </Col>
                <Col xs={12} md={4}>
                    <div className = "info__name">
                        <a href="#">
                            <h1 className="grad3">Resume.</h1>
                        </a>
                        <p align = "center">
                            <Button className = "abt__btn3">Click Me. ➞</Button>
                        </p>
                        <p className="pre">Early Production.</p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}