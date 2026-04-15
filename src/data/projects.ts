export interface Project {
  id: string
  number: string
  title: string
  org: string
  desc: string
  highlights: string[]
  tags: string[]
  images: string[]
  video?: string
}

export const projects: Record<string, Project> = {
  suits: {
    id: 'suits',
    number: '01 · NASA SUITS Challenge',
    title: 'Wrist-Mounted EVA Display',
    org: 'SEARCH · Purdue University',
    desc: 'Designed and built the frontend for a wrist-mounted display worn by astronauts during EVA operations. The interface surfaces real-time telemetry, navigation, and mission data under the constraints of a spacesuit — gloved hands, helmet visibility, and zero room for error.',
    highlights: [
      'Built a WebSocket data pipeline connecting the wrist device to a live telemetry server',
      'Designed tab/sub-tab navigation for rapid data access with gloved hands and large tap targets',
      'Integrated with HoloLens 2 for mixed reality EVA operations alongside a Raspberry Pi',
      'Selected as the only freshman to represent Purdue at Johnson Space Center',
      'Elected Software Lead for the 2026-2027 SUITS team',
      '1 of 10 colleges selected nationally via competitive technical proposal',
    ],
    tags: [
      'Unity / C#',
      'HoloLens 2',
      'WebSocket',
      'Raspberry Pi',
      'EVA UI/UX',
      'Real-time Telemetry',
    ],
    images: ['/suits-1.jpg', '/suits-2.jpg'],
  },
  crew: {
    id: 'crew',
    number: '02 · SEARCH @ Purdue',
    title: 'Crew Operations Interface',
    org: 'ASTRO-USA Analog Habitat',
    desc: 'Led the control systems subteam responsible for transforming ASTRO-USA — an analog space habitat — into a fully functional mission simulator. Designed the system and network architecture, habitat displays, and caution & warning systems, and planned the initial Mission Operations Control Room.',
    highlights: [
      'Designed network architecture to support continuous data collection and real-time monitoring',
      'Built caution & warning systems to aid astronauts during simulated missions',
      'Developed habitat display UI for mission-critical information across all systems',
      'Planned the initial layout and workflow of the Mission Operations Control Room (MOCR)',
      'Led a subteam responsible for all control systems within the habitat',
    ],
    tags: [
      'Systems Architecture',
      'UI Design',
      'C&W Systems',
      'Real-time Data',
      'Network Design',
    ],
    images: ['/crew-1.jpg'],
  },
  adc: {
    id: 'adc',
    number: '03 · NASA App Development Challenge',
    title: 'Artemis II Simulator',
    org: 'NASA · Johnson Space Center',
    desc: 'Led a team of 5 to design, program, and develop an interactive application simulating the Artemis II mission using a real NASA dataset. Visualized Orion trajectory and built an antenna optimization algorithm. Presented internationally at JSC.',
    highlights: [
      'Visualized Orion trajectory data as a color-coded flight path for rapid data interpretation',
      'Developed a link-budget algorithm optimizing antenna selection across three priority modes',
      'Refined an inaccurate dataset to within 0.02% of NASA-verified values',
      'Awarded Best User Interface out of all competing teams',
      'Presented at Johnson Space Center to NASA workforce, leadership, and the public',
      '1 of 4 teams selected internationally to present at JSC',
    ],
    tags: [
      'Python',
      'Data Analysis',
      'Algorithm Design',
      'Best UI Award',
      'Trajectory Visualization',
    ],
    images: ['/adc-1.jpg', '/adc-2.jpg'],
    video: 'https://www.youtube.com/watch?v=kYOU_ufs9sI',
  },
}

export const projectsList = Object.values(projects)
