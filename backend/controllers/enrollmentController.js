const Enrollment = require('../models/Enrollment');

exports.enrollInCourse = async (req, res) => {
    try {
        const newEnroll = new Enrollment({
            student: req.user.id,
            course: req.body.courseId
        });
        await newEnroll.save();
        res.status(201).json({ msg: "Enrolled successfully!" });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.getMyCourses = async (req, res) => {
    try {
        const enrolled = await Enrollment.find({ student: req.user.id }).populate('course');
        res.json(enrolled);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};