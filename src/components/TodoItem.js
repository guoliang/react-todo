import React from "react";
import PropTypes from "prop-types";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { UseTodoContext } from "../contexts/TodoProvider";
// import TodoContext from "../contexts/TodoProvider";

const TodoItem = ({ id, title }) => {
	const { todos, setTodo } = UseTodoContext();

	const onSelect = () => {
		const newSelectedTodo = todos.map((todo) => {
			todo.active = todo.id === id;
			return todo;
		});
		setTodo(newSelectedTodo);

		console.info(todos);
	};

	const onRemove = () => {
		const filteredTodos = todos.filter((todo) => todo.id !== id);
		setTodo(filteredTodos);
	};

	return (
		<Row className="align-items-center">
			<Col className="text-center" onClick={onSelect}>
				{title}
			</Col>
			<Col className="text-center">
				<Button id={id} onClick={onRemove}>
					Remove
				</Button>
			</Col>
		</Row>
	);
};

TodoItem.propTypes = {
	title: PropTypes.string.isRequired,
	id: PropTypes.number.isRequired,
};
export default TodoItem;
