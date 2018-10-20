import React from 'react';
import nanoid from 'nanoid';
import { Table } from 'reactstrap';
import { connect } from 'react-redux';
import {
	fetchGetUserQuestions,
	fetchGetTagQuestions,
	doChangeRoute
} from '../action-creators';

const Answer = props => {
	const { score, answer_id } = props;
	const name = props.owner.display_name;
	return (
		<tr>
			<td>{name}</td>
			<td>
				<span>
					<a
						target="_blank"
						rel="noopener noreferrer"
						href={`https://stackoverflow.com/a/${answer_id}`}
					>
						Open
					</a>
				</span>
			</td>
			<td>{score}</td>
		</tr>
	);
};

const AnswersTable = props => (
	<Table hover responsive>
		<thead>
			<tr>
				<th>Author</th>
				<th>Link</th>
				<th>Score</th>
			</tr>
		</thead>
		<tbody>
			{props.items &&
				props.items.map(answer => (
					<Answer key={nanoid(10)} {...answer} />
				))}
		</tbody>
	</Table>
);

const mapDispatchToProps = {
	fetchGetUserQuestions,
	fetchGetTagQuestions,
	doChangeRoute
};

export default connect(
	null,
	mapDispatchToProps
)(AnswersTable);
