import Button from '@mui/material/Button'
import ArrowForward from '@mui/icons-material/ArrowForward'
import { type ReactElement } from 'react'

/**
 * The 'landing' page for my website. Equivalent to nmungovan.github.io
 *
 * @returns the Element of the webpage
 */
export function LandingPage (): ReactElement {
  return (
    <div className='flex min-h-screen w-[87.5%] flex-col justify-center mx-auto text-lg sm:text-center md:text-left'>
      <h1 className='font-bold text-3xl pb-1'>Nolan Mungovan</h1>
      <h2 className='text-lg pb-4'>I&apos;m a software engineer.<br />
        I am highly interested in software development, cybersecurity, and embedded systems. <br />
      </h2>
      <Button
        className='self-center md:self-start'
        size='small'
        variant='outlined'
        href='/#/resume'
        endIcon={<ArrowForward />}
        sx={{
          color: '#292524',
          borderColor: '#292524',
          '&:hover': {
            borderColor: '#292524',
            backgroundColor: '#f5f5f4'
          }
        }}
      >
        See my work
      </Button>
    </div>
  )
}
