import React from 'react';

function Header() {
  return (
    <header>
      <nav>
        <ul style={{ display: 'flex', listStyleType: 'none', justifyContent: 'space-around' }}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;