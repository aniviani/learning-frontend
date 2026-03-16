import type { SetStateAction } from 'react';
import { type IPeople } from '../../PracticeList.tsx';

interface IParams {
  people: IPeople[];
  setPeople: (value: SetStateAction<IPeople[]>) => void;
}

interface IResult {
  handleDelete: (params: { id: string }) => void;
}

export const useDeletePerson = ({ people, setPeople }: IParams): IResult => {
  const handleDelete = (params: { id: string }) => {
    const personAfterDelete = people.filter(
      (person) => person.id !== params.id,
    );
    setPeople(personAfterDelete);
  };
  return { handleDelete };
};
