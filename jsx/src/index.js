import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
	const buttonText = 'Click Me...!';

	return (
		<div>
			<label className="label" htmlFor="label">Enter Name: </label>
			<input id="name" type="text" />
			<button style={{backgroundColor: "blue", color: "white"}}>{buttonText}</button>
			<button style={{backgroundColor: "blue", color: "white"}}>{getButtonText()}</button>
		</div>
	);
};

function getButtonText() {
	return "Click on Me...!";
}

ReactDOM.render(<App />, document.querySelector('#root'));