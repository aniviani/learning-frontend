import { type IPeople } from '../../PracticeList.tsx';
import { SortType } from '../types/sortType.ts';

interface IParams {
  sort: SortType;
  people: IPeople[];
}

export const sortPersons = ({ sort, people }: IParams) => {
  if (sort === SortType.ASC) {
    return people.toSorted((previousValue, nextValue) => {
      if (previousValue.age < nextValue.age) {
        return -1;
      }
      if (previousValue.age > nextValue.age) {
        return 1;
      }
      return 0;
    });
  }

  return people.toSorted((previousValue, nextValue) => {
    if (previousValue.age < nextValue.age) {
      return 1;
    }
    if (previousValue.age > nextValue.age) {
      return -1;
    }
    return 0;
  });
};
