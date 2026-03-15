import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Pages Import
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import AdminDashboard from '../pages/AdminDashboard';
import InstructorDashboard from '../pages/InstructorDashboard';
import StudentDashboard from '../pages/StudentDashboard';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/instructor" element={<InstructorDashboard />} />
            <Route path="/student" element={<StudentDashboard />} />
        </Routes>
    );
};

export default AppRoutes;