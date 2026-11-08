import { render, screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import App from './App'
import { projects, workExperiences } from './pages/Components/ResumeContents'

function renderAt (path: string): void {
  render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>
  )
}

describe('App', () => {
  it('renders the landing page at /', () => {
    renderAt('/')
    expect(screen.getByRole('heading', { name: 'Nolan Mungovan' })).toBeInTheDocument()
  })

  it('renders footer links on every page', () => {
    renderAt('/projects')
    const footer = screen.getByRole('contentinfo')
    expect(within(footer).getByRole('link', { name: 'LinkedIn' })).toHaveAttribute('href', 'https://www.linkedin.com/in/nolan-mungovan/')
    expect(within(footer).getByRole('link', { name: 'GitHub' })).toHaveAttribute('href', 'https://github.com/nmungovan')
    expect(within(footer).getByRole('link', { name: 'Resume' })).toHaveAttribute('href', '/#/resume')
  })

  it('renders the resume sections at /resume', () => {
    renderAt('/resume')
    for (const title of ['Work Experience', 'Education', 'Organizations']) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
    }
  })

  it('opens and closes the detail drawer when a card is clicked', async () => {
    const user = userEvent.setup()
    renderAt('/resume')
    // pick a work experience from the data so content edits don't break the test
    const { name, position } = workExperiences[1]

    await user.click(screen.getByRole('button', { name: new RegExp(name) }))

    const close = await screen.findByRole('button', { name: 'close' })
    expect(within(document.body).getByRole('heading', { name: position })).toBeInTheDocument()

    await user.click(close)
    await waitFor(() => { expect(screen.queryByRole('button', { name: 'close' })).not.toBeInTheDocument() })
  })

  it('lists projects and renders a project detail page', () => {
    renderAt('/projects')
    expect(screen.getByRole('heading', { name: 'Projects' })).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: new RegExp(projects[0].name) }).length).toBeGreaterThan(0)
  })

  it('renders a project at /projects/:slug and a fallback for unknown slugs', () => {
    renderAt(`/projects/${projects[0].slug}`)
    expect(screen.getByRole('heading', { name: projects[0].name })).toBeInTheDocument()
  })

  it('shows not-found for an unknown project slug', () => {
    renderAt('/projects/nope')
    expect(screen.getByRole('heading', { name: 'Project not found' })).toBeInTheDocument()
  })
})
