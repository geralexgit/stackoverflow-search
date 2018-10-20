import {
	TOGGLE_PANEL,
	LOAD_PANEL_ITEMS,
	PANEL_CONTENT_LOADING
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

		default:
			return state;
	}
};
