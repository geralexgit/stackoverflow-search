import {
	SEARCH_RESULTS_LOADING,
	SEARCH_RESULTS_ERROR,
	SEARCH_RESULTS_SUCCESS
} from '../actions';

const initialState = {
	searchResultsLoading: false,
	searchResultsError: false,
	searchResults: []
};

export const searchResults = (state = initialState, action) => {
	switch (action.type) {
		case SEARCH_RESULTS_LOADING:
			return {
				...state,
				searchResultsLoading: action.searchResultsLoading
			};

		case SEARCH_RESULTS_ERROR:
			return {
				...state,
				searchResultsError: action.searchResultsError
			};

		case SEARCH_RESULTS_SUCCESS:
			return { ...state, searchResults: action.searchResults };

		default:
			return state;
	}
};
