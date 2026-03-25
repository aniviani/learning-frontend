import { useEffect, useState } from 'react';
import type { IFilm } from '../IFilm.ts';
import { filmsApi } from '../api/filmsApi.ts';

interface ILoadingResult {
  isLoading: true;
  films: null;
  error: null;
}

interface IErrorResult {
  isLoading: false;
  films: null;
  error: Error;
}

interface ISuccessResult {
  isLoading: false;
  films: IFilm[];
  error: null;
}

type TResult = ILoadingResult | IErrorResult | ISuccessResult;

export const useFilmsQuery = (): TResult => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [films, setFilms] = useState<IFilm[] | null>(null);
  const [error, setError] = useState<Error | null>(null);

  const loadFilms = async () => {
    try {
      setError(null);
      setIsLoading(true);
      const filmsFromServer = await filmsApi.get();
      setFilms(filmsFromServer);
    } catch (error) {
      setError(error as Error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    void loadFilms();
  }, []);

  return { isLoading, films, error } as TResult;
};
