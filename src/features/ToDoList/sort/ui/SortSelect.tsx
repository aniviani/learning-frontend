import { SortType } from '../model/useSortTasks.ts';
import type { ChangeEvent } from 'react';

interface IParams {
  sort: SortType;
  handleSortChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

export const SortSelect = ({ sort, handleSortChange }: IParams) => {
  return (
    <select
      value={sort}
      onChange={handleSortChange}
      name="select"
    >
      <option value={SortType.ASC}>от А до Я</option>
      <option value={SortType.DESC}>от Я до А</option>
    </select>
  );
};
