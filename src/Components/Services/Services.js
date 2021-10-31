import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row, Button, Spinner } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        const timeoutID = window.setTimeout(() => {
            fetch('https://dark-web-69066.herokuapp.com/services')
                .then(res => res.json())
                .then(data => setServices(data))
        }, 2000);

        return () => window.clearTimeout(timeoutID);

    }, [])
    return (
        <div className='bg-light'>
            <Container className='py-5'>
                <h1 className='text-center mb-5'>SERVICES</h1>
                {/* {
                    setTimeout(() => {

                    }, 2000)
                } */}
                <Row xs={1} md={3} className="g-4">
                    {
                        services.map(service => <Col key={service._id}>
                            <Card>
                                <Card.Img variant="top" alt="service image" src={service?.imgUrl} />
                                <Card.Body>
                                    <Card.Title>{service?.serviceTitlle}</Card.Title>
                                    <Card.Text>
                                        {service?.serviceDescription.slice(0, 120)}...
                                    </Card.Text>
                                    <NavLink
                                        to={`/orderPage/${service?._id}`}
                                    ><Button variant="primary"><i className="fas fa-shopping-cart me-2"></i>ORDER NOW</Button>
                                    </NavLink>
                                </Card.Body>
                            </Card>
                        </Col>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Services;