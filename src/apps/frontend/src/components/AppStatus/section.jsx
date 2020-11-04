//@flow
import React from "react";

class section {
	txt: string;
	constructor(txt: string) {
		this.txt = txt;
	}
}
const account: section = new section("Account");
const profile: section = new section("Profile");
const socialNetworks: section = new section("Social Networks");
export const sectionAppStatusActions: {
	settings: Array<React$Element<"div">>,
} = {
	settings: [account, profile, socialNetworks].map((e, i) => (
		<div
			className='section fs20 pl20 flex-center height36 cursor-pointer'
			key={e.txt.concat(i.toString())}>
			{e.txt}
		</div>
	)),
};
