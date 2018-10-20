import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import ResultsTable from '../components/ResultsTable';
import { makeSearch } from '../action-creators';

class ResultsPage extends Component {
	constructor(props) {
		super(props);
		this.getResults = this.getResults.bind(this);
	}
	componentDidMount() {
		this.getResults(this.props.match.params.searchTerm);
	}
	getResults = searchTerm => {
		this.props.makeSearch(searchTerm);
	};

	render() {
		return (
			<div>
				<ResultsTable items={this.props.searchResults.searchResults} />
			</div>
		);
	}
}

const mapStateToProps = state => {
	const { searchResults, panel } = state;
	return { searchResults, panel };
};

const mapDispatchToProps = { makeSearch };

export default withRouter(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(ResultsPage)
);
