import React from 'react'

import './App.scss'
import Hero from './Components/Hero'
import AboutMe from './Components/Welcome'
import CoreValues from './Components/CoreValues/Index'
import CurrentStatus from './Components/CurrentStatus/Index'
import CurrentTech from './Components/CurrentTech/Index'
import ContactMe from './Components/ContactMe'
import Skills from './Components/Skills'
import FAB from './Components/FAB'

function App() {
  return (
    <>
      <Hero />
      <CurrentStatus />
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
