import { Alert, TextField } from '@mui/material';
import React, { useState } from 'react';

export const Form = () => {
  const [value, setValue] = useState('');
  const [state, setState] = useState();
  const [error, setError] = useState({});

  console.log('value', value);

  const handleOnClick = (e) => {
    e.preventDefault();
    if (value.length < 3) {
      setError({ error: 'error' });
    } else {
      setState(value);
    }
    console.log('submit', state);
  };

  console.log('mounted');

  return (
    <form>
      <label htmlFor="input">{state}</label>

      <TextField
        id="input"
        label="Outlined"
        variant="outlined"
        onChange={(e) => setValue(e.target.value)}
      />

      <button type="submit" onClick={handleOnClick}>
        {' '}
        Submit
      </button>
      {error.error && (
        <Alert severity="error">This is an error alert — check it out!</Alert>
      )}
    </form>
  );
};
