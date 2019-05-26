// packages
import React, { Component } from 'react'
// components css
import './index.scss'
import MyWordCloud from './Components/MyWordCloud'
import Status from '../../v2/src/Components/CurrentStatus/RandomStatus'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <section className="hero" />
        </header>
        <section className="body">
          <header>
            <section className="title-block">
              <div className="face-pic" />
              <div>
                <h2>Mark Dewey</h2>
              </div>
            </section>
            <h4>- Developer - Instructor - Explorer -</h4>
          </header>
          <section className="contact-info sub-section">
            <a href="#contact" className="contact-button">
              Just looking to contact me?
            </a>
          </section>

          <section className="projects-section section">
            <header>
              <h2>Recent Projects</h2>
            </header>
            <section className="projects-list">
              <div className="project serverless-demo">
                <div>
                  <a
                    href="https://github.com/mdewey/serverless-demo"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Serverless Demo
                  </a>
                </div>
              </div>
              <div className="project student-list">
                <div>
                  <a
                    href="https://github.com/mdewey/student-list"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Tampa Bay Demo Day
                  </a>
                </div>
              </div>
              <div className="project pathfinder">
                <div>
                  <a
                    href="https://github.com/mdewey/license-plate-game"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Family License Plate Game
                  </a>
                </div>
              </div>
              <div className="project trainable-bot">
                <div>
                  <a
                    href="https://github.com/mdewey/TrainableBot"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Trainable Bot
                  </a>
                </div>
              </div>
            </section>
            <footer />
          </section>

          <section className="section">
            <header>
              <h2>Currently Working In</h2>
            </header>
            <section className="current-skills-list">
              <section className="current-skill dot-net">
                <i className="devicon-dot-net-plain-wordmark colored" />
              </section>

              <section className="current-skill dot-net">
                <i className="devicon-vuejs-plain-wordmark colored" />
              </section>

              <section className="current-skill node-js">
                <i className="devicon-nodejs-plain colored" />
              </section>
              <section className="current-skill">
                <i className="devicon-react-original-wordmark colored" />
              </section>
              <section className="current-skill">
                <i className="devicon-sass-original colored" />
              </section>

              <section className="current-skill">
                <i className="devicon-amazonwebservices-plain-wordmark colored" />
              </section>
            </section>
            <footer>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://mdewey.github.io/resume/"
              >
                view full resume
              </a>
            </footer>
          </section>

          <section className="section">
            <header>
              <h2>My Buzzwords</h2>
            </header>
            <section className="word-cloud" id="wordCloud">
              <MyWordCloud />
            </section>
          </section>

          {/* <section className="section">
            <header>
              <h2>Current Hobbies</h2>
            </header>
            <h4>I believe in good, healthy work-life balance. While not behind a keyboard I
              enjoy the outdoors as much as possible. My current hobbies include:</h4>
            <ul>
              <li>Fitness</li>
              <li>Learning Music</li>
              <li>Ultimate Frisbee</li>
              <li>Juggling</li>
              <li>Video &amp; Table top Gaming</li>
            </ul>
          </section> */}
        </section>
      </div>
    )
  }
}

export default App
