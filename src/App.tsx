import React from 'react'
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

function App() {
  return (
    <>
      <Background />
      
      <div className="content">
        <Nav />
        <Hero />
        <Divider />
        <Projects />
        <Divider />
        <About />
        <Divider />
        <Experience />
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
