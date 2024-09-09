import { ITask } from "@components";

// Save task in localstorage
export const saveToLocalStorage = (tasks: ITask[]) => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

// Load tasks from localstorage
export const loadFromLocalStorage = (): ITask[] => {
  const tasks = localStorage.getItem('tasks');
  return tasks ? JSON.parse(tasks) : [];
};

// Add task to list in localstorage
export const addTaskToLocalStorage = (newTask: ITask, currentList: ITask[]) => {
  const existingTasks = loadFromLocalStorage();
  const updatedTasks = [...existingTasks, newTask];
  saveToLocalStorage(updatedTasks);
  currentList.push(newTask);
};