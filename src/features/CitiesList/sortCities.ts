interface IParams {
  cities: string[];
  sort: 'asc' | 'desc';
}

export const sortCities = ({ sort, cities }: IParams): string[] => {
  if (sort === 'asc') {
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
