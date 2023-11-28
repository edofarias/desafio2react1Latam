// src/SocialButton.jsx
import React from 'react';
import linkedinIcon from './assets/linkedin.png';
import twitterIcon from './assets/twitter.png';
import githubIcon from './assets/github.png';

const SocialButton = ({ icon }) => {
  return (
    <button className="social-button">
      <img src={`./assets/${icon}.png`} alt={`${icon} icon`} />
    </button>
  );
};

export default SocialButton;



