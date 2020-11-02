//@flow
import React from "react";
import { ReactComponent as BulbLogo } from "../../svg/bulb.svg";
import "./editor.css";

const DefaultEditor = (): React$Element<"div"> => {
	return (
		<div className='default-editor flex-center flex-jc-c'>
			<BulbLogo className='ico svg-24 svg-dark' />
			<span>
				<span className='underline'>Pro tip:</span> You can organise your notes
				with sections in a notebook
			</span>
		</div>
	);
};
const Editor = (props: { children?: React$Node }): React$Element<"div"> => {
	return <div className='editor'>{props.children}</div>;
};

Editor.defaultProps = {
	children: (DefaultEditor(): React$Element<"div">),
};

export default Editor;
