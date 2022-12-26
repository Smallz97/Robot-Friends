import React, { Component } from 'react';

class ErrorBoundary extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hasError: false
		}
	}
	
	componentDidCatch(error, info) {
		this.setState({ hasError: true })
	}

	render() {
		if(this.state.hasError) {
			return <h1> Sorry there is an error... </h1>
		}
		return this.props.children
	}
}

export default ErrorBoundary;

// An error boundary component that we use to wrap the CardList component we intend to return in our App.
// This component has a componentDidCatch() method it uses to change the hasError state of the component.
// This mehtod collects two arguments: (1) The error caught and (2) Information on the error caught.
// It sets the hasError state of the component to true if an error is caught.
// The component would render a <h1> element if the hasError state of the component returns true, else it would return the children of the component. 