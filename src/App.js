import React, { useState } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  const [currentPage, setCurrentPage] = useState('AboutMe');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'AboutMe':
        return <AboutMe />;
      case 'Portfolio':
        return <Portfolio />;
      case 'Contact':
        return <Contact />;
      default:
        return <AboutMe />;
    }
  };

  return (
    <div>
      <button onClick={() => handlePageChange('AboutMe')}>About me</button>
      <button onClick={() => handlePageChange('Portfolio')}>Portfolio</button>
      <button onClick={() => handlePageChange('Contact')}>Contact</button>
      {renderPage()}
    </div>
  );
};

export default App;