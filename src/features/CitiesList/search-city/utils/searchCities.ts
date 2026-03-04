export const searchCities = (params: {
  searchValue: string;
  cities: string[];
}): string[] => {
  const searchedCities = params.cities.filter((city) =>
    city.includes(params.searchValue),
  );
  return searchedCities;
};
