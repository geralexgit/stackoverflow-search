import { TOGGLE_PANEL, LOAD_PANEL_ITEMS } from '../actions';

const initialState = {
	panelIsOpen: false,
	panelItems: []
};

export const panel = (state = initialState, action) => {
	switch (action.type) {
		case TOGGLE_PANEL:
			return { ...state, panelIsOpen: action.panelIsOpen };

		case LOAD_PANEL_ITEMS:
			return { ...state, panelItems: action.panelItems };

		default:
			return state;
	}
};
