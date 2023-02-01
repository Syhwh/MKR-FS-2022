import React, { useEffect, useState } from 'react';

export const Posts = ({ name, date }) => {
  const [posts, setPosts] = useState([]);

  console.log('Mounted');

  const handleRequest = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.cx/posts');
      const data = await response.json();
      console.log({ data });
    } catch (error) {
      console.log('error async / await ', error.message);
    }
  };

  useEffect(() => {
    const handleRequest = async () => {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts'
      );
      const data = await response.json();
      setPosts(data);
      console.log({ data });
      console.log('useEffect');
    };
    handleRequest();
    return () => {
      console.log('Unmounted');
    };
  }, []);

  //   setTimeout(() => {
  //     setPosts([
  //       { id: 1, title: 'Post 1' },
  //       { id: 2, title: 'Post 2' },
  //       { id: 3, title: 'Post 3' },
  //     ]);
  //   }, 5000);

  if (posts.length === 0) return <div>Loading...</div>;

  return (
    <div>
      Posts
      {posts.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
};
