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
            <h4>Software Engineer &amp; Instructor</h4>
          </header>

          <section className="contact-info sub-section">
           Just looking to contact me?<br/>
           <a href="mailto:mark.t.dewey@gmail.com" class="btn">mark.t.dewey@gmail.com</a>
          </section>

          <section className="section">
            <h2>About me</h2>
            <p>
              some text goes here.........
            </p>
          </section>

          <section className="section">
            <h2>Mission</h2>
            <p>
              some text goes here.........
            </p>
          </section>

          <section className="section">
            <h2>Skills</h2>
            <p>
              some text goes here.........
            </p>
          </section>

          <section className="section">
            <h2>Interests</h2>
            <p>
              some text goes here.........
            </p>
          </section>

          <section className="section">
            <h2>Contact</h2>
            <p>
              some text goes here.........
            </p>
          </section>

        </section>
      </div>
    );
  }
}

export default App;
