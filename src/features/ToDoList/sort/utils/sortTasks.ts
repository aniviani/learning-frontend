import type { TTask } from '../../tasks.ts';
import { SortType } from '../model/useSortTasks.ts';

interface IParams {
  sort: SortType;
  tasks: TTask[];
}

export const sortTasks = ({ sort, tasks }: IParams): TTask[] => {
  if (sort === SortType.ASC) {
    return tasks.toSorted((previousElement, nextElement) => {
      if (previousElement.name < nextElement.name) {
        return -1;
      }
      if (previousElement.name > nextElement.name) {
        return 1;
      }
      return 0;
    });
  }

  return tasks.toSorted((previousElement, nextElement) => {
    if (previousElement.name < nextElement.name) {
      return 1;
    }
    if (previousElement.name > nextElement.name) {
      return -1;
    }
    return 0;
  });
};
