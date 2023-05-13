import React, { useEffect, useState } from 'react';
import { listenEvent } from '@sm/utils';

const App = () => {
  const [tasks, updateTasks] = useState([]);

  useEffect(() => {
    listenEvent('@sm/react-route/todo/add-task', (e) => {
      updateTasks((oldTasks) => [...oldTasks, e.detail]);
    });
  }, []);

  return (
    <>
      <h1>@mc/react-parcel</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Task</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.describe}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default App;
