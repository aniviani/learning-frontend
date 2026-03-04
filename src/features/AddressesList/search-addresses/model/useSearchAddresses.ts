import { searchAddresses } from '../utils/searchAddresses.ts';
import { type Dispatch, type SetStateAction, useState } from 'react';
import type { TAddress } from '../../sort-addresses/utils/sortAddresses.ts';

interface IParams {
  addresses: TAddress[];
}

interface IResult {
  setSearch: Dispatch<SetStateAction<string>>;
  search: string;
  searchedAddresses: TAddress[];
}

export const useSearchAddresses = ({ addresses }: IParams): IResult => {
  const [search, setSearch] = useState<string>('');
  const searchedAddresses = searchAddresses({
    search,
    addresses,
  });
  return { setSearch, search, searchedAddresses };
};
