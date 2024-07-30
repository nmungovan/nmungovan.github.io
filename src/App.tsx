import React, { type ReactElement } from 'react'
import { Route, Routes } from 'react-router-dom'
import { AboutMe } from './pages/AboutMe'
import { Resume } from './pages/Resume'
import { LandingPage } from "./pages/LandingPage";
import { NavBar } from "./pages/Components/NavBar"

function App (): ReactElement {
  return (
      <>
        <NavBar />
        <Routes>
            {/* TODO Find a way to fix this routing issue */}
            <Route path='/' element={<LandingPage />} />
            <Route path='/about' element={<AboutMe />} />
            <Route path='/resume' element={<Resume />} />
        </Routes>
      </>
  )
}

export default App
