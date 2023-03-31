import React from "react";
import { Row, Col, Image, Container } from "react-bootstrap";
import NavbarProject from "../components/navproject";
import student from "../images/student.jpg"

const StudentRecordSystem = () => {

    return (
        <>
            < NavbarProject />

            <Container className="py-5">
                <h1>Student Record System for Xavier's School for the Gifted</h1>
                <Row className="py-5">
                    <Col className="justify-content-center col" >
                        <Image src={student} className="w-75 justify-center" />
                    </Col>

                    <Col className="col">
                        <br/>
                        <p>
                            Produced a web app with a group of students that presents, creates, and updates student records.
                            Created the database and the features to update transcript records. Made with Python, Flask,
                            PostgreSQL, and Psycopg2.
                        </p>
                    </Col>
                </Row>
            </Container>

        </>
    )
}


export default StudentRecordSystem;