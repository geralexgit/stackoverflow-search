import React from 'react';
import { Table, Badge } from 'reactstrap';
import nanoid from 'nanoid';

const ResultsItem = props => {
  const name = props.owner.display_name;
  const userId = props.owner.user_id;
  const answerCount = props.answer_count;
  const title = props.title;
  const tags = props.tags;
  return (
    <tr>
      <th onClick={() => props.getUserQuestions(userId)} scope="row">
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

const ResultsTable = props => (
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
      {props.searchResults.searchResults.map(item => (
        <ResultsItem
          getUserQuestions={props.getUserQuestions}
          key={nanoid(10)}
          {...item}
        />
      ))}
    </tbody>
  </Table>
);

export default ResultsTable;
