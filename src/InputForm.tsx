import React, { useState } from "react";

const InputForm: React.FC<Props> = ({ addTodo }) => {
  const [text, setText] = useState("");

  return (
    <form className="input-form">
      <input
        className="input-task"
        placeholder="hello"
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <span>&nbsp;&nbsp;</span>
      <button className="btn-hover btn-color"
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

export default InputForm