import React from 'react'
import { render } from 'react-dom'
import Gym from './Gym'

let machineList = [
	{"name": "Treadmill", "work": "Cardio", "time": 30},
	{"name": "Cable Biceps Bar", "work": "Biceps", "time": 10},
	{"name": "Horizontal Seated Leg Press", "work": "Quads, Glutes, Calves", "time": 15},
	{"name": "Hanging Leg Raise", "work": "Core, Hip", "time": 10}
]

render(
	<Gym machines={machineList}/>, 
	document.getElementById('root')
)
