import React, { Component } from 'react';
import { Table, Badge } from 'reactstrap';
import nanoid from 'nanoid';
import { connect } from 'react-redux';

import { callGetUserQuestions } from '../action-creators';

const ResultsItem = props => {
  const name = props.owner.display_name;
  const userId = props.owner.user_id;
  const answerCount = props.answer_count;
  const title = props.title;
  const tags = props.tags;

  return (
    <tr>
      <th onClick={() => props.onUserClick(userId)} scope="row">
        {name}
      </th>
      <td>{title}</td>
      <td>{answerCount}</td>
      <td>
        {tags.map(tag => (
          <Badge key={nanoid(10)} color="primary">
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
  }
  getUserQuestions = userId => {
    this.props.callGetUserQuestions(userId);
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
  callGetUserQuestions
};

export default connect(
  null,
  mapDispatchToProps
)(ResultsTable);
