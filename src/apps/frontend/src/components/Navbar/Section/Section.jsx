//@flow
import React, { useEffect, useState } from "react";
import "./section.css";
import { connect } from "react-redux";

type TArrayReactDiv = React$Element<"div">;
type TState = {| section: Array<TArrayReactDiv> |};
type TProps = {|
	visible: string,
	section: { sectionComponent: Array<TArrayReactDiv> },
|};

const Sections = (props: TProps): TArrayReactDiv => {
	const [visible, setVisible] = useState(props.visible);

	useEffect(() => {
		setVisible(props.visible);
	}, [props.visible]);

	return (
		<div className={`sections ${visible} pt10 bg-nord2 txt-light`}>
			{props.section.sectionComponent.map((el, id) => el)}
		</div>
	);
};

const mapDispatchToProps = (state: TState) => {
	return { section: state.section };
};

// flowlint-next-line unclear-type:off
const SectionRedux: any = connect(mapDispatchToProps)(Sections);
export default SectionRedux;
