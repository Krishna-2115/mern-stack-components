import React, { useReducer } from "react";

const initialState = [];

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, { id: action.payload.id, name: action.payload.name, quantity: 1 }];
    case "REMOVE_ITEM":
      return state.filter(item => item.id !== action.payload);
    case "INCREMENT":
      return state.map(item =>
        item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
      );
    case "DECREMENT":
      return state.map(item =>
        item.id === action.payload && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    default:
      return state;
  }
};

const Cart = () => {
  const [cart, dispatch] = useReducer(cartReducer, initialState);

  const addItem = name => {
    dispatch({ type: "ADD_ITEM", payload: { id: Date.now(), name } });
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <button onClick={() => addItem("Product A")}>Add Product A</button>
      <button onClick={() => addItem("Product B")}>Add Product B</button>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            {item.name} - {item.quantity}
            <button onClick={() => dispatch({ type: "INCREMENT", payload: item.id })}>+</button>
            <button onClick={() => dispatch({ type: "DECREMENT", payload: item.id })}>-</button>
            <button onClick={() => dispatch({ type: "REMOVE_ITEM", payload: item.id })}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
