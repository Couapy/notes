//@flow
import React from "react";
import { ReactComponent as UpdateLogo } from "../../svg/update.svg";
import { ReactComponent as SettingsLogo } from "../../svg/settings.svg";
import { connect } from "react-redux";
import {
	setSectionComponent,
	resetSectionComponent,
} from "../../redux/_actions";
import { initialStateSection } from "../../redux/section";
import { sectionAppStatusActions } from "./section";

let timer = null;

const AppStatusActions = ({
	setSectionComponent,
	resetSectionComponent,
	section,
}): React$Element<"span"> => {
	const handleClick = (e) => {
		const sectionName = e.target.sectionName;
		const reset = section === sectionName ? 1 : 0;
		setSectionComponent({
			open: !reset,
			section: [sectionName, initialStateSection.section][reset],
			sectionComponent: sectionAppStatusActions[sectionName],
		});
		if (!!timer) clearTimeout(timer);
		if (!!reset) timer = setTimeout(() => resetSectionComponent(), 1000);
	};

	return (
		<span className='flex-center flex-jc-sb mr0 width66'>
			<UpdateLogo className='svg-24 svg-light cursor-pointer' />
			<SettingsLogo
				onClick={(e) => {
					e.target.sectionName = "settings";
					handleClick(e);
				}}
				className='svg-24 svg-light cursor-pointer'
			/>
		</span>
	);
};

const mapStateToProps = (props) => {
	const section = props.section.section;
	return { section };
};

const actionCreators = {
	setSectionComponent,
	resetSectionComponent,
};

// flowlint-next-line unclear-type:off
const AppStatusActionsRedux: any = connect(
	mapStateToProps,
	actionCreators
)(AppStatusActions);
export default AppStatusActionsRedux;
