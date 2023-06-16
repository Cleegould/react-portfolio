import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {currentPage === 'Home' && <Home />}
    </div>
  );
}
