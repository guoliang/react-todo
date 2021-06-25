import React, { useState } from "react";

import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import TodoItem from "./components/TodoItem";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
	const [todos, setTodo] = useState([
		{
			id: 0,
			title: "Hello",
			todo: "World",
			active: false,
		},
	]);

	const todoList = todos.map((todo) => (
		<ListGroup.Item as="li" key={todo.id} id={todo.id} active={todo.active}>
			<TodoItem allTodos={todos} removeTodo={setTodo} id={todo.id} title={todo.title} />
		</ListGroup.Item>
	));

	return (
		<Container>
			<h2>Todo Items</h2>
			<ListGroup>{todoList}</ListGroup>
		</Container>
	);
}

export default App;
