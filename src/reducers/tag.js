import {
	GET_TAG_QUESTIONS_LOADING,
	GET_TAG_QUESTIONS_ERROR,
	GET_TAG_QUESTIONS_SUCCESS
} from '../actions';

const initialState = {
	tagQuestionsLoading: false,
	tagQuestionsError: false,
	tagQuestions: []
};

export const tag = (state = initialState, action) => {
	switch (action.type) {
		case GET_TAG_QUESTIONS_LOADING:
			return {
				...state,
				tagQuestionsLoading: action.tagQuestionsLoading
			};

		case GET_TAG_QUESTIONS_ERROR:
			return {
				...state,
				tagQuestionsError: action.tagQuestionsError
			};

		case GET_TAG_QUESTIONS_SUCCESS:
			return { ...state, tagQuestions: action.tagQuestions };

		default:
			return state;
	}
};
