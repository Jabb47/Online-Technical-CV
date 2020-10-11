import React, { Component } from 'react'
import workVideo from '../../assets/work.mp4'
import './style.css'
import Content from '../../Components/Education and Experience/EducationExperienceContent'
export class ExperienceEducation extends Component {
    state ={
        education:[],
        workEpercience:[],
        isloaded: false,
    }
    componentDidMount(){
        fetch('http://127.0.0.1:8000/api/education/')
        .then(res => res.json())
        .then(data=>{
            this.setState({
                education: data.results,
			})
			fetch('http://127.0.0.1:8000/api/workexperience/')
			.then(res => res.json())
			.then(data=>{
				this.setState({
					workEpercience: data.results,
					isloaded: true,
                })
                console.log(this.state)
			})
		})
    }
    render() {
        return (
			
        <section className="site-section mytabs_area p_120" id="education" >
        	<div className="container">
        		<div className="tabs_inner">
					<ul className="nav nav-tabs" id="myTab" role="tablist">
						<li className="nav-item">
							<a className="nav-link active" id="home-tab" data-toggle="tab" href="#education" role="tab" aria-controls="home" aria-selected="true">My Education</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" id="profile-tab" data-toggle="tab" href="#experience" role="tab" aria-controls="profile" aria-selected="false">My Work Experiences</a>
						</li>
					</ul>
					<div className="tab-content" id="myTabContent">
						<div className="tab-pane fade show active" id="education" role="tabpanel" aria-labelledby="home-tab">
							<ul className="list">
								{this.state.education.map((degree) =>
									<li key={degree.id}>
										<Content 
										startDate = {degree.start_date}
										endDate = {degree.end_date}
										name  = {degree.institutionName}
										/>
									</li>
								)}

							</ul>
						</div>
						<div className="tab-pane fade" id="experience" role="tabpanel" aria-labelledby="profile-tab">
							<ul className="list">
							{this.state.workEpercience.map((experience) =>
									<li key={experience.id}>
										<Content 
										startDate = {experience.start_date}
										endDate = {experience.end_date}
										name  = {experience.companyName}
										position = {experience.position}
										/>
									</li>
								)}
							</ul>
						</div>
					</div>
        		</div>
        	</div>
        </section>
        )
    }
}

export default ExperienceEducation
