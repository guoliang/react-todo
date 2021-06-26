import React from "react";

import Container from "react-bootstrap/Container";

import ListTodos from "./components/ListTodos";
import TodoAddForm from "./components/TodoAddForm";
import TodoProvider from "./contexts/TodoProvider";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
	const initialTodos = [
		{
			id: Math.random(),
			title: "Hello",
			todo: "World",
			active: false,
		},
	];

	return (
		<TodoProvider initialTodo={initialTodos}>
			<Container>
				<h1>Todo</h1>
				<TodoAddForm />
				<ListTodos />
			</Container>
		</TodoProvider>
	);
};

export default App;
