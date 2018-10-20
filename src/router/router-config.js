import SearchPage from '../pages/SearchPage';
import ResultsPage from '../pages/ResultsPage';

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
	}
];
