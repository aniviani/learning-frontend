import { SortType } from '../../PersonCardList.tsx';
import type { ChangeEvent } from 'react';

interface IParams {
  sort: SortType;
  changeSort: (event: ChangeEvent<HTMLSelectElement>) => void;
}

export const SortSelect = ({ sort, changeSort }: IParams) => {
  return (
    <select
      value={sort}
      onChange={changeSort}
    >
      <option value={SortType.ASC}>от А до Я</option>
      <option value={SortType.DESC}>от Я до А</option>
    </select>
  );
};
