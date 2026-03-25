import { SortType } from '../types/SortType.ts';
import type { FC, SetStateAction } from 'react';

interface IProps {
  sort: SortType;
  setSort: (value: SetStateAction<SortType>) => void;
}

export const SortSelect: FC<IProps> = ({ sort, setSort }) => {
  return (
    <select
      value={sort}
      onChange={(event) => setSort(event.target.value as SortType)}
      name="select"
    >
      <option value="SortType.ASC">по возрастанию</option>
      <option value="SortType.DESC">по убыванию</option>
    </select>
  );
};
