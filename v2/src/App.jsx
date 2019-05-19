import React from 'react'
import './App.scss'
import Hero from './Components/Hero/Index.jsx'
import AboutMe from './Components/Welcome/Index.jsx'
import CoreValues from './Components/CoreValues/Index'
import CurrentStatus from './Components/CurrentStatus/Index'

function App() {
  return (
    <>
      <Hero />
      <CurrentStatus />
      <AboutMe />
      <CoreValues />
    </>
  )
}

export default App
