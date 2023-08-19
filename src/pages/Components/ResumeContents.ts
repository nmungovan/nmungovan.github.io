
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
  location: 'Boston, MA',
  position: 'Software Engineer Co-op, Security Champion',
  startDate: new Date('2023-01-17T12:00:00Z'),
  endDate: new Date('2023-08-25T12:00:00Z'),
  description: `Employee Cloud, Payroll Product Group
  Contribute to the full-stack development and optimization of one of Toast's most-used customer workflows through designing, implementing, documenting, and configuring database, backend, and frontend code.
  Perform rigorous QA for code changes through unit, integration, and manual tests.
  Participate in code reviews to ensure technical implementations meet functional requirements.
  Leverage vulnerability tracking software and attend internal Security Champion meetings to promote and advocate for secure code practices within Toast.`

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

const starbucks: WorkExperience = {
  name: 'Starbucks',
  location: 'Massachusetts',
  position: 'Partner',
  startDate: new Date('2021-01-17T12:00:00Z'),
  endDate: new Date('2022-09-01T12:00:00Z'),
  description: `Hand-crafted custom drinks/food items, managed inventory stock, and created connections in high-volume stores to create the “third place” for customers. 
  Successfully and efficiently trained 10+ baristas in all positions. 
  Awarded "Partner of the Quarter" for Summer 2021 due to exemplary work ethic and character.`
}

const summerBridge: WorkExperience = {
  name: 'NU Summer Bridge Program',
  location: 'Boston, MA',
  position: 'Peer Mentor',
  startDate: new Date('2022-07-01T12:00:00Z'),
  endDate: new Date('2023-07-01T12:00:00Z'),
  description: 'Facilitated team-building and networking activities with incoming first-year Khoury College of Computer Sciences students to provide insight into the shift to college life and computer science academia for Summer Bridge Week 2022 and 2023.'
}

export const workExperiences: WorkExperience[] = [toast, nuAqa, starbucks, summerBridge].sort((a, b) => {return a.startDate.getSeconds() - b.startDate.getSeconds()})

// education
export interface Education {
  name: string
  location: string
  startDate: Date
  endDate: Date
  coursework: string
  description: string
  degree?: string
  relatedProjects?: string
  position?: string
}

const neu: Education = {
  name: 'Northeastern University',
  location: 'Boston, MA',
  startDate: new Date('2021-09-01T12:00:00Z'),
  endDate: new Date('2025-04-28T12:00:00Z'),
  coursework: 'TODO',
  degree: 'BSCS',
  description: 'Current candidate for a Bachelor of Science in Computer Science with a concentration in Systems and a minor in Management Information Systems.'
}

const doherty: Education = {
  name: 'Doherty Memorial High School',
  location: 'Worcester, MA',
  startDate: new Date('2017-08-01T12:00:00Z'),
  endDate: new Date('2021-06-01T12:00:00Z'),
  coursework: 'TODO',
  degree: 'Engineering & Technology Academy Certificate',
  description: 'Graduated as valedictorian from the Engineering and Technology Academy at Doherty Memorial High School, a rigorous program with a focus on science, math, and engineering. Completed college-level engineering courses through PLTW to further knowledge of engineering design and related fields.'
}

const mites: Education = {
  name: 'MITES Semester',
  location: 'Remote',
  startDate: new Date('2020-07-01T12:00:00Z'),
  endDate: new Date('2020-12-01T12:00:00Z'),
  coursework: 'TODO',
  description: 'Extended Python and electrical engineering knowledge to my final project, an American Sign Language to English translator made from accelerometers. Interviewed Dr. Erica Knowles, assistant professor at Berklee College of Music, wrote, and self-published my article titled "Music and the Numerous Health and Social Benefits."'
}

const qcc: Education = {
  name: 'Quinsigamond Community College',
  location: 'Worcester, MA',
  startDate: new Date('2019-05-01T12:00:00Z'),
  endDate: new Date('2021-05-01T12:00:00Z'),
  coursework: 'TODO',
  description: 'Completed four college-level courses through the Early College Worcester dual-enrollment program.'
}

export const educations: Education[] = [neu, doherty, mites, qcc]

// projects
export interface Project {
  name: string
  startDate: Date
  endDate: Date
  associatedWith: string
  description: string
  position?: string
}

const dinnerParty: Project = {
  name: 'Dinner Party',
  startDate: new Date('2023-05-01T12:00:00Z'),
  endDate: new Date('2023-05-02T12:00:00Z'),
  associatedWith: 'Toast',
  description: `Toast Internal Hackathon 2023. 
  Led back-end technical designs for an application that coordinates a group’s preferences in restaurants using Toast-provided internal restaurant data and ChatGPT API. Created database schemas and exposed API endpoints using JetBrains Exposed and Dropwizard in Kotlin.`
}

const networkSec: Project = {
  name: 'Network Security Exploratory Project',
  startDate: new Date('2022-10-01T12:00:00Z'),
  endDate: new Date('2022-11-01T12:00:00Z'),
  associatedWith: 'Northeastern University',
  description: `Culminating project in the Introduction to Computer Science Research Seminar.
  Explored how devices wirelessly exchange information and used network sniffing to compromise data in a controlled environment.
  Discussed the 802.11x framework and multi-layered authentication protocols that keep data protected on the internet.`
}

const marbleSol: Project = {
  name: 'Marble Solitaire',
  startDate: new Date('2022-05-01T12:00:00Z'),
  endDate: new Date('2022-05-31T12:00:00Z'),
  associatedWith: 'Northeastern University',
  description: `Created a fully customizable marble solitaire game in Java following object-oriented design principles.
  Contains options for board sizes, hole placement, type (English, Triangle, European), and view type (console/GUI).
  Built as JAR file, the project can be executed within a Java environment.`
}

const jezzball: Project = {
  name: 'Multiplayer JezzBall',
  startDate: new Date('2021-10-01T12:00:00Z'),
  endDate: new Date('2021-11-01T12:00:00Z'),
  associatedWith: 'Northeastern University',
  description: 'Created an "n"-player game of JezzBall in Racket using big-bang and message handlers over a client-server network (to connect remote players) with working game logic for one and multiple players.'
}

const aslTranslator: Project = {
  name: 'ASL Alphabet to English Translator',
  startDate: new Date('2020-07-01T12:00:00Z'),
  endDate: new Date('2020-08-01T12:00:00Z'),
  associatedWith: 'MITES Semester',
  description: 'Created a physical prototype glove (using Adafruit M4 Metro Board and Python) that analyzes various accelerometer outputs on digits through normalization/dot product comparison and outputs a letter based on those readings against a database of values (HID keyboard).'
}

export const projects: Project[] = [dinnerParty, networkSec, marbleSol, jezzball, aslTranslator]

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
  position: 'Director of Operations',
  location: 'Boston, MA',
  description: `Volunteered as staff (set-up, load-out, general tasks) for various campus events, including Northeastern's Homecoming, Springfest Festival, and small concerts.
  Ensured events ran smoothly for thousands of students, CUP staff, and performers.`
}

const first: Organization = {
  name: 'Khoury FIRST',
  startDate: new Date('2022-10-01T12:00:00Z'),
  position: 'Mentee',
  location: 'Boston, MA',
  description: 'Northeastern University Khoury College of Computer Sciences mentorship program to support first-generation/low-income college students in continuation of education.'
}

const summerBridgeOrg: Organization = {
  name: 'Summer Bridge Scholars',
  startDate: new Date('2022-05-01T12:00:00Z'),
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

// modal types
export type ExperienceOrProject = Experience | Project
