import React from 'react'
import Frontend from './Frontend'
import DataAnalysis from './DataAnalysis'
import "./skills.css"
const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section-title">Skills</h2>
        <span className="section-subtitle">Technical Level</span>

        <div className="skills-container container grid">
            <Frontend />
            <DataAnalysis />
        </div>
    </section>
  )
}

export default Skills