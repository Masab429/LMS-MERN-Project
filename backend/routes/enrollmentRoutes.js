const express = require('express');
const router = express.Router();
const { enrollInCourse, getMyCourses } = require('../controllers/enrollmentController');
const { protect } = require('../middleware/authMiddleware');

router.post('/enroll', protect, enrollInCourse); // Requirement: POST /enroll 
router.get('/my-courses', protect, getMyCourses); // Requirement: GET /my-courses 

module.exports = router;