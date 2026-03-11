import { useState } from 'react';
import type { IPlanet } from '../IPlanet.ts';
import { planetsApi } from '../api/planetsApi.ts';

interface IResult {
  isLoading: boolean;
  planets: IPlanet[] | null;
  loadPlanets: () => Promise<void>;
  error: Error | null;
}

export const usePlanetsQuery = (): IResult => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [planets, setPlanets] = useState<IPlanet[] | null>(null);
  const [error, setError] = useState<Error | null>(null);

  const loadPlanets = async () => {
    try {
      setError(null);
      setIsLoading(true);
      const planetsFromServer = await planetsApi.get();
      setPlanets(planetsFromServer);
    } catch (error) {
      setError(error as Error);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, planets, loadPlanets, error };
};
