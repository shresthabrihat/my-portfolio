const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const UserProfile = require('../models/UserProfile');
const router = express.Router();

// Send password reset email
router.post('/', async (req, res) => {
  const { userEmail } = req.body;

  try {
    const user = await UserProfile.findOne({ userEmail });

    if (!user) {
      return res.status(400).json({ msg: 'User not found' });
    }

    // Create a reset token
    const resetToken = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Create reset link
    const resetLink = `http://localhost:3000/reset-password/${resetToken}`;

    // Configure the email transport using nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Use your preferred email service
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // Your email password
      },
    });

    // Send the email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: userEmail,
      subject: 'Password Reset',
      text: `Click the following link to reset your password: ${resetLink}`,
    });

    res.json({ msg: 'Password reset link has been sent to your email.' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Reset password using token
router.post('/:token', async (req, res) => {
  const { token } = req.params;
  const { newPassword } = req.body;

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await UserProfile.findById(decoded.id);

    if (!user) {
      return res.status(400).json({ msg: 'Invalid token or user does not exist.' });
    }

    // Hash the new password
    const salt = await bcrypt.genSalt(10);
    user.userPassword = await bcrypt.hash(newPassword, salt);

    await user.save();

    res.json({ msg: 'Password has been reset successfully.' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
