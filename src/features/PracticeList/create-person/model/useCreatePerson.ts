import type { SetStateAction } from 'react';
import { type IPeople } from '../../PracticeList';

interface IParams {
  people: IPeople[];
  setPeople: (value: SetStateAction<IPeople[]>) => void;
}

interface IResult {
  createPerson: (params: { name: string; age: number }) => void;
}

export const useCreatePerson = ({ people, setPeople }: IParams): IResult => {
  const createPerson = (params: { name: string; age: number }) => {
    const peopleAfterSubmit = [
      ...people,
      { id: crypto.randomUUID(), name: params.name, age: params.age },
    ];
    setPeople(peopleAfterSubmit);
  };

  return { createPerson };
};
