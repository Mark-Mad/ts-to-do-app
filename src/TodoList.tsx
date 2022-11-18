import React from 'react';
import TodoListItem  from './TodoListItem';


const TodoList: React.FC<ToDoList> = ({ tasks, toggleTodo, removeTodo }) => {
  return (
    <ul>
      {tasks.map((todo) => (
        <TodoListItem key={todo.text} todo={todo} toggleTodo={toggleTodo} removeTodo={removeTodo}/>
      ))}
    </ul>
  );
};

export default TodoList