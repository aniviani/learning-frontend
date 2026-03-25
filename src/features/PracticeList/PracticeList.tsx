import { useState } from 'react';
import { Person } from './ui/Person';
import { CreatePersonForm } from './create-person/ui/CreatePersonForm.tsx';
import { useSortPersons } from './sort-persons/model/useSortPersons.ts';
import { useSearchPerson } from './search-persons/model/useSearchPerson.ts';
import { useDeletePerson } from './delete-person/model/useDeletePerson.ts';
import { useCreatePerson } from './create-person/model/useCreatePerson.ts';
import { SortSelect } from './sort-persons/ui/SortSelect.tsx';
import { SearchInput } from './search-persons/ui/SearchInput.tsx';

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

  const { changeSearchValue, searchValue, searchedPersons } = useSearchPerson({
    people,
  });
  const { handleDelete } = useDeletePerson({ people, setPeople });
  const { createPerson } = useCreatePerson({ people, setPeople });
  const { sort, sortedPerson, changeSort } = useSortPersons({
    searchedPersons,
  });

  return (
    <div>
      <div>PracticeList</div>

      <SearchInput
        searchValue={searchValue}
        changeSearchValue={changeSearchValue}
      />
      <CreatePersonForm onSubmit={createPerson} />
      <SortSelect
        sort={sort}
        changeSort={changeSort}
      />

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
