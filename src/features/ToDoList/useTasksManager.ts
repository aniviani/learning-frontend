import { useState } from 'react';
import { tasks as allTasks } from '../ToDoList/tasks';
import { type TTask } from './tasks.ts';

interface IResult {
  tasks: TTask[];
  deleteTask: (name: string) => void;
}

export const useTasksManager = (): IResult => {
  const [tasks, setTasks] = useState<TTask[]>(allTasks);

  const deleteTask: IResult['deleteTask'] = (name) => {
    setTasks(tasks.filter((task) => task.name !== name));
  };

  return { tasks, deleteTask };
};
