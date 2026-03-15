import React, { useState } from 'react';
import { login } from '../services/api';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container } from 'react-bootstrap';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const { data } = await login({ userEmail: email, userPassword: password });
            // Requirement: JWT-based authentication 
            localStorage.setItem('token', data.token); 
            localStorage.setItem('role', data.user.role);
            
            // Role-based redirection 
            if(data.user.role === 'admin') navigate('/admin');
            else if(data.user.role === 'instructor') navigate('/instructor');
            else navigate('/student');
            
            alert("Login Successful!");
        } catch (err) {
            alert("Invalid Credentials");
        }
    };

    return (
        <Container className="mt-5" style={{maxWidth: '400px'}}>
            <h2 className="text-center">LMS Login</h2>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" onChange={(e) => setEmail(e.target.value)} required />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" onChange={(e) => setPassword(e.target.value)} required />
                </Form.Group>
                <Button variant="success" type="submit" className="w-100">Login</Button>
            </Form>
        </Container>
    );
};

export default LoginPage;