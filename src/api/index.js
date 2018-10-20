import axios from 'axios';

const API_URL = 'https://api.stackexchange.com/2.2';

export const search = searchTerm => {
	return axios.get(
		`${API_URL}/search?order=desc&sort=activity&intitle=${searchTerm}&site=stackoverflow`
	);
};

export const getUserQuestions = userId => {
	return axios.get(
		`${API_URL}/users/${userId}/questions?order=desc&sort=activity&site=stackoverflow`
	);
};

export const getTagQuestions = tag => {
	return axios.get(`${API_URL}/tags/${tag}/faq?site=stackoverflow`);
};
