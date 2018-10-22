import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ResultsTable from './QuestionsTable';
import { connect } from 'react-redux';
import {
    doTogglePanel,
    fetchGetUserQuestions,
    fetchGetTagQuestions,
    sortPanelContentByAuthor,
    sortPanelContentByTitle,
    sortPanelContentByAnswers
} from '../action-creators';
import Loader from './Loader';

class Panel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            panelIsOpen: false
        };
    }
    getPanelState = () => {
        const { panelIsOpen } = this.props.panel;
        this.setState({ panelIsOpen });
    };
    componentDidMount() {
        this.getPanelState();
    }
    componentDidUpdate(prevProps) {
        if (this.props.panel.panelIsOpen !== prevProps.panel.panelIsOpen) {
            this.getPanelState();
        }
    }
    getUserQuestions = userId => {
        this.props.fetchGetUserQuestions(userId);
    };
    getTagQuestions = tag => {
        this.props.fetchGetTagQuestions(tag);
    };
    sortByAuthor = () => {
        this.props.sortPanelContentByAuthor();
    };
    sortByTitle = () => {
        this.props.sortPanelContentByTitle();
    };
    sortByAnswers = () => {
        this.props.sortPanelContentByAnswers();
    };
    render() {
        const hidePanel = () => this.props.doTogglePanel(false);
        return (
            <div>
                <Modal
                    isOpen={this.state.panelIsOpen}
                    toggle={hidePanel}
                    className={this.props.className}
                >
                    <ModalHeader toggle={hidePanel}>Fast view panel</ModalHeader>
                    <ModalBody>
                        {this.props.panel.panelContentIsLoading ? (
                            <Loader />
                        ) : (
                            <ResultsTable
                                sortByAuthor={this.sortByAuthor}
                                sortByTitle={this.sortByTitle}
                                sortByAnswers={this.sortByAnswers}
                                onUserClick={this.getUserQuestions}
                                onTagClick={this.getTagQuestions}
                                items={this.props.panel.panelItems}
                                toggle={hidePanel}
                            />
                        )}
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" onClick={hidePanel}>
                            Close
                        </Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const { panel } = state;
    return { panel };
};

const mapDispatchToProps = {
    doTogglePanel,
    fetchGetUserQuestions,
    fetchGetTagQuestions,
    sortPanelContentByAuthor,
    sortPanelContentByTitle,
    sortPanelContentByAnswers
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Panel);
