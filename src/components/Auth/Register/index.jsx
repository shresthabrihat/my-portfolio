import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "../styles.css";

export default () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const { firstName, lastName, email, password, confirmPassword } = formData;
  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match.');
    } else {
      try {
        const res = await axios.post('http://localhost:5000/api/auth/register', {
          firstName,
          lastName,
          userEmail: email,
          userPassword: password,
        });

        console.log('Server Response:', res.data);
        if (res.status === 201 || res.status === 200) {
          alert('Registration successful! A confirmation email has been sent.');
          navigate('/login');  // Redirect to login page after successful registration
        } else {
          alert('Registration failed. Please try again.');
        }
      } catch (err) {
        console.error('Error:', err.response ? err.response.data : err.message);
        alert('Registration failed. Please try again.');
      }
    }
  };


  return (
    <div className="form-container">
      <h1 className="form-title">Register</h1>

      <form id="registrationForm" onSubmit={handleSubmit}>
        <label htmlFor="firstName" className="form-label">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          className="form-input"
          required
          value={firstName}
          onChange={onChange}
        />

        <label htmlFor="lastName" className="form-label">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          className="form-input"
          required
          value={lastName}
          onChange={onChange}
        />

        <label htmlFor="email" className="form-label">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          className="form-input"
          required
          value={email}
          onChange={onChange}
        />

        <label htmlFor="password" className="form-label">New Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          className="form-input"
          required
          value={password}
          onChange={onChange}
        />

        <label htmlFor="confirmPassword" className="form-label">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          className="form-input"
          required
          value={confirmPassword}
          onChange={onChange}
        />

        <button type="submit" className="form-button">Register</button>
        <span className="form-switch-link" onClick={() => navigate('/login')}>Already registered? Log in here</span>
      </form>
    </div>
  );
};
