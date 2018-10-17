import {
	SEARCH_RESULTS_LOADING,
	SEARCH_RESULTS_ERROR,
	SEARCH_RESULTS_SUCCESS
} from '../actions/';
import { history } from '../helpers';
import { search } from '../api';

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
	console.log(searchTerm);
	return dispatch => {
		dispatch(searchResultsIsLoading(true));
		return search(searchTerm)
			.then(res => {
				dispatch(searchResultsIsLoading(false));
				dispatch(searchResultsSuccess(res.data.items));
				history.push('/results');
			})
			.catch(error => {
				console.error('axios error', error);
				dispatch(searchResultsIsLoading(false));
				dispatch(searchResultsSuccess(true));
			});
	};
}
