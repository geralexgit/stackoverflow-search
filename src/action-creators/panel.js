import {
    TOGGLE_PANEL,
    LOAD_PANEL_ITEMS,
    PANEL_CONTENT_LOADING,
    SORT_PANEL_CONTENT_BY_AUTHOR
} from '../actions';

export function togglePanel(bool) {
    return {
        type: TOGGLE_PANEL,
        panelIsOpen: bool
    };
}

export function loadPanelItems(panelItems) {
    return {
        type: LOAD_PANEL_ITEMS,
        panelItems
    };
}

export function panelContentLoading(bool) {
    return {
        type: PANEL_CONTENT_LOADING,
        panelContentIsLoading: bool
    };
}

export function sortPanelContentByAuthor() {
    return {
        type: SORT_PANEL_CONTENT_BY_AUTHOR
    };
}

export function doTogglePanel(bool) {
    return dispatch => dispatch(togglePanel(bool));
}

export function loadPanelContent(panelContent) {
    return dispatch => dispatch(loadPanelItems(panelContent));
}

