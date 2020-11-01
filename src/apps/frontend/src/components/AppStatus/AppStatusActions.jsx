//@flow
import * as React from "react";
import { ReactComponent as UpdateLogo } from "../../svg/update.svg";
import { ReactComponent as SettingsLogo } from "../../svg/settings.svg";

const AppStatusActions = (): React.Element<"span"> => {
	return (
		<span className='flex-center flex-jc-sb mr0 width66'>
			<UpdateLogo className='svg-24 svg-light cursor-pointer' />
			<SettingsLogo className='svg-24 svg-light cursor-pointer' />
		</span>
	);
};

export default AppStatusActions;
