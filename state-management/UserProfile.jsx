import { useContext } from 'react';
import { UserContext } from './UserContext';

const UserProfile = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <h2>User: {user ? user.name : 'Guest'}</h2>
      <button onClick={() => setUser({ name: 'John Doe' })}>Set User</button>
      <button onClick={() => setUser(null)}>Logout</button>
    </div>
  );
};

export default UserProfile;
