import React from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { UseTodoContext } from "../contexts/TodoProvider";

const TodoAddForm = () => {
	const { todos, setTodo } = UseTodoContext();
	const InputFieldID = "todoTitleFieldId";
	const TextareaID = "todoTextareaId";
	const formRef = React.createRef();

	const onSubmitForm = ($event) => {
		$event.preventDefault();

		const todoElements = $event.target.elements;

		const newTodo = {
			id: Math.random(),
			title: todoElements.namedItem(InputFieldID).value,
			todo: todoElements.namedItem(TextareaID).value,
		};

		setTodo([newTodo, ...todos]);
	};

	const getTodoValue = (key) => {
		const selectedTodo = todos.find((todo) => todo.active);
		return selectedTodo ? selectedTodo[key] : "";
	};

	return (
		<>
			<h2>Add new</h2>
			<Form onSubmit={onSubmitForm} ref={formRef}>
				<Form.Group controlId={InputFieldID}>
					<Form.Label>Title</Form.Label>
					<Form.Control type="text" defaultValue={getTodoValue("title")} />
				</Form.Group>
				<Form.Group controlId={TextareaID}>
					<Form.Label>Task</Form.Label>
					<Form.Control as="textarea" rows={5} defaultValue={getTodoValue("todo")} />
				</Form.Group>
				<Button variant="primary" type="submit">
					Submit
				</Button>
			</Form>
		</>
	);
};

export default TodoAddForm;
