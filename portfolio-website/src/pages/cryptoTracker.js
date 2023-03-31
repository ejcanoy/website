import React from "react";
import { Row, Col, Image, Container } from "react-bootstrap";
import NavbarProject from "../components/navproject";
import bitcoin from "../images/bitcoin.jpg"


const CryptoTracker = () => {

    return (
        <>
            < NavbarProject />

            <Container className="py-5">
                <h1>CryptoTracker</h1>
                <Row className="py-5">
                    <Col className="justify-content-center col" >
                        <Image src={bitcoin} className="w-75 justify-center"/>
                    </Col>

                    <Col className="col">
                        <br/>
                        <br/>
                        <br/>
                        <p>
                        Developed a web app in collaboration with a team of UW students that allows user to track
                        cryptocurrencies, receive email updates on top cryptos, and save cryptos that they want to monitor to
                        an account that they created. Created the API and email subscription features. Made with Python,
                        Flask, AWS EC2/Elastic Beanstalk, AWS S3, AWS DynamoDB, AWS Code Pipeline, AWS SNS, AWS Lambda.
                        </p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}


export default CryptoTracker;