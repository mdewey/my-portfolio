import React from "react"
import "./style.scss"
import CurrentStatus from "../CurrentStatus"

import ProgressiveImage from "react-progressive-image"

import mainImage from "./images/Mark-5.jpg"
import lightImage from "./images/Mark-5.light.jpg"

export default function AboutMe() {
  return (
    <>
      <ProgressiveImage src={mainImage} placeholder={lightImage}>
        {src => (
          <section className="section welcome" id="welcome">
            <header>
              <section className="title-block">
                <div
                  className="face-pic"
                  style={{ backgroundImage: `url('${src}')` }}
                />
              </section>
              <section className="welcome-message">
                <h1>Hello!</h1>
                <h1>My name is Mark.</h1>
                <h1>
                  I am a software engineer who focuses on people over product.{" "}
                </h1>
              </section>
              <CurrentStatus />
            </header>
          </section>
        )}
      </ProgressiveImage>
    </>
  )
}
