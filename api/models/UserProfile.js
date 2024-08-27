
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserProfileSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  userEmail: { type: String, required: true, unique: true },
  userPassword: { type: String, required: true },
  social: { type: [String] },
  userAbout: { type: [String] },
  userProjects: { type: [String] },
  messages: { type: [String]},
});

// Hash password before saving the user
UserProfileSchema.pre('save', async function (next) {
  if (!this.isModified('userPassword')) return next();

  const salt = await bcrypt.genSalt(10);
  this.userPassword = await bcrypt.hash(this.userPassword, salt);
  next();
});

module.exports = mongoose.model('UserProfile', UserProfileSchema);
