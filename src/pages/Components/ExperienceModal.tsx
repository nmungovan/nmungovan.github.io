import { Drawer, IconButton } from '@mui/material'
import React, { useContext, type ReactElement } from 'react'
import { ModalContext } from './ModalContext'
import { type Experience } from './ResumeContents'
import { ModalDates, ModalSubtitle, ModalTitle, ModalDesc } from './ModalComponents'
import CloseIcon from '@mui/icons-material/Close'

export function formatDate (start: Date, end?: Date): string {
  const startDate = start.toLocaleString('default', { month: 'long' }).concat(' ', start.getFullYear().toString())
  let endDate = 'Present'
  if (end != null) {
    if (end.getMonth() === start.getMonth() && end.getFullYear() === start.getFullYear()) return startDate
    endDate = end.toLocaleString('default', { month: 'long' }).concat(' ', end.getFullYear().toString())
  }
  return startDate.concat(' - ', endDate)
}

export function ExperienceModal ({ experience }: { experience: Experience }): ReactElement {
  const { modalOpen, setModalOpen } = useContext(ModalContext)

  return (
    <Drawer open={modalOpen !== null} onClose={() => { setModalOpen(null) }} anchor='right'>
      <DrawerHeader />
        <div className='grid grid-cols-1 w-screen md:w-auto md:px-1 max-w-xl'>
            <ModalTitle>{experience.name}</ModalTitle>
            <ModalSubtitle>{experience.position}</ModalSubtitle>
            {'startDate' in experience && <ModalDates>{formatDate(experience.startDate, experience.endDate)}</ModalDates>}
            <ModalDesc>{experience.description}</ModalDesc>
        </div>
    </Drawer>
  )
}

function DrawerHeader (): ReactElement {
  const { setModalOpen } = useContext(ModalContext)
  return (
    <div className='h-12 px-1 pt-1 bg-slate-100 content-end'>
      <IconButton className='ml-auto mr-0' aria-label='close' sx={{ width: 44, height: 44 }} onClick={() => { setModalOpen(null) }}>
        <CloseIcon />
      </IconButton>
    </div>
  )
}
