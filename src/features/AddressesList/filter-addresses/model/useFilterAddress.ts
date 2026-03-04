import { type Dispatch, type SetStateAction, useState } from 'react';
import { getFilteredAddresses } from '../utils/getFiltredAddresses.ts';
import type { TAddress } from '../../sort-addresses/utils/sortAddresses.ts';

interface IParams {
  sortedAddresses: TAddress[];
}

interface IResult {
  filter: 'Россия' | 'Франция' | 'Италия' | 'all';
  setFilter: Dispatch<SetStateAction<'Россия' | 'Франция' | 'Италия' | 'all'>>;
  filteredAddresses: TAddress[];
}

export const useFilterAddress = ({ sortedAddresses }: IParams): IResult => {
  const [filter, setFilter] = useState<'Россия' | 'Франция' | 'Италия' | 'all'>(
    'all',
  );
  const filteredAddresses = getFilteredAddresses({
    filter,
    addresses: sortedAddresses,
  });

  return { filter, setFilter, filteredAddresses };
};
