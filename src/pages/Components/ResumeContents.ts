
// work experiences
export interface WorkExperience {
  name: string
  location: string
  position: string
  startDate: Date
  endDate?: Date
  description: string
}

const toast: WorkExperience = {
  name: 'Toast, Inc',
  location: 'New York, NY',
  position: 'Software Engineer II, Security Champion',
  startDate: new Date('2025-01-06T12:00:00Z'),
  description: `Full-stack product, platform, and AI agent tooling development for enterprise menu management in Java, Kotlin, and TypeScript.
  Drive legacy deprecation initiatives, moving users to new tools and keeping stakeholders aligned through meetings and documentation.
  Build reusable UI components and shared, efficient config search endpoints.
  Triage bugs, resolve incidents, and serve as DRI on cross-team projects, including multi-region infrastructure rollouts.
  Lead security initiatives within the scrum team and address vulnerabilities across services.
  Mentor and onboard engineers, and build AI-assisted tools and documentation for teams.
  Previously Software Engineer I (January 2025 - September 2026); Security Champion since July 2025.`
}

const khouryTa: WorkExperience = {
  name: 'Khoury College of Computer Sciences',
  location: 'Boston, MA',
  position: 'Teaching Assistant',
  startDate: new Date('2023-08-15T12:00:00Z'),
  endDate: new Date('2024-12-15T12:00:00Z'),
  description: 'Teaching Assistant for Fundamentals of Computer Science I-II (CS2500, CS2510).'
}

const toastCoop: WorkExperience = {
  name: 'Toast, Inc',
  location: 'Boston, MA',
  position: 'Software Engineer Co-op, Security Champion',
  startDate: new Date('2023-01-17T12:00:00Z'),
  endDate: new Date('2023-08-25T12:00:00Z'),
  description: `Employee Cloud, Payroll Product Group
  Contributed to the full-stack development and optimization of one of the most-used customer workflows through designing, implementing, and documenting code in SQL, Kotlin, and TypeScript.
  Improved SQL query cost for external partners by 99.99% using indexes and memory-level validation.
  Led frontend initiatives on implementing workflows, authorization checks, upgrading a legacy webpage, and publishing an RFC on URL parameterization.
  Analyzed beta SPA usage with Splunk, Datadog, and Sentry to determine performance and error rates.
  Leveraged security platforms to remove critical vulnerabilities within microservices.`
}

const nuAqa: WorkExperience = {
  name: 'Northeastern University, CPS',
  location: 'Boston, MA',
  position: 'Data Analytics Support',
  startDate: new Date('2022-08-29T12:00:00Z'),
  endDate: new Date('2022-12-15T12:00:00Z'),
  description: `Compiled, analyzed, and shared data on measures of academic performance in forty degree programs. 
  Conducted cursory research using Tableau to reinforce best practices for academic quality, assessment strategies, and curriculum design.`
}

export const workExperiences: WorkExperience[] = [toast, khouryTa, toastCoop, nuAqa]

// education
export interface Education {
  name: string
  location: string
  coursework: string
  description: string
  degree?: string
  relatedProjects?: string
  position?: string
}

const neu: Education = {
  name: 'Northeastern University',
  location: 'Boston, MA',
  coursework: 'TODO',
  degree: 'BSCS',
  description: 'Graduated magna cum laude with a Bachelor of Science in Computer Science, a concentration in Systems, and a minor in Management Information Systems.'
}

const doherty: Education = {
  name: 'Doherty Memorial High School',
  location: 'Worcester, MA',
  coursework: 'TODO',
  degree: 'Engineering & Technology Academy Certificate',
  description: 'Graduated as valedictorian from the Engineering and Technology Academy at Doherty Memorial High School, a rigorous program with a focus on science, math, and engineering. Completed college-level engineering courses through PLTW to further knowledge of engineering design and related fields.'
}

const mites: Education = {
  name: 'MITES Semester',
  location: 'Remote',
  coursework: 'TODO',
  description: 'Extended Python and electrical engineering knowledge to my final project, an American Sign Language to English translator made from accelerometers. Interviewed Dr. Erica Knowles, assistant professor at Berklee College of Music, wrote, and self-published my article titled "Music and the Numerous Health and Social Benefits."'
}

const qcc: Education = {
  name: 'Quinsigamond Community College',
  location: 'Worcester, MA',
  coursework: 'TODO',
  description: 'Completed four college-level courses through the Early College Worcester dual-enrollment program.'
}

export const educations: Education[] = [neu, doherty, mites, qcc]

// projects
export interface ProjectLink {
  label: string
  url: string
}

export interface Project {
  slug: string
  name: string
  startDate: Date
  endDate: Date
  associatedWith: string
  description: string
  position?: string
  tech?: string[]
  links?: ProjectLink[]
}

const progressiveMeshing: Project = {
  slug: 'progressive-meshing',
  tech: ['C/C++', 'OpenGL 4.1'],
  name: 'Progressive Meshing on 3-D Objects',
  startDate: new Date('2024-04-01T12:00:00Z'),
  endDate: new Date('2024-04-30T12:00:00Z'),
  associatedWith: 'Northeastern University',
  description: `Capstone Project for Computer Graphics (CS4300).
  Implemented a progressive meshing algorithm into a self-built application that renders 3-dimensional objects to reduce the number of object faces using C/C++ and OpenGL 4.1.`,
  links: [
    {
      label: 'Demo Video',
      url: 'https://www.youtube.com/watch?v=xHWYfFjGD84'
    }
  ]
}

const dinnerParty: Project = {
  slug: 'dinner-party',
  tech: ['Kotlin', 'Dropwizard', 'JetBrains Exposed', 'ChatGPT API'],
  name: 'Dinner Party',
  startDate: new Date('2023-05-01T12:00:00Z'),
  endDate: new Date('2023-05-02T12:00:00Z'),
  associatedWith: 'Toast',
  description: `Toast Internal Hackathon 2023. 
  Led back-end technical designs for an application that coordinates a group’s preferences in restaurants using Toast-provided internal restaurant data and ChatGPT API. Created database schemas and exposed API endpoints using JetBrains Exposed and Dropwizard in Kotlin.`
}

const networkSec: Project = {
  slug: 'network-security',
  tech: ['Aircrack-ng', 'Wireshark', 'Linux', '802.11', 'MAVLink'],
  name: 'Network Security Exploratory Project',
  startDate: new Date('2022-10-01T12:00:00Z'),
  endDate: new Date('2022-11-01T12:00:00Z'),
  associatedWith: 'Northeastern University',
  description: `Culminating project in the Introduction to Computer Science Research Seminar.
  Used network sniffing (Aircrack-ng, Wireshark) in a controlled lab to capture and decode wireless traffic, including telemetry from a drone using a MAVLink dissector.
  Studied 802.11 packet structure and WPA2's EAPOL four-way handshake to understand how data is protected on the internet.`,
  links: [
    {
      label: 'Final Presentation',
      url: 'https://drive.google.com/file/d/1TYBhzM1E_j5ZnDJr5e32gzPcJ-Fcl_iT/view?usp=drivesdk'
    }
  ]
}

const marbleSol: Project = {
  slug: 'marble-solitaire',
  tech: ['Java'],
  name: 'Marble Solitaire',
  startDate: new Date('2022-05-01T12:00:00Z'),
  endDate: new Date('2022-05-31T12:00:00Z'),
  associatedWith: 'Northeastern University',
  description: `Created a fully customizable marble solitaire game in Java following object-oriented design principles.
  Contains options for board sizes, hole placement, type (English, Triangle, European), and view type (console/GUI).
  Built as JAR file, the project can be executed within a Java environment.`,
  links: [
    {
      label: 'GitHub',
      url: 'https://github.com/nmungovan/marble-solitaire-cs3500'
    }
  ]
}

const jezzball: Project = {
  slug: 'multiplayer-jezzball',
  tech: ['Racket'],
  name: 'Multiplayer JezzBall',
  startDate: new Date('2021-10-01T12:00:00Z'),
  endDate: new Date('2021-11-01T12:00:00Z'),
  associatedWith: 'Northeastern University',
  description: 'Created an "n"-player game of JezzBall in Racket using big-bang and message handlers over a client-server network (to connect remote players) with working game logic for one and multiple players.',
  links: [
    {
      label: 'GitHub',
      url: 'https://github.com/nmungovan/multiplayer-jezzball-cs2500a'
    }
  ]
}

const aslTranslator: Project = {
  slug: 'asl-translator',
  tech: ['Python', 'Adafruit M4 Metro'],
  name: 'ASL Alphabet to English Translator',
  startDate: new Date('2020-07-01T12:00:00Z'),
  endDate: new Date('2020-08-01T12:00:00Z'),
  associatedWith: 'MITES Semester',
  description: 'Created a physical prototype glove (using Adafruit M4 Metro Board and Python) that analyzes various accelerometer outputs on digits through normalization/dot product comparison and outputs a letter based on those readings against a database of values (HID keyboard).',
  links: [
    {
      label: 'MOSTEC Presentation',
      url: 'https://drive.google.com/file/d/11w-XFdqPV32JNFDv-pei3UZg72PH3D7X/view?usp=drivesdk'
    }
  ]
}

const measuringSpoon: Project = {
  slug: 'measuring-spoon-organizer',
  tech: ['3D prototyping'],
  name: 'Measuring Spoon Organizer',
  startDate: new Date('2020-10-01T12:00:00Z'),
  endDate: new Date('2021-01-31T12:00:00Z'),
  associatedWith: 'Doherty Memorial High School',
  description: `The final project for the PLTW course, Engineering Design and Development.
  Created the concept for a magnetic holder for measuring spoons, created a 3D/physical prototype, and designed a business model to mass-produce and sell our product.`
}

const kelleySquare: Project = {
  slug: 'kelley-square',
  tech: ['C', 'VEX Robotics'],
  name: 'Redesigning Kelley Square',
  startDate: new Date('2019-05-01T12:00:00Z'),
  endDate: new Date('2019-06-30T12:00:00Z'),
  associatedWith: 'Doherty Memorial High School',
  description: `The final project for the PLTW course, Principles of Engineering.
  Conceptually redesigned the infamous Kelley Square in Worcester, MA into a simple four-way intersection using traffic lights.
  Designed a functioning traffic light prototype using VEX Robotics equipment and C programming language.`
}

export const projects: Project[] = [progressiveMeshing, dinnerParty, networkSec, marbleSol, jezzball, measuringSpoon, aslTranslator, kelleySquare]

// skills
export const skills: string[] = ['React.js', 'Typescript', 'Security', 'TODO']

// organizations
export interface Organization {
  name: string
  startDate: Date
  endDate?: Date
  position: string
  location: string
  description: string
}

const cup: Organization = {
  name: 'Council for University Programs',
  startDate: new Date('2021-09-01T12:00:00Z'),
  endDate: new Date('2024-12-15T12:00:00Z'),
  position: 'Director of Operations',
  location: 'Boston, MA',
  description: `Volunteered as staff (set-up, load-out, general tasks) for various campus events, including Northeastern's Homecoming, Springfest Festival, and small concerts.
  Ensured events ran smoothly for thousands of students, CUP staff, and performers.`
}

const first: Organization = {
  name: 'Khoury FIRST',
  startDate: new Date('2022-10-01T12:00:00Z'),
  endDate: new Date('2024-12-15T12:00:00Z'),
  position: 'Mentee',
  location: 'Boston, MA',
  description: 'Northeastern University Khoury College of Computer Sciences mentorship program to support first-generation/low-income college students in continuation of education.'
}

const summerBridgeOrg: Organization = {
  name: 'Summer Bridge Scholars',
  startDate: new Date('2022-05-01T12:00:00Z'),
  endDate: new Date('2023-07-01T12:00:00Z'),
  position: 'Peer Mentor',
  location: 'Boston, MA',
  description: 'Facilitated and planned team-building and networking activities with incoming first-year Khoury College of Computer Sciences students to provide insight into the shift to college life and computer science academia.'
}

const sga: Organization = {
  name: 'Student Government Association',
  startDate: new Date('2022-01-01T12:00:00Z'),
  endDate: new Date('2023-09-01T12:00:00Z'),
  position: 'Academic Affairs Committee Member',
  location: 'Boston, MA',
  description: `CCIS/DMSB Representative
  Created and passed a proposal to the Dean of the Northeastern University D'Amore-McKim School of Business to revise and update the outdated course content of the Management Information Systems course MISM2301, effective Fall 2023.`
}

const riseTogether: Organization = {
  name: 'Rise Together Boston',
  startDate: new Date('2021-10-01T12:00:00Z'),
  endDate: new Date('2022-06-01T12:00:00Z'),
  position: 'Peer Advisor',
  location: 'Boston, MA',
  description: 'Led sessions and built connections with students (c/o 2023) from Charlestown High School (Boston, MA) and Charlottesville High School (Charlottesville, VA) to provide insight for college (search/applications/financial aid), careers, and other post-secondary endeavors.'
}

const worcesterCrew: Organization = {
  name: 'Worcester Public High Schools Crew',
  startDate: new Date('2017-09-01T12:00:00Z'),
  endDate: new Date('2021-05-01T12:00:00Z'),
  position: 'Varsity Captain',
  location: 'Worcester, MA',
  description: 'Led and motivated a group of more than thirty rowers, kept a positive attitude and good morale for others, and provided the team with role models through acts of good sportsmanship.'
}

export const organizations: Organization[] = [cup, first, summerBridgeOrg, sga, riseTogether, worcesterCrew]

export type Experience = WorkExperience | Education | Organization
