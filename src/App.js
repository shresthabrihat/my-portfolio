import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// Components
import NavBar from './components/NavBar';
import Home from './components/Home';
import Register from './components/Auth/Register';
import ResetPassword from './components/Auth/ResetPassword';
import Login from './components/Auth/Login';
import Chatbox from './components/Chatbox';
import ContactUs from './components/ContactUs';
import Projects from './components/Projects';
import About from './components/About';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard'; // Import the Dashboard component
import PrivateRoute from './components/Auth/PrivateRoute'; // Import the PrivateRoute component

function App() {
  return (
    <>
    <Router>
      <NavBar />
      <Chatbox />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<PrivateRoute element={Dashboard} />} /> {/* Protected Dashboard route */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </Router>
    </>
  );
}

export default App;
