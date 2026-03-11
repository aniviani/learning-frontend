import { useState } from 'react';
import type { IStarShip } from '../IStarShip.ts';
import { starShipsApi } from '../api/starShipsApi.ts';

interface IResult {
  isLoading: boolean;
  starShips: IStarShip[] | null;
  loadStarShips: () => Promise<void>;
  error: Error | null;
}

export const useStarShipsQuery = (): IResult => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [starShips, setStarShips] = useState<IStarShip[] | null>(null);
  const [error, setError] = useState<Error | null>(null);

  const loadStarShips = async () => {
    try {
      setError(null);
      setIsLoading(true);
      const starShipsFromServer = await starShipsApi.get();
      setStarShips(starShipsFromServer);
    } catch (error) {
      setError(error as Error);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, starShips, loadStarShips, error };
};
