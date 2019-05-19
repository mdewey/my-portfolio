// packages
import React, { Component } from 'react'
// components css
import './index.scss'
import MyWordCloud from './Components/MyWordCloud'
import Status from './Components/RandomStatus'

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

          <section className="current-status-section sub-section">
            <em className="current-status-header">Current Status:</em>
            <div className="current-status-text">
              <Status />
            </div>
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
            <footer>
              <a
                href="https://www.github.com/mdewey"
                target="_blank"
                rel="noopener noreferrer"
              >
                <nav>view all projects on github</nav>
              </a>
            </footer>
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

          <section id="contact" className="section contact-me">
            <header>
              <h2>Interested? Let's Chat!</h2>
            </header>
            <ul>
              <li>
                <a href="mailto:mark.t.dewey@gmail.com">
                  <i className="material-icons">email</i>
                  <span>mark.t.dewey@gmail.com</span>
                </a>
              </li>
              <li>
                <a href="tel:4123862294">
                  <i className="material-icons">phone</i>
                  <span>(412) 368-2294</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/mark-dewey-ba78bb3a"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin-in" />
                  <span>Linkedin</span>
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/juggler2009"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-twitter" />
                  <span>@juggler2009</span>
                </a>
              </li>
              <li>
                <a
                  href="slack://user?team=T03QUJQ7L&id=U09LRHQQ3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-slack" />
                  <span>@dewseph</span>
                </a>
              </li>
              <li>
                <a
                  href="https://mdewey.github.io/resume/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="material-icons">book</i>
                  <span className="uppercase">full resume</span>
                </a>
              </li>
            </ul>
          </section>
        </section>
      </div>
    )
  }
}

export default App
