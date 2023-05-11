import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { useQuery, gql, useMutation } from '@apollo/client';

function App() {
  const [count, setCount] = useState(0);
  const [posts, setPosts] = useState([])

  const GET_POSTS = gql`
    query Posts {
      posts {
        id
        description
        title
      }
    }
  `;

  const { error, loading, data } = useQuery(GET_POSTS);

  console.log(data);

  const ADD_POST = gql`
    mutation AddPost($title: String!, $description: String!) {
      createPost(title: $title, description: $description) {
        id
        title
        description
      }
    }`;

  const [
    addPost,
    { loading: mutationLoading, error: mutationError, data: mutationData },
  ] = useMutation(ADD_POST);

  const createPost = () => {
    addPost({
      variables: {
        title: 'Post from client',
        description: 'description from client',
      },
    });
  };
  useEffect(() => {
    if (data) {
      setPosts(data.posts);
    }
  }, [data])


  if (error || mutationError) return <p>Error</p>;
  if (loading || mutationLoading) return <p>Loading...</p>;

  console.log({ mutationData });

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <button onClick={createPost}>create POst</button>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
