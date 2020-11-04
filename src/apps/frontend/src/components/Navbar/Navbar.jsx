//@flow
import React, { useEffect, useState } from "react";
import MainNavbar from "./MainNavbar/MainNavbar";
import Section from "./Section/Section";
import "./navbar.css";
import { connect } from "react-redux";

const Navbar = ({ open }): React$Element<"div"> => {
	const [sectionStatus, setSectionStatus] = useState("closed");

	useEffect(() => {
		// const timer = setTimeout(() => {
		// 	setSectionStatus(sectionStatus === "open" ? "closed" : "open");
		// }, 4000);
		// return () => clearTimeout(timer);
		const _sectionStatus = open ? "open" : "closed";
		setSectionStatus(_sectionStatus);
	}, [open]);

	return (
		<div className={`navbar section-${sectionStatus} bg-nord2`}>
			<MainNavbar />
			<Section visible={sectionStatus} />
		</div>
	);
};

const mapStateToProps = (props) => {
	const { open } = props.section;
	return { open };
};

// flowlint-next-line unclear-type:off
const ReduxNavbar: any = connect(mapStateToProps)(Navbar);
export default ReduxNavbar;
