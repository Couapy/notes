//@flow
export const SET_SECTION_COMPONENT = "SET_SECTION_COMPONENT";

export const initialStateSection: Array<React$Element<"div">> = [
	<div key='default'>OK</div>,
];

export const setSectionComponent = (
	sectionComponent: Array<React$Element<"div">>
): { sectionComponent: Array<React$Element<"div">>, type: string, ... } => ({
	type: SET_SECTION_COMPONENT,
	sectionComponent,
});

const section = (
	state: Array<React$Element<"div">> = initialStateSection,
	action: { type: string, sectionComponent: Array<React$Element<"div">> }
): Array<React$Element<"div">> => {
	switch (action.type) {
		case SET_SECTION_COMPONENT:
			return [...action.sectionComponent];
		default:
			return state;
	}
};

export default section;
