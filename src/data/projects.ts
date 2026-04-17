export interface Project {
  id: string
  number: string
  title: string
  org: string
  desc: string
  highlights: string[]
  thumbnail: string
  tags: string[]
  images: string[]
  video?: string
}

export const projects: Record<string, Project> = {
  suits: {
    id: 'suits',
    number: '01 · SEARCH @ Purdue',
    title: 'Wrist-Mounted EVA Display',
    org: 'NASA SUITS · Team VISOR',
    desc: 'Designed and built the frontend for a wrist-mounted display worn by astronauts during EVA operations. The interface shows real-time telemetry, navigation, and mission data and is integrated with a HoloLens 2 and a custom astronaut assistant LLM for additional accessibility.',
    highlights: [
      'Designed the UI for a wrist-mounted device for use with astronaut gloves and lunar lighting conditions',
      'Integrated with HoloLens 2 for augmented reality EVA operations alongside a Raspberry Pi',
      'Selected as only one of two freshman to represent Purdue at Johnson Space Center',
      'Elected Software Lead for the 2026-2027 SUITS team',
      '1 of 10 colleges selected nationally via competitive technical proposal',
    ],
    thumbnail: '',
    tags: [
      'Unity / C#',
      'HoloLens 2',
      'Integration',
    ],
    images: ['/'],
  },
  crew: {
    id: 'crew',
    number: '02 · SEARCH @ Purdue',
    title: 'Crew Operations Interface',
    org: 'ASTRO-USA · Analog Astronaut Habitat',
    desc: 'Led the Crew Operations subteam responsible for designing and implementing the control systems for ASTRO-USA. Responsible for the network architecture, habitat displays, data uploading and processing, and caution & warning systems. ',
    highlights: [
      'Designed network architecture to support continuous data collection and real-time monitoring',
      'Implemented an SQLite database to store telemetry data for historical visualization and analysis',
      'Developed habitat display UI for mission-critical information across all systems',
      'Planned the initial layout and workflow of the Mission Operations Control Room (MOCR)',
      'Led a subteam responsible for all control systems within the habitat',
    ],
    thumbnail: '/crew-1-thumb.jpg',
    tags: [
      'TypeScript React',
      'SQLite',
      'Integration',
      'Arduino',
      'Network Architecture',
    ],
    images: ['/crew-1.jpg'],
  },
  adc: {
    id: 'adc',
    number: '03 · NASA ADC @ DHHS',
    title: 'Artemis II Simulator',
    org: 'NASA App Development Challenge',
    desc: 'Led a team of 5 to design, program, and develop an interactive application simulating the Artemis II mission using a real NASA dataset. Visualized Orion trajectory and built an antenna optimization algorithm. Presented internationally at JSC.',
    highlights: [
      'Visualized Orion trajectory data as a color-coded flight path for rapid data interpretation',
      'Developed a link-budget algorithm optimizing antenna selection across three priority modes',
      'Refined an inaccurate dataset to within 0.02% of NASA-verified values',
      'Awarded Best User Interface out of all competing teams',
      'Presented at Johnson Space Center to NASA workforce, leadership, and the public',
      '1 of 4 teams selected internationally to present at JSC',
    ],
    thumbnail: '/adc-1-thumb.jpg',
    tags: [
      'Unity / C#',
      'Data Analysis',
      'Best UI Award',
      'Data Smoothing',
      'Trajectory Visualization',
    ],
    images: ['/adc-1.jpg', '/adc-2.jpg', '/adc-3.jpg'],
    video: 'https://www.youtube.com/watch?v=kYOU_ufs9sI',
  },
}

export const projectsList = Object.values(projects)
