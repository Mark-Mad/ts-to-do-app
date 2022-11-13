interface Task {
    text: string;
    complete: boolean;
  }

  type ToggleTask = (selectedTodo: Task) => void;

  type AddFn = (text: string) => void;

  interface Props {
      addTodo: AddFn;
}

interface ListItem {
  todo: Task;
  toggleTodo: ToggleTask;
}

interface ToDoList {
  tasks: Task[];
  toggleTodo: ToggleTask;
}