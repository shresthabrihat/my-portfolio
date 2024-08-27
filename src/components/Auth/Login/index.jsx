import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles.css";

export default () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Login successful!');
  };

  return (
    <div className="form-container">
      <h1 className="form-title">Login</h1>

      <form id="loginForm" onSubmit={handleSubmit}>
        <label htmlFor="loginEmail" className="form-label">Email:</label>
        <input type="email" id="loginEmail" name="loginEmail" className="form-input" required />

        <label htmlFor="loginPassword" className="form-label">Password:</label>
        <input type="password" id="loginPassword" name="loginPassword" className="form-input" required />

        <button type="submit" className="form-button">Login</button>
        <span className="form-switch-link" onClick={() => navigate('/register')}>Don't have an account? Register here</span>
      </form>
    </div>
  );
};
