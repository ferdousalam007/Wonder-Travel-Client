import React from 'react';
import "./TopDestinations.css"
import { Card, Col, Row } from 'react-bootstrap';
import destination1 from '../../images/tour-image-1.jpg';
import destination2 from '../../images/tour-image-2.jpg';
const TopDestinations = () => {
    return (
        <div className='container py-70'>
            <h1 className='text-center mb-5'>TOP DESTINATION</h1>
            <Row xs={1} md={2} className="g-4">
                <Col>
                    <Card>
                        <Card.Img variant="top" src={destination1} />
                        <Card.Body>
                            <Card.Title>Dazzling Dubai</Card.Title>
                            <Card.Text>
                            Start and end in Dubai! With the In-depth Cultural tour Dazzling Dubai, you have a 6 days tour package taking you through Dubai, United Arab Emirates and Abu Dhabi,. Dazzling Dubai includes accommodation in a hotel as well as an expert guide, meals, transport and more.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img className='img-fluid' variant="top" src={destination2 } />
                        <Card.Body>
                            <Card.Title>Paris Honeymoon Tour</Card.Title>
                            <Card.Text>
                            If there is a perfect destination for romantic vacations, it is Paris without any doubt. Bestowed with amazing natural beauty that is well complemented by man-made wonders like the Eiffel Tower and Notre Dame, the French capital offers the perfect setting for a romantic vacation. During s="bold">Paris honeymoon holidays
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default TopDestinations;