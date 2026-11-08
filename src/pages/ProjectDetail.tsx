import { type ReactElement } from 'react'
import { Link, useParams } from 'react-router-dom'
import { projects } from './Components/ResumeContents'
import { formatDate } from './Components/ExperienceModal'
import { ModalDates, ModalDesc, ModalSubtitle, ModalTitle } from './Components/ModalComponents'

export function ProjectDetail (): ReactElement {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  if (project === undefined) {
    return (
      <div className='w-full px-4 md:w-3/4 mx-auto py-6'>
        <h1 className='font-bold text-xl'>Project not found</h1>
        <Link to='/projects' className='underline'>Back to projects</Link>
      </div>
    )
  }

  return (
    <div className='w-full px-4 md:w-3/4 max-w-3xl mx-auto py-6'>
      <Link to='/projects' className='underline px-5'>&larr; All projects</Link>
      <ModalTitle>{project.name}</ModalTitle>
      <ModalSubtitle>{project.associatedWith}</ModalSubtitle>
      <ModalDates>{formatDate(project.startDate, project.endDate)}</ModalDates>
      {project.tech != null && (
        <ul className='flex flex-wrap gap-2 px-5 pt-3' aria-label='Technologies'>
          {project.tech.map((t) => <li key={t} className='bg-stone-800 text-slate-50 text-sm px-3 py-1'>{t}</li>)}
        </ul>
      )}
      <ModalDesc>{project.description}</ModalDesc>
      {project.links != null && (
        <ul className='px-5 pt-3'>
          {project.links.map((l) => <li key={l.url}><a className='underline' href={l.url}>{l.label}</a></li>)}
        </ul>
      )}
    </div>
  )
}
