import { useEffect, useState } from 'react';
import type { ITaskWithServer } from '../ITaskWithServer.ts';
import { tasksApi } from '../api/tasksApi.ts';

interface IParams {
  id: string;
}

interface ILoadingResult {
  isLoading: true;
  error: null;
  task: null;
}

interface IErrorResult {
  isLoading: false;
  error: Error;
  task: null;
}

interface ISuccessResult {
  isLoading: false;
  error: null;
  task: ITaskWithServer;
}

type TResult = ILoadingResult | IErrorResult | ISuccessResult;

export const useTaskQuery = (params: IParams): TResult => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [task, setTask] = useState<ITaskWithServer | null>(null);
  const [error, setError] = useState<Error | null>(null);

  const loadTask = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const taskFromServer = await tasksApi.getById(params.id);
      setTask(taskFromServer);
    } catch (error) {
      setError(error as Error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    void loadTask();
  }, []);

  return { isLoading, error, task } as TResult;
};
