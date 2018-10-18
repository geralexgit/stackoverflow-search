import {
  SEARCH_RESULTS_LOADING,
  SEARCH_RESULTS_ERROR,
  SEARCH_RESULTS_SUCCESS
} from '../actions/';
import { search } from '../api';
import { doChangeRoute } from './route';

export function searchResultsIsLoading(bool) {
  return {
    type: SEARCH_RESULTS_LOADING,
    searchResultsLoading: bool
  };
}

export function searchResultsError(bool) {
  return {
    type: SEARCH_RESULTS_ERROR,
    searchResultsError: bool
  };
}

export function searchResultsSuccess(searchResults) {
  return {
    type: SEARCH_RESULTS_SUCCESS,
    searchResults
  };
}

export function makeSearch(searchTerm) {
  return dispatch => {
    dispatch(searchResultsIsLoading(true));
    return search(searchTerm)
      .then(res => {
        dispatch(searchResultsSuccess(res.data.items));
        dispatch(doChangeRoute('/results'));
        dispatch(searchResultsIsLoading(false));
      })
      .catch(error => {
        console.error('axios error', error);
        dispatch(searchResultsError(true));
        dispatch(searchResultsIsLoading(false));
      });
  };
}
