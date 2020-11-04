//@flow

export type TArrayReactDiv = Array<React$Element<"div">>;

export type TSetSectionComponent = {
	type: "SET_SECTION_COMPONENT",
	payload: { open: boolean, sectionComponent: TArrayReactDiv, section: String },
};
