//@flow
import React from "react";
import { ReactComponent as PlusLogo } from "../../../../svg/plus.svg";

const NoteBooks = (): React$Element<"div"> => {
	return (
		<div className='notebooks pl60 flex-center height36'>
			<div>Ok</div>
		</div>
	);
};

const items: {|
	ico: (props: { className: string }) => React$Element<"div">,
	componentChildren: () => React$Element<"div">,
	txt: string,
|} = { ico: PlusLogo, txt: "NoteBooks", componentChildren: NoteBooks };

export default items;
