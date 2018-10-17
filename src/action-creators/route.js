import { CHANGE_ROUTE } from '../actions';
import { history } from '../helpers';

export function changeRoute(currentRoute) {
  return {
    type: CHANGE_ROUTE,
    currentRoute
  };
}

export function doChangeRoute(currentRoute) {
  history.push(currentRoute);
  return dispatch => dispatch(changeRoute(currentRoute));
}
