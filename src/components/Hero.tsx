import React from 'react'
import { Hero3D } from './Hero3D'

export function Hero() {
  return (
    <div id="hero-section" style={{ position: 'relative' }}>
      <Hero3D />
      <div id="hero" style={{ pointerEvents: 'none' }}>
        <p className="hero-eyebrow">Aerospace Engineering · Purdue University</p>
        <h1>
          <span className="first">Jason D.</span>
          <span className="last">White</span>
        </h1>
        <p className="hero-sub" style={{ pointerEvents: 'auto' }}>
          Building interfaces for <span>space operations</span>. Freshman. 4.0
          GPA. Already presenting at Johnson Space Center.
        </p>
        <div className="hero-badges" style={{ pointerEvents: 'auto' }}>
          <span className="badge highlight">NASA SUITS · JSC 2026</span>
          <span className="badge highlight">NASA ADC · JSC 2025</span>
          <span className="badge">SEARCH @ Purdue</span>
          <span className="badge">Dean's List</span>
          <span className="badge">Software Lead '26–'27</span>
        </div>
        <div className="hero-cta" style={{ pointerEvents: 'auto' }}>
          <a href="#projects" className="btn btn-primary">
            View Projects
          </a>
          <a href="/Resume - Jason White.pdf" download target="_blank" rel="noreferrer" className="btn btn-ghost">
            Download Resume
          </a>
          <a href="#contact" className="btn btn-ghost">
            Get in Touch
          </a>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="scroll-line"></div>
        <span>Scroll</span>
      </div>
    </div>
  )
}

