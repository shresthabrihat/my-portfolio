const express = require('express');
const UserProfile = require('../models/UserProfile');
const authMiddleware = require('../middleware/auth');
const router = express.Router();

// Fetch all users (protected)
router.get('/', authMiddleware, async (req, res) => {
  try {
    const users = await UserProfile.find().select('-userPassword'); // Exclude the password field
    res.json(users);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Fetch a single user by ID (protected)
router.get('/:id', authMiddleware, async (req, res) => {
  try {
    const user = await UserProfile.findById(req.params.id).select('-userPassword');
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
