import { type ChangeEvent, useState } from 'react';
import type { TTask } from '../../tasks.ts';
import { searchTasks } from '../utils/searchTasks.ts';

interface IParams {
  tasks: TTask[];
}

interface IResult {
  searchValue: string;
  searchedTasks: TTask[];
  handleSearchChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const useSearchTasks = ({ tasks }: IParams): IResult => {
  const [searchValue, setSearchValue] = useState<string>('');

  const searchedTasks = searchTasks({ search: searchValue, tasks });

  const handleSearchChange: IResult['handleSearchChange'] = (event) => {
    setSearchValue(event.target.value);
  };

  return { searchedTasks, searchValue, handleSearchChange };
};
