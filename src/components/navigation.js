import React from 'react';

const Navigation = ({ currentPage, handlePageChange }) => {
  return (
    <nav>
      <div className="navigation-buttons">
        <button
          onClick={() => handlePageChange('AboutMe')}
          className={currentPage === 'AboutMe' ? 'active' : ''}
        >
          About
        </button>
        <button
          onClick={() => handlePageChange('Portfolio')}
          className={currentPage === 'Portfolio' ? 'active' : ''}
        >
          Portfolio
        </button>
        <button
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'active' : ''}
        >
          Contact
        </button>
        <button
          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'active' : ''}
        >
          Resume
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
