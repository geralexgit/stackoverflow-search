import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import {
	searchResults,
	currentRoute,
	userQuestions,
	panel,
	tag
} from './reducers/';

const rootReducer = combineReducers({
	searchResults,
	currentRoute,
	userQuestions,
	panel,
	tag,
	routing: routerReducer
});

export default rootReducer;
