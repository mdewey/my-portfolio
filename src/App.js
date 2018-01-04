// packages
import React, {Component} from 'react';
// components css
import './index.scss';

// images

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <section className="hero"></section>
        </header>
        <section className="body">
          <header>
            <section className="title-block">
              <div className="face-pic"></div>
              <h2>Mark Dewey</h2>
            </section>
            <h4>- Developer - Instructor - Explorer -</h4>
          </header>
          <section className="contact-info sub-section">
            <a href="#contact" className="contact-button">
              <i class="material-icons">info</i>Just looking to contact me?</a>
          </section>

          <section className="current-status-section sub-section">
            <em className="current-status-header">Current Status:</em>
            <div className="current-status-text">Leaving my comfort zone.</div>
          </section>

          <section className="projects-section section">
            <header>
              <h2>Current Notable Projects</h2>
            </header>
            <section className="projects-list">
              <div className="project st-pete-lease">
                 <div><a href="#">St Pete.Lease</a></div>
              </div>
              <div className="project student-list"><div><a href="#">Tampa Bay Demo Day</a></div></div>
              <div className="project pathfinder"><div><a href="#">PathfinderTools</a></div></div>
              <div className="project trainable-bot"><div><a href="#">Trainable Bot</a></div></div>
            </section>
            <footer>
              <a
                href="https://www.github.com/mdewey"
                target="_blank"
                rel="noopener noreferrer">
                <nav>
                  <i class="devicon-github-plain colored"></i>
                  view github
                </nav>
              </a>
            </footer>
          </section>

          <section className="section">
            <h2>Core Values</h2>
            <ul>
              <li>Education</li>
              <li>Design</li>
              <li>Adaptation</li>
              <li>Organization</li>
            </ul>
          </section>

          <section className="section">
            <header>Top Skills</header>
            <section className="skills-list">
              <section className="sub-section">languages</section>
              <section className="sub-section">Frameworks</section>
              <section className="sub-section">concepts</section>
            </section>
            <footer>
              view full list of skills on my
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://mdewey.github.io/resume/">resume</a>
            </footer>
          </section>

          <section className="section">
            <h2>Current Hobbies</h2>
            <ul>
              <li>Ultimate Frisbee</li>
              <li>Learning Music</li>
              <li>Juggling</li>
              <li>Fitness</li>
              <li>Video &amp; Table top Gaming</li>
            </ul>
          </section>

          <section id="contact" className="section">
            <h2>Contact</h2>
            <ul>
              <li>Email</li>
              <li>Phone</li>
              <li>Linkedin</li>
              <li>Twitter</li>
              <li>Slack</li>
              <li>Full resume</li>
            </ul>
          </section>

        </section>
      </div>
    );
  }
}

export default App;
