import React, { Component } from 'react';
import ResultsTable from '../components/ResultsTable';
import { connect } from 'react-redux';
import { callGetUserQuestions } from '../action-creators';

class ResultsPage extends Component {
  constructor(props) {
    super(props);
    this.getUserQuestions = this.getUserQuestions.bind(this);
  }
  getUserQuestions = userId => {
    this.props.callGetUserQuestions(userId);
  };
  render() {
    return (
      <ResultsTable
        searchResults={this.props.searchResults}
        getUserQuestions={this.getUserQuestions}
      />
    );
  }
}

const mapStateToProps = state => {
  const { searchResults } = state;
  return { searchResults };
};

const mapDispatchToProps = {
  callGetUserQuestions
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResultsPage);
