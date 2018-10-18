import { TOGGLE_PANEL } from '../actions';

const initialState = {
  panelIsOpen: false
};

export const panelOptions = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_PANEL:
      return { ...state, panelIsOpen: action.panelIsOpen };

    default:
      return state;
  }
};
