import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const About = () => {
  const navigate = useNavigate();

  const handleClick = (a) => {
    if (a === 'passs') {
      navigate('/login');
    } else {
      navigate('/error');
    }
  };
  return (
    <div>
      {' '}
      <button type="button" onClick={handleClick}>
        Login
      </button>
      <Link to="/"> Home </Link>
    </div>
  );
};
