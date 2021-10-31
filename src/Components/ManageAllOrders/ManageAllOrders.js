import React, { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import './ManageAllOrders.css';

const ManageAllOrders = () => {
    const [allOrder, setAllOrder] = useState([]);
    const [control, setConrol] = useState(false);
    const [isUpdate, setIsUpdated] = useState(null);

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
                    setConrol(!control);
                } else {
                    setConrol(false);
                }
            });
        // console.log(id);
    };
    //status update
    // useEffect(() => {
    //     fetch(`https://dark-web-69066.herokuapp.com/singleProduct/${productId}`)
    //       .then((res) => res.json())
    //       .then((data) => setProduct(data));
    //   }, [productId, isUpdate]);

      
    const handleStatus = (data) => {
        
        fetch(`https://dark-web-69066.herokuapp.com/orders/${data}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.modifiedCount) {
                    setIsUpdated(true);
                } else {
                    setIsUpdated(false);
                }
            });
        console.log(data);
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
                                    onClick={() => handleStatus(order?._id)}
                                    className='bg-button' variant="primary">normal</Button>
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