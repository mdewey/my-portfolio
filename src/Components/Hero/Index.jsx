import React from 'react'
import './style.scss'
import { animateScroll as scroll } from 'react-scroll'
import ProgressiveImage from 'react-progressive-image'

import mainImage from './images/fly.jpg'
import lightImage from './images/fly.light.jpg'

export default function Hero() {
  return (
    <>
      <ProgressiveImage src={mainImage} placeholder={lightImage}>
        {src => (
          <header
            className="App-header hero"
            style={{ backgroundImage: `url('${src}')` }}
          >
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
        )}
      </ProgressiveImage>
    </>
  )
}
