import React from 'react'
import { PROJECTS } from '../constants'
import { motion } from 'framer-motion'
import './CSS/Project.css'

const Projects = () => {
  return (
    <section id='projects'>
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -40 }}
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



              <div className="project-actions">
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn project-btn--github"
                  >
                    GitHub
                  </a>
                ) : (
                  <span className="project-btn project-btn--github disabled" aria-hidden="true">
                    GitHub
                  </span>
                )}

                {project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn project-btn--demo"
                  >
                    Demo
                  </a>
                ) : (
                  <span className="project-btn project-btn--demo disabled" aria-hidden="true">
                    Demo
                  </span>
                )}
              </div>




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
    </section>
  )
}

export default Projects