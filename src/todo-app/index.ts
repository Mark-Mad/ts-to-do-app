import { print } from './text-helpers.js';
import { Person } from './person.js';

console.log('» index.ts is running');
print('Tasks...');

let person = new Person('Bob', 34);
console.log(person.getGreeting());
