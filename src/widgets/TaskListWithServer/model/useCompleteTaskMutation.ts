import type { Dispatch, SetStateAction } from 'react';
import type { ITaskWithServer } from '../ITaskWithServer.ts';
import { tasksApi } from '../api/tasksApi.ts';

interface IParams {
  setTasks: Dispatch<SetStateAction<ITaskWithServer[] | null>>;
}

interface IResult {
  completeTask: (params: { id: string; completed: boolean }) => void;
}

export const useCompleteTaskMutation = ({ setTasks }: IParams): IResult => {
  const completeTask: IResult['completeTask'] = ({ id, completed }) => {
    setTasks((previousTasks) => {
      if (previousTasks === null) {
        throw new Error('невозможно выполнить задачу, тк previousTasks = null');
      }
      return previousTasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed };
        }
        return task;
      });
    });

    void tasksApi.change({ id, completed });
  };
  return { completeTask };
};
