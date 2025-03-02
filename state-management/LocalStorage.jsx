import React, { useReducer, useEffect } from "react";

const initialState = JSON.parse(localStorage.getItem("data")) || [];

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.payload];
    case "REMOVE_ITEM":
      return state.filter((_, index) => index !== action.payload);
    default:
      return state;
  }
};

const LocalStorageApp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(state));
  }, [state]);

  return (
    <div>
      <button onClick={() => dispatch({ type: "ADD_ITEM", payload: "New Item" })}>Add Item</button>
      <ul>
        {state.map((item, index) => (
          <li key={index}>
            {item} <button onClick={() => dispatch({ type: "REMOVE_ITEM", payload: index })}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LocalStorageApp;
