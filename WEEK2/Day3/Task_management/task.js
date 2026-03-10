 // TODO: Import validator functions
 import {validateTitle,validatePriority,validateDueDate} from './validator.js';
                    
                    let tasks = [];
                    
                    // 1. Add new task
                    function addTask(title, priority, dueDate) {
                      // Validate using imported functions
                      if(validateDueDate(dueDate)&& validatePriority(priority)&& validateTitle(title)){
                        tasks.push({title,priority,dueDate});
                        return "Task added";
                      }
                      // If valid, add to tasks array
                      return "Error";
                    }
                    
                    // 2. Get all tasks
                    function getAllTasks() {
                      // Return all tasks
                      return tasks;
                    }
                    
                    // 3. Mark task as complete
                    function completeTask(taskId) {
                      // Find task and mark as complete
                      tasks.splice(taskId,1);
                      
                    }

                  // Export functions
                  export {addTask,getAllTasks,completeTask};