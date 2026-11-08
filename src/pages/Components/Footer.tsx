import { type ReactElement } from 'react'

export const Footer = (): ReactElement => {
  return (
    <>
      <hr className='mt-10' />
      <footer className='flex justify-center px-5 py-5'>
        <ul className='flex'>
          <li className='px-5'>
            <a href="https://www.linkedin.com/in/nolan-mungovan/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </li>
          <li className='px-5'>
            <a href="https://github.com/nmungovan" target="_blank" rel="noopener noreferrer">GitHub</a>
          </li>
          <li className='px-5'><a href="/#/resume">Resume</a></li>
        </ul>
      </footer>
    </>
  )
}
