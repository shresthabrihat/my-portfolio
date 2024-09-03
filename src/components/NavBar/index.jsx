import React from "react";
import "./styles.css";

export default function () {
    const token = localStorage.getItem('token');

    return (
    <>
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item"><a href="/" className="navbar-link">Home</a></li>
                <li className="navbar-item"><a href="/about" className="navbar-link">About</a></li>
                <li className="navbar-item"><a href="/projects" className="navbar-link">Projects</a></li>
                <li className="navbar-item"><a href="/contactus" className="navbar-link">Contact</a></li>
                {token ? (
                    <>
                        <li className="navbar-item"><a href="/dashboard" className="navbar-link">Dashboard</a></li>
                        <li className="navbar-item"><a href="/logout" className="navbar-link" onClick={() => {
                            localStorage.removeItem('token');
                            window.location.href = '/';
                        }}>Logout</a></li>
                    </>
                ) : (
                    <li className="navbar-item"><a href="/login" className="navbar-link"><span className="fa fa-sign-in-alt"></span></a></li>
                )}
            </ul>
        </nav>
    </>
    )
}
