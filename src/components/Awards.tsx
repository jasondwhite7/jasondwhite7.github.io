import React from 'react'

export function Awards() {
  return (
    <section id="awards">
      <p className="section-label reveal">Recognition</p>
      <h2 className="reveal">Awards & Honors</h2>
      <p className="section-subtitle reveal"></p>

      <div className="awards-grid">
        <div className="award-card reveal">
          <p className="award-title">Best User Interface</p>
          <p className="award-org">NASA App Development Challenge · 2025</p>
        </div>
        <div className="award-card reveal">
          <p className="award-title">Outstanding Team</p>
          <p className="award-org">Advanced Space Academy Elite · 2025</p>
        </div>
        <div className="award-card reveal">
          <p className="award-title">Dean's List</p>
          <p className="award-org">Purdue University · 2025 - Present</p>
        </div>
        <div className="award-card reveal">
          <p className="award-title">Certificate of Recognition</p>
          <p className="award-org">Ohio Senate · 2025</p>
        </div>
        <div className="award-card reveal">
          <p className="award-title">3rd Place (200+ Teams)</p>
          <p className="award-org">Central Ohio Bridge Building · 2025</p>
        </div>
        <div className="award-card reveal">
          <p className="award-title">Commended Scholar</p>
          <p className="award-org">NMSC · 2024</p>
        </div>
      </div>
    </section>
  )
}
