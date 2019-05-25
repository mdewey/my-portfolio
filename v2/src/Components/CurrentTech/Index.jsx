import React from 'react'
import './style.scss'

export default function CurrentTech() {
  return (
    <section className="section">
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
          target="_blank"
          rel="noopener noreferrer"
          href="https://mdewey.github.io/resume/"
        >
          view full resume
        </a>
      </footer>
    </section>
  )
}
