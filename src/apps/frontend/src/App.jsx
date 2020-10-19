import React from "react";
import Proptypes from "prop-types";
// import axios from "axios";
import "./App.css";

const App = () => {
	return (
		<div className='App'>
			<header className='App-header'>
				<h1>Hello World!</h1>
			</header>
		</div>
	);
};

App.propTypes = {
	props: Proptypes.object,
};

export default App;
