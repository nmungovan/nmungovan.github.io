import React, { type ReactElement } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Resume } from './pages/Resume'
import { Projects } from './pages/Projects'
import { ProjectDetail } from './pages/ProjectDetail'
import { LandingPage } from "./pages/LandingPage";
import { NavBar } from "./pages/Components/NavBar"
import { Footer } from "./pages/Components/Footer"

function App (): ReactElement {
  return (
      <div className='flex min-h-screen flex-col'>
        <NavBar />
        <main className='flex-1'>
        <Routes>
            {/* TODO Find a way to fix this routing issue */}
            <Route path='/' element={<LandingPage />} />
            <Route path='/resume' element={<Resume />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/projects/:slug' element={<ProjectDetail />} />
        </Routes>
        </main>
        <Footer />
      </div>
  )
}

export default App
