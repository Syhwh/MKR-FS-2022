import { useEffect, useState } from 'react';
import './App.css';
import { Form } from './formularios/Form';
import { Posts } from './lifeCycle/Posts';

function App() {
  const [state, setState] = useState();

  console.log('app state', state);

  return (
    <div className="App">
      <header className="App-header">
<Form/>
        <span className="text">learn react</span>
      </header>
    </div>
  );
}

export default App;
