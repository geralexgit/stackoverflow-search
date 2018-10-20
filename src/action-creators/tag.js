import {
	GET_TAG_QUESTIONS_LOADING,
	GET_TAG_QUESTIONS_ERROR,
	GET_TAG_QUESTIONS_SUCCESS
} from '../actions/';
import { getTagQuestions } from '../api';
import { doTogglePanel } from './panel';
import { loadPanelContent } from './panel';

import { panelContentLoading } from '../action-creators';

export function getTagQuestionsIsLoading(bool) {
	return {
		type: GET_TAG_QUESTIONS_LOADING,
		tagQuestionsLoading: bool
	};
}

export function getTagQuestionsError(bool) {
	return {
		type: GET_TAG_QUESTIONS_ERROR,
		tagQuestionsError: bool
	};
}

export function getTagQuestionsSuccess(tagQuestions) {
	return {
		type: GET_TAG_QUESTIONS_SUCCESS,
		tagQuestions
	};
}

export function fetchGetTagQuestions(tag) {
	return dispatch => {
		dispatch(getTagQuestionsIsLoading(true));
		dispatch(panelContentLoading(true));
		dispatch(doTogglePanel(true));
		return getTagQuestions(tag)
			.then(res => {
				dispatch(getTagQuestionsSuccess(res.data.items));
				dispatch(loadPanelContent(res.data.items));
				dispatch(panelContentLoading(false));
			})
			.catch(error => {
				console.error('axios error', error);
				dispatch(getTagQuestionsError(true));
				dispatch(getTagQuestionsIsLoading(false));
				dispatch(panelContentLoading(false));
			});
	};
}
