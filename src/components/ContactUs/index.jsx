import React from 'react'
import "../../styles/index.css"
import "./styles.css"

export default () => {
  return (
    <>
        
        <div className="contact-container">
          <h1 className="homePageTitle"> Contact US </h1>

          <div className="contact-content">
            <div className="contact-image">
              <img src="/img/1.jpg" alt="Contact Us" className="contact-img" />
            </div>
            <div className="contact-text">
              <p>
                If you have any questions, feel free to reach out to us. We are here
                to help you with any inquiries or concerns you may have. Our team
                is dedicated to providing the best service possible.
              </p>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Name:</label>
                <input type="text" id="name" name="name" className="form-input" required />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Email:</label>
                <input type="email" id="email" name="email" className="form-input" required />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Message:</label>
                <textarea id="message" name="message" className="form-input" rows="4" required></textarea>
              </div>

              <div className="form-group">
                <label htmlFor="file" className="form-label">Attach a file:</label>
                <input type="file" id="file" name="file" className="form-input" />
              </div>

              <button type="submit" className="form-button">Send Message</button>
            </form>
          </div>
        </div>
    </>
  )
}
