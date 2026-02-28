import { type Dispatch, type SetStateAction } from 'react';
import { type TTask } from '../tasks';

interface IParams {
  setTasks: Dispatch<SetStateAction<TTask[]>>;
}

interface IResult {
  deleteTask: (params: { id: string }) => void;
}

export const useDeleteTask = ({ setTasks }: IParams): IResult => {
  const deleteTask: IResult['deleteTask'] = ({ id }) => {
    setTasks((previousTasks) => {
      return previousTasks.filter((task) => task.id !== id);
    });
  };

  return { deleteTask };
};
