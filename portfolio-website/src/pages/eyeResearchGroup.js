import React from "react";
import NavbarProject from "../components/navproject";
import { Row, Container, Col, Image } from "react-bootstrap";
import eyeImage from '../images/EYE_Logo.png';


const EYEResearchGroup = () => {

    return (
        <>
            < NavbarProject />

            <Container className="py-5">
                <h1>EYE Research Group</h1>
                <Row>
                    <Col className="justify-content-center col" >
                        <Image src={eyeImage} className="w-75 justify-center"/>
                    </Col>

                    <Col className="col">
                        <br/>
                        <br/>
                        <br/>

                        <p>
                            Designed and implemented webpages and databases with practical application for obtaining consent forms used
                            in eye management by Near Vision Institute. This tool streamlined the consent form process with
                            improved data processing. In conjunction, I designed and executed a web-based patient intake
                            form completed by patients prior to initial visits with the provider. Made with PHP, HTML,
                            MySQL, AWS EC2, AWS RDS.
                        </p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}


export default EYEResearchGroup;