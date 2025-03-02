import React, { useReducer } from "react";

const initialState = { name: "", email: "", password: "" };

const formReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_INPUT":
      return { ...state, [action.field]: action.payload };
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

const FormHandling = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleChange = e => {
    dispatch({ type: "CHANGE_INPUT", field: e.target.name, payload: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log("Form Submitted:", state);
    dispatch({ type: "RESET" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={state.name} onChange={handleChange} placeholder="Name" />
      <input type="email" name="email" value={state.email} onChange={handleChange} placeholder="Email" />
      <input type="password" name="password" value={state.password} onChange={handleChange} placeholder="Password" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormHandling;
