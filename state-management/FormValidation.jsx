import { useReducer } from 'react';

const formReducer = (state, action) => {
  return { ...state, [action.name]: action.value };
};

const Form = () => {
  const [state, dispatch] = useReducer(formReducer, { username: '', email: '' });

  return (
    <div>
      <input name="username" onChange={(e) => dispatch(e.target)} />
      <input name="email" onChange={(e) => dispatch(e.target)} />
      <p>{JSON.stringify(state)}</p>
    </div>
  );
};

export default Form;
