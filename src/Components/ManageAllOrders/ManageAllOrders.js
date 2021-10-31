import React, { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import './ManageAllOrders.css';

const ManageAllOrders = () => {
    const [allOrder, setAllOrder] = useState([]);
    const [control, setConrol] = useState(false);

    useEffect(() => {
        fetch('https://dark-web-69066.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setAllOrder(data));
    }, [control]);

    const handleDelete = (id) => {
        fetch(`https://dark-web-69066.herokuapp.com/deleteOrder/${id}`, {
            method: "DELETE",
            headers: { "content-type": "application/json" },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount) {
                    alert('You want delete this order');
                    setConrol(!control);
                } else {
                    setConrol(false);
                }
            });
        // console.log(id);
    };


    return (
        <div className='container'>
            <h1 className='text-center'>All Orders{allOrder.length}</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                        <th>Status</th>
                    </tr>
                </thead>
                {
                    allOrder?.map((order, index) =>
                        <tbody key={order._id}>
                            <tr>
                                <td>{index}</td>
                                <td>{order?.name}</td>
                                <td>{order?.email}</td>
                                <td>{order?.address}</td>

                                <Button
                                    className='bg-button' variant="primary">pending
                                </Button>

                                <Button
                                    onClick={() => handleDelete(order._id)}
                                    className='bg-danger-btn' variant="primary">Delete</Button>
                            </tr>
                        </tbody>)
                }

            </Table>
        </div>
    );
};

export default ManageAllOrders;