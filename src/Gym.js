import React from 'react'
import { Workout } from './Workout'
import { Hiring } from './Hiring'
import { NotHiring } from './NotHiring'

class Gym extends React.Component {
    
    static defaultProps = {
        machines: [
            {"name":"Lat Pull Down", "work":"Back, Shoulder", "time": 20}
        ]
    }
	
	state = { 
		open: true,
		hiring: true,
        trainer: false,
        data: [],
        loading: false
	}

    async componentDidMount() {
		this.setState({loading:true})
await fetch('https://hplussport.com/api/products/order/price/sort/asc/qty/1')
			.then(data => data.json())
			.then(data => this.setState({data, loading: false}))
	}

	componentDidUpdate() {
		console.log("The component just updated")
	}

	toggleOpenClosed = () => {
		this.setState(prevState => ({
			open: !prevState.open
		}))
	}
	render() {
		const { machines } = this.props
		return (
			<div>
            <h1> Welcome to ForestView Gym </h1>
				
				<h2>The gym is {this.state.open ? 'open' : 'closed'}</h2>
				<button onClick={this.toggleOpenClosed}>Change</button>
            {this.state.loading 
					? "loading..."
					: <div>
						{this.state.data.map(product => {
							return (
								<div key={product.id}>
									<h3>Gym Product of the Week!</h3>
									<p>{product.name}</p>
									<img alt={product.name} src={product.image} height={100}/>
								</div>
							)
						})}
					</div>
				}
				{machines.map(
					(workout, i) => 
						<Workout 
							key={i}
							name={workout.name} 
							work={workout.work} 
							time={workout.time}
                            trainer={this.state.trainer}/>
				)}
            {this.state.hiring ? <Hiring /> : <NotHiring />}
			</div>
		)
	}
}
            
export default Gym
