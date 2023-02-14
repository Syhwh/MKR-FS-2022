import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

export const useAuth = () => {
  const {
    user: isAuthenticated,
    handleLogin: setAuthenticated,
    handleLogout: logout
  } = useContext(AuthContext);

  return {
    isAuthenticated,
    setAuthenticated,
    logout
  };
};
