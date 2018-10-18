import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import {
  searchResults,
  currentRoute,
  userQuestions,
  panelOptions
} from './reducers/';

const rootReducer = combineReducers({
  searchResults,
  currentRoute,
  userQuestions,
  panelOptions,
  routing: routerReducer
});

export default rootReducer;