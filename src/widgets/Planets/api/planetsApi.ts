import type { IPlanet } from '../IPlanet.ts';

export const planetsApi = {
  get: async (): Promise<IPlanet[]> => {
    const response = await fetch('https://swapi.dev/api/planets', {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const data = await response.json();

    return data.results as IPlanet[];
  },
};
