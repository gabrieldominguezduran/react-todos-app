import React from "react";

const todos = JSON.parse(localStorage.getItem("todos")) || [];
const TodosContext = React.createContext({
  todos: todos,
  currentTodo: {},
});

export default TodosContext;
