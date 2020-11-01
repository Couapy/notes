//@flow
import * as React from "react";
import { ReactComponent as UserLogo } from "../../svg/user.svg";

const AppStatusUser = (): React.Element<"span"> => {
	return (
		<span className='flex-center'>
			<UserLogo className='svg-24 svg-light' />
			<span className='pl20 pr20'>Awesome42</span>
		</span>
	);
};

export default AppStatusUser;
