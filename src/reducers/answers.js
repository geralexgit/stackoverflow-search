import {
    GET_ANSWERS_LOADING,
    GET_ANSWERS_ERROR,
    GET_ANSWERS_SUCCESS
} from '../actions';

const initialState = {
    answersLoading: false,
    answersError: false,
    answersList: []
};

export const answers = (state = initialState, action) => {
    switch (action.type) {
        case GET_ANSWERS_LOADING:
            return {
                ...state,
                answersLoading: action.answersLoading
            };

        case GET_ANSWERS_ERROR:
            return {
                ...state,
                answersError: action.answersError
            };

        case GET_ANSWERS_SUCCESS:
            return { ...state, answersList: action.answersList };

        default:
            return state;
    }
};
