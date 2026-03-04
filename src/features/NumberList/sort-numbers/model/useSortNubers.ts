import { type Dispatch, type SetStateAction, useState } from 'react';
import { SortType } from '../types/SortType.ts';
import { sortNumbers } from '../utils/sortNumbers.ts';

interface IParams {
  numbers: number[];
}

interface IResult {
  sort: SortType;
  sortedNumbers: number[];
  setSort: Dispatch<SetStateAction<SortType>>;
}
export const useSortNumbers = ({ numbers }: IParams): IResult => {
  const [sort, setSort] = useState<SortType>(SortType.ASC);

  const sortedNumbers = sortNumbers({ sort, numbers });

  return { sort, sortedNumbers, setSort };
};
