import React, { useState } from 'react'
import './style.scss'
import { animateScroll as scroll, scroller } from 'react-scroll'

import { Container, Button } from 'react-floating-action-button'

export default function FAB() {
  const sections = [
    'welcome',
    'core-values',
    'currently-working',
    'buzzwords',
    'contact'
  ]
  const [currentSection, setCurrentStatue] = useState(0)
  const movePage = () => {
    if (sections[currentSection]) {
      scroller.scrollTo(sections[currentSection], {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart'
      })
      setCurrentStatue(currentSection + 1)
    } else {
      scroll.scrollToTop()
      setCurrentStatue(0)
    }
  }

  return (
    <Container>
      <Button to="" className="fab-button" onClick={movePage}>
        {currentSection < sections.length ? (
          <i className="material-icons">arrow_downward</i>
        ) : (
          <i className="material-icons">arrow_upward</i>
        )}
      </Button>
    </Container>
  )
}
