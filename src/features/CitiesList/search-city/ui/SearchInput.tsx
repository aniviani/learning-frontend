import type { ChangeEvent, FC } from 'react';

interface IProps {
  searchValue: string;
  changeSearchValue: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const SearchInput: FC<IProps> = ({ searchValue, changeSearchValue }) => {
  return (
    <input
      type="text"
      placeholder="поиск города"
      value={searchValue}
      onChange={changeSearchValue}
    />
  );
};
