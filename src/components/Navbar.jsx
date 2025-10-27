import React, { useState } from 'react'
import logo from '../assets/Mevini.webp'
import './CSS/Navbar.css'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="/" aria-label="Home" onClick={() => setOpen(false)}>
          {/* remove width/height so CSS controls size */}
          <img src={logo} alt="logo" className="navbar-logo" />
        </a>
      </div>

      <button
        className="navbar-burger"
        aria-label="Toggle menu"
        aria-expanded={open}
        aria-controls="primary-navigation"
        onClick={() => setOpen((s) => !s)}
      >
        <span className="burger-bar" />
        <span className="burger-bar" />
        <span className="burger-bar" />
      </button>

      <ul
        id="primary-navigation"
        className={`nav-links ${open ? 'open' : ''}`}
        role="menubar"
      >
        <li role="none"><a role="menuitem" href="#about" onClick={() => setOpen(false)}>About</a></li>
        <li role="none"><a role="menuitem" href="#technologies" onClick={() => setOpen(false)}>Technologies</a></li>
        <li role="none"><a role="menuitem" href="#projects" onClick={() => setOpen(false)}>My Projects</a></li>
        <li role="none"><a role="menuitem" href="#journey" onClick={() => setOpen(false)}>My Journey</a></li>
        <li role="none"><a role="menuitem" href="#contact" onClick={() => setOpen(false)}>Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
