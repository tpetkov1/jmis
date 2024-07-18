// Layout.js
import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Logo from './assets/jmislogo.png'

function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const w3_open = () => setSidebarOpen(true);
  const w3_close = () => setSidebarOpen(false);

  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? 'bold' : 'normal',
      backgroundColor: isActive ? '#ddd' : 'transparent',
    };
  };

  return (
    <>
      <div 
        className={`w3-sidebar w3-bar-block w3-card ${sidebarOpen ? 'w3-show' : 'w3-hide'}`}
        style={{width: '200px'}} 
        id="mySidebar"
      >
        <button className="w3-bar-item w3-button w3-large" onClick={w3_close}>
          Close &times;
        </button>
        <NavLink to="/" className="w3-bar-item w3-button" style={navLinkStyles} end>Home</NavLink>
        <NavLink to="/about" className="w3-bar-item w3-button" style={navLinkStyles}>About Us</NavLink>
        <NavLink to="/contact" className="w3-bar-item w3-button" style={navLinkStyles}>Contact Us</NavLink>
        <NavLink to="/journal" className="w3-bar-item w3-button" style={navLinkStyles}>Digital Journal</NavLink>
      </div>

      <div className="w3-main" style={{marginLeft: sidebarOpen ? '200px' : '0'}}>
        <div className="w3-light-gray" style={{display: 'flex', alignItems: 'center', padding: '2px'}}>
          <button className="w3-button w3-large w3-light-gray" onClick={w3_open}>&#9776;</button>
          <div style={{flex: 1, textAlign: 'center'}}>
            <img src={Logo} style={{width: "100px"}} alt="JMIS Logo" />
          </div>
        </div>

        <div className="w3-container">
          <Outlet />
        </div>
        <footer className="w3-container w3-light-gray" style={{padding: '16px', marginTop: '20px'}}>
          <p>&copy; 2024 Journal for Modern Imperialist Studies. All rights reserved.</p>
          <div>
            <NavLink to="/privacy" className="w3-button" style={navLinkStyles}>Privacy Policy</NavLink>
            <NavLink to="/terms" className="w3-button" style={navLinkStyles}>Terms of Service</NavLink>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Layout;