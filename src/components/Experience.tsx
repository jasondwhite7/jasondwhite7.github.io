export function Experience() {
  return (
    <section id="experience">
      <h2 className="reveal">Experience</h2>

      <div style={{ marginTop: '40px', display: 'flex', flexDirection: 'column', gap: '32px' }}>

        {/* NASA SUITS Challenge Team Lead */}
        <div className="reveal" style={{ display: 'flex', gap: '24px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--accent)', boxShadow: '0 0 10px var(--accent)' }} />
            <div style={{ width: '1px', flex: 1, background: 'linear-gradient(to bottom, var(--accent), var(--border))', margin: '8px 0', opacity: 0.8 }} />
          </div>
          <div style={{ paddingBottom: '20px' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '4px', color: 'var(--text)' }}>NASA SUITS Challenge Team Lead</h3>
            <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '0.8rem', color: 'var(--accent)', marginBottom: '12px', letterSpacing: '0.05em' }}>
              SEARCH @ Purdue University · May 2026 – Present
            </p>
            <ul style={{ color: 'var(--muted)', fontSize: '0.9rem', lineHeight: 1.6, maxWidth: '650px', paddingLeft: '20px', listStyleType: 'disc' }}>
              <li>Elected to lead software development, team organization, and 30+ members for Purdue’s NASA SUITS challenge team.</li>
              <li>Restructured development to put a stronger emphasis on design and innovation while still maintaining functionality.</li>
              <li>Formed a hardware team to design and manufacture a custom birdbath optical AR headset, lunar lighting rig, and DCU/UIA replicas to integrate human-in-the-loop testing into development.</li>
            </ul>
          </div>
        </div>

        {/* Crew Operations Lead */}
        <div className="reveal" style={{ display: 'flex', gap: '24px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--accent)', boxShadow: '0 0 10px var(--accent)' }} />
            <div style={{ width: '1px', flex: 1, background: 'var(--border)', margin: '8px 0' }} />
          </div>
          <div style={{ paddingBottom: '20px' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '4px', color: 'var(--text)' }}>Crew Operations Lead (Student-Led Analog Habitat)</h3>
            <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '0.8rem', color: 'var(--accent)', marginBottom: '12px', letterSpacing: '0.05em' }}>
              ASTRO-USA Analog Habitat · Aug 2025 – Present
            </p>
            <ul style={{ color: 'var(--muted)', fontSize: '0.9rem', lineHeight: 1.6, maxWidth: '650px', paddingLeft: '20px', listStyleType: 'disc' }}>
              <li>Installed sensors across the habitat to monitor numerous environmental conditions, hydroponics systems, and power levels.</li>
              <li>Designed the system and network’s architecture for continuous data collection, processing, uploading, and monitoring.</li>
              <li>Implemented an SQLite database to store telemetry data for historical visualization and analysis.</li>
              <li>Developed the user interface for habitat displays and caution and warning systems, enabling real-time anomaly response.</li>
            </ul>
          </div>
        </div>

        {/* NASA SUITS Challenge Wrist Mounted Display Developer */}
        <div className="reveal" style={{ display: 'flex', gap: '24px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', border: '2px solid var(--accent)', background: 'var(--bg)' }} />
            <div style={{ width: '1px', flex: 1, background: 'var(--border)', margin: '8px 0' }} />
          </div>
          <div style={{ paddingBottom: '20px' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '4px', color: 'var(--text)' }}>NASA SUITS Challenge Wrist Mounted Display Developer</h3>
            <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '0.8rem', color: 'var(--accent)', marginBottom: '12px', letterSpacing: '0.05em' }}>
              SEARCH @ Purdue University · Aug 2025 – May 2026
            </p>
            <ul style={{ color: 'var(--muted)', fontSize: '0.9rem', lineHeight: 1.6, maxWidth: '650px', paddingLeft: '20px', listStyleType: 'disc' }}>
              <li>Designed and implemented the user interface for a wrist-mounted device for a spacesuit accounting for constraints of space operations, providing astronauts quick access to real-time telemetry, navigation, and mission data.</li>
              <li>Integrated the wrist device with a HoloLens 2 to create a fully functional interface aiding astronauts on lunar EVAs.</li>
              <li>Selected as 1 of 8 members to represent Purdue at Johnson Space Center and present our system to the NASA workforce.</li>
              <li>Drafted a technical proposal for spacesuit and rover interfaces and was selected as 1 of 10 colleges nationally to compete.</li>
            </ul>
          </div>
        </div>

        {/* NASA App Development Challenge Lead Programmer */}
        <div className="reveal" style={{ display: 'flex', gap: '24px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', border: '2px solid var(--accent)', background: 'var(--bg)' }} />
          </div>
          <div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '4px', color: 'var(--text)' }}>Lead Programmer</h3>
            <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '0.8rem', color: 'var(--accent)', marginBottom: '12px', letterSpacing: '0.05em' }}>
              NASA App Development Challenge · Aug 2024 – Apr 2025
            </p>
            <ul style={{ color: 'var(--muted)', fontSize: '0.9rem', lineHeight: 1.6, maxWidth: '650px', paddingLeft: '20px', listStyleType: 'disc' }}>
              <li>Led a team of 5 to design, program, and develop an interactive application simulating Artemis II given a dataset.</li>
              <li>Developed an algorithm to compute signal strength from Orion to various ground antennas with prioritization options to maximize link budget, minimize antenna switches, or a combination of both.</li>
              <li>Analyzed an inaccurate dataset and refined it into a corrected model within 0.02% of verified values.</li>
              <li>Designed the award-winning UI and presented the software at NASA JSC as 1 of 4 teams selected internationally.</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  )
}
