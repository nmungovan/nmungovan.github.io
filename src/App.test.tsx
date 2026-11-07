import React from 'react'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import App from './App'

test('renders the landing page with a link to the resume', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  )
  expect(screen.getByRole('heading', { name: 'Nolan Mungovan' })).toBeInTheDocument()
  expect(screen.getByRole('link', { name: /see my work/i })).toHaveAttribute('href', '/#/resume')
})

test('renders the resume page', () => {
  render(
    <MemoryRouter initialEntries={['/resume']}>
      <App />
    </MemoryRouter>
  )
  expect(screen.getByRole('heading', { name: 'Work Experience' })).toBeInTheDocument()
})
