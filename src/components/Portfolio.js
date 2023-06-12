import React from 'react';
import cucumber from "./cucumber.png"
import lyrics from "./lyrics.png"
import hozho from "./hozho.png"
import fpo from "./fpo-screenshot.png"

const Portfolio = () => {
  return (
    <div>
      <div>
        <h2 className="left-rail">Portfolio</h2>
      </div>

      <div className="card-box">
        <div className="card-box-item">
          <h3>Hózhó Weaving Network</h3>
          <h3><small>MERN</small></h3>
          <p><a href="https://github.com/Shelcisco/Hozho-Weaving-Network" target='blank'>View repo</a> | <a

            href="https://hozho-weaving-network.herokuapp.com/" target='blank'>View Heroku deployment</a></p>

          <a href="https://hozho-weaving-network.herokuapp.com/" target='blank'>
            <div><img src={hozho} alt="Hózhó Weaving Network screenshot" /></div>
          </a>

        </div>
        <div className="card-box-item">
          <h3>Cucumber or Pickle</h3>
          <h3><small>RESTful API</small></h3>
          <p><a href="https://github.com/anryl050/cucumber-or-pickle" target='blank'>View repo</a> | <a

            href="https://cucumber-or-pickle.herokuapp.com/" target='blank'>View Heroku deployment</a></p>

          <a href="https://cucumber-or-pickle.herokuapp.com/" target='blank'>
            <div><img src={cucumber} alt="Cucumber screenshot" /></div>
          </a>

        </div>
        <div className="card-box-item">

          <h3>Lyrics Legend</h3>
          <h3><small>Server-side API</small></h3>
          <p><a href="https://github.com/whitneywishart/project-one-lyrics-legend" target='blank'>View repo</a> | <a href="https://whitneywishart.github.io/project-one-lyrics-legend/" target='blank'>View GitHub deployment</a></p>
          <a href="https://whitneywishart.github.io/project-one-lyrics-legend/" target='blank'>
            <div><img src={lyrics} alt="Lyrics Legend screenshot" /></div>
          </a>

        </div>

        <div className="card-box-item">
          <a href="/" target='blank'>
            <h3>Application three</h3>
            <p>In development</p>
            <div><img src={fpo} alt="Application placeholder" /></div>
          </a>
        </div>
        <div className="card-box-item">
          <a href="/" target='blank'>
            <h3>Application four</h3>
            <p>In development</p>
            <div><img src={fpo} alt="Application placeholder" /></div>
          </a>
        </div>
      </div>
    </div >


  )
}

export default Portfolio