import React from 'react';
import ResultsTable from '../components/ResultsTable';
import { connect } from 'react-redux';

const ResultsPage = props => (
  <ResultsTable items={props.searchResults.searchResults} />
);

const mapStateToProps = state => {
  const { searchResults, panel } = state;
  return { searchResults, panel };
};

export default connect(mapStateToProps)(ResultsPage);
