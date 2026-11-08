import { type Dispatch, createContext } from 'react'
import { type Experience } from './ResumeContents'

export const ModalContext = createContext<{
  modalOpen: Experience | null
  setModalOpen: Dispatch<React.SetStateAction<Experience | null>>
}>({
  modalOpen: null,
  setModalOpen: () => undefined
})
