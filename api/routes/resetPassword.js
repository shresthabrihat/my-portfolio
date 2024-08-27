const express = require('express');
const bcrypt = require('bcryptjs');
const UserProfile = require('../models/UserProfile');
const router = express.Router();

// Reset password
router.post('/reset-password', async (req, res) => {
  const { userEmail, newPassword } = req.body;

  try {
    let user = await UserProfile.findOne({ userEmail });

    if (!user) {
      return res.status(400).json({ msg: 'User not found' });
    }

    // Hash the new password before saving it
    const salt = await bcrypt.genSalt(10);
    user.userPassword = await bcrypt.hash(newPassword, salt);

    await user.save();

    res.json({ msg: 'Password reset successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
