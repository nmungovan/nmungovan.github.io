import Button from '@mui/material/Button'
import ArrowForward from '@mui/icons-material/ArrowForward'
import { type ReactElement } from 'react'
import { Link } from 'react-router-dom'
import { interests, projects, skillGroups, workExperiences } from './Components/ResumeContents'

const FEATURED_SLUGS = ['progressive-meshing', 'network-security', 'asl-translator']

const allSkills = skillGroups.flatMap((g) => g.skills)

const buttonSx = {
  color: '#292524',
  borderColor: '#292524',
  '&:hover': {
    borderColor: '#292524',
    backgroundColor: '#f5f5f4'
  }
}

/**
 * The 'landing' page for my website. Equivalent to nmungovan.github.io
 *
 * @returns the Element of the webpage
 */
export function LandingPage (): ReactElement {
  const current = workExperiences.find((w) => w.endDate == null)
  const featured = FEATURED_SLUGS
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter((p): p is NonNullable<typeof p> => p != null)

  return (
    <div className='w-[87.5%] md:w-3/4 mx-auto pt-12 pb-2 sm:text-center md:text-left'>
      <h1 className='font-bold text-3xl pb-1'>Nolan Mungovan</h1>
      <h2 className='text-lg pb-2'>
        I&apos;m a software engineer.<br />
        My focus areas are full-stack software development, cybersecurity, and embedded systems.
      </h2>
      {current != null && (
        <p className='text-stone-600 pb-4'>
          Currently {current.position} at {current.name}.
        </p>
      )}
      <div className='flex flex-wrap gap-3 justify-start sm:justify-center md:justify-start'>
        <Button size='small' variant='outlined' href='/#/resume' endIcon={<ArrowForward />} sx={buttonSx}>
          View resume
        </Button>
        <Button size='small' variant='outlined' href='/#/projects' endIcon={<ArrowForward />} sx={buttonSx}>
          View projects
        </Button>
      </div>

      {featured.length > 0 && (
        <section className='pt-12' aria-labelledby='featured-projects'>
          <h2 id='featured-projects' className='font-semibold text-xl pb-3'>Featured projects</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4 text-left'>
            {featured.map((p) => (
              <Link key={p.slug} to={`/projects/${p.slug}`} className='flex flex-col bg-stone-800 text-slate-50 p-5 transition ease-in-out md:hover:scale-105 duration-300 active:bg-stone-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-800'>
                <span className='font-semibold'>{p.name}</span>
                <span className='text-sm pt-1'>{p.associatedWith}</span>
                {p.tech != null && <span className='text-sm pt-3 text-slate-300'>{p.tech.join(' · ')}</span>}
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className='pt-12' aria-labelledby='interests'>
        <h2 id='interests' className='font-semibold text-xl pb-3'>Interests</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 text-left'>
          {interests.map((i) => (
            <div key={i.title}>
              <h3 className='font-semibold'>{i.title}</h3>
              <p className='text-stone-600 pt-1'>{i.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className='pt-12' aria-labelledby='skills'>
        <h2 id='skills' className='font-semibold text-xl pb-3'>Skills</h2>
        <div
          className='overflow-hidden'
          style={{ maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)' }}
        >
          <div className='flex w-max animate-marquee hover:[animation-play-state:paused] motion-reduce:w-auto motion-reduce:animate-none motion-reduce:flex-wrap'>
            {[false, true].map((duplicate) => (
              <ul
                key={String(duplicate)}
                aria-hidden={duplicate ? true : undefined}
                className={`flex shrink-0 gap-2 pr-2 motion-reduce:flex-wrap ${duplicate ? 'motion-reduce:hidden' : ''}`}
              >
                {allSkills.map((skill) => (
                  <li key={skill} className='bg-stone-200 text-stone-800 text-sm px-3 py-1 rounded whitespace-nowrap'>{skill}</li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
