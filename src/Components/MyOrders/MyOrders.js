import React, { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const MyOrders = () => {
    const { user } = useAuth();
    const [myOrder, setmyOrder] = useState([]);
    const [control, setConrol] = useState(false);

    useEffect(() => {
        fetch(`https://dark-web-69066.herokuapp.com/myOrder/${user?.email}`)
            .then((res) => res.json())
            .then((data) => setmyOrder(data));
    }, [user.email, control]);
    console.log(myOrder)

    const handleDelete = (id) => {
        fetch(`https://dark-web-69066.herokuapp.com/deleteMyOrder/${id}`, {
            method: "DELETE",
            headers: { "content-type": "application/json" },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount) {
                    alert('calcel your ordr!');
                    setConrol(!control);
                } else {
                    setConrol(false);
                }
            });
        console.log(id);
    };
    return (
        <div className='container'>
            <h1 className='text-center'>My Orders {myOrder.length}</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>email</th>
                        <th>Description</th>
                    </tr>
                </thead>
                {
                    myOrder.map((order, index) =>
                        <tbody key={order._id}>
                            <tr>
                                <td>{index}</td>
                                <td>{order.name}</td>
                                <td>{order.email}</td>
                                <td>{order.description}</td>
                                <Button className='bg-button' variant="primary">pending</Button>
                                <Button
                                    onClick={() => handleDelete(order._id)}
                                    className='bg-danger-btn'
                                    variant="primary">Delete
                                </Button>
                            </tr>
                        </tbody>)
                }

            </Table>
        </div>
    );
};

export default MyOrders;