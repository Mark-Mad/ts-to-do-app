interface Task {
    id:number
    text: string;
    complete: boolean;
  }

  type ToggleTask = (selectedTodo: Task) => void;

  type AddFn = (text: string, id: number) => void;

  type RemoveFn = (id: number) => void;

  interface Props {
      addTodo: AddFn; 
  }
 

interface ListItem {
  todo: Task;
  toggleTodo: ToggleTask; 
  removeTodo: RemoveFn;
}

interface ToDoList {
  tasks: Task[];
  toggleTodo: ToggleTask;
  removeTodo: RemoveFn
}