import { useEffect } from 'react';
import './App.css';
import axios from 'axios';



function App() {

  const handleLogin = async () => {
    const { data } = await axios({
      method: 'post',
      url: 'http://localhost:4000/login',
      data: {
        email: 'email@d.com',
        password: 'description 5'
      }
    });
    const { token } = data;
    console.log(token);
    if (token) {
      localStorage.setItem('token', token);
    }
  }

  useEffect(() => {
    handleLogin()
  }, [])

const handleOnSubmit = async (e) => {
    e.preventDefault();
    const { title, description } = e.target;
    const { data } = await axios({
      method: 'post',
      url: 'http://localhost:4000/api/projects',
      data: {
        title: title.value,
        description: description.value
      },
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
    console.log(data);
}


  return (
    <div className="App">
      <header className="App-header">
       
       <form onSubmit={handleOnSubmit}>
          <input type="text" name="title" />
          <input type="text" name="description" />
          <button type="submit">Create project</button>

       </form>

      </header>
    </div>
  );
}

export default App;
