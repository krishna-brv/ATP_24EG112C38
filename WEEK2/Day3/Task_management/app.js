// TODO: Import task functions
import { addTask,getAllTasks,completeTask } from './task.js';
// Test your module system
// 1. Add some tasks
    console.log(addTask("College","high","26032026"));
    console.log(addTask("School","high","26032026"));
    console.log(addTask("Office","medium","26032026"));
// 2. Display all tasks
    console.log(getAllTasks());
// 3. Complete a task
   completeTask(1);
// 4. Display all tasks again
console.log(getAllTasks());