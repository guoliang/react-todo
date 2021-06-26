import React, { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const TodoContext = createContext([]);

const TodoProvider = ({ children, initialTodo = [] }) => {
	const [todos, setTodo] = useState(initialTodo);

	return <TodoContext.Provider value={{ todos, setTodo }}>{children}</TodoContext.Provider>;
};

TodoProvider.propTypes = {
	children: PropTypes.node.isRequired,
	initialTodo: PropTypes.array,
};

export const UseTodoContext = () => useContext(TodoContext);
export default TodoProvider;
