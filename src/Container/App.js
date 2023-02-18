import React, { Component } from 'react';
import CardList from '../Components/cardList';
import { robots } from '../robots';
import Scroll from '../Components/scroll';
import Searchbox from '../Components/searchbox';
// import ErrorBoundary from '../Components/ErrorBoundary';
import './App.css';
 
class App extends Component {
	constructor () {
		super()
		this.state = {
			dispdrobots: robots,
			searchfield: ""
		}
		// This stuff works properly without the constructor and super functions. Removing it doesn't affect the App at all.
	}

	// componentDidMount() {
	// 	fetch('https://randomuser.me/api/?results=50')
	// 		.then(response => response.json())
	// 		.then(users => this.setState({ dispdrobots: users }));
	// 	// console.log('componentDidMount');
	// }

	onSearchChange = (event) => {
		// const { dispdrobots, searchfield } = this.state;
		this.setState({ searchfield: event.target.value });
		// const filteredRobots = dispdrobots.filter(robot => {
		// 	return robot.username.toLowerCase().includes(searchfield.toLowerCase());
		// })
		// This changes the value of the searchfield to the value contained within the searchfield of the searchbox.
		console.log("The event value is " + event.target.value);
		console.log("The searchfield is " + this.state.searchfield);
		// console.log(filteredRobots);
	}

	render() {
		const { dispdrobots, searchfield } = this.state;
		const { onSearchChange } = this;
		const filteredRobots = dispdrobots.filter(robot => {
			return robot.username.toLowerCase().includes(searchfield.toLowerCase());
		})
		return !robots.length ?
		<h1>Loading...</h1> :
		(
			<div className='tc'>
				<h1 className='f2'>RARE COLLECTIONS</h1>
				<Searchbox searchChangeProp={onSearchChange} />
				{/*The searchChange atttribute calls {onSearchChange} when called. */}
				<Scroll>
					{/*<ErrorBoundary>*/}
						<CardList robotProp={filteredRobots} />
						{/*This returns a number of robots that passed the filter test in {filteredRobots} */}
					{/*</ErrorBoundary>*/}
				</Scroll>
			</div>
		);
	}
}

export default App;