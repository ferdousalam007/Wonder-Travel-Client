import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const HeaderNav = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <Navbar bg="primary" variant="dark" expand="lg" sticky="top py-4" >
                <Container>
                    <Navbar.Brand >WONDERl TRAVEL</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active">Home</Link>
                            </li>
                            {user.email ?
                                <>
                                    <li className="nav-item">
                                        <Link to="/myorders" className="nav-link active">My Orders</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/manage-all-orders" className="nav-link active">Manage All Orders</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/add-a-new-service" className="nav-link active">Add A New Service</Link>
                                    </li>
                                    <li className="nav-item">
                                        <span className="nav-link active fw-bold">{user.displayName}</span>
                                    </li>
                                    <li className="nav-item btn btn-danger py-0 px-4">
                                        <Link onClick={logOut} to="/login" className="nav-link active">Logout</Link>
                                    </li>

                                </>

                                :
                                <>
                                    <li className="nav-item btn btn-success py-0 px-4">
                                        <Link to="/login" className="nav-link active">Login</Link>
                                    </li>
                                </>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default HeaderNav;