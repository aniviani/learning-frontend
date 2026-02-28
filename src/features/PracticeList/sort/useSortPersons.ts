import { useState, type ChangeEventHandler } from 'react';
import { SortType } from '../sortType.ts';
import { sortPersons } from '../utils/sortPersons.ts';
import type { IPeople } from '../PracticeList.tsx';

interface IParams {
  searchedPersons: IPeople[];
}

interface IResult {
  sort: SortType;
  sortedPerson: IPeople[];
  changeSort: ChangeEventHandler<HTMLSelectElement>;
}

export const useSortPersons = ({ searchedPersons }: IParams): IResult => {
  const [sort, setSort] = useState<SortType>(SortType.ASC);

  const changeSort: ChangeEventHandler<HTMLSelectElement> = (event) => {
    setSort(event.target.value as SortType);
  };

  const sortedPerson = sortPersons({ sort, people: searchedPersons });

  return { sort, sortedPerson, changeSort };
};
