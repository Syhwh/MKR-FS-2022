import { useEffect, useState } from 'react';

export const useLocalStorage = (key, initialValue = null) => {
  const [value, setValue] = useState(() => {
    try {
      const saved = localStorage.getItem(key);
      return saved ? JSON.parse(saved) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  const deleteValue = () => {
    localStorage.removeItem(key);
  };

  return [value, setValue, deleteValue];
};
