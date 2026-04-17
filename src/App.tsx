import React from 'react'
import { Cursor } from './components/Cursor'
import { Background } from './components/Background'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Experience } from './components/Experience'
import { Divider } from './components/Divider'
import { Projects } from './components/Projects'
import { Awards } from './components/Awards'
import { Skills } from './components/Skills'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { useScrollReveal } from './hooks/useScrollReveal'

function App() {
  // Initialize the scroll reveal IntersectionObserver once on mount
  useScrollReveal()

  return (
    <>
      <Cursor />
      <Background />
      
      <div className="content">
        <Nav />
        <Hero />
        <Divider />
        <About />
        <Divider />
        <Experience />
        <Divider />
        <Projects />
        <Divider />
        <Awards />
        <Divider />
        <Skills />
        <Divider />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
