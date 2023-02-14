import { useParams } from 'react-router-dom';
import { useFetchData } from '../Hooks/useFetchData';

export const PostDetail = () => {
  const { id } = useParams();
  const { data, loading } = useFetchData(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  if (loading) return <h1>Loading...</h1>;
  return (
    <div>
      <h1>Post Detail</h1>
      <p>{data.title}</p>
      <p>{data.body}</p>
    </div>
  );
};
