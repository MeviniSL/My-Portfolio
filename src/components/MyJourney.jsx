import React from 'react'
import { EXPERIENCES } from '../constants'
import { motion } from 'framer-motion'
import './CSS/MyJourney.css'

const MyJourney = () => {
  return (
    <section className="experience-timeline">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -40 }}
        transition={{ duration: 0.5 }}
        className="experience-heading"
      >
        My Journey
      </motion.h2>

      <div className="timeline">
        {EXPERIENCES.map((exp, idx) => (
          <motion.article
            className={`timeline-item ${idx % 2 === 0 ? 'left' : 'right'}`}
            key={idx}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: idx * 0.08 }}
          >
            <div className="timeline-dot" />

            <div className="timeline-card">
              <div className="timeline-media">
                <img
                  src={exp.image || 'https://via.placeholder.com/220x220?text=Photo'}
                  alt={'experience image'}
                  className="timeline-image"
                />
              </div>

              <div className="timeline-body">
                <div className="timeline-meta">
                  <span className="timeline-year">{exp.year}</span>
                  <h3 className="timeline-role">
                    {exp.role}
                  </h3>
                </div>

                <p className="timeline-desc">{exp.description}</p>

                <div className="timeline-techs">
                  {exp.technologies?.map((t, i) => (
                    <span className="tech-chip" key={i}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default MyJourney
