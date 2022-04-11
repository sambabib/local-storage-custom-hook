import { useLocalStorage } from './hooks/useLocalStorage';
import './App.css';

const App = () => {
  const [count, setCount] = useLocalStorage(0, 'click-count');

  const handleIncrementCount = () => {
    setCount(count + 1);
  };

  const handleResetCount = () => {
    setCount(0)
  }

  return (
    <div className='app'>
      <div className='app__container'>
        <p>your count is: {count}</p>
        <button onClick={handleIncrementCount}>click me!</button>
        <button onClick={handleResetCount}>reset count</button>
      </div>
    </div>
  );
};

export default App;
