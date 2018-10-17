import React from 'react';
import { Table } from 'reactstrap';

const ResultsTable = () => (
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
			<tr>
				<th scope="row">1</th>
				<td>Mark</td>
				<td>Otto</td>
				<td>@mdo</td>
			</tr>
			<tr>
				<th scope="row">2</th>
				<td>Jacob</td>
				<td>Thornton</td>
				<td>@fat</td>
			</tr>
			<tr>
				<th scope="row">3</th>
				<td>Larry</td>
				<td>the Bird</td>
				<td>@twitter</td>
			</tr>
		</tbody>
	</Table>
);

export default ResultsTable;
