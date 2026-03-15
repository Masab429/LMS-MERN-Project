const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    title: { type: String, required: true },        // 1. title
    description: { type: String, required: true },  // 2. description
    instructor: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true 
    },                                              // 3. instructor reference
    category: { type: String, required: true },     // 4. category
    price: { type: Number, required: true }         // 5. price
}, { timestamps: true });

module.exports = mongoose.model('Course', courseSchema);