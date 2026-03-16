import { type ChangeEvent, type ChangeEventHandler, useState } from 'react';
import { SortType } from '../types/SortType.ts';

interface IResult {
  sort: SortType;
  changeSort: (event: ChangeEvent<HTMLSelectElement>) => void;
}

export const useSortPersons = (): IResult => {
  const [sort, setSort] = useState<SortType>(SortType.ASC);
  const changeSort: ChangeEventHandler<HTMLSelectElement> = (event) => {
    setSort(event.target.value as SortType);
  };
  return { sort, changeSort };
};
