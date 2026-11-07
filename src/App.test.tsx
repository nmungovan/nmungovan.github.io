import { render, screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import App from './App'
import { workExperiences } from './pages/Components/ResumeContents'

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

  it('renders the resume sections at /resume', () => {
    renderAt('/resume')
    for (const title of ['Work Experience', 'Education', 'Organizations', 'Projects']) {
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
})
