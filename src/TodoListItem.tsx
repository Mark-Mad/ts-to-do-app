import React from 'react';

export const TodoListItem: React.FC<Props2> = ({ todo, toggleTodo }) => {
  return (
    <li>
      <label
        style={{ textDecoration: todo.complete ? 'line-through' : undefined }}
      >
        <input
          type="checkbox"
          checked={todo.complete}
          onClick={() => {
            toggleTodo(todo);
          }}
        />{' '}
        {todo.text}
      </label>
    </li>
  );
};