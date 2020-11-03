//@flow
import * as React from "react";
import { ReactComponent as UpdateLogo } from "../../svg/update.svg";
import { ReactComponent as SettingsLogo } from "../../svg/settings.svg";
import { connect } from "react-redux";
import { setSectionComponent } from "../../redux/section";

const AppStatusActions = ({ setSectionComponent }): React.Element<"span"> => {
	return (
		<span className='flex-center flex-jc-sb mr0 width66'>
			<UpdateLogo className='svg-24 svg-light cursor-pointer' />
			<SettingsLogo
				onClick={() => setSectionComponent(sectionAppStatusActions)}
				className='svg-24 svg-light cursor-pointer'
			/>
		</span>
	);
};

// export default AppStatusActions;

class section {
	txt: string;
	constructor(txt: string) {
		this.txt = txt;
	}
}

const account: section = new section("Account");
const profile: section = new section("Profile");
const socialNetworks: section = new section("Social Networks");

const sectionAppStatusActions: Array<React$Element<"div">> = [
	account,
	profile,
	socialNetworks,
].map((e, i) => <div key={i.toString()}>{e.txt}</div>);

const actionCreators = {
	setSectionComponent,
};

export default connect(null, actionCreators)(AppStatusActions);
