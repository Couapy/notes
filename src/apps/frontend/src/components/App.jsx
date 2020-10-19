import React, { Component } from "react";
import PropTypes from "prop-types";
import Footer from "./footer/Footer";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div>
				<h1>Hello World!</h1>
				<Footer className='footer' />
			</div>
		);
	}
}

App.propTypes = {
	props: PropTypes.element,
};

export default App;
