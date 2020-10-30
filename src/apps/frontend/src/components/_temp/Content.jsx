//@flow
import React, { Suspense, useState, useEffect } from "react";
import Spinner from "../Spinner/Spinner";
import { fetchData } from "../../modules/fakeApi";

const resource = fetchData();

let changeColor = true;
const timeCol = setTimeout(() => (changeColor = false), 5000);

const ContentLoads = (): React$Element<"div"> => {
	const data = resource.user.read();
	return <div>{data?.string}</div>;
};

const Content = (): React$Element<"div"> => {
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
		if (changeColor) {
			const timer = setTimeout(() => setNbVar(tpNbVar), 250);
			return () => clearTimeout(timer);
		}
	});

	useEffect(() => {
		setVariant(variants[nbVar]);
	}, [nbVar]);

	return (
		<div className='App-content'>
			<div>We are still working on it...</div>
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

export default Content;
