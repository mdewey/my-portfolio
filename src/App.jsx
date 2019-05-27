import React from 'react'

import './App.scss'
import Hero from './Components/Hero'
import AboutMe from './Components/Welcome'
import CoreValues from './Components/CoreValues'
import CurrentTech from './Components/CurrentTech'
import ContactMe from './Components/ContactMe'
import FAB from './Components/FAB'
import Skills from './Components/Skills'

function App() {
  return (
    <>
      <Hero />
      <AboutMe />
      <CoreValues />
      <CurrentTech />
      <Skills />
      <ContactMe />
      <FAB />
    </>
  )
}

export default App
