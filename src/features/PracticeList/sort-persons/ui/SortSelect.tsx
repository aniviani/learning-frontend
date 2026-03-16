import { SortType } from '../types/sortType.ts';
import type { ChangeEventHandler, FC } from 'react';

interface IProps {
  sort: SortType;
  changeSort: ChangeEventHandler<HTMLSelectElement>;
}

export const SortSelect: FC<IProps> = ({ sort, changeSort }) => {
  return (
    <select
      value={sort}
      onChange={changeSort}
      name="select"
    >
      <option value={SortType.ASC}>по возрастанию</option>
      <option value={SortType.DESC}>по убыванию</option>
    </select>
  );
};
