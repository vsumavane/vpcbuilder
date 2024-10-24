import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Popup({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="popup">
      <div className="popup-content">
        <h2>About VPCBuilder</h2>
        <p>
          VPCBuilder is a PC configuration tool that lets you build your own custom PC, get detailed performance stats for selected parts, and find the best deals online.
          Whether you're a gamer, developer, or a general user, we have the perfect build for you.
        </p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

Popup.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

function Home() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="home container">
      <h1>Welcome to VPCBuilder</h1>
      <p>
        Your one-stop solution to build and customize your perfect PC with ease. Get performance stats, recommendations, and the best price deals for your parts.
      </p>

      <button onClick={handleOpenPopup}>More Info About VPCBuilder</button>

      <Popup isOpen={isPopupOpen} onClose={handleClosePopup} />

      <div className="home-buttons">
        <Link to="/build">
          <button>Build New PC</button>
        </Link>
        <Link to="/load">
          <button>Open Pre-Built/Saved PC</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
