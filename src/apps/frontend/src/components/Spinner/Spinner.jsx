//@flow
import React from "react";
import "./spinner.css";

type Props = {
	className?: string,
	variant?: string | typeof undefined,
};

const Spinner = (props: Props): React$Element<"div"> => {
	let bars = [];

	for (let i = 0; i < 12; i++) {
		let barStyle = {};
		barStyle.WebkitAnimationDelay = barStyle.animationDelay =
			(i - 12) / 10 + "s";

		barStyle.WebkitTransform = barStyle.transform =
			"rotate(" + i * 30 + "deg) translate(146%)";

		barStyle.backgroundColor =
			props.variant !== undefined ? `var(${props.variant})` : "black";

		bars.push(<div style={barStyle} className='react-spinner_bar' key={i} />);
	}

	return (
		<div {...props} className={(props.className || "") + " react-spinner"}>
			{bars}
		</div>
	);
};

export default Spinner;
