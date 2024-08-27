import React, { useState } from 'react';
import './styles.css';

export default function() {
  const [open, setOpen] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const json = JSON.stringify(Object.fromEntries(formData.entries()));

    result.innerHTML = "Please wait...";

    form.reset();
    form.classList.remove("was-validated");
    setTimeout(() => {
      result.style.display = "none";
    }, 5000);
  };

  return (
    <div id="web3forms__widget">
      {open && (
        <div id="w3f__widget--content">
          <div className="widget-header">
            <h3>How can we help?</h3>
            <p>We usually respond in a few hours</p>
          </div>
          <div className="widget-body">
            <form onSubmit={handleSubmit}>
              <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
              <input type="hidden" name="subject" value="New Submission from Web3Forms" />
              <input type="checkbox" name="botcheck" style={{ display: 'none' }} />

              <input
                type="text"
                name="name"
                placeholder="John Doe"
                required
                className="widget-input"
              />
              <input
                type="email"
                name="email"
                placeholder="you@company.com"
                required
                className="widget-input"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                required
                className="widget-input"
              ></textarea>
              <button type="submit" className="widget-button">Send Message</button>
            </form>
          </div>
        </div>
      )}
      <button className="widget-toggle" onClick={() => setOpen(!open)}>
        {open ? (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        )}
      </button>
    </div>
  );
}
