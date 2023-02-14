/* eslint-disable react/jsx-no-constructed-context-values */

import { useLocalStorage } from '../components/Hooks/useLocalstorage';
import { validateUser } from '../components/utils/validateUser';
import { AuthContext } from './AuthContext';

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage('user', false);

  const handleLogin = ({ email, password }) => {
    //  set to backend api
    const isValidUser = validateUser({
      email,
      password
    });
    setUser(isValidUser);
  };

  const handleLogout = () => {
    setUser(false);
  };

  return (
    <AuthContext.Provider value={{ user, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};
