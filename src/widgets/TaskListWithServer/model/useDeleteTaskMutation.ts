import type { Dispatch, SetStateAction } from 'react';
import type { ITaskWithServer } from '../ITaskWithServer.ts';
import { tasksApi } from '../api/tasksApi.ts';

interface IParams {
  setTasks: Dispatch<SetStateAction<ITaskWithServer[] | null>>;
}

interface IResult {
  deleteTask: (params: { id: string }) => void;
}

export const useDeleteTaskMutation = ({ setTasks }: IParams): IResult => {
  const deleteTask: IResult['deleteTask'] = ({ id }) => {
    setTasks((previousTasks) => {
      if (previousTasks === null) {
        throw new Error(`невозможно удалить задачу, тк previousTasks = null`);
      }
      return previousTasks.filter((task) => task.id !== id);
    });

    void tasksApi.delete(id);
  };

  return { deleteTask };
};
