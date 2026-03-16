import type { ChangeEvent } from 'react';

interface IParams {
  searchValue: string;
  handleSearchChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const SearchInput = ({ searchValue, handleSearchChange }: IParams) => {
  return (
    <input
      type="text"
      placeholder="поиск"
      value={searchValue}
      onChange={handleSearchChange}
    />
  );
};
