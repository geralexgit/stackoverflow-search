import {
    SEARCH_RESULTS_LOADING,
    SEARCH_RESULTS_ERROR,
    SEARCH_RESULTS_SUCCESS,
    SORT_RESULTS_BY_AUTHOR
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

        case SORT_RESULTS_BY_AUTHOR:
            return {
                ...state,
                searchResults: state.searchResults
                    .slice()
                    .sort(function(a, b) {
                        var nameA = a.owner.display_name.toLowerCase(),
                            nameB = b.owner.display_name.toLowerCase();
                        if (nameA < nameB) return -1;
                        if (nameA > nameB) return 1;
                        return 0;
                    })
            };

        default:
            return state;
    }
};
