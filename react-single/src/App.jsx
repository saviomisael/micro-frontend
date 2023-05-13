import { useState } from 'react';

const App = ({ name }) => {
  // name vem de singleSpa
  const [counter, setCounter] = useState(0);

  const handleChange = (type) =>
    setCounter((prevCounter) => prevCounter + type);

  return (
    <>
      <h1>{name}</h1>
      <h3>Counter: {counter}</h3>
      <button onClick={() => handleChange(-1)}>Decrement</button>
      <button onClick={() => handleChange(1)}>Increment</button>
    </>
  );
};

export default App;
