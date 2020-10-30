//@flow
import React from "react";
import "./App.scss";

import Temp from "./components/_temp/Temp";
import AppStatus from "./components/AppStatus/AppStatus";

const App = (): React$Element<"div"> => {
	const [temp, setTemp] = React.useState(false);
	React.useEffect(() => {
		const timer = setTimeout(() => setTemp(true), 10000);
		return () => clearTimeout(timer);
	});
	return <div className='App'>{!temp ? <Temp /> : <AppStatus />}</div>;
};

export default App;
