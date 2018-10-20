import {
	GET_USER_QUESTIONS_LOADING,
	GET_USER_QUESTIONS_ERROR,
	GET_USER_QUESTIONS_SUCCESS
} from '../actions/';
import { getUserQuestions } from '../api';
import { doTogglePanel } from './panel';
import { loadPanelContent } from './panel';

export function getUserQuestionsIsLoading(bool) {
	return {
		type: GET_USER_QUESTIONS_LOADING,
		getUserQuestionsLoading: bool
	};
}

export function getUserQuestionsError(bool) {
	return {
		type: GET_USER_QUESTIONS_ERROR,
		getUserQuestionsError: bool
	};
}

export function getUserQuestionsSuccess(userQuestions) {
	return {
		type: GET_USER_QUESTIONS_SUCCESS,
		userQuestions
	};
}

export function callGetUserQuestions(userId) {
	console.log(userId);
	return dispatch => {
		dispatch(getUserQuestionsIsLoading(true));
		return getUserQuestions(userId)
			.then(res => {
				dispatch(getUserQuestionsSuccess(res.data.items));
				dispatch(loadPanelContent(res.data.items));
				dispatch(getUserQuestionsIsLoading(false));
				dispatch(doTogglePanel(true));
			})
			.catch(error => {
				console.error('axios error', error);
				dispatch(getUserQuestionsError(true));
				dispatch(getUserQuestionsIsLoading(false));
			});
	};
}
