//@flow
import React from "react";
import noteBooks from "./NoteBooks";
import "./categories.css";

// const items = [noteBooks];
const items = Array(8).fill(noteBooks);

const Category = (): Array<React$Element<"div">> =>
	items.map((item, id) => {
		const ComponentLogo = item.ico;
		const ComponentChildren = item.componentChildren;
		return (
			<div className='category' key={item.txt.concat(id.toString())}>
				<div className='flex-center flex-jc-sb height50 pr40 pl40 fs22 font-weight-6'>
					<span>{item.txt}</span>
					<ComponentLogo className='ico svg-20 svg-light cursor-pointer' />
				</div>
				<ComponentChildren />
			</div>
		);
	});

const Categories = (): React$Node => {
	return (
		<div className='categories'>
			<Category />
		</div>
	);
};

export default Categories;
