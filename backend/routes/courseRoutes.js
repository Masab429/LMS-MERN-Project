const express = require('express');
const router = express.Router();
const { 
    getAllCourses, 
    createCourse, 
    updateCourse, 
    deleteCourse, 
    enrollInCourse, 
    getMyCourses 
} = require('../controllers/courseController');

router.get('/', getAllCourses);
router.post('/', createCourse);
router.put('/:id', updateCourse);
router.delete('/:id', deleteCourse);
router.post('/enroll', enrollInCourse);
router.get('/my-courses', getMyCourses);

module.exports = router;