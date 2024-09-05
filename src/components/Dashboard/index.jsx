import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
// import "../../styles/index.css';";

const Dashboard = () => {
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    userEmail: '',
    userAbout: '',
    social: [],
    userProjects: [],
  });
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      setIsAuthenticated(false);
      navigate('/login');
    } else {
      setIsAuthenticated(true);
      fetchUserData(token);
    }
  }, [navigate]);

  const fetchUserData = async (token) => {
    try {
      const res = await axios.get('http://localhost:5000/api/users/me', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUserData(res.data);
    } catch (err) {
      console.error(err);
      alert('Failed to fetch user data');
    }
  };

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.put(`http://localhost:5000/api/profile/${userData._id}`, userData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert('User data updated successfully');
    } catch (err) {
      console.error(err);
      alert('Failed to update user data');
    }
  };

  if (!isAuthenticated) {
    return null; // Render nothing if the user is not authenticated
  }

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">User Dashboard</h1>
      <form className="dashboard-form" onSubmit={handleSubmit}>
        <label className="form-label" htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          className="form-input"
          value={userData.firstName}
          onChange={handleChange}
        />

        <label className="form-label" htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          className="form-input"
          value={userData.lastName}
          onChange={handleChange}
        />

        <label className="form-label" htmlFor="userEmail">Email:</label>
        <input
          type="email"
          id="userEmail"
          name="userEmail"
          className="form-input"
          value={userData.userEmail}
          onChange={handleChange}
          disabled
        />

        <label className="form-label" htmlFor="userAbout">About:</label>
        <textarea
          id="userAbout"
          name="userAbout"
          className="form-input"
          value={userData.userAbout}
          onChange={handleChange}
        />

        <label className="form-label" htmlFor="social">Social Links:</label>
        <input
          type="text"
          id="social"
          name="social"
          className="form-input"
          value={userData.social.join(', ')}
          onChange={(e) => setUserData({ ...userData, social: e.target.value.split(', ') })}
        />

        <label className="form-label" htmlFor="userProjects">Projects:</label>
        <textarea
          id="userProjects"
          name="userProjects"
          className="form-input"
          value={userData.userProjects.join('\n')}
          onChange={(e) => setUserData({ ...userData, userProjects: e.target.value.split('\n') })}
        />

        <button type="submit" className="form-button">Update Information</button>
      </form>
    </div>
  );
};

export default Dashboard;
