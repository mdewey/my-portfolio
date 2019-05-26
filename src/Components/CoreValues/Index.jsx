import React from 'react'
import './style.scss'
export default function CoreValues() {
  return (
    <>
      <section className="section core-values" id="core-values">
        <header>
          <h2>Core Values</h2>
          <h4>
            Theses are the principles that I bring to my every day life, in and
            outside of work.
          </h4>
        </header>
        <ul>
          <li className="list-item mobile-highlight">
            <i className="material-icons fa-rotate-180">wb_incandescent</i>
            <span>Always be learning.</span>
          </li>
          <li className="list-item desktop-highlight">
            <i className="material-icons">rate_review</i>
            <span>Design before you build.</span>
          </li>
          <li className="list-item desktop-highlight mobile-highlight">
            <i className="material-icons">sync</i>
            <span>Improvise. Adapt. Overcome.</span>
          </li>
          <li className="list-item">
            <i className="material-icons">all_inclusive</i>
            <span>Organize the chaos.</span>
          </li>
        </ul>
      </section>
    </>
  )
}
