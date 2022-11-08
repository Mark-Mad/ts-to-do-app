import React from 'react';
import TodoListItem  from './TodoListItem';

interface Props {
  tasks: Task[];
  toggleTodo: ToggleTask;
}

const TodoList: React.FC<Props> = ({ tasks, toggleTodo }) => {
  return (
    <ul>
      {tasks.map((todo) => (
        <TodoListItem key={todo.text} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </ul>
  );
};

export default TodoList