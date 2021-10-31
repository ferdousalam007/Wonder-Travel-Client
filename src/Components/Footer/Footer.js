import React from 'react';
import { Col, Container, ListGroup, Row } from 'react-bootstrap';
import logo from "../../images/logo.png"
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer-bg py-5'>
            <Container>
                <Row>
                    <Col>
                        <div className='py-3 px-4'>

                        <h5 className='text-white'>WONDER TOURS</h5>
                            <p>What is travel and example?
                                Travel is defined as the act of going on a trip or going on vacation. An example of travel is the act of going from New York to London. ... An example of travel is when you get on a bus or a plane.</p>

                        </div>
                    </Col>
                    <Col>
                        <div className='py-3 px-4'>

                            <h5 className='text-white'>OUR SERVICES</h5>
                            <ListGroup variant="flush">
                                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                            </ListGroup>

                        </div>
                    </Col>
                    <Col>
                        <div className='py-3 px-4'>

                            <h5 className='text-white'>CONTACT INFO</h5>
                            <ul className='p-0 mt-4'>
                                <li className='list-unstyled mb-4'><i className="fas fa-phone-alt me-3"></i>1-677-124-44227</li>
                                <li className='list-unstyled mb-4'><i className="fas fa-map-marker-alt me-3"></i> 184 Main Collins Street</li>
                                <li className='list-unstyled'><i className="far fa-envelope me-3"></i> info@yoursite.com</li>
                            </ul>

                        </div>
                    </Col>
                    <Col>
                        <div className='py-3 px-4'>
                            <h5 className='text-white'>SOCIAL LINKS</h5>
                            <ListGroup horizontal>
                                <ListGroup.Item className='bg-success'><i className="fab fa-twitter"></i></ListGroup.Item>
                                <ListGroup.Item className='bg-primary'><i className="fab fa-facebook-f"></i></ListGroup.Item>
                                <ListGroup.Item className='bg-danger'><i className="fab fa-instagram"></i></ListGroup.Item>
                                <ListGroup.Item className='bg-primary'><i className="fab fa-linkedin-in"></i></ListGroup.Item>
                            </ListGroup>
                        </div>
                    </Col>
                    <p className='text-center py-2'>Copyright © 2021 wonder-travel, All rights reserved.</p>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;