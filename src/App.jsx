import React from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Technologies from './components/Technologies.jsx'
import Projects from './components/Projects.jsx'
import Experience from './components/MyJourney.jsx'
import Contact from './components/Contact.jsx'
import FireflyBackground from './components/FireflyBackground.jsx'

const App = () => {
  return (
    <div className='overflow-x-hidden text-stone-300 antialiased'>
      <div className='fixed inset-0 -z-10'>
        <div className="relative h-full w-full bg-slate-950">
          <FireflyBackground />
          <div className="absolute inset-0" style={{background: 'radial-gradient(circle 500px at 50% 200px,#3e3e3e,transparent)'}} />
        </div>
      </div>

      <div className='container mx-auto px-8' style={{ position: 'relative', zIndex: 1 }}>
        <Navbar />
        <Hero />
        <Technologies />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </div>
  )
}

export default App
