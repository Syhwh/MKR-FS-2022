import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => (
  <div className="App">
    <header className="App-header">
      Home
      <span className="text">learn react</span>
      <Link to="/about"> About </Link>
    </header>
  </div>
);
