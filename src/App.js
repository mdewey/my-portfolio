// packages
import React, { Component } from 'react';
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
            <a href="#contact" className="contact-button"><i class="material-icons">info</i>Just looking to contact me?</a>
          </section>

          <section className="current-status-section sub-section">
            <em className="current-status-header">Current Status:</em>
            <div className="current-status-text">Rising and Grinding </div>
          </section>

          <section className="projects-section section">
            <h2>Current Notable Projects</h2>
            <h4>view all on <i class="devicon-github-plain-wordmark colored"></i></h4>
            <section className="projects-list">
              <div className="project">St Pete.Lease</div>
              <div className="project">student-list</div>
              <div className="project">PathfinderTools</div>
              <div className="project">Trainable Bot</div>
            </section>
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
              view full list of skills on my <a target="_blank" rel="noopener noreferrer" href="https://mdewey.github.io/resume/">resume</a>
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
