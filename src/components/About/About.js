import React from 'react'
import './About.css'
import AboutPic from '../../assets/img/about.jpg'
function About() {
    return (
        <div>
            <section className="about section" id="about"> 
                <h2 className="section_title" >About Me</h2>
                <span className="section_subtitle">My introduction</span>

                <div className="about__container container grid" >
                    <img src={AboutPic} alt="" className="about__img"/>
                    <div className="about__data">
                        <p className="about__description">
                        I am a Junior Frontend Software Developer with a good academic record and a wide range of interests and knowledge including software development, data analysis, system analysis and design. I possess excellent communication skills and I am reliable, punctual, hardworking, willing and eager to learn new tasks or skills.
                        I am looking for a software developer position with a reputable company.
                        </p>
                        <div className="about__info">
                            <div>
                                <span className="about__info-title" >03+</span>
                                <span className="about__info-name">Years <br/> experience </span>
                            </div>
                            <div>
                                <span className="about__info-title" >05+</span>
                                <span className="about__info-name">Completed<br/>projects</span>
                            </div>
                            <div>
                                <span className="about__info-title" >01+</span>
                                <span className="about__info-name">Companies <br/>worked </span>
                            </div>
                        </div>
                    </div>
                    <div className="about__buttons">
                        <a download="" href="#" className="button button-flex">
                            Download CV
                            <i className="uil uil-download-alt button__icon"></i>
                        </a>
                    </div>
                </div>
            </section>
            
        </div>
    )
}

export default About
