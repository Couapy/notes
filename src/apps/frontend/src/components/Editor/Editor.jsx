//@flow
import React from "react";
import { ReactComponent as BulbLogo } from "../../svg/bulb.svg";
import "./editor.css";

const Editor = (): React$Element<"div"> => {
	return (
		<div className='editor flex-center flex-jc-c'>
			<BulbLogo className='ico svg-24 svg-dark' />
			<span>
				<span className='underline'>Pro tip:</span> You can organise your notes
				with sections in a notebook
			</span>
		</div>
	);
};

export default Editor;
