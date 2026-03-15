import axios from 'axios';

// Backend connection setup
const API = axios.create({ baseURL: 'http://localhost:5000/api' });

// Token automatically har request mein bhejni ke liye (Authentication Verification)
API.interceptors.request.use((req) => {
    const token = localStorage.getItem('token');
    if (token) {
        req.headers.Authorization = `Bearer ${token}`;
    }
    return req;
});

// --- 1. Authentication APIs (Requirement: POST /register, POST /login) ---
export const login = (data) => API.post('/auth/login', data);
export const register = (data) => API.post('/auth/register', data);

// --- 2. User Management APIs (Requirement: GET /users, DELETE /users/:id) ---
export const fetchUsers = () => API.get('/auth/users');
export const deleteUser = (id) => API.delete(`/auth/users/${id}`);

// --- 3. Course Management APIs (Requirement: GET, POST, PUT, DELETE /courses) ---
export const fetchCourses = () => API.get('/courses');
export const createCourse = (data) => API.post('/courses', data);
export const updateCourse = (id, data) => API.put(`/courses/${id}`, data);
export const deleteCourse = (id) => API.delete(`/courses/${id}`);

// --- 4. Enrollment APIs (Requirement: POST /enroll, GET /my-courses) ---
export const enrollInCourse = (data) => API.post('/courses/enroll', data);
export const fetchMyCourses = () => API.get('/courses/my-courses');

export default API;