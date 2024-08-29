import React from 'react';
import './styles.css'; // Import the CSS file for styling

const About = () => {
  return (
    <div className="about-container">
      <div className="image-section">
        <img
          src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-169994-674010.jpg&fm=jpg" // Replace with your image URL
          alt="About"
          className="about-image"
        />
      </div>
      <div className="text-container">
        <div className="article-section">
          <h1 className="common-title">About Me</h1>
          <article className="article-content">
            <p>
              Hello! I’m Brihat Shrestha, and I’m passionate about Coding. As a determined student, I am an enthusiastic learner who is always trying to learn new skills in development.
            </p>
            <p>
              I’ve worked on a variety of school projects, and my approach to learning Coding is centered around practice and a repetitive trial-and-error process.
            </p>
            <p>
              When I’m not working, I enjoy reading books and listening to music to increase my concentration. Feel free to connect with me on Instagram or LinkedIn.
            </p>
          </article>
        </div>
        <div className="bottom-text">
          <p>
            Thank you for visiting my page! If you have any questions or would like to collaborate, please reach out.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
