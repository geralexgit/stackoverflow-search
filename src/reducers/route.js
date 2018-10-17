import { CHANGE_ROUTE } from '../actions';

const initialState = {
  currentRoute: '/'
};

export const currentRoute = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_ROUTE:
      return { ...state, currentRoute: action.currentRoute };

    default:
      return state;
  }
};
