import  { useState } from 'react';
import  TodoList  from './TodoList';
import  InputForm  from './InputForm';
import './App.css'

/* Start with dummy data
const sampleData: Task[] = [
  {
    text: 'Study Pre-Class',
    complete: false,
  },
  {
    text: 'Attend In-Class',
    complete: true,
  },
];*/

function App() {
  // const [tasks, setTasks] = useState(sampleData);
  const [tasks, setTasks] = useState<Task[]>([]);

  const toggleFn: ToggleTask = (selectedTask: Task) => {
    const newTodos = tasks.map((item) => {
      if (item === selectedTask) {
        return {
          ...item,
          complete: !item.complete,
        };
      }
      return item;
    });
    setTasks(newTodos);
  };

  const add: AddFn = (text: string) => {
    const newTodo = { text, complete: false };
    setTasks([...tasks, newTodo]);
  };

  return (
    <div className='container'>
      <div className="form-control">
      <h3 className='text'>To Do App With TypeScript</h3>

      <div className="form">
      <InputForm addTodo={add} />
      <TodoList tasks={tasks} toggleTodo={toggleFn} />
      </div>
      </div>
    </div>
  );
}

export default App;