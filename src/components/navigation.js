import React from 'react';

export default function Nav() {
  const linkStyle = { padding: '5px 2rem 0px 0px' };

  return (
    <nav className="main-header-menu">
      <section
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
          padding: '0% 0% 6% 0%',
          justifyContent: 'flex-end',
        }}
      >

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
