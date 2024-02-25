import React from 'react';
import { Link } from 'react-router-dom';


const FirstPage = () => {
  return (
    <div className="firstpage-container">
      <video className="firstpage-video" autoPlay muted loop>
        <source src="/space_-_61580 (Original).mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h1 className="firstpage-title">WELCOME TO DARKSPACE !</h1>
      <p className="firstpage-description">
        Explore a digital realm without boundaries, where you can engage with creative minds from around the globe.
        Dive into captivating conversations, freely share your ideas, and forge authentic connections without compromising your identity.
        Join us for a unique social experience in the depths of the digital space.
      </p>
      <div className="firstpage-button-container">
        <Link to="/register">
          <button className="firstpage-button">Sign Up</button>
        </Link>
        <Link to="/login">
          <button className="firstpage-button">Log In</button>
        </Link>
      </div>
    </div>
  );
};

export default FirstPage;
