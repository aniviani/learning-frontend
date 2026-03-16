import { type ChangeEventHandler, type ChangeEvent, useState } from 'react';
import type { IPeople } from '../../PracticeList.tsx';

interface IParams {
  people: IPeople[];
}

interface IResult {
  changeSearchValue: (event: ChangeEvent<HTMLInputElement>) => void;
  searchedPersons: IPeople[];
  searchValue: string;
}

export const useSearchPerson = ({ people }: IParams): IResult => {
  const [searchValue, setSearchValue] = useState<string>('');

  const changeSearchValue: ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearchValue(event.target.value);
  };

  const searchedPersons = people.filter((person) =>
    person.name.includes(searchValue),
  );

  return { changeSearchValue, searchValue, searchedPersons };
};
