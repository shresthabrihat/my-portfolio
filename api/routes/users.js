const express = require('express');
const UserProfile = require('../models/UserProfile');
const authMiddleware = require('../middleware/auth');
const router = express.Router();

// Fetch the authenticated user's profile
router.get('/me', authMiddleware, async (req, res) => {
  try {
    const user = await UserProfile.findById(req.user.id).select('-userPassword');
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

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
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
