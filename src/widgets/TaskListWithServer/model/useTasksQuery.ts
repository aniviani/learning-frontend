import { useEffect, useState } from 'react';
import type { ITaskWithServer } from '../ITaskWithServer.ts';
import { tasksApi } from '../api/tasksApi.ts';

interface ILoadingResult {
  isLoading: true;
  error: null;
  tasks: null;
}

interface IErrorResult {
  isLoading: false;
  error: Error;
  tasks: null;
}

interface ISuccessResult {
  isLoading: false;
  error: null;
  tasks: ITaskWithServer[];
}

type TResult = ILoadingResult | IErrorResult | ISuccessResult;

export const useTasksQuery = (): TResult => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [tasks, setTasks] = useState<ITaskWithServer[] | null>(null);
  const [error, setError] = useState<Error | null>(null);

  const loadTasks = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const tasksFromServer = await tasksApi.getAll();
      setTasks(tasksFromServer);
    } catch (error) {
      setError(error as Error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    void loadTasks();
  }, []);

  return { isLoading, error, tasks } as TResult;
};
