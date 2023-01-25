import logo from './logo.svg';
import { Counter } from './components/task-1/Counter';
import { MyText } from './components/task-2/MyText';
import { MyList } from './components/task-3/MyList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <MyText />
        <MyList />
        <span className='text'>learn react</span>
      </header>
    </div>
  );
}

export default App;
