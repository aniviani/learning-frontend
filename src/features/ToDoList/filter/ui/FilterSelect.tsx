import { TaskStatus } from '../model/useFilterTasks.ts';
import type { ChangeEvent } from 'react';

interface IParams {
  filter: TaskStatus;
  handleFilterChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

export const FilterSelect = ({ filter, handleFilterChange }: IParams) => {
  return (
    <select
      value={filter}
      onChange={handleFilterChange}
      name="select"
    >
      <option value={TaskStatus.ALL}>все задачи</option>
      <option value={TaskStatus.DONE}>готовые</option>
      <option value={TaskStatus.NOT_DONE}>не готовые</option>
    </select>
  );
};
