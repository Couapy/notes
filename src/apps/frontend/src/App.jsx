//@flow
import React from "react";
import "./App.css";

import Footer from "./components/Footer";

const App = (): React$Element<"div"> => {
	return (
		<div className='App'>
			<header className='App-header'>
				<h1>Hello World!</h1>
			</header>
			<Footer />
		</div>
	);
};

export default App;
