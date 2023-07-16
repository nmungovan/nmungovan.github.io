import { Drawer, IconButton } from '@mui/material'
import React, { useContext, type ReactElement } from 'react'
import { ModalContext } from './ModalContext'
import { type ExperienceOrProject } from './ResumeContents'
import { ModalDates, ModalSubtitle, ModalTitle, ModalDesc } from './ModalComponents'
import CloseIcon from '@mui/icons-material/Close'

function formatDate (start: Date, end?: Date): string {
  const startDate = start.toLocaleString('default', { month: 'long' }).concat(' ', start.getFullYear().toString())
  let endDate = 'Present'
  if (end != null) {
    endDate = end.toLocaleString('default', { month: 'long' }).concat(' ', end.getFullYear().toString())
  }
  return startDate.concat(' - ', endDate)
}

export function ExperienceModal ({ experience }: { experience: ExperienceOrProject }): ReactElement {
  const { modalOpen, setModalOpen } = useContext(ModalContext)

  return (
    <Drawer open={modalOpen !== null} onClose={() => { setModalOpen(null) }} anchor='right'>
      <DrawerHeader />
        <div className='grid grid-cols-1 sm:w-screen md:w-auto md:px-1 max-w-xl'>
            <ModalTitle>{experience.name}</ModalTitle>
            <ModalSubtitle>{experience.position}</ModalSubtitle>
            <ModalDates>{formatDate(experience.startDate, experience.endDate)}</ModalDates>
            <ModalDesc>{experience.description}</ModalDesc>
        </div>
    </Drawer>
  )
}

function DrawerHeader (): ReactElement {
  const { setModalOpen } = useContext(ModalContext)
  return (
    <div className='h-12 px-1 pt-1 bg-slate-100 content-end'>
      <IconButton className='ml-auto mr-0' aria-label='close' size='medium' onClick={() => { setModalOpen(null) }}>
        <CloseIcon fontSize='inherit' />
      </IconButton>
    </div>
  )
}
