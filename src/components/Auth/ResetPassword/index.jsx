import React, { useState } from 'react';
import axios from 'axios';
import "../styles.css";

export default () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/reset-password', { userEmail: email });
      alert(res.data.msg);
    } catch (err) {
      console.error(err.response.data);
      alert('Failed to send reset link. Please try again.');
    }
  };

  return (
    <div className="form-container">
      <h1 className="form-title">Reset Password</h1>
      <form id="resetPasswordForm" onSubmit={handleSubmit}>
        <label htmlFor="resetEmail" className="form-label">Email:</label>
        <input
          type="email"
          id="resetEmail"
          name="resetEmail"
          className="form-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button type="submit" className="form-button">Send Reset Link</button>
      </form>
    </div>
  );
};
