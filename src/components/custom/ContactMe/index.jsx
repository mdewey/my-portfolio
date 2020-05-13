import React from "react"
import "./style.scss"

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
          <a href="tel:814-421-9298">
            <i className="material-icons">phone</i>
            <span>(814) 421-9298</span>
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
            href="https://resume.markdewey.dev?slim=true"
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
