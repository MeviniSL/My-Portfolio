import React, { useState, useEffect } from 'react'
import { CONTACT } from '../constants'
import { motion } from 'framer-motion'
import './CSS/Contact.css'

const Contact = () => {
  const { address, phoneNo, email, social } = CONTACT || {}
 

  return (
    <section id="contact" className="contact">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="contact-heading"
      >
        Get In Touch
      </motion.h2>

      <div className="contact-grid">
        {/* Column 1 — Basic info & quick links */}
        <div className="contact-column contact-basic">
          <h3 className="contact-sub">Basic Information</h3>
          <p className="contact-line strong">{CONTACT?.name || 'M.D.N Silva'}</p>
          <p className="contact-line">{CONTACT?.tagline || 'Software Engineer | Web Developer | AI/ML Enthusiast'}</p>
          {address && <p className="contact-line">{address}</p>}

          <h3 className="contact-sub">Quick Navigation</h3>
          <ul className="contact-nav">
            <li><a href="#home" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>About</a></li>
            <li><a href="#technologies">Technologies</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#journey">My Journey</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Column 2 — Contact details & social */}
        <div className="contact-column contact-details">
          <h3 className="contact-sub">Contact Details</h3>

          <p className="contact-line">
            Email:&nbsp;
            <a className="contact-link" href={`mailto:${email || 'mevini@example.com'}`}>
              {email || 'mevini@example.com'}
            </a>
          </p>

          {phoneNo && (
            <p className="contact-line">
              Phone:&nbsp;
              <a className="contact-link" href={`tel:${phoneNo}`}>{phoneNo}</a>
            </p>
          )}

         

          <h3 className="contact-sub">Social</h3>
          <div className="social-links">
            <a href={(social && social.linkedin) || 'https://www.linkedin.com/in/mevini-silva-220b51286/'} target="_blank" rel=" ">🔗 LinkedIn</a>
            <a href={(social && social.github) || 'https://github.com/MeviniSL'} target="_blank" rel=" ">🐙 GitHub</a>
            <a href={(social && social.twitter) || 'https://www.facebook.com/share/1DuCdUVGcN/?mibextid=wwXIfr'} target="_blank" rel="">📘 Facebook </a>
          </div>

          <div className="contact-extra">
           

            <p className="contact-tag"><i>Made with ❤️ and lots of coffee.</i></p>
          </div>
        </div>
      </div>

      <footer className="contact-footer">
        <small>© {new Date().getFullYear()} {CONTACT?.name || 'Mevini Silva'}. All rights reserved. — Designed & Built by {CONTACT?.name || 'me'}</small>
      </footer>
    </section>
  )
}

export default Contact