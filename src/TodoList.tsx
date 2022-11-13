import React from 'react';
import TodoListItem  from './TodoListItem';


const TodoList: React.FC<ToDoList> = ({ tasks, toggleTodo }) => {
  return (
    <ul>
      {tasks.map((todo) => (
        <TodoListItem key={todo.text} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </ul>
  );
};

export default TodoList