import React ,{ useState, useEffect } from 'react'

function SkillSet(props) {

    let [showSkillsclass, setShowSkillsClass] = useState("skills__close");
    
    const handleToggler = () =>{
        if(showSkillsclass == "skills__open"){
            setShowSkillsClass("skills__close")
        }
        else{
            setShowSkillsClass("skills__open")
        }
    };

    return (
        <div>
        <div className={`skills__content ${showSkillsclass}`  }>
            <div className="skills__header">
                <i className={`${props.icon} skills__icon`}></i>
                <div>
                    <h1 className="skills__title">{props.title}</h1>
                    <span className="skills__subtitle">More than {props.years} years</span>
                </div>
                <i onClick={handleToggler} className="uil uil-angle-down skills__arrow"></i>
            </div>
            <div className="skills__list grid">
                <div className="skills__data">
                    <div className="skills__titles">
                        <h3 className="skills_name">HTML</h3>
                        <span className="skills__number">90%</span>
                    </div>
                    <div className="skills__bar">
                        <span className="skills__percentage skills__html"></span>
                    </div>
                </div>
                <div className="skills__data">
                    <div className="skills__titles">
                        <h3 className="skills_name">CSS</h3>
                        <span className="skills__number">85%</span>
                    </div>
                    <div className="skills__bar">
                        <span className="skills__percentage skills__html"></span>
                    </div>
                </div>
                <div className="skills__data">
                    <div className="skills__titles">
                        <h3 className="skills_name">JavaScript</h3>
                        <span className="skills__number">75%</span>
                    </div>
                    <div className="skills__bar">
                        <span className="skills__percentage skills__html"></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default SkillSet
