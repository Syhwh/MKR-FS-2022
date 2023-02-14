import { Navigate, Outlet } from 'react-router-dom';

import { useAuth } from '../Hooks/useAuth';

export const RequireAuth = () => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};
