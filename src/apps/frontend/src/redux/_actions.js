//@flow
import { SET_SECTION_COMPONENT, RESET_SECTION_COMPONENT } from "./_actionTypes";

import type { TArrayReactDiv } from "./_flowTypes";

export const setSectionComponent = (
	payload: TArrayReactDiv
): { payload: TArrayReactDiv, type: string, ... } => ({
	type: SET_SECTION_COMPONENT,
	payload,
});

export const resetSectionComponent = (): { type: string, ... } => ({
	type: RESET_SECTION_COMPONENT,
});
