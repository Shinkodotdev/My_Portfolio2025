import React from 'react'
import About from '../sections/About.jsx'
import Projects from '../sections/Projects.jsx'
import Experience from '../sections/Experience.jsx'
import Certifications from '../sections/Certifications.jsx'
import Contact from '../sections/Contact.jsx'
import Footer from '../sections/Footer.jsx'
import Hero from '../sections/Hero.jsx'
const Home = () => {
  return (
    <>
    <Hero/>
      <About />
      <Certifications />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </>
  )
}

export default Home
