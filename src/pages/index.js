import React from "react"

import "../styles/index.scss"

import SEO from "../components/seo"
import Hero from "../components/custom/Hero"
import AboutMe from "../components/custom/Welcome"
import CoreValues from "../components/custom/CoreValues"
import CurrentTech from "../components/custom/CurrentTech"
import ContactMe from "../components/custom/ContactMe"
import FAB from "../components/custom/FAB"
import Skills from "../components/custom/Skills"
import Head from "../components/custom/Head"
import GoogleAnalytics from "../components/custom/GoogleAnalytics"

const IndexPage = () => (
  <>
    <Head />
    <SEO />
    <Hero />
    <AboutMe />
    <CoreValues />
    <CurrentTech />
    <Skills />
    <ContactMe />
    <FAB />
    <GoogleAnalytics />
  </>
)

export default IndexPage
