import { type ChangeEventHandler, useState } from 'react';
import { PersonCard } from '../PersonCard/PersonCard';
import { CreatePersonForm } from './create-person/ui/CreatePersonForm.tsx';
import { searchPersons } from './search-person/utils/searchPerson.ts';
import { sortPersons } from './sort-persons/utils/sortPersons.ts';
import { SearchInput } from './search-person/ui/SearchInput.tsx';
import { SortSelect } from './sort-persons/ui/SortSelect.tsx';
import { SortType } from './sort-persons/types/SortType.ts';

export interface IPerson {
  id: string;
  firstname: string;
  name: string;
  lastname: string;
  birthday: string;
}

export const PersonCardList = () => {
  const [people, setPeople] = useState<IPerson[]>([
    {
      id: crypto.randomUUID(),
      firstname: 'Кренделев',
      name: 'Роман',
      lastname: 'Николаевич',
      birthday: '08.02.2002',
    },
    {
      id: crypto.randomUUID(),
      firstname: 'Анисимова',
      name: 'Анастасия',
      lastname: 'Андреевна',
      birthday: '12.03.2004',
    },
  ]);

  const [searchValue, setSearchValue] = useState<string>('');
  const [sort, setSort] = useState<SortType>(SortType.ASC);

  const handleDelete = (params: {
    id: string;
    firstname: string;
    name: string;
    lastname: string;
    birthday: string;
  }) => {
    console.log(
      `нажата кнопка удалить.. ${params.firstname} ${params.name} ${params.lastname} ${params.birthday}`,
    );

    const peopleAfterDelete = people.filter(
      (person) => person.id !== params.id,
    );
    setPeople(peopleAfterDelete);
  };

  const handleChange = (params: {
    id: string;
    firstname: string;
    name: string;
    lastname: string;
    birthday: string;
  }) => {
    console.log(
      `нажата кнопка редактировать.. ${params.firstname} ${params.name} ${params.lastname} ${params.birthday}`,
    );
  };

  const createPerson = (params: {
    firstname: string;
    name: string;
    lastname: string;
    birthday: string;
  }) => {
    const peopleAfterSubmit = [
      ...people,
      {
        id: crypto.randomUUID(),
        firstname: params.firstname,
        name: params.name,
        lastname: params.lastname,
        birthday: params.birthday,
      },
    ];
    setPeople(peopleAfterSubmit);
  };

  const changeSearchValue: ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearchValue(event.target.value);
  };

  const changeSort: ChangeEventHandler<HTMLSelectElement> = (event) => {
    setSort(event.target.value as SortType);
  };

  const searchedPersons = searchPersons({
    searchFirstname: searchValue,
    people,
  });
  const sortedPersons = sortPersons({ sort, people: searchedPersons });

  return (
    <>
      <SearchInput
        searchValue={searchValue}
        changeSearchValue={changeSearchValue}
      />
      <SortSelect
        sort={sort}
        changeSort={changeSort}
      />

      <CreatePersonForm onSubmit={createPerson} />

      <div>
        {sortedPersons.map((person) => (
          <PersonCard
            key={person.id}
            id={person.id}
            firstname={person.firstname}
            name={person.name}
            lastname={person.lastname}
            birthday={person.birthday}
            onDelete={handleDelete}
            onChange={handleChange}
          />
        ))}
      </div>
    </>
  );
};
