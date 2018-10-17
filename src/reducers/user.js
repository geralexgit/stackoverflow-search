import {
  GET_USER_QUESTIONS_LOADING,
  GET_USER_QUESTIONS_ERROR,
  GET_USER_QUESTIONS_SUCCESS
} from '../actions';

const initialState = {
  userQuestionsLoading: false,
  userQuestionsError: false,
  userQuestions: []
};

export const userQuestions = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_QUESTIONS_LOADING:
      return {
        ...state,
        userQuestionsLoading: action.userQuestionsLoading
      };

    case GET_USER_QUESTIONS_ERROR:
      return {
        ...state,
        userQuestionsError: action.userQuestionsError
      };

    case GET_USER_QUESTIONS_SUCCESS:
      return { ...state, userQuestions: action.userQuestions };

    default:
      return state;
  }
};
