import { SortType } from '../types/SortType.ts';

interface IParams {
  sort: SortType;
  numbers: number[];
}

export const sortNumbers = ({ sort, numbers }: IParams): number[] => {
  if (sort === SortType.ASC) {
    return numbers.toSorted((previousElement, nextElement) => {
      if (previousElement < nextElement) {
        return -1;
      }

      if (nextElement < previousElement) {
        return 1;
      }

      return 0;
    });
  }

  return numbers.toSorted((previousElement, nextElement) => {
    if (previousElement < nextElement) {
      return 1;
    }

    if (nextElement < previousElement) {
      return -1;
    }
    return 0;
  });
};
