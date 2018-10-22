import {
    SEARCH_RESULTS_LOADING,
    SEARCH_RESULTS_ERROR,
    SEARCH_RESULTS_SUCCESS,
    SORT_RESULTS_BY_AUTHOR,
    SORT_RESULTS_BY_TITLE,
    SORT_RESULTS_BY_ANSWERS
} from '../actions/';
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

export function sortSearchResultsByAuthor() {
    return {
        type: SORT_RESULTS_BY_AUTHOR
    };
}

export function sortSearchResultsByTitle() {
    return {
        type: SORT_RESULTS_BY_TITLE
    };
}

export function sortSearchResultsByAnswers() {
    return {
        type: SORT_RESULTS_BY_ANSWERS
    };
}

export function makeSearch(searchTerm) {
    return dispatch => {
        dispatch(searchResultsIsLoading(true));
        return search(searchTerm)
            .then(res => {
                dispatch(searchResultsSuccess(res.data.items));
                dispatch(searchResultsIsLoading(false));
            })
            .catch(error => {
                console.error('axios error', error);
                dispatch(searchResultsError(true));
                dispatch(searchResultsIsLoading(false));
            });
    };
}
