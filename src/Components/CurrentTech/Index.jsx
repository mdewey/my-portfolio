import React from 'react'
import './style.scss'

export default function CurrentTech() {
  return (
    <section className="section" id="currently-working">
      <header>
        <h2>Currently Working In</h2>
      </header>
      <section className="current-skills-list">
        <section className="current-skill dot-net">
          <i className="devicon-dot-net-plain-wordmark white" />
        </section>

        <section className="current-skill dot-net">
          <i className="devicon-vuejs-plain-wordmark white" />
        </section>

        <section className="current-skill node-js">
          <i className="devicon-nodejs-plain white" />
        </section>
        <section className="current-skill">
          <i className="devicon-react-original-wordmark white" />
        </section>
        <section className="current-skill">
          <i className="devicon-sass-original white" />
        </section>

        <section className="current-skill">
          <i className="devicon-amazonwebservices-plain-wordmark white" />
        </section>
      </section>
      <footer>
        <a
          href="https://www.github.com/mdewey"
          target="_blank"
          className="github-link"
          rel="noopener noreferrer"
        >
          <nav>view all projects on github</nav>
        </a>
      </footer>
    </section>
  )
}
