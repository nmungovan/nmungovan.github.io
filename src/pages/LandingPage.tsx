import React, { type ReactElement } from 'react'
import nolanImage from './../../src/img/nolan.jpeg';

/**
 * Function to calculate how old I am.
 *
 * @returns my age, in years floored.
 */
function calculateAge (): string {
  const diffMs = Date.now() - new Date('2003-09-22').getTime()
  const diffYears = Math.floor((diffMs) / (1000 * 60 * 60 * 24 * 365))
  return diffYears.toString()
}

/**
 * The 'landing' page for my website. Equivalent to nmungovan.github.io
 *
 * @returns the Element of the webpage
 */
export function LandingPage (): ReactElement {
  return (<div className='grid grid-cols-2'>
      <div className='grid grid-cols-1 justify-items-center'>
          <h1 className='pt-14 pb-8 text-4xl font-bold'>Hey, I&apos;m Nolan.</h1>
          <img className='w-1/2 hover:scale-105 transition ease-in-out' alt='Me!' src={nolanImage} />
      </div>
      <h2 className='w-2/3 justify-start max-w-fit m-auto text-lg'>I&apos;m a {calculateAge()} year-old software engineer. <br />
        I am highly interested in software development, cybersecurity, and embedded systems. <br />
        Feel free to check out my <a href='/#/resume'>resume</a> and the rest of my website and get to know me better! Thanks for visiting! </h2>
    </div>)
}
