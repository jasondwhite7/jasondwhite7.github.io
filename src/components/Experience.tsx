export function Experience() {
  return (
    <section id="experience">
      <p className="section-label reveal">Journey</p>
      <h2 className="reveal">Experience</h2>
      <p className="section-subtitle reveal"></p>

      <div style={{ marginTop: '40px', display: 'flex', flexDirection: 'column', gap: '32px' }}>
        
        <div className="reveal" style={{ display: 'flex', gap: '24px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--accent)', boxShadow: '0 0 10px var(--accent)' }} />
            <div style={{ width: '1px', flex: 1, background: 'linear-gradient(to bottom, var(--accent), transparent)', margin: '8px 0', opacity: 0.5 }} />
          </div>
          <div style={{ paddingBottom: '20px' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '8px', color: 'var(--text)' }}>NASA SUITS Software Lead '26–'27</h3>
            <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '0.8rem', color: 'var(--accent)', marginBottom: '12px', letterSpacing: '0.05em' }}>Purdue University · 2026 - Present</p>
            <p style={{ color: 'var(--muted)', fontSize: '0.9rem', lineHeight: 1.6, maxWidth: '600px' }}>
              Elected to lead the software development team for Purdue's NASA SUITS team. Responsible for managing and coordinating a team of 25
              developers with varying levels of experience and expertise, while consistently making deadlines and delivering high-quality work.
            </p>
          </div>
        </div>

        <div className="reveal" style={{ display: 'flex', gap: '24px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', border: '2px solid var(--accent)', background: 'var(--bg)' }} />
            <div style={{ width: '1px', flex: 1, background: 'var(--border)', margin: '8px 0' }} />
          </div>
          <div style={{ paddingBottom: '20px' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '8px', color: 'var(--text)' }}>Crew Operations Lead</h3>
            <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '0.8rem', color: 'var(--accent)', marginBottom: '12px', letterSpacing: '0.05em' }}>ASTRO-USA Analog Habitat · 2025 - 2026</p>
            <p style={{ color: 'var(--muted)', fontSize: '0.9rem', lineHeight: 1.6, maxWidth: '600px' }}>
              Selected to lead the Crew Operations subteam of SEARCH's analog astronaut habitat. Responsible for developing the 
              data monitoring and control systems for the habitat, as well as integrating existing systems into the software.
            </p>
          </div>
        </div>

        <div className="reveal" style={{ display: 'flex', gap: '24px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', border: '2px solid var(--accent)', background: 'var(--bg)' }} />
          </div>
          <div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '8px', color: 'var(--text)' }}>Lead Programmer</h3>
            <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '0.8rem', color: 'var(--accent)', marginBottom: '12px', letterSpacing: '0.05em' }}>NASA App Development Challenge · 2024 - 2025</p>
            <p style={{ color: 'var(--muted)', fontSize: '0.9rem', lineHeight: 1.6, maxWidth: '600px' }}>
              Developed a 3D visualization of the Artemis II trajectory using Unity through the NASA App Development Challenge.
              Responsible for parsing, storing, and displaying trajectory data through multiple UI elements.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
