const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },     // 1. name
    email: { type: String, required: true, unique: true }, // 2. email
    password: { type: String, required: true },  // 3. password
    role: { 
        type: String, 
        enum: ['admin', 'instructor', 'student'], 
        default: 'student' 
    }                                           // 4. role
}, { timestamps: true });                       // 5. timestamps

module.exports = mongoose.model('User', userSchema);