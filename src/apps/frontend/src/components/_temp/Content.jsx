//@flow
import React, { Suspense, useState, useEffect } from "react";
import Spinner from "../Spinner/Spinner";
import { fetchData } from "../../modules/fakeApi";

const delay = 3000;
const resource = fetchData(delay);

let changeColor = true;
const timeCol = setTimeout(() => (changeColor = false), delay);

const ContentLoads = (): React$Element<"div"> => {
	const data = resource.user.read();
	return <div>{data?.string}</div>;
};

const TimerCount = (props: { timerCount: number }): React$Element<"div"> => {
	const [timerCount, setTimerCount] = useState(props.timerCount);

	useEffect(() => {
		const timer = setTimeout(() => {
			setTimerCount(timerCount - 1);
		}, 1000);
		return () => clearTimeout(timer);
	}),
		[];
	return <div style={{ fontSize: "3rem" }}>{timerCount.toString()}</div>;
};

const SuspenseComponent = (): React$Element<"div"> => {
	const variants = [
		"primary",
		"secondary",
		"success",
		"danger",
		"warning",
		"info",
		"dark",
	].map((val) => `--color-${val}`);
	const [nbVar, setNbVar] = useState(0);
	const [variant, setVariant] = useState(variants[nbVar]);

	useEffect(() => {
		const tpNbVar = (nbVar + 1) % variants.length;
		console.log("👨‍💻: tpNbVar", tpNbVar);
		if (changeColor) {
			const timer = setTimeout(() => setNbVar(tpNbVar), 250);
			return () => clearTimeout(timer);
		}
	});

	useEffect(() => {
		setVariant(variants[nbVar]);
	}, [nbVar]);

	return (
		<div className='height30'>
			<Suspense
				fallback={
					<Spinner variant={variant}>
						<span className='sr-only'>Loading...</span>
					</Spinner>
				}>
				<ContentLoads />
			</Suspense>
		</div>
	);
};

const Content = (props: { timerCount: number }): React$Element<"div"> => {
	return (
		<div className='App-content'>
			<div className='height30'>We are still working on it...</div>
			<SuspenseComponent />
			<TimerCount className='' timerCount={props.timerCount} />
		</div>
	);
};

export default Content;
