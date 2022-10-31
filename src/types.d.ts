interface Task {
    text: string;
    complete: boolean;
  }

  type ToggleTask = (selectedTodo: Task) => void;

  type AddFn = (text: string) => void;

  interface Props {
      addTodo: AddFn;
}

interface Props2 {
  todo: Task;
  toggleTodo: ToggleTask;
}