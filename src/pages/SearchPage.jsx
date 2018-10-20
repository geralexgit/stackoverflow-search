import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchForm from '../components/Search';
import { doChangeRoute } from '../action-creators/';

class SearchPage extends Component {
	constructor(props) {
		super(props);
		this.startSearch = this.startSearch.bind(this);
	}
	startSearch = values => {
		this.props.doChangeRoute(`results/${values.searchTerm}`);
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
	doChangeRoute
};

export default connect(
	null,
	mapDispatchToProps
)(SearchPage);
