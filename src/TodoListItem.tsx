import React from 'react';

const TodoListItem: React.FC<Props2> = ({ todo, toggleTodo }) => {
  return (
    <li>
      <label
        style={{ textDecoration: todo.complete ? 'line-through' : undefined }}
      >

{todo.text}
        <input
          className='input-checkbox'
          type="checkbox"
          checked={todo.complete}
          onClick={() => {
            toggleTodo(todo);
          }}
        />{' '}
        
      </label>
    </li>
  );
};

export default TodoListItem