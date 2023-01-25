import logo from './logo.svg';
import { Counter } from './Old_tasks/task-1/Counter';
import { MyText } from './Old_tasks/task-2/MyText';
import { MyList } from './Old_tasks/task-3/MyList';
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
