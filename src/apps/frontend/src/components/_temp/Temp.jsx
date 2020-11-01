//@flow
import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Content from "./Content";

import "./temp.css";

const Temp = (props: {
	setTemp: (((boolean) => boolean) | boolean) => void,
	timerCount: number,
}): React$Node => {
	return (
		<>
			<Header setTemp={props.setTemp} />
			<Content timerCount={props.timerCount / 1000} />
			<Footer />
		</>
	);
};

export default Temp;
