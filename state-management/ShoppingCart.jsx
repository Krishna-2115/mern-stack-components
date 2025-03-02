import React, { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, { id: Date.now(), name: action.payload, quantity: 1 }];
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

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

// Usage Example
const ShoppingCart = () => {
  const { cart, dispatch } = useCart();

  return (
    <div>
      <h2>Shopping Cart</h2>
      <button onClick={() => dispatch({ type: "ADD_ITEM", payload: "Product A" })}>
        Add Product A
      </button>
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

export default ShoppingCart;
