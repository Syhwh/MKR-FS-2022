import React, { useContext } from 'react';
import { TasksList } from '../components/Tasks/TasksList';
import { AuthContext } from '../context/AuthContext';

export const Tasks = () => {
  const { logged } = useContext(AuthContext);

  return logged ? <TasksList /> : <h1>Not logged in</h1>;
  // return isLoggedIn && <TasksList />;
};
