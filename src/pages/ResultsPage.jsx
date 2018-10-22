import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import ResultsTable from '../components/QuestionsTable';
import {
    makeSearch,
    fetchGetUserQuestions,
    fetchGetTagQuestions,
    sortSearchResultsByAuthor,
    sortSearchResultsByTitle,
    sortSearchResultsByAnswers
} from '../action-creators';
import Loader from '../components/Loader';

class ResultsPage extends Component {
    componentDidMount() {
        this.getResults(this.props.match.params.searchTerm);
    }
    getResults = searchTerm => {
        this.props.makeSearch(searchTerm);
    };
    getUserQuestions = userId => {
        this.props.fetchGetUserQuestions(userId);
    };
    getTagQuestions = tag => {
        this.props.fetchGetTagQuestions(tag);
    };
    sortByAuthor = () => {
        this.props.sortSearchResultsByAuthor();
    };
    sortByTitle = () => {
        this.props.sortSearchResultsByTitle();
    };
    sortByAnswers = () => {
        this.props.sortSearchResultsByAnswers();
    };
    render() {
        return (
            <div>
                {this.props.searchResults.searchResultsLoading ? (
                    <Loader />
                ) : (
                    <ResultsTable
                        sortByTitle={this.sortByTitle}
                        sortByAuthor={this.sortByAuthor}
                        sortByAnswers={this.sortByAnswers}
                        onUserClick={this.getUserQuestions}
                        onTagClick={this.getTagQuestions}
                        items={this.props.searchResults.searchResults}
                    />
                )}
            </div>
        );
    }
}

const mapStateToProps = state => {
    const { searchResults, panel } = state;
    return { searchResults, panel };
};

const mapDispatchToProps = {
    makeSearch,
    fetchGetUserQuestions,
    fetchGetTagQuestions,
    sortSearchResultsByAuthor,
    sortSearchResultsByTitle,
    sortSearchResultsByAnswers
};

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(ResultsPage)
);
