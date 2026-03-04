import { type Dispatch, type SetStateAction, useState } from 'react';
import { SortType } from '../types/SortType.ts';
import { sortCities } from '../utils/sortCities.ts';

interface IParams {
  cities: string[];
}

interface IResult {
  sort: SortType;
  setSort: Dispatch<SetStateAction<SortType>>;
  sortedCities: string[];
}

export const useSortCity = ({ cities }: IParams): IResult => {
  const [sort, setSort] = useState<SortType>(SortType.ASC);
  const sortedCities = sortCities({ sort, cities });

  return { sort, setSort, sortedCities };
};
