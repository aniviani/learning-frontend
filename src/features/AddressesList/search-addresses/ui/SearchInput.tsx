import type { SetStateAction } from 'react';

interface IParams {
  search: string;
  setSearch: (value: SetStateAction<string>) => void;
}

export const SearchInput = ({ search, setSearch }: IParams) => {
  return (
    <input
      value={search}
      type="text"
      placeholder="поиск.."
      onChange={(event) => setSearch(event.target.value)}
    />
  );
};
