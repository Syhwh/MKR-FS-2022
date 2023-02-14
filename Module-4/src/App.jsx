/* eslint-disable import/no-extraneous-dependencies */
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';
import { Tasks } from './pages/Tasks';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navigation } from './components/Navigation/Navigation';
import { RequireAuth } from './components/Navigation/RequireAuth';
import { LoginPage } from './pages/LoginPage';
import { Posts } from './pages/Posts';
import { PostDetail } from './components/Posts/PostDetail';

const App = () => (
  <>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<RequireAuth />}>
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="posts/:id" element={<PostDetail />} />
      </Route>

      <Route path="*" element={<h1>404: Not Found</h1>} />
    </Routes>
  </>
);

export default App;
