import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { searchResults, currentRoute, userQuestions } from './reducers/';

const rootReducer = combineReducers({
  searchResults,
  currentRoute,
  userQuestions,
  routing: routerReducer
});

export default rootReducer;
