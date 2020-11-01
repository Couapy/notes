//@flow
import React, { useEffect, useState } from "react";
import MainNavbar from "./MainNavbar/MainNavbar";
import Section from "./Section/Section";
import "./navbar.css";

const Navbar = (): React$Element<"div"> => {
	const [sectionStatus, setSectionStatus] = useState("closed");

	useEffect(() => {
		const timer = setTimeout(() => {
			setSectionStatus(sectionStatus === "open" ? "closed" : "open");
		}, 4000);
		return () => clearTimeout(timer);
	});

	return (
		<div className={`navbar section-${sectionStatus} bg-nord2`}>
			<MainNavbar />
			<Section visible={sectionStatus} />
		</div>
	);
};

export default Navbar;
