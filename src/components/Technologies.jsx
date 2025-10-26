import React from 'react'
import {
  SiCss3,
  SiJavascript,
  SiPython,
  SiExpress,
  SiGit,
  SiBootstrap,
  SiFlask,
  SiDjango,
  SiSpringboot,
  SiMysql,
  SiFirebase,
  SiFigma,
  SiPostman,
  SiTailwindcss,
  SiJupyter,
} from 'react-icons/si'
import { DiJava } from 'react-icons/di'
import { FaFileExcel, FaFileWord, FaFilePowerpoint, FaChartBar, FaCode } from 'react-icons/fa'
import { motion } from 'framer-motion'
import './CSS/Technologies.css'

const ICONS = [
  { Comp: SiJavascript, cls: 'tech-js' },
  { Comp: SiPython, cls: 'tech-python' },
  { Comp: DiJava, cls: 'tech-java' },
  { Comp: SiExpress, cls: 'tech-express' },
  { Comp: SiCss3, cls: 'tech-css' },
  { Comp: SiTailwindcss, cls: 'tech-tailwind' },
  { Comp: SiBootstrap, cls: 'tech-bootstrap' },
  { Comp: SiMysql, cls: 'tech-mysql' },
  { Comp: SiFirebase, cls: 'tech-firebase' },
  { Comp: SiPostman, cls: 'tech-postman' },
  { Comp: SiGit, cls: 'tech-git' },
  { Comp: FaCode, cls: 'tech-vscode' },       // fallback for VS Code
  { Comp: SiFigma, cls: 'tech-figma' },
  { Comp: FaFileExcel, cls: 'tech-excel' },   // fallbacks
  { Comp: FaFileWord, cls: 'tech-word' },
  { Comp: FaFilePowerpoint, cls: 'tech-ppt' },
  { Comp: FaChartBar, cls: 'tech-powerbi' },  // fallback
  { Comp: SiFlask, cls: 'tech-flask' },
  { Comp: SiDjango, cls: 'tech-django' },
  { Comp: SiSpringboot, cls: 'tech-spring' },
  { Comp: SiJupyter, cls: 'tech-jupyter' },
]

const Technologies = () => {
  return (
    <section className="technologies">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.2 }}
        className="technologies-heading"
      >
        Technologies
      </motion.h2>

      <div className="marquee-wrapper" aria-hidden={false}>
        <div className="marquee">
          <div className="marquee-track">
            {ICONS.map(({ Comp, cls }, i) => (
              <div className="marquee-item" key={`icon-a-${i}`}>
                <Comp className={`tech-icon ${cls}`} />
              </div>
            ))}

            {/* duplicate for smooth infinite loop */}
            {ICONS.map(({ Comp, cls }, i) => (
              <div className="marquee-item" key={`icon-b-${i}`}>
                <Comp className={`tech-icon ${cls}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Technologies
