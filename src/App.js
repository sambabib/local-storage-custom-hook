import { useState } from 'react';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);

  const handleIncrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div className='app'>
      <div className='app__container'>
        <p>your count is: {count}</p>
        <button onClick={handleIncrementCount}>click me!</button>
      </div>
    </div>
  );
};

export default App;
