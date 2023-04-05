import React from "react";
import NavbarProject from "../components/navproject";
import { Row, Carousel, Container, Col } from "react-bootstrap";
import photos from '../bowlingPhotos';



const BowlingApp = () => {

    return (
        <>
            < NavbarProject />
            <Container className="py-5">
                <h1>Bowling App</h1>
                <Row className="py-5">
                    <Col className="justify-content-center col" >
                        <Carousel variant="dark" >
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 p-4"
                                    src={photos.pins2}
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 p-4"
                                    src={photos.pins}
                                    alt="Second slide"
                                />

                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 p-4"
                                    src={photos.game}
                                    alt="Third slide"
                                />

                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 p-4"
                                    src={photos.sets}
                                    alt="Third slide"
                                />

                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100  p-4"
                                    src={photos.league}
                                    alt="Third slide"
                                />

                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100  p-4"
                                    src={photos.home}
                                    alt="Third slide"
                                />

                            </Carousel.Item>
                        </Carousel>
                    </Col>

                    <Col className="col">
                        <br/>
                        <br/>
                        Programmed a full stack bowling application that tracks the score of 3 game sets for league
                        and the type of pins knocked down per frame. Made the front end with React,HTML, CSS, bootstrap,
                        and JavaScript. Created the REST API with Express, JavaScript, and AWS DynamoDB.
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default BowlingApp;