import React from "react";
import PropTypes from "prop-types";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const TodoAddForm = ({ allTodos, addTodo }) => {
	const InputFieldID = "todoTitleFieldId";
	const TextareaID = "todoTextareaId";

	const onSubmitForm = ($event) => {
		$event.preventDefault();

		const todoElements = $event.target.elements;

		const newTodo = {
			id: Math.random(),
			title: todoElements.namedItem(InputFieldID).value,
			todo: todoElements.namedItem(TextareaID).value,
		};

		addTodo([newTodo, ...allTodos]);
	};

	return (
		<>
			<h2>Add new</h2>
			<Form onSubmit={onSubmitForm}>
				<Form.Group controlId={InputFieldID}>
					<Form.Label>Title</Form.Label>
					<Form.Control type="text" />
				</Form.Group>
				<Form.Group controlId={TextareaID}>
					<Form.Label>Task</Form.Label>
					<Form.Control as="textarea" rows={5} />
				</Form.Group>
				<Button variant="primary" type="submit">
					Submit
				</Button>
			</Form>
		</>
	);
};

TodoAddForm.propTypes = {
	allTodos: PropTypes.array.isRequired,
	addTodo: PropTypes.func.isRequired,
};
export default TodoAddForm;
