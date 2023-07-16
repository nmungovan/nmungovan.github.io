import React, { type ReactElement } from 'react'

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
 * The 'landing' page for my website. Equivalent to nmungovan.github.io/index
 *
 * @returns the Element of the webpage
 */
export function LandingPage (): ReactElement {
  return (<div className='flex grid grid-cols-2 gap-x-15 gap-y-15 justify-items-center'>
        <>Hey, I&apos;m Nolan.</>
        <div className=''>I&apos;m a {calculateAge()} year-old aspiring Software Engineer. <br />
        I am rather interested in software development, cybersecurity (network/systems security), and embedded systems. <br />
        Feel free to explore my website and get to know me better! Thanks for visiting! </div>
    </div>)
}
