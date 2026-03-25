import type { IFilm } from '../IFilm.ts';

export const filmsApi = {
  get: async (): Promise<IFilm[]> => {
    const response = await fetch('https://swapi.dev/api/films', {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const data = await response.json();

    return data.results as IFilm[];
  },
};
