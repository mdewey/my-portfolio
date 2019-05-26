import React from 'react'
import './style.scss'

import ProgressiveImage from 'react-progressive-image'

import mainImage from './images/Mark-5.jpg'
import lightImage from './images/Mark-5.light.jpg'

export default function AboutMe() {
  return (
    <>
      <ProgressiveImage src={mainImage} placeholder={lightImage}>
        {src => (
          <section className="body">
            <header>
              <section className="title-block">
                <div
                  className="face-pic"
                  style={{ backgroundImage: `url('${src}')` }}
                />
              </section>
              <section className="welcome-message">
                Hello! My name is Mark. I am a software engineer that focuses on
                people over product.
              </section>
            </header>
          </section>
        )}
      </ProgressiveImage>
    </>
  )
}
