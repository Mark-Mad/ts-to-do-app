interface Task {
    text: string;
    complete: boolean;
  }

  type ToggleTask = (selectedTodo: Task) => void;

  type AddFn = (text: string) => void;