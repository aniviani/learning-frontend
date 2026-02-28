import { useState, type ChangeEventHandler } from 'react';
import { Person } from './ui/Person';
import { sortPersons } from './utils/sortPersons';
import { CreatePersonForm } from './ui/CreatePersonForm';
import { SortType } from './sortType.ts';

export interface IPeople {
  id: string;
  name: string;
  age: number;
}

export const PracticeList = () => {
  const [people, setPeople] = useState<IPeople[]>([
    {
      id: crypto.randomUUID(),
      name: 'Кирилл',
      age: 31,
    },
    {
      id: crypto.randomUUID(),
      name: 'Лилиана',
      age: 29,
    },
  ]);

  const [searchValue, setSearchValue] = useState<string>('');
  const [sort, setSort] = useState<SortType>(SortType.ASC);

  const changeSearchValue: ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearchValue(event.target.value);
  };

  const searchedPersons = people.filter((person) =>
    person.name.includes(searchValue),
  );

  const handleDelete = (params: { id: string }) => {
    const personAfterDelete = people.filter(
      (person) => person.id !== params.id,
    );
    setPeople(personAfterDelete);
  };

  const changeSort: ChangeEventHandler<HTMLSelectElement> = (event) => {
    setSort(event.target.value as SortType);
  };

  const sortedPerson = sortPersons({ sort, people: searchedPersons });

  const createPerson = (params: { name: string; age: number }) => {
    const peopleAfterSubmit = [
      ...people,
      { id: crypto.randomUUID(), name: params.name, age: params.age },
    ];
    setPeople(peopleAfterSubmit);
  };

  return (
    <div>
      <div>PracticeList</div>

      <input
        type="text"
        placeholder="введите имя.."
        value={searchValue}
        onChange={changeSearchValue}
      />

      <CreatePersonForm onSubmit={createPerson} />

      <select
        value={sort}
        onChange={changeSort}
        name="select"
      >
        <option value={SortType.ASC}>по возрастанию</option>
        <option value={SortType.DESC}>по убыванию</option>
      </select>
      <div>
        {sortedPerson.map((person) => (
          <Person
            key={person.id}
            id={person.id}
            name={person.name}
            age={person.age}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};
