import React from "react";
const TodosContext = React.createContext({
  todos: [
    { id: 1, text: "todo one", complete: false },
    { id: 2, text: "todo two", complete: false },
    { id: 3, text: "todo three", complete: true },
  ],
});

export default TodosContext;
