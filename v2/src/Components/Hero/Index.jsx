import React from 'react'
import './style.scss'
import { animateScroll as scroll } from 'react-scroll'

export default function Hero() {
  return (
    <>
      <header className="App-header hero">
        <section>
          <h2>Mark Dewey</h2>
          <h4>- Developer - Instructor - Explorer -</h4>
          <h5>
            <a href="#" onClick={() => scroll.scrollToBottom()}>
              Just looking to contact me?
            </a>
          </h5>
        </section>
      </header>
    </>
  )
}
