import React, { Component } from 'react'
import Testimonial from '../../Components/Testimonials/Testimonial'
export class TestimonialsSection extends Component {
    render() {
        return (
            <div>
                <div class="text-center mb-5">
                <div class="block-heading-1">
                    <h2>Testimonials</h2>
                </div>
                </div>
                <div class="owl-carousel nonloop-block-13">
                    <Testimonial/>
                    <Testimonial/>
                    <Testimonial/>
                    <Testimonial/>
                </div>
            </div>
        )
    }
}

export default TestimonialsSection
