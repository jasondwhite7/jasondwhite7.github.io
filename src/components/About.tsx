export function About() {
  return (
    <section id="about" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
      <p className="section-label reveal">Identity</p>
      <h2 className="reveal">About Me</h2>
      <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 2fr) minmax(0, 1fr)', gap: '40px', marginTop: '40px' }}>
        <div>
          <p style={{ color: 'var(--muted)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '20px' }}>
            I am a first-year Aerospace Engineering student at Purdue University with a focus on human factors 
            and designing systems that support long-duration human presence in space. My long-term goal is to 
            contribute to the sustainability and safety of human space exploration.
          </p>
          <p style={{ color: 'var(--muted)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '20px' }}>
            At Purdue, I am involved in the Space and Earth Analogs Research Chapter (SEARCH), where I work on 
            analog astronaut habitats, spacesuit interfaces, and mission simulation software. I have contributed 
            to the development of control systems, user interfaces, and mission operations tools in both technical 
            and leadership roles.
          </p> 
          <p style={{ color: 'var(--muted)', fontSize: '1.05rem', lineHeight: 1.8 }}>
            Outside of engineering, I enjoy game development, video editing and filming, and theatre lighting design.
          </p>
        </div>
      </div>
    </section>
  )
}
