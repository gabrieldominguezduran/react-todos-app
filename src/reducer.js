import { v4 as uuid } from "uuid";

export default function reducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      if (!action.payload) {
        return state;
      }
      if (state.todos.findIndex((t) => t.text === action.payload) > -1) {
        return state;
      }
      const newTodo = {
        id: uuid(),
        text: action.payload,
        complete: false,
      };

      const addedTodos = [...state.todos, newTodo];

      return {
        ...state,
        todos: addedTodos,
      };
    case "SET_CURRENT_TODO":
      return {
        ...state,
        currentTodo: action.payload,
      };

    case "TOGGLE_TODO":
      const toogleTodos = state.todos.map((t) =>
        t.id === action.payload.id
          ? { ...action.payload, complete: !action.payload.complete }
          : t
      );
      return {
        ...state,
        todos: toogleTodos,
      };
    case "UPDATE_TODO":
      if (!action.payload) {
        return state;
      }
      if (state.todos.findIndex((t) => t.text === action.payload) > -1) {
        return state;
      }
      const updatedTodo = { ...state.currentTodo, text: action.payload };
      const todoIndex = state.todos.findIndex(
        (t) => t.id === state.currentTodo.id
      );
      const updatedTodos = [
        ...state.todos.slice(0, todoIndex),
        updatedTodo,
        ...state.todos.slice(todoIndex + 1),
      ];

      return {
        ...state,
        currentTodo: {},
        todos: updatedTodos,
      };
    case "REMOVE_TODO":
      const filteredTodos = state.todos.filter(
        (t) => t.id !== action.payload.id
      );
      const isRemovedTodo =
        state.currentTodo.id === action.payload.id ? {} : state.currentTodo;
      return {
        ...state,
        currentTodo: isRemovedTodo,
        todos: filteredTodos,
      };
    default:
      return state;
  }
}
