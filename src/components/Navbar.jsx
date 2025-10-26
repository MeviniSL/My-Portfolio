import React from 'react'
import logo from '../assets/Mevini.webp'
import './CSS/Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="/" aria-label="Home">
          <img src={logo} alt="logo" className="navbar-logo" width={50} height={33} />
        </a>
      </div>

      
    </nav>
  )
}

export default Navbar
