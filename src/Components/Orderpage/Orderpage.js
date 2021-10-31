import React, { useEffect, useState } from 'react';
import { Card, Button, Row, Col, Placeholder } from 'react-bootstrap';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
import axios from 'axios';


const OrderPage = () => {
    const { user } = useAuth();
    let { _id } = useParams();

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        data.status = "pending"
        console.log(data);

        axios.post('https://dark-web-69066.herokuapp.com/allOrder', data)
            .then(res => {
                console.log(res);
                if (res.data.insertedId) {
                    alert('data insert successfully');
                    reset();
                }
            })

        reset();
    }



    const [service, setService] = useState({});
    useEffect(() => {
        fetch(`https://dark-web-69066.herokuapp.com/services/${_id}`)
            .then(res => res.json())
            .then(data => setService(data));
    }, [])


    return (
        <div className='container'>
            <Row className='py-5'>
                <Col sm={7}>
                    <Card>
                        <Card.Img variant="top" src={service?.imgUrl} />
                        <Card.Body>
                            <Card.Title>{service?.serviceTitlle}</Card.Title>
                            <Card.Text>
                                {service?.serviceDescription}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={5}>
                    <h1 className="mb-3">PLACE YOUR ORDER</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input className="mb-3 form-control"  {...register("name")} value={user.displayName} />
                        <input className="mb-3 form-control" {...register("email")} value={user.email} />
                        <input className="mb-3 form-control" type="text" {...register("address")} placeholder="Enter Your address" />
                        <textarea className="mb-3 form-control"  {...register("description")} placeholder="Description" />
                        <input className='py-2 px-4 bg-primary text-white' type="submit" value="Place Order" />
                    </form>

                </Col>
            </Row>

        </div>
    );
};

export default OrderPage;