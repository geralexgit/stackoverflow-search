import React, { Component } from 'react';
import nanoid from 'nanoid';
import { Table, Badge } from 'reactstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
    fetchGetUserQuestions,
    fetchGetTagQuestions
} from '../action-creators';

const ResultsItem = props => {
    const {
        question_id,
        title,
        tags,
        onUserClick,
        onQuestionClick,
        onTagClick
    } = props;
    const name = props.owner.display_name;
    const userId = props.owner.user_id;
    const answerCount = props.answer_count;
    return (
        <tr>
            <th scope="row">
                <button
                    onClick={() => onUserClick(userId)}
                    className="button-reset"
                >
                    {name}
                </button>
            </th>
            <td>
                <Link to={`/answers/${question_id}`} onClick={() => onQuestionClick(question_id)}>
                    {title}
                </Link>
            </td>
            <td>
                <Link to={`/answers/${question_id}`} onClick={() => onQuestionClick(question_id)}>
                    {answerCount}
                </Link>
            </td>
            <td>
                {tags.map(tag => (
                    <button
                        key={nanoid(10)}
                        className="button-reset"
                        onClick={() => onTagClick(tag)}
                    >
                        <Badge color="primary">{tag}</Badge>
                    </button>
                ))}
            </td>
        </tr>
    );
};

class QuestionsTable extends Component {
    constructor(props) {
        super(props);
        this.getUserQuestions = this.getUserQuestions.bind(this);
        this.getTagQuestions = this.getTagQuestions.bind(this);
    }
    getUserQuestions = userId => {
        this.props.fetchGetUserQuestions(userId);
    };
    getTagQuestions = tag => {
        this.props.fetchGetTagQuestions(tag);
    };
    render() {
        return (
            <Table hover responsive>
                <thead>
                    <tr>
                        <th>Автор</th>
                        <th>Тема</th>
                        <th>Ответов</th>
                        <th>Теги</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.items &&
                        this.props.items.map(item => (
                            <ResultsItem
                                onUserClick={this.getUserQuestions}
                                onTagClick={this.getTagQuestions}
                                onQuestionClick={this.getAnswers}
                                key={nanoid(10)}
                                {...item}
                            />
                        ))}
                </tbody>
            </Table>
        );
    }
}

const mapDispatchToProps = {
    fetchGetUserQuestions,
    fetchGetTagQuestions,
};

export default connect(
    null,
    mapDispatchToProps
)(QuestionsTable);
