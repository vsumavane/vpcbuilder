import './App.css';
import React, { useState } from 'react';

function App() {
  const [showPopup, setShowPopup] = useState(true); // Manage the pop-up state
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Manage login state

  const togglePopup = () => setShowPopup(!showPopup);
  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <div className="App">
      <header>
        <h1>Home Page</h1>
      </header>

      {/* Pop-up with info about the website */}
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h2>Welcome to Our Website!</h2>
            <p>Here you can build a custom PC or load a pre-saved one.</p>
            <button onClick={togglePopup}>Close</button>
          </div>
        </div>
      )}

      {/* Main section with buttons */}
      <div className="main-section">
        <button onClick={() => alert('Redirecting to Build new PC')}>
          Build new PC
        </button>
        <button onClick={() => alert('Opening Pre-built saved PC')}>
          Open PreBuild saved PC
        </button>
      </div>

      {/* Menu Section */}
      <nav className="menu-section">
        <ul>
          {!isLoggedIn ? (
            <>
              <li>
                <button onClick={handleLogin}>Login / Sign Up</button>
              </li>
            </>
          ) : (
            <>
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            </>
          )}
          <li>
            <button onClick={() => alert('Redirecting to Build PC')}>
              Build PC
            </button>
          </li>
          <li>
            <button onClick={() => alert('Loading PreSaved PC')}>
              Load PreSaved PC
            </button>
          </li>
          <li>
            <button onClick={() => alert('Redirecting to How to Build')}>
              How to Build
            </button>
          </li>
          <li>
            <button onClick={() => alert('Redirecting to About Us')}>
              About Us
            </button>
          </li>
        </ul>
      </nav>

      {/* Add some styling */}
      <style jsx>{}</style>
    </div>
  );
}


export default App;
