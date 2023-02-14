import { useEffect, useState } from 'react';

export const useFetchData = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const dataResponse = await response.json();
      setData(dataResponse);
      setLoading(false);
    } catch (err) {
      setError(err);
      console.error(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return { data, error, loading };
};
