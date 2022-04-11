import { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);

  const handleIncrementCount = () => {
    setCount(count + 1);
  };

  const handleResetCount = () => {
    setCount(0)
  }

  useEffect(() => {
    const data = localStorage.getItem('click-count');

    setCount(JSON.parse(data));
  }, []);

  useEffect(() => {
    localStorage.setItem('click-count', JSON.stringify(count));
  });

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
