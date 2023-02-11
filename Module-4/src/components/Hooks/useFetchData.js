import { useEffect, useState } from 'react';

export const useFetchData = (url) => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    const response = await fetch(url);
    const dataResponse = await response.json();
    setData(dataResponse);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return { data };
};
