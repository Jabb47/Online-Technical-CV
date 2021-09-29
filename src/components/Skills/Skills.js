import React from 'react'
import './Skills.css'
import SkillSet from './SkillSet'
function Skills() {
    return (
        <div>
            <section className="skills section"  id="skills">
                <h2 className="section_title" >Skills</h2>
                <span className="section_subtitle">My technical level</span>

                <div className="skills__container container grid">
                    <SkillSet icon ="uil uil-brackets-curly"  title="Front-end Developer" years={4}  />
                    <SkillSet icon="uil uil-server-network" title="Back-end Developer" years={3}  />
                    <SkillSet icon="uil uil-swatchbook" title="UI/UX Designer" years={1}  />


                </div>
            </section>
        </div>
    )
}

export default Skills
