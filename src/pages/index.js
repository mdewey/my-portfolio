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

const IndexPage = () => (
  <>
    <Head />
    <SEO title="Home" />
    <Hero />
    <AboutMe />
    <CoreValues />
    <CurrentTech />
    <Skills />
    <ContactMe />
    <FAB />
  </>
)

export default IndexPage
