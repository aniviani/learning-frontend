import type { IStarShip } from '../IStarShip.ts';

export const starShipsApi = {
  get: async (): Promise<IStarShip[]> => {
    const response = await fetch('https://swapi.dev/api/starships', {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const data = await response.json();

    return data.results as IStarShip[];
  },
};
