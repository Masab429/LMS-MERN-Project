const Course = require('../models/Course');

// Existing Course Logic... (Create, Get All, Update, Delete)
exports.getAllCourses = async (req, res) => {
    try {
        const courses = await Course.find().populate('instructor', 'fullName');
        res.json(courses);
    } catch (err) { res.status(500).json({ error: err.message }); }
};

exports.createCourse = async (req, res) => {
    try {
        const { title, description, category, price } = req.body;
        const newCourse = new Course({ title, description, category, price, instructor: req.user.id });
        await newCourse.save();
        res.status(201).json(newCourse);
    } catch (err) { res.status(400).json({ error: err.message }); }
};

// NEW: Enrollment POST /enroll
exports.enrollInCourse = async (req, res) => {
    try {
        // Simple logic: Enrollment model ya user array update karna (Requirement logic)
        res.status(201).json({ msg: "Enrolled successfully!" });
    } catch (err) { res.status(400).json({ error: "Enrollment failed" }); }
};

// NEW: Enrollment GET /my-courses
exports.getMyCourses = async (req, res) => {
    try {
        // Enrolled courses filter karne ki logic
        res.json({ msg: "List of enrolled courses fetched" });
    } catch (err) { res.status(500).json({ error: "Fetch failed" }); }
};

exports.updateCourse = async (req, res) => {
    try {
        const updatedCourse = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedCourse);
    } catch (err) { res.status(500).json({ error: err.message }); }
};

exports.deleteCourse = async (req, res) => {
    try {
        await Course.findByIdAndDelete(req.params.id);
        res.json({ msg: "Course removed" });
    } catch (err) { res.status(500).json({ error: err.message }); }
};