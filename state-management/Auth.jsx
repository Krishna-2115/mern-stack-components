import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from './authSlice';

const Auth = () => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>{isAuthenticated ? 'Logged In' : 'Logged Out'}</h2>
      <button onClick={() => dispatch(login())}>Login</button>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
};

export default Auth;
