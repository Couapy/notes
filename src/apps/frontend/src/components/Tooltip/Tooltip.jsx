//@flow
import * as React from "react";
import "./tooltip.css";

const Tooltip = (props: {
	overlay: React.Element<"span">,
	children: string | React.Element<"span">,
	className?: string,
}): React.Element<"div"> => {
	const { className, overlay, children, ...otherProps } = props;
	const bgColor =
		props.overlay.props.className &&
		props.overlay.props.className
			.split(" ")
			.filter((str: string) => str.split("-")[0] === "bg");

	const colorVar = bgColor
		? `var(--color-${bgColor[0].split("-")[1]})`
		: "#3b4252";

	const arrowStyle = {
		content: '""',
		position: "absolute",
		zIndex: 1,
		bottom: "calc( 105% - 2 * 0.3125rem )",
		left: "50%",
		marginLeft: "-0.3125rem",
		borderWidth: "0.3125rem",
		borderStyle: "solid",
		borderColor: `${colorVar} transparent transparent transparent`,
	};

	const overlayText = {
		...overlay,
		props: {
			...overlay.props,
			className: (overlay.props.className || "").concat(" tooltiptext"),
		},
	};

	return (
		<div {...otherProps} className={(className || "").concat(" tooltip")}>
			{children}{" "}
			<div>
				{overlayText}
				<div className='tooltip-arrow' style={arrowStyle} />
			</div>
		</div>
	);
};

export default Tooltip;
