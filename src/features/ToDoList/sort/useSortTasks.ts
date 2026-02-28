import type { TTask } from '../tasks';
import { type ChangeEvent, useState } from 'react';
import { sortTasks } from './sortTasks';

export enum SortType {
  ASC = 'ASC',
  DESC = 'DESC',
}

interface IParams {
  tasks: TTask[];
}

interface IResult {
  sort: SortType;
  sortedTasks: TTask[];
  handleSortChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

export const useSortTasks = ({ tasks }: IParams): IResult => {
  const [sort, setSort] = useState<SortType>(SortType.ASC);

  const sortedTasks = sortTasks({ sort, tasks });

  const handleSortChange: IResult['handleSortChange'] = (event) => {
    setSort(event.target.value as SortType);
  };

  return { sort, sortedTasks, handleSortChange };
};
