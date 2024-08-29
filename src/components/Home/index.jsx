import React from 'react';
import './styles.css';
import Gallery from '../Gallery';
import Buttons from '../Buttons';

export default () => {
  return (
    <>
      <h1 className="homePageTitle">Welcome to My Portfolio</h1>
      <Gallery />
      <Buttons />
      <h1 className="homePageTitle">Innovating with Technology</h1>
      <div className="text-block">
        <p>
          Hello! I’m Brihat, a passionate and driven student in the field of Coding. 
          I enjoy tackling challenging projects and continuously learning to enhance my skills. My portfolio showcases a selection of my work, 
          demonstrating my commitment to excellence and innovation. I am always excited to connect with like-minded individuals and explore new opportunities. 
          
          Thank you for visiting my portfolio!
        </p>
      </div>
      <div className="image-container">
        <div className="image-item">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1y7BZHLZc1dS-Or1cPIpd8Z7CHZ_ErEnpSw&s"
            alt="Dog"
            className="circular-image"
          />
          <p className="description">Dog wearing shades</p>
        </div>
        <div className="image-item">
          <img
            src="https://i.pinimg.com/originals/39/7e/3a/397e3a62c31ad801b603783fee8b6e16.png"
            alt="Cat"
            className="circular-image"
          />
          <p className="description">Cat wearing shades</p>
        </div>
        <div className="image-item">
          <img
            src="https://img.freepik.com/premium-photo/macro-image-small-hamster-donning-sunglasses_1060272-2394.jpg"
            alt="Hamster"
            className="circular-image"
          />
          <p className="description">Hamster wearing shades</p>
        </div>
      </div>
    </>
  );
};
