import { TOGGLE_PANEL } from '../actions';

export function togglePanel(bool) {
  return {
    type: TOGGLE_PANEL,
    panelIsOpen: bool
  };
}

export function doTogglePanel(bool) {
  return dispatch => dispatch(togglePanel(bool));
}
