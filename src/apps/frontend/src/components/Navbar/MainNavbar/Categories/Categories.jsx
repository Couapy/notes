//@flow
import React from "react";
import noteBooks from "./NoteBooks";

const items = [noteBooks];

const Categories = (): React$Node => {
	return items.map((item, id) => {
		const ComponentLogo = item.ico;
		const ComponentChildren = item.componentChildren;
		return (
			<>
				<div
					key={item.txt.concat(id.toString())}
					className='flex-center flex-js-sb height50 pr40 pl40'>
					<span>{item.txt}</span>
					<ComponentLogo className='svg-20 svg-light' />
				</div>
				<ComponentChildren />
			</>
		);
	});
};

export default Categories;
