import React from 'react';

function Header() {
  const headerStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    backgroundColor: '#f2f2f2',
    zIndex: 999,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px 0',
    fontFamily: 'Arial, sans-serif',
  };

  const titleStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333333',
    margin: 0,
  };

  const navStyle = {
    display: 'flex',
    listStyleType: 'none',
    margin: 0,
    padding: 0,
  };

  const linkStyle = {
    margin: '0 10px', // Adjust the spacing between the links
  };

  return (
    <>
      <header style={headerStyle}>
        <h1 style={titleStyle}>Chris' Portfolio Page</h1>
        <nav>
          <ul style={navStyle}>
            <li><a href="#home" style={linkStyle}>Home</a></li>
            <li><a href="#about" style={linkStyle}>About</a></li>
            <li><a href="#projects" style={linkStyle}>Projects</a></li>
            <li><a href="#contact" style={linkStyle}>Contact</a></li>
          </ul>
        </nav>
      </header>
      <div>
        {/* Your page content goes here */}
      </div>
    </>
  );
}

export default Header;
