import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles.css";

export default () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match.');
    } else {
      alert('Registration successful! A confirmation email has been sent.');
    }
  };

  return (
    <div className="form-container">
      <h1 className="form-title">Register</h1>

      <form id="registrationForm" onSubmit={handleSubmit}>
        <label htmlFor="firstName" className="form-label">First Name:</label>
        <input type="text" id="firstName" name="firstName" className="form-input" required />

        <label htmlFor="lastName" className="form-label">Last Name:</label>
        <input type="text" id="lastName" name="lastName" className="form-input" required />

        <label htmlFor="email" className="form-label">Email:</label>
        <input type="email" id="email" name="email" className="form-input" required />

        <label htmlFor="password" className="form-label">New Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          className="form-input"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <label htmlFor="confirmPassword" className="form-label">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          className="form-input"
          required
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <button type="submit" className="form-button">Register</button>
        <span className="form-switch-link" onClick={() => navigate('/login')}>Already registered? Log in here</span>
      </form>
    </div>
  );
};
