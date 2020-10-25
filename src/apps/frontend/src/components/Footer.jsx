//@flow
import React, { useEffect, useState } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const Footer = (props: ?{}): React$Element<"footer"> => {
	const [time, setTime] = useState(new Date());
	const [locate, setLocate] = useState("en");
	const formatDateTimeFormat = (locate: string): Intl$DateTimeFormat =>
		new Intl.DateTimeFormat(locate, {
			timeStyle: "medium",
			dateStyle: "full",
			hour12: false,
		});
	const [dateTimeFormat, setDateTimeFormat] = useState(
		formatDateTimeFormat(locate)
	);
	const capitalize = (str: string): string =>
		str[0].toUpperCase().concat(str.slice(1));
	const formatFullDate = (time: Date): string =>
		capitalize(dateTimeFormat.format(time));
	const [fullDate, setFullDate] = useState(formatFullDate(time));

	const handleSwitchLocate = (): void => {
		locate === "en" ? setLocate("fr") : setLocate("en");
	};

	useEffect(() => {
		const interval = setInterval(() => {
			setTime(new Date());
		}, 1000);
		return () => clearInterval(interval);
	});

	useEffect(() => {
		setDateTimeFormat(formatDateTimeFormat(locate));
		setFullDate(formatFullDate(time));
	}, [locate, time]);

	return (
		<footer className='App-footer'>
			<p>Notes is coming... SOON!!!</p>
			<OverlayTrigger
				placement='auto'
				delay={750}
				overlay={
					<Tooltip id='footer-time-tooltip'>
						Click to switch locate format
						<br />
						<em>'en'</em> &#x21CB; <em>'fr'</em>
					</Tooltip>
				}>
				<p onClick={handleSwitchLocate} style={{ cursor: "pointer" }}>
					{fullDate}
				</p>
			</OverlayTrigger>
		</footer>
	);
};

export default Footer;
