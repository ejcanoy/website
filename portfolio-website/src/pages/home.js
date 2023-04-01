import React, { useRef } from "react";
import NavbarMain from '../components/nav';
import { FiletypePdf, Linkedin, Github } from 'react-bootstrap-icons';
import { Card, Button, Row, Col, Container, Form } from 'react-bootstrap';
import myImage from '../images/pins.png';
import eyeImage from '../images/EYE_Logo.png';
import cryptoImage from '../images/cryptotracker.png';
import xmenImage from '../images/xmen_logo.png';
import shotImage from '../images/shottracker.png';
import helpImage from '../images/helpalong.png'
import resume from '../2023-2-Resume.pdf'
import '../App.css';
import '../index.css';
import emailjs from 'emailjs-com';

const Home = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_e5imh1t', 'template_pz2357b', form.current, 'maAR_ePbI3wAv2HYF')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        alert("Email Sent");
    };

    return (
        <>
            <NavbarMain />
            <Container >
                <Row id="home">
                    <Col className="masthead">
                        {/* <div className="masthead" ></div> */}
                        <Col className="color-overlay d-flex justify-content-center align-items-center">
                            <h1>HELLO, I'M EUAN</h1>
                        </Col>
                    </Col>
                </Row>
            </Container>

            <Container className="py-5">
                <Row id="about">
                    <Row className="py-5">
                        <h1>About</h1>
                    </Row>

                    <Col xs={3}></Col>
                    <Col xs={6}>
                        <p>
                            My name is Euan Canoy! I am a software developer
                            based out of Seattle, Washington. I graduated from
                            The University of Washington Bothell in August of 2022.
                            My current interest is in full-stack development and
                            cloud computing, but check out my projects below,
                            download my resume, or visit my links to learn more!
                        </p>
                    </Col>
                    <Col xs={1}></Col>
                    <Col>
                        <Row className="p-1">
                            <Button href={resume} download="2023-2-Resume.pdf"><FiletypePdf /> Download Resume</Button>
                        </Row>
                        <Row className="p-1">
                            <Button href="https://www.linkedin.com/in/euan-canoy-8b3530180/" target="_blank"><Linkedin /> Linkedin</Button>
                        </Row>
                        <Row className="p-1">
                            <Button href="https://github.com/ejcanoy" target="_blank"><Github /> Github</Button>
                        </Row>
                    </Col>
                </Row>
                <Row id="projects">
                    <Row>
                        <Row className="py-5">
                            <h1>Projects</h1>
                        </Row>
                        <Row>
                            <Col className="col-12 col-md p-3 py-sm-3">
                                <Card className="h-100">
                                    <Card.Img variant="top" src={myImage} style={{ height: '250px' }} />
                                    <Card.Body>
                                        <Card.Title>Bowling App</Card.Title>
                                        <Card.Text>
                                            A full stack application to track
                                            league scores and  the type of
                                            pins that you knocked down
                                        </Card.Text>
                                        <Button variant="primary" href="/bowling-app" >Learn More</Button>

                                    </Card.Body>

                                </Card>
                            </Col >
                            <Col className="col-12 col-md p-3 py-sm-3">
                                <Card className="h-100">
                                    <Card.Img variant="top" src={eyeImage} style={{ height: '250px' }} />
                                    <Card.Body>
                                        <Card.Title>EYE Research Group</Card.Title>
                                        <Card.Text>
                                            A non-profit that serves to create
                                            products that makes vision testing a more accessible.
                                        </Card.Text>
                                        <Button variant="primary" href="/eye-research-group" >Learn More</Button>

                                    </Card.Body>

                                </Card>
                            </Col>
                            <Col className="col-12 col-md p-3 py-sm-3">
                                <Card className="h-100">
                                    <Card.Img variant="top" src={cryptoImage} style={{ height: '250px' }} />
                                    <Card.Body>
                                        <Card.Title>CryptoTracker</Card.Title>
                                        <Card.Text>
                                            An application to keep track of your favorite
                                            cryptocurrencies
                                        </Card.Text>
                                        <Button variant="primary" href="/crypto-tracker" >Learn More</Button>

                                    </Card.Body>

                                </Card>
                            </Col>
                        </Row>
                    </Row>
                    <Row>
                        <Row>
                            <Col className="col-12 col-md p-3 py-sm-3">
                                <Card className="h-100">
                                    <Card.Img variant="top" src={xmenImage} style={{ height: '250px' }} />
                                    <Card.Body>
                                        <Card.Title>Student Record System</Card.Title>
                                        <Card.Text>
                                            A record system for administration to keep track
                                            of Xavier's School for the Gifted
                                        </Card.Text>
                                        <Button variant="primary" href="/student-record-system" >Learn More</Button>

                                    </Card.Body>

                                </Card>
                            </Col>
                            <Col className="col-12 col-md p-3 py-sm-3">
                                <Card className="h-100">
                                    <Card.Img variant="top" src={shotImage} style={{ height: '250px' }} />
                                    <Card.Body>
                                        <Card.Title>Shot Tracker</Card.Title>
                                        <Card.Text>
                                            Web application that tracks and displays trends
                                            in shooting data
                                        </Card.Text>
                                        <Button variant="primary" href="/shottracker" >Learn More</Button>

                                    </Card.Body>

                                </Card>
                            </Col>
                            <Col className="col-12 col-md p-3 py-sm-3">
                                <Card className="h-100">
                                    <Card.Img variant="top" src={helpImage} style={{ height: '250px' }} />
                                    <Card.Body>
                                        <Card.Title>HelpAlong</Card.Title>
                                        <Card.Text>
                                            App to connect users to non-emergency
                                            resources
                                        </Card.Text>
                                        <Button variant="primary" href="/helpalong" >Learn More</Button>

                                    </Card.Body>

                                </Card>
                            </Col>
                        </Row>
                    </Row>
                </Row>
                <Row id="contact-me" className="py-5">
                    <Col>
                        <h1>Contact Me</h1>
                        <Form ref={form} onSubmit={sendEmail}>
                            <Form.Group controlId="formBasicName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" name="name" placeholder="Enter name" />
                            </Form.Group>
                            <Form.Group controlId="formEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="text" name="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" name="message" rows={10} />
                            </Form.Group>
                            <Form.Group>
                                <br />
                                <Button variant="primary" type="submit">Submit</Button>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>

            </Container>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </>
    );
}

export default Home;