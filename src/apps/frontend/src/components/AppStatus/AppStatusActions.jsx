//@flow
import * as React from "react";
import { ReactComponent as UpdateLogo } from "../../svg/update.svg";
import { ReactComponent as SettingsLogo } from "../../svg/settings.svg";

const AppStatusActions = (): React.Element<"span"> => {
	return (
		<span className='flex-center flex-js-sb mr0 width66'>
			<UpdateLogo className='svg-24 svg-light' />
			<SettingsLogo className='svg-24 svg-light' />
		</span>
	);
};

export default AppStatusActions;
