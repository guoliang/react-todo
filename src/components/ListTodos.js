import React from "react";

import ListGroup from "react-bootstrap/ListGroup";

import { UseTodoContext } from "../contexts/TodoProvider";
import TodoItem from "./TodoItem";

const ListTodos = () => {
	const { todos } = UseTodoContext();

	const todoList = todos.map((todo) => (
		<ListGroup.Item as="li" key={todo.id} active={todo.active}>
			<TodoItem id={todo.id} title={todo.title} />
		</ListGroup.Item>
	));

	return (
		<>
			<h2>Items</h2>
			<ListGroup>{todoList}</ListGroup>
		</>
	);
};

export default ListTodos;
