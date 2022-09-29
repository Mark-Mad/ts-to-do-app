import React from 'react';
import { TodoListItem } from './TodoListItem';

interface Props {
  tasks: Task[];
  toggleTodo: ToggleTask;
}

export const TodoList: React.FC<Props> = ({ tasks, toggleTodo }) => {
  return (
    <ul>
      {tasks.map((todo) => (
        <TodoListItem key={todo.text} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </ul>
  );
};