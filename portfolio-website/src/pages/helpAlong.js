import React from "react";
import { Row, Col, Container, Carousel } from "react-bootstrap";
import NavbarProject from "../components/navproject";
import help from "../images/help.jpg";
import health from "../images/health.jpg";


const HelpAlong = () => {

    return (
        <>
            < NavbarProject />
            <Container className="py-5">
                <h1>HelpAlong</h1>
                <Row className="py-5">
                    <Col className="justify-content-center col" >
                        <Carousel variant="dark" >
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 p-4"
                                    src={help}
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 p-4"
                                    src={health}
                                    alt="Second slide"
                                />

                            </Carousel.Item>
                        </Carousel>
                    </Col>

                    <Col className="col">
                        Produced a new web app in 48 hours in collaboration with a team of 
                        UW students that connects end-users in non-emergency situations to a database of social and mental
                        health resources in the state of Washington. Made during the Hack 20' Hackathon with
                        React, javaScript, and Firebase with no prior React experience.
                    </Col>
                </Row>
            </Container>
        </>
    )
}


export default HelpAlong;