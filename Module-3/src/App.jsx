import logo from './logo.svg';
import './App.css';
import { Counter } from './components/task-1/Counter';
import { MyText } from './components/task-2/MyText';
import { MyList } from './components/task-3/MyList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Counter /> */}
        {/* <MyText /> */}
        <MyList />
        learn react
      </header>
    </div>
  );
}

export default App;
