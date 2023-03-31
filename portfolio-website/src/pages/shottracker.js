import React from "react";
import NavbarProject from "../components/navproject";
import stats from "../images/statistics.png";
import tracker from "../images/tracker.png";
import { Container, Row, Col, Carousel } from "react-bootstrap";


const Shottracker = () => {

    return (
        <>
            < NavbarProject />
            <Container className="py-5">
                <h1>Shot Tracker</h1>
                <Row className="py-5">
                    <Col className="justify-content-center col" >
                        <Carousel variant="dark" >
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 p-4"
                                    src={tracker}
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 p-4"
                                    src={stats}
                                    alt="Second slide"
                                />

                            </Carousel.Item>
                        </Carousel>
                    </Col>

                    <Col className="col">
                        <br/>
                        <br/>
                        Individually developed a webpage using HTML, CSS, javaScript, and Firebase that 
                        tracks and displays trends on shooting statistics. Displays past shooting 
                        session totals and percentages in addition to displaying hot and cold 
                        zones.
                    </Col>
                </Row>
            </Container>
        </>
    )
}


export default Shottracker;