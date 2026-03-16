import {useEffect, useState} from 'react';
import type { IPlanet } from '../IPlanet.ts';
import { planetsApi } from '../api/planetsApi.ts';

interface ILoadingResult {
  isLoading: true;
  planets: null;
  error: null;
}

interface IErrorResult {
  isLoading: false;
  planets: null;
  error: Error;
}

interface ISuccessResult {
  isLoading: false;
  planets: IPlanet[];
  error: null;
}

type TResult = ILoadingResult | IErrorResult | ISuccessResult

export const usePlanetsQuery = (): TResult => {
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

  useEffect(() => {
    void loadPlanets()
  }, []);

  return { isLoading, planets, error } as TResult;
};
