import React from 'react';

const About = () => {
  return (
    <div>
      <h2 className='left-rail'>About</h2>
      <div className='about' style={{ display: 'flex', flexDirection: 'row' }}>
        <div className="photo">
          <img src="/wishart.png" alt="Whitney Wishart" />
        </div>
        <p>
          Pacific northwest native, full-stack web developer and enterprise-level digital content generalist.
        </p>
      </div>
    </div>
  );
}

export default About;
