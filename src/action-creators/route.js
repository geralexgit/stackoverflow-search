import { CHANGE_ROUTE } from '../actions';
import { history } from '../helpers';

export function changeRoute(currentRoute) {
  return {
    type: CHANGE_ROUTE,
    currentRoute
  };
}

export function doChangeRoute(newRoute) {
  history.push(newRoute);
  return dispatch => dispatch(changeRoute(newRoute));
}
