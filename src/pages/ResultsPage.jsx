import React, { Component } from 'react';
import ResultsTable from '../components/ResultsTable';
import { connect } from 'react-redux';
import { callGetUserQuestions, doTogglePanel } from '../action-creators';

class ResultsPage extends Component {
  constructor(props) {
    super(props);
    this.getUserQuestions = this.getUserQuestions.bind(this);
    this.togglePanel = this.togglePanel.bind(this);
  }
  getUserQuestions = userId => {
    this.props.callGetUserQuestions(userId);
    this.togglePanel(true);
  };
  togglePanel = bool => {
    this.props.doTogglePanel(bool);
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
  const { searchResults, panelIsOpen } = state;
  return { searchResults, panelIsOpen };
};

const mapDispatchToProps = {
  callGetUserQuestions,
  doTogglePanel
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResultsPage);
