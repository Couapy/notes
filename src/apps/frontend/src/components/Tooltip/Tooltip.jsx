//@flow
import * as React from "react";
import "./tooltip.css";

const Tooltip = (props: {
	overlay: React.Element<"span">,
	className?: string,
	position?: "top" | "right" | "bottom" | "left",
	children: string | React.Element<"span">,
}): React.Element<"div"> => {
	const {
		className,
		overlay,
		children,
		position = "top",
		...otherProps
	} = props;
	const cardinals = ["top", "right", "bottom", "left"];
	const positionSetted = cardinals.includes(position)
		? position[0].toUpperCase() + position.slice(1)
		: "Top";
	const bgColor =
		props.overlay.props.className &&
		props.overlay.props.className
			.split(" ")
			.filter((str: string) => str.split("-")[0] === "bg");

	const colorVar = bgColor
		? `var(--color-${bgColor[0].split("-")[1]})`
		: "#3b4252";

	const arrowStyle = {
		[`border${positionSetted}Color`]: `${colorVar}`,
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
