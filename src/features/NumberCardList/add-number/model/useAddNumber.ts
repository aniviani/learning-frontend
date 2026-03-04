import { type SetStateAction } from 'react';

interface IParams {
  numbers: number[];
  setNumbers: (value: SetStateAction<number[]>) => void;
}

interface IResult {
  addNumber: (params: { addedNumber: number }) => void;
}

export const useAddNumber = ({ numbers, setNumbers }: IParams): IResult => {
  const addNumber = (params: { addedNumber: number }) => {
    const newNumbers = [...numbers, params.addedNumber];

    setNumbers(newNumbers);
  };

  return { addNumber };
};
