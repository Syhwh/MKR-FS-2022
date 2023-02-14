import React from 'react';
import { useFetchData } from '../Hooks/useFetchData';
import { TaskItem } from '../Tasks/TaskItem';

export const PostsList = () => {
  const { data: posts, loading } = useFetchData(
    'https://jsonplaceholder.typicode.com/posts'
  );

  if (loading) return <div>Loading...</div>;
  return (
    <div>
      <h1>Posts List</h1>
      {posts.map((post) => (
        <TaskItem task={post} key={post.id} />
      ))}
    </div>
  );
};
