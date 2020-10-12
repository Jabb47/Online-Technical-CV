import React, { Component } from 'react'
import Testimonial from '../../Components/Testimonials/Testimonial'
export class TestimonialsSection extends Component {
    state = {
        testimonials:[],
        isloaded:false
    }
    componentDidMount(){
        fetch('http://127.0.0.1:8000/api/testimonials')
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
            <div id="testimonials">
                <div class="text-center mb-5">
                <div class="block-heading-1">
                    <h2>Testimonials</h2>
                </div>
                </div>
                <div class="owl-carousel nonloop-block-13">
                  {this.state.testimonials.map((test) =>
                    <Testimonial
                    title = {test.title}
                    name ={test.first_name}
                    email = {test.email}
                    testimony ={test.testimony}
                      />
                  )}
                </div>
            </div>
        )
    }
}

export default TestimonialsSection
