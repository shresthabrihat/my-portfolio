import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import Chatbox from './components/Chatbox';
import ContactUs from './components/ContactUs';
import Projects from './components/Projects';
import About from './components/About';

function App() {

  return (
    <>
    <Router>
      <NavBar/>
      <Chatbox/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/register" />} />
        <Route path="/contactus" element={<ContactUs to="/contuctus" />} />
        <Route path="/projects" element={<Projects to="/projects" />} />
        <Route path="/about" element={<About to="/about" />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
