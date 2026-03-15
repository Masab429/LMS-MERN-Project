const express = require('express');
const router = express.Router();
// Destructuring ensure karein taake function hi mile
const { registerUser, loginUser, getAllUsers, deleteUser } = require('../controllers/authController');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/users', getAllUsers);
router.delete('/users/:id', deleteUser);

module.exports = router;