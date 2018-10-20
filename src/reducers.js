import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import {
	searchResults,
	currentRoute,
	userQuestions,
	panel,
	answers,
	tag
} from './reducers/';

const rootReducer = combineReducers({
	searchResults,
	currentRoute,
	userQuestions,
	panel,
	answers,
	tag,
	routing: routerReducer
});

export default rootReducer;
