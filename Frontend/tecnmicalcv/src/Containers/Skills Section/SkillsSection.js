import React, { Component } from 'react'
import Skill from '../../Components/Skills Section/Skills/Skill'
import './SkillsSection.css'
class SkillsSection extends Component {
	state ={
		skills:[],
		description: "",
		isloaded: false,
		
    }
	componentDidMount(){
        fetch('http://127.0.0.1:8000/api/skills')
        .then(res => res.json())
        .then(data=>{
            this.setState({
                skills: data.results,
			})
			fetch('http://127.0.0.1:8000/api/personal-details/1/')
			.then(res => res.json())
			.then(data=>{
				this.setState({
					description: data.description,
					isloaded: true,
				})
				console.log(this.state)

			})
		})
    }

	render() {
        

        return (
            <section className="welcome_area p_120 site-section" id="skills">
        	<div className="container">
        		<div className="row welcome_inner">
        			<div className="col-lg-6">
        				<div className="welcome_text">
        					<h4>About Myself</h4>
							<p>{this.state.description}</p>
        				</div>
        			</div>
        			<div className="col-lg-6 skills">
						{ this.state.skills.map((skill) =>
							<div key={skill.id}>
								<Skill name = {skill.name} percentage = {skill.percentage}/>
							</div>
							
						)

						}
						
        			</div>
        		</div>
        	</div>
        </section>
        )
    }
}

export default SkillsSection;
