import { sortAddresses, type TAddress } from '../utils/sortAddresses.ts';
import { useState } from 'react';
import { SortType } from '../types/SortType.ts';
import type { Dispatch, SetStateAction } from 'react';

interface IParams {
  addresses: TAddress[];
}

interface IResult {
  setSort: Dispatch<SetStateAction<SortType>>;
  sort: SortType;
  sortedAddresses: TAddress[];
}

export const useSortAddresses = ({ addresses }: IParams): IResult => {
  const [sort, setSort] = useState<SortType>(SortType.ASC);
  const sortedAddresses = sortAddresses({ sort, addresses });

  return { setSort, sort, sortedAddresses };
};
