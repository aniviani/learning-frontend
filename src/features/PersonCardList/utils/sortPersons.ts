import { SortType, type IPerson } from '../PersonCardList';

interface IParams {
  sort: SortType;
  people: IPerson[];
}

export const sortPersons = ({ sort, people }: IParams): IPerson[] => {
  if (sort === SortType.ASC) {
    return people.toSorted((previousValue, nextValue) => {
      if (previousValue.firstname < nextValue.firstname) {
        return -1;
      }

      if (previousValue.firstname > nextValue.firstname) {
        return 1;
      }
      return 0;
    });
  }

  return people.toSorted((previousValue, nextValue) => {
    if (previousValue.firstname > nextValue.firstname) {
      return -1;
    }

    if (previousValue.firstname < nextValue.firstname) {
      return 1;
    }
    return 0;
  });
};
