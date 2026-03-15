import React, { useState } from 'react';
import { register } from '../services/api';
import { Form, Button, Container, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
    const [formData, setFormData] = useState({ 
        fullName: '', 
        Email: '', 
        Password: '', 
        Role: 'student' 
    });
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Backend Controller (fullName, Email, Password, Role) se match kar raha hai
            await register(formData);
            setMsg("Registration Successful! Redirecting to Login...");
            setTimeout(() => navigate('/login'), 2000);
        } catch (err) {
            setMsg("Error in registration. Please check backend connection.");
        }
    };

    return (
        <Container className="mt-5" style={{ maxWidth: '500px' }}>
            <h2 className="text-center mb-4">LMS Registration</h2>
            {msg && <Alert variant={msg.includes("Error") ? "danger" : "success"}>{msg}</Alert>}
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter Name"
                        onChange={(e) => setFormData({...formData, fullName: e.target.value})} 
                        required 
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control 
                        type="email" 
                        placeholder="Enter Email"
                        onChange={(e) => setFormData({...formData, Email: e.target.value})} 
                        required 
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Create Password"
                        onChange={(e) => setFormData({...formData, Password: e.target.value})} 
                        required 
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>User Role</Form.Label>
                    <Form.Select onChange={(e) => setFormData({...formData, Role: e.target.value})}>
                        <option value="student">Student</option>
                        <option value="instructor">Instructor</option>
                        <option value="admin">Admin</option>
                    </Form.Select>
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100">
                    Sign Up
                </Button>
            </Form>
        </Container>
    );
};

export default RegisterPage;