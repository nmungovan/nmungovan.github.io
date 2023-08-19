import React, { type ReactElement, type PropsWithChildren } from 'react'
import { type Experience, type Project } from './ResumeContents'
import { ModalContext } from './ModalContext'

function formatDate (start: Date, end?: Date): string {
  const startDate = (start.getMonth() + 1).toString() + '/' + start.getFullYear().toString()
  let endDate = 'Present'
  if (end != null) {
    endDate = (end.getMonth() + 1).toString().concat('/', end.getFullYear().toString())
  }
  return startDate.concat(' - ', endDate)
}

export function Title ({ children }: PropsWithChildren<unknown>) {
  return (<h1 className='font-bold text-xl mt-3'>{children}</h1>)
}

export function GridItem ({ children }: PropsWithChildren<unknown>): ReactElement {
  return (<div className='px-5 justify-center'>{children}</div>)
}

export function Subtitle ({ children }: PropsWithChildren<unknown>): ReactElement {
  return (<h2 className='font-semibold text-left px-5 pt-3'>{children}</h2>)
}

export function RightItem ({ children }: PropsWithChildren<unknown>): ReactElement {
  return (<h2 className='font-normal text-right pr-4 truncate pt-3'>{children}</h2>)
}

export function LeftItem ({ children }: PropsWithChildren<unknown>): ReactElement {
  return (<h2 className='font-normal text-left pl-2'>{children}</h2>)
}

export function ExperienceItem ({ exp }: { exp: Experience }): ReactElement {
  const { setModalOpen } = React.useContext(ModalContext)
  return (
    <div className='bg-stone-800 text-slate-50 sm:mx-2 md:mx-5 mb-10 overflow-auto pb-20 hover:scale-105 transition ease-in-out hover:scale-105 duration-300' onClick={() => { setModalOpen(exp) }}>
        <div className='grid grid-cols-2'>
            <Subtitle>{exp.name}</Subtitle>
            <RightItem>{exp.location}</RightItem>
        </div>
        <GridItem>{formatDate(exp.startDate, exp.endDate)}</GridItem>
    </div>)
}

export function ProjectItem ({ exp }: { exp: Project }): ReactElement {
  const { setModalOpen } = React.useContext(ModalContext)
  return (
    <div className='bg-stone-800 text-slate-50 sm:mx-2 md:mx-5 mb-20 overflow-auto pb-20 transition ease-in-out hover:scale-105 duration-300' onClick={() => { setModalOpen(exp) }}>
        <div className='grid grid-cols-2'>
            <Subtitle>{exp.name}</Subtitle>
        </div>
        <GridItem>{formatDate(exp.startDate, exp.endDate)}</GridItem>
    </div>)
}
