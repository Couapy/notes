//@flow
import * as React from "react";
import { ReactComponent as UpdateLogo } from "../../svg/update.svg";
import { ReactComponent as SettingsLogo } from "../../svg/settings.svg";

const AppStatusActions = (): React.Element<"span"> => {
	return (
		<span className='flex-center mr0'>
			<UpdateLogo className='ico svg-24 pl20 svg-light' />
			<SettingsLogo className='ico svg-24 pl20 svg-light' />
		</span>
	);
};

export default AppStatusActions;
