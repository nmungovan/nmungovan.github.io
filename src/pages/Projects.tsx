import React, { type ReactElement } from 'react'
import { Link } from 'react-router-dom'
import { projects } from './Components/ResumeContents'
import { Title } from './Components/GridItems'
import { formatDate } from './Components/ExperienceModal'

export function Projects (): ReactElement {
  return (
    <div className='grid grid-cols-1 w-full px-4 md:w-3/4 mx-auto'>
      <Title>Projects</Title>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-4'>
        {projects.map((p) => (
          <Link key={p.slug} to={`/projects/${p.slug}`} className='flex flex-col text-left bg-stone-800 text-slate-50 p-5 transition ease-in-out md:hover:scale-105 duration-300 active:bg-stone-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-800'>
            <span className='font-semibold'>{p.name}</span>
            <span className='text-sm pt-1'>{p.associatedWith} · {formatDate(p.startDate, p.endDate)}</span>
            {p.tech != null && <span className='text-sm pt-3 text-slate-300'>{p.tech.join(' · ')}</span>}
          </Link>
        ))}
      </div>
    </div>
  )
}
