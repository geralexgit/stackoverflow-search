import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { searchResults } from './reducers/';

const rootReducer = combineReducers({
	searchResults,
	routing: routerReducer
});

export default rootReducer;
