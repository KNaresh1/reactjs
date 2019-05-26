import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	constructor(props) {
		super(props);

		// THIS IS THE ONLY TIME we do direct assignment 
		// to this.state
		this.state = {lat: null, errorMsg ''};

		window.navigator.geolocation.getCurrentPosition(
            (position) => {
            	// We have to call 'setState'  to update the state of a component which 
            	// automatically re-render the component on any state change.
               this.setState({ lat: position.coords.latitude });
            }, (err) => {
                this.setState({ err.message});
        	}
        );
	}

    render() {
        return (
        	<div>
        		Latitude: {this.state.lat} <br/>
        		Error: {this.state.errorMsg}
        	</div>);
    }
}

ReactDOM.render( < App / > , document.querySelector('#root'));