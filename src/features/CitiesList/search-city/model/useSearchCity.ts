import { type ChangeEvent, type ChangeEventHandler, useState } from 'react';

interface IParams {
  searchCities: (params: { searchValue: string; cities: string[] }) => string[];
  sortedCities: string[];
}

interface IResult {
  searchedCities: string[];
  changeSearchValue: (event: ChangeEvent<HTMLInputElement>) => void;
  searchValue: string;
}

export const useSearchCity = ({
  searchCities,
  sortedCities,
}: IParams): IResult => {
  const [searchValue, setSearchValue] = useState<string>('');
  const searchedCities = searchCities({ searchValue, cities: sortedCities });
  const changeSearchValue: ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearchValue(event.target.value);
  };

  return { searchedCities, changeSearchValue, searchValue };
};
