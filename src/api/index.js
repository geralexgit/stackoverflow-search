import axios from 'axios';

const API_URL = 'https://api.stackexchange.com/2.2/';

export const search = searchTerm => {
	return axios.get(
		`${API_URL}/search?order=desc&sort=activity&intitle=${searchTerm}&site=stackoverflow`
	);
};
