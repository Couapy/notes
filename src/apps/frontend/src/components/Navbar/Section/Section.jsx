//@flow
import React, { useEffect, useState } from "react";
import "./section.css";

const Section = (props: {
	visible: string,
	children?: React$Node,
}): React$Element<"div"> => {
	const [visible, setVisible] = useState(props.visible);

	useEffect(() => {
		setVisible(props.visible);
	}, [props.visible]);

	return (
		<div className={`section ${visible} bg-nord2 txt-light`}>
			{props.children}
		</div>
	);
};

Section.defaultProps = {
	children: (<div>Section is coming</div>: React$Element<"div">),
};

export default Section;
