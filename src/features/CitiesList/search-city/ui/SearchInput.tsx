import type { ChangeEvent } from 'react';

interface IParams {
  searchValue: string;
  changeSearchValue: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const SearchInput = ({ searchValue, changeSearchValue }: IParams) => {
  return (
    <input
      type="text"
      placeholder="поиск города"
      value={searchValue}
      onChange={changeSearchValue}
    />
  );
};
