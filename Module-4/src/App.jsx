/* eslint-disable import/no-extraneous-dependencies */
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';
import { Tasks } from './pages/Tasks';

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<Tasks />} />
    <Route path="*" element={<h1>404: Not Found</h1>} />
  </Routes>
);

export default App;
