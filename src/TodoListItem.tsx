import React from 'react';
import { MdDelete } from "react-icons/md";

const TodoListItem: React.FC<ListItem> = ({ todo, toggleTodo, removeTodo }) => {
  return (
    <li>
      <label style={{ textDecoration: todo.complete ? 'line-through' : undefined }} > {todo.text} </label>
      <div className="task-icons">
        <input type="checkbox" checked={todo.complete} onClick={() => { toggleTodo(todo); }} />
        <MdDelete onClick={() => removeTodo(todo.id)}/>
      </div>
    </li>
  );
};

export default TodoListItem