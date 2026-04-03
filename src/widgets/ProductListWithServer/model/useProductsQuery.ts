import { useEffect, useState } from 'react';
import { useProductContext } from './productsContext.tsx';
import { productsApi } from '../api/productsApi.ts';
import type { IProductWithServer } from '../IProductWithServer.ts';

interface ILoadingResult {
  isLoading: true;
  error: null;
  products: null;
}

interface IErrorResult {
  isLoading: false;
  error: Error;
  products: null;
}

interface ISuccessResult {
  isLoading: false;
  error: null;
  products: IProductWithServer[];
}

type TResult = ILoadingResult | IErrorResult | ISuccessResult;

export const useProductsQuery = (): TResult => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { products, setProducts } = useProductContext();
  const [error, setError] = useState<Error | null>(null);

  const loadProducts = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const productsFromServer = await productsApi.getAll();
      setProducts(productsFromServer);
    } catch (error) {
      setError(error as Error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    void loadProducts();
  }, []);

  return { isLoading, products, error, setProducts } as TResult;
};
