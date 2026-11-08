import React, { type ReactElement, type PropsWithChildren } from 'react'
import { type Experience } from './ResumeContents'
import { ModalContext } from './ModalContext'

function formatDate (start: Date, end?: Date): string {
  const startDate = (start.getMonth() + 1).toString() + '/' + start.getFullYear().toString()
  let endDate = 'Present'
  if (end != null) {
    if (end.getMonth() === start.getMonth() && end.getFullYear() === start.getFullYear()) return startDate
    endDate = (end.getMonth() + 1).toString().concat('/', end.getFullYear().toString())
  }
  return startDate.concat(' - ', endDate)
}

export function Title ({ children }: PropsWithChildren<unknown>): ReactElement {
  return (<h1 className='font-bold text-xl mt-3'>{children}</h1>)
}

export function GridItem ({ children }: PropsWithChildren<unknown>): ReactElement {
  return (<div className='px-5 justify-center'>{children}</div>)
}

export function Subtitle ({ children }: PropsWithChildren<unknown>): ReactElement {
  return (<div className='font-semibold text-left px-5 pt-3'>{children}</div>)
}

export function RightItem ({ children }: PropsWithChildren<unknown>): ReactElement {
  return (<div className='font-normal text-left px-5 pt-1'>{children}</div>)
}

export function LeftItem ({ children }: PropsWithChildren<unknown>): ReactElement {
  return (<h2 className='font-normal text-left pl-2'>{children}</h2>)
}

export function ExperienceItem ({ exp }: { exp: Experience }): ReactElement {
  const { setModalOpen } = React.useContext(ModalContext)
  return (
    <button type='button' className='w-full flex flex-col justify-start items-stretch text-left bg-stone-800 text-slate-50 mb-4 overflow-hidden pb-6 md:pb-12 transition ease-in-out md:hover:scale-105 duration-300 cursor-pointer active:bg-stone-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-800' onClick={() => { setModalOpen(exp) }}>
        <div className='grid grid-cols-1'>
            <Subtitle>{exp.name}</Subtitle>
            <RightItem>{exp.location}</RightItem>
        </div>
        {'startDate' in exp && <GridItem>{formatDate(exp.startDate, exp.endDate)}</GridItem>}
    </button>)
}
