import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import {
	searchResults,
	userQuestions,
	panel,
	answers,
	tag
} from './reducers/';

const rootReducer = combineReducers({
	searchResults,
	userQuestions,
	panel,
	answers,
	tag,
	routing: routerReducer
});

export default rootReducer;
