import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import ResultsTable from '../components/QuestionsTable';
import {
    makeSearch,
    fetchGetUserQuestions,
    fetchGetTagQuestions
} from '../action-creators';
import Loader from '../components/Loader';

class ResultsPage extends Component {
    constructor(props) {
        super(props);
        this.getResults = this.getResults.bind(this);
        this.getUserQuestions = this.getUserQuestions.bind(this);
        this.getTagQuestions = this.getTagQuestions.bind(this);
    }
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
    render() {
        return (
            <div>
                {this.props.searchResults.searchResultsLoading ? (
                    <Loader />
                ) : (
                    <ResultsTable
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
    fetchGetTagQuestions
};

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(ResultsPage)
);
