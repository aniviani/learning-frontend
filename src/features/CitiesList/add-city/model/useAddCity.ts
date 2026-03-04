import { type SetStateAction } from 'react';

interface IParams {
  cities: string[];
  setCities: (value: SetStateAction<string[]>) => void;
}

interface IResult {
  addCity: (params: { addedCity: string }) => void;
}

export const useAddCity = ({ cities, setCities }: IParams): IResult => {
  const addCity = (params: { addedCity: string }) => {
    const newCities = [...cities, params.addedCity];
    setCities(newCities);
  };

  return { addCity };
};
