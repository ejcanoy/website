import React from 'react';
import { useRef } from 'react';
import NavbarMain from './components/nav';
import { FiletypePdf, Linkedin, Github } from 'react-bootstrap-icons';
import { Card, Button, Image, Row, Col, Container, Form } from 'react-bootstrap';
import myImage from './pins.png';
import resume from './2023-2-Resume.pdf'
import './App.css';
import './index.css';
import emailjs from 'emailjs-com';

function App() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_e5imh1t', 'template_pz2357b', form.current, 'maAR_ePbI3wAv2HYF')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };



  return (
    <>
      <NavbarMain />
      <Container>
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
              My name is Euan Canoy and I am a software developer based out of
              Seattle, Washington. I graduated from the University of Washington,
              Bothell in August of 2022. I am interested in
              fullstack development and cloud computing.
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
            <Col className="col-12 col-md p-3 py-sm-3">
              <Card >
                <Card.Img variant="top" src={myImage} />
                <Card.Body>
                  <Card.Title>Bowling App</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>

                </Card.Body>

              </Card>
            </Col>
            <Col className="col-12 col-md p-3 py-sm-3">
              <Card >
                <Card.Img variant="top" src={myImage} />
                <Card.Body>
                  <Card.Title>Bowling App</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>

                </Card.Body>

              </Card>
            </Col>
            <Col className="col-12 col-md p-3 py-sm-3">
              <Card >
                <Card.Img variant="top" src={myImage} />
                <Card.Body>
                  <Card.Title>Bowling App</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>

                </Card.Body>

              </Card>
            </Col>
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
                <Form.Label>message</Form.Label>
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
  )
}


export default App;
