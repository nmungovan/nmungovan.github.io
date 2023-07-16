import { type Dispatch, createContext } from 'react'
import { type ExperienceOrProject } from './ResumeContents'

export const ModalContext = createContext<{
  modalOpen: ExperienceOrProject | null
  setModalOpen: Dispatch<React.SetStateAction<ExperienceOrProject | null>>
}>({
  modalOpen: null,
  setModalOpen: () => undefined
})
