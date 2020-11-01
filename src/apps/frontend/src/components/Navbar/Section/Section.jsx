//@flow
import React, { useEffect, useState } from "react";
import "./section.css";

const Section = (props: { visible: string }): React$Element<"div"> => {
	const [visible, setVisible] = useState(props.visible);

	useEffect(() => {
		setVisible(props.visible);
	}, [props.visible]);

	return <div className={`section ${visible} bg-nord2 txt-light`}>Section</div>;
};

export default Section;
