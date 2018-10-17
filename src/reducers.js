import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { searchResults, currentRoute } from './reducers/';

const rootReducer = combineReducers({
  searchResults,
  currentRoute,
  routing: routerReducer
});

export default rootReducer;
