import React from 'react';

export default function Nav() {
  const linkStyle = { border: '1px black', padding: '5px' };

  return (
    <nav className="main-header-menu">
      <section
        style={{
          display: 'flex',
          fontFamily: 'helvetica',
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
        }}
      >
        <div>
          <p>Hello friends.</p>
          <div className='name-h1'>Whitney</div>
          <div className='name-h2'>Wishart</div>
        </div>
        <div style={linkStyle}>
          <a href="#">About me</a>
        </div>
        <div style={linkStyle}>
          <a href="#">Portfolio</a>
        </div>
        <div style={linkStyle}>
          <a href="#">Contact</a>
        </div>
        <div style={linkStyle}>
          <a href="#">Resume</a>
        </div>
      </section>
    </nav>
  );
}
