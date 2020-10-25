//@flow
import React from "react";
import "./App.scss";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Content from "./components/Content";

const App = (): React$Element<"div"> => {
	return (
		<div className='App'>
			<Header />
			<Content />
			<Footer />
		</div>
	);
};

export default App;
