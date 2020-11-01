//@flow
import React from "react";
import "./main-navbar.css";
import { ReactComponent as PlusLogo } from "../../../svg/plus.svg";
import { ReactComponent as NoteLogo } from "../../../svg/note.svg";
import { ReactComponent as ArchiveLogo } from "../../../svg/archive.svg";
import Categories from "./Categories/Categories";
import Trash from "../Trash/Trash";

const items = [
	{ ico: PlusLogo, txt: "New" },
	{ ico: NoteLogo, txt: "Notes" },
	{ ico: ArchiveLogo, txt: "Archives" },
];

const Actions = (): React$Node => {
	return items.map((item, id) => {
		const ComponentLogo = item.ico;
		return (
			<div
				key={item.txt.concat(id.toString())}
				className='flex-center pt10 pb10 pl40'>
				<ComponentLogo className='ico svg-20 svg-light cursor-pointer' />
				<span className='pl18 pr3 fs22'>{item.txt}</span>
			</div>
		);
	});
};

const MainNavbar = (): React$Element<"div"> => {
	return (
		<div className='main-navbar pt10 bg-nord1 txt-light'>
			<div className='navbar-actions'>
				<Actions />
				<div className='separator mt20 mb20 ml35 mr35' />
			</div>
			<Categories />
			<Trash />
		</div>
	);
};

export default MainNavbar;
