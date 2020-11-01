//@flow
import React from "react";
import { ReactComponent as PlusLogo } from "../../../../svg/plus.svg";
import "./notebooks.css";

const noteBooksElements = ["Notes project", "Project idea", "To do list"];

const NoteBooks = (): Array<React$Element<"div">> => {
	return noteBooksElements.map((element, id) => {
		return (
			<div
				className='notebooks pl60 flex-center height36 cursor-pointer'
				key={element.toString().concat(id.toString())}>
				<div className='fs20'>{element}</div>
			</div>
		);
	});
};

const items: {|
	ico: (props: { className: string }) => React$Element<"div">,
	componentChildren: () => Array<React$Element<"div">>,
	txt: string,
|} = {
	ico: PlusLogo,
	txt: "NoteBooks",
	componentChildren: NoteBooks,
};

export default items;
