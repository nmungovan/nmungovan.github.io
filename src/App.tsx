import React, { type ReactElement } from 'react'
import { Route, Routes } from 'react-router-dom'
import { AboutMe } from './pages/AboutMe'
import { Resume } from './pages/Resume'

function App (): ReactElement {
  return (
      <Routes>
        {/** TODO Find a way to fix this routing issue **/}
        <Route path='/' element={<Resume />} />
        <Route path='/about' element={<AboutMe />} />
        <Route path='/resume' element={<Resume />} />
      </Routes>
  )
}

export default App
