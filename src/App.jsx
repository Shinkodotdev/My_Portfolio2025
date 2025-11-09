import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar.jsx'
import Home from './Pages/Home.jsx'
import Projects from './Pages/Projects.jsx';
import MotivIt from './Pages/MotivIT.jsx';
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/motivit" element={<MotivIt />} />
        <Route path="*" element={<div className='container mx-auto py-50 m-20 items-center'><h1 className='text-center font-extrabold text-2xl'>404 - Page Not Found</h1></div>} />
      </Routes>
    </Router>
  )
}

export default App
