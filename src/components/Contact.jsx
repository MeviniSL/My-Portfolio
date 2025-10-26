import React from 'react'
import { CONTACT } from '../constants'
import { motion } from 'framer-motion'
import './CSS/Contact.css'

const Contact = () => {
  return (
    <div className="contact">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="contact-heading"
      >
        Get In Touch
      </motion.h2>

      <div className="contact-body">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="contact-line"
        >
          {CONTACT?.address}
        </motion.p>

        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="contact-line"
        >
          <a href={`tel:${CONTACT?.phoneNo}`} className="contact-link">
            {CONTACT?.phoneNo}
          </a>
        </motion.p>

        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="contact-line"
        >
          <a href={`mailto:${CONTACT?.email}`} className="contact-link">
            {CONTACT?.email}
          </a>
        </motion.p>
      </div>
    </div>
  )
}

export default Contact
