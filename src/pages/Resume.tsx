import React, { useState, type ReactElement } from 'react'
import { ExperienceItem, ProjectItem } from './Components/GridItems'
import { educations, workExperiences, organizations, projects, type ExperienceOrProject } from './Components/ResumeContents'
import { ModalContext } from './Components/ModalContext'
import { ExperienceModal } from './Components/ExperienceModal'

export function Resume (): ReactElement {
  const [modalOpen, setModalOpen] = useState<ExperienceOrProject | null>(null)

  return (
    <ModalContext.Provider value={{ modalOpen, setModalOpen }}>
    <div className='flex grid grid-cols-1 w-3/4 mx-auto'>
      Work Experience
      <div className='flex grid sm:grid-cols-1 md:grid-cols-4 my-4'>
        <ExperienceItem exp={workExperiences[0]} />
        <ExperienceItem exp={workExperiences[1]} />
        <ExperienceItem exp={workExperiences[2]} />
        <ExperienceItem exp={workExperiences[3]} />
      </div>
      Education
      <div className='flex grid sm:grid-cols-1 md:grid-cols-4 my-4'>
        <ExperienceItem exp={educations[0]} />
        <ExperienceItem exp={educations[1]} />
        <ExperienceItem exp={educations[2]} />
        <ExperienceItem exp={educations[3]} />
      </div>
      Organizations
      <div className='flex grid sm:grid-cols-1 md:grid-cols-4 my-4'>
        <ExperienceItem exp={organizations[0]} />
        <ExperienceItem exp={organizations[1]} />
        <ExperienceItem exp={organizations[2]} />
        <ExperienceItem exp={organizations[3]} />
        <ExperienceItem exp={organizations[4]} />
        <ExperienceItem exp={organizations[5]} />
      </div>
      Projects
      <div className='flex grid sm:grid-cols-1 md:grid-cols-4 my-4'>
        <ProjectItem exp={projects[0]} />
        <ProjectItem exp={projects[1]} />
        <ProjectItem exp={projects[2]} />
        <ProjectItem exp={projects[3]} />
      </div>
    </div>
    {(modalOpen !== null) && <ExperienceModal experience={modalOpen} />}
    </ModalContext.Provider>
  )
}

/**
 * <h3>Software Projects</h3>
    <h4>Spotify Playlist Creator (In Progress)</h4>
    <p>Working with client/server authentication through Spotify's Web API and using object-oriented design in Python to create a working playlist creator
      using SOLID principles.</p>
    <h4>Marble Solitaire</h4>
    <a href="https://github.com/nmungovan/marble-solitaire-cs3500">Link</a>
    <p>Created a fully customizable marble solitaire game in Java following object-oriented design principles. Contains options for board sizes, hole
      placement, type (English, Triangle, European), and view type (console/GUI). Built as JAR file, the project can be executed within a Java environment.</p>
    <h4>Multiplayer JezzBall</h4>
    <a href="https://github.com/nmungovan/multiplayer-jezzball-cs2500a">Link</a>
    <p>Created an "n"-player game of JezzBall in Racket using big-bang and message handlers over a client-server network (to connect remote players) with
      working game logic for one and multiple players.</p>
    <h4>ASL Alphabet to English Translator</h4>
    <a href="https://drive.google.com/file/d/1ZNsXIzvjVcgecxfeB7EHYy0y39tuzqn1/view?usp=sharing">Demo</a>
    <p>Created a physical prototype glove (using Adafruit M4 Metro Board and Python) that analyzes various accelerometer outputs on digits through
      normalization/dot product comparison and outputs a letter based on those readings against a database of values (HID keyboard).</p>

    <h3>Education</h3>
    <h4>Northeastern University, Khoury College of Computer Sciences (Boston, MA)</h4>
    <p>Pursuing a Bachelor of Science in Computer Science with a current concentration in Systems along with a minor in Management Information Systems.</p>
    <p>GPA: 3.84/4.0, Expected Graduation: May 2025</p>
    <h4>Doherty Memorial High School, Engineering and Technology Academy (Worcester, MA)</h4>
    <p>Graduated as valedictorian from the Engineering and Technology Academy at Doherty Memorial High School, a rigorous program with a focus on science,
      math, and engineering. Successfully completed college-level engineering courses through Project Lead the Way to further knowledge of engineering
      design and related fields.</p>

    <h3>Experience</h3>
    <h4>Toast, Software Engineering Co-op (Boston, MA)</h4>
    <p>Incoming software engineering co-op at Toast for January-June 2023.</p>
    <h4>Other Experiences</h4>
    <h5>Northeastern University College of Professional Studies, Data Analyst (Boston, MA)</h5>
    <p>Compile, analyze, and share data on measures of academic performance in forty degree programs. Conduct cursory research to reinforce best practices
      for academic quality, assessment strategies, and curriculum design.</p>
    <h5>Starbucks, Partner (Boston/Worcester, MA)</h5>
    <p>Hand-crafted custom drinks/food items, managed inventory stock, and created connections in high-volume stores to create the “third place” for
      customers. Successfully and efficiently trained 10+ baristas in all positions. Awarded "Partner of the Quarter" for Summer 2021 due to exemplary
      work ethic and character.</p>
    <h5>Northeastern University, Summer Bridge Peer Mentor (Boston, MA)</h5>
    <p>Built connections, advised, and facilitated team-building activities with incoming first-year Khoury College of Computer Sciences students to
      provide insight into the shift to college life and computer science academia.</p>

    <h3>Awards</h3>
    <p>Dean's Scholarship, Khoury College of Computer Sciences (August 2022)</p>
    <p>Dean's List, Khoury College of Computer Sciences (July 2022)</p>
    <p>AP Scholar with Distinction, College Board (July 2021)</p>
    <p>Class Valedictorian, Doherty Memorial High School (May 2021)</p>
    <p>AP + PLTW Student Achievement in Engineering, College Board/PLTW (March 2021)</p>
    <p>WCSA Scholar, Worcester County Superintendent's Association (December 2020)</p>
    <p>Innovation and Creativity Award, Rochester Institute of Technology (May 2020)</p>

    <h3>Miscellaneous</h3>
    <h4>Engineering Projects</h4>
    <h5>Measuring Spoon Organizer</h5>
    <p>The final project for the PLTW course, Engineering Design and Development. Created the concept for a magnetic holder for measuring spoons,
      created a 3D/physical prototype, and designed a business model to mass-produce and sell our product.</p>
    <h5>Redesigning Kelley Square</h5>
    <p>The final project for the PLTW course, Principles of Engineering, where we conceptually redesigned the infamous Kelley Square in Worcester,
      MA into a simple four-way intersection using traffic lights. Designed a functioning traffic light prototype using VEX Robotics equipment and
      C programming language.</p>
 *
 */
