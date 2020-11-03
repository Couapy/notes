//@flow
import React from "react";
import "./App.scss";

import Temp from "./components/_temp/Temp";
import AppStatus from "./components/AppStatus/AppStatus";
import EditorBar from "./components/EditorBar/EditorBar";
import Navbar from "./components/Navbar/Navbar";
import Editor from "./components/Editor/Editor";

import ReduxStore from "./redux/";

const App = (): React$Element<"div"> => {
	const [temp, setTemp] = React.useState(false);
	const timerCount = 10000;
	React.useEffect(() => {
		const timer = setTimeout(() => setTemp(true), timerCount);
		return () => clearTimeout(timer);
	});
	return (
		<div className='App'>
			{!temp ? (
				<Temp setTemp={setTemp} timerCount={timerCount} />
			) : (
				<ReduxStore>
					<div className='App-container'>
						<AppStatus />
						<EditorBar />
						<Navbar />
						<Editor></Editor>
					</div>
				</ReduxStore>
			)}
		</div>
	);
};

export default App;
