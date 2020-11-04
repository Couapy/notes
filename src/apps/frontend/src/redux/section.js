//@flow
import { SET_SECTION_COMPONENT, RESET_SECTION_COMPONENT } from "./_actionTypes";

import type { TArrayReactDiv, TSetSectionComponent } from "./_flowTypes";
type TState = {
	open: boolean,
	section: String | null,
	sectionComponent: Array<React$Element<"div">>,
	...
};
export const initialStateSection: TState = {
	open: false,
	section: null,
	sectionComponent: [<div key='initialSection' />],
};

const reducer = (
	state: TState = initialStateSection,
	action: TSetSectionComponent
): TState => {
	switch (action.type) {
		case SET_SECTION_COMPONENT:
			return {
				...state,
				open: action.payload.open,
				section: action.payload.section,
				sectionComponent: [...action.payload.sectionComponent],
			};
		case RESET_SECTION_COMPONENT:
			return {
				...state,
				sectionComponent: [...initialStateSection.sectionComponent],
			};
		default:
			return state;
	}
};

export default reducer;
