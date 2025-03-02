import React, { useReducer, useState } from "react";

const initialState = [];

function todoReducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, { id: Date.now(), text: action.payload, completed: false }];
    case "TOGGLE_TODO":
      return state.map(todo =>
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
      );
    case "REMOVE_TODO":
      return state.filter(todo => todo.id !== action.payload);
    default:
      return state;
  }
}

const TodoApp = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [text, setText] = useState("");

  const addTodo = () => {
    if (text.trim() !== "") {
      dispatch({ type: "ADD_TODO", payload: text });
      setText("");
    }
  };

  return (
    <div>
      <h2>Todo List</h2>
      <input value={text} onChange={e => setText(e.target.value)} />
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {state.map(todo => (
          <li key={todo.id} style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
            {todo.text}
            <button onClick={() => dispatch({ type: "TOGGLE_TODO", payload: todo.id })}>Toggle</button>
            <button onClick={() => dispatch({ type: "REMOVE_TODO", payload: todo.id })}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
