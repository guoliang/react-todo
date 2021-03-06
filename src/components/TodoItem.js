import React from "react";
import PropTypes from "prop-types";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const TodoItem = ({ allTodos, updateTodos, title, id }) => {
	const onSelect = () => {
		const newSelectedTodo = allTodos.map((todo) => {
			todo.active = todo.id === id;
			return todo;
		});
		updateTodos(newSelectedTodo);
	};

	const onRemove = () => {
		const filteredTodos = allTodos.filter((todo) => todo.id !== id);
		updateTodos(filteredTodos);
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
	allTodos: PropTypes.array.isRequired,
	updateTodos: PropTypes.func.isRequired,
	title: PropTypes.string.isRequired,
	id: PropTypes.number.isRequired,
};
export default TodoItem;
