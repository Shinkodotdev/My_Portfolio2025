import React from 'react'
import Hero from './sections/Hero.jsx'
import About from './sections/About.jsx'
import Me from './sections/Me.jsx'
import Navbar from './components/Navbar.jsx'
import Projects from './sections/Projects.jsx'
import Experience from './sections/Experience.jsx'
import Testimonials from './sections/Testimonials.jsx'
import Contact from './sections/Contact.jsx'
import Footer from './sections/Footer.jsx'
const App = () => {
  return (
    <>
        <Navbar />
        <Hero />
        <About /> 
        <Projects />
        <Me />
        <Experience />
        <Testimonials />
        <Contact />
        <Footer />    
    </>
  )
}

export default App