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
              <i className="material-icons">info</i>Just looking to contact me?</a>
          </section>

          <section className="current-status-section sub-section">
            <em className="current-status-header">Current Status:</em>
            <div className="current-status-text">Something something motivational.</div>
          </section>

          <section className="projects-section section">
            <header>
              <h2>Recent Projects</h2>
            </header>
            <section className="projects-list">
              <div className="project serverless-demo">
                <div>
                  <a href="#">Serverless Demo</a>
                </div>
              </div>
              <div className="project student-list">
                <div>
                  <a href="#">Tampa Bay Demo Day</a>
                </div>
              </div>
              <div className="project pathfinder">
                <div>
                  <a href="#">PathfinderTools</a>
                </div>
              </div>
              <div className="project trainable-bot">
                <div>
                  <a href="#">Trainable Bot</a>
                </div>
              </div>
            </section>
            <footer>
              <a
                href="https://www.github.com/mdewey"
                target="_blank"
                rel="noopener noreferrer">
                <nav>
                  <i className="devicon-github-plain colored"></i>
                  view all projects github
                </nav>
              </a>
            </footer>
          </section>

          <section className="section core-values">
            <header>
              <h2>Core Values</h2>
            </header>
            <h4>Theses are the princples that I bring to my every day life, in and outside
              of work.</h4>
            <ul>
              <li>Always be learning.</li>
              <li>Design before you build.</li>
              <li>Improvise. Adapt. Overcome.</li>
              <li>Organize the Choas.</li>
            </ul>
          </section>

          <section className="section">
            <header>
              <h2>Currently Working In</h2>
            </header>
            <section className="current-skills-list">
              <section className="current-skill dot-net">
              <i class="devicon-dot-net-plain colored"></i>
              </section>
              <section className="current-skill node-js">
                <i class="devicon-nodejs-plain colored"></i>
              </section>
              <section className="current-skill">
                <i class="devicon-react-original colored"></i>
              </section>
              <section className="current-skill">
              <i class="devicon-amazonwebservices-plain-wordmark colored"></i>
              </section>
            </section>
            <footer>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://mdewey.github.io/resume/">
                <i className="material-icons">book</i>view full resume</a>
            </footer>
          </section>

          <section className="section">
            <header>
              <h2>My Buzzwords</h2>
            </header>
            <section className="word-cloud">
              <span>C#</span>
              <span>NodeJS</span>
              <span>Python</span>
              <span>CSS</span>
              <span>HTML</span>
              <span>Java</span>
              <span>Ruby</span>
              <span>Go</span>
              <span>VB</span>
              <span>SQL</span>
              <span>Neo4j</span>
              <span>.NET Framework</span>
              <span>.NET Core</span>
              <span>.NET Web API</span>
              <span>Entity Framework</span>
              <span>Express.js</span>
              <span>Docker</span>
              <span>Jade</span>
              <span>Handlebars</span>
              <span>AngularJS</span>
              <span>React</span>
              <span>VueJS</span>
              <span>Knockout.js</span>
              <span>Mongoose</span>
              <span>Bootstrap</span>
              <span>Foundation</span>
              <span>Social Media APIs</span>
              <span>Google Apps</span>
              <span>SASS & LESS</span>
              <span>NUnit</span>
              <span>Jasmine</span>
              <span>Custom Chrome Extensions</span>
              <span>Functional Programming</span>
              <span>Object Oriented Programming</span>
              <span>RESTful APIs</span>
              <span>Mobile First Design</span>
              <span>API First Design</span>
              <span>Function First Design</span>
              <span>Test Driven Development</span>
              <span>Requirement Driven Development</span>
              <span>Agile & agile</span>
              <span>Design Thinking</span>
              <span>Relational Databases</span>
              <span>NoSQL Databases</span>
              <span>Single Page Apps</span>
              <span>Dependency Injection</span>
              <span>BIg Data</span>
              <span>Cloud Computing</span>
              <span>Source Control</span>
              <span>Continuous Integration</span>
              <span>Design Patterns</span>
              <span>Disciplined Entrepreneurship</span>
              <span>Visual Studio (Code & 2017)</span>
              <span>Atom</span>
              <span>Powershell & Terminal</span>
              <span>Webpack</span>
              <span>Gulp</span>
              <span>Yarn</span>
              <span>Slack</span>
              <span>Jira/Trello/Asana</span>
              <span>Git</span>
              <span>Github/Bitbucket</span>
              <span>Vim</span>
              <span>MS SQL</span>
              <span>PostgreSQL</span>
              <span>MySQL</span>
              <span>MongoDb</span>
              <span>CouchDb</span>
              <span>Oracle</span>
              <span>Azure</span>
              <span>AWS</span>
              <span>DocumentDb</span>
              <span>Rackspace</span>
              <span>Go Daddy</span>
              <span>Zeit</span>
              <span>Surge</span>
              <span>Docker</span>
              <span>AI</span>
              <span>Data Structures</span>

            </section>
            <footer>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://mdewey.github.io/resume/">
                <i className="material-icons">book</i>view full resume</a>
            </footer>
          </section>

          <section className="section">
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
          </section>

          <section id="contact" className="section contact-me">
            <header>
              <h2>Find me!</h2>
            </header>
            <ul>
              <li>
                <a href="mailto:mark.t.dewey@gmail.com">
                  <i class="material-icons">email</i>mark.t.dewey@gmail.com</a>
              </li>
              <li>
                <a href="tel:4123862294">
                  <i class="material-icons">phone</i>(412) 368-2294</a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/mark-dewey-ba78bb3a"
                  target="_blank"
                  rel="noopener noreferrer">
                  <i class="fab fa-linkedin-in"></i>Linkedin</a>
              </li>
              <li>
                <a
                  href="https://twitter.com/juggler2009"
                  target="_blank"
                  rel="noopener noreferrer">
                  <i class="fab fa-twitter"></i>@juggler2009</a>
              </li>
              <li>
                <a
                  href="slack://user?team=T03QUJQ7L&id=U09LRHQQ3"
                  target="_blank"
                  rel="noopener noreferrer">
                  <i class="fab fa-slack"></i>@dewseph</a>
              </li>
              <li>
                <a
                  href="https://mdewey.github.io/resume/"
                  target="_blank"
                  rel="noopener noreferrer">
                  <i className="material-icons">book</i>full resume</a>
              </li>
            </ul>
          </section>

        </section>
      </div>
    );
  }
}

export default App;
