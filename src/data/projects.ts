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
    title: 'NASA SUITS Challenge & Wrist Display',
    org: 'NASA SUITS · Team VISOR & SEARCH',
    desc: 'Led software development and team organization for Purdue’s 30+ member NASA SUITS team, while designing and developing a spacesuit wrist-mounted display integrated with a HoloLens 2 to aid astronauts on lunar EVAs.',
    highlights: [
      'Elected to lead software development, team organization, and 30+ members for Purdue’s NASA SUITS challenge team',
      'Restructured development to put a stronger emphasis on design and innovation while still maintaining functionality',
      'Formed a hardware team to design and manufacture a custom birdbath optical AR headset, lunar lighting rig, and DCU/UIA replicas to integrate human-in-the-loop testing into development',
      'Designed and implemented the user interface for a wrist-mounted device for a spacesuit accounting for constraints of space operations, providing quick access to real-time telemetry, navigation, and mission data',
      'Integrated the wrist device with a HoloLens 2 to create a fully functional interface aiding astronauts on lunar EVAs',
      'Selected as 1 of 8 members to represent Purdue at Johnson Space Center and present our system to the NASA workforce',
      'Drafted a technical proposal for spacesuit and rover interfaces and was selected as 1 of 10 colleges nationally to compete',
    ],
    thumbnail: '/suits-1.jpg',
    tags: [
      'Unity / C#',
      'HoloLens 2',
      'AR Headset',
      'Hardware Prototyping',
      'Integration',
      'Team Lead',
    ],
    images: ['/suits-1.jpg', '/suits-2.jpg'],
  },
  crew: {
    id: 'crew',
    number: '02 · SEARCH @ Purdue',
    title: 'Crew Operations Interface',
    org: 'ASTRO-USA · Analog Astronaut Habitat',
    desc: 'Led the Crew Operations subteam responsible for designing and implementing the control and monitoring systems for ASTRO-USA, including network architecture, habitat displays, sensor telemetry, and caution & warning systems.',
    highlights: [
      'Installed sensors across the habitat to monitor numerous environmental conditions, hydroponics systems, and power levels',
      'Designed the system and network’s architecture for continuous data collection, processing, uploading, and monitoring',
      'Implemented an SQLite database to store telemetry data for historical visualization and analysis',
      'Developed the user interface for habitat displays and caution and warning systems, enabling real-time anomaly response',
      'Planned the initial layout and workflow of the Mission Operations Control Room (MOCR)',
      'Led a subteam responsible for all control systems within the analog habitat',
    ],
    thumbnail: '/crew-1.jpg',
    tags: [
      'TypeScript React',
      'SQLite',
      'Integration',
      'Arduino',
      'Network Architecture',
      'Sensors & Telemetry',
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
      'Led a team of 5 to design, program, and develop an interactive application simulating Artemis II given a dataset',
      'Developed an algorithm to compute signal strength from Orion to various ground antennas with prioritization options to maximize link budget, minimize antenna switches, or a combination of both',
      'Analyzed an inaccurate dataset and refined it into a corrected model within 0.02% of verified values',
      'Designed the award-winning UI and presented the software at NASA JSC as 1 of 4 teams selected internationally',
      'Visualized Orion trajectory data as a color-coded flight path for rapid data interpretation',
      'Awarded Best User Interface out of all competing teams',
    ],
    thumbnail: '/adc-1.jpg',
    tags: [
      'Unity / C#',
      'Data Analysis',
      'Best UI Award',
      'Algorithm Design',
      'Trajectory Visualization',
    ],
    images: ['/adc-1.jpg', '/adc-2.jpg', '/adc-3.jpg'],
    video: 'https://www.youtube.com/watch?v=kYOU_ufs9sI',
  },
}

export const projectsList = Object.values(projects)
