//@flow
import React from "react";
import { ReactComponent as TrashLogo } from "../../../svg/trash.svg";
import "./trash.css";

const Trash = (): React$Element<"div"> => {
	return (
		<div className='trash mb20 bottom0'>
			<div className='separator mt20 mb20 ml35 mr35' />
			<div className='bin flex-center ml40 pl5 pb10 pt10'>
				<TrashLogo className='svg-22 svg-light cursor-pointer' />
				<span className='pl14 pr14 fs20'>Trash</span>
			</div>
		</div>
	);
};

export default Trash;
