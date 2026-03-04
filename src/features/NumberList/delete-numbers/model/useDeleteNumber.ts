import type { SetStateAction } from 'react';

interface IParams {
  numbers: number[];
  setNumbers: (value: SetStateAction<number[]>) => void;
}

interface IResult {
  deleteNumber: (params: { number: number }) => void;
}

export const useDeleteNumber = ({ numbers, setNumbers }: IParams): IResult => {
  const deleteNumber = (params: { number: number }) => {
    const numberAfterDelete = numbers.filter(
      (number) => number !== params.number,
    );
    setNumbers(numberAfterDelete);
  };

  return { deleteNumber };
};
