import React from 'react';
import SearchForm from '../components/Search';

const startSearch = values => {
	console.log(values);
};

const SearchPage = () => (
	<div className="SearchPage">
		<div className="SearchWrapper">
			<SearchForm onSubmit={startSearch} />
		</div>
	</div>
);

export default SearchPage;
