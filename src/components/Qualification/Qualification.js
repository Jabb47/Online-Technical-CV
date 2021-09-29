import React from 'react'

function Qualification() {
    return (
        <div>
            <section className="qualification section" id="qualification" >
            <h2 className="section_title" >Qualifications</h2>
                <span className="section_subtitle">My personal Journey</span>

                <div className="qualification__container container">
                    <div className="qualification__tabs">
                        <div className="qualification__button button--flex" >
                            <i class="uil uil-graduation-cap qualification-icon" ></i>
                            Education
                        </div>
                        <div className="qualification__button button--flex" >
                            <i class="uil uil-briefcase-alt qualification-icon" ></i>
                            Work
                        </div>
                    </div>
                    <div className="qualifications__sections">
                        <div className="qualification__content">
                            <div className="qualification__data">
                                <div>
                                    <h3 className="qualification__title">Higher Certificate in I.T</h3>
                                    <span className="qualification__subtitle">Pearson Institute</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Qualification
