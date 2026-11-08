import React, { useState, type ReactElement } from 'react'
import { ExperienceItem, Title } from './Components/GridItems'
import { educations, workExperiences, organizations, type Experience } from './Components/ResumeContents'
import { ModalContext } from './Components/ModalContext'
import { ExperienceModal } from './Components/ExperienceModal'

/**
 * 
 * @returns the React resume page of my website
 */
export function Resume (): ReactElement {
  const [modalOpen, setModalOpen] = useState<Experience | null>(null)

  return (
    <ModalContext.Provider value={{ modalOpen, setModalOpen }}>
    <div className='grid grid-cols-1 w-full px-4 md:w-3/4 mx-auto'>
      <Title>Work Experience</Title>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-4'>
        {workExperiences.map((exp) => {return <ExperienceItem key={`${exp.name}-${exp.startDate.toISOString()}`} exp={exp} />})}
      </div>
      <Title>Education</Title>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-4'>
        {educations.map((exp) => {return <ExperienceItem key={exp.name} exp={exp} />})}
      </div>
      <Title>Organizations</Title>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-4'>
        {organizations.map((exp) => {return <ExperienceItem key={`${exp.name}-${exp.startDate.toISOString()}`} exp={exp} />})}
      </div>
    </div>
    {(modalOpen !== null) && <ExperienceModal experience={modalOpen} />}
    </ModalContext.Provider>
  )
}
