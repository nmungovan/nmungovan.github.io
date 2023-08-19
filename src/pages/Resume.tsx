import React, { useState, type ReactElement } from 'react'
import { ExperienceItem, ProjectItem, Title } from './Components/GridItems'
import { educations, workExperiences, organizations, projects, type ExperienceOrProject } from './Components/ResumeContents'
import { ModalContext } from './Components/ModalContext'
import { ExperienceModal } from './Components/ExperienceModal'

/**
 * 
 * @returns the React resume page of my website
 */
export function Resume (): ReactElement {
  const [modalOpen, setModalOpen] = useState<ExperienceOrProject | null>(null)

  return (
    <ModalContext.Provider value={{ modalOpen, setModalOpen }}>
    <div className='flex grid grid-cols-1 w-3/4 mx-auto'>
      <Title>Work Experience</Title>
      <div className='flex grid sm:grid-cols-1 md:grid-cols-4 my-4'>
        {workExperiences.sort((a, b) => {return b.startDate.getSeconds() - a.startDate.getSeconds()}).map((exp) => {return <ExperienceItem exp={exp} />})}
      </div>
      <Title>Education</Title>
      <div className='flex grid sm:grid-cols-1 md:grid-cols-4 my-4'>
        {educations.map((exp) => {return <ExperienceItem exp={exp} />})}
      </div>
      <Title>Organizations</Title>
      <div className='flex grid sm:grid-cols-1 md:grid-cols-4 my-4'>
        {organizations.map((exp) => {return <ExperienceItem exp={exp} />})}
      </div>
      <Title>Projects</Title>
      <div className='flex grid sm:grid-cols-1 md:grid-cols-4 my-4'>
        {projects.map((exp) => {return <ProjectItem exp={exp} />})}
      </div>
    </div>
    {(modalOpen !== null) && <ExperienceModal experience={modalOpen} />}
    </ModalContext.Provider>
  )
}
