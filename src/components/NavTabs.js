import React from 'react';

function NavTabs({ currentPage, handlePageChange }) {
  const scrollToSection = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="navigation">
      <button
        onClick={() => scrollToSection('home')}
        className={currentPage === 'Home' ? 'active' : ''}
      >
        Home
      </button>
      <button
        onClick={() => scrollToSection('about')}
        className={currentPage === 'About' ? 'active' : ''}
      >
        About
      </button>
      <button
        onClick={() => scrollToSection('projects')}
        className={currentPage === 'Projects' ? 'active' : ''}
      >
        Projects
      </button>
      <button
        onClick={() => scrollToSection('contact')}
        className={currentPage === 'Contact' ? 'active' : ''}
      >
        Contact
      </button>
    </div>
  );
}

export default NavTabs;
