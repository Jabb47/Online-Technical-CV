import React, { Component } from 'react'
import Project from '../../Components/Projects/Project'
export class ProjectSection extends Component {
    state =  {
        projects:[],
        isloaded: false
    }
    componentDidMount(){
        fetch('http://127.0.0.1:8000/api/projects')
        .then(res => res.json())
        .then(data=>{
            this.setState({
                projects: data.results,
                isloaded: true
			})
			
		})
    }
    render() {
        return (
            <div class="site-section block-13" id="testimonials-section" data-aos="fade">
                <div class="container">
                    <div class="text-center mb-5">
                        <div class="block-heading-1">
                            <h2>My Projects</h2>
                        </div>
                    </div>
                    <div class="row">
                        {this.state.projects.map((prjct) =>
                            <div className="col-md-4">
                                <Project
                                name={prjct.name}
                                description={prjct.description}
                                link={prjct.link}/> 
                            </div>
                        )}
                            
                    </div>
                </div>
            </div>
        )
    }
}

export default ProjectSection
