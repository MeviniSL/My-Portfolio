import React from 'react'
import { PROJECTS } from '../constants'
import { motion } from 'framer-motion'
import './CSS/Project.css'

const Projects = () => {
  return (
    <div className='projects'>
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className='projects-heading'
      >
        Projects
      </motion.h2>

      <div className='project-list'>
        {PROJECTS.map((project, index) => (
          <div key={index} className='project-item'>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className='project-media'
            >
              <img
                src={project.image}
                width={250}
                height={250}
                alt={project.title}
                className='project-image'
              />
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className='project-content'
            >
              <h3 className='project-title'>{project.title}</h3>
              <p className='project-desc'>{project.description}</p>

              <div className='project-techs'>
                {project.technologies.map((tech, tIndex) => (
                  <span className='tech-badge' key={tIndex}>
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects