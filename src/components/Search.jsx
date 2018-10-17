import React from 'react';
import { InputGroup, InputGroupAddon, Button } from 'reactstrap';
import { Form, Field } from 'react-final-form';

const SearchForm = props => (
	<Form
		onSubmit={props.onSubmit}
		render={({ handleSubmit, submitting, pristine }) => (
			<form onSubmit={handleSubmit}>
				<InputGroup>
					<Field
						name="searchTerm"
						component="input"
						type="text"
						className="form-control"
						placeholder="Search"
					/>
					<InputGroupAddon addonType="append">
						<Button
							color="success"
							type="submit"
							disabled={submitting || pristine}
						>
							Search
						</Button>
					</InputGroupAddon>
				</InputGroup>
			</form>
		)}
	/>
);

export default SearchForm;
