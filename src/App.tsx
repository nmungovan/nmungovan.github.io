import React, { type ReactElement } from 'react'
import { LandingPage } from './pages/LandingPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AboutMe } from './pages/AboutMe'
import { Resume } from './pages/Resume'

function App (): ReactElement {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/about' element={<AboutMe />} />
        <Route path='/resume' element={<Resume />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
