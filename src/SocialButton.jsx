import React from 'react';

const SocialButton = ({ icon }) => {
  return (
    <button className="social-button">
      <img src={`./assets/${icon}.png`} alt={`${icon} icon`} />
    </button>
  );
};

export default SocialButton;




