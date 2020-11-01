//@flow
import * as React from "react";
import "./app-status.css";
import AppStatusUser from "./AppStatusUser";
import AppStatusActions from "./AppStatusActions";

const AppStatus = (): React.Element<"div"> => {
	return (
		<div className='app-status pl24 pr24 flex-center flex-js-sb bg-dark2 txt-light'>
			<AppStatusUser />
			<AppStatusActions />
		</div>
	);
};

export default AppStatus;
