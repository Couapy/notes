//@flow
import React, { useEffect, useState } from "react";
import "./section.css";
import { connect } from "react-redux";

const Section = (props: {
	visible: string,
	section: Array<React$Element<"div">>,
}): React$Element<"div"> => {
	const [visible, setVisible] = useState(props.visible);

	useEffect(() => {
		setVisible(props.visible);
	}, [props.visible]);

	return (
		<div className={`section ${visible} bg-nord2 txt-light`}>
			{props.section.map((el, id) => el)}
		</div>
	);
};

const mapDispatchToProps = (state) => {
	return { section: state.section };
};

export default connect(mapDispatchToProps)(Section);
