import { type SetStateAction } from 'react';

interface IParams {
  cities: string[];
  setCities: (value: SetStateAction<string[]>) => void;
}

interface IResult {
  handleCityDelete: (params: { city: string }) => void;
}

export const useDeleteCity = ({ cities, setCities }: IParams): IResult => {
  const handleCityDelete = (params: { city: string }) => {
    const citiesAfterDelete = cities.filter((city) => city !== params.city);
    setCities(citiesAfterDelete);
  };
  return { handleCityDelete };
};
