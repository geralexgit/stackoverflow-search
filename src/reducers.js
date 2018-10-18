import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import {
  searchResults,
  currentRoute,
  userQuestions,
  panel
} from './reducers/';

const rootReducer = combineReducers({
  searchResults,
  currentRoute,
  userQuestions,
  panel,
  routing: routerReducer
});

export default rootReducer;