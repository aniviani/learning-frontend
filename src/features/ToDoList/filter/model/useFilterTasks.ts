import { useState, type ChangeEvent } from 'react';
import type { TTask } from '../../tasks.ts';
import { filterTasks } from '../utils/filterTasks.ts';

export enum TaskStatus {
  DONE = 'DONE',
  NOT_DONE = 'NOT_DONE',
  ALL = 'ALL',
}

interface IParams {
  tasks: TTask[];
}

interface IResult {
  filter: TaskStatus;
  filteredTasks: TTask[];
  handleFilterChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

export const useFilterTasks = ({ tasks }: IParams): IResult => {
  const [filter, setFilter] = useState<TaskStatus>(TaskStatus.ALL);
  const filteredTasks = filterTasks({ filter, tasks });

  const handleFilterChange: IResult['handleFilterChange'] = (event) => {
    setFilter(event.target.value as TaskStatus);
  };

  return { filter, filteredTasks, handleFilterChange };
};
