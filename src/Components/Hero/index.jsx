import React from 'react'
import './style.scss'
import { scroller } from 'react-scroll'
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

              <h5
                className="just-contact"
                onClick={e => {
                  e.preventDefault()
                  scroller.scrollTo('contact')
                }}
              >
                Just looking to contact me?
              </h5>
            </section>
          </header>
        )}
      </ProgressiveImage>
    </>
  )
}
