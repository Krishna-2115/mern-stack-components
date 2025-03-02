import React, { useReducer } from "react";

const initialState = { past: [], present: "", future: [] };

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return { past: [...state.past, state.present], present: action.payload, future: [] };
    case "UNDO":
      return state.past.length
        ? { past: state.past.slice(0, -1), present: state.past[state.past.length - 1], future: [state.present, ...state.future] }
        : state;
    case "REDO":
      return state.future.length
        ? { past: [...state.past, state.present], present: state.future[0], future: state.future.slice(1) }
        : state;
    default:
      return state;
  }
};

const UndoRedo = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <button onClick={() => dispatch({ type: "UNDO" })} disabled={!state.past.length}>Undo</button>
      <button onClick={() => dispatch({ type: "REDO" })} disabled={!state.future.length}>Redo</button>
      <button onClick={() => dispatch({ type: "ADD", payload: "New Entry" })}>Add</button>
      <p>Current: {state.present}</p>
    </div>
  );
};

export default UndoRedo;
