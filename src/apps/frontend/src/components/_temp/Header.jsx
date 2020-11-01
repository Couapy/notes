//@flow
import React from "react";

const Header = (props: {
	setTemp: (((boolean) => boolean) | boolean) => void,
}): React$Element<"header"> => {
	return (
		<header className='App-header'>
			<h1 onClick={() => props.setTemp(true)}>Hello World!</h1>
		</header>
	);
};

export default Header;
