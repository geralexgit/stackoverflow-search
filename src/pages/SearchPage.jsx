import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import SearchForm from '../components/Search';

class SearchPage extends Component {
    constructor(props) {
        super(props);
        this.startSearch = this.startSearch.bind(this);
    }
    startSearch = values => {
        this.props.history.push(`results/${values.searchTerm}`);
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

export default withRouter(SearchPage);
