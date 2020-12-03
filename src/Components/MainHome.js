import React from 'react';
import '../CSS/Home.css';
import '../CSS/Animation.css';
import {Link} from 'react-router-dom';
import {Container, Row, Col,Button} from 'react-bootstrap';
import dlLink from '../DownloadableContent/TejasRaibagi_Resume.pdf';

export default function Home() {
    return (
        <Container fluid>
            <Row>
                <Col xs={12} md={4} className="about">
                    <div className = "info__name fadeIn">
                        <Link to = "/portfolio/about-me">
                            <h1 className="grad1">About Me.</h1>
                            <p align = "center">
                                <Button className = "abt__btn fadeIn">Click Me. ➞</Button>
                            </p>
                        </Link>
                    </div>
                </Col>
                <Col xs={12} md={4}>
                        <div className = "info__name fadeIn" style={{animationDelay: "0.1s"}}>
                            <a href = "#">
                                <h1 className="grad2">Project.</h1>
                            </a>
                            <p align = "center">
                                <Button className = "abt__btn2">Click Me. ➞</Button>
                            </p>
                        </div>
                </Col>
                <Col xs={12} md={4}>
                    <div className = "info__name fadeIn" style={{animationDelay: "0.2s"}}>
                        <a href={dlLink} target="_blank" rel="noopener noreferrer" download="Resume">
                            <h1 className="grad3">Resume.</h1>
                            <p align = "center">
                                <Button className = "abt__btn3">Click Me. ➞</Button>
                            </p>
                        </a>
                        <p className="pre">Early Production.</p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}