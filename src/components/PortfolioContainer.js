import React, { useState } from 'react';
import Home from './pages/Home';
import Header from './pages/Header';
import Footer from './pages/Footer';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {currentPage === 'Home' && <Home />}
      <Footer />
    </div>
  );
}
