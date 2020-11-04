//@flow
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import section, { initialStateSection } from "./section";

const initialState = { section: initialStateSection };

const rootReducer = combineReducers({
	section,
});

const composeEnhancers = composeWithDevTools({ trace: true });

const store = createStore(
	rootReducer,
	initialState,
	composeEnhancers(applyMiddleware(thunk))
);

export default (props: {
	children: React$Element<"div">,
	store?: [],
}): React$Node => <Provider store={store} {...props} />;
