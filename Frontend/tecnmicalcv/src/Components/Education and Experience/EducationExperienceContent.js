import React from 'react'

function Content(props) {
  return (
 
      	<div>
			<span></span>
				<div class="media">
					<div class="d-flex">
						<p>{props.startDate} to {props.endDate}</p>
						</div>
							<div class="media-body">
								<h4>{props.name}</h4>
								<p>{props.position} <br />{props.jobtype}</p>
							</div>
				</div>
		</div>
   
  )
}

export default Content
