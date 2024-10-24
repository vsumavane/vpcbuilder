import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavBar = ({ isLoggedIn, handleLogout }) => {
  const navLinks = [
    { path: '/build', label: 'Build PC' },
    { path: '/prebuilt-pc', label: 'Load Pre-Saved PC' },
    { path: '/how-to-build', label: 'How to Build' },
    { path: '/about', label: 'About Us' }
  ];

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <h1>VPCBuilder</h1>
        </Link>
      </div>
      <ul className="navbar-links">
        {navLinks.map((link) => (
          <li key={link.path}>
            <Link to={link.path}>{link.label}</Link>
          </li>
        ))}
      </ul>
      <div className="navbar-auth">
        {isLoggedIn ? (
          <button onClick={handleLogout} className="navbar-btn">
            Logout
          </button>
        ) : (
          <>
            <Link to="/login">
              <button className="navbar-btn">Login</button>
            </Link>
            <Link to="/signup">
              <button className="navbar-btn">Sign Up</button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

NavBar.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  handleLogout: PropTypes.func.isRequired
};

export default NavBar;
