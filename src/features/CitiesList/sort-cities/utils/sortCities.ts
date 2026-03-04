import { SortType } from '../types/SortType.ts';

interface IParams {
  cities: string[];
  sort: SortType;
}

export const sortCities = ({ sort, cities }: IParams): string[] => {
  if (sort === SortType.ASC) {
    return cities.toSorted((previousElement, nextElement) => {
      return previousElement
        .toLowerCase()
        .localeCompare(nextElement.toLowerCase());
    });
  }
  return cities.toSorted((previousElement, nextElement) => {
    return nextElement
      .toLowerCase()
      .localeCompare(previousElement.toLowerCase());
  });
};
