import React from 'react';
import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const { signInUsingGoogle, handleUserLogin, error, hanldeEmail, hanldeName, hanldePassword, handleUserRegister, name, email, password, user, updateName, setUser, createAccountWithGoogle } = useAuth();
    const [toggle, setToggle] = useState(false);
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || "home"

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }
    const handleLogin = () => {
        handleUserLogin(email, password);

    }
    const handleRegister = (e) => {
        
        createAccountWithGoogle(email, password)
            .then((res) => {
                updateName(name)
                setUser(res.user)
                console.log(res.user);
                history.push(redirect_uri)
            })
            .catch((error) => {
                // const errorCode = error.code;
                // const errorMessage = error.message;
                // ..
            })

    };
    
    return (
        <div className='container py-5 w-50 text-center'>


            {toggle ? <>
                <h1>Please Register</h1>
                <Form.Floating className="mb-3">
                    <Form.Control
                        onChange={hanldeName}
                        id="floatingInputCustom"
                        type="text"
                        placeholder="Enter your Name"
                    />
                    <label htmlFor="floatingInputCustom">Enter your Name</label>
                </Form.Floating>
                <Form.Floating className="mb-3">
                    <Form.Control
                        onChange={hanldeEmail}
                        id="floatingInputCustom"
                        type="email"
                        placeholder="name@example.com"
                    />
                    <label htmlFor="floatingInputCustom">Email address</label>
                </Form.Floating>
                <Form.Floating>
                    <Form.Control
                        onChange={hanldePassword}
                        id="floatingPasswordCustom"
                        type="password"
                        placeholder="Password"
                    />
                    <label htmlFor="floatingPasswordCustom">Password</label>
                </Form.Floating>
                <Button onClick={handleRegister} className='mt-4' variant="primary" size="lg">
                    Register
                </Button>
            </> : <>
                <h1>Please Login</h1>
                <Form.Floating className="mb-3">
                    <Form.Control
                        id="floatingInputCustom"
                        type="email"
                        placeholder="name@example.com"
                    />
                    <label htmlFor="floatingInputCustom">Email address</label>
                </Form.Floating>
                <Form.Floating>
                    <Form.Control
                        id="floatingPasswordCustom"
                        type="password"
                        placeholder="Password"
                    />
                    <label htmlFor="floatingPasswordCustom">Password</label>
                </Form.Floating>
                <Button onClick={handleLogin} className='mt-4' variant="primary" size="lg">
                    Login
                </Button>
            </>}

            {toggle ? (
                <p onClick={() => setToggle(false)} className="text-primary pointer">
                    already have an account ?
                </p>
            ) : (
                <p onClick={() => setToggle(true)} className="text-primary pointer">

                    are you new please register
                </p>
            )}






            <h2 className='mt-4'>Login With Google</h2>
            <Button onClick={handleGoogleLogin} className='mt-4' variant="primary" size="lg">
                <i className="fab fa-google me-2"></i> Google Login
            </Button>
        </div>
    );
};

export default Login;