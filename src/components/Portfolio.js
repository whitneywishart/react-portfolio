import React from 'react';

const Portfolio = () => {
  return (
    <div>
      <div>
        <h2 className="left-rail">Portfolio</h2>
      </div>
      <div className="card-box">
        <div className="card-box-item">
          <h3>Cucumber or Pickle</h3>
          <h3><small>RESTful API</small></h3>
          <p><a href="https://github.com/anryl050/cucumber-or-pickle" target='blank'>View repo</a> | <a

            href="https://cucumber-or-pickle.herokuapp.com/" target='blank'>View Heroku deployment</a></p>

          <a href="https://cucumber-or-pickle.herokuapp.com/" target='blank'>
            <div><img src='../../public/cucumber.png' alt='Screenshot' /></div>
          </a>

        </div>
        <div className="card-box-item">

          <h3>Lyrics Legend</h3>
          <h3><small>Server-side API</small></h3>
          <p><a href="https://github.com/whitneywishart/project-one-lyrics-legend" target='blank'>View repo</a> | <a href="https://whitneywishart.github.io/project-one-lyrics-legend/" target='blank'>View GitHub deployment</a></p>
          <a href="https://whitneywishart.github.io/project-one-lyrics-legend/" target='blank'>
            <div><img src="../../public/lyrics.png" alt='Screenshot' /></div>
          </a>

        </div>

        <div className="card-box-item">
          <a href="/" target='blank'>
            <h3>Application three</h3>
            <p>In development</p>
            <div><img src="../../public/fpo-screenshot.png" alt="Application placeholder" /></div>
          </a>
        </div>
        <div className="card-box-item">
          <a href="/" target='blank'>
            <h3>Application four</h3>
            <p>In development</p>
            <div><img src="../../public/fpo-screenshot.png" alt="Application placeholder" /></div>
          </a>
        </div>
        <div className="card-box-item">
          <a href="/" target='blank'>
            <h3>Application five</h3>
            <p>In development</p>
            <div><img src="../../public/fpo-screenshot.png" alt="Application placeholder" /></div>
          </a>
        </div>
        <div className="card-box-item">
          <a href="/" target='blank'>
            <h3>Application six</h3>
            <p>In development</p>
            <div><img src="../../public/fpo-screenshot.png" alt="Application placeholder" /></div>
          </a>
        </div>
      </div>
    </div >


  )
}

export default Portfolio