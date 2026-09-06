import React from 'react'
import { Hero3D } from './Hero3D'

export function Hero() {
  return (
    <div id="hero-section" style={{ position: 'relative' }}>
      <Hero3D />
      <div id="hero" style={{ pointerEvents: 'none', position: 'relative', zIndex: 1 }}>
        <h1>
          <span className="first">Jason</span><span className="last">White</span>
        </h1>
        <div className="hero-sub" style={{ pointerEvents: 'auto' }}>
          <p>
            Hi, I'm Jason! I'm a sophomore studying aerospace engineering at Purdue University.
          </p>
          <p>
            I design and build systems and software for <span>space exploration. </span>
            Two-time NASA student design challenge finalist with work presented at NASA Johnson Space Center.
          </p>
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
        <div className="hero-details" style={{ pointerEvents: 'auto' }}>
          <span>GPA: <span className="highlight">3.97</span></span>
          <span className="dot">•</span>
          <span>Expected Graduation: <span className="highlight">Dec, 2028</span></span>
        </div>
      </div>
    </div>
  )
}
