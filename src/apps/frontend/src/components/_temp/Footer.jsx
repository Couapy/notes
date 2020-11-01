//@flow
import React, { useEffect, useState } from "react";
import Tooltip from "../Tooltip/Tooltip";

const Footer = (props: ?{}): React$Element<"footer"> => {
	return (
		<footer className='App-footer'>
			<p>Notes is coming... SOON!!!</p>
			<FullDate />
		</footer>
	);
};

const FullDate = (): React$Element<"div"> => {
	const [time, setTime] = useState(new Date());
	const [locate, setLocate] = useState("en-US");
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
		locate === "en-US" ? setLocate("fr-FR") : setLocate("en-US");
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
		<Tooltip
			position='top'
			overlay={
				<span className='bg-dark txt-light'>
					{locate !== "en-US"
						? "Click to switch locate format"
						: "Cliquer pour changer le format local"}
					<br />
					<em>'en'</em> &#x21CB; <em>'fr'</em>
				</span>
			}>
			<p onClick={handleSwitchLocate} style={{ cursor: "pointer" }}>
				{fullDate}
			</p>
		</Tooltip>
	);
};

export default Footer;
