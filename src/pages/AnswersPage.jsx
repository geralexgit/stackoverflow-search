import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchGetAnswers } from '../action-creators';

class AnswersPage extends Component {
	constructor(props) {
		super(props);
		this.getAnswersList = this.getAnswersList.bind(this);
	}
	componentDidMount() {
		this.getAnswersList(this.props.match.params.questionId);
	}
	getAnswersList(questionId) {
		this.props.fetchGetAnswers(questionId);
	}
	render() {
		return <h1>Answers here</h1>;
	}
}

const mapStateToProps = state => {
	const { answers } = state;
	return { answers };
};

const mapDispatchToProps = { fetchGetAnswers };

export default withRouter(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(AnswersPage)
);
