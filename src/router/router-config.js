import SearchPage from '../pages/SearchPage';
import ResultsPage from '../pages/ResultsPage';
import AnswersPage from '../pages/AnswersPage';

export const routes = [
	{
		path: '/',
		component: SearchPage,
		exact: true
	},
	{
		path: '/results/:searchTerm',
		component: ResultsPage,
		exact: true
	},
	{
		path: '/answers/:questionId',
		component: AnswersPage,
		exact: true
	}
];
