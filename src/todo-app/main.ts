import { TodoItem } from './todoItem.js';
import { TodoCollection } from './todoCollection.js';

let todoList: TodoItem[] = [
  new TodoItem(1, 'Review types'),
  new TodoItem(2, 'Review loops'),
  new TodoItem(3, 'Review DOM & Events'),
  new TodoItem(4, 'Study async/await'),
];

let collection: TodoCollection = new TodoCollection('matthew', todoList);

// console.clear();
console.log(`${collection.userName}'s Todo List:`);
let newId: number = collection.addTodo('Go for a walk');
let todoItem: TodoItem = collection.getById(newId)!;
todoItem?.printDetails();
console.log('todoItem :>> ', JSON.stringify(todoItem));
console.log('todoItem :>> ', todoItem);

// collection.addTodo(todoItem);
