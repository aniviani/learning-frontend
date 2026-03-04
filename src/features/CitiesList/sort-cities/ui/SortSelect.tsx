import type { SetStateAction } from 'react';
import { SortType } from '../types/SortType.ts';

interface IParams {
  sort: SortType;
  setSort: (value: SetStateAction<SortType>) => void;
}

export const SortSelect = ({ sort, setSort }: IParams) => {
  return (
    <select
      value={sort}
      onChange={(event) => setSort(event.target.value as SortType)}
    >
      <option value="asc">от А до Я</option>
      <option value="desc">от Я до А</option>
    </select>
  );
};
