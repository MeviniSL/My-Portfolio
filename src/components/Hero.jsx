// ...existing code...
import React, { useState, useEffect } from 'react'
import profilePic from '../assets/Mevini_Silva.webp'
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa'
import { motion } from 'framer-motion'
import './CSS/Hero.css'

const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, staggerChildren: 0.5 },
  },
}

const childVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
}

const phrases = [
 'Frontend Developer',
    'Backend Developer',
    'Full Stack Developer',
    'Software Developer', 
]

const HERO_CONTENT =
  "Passionate about AI and machine learning, I am constantly exploring how data and algorithms can drive smarter solutions. Currently, I’m focusing on web development and software engineering, developing applications that blend performance, usability, and creativity. My goal is to leverage my AI knowledge and programming skills to build meaningful, real-world projects."

const Hero = () => {
  const [text, setText] = useState('')
  const [index, setIndex] = useState(0)
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex % phrases.length]
    const speed = isDeleting ? 50 : 100

    const tick = setTimeout(() => {
      const nextIndex = isDeleting ? index - 1 : index + 1
      setText(currentPhrase.slice(0, nextIndex))
      setIndex(nextIndex)

      if (!isDeleting && nextIndex === currentPhrase.length) {
        // pause before deleting
        setTimeout(() => setIsDeleting(true), 800)
      } else if (isDeleting && nextIndex === 0) {
        setIsDeleting(false)
        setPhraseIndex((p) => (p + 1) % phrases.length)
      }
    }, speed)

    return () => clearTimeout(tick)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, isDeleting, phraseIndex])

  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-left">
          <div className="hero-image-wrap">
            <motion.img
              src={profilePic}
              alt="Mevini Silva"
              className="hero-image"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            />
          </div>
        </div>

        <div className="hero-right">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="hero-content"
          >
             <motion.p variants={childVariants} className="hello-text">
              Hello , I ' m
            </motion.p>
            <motion.h2 variants={childVariants} className="hero-title">
              Mevini Silva
            </motion.h2>

            <motion.span variants={childVariants} className="hero-subtitle typing">
              {text}
              <span className="cursor" aria-hidden="true" />
            </motion.span>

            <motion.p variants={childVariants} className="hero-desc">
              {HERO_CONTENT}
            </motion.p>
            <div className="navbar-actions" role="navigation" aria-label="social links">
                    <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="nav-icon">
                      <FaLinkedin />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="nav-icon">
                      <FaGithub />
                    </a>
                     <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="nav-icon">
                      <FaFacebook />
                    </a>
                  </div>

            <motion.a
              variants={childVariants}
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="hero-btn"
            >
              Download Resume
            </motion.a>

            
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero