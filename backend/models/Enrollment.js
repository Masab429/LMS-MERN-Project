const mongoose = require('mongoose');

const enrollmentSchema = new mongoose.Schema({
    student: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true 
    }, // 1. student reference
    course: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Course', 
        required: true 
    }, // 2. course reference
    progress: { 
        type: Number, 
        default: 0 
    } // 3. progress
}, { timestamps: true });

module.exports = mongoose.model('Enrollment', enrollmentSchema);