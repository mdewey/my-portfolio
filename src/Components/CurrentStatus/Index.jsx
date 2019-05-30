import React from 'react'
import './style.scss'
import Status from './RandomStatus'

export default function CurrentStatus() {
  return (
    <>
      <section className=" current-status-section">
        <em className="current-status-header">Current Status:</em>
        <div className="current-status-text">
          <Status />
        </div>
      </section>
    </>
  )
}
