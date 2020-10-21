//@flow
import { useEffect, useState } from "react";

const Footer = (props: ?{}): React$Element<"footer"> => {
	const [time, setTime] = useState(new Date());
	const getNowHour = (time: Date): string => {
		const formatNumTime = (t: number): string => t.toString().padStart(2, "0");
		const hours = formatNumTime(time.getHours());
		const minutes = formatNumTime(time.getMinutes());
		const seconds = formatNumTime(time.getSeconds());
		return `${hours}h ${minutes}m ${seconds}s`;
	};

	useEffect(() => {
		const interval = setInterval(() => {
			setTime(new Date());
		}, 1000);
		return () => clearInterval(interval);
	});

	return (
		<footer className='App-footer'>
			<p>Notes is coming... SOON!!!</p>
			<p>{getNowHour(time)}</p>
		</footer>
	);
};

export default Footer;
