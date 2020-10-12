import React from 'react'

export default function Testimonial(props) {
    return (
        <div>
            <div class="block-testimony-1 text-center">

    
    <h3 class="font-size-20 mb-4 text-black">{props.title} {props.name} {props.lastname}</h3>
    <h3 class="font-size-20 mb-4 text-black">{props.email}</h3>

              <blockquote class="mb-4">
             <p>{props.testimony}</p>
              </blockquote>


            </div>
          </div>
    )
}
