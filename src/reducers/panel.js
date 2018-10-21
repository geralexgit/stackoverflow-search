import {
    TOGGLE_PANEL,
    LOAD_PANEL_ITEMS,
    PANEL_CONTENT_LOADING,
    SORT_PANEL_CONTENT_BY_AUTHOR
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

        default:
            return state;
    }
};
