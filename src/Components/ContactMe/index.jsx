import React from 'react'
import './style.scss'

export default function ContactMe() {
  return (
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
            href="https://www.linkedin.com/in/mark-dewey"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin-in" />
            <span>Linkedin</span>
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
  )
}
