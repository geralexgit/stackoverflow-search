import {
    TOGGLE_PANEL,
    LOAD_PANEL_ITEMS,
    PANEL_CONTENT_LOADING,
    SORT_PANEL_CONTENT_BY_AUTHOR,
    SORT_PANEL_CONTENT_BY_TITLE,
    SORT_PANEL_CONTENT_BY_ANSWERS
} from '../actions';

const initialState = {
    panelIsOpen: false,
    panelContentIsLoading: false,
    panelItems: []
};

export const panel = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_PANEL:
            return { ...state, panelIsOpen: action.panelIsOpen };

        case PANEL_CONTENT_LOADING:
            return {
                ...state,
                panelContentIsLoading: action.panelContentIsLoading
            };

        case LOAD_PANEL_ITEMS:
            return { ...state, panelItems: action.panelItems };

        case SORT_PANEL_CONTENT_BY_AUTHOR:
            return {
                ...state,
                panelItems: state.panelItems.slice().sort((a, b) => {
                    const nameA = a.owner.display_name.toLowerCase(),
                        nameB = b.owner.display_name.toLowerCase();
                    if (nameA < nameB) return -1;
                    if (nameA > nameB) return 1;
                    return 0;
                })
            };

        case SORT_PANEL_CONTENT_BY_TITLE:
            return {
                ...state,
                panelItems: state.panelItems.slice().sort(function(a, b) {
                    const titleA = a.title.toLowerCase(),
                        titleB = b.title.toLowerCase();
                    if (titleA < titleB) return -1;
                    if (titleA > titleB) return 1;
                    return 0;
                })
            };

        case SORT_PANEL_CONTENT_BY_ANSWERS:
            return {
                ...state,
                panelItems: state.panelItems.slice().sort(function(a, b) {
                    if (a.answer_count > b.answer_count) return -1;
                    if (a.answer_count < b.answer_count) return 1;
                    return 0;
                })
            };

        default:
            return state;
    }
};
