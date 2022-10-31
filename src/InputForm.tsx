import React, { useState } from "react";

export const InputForm: React.FC<Props> = ({ addTodo }) => {
  const [text, setText] = useState("");

  return (
    <form className="form-control">
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <span>   </span>
      <button className="badge rounded-pill text-bg-secondary"
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          if (text) {
            addTodo(text);
            setText("");
          }
        }}
      >
        Add New Task
      </button>
    </form>
  );
};
