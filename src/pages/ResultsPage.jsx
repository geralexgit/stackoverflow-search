import React, { Component } from 'react';
import { Container, Col, Row } from 'reactstrap';
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
				<Container>
					<Row>
						<Col sm={7}>
							<h2>Search results</h2>
							<ResultsTable
								items={this.props.searchResults.searchResults}
							/>
						</Col>
						<Col sm={5}>
							<h2>Fast view panel</h2>
						</Col>
					</Row>
				</Container>
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
