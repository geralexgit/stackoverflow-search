import React from 'react';
import ResultsTable from '../components/ResultsTable';
import { connect } from 'react-redux';

const ResultsPage = props => (
  <ResultsTable searchResults={props.searchResults} />
);

const mapStateToProps = state => {
  const { searchResults } = state;
  return { searchResults };
};

export default connect(mapStateToProps)(ResultsPage);
