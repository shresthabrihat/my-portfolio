import React from "react";
import "./styles.css"

export default function () {
    return (
    <>
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item"><a href="/" className="navbar-link">Home</a></li>
                <li className="navbar-item"><a href="/about" className="navbar-link">About</a></li>
                <li className="navbar-item"><a href="/projects" className="navbar-link">Projects</a></li>
                <li className="navbar-item"><a href="/contactus" className="navbar-link">Contact</a></li>
                <li className="navbar-item"><a href="/register" className="navbar-link"><span className="fa fa-sign-in-alt"></span></a></li>
            </ul>
        </nav>
  
    </>
    )
}