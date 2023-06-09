import { emitEvent } from '@sm/utils';
import { useState } from 'react';
import Parcel from 'single-spa-react/parcel';
import { v4 } from 'uuid';

const App = ({ name }) => {
  const [task, updateTask] = useState('');

  const handleChange = (event) => {
    updateTask(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    emitEvent('@sm/react-route/todo/add-task', {
      id: v4(),
      describe: task,
    });
    updateTask('');
  };

  return (
    <>
      <h1>{name}</h1>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={task} />
        <button>Add</button>
      </form>
      <Parcel config={() => System.import('@sm/react-parcel')} />
    </>
  );
};

export default App;
