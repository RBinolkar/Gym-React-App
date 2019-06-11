import React from 'react'

export const Workout = ({name="No Name", work="Full Workout", time=0, trainer}) => {
	return (
		<section>
			<h3>{name}</h3>
			<p>Workout: {work}</p>
			<p>Time: {time} minutes</p>
            <p>Trainer: {trainer ? 'available' : 'not available'}</p>
		</section>
	)
}
