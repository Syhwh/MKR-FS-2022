import Alert from '@mui/material/Alert';
import { useState } from 'react';

export const MyText = () => {
  const [value, setValue] = useState('');
  return (
    <>
      <Alert color="warning" variant="outlined">
        {' '}
        This is an alert
      </Alert>
      <label htmlFor="input">Message</label>
      <input
        id="input"
        onChange={(event) => setValue(event.target.value)}
        value={value}
      />
      <h2>{value}</h2>
    </>
  );
};
