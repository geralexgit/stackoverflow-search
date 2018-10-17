import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchForm from '../components/Search';
import { makeSearch } from '../action-creators/';

class SearchPage extends Component {
	constructor(props) {
		super(props);
		this.startSearch = this.startSearch.bind(this);
	}
	startSearch = values => {
		this.props.makeSearch(values.searchTerm);
	};
	render() {
		return (
			<div className="SearchPage">
				<div className="SearchWrapper">
					<SearchForm onSubmit={this.startSearch} />
				</div>
			</div>
		);
	}
}

const mapDispatchToProps = {
	makeSearch
};

export default connect(
	null,
	mapDispatchToProps
)(SearchPage);
