import React from "react";
const TodosContext = React.createContext({
  todos: [
    { id: 1, text: "todo one", commplete: false },
    { id: 2, text: "todo two", commplete: false },
    { id: 3, text: "todo three", commplete: true },
  ],
});

export default TodosContext;
