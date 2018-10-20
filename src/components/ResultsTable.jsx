import React, { Component } from 'react';
import nanoid from 'nanoid';
import { Table, Badge } from 'reactstrap';
import { connect } from 'react-redux';
import {
	fetchGetUserQuestions,
	fetchGetTagQuestions,
	doChangeRoute
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
			<th onClick={() => onUserClick(userId)} scope="row">
				{name}
			</th>
			<td>
				<span onClick={() => onQuestionClick(question_id)}>
					{title}
				</span>
			</td>
			<td>{answerCount}</td>
			<td>
				{tags.map(tag => (
					<Badge
						onClick={() => onTagClick(tag)}
						key={nanoid(10)}
						color="primary"
					>
						{tag}
					</Badge>
				))}
			</td>
		</tr>
	);
};

class ResultsTable extends Component {
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
	getAnswers = questionId => {
		this.props.doChangeRoute(`/answers/${questionId}`);
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
	doChangeRoute
};

export default connect(
	null,
	mapDispatchToProps
)(ResultsTable);
