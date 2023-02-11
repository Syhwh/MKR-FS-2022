import React, { useContext } from 'react';
import { useFetchData } from '../components/Hooks/useFetchData';
import { TasksList } from '../components/Tasks/TasksList';
import { AuthContext } from '../context/AuthContext';

export const Tasks = () => {
  const { logged } = useContext(AuthContext);
  const posts = useFetchData('https://jsonplaceholder.typicode.com/posts');
  const products = useFetchData('https://fakestoreapi.com/products');

  console.log(posts);
  console.log(products);

  return logged ? <TasksList /> : <h1>Not logged in</h1>;
  // return isLoggedIn && <TasksList />;
};
