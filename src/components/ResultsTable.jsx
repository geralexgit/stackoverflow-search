import React from 'react';
import { Table, Badge } from 'reactstrap';
import { randomElement } from '../helpers';

const ResultsItem = props => {
  const name = props.owner.display_name;
  const title = props.title;
  const answerCount = props.answer_count;
  const tags = props.tags;
  const colors = [
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark'
  ];
  return (
    <tr>
      <th scope="row">{name}</th>
      <td>{title}</td>
      <td>{answerCount}</td>
      <td>
        {tags.map(tag => (
          <Badge color={randomElement(colors)}>{tag}</Badge>
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
        <ResultsItem key={item.owner.user_id} {...item} />
      ))}
    </tbody>
  </Table>
);

export default ResultsTable;
