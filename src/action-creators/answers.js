import {
	GET_ANSWERS_LOADING,
	GET_ANSWERS_ERROR,
	GET_ANSWERS_SUCCESS
} from '../actions/';

import { getAnswersList } from '../api';

export function getAnswersIsLoading(bool) {
	return {
		type: GET_ANSWERS_LOADING,
		answersLoading: bool
	};
}

export function getAnswersError(bool) {
	return {
		type: GET_ANSWERS_ERROR,
		answersError: bool
	};
}

export function getAnswersSuccess(answersList) {
	return {
		type: GET_ANSWERS_SUCCESS,
		answersList
	};
}

export function fetchGetAnswers(questionId) {
	return dispatch => {
		dispatch(getAnswersIsLoading(true));
		return getAnswersList(questionId)
			.then(res => {
				dispatch(getAnswersSuccess(res.data.items));
				dispatch(getAnswersIsLoading(false));
			})
			.catch(error => {
				console.error('axios error', error);
				dispatch(getAnswersError(true));
				dispatch(getAnswersIsLoading(false));
			});
	};
}
