/* eslint-disable import/no-extraneous-dependencies */
import {  Route, Routes } from 'react-router-dom';
import './App.css';
import { About } from './pages/About';
import { Home } from './pages/Home';
// import { Form } from './formularios/Form';

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="*" element={<h1>404: Not Found</h1>} />
  </Routes>
);

export default App;
