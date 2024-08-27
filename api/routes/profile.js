const express = require('express');
const UserProfile = require('../models/UserProfile');
const router = express.Router();

// Update user profile
router.put('/:id', async (req, res) => {
  const { social, userAbout, userProjects, messages } = req.body;

  try {
    let user = await UserProfile.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }

    user.social = social || user.social;
    user.userAbout = userAbout || user.userAbout;
    user.userProjects = userProjects || user.userProjects;
    user.messages = messages || user.messages;

    await user.save();
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
