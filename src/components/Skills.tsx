import React from 'react'

export function Skills() {
  return (
    <section id="skills">
      <h2 className="reveal">Skills</h2>

      <div className="skills-container">
        <div className="skill-group reveal">
          <p className="skill-group-label">Languages</p>
          <div className="skill-list">
            <span className="skill-pill">C#</span>
            <span className="skill-pill">Python</span>
            <span className="skill-pill">TypeScript</span>
            <span className="skill-pill">C++</span>
            <span className="skill-pill">C</span>
            <span className="skill-pill">MATLAB</span>
            <span className="skill-pill">HTML/CSS</span>
            <span className="skill-pill">LaTeX</span>
          </div>
        </div>
        <div className="skill-group reveal">
          <p className="skill-group-label">Frameworks & Tools</p>
          <div className="skill-list">
            <span className="skill-pill">Unity</span>
            <span className="skill-pill">React</span>
            <span className="skill-pill">VS Code</span>
            <span className="skill-pill">GitHub</span>
            <span className="skill-pill">Arduino</span>
            <span className="skill-pill">HoloLens 2</span>
            <span className="skill-pill">NX</span>
            <span className="skill-pill">Adobe Premiere Pro</span>
            <span className="skill-pill">Microsoft Office</span>

          </div>
        </div>
        <div className="skill-group reveal">
          <p className="skill-group-label">Other</p>
          <div className="skill-list">
            <span className="skill-pill">Data Analysis</span>
            <span className="skill-pill">Public Speaking</span>
            <span className="skill-pill">Technical Presentations</span>
            <span className="skill-pill">Technical Writing</span>
            <span className="skill-pill">Filming</span>
            <span className="skill-pill">Video Editing</span>
            <span className="skill-pill">Research</span>
          </div>
        </div>
      </div>
    </section>
  )
}
